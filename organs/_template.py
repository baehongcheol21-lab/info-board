# coding=utf-8
"""
_template.py — 새 기관을 만들 때 이 파일을 복사해서 시작한다.
밑줄로 시작하는 파일명이라 registry.scan()이 건너뛴다(등록 안 됨) — 그대로 두고 복사해서 쓸 것.

새 기관 만드는 법:
  1. 이 파일을 organs/<이름>_v1.py 로 복사 (이름은 소문자·숫자·밑줄만)
  2. MANIFEST의 name·args·desc·category·safety를 채운다
  3. run()을 구현한다 — 예외는 던져도 됨(디스패처가 받아서 처리, D8 원칙)
  4. SELFTEST에 최소 1개 케이스를 넣는다. 네트워크가 필요 없으면 offline:True로
     둬서 매 registry 로드마다 자동 검증되게 한다.
  5. 배포 후에는 이 파일을 수정하지 않는다 — 고칠 일이 생기면 _v2 새 파일을 만든다
     (버그 수정만 예외, 이 경우 작업일지에 기록).
"""
import os
import sys

# organs/ 밖의 형제 모듈(tools·publish·gemini_keys 등)을 어디서 실행하든 import할 수 있게.
_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if _ROOT not in sys.path:
    sys.path.insert(0, _ROOT)

MANIFEST = {
    "name": "template_organ",
    "version": 1,
    "stable": False,          # 실전 배치 전까지는 False로 (기본 채택 안 됨)
    "category": "계산",        # 감각|계산|텍스트|검증|기억|실행|키움|화면
    "desc": "설명 한 줄",
    "args": {"x": "int"},
    "returns": "int",
    "safety": "pure",          # pure|network|write|sandbox
    "timeout_s": 5,
}


def run(x):
    return x * 2


SELFTEST = [
    {"args": {"x": 3}, "check": "result == 6", "offline": True},
]
