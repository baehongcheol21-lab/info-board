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
import re
import csv
import json
import hashlib
import datetime
import traceback

from publish import INDICATORS, fetch_yahoo, fetch_smp
import tools
import trends
from gemini_keys import RotatingBudget

try:  # P5 관측 로그
    import runlog
except ImportError:
    runlog = None

try:  # P11-1 관측 계층 (설계서_ACT_자율실행.md §3·§6·§9-1) — 없어도 회의는 그대로 진행
    import bus
except ImportError:
    bus = None


def _diag(e):
    """실패 원인을 한 줄로 못 잡을 때(예: 인코딩 문제) 다음 조사를 위해 traceback 마지막 줄을 남긴다."""
    tb = traceback.format_exc().strip().splitlines()
    return f"{e} | {tb[-1] if tb else ''}"

MAX_CALLS = 150   # 회의 1회당 안전상한 (계정 개수와 무관 — 폭주 방지용)
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

# 독자 프로파일 — 뉴스 개인화("왜 나한테 중요한가")의 기준
READER = "이 브리핑을 읽는 사람은 전력전자·전기기계 전공자다. 전력계통·전력변환·ESS·계통연계·반도체 공정전력 같은 주제에 특히 민감하다."


def load_prev():
    try:
        with open("discussions.json", encoding="utf-8") as f:
            return json.load(f)
    except (OSError, ValueError):
        return {}


# ---- 보류 큐 (알파 관리자화, P5 #6) — U4가 "데이터 부족"류 판정을 내린 건을
#      다음 회의가 자동으로 다시 의제에 올리게 한다. 알파는 편집장이 아니라 운영 관리자다. ----
RETRY_QUEUE_FILE = "retry_queue.json"
DATA_INSUFFICIENT_MARKERS = ("데이터가 부족", "포함하지 않", "이후 데이터", "이후를 포함",
                              "최신 데이터", "갱신되지 않", "데이터 부족", "시점이 맞지 않",
                              "데이터 지연", "데이터가 사건 이후")


def _load_retry_queue():
    try:
        return json.load(open(RETRY_QUEUE_FILE, encoding="utf-8"))
    except (OSError, ValueError):
        return []


def _save_retry_queue(q):
    with open(RETRY_QUEUE_FILE, "w", encoding="utf-8") as f:
        json.dump(q, f, ensure_ascii=False, indent=1)


def _push_retry_queue(_id, name, reason, now):
    q = [x for x in _load_retry_queue() if x["id"] != _id]
    q.append({"id": _id, "name": name, "reason": reason,
              "ts": now.isoformat(timespec="minutes")})
    _save_retry_queue(q[-10:])


