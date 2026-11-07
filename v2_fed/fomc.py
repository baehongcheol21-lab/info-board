# coding=utf-8
"""안전시스템 1 — 연준 FOMC 성명서 (사용자 설계: 루트 'federalreserve 내가 생각하는 시스템.txt', 2026-11-07 Claude 구현)

1차 인풋  : 성명서 HTML 원본 (파이썬, 저장)
2차 처리  : 파이썬 3개 = 발표 일시 · 금리 결정(방향+범위) · 실행지침(Implementation Note) 링크
            제미나이 3개 = 반대표(수·방향) · 물가/경기 성향 · 유동성(지급준비금) 방침  ← 정해진 기호만(구조화 출력 + Enum, temperature 0)
            + 파이썬 안전장치: 제미나이가 고른 값마다 근거 문장을 원문에서 그대로 복사하게 하고 원문 대조, 반대표 수는 파이썬 계산과 맞대 봄
            + 직전 성명서와 바뀐 문장(difflib, 0콜)
            → 표(fomc_history.csv)에 한 줄씩 저장
3차 출력  : ① 파이썬 브리핑(기호 → 한국어 문장 틀)  ② 제미나이 친화 설명(temperature 0.6, 예측 금지, 숫자는 표에 있는 것만 — 파이썬이 검사)

실행:
  dashboard\\venv\\Scripts\\python.exe v2_secretary\\fed\\fomc.py --url <성명서 주소>
  dashboard\\venv\\Scripts\\python.exe v2_secretary\\fed\\fomc.py --backfill 8      (지난 성명서 채우기)
감시(매일): v2_secretary\\fed\\fed_watch.py  (새 성명서가 올라왔을 때만 이 파일을 부름)
"""
import os, re, sys, csv, json, time, difflib, argparse, datetime
from enum import Enum
import requests
from bs4 import BeautifulSoup
from pydantic import BaseModel, Field

HERE = os.path.dirname(os.path.abspath(__file__))
V2 = os.path.dirname(HERE)
ROOT = os.path.dirname(V2)
# 같은 파일이 PC(v2_secretary/fed)와 깃허브(info-board/v2_fed) 양쪽에서 돈다 — 깃허브에서는 환경변수로 위치를 바꾼다
HOME = os.environ.get("FED_HOME", HERE)
DATA = os.environ.get("FED_DATA", os.path.join(V2, "data", "fed"))
RAW = os.path.join(DATA, "raw")                        # HTML 원본 (기록 제외)
STMT = os.path.join(HOME, "statements")                # 성명서 본문 텍스트 (기록에 남김 — 미국 정부 공공 문서)
CSV_PATH = os.path.join(HOME, "fomc_history.csv")      # 2차 결과 표
OUT = os.environ.get("FED_OUT", os.path.join(V2, "결과"))
CALL_LOG = os.environ.get("FED_CALL_LOG", os.path.join(V2, "data", "calls.jsonl"))
BASE = "https://www.federalreserve.gov"
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36"}
MODELS = ["gemini-3.1-flash-lite", "gemini-3.5-flash-lite"]  # 3.1-flash-lite 주력 · 예비 (2026-11-07 모델 목록 실측)

FIELDS = ["meeting_date", "release_time", "decision", "rate_low", "rate_high", "rate_text", "impl_note_url",
          "vote_for_py", "vote_against_py", "dissent_names_py",
          "dissent_count", "dissent_action", "inflation_stance", "liquidity_policy",
          "evidence_ok", "check_flags", "changed_sentences", "tension", "model", "url", "processed_at"]


def say(m):
    """검은 창(.bat)에서는 글자 그대로(한글 안 깨짐), 파일·파이프로 보낼 때는 UTF-8 바이트로"""
    try:
        if sys.stdout.isatty():
            sys.stdout.write(m + "\n"); sys.stdout.flush(); return
    except Exception:
        pass
    sys.stdout.buffer.write((m + "\n").encode("utf-8")); sys.stdout.flush()


