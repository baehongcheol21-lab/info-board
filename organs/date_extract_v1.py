# coding=utf-8
"""date_extract_v1 — 텍스트 속 날짜 표현 추출 (검증 파이프라인의 재료 채집기)."""
import re

_PATTERNS = [r"\d{4}[-.]\d{1,2}[-.]\d{1,2}", r"\d{1,2}월\s?\d{1,2}일"]
_RE = re.compile("|".join(_PATTERNS))

MANIFEST = {
    "name": "date_extract", "version": 1, "stable": True, "category": "텍스트",
    "desc": "텍스트에서 날짜 표현(YYYY-MM-DD, N월 N일 등) 추출",
    "args": {"text": "str"},
    "returns": "list[str]",
    "safety": "pure", "timeout_s": 1,
}


def run(text):
    return _RE.findall(text)


SELFTEST = [
    {"args": {"text": "2026-07-21 회의에서 논의했고 7월 20일에도 있었다"},
     "check": "len(result) == 2", "offline": True},
]
