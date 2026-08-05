# coding=utf-8
"""알파의 '오늘 지켜볼 것' 임계값 지시를 소급 검증한다.

왜 이것만 재는가
----------------
회의록 전체에서 '방향 예측'을 정규식으로 뽑아보니 두 번 연속 내 추출기가 틀렸다
(① "전일 대비"의 '대비'를 대비책으로 읽어 과거 서술 1,021건을 예측으로 셈,
 ② 뉴스 헤드라인·질문·조건부 관찰지시를 방향 단정으로 셈).
자유 텍스트에서 방향을 뽑는 순간 그 숫자는 **AI 성적이 아니라 내 정규식 성적**이 된다.

반면 알파의 "지켜볼 것: X가 T를 상회/하회하는지"는 해석이 들어갈 여지가 없다:
  · 지표 X가 명시돼 있고
  · 임계값 T가 숫자로 박혀 있고
  · 방향(상회/하회)이 단어로 고정돼 있다
그리고 야후에 그날 이후의 실제 종가가 있다. 그래서 **이건 기계적으로 검증된다.**

무엇을 판정하나 (예측 적중률이 아니다 — 이건 관찰 지시다)
  ① 도달  — 그 임계값에 실제로 도달했는가, 며칠 만에
  ② 정보성 — 지시 시점에 이미 임계값을 넘어 있었다면 그 지시는 알맹이가 없다
  ③ 반복  — 같은 지시가 며칠째 복사되고 있는가(=관찰이 갱신되지 않는다는 신호)
"""
import os, sys, json, glob, re, datetime, collections
REPO = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, REPO); os.chdir(REPO)
import requests
from publish import INDICATORS, UA

ALIAS = {
    "krw_usd": ("원/달러", "환율"), "kospi": ("코스피",), "sox": ("반도체지수", "SOX"),
    "natgas": ("천연가스", "LNG"), "copper": ("구리",), "wti": ("WTI", "유가"),
    "kepco": ("한국전력", "한전"), "samsung": ("삼성전자",), "hynix": ("SK하이닉스", "하이닉스"),
    "nvidia": ("엔비디아",), "gold": ("금 선물", "금값"), "us10y": ("미 10년물", "10년물", "국채 금리"),
}
ABOVE = ("상회", "돌파", "넘어", "이상", "초과", "웃도")
BELOW = ("하회", "이탈", "밑도", "이하", "아래", "미만", "밑으로")
NUM = re.compile(r"([0-9][0-9,]*\.?[0-9]*)\s*(%|USD/lb|USD|달러|원|pt|포인트|bp)?")


def daily_closes(symbol, rng="3mo"):
    r = requests.get(f"https://query1.finance.yahoo.com/v8/finance/chart/{symbol}",
                     params={"range": rng, "interval": "1d"}, headers=UA, timeout=20)
    r.raise_for_status()
    res = r.json()["chart"]["result"][0]
    ts = res.get("timestamp") or []
    cl = (res.get("indicators", {}).get("quote") or [{}])[0].get("close") or []
    return {datetime.datetime.fromtimestamp(t, datetime.timezone.utc).strftime("%Y-%m-%d"): float(c)
            for t, c in zip(ts, cl) if c is not None}


print("[1] 실제 종가 수집")
S, NM = {}, {}
for _id, name, sym, unit, dec in INDICATORS:
    try:
        S[_id] = daily_closes(sym); NM[_id] = name
    except Exception as e:
        print(f"  {_id} 실패: {e}")
print(f"  {len(S)}개 지표")

