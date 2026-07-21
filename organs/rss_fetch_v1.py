# coding=utf-8
"""rss_fetch_v1 — 범용 RSS 파서. tools.fetch_rss 위임."""
import os
import sys

_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if _ROOT not in sys.path:
    sys.path.insert(0, _ROOT)

from tools import fetch_rss as _impl

MANIFEST = {
    "name": "rss_fetch", "version": 1, "stable": True, "category": "감각",
    "desc": "임의 RSS 주소 파싱",
    "args": {"url": "str", "max_items": "int=15"},
    "returns": "list[{title,link,published}]",
    "safety": "network", "timeout_s": 15,
}


def run(url, max_items=15):
    return _impl(url, max_items=max_items)


SELFTEST = [
    {"args": {"url": "https://www.electimes.com/rss/allArticle.xml", "max_items": 3},
     "check": "isinstance(result, list)", "offline": False},
]
