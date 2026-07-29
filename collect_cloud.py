# coding=utf-8
"""
collect_cloud.py — 클라우드 상시 수집기. PC가 꺼져 있어도 데이터가 끊기지 않게 한다.

배경 (2026-07-30 사용자 지적 "4257분 전"):
  로컬 collect.py는 PC가 켜져 있을 때만 돈다. 실제로 07-20~07-23 3일간 수집이 멈춰
  데스크톱이 낡은 값을 보여줬다. collect.py 자체는 정상이었고(19/19 성공) 단지 안 돈 것.

왜 '전력'이 핵심인가:
  야후 시세는 collect.py가 매번 2년치를 백필하므로 PC를 며칠 꺼둬도 나중에 자동으로
  메워진다. 그러나 전력 데이터(SMP·수급)는 **그 시점을 놓치면 영영 복구할 수 없다**
  — 과거 조회 API가 없기 때문. 그래서 이 클라우드 수집기의 최우선 대상은 전력이다.

무엇을 하나:
  이미 매시간 도는 publish 워크플로에 얹혀서, 지표 스냅샷 한 줄을
  series/YYYY-MM.jsonl 에 append 하고 커밋한다. 로컬 대시보드는 이 파일을 읽어
  data.db 의 history 구멍을 메운다(dashboard.py `_merge_cloud_series`).

원칙 (collect.py와 동일):
  1. 소스 하나가 실패해도 나머지는 계속 수집한다.
  2. **가짜 숫자 금지** — 값을 못 구하면 그 키를 아예 넣지 않는다(0이나 추정치로 채우지 않음).
  3. 지표 id는 dashboard/indicators.yaml 과 정확히 같은 이름을 쓴다(병합이 어긋나지 않게).
"""
import os
import json
import datetime

import requests

import publish

KST = datetime.timezone(datetime.timedelta(hours=9))
BASE = os.path.dirname(os.path.abspath(__file__))
SERIES_DIR = os.path.join(BASE, "series")
UA = {"User-Agent": "Mozilla/5.0 (personal dashboard; non-commercial)"}
SUKUB_URL = "https://apis.data.go.kr/B552115/sukub5mMaxDatetime2/getSukub5mMaxDatetime2"

# 전력수급 API 필드 → 대시보드 지표 id (dashboard/indicators.yaml 과 동일해야 한다)
SUKUB_FIELDS = {
    "suppReserveRate": "reserve_rate",   # 공급예비율 %
    "suppReservePwr": "reserve_pwr",     # 공급예비력 MW  ← 계산값이 아니라 API 원본 필드
    "suppAbility": "supp_ability",       # 공급능력 MW
    "currPwrTot": "curr_demand",         # 현재 전력수요 MW
}


def fetch_sukub_all():
    """전력수급 4개 필드를 원본 그대로. publish.fetch_sukub()은 3개(rate/supply/demand)만
    돌려주고 suppReservePwr가 빠져 있어, 여기서 직접 호출해 4개를 다 가져온다."""
    key = publish.gov_key()   # 인코딩/디코딩 두 형태를 흡수 (publish.gov_key 주석 참고)
    if not key:
        return {}
    try:
        r = requests.get(SUKUB_URL, headers=UA, timeout=20,
                         params={"serviceKey": key, "pageNo": 1, "numOfRows": 1, "dataType": "json"})
        it = r.json()["response"]["body"]["items"]["item"]
        if isinstance(it, list):
            it = it[0]
        out = {}
        for field, iid in SUKUB_FIELDS.items():
            v = it.get(field)
            if v is not None:
                try:
                    out[iid] = round(float(v), 2)
                except (TypeError, ValueError):
                    pass          # 파싱 실패 = 값 없음. 가짜로 채우지 않는다.
        return out
    except Exception as e:
        print(f"  ⚠️ sukub 실패: {type(e).__name__}: {e}")
        return {}


def snapshot():
    """지표 한 벌을 수집해 {id: value} 로 돌려준다. 실패한 지표는 키 자체가 빠진다."""
    vals = {}
    for _id, name, sym, unit, dec in publish.INDICATORS:
        try:
            price, pct, _ = publish.fetch_yahoo(sym)
            if price is not None:
                vals[_id] = price
        except Exception as e:
            print(f"  ⚠️ {_id}: {type(e).__name__}: {e}")
    try:
        smp = publish.fetch_smp()
        if smp is not None:
            vals["smp"] = smp
    except Exception as e:
        print(f"  ⚠️ smp: {type(e).__name__}: {e}")
    vals.update(fetch_sukub_all())
    return vals


def main():
    now = datetime.datetime.now(KST)
    vals = snapshot()
    if not vals:
        print("❌ 수집값 0개 — 기록하지 않음(빈 줄로 파일을 더럽히지 않는다)")
        return
    os.makedirs(SERIES_DIR, exist_ok=True)
    path = os.path.join(SERIES_DIR, f"{now:%Y-%m}.jsonl")
    row = {"ts": now.isoformat(timespec="seconds"), "date": f"{now:%Y-%m-%d}", "v": vals}
    with open(path, "a", encoding="utf-8") as f:
        f.write(json.dumps(row, ensure_ascii=False) + "\n")
    power = [k for k in ("smp", "reserve_rate", "reserve_pwr", "supp_ability", "curr_demand") if k in vals]
    print(f"✅ 스냅샷 {len(vals)}개 기록 → series/{now:%Y-%m}.jsonl (전력 {len(power)}종: {', '.join(power) or '없음'})")


if __name__ == "__main__":
    main()
