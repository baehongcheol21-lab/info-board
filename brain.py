# coding=utf-8
"""
brain.py — 뇌(결정 사이클 컨트롤러). 설계서_ACT_자율실행.md §5·§9-3의 P11-3 구현.

"통제는 코드가, 판단은 LLM이"(§5): 순서·상한·예산·중단·반사신경 평가는 전부 여기(결정론적
파이썬)에서 하고, 회의 내용(누가 뭘 묻고 판단하는가)은 discuss.py의 phase 함수들이 그대로
한다. discuss.py의 5단계(수집→U1→뉴스→심층→총평)를 여기 사이클로 "재배치"하되 프롬프트·
STYLE·budget은 discuss.py에서 그대로 import해 쓴다(§9-3 "재작성 금지 — 검증된 자산").

레거시(순차) 경로와의 관계 — 안전 설계:
  이 사이클은 phase들을 discuss.py가 원래 돌리던 것과 **똑같은 순서로** 부른다. 유일한 차이는
  (a) phase 사이사이 transcript 조각을 실시간으로 이벤트화(bus.emit_entries)하고
  (b) 그 이벤트에 반사신경(rules_engine)을 실시간으로 통과시켜 rule_fired를 남기며
  (c) 사이클·발화에 결정론적 상한(§8·T12)을 씌운다는 것뿐이다.
  최종 result(=discussions.json 내용)는 discuss.py의 finalize가 만든다 — brain이 손대지 않는다.
  그래서 이 실시간 관측·반사 계층에서 어떤 예외가 나도(전부 try/except), 사용자가 보는
  브리핑 자체는 레거시 경로와 동일하다. brain을 끄면(BRAIN_DISABLED=1) 즉시 레거시로 롤백된다
  (§9-5). ← P11-3의 위험을 이 대칭성으로 봉쇄한다.

자율 실행의 범위(P11-3): 반사신경이 발화하면 rule_fired로 기록하고, **0콜·비순환·안전한
효과만** 즉시 실행한다 — annotate(안내 이벤트 부착)·reject(중복 차단 기록). redo/emit/py처럼
새 LLM·도구 작업을 유발하는 효과는 pending_command 이벤트로 **기록만** 하고 자동 디스패치하지
않는다(현실 대조 데이터로 유용성이 검증되기 전엔 브레이크 없는 자동화를 켜지 않는다 —
그 실행 연결은 §7 회고가 붙는 P11-4 이후). 단, enqueue 메커니즘 자체는 구현·상한 검증(T12)까지
해두어 미래 단계가 바로 쓸 수 있게 한다.
"""
import os
import sys
import json
import collections

import bus

try:
    import rules_engine
except ImportError:
    rules_engine = None

# ---- 결정론적 상한 (§8 면역계 + §5) ----
MAX_CYCLES = 12            # §5: 회의당 사이클 상한
PER_TOPIC_FIRE_CAP = 6     # R11: 한 topic에서 룰 발화 6회 초과 시 그 topic 동결(폭주 차단)
MAX_REFLEX_WORK = 12       # 반사신경이 유발한 추가 작업(enqueue)의 총 처리 상한 — T12 정지 보장


def disabled():
    """롤백 스위치 — 환경변수 BRAIN_DISABLED=1이면 discuss.py가 레거시 순차 경로를 탄다(§9-5)."""
    return os.environ.get("BRAIN_DISABLED") == "1"


def _classify_effect(then):
    """발화한 룰의 then을 P11-3에서 어떻게 처리할지 분류.
    반환: (kind, value). kind ∈ {annotate, reject, enqueue, record}."""
    if not isinstance(then, dict):
        return "record", then
    if "annotate" in then:
        return "annotate", then["annotate"]
    if "reject" in then:
        return "reject", then["reject"]
    if "enqueue" in then:                    # 현재 활성 룰엔 없음 — 미래·T12용 통로
        return "enqueue", then["enqueue"]
    return "record", then                     # redo/emit/py/cmd 등: 기록만(자동 실행 안 함)


def _run_reflex_work(b, topic, spec):
    """enqueue된 반사 작업 1건 처리. P11-3에선 실제 도구를 자동 디스패치하지 않고, 처리했다는
    사실만 transcript에 한 줄 남긴다(그 줄이 다음 flush에서 다시 이벤트화됨). 이 자기-되먹임이
    있기에 T12(악성 룰이 무한 유발)를 상한으로 반드시 끊는지 검증할 수 있다."""
    b.transcript.append({"role": "🧰반사", "topic": topic,
                         "text": f"[반사 실행 기록] {json.dumps(spec, ensure_ascii=False)[:200]}"})


