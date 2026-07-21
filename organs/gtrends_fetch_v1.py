# coding=utf-8
"""gtrends_fetch_v1 — 구글 트렌드 조회 (O6).

dashboard/gtrends.py의 로직을 자체 포함(self-contained)한 복제본이다. info-board(이 저장소)와
dashboard는 서로 다른 독립 저장소라 직접 import가 불가능하다 — gemini_keys.py와 같은
"의도적 중복" 관례를 그대로 따른다. 로직을 고칠 일이 생기면 양쪽 다 반영할 것.

구글은 pytrends를 자주 차단한다(특히 클라우드 IP) — 그래서 이 기관은 로컬 실행을 전제로
6시간 캐시+마지막 성공값 폴백을 그대로 가진다. pytrends 미설치 환경(클라우드 등)에서도
예외를 삼키고 폴백 결과를 반환한다(도서관이 죽지 않음, D8 원칙)."""
import os
import sys
import json
import time
import datetime

_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if _ROOT not in sys.path:
    sys.path.insert(0, _ROOT)

_CACHE = os.path.join(_ROOT, "gtrends_cache.json")
_CACHE_TTL = 6 * 3600
_WATCH_KEYWORDS = ["전력수급", "반도체", "ESS", "전기요금", "원전"]

MANIFEST = {
    "name": "gtrends_fetch", "version": 1, "stable": True, "category": "감각",
    "desc": "구글 트렌드 관심도·급상승 연관검색어 (6h 캐시, 실패시 마지막 성공값 폴백)",
    "args": {"keywords": "list[str]?=None", "force": "bool=False"},
    "returns": "{series, rising, fetched, stale, source}",
    "safety": "network", "timeout_s": 30,
}


def _load_cache():
    try:
        with open(_CACHE, encoding="utf-8") as f:
            return json.load(f)
    except (OSError, ValueError):
        return {}


def _save_cache(d):
    with open(_CACHE, "w", encoding="utf-8") as f:
        json.dump(d, f, ensure_ascii=False)


def _fetch_live(keywords):
    from pytrends.request import TrendReq
    p = TrendReq(hl="ko-KR", tz=540, timeout=(10, 25))
    p.build_payload(keywords[:5], timeframe="now 7-d", geo="KR")
    iot = p.interest_over_time()
    series = {}
    if not iot.empty:
        for kw in keywords[:5]:
            if kw in iot.columns:
                series[kw] = [int(v) for v in iot[kw].tolist()][-56:]
    rising = {}
    try:
        rq = p.related_queries()
        for kw in keywords[:5]:
            r = (rq.get(kw) or {}).get("rising")
            if r is not None and not r.empty:
                rising[kw] = [{"query": q, "value": int(v)}
                              for q, v in zip(r["query"][:5], r["value"][:5])]
    except Exception:
        pass
    return {"series": series, "rising": rising,
            "fetched": datetime.datetime.now().isoformat(timespec="minutes")}


def run(keywords=None, force=False):
    keywords = keywords or _WATCH_KEYWORDS
    cache = _load_cache()
    now = time.time()
    fresh = cache.get("ts", 0) + _CACHE_TTL > now and not force
    if fresh and cache.get("data"):
        return {**cache["data"], "stale": False, "source": "cache"}
    try:
        data = _fetch_live(keywords)
        _save_cache({"ts": now, "data": data})
        return {**data, "stale": False, "source": "live"}
    except Exception as e:
        if cache.get("data"):
            return {**cache["data"], "stale": True, "source": f"fallback({type(e).__name__})"}
        return {"series": {}, "rising": {}, "fetched": "", "stale": True,
                "source": f"실패({type(e).__name__}) — 구글 차단 가능성. 잠시 후 재시도"}


SELFTEST = [
    {"args": {}, "check": "'series' in result and 'source' in result", "offline": True},
]
