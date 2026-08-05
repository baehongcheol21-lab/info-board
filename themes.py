# coding=utf-8
"""
themes.py — '오늘의 테마' 선정과 테마 바스켓 수익률 계산.

실험의 목적(사용자 지시)
------------------------
매일 테마를 하나 정하고, 요원 전원이 토론해서 **틀려도 좋으니** 방향·기간별 예측을 낸다.
다음 날 파이썬이 실제와 대조해 맞았는지 채점하고, 그 가중치를 다시 프롬프트에 먹인다.
한 달 이상 돌리면 점점 맞아가는지 **직접 보는 실험**이다.

두 가지 원칙
------------
1. **틀리는 걸 허용한다.** 확률을 0.5 근처로만 부르는 겁쟁이 예측은 실험을 무의미하게 만든다.
   대신 틀린 것이 정확히 기록되고, 그 편향이 다음 프롬프트로 되돌아간다.
2. **채점 대상은 반드시 계산 가능해야 한다.** "반도체가 좋아 보인다"는 채점 불가다.
   그래서 테마마다 **실제 시세가 있는 종목·지표 바스켓**을 붙였다. 테마 수익률은
   구성원 등락률의 동일가중 평균 — 사람이 검산할 수 있는 산수다.

바스켓은 우리가 이미 매시간 수집하는 12지표 안에서만 고른다. 새 데이터 소스를 늘리면
채점이 끊긴다(전력 API처럼 키가 죽으면 그 테마가 통째로 공백이 된다).
"""
import os
import json
import datetime

KST = datetime.timezone(datetime.timedelta(hours=9))
BASE = os.path.dirname(os.path.abspath(__file__))
STATE = os.path.join(BASE, "themes.json")

# ---- 테마 정의 -----------------------------------------------------------------
# members: publish.INDICATORS의 id. 이 바스켓의 동일가중 등락률이 채점 대상이다.
THEMES = [
    {"id": "semi", "name": "반도체",
     "members": ["hynix", "samsung", "sox", "nvidia"],
     "watch": "HBM·메모리 가격, 미국 반도체지수, 설비투자 발표"},
    {"id": "power", "name": "전력·유틸리티",
     "members": ["kepco", "copper"],
     "watch": "전력망 투자·요금 정책, 구리(전선 원가), SMP"},
    {"id": "oil", "name": "석유·가스",
     "members": ["wti", "natgas"],
     "watch": "OPEC·재고, 지정학, 발전 연료비 전가"},
    {"id": "datacenter", "name": "데이터센터",
     "members": ["nvidia", "hynix", "kepco"],
     "watch": "AI 인프라 투자, 전력 수요 증가, 냉각·전력변환 수요"},
    {"id": "macro", "name": "지수·거시",
     "members": ["kospi", "krw_usd", "us10y"],
     "watch": "금리·환율, 외국인 수급, 글로벌 위험선호"},
    {"id": "material", "name": "원자재",
     "members": ["copper", "gold"],
     "watch": "달러 강약, 중국 수요, 안전자산 선호"},
]
BY_ID = {t["id"]: t for t in THEMES}


def _load():
    try:
        with open(STATE, encoding="utf-8") as f:
            return json.load(f)
    except (OSError, ValueError):
        return {"themes": {}, "log": []}


def _save(st):
    try:
        with open(STATE, "w", encoding="utf-8") as f:
            json.dump(st, f, ensure_ascii=False, indent=1)
    except OSError:
        pass


