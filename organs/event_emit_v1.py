# coding=utf-8
"""event_emit_v1 — 사용자가 정확히 지목한 그 모듈: "저장한 걸 다른 모듈에 전달하는 모듈".
스트림(stream/YYYY-MM-stream.jsonl)에 이벤트 한 줄을 append한다. 설계서_ACT_자율실행.md
§3의 Event 스키마(eid·ts·type·actor·topic·payload·cause)를 그대로 따르며, P11-1(bus.py)이
지어질 때 이 organ이 그 기반이 된다.

dry_run=True면 실제 파일에 쓰지 않고 만들어질 row만 돌려준다 — 자동 자가시험이 매 registry
로드마다 실제 stream 파일을 오염시키지 않게 하려는 안전장치(retry_queue와 같은 원칙)."""
import os
import json
import time
import hashlib
import datetime

_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
_STREAM_DIR = os.path.join(_ROOT, "stream")
_KST = datetime.timezone(datetime.timedelta(hours=9))

MANIFEST = {
    "name": "event_emit", "version": 1, "stable": True, "category": "기억",
    "desc": "이벤트 한 줄을 스트림(stream/YYYY-MM-stream.jsonl)에 append",
    "args": {"type": "str", "actor": "str", "topic": "str=''", "payload": "dict?=None",
              "cause": "str?=None", "dry_run": "bool=False"},
    "returns": "{eid:str|None, error:str|None}",
    "safety": "write", "timeout_s": 2,
}


def run(type, actor, topic="", payload=None, cause=None, dry_run=False):
    now = datetime.datetime.now(_KST)
    eid = hashlib.md5(f"{now.isoformat()}{actor}{topic}{time.time()}".encode("utf-8")).hexdigest()[:10]
    row = {"eid": eid, "ts": now.isoformat(timespec="seconds"), "type": type, "actor": actor,
           "topic": topic, "payload": payload or {}, "cause": cause}
    if dry_run:
        return {"eid": eid, "error": None, "dry_run": True, "row": row}
    try:
        os.makedirs(_STREAM_DIR, exist_ok=True)
        path = os.path.join(_STREAM_DIR, f"{now:%Y-%m}-stream.jsonl")
        with open(path, "a", encoding="utf-8") as f:
            f.write(json.dumps(row, ensure_ascii=False) + "\n")
        return {"eid": eid, "error": None}
    except Exception as e:
        return {"eid": None, "error": f"{e.__class__.__name__}: {e}"}


SELFTEST = [
    {"args": {"type": "agent_output", "actor": "U1", "topic": "코스피", "dry_run": True},
     "check": "result['eid'] is not None and result['row']['actor'] == 'U1'", "offline": True},
]
