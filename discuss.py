# coding=utf-8
"""
discuss.py v2 — HMAS AI 오케스트라 (하루 3회: KST 06/12/18시, GitHub Actions 자동)

v2 개편 (요구사항_체크리스트.md 반영):
  [조직]  알파(메타·종합) / U1(지표요약) / U2(뉴스분석) / B2(뉴스분류 슈퍼바이저)
          U3(원인분석·도구사용) / U4(비판·평가매트릭스)
  [도구]  tools.py — 뉴스검색·기사크롤링·과거시세·기억은행 (콜 0원, 실패시 폴백)
  [방어]  Time-Proximity(24h), U4 평가매트릭스, 알파 모순검사+판단불가 허용(Escape Hatch),
          출처태그, 전역상태 버스, 기억은행 주입, 상태압축(요약만 전달)
  [문체]  유치한 비유 금지 / 뻔한 뜻풀이 금지 / 채움말 금지 / 예시 돌림 금지
  [병렬화] asyncio 검토했으나 무료티어 분당 15콜 제한과 상충 → 보류 (체크리스트 D11)
"""
import os
import csv
import json
import datetime

from publish import INDICATORS, fetch_yahoo, fetch_smp
import tools

MAX_CALLS = 150
MODEL = "gemini-3.1-flash-lite"
KST = datetime.timezone(datetime.timedelta(hours=9))

# ---- 문체 규칙 (체크리스트 B — 사용자가 직접 지적한 것들) ----
STYLE = """[문체 규칙 — 어기면 폐기된다]
- 짧은 단문, '-습니다'체, 결론 먼저.
- 비유 금지. 꼭 필요하면 성인 신문 수준 1개만. ("과자가 쏟아진", "헐렁한 옷" 같은 유치한 비유 금지)
- 낱말 뜻풀이 금지. 전문용어(예: 계통한계가격, 출력제어)만 한 줄 풀이 허용.
  ("환율은 외국 돈과 바꾸는 비율입니다" 같은 뻔한 설명 = 즉시 실격)
- 채움말 금지. ("~에 힘쓰고 있습니다", "~로 미래를 밝힙니다" 같은 알맹이 없는 문장 금지)
- 사실 주장에는 [출처: ...] 태그를 달아라. 출처를 못 대면 (추정)이라고 표기하라.
- 사용자가 준 예시는 참고일 뿐이다. 예시 개수·형식에 갇히지 말고 본질에 맞게 스스로 설계하라."""


class Budget:
    """예산 + 속도조절(분당 15콜 제한 대응: 콜 간 4.5초, 429시 65초 1회 재시도) + 녹취"""

    def __init__(self, client):
        self.client = client
        self.used = 0
        self._last = 0.0
        self.transcript = []

    def ask(self, role, prompt, topic=""):
        import time
        if self.used >= MAX_CALLS:
            raise RuntimeError(f"예산 {MAX_CALLS}콜 소진")
        wait = 4.5 - (time.time() - self._last)
        if wait > 0:
            time.sleep(wait)
        for attempt in (1, 2):
            try:
                self._last = time.time()
                self.used += 1
                r = self.client.models.generate_content(model=MODEL, contents=prompt)
                text = (r.text or "").strip()
                self.transcript.append({"role": role, "topic": topic, "text": text})
                print(f"  [{self.used:>3}콜] {role}: {text[:48].replace(chr(10), ' ')}...")
                return text
            except Exception as e:
                if attempt == 1 and ("429" in str(e) or "RESOURCE_EXHAUSTED" in str(e)):
                    print("  ⏳ 분당 한도 — 65초 대기")
                    time.sleep(65)
                    continue
                raise


def load_prev():
    try:
        with open("discussions.json", encoding="utf-8") as f:
            return json.load(f)
    except (OSError, ValueError):
        return {}


