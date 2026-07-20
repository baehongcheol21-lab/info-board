# coding=utf-8
"""
publish.py — 아이폰용 "픽셀 트레이딩 플로어" 생성기 (GitHub Actions에서 매시간 실행)

v3 (2026-07-20, 마스터플랜 P1 2단계): 사용자가 승인한 시안(시안/pixel_floor.html)의
HTML·CSS·JS를 그대로 이식하고, 더미 DATA만 실제 데이터로 교체했다.
CSS/JS(픽셀 캐릭터 렌더링·바텀시트·차트)는 시안A에서 사용자 검증을 마친 코드이므로
이 파일에서는 절대 다시 손대지 않는다 — 여기서 하는 일은 오직 "진짜 데이터를 만들어
JSON으로 꽂아넣는 것"뿐이다. 디자인을 바꿀 일이 있으면 시안 파일을 먼저 고치고 승인받는다.

- 이 저장소(info-board)는 PUBLIC: 시장 숫자와 AI 요원 발언 요약만 담긴 결과 페이지만 공개된다.
- 코드 본체(수집엔진·개인메모)는 private 저장소(info-dashboard)에 있다.
- API 키는 GitHub Actions Secrets(DATA_GO_KR_KEY)로만 주입되며 페이지에 노출되지 않는다.
실행: python publish.py  →  docs/index.html 생성
"""
import os
import json
import datetime

import requests

UA = {"User-Agent": "Mozilla/5.0 (personal info board; non-commercial)"}
KST = datetime.timezone(datetime.timedelta(hours=9))

# (id, 이름, 야후심볼, 단위, 소수점) — kospi는 상단 히어로 차트에 별도 사용, 나머지는 하단 티커
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

# 캐릭터 시각설정 — 시안A에서 확정된 배색·스타일(마스터플랜 P1 참고)
ROLE_CFG = {
    "U1": {"name": "유원", "role": "기술적 분석", "hair": "#2b3a67", "body": "#3a6ea5",
           "pants": "#20304f", "glasses": True, "hairStyle": "normal"},
    "U2": {"name": "이투", "role": "뉴스 분석", "hair": "#7a3b1e", "body": "#c99a2e",
           "pants": "#5b4210", "hairStyle": "ponytail"},
    "B2": {"name": "비투", "role": "기본적 분석", "hair": "#5a2d82", "body": "#2f8f5b",
           "pants": "#1c5a38", "hairStyle": "parted"},
    "TK": {"name": "툴킷", "role": "데이터 수집", "hair": "#888888", "body": "#2b8f8f",
           "pants": "#1c5a5a", "cap": True, "belt": True},
}


def fetch_yahoo(symbol, rng="1mo"):
    r = requests.get(f"https://query1.finance.yahoo.com/v8/finance/chart/{symbol}",
                     params={"range": rng, "interval": "1d"}, headers=UA, timeout=15)
    r.raise_for_status()
    res = r.json()["chart"]["result"][0]
    price = res["meta"].get("regularMarketPrice")
    closes = [c for c in (res.get("indicators", {}).get("quote") or [{}])[0].get("close") or []
              if c is not None]
    pct = round((price - closes[-2]) / closes[-2] * 100, 2) if len(closes) >= 2 else None
    return price, pct, closes


_FUEL = {"fuelPwr4": "원자력", "fuelPwr6": "LNG(가스)", "fuelPwr3": "유연탄", "fuelPwr7": "국내탄",
         "fuelPwr8": "신재생", "fuelPwr9": "태양광", "fuelPwr1": "수력", "fuelPwr5": "양수", "fuelPwr2": "유류"}


def fetch_power_mix():
    """발전원 믹스 — 아이폰 관제 패널의 '현재수요' 근거. 키 없거나 실패하면 None(가짜 숫자 금지)."""
    key = os.environ.get("DATA_GO_KR_KEY", "")
    if not key:
        return None
    try:
        today = datetime.datetime.now(KST).strftime("%Y%m%d")
        r = requests.get("https://apis.data.go.kr/B552115/PwrAmountByGen/getPwrAmountByGen",
                         params={"serviceKey": key, "pageNo": 1, "numOfRows": 288,
                                 "dataType": "json", "baseDate": today}, headers=UA, timeout=20)
        items = r.json()["response"]["body"]["items"]["item"]
        if isinstance(items, dict):
            items = [items]
        it = max(items, key=lambda x: str(x.get("baseDatetime") or ""))
        total = float(it.get("fuelPwrTot") or 0)
        return {"total": total, "time": str(it.get("baseDatetime") or "")[8:12]}
    except Exception:
        return None


