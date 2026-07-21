# coding=utf-8
"""verify_style_v1 — 채움말·뻔한 뜻풀이 0콜 자동검사 (STYLE 문체규칙의 기계적 집행,
설계서_기관도서관.md에서 "문체규칙의 자동 집행"으로 명시된 그 검사기).
목록은 discuss.py의 STYLE 규칙 예시(체크리스트 B)에서 가져온 대표 패턴 — 완전 목록이
아니라 대표 사례. 더 정교한 검사(감성분석 등)는 필요해지면 v2로."""

_FILLERS = ("힘쓰고 있습니다", "최선을 다하", "미래를 밝힙니다", "지켜봐야 할 것입니다",
            "귀추가 주목됩니다", "기대되는 바입니다")
_CLICHE_EXPLAIN = ("외국 돈과 바꾸는 비율", "물건 값이 오르는 것")

MANIFEST = {
    "name": "verify_style", "version": 1, "stable": True, "category": "검증",
    "desc": "채움말·뻔한 뜻풀이 등 STYLE 위반 패턴을 0콜로 검사",
    "args": {"text": "str"},
    "returns": "{ok:bool, violations:list[str]}",
    "safety": "pure", "timeout_s": 1,
}


def run(text):
    violations = []
    for f in _FILLERS:
        if f in text:
            violations.append(f"채움말: '{f}'")
    for c in _CLICHE_EXPLAIN:
        if c in text:
            violations.append(f"뻔한 뜻풀이: '{c}'")
    return {"ok": len(violations) == 0, "violations": violations}


SELFTEST = [
    {"args": {"text": "저희 회사는 최선을 다하고 있습니다."}, "check": "result['ok'] is False", "offline": True},
    {"args": {"text": "코스피가 1.8% 하락했습니다. [출처: 한국거래소]"},
     "check": "result['ok'] is True", "offline": True},
]