# ── 제미나이가 고를 수 있는 값 (원은 원, 플러스는 플러스) ──────────────
class DissentAction(str, Enum):
    NONE = "NONE"          # 반대 없음
    RAISE_25 = "RAISE_25"  # 0.25%p 인상 주장
    RAISE_50 = "RAISE_50"
    CUT_25 = "CUT_25"      # 0.25%p 인하 주장
    CUT_50 = "CUT_50"
    MIXED = "MIXED"        # 반대자끼리 방향이 다름
    OTHER = "OTHER"


class Stance(str, Enum):
    HAWKISH = "HAWKISH"    # 긴축·인상 쪽
    NEUTRAL = "NEUTRAL"
    DOVISH = "DOVISH"      # 완화·인하 쪽


class Liquidity(str, Enum):
    AMPLE_MAINTAIN = "AMPLE_MAINTAIN"  # 충분한 지급준비금 유지
    TIGHTENING = "TIGHTENING"          # 유동성 축소(보유자산 축소 등)
    EASING = "EASING"                  # 유동성 공급(자산 매입 등)


class FOMCAI(BaseModel):
    dissent_count: int = Field(description="반대표를 던진 위원 수. 만장일치면 0")
    dissent_action: DissentAction = Field(description="반대 위원들이 원한 것")
    dissent_evidence: str = Field(description="반대표 근거 문장을 원문에서 그대로 복사. 반대 없으면 빈 문자열")
    inflation_stance: Stance = Field(description="물가·경기 진단 문구의 성향")
    inflation_evidence: str = Field(description="성향 판단의 근거 문장 1개를 원문에서 그대로 복사")
    liquidity_policy: Liquidity = Field(description="지급준비금·유동성 방침")
    liquidity_evidence: str = Field(description="유동성 근거 문장 1개를 원문에서 그대로 복사")


# ── 1차: 원본 받기 ─────────────────────────────────────────────────
def fetch(url):
    r = requests.get(url, headers=UA, timeout=40)
    r.raise_for_status()
    r.encoding = "utf-8"  # 서버가 글자 인코딩을 안 알려 줘서 '–'가 깨지던 것 방지
    date = re.search(r"monetary(\d{8})a\.htm", url)
    d = date.group(1) if date else datetime.date.today().strftime("%Y%m%d")
    os.makedirs(RAW, exist_ok=True)
    open(os.path.join(RAW, f"{d}.html"), "w", encoding="utf-8").write(r.text)
    return r.text


# ── 2차-파이썬 ────────────────────────────────────────────────────
def frac(s):
    """'3-3/4' → 3.75, '4' → 4.0, '1/4' → 0.25"""
    s = s.strip()
    m = re.fullmatch(r"(\d+)-(\d+)/(\d+)", s)
    if m:
        return int(m.group(1)) + int(m.group(2)) / int(m.group(3))
    m = re.fullmatch(r"(\d+)/(\d+)", s)
    if m:
        return int(m.group(1)) / int(m.group(2))
    return float(s)


