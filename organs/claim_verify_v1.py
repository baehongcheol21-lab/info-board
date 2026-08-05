# coding=utf-8
"""claim_verify_v1 — 요원이 말한 '전일 대비 N%'를 **오늘 스냅샷(진실값)과 대조**한다.
rules.yaml R04의 `then`(검산)의 실제 손.

왜 sandbox.calc가 아니라 이 기관인가
--------------------------------------
설계서의 R04 then은 `{cmd: calc, expr: "{auto_extract}", compare_to: "{claimed}"}`이다.
그런데 실제 회의 텍스트 4,528건을 훑어보면 `{auto_extract}`가 성립하지 않는다 —
요원은 "WTI 유가가 전일 대비 6.9% 하락"이라고만 쓰지 **두 피연산자를 문장에 적지 않는다.**
계산기에 넣을 식이 텍스트 안에 없다. 억지로 calc를 붙이면 "6.9가 6.9인가"를 확인하는
자기동어반복이 되고, 정작 원장 #65가 요구한 "현실에 맞았나"는 하나도 검사하지 못한다.

진짜 검산은 **주장 ↔ 진실값 대조**다. 진실값은 이미 우리 손에 있다(phase_perceive가 만든
snapshot: {id: {name, value, pct, unit}}). 그래서 이 기관은 계산이 아니라 **대조**를 한다.
0콜이고 순수함수다.

무엇을 검산 대상으로 삼는가 (실측으로 좁힘)
--------------------------------------------
스트림 실측: agent_output 3,526건 중 %가 든 것 1,250건, % 주장 1,781건.
그러나 그 대부분은 검산 대상이 **아니다** — 실물을 보고 하나씩 걸렀다:

  "국내 태양광 인버터 시장의 69%"      → 점유율(변화가 아님)
  "BIS 기준 위험가중치 0%"             → 규제 상수
  "오스트리아 7월 실업률이 6.9%"        → 외부 통계(대조할 진실값 없음)
  "사이드카 발동 조건인 5%"            → 임계값
  "영업이익은 전년 동기 대비 56.3%"     → 전년 대비(우리 스냅샷은 전일 대비뿐)
  "SK하이닉스 거래량은 전일 대비 53%"   → 주가가 아니라 거래량
  "미 10년물 금리 … 0.39% 상승한 4.622%" → 단위가 %인 지표는 '수준'과 '변화'가 섞인다

남는 것: **지표를 지명 + 전일 대비 마커 + 다른 주어가 끼어들지 않은** 주장 = 1,781건 중 521건(29%).
나머지 71%에 대해 R04가 발화하던 것이 메타리뷰가 잡은 '노이즈 238건'의 정체다.

정밀도 우선 원칙
----------------
경계가 애매하면 **버린다**(검산 안 함). 잘못된 경보는 알파에게 거짓 정보를 주입해
브리핑 품질을 오히려 떨어뜨린다 — 놓치는 것보다 나쁘다. 그래서:
  · 지표와 % 사이에 다른 %가 끼면 버린다("하이닉스 9.61%, 삼성전자 5.23%"의 오귀속 방지)
  · 지표와 % 사이에 다른 주어(거래량·매수세·영업이익…)가 끼면 버린다
  · 방향어(상승/하락)가 없으면 부호를 지어내지 않고 **절대값만** 비교한다
"""
import re

# 스냅샷 id → 본문에서 쓰이는 표기들. publish.INDICATORS의 name만으론 부족해서
# 실제 회의록에 나온 표기를 실측으로 모았다(한전·하이닉스·금값 등).
ALIASES = {
    "krw_usd": ("원/달러", "달러/원", "원달러", "환율"),
    "kospi": ("코스피", "KOSPI"),
    "sox": ("반도체지수", "SOX", "필라델피아 반도체"),
    "natgas": ("천연가스", "LNG"),
    "copper": ("구리",),
    "wti": ("WTI", "국제유가", "유가"),
    "kepco": ("한국전력", "한전"),
    "samsung": ("삼성전자",),
    "hynix": ("SK하이닉스", "하이닉스"),
    "nvidia": ("엔비디아", "NVIDIA"),
    "gold": ("금 선물", "금값", "국제 금", "금 가격"),
    "us10y": ("미 10년물", "10년물", "미국 국채"),
}

