# -*- coding: utf-8 -*-
"""버전2 스토리 — 사실 목록(story_facts.build 결과)을 컷 화면 HTML로 그린다. AI 콜 0.

- 컷 틀: lead(대표) · numbers(숫자) · graph(그래프) · contrary(거꾸로) · reason(이유) · combo(전력 합체)
         · picture(발전원 그림) · table(헤드라인 표) · compare(기준선 비교) · teaser(예고) + 끝(버튼 3개)
- 제목·자막은 AI가 쓰기 전까지 코드 기본 문장(cut_text). AI 문장이 오면 story["captions"][컷번호]로 덮는다(검사 통과분만).
- 옷: story["theme"] (하루씩 차례, story_facts.theme_for). 미리보기에서만 옷 바꾸기 선택 상자.

실행: dashboard\\venv\\Scripts\\python.exe info-board\\story_render.py --facts scratch\\story_test.json --out <html>
"""
import argparse, html, json, sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
CSS = HERE / "story_theme.css"
FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
         '<link href="https://fonts.googleapis.com/css2?family=Bowlby+One+SC&family=Sofia+Sans:wght@400;700&family=Black+Han+Sans'
         '&family=Gothic+A1:wght@400;700&family=Gabarito:wght@800&family=Manrope:wght@500;700&family=Jua&family=Noto+Sans+KR:wght@500;700'
         '&family=League+Gothic&family=Do+Hyeon&family=Newsreader:opsz,wght@6..72,400;6..72,500&family=Noto+Serif+KR:wght@300;400;700'
         '&family=Hanken+Grotesk:wght@400&family=IBM+Plex+Sans+KR:wght@400;500&family=Schibsted+Grotesk:wght@700'
         '&family=Instrument+Sans:wght@400;500&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">'
         '<link href="https://api.fontshare.com/v2/css?f[]=sentient@300,400&display=swap" rel="stylesheet">')
GF = "https://fonts.googleapis.com/css2?"
THEME_FONTS = {   # 그날 옷 글꼴만 부른다 (견본처럼 17벌 다 부르지 않게)
    "sticker": [GF + "family=Bowlby+One+SC&family=Sofia+Sans:wght@400;700&family=Black+Han+Sans&family=Gothic+A1:wght@400;700&display=swap"],
    "squeeze": [GF + "family=Gabarito:wght@800&family=Manrope:wght@500;700&family=Jua&family=Noto+Sans+KR:wght@500;700&display=swap"],
    "pasteup": [GF + "family=League+Gothic&family=Do+Hyeon&family=Newsreader:opsz,wght@6..72,400;6..72,500&family=Noto+Serif+KR:wght@400;700&display=swap"],
    "atelier": [GF + "family=Hanken+Grotesk:wght@400&family=IBM+Plex+Sans+KR:wght@400;500&family=Noto+Serif+KR:wght@300;400&display=swap",
                "https://api.fontshare.com/v2/css?f[]=sentient@300,400&display=swap"],
    "dose":    [GF + "family=Schibsted+Grotesk:wght@700&family=Instrument+Sans:wght@400;500&family=DM+Mono:wght@400;500&family=Gothic+A1:wght@400;700&family=IBM+Plex+Sans+KR:wght@400;500&display=swap"],
}
PRECONNECT = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'


def font_links(themes):
    urls = []
    for t in themes:
        for u in THEME_FONTS.get(t, []):
            if u not in urls:
                urls.append(u)
    return PRECONNECT + "".join(f'<link href="{E(u)}" rel="stylesheet">' for u in urls)


BUNDLE_KO = {"market": "시장", "power": "전력", "news": "업계 뉴스", "ai": "AI 실험", "watch": "내일"}
THEME_KO = {"sticker": "스티커", "squeeze": "초록 과일", "pasteup": "오려 붙이기", "atelier": "회벽 종이", "dose": "햇빛과 플라스틱"}
E = html.escape


