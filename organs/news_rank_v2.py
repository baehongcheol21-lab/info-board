# coding=utf-8
"""news_rank_v2 — v1(주제 관련도) + **기사 장르 감점** 추가.

v1을 실전 투입한 첫 회의에서 일상기사 비율이 오히려 늘었다(14.2% → 16.7%). 원인을 실물로
확인하니 v1의 구조적 맹점이었다 — **일상 기사일수록 도메인 키워드가 많아** 상위로 올라갔다:

  +4 "(KECA 네트워크) 대전시회, 발전 정책 자문 **간담회** 개최"   ← 발전·정책 가점
  +3 "황호준 전 전기안전공사 부사장, … 신임 원장 **취임**"        ← 전기 가점
  +3 "여름철 전기화재 10건 중 3건은 6~8월… **주의**"              ← 전기 가점

문제는 '무엇에 관한 기사인가'(주제)가 아니라 **'어떤 종류의 기사인가'(장르)**였다.
간담회·인사·행사·안전계도는 전력 얘기여도 판단 재료가 못 된다. 그래서 v2는 장르 신호에
주제 가점과 **무관하게** 감점한다(_OFFTOPIC과 달리 조건부가 아니다 — 장르는 주제로 상쇄되지
않기 때문). 다만 하드 드롭은 여전히 하지 않는다 — 순서만 내린다.

v1은 불변 원칙대로 보존. v2 stable=False로 내리면 즉시 롤백된다."""
import re

_CORE = ("전력", "전기", "계통", "송전", "배전", "변전", "발전", "원전", "원자력", "신재생",
         "태양광", "풍력", "ESS", "배터리", "인버터", "변압기", "케이블", "전선", "한전",
         "한국전력", "전력망", "에너지", "SMP", "수급", "예비율", "출력제어", "그리드",
         "데이터센터", "전력기기", "충전", "수소", "탄소중립", "RE100")
_MARKET = ("반도체", "HBM", "코스피", "증시", "환율", "금리", "유가", "실적", "어닝",
           "수주", "증설", "공장", "투자", "계약", "관세", "수출", "삼성", "SK하이닉스",
           "엔비디아", "구리", "원자재", "인플레", "연준", "FOMC")
_POLICY = ("정책", "규제", "법안", "제도", "기본계획", "입찰", "보조금", "세액공제", "요금")
_OFFTOPIC = ("연예", "아이돌", "배우", "가수", "드라마", "예능", "스포츠", "야구", "축구",
             "골프", "부고", "인사이동", "동정", "화보", "맛집", "여행", "레시피", "운세",
             "복권", "날씨", "결혼", "이혼", "열애")

# ★ v2 신설 — 기사 '장르' 신호. 주제가 아무리 맞아도 판단 재료가 못 되는 종류.
_ROUTINE = (
    # 인사·조직
    "취임", "위촉", "임명", "선임", "연임", "퇴임", "인사", "승진", "출범식", "창립",
    # 행사·의례
    "간담회", "세미나", "워크숍", "총회", "포럼", "설명회", "기념식", "시상", "수상",
    "공모전", "캠페인", "봉사", "협약식", "체결식", "개최", "참석", "방문", "견학",
    # 계도·안내
    "주의보", "예방", "안전점검", "당부", "홍보", "이벤트", "모집", "안내",
)

MANIFEST = {
    "name": "news_rank", "version": 2, "stable": True, "category": "텍스트",
    "desc": "헤드라인 관련도 채점 — 주제(전공>시장>정책) + 장르 감점(간담회·인사·행사 등)",
    "args": {"items": "list[{title,...}]", "top_n": "int?=None"},
    "returns": "list[{...원본, score:int, hits:list[str]}]",
    "safety": "pure", "timeout_s": 2,
}


def score_title(title):
    """제목 하나의 관련도. 반환 (점수, 근거 키워드)."""
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
    # 장르 감점 — 주제 가점과 무관하게 적용(장르는 주제로 상쇄되지 않는다)
    for w in _ROUTINE:
        if w in t:
            s -= 4; hits.append(f"장르-{w}")
    # 무관 주제는 다른 관련 신호가 전혀 없을 때만(진짜 시장기사 오탈락 방지, v1에서 확인)
    off = [w for w in _OFFTOPIC if w in t]
    if off and s <= 0:
        s -= 5; hits.extend(f"-{w}" for w in off)
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
     "check": "result[0]['title'].startswith('한전')", "offline": True},
    # v2의 존재 이유 — 도메인 키워드가 있어도 장르가 일상이면 뒤로 (회귀 방지)
    {"args": {"items": [{"title": "LS전선, 해저케이블 5000억 수주"},
                        {"title": "전기산업연구원 신임 원장 취임"},
                        {"title": "발전 정책 자문 간담회 개최"}]},
     "check": "result[0]['title'].startswith('LS전선') and '취임' in result[1]['title']+result[2]['title']",
     "offline": True},
]
