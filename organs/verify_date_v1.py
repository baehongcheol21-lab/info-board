# coding=utf-8
"""verify_date_v1 — 검색 결과의 신선도 검사 (rules.yaml R01의 판단부:
"검색 결과가 전부 48시간 이전이면 재검색"의 실제 조건 판정)."""
import datetime
from email.utils import parsedate_to_datetime

MANIFEST = {
    "name": "verify_date", "version": 1, "stable": True, "category": "검증",
    "desc": "뉴스/공시 항목 목록의 최신 발행일이 max_age_h 이내인지 검사",
    "args": {"items": "list[{published:str}]", "max_age_h": "float=48"},
    "returns": "{fresh:bool, newest:str|None, all_stale:bool}",
    "safety": "pure", "timeout_s": 1,
}


def run(items, max_age_h=48):
    now = datetime.datetime.now(datetime.timezone.utc)
    newest = None
    for it in items:
        try:
            pub = parsedate_to_datetime(it.get("published", ""))
            if pub.tzinfo is None:
                pub = pub.replace(tzinfo=datetime.timezone.utc)
            if newest is None or pub > newest:
                newest = pub
        except Exception:
            continue
    if newest is None:
        return {"fresh": False, "newest": None, "all_stale": True}
    age_h = (now - newest).total_seconds() / 3600
    return {"fresh": age_h <= max_age_h, "newest": newest.isoformat(), "all_stale": age_h > max_age_h}


SELFTEST = [
    {"args": {"items": [{"published": "Mon, 01 Jan 2001 00:00:00 GMT"}]},
     "check": "result['all_stale'] is True", "offline": True},
    {"args": {"items": []}, "check": "result['newest'] is None", "offline": True},
]
