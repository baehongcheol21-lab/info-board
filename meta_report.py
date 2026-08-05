# coding=utf-8
"""
meta_report.py — 메타리뷰용 집계기 (설계서_ACT_자율실행.md §7-3). P11-4 산출물.

설계서 원칙: **집계는 스크립트(0콜)가 하고 모델은 판단만 한다** — 토큰 절약.
이 파일은 최근 N일의 experience/·stream/을 훑어 숫자로 요약해 준다. 그 요약을 상위 모델
(Fable)이 읽고 루브릭 4축(①현실 정합 ②사용자 적합 ③구조 건전 ④예산 효율)으로 판단해
개선의견/에 기록하는 것이 메타리뷰다.

실행: python meta_report.py [일수]   (기본 7일)
"""
import os
import sys
import json
import glob
import datetime
import collections

KST = datetime.timezone(datetime.timedelta(hours=9))
BASE = os.path.dirname(os.path.abspath(__file__))


def _read_jsonl(path):
    rows = []
    try:
        with open(path, encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line:
                    try:
                        rows.append(json.loads(line))
                    except ValueError:
                        continue
    except OSError:
        pass
    return rows


def collect(days=7):
    since = (datetime.datetime.now(KST) - datetime.timedelta(days=days)).isoformat()
    stream, exp = [], []
    for p in glob.glob(os.path.join(BASE, "stream", "*.jsonl")):
        stream += [r for r in _read_jsonl(p) if r.get("ts", "") >= since]
    for p in glob.glob(os.path.join(BASE, "experience", "*.jsonl")):
        exp += [r for r in _read_jsonl(p) if r.get("ts", "") >= since]
    stream.sort(key=lambda r: r.get("ts", ""))
    return stream, exp


def summarize(days=7):
    stream, exp = collect(days)
    types = collections.Counter(r.get("type") for r in stream)
    meetings = [r for r in stream if r.get("type") == "meeting_end"]

    # 예산 (④축)
    calls = [(r.get("payload") or {}).get("calls_used") or 0 for r in meetings]
    scores = [(r.get("payload") or {}).get("score") or {} for r in meetings]
    budget_ratios = [s.get("budget_ratio") for s in scores if s.get("budget_ratio") is not None]
    reflex_ratios = [s.get("reflex_ratio") for s in scores if s.get("reflex_ratio") is not None]

    # 룰 유용성 (③축) — 어느 룰이 실제로 일했나
    rule_fires = collections.Counter()
    for r in stream:
        if r.get("type") == "rule_fired":
            rule_fires[(r.get("payload") or {}).get("rule_id")] += 1

    # 현실 정합 (①축)
    rc = [r for r in stream if r.get("type") == "reality_check"]
    rc_result = collections.Counter((r.get("payload") or {}).get("result") for r in rc)
    verdicts = collections.Counter(
        (r.get("payload") or {}).get("verdict") for r in stream if r.get("type") == "verdict")

    # 건전성 (③축)
    health = {"errors": types.get("error", 0), "rejected": types.get("rejected", 0),
              "frozen": types.get("rule_frozen", 0),
              "pending_commands": types.get("pending_command", 0)}

    def avg(xs):
        xs = [x for x in xs if x is not None]
        return round(sum(xs) / len(xs), 3) if xs else None

    return {
        "기간": f"최근 {days}일",
        "회의수": len(meetings),
        "이벤트수": len(stream),
        "experience행": len(exp),
        "④예산효율": {"평균콜": avg(calls), "콜목록": calls,
                     "평균 배분대비": avg(budget_ratios),
                     "평균 반사처리비율": avg(reflex_ratios)},
        "③구조건전": {"룰발화": dict(rule_fires), **health},
        "①현실정합": {"대조건수": len(rc), "결과분포": dict(rc_result),
                     "판정분포": {k: v for k, v in verdicts.items() if k}},
        "이벤트타입": dict(types),
    }


def main():
    days = int(sys.argv[1]) if len(sys.argv) > 1 else 7
    s = summarize(days)
    print(json.dumps(s, ensure_ascii=False, indent=1))
    print("\n" + "=" * 60)
    print("이 집계를 상위 모델(Fable)에게 주고 루브릭 4축으로 판단시키면 된다(§7-3):")
    print("  ①현실 정합 — 판정이 맞았나  ②사용자 적합 — 배경설명이 이해 가능했나")
    print("  ③구조 건전 — 룰·루프가 낭비 없이 돌았나  ④예산 효율")
    print("판단 결과는 개선의견/에 기록하고, 필요하면 rules.yaml 수정안을 diff로 제안.")
    print("※ rules.yaml 자동 자기수정 금지 — 제안까지만, 적용은 인간 승인(§4).")


if __name__ == "__main__":
    main()