def pick(snap, today=None):
    """오늘의 테마를 고른다. **0콜·결정론적** — 같은 날 여러 회의가 같은 테마를 본다.

    고르는 규칙 — **한 바퀴 라운드로빈 + 바퀴 안에서는 많이 움직인 순서**:
      · 이번 바퀴에 아직 안 뽑힌 테마 중에서만 고른다 → 6일이면 전 테마가 한 번씩 돈다
      · 그중 오늘 바스켓이 가장 크게 움직인 테마를 먼저 본다 → 정보량이 큰 날을 잡는다
      · 다 돌면 새 바퀴 시작

    ⚠️ 처음엔 '절대등락 + 탐색보너스' 점수제로 짰는데, 검증에서 7일간 3개 테마만 반복
    선정됐다. 변동성이 낮은 테마(지수·거시)는 영원히 안 뽑힌다 — 실험은 **비교**가
    목적이라 커버리지가 없으면 아무것도 비교할 수 없다. 그래서 라운드로빈으로 바꿨다."""
    today = today or datetime.datetime.now(KST).strftime("%Y-%m-%d")
    st = _load()
    log = st.get("log", [])
    # 같은 날은 이미 고른 테마를 유지한다(하루 3회 회의가 같은 주제를 깊게 판다).
    for row in reversed(log):
        if row.get("date") == today:
            return BY_ID.get(row.get("theme"), THEMES[0])
    # 이번 바퀴에 이미 쓴 테마 = 마지막 '바퀴 시작' 이후의 선정들
    cycle = []
    for row in reversed(log):
        cycle.append(row.get("theme"))
        if row.get("cycle_start"):
            break          # 바퀴를 연 그 테마도 이번 바퀴에 포함된다(빠뜨리면 곧바로 재선정된다)
    pool = [t for t in THEMES if t["id"] not in cycle] or THEMES   # 다 돌았으면 새 바퀴
    new_cycle = not [t for t in THEMES if t["id"] not in cycle]

    def move_of(t):
        pcts = [(snap.get(m) or {}).get("pct") for m in t["members"]]
        pcts = [p for p in pcts if p is not None]
        return sum(abs(p) for p in pcts) / len(pcts) if pcts else 0.0

    best = max(pool, key=move_of)
    st.setdefault("log", []).append({"date": today, "theme": best["id"],
                                     "cycle_start": new_cycle})
    st["log"] = st["log"][-120:]
    rec = st.setdefault("themes", {}).setdefault(best["id"], {"n": 0})
    rec["n"] = rec.get("n", 0) + 1
    rec["last"] = today
    _save(st)
    return best


def snapshot_levels(theme, snap):
    """예측 발행 시점의 구성원 가격을 남긴다. 채점 때 이걸 기준으로 수익률을 잰다."""
    out = {}
    for m in theme["members"]:
        v = (snap.get(m) or {}).get("value")
        if v:
            out[m] = float(v)
    return out


def basket_return(levels, closes_at_target):
    """동일가중 바스켓 수익률(%). levels: {id: 발행시점가}, closes_at_target: {id: 목표일종가}.
    한 종목이라도 값이 없으면 그 종목만 빼고 계산한다(가짜 숫자 금지)."""
    rs = []
    for m, p0 in (levels or {}).items():
        p1 = (closes_at_target or {}).get(m)
        if p0 and p1:
            rs.append((float(p1) - float(p0)) / float(p0) * 100.0)
    if not rs:
        return None
    return round(sum(rs) / len(rs), 4)


def brief(theme, snap):
    """토론에 넣을 테마 현황 한 덩어리(0콜)."""
    lines = []
    for m in theme["members"]:
        d = snap.get(m) or {}
        if d.get("value") is None:
            continue
        lines.append(f"  · {d.get('name', m)}: {d['value']} {d.get('unit', '')} "
                     f"(전일比 {d.get('pct')}%)")
    return (f"[오늘의 테마] {theme['name']}\n"
            f"구성(동일가중 바스켓 — 채점은 이 평균 등락률로 한다):\n"
            + "\n".join(lines)
            + f"\n주로 볼 것: {theme['watch']}")


def record_score(theme_id, horizon, hit, err):
    """테마별 성적 누적(가벼운 카운터). 상세 채점은 forecast_score가 한다."""
    st = _load()
    rec = st.setdefault("themes", {}).setdefault(theme_id, {"n": 0})
    h = rec.setdefault("score", {}).setdefault(str(horizon), {"n": 0, "hit": 0, "err": 0.0})
    h["n"] += 1
    h["hit"] += 1 if hit else 0
    h["err"] = round(h["err"] + (err or 0.0), 4)
    _save(st)


def scoreboard():
    """테마×기간 성적표. 프롬프트와 대시보드가 함께 쓴다."""
    st = _load().get("themes", {})
    out = {}
    for tid, rec in st.items():
        sc = rec.get("score") or {}
        row = {}
        for h, v in sc.items():
            if v["n"]:
                row[h] = {"n": v["n"], "hit_rate": round(v["hit"] / v["n"], 3),
                          "bias": round(v["err"] / v["n"], 3)}
        if row:
            out[BY_ID.get(tid, {}).get("name", tid)] = row
    return out
