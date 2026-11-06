# -*- coding: utf-8 -*-
"""버전2 스토리 — 사실 후보 생성기 + 규칙 배치 (AI 없이, 콜 0).

설계: 루트 `버전2_컷설계표.md` (1장 규칙, 3장·4장 사용자 결정 2026-11-06), `버전2_음성_자막_조사.md` 3장.
- 사실 후보: 지표마다 오늘 변동·평소의 몇 배·N거래일 만의 최고/최저·연속·시장과 반대 + 전력·뉴스·AI 실험·내일 지켜볼 것.
- 숫자는 전부 여기서 계산한다. AI는 나중에 이 번호(id)를 고르고 문장만 쓴다. 이 파일의 기본 문장은 AI가 실패할 때 쓰는 대체 문장이다.
- 읽기만 한다. 상태 파일을 고치지 않는다. 결과는 --out 경로에만 쓴다.

실행: dashboard\\venv\\Scripts\\python.exe info-board\\story_facts.py --out scratch\\story_test.json [--no-net]
"""
import argparse, datetime, json, re, statistics, sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
API = HERE / "docs" / "api"
KST = datetime.timezone(datetime.timedelta(hours=9))

THEMES = ["sticker", "squeeze", "pasteup", "atelier", "dose"]   # 하루씩 차례로 (사용자 결정 2026-11-06)
ALARM_MW = 5500            # 공급예비력 경보선 (컷설계표 1-3)
MARKET = ["kospi", "samsung", "hynix", "kepco", "krw_usd", "sox", "nvidia", "us10y", "gold", "wti", "natgas", "copper"]
KR_STOCKS = {"samsung", "hynix", "kepco"}
SEC_PER_CUT = 6


def theme_for(d: datetime.date) -> str:
    """달력 날짜 번호 ÷ 5의 나머지. 어제 다음 옷이 오늘 옷."""
    return THEMES[d.toordinal() % len(THEMES)]


def load_json(p):
    return json.loads(Path(p).read_text(encoding="utf-8"))


def load_jsonl(p):
    p = Path(p)
    if not p.exists():
        return []
    return [json.loads(l) for l in p.read_text(encoding="utf-8").splitlines() if l.strip()]


def signed(x, nd=2):
    return ("−" if x < 0 else "+") + f"{abs(x):,.{nd}f}"


def num(x, nd):
    return f"{x:,.{nd}f}"


def short(name):
    """'구리 선물 (전력케이블 원가)' → '구리 선물'."""
    return re.sub(r"\s*\(.*?\)", "", name).strip()


def josa(word, pair):
    """받침 있으면 pair[0], 없으면 pair[1]. 예: josa('한국전력', '은는')."""
    ch = word.strip()[-1]
    if "가" <= ch <= "힣":
        return pair[0] if (ord(ch) - 0xAC00) % 28 else pair[1]
    return pair[1]


class Facts:
    def __init__(self):
        self.rows = []

    def add(self, bundle, kind, score, text, src, **data):
        fid = f"F{len(self.rows) + 1:02d}"
        self.rows.append({"id": fid, "bundle": bundle, "kind": kind, "score": round(float(score), 3),
                          "text": text, "src": src, **data})
        return fid


def trading_points(dates, vals):
    """값이 없거나 전날과 똑같은 값(주말·휴일 채움)은 뺀다."""
    pts = []
    for d, v in zip(dates, vals):
        if v is None:
            continue
        if pts and abs(v - pts[-1][1]) < 1e-9:
            continue
        pts.append((d, v))
    return pts