def fetch_sukub():
    """전력수급현황 — 예비율/공급능력/현재수요. 키 없거나 실패하면 None(가짜 숫자 금지)."""
    key = os.environ.get("DATA_GO_KR_KEY", "")
    if not key:
        return None
    try:
        r = requests.get("https://apis.data.go.kr/B552115/sukub5mMaxDatetime2/getSukub5mMaxDatetime2",
                         params={"serviceKey": key, "pageNo": 1, "numOfRows": 1, "dataType": "json"},
                         headers=UA, timeout=20)
        it = r.json()["response"]["body"]["items"]["item"]
        if isinstance(it, list):
            it = it[0]
        return {"rate": float(it["suppReserveRate"]), "supply": float(it["suppAbility"]),
                "demand": float(it["currPwrTot"]), "time": str(it["baseDatetime"])[8:12]}
    except Exception:
        return None


def fetch_smp():
    """공공데이터 SMP — 키가 없거나 미승인이면 None (가짜 숫자 금지).
    ⚠️ discuss.py가 `from publish import fetch_smp`로 직접 가져다 쓴다(AI 회의의 지표 중 하나) —
    이 페이지(픽셀 플로어)에 SMP 카드가 안 보인다고 지우면 회의 전체가 임포트 단계에서 죽는다."""
    key = os.environ.get("DATA_GO_KR_KEY", "")
    if not key:
        return None
    try:
        r = requests.get(
            "https://apis.data.go.kr/B552115/SmpWithForecastDemand/getSmpWithForecastDemand",
            params={"serviceKey": key, "pageNo": 1, "numOfRows": 100, "dataType": "json"},
            headers=UA, timeout=20)
        if "Unauthorized" in r.text or "SERVICE_KEY" in r.text or "NO OPENAPI" in r.text:
            return None
        items = r.json()["response"]["body"]["items"]["item"]
        daily = {}
        for it in items:
            if it.get("areaName") == "육지":
                daily.setdefault(str(it["date"]), []).append(float(it["smp"]))
        if not daily:
            return None
        newest = max(daily)
        return round(sum(daily[newest]) / len(daily[newest]), 2)
    except Exception:
        return None


def load_discussions():
    """discuss.py가 저장한 최신 AI 토론 결과 (없으면 빈 dict)"""
    try:
        with open("discussions.json", encoding="utf-8") as f:
            return json.load(f)
    except (OSError, ValueError):
        return {}


def load_recent_events(n=200):
    """P5 관측 로그 최근 n건 (api_call_log+tool_call_log 통합, 시간순).
    캐릭터의 '~하는 중…' 상태줄은 여기서 나온다 — 진짜 활동 로그다."""
    rows = []
    month = datetime.datetime.now(KST).strftime("%Y-%m")
    for kind in ("api_call_log", "tool_call_log"):
        p = os.path.join("logs", f"{month}-{kind}.jsonl")
        try:
            with open(p, encoding="utf-8") as f:
                for line in f.readlines()[-n * 3:]:
                    try:
                        row = json.loads(line)
                    except ValueError:
                        continue
                    row["kind"] = kind
                    rows.append(row)
        except OSError:
            pass
    rows.sort(key=lambda r: r.get("ts", ""))
    return rows[-n:]


def _latest_event(events, matcher):
    for row in reversed(events):
        if matcher(row):
            return row
    return None


# 로그의 도구 이름은 내부 디버그용 표기(예: "get_history(U4증거)")가 섞여 있어 그대로 화면에
# 보여주면 안 된다 — 사용자 눈에 자연스러운 한국어 라벨로 변환.
TOOL_LABEL = {
    "search_news": "뉴스 검색", "get_article": "기사 읽기",
    "get_history": "시세 조회", "get_conclusions": "과거 기록 조회",
}


def _tool_label(raw_name):
    base = (raw_name or "작업").split("(")[0].strip()
    return TOOL_LABEL.get(base, base)


def _trunc(s, n):
    """n자 근처 공백에서 자연스럽게 끊는다 (단어 중간 절단 방지)."""
    if len(s) <= n:
        return s
    cut = s.rfind(" ", 0, n)
    return s[:cut if cut > n * 0.5 else n]


