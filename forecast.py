# coding=utf-8
"""
forecast.py — 예측 → 익일 채점 → 신뢰도 갱신 → **다음 회의 프롬프트 자동 교정**의 결선층.

사용자 요구(원장 #65의 실제 내용): "어제 예측과 오늘 실제를 대조해서, 왜 안 맞았는지
수식적으로 따지고, 그 개선점이 다음 명령의 프롬프트에 스스로 반영되게 하라."

지금까지 이게 없었다. §7-2 reality_check는 '어제 등락 방향 vs 오늘 등락 방향'을 비교하고
있었는데, 그건 시장이 이틀 연속 같은 방향이었는지를 볼 뿐 **요원을 채점하지 않는다.**
채점하려면 반증 가능한 예측이 먼저 있어야 한다.

회로 (전부 0콜 — LLM에게 "맞았니?"라고 묻지 않는다)
----------------------------------------------------
  ① 발행   회의 중 요원이 발언 끝에 예측 한 줄을 남긴다.
           `[예측] 방향=상승 확률=0.72 구간=-1.0~+3.5`
           **추가 콜이 0이다** — 이미 부르고 있는 U3·U4·알파 프롬프트에 형식만 얹었다.
  ② 저장   forecast 이벤트로 스트림에, 그리고 forecasts.jsonl에 append.
  ③ 대조   다음 날 회의의 perceive 직후, 어제 예측을 오늘 실제 등락과 맞춘다.
  ④ 채점   organs/forecast_score가 브라이어·머피분해(REL/RES/UNC)·편향·구간적중을 계산.
  ⑤ 갱신   요원별 신뢰도를 EWMA로 갱신하고 진단 코드를 calibration.json에 쓴다.
  ⑥ 교정   다음 회의가 프롬프트를 만들 때 그 진단을 **교정 블록**으로 붙인다.

안전선 (자기수정을 어디까지 허용하는가)
---------------------------------------
시스템이 스스로 바꿀 수 있는 것은 **교정 블록 한 덩어리뿐**이다:
  · 코어 프롬프트·STYLE·rules.yaml은 건드리지 못한다(§4 자기수정 금지와 같은 선).
  · 교정 문장은 LLM이 자유 생성하는 게 아니라 **진단 코드 → 고정 문구 템플릿**이며,
    빈칸에 계산된 수치만 들어간다. 그래서 무슨 문장이 나올 수 있는지 사람이 미리 다 안다.
  · 표본이 MIN_N 미만이면 아무 교정도 붙지 않는다. 8건 보고 "너는 과신한다"고 프롬프트를
    고치면 시스템이 자기 노이즈를 학습한다.
  · 교정 블록은 길이 상한(MAX_BLOCK)을 넘지 않는다 — 프롬프트가 잔소리로 뒤덮이지 않게.
"""
import os
import re
import json
import datetime

KST = datetime.timezone(datetime.timedelta(hours=9))
BASE = os.path.dirname(os.path.abspath(__file__))
FC_FILE = os.path.join(BASE, "forecasts.jsonl")
CAL_FILE = os.path.join(BASE, "calibration.json")

MIN_N = 8          # 이 표본 수 미만이면 판정도 교정도 하지 않는다
MAX_BLOCK = 600    # 교정 블록 최대 길이(글자)
HALF_LIFE = 40     # 채점에 쓸 최근 예측 개수(요원별)

try:
    from registry import get_registry
except ImportError:
    get_registry = None

# `[예측] 방향=상승 확률=0.72 구간=-1.0~+3.5` — 공백·부호·소수점 흔들림을 흡수한다.
_RE = re.compile(
    r"\[예측\]\s*방향\s*=\s*(상승|하락)\s*"
    r"확률\s*=\s*([01](?:\.\d+)?)\s*"
    r"구간\s*=\s*([+-]?\d+(?:\.\d+)?)\s*~\s*([+-]?\d+(?:\.\d+)?)")