def run_meeting(m, b, phases, finalize, engine=None):
    """m: Meeting 컨텍스트(now·meeting_id 보유). b: RotatingBudget. phases: [(이름, fn(b,m)), ...].
    finalize: fn(b,m)->result(=discussions.json 내용을 만들고 파일 저장). 반환: result.
    engine: 테스트에서 악성 룰을 주입하기 위한 ReflexEngine 오버라이드(평상시 None)."""
    bus.emit_meeting_start(m.meeting_id, m.now)
    if engine is None and rules_engine is not None:
        try:
            engine = rules_engine.ReflexEngine()
        except Exception as e:
            print(f"  ⚠️ brain: 반사신경 로드 실패(관측만 진행): {e}", file=sys.stderr)
            engine = None

    fires = collections.Counter()   # topic별 누적 발화 수 (R11 상한 판정)
    reflex_queue = []               # enqueue된 반사 작업 (상한 하에 drain)
    cause = [None]                  # phase 경계를 넘어 이어지는 인과사슬 커서
    mark = [0]                      # 이미 이벤트화한 transcript 길이

    def _handle_fired(fired):
        for f in fired:
            topic = f.get("topic", "")
            fires[topic] += 1
            if fires[topic] > PER_TOPIC_FIRE_CAP:      # R11: 폭주하는 topic 동결
                bus.emit("rule_frozen", "brain", topic=topic,
                         payload={"rule_id": f["rule_id"], "reason": "룰 발화 상한(R11)"},
                         cause=f.get("event_eid"))
                continue
            kind, val = _classify_effect(f.get("then"))
            if kind == "annotate":
                bus.emit("annotation", f"rule:{f['rule_id']}", topic=topic,
                         payload={"note": val}, cause=f.get("event_eid"))
            elif kind == "reject":
                bus.emit("rejected", f"rule:{f['rule_id']}", topic=topic,
                         payload={"reason": val}, cause=f.get("event_eid"))
            elif kind == "enqueue":
                reflex_queue.append((topic, val))
            else:  # record — redo/emit/py 등은 기록만(P11-3 자동 실행 안 함)
                bus.emit("pending_command", f"rule:{f['rule_id']}", topic=topic,
                         payload={"then": val}, cause=f.get("event_eid"))

    def _flush():
        """직전 처리 이후 늘어난 transcript 조각을 실시간 이벤트화하고 반사신경을 먹인다."""
        new = b.transcript[mark[0]:]
        mark[0] = len(b.transcript)
        if not new:
            return
        try:
            evs, cause[0] = bus.emit_entries(new, cause[0])
        except Exception as e:
            print(f"  ⚠️ brain._flush(emit) 실패: {e}", file=sys.stderr)
            return
        if engine is None:
            return
        try:
            fired = engine.feed(evs, emit_fn=bus.emit)
        except Exception as e:
            print(f"  ⚠️ brain._flush(reflex) 실패: {e}", file=sys.stderr)
            return
        if fired:
            print(f"  🧠 반사신경 발화 {len(fired)}건: {[f['rule_id'] for f in fired]}")
            _handle_fired(fired)

    # ---- 기본 phase들: 항상 전부 시도한다(각 phase는 내부적으로 자기 예외를 방어한다).
    #      brain 계층의 실패가 브리핑 완주를 막지 못하도록 phase 호출도 한 번 더 감싼다. ----
    for cycle, (name, fn) in enumerate(phases, 1):
        if cycle > MAX_CYCLES:
            print(f"  ⛔ MAX_CYCLES({MAX_CYCLES}) 도달 — 남은 phase 중단", file=sys.stderr)
            break
        try:
            fn(b, m)
        except Exception as e:
            print(f"  ⚠️ brain: phase '{name}' 예외(계속): {type(e).__name__}: {e}", file=sys.stderr)
        _flush()

    # ---- 반사신경이 유발한 추가 작업 drain (상한으로 정지 보장 — T12) ----
    work_done = 0
    while reflex_queue and work_done < MAX_REFLEX_WORK:
        work_done += 1
        topic, spec = reflex_queue.pop(0)
        _run_reflex_work(b, topic, spec)
        _flush()
    if reflex_queue:
        print(f"  ⛔ 반사 작업 상한(MAX_REFLEX_WORK={MAX_REFLEX_WORK}) 도달 — "
              f"남은 {len(reflex_queue)}건 폐기(정지 보장)", file=sys.stderr)

    # ---- 최종 산출물은 discuss.py가 만든다(brain은 손대지 않음) ----
    result = finalize(b, m)

    # ---- §5 step5·6: 0콜 회고 채점 + 일화기억 flush ----
    score = _retrospect(b, fires, work_done)
    bus.emit_meeting_end(m.meeting_id, result, score=score)
    bus.append_experience(m.meeting_id, result)
    return result


def _retrospect(b, fires, reflex_work):
    """§7-1 회고 채점의 최소 구현(0콜). 예산효율·반사 통계만 — 익일 현실대조·메타리뷰(§7-2/3)는
    P11-4에서 붙는다. meeting_end 이벤트에 실려 experience/로 영구 누적된다."""
    cap = getattr(b, "per_run_cap", 0) or 0
    used = getattr(b, "used", 0)
    return {"calls_used": used, "cap": cap,
            "budget_ratio": round(used / cap, 3) if cap else 0.0,
            "rule_fires": dict(fires), "reflex_work": reflex_work}
