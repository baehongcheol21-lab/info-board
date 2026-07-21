# coding=utf-8
"""dart_rss_v1 — DART(전자공시시스템) 오늘의 공시 RSS. 키 불필요.
※ URL은 비공식 관례로 알려진 엔드포인트라 실전 검증(--smoke)이 필요하다 — 실패해도
run_tool_loop/디스패처가 예외를 에러 문자열로 흡수하므로 회의 전체는 안 죽는다(D8)."""
import os
import sys

_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if _ROOT not in sys.path:
    sys.path.insert(0, _ROOT)

from tools import fetch_rss

DART_RSS = "https://dart.fss.or.kr/api/todayRSS.xml"

MANIFEST = {
    "name": "dart_rss", "version": 1, "stable": True, "category": "감각",
    "desc": "DART 오늘의 공시 목록 (RSS, 키 불필요)",
    "args": {"max_items": "int=15"},
    "returns": "list[{title,link,published}]",
    "safety": "network", "timeout_s": 15,
}


def run(max_items=15):
    return fetch_rss(DART_RSS, max_items=max_items)


SELFTEST = [
    {"args": {"max_items": 3}, "check": "isinstance(result, list)", "offline": False},
]
