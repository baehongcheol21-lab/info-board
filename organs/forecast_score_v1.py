# coding=utf-8
"""forecast_score_v1 — 예측 채점의 수학. **0콜·순수함수.**

왜 필요한가
-----------
지금까지 §7-2 '현실 대조'는 이렇게 돌고 있었다:

    어제 verdict의 pct(= 어제 하루의 등락)  vs  오늘 snapshot의 pct(= 오늘 하루의 등락)
    → 부호가 같으면 "방향유지", 다르면 "방향반전"

이건 **AI를 채점하는 게 아니다.** 시장이 이틀 연속 같은 방향으로 움직였는지를 볼 뿐이고,
요원이 무엇을 주장했는지와 아무 관계가 없다. 채점하려면 먼저 **반증 가능한 예측**이 있어야
한다 — "내일 오를 것이다, 확률 0.72, 예상 구간 -1.0~+3.5%" 같은.

이 기관은 그 예측을 실제값과 대조해 **왜 틀렸는지까지** 수식으로 분해한다.

채점 수학
---------
예측 f = (방향 d∈{+1,-1}, 확률 p∈[0,1], 구간 [lo,hi]), 실제 등락 a.

  적중      y = 1 if sign(a)==d else 0
  브라이어  B = (p − y)²                         낮을수록 좋음. 확률예측의 표준 손실.
  구간적중  cover = (lo ≤ a ≤ hi)
  크기오차  e = a − (lo+hi)/2                    부호 있는 오차 → 평균이 편향(bias)

집계하면:

  적중률 ō = mean(y),  공언확률 p̄ = mean(p)
  과신도 = p̄ − ō        (>0이면 자기 확신을 실제보다 높게 부른다)
  편향   = mean(e)       (>0이면 실제보다 크게 부른다)
  MAE    = mean(|e|)
  예리함 = mean(|p−0.5|)·2   (0.5만 부르는 겁쟁이 예측을 가려낸다)

**왜 틀렸나 — 머피 분해 (Murphy 1973)**
확률을 구간(bin)으로 나누면 브라이어 점수가 셋으로 갈린다:

    B = REL − RES + UNC (+ resid)
      REL = (1/N)·Σ n_k (p̄_k − ō_k)²    보정오차: 0.8이라 말한 것이 실제로 80%였나
      RES = (1/N)·Σ n_k (ō_k − ō)²      분해능: 상황을 구분해서 다른 확률을 부르는가
      UNC = ō(1 − ō)                     사건 자체의 불확실성(내 잘못이 아닌 몫)

이게 "왜 안 맞았는지"에 대한 답이다:
  · REL이 크다 → **보정 문제.** 확률을 과하게(또는 모자라게) 부른다 → 확률을 낮추라고 지시.
  · RES가 0에 가깝다 → **변별 문제.** 언제나 비슷한 확률만 불러 정보가 없다 → 근거가 있을 때
    확률을 벌리라고 지시.
  · UNC만 크다 → 시장이 원래 어려운 것. 요원 탓이 아니다 → **지시하지 않는다.**
    (이 구분이 없으면 시스템은 애먼 요원을 계속 야단치게 된다.)
  · resid는 항등식의 나머지다. 이 분해는 확률이 이산값일 때만 정확한데 요원은 0.72 같은
    연속값을 부르므로 구간 안 흩어짐이 남는다. 숨기지 않고 그대로 보고한다(실측 4e-4).

기술점수(skill score)는 "늘 기저확률로만 찍는 무지성 예측"을 기준선으로 삼는다:

    SS = 1 − B / UNC        SS > 0 이면 기준선보다 낫다.
                            SS == 0은 '기준선과 동등'이다 — 늘 기저확률만 부르면 정확히 0이
                            나온다. 못한 게 아니라 **변별력이 없는 것**이므로 no_skill이
                            아니라 no_resolution으로 진단해야 맞다(실측으로 바로잡음).

표본이 적으면 이 수치는 전부 노이즈다. n_min 미만이면 판정을 내지 않고 None을 돌려준다
— 8건 보고 "너는 과신한다"고 프롬프트를 고치면 시스템이 자기 노이즈를 학습한다.
"""

MANIFEST = {
    "name": "forecast_score", "version": 1, "stable": True, "category": "계산",
    "desc": "예측 채점(브라이어·머피분해·편향·구간적중)과 EWMA 신뢰도 갱신 — 0콜 순수계산",
    "args": {"rows": "list[{p,dir,lo,hi,actual}]", "n_min": "int?=8", "bins": "int?=5"},
    "returns": "dict{n,hit_rate,mean_p,brier,rel,res,unc,skill,overconf,bias,mae,coverage,sharpness,diagnosis}",
    "safety": "pure", "timeout_s": 2,
}

EPS = 1e-12