def market_facts(F, latest, hist, defs, story_date):
    rows = {r["id"]: r for r in latest["rows"]}
    dec = {d["id"]: d.get("dec", 2) for d in defs}
    gen = latest["generated"][:16].replace("T", " ")
    out = {}
    for mid in MARKET:
        r = rows.get(mid)
        series = hist["series"].get(mid)
        if not r or r.get("value") is None or not series:
            continue
        name, unit, nd = short(r["name"]), r["unit"], dec.get(mid, 2)
        src = f"latest.json {mid}, {gen} 게시"
        if r.get("pct") == 0 or (r.get("prev") is not None and abs(r["value"] - r["prev"]) < 1e-6):
            F.add("market", "stale", 0, f"{name}: 전날과 같은 값 — 아직 갱신 전", src, metric=mid, value=r["value"])
            continue
        pts = trading_points(hist["dates"], series)
        if len(pts) < 32:
            continue
        rets = [(pts[i][0], (pts[i][1] / pts[i - 1][1] - 1) * 100) for i in range(1, len(pts))]
        if rets[-1][0] != story_date.isoformat():
            continue                                   # 오늘 거래가 기록에 없음
        pct = r["pct"]
        sd = statistics.stdev([x for _, x in rets[-31:-1]])
        ratio = abs(pct) / sd if sd else 0
        word = "올랐다" if pct > 0 else "내렸다"
        mv = F.add("market", "move", ratio, f"{name} 하루 {signed(pct)}% {word} (평소 출렁임의 {ratio:.1f}배)", src,
                   metric=mid, name=name, unit=unit, value=r["value"], prev=r["prev"], pct=pct, sd=round(sd, 3),
                   ratio=round(ratio, 2), dec=nd, bars=[[d, round(x, 3)] for d, x in rets[-20:]])
        out[mid] = {"move": mv, "pct": pct, "ratio": ratio, "name": name}
        # N거래일 만의 최고·최저
        today_v = pts[-1][1]
        n = 0
        for _, v in reversed(pts[:-1]):
            if (pct < 0 and v > today_v) or (pct > 0 and v < today_v):
                break
            n += 1
        if n >= 20:
            what = "최저" if pct < 0 else "최고"
            F.add("market", "extreme", min(n / 20, 3) * 0.8, f"{name} {n}거래일 만에 {what} ({num(today_v, nd)}{unit})", src,
                  metric=mid, name=name, days=n, value=today_v)
        # 연속
        k = 0
        for _, x in reversed(rets):
            if (x > 0) != (pct > 0) or x == 0:
                break
            k += 1
        if k >= 3:
            F.add("market", "streak", k * 0.4, f"{name} {k}거래일 연속 {'상승' if pct > 0 else '하락'}", src,
                  metric=mid, name=name, days=k)
    # 시장과 반대로 간 것 (코스피가 평소 이상 움직인 날만)
    k = out.get("kospi")
    if k and k["ratio"] >= 1:
        for mid, m in out.items():
            if mid == "kospi" or (m["pct"] > 0) == (k["pct"] > 0) or m["ratio"] < 1:
                continue
            F.add("market", "contrary", m["ratio"] * 1.1,
                  f"코스피 {signed(k['pct'])}%인데 {m['name']}{josa(m['name'], '은는')} {signed(m['pct'])}%", "latest.json",
                  metric=mid, name=m["name"], pct=m["pct"], ref="kospi", ref_pct=k["pct"], refs=[k["move"], m["move"]])
    return out


def power_facts(F, latest, mix, hist):
    rows = {r["id"]: r for r in latest["rows"]}
    gen = latest["generated"][:16].replace("T", " ")
    pw = rows.get("reserve_pwr")
    level = None
    if pw and pw.get("value") is not None:
        mult = pw["value"] / ALARM_MW
        level = "넉넉" if mult >= 2 else ("빠듯" if mult >= 1 else "경보")
        score = {"넉넉": 0.6, "빠듯": 2.0, "경보": 5.0}[level]
        rr = rows.get("reserve_rate", {}).get("value")
        F.add("power", "reserve", score,
              f"공급예비력 {num(pw['value'], 0)}MW, 경보선 {ALARM_MW:,}MW의 {mult:.1f}배 ({level})"
              + (f", 예비율 {rr:.2f}%" if rr is not None else ""),
              f"latest.json reserve_pwr, {gen} 게시", value=pw["value"], alarm=ALARM_MW, mult=round(mult, 2), level=level,
              rate=rr)
    if mix and mix.get("fuels"):
        fuels = [f for f in mix["fuels"] if f["fuel"] != "총발전(현재수요)" and f["mw"] > 0]
        fuels.sort(key=lambda f: -f["mw"])
        top = fuels[:5]
        F.add("power", "mix", 0.5, "발전원: " + ", ".join(f"{f['fuel']} {num(f['mw'], 0)}MW" for f in top),
              f"powermix.json, {mix['at']} 기준", fuels=top)
    smp = rows.get("smp")
    series = hist["series"].get("smp")
    if smp and smp.get("pct") and series:
        pts = trading_points(hist["dates"], series)
        rets = [(pts[i][1] / pts[i - 1][1] - 1) * 100 for i in range(1, len(pts))]
        if len(rets) >= 31:
            sd = statistics.stdev(rets[-31:-1])
            ratio = abs(smp["pct"]) / sd if sd else 0
            F.add("power", "smp", ratio * 0.5, f"전기 도매가격(SMP) {smp['value']:.1f}원/kWh, 하루 {signed(smp['pct'])}%",
                  f"latest.json smp, {gen} 게시", value=smp["value"], pct=smp["pct"], ratio=round(ratio, 2))
    return level


