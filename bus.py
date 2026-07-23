# coding=utf-8
"""
bus.py — ACT v2(설계서_ACT_자율실행.md) §3 "혈관·신경"의 관측 계층. P11-1 산출물
(마이그레이션 §9 1단계 "병행기": "bus.py·experience 기록을 기존 discuss.py에 관측만
먼저 삽입 — 동작 불변, 이벤트만 쌓인다").

이 모듈은 discuss.py의 실제 회의 로직(누가 뭘 묻고 어떻게 판단하는가)을 단 한 줄도
바꾸지 않는다. 이미 끝난 transcript·result를 event_emit·cmd_parse·experience_append
세 기관(P11-0에서 확보)에 통과시켜 stream/과 experience/에 "관측 기록"만 추가로 남긴다.
반사신경(rules.yaml 엔진)과 뇌(brain.py 사이클)는 아직 없다 — 각각 P11-2·P11-3 몫.

실패해도 회의를 죽이지 않는다(§3 "기록 실패는 회의를 죽이지 않는다") — 공개 함수 전부
내부에서 예외를 삼키고 stderr 경고만 남긴다. discuss.py 쪽 호출도 가드 임포트
(`try: import bus except ImportError: bus = None`, runlog와 동일 관례)로 감싸므로
이 파일 자체가 없어도(또는 organs/가 없어도) 회의는 정상 진행된다.
"""
import sys

from registry import get_registry

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


def observe_meeting(meeting_id, now, result):
    """회의 종료 후 정확히 1회 호출. discuss.py가 이미 만들어둔 result(=discussions.json에
    쓰는 것과 동일한 dict)를 읽기만 한다 — 아무것도 재계산·재판단하지 않는다.

    한다:
      1) transcript의 각 발언을 이벤트로 풀어 stream에 순서대로 append
         (🧰도구 역할은 tool_result, 그 외는 agent_output — §3 타입 분류)
      2) agent_output마다 cmd_parse 기관으로 명령 JSON 존재 여부만 관측해 command
         이벤트로 별도 기록(§3 "cmd 필드는 파서가 추출한 명령") — 아직 실행은 안 한다
         (dispatch 연결은 반사신경이 생기는 P11-2 이후 몫).
      3) cause를 직전 이벤트의 eid로 순차 연결 — transcript 순서 그대로의 근사 인과사슬.
         진짜 의존관계 기반 인과사슬은 brain.py가 사이클을 실시간으로 도는 P11-3에서 정교해진다.
      4) meeting_end 이벤트 기록.
      5) experience_append 기관으로 회의 전체(result)를 experience/YYYY-MM.jsonl에 영구 저장
         (§6 일화기억 — "모든 수행결과를 파일에 계속 누적"의 직접 구현).

    이 함수는 discussions.json 등 핵심 산출물이 이미 저장된 뒤 호출되므로, 여기서 나는
    어떤 예외도 회의 결과 자체에는 영향을 주지 않는다."""
    try:
        reg = _registry()
        transcript = result.get("transcript", [])
        cause = None
        for entry in transcript:
            role = entry.get("role", "?")
            text = entry.get("text", "")
            ev_type = "tool_result" if role == "🧰도구" else "agent_output"
            eid = emit(ev_type, role, topic=entry.get("topic", ""),
                       payload={"text": text[:2000]}, cause=cause)
            if ev_type == "agent_output" and text:
                try:
                    parsed = reg.run("cmd_parse", text=text)
                except Exception:
                    parsed = {"found": False}
                if parsed.get("found") and parsed.get("cmd"):
                    emit("command", role, topic=entry.get("topic", ""),
                         payload={"cmd": parsed["cmd"]}, cause=eid)
            cause = eid or cause
        emit("meeting_end", "brain", topic=meeting_id,
             payload={"calls_used": result.get("calls_used"),
                      "transcript_len": len(transcript),
                      "meeting_ok": result.get("meeting_ok")})
        r = reg.run("experience_append", meeting_id=meeting_id, record=result)
        if r.get("error"):
            print(f"  ⚠️ bus.observe_meeting: experience_append 실패: {r['error']}", file=sys.stderr)
    except Exception as e:
        _warn("observe_meeting", e)
