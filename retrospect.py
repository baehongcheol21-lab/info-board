# coding=utf-8
"""
retrospect.py — 회의 직후 자동 채점 (설계서_ACT_자율실행.md §7-1). P11-4 산출물.

**0콜**이다. LLM을 부르지 않고 이번 회의가 남긴 이벤트만 세어서 점수를 낸다 — 채점하느라
예산을 쓰면 본말전도이기 때문. 결과는 meeting_end 이벤트에 실려 experience/에 영구 누적되고,
meta_report.py(§7-3)가 이걸 주 단위로 집계한다.

설계서가 정한 3축을 그대로 구현한다:
  · 예산효율 — 사용콜/배분콜, **룰이 처리한 비율**(반사로 해결된 게 많을수록 좋다: LLM을 덜 부름)
  · 루프건전성 — 중복거부·상한도달·에러 수 (많을수록 나쁘다)
  · 교정성과 — redo 발화 후 결과가 실제로 개선됐나

점수는 '평가'가 아니라 '관측'이다. 억지 종합점수 하나로 뭉개지 않고 축별 수치를 그대로 남긴다
— 나중에 사람이나 상위 모델이 판단할 재료를 주는 게 목적이다(§7-3 메타리뷰가 그 소비자).
"""
import collections


def score(events, calls_used=0, cap=0, reflex_work=0):
    """events: 이번 회의의 Event dict 리스트(§3 스키마). 반환: 채점 dict."""
    types = collections.Counter(e.get("type") for e in events)
    fired = [e for e in events if e.get("type") == "rule_fired"]
    by_rule = collections.Counter((e.get("payload") or {}).get("rule_id") for e in fired)
    fires_by_topic = collections.Counter(e.get("topic") for e in fired)

    llm_outputs = types.get("agent_output", 0)
    rule_handled = types.get("annotation", 0) + types.get("rejected", 0)
    # 반사로 처리된 건 / (반사 + LLM 발언). 높을수록 0콜로 해결한 비율이 크다.
    denom = rule_handled + llm_outputs
    reflex_ratio = round(rule_handled / denom, 3) if denom else 0.0

    verdicts = collections.Counter(
        (e.get("payload") or {}).get("verdict") for e in events if e.get("type") == "verdict")

    redo_fires = sum(v for k, v in by_rule.items() if k in ("R01", "R02"))

    return {
        # --- 예산효율 ---
        "calls_used": calls_used,
        "cap": cap,
        "budget_ratio": round(calls_used / cap, 3) if cap else 0.0,
        "reflex_ratio": reflex_ratio,          # 룰이 처리한 비율(높을수록 좋음)
        # --- 루프건전성 (낮을수록 좋음) ---
        "rejected": types.get("rejected", 0),          # 중복명령 거부(R06)
        "frozen": types.get("rule_frozen", 0),         # topic 발화상한 도달(R11)
        "errors": types.get("error", 0),               # phase 예외
        "reflex_work": reflex_work,
        # --- 교정성과 ---
        "redo_fired": redo_fires,                      # 재검색 지시가 몇 번 나왔나
        "pending_commands": types.get("pending_command", 0),  # 기록만 하고 미실행인 명령
        # --- 관측 요약 ---
        "events": sum(types.values()),
        "event_types": dict(types),
        "rule_fires": dict(by_rule),
        "fires_by_topic": dict(fires_by_topic),
        "verdicts": {k: v for k, v in verdicts.items() if k},
    }
