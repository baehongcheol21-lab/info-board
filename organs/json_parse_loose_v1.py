# coding=utf-8
"""json_parse_loose_v1 — 텍스트 중간의 JSON 객체를 관대하게 추출.
discuss.py의 B2 분류결과 파싱 로직(cls[cls.find("{"):cls.rfind("}")+1]) 그대로."""
import json

MANIFEST = {
    "name": "json_parse_loose", "version": 1, "stable": True, "category": "텍스트",
    "desc": "텍스트 중 첫 '{' ~ 마지막 '}' 구간을 JSON으로 파싱, 실패 시 폴백 dict",
    "args": {"text": "str", "fallback_key": "str=raw"},
    "returns": "dict",
    "safety": "pure", "timeout_s": 1,
}


def run(text, fallback_key="raw"):
    try:
        return json.loads(text[text.find("{"):text.rfind("}") + 1])
    except (ValueError, TypeError):
        return {fallback_key: text[:300]}


SELFTEST = [
    {"args": {"text": '설명입니다 {"a": 1, "b": "c"} 끝'}, "check": "result == {'a': 1, 'b': 'c'}",
     "offline": True},
    {"args": {"text": "JSON 아님"}, "check": "'raw' in result", "offline": True},
]
