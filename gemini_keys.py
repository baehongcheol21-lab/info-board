# coding=utf-8
"""
gemini_keys.py — Gemini API 다중 계정 키 로테이션

배경: 사용자가 구글 계정을 추가로 사서 Gemini API 키를 여러 개 갖게 됨.
      계정 1개 = 무료 티어 하루 500콜. 키를 N개 등록하면 하루 총 500*N콜 가능.

동작:
  1. .env(또는 GitHub Secrets)에 GEMINI_API_KEY, GEMINI_API_KEY_2, GEMINI_API_KEY_3 ...
     순서대로 넣어두면 이 모듈이 자동으로 전부 찾아서 로테이션 목록을 만든다.
     ⇒ 새 계정을 살 때마다 .env에 한 줄 추가 + (클라우드라면) GitHub Secrets에 한 줄 추가, 끝.
       코드 수정 전혀 불필요.
  2. 키 하나가 일일 쿼터(하루 500콜, PerDay) 소진되면 다음 키로 자동 전환.
  3. 분당 쿼터(PerMinute) 초과는 로테이션하지 않고 같은 키로 65초 대기 후 재시도
     (일일 소진과 분당 제한을 에러 메시지로 구분).
  4. 사용량은 이 파일과 같은 폴더의 key_usage.json에 날짜별로 저장.
     자정(KST) 지나면 자동 리셋됨. (info-board 쪽은 git에 커밋되어야 하루 3회 회의가
     서로 다른 프로세스여도 누적 카운트가 이어짐 — workflow에서 커밋 대상에 포함되어 있음)

이 파일은 info-board/와 dashboard/ 양쪽에 동일하게 복제되어 있다 (두 저장소가
독립 배포되기 때문 — 서로 import 의존을 만들지 않기 위한 의도적 중복).
둘 다 고칠 일이 생기면 양쪽 다 반영할 것.

사용법 A — 간단한 ask 루프가 필요할 때 (discuss.py):
    from gemini_keys import RotatingBudget
    b = RotatingBudget(per_run_cap=150)
    b.ask("역할", "프롬프트", topic="주제")
    b.used                 # 이번 실행에서 쓴 콜 수
    b.total_daily_limit    # 오늘 이론상 최대 가능 콜 수 (500 * 키 개수)

사용법 B — google_search 그라운딩 등 세부 제어가 필요할 때 (analyze.py):
    from gemini_keys import KeyRotator
    r = KeyRotator()
    r.client().models.generate_content(...)   # 실패 시 r.is_daily_quota_error(e) 확인 후 r.rotate()
    r.record_call()
"""
import os
import json
import time
import datetime

MODEL = "gemini-3.1-flash-lite"
KST = datetime.timezone(datetime.timedelta(hours=9))
PER_KEY_DAILY_LIMIT = 500  # Gemini 무료 티어, 계정(키) 1개당 하루 한도
_BASE = os.path.dirname(os.path.abspath(__file__))
USAGE_FILE = os.path.join(_BASE, "key_usage.json")


def discover_keys(env=None):
    """GEMINI_API_KEY, GEMINI_API_KEY_2, _3, _4 ... 를 순서대로 전부 수집.
    새 계정을 추가할 때 이 함수를 건드릴 필요 없음 — 번호만 이어서 늘리면 자동 인식."""
    env = env or os.environ
    keys = []
    if env.get("GEMINI_API_KEY"):
        keys.append(env["GEMINI_API_KEY"])
    i = 2
    while env.get(f"GEMINI_API_KEY_{i}"):
        keys.append(env[f"GEMINI_API_KEY_{i}"])
        i += 1
    return keys


def _today():
    return datetime.datetime.now(KST).strftime("%Y-%m-%d")


def _load_usage():
    try:
        with open(USAGE_FILE, encoding="utf-8") as f:
            d = json.load(f)
    except (OSError, ValueError):
        d = {}
    if d.get("date") != _today():
        d = {"date": _today(), "counts": {}}  # 자정(KST) 리셋
    d.setdefault("counts", {})
    return d


def _save_usage(d):
    with open(USAGE_FILE, "w", encoding="utf-8") as f:
        json.dump(d, f, ensure_ascii=False, indent=1)