# 테마 실험용 다기간 예측: `[예측:단기] 방향=상승 확률=0.7 구간=-1~+3`
HORIZONS = {"단기": 1, "중기": 5, "장기": 20}       # 거래일 기준
_RE_H = re.compile(
    r"\[예측[:：]\s*(단기|중기|장기)\]\s*방향\s*=\s*(상승|하락)\s*"
    r"확률\s*=\s*([01](?:\.\d+)?)\s*"
    r"구간\s*=\s*([+-]?\d+(?:\.\d+)?)\s*~\s*([+-]?\d+(?:\.\d+)?)")

# 요원에게 보여줄 형식 안내. 프롬프트에 그대로 붙인다.
FORMAT_HINT = (
    "\n\n[예측 의무] 마지막 줄에 **내일 종가 기준** 예측을 아래 형식 그대로 한 줄 쓴다"
    "(설명 금지, 다른 문장과 같은 줄에 쓰지 말 것):\n"
    "[예측] 방향=상승 확률=0.65 구간=-1.0~+3.5\n"
    "· 확률은 그 방향이 맞을 확률(0.50~0.95). 근거가 약하면 0.55 언저리를 쓰고, "
    "억지로 확신하지 마라 — 확률을 부풀리면 나중에 감점된다.\n"
    "· 구간은 내일 등락률(%)의 예상 범위다. 실제값이 이 안에 들어와야 한다.")


def parse(text):
    """발언에서 예측 한 줄을 뽑는다. 없으면 None."""
    m = _RE.search(text or "")
    if not m:
        return None
    lo, hi = float(m.group(3)), float(m.group(4))
    if lo > hi:
        lo, hi = hi, lo
    return {"dir": 1 if m.group(1) == "상승" else -1,
            "p": min(max(float(m.group(2)), 0.0), 1.0),
            "lo": lo, "hi": hi}


def parse_multi(text):
    """다기간 예측 전부. 반환: [{horizon_kr, days, dir, p, lo, hi}, ...]"""
    out = []
    for m in _RE_H.finditer(text or ""):
        lo, hi = float(m.group(4)), float(m.group(5))
        if lo > hi:
            lo, hi = hi, lo
        out.append({"horizon_kr": m.group(1), "days": HORIZONS[m.group(1)],
                    "dir": 1 if m.group(2) == "상승" else -1,
                    "p": min(max(float(m.group(3)), 0.0), 1.0), "lo": lo, "hi": hi})
    return out


# 테마 실험에서 요원에게 요구하는 형식. 세 기간을 **전부** 내게 한다 —
# 하나만 내면 "쉬운 기간만 고르는" 회피가 생긴다.
THEME_FORMAT = (
    "\n\n[예측 의무 — 세 줄 전부, 형식 그대로]\n"
    "[예측:단기] 방향=상승 확률=0.65 구간=-1.0~+3.0     ← 다음 거래일(1일)\n"
    "[예측:중기] 방향=상승 확률=0.60 구간=-3.0~+6.0     ← 5거래일 뒤\n"
    "[예측:장기] 방향=하락 확률=0.55 구간=-8.0~+4.0     ← 20거래일 뒤\n"
    "· 대상은 위 바스켓의 **동일가중 평균 등락률**이다(개별 종목이 아니다).\n"
    "· 확률은 그 방향이 맞을 확률(0.50~0.95). **틀려도 된다 — 겁먹고 0.5만 쓰면 "
    "실험 자체가 무의미해진다.** 근거가 있으면 확신을 실어라. 다만 근거 없이 부풀리면 "
    "다음 회의에서 네 성적표로 돌아온다.\n"
    "· 구간은 그 시점까지의 누적 등락률(%) 예상 범위다.")


