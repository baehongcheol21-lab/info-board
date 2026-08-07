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

P11-3 재배치 (설계서_ACT_자율실행.md §5·§9-3):
  회의의 5단계를 brain.py의 결정 사이클이 부르는 phase 함수로 "재배치"했다. 프롬프트·STYLE·
  budget·방어로직은 **한 글자도 안 바꿨다** — 블록을 그대로 함수로 옮겼을 뿐이다. brain이
  phase 사이사이 실시간 관측·반사신경을 돌리고, 최종 result는 예전과 동일하게 finalize가 만든다.
  brain을 끄면(BRAIN_DISABLED=1) _run_sequential이 예전과 완전히 같은 순서로 돈다(§9-5 롤백).
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

try:  # P11-3 뇌(결정 사이클) — 없거나 BRAIN_DISABLED=1이면 레거시 순차 경로로 폴백
    import brain
except ImportError:
    brain = None

try:  # 기관 도서관(P11-0) — 잔여소진 라운드의 0콜 계산(상관·용어)에 쓴다
    from registry import get_registry as _registry
except ImportError:
    _registry = None

try:  # 예측→익일채점→프롬프트 자동교정 회로. 없어도 회의는 그대로 돈다.
    import forecast as _fc
except ImportError:
    _fc = None

try:  # 오늘의 테마 실험(사용자 실험 #1) — 없으면 실험만 건너뛴다
    import themes as _themes
except ImportError:
    _themes = None

try:  # 가상계좌 모의투자 실험(전부 시뮬레이션 — 실계좌 주문 코드는 없다)
    import universe as _univ
    import portfolio as _pf
except ImportError:
    _univ = _pf = None

# 알파가 마지막에 적는 두 줄의 형식. 형식을 못 지키면 그 회의는 주문 없이 넘어간다.
_re_pf_w = re.compile(r"\[비중\]\s*(.+)")
_re_pf_e = re.compile(r"\[평가예측\]\s*내일\s*=\s*([\d,]+)\s*"
                      r"확률\s*=\s*([01](?:\.\d+)?)\s*"
                      r"구간\s*=\s*([\d,]+)\s*~\s*([\d,]+)")


def _diag(e):
    """실패 원인을 한 줄로 못 잡을 때(예: 인코딩 문제) 다음 조사를 위해 traceback 마지막 줄을 남긴다."""
    tb = traceback.format_exc().strip().splitlines()
    return f"{e} | {tb[-1] if tb else ''}"

MAX_CALLS = 300   # 회의 1회당 상한 (P12 풀스로틀: 150→300, 하루 3회면 ~900콜/일)
TARGET_CALLS = int(MAX_CALLS * 0.7)  # 이 미만이면 잔여예산 소진 라운드 발동 (P12 #4)
DEEP_TOPICS = 8   # 심층토론 대상 수 (3→8, 2026-08-05 역할 고정 문제 해소)
MAX_CRITIQUE_ROUNDS = 1   # topic당 비판→교정 재라운드 상한 (무한 왕복 차단)
KST = datetime.timezone(datetime.timedelta(hours=9))

# ---- 배경설명 의무 구조 (P12 #2, 원장 #63) — "정보 나열"이 아니라 "맥락·의미"를 강제한다.
#      사용자 핵심 통증: "그래서 어쩌라고, 이전 자료지 정보가 아니야." → ④가 그 해답이다. ----
BRIEF_STRUCTURE = """[배경설명 의무구조 — '정보 나열'은 실격이다. 아래 5개를 빠짐없이, 특히 ④를 반드시 채워라]
① 무슨 일: 핵심 사실. 숫자엔 [출처:].
② 왜: 직접 촉발 원인과 그 배경.
③ 맥락: 이게 처음인가 반복인가 — 최근 흐름에서 어디쯤인지, 전에도 있었다면 그때와 무엇이 다른지.
④ 그래서 나에게: 이 독자(전력전자·전기기계 전공자)에게/시장에 구체적으로 무엇이 달라지나, 그래서 무엇을 지켜봐야 하나. 막연한 일반론·교과서 설명 금지 — 전공·실무와의 연결고리를 짚어라. (없으면 실격)
⑤ 한계: 모르는 것·불확실한 것은 '모른다/추정'으로 솔직히.
전문용어는 등장 즉시 괄호로 한 줄 해설. 채움말·과장 금지."""

