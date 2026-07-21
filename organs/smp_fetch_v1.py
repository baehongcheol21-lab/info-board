# coding=utf-8
"""smp_fetch_v1 — SMP 계통한계가격. publish.fetch_smp 위임 (원본 함수는 절대 삭제 금지 —
discuss.py가 직접 import해서 쓰는 AI 회의 지표 중 하나. publish.py의 경고 주석 참고)."""
import os
import sys

_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if _ROOT not in sys.path:
    sys.path.insert(0, _ROOT)

from publish import fetch_smp as _impl

MANIFEST = {
    "name": "smp_fetch", "version": 1, "stable": True, "category": "감각",
    "desc": "SMP 계통한계가격(육지 일평균). 키 없거나 미승인이면 None",
    "args": {},
    "returns": "float | None",
    "safety": "network", "timeout_s": 20,
}


def run():
    return _impl()


SELFTEST = [
    {"args": {}, "check": "result is None or isinstance(result, float)", "offline": False},
]
