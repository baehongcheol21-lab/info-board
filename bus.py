# coding=utf-8
"""
bus.py — ACT v2(설계서_ACT_자율실행.md) §3 "혈관·신경". 이벤트 스트림(stream/)에 대한
얇은 결선층이다. event_emit·cmd_parse·experience_append 세 기관(P11-0)을 감싸 다음 둘을
제공한다:

  1) 후행(post-hoc) 관측 — `observe_meeting`. 회의가 다 끝난 뒤 transcript를 이벤트로 풀어
     기록한다. P11-1/P11-2에서 도입. **brain 비활성(레거시 순차) 경로 전용** 이제.
  2) 실시간(inline) 관측 — `emit_entries`. 회의 진행 중 phase가 끝날 때마다 그 phase가 남긴
     transcript 조각을 이벤트로 흘려보낸다. P11-3의 brain.py가 사이클을 실시간으로 돌 때 이걸
     쓴다. 이러면 cause 사슬이 실제 실행 순서를 반영하고, 반사신경이 진행 중인 회의에
     끼어들 수 있다(§5).

두 경로가 같은 per-entry 규약(🧰도구→tool_result, 그 외→agent_output, agent_output마다
cmd_parse로 command 이벤트 추출, cause 순차 연결)을 공유하도록 `emit_entries`로 일원화했다.

실패해도 회의를 죽이지 않는다(§3 "기록 실패는 회의를 죽이지 않는다") — 공개 함수 전부
내부에서 예외를 삼키고 stderr 경고만 남긴다. discuss.py/brain.py 쪽 호출도 가드 임포트
(`try: import bus except ImportError: bus = None`)로 감싸므로 이 파일이 없어도 회의는 돈다.
"""
import sys

from registry import get_registry

try:  # PyYAML 미설치 등으로 rules_engine이 안 올라와도 관측 자체는 죽지 않게
    import rules_engine
except ImportError:
    rules_engine = None

_reg = None


def _registry():
    global _reg
    if _reg is None:
        _reg = get_registry()
    return _reg


def _warn(where, e):
    print(f"  ⚠️ bus.{where} 실패(무시하고 계속): {type(e).__name__}: {e}", file=sys.stderr)


def emit(type, actor, topic="", payload=None, cause=None):
    """이벤트 한 줄을 stream/YYYY-MM-stream.jsonl에 append. 실패해도 예외를 올리지 않고
    None을 반환한다 — 호출부가 cause 체이닝에 안전하게 쓸 수 있게."""
    try:
        r = _registry().run("event_emit", type=type, actor=actor, topic=topic,
                             payload=payload, cause=cause)
        if r.get("error"):
            print(f"  ⚠️ bus.emit 실패: {r['error']}", file=sys.stderr)
            return None
        return r["eid"]
    except Exception as e:
        _warn("emit", e)
        return None


def emit_meeting_start(meeting_id, now):
    return emit("meeting_start", "brain", topic=meeting_id,
                payload={"ts": now.isoformat(timespec="minutes")})


def emit_meeting_end(meeting_id, result, score=None):
    payload = {"calls_used": result.get("calls_used"),
               "transcript_len": len(result.get("transcript", [])),
               "meeting_ok": result.get("meeting_ok")}
    if score is not None:
        payload["score"] = score
    return emit("meeting_end", "brain", topic=meeting_id, payload=payload)


def append_experience(meeting_id, result):
    """§6 일화기억 — 회의 전체(result)를 experience/YYYY-MM.jsonl에 영구 append."""
    try:
        r = _registry().run("experience_append", meeting_id=meeting_id, record=result)
        if r.get("error"):
            print(f"  ⚠️ bus.append_experience 실패: {r['error']}", file=sys.stderr)
        return not r.get("error")
    except Exception as e:
        _warn("append_experience", e)
        return False


def emit_entries(entries, start_cause=None):
    """transcript 조각(entries)을 §3 스키마 이벤트로 풀어 순서대로 stream에 append하고,
    새로 만든 이벤트 dict 리스트와 마지막 cause eid를 돌려준다. per-entry 규약은 위 docstring 참고.
    반환: (events, last_cause). 실패해도 예외를 올리지 않는다."""
    events, cause = [], start_cause
    try:
        reg = _registry()
    except Exception as e:
        _warn("emit_entries(registry)", e)
        return events, cause
    for entry in entries:
        role = entry.get("role", "?")
        text = entry.get("text", "")
        ev_type = "tool_result" if role == "🧰도구" else "agent_output"
        eid = emit(ev_type, role, topic=entry.get("topic", ""), payload={"text": text[:2000]}, cause=cause)
        if eid:
            events.append({"eid": eid, "type": ev_type, "actor": role,
                           "topic": entry.get("topic", ""), "payload": {"text": text[:2000]},
                           "cause": cause})
        if ev_type == "agent_output" and text:
            try:
                parsed = reg.run("cmd_parse", text=text)
            except Exception:
                parsed = {"found": False}
            if parsed.get("found") and parsed.get("cmd"):
                ceid = emit("command", role, topic=entry.get("topic", ""),
                            payload={"cmd": parsed["cmd"]}, cause=eid)
                if ceid:
                    events.append({"eid": ceid, "type": "command", "actor": role,
                                   "topic": entry.get("topic", ""),
                                   "payload": {"cmd": parsed["cmd"]}, "cause": eid})
        cause = eid or cause
    return events, cause


def observe_meeting(meeting_id, now, result):
    """레거시(순차) 경로 전용 후행 관측 — brain 비활성일 때만 discuss.py가 호출한다.
    회의가 다 끝난 뒤 transcript 전체를 이벤트로 풀고(emit_entries), meeting_end·experience를
    기록한 뒤, 쌓인 이벤트에 반사신경을 한 번 통과시켜 rule_fired를 남긴다(P11-2 동작 유지).
    핵심 산출물(discussions.json 등)이 이미 저장된 뒤 호출되므로 여기의 어떤 예외도 회의
    결과에는 영향을 주지 않는다."""
    try:
        transcript = result.get("transcript", [])
        events, _ = emit_entries(transcript, start_cause=None)
        emit_meeting_end(meeting_id, result)
        append_experience(meeting_id, result)
        if rules_engine:
            try:
                fired = rules_engine.evaluate_stream(events, emit_fn=emit)
                if fired:
                    print(f"  🧠 반사신경 발화 {len(fired)}건: {[f['rule_id'] for f in fired]}")
            except Exception as e:
                _warn("observe_meeting(rules_engine)", e)
    except Exception as e:
        _warn("observe_meeting", e)
