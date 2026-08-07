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


def gov_key():
    """data.go.kr 인증키를 '디코딩 형태'로 통일해서 돌려준다.

    공공데이터포털은 같은 키를 두 형태로 준다: 인코딩(%2B…)과 디코딩(+…). requests가
    params를 다시 URL-인코딩하므로, 인코딩 형태를 그대로 넘기면 %가 %25로 **이중 인코딩**되어
    서버가 "Unauthorized"를 반환한다(JSON이 아니라 평문이라 JSONDecodeError로 나타남).

    ⚠️ 진짜 원인은 따로 있었다 (2026-07-30 클라우드 진단으로 확정):
    GitHub Secrets의 키가 로컬(.env)보다 **1글자 길었다**(89 vs 88). 형태는 같은데(+, = 있고
    % 없음) 길이만 다름 → 보이지 않는 문자(BOM ﻿ 등)가 섞인 것. `.strip()`은 BOM을
    공백으로 치지 않아 못 지운다. 그래서 서버가 'Unauthorized'를 반환했고, 클라우드 전력이
    **계속** 죽어 있었다(publish 로그가 매번 '전력 대기' — 아이폰 전력 패널이 내내 빈 이유).
    이 프로젝트는 같은 사고를 이미 겪었다 — gemini_keys._clean()이 "PowerShell로 시크릿
    등록 시 파이프에 BOM이 섞이는 결함" 때문에 만들어진 함수다. 같은 방식으로 방어한다."""
    k = os.environ.get("DATA_GO_KR_KEY", "")
    for ch in ("﻿", "​", "‌", "‍", "\xa0"):   # BOM·제로폭·NBSP 제거
        k = k.replace(ch, "")
    k = k.strip()
    if "%" in k:                       # 인코딩 형태 → 디코딩해서 requests가 한 번만 인코딩하게
        from urllib.parse import unquote
        k = unquote(k)
    return k


_gov_warned = False


def gov_check(resp):
    """공공데이터 응답이 '실패'인지 판정하고 **사유를 한 번 크게 알린다**.

    이 API는 실패해도 HTTP 200에 본문으로 사유를 담아 보낸다. 기존 코드는 예외로만 처리해
    조용히 None을 반환했고, 그래서 화면엔 '전력 대기'만 뜨고 **왜인지 알 수 없었다**.
    2026-08-05에 키가 무효화("등록되지 않은 서비스키입니다", resultCode 30)됐을 때도
    로그만 보고는 원인을 짚을 수 없었다 — 사용자가 조치할 수 있게 사유를 노출한다."""
    global _gov_warned
    txt = (resp.text or "")[:300]
    for marker, why in (("등록되지 않은 서비스키", "키 미등록/만료 — data.go.kr에서 서비스 신청·키 재발급 필요"),
                        ("SERVICE_KEY_IS_NOT_REGISTERED", "키 미등록/만료 — 재발급 필요"),
                        ("SERVICE_KEY_IS_NULL", "키가 비어 있음 — .env/Secrets 확인"),
                        ("LIMITED_NUMBER_OF_SERVICE_REQUESTS", "일일 호출 한도 초과 — 내일 재시도"),
                        ("Unauthorized", "인증 거부 — 키 형식(BOM·인코딩) 또는 등록 상태 확인")):
        if marker in txt:
            if not _gov_warned:
                print(f"  ⚠️ 공공데이터 전력 API 실패: {why}")
                _gov_warned = True
            return False
    return True


def fetch_power_mix():
    """발전원 믹스 — 아이폰 관제 패널의 '현재수요' 근거. 키 없거나 실패하면 None(가짜 숫자 금지)."""
    key = gov_key()
    if not key:
        return None
    try:
        today = datetime.datetime.now(KST).strftime("%Y%m%d")
        r = requests.get("https://apis.data.go.kr/B552115/PwrAmountByGen/getPwrAmountByGen",
                         params={"serviceKey": key, "pageNo": 1, "numOfRows": 288,
                                 "dataType": "json", "baseDate": today}, headers=UA, timeout=20)
        if not gov_check(r):
            return None
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
    key = gov_key()
    if not key:
        return None
    try:
        r = requests.get("https://apis.data.go.kr/B552115/sukub5mMaxDatetime2/getSukub5mMaxDatetime2",
                         params={"serviceKey": key, "pageNo": 1, "numOfRows": 1, "dataType": "json"},
                         headers=UA, timeout=20)
        if not gov_check(r):
            return None
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
    key = gov_key()
    if not key:
        return None
    try:
        r = requests.get(
            "https://apis.data.go.kr/B552115/SmpWithForecastDemand/getSmpWithForecastDemand",
            params={"serviceKey": key, "pageNo": 1, "numOfRows": 100, "dataType": "json"},
            headers=UA, timeout=20)
        if not gov_check(r):
            return None
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


def _mobile_payload(series=None, power=None, smp=None):
    """폰 탭에 실을 데이터. 실패하면 그 섹션만 빠지고 페이지는 정상 생성된다."""
    # docs/.nojekyll — 깃허브 페이지스가 Jekyll로 사이트를 빌드하지 않고 파일을 그대로 내보내게 한다.
    # 이게 없어서 2026-08-06 11:48 UTC부터 Pages 빌드가 계속 실패했고(사이트가 옛 커밋에 멈춤),
    # 이 사이트는 정적 파일뿐이라 Jekyll이 할 일이 애초에 없다. 지워지면 같은 사고가 재발한다.
    try:
        _nj = os.path.join(os.path.dirname(os.path.abspath(__file__)), "docs", ".nojekyll")
        if not os.path.exists(_nj):
            os.makedirs(os.path.dirname(_nj), exist_ok=True)
            open(_nj, "w").close()
            print("  · docs/.nojekyll 복구 — Jekyll 빌드 우회")
    except OSError as e:
        print(f"  ⚠️ .nojekyll 생성 실패: {e}")

    try:
        import mobile_data
        out = mobile_data.build(series, power, smp)
        try:
            n = mobile_data.write_meetings(os.path.join(os.path.dirname(
                os.path.abspath(__file__)), "docs", "m"))
            print(f"  · 지난 회의 녹취 {len(n)}건 (탭하면 받아 가는 방식)")
        except Exception as e:
            print(f"  ⚠️ 지난 회의 녹취 저장 실패(목록만 표시): {type(e).__name__}: {e}")
        return out
    except Exception as e:
        print(f"  ⚠️ 폰 payload 생성 실패(탭 생략): {type(e).__name__}: {e}")
        return {}


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

    def ma(closes, n, dec=1):
        """이동평균. 자릿수는 지표마다 다르다 — 천연가스(2.663)를 소수 1자리로 반올림하면
        MA60이 '3'으로 찍혀 아무 정보도 주지 못한다. 지표의 표시 자릿수를 그대로 쓴다."""
        return round(sum(closes[-n:]) / n, dec) if len(closes) >= n else None

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

    # ---- 하단 티커 + 지표 원본 (코스피는 히어로 차트에서 이미 받았다) ----
    # 종가는 6개월치로 한 번만 받아 티커·지표카드·관계망이 **같은 데이터를 나눠 쓴다**.
    # 예전엔 티커가 1개월, 관계망이 6개월을 따로 받아 심볼당 2번씩 긁고 있었다.
    tickers, series = [], {}
    for _id, name, sym, unit, dec in INDICATORS:
        if _id == "kospi":
            price, pct, closes = k_price, k_pct, k_closes
        else:
            try:
                price, pct, closes = fetch_yahoo(sym, rng="6mo")
            except Exception:
                continue
            tickers.append({"name": name, "value": f"{price:,.{dec}f}", "pct": pct or 0})
        if price is None:
            continue
        series[_id] = {"name": name, "unit": unit, "value": f"{price:,.{dec}f}",
                       "pct": pct or 0, "closes": closes or [], "dec": dec,
                       "ma20": ma(closes or [], 20, dec), "ma60": ma(closes or [], 60, dec)}

    smp = None
    try:
        smp = fetch_smp()
    except Exception:
        pass

    # ---- 가상계좌 모의투자 현황 (아이폰에서도 봐야 하므로 공개 페이지에 싣는다) ----
    # PC 대시보드는 localhost에만 떠 있어 폰에서 아예 열리지 않는다. 실험을 폰에서 보려면
    # 이 공개 페이지가 유일한 길이다. 데이터가 없으면 lab=None으로 두고 화면이 알아서 숨긴다.
    lab = None
    try:
        import portfolio as _pf, universe as _uv
        rep = _pf.report()
        if rep.get("equity") is not None:
            px, fx = {}, None
            try:
                px_raw, fx = _uv.fetch_prices()
                px = {k: v["px"] for k, v in px_raw.items()}
            except Exception:
                pass
            _pfd = _pf.load()
            pos, _tot = _pf.positions(_pfd, px, fx) if (px and fx) else ([], 0)
            cv = _pf.curve(60)
            # ⚠️ report()의 평가액은 **정산 시점**(어제 종가) 값이다. 아래 보유 종목 손익은
            # 지금 시세로 계산한다. 그대로 두면 머리글은 -0.06%인데 종목은 -2.3%, -3.7%로
            # 서로 안 맞아 보인다. 머리글도 지금 시세로 맞추고, 정산 시점 값은 따로 적는다.
            live_eq = _pf.equity(_pfd, px, fx) if (px and fx) else None
            settled_eq = rep["equity"]
            # 예약 주문은 다음 거래일 종가에 체결된다. 이걸 안 보여 주면 화면에는
            # "보유 종목이 없습니다"만 남아, 왜 비어 있는지 알 수 없다.
            _pd = (_pfd or {}).get("pending") or {}
            _names = {u["id"]: u["name"] for u in _uv.UNIVERSE}
            pending = None
            if _pd.get("weights"):
                pending = {"date": _pd.get("date"),
                           "orders": [{"name": _names.get(k, k), "w": round(v * 100)}
                                      for k, v in _pd["weights"].items() if v],
                           "equity": (_pd.get("forecast") or {}).get("equity")}
            _eq = live_eq if live_eq else settled_eq
            lab = {"capital": rep["capital"], "equity": round(_eq),
                   "return_pct": round((_eq / rep["capital"] - 1) * 100, 2),
                   "profit": round(_eq - rep["capital"]),
                   "live": bool(live_eq),
                   "settled_eq": round(settled_eq), "settled_date": rep.get("last_date"),
                   "days": rep["days"], "mdd": rep["mdd_pct"],
                   "mae": rep.get("forecast_mae_pct"), "band": rep.get("band_hit"),
                   "review_due": rep.get("review_due"), "pending": pending,
                   "positions": [{"name": p_["name"], "shares": p_["shares"],
                                  "weight": p_["weight"], "pl": p_["pl_pct"]} for p_ in pos],
                   "curve": [[r["date"][5:], r["equity"]] for r in cv],
                   "last": cv[-1] if cv else None}
    except Exception as e:
        print(f"  ⚠️ 가상계좌 현황 수집 실패(화면에서 생략): {type(e).__name__}: {e}")

    return {
        "time": datetime.datetime.now(KST).isoformat(timespec="minutes"),
        "chart": chart, "power": power, "analysts": analysts,
        "research": research, "tickers": tickers, "lab": lab,
        # 폰에서도 PC와 같은 정보를 볼 수 있게 — 지표·덱·팀·실험·토론방·트렌드·관계망·시스템.
        # 원본이 커서(녹취 11MB 등) mobile_data가 화면 분량만 잘라 담는다.
        "m": _mobile_payload(series, power, smp),
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
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<!-- 테마별 서체. 링크는 한 번만 걸지만 실제 폰트 파일은 그 테마가 켜졌을 때만 내려받는다. -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Hahmlet:wght@300;600;800&family=IBM+Plex+Sans+KR:wght@400;600&family=IBM+Plex+Mono:wght@400;600&family=Song+Myung&family=Gowun+Batang:wght@400;700&display=swap">
<script>
/* 테마를 첫 페인트 전에 입힌다 — 나중에 입히면 기본 테마가 한 번 번쩍이고 바뀐다. */
(function(){try{var t=localStorage.getItem('ptheme');
  document.documentElement.setAttribute('data-theme', t||'pixel');}catch(e){
  document.documentElement.setAttribute('data-theme','pixel');}})();
</script>
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
/* 세로 flex로 두는 이유: 티커는 sticky bottom인데, 내용이 짧은 탭(브리핑덱 등)에서는
   페이지가 스크롤되지 않아 sticky가 걸리지 않고 티커가 화면 중간에 떠 버렸다.
   margin-top:auto로 남는 공간을 티커 위가 흡수하게 하면 짧은 탭에서도 바닥에 붙는다. */
.phone{max-width:430px;margin:0 auto;min-height:100vh;background:var(--bg);
  border-left:1px solid #000;border-right:1px solid #000;position:relative;
  display:flex;flex-direction:column}

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
/* ===== 폰 탭 =====
   PC 대시보드의 11개 기능을 폰에서도 볼 수 있게 한 구조. 정적 페이지라 서버 왕복이 없고,
   전부 미리 담긴 데이터를 보여주기만 한다(그래서 즉시 전환된다). */
#ptabs{position:sticky;top:0;z-index:40;display:flex;gap:2px;overflow-x:auto;
  scrollbar-width:none;background:#181410;border-bottom:2px solid var(--t-line);padding:0 6px}
#ptabs::-webkit-scrollbar{display:none}
#ptabs .pt{flex:none;padding:12px 13px;font-size:.72rem;letter-spacing:.5px;color:var(--t-dim);
  cursor:pointer;border-bottom:3px solid transparent;white-space:nowrap;min-height:44px}
