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


# ---- P11-4에서 추가 (전체 룰 활성) --------------------------------------------------
# discuss.py가 verdict/error 이벤트를 실제로 내보내기 시작했기 때문에 아래가 죽은 룰이 아니다.

_INSUFFICIENT = ("데이터가 부족", "포함하지 않", "이후 데이터", "이후를 포함", "최신 데이터",
                  "갱신되지 않", "데이터 부족", "시점이 맞지 않", "데이터 지연", "데이터가 사건 이후")


def _r03_verdict_insufficient(event):
    """U4 판정이 원인불명·판단불가 계열이고 그 사유가 '데이터 부족'일 때만."""
    p = event.get("payload") or {}
    if p.get("verdict") not in ("[원인불명]", "[판단불가]"):
        return False
    return any(mk in (p.get("text") or "") for mk in _INSUFFICIENT)


def _r04_has_pct_claim(event):
    """요원 발언에 **검산 가능한** 계산 주장이 있으면 대상. claim_verify 기관에 위임.

    ⚠️ 2026-08-05 좁힘. 예전엔 pct_claim_extract로 '%가 하나라도 있으면' 발화했다. 그 결과
    R04 혼자 238회 발화해 스트림의 절반을 차지했는데 정작 검산은 한 번도 못 했다(메타리뷰).
    실물을 보니 그 %의 71%는 애초에 검산 대상이 아니었다 — 시장점유율·위험가중치·실업률·
    사이드카 발동조건·전년 동기 대비 실적처럼 **대조할 진실값이 우리에게 없는 숫자**들이다.

    R04의 desc는 원래부터 "숫자 계산 주장(**전일比 등**)"이었다. 즉 이건 rules.yaml에서
    벗어나는 게 아니라, 넓게 잡고 있던 조건부를 **룰 원문의 뜻대로 되돌리는** 것이다
    (rules.yaml은 손대지 않았다 — §4 자기수정 금지).
    실측: 1,250개 이벤트 → 544개(56% 감소), 남은 것은 전부 스냅샷과 대조 가능한 주장."""
    text = (event.get("payload") or {}).get("text", "")
    if "%" not in text:
        return False
    try:
        return bool(get_registry().run("claim_verify", text=text))
    except Exception:
        return False


def _r07_has_nan_inf(event):
    """계산 결과에 nan/inf가 섞였는지. verify_nan 기관에 위임."""
    p = event.get("payload") or {}
    val = p.get("result", p.get("value"))
    if val is None:
        text = p.get("text", "")
        return ("nan" in text.lower()) or ("inf" in text.lower())
    try:
        return bool(get_registry().run("verify_nan", value=val))
    except Exception:
        return False


def _r09_budget_underused(event):
    """회의가 배분의 70% 미만으로 끝났으면 잔여소진 라운드 대상(P12 연동).
    score는 retrospect가 넣어준다."""
    s = (event.get("payload") or {}).get("score") or {}
    br = s.get("budget_ratio")
    return br is not None and br < 0.7


def _r10_certain_with_direction(event):
    """[확실] 판정 + 방향(등락)이 있으면 모의투자 신호 후보(P10 연동).
    ⚠️ 신호는 '이벤트 발행'까지다 — 실제 주문은 P10의 모의 전용 실행기에서만 일어난다."""
    p = event.get("payload") or {}
    return p.get("verdict") == "[확실]" and p.get("pct") not in (None, 0)


def _r11_fires_over_cap(event):
    """topic당 룰 발화 상한 초과. 실제 차단은 brain.PER_TOPIC_FIRE_CAP이 이미 수행하며,
    이 조건은 그 사실을 이벤트로도 남기기 위한 것(회고 통계용)."""
    return bool((event.get("payload") or {}).get("over_cap"))


def _r12_consecutive_errors(event):
    """에러 3연속. 연속 카운트는 rules_engine이 상태로 세어 payload에 넣어준다."""
    return int((event.get("payload") or {}).get("consecutive", 0)) >= 3


CONDITIONS = {
    "max_published_age_h > 48": _r01_stale_search,
    "mismatch == true": _r02_topic_mismatch,
    "empty or error": _r05_empty_or_error,
    "duplicate_sig": _r06_duplicate_sig,
    # P11-4 추가
    "verdict in [원인불명,판단불가] and 데이터부족_마커": _r03_verdict_insufficient,
    "has_pct_claim": _r04_has_pct_claim,
    "has_nan_inf": _r07_has_nan_inf,
    "calls_used < allot*0.7": _r09_budget_underused,
    "verdict==확실 and direction": _r10_certain_with_direction,
    "fires_on_topic > 6": _r11_fires_over_cap,
    "consecutive >= 3": _r12_consecutive_errors,
}