def parse_python(html, url):
    soup = BeautifulSoup(html, "html.parser")
    art = soup.find(id="article") or soup
    title = soup.title.get_text(strip=True) if soup.title else ""
    paras = [p.get_text(" ", strip=True) for p in art.find_all("p")]
    # 줄바꿈 안 되는 하이픈(3‑3/4의 '‑', U+2011) 등 특수 기호를 보통 '-'로
    paras = [re.sub(r"\s+", " ", re.sub("[‐‑‒]", "-", p)) for p in paras if p]
    # 본문 = 'approved the following statement' 다음부터 'For media inquiries' 전까지 (형식이 다른 해에도 버티게 넓게)
    text_all = "\n".join(paras)
    start = 0
    for i, p in enumerate(paras):
        if "following statement" in p or p.startswith("Recent indicators") or p.startswith("Economic activity") or p.startswith("The Committee seeks") or "Information received" in p:
            start = i if "following statement" not in p else i + 1
            break
    end = len(paras)
    for i, p in enumerate(paras):
        if p.startswith("For media inquiries") or p.startswith("Implementation Note"):
            end = i
            break
    body = [p for p in paras[start:end] if p and p != "Share"]
    statement = "\n".join(body)

    md = re.search(r"monetary(\d{4})(\d{2})(\d{2})a\.htm", url)
    meeting_date = f"{md.group(1)}-{md.group(2)}-{md.group(3)}" if md else ""
    tm = re.search(r"(\d{1,2}:\d{2}\s*[ap]\.m\.\s*E[DS]T)", text_all)
    release_time = tm.group(1) if tm else ""

    dec = re.search(r"decided to (maintain|raise|lower)", statement)
    decision = {"maintain": "MAINTAIN", "raise": "RAISE", "lower": "LOWER"}.get(dec.group(1) if dec else "", "UNKNOWN")
    # 동결: "... rate at 3-3/4 to 4 percent" / 인상·인하: "... rate by 1/4 percentage point to 3-3/4 to 4 percent"
    rm = re.search(r"target range for the federal funds rate(?: by [\d\-/]+ percentage points?)? (?:at|to) ([\d\-/]+) to ([\d\-/]+) percent", statement)
    rate_low = rate_high = ""
    rate_text = ""
    if rm:
        rate_low, rate_high = f"{frac(rm.group(1)):.2f}", f"{frac(rm.group(2)):.2f}"
        rate_text = f"{rm.group(1)} to {rm.group(2)} percent"

    impl = ""
    for a in art.find_all("a", href=True):
        if "Implementation Note" in a.get_text():
            impl = a["href"] if a["href"].startswith("http") else BASE + a["href"]
            break

    # 반대표 — 파이썬 계산(제미나이 값과 맞대 보기용)
    vote_for = vote_against = ""
    vm = re.search(r"by a (\d+)\s*[–—-]\s*(\d+) vote", text_all)
    if vm:
        vote_for, vote_against = vm.group(1), vm.group(2)
    # 이름 안의 가운데 글자 점("Lisa D. Cook")에서 끊기지 않게 문단 단위로 본다
    # 옛 형식: "Voting for ... were A, Chair; B; and C. Voting against this action were D, who preferred ...; and E and F, who preferred ..."
    full = " ".join(body)
    against_names = []
    am = re.search(r"Voting against (?:the |this )?(?:monetary policy )?action (?:were|was) (.+)$", full)
    if am:
        for g in am.group(1).split(";"):
            g = re.sub(r"^\s*and\s+", "", g)
            who = re.split(r",? who\b", g)[0]
            against_names += [n.strip(" .") for n in re.split(r",\s*|\s+and\s+", who) if len(n.strip().split()) >= 2]
    names = "; ".join(against_names)
    if not vote_for:
        fm = re.search(r"Voting for (?:the |this )?(?:monetary policy )?action were (.+?)(?=Voting against|$)", full)
        if fm:
            vote_for = str(len([x for x in fm.group(1).split(";") if x.strip(" .")]))
    if not vote_against:
        vote_against = str(len(against_names)) if against_names else ("0" if vote_for else "")
    return {"title": title, "statement": statement, "meeting_date": meeting_date, "release_time": release_time,
            "decision": decision, "rate_low": rate_low, "rate_high": rate_high, "rate_text": rate_text,
            "impl_note_url": impl, "vote_for_py": vote_for, "vote_against_py": vote_against, "dissent_names_py": names}


# ── 2차-제미나이 (정해진 기호만) ────────────────────────────────────
def _keys():
    """깃허브: 저장소 비밀값(환경변수 GEMINI_API_KEY, _2 …) / PC: 루트 .env"""
    env = {k: v for k, v in os.environ.items() if k.startswith("GEMINI_API_KEY") and v}
    p = os.path.join(ROOT, ".env")
    if not env and os.path.exists(p):
        for line in open(p, encoding="utf-8"):
            if "=" in line and not line.strip().startswith("#"):
                k, v = line.split("=", 1)
                env[k.strip()] = v.strip().strip('"').strip("'")
    return [v for k, v in sorted(env.items()) if k.startswith("GEMINI_API_KEY") and v]


