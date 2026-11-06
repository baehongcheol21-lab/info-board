# -*- coding: utf-8 -*-
"""버전2 스토리 — AI 2콜. AI는 번호를 고르고 문장을 쓸 뿐, 숫자는 못 만든다. 틀리면 코드가 버리고 기본으로 돌아간다.

① 번호표 1콜: 사실 후보(점수 상위 30개) + 컷 틀 목록 → AI가 묶음·컷·순서를 번호로만 답한다(JSON).
   코드 검사(check_plan) 실패 → story_facts의 규칙 배치 그대로.
② 자막 1콜: 확정된 컷마다 그 컷의 사실만 주고 제목·자막을 받는다(JSON).
   코드 검사(check_caption): 숫자가 그 컷 사실에 있나 / 오름·내림 단어가 부호와 맞나 / 길이 / 금지어.
   실패한 컷만 story_render의 기본 문장.
설계: 루트 `버전2_음성_자막_조사.md` 2-2·3-2, `인계_2026-11-06_버전2_1000콜.md` (나) 4번.

실행(실제 호출은 key_usage.json을 쓰므로 원본 폴더 금지 — 복사본에서):
  python story_ai.py --facts story.json --out story_ai.json
배선 시험(콜 0): python story_ai.py --facts story.json --out x.json --fake fake.json
"""
import argparse, copy, json, re, sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))
import story_facts as SF          # noqa: E402
import story_render as SR         # noqa: E402

TOP_N = 30
MAX_SECONDS = 180                 # 사용자 결정: 큰 날 최대 180초
BUNDLES = ["market", "power", "news", "ai", "watch"]
# 컷 틀: 받을 수 있는 사실 종류와 개수 (story_render가 그릴 수 있는 것만)
FRAMES = {
    "lead":     ({"move", "reserve", "count", "last_grade", "smp", "headlines"}, 1, 2, "대표컷: 큰 숫자 하나 + 한 줄. 묶음의 첫 장 (뉴스는 count + headlines 2개)"),
    "numbers":  ({"move", "account_vs_hold", "extreme", "streak"}, 1, 3, "숫자컷: 같이 움직인 것 2~3개 나란히(종류 move끼리), 또는 사실 1개"),
    "graph":    ({"move"}, 1, 1, "그래프컷: 그 지표의 최근 20거래일 막대 + 평소 범위 띠"),
    "contrary": ({"contrary"}, 1, 1, "거꾸로컷: 시장과 반대로 간 것"),
    "reason":   ({"reason"}, 1, 1, "이유컷: AI 회의가 짚은 '왜' 한 문장"),
    "combo":    ({"reserve", "mix"}, 1, 2, "합체컷: 전력 여유 숫자 + 발전원 막대 한 장"),
    "picture":  ({"mix"}, 1, 1, "그림컷: 발전원 구성 막대"),
    "table":    ({"headlines"}, 1, 1, "표컷: 헤드라인 줄"),
    "compare":  ({"score_vs_base"}, 1, 1, "비교컷: AI 적중률 대 동전·늘 '오른다'"),
    "teaser":   ({"watch"}, 1, 1, "예고컷: 내일 지켜볼 것"),
}
LEAD_FRAMES = {"lead", "combo", "teaser"}   # watch 묶음은 예고컷 한 장
BANNED = ["모멘텀", "시사", "해석됩니다", "해석된다", "전망", "추천", "매수하", "매도하", "확실", "반드시", "폭등", "대폭락",
          "투자자분들", "주목해야", chr(0x6790)]
CAUSE_WORDS = ["때문", "원인", "탓", "덕분"]
UP_WORDS = ["올랐", "오르", "상승", "뛰었", "급등", "반등"]
DOWN_WORDS = ["내렸", "내리", "하락", "떨어", "빠졌", "빠지", "급락"]
TITLE_MAX, SAY_MAX = 26, 60
CAP_NUM = __import__("re").compile(r"(?<![A-Za-z])\d[\d,]*\.?\d*")   # U3·SK 같은 이름 속 숫자는 빼고


