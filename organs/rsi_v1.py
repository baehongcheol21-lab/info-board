# coding=utf-8
"""rsi_v1 — 상대강도지수(RSI, 표준 14기간). P10 모델용 기술적 지표."""

MANIFEST = {
    "name": "rsi", "version": 1, "stable": True, "category": "계산",
    "desc": "RSI(상대강도지수). period+1개 미만 데이터면 None",
    "args": {"closes": "list[float]", "period": "int=14"},
    "returns": "float | None",
    "safety": "pure", "timeout_s": 2,
}


def run(closes, period=14):
    vals = [v for v in closes if v is not None]
    if len(vals) < period + 1:
        return None
    gains, losses = [], []
    for i in range(1, len(vals)):
        diff = vals[i] - vals[i - 1]
        gains.append(max(diff, 0))
        losses.append(max(-diff, 0))
    avg_gain = sum(gains[-period:]) / period
    avg_loss = sum(losses[-period:]) / period
    if avg_loss == 0:
        return 100.0
    rs = avg_gain / avg_loss
    return round(100 - (100 / (1 + rs)), 2)


SELFTEST = [
    {"args": {"closes": [float(i) for i in range(1, 20)], "period": 14},
     "check": "result == 100.0", "offline": True},  # 계속 오르기만 하면 RSI 100
    {"args": {"closes": [1, 2], "period": 14}, "check": "result is None", "offline": True},
]
