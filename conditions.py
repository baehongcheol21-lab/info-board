# coding=utf-8
"""
conditions.py — rules.yaml의 cond 문자열 → 검사 함수 화이트리스트
(설계서_ACT_자율실행.md §4: "cond는 파이썬 함수 화이트리스트로만 해석(eval 금지 —
cond 이름당 검사함수 1개를 conditions.py에 등록)").

키는 rules.yaml에 적힌 cond 문자열 그대로다(설계서 원문 그대로, 더 예쁜 이름으로
바꾸지 않았다) — 임의 표현식을 eval하는 게 아니라 정확히 이 문자열들만 룩업 키로
인정된다. 등록 안 된 cond 문자열은 rules_engine.py가 조용히 건너뛴다(발화 안 함,
새 룰을 rules.yaml에 추가해도 conditions.py에 짝을 안 만들면 안전하게 무동작).

각 검사 함수는 P11-0에서 이미 만들어 둔 검증 기관에 위임한다(재구현 금지):
  R01 → verify_date  (organs/verify_date_v1.py, docstring이 이미 "R01의 판단부"라고 명시)
  R02 → verify_topic (organs/verify_topic_v1.py, tools._query_mismatch 위임) — 단, 구조화
        필드(tool·args)가 없어도 발화 가능(아래 설명).
  R05 → verify_empty (organs/verify_empty_v1.py, docstring이 이미 "R05의 판단부"라고 명시)
  R06 → duplicate_sig는 단일 이벤트만으로 판단 불가(직전 명령들의 히스토리가 필요) —
        rules_engine.py가 이벤트를 순회하며 payload['duplicate']를 미리 계산해 넣는다.

⚠️ 휴면 상태 고지: 지금(P11-2) bus.py가 채우는 실제 payload는 {"text": ...}뿐이라
R01(items 필요)은 라이브 회의 데이터로는 항상 False다 — 필요한 구조화 필드가 아직
없어서지 로직이 틀려서가 아니다(합성 이벤트로는 T1·T7에서 발화 확인함). tools.py의
run_tool_loop가 구조화된 payload를 내보내야 깨어나는데 그건 핵심 파일 변경이라
이번 단계 범위 밖 — P11-3(brain.py가 run_tool_loop 자리를 대체)에서 자연히 해소될
예정(작업일지 참고).

R02는 검증 중 실측으로 확인한 사실 덕에 예외적으로 지금도 실전에서 바로 판정
가능하다: `tools.py`의 `run_tool_loop`가 이미 `_query_mismatch()`를 매 도구 호출마다
계산해서 불일치 시 도구결과 텍스트 끝에 리터럴 마커("⚠️ 검색어-주제 불일치 감지됨",
tools.py 229행)를 붙인다 — 이 마커가 bus.py의 payload.text에 이미 그대로 실려 온다.
그래서 구조화 필드(tool·args)가 없어도 이 마커 문자열만으로 발화할 수 있다(우선
경로). 구조화 필드가 있으면 verify_topic으로 한 번 더 정밀 판정(차선 경로) —
tools.py 자체는 이번 단계에서도 안 건드렸다(마커는 이미 있던 걸 읽기만 함).
R05·R06도 지금 payload로 실전 판정 가능하다(text·command 필드는 P11-1부터 이미 존재).
"""
from registry import get_registry

_MISMATCH_MARKER = "⚠️ 검색어-주제 불일치 감지됨"  # tools.py run_tool_loop가 붙이는 마커 그대로


def _r01_stale_search(event):
    items = (event.get("payload") or {}).get("items")
    if not items:
        return False
    r = get_registry().run("verify_date", items=items, max_age_h=48)
    return bool(r.get("all_stale"))


def _r02_topic_mismatch(event):
    payload = event.get("payload") or {}
    if _MISMATCH_MARKER in payload.get("text", ""):
        return True
    tool, args = payload.get("tool"), payload.get("args")
    if not tool or not isinstance(args, dict):
        return False
    return bool(get_registry().run("verify_topic", tool=tool, args=args, topic=event.get("topic", "")))


def _r05_empty_or_error(event):
    text = (event.get("payload") or {}).get("text", "")
    return bool(get_registry().run("verify_empty", result=text))


def _r06_duplicate_sig(event):
    return bool((event.get("payload") or {}).get("duplicate"))


CONDITIONS = {
    "max_published_age_h > 48": _r01_stale_search,
    "mismatch == true": _r02_topic_mismatch,
    "empty or error": _r05_empty_or_error,
    "duplicate_sig": _r06_duplicate_sig,
}
