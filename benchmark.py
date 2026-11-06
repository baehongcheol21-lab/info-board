# coding=utf-8
"""
benchmark.py — 성적표 기준선 (2026-11-06 사용자 결정: "성적표에는 항상 동전(50%)과 단순보유 기준선을 나란히")

1) 예측 기준선 — graded.jsonl에서 기간별로
   · 동전: 적중 50%, Brier 0.250 (아무 정보 없이 반반)
   · 늘 "오른다": 그 기간 실제 상승 비율(상승 기저율) — 매번 "오른다"고만 했을 때의 적중률
2) 가상계좌 기준선 — 같은 6종목 단순보유
   · 계좌 시작일(equity.jsonl 첫 날) 종가로 6종목을 1/6씩 사서 그대로 둔 경우의 수익률.
   · **확정 종가**(그날 또는 그 전 마지막 거래일 종가)만 쓴다 — 장중 가격을 쓰면 실행마다 값이
     흔들린다(HANDOFF 1장: 단순보유 −8.4 ~ −10.2% 흔들림 문제).
   · 해외 종목은 원/달러 종가로 원화 환산. 수수료·세금은 넣지 않는다(가상계좌는 낸다 — 그만큼 계좌에 불리).
가짜 숫자 금지: 가격을 못 받으면 None을 돌려준다(0이나 추정치로 채우지 않는다).
"""
import os
import json
import datetime

BASE = os.path.dirname(os.path.abspath(__file__))
GRADED_FILE = os.path.join(BASE, "graded.jsonl")
EQUITY_FILE = os.path.join(BASE, "equity.jsonl")
COIN_BRIER = 0.25


def _jsonl(path):
    out = []
    try:
        with open(path, encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line:
                    try:
                        out.append(json.loads(line))
                    except ValueError:
                        pass
    except OSError:
        pass
    return out


def forecast_scoreboard(who=None, rows=None):
    """기간별 성적 + 기준선. who=None이면 전원, '알파'면 알파만.
    반환 {기간: {n, hit, brier, coin_hit, coin_brier, up_rate, brier_raw}}"""
    rows = _jsonl(GRADED_FILE) if rows is None else rows
    out = {}
    for hz in ("단기", "중기", "장기"):
        rs = [r for r in rows if r.get("horizon") == hz and r.get("dir") in (1, -1)
              and r.get("p") is not None and r.get("actual") not in (None, 0)
              and (who is None or r.get("who") == who)]
        if not rs:
            out[hz] = {"n": 0}
            continue
        ok = [(r["actual"] > 0) == (r["dir"] > 0) for r in rs]
        n = len(rs)
        brier = sum((float(r["p"]) - o) ** 2 for r, o in zip(rs, ok)) / n
        raw = [r for r in rs if r.get("p_raw") is not None]
        brier_raw = (sum((float(r["p_raw"]) - ((r["actual"] > 0) == (r["dir"] > 0))) ** 2 for r in raw)
                     / len(raw)) if raw else None
        out[hz] = {"n": n, "hit": round(sum(ok) / n, 4), "brier": round(brier, 4),
                   "brier_raw": round(brier_raw, 4) if brier_raw is not None else None,
                   "coin_hit": 0.5, "coin_brier": COIN_BRIER,
                   "up_rate": round(sum(r["actual"] > 0 for r in rs) / n, 4)}
    return out


KST = datetime.timezone(datetime.timedelta(hours=9))


def _final_only(closes, ccy, now=None):
    """아직 장이 안 끝난 오늘 봉을 뺀다(확정 종가만). 한국장 15:30 마감 → 16:00 KST 이후 확정.
    미국장(USD)·환율은 한국 시각 다음 날 07:00 이후 확정으로 본다(서머타임 무관하게 안전한 쪽)."""
    now = now or datetime.datetime.now(KST)
    out = {}
    for d, c in closes.items():
        day = datetime.datetime.strptime(d, "%Y-%m-%d").replace(tzinfo=KST)
        if ccy == "KRW":
            final_at = day.replace(hour=16)
        else:
            final_at = day + datetime.timedelta(days=1, hours=7)
        if now >= final_at:
            out[d] = c
    return out


def _close_on_or_before(closes, day):
    ks = [d for d in closes if d <= day]
    return (max(ks), closes[max(ks)]) if ks else (None, None)


def buy_hold(start=None, end=None, fetch=None):
    """같은 6종목 동일비중 단순보유 수익률(%). 반환 {return_pct, start, end, n, method} 또는 None.
    fetch(symbol, ccy) -> {YYYY-MM-DD: 확정 종가} (시험용 주입; 기본은 야후 일봉에서 미확정 봉 제외)."""
    eq = _jsonl(EQUITY_FILE)
    if not eq:
        return None
    start = start or eq[0]["date"]
    end = end or eq[-1]["date"]
    if fetch is None:
        from forecast import _yahoo_daily

        def fetch(sym, ccy="KRW"):
            return _final_only(_yahoo_daily(sym, rng="1y"), ccy)
    import universe
    try:
        fx = fetch(universe.FX_SYM, "USD")
    except Exception:
        return None
    _, fx0 = _close_on_or_before(fx, start)
    _, fx1 = _close_on_or_before(fx, end)
    parts, used_end = [], []
    for u in universe.UNIVERSE:
        try:
            cl = fetch(u["sym"], u["ccy"])
        except Exception:
            return None   # 한 종목이라도 못 받으면 기준선을 내지 않는다(일부만 섞으면 다른 기준선이 된다)
        d0, p0 = _close_on_or_before(cl, start)
        d1, p1 = _close_on_or_before(cl, end)
        if not (p0 and p1):
            return None
        g = p1 / p0
        if u["ccy"] == "USD":
            if not (fx0 and fx1):
                return None
            g *= fx1 / fx0
        parts.append(g)
        used_end.append(d1)
    r = (sum(parts) / len(parts) - 1) * 100
    return {"return_pct": round(r, 2), "start": start, "end": end, "last_close": max(used_end),
            "n": len(parts), "method": "6종목 1/6씩 시작일 종가 매수·보유, 확정 종가, 수수료 제외"}


def account_vs_hold():
    """가상계좌 수익률과 단순보유를 나란히. 반환 {account_pct, hold_pct, diff_pp, ...} 또는 None."""
    eq = _jsonl(EQUITY_FILE)
    if not eq:
        return None
    last = eq[-1]
    bh = buy_hold(start=eq[0]["date"], end=last["date"])
    out = {"date": last["date"], "account_pct": last.get("return_pct"),
           "hold_pct": bh["return_pct"] if bh else None, "hold": bh}
    if bh and last.get("return_pct") is not None:
        out["diff_pp"] = round(last["return_pct"] - bh["return_pct"], 2)
    return out


if __name__ == "__main__":
    import sys
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass
    print(json.dumps({"전원": forecast_scoreboard(), "알파": forecast_scoreboard("알파"),
                      "계좌": account_vs_hold()}, ensure_ascii=False, indent=1))
