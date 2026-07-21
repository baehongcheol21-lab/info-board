# coding=utf-8
"""term_extract_v1 — 전문용어 후보 추출 (P12 용어사전 glossary.json의 채집 손).
휴리스틱: 대문자 약어(SMP·ESS 등) + 한글 기술용어 접미사 패턴."""
import re

_SUFFIXES = ("지수", "계수", "비율", "전략", "모델", "정책", "규제", "제도", "지표", "시장", "계통")
_SUFFIX_RE = re.compile("[가-힣]{2,8}(?:" + "|".join(_SUFFIXES) + ")")
_ACRONYM_RE = re.compile(r"\b[A-Z]{2,6}\b")

MANIFEST = {
    "name": "term_extract", "version": 1, "stable": True, "category": "텍스트",
    "desc": "텍스트에서 전문용어 후보(대문자 약어 + 한글 기술접미사 패턴) 추출",
    "args": {"text": "str", "max_terms": "int=10"},
    "returns": "list[str]",
    "safety": "pure", "timeout_s": 1,
}


def run(text, max_terms=10):
    terms = set(_ACRONYM_RE.findall(text)) | set(_SUFFIX_RE.findall(text))
    return sorted(terms)[:max_terms]


SELFTEST = [
    {"args": {"text": "SMP 계통한계가격이 상승하며 전력 공급예비율이 하락했다"},
     "check": "'SMP' in result and any('비율' in t for t in result)", "offline": True},
]
