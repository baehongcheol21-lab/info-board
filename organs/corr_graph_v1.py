# coding=utf-8
"""corr_graph_v1 — 지표쌍 상관 네트워크(노드/엣지). stats.py 로직 자체 포함(의도적 중복,
내부적으로 pearson 계산을 재사용하지 않고 동일 수식을 인라인 — organs는 서로 import하지 않는다:
불변 원칙상 한 기관이 다른 기관 내부 구현에 의존하면 버전 교체 시 연쇄 파손 위험이 생기기 때문)."""
import statistics

MANIFEST = {
    "name": "corr_graph", "version": 1, "stable": True, "category": "계산",
    "desc": "지표별 시계열들의 상관관계 네트워크(노드/엣지, |r|>=min_abs만)",
    "args": {"series_by_id": "{id: {date: value}}", "min_abs": "float=0.4"},
    "returns": "{nodes:list[str], edges:list[{a,b,r}]}",
    "safety": "pure", "timeout_s": 5,
}


def _pearson(xs, ys):
    pairs = [(x, y) for x, y in zip(xs, ys) if x is not None and y is not None]
    n = len(pairs)
    if n < 8:
        return None
    ax = statistics.fmean(p[0] for p in pairs)
    ay = statistics.fmean(p[1] for p in pairs)
    sx = sum((p[0] - ax) ** 2 for p in pairs) ** 0.5
    sy = sum((p[1] - ay) ** 2 for p in pairs) ** 0.5
    if sx == 0 or sy == 0:
        return None
    cov = sum((p[0] - ax) * (p[1] - ay) for p in pairs)
    return round(cov / (sx * sy), 3)


def run(series_by_id, min_abs=0.4):
    ids = [i for i, s in series_by_id.items() if len(s) >= 8]
    edges = []
    for a_i in range(len(ids)):
        for b_i in range(a_i + 1, len(ids)):
            a, b = ids[a_i], ids[b_i]
            common = sorted(set(series_by_id[a]) & set(series_by_id[b]))
            if len(common) < 8:
                continue
            r = _pearson([series_by_id[a][d] for d in common], [series_by_id[b][d] for d in common])
            if r is not None and abs(r) >= min_abs:
                edges.append({"a": a, "b": b, "r": r})
    connected = {e["a"] for e in edges} | {e["b"] for e in edges}
    return {"nodes": sorted(connected), "edges": edges}


SELFTEST = [
    {"args": {"series_by_id": {
        "a": {str(i): i for i in range(10)}, "b": {str(i): i * 2 for i in range(10)}}},
     "check": "len(result['edges']) == 1 and result['edges'][0]['r'] == 1.0", "offline": True},
]
