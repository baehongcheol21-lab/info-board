# coding=utf-8
"""experience_append_v1 — 일화기억(ACT §6) 저장소. 회의 하나의 전체 기록을
experience/YYYY-MM.jsonl에 append-only로 쌓는다 — "모든 수행결과를 파일에 계속 누적"이라는
사용자 요구(원장 #65)의 직접 구현체. discussions/(결과 보고서)와 다르다: 여기는 과정 전체다.

dry_run=True면 실제 파일에 쓰지 않는다(retry_queue·event_emit과 같은 안전장치)."""
import os
import json
import datetime

_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
_EXP_DIR = os.path.join(_ROOT, "experience")
_KST = datetime.timezone(datetime.timedelta(hours=9))

MANIFEST = {
    "name": "experience_append", "version": 1, "stable": True, "category": "기억",
    "desc": "회의 1건의 기록을 experience/YYYY-MM.jsonl에 영구 append",
    "args": {"meeting_id": "str", "record": "dict", "dry_run": "bool=False"},
    "returns": "{ok:bool, error:str|None}",
    "safety": "write", "timeout_s": 2,
}


def run(meeting_id, record, dry_run=False):
    now = datetime.datetime.now(_KST)
    row = {"meeting_id": meeting_id, "ts": now.isoformat(timespec="seconds"), "record": record}
    if dry_run:
        return {"ok": True, "error": None, "dry_run": True, "row": row}
    try:
        os.makedirs(_EXP_DIR, exist_ok=True)
        path = os.path.join(_EXP_DIR, f"{now:%Y-%m}.jsonl")
        with open(path, "a", encoding="utf-8") as f:
            f.write(json.dumps(row, ensure_ascii=False) + "\n")
        return {"ok": True, "error": None}
    except Exception as e:
        return {"ok": False, "error": f"{e.__class__.__name__}: {e}"}


SELFTEST = [
    {"args": {"meeting_id": "test", "record": {"a": 1}, "dry_run": True},
     "check": "result['ok'] is True and result['row']['meeting_id'] == 'test'", "offline": True},
]
