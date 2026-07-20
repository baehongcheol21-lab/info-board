# coding=utf-8
"""
runlog.py — 관측 가능성 로거 (마스터플랜 P5, 2026-07-20 감사 반영)

배경: 2026-07-20 감사(api_토론_*.csv, 53회의·2,601행)에서 확인된 결함 —
  ① "콜은 썼는데 녹취 0줄"인 회의가 있어도 아무도 몰랐음
  ② 같은 get_history가 7~9번 반복돼도 "멈춘 건지 정상 캐시인지" 구분 불가
  ③ 검색쿼리가 회의 주제와 무관한 경우가 있어도 표시 안 됨
  ④ 감사 스크립트가 요원 발언 속 "실패"라는 단어(예: "인과관계 입증에 실패")까지
     런타임 에러로 오인(과탐지)

설계 원칙:
  - 로그 기록 실패가 회의를 죽이면 안 된다 → 모든 함수가 예외를 삼킨다.
  - err_class는 runtime_error(코드가 죽음) / tool_error(외부 API·검색 실패) 둘뿐이다.
    "analysis_verdict"(요원의 분석적 표현)는 애초에 여기 기록되지 않는다 — 이 jsonl만
    집계하면 과탐지가 구조적으로 불가능하다. transcript 텍스트를 grep하지 말 것.
  - 개인정보·전체 프롬프트/응답 본문은 기록하지 않는다(글자 수만) — P0 유출을 악화시키지 않는다.
  - 월별 롤링: logs/YYYY-MM-{api_call_log|tool_call_log|meetings}.jsonl
"""
import os
import json
import hashlib
import datetime

BASE = os.path.dirname(os.path.abspath(__file__))
LOG_DIR = os.path.join(BASE, "logs")
KST = datetime.timezone(datetime.timedelta(hours=9))


def _now():
    return datetime.datetime.now(KST)


def _month_file(kind):
    return os.path.join(LOG_DIR, f"{_now():%Y-%m}-{kind}.jsonl")


def _append(kind, row):
    try:
        os.makedirs(LOG_DIR, exist_ok=True)
        row = {"ts": _now().isoformat(timespec="seconds"), **row}
        with open(_month_file(kind), "a", encoding="utf-8") as f:
            f.write(json.dumps(row, ensure_ascii=False) + "\n")
    except Exception as e:
        print(f"  ⚠️ runlog 기록 실패({kind}): {e}")  # 로그 실패가 회의를 죽이면 안 됨


def _tail_today(kind, n=400):
    """오늘치 로그 마지막 n행 (cache 판정·타임라인용). 실패하면 빈 리스트."""
    try:
        with open(_month_file(kind), encoding="utf-8") as f:
            lines = f.readlines()[-n:]
    except Exception:
        return []
    today = _now().strftime("%Y-%m-%d")
    out = []
    for line in lines:
        try:
            row = json.loads(line)
        except ValueError:
            continue
        if row.get("ts", "").startswith(today):
            out.append(row)
    return out


def _sig(tool, args_summary):
    return hashlib.md5(f"{tool}|{args_summary}".encode("utf-8")).hexdigest()[:10]


def log_api_call(agent, model, key_no, topic, prompt_chars, ok, sec, err_class=None):
    """b.ask/ask_heavy 매 호출마다 1행. 실패도 반드시 기록한다."""
    _append("api_call_log", {
        "agent": agent, "model": model, "key_no": key_no, "topic": (topic or "")[:40],
        "prompt_chars": prompt_chars, "ok": bool(ok), "sec": round(sec, 2),
        "err_class": (err_class or "runtime_error") if not ok else None,
    })


def log_tool_call(tool, args_summary, ok, result_chars, mismatch=False, result_hash=""):
    """매 도구 실행마다 1행. cache 필드로 '같은 데이터가 또 나온 사유'를 명시한다:
    '신규'(처음 보는 조합) / '재사용(동일값)'(같은 조합+같은 결과 해시 — 정상 캐시로 추정)
    / '신규(값변경)'(같은 조합인데 결과가 달라짐)."""
    cache = "판정생략"
    if ok and result_hash:
        sig = _sig(tool, args_summary)
        cache = "신규"
        for row in reversed(_tail_today("tool_call_log")):
            if row.get("sig") == sig:
                cache = "재사용(동일값)" if row.get("result_hash") == result_hash else "신규(값변경)"
                break
    _append("tool_call_log", {
        "tool": tool, "args": (args_summary or "")[:120], "sig": _sig(tool, args_summary),
        "ok": bool(ok), "result_chars": result_chars, "cache": cache, "mismatch": bool(mismatch),
        "result_hash": result_hash, "err_class": None if ok else "tool_error",
    })


def log_meeting(ok, calls, transcript_rows, note=""):
    """회의 1회 완료 시 1행 — transcript 필수화(#4)의 기록처. ok=False면
    '콜은 썼는데 녹취 0줄' 같은 조용한 실패가 여기 잡힌다."""
    _append("meetings", {"ok": bool(ok), "calls": calls, "transcript_rows": transcript_rows, "note": note})


def recent_events(n=20):
    """최근 이벤트 n건(api+tool 통합, 시간순) — 화면 타임라인용."""
    rows = []
    for kind in ("api_call_log", "tool_call_log"):
        rows += [{"kind": kind, **r} for r in _tail_today(kind, n * 3)]
    rows.sort(key=lambda r: r.get("ts", ""))
    return rows[-n:]
