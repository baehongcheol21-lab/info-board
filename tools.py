# coding=utf-8
"""
tools.py — AI 요원용 도구 상자 (LLM 콜 0원, 파이썬이 실행)

요원이 답변에 {"tool": "이름", "args": {...}} JSON을 내면 파이썬이 실행해 결과를 돌려준다.
로컬 PC와 GitHub Actions 클라우드 양쪽에서 동일하게 작동한다 (표준 라이브러리+requests만 사용).
도구 실패는 에러 문자열로 반환되어 토론이 통째로 죽지 않는다 (폴백, 체크리스트 D8).
"""
import os
import re
import json
import glob
import html
import hashlib
import datetime
import urllib.parse
import xml.etree.ElementTree as ET

import requests

try:  # P5 관측 로그
    import runlog
except ImportError:
    runlog = None

UA = {"User-Agent": "Mozilla/5.0 (personal research tool; non-commercial)"}
BASE = os.path.dirname(os.path.abspath(__file__))


def _query_mismatch(tool, args, topic):
    """검색어-주제 정합 검사 (2026-07-20 감사: 코스피 회의에서 '삼성전자 급락' 검색됨).
    search_news에만 적용 — topic의 2자 이상 토큰이 검색어에 하나도 없으면 불일치로 본다."""
    if tool != "search_news" or not topic:
        return False
    q = str(args.get("query", ""))
    toks = [t for t in re.split(r"[\s·,()]+", topic) if len(t) >= 2]
    if not toks:
        return False
    return not any(t in q for t in toks)


def search_news(query, max_items=6):
    """구글뉴스 RSS 검색 (키 불필요). 반환: [{title, link, published}]"""
    q = urllib.parse.quote(str(query))
    url = f"https://news.google.com/rss/search?q={q}&hl=ko&gl=KR&ceid=KR:ko"
    r = requests.get(url, headers=UA, timeout=15)
    r.raise_for_status()
    out = []
    for it in ET.fromstring(r.content).findall(".//item")[:max_items]:
        out.append({"title": (it.findtext("title") or "").strip(),
                    "link": (it.findtext("link") or "").strip(),
                    "published": (it.findtext("pubDate") or "").strip()})
    return out


def get_article(url, max_chars=2500):
    """기사 본문 추출 (범용 크롤러). <p> 태그 텍스트를 모아 잡음을 걸러낸다."""
    r = requests.get(url, headers=UA, timeout=20)
    r.raise_for_status()
    body = r.text
    # 전기신문 등 언론사 공통 본문 컨테이너 우선
    m = re.search(r'<div[^>]+(?:article-view-content|article-body|news_body|art_body)[^>]*>(.*?)</div>',
                  body, re.S | re.I)
    scope = m.group(1) if m else body
    paras = re.findall(r"<p[^>]*>(.*?)</p>", scope, re.S | re.I)
    texts = []
    for p in paras:
        t = html.unescape(re.sub(r"<[^>]+>", "", p)).strip()
        if len(t) > 25 and "저작권" not in t and "무단전재" not in t:
            texts.append(t)
    text = "\n".join(texts)[:max_chars]
    return text if len(text) > 80 else f"본문 추출 실패 (길이 {len(text)}자) — 이 기사는 제목만으로 판단하라"


# ---- 뉴스 소스 레지스트리 (새 신문 추가는 여기 한 줄만) ----
# category: 이 소스가 어느 탭 맥락인지. discuss.py가 카테고리별로 묶어 파이프라인을 돌린다.
NEWS_SOURCES = {
    "electimes": {"name": "전기신문", "category": "elec",
                  "rss": "https://www.electimes.com/rss/allArticle.xml"},
    "investing_market": {"name": "인베스팅닷컴·증시", "category": "econ",
                         "rss": "https://kr.investing.com/rss/news_25.rss"},
    "investing_econ": {"name": "인베스팅닷컴·경제지표", "category": "econ",
                       "rss": "https://kr.investing.com/rss/news_95.rss"},
    "investing_fx": {"name": "인베스팅닷컴·외환", "category": "econ",
                     "rss": "https://kr.investing.com/rss/news_1.rss"},
}


