# coding=utf-8
"""pearson_v1 — 두 시계열의 피어슨 상관계수. stats.py 로직 자체 포함(의도적 중복)."""
import statistics

MANIFEST = {
    "name": "pearson", "version": 1, "stable": True, "category": "계산",
    "desc": "두 시계열의 피어슨 상관계수(-1~1). 표본<8이면 None",
    "args": {"xs": "list[float]", "ys": "list[float]"},
    "returns": "float | None",
    "safety": "pure", "timeout_s": 2,
}


def run(xs, ys):
    pairs = [(x, y) for x, y in zip(xs, ys) if x is not None and y is not None]
    n = len(pairs)
    if n < 8:
        return None
    ax = statistics.fmean(p[0] for p in pairs)
    ay = statistics.fmean(p[1] for p in pairs)
    sx = sum((p[0] - ax) ** 2 for p in pairs) ** 0.5
    sy = sum((p[1] - ay) ** 2 for p in pairs) ** 0.5
    if sx == 0 or sy == 0:
        return None
    cov = sum((p[0] - ax) * (p[1] - ay) for p in pairs)
    return round(cov / (sx * sy), 3)


SELFTEST = [
    {"args": {"xs": list(range(10)), "ys": list(range(10))}, "check": "result == 1.0", "offline": True},
]
