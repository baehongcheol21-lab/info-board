# coding=utf-8
"""verify_topic_v1 — 검색어-주제 정합 검사. tools._query_mismatch 위임
(2026-07-20 감사에서 발견된 "코스피 회의에서 삼성전자 검색" 사례를 잡는 바로 그 검사기)."""
import os
import sys

_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if _ROOT not in sys.path:
    sys.path.insert(0, _ROOT)

from tools import _query_mismatch as _impl

MANIFEST = {
    "name": "verify_topic", "version": 1, "stable": True, "category": "검증",
    "desc": "search 계열 명령의 query가 topic과 무관한지 검사 (search_news 외 도구는 항상 False)",
    "args": {"tool": "str", "args": "dict", "topic": "str"},
    "returns": "bool",
    "safety": "pure", "timeout_s": 1,
}


def run(tool, args, topic):
    return _impl(tool, args, topic)


SELFTEST = [
    {"args": {"tool": "search_news", "args": {"query": "삼성전자 주가 급락"}, "topic": "코스피"},
     "check": "result is True", "offline": True},
    {"args": {"tool": "search_news", "args": {"query": "코스피 급락 원인"}, "topic": "코스피"},
     "check": "result is False", "offline": True},
]
