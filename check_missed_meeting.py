# coding=utf-8
"""
check_missed_meeting.py — GitHub Actions 회의 누락 감지 및 백업 디스패처
- 정규 회의 시간(KST 05:37, 11:37, 17:37) 이후 1시간 이상 지났는데도
  회의가 열리지 않았을 때(GitHub cron 드롭/지연 사고), 이를 감지하여
  GitHub Actions의 ai-discussion 워크플로를 수동 트리거(gh workflow run)하도록 신호를 보낸다.
"""
import os
import sys
import json
import datetime

KST = datetime.timezone(datetime.timedelta(hours=9))
BASE = os.path.dirname(os.path.abspath(__file__))


def should_trigger_backup():
    now = datetime.datetime.now(KST)
    hour = now.hour

    # 회의 누락 점검 시간대 (정규 스케줄 1~2시간 뒤)
    # 아침 회의(05:37): 07:00 ~ 10:00 점검
    # 낮 회의(11:37): 12:00 ~ 16:00 점검
    # 저녁 회의(17:37): 18:30 ~ 22:00 점검
    is_check_window = (7 <= hour <= 10) or (12 <= hour <= 16) or (19 <= hour <= 22)
    if not is_check_window:
        return False, f"현재 시각({hour}시)은 누락 점검 대상 시간대가 아닙니다."

    disc_file = os.path.join(BASE, "discussions.json")
    if not os.path.exists(disc_file):
        return True, "discussions.json 파일이 없어 회의가 필요합니다."

    try:
        with open(disc_file, "r", encoding="utf-8") as f:
            d = json.load(f)
            t_str = d.get("time")  # e.g. "2026-11-04T09:43"
            if not t_str:
                return True, "discussions.json에 time 필드가 없습니다."
            # ISO 파싱 (KST 기준)
            mt = datetime.datetime.fromisoformat(t_str)
            if mt.tzinfo is None:
                mt = mt.replace(tzinfo=KST)
            diff_hours = (now - mt).total_seconds() / 3600.0
            if diff_hours < 3.5:
                return False, f"최근 {diff_hours:.1f}시간 전에 정상 회의가 진행되었습니다 (누락 아님)."
    except Exception as e:
        return False, f"확인 중 오류 발생: {e}"

    return True, f"마지막 회의 이후 {diff_hours:.1f}시간이 경과하여 누락된 것으로 판단됩니다."


if __name__ == "__main__":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass
    needed, reason = should_trigger_backup()
    print(f"· 회의 누락 점검 결과: {reason}")
    if needed:
        print("  🚨 [트리거 필요] 보충 회의 실행 신호 전송 (exit code 1)")
        sys.exit(1)
    else:
        sys.exit(0)
