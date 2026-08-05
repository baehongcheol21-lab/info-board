# coding=utf-8
"""verify_style_v2 — v1(채움말·뻔한 뜻풀이) + **(추정) 오용 검사** 추가.

배경 (2026-08-05 녹취 감사): 사실주장 대비 (추정) 비율이 22~32%까지 올라갔다(회의당 33~67회,
알파가 61%). 그런데 실물을 보니 문제는 "(추정)을 쓴다"가 아니라 **잘못 쓴다**였다:

  ① 출처와 모순 — `[출처: 한국거래소 과거 데이터(추정)]`. 출처를 댔으면 추정이 아니다.
  ② 이중 헤지  — `…작용할 수 있습니다. (추정)`. 이미 '~수 있습니다'로 불확실을 말했는데 또 붙임.
  ③ 해석에 붙임 — `…나타내는 지표입니다. (추정)`. 해석·전망은 애초에 출처 대상이 아니다.

**(추정) 자체를 줄이는 게 목표가 아니다.** 근거 없는 사실주장에 (추정)을 붙이는 건 정직한
행동이고, 그걸 벌하면 다음부터 억지 단정을 하게 된다 — 이 시스템이 가장 피해야 할 실패다.
그래서 이 검사기는 '오용'만 잡는다: 모순·이중·과밀.

v1은 그대로 둔다(불변 원칙). stable=True라 registry 기본값은 v2이며, 문제 시 v2의 stable을
False로 내리면 v1로 즉시 롤백된다."""
import re

_FILLERS = ("힘쓰고 있습니다", "최선을 다하", "미래를 밝힙니다", "지켜봐야 할 것입니다",
            "귀추가 주목됩니다", "기대되는 바입니다")
_CLICHE_EXPLAIN = ("외국 돈과 바꾸는 비율", "물건 값이 오르는 것")

# 이미 문장 자체가 불확실을 말하는 표현 — 여기에 (추정)을 더하면 이중 헤지
_HEDGE_WORDS = ("수 있습니다", "것으로 보입니다", "것으로 분석됩니다", "것으로 예상됩니다",
                 "전망입니다", "가능성이 있습니다", "추정됩니다", "판단됩니다", "예상됩니다",
                 "보입니다", "여겨집니다", "관측됩니다")

# [출처: ...] 안에 '추정'이 섞인 경우
_SRC_WITH_EST = re.compile(r"\[출처:\s*([^\]]*?)추정([^\]]*)\]")
_EST = re.compile(r"\(추정\)")

MANIFEST = {
    "name": "verify_style", "version": 2, "stable": True, "category": "검증",
    "desc": "채움말·뻔한 뜻풀이 + (추정) 오용(출처모순·이중헤지·과밀) 0콜 검사",
    "args": {"text": "str", "max_density": "float=0.15"},
    "returns": "{ok:bool, violations:list[str], stats:dict}",
    "safety": "pure", "timeout_s": 1,
}


def _sentences(text):
    return [s for s in re.split(r"[.!?]\s|\n", text) if s.strip()]


def run(text, max_density=0.15):
    text = text or ""
    violations = []
    for f in _FILLERS:
        if f in text:
            violations.append(f"채움말: '{f}'")
    for c in _CLICHE_EXPLAIN:
        if c in text:
            violations.append(f"뻔한 뜻풀이: '{c}'")

    # ① 출처 태그와 (추정) 모순
    contradict = 0
    for m in _SRC_WITH_EST.finditer(text):
        inner = (m.group(1) + m.group(2)).strip(" ()")
        contradict += 1
        if inner:
            violations.append(f"출처-추정 모순: '[출처: {inner}…추정]' — 출처를 댔으면 추정이 아니다")
        else:
            violations.append("빈 출처태그: '[출처: (추정)]' — 태그를 빼고 (추정)만 써라")

    # ② 이중 헤지: (추정) 앞 40자에 이미 불확실 표현이 있는 경우
    double = 0
    for m in _EST.finditer(text):
        before = text[max(0, m.start() - 40):m.start()]
        if any(h in before for h in _HEDGE_WORDS):
            double += 1
    if double:
        violations.append(f"이중 헤지 {double}건: '~수 있습니다' 등으로 이미 불확실을 말한 문장에 (추정) 중복")

    # ③ 과밀
    n_est = len(_EST.findall(text))
    n_sent = max(1, len(_sentences(text)))
    density = round(n_est / n_sent, 3)
    if density > max_density:
        violations.append(f"(추정) 과밀: 문장당 {density} (> {max_density})")

    return {"ok": len(violations) == 0, "violations": violations,
            "stats": {"est": n_est, "sentences": n_sent, "density": density,
                      "contradict": contradict, "double_hedge": double}}


SELFTEST = [
    {"args": {"text": "저희 회사는 최선을 다하고 있습니다."}, "check": "result['ok'] is False", "offline": True},
    {"args": {"text": "코스피가 1.8% 하락했습니다. [출처: 한국거래소]"},
     "check": "result['ok'] is True", "offline": True},
    # v2가 새로 잡는 것들
    {"args": {"text": "지수가 올랐습니다. [출처: 한국거래소 과거 데이터(추정)]"},
     "check": "result['stats']['contradict'] == 1", "offline": True},
    {"args": {"text": "원가 상승 요인으로 작용할 수 있습니다. (추정)"},
     "check": "result['stats']['double_hedge'] == 1", "offline": True},
]