# ---- 문체 규칙 (체크리스트 B — 사용자가 직접 지적한 것들) ----
STYLE = """[문체 규칙 — 어기면 폐기된다]
- 짧은 단문, '-습니다'체, 결론 먼저.
- 비유 금지. 꼭 필요하면 성인 신문 수준 1개만. ("과자가 쏟아진", "헐렁한 옷" 같은 유치한 비유 금지)
- 낱말 뜻풀이 금지. 전문용어(예: 계통한계가격, 출력제어)만 한 줄 풀이 허용.
  ("환율은 외국 돈과 바꾸는 비율입니다" 같은 뻔한 설명 = 즉시 실격)
- 채움말 금지. ("~에 힘쓰고 있습니다", "~로 미래를 밝힙니다" 같은 알맹이 없는 문장 금지)
- [출처]와 (추정)은 **검증 가능한 사실 주장**(숫자·발표·사건)에만 적용한다:
  · 출처를 댈 수 있으면 [출처: 한국거래소] 처럼 **구체적으로**. 그러면 (추정)을 쓰지 마라.
  · 출처를 못 대는 사실 주장에만 문장 끝에 (추정).
  · **해석·전망·판단은 애초에 출처 대상이 아니다** — (추정)도 [출처]도 붙이지 마라.
    해석임이 문장 자체로 드러나게 써라(예: "…로 해석됩니다", "…가 원인으로 보입니다").
- (추정) 금지 3종 — 어기면 실격:
  ① [출처: …(추정)] 처럼 출처와 추정을 함께 쓰기. 출처를 댔으면 추정이 아니다.
  ② "…할 수 있습니다. (추정)" 같은 이중 헤지. 이미 불확실을 말한 문장에 또 붙이지 마라.
  ③ 문단마다 습관적으로 붙이기. 모르면 "모른다"고 한 번만 분명히 써라.
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


def _fix(who):
    """그 요원의 최근 성적표에서 나온 교정 지시. 없으면 빈 문자열(프롬프트 무변화).
    이게 "다음 명령 때 수정된 프롬프트를 스스로 세팅한다"의 실물 통로다."""
    if not _fc:
        return ""
    try:
        return _fc.correction_block(who)
    except Exception:
        return ""


def _fcfmt():
    """예측 한 줄을 요구하는 형식 안내. **추가 콜이 0이다** — 이미 부르는 프롬프트에 얹는다."""
    return _fc.FORMAT_HINT if _fc else ""


def build_global_state(snap, now):
    """전역 상태 버스 (체크리스트 D6) — 모든 요원이 공유하는 2줄 맥락"""
    movers = sorted((d for d in snap.values() if d["pct"] is not None),
                    key=lambda x: -abs(x["pct"]))[:3]
    mv = ", ".join(f"{d['name']} {d['pct']:+}%" for d in movers)
    kr_open = now.weekday() < 5 and 9 <= now.hour < 16
    session = (f"지금 {now:%m/%d %H시} KST. 한국장 {'열림' if kr_open else '마감'}. "
               "미국 지수(SOX·나스닥 등)는 미국 어젯밤 종가라 한국 오늘장과 시점이 다르다.")
    return f"[전역 상태] {session}\n[오늘 큰 움직임] {mv or '없음'}"


class Meeting:
    """회의 1건이 phase들 사이로 넘겨 주고받는 공유 상태(구 discuss.main()의 지역변수들).
    phase 함수는 이 컨텍스트를 읽고 쓴다 — 순서·상한은 brain이 통제한다."""

    def __init__(self, now, prev):
        self.now = now
        self.meeting_id = f"{now:%Y%m%dT%H%M}"
        self.prev_ind = prev.get("indicators", {})
        self.prev_brief = prev.get("alpha_brief", "")
        self.snap = {}
        self.gstate = ""
        self.memory = ""
        self.out_ind = {}
        self.news_brief = {}
        self.brief = ""
        # R04 검산(brain)이 스냅샷과 어긋난 발언을 찾으면 여기에 넣는다 → 총평 프롬프트로 전달
        # (rules.yaml R04의 `on_mismatch: notify_alpha`의 실제 통로). 0콜이다.
        self.alerts = []


# ============================================================================
# phase 함수들 — 구 discuss.main()의 [1/5]~[5/5] 블록을 한 글자도 안 바꾸고 옮긴 것.
# 각 함수는 (budget b, Meeting m)을 받아 m을 갱신한다. brain이 이 순서대로 부른다.
# ============================================================================

def phase_perceive(b, m):
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
    m.snap = snap
    m.gstate = build_global_state(snap, m.now)
    m.memory = tools.get_conclusions("", n=2)  # 기억 은행 (D10)


def phase_indicators(b, m):
    snap, gstate, prev_ind = m.snap, m.gstate, m.prev_ind
    # ---- 2. U1 지표요약 (변동 <0.5%는 직전 요약 재사용 = 0콜) ----
    print("[2/5] U1 지표요약")
    out_ind = m.out_ind
    for _id, d in snap.items():
        if (d["pct"] is not None and abs(d["pct"]) < 0.2   # P12: 0.5→0.2 (거의 안 움직인 것만 재사용)
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


def phase_news(b, m):
    gstate, prev_brief = m.gstate, m.prev_brief
    # ---- 3. 뉴스 파이프라인 (다중 소스: 전기신문 + 인베스팅닷컴) ----
    print("[3/5] 뉴스 파이프라인 (다중소스 크롤링→U2 분석→B2 분류→맥락)")
    news_brief = {}
    try:
        # 전 소스에서 헤드라인 수집 후 제목 기준 중복 제거
        raw = tools.get_headlines(per_source=20)   # 12→20: 더 넓은 풀에서 고른다
        seen, heads = set(), []
        for h in raw:
            key = h["title"][:20]
            if h["title"] and key not in seen:
                seen.add(key)
                heads.append(h)
        MAX_ANALYZE = 24  # 회당 분석 상한 (1000콜 예산 안에서 여러 소스 커버)
        # 관련도 순으로 줄을 세운다(0콜). 감사 ★1: U2 발언의 14.2%가 스스로 "일상 기사"라고
        # 판정했는데, 원인은 '점수 상위 24개'가 아니라 **수집 순서대로 앞 24개**를 분석한 것이었다.
        # ⚠️ 버리지 않고 **순서만** 바꾼다. 과거 600건 대조 결과 제목 휴리스틱으로 하드 드롭하면
        # 일반 기사의 43%가 오탈락했고(하위컷), 무관 키워드만 써도 "여행 수요 호조에 주가 급등"
        # 같은 진짜 시장 기사가 걸렸다. 랭킹만으로도 상위 슬롯의 일상기사 비율이 15.7%→8.3%로 준다.
        if _registry:
            try:
                heads = _registry().run("news_rank", items=heads)
            except Exception as e:
                print(f"  ⚠️ 헤드라인 랭킹 건너뜀(수집 순서 유지): {str(e)[:60]}")
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
        top = sorted([a for a in articles if _score(a) > 0], key=_score, reverse=True)[:8]  # P12: 3→8건 심층
        for a in top:
            try:
                body = tools.get_article(a["link"])[:2500]
            except Exception:
                body = a.get("analysis", "")
            deep = b.ask_heavy("알파", f"""너는 지휘자 알파다. {STYLE}
{READER}

기사 제목: {a['title']}
기사 본문/분석: {body}