def _log(role, model, ok, t0, err):
    os.makedirs(os.path.dirname(CALL_LOG), exist_ok=True)
    with open(CALL_LOG, "a", encoding="utf-8") as f:
        f.write(json.dumps({"t": datetime.datetime.now().isoformat(timespec="seconds"), "role": role, "model": model,
                            "ok": ok, "secs": round(time.time() - t0, 1), "err": (err or "")[:300]}, ensure_ascii=False) + "\n")


def gemini(prompt, role, schema=None, temperature=0.0):
    """키 2개 × 모델 2개를 차례로 시도. 503(붐빔)은 잠깐 쉬고 다시. 반환 (모델이름, 응답)"""
    from google import genai
    from google.genai import types
    cfg = {"temperature": temperature}
    if schema is not None:
        cfg.update(response_mime_type="application/json", response_schema=schema)
    last = None
    for key in _keys():
        client = genai.Client(api_key=key)
        for m in MODELS:
            for attempt in range(2):
                t0 = time.time()
                try:
                    r = client.models.generate_content(model=m, contents=prompt, config=types.GenerateContentConfig(**cfg))
                    _log(role, m, True, t0, None)
                    return m, r
                except Exception as e:
                    msg = str(e); last = msg
                    _log(role, m, False, t0, msg)
                    if "503" in msg or "UNAVAILABLE" in msg:
                        time.sleep(8); continue
                    break
    raise RuntimeError(f"제미나이 호출 실패: {last}")


def norm(s):
    s = (s or "").replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"').replace("–", "-").replace("—", "-")
    return re.sub(r"\s+", " ", s).strip().lower()


def parse_ai(statement):
    prompt = f"""다음은 미국 연준 FOMC 성명서 본문이다. 정해진 값만 골라라.
- 반대표: 'Voting against' 문장과 표결 숫자를 보고 판단. 반대가 없으면 dissent_count=0, dissent_action=NONE, dissent_evidence="".
- inflation_stance: 물가·경기 진단 문구 전체가 금리 인상·긴축 쪽이면 HAWKISH, 인하·완화 쪽이면 DOVISH, 어느 쪽도 아니면 NEUTRAL.
- liquidity_policy: 지급준비금·보유자산 방침.
- *_evidence: 반드시 아래 본문에서 한 글자도 바꾸지 말고 그대로 복사한 문장(또는 문장의 일부).

본문:
{statement}"""
    model, r = gemini(prompt, "fomc_2nd", schema=FOMCAI, temperature=0.0)
    data = r.parsed if getattr(r, "parsed", None) is not None else FOMCAI.model_validate_json(r.text)
    return model, data.model_dump(mode="json")


# ── 직전 성명서와 바뀐 문장 (0콜) ────────────────────────────────────
def sentences(t):
    # 마침표 앞이 소문자·숫자·괄호일 때만 문장 끝으로 봄 → "Lisa D. Cook", "U.S." 에서 안 끊김
    return [s.strip() for s in re.split(r"(?<=[a-z0-9)\]%][.;])\s+", t.replace("\n", " ")) if len(s.strip()) > 3]


def diff_prev(cur_text, prev_text):
    if not prev_text:
        return []
    a, b = sentences(prev_text), sentences(cur_text)
    out = []
    for op in difflib.SequenceMatcher(None, a, b).get_opcodes():
        tag, i1, i2, j1, j2 = op
        if tag == "equal":
            continue
        for s in a[i1:i2]:
            out.append(("빠짐", s))
        for s in b[j1:j2]:
            out.append(("새로", s))
    return out


# ── 표 저장 ──────────────────────────────────────────────────────
def load_rows():
    if not os.path.exists(CSV_PATH):
        return []
    with open(CSV_PATH, encoding="utf-8-sig", newline="") as f:
        return list(csv.DictReader(f))


def save_rows(rows):
    rows.sort(key=lambda r: r["meeting_date"])
    with open(CSV_PATH, "w", encoding="utf-8-sig", newline="") as f:
        w = csv.DictWriter(f, fieldnames=FIELDS, extrasaction="ignore")
        w.writeheader()
        w.writerows(rows)


