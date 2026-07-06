# coding=utf-8
"""
discuss.py — AI 오케스트라 자동 토론 (GitHub Actions에서 하루 3번: 06시/12시/18시 KST)

구조 (사용자 설계):
  알파(지휘자) — 의제 선정과 최종 종합을 맡는다
  U1(요약요원) — 지표마다 '쉬운 말' 3~5줄 요약을 만든다 (호버/탭용)
  U3(원인분석요원) — 이상신호의 원인 후보를 찾는다
  U4(비판요원) — U3의 주장을 검증하고 과장을 깎는다
  알파(종합) — 20줄 배경설명으로 정리한다 (카드 클릭용)

피드백 회로: 직전 토론(discussions.json)의 결론을 이번 토론의 입력으로 넣는다.
예산: 한 실행당 최대 150콜 강제 차단, 평균 ~100콜 목표.
  절약 장치 — 변동이 거의 없는 지표(|전일比|<0.5%)는 직전 요약을 재사용한다(0콜).
출력:
  discussions.json            (최신 — publish.py가 페이지에 심음)
  discussions/타임스탬프.json  (전량 보관, 원본 안 버림)
  exports/YYYY-MM-DD.csv      (엑셀로 열리는 일별 스냅샷)
"""
import os
import csv
import json
import glob
import datetime

from publish import INDICATORS, fetch_yahoo, fetch_news, fetch_smp

MAX_CALLS = 150
MODEL = "gemini-3.1-flash-lite"
KST = datetime.timezone(datetime.timedelta(hours=9))

EASY_RULES = """[쉬운 글 규칙 — 반드시 지켜라]
- 한 문장은 20자 안팎으로 짧게 끊습니다. 마침표로 끝냅니다.
- 어려운 단어를 쓰면 바로 다음 문장에서 'OO은 ~하는 것입니다'로 풀이합니다.
- 피동형(~되어집니다)을 쓰지 않습니다. 능동형 '-습니다'로 씁니다.
- 결론을 첫 줄에 씁니다.
- 줄마다 줄바꿈합니다. 정확히 3~5줄만 씁니다."""


class Budget:
    """예산 관리 + 속도 조절. 무료티어는 분당 15콜 제한이라 콜 사이 4.5초 간격을 강제하고,
    그래도 429(한도초과)가 나면 65초 쉬었다 딱 한 번 재시도한다."""

    def __init__(self, client):
        self.client = client
        self.used = 0
        self._last = 0.0
        self.transcript = []   # 녹취록 — 토론방 탭에서 챗 형식으로 재생된다

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
                print(f"  [{self.used:>3}콜] {role}: {text[:50].replace(chr(10), ' ')}...")
                return text
            except Exception as e:
                if attempt == 1 and ("429" in str(e) or "RESOURCE_EXHAUSTED" in str(e)):
                    print("  ⏳ 분당 한도 도달 — 65초 대기 후 재시도")
                    time.sleep(65)
                    continue
                raise


def load_prev():
    """직전 토론 결과 (피드백 회로 입력)"""
    try:
        with open("discussions.json", encoding="utf-8") as f:
            return json.load(f)
    except (OSError, ValueError):
        return {}


