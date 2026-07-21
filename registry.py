# coding=utf-8
"""
registry.py — 기관 도서관 등록소 (P11-0, 설계서_기관도서관.md)

모든 실행 모듈("기관")은 organs/ 아래 파일 하나 = 기관 하나로 존재한다.
등록소가 하는 일: 스캔 → 매니페스트 검증 → (오프라인) 자가시험 → 카탈로그 생성.
검증 실패한 파일은 격리 목록에 기록하고 건너뛴다 — 기관 하나가 고장 나도 도서관 전체는 안 죽는다.

safety 등급 해석(이 프로젝트의 정의 — 설계서보다 한 단계 더 구체화):
  pure    = 순수 계산, 파일·네트워크 접근 전혀 없음 (입력→출력이 결정적)
  network = 외부 HTTP 호출. timeout_s 의무.
  write   = 로컬 파일 접근(읽기 포함). 허용 경로 밖 접근 금지.
  sandbox = 생성 코드 실행. ACT §8 규정(클라우드 전용 등) 적용 — 이번 배치엔 없음.

기존 tools.py/stats.py/publish.py/discuss.py/gemini_keys.py는 이번 단계(배치1)에서
단 한 줄도 수정하지 않는다 — 기관이 그 함수들을 가져다 쓰는 방향으로만 배선한다
(반대 방향으로 뒤집는 건 도서관이 검증된 뒤의 다음 단계 몫 — 작업일지 참고).
"""
import os
import re
import time
import json
import glob
import importlib.util

# selftest()의 check 문자열이 쓸 수 있는 내장함수 화이트리스트 — 개발자가 버전파일에
# 써둔 상수 표현식만 이걸로 평가한다(요원·네트워크가 만든 문자열이 아님, ACT의 eval 금지
# 규정과는 다른 신뢰 경계). __import__·open·eval·exec 등은 전부 배제.
_SAFE_BUILTINS = {b: getattr(__builtins__, b) if hasattr(__builtins__, b) else __builtins__[b]
                  for b in ("isinstance", "len", "str", "int", "float", "bool", "list", "dict",
                            "set", "tuple", "abs", "round", "sorted", "any", "all", "min", "max", "sum")}

BASE = os.path.dirname(os.path.abspath(__file__))
ORGAN_DIR = os.path.join(BASE, "organs")
CATALOG_FILE = os.path.join(BASE, "catalog.json")

REQUIRED_KEYS = {"name", "version", "stable", "category", "desc", "args", "returns", "safety", "timeout_s"}
VALID_CATEGORY = {"감각", "계산", "텍스트", "검증", "기억", "실행", "키움", "화면"}
VALID_SAFETY = {"pure", "network", "write", "sandbox"}
_FILENAME_RE = re.compile(r"^([a-z0-9_]+)_v(\d+)\.py$")


class Isolated(Exception):
    """매니페스트 검증 실패 — 이 기관만 격리하고 도서관 전체는 계속 돈다."""


def _validate_manifest(m, filename):
    if not isinstance(m, dict):
        raise Isolated("MANIFEST가 dict가 아님")
    missing = REQUIRED_KEYS - set(m.keys())
    if missing:
        raise Isolated(f"필수 키 누락: {sorted(missing)}")
    if m["category"] not in VALID_CATEGORY:
        raise Isolated(f"category 값 이상: {m['category']!r}")
    if m["safety"] not in VALID_SAFETY:
        raise Isolated(f"safety 값 이상: {m['safety']!r}")
    if not isinstance(m["args"], dict):
        raise Isolated("args는 dict여야 함")
    fm = _FILENAME_RE.match(filename)
    if not fm:
        raise Isolated(f"파일명 규격 위반(name_vN.py 형식 아님): {filename}")
    if fm.group(1) != m["name"] or int(fm.group(2)) != int(m["version"]):
        raise Isolated(f"파일명({filename})과 매니페스트(name={m['name']!r}, version={m['version']!r}) 불일치")