class KeyRotator:
    """계정 여러 개를 순서대로 관리하는 저수준 로테이터.
    세부 제어(그라운딩 도구, 커스텀 재시도 등)가 필요한 코드에서 직접 사용."""

    def __init__(self):
        self.keys = discover_keys()
        if not self.keys:
            raise RuntimeError("GEMINI_API_KEY가 하나도 없음 (.env 확인)")
        self.usage = _load_usage()
        self._client_cache = {}
        self.idx = self._pick_start()

    def _pick_start(self):
        for i in range(len(self.keys)):
            if self.usage["counts"].get(str(i), 0) < PER_KEY_DAILY_LIMIT:
                return i
        return 0  # 전부 소진으로 보이면 그래도 0번부터(자정 리셋 놓쳤을 수도 있음)

    @property
    def total_daily_limit(self):
        return PER_KEY_DAILY_LIMIT * len(self.keys)

    def client(self):
        from google import genai
        if self.idx not in self._client_cache:
            self._client_cache[self.idx] = genai.Client(api_key=self.keys[self.idx])
        return self._client_cache[self.idx]

    def record_call(self):
        """호출 성공 후 사용량 +1 기록 (파일에 즉시 저장)."""
        c = self.usage["counts"].get(str(self.idx), 0) + 1
        self.usage["counts"][str(self.idx)] = c
        _save_usage(self.usage)
        return c

    def rotate(self, reason=""):
        prev = self.idx
        self.idx = (self.idx + 1) % len(self.keys)
        print(f"  🔁 계정 전환: 키{prev + 1} → 키{self.idx + 1}번 {reason}")

    @staticmethod
    def is_daily_quota_error(e):
        """구글 일일 쿼터 초과(PerDay)인지 판별. 분당 제한(PerMinute)이나 다른 429와 구분."""
        msg = str(e)
        if "RESOURCE_EXHAUSTED" not in msg and "429" not in msg:
            return False
        return "PerDay" in msg or "per day" in msg.lower()

    @staticmethod
    def is_quota_error(e):
        msg = str(e)
        return "RESOURCE_EXHAUSTED" in msg or "429" in msg


class RotatingBudget:
    """KeyRotator 위에 얹은 간단한 ask() 루프 (discuss.py 등 단순 호출용).
    기존 discuss.py의 Budget과 같은 인터페이스(ask/used/transcript)라 바로 교체 가능."""

    def __init__(self, per_run_cap=150):
        self._rot = KeyRotator()
        self.per_run_cap = per_run_cap
        self.run_used = 0
        self.transcript = []
        self._last = 0.0

    @property
    def keys(self):
        return self._rot.keys

    @property
    def total_daily_limit(self):
        return self._rot.total_daily_limit

    @property
    def used(self):
        """호환용: 기존 코드가 참조하는 '이번 실행에서 쓴 콜 수'."""
        return self.run_used

    def ask(self, role, prompt, topic=""):
        if self.run_used >= self.per_run_cap:
            raise RuntimeError(f"이번 회의 예산 {self.per_run_cap}콜 소진")
        wait = 4.5 - (time.time() - self._last)
        if wait > 0:
            time.sleep(wait)

        tried = 0
        while tried < len(self._rot.keys) * 2:
            idx = self._rot.idx
            key_used = self._rot.usage["counts"].get(str(idx), 0)
            if key_used >= PER_KEY_DAILY_LIMIT:
                self._rot.rotate("(이미 소진된 키 건너뜀)")
                tried += 1
                continue
            try:
                self._last = time.time()
                r = self._rot.client().models.generate_content(model=MODEL, contents=prompt)
                text = (r.text or "").strip()
                self.run_used += 1
                n = self._rot.record_call()
                self.transcript.append({"role": role, "topic": topic, "text": text})
                print(f"  [키{idx + 1} {n:>3}/{PER_KEY_DAILY_LIMIT}] "
                      f"{role}: {text[:40].replace(chr(10), ' ')}...")
                return text
            except Exception as e:
                if KeyRotator.is_daily_quota_error(e):
                    print(f"  ⚠️ 키{idx + 1}번 일일 한도 소진")
                    self._rot.usage["counts"][str(idx)] = PER_KEY_DAILY_LIMIT
                    _save_usage(self._rot.usage)
                    self._rot.rotate("(일일 한도 소진)")
                    tried += 1
                    continue
                if KeyRotator.is_quota_error(e):
                    print("  ⏳ 분당 한도 — 65초 대기 (같은 키 재시도)")
                    time.sleep(65)
                    continue
                raise
        raise RuntimeError(f"등록된 계정 {len(self._rot.keys)}개 전부 오늘 한도 소진 — 내일 자정(KST) 리셋")