def fetch_rss(url, max_items=15):
    """범용 RSS 파서. 반환: [{title, link, published}]"""
    r = requests.get(url, headers=UA, timeout=15)
    r.raise_for_status()
    out = []
    for it in ET.fromstring(r.content).findall(".//item")[:max_items]:
        out.append({"title": (it.findtext("title") or "").strip(),
                    "link": (it.findtext("link") or "").strip(),
                    "published": (it.findtext("pubDate") or "").strip()})
    return out


def get_headlines(category=None, per_source=15):
    """카테고리별(elec/econ) 뉴스 소스 전체에서 헤드라인 수집.
    반환: [{title, link, published, source, source_name, category}]. 실패한 소스는 조용히 건너뜀."""
    out = []
    for sid, s in NEWS_SOURCES.items():
        if category and s["category"] != category:
            continue
        try:
            for it in fetch_rss(s["rss"], per_source):
                it.update({"source": sid, "source_name": s["name"], "category": s["category"]})
                out.append(it)
        except Exception:
            continue  # 한 소스가 죽어도 나머지는 계속
    return out


def get_electimes_headlines(max_items=12):
    """(호환용) 전기신문 헤드라인. 신규 코드는 get_headlines('elec') 사용 권장."""
    return fetch_rss(NEWS_SOURCES["electimes"]["rss"], max_items)


def get_history(symbol_or_id, days=30):
    """지표 과거 시세. 야후 심볼이면 직접 조회, 지표 id면 publish.INDICATORS에서 심볼 변환."""
    from publish import INDICATORS
    sym = str(symbol_or_id)
    for _id, _name, s, _u, _d in INDICATORS:
        if _id == sym:
            sym = s
            break
    r = requests.get(f"https://query1.finance.yahoo.com/v8/finance/chart/{sym}",
                     params={"range": f"{min(days, 365)}d", "interval": "1d"},
                     headers=UA, timeout=15)
    r.raise_for_status()
    res = r.json()["chart"]["result"][0]
    ts = res.get("timestamp") or []
    q = (res.get("indicators", {}).get("quote") or [{}])[0]
    rows = []
    for i, t in enumerate(ts):
        c = (q.get("close") or [None])[i]
        v = (q.get("volume") or [None])[i]
        if c is not None:
            d = datetime.datetime.fromtimestamp(t).strftime("%m-%d")
            rows.append(f"{d}: 종가 {round(c, 2)}, 거래량 {v}")
    return "\n".join(rows[-days:]) or "데이터 없음"


def get_conclusions(keyword="", n=3):
    """과거 토론 결론 검색 (기억 은행). keyword 포함된 최근 결론 n건."""
    files = sorted(glob.glob(os.path.join(BASE, "discussions", "*.json")), reverse=True)
    out = []
    for f in files[:30]:
        try:
            d = json.load(open(f, encoding="utf-8"))
        except (OSError, ValueError):
            continue
        brief = d.get("alpha_brief", "")
        blob = brief + " ".join(v.get("detail", "") for v in d.get("indicators", {}).values())
        if not keyword or keyword in blob:
            out.append(f"[{d.get('time', '?')}] {brief[:300]}")
        if len(out) >= n:
            break
    return "\n---\n".join(out) or "관련 과거 결론 없음"


# ---------------- 요원용 도구 실행기 ----------------

TOOLS = {
    "search_news": (search_news, "search_news(query): 구글뉴스에서 키워드 검색 → 제목/링크/날짜"),
    "get_article": (get_article, "get_article(url): 기사 URL의 본문 텍스트를 가져옴"),
    "get_history": (get_history, "get_history(symbol_or_id, days): 지표/종목의 과거 종가·거래량"),
    "get_conclusions": (get_conclusions, "get_conclusions(keyword): 과거 토론 결론 검색(기억 은행)"),
}

