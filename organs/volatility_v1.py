# coding=utf-8
"""volatility_v1 — 일간 수익률의 모표준편차(변동성). P10 리스크 지표용."""
import statistics

MANIFEST = {
    "name": "volatility", "version": 1, "stable": True, "category": "계산",
    "desc": "종가열의 일간 % 변화율 표준편차(변동성)",
    "args": {"closes": "list[float]"},
    "returns": "float | None",
    "safety": "pure", "timeout_s": 2,
}


def run(closes):
    vals = [v for v in closes if v is not None]
    if len(vals) < 3:
        return None
    rets = [(vals[i] - vals[i - 1]) / vals[i - 1] * 100 for i in range(1, len(vals)) if vals[i - 1] != 0]
    if len(rets) < 2:
        return None
    return round(statistics.pstdev(rets), 3)


SELFTEST = [
    {"args": {"closes": [100, 100, 100, 100]}, "check": "result == 0.0", "offline": True},
    {"args": {"closes": [1, 2]}, "check": "result is None", "offline": True},
]
