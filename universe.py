# coding=utf-8
"""
universe.py — 모의투자 실험의 **투자 대상 6종목**과 계좌 규칙.

⚠️ 이건 전부 **가상계좌 시뮬레이션**이다. 실계좌 주문 코드는 이 저장소 어디에도 없고,
   앞으로도 만들지 않는다. 목적은 "AI 예측이 시간이 갈수록 나아지는가"를 재는 것이지
   돈을 굴리는 게 아니다. 그리고 이 종목 구성은 **실험 설계**(분산·데이터 확보·전공 연결)이지
   투자 권유가 아니다.

선정 기준 (왜 이 6개인가)
-------------------------
1. **야후에서 일별 종가가 안정적으로 조회된다** — 채점이 끊기면 실험이 죽는다.
   (전력 API처럼 키가 만료되면 그 종목이 통째로 공백이 되는 사태를 피한다. 실측으로 6개월치
    확인함: 국내 121일 / 해외 125일 / 환율 130일)
2. **국내 3 · 해외 3** — 한 시장에 몰리면 그날의 시장 방향이 곧 성적이 되어 AI 실력을 못 잰다.
3. **전력전자·전기기계 전공과 연결** — 사용자가 읽고 판단할 수 있어야 토론이 의미가 있다.
4. **1주 단위로 살 수 있는 가격대** — 5천만원 안에서 6종목 배분이 가능해야 한다.
   (가장 비싼 SK하이닉스 1주 ≈ 167만원 = 계좌의 3.3%)
5. **개별주 5 + ETF 1** — ETF 하나를 섞어 개별종목 리스크에만 노출되지 않게 한다.

나중에 7·8개로 늘릴 때는 아래 UNIVERSE에 한 줄만 추가하면 된다.
포트폴리오·채점·화면은 전부 이 목록을 읽어서 돈다.
"""
import os
import json
import datetime

KST = datetime.timezone(datetime.timedelta(hours=9))
BASE = os.path.dirname(os.path.abspath(__file__))

INITIAL_CAPITAL = 50_000_000        # 가상계좌 초기 자본 (원)
REVIEW_MONTHS = 6                   # 성과 결산 주기

# ---- 투자 대상 -------------------------------------------------------------------
# id     : 내부 식별자(파일·프롬프트에서 쓰는 이름)
# sym    : 야후 심볼
# ccy    : 표시 통화. USD면 원화 환산이 필요하다.
# sector : 토론에서 "왜 이 종목인가"의 기준
UNIVERSE = [
    {"id": "kepco", "name": "한국전력", "sym": "015760.KS", "ccy": "KRW",
     "sector": "전력 유틸리티(국내)",
     "why": "전력망 투자·요금 정책·연료비의 최종 수렴점. 전공 직결.",
     "watch": "전력망 확충 특별법, 요금 인상안, SMP와 연료비 스프레드"},
    {"id": "lselectric", "name": "LS ELECTRIC", "sym": "010120.KS", "ccy": "KRW",
     "sector": "전력기기(국내)",
     "why": "변압기·배전반. 데이터센터·전력망 증설의 직접 수혜/피해가 실적에 바로 찍힌다.",
     "watch": "북미 변압기 수주, 구리 가격(원가), 전력망 투자 집행"},
    {"id": "hynix", "name": "SK하이닉스", "sym": "000660.KS", "ccy": "KRW",
     "sector": "반도체(국내)",
     "why": "HBM. AI 사이클의 국내 대표. 전력 수요 증가의 출발점이기도 하다.",
     "watch": "HBM 공급계약, 메모리 가격, 미국 규제, 설비투자 발표"},
    {"id": "nvda", "name": "NVIDIA", "sym": "NVDA", "ccy": "USD",
     "sector": "AI 반도체(해외)",
     "why": "AI 데이터센터 수요의 진원지. 하이닉스와 같이 움직이는지 다르게 움직이는지가 관전 포인트.",
     "watch": "실적·가이던스, 데이터센터 매출, 대중국 규제"},
    {"id": "ceg", "name": "Constellation Energy", "sym": "CEG", "ccy": "USD",
     "sector": "원전 발전·데이터센터 전력(해외)",
     "why": "'AI가 전기를 먹는다'는 명제를 가격으로 검증하는 종목. 원전 PPA 계약이 핵심.",
     "watch": "데이터센터 전력공급계약(PPA), 전력 도매가, 원전 가동률"},
    {"id": "xle", "name": "Energy Select SPDR (XLE)", "sym": "XLE", "ccy": "USD",
     "sector": "에너지 ETF(해외)",
     "why": "유가·천연가스 노출. 개별종목 리스크를 분산하는 자리. 우리가 이미 WTI를 추적 중.",
     "watch": "WTI·천연가스, OPEC, 정유 마진"},
]
BY_ID = {u["id"]: u for u in UNIVERSE}
FX_SYM = "KRW=X"                    # 원/달러 (해외 종목 환산)

