# coding=utf-8
"""conclusions_search_v1 — 과거 토론 결론 검색(기억 은행). tools.get_conclusions 위임."""
import os
import sys

_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if _ROOT not in sys.path:
    sys.path.insert(0, _ROOT)

from tools import get_conclusions as _impl

MANIFEST = {
    "name": "conclusions_search", "version": 1, "stable": True, "category": "기억",
    "desc": "discussions/*.json에서 keyword 포함된 최근 결론 n건 검색 (읽기 전용)",
    "args": {"keyword": "str=''", "n": "int=3"},
    "returns": "str",
    "safety": "write", "timeout_s": 3,
}


def run(keyword="", n=3):
    return _impl(keyword, n=n)


SELFTEST = [
    {"args": {"keyword": "", "n": 1}, "check": "isinstance(result, str)", "offline": True},
]
