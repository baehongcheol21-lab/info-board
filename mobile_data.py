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
MAX_CHAT_CHARS = 700        # 페이지에 인라인으로 싣는 발언 하나의 길이
# 회의 파일은 탭했을 때만 받으므로 넉넉해도 된다. 700자로 자르면 요원의 ①~⑤ 구조가
# ⑤ 직전에서 끊겨 결론이 사라진다(실제로 그렇게 잘려 있었다).
MAX_CHAT_CHARS_FILE = 2400
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


def _latest_disc():
    files = sorted(glob.glob(os.path.join(BASE, "discussions", "*.json")), reverse=True)
    for p in files[:20]:
        d = _j(p)
        if d and d.get("transcript"):
            return os.path.basename(p)[:-5], d
    return None, {}


# ---------- 지표: PC의 핵심/전기/경제/오리지널 4개 탭을 한 화면에 ----------
# PC는 탭 4개에 지표를 나눠 담는다. 폰에서 거의 같은 탭 4개를 만드는 건 스크롤만 늘린다 —
# 한 탭 안에서 그룹 칩으로 거르는 편이 손가락으로 쓰기 낫다. 지표 자체는 하나도 빠지지 않는다.
GROUPS = {
    "krw_usd": ["core", "elec", "econ"], "kospi": ["core", "econ"],
    "sox": ["core", "econ"], "natgas": ["elec"], "copper": ["elec"],
    "wti": ["elec", "econ"], "kepco": ["elec"], "samsung": ["original"],
    "hynix": ["original"], "nvidia": ["original"],
    "gold": ["econ", "original"], "us10y": ["econ", "original"],
    # 전력 계열은 정부 API에서 오는 파생 지표다(수급/SMP)
    "pwr_rate": ["core", "elec"], "pwr_demand": ["core", "elec"],
    "pwr_supply": ["elec"], "smp": ["core", "elec"],
}
MAX_SPARK = 40


def indicators_payload(series=None, power=None, smp=None):
    """지표 카드 — 값·변동률·스파크라인·이동평균 + 그 지표에 대한 AI 해석.

    `series`는 publish.py가 티커를 만들며 **이미 받아 둔** 종가다. 여기서 다시 받으면
    같은 심볼을 두 번 긁는 셈이라 그대로 넘겨받는다(요청 수 = 0).
    AI 해석은 최신 회의의 `indicators[id]`에 들어 있는 요약·상세·판정을 쓴다.
    """
    _mid, d = _latest_disc()
    ai = d.get("indicators") or {}
    rows = []
    for _id, meta in (series or {}).items():
        cl = meta.get("closes") or []
        a = ai.get(_id) or {}
        rows.append({
            "id": _id, "name": meta.get("name"), "unit": meta.get("unit"),
            "value": meta.get("value"), "pct": meta.get("pct"),
            "spark": [round(float(x), 4) for x in cl[-MAX_SPARK:]],
            "ma20": meta.get("ma20"), "ma60": meta.get("ma60"),
            "dec": meta.get("dec", 2), "groups": GROUPS.get(_id, []),
            "ai": (a.get("summary") or "")[:400] or None,
            "detail": (a.get("detail") or "")[:900] or None,
            "verdict": a.get("verdict"),
        })

    # 전력 계열 — 수치만 있고 시계열이 없으므로 스파크라인은 비운다
    if power:
        for key, name, unit, val in (
            ("pwr_rate", "전력 공급예비율", "%", power.get("rate")),
            ("pwr_demand", "현재 전력수요", "MW", power.get("demand")),
            ("pwr_supply", "공급능력", "MW", power.get("supply"))):
            if val is None:
                continue
            rows.append({"id": key, "name": name, "unit": unit, "value": val,
                         "pct": None, "spark": [], "ma20": None, "ma60": None,
                         "groups": GROUPS.get(key, []), "ai": None,
                         "detail": None, "verdict": None})
    if smp is not None:
        rows.append({"id": "smp", "name": "SMP 계통한계가격", "unit": "원/kWh",
                     "value": smp, "pct": None, "spark": [], "ma20": None, "ma60": None,
                     "groups": GROUPS["smp"], "ai": None, "detail": None, "verdict": None})
    if not rows:
        return None
    # 값은 '지금' 시세인데 해석은 '회의 시각' 기준이다. 이 둘이 어긋나면(장중 급변) 화면에서
    # 서로 모순돼 보인다 — 해석에 회의 시각을 붙여 어느 시점의 판단인지 드러낸다.
    return {"rows": rows, "meeting": _mid, "at": (d.get("time") or "")[11:16],
            "groups": [{"id": "all", "name": "전체"}, {"id": "core", "name": "핵심"},
                       {"id": "elec", "name": "전기"}, {"id": "econ", "name": "경제"},
                       {"id": "original", "name": "오리지널"}]}