# ---- 거래 비용 (실제 증권사 수준으로 잡는다 — 0으로 두면 수익률이 부풀려진다) ----
FEE_KR = 0.00015                    # 국내 위탁수수료 0.015% (매수·매도 각각)
TAX_KR = 0.0018                     # 국내 증권거래세 0.18% (매도에만)
FEE_US = 0.0007                     # 해외 수수료 0.07% (매수·매도 각각)
# 환전 스프레드는 계좌가 원화 기준이므로 매매마다 적용
FX_SPREAD = 0.001                   # 편도 0.1%

MIN_WEIGHT_STEP = 0.05              # 목표비중은 5% 단위로만 받는다(잔손질 방지)
MAX_WEIGHT = 0.35                   # 한 종목 최대 35% — 몰빵으로 실험이 도박이 되지 않게
MIN_CASH = 0.0                      # 현금 비중 하한


def fetch_prices():
    """6종목 + 환율의 현재가·전일比·일별종가를 한 번에 긁는다.
    반환: (prices {id:{px,pct,closes}}, fx). 실패한 종목은 빠진다 — 가짜 값을 만들지 않는다."""
    from publish import fetch_yahoo
    prices = {}
    for u in UNIVERSE:
        try:
            px, pct, closes = fetch_yahoo(u["sym"], rng="6mo")
            if px:
                prices[u["id"]] = {"px": float(px), "pct": pct, "closes": closes}
        except Exception as e:
            print(f"  ⚠️ {u['name']} 시세 조회 실패: {type(e).__name__}: {e}")
    fx = None
    try:
        fx, _, _ = fetch_yahoo(FX_SYM, rng="5d")
    except Exception as e:
        print(f"  ⚠️ 환율 조회 실패: {type(e).__name__}: {e}")
    return prices, (float(fx) if fx else None)


def daily_closes(sym, rng="6mo"):
    """날짜→종가. 정산이 '그날 종가'를 필요로 한다."""
    import requests
    from publish import UA
    r = requests.get(f"https://query1.finance.yahoo.com/v8/finance/chart/{sym}",
                     params={"range": rng, "interval": "1d"}, headers=UA, timeout=20)
    r.raise_for_status()
    res = r.json()["chart"]["result"][0]
    ts = res.get("timestamp") or []
    cl = (res.get("indicators", {}).get("quote") or [{}])[0].get("close") or []
    return {datetime.datetime.fromtimestamp(t, datetime.timezone.utc).strftime("%Y-%m-%d"): float(c)
            for t, c in zip(ts, cl) if c is not None}


def costs(ccy, side):
    """매매 1회 비용률. side: 'buy' | 'sell'."""
    if ccy == "KRW":
        return FEE_KR + (TAX_KR if side == "sell" else 0.0)
    return FEE_US + FX_SPREAD


def brief(prices, fx, holdings=None):
    """토론에 넣을 종목 현황(0콜). prices: {id: {'px','pct'}}, fx: 원/달러."""
    lines = []
    for u in UNIVERSE:
        d = prices.get(u["id"]) or {}
        px, pct = d.get("px"), d.get("pct")
        if px is None:
            continue
        krw = px * fx if u["ccy"] == "USD" else px
        held = (holdings or {}).get(u["id"], 0)
        unit = "USD" if u["ccy"] == "USD" else "원"
        lines.append(
            f"  · {u['name']} [{u['id']}] {px:,.2f} {unit}"
            + (f" (≈{krw:,.0f}원)" if u["ccy"] == "USD" else "")
            + f" 전일比 {pct if pct is not None else '?'}%"
            + (f" · 보유 {held}주" if held else " · 미보유")
            + f"\n      {u['sector']} — {u['why']}")
    return ("[투자 대상 6종목 — 가상계좌 모의투자]\n" + "\n".join(lines)
            + f"\n원/달러 {fx:,.2f}원")
