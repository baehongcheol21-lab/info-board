# coding=utf-8
"""
reader.py — AI 대신 읽기 1단계 (2026-11-06 사용자 결정, 원장 R04·R27)

사용자 결정 원문: "새 정보 주입: 전력 수급 4개 지표와 AI 대신 읽기(산업부, 전기신문)를 회의에 즉시 주입해라."
배분(1단계 450콜): 대신 읽기 하루 50콜 = 회의 2번 × READ_CAP(25).
설계: 루트 `AI_대신읽기_설계.md` 4장 (Claude 검토 11-06).

흐름 (문서 1건 = 1콜)
  [모으기 0콜]   산업통상부 보도/해명 RSS(POST) → 전기신문 RSS. 직전 회의에서 읽은 링크는 건너뜀.
  [AI 읽기 1콜]  정해진 칸(JSON)으로만 답: 관련지표 번호 / 방향 / 한줄요약 / 원문 그대로 인용 / 글종류
  [코드 검사 0콜] ①인용이 원문에 글자 그대로 있나 ②인용 15자 이상 ③지표 번호가 표 안에 있나
                 ④한줄요약의 숫자가 원문에 있나 ⑤JSON 모양. 하나라도 실패하면 AI 답을 버린다(제목·링크는 남김).
  [주입]         통과한 것만 회의 전역 상태(gstate)에 짧게 붙인다 → 모든 요원이 읽는다.

공개 저장소 주의: 결과에는 제목·링크·출처·우리가 쓴 한줄요약·지표·방향만 남긴다.
원문 인용(quote)과 본문은 검사에만 쓰고 저장하지 않는다(언론사 이용규칙, 설계 3-4).

한계(확인된 것): 산업부 게시글은 본문이 PDF 첨부라 **제목만** 읽는다(2026-11-06 실측). PDF 읽기는 다음 단계.
"""
import re
import html
import json
import xml.etree.ElementTree as ET

import requests

UA = {"User-Agent": "Mozilla/5.0 (personal dashboard; non-commercial)"}
READ_CAP = 25          # 회의 1번에 읽는 최대 건수(=최대 콜). 하루 2회의 × 25 = 50콜
BODY_MAX = 1600        # AI에게 주는 본문 최대 글자
GSTATE_MAX_ITEMS = 8   # 회의 전역 상태에 붙이는 최대 건수
QUOTE_MIN = 15

SOURCES = [
    # (출처 이름, RSS 주소, 요청 방식, 본문 얻는 법)
    ("산업통상부", "https://www.motir.go.kr/kor/article/ATCLe0854704d/rss", "POST", "title"),
    ("전기신문", "https://www.electimes.com/rss/allArticle.xml", "GET", "desc"),
]

DIRS = ("오름", "내림", "섞임", "모름")
KINDS = ("사실", "전망", "의견", "광고성")


def indicator_table(indicators):
    """[(id, 이름)] → 번호표. 0 = 해당 없음. 번호는 코드가 만들고 저장은 id로 한다."""
    return [(0, "none", "해당 없음")] + [(i + 1, iid, nm) for i, (iid, nm) in enumerate(indicators)]


def _clean(t):
    t = html.unescape(re.sub(r"<[^>]+>", " ", t or ""))
    return re.sub(r"\s+", " ", t).strip()


def _norm(t):
    """인용 대조용 정리: 공백 하나로, 따옴표 통일, HTML 기호 풀기."""
    t = html.unescape(t or "")
    for a, b in (("“", '"'), ("”", '"'), ("‘", "'"), ("’", "'"), ("·", "·"), (" ", " ")):
        t = t.replace(a, b)
    return re.sub(r"\s+", " ", t).strip()


def collect(skip_links=(), per_source=40):
    """모으기(0콜). 반환 [{source, title, link, published, body}] — 출처 순서(정부 먼저)."""
    out, seen = [], set(skip_links)
    for name, url, method, how in SOURCES:
        try:
            r = requests.request(method, url, headers=UA, timeout=20)
            r.raise_for_status()
            items = ET.fromstring(r.content).findall(".//item")[:per_source]
        except Exception as e:
            print(f"  ⚠️ 대신읽기 {name} 수집 실패: {type(e).__name__}: {str(e)[:60]}")
            continue
        for it in items:
            link = (it.findtext("link") or "").strip()
            title = _clean(it.findtext("title"))
            if not link or not title or link in seen:
                continue
            seen.add(link)
            body = title if how == "title" else _clean(it.findtext("description"))
            out.append({"source": name, "title": title, "link": link,
                        "published": (it.findtext("pubDate") or "").strip(),
                        "body": body[:BODY_MAX], "body_kind": "제목만" if how == "title" else "요약글"})
    return out


def build_prompt(doc, table):
    rows = "\n".join(f"{n}. {nm}" for n, _, nm in table)
    return f"""너는 문서 분류원이다. 아래 문서 1건을 읽고 **JSON 한 개만** 출력한다. 다른 말은 쓰지 않는다.

[지표 번호표]
{rows}

[문서] 출처: {doc['source']} ({doc['body_kind']})
제목: {doc['title']}
본문: {doc['body']}

순서대로 생각하라:
1. 본문(제목 포함)에서 근거가 되는 문장 하나를 **글자 그대로 복사**한다 → "인용" (15자 이상).
   괄호 안 글자·따옴표·숫자까지 한 글자도 빼거나 바꾸지 않는다(코드가 원문과 대조해서 다르면 답 전체를 버린다).
   긴 문장이면 앞부분 일부만 잘라 복사해도 된다.
2. 그 인용만 보고 관련 지표 번호를 고른다(최대 3개). 연결할 근거가 없으면 [0].
3. 첫 번째 지표가 이 문서 때문에 오를지/내릴지: 오름|내림|섞임|모름. 근거 없으면 모름.
4. 한줄요약: 60자 이내, 네 말로 새로 쓴다. 본문에 없는 숫자를 쓰지 않는다.
5. 글종류: 사실|전망|의견|광고성.

예시(형식만 참고, 내용 베끼기 금지):
{{"관련지표": [0], "방향": "모름", "한줄요약": "지역 행사 참가기업 모집 공고", "인용": "참가기업을 오는 30일까지 모집한다", "글종류": "광고성"}}
{{"관련지표": [7, 9], "방향": "오름", "한줄요약": "전기요금 인상 검토 소식", "인용": "정부가 내년 1분기 전기요금 인상을 검토하고 있다", "글종류": "전망"}}

출력:"""


