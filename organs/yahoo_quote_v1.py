# coding=utf-8
"""yahoo_quote_v1 — 야후 파이낸스 시세. publish.fetch_yahoo 위임."""
import os
import sys

_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if _ROOT not in sys.path:
    sys.path.insert(0, _ROOT)

from publish import fetch_yahoo as _impl

MANIFEST = {
    "name": "yahoo_quote", "version": 1, "stable": True, "category": "감각",
    "desc": "야후 파이낸스 현재가·전일比·구간 종가열",
    "args": {"symbol": "str", "rng": "str=1mo"},
    "returns": "{price, pct, closes:list[float]}",
    "safety": "network", "timeout_s": 15,
}


def run(symbol, rng="1mo"):
    price, pct, closes = _impl(symbol, rng=rng)
    return {"price": price, "pct": pct, "closes": closes}


SELFTEST = [
    {"args": {"symbol": "^KS11"}, "check": "'price' in result and 'closes' in result", "offline": False},
]
