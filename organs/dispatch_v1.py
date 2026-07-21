# coding=utf-8
"""dispatch_v1 — 사용자가 정확히 지목한 그 모듈: "그대로 실행하는 모듈".
cmd_parse가 뽑아낸 명령 dict를 받아 registry에서 실제 기관을 찾아 실행한다. 예외는 삼켜서
에러 문자열로 바꾼다(D8 원칙 — 실행 실패가 회의를 죽이면 안 됨).

safety는 보수적으로 "network"로 표기했다 — 이 기관 자체는 순수 라우팅이지만, 무엇을
디스패치하느냐에 따라 실제 안전 등급이 달라지므로(호출 대상 기관의 safety를 상속) 가장
느슨하지 않은 쪽으로 표기해 둔다. 실제 등급별 통제(sandbox=클라우드 전용 등)는 호출되는
기관 자신의 run() 안에서 이미 강제된다(예: py_sandbox_v1의 GITHUB_ACTIONS 가드)."""
import os
import sys

_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if _ROOT not in sys.path:
    sys.path.insert(0, _ROOT)

import registry

MANIFEST = {
    "name": "dispatch", "version": 1, "stable": True, "category": "실행",
    "desc": "명령 dict({\"cmd\"/\"tool\":이름, ...인자})를 받아 해당 기관을 찾아 실행",
    "args": {"cmd_obj": "dict"},
    "returns": "{ok:bool, result:any, error:str|None}",
    "safety": "network", "timeout_s": 25,
}


def run(cmd_obj):
    name = cmd_obj.get("cmd") or cmd_obj.get("tool")
    if not name:
        return {"ok": False, "result": None, "error": "cmd/tool 필드 없음"}
    version = cmd_obj.get("v")
    kwargs = {k: v for k, v in cmd_obj.items() if k not in ("cmd", "tool", "v")}
    # 레거시 호환: {"tool":"x","args":{...}} 형태면 args를 펼쳐서 넘긴다
    if "args" in kwargs and isinstance(kwargs["args"], dict) and len(kwargs) == 1:
        kwargs = kwargs["args"]
    try:
        reg = registry.get_registry()
        result = reg.run(name, version=version, **kwargs)
        return {"ok": True, "result": result, "error": None}
    except Exception as e:
        return {"ok": False, "result": None, "error": f"{type(e).__name__}: {e}"}


SELFTEST = [
    {"args": {"cmd_obj": {"cmd": "pct_change", "history": [["d1", 100], ["d2", 110]], "days_back": 1}},
     "check": "result['ok'] is True and result['result'] == 10.0", "offline": True},
    {"args": {"cmd_obj": {"cmd": "존재하지않는기관"}},
     "check": "result['ok'] is False", "offline": True},
]