# ---------- 브리핑덱: 오늘의 요점을 카드로 ----------
def deck_payload(series=None):
    """알파의 총평을 문단 단위로 쪼개 카드로 만든다.

    PC의 브리핑덱은 스와이프 카드다. 없는 내용을 지어내지 않는다 — 알파가 실제로 쓴 문단,
    실제 변동 상위 지표, 실제 뉴스 맥락만 카드가 된다.
    """
    mid, d = _latest_disc()
    cards = []
    brief = (d.get("alpha_brief") or "").strip()
    if brief:
        # "오늘 지켜볼 것:"은 성격이 달라 따로 뗀다
        watch = None
        m = re.search(r"오늘 지켜볼 것\s*[:：]\s*(.+)$", brief, re.S)
        if m:
            watch = m.group(1).strip()
            brief = brief[:m.start()].strip()
        # 짧은 문단은 다음 문단에 붙인다. "오늘은 3건이 특이합니다." 한 줄이 카드 한 장을
        # 통째로 차지해서 화면 대부분이 빈 공간이었다 — 도입 문장은 본문과 같은 카드가 맞다.
        paras, buf = [], ""
        for p in [x.strip() for x in brief.split("\n\n") if x.strip()]:
            buf = (buf + "\n" + p).strip() if buf else p
            if len(buf) >= 45:
                paras.append(buf)
                buf = ""
        if buf:
            if paras:
                paras[-1] += "\n" + buf
            else:
                paras.append(buf)
        for para in paras:
            cards.append({"kind": "brief", "title": "알파 총평", "text": para[:500]})
        if watch:
            cards.append({"kind": "watch", "title": "오늘 지켜볼 것", "text": watch[:500]})

    movers = sorted([(abs(v.get("pct") or 0), k, v) for k, v in (series or {}).items()],
                    reverse=True)[:3]
    for _a, _k, v in movers:
        if not v.get("pct"):
            continue
        # 알파 총평은 회의 시각 기준, 이 값은 페이지 갱신 시각 기준이다. 장중에 크게 움직이면
        # 앞뒤 카드의 숫자가 달라 보이는데 둘 다 맞는 값이므로 기준 시각을 적어 준다.
        cards.append({"kind": "mover", "title": f"오늘의 변동 · {v.get('name')}",
                      "text": f"{v.get('value')} {v.get('unit') or ''} · 전일 대비 "
                              f"{'+' if v['pct'] >= 0 else ''}{v['pct']:.2f}%\n"
                              f"(페이지 갱신 시각 기준 — 위 총평은 회의 시각 기준입니다)",
                      "pct": v["pct"]})

    ctx = ((d.get("news_brief") or {}).get("context") or "").strip()
    if ctx:
        cards.append({"kind": "news", "title": "뉴스 맥락", "text": ctx[:700]})

    # 판정이 red인 지표 — 요원 스스로 "근거 부족"이라고 표시한 것들
    reds = [(k, (v.get("summary") or "")[:220])
            for k, v in (d.get("indicators") or {}).items()
            if str(v.get("verdict") or "").startswith("red")]
    for k, s in reds[:3]:
        nm = (series or {}).get(k, {}).get("name") or k
        cards.append({"kind": "red", "title": f"근거 부족 · {nm}", "text": s})

    if not cards:
        return None
    return {"cards": cards, "meeting": mid, "time": (d.get("time") or "")[:16]}