def main():
    api_key = os.environ.get("GEMINI_API_KEY", "")
    if not api_key:
        print("❌ GEMINI_API_KEY 없음 — 토론 생략")
        return
    from google import genai
    client = genai.Client(api_key=api_key)
    b = Budget(client)
    now = datetime.datetime.now(KST)
    prev = load_prev()
    prev_ind = prev.get("indicators", {})
    prev_brief = prev.get("alpha_brief", "")

    # ---- 1단계: 데이터 수집 (API 콜 0회 — 파이썬이 직접) ----
    print("[1/4] 데이터 수집")
    snap = {}
    for _id, name, sym, unit, dec in INDICATORS:
        try:
            price, pct, closes = fetch_yahoo(sym)
            snap[_id] = {"name": name, "value": price, "pct": pct, "unit": unit}
        except Exception as e:
            print(f"  ⚠️ {name} 수집 실패: {e}")
    smp = fetch_smp()
    if smp:
        snap["smp"] = {"name": "SMP 계통한계가격", "value": smp, "pct": None, "unit": "원/kWh"}
    news = fetch_news()

    # ---- 2단계: U1 요약요원 — 지표별 쉬운 말 3~5줄 (변동 없으면 재사용) ----
    print("[2/4] U1 요약 (변동 큰 것만 새로 작성)")
    out_ind = {}
    for _id, d in snap.items():
        reuse = (d["pct"] is not None and abs(d["pct"]) < 0.5
                 and _id in prev_ind and prev_ind[_id].get("summary"))
        if reuse:
            out_ind[_id] = {"summary": prev_ind[_id]["summary"], "reused": True}
            continue
        try:
            s = b.ask("U1", f"""너는 정보요약 요원 U1이다. {EASY_RULES}

지표: {d['name']} = {d['value']} {d['unit']} (전일比 {d['pct']}%)
오늘 업계 뉴스: {' / '.join(news[:4]) or '없음'}

이 지표가 무엇이고 오늘 어떤 상태인지, 재밌는 비유 1개를 섞어 3~5줄로 설명하라.""",
                      topic=d["name"])
            out_ind[_id] = {"summary": s, "reused": False}
        except Exception as e:
            print(f"  ⚠️ {_id}: {e}")

    # ---- 3단계: 이상신호 심층 토론 (U3 원인 → U4 비판 → 알파 종합 20줄) ----
    anomalies = sorted(
        [(_id, d) for _id, d in snap.items() if d["pct"] is not None and abs(d["pct"]) >= 3],
        key=lambda x: -abs(x[1]["pct"]))[:3]
    print(f"[3/4] 심층 토론: 이상신호 {len(anomalies)}건")
    for _id, d in anomalies:
        try:
            base = f"{d['name']}이(가) 하루 만에 {d['pct']:+}% 변했다. 현재 {d['value']} {d['unit']}."
            u3 = b.ask("U3", f"너는 원인분석 요원 U3다. {base}\n뉴스: {' / '.join(news) or '없음'}\n"
                       f"직전 토론 결론: {prev_brief[:500] or '없음'}\n"
                       "가능한 원인 후보를 최대 3개, 각 1문장으로. 근거 없으면 '추정'이라고 붙여라.",
                       topic=d["name"])
            u4 = b.ask("U4", f"너는 비판 요원 U4다. 다음 원인 분석을 검증하라. 과장·근거부족을 깎아내라.\n{u3}\n"
                       "확실한 것과 추정을 구분해 3문장으로.", topic=d["name"])
            alpha = b.ask("알파", f"""너는 지휘자 알파다. {EASY_RULES.replace('정확히 3~5줄만', '15~20줄로')}

관측: {base}
U3 원인분석: {u3}
U4 비판검증: {u4}
직전 토론에서 우리가 내린 결론: {prev_brief[:500] or '없음'}

배경 설명문을 작성하라. 구성: ①결론 1줄 ②이 지표가 뭔지 쉬운 설명 ③오늘 왜 움직였나(확실/추정 구분)
④직전 토론과 달라진 점 ⑤앞으로 뭘 지켜봐야 하나. 확인 안 된 것은 '원인불명입니다'라고 정직하게 써라.""",
                          topic=d["name"])
            out_ind.setdefault(_id, {})["detail"] = alpha
            out_ind[_id]["verdict"] = "yellow"
        except Exception as e:
            print(f"  ⚠️ 토론 실패 {_id}: {e}")

    # ---- 4단계: 알파 총평 ----
    print("[4/4] 알파 총평")
    try:
        lines = [f"- {d['name']}: {d['value']} {d['unit']} ({d['pct']}%)" for d in snap.values()]
        brief = b.ask("알파", f"""너는 지휘자 알파다. {EASY_RULES}
오늘 {now:%m월 %d일 %H시} 지표 전체:
{chr(10).join(lines)}
직전 토론 결론: {prev_brief[:600] or '첫 토론이다'}

오늘의 총평을 3~5줄로. 첫 줄은 '오늘은 조용합니다' 또는 '오늘은 O건이 특이합니다'로 시작하라.
직전과 비교해 흐름이 바뀐 게 있으면 짚어라.""", topic="오늘의 총평")
    except Exception:
        brief = ""

    # ---- 저장 ----
    result = {
        "time": now.isoformat(timespec="minutes"),
        "alpha_brief": brief,
        "indicators": out_ind,
        "calls_used": b.used,
        "transcript": b.transcript,   # 녹취록 (토론방 탭용)
    }
    with open("discussions.json", "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=1)
    os.makedirs("discussions", exist_ok=True)
    with open(f"discussions/{now:%Y-%m-%dT%H%M}.json", "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=1)
    os.makedirs("exports", exist_ok=True)
    with open(f"exports/{now:%Y-%m-%d}.csv", "w", encoding="utf-8-sig", newline="") as f:
        w = csv.writer(f)
        w.writerow(["지표", "값", "단위", "전일比%", "요약(쉬운말)"])
        for _id, d in snap.items():
            w.writerow([d["name"], d["value"], d["unit"], d["pct"],
                        out_ind.get(_id, {}).get("summary", "").replace("\n", " ")])
    print(f"✅ 토론 완료 — {b.used}콜 사용 (한도 {MAX_CALLS}), 토론파일·CSV 저장됨")


if __name__ == "__main__":
    main()
