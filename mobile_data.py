# coding=utf-8
"""
mobile_data.py — 아이폰 공개 페이지에 실을 payload를 조립한다.

왜 별도 모듈인가
----------------
PC 대시보드(Flask)는 요청이 올 때마다 DB·파일을 읽어 API로 내려준다. 폰이 보는 페이지는
**정적 HTML 한 장**이라 그 방식을 쓸 수 없다 — 필요한 걸 미리 넣어 둬야 한다.
그런데 원본이 크다(녹취 11MB · 스트림 4.4MB · 트렌드 3.4MB). 그대로 실으면 폰에서 안 열린다.

그래서 여기서 **폰 화면이 실제로 보여줄 만큼만** 잘라 담는다. 자르는 기준은 전부
"사람이 폰에서 한 번에 볼 수 있는 양"이고, 상수로 모아 뒀다.

가짜 숫자 금지: 원천이 없으면 그 섹션은 None이고, 화면은 섹션 자체를 숨긴다.
"""
import os
import re
import json
import glob
import datetime
import collections

KST = datetime.timezone(datetime.timedelta(hours=9))
BASE = os.path.dirname(os.path.abspath(__file__))

# 폰 화면 기준 상한 — 이 숫자를 키우면 페이지가 무거워진다
MAX_CHAT_ENTRIES = 60       # 회의 녹취 발언 수
MAX_CHAT_CHARS = 700        # 발언 하나의 길이
MAX_MEETINGS = 12           # 회의 선택 목록
MAX_TREND_ROWS = 15
MAX_GRAPH_PAIRS = 18
MAX_ERRORS = 10
MAX_TIMELINE = 25


def _j(path, default=None):
    try:
        with open(path, encoding="utf-8") as f:
            return json.load(f)
    except (OSError, ValueError):
        return default


def _jsonl(path, tail=None):
    rows = []
    try:
        with open(path, encoding="utf-8") as f:
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
    return rows[-tail:] if tail else rows


# ---------- 토론방: 최신 회의 녹취 ----------
def chat_payload():
    files = sorted(glob.glob(os.path.join(BASE, "discussions", "*.json")), reverse=True)
    meetings, latest = [], None
    for p in files[:MAX_MEETINGS * 3]:
        d = _j(p)
        if not d:
            continue
        name = os.path.basename(p)[:-5]
        meetings.append({"id": name, "time": d.get("time", "")[:16],
                         "calls": d.get("calls_used", 0),
                         "lines": len(d.get("transcript") or [])})
        if latest is None and d.get("transcript"):
            latest = (name, d)
        if len(meetings) >= MAX_MEETINGS:
            break
    if not latest:
        return None
    name, d = latest
    tr = (d.get("transcript") or [])[-MAX_CHAT_ENTRIES:]
    return {
        "meeting": name, "time": d.get("time", ""), "calls": d.get("calls_used", 0),
        "meetings": meetings,
        "brief": (d.get("alpha_brief") or "")[:1600],
        "news": {"context": ((d.get("news_brief") or {}).get("context") or "")[:900]},
        "lines": [{"who": t.get("role", "?"), "topic": (t.get("topic") or "")[:40],
                   "text": (t.get("text") or "")[:MAX_CHAT_CHARS]} for t in tr],
    }


# ---------- 트렌드 ----------
def trends_payload():
    """우리 관측 트렌드 + 구글 관심도.

    ⚠️ trends.json은 `{"topics": ...}`가 아니라 **[{date, text, vec}] 리스트**다
    (임베딩 원본 1,368행). 처음엔 dict라고 가정했다가 통째로 None이 나왔다.
    화면에 필요한 건 '최근 N일 안에 같은 주제가 몇 번 나왔나'이므로 여기서 집계한다."""
    rows = _j(os.path.join(BASE, "trends.json"), []) or []
    ours = []
    if isinstance(rows, list) and rows:
        cutoff = (datetime.datetime.now(KST) - datetime.timedelta(days=14)).strftime("%Y-%m-%d")
        recent = [r for r in rows if isinstance(r, dict) and (r.get("date") or "") >= cutoff]
        # 제목 앞부분이 같으면 같은 주제로 본다(임베딩 재계산은 폰 페이지에 과하다)
        cnt = collections.Counter()
        days = collections.defaultdict(set)
        for r in recent:
            key = re.sub(r"\s+", " ", str(r.get("text") or ""))[:28]
            if len(key) < 6:
                continue
            cnt[key] += 1
            days[key].add(r.get("date"))
        for k, c in cnt.most_common(MAX_TREND_ROWS):
            ours.append({"topic": k, "count": c, "days": len(days[k])})

    g = _j(os.path.join(BASE, "gtrends_cache.json")) or {}
    series = (g.get("series") or {}) if isinstance(g, dict) else {}
    google = [{"kw": k, "series": [int(x) for x in (v or [])][-40:],
               "now": (v or [0])[-1]} for k, v in list(series.items())[:6]]
    if not ours and not google:
        return None
    return {"ours": ours, "google": google, "source": str(g.get("source") or "")[:40],
            "fetched": str(g.get("fetched") or "")[:16],
            "window": "최근 14일 뉴스"}