이 기사의 '심층 배경'을 초심자도 흐름을 이해하도록 설명하라.
{BRIEF_STRUCTURE}
각 항목은 "① 무슨 일: …" 형식으로 2~4문장씩.""", topic=a["title"][:30])
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
    m.news_brief = news_brief


def phase_deepdive(b, m):
    snap, gstate, memory, now, out_ind = m.snap, m.gstate, m.memory, m.now, m.out_ind
    # ---- 4. 이상신호 심층토론 (도구 사용 + 방어로직) ----
    # 대상 수를 3으로 하드코딩하던 것을 DEEP_TOPICS(8)로 넓혔다. 2026-08-05 감사에서 최근
    # 3회의의 역할 배분이 **정확히 동일**(U1:26 U2:24 알파:25 U3:6 U4:3 B2:1)한 게 드러났는데,
    # 그날 이상신호가 몇 개든 심층은 무조건 3건이었던 게 원인이다. 예산도 남아돌던 터라
    # (140/300) 그 여유를 여기, 즉 '비판과 근거 수집'에 붓는 게 맞다.
    anomalies = sorted(
        [(_id, d) for _id, d in snap.items() if d["pct"] is not None and abs(d["pct"]) >= 2],
        key=lambda x: -abs(x[1]["pct"]))[:DEEP_TOPICS]
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
근거를 못 찾으면 "원인 후보 없음"이라고 써라.{_fix("U3")}{_fcfmt()}""", topic=d["name"])
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
마지막 줄에 종합판정: [확실] / [추정] / [원인불명] / [판단불가] 중 하나.{_fix("U4")}{_fcfmt()}""", topic=d["name"])
            def _parse_verdict(txt):
                return next((v for v in ("[확실]", "[추정]", "[원인불명]", "[판단불가]")
                             if v in txt.split("\n")[-1] or v in txt[-120:]), "[추정]")

            # 판정 구속 (코드 레벨): U4 판정을 파싱해서 알파에게 강제
            verdict_kr = _parse_verdict(u4)
            verdict_first = verdict_kr

            # ---- 비판→교정 루프 (2026-08-05, 원장 #64 "비판→교정이 실제로 작동") ----
            # 기존 구조에서 U4는 topic당 딱 한 번 채점하고 끝이었다(감사: U4가 전체 발언의
            # 3.3%). 비판이 형식적으로만 존재하고 **교정으로 이어지지 않았다**.
            # 판정이 [확실]이 아니면 = 근거가 부족하다는 뜻이므로, U4가 지적한 결함을 그대로
            # U3에게 돌려 보강 수집을 시키고 U4가 **다시 판정**한다. 판정 전/후를 모두 남겨
            # 회고(§7-1 교정성과)가 "교정이 실제로 판정을 개선했나"를 셀 수 있게 한다.
            # 안전장치: topic당 최대 MAX_CRITIQUE_ROUNDS회 + 예산 여유가 있을 때만.
            rounds = 0
            while (verdict_kr != "[확실]" and rounds < MAX_CRITIQUE_ROUNDS
                   and b.used < TARGET_CALLS):
                rounds += 1
                try:
                    u3b = tools.run_tool_loop(b, "U3", f"""너는 원인분석 요원 U3다. {STYLE}
{gstate}
관측: {base}

[재조사 지시] 비판 요원 U4가 네 1차 분석을 다음과 같이 판정했다: {verdict_kr}
U4의 지적: {u4[:900]}

U4가 부족하다고 한 바로 그 지점을 메워라. 같은 검색을 반복하지 말고 **다른 각도**로 파라
(다른 검색어·다른 기간·다른 도구). 검색어에는 "{d['name']}"를 포함하라.
새로 찾은 것이 없으면 "추가 근거 없음"이라고 분명히 써라 — 없는 걸 지어내는 것이 최악이다.""",
                                              topic=f"{d['name']} 재조사")
                    u4b = b.ask("U4", f"""너는 비판 요원 U4다. {STYLE}
관측: {base}
[1차 판정] {verdict_kr}
[1차 분석] {u3[:700]}
[재조사 결과] {u3b[:1200]}
[수급 데이터 7일]: {vol[:600]}

재조사로 근거가 실제로 보강됐는지 판단하라. 보강됐으면 판정을 올리고, 그대로면 유지하라.
근거 없이 판정을 올리는 것은 실격이다.
마지막 줄에 종합판정: [확실] / [추정] / [원인불명] / [판단불가] 중 하나.""",
                                 topic=f"{d['name']} 재판정")
                    u3 = f"{u3}\n\n[재조사] {u3b}"
                    u4 = f"{u4}\n\n[재판정] {u4b}"
                    verdict_kr = _parse_verdict(u4b)
                except Exception as e:
                    print(f"  ⚠️ {_id} 교정 라운드 중단: {_diag(e)}")
                    break
            if rounds:
                moved = "개선" if verdict_first != verdict_kr else "유지"
                print(f"  🔁 {d['name']} 비판→교정 {rounds}회: {verdict_first} → {verdict_kr} ({moved})")
            # P11-4: 판정을 verdict 이벤트로 스트림에 남긴다. 이게 있어야 R03(데이터부족→재조회)·
            # R10(확실→모의투자 신호)이 죽은 룰이 아니게 되고, 익일 현실대조(reality_check.py)가
            # "어제 뭐라고 판정했나"를 기계적으로 읽을 수 있다(§7-2).
            if bus:
                bus.emit("verdict", "U4", topic=d["name"],
                         payload={"verdict": verdict_kr, "id": _id, "pct": d.get("pct"),
                                  "value": d.get("value"), "text": u4[-800:],
                                  # 교정 성과 측정용(§7-1): 재라운드가 판정을 실제로 바꿨나
                                  "verdict_first": verdict_first, "critique_rounds": rounds,
                                  "improved": bool(rounds) and verdict_first != verdict_kr})
            # ---- 예측 채집 (추가 콜 0) ----
            # U3·U4는 이미 부른 응답이다. 그 끝에 붙인 [예측] 한 줄만 뽑아 기록한다.
            # 이게 있어야 내일 "맞았나"를 물을 대상이 생긴다 — 없으면 §7-2는 채점할 게 없다.
            if _fc:
                for who, txt in (("U3", u3), ("U4", u4)):
                    try:
                        pred = _fc.parse(txt)
                        if pred:
                            _fc.record(m.meeting_id, who, _id, pred,
                                       emit_fn=(bus.emit if bus else None))
                    except Exception as e:
                        print(f"  ⚠️ 예측 기록 실패({who}/{_id}): {type(e).__name__}: {e}")
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

{BRIEF_STRUCTURE}
'판단불가'로 끝내도 된다 — 억지 결론이 더 나쁘다. 단 ④(그래서 나에게)는 판정이 불확실해도
'지금은 이런 상태이니 무엇을 지켜보라'로 반드시 채워라. 억지 원인 단정은 금지."""
            alpha = b.ask("알파", alpha_prompt, topic=d["name"])
            out_ind.setdefault(_id, {})["detail"] = alpha
            out_ind[_id]["verdict"] = {"[확실]": "green", "[추정]": "yellow"}.get(verdict_kr, "red")
            if manage_note:
                out_ind[_id]["pending"] = True
        except Exception as e:
            print(f"  ⚠️ {_id} 토론 실패: {_diag(e)}")


