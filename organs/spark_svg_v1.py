# coding=utf-8
"""spark_svg_v1 — 미니 스파크라인 SVG 생성.
※ publish.py v3(픽셀 트레이딩 플로어 리뉴얼, 2026-07-20)에서 이 함수는 삭제됐다(카드형 UI가
없어졌으므로). 이 기관은 옛 로직을 자체 보존한 것 — P1.5(시장 탭)에서 다시 필요해질 수 있어
재사용 가능한 형태로 남겨둔다. 위임할 원본이 더 이상 없으므로 순수 재구현이다."""

MANIFEST = {
    "name": "spark_svg", "version": 1, "stable": True, "category": "화면",
    "desc": "종가열로 미니 스파크라인 SVG 문자열 생성",
    "args": {"closes": "list[float]", "width": "int=200", "height": "int=36"},
    "returns": "str (SVG)",
    "safety": "pure", "timeout_s": 1,
}


def run(closes, width=200, height=36):
    vals = [c for c in closes if c is not None]
    if len(vals) < 2:
        return ""
    lo, hi = min(vals), max(vals)
    rng = (hi - lo) or 1
    pts = " ".join(f"{i / (len(vals) - 1) * width:.1f},{height - 3 - (c - lo) / rng * (height - 6):.1f}"
                   for i, c in enumerate(vals))
    return (f'<svg viewBox="0 0 {width} {height}" preserveAspectRatio="none" class="sp">'
            f'<polyline points="{pts}" fill="none" stroke="#00ffcc" stroke-width="1.5"/></svg>')


SELFTEST = [
    {"args": {"closes": [1, 2, 3, 2, 1]}, "check": "result.startswith('<svg')", "offline": True},
    {"args": {"closes": [1]}, "check": "result == ''", "offline": True},
]
