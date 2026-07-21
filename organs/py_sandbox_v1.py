# coding=utf-8
"""py_sandbox_v1 — 생성 코드 실행 (ACT v2 §8 면역계 그대로 구현).
위협 모델: 크롤링된 기사 본문에 악성 지시가 섞여 요원이 위험한 코드를 생성할 수 있다.
방어: ①클라우드(GitHub Actions) 전용 — 로컬은 항상 거부 ②import 화이트리스트
③os/sys/subprocess/socket/requests/open/exec/eval/__import__ 이름·속성 차단
④subprocess로 격리 실행, 20초 타임아웃, 출력 3000자 캡, 임시파일 즉시 삭제."""
import os
import sys
import ast
import subprocess
import tempfile

_ALLOWED_IMPORTS = {"math", "statistics", "json", "datetime", "re", "itertools", "collections"}
_BANNED_NAMES = {"open", "exec", "eval", "__import__", "compile", "input"}
_BANNED_ATTRS = {"system", "popen", "remove", "rmdir", "unlink", "environ"}

MANIFEST = {
    "name": "py_sandbox", "version": 1, "stable": True, "category": "실행",
    "desc": "생성 파이썬 코드를 격리 실행(클라우드 전용, import·이름 화이트리스트, 20s 타임아웃)",
    "args": {"code": "str", "why": "str=''"},
    "returns": "{ok:bool, output:str, error:str|None}",
    "safety": "sandbox", "timeout_s": 20,
}


def _check_ast(tree):
    for node in ast.walk(tree):
        if isinstance(node, (ast.Import, ast.ImportFrom)):
            mods = [a.name for a in node.names] if isinstance(node, ast.Import) else [node.module or ""]
            for m in mods:
                top = (m or "").split(".")[0]
                if top not in _ALLOWED_IMPORTS:
                    raise ValueError(f"import 거부: {m}")
        if isinstance(node, ast.Name) and node.id in _BANNED_NAMES:
            raise ValueError(f"금지된 이름 사용: {node.id}")
        if isinstance(node, ast.Attribute) and node.attr in _BANNED_ATTRS:
            raise ValueError(f"금지된 속성 접근: {node.attr}")


def run(code, why=""):
    if os.environ.get("GITHUB_ACTIONS") != "true":
        return {"ok": False, "output": "",
                "error": "로컬에서는 python 샌드박스를 실행할 수 없다 — 클라우드 전용(ACT §8). "
                         "계산이 필요하면 safe_calc를 써라."}
    try:
        tree = ast.parse(code)
        _check_ast(tree)
    except SyntaxError as e:
        return {"ok": False, "output": "", "error": f"문법 오류: {e}"}
    except ValueError as e:
        return {"ok": False, "output": "", "error": str(e)}
    fd, path = tempfile.mkstemp(suffix=".py")
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as f:
            f.write(code)
        p = subprocess.run([sys.executable, path], capture_output=True, text=True, timeout=20)
        out = (p.stdout + p.stderr)[:3000]
        return {"ok": p.returncode == 0, "output": out,
                "error": None if p.returncode == 0 else f"비정상 종료(코드 {p.returncode})"}
    except subprocess.TimeoutExpired:
        return {"ok": False, "output": "", "error": "20초 타임아웃"}
    finally:
        try:
            os.remove(path)
        except OSError:
            pass


SELFTEST = [
    # 로컬(GITHUB_ACTIONS!=true) 환경에서는 코드를 아예 실행하지 않고 즉시 거부해야 한다 —
    # 이건 오프라인·결정적으로 검증 가능(진짜 실행 검증은 --smoke로 클라우드에서).
    {"args": {"code": "print(1)"}, "check": "result['ok'] is False and '클라우드' in result['error']",
     "offline": True},
]
