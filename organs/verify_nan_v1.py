# coding=utf-8
"""verify_nan_v1 — 수치 결과에 nan/inf가 섞였는지 검사 (rules.yaml R07의 판단부)."""
import math

MANIFEST = {
    "name": "verify_nan", "version": 1, "stable": True, "category": "검증",
    "desc": "숫자 또는 숫자 리스트에 nan/inf가 있는지 검사",
    "args": {"value": "float | list[float]"},
    "returns": "bool",
    "safety": "pure", "timeout_s": 1,
}


def _bad(v):
    try:
        return math.isnan(v) or math.isinf(v)
    except TypeError:
        return False


def run(value):
    if isinstance(value, (list, tuple)):
        return any(_bad(v) for v in value)
    return _bad(value)


SELFTEST = [
    {"args": {"value": float("nan")}, "check": "result is True", "offline": True},
    {"args": {"value": [1.0, 2.0, float("inf")]}, "check": "result is True", "offline": True},
    {"args": {"value": 3.14}, "check": "result is False", "offline": True},
]