def signed(x, nd=2):
    return ("−" if x < 0 else "+") + f"{abs(x):,.{nd}f}"


def josa(word, pair):
    ch = word.strip()[-1]
    if "가" <= ch <= "힣":
        return pair[0] if (ord(ch) - 0xAC00) % 28 else pair[1]
    return pair[1]


def words(text, start=0.15, step=0.12):
    return " ".join(f'<span class="w" style="--d:{start + i * step:.2f}">{E(w)}</span>' for i, w in enumerate(text.split()))


def count_fig(value, nd=2, suffix="%", signed_=True):
    shown = signed(value, nd) if signed_ else f"{value:,.{nd}f}"
    return (f'<span class="shake"><span class="count" data-to="{value}" data-nd="{nd}" data-signed="{1 if signed_ else 0}">'
            f'{shown}</span><small>{E(suffix)}</small></span>')


def bars_svg(bars, sd, label):
    W, H, Z = 320, 150, 75
    scale = (Z - 8) / max(max(abs(r) for _, r in bars), sd)
    bw = W / len(bars)
    out = [f'<svg class="chart" viewBox="0 0 {W} {H}" role="img" aria-label="{E(label)}">',
           f'<rect class="band" x="0" y="{Z - sd * scale:.1f}" width="{W}" height="{2 * sd * scale:.1f}"/>',
           f'<line class="zero" x1="0" x2="{W}" y1="{Z}" y2="{Z}"/>']
    for i, (d, r) in enumerate(bars):
        h = max(abs(r) * scale, 1.2)
        y = Z if r < 0 else Z - h
        cls = "bar today" if i == len(bars) - 1 else "bar"
        out.append(f'<rect class="{cls}" style="--i:{i};transform-origin:center {"top" if r < 0 else "bottom"}" x="{i * bw + 2:.1f}" '
                   f'y="{y:.1f}" width="{bw - 4:.1f}" height="{h:.1f}"><title>{d} {signed(r)}%</title></rect>')
    out.append("</svg>")
    return "".join(out)


FUEL_SW = ["var(--c-ink)", "var(--c-ink-2)", "var(--c-bar)", "var(--c-tag)", "var(--c-rule)"]


def mix_svg(fuels):
    tot = sum(f["mw"] for f in fuels)
    W, x, out = 320, 0.0, ['<svg class="chart" viewBox="0 0 320 36" role="img" aria-label="발전원 구성 막대">']
    for i, f in enumerate(fuels):
        w = W * f["mw"] / tot
        out.append(f'<rect class="seg" style="--i:{i};fill:{FUEL_SW[i % 5]}" x="{x:.1f}" y="0" width="{max(w - 2, 1):.1f}" height="36">'
                   f'<title>{E(f["fuel"])} {f["mw"]:,.0f}MW</title></rect>')
        x += w
    out.append("</svg>")
    legend = "".join(f'<span style="--sw:{FUEL_SW[i % 5]}">{E(f["fuel"])} {f["mw"] / tot * 100:.0f}%</span>' for i, f in enumerate(fuels))
    return "".join(out) + f'<div class="legend">{legend}</div>'


def gauge_svg(now, thr, nd=3):
    lo, hi = min(now, thr), max(now, thr)
    pad = (hi - lo) * 0.6 or abs(now) * 0.01
    a, b = lo - pad, hi + pad
    X = lambda v: 16 + (v - a) / (b - a) * 288
    return (f'<svg class="chart" viewBox="0 0 320 70" role="img" aria-label="지금 값과 선 사이 거리">'
            f'<line class="gline" x1="{X(a):.1f}" x2="{X(b):.1f}" y1="34" y2="34" stroke-opacity=".25"/>'
            f'<line class="gdash" x1="{X(thr):.1f}" x2="{X(thr):.1f}" y1="14" y2="54"/>'
            f'<circle class="gdot" cx="{X(now):.1f}" cy="34" r="7"/>'
            f'<text x="{X(now):.1f}" y="66" text-anchor="middle">지금 {now:g}</text>'
            f'<text x="{X(thr):.1f}" y="10" text-anchor="middle">선 {thr:g}</text></svg>')


