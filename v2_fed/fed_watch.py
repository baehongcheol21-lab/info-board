# coding=utf-8
"""연준 감시기 — 매일 돌리는 간단판 (AI 0콜). 새 FOMC 성명서가 올라왔을 때만 fomc.py를 부른다.

확인 방법: 연준 공식 RSS(통화정책 보도)에서 제목에 'FOMC statement'가 있는 글의 주소를 보고,
표(fomc_history.csv)에 아직 없는 회의 날짜면 → 새 발표 → 즉시 처리·브리핑 출력.
실행: dashboard\\venv\\Scripts\\python.exe v2_secretary\\fed\\fed_watch.py   (루트 '연준_감시.bat'가 이걸 부름)
"""
import os, re, sys, json, datetime
import requests
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import fomc

RSS = "https://www.federalreserve.gov/feeds/press_monetary.xml"
WATCH_LOG = os.path.join(fomc.DATA, "watch_log.jsonl")


def main():
    now = datetime.datetime.now().isoformat(timespec="seconds")
    rec = {"t": now}
    try:
        r = requests.get(RSS, headers=fomc.UA, timeout=40)
        r.raise_for_status()
        r.encoding = "utf-8"
        found = []
        for blk in re.findall(r"<item>(.*?)</item>", r.text, re.S):
            t = re.sub(r"<!\[CDATA\[|\]\]>", "", (re.search(r"<title>(.*?)</title>", blk, re.S) or [None, ""])[1]).strip()
            l = re.sub(r"<!\[CDATA\[|\]\]>", "", (re.search(r"<link>(.*?)</link>", blk, re.S) or [None, ""])[1]).strip()
            m = re.search(r"monetary(\d{4})(\d{2})(\d{2})a\.htm", l)
            if "FOMC statement" in t and m:
                found.append((f"{m.group(1)}-{m.group(2)}-{m.group(3)}", l))
        have = {row["meeting_date"] for row in fomc.load_rows()}
        new = sorted(x for x in found if x[0] not in have)
        rec.update(rss_statements=len(found), new=[d for d, _ in new])
        last = max(have) if have else "없음"
        if not new:
            fomc.say(f"[연준 감시 {now}] 새 FOMC 성명서 없음 · 표의 마지막 회의 {last} · RSS 속 성명서 {len(found)}개")
        for d, url in new:
            fomc.say(f"[연준 감시 {now}] ★ 새 FOMC 성명서 감지: {d} → 처리 시작")
            _, path = fomc.process(url)
            summ = os.environ.get("GITHUB_STEP_SUMMARY")  # 깃허브 실행 화면 첫 장에 브리핑을 띄움
            if summ and path:
                with open(summ, "a", encoding="utf-8") as f:
                    f.write(open(path, encoding="utf-8").read() + "\n")
        rec["ok"] = True
    except Exception as e:
        rec.update(ok=False, err=f"{type(e).__name__}: {str(e)[:200]}")
        fomc.say(f"[연준 감시 {now}] 실패: {rec['err']}")
    os.makedirs(os.path.dirname(WATCH_LOG), exist_ok=True)
    with open(WATCH_LOG, "a", encoding="utf-8") as f:
        f.write(json.dumps(rec, ensure_ascii=False) + "\n")


if __name__ == "__main__":
    main()
