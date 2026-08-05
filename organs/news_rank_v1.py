# coding=utf-8
"""news_rank_v1 — 헤드라인 관련도 0콜 채점기 (분석 슬롯 배분용).

배경 (2026-08-05 감사 ★1): U2 발언 240건 중 34건(14.2%)이 스스로 "일상 기사"라고 판정했다.
**문제는 콜 낭비가 아니다** — 예산은 이제 남는다(185/300). 진짜 손해는 분석 슬롯
(MAX_ANALYZE=24)을 일상 기사가 차지해 **더 중요한 기사가 밀려나는 것**이다. 게다가 기존
선택은 '점수 상위 24개'가 아니라 **수집 순서대로 앞 24개**였다.

그래서 이 기관은 "버리는 필터"가 아니라 **"줄 세우는 랭커"**다:
  · 명백한 무관 기사(연예·스포츠·부고 등)만 음수로 눌러 뒤로 보내고,
  · 나머지는 전공/시장 관련도로 정렬해 좋은 기사가 슬롯을 먼저 갖게 한다.
제목만 보는 휴리스틱은 틀릴 수 있으므로 **애매하면 버리지 않는다** — 순서만 바꾼다.
독자 프로파일(전력전자·전기기계 전공자)이 가중치의 기준이다."""
import re

# 전공 핵심 — 이 독자에게 가장 값진 것
_CORE = ("전력", "전기", "계통", "송전", "배전", "변전", "발전", "원전", "원자력", "신재생",
         "태양광", "풍력", "ESS", "배터리", "인버터", "변압기", "케이블", "전선", "한전",
         "한국전력", "전력망", "에너지", "SMP", "수급", "예비율", "출력제어", "그리드",
         "데이터센터", "전력기기", "충전", "수소", "탄소중립", "RE100")
# 시장·산업 — 값의 근거가 되는 것
_MARKET = ("반도체", "HBM", "코스피", "증시", "환율", "금리", "유가", "실적", "어닝",
           "수주", "증설", "공장", "투자", "계약", "관세", "수출", "삼성", "SK하이닉스",
           "엔비디아", "구리", "원자재", "인플레", "연준", "FOMC")
# 정책·제도
_POLICY = ("정책", "규제", "법안", "제도", "기본계획", "입찰", "보조금", "세액공제", "요금")
# 명백히 무관 — 이것만 음수로 눌러 뒤로 보낸다(하드 드롭 아님)
_OFFTOPIC = ("연예", "아이돌", "배우", "가수", "드라마", "예능", "스포츠", "야구", "축구",
             "골프", "부고", "인사이동", "동정", "화보", "맛집", "여행", "레시피", "운세",
             "복권", "날씨", "결혼", "이혼", "열애")

MANIFEST = {
    "name": "news_rank", "version": 1, "stable": True, "category": "텍스트",
    "desc": "헤드라인을 독자 관련도로 0콜 채점·정렬 (전공>시장>정책, 무관 기사는 후순위)",
    "args": {"items": "list[{title,...}]", "top_n": "int?=None"},
    "returns": "list[{...원본, score:int, hits:list[str]}]",
    "safety": "pure", "timeout_s": 2,
}


def score_title(title):
    """제목 하나의 관련도. 반환 (점수, 근거 키워드).

    ⚠️ 무관 키워드는 **관련 신호가 하나도 없을 때만** 감점한다. 그냥 빼면
    "부킹홀딩스, 여행 수요 호조에 주가 급등" 같은 진짜 시장 기사가 '여행' 때문에 탈락한다
    (2026-08-05 과거 600건 대조에서 실제로 발생). 무관 판정은 '다른 관련성이 전혀 없을 때'만
    유효한 판단이다."""
    t = title or ""
    hits, s = [], 0
    for w in _CORE:
        if w in t:
            s += 3; hits.append(w)
    for w in _MARKET:
        if w in t:
            s += 2; hits.append(w)
    for w in _POLICY:
        if w in t:
            s += 1; hits.append(w)
    off = [w for w in _OFFTOPIC if w in t]
    if off and s == 0:                     # 관련 신호가 전혀 없을 때만 무관으로 눌러 내린다
        s -= 5; hits.extend(f"-{w}" for w in off)
    # 숫자(%·원·MW 등)가 있으면 사실 기사일 확률이 높다
    if re.search(r"\d+\s*(%|퍼센트|원|달러|MW|GW|조|억)", t):
        s += 1; hits.append("수치")
    return s, hits


def run(items, top_n=None):
    ranked = []
    for it in items or []:
        s, hits = score_title(it.get("title", ""))
        row = dict(it)
        row["score"], row["hits"] = s, hits
        ranked.append(row)
    ranked.sort(key=lambda x: -x["score"])
    return ranked[:top_n] if top_n else ranked


SELFTEST = [
    {"args": {"items": [{"title": "한전, 전력망 투자 3조 확대"},
                        {"title": "배우 A씨 열애설 인정"},
                        {"title": "코스피 2% 상승 마감"}]},
     "check": "result[0]['title'].startswith('한전') and result[-1]['hits'][0].startswith('-')",
     "offline": True},
]