# ---------- 팀: 요원 로스터 ----------
def _readable(text):
    """사람이 읽을 글인가 — 기계 출력(JSON·도구 호출 결과·URL 덤프)이면 False.

    처음엔 '{' 나 '[' 로 시작하는지만 봤다. 그랬더니 화면에 두 개가 그대로 떴다:
      · 비투  ```json { "체계": ... }        ← 마크다운 코드펜스로 시작
      · 툴킷  search_news(...) 결과: [{'title': ..., 'link': 'https://...'}]
    시작 글자만으로는 못 거른다. 형태를 본다.
    """
    s = (text or "").strip()
    if not s:
        return False
    if s[0] in "{[" or s.startswith("```"):
        return False
    if re.search(r"\[\s*\{\s*['\"]", s):          # 리스트 안의 dict = 도구 결과
        return False
    if re.search(r"https?://\S{30,}", s):          # 긴 URL 덤프
        return False
    if s.count('"') + s.count("'") > 10:           # 따옴표 범벅 = 직렬화된 자료
        return False
    return True


ROSTER = [
    ("U1", "유원", "기술적 분석"), ("U2", "이투", "뉴스 분석"),
    ("B2", "비투", "기본적 분석"), ("🧰도구", "툴킷", "데이터 수집"),
    ("U3", "삼추", "매수 논거"), ("U4", "사비", "매도 논거"),
    ("알파", "알파", "수석 · 총평"),
]


def team_payload():
    """요원별 활동량·최근 발언·예측 성적. PC의 팀 탭에 해당한다."""
    mid, d = _latest_disc()
    tr = d.get("transcript") or []
    if not tr:
        return None
    cnt = collections.Counter(t.get("role") for t in tr)
    # 읽을 수 있는 마지막 발언만 고른다. 읽을 게 하나도 없으면(비투는 이번 회의에 기사 분류
    # JSON 한 건이 전부다) 원문을 쏟는 대신 그렇다고 말한다 — 화면에 원시 JSON을 붙이는 건
    # 정보가 아니라 소음이다.
    last, machine_only = {}, set()
    for t in tr:
        r = t.get("role")
        if _readable(t.get("text")):
            last[r] = t
            machine_only.discard(r)
        elif r not in last:
            machine_only.add(r)
    cal = (_j(os.path.join(BASE, "calibration.json")) or {}).get("agents") or {}

    members = []
    for tag, name, role in ROSTER:
        st = cal.get(tag) or cal.get(name) or {}
        hz = []
        for h, v in (st.get("horizons") or {}).items():
            sc = v.get("score") or {}
            hz.append({"h": h, "n": v.get("n"), "hit": sc.get("hit_rate"),
                       "brier": sc.get("brier"), "w": v.get("weight")})
        lt = last.get(tag) or {}
        members.append({
            "tag": tag, "name": name, "role": role, "calls": cnt.get(tag, 0),
            "topic": (lt.get("topic") or "")[:40],
            "text": (lt.get("text") or "")[:600] or None,
            "machine": tag in machine_only,
            "horizons": hz,
        })
    return {"members": members, "meeting": mid, "total": len(tr),
            "calls": d.get("calls_used", 0)}


