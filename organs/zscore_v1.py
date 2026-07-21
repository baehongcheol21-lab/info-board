# coding=utf-8
"""zscore_v1 — 30일 분포 대비 z-score. dashboard/stats.py의 로직을 자체 포함
(cross-repo라 import 불가 — gemini_keys.py와 같은 의도적 중복 관례)."""
import statistics

MANIFEST = {
    "name": "zscore", "version": 1, "stable": True, "category": "계산",
    "desc": "최근 window일 분포 대비 마지막 값의 z-score",
    "args": {"history_values": "list[float]", "window": "int=30"},
    "returns": "float | None",
    "safety": "pure", "timeout_s": 2,
}


def run(history_values, window=30):
    vals = [v for v in history_values if v is not None]
    if len(vals) < 10:
        return None
    base = vals[-(window + 1):-1] if len(vals) > window else vals[:-1]
    mean = statistics.fmean(base)
    stdev = statistics.pstdev(base)
    if stdev == 0:
        return 0.0
    return round((vals[-1] - mean) / stdev, 2)


SELFTEST = [
    # base(=1..30, 분산 있음) 대비 마지막 값 1000은 뚜렷한 이상치여야 함 (분산 0인 데이터로
    # 테스트하면 stdev==0 분기로 빠져 항상 0.0이 나옴 — 실제로 그렇게 잘못 짰다가 잡아서 고침)
    {"args": {"history_values": list(range(1, 31)) + [1000]},
     "check": "result is not None and result > 2", "offline": True},
    {"args": {"history_values": [1, 2, 3]}, "check": "result is None", "offline": True},
]
