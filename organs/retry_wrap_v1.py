# coding=utf-8
"""retry_wrap_v1 — dispatch를 재시도와 함께 감싼다. registry.get("dispatch")로 간접 참조하므로
dispatch가 v2로 교체돼도(stable 플래그만 바뀌면) 이 기관은 코드 수정 없이 새 버전을 쓴다."""
import os
import sys
import time

_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if _ROOT not in sys.path:
    sys.path.insert(0, _ROOT)

import registry

MANIFEST = {
    "name": "retry_wrap", "version": 1, "stable": True, "category": "실행",
    "desc": "dispatch 실행을 max_tries까지 재시도(실패 시 backoff_s 대기 후 재시도)",
    "args": {"cmd_obj": "dict", "max_tries": "int=2", "backoff_s": "float=1.0"},
    "returns": "{ok:bool, result:any, error:str|None, attempts:int}",
    "safety": "network", "timeout_s": 60,
}


def run(cmd_obj, max_tries=2, backoff_s=1.0):
    reg = registry.get_registry()
    last_err = None
    for attempt in range(1, max_tries + 1):
        res = reg.run("dispatch", cmd_obj=cmd_obj)
        if res.get("ok"):
            return {**res, "attempts": attempt}
        last_err = res.get("error")
        if attempt < max_tries:
            time.sleep(backoff_s)
    return {"ok": False, "result": None, "error": last_err, "attempts": max_tries}


SELFTEST = [
    {"args": {"cmd_obj": {"cmd": "pct_change", "history": [["d1", 100], ["d2", 90]], "days_back": 1},
              "max_tries": 2},
     "check": "result['ok'] is True and result['attempts'] == 1", "offline": True},
]
