# coding=utf-8
"""rate_limit_v1 — 다음 호출까지 대기해야 할 시간 계산 (gemini_keys.py의 4.5초 간격 로직을
재사용 가능한 순수함수로). 실제 sleep은 호출자(미래의 brain.py)가 한다 — 이 기관은 계산만
해서 테스트 가능하게 유지한다."""
import time

MANIFEST = {
    "name": "rate_limit", "version": 1, "stable": True, "category": "실행",
    "desc": "마지막 호출 시각 기준으로 min_interval_s를 채우려면 몇 초 더 기다려야 하는지 계산",
    "args": {"last_call_ts": "float", "min_interval_s": "float=4.5"},
    "returns": "{wait_s: float, now: float}",
    "safety": "pure", "timeout_s": 1,
}


def run(last_call_ts, min_interval_s=4.5):
    now = time.time()
    wait = min_interval_s - (now - last_call_ts)
    return {"wait_s": max(0.0, round(wait, 2)), "now": now}


SELFTEST = [
    {"args": {"last_call_ts": 0.0, "min_interval_s": 4.5}, "check": "result['wait_s'] == 0.0",
     "offline": True},
]