def news_facts(F, news, story_date):
    rows = [r for r in (news or {}).get("rows", []) if (r.get("pub") or "").startswith(story_date.isoformat())]
    if not rows:
        return
    srcs = sorted({r["src"] for r in rows})
    F.add("news", "count", 0.6, f"전기신문 오늘 헤드라인 {len(rows)}건 (출처 {len(srcs)}곳)", "news.json", n=len(rows), sources=srcs)
    F.add("news", "headlines", 0.5, "헤드라인 " + str(min(5, len(rows))) + "줄", "news.json",
          items=[{"title": r["title"], "link": r["link"], "pub": r["pub"]} for r in rows[:5]])


def ai_facts(F, graded, equity, bench):
    if graded:
        last = max(g["date"] for g in graded)
        day = [g for g in graded if g["date"] == last and g.get("horizon") == "단기"]
        by = {}
        for g in day:
            w = by.setdefault(g["who"], [0, 0])
            w[1] += 1
            w[0] += 1 if g["actual"] * g["dir"] > 0 else 0
        if by:
            allshort = [g for g in graded if g.get("horizon") == "단기"]
            up = {k: round(sum(1 for g in allshort if g["who"] == k and g["dir"] > 0)
                           / max(1, sum(1 for g in allshort if g["who"] == k)) * 100) for k in by}
            F.add("ai", "last_grade", 1.0, f"마지막 채점 {last[5:].replace('-', '/')} (단기): "
                  + ", ".join(f"{k} {v[0]}/{v[1]} 맞힘" for k, v in sorted(by.items()))
                  + " — " + ", ".join(f"{k}는 '오른다'를 {up[k]}% 찍는 역할" for k in sorted(by)), "graded.jsonl",
                  date=last, by={k: {"hit": v[0], "n": v[1], "up_share": up[k]} for k, v in by.items()})
        rs = [g for g in graded if g.get("horizon") == "단기"]
        if rs:
            n = len(rs)
            hit = sum(1 for g in rs if g["actual"] * g["dir"] > 0) / n * 100
            base = sum(1 for g in rs if g["actual"] > 0) / n * 100
            brier = sum((g["p"] - (1 if g["actual"] * g["dir"] > 0 else 0)) ** 2 for g in rs) / n
            F.add("ai", "score_vs_base", 1.0,
                  f"단기 누적 {n:,}건 적중 {hit:.1f}% — 동전 50%, 늘 '오른다' {base:.1f}%. 확신 점수 {brier:.3f} (찍기 0.250, 낮을수록 좋음)",
                  "graded.jsonl", n=n, hit=round(hit, 1), coin=50.0, base=round(base, 1), brier=round(brier, 3), brier_coin=0.25)
    if equity:
        e = equity[-1]
        if bench.get("ok"):
            F.add("ai", "account_vs_hold", 1.0,
                  f"가상계좌 {signed(e['return_pct'])}% — 같은 6종목 그냥 들고 있었으면 {signed(bench['hold'])}%",
                  f"equity.jsonl + 야후 종가 {bench['since']}~{bench['until']}", ret=e["return_pct"], hold=bench["hold"],
                  date=e["date"], since=bench["since"], until=bench["until"])
        else:
            F.add("ai", "account_no_base", 0, f"가상계좌 {signed(e['return_pct'])}% — 비교값(단순보유) 계산 실패라 화면에 안 냄",
                  "equity.jsonl", ret=e["return_pct"], reason=bench.get("error", "no-net"))


