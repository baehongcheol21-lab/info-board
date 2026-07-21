# coding=utf-8
"""verify_empty_v1 — 결과가 비었거나 실패 신호를 담고 있는지 검사 (rules.yaml R05의 판단부)."""

_FAIL_WORDS = ("실패", "오류", "error")

MANIFEST = {
    "name": "verify_empty", "version": 1, "stable": True, "category": "검증",
    "desc": "도구 결과가 비었거나(None/빈 리스트·딕셔너리·문자열) 실패 신호를 담고 있는지 검사",
    "args": {"result": "any"},
    "returns": "bool",
    "safety": "pure", "timeout_s": 1,
}


def run(result):
    if result is None:
        return True
    if isinstance(result, (list, dict, str)) and len(result) == 0:
        return True
    if isinstance(result, str) and any(w in result or w in result.lower() for w in _FAIL_WORDS):
        return True
    return False


SELFTEST = [
    {"args": {"result": []}, "check": "result is True", "offline": True},
    {"args": {"result": "검색 실패: timeout"}, "check": "result is True", "offline": True},
    {"args": {"result": [1, 2, 3]}, "check": "result is False", "offline": True},
]