def _load_jsonl(path):
    rows = []
    if not os.path.exists(path):
        return rows
    with open(path, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            try:
                rows.append(json.loads(line))
            except ValueError:
                continue          # 깨진 줄 하나가 회로 전체를 막지 않게
    return rows


def record(meeting_id, who, indicator, pred, emit_fn=None):
    """예측 1건을 영구 기록. 채점 대상 날짜(target_date)는 '다음 거래일'이 아니라
    '다음 회의가 보는 날'이라 단순히 발행 다음 날짜로 둔다 — 주말이면 다음 평일 스냅샷과
    자연히 맞춰진다(그날 pct가 없으면 대조를 건너뛴다)."""
    now = datetime.datetime.now(KST)
    row = {"ts": now.isoformat(timespec="seconds"), "date": now.strftime("%Y-%m-%d"),
           "meeting_id": meeting_id, "who": who, "id": indicator,
           "dir": pred["dir"], "p": pred["p"], "lo": pred["lo"], "hi": pred["hi"]}
    try:
        with open(FC_FILE, "a", encoding="utf-8") as f:
            f.write(json.dumps(row, ensure_ascii=False) + "\n")
    except OSError:
        pass
    if emit_fn:
        emit_fn("forecast", who, topic=indicator, payload=dict(row))
    return row


# ---- 테마 실험: 발행과 채점 -------------------------------------------------------
_YC = {}          # 프로세스 내 야후 일별 종가 캐시 {symbol: {date: close}}


def _yahoo_daily(symbol, rng="3mo"):
    """일별 종가. 채점은 '며칠 뒤 종가'가 필요해서 스냅샷만으론 안 된다."""
    if symbol in _YC:
        return _YC[symbol]
    import requests
    from publish import UA
    r = requests.get(f"https://query1.finance.yahoo.com/v8/finance/chart/{symbol}",
                     params={"range": rng, "interval": "1d"}, headers=UA, timeout=20)
    r.raise_for_status()
    res = r.json()["chart"]["result"][0]
    ts = res.get("timestamp") or []
    cl = (res.get("indicators", {}).get("quote") or [{}])[0].get("close") or []
    out = {datetime.datetime.fromtimestamp(t, datetime.timezone.utc).strftime("%Y-%m-%d"): float(c)
           for t, c in zip(ts, cl) if c is not None}
    _YC[symbol] = out
    return out


def _sym(iid):
    from publish import INDICATORS
    for _id, name, sym, unit, dec in INDICATORS:
        if _id == iid:
            return sym
    return None


def record_theme(meeting_id, who, theme, preds, levels, emit_fn=None):
    """테마 다기간 예측을 영구 기록. levels는 발행 시점의 구성원 가격(채점 기준선)."""
    now = datetime.datetime.now(KST)
    rows = []
    for p in preds:
        row = {"kind": "theme", "ts": now.isoformat(timespec="seconds"),
               "date": now.strftime("%Y-%m-%d"), "meeting_id": meeting_id, "who": who,
               "theme": theme["id"], "theme_name": theme["name"],
               "horizon": p["horizon_kr"], "days": p["days"],
               "dir": p["dir"], "p": p["p"], "lo": p["lo"], "hi": p["hi"],
               "levels": levels}
        rows.append(row)
        try:
            with open(FC_FILE, "a", encoding="utf-8") as f:
                f.write(json.dumps(row, ensure_ascii=False) + "\n")
        except OSError:
            pass
        if emit_fn:
            emit_fn("forecast", who, topic=theme["name"],
                    payload={k: v for k, v in row.items() if k != "levels"})
    return rows


def _theme_actual(row, today):
    """발행 후 row['days']번째 거래일의 바스켓 등락률. 아직 안 왔으면 None."""
    import themes as _th
    got, base = {}, row.get("levels") or {}
    if not base:
        return None
    for m in base:
        sym = _sym(m)
        if not sym:
            continue
        try:
            ser = _yahoo_daily(sym)
        except Exception:
            return None                     # 조회 실패 — 이번엔 채점하지 않는다(다음에 재시도)
        later = sorted(d for d in ser if d > row["date"] and d <= today)
        if len(later) < row["days"]:
            return None                     # 아직 그 시점이 오지 않았다
        got[m] = ser[later[row["days"] - 1]]
    return _th.basket_return(base, got)


def settle_themes(emit_fn=None, today=None):
    """만기가 된 테마 예측을 채점하고, 요원·테마 성적을 갱신한다. 만기 전 것은 그대로 둔다."""
    if not get_registry:
        return {"checked": 0}
    import themes as _th
    today = today or datetime.datetime.now(KST).strftime("%Y-%m-%d")
    rows = _load_jsonl(FC_FILE)
    theme_rows = [r for r in rows if r.get("kind") == "theme"]
    if not theme_rows:
        return {"checked": 0}

    graded, keep_ids = [], set()
    for i, r in enumerate(theme_rows):
        if r.get("date", "") >= today:
            keep_ids.add(i)
            continue
        actual = _theme_actual(r, today)
        if actual is None:
            keep_ids.add(i)                 # 아직 만기 전이거나 조회 실패 → 보존
            continue
        graded.append(dict(r, actual=actual))
    if not graded:
        return {"checked": 0}

    reg = get_registry()
    cal = _cal_load()
    agents = cal.setdefault("agents", {})
    # 요원별 × 기간별로 나눠 채점한다 — 단기와 장기를 섞으면 편향이 상쇄돼 안 보인다.
    buckets = {}
    for g in graded:
        buckets.setdefault((g.get("who", "?"), g.get("horizon", "단기")), []).append(g)
        _th.record_score(g["theme"], g["horizon"],
                         (g["actual"] >= 0) == (g["dir"] >= 0),
                         g["actual"] - (g["lo"] + g["hi"]) / 2.0)
    summary = {}
    for (who, hz), rs in buckets.items():
        try:
            sc = reg.run("forecast_score", rows=rs, n_min=MIN_N)
        except Exception:
            continue
        st = agents.setdefault(who, {"weight": 0.5})
        hz_st = st.setdefault("horizons", {}).setdefault(hz, {"weight": 0.5})
        hz_st["weight"] = _update_weight(hz_st.get("weight", 0.5), sc.get("skill"))
        hz_st["n"] = sc["n"]
        hz_st["score"] = {k: sc.get(k) for k in
                          ("hit_rate", "mean_p", "brier", "rel", "res", "unc", "skill",
                           "overconf", "bias", "mae", "coverage")}
        hz_st["diagnosis"] = sc.get("diagnosis", [])
        summary[f"{who}/{hz}"] = {"n": sc["n"], "hit": sc["hit_rate"], "skill": sc["skill"]}
        if emit_fn:
            emit_fn("forecast_score", who, topic=f"테마/{hz}",
                    payload={"who": who, "horizon": hz, "n": sc["n"], "brier": sc["brier"],
                             "skill": sc["skill"], "hit_rate": sc["hit_rate"],
                             "overconf": sc["overconf"], "bias": sc["bias"],
                             "coverage": sc["coverage"], "weight": hz_st["weight"],
                             "diagnosis": [d["code"] for d in sc.get("diagnosis", [])]})
    cal["updated"] = today
    _cal_save(cal)

    # 채점 끝난 것만 덜어낸다(만기 전 예측은 반드시 보존 — 장기 20거래일짜리가 있다)
    survivors = [r for r in rows if r.get("kind") != "theme"]
    survivors += [r for i, r in enumerate(theme_rows) if i in keep_ids]
    try:
        with open(FC_FILE, "w", encoding="utf-8") as f:
            for r in survivors:
                f.write(json.dumps(r, ensure_ascii=False) + "\n")
    except OSError:
        pass
    print(f"  🧪 테마 예측 채점 {len(graded)}건 — " +
          ", ".join(f"{k} n={v['n']} 적중{v['hit']}" for k, v in summary.items()))
    return {"checked": len(graded), "summary": summary}


def theme_block(theme_id, who=None):
    """이 테마·이 요원의 지금까지 성적. 프롬프트에 붙여 '전에 어땠는지'를 알려준다."""
    import themes as _th
    sb = _th.scoreboard()
    name = _th.BY_ID.get(theme_id, {}).get("name", theme_id)
    row = sb.get(name)
    if not row:
        return ""
    parts = [f"{h} n={v['n']} 적중{v['hit_rate']:.0%} 편향{v['bias']:+.2f}%p"
             for h, v in sorted(row.items())]
    head = f"\n\n[이 테마 누적 성적 — 실측] {name}: " + " / ".join(parts)
    if who:
        st = ((_cal_load().get("agents") or {}).get(who) or {}).get("horizons") or {}
        mine = [f"{h} 적중{(v.get('score') or {}).get('hit_rate')}" for h, v in st.items()
                if (v.get("score") or {}).get("hit_rate") is not None]
        if mine:
            head += f"\n[네 기간별 성적] " + " / ".join(mine)
    return head


def _cal_load():
    try:
        with open(CAL_FILE, encoding="utf-8") as f:
            return json.load(f)
    except (OSError, ValueError):
        return {"agents": {}, "updated": None}


def _cal_save(cal):
    try:
        with open(CAL_FILE, "w", encoding="utf-8") as f:
            json.dump(cal, f, ensure_ascii=False, indent=1)
    except OSError:
        pass


def settle(today_snap, emit_fn=None, today=None):
    """어제까지의 미채점 예측을 오늘 실제 등락과 대조하고 신뢰도를 갱신한다. **0콜.**
    반환: {"checked": n, "agents": {who: score}} — 대조할 게 없으면 checked 0."""
    if not get_registry:
        return {"checked": 0, "agents": {}}
    today = today or datetime.datetime.now(KST).strftime("%Y-%m-%d")
    rows = _load_jsonl(FC_FILE)
    # 오늘보다 전에 낸 예측만 채점 대상. 오늘 낸 건 아직 결과가 없다.
    pend = [r for r in rows if r.get("date", "") < today]
    if not pend:
        return {"checked": 0, "agents": {}}

    graded, by_who = [], {}
    for r in pend:
        cur = (today_snap or {}).get(r.get("id")) or {}
        actual = cur.get("pct")
        if actual is None:
            continue                       # 오늘 값이 없으면 채점 불가(휴장 등) — 조용히 넘긴다
        g = dict(r, actual=float(actual))
        graded.append(g)
        by_who.setdefault(r.get("who", "?"), []).append(g)
    if not graded:
        return {"checked": 0, "agents": {}}

    reg = get_registry()
    cal = _cal_load()
    agents = cal.setdefault("agents", {})
    result = {}
    for who, rs in by_who.items():
        rs = rs[-HALF_LIFE:]
        try:
            sc = reg.run("forecast_score", rows=rs, n_min=MIN_N)
        except Exception:
            continue
        st = agents.setdefault(who, {"weight": 0.5})
        st["weight"] = _update_weight(st.get("weight", 0.5), sc.get("skill"))
        st["n"] = sc["n"]
        st["score"] = {k: sc.get(k) for k in
                       ("hit_rate", "mean_p", "brier", "rel", "res", "unc", "skill",
                        "overconf", "bias", "mae", "coverage", "sharpness")}
        st["diagnosis"] = sc.get("diagnosis", [])
        st["verdict"] = sc.get("verdict")
        result[who] = sc
        if emit_fn:
            emit_fn("forecast_score", who, topic="calibration",
                    payload={"who": who, "n": sc["n"], "brier": sc["brier"],
                             "skill": sc["skill"], "rel": sc["rel"], "res": sc["res"],
                             "unc": sc["unc"], "overconf": sc["overconf"],
                             "bias": sc["bias"], "coverage": sc["coverage"],
                             "weight": st["weight"],
                             "diagnosis": [d["code"] for d in sc.get("diagnosis", [])]})
    cal["updated"] = today
    _cal_save(cal)

    # 채점이 끝난 예측은 파일에서 덜어낸다(같은 걸 매일 다시 채점하지 않게).
    keep = [r for r in rows if r.get("date", "") >= today]
    try:
        with open(FC_FILE, "w", encoding="utf-8") as f:
            for r in keep:
                f.write(json.dumps(r, ensure_ascii=False) + "\n")
    except OSError:
        pass
    print(f"  📐 예측 채점 {len(graded)}건 / 요원 {len(result)}명 — "
          + ", ".join(f"{w}(brier {s['brier']}, skill {s['skill']})" for w, s in result.items()))
    return {"checked": len(graded), "agents": result}


def _update_weight(prev, skill, alpha=0.3):
    if skill is None:
        return prev
    s = min(max(float(skill), 0.0), 1.0)
    return round((1.0 - alpha) * float(prev) + alpha * s, 4)


# ---- 진단 코드 → 교정 문구. **이 표에 있는 문장만** 프롬프트에 들어갈 수 있다. ----
_FIX = {
    "miscalibrated": lambda s: (
        f"너는 확률을 평균 {s['mean_p']:.2f}로 부르는데 실제 적중률은 {s['hit_rate']:.2f}다"
        f"({'과신' if s['overconf'] > 0 else '과소'}). "
        + ("근거가 24시간 내 사건·수급으로 확인될 때만 0.70을 넘겨라."
           if s["overconf"] > 0 else "근거가 분명하면 0.50에 붙이지 말고 확신을 실어라.")),
    "no_skill": lambda s: (
        f"최근 {s['n']}건에서 네 예측은 기저확률로 찍는 것보다 못했다(skill {s['skill']}). "
        "방향을 모르겠으면 확률 0.55 이하로 낮춰 적어라 — 모르는 걸 아는 척하지 마라."),
    "no_resolution": lambda s: (
        "너는 상황이 달라도 늘 비슷한 확률을 부른다. 근거가 강한 날과 약한 날의 확률을 "
        "실제로 벌려라(강하면 0.75+, 약하면 0.55-)."),
    "band_too_narrow": lambda s: (
        f"네 예상 구간에 실제값이 들어온 비율이 {s['coverage']:.0%}뿐이다"
        f"(평균 폭 {s['mean_width']:.1f}%p). 구간을 넓혀 잡아라."),
    "band_too_wide": lambda s: (
        f"네 예상 구간이 평균 {s['mean_width']:.1f}%p로 너무 넓어 맞아도 정보가 없다. 좁혀라."),
    "biased": lambda s: (
        f"너는 등락폭을 평균 {abs(s['bias']):.2f}%p "
        f"{'작게' if s['bias'] > 0 else '크게'} 잡는다. 구간 중앙을 그만큼 "
        f"{'올려' if s['bias'] > 0 else '내려'} 잡아라."),
}


def correction_block(who):
    """다음 회의 프롬프트에 붙일 교정 블록. 붙일 게 없으면 빈 문자열.

    이게 "다음 명령 때는 수정된 프롬프트를 스스로 세팅한다"의 실물이다. 다만 자유 생성이
    아니라 _FIX 표의 문장에 실측 수치를 채운 것뿐이라, 어떤 문장이 나올 수 있는지 사람이
    전부 미리 안다."""
    st = (_cal_load().get("agents") or {}).get(who) or {}
    dx = [d for d in (st.get("diagnosis") or []) if d.get("code") in _FIX]
    if not dx or (st.get("n") or 0) < MIN_N:
        return ""
    s = st.get("score") or {}
    if any(v is None for v in (s.get("mean_p"), s.get("hit_rate"))):
        return ""
    lines = []
    for d in dx:
        try:
            lines.append("· " + _FIX[d["code"]](dict(s, n=st.get("n"))))
        except (KeyError, TypeError, ValueError):
            continue
    if not lines:
        return ""
    head = (f"\n\n[네 최근 성적표 — 최근 {st.get('n')}건 실측] "
            f"적중률 {s.get('hit_rate')}, 브라이어 {s.get('brier')}, "
            f"보정오차 {s.get('rel')}, 변별력 {s.get('res')}\n")
    body = "\n".join(lines)
    return (head + body)[:MAX_BLOCK]


# ---- 알파의 '오늘 지켜볼 것' 후속 점검 --------------------------------------------
# 2026-08-05 소급 검증(회의 110건, 야후 실제 종가 대조)에서 나온 실측 결함:
#   · 같은 지시("구리 6.50 상회")를 11회 반복 — 08-01에 이미 돌파했는데 08-02·03에도 그대로
#   · 28%는 **낼 때 이미 충족된** 임계값이었다(알맹이 없는 지시)
#   · 임계값까지 거리의 중앙값이 0.98% — 하루 변동폭 안이라 거의 자동으로 충족된다
# → 알파에게 직전 감시 항목의 달성 여부를 알려주고, 달성됐으면 새 항목을 내게 한다. 0콜.
_WATCH = re.compile(r"오늘 지켜볼 것[:：]\s*(.+)")
_ABOVE = ("상회", "돌파", "넘어", "이상", "초과")
_BELOW = ("하회", "이탈", "밑도", "이하", "아래", "미만", "밑으로")
_NUM = re.compile(r"([0-9][0-9,]*\.[0-9]+|[0-9][0-9,]*)\s*(%|USD/lb|USD|달러|원|pt|포인트)")


def watch_followup(prev_brief, snap):
    """직전 총평의 감시 항목이 달성됐는지 오늘 스냅샷으로 판정해 알파에게 돌려줄 한 줄.
    판정 불가면 빈 문자열(프롬프트 무변화)."""
    m = _WATCH.search(prev_brief or "")
    if not m or not snap:
        return ""
    head = m.group(1)[:150]
    # 지표: 문장에서 가장 먼저 등장하는 스냅샷 지표
    hit = None
    for iid, d in (snap or {}).items():
        nm = (d or {}).get("name") or ""
        i = head.find(nm)
        if nm and i >= 0 and (hit is None or i < hit[0]):
            hit = (i, iid, nm)
    if not hit:
        return ""
    _, iid, nm = hit
    cur = (snap.get(iid) or {}).get("value")
    if cur is None:
        return ""
    up = any(w in head for w in _ABOVE)
    dn = any(w in head for w in _BELOW)
    if up == dn:
        return ""
    # 지표 이름을 지운 뒤 단위 붙은 숫자만 임계값 후보로(‘10년물’의 10을 잡던 실측 버그 회피)
    nums = [float(x.group(1).replace(",", "")) for x in _NUM.finditer(head.replace(nm, " "))]
    cand = [v for v in nums if 0.3 * cur <= v <= 3 * cur]
    if not cand:
        return ""
    th = cand[0]
    done = (cur > th) if up else (cur < th)
    return (f"\n\n[직전 감시 항목 점검 — 0콜 자동판정] 지난 회의는 "
            f"\"{nm}이 {th}을 {'상회' if up else '하회'}하는지\"를 지켜보라고 했다. "
            f"현재 {nm} = {cur} → **{'달성됨' if done else '아직 미달성'}**.\n"
            + ("이미 달성됐으므로 같은 항목을 반복하면 실격이다. 다음 국면을 짚는 **새 항목**을 내라."
               if done else
               "아직 미달성이다. 같은 항목을 유지하려면 그럴 이유를 한 줄로 대라.")
            + " 임계값은 그 지표의 하루 변동폭보다 의미 있게 떨어진 값이어야 한다 — "
              "하루면 자동으로 닿는 값은 감시 항목이 아니다.")


def weights():
    """요원별 신뢰도 {who: w}. 앙상블 가중에 쓴다."""
    return {k: (v or {}).get("weight", 0.5)
            for k, v in ((_cal_load().get("agents") or {}).items())}