def build_global_state(snap, now):
    """전역 상태 버스 (체크리스트 D6) — 모든 요원이 공유하는 2줄 맥락"""
    movers = sorted((d for d in snap.values() if d["pct"] is not None),
                    key=lambda x: -abs(x["pct"]))[:3]
    mv = ", ".join(f"{d['name']} {d['pct']:+}%" for d in movers)
    kr_open = now.weekday() < 5 and 9 <= now.hour < 16
    session = (f"지금 {now:%m/%d %H시} KST. 한국장 {'열림' if kr_open else '마감'}. "
               "미국 지수(SOX·나스닥 등)는 미국 어젯밤 종가라 한국 오늘장과 시점이 다르다.")
    return f"[전역 상태] {session}\n[오늘 큰 움직임] {mv or '없음'}"


def main():
    api_key = os.environ.get("GEMINI_API_KEY", "")
    if not api_key:
        print("❌ GEMINI_API_KEY 없음")
        return
    from google import genai
    b = Budget(genai.Client(api_key=api_key))
    now = datetime.datetime.now(KST)
    prev = load_prev()
    prev_ind = prev.get("indicators", {})
    prev_brief = prev.get("alpha_brief", "")

    # ---- 1. 데이터 수집 (0콜) ----
    print("[1/5] 데이터 수집")
    snap = {}
    for _id, name, sym, unit, dec in INDICATORS:
        try:
            price, pct, _ = fetch_yahoo(sym)
            snap[_id] = {"name": name, "value": price, "pct": pct, "unit": unit}
        except Exception as e:
            print(f"  ⚠️ {name}: {e}")
    smp = fetch_smp()
    if smp:
        snap["smp"] = {"name": "SMP 계통한계가격", "value": smp, "pct": None, "unit": "원/kWh"}
    gstate = build_global_state(snap, now)
    memory = tools.get_conclusions("", n=2)  # 기억 은행 (D10)

    # ---- 2. U1 지표요약 (변동 <0.5%는 직전 요약 재사용 = 0콜) ----
    print("[2/5] U1 지표요약")
    out_ind = {}
    for _id, d in snap.items():
        if (d["pct"] is not None and abs(d["pct"]) < 0.5
                and prev_ind.get(_id, {}).get("summary")):
            out_ind[_id] = {"summary": prev_ind[_id]["summary"], "reused": True}
            continue
        try:
            s = b.ask("U1", f"""너는 지표요약 요원 U1이다. {STYLE}
{gstate}

지표: {d['name']} = {d['value']} {d['unit']} (전일比 {d['pct']}%)

이 숫자가 오늘 무엇을 의미하는지 3~4줄. 모르는 건 쓰지 마라. 채움말로 줄 수 채우지 마라.""",
                      topic=d["name"])
            out_ind[_id] = {"summary": s, "reused": False}
        except Exception as e:
            print(f"  ⚠️ {_id}: {e}")

    # ---- 3. 뉴스 파이프라인 (체크리스트 A) ----
    print("[3/5] 뉴스 파이프라인 (본문 크롤링→U2 분석→B2 분류→맥락)")
    news_brief = {}
    try:
        heads = tools.get_electimes_headlines(10)
        articles = []
        for h in heads[:8]:  # 예산 관리: 회당 최대 8건 본문 분석
            try:
                body = tools.get_article(h["link"])
            except Exception as e:
                body = f"본문 추출 실패({e}) — 제목만으로 판단"
            a = b.ask("U2", f"""너는 뉴스분석 요원 U2다. {STYLE}
{gstate}

기사 제목: {h['title']}
기사 본문(발췌): {body[:1800]}

이 기사를 2~3줄로 분석하라: ①무슨 일인가 ②전기산업/시장에 왜 중요한가(중요하지 않으면 '일상 기사'라고 써라).""",
                      topic=h["title"][:30])
            articles.append({"title": h["title"], "link": h["link"], "analysis": a})
        # B2 분류 슈퍼바이저 — 분류 체계를 스스로 설계 (예시 돌림 금지, 체크리스트 A3/B5)
        joined = "\n\n".join(f"[{i+1}] {a['title']}\n{a['analysis']}" for i, a in enumerate(articles))
        cls = b.ask("B2", f"""너는 분류 슈퍼바이저 B2다. {STYLE}
아래는 U2가 분석한 오늘 전기신문 기사 {len(articles)}건이다.

{joined}

할 일:
1. 이 기사들에 맞는 분류 체계를 네가 스스로 설계하라 (기사 유형, 실현가능성/영향도 점수 등 —
   사용자가 예시로 준 틀을 복사하지 말고 오늘 기사 성격에 맞게 만들어라).
2. 각 기사에 [번호] 라벨 + 점수 + 근거 1줄을 붙여라.
3. 마지막에 '주목: [번호]' 로 변동성이 예측되는 기사를 골라 이유를 써라.
반드시 JSON으로 출력: {{"체계": "...", "기사": [{{"no": 1, "label": "...", "score": 0, "reason": "..."}}], "주목": "..."}}""",
                    topic="기사 분류")
        try:
            cj = json.loads(cls[cls.find("{"):cls.rfind("}") + 1])
        except ValueError:
            cj = {"체계": cls[:300], "기사": [], "주목": ""}
        ctx = b.ask("알파", f"""너는 지휘자 알파다. {STYLE}
{gstate}
B2의 분류 결과: {json.dumps(cj, ensure_ascii=False)[:1500]}
직전 토론 결론: {prev_brief[:400] or '없음'}

오늘 전기업계 뉴스들이 '어떤 맥락으로 전개되고 있는지' 4~6줄로 브리핑하라.
변동성이 예측되는 지점이 있으면 '주시: ...' 한 줄을 붙여라. 없으면 '특이 흐름 없음'이라고 써라.""",
                    topic="뉴스 맥락")
        for i, a in enumerate(articles):
            for c in cj.get("기사", []):
                if c.get("no") == i + 1:
                    a.update({"label": c.get("label", ""), "score": c.get("score"),
                              "reason": c.get("reason", "")})
        news_brief = {"context": ctx, "scheme": cj.get("체계", ""),
                      "focus": cj.get("주목", ""), "articles": articles}
    except Exception as e:
        print(f"  ⚠️ 뉴스 파이프라인 실패(토론은 계속): {e}")

    # ---- 4. 이상신호 심층토론 (도구 사용 + 방어로직) ----
    anomalies = sorted(
        [(_id, d) for _id, d in snap.items() if d["pct"] is not None and abs(d["pct"]) >= 2],
        key=lambda x: -abs(x[1]["pct"]))[:3]
    print(f"[4/5] 심층토론 {len(anomalies)}건 (도구 사용)")
    for _id, d in anomalies:
        try:
            base = f"{d['name']} 전일比 {d['pct']:+}%, 현재 {d['value']} {d['unit']}."
            u3 = tools.run_tool_loop(b, "U3", f"""너는 원인분석 요원 U3다. {STYLE}
{gstate}
관측: {base}
과거 유사 결론(기억은행): {memory[:400]}

[Time-Proximity 규칙] 원인 후보는 '24시간 이내에 새로 발생한 이벤트'만 인정된다.
"HBM 독점" 같은 장기 상수는 오늘 급변의 원인이 될 수 없다 — 배제하라.
도구(search_news, get_history 등)로 근거를 찾아라. 원인 후보 최대 3개, 각각 [출처:]와 발생시점 명시.
근거를 못 찾으면 "원인 후보 없음"이라고 써라.""", topic=d["name"])
            # 툴킷: 수급(거래량) 데이터를 자동으로 뽑아 U4의 평가매트릭스 근거로 제공
            try:
                vol = tools.get_history(_id, days=7)
            except Exception as e:
                vol = f"(수급 데이터 조회 실패: {e})"
            b.transcript.append({"role": "🧰도구", "topic": d["name"],
                                 "text": f"get_history({_id},7d) → 수급 검증용:\n{vol[:600]}"})
            u4 = b.ask("U4", f"""너는 비판 요원 U4다. {STYLE}
U3의 분석: {u3[:1200]}
[수급 데이터 7일(종가·거래량)]: {vol[:700]}

[평가 매트릭스] 각 원인 후보를 두 기준으로 채점하라:
  ①24시간 이내 발생한 이벤트인가?  ②위 수급 데이터(거래량 급증 등)로 증명되는가?
둘 다 충족해야만 [확실]. 하나만 충족 = [추정]. 둘 다 미충족 = [기각].
마지막 줄에 종합판정: [확실] / [추정] / [원인불명] / [판단불가] 중 하나.""", topic=d["name"])
            # 판정 구속 (코드 레벨): U4 판정을 파싱해서 알파에게 강제
            verdict_kr = next((v for v in ("[확실]", "[추정]", "[원인불명]", "[판단불가]")
                               if v in u4.split("\n")[-1] or v in u4[-120:]), "[추정]")
            constraint = ("원인을 단정해도 된다." if verdict_kr == "[확실]" else
                          f"U4 종합판정이 {verdict_kr} 이므로 너는 원인을 단정할 수 없다. "
                          "서두에 '원인은 아직 확정되지 않았습니다'로 시작하라. 서두와 결론이 모순되면 실격이다.")
            alpha = b.ask("알파", f"""너는 지휘자 알파다. {STYLE}
관측: {base}
U3(요약): {u3[:800]}
U4 검증(요약): {u4[:600]}
[판정 구속] {constraint}

10~15줄 배경설명: ①현재 판정 1줄 ②확인된 사실([출처:] 있는 것만) ③기각된 가설과 이유
④앞으로 확인할 것. '판단불가'로 끝내도 된다 — 억지 결론이 더 나쁘다.""", topic=d["name"])
            out_ind.setdefault(_id, {})["detail"] = alpha
            out_ind[_id]["verdict"] = {"[확실]": "green", "[추정]": "yellow"}.get(verdict_kr, "red")
        except Exception as e:
            print(f"  ⚠️ {_id} 토론 실패: {e}")

    # ---- 5. 알파 총평 ----
    print("[5/5] 알파 총평")
    try:
        lines = [f"- {d['name']}: {d['value']} {d['unit']} ({d['pct']}%)" for d in snap.values()]
        brief = b.ask("알파", f"""너는 지휘자 알파다. {STYLE}
{gstate}
지표 전체:
{chr(10).join(lines)}
뉴스 맥락: {news_brief.get('context', '없음')[:400]}
직전 결론: {prev_brief[:400] or '첫 토론'}

총평 3~5줄. 첫 줄은 '오늘은 조용합니다' 또는 '오늘은 O건이 특이합니다'.
직전 대비 흐름 변화가 있으면 짚어라. 채움말 금지.""", topic="오늘의 총평")
    except Exception:
        brief = ""

    # ---- 저장 ----
    result = {"time": now.isoformat(timespec="minutes"), "alpha_brief": brief,
              "indicators": out_ind, "news_brief": news_brief,
              "calls_used": b.used, "transcript": b.transcript}
    with open("discussions.json", "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=1)
    os.makedirs("discussions", exist_ok=True)
    with open(f"discussions/{now:%Y-%m-%dT%H%M}.json", "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=1)
    os.makedirs("exports", exist_ok=True)
    with open(f"exports/{now:%Y-%m-%d}.csv", "w", encoding="utf-8-sig", newline="") as f:
        w = csv.writer(f)
        w.writerow(["지표", "값", "단위", "전일比%", "요약"])
        for _id, d in snap.items():
            w.writerow([d["name"], d["value"], d["unit"], d["pct"],
                        out_ind.get(_id, {}).get("summary", "").replace("\n", " ")])
    print(f"✅ 완료 — {b.used}콜 (한도 {MAX_CALLS})")


if __name__ == "__main__":
    main()