# ---------- 실험: 테마 예측 + 가상계좌 ----------
def lab_payload():
    """오늘 요원들이 6종목에 대해 내놓은 예측과, 만기가 남은 예측 대기열.

    가상계좌 숫자 자체는 publish.py가 이미 DATA.lab에 담는다 — 여기선 예측만 맡는다.
    """
    rows = _jsonl(os.path.join(BASE, "forecasts.jsonl"), tail=600)
    themes = [r for r in rows if r.get("kind") == "theme"]
    if not themes:
        return None
    # 날짜가 아니라 **최신 회의**로 거른다. 하루에 회의가 여러 번 돌면(오늘은 01:12·06:39)
    # 날짜로 거를 경우 같은 요원의 같은 기간 예측이 두 줄씩 겹쳐 보인다.
    latest_mid = max(r.get("meeting_id") or "" for r in themes)
    today_rows = [r for r in themes if r.get("meeting_id") == latest_mid]
    latest_date = (today_rows[0].get("date") if today_rows else "")

    by_theme = collections.OrderedDict()
    for r in today_rows:
        t = r.get("theme")
        by_theme.setdefault(t, {"name": r.get("theme_name") or t, "id": t,
                                "level": (r.get("levels") or {}).get(t), "preds": []})
        by_theme[t]["preds"].append({
            "who": r.get("who"), "h": r.get("horizon"), "days": r.get("days"),
            "dir": r.get("dir"), "p": r.get("p"), "lo": r.get("lo"), "hi": r.get("hi"),
        })
    for v in by_theme.values():
        v["preds"].sort(key=lambda x: ({"단기": 0, "중기": 1, "장기": 2}.get(x["h"], 9),
                                        str(x["who"])))
        # 강세론자(U3)와 약세론자(U4)가 방향·확률·구간까지 똑같으면 서로 독립적으로 판단한 게
        # 아닐 가능성이 크다. 숨기지 않고 화면에 표시한다 — 이건 실험이 관찰해야 할 대상이다.
        same = collections.defaultdict(dict)
        for p in v["preds"]:
            same[p["h"]][p["who"]] = (p["dir"], p["p"], p["lo"], p["hi"])
        v["twins"] = sorted((h for h, d in same.items()
                             if d.get("U3") is not None and d.get("U3") == d.get("U4")),
                            key=lambda h: {"단기": 0, "중기": 1, "장기": 2}.get(h, 9))

    # ⚠️ 채점 결과는 forecasts.jsonl에 남지 않는다. settle_themes는 채점한 행을 파일에서
    # 덜어내고 결과를 calibration.json(요원별)·themes.json(테마별)으로 접는다.
    # 예전엔 여기서 r["result"]를 찾았는데 그런 필드는 **누구도 쓰지 않아** 화면에 성적이
    # 영영 안 나왔다("아직 만기가 도래한 예측이 없습니다"가 고정 문구가 돼 있었다).
    cal = _j(os.path.join(BASE, "calibration.json")) or {}
    agents = []
    for who, st in (cal.get("agents") or {}).items():
        for h, v in (st.get("horizons") or {}).items():
            sc = v.get("score") or {}
            if sc.get("hit_rate") is None:
                continue
            agents.append({"who": who, "h": h, "n": v.get("n"),
                           "hit": sc.get("hit_rate"), "brier": sc.get("brier"),
                           "skill": sc.get("skill"), "w": v.get("weight")})
    agents.sort(key=lambda x: ({"단기": 0, "중기": 1, "장기": 2}.get(x["h"], 9), str(x["who"])))

    board = []
    th = (_j(os.path.join(BASE, "themes.json")) or {}).get("themes") or {}
    for tid, rec in th.items():
        for h, v in (rec.get("score") or {}).items():
            if v.get("n"):
                board.append({"theme": tid, "h": h, "n": v["n"],
                              "hit": round(v["hit"] / v["n"], 3)})
    board.sort(key=lambda x: -x["n"])

    # '채점 대기'는 아직 만기가 안 온 예측 수다(오늘 낸 것 포함).
    pending = len(themes)
    return {"date": latest_date, "themes": list(by_theme.values()),
            "pending": pending, "agents": agents, "board": board[:12],
            "scored": {"n": sum(a["n"] or 0 for a in agents)} if agents else None}


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
    # 라벨을 정직하게. 이건 '주제 트렌드'가 아니라 **같은 기사가 여러 회의에서 몇 번 다시
    # 수집됐나**이다. 화면에서 보니 뉴스 제목이 그대로 나열돼 트렌드처럼 오해되기 딱 좋았다.
    return {"ours": ours, "google": google, "source": str(g.get("source") or "")[:40],
            "fetched": str(g.get("fetched") or "")[:16],
            "title": "반복 등장한 기사",
            "window": "최근 14일 · 회의에 다시 올라온 횟수"}


