# coding=utf-8
"""moving_avg_v1 — 이동평균(최신값). MA20/MA60 계산에 쓰이는 그 수식을 재사용 가능한 기관으로."""

MANIFEST = {
    "name": "moving_avg", "version": 1, "stable": True, "category": "계산",
    "desc": "최근 window개 값의 이동평균(마지막 값 기준)",
    "args": {"values": "list[float]", "window": "int"},
    "returns": "float | None",
    "safety": "pure", "timeout_s": 2,
}


def run(values, window):
    vals = [v for v in values if v is not None]
    if len(vals) < window:
        return None
    return round(sum(vals[-window:]) / window, 4)


SELFTEST = [
    {"args": {"values": [1, 2, 3, 4, 5], "window": 3}, "check": "result == 4.0", "offline": True},
    {"args": {"values": [1, 2], "window": 5}, "check": "result is None", "offline": True},
]
