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
import datetime
import urllib.parse
import xml.etree.ElementTree as ET

import requests

UA = {"User-Agent": "Mozilla/5.0 (personal research tool; non-commercial)"}
BASE = os.path.dirname(os.path.abspath(__file__))


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


def get_electimes_headlines(max_items=12):
    """전기신문 최신 헤드라인+링크 (오늘/어제 위주)"""
    r = requests.get("https://www.electimes.com/rss/allArticle.xml", headers=UA, timeout=15)
    r.raise_for_status()
    out = []
    for it in ET.fromstring(r.content).findall(".//item")[:max_items]:
        out.append({"title": (it.findtext("title") or "").strip(),
                    "link": (it.findtext("link") or "").strip(),
                    "published": (it.findtext("pubDate") or "").strip()})
    return out


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


def run_tool_loop(budget, role, prompt, topic="", max_rounds=4):
    """요원에게 도구 사용권을 주는 에이전트 루프. 도구 실행은 콜 소모 없음."""
    convo = prompt + "\n\n" + TOOL_GUIDE
    for _ in range(max_rounds):
        text = budget.ask(role, convo, topic=topic)
        m = re.search(r'\{[^{}]*"tool"[^{}]*\}', text, re.S)
        if not m:
            return text  # 최종 답변
        try:
            req = json.loads(m.group(0))
            fn = TOOLS[req["tool"]][0]
            result = fn(**req.get("args", {}))
            result = str(result)[:3000]
        except Exception as e:  # 도구 폴백(D8): 실패해도 토론은 계속
            result = f"도구 실행 실패: {type(e).__name__}: {e}. 다른 방법을 쓰거나 '판단불가'라고 하라."
        budget.transcript.append({"role": "🧰도구", "topic": topic,
                                  "text": f"{req.get('tool', '?')} 실행 결과:\n{result[:600]}"})
        convo = (f"{prompt}\n\n[도구 {req.get('tool')} 실행 결과]\n{result}\n\n"
                 "이 결과를 근거로 최종 답을 써라. 근거가 부족하면 다른 도구를 JSON으로 요청하라.")
    return budget.ask(role, convo + "\n(도구 한도 소진 — 지금까지 정보로 최종 답을 써라)", topic=topic)
