# coding=utf-8
"""
portfolio.py — 가상계좌 5천만원의 장부. **전부 시뮬레이션이다.**

⚠️ 실계좌 주문 API는 호출하지 않는다. 이 파일이 하는 일은 "그때 그 가격에 샀다면"을
   기록하는 회계뿐이다. 그래서 실행해도 돈이 움직이지 않는다.

하루의 흐름
-----------
  회의(오늘)   알파가 6종목 **목표비중**과 **내일 평가액 예측**을 낸다 → orders에 저장
  다음 거래일  그날 종가로 리밸런싱을 체결하고(수수료·세금·환전 반영) 평가액을 찍는다
               → 어제의 평가액 예측을 실제와 대조해 채점한다

정직하게 잡은 것들
------------------
· **비용을 넣는다.** 수수료 0으로 두면 잦은 리밸런싱이 공짜가 되어 수익률이 부풀려진다.
  국내 0.015%(+매도세 0.18%), 해외 0.07%, 환전 스프레드 0.1%.
· **1주 단위로만 산다.** 소수점 주식은 국내 계좌에서 일반적이지 않다.
· **체결가는 다음 거래일 종가.** 장중 최적가로 체결했다고 가정하면 실험이 거짓말이 된다.
· **미래 가격을 쓰지 않는다.** 주문은 오늘 정보로 내고, 체결은 내일 가격으로 한다.
"""
import os
import json
import datetime

import universe as U

KST = datetime.timezone(datetime.timedelta(hours=9))
BASE = os.path.dirname(os.path.abspath(__file__))
PF_FILE = os.path.join(BASE, "portfolio.json")
EQ_FILE = os.path.join(BASE, "equity.jsonl")        # 일별 평가액 곡선
TR_FILE = os.path.join(BASE, "trades.jsonl")        # 체결 내역


def _empty():
    now = datetime.datetime.now(KST)
    return {"opened": now.strftime("%Y-%m-%d"),
            "capital": U.INITIAL_CAPITAL,
            "cash": float(U.INITIAL_CAPITAL),
            "holdings": {},                 # {id: shares}
            "cost_basis": {},               # {id: 평균매입가(원화 환산)}
            "pending": None,                # 다음 거래일에 체결할 목표비중
            "last_settled": None,
            "fees_paid": 0.0}


def load():
    try:
        with open(PF_FILE, encoding="utf-8") as f:
            pf = json.load(f)
    except (OSError, ValueError):
        pf = _empty()
        save(pf)
    return pf


def save(pf):
    try:
        with open(PF_FILE, "w", encoding="utf-8") as f:
            json.dump(pf, f, ensure_ascii=False, indent=1)
    except OSError:
        pass


def _krw(uid, px, fx):
    """표시가격 → 원화."""
    return px * fx if U.BY_ID[uid]["ccy"] == "USD" else px


def equity(pf, prices, fx):
    """현재 평가액(원). prices: {id: px(표시통화)}"""
    val = float(pf.get("cash", 0.0))
    for uid, sh in (pf.get("holdings") or {}).items():
        px = prices.get(uid)
        if px:
            val += sh * _krw(uid, px, fx)
    return round(val, 0)


def positions(pf, prices, fx):
    """종목별 평가 상세 — 화면·프롬프트가 함께 쓴다."""
    rows, tot = [], equity(pf, prices, fx)
    for u in U.UNIVERSE:
        sh = (pf.get("holdings") or {}).get(u["id"], 0)
        px = prices.get(u["id"])
        if not sh or not px:
            continue
        v = sh * _krw(u["id"], px, fx)
        cb = (pf.get("cost_basis") or {}).get(u["id"])
        rows.append({"id": u["id"], "name": u["name"], "shares": sh,
                     "price": px, "ccy": u["ccy"], "value": round(v, 0),
                     "weight": round(v / tot, 4) if tot else 0.0,
                     "cost": cb,
                     "pl_pct": round((_krw(u["id"], px, fx) / cb - 1) * 100, 2)
                     if cb else None})
    return rows, tot


def set_orders(pf, weights, forecast, meeting_id, note=""):
    """오늘 회의가 정한 목표비중과 내일 평가액 예측을 예약한다(체결은 다음 거래일)."""
    now = datetime.datetime.now(KST)
    w = {}
    for uid, x in (weights or {}).items():
        if uid in U.BY_ID:
            w[uid] = max(0.0, min(U.MAX_WEIGHT, float(x)))
    s = sum(w.values())
    if s > 1.0:                       # 합이 1을 넘으면 비례 축소(현금 음수 방지)
        w = {k: v / s for k, v in w.items()}
    pf["pending"] = {"date": now.strftime("%Y-%m-%d"), "meeting_id": meeting_id,
                     "weights": w, "forecast": forecast, "note": note[:300]}
    save(pf)
    return pf["pending"]