# '전일 대비'류만 인정한다. 전년/전분기 대비는 대조할 진실값이 우리에게 없다.
CHANGE_MARKERS = ("전일 대비", "전일대비", "전일比", "전일 종가 대비", "전날 대비",
                  "전거래일 대비", "전 거래일 대비", "직전 거래일")
# 이 말이 지표와 % 사이에 끼면 주어가 바뀐 것이다 — 주가 등락이 아니다.
OTHER_SUBJECT = ("거래량", "매수세", "매도세", "외국인", "기관", "개인", "수급", "시가총액",
                 "매출", "영업이익", "순이익", "수출", "점유율", "비중", "생산량", "가동률",
                 "배당", "공매도", "예비율", "이용률", "실적", "주문", "수주")
DOWN_WORDS = ("하락", "급락", "폭락", "약세", "조정", "내림", "하회", "떨어", "빠지", "밀리", "낙폭")
UP_WORDS = ("상승", "급등", "폭등", "강세", "반등", "오름", "상회", "올라", "뛰")

_PCT = re.compile(r"([+-]?\d+(?:\.\d+)?)\s*%")
_LOOKBACK = 70          # 지표 이름을 찾아 거슬러 올라갈 최대 글자 수

MANIFEST = {
    "name": "claim_verify", "version": 1, "stable": True, "category": "검증",
    "desc": "요원 발언의 '전일 대비 N%' 주장을 오늘 스냅샷과 대조(0콜) — R04 검산의 손",
    "args": {"text": "str", "snap": "dict{id:{name,value,pct,unit}}?", "tol": "float?=0.15"},
    "returns": "list[{id,name,claimed,actual,diff,ok,context}]  (snap 없으면 actual/ok=None)",
    "safety": "pure", "timeout_s": 2,
}


def _find_entity(window, allowed):
    """window(지표명이 있을 앞 구간)에서 **가장 가까운**(=가장 뒤에 있는) 지표를 찾는다.
    가장 앞이 아니라 가장 뒤여야 한다 — "환율은 … 코스피가 5.98%"에서 코스피를 골라야 하고,
    "코스피 … 환율은 전일 대비 0.91%"에서는 환율을 골라야 하기 때문(실측 오귀속 사례)."""
    best = (-1, None, 0)
    for iid in allowed:
        for alias in ALIASES.get(iid, ()):
            pos = window.rfind(alias)
            if pos > best[0]:
                best = (pos, iid, pos + len(alias))
    return best if best[1] else None


def _direction(after):
    """부호 결정 — **% 바로 뒤 12글자**의 방향어만 본다. 없으면 None(=크기만 비교).

    ⚠️ 이 좁힘은 실측으로 얻었다. 처음엔 앞 문맥의 방향어도 봤는데, 549건 역검증에서
    불일치 12건 중 11건이 **내 부호 추론 오류**였다 — 요원 잘못이 아니었다:
      "구리 가격은 1주일 **연속 하락세**입니다. 전일 대비 0.74% **하락**했습니다."
    앞의 '하락세'는 주간 추세를 말한 것인데 그걸 그날 등락의 부호로 읽었다.
    검산기가 스스로 틀려서 알파에게 거짓 경보를 주면 안 하느니만 못하다 — 앞 문맥은 버린다."""
    for w in DOWN_WORDS:
        if w in after:
            return -1
    for w in UP_WORDS:
        if w in after:
            return 1
    return None


def extract(text, allowed=None):
    """검산 가능한 주장만 뽑는다. allowed: 대조 가능한 지표 id 집합(없으면 전체)."""
    allowed = list(allowed if allowed is not None else ALIASES)
    out = []
    for m in _PCT.finditer(text or ""):
        raw = m.group(1)
        window = text[max(0, m.start() - _LOOKBACK):m.start()]
        hit = _find_entity(window, allowed)
        if not hit:
            continue
        span = window[hit[2]:]                       # 지표명과 % 사이 구간
        if "%" in span:                              # 중간에 다른 주장이 끼었다 → 오귀속 위험
            continue
        if not any(c in span for c in CHANGE_MARKERS):
            continue
        if any(w in span for w in OTHER_SUBJECT):    # 주어가 바뀌었다
            continue
        after = text[m.end():m.end() + 12]
        sign = 1 if raw.startswith("+") else (-1 if raw.startswith("-") else _direction(after))
        val = abs(float(raw))
        out.append({"id": hit[1], "claimed": round(val * sign, 4) if sign else round(val, 4),
                    "signed": sign is not None,
                    "context": (window[-40:] + m.group(0) + after).replace("\n", " ").strip()})
    return out