# ---------------- 공통 ----------------
def parse_json(text):
    """AI 답에서 JSON만 꺼낸다(```json 울타리 허용)."""
    t = (text or "").strip()
    m = re.search(r"```(?:json)?\s*(.+?)```", t, re.S)
    if m:
        t = m.group(1).strip()
    start = min([i for i in (t.find("["), t.find("{")) if i >= 0], default=-1)
    if start < 0:
        raise ValueError("JSON 없음")
    return json.loads(t[start:])


def candidates(story):
    live = [f for f in story["facts"] if f["score"] > 0]
    live.sort(key=lambda f: -f["score"])
    return live[:TOP_N]


def fact_line(f):
    return f'{f["id"]} [{SR.BUNDLE_KO.get(f["bundle"], f["bundle"])}/{f["kind"]} 점수 {f["score"]:.2f}] {f["text"]}'


# ---------------- ① 번호표 ----------------
def plan_prompt(story):
    cands = candidates(story)
    rule = story["plan"]
    intens = {b["bundle"]: b["intensity"] for b in rule["bundles"]}
    lim = {b: SF.explain_count(v) for b, v in intens.items()}
    frames = "\n".join(f"- {k}: {v[3]} (받는 종류: {', '.join(sorted(v[0]))}, 사실 {v[1]}~{v[2]}개)" for k, v in FRAMES.items())
    example = json.dumps([{"bundle": b["bundle"], "cuts": b["cuts"]} for b in rule["bundles"]], ensure_ascii=False)
    return f"""너는 하루치 데이터 스토리의 편집자다. 아래 '사실' 목록에서 번호만 골라 컷 순서를 짠다.
숫자를 새로 만들지 말고, 사실 번호(F..)만 쓴다. 답은 JSON 하나만 출력한다. 설명 문장 금지.

[오늘 사실 후보 — 점수가 클수록 평소보다 큰 일]
{chr(10).join(fact_line(f) for f in cands)}

[컷 틀]
{frames}

[규칙]
1. 묶음(bundle)은 market(시장)·power(전력)·news(업계 뉴스)·ai(AI 실험)·watch(내일) 중에서. 사실은 자기 묶음에만 넣는다.
2. 아래 묶음은 하나도 빼지 말고 전부 넣는다: {", ".join(b["bundle"] for b in rule["bundles"])}
   묶음마다 첫 컷은 lead 또는 combo(watch는 teaser 한 장). 묶음별 컷 수 상한: {json.dumps({x["bundle"]: len(x["cuts"]) for x in rule["bundles"]}, ensure_ascii=False)}. ai 묶음은 이 수를 꼭 채운다.
3. 묶음 순서는 그날 큰 일이 먼저. 단 ai는 끝에서 두 번째, watch는 맨 끝.
4. 같은 틀이 연달아 두 번 나오지 않게. 사실 하나는 최대 2번까지만 쓴다. numbers 컷에 사실을 2개 이상 넣으면 전부 move 종류여야 한다.
5. 전체 컷 수 x 6초가 {MAX_SECONDS}초를 넘지 않게.
6. 네 일의 핵심: 어떤 사실끼리 한 이야기인지 묶고(예: 같이 빠진 종목, 거꾸로 간 종목, 그 이유), 보는 사람이 이해하기 쉬운 순서로 놓는 것.

[생각 순서] ① 오늘 가장 큰 일 하나를 정한다 ② 그 일을 설명하는 사실을 고른다 ③ 규칙 2~5를 지키는지 센다 ④ JSON만 낸다.

[출력 모양 — 규칙만으로 짠 오늘 배치. 이것보다 더 좋은 이야기가 되게 바꿔도 되고, 그대로 둬도 된다]
{example}
"""


