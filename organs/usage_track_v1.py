# coding=utf-8
"""usage_track_v1 — 오늘 Gemini 키 사용량 조회(읽기 전용). gemini_keys._load_usage 위임.
쓰기는 gemini_keys.RotatingBudget.ask()가 콜 성공 시에만 하므로, 이 기관은 절대 카운트를
증가시키지 않는다 — 순수 조회용 창구다."""
import os
import sys

_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if _ROOT not in sys.path:
    sys.path.insert(0, _ROOT)

from gemini_keys import _load_usage as _impl

MANIFEST = {
    "name": "usage_track", "version": 1, "stable": True, "category": "기억",
    "desc": "오늘(KST) Gemini 키별 사용 콜 수 조회 (읽기 전용, 카운트 증가 없음)",
    "args": {},
    "returns": "{date, counts:{키번호:콜수}}",
    "safety": "write", "timeout_s": 1,
}


def run():
    return _impl()


SELFTEST = [
    {"args": {}, "check": "'date' in result and 'counts' in result", "offline": True},
]