#ptabs .pt.on{color:var(--t-accent);border-bottom-color:var(--t-accent)}
.psec{display:none} .psec.on{display:block}
.pcard{background:var(--t-card);border:1px solid var(--t-line);border-radius:10px;padding:12px;margin:10px 0}
.pcard h4{font-size:.78rem;color:var(--t-accent);margin-bottom:8px;letter-spacing:.5px}
.pcard .sub{font-size:.66rem;opacity:.55;font-weight:400}
.prow{display:flex;gap:8px;align-items:baseline;font-size:.74rem;padding:6px 0;
  border-bottom:1px solid rgba(255,255,255,.05)}
.prow:last-child{border-bottom:0}
.prow .nm{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.prow .vv{font-variant-numeric:tabular-nums;opacity:.8;flex:none}
.pbar{height:6px;background:rgba(255,255,255,.08);border-radius:3px;overflow:hidden;flex:none;width:70px}
.pbar i{display:block;height:100%;background:var(--t-accent)}

/* --- 지표 카드 --- */
#pchips{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;padding:10px 2px 2px}
#pchips::-webkit-scrollbar{display:none}
#pchips .chip{flex:none;padding:9px 14px;min-height:40px;display:flex;align-items:center;
  font-size:.72rem;border:1px solid #4a3c2c;border-radius:20px;color:var(--t-dim);background:var(--t-card);
  cursor:pointer}
#pchips .chip.on{color:#181410;background:var(--t-accent);border-color:var(--t-accent);font-weight:700}
.icard{background:var(--t-card);border:1px solid var(--t-line);border-radius:10px;padding:11px 12px;margin:8px 0;
  cursor:pointer}
.icard .top{display:flex;justify-content:space-between;align-items:baseline;gap:8px}
.icard .inm{font-size:.76rem;color:var(--t-text);min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.icard .ival{font-size:.86rem;font-variant-numeric:tabular-nums;flex:none}
.icard .ipct{font-size:.7rem;flex:none;font-variant-numeric:tabular-nums}
.icard .ima{font-size:.62rem;opacity:.5;margin-top:3px;font-variant-numeric:tabular-nums}
.icard .iai{font-size:.68rem;line-height:1.5;color:var(--t-dim);margin-top:7px;
  display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
/* 배지는 절대 잘리면 안 된다. .inm 안에 넣었더니 ellipsis에 먹혀 '근…'으로 잘렸다 —
   형제로 빼고 flex:none을 준다. */
.icard .flag{font-size:.58rem;border:1px solid var(--t-up);color:var(--t-up);border-radius:4px;
  padding:1px 5px;flex:none;white-space:nowrap;align-self:center}
.ppos{color:var(--t-up)} .pneg{color:var(--t-down)}

/* --- 브리핑덱: 가로 스와이프 --- */
#pdeck{display:flex;gap:10px;overflow-x:auto;scroll-snap-type:x mandatory;
  scrollbar-width:none;padding:12px 2px}
#pdeck::-webkit-scrollbar{display:none}
/* 카드 높이를 px로 못박으면 짧은 글일 땐 카드 안이 비고, 화면엔 카드 밑으로 큰 여백이 남는다.
   화면 높이에 비례시키되, 글이 짧아도 허전하지 않게 **세로 가운데**에 놓는다
   (46vh로 뒀더니 3줄짜리 카드의 75%가 빈칸이었다). */
#pdeck .dcard{flex:none;width:82vw;max-width:340px;scroll-snap-align:center;
  min-height:200px;justify-content:center;
  background:var(--t-card);border:1px solid var(--t-line);border-left:4px solid var(--t-accent);border-radius:12px;
  padding:14px;display:flex;flex-direction:column}
#pdeck .dcard.watch{border-left-color:#3ddc71} #pdeck .dcard.news{border-left-color:var(--t-down)}
#pdeck .dcard.red{border-left-color:var(--t-up)} #pdeck .dcard.mover{border-left-color:#c99a2e}
#pdeck .dt{font-size:.74rem;color:var(--t-accent);font-weight:700;margin-bottom:8px}
#pdeck .dx{font-size:.8rem;line-height:1.7;color:#e2d7c2;word-break:keep-all}
#pdeck .dn{font-size:.62rem;opacity:.45;padding-top:12px}
/* 카드 위치 점 — 몇 장 중 몇 번째인지, 어디로 밀면 되는지 알려 준다 */
#pdots{display:flex;gap:6px;justify-content:center;padding:6px 0 2px;flex-wrap:wrap}
#pdots i{width:7px;height:7px;border-radius:50%;background:var(--t-line);display:block;transition:background .15s}
#pdots i.on{background:var(--t-accent);transform:scale(1.25)}
/* 카드 목차 — 10장을 다 밀어보지 않아도 무슨 내용이 있는지 한눈에 보이고,
   누르면 그 카드로 간다. 덱 아래 남던 빈 공간을 실제 기능으로 채운다. */
#pindex{margin:6px 10px 0}
#pindex .ix{display:flex;gap:8px;align-items:center;min-height:42px;padding:4px 8px;
  font-size:.72rem;color:var(--t-dim);border-bottom:1px solid rgba(255,255,255,.05);cursor:pointer}
#pindex .ix:last-child{border-bottom:0}
#pindex .ix.on{color:var(--t-accent)}
#pindex .ix .no{flex:none;width:20px;opacity:.45;font-variant-numeric:tabular-nums}
#pindex .ix .tx{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}

/* --- 팀 --- */
.tcard{background:var(--t-card);border:1px solid var(--t-line);border-radius:10px;padding:12px;margin:8px 0}
.tcard .th{display:flex;align-items:center;gap:8px}
/* 아바타 글자를 배경색 위에 얹으면 요원 색에 따라 명암비가 3.45까지 떨어졌다.
   진한 바탕에 흰 글자로 고정하고, 요원 색은 테두리로 표시한다. */
.tcard .tav{width:32px;height:32px;border-radius:50%;flex:none;display:flex;align-items:center;
  justify-content:center;font-size:.7rem;font-weight:700;color:#fff;background:#1a1512 !important;
  border:2px solid currentColor;box-shadow:inset 0 0 0 2px #1a1512}
.tcard .tnm{font-size:.78rem;color:var(--t-text)} .tcard .tr{font-size:.63rem;opacity:.55}
.tcard .tc{margin-left:auto;font-size:.66rem;color:var(--t-accent);flex:none}
.tcard .tt{font-size:.68rem;line-height:1.55;color:var(--t-dim);margin-top:8px;
  display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}

/* --- 실험: 테마 예측 --- */
.fcard{background:var(--t-card);border:1px solid var(--t-line);border-radius:10px;padding:12px;margin:8px 0}
.fcard .fh{display:flex;justify-content:space-between;align-items:baseline;gap:8px;margin-bottom:6px}
.fcard .fnm{font-size:.77rem;color:var(--t-accent)} .fcard .flv{font-size:.7rem;opacity:.7}
.fpred{display:flex;gap:6px;align-items:center;font-size:.68rem;padding:5px 0;
  border-bottom:1px solid rgba(255,255,255,.05)}
.fpred:last-child{border-bottom:0}
.fpred .fw{flex:none;width:34px;opacity:.6} .fpred .fhz{flex:none;width:30px;opacity:.6}
.fpred .fd{flex:none;font-weight:700} .fpred .fp{margin-left:auto;font-variant-numeric:tabular-nums;opacity:.8}
.pmsg{font-size:.72rem;line-height:1.7;white-space:pre-wrap;word-break:break-word}
.pwho{display:inline-block;font-size:.64rem;padding:2px 7px;border-radius:6px;
  background:var(--t-line);color:var(--t-accent);margin-bottom:5px}
.pchat{max-height:none}
.pchat .msg{background:#1e1811;border-left:3px solid var(--t-line);border-radius:8px;
  padding:9px 10px;margin:8px 0}
.pchat .msg.alpha{border-left-color:var(--t-accent)}
.pempty{font-size:.72rem;opacity:.5;padding:14px 4px;line-height:1.7}
.ppos{color:var(--t-up)} .pneg{color:var(--t-down)}
.pspark{width:100%;height:34px;display:block;margin:2px 0 4px}
/* 자동 감사(ui_audit)가 390px에서 잡아낸 실측 문제:
     .status  22px  — 캐릭터 말풍선(탭하면 상세 시트가 열린다)
     .close   15px  — 시트 닫기 버튼
   둘 다 손가락으로 정확히 누르기 어렵다. 최소 40px로 올린다. */
.ace-row .status,.desk .status{min-height:40px;display:flex;align-items:center;padding:6px 8px}
.bottom-sheet .who .close{min-height:44px;display:inline-flex;align-items:center;padding:0 12px;
  margin:-8px -8px -8px 0}
/* 가상계좌 — 폰에서 보는 게 유일한 경로라 세로 한 줄 배치로만 짠다. 가로 스크롤 금지. */
/* ⚠️ .office는 나무바닥 줄무늬(밝은 색)를 배경으로 깐다. 캐릭터 말풍선은 검은 배경을
   따로 얹어서 읽히는데, 계좌 블록은 반투명 흰 박스라 명암비가 1.18까지 떨어졌다
   (WCAG 최소 4.5). 사실상 안 보이는 상태였다 — 계좌 안쪽만 어두운 판을 깐다. */
.lab-office{padding:12px 10px 18px}
.lab-office .lab-inner{background:rgba(10,8,6,.88);border:2px solid #000;border-radius:10px;
  padding:12px 11px;position:relative;z-index:1}
.lab-hero{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin-bottom:6px}
.lab-hero .eq{font-size:1.5rem;font-weight:800;letter-spacing:-1px}
.lab-hero .rt{font-size:1rem;font-weight:700}
.lab-hero .sub{font-size:.7rem;opacity:.65}
.lab-up{color:var(--t-up)} .lab-dn{color:var(--t-down)}
.lab-bar{height:8px;background:rgba(255,255,255,.08);border-radius:4px;overflow:hidden;margin:8px 0 12px}
.lab-bar i{display:block;height:100%;background:var(--t-accent)}
.lab-pos{display:flex;flex-direction:column;gap:6px}
.lab-pos .row{display:flex;align-items:center;gap:8px;font-size:.76rem;
  padding:7px 9px;background:rgba(255,255,255,.07);border-radius:8px;color:var(--t-text)}
.lab-pos .row .nm{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.lab-pos .row .sh{opacity:.7;font-variant-numeric:tabular-nums}
.lab-pos .row .pl{width:64px;text-align:right;font-variant-numeric:tabular-nums;font-weight:700}
.lab-pos .row.pend-head{display:block;white-space:normal;line-height:1.5;font-size:.7rem;
  opacity:.75;background:rgba(245,196,81,.1);color:var(--t-accent)}
.lab-meta{margin-top:10px;font-size:.68rem;opacity:.6;line-height:1.7}
.lab-spark{width:100%;height:44px;margin:4px 0 2px;display:block}
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
  overflow:hidden;padding:6px 0;margin-top:auto;flex:none}
.ticker-track{display:inline-flex;white-space:nowrap;animation:marquee 22s linear infinite}
.ticker-track span{padding:0 16px;font-size:10px;font-weight:700}
.ticker-track .up{color:var(--up)} .ticker-track .down{color:var(--down)}
@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}

