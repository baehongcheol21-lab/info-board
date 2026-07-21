# coding=utf-8
"""news_search_dated_v1 — 날짜 필터가 있는 뉴스 검색 (rules.yaml R01의 손 — "48시간 이전
기사뿐이면 date_after로 자동 재검색"을 실제로 수행하는 기관). news_search를 호출한 뒤
발행일이 date_after 이전인 항목을 걸러낸다. RSS pubDate 파싱 실패 항목은 보수적으로 제외."""
import os
import sys
import datetime
from email.utils import parsedate_to_datetime

_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if _ROOT not in sys.path:
    sys.path.insert(0, _ROOT)

from tools import search_news

MANIFEST = {
    "name": "news_search_dated", "version": 1, "stable": True, "category": "감각",
    "desc": "구글뉴스 검색 + date_after(YYYY-MM-DD) 이후 발행분만 필터",
    "args": {"query": "str", "date_after": "str", "max_items": "int=6"},
    "returns": "list[{title,link,published}]",
    "safety": "network", "timeout_s": 15,
}


def run(query, date_after, max_items=6):
    items = search_news(query, max_items=max_items * 3)
    cutoff = datetime.datetime.fromisoformat(date_after).replace(tzinfo=datetime.timezone.utc)
    out = []
    for it in items:
        try:
            pub = parsedate_to_datetime(it.get("published", ""))
            if pub.tzinfo is None:
                pub = pub.replace(tzinfo=datetime.timezone.utc)
            if pub >= cutoff:
                out.append(it)
        except Exception:
            continue  # 날짜 파싱 실패는 신선도를 증명 못 하므로 제외(보수적)
    return out[:max_items]


SELFTEST = [
    {"args": {"query": "코스피", "date_after": "2020-01-01"}, "check": "isinstance(result, list)",
     "offline": False},
]
