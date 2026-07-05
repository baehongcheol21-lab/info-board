# coding=utf-8
"""
publish.py — 아이폰용 정적 브리핑 페이지 생성기 (GitHub Actions에서 매시간 실행)

- 이 저장소(info-board)는 PUBLIC: 시장 숫자와 뉴스 제목만 담긴 결과 페이지만 공개된다.
- 코드 본체(수집엔진·AI해석·개인메모)는 private 저장소(info-dashboard)에 있다.
- API 키는 GitHub Actions Secrets(DATA_GO_KR_KEY)로만 주입되며 페이지에 노출되지 않는다.
- 의존성: requests 하나뿐 (독립 실행형 — private 저장소 코드와 분리)
실행: python publish.py  →  docs/index.html 생성
"""
import os
import datetime
import xml.etree.ElementTree as ET

import requests

UA = {"User-Agent": "Mozilla/5.0 (personal info board; non-commercial)"}
KST = datetime.timezone(datetime.timedelta(hours=9))

# (id, 이름, 야후심볼, 단위, 소수점)
INDICATORS = [
    ("krw_usd", "원/달러 환율", "KRW=X", "원", 1),
    ("kospi", "코스피", "^KS11", "pt", 2),
    ("sox", "반도체지수 SOX", "^SOX", "pt", 2),
    ("natgas", "천연가스 (LNG 대리)", "NG=F", "USD", 3),
    ("copper", "구리 선물", "HG=F", "USD/lb", 3),
    ("wti", "WTI 유가", "CL=F", "USD", 2),
    ("kepco", "한국전력", "015760.KS", "원", 0),
    ("samsung", "삼성전자", "005930.KS", "원", 0),
    ("hynix", "SK하이닉스", "000660.KS", "원", 0),
    ("nvidia", "엔비디아", "NVDA", "USD", 2),
    ("gold", "금 선물", "GC=F", "USD", 1),
    ("us10y", "미 10년물 금리", "^TNX", "%", 3),
]


def fetch_yahoo(symbol):
    r = requests.get(f"https://query1.finance.yahoo.com/v8/finance/chart/{symbol}",
                     params={"range": "1mo", "interval": "1d"}, headers=UA, timeout=15)
    r.raise_for_status()
    res = r.json()["chart"]["result"][0]
    price = res["meta"].get("regularMarketPrice")
    prev = res["meta"].get("chartPreviousClose")
    closes = [c for c in (res.get("indicators", {}).get("quote") or [{}])[0].get("close") or []
              if c is not None]
    pct = round((price - closes[-2]) / closes[-2] * 100, 2) if len(closes) >= 2 else None
    return price, pct, closes


def fetch_news():
    try:
        r = requests.get("https://www.electimes.com/rss/allArticle.xml", headers=UA, timeout=15)
        root = ET.fromstring(r.content)
        return [(it.findtext("title") or "").strip() for it in root.findall(".//item")[:6]]
    except Exception:
        return []


def fetch_smp():
    """공공데이터 SMP — 키가 없거나 미승인이면 None (가짜 숫자 금지)"""
    key = os.environ.get("DATA_GO_KR_KEY", "")
    if not key:
        return None
    try:
        r = requests.get(
            "https://apis.data.go.kr/B552115/SmpWithForecastDemand/getSmpWithForecastDemand",
            params={"serviceKey": key, "pageNo": 1, "numOfRows": 50}, headers=UA, timeout=20)
        if "Unauthorized" in r.text or "SERVICE_KEY" in r.text or "NO OPENAPI" in r.text:
            return None
        nums = []
        for elem in ET.fromstring(r.text).iter():
            if "smp" in elem.tag.lower():
                try:
                    nums.append(float(elem.text))
                except (TypeError, ValueError):
                    pass
        return nums[-1] if nums else None
    except Exception:
        return None


def spark_svg(closes):
    if len(closes) < 2:
        return ""
    lo, hi = min(closes), max(closes)
    rng = (hi - lo) or 1
    w, h = 200, 36
    pts = " ".join(f"{i / (len(closes) - 1) * w:.1f},{h - 3 - (c - lo) / rng * (h - 6):.1f}"
                   for i, c in enumerate(closes))
    return (f'<svg viewBox="0 0 {w} {h}" preserveAspectRatio="none" class="sp">'
            f'<polyline points="{pts}" fill="none" stroke="#00ffcc" stroke-width="1.5"/></svg>')


