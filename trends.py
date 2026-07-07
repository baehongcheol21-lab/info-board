# coding=utf-8
"""
trends.py — 임베딩 기반 키워드/주제 트렌드 추적 (O8)

목적: "이 주제(ESS·전력망·반도체 등)가 최근 며칠간 몇 번 등장했나"를 의미 기반으로 센다.
      단순 문자열 매칭이 아니라 임베딩 유사도라서 "ESS 화재"와 "배터리 저장장치 안전사고"를
      같은 트렌드로 인식한다.

동작:
  1. 매 회의에서 뉴스 주제(제목/라벨)들을 gemini-embedding-001로 임베딩(256차원 축소 → 저장 효율).
  2. trends.json에 {date, text, vec} 로 누적. 30일 넘은 항목은 자동 폐기(용량 관리, O9).
  3. check(topic): 최근 N일 저장분 중 이 주제와 코사인 유사도>0.75 인 것 개수를 세서
     "최근 5일간 3번째 등장 — 트렌드 형성 중" 같은 한 줄을 만든다.

임베딩은 generate_content와 별도 쿼터(RPD 1000)라 회의 예산(1000콜)을 잡아먹지 않는다.
로컬(dashboard)에서도 읽을 수 있게 info-board/trends.json 하나로 관리, git 커밋 대상.
"""
import os
import json
import math
import datetime

from gemini_keys import discover_keys

EMBED_MODEL = "gemini-embedding-001"
EMBED_DIM = 256          # 축소 차원 (3072→256, 저장 12배 절약)
WINDOW_DAYS = 30         # 이 기간 넘은 트렌드 기록은 폐기
SIM_THRESHOLD = 0.75     # 이 이상이면 '같은 주제'로 간주
KST = datetime.timezone(datetime.timedelta(hours=9))
_BASE = os.path.dirname(os.path.abspath(__file__))
TRENDS_FILE = os.path.join(_BASE, "trends.json")


def _client():
    from google import genai
    keys = discover_keys()
    if not keys:
        raise RuntimeError("GEMINI_API_KEY 없음")
    return genai.Client(api_key=keys[0])


def embed(text, client=None):
    """텍스트 → 256차원 벡터. 실패 시 None."""
    from google.genai import types
    client = client or _client()
    try:
        r = client.models.embed_content(
            model=EMBED_MODEL, contents=str(text)[:2000],
            config=types.EmbedContentConfig(output_dimensionality=EMBED_DIM))
        return [round(x, 5) for x in r.embeddings[0].values]
    except Exception:
        return None


def _cos(a, b):
    if not a or not b:
        return 0.0
    dot = sum(x * y for x, y in zip(a, b))
    na = math.sqrt(sum(x * x for x in a))
    nb = math.sqrt(sum(y * y for y in b))
    return dot / (na * nb) if na and nb else 0.0


def _load():
    try:
        with open(TRENDS_FILE, encoding="utf-8") as f:
            return json.load(f)
    except (OSError, ValueError):
        return []


def _save(rows):
    # 30일 넘은 건 버림 (용량 관리)
    cutoff = (datetime.datetime.now(KST).date() - datetime.timedelta(days=WINDOW_DAYS)).isoformat()
    rows = [r for r in rows if r.get("date", "") >= cutoff]
    with open(TRENDS_FILE, "w", encoding="utf-8") as f:
        json.dump(rows, f, ensure_ascii=False)
    return rows


class TrendTracker:
    """회의 1회 동안 쓰는 트렌드 추적기. 새 주제를 check()하며 기록도 함께 쌓는다."""

    def __init__(self):
        self.client = _client()
        self.rows = _load()
        self.today = datetime.datetime.now(KST).date().isoformat()
        self._new = []

    def check(self, topic, recent_days=7):
        """topic이 최근 recent_days일간 몇 번(오늘 포함) 등장했는지 의미 기반으로 센다.
        반환: (count, message). 임베딩 실패하면 (0, '')."""
        vec = embed(topic, self.client)
        if vec is None:
            return 0, ""
        cutoff = (datetime.datetime.now(KST).date()
                  - datetime.timedelta(days=recent_days)).isoformat()
        hits = 0
        for r in self.rows:
            if r.get("date", "") < cutoff:
                continue
            if _cos(vec, r.get("vec")) >= SIM_THRESHOLD:
                hits += 1
        self._new.append({"date": self.today, "text": str(topic)[:120], "vec": vec})
        n = hits + 1  # 오늘 것 포함
        if n >= 3:
            msg = f"📈 이 주제, 최근 {recent_days}일간 {n}번째 등장 — 트렌드 형성 중"
        elif n == 2:
            msg = f"↗ 이 주제, 최근 {recent_days}일간 2번째 등장 — 반복 감지"
        else:
            msg = "🆕 최근 처음 등장한 주제"
        return n, msg

    def flush(self):
        """이번 회의에서 새로 본 주제들을 저장(30일 초과분 폐기 포함)."""
        self.rows = _save(self.rows + self._new)
        self._new = []


def recent_top(days=7, k=8):
    """대시보드 트렌드 요약용: 최근 days일간 자주 등장한 주제 군집 상위 k개.
    간단한 그리디 군집화(유사도 기준)로 대표 주제 + 등장횟수를 반환."""
    cutoff = (datetime.datetime.now(KST).date() - datetime.timedelta(days=days)).isoformat()
    rows = [r for r in _load() if r.get("date", "") >= cutoff]
    clusters = []  # [{rep, vec, count, dates}]
    for r in rows:
        placed = False
        for c in clusters:
            if _cos(r.get("vec"), c["vec"]) >= SIM_THRESHOLD:
                c["count"] += 1
                c["dates"].add(r.get("date"))
                placed = True
                break
        if not placed:
            clusters.append({"rep": r.get("text", ""), "vec": r.get("vec"),
                             "count": 1, "dates": {r.get("date")}})
    clusters.sort(key=lambda c: (-c["count"], -len(c["dates"])))
    return [{"topic": c["rep"], "count": c["count"], "days": len(c["dates"])}
            for c in clusters[:k]]