def check_plan(plan, story):
    """번호표 검사. 통과하면 (True, 정리된 bundles), 아니면 (False, 이유)."""
    F = {f["id"]: f for f in candidates(story)}
    intens = {b["bundle"]: b["intensity"] for b in story["plan"]["bundles"]}
    if not isinstance(plan, list) or not plan:
        return False, "목록이 아님"
    seen_b, use, prev_frame, total, out = [], {}, None, 0, []
    for b in plan:
        name = b.get("bundle") if isinstance(b, dict) else None
        if name not in BUNDLES or name in seen_b:
            return False, f"묶음 이름 오류 또는 중복: {name}"
        seen_b.append(name)
        cuts = b.get("cuts") or []
        if not cuts:
            return False, f"{name}: 컷 없음"
        if cuts[0].get("frame") not in LEAD_FRAMES:
            return False, f"{name}: 첫 컷이 lead/combo가 아님"
        rule_n = {x["bundle"]: len(x["cuts"]) for x in story["plan"]["bundles"]}
        if name in rule_n and len(cuts) > rule_n[name]:     # 사용자 결정 문턱(1배·2배, 전력 경보선)으로 정한 컷 수가 상한
            return False, f"{name}: 컷 {len(cuts)}장 > 상한 {rule_n[name]} (설명컷 {rule_n[name] - 1}장까지)"
        if name == "ai" and len(cuts) < rule_n.get("ai", 0):  # 실험 성적·기준선 컷은 빼지 못한다
            return False, f"ai: 컷 {len(cuts)}장 — 성적·기준선 컷 {rule_n['ai']}장을 모두 넣어야 함"
        clean = []
        for c in cuts:
            fr, ids = c.get("frame"), c.get("facts") or []
            if fr not in FRAMES:
                return False, f"없는 틀: {fr}"
            kinds, lo, hi, _ = FRAMES[fr]
            if not (lo <= len(ids) <= hi):
                return False, f"{fr}: 사실 {len(ids)}개 (허용 {lo}~{hi})"
            for i in ids:
                if i not in F:
                    return False, f"없는 사실 번호: {i}"
                if F[i]["bundle"] != name:
                    return False, f"{i}는 {F[i]['bundle']} 묶음 사실인데 {name}에 넣음"
                if F[i]["kind"] not in kinds:
                    return False, f"{fr} 틀에 {F[i]['kind']} 사실은 못 넣음"
                use[i] = use.get(i, 0) + 1
                if use[i] > 2:
                    return False, f"{i} 3번 이상 사용"
            if fr == "lead" and (F[ids[0]]["kind"] == "headlines" or (len(ids) == 2 and F[ids[1]]["kind"] != "headlines")):
                return False, "대표컷 두 번째 사실은 headlines만"
            if fr == "numbers" and len(ids) > 1 and any(F[i]["kind"] != "move" for i in ids):
                return False, "숫자컷 여러 개는 move끼리만"
            if fr == prev_frame:
                return False, f"같은 틀 연속: {fr}"
            prev_frame = fr
            clean.append({"frame": fr, "facts": list(ids)})
            total += 1
        out.append({"bundle": name, "intensity": intens.get(name, 0), "cuts": clean})
    missing = [x["bundle"] for x in story["plan"]["bundles"] if x["bundle"] not in seen_b]
    if missing:
        return False, f"빠진 묶음: {', '.join(missing)}"
    if "ai" in seen_b and "watch" in seen_b and seen_b[-2:] != ["ai", "watch"]:
        return False, "ai·watch 위치 규칙 위반"
    if "watch" in seen_b and seen_b[-1] != "watch":
        return False, "watch가 맨 끝이 아님"
    if total * SF.SEC_PER_CUT > MAX_SECONDS:
        return False, f"길이 {total * SF.SEC_PER_CUT}초 > {MAX_SECONDS}초"
    return True, out


# ---------------- ② 자막 ----------------
def cut_list(story):
    F = {f["id"]: f for f in story["facts"]}
    n, out = 0, []
    for b in story["plan"]["bundles"]:
        for c in b["cuts"]:
            n += 1
            facts = [F[i] for i in c["facts"]]
            title, say = SR.cut_text(c["frame"], facts)
            out.append({"n": n, "bundle": b["bundle"], "frame": c["frame"], "facts": facts, "title": title, "say": say})
    return out


