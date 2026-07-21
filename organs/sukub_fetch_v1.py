# coding=utf-8
"""sukub_fetch_v1 — 전력수급현황(예비율/공급능력/현재수요). publish.fetch_sukub 위임."""
import os
import sys

_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if _ROOT not in sys.path:
    sys.path.insert(0, _ROOT)

from publish import fetch_sukub as _impl

MANIFEST = {
    "name": "sukub_fetch", "version": 1, "stable": True, "category": "감각",
    "desc": "전력수급현황 — 공급예비율·공급능력·현재수요. 키 없으면 None",
    "args": {},
    "returns": "{rate, supply, demand, time} | None",
    "safety": "network", "timeout_s": 20,
}


def run():
    return _impl()


SELFTEST = [
    {"args": {}, "check": "result is None or 'rate' in result", "offline": False},
]