# ── 3차-파이썬: 점수와 브리핑 ─────────────────────────────────────────
STANCE_KO = {"HAWKISH": "매파적(긴축 쪽)", "NEUTRAL": "중립적", "DOVISH": "비둘기파적(완화 쪽)"}
LIQ_KO = {"AMPLE_MAINTAIN": "충분한 지급준비금 유지(변화 없음)", "TIGHTENING": "유동성 축소", "EASING": "유동성 공급"}
DEC_KO = {"MAINTAIN": "동결", "RAISE": "인상", "LOWER": "인하", "UNKNOWN": "확인 못 함"}
ACT_KO = {"NONE": "없음", "RAISE_25": "0.25%p 인상", "RAISE_50": "0.5%p 인상", "CUT_25": "0.25%p 인하", "CUT_50": "0.5%p 인하",
          "MIXED": "서로 다른 방향", "OTHER": "기타"}


def tension(row):
    """긴장도(−5 ~ +5): 성향 HAWKISH +2 / DOVISH −2, 결정 인상 +2 / 인하 −2, 인상 주장 반대표 1명당 +1, 인하 주장 1명당 −1.
    사용자 예시('매파 + 인상 반대 2명' = 4)와 같게 맞춘 규칙. 플러스 = 긴축 쪽 압력."""
    s = {"HAWKISH": 2, "DOVISH": -2}.get(row.get("inflation_stance"), 0)
    s += {"RAISE": 2, "LOWER": -2}.get(row.get("decision"), 0)
    n = int(row.get("dissent_count") or 0)
    a = row.get("dissent_action", "")
    s += n if a.startswith("RAISE") else (-n if a.startswith("CUT") else 0)
    return max(-5, min(5, s))


def tension_ko(t):
    if t >= 3: return "강한 긴축 압력"
    if t >= 1: return "긴축 쪽 기울기"
    if t == 0: return "중립"
    if t >= -2: return "완화 쪽 기울기"
    return "강한 완화 압력"


def brief_python(cur, prev, diffs):
    d = cur["meeting_date"]
    rate = f"{cur['rate_low']}~{cur['rate_high']}%" if cur["rate_low"] else "확인 못 함"
    same = ""
    if prev and prev.get("rate_low"):
        same = " (직전 회의와 같음)" if (prev["rate_low"], prev["rate_high"]) == (cur["rate_low"], cur["rate_high"]) else f" (직전 {prev['rate_low']}~{prev['rate_high']}%)"
    t = int(cur["tension"])
    L = [f"[FOMC 브리핑] {d} · 발표 {cur['release_time'] or '시각 확인 못 함'}", "",
         f"결정: 기준금리 {rate} {DEC_KO.get(cur['decision'], cur['decision'])}{same}",
         f"분위기: {STANCE_KO.get(cur['inflation_stance'], cur['inflation_stance'])} · 긴장도 {t:+d} (−5 완화 ~ +5 긴축) = {tension_ko(t)}",
         f"유동성: {LIQ_KO.get(cur['liquidity_policy'], cur['liquidity_policy'])}"]
    n = int(cur["dissent_count"] or 0)
    if n:
        who = f" ({cur['dissent_names_py']})" if cur["dissent_names_py"] else ""
        L.append(f"내부 균열: {n}명이 반대{who} — 원한 것: {ACT_KO.get(cur['dissent_action'], cur['dissent_action'])}")
    else:
        L.append("내부 균열: 없음(만장일치)")
    if prev:
        pn = int(prev.get("dissent_count") or 0)
        pt = int(prev.get("tension") or 0)
        L.append(f"직전({prev['meeting_date']}) 대비: 반대표 {pn}→{n}명 · 긴장도 {pt:+d}→{t:+d}")
    if diffs:
        L.append(f"바뀐 문장: {len([x for x in diffs if x[0] == '새로'])}개 새로, {len([x for x in diffs if x[0] == '빠짐'])}개 빠짐")
    if cur["check_flags"]:
        L.append(f"⚠ 안전장치 경고: {cur['check_flags']}")
    return "\n".join(L)


