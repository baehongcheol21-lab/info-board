# coding=utf-8
"""
rules_engine.py — 반사신경 엔진 (설계서_ACT_자율실행.md §4). P11-2 산출물.

rules.yaml을 읽어 이벤트 스트림에 순서대로 평가한다. cond는 conditions.py의 화이트리스트
함수로만 해석한다(eval 금지 — §4 "cond는 파이썬 함수 화이트리스트로만 해석"). 이번 단계는
rules.yaml의 R01·R02·R05·R06만 active:true(마스터플랜 P11-2 지시: "저위험 4종만 켠다").

룰 발화는 그 자체로 이벤트(rule_fired)로 기록한다 — §4 "룰 발화도 이벤트로 기록되므로
'어느 룰이 얼마나 유용한가'를 §7이 통계로 알 수 있다". 발화 결과(then)를 실제 명령으로
실행(dispatch)하지는 않는다 — 그건 뇌(brain.py, P11-3)가 사이클을 실시간으로 돌 때의 몫이다.
지금은 bus.py의 관측 파이프라인 뒤에 붙는 후행(post-hoc) 평가 단계라 실시간 개입이
애초에 불가능하다(discuss.py/gemini_keys.py의 실시간 루프는 P11-1과 같은 이유로 이번
단계에서도 안 건드렸다 — 두 파일 모두 git diff 0).

duplicate_sig(R06)는 단일 이벤트만으로 판단할 수 없어(직전 명령들과 비교해야 함) 여기서
이벤트를 순회하며 payload에 'duplicate'를 미리 계산해 넣는다 — conditions.py의 검사 함수는
순수 함수로 유지(상태는 전부 엔진에 있음).
"""
import os
import json
import hashlib

import yaml

from registry import get_registry
from conditions import CONDITIONS

_ROOT = os.path.dirname(os.path.abspath(__file__))
RULES_FILE = os.path.join(_ROOT, "rules.yaml")


def load_rules():
    with open(RULES_FILE, encoding="utf-8") as f:
        return yaml.safe_load(f)


def _cmd_sig(cmd):
    return hashlib.md5(json.dumps(cmd, sort_keys=True, ensure_ascii=False).encode("utf-8")).hexdigest()


class ReflexEngine:
    """상태 유지 반사신경 엔진 — brain.py(P11-3)가 사이클 중 이벤트를 조금씩(phase 단위로)
    먹여도 R06 중복탐지가 회의 전체에 걸쳐 이어지도록 seen_sigs를 인스턴스에 보관한다.
    (P11-2의 evaluate_stream은 한 방에 전체를 평가하는 무상태 버전 — 그건 그대로 유지하고
    아래에서 이 엔진에 위임한다.)"""

    def __init__(self, rules=None):
        rules = rules if rules is not None else load_rules()
        self.active_rules = [r for r in rules if r.get("active")]
        self.seen_sigs = set()

    def feed(self, events, emit_fn=None):
        """새로 들어온 이벤트들만 평가한다(이미 먹인 건 다시 주지 말 것 — 재발화 방지).
        emit_fn(=bus.emit)을 주면 발화마다 rule_fired 이벤트를 기록한다.
        반환: [{rule_id, event_eid, topic, then}, ...] — 발화 순서 보존."""
        fired = []
        for ev in events:
            payload = dict(ev.get("payload") or {})
            if ev.get("type") == "command":
                sig = _cmd_sig(payload.get("cmd", {}))
                payload["duplicate"] = sig in self.seen_sigs
                self.seen_sigs.add(sig)
            probe = {**ev, "payload": payload}
            for rule in self.active_rules:
                when = rule.get("when") or {}
                if when.get("type") and when["type"] != ev.get("type"):
                    continue
                checker = CONDITIONS.get(when.get("cond"))
                if not checker:
                    continue
                try:
                    matched = bool(checker(probe))
                except Exception:
                    matched = False
                if not matched:
                    continue
                rec = {"rule_id": rule["id"], "event_eid": ev.get("eid"),
                       "topic": ev.get("topic", ""), "then": rule.get("then")}
                fired.append(rec)
                if emit_fn:
                    emit_fn("rule_fired", f"rule:{rule['id']}", topic=ev.get("topic", ""),
                            payload={"rule_id": rule["id"], "desc": rule.get("desc"),
                                     "then": rule.get("then")},
                            cause=ev.get("eid"))
        return fired


def evaluate_stream(events, rules=None, emit_fn=None):
    """무상태 일괄 평가(P11-2 테스트·후행 평가용). ReflexEngine에 전체를 한 번에 먹인 것과 같다.
    반환: [{rule_id, event_eid, topic, then}, ...]."""
    return ReflexEngine(rules).feed(events, emit_fn=emit_fn)
