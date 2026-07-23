# coding=utf-8
"""
sandbox.py — ACT v2 §8 면역계의 결선층(bus.py와 같은 얇은 패턴). P11-0에서 이미 만든
safe_calc·py_sandbox 두 기관을 하나의 진입점으로 묶는다. 로직은 전부 그 기관들 안에
있다 — 이 파일은 재구현하지 않고 호출만 한다.

지금(P11-2)은 어떤 실행 루프도 아직 이 모듈을 호출하지 않는다(rules.yaml의 R01·02·
05·06 중 어느 것도 then에 calc/python을 쓰지 않는다 — 그건 R04·R07 몫이고 둘 다
inactive). 이 모듈은 ①T2~T4 검증 대상 ②미래에 brain.py(P11-3)가 `then.cmd in
(calc, python)`을 만났을 때 쓸 API를 미리 갖춰두는 것, 두 가지 목적이다.
"""
from registry import get_registry


def calc(expr):
    """안전 계산기. safe_calc_v1은 거부 시 ValueError를 던지므로(설계서 §8 AST
    화이트리스트) 여기서 잡아 균일한 {ok,result,error} 형태로 돌려준다."""
    try:
        val = get_registry().run("safe_calc", expr=expr)
        return {"ok": True, "result": val, "error": None}
    except Exception as e:
        return {"ok": False, "result": None, "error": f"{type(e).__name__}: {e}"}


def python_exec(code, why=""):
    """생성 코드 샌드박스 실행. py_sandbox_v1 자체가 이미 {ok,output,error} 형태를
    반환하고 로컬은 항상 거부한다(GITHUB_ACTIONS 가드) — 그대로 통과."""
    return get_registry().run("py_sandbox", code=code, why=why)