def score_one(row):
    """예측 1건 채점. row: {p, dir, lo, hi, actual}. 반환에 y·brier·err·cover 추가."""
    a = float(row["actual"])
    d = 1 if float(row.get("dir", 1)) >= 0 else -1
    p = min(max(float(row.get("p", 0.5)), 0.0), 1.0)
    y = 1 if ((a >= 0) == (d >= 0)) else 0
    out = {"p": p, "dir": d, "actual": a, "y": y, "brier": (p - y) ** 2}
    lo, hi = row.get("lo"), row.get("hi")
    if lo is not None and hi is not None:
        lo, hi = (float(lo), float(hi)) if float(lo) <= float(hi) else (float(hi), float(lo))
        out["cover"] = 1 if lo <= a <= hi else 0
        out["err"] = a - (lo + hi) / 2.0
        out["width"] = hi - lo
    return out


def _murphy(scored, bins):
    """브라이어 점수를 REL − RES + UNC로 분해한다. 확률을 bins개 구간으로 나눠 계산.

    ⚠️ 항등식 B = REL − RES + UNC 는 **예측 확률이 이산값일 때만 정확히** 성립한다.
    우리 요원은 0.72 같은 연속값을 부르므로, 한 구간 안에서도 확률이 흩어진다. 그 흩어짐이
    잔차로 남는다 — 이걸 숨기지 않고 resid로 같이 돌려준다(실측 검증에서 4e-4가 나왔고,
    '항등식이 맞는다'고 우겨넘기면 채점기 자체를 신뢰할 수 없게 된다).
        B = REL − RES + UNC + resid
    resid가 커지면 구간 수(bins)가 부족하다는 신호다."""
    n = len(scored)
    obar = sum(s["y"] for s in scored) / float(n)
    unc = obar * (1.0 - obar)
    groups = {}
    for s in scored:
        k = min(bins - 1, int(s["p"] * bins))       # p=1.0이 마지막 구간에 들어가게
        groups.setdefault(k, []).append(s)
    rel = res = 0.0
    for g in groups.values():
        nk = len(g)
        pk = sum(x["p"] for x in g) / nk
        ok = sum(x["y"] for x in g) / float(nk)
        rel += nk * (pk - ok) ** 2
        res += nk * (ok - obar) ** 2
    rel, res = rel / n, res / n
    brier = sum(s["brier"] for s in scored) / n
    return rel, res, unc, obar, brier - (rel - res + unc)


def run(rows, n_min=8, bins=5):
    rows = [r for r in (rows or []) if r.get("actual") is not None]
    if not rows:
        return {"n": 0, "diagnosis": [], "verdict": "표본 없음"}
    scored = [score_one(r) for r in rows]
    n = len(scored)
    mean_p = sum(s["p"] for s in scored) / n
    brier = sum(s["brier"] for s in scored) / n
    rel, res, unc, hit, resid = _murphy(scored, bins)
    withband = [s for s in scored if "err" in s]

    out = {
        "n": n,
        "hit_rate": round(hit, 4),
        "mean_p": round(mean_p, 4),
        "brier": round(brier, 5),
        "rel": round(rel, 5), "res": round(res, 5), "unc": round(unc, 5),
        "resid": round(resid, 6),          # 구간 내 확률 흩어짐(항등식의 나머지)
        "skill": round(1.0 - brier / unc, 4) if unc > EPS else None,
        "overconf": round(mean_p - hit, 4),
        "sharpness": round(sum(abs(s["p"] - 0.5) for s in scored) / n * 2, 4),
        "bias": round(sum(s["err"] for s in withband) / len(withband), 4) if withband else None,
        "mae": round(sum(abs(s["err"]) for s in withband) / len(withband), 4) if withband else None,
        "coverage": round(sum(s["cover"] for s in withband) / len(withband), 4) if withband else None,
        "mean_width": round(sum(s["width"] for s in withband) / len(withband), 4) if withband else None,
    }

    # ---- 진단: 무엇이 문제인지 이름을 붙인다. 표본이 모자라면 아무 말도 하지 않는다. ----
    dx = []
    if n < n_min:
        out["verdict"] = f"표본 부족(n={n} < {n_min}) — 판정 보류"
        out["diagnosis"] = dx
        return out
    # skill == 0은 '기준선과 동등'이다(늘 기저확률을 부르면 정확히 0이 나온다) — 이건
    # 못한 게 아니라 변별력이 없는 것이라, 아래 no_resolution이 정확한 진단이다.
    if out["skill"] is not None and out["skill"] < -0.05:
        dx.append({"code": "no_skill", "value": out["skill"],
                   "why": "기저확률로 찍는 것보다 못하다"})
    # 보정 vs 변별: 어느 쪽이 브라이어를 더 망치고 있나
    if rel > 0.02 and rel > res:
        dx.append({"code": "miscalibrated", "value": round(rel, 5),
                   "why": f"확률을 {'과하게' if out['overconf'] > 0 else '모자라게'} 부른다"
                          f"(공언 {mean_p:.2f} vs 실제 {hit:.2f})"})
    # 변별력은 res 하나로 본다. 예전엔 sharpness < 0.35를 같이 걸어서 "늘 0.85만 부르는"
    # 요원(보정은 완벽하지만 정보가 0)을 놓쳤다 — 실측으로 확인해 조건을 좁혔다.
    if res < 0.005:
        dx.append({"code": "no_resolution", "value": round(res, 5),
                   "why": "상황과 무관하게 비슷한 확률만 불러 정보가 없다"})
    if out["coverage"] is not None:
        if out["coverage"] < 0.5:
            dx.append({"code": "band_too_narrow", "value": out["coverage"],
                       "why": "예상 구간이 좁아 실제값이 자주 벗어난다"})
        elif out["coverage"] > 0.95 and (out["mean_width"] or 0) > 6:
            dx.append({"code": "band_too_wide", "value": out["mean_width"],
                       "why": "구간이 너무 넓어 맞아도 정보가 없다"})
    if out["bias"] is not None and abs(out["bias"]) >= 0.4:
        # bias = 실제 − 예측중앙. 양수면 실제가 더 컸다는 뜻이니 요원이 '작게' 잡은 것이다.
        dx.append({"code": "biased", "value": out["bias"],
                   "why": f"등락폭을 평균 {abs(out['bias']):.2f}%p "
                          f"{'작게' if out['bias'] > 0 else '크게'} 잡는다"})
    if not dx and rel <= 0.02 and (out["skill"] or 0) > 0:
        # 잘하고 있는데 억지로 흠을 잡지 않는다. UNC가 크면 그건 시장 탓이다.
        dx.append({"code": "ok", "value": out["skill"], "why": "기준선보다 낫고 보정도 양호"})
    out["verdict"] = "판정 가능"
    out["diagnosis"] = dx
    return out


