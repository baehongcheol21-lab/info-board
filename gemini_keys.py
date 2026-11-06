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
  2. 모든 호출은 콜마다 키를 번갈아 쓴다(라운드로빈: 키1→키2→키1…, 2026-11-06 사용자 지시
     "모든 시스템은 번갈아가면서 호출"). 성공한 콜을 record_call()로 기록하는 순간 다음 키로
     넘어가므로 사용법 A·B 모두 같은 규칙을 따른다. 분당 한도는 throttle()이 키별로 따로 세므로
     키 N개면 분당 최대 12*N회. 키 하나가 일일 쿼터(하루 500콜, PerDay) 소진되면
     mark_exhausted()로 표시하고, 그 키는 건너뛰고 남은 키끼리 돈다.
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
    r.throttle(); r.client().models.generate_content(...)
    # 실패 시 r.is_daily_quota_error(e)면 r.mark_exhausted(); r.rotate()
    r.record_call()   # 성공 기록 + 다음 콜은 다음 키로(라운드로빈)
"""
import os
import re
import json
import time
import sys
import datetime
import collections
try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

try:  # P5 관측 로그 — 없어도(예: dashboard/ 쪽 복제본) 조용히 무시하고 동작
    import runlog
except ImportError:
    runlog = None

MODEL = "gemini-3.1-flash-lite"       # 주력(volume): 요약·뉴스분석 등 대량 처리용 (사용자 지정 핵심 모델)
# 예비 모델 줄(앞에서부터). 2026-11-06 교체: gemini-2.5-flash-lite는 키2(새 계정)에서
# 404 "no longer available to new users"를 내며 회의를 터뜨렸다(11-05 10:13 회의 38콜 실패).
# 구글은 모델 이름을 자주 바꾸고 옛 모델을 끊는다(사용자 11-06) → ① 지금 두 키 모두에서 실제로
# 답한 모델 ② 마지막은 '항상 최신 경량' 별칭(latest)으로 둔다. 404가 나면 그 키에서만 그 모델을
# 이번 실행 동안 건너뛴다(키 소진으로 치지 않는다).
# [실측 2026-11-06 11시: 두 키 모두 3.1-flash-lite·3.5-flash-lite·flash-lite-latest·3.5-flash OK,
#  키2는 2.5-flash-lite·2.5-flash 404]
FALLBACK_MODELS = ["gemini-3.5-flash-lite", "gemini-flash-lite-latest"]
FALLBACK_MODEL = FALLBACK_MODELS[0]   # 호환용(옛 코드가 이름을 참조)
HEAVY_MODEL = "gemini-3.5-flash"      # 판단력 강한 보조 모델(옛 2.5-flash는 키2에서 404): 정책 점수·심층 배경설명 등에만
KST = datetime.timezone(datetime.timedelta(hours=9))
PER_KEY_DAILY_LIMIT = 500  # Gemini 무료 티어, 계정(키) 1개당 하루 한도
PER_KEY_RPM_LIMIT = 12     # 무료 티어 15 RPM 대비 안전 상한(여유 3 RPM 확보)
RPM_WINDOW_SEC = 62.0      # 슬라이딩 윈도우(60초 + 시계 오차 2초)
MIN_CALL_INTERVAL = 5.0    # 동일 키 연속 호출 최소 간격(60s / 5.0s = 12 RPM)
_BASE = os.path.dirname(os.path.abspath(__file__))
USAGE_FILE = os.path.join(_BASE, "key_usage.json")


def _clean(v):
    """BOM(\\ufeff)·제로폭 공백·개행 등을 제거. httpx는 HTTP 헤더 값을 ascii로만
    인코딩하는데(RFC 준수), 키에 이런 문자가 섞여 있으면 매 호출이 UnicodeEncodeError로
    죽는다 (2026-07-07 실전 확인 — 이 오류가 PowerShell로 시크릿을 등록할 때 파이프에
    BOM이 섞여 들어가는 잘 알려진 결함 때문일 가능성이 높음). 원인이 무엇이든 안전하게 제거."""
    return v.strip().lstrip("﻿").strip()


def discover_keys(env=None):
    """GEMINI_API_KEY, GEMINI_API_KEY_2, _3, _4 ... 를 순서대로 전부 수집.
    새 계정을 추가할 때 이 함수를 건드릴 필요 없음 — 번호만 이어서 늘리면 자동 인식."""
    env = env or os.environ
    keys = []
    if env.get("GEMINI_API_KEY"):
        keys.append(_clean(env["GEMINI_API_KEY"]))
    i = 2
    while env.get(f"GEMINI_API_KEY_{i}"):
        keys.append(_clean(env[f"GEMINI_API_KEY_{i}"]))
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
        self._call_times = {}   # {idx: deque[float]} 키별 최근 62초 호출 시각
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
            # retry_options.attempts=1 필수: SDK 기본값(5회 자동 재시도)을 그대로 두면
            # 503/429 한 번에 SDK가 뒷단에서 5번 연속 호출해 15 RPM을 즉시 돌파한다.
            self._client_cache[self.idx] = genai.Client(
                api_key=self.keys[self.idx],
                http_options={"timeout": 25000, "retry_options": {"attempts": 1}})
        return self._client_cache[self.idx]

    def throttle(self):
        """모든 generate_content 호출 직전 관문: 키별 62초 슬라이딩 윈도우(최대 12회) +
        최소 간격 5.0초를 강제해 무료 티어 15 RPM 한도를 구조적으로 넘지 않게 한다."""
        q = self._call_times.setdefault(self.idx, collections.deque())
        now = time.time()
        while q and now - q[0] >= RPM_WINDOW_SEC:
            q.popleft()
        wait = 0.0
        if q:
            wait = max(wait, MIN_CALL_INTERVAL - (now - q[-1]))
        if len(q) >= PER_KEY_RPM_LIMIT:
            wait = max(wait, RPM_WINDOW_SEC - (now - q[0]) + 0.2)
        if wait > 0:
            time.sleep(wait)
            now = time.time()
            while q and now - q[0] >= RPM_WINDOW_SEC:
                q.popleft()
        q.append(time.time())

    def record_call(self):
        """호출 성공 후 사용량 +1 기록 (파일에 즉시 저장) → 다음 콜은 다음 키로(라운드로빈).
        돌려주는 값은 방금 쓴 키의 오늘 누적 콜 수. 방금 쓴 키 번호가 필요하면 부르기 전에 idx를 읽어 둘 것."""
        c = self.usage["counts"].get(str(self.idx), 0) + 1
        self.usage["counts"][str(self.idx)] = c
        _save_usage(self.usage)
        self.advance()
        return c

    def mark_exhausted(self):
        """서버가 '일일 한도 소진(PerDay)'을 알려 온 지금 키를 장부에 500으로 적어,
        라운드로빈이 오늘 다시 이 키로 돌아오지 않게 한다."""
        self.usage["counts"][str(self.idx)] = PER_KEY_DAILY_LIMIT
        _save_usage(self.usage)

    def rotate(self, reason=""):
        prev = self.idx
        self.idx = (self.idx + 1) % len(self.keys)
        print(f"  🔁 계정 전환: 키{prev + 1} → 키{self.idx + 1}번 {reason}")

    def advance(self):
        """라운드로빈: 다음 콜에 쓸 키로 조용히 넘어간다(일일 한도 소진 키는 건너뜀).
        분당 한도는 throttle()이 키별 창으로 따로 세므로, 번갈아 써도 키 하나당
        62초 12회·5초 간격은 그대로 지켜진다. 남은 키가 없으면 지금 키에 머문다."""
        n = len(self.keys)
        for step in range(1, n + 1):
            j = (self.idx + step) % n
            if self.usage["counts"].get(str(j), 0) < PER_KEY_DAILY_LIMIT:
                self.idx = j
                return j
        return self.idx

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

    @staticmethod
    def is_model_gone_error(e):
        """그 키(계정)에서 이 모델을 더 못 쓰는 경우(404 NOT_FOUND, '새 사용자에게 제공 안 함' 등).
        키 문제가 아니라 모델 문제다 — 키 소진·키 오류로 치면 안 된다(11-05 회의 붕괴 원인)."""
        msg = str(e)
        return "404" in msg and ("NOT_FOUND" in msg or "no longer available" in msg
                                  or "not found" in msg.lower())

    @staticmethod
    def quota_detail(e):
        """구글 한도 오류문에서 한도 이름·숫자만 뽑는다(진짜 하루 한도를 로그로 확인하려고).
        오류문 전체는 남기지 않는다 — info-board는 공개 저장소라 계정 정보가 섞일 수 있다."""
        msg = str(e)
        parts = []
        for k in ("quotaId", "quotaValue", "quotaMetric"):
            m = re.search(r"['\"]?%s['\"]?\s*[:=]\s*['\"]?([A-Za-z0-9_./-]+)" % k, msg)
            if m:
                parts.append(f"{k}={m.group(1)}")
        m = re.search(r"['\"]model['\"]\s*:\s*['\"]([A-Za-z0-9_.-]+)", msg)
        if m:
            parts.append(f"model={m.group(1)}")
        return " ".join(parts) or "(한도 숫자 없음)"

    @staticmethod
    def is_server_overload_error(e):
        """구글 모델 서버 과부하(503 UNAVAILABLE 등) — 키 문제가 아니라 모델 엔드포인트 문제."""
        msg = str(e)
        return any(k in msg for k in ("503", "UNAVAILABLE", "500", "504", "DEADLINE_EXCEEDED", "timed out", "Timeout"))


class RotatingBudget:
    """KeyRotator 위에 얹은 간단한 ask() 루프 (discuss.py 등 단순 호출용).
    기존 discuss.py의 Budget과 같은 인터페이스(ask/used/transcript)라 바로 교체 가능."""

    def __init__(self, per_run_cap=150):
        self._rot = KeyRotator()
        self.per_run_cap = per_run_cap
        self.run_used = 0
        self.transcript = []
        self._last = 0.0
        self._gone = set()  # (키 번호, 모델) — 이번 실행 동안 404 등으로 못 쓰는 조합

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

    def _log(self, role, model, idx, topic, prompt, ok, t0, err_class=None, err=None):
        if runlog:
            try:
                runlog.log_api_call(role, model, idx + 1, topic, len(prompt), ok,
                                    time.time() - t0, err_class, err=err)
            except TypeError:  # 옛 runlog(err 인자 없음)와도 동작
                runlog.log_api_call(role, model, idx + 1, topic, len(prompt), ok,
                                    time.time() - t0, err_class)

    def _chain(self, model):
        """이 콜에서 시도할 모델 순서: 요청 모델 → 예비 모델 줄(중복 제거)."""
        out = [model]
        for m in FALLBACK_MODELS:
            if m not in out:
                out.append(m)
        return out

    def ask_heavy(self, role, prompt, topic=""):
        """판단력 강한 보조 모델(HEAVY_MODEL)로 호출. 정책 점수·심층 배경설명 등
        무거운 판단이 필요한 소수 콜에만 사용.
        heavy 모델은 별도의 작은 일일 쿼터(RPD)를 가지므로, 쿼터/오류 시 키를 소진처리하지 않고
        곧바로 주력 모델(flash-lite)로 폴백한다 — heavy 실패가 주력 예산을 망치지 않게.
        404(그 계정에서 모델 없음)면 그 키에서는 이번 실행 동안 heavy를 다시 시도하지 않는다."""
        if self.run_used >= self.per_run_cap:
            raise RuntimeError(f"이번 회의 예산 {self.per_run_cap}콜 소진")
        idx = self._rot.idx  # record_call()이 다음 키로 넘기므로 지금 키 번호를 먼저 잡아 둔다
        if (idx, HEAVY_MODEL) in self._gone:
            return self.ask(role, prompt, topic=topic)
        self._rot.throttle()
        t0 = time.time()
        try:
            self._last = t0
            r = self._rot.client().models.generate_content(model=HEAVY_MODEL, contents=prompt)
            text = (r.text or "").strip()
            if not text:
                raise RuntimeError("빈 응답")
            self.run_used += 1
            n = self._rot.record_call()  # 기록 + 다음 콜은 다음 키로(라운드로빈)
            self.transcript.append({"role": role, "topic": topic, "text": text})
            print(f"  [키{idx + 1} {n:>3}/{PER_KEY_DAILY_LIMIT}]★{role}: "
                  f"{text[:40].replace(chr(10), ' ')}...")
            self._log(role, HEAVY_MODEL, idx, topic, prompt, True, t0)
            return text
        except Exception as e:
            gone = KeyRotator.is_model_gone_error(e)
            if gone:
                self._gone.add((idx, HEAVY_MODEL))
            print(f"  ↩️ heavy({HEAVY_MODEL}) 실패({'모델 없음 404' if gone else str(e)[:40]}) → 주력 모델 폴백")
            self._log(role, HEAVY_MODEL, idx, topic, prompt, False, t0,
                      "model_gone" if gone else "tool_error",
                      err=KeyRotator.quota_detail(e) if KeyRotator.is_quota_error(e) else None)
            return self.ask(role, prompt, topic=topic)

    def ask(self, role, prompt, topic="", model=MODEL):
        """한 콜. 실패 처리 순서 (2026-11-06 개편):
          · 일일 한도(주력 모델)  → 그 키 소진 표시, 다음 키
          · 일일 한도(예비 모델)  → 그 키에서 그 예비 모델만 건너뜀(모델마다 한도가 따로다)
          · 분당 한도            → 65초 대기 후 같은 키
          · 서버 과부하(503)      → 같은 키에서 다음 예비 모델
          · 모델 없음(404)        → 그 키에서 그 모델을 이번 실행 동안 건너뛰고 다음 예비 모델
                                   (11-05: 이걸 키 오류로 쳐서 '전부 소진'으로 회의가 무너졌다)
          · 예비 모델까지 다 안 되면 → 다른 키로 (키마다 최대 2바퀴)"""
        if self.run_used >= self.per_run_cap:
            raise RuntimeError(f"이번 회의 예산 {self.per_run_cap}콜 소진")

        chain = self._chain(model)
        ci = 0
        tried = 0
        while tried < len(self._rot.keys) * 2:
            idx = self._rot.idx
            key_used = self._rot.usage["counts"].get(str(idx), 0)
            if key_used >= PER_KEY_DAILY_LIMIT:
                self._rot.rotate("(이미 소진된 키 건너뜀)")
                tried += 1
                ci = 0
                continue
            while ci < len(chain) and (idx, chain[ci]) in self._gone:
                ci += 1
            if ci >= len(chain):
                if len(self._rot.keys) > 1:
                    self._rot.rotate("(이 키에서 쓸 수 있는 모델 없음)")
                tried += 1
                ci = 0
                continue
            cur_model = chain[ci]
            self._rot.throttle()
            t0 = time.time()
            try:
                self._last = t0
                r = self._rot.client().models.generate_content(model=cur_model, contents=prompt)
                text = (r.text or "").strip()
                self.run_used += 1
                n = self._rot.record_call()  # 기록 + 다음 콜은 다음 키로(라운드로빈)
                self.transcript.append({"role": role, "topic": topic, "text": text})
                tag = "★" if cur_model != MODEL else " "
                print(f"  [키{idx + 1} {n:>3}/{PER_KEY_DAILY_LIMIT}]{tag}"
                      f"{role}: {text[:40].replace(chr(10), ' ')}...")
                self._log(role, cur_model, idx, topic, prompt, True, t0)
                return text
            except Exception as e:
                if KeyRotator.is_daily_quota_error(e):
                    detail = KeyRotator.quota_detail(e)
                    self._log(role, cur_model, idx, topic, prompt, False, t0, "daily_quota", err=detail)
                    if cur_model != MODEL:
                        print(f"  ⚠️ 키{idx + 1}번 {cur_model} 일일 한도 [{detail}] → 그 예비 모델만 건너뜀")
                        self._gone.add((idx, cur_model))
                        ci += 1
                        continue
                    print(f"  ⚠️ 키{idx + 1}번 일일 한도 소진 [{detail}]")
                    self._rot.mark_exhausted()
                    self._rot.rotate("(일일 한도 소진)")
                    tried += 1
                    ci = 0
                    continue
                if KeyRotator.is_quota_error(e):
                    print("  ⏳ 분당 한도 — 65초 대기 (같은 키 재시도)")
                    self._log(role, cur_model, idx, topic, prompt, False, t0, "rpm_quota",
                              err=KeyRotator.quota_detail(e))
                    time.sleep(65)
                    continue
                if KeyRotator.is_model_gone_error(e):
                    print(f"  ↩️ 키{idx + 1}번에서 {cur_model} 없음(404) → 이번 실행 동안 건너뜀")
                    self._log(role, cur_model, idx, topic, prompt, False, t0, "model_gone")
                    self._gone.add((idx, cur_model))
                    ci += 1
                    continue
                if KeyRotator.is_server_overload_error(e) and ci + 1 < len(chain):
                    print(f"  ↩️ {cur_model} 서버 과부하(503 등) → {chain[ci + 1]} 모델로 즉시 폴백")
                    self._log(role, cur_model, idx, topic, prompt, False, t0, "tool_error")
                    ci += 1
                    continue
                self._log(role, cur_model, idx, topic, prompt, False, t0, "runtime_error")
                if len(self._rot.keys) > 1 and tried < len(self._rot.keys) * 2 - 1:
                    print(f"  ⚠️ 키{idx + 1}번 오류({type(e).__name__}: {str(e)[:50]}) → 다른 키로 전환 시도")
                    self._rot.rotate(f"(오류 전환: {type(e).__name__})")
                    time.sleep(2)
                    tried += 1
                    ci = 0
                    continue
                raise
        n = len(self._rot.keys)
        if all(self._rot.usage["counts"].get(str(i), 0) >= PER_KEY_DAILY_LIMIT for i in range(n)):
            raise RuntimeError(f"등록된 계정 {n}개 전부 오늘 한도 소진 — 내일 자정(KST) 리셋")
        raise RuntimeError(f"등록된 계정 {n}개 모두 지금 쓸 수 있는 모델 없음(404·과부하 등) — 로그 확인")