# ── 3차-제미나이: 사람 말 설명 ─────────────────────────────────────────
def brief_ai(cur, prev, diffs):
    keep = ["meeting_date", "decision", "rate_low", "rate_high", "dissent_count", "dissent_action", "inflation_stance", "liquidity_policy", "tension"]
    c = {k: cur[k] for k in keep}
    p = {k: prev[k] for k in keep} if prev else None
    dtxt = "\n".join(f"- [{k}] {s}" for k, s in diffs[:12]) or "(직전 성명서 없음)"
    prompt = f"""너는 경제를 잘 모르는 한국 대학생에게 설명하는 비서다. 아래 표 데이터와 '바뀐 문장'만 보고
"그래서 이게 나한테 무슨 뜻인가?"를 3가지(① 당장 바뀐 것 ② 분위기가 어느 쪽으로 움직였나 ③ 한마디로)로 쉬운 한국어로 써라.
규칙:
- 영어 기호(HAWKISH 등)는 쓰지 말고 풀어서.
- **예측 금지**: "금리가 오를 것이다", "주가가 내릴 것이다" 같은 앞날 단정은 쓰지 마라. 이 발표가 무엇을 뜻하는지만.
- 숫자는 아래 데이터에 있는 것만 쓴다. 새 숫자를 만들지 마라.
- 전체 8줄 안팎.
긴장도 뜻: −5(강한 완화) ~ +5(강한 긴축).

[이번 회의] {json.dumps(c, ensure_ascii=False)}
[직전 회의] {json.dumps(p, ensure_ascii=False) if p else '없음'}
[바뀐 문장]
{dtxt}"""
    model, r = gemini(prompt, "fomc_3rd", temperature=0.6)
    text = r.text.strip()
    allowed = " ".join(str(v) for v in list(c.values()) + (list(p.values()) if p else [])) + " " + dtxt
    allowed += " 0.25 0.5 25 50 " + " ".join(ACT_KO.values())  # 기호(RAISE_25 등)가 뜻하는 숫자는 허용
    nums = [x for x in re.findall(r"\d+(?:\.\d+)?", text) if x not in ("1", "2", "3", "5")]
    bad = sorted({x for x in nums if x not in allowed})
    return model, text, bad


