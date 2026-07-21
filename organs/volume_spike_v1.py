# coding=utf-8
"""volume_spike_v1 — 거래량 급증 감지. U4 평가매트릭스의 '수급 증명' 축을 기계적으로 보조."""

MANIFEST = {
    "name": "volume_spike", "version": 1, "stable": True, "category": "계산",
    "desc": "최근 거래량이 그 이전 평균의 threshold배 이상이면 급증(spike)으로 판정",
    "args": {"volumes": "list[float]", "threshold": "float=2.0"},
    "returns": "{spike: bool, ratio: float|None}",
    "safety": "pure", "timeout_s": 1,
}


def run(volumes, threshold=2.0):
    vals = [v for v in volumes if v is not None]
    if len(vals) < 2:
        return {"spike": False, "ratio": None}
    latest, base = vals[-1], vals[:-1]
    avg = sum(base) / len(base) if base else 0
    if avg == 0:
        return {"spike": False, "ratio": None}
    ratio = round(latest / avg, 2)
    return {"spike": ratio >= threshold, "ratio": ratio}


SELFTEST = [
    {"args": {"volumes": [100, 100, 100, 300]}, "check": "result['spike'] is True and result['ratio'] == 3.0",
     "offline": True},
]