def phase_brief(b, m):
    snap, news_brief, gstate, prev_brief = m.snap, m.news_brief, m.gstate, m.prev_brief
    # ---- 5. 알파 총평 ----
    print("[5/5] 알파 총평")
    brief = ""
    try:
        lines = [f"- {d['name']}: {d['value']} {d['unit']} ({d['pct']}%)" for d in snap.values()]
        # 직전 감시 항목이 이미 달성됐는지 0콜로 판정해 알려준다(같은 지시 복사 방지).
        follow = ""
        if _fc:
            try:
                follow = _fc.watch_followup(prev_brief, snap)
            except Exception:
                follow = ""
        # R04 검산이 잡아낸 불일치를 총평 앞에 붙인다(on_mismatch: notify_alpha). 없으면 빈 문자열.
        alerts = getattr(m, "alerts", None) or []
        warn = ("\n⚠️ 검산 경고 — 아래는 오늘 회의 발언 중 **실제 지표와 어긋난 것**이다. "
                "총평에서 잘못된 값을 되풀이하지 말고 위 '지표 전체'의 숫자를 따르라:\n"
                + "\n".join(f"  · {a}" for a in alerts) + "\n") if alerts else ""
        brief = b.ask("알파", f"""너는 지휘자 알파다. {STYLE}
{gstate}
지표 전체:
{chr(10).join(lines)}
{warn}{follow}
뉴스 맥락: {news_brief.get('context', '없음')[:400]}
직전 결론: {prev_brief[:400] or '첫 토론'}

총평 4~6줄. 첫 줄은 '오늘은 조용합니다' 또는 '오늘은 O건이 특이합니다'.
직전 대비 흐름 변화가 있으면 짚어라.
**마지막 줄은 반드시 '오늘 지켜볼 것: …'** 으로 시작해, 이 독자(전력전자·전기기계 전공자)가
내일까지 실제로 주시해야 할 딱 한 가지를 구체적으로 지목하라. '시장을 지켜보자' 같은 막연한
말은 실격 — 어떤 지표·이벤트를, 어떤 값이 되면 무슨 의미인지까지. 채움말 금지.""", topic="오늘의 총평")
    except Exception:
        brief = ""
    m.brief = brief


def _condense_series(raw, keep=45):
    """긴 시세 문자열을 전 구간 균등 샘플로 압축한다.
    ⚠️ 그냥 앞에서 자르면(raw[:1200]) **가장 오래된 날짜만** 남아 "지금이 긴 흐름의 어디쯤인가"를
    판단할 수 없다(실측으로 발견). 처음·중간·끝이 고르게 들어가야 흐름이 보인다."""
    lines = [l for l in (raw or "").splitlines() if l.strip()]
    if len(lines) <= keep:
        return "\n".join(lines)
    step = len(lines) / float(keep)
    picked = [lines[min(len(lines) - 1, int(i * step))] for i in range(keep)]
    if picked[-1] != lines[-1]:
        picked[-1] = lines[-1]        # 최신값은 반드시 포함
    return "\n".join(picked) + f"\n(전체 {len(lines)}일 중 {keep}개 균등 샘플, 마지막은 최신)"


def _corr_pairs(top_n=20, min_abs=0.45):
    """지표 간 상관관계 상위 쌍을 계산한다 — **0콜**(야후 시세 + 순수계산 기관만 사용).
    원장 #6 "요소 연관성 모델(유가↔전기값)"의 실물이다. 6개월 종가로 pearson을 돌리고,
    lag_corr로 '어느 쪽이 며칠 앞서는지'까지 뽑아 해설의 근거로 넘긴다."""
    if not _registry:
        return []
    reg = _registry()
    closes = {}
    for _id, name, sym, unit, dec in INDICATORS:
        try:
            _, _, cl = fetch_yahoo(sym, rng="6mo")
            if cl and len(cl) >= 40:
                closes[_id] = (name, cl)
        except Exception:
            continue
    ids = list(closes)
    pairs = []
    for i in range(len(ids)):
        for j in range(i + 1, len(ids)):
            a, c = ids[i], ids[j]
            xa, xc = closes[a][1], closes[c][1]
            n = min(len(xa), len(xc))
            if n < 40:
                continue
            try:
                r = reg.run("pearson", xs=xa[-n:], ys=xc[-n:])
            except Exception:
                continue
            if r is None or abs(r) < min_abs:
                continue
            lag = {}
            try:
                lag = reg.run("lag_corr", xs=xa[-n:], ys=xc[-n:], max_lag=5) or {}
            except Exception:
                pass
            pairs.append({"a": closes[a][0], "b": closes[c][0], "r": round(r, 3), "n": n,
                          "lag": lag.get("best_lag"), "lag_r": lag.get("best_r")})
    pairs.sort(key=lambda p: -abs(p["r"]))
    return pairs[:top_n]


def _new_terms(m, limit=25):
    """오늘 브리핑에 나온 전문용어 중 **사전에 아직 없는 것**만 추린다(0콜).
    이미 있는 용어는 0콜로 재사용되므로 회를 거듭할수록 이 일감은 자연히 줄어든다."""
    if not _registry:
        return []
    reg = _registry()
    text = " ".join([m.brief or ""] +
                    [(v.get("detail") or "") for v in (m.out_ind or {}).values()] +
                    [(a.get("detail") or "") for a in (m.news_brief or {}).get("articles", [])])
    if not text.strip():
        return []
    try:
        terms = reg.run("term_extract", text=text[:12000], max_terms=60) or []
    except Exception:
        return []
    out = []
    for t in terms:
        try:
            if reg.run("glossary_store", action="get", term=t).get("definition"):
                continue          # 이미 있음 → 0콜 재사용
        except Exception:
            continue
        out.append(t)
        if len(out) >= limit:
            break
    return out