def buy_and_hold(equity, net=True):
    """같은 6종목을 시작일에 똑같이 나눠 사서 그냥 들고 있었으면. 끝 값은 계좌 날짜의 종가로 고정(실행마다 안 흔들리게)."""
    if not net or not equity:
        return {"ok": False, "error": "no-net"}
    try:
        import requests
        since, until = equity[0]["date"], equity[-1]["date"]

        prev_day = (datetime.date.fromisoformat(until) - datetime.timedelta(days=1)).isoformat()

        def ret(sym, last_day):
            r = requests.get(f"https://query1.finance.yahoo.com/v8/finance/chart/{sym}",
                             params={"range": "1y", "interval": "1d"}, headers={"User-Agent": "Mozilla/5.0"}, timeout=15)
            res = r.json()["chart"]["result"][0]
            pts = [(datetime.datetime.fromtimestamp(t, datetime.timezone.utc).date().isoformat(), c)
                   for t, c in zip(res["timestamp"], res["indicators"]["quote"][0]["close"]) if c]
            start = next(c for d, c in pts if d >= since)
            end = [c for d, c in pts if d <= last_day][-1]   # 확정 종가만 (미국·환율은 한국 저녁 기준 전날 장)
            return end / start - 1

        fx = ret("KRW=X", prev_day)
        syms = {"kepco": "015760.KS", "lselectric": "010120.KS", "hynix": "000660.KS", "nvda": "NVDA", "ceg": "CEG", "xle": "XLE"}
        rets = [((1 + ret(s, prev_day)) * (1 + fx) - 1) if k in ("nvda", "ceg", "xle") else ret(s, until) for k, s in syms.items()]
        return {"ok": True, "hold": round(sum(rets) / len(rets) * 100, 2), "since": since, "until": until}
    except Exception as e:  # 숫자를 지어내지 않는다
        return {"ok": False, "error": type(e).__name__}


NUM_RE = re.compile(r"\d[\d,]*\.?\d*")


def numbers_ok(sentence, allowed):
    """문장 속 숫자가 전부 실제 데이터(allowed)와 맞는지. 연도·날짜(2026, 11, 05 같은 작은 정수)는 빼고 본다."""
    for tok in NUM_RE.findall(sentence):
        v = float(tok.replace(",", ""))
        if tok.isdigit() and (v <= 31 or 1990 <= v <= 2100):
            continue
        if not any(abs(v - a) <= max(0.011, abs(a) * 0.005) or abs(v - a / 10000) <= 0.5 for a in allowed):
            return False, tok
    return True, None


def reason_facts(F, disc, market, latest):
    """'왜?' 문장. 출처 달린 문장을 먼저, 없으면 요약 첫 문장('AI 추정'). 숫자가 실제와 다르면 버린다."""
    if not disc:
        return
    t = disc.get("time", "")[:16].replace("T", " ")
    allowed = []
    for r in latest["rows"]:
        for k in ("value", "prev", "pct"):
            if isinstance(r.get(k), (int, float)):
                allowed += [r[k], abs(r[k])]
    for mid, m in sorted(market.items(), key=lambda kv: -kv[1]["ratio"])[:3]:
        ind = (disc.get("indicators") or {}).get(mid)
        if not ind:
            continue
        cands = []
        sec = re.search(r"②\s*왜\**\s*(.+?)(?:\*\*③|$)", ind.get("detail") or "", re.S)
        if sec:   # "문장. [출처: X]" — 출처는 바로 앞 문장의 것
            for mm in re.finditer(r"([^.\[\]\n]+?[.다])\s*\[출처:\s*([^\]]+)\]", sec.group(1)):
                cands.append((mm.group(1).strip(), mm.group(2).strip(), True))
        for sent in re.split(r"(?<=[.])\s+", (ind.get("summary") or "").replace("\n", " ").strip()):
            if sent:
                cands.append((sent.strip(), None, False))
        for text, src, cited in cands:
            ok, bad = numbers_ok(text, allowed)
            if not ok:
                F.add("market", "reason_rejected", 0, text, f"AI 회의 {t} — 숫자 {bad}가 실제 데이터와 달라 버림",
                      metric=mid, bad_number=bad)
                continue
            F.add("market", "reason", m["ratio"] * (0.9 if cited else 0.6), text,
                  f"AI 회의 {t}, 출처 {src}" if cited else f"AI 회의 {t} — AI 추정(근거 링크 없음)",
                  metric=mid, cited=cited, reused=bool(ind.get("reused")))
            break


