# coding=utf-8
"""rule_engine_v1 — 룰 1개를 이벤트에 평가한다 (설계서_ACT_자율실행.md §4 반사신경의 축소판).
cond는 여기 등록된 함수 이름만 허용한다(eval 금지 — 룰 시스템 자체가 새 공격면이 되지 않게).
P11-1에서 rules.yaml 전체를 순회하는 실제 엔진이 지어질 때 이 organ이 평가기 코어가 된다."""

_CONDITIONS = {
    "empty_result": lambda ev: not ev.get("payload", {}).get("result"),
    "has_error": lambda ev: bool(ev.get("payload", {}).get("error")),
    "duplicate_sig": lambda ev: bool(ev.get("payload", {}).get("duplicate")),
}

MANIFEST = {
    "name": "rule_engine", "version": 1, "stable": True, "category": "실행",
    "desc": "룰 1개(when.cond)를 이벤트 dict에 평가 — cond는 등록된 함수만 허용",
    "args": {"rule": "dict", "event": "dict"},
    "returns": "{fired:bool, then:dict?, reason:str?}",
    "safety": "pure", "timeout_s": 1,
}


def run(rule, event):
    cond_name = (rule.get("when") or {}).get("cond")
    if not cond_name:
        return {"fired": False, "reason": "cond 없음"}
    checker = _CONDITIONS.get(cond_name)
    if not checker:
        return {"fired": False, "reason": f"알 수 없는 cond: {cond_name}"}
    try:
        matched = bool(checker(event))
    except Exception as e:
        return {"fired": False, "reason": f"cond 평가 실패: {e}"}
    if matched:
        return {"fired": True, "then": rule.get("then", {})}
    return {"fired": False, "reason": "조건 불일치"}


SELFTEST = [
    {"args": {"rule": {"when": {"cond": "has_error"}, "then": {"cmd": "hold"}},
              "event": {"payload": {"error": "실패했음"}}},
     "check": "result['fired'] is True and result['then']['cmd'] == 'hold'", "offline": True},
    {"args": {"rule": {"when": {"cond": "has_error"}}, "event": {"payload": {}}},
     "check": "result['fired'] is False", "offline": True},
]