def phase_spend_remaining(b, m):
    """잔여예산 소진 라운드 (P12 #4). 목표(TARGET_CALLS)에 못 미치면 남는 예산으로 **가치 있는
    일감**을 순서대로 처리한다. "남긴 예산 = 버린 예산"이지만, **채움말로 콜을 채우는 것은 더
    나쁘다** — 그래서 일감이 떨어지면 목표에 못 닿아도 그냥 멈춘다.

    2026-08-05 감사에서 이 라운드가 매번 정확히 86콜에서 멈추는 게 드러났다. 원인은 일감이
    '지표별 배경 리포트' 한 종류뿐이라 지표 12개를 쓰고 고갈된 것. 그래서 일감을 넷으로 넓혔다:

      1) 교차 연결분석 — 지표 간 상관·선행관계 해설. **원장 #6의 오랜 숙원**이자 이 시스템에만
         있는 정보(남이 안 해주는 것)라 가치가 가장 높다. 근거는 0콜로 계산한 실제 r값.
      2) 용어사전 축적 — 처음 나온 용어만 1콜로 풀어 영구 저장(재등장 시 0콜). 사용자의
         "읽어도 이해가 안 된다"에 직접 대응하며, 쌓일수록 일감이 줄어드는 자기소멸형.
      3) 지표 장기흐름 — 오늘 숫자가 2년 흐름의 어디쯤인지. "이전 자료지 정보가 아니다"의 해답.
      4) 업종 배경 리포트 — 기존 일감(유지).
    """
    if b.used >= TARGET_CALLS:
        print(f"[+/6] 잔여소진 불필요 — 이미 {b.used}콜 ≥ 목표 {TARGET_CALLS}")
        return
    print(f"[+/6] 잔여예산 소진 라운드 ({b.used}/{TARGET_CALLS}콜 사용)")
    movers = sorted((d for d in m.snap.values() if d.get("pct") is not None),
                    key=lambda x: -abs(x["pct"]))
    reports, links, terms_done, longviews = [], [], [], []

    def budget_left():
        return b.used < TARGET_CALLS

    # ---- 1) 교차 연결분석 (원장 #6) ----
    try:
        for p in _corr_pairs():
            if not budget_left():
                break
            lag_txt = ""
            if p.get("lag"):
                lead = p["a"] if p["lag"] > 0 else p["b"]
                lag_txt = f" (시차상관: {lead}가 약 {abs(p['lag'])}일 선행, r={p.get('lag_r')})"
            txt = b.ask("알파", f"""너는 지휘자 알파다. {STYLE}
{READER}

[0콜로 계산된 실측 상관] 최근 6개월 종가 {p['n']}개 기준
  {p['a']} ↔ {p['b']} : 상관계수 r = {p['r']}{lag_txt}

이 두 지표가 왜 이렇게 움직이는지 설명하라. 상관은 인과가 아니다 — 공통 원인이 있는지,
한쪽이 다른 쪽을 실제로 끌어당기는지, 아니면 우연인지 구분해서 말하라. 근거 없으면 (추정).
{BRIEF_STRUCTURE}""", topic=f"{p['a']}↔{p['b']} 연관")
            links.append({"pair": f"{p['a']}↔{p['b']}", "r": p["r"], "lag": p.get("lag"),
                          "analysis": txt})
    except Exception as e:
        print(f"  ⚠️ 교차 연결분석 건너뜀: {_diag(e)}")

    # ---- 2) 용어사전 축적 (P12 #3) ----
    try:
        reg = _registry() if _registry else None
        for t in (_new_terms(m) if reg else []):
            if not budget_left():
                break
            d = b.ask("U1", f"""용어 '{t}'을(를) 이 브리핑 독자에게 한 줄로 설명하라.
{READER}
- 딱 한 문장. 뻔한 사전적 정의 말고 '이 맥락에서 왜 중요한지'가 드러나게.
- 이 용어를 모르는 사람이 읽고 바로 이해되게. 채움말 금지.""", topic=f"용어:{t}")
            try:
                reg.run("glossary_store", action="set", term=t, definition=d.strip())
                terms_done.append(t)
            except Exception:
                pass
    except Exception as e:
        print(f"  ⚠️ 용어사전 건너뜀: {_diag(e)}")

    # ---- 3) 지표 장기흐름 ----
    try:
        for d in movers:
            if not budget_left():
                break
            try:
                raw = tools.get_history(next((i for i, v in m.snap.items() if v is d), ""), days=400)
                hist = _condense_series(raw)
            except Exception:
                hist = "(장기 시세 조회 실패)"
            txt = b.ask("알파", f"""너는 지휘자 알파다. {STYLE}
{READER}
지표: {d['name']} = {d['value']} {d['unit']} (전일比 {d.get('pct')}%)
[장기 시세(최대 400일)]: {hist}

오늘 숫자가 **긴 흐름의 어디쯤인지** 위치를 잡아줘라. 고점/저점 대비 어디인가, 지금 구간이
과거 어느 국면과 닮았고 무엇이 다른가. 숫자로 말하고, 모르면 (추정).
{BRIEF_STRUCTURE}""", topic=f"{d['name']} 장기흐름")
            longviews.append({"indicator": d["name"], "report": txt})
    except Exception as e:
        print(f"  ⚠️ 장기흐름 건너뜀: {_diag(e)}")

    # ---- 4) 업종 배경 리포트 (기존 일감) ----
    for d in movers:
        if not budget_left():
            break
        try:
            rep = b.ask("알파", f"""너는 지휘자 알파다. {STYLE}
{READER}
지표: {d['name']} = {d['value']} {d['unit']} (전일比 {d.get('pct')}%)

오늘 숫자 하나가 아니라, 이 지표가 '최근 어떤 큰 흐름 위에 있는지'를 업종 배경 리포트로 써라.
{BRIEF_STRUCTURE}""", topic=f"{d['name']} 배경")
            reports.append({"indicator": d["name"], "report": rep})
        except Exception as e:
            print(f"  ⚠️ {d['name']} 배경리포트 실패: {_diag(e)}")
            break  # 예산 소진/오류면 라운드 종료

    if isinstance(m.news_brief, dict):
        if reports:
            m.news_brief["deep_reports"] = reports
        if links:
            m.news_brief["links"] = links          # 교차 연결분석 (원장 #6)
        if longviews:
            m.news_brief["longviews"] = longviews
    print(f"[+/6] 잔여소진 종료 — 총 {b.used}콜 (목표 {TARGET_CALLS}) | "
          f"연관 {len(links)} · 용어 {len(terms_done)} · 장기 {len(longviews)} · 배경 {len(reports)}")
    if b.used < TARGET_CALLS:
        print(f"       (일감 소진으로 목표 미달 — 채움말로 콜을 채우지 않는다)")