def settle(prices, fx, today=None, emit_fn=None):
    """다음 거래일 종가로 ①예약 주문 체결 ②평가액 기록 ③어제 예측 채점.
    prices: {id: px}, fx: 원/달러. 반환: 요약 dict."""
    pf = load()
    today = today or datetime.datetime.now(KST).strftime("%Y-%m-%d")
    if pf.get("last_settled") == today:
        return {"skipped": "오늘 이미 정산됨"}
    if not prices or not fx:
        return {"skipped": "가격 없음"}

    out = {"date": today, "trades": [], "forecast": None}
    pend = pf.get("pending")

    # ---- ① 어제 낸 '내일 평가액' 예측을 먼저 채점한다(체결 전 상태로 비교하면 안 된다) ----
    #     체결 뒤 평가액과 비교해야 "그 포트폴리오였다면 얼마"가 맞다.

    # ---- ② 리밸런싱 체결 ----
    if pend and pend.get("date") != today:      # 어제(이전) 회의가 낸 주문만 체결
        eq_before = equity(pf, prices, fx)
        target = pend.get("weights") or {}
        holdings = dict(pf.get("holdings") or {})
        cash = float(pf.get("cash", 0.0))
        basis = dict(pf.get("cost_basis") or {})

        # 매도 먼저(현금 확보) → 매수
        plan, skipped = [], []
        for u in U.UNIVERSE:
            uid = u["id"]
            px = prices.get(uid)
            if not px:
                # 시세 조회가 한 번 실패하면 그 종목은 통째로 빠지고 돈은 현금에 남는다.
                # 6개월 수익률 실험에서 이게 조용히 넘어가면 결과가 소리 없이 오염된다
                # (2026-08-07 XLE가 실제로 이렇게 빠졌고 아무 기록도 남지 않았다).
                if target.get(uid, 0.0) > 0:
                    skipped.append(u["name"])
                continue
            kp = _krw(uid, px, fx)
            want_val = eq_before * target.get(uid, 0.0)
            want_sh = int(want_val // kp)               # 1주 단위
            have_sh = holdings.get(uid, 0)
            plan.append((uid, kp, want_sh - have_sh))
        for uid, kp, d in sorted(plan, key=lambda x: x[2]):   # 음수(매도)가 먼저
            if d == 0:
                continue
            side = "buy" if d > 0 else "sell"
            n = abs(d)
            gross = n * kp
            fee = gross * U.costs(U.BY_ID[uid]["ccy"], side)
            if side == "buy":
                if cash < gross + fee:                  # 현금 부족 → 살 수 있는 만큼만
                    n = int(max(0, (cash) // (kp * (1 + U.costs(U.BY_ID[uid]["ccy"], "buy")))))
                    if n <= 0:
                        continue
                    gross = n * kp
                    fee = gross * U.costs(U.BY_ID[uid]["ccy"], "buy")
                cash -= gross + fee
                prev_sh = holdings.get(uid, 0)
                prev_cb = basis.get(uid) or kp
                holdings[uid] = prev_sh + n
                basis[uid] = round((prev_cb * prev_sh + kp * n) / (prev_sh + n), 4)
            else:
                cash += gross - fee
                holdings[uid] = holdings.get(uid, 0) - n
                if holdings[uid] <= 0:
                    holdings.pop(uid, None)
                    basis.pop(uid, None)
            pf["fees_paid"] = round(float(pf.get("fees_paid", 0.0)) + fee, 0)
            rec = {"date": today, "id": uid, "name": U.BY_ID[uid]["name"], "side": side,
                   "shares": n, "price_krw": round(kp, 2), "fee": round(fee, 0)}
            out["trades"].append(rec)
            try:
                with open(TR_FILE, "a", encoding="utf-8") as f:
                    f.write(json.dumps(rec, ensure_ascii=False) + "\n")
            except OSError:
                pass
        pf["holdings"], pf["cash"], pf["cost_basis"] = holdings, round(cash, 0), basis
        pf["pending"] = None
        if skipped:
            out["skipped"] = skipped
            print(f"  ⚠️ 시세를 못 받아 체결하지 못한 종목: {', '.join(skipped)}"
                  f" — 해당 비중은 현금으로 남습니다")
            if emit_fn:
                emit_fn("portfolio_skip", "brain", topic="가상계좌",
                        payload={"skipped": skipped, "date": today})

    # ---- ③ 평가 + 예측 채점 ----
    eq = equity(pf, prices, fx)
    ret = (eq / U.INITIAL_CAPITAL - 1) * 100
    row = {"date": today, "equity": eq, "return_pct": round(ret, 3),
           "cash": pf["cash"], "n_trades": len(out["trades"])}

    if pend and pend.get("forecast") and pend.get("date") != today:
        f = pend["forecast"]
        pred = f.get("equity")
        if pred:
            err = eq - pred
            row["forecast"] = pred
            row["err"] = round(err, 0)
            row["err_pct"] = round(err / eq * 100, 3) if eq else None
            lo, hi = f.get("lo"), f.get("hi")
            row["in_band"] = bool(lo and hi and lo <= eq <= hi)
            out["forecast"] = {"predicted": pred, "actual": eq, "err": row["err"],
                               "err_pct": row["err_pct"], "in_band": row["in_band"],
                               "by": f.get("by"), "issued": pend.get("date")}
            if emit_fn:
                emit_fn("portfolio_check", "brain", topic="가상계좌", payload=out["forecast"])

    try:
        with open(EQ_FILE, "a", encoding="utf-8") as f:
            f.write(json.dumps(row, ensure_ascii=False) + "\n")
    except OSError:
        pass
    pf["last_settled"] = today
    save(pf)
    out["equity"] = eq
    out["return_pct"] = row["return_pct"]
    if emit_fn:
        emit_fn("portfolio", "brain", topic="가상계좌",
                payload={"equity": eq, "return_pct": row["return_pct"],
                         "trades": len(out["trades"]), "cash": pf["cash"]})
    print(f"  💼 가상계좌 정산 — 평가액 {eq:,.0f}원 ({row['return_pct']:+.2f}%), "
          f"체결 {len(out['trades'])}건"
          + (f", 예측오차 {row.get('err_pct'):+.2f}%" if row.get("err_pct") is not None else ""))
    return out


def cost_note(equity_now):
    """비중을 옮길 때 실제로 나가는 돈을 **원 단위로** 알려 주는 문구.

    사용자 결정(2026-08-07): 리밸런싱 빈도는 줄이지 않는다. 대신 **비용을 판단에 넣는다.**
    비율(0.18%)로 말하면 요원이 체감을 못 한다 — "1%p 옮기면 몇 원"으로 환산해 준다.
    """
    one = (equity_now or U.INITIAL_CAPITAL) * 0.01          # 비중 1%p에 해당하는 금액
    kr = one * (U.costs("KRW", "sell") + U.costs("KRW", "buy"))
    us = one * (U.costs("USD", "sell") + U.costs("USD", "buy"))
    pf = load()
    paid = float(pf.get("fees_paid", 0.0))
    return (one, kr, us, paid,
            paid / U.INITIAL_CAPITAL * 100 if U.INITIAL_CAPITAL else 0.0)


def curve(days=200):
    """평가액 곡선. 화면이 쓴다."""
    rows = []
    try:
        with open(EQ_FILE, encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                try:
                    rows.append(json.loads(line))
                except ValueError:
                    continue
    except OSError:
        return []
    return rows[-days:]


def report():
    """성과 요약 — 6개월 결산과 화면이 함께 쓴다. **가짜 숫자 금지**: 데이터가 없으면 None."""
    pf = load()
    c = curve(4000)
    if not c:
        return {"opened": pf.get("opened"), "capital": U.INITIAL_CAPITAL,
                "equity": None, "return_pct": None, "days": 0,
                "note": "아직 정산 기록이 없습니다 — 첫 리밸런싱 다음 거래일부터 쌓입니다"}
    last = c[-1]
    eqs = [r["equity"] for r in c if r.get("equity")]
    peak, mdd = 0.0, 0.0
    for v in eqs:
        peak = max(peak, v)
        if peak:
            mdd = min(mdd, (v / peak - 1) * 100)
    errs = [abs(r["err_pct"]) for r in c if r.get("err_pct") is not None]
    band = [r for r in c if r.get("in_band") is not None]
    d0 = datetime.date.fromisoformat(pf.get("opened") or last["date"])
    d1 = datetime.date.fromisoformat(last["date"])
    elapsed = (d1 - d0).days
    return {
        "opened": pf.get("opened"), "capital": U.INITIAL_CAPITAL,
        "equity": last["equity"], "return_pct": last["return_pct"],
        "profit": round(last["equity"] - U.INITIAL_CAPITAL, 0),
        "days": elapsed, "records": len(c),
        "mdd_pct": round(mdd, 2),
        "fees_paid": pf.get("fees_paid", 0.0),
        "forecast_mae_pct": round(sum(errs) / len(errs), 3) if errs else None,
        "forecast_n": len(errs),
        "band_hit": round(sum(1 for r in band if r["in_band"]) / len(band), 3) if band else None,
        "review_due": (d0 + datetime.timedelta(days=U.REVIEW_MONTHS * 30)).isoformat(),
    }