def _clear_retry_queue(_id):
    q = [x for x in _load_retry_queue() if x["id"] != _id]
    _save_retry_queue(q)


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
    try:
        b = RotatingBudget(per_run_cap=MAX_CALLS)
    except RuntimeError as e:
        print(f"❌ {e}")
        return
    print(f"🔑 등록된 계정 {len(b.keys)}개 (오늘 이론상 최대 {b.total_daily_limit}콜)")
    now = datetime.datetime.now(KST)
    meeting_id = f"{now:%Y%m%dT%H%M}"
    if bus:
        bus.emit_meeting_start(meeting_id, now)
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
            print(f"  ⚠️ {_id}: {_diag(e)}")

    # ---- 3. 뉴스 파이프라인 (다중 소스: 전기신문 + 인베스팅닷컴) ----
    print("[3/5] 뉴스 파이프라인 (다중소스 크롤링→U2 분석→B2 분류→맥락)")
    news_brief = {}
    try:
        # 전 소스에서 헤드라인 수집 후 제목 기준 중복 제거
        raw = tools.get_headlines(per_source=12)
        seen, heads = set(), []
        for h in raw:
            key = h["title"][:20]
            if h["title"] and key not in seen:
                seen.add(key)
                heads.append(h)
        MAX_ANALYZE = 24  # 회당 분석 상한 (1000콜 예산 안에서 여러 소스 커버)
        articles = []
        for h in heads[:MAX_ANALYZE]:
            try:
                body = tools.get_article(h["link"])
            except Exception as e:
                body = f"본문 추출 실패({e}) — 제목만으로 판단"
            a = b.ask("U2", f"""너는 뉴스분석 요원 U2다. {STYLE}
{gstate}

출처: {h.get('source_name', '')}
기사 제목: {h['title']}
기사 본문(발췌): {body[:1600]}

이 기사를 2~3줄로 분석하라: ①무슨 일인가 ②전기/경제·시장에 왜 중요한가(중요하지 않으면 '일상 기사'라고 써라).""",
                      topic=h["title"][:30])
            articles.append({"title": h["title"], "link": h["link"], "analysis": a,
                             "source": h.get("source_name", ""), "category": h.get("category", "econ")})
        # B2 분류 슈퍼바이저 — 분류 체계를 스스로 설계 (예시 돌림 금지, 체크리스트 A3/B5)
        joined = "\n\n".join(f"[{i+1}]({a['category']}) {a['title']}\n{a['analysis']}"
                             for i, a in enumerate(articles))
        cls = b.ask("B2", f"""너는 분류 슈퍼바이저 B2다. {STYLE}
아래는 U2가 분석한 오늘 뉴스 {len(articles)}건이다 (괄호는 분야: elec=전기, econ=경제).

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
        # ---- 중요 기사(점수 상위)만 심층 배경설명 — 판단력 강한 heavy 모델 사용 ----
        def _score(a):
            # B2가 점수를 숫자로 줄 수도, "영향력 8, 실현성 7" 같은 문자열로 줄 수도 있음.
            # 문자열이면 등장하는 숫자들의 합으로 대략적 중요도를 매긴다.
            v = a.get("score")
            if isinstance(v, (int, float)):
                return float(v)
            nums = re.findall(r"\d+(?:\.\d+)?", str(v or ""))
            return sum(float(n) for n in nums) if nums else 0
        top = sorted([a for a in articles if _score(a) > 0], key=_score, reverse=True)[:3]
        for a in top:
            try:
                body = tools.get_article(a["link"])[:2500]
            except Exception:
                body = a.get("analysis", "")
            deep = b.ask_heavy("알파", f"""너는 지휘자 알파다. {STYLE}
{READER}

기사 제목: {a['title']}
기사 본문/분석: {body}

이 기사의 '심층 배경'을 초심자도 흐름을 이해하도록 6개 소제목으로 설명하라.
구성 예시(형식만 참고, 내용은 이 기사에 맞게): ①배경(왜 이렇게 됐나) ②직접 원인/촉발 ③현재 상황과 수치
④정책·시장의 대응 ⑤파급효과 ⑥앞으로의 과제. 각 소제목은 "N. 제목" 형식, 2~4문장.
과장·채움말 금지. 사실엔 [출처:]. 모르면 (추정).""", topic=a["title"][:30])
            why = b.ask("U1", f"""{READER}
기사: {a['title']} — {a.get('reason', '')}
이 기사가 '전력전자·전기기계 전공자'에게 왜 중요한지 딱 한 줄로. 전공과의 구체적 연결고리를 짚어라.
없으면 "전공 직접 연관 낮음"이라고 써라. 채움말 금지.""", topic=a["title"][:30])
            act = b.ask("U1", f"""기사: {a['title']}
독자가 더 알아보면 좋을 '후속 리서치 질문'을 딱 한 줄, 물음표로 끝내라.
예: "국내 ESS 화재 관련 최근 규제 변화는?" 형식만 참고. 실제 기사에 맞게.""", topic=a["title"][:30])
            a["detail"] = deep
            a["why_me"] = why.strip()
            a["action"] = act.strip()
        # ---- 트렌드 추적 (O8): 심층기사 주제가 최근 며칠간 몇 번 등장했나 ----
        try:
            tracker = trends.TrendTracker()
            for a in top:
                _, msg = tracker.check(f"{a['title']} {a.get('label', '')}")
                if msg:
                    a["trend"] = msg
            # 모든 기사 제목도 트렌드 로그에 축적 (다음날 비교 근거) — 상위 심층기사는 이미 반영됨
            for a in articles:
                if "trend" not in a:
                    tracker.check(a["title"])
            tracker.flush()
        except Exception as e:
            print(f"  ⚠️ 트렌드 추적 건너뜀: {str(e)[:60]}")
        news_brief = {"context": ctx, "scheme": cj.get("체계", ""),
                      "focus": cj.get("주목", ""), "articles": articles}
    except Exception as e:
        print(f"  ⚠️ 뉴스 파이프라인 실패(토론은 계속): {_diag(e)}")

    # ---- 4. 이상신호 심층토론 (도구 사용 + 방어로직) ----
    anomalies = sorted(
        [(_id, d) for _id, d in snap.items() if d["pct"] is not None and abs(d["pct"]) >= 2],
        key=lambda x: -abs(x[1]["pct"]))[:3]
    # 보류 큐 편입 (P5 #6 알파 관리자화): 전 회의에서 "데이터 부족"으로 미뤄둔 건을
    # 최대 2건까지 오늘 의제에 자동으로 다시 올린다.
    already = {i for i, _ in anomalies}
    retry_items = [x for x in _load_retry_queue() if x["id"] not in already and x["id"] in snap][:2]
    anomalies = anomalies + [(x["id"], snap[x["id"]]) for x in retry_items]
    print(f"[4/5] 심층토론 {len(anomalies)}건 (도구 사용, 보류큐 재의제 {len(retry_items)}건 포함)")
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
검색어에는 반드시 "{d['name']}" 지표명을 포함하라 — 다른 종목·지표를 검색하지 마라.
근거를 못 찾으면 "원인 후보 없음"이라고 써라.""", topic=d["name"])
            # 툴킷: 수급(거래량) 데이터를 자동으로 뽑아 U4의 평가매트릭스 근거로 제공
            try:
                vol = tools.get_history(_id, days=7)
                vol_ok = True
            except Exception as e:
                vol = f"(수급 데이터 조회 실패: {e})"
                vol_ok = False
            if runlog:
                runlog.log_tool_call("get_history(U4증거)", f"{_id},7d", vol_ok, len(vol),
                                      result_hash=hashlib.md5(vol.encode("utf-8")).hexdigest()[:12] if vol_ok else "")
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

            # ---- 알파 관리자화 (P5 #6) ----
            # U4가 "데이터 부족/시점 불일치"류로 원인불명·판단불가를 냈으면, 알파에게 넘기기 전에
            # 코드가 먼저 1회 자동 재조회한다. 그래도 같은 데이터면 알파는 분석을 하지 말고
            # '보류'로만 짧게 분류하고, 이 건은 다음 회의가 자동으로 다시 의제에 올린다.
            manage_note = ""
            needs_retry = verdict_kr in ("[원인불명]", "[판단불가]") and any(
                mk in u4 for mk in DATA_INSUFFICIENT_MARKERS)
            if needs_retry:
                try:
                    vol2 = tools.get_history(_id, days=7)
                    retried_ok = True
                except Exception as e:
                    vol2 = f"(재조회 실패: {e})"
                    retried_ok = False
                if runlog:
                    runlog.log_tool_call("get_history(재조회)", f"{_id},7d", retried_ok, len(vol2))
                if not retried_ok or vol2.strip() == vol.strip():
                    manage_note = ("\n[관리] 재조회했지만 데이터가 갱신되지 않았습니다. 이 건은 원인 규명을 "
                                    "시도하지 말고 반드시 '보류(데이터 대기)'로만 분류하십시오.")
                    _push_retry_queue(_id, d["name"], "데이터 부족 — 재조회해도 갱신 안 됨", now)
                else:
                    vol = vol2  # 새 데이터를 확보했으면 그걸로 계속 진행 (보류 아님)
                    needs_retry = False

            if not needs_retry:
                _clear_retry_queue(_id)  # 이번엔 재조회 불필요했거나 해결됨 → 큐에서 제거

            if manage_note:
                alpha_prompt = f"""너는 지휘자(운영 관리자) 알파다. {STYLE}
관측: {base}
U3(요약): {u3[:600]}
U4 검증(요약): {u4[:400]}
{manage_note}

심층분석을 쓰지 말고 3줄 이내로: ①관측 사실 한 줄 ②'데이터 부족으로 보류합니다. 다음 회의에서 재검토합니다.'
③보류 사유 한 줄."""
            else:
                alpha_prompt = f"""너는 지휘자 알파다. {STYLE}
관측: {base}
U3(요약): {u3[:800]}
U4 검증(요약): {u4[:600]}
[판정 구속] {constraint}

10~15줄 배경설명: ①현재 판정 1줄 ②확인된 사실([출처:] 있는 것만) ③기각된 가설과 이유
④앞으로 확인할 것. '판단불가'로 끝내도 된다 — 억지 결론이 더 나쁘다."""
            alpha = b.ask("알파", alpha_prompt, topic=d["name"])
            out_ind.setdefault(_id, {})["detail"] = alpha
            out_ind[_id]["verdict"] = {"[확실]": "green", "[추정]": "yellow"}.get(verdict_kr, "red")
            if manage_note:
                out_ind[_id]["pending"] = True
        except Exception as e:
            print(f"  ⚠️ {_id} 토론 실패: {_diag(e)}")

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
    # transcript 필수화 (P5 #4): "콜은 썼는데 녹취 0줄"인 조용한 실패를 여기서 반드시 기록한다.
    meeting_ok = bool(b.transcript)
    if not meeting_ok:
        print(f"❌ 회의 실패로 기록 — 콜 {b.used}건을 썼지만 녹취(transcript)가 0줄입니다.")
    if runlog:
        runlog.log_meeting(meeting_ok, b.used, len(b.transcript),
                            note="" if meeting_ok else "transcript 비어있음")
    result = {"time": now.isoformat(timespec="minutes"), "alpha_brief": brief,
              "indicators": out_ind, "news_brief": news_brief,
              "calls_used": b.used, "transcript": b.transcript, "meeting_ok": meeting_ok}
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
    if bus:
        bus.observe_meeting(meeting_id, now, result)
    print(f"✅ 완료 — {b.used}콜 (한도 {MAX_CALLS})")


if __name__ == "__main__":
    main()
