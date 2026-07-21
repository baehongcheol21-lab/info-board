# coding=utf-8
"""yahoo_chart_v1 — 지표/종목 과거 종가·거래량 텍스트. tools.get_history 위임
(id→심볼 변환은 tools.get_history 내부에서 publish.INDICATORS를 그대로 사용 — 재구현 금지)."""
import os
import sys

_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if _ROOT not in sys.path:
    sys.path.insert(0, _ROOT)

from tools import get_history as _impl

MANIFEST = {
    "name": "yahoo_chart", "version": 1, "stable": True, "category": "감각",
    "desc": "지표 id 또는 야후 심볼의 과거 종가·거래량 (텍스트 라인)",
    "args": {"symbol_or_id": "str", "days": "int=30"},
    "returns": "str",
    "safety": "network", "timeout_s": 15,
}


def run(symbol_or_id, days=30):
    return _impl(symbol_or_id, days=days)


SELFTEST = [
    {"args": {"symbol_or_id": "kospi", "days": 7}, "check": "isinstance(result, str)", "offline": False},
]
