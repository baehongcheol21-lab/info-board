# coding=utf-8
"""dedup_titles_v1 — 제목 앞 20자 기준 중복 제거. discuss.py의 뉴스 수집 dedup 로직 그대로."""

MANIFEST = {
    "name": "dedup_titles", "version": 1, "stable": True, "category": "텍스트",
    "desc": "제목(title) 필드 앞 20자 기준으로 중복 항목 제거, 순서 보존",
    "args": {"items": "list[{title:str, ...}]"},
    "returns": "list[dict]",
    "safety": "pure", "timeout_s": 2,
}


def run(items):
    seen, out = set(), []
    for h in items:
        title = h.get("title", "")
        key = title[:20]
        if title and key not in seen:
            seen.add(key)
            out.append(h)
    return out


SELFTEST = [
    {"args": {"items": [{"title": "삼성전자 실적 발표"}, {"title": "삼성전자 실적 발표"},
                        {"title": "SK하이닉스 신고가"}]},
     "check": "len(result) == 2", "offline": True},
]