def cut_text(frame, facts):
    """컷마다 코드 기본 제목·자막. AI가 실패하면 이 문장이 그대로 나간다."""
    f = facts[0]
    k = f["kind"]
    if k == "move" and frame == "lead":
        verb = "내렸다" if f["pct"] < 0 else "올랐다"
        return f"{f['name']}{josa(f['name'], '이가')} 하루에 {abs(f['pct']):.2f}% {verb}", f"평소 하루 출렁임의 {f['ratio']:.1f}배"
    if k == "move" and frame == "numbers":
        names = [x["name"] for x in facts]
        joined = names[0] if len(names) == 1 else ", ".join(names[:-1]) + josa(names[-2], "과와") + " " + names[-1] if len(names) > 2 else \
            names[0] + josa(names[0], "과와") + " " + names[1]
        return f"{joined}도 같은 쪽으로 크게", "괄호 안은 평소 하루 출렁임의 몇 배인지"
    if k == "move" and frame == "graph":
        return f"최근 {len(f['bars'])}거래일 가운데 오늘", f"띠는 평소 범위 ±{f['sd']:.1f}%, 맨 오른쪽이 오늘"
    if k == "contrary":
        return f"{f['name']}{josa(f['name'], '은는')} 거꾸로 갔다", f["text"]
    if k == "reason":
        return "AI 회의가 짚은 이유", ""
    if k in ("extreme", "streak"):
        return f["text"], ""
    if k == "reserve":
        return f"오늘 전기 여유는 {f['level']}", f"예비력 {f['value']:,.0f}MW, 경보선 {f['alarm']:,}MW"
    if k == "mix":
        return "지금 무엇으로 전기를 만드나", ""
    if k == "smp":
        return "전기 도매가격", f["text"]
    if k == "count":
        return f"전기 업계 뉴스 {f['n']}건", "출처는 전기신문 한 곳"
    if k == "headlines":
        return f"오늘 헤드라인 {len(f['items'])}개", "누르면 기사 원문"
    if k == "last_grade":
        return f"AI 예측, {f['date'][5:].replace('-', '/')} 채점", "두 요원 모두 방향이 정해진 역할이라 실력 채점이 아니다"
    if k == "score_vs_base":
        return f"AI 적중률, 동전과 나란히", f"확신 점수 {f['brier']:.3f}, 찍기 {f['brier_coin']:.3f}보다 {'나쁨' if f['brier'] > f['brier_coin'] else '좋음'} (낮을수록 좋음)"
    if k == "account_vs_hold":
        d = f["ret"] - f["hold"]
        return "가상계좌 대 그냥 들고 있기", f"차이 {abs(d):.1f}%p, AI 매매가 {'나았다' if d > 0 else '못했다'}" if abs(d) >= 0.05 else "거의 같다"
    if k == "watch":
        return "내일 지켜볼 것", (f"평소 하루 움직임 {f['typical']:.1f}%라 약 {abs(f['dist']) / f['typical']:.0f}일치 거리" if f.get("typical") else "")
    return f["text"], ""


