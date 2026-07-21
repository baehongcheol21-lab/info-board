# coding=utf-8
"""lag_corr_v1 — 시차상관 (원장 #6 숙원: "유가 오르고 N일 뒤 SMP 오름" 같은 질문에 답함).
lag>0: xs가 ys를 lag만큼 선행(x[t] vs y[t+lag]). lag<0: ys가 xs를 선행."""
import statistics

MANIFEST = {
    "name": "lag_corr", "version": 1, "stable": True, "category": "계산",
    "desc": "두 시계열의 시차상관 — -max_lag~+max_lag 중 |r|이 가장 큰 지연을 찾는다",
    "args": {"xs": "list[float]", "ys": "list[float]", "max_lag": "int=10"},
    "returns": "{best_lag:int|None, best_r:float|None, by_lag:{lag:r}}",
    "safety": "pure", "timeout_s": 3,
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


def run(xs, ys, max_lag=10):
    n = min(len(xs), len(ys))
    by_lag = {}
    for lag in range(-max_lag, max_lag + 1):
        if lag >= 0:
            a, b = xs[:n - lag] if lag else xs[:n], ys[lag:n]
        else:
            a, b = xs[-lag:n], ys[:n + lag]
        m = min(len(a), len(b))
        if m < 8:
            continue
        r = _pearson(a[:m], b[:m])
        if r is not None:
            by_lag[lag] = r
    if not by_lag:
        return {"best_lag": None, "best_r": None, "by_lag": {}}
    best_lag = max(by_lag, key=lambda k: abs(by_lag[k]))
    return {"best_lag": best_lag, "best_r": by_lag[best_lag], "by_lag": by_lag}


SELFTEST = [
    # ys가 xs를 2일 후행(ys[t] = xs[t-2]) → xs가 2일 선행하므로 best_lag는 +2 근방이어야 함
    {"args": {"xs": list(range(1, 21)), "ys": [0, 0] + list(range(1, 19)), "max_lag": 5},
     "check": "result['best_lag'] is not None and abs(result['best_r']) > 0.9", "offline": True},
]
