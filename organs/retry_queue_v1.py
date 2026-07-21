# coding=utf-8
"""retry_queue_v1 — 보류 큐 조회/등록/해제. discuss.py의 _load/_save/_push/_clear_retry_queue
로직을 자체 포함(동일 상대경로 "retry_queue.json" 사용 — discuss.py와 같은 파일을 공유한다).
discuss.py 자체의 함수는 그대로 두고(동작 불변) 이 기관은 registry 경유 접근용 별도 창구다.

SELFTEST는 action="load"(읽기 전용)만 검증한다 — push/clear는 실제 retry_queue.json을
건드리므로 자동 자가시험에서 실행하지 않는다(운영 데이터 오염 방지)."""
import json

MANIFEST = {
    "name": "retry_queue", "version": 1, "stable": True, "category": "기억",
    "desc": "보류 큐 조회(load)/등록(push)/해제(clear). id는 지표 id",
    "args": {"action": "str(load|push|clear)", "id": "str?=None", "name": "str?=None",
             "reason": "str?=None"},
    "returns": "list[{id,name,reason,ts}]",
    "safety": "write", "timeout_s": 2,
}

_FILE = "retry_queue.json"


def _load():
    try:
        return json.load(open(_FILE, encoding="utf-8"))
    except (OSError, ValueError):
        return []


def _save(q):
    with open(_FILE, "w", encoding="utf-8") as f:
        json.dump(q, f, ensure_ascii=False, indent=1)


def run(action, id=None, name=None, reason=None):
    import datetime
    if action == "load":
        return _load()
    if action == "push":
        q = [x for x in _load() if x["id"] != id]
        q.append({"id": id, "name": name, "reason": reason,
                  "ts": datetime.datetime.now().isoformat(timespec="minutes")})
        q = q[-10:]
        _save(q)
        return q
    if action == "clear":
        q = [x for x in _load() if x["id"] != id]
        _save(q)
        return q
    raise ValueError(f"알 수 없는 action: {action}")


SELFTEST = [
    {"args": {"action": "load"}, "check": "isinstance(result, list)", "offline": True},
]