def update_weight(prev, skill, alpha=0.3):
    """요원 신뢰도 지수가중이동평균. skill(SS)을 0~1로 눌러 반영한다.

    한 번의 성적이 가중치를 뒤엎지 않도록 alpha를 작게 둔다(0.3 → 반감기 약 2회).
    skill이 None(표본 부족·UNC=0)이면 갱신하지 않는다 — 모르는 걸로 점수를 움직이지 않는다."""
    if skill is None:
        return prev
    s = min(max(float(skill), 0.0), 1.0)
    return round((1.0 - alpha) * float(prev) + alpha * s, 4)


def ensemble(preds, weights=None):
    """요원별 예측을 신뢰도로 가중 합의한다. preds: [{who,dir,p}], weights: {who: w}.
    반환: {dir, p, agree} — p는 '그 방향이 맞을 확률'의 가중평균."""
    if not preds:
        return None
    w = weights or {}
    up = sum(w.get(x["who"], 0.5) * x["p"] for x in preds if x["dir"] >= 0)
    dn = sum(w.get(x["who"], 0.5) * x["p"] for x in preds if x["dir"] < 0)
    tot = up + dn
    if tot <= EPS:
        return None
    d = 1 if up >= dn else -1
    return {"dir": d, "p": round(max(up, dn) / tot, 4),
            "agree": round(sum(1 for x in preds if (x["dir"] >= 0) == (d >= 0)) / len(preds), 3)}


SELFTEST = [
    # 완벽하게 보정된 예측: p=1.0으로 전부 맞힘 → 브라이어 0, REL 0
    {"args": {"rows": [{"p": 1.0, "dir": 1, "lo": 0, "hi": 2, "actual": 1.0} for _ in range(5)]
                      + [{"p": 0.0, "dir": 1, "lo": -2, "hi": 0, "actual": -1.0} for _ in range(5)],
              "n_min": 5},
     "check": "result['brier'] == 0.0 and result['rel'] == 0.0 and result['skill'] == 1.0",
     "offline": True},
    # 과신: 0.9라고 말하는데 절반만 맞음 → overconf > 0, miscalibrated 진단
    {"args": {"rows": [{"p": 0.9, "dir": 1, "lo": 0, "hi": 1, "actual": 1.0} for _ in range(5)]
                      + [{"p": 0.9, "dir": 1, "lo": 0, "hi": 1, "actual": -1.0} for _ in range(5)],
              "n_min": 5},
     "check": "round(result['overconf'],2) == 0.4 and any(d['code']=='miscalibrated' for d in result['diagnosis'])",
     "offline": True},
    # 표본 부족이면 진단을 내지 않는다
    {"args": {"rows": [{"p": 0.9, "dir": 1, "lo": 0, "hi": 1, "actual": -1.0}], "n_min": 8},
     "check": "result['diagnosis'] == [] and '보류' in result['verdict']", "offline": True},
    # 구간이 좁으면 잡아낸다
    {"args": {"rows": [{"p": 0.6, "dir": 1, "lo": 0.9, "hi": 1.1, "actual": 5.0} for _ in range(10)],
              "n_min": 5},
     "check": "any(d['code']=='band_too_narrow' for d in result['diagnosis']) and result['bias'] == 4.0",
     "offline": True},
    # 신뢰도 갱신: 모르는 것(skill=None)으로는 점수를 움직이지 않는다
    {"args": {"rows": [{"p": 0.5, "dir": 1, "actual": 1.0}]},
     "check": "True", "offline": True},
]