# ---------- 관계망: 지표 상관 (상위 쌍만) ----------
def graph_payload(series=None):
    try:
        from registry import get_registry
    except ImportError:
        return None
    closes = {}
    if series:
        # publish.py가 이미 6개월 종가를 받아 뒀다 — 여기서 다시 긁으면 12번 중복 요청이다
        for _id, meta in series.items():
            cl = meta.get("closes") or []
            if len(cl) >= 40:
                closes[_id] = (meta.get("name"), cl)
    else:
        try:
            from publish import INDICATORS, fetch_yahoo
        except ImportError:
            return None
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


def write_meetings(outdir, keep=MAX_MEETINGS):
    """지난 회의 녹취를 회의당 파일 하나로 떨군다 — 탭했을 때만 받아 오게.

    최근 12건 본문만 합쳐도 599KB다. 전부 페이지에 실으면 폰에서 안 열리고, 목록만 보여 주고
    못 열게 하면 정보가 없는 것과 같다. 그래서 목록은 페이지에, 본문은 파일로 나눈다.
    """
    os.makedirs(outdir, exist_ok=True)
    files = sorted(glob.glob(os.path.join(BASE, "discussions", "*.json")), reverse=True)
    written = []
    for p in files[:keep * 3]:
        d = _j(p)
        tr = (d or {}).get("transcript") or []
        if not tr:
            continue                      # 실패한 회의(발언 0건)는 열어 봐야 빈 화면이다
        name = os.path.basename(p)[:-5]
        obj = {
            "id": name, "time": d.get("time", ""), "calls": d.get("calls_used", 0),
            "brief": (d.get("alpha_brief") or "")[:2000],
            "news": ((d.get("news_brief") or {}).get("context") or "")[:900],
            "lines": [{"who": t.get("role", "?"), "topic": (t.get("topic") or "")[:40],
                       "text": (t.get("text") or "")[:MAX_CHAT_CHARS_FILE]} for t in tr],
        }
        with open(os.path.join(outdir, name + ".json"), "w", encoding="utf-8") as f:
            json.dump(obj, f, ensure_ascii=False, separators=(",", ":"))
        written.append(name)
        if len(written) >= keep:
            break
    # 오래된 회의 파일은 지운다 — 안 그러면 저장소가 계속 부풀고 폰 목록과도 어긋난다
    for old in glob.glob(os.path.join(outdir, "*.json")):
        if os.path.basename(old)[:-5] not in written:
            try:
                os.remove(old)
            except OSError:
                pass
    return written


def build(series=None, power=None, smp=None):
    """폰 페이지에 실을 전체 payload. 실패한 섹션은 None이라 화면이 알아서 숨긴다.

    series는 publish.py가 티커용으로 이미 받아 둔 종가다(중복 요청 방지).
    """
    jobs = (
        ("ind", lambda: indicators_payload(series, power, smp)),
        ("deck", lambda: deck_payload(series)),
        ("team", team_payload),
        ("lab", lab_payload),
        ("chat", chat_payload),
        ("trends", trends_payload),
        ("graph", lambda: graph_payload(series)),
        ("system", system_payload),
    )
    out = {}
    for name, fn in jobs:
        try:
            out[name] = fn()
        except Exception as e:
            print(f"  ⚠️ 폰 payload '{name}' 생성 실패(섹션 생략): {type(e).__name__}: {e}")
            out[name] = None
    return out