def looks_verifiable(text):
    """조건부(conditions._r04)용 — 스냅샷 없이도 '검산할 만한 모양인가'만 본다."""
    return bool(extract(text))


def run(text, snap=None, tol=0.15):
    snap = snap or {}
    # 단위가 %인 지표(미 10년물 금리)는 '수준'과 '변화'가 같은 기호를 쓴다 — 대조에서 제외.
    allowed = [i for i, d in snap.items()
               if (d or {}).get("pct") is not None and (d or {}).get("unit") != "%"] or None
    checks = []
    for c in extract(text, allowed):
        d = snap.get(c["id"]) or {}
        actual = d.get("pct")
        row = {"id": c["id"], "name": d.get("name", c["id"]), "claimed": c["claimed"],
               "actual": actual, "context": c["context"],
               "diff": None, "ok": None, "why": None}
        if actual is not None:
            # ① 크기 검산 — 항상 한다. 소수 반올림 인용(6.48 → 6.5)은 틀렸다고 하지 않는다.
            diff = abs(c["claimed"]) - abs(actual)
            row["diff"] = round(diff, 4)
            ok_size = abs(diff) <= max(tol, abs(actual) * 0.02)
            # ② 방향 검산 — 부호가 확실할 때만. 애매하면 방향은 따지지 않는다.
            ok_dir = None if not c["signed"] else ((c["claimed"] >= 0) == (actual >= 0))
            row["ok"] = bool(ok_size) and ok_dir is not False
            if not ok_size:
                row["why"] = "크기 불일치"
            elif ok_dir is False:
                row["why"] = "방향 불일치"
        checks.append(row)
    return checks


SELFTEST = [
    # 일치 — 반올림 인용은 통과시킨다
    {"args": {"text": "삼성전자 주가는 전일 대비 6.5% 하락했습니다.",
              "snap": {"samsung": {"name": "삼성전자", "value": 1, "pct": -6.48, "unit": "원"}}},
     "check": "len(result) == 1 and result[0]['ok'] is True", "offline": True},
    # 불일치 — 이게 R04가 잡아야 할 물건
    {"args": {"text": "코스피는 전일 대비 5.72% 상승했습니다.",
              "snap": {"kospi": {"name": "코스피", "value": 1, "pct": 3.78, "unit": "pt"}}},
     "check": "result[0]['ok'] is False and result[0]['actual'] == 3.78", "offline": True},
    # 주어가 다르면 검산하지 않는다(거래량)
    {"args": {"text": "SK하이닉스 거래량은 전일 대비 53% 늘었습니다.",
              "snap": {"hynix": {"name": "SK하이닉스", "value": 1, "pct": 6.2, "unit": "원"}}},
     "check": "result == []", "offline": True},
    # 오귀속 방지 — 가장 가까운 지표에 붙인다
    {"args": {"text": "코스피 지수가 급락한 가운데 환율은 전일 대비 0.91% 하락했습니다.",
              "snap": {"kospi": {"name": "코스피", "value": 1, "pct": -5.98, "unit": "pt"},
                       "krw_usd": {"name": "원/달러 환율", "value": 1, "pct": -0.91, "unit": "원"}}},
     "check": "len(result) == 1 and result[0]['id'] == 'krw_usd' and result[0]['ok'] is True",
     "offline": True},
    # 전년 동기 대비는 대조할 진실값이 없다 → 검산 대상 아님
    {"args": {"text": "삼성전자 영업이익이 전년 동기 대비 30.2% 늘었습니다.",
              "snap": {"samsung": {"name": "삼성전자", "value": 1, "pct": -6.48, "unit": "원"}}},
     "check": "result == []", "offline": True},
]