.hint{text-align:center;font-size:10px;color:#9c8f7a;padding:8px 20px 4px;line-height:1.6}

/* ===== 테마 오버라이드는 반드시 맨 끝 ===== */
/* ============================================================================
   테마 4종 — 같은 데이터, 같은 탭 구조, 다른 옷.
   내비게이션(탭 10개)은 테마가 바뀌어도 그대로다. 테마마다 "뭐가 어디 있는지"가
   달라지면 바꿀 때마다 다시 배워야 한다. 바뀌는 건 밀도·서체·카드 형태·배경·모션이다.

     pixel     기존 픽셀아트 트레이딩 플로어 (기본)
     glass     유리 관제탑 — 배경이 계좌 상태에 따라 물드는 오로라
     terminal  관제 터미널 — 정보 밀도 최대, 각진 모서리, 고정폭
     paper     브리핑 신문 — 밝은 종이, 명조, 괘선
   ============================================================================ */

/* ---- 공통 토큰. 각 테마가 이 값들만 갈아끼운다. ---- */
:root{
  --t-radius:10px; --t-gap:10px; --t-pad:12px;
  --t-card:#241d16; --t-card2:#2c241b; --t-line:#3b2f22;
  --t-text:#e8dcc8; --t-dim:#b3a488; --t-accent:#f5c451;
  --t-font:'Galmuri11',ui-monospace,monospace;
  --t-num:'Galmuri11',ui-monospace,monospace;
  --t-display:'Galmuri11',ui-monospace,monospace;
  --t-shadow:none; --t-cardborder:1px solid var(--t-line);
  --t-tracking:.3px; --t-lh:1.5;
  /* 경고·주의색도 토큰이어야 한다. 인라인으로 박아 두면 밝은 테마에서 안 읽힌다
     (신문 테마에서 '⏸ 실시간 아님' 줄이 명암비 1.36으로 사라졌다). */
  --t-warn:#ffd24d; --t-alert:var(--t-up);
}

/* 테마 전환 버튼 */
#pthemebtn{position:relative;display:flex;align-items:center;gap:5px;min-height:34px;
  padding:0 9px;border:1px solid currentColor;border-radius:999px;font-size:10px;
  background:transparent;color:inherit;cursor:pointer;letter-spacing:.5px;opacity:.85}
#pthemebtn:active{opacity:1}
#pthemebtn .sw{width:9px;height:9px;border-radius:50%;background:currentColor;flex:none}
#pthemesheet{position:fixed;left:0;right:0;bottom:0;z-index:120;
  background:var(--t-card);border-top:2px solid var(--t-accent);
  transform:translateY(105%);transition:transform .28s cubic-bezier(.2,.8,.2,1);
  padding:14px 12px calc(16px + env(safe-area-inset-bottom,0px));
  max-width:430px;margin:0 auto;border-radius:16px 16px 0 0}
#pthemesheet.open{transform:translateY(0)}
#pthemesheet h4{font-size:.8rem;color:var(--t-accent);margin-bottom:4px}
#pthemesheet .sub{font-size:.66rem;opacity:.55;margin-bottom:12px;display:block}
.tsw{display:flex;align-items:center;gap:10px;width:100%;min-height:56px;
  padding:8px 10px;margin-bottom:8px;border:1px solid var(--t-line);border-radius:12px;
  background:var(--t-card2);color:var(--t-text);cursor:pointer;text-align:left}
.tsw.on{border-color:var(--t-accent);box-shadow:0 0 0 1px var(--t-accent) inset}
.tsw .chip{width:40px;height:40px;border-radius:9px;flex:none;position:relative;overflow:hidden;
  border:1px solid rgba(255,255,255,.14)}
