# coding=utf-8
"""article_extract_v1 — 기사 본문 추출. tools.get_article 위임."""
import os
import sys

_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if _ROOT not in sys.path:
    sys.path.insert(0, _ROOT)

from tools import get_article as _impl

MANIFEST = {
    "name": "article_extract", "version": 1, "stable": True, "category": "감각",
    "desc": "기사 URL의 본문 텍스트 추출",
    "args": {"url": "str", "max_chars": "int=2500"},
    "returns": "str",
    "safety": "network", "timeout_s": 20,
}


def run(url, max_chars=2500):
    return _impl(url, max_chars=max_chars)


SELFTEST = [
    {"args": {"url": "https://www.electimes.com/"}, "check": "isinstance(result, str)", "offline": False},
]
