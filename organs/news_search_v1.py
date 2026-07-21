# coding=utf-8
"""news_search_v1 — 구글뉴스 RSS 검색. tools.search_news를 그대로 위임한다 (재구현 금지)."""
import os
import sys

_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if _ROOT not in sys.path:
    sys.path.insert(0, _ROOT)

from tools import search_news as _impl

MANIFEST = {
    "name": "news_search", "version": 1, "stable": True, "category": "감각",
    "desc": "구글뉴스 RSS 검색 (키 불필요)",
    "args": {"query": "str", "max_items": "int=6"},
    "returns": "list[{title,link,published}]",
    "safety": "network", "timeout_s": 15,
}


def run(query, max_items=6):
    return _impl(query, max_items=max_items)


SELFTEST = [
    {"args": {"query": "코스피", "max_items": 3}, "check": "isinstance(result, list)", "offline": False},
]
