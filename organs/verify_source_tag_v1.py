# coding=utf-8
"""verify_source_tag_v1 — STYLE 규칙("사실 주장에는 [출처:] 태그, 없으면 (추정)") 준수 여부 검사."""

MANIFEST = {
    "name": "verify_source_tag", "version": 1, "stable": True, "category": "검증",
    "desc": "텍스트에 [출처:] 또는 (추정) 표기가 있는지 검사",
    "args": {"text": "str"},
    "returns": "bool",
    "safety": "pure", "timeout_s": 1,
}


def run(text):
    return "[출처:" in text or "(추정)" in text


SELFTEST = [
    {"args": {"text": "코스피가 급락했습니다. [출처: 한국거래소]"}, "check": "result is True", "offline": True},
    {"args": {"text": "코스피가 급락했습니다."}, "check": "result is False", "offline": True},
]
