# coding=utf-8
"""pct_change_v1 — n거래일 전 대비 변화율(%). stats.py 로직 자체 포함(의도적 중복)."""

MANIFEST = {
    "name": "pct_change", "version": 1, "stable": True, "category": "계산",
    "desc": "n거래일 전 대비 변화율(%)",
    "args": {"history": "list[[date,value]]", "days_back": "int"},
    "returns": "float | None",
    "safety": "pure", "timeout_s": 2,
}


def run(history, days_back):
    vals = [v for _, v in history if v is not None]
    if len(vals) <= days_back:
        return None
    old = vals[-1 - days_back]
    if old == 0:
        return None
    return round((vals[-1] - old) / old * 100, 2)


SELFTEST = [
    {"args": {"history": [["d1", 100], ["d2", 110]], "days_back": 1}, "check": "result == 10.0", "offline": True},
]