def watch_facts(F, disc, latest, hist):
    brief = (disc or {}).get("alpha_brief") or ""
    m = re.search(r"지켜볼 것:\s*([^\n]+)", brief)
    if not m:
        return
    line = m.group(1).strip()
    rows = {r["id"]: r for r in latest["rows"]}
    alias = {"구리": "copper", "코스피": "kospi", "환율": "krw_usd", "유가": "wti", "WTI": "wti", "금": "gold",
             "천연가스": "natgas", "한국전력": "kepco", "삼성전자": "samsung", "SK하이닉스": "hynix", "엔비디아": "nvidia", "SMP": "smp"}
    for word, mid in alias.items():
        if word in line and mid in rows:
            thr = re.search(r"(\d[\d,]*\.?\d*)", line)
            r = rows[mid]
            if thr and r.get("value"):
                t = float(thr.group(1).replace(",", ""))
                dist = (r["value"] - t) / r["value"] * 100
                pts = trading_points(hist["dates"], hist["series"].get(mid) or [])
                rets = [abs(pts[i][1] / pts[i - 1][1] - 1) * 100 for i in range(1, len(pts))][-30:]
                typ = statistics.mean(rets) if rets else None
                F.add("watch", "watch", 1.0,
                      f"AI가 짚은 내일 볼 것: {short(r['name'])} {t:g} 선. 지금 {r['value']:g}, 남은 거리 {abs(dist):.1f}%"
                      + (f" (평소 하루 움직임 {typ:.1f}% → 약 {abs(dist) / typ:.0f}일치)" if typ else ""),
                      f"AI 회의 {disc.get('time', '')[:16].replace('T', ' ')} + latest.json", metric=mid, name=short(r["name"]), line=line,
                      threshold=t, now=r["value"], dist=round(dist, 2), typical=round(typ, 2) if typ else None)
            return
    F.add("watch", "watch", 0.5, f"AI가 짚은 내일 볼 것: {line}", "AI 회의 — 숫자 대조 못 함", line=line)


# ---------- 규칙 배치 (AI가 실패해도 이걸로 화면이 나온다) ----------
def explain_count(intensity):
    return 0 if intensity < 1 else (2 if intensity < 2 else 4)


def layout(F, story_date):
    by = {}
    for f in F.rows:
        by.setdefault(f["bundle"], []).append(f)
    best = lambda b, kind=None: sorted([f for f in by.get(b, []) if f["score"] > 0 and (kind is None or f["kind"] == kind)],
                                       key=lambda f: -f["score"])
    bundles = []
    # 시장
    moves = best("market", "move")
    if moves:
        inten = moves[0]["score"]
        k = next((f for f in moves if f["metric"] == "kospi"), moves[0])
        lead = k if k["score"] >= 1 else moves[0]
        n = explain_count(inten)
        if n:
            cuts = [{"frame": "lead", "facts": [lead["id"]]}]
            pool = []
            same = [f for f in moves if f["id"] != lead["id"] and f["score"] >= 1 and (f["pct"] > 0) == (lead["pct"] > 0)]
            if same:
                pool.append({"frame": "numbers", "facts": [f["id"] for f in same[:3]]})
            pool.append({"frame": "graph", "facts": [lead["id"]]})
            for f in best("market", "contrary")[:1]:
                pool.append({"frame": "contrary", "facts": [f["id"]]})
            for f in best("market", "reason")[:1]:
                pool.append({"frame": "reason", "facts": [f["id"]]})
            for f in (best("market", "extreme") + best("market", "streak"))[:1]:
                pool.append({"frame": "numbers", "facts": [f["id"]]})
            cuts += pool[:n]
            bundles.append({"bundle": "market", "intensity": round(inten, 2), "cuts": cuts})
    # 전력
    res = best("power", "reserve")
    if res:
        r = res[0]
        lvl = r["level"]
        inten = r["score"]
        if lvl == "넉넉":
            cuts = [{"frame": "combo", "facts": [r["id"]] + [f["id"] for f in best("power", "mix")[:1]]}]
        else:
            cuts = [{"frame": "lead", "facts": [r["id"]]}]
            extra = [{"frame": "picture", "facts": [f["id"]]} for f in best("power", "mix")[:1]] + \
                    [{"frame": "numbers", "facts": [f["id"]]} for f in best("power", "smp")[:1]]
            cuts += extra[: (2 if lvl == "빠듯" else 4)]
        bundles.append({"bundle": "power", "intensity": round(inten, 2), "cuts": cuts, "first": lvl == "경보"})
    # 뉴스
    nc = best("news", "count")
    if nc:
        hl = best("news", "headlines")[:1]
        cuts = [{"frame": "lead", "facts": [nc[0]["id"]] + [f["id"] for f in hl]}] + [{"frame": "table", "facts": [f["id"]]} for f in hl]
        bundles.append({"bundle": "news", "intensity": nc[0]["score"], "cuts": cuts})
    # AI 실험 (끝에서 두 번째 고정)
    lg = best("ai", "last_grade")
    if lg:
        cuts = [{"frame": "lead", "facts": [lg[0]["id"]]}]
        cuts += [{"frame": "compare", "facts": [f["id"]]} for f in best("ai", "score_vs_base")[:1]]
        cuts += [{"frame": "numbers", "facts": [f["id"]]} for f in best("ai", "account_vs_hold")[:1]]
        bundles.append({"bundle": "ai", "intensity": 0, "cuts": cuts, "fixed": "second_last"})
    w = best("watch", "watch")
    if w:
        bundles.append({"bundle": "watch", "intensity": 0, "cuts": [{"frame": "teaser", "facts": [w[0]["id"]]}], "fixed": "last"})
    # 순서: 경보 전력 맨 앞 → 큰 일 순 → AI → 예고
    free = [b for b in bundles if "fixed" not in b]
    free.sort(key=lambda b: (not b.get("first"), -b["intensity"]))
    order = free + [b for b in bundles if b.get("fixed") == "second_last"] + [b for b in bundles if b.get("fixed") == "last"]
    total = sum(len(b["cuts"]) for b in order)
    return {"bundles": order, "cuts": total, "seconds": total * SEC_PER_CUT}


