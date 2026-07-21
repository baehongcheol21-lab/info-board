# coding=utf-8
"""glossary_store_v1 — 용어사전(P12) 조회/등록. 처음 나온 용어만 1콜로 해설을 생성해 여기
저장해두면, 재등장 시 0콜로 재사용된다(P12 "풀스로틀" 설계의 용어사전 구현체)."""
import os
import json

_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
_FILE = os.path.join(_ROOT, "glossary.json")

MANIFEST = {
    "name": "glossary_store", "version": 1, "stable": True, "category": "기억",
    "desc": "용어사전 조회(get)/등록(set)/전체조회(all)",
    "args": {"action": "str(get|set|all)", "term": "str?=None", "definition": "str?=None"},
    "returns": "dict",
    "safety": "write", "timeout_s": 2,
}


def _load():
    try:
        return json.load(open(_FILE, encoding="utf-8"))
    except (OSError, ValueError):
        return {}


def _save(d):
    with open(_FILE, "w", encoding="utf-8") as f:
        json.dump(d, f, ensure_ascii=False, indent=1)


def run(action, term=None, definition=None):
    g = _load()
    if action == "get":
        return {"term": term, "definition": g.get(term)}
    if action == "all":
        return g
    if action == "set":
        g[term] = definition
        _save(g)
        return {"term": term, "definition": definition}
    raise ValueError(f"알 수 없는 action: {action}")


SELFTEST = [
    {"args": {"action": "get", "term": "__없는용어__"}, "check": "result['definition'] is None",
     "offline": True},
]