def _status_line(events, role_tag):
    """P5 로그에서 이 요원의 가장 최근 활동을 짧은 상태줄로. 로그 없으면 '대기중…'."""
    if role_tag == "🧰도구":
        ev = _latest_event(events, lambda r: r.get("kind") == "tool_call_log")
        if ev:
            return f"{_tool_label(ev.get('tool'))} 실행 중…"
        return "대기중…"
    ev = _latest_event(events, lambda r: r.get("kind") == "api_call_log" and r.get("agent") == role_tag)
    if ev:
        topic = _trunc(ev.get("topic") or "작업", 14)
        return f"{topic} 확인 중…"
    return "대기중…"


def build_data():
    """실제 데이터를 시안A와 동일한 JSON 구조로 조립. 이 함수만 앞으로 관리하면 된다."""
    disc = load_discussions()
    transcript = disc.get("transcript", [])
    news_brief = disc.get("news_brief", {})
    events = load_recent_events(200)

    last_by_role = {}
    for t in transcript:
        last_by_role[t.get("role")] = t.get("text", "")

    # U1은 discuss.py에서 3가지 용도(지표요약/기사 개인화 이유/후속질문)에 재사용되는 태그다.
    # 단순히 "U1의 마지막 발언"을 쓰면 뉴스 후속질문 같은 엉뚱한 한 줄이 뽑힐 수 있다 —
    # 지표명(topic)과 일치하는 진짜 지표요약을 역순으로 우선 찾는다.
    indicator_names = {name for _id, name, sym, unit, dec in INDICATORS}
    u1_summary = None
    for t in reversed(transcript):
        if t.get("role") == "U1" and t.get("topic") in indicator_names:
            u1_summary = t.get("text", "")
            break
    if u1_summary:
        last_by_role["U1"] = u1_summary

    # ---- 히어로 차트: 코스피 (6개월치로 진짜 MA20/60 계산 — 가짜 숫자 금지) ----
    try:
        k_price, k_pct, k_closes = fetch_yahoo("^KS11", rng="6mo")
    except Exception:
        k_price, k_pct, k_closes = None, None, []

    def ma(closes, n):
        return round(sum(closes[-n:]) / n, 1) if len(closes) >= n else None

    chart = {
        "price": k_price, "pct": k_pct,
        "ma20": ma(k_closes, 20), "ma60": ma(k_closes, 60),
        "points": k_closes[-30:] if k_closes else [],
    }

    # ---- 전력 관제 ----
    pm = fetch_power_mix()
    sk = fetch_sukub()
    power = None
    if sk:
        power = {"rate": sk["rate"], "demand": (pm or {}).get("total") or sk["demand"],
                 "supply": sk["supply"]}

    # ---- 애널리스트 팀 (U1/U2/B2/툴킷) ----
    analysts = []
    for rid in ("U1", "U2", "B2", "TK"):
        cfg = ROLE_CFG[rid]
        role_tag = "🧰도구" if rid == "TK" else rid
        if rid == "B2":
            detail = news_brief.get("scheme") or last_by_role.get("B2") or "아직 이 요원이 활동한 기록이 없습니다."
        else:
            detail = last_by_role.get(role_tag, "") or "아직 이 요원이 활동한 기록이 없습니다."
        analysts.append({
            "id": rid, "name": cfg["name"], "role": cfg["role"],
            "hair": cfg["hair"], "body": cfg["body"], "pants": cfg["pants"],
            "glasses": cfg.get("glasses", False), "cap": cfg.get("cap", False),
            "belt": cfg.get("belt", False), "hairStyle": cfg.get("hairStyle", "normal"),
            "status": _status_line(events, role_tag),
            "detail": detail,
        })

    # ---- 리서치 팀 (U3=BULL vs U4=BEAR) ----
    bull_text = last_by_role.get("U3") or "오늘은 심층토론 대상이 없습니다 (전일比 2% 이상 변동 지표 없음)."
    bear_text = last_by_role.get("U4") or "오늘은 심층토론 대상이 없습니다 (전일比 2% 이상 변동 지표 없음)."
    research = {
        "bull": {"name": "삼추", "tag": "매수 논거", "text": bull_text},
        "bear": {"name": "사비", "tag": "매도 논거", "text": bear_text},
        "ace": {"name": "알파", "status": _status_line(events, "알파"),
                "detail": disc.get("alpha_brief") or "아직 오늘의 총평이 없습니다."},
    }

    # ---- 하단 티커 (코스피 제외 나머지) ----
    tickers = []
    for _id, name, sym, unit, dec in INDICATORS:
        if _id == "kospi":
            continue
        try:
            price, pct, _ = fetch_yahoo(sym)
            tickers.append({"name": name, "value": f"{price:,.{dec}f}", "pct": pct or 0})
        except Exception:
            continue

    return {
        "time": datetime.datetime.now(KST).isoformat(timespec="minutes"),
        "chart": chart, "power": power, "analysts": analysts,
        "research": research, "tickers": tickers,
    }


