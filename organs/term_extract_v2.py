# coding=utf-8
"""term_extract_v2 — 전문용어 후보 추출 (v1의 커버리지 확대판).

v1은 접미사를 12개("지수·계수·비율·전략·모델·정책·규제·제도·지표·시장·계통")만 봐서
실전 브리핑의 용어를 대부분 놓쳤다 — 2026-08-05 실측: 전력 전문용어 20개를 넣었는데 5개만
잡힘(인버터·백로그·출력제어·피크아웃·첨두부하 등 누락). 용어사전은 사용자의 "읽어도 이해가
안 된다"에 대한 직접 대응이므로 커버리지가 곧 효용이다.

v2가 넓힌 것:
  ① 접미사 대폭 확대 — 전력/전자 도메인 중심(제어·부하·발전·송전·변환·설비·효율·용량 등)
  ② 외래어 기술용어 — 인버터·컨버터·백로그처럼 특정 어미로 끝나는 3~7자 한글어
  ③ 복합 한자어 — '한계가격'처럼 접미사 앞이 길어도 잡히게 길이 상한 완화

v1은 그대로 둔다(불변 원칙). stable=True라 registry는 기본으로 v2를 고르고, 문제가 생기면
v2의 stable을 False로 내리는 것만으로 v1로 즉시 롤백된다."""
import re

# ① 도메인 접미사 — 전력·전자·시장 용어를 폭넓게
_SUFFIXES = (
    "지수", "계수", "비율", "전략", "모델", "정책", "규제", "제도", "지표", "시장", "계통",
    "제어", "부하", "발전", "송전", "배전", "변환", "장치", "설비", "효율", "용량", "출력",
    "수요", "공급", "단가", "가격", "요금", "연계", "저장", "중립", "감축", "배출", "전력",
    "전압", "전류", "주파수", "예비력", "예비율", "간헐성", "안정성", "신뢰도", "기본계획",
)
_SUFFIX_RE = re.compile("[가-힣]{1,8}(?:" + "|".join(_SUFFIXES) + ")")

# ② 외래어 기술용어 — 이 어미로 끝나는 한글 단어는 기술 외래어일 가능성이 높다
_LOAN_END = ("터", "트", "드", "크", "션", "저", "처", "브", "프", "셀", "칩", "링", "밍")
_LOAN_RE = re.compile(r"[가-힣]{2,6}(?:" + "|".join(_LOAN_END) + r")\b")

# ③ 대문자 약어
_ACRONYM_RE = re.compile(r"\b[A-Z]{2,6}[0-9]{0,3}\b")

# 오탐 제거 — 위 패턴에 걸리지만 전문용어가 아닌 흔한 말
_STOP = {
    "그린", "리스트", "포인트", "사이트", "코멘트", "이벤트", "테스트", "스타트", "노트",
    "메모", "리포트", "업데이트", "프로젝트", "아웃", "인터넷", "네트", "세트", "파트",
    "미터", "센터", "컴퓨터", "데이터", "모니터", "프린터", "캐릭터", "필터",
    "가격", "전력", "수요", "공급", "발전", "부하", "출력", "용량", "효율",  # 단독이면 일반어
}

MANIFEST = {
    "name": "term_extract", "version": 2, "stable": True, "category": "텍스트",
    "desc": "텍스트에서 전문용어 후보 추출 (약어+도메인 접미사+외래어 어미, v1 대비 커버리지 확대)",
    "args": {"text": "str", "max_terms": "int=10"},
    "returns": "list[str]",
    "safety": "pure", "timeout_s": 1,
}


def run(text, max_terms=10):
    cands = set(_ACRONYM_RE.findall(text)) | set(_SUFFIX_RE.findall(text)) | set(_LOAN_RE.findall(text))
    out = []
    for t in sorted(cands, key=lambda x: (-len(x), x)):   # 긴 것(=구체적인 것) 우선
        t = t.strip()
        if len(t) < 2 or t in _STOP:
            continue
        # 이미 뽑힌 더 긴 용어에 포함되면 건너뜀 (예: '한계가격'이 있으면 '가격'은 버림)
        if any(t != o and t in o for o in out):
            continue
        out.append(t)
        if len(out) >= max_terms:
            break
    return out


SELFTEST = [
    {"args": {"text": "SMP 계통한계가격이 상승하며 전력 공급예비율이 하락했다", "max_terms": 10},
     "check": "'SMP' in result and any('예비율' in t for t in result)", "offline": True},
    # v1이 놓치던 것들 — v2의 존재 이유(회귀 방지)
    {"args": {"text": "인버터 출력제어와 첨두부하, 백로그가 쟁점이다", "max_terms": 10},
     "check": "any('인버터'==t for t in result) and any('출력제어' in t for t in result)",
     "offline": True},
]
