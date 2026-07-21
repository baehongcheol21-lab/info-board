# coding=utf-8
"""drawdown_v1 — 최대낙폭(MDD). P10 모델 성과평가용."""

MANIFEST = {
    "name": "drawdown", "version": 1, "stable": True, "category": "계산",
    "desc": "최대낙폭(MDD, %) — 고점 대비 최대 하락폭",
    "args": {"values": "list[float]"},
    "returns": "{mdd_pct: float|None}",
    "safety": "pure", "timeout_s": 2,
}


def run(values):
    vals = [v for v in values if v is not None]
    if len(vals) < 2:
        return {"mdd_pct": None}
    peak = vals[0]
    mdd = 0.0
    for v in vals:
        if v > peak:
            peak = v
        dd = (v - peak) / peak * 100 if peak else 0
        if dd < mdd:
            mdd = dd
    return {"mdd_pct": round(mdd, 2)}


SELFTEST = [
    {"args": {"values": [100, 120, 90, 110]}, "check": "result['mdd_pct'] == -25.0", "offline": True},
]