PIXEL_TEMPLATE = r"""<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<title>정보 브리핑 // PIXEL TRADING FLOOR</title>
<!-- 자동 생성 파일 (publish.py) — 디자인 수정은 시안/pixel_floor.html에서 먼저 승인받은 뒤 반영할 것 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/quiple/galmuri@latest/dist/galmuri.css">
<style>
:root{
  --bg:#0b0f1a; --floor1:#8b5a2b; --floor2:#6b4423; --floor-line:#4a2f18;
  --panel:#f5ecd7; --ink:#1a1a1a; --accent:#ffd24d; --up:#3ddc71; --down:#ff5c5c;
  --wall:#2a2440; --wallLine:#3d3560;
}
*{box-sizing:border-box; -webkit-font-smoothing:none}
html,body{margin:0;background:var(--bg);color:var(--panel);
  font-family:'Galmuri11',ui-monospace,'Courier New',monospace;
  letter-spacing:.3px; overflow-x:hidden}
img,svg{image-rendering:pixelated; image-rendering:crisp-edges}
.phone{max-width:430px;margin:0 auto;min-height:100vh;background:var(--bg);
  border-left:1px solid #000;border-right:1px solid #000;position:relative}

.topbar{display:flex;justify-content:space-between;align-items:center;
  padding:8px 12px;background:#000;border-bottom:3px solid var(--accent);font-size:11px}
.topbar .dot{display:inline-block;width:8px;height:8px;background:var(--accent);
  margin-right:5px;animation:blink 1.6s steps(2) infinite}
@keyframes blink{50%{opacity:.25}}

.chart-panel{margin:10px;border:3px solid #000;background:#000;position:relative;
  box-shadow:4px 4px 0 rgba(0,0,0,.5)}
.chart-head{display:flex;justify-content:space-between;padding:6px 8px;
  background:var(--accent);color:#000;font-size:10px;font-weight:700}
.chart-body{padding:8px}
.chart-price{font-size:22px;font-weight:700;color:#fff}
.chart-pct{font-size:12px;font-weight:700}
.chart-pct.down{color:var(--down)} .chart-pct.up{color:var(--up)}
.chart-svg{width:100%;height:64px;margin-top:6px}
.chart-legend{display:flex;gap:12px;font-size:9px;color:#9aa;margin-top:4px}
.chart-legend b{color:#fff}
.worldclock{display:flex;gap:10px;padding:6px 8px;border-top:2px dashed #333;
  font-size:9px;color:#8a8;justify-content:space-between}

.power-panel{margin:10px;border:3px solid #000;background:var(--wall);
  display:flex;align-items:center;gap:10px;padding:8px 10px;
  box-shadow:4px 4px 0 rgba(0,0,0,.5)}
.gauge{width:44px;height:44px;border-radius:50%;position:relative;flex:none;
  background:conic-gradient(var(--gc) calc(var(--gp)*1%), #1a1a2e 0)}
.gauge::after{content:'';position:absolute;inset:6px;background:var(--wall);border-radius:50%}
.gauge span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
  font-size:9px;font-weight:700;color:#fff}
.power-txt{font-size:10px;line-height:1.7;color:#cfc}
.power-txt b{color:#fff}

.floor-title{margin:16px 10px 6px;font-size:12px;letter-spacing:2px;color:var(--accent);
  display:flex;align-items:center;gap:8px}
.floor-title::before,.floor-title::after{content:'';flex:1;height:2px;background:#333}

.office{margin:0 10px 6px;border:3px solid #000;position:relative;
  background:repeating-linear-gradient(90deg,var(--floor1) 0 26px,var(--floor2) 26px 52px);
  box-shadow:4px 4px 0 rgba(0,0,0,.5);padding:14px 8px 10px;overflow:hidden}
.office::before{content:'';position:absolute;left:0;right:0;top:0;height:100%;
  background-image:repeating-linear-gradient(0deg,transparent 0 30px,var(--floor-line) 30px 31px);
  pointer-events:none;opacity:.5}
.desks{display:flex;justify-content:space-around;gap:4px}
.desk{display:flex;flex-direction:column;align-items:center;width:23%;cursor:pointer;
  position:relative}
.sprite-wrap{position:relative}
.sprite{animation:idle 1.8s ease-in-out infinite}
.desk:nth-child(2n) .sprite{animation-delay:.3s}
.desk:nth-child(3n) .sprite{animation-delay:.6s}
@keyframes idle{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
.online-dot{position:absolute;top:-2px;right:6px;width:6px;height:6px;background:var(--up);
  border:1px solid #000;animation:blink 1.4s steps(2) infinite}
.nameplate{margin-top:4px;font-size:9px;color:#fff;text-align:center;font-weight:700}
.roletag{font-size:7px;background:#000;color:var(--accent);padding:1px 4px;margin-top:2px;
  border:1px solid var(--accent)}
.status{margin-top:5px;font-size:7.5px;color:#fff;background:rgba(0,0,0,.72);
  border:1px solid #000;padding:3px 4px;text-align:center;min-height:22px;line-height:1.35;
  max-width:100%;word-break:keep-all}
.status .car{display:inline-block;width:5px;height:8px;background:#fff;margin-left:2px;
  animation:blink .8s steps(2) infinite;vertical-align:-1px}

.research-office{padding-bottom:16px}
.table-wrap{display:flex;justify-content:center;align-items:flex-end;gap:0;position:relative;
  margin-top:2px}
.side{width:38%;display:flex;flex-direction:column;align-items:center;cursor:pointer}
.vs{font-size:16px;color:var(--accent);padding:0 6px 18px;font-weight:700}
.argtag{font-size:8px;padding:2px 6px;border:2px solid #000;font-weight:700;margin-top:3px}
.argtag.bull{background:var(--up);color:#02310f}
.argtag.bear{background:var(--down);color:#3a0000}
.argbox{margin-top:5px;font-size:7.5px;background:var(--panel);color:#000;border:2px solid #000;
  padding:4px;line-height:1.35;position:relative;min-height:30px}
.argbox::after{content:'';position:absolute;top:-7px;left:14px;border:5px solid transparent;
  border-bottom-color:#000}
.argbox::before{content:'';position:absolute;top:-4px;left:16px;border:4px solid transparent;
  border-bottom-color:var(--panel);z-index:1}
.ace-row{display:flex;flex-direction:column;align-items:center;margin-top:10px}
.ace-row .status{margin-top:4px}

.sheet-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:40;
  opacity:0;pointer-events:none;transition:opacity .18s}
.sheet-backdrop.open{opacity:1;pointer-events:auto}
.bottom-sheet{position:fixed;left:0;right:0;bottom:0;max-width:430px;margin:0 auto;
  background:var(--panel);color:#000;border-top:3px solid #000;z-index:41;
  padding:6px 16px 22px;max-height:66vh;overflow-y:auto;
  transform:translateY(100%);transition:transform .22s steps(6,end)}
.bottom-sheet.open{transform:translateY(0)}
.sheet-grip{width:36px;height:5px;background:#0003;margin:8px auto 10px;border-radius:0}
.bottom-sheet .who{font-size:11px;color:#5a8a5a;font-weight:700;margin-bottom:8px;
  display:flex;justify-content:space-between;align-items:center;border-bottom:2px dashed #0002;
  padding-bottom:6px}
.bottom-sheet .who .roleTiny{color:#888;font-weight:400;font-size:9px}
.bottom-sheet .close{cursor:pointer;color:#a33;font-weight:700;font-size:10px}
.bottom-sheet .body{font-size:11px;line-height:1.75;white-space:pre-wrap}

.ticker-wrap{position:sticky;bottom:0;background:#000;border-top:3px solid var(--accent);
  overflow:hidden;padding:6px 0;margin-top:14px}
.ticker-track{display:inline-flex;white-space:nowrap;animation:marquee 22s linear infinite}
.ticker-track span{padding:0 16px;font-size:10px;font-weight:700}
.ticker-track .up{color:var(--up)} .ticker-track .down{color:var(--down)}
@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}

.hint{text-align:center;font-size:8px;color:#556;padding:8px 20px 4px;line-height:1.6}
</style>
</head>
<body>
<div class="phone" id="app">

  <div class="topbar">
    <span><span class="dot"></span>PIXEL TRADING FLOOR</span>
    <span id="clockNow">--:--</span>
  </div>

  <div class="chart-panel">
    <div class="chart-head"><span>코스피 KOSPI</span><span>실시간(15~20분 지연)</span></div>
    <div class="chart-body">
      <div style="display:flex;justify-content:space-between;align-items:baseline">
        <span class="chart-price" id="cp-price">--</span>
        <span class="chart-pct down" id="cp-pct">--</span>
      </div>
      <svg class="chart-svg" viewBox="0 0 200 50" preserveAspectRatio="none" id="cp-svg"></svg>
      <div class="chart-legend"><span>MA20 <b id="ma20">--</b></span><span>MA60 <b id="ma60">--</b></span></div>
    </div>
    <div class="worldclock">
      <span>NYC <b id="tz-nyc">--:--</b></span>
      <span>LDN <b id="tz-ldn">--:--</b></span>
      <span>SEL <b id="tz-sel">--:--</b></span>
    </div>
  </div>

  <div class="power-panel" id="powerPanel"></div>

  <h2 class="floor-title">애널리스트 팀</h2>
  <div class="office">
    <div class="desks" id="analystFloor"></div>
  </div>

  <h2 class="floor-title">리서치 팀</h2>
  <div class="office research-office">
    <div class="table-wrap" id="researchFloor"></div>
    <div class="ace-row" id="aceRow"></div>
  </div>

  <p class="hint">캐릭터를 탭하면 실제 분석 내용이 아래에서 올라옵니다 · 갱신 <span id="genTime"></span> KST</p>

  <div class="ticker-wrap"><div class="ticker-track" id="tickerTrack"></div></div>

</div>

<div class="sheet-backdrop" id="sheetBackdrop" onclick="closeSheet()"></div>
<div class="bottom-sheet" id="bottomSheet">
  <div class="sheet-grip"></div>
  <div class="who">
    <span id="sheetWho">—</span>
    <span class="close" onclick="closeSheet()">✕ 닫기</span>
  </div>
  <div class="body" id="sheetBody"></div>
</div>

<script>
const DATA = __DATA_JSON__;

function esc(t){ return (t||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

const CHAR_GRID = [
  "...HHHH...",
  "...HHHH...",
  "...SSSS...",
  "...SSSS...",
  "..AABBAA..",
  "..ABBBBA..",
  "..ABBBBA..",
  "..ABBBBA..",
  "...BBBB...",
  "...PPPP...",
  "..PP..PP..",
  "..PP..PP..",
];
const CHAR_GRID_WIDE = CHAR_GRID.slice(0, 9).concat([
  "..PPPPPP..",
  ".PP....PP.",
  ".PP....PP.",
]);
function pixelChar(cfg, size){
  const cell = size||5, cols = 10;
  const grid = cfg.stance === "wide" ? CHAR_GRID_WIDE : CHAR_GRID;
  const rows = grid.length;
  const colorOf = c => ({H:cfg.hair, S:"#f0c090", A:"#f0c090", B:cfg.body, P:cfg.pants}[c]);
  let rects = "";
  grid.forEach((row,y)=>{
    for(let x=0;x<cols;x++){
      const c = row[x];
      if(c==="."||c===" ") continue;
      rects += `<rect x="${x*cell}" y="${y*cell}" width="${cell}" height="${cell}" fill="${colorOf(c)}"/>`;
    }
  });
  if(cfg.glasses){
    rects += `<rect x="${3*cell}" y="${2*cell}" width="${cell}" height="${cell}" fill="#111"/>`;
    rects += `<rect x="${6*cell}" y="${2*cell}" width="${cell}" height="${cell}" fill="#111"/>`;
    rects += `<rect x="${4*cell}" y="${2*cell}" width="${2*cell}" height="1.5" fill="#111"/>`;
  } else {
    rects += `<rect x="${3*cell}" y="${2*cell}" width="${cell*.6}" height="${cell*.6}" fill="#111"/>`;
    rects += `<rect x="${6*cell}" y="${2*cell}" width="${cell*.6}" height="${cell*.6}" fill="#111"/>`;
  }
  if(cfg.hairStyle === "ponytail"){
    rects += `<rect x="${9*cell}" y="0" width="${cell}" height="${3*cell}" fill="${cfg.hair}"/>`;
    rects += `<rect x="${9.5*cell}" y="${2.5*cell}" width="${cell*.7}" height="${cell*1.5}" fill="${cfg.hair}"/>`;
  } else if(cfg.hairStyle === "parted"){
    rects += `<rect x="${4.5*cell}" y="0" width="${cell*.5}" height="${cell*.7}" fill="#00000030"/>`;
  }
  if(cfg.cap){
    rects += `<rect x="${2*cell}" y="0" width="${6*cell}" height="${cell*.8}" fill="${cfg.body}"/>`;
    rects += `<rect x="${6.5*cell}" y="${cell*.2}" width="${cell*1.2}" height="${cell*.4}" fill="${cfg.hair}"/>`;
  }
  if(cfg.belt){
    rects += `<rect x="${2*cell}" y="${8*cell}" width="${6*cell}" height="${cell*.5}" fill="#3a2a10"/>`;
    rects += `<rect x="${4.6*cell}" y="${7.9*cell}" width="${cell*.8}" height="${cell*.7}" fill="#c99a2e"/>`;
  }
  if(cfg.bowtie){
    rects += `<rect x="${4*cell}" y="${4.2*cell}" width="${cell*.6}" height="${cell*.6}" fill="#c0453f"/>`;
    rects += `<rect x="${5.4*cell}" y="${4.2*cell}" width="${cell*.6}" height="${cell*.6}" fill="#c0453f"/>`;
  }
  const w = (cfg.hairStyle==="ponytail" ? cols+1 : cols)*cell, h = rows*cell;
  return `<svg class="sprite" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${rects}</svg>`;
}

function renderAnalysts(){
  const wrap = document.getElementById("analystFloor");
  wrap.innerHTML = DATA.analysts.map((a,i)=>`
    <div class="desk" onclick="openBubble('analyst', ${i})">
      <div class="sprite-wrap">${pixelChar(a)}<span class="online-dot"></span></div>
      <div class="nameplate">${esc(a.name)}</div>
      <div class="roletag">${esc(a.role)}</div>
      <div class="status">${esc(a.status)}<span class="car"></span></div>
    </div>`).join("");
}

function renderResearch(){
  const wrap = document.getElementById("researchFloor");
  const b = DATA.research.bull, r = DATA.research.bear;
  wrap.innerHTML = `
    <div class="side" onclick="openBubble('research','bull')">
      ${pixelChar({hair:"#1a1a1a",body:"#2f8f5b",pants:"#1c5a38",glasses:false,stance:"wide"})}
      <div class="nameplate">${esc(b.name)}</div>
      <span class="argtag bull">${esc(b.tag)}</span>
      <div class="argbox">${esc(b.text.slice(0,34))}…</div>
    </div>
    <div class="vs">VS</div>
    <div class="side" onclick="openBubble('research','bear')">
      ${pixelChar({hair:"#1a1a1a",body:"#c0453f",pants:"#7a2420",glasses:true})}
      <div class="nameplate">${esc(r.name)}</div>
      <span class="argtag bear">${esc(r.tag)}</span>
      <div class="argbox">${esc(r.text.slice(0,34))}…</div>
    </div>`;
  const ace = DATA.research.ace;
  document.getElementById("aceRow").innerHTML = `
    ${pixelChar({hair:"#c99a2e",body:"#1a1a2e",pants:"#000",glasses:false,bowtie:true},6)}
    <div class="nameplate">${esc(ace.name)} <span style="color:#888;font-weight:400">· 수석</span></div>
    <div class="status" onclick="openBubble('ace')">${esc(ace.status)}<span class="car"></span></div>`;
}

function renderChart(){
  const c = DATA.chart;
  if(c.price == null){
    document.getElementById("cp-price").textContent = "수집 실패";
    return;
  }
  const pts = c.points.length ? c.points : [c.price];
  const lo = Math.min(...pts), hi = Math.max(...pts), rng = (hi-lo)||1;
  const path = pts.map((v,i)=>`${(i/Math.max(1,pts.length-1)*200).toFixed(1)},${(46-(v-lo)/rng*40).toFixed(1)}`).join(" ");
  document.getElementById("cp-svg").innerHTML =
    `<polyline points="${path}" fill="none" stroke="#3ddc71" stroke-width="2"/>`;
  document.getElementById("cp-price").textContent = c.price.toLocaleString(undefined,{minimumFractionDigits:2});
  const pctEl = document.getElementById("cp-pct");
  const up = (c.pct||0) >= 0;
  pctEl.className = "chart-pct " + (up?"up":"down");
  pctEl.textContent = c.pct==null ? "--" : (up?"▲ ":"▼ ") + Math.abs(c.pct).toFixed(2) + "%";
  document.getElementById("ma20").textContent = c.ma20!=null ? c.ma20.toLocaleString() : "—";
  document.getElementById("ma60").textContent = c.ma60!=null ? c.ma60.toLocaleString() : "—";
}

function renderPower(){
  const el = document.getElementById("powerPanel");
  const p = DATA.power;
  if(!p){
    el.innerHTML = `<div class="power-txt">⚡ 전력 관제 · <span style="color:#888">키 승인 대기 중…</span></div>`;
    return;
  }
  const color = p.rate<10 ? "#ff5c5c" : (p.rate<15 ? "#ffd24d" : "#3ddc71");
  el.innerHTML = `
    <div class="gauge" style="--gp:${Math.min(100,p.rate*5)};--gc:${color}"><span>${p.rate}%</span></div>
    <div class="power-txt">⚡ 전력 관제 · <b>${Math.round(p.demand).toLocaleString()}MW</b> 현재수요<br>
      공급예비율 <b>${p.rate}%</b> · 공급능력 ${Math.round(p.supply).toLocaleString()}MW</div>`;
}

function renderTicker(){
  const row = DATA.tickers.map(t=>{
    const up = t.pct>=0;
    return `<span class="${up?'up':'down'}">${esc(t.name)} ${esc(t.value)} ${up?'▲':'▼'}${Math.abs(t.pct).toFixed(2)}%</span>`;
  }).join("");
  document.getElementById("tickerTrack").innerHTML = row + row;
}

function openSheet(who, roleTiny, body){
  document.getElementById("sheetWho").innerHTML = `${esc(who)} <span class="roleTiny">· ${esc(roleTiny)}</span>`;
  document.getElementById("sheetBody").textContent = body;
  document.getElementById("bottomSheet").classList.add("open");
  document.getElementById("sheetBackdrop").classList.add("open");
}
function closeSheet(){
  document.getElementById("bottomSheet").classList.remove("open");
  document.getElementById("sheetBackdrop").classList.remove("open");
}
function openBubble(kind, key){
  if(kind==="analyst"){
    const a = DATA.analysts[key];
    openSheet(a.name, a.role, a.detail);
  } else if(kind==="ace"){
    openSheet(DATA.research.ace.name, "수석 · 오늘의 총평", DATA.research.ace.detail);
  } else {
    const r = key==="bull" ? DATA.research.bull : DATA.research.bear;
    openSheet(r.name, r.tag, r.text);
  }
}

function tickClock(){
  const now = new Date();
  document.getElementById("clockNow").textContent =
    now.toLocaleTimeString('ko-KR',{hour:'2-digit',minute:'2-digit',hour12:false});
  const opt = tz => new Date().toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:tz});
  try{
    document.getElementById("tz-nyc").textContent = opt("America/New_York");
    document.getElementById("tz-ldn").textContent = opt("Europe/London");
    document.getElementById("tz-sel").textContent = opt("Asia/Seoul");
  }catch(e){}
}

document.getElementById("genTime").textContent = (DATA.time||"").slice(11,16);
renderAnalysts(); renderResearch(); renderChart(); renderPower(); renderTicker();
tickClock(); setInterval(tickClock, 30000);
</script>
</body>
</html>
"""


def main():
    data = build_data()
    html = PIXEL_TEMPLATE.replace("__DATA_JSON__", json.dumps(data, ensure_ascii=False))
    os.makedirs("docs", exist_ok=True)
    with open("docs/index.html", "w", encoding="utf-8") as f:
        f.write(html)
    n_analysts = len(data["analysts"])
    chart_ok = data["chart"]["price"] is not None
    print(f"docs/index.html 생성 완료 — 애널리스트 {n_analysts}명, "
          f"차트 {'정상' if chart_ok else '수집실패'}, 전력 {'있음' if data['power'] else '대기'}, "
          f"티커 {len(data['tickers'])}종")


if __name__ == "__main__":
    main()
