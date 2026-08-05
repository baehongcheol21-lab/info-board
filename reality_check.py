# coding=utf-8
"""
reality_check.py — 익일 현실 대조 (설계서_ACT_자율실행.md §7-2). P11-4 산출물.

사용자 요구(원장 #65)의 핵심: "AI가 나중에 보고 **현실에 맞았나**를 판단할 수 있어야 한다."
어제 U4가 내린 판정([확실]/[추정]/[원인불명]/[판단불가])을 오늘 실제 등락과 대조해
`reality_check` 이벤트로 experience/에 영구 append 한다.

**0콜**이다. LLM에게 "맞았니?"라고 묻지 않는다 — 어제 판정과 오늘 숫자는 둘 다 이미
데이터로 있으므로 대조는 산수다. 판단이 필요한 해석은 §7-3 메타리뷰(상위 모델)의 몫이다.

⚠️ 정직성 규칙: 이 모듈은 "맞았다/틀렸다"를 함부로 선언하지 않는다.
  - [확실] 판정에만 방향 정합을 따진다(원인을 단정했으니 책임을 진다).
  - [추정]·[원인불명]·[판단불가]는 애초에 단정하지 않았으므로 정답/오답 대상이 아니다
    ('보류'로 기록). 불확실을 정직하게 말한 것을 오답으로 세면 다음부터 억지 단정을 하게 된다
    — 그건 이 시스템이 가장 피하려는 실패다.
"""
import os
import json
import glob
import datetime

KST = datetime.timezone(datetime.timedelta(hours=9))
BASE = os.path.dirname(os.path.abspath(__file__))
STREAM_DIR = os.path.join(BASE, "stream")


def _load_stream(days_back=3):
    """최근 스트림 이벤트를 시간순으로 읽는다(월 경계를 넘어도 되게 2개월치까지 훑음)."""
    now = datetime.datetime.now(KST)
    months = {f"{now:%Y-%m}", f"{(now - datetime.timedelta(days=35)):%Y-%m}"}
    rows = []
    for m in months:
        p = os.path.join(STREAM_DIR, f"{m}-stream.jsonl")
        if not os.path.exists(p):
            continue
        with open(p, encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                try:
                    rows.append(json.loads(line))
                except ValueError:
                    continue          # 깨진 줄 하나가 대조 전체를 막지 않게
    rows.sort(key=lambda r: r.get("ts", ""))
    return rows


def previous_verdicts(rows, before_date):
    """before_date(YYYY-MM-DD) 이전의 가장 최근 판정들을 지표별로 하나씩 고른다."""
    latest = {}
    for r in rows:
        if r.get("type") != "verdict":
            continue
        ts = r.get("ts", "")
        if ts[:10] >= before_date:
            continue                  # 오늘 것은 대조 대상이 아니다
        p = r.get("payload") or {}
        iid = p.get("id")
        if iid:
            latest[iid] = {"ts": ts, "topic": r.get("topic"), "eid": r.get("eid"),
                           "verdict": p.get("verdict"), "pct": p.get("pct"),
                           "value": p.get("value")}
    return latest


def compare(prev, today_snap):
    """어제 판정 vs 오늘 실제. today_snap: {id: {"name","value","pct"}} (discuss의 m.snap 형태)."""
    out = []
    for iid, v in prev.items():
        cur = today_snap.get(iid)
        if not cur or cur.get("pct") is None:
            continue
        row = {"id": iid, "topic": v.get("topic"), "verdict": v.get("verdict"),
               "when": v.get("ts", "")[:16], "cause_eid": v.get("eid"),
               "then_pct": v.get("pct"), "now_pct": cur.get("pct")}
        if v.get("verdict") == "[확실]":
            # 단정한 판정만 방향 정합을 따진다. 어제 방향과 오늘 방향이 같은가.
            a, b = v.get("pct"), cur.get("pct")
            if a is None:
                row["result"] = "대조불가(어제 등락 없음)"
            else:
                same = (a >= 0) == (b >= 0)
                row["result"] = "방향유지" if same else "방향반전"
        else:
            # 불확실을 정직하게 말한 것 — 정답/오답 대상이 아니다.
            row["result"] = "보류(단정 안 함)"
        out.append(row)
    return out


def run(today_snap, meeting_id="", emit_fn=None, append_fn=None):
    """오늘 회의의 perceive 직후 호출. 대조 결과를 reality_check 이벤트로 남긴다.
    emit_fn/append_fn은 bus.emit / bus.append_experience (테스트에선 주입 가능)."""
    today = datetime.datetime.now(KST).strftime("%Y-%m-%d")
    rows = _load_stream()
    prev = previous_verdicts(rows, today)
    checks = compare(prev, today_snap or {})
    if not checks:
        return []
    summary = {}
    for c in checks:
        summary[c["result"]] = summary.get(c["result"], 0) + 1
    if emit_fn:
        for c in checks:
            # cause를 어제 판정 이벤트로 걸어둔다 — 인과사슬로 역추적 가능(§3·T10)
            emit_fn("reality_check", "brain", topic=c.get("topic") or c["id"],
                    payload=c, cause=c.get("cause_eid"))
    if append_fn:
        append_fn(f"{meeting_id}-reality", {"type": "reality_check", "date": today,
                                            "summary": summary, "checks": checks})
    print(f"  🔎 현실대조 {len(checks)}건: {summary}")
    return checks