def cut_body(frame, facts):
    f = facts[0]
    k = f["kind"]
    sign = "is-down" if (f.get("pct") or f.get("ret") or 0) < 0 else "is-up"
    if k == "move" and frame == "lead":
        return sign, (f'<div class="figcard rise" style="--d:.7"><p class="fig">{count_fig(f["pct"])}</p>'
                      f'<p class="sub">전날 {f["prev"]:,.{f["dec"]}f}에서 {f["value"]:,.{f["dec"]}f}{E(f["unit"])}으로</p></div>')
    if k == "move" and frame == "numbers":
        rows = "".join(f'<div class="row {"is-down" if x["pct"] < 0 else "is-up"}" style="--i:{i}"><span class="k">{E(x["name"])}</span>'
                       f'<span class="v">{signed(x["pct"])}%</span><span class="n">{x["value"]:,.{x["dec"]}f}{E(x["unit"])} (평소의 {x["ratio"]:.1f}배)</span></div>'
                       for i, x in enumerate(facts))
        return sign, f'<div class="plot rows rise" style="--d:.5">{rows}</div>'
    if k == "move" and frame == "graph":
        return sign, (f'<div class="plot rise" style="--d:.6">{bars_svg(f["bars"], f["sd"], f"{f["name"]} 최근 {len(f["bars"])}거래일 하루 변동, 맨 오른쪽이 오늘")}'
                      f'<div class="plot-notes"><span>최근 {len(f["bars"])}거래일</span><span>오늘 {signed(f["pct"])}%</span></div></div>')
    if k == "contrary":
        rows = (f'<div class="row {"is-down" if f["ref_pct"] < 0 else "is-up"}" style="--i:0"><span class="k">코스피</span><span class="v">{signed(f["ref_pct"])}%</span></div>'
                f'<div class="row {"is-down" if f["pct"] < 0 else "is-up"}" style="--i:1"><span class="k">{E(f["name"])}</span><span class="v">{signed(f["pct"])}%</span></div>')
        return sign, f'<div class="plot rows rise" style="--d:.5">{rows}</div>'
    if k == "reason":
        badge = "" if f.get("cited") else '<span class="badge">AI 추정</span>'
        return "", f'<p class="say rise" style="--d:.6">{E(f["text"])}{badge}</p>'
    if k in ("extreme", "streak"):
        return sign, ""
    if k == "reserve":
        body = (f'<div class="figcard rise" style="--d:.6"><p class="fig">{count_fig(f["mult"], 1, "배", False)}</p>'
                f'<p class="sub">경보선의 몇 배인지{", 예비율 " + format(f["rate"], ".2f") + "%" if f.get("rate") is not None else ""}</p></div>')
        if len(facts) > 1 and facts[1]["kind"] == "mix":
            body += f'<div class="plot rise" style="--d:1">{mix_svg(facts[1]["fuels"])}</div>'
        return "", body
    if k == "mix":
        return "", f'<div class="plot rise" style="--d:.6">{mix_svg(f["fuels"])}</div>'
    if k == "smp":
        return sign, f'<div class="figcard rise" style="--d:.6"><p class="fig">{count_fig(f["pct"])}</p><p class="sub">{f["value"]:.1f}원/kWh</p></div>'
    if k == "count":
        first = f'<p class="sub">첫 기사: {E(facts[1]["items"][0]["title"])}</p>' if len(facts) > 1 and facts[1].get("items") else ""
        return "", f'<div class="figcard rise" style="--d:.6"><p class="fig">{count_fig(f["n"], 0, "건", False)}</p></div>{first}'
    if k == "headlines":
        lis = "".join(f'<li style="--i:{i}"><a href="{E(x["link"])}" target="_blank" rel="noopener">{E(x["title"])}</a><time>{E(x["pub"])}</time></li>'
                      for i, x in enumerate(f["items"]))
        return "", f'<ol class="plot news">{lis}</ol>'
    if k == "last_grade":
        rows = "".join(f'<div class="row is-flat" style="--i:{i}"><span class="k">{E(who)}</span><span class="v">{v["hit"]}/{v["n"]}</span>'
                       f'<span class="n">맞힘. 평소 \'오른다\'를 {v["up_share"]}% 찍는 역할</span></div>' for i, (who, v) in enumerate(sorted(f["by"].items())))
        return "", f'<div class="plot rows rise" style="--d:.5">{rows}</div>'
    if k == "score_vs_base":
        items = [("AI 적중", f["hit"], True), ("동전 던지기", f["coin"], False), ("늘 '오른다'", f["base"], False)]
        hb = "".join(f'<div class="hb{" me" if me else ""}"><span>{E(n)}</span><span class="t"><b style="--w:{v}%;--i:{i}"></b></span>'
                     f'<span class="p">{v:.1f}%</span></div>' for i, (n, v, me) in enumerate(items))
        return "", f'<div class="plot rise" style="--d:.5">{hb}<div class="plot-notes"><span>단기 예측 {f["n"]:,}건</span><span>막대 끝 = 100%</span></div></div>'
    if k == "account_vs_hold":
        rows = (f'<div class="row {"is-down" if f["ret"] < 0 else "is-up"}" style="--i:0"><span class="k">AI 가상계좌</span><span class="v">{signed(f["ret"])}%</span></div>'
                f'<div class="row {"is-down" if f["hold"] < 0 else "is-up"}" style="--i:1"><span class="k">같은 6종목 그냥 들고 있기</span><span class="v">{signed(f["hold"])}%</span>'
                f'<span class="n">{f["since"]}부터 {f["until"]}까지</span></div>')
        return sign, f'<div class="plot rows rise" style="--d:.5">{rows}</div>'
    if k == "watch":
        if f.get("threshold") is None:
            return "", f'<p class="say rise" style="--d:.6">{E(f["line"])}<span class="badge">AI 추정</span></p>'
        s2 = "is-down" if f["now"] > f["threshold"] else "is-up"
        return s2, (f'<div class="figcard rise" style="--d:.6"><p class="fig">{count_fig(abs(f["dist"]), 1, "%", False)}</p>'
                    f'<p class="sub">{E(f.get("name", ""))} {f["threshold"]:g} 선까지 남은 거리</p></div>'
                    f'<div class="plot rise" style="--d:1">{gauge_svg(f["now"], f["threshold"])}</div>')
    return "", ""