TOOL_GUIDE = ("[사용 가능 도구]\n" + "\n".join(f"- {d}" for _, d in TOOLS.values()) +
              '\n도구가 필요하면 다른 말 없이 JSON 한 줄만 출력하라: {"tool": "이름", "args": {"인자": "값"}}\n'
              "도구 결과를 받은 뒤 최종 답을 쓰거나, 필요하면 다른 도구를 또 요청해도 된다.")


def run_tool_loop(budget, role, prompt, topic="", max_rounds=4, force_tool=True):
    """요원에게 도구 사용권을 주는 에이전트 루프 (레퍼런스26 반영).
    개선점:
      - 근거 누적: 이전 도구 결과를 덮어쓰지 않고 전부 유지 (다단계 추론 = 기억 보존)
      - 도구 강제(force_tool): 첫 턴에 도구를 안 쓰면 자동으로 뉴스검색 1회 → 툴킷 항상 활성화
    도구 실행 자체는 API 콜 0."""
    convo = prompt + "\n\n" + TOOL_GUIDE
    evidence = []      # 수집한 근거 전부 누적 (덮어쓰기 금지)
    auto_done = False
    for _ in range(max_rounds):
        text = budget.ask(role, convo, topic=topic)
        m = re.search(r'\{[^{}]*"tool"[^{}]*\}', text, re.S)
        if not m:
            if force_tool and not evidence and not auto_done:
                # 근거 없이 결론 내려 하면 강제로 검색 1회 (에이전트가 도구를 놀리지 않게)
                auto_done = True
                try:
                    res = str(search_news(topic or prompt[:40]))[:2500]
                    ok = True
                except Exception as e:
                    res = f"검색 실패: {e}"
                    ok = False
                if runlog:
                    runlog.log_tool_call("search_news(자동강제)", (topic or prompt[:40])[:120], ok, len(res),
                                          result_hash=hashlib.md5(res.encode("utf-8")).hexdigest()[:12] if ok else "")
                budget.transcript.append({"role": "🧰도구", "topic": topic,
                                          "text": f"search_news(자동 강제) 결과:\n{res[:600]}"})
                evidence.append(res)
                convo = (f"{prompt}\n\n[자동 수집된 뉴스 근거]\n{res}\n\n"
                         "이 근거를 반영해 최종 답을 써라. 사실에는 [출처:] 태그를 달아라.")
                continue
            return text  # 최종 답변
        req = {}
        try:
            req = json.loads(m.group(0))
            fn = TOOLS[req["tool"]][0]
            result = str(fn(**req.get("args", {})))[:3000]
            ok = True
        except Exception as e:  # 도구 폴백(D8): 실패해도 토론은 계속
            result = f"도구 실행 실패: {type(e).__name__}: {e}. 다른 방법을 쓰거나 '판단불가'라고 하라."
            ok = False
        tool_name = req.get("tool", "?")
        args = req.get("args", {})
        mismatch = _query_mismatch(tool_name, args, topic)
        if runlog:
            runlog.log_tool_call(tool_name, json.dumps(args, ensure_ascii=False)[:120], ok, len(result),
                                  mismatch=mismatch,
                                  result_hash=hashlib.md5(result.encode("utf-8")).hexdigest()[:12] if ok else "")
        budget.transcript.append({"role": "🧰도구", "topic": topic,
                                  "text": f"{tool_name} 실행 결과:\n{result[:600]}" +
                                          ("\n⚠️ 검색어-주제 불일치 감지됨" if mismatch else "")})
        evidence.append(result)
        joined = "\n".join(f"[근거{i + 1}] {e[:800]}" for i, e in enumerate(evidence))
        convo = (f"{prompt}\n\n[지금까지 수집한 근거 — 모두 반영하라]\n{joined}\n\n"
                 "근거가 충분하면 최종 답을 써라([출처:] 필수). 더 필요하면 다른 도구를 JSON으로 요청하라.")
    return budget.ask(role, convo + "\n(도구 한도 소진 — 지금까지 근거로 최종 답을 써라)", topic=topic)
