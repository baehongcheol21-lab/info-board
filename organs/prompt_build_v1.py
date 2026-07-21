# coding=utf-8
"""prompt_build_v1 — 역할·문체규칙·전역상태·과제를 프롬프트 한 덩어리로 조립.
discuss.py의 모든 ask() 호출이 반복하는 "너는 ~다. {STYLE}\n{gstate}\n..." 패턴을 재사용
가능한 기관으로 뽑아냈다. STYLE·gstate 문자열 자체는 discuss.py가 여전히 소유(그대로 인자로
전달) — 이 기관은 조립만 담당, discuss.py를 import하지 않는다(순환 의존 방지)."""

MANIFEST = {
    "name": "prompt_build", "version": 1, "stable": True, "category": "텍스트",
    "desc": "역할+문체규칙+전역상태+과제를 프롬프트 하나로 조립",
    "args": {"role": "str", "style_rules": "str", "global_state": "str=''",
              "task": "str", "extra": "str=''"},
    "returns": "str",
    "safety": "pure", "timeout_s": 1,
}


def run(role, style_rules, task, global_state="", extra=""):
    parts = [f"너는 {role}다.", style_rules]
    if global_state:
        parts.append(global_state)
    parts.append(task)
    if extra:
        parts.append(extra)
    return "\n\n".join(p for p in parts if p)


SELFTEST = [
    {"args": {"role": "U1", "style_rules": "짧게 써라", "task": "코스피를 요약하라"},
     "check": "'U1' in result and '짧게 써라' in result and '코스피를 요약하라' in result",
     "offline": True},
]
