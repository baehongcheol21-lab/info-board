# coding=utf-8
"""safe_calc_v1 — AST 화이트리스트 기반 안전 계산기. ACT v2 명령사전의 "calc" 동사 구현체
(설계서_ACT_자율실행.md §4). eval을 쓰지만 파싱된 AST가 허용 노드·허용 이름·허용 함수
호출만으로 구성됐는지 먼저 검사하므로 임의 코드 실행이 불가능하다 — sandbox(F02)와는
다른 신뢰 등급."""
import ast
import math
import statistics

_ALLOWED_NAMES = {"pi": math.pi, "e": math.e}
_ALLOWED_FUNCS = {"abs": abs, "round": round, "min": min, "max": max, "sum": sum, "len": len,
                   "sqrt": math.sqrt, "log": math.log, "exp": math.exp,
                   "mean": statistics.fmean, "stdev": statistics.pstdev}
_ALLOWED_NODES = (ast.Expression, ast.BinOp, ast.UnaryOp, ast.Constant, ast.Name, ast.Call,
                   ast.List, ast.Tuple, ast.Load, ast.keyword,
                   ast.Add, ast.Sub, ast.Mult, ast.Div, ast.Pow, ast.Mod, ast.FloorDiv,
                   ast.USub, ast.UAdd)

MANIFEST = {
    "name": "safe_calc", "version": 1, "stable": True, "category": "계산",
    "desc": "안전 수식 계산 (사칙연산·abs/round/min/max/sum/len/sqrt/log/exp/mean/stdev, pi·e)",
    "args": {"expr": "str"},
    "returns": "float | int | list",
    "safety": "pure", "timeout_s": 2,
}


def _check(node):
    """ast.Name은 두 문맥에서 나온다: ①Call의 func(함수 이름, _ALLOWED_FUNCS로 검사)
    ②그 외 값 참조(상수, _ALLOWED_NAMES로 검사). 이 둘을 구분 안 하고 한 분기에서
    같이 검사하면 round·sqrt 같은 함수명이 "허용 안 된 이름"으로 오검출된다(실측으로 발견)."""
    if not isinstance(node, _ALLOWED_NODES):
        raise ValueError(f"calc 거부: 허용 안 된 문법({type(node).__name__})")
    if isinstance(node, ast.Constant) and not isinstance(node.value, (int, float)):
        raise ValueError("calc 거부: 숫자가 아닌 상수")
    if isinstance(node, ast.Call):
        if not isinstance(node.func, ast.Name) or node.func.id not in _ALLOWED_FUNCS:
            raise ValueError("calc 거부: 허용 안 된 함수 호출")
        for arg in node.args:
            _check(arg)
        for kw in node.keywords:
            _check(kw.value)
        return  # func 이름은 이미 검증 끝 — 아래 Name 분기로 다시 내려가지 않는다
    if isinstance(node, ast.Name):
        if node.id not in _ALLOWED_NAMES:
            raise ValueError(f"calc 거부: 허용 안 된 이름({node.id})")
        return
    for child in ast.iter_child_nodes(node):
        _check(child)


def run(expr):
    tree = ast.parse(expr, mode="eval")
    _check(tree)
    code = compile(tree, "<safe_calc>", "eval")
    env = {**_ALLOWED_NAMES, **_ALLOWED_FUNCS}
    return eval(code, {"__builtins__": {}}, env)


SELFTEST = [
    {"args": {"expr": "round((2571.4-2620.1)/2620.1*100, 2)"}, "check": "result == -1.86", "offline": True},
    {"args": {"expr": "sqrt(16) + abs(-4)"}, "check": "result == 8.0", "offline": True},
]