def caption_prompt(story):
    rows = []
    for c in cut_list(story):
        rows.append(f'컷 {c["n"]} ({SR.BUNDLE_KO[c["bundle"]]}, {c["frame"]})\n  사실: ' + " / ".join(f["text"] for f in c["facts"])
                    + f'\n  지금 기본 문장: 제목 "{c["title"]}" / 자막 "{c["say"]}"')
    return f"""너는 경제·전력 데이터를 처음 보는 사람에게 설명하는 짧은 영상의 자막 작가다.
컷마다 제목 1줄과 자막 1줄을 쓴다. 답은 JSON 하나만: {{"1": {{"title": "...", "say": "..."}}, "2": {{...}}}}

[지킬 것]
- 숫자는 그 컷 '사실'에 적힌 숫자만, 적힌 그대로(반올림 바꾸지 말 것). 사실에 없는 숫자·날짜·원인은 쓰지 않는다.
- 오름·내림 방향은 사실의 부호(+/−)와 같아야 한다.
- 제목은 {TITLE_MAX}자 이내, 자막은 {SAY_MAX}자 이내. 쉬운 말, 반말 평서문(~다).
- 쓰지 말 말: {", ".join(w for w in BANNED if w != chr(0x6790))}. '때문'·'원인' 같은 원인 표현은 이유컷(reason)에서만.
- 기본 문장이 이미 좋으면 그대로 써도 된다. 더 쉽고 또렷하게 만들 수 있을 때만 바꾼다.

[좋은 예]
- 사실 "코스피 하루 −5.28% 내렸다 (평소 출렁임의 1.8배)" → 제목 "코스피, 하루에 5.28% 빠졌다" / 자막 "평소 출렁임의 1.8배다"
- 사실 "공급예비력 26,376MW, 경보선 5,500MW의 4.8배 (넉넉)" → 제목 "오늘 전기는 넉넉하다" / 자막 "여유 전력이 경보선의 4.8배"
- 사실 "단기 누적 1,048건 적중 52.2% — 동전 50%" → 제목 "AI 적중률, 동전과 큰 차이 없다" / 자막 "52.2% 대 동전 50%"

[생각 순서] ① 컷의 사실에서 숫자를 그대로 옮긴다 ② 처음 보는 사람이 알아들을 말로 바꾼다 ③ 길이·금지어를 확인한다 ④ JSON만 낸다.

[컷 목록]
{chr(10).join(rows)}
"""


def allowed_numbers(facts):
    vals = []

    def walk(x):
        if isinstance(x, bool):
            return
        if isinstance(x, (int, float)):
            vals.extend([x, abs(x)])
        elif isinstance(x, dict):
            for v in x.values():
                walk(v)
        elif isinstance(x, list):
            for v in x:
                walk(v)
    for f in facts:
        walk({k: v for k, v in f.items() if k not in ("bars", "score")})
        for tok in SF.NUM_RE.findall(f.get("text", "")):
            vals.append(float(tok.replace(",", "")))
        if f.get("typical") and f.get("dist") is not None:
            vals.append(abs(f["dist"]) / f["typical"])
        if f.get("bars"):
            vals.append(len(f["bars"]))
        if f["kind"] == "account_vs_hold":
            vals.append(abs(f["ret"] - f["hold"]))
    return vals


def number_ok(tok, vals):
    v = float(tok.replace(",", ""))
    d = len(tok.split(".")[1]) if "." in tok else 0
    return any(round(a, d) == round(v, d) or (d == 0 and abs(a - v) < 1e-9) for a in vals)


def check_caption(cap, cut):
    if not isinstance(cap, dict):
        return False, "모양 오류"
    title, say = cap.get("title"), cap.get("say", "")
    if not isinstance(title, str) or not title.strip() or not isinstance(say, str):
        return False, "제목·자막 없음"
    if len(title) > TITLE_MAX or len(say) > SAY_MAX:
        return False, f"길이 초과({len(title)}/{len(say)})"
    text = title + " " + say
    for w in BANNED:
        if w in text:
            return False, f"금지어 '{w}'"
    if cut["frame"] != "reason" and any(w in text for w in CAUSE_WORDS):
        return False, "이유컷이 아닌데 원인 표현"
    vals = allowed_numbers(cut["facts"])
    for tok in CAP_NUM.findall(text):
        if not number_ok(tok, vals):
            return False, f"사실에 없는 숫자 {tok}"
    signs = {(f.get("pct") or 0) > 0 for f in cut["facts"] if f["kind"] == "move"}
    if len(signs) == 1 and cut["frame"] in ("lead", "numbers", "graph"):
        up = signs.pop()
        wrong = DOWN_WORDS if up else UP_WORDS
        if any(w in text for w in wrong):
            return False, "방향 단어가 부호와 반대"
    return True, None


