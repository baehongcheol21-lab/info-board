# coding=utf-8
"""summary_clip_v1 — 단어 경계에서 자연스럽게 자르기. publish._trunc 위임."""
import os
import sys

_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if _ROOT not in sys.path:
    sys.path.insert(0, _ROOT)

from publish import _trunc as _impl

MANIFEST = {
    "name": "summary_clip", "version": 1, "stable": True, "category": "텍스트",
    "desc": "n자 근처 공백에서 자연스럽게 문자열을 자른다(단어 중간 절단 방지)",
    "args": {"text": "str", "n": "int"},
    "returns": "str",
    "safety": "pure", "timeout_s": 1,
}


def run(text, n):
    return _impl(text, n)


SELFTEST = [
    {"args": {"text": "코스피 급락 원인 분석 결과입니다", "n": 8},
     "check": "len(result) <= 8 or ' ' not in result[8:]", "offline": True},
]