def _load_module(path):
    mod_name = f"_organ_{os.path.splitext(os.path.basename(path))[0]}"
    spec = importlib.util.spec_from_file_location(mod_name, path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


class Registry:
    def __init__(self):
        self.organs = {}       # (name, version:int) -> {"manifest", "run", "selftest", "file"}
        self.isolated = []     # [{"file", "reason"}]
        self._scanned = False

    def scan(self):
        """organs/*.py를 전부 스캔. 밑줄로 시작하는 파일(_template.py 등)은 건너뜀."""
        self.organs, self.isolated = {}, []
        if not os.path.isdir(ORGAN_DIR):
            self._scanned = True
            return self
        for path in sorted(glob.glob(os.path.join(ORGAN_DIR, "*.py"))):
            fn = os.path.basename(path)
            if fn.startswith("_"):
                continue
            try:
                mod = _load_module(path)
                m = getattr(mod, "MANIFEST", None)
                if m is None:
                    raise Isolated("MANIFEST 없음")
                _validate_manifest(m, fn)
                run = getattr(mod, "run", None)
                if not callable(run):
                    raise Isolated("run() 없음 또는 호출 불가")
                key = (m["name"], int(m["version"]))
                if key in self.organs:
                    raise Isolated(f"중복 등록: {key}")
                self.organs[key] = {
                    "manifest": m, "run": run,
                    "selftest": getattr(mod, "SELFTEST", []),
                    "file": fn,
                }
            except Isolated as e:
                self.isolated.append({"file": fn, "reason": str(e)})
            except Exception as e:  # 임포트 자체가 깨진 경우도 도서관을 못 죽인다
                self.isolated.append({"file": fn, "reason": f"{type(e).__name__}: {e}"})
        self._scanned = True
        return self

    def _stable_versions(self, name):
        return sorted((v for (n, v), o in self.organs.items() if n == name and o["manifest"]["stable"]),
                      reverse=True)

    def get(self, name, version=None):
        """기본은 stable 중 최고 버전. version 지정 시 그 버전(불안정이어도 명시 호출은 허용)."""
        if not self._scanned:
            self.scan()
        if version is not None:
            o = self.organs.get((name, int(version)))
            if not o:
                raise KeyError(f"기관 없음: {name} v{version}")
            return o
        versions = self._stable_versions(name)
        if not versions:
            allv = sorted((v for (n, v) in self.organs if n == name), reverse=True)
            if not allv:
                raise KeyError(f"기관 없음: {name}")
            return self.organs[(name, allv[0])]
        return self.organs[(name, versions[0])]

    def run(self, name, version=None, **kwargs):
        return self.get(name, version)["run"](**kwargs)

    def catalog(self):
        cat = {}
        for (name, version), o in sorted(self.organs.items()):
            m = o["manifest"]
            cat.setdefault(name, []).append({
                "version": version, "stable": m["stable"], "category": m["category"],
                "desc": m["desc"], "args": m["args"], "returns": m["returns"], "safety": m["safety"],
            })
        with open(CATALOG_FILE, "w", encoding="utf-8") as f:
            json.dump(cat, f, ensure_ascii=False, indent=1)
        return cat

    def tool_guide(self):
        """요원에게 보여줄 안내문 — 카테고리별, stable 최신 버전만. 기관이 늘면 이 안내문도 자동으로 는다."""
        by_cat = {}
        for name in {n for n, v in self.organs}:
            try:
                o = self.get(name)
            except KeyError:
                continue
            m = o["manifest"]
            args_str = ", ".join(m["args"].keys())
            by_cat.setdefault(m["category"], []).append(f"- {name}({args_str}): {m['desc']}")
        lines = ["[사용 가능 기관]"]
        for cat in sorted(by_cat):
            lines.append(f"· {cat}")
            lines.extend(sorted(by_cat[cat]))
        lines.append('\n기관이 필요하면 JSON 한 줄만 출력하라: {"cmd": "이름", "인자": 값...}')
        return "\n".join(lines)

    def selftest(self, offline_only=True):
        """SELFTEST의 check 문자열은 이 파일들(버전 고정·개발자 작성)에 대해서만 eval한다 —
        요원·네트워크가 생성한 문자열이 아니므로 ACT의 eval 금지 규정과 다른 신뢰 경계다."""
        results = []
        for (name, version), o in sorted(self.organs.items()):
            for case in o["selftest"]:
                is_offline_case = bool(case.get("offline", True))
                if offline_only and not is_offline_case:
                    continue
                t0 = time.time()
                try:
                    result = o["run"](**case.get("args", {}))
                    ok = bool(eval(case["check"], {"__builtins__": _SAFE_BUILTINS}, {"result": result}))
                    err = None if ok else f"check 실패 (result={str(result)[:120]!r})"
                except Exception as e:
                    ok, err = False, f"{type(e).__name__}: {e}"
                results.append({"name": name, "version": version, "ok": ok,
                                "err": err, "sec": round(time.time() - t0, 3)})
        return results


def get_registry():
    """모듈 전역 싱글턴 — 매 임포트마다 재스캔하지 않도록."""
    global _singleton
    try:
        return _singleton
    except NameError:
        _singleton = Registry().scan()
        return _singleton


if __name__ == "__main__":
    import sys
    r = Registry().scan()
    print(f"등록: {len(r.organs)}개, 격리: {len(r.isolated)}개")
    for iso in r.isolated:
        print(f"  ⛔ {iso['file']}: {iso['reason']}")
    smoke = "--smoke" in sys.argv
    results = r.selftest(offline_only=not smoke)
    fails = [x for x in results if not x["ok"]]
    print(f"자가시험({'전체' if smoke else '오프라인'}): {len(results)}건, 실패 {len(fails)}건")
    for f in fails:
        print(f"  ❌ {f['name']} v{f['version']}: {f['err']}")
    r.catalog()
    print(f"catalog.json 생성 완료 ({len(r.organs)}개 기관)")