def render(story, preview=True, home="index.html", tabs=None):
    """home: 탭 화면 주소(폰 'index.html', PC '/'). tabs: 끝 버튼 → 탭 id (폰·PC가 다름).
    iframe 안에서 열리면 끝 버튼·닫기는 부모 화면에 postMessage로 알린다."""
    tabs = tabs or {"power": "ind:elec", "brief": "deck", "lab": "lab"}
    F = {f["id"]: f for f in story["facts"]}
    cuts = []
    for b in story["plan"]["bundles"]:
        for c in b["cuts"]:
            cuts.append((b["bundle"], c["frame"], [F[i] for i in c["facts"]]))
    caps = story.get("captions") or {}
    total = len(cuts)
    date = story["date"]
    md = f"{int(date[5:7])}월 {int(date[8:10])}일"
    secs = []
    for n, (bundle, frame, facts) in enumerate(cuts, 1):
        title, say = cut_text(frame, facts)
        if str(n) in caps:   # AI 문장(검사 통과분)
            title, say = caps[str(n)].get("title", title), caps[str(n)].get("say", say)
        sign, body = cut_body(frame, facts)
        if not body:   # 틀과 사실 종류가 안 맞으면 사실 문장을 그대로 (AI 번호표가 낯선 조합을 골라도 화면은 안 깨짐)
            body = f'<p class="say rise" style="--d:.6">{E(facts[0]["text"])}</p>'
        src = "; ".join(dict.fromkeys(f["src"] for f in facts))
        say_html = f'<p class="say rise" style="--d:2.4">{E(say)}</p>' if say else ""
        secs.append(f'<section class="cut {sign}" data-bundle="{bundle}" aria-label="{n}번째 컷, {BUNDLE_KO[bundle]}">'
                    f'<div class="meta"><span>{md}</span><span>{BUNDLE_KO[bundle]} {n}/{total}</span></div>'
                    f'<h2 class="head">{words(title)}</h2>{body}{say_html}<p class="src">자료: {E(src)}</p></section>')
    secs.append('<section class="cut end" data-bundle="end" aria-label="끝, 탭 고르기">'
                f'<div class="meta"><span>{md}</span><span>끝</span></div>'
                '<h2 class="head">어디부터 볼까요</h2>'
                f'<a class="go" href="{E(home)}#{E(tabs["power"])}" data-go="{E(tabs["power"])}">전력<small>예비력, 발전원, 도매가격</small></a>'
                f'<a class="go" href="{E(home)}#{E(tabs["brief"])}" data-go="{E(tabs["brief"])}">브리핑<small>AI 회의 요약과 지표</small></a>'
                f'<a class="go" href="{E(home)}#{E(tabs["lab"])}" data-go="{E(tabs["lab"])}">실험실<small>AI 예측 채점, 가상계좌</small></a>'
                '<div class="endrow"><button class="again" type="button" data-again>처음부터 다시</button>'
                '<button class="again" type="button" data-first>다음부터 탭부터 열기</button></div></section>')
    bars = "".join("<i><b></b></i>" for _ in range(total))
    dev = ""
    if preview:
        opts = "".join(f'<option value="{t}"{" selected" if t == story["theme"] else ""}>{THEME_KO[t]}{" (오늘 차례)" if t == story["theme"] else ""}</option>'
                       for t in THEME_KO)
        dev = f'<div class="dev"><label>옷 미리보기 <select id="themepick">{opts}</select></label><span>{total}컷 약 {total * 6}초</span></div>'
    css = CSS.read_text(encoding="utf-8")
    return f"""<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>오늘의 스토리</title><meta name="description" content="{E(md)} 데이터로 만든 하루 스토리. 숫자는 코드가 계산했다.">
{font_links(list(THEME_KO) if preview else [story["theme"]])}<style>{css}</style></head>
<body><main class="stage">{dev}
<div id="story" data-theme="{story['theme']}" data-home="{E(home)}" tabindex="0" aria-roledescription="스토리" data-impeccable-ignore="hard-offset-shadow">
<span class="pausetag" aria-live="polite">멈춤</span>
<button class="close" type="button" data-close aria-label="스토리 닫고 탭 보기">닫기</button>
<div class="bars" aria-hidden="true">{bars}</div>
{''.join(secs)}
</div></main>
<script>{PLAYER_JS}</script></body></html>"""