.tsw .nm{font-size:.78rem;display:block}
.tsw .ds{font-size:.63rem;opacity:.6;display:block;margin-top:2px;line-height:1.4}
.tsw .ok{margin-left:auto;color:var(--t-accent);font-size:.8rem;flex:none}
/* 견본 칩 — 각 테마의 배경·강조색을 그대로 보여준다 */
.chip-pixel{background:repeating-linear-gradient(90deg,#8b5a2b 0 8px,#6b4423 8px 16px)}
.chip-pixel::after{content:'';position:absolute;left:6px;top:6px;width:10px;height:14px;background:#3a6ea5}
.chip-glass{background:radial-gradient(120% 90% at 20% 10%,#1f6f5c 0%,transparent 55%),
  radial-gradient(100% 80% at 85% 90%,#4a2c6b 0%,transparent 60%),#0a0e18}
.chip-terminal{background:#07090b}
.chip-terminal::after{content:'';position:absolute;inset:6px;
  background:repeating-linear-gradient(0deg,#ffb000 0 1px,transparent 1px 4px);opacity:.9}
.chip-paper{background:#f4f0e6}
.chip-paper::after{content:'';position:absolute;left:6px;right:6px;top:9px;height:2px;background:#a3312a;
  box-shadow:0 6px 0 rgba(26,23,20,.35),0 12px 0 rgba(26,23,20,.2)}

/* ============================ GLASS ============================ */
html[data-theme="glass"]{
  --bg:#0a0e18; --panel:#e8edf5; --accent:#7ef0c8;
  --t-card:rgba(255,255,255,.055); --t-card2:rgba(255,255,255,.085);
  --t-line:rgba(255,255,255,.10); --t-text:#e8edf5; --t-dim:#9aa8bd; --t-accent:#7ef0c8;
  --t-radius:16px; --t-pad:15px; --t-shadow:0 10px 34px rgba(0,0,0,.45);
  --t-font:'IBM Plex Sans KR',system-ui,sans-serif;
  --t-num:'IBM Plex Mono',ui-monospace,monospace;
  --t-display:'Hahmlet',serif;
  --t-tracking:0px; --t-lh:1.62;
}
html[data-theme="glass"] body{background:var(--bg);color:var(--t-text);
  font-family:var(--t-font);letter-spacing:0}
/* 배경이 곧 지표다 — 계좌가 오르면 초록, 내리면 붉은 기운으로 천천히 물든다.
   --mood는 renderTheme()이 계좌 수익률을 보고 -1~+1로 넣어 준다. */
html[data-theme="glass"] body::before{content:'';position:fixed;inset:-20%;z-index:-2;
  background:
    radial-gradient(45% 38% at 18% 12%, hsl(calc(150 + var(--mood,0) * -140) 62% 34% / .55) 0%, transparent 62%),
    radial-gradient(42% 36% at 84% 20%, hsl(265 55% 38% / .42) 0%, transparent 64%),
    radial-gradient(55% 45% at 60% 92%, hsl(calc(160 + var(--mood,0) * -120) 48% 26% / .40) 0%, transparent 66%);
  filter:blur(38px);animation:aurora 26s ease-in-out infinite alternate}
@keyframes aurora{
  0%{transform:translate3d(0,0,0) scale(1)}
  50%{transform:translate3d(-3%,2%,0) scale(1.07)}
  100%{transform:translate3d(3%,-2%,0) scale(1.03)}}
/* 미세한 그레인 — 그라디언트만 있으면 색 띠(밴딩)가 보인다 */
html[data-theme="glass"] body::after{content:'';position:fixed;inset:0;z-index:-1;pointer-events:none;
  opacity:.35;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E")}
html[data-theme="glass"] .phone{background:transparent;border:0}
html[data-theme="glass"] .topbar{background:rgba(10,14,24,.55);backdrop-filter:blur(16px);
  border-bottom:1px solid var(--t-line);font-family:var(--t-num);letter-spacing:1px}
html[data-theme="glass"] #ptabs{background:rgba(10,14,24,.62);backdrop-filter:blur(16px);
  border-bottom:1px solid var(--t-line)}
html[data-theme="glass"] #ptabs .pt{color:var(--t-dim);font-size:.74rem;letter-spacing:0}
html[data-theme="glass"] #ptabs .pt.on{color:var(--t-accent);border-bottom-color:var(--t-accent)}
html[data-theme="glass"] .pcard,html[data-theme="glass"] .icard,
html[data-theme="glass"] .tcard,html[data-theme="glass"] .fcard,
html[data-theme="glass"] #pdeck .dcard{
  background:var(--t-card);border:1px solid var(--t-line);border-radius:var(--t-radius);
  backdrop-filter:blur(14px);box-shadow:var(--t-shadow);padding:var(--t-pad)}
html[data-theme="glass"] .pcard h4,html[data-theme="glass"] #pdeck .dt{
  font-family:var(--t-display);font-weight:600;color:var(--t-accent);letter-spacing:-.2px}
html[data-theme="glass"] .icard .ival,html[data-theme="glass"] .icard .ipct,
html[data-theme="glass"] .prow .vv,html[data-theme="glass"] .lab-hero .eq{
  font-family:var(--t-num);font-variant-numeric:tabular-nums}
html[data-theme="glass"] .lab-hero .eq{font-size:1.85rem;font-weight:600;letter-spacing:-1.5px}
html[data-theme="glass"] .office{background:var(--t-card);border:1px solid var(--t-line);
  border-radius:var(--t-radius);box-shadow:var(--t-shadow);backdrop-filter:blur(14px)}
html[data-theme="glass"] .office::before{display:none}   /* 나무바닥 줄무늬 제거 */
html[data-theme="glass"] .lab-office .lab-inner{background:transparent;border:0;padding:0}
html[data-theme="glass"] .floor-title{font-family:var(--t-display);color:var(--t-text);opacity:.9}
html[data-theme="glass"] .chart-panel{background:var(--t-card);border:1px solid var(--t-line);
  border-radius:var(--t-radius);box-shadow:var(--t-shadow);backdrop-filter:blur(14px);overflow:hidden}
html[data-theme="glass"] .chart-head{background:transparent;color:var(--t-dim);
  border-bottom:1px solid var(--t-line)}
html[data-theme="glass"] .chart-price{font-family:var(--t-num);letter-spacing:-1px}
html[data-theme="glass"] .ticker-wrap{background:rgba(10,14,24,.72);backdrop-filter:blur(12px);
  border-top:1px solid var(--t-line)}
/* 등장 모션 — 한 번의 잘 짜인 진입이 흩뿌린 미세 효과보다 낫다 */
html[data-theme="glass"] .psec.on > *{animation:rise .5s cubic-bezier(.2,.8,.2,1) backwards}
html[data-theme="glass"] .psec.on > *:nth-child(1){animation-delay:.02s}
html[data-theme="glass"] .psec.on > *:nth-child(2){animation-delay:.07s}
html[data-theme="glass"] .psec.on > *:nth-child(3){animation-delay:.12s}
html[data-theme="glass"] .psec.on > *:nth-child(4){animation-delay:.17s}
html[data-theme="glass"] .psec.on > *:nth-child(n+5){animation-delay:.22s}
@keyframes rise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}

/* ============================ TERMINAL ============================ */
html[data-theme="terminal"]{
  --bg:#07090b; --panel:#d7dde3; --accent:#ffb000;
  --t-card:#0c1013; --t-card2:#11161a; --t-line:#1e262c;
  --t-text:#d7dde3; --t-dim:#7d8891; --t-accent:#ffb000;
  --t-radius:0px; --t-pad:9px; --t-gap:0px; --t-shadow:none;
  --t-font:'IBM Plex Mono',ui-monospace,monospace;
  --t-num:'IBM Plex Mono',ui-monospace,monospace;
  --t-display:'IBM Plex Mono',ui-monospace,monospace;
  --t-tracking:.2px; --t-lh:1.42;
}
html[data-theme="terminal"] body{background:var(--bg);color:var(--t-text);
  font-family:var(--t-font);letter-spacing:var(--t-tracking);font-size:13px}
/* 주사선 — 아주 옅게. 진하면 글자가 안 읽힌다. */
html[data-theme="terminal"] body::after{content:'';position:fixed;inset:0;z-index:99;pointer-events:none;
  background:repeating-linear-gradient(0deg,rgba(255,255,255,.022) 0 1px,transparent 1px 3px)}
html[data-theme="terminal"] .phone{background:var(--bg);border-left:1px solid var(--t-line);
  border-right:1px solid var(--t-line)}
html[data-theme="terminal"] .topbar{background:#000;border-bottom:1px solid var(--t-accent);
  text-transform:uppercase;letter-spacing:2px;font-size:10px}
html[data-theme="terminal"] #ptabs{background:#0a0d10;border-bottom:1px solid var(--t-line);padding:0}
html[data-theme="terminal"] #ptabs .pt{color:var(--t-dim);border-bottom:2px solid transparent;
  padding:11px 12px;font-size:.72rem;border-right:1px solid var(--t-line)}
html[data-theme="terminal"] #ptabs .pt.on{color:#000;background:var(--t-accent);border-bottom-color:var(--t-accent)}
html[data-theme="terminal"] .pcard,html[data-theme="terminal"] .icard,
html[data-theme="terminal"] .tcard,html[data-theme="terminal"] .fcard{
  background:var(--t-card);border:1px solid var(--t-line);border-radius:0;
  margin:0 0 1px;padding:var(--t-pad)}
html[data-theme="terminal"] .pcard h4{color:var(--t-accent);text-transform:uppercase;
  letter-spacing:1.4px;font-size:.7rem;border-bottom:1px solid var(--t-line);padding-bottom:6px}
html[data-theme="terminal"] .prow{padding:3px 0;font-size:.74rem;
  border-bottom:1px dotted rgba(255,255,255,.07)}
/* ⚠️ 처음엔 grid-template-areas로 짰다가 스파크라인·배지처럼 **영역 이름을 안 준 요소가
   자동 배치되어 글자 위에 겹쳤다.** 카드 구조는 테마마다 다를 수 있으므로 영역 이름을
   못박지 않는다. 기본 흐름을 그대로 두고 밀도만 조인다. */
html[data-theme="terminal"] .icard{padding:7px 9px}
html[data-theme="terminal"] .icard .top{gap:6px}
html[data-theme="terminal"] .icard .inm{font-size:.76rem}
html[data-theme="terminal"] .icard .ival{font-variant-numeric:tabular-nums;font-size:.84rem}
html[data-theme="terminal"] .icard .ipct{min-width:60px;text-align:right}
html[data-theme="terminal"] .icard .ima{font-size:.62rem;margin-top:2px}
html[data-theme="terminal"] .icard .iai{-webkit-line-clamp:1;font-size:.66rem;margin-top:4px}
html[data-theme="terminal"] .icard .flag{border-radius:0;font-size:.55rem;padding:0 4px}
html[data-theme="terminal"] .pspark{height:20px;margin:3px 0 2px}
html[data-theme="terminal"] .office{background:var(--t-card);border:1px solid var(--t-line);
  border-radius:0;box-shadow:none;margin:0 0 1px}
html[data-theme="terminal"] .office::before{display:none}
html[data-theme="terminal"] .lab-office .lab-inner{background:transparent;border:0;border-radius:0}
html[data-theme="terminal"] .chart-panel{border:1px solid var(--t-line);border-radius:0;margin:0 0 1px}
html[data-theme="terminal"] .chart-head{background:var(--t-accent);color:#000;text-transform:uppercase;
  letter-spacing:1.5px;font-size:9px}
html[data-theme="terminal"] .floor-title{text-transform:uppercase;letter-spacing:2px;
  font-size:.66rem;color:var(--t-accent)}
html[data-theme="terminal"] #pchips .chip{border-radius:0;border-color:var(--t-line)}
html[data-theme="terminal"] #pchips .chip.on{background:var(--t-accent);color:#000}
html[data-theme="terminal"] #pdeck .dcard{border-radius:0;border-left-width:3px}
html[data-theme="terminal"] .ticker-wrap{border-top:1px solid var(--t-accent)}
/* 값이 바뀌면 셀이 한 번 번쩍인다 — 어디가 움직였는지 눈으로 잡힌다 */
@keyframes tflash{from{background:rgba(255,176,0,.30)}to{background:transparent}}
html[data-theme="terminal"] .flash{animation:tflash .7s ease-out}

/* ============================ PAPER ============================ */
html[data-theme="paper"]{
  --bg:#f4f0e6; --panel:#1a1714; --accent:#a3312a;
  --t-card:#fbf8f1; --t-card2:#f0ebdf; --t-line:rgba(26,23,20,.16);
  --t-text:#1a1714; --t-dim:#6b6257; --t-accent:#a3312a;
  --t-radius:2px; --t-pad:14px; --t-shadow:none;
  --t-font:'Gowun Batang',serif;
  --t-num:'IBM Plex Mono',ui-monospace,monospace;
  --t-display:'Song Myung',serif;
  --t-tracking:0px; --t-lh:1.78;
}
html[data-theme="paper"] body{background:var(--bg);color:var(--t-text);
  font-family:var(--t-font);letter-spacing:0;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='p'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23p)' opacity='.045'/%3E%3C/svg%3E")}
html[data-theme="paper"] .phone{background:transparent;border-left:1px solid var(--t-line);
  border-right:1px solid var(--t-line)}
html[data-theme="paper"] .topbar{background:transparent;color:var(--t-text);
  border-bottom:3px double var(--t-text);font-family:var(--t-display);font-size:13px;letter-spacing:3px}
html[data-theme="paper"] .topbar .dot{background:var(--t-accent)}
html[data-theme="paper"] #ptabs{background:var(--bg);border-bottom:1px solid var(--t-text)}
html[data-theme="paper"] #ptabs .pt{color:var(--t-dim);font-family:var(--t-display);font-size:.78rem}
html[data-theme="paper"] #ptabs .pt.on{color:var(--t-accent);border-bottom-color:var(--t-accent)}
/* 카드가 아니라 괘선으로 나눈다 — 신문 지면의 규칙 */
html[data-theme="paper"] .pcard{background:transparent;border:0;border-bottom:1px solid var(--t-line);
  border-radius:0;padding:14px 12px;margin:0}
html[data-theme="paper"] .pcard h4{font-family:var(--t-display);color:var(--t-text);
  font-size:1rem;letter-spacing:-.3px;border-bottom:2px solid var(--t-text);
  padding-bottom:5px;margin-bottom:10px}
html[data-theme="paper"] .pcard .sub{color:var(--t-dim)}
html[data-theme="paper"] .icard{background:var(--t-card);border:1px solid var(--t-line);
  border-radius:2px;box-shadow:1px 1px 0 var(--t-line)}
html[data-theme="paper"] .icard .ival,html[data-theme="paper"] .prow .vv,
html[data-theme="paper"] .icard .ipct{font-family:var(--t-num);font-variant-numeric:tabular-nums}
html[data-theme="paper"] .icard .iai{color:var(--t-dim)}
html[data-theme="paper"] .pmsg,html[data-theme="paper"] .iai,html[data-theme="paper"] .tt{
  line-height:var(--t-lh)}
/* 캐릭터 스프라이트는 어두운 배경 전제로 그려졌다. 밝은 종이 위에 그대로 얹으면
   이름표·역할표(흰 글자)가 통째로 사라진다 — 실제로 그렇게 안 보였다.
   신문에도 사진은 어두운 판으로 앉는다. 사무실 구역만 잉크판으로 둔다. */
html[data-theme="paper"] .office{background:#1a1714;border:1px solid var(--t-text);
  border-radius:2px;box-shadow:3px 3px 0 var(--t-line);color:#f4f0e6}
html[data-theme="paper"] .office::before{display:none}
html[data-theme="paper"] .nameplate{color:#f4f0e6}
html[data-theme="paper"] .roletag{background:#000;color:#e8c98a;border-color:#e8c98a}
html[data-theme="paper"] .status{background:rgba(0,0,0,.78);color:#f4f0e6;border-color:#000}
html[data-theme="paper"] .vs{color:#e8c98a}
html[data-theme="paper"] .chart-legend b,html[data-theme="paper"] .worldclock b{color:var(--t-text)}
/* 사무실(.office)을 잉크판으로 돌렸으므로 그 **안쪽** 글자는 종이색이어야 한다.
   토큰(--t-text=잉크)을 그대로 쓰면 잉크 위 잉크가 되어 명암비 1.0이 나온다. */
html[data-theme="paper"] .lab-office .lab-inner{background:transparent;border:0;color:#f4f0e6}
html[data-theme="paper"] .lab-pos .row{background:rgba(255,255,255,.09);color:#f4f0e6}
html[data-theme="paper"] .lab-hero .eq{font-family:var(--t-num);color:#f4f0e6}
html[data-theme="paper"] .lab-hero .sub,html[data-theme="paper"] .lab-meta{color:#c9bfae}
html[data-theme="paper"] .lab-pos .row.pend-head{background:rgba(232,201,138,.16);color:#e8c98a}
html[data-theme="paper"] .lab-bar{background:rgba(255,255,255,.14)}
html[data-theme="paper"] .lab-bar i{background:#e8c98a}
html[data-theme="paper"] .argbox{background:#f4f0e6;color:#1a1714;border-color:#000}
html[data-theme="paper"] .hint{color:var(--t-dim)}
html[data-theme="paper"] .floor-title{font-family:var(--t-display);color:var(--t-text);
  font-size:1.05rem}
html[data-theme="paper"] .floor-title::before,html[data-theme="paper"] .floor-title::after{
  background:var(--t-text)}
html[data-theme="paper"] .chart-panel{background:var(--t-card);border:1px solid var(--t-text);
  border-radius:2px;box-shadow:3px 3px 0 var(--t-line)}
html[data-theme="paper"] .chart-head{background:var(--t-text);color:var(--bg);
  font-family:var(--t-display);letter-spacing:1px}
html[data-theme="paper"] .chart-body{background:var(--t-card)}
html[data-theme="paper"] .chart-price{font-family:var(--t-num);color:var(--t-text)}
html[data-theme="paper"] .chart-legend,html[data-theme="paper"] .worldclock{color:var(--t-dim)}
html[data-theme="paper"] #pchips .chip{background:var(--t-card);color:var(--t-dim);
  border-color:var(--t-line);border-radius:2px;font-family:var(--t-display)}
html[data-theme="paper"] #pchips .chip.on{background:var(--t-text);color:var(--bg);border-color:var(--t-text)}
html[data-theme="paper"] #pdeck .dcard{background:var(--t-card);border:1px solid var(--t-text);
  border-radius:2px;box-shadow:3px 3px 0 var(--t-line)}
html[data-theme="paper"] #pdeck .dt{font-family:var(--t-display);color:var(--t-accent);font-size:.95rem}
html[data-theme="paper"] #pdeck .dx{color:var(--t-text)}
html[data-theme="paper"] .tcard{background:var(--t-card);border:1px solid var(--t-line);border-radius:2px}
html[data-theme="paper"] .fcard{background:var(--t-card);border:1px solid var(--t-line);border-radius:2px}
html[data-theme="paper"] .pchat .msg{background:var(--t-card);border-left:3px solid var(--t-accent)}
html[data-theme="paper"] .pwho{color:var(--t-accent)}
html[data-theme="paper"] .ticker-wrap{background:var(--t-text);border-top:0}
html[data-theme="paper"] .pbar{background:rgba(26,23,20,.12)}
html[data-theme="paper"] .pbar i{background:var(--t-accent)}
html[data-theme="paper"] #pthemesheet{background:var(--t-card)}
html[data-theme="paper"] .tsw{background:var(--t-card2)}

/* ---- 상세 시트: 픽셀 테마의 크림색 종이가 다른 테마에 그대로 남아 있었다. ---- */
html[data-theme="glass"] .bottom-sheet,
html[data-theme="terminal"] .bottom-sheet,
html[data-theme="paper"] .bottom-sheet{
  background:var(--t-card2);color:var(--t-text);border-top:1px solid var(--t-accent);
  transition:transform .26s cubic-bezier(.2,.8,.2,1)}
html[data-theme="glass"] .bottom-sheet{backdrop-filter:blur(20px);
  background:rgba(16,22,34,.92);border-radius:18px 18px 0 0}
html[data-theme="paper"] .bottom-sheet{background:var(--t-card);border-top:3px double var(--t-text)}
html[data-theme="glass"] .bottom-sheet .body,
html[data-theme="terminal"] .bottom-sheet .body,
html[data-theme="paper"] .bottom-sheet .body{color:var(--t-text);font-family:var(--t-font);
  line-height:var(--t-lh)}
html[data-theme="glass"] .bottom-sheet .who,
html[data-theme="terminal"] .bottom-sheet .who,
html[data-theme="paper"] .bottom-sheet .who{color:var(--t-accent);border-bottom-color:var(--t-line)}
html[data-theme="glass"] .sheet-grip,html[data-theme="terminal"] .sheet-grip{background:#fff3}
html[data-theme="glass"] .bottom-sheet .close,
html[data-theme="terminal"] .bottom-sheet .close,
html[data-theme="paper"] .bottom-sheet .close{color:var(--t-accent)}
/* 테마 시트도 각 테마 옷을 입는다 */
html[data-theme="glass"] #pthemesheet{background:rgba(16,22,34,.94);backdrop-filter:blur(20px)}
html[data-theme="terminal"] #pthemesheet{background:var(--t-card);border-radius:0}
html[data-theme="terminal"] .tsw{border-radius:0}
html[data-theme="glass"] .tsw{background:rgba(255,255,255,.06);border-radius:14px}
html[data-theme="paper"]{--t-warn:#8a5a12; --t-alert:#a3312a;
  --t-up:#a3312a; --t-down:#1f4f7a}
html[data-theme="terminal"]{--t-warn:#ffb000; --t-alert:#ff5f56;
  --t-up:#ff7b72; --t-down:#79b8ff}
html[data-theme="glass"]{--t-warn:#ffd08a; --t-alert:#ff8f87;
  --t-up:#ff8f87; --t-down:#8ec5ff}
/* 신문 테마의 사무실 구역만 잉크판이라, 그 안에서는 상승·하락색도 밝은 쪽을 써야 한다.
   종이용으로 어둡게 잡은 색(#a3312a/#1f4f7a)을 잉크판 위에 쓰면 명암비가 1.63으로 떨어진다. */
html[data-theme="paper"] .office .lab-up,html[data-theme="paper"] .office .ppos{color:#ff8f87}
html[data-theme="paper"] .office .lab-dn,html[data-theme="paper"] .office .pneg{color:#8ec5ff}
html[data-theme="paper"] .office .sh{color:#c9bfae}
/* 터미널 보조색이 기준선(4.5)에 살짝 못 미쳤다 */
html[data-theme="terminal"]{--t-dim:#93a0aa}
/* 차트 등락 표시와 전력 패널 보조문구 — 종이 위에서 쓰는 색으로 다시 잡는다 */
html[data-theme="paper"] .chart-pct.up{color:#a3312a}
html[data-theme="paper"] .chart-pct.down{color:#1f4f7a}
html[data-theme="paper"] .power-panel{background:var(--t-card);border-color:var(--t-line)}
html[data-theme="paper"] .power-txt{color:var(--t-text)}
html[data-theme="paper"] .power-txt span{color:#5a5248}
/* 신문 테마 차트 — 밝은 종이 판에 잉크 글씨로 통일한다 */
html[data-theme="paper"] .chart-body{background:var(--t-card)}
html[data-theme="paper"] .chart-price{color:var(--t-text)}
html[data-theme="paper"] .chart-legend{color:var(--t-dim);border-top-color:var(--t-line)}
html[data-theme="paper"] .chart-legend b{color:var(--t-text)}
html[data-theme="paper"] .worldclock{background:var(--t-card2);color:var(--t-dim)}
html[data-theme="paper"] .worldclock b{color:var(--t-text)}

</style>
</head>
<body>
<div class="phone" id="app">

  <div class="topbar">
    <span><span class="dot"></span><span id="brandName">PIXEL TRADING FLOOR</span></span>
    <span style="display:flex;align-items:center;gap:8px">
      <button id="pthemebtn" onclick="openThemes()" aria-label="디자인 바꾸기">
        <span class="sw"></span><span id="pthemename">픽셀</span></button>
      <span id="clockNow">--:--</span>
    </span>
  </div>

  <div id="ptabs"></div>

  <div id="psec-home" class="psec on">
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
  </div><!-- /psec-home -->

  <div id="psec-ind" class="psec"></div>
  <div id="psec-deck" class="psec"></div>
  <div id="psec-team" class="psec"></div>

  <!-- 실험 = 가상계좌 + 테마 예측. PC의 실험 탭과 같은 묶음이다.
       계좌 잔고가 이 실험의 핵심 숫자이므로 맨 위에 둔다 — 예측 카드 6장 밑에 두었더니
       스크롤 끝까지 내려야 보였다. -->
  <div id="psec-lab" class="psec">
    <h2 class="floor-title" id="labTitle" style="display:none">가상계좌 모의투자</h2>
    <div class="office lab-office" id="labOffice" style="display:none"></div>
    <div id="labPreds"></div>
  </div>

  <div id="psec-news" class="psec"></div>
  <div id="psec-trends" class="psec"></div>
  <div id="psec-graph" class="psec"></div>
  <div id="psec-chat" class="psec"></div>
  <div id="psec-system" class="psec"></div>

  <div class="ticker-wrap"><div class="ticker-track" id="tickerTrack"></div></div>

</div>

<div class="sheet-backdrop" id="themeBackdrop" onclick="closeThemes()"></div>
<div id="pthemesheet">
  <h4>디자인 바꾸기</h4>
  <span class="sub">같은 내용, 다른 옷. 탭 위치는 어느 디자인에서도 그대로입니다.</span>
  <div id="pthemelist"></div>
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
    <div class="nameplate">${esc(ace.name)} <span style="color:var(--t-dim);font-weight:400">· 수석</span></div>
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

function renderLab(){
  const L = DATA.lab;
  if(!L) return;                       // 데이터가 없으면 섹션 자체를 숨긴 채 둔다(가짜 숫자 금지)
  document.getElementById("labTitle").style.display = "";
  const box = document.getElementById("labOffice");
  box.style.display = "";
  const up = L.return_pct >= 0;
  const cls = up ? "lab-up" : "lab-dn";
  const pct = Math.max(0, Math.min(100, (L.equity / L.capital) * 50));   // 0~200% → 0~100
  const pos = (L.positions||[]).map(p => `
    <div class="row"><span class="nm">${p.name}</span>
      <span class="sh">${p.shares}주 · ${(p.weight*100).toFixed(0)}%</span>
      <span class="pl ${p.pl>=0?'lab-up':'lab-dn'}">${p.pl==null?'—':(p.pl>=0?'+':'')+p.pl.toFixed(1)+'%'}</span>
    </div>`).join("") || (L.pending
      // 보유가 없는 이유를 말해 준다 — 주문은 이미 들어갔고 다음 거래일 종가에 체결된다.
      // 안내문은 .nm(한 줄 말줄임)에 넣으면 잘린다 — 줄바꿈되는 자체 행으로 둔다.
      ? `<div class="row pend-head">${L.pending.date} 주문 예약 · 다음 거래일 종가에 체결됩니다</div>`
        + L.pending.orders.map(o=>`<div class="row"><span class="nm">${o.name}</span>
            <span class="sh">목표 ${o.w}%</span><span class="pl">대기</span></div>`).join("")
      : '<div class="row"><span class="nm">아직 보유 종목이 없습니다</span></div>');
  const c = L.curve || [];
  let spark = "";
  if(c.length > 1){
    const vs = c.map(x=>x[1]), lo = Math.min(...vs), hi = Math.max(...vs), rg = (hi-lo)||1;
    const pts = vs.map((v,i)=>`${(i/(vs.length-1)*100).toFixed(1)},${(40-(v-lo)/rg*36).toFixed(1)}`).join(" ");
    spark = `<svg class="lab-spark" viewBox="0 0 100 44" preserveAspectRatio="none">
      <polyline points="${pts}" fill="none" stroke="var(--t-accent)" stroke-width="1.6"/></svg>`;
  }
  // 나무바닥 배경 위에 그대로 얹으면 글자가 안 읽힌다(측정 명암비 1.18) — 어두운 판으로 감싼다
  box.innerHTML = `
    <div class="lab-inner">
    <div class="lab-hero">
      <span class="eq">${L.equity.toLocaleString()}원</span>
      <span class="rt ${cls}">${up?'+':''}${L.return_pct.toFixed(2)}%</span>
      <span class="sub">원금 ${L.capital.toLocaleString()}원 · ${L.days}일차 · ${L.live?"지금 시세":"정산 시점"}</span>
    </div>
    <div class="lab-bar"><i style="width:${pct}%"></i></div>
    ${spark}
    <div class="lab-pos">${pos}</div>
    <div class="lab-meta">
      손익 ${L.profit>=0?'+':''}${L.profit.toLocaleString()}원 · 최대낙폭 ${L.mdd}%
      ${L.live&&L.settled_eq?` · ${esc2(L.settled_date||"")} 정산 기준 ${L.settled_eq.toLocaleString()}원`:""}
      ${L.mae!=null?` · 평가액 예측 평균오차 ${L.mae}%`:""}
      ${L.band!=null?` · 구간적중 ${(L.band*100).toFixed(0)}%`:""}
      <br>6개월 결산 예정: ${L.review_due||"—"} · 전부 가상계좌 시뮬레이션입니다
    </div>
    </div>`;
}

// ===== 폰 탭 — PC의 트렌드/관계망/토론방/시스템을 폰에서도 =====
const PTABS = [
  {id:"home",   name:"홈"},
  {id:"ind",    name:"지표"},
  {id:"deck",   name:"브리핑덱"},
  {id:"team",   name:"팀"},
  {id:"lab",    name:"실험"},
  {id:"news",   name:"뉴스"},
  {id:"chat",   name:"토론방"},
  {id:"trends", name:"트렌드"},
  {id:"graph",  name:"관계망"},
  {id:"system", name:"시스템"},
];
const PSECS = PTABS.map(t=>t.id);
let _ptab = "home";
let _chip = "all";

function esc2(t){ return (t||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

// 요원들은 마크다운으로 쓴다(**① 무슨 일** 같은 소제목). 그냥 텍스트로 넣으면 별표가 그대로
// 보여 읽기 나쁘다. **이스케이프한 뒤에** 볼드만 태그로 바꾼다 — 순서를 바꾸면 주입 구멍이 된다.
function md(t){
  return esc2(t)
    .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
    .replace(/^\s*[-·]\s+/gm, '· ');
}

// ===== 테마 =====
// 4벌의 옷. 데이터도 탭 구조도 그대로고, 밀도·서체·카드 형태·배경·모션만 바뀐다.
const THEMES = [
  {id:"pixel",    name:"픽셀",   brand:"PIXEL TRADING FLOOR",
   desc:"픽셀아트 트레이딩 플로어. 캐릭터가 일하는 사무실."},
  {id:"glass",    name:"글래스", brand:"관제탑 · CONTROL TOWER",
   desc:"유리 패널과 오로라. 배경이 계좌 상태에 따라 물듭니다."},
  {id:"terminal", name:"터미널", brand:"CONTROL TERMINAL",
   desc:"정보 밀도 최대. 각진 모서리와 고정폭 숫자."},
  {id:"paper",    name:"신문",   brand:"관 제 탑  日 報",
   desc:"밝은 종이에 명조. 읽기 가장 편한 화면."},
];
function curTheme(){ return document.documentElement.getAttribute("data-theme") || "pixel"; }
function setTheme(id){
  const t = THEMES.find(x=>x.id===id) || THEMES[0];
  document.documentElement.setAttribute("data-theme", t.id);
  try{ localStorage.setItem("ptheme", t.id); }catch(e){}
  document.getElementById("pthemename").textContent = t.name;
  document.getElementById("brandName").textContent = t.brand;
  document.querySelectorAll("#pthemelist .tsw").forEach(e=>{
    const on = e.dataset.id===t.id;
    e.classList.toggle("on", on);
    e.querySelector(".ok").textContent = on ? "✓" : "";
  });
  applyMood();
}
// 글래스 테마의 배경색을 계좌 수익률에 연동한다. 배경 자체가 지표가 되게.
function applyMood(){
  const r = (DATA.lab && DATA.lab.return_pct) || 0;
  const mood = Math.max(-1, Math.min(1, r / 5));   // ±5%에서 최대치
  document.documentElement.style.setProperty("--mood", mood.toFixed(3));
}
function openThemes(){
  document.getElementById("pthemelist").innerHTML = THEMES.map(t=>`
    <button class="tsw${t.id===curTheme()?" on":""}" data-id="${t.id}" onclick="setTheme('${t.id}');closeThemes()">
      <span class="chip chip-${t.id}"></span>
      <span><span class="nm">${t.name}</span><span class="ds">${esc2(t.desc)}</span></span>
      <span class="ok">${t.id===curTheme()?"✓":""}</span></button>`).join("");
  document.getElementById("pthemesheet").classList.add("open");
  document.getElementById("themeBackdrop").classList.add("open");
}
function closeThemes(){
  document.getElementById("pthemesheet").classList.remove("open");
  document.getElementById("themeBackdrop").classList.remove("open");
}

// 요원 색 — 홈의 캐릭터 배색과 같은 값을 써야 팀 탭에서 같은 사람으로 읽힌다
const TEAMC = {"U1":"#3a6ea5","U2":"#c99a2e","B2":"#2f8f5b","🧰도구":"#2b8f8f",
               "U3":"var(--t-up)","U4":"var(--t-down)","알파":"var(--t-accent)"};

function pchip(g){ _chip = g;
  document.querySelectorAll("#pchips .chip").forEach(e=>e.classList.toggle("on", e.dataset.g===g));
  renderInd(); }

function spark(v, col){
  if(!v || v.length < 2) return "";
  const lo=Math.min(...v), hi=Math.max(...v), rg=(hi-lo)||1;
  const pts = v.map((x,i)=>`${(i/(v.length-1)*100).toFixed(1)},${(31-(x-lo)/rg*28).toFixed(1)}`).join(" ");
  return `<svg class="pspark" viewBox="0 0 100 34" preserveAspectRatio="none">
    <polyline points="${pts}" fill="none" stroke="${col}" stroke-width="1.5"/></svg>`;
}

// ===== PC 데이터 =====
// PC 대시보드는 127.0.0.1에만 떠 있어 폰에서 못 연다. 그래서 PC가 자기 DB를 docs/api/*.json
// 으로 떨궈 두고, 이 페이지가 **같은 출처에서 그냥 fetch** 한다. 서버도 CORS도 필요 없다.
// 못 받아도 페이지는 인라인 데이터로 그대로 돌아간다 — PC 데이터는 '덧붙임'이지 전제가 아니다.
let PC = null;

async function loadPC(){
  const names = ["defs","latest","history","news","interp","powermix","meta"];
  try{
    const got = await Promise.all(names.map(n =>
      fetch("api/"+n+".json", {cache:"no-store"})
        .then(r => r.ok ? r.json() : null).catch(() => null)));
    const o = {}; names.forEach((n,i)=>o[n]=got[i]);
    if(!o.defs || !o.latest) return;            // 핵심 두 개가 없으면 병합할 게 없다
    PC = o;
    renderPhoneTabs();                           // 탭 구성이 늘어날 수 있으므로 다시 그린다
  }catch(e){ /* 인라인 데이터로 계속 간다 */ }
}

// 클라우드(야후 실시간)와 PC(2년 기록 + 정부지표 마지막값)를 하나의 지표 목록으로 합친다.
// 겹치면 값은 클라우드가 이긴다 — 방금 받은 값이 더 새롭다. PC는 클라우드가 아예 모르는
// 지표(정부 API 7종)와 긴 기록을 채운다.
function indRows(){
  const base = (DATA.m.ind && DATA.m.ind.rows) || [];
  if(!PC) return base;
  const cloud = {}; base.forEach(r => cloud[r.id] = r);
  const lat = {}; ((PC.latest||{}).rows||[]).forEach(r => lat[r.id] = r);
  const H = PC.history || {series:{}, dates:[]};
  const interp = {};
  ((PC.interp||{}).rows||[]).forEach(r => { if(!interp[r.id]) interp[r.id] = r; });

  const out = [];
  (PC.defs.indicators||[]).forEach(d => {
    if(d.id === "news_electimes") return;        // 뉴스 소스지 숫자 지표가 아니다
    const c = cloud[d.id], l = lat[d.id] || {};
    const hs = (H.series||{})[d.id] || [];
    const hv = hs.filter(x => x !== null);
    const lastIdx = hs.reduce((a,x,i)=> x===null?a:i, -1);
    const hasLive = !!(c && c.value != null);
    const pcVal = (l.value != null) ? l.value : (lastIdx >= 0 ? hs[lastIdx] : null);

    out.push({
      id: d.id, name: d.name, unit: d.unit || (c && c.unit) || "",
      groups: d.tabs || [],
      value: hasLive ? c.value : (pcVal != null ? pcVal.toLocaleString() : null),
      pct: hasLive ? c.pct : (l.pct != null ? l.pct : null),
      spark: hasLive && (c.spark||[]).length > 1 ? c.spark : hv.slice(-60),
      ma20: hasLive ? c.ma20 : null, ma60: hasLive ? c.ma60 : null,
      dec: (c && c.dec != null) ? c.dec : (d.dec != null ? d.dec : 2),
      // 값이 언제 것인지 반드시 표시한다. 정부 API 키가 만료된 지표는 '지금 값'이 아니라
      // '마지막으로 받았던 값'이고, 그걸 지금 값처럼 보여주면 그게 가짜 숫자다.
      stale: hasLive ? null : (lastIdx >= 0 ? (H.dates||[])[lastIdx] : (l.at || null)),
      wait: !hasLive && l.status && l.status !== "ok" ? (l.msg || l.status) : null,
      hist: hv.length,
      ai: (c && c.ai) || (interp[d.id] ? interp[d.id].text : null),
      detail: (c && c.detail) || null,
      verdict: (c && c.verdict) || (interp[d.id] ? interp[d.id].verdict : null),
      by: (c && c.ai) ? null : (interp[d.id] ? (interp[d.id].ts + " · " + interp[d.id].model) : null),
    });
  });
  // PC 정의에 없는 클라우드 지표가 생기면 뒤에 붙인다(양쪽이 어긋나도 사라지지 않게)
  base.forEach(r => { if(!out.some(x => x.id === r.id)) out.push(r); });
  return out;
}

function indGroups(){
  if(PC && PC.defs && PC.defs.tabs){
    // PC의 탭 정의를 그대로 쓴다. 손으로 적어 둔 표를 쓰면 PC에서 전기 탭에 12개가 있어도
    // 폰은 5개만 아는 어긋남이 계속 생긴다.
    const keep = ["core","elec","econ","original"];
    return [{id:"all",name:"전체"}].concat(
      PC.defs.tabs.filter(t => keep.includes(t.id)).map(t => ({id:t.id, name:t.name})));
  }
  return (DATA.m.ind && DATA.m.ind.groups) || [{id:"all",name:"전체"}];
}

function renderInd(){
  const rows = indRows().filter(r => _chip==="all" || (r.groups||[]).includes(_chip));
  const mix = (_chip==="all"||_chip==="elec") ? mixCard() : "";
  document.getElementById("pindlist").innerHTML = mix + (rows.map(r=>{
    const up = (r.pct||0) >= 0, col = r.pct==null ? "var(--t-dim)" : (up?"var(--t-up)":"var(--t-down)");
    // 자릿수를 지표별로 맞춘다. toLocaleString 기본값은 소수를 잘라 천연가스 MA60을 '3'으로 만든다.
    const nf = v => v==null ? "—" : v.toLocaleString(undefined,
      {minimumFractionDigits: r.dec||0, maximumFractionDigits: r.dec||0});
    const meta = [
      r.ma20!=null ? `MA20 ${nf(r.ma20)} · MA60 ${nf(r.ma60)}` : null,
      r.hist ? `PC 기록 ${r.hist}일` : null,
    ].filter(Boolean).join(" · ");
    return `<div class="icard" onclick="openInd('${r.id}')">
      <div class="top">
        <span class="inm">${esc2(r.name)}</span>
        ${String(r.verdict||"").startsWith("red")?'<span class="flag">근거부족</span>':""}
        ${r.value==null ? '<span class="ival" style="opacity:.35;font-size:.7rem">값 없음</span>'
          : `<span class="ival">${esc2(String(r.value))}<span style="font-size:.6rem;opacity:.5"> ${esc2(r.unit||"")}</span></span>`}
        ${r.pct==null?"":`<span class="ipct ${up?"ppos":"pneg"}">${up?"▲":"▼"}${Math.abs(r.pct).toFixed(2)}%</span>`}
      </div>
      ${r.stale?`<div class="ima" style="color:var(--t-warn);opacity:.95">⏸ 실시간 아님 · ${esc2(r.stale)} 마지막 관측${r.wait?" · "+esc2(String(r.wait).slice(0,40)):""}</div>`:""}
      ${spark(r.spark, col)}
      ${meta?`<div class="ima">${meta}</div>`:""}
      ${r.ai?`<div class="ima" style="margin-top:7px;opacity:.4">${esc2(r.by || ((DATA.m.ind&&DATA.m.ind.at||"")+" 회의 시점 해석"))}</div>
              <div class="iai">${esc2(r.ai)}</div>`
            :'<div class="iai" style="opacity:.35">아직 이 지표에 대한 해석이 없습니다</div>'}
    </div>`;}).join("") || '<div class="pempty">이 그룹에 지표가 없습니다</div>');
}

// PC 데이터가 '언제 것인지'를 반드시 보여 준다. 대시보드가 꺼져 있으면 이 파일은 그대로
// 멈춰 있는데, 시각이 안 보이면 멈춘 값을 지금 값으로 착각하게 된다.
function pcCard(){
  if(!PC) return `<div class="pcard"><h4>PC 데이터 <span class="sub">받지 못함</span></h4>
    <div class="pempty" style="text-align:left">PC 대시보드가 아직 한 번도 내보내지 않았거나
    네트워크가 끊겼습니다. 지금 화면은 클라우드 데이터만으로 돌고 있습니다.</div></div>`;
  const g = (PC.meta||{}).generated || "";
  let age = "";
  if(g){ const h = (Date.now() - new Date(g).getTime())/36e5;
    age = h < 1.5 ? "방금" : (h < 48 ? Math.round(h)+"시간 전" : Math.round(h/24)+"일 전"); }
  return `<div class="pcard"><h4>PC 데이터 <span class="sub">${esc2(age)}</span></h4>
    <div class="prow"><span class="nm">내보낸 시각</span><span class="vv">${esc2(g.slice(0,16))}</span></div>
    <div class="prow"><span class="nm">지표 기록</span><span class="vv">${(PC.history||{}).days||0}일</span></div>
    <div class="prow"><span class="nm">뉴스 · 로컬 해석</span>
      <span class="vv">${((PC.news||{}).rows||[]).length}건 · ${((PC.interp||{}).rows||[]).length}건</span></div>
    <div class="pempty" style="text-align:left">PC 대시보드로 수집할 때마다 갱신됩니다.
      PC가 꺼져 있으면 이 시각이 멈춥니다.</div></div>`;
}

// 연료원별 발전량 — PC가 정부 API에서 받아 둔 것. 전기 그룹에서만 보여준다.
function mixCard(){
  if(!PC || !PC.powermix || !(PC.powermix.fuels||[]).length) return "";
  const all = PC.powermix.fuels;
  // '총발전(현재수요)'는 연료가 아니라 **합계**다. 이걸 연료 목록에 섞어 두면 분모가 두 배가
  // 되어 모든 비중이 절반으로 나온다(실제로 원자력이 18.4%로 찍히고 있었다 — 실제는 37%).
  const totalRow = all.find(x=>/총발전|현재수요/.test(x.fuel));
  const f = all.filter(x=>x!==totalRow);
  const tot = (totalRow ? totalRow.mw : f.reduce((a,x)=>a+x.mw,0)) || 1;
  // 양수(揚水)는 물을 퍼올릴 때 전력을 **쓰므로** 값이 음수다. 예전엔 mw>0 필터로 빼 버려서
  // 구성 합이 총발전과 안 맞았다. 지우지 않고 음수 그대로 보여준다.
  const rows = f.map(x=>{
    const p = x.mw/tot*100, neg = x.mw < 0;
    return `<div class="prow"><span class="nm">${esc2(x.fuel)}${neg?' <span style="opacity:.5;font-size:.62rem">(양수 소비)</span>':""}</span>
      <span class="pbar"><i style="width:${Math.min(100,Math.abs(p)).toFixed(0)}%;background:${neg?"var(--t-down)":"var(--t-accent)"}"></i></span>
      <span class="vv">${Math.round(x.mw).toLocaleString()}MW · ${p.toFixed(1)}%</span></div>`;}).join("");
  return `<div class="pcard"><h4>연료원별 발전량
      <span class="sub">${esc2(PC.powermix.at||"")} 기준 · PC 수집</span></h4>
      ${totalRow?`<div class="prow" style="border-bottom:1px solid rgba(245,196,81,.3)">
        <span class="nm" style="color:var(--t-accent)">총발전 (현재수요)</span>
        <span class="vv" style="color:var(--t-accent)">${Math.round(totalRow.mw).toLocaleString()}MW</span></div>`:""}
      ${rows}</div>`;
}

// 지난 회의 녹취를 그때 받아 온다. 실패하면 보고 있던 화면을 망가뜨리지 않고 사유만 알린다.
async function openMeeting(id){
  const head = document.getElementById("pchatHead"), body = document.getElementById("pchatBody");
  if(!head || !body) return;
  body.innerHTML = '<div class="pempty">녹취를 받아오는 중…</div>';
  document.getElementById("pchatCard").scrollIntoView({behavior:"smooth", block:"start"});
  let d = null;
  try{ const r = await fetch("m/"+id+".json", {cache:"no-store"}); if(r.ok) d = await r.json(); }catch(e){}
  if(!d){
    body.innerHTML = '<div class="pempty">이 회의 녹취를 받지 못했습니다 — 아직 공개 페이지에 올라가지 않았거나 네트워크가 끊겼습니다</div>';
    return;
  }
  head.innerHTML = `회의 녹취 <span class="sub">${esc2((d.time||"").slice(0,16))} · ${d.calls}콜 · ${d.lines.length}발언</span>`;
  body.innerHTML = d.lines.map(l=>`<div class="msg${l.who==="알파"?" alpha":""}">
      <span class="pwho">${esc2(l.who)}${l.topic?" · "+esc2(l.topic):""}</span>
      <div class="pmsg">${md(l.text)}</div></div>`).join("")
      || '<div class="pempty">녹취가 없습니다</div>';
  document.querySelectorAll("#psec-chat .prow").forEach(e=>{
    const on = (e.getAttribute("onclick")||"").includes("'"+id+"'");
    e.style.background = on ? "rgba(245,196,81,.08)" : "";
  });
}

function openInd(id){
  const r = indRows().find(x=>x.id===id);
  if(!r) return;
  // 요약과 상세는 다른 글이다 — 상세가 없을 때만 요약으로 대체한다
  const at = (DATA.m.ind && DATA.m.ind.at) || "";
  const body = [r.detail, (!r.detail && r.ai) ? r.ai : null,
                r.verdict ? "\n[판정] " + r.verdict : null,
                r.by ? "\n[해석 출처] PC 로컬 분석 · " + r.by : null,
                r.stale ? "\n[주의] 실시간 값이 아닙니다. " + r.stale + " 이 마지막 관측이고, "
                        + "그 뒤로는 정부 API 키가 만료되어 새 값을 받지 못했습니다."
                        + (r.wait ? "\n사유: " + r.wait : "") : null,
                // 시세는 지금 값, 해석은 회의 시각 값이다. 장중에 크게 움직이면 둘이 안 맞는데,
                // 그건 오류가 아니라 시점 차이다 — 화면이 그걸 말해 줘야 한다.
                (!r.by && at) ? "\n(값은 페이지 갱신 시각 기준, 해석은 " + at + " 회의 시점 기준)" : null]
               .filter(Boolean).join("\n\n") || "이 지표에 대한 해석이 아직 없습니다.";
  openSheet(r.name, (r.pct==null?"":((r.pct>=0?"+":"")+r.pct.toFixed(2)+"% · ")) + "AI 해석", body);
}

function pgo(id){
  _ptab = id;
  document.querySelectorAll("#ptabs .pt").forEach(e=>e.classList.toggle("on", e.dataset.id===id));
  // 섹션 목록은 PTABS에서 파생시킨다 — 탭을 추가할 때 여기를 같이 고치는 걸 잊으면
  // 새 탭이 눌려도 아무것도 안 보이는 버그가 난다.
  PSECS.forEach(k=>{
    const el=document.getElementById("psec-"+k);
    if(el) el.classList.toggle("on", id===k);
  });
  window.scrollTo(0,0);
}

function renderPhoneTabs(){
  const M = DATA.m || {};
  const bar = document.getElementById("ptabs");
  // 데이터가 없는 탭은 아예 만들지 않는다 — 눌렀는데 빈 화면이 나오는 게 제일 나쁘다
  // 실험 탭은 테마 예측(M.lab)이 없어도 가상계좌(DATA.lab)만 있으면 볼 게 있다.
  // 뉴스 탭은 PC가 내보낸 헤드라인이 도착해야 생긴다(도착 전엔 아예 만들지 않는다).
  const hasNews = !!(PC && ((PC.news||{}).rows||[]).length);
  const avail = PTABS.filter(t => t.id==="home" || M[t.id]
                                  || (t.id==="lab" && DATA.lab) || (t.id==="news" && hasNews));
  bar.innerHTML = avail.map(t=>
    `<div class="pt${t.id===_ptab?" on":""}" data-id="${t.id}" onclick="pgo('${t.id}')">${t.name}</div>`).join("");

  // --- 지표: PC의 핵심/전기/경제/오리지널을 그룹 칩 하나로 ---
  if(M.ind || PC){
    const chips = indGroups().map(g=>
      `<div class="chip${g.id===_chip?" on":""}" data-g="${g.id}" onclick="pchip('${g.id}')">${g.name}</div>`).join("");
    const src = PC ? `클라우드 실시간 ${(M.ind&&M.ind.rows||[]).length}종 + PC 기록 ${(PC.history||{}).days||0}일`
                   : "클라우드 실시간";
    document.getElementById("psec-ind").innerHTML =
      `<div id="pchips">${chips}</div><div id="pindlist"></div>
       <div class="pempty" style="padding:0 4px 14px">카드를 탭하면 상세 판단이 열립니다 · ${esc2(src)}</div>`;
    renderInd();
  }

  // --- 뉴스: PC가 수집한 전기신문 헤드라인 + PC 로컬 AI 해석 ---
  if(hasNews){
    const N = (PC.news.rows||[]).map(n=>`<a class="prow" href="${esc2(n.link)}"
        target="_blank" rel="noopener" style="min-height:44px;align-items:center;
        color:inherit;text-decoration:none">
        <span class="nm" style="white-space:normal;line-height:1.45">${esc2(n.title)}</span>
        <span class="vv" style="opacity:.45">${esc2((n.pub||"").slice(5,10))}</span></a>`).join("");
    const I = ((PC.interp||{}).rows||[]).slice(0,12).map(r=>`<div class="prow"
        style="flex-direction:column;align-items:stretch;gap:3px">
        <span class="vv" style="opacity:.5;text-align:left">${esc2(r.ts)} · ${esc2(r.name)} · ${esc2(r.verdict||"")}</span>
        <span class="nm" style="white-space:normal;line-height:1.5;opacity:.85">${esc2((r.text||"").slice(0,240))}</span></div>`).join("");
    document.getElementById("psec-news").innerHTML = `
      <div class="pcard"><h4>전기신문 헤드라인
        <span class="sub">PC 수집 ${PC.news.rows.length}건 · 탭하면 원문</span></h4>${N}</div>
      ${I?`<div class="pcard"><h4>PC 로컬 AI 해석
        <span class="sub">analyze.py 산출 · 지표별</span></h4>${I}</div>`:""}`;
  }

  // --- 브리핑덱: 옆으로 넘기는 카드 ---
  if(M.deck){
    const D = M.deck;
    const cards = D.cards.map((c,i)=>`<div class="dcard ${c.kind}">
        <div class="dt">${esc2(c.title||"")}</div>
        <div class="dx">${md(c.text||"")}</div>
        <div class="dn">${i+1} / ${D.cards.length}</div></div>`).join("");
    document.getElementById("psec-deck").innerHTML = `
      <div class="pcard" style="margin-bottom:0"><h4>오늘의 브리핑
        <span class="sub">${esc2(D.time||"")} 회의 · ${D.cards.length}장</span></h4>
        <div class="pempty" style="text-align:left;padding:0">옆으로 밀어서 넘기세요</div></div>
      <div id="pdeck">${cards}</div>
      <div id="pdots">${D.cards.map((_,i)=>`<i class="${i?'':'on'}"></i>`).join("")}</div>
      <div id="pindex">${D.cards.map((c,i)=>{
        // 제목만 쓰면 '알파 총평'이 네 줄 연달아 나와 목차 구실을 못 한다.
        // 내용 첫머리를 라벨로 쓴다 — 무슨 얘기인지가 목차의 존재 이유다.
        const body = (c.text||"").replace(/\s+/g," ").trim();
        const label = /총평/.test(c.title||"") ? body : (c.title + " · " + body);
        return `<div class="ix${i?'':' on'}" data-i="${i}">
          <span class="no">${i+1}</span><span class="tx">${esc2(label)}</span></div>`;}).join("")}</div>`;
    // 어느 카드를 보고 있는지 점과 목차로 표시한다. 가로 스크롤은 위치 감각이 사라지기 쉽고,
    // 10장을 다 밀어보게 만드는 것도 폰에서는 부담이다.
    const dk = document.getElementById("pdeck");
    const mark = i => {
      document.querySelectorAll("#pdots i").forEach((d,j)=>d.classList.toggle("on", j===i));
      document.querySelectorAll("#pindex .ix").forEach((d,j)=>d.classList.toggle("on", j===i));
    };
    dk.addEventListener("scroll", ()=>{
      mark(Math.round(dk.scrollLeft / (dk.scrollWidth / D.cards.length)));
    }, {passive:true});
    document.querySelectorAll("#pindex .ix").forEach(el=>{
      el.onclick = () => {
        const i = +el.dataset.i;
        dk.scrollTo({left: i * (dk.scrollWidth / D.cards.length), behavior:"smooth"});
        mark(i);
      };
    });
  }

  // --- 팀 ---
  if(M.team){
    const T = M.team;
    const mx = Math.max(1, ...T.members.map(m=>m.calls));
    const rows = T.members.map(m=>{
      const col = TEAMC[m.tag] || "var(--t-accent)";
      const hz = (m.horizons||[]).map(h=>
        `${h.h} ${h.hit==null?"—":Math.round(h.hit*100)+"%"}(n=${h.n||0})`).join(" · ");
      return `<div class="tcard">
        <div class="th">
          <span class="tav" style="color:${col}"><span style="color:#fff">${esc2(m.name.slice(0,1))}</span></span>
          <span><span class="tnm">${esc2(m.name)}</span><br><span class="tr">${esc2(m.role)}</span></span>
          <span class="tc">${m.calls}회 발언</span></div>
        <div class="pbar" style="width:100%;margin-top:8px"><i style="width:${(m.calls/mx*100).toFixed(0)}%;background:${col}"></i></div>
        ${hz?`<div class="ima" style="margin-top:6px">예측 성적 · ${esc2(hz)}</div>`:""}
        ${m.text?`<div class="tt">${m.topic?`<b style="color:var(--t-dim)">${esc2(m.topic)}</b> · `:""}${md(m.text)}</div>`
          : m.machine?`<div class="tt" style="opacity:.45">이번 회의에서는 기계 판독용 출력(기사 분류표)만 남겼습니다 — 사람이 읽을 발언은 없습니다</div>`
          :`<div class="tt" style="opacity:.4">이번 회의에서는 발언이 없었습니다</div>`}
      </div>`;}).join("");
    document.getElementById("psec-team").innerHTML = `
      <div class="pcard"><h4>요원 로스터
        <span class="sub">${esc2(T.meeting||"")} · 총 ${T.total}발언 / ${T.calls}콜</span></h4></div>${rows}`;
  }

  // --- 실험: 테마 예측 (가상계좌는 renderLab이 같은 섹션에 그린다) ---
  if(M.lab){
    const L = M.lab;
    const cards = L.themes.map(t=>{
      const preds = t.preds.map(p=>{
        const up = p.dir>0;
        return `<div class="fpred">
          <span class="fw">${esc2(p.who||"")}</span>
          <span class="fhz">${esc2(p.h||"")}</span>
          <span class="fd ${up?"ppos":"pneg"}">${up?"▲ 상승":"▼ 하락"}</span>
          <span class="fp">확률 ${(p.p*100).toFixed(0)}% · ${p.lo>0?"+":""}${p.lo}~${p.hi>0?"+":""}${p.hi}%</span>
        </div>`;}).join("");
      const tw = (t.twins||[]).length
        ? `<div class="ima" style="color:var(--t-alert);opacity:.95;margin-top:7px">
             ⚠ ${esc2(t.twins.join("·"))} 예측이 삼추·사비 완전 동일 — 독립적 판단이 아닐 수 있음</div>` : "";
      return `<div class="fcard">
        <div class="fh"><span class="fnm">${esc2(t.name)}</span>
          <span class="flv">기준가 ${t.level!=null?t.level.toLocaleString():"—"}</span></div>
        ${preds}${tw}</div>`;}).join("");
    const ag = (L.agents||[]).map(a=>`<div class="prow">
        <span class="nm">${esc2(a.who)} · ${esc2(a.h)}</span>
        <span class="vv">적중 ${Math.round(a.hit*100)}% (n=${a.n})${a.skill!=null?` · 기술점수 ${a.skill}`:""}</span></div>`).join("");
    const bd = (L.board||[]).map(b=>`<div class="prow">
        <span class="nm">${esc2(b.theme)} · ${esc2(b.h)}</span>
        <span class="vv">적중 ${Math.round(b.hit*100)}% (n=${b.n})</span></div>`).join("");
    document.getElementById("labPreds").innerHTML = `
      <div class="pcard"><h4>오늘의 예측 <span class="sub">${esc2(L.date||"")} · 6종목</span></h4>
        <div class="prow"><span class="nm">만기 대기</span><span class="vv">${L.pending}건</span></div>
        <div class="pempty" style="text-align:left">단기 1 · 중기 5 · 장기 20 거래일 뒤 채점됩니다</div></div>
      ${ag?`<div class="pcard"><h4>요원 성적 <span class="sub">채점 완료분 · 기간별</span></h4>${ag}
        <div class="pempty" style="text-align:left">기술점수가 음수면 기준선(그냥 찍기)보다 못한 것입니다</div></div>`:""}
      ${bd?`<div class="pcard"><h4>테마별 성적 <span class="sub">누적</span></h4>${bd}</div>`:""}
      ${cards}`;
  }

  // --- 토론방 ---
  if(M.chat){
    const c = M.chat;
    const lines = c.lines.map(l=>`<div class="msg${l.who==="알파"?" alpha":""}">
        <span class="pwho">${esc2(l.who)}${l.topic?" · "+esc2(l.topic):""}</span>
        <div class="pmsg">${md(l.text)}</div></div>`).join("");
    // 목록만 보여 주고 못 열면 정보가 없는 것과 같다. 본문은 회의당 파일 하나로 나눠 두고
    // 탭했을 때만 받아 온다(최근 12건 본문만 합쳐도 599KB라 다 실을 수 없다).
    const mts = c.meetings.map(m=>`<div class="prow" style="min-height:44px;align-items:center;cursor:pointer"
        onclick="openMeeting('${m.id}')">
        <span class="nm">${esc2(m.time)}${m.id===c.meeting?' <span style="color:var(--t-accent)">· 지금 보는 중</span>':""}</span>
        <span class="vv">${m.calls}콜 · ${m.lines}줄 ›</span></div>`).join("");
    document.getElementById("psec-chat").innerHTML = `
      <div class="pcard" id="pchatCard"><h4 id="pchatHead">회의 녹취 <span class="sub">${esc2(c.time.slice(0,16))} · ${c.calls}콜 · 최근 ${c.lines.length}발언</span></h4>
        <div class="pchat" id="pchatBody">${lines || '<div class="pempty">녹취가 없습니다</div>'}</div></div>
      ${c.news && c.news.context ? `<div class="pcard"><h4>뉴스 맥락</h4><div class="pmsg">${md(c.news.context)}</div></div>`:""}
      <div class="pcard"><h4>지난 회의 <span class="sub">${c.meetings.length}건 · 탭하면 그 회의 녹취로 바뀝니다</span></h4>${mts}</div>`;
  }

  // --- 트렌드 ---
  if(M.trends){
    const t = M.trends;
    const mx = Math.max(1, ...t.ours.map(o=>o.count));
    const ours = t.ours.map(o=>`<div class="prow">
        <span class="nm">${esc2(o.topic)}</span>
        <span class="pbar"><i style="width:${(o.count/mx*100).toFixed(0)}%"></i></span>
        <span class="vv">${o.count}회·${o.days}일</span></div>`).join("");
    const gg = (t.google||[]).map(g=>{
      const v=g.series||[]; let sp="";
      if(v.length>1){ const lo=Math.min(...v),hi=Math.max(...v),rg=(hi-lo)||1;
        sp=`<svg class="pspark" viewBox="0 0 100 34" preserveAspectRatio="none"><polyline points="${
          v.map((x,i)=>`${(i/(v.length-1)*100).toFixed(1)},${(31-(x-lo)/rg*28).toFixed(1)}`).join(" ")
        }" fill="none" stroke="var(--t-accent)" stroke-width="1.5"/></svg>`; }
      return `<div style="margin:8px 0"><div class="prow"><span class="nm">${esc2(g.kw)}</span>
        <span class="vv">${g.now}</span></div>${sp}</div>`;}).join("");
    document.getElementById("psec-trends").innerHTML = `
      <div class="pcard"><h4>${esc2(t.title||"우리 관측 트렌드")} <span class="sub">${esc2(t.window||"")}</span></h4>
        ${ours || '<div class="pempty">아직 반복 주제가 없습니다</div>'}</div>
      <div class="pcard"><h4>구글 검색 관심도 <span class="sub">${esc2(t.source||"")}</span></h4>
        ${gg || '<div class="pempty">구글 관심도를 불러오지 못했습니다 (차단 또는 캐시 만료)</div>'}</div>`;
  }

  // --- 관계망: 폰에선 노드그래프 대신 상관 상위 목록이 읽기 쉽다 ---
  if(M.graph){
    const rows = M.graph.pairs.map(p=>{
      const pos = p.r>=0;
      return `<div class="prow"><span class="nm">${esc2(p.a)} ↔ ${esc2(p.b)}</span>
        <span class="pbar"><i style="width:${(Math.abs(p.r)*100).toFixed(0)}%;background:${pos?"var(--t-up)":"var(--t-down)"}"></i></span>
        <span class="vv ${pos?"ppos":"pneg"}">${p.r>=0?"+":""}${p.r.toFixed(2)}</span></div>`;}).join("");
    document.getElementById("psec-graph").innerHTML = `
      <div class="pcard"><h4>지표 상관관계 <span class="sub">6개월 종가 · |r|≥0.45 상위 ${M.graph.pairs.length}쌍</span></h4>
        ${rows}
        <div class="pempty">빨강 = 같이 움직임 · 파랑 = 반대로 움직임</div></div>`;
  }

  // --- 시스템 ---
  if(M.system){
    const S = M.system, b = S.budget||{};
    const pct = b.limit? Math.min(100, b.used/b.limit*100) : 0;
    const runs = (S.runs||[]).map(r=>`<div class="prow"><span class="nm">${esc2(r.time)} 회의</span>
        <span class="vv">${r.calls}콜 ${r.ok?"":"· 실패"}</span></div>`).join("")
        || '<div class="pempty">오늘 회의 기록 없음</div>';
    const tl = (S.timeline||[]).slice().reverse().map(e=>`<div class="prow">
        <span class="vv" style="opacity:.5">${esc2(e.ts)}</span>
        <span class="nm">${esc2(e.who)} · ${esc2(e.what)}</span>
        <span class="vv">${e.ok?"":"✕"}</span></div>`).join("")
        || '<div class="pempty">기록 없음</div>';
    const errs = (S.errors||[]).map(e=>`<div class="prow">
        <span class="vv" style="opacity:.5">${esc2(e.ts)}</span>
        <span class="nm">${esc2(e.who)} ${esc2(e.msg)}</span></div>`).join("")
        || '<div class="pempty">최근 에러 없음</div>';
    const ev = Object.entries(S.events||{}).map(([k,v])=>`<div class="prow">
        <span class="nm">${esc2(k)}</span><span class="vv">${v}</span></div>`).join("");
    let cal = "";
    if(S.calibration){
      cal = Object.entries(S.calibration).map(([who,hz])=>`<div class="prow">
        <span class="nm">${esc2(who)}</span>
        <span class="vv">${Object.entries(hz).map(([h,v])=>
          `${h} ${v.hit==null?"—":Math.round(v.hit*100)+"%"}(n=${v.n||0})`).join(" · ")}</span></div>`).join("");
    }
    document.getElementById("psec-system").innerHTML = `
      <div class="pcard"><h4>오늘 AI 예산 <span class="sub">계정 ${b.keys||"?"}개</span></h4>
        <div class="prow"><span class="nm">사용</span>
          <span class="vv">${(b.used||0).toLocaleString()} / ${(b.limit||0).toLocaleString()}콜</span></div>
        <div class="pbar" style="width:100%;margin-top:6px"><i style="width:${pct}%;background:${pct>=90?"var(--t-up)":"var(--t-accent)"}"></i></div>
        <div style="margin-top:8px">${runs}</div></div>
      <div class="pcard"><h4>이벤트 요약 <span class="sub">최근 스트림</span></h4>${ev||'<div class="pempty">없음</div>'}</div>
      ${cal?`<div class="pcard"><h4>요원 예측 성적 <span class="sub">기간별 적중률</span></h4>${cal}</div>`:""}
      <div class="pcard"><h4>뇌 시퀀스 <span class="sub">누가 무엇을 호출했나</span></h4>${tl}</div>
      <div class="pcard"><h4>최근 에러</h4>${errs}</div>
      ${pcCard()}`;
  }
  pgo(_ptab);
}

function renderPower(){
  const el = document.getElementById("powerPanel");
  const p = DATA.power;
  if(!p){
    el.innerHTML = `<div class="power-txt">⚡ 전력 관제 · <span style="color:var(--t-dim)">키 승인 대기 중…</span></div>`;
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
renderAnalysts(); renderResearch(); renderChart(); renderPower(); renderLab(); renderTicker(); renderPhoneTabs();
setTheme(curTheme());   // 저장된 테마의 이름표·브랜드명·배경 기운을 화면에 맞춘다
loadPC();   // PC 데이터가 도착하면 지표·뉴스 탭이 저절로 채워진다(실패해도 위 화면은 그대로)
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
