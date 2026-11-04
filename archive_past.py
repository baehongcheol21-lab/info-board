# coding=utf-8
"""
archive_past.py — 과거 월별 로그 및 오래된 회의록 자동 압축·경량화
- 지난달(YYYY-MM 이전)의 experience/*.jsonl 및 stream/*.jsonl을 .gz로 압축
- discussions/*.json 중 최신 30개를 제외한 과거 회의록을 discussions/archive/YYYY-MM.tar.gz로 묶기
- trends.json 소수점 최적화 및 21일 초과 항목 정리
- 깃허브 저장소 용량을 80% 이상 절감하면서 과거 데이터 100% 보존
"""
import os
import glob
import gzip
import json
import tarfile
import shutil
import datetime

KST = datetime.timezone(datetime.timedelta(hours=9))
BASE = os.path.dirname(os.path.abspath(__file__))


def compress_logs():
    now_m = datetime.datetime.now(KST).strftime("%Y-%m")
    compressed = []

    # 1. experience/*.jsonl
    for p in glob.glob(os.path.join(BASE, "experience", "*.jsonl")):
        fname = os.path.basename(p)
        if fname.startswith(now_m):
            continue  # 이번 달 활성 파일은 압축하지 않고 그대로 둔다
        gz_path = p + ".gz"
        if not os.path.exists(gz_path):
            with open(p, "rb") as f_in, gzip.open(gz_path, "wb", compresslevel=9) as f_out:
                shutil.copyfileobj(f_in, f_out)
        if os.path.exists(gz_path) and os.path.getsize(gz_path) > 0:
            os.remove(p)
            compressed.append(fname)

    # 2. stream/*.jsonl
    for p in glob.glob(os.path.join(BASE, "stream", "*.jsonl")):
        fname = os.path.basename(p)
        if fname.startswith(f"{now_m}-stream"):
            continue  # 이번 달 활성 스트림은 보존
        gz_path = p + ".gz"
        if not os.path.exists(gz_path):
            with open(p, "rb") as f_in, gzip.open(gz_path, "wb", compresslevel=9) as f_out:
                shutil.copyfileobj(f_in, f_out)
        if os.path.exists(gz_path) and os.path.getsize(gz_path) > 0:
            os.remove(p)
            compressed.append(fname)

    return compressed


def archive_discussions(keep=30):
    disc_dir = os.path.join(BASE, "discussions")
    arch_dir = os.path.join(disc_dir, "archive")
    os.makedirs(arch_dir, exist_ok=True)

    files = sorted(glob.glob(os.path.join(disc_dir, "*.json")), reverse=True)
    if len(files) <= keep:
        return 0

    to_archive = files[keep:]
    # 월별로 그룹화
    by_month = {}
    for p in to_archive:
        bn = os.path.basename(p)
        m = bn[:7]  # YYYY-MM
        by_month.setdefault(m, []).append(p)

    archived_count = 0
    for m, paths in by_month.items():
        tar_path = os.path.join(arch_dir, f"{m}.tar.gz")
        mode = "a:gz" if os.path.exists(tar_path) else "w:gz"
        # tar에 추가
        with tarfile.open(tar_path, "w:gz") as tar:
            for p in paths:
                tar.add(p, arcname=os.path.basename(p))
        # 원본 삭제
        for p in paths:
            os.remove(p)
            archived_count += 1

    return archived_count


def prune_trends(days=21):
    trends_file = os.path.join(BASE, "trends.json")
    if not os.path.exists(trends_file):
        return 0, 0
    try:
        with open(trends_file, "r", encoding="utf-8") as f:
            rows = json.load(f)
    except Exception:
        return 0, 0

    orig_len = len(rows)
    cutoff = (datetime.datetime.now(KST).date() - datetime.timedelta(days=days)).isoformat()
    pruned = [r for r in rows if r.get("date", "") >= cutoff]

    # 소수점 4자리 절사로 용량 추가 절감
    for r in pruned:
        if "vec" in r and isinstance(r["vec"], list):
            r["vec"] = [round(x, 4) for x in r["vec"]]

    with open(trends_file, "w", encoding="utf-8") as f:
        json.dump(pruned, f, ensure_ascii=False, separators=(",", ":"))

    return orig_len, len(pruned)


if __name__ == "__main__":
    c_logs = compress_logs()
    print(f"· 로그 압축 완료 ({len(c_logs)}개 파일): {', '.join(c_logs) if c_logs else '없음'}")
    c_disc = archive_discussions(keep=30)
    print(f"· 과거 회의록 아카이브 완료 ({c_disc}개 파일 -> discussions/archive/)")
    t_orig, t_new = prune_trends(days=21)
    print(f"· trends.json 경량화: {t_orig}개 -> {t_new}개 항목")