PLAYER_JS = r"""
(function () {
  document.documentElement.classList.add('js');
  var story = document.getElementById('story');
  var cuts = [].slice.call(story.querySelectorAll('.cut'));
  var bars = [].slice.call(story.querySelectorAll('.bars i'));
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var DUR = 6000, idx = 0, timer = null, left = DUR, started = 0, paused = false;
  function fmt(v, nd, sg) { var s = Math.abs(v).toLocaleString('en-US', {minimumFractionDigits: nd, maximumFractionDigits: nd}); return sg ? (v < 0 ? '−' : '+') + s : s; }
  function count(cut) {
    cut.querySelectorAll('.count').forEach(function (el) {
      var to = parseFloat(el.dataset.to), nd = +el.dataset.nd, sg = el.dataset.signed === '1';
      if (reduce) { el.textContent = fmt(to, nd, sg); return; }
      var t0 = null, delay = 700, dur = 900;
      el.textContent = fmt(0, nd, sg);
      function step(t) { if (t0 === null) t0 = t; var k = Math.min(Math.max((t - t0 - delay) / dur, 0), 1); el.textContent = fmt(to * (1 - Math.pow(1 - k, 3)), nd, sg); if (k < 1) requestAnimationFrame(step); }
      requestAnimationFrame(step);
      setTimeout(function () { el.textContent = fmt(to, nd, sg); }, delay + dur + 400);
    });
  }
  function schedule(ms) { clearTimeout(timer); left = ms; started = Date.now(); if (idx < bars.length) timer = setTimeout(function () { show(idx + 1); }, ms); }
  function show(i) {
    i = Math.max(0, Math.min(cuts.length - 1, i));
    cuts[idx].classList.remove('on'); idx = i; void cuts[idx].offsetWidth; cuts[idx].classList.add('on');
    bars.forEach(function (b, j) { b.classList.toggle('done', j < idx); b.classList.remove('now'); });
    if (bars[idx]) { void bars[idx].offsetWidth; bars[idx].classList.add('now'); }
    story.style.setProperty('--dur', DUR + 'ms');
    count(cuts[idx]); paused = false; story.classList.remove('paused'); schedule(DUR);
  }
  function bundleJump(dir) {
    var b = cuts[idx].dataset.bundle, j = idx;
    while (j >= 0 && j < cuts.length && cuts[j].dataset.bundle === b) j += dir;
    if (dir < 0) { var b2 = cuts[Math.max(j, 0)].dataset.bundle; while (j > 0 && cuts[j - 1].dataset.bundle === b2) j--; }
    show(j);
  }
  function pause(on) {
    if (on === paused) return; paused = on; story.classList.toggle('paused', on);
    if (on) { clearTimeout(timer); left -= Date.now() - started; } else schedule(left);
  }
  var downAt = 0, downX = 0, downY = 0, held = false, holdT = null;
  story.addEventListener('pointerdown', function (e) {
    if (e.target.closest('a,button,select')) return;
    downAt = Date.now(); downX = e.clientX; downY = e.clientY; held = false;
    holdT = setTimeout(function () { held = true; pause(true); }, 350);
  });
  story.addEventListener('pointerup', function (e) {
    if (!downAt) return; clearTimeout(holdT);
    var dx = e.clientX - downX, dy = e.clientY - downY; downAt = 0;
    if (held) { pause(false); return; }
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) { bundleJump(dx < 0 ? 1 : -1); return; }
    var r = story.getBoundingClientRect();
    show(e.clientX - r.left < r.width * 0.33 ? idx - 1 : idx + 1);
  });
  story.addEventListener('pointercancel', function () { clearTimeout(holdT); if (held) pause(false); downAt = 0; });
  story.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') show(idx + 1); else if (e.key === 'ArrowLeft') show(idx - 1);
    else if (e.key === ' ') { e.preventDefault(); pause(!paused); }
  });
  document.addEventListener('visibilitychange', function () { if (document.hidden) pause(true); });
  story.querySelector('[data-again]').addEventListener('click', function () { show(0); });
  var inFrame = window.parent && window.parent !== window;
  function leave(to) {                       // 부모(탭 화면)로 돌아가기
    if (inFrame) { window.parent.postMessage({story: 'go', to: to || ''}, '*'); pause(true); }
    else { location.href = story.dataset.home + (to ? '#' + to : ''); }
  }
  story.querySelectorAll('[data-go]').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); leave(a.dataset.go); });
  });
  story.querySelector('[data-close]').addEventListener('click', function () { leave(''); });
  var first = story.querySelector('[data-first]');
  function pref() { try { return localStorage.getItem('v2.first') || 'story'; } catch (e) { return 'story'; } }
  function paintPref() { first.textContent = pref() === 'tabs' ? '다음부터 스토리부터 열기' : '다음부터 탭부터 열기'; }
  first.addEventListener('click', function () {
    try { localStorage.setItem('v2.first', pref() === 'tabs' ? 'story' : 'tabs'); } catch (e) {}
    paintPref();
  });
  paintPref();
  window.addEventListener('message', function (e) { if (e.data && e.data.story === 'restart') show(0); });
  var pick = document.getElementById('themepick');
  if (pick) pick.addEventListener('change', function () { story.dataset.theme = pick.value; show(idx); });
  show(0);
})();
"""

if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--facts", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--no-preview", action="store_true")
    a = ap.parse_args()
    s = json.loads(Path(a.facts).read_text(encoding="utf-8"))
    Path(a.out).write_text(render(s, preview=not a.no_preview), encoding="utf-8")
    sys.stdout.buffer.write(f"[생성] {a.out} 옷 {s['theme']} 컷 {s['plan']['cuts']}장\n".encode("utf-8"))