# ── 한 건 처리 ────────────────────────────────────────────────────
def process(url, write_brief=True):
    html = fetch(url)
    py = parse_python(html, url)
    if not py["statement"]:
        raise RuntimeError("본문을 못 찾음 — 페이지 구조가 바뀌었을 수 있음")
    os.makedirs(STMT, exist_ok=True)
    open(os.path.join(STMT, f"{py['meeting_date']}.txt"), "w", encoding="utf-8").write(py["statement"])
    model, ai = parse_ai(py["statement"])
    flags = []
    ev_ok = []
    for k in ("dissent_evidence", "inflation_evidence", "liquidity_evidence"):
        v = ai.get(k) or ""
        if k == "dissent_evidence" and ai["dissent_count"] == 0 and not v:
            ev_ok.append(True); continue
        ok = bool(v) and norm(v) in norm(py["statement"])
        ev_ok.append(ok)
        if not ok:
            flags.append(f"{k} 원문에 없음")
    if py["vote_against_py"] != "" and str(ai["dissent_count"]) != py["vote_against_py"]:
        flags.append(f"반대표 수 불일치(파이썬 {py['vote_against_py']} vs 제미나이 {ai['dissent_count']})")
    if py["decision"] == "UNKNOWN" or not py["rate_low"]:
        flags.append("금리 결정 문장 못 찾음")
    rows = [r for r in load_rows() if r["meeting_date"] != py["meeting_date"]]
    prev = max((r for r in rows if r["meeting_date"] < py["meeting_date"]), key=lambda r: r["meeting_date"], default=None)
    prev_text = ""
    if prev:
        pp = os.path.join(STMT, f"{prev['meeting_date']}.txt")
        prev_text = open(pp, encoding="utf-8").read() if os.path.exists(pp) else ""
    diffs = diff_prev(py["statement"], prev_text)
    row = {**{k: py[k] for k in FIELDS if k in py}, **{k: ai[k] for k in ("dissent_count", "dissent_action", "inflation_stance", "liquidity_policy")},
           "evidence_ok": f"{sum(ev_ok)}/3", "check_flags": "; ".join(flags), "changed_sentences": len(diffs),
           "model": model, "url": url, "processed_at": datetime.datetime.now().isoformat(timespec="seconds")}
    row["tension"] = tension(row)
    rows.append({k: str(v) for k, v in row.items()})
    save_rows(rows)
    row = {k: str(v) for k, v in row.items()}
    say(f"[2차 저장] {py['meeting_date']} 결정 {row['decision']} {row['rate_low']}~{row['rate_high']} · 반대 {row['dissent_count']}({row['dissent_action']}) · "
        f"성향 {row['inflation_stance']} · 유동성 {row['liquidity_policy']} · 근거 {row['evidence_ok']} · 경고 {row['check_flags'] or '없음'}")
    if not write_brief:
        return row, None
    pb = brief_python(row, prev, diffs)
    m3, ab, bad = brief_ai(row, prev, diffs)
    os.makedirs(OUT, exist_ok=True)
    path = os.path.join(OUT, f"FOMC_{py['meeting_date']}_브리핑.md")
    L = ["# " + pb.splitlines()[0], "", "## 1. 파이썬 브리핑 (표 → 문장 틀, AI 안 씀)", "", "```", pb, "```", "",
         f"## 2. 쉬운 설명 (제미나이 {m3})", "", ab, ""]
    if bad:
        L += [f"> ⚠ 표에 없는 숫자가 섞임: {', '.join(bad)} — 이 줄은 믿지 말 것", ""]
    L += ["## 3. 직전 성명서와 바뀐 문장 (파이썬 difflib, AI 안 씀)", ""]
    L += [f"- **{k}**: {s}" for k, s in diffs] or ["- (직전 성명서 없음)"]
    L += ["", "## 4. 2차 표에 저장된 값", "", "| 칸 | 값 |", "|---|---|"]
    L += [f"| {k} | {row[k]} |" for k in FIELDS if k in row]
    L += ["", f"원문: {url}", ""]
    open(path, "w", encoding="utf-8").write("\n".join(L))
    say("\n" + pb + "\n\n" + ab + ("\n⚠ 표에 없는 숫자: " + ", ".join(bad) if bad else "") + f"\n\n[결과지] {path}")
    return row, path


def statement_urls_from_calendar(limit):
    r = requests.get(BASE + "/monetarypolicy/fomccalendars.htm", headers=UA, timeout=40)
    r.raise_for_status()
    ds = sorted(set(re.findall(r"/newsevents/pressreleases/monetary(\d{8})a\.htm", r.text)), reverse=True)
    out = []
    for d in ds:
        u = f"{BASE}/newsevents/pressreleases/monetary{d}a.htm"
        h = requests.get(u, headers=UA, timeout=40)
        h.encoding = "utf-8"
        if "FOMC statement" in h.text[:20000] and "federal funds rate" in h.text:
            out.append(u)
        if len(out) >= limit:
            break
        time.sleep(0.5)
    return sorted(out)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--url", default="")
    ap.add_argument("--backfill", type=int, default=0, help="달력에서 지난 성명서 N개를 오래된 순으로 채움(마지막 것만 브리핑)")
    a = ap.parse_args()
    if a.backfill:
        urls = statement_urls_from_calendar(a.backfill)
        say(f"[채우기] {len(urls)}개: {', '.join(re.search(r'monetary(\d{8})a', u).group(1) for u in urls)}")
        for i, u in enumerate(urls):
            process(u, write_brief=(i == len(urls) - 1))
    elif a.url:
        process(a.url)
    else:
        ap.print_help()


if __name__ == "__main__":
    main()