# ---------- 관계망: 지표 상관 (상위 쌍만) ----------
def graph_payload():
    try:
        from registry import get_registry
        from publish import INDICATORS, fetch_yahoo
    except ImportError:
        return None
    closes = {}
    for _id, name, sym, unit, dec in INDICATORS:
        try:
            _, _, cl = fetch_yahoo(sym, rng="6mo")
            if cl and len(cl) >= 40:
                closes[_id] = (name, cl)
        except Exception:
            continue
    if len(closes) < 3:
        return None
    reg = get_registry()
    ids, pairs = list(closes), []
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
            if r is None or abs(r) < 0.45:
                continue
            pairs.append({"a": closes[a][0], "b": closes[c][0], "r": round(float(r), 3)})
    pairs.sort(key=lambda p: -abs(p["r"]))
    return {"pairs": pairs[:MAX_GRAPH_PAIRS]} if pairs else None


# ---------- 시스템: 예산·수집상태·에러·뇌 타임라인 ----------
def system_payload():
    today = datetime.datetime.now(KST).strftime("%Y-%m-%d")
    out = {}

    u = _j(os.path.join(BASE, "key_usage.json")) or {}
    used = sum(int(v) for v in (u.get("counts") or {}).values()) if u.get("date") == today else 0
    try:
        from gemini_keys import discover_keys, PER_KEY_DAILY_LIMIT
        env = {}
        p = os.path.join(BASE, "..", ".env")
        if os.path.exists(p):
            for line in open(p, encoding="utf-8"):
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    k, v = line.split("=", 1)
                    env[k.strip()] = v.strip()
        nk = len(discover_keys({**env, **os.environ})) or 2
        limit = PER_KEY_DAILY_LIMIT * nk
    except Exception:
        nk, limit = 2, 1000
    out["budget"] = {"used": used, "limit": limit, "keys": nk,
                     "remaining": max(0, limit - used)}

    runs = []
    for p in sorted(glob.glob(os.path.join(BASE, "discussions", f"{today}T*.json"))):
        d = _j(p) or {}
        runs.append({"time": (d.get("time") or "")[11:16], "calls": d.get("calls_used", 0),
                     "ok": bool(d.get("meeting_ok"))})
    out["runs"] = runs

    # 뇌 타임라인 — 누가 무엇을 호출했나 (최근 것만)
    tl = []
    for p in sorted(glob.glob(os.path.join(BASE, "logs", "*api_call_log.jsonl")))[-1:]:
        for r in _jsonl(p, tail=MAX_TIMELINE):
            tl.append({"ts": (r.get("ts") or "")[11:19], "who": r.get("agent", "?"),
                       "what": (r.get("topic") or "")[:28], "ok": r.get("ok", True),
                       "kind": "api"})
    for p in sorted(glob.glob(os.path.join(BASE, "logs", "*tool_call_log.jsonl")))[-1:]:
        for r in _jsonl(p, tail=MAX_TIMELINE):
            tl.append({"ts": (r.get("ts") or "")[11:19], "who": r.get("tool", "도구"),
                       "what": (str(r.get("args") or ""))[:28], "ok": r.get("ok", True),
                       "kind": "tool"})
    tl.sort(key=lambda x: x["ts"])
    out["timeline"] = tl[-MAX_TIMELINE:]

    # 최근 에러 — 스트림의 error 이벤트
    errs = []
    for p in sorted(glob.glob(os.path.join(BASE, "stream", "*.jsonl")))[-1:]:
        for r in _jsonl(p, tail=800):
            if r.get("type") == "error":
                pl = r.get("payload") or {}
                errs.append({"ts": (r.get("ts") or "")[5:16], "who": r.get("actor", "?"),
                             "msg": str(pl.get("err") or "")[:90]})
    out["errors"] = errs[-MAX_ERRORS:]

    # 반사신경·예측 회로 요약
    ev = collections.Counter()
    for p in sorted(glob.glob(os.path.join(BASE, "stream", "*.jsonl")))[-1:]:
        for r in _jsonl(p, tail=1500):
            ev[r.get("type")] += 1
    out["events"] = dict(ev.most_common(8))

    cal = _j(os.path.join(BASE, "calibration.json")) or {}
    agents = {}
    for who, st in (cal.get("agents") or {}).items():
        hz = {}
        for h, v in (st.get("horizons") or {}).items():
            sc = v.get("score") or {}
            hz[h] = {"n": v.get("n"), "hit": sc.get("hit_rate"), "w": v.get("weight")}
        if hz:
            agents[who] = hz
    out["calibration"] = agents or None
    return out


def build():
    """폰 페이지에 실을 전체 payload. 실패한 섹션은 None이라 화면이 알아서 숨긴다."""
    out = {}
    for name, fn in (("chat", chat_payload), ("trends", trends_payload),
                     ("graph", graph_payload), ("system", system_payload)):
        try:
            out[name] = fn()
        except Exception as e:
            print(f"  ⚠️ 폰 payload '{name}' 생성 실패(섹션 생략): {type(e).__name__}: {e}")
            out[name] = None
    return out
