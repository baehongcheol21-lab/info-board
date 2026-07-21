# coding=utf-8
"""num_extract_v1 — 텍스트 속 숫자(천단위 콤마 포함) 추출."""
import re

_NUM_RE = re.compile(r"[+-]?\d{1,3}(?:,\d{3})*(?:\.\d+)?")

MANIFEST = {
    "name": "num_extract", "version": 1, "stable": True, "category": "텍스트",
    "desc": "텍스트에서 숫자(천단위 콤마 허용)를 전부 float로 추출",
    "args": {"text": "str"},
    "returns": "list[float]",
    "safety": "pure", "timeout_s": 1,
}


def run(text):
    out = []
    for m in _NUM_RE.finditer(text):
        try:
            out.append(float(m.group(0).replace(",", "")))
        except ValueError:
            continue
    return out


SELFTEST = [
    {"args": {"text": "코스피 2,571.40, 거래대금 12,340억원"},
     "check": "result[0] == 2571.4 and result[1] == 12340.0", "offline": True},
]