print("\n[2] '오늘 지켜볼 것' 임계값 지시 추출")
items = []
for path in sorted(glob.glob("discussions/*.json")):
    try:
        d = json.load(open(path, encoding="utf-8"))
    except (OSError, ValueError):
        continue
    brief = d.get("alpha_brief") or ""
    m = re.search(r"오늘 지켜볼 것[:：]\s*(.+)", brief)
    if not m:
        continue
    sent = m.group(1).strip()
    head = sent[:150]
    # 지표: 가장 먼저 등장하는 것(문장 주어)
    hit = min(((head.find(a), iid) for iid, al in ALIAS.items() for a in al
               if head.find(a) >= 0), default=None)
    if not hit:
        continue
    iid = hit[1]
    if iid not in S:
        continue
    up = any(w in head for w in ABOVE)
    dn = any(w in head for w in BELOW)
    if up == dn:
        continue                       # 방향어가 없거나 둘 다 → 임계 판정 불가
    # ⚠️ 지표 이름에 박힌 숫자를 임계값으로 오인하지 않게 먼저 지운다.
    #    "미 10년물 금리 4.65% 상회"에서 '10년물'의 10을 임계값으로 잡던 버그(실측).
    clean = head
    for a in ALIAS[iid]:
        clean = clean.replace(a, " ")
    clean = re.sub(r"\d+\s*년물|\d+\s*개월|\d+\s*일간|\d+\s*천억|\d+\s*조", " ", clean)
    # 단위가 붙었거나 소수점이 있는 숫자만 임계값 후보로 본다(정수 맨숫자는 대개 연도·건수다)
    nums = [float(x[0].replace(",", "")) for x in NUM.finditer_list(clean)]         if hasattr(NUM, "finditer_list") else         [float(m.group(1).replace(",", "")) for m in NUM.finditer(clean)
         if m.group(2) or "." in m.group(1)]
    # 지표의 실제 가격대와 자릿수가 맞는 숫자만 임계값 후보로 인정한다
    date = os.path.basename(path)[:10]
    prior = [x for x in sorted(S[iid]) if x <= date]
    if not prior:
        continue
    cur = S[iid][prior[-1]]
    cand = [v for v in nums if cur and 0.3 * cur <= v <= 3 * cur]
    if not cand:
        continue
    items.append({"date": date, "id": iid, "name": NM[iid], "thresh": cand[0],
                  "above": bool(up), "at_issue": cur, "text": head})

print(f"  {len(items)}건 (임계값 파싱 성공)")

print("\n[3] 소급 판정")
rows = []
for it in items:
    s = S[it["id"]]
    fut = [(d, v) for d, v in sorted(s.items()) if d > it["date"]][:10]   # 이후 10거래일
    if not fut:
        continue
    already = (it["at_issue"] > it["thresh"]) if it["above"] else (it["at_issue"] < it["thresh"])
    reached, day = None, None
    for i, (d, v) in enumerate(fut, 1):
        ok = v > it["thresh"] if it["above"] else v < it["thresh"]
        if ok:
            reached, day = d, i
            break
    gap = (it["at_issue"] - it["thresh"]) / it["thresh"] * 100
    rows.append({**it, "already": already, "reached": reached, "days": day,
                 "gap_pct": round(gap, 2), "next": fut[0][1]})

n = len(rows)
already = sum(1 for r in rows if r["already"])
reached = sum(1 for r in rows if r["reached"] and not r["already"])
never = sum(1 for r in rows if not r["reached"] and not r["already"])
print(f"  판정 대상 {n}건")
print(f"  ① 지시 시점에 **이미 임계값을 넘어 있던** 것: {already}건 ({already/n:.0%})  ← 알맹이 없는 지시")
print(f"  ② 이후 10거래일 안에 도달: {reached}건 ({reached/n:.0%})"
      + (f", 평균 {sum(r['days'] for r in rows if r['reached'] and not r['already'])/max(1,reached):.1f}거래일" if reached else ""))
print(f"  ③ 10거래일 내 미도달: {never}건 ({never/n:.0%})")
print(f"  임계값까지의 거리(중앙값): {sorted(abs(r['gap_pct']) for r in rows)[n//2]:.2f}%")

dup = collections.Counter((r["id"], r["thresh"]) for r in rows)
rep = {f"{NM[k[0]]} {k[1]}": v for k, v in dup.items() if v >= 3}
print(f"\n  ④ 같은 지표·같은 임계값이 3회 이상 반복된 지시: {rep}")

print("\n--- 전체 목록 ---")
for r in rows:
    mark = "이미충족" if r["already"] else (f"{r['days']}일 뒤 도달" if r["reached"] else "미도달")
    print(f"  {r['date']} {r['name'][:10]:10s} {r['thresh']:>9,.2f} "
          f"{'상회' if r['above'] else '하회'}  현재 {r['at_issue']:>9,.2f}({r['gap_pct']:+6.2f}%)  → {mark}")

json.dump(rows, open(os.path.join(REPO, "exports", "watch_backtest.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