# ---------------- 실행 ----------------
def run(story, ask):
    """ask(역할, 프롬프트) → 텍스트. 결과 story에 plan·captions·ai 기록을 넣어 돌려준다."""
    s = copy.deepcopy(story)
    log = {"plan": None, "captions": {}, "calls": 0}
    # ① 번호표 (실패하면 이유를 알려 주고 1번만 다시)
    ok, res, tries = False, None, []
    for attempt in range(2):
        prompt = plan_prompt(s) if attempt == 0 else (plan_prompt(s) + f"\n[앞 답이 거절된 이유] {res}\n이 규칙을 지켜 JSON만 다시 내라.\n")
        try:
            log["calls"] += 1
            raw = ask("스토리 편집", prompt)
            ok, res = check_plan(parse_json(raw), s)
        except Exception as e:  # 콜 실패·JSON 깨짐
            ok, res = False, f"{type(e).__name__}: {str(e)[:80]}"
        tries.append("통과" if ok else res)
        if ok:
            break
    log["plan_tries"] = tries
    if ok:
        total = sum(len(b["cuts"]) for b in res)
        s["plan"] = {"bundles": res, "cuts": total, "seconds": total * SF.SEC_PER_CUT}
        s["planned_by"] = "ai"
        log["plan"] = "통과"
    else:
        s["planned_by"] = "rule"
        log["plan"] = f"실패 → 규칙 배치: {res}"
    # ② 자막
    cuts = cut_list(s)
    caps = {}
    try:
        log["calls"] += 1
        got = parse_json(ask("스토리 자막", caption_prompt(s)))
        for c in cuts:
            cap = got.get(str(c["n"])) if isinstance(got, dict) else None
            ok, why = check_caption(cap, c)
            if ok:
                caps[str(c["n"])] = {"title": cap["title"].strip(), "say": cap.get("say", "").strip()}
                log["captions"][str(c["n"])] = "AI 문장"
            else:
                log["captions"][str(c["n"])] = f"기본 문장 ({why})"
    except Exception as e:
        log["captions"] = {str(c["n"]): f"기본 문장 (자막 콜 실패: {type(e).__name__})" for c in cuts}
    s["captions"] = caps
    s["ai"] = log
    return s


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--facts", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--fake", help="가짜 응답 JSON 파일 {'plan': 텍스트, 'captions': 텍스트} — 배선 시험용, 콜 0")
    ap.add_argument("--show-prompts", action="store_true")
    a = ap.parse_args()
    story = json.loads(Path(a.facts).read_text(encoding="utf-8"))
    if a.show_prompts:
        sys.stdout.buffer.write((plan_prompt(story) + "\n=====\n" + caption_prompt(story)).encode("utf-8"))
        sys.exit(0)
    if a.fake:
        fake = json.loads(Path(a.fake).read_text(encoding="utf-8"))
        ask = lambda role, prompt: fake["plan"] if role == "스토리 편집" else fake["captions"]
    else:
        from gemini_keys import RotatingBudget
        b = RotatingBudget(per_run_cap=4)
        ask = lambda role, prompt: b.ask(role, prompt, topic="story")
    out = run(story, ask)
    Path(a.out).write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
    lg = out["ai"]
    msg = [f"[생성] {a.out}  배치={out['planned_by']}  콜 {lg['calls']}회", f"  번호표: {lg['plan']}"]
    msg += [f"  컷 {k}: {v}" for k, v in lg["captions"].items()]
    msg += [f"  컷 {k} 문장: {v['title']} / {v['say']}" for k, v in out["captions"].items()]
    sys.stdout.buffer.write(("\n".join(msg) + "\n").encode("utf-8"))
