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

try:  # P11-4 §7 전전두엽 — 없어도 회의는 그대로 진행
    import retrospect as _retro
except ImportError:
    _retro = None

try:
    import reality_check as _reality
except ImportError:
    _reality = None

try:  # 예측 채점·신뢰도 갱신 회로(§7-2 본체)
    import forecast as _forecast
except ImportError:
    _forecast = None

try:  # R04 검산의 손 — 기관 도서관이 없으면 검산만 건너뛴다(회의는 그대로)
    from registry import get_registry
except ImportError:
    get_registry = None

# ---- 결정론적 상한 (§8 면역계 + §5) ----
MAX_CYCLES = 12            # §5: 회의당 사이클 상한
PER_TOPIC_FIRE_CAP = 6     # R11: 한 topic에서 룰 발화 6회 초과 시 그 topic 동결(폭주 차단)
MAX_REFLEX_WORK = 12       # 반사신경이 유발한 추가 작업(enqueue)의 총 처리 상한 — T12 정지 보장
MAX_VERIFY = 80            # R04 검산 실행 상한(0콜이지만 무한은 없다 — 실측 회의당 12.5건)
MAX_ALERTS = 6             # 알파에게 넘길 불일치 경보 상한(프롬프트를 경보로 덮지 않는다)

# 엔진 스스로 만든 이벤트 — 되먹이면 자기 발화가 자기를 부르는 고리가 된다.
_ENGINE_MADE = ("rule_fired", "annotation", "rejected", "pending_command", "rule_frozen")


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
    if then.get("cmd") == "calc":            # R04 검산 — 0콜·순수계산·비순환이라 즉시 실행한다
        return "verify", then
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
    del bus.EMITTED[:]              # 이번 회의만 채점하도록 초기화
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
    seen = []                       # 이번 회의의 전체 이벤트 (§7-1 회고 채점 재료)
    recorded = set()                # (topic, rule) 기록 중복 제거 — 스트림 비대 방지
    fed = [0]                       # bus.EMITTED 중 반사신경에 이미 먹인 지점(커서)
    verified = [0, 0]               # [검산한 주장 수, 불일치 수]
    seen_claims = set()             # 같은 주장 재검산 방지 (id, claimed)

    def _emit(type, actor, topic="", payload=None, cause_eid=None):
        """bus.emit + 회고용 기록을 한 번에. 채점은 '무슨 일이 있었나'를 세는 것이라
        모든 발생을 여기로 통과시켜야 빠짐이 없다."""
        eid = bus.emit(type, actor, topic=topic, payload=payload, cause=cause_eid)
        seen.append({"eid": eid, "type": type, "actor": actor, "topic": topic,
                     "payload": payload or {}, "cause": cause_eid})
        return eid

    def _run_verify(f):
        """R04의 then을 **실제로 실행**한다 — 요원이 말한 '전일 대비 N%'를 오늘 스냅샷과 대조.

        설계서 R04의 then은 `{cmd: calc, expr: "{auto_extract}"}`지만, 실제 회의록을 4,528건
        훑어보면 요원은 두 피연산자를 문장에 적지 않는다("WTI가 전일 대비 6.9% 하락"). 즉
        계산기에 넣을 식이 텍스트 안에 없다 — calc를 붙이면 "6.9가 6.9인가"를 확인하는
        자기동어반복이 된다. 검산의 목적은 **현실과 맞나**(원장 #65)이므로, 진실값인 오늘
        스냅샷과 대조한다. 0콜·순수계산이라 브레이크 없는 자동화가 아니다.

        on_mismatch: notify_alpha — 불일치는 m.alerts에 실려 총평 프롬프트로 들어간다."""
        if get_registry is None or verified[0] >= MAX_VERIFY:
            return
        text = (f.get("event_payload") or {}).get("text", "")
        snap = getattr(m, "snap", None) or {}
        if not text or not snap:
            return
        try:
            checks = get_registry().run("claim_verify", text=text, snap=snap)
        except Exception as e:
            print(f"  ⚠️ brain: 검산 실패(계속): {type(e).__name__}: {e}", file=sys.stderr)
            return
        bad, fresh = [], 0
        for c in checks:
            key = (c["id"], c["claimed"])
            if c["ok"] is None or key in seen_claims:
                continue          # 대조할 진실값이 없거나 이미 본 주장(같은 값 반복 인용)
            seen_claims.add(key)
            fresh += 1
            verified[0] += 1
            if not c["ok"]:
                verified[1] += 1
                bad.append(c)
        if not fresh:
            return                # 새로 대조한 게 없으면 이벤트도 남기지 않는다(스트림 비대 방지)
        _emit("verification", f"rule:{f['rule_id']}", f.get("topic", ""),
              {"checked": fresh, "mismatch": bad}, f.get("event_eid"))
        alerts = getattr(m, "alerts", None)
        if bad and isinstance(alerts, list) and len(alerts) < MAX_ALERTS:
            for c in bad[:MAX_ALERTS - len(alerts)]:
                alerts.append(f"{c['name']}: 회의 중 '{c['claimed']}%'라는 발언이 있었으나 "
                              f"오늘 실제 등락은 {c['actual']}%다({c['why']}).")
                print(f"  ❗ 검산 불일치 — {c['name']}: 주장 {c['claimed']}% vs 실제 {c['actual']}% ({c['why']})")

    def _handle_fired(fired):
        for f in fired:
            topic = f.get("topic", "")
            kind, val = _classify_effect(f.get("then"))
            # 기록만 하는 발화(pending_command)는 상한에 안 센다. R11 상한의 목적은 "폭주하는
            # 행동"을 끊는 것이지 관측을 세는 게 아니다 — 예컨대 R04(% 주장 검산)는 요원이
            # 숫자를 말할 때마다 정상적으로 발화하므로(테스트에서 15회) 이걸 상한에 세면
            # 정작 중요한 R05·R06이 막힌다. 대신 (topic, rule) 조합당 1회만 남겨 스트림 비대를 막는다.
            if kind == "verify":
                _run_verify(f)                 # 0콜·비순환 — 상한 계산에 넣지 않는다
                continue
            if kind == "record":
                key = (topic, f["rule_id"])
                if key in recorded:
                    continue
                recorded.add(key)
                _emit("pending_command", f"rule:{f['rule_id']}", topic, {"then": val}, f.get("event_eid"))
                continue
            fires[topic] += 1
            if fires[topic] > PER_TOPIC_FIRE_CAP:      # R11: 폭주하는 topic 동결
                _emit("rule_frozen", "brain", topic,
                      {"rule_id": f["rule_id"], "reason": "룰 발화 상한(R11)"}, f.get("event_eid"))
                continue
            if kind == "annotate":
                _emit("annotation", f"rule:{f['rule_id']}", topic, {"note": val}, f.get("event_eid"))
            elif kind == "reject":
                _emit("rejected", f"rule:{f['rule_id']}", topic, {"reason": val}, f.get("event_eid"))
            elif kind == "enqueue":
                reflex_queue.append((topic, val))

    def _feed_engine():
        """**직전 급여 이후 발행된 모든 이벤트**를 반사신경에 먹인다.

        ⚠️ 2026-08-05 메타리뷰가 잡은 결함: 예전엔 transcript에서 만든 이벤트(evs)만 먹여서,
        discuss.py가 직접 내는 verdict나 brain이 내는 meeting_end가 **엔진에 도달하지 못했다**.
        그래서 조건이 충족되는데도 R03·R09·R10이 한 번도 발화하지 않았다(실측: 그 이벤트들을
        엔진에 직접 먹이면 R03·R10 9회, R09 44회 발화). "전체 룰 활성"이 반쪽이었던 것.
        → bus.EMITTED(발행 전량)를 커서로 훑어 빠짐없이 먹인다.

        단 엔진이 만들어낸 이벤트(rule_fired·annotation 등)는 되먹이지 않는다 — 자기 발화가
        자기를 다시 부르는 고리를 원천 차단(상한이 있어도 무의미한 왕복은 만들지 않는다)."""
        if engine is None:
            return
        fresh = [e for e in bus.EMITTED[fed[0]:]
                 if e.get("type") not in _ENGINE_MADE]
        fed[0] = len(bus.EMITTED)
        if not fresh:
            return
        try:
            fired = engine.feed(fresh, emit_fn=lambda t, a, **kw: _emit(
                t, a, kw.get("topic", ""), kw.get("payload"), kw.get("cause")))
        except Exception as e:
            print(f"  ⚠️ brain._feed_engine 실패: {e}", file=sys.stderr)
            return
        if fired:
            print(f"  🧠 반사신경 발화 {len(fired)}건: {[f['rule_id'] for f in fired]}")
            _handle_fired(fired)

    def _flush():
        """직전 처리 이후 늘어난 transcript 조각을 실시간 이벤트화하고 반사신경을 먹인다."""
        new = b.transcript[mark[0]:]
        mark[0] = len(b.transcript)
        if new:
            try:
                evs, cause[0] = bus.emit_entries(new, cause[0])
                seen.extend(evs)
            except Exception as e:
                print(f"  ⚠️ brain._flush(emit) 실패: {e}", file=sys.stderr)
        _feed_engine()   # transcript 유래든 직접 발행이든 전부 여기서 걸러진다

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
            # P11-4: 실패도 이벤트다. 이게 있어야 R12(에러 3연속→파수꾼 경고)가 살아있고,
            # 회고가 "이번 회의가 얼마나 건강했나"를 셀 수 있다(§7-1 루프건전성).
            _emit("error", f"phase:{name}", name, {"err": f"{type(e).__name__}: {e}"[:300]})
        _flush()
        # §7-2 익일 예측 채점 — 오늘 숫자가 손에 들어온 직후가 제자리다. 0콜.
        # 어제 요원들이 낸 [예측]을 오늘 실제 등락과 대조해 브라이어·머피분해까지 내고,
        # 요원 신뢰도를 갱신한다. 그 결과가 **이번 회의의 U3·U4 프롬프트 교정 블록으로
        # 곧바로 들어간다**(phase_deepdive는 perceive 뒤에 돌기 때문에 같은 회의에 반영됨).
        if name == "perceive" and _forecast:
            try:
                _forecast.settle(getattr(m, "snap", {}) or {},
                                 emit_fn=lambda t, a, **kw: _emit(t, a, kw.get("topic", ""),
                                                                  kw.get("payload"), kw.get("cause")))
            except Exception as e:
                print(f"  ⚠️ brain: 예측 채점 실패(계속): {type(e).__name__}: {e}", file=sys.stderr)
        # (구) 현실대조 — 판정 분포 관측용으로 유지. 채점은 위 forecast가 한다.
        if name == "perceive" and _reality:
            try:
                _reality.run(getattr(m, "snap", {}), meeting_id=m.meeting_id,
                             emit_fn=lambda t, a, **kw: _emit(t, a, kw.get("topic", ""),
                                                              kw.get("payload"), kw.get("cause")),
                             append_fn=bus.append_experience)
            except Exception as e:
                print(f"  ⚠️ brain: 현실대조 실패(계속): {type(e).__name__}: {e}", file=sys.stderr)

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

    if verified[0]:
        print(f"  ✅ 검산(R04) {verified[0]}건 — 불일치 {verified[1]}건")

    # ---- 최종 산출물은 discuss.py가 만든다(brain은 손대지 않음) ----
    result = finalize(b, m)

    # ---- §5 step5·6: 0콜 회고 채점 + 일화기억 flush ----
    # bus.EMITTED는 brain을 거치지 않고 발행된 것(discuss.py의 verdict 등)까지 포함하는
    # 상위집합이라 채점 재료로 더 정확하다. 없으면 brain이 모은 seen으로 폴백.
    score = _score_meeting(b, list(bus.EMITTED) or seen, fires, work_done)
    bus.emit_meeting_end(m.meeting_id, result, score=score)
    # meeting_end도 반사신경을 거쳐야 R09(예산 미달 감지)가 산다. 이 시점의 발화는 기록만
    # 남고(추가 LLM 호출 없음) 다음 회의의 재료가 된다 — 회의를 늘리지 않으면서 신호는 남긴다.
    _feed_engine()
    bus.append_experience(m.meeting_id, result)
    return result


def _score_meeting(b, events, fires, reflex_work):
    """§7-1 회고 채점(0콜). retrospect.py가 있으면 3축 전체를, 없으면 최소 통계를 남긴다."""
    cap = getattr(b, "per_run_cap", 0) or 0
    used = getattr(b, "used", 0)
    if _retro:
        try:
            return _retro.score(events, calls_used=used, cap=cap, reflex_work=reflex_work)
        except Exception as e:
            print(f"  ⚠️ brain: 회고 채점 실패: {type(e).__name__}: {e}", file=sys.stderr)
    return {"calls_used": used, "cap": cap,
            "budget_ratio": round(used / cap, 3) if cap else 0.0,
            "rule_fires": dict(fires), "reflex_work": reflex_work}
