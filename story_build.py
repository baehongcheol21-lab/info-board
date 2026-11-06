# -*- coding: utf-8 -*-
"""버전2 스토리 — 만들기와 내보내기 (story_facts → story_ai → story_render 연결).

- 회의 뒤 (클라우드 discuss.yml):  python story_build.py --ai
    사실 계산 → AI 2~3콜(번호표·자막, 검사 통과분만) → story.json 저장 → docs/story.html
- 매시간 페이지 갱신 (publish.py가 부름):  write_page("docs/story.html")
    story.json이 지금 데이터(latest.json 시각)와 같으면 그대로, 아니면 AI 없이 규칙 배치로 새로 만든다(콜 0).
- PC 대시보드: page_html(home="/", tabs=PC_TABS)
AI는 화면을 열 때 0콜. 숫자는 전부 story_facts 코드가 계산한다.
"""
import argparse, datetime, json, sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))
import story_facts as SF    # noqa: E402
import story_render as SR   # noqa: E402

STORY_JSON = HERE / "story.json"
PHONE_TABS = {"power": "ind:elec", "brief": "deck", "lab": "lab"}
PC_TABS = {"power": "elec", "brief": "deck", "lab": "lab"}


def _latest_generated():
    try:
        return json.loads((SF.API / "latest.json").read_text(encoding="utf-8"))["generated"]
    except Exception:
        return None


_CACHE = {}


def load_or_build(net=True):
    """저장된 AI 스토리가 지금 데이터와 같은 시각 것이면 그대로, 아니면 규칙 배치로 새로.
    같은 데이터 시각이면 한 번 만든 것을 다시 쓴다(PC가 /story를 열 때마다 야후를 다시 부르지 않게)."""
    gen = _latest_generated()
    ai_mtime = STORY_JSON.stat().st_mtime if STORY_JSON.exists() else 0
    key = (gen, ai_mtime)
    if key in _CACHE:
        return _CACHE[key]
    _CACHE.clear()
    _CACHE[key] = _load_or_build(gen, net)
    return _CACHE[key]


def _load_or_build(gen, net):
    if STORY_JSON.exists():
        try:
            s = json.loads(STORY_JSON.read_text(encoding="utf-8"))
            if s.get("data_at") == gen:
                return s
        except Exception:
            pass
    return SF.build(net=net)


def build_with_ai(net=True):
    from gemini_keys import RotatingBudget
    import story_ai as A
    story = SF.build(net=net)
    b = RotatingBudget(per_run_cap=3)
    out = A.run(story, lambda role, prompt: b.ask(role, prompt, topic="story"))
    out["built_at"] = datetime.datetime.now(SF.KST).isoformat(timespec="minutes")
    STORY_JSON.write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
    return out


def page_html(story=None, home="index.html", tabs=None, net=True):
    return SR.render(story or load_or_build(net), preview=False, home=home, tabs=tabs or PHONE_TABS)


def write_page(path="docs/story.html", net=True):
    s = load_or_build(net)
    Path(path).write_text(page_html(s), encoding="utf-8")
    return s


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--ai", action="store_true", help="AI 2~3콜로 번호표·자막을 붙이고 story.json 저장")
    ap.add_argument("--out", default="docs/story.html")
    ap.add_argument("--no-net", action="store_true")
    a = ap.parse_args()
    s = build_with_ai(net=not a.no_net) if a.ai else load_or_build(net=not a.no_net)
    Path(a.out).write_text(page_html(s), encoding="utf-8")
    lg = s.get("ai") or {}
    msg = (f"[스토리] {a.out}  날짜 {s['date']}  옷 {s['theme']}  컷 {s['plan']['cuts']}장  배치={s.get('planned_by')}  "
           f"AI 콜 {lg.get('calls', 0)}  자막 AI {len(s.get('captions') or {})}컷\n")
    sys.stdout.buffer.write(msg.encode("utf-8"))
