# coding=utf-8
"""pct_claim_extract_v1 — 텍스트 속 퍼센트 주장 추출 (rules.yaml R04의 손 —
"요원 발언에 숫자 계산 주장이 있으면 검산 큐에 등록"을 위한 재료 채집기)."""
import re

_PCT_RE = re.compile(r"([+-]?\d+(?:\.\d+)?)\s*%")

MANIFEST = {
    "name": "pct_claim_extract", "version": 1, "stable": True, "category": "계산",
    "desc": "텍스트에서 '숫자%' 형태의 주장을 전부 찾아 위치 맥락과 함께 반환",
    "args": {"text": "str"},
    "returns": "list[{claim_pct: float, context: str}]",
    "safety": "pure", "timeout_s": 1,
}


def run(text):
    out = []
    for m in _PCT_RE.finditer(text):
        start = max(0, m.start() - 15)
        out.append({"claim_pct": float(m.group(1)), "context": text[start:m.end()]})
    return out


SELFTEST = [
    {"args": {"text": "코스피가 전일比 6.37% 하락했습니다. 반도체는 -2.1% 조정."},
     "check": "len(result) == 2 and result[0]['claim_pct'] == 6.37", "offline": True},
]
