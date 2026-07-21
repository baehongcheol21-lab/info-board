# coding=utf-8
"""power_mix_fetch_v1 — 발전원 믹스(현재 총발전). publish.fetch_power_mix 위임."""
import os
import sys

_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if _ROOT not in sys.path:
    sys.path.insert(0, _ROOT)

from publish import fetch_power_mix as _impl

MANIFEST = {
    "name": "power_mix_fetch", "version": 1, "stable": True, "category": "감각",
    "desc": "발전원별 발전량 중 최신 시각의 총발전(MW). 키 없으면 None",
    "args": {},
    "returns": "{total, time} | None",
    "safety": "network", "timeout_s": 20,
}


def run():
    return _impl()


SELFTEST = [
    {"args": {}, "check": "result is None or 'total' in result", "offline": False},
]