def main():
    cards, alerts = [], 0
    for _id, name, sym, unit, dec in INDICATORS:
        try:
            price, pct, closes = fetch_yahoo(sym)
            arrow = "▲" if (pct or 0) > 0 else ("▼" if (pct or 0) < 0 else "▬")
            cls = "up" if (pct or 0) > 0 else ("down" if (pct or 0) < 0 else "flat")
            big = pct is not None and abs(pct) >= 3
            alerts += big
            cards.append(f"""
<div class="card{' alert' if big else ''}"><h3>{name}</h3>
  <div class="val">{price:,.{dec}f}<span class="u">{unit}</span></div>
  <div class="chg {cls}">{arrow} {abs(pct):.2f}% <span class="dim">전일比</span></div>
  {spark_svg(closes)}</div>""")
        except Exception as e:
            cards.append(f'<div class="card"><h3>{name}</h3><div class="err">❌ 수집 실패</div>'
                         f'<div class="dim" style="font-size:.7rem">{type(e).__name__}</div></div>')

    smp = fetch_smp()
    smp_card = (f'<div class="card"><h3>SMP 계통한계가격</h3><div class="val">{smp:,.2f}'
                f'<span class="u">원/kWh</span></div></div>' if smp else
                '<div class="card"><h3>SMP 계통한계가격</h3><div class="err">🔑 키 승인 대기</div></div>')

    news_items = "".join(f"<li>{t}</li>" for t in fetch_news())
    now = datetime.datetime.now(KST).strftime("%m/%d %H:%M")
    level = ("🟢 조용함", "#3fb950") if alerts == 0 else \
            ((f"🟡 주의 — 이상 {alerts}건", "#ffd24d") if alerts <= 2 else (f"🔴 특이 — 이상 {alerts}건", "#ff5c5c"))

    html = f"""<!DOCTYPE html>
<html lang="ko"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<title>정보 브리핑</title>
<style>
 body{{background:#050505;color:#e6fff8;font-family:-apple-system,'Malgun Gothic',sans-serif;margin:0;
  background-image:linear-gradient(rgba(0,255,204,.04) 1px,transparent 1px),
  linear-gradient(90deg,rgba(0,255,204,.04) 1px,transparent 1px);background-size:22px 22px}}
 header{{padding:14px 16px;border-bottom:1px solid #00ffcc;font-family:'Courier New',monospace}}
 header h1{{font-size:1rem;letter-spacing:3px;color:#00ffcc;margin:0;text-shadow:0 0 6px #00ffcc}}
 header .t{{font-size:.72rem;color:#7fa99e}}
 #hl{{padding:12px 16px;font-weight:700;border-left:5px solid {level[1]};background:rgba(0,255,204,.04)}}
 #grid{{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px;padding:12px}}
 .card{{background:rgba(0,0,0,.55);border:1px solid rgba(0,255,204,.28);border-radius:8px;padding:12px;
  box-shadow:0 0 12px rgba(0,255,204,.06) inset}}
 .card.alert{{border-color:#ff5c5c;box-shadow:0 0 10px rgba(255,92,92,.4)}}
 .card h3{{font-size:.68rem;color:#7fa99e;margin:0 0 6px;font-family:'Courier New',monospace}}
 .val{{font-size:1.45rem;font-weight:800;color:#fff;text-align:right}}
 .u{{font-size:.65rem;color:#00ffcc;margin-left:3px}}
 .chg{{font-size:.8rem;font-weight:700;text-align:right}}
 .up{{color:#ff5c5c}} .down{{color:#58a6ff}} .flat{{color:#7fa99e}} .dim{{color:#7fa99e;font-weight:400}}
 .sp{{width:100%;height:34px;margin-top:6px}}
 .err{{color:#ffd24d;font-size:.85rem;padding:8px 0}}
 #news{{margin:4px 12px 24px;background:rgba(0,0,0,.55);border:1px solid rgba(0,255,204,.28);border-radius:8px;padding:12px}}
 #news h3{{font-size:.7rem;color:#7fa99e;font-family:'Courier New',monospace;margin:0 0 8px}}
 #news li{{font-size:.82rem;padding:5px 0 5px 8px;border-left:2px solid #00ffcc;list-style:none;margin:5px 0}}
 #news ul{{margin:0;padding:0}}
 footer{{color:#7fa99e;font-size:.65rem;text-align:center;padding:10px;font-family:'Courier New',monospace}}
</style></head><body>
<header><h1>INFO_BRIEF // MOBILE</h1><div class="t">갱신 {now} KST · 시세 15~20분 지연</div></header>
<div id="hl">오늘 중요도: {level[0]}</div>
<div id="grid">{smp_card}{"".join(cards)}</div>
<div id="news"><h3>RSS_FEED // 전기신문</h3><ul>{news_items or "<li>수집 실패</li>"}</ul></div>
<footer>info-dashboard system · 자동 갱신(매시간) · 사파리 공유→홈 화면에 추가</footer>
</body></html>"""
    os.makedirs("docs", exist_ok=True)
    with open("docs/index.html", "w", encoding="utf-8") as f:
        f.write(html)
    print(f"docs/index.html 생성 완료 (카드 {len(INDICATORS) + 1}개, 이상 {alerts}건)")


if __name__ == "__main__":
    main()