def _nums(t):
    return {n.replace(",", "") for n in re.findall(r"\d[\d,]*(?:\.\d+)?", t or "")}


def check(ans_text, doc, table):
    """코드 검사(0콜). 반환 (통과 dict 또는 None, 실패 이유)."""
    s = ans_text or ""
    try:
        j = json.loads(s[s.find("{"):s.rfind("}") + 1])
    except ValueError:
        return None, "JSON 아님"
    if not isinstance(j, dict):
        return None, "JSON 아님"
    need = ("관련지표", "방향", "한줄요약", "인용", "글종류")
    if any(k not in j for k in need):
        return None, "칸 빠짐"
    quote = _norm(str(j["인용"]))
    if len(quote) < QUOTE_MIN:
        return None, "인용 너무 짧음"
    src = _norm(doc["title"] + " " + doc["body"])
    if quote not in src:
        return None, "인용이 원문에 없음"
    idx = j["관련지표"]
    if not isinstance(idx, list) or not idx or len(idx) > 3:
        return None, "지표 번호 모양"
    valid = {n for n, _, _ in table}
    try:
        idx = [int(x) for x in idx]
    except (TypeError, ValueError):
        return None, "지표 번호 모양"
    if any(x not in valid for x in idx) or (0 in idx and len(idx) > 1):
        return None, "지표 번호 범위"
    if j["방향"] not in DIRS or j["글종류"] not in KINDS:
        return None, "방향/글종류 값"
    summ = str(j["한줄요약"]).strip()
    if not summ or len(summ) > 80:
        return None, "한줄요약 길이"
    if _nums(summ) - _nums(src):
        return None, "요약에 원문에 없는 숫자"
    by_n = {n: (iid, nm) for n, iid, nm in table}
    ids = [by_n[x][0] for x in idx if x != 0]
    return {"ids": ids, "names": [by_n[x][1] for x in idx if x != 0],
            "dir": j["방향"] if ids else "모름", "summary": summ, "kind": j["글종류"]}, ""


def run(b, indicators, skip_links=(), cap=READ_CAP, rank=None):
    """b: RotatingBudget. indicators: [(id, 이름)]. 반환 {items, stats}.
    items: 공개해도 되는 칸만(제목·링크·출처·요약·지표·방향·검사결과). 인용·본문은 넣지 않는다.
    rank: 언론 기사 줄 세우기 함수(0콜, 예: news_rank 기관). 버리지 않고 순서만 바꾼다 — 정부 자료는 늘 먼저."""
    table = indicator_table(indicators)
    docs = collect(skip_links)
    if rank:
        gov = [d for d in docs if d["source"] == SOURCES[0][0]]
        rest = [d for d in docs if d["source"] != SOURCES[0][0]]
        try:
            ranked = rank(rest)
            if isinstance(ranked, list) and len(ranked) == len(rest):
                rest = ranked
        except Exception as e:
            print(f"  ⚠️ 대신읽기 줄 세우기 건너뜀(수집 순서 유지): {str(e)[:60]}")
        docs = gov + rest
    items, stats = [], {"모음": len(docs), "읽음": 0, "통과": 0, "버림": 0, "이유": {}}
    for doc in docs[:cap]:
        row = {"source": doc["source"], "title": doc["title"], "link": doc["link"],
               "published": doc["published"], "body_kind": doc["body_kind"]}
        try:
            ans = b.ask("READER", build_prompt(doc, table), topic=doc["title"][:30])
        except Exception as e:
            print(f"  ⚠️ 대신읽기 중단(콜 실패): {str(e)[:60]}")
            break
        stats["읽음"] += 1
        ok, why = check(ans, doc, table)
        if ok:
            row.update(ok, passed=True)
            stats["통과"] += 1
        else:
            row.update(passed=False, reject=why)
            stats["버림"] += 1
            stats["이유"][why] = stats["이유"].get(why, 0) + 1
        items.append(row)
    for doc in docs[cap:]:   # 못 읽은 것도 버리지 않는다(제목만 상태)
        items.append({"source": doc["source"], "title": doc["title"], "link": doc["link"],
                      "published": doc["published"], "passed": None})
    return {"items": items, "stats": stats}


def gstate_block(result, max_items=GSTATE_MAX_ITEMS):
    """회의 전역 상태에 붙일 짧은 블록. 검사 통과 + 지표 연결된 것만, 정부 자료 먼저."""
    if not result:
        return ""
    good = [x for x in result.get("items", []) if x.get("passed") and x.get("ids")]
    if not good:
        return ""
    lines = [f"· [{x['source']}] {x['summary']} → {', '.join(x['names'])} {x['dir']}"
             for x in good[:max_items]]
    st = result.get("stats", {})
    return ("[AI 대신 읽기 — 원문 인용 검사 통과분만, "
            f"읽음 {st.get('읽음', 0)} · 통과 {st.get('통과', 0)} · 버림 {st.get('버림', 0)}]\n" + "\n".join(lines))
