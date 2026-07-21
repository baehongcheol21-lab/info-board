# coding=utf-8
"""cmd_parse_v1 — 요원 답변 텍스트에서 명령 JSON을 추출·검증.
사용자가 정확히 지목한 그 모듈: "답변을 명령어로 저장하는 모듈". ACT v2 명령사전(설계서_
ACT_자율실행.md §2)의 진입점 — 이걸 통과한 dict가 F01 dispatch로 넘어가 실제 기관을 실행시킨다.
"cmd" 키(ACT v2 표준)와 "tool" 키(tools.py 레거시, 기존 run_tool_loop 호환)를 둘 다 받는다.

⚠️ tools.py의 기존 패턴(r'\\{[^{}]*"tool"[^{}]*\\}')은 args가 중첩 객체({"tool":...,
"args":{...}})일 때 매칭에 실패하는 것을 2026-07-21 실측으로 확인했다(개선의견에 별도 기록,
tools.py 자체는 이번 단계 대상이 아니라 안 건드림). 이 기관은 같은 실수를 하지 않도록
정규식 대신 중괄호 깊이를 세는 방식으로 중첩 JSON도 정확히 추출한다."""
import json

MANIFEST = {
    "name": "cmd_parse", "version": 1, "stable": True, "category": "텍스트",
    "desc": "텍스트에서 {\"cmd\":...} 또는 {\"tool\":...} JSON 명령을 추출·검증 (중첩 객체 지원)",
    "args": {"text": "str", "required_keys": "list[str]?=None"},
    "returns": "{found:bool, cmd:dict|None, error:str|None}",
    "safety": "pure", "timeout_s": 1,
}


def _extract_command_json(text):
    """중괄호 깊이 카운팅 — 정규식([^{}]*)은 중첩 객체를 표현할 수 없어 args:{...} 같은
    흔한 형태에서 매칭 실패한다(실측 확인). '{' 위치마다 짝이 맞는 '}'까지 잘라 JSON
    파싱을 시도하고, cmd/tool 키가 있는 첫 dict를 찾는다."""
    n = len(text)
    i = 0
    while i < n:
        if text[i] == "{":
            depth = 0
            for j in range(i, n):
                if text[j] == "{":
                    depth += 1
                elif text[j] == "}":
                    depth -= 1
                    if depth == 0:
                        candidate = text[i:j + 1]
                        try:
                            obj = json.loads(candidate)
                            if isinstance(obj, dict) and ("cmd" in obj or "tool" in obj):
                                return obj, None
                        except ValueError as e:
                            return None, f"JSON 파싱 실패: {e}"
                        break
        i += 1
    return None, None


def run(text, required_keys=None):
    obj, parse_err = _extract_command_json(text)
    if obj is None and parse_err is None:
        return {"found": False, "cmd": None, "error": "명령 패턴 없음"}
    if obj is None:
        return {"found": True, "cmd": None, "error": parse_err}
    missing = [k for k in (required_keys or []) if k not in obj]
    if missing:
        return {"found": True, "cmd": obj, "error": f"필수 필드 누락: {missing}"}
    return {"found": True, "cmd": obj, "error": None}


SELFTEST = [
    {"args": {"text": '이유 설명 후 {"cmd": "redo", "target": "search"} 출력'},
     "check": "result['found'] and result['cmd']['cmd'] == 'redo'", "offline": True},
    {"args": {"text": "그냥 평문 답변입니다"}, "check": "result['found'] is False", "offline": True},
    # 중첩 args — tools.py 정규식은 여기서 실패했지만 이 기관은 통과해야 함(회귀 방지 테스트)
    {"args": {"text": '{"tool": "search_news", "args": {"query": "코스피 급락", "max_items": 5}}'},
     "check": "result['found'] and result['cmd']['tool'] == 'search_news' "
              "and result['cmd']['args']['query'] == '코스피 급락'", "offline": True},
]