def finalize(b, m):
    """구 discuss.main()의 저장 블록. result를 만들고 파일에 쓰고 돌려준다.
    (bus 이벤트 기록은 경로별로 밖에서 처리 — brain은 실시간, 레거시는 observe_meeting.)"""
    now, out_ind, news_brief = m.now, m.out_ind, m.news_brief
    # ---- 저장 ----
    # transcript 필수화 (P5 #4): "콜은 썼는데 녹취 0줄"인 조용한 실패를 여기서 반드시 기록한다.
    meeting_ok = bool(b.transcript)
    if not meeting_ok:
        print(f"❌ 회의 실패로 기록 — 콜 {b.used}건을 썼지만 녹취(transcript)가 0줄입니다.")
    if runlog:
        runlog.log_meeting(meeting_ok, b.used, len(b.transcript),
                            note="" if meeting_ok else "transcript 비어있음")
    result = {"time": now.isoformat(timespec="minutes"), "alpha_brief": m.brief,
              "indicators": out_ind, "news_brief": news_brief,
              "calls_used": b.used, "transcript": b.transcript, "meeting_ok": meeting_ok}
    # ⚠️ 실패한 회의는 **discussions.json을 덮지 않는다**(2026-08-05 실측으로 잡은 실사고).
    # 예산 소진 상태에서 14:27 회의가 콜 0·녹취 0으로 끝났는데도 결과를 그대로 써서,
    # 141콜짜리 13:43 브리핑을 지워 버렸다. 공개 페이지가 "오늘은 심층토론 대상이 없습니다"라는
    # 폴백 문구로 퇴화한 원인이 이것이다 — 사용자가 말한 "이전 자료지 정보가 아니야"의 실체.
    # 빈 결과보다 **직전의 진짜 브리핑을 남기는 편이 언제나 낫다**(시각은 그때 것으로 표시되므로
    # 낡았다는 사실도 화면에 정직하게 드러난다). 기록용 개별 파일은 그대로 남겨 감사 가능하게 둔다.
    if meeting_ok:
        with open("discussions.json", "w", encoding="utf-8") as f:
            json.dump(result, f, ensure_ascii=False, indent=1)
    else:
        print("  🛡️ discussions.json 보존 — 실패한 회의로 직전 브리핑을 덮어쓰지 않는다.")
    os.makedirs("discussions", exist_ok=True)
    with open(f"discussions/{now:%Y-%m-%dT%H%M}.json", "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=1)
    os.makedirs("exports", exist_ok=True)
    with open(f"exports/{now:%Y-%m-%d}.csv", "w", encoding="utf-8-sig", newline="") as f:
        w = csv.writer(f)
        w.writerow(["지표", "값", "단위", "전일比%", "요약"])
        for _id, d in m.snap.items():
            w.writerow([d["name"], d["value"], d["unit"], d["pct"],
                        out_ind.get(_id, {}).get("summary", "").replace("\n", " ")])
    return result


def phase_theme(b, m):
    """오늘의 테마를 놓고 요원 전원이 토론하고, **기간별 예측**을 낸다. (사용자 실험)

    설계 의도
    ---------
    "틀려도 되니까 매일 테마를 하나 정하고, AI들이 토론해서 예측하고, 다음 날 파이썬으로
    맞았는지 채점하고, 그 가중치를 다시 프롬프트에 먹여라. 한 달 돌리면 나아지는지 보자."

    그래서 이 phase는 **일부러 단정을 요구한다.** 안전하게 0.5만 부르면 실험이 죽는다.
    대신 틀린 것은 전부 기록되고(forecasts.jsonl), 편향은 다음 회의 프롬프트로 돌아온다.

    콜 예산: 4콜(강세 → 약세 → 반박 → 종합). 회의 1회 200콜 규모에서 무시할 만한 비용이다.
    실패해도 브리핑 본류에는 영향이 없다 — 전부 try/except로 감싼다.
    """
    if not (_fc and _themes):
        return
    snap, gstate = m.snap, m.gstate
    if not snap:
        return
    print("[6/6] 테마 실험 — 오늘의 테마 토론·예측")
    try:
        theme = _themes.pick(snap)
        m.theme = theme
        levels = _themes.snapshot_levels(theme, snap)
        if not levels:
            print("  ⚠️ 테마 바스켓 가격이 비어 채점 불가 — 건너뜀")
            return
        board = _themes.brief(theme, snap)
        hist = _fc.theme_block(theme["id"])
    except Exception as e:
        print(f"  ⚠️ 테마 준비 실패: {type(e).__name__}: {e}")
        return

    b.transcript.append({"role": "🧰도구", "topic": theme["name"],
                         "text": "오늘의 테마 선정: " + theme["name"] + "\n" + board})

    common = STYLE + "\n" + gstate + "\n" + board + hist
    fmt = _fc.THEME_FORMAT
    bull = bear = rebut = final = ""

    try:
        bull = b.ask("U3", f"""너는 원인분석 요원 U3다. {common}

이 테마의 **강세 논거**를 편들어 세워라. 억지로 균형 잡지 마라 — 반대편은 U4가 맡는다.
근거는 24시간 내 사건·수급·가격 데이터로만. 없으면 "강한 근거 없음"이라고 분명히 써라.
3줄 이내.{fmt}{_fix("U3")}""", topic=theme["name"])
    except Exception as e:
        print(f"  ⚠️ U3 강세: {_diag(e)}")

    try:
        bear = b.ask("U4", f"""너는 비판 요원 U4다. {common}

U3의 강세 논거: {bull[:900]}

이 테마의 **약세 논거**와 U3 논거의 허점을 짚어라. 근거 없는 낙관은 깎아라.
3줄 이내.{fmt}{_fix("U4")}""", topic=theme["name"])
    except Exception as e:
        print(f"  ⚠️ U4 약세: {_diag(e)}")

    try:
        rebut = b.ask("U3", f"""너는 U3다. {STYLE}
U4의 반론: {bear[:900]}

반론 중 **타당한 것은 인정하고**, 틀린 것만 반박하라. 2줄 이내. 새 근거가 없으면
"반박 근거 없음"이라고 써라. 그 뒤에 예측을 갱신해 다시 적어라.{fmt}""",
                      topic=theme["name"])
    except Exception as e:
        print(f"  ⚠️ U3 반박: {_diag(e)}")

    # 알파 종합 전에 요원 신뢰도 가중 합의를 0콜로 계산해 보여준다.
    # 알파가 '누구 말이 그동안 맞았는지'를 모른 채 저울질하면 실험의 학습이 알파를 안 거친다.
    ens_note = ""
    try:
        from organs.forecast_score_v1 import ensemble as _ens
        preds = []
        for who, txt in (("U3", rebut or bull), ("U4", bear)):
            for pr in _fc.parse_multi(txt):
                preds.append({"who": who, "dir": pr["dir"], "p": pr["p"], "hz": pr["horizon_kr"]})
        w = _fc.weights()
        rows = []
        for hz in ("단기", "중기", "장기"):
            sub = [x for x in preds if x["hz"] == hz]
            e = _ens(sub, w) if sub else None
            if e:
                rows.append(f"{hz}: {'상승' if e['dir'] > 0 else '하락'} p={e['p']} "
                            f"(요원 일치도 {e['agree']})")
        if rows:
            ens_note = ("\n[요원 신뢰도 가중 합의 — 0콜 계산] " + " / ".join(rows)
                        + "\n이건 참고값이다. 다르게 보면 다르게 적되 이유를 대라.")
    except Exception as e:
        print(f"  ⚠️ 앙상블 계산 실패: {type(e).__name__}: {e}")

    try:
        final = b.ask("알파", f"""너는 지휘자 알파다. {common}

강세(U3): {(rebut or bull)[:700]}
약세(U4): {bear[:700]}{ens_note}

양쪽을 저울질해 **네 판단**을 3줄로 내라. 어느 쪽 논거가 왜 더 무거운지 명시하라.
"둘 다 일리 있다"는 실격 — 실험이니 한쪽으로 기울여라.{fmt}{_fix("알파")}""",
                      topic=theme["name"])
    except Exception as e:
        print(f"  ⚠️ 알파 종합: {_diag(e)}")

    saved = 0
    for who, txt in (("U3", rebut or bull), ("U4", bear), ("알파", final)):
        try:
            prs = _fc.parse_multi(txt)
            if prs:
                _fc.record_theme(m.meeting_id, who, theme, prs, levels,
                                 emit_fn=(bus.emit if bus else None))
                saved += len(prs)
        except Exception as e:
            print(f"  ⚠️ 예측 기록 실패({who}): {type(e).__name__}: {e}")
    print(f"  🧪 {theme['name']} — 예측 {saved}건 저장(요원×기간)")
    m.theme_forecasts = saved


def _pf_parse_weights(text):
    """`[비중] kepco=15 lselectric=15 hynix=20 nvda=20 ceg=15 xle=5 현금=10` → {id: 0.15, ...}"""
    m = _re_pf_w.search(text or "")
    if not m:
        return None
    known = set(_univ.BY_ID) if _univ else set()
    out = {}
    for tok in re.finditer(r"([A-Za-z_]+)\s*=\s*(\d+(?:\.\d+)?)", m.group(1)):
        k, v = tok.group(1).lower(), float(tok.group(2))
        if k in ("cash", "현금"):
            continue
        if known and k not in known:
            continue          # 모르는 종목 id는 여기서 버린다 — 오타가 주문으로 흘러가지 않게
        out[k] = v / 100.0
    return out or None


def _pf_parse_equity(text):
    """`[평가예측] 내일=50,320,000 확률=0.6 구간=49,500,000~51,200,000`"""
    m = _re_pf_e.search(text or "")
    if not m:
        return None
    f = lambda s: float(s.replace(",", ""))
    lo, hi = f(m.group(3)), f(m.group(4))
    if lo > hi:
        lo, hi = hi, lo
    return {"equity": f(m.group(1)), "p": min(max(float(m.group(2)), 0.0), 1.0),
            "lo": lo, "hi": hi}


def phase_portfolio(b, m):
    """가상계좌 5천만원 모의투자 — 6종목 전부 토론하고 목표비중·내일 평가액을 정한다.

    ⚠️ 전부 시뮬레이션이다. 실계좌 주문 코드는 없다.

    사용자 실험: "6종목으로 6개월 굴려보고, 내일 얼마가 될지 스스로 정하게 해라."
    그래서 이 phase의 산출물은 두 개다:
      ① 6종목 목표비중 → 다음 거래일 종가로 리밸런싱(수수료·세금 반영)
      ② **내일 계좌 평가액 숫자** → 다음 날 실제와 대조. 이게 가장 반증 가능한 예측이다.

    콜: 종목당 2콜(강세·약세) + 알파 종합 1콜 = 13콜. 회의 200콜 규모에서 감당된다.
    """
    if not (_univ and _pf):
        return
    print("[6/6] 가상계좌 모의투자 — 6종목 토론")
    try:
        prices, fx = _univ.fetch_prices()
        if not prices or not fx:
            print("  ⚠️ 시세/환율을 못 받아 이번 회의는 건너뜁니다(가짜 값을 만들지 않는다)")
            return
        pf = _pf.load()
        m.prices, m.fx = prices, fx
        rows, tot = _pf.positions(pf, {k: v["px"] for k, v in prices.items()}, fx)
        board = _univ.brief(prices, fx, pf.get("holdings"))
    except Exception as e:
        print(f"  ⚠️ 계좌 준비 실패: {type(e).__name__}: {e}")
        return

    held = ("\n[현재 계좌] 평가액 {:,.0f}원 (원금 {:,.0f}원 대비 {:+.2f}%) · 현금 {:,.0f}원\n".format(
        tot, _univ.INITIAL_CAPITAL, (tot / _univ.INITIAL_CAPITAL - 1) * 100, pf.get("cash", 0))
        + ("\n".join(f"  · {r['name']} {r['shares']}주 "
                     f"비중 {r['weight']:.0%} 손익 {r['pl_pct']:+.1f}%" for r in rows)
           if rows else "  (아직 보유 종목 없음 — 첫 배분을 정하라)"))

    # 거래비용을 **원 단위로** 알려 준다. 비율(0.18%)로 말하면 요원이 체감을 못 하고
    # 매 회의마다 비중을 크게 흔든다 — 실측으로 회전율 38%에 3.4만원이 나갔고,
    # 이 속도면 6개월 누적 8.7%다. 리밸런싱을 막는 대신 비용을 판단에 넣게 한다.
    fee_note = ""
    try:
        one, kr, us, paid, paid_pct = _pf.cost_note(tot)
        fee_note = (
            f"\n[거래비용 — 비중을 정할 때 반드시 계산에 넣어라]\n"
            f"  · 비중 1%p = {one:,.0f}원. 이걸 옮기면 왕복 비용이 "
            f"국내 약 {kr:,.0f}원, 해외 약 {us:,.0f}원 나간다.\n"
            f"  · 지금까지 낸 수수료·세금 누적 {paid:,.0f}원 (원금의 {paid_pct:.3f}%).\n"
            f"  · 비중 변경은 **그 변경으로 기대하는 이득이 위 비용보다 클 때만** 해라.\n"
            f"    근거 없이 숫자만 흔들면 수수료로 계좌가 녹는다.\n"
            f"  · 확신이 없으면 **그대로 두는 것도 판단이다** — 다만 전 종목 동결이 매번\n"
            f"    반복되면 그것도 판단을 안 한 것이다.\n")
    except Exception as e:
        print(f"  ⚠️ 거래비용 안내 생성 실패(프롬프트에서 생략): {type(e).__name__}: {e}")

    b.transcript.append({"role": "🧰도구", "topic": "가상계좌",
                         "text": board + "\n" + held + fee_note})

    common = STYLE + "\n" + m.gstate + "\n" + board + held + fee_note
    views = {}
    for u in _univ.UNIVERSE:
        uid, nm = u["id"], u["name"]
        if uid not in prices:
            continue
        bull = bear = ""
        try:
            bull = b.ask("U3", f"""너는 원인분석 요원 U3다. {STYLE}
{m.gstate}

종목: {nm} ({u['sector']}) 현재 {prices[uid]['px']:,.2f} {u['ccy']}, 전일比 {prices[uid]['pct']}%
이 종목을 볼 때 주로 보는 것: {u['watch']}

**매수 논거**를 세워라. 억지 균형 금지 — 반대편은 U4가 맡는다.
24시간 내 사건·수급·가격으로만. 없으면 "강한 근거 없음"이라고 써라. 2줄 이내.
{_fc.THEME_FORMAT if _fc else ''}{_fix("U3")}""", topic=nm)
        except Exception as e:
            print(f"  ⚠️ U3/{nm}: {_diag(e)}")
        try:
            bear = b.ask("U4", f"""너는 비판 요원 U4다. {STYLE}
{m.gstate}

종목: {nm} ({u['sector']}) 현재 {prices[uid]['px']:,.2f} {u['ccy']}, 전일比 {prices[uid]['pct']}%
U3의 매수 논거: {bull[:600]}

**매도/보류 논거**와 U3 논거의 허점을 짚어라. 근거 없는 낙관은 깎아라. 2줄 이내.
{_fc.THEME_FORMAT if _fc else ''}{_fix("U4")}""", topic=nm)
        except Exception as e:
            print(f"  ⚠️ U4/{nm}: {_diag(e)}")
        views[uid] = (bull, bear)
        if _fc:
            for who, txt in (("U3", bull), ("U4", bear)):
                try:
                    prs = _fc.parse_multi(txt)
                    if prs:
                        _fc.record_theme(m.meeting_id, who,
                                         {"id": uid, "name": nm, "members": [uid]},
                                         prs, {uid: prices[uid]["px"]},
                                         emit_fn=(bus.emit if bus else None))
                except Exception as e:
                    print(f"  ⚠️ 예측 기록({who}/{nm}): {type(e).__name__}: {e}")

    digest = "\n\n".join(
        f"[{_univ.BY_ID[k]['name']}]\n 매수(U3): {v[0][:320]}\n 매도(U4): {v[1][:320]}"
        for k, v in views.items())
    ids = " ".join(u["id"] for u in _univ.UNIVERSE)

    final = ""
    try:
        final = b.ask("알파", f"""너는 지휘자 알파다. 가상계좌 {_univ.INITIAL_CAPITAL:,.0f}원을 굴린다.
{common}

요원 토론:
{digest[:3500]}

**두 줄을 형식 그대로 마지막에 적어라.** (__ 는 네가 정한 숫자로 채운다)
[비중] kepco=__ lselectric=__ hynix=__ nvda=__ ceg=__ xle=__ 현금=__
[평가예측] 내일=________ 확률=0.__ 구간=________~________

규칙:
· 종목 id는 정확히 이것만 쓴다: {ids}
· 비중은 5 단위 정수(%), 한 종목 최대 {int(_univ.MAX_WEIGHT*100)}. 합계 100 이하, 나머지는 현금.
· [평가예측]은 **다음 거래일 종가 기준 계좌 총평가액(원)**이다. 위 비중대로 산 뒤의 값이다.
  참고로 지금 평가액은 {int(tot):,}원이다 — 이 숫자를 그대로 옮겨 적으라는 뜻이 아니라,
  네가 예상하는 내일 값을 **직접** 판단해서 쓰라는 뜻이다.
· 확신이 없으면 현금 비중을 올려라. 다만 **겁먹고 매번 현금 100은 실격** — 실험이 죽는다.
· 요원들이 종목마다 다르게 말했다면 비중도 달라야 한다. 전 종목을 같은 비중으로 두는 건
  판단을 안 한 것이다.
· **위 [거래비용]을 근거에 반드시 반영해라.** 어떤 종목의 비중을 바꿨다면, 그 변경이
  비용을 물고도 남는 이유를 한 줄로 밝혀라. 밝히지 못할 변경이면 그대로 둬라.
· 비중을 왜 그렇게 잡았는지 근거를 2~3줄로 먼저 쓰고, 마지막에 위 두 줄을 적어라.
{_fix("알파")}""", topic="가상계좌 배분")
    except Exception as e:
        print(f"  ⚠️ 알파 배분: {_diag(e)}")

    w = _pf_parse_weights(final)
    eq = _pf_parse_equity(final)
    if w:
        eq = eq or {}
        eq["by"] = "알파"
        _pf.set_orders(pf, w, eq, m.meeting_id, note=final[:300])
        pct = " ".join(f"{_univ.BY_ID[k]['name']} {v:.0%}" for k, v in w.items() if v > 0)
        print(f"  💼 목표비중 예약: {pct or '전량 현금'}"
              + (f" · 내일 예측 {eq.get('equity', 0):,.0f}원" if eq.get("equity") else ""))
        if bus:
            bus.emit("portfolio_order", "알파", topic="가상계좌",
                     payload={"weights": w, "forecast": eq, "meeting_id": m.meeting_id})
        m.pf_orders = w
    else:
        print("  ⚠️ 알파가 [비중] 형식을 안 지켜 이번 회의 주문은 없음(직전 보유 유지)")


PHASES = [
    ("perceive", phase_perceive),
    ("indicators", phase_indicators),
    ("news", phase_news),
    ("deepdive", phase_deepdive),
    ("brief", phase_brief),
    ("portfolio", phase_portfolio),              # 가상계좌 모의투자 — 6종목 토론·배분
    ("spend_remaining", phase_spend_remaining),  # P12 #4 — 잔여예산 소진
]


def _run_sequential(m, b):
    """레거시(brain 비활성) 경로 — 구 discuss.main()과 완전히 같은 순서·같은 bus 호출.
    BRAIN_DISABLED=1 또는 brain/bus 임포트 실패 시 이 경로로 폴백한다(§9-5 롤백선)."""
    if bus:
        bus.emit_meeting_start(m.meeting_id, m.now)
    for _name, fn in PHASES:
        fn(b, m)
    result = finalize(b, m)
    if bus:
        bus.observe_meeting(m.meeting_id, m.now, result)
    return result


def main():
    try:
        b = RotatingBudget(per_run_cap=MAX_CALLS)
    except RuntimeError as e:
        print(f"❌ {e}")
        return
    print(f"🔑 등록된 계정 {len(b.keys)}개 (오늘 이론상 최대 {b.total_daily_limit}콜)")
    now = datetime.datetime.now(KST)
    m = Meeting(now, load_prev())

    use_brain = bus is not None and brain is not None and not brain.disabled()
    if use_brain:
        print("🧠 brain 사이클 경로 (P11-3)")
        brain.run_meeting(m, b, PHASES, finalize)
    else:
        why = "brain/bus 없음" if (bus is None or brain is None) else "BRAIN_DISABLED=1"
        print(f"↩️ 레거시 순차 경로 ({why})")
        _run_sequential(m, b)
    print(f"✅ 완료 — {b.used}콜 (한도 {MAX_CALLS})")


if __name__ == "__main__":
    main()