def build(story_date=None, net=True):
    latest = load_json(API / "latest.json")
    hist = load_json(API / "history.json")
    defs = load_json(API / "defs.json")
    defs = defs.get("indicators", []) if isinstance(defs, dict) else defs
    mix = load_json(API / "powermix.json") if (API / "powermix.json").exists() else None
    news = load_json(API / "news.json") if (API / "news.json").exists() else None
    disc = load_json(HERE / "discussions.json") if (HERE / "discussions.json").exists() else None
    graded = load_jsonl(HERE / "graded.jsonl")
    equity = load_jsonl(HERE / "equity.jsonl")
    if story_date is None:
        story_date = datetime.date.fromisoformat(latest["generated"][:10])
    F = Facts()
    market = market_facts(F, latest, hist, defs, story_date)
    reason_facts(F, disc, market, latest)
    power_facts(F, latest, mix, hist)
    news_facts(F, news, story_date)
    ai_facts(F, graded, equity, buy_and_hold(equity, net))
    watch_facts(F, disc, latest, hist)
    plan = layout(F, story_date)
    return {"date": story_date.isoformat(), "theme": theme_for(story_date), "data_at": latest["generated"],
            "meeting_at": (disc or {}).get("time"), "facts": F.rows, "plan": plan, "planned_by": "rule"}


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", required=True)
    ap.add_argument("--date")
    ap.add_argument("--no-net", action="store_true")
    a = ap.parse_args()
    s = build(datetime.date.fromisoformat(a.date) if a.date else None, net=not a.no_net)
    Path(a.out).write_text(json.dumps(s, ensure_ascii=False, indent=1), encoding="utf-8")
    live = [f for f in s["facts"] if f["score"] > 0]
    msg = [f"[생성] {a.out}  날짜 {s['date']}  옷 {s['theme']}  사실 {len(s['facts'])}개(점수>0 {len(live)}개)  "
           f"컷 {s['plan']['cuts']}장 약 {s['plan']['seconds']}초"]
    for b in s["plan"]["bundles"]:
        msg.append(f"  [{b['bundle']}] 세기 {b['intensity']}  " + " / ".join(f"{c['frame']}:{','.join(c['facts'])}" for c in b["cuts"]))
    for f in sorted(s["facts"], key=lambda f: -f["score"]):
        msg.append(f"  {f['id']} {f['bundle']:6} {f['kind']:15} {f['score']:5.2f}  {f['text'][:90]}")
    sys.stdout.buffer.write(("\n".join(msg) + "\n").encode("utf-8"))
