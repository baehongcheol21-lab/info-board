// 자동 생성 파일 (v2_secretary/export_panel.py) — 직접 수정하지 마세요.
window.PANEL_DATA = {
  "schema_version": "2.1.0-panel-v1",
  "day": "2026-11-16",
  "generated_at": "2026-11-16 08:25:55",
  "wardrobes": [
    {
      "id": "sticker",
      "no": 42,
      "name": "42 Sticker · 스티커"
    },
    {
      "id": "squeeze",
      "no": 41,
      "name": "41 Squeeze · 초록 과일"
    },
    {
      "id": "pasteup",
      "no": 31,
      "name": "31 Paste-up · 마분지 오려 붙이기"
    },
    {
      "id": "atelier",
      "no": 3,
      "name": "3 Atelier · 회벽 종이"
    },
    {
      "id": "dose",
      "no": 13,
      "name": "13 Dose · 아침 햇빛"
    }
  ],
  "default_wardrobe": "squeeze",
  "overview": {
    "in_total": {
      "val": 1964,
      "source": "v2_secretary/결과/문앞/2026-11-16_문앞교통정리_길별.json"
    },
    "new_total": {
      "val": 160,
      "source": "v2_secretary/결과/문앞/2026-11-16_문앞교통정리_길별.json"
    },
    "old_seen": {
      "val": 1804,
      "source": "v2_secretary/결과/문앞/2026-11-16_문앞교통정리_길별.json"
    },
    "seen_ledger_lines": {
      "val": 5968,
      "source": "v2_secretary/data/seen.jsonl"
    },
    "ai_calls_day": {
      "val": 14,
      "source": "v2_secretary/결과/2026-11-16_하루_전체.md"
    },
    "ai_fails_day": {
      "val": 0,
      "source": "v2_secretary/결과/2026-11-16_하루_전체.md"
    },
    "run_secs": {
      "val": 195,
      "source": "v2_secretary/결과/2026-11-16_하루_전체.md"
    },
    "lanes": {
      "거푸집1": {
        "val": 0,
        "source": "v2_secretary/결과/문앞/2026-11-16_문앞교통정리_길별.json"
      },
      "거푸집2": {
        "val": 12,
        "source": "v2_secretary/결과/문앞/2026-11-16_문앞교통정리_길별.json"
      },
      "뉴스": {
        "val": 145,
        "source": "v2_secretary/결과/문앞/2026-11-16_문앞교통정리_길별.json"
      },
      "제외 보관함": {
        "val": 3,
        "source": "v2_secretary/결과/문앞/2026-11-16_문앞교통정리_길별.json"
      },
      "논문T": {
        "val": 0,
        "source": "v2_secretary/결과/문앞/2026-11-16_문앞교통정리_길별.json"
      },
      "모름": {
        "val": 0,
        "source": "v2_secretary/결과/문앞/2026-11-16_문앞교통정리_길별.json"
      }
    },
    "last_auto_run": {
      "day": "2026-11-16",
      "start": "2026-11-16 08:22:39",
      "by": "github",
      "where": "GitHub",
      "mode": "run",
      "end": "2026-11-16 08:25:55",
      "secs": 195,
      "exit": 0,
      "result_md": true,
      "failed_stages": 0,
      "calls": 14,
      "result": "ok"
    },
    "last_auto_run_source": "v2_secretary/data/auto/runs.jsonl",
    "papers": {
      "day": "2026-11-15",
      "day_label": "11월 15일(어제)",
      "made": "2026-11-15T19:57:48",
      "calls": 91,
      "same_day": false,
      "source": "v2_secretary/결과/논문/2026-11-15_논문.json"
    }
  },
  "chapters": {
    "ch1_ranking": {
      "title": "챕터 1 · 오늘의 순위",
      "addr": "출력-1",
      "status": "아직 없음 (사용자 보류 — 현재는 기사 수 순 정렬)",
      "note": "중요도 공식(출력-1)은 아직 만들지 않았습니다. 지어내지 않고 '아직 없음' 칸으로 두며, 아래 목록은 오늘 뉴스 사건의 '기사 수 순'입니다.",
      "source": "구간_주소표.md",
      "top_by_article_count": [
        {
          "rank_by_count": 1,
          "name": "젠슨 황 엔비디아 CEO 사퇴 및 복귀 논란",
          "easy": "젠슨 황 엔비디아 CEO가 사퇴한 뒤 폭언 논란이 불거지며 파문이 일고 있습니다. 사퇴 나흘 만에 복귀를 추진하며 백악관을 설득하고 있다는 소식도 들려오는데요. 엔비디아 내부에서는 경영진 쇄신 요구가 나오고 있고, 시장에서는 이번 사태가 삼성전자와 SK하이닉스 등 국내 반도체 기업에 어떤 영향을 줄지 주목하고 있습니다.",
          "quote": "임원에 물병 던지고 폭언…젠슨 황 '민낯' 증언 나와 - 머니투데이",
          "member_count": 11,
          "sample_articles": [
            {
              "n": 89,
              "title": "젠슨 황, 사퇴 나흘 만에 복귀 추진…머스크까지 나섰다, 삼성전자·SK하이닉스 웃나 - 핀포인트뉴스",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE12aVBuNTVqRnNSdGFDVExJbEQtRnR4UXJEQzFSaFk2SkVONUdsU0lVYk9pM3A5TGRLN2pfRUdCXzlrSG9HYXNqZW4yYTVWTFZwem1Obk1VdS1NSzk2aDhfSFdOTFZ5Wm9kVm9PT0ptWUVsT3PSAXdBVV95cUxNSEQxckFyTGJoaktVUHFsUjdWTV9uN3VHOFZValpqdTR6bHZBM1B6RTR6YUE0eFJ6dnc4VVNfTWdUa3E5bTRfWThyZ0lDa1paemRtTE1kbmNRM3NRVXBBR2NPbURia0pBVVFvbDNYNHBFTVlaVXNXbw?oc=5"
            },
            {
              "n": 93,
              "title": "[글로벌 투자노트] 젠슨 황 퇴진이 삼성전자·SK하이닉스에 미칠 영향은 - 뉴스임팩트",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTFBYWTZkbmJzNWNIRWxfR2ZTZDhNcFNiQjU3MDNHNk9YV2ZEV0xTMlBwZ3VxWWFvbVp0dTJjNUl3SjN4cnh5VzVFVGEwRktjc0NLend0NzNiU2Zad0pZSjBGV0VNWmltcDFuaEt2RDE0WmdFQQ?oc=5"
            },
            {
              "n": 97,
              "title": "[박종면칼럼] 젠슨 황 퇴진, 삼성전자·하이닉스 누가 더 아플까 - 블로터",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFB2bXF6Z0RseThkMWVGVW5hMHRGS3BCUVpmQkN1Nl9GMzFnd1QyQ2FXS1hxZVZwVHVWM2d3a3NHSFZiLTZpbzVrY2lZUlFnZkVJNlJ0bExrVGZMRGJ1RGUxWWRwdWQzTkVf0gFsQVVfeXFMTWVQUk9SdGR1WHVCQm1uNENTN0RlOHIzNDEwWUNZR25IZkFnTDFVQWFiejF1T2tXQ1B2eV9vMzdyNlBZUExrQ2dtdEtlaGktQlA5OEJpblNHOEp6MS1PLW9sdG9wWTYtX1VVd0VF?oc=5"
            },
            {
              "n": 98,
              "title": "\"젠슨 황, 엔비디아 CEO 복귀 논의 중‥백악관 설득 시도\" - MBC 뉴스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE1oUFdIWUMxUzVrM2NpdGZvbFhMdTJzV1JyX01WOHZ4S2Vxdks0WFprZkdjb1VyTnNNeXJvWjVkRGpvSjduN3hmSEM2NHlIY3JwZlhoclA5VnhQekpxQUNoaXFSckdOS0p3ZUxwLWltT0lmTEd10gF0QVVfeXFMT3RSRFRWejZjN1RIVXpmVFdkb2V2Q2FManVKanZvMWEwejFvRWxISXh6N0paWW0xLVJUV2hrb1VyV0k0RkUzS2tTSm13b0dwbG56WVRDVlhHZm5GWGp2VlhxRlpvZWlhSVJ2R2Jvdmc5SkRpT3A?oc=5"
            },
            {
              "n": 99,
              "title": "‘엔비디아 탄생지’ 자랑하던 미 식당…젠슨 황 사퇴 즉시 기념판 뗐다 - 한겨레",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiggFBVV95cUxOd2Fpd3VFODJvaWRmcU5nbHFPY0dfcWg3WmlLbTJJQk1KUldLVklOVkZSU3R2RTdmczFybmE4RkhGSGJCb0lVNVNSZGF5bEZTN01GMmZPSnBKdG1WTTdEUVhqZ3hoREVhMzNkU2tkZ0pEM1hkV29rM2xlM2lkUFEzNzBn?oc=5"
            },
            {
              "n": 102,
              "title": "사퇴 나흘 만에 복귀 시도?…젠슨 황, 엔비디아 복귀 위해 백악관 설득 착수 - KBC광주방송",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9KRnU5WFdFY05DeUhwdmp0ZzR3SGttaEF4T3dUdDUteTJWa21lZnVDenMwX3NUeElScXlFQjJYLW1maGJqb1ZRWnY4SG5vMzdPVXk2LWRrenF6ckRXNmdZSw?oc=5"
            },
            {
              "n": 105,
              "title": "“젠슨 황, 나흘 만에 엔비디아 CEO 복귀 타진” - Chosunbiz",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMingFBVV95cUxPaWluNGVGVWZMWTZ1bVF1WGhuaVYxQzlKT0ZhLUw5Ty1nTHI4bExqTlE5LXNLQnVFMVJkTlp5TTNxV1VrNW4tTGlMUDl2cmVPbTNSVlIzWlRLRjdOc2RjV3cxVWltTXlIa2JacjhGTktOQmxtNDZnWHpndDlPemRyeVpRNmFZUDJmdTQ3eldYSENVMUtIajNvbVZXUDNHUdIBsgFBVV95cUxOV1R0OEFpUzVfV0RibXVnS2wyNTQ1Y0d1RExzQnRkZVQzNUtZQXo3b3h1clFvSlJreFpRQlVwcW9uRk8tbWFfOG11ektkYXBlYi1Nb25EdVZHZE9scm1mMndoaS1wYmZnZE1"
            },
            {
              "n": 189,
              "title": "젠슨 황, 이번엔 '폭언 논란'…\"임원에 '죽었으면 좋겠다' 발언\" - 더팩트",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE81emNaOVJxMVIwd3E3RXNadlNvX1d1ZnctNUEycWFsSElKV1FYT3JmOWhhb2V0aVR6S25lb2IxMWFpUXc0TVk5bWFZNHM1Q1VtYVHSAVJBVV95cUxPNXpjWjlScTFSMHdxN0VzWnZTb19XdWZ3LTVBMnFhbEhJSldRWE9yZjloYW9ldGlUektuZW9iMTFhaVF3NE1ZOW1hWTRzNUNVbWFR?oc=5"
            },
            {
              "n": 190,
              "title": "\"당신이 죽었으면 좋겠다\"…젠슨 황, 엔비디아 내부 증언 파문 - 파이낸셜뉴스",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1pM3U3X0dmSl94WVdCX0dUckhkX1hIdHcyMEY5STdyd0NGZ255bXBhbjAwdXhjbkJkT2szUFVHYkQzckxPMDhsWGstVlQ1UC1JZEJBU2Q0RFdNUQ?oc=5"
            },
            {
              "n": 192,
              "title": "잘나갈 땐 조용하더니… 쏟아진 폭로, 두 얼굴의 젠슨 황 “죽었으면 좋겠다” 섬뜩한 폭언에 물병 투척까지 - 데일리25",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTFB4RXd3dVRILW5rMlFEWFJRQUJ6cC01SkVfbzdiNEhHc2ZyOWZEa3RxaFNiTUxzZkNSNHBOaEQzYjZFUEU2a2diRldBaGJUTzdWQ1dYMzdhRTF1NlY2TkxSb1J2QlVKamRuQXNVUA?oc=5"
            }
          ],
          "flags": [
            "대표 제목 인용이 원문과 다름",
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 2,
          "name": "에코프로 포항 배터리엑스포 참가",
          "easy": "에코프로가 포항에서 열린 국제배터리엑스포에 참가해 차세대 이차전지 소재 기술력을 선보였습니다. 포항에 3.3조 원을 투자해 소재 생산과 재활용 생태계를 구축하겠다는 계획도 함께 밝혔는데요. 쉽게 말하면 에코프로가 포항을 중심으로 배터리 소재 분야의 기술과 생산 체계를 강화하고 있다는 겁니다.",
          "quote": "에코프로, 포항 배터리엑스포서 차세대 소재 기술력 공개",
          "member_count": 7,
          "sample_articles": [
            {
              "n": 174,
              "title": "에코프로, 국제배터리엑스포2026 참가…포항에 이차전지 소재 생태계 구축 - 팍스경제TV",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9kbm9JTTlybmhMMlAxVEpvVE9DYW0zMVRYay1IcmpyVFBqYUYzMjN1SXp4SmZIeGxZOHRMRklsalk3UE4wRTltMllRVENKQ1ZFdTltekdJOUNQTGlWeEpQbjZiTExUS1pa?oc=5"
            },
            {
              "n": 175,
              "title": "에코프로, 국제배터리엑스포서 이차전지 상생 성과·차세대 기술 소개 - 뉴스핌",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE5EMkFPeWhKNEdjdzBpdm1Pd29SNWkyRUR5VFkzaEx1S2lwYi03T0VFampQMnRwUDB1SW51dUF6eTBSdEQyNzVfV29FYnZKbTQyY01SRy1FX2YyamNQ?oc=5"
            },
            {
              "n": 176,
              "title": "에코프로, 포항에 3.3조 투자…배터리 소재 생산·재활용 체계 공개 - 뉴스웍스",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9ObkxobzBNVVVSd0IxandQU25XVFJOOVdPS3pmcGxrX3AyM0lsbHVlRVRMMTR3cWtaQkZacUt5UzBELWoyam05YnZ3NnJaZ3N4RTR3eG1kbEJkMEpfcW5WbndGSlczeFowU2pQWDVTNNIBc0FVX3lxTE1KSUpVWHJlbldmamNoNm15cW5DVjV3QUJ3VUlsTzdodG1pVUw1eGZ3UE16RGNldnV1WjFpYXM4dGZZNGVoY2lJNjBOVzY5NG9rVWlLeE1IUEltbzJBekp2c01vZjZWRG9IOFpRQ2JUMGlEaXM?oc=5"
            },
            {
              "n": 177,
              "title": "에코프로, 포항 국제배터리엑스포 참가…차세대 소재 기술 선보여 - 경북매일",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBTazBmNW1rVU02cFJZQlpOdmhybkh5NFdaNkNXbldFRm9CV0NycjlrdWRLNDlxM0d1a25zcEtrMEtqcTJ3VmRGTzlSOVFib3N4RnRBaU9Lc1BKQQ?oc=5"
            },
            {
              "n": 178,
              "title": "에코프로, 국제배터리엑스포 포항 참가…소재 기술력 선봬 - 연합뉴스",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5ydWJybzlKa0RnZjU5bGNxWmhuN0xyaDVEbnNsSDlGWGl0ODJUTXZLZGNWN3hhSkZrbGVnXzc3MjI4anpLdV9XNmljYmt6Vmt6NWJlRTRsa0hzQWZTLTViX9IBYEFVX3lxTE5ydWJybzlKa0RnZjU5bGNxWmhuN0xyaDVEbnNsSDlGWGl0ODJUTXZLZGNWN3hhSkZrbGVnXzc3MjI4anpLdV9XNmljYmt6Vmt6NWJlRTRsa0hzQWZTLTViXw?oc=5"
            },
            {
              "n": 179,
              "title": "에코프로, 포항 배터리엑스포서 차세대 소재 기술력 공개 - https://www.2news.co.kr/",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5RQXMxZUVWbTlNck5QLVBaSHQyeXk5TGhvQ3FhQWw3SDZCM2FVenZSc0hUd0puWGtMUTJfVk81Q0NQVlFnblEwV21aUHhTN19CUTQtZFVCUFJLWktQbUM0YWVvdmN2NzJD?oc=5"
            },
            {
              "n": 180,
              "title": "에코프로, 포항 배터리엑스포서 차세대 양극재 기술 공개 - 디일렉",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTFBxYUdGMU9DYnlIWGVzS2I4X3ZjRWUwcnJMdnRna0g3TEZiZ1pUMThCdXNrRjBrY1NPbVphMnE4LU9hdkhSd3hLWlJVQzJrb2s1R2l6WGxCOXN6TjA0QlpGQkR3X1owQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 3,
          "name": "LG엔솔·삼성SDI 북미 데이터센터 배터리 시장 공략",
          "easy": "LG에너지솔루션과 삼성SDI가 미국에서 열린 에너지 전시회에 참가해 AI 데이터센터용 차세대 배터리와 ESS 기술을 공개했습니다. 북미 데이터센터 전력 시장을 정조준한 것인데요. 쉽게 말하면 두 기업이 AI 데이터센터의 전력 수요를 잡기 위해 배터리 솔루션을 앞세워 경쟁하고 있다는 겁니다.",
          "quote": "LG엔솔·삼성SDI, 북미 AI 데이터센터 전력시장 정조준",
          "member_count": 7,
          "sample_articles": [
            {
              "n": 112,
              "title": "삼성SDI·LG엔솔, 미국서 차세대 ESS·데이터센터 배터리 공개(종합) - 연합뉴스",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFBJQWtuVS1pWlNFQmhIMmtiU1lCRXcyc1JHczdfWWI1MGdJaC1xNWdBNE80OF9zRGFJb1FlWkt5bVl2SVlJZldjSWExNHFJSFl1VFYzVWh6VHlYTThxSmVMX9IBYEFVX3lxTFBJQWtuVS1pWlNFQmhIMmtiU1lCRXcyc1JHczdfWWI1MGdJaC1xNWdBNE80OF9zRGFJb1FlWkt5bVl2SVlJZldjSWExNHFJSFl1VFYzVWh6VHlYTThxSmVMXw?oc=5"
            },
            {
              "n": 113,
              "title": "삼성SDI·LG엔솔 미국 에너지전시회 참가, ESS·AI데이터센터용 차세대 배터리 공개 - 비즈니스포스트",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE15M0xHeU05cUt2dGVjT3J5VWY4U1JpR3gxRC1ZX21sS3J5U3lEWTZadW1rYjBGeENNVWJlbk4ybU5HcVpXekkwaC1oUnBnZ2tiMzlOUFo3MnIyZ19pWTZyMFA3VEVXSDFJUXdQWkxJN3NpTG8?oc=5"
            },
            {
              "n": 114,
              "title": "삼성SDI·LG엔솔, 美서 AI 데이터센터 배터리 맞대결…ESS 시장 공략 - SBS Biz",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiU0FVX3lxTFBYb2JPQ0xab3h2Y3RPNHAzN1JXcUpOamJWeDVadXJ6ZG1kZmU5Rnd0eUxaTzk5dXN1QkZIazBES2M2ZnFFbk9JTzdtaDdmREVqQVZR0gFYQVVfeXFMUHNvRmRFVWRqZ1NHVmNtZkp2alNDRUNZdUFRWE40MHEtaHBfUk1YM1VxMFZRTXczckdaZVRWdmhIeGxLSFBSa2tva1FRZnhBWmROdzlmbTRSaQ?oc=5"
            },
            {
              "n": 115,
              "title": "LG엔솔, AI 데이터센터 전력시장 공략…차세대 배터리·ESS 공개 - 머니투데이 - 머니투데이",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE53a0tEcWNVU24tWW1abGdKcnR4SzJWd19idG8wSG55U1ZsYVFwczZ6Sm14cDBvbDFtWWFScllFRVBQeGpKTllyaTZNNnYyOHJxa25IdC04ZnNxR1UxdFd4R2tmU0k5elpPdmd0MFB5V190QdIBckFVX3lxTE53a0tEcWNVU24tWW1abGdKcnR4SzJWd19idG8wSG55U1ZsYVFwczZ6Sm14cDBvbDFtWWFScllFRVBQeGpKTllyaTZNNnYyOHJxa25IdC04ZnNxR1UxdFd4R2tmU0k5elpPdmd0MFB5V190QQ?oc=5"
            },
            {
              "n": 116,
              "title": "삼성SDI·LG엔솔, 미국서 차세대 ESS·데이터센터 배터리 공개(종합) - 매일경제 마켓",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE4zc1plQTJ0MVoxQnA5d3ZqYWdMdkpJMnVNb2dRZ2lNTVlNQjE2SkRIU3h5NVlVakJiQU5fT2ZHMUZ1Tk4yQkRDX1dVUjhFc2RRUEE?oc=5"
            },
            {
              "n": 117,
              "title": "LG엔솔·삼성SDI, 美 RE+ 출격...AI 데이터센터 전력시장 공략 - 아주경제",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE02aUQ1UjhCb2FCUDVpT2xxWXNUb2tJNmVDOTJrTXUwR3U0UEZYRTJvdkpxNmFzV2xNWHB0TG9lLXZrenkwVVdFTVlodTZpaDVjQVk3MGxsMDPSAVhBVV95cUxNNmlENVI4Qm9hQlA1aU9scVlzVG9rSTZlQzkya011MEd1NFBGWEUyb3ZKcTZhc1dsTVhwdExvZS12a3p5MFVXRU1ZaHU2aWg1Y0FZNzBsbDAz?oc=5"
            },
            {
              "n": 126,
              "title": "LG엔솔·삼성SDI, 북미 AI 데이터센터 전력시장 정조준 - 이뉴스투데이",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE42dkI4dWVjWWVtZ244QUw0NzBteC0zTDRFVTFGTklRNnl1YlN4Z2RfRUJtRm5JR3ZMbHJYNTR1QmRXaDM5V3Q2aVE0WkRBZ0YtRTRMbGFoVFBIekxlaFdZa25DZ2dWTUNqZ2h1WldnQ2vSAXRBVV95cUxPaW5VeDBaRVhFRXdCbVdfM1E5aUh2VUxOT3FsQktXejVSUlQ5dWJTZVFJSWJjQUVkQlhrNUJlRVp4NXNuRlNXQldQZ2huUlpXSURmOFpnRzVubjF1dWN1TkRFVHY0cC02Tzk1bzFCQ2c5T3g0Ng?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 4,
          "name": "한국전력 전기요금 인상 압박 및 재정 부담",
          "easy": "연료비 상승에도 전기요금이 제자리에 머물면서 한국전력의 요금 현실화 압박이 커지고 있습니다. 전쟁과 AI 전력 수요 증가, 사채 한도 문제까지 겹쳐 재정 부담이 눈덩이처럼 불어나고 있는데요. 쉽게 말하면 한전이 빚의 늪에서 벗어나기 위해 요금 인상이 불가피하다는 목소리가 나오고 있다는 겁니다.",
          "quote": "연료비 상승에도 전기요금은 제자리…한전, 요금 현실화 압박 커졌다",
          "member_count": 7,
          "sample_articles": [
            {
              "n": 57,
              "title": "한국전력, 4분기 적자전환 우려…목표가 4만원으로 하향-유진 - 마켓인",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE9LQWVuTkY4NFVMVmtJeENxS0xBTkNuY2xEbnp4c1FnMkNEdVlFbUdUZHhWNk5JbjBFTDRwcTR5M1BkMUdZU3RlZkM5d0FRSFZCZEVCd2pQYzdWdjZQUnFVbXpLRVFoLVhGaDlpVDVYZm9YZTA?oc=5"
            },
            {
              "n": 60,
              "title": "기름값 잡으려다 재정 부담 눈덩이···한전·가스공사도 '빚의 늪' - 서울파이낸스",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1IZm91Ym12Sko1Skh2THIwX2ZqZURCeEdRcTN1U3YzRU5vMmsxUWt2TkZRR1l6NE5hR0FzRmk5WGNGczA3b3g3VjQ2NkMtVDN6NkRDTkxTYTQ3VGk1UkEwVWNaanRVUk1DckE?oc=5"
            },
            {
              "n": 63,
              "title": "유진투자證 \"한국전력, 3Q 실적 기대치 하회…목표가 4만원↓\" - 이투데이",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5yME41MFlITzhEVll6SlhVMHFRcXg0c3RqVUEwenRsLTRYMkJOREJIOVNPeWlUN2FRWmY3aEdrX2Y0R1ota3M4YUNfb2JRY1l0b2JlM2RoMU1jMllpdVV1cE5DRGtZVXZkaXNXaTRhNHNYQnFV?oc=5"
            },
            {
              "n": 118,
              "title": "전기요금 인상 압박 커진다…전쟁·AI·사채한도 ‘첩첩산중’ 한전 - 국민일보",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9mTm96WWRYUTN2NGtMTnp3UE83MWQ2cUVRYzdicmFTRnhFNWUyc0dBUmEwczBZd0NaaDZOc0tabWZqZ2tpY1dNVFZZN2NDOHNDZ0pkSktTOVo?oc=5"
            },
            {
              "n": 122,
              "title": "[사설]석유 전기 가스 쌓이는 청구서… 단계적 요금 현실화 불가피 - 동아일보",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMidkFVX3lxTE5yMWpmQkNUVzhpb1ZJZzJWUXVORWotdDY0Q25vTFdpVFNrcWVpS3lzZHpVNXJ2WjdvRzlXcEZuVzEzeGx1OU1HbVh4TVl2TEduc0FIYnBubmxhWnhxczNzUVY1UFpzQ1ExcEU0V3REeXNfQndZWUHSAWZBVV95cUxOdE45RXk0ZzBReHJQSXFMOVlNbV95VFptdWg2NEpEU1pia2lKVjNtQ1FITzd6NmdxODZyU1RfQ1p1OGY0NWNOQ2R5Y25KOUQza0JyalhZQnN2NHppZUJCTTZYUzlGS2c?oc=5"
            },
            {
              "n": 133,
              "title": "구리가격·SMP↑…한전, 투자·전력구매 ‘나갈 돈’ 늘어 투자 부담↑ - 에너지경제신문",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1SZlRwU2lqa1FkemJrQ1VjQjZMV1ZRdXIyajNia1RleGFGb0twM3Z2dnpaMlBuQVZrNVB5Q0I0ZmxNQjVaZWowZ1E4SklIVWw1V3hKMHQwSG1LMDQ?oc=5"
            },
            {
              "n": 135,
              "title": "연료비 상승에도 전기요금은 제자리…한전, 요금 현실화 압박 커졌다 - 한국아이닷컴",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1UajBMVUdxWVhwczBUNU1PVDlBSDVRRENTbHRCcmJPbXhLZmNvNkVxQU1zNEZ6ZnRpU3JWckd0NjRKVlJra3h0cHR3dFN0aGsxS3VPQVd2alhCUDhPcFJldlZoYVRDdlFpd0JDbkczZ9IBb0FVX3lxTE1UajBMVUdxWVhwczBUNU1PVDlBSDVRRENTbHRCcmJPbXhLZmNvNkVxQU1zNEZ6ZnRpU3JWckd0NjRKVlJra3h0cHR3dFN0aGsxS3VPQVd2alhCUDhPcFJldlZoYVRDdlFpd0JDbkczZw?oc=5"
            }
          ],
          "flags": [
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 5,
          "name": "삼성·SK하이닉스 AI 데이터센터 시장 공략",
          "easy": "삼성전자와 SK하이닉스가 반도체를 넘어 AI 데이터센터 인프라 시장으로 사업을 확장하고 있습니다. 삼성은 계열사 통합 역량을 통해 AI 인프라 도전에 나섰고, SK하이닉스는 HBM4 생산 능력을 키우며 AI 수요에 대응하고 있는데요. 쉽게 말하면 두 기업 모두 AI 시대의 핵심인 데이터센터 시장에서 주도권을 잡으려 한다는 겁니다.",
          "quote": "삼성, 반도체 성공 AI 데이터센터로 확장 추진…FT “계열사 통합·수익성 검증 과제”",
          "member_count": 4,
          "sample_articles": [
            {
              "n": 81,
              "title": "HBM 다음은 첨단 패키징⋯ 삼성·SK, AI 반도체 주도권 경쟁 새 전선 - 브릿지경제",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE0tS3hRQ0t6Y21iVE5FXzI0NXdlWExpa01vY1pCN0xWMl8yM1d0WERyaVd0ZHktRTZRTFVFeUdDMTIwZExzU2NpZWppTmFYakxGaEZySkNXYXE4dw?oc=5"
            },
            {
              "n": 83,
              "title": "“AI 불확실 우려에도 수요 견고”…SK하이닉스, HBM4 생산능력 더 키운다 - 전자신문",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE12dGhnZ3RNdW53R3pGNXdWUUdiRmlPLV9vMVNNQXVBNGlKNkozUWZVWFRtaVBBb25LcTQwTUhadjZfYWgwSjd0VEFIMkZldw?oc=5"
            },
            {
              "n": 84,
              "title": "삼성, 반도체 성공 AI 데이터센터로 확장 추진…FT “계열사 통합·수익성 검증 과제” - 아시아투데이",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5rVV9fVFhoU1ZfMkhXSUd0NWM4LVZSWGlvVWZ5RlREM2FKb1lmeW4tbE1KXzl3TEM1eFVjdlRpMWlxTmQyb3MtQzd4ejBISWhZZVpDTGkzZEQ0RW53bFZreWZsT19sV2E5ek1KMVdn?oc=5"
            },
            {
              "n": 92,
              "title": "FT “삼성, 반도체 넘어 AI 인프라 도전”…통합 역량 관건 - 글로벌이코노믹",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOQ3pfcDNDNWF0WTZldzFnNHJzcmh1a2lFOE9zSGtRSThrQV9qekVaRXV0a1ZjV3NxeGhaZElEdm1yZHlNQTQ3SmlCV1NjUEgwU0JWRlZIOThGWWFuS0RIVzkwRy1uTURVZkhhY29FTDhhSXExanJ1S0Z1ZHp0UVBJMW01dzRHaF9I?oc=5"
            }
          ],
          "flags": [
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 6,
          "name": "수도권 데이터센터 전력계통영향평가 시행",
          "easy": "수도권 데이터센터 입지를 제한하기 위해 전력계통영향평가가 본격적으로 시행됩니다. 75점이라는 허들을 넘어야 입지가 가능한데, 데이터센터의 지방 분산을 유도하려는 목적이거든요. 쉽게 말하면 수도권에 데이터센터가 몰리는 것을 막고 전력망 부담을 줄이겠다는 겁니다.",
          "quote": "[에너지이슈] 수도권 데이터센터 '75점 허들' 넘어야 입지 가능...'전력계통영향평가' 본격 시행",
          "member_count": 4,
          "sample_articles": [
            {
              "n": 69,
              "title": "데이터센터 지방 분산 유도…수도권 전력망 심사 문턱 높인다 - 이데일리",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNRmZyM2pZSUdDTHM1alJHTHgzemdLUEI1UXJfWlFTTXlCcFJCbmJVUUtzbTBCVS1LZW9GVnJwdTB0MVhCYmhCY1B3a1ZXLVVqc3NWamExVThWNU5lQkJ3eVV6LVJWRGdQTjJUaEdKZ1piNFVEaHRnM3lDdzVnWEJtNg?oc=5"
            },
            {
              "n": 127,
              "title": "[삐그덕거리는 데이터센터 열풍/③끝]18.4GW 메가프로젝트…확장보다 '수용성'이 과제 - 비즈니스플러스",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9uMUZBWE1mb3QyMk5rT2s0cmJFRnFfZV9qV2dmaG40cDZiVTl0QTBMZWlCTDEwMHhaMUdiak9NaXFhNjVJazVOcXEzT3hWTGZkVkxIX2Yyd3hYRG9SV19TSk1wN0lUVjFEZThpVjNn?oc=5"
            },
            {
              "n": 128,
              "title": "전력계통영향평가 본격 시행...수도권 데이터센터 기준 강화 - elec4",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9LbVU2emE1eXhLRjdHclJxR1RJRE8tRUdQaHNVQVV1S1BlRk5kTTI1V29fVy0zMU1oczBLRHl6MGx3X3E4ZEpnanQ1YWc4QTJ5WWhuRm04RzRiTmQzeEMyZjFnWjlkcGd2aEFubHFn?oc=5"
            },
            {
              "n": 130,
              "title": "[에너지이슈] 수도권 데이터센터 '75점 허들' 넘어야 입지 가능...'전력계통영향평가' 본격 시행 - 산경e뉴스",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFB2NUhxQ2g4VnBVUjc3XzNaVEdnMnhXbnFnYi1GZXdqUzFXRkowak44YzdWRWdEVUdTSk5YcFRYV3FFNl9CazhpNDkzU21feEtQQm5vUXBVRm9kdXRJc09uX0tVcDcxRG8?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 7,
          "name": "신약 임상시험 승인 기간 단축",
          "easy": "한국 식약처가 신약 개발을 앞당기기 위해 임상시험 승인 기간을 10일로 단축했습니다. 미국과 영국 등 세계 각국도 심사 속도전에 뛰어들고 있는데요. 쉽게 말하면 임상 진입 속도가 곧 신약 개발 경쟁력으로 이어지기 때문에 각국이 규제를 완화하고 있다는 겁니다.",
          "quote": "식약처 임상시험 승인 10일로 단축…미·영도 심사 속도전 : 경제",
          "member_count": 4,
          "sample_articles": [
            {
              "n": 1949,
              "title": "글로벌 신약 임상 '규제 속도전'…한국 승인 10일·美 실시간 - 전자신문",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE5MSl9uT190MEFiZXRfR2VEWXp2UWRhNzA2S0xzOGVZMS0tR3pQZkhkYlB0ZkZOZDYzZVJJODZqX0RVdkszWHo0MnpwVTg3UQ?oc=5"
            },
            {
              "n": 1950,
              "title": "\"임상 진입이 곧 경쟁력\"…美·中·英 이어 韓도 신약 임상 '속도전' - www.ebn.co.kr",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5yRXF5d1dHWVZXX1d3NWpxa1RKRFZ0aUhjMVg2d2RHUldsMXJnd01memhfT3pndG1GNG9rT0g4UHNwYnZuSTY3WFVqb2dtNFFMdmFuTlhKVV95NTFON1pPV25lbHY1WG9U?oc=5"
            },
            {
              "n": 1952,
              "title": "식약처 임상시험 승인 10일로 단축…미·영도 심사 속도전 : 경제 - 재경일보",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE1uNEZ1WDA4VTk3WnBwaTlMSnJDUllrSDAwNG52X3lfb2pud3VTRENUdVJjV09WUGJyM0VxUVVObk85VDFLblhlWlBNMA?oc=5"
            },
            {
              "n": 1954,
              "title": "신약 개발 앞당긴다…세계 각국 임상시험 '속도전' - 연합뉴스",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFB6LVltTEVpaGluY3FKYy1jVGdmWDBpbWNlbmZoTGMyb2NmUVNKNU9SbTBfeExEd1VNZ2l0VWNTUGRGdHp2b2JvY0hMckZtc1ZZYWRSS2NaVWZSUUx5SlZtbtIBYEFVX3lxTFB6LVltTEVpaGluY3FKYy1jVGdmWDBpbWNlbmZoTGMyb2NmUVNKNU9SbTBfeExEd1VNZ2l0VWNTUGRGdHp2b2JvY0hMckZtc1ZZYWRSS2NaVWZSUUx5SlZtbg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 8,
          "name": "아일랜드 AI 데이터센터 전력 수요 법적 분쟁",
          "easy": "아일랜드에서 AI 데이터센터 붐으로 인한 전력 수요 급증이 법적 도전에 직면했습니다. 데이터센터가 전력을 너무 많이 사용하면서 발생하는 문제인데요. 쉽게 말하면 전력 공급과 수요 사이의 갈등이 법적 분쟁으로 이어졌다는 겁니다.",
          "quote": "아일랜드 AI 데이터센터 붐, 전력 수요 놓고 법적 도전 직면",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 32,
              "title": "아일랜드 AI 데이터센터 붐, 전력 수요 놓고 법적 도전 직면",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2176211"
            },
            {
              "n": 125,
              "title": "아일랜드 AI 데이터센터 붐, 전력 수요 놓고 법적 도전 직면 - Investing.com 한국어",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9TVXJzVXNDTFNQUlB6b1hjcG4wN18xdEp1c3gzOW1GRHdqdTNHVnlOLWVoWlBnSWxTWlpCbENqX2ZTUU1CSlgya3RPUjBXbTJCTkpxUk1IWVpKRXcxU280OGdEQWRGbVlodHRsQjJsVk0?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 9,
          "name": "울산 남구·중기 대표단 상하이 로봇 시설 시찰",
          "easy": "울산 남구와 중소기업 대표단이 중국 상하이의 휴머노이드 로봇 훈련장을 시찰했습니다. 로봇 기술을 배우고 산업 현장에 적용할 방안을 찾기 위해서인데요. 쉽게 말하면 지역 기업들이 중국의 로봇 기술을 확인하고 협력 기회를 모색하고 있다는 겁니다.",
          "quote": "남구·중소기업 대표단, 상하이 ‘휴머노이드 로봇 기린 훈련장’ 시찰",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 171,
              "title": "울산 남구·중기 대표단, 중국 상하이 휴머노이드 로봇 시설 시찰 - 울산매일 - 울산최초, 최고의 조간신문",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBWYzFsYS1IY3NObks5OWpDQWhNd0Z1Qk9KNnNQNGRYMnd0UTRveEhoaG9hU1JmN2thT1dtb1lOSkRYVXFRX3ZKeDNzZHJNUzZKZVNLREZERUpXYTRrdjh2Y1pfakxPRW1iS05RYUtR0gFuQVVfeXFMUFZjMWxhLUhjc05uSzk5akNBaE13RnVCT0o2c1A0ZFgyd3RRNG94SGhob2FTUmY3a2FPV21vWU5KRFhVcVFfdkp4M3Nkck1TNkplU0tERkRFSldhNGt2OHZjWl9qTE9FbWJLTlFhS1E?oc=5"
            },
            {
              "n": 172,
              "title": "남구·중소기업 대표단, 상하이 ‘휴머노이드 로봇 기린 훈련장’ 시찰 - 영남신문",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9hel9rVE4tU0dSYWlfVE5rdzJvV3dkaGVXanBmTm5zNXcxc1NBR0RzTnpDbUp2YTRpNnFrRFhveWl2aUNmbzJYRm9xek1maTgxTDlOVGYwaXlCQXh1RVRuS0JVNFh0YmVQdXY0SWxR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        }
      ]
    },
    "ch2_numbers": {
      "title": "챕터 2 · 숫자 (거푸집1)",
      "addr": "처리-1",
      "status": "돎 (AI 0콜 · 정규식 추출 + 공식 API 대조)",
      "counts": {
        "gate_in": {
          "val": 0,
          "source": "v2_secretary/결과/문앞/2026-11-16_문앞교통정리_길별.json"
        },
        "dart_day_total": {
          "val": 0,
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        "dart_contracts": {
          "val": 0,
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        "dart_others": {
          "val": 0,
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        "fred_series": {
          "val": 11,
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        "bok_rows_total": {
          "val": 35,
          "source": "v2_secretary/결과/거푸집1/한은_지표표.csv"
        },
        "bok_rows_day": {
          "val": 0,
          "source": "v2_secretary/결과/거푸집1/한은_지표표.csv"
        }
      },
      "dart_contracts": [],
      "dart_others": [],
      "fred_table": [
        {
          "series": "DGS10",
          "name": "미국 10년 국채 금리",
          "date": "2026-11-05",
          "value": "4.84",
          "unit": "%",
          "prev_date": "2026-11-04",
          "prev_value": "4.9",
          "change": "-0.06",
          "addr": "인풋-5",
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        {
          "series": "DEXKOUS",
          "name": "원/달러 환율",
          "date": "2026-10-30",
          "value": "1333.99",
          "unit": "원",
          "prev_date": "2026-10-29",
          "prev_value": "1339.03",
          "change": "-5.04",
          "addr": "인풋-5",
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        {
          "series": "DGS10",
          "name": "미국 10년 국채 금리",
          "date": "2026-11-06",
          "value": "4.86",
          "unit": "%",
          "prev_date": "2026-11-05",
          "prev_value": "4.84",
          "change": "+0.02",
          "addr": "인풋-5",
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        {
          "series": "DGS10",
          "name": "미국 10년 국채 금리",
          "date": "2026-11-09",
          "value": "4.88",
          "unit": "%",
          "prev_date": "2026-11-06",
          "prev_value": "4.86",
          "change": "+0.02",
          "addr": "인풋-5",
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        {
          "series": "DGS10",
          "name": "미국 10년 국채 금리",
          "date": "2026-11-10",
          "value": "4.98",
          "unit": "%",
          "prev_date": "2026-11-09",
          "prev_value": "4.88",
          "change": "+0.1",
          "addr": "인풋-5",
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        {
          "series": "FEDFUNDS",
          "name": "미국 실효 기준금리(월평균)",
          "date": "2026-10-01",
          "value": "3.88",
          "unit": "%",
          "prev_date": "2026-09-01",
          "prev_value": "3.75",
          "change": "+0.13",
          "addr": "인풋-5",
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        {
          "series": "CPIAUCSL",
          "name": "미국 소비자물가 상승률(1년 전 대비)",
          "date": "2026-09-01",
          "value": "3.717",
          "unit": "%",
          "prev_date": "2026-08-01",
          "prev_value": "3.353",
          "change": "+0.36",
          "addr": "인풋-5",
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        {
          "series": "UNRATE",
          "name": "미국 실업률",
          "date": "2026-10-01",
          "value": "4.1",
          "unit": "%",
          "prev_date": "2026-09-01",
          "prev_value": "4.2",
          "change": "-0.1",
          "addr": "인풋-5",
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        {
          "series": "PAYEMS",
          "name": "미국 비농업 일자리 증감(전월 대비)",
          "date": "2026-10-01",
          "value": "165",
          "unit": "천 명",
          "prev_date": "2026-09-01",
          "prev_value": "60",
          "change": "",
          "addr": "인풋-5",
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        {
          "series": "DGS10",
          "name": "미국 10년 국채 금리",
          "date": "2026-11-12",
          "value": "5.1",
          "unit": "%",
          "prev_date": "2026-11-10",
          "prev_value": "4.98",
          "change": "+0.12",
          "addr": "인풋-5",
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        {
          "series": "DEXKOUS",
          "name": "원/달러 환율",
          "date": "2026-11-06",
          "value": "1361.89",
          "unit": "원",
          "prev_date": "2026-11-05",
          "prev_value": "1352.95",
          "change": "+8.94",
          "addr": "인풋-5",
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        }
      ],
      "bok_table": [
        {
          "period": "2026-09",
          "name": "수출(상품수지)",
          "val": "1,307.2",
          "unit": "억달러",
          "chg": "92.4",
          "cunit": "%",
          "ecos_check": "",
          "title": "2026년 9월 국제수지(잠정)",
          "published": "Thu, 05 Nov 2026 08:00:00 +0900",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/한은_지표표.csv"
        },
        {
          "period": "2026-09",
          "name": "경상수지",
          "val": "614.6",
          "unit": "억달러",
          "chg": "",
          "cunit": "",
          "ecos_check": "이번 맞음(ECOS 614.58) [301Y013]",
          "title": "2026년 9월 국제수지(잠정)",
          "published": "Thu, 05 Nov 2026 08:00:00 +0900",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/한은_지표표.csv"
        },
        {
          "period": "2026-10",
          "name": "외환보유액",
          "val": "4,431.6",
          "unit": "억달러",
          "chg": "26.0",
          "cunit": "억달러",
          "ecos_check": "이번 맞음(ECOS 4,431.59) · 직전 맞음(ECOS 4,405.57) [732Y001]",
          "title": "2026년 10월말 외환보유액",
          "published": "Wed, 04 Nov 2026 06:00:00 +0900",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/한은_지표표.csv"
        },
        {
          "period": "2026-03Q",
          "name": "현물환거래규모",
          "val": "507.4",
          "unit": "억달러",
          "chg": "33.7",
          "cunit": "억달러",
          "ecos_check": "",
          "title": "2026년 3/4분기중 외국환은행의 외환거래 동향",
          "published": "Fri, 30 Oct 2026 12:00:00 +0900",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/한은_지표표.csv"
        },
        {
          "period": "2026-03Q",
          "name": "외은지점의거래규모",
          "val": "651.2",
          "unit": "억달러",
          "chg": "8.1",
          "cunit": "억달러",
          "ecos_check": "",
          "title": "2026년 3/4분기중 외국환은행의 외환거래 동향",
          "published": "Fri, 30 Oct 2026 12:00:00 +0900",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/한은_지표표.csv"
        },
        {
          "period": "2026-03Q",
          "name": "현물환거래규모(일평균)",
          "val": "507.4",
          "unit": "억달러",
          "chg": "33.7",
          "cunit": "억달러",
          "ecos_check": "",
          "title": "2026년 3/4분기중 외국환은행의 외환거래 동향",
          "published": "Fri, 30 Oct 2026 12:00:00 +0900",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/한은_지표표.csv"
        },
        {
          "period": "2026-09",
          "name": "신규취급액기준저축성수신금리",
          "val": "3.45",
          "unit": "%",
          "chg": "0.24",
          "cunit": "%p",
          "ecos_check": "이번 맞음(ECOS 3.45) · 직전 맞음(ECOS 3.21) [121Y002]",
          "title": "2026년 9월 금융기관 가중평균금리",
          "published": "Thu, 29 Oct 2026 12:00:00 +0900",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/한은_지표표.csv"
        },
        {
          "period": "2026-09",
          "name": "대출금리",
          "val": "4.57",
          "unit": "%",
          "chg": "0.17",
          "cunit": "%p",
          "ecos_check": "이번 맞음(ECOS 4.57) · 직전 맞음(ECOS 4.4) [121Y006]",
          "title": "2026년 9월 금융기관 가중평균금리",
          "published": "Thu, 29 Oct 2026 12:00:00 +0900",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/한은_지표표.csv"
        },
        {
          "period": "2026-09",
          "name": "잔액기준총수신금리",
          "val": "2.27",
          "unit": "%",
          "chg": "0.07",
          "cunit": "%p",
          "ecos_check": "",
          "title": "2026년 9월 금융기관 가중평균금리",
          "published": "Thu, 29 Oct 2026 12:00:00 +0900",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/한은_지표표.csv"
        },
        {
          "period": "2026-09",
          "name": "총대출금리",
          "val": "4.48",
          "unit": "%",
          "chg": "0.08",
          "cunit": "%p",
          "ecos_check": "",
          "title": "2026년 9월 금융기관 가중평균금리",
          "published": "Thu, 29 Oct 2026 12:00:00 +0900",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/한은_지표표.csv"
        },
        {
          "period": "2026-09",
          "name": "대출금리와저축성수신금리차",
          "val": "1.12",
          "unit": "%p",
          "chg": "0.07",
          "cunit": "%p",
          "ecos_check": "",
          "title": "2026년 9월 금융기관 가중평균금리",
          "published": "Thu, 29 Oct 2026 12:00:00 +0900",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/한은_지표표.csv"
        },
        {
          "period": "2026-09",
          "name": "총대출금리와총수신금리차",
          "val": "2.21",
          "unit": "%p",
          "chg": "0.01",
          "cunit": "%p",
          "ecos_check": "",
          "title": "2026년 9월 금융기관 가중평균금리",
          "published": "Thu, 29 Oct 2026 12:00:00 +0900",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/한은_지표표.csv"
        },
        {
          "period": "2026-10",
          "name": "전산업기업심리지수(CBSI)",
          "val": "104.2",
          "unit": "",
          "chg": "5.1",
          "cunit": "p",
          "ecos_check": "이번 맞음(ECOS 104.2) · 직전 맞음(ECOS 99.1) [512Y013]",
          "title": "2026년 10월 기업경기조사 결과 및 경제심리지수(ESI)",
          "published": "Thu, 29 Oct 2026 06:00:00 +0900",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/한은_지표표.csv"
        },
        {
          "period": "2026-10",
          "name": "다음달전망CBSI(전산업기업심리지수(CBSI))",
          "val": "101.8",
          "unit": "",
          "chg": "2.2",
          "cunit": "p",
          "ecos_check": "",
          "title": "2026년 10월 기업경기조사 결과 및 경제심리지수(ESI)",
          "published": "Thu, 29 Oct 2026 06:00:00 +0900",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/한은_지표표.csv"
        },
        {
          "period": "2026-10",
          "name": "경제심리지수(ESI)",
          "val": "100.8",
          "unit": "",
          "chg": "0.9",
          "cunit": "p",
          "ecos_check": "이번 맞음(ECOS 100.8) · 직전 맞음(ECOS 99.9) [513Y001]",
          "title": "2026년 10월 기업경기조사 결과 및 경제심리지수(ESI)",
          "published": "Thu, 29 Oct 2026 06:00:00 +0900",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/한은_지표표.csv"
        }
      ]
    },
    "ch3_easy_read": {
      "title": "챕터 3 · 쉽게 읽기 (거푸집2 · 연준)",
      "addr": "처리-2",
      "status": "돎 (글당 AI 1콜 + 파이썬 원문·숫자 대조)",
      "counts": {
        "gate_in": {
          "val": 12,
          "source": "v2_secretary/결과/문앞/2026-11-16_문앞교통정리_길별.json"
        },
        "summarized_today": {
          "val": 11,
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        "bad_numbers_today": {
          "val": 0,
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        "fed_speeches_total": {
          "val": 22,
          "source": "v2_secretary/결과/연준연설/"
        }
      },
      "items": [
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "키움증권",
          "title": "[키움증권] 롯데관광개발 운이 좋지 못했던 분기",
          "easy1_title": "카지노에서 돈을 딸 확률이 낮아져서 실적이 기대보다 안 나왔어요",
          "easy1_desc": "롯데관광개발의 3분기 영업이익이 시장의 기대치보다 낮게 나왔는데요, 방문객과 드롭액(고객이 칩으로 바꾼 금액)은 늘었지만 카지노에서 회사가 가져가는 비율인 홀드율이 19%에서 14.5%로 뚝 떨어졌기 때문이에요. 쉽게 말하면 손님은 많이 왔는데 카지노 게임에서 회사가 딴 돈이 생각보다 적었다는 말이에요.",
          "easy2_title": "10월부터는 다시 좋아지고 있고 주가도 바닥권이라고 봐요",
          "easy2_desc": "10월에는 홀드율이 다시 회복되면서 월 매출이 역대 최대를 기록했는데요, 증권사는 4분기에도 이런 흐름이 이어지면서 실적이 좋아질 것으로 보고 있어요. 목표주가는 낮췄지만 현재 주가는 이미 바닥을 찍었다고 판단한다는 거예요.",
          "topic": "롯데관광개발의 3분기 실적 부진 원인과 향후 회복 가능성에 대한 분석이에요.",
          "points": [
            "홀드율 하락과 디레버리지: 3분기 영업이익은 308억원으로 시장의 예상치를 크게 밑돌았는데요, 이는 상반기 평균 19%였던 홀드율이 14.5%로 급락하면서 고정비 부담이 커지는 디레버리지 현상이 나타났기 때문이에요.",
            "카지노와 호텔 부문 상황: 카지노는 방문객과 드롭액이 모두 늘었지만 홀드율 하락으로 매출이 줄어들었어요. 호텔은 객실 매출은 늘었으나 카지노 고객이 사용하는 객실 비중이 56.9%로 높아지면서 연결 매출은 3% 증가하는 데 그쳤다는 거예요.",
            "향후 전망과 목표주가: 증권사는 10월부터 홀드율이 회복되고 있고 내년에는 중국 도시 취항 등으로 VIP 영업이 본격화될 것으로 봤어요. 다만 매크로 환경을 반영해 목표주가는 17,000원으로 하향 조정했다는 계획이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "15087",
          "link": "https://m.stock.naver.com/research/company/98195",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "키움증권",
          "title": "[키움증권] GKL 핵심 영업장 10년 확보, 남은 과제는 탑라인",
          "easy1_title": "손님은 늘었는데 정작 돈은 안 벌리는 상황이에요",
          "easy1_desc": "GKL의 3분기 실적을 살펴봤더니 방문객은 15%나 늘었지만, 정작 중요한 인당 드롭액(고객이 게임에 건 돈)은 12% 줄어든 것으로 나타났습니다. 인건비와 콤프(고객 서비스 비용) 같은 영업비용까지 80억 원이나 늘어나면서 전체적인 이익이 깎인 건데요. 쉽게 말하면 손님은 많이 왔는데 객단가가 낮아져서 실속을 챙기지 못했다는 말이에요.",
          "easy2_title": "금융비용 부담이 커져서 목표주가를 낮췄습니다",
          "easy2_desc": "강남 코엑스점의 임대차 계약을 10년 연장한 건 불확실성을 해소했다는 점에서 긍정적이지만, 리스부채가 늘어나면서 금융비용이 매 분기 약 80억 원씩 추가로 발생하게 됐습니다. 증권사는 이런 비용 부담을 반영해 당기순이익 추정치를 조정했는데요. 그래서 기존 12,000원이던 목표주가를 10,000원으로 하향 조정했다는 겁니다.",
          "topic": "GKL이 핵심 영업장을 장기 확보했음에도 불구하고, 실적 개선을 위해서는 방문객을 실제 매출로 전환하는 전략이 필요하다는 분석이에요.",
          "points": [
            "3분기 실적 부진 원인: 3분기 영업이익은 96억 원으로 시장 기대치인 154억 원을 38%나 밑돌았습니다. 홀드율(카지노가 가져가는 수익률)은 정상 범위였지만, 인건비와 마케팅 비용이 늘어난 게 뼈아팠던 겁니다.",
            "영업장 장기 확보의 명암: 강남 코엑스점의 10년 임대차 갱신은 핵심 영업장의 불확실성을 없앴다는 장점이 있습니다. 하지만 리스부채 인식으로 비유동부채가 연초보다 1,018억 원 늘어난 건 단점이라고 봤습니다.",
            "향후 실적 개선 과제: 인건비는 실적과 상관없이 계속 오르는 구조라, 결국 이익을 늘리려면 탑라인(매출액) 성장이 필수적입니다. 증권사는 VIP 집중 전략만으로는 인바운드 수혜를 온전히 흡수하기 어렵다고 평가했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "16155",
          "link": "https://m.stock.naver.com/research/company/98194",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "키움증권",
          "title": "[키움증권] 큐리옥스바이오시스템즈 너 잘 걸렸다",
          "easy1_title": "큐리옥스바이오시스템즈의 영업 상황이 나아지고 있어요",
          "easy1_desc": "큐리옥스바이오시스템즈는 세포를 훼손하지 않고 세척하는 자동화 장비를 만드는 곳인데요. 6월 학회에서 데이터를 발표한 이후 7월부터 10월까지 장비 주문이 꾸준히 들어오면서 영업 상황이 개선되는 모습이 나타났거든요. 이르면 연내에 신제품을 출시하거나 새로운 파트너십을 맺는 등 추가적인 성장 동력도 기대된다고 증권사는 봤습니다.",
          "easy2_title": "미국에서 영업비밀 침해 소송이 시작되었습니다",
          "easy2_desc": "회사가 미국의 바이오 장비사인 BD와 Waters를 상대로 영업비밀 침해 소송을 제기했는데요. 장비를 개발할 때 쓴 핵심 기술과 노하우를 상대방이 비밀 유지 계약을 어기고 가져가 경쟁 제품을 만들었다고 주장하는 겁니다. 증권사는 이 소송이 어떻게 진행되는지 앞으로 계속 지켜봐야 할 필요가 있다고 판단했습니다.",
          "topic": "큐리옥스바이오시스템즈의 최근 영업 현황과 미국에서 진행 중인 영업비밀 침해 소송에 대한 분석입니다.",
          "points": [
            "영업 현황 개선: 3분기 실적은 매출액 15억 원을 기록했는데, 6월 학회 이후 글로벌 CRO 업체와 제약사 등에서 장비 도입이 이어지고 있습니다. 10월에는 중국 대학에서 장비 10대 구매를 준비하는 등 영업 상황이 이전보다 나아졌다는 평가입니다.",
            "미국 소송 제기: 회사는 BD와 Waters를 상대로 비밀 유지 계약 위반 및 영업비밀 침해 소송을 냈습니다. 상대방이 개발한 제품이 회사의 핵심 파라미터와 설정 값을 무단으로 사용했다는 주장인데, 손해배상과 함께 상대 제품의 판매 금지까지 요구하고 있습니다.",
            "소송 전략과 전망: 회사는 배심 재판을 요구하며 대형 기업이 작은 업체의 노하우를 가져갔다는 구도를 강조하고 있습니다. 증권사는 이번 소송이 합의나 승소로 이어질지 사후 추적 관찰이 필요하다고 봤습니다."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "easy2 근거 원문에 없음",
          "body_chars": "13768",
          "link": "https://m.stock.naver.com/research/company/98193",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "키움증권",
          "title": "[키움증권] 로체시스템즈 실적도 수주도 맑음",
          "easy1_title": "반도체 장비가 잘 팔리면서 실적도 수주도 아주 좋아요",
          "easy1_desc": "로체시스템즈의 3분기 영업이익이 89억 원을 기록했는데요, 이는 작년 같은 기간보다 340%나 늘어난 수치예요. 반도체 공정에 쓰이는 장비인 EFEM과 N2 Purge Adaptor의 수요가 늘어난 덕분인데, 중화권의 반도체 투자 확대가 큰 도움이 됐다는 말이에요. 쉽게 말하면, 반도체 시장이 커지면서 로체시스템즈의 장비도 더 많이 찾게 된 셈이에요.",
          "easy2_title": "지금 주가는 회사가 가진 가치보다 낮게 평가받고 있어요",
          "easy2_desc": "증권사는 로체시스템즈의 2027년 실적을 매출액 2,740억 원, 영업이익 323억 원으로 전망했는데요, 전 사업 부문에서 성장이 이어질 것으로 봤기 때문이에요. 현재 주가는 2027년 예상 실적을 기준으로 PER(주가수익비율)이 5.6배 수준인데, 이는 지난 5년 평균인 12배보다 훨씬 낮은 상태라는 거예요. 성장의 강도와 지속성을 고려하면 지금은 주가가 저평가된 국면이라고 증권사는 판단했어요.",
          "topic": "로체시스템즈가 반도체와 디스플레이 부문 모두에서 성장을 이어가며 실적 개선을 보이고 있다는 분석이에요.",
          "points": [
            "반도체 부문의 견조한 성장: 로체시스템즈는 3분기 반도체 부문 매출액 253억 원을 기록하며 전 분기에 이어 성장을 이어갔는데요, 특히 주요 고객사의 입지가 탄탄하고 중화권 투자 확대가 긍정적인 영향을 줬거든요. 3분기 말 기준 반도체 부문 수주잔고도 765억 원으로 역대 최고 수준을 유지하고 있다는 점이 눈에 띕니다.",
            "디스플레이 부문의 반등과 성장: 디스플레이 부문도 올해 반등에 이어 내년에도 지속적인 성장이 예상된다고 증권사는 봤는데요, 폴더블 스마트폰 같은 새로운 기기가 나오면서 관련 공정 장비 수요가 늘었기 때문이에요. 특히 패널을 만드는 후공정에서 모듈 장비 수요가 꾸준히 늘어나는 구조라 앞으로의 성장도 기대된다는 말이에요.",
            "보수적으로 봐도 밝은 미래 실적: 증권사는 2026년 매출액 1,899억 원, 영업이익 245억 원을 예상했는데요, 4분기에 있을 수 있는 일회성 비용까지 고려한 보수적인 수치라고 해요. 2027년에는 모든 사업 부문이 성장하면서 매출액 2,740억 원, 영업이익 323억 원을 기록할 것으로 증권사는 내다봤습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "8549",
          "link": "https://m.stock.naver.com/research/company/98192",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "iM증권",
          "title": "[iM증권] 현대해상 3Q26 Review: 연초에 나올 실손/자동차 요율에 주목",
          "easy1_title": "현대해상의 실적은 아쉬웠지만 내년 보험료 결정이 중요해요",
          "easy1_desc": "현대해상의 3분기 순이익은 1,657억 원으로 작년보다 9.6% 줄어들었는데요. 실손보험금 관련 예실차(예상과 실제의 차이)가 좋지 않았고 투자 손익까지 부진해서 증권사가 예상했던 실적보다 낮게 나왔거든요. 그래서 지금은 당장의 실적보다 내년 초에 결정될 실손보험과 자동차보험의 요율 인상 여부가 훨씬 중요한 상황이라는 말이에요.",
          "easy2_title": "배당을 다시 시작하기엔 아직 시간이 좀 더 필요해 보여요",
          "easy2_desc": "현대해상은 배당을 할 수 있는 이익이 약 3,000억 원 정도 줄어들면서 배당을 재개하기가 어려운 상황이에요. 신계약비를 관리해서 해약환급금준비금을 억제하고는 있지만, 제도 개선이 없으면 배당을 다시 시작하기까지 시간이 걸릴 것으로 증권사는 보고 있거든요. 당분간은 주가가 오를 만한 요소가 제한적이라서 보험 요율이 어떻게 결정되는지를 계속 지켜봐야 한다는 겁니다.",
          "topic": "현대해상의 3분기 실적을 평가하고 향후 보험료 요율 결정이 실적 개선의 핵심임을 분석했어요.",
          "points": [
            "3분기 실적 부진: 현대해상의 3분기 순이익은 1,657억 원으로 전년 대비 9.6% 감소했습니다. 실손보험 외 부문의 보험금 예실차 손실과 금리 상승에 따른 투자 손익 부진이 겹치면서 증권사가 예상한 실적을 밑돌았다고 봤습니다.",
            "보험 요율 인상의 중요성: 내년 초 결정될 실손 및 자동차 보험 요율이 실적 개선의 관건이라고 증권사는 분석했습니다. 요율이 충분히 인상된다면 관리급여와 8주룰 도입 효과와 더해져 본업의 수익성이 유의미하게 개선될 것으로 증권사는 예상했습니다.",
            "배당 재개와 주가 전망: 배당가능이익이 약 3,000억 원 감소하면서 당분간 배당 재개는 어려울 것으로 증권사는 봤습니다. 제도 개선이 정체된 상황에서 간편보험 손해율 가정 강화까지 겹쳐 주가 상승을 이끌 요소가 당분간 제한적일 것으로 증권사는 전망했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "10931",
          "link": "https://m.stock.naver.com/research/company/98191",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "iM증권",
          "title": "[iM증권] 서울보증보험 3Q26 Review: 연간 2,000억원의 배당금에는 변화 없음",
          "easy1_title": "일시적인 보험금 지급 때문에 실적이 줄어든 것뿐이에요",
          "easy1_desc": "서울보증보험의 3분기 순이익이 384억 원으로 작년보다 37.4% 줄어들었는데요, 이게 이행보증 관련해서 보험금을 한꺼번에 많이 내준 탓이거든요. 하지만 이게 회사가 구조적으로 나빠진 게 아니라 일시적인 현상이라서, 나중에 구상권 행사 등을 통해 다시 회복할 수 있다고 증권사는 봤어요. 쉽게 말하면, 잠깐 나간 돈 때문에 실적이 낮아 보일 뿐이라는 거예요.",
          "easy2_title": "이익이 좀 줄어도 배당금은 그대로 유지할 계획이에요",
          "easy2_desc": "실적은 줄었지만 주주들에게 주는 배당금은 연간 2,000억 원을 그대로 유지하겠다는 계획인데요, 회사가 밸류업 공시를 통해 주주환원 기준을 이미 정해뒀기 때문이에요. 다만 실적이 연간 4,000억 원을 넘지 못하면 배당을 더 늘리기는 어렵다고 증권사는 분석했거든요. 앞으로 전세보증 쪽에서 손익이 좋아지면 배당도 더 늘어날 가능성이 있다는 말이에요.",
          "topic": "서울보증보험의 3분기 실적을 검토하고 향후 배당과 손익 개선 가능성을 분석한 리포트입니다.",
          "points": [
            "보험손익과 일회성 요인: 이행보증에서 보험금이 많이 나가면서 보험손익이 98억 원으로 82.3%나 줄어들었는데요, 이는 일시적인 지급일 뿐 구조적인 문제는 아니라고 증권사는 판단했어요. 반면 매출채권보증이나 금융보증은 오히려 손해율이 좋아지는 모습이 나타났거든요.",
            "투자손익의 안정성: 투자손익은 287억 원으로 작년보다 16.1% 늘었지만, 금리와 환율 영향으로 전 분기보다는 18.8% 줄어들었어요. 그래도 주식 같은 자산 비중이 크지 않아서 다른 보험사들에 비해 투자 손익이 안정적으로 관리되고 있다고 증권사는 평가했어요.",
            "향후 실적 개선 전망: 증권사는 2028년이 되면 전세보증 손해율이 개선되면서 당기순이익이 4,000억 원을 넘을 것으로 예상했는데요, 이에 따라 주당 배당금도 지금의 2,865원에서 3,019원으로 5.4% 늘어날 것으로 전망했어요. 다만 경기 상황에 따라 실적 변동성이 커질 수 있다는 점은 주의해야 한다고 덧붙였어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "9066",
          "link": "https://m.stock.naver.com/research/company/98190",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "키움증권",
          "title": "[키움증권] 루닛 운영의 마술사",
          "easy1_title": "루닛이 적자 폭을 꾸준히 줄여가고 있어요",
          "easy1_desc": "루닛의 3분기 실적을 살펴봤더니 영업이익 적자 폭이 계속 줄어드는 추세거든요. 현금성 비용을 뺀 자체 조정 EBITDA(이자·세금·감가상각 전 이익)도 역대 최고치를 기록했는데요. 2025년 1분기부터 적자 규모가 꾸준히 개선되고 있다는 말이에요. 쉽게 말하면 회사가 수익성을 높이는 방향으로 운영을 잘하고 있다는 겁니다.",
          "easy2_title": "미국 시장에서 장기적으로 성장할 발판을 다졌어요",
          "easy2_desc": "미국 사업 부문인 루닛 인터내셔널을 보면 5년 주기로 계약을 갱신하면서 단가를 높이고 있는데요. 고객 이탈률도 0.9% 수준으로 매우 낮아서 안정적인 수익 기반이 마련된 셈이에요. 고객 수가 늘어나는 만큼 앞으로도 회사의 주요 성장 동력이 될 것으로 보입니다. 쉽게 말하면 미국 시장에서 탄탄한 매출 구조를 만들었다는 말이에요.",
          "topic": "루닛의 실적 개선 흐름과 자금 조달을 통한 운영 현황에 대한 증권사의 분석이에요.",
          "points": [
            "적자 폭 축소와 실적 개선: 3분기 매출액은 222억 원으로 전년 동기 대비 13.5% 늘어났는데요. 영업이익 적자 폭도 줄어들고 있으며, 자체 조정 EBITDA는 역대 최고치를 기록했습니다. 뭔 소리냐면 회사가 비용을 관리하며 수익성을 높이는 단계에 진입했다는 말이에요.",
            "미국 사업의 성장 가시성: 루닛 인터내셔널은 계약 갱신마다 단가를 올리고 고객 수도 늘리고 있는데요. 이탈률이 0.9%로 낮아 장기적인 사업 안정성이 높다고 증권사는 봤습니다. 쉽게 말하면 미국 시장이 회사의 핵심 성장 엔진 역할을 하고 있다는 겁니다.",
            "자금 조달 및 현금 보유 현황: 회사는 유상증자와 전환사채 발행으로 현금을 조달해 왔는데요. 11월 초 기준으로 약 700억 원 이상의 현금을 보유하고 있다고 밝혔습니다. 남은 전환사채를 모두 갚더라도 400억 원 수준의 현금이 남을 것으로 증권사는 추정했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 고객 수가 늘어나는 만큼 앞으로도 회사의 주요 성장 동력이 될 것으로 보입니다.",
          "body_chars": "14339",
          "link": "https://m.stock.naver.com/research/company/98189",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "IBK투자증권",
          "title": "[IBK투자증권] 비에이치아이 이익 성장세 대비 과도한 주가 조정",
          "easy1_title": "실적은 잘 나오고 있는데 주가는 너무 떨어졌다고 봅니다",
          "easy1_desc": "비에이치아이의 3분기 영업이익을 확인해 봤더니, 시장 기대치보다 약 15%나 높게 나왔거든요. 전 사업 부문이 고르게 성장한 덕분에 수익성이 크게 좋아졌다는 말이에요. 그런데도 주가는 그동안 많이 내려가 있는 상태라, 증권사는 지금의 주가 조정이 과도하다고 봤다는 겁니다.",
          "easy2_title": "앞으로도 일감이 충분해서 성장은 계속될 것으로 보입니다",
          "easy2_desc": "회사가 가진 수주잔고를 살펴보면 2조 4,580억원 규모로 전분기와 비슷한 수준을 유지하고 있는데요. 이 넉넉한 일감들이 앞으로 매출 성장을 든든하게 뒷받침해 줄 것으로 증권사는 전망하고 있습니다. 다만 코스닥 시장 상황을 고려해 목표주가는 7만원으로 낮춰 잡았다는 거예요.",
          "topic": "비에이치아이의 실적 성장세와 향후 전망에 대한 증권사의 분석이에요.",
          "points": [
            "수익성 개선과 실적: 매출원가율이 82.3%로 낮아지면서 수익성이 크게 개선됐는데요. 매출이 늘어나면서 고정비 부담이 줄었고, 설계 정밀도가 높아진 영향이 큽니다. 환율 하락으로 인한 파생상품 평가이익까지 더해져 당기순이익이 798억원으로 증가했다는 거예요.",
            "사업 부문별 성장: 배열회수보일러(HRSG) 부문이 1,722억원의 매출을 올리며 성장을 이끌었는데요. 보일러와 원자력 보조기기(B.O.P) 부문도 각각 707억원과 315억원의 매출을 기록하며 크게 성장했습니다. 특히 원자력 보조기기는 전년 대비 2,756.1%나 증가한 점이 눈에 띕니다.",
            "목표주가 조정: 증권사는 비에이치아이의 매수 의견을 유지하기로 했는데요. 다만 코스닥 시장 전체의 가치 평가(밸류에이션)가 낮아진 점을 반영해서 목표주가를 기존 11만원에서 7만원으로 하향 조정했다고 밝혔습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "12069",
          "link": "https://m.stock.naver.com/research/company/98187",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "SK증권",
          "title": "[SK증권]  육지에서 막힌 데이터센터, 바다로 나간다",
          "easy1_title": "육지에서 데이터센터 짓기가 어려워지니 바다로 눈을 돌리고 있어요",
          "easy1_desc": "미국에서 데이터센터를 지으려 해도 주민들이 전력이나 물 부족을 이유로 반대하는 경우가 많아졌거든요. 실제로 미국 10개 주에서 열린 주민투표 41건 중 40건에서 개발 제한 쪽이 이겼다는 말이에요. 그래서 육지 부지를 쓰지 않는 부유식 데이터센터(FDC)를 찾는 수요가 늘어날 것으로 증권사는 봤어요.",
          "easy2_title": "이제는 단순한 계획을 넘어 실제 배를 만드는 단계로 넘어가고 있어요",
          "easy2_desc": "올해 들어 FDC 관련 사업 발표가 잇따르면서 컨셉 단계를 지나 실제 착공이나 설계 계약으로 이어지는 사례가 늘고 있거든요. 특히 50MW급 이상의 대형 시설은 해양플랜트 기술이 필요해서 한국 조선사들이 맡을 몫이 커질 것으로 보여요. 쉽게 말하면, 막연한 아이디어였던 사업이 이제는 조선소의 일감이 되고 있다는 겁니다.",
          "topic": "육상 데이터센터 규제가 심해지면서 바다 위에 띄우는 부유식 데이터센터(FDC)가 대안으로 떠오르고 있으며, 이에 따라 한국 조선업의 수주 기회가 확대될 것으로 증권사는 전망했어요.",
          "points": [
            "육상 데이터센터의 규제 강화: 미국 중간선거를 전후로 데이터센터 개발을 반대하는 주민투표가 잇따르면서 육상 부지 확보가 어려워졌거든요. 용수나 전력 사용 문제로 인한 주민 반대가 심해지자, 육지를 쓰지 않는 수상 시설에 대한 관심이 커진 셈이에요.",
            "사업의 실물 단계 진입: 과거에는 단순히 컨셉만 발표하는 수준이었다면, 올해는 실제 착공이나 설계 계약이 체결되는 등 사업이 구체화되고 있어요. 삼성중공업이 프로젝트 제우스 설계 계약을 따낸 것이 대표적인 사례인데, 이제는 조선사들에게 실질적인 사업 기회가 열리고 있다는 말이에요.",
            "대형화에 따른 조선소 수혜: 데이터센터 규모가 커질수록 데이터홀과 전력, 냉각 시스템을 한꺼번에 통합할 수 있는 해양플랜트 역량이 중요해지거든요. 이런 대형 프로젝트는 한국 조선소의 신조(새로 배를 건조함) 영역으로 전환될 것으로 증권사는 내다봤어요."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 특히 50MW급 이상의 대형 시설은 해양플랜트 기술이 필요해서 한국 조선사들이 맡을 몫이 커질 것으로 보여요; point1 근거 원문에 없음",
          "body_chars": "18532",
          "link": "https://m.stock.naver.com/research/industry/46994",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "IBK투자증권",
          "title": "[IBK투자증권]  [AI Money Map 06] 코어위브 2026년 3분기 실적 발표 정리",
          "easy1_title": "코어위브가 시장 기대를 뛰어넘는 실적을 보여줬어요",
          "easy1_desc": "코어위브의 2026년 3분기 매출액은 3.66B달러로 시장이 예상했던 3.56B달러를 웃돌았는데요. 조정 영업이익 또한 379M달러를 기록하며 컨센서스인 246M달러를 크게 넘어섰거든요. 다만 이자비용이 늘어난 탓에 당기순손실은 709M달러로 집계됐다는 점도 함께 확인해야 합니다. 쉽게 말하면, 본업인 AI 컴퓨팅 사업은 아주 잘 나가고 있지만 이자 부담이 수익성을 깎아먹고 있는 셈이에요.",
          "easy2_title": "앞으로 들어올 돈도 많고 설비 투자도 계속 늘리고 있어요",
          "easy2_desc": "미래 매출로 이어질 수주잔고가 132.5B달러로 1년 전보다 138.3%나 늘어났는데요. AI 컴퓨팅 수요가 여전히 뜨겁다는 걸 보여주는 대목인데, 이에 맞춰 올해 연간 매출 가이던스도 13.0~13.3B달러로 높여 잡았거든요. 설비 투자액인 Capex 역시 기존보다 상향 조정하며 공격적인 투자를 이어가겠다는 계획이에요. 쉽게 말하면, 들어올 일감이 많으니 돈을 더 써서 판을 키우겠다는 전략인 겁니다.",
          "topic": "코어위브의 2026년 3분기 실적과 향후 사업 확장 및 자금 조달 전략을 정리한 내용이에요.",
          "points": [
            "기업 고객 확대와 플랫폼 사업: 올해 신규 고객의 절반 이상이 AI 연구소나 기술기업이 아닌 곳에서 들어왔고, 포춘 500대 기업의 10%를 고객으로 확보했는데요. 자체 개발한 AI 플랫폼인 포지(Forge)가 기업 고객을 클라우드 사업으로 연결하는 가교 역할을 하고 있거든요. 3분기 신규 클라우드 고객의 70%가 포지 이용자였다는 점이 이를 증명합니다.",
            "GPU 가격 인상과 매출 기회: 기존에 쓰던 암페어와 호퍼 세대 GPU 서비스 가격을 전분기보다 30~50% 올리며 수익성 개선을 꾀하고 있는데요. 2027년부터 2028년까지 순차적으로 계약이 만료되는 GPU 물량이 총 30만 대에 달하거든요. 현재 가격을 적용하면 이 물량들을 재계약할 때 약 10B달러의 추가 매출 기회가 생길 것으로 증권사는 봤습니다.",
            "자금 조달과 재무 전략: 향후 3개월간 고객 선급금과 예치금으로 약 9B달러가 들어올 예정인데요. 이를 바탕으로 자산 담보 대출을 늘려 자금을 조달할 계획인데, 조달금리는 7~7.5% 수준으로 예상하고 있거든요. 현재의 무담보 조달금리 상황에서는 2027년까지 모회사 차원의 무담보 차입을 추가하지 않겠다는 입장이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "2684",
          "link": "https://m.stock.naver.com/research/industry/46993",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "iM증권",
          "title": "[iM증권]  기름뿜뿜 Weekly: 3Q26 Review 및 섹터 내 선호도 점검",
          "easy1_title": "지정학적 위험이 줄어들면서 유가는 점차 안정될 것으로 보입니다",
          "easy1_desc": "중동의 전쟁 상황이 조금씩 진정되면서 원유 수출량이 전쟁 이전 수준의 97%까지 회복되었거든요. 덕분에 유가가 80~90달러 수준에서 안정을 찾고 있는 모습이에요. 증권사는 지정학적 위험이 이제 정점을 지났다고 판단하고 있는데요. 쉽게 말하면, 원유 공급이 다시 원활해지면서 유가도 하향 안정화될 가능성이 높다는 말이에요.",
          "easy2_title": "정유와 화학 업계의 내년 실적은 서로 다른 흐름을 보일 전망입니다",
          "easy2_desc": "정유 부문은 2027년에 정제마진이 좋아지고 이익 체력이 강해질 것으로 증권사는 보고 있는데요. 반면 화학 부문은 에틸렌 증설 물량이 1,000만 톤에 달해 업황 부진이 이어질 것으로 예상하고 있어요. 그래서 화학 쪽은 스페셜티 업체 위주로 주목해야 한다는 겁니다. 쉽게 말하면, 정유는 회복세가 기대되지만 화학은 여전히 어려운 상황이 지속될 거라는 말이에요.",
          "topic": "정유, 화학, 에너지 섹터의 3분기 실적을 검토하고 향후 업황과 선호 종목을 점검한 리포트입니다.",
          "points": [
            "정유 부문의 실적 흐름: 정유 업계는 3분기에 정제마진과 유가, 윤활기유 강세 덕분에 시장 기대치를 넘어서는 실적을 냈습니다. 4분기에는 유가 하락으로 인한 재고 손실이 있을 수 있지만, 2027년에는 정제마진이 개선되면서 이익이 늘어날 것으로 증권사는 봤습니다.",
            "화학 업계의 업황 부진: 화학 부문은 납사 가격 상승분이 제품 가격에 제대로 반영되지 못해 수익성이 나빠졌고, 환율 하락과 운임 상승까지 겹쳐 대부분 적자를 기록했습니다. 2027년에도 대규모 증설로 인해 업황이 계속 어려울 것으로 증권사는 전망했습니다.",
            "에너지 및 유틸리티 점검: 유틸리티 기업들은 연료비가 올라 시장 기대치를 크게 밑돌았는데요. 다만 배당 수익률이 높은 지역난방공사와 SK가스 등은 시장 변동성이 커질 때 매력이 부각될 수 있다고 증권사는 분석했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "긴 원문 — 앞 30000자만 읽음(전체 52799자)",
          "body_chars": "52799",
          "link": "https://m.stock.naver.com/research/industry/46992",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        }
      ],
      "fed_speeches": [
        {
          "file": "2026-10-08_연설_Waller_waller20261008a.md",
          "title": "[연설] 2026-10-08 · Governor Christopher J. Waller",
          "summary_lines": [
            "\"금리를 올린 건 갑작스러운 결정이 아니에요\"",
            "\"시장에 방향성을 알려주되 유연함은 유지할 겁니다\""
          ],
          "addr": "처리-6",
          "source": "v2_secretary/결과/연준연설/2026-10-08_연설_Waller_waller20261008a.md"
        },
        {
          "file": "2026-10-14_연설_Bowman_bowman20261014a.md",
          "title": "[연설] 2026-10-14 · Vice Chair for Supervision Michelle W. Bowman",
          "summary_lines": [
            "\"은행이 위험하다는 걸 알고도 제때 조치하지 못했습니다\"",
            "\"앞으로는 누가 책임질지 확실히 정하고 빠르게 움직이겠습니다\""
          ],
          "addr": "처리-6",
          "source": "v2_secretary/결과/연준연설/2026-10-14_연설_Bowman_bowman20261014a.md"
        },
        {
          "file": "2026-11-10_연설_Bowman_bowman20261110a.md",
          "title": "[연설] 2026-11-10 · Vice Chair for Supervision Michelle W. Bowman",
          "summary_lines": [
            "\"물가가 생각보다 안 잡혀서 걱정이에요\"",
            "\"AI 투자 열풍이 경제에 어떤 영향을 줄지 지켜보고 있어요\""
          ],
          "addr": "처리-6",
          "source": "v2_secretary/결과/연준연설/2026-11-10_연설_Bowman_bowman20261110a.md"
        },
        {
          "file": "2026-11-10_연설_Waller_waller20261110a.md",
          "title": "[연설] 2026-11-10 · Governor Christopher J. Waller",
          "summary_lines": [
            "\"물가는 여전히 너무 높아서 금리를 더 올려야 합니다\"",
            "\"고용 시장이 안정적이라고 해서 꼭 건강한 건 아닙니다\""
          ],
          "addr": "처리-6",
          "source": "v2_secretary/결과/연준연설/2026-11-10_연설_Waller_waller20261110a.md"
        },
        {
          "file": "2026-11-12_연설_Barr_barr20261112a.md",
          "title": "[연설] 2026-11-12 · Governor Michael S. Barr",
          "summary_lines": [
            "\"미국 사회의 빈부 격차가 생각보다 훨씬 심각한 수준입니다\"",
            "\"인공지능이 부의 불평등을 더 키울지 고민해 봐야 합니다\""
          ],
          "addr": "처리-6",
          "source": "v2_secretary/결과/연준연설/2026-11-12_연설_Barr_barr20261112a.md"
        },
        {
          "file": "2026-11-13_연설_Jefferson_jefferson20261113a.md",
          "title": "[연설] 2026-11-13 · Vice Chair Philip N. Jefferson",
          "summary_lines": [
            "\"새로운 기술이 나와도 생산성이 바로 오르지는 않아요\"",
            "\"기술 투자로 경제가 커지지만 물가 압력도 생겨요\""
          ],
          "addr": "처리-6",
          "source": "v2_secretary/결과/연준연설/2026-11-13_연설_Jefferson_jefferson20261113a.md"
        }
      ]
    },
    "ch4_news": {
      "title": "챕터 4 · 뉴스 사건 묶기",
      "addr": "처리-3",
      "status": "돎 (하루 AI 2콜 독립 묶기 대조)",
      "counts": {
        "news_in": {
          "val": 145,
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        "events_out": {
          "val": 9,
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        "single_out": {
          "val": 97,
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        "all_clusters": {
          "val": 106,
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        "bad_numbers": {
          "val": 0,
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        "calls": {
          "val": 2,
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        }
      },
      "events": [
        {
          "rank_by_count": 1,
          "name": "젠슨 황 엔비디아 CEO 사퇴 및 복귀 논란",
          "easy": "젠슨 황 엔비디아 CEO가 사퇴한 뒤 폭언 논란이 불거지며 파문이 일고 있습니다. 사퇴 나흘 만에 복귀를 추진하며 백악관을 설득하고 있다는 소식도 들려오는데요. 엔비디아 내부에서는 경영진 쇄신 요구가 나오고 있고, 시장에서는 이번 사태가 삼성전자와 SK하이닉스 등 국내 반도체 기업에 어떤 영향을 줄지 주목하고 있습니다.",
          "quote": "임원에 물병 던지고 폭언…젠슨 황 '민낯' 증언 나와 - 머니투데이",
          "member_count": 11,
          "sample_articles": [
            {
              "n": 89,
              "title": "젠슨 황, 사퇴 나흘 만에 복귀 추진…머스크까지 나섰다, 삼성전자·SK하이닉스 웃나 - 핀포인트뉴스",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE12aVBuNTVqRnNSdGFDVExJbEQtRnR4UXJEQzFSaFk2SkVONUdsU0lVYk9pM3A5TGRLN2pfRUdCXzlrSG9HYXNqZW4yYTVWTFZwem1Obk1VdS1NSzk2aDhfSFdOTFZ5Wm9kVm9PT0ptWUVsT3PSAXdBVV95cUxNSEQxckFyTGJoaktVUHFsUjdWTV9uN3VHOFZValpqdTR6bHZBM1B6RTR6YUE0eFJ6dnc4VVNfTWdUa3E5bTRfWThyZ0lDa1paemRtTE1kbmNRM3NRVXBBR2NPbURia0pBVVFvbDNYNHBFTVlaVXNXbw?oc=5"
            },
            {
              "n": 93,
              "title": "[글로벌 투자노트] 젠슨 황 퇴진이 삼성전자·SK하이닉스에 미칠 영향은 - 뉴스임팩트",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTFBYWTZkbmJzNWNIRWxfR2ZTZDhNcFNiQjU3MDNHNk9YV2ZEV0xTMlBwZ3VxWWFvbVp0dTJjNUl3SjN4cnh5VzVFVGEwRktjc0NLend0NzNiU2Zad0pZSjBGV0VNWmltcDFuaEt2RDE0WmdFQQ?oc=5"
            },
            {
              "n": 97,
              "title": "[박종면칼럼] 젠슨 황 퇴진, 삼성전자·하이닉스 누가 더 아플까 - 블로터",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFB2bXF6Z0RseThkMWVGVW5hMHRGS3BCUVpmQkN1Nl9GMzFnd1QyQ2FXS1hxZVZwVHVWM2d3a3NHSFZiLTZpbzVrY2lZUlFnZkVJNlJ0bExrVGZMRGJ1RGUxWWRwdWQzTkVf0gFsQVVfeXFMTWVQUk9SdGR1WHVCQm1uNENTN0RlOHIzNDEwWUNZR25IZkFnTDFVQWFiejF1T2tXQ1B2eV9vMzdyNlBZUExrQ2dtdEtlaGktQlA5OEJpblNHOEp6MS1PLW9sdG9wWTYtX1VVd0VF?oc=5"
            },
            {
              "n": 98,
              "title": "\"젠슨 황, 엔비디아 CEO 복귀 논의 중‥백악관 설득 시도\" - MBC 뉴스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE1oUFdIWUMxUzVrM2NpdGZvbFhMdTJzV1JyX01WOHZ4S2Vxdks0WFprZkdjb1VyTnNNeXJvWjVkRGpvSjduN3hmSEM2NHlIY3JwZlhoclA5VnhQekpxQUNoaXFSckdOS0p3ZUxwLWltT0lmTEd10gF0QVVfeXFMT3RSRFRWejZjN1RIVXpmVFdkb2V2Q2FManVKanZvMWEwejFvRWxISXh6N0paWW0xLVJUV2hrb1VyV0k0RkUzS2tTSm13b0dwbG56WVRDVlhHZm5GWGp2VlhxRlpvZWlhSVJ2R2Jvdmc5SkRpT3A?oc=5"
            },
            {
              "n": 99,
              "title": "‘엔비디아 탄생지’ 자랑하던 미 식당…젠슨 황 사퇴 즉시 기념판 뗐다 - 한겨레",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiggFBVV95cUxOd2Fpd3VFODJvaWRmcU5nbHFPY0dfcWg3WmlLbTJJQk1KUldLVklOVkZSU3R2RTdmczFybmE4RkhGSGJCb0lVNVNSZGF5bEZTN01GMmZPSnBKdG1WTTdEUVhqZ3hoREVhMzNkU2tkZ0pEM1hkV29rM2xlM2lkUFEzNzBn?oc=5"
            },
            {
              "n": 102,
              "title": "사퇴 나흘 만에 복귀 시도?…젠슨 황, 엔비디아 복귀 위해 백악관 설득 착수 - KBC광주방송",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9KRnU5WFdFY05DeUhwdmp0ZzR3SGttaEF4T3dUdDUteTJWa21lZnVDenMwX3NUeElScXlFQjJYLW1maGJqb1ZRWnY4SG5vMzdPVXk2LWRrenF6ckRXNmdZSw?oc=5"
            },
            {
              "n": 105,
              "title": "“젠슨 황, 나흘 만에 엔비디아 CEO 복귀 타진” - Chosunbiz",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMingFBVV95cUxPaWluNGVGVWZMWTZ1bVF1WGhuaVYxQzlKT0ZhLUw5Ty1nTHI4bExqTlE5LXNLQnVFMVJkTlp5TTNxV1VrNW4tTGlMUDl2cmVPbTNSVlIzWlRLRjdOc2RjV3cxVWltTXlIa2JacjhGTktOQmxtNDZnWHpndDlPemRyeVpRNmFZUDJmdTQ3eldYSENVMUtIajNvbVZXUDNHUdIBsgFBVV95cUxOV1R0OEFpUzVfV0RibXVnS2wyNTQ1Y0d1RExzQnRkZVQzNUtZQXo3b3h1clFvSlJreFpRQlVwcW9uRk8tbWFfOG11ektkYXBlYi1Nb25EdVZHZE9scm1mMndoaS1wYmZnZE1"
            },
            {
              "n": 189,
              "title": "젠슨 황, 이번엔 '폭언 논란'…\"임원에 '죽었으면 좋겠다' 발언\" - 더팩트",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE81emNaOVJxMVIwd3E3RXNadlNvX1d1ZnctNUEycWFsSElKV1FYT3JmOWhhb2V0aVR6S25lb2IxMWFpUXc0TVk5bWFZNHM1Q1VtYVHSAVJBVV95cUxPNXpjWjlScTFSMHdxN0VzWnZTb19XdWZ3LTVBMnFhbEhJSldRWE9yZjloYW9ldGlUektuZW9iMTFhaVF3NE1ZOW1hWTRzNUNVbWFR?oc=5"
            },
            {
              "n": 190,
              "title": "\"당신이 죽었으면 좋겠다\"…젠슨 황, 엔비디아 내부 증언 파문 - 파이낸셜뉴스",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1pM3U3X0dmSl94WVdCX0dUckhkX1hIdHcyMEY5STdyd0NGZ255bXBhbjAwdXhjbkJkT2szUFVHYkQzckxPMDhsWGstVlQ1UC1JZEJBU2Q0RFdNUQ?oc=5"
            },
            {
              "n": 192,
              "title": "잘나갈 땐 조용하더니… 쏟아진 폭로, 두 얼굴의 젠슨 황 “죽었으면 좋겠다” 섬뜩한 폭언에 물병 투척까지 - 데일리25",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTFB4RXd3dVRILW5rMlFEWFJRQUJ6cC01SkVfbzdiNEhHc2ZyOWZEa3RxaFNiTUxzZkNSNHBOaEQzYjZFUEU2a2diRldBaGJUTzdWQ1dYMzdhRTF1NlY2TkxSb1J2QlVKamRuQXNVUA?oc=5"
            }
          ],
          "flags": [
            "대표 제목 인용이 원문과 다름",
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 2,
          "name": "에코프로 포항 배터리엑스포 참가",
          "easy": "에코프로가 포항에서 열린 국제배터리엑스포에 참가해 차세대 이차전지 소재 기술력을 선보였습니다. 포항에 3.3조 원을 투자해 소재 생산과 재활용 생태계를 구축하겠다는 계획도 함께 밝혔는데요. 쉽게 말하면 에코프로가 포항을 중심으로 배터리 소재 분야의 기술과 생산 체계를 강화하고 있다는 겁니다.",
          "quote": "에코프로, 포항 배터리엑스포서 차세대 소재 기술력 공개",
          "member_count": 7,
          "sample_articles": [
            {
              "n": 174,
              "title": "에코프로, 국제배터리엑스포2026 참가…포항에 이차전지 소재 생태계 구축 - 팍스경제TV",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9kbm9JTTlybmhMMlAxVEpvVE9DYW0zMVRYay1IcmpyVFBqYUYzMjN1SXp4SmZIeGxZOHRMRklsalk3UE4wRTltMllRVENKQ1ZFdTltekdJOUNQTGlWeEpQbjZiTExUS1pa?oc=5"
            },
            {
              "n": 175,
              "title": "에코프로, 국제배터리엑스포서 이차전지 상생 성과·차세대 기술 소개 - 뉴스핌",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE5EMkFPeWhKNEdjdzBpdm1Pd29SNWkyRUR5VFkzaEx1S2lwYi03T0VFampQMnRwUDB1SW51dUF6eTBSdEQyNzVfV29FYnZKbTQyY01SRy1FX2YyamNQ?oc=5"
            },
            {
              "n": 176,
              "title": "에코프로, 포항에 3.3조 투자…배터리 소재 생산·재활용 체계 공개 - 뉴스웍스",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9ObkxobzBNVVVSd0IxandQU25XVFJOOVdPS3pmcGxrX3AyM0lsbHVlRVRMMTR3cWtaQkZacUt5UzBELWoyam05YnZ3NnJaZ3N4RTR3eG1kbEJkMEpfcW5WbndGSlczeFowU2pQWDVTNNIBc0FVX3lxTE1KSUpVWHJlbldmamNoNm15cW5DVjV3QUJ3VUlsTzdodG1pVUw1eGZ3UE16RGNldnV1WjFpYXM4dGZZNGVoY2lJNjBOVzY5NG9rVWlLeE1IUEltbzJBekp2c01vZjZWRG9IOFpRQ2JUMGlEaXM?oc=5"
            },
            {
              "n": 177,
              "title": "에코프로, 포항 국제배터리엑스포 참가…차세대 소재 기술 선보여 - 경북매일",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBTazBmNW1rVU02cFJZQlpOdmhybkh5NFdaNkNXbldFRm9CV0NycjlrdWRLNDlxM0d1a25zcEtrMEtqcTJ3VmRGTzlSOVFib3N4RnRBaU9Lc1BKQQ?oc=5"
            },
            {
              "n": 178,
              "title": "에코프로, 국제배터리엑스포 포항 참가…소재 기술력 선봬 - 연합뉴스",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5ydWJybzlKa0RnZjU5bGNxWmhuN0xyaDVEbnNsSDlGWGl0ODJUTXZLZGNWN3hhSkZrbGVnXzc3MjI4anpLdV9XNmljYmt6Vmt6NWJlRTRsa0hzQWZTLTViX9IBYEFVX3lxTE5ydWJybzlKa0RnZjU5bGNxWmhuN0xyaDVEbnNsSDlGWGl0ODJUTXZLZGNWN3hhSkZrbGVnXzc3MjI4anpLdV9XNmljYmt6Vmt6NWJlRTRsa0hzQWZTLTViXw?oc=5"
            },
            {
              "n": 179,
              "title": "에코프로, 포항 배터리엑스포서 차세대 소재 기술력 공개 - https://www.2news.co.kr/",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5RQXMxZUVWbTlNck5QLVBaSHQyeXk5TGhvQ3FhQWw3SDZCM2FVenZSc0hUd0puWGtMUTJfVk81Q0NQVlFnblEwV21aUHhTN19CUTQtZFVCUFJLWktQbUM0YWVvdmN2NzJD?oc=5"
            },
            {
              "n": 180,
              "title": "에코프로, 포항 배터리엑스포서 차세대 양극재 기술 공개 - 디일렉",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTFBxYUdGMU9DYnlIWGVzS2I4X3ZjRWUwcnJMdnRna0g3TEZiZ1pUMThCdXNrRjBrY1NPbVphMnE4LU9hdkhSd3hLWlJVQzJrb2s1R2l6WGxCOXN6TjA0QlpGQkR3X1owQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 3,
          "name": "LG엔솔·삼성SDI 북미 데이터센터 배터리 시장 공략",
          "easy": "LG에너지솔루션과 삼성SDI가 미국에서 열린 에너지 전시회에 참가해 AI 데이터센터용 차세대 배터리와 ESS 기술을 공개했습니다. 북미 데이터센터 전력 시장을 정조준한 것인데요. 쉽게 말하면 두 기업이 AI 데이터센터의 전력 수요를 잡기 위해 배터리 솔루션을 앞세워 경쟁하고 있다는 겁니다.",
          "quote": "LG엔솔·삼성SDI, 북미 AI 데이터센터 전력시장 정조준",
          "member_count": 7,
          "sample_articles": [
            {
              "n": 112,
              "title": "삼성SDI·LG엔솔, 미국서 차세대 ESS·데이터센터 배터리 공개(종합) - 연합뉴스",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFBJQWtuVS1pWlNFQmhIMmtiU1lCRXcyc1JHczdfWWI1MGdJaC1xNWdBNE80OF9zRGFJb1FlWkt5bVl2SVlJZldjSWExNHFJSFl1VFYzVWh6VHlYTThxSmVMX9IBYEFVX3lxTFBJQWtuVS1pWlNFQmhIMmtiU1lCRXcyc1JHczdfWWI1MGdJaC1xNWdBNE80OF9zRGFJb1FlWkt5bVl2SVlJZldjSWExNHFJSFl1VFYzVWh6VHlYTThxSmVMXw?oc=5"
            },
            {
              "n": 113,
              "title": "삼성SDI·LG엔솔 미국 에너지전시회 참가, ESS·AI데이터센터용 차세대 배터리 공개 - 비즈니스포스트",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE15M0xHeU05cUt2dGVjT3J5VWY4U1JpR3gxRC1ZX21sS3J5U3lEWTZadW1rYjBGeENNVWJlbk4ybU5HcVpXekkwaC1oUnBnZ2tiMzlOUFo3MnIyZ19pWTZyMFA3VEVXSDFJUXdQWkxJN3NpTG8?oc=5"
            },
            {
              "n": 114,
              "title": "삼성SDI·LG엔솔, 美서 AI 데이터센터 배터리 맞대결…ESS 시장 공략 - SBS Biz",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiU0FVX3lxTFBYb2JPQ0xab3h2Y3RPNHAzN1JXcUpOamJWeDVadXJ6ZG1kZmU5Rnd0eUxaTzk5dXN1QkZIazBES2M2ZnFFbk9JTzdtaDdmREVqQVZR0gFYQVVfeXFMUHNvRmRFVWRqZ1NHVmNtZkp2alNDRUNZdUFRWE40MHEtaHBfUk1YM1VxMFZRTXczckdaZVRWdmhIeGxLSFBSa2tva1FRZnhBWmROdzlmbTRSaQ?oc=5"
            },
            {
              "n": 115,
              "title": "LG엔솔, AI 데이터센터 전력시장 공략…차세대 배터리·ESS 공개 - 머니투데이 - 머니투데이",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE53a0tEcWNVU24tWW1abGdKcnR4SzJWd19idG8wSG55U1ZsYVFwczZ6Sm14cDBvbDFtWWFScllFRVBQeGpKTllyaTZNNnYyOHJxa25IdC04ZnNxR1UxdFd4R2tmU0k5elpPdmd0MFB5V190QdIBckFVX3lxTE53a0tEcWNVU24tWW1abGdKcnR4SzJWd19idG8wSG55U1ZsYVFwczZ6Sm14cDBvbDFtWWFScllFRVBQeGpKTllyaTZNNnYyOHJxa25IdC04ZnNxR1UxdFd4R2tmU0k5elpPdmd0MFB5V190QQ?oc=5"
            },
            {
              "n": 116,
              "title": "삼성SDI·LG엔솔, 미국서 차세대 ESS·데이터센터 배터리 공개(종합) - 매일경제 마켓",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE4zc1plQTJ0MVoxQnA5d3ZqYWdMdkpJMnVNb2dRZ2lNTVlNQjE2SkRIU3h5NVlVakJiQU5fT2ZHMUZ1Tk4yQkRDX1dVUjhFc2RRUEE?oc=5"
            },
            {
              "n": 117,
              "title": "LG엔솔·삼성SDI, 美 RE+ 출격...AI 데이터센터 전력시장 공략 - 아주경제",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE02aUQ1UjhCb2FCUDVpT2xxWXNUb2tJNmVDOTJrTXUwR3U0UEZYRTJvdkpxNmFzV2xNWHB0TG9lLXZrenkwVVdFTVlodTZpaDVjQVk3MGxsMDPSAVhBVV95cUxNNmlENVI4Qm9hQlA1aU9scVlzVG9rSTZlQzkya011MEd1NFBGWEUyb3ZKcTZhc1dsTVhwdExvZS12a3p5MFVXRU1ZaHU2aWg1Y0FZNzBsbDAz?oc=5"
            },
            {
              "n": 126,
              "title": "LG엔솔·삼성SDI, 북미 AI 데이터센터 전력시장 정조준 - 이뉴스투데이",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE42dkI4dWVjWWVtZ244QUw0NzBteC0zTDRFVTFGTklRNnl1YlN4Z2RfRUJtRm5JR3ZMbHJYNTR1QmRXaDM5V3Q2aVE0WkRBZ0YtRTRMbGFoVFBIekxlaFdZa25DZ2dWTUNqZ2h1WldnQ2vSAXRBVV95cUxPaW5VeDBaRVhFRXdCbVdfM1E5aUh2VUxOT3FsQktXejVSUlQ5dWJTZVFJSWJjQUVkQlhrNUJlRVp4NXNuRlNXQldQZ2huUlpXSURmOFpnRzVubjF1dWN1TkRFVHY0cC02Tzk1bzFCQ2c5T3g0Ng?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 4,
          "name": "한국전력 전기요금 인상 압박 및 재정 부담",
          "easy": "연료비 상승에도 전기요금이 제자리에 머물면서 한국전력의 요금 현실화 압박이 커지고 있습니다. 전쟁과 AI 전력 수요 증가, 사채 한도 문제까지 겹쳐 재정 부담이 눈덩이처럼 불어나고 있는데요. 쉽게 말하면 한전이 빚의 늪에서 벗어나기 위해 요금 인상이 불가피하다는 목소리가 나오고 있다는 겁니다.",
          "quote": "연료비 상승에도 전기요금은 제자리…한전, 요금 현실화 압박 커졌다",
          "member_count": 7,
          "sample_articles": [
            {
              "n": 57,
              "title": "한국전력, 4분기 적자전환 우려…목표가 4만원으로 하향-유진 - 마켓인",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE9LQWVuTkY4NFVMVmtJeENxS0xBTkNuY2xEbnp4c1FnMkNEdVlFbUdUZHhWNk5JbjBFTDRwcTR5M1BkMUdZU3RlZkM5d0FRSFZCZEVCd2pQYzdWdjZQUnFVbXpLRVFoLVhGaDlpVDVYZm9YZTA?oc=5"
            },
            {
              "n": 60,
              "title": "기름값 잡으려다 재정 부담 눈덩이···한전·가스공사도 '빚의 늪' - 서울파이낸스",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1IZm91Ym12Sko1Skh2THIwX2ZqZURCeEdRcTN1U3YzRU5vMmsxUWt2TkZRR1l6NE5hR0FzRmk5WGNGczA3b3g3VjQ2NkMtVDN6NkRDTkxTYTQ3VGk1UkEwVWNaanRVUk1DckE?oc=5"
            },
            {
              "n": 63,
              "title": "유진투자證 \"한국전력, 3Q 실적 기대치 하회…목표가 4만원↓\" - 이투데이",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5yME41MFlITzhEVll6SlhVMHFRcXg0c3RqVUEwenRsLTRYMkJOREJIOVNPeWlUN2FRWmY3aEdrX2Y0R1ota3M4YUNfb2JRY1l0b2JlM2RoMU1jMllpdVV1cE5DRGtZVXZkaXNXaTRhNHNYQnFV?oc=5"
            },
            {
              "n": 118,
              "title": "전기요금 인상 압박 커진다…전쟁·AI·사채한도 ‘첩첩산중’ 한전 - 국민일보",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9mTm96WWRYUTN2NGtMTnp3UE83MWQ2cUVRYzdicmFTRnhFNWUyc0dBUmEwczBZd0NaaDZOc0tabWZqZ2tpY1dNVFZZN2NDOHNDZ0pkSktTOVo?oc=5"
            },
            {
              "n": 122,
              "title": "[사설]석유 전기 가스 쌓이는 청구서… 단계적 요금 현실화 불가피 - 동아일보",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMidkFVX3lxTE5yMWpmQkNUVzhpb1ZJZzJWUXVORWotdDY0Q25vTFdpVFNrcWVpS3lzZHpVNXJ2WjdvRzlXcEZuVzEzeGx1OU1HbVh4TVl2TEduc0FIYnBubmxhWnhxczNzUVY1UFpzQ1ExcEU0V3REeXNfQndZWUHSAWZBVV95cUxOdE45RXk0ZzBReHJQSXFMOVlNbV95VFptdWg2NEpEU1pia2lKVjNtQ1FITzd6NmdxODZyU1RfQ1p1OGY0NWNOQ2R5Y25KOUQza0JyalhZQnN2NHppZUJCTTZYUzlGS2c?oc=5"
            },
            {
              "n": 133,
              "title": "구리가격·SMP↑…한전, 투자·전력구매 ‘나갈 돈’ 늘어 투자 부담↑ - 에너지경제신문",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1SZlRwU2lqa1FkemJrQ1VjQjZMV1ZRdXIyajNia1RleGFGb0twM3Z2dnpaMlBuQVZrNVB5Q0I0ZmxNQjVaZWowZ1E4SklIVWw1V3hKMHQwSG1LMDQ?oc=5"
            },
            {
              "n": 135,
              "title": "연료비 상승에도 전기요금은 제자리…한전, 요금 현실화 압박 커졌다 - 한국아이닷컴",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1UajBMVUdxWVhwczBUNU1PVDlBSDVRRENTbHRCcmJPbXhLZmNvNkVxQU1zNEZ6ZnRpU3JWckd0NjRKVlJra3h0cHR3dFN0aGsxS3VPQVd2alhCUDhPcFJldlZoYVRDdlFpd0JDbkczZ9IBb0FVX3lxTE1UajBMVUdxWVhwczBUNU1PVDlBSDVRRENTbHRCcmJPbXhLZmNvNkVxQU1zNEZ6ZnRpU3JWckd0NjRKVlJra3h0cHR3dFN0aGsxS3VPQVd2alhCUDhPcFJldlZoYVRDdlFpd0JDbkczZw?oc=5"
            }
          ],
          "flags": [
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 5,
          "name": "삼성·SK하이닉스 AI 데이터센터 시장 공략",
          "easy": "삼성전자와 SK하이닉스가 반도체를 넘어 AI 데이터센터 인프라 시장으로 사업을 확장하고 있습니다. 삼성은 계열사 통합 역량을 통해 AI 인프라 도전에 나섰고, SK하이닉스는 HBM4 생산 능력을 키우며 AI 수요에 대응하고 있는데요. 쉽게 말하면 두 기업 모두 AI 시대의 핵심인 데이터센터 시장에서 주도권을 잡으려 한다는 겁니다.",
          "quote": "삼성, 반도체 성공 AI 데이터센터로 확장 추진…FT “계열사 통합·수익성 검증 과제”",
          "member_count": 4,
          "sample_articles": [
            {
              "n": 81,
              "title": "HBM 다음은 첨단 패키징⋯ 삼성·SK, AI 반도체 주도권 경쟁 새 전선 - 브릿지경제",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE0tS3hRQ0t6Y21iVE5FXzI0NXdlWExpa01vY1pCN0xWMl8yM1d0WERyaVd0ZHktRTZRTFVFeUdDMTIwZExzU2NpZWppTmFYakxGaEZySkNXYXE4dw?oc=5"
            },
            {
              "n": 83,
              "title": "“AI 불확실 우려에도 수요 견고”…SK하이닉스, HBM4 생산능력 더 키운다 - 전자신문",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE12dGhnZ3RNdW53R3pGNXdWUUdiRmlPLV9vMVNNQXVBNGlKNkozUWZVWFRtaVBBb25LcTQwTUhadjZfYWgwSjd0VEFIMkZldw?oc=5"
            },
            {
              "n": 84,
              "title": "삼성, 반도체 성공 AI 데이터센터로 확장 추진…FT “계열사 통합·수익성 검증 과제” - 아시아투데이",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5rVV9fVFhoU1ZfMkhXSUd0NWM4LVZSWGlvVWZ5RlREM2FKb1lmeW4tbE1KXzl3TEM1eFVjdlRpMWlxTmQyb3MtQzd4ejBISWhZZVpDTGkzZEQ0RW53bFZreWZsT19sV2E5ek1KMVdn?oc=5"
            },
            {
              "n": 92,
              "title": "FT “삼성, 반도체 넘어 AI 인프라 도전”…통합 역량 관건 - 글로벌이코노믹",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOQ3pfcDNDNWF0WTZldzFnNHJzcmh1a2lFOE9zSGtRSThrQV9qekVaRXV0a1ZjV3NxeGhaZElEdm1yZHlNQTQ3SmlCV1NjUEgwU0JWRlZIOThGWWFuS0RIVzkwRy1uTURVZkhhY29FTDhhSXExanJ1S0Z1ZHp0UVBJMW01dzRHaF9I?oc=5"
            }
          ],
          "flags": [
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 6,
          "name": "수도권 데이터센터 전력계통영향평가 시행",
          "easy": "수도권 데이터센터 입지를 제한하기 위해 전력계통영향평가가 본격적으로 시행됩니다. 75점이라는 허들을 넘어야 입지가 가능한데, 데이터센터의 지방 분산을 유도하려는 목적이거든요. 쉽게 말하면 수도권에 데이터센터가 몰리는 것을 막고 전력망 부담을 줄이겠다는 겁니다.",
          "quote": "[에너지이슈] 수도권 데이터센터 '75점 허들' 넘어야 입지 가능...'전력계통영향평가' 본격 시행",
          "member_count": 4,
          "sample_articles": [
            {
              "n": 69,
              "title": "데이터센터 지방 분산 유도…수도권 전력망 심사 문턱 높인다 - 이데일리",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNRmZyM2pZSUdDTHM1alJHTHgzemdLUEI1UXJfWlFTTXlCcFJCbmJVUUtzbTBCVS1LZW9GVnJwdTB0MVhCYmhCY1B3a1ZXLVVqc3NWamExVThWNU5lQkJ3eVV6LVJWRGdQTjJUaEdKZ1piNFVEaHRnM3lDdzVnWEJtNg?oc=5"
            },
            {
              "n": 127,
              "title": "[삐그덕거리는 데이터센터 열풍/③끝]18.4GW 메가프로젝트…확장보다 '수용성'이 과제 - 비즈니스플러스",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9uMUZBWE1mb3QyMk5rT2s0cmJFRnFfZV9qV2dmaG40cDZiVTl0QTBMZWlCTDEwMHhaMUdiak9NaXFhNjVJazVOcXEzT3hWTGZkVkxIX2Yyd3hYRG9SV19TSk1wN0lUVjFEZThpVjNn?oc=5"
            },
            {
              "n": 128,
              "title": "전력계통영향평가 본격 시행...수도권 데이터센터 기준 강화 - elec4",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9LbVU2emE1eXhLRjdHclJxR1RJRE8tRUdQaHNVQVV1S1BlRk5kTTI1V29fVy0zMU1oczBLRHl6MGx3X3E4ZEpnanQ1YWc4QTJ5WWhuRm04RzRiTmQzeEMyZjFnWjlkcGd2aEFubHFn?oc=5"
            },
            {
              "n": 130,
              "title": "[에너지이슈] 수도권 데이터센터 '75점 허들' 넘어야 입지 가능...'전력계통영향평가' 본격 시행 - 산경e뉴스",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFB2NUhxQ2g4VnBVUjc3XzNaVEdnMnhXbnFnYi1GZXdqUzFXRkowak44YzdWRWdEVUdTSk5YcFRYV3FFNl9CazhpNDkzU21feEtQQm5vUXBVRm9kdXRJc09uX0tVcDcxRG8?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 7,
          "name": "신약 임상시험 승인 기간 단축",
          "easy": "한국 식약처가 신약 개발을 앞당기기 위해 임상시험 승인 기간을 10일로 단축했습니다. 미국과 영국 등 세계 각국도 심사 속도전에 뛰어들고 있는데요. 쉽게 말하면 임상 진입 속도가 곧 신약 개발 경쟁력으로 이어지기 때문에 각국이 규제를 완화하고 있다는 겁니다.",
          "quote": "식약처 임상시험 승인 10일로 단축…미·영도 심사 속도전 : 경제",
          "member_count": 4,
          "sample_articles": [
            {
              "n": 1949,
              "title": "글로벌 신약 임상 '규제 속도전'…한국 승인 10일·美 실시간 - 전자신문",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE5MSl9uT190MEFiZXRfR2VEWXp2UWRhNzA2S0xzOGVZMS0tR3pQZkhkYlB0ZkZOZDYzZVJJODZqX0RVdkszWHo0MnpwVTg3UQ?oc=5"
            },
            {
              "n": 1950,
              "title": "\"임상 진입이 곧 경쟁력\"…美·中·英 이어 韓도 신약 임상 '속도전' - www.ebn.co.kr",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5yRXF5d1dHWVZXX1d3NWpxa1RKRFZ0aUhjMVg2d2RHUldsMXJnd01memhfT3pndG1GNG9rT0g4UHNwYnZuSTY3WFVqb2dtNFFMdmFuTlhKVV95NTFON1pPV25lbHY1WG9U?oc=5"
            },
            {
              "n": 1952,
              "title": "식약처 임상시험 승인 10일로 단축…미·영도 심사 속도전 : 경제 - 재경일보",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE1uNEZ1WDA4VTk3WnBwaTlMSnJDUllrSDAwNG52X3lfb2pud3VTRENUdVJjV09WUGJyM0VxUVVObk85VDFLblhlWlBNMA?oc=5"
            },
            {
              "n": 1954,
              "title": "신약 개발 앞당긴다…세계 각국 임상시험 '속도전' - 연합뉴스",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFB6LVltTEVpaGluY3FKYy1jVGdmWDBpbWNlbmZoTGMyb2NmUVNKNU9SbTBfeExEd1VNZ2l0VWNTUGRGdHp2b2JvY0hMckZtc1ZZYWRSS2NaVWZSUUx5SlZtbtIBYEFVX3lxTFB6LVltTEVpaGluY3FKYy1jVGdmWDBpbWNlbmZoTGMyb2NmUVNKNU9SbTBfeExEd1VNZ2l0VWNTUGRGdHp2b2JvY0hMckZtc1ZZYWRSS2NaVWZSUUx5SlZtbg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 8,
          "name": "아일랜드 AI 데이터센터 전력 수요 법적 분쟁",
          "easy": "아일랜드에서 AI 데이터센터 붐으로 인한 전력 수요 급증이 법적 도전에 직면했습니다. 데이터센터가 전력을 너무 많이 사용하면서 발생하는 문제인데요. 쉽게 말하면 전력 공급과 수요 사이의 갈등이 법적 분쟁으로 이어졌다는 겁니다.",
          "quote": "아일랜드 AI 데이터센터 붐, 전력 수요 놓고 법적 도전 직면",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 32,
              "title": "아일랜드 AI 데이터센터 붐, 전력 수요 놓고 법적 도전 직면",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2176211"
            },
            {
              "n": 125,
              "title": "아일랜드 AI 데이터센터 붐, 전력 수요 놓고 법적 도전 직면 - Investing.com 한국어",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9TVXJzVXNDTFNQUlB6b1hjcG4wN18xdEp1c3gzOW1GRHdqdTNHVnlOLWVoWlBnSWxTWlpCbENqX2ZTUU1CSlgya3RPUjBXbTJCTkpxUk1IWVpKRXcxU280OGdEQWRGbVlodHRsQjJsVk0?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 9,
          "name": "울산 남구·중기 대표단 상하이 로봇 시설 시찰",
          "easy": "울산 남구와 중소기업 대표단이 중국 상하이의 휴머노이드 로봇 훈련장을 시찰했습니다. 로봇 기술을 배우고 산업 현장에 적용할 방안을 찾기 위해서인데요. 쉽게 말하면 지역 기업들이 중국의 로봇 기술을 확인하고 협력 기회를 모색하고 있다는 겁니다.",
          "quote": "남구·중소기업 대표단, 상하이 ‘휴머노이드 로봇 기린 훈련장’ 시찰",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 171,
              "title": "울산 남구·중기 대표단, 중국 상하이 휴머노이드 로봇 시설 시찰 - 울산매일 - 울산최초, 최고의 조간신문",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBWYzFsYS1IY3NObks5OWpDQWhNd0Z1Qk9KNnNQNGRYMnd0UTRveEhoaG9hU1JmN2thT1dtb1lOSkRYVXFRX3ZKeDNzZHJNUzZKZVNLREZERUpXYTRrdjh2Y1pfakxPRW1iS05RYUtR0gFuQVVfeXFMUFZjMWxhLUhjc05uSzk5akNBaE13RnVCT0o2c1A0ZFgyd3RRNG94SGhob2FTUmY3a2FPV21vWU5KRFhVcVFfdkp4M3Nkck1TNkplU0tERkRFSldhNGt2OHZjWl9qTE9FbWJLTlFhS1E?oc=5"
            },
            {
              "n": 172,
              "title": "남구·중소기업 대표단, 상하이 ‘휴머노이드 로봇 기린 훈련장’ 시찰 - 영남신문",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9hel9rVE4tU0dSYWlfVE5rdzJvV3dkaGVXanBmTm5zNXcxc1NBR0RzTnpDbUp2YTRpNnFrRFhveWl2aUNmbzJYRm9xek1maTgxTDlOVGYwaXlCQXh1RVRuS0JVNFh0YmVQdXY0SWxR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        }
      ],
      "single_articles": [
        {
          "rank_by_count": 10,
          "name": "다이아몬드백 에너지, 더블 이글과 50억 달러 규모 인수 협상 임박",
          "easy": "",
          "quote": "다이아몬드백 에너지, 더블 이글과 50억 달러 규모 인수 협상 임박",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 26,
              "title": "다이아몬드백 에너지, 더블 이글과 50억 달러 규모 인수 협상 임박",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2176334"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 11,
          "name": "\"수명 1년 연장 때 5.3경원 가치\"…보험사 新시장 ’역노화’",
          "easy": "",
          "quote": "\"수명 1년 연장 때 5.3경원 가치\"…보험사 新시장 ’역노화’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 27,
              "title": "\"수명 1년 연장 때 5.3경원 가치\"…보험사 新시장 ’역노화’",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2176329"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 12,
          "name": "베선트 미 재무장관 “Nvidia, 경영진 대폭 쇄신 필요”",
          "easy": "",
          "quote": "베선트 미 재무장관 “Nvidia, 경영진 대폭 쇄신 필요”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 28,
              "title": "베선트 미 재무장관 “Nvidia, 경영진 대폭 쇄신 필요”",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2176287"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 13,
          "name": "AI 토큰 가격 하락이 AI 공급업체에 미치는 영향은?",
          "easy": "",
          "quote": "AI 토큰 가격 하락이 AI 공급업체에 미치는 영향은?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 29,
              "title": "AI 토큰 가격 하락이 AI 공급업체에 미치는 영향은?",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2176263"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 14,
          "name": "Megaspeed “전 Nvidia CEO와 연관된 임원, 2025년 퇴사”",
          "easy": "",
          "quote": "Megaspeed “전 Nvidia CEO와 연관된 임원, 2025년 퇴사”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 30,
              "title": "Megaspeed “전 Nvidia CEO와 연관된 임원, 2025년 퇴사”",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2176225"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 15,
          "name": "유럽 증시, 랠리 동력 약화로 10% 하락 위험 직면",
          "easy": "",
          "quote": "유럽 증시, 랠리 동력 약화로 10% 하락 위험 직면",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 31,
              "title": "유럽 증시, 랠리 동력 약화로 10% 하락 위험 직면",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2176220"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 16,
          "name": "황 CEO 사임 후 Nvidia 강등…이번 주 AI 분야 주요 애널리스트 동향 5가지",
          "easy": "",
          "quote": "황 CEO 사임 후 Nvidia 강등…이번 주 AI 분야 주요 애널리스트 동향 5가지",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 33,
              "title": "황 CEO 사임 후 Nvidia 강등…이번 주 AI 분야 주요 애널리스트 동향 5가지",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2176204"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 17,
          "name": "ECB, 건전한 재정정책 대체 불가 — 차기 총재 후보 크노트 경고",
          "easy": "",
          "quote": "ECB, 건전한 재정정책 대체 불가 — 차기 총재 후보 크노트 경고",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 34,
              "title": "ECB, 건전한 재정정책 대체 불가 — 차기 총재 후보 크노트 경고",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2176202"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 18,
          "name": "HD현대, 美 안두릴과 무인수상함 건조…방위산업 정조준",
          "easy": "",
          "quote": "HD현대, 美 안두릴과 무인수상함 건조…방위산업 정조준",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 35,
              "title": "HD현대, 美 안두릴과 무인수상함 건조…방위산업 정조준",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2176160"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 19,
          "name": "한국 전력기기 업종, 美 중간선거 직후 반도체보다 낙폭 컸던 이유",
          "easy": "",
          "quote": "한국 전력기기 업종, 美 중간선거 직후 반도체보다 낙폭 컸던 이유",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 56,
              "title": "한국 전력기기 업종, 美 중간선거 직후 반도체보다 낙폭 컸던 이유 - 글로벌이코노믹",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQLUFnTnAtQk1tb3E2SS1naDJTSENyVXB0ME16T0pzZ0ptVS1JSG1KNS1wQVBEUHZFNExRT0NZLTZLcVhnZnljSF9zUkNvVThWd3JTYVpWVk9Cb2hGc21BSEpYVnhaendSQnEyRTlib1B1c0tFY2pFYkUwZC1zMlUyTkxFanNyTGNr?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 20,
          "name": "유진證 한국전력, 실적 부진에도 전력시장 개편 기대…목표가는↓",
          "easy": "",
          "quote": "유진證 한국전력, 실적 부진에도 전력시장 개편 기대…목표가는↓",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 58,
              "title": "유진證 한국전력, 실적 부진에도 전력시장 개편 기대…목표가는↓ - 아주경제",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1fa3FERV9UWGdaMEVlanJJcE1EcE1SSTQ3T0MzaENLSTRJQUhxMzg5WnAwSnRCTkFDYU04T3UyenBuV19ZUDl2U0ZXb3ZwbUJzTTVLUml2UlJuQdIBWEFVX3lxTFBXZDJtUl9BTjNuaFpBZlNqZzd3TmNLYW9pcmNjekNZcE1WSzVUODItUzMxcThRMmxld3JHVE9sVGctWVpfY25PSmtBd2k3T3hzazZhUHNITDM?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 21,
          "name": "민원·인허가에 막힌 송전망…72조 투입해도 건설엔 10년 [전력 확보 전쟁③]",
          "easy": "",
          "quote": "민원·인허가에 막힌 송전망…72조 투입해도 건설엔 10년 [전력 확보 전쟁③]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 59,
              "title": "민원·인허가에 막힌 송전망…72조 투입해도 건설엔 10년 [전력 확보 전쟁③] - 뉴시스",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTE5faHhndmZ4WmNxRzU1dWl3YllNS3ZVZEJiNlRNU3p1dnptajJISmVBUjlUUnpPNHBpS1dEQk9GSFNDR1BuQjg2NGpIYUp1eHJZclhPQXFhRjY1eVBlZVZWUkp1WGNHMERDR0ZONVRPLURneVVENl81YtIBeEFVX3lxTE5faHhndmZ4WmNxRzU1dWl3YllNS3ZVZEJiNlRNU3p1dnptajJISmVBUjlUUnpPNHBpS1dEQk9GSFNDR1BuQjg2NGpIYUp1eHJZclhPQXFhRjY1eVBlZVZWUkp1WGNHMERDR0ZONVRPLURneVVENl81Yg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 22,
          "name": "‘2026 대한민국원자력대전’ 원전기자재 메카 창원서 18일 개막",
          "easy": "",
          "quote": "‘2026 대한민국원자력대전’ 원전기자재 메카 창원서 18일 개막",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 61,
              "title": "‘2026 대한민국원자력대전’ 원전기자재 메카 창원서 18일 개막 - 에너지안전신문",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5YcGJhdEh3WDVxNnpfZWZOTkNmVFlzTk96ZFJSUC1xNkl0SUxQVnFGejQ4OHpiVXQxR0tRaEREM2ZGYkROZlpMT2ExUW5CVHFjdXFXckJGNld1RWFJMDJyOHIyZnc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 23,
          "name": "한전,'2026 AI 코리아 대상'사회적 책임 부문 대상 수상",
          "easy": "",
          "quote": "한전,'2026 AI 코리아 대상'사회적 책임 부문 대상 수상",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 62,
              "title": "한전,'2026 AI 코리아 대상'사회적 책임 부문 대상 수상 - 한국전력신문",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE91S0o3VW9UX0Etc1lUckJrS3E1Um51bUlfV094V3NmakdQdldjSDU0cDExVXI3NzJidS1fNTVvX3JfWmFIOENib1hlSTU3MEd3Rkk2M3ZMd0V0OENNTHJpRllKQ0d3M3hITkE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 24,
          "name": "[뉴스클레임 사설] 송전탑 아래 주민들은 어쩌나",
          "easy": "",
          "quote": "[뉴스클레임 사설] 송전탑 아래 주민들은 어쩌나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 65,
              "title": "[뉴스클레임 사설] 송전탑 아래 주민들은 어쩌나 - 뉴스클레임",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9RMnV4NlRyakhqMzdXMlR3dmVEc0UyUzhLUjc4Vy1Ka0cyalBZZkdDTFN5V2V0VHlIb015QW9hOTR0TXAtV2w2bFhvRlFTZTktU3oxVlJnZmxOVWJocEhhMUdTRTRXYmFzWEJEZ1Mxb0_SAXRBVV95cUxQZ2xPSVhqQ2FGX25LQUVwZVZUSlFrYlVEb21lWlFjajhLbFg5LUNJdEd5MGp4bmszR093ZkpSRUg3YjhtaDNWVUZwVmRWWlJfb0RCZ0sySmFJLThZMl9Ibkg3SGVjdGxSMUNpMXFvd2NMRTI5aQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 25,
          "name": "한전, 주민과 함께 이룬 전력망 입지선정 100호 달성 기념식 개최",
          "easy": "",
          "quote": "한전, 주민과 함께 이룬 전력망 입지선정 100호 달성 기념식 개최",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 66,
              "title": "한전, 주민과 함께 이룬 전력망 입지선정 100호 달성 기념식 개최 - 한국전력신문",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBKY01QSzZEV1pnM3F4bmNxVEpYWjZKajVvUld0S2Zfam9qVG9zRkJ4WU1lNmRLQjVZN2RWVUtPNHRJak1tVGFHM2REVTVERnVxMEFOemdweHo2VjIxYzIzalZOZmlqcEJwUmc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 26,
          "name": "충청권에 송전망 27개 사업…전력은 수도권으로, 주민 부담은 누가 책임지나",
          "easy": "",
          "quote": "충청권에 송전망 27개 사업…전력은 수도권으로, 주민 부담은 누가 책임지나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 67,
              "title": "충청권에 송전망 27개 사업…전력은 수도권으로, 주민 부담은 누가 책임지나 - 뉴스홈(newshome)",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTFB3VGxNSjdHM2d1NXhRdFRzWHZyMUZmT21SQW1iV2dLZmlwdkJyTTF5NWtCa1ZDcUExN2twSXI5c2N5MEg1bms2d2xmS1VPS0M1aUlUeDBEa0tmSWx3TlhPWGl0ODd2a2kzRHJBYWVn?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 27,
          "name": "[심층]한전, 충청권 송전망 확충에 난항…부담 편중 논란·주민 반발",
          "easy": "",
          "quote": "[심층]한전, 충청권 송전망 확충에 난항…부담 편중 논란·주민 반발",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 68,
              "title": "[심층]한전, 충청권 송전망 확충에 난항…부담 편중 논란·주민 반발 - 뉴스피릿",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE9odHZnRW9MWHlGaWVDeFZvWUFHMEp2TGhKLVZ1aEdGZEdfNzNOTEpSX29HLVRLVlNZVXYweTFudldLZG8zMUtKbkxNNlhMWFhHYWNQSkEwU3dCNm5zbjE0bFZwRG14a2F1NmRV?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 28,
          "name": "용어 설명에서 상세 정보로 이어지는 빨간모자와 늑대",
          "easy": "",
          "quote": "용어 설명에서 상세 정보로 이어지는 빨간모자와 늑대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 70,
              "title": "용어 설명에서 상세 정보로 이어지는 빨간모자와 늑대 - belpostel.com",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBHQ0twQjBRMGI3SmdSVHFEQnJwekh2ZGlpeHF1VDFqODUyREpVc3d2RmpYZDhQeEVjQ1plTHZGc0VDTU80TGpTNDVCLUtCTE01azNsbFVIZ1M?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 29,
          "name": "[수출 1조 달러 시대 上] 전기기기 수출도 최대…왜",
          "easy": "",
          "quote": "[수출 1조 달러 시대 上] 전기기기 수출도 최대…왜",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 71,
              "title": "[수출 1조 달러 시대 上] 전기기기 수출도 최대…왜 - 자본시장뉴스",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1abDNwcnhERzI3OU5zWDFYQmdsYUN5R2xQSVFkSWF1emktaHZYYVB0ZjFla1hHYUgtblo4ZWFuOWxVYkg5bFJIVEVGc05wejhlU0N2QWo0UjNyNU9JMHo4QWF3SzRvUDQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 30,
          "name": "제조업체 인수 속도 내는 종합상사 현대코퍼… 현대家 3세 정두선 주도",
          "easy": "",
          "quote": "제조업체 인수 속도 내는 종합상사 현대코퍼… 현대家 3세 정두선 주도",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 72,
              "title": "제조업체 인수 속도 내는 종합상사 현대코퍼… 현대家 3세 정두선 주도 - Chosunbiz",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPSFNuLU13QkRveThiU2VtZW1JenlmREVwakZ4Y1dmYWhZMVFjbEIwWHlEWXlId0V3TFk2SE9wNDJ4QWREV0lBVW9oR0JVcDE4WnhOb0YyRl9UNFJMYWQyeDA3RXdyRUZma3AtTHdUaUZiZko5a0pjYU1GRElWRzczZmVnV1dUbmhrYW14MXlsOWpyeGFhSmlSZdIBmAFBVV95cUxPSFNuLU13QkRveThiU2VtZW1JenlmREVwakZ4Y1dmYWhZMVFjbEIwWHlEWXlId0V3TFk2SE9wNDJ4QWREV0lBVW9oR0JVcDE4WnhOb0YyRl9UNFJMYWQyeDA3RXdyRUZma3AtTHdUaUZ"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 31,
          "name": "견인용 변압기 시장 2035년 전망: 전철화와 차량 개조 주기가 성장 견인 - 뉴스 및 통계",
          "easy": "",
          "quote": "견인용 변압기 시장 2035년 전망: 전철화와 차량 개조 주기가 성장 견인 - 뉴스 및 통계",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 73,
              "title": "견인용 변압기 시장 2035년 전망: 전철화와 차량 개조 주기가 성장 견인 - 뉴스 및 통계 - IndexBox",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxNWVppVHNEc1NzQThuaFcwYlhWMW5fanVNaTRHdjA4b1hxRDItd1RWdndaN3NhMVFNVjRValEtbmNZOG5iQm9od1dZUTNBWGduQlEtd29nTHIzTnVyd3lKR243Z1pmU3FEbWhQdEtXZVBuUG01bF9CeTN0UDRlaW96MEd4VHJCWGF5VktpeW9EbU9iMXBCTmJsRElOSzdBXzY4M0FNbElDZFpQWktFU0IwbGlLcFVDZE9HaEY3TVF3RGJmWnlRaGZUaE1UWE85dzVIYm1jVl9mcDF2b2xB?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 32,
          "name": "[TECH한주] 엔비디아 위기에도 흔들리지 않는 HBM 적층 기술의 절대 강자 ‘한미반도체’",
          "easy": "",
          "quote": "[TECH한주] 엔비디아 위기에도 흔들리지 않는 HBM 적층 기술의 절대 강자 ‘한미반도체’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 77,
              "title": "[TECH한주] 엔비디아 위기에도 흔들리지 않는 HBM 적층 기술의 절대 강자 ‘한미반도체’ - 테크월드",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE1pVFUzNFFqcDhNb3FBeHJQUjROaHZzaE44MjlGYUhIY0k1Q0FGS3RqcFRaaW5hbE1oc1BmbzNEdXdaLS1yYmUtbEJBX01LSUMyQm1uRlhIUEczamdDT3VWeFYweGRzYVpL?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 33,
          "name": "[비즈톡톡] HBM 하나에 500만원 주고 밀수하는 中… 반도체 굴기에도 못 넘는 ‘메모리 장벽’",
          "easy": "",
          "quote": "[비즈톡톡] HBM 하나에 500만원 주고 밀수하는 中… 반도체 굴기에도 못 넘는 ‘메모리 장벽’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 78,
              "title": "[비즈톡톡] HBM 하나에 500만원 주고 밀수하는 中… 반도체 굴기에도 못 넘는 ‘메모리 장벽’ - Chosunbiz",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiggFBVV95cUxOWlpfMXZFVUxIdEpiU2RlbzJQY0U2UUFHSFlhLVNrc194d0t3dzNTcVpPdWNmaXpYaW43RExRNElUM0hlMTA3S01tcHoyOVdFekZnWlB6OTJxU0NNZmZZeVFqYXd2WEljWDkyN2ZUWjRoYTVZVWxRRk9QV1IwZmF6aHFR0gGWAUFVX3lxTE5Dc3AxcUx3WWNtenowcUV2ek5CX21rY0JNR2lsOU5NNVRXd24xNU5meVVGcUZlSmpsUHQ5OEctQTgyVFpDVVFCbkVaNnF0R2hWX3hqWk9BY3dPcHo3M0FqNG81NGlEWkloVE0xOXR3U0lBczh0SkFnVnQ4aWNIdl9HTXN0ZGs"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 34,
          "name": "젠슨 황 떠난 엔비디아…삼성·SK하이닉스 'HBM 공급망' 판도 바뀌나",
          "easy": "",
          "quote": "젠슨 황 떠난 엔비디아…삼성·SK하이닉스 'HBM 공급망' 판도 바뀌나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 79,
              "title": "젠슨 황 떠난 엔비디아…삼성·SK하이닉스 'HBM 공급망' 판도 바뀌나 - 뉴시스",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTE1IYzVWUkMwdl9TbG16TGZnckxXRml0STBSTWZEam5mQXpYeTk0YXB0bHEzMk5EWUFPbVB2bnIybzBDS0pkODR6ay0yNTZ0dGdWWVdSU0lFYzNGWHpYVEN3bFRTbGl5cjBBZlVNaDhIeFlsQWJiVnMyctIBeEFVX3lxTE1IYzVWUkMwdl9TbG16TGZnckxXRml0STBSTWZEam5mQXpYeTk0YXB0bHEzMk5EWUFPbVB2bnIybzBDS0pkODR6ay0yNTZ0dGdWWVdSU0lFYzNGWHpYVEN3bFRTbGl5cjBBZlVNaDhIeFlsQWJiVnMycg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 35,
          "name": "HBM 강국 한국, AI 주권은 있나…젠슨 황 사태가 던진 경고",
          "easy": "",
          "quote": "HBM 강국 한국, AI 주권은 있나…젠슨 황 사태가 던진 경고",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 80,
              "title": "HBM 강국 한국, AI 주권은 있나…젠슨 황 사태가 던진 경고 - 이데일리",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMigAFBVV95cUxPM1h0ZHNscEM0VEU3dGxNREZDUzFUd1NwVGJ2UUU1M2ZiQUVOS2tLRFgzVnNOZmZDZjRZcUZKakpPOHVyYnFlZ3hvT3hTVHVIYmxjdmVrS09OOWhFTnd3RG1PV0hUa2pxUGZiY3FubnpoMjVibXZZXzlKSHVTZzFYQg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 36,
          "name": "삼성전자 이르면 이번주 인사…반도체 '보상' 부진 사업 '쇄신' 주목",
          "easy": "",
          "quote": "삼성전자 이르면 이번주 인사…반도체 '보상' 부진 사업 '쇄신' 주목",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 82,
              "title": "삼성전자 이르면 이번주 인사…반도체 '보상' 부진 사업 '쇄신' 주목 - 뉴스1",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9XNjFILS1lT08tS1A0Wm1uZ0JZTlJFZi1qVkJiNjhrM19IUzh5QTByTkpSYXpyUDFoN0VlZVdGYkFmS1BvT19icnc1NUh3MWVzUWJxN3NqQ0lmXzlrYS1TZ01leUs?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 37,
          "name": "삼성·SK하이닉스 美 D램 반독점 소송, 기각 불허로 본안행…법원 \"고객 심사 일치 정황 따져봐야\"",
          "easy": "",
          "quote": "삼성·SK하이닉스 美 D램 반독점 소송, 기각 불허로 본안행…법원 \"고객 심사 일치 정황 따져봐야\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 85,
              "title": "삼성·SK하이닉스 美 D램 반독점 소송, 기각 불허로 본안행…법원 \"고객 심사 일치 정황 따져봐야\" - 글로벌이코노믹",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPUUJnN1FyeXdIVW1rOHRQU2M0X1d4MDU2ZTRqLV9nNWVuQk05ZXc0RzN4RklBRFlUdFhzZEl0ZXFKZ1gzZDF4NGs0NFR1LXpBQk5EemVURW5FZGpvcG9Pdk5YQ0tGb1VMR0hKdHdyNDhueUpDUDJNYUdqRHl5Smpra3VNbjM3TWJQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 38,
          "name": "[특징주] SK하이닉스(000660), 주가 급락에도 실적·재무 체력 '굳건'",
          "easy": "",
          "quote": "[특징주] SK하이닉스(000660), 주가 급락에도 실적·재무 체력 '굳건'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 86,
              "title": "[특징주] SK하이닉스(000660), 주가 급락에도 실적·재무 체력 '굳건' - 인천일보",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBkdWdkdHBlMm9DT3hkRklzZXMtQjdoNHhhVVpYMDVXWHpvbHNHZEpxYzFCVV9BX2RBd0laYVZrZ1NSNHd5SThtSXlRLS1GSFJMNzlEMks2Z0tmdjFWVVV6clR4dl9UckJWVmZJVHlaQl8?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 39,
          "name": "“SK하이닉스, 주주환원 확대·낮아진 밸류에이션…시간 여전히 매수자 편”",
          "easy": "",
          "quote": "“SK하이닉스, 주주환원 확대·낮아진 밸류에이션…시간 여전히 매수자 편”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 87,
              "title": "“SK하이닉스, 주주환원 확대·낮아진 밸류에이션…시간 여전히 매수자 편” - 매일경제 마켓",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE9yVUlfaHN4YTV3Z3g2OEpJc2JaT252QndnMGhkRXNzVlhzRGE4MGF4SXUyNHlpcmtjZWNpLU5xMjAyUVBfeFM2NDRGSlVnVi01RWc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 40,
          "name": "LS證 “SK하이닉스, HBM4 공급 확대에 사상 최대 실적 행진… 목표가 240만원 유지”",
          "easy": "",
          "quote": "LS證 “SK하이닉스, HBM4 공급 확대에 사상 최대 실적 행진… 목표가 240만원 유지”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 88,
              "title": "LS證 “SK하이닉스, HBM4 공급 확대에 사상 최대 실적 행진… 목표가 240만원 유지” - Chosunbiz",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOSjVvNnV4c2Rycjc4cHVab0owSmF5TGgxb183YmtHUm1fdGl1Y3EyZEJIczZrRkV5ZlA1WENldkoweTZXTk9Sbnd1Y244bE5KbDY2VHludTREc0s2SEdDaFdKdVJkX3E5QkRtSkE4al94VXFTWVB5Qm1RVzZuS0F3SFMyaWh1ZW1a0gGcAUFVX3lxTE10UGhLS3JybDNvdTZNSUlPSXd6WExhQ0wwVWJ3eUh1Qm5EWnFyV1FhNk5odmdmdzJCakFwM21wVURfYVF2d3ZwbHlwTkhuWHFNaU8teDAybkFrTXJvUXU4NzlXMlQ0YXBMYXRjY2JpZkxxSTRHVkJicXNJVHZKRzh"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 41,
          "name": "[ESG 리더스] 곽노정 SK하이닉스 사장 \"AI 시대, 기술과 환경의 균형 중요\"",
          "easy": "",
          "quote": "[ESG 리더스] 곽노정 SK하이닉스 사장 \"AI 시대, 기술과 환경의 균형 중요\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 90,
              "title": "[ESG 리더스] 곽노정 SK하이닉스 사장 \"AI 시대, 기술과 환경의 균형 중요\" - 녹색경제신문",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE03YjJJbHBwS1ZwNTczMUdnSmUzWFpqQzF5TEtmRkEzc0JEZ2dvZkd2Rm1FVXBlVDRuX1lUMnNZT0RzbEZsUUl1b2dNNHdWTHc3eWRFVGI4YkVCbnh2ZTRvWm52RUpWNEpZ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 42,
          "name": "아직 SK하이닉스 매수 타이밍이 아닙니다.",
          "easy": "",
          "quote": "아직 SK하이닉스 매수 타이밍이 아닙니다.",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 91,
              "title": "아직 SK하이닉스 매수 타이밍이 아닙니다. - 네이버 프리미엄콘텐츠",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxNUHBGelBrczQ0WHlTSlp6S3dxS3FVd2JJSXFvTkcxVW10U3J4X3JFT2FwNF8yTGw1dU9BX0RCdC1SeEtFRGpaTVp1Sl9uOGlFRGZKR1BRZUdHLUZBNG1pRmg1cGQzV09UbG4xLVdvNlBuX2I4QVBjdGZrdXBCY0JIZWJQNXQ2c2NQQ3Jz?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 43,
          "name": "반도체 증설에 용수 부족… ’100% 하수 재이용' 신재생 해법 나왔다",
          "easy": "",
          "quote": "반도체 증설에 용수 부족… ’100% 하수 재이용' 신재생 해법 나왔다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 94,
              "title": "반도체 증설에 용수 부족… ’100% 하수 재이용' 신재생 해법 나왔다 - 조선일보",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPeWQ3Z3J4M3I0UGpvRHE5bGFTTGVOUm5HNDdnTUhfWElZOFhDZ0Y3ZkRDWjdVb0Fqd1BURmVvUWRCQkxMY3R2X0E4OUs2enJRZThCNEpEaGk0OU13TkJxdHZFS2RCTEJXbWZ3dmJQWnhFUk54NDdnZzZqdG5MUEcxeHJzTW1WX21hanVv?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 44,
          "name": "“삼성전자·SK하이닉스 다시 오를까”…코스피 5290선, 이번 주 운명 가를 3가지",
          "easy": "",
          "quote": "“삼성전자·SK하이닉스 다시 오를까”…코스피 5290선, 이번 주 운명 가를 3가지",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 96,
              "title": "“삼성전자·SK하이닉스 다시 오를까”…코스피 5290선, 이번 주 운명 가를 3가지 - 데일리25",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBNbDJNX1FNTk9xek5nSTlsbWV3S0tIWmVuZ0hwaWozZXJ4Y1JZRkFudjZ5MHlLeUJmQlRUNG5za2p5b3NmNTY1OFlrUkhXY1NfdG5lb201bHJMLU5jTTd5NUpiRkdQVXh2ekdBbg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 45,
          "name": "HSBC, 엔비디아 목표가 '반토막'…\"정식 CEO 올 때까지 고전\"",
          "easy": "",
          "quote": "HSBC, 엔비디아 목표가 '반토막'…\"정식 CEO 올 때까지 고전\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 100,
              "title": "HSBC, 엔비디아 목표가 '반토막'…\"정식 CEO 올 때까지 고전\" - 연합인포맥스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1YdUdPNks5MDBUd1lBbDhzSUFKWF84Vkp1cjEtSlR5Y2ptOG5IaHpEODBNREl4c0FfS2RETW14WUprWWQyQ3NXaVY2YmtBbjlGXzBlcEc1N0x4eHdZVUlTY0pBTktyS1ptajRIc2I0NkLSAXRBVV95cUxPcG9QRHNWUl81eE5Ka2NGdkgtckhWU2FzYjdNZV9ta1YtQjlqSm0xRGIwMFo1aWNydEJSeGlKNTBrX0FCakpqeDB2Z0hKd1hLMmtPVHBKU21ZUy1uOGtUSFMyUHVQaVRzUW94T0s4QVl3VDlKdQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 46,
          "name": "[AI MY 뉴스] 16일 중국증시 'APEC·엔비디아가 가를 투심, AI·경기 변수 주목'",
          "easy": "",
          "quote": "[AI MY 뉴스] 16일 중국증시 'APEC·엔비디아가 가를 투심, AI·경기 변수 주목'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 101,
              "title": "[AI MY 뉴스] 16일 중국증시 'APEC·엔비디아가 가를 투심, AI·경기 변수 주목' - 뉴스핌",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE9sRTNUNmhwWlB3WjZEQ3c4cERXY2lvb29jLXNaaUg5UzJIZHM5OVQ1NGQxTEdyX3JFQ3l4R3JuXzZzOG1KNW1zWXQtMmRQTlJVb2NTakJNTmhablRm?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 47,
          "name": "엔비디아 실적·앤트로픽 상장…AI주 운명 달린 한 주[이번주 美 증시는] - 머니투데이",
          "easy": "",
          "quote": "엔비디아 실적·앤트로픽 상장…AI주 운명 달린 한 주[이번주 美 증시는] - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 103,
              "title": "엔비디아 실적·앤트로픽 상장…AI주 운명 달린 한 주[이번주 美 증시는] - 머니투데이 - 머니투데이",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE94RUozbVJma3hLNUhiRzBjNHFqWTNZOEdIdV80U05fTDlESXlMRTJTTDdwQ1RaWG5Xc19DU2FFeEdsR1oyZ1BhTGJVaExLRzktU01YaWpFLWNxRHB1WWNTdDQ1cFlaTndf0gFuQVVfeXFMTTRXVVV0a3R1bGVZSjFMRVV0MHFRZHE3b3VTaFNjbW8ycWRlOUtZWW81eEFGamo2c0xNQ3ljRXFxeGlkcUxlWEt0UFVIdXgwQmc2Yno1bTJPX0U1aVpLRVNaOXc3b3d4bWZ5TDJMTXc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 48,
          "name": "\"삼성전자, 脫엔비디아 시대 최대 수혜주\"",
          "easy": "",
          "quote": "\"삼성전자, 脫엔비디아 시대 최대 수혜주\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 104,
              "title": "\"삼성전자, 脫엔비디아 시대 최대 수혜주\" - 한국경제",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1FZTFGTVM4ZzVrVXdKbkJvb2lDa0RhVUt4T3dySWhZUGtvdEN6Z1RnSm9QSDRlc1p4X3NCRjFkeElyaE05dUNabWtNSURJOVd4aXNZSk5DWG1sZw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 49,
          "name": "영국 원전 인력 10만명 돌파, 한국 ‘기술 대물림’ 골든타임 잡아야",
          "easy": "",
          "quote": "영국 원전 인력 10만명 돌파, 한국 ‘기술 대물림’ 골든타임 잡아야",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 106,
              "title": "영국 원전 인력 10만명 돌파, 한국 ‘기술 대물림’ 골든타임 잡아야 - 에너지안전신문",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9IMkYyWVlaNW9iY2dkdmxSdVhEWVFUa2ZqSDJKdjhCWGFHeHM1Z0s4aG1EUUpqUUxWNXRMaV9TNllmNk01YmRGYkNXTlZ1YUtHLVBoRTFDTFVzSlM0SklwZUVZUm0?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 50,
          "name": "삼성·현대 독주 속 중견 건설사 각자도생…DC·SMR·LNG로 먹거리",
          "easy": "",
          "quote": "삼성·현대 독주 속 중견 건설사 각자도생…DC·SMR·LNG로 먹거리",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 107,
              "title": "삼성·현대 독주 속 중견 건설사 각자도생…DC·SMR·LNG로 먹거리 - 아주경제",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1sdVlpSTJJM1lQdDhkR2l2WThnaFlDb2c5dVd6N0NCNExuaEhxa0ptYVp6bEtUd3NJTkFFd0VwRmRIeHVKTnUtbmFMSWFHZDVIQmY0Rm1EeHbSAVhBVV95cUxNbHVZaUkySTNZUHQ4ZEdpdlk4Z2hZQ29nOXVXejdDQjRMbmhIcWtKbWFaemxLVHdzSU5BRXdFcEZkSHh1Sk51LW5hTElhR2Q1SEJmNEZtRHh2?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 51,
          "name": "오클로·센트러스, 메타 데이터센터용 SMR 5기 핵연료 계약 확정",
          "easy": "",
          "quote": "오클로·센트러스, 메타 데이터센터용 SMR 5기 핵연료 계약 확정",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 108,
              "title": "오클로·센트러스, 메타 데이터센터용 SMR 5기 핵연료 계약 확정 - 에너지안전신문",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFB4UlJHdUhwRGcyaVU4dFZGSmgzWGhJRVgyZGJzWjN2bG4xcDM1eE1wY3hNTmp5ZWFnUkxreTlkcWdyeGxrZnZzY1dQa3MtRWFlcUpiV3V4X1l6SGhFYnF0Z0MzUkI?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 52,
          "name": "[아주부동산 PICK] 3기 신도시 교통 인프라 선입주 후대책… 정부는 뒷짐",
          "easy": "",
          "quote": "[아주부동산 PICK] 3기 신도시 교통 인프라 선입주 후대책… 정부는 뒷짐",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 109,
              "title": "[아주부동산 PICK] 3기 신도시 교통 인프라 선입주 후대책… 정부는 뒷짐 - 아주경제",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE51cS02dmxWdUR2bkJNY0lqQXdpT1A1VHB1SXFOaUI4dndjUG1SbGZEUHpBM3lxLURSTTRMaWRtR19WeVEwQzlXTnlaM1BZdkV0dk9vYm1EZ2jSAVhBVV95cUxOdXEtNnZsVnVEdm5CTWNJakF3aU9QNVRwdUlxTmlCOHZ3Y1BtUmxmRFB6QTN5cS1EUk00TGlkbUdfVnlRMEM5V055WjNQWXZFdHZPb2JtRGdo?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 53,
          "name": "전북도, ESS 활용 전력망 포화 해소 나선다",
          "easy": "",
          "quote": "전북도, ESS 활용 전력망 포화 해소 나선다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 111,
              "title": "전북도, ESS 활용 전력망 포화 해소 나선다 - 전라매일",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE9sU3NaUU9wSmtmNEdNRDdVTW1HcllSdS1nSkgtU2VCMk93ekgzY091V0JIcE9oQ3VDQWVyZ1MtZzJVbXluLUYzQ01Pcmp3bEhiWkE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 54,
          "name": "데이터센터, 주민 마음 얻으려면…\"전기요금 낮출 해법부터\" - 머니투데이",
          "easy": "",
          "quote": "데이터센터, 주민 마음 얻으려면…\"전기요금 낮출 해법부터\" - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 120,
              "title": "데이터센터, 주민 마음 얻으려면…\"전기요금 낮출 해법부터\" - 머니투데이 - 머니투데이",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiekFVX3lxTE1VZ0pkNmdOaWVRVTdGMEVuUzRzQmxQNmFBbEFsanZZSktiTWRrMXF0dHBfb2lRbHk3LUdzdjRZS1A3NktOYXBzTzBxaUxCY3RLODlrUUJxcmVnODg5VmpCOEd0U2lWMUR4OHR0SDVSZGVfTTdUcmhBLXdB0gF_QVVfeXFMT0JzZm1JSmE2ZWU0aklXRFV3TDJSQ0owTGZRWjM3ZGVyMGR3MWNEQVUzT2xoR2tUSHBId2VnSnZETEdKdjlPMlhGSW5NSmpkM3U5VnFpaV9UTld3bUN2aHlzeWNoVGpZdnJzaFljN0Nzb3g0dVJmZmRWblVWOG9MMA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 55,
          "name": "SK이터닉스, 태양광 구조화 규모 증가 수혜…\"산업용 전기요금 인상에 PPA 수요 급증\"",
          "easy": "",
          "quote": "SK이터닉스, 태양광 구조화 규모 증가 수혜…\"산업용 전기요금 인상에 PPA 수요 급증\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 121,
              "title": "SK이터닉스, 태양광 구조화 규모 증가 수혜…\"산업용 전기요금 인상에 PPA 수요 급증\" - 프라임경제",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9oLVNMQmFiS2N0YjE4TFQtdVZMOWdpak9DbFIxOEZiRXVIM1B0YTd1ay1wOTU4V0l6WThRLVB6djBuMnY1ZTEyWDk1RHk1bUxRd1NRTThuU2gxX1FyWU1ZYlhIN3JuY2M4cTV1Nw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 56,
          "name": "“AI 시대 최대 과제는 전력 확보”…한미 전문가들 벨뷰서 에너지 미래 논의 > 시애틀 뉴스/핫이슈",
          "easy": "",
          "quote": "“AI 시대 최대 과제는 전력 확보”…한미 전문가들 벨뷰서 에너지 미래 논의 > 시애틀 뉴스/핫이슈",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 123,
              "title": "“AI 시대 최대 과제는 전력 확보”…한미 전문가들 벨뷰서 에너지 미래 논의 > 시애틀 뉴스/핫이슈 - SeattleN",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE1CRTRrVEFRSTZaNEFqSTJZa1d6UHNTTW9nalNQanNGOUZBa2JsMXR3X2s0OV9pdkdTUW5aSTRqYWs5RnNHZlpPZW9oM1VHanV6QjZXNWMwb29YV3gyemNLU3dFQk9YbHFa?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 57,
          "name": "부산시, 영구임대주택 취약계층에 고효율 LED 조명 무상 보급…전기요금 부담 낮추고 주거복지 강화",
          "easy": "",
          "quote": "부산시, 영구임대주택 취약계층에 고효율 LED 조명 무상 보급…전기요금 부담 낮추고 주거복지 강화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 124,
              "title": "부산시, 영구임대주택 취약계층에 고효율 LED 조명 무상 보급…전기요금 부담 낮추고 주거복지 강화 - 복지TV부울경방송",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5OU19xeEZTU0FkVHI1UFhObDVrNExqdVFBT01hd3cta2RCVDM5QzBTdnZySWZ6V0NXaTZSNnZXcVlXWUJpZFI5YkZieUlwd1dxOGJrd3hyVzFPVzlIZXo2U3YyRVdMRndK?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 58,
          "name": "구리에서 AI 데이터센터까지…LS, 전력 밸류체인 넓힌다",
          "easy": "",
          "quote": "구리에서 AI 데이터센터까지…LS, 전력 밸류체인 넓힌다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 129,
              "title": "구리에서 AI 데이터센터까지…LS, 전력 밸류체인 넓힌다 - 녹색경제신문",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5KRjR2YXBUY1lVMmtjX3FIb3NyMEk3cU1oaC0xNzI0UDk3RHluTk9VVVIxd0FKRVFubHMyV3NuU1lVZ1JDYzRXQlJjVC00MFdOVUplNUxjdEdrOHRyR2FuVUJGMkJXdV9D?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 59,
          "name": "중동전쟁 여파에…발전용 가스 ‘평균요금제’ 부활하나",
          "easy": "",
          "quote": "중동전쟁 여파에…발전용 가스 ‘평균요금제’ 부활하나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 131,
              "title": "중동전쟁 여파에…발전용 가스 ‘평균요금제’ 부활하나 - 대한경제",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTFBjOUtyN0VsYUxjODZKdTNsVHdfZXEwRjRSZl9kX3g2bTlMaXpJUFZWWVFPMzB1NTFTZGFYdzBILWg3VW54dm9HekpyRFBDNWNSMXVoQVRKakZwQ1psc0pZQ28wd3hEYUxtQmFTUjhFMU91Q1Zj?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 60,
          "name": "李 정부 ‘탈석탄’ 외쳤지만…LNG 급등에 석탄 수입 10.8% 급증",
          "easy": "",
          "quote": "李 정부 ‘탈석탄’ 외쳤지만…LNG 급등에 석탄 수입 10.8% 급증",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 134,
              "title": "李 정부 ‘탈석탄’ 외쳤지만…LNG 급등에 석탄 수입 10.8% 급증 - 헤럴드경제",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE16WC1pR2N0X0ZiVThrRTN4ZXFteGwtV1drNVczeU05RFBHcjY0T2RVb3FoRnFvbldCQXZxT1h5bVM1NUg3S2JfNUVRdFNwdTdidVZYZGl3?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 61,
          "name": "LNG선도 넘보는 中, 한국 조선 비상[차이나는 중국] - 머니투데이",
          "easy": "",
          "quote": "LNG선도 넘보는 中, 한국 조선 비상[차이나는 중국] - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 136,
              "title": "LNG선도 넘보는 中, 한국 조선 비상[차이나는 중국] - 머니투데이 - 머니투데이",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE51dVVSZ1FoNmlOT05SQ2Q5WEJqWnVGYndwbHZlOC1xNURyMEFjVWdEVXdGQnR1eHlCRlEwcFdfOHlNNjRIblFqWmdzbW9XZkRtaXhxNGMwREJwd3ZUMURCanNsRDF6aEhyNVpfbHM1OEjSAXBBVV95cUxOdXVVUmdRaDZpTk9OUkNkOVhCalp1RmJ3cGx2ZTgtcTVEcjBBY1VnRFV3RkJ0dXh5QkZRMHBXXzh5TTY0SG5Ralpnc21vV2ZEbWl4cTRjMERCcHd2VDFEQmpzbEQxemhIcjVaX2xzNThI?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 62,
          "name": "한국가스공사, 3분기 깜짝 실적에도 미수금 13.8조 부담-KB",
          "easy": "",
          "quote": "한국가스공사, 3분기 깜짝 실적에도 미수금 13.8조 부담-KB",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 137,
              "title": "한국가스공사, 3분기 깜짝 실적에도 미수금 13.8조 부담-KB - 마켓인",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE5Ob1FVRXBxWDhTVVMzZmlOYVBZdzllX2JEbkJlell0QzhvUWhyc2U4MjFfazVEbjVOdm1UenQ4RFo3ZWt4RmxRQ3IwNnVLYXN6TXp1TGZSeE1aRF82U3ltb1VjQUMwcFE1WjdUU2hQMXd0LXM?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 63,
          "name": "[정책 바로보기] 정부가 기업에 '가스값 부담' 전가? - 정책뉴스 | 뉴스",
          "easy": "",
          "quote": "[정책 바로보기] 정부가 기업에 '가스값 부담' 전가? - 정책뉴스 | 뉴스",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 138,
              "title": "[정책 바로보기] 정부가 기업에 '가스값 부담' 전가? - 정책뉴스 | 뉴스 - 대한민국 정책브리핑",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPWC11c0xLOVZGajQzbk1YOXZrbmhLWmNpeFJqclF1eWphOF91Zk5lUm8wSkhhX0xXWDROZ08zNmVfczdETFBwVlNjd2I2TWpEaG1UbU9lUnZsMmRZdWZGeDdfVlRrQ016cTlDSHJnWlktNGlSZV8yWXVxMVJFeFVfTHJZUGprdVV6eHc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 64,
          "name": "\"한국만 남는 장사\" 청구서 날아드나…수출 '1조달러의 저주' 피하려면 - 머니투데이",
          "easy": "",
          "quote": "\"한국만 남는 장사\" 청구서 날아드나…수출 '1조달러의 저주' 피하려면 - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 139,
              "title": "\"한국만 남는 장사\" 청구서 날아드나…수출 '1조달러의 저주' 피하려면 - 머니투데이 - 머니투데이",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1iU2lFZjNTZDE3YjAtZFVTNHowQkczVlA3S3dMV0RMWERrRXdTMnRIWHdHcFJLZEwzN3E1UkRlakgzRE9ObVpRaG04RXZnOHppRFZYb01HMGQ1bzd5c2hsVTM3aUZ2TmRNa1VBamszRGbSAXBBVV95cUxNYlNpRWYzU2QxN2IwLWRVUzR6MEJHM1ZQN0t3TFdETFhEa0V3UzJ0SFh3R3BSS2RMMzdxNVJEZWpIM0RPTm1aUWhtOEV2Zzh6aURWWG9NRzBkNW83eXNobFUzN2lGdk5kTWtVQWprM0Rm?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 65,
          "name": "'오락가락 美반도체 규제' 뒤엔 젠슨 황 그녀?",
          "easy": "",
          "quote": "'오락가락 美반도체 규제' 뒤엔 젠슨 황 그녀?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 140,
              "title": "'오락가락 美반도체 규제' 뒤엔 젠슨 황 그녀? - 한국경제",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9QZ20tak1GUkRLbG1ZZHcxeU9rZlB0bkFLcFNGNGF4OGs0aXNjem5leEJERFVVa0Y4QUY1VjcwejBpOVZzb2x2WHR2UWVGNElPY3FfSDhHeGV0Zw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 66,
          "name": "[APEC 정상회의] 관세 완화·유가 안정은 기회…반도체 규제·LNG 수급은 불안",
          "easy": "",
          "quote": "[APEC 정상회의] 관세 완화·유가 안정은 기회…반도체 규제·LNG 수급은 불안",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 141,
              "title": "[APEC 정상회의] 관세 완화·유가 안정은 기회…반도체 규제·LNG 수급은 불안 - 아주경제",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE5uTFNrd1RrYXJXZUpZRTB2N0JSTHZWb0NWeThXbXBtbU14c2Z3VTh5X185Mk44OVBUaHdaNDlmek13YzBBQ2RhdC1wS01FcEloM29VWHNTRGzSAVhBVV95cUxObkxTa3dUa2FyV2VKWUUwdjdCUkx2Vm9DVnk4V21wbW1NeHNmd1U4eV9fOTJOODlQVGh3WjQ5ZnpNd2MwQUNkYXQtcEtNRXBJaDNvVVhzU0Rs?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 67,
          "name": "미·중, 600억달러 관세 인하 협상 재가동…세계 무역질서 다시 시험대",
          "easy": "",
          "quote": "미·중, 600억달러 관세 인하 협상 재가동…세계 무역질서 다시 시험대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 142,
              "title": "미·중, 600억달러 관세 인하 협상 재가동…세계 무역질서 다시 시험대 - 지이코노미",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE4zaXVyaTAzYU0zYmRyZm44SDZaU0lhMmVFZndtVTktdk9INVBMTG1JRmRUUW9Jbmlka1ZjVldXQ2NPbXI2dTNrUjl1X0pyR0FCOFZqbTd3aHBhS3NCNnRsYjl0Z2Y?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 68,
          "name": "관세 맞고, 세제 혜택 줄고… 엔진 식어가는 ‘K자동차’",
          "easy": "",
          "quote": "관세 맞고, 세제 혜택 줄고… 엔진 식어가는 ‘K자동차’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 143,
              "title": "관세 맞고, 세제 혜택 줄고… 엔진 식어가는 ‘K자동차’ - 서울신문",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE8xN3cyOHJIbVc4UmZwSmR3MWVOV05wdnowYnZsRjhDYnRzd1dTNE9MVWdnTFFEek14LUk0aFFhRzY3amF5R2NEUVRlS3pOSmh4dmxmbTVlS0huQy1rNGJMTkU1a1o5dWV4a0JoYkJucmVmbXRP?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 69,
          "name": "프리즘｜선전 APEC, 미중러 패권협상의 무대 되나…AI·무역·안보 충돌",
          "easy": "",
          "quote": "프리즘｜선전 APEC, 미중러 패권협상의 무대 되나…AI·무역·안보 충돌",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 144,
              "title": "프리즘｜선전 APEC, 미중러 패권협상의 무대 되나…AI·무역·안보 충돌 - OBC 뉴스",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTFAwU1hvQ0otR2x6ZF9KMUVpUHRmdFBuU1VSa1gwTDFQUGZDeEpkX0s2c2ZncC1VRlhmSUlyajJzbDdCSlJfRURYMHRvRmRJME5BWmhoRjY2NDRuRk1MdFhEZFZlOHlMM0NEZHc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 70,
          "name": "루트닉 美 상무장관 경질설 58%…철강·암호화폐·지분투자 흔들",
          "easy": "",
          "quote": "루트닉 美 상무장관 경질설 58%…철강·암호화폐·지분투자 흔들",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 146,
              "title": "루트닉 美 상무장관 경질설 58%…철강·암호화폐·지분투자 흔들 - 글로벌이코노믹",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNN0VZUVZfd3VsbXdBTXBraWE2bnBIVkNUNXllRmYwbVlwUVVmdGpCWFFCSmFXNzlBUExFVWVEcWVCYWlVZ2E4Yk5oYmVURGk3OEpDbjZLRUlYLWkxbGNGZXpyVW84YlM0ZXZadXA0S3hDZDJhS2JCRDVSY0MtbmhzcVdYZU9aMGNZ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 71,
          "name": "[뉴욕은 지금] 연준 추가 인상보다 먼저 도착한 청구서",
          "easy": "",
          "quote": "[뉴욕은 지금] 연준 추가 인상보다 먼저 도착한 청구서",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 147,
              "title": "[뉴욕은 지금] 연준 추가 인상보다 먼저 도착한 청구서 - KB Think",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE52aE53RUJNbDhGNUVkZGowblhLV29zd0h6M1pYUVEyNnNZbmRVUEdUTmQ2NWd1eXFLUkJxSUJxM0RSaTdlaFpsUTMwMlM1dkZZbDM0Z2hjajNDVkJLdFJ5RW1PVlVsV21ENzVVSUZlQzRtQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 72,
          "name": "한은 기준금리, 26일 인상될까? 미국 연준 '빅스텝' 가능성에 긴장감 고조 📈",
          "easy": "",
          "quote": "한은 기준금리, 26일 인상될까? 미국 연준 '빅스텝' 가능성에 긴장감 고조 📈",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 148,
              "title": "한은 기준금리, 26일 인상될까? 미국 연준 '빅스텝' 가능성에 긴장감 고조 📈 - 뉴닉",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiU0FVX3lxTFAxcFNHYlJxTURNSlVsTWJuekhOYURndG5VUU85ZzhRM25RTnJpMU1ncGI3R1dxMzVFR0tZSkZEbmVoOUM4Q2dwUHVxdTVMRXM3dXRF?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 73,
          "name": "[뉴욕채권-주간] 인플레 위기감 짙어진 연준…'AI 테마' 향방도 주목 |",
          "easy": "",
          "quote": "[뉴욕채권-주간] 인플레 위기감 짙어진 연준…'AI 테마' 향방도 주목 |",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 149,
              "title": "[뉴욕채권-주간] 인플레 위기감 짙어진 연준…'AI 테마' 향방도 주목 | - 연합인포맥스",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5mLTRzbjBScXRNcEdIenZGcTlteE5tTndmc05YNElacldzUmt2bVdUNEUyU0RWaF9VZE5uYnBoU29ubXkwcGlDOWNCZzJQRTdVR2RsNEpqdFVBRkFINkUxTk1uRGhybEpsTVN1WmZOakY0eXNE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 74,
          "name": "美 연준 의사록 18일 공개…12월 인상폭 촉각",
          "easy": "",
          "quote": "美 연준 의사록 18일 공개…12월 인상폭 촉각",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 150,
              "title": "美 연준 의사록 18일 공개…12월 인상폭 촉각 - 글로벌이코노믹",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPWG0zMFVSd0dUNFVEelczbFU2UGRuZEh3aUUxS1ZMdUMwNkVuRVdGUFJrMWlrMGFYbkRtRW56NldOWUdpTHBBdU8xelkxTF9wNkZ0NVljSmNwWmZfUGNhb2xPaVd6Q2t0OFd5OUpNVEZuS0c0VTFHaktFMUZEWjJqNjNWTVdXZmFk?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 75,
          "name": "캔자스시티 연은 총재 \"인플레 여전히 과열…금리로 통제할 수 있다\"",
          "easy": "",
          "quote": "캔자스시티 연은 총재 \"인플레 여전히 과열…금리로 통제할 수 있다\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 151,
              "title": "캔자스시티 연은 총재 \"인플레 여전히 과열…금리로 통제할 수 있다\" - 뉴스1",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBMbk8zY19neTh4YWZlRVRzNUJINzY3WTdpQ3JDeEJGVW1GMVk0eDd6R2FIRHRySjJfcW1LQTdYTC1nS093MlFZOWtZb3NLTTVXdXdic25lOFRYTjU1SW9uWDZvSDMtMW8?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 76,
          "name": "베센트 \"엔비디아, 외부에서 새 CEO 찾아야\"…연준에는 추가 금리 인상 자제 요구",
          "easy": "",
          "quote": "베센트 \"엔비디아, 외부에서 새 CEO 찾아야\"…연준에는 추가 금리 인상 자제 요구",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 152,
              "title": "베센트 \"엔비디아, 외부에서 새 CEO 찾아야\"…연준에는 추가 금리 인상 자제 요구 - 마켓잉크",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBzN3VkUnNOMms2QlJuVVVSb2FFVmFGdHV1UW90NUtlMUpMMUN0bHh4Y1ZranhMQXpzUHdkdVlld1NzQkNjTC04emlJdl9aeTgxWG9KdW5GSmR1bWtjcE1tX2lPRVhzTmlIbVgyN20tSQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 77,
          "name": "베선트 美 재무장관, 연준에 \"추가 긴축 자제\"…12월 인상론에 견제구",
          "easy": "",
          "quote": "베선트 美 재무장관, 연준에 \"추가 긴축 자제\"…12월 인상론에 견제구",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 153,
              "title": "베선트 美 재무장관, 연준에 \"추가 긴축 자제\"…12월 인상론에 견제구 - 뉴스핌",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE96MmM1bzhwc2tiYkxnUllQWENlMnQtbW1PY04xNXZWaFhsX2trRE1Ec0dCaTB1VHd2bzRqWUlFUFlHZlI1cGlxVkdGdkJlRHRHS2pTS1FCSEJqdnFE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 78,
          "name": "연준 인사의 금리 인상 시사에 유동성 제한 우려로 이더리움 하락",
          "easy": "",
          "quote": "연준 인사의 금리 인상 시사에 유동성 제한 우려로 이더리움 하락",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 154,
              "title": "연준 인사의 금리 인상 시사에 유동성 제한 우려로 이더리움 하락 - Traders Union",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPaU5ZdDRvU2JzdC1uLUpFdFFyNEhsU0tjMVNKNFdpUFFKWWRnbUp1ekc4MnUyZEFLZ0ZFVTRsWGtVanhwUlItRnhIRVNsUG5USTJ4RHJmNDhyVGliZXpLc25XTVVaamtqWU94SFc1aHdJVWVTcXlZSU41UFpienBycnFCOXFiMzktVkJxblVTOHNpWDVIN1BXLVlZZ21GdFNIb2c?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 79,
          "name": "한은 또 올릴까?...올해 마지막 금통위 앞두고 추가 인상 전망 ‘솔솔’",
          "easy": "",
          "quote": "한은 또 올릴까?...올해 마지막 금통위 앞두고 추가 인상 전망 ‘솔솔’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 155,
              "title": "한은 또 올릴까?...올해 마지막 금통위 앞두고 추가 인상 전망 ‘솔솔’ - 매일경제",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE1EVEJCT0ZYUHJuR0ItNFdOd2RpbW12UUJqQ3FjNlVhdHVvQ01xcFB0M0IxTDdZU01UNVZtVzlMNkVYbW0wdUczckdFeGlxcXItUjY2UA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 80,
          "name": "은행·저축은행 예금 금리 4%대 줄줄이…BNK·전북은행 업권 ‘최고’",
          "easy": "",
          "quote": "은행·저축은행 예금 금리 4%대 줄줄이…BNK·전북은행 업권 ‘최고’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 156,
              "title": "은행·저축은행 예금 금리 4%대 줄줄이…BNK·전북은행 업권 ‘최고’ - CEO스코어데일리",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE9pQmJlMXdETDlMakN5M29sR0psSkpPd0Y4REQ5cmFUUi1SSTB3RzNSWmJIdkdWSnNoUUdqcThNc1RxSHdkVGNxQXU0ejFIZjY3QnFOTXU2UWlWQ1FqOWdQR1FXNGRLQ1p6dlhv?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 81,
          "name": "금리 올려? 얼마나? ‘가계대출 1200조’ 앞 복잡해진 한은 셈법 [주말 Q&A]",
          "easy": "",
          "quote": "금리 올려? 얼마나? ‘가계대출 1200조’ 앞 복잡해진 한은 셈법 [주말 Q&A]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 157,
              "title": "금리 올려? 얼마나? ‘가계대출 1200조’ 앞 복잡해진 한은 셈법 [주말 Q&A] - 더스쿠프",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBlWHI0WWZMNkdiQnAyd0xubzNpenA0UTRpRHpNMUVZdVhkTFpJSUFOODhoNHFZMmI0UTM4SC1JMHRSbzlnUldYd1Nya0tpRlhJOFoxR3NpazU5SkJkY2d3QkMxamxlZTh1R05XdGJR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 82,
          "name": "美 연준 빅스텝 가능성에 한은 추가 금리인상 압박 커져",
          "easy": "",
          "quote": "美 연준 빅스텝 가능성에 한은 추가 금리인상 압박 커져",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 158,
              "title": "美 연준 빅스텝 가능성에 한은 추가 금리인상 압박 커져 - 스페셜경제",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE14d2hGUnJVdHVwRUxUZEVZYmRnY1hfeGZ1TnhORGRNZ0F3YjUyVW5wdi1HMGNVMjFUdEVpNjY1eG1DQWQzc3hYc2J0eW16TENzQ1RWa1czVnZIajVHemZtaU1hZ2N2Uzh0dmdIaw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 83,
          "name": "가계대출 다시 증가…이달 기준금리 인상 힘 받나",
          "easy": "",
          "quote": "가계대출 다시 증가…이달 기준금리 인상 힘 받나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 159,
              "title": "가계대출 다시 증가…이달 기준금리 인상 힘 받나 - 비즈워치",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE1qYmpMSnhmYWUzY3lpVmhJWTlpRG8xT2h4Zm90dGVwTUREclJKMFo0M0JIcXZLU1R6LUhWNDUzaktkVVRPOWpJNlpPOTdGR2djSU5Ebk9mbDctTlJhc2ZneXdwQ1AyQThKZVM0?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 84,
          "name": "지방은행, 건전성 ‘빨간불’… 연채액 2조원 넘었다",
          "easy": "",
          "quote": "지방은행, 건전성 ‘빨간불’… 연채액 2조원 넘었다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 161,
              "title": "지방은행, 건전성 ‘빨간불’… 연채액 2조원 넘었다 - www.dt.co.kr",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE9XVkZOQnpTbU10NGlPdEtoYkM3MjB4S01KQTlpSUlicDlHQUtoSlRZYWNXUGZYaUh0OFJPVEpnanRRWHZDeC1yeDhCLXJLQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 85,
          "name": "핵융합 발전 26기 추진, IAEA “상용화 800억달러 필요”",
          "easy": "",
          "quote": "핵융합 발전 26기 추진, IAEA “상용화 800억달러 필요”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 162,
              "title": "핵융합 발전 26기 추진, IAEA “상용화 800억달러 필요” - 에너지안전신문",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5qNUlVX1U1QkJyWkhqQV9KcVo2eTd4VWwwb1N5UzhoVk9fdERYMXJlcmFFYXNtSTRfZ0VwLXlrR3dQc09Xc1VoTGpmR3Rwc29XWnFmZTJRMTdMb181UV9Pekkwb2o?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 86,
          "name": "[사설] 나주 핵융합연구시설의 비전",
          "easy": "",
          "quote": "[사설] 나주 핵융합연구시설의 비전",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 163,
              "title": "[사설] 나주 핵융합연구시설의 비전 - 투데이에너지",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9ITWZpNWJWWTZmSmpGOGtRdVY3cmVUQUp3VjNSTERua2JZRjRXRmFaOVJ1YTB6NlBnTlNSbnJhSkxOSkdWbHNKTG96cTFwQ0t6X2dxOHBNRmFHd2llemVLNi1pV0dvbVhBVklrbA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 87,
          "name": "[기자현장] 나주 ‘인공태양’ 예타 통과, 미래 성장동력으로 삼아야",
          "easy": "",
          "quote": "[기자현장] 나주 ‘인공태양’ 예타 통과, 미래 성장동력으로 삼아야",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 164,
              "title": "[기자현장] 나주 ‘인공태양’ 예타 통과, 미래 성장동력으로 삼아야 - 남도일보",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5KNlc5OVEtdlczQ0VDVGJXTW80VTBPbkdja09LOGFsYTk3TWJpRWhfR1VieGUyVTdrbF85bVF5REZ2X3FkMGZHY3c4aTJUcmIzY2V0bG9PVldrVU9zSTgySEFxb3BfOFB5ZmstQ1pMZWjSAXBBVV95cUxOSjZXOTlRLXZXM0NFQ1RiV01vNFUwT25HY2tPSzhhbGE5N01iaUVoX0dVYnhlMlU3a2xfOW1ReURGdl9xZDBmR2N3OGkyVHJiM2NldGxvT1ZXa1VPc0k4MkhBcW9wXzhQeWZrLUNaTGVo?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 88,
          "name": "\"공장에 투입했더니 이럴 수가\"…中 로봇 줄줄이 '굴욕' [차이나 워치]",
          "easy": "",
          "quote": "\"공장에 투입했더니 이럴 수가\"…中 로봇 줄줄이 '굴욕' [차이나 워치]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 166,
              "title": "\"공장에 투입했더니 이럴 수가\"…中 로봇 줄줄이 '굴욕' [차이나 워치] - 한국경제",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFA0WXRzelFKS3VYbkJ5WVBwV0M0SVpQWGRfQWd1blBfb1ZGQ1N6R2RjZWdzTWRFNE14dkxDT2NlTkt4VXQtbjQyMjdRalBwTlQwTzhFbmJmNXpyQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 89,
          "name": "테슬라, 휴머노이드 '옵티머스' 2027년 산업현장 투입 추진",
          "easy": "",
          "quote": "테슬라, 휴머노이드 '옵티머스' 2027년 산업현장 투입 추진",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 167,
              "title": "테슬라, 휴머노이드 '옵티머스' 2027년 산업현장 투입 추진 - 로봇신문",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5YdlJvcHB3dmdPS0Y4aDlIaE96RFFLS1V5NXhyQ1VvTmdtazMyWThHQW9sbzczZHIwOWFweFBpcDdjMjRSZ0xUajhBNjZ0NkVIWFlBRXR0djNQaVFKRHlpTElEalhFNXVuRHVPbQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 90,
          "name": "[소년중앙] 로봇은 어떻게 세상을 보고 배우고 움직일까…피지컬 AI와 만나다",
          "easy": "",
          "quote": "[소년중앙] 로봇은 어떻게 세상을 보고 배우고 움직일까…피지컬 AI와 만나다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 168,
              "title": "[소년중앙] 로봇은 어떻게 세상을 보고 배우고 움직일까…피지컬 AI와 만나다 - 중앙일보",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBWbzVES3NMX0NBQlVSbFUxZVJUY0VuVkx2Q2FlSldHc0g5VjlJNGZVZFptV3JxdjhSYm42QU5PVEZ4SFk5bUFCUV9EYm50WG5UTXJoOEhR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 91,
          "name": "정부 로봇 액추에이터 지원 본격화…동남권 기업에 열린 ‘기회의 창’",
          "easy": "",
          "quote": "정부 로봇 액추에이터 지원 본격화…동남권 기업에 열린 ‘기회의 창’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 169,
              "title": "정부 로봇 액추에이터 지원 본격화…동남권 기업에 열린 ‘기회의 창’ - 국제신문",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPZU8wWDlxZmRlbjNxMFlxNFkxZWY5WUdVTWkyOFJGSjRkUW1ucVNZMUhud3QycndrSmxnMWdXT285U00yTzlMbGdIZnpBbFotQ18xdWxFdGhGY0pweWx4M1dQT3BFMDJWcFFUS1JNd0UxNFNFLWN2T3BDemRuYzBVTno0dWVHSUcyTXZwcnJR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 92,
          "name": "로봇이 로봇을 만든다면…2083년엔 로봇과 인구수 비슷해질 수도",
          "easy": "",
          "quote": "로봇이 로봇을 만든다면…2083년엔 로봇과 인구수 비슷해질 수도",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 170,
              "title": "로봇이 로봇을 만든다면…2083년엔 로봇과 인구수 비슷해질 수도 - 농민신문",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9KSXZ4VjhMV09ibEJvbEpyRTdKM1JrUjF6R1l6NjNfRDdTRUN0bjR4aExpZzFkLUhjNHFVSTExMFZ6OGI1OGRoZWo1LXROVjBuMDAxZDRhUjZXUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 93,
          "name": "'제21회 국제로봇콘테스트' 성료…올해 첫선 '마트 휴머노이드', 상품 배송·진열·계산 미션 생중계 관람객 호응",
          "easy": "",
          "quote": "'제21회 국제로봇콘테스트' 성료…올해 첫선 '마트 휴머노이드', 상품 배송·진열·계산 미션 생중계 관람객 호응",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 173,
              "title": "'제21회 국제로봇콘테스트' 성료…올해 첫선 '마트 휴머노이드', 상품 배송·진열·계산 미션 생중계 관람객 호응 - 전자신문",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBqcldHa1REYVlvQU5TN2szRVNQNmF2aWh0b19iSDl4RHNpTnNoZ1hlay1CMWR1QnYtczMyMkpraF9zMXhkXzNHSmhZY3Y?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 94,
          "name": "'수출통제 대 희토류'…트럼프 겹악재에 '시진핑 주도권'",
          "easy": "",
          "quote": "'수출통제 대 희토류'…트럼프 겹악재에 '시진핑 주도권'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 181,
              "title": "'수출통제 대 희토류'…트럼프 겹악재에 '시진핑 주도권' - 뉴스토마토",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5UQ1NOMzFDcG5CVHJHX2V6ODVXUWlRT1ZGaFhPM0pIdGttMlk2cEFtLXNrY1REd21BNW41akVDdV9ENUZlTXZISGJsRi1MaTBEYU9MZS02SElyWmYzdmhwYg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 95,
          "name": "[영상] 중국선 1200만원, 유럽선 15억원?...중국 희토류 통제의 나비효과",
          "easy": "",
          "quote": "[영상] 중국선 1200만원, 유럽선 15억원?...중국 희토류 통제의 나비효과",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 182,
              "title": "[영상] 중국선 1200만원, 유럽선 15억원?...중국 희토류 통제의 나비효과 - 더구루",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiXkFVX3lxTFBRUW5LSHNnUHN5dDJib3NuV2d6NngwS0Y3QXVhN3VXaWVqQTdET05VUFI2dlVNN056XzUwMmFYNzNURHctWUhhQzFvY3ZtZmdsWE93cVFHZ3RMU0ZFcEE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 96,
          "name": "中 전문가 \"美 반도체 규제 강화하면 희토류로 맞대응\"…정상회담 앞두고 경고",
          "easy": "",
          "quote": "中 전문가 \"美 반도체 규제 강화하면 희토류로 맞대응\"…정상회담 앞두고 경고",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 185,
              "title": "中 전문가 \"美 반도체 규제 강화하면 희토류로 맞대응\"…정상회담 앞두고 경고 - 솔루션뉴스",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE00M3JoYzdObFRKeUN2X0daazVweFRHb1NBbEk1clZOcWV1V2NWc1JHZjdpWGhqUXpHMXRMYnhfcE45UHFBazVyUHlCZ3MxZ0tfRm9aZlBxUVpHYTJBZ0hLVkpRcy04UEYza1Jz?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 97,
          "name": "젠슨 황 스캔들로 中 견제 움직임 꿈틀…'K피지컬 AI' 반사이익 주목",
          "easy": "",
          "quote": "젠슨 황 스캔들로 中 견제 움직임 꿈틀…'K피지컬 AI' 반사이익 주목",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 193,
              "title": "젠슨 황 스캔들로 中 견제 움직임 꿈틀…'K피지컬 AI' 반사이익 주목 - 뉴시스",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTE0tXy1Ed3BNZzNfNWlhdmZTelFkdU1kTHlfejJzOVZGWGlfQWloY25ZSXJGNndmR0pqLTBFYzF0SkhpT29LRzY4N25PdEF5NC1LOVlIQk5QVElJakFMbkNBa0t0WkNBdkJJbmlYZ1pLVVFsOXk1dnZJatIBeEFVX3lxTE0tXy1Ed3BNZzNfNWlhdmZTelFkdU1kTHlfejJzOVZGWGlfQWloY25ZSXJGNndmR0pqLTBFYzF0SkhpT29LRzY4N25PdEF5NC1LOVlIQk5QVElJakFMbkNBa0t0WkNBdkJJbmlYZ1pLVVFsOXk1dnZJag?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 98,
          "name": "[젠슨 황 스캔들] 엔비디아, 회사 보호 보험 없어…소송 부담 커지나",
          "easy": "",
          "quote": "[젠슨 황 스캔들] 엔비디아, 회사 보호 보험 없어…소송 부담 커지나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 195,
              "title": "[젠슨 황 스캔들] 엔비디아, 회사 보호 보험 없어…소송 부담 커지나 - IT조선",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1SSkk0YW1tTkUwWjhKcjUzTzM5dXI5cUIwb2ZSVmRqMjdVX2JFTUdnR1ZvbThiSExxc05Rc0FYN3V1cS01amczd2trbVY0NnhVQV9YVjUyTFdLVFhBenR5d2NxS1lOU1Q4ZjFRb1FQN0jSAXRBVV95cUxNMTRfNWZEVnN5M3hacldDdWJDajBaWlYxc0N4a1VzZmJrb2FvcDNYLVkzZHFFUVc3UGVuVGIxdEZhd1E0M285d0VITVdRVkgzOHZ1RlBnSkZZQ0xIV2N0RjFCRHlGOFJYbklpRHd0SEpadHZBLQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 99,
          "name": "임원에 물병 던지고 폭언…젠슨 황 '민낯' 증언 나와 - 머니투데이",
          "easy": "",
          "quote": "임원에 물병 던지고 폭언…젠슨 황 '민낯' 증언 나와 - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 196,
              "title": "임원에 물병 던지고 폭언…젠슨 황 '민낯' 증언 나와 - 머니투데이 - 머니투데이",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE16T21mVUhiRVFNbUROaUJsNXBlSDdnUXVCQ3VubXV0VTl1UUNvS0xEQVRwbVpDOWMwNjZTVmMxdkszUldTb18ydDducm1LSl9qVXp4cS1JbW1wcnptbUU0ek5xUmVZVkh1U3hUUGRB0gFuQVVfeXFMTXpPbWZVSGJFUU1tRE5pQmw1cGVIN2dRdUJDdW5tdXRVOXVRQ29LTERBVHBtWkM5YzA2NlNWYzF2SzNSV1NvXzJ0N25ybUtKX2pVenhxLUltbXByem1tRTR6TnFSZVlWSHVTeFRQZEE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 100,
          "name": "AI 다음은 ‘양자컴퓨터’? “아이온큐, 2027년 물량 완판…주가 37.9달러 간다” [투자360]",
          "easy": "",
          "quote": "AI 다음은 ‘양자컴퓨터’? “아이온큐, 2027년 물량 완판…주가 37.9달러 간다” [투자360]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1946,
              "title": "AI 다음은 ‘양자컴퓨터’? “아이온큐, 2027년 물량 완판…주가 37.9달러 간다” [투자360] - 헤럴드경제 미주판",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5mR1hvaXZLSHJ3UW1iVzQ0ejhFbk4zN0lqa01QNUZoOUc5MTJnRk4ya0hnYXNqMnlRZ0ZTQzdVanR6Y1FrcXc3U0pTVFRyUzZUakFWY1BLYkVac2dxY1hwVA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 101,
          "name": "브레이튼 사이클 냉장고 시장 2035년 전망: LNG·반도체 냉각이 성장 견인 - 뉴스 및 통계",
          "easy": "",
          "quote": "브레이튼 사이클 냉장고 시장 2035년 전망: LNG·반도체 냉각이 성장 견인 - 뉴스 및 통계",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1947,
              "title": "브레이튼 사이클 냉장고 시장 2035년 전망: LNG·반도체 냉각이 성장 견인 - 뉴스 및 통계 - IndexBox",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMiywFBVV95cUxOY2ExeDFadGRBSDE4SGNaQzREY2lrb3FCWmliNTZ5X1Y1Wm5pcGVzRy1RVWdwMFNNcjNiMXhSalRCYng3TzNXcXEtMGgydkRYTFVBTUotWS1wMjZ6MjdIZ1BnWkVhNEdZSDFYeVd4RUhFbFdJQUZyXzh1NmhaR1pfekR2U0tvNl9hWVVoOGpFZU5SYk5BeFhwU2U0bUdPcXVHZ1lFTlY1Xy16Y2VETUx4U3d5aG10TXcwQU15SEpKZDhTdnhva2psenZhNA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 102,
          "name": "미 상무부, 양자 컴퓨팅 스타트업에 최대 1억 달러 투입…반도체 공급망 정책과 연계",
          "easy": "",
          "quote": "미 상무부, 양자 컴퓨팅 스타트업에 최대 1억 달러 투입…반도체 공급망 정책과 연계",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1948,
              "title": "미 상무부, 양자 컴퓨팅 스타트업에 최대 1억 달러 투입…반도체 공급망 정책과 연계 - 대한청년일보",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9OaTZjVjdQLXZjV1VWekxjUjlZTEpnMmFiX0QyYkpSek9WY1VGN0QxQTdoN2I2akQ4SVZnNWhxSGlWZHFFNVAzd2FmeDBXM2dNNC1YX1J3?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 103,
          "name": "2035년 자동 웨스턴 시스템 시장 전망: 바이오의약품 품질관리 수요가 성장 견인 - 뉴스 및 통계",
          "easy": "",
          "quote": "2035년 자동 웨스턴 시스템 시장 전망: 바이오의약품 품질관리 수요가 성장 견인 - 뉴스 및 통계",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1956,
              "title": "2035년 자동 웨스턴 시스템 시장 전망: 바이오의약품 품질관리 수요가 성장 견인 - 뉴스 및 통계 - IndexBox",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxOaDFSUXd2QmptM2pLaW9kWGhMYS1RMUdpU2dabWJJSlFubU9NdUhsWEllWlU3QVgyNWgyYnpMaFR4ZDNkaFpWVm1IZ18tN2t4QVd1TGhKaUxCU21zaUVLYTI3STNsLVBwNTlDMWtTVmpibXFpM0Q0cVc3SFFkX1hzOG8xSC1HRlNTdE9sekJRbE16alVkakZ6dkVCdndHSC1NVW41bGRUMWR2RDA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 104,
          "name": "목소리 넘어 감정·음계까지 복원한 '뇌컴퓨터인터페이스'",
          "easy": "",
          "quote": "목소리 넘어 감정·음계까지 복원한 '뇌컴퓨터인터페이스'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1957,
              "title": "목소리 넘어 감정·음계까지 복원한 '뇌컴퓨터인터페이스' - DongA Science",
              "source_name": "'뇌과학 BCI 기술'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE1YZjF4RW1iTUc4Ui12T0JEZmF0WVlTMEwwV1duZ21ud0RQVm1VYmRyRlJWa2hJMi1DUXk0b1BBa0dOZGRyVDJ5U0VIX0o5M2Fza1lPWQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 105,
          "name": "뇌 임플란트 참가자들의 첫 번째 권리 선언 — 'OUR BCI'가 묻는 것들",
          "easy": "",
          "quote": "뇌 임플란트 참가자들의 첫 번째 권리 선언 — 'OUR BCI'가 묻는 것들",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1958,
              "title": "뇌 임플란트 참가자들의 첫 번째 권리 선언 — 'OUR BCI'가 묻는 것들 - 얼리어답터뉴스",
              "source_name": "'뇌과학 BCI 기술'",
              "link": "https://news.google.com/rss/articles/CBMiSkFVX3lxTFBmYjVlZXU0MHBkbEFqMWJqQldrX0l5YWcwdXVhTjlGdENQQmNwX1ZZWHh3WEt6MloyMFV4eUZjZEZ1ankxcG9IT3RB?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        },
        {
          "rank_by_count": 106,
          "name": "기후위기, 선언 넘어 실천하라",
          "easy": "",
          "quote": "기후위기, 선언 넘어 실천하라",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1962,
              "title": "기후위기, 선언 넘어 실천하라 - 중대신문",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE5zNkhxcEo2MzJVaEFQSkpjRVFYWFc3eU1vVnVzR0JfZUJxYV8zb09vcjA0VGZYUks3azJQcnAybk5rekV5SnlJLTFLWnBpQURJXzgzRjlfTEYwR1B2aExMMnk5dHZtcU9kSmR30gFrQVVfeXFMTnM2SHFwSjYzMlVoQVBKSmNFUVhYVzd5TW9WdXNHQl9lQnFhXzNvT29yMDRUZlhSSzdrMlBycDJuTmt6RXlKeUktMUtacGlBRElfODNGOV9MRjBHUHZoTEwyeTl0dm1xT2RKZHc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        }
      ]
    },
    "ch5_papers": {
      "title": "챕터 5 · 논문",
      "addr": "처리-4",
      "kind": "papers",
      "day": "2026-11-15",
      "day_label": "11월 15일(어제)",
      "day_rel": "어제",
      "day_note": "11월 15일(어제) 논문이에요. 오늘 논문은 논문 풀이(새벽 바퀴 바로 뒤, 백업 12:07)가 끝나면 이 자리로 바뀌어요.",
      "made": "2026-11-15T19:57:48",
      "picks_max": 10,
      "status": "돎 — 2026-11-15 논문 풀이 90편 / 새 논문 2편",
      "headline": {
        "text": "11월 15일(어제) 새 논문 2편 · 풀이한 90편 중 AI 모델·학습법 쪽이 33편으로 가장 많아요. (arXiv는 오늘 새 목록이 없었어요)",
        "text_orig": "오늘 새 논문 2편 · 풀이한 90편 중 AI 모델·학습법 쪽이 33편으로 가장 많아요. (arXiv는 오늘 새 목록이 없었어요)",
        "n_new": {
          "val": 2,
          "source": "v2_secretary/결과/논문/2026-11-15_논문.json"
        },
        "n_done": {
          "val": 90,
          "source": "v2_secretary/결과/논문/2026-11-15_논문.json"
        },
        "n_done_new": {
          "val": 2,
          "source": "v2_secretary/결과/논문/2026-11-15_논문.json"
        },
        "n_done_backlog": {
          "val": 88,
          "source": "v2_secretary/결과/논문/2026-11-15_논문.json"
        },
        "n_waiting": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-15_논문.json"
        },
        "n_failed": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-15_논문.json"
        },
        "top_tag": "AI 모델·학습법",
        "top_tag_n": {
          "val": 33,
          "source": "v2_secretary/결과/논문/2026-11-15_논문.json"
        }
      },
      "flow": {
        "text": "11월 15일에 풀이한 논문들 중에서는 AI 모델의 학습 효율을 높이거나 에이전트의 도구 활용 능력을 개선하는 연구가 가장 많이 눈에 띄었습니다. 예를 들어 모델의 연산 비용을 줄이거나 에이전트가 스스로 경험을 정리해 다음 단계로 전달하게 만드는 식인데, 이는 AI가 더 똑똑하고 유연하게 움직이도록 만드는 과정이라고 보면 됩니다. 이와는 조금 다르게 전력망 제어나 로봇의 물리적 제어처럼 실제 시스템의 안정성을 높이는 연구들도 여럿 올라왔거든요. 쉽게 말하면 AI의 지능을 높이는 쪽과 실제 기계를 다루는 쪽의 연구가 활발하게 이루어진 셈입니다.",
        "by": "ai",
        "flags": [],
        "text_orig": "오늘 풀이한 논문들 중에서는 AI 모델의 학습 효율을 높이거나 에이전트의 도구 활용 능력을 개선하는 연구가 가장 많이 눈에 띄었습니다. 예를 들어 모델의 연산 비용을 줄이거나 에이전트가 스스로 경험을 정리해 다음 단계로 전달하게 만드는 식인데, 이는 AI가 더 똑똑하고 유연하게 움직이도록 만드는 과정이라고 보면 됩니다. 이와는 조금 다르게 전력망 제어나 로봇의 물리적 제어처럼 실제 시스템의 안정성을 높이는 연구들도 여럿 올라왔거든요. 쉽게 말하면 AI의 지능을 높이는 쪽과 실제 기계를 다루는 쪽의 연구가 활발하게 이루어진 셈입니다."
      },
      "map": [
        {
          "tag": "AI 모델·학습법",
          "n": 33,
          "n_done": 33,
          "one_lines": [
            "이미지 생성기를 시각 인식 시스템으로 바꾸는 오픈 소스 방식을 개발했어요.",
            "결정 모델의 역할을 행동, 평가, 교육으로 나누어 분석하고 교육자로서의 효용을 입증했어요.",
            "하이퍼 커넥션 구조를 단순화하여 학습 효율을 높인 SimpleHC를 제안했어요."
          ]
        },
        {
          "tag": "AI 에이전트·도구",
          "n": 21,
          "n_done": 21,
          "one_lines": [
            "로봇 학습용 환경과 행동 데이터 세트를 구축하고 재사용 방안을 제시했어요.",
            "AI 에이전트가 문서를 읽을 때 필요한 정보만 선별해 토큰 효율을 높였어요.",
            "로봇 학습 시 평가 기준 노출이 과적합을 유발함을 밝히고 대안을 제안했어요."
          ]
        },
        {
          "tag": "AI 안전·평가",
          "n": 12,
          "n_done": 12,
          "one_lines": [
            "AI 휴머나이저의 사실 왜곡을 검증하고 새로운 탐지 모델을 제안했어요.",
            "언어 모델의 인지적 행동을 사람 데이터와 비교해 평가하는 도구를 만들었어요.",
            "멀티모달 모델의 데이터 표현 방식에 따른 일관성과 판단 능력을 평가했어요."
          ]
        },
        {
          "tag": "제어·로봇",
          "n": 9,
          "n_done": 9,
          "one_lines": [
            "거대 언어 모델을 활용해 리아푸노프 함수를 찾는 기법을 개발했어요.",
            "데이터 기반 예측 제어의 성능 한계를 수학적으로 분석하고 평가 기준을 마련했어요.",
            "시스템 고장에 대비한 액추에이터 배치 알고리즘을 수학적으로 설계했어요."
          ]
        },
        {
          "tag": "영상·음성·멀티모달",
          "n": 4,
          "n_done": 4,
          "one_lines": [
            "TTB 기법을 통해 시점 합성 모델의 렌더링 속도와 품질을 동시에 개선했어요.",
            "하이브리드 어텐션을 적용해 시각 이해와 생성을 통합한 모델을 개발했어요.",
            "드론 영상 정렬 시 발생하는 오류를 측정하고 마스킹 기법으로 해결했어요."
          ]
        },
        {
          "tag": "전력망·계통",
          "n": 3,
          "n_done": 3,
          "one_lines": [
            "전력망 최적화에서 학습 기반 제약 조건 선택의 효용성을 분석했어요.",
            "거대언어모델과 사람의 검수를 결합해 전력망 제어 성능을 높였어요.",
            "인덕터를 활용한 새로운 변환기 구조를 설계하고 성능을 검증했어요."
          ]
        },
        {
          "tag": "의료·바이오",
          "n": 3,
          "n_done": 3,
          "one_lines": [
            "언어 모델로 생체 신호 모델의 가중치를 직접 수정해 효율적으로 학습시켰어요.",
            "100만 건의 뇌 영상을 학습해 전문적인 해석과 대화가 가능한 의료 AI를 개발했어요.",
            "작은 언어 모델을 미세 조정해 의료 합성 데이터를 만들고 예측 모델 성능을 높였어요."
          ]
        },
        {
          "tag": "수학·이론",
          "n": 3,
          "n_done": 3,
          "one_lines": [
            "D차원 입방체 웅덩이에서 무작위 보행의 탈출 속도를 수학적으로 분석했어요.",
            "LPV 모델 식별을 위한 새로운 초기화 및 최적화 기법을 제안했어요.",
            "GPU 최적화와 CPU 솔버를 결합해 WPMAX-SAT 해결 성능을 높였어요."
          ]
        },
        {
          "tag": "반도체·하드웨어",
          "n": 1,
          "n_done": 1,
          "one_lines": [
            "활성화 벡터의 유사성을 활용해 광학 신경망 가속기의 추론 정확도를 높였어요."
          ]
        },
        {
          "tag": "기타",
          "n": 1,
          "n_done": 1,
          "one_lines": [
            "3D 난류 예측 모델을 평가할 대규모 데이터셋을 구축하고 성능 한계를 분석했어요."
          ]
        }
      ],
      "picks": [
        {
          "canon_id": "2611.15844",
          "badge": "실무 인기",
          "why": "허깅페이스 추천 34"
        },
        {
          "canon_id": "2611.17167",
          "badge": "교차 출현",
          "why": "여러 곳에 같이 올라옴: cs.AI + 허깅페이스"
        },
        {
          "canon_id": "2611.08318",
          "badge": "추천 급상승",
          "why": "허깅페이스 추천이 전날 6 → 18"
        },
        {
          "canon_id": "2611.09567",
          "badge": "의외",
          "why": "오늘 풀이 중 드문 주제 '기타'(1편) — 키워드·추천수와 상관없이 고름"
        },
        {
          "canon_id": "2611.05984",
          "badge": "실무 인기",
          "why": "허깅페이스 추천 29"
        },
        {
          "canon_id": "2611.16561",
          "badge": "의외",
          "why": "오늘 풀이 중 드문 주제 '반도체·하드웨어'(1편) — 키워드·추천수와 상관없이 고름"
        }
      ],
      "cards": [
        {
          "canon_id": "2611.15844",
          "title": "Open Vision Banana: A Fully Open Recipe for Generative Visual Perception",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.15844",
            "arxiv": "https://arxiv.org/abs/2611.15844"
          },
          "published": "2026-11-11",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 34,
          "score": 3.4,
          "score_why": "추천 34 → +3.4",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 모델은 성능은 좋은데 속을 알 수가 없었어요",
            "easy1_desc": "기존의 비전 바나나(Vision Banana) 모델은 이미지 생성기를 활용해 시각 인식 문제를 잘 풀어냈지만, 정작 중요한 데이터나 가중치, 코드 같은 핵심 정보가 공개되지 않았다는 문제가 있었거든요. 이 때문에 연구자들이 모델을 직접 재현하거나 개선하기가 어려웠던 겁니다. 쉽게 말하면, 성능은 뛰어나지만 누구나 써볼 수 있는 열린 기술은 아니었다는 말이에요.",
            "easy1_evidence": "However, its data, weights, code, and implementation details are not public.",
            "easy2_title": "모든 걸 공개해서 누구나 쓸 수 있는 모델을 만들었어요",
            "easy2_desc": "그래서 연구진은 오픈 비전 바나나(OVB)를 통해 데이터부터 코드까지 모든 과정을 완전히 공개했는데요, 기존 생성 모델을 시각 인식 시스템으로 바꾸는 방법을 누구나 따라 할 수 있게 만든 겁니다. 성능 면에서도 기존 모델의 제로샷 성능을 뛰어넘는 결과를 보여줬거든요. 다만, 특정 세분화 작업에서는 여전히 기존 모델보다 뒤처지는 부분도 있다는 점은 참고해야 합니다.",
            "easy2_evidence": "We present Open Vision Banana (OVB), a fully open and reproducible recipe for converting pretrained generators into unified multi-task perception systems.",
            "topic": "사전 학습된 이미지 생성기를 활용해 시각 인식 시스템을 구축하고 그 설계 요소를 분석한 연구예요.",
            "topic_evidence": "We present Open Vision Banana (OVB), a fully open and reproducible recipe for converting pretrained generators into unified multi-task perception systems.",
            "points": [
              {
                "subtitle": "설계 요소의 상호작용 분석",
                "desc": "색상 인코딩이나 프롬프트 설계 같은 요소들이 일반화 성능에 어떤 영향을 주는지 분석했는데요, 각각은 도움이 되더라도 조합 방식에 따라 오히려 성능을 떨어뜨릴 수도 있다는 점을 확인했습니다. 뭔 소리냐면, 개별 요소보다 이들의 상호작용을 고려한 설계가 중요하다는 말이에요.",
                "evidence": "Our analyses identify the design choices that matter most for generalization, including color encoding, prompt design, parameter adaptation, and task balancing."
              },
              {
                "subtitle": "성능 검증 및 비교",
                "desc": "4B와 9B 파라미터 모델을 기반으로 210만에서 380만 개의 학습 쌍을 사용해 모델을 만들었는데요, 시티스케이프(Cityscapes) 데이터셋에서 기존 모델의 69.9 mIoU를 넘어서는 73.9 mIoU를 기록했습니다. 기존의 최신 깊이 추정 모델들과도 대등한 수준의 성능을 보여준 셈이에요.",
                "evidence": "Starting from 4B and 9B parameter open-weight base models and using 2.1M-3.8M training pairs from public datasets, OVB surpasses Vision Banana's reported Cityscapes zero-shot performance (73.9 vs. 69.9 mIoU) and rivals state-of-the-art affine-invariant depth estimators."
              },
              {
                "subtitle": "레전드 앙상블 기법 도입",
                "desc": "재학습 없이도 성능을 높이기 위해 여러 클래스-색상 조합으로 이미지를 분할하고 다수결로 결과를 합치는 레전드 앙상블 기법을 도입했습니다. 이 방식을 썼더니 시티스케이프에서는 최대 8.7점, 코코(COCO)-객체 데이터셋에서는 15.0점까지 mIoU가 올랐다고 연구진은 밝혔습니다.",
                "evidence": "With legend ensembling, we introduce a test-time scaling method for generator-based perception."
              }
            ],
            "one_line": "이미지 생성기를 시각 인식 시스템으로 바꾸는 오픈 소스 방식을 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "일부 세분화 작업에서는 기존 모델보다 성능이 낮다는 한계가 있어요.",
            "limit_evidence": "Its non-zero-shot variants come within five points of Vision Banana on referring and reasoning segmentation but remain further behind on instance segmentation."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.17167",
          "title": "Actor, Judge, or Teacher? Understanding Decision Models in Long-Horizon Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI",
            "허깅페이스"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17167",
            "hf": "https://huggingface.co/papers/2611.17167"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 33,
          "score": 3.3,
          "score_why": "추천 33 → +3.3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "결정 모델이 행동만 잘하면 되는 줄 알았거든요",
            "easy1_desc": "지금까지는 인공지능 결정 모델을 주로 행동을 직접 수행하는 배우 역할로만 평가해 왔는데요, 행동을 얼마나 잘하느냐가 곧 모델의 성능이라고 여겼던 거예요. 그런데 연구진은 행동을 잘 못 하는 모델이라도 다른 역할을 맡기면 충분히 가르치는 능력이 있을 수 있다고 의문을 던졌거든요. 쉽게 말하면, 행동은 서툴러도 남을 가르치는 선생님으로는 훌륭할 수 있다는 가능성을 확인해 본 겁니다.",
            "easy1_evidence": "Prior work has studied them mainly as actors, judging their usefulness by how well they act.",
            "easy2_title": "행동은 서툴러도 가르치는 건 잘할 수 있더라고요",
            "easy2_desc": "연구진이 ALFWorld와 WebShop 환경에서 모델들을 시험해 봤더니, 행동 모델로 쓸 때는 쉬운 목표에 이끌려 정작 중요한 하위 목표를 놓치는 문제가 있었거든요. 하지만 전체 과정을 지켜보는 평가자나 선생님 역할을 맡기니, 각 행동이 결과에 미친 영향을 정확히 짚어내며 성능을 크게 높였다는 거예요. 실제로 JEV 모델을 선생님으로 썼더니 Qwen2.5-1.5B 모델의 성공률이 ALFWorld에서 72.8%에서 82.9%로, WebShop에서는 56.8%에서 71.4%로 올랐거든요. 행동을 직접 할 때보다 끝난 뒤 결과를 평가할 때 행동의 가치를 훨씬 더 잘 파악할 수 있다는 뜻이에요.",
            "easy2_evidence": "As a teacher, JEV raises a Qwen2.5-1.5B policy over GRPO from 72.8% to 82.9% success on ALFWorld and from 56.8% to 71.4% on WebShop.",
            "topic": "결정 모델이 행동, 평가, 교육이라는 세 가지 역할에서 각각 어떤 성능을 보이는지 비교하고, 행동 능력이 부족한 모델도 교육자로서 효과적일 수 있음을 입증했어요.",
            "topic_evidence": "We compare three decision models and three general LLMs as actors and judges on ALFWorld, and use JEV as a teacher on ALFWorld and WebShop.",
            "points": [
              {
                "subtitle": "행동 모델의 한계",
                "desc": "실험에 참여한 여섯 모델 모두 행동 모델로 작동할 때는 더 중요한 하위 목표를 제쳐두고 당장 쉬운 목표에만 매달리는 경향을 보였거든요. 행동을 직접 수행할 때는 전체적인 맥락을 놓치기 쉽다는 점을 보여준 셈이에요.",
                "evidence": "As actors, all six models are pulled away from a subgoal that must come first by an easier one."
              },
              {
                "subtitle": "평가자로서의 가능성",
                "desc": "전체 과정을 지켜보는 평가자 역할을 맡겼더니, 모델들이 각 행동이 성공에 얼마나 기여했는지를 정확히 판단해 냈거든요. 단순히 최종 성공 여부만 묻는 게 아니라 각 단계의 행동이 도움이 되었는지를 따지는 방식이 유용한 행동과 쓸모없는 행동을 구분하는 데 효과적이었다는 말이에요.",
                "evidence": "As judges that see the whole trajectory, the same models credit the steps toward that subgoal, and asking whether each action helped, rather than whether the task will succeed, separates useful from useless actions."
              },
              {
                "subtitle": "교육자로서의 성과",
                "desc": "JEV 모델을 선생님으로 활용해 강화학습 정책을 훈련했더니, ALFWorld와 WebShop 모두에서 성공률이 눈에 띄게 향상됐거든요. 이는 행동을 직접 수행하는 능력과 결과를 평가하고 가르치는 능력은 별개이며, 후자가 학습에 더 큰 도움을 줄 수 있다는 연구진의 주장을 뒷받침합니다.",
                "evidence": "These results suggest that a poor actor can still teach well, because judging an action after the episode ends reveals the consequences that acting must anticipate."
              }
            ],
            "one_line": "결정 모델의 역할을 행동, 평가, 교육으로 나누어 분석하고 교육자로서의 효용을 입증했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.15401",
          "title": "SLyM: LLM-Driven Symbolic Lyapunov Function Discovery via Structure Proposal and Coefficient Optimization",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15401"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "리아푸노프 함수를 직접 찾아내는 게 너무 어렵거든요",
            "easy1_desc": "동역학 시스템이 안정적인지 확인하려면 리아푸노프 함수가 꼭 필요한데, 이걸 수학적인 기호 형태로 만들어내는 보편적인 방법이 없어서 연구자들이 애를 먹고 있어요. 기존 방식으로는 복잡한 시스템의 안정성을 증명하기가 까다롭거든요. 쉽게 말하면, 시스템이 멈추지 않고 잘 돌아갈지 판단할 기준을 세우는 것 자체가 큰 숙제였다는 말이에요.",
            "easy1_evidence": "Lyapunov functions are the cornerstone of stability analysis for dynamical systems, yet synthesizing a symbolic form remains difficult as no universal constructive algorithm exists.",
            "easy2_title": "거대 언어 모델을 써서 함수 구조를 똑똑하게 제안해 봤어요",
            "easy2_desc": "연구진은 거대 언어 모델(LLM)의 지식을 활용해 리아푸노프 함수를 찾는 SLyM이라는 틀을 만들었는데요, LLM에게 숫자 계산을 직접 시키는 대신 함수 구조를 제안하게 하고 계수는 볼록 최적화(convex program)로 푸는 방식을 택했어요. 이렇게 하면 LLM이 잘 못 하는 수치 계산은 수학적 기법으로 보완할 수 있거든요. 결과적으로 기존의 신경망이나 제곱합(sum-of-squares) 방식보다 모든 벤치마크에서 더 나은 성능을 보였다고 주장했어요.",
            "easy2_evidence": "To address this challenge, we introduce SLyM, a framework that harnesses the knowledge and reasoning of large language models (LLMs) to discover symbolic Lyapunov functions.",
            "topic": "거대 언어 모델을 활용하여 동역학 시스템의 안정성 분석을 위한 리아푸노프 함수를 자동으로 찾아내는 기법에 관한 연구예요.",
            "topic_evidence": "To address this challenge, we introduce SLyM, a framework that harnesses the knowledge and reasoning of large language models (LLMs) to discover symbolic Lyapunov functions.",
            "points": [
              {
                "subtitle": "구조 제안과 계수 최적화의 분리",
                "desc": "LLM이 가진 사전 지식을 활용해 함수 구조를 먼저 제안하고, 그 안에 들어갈 계수는 볼록 최적화 기법으로 계산하게 했어요. LLM이 수치 계산에서 겪는 어려움을 수학적 최적화로 해결한 셈이에요.",
                "evidence": "SLyM decomposes the construction into structure proposal and coefficient optimization: the LLM draws on its prior knowledge of Lyapunov constructions to propose the function structure, whose coefficients then follow from a convex program."
              },
              {
                "subtitle": "국소 탐색을 통한 성능 보완",
                "desc": "처음 제안된 구조에서 놓친 시스템을 찾아내기 위해 국소 탐색(local-search) 구조를 다시 학습 과정에 반영했어요. 이렇게 하면 처음에 찾지 못한 영역까지 커버할 수 있다는 장점이 있어요.",
                "evidence": "Local-search structures are folded back into supervision, extending coverage to systems missed by the initial proposer."
              },
              {
                "subtitle": "기존 방식 대비 우수한 성능",
                "desc": "연구진은 SLyM이 신경망 기반 방식이나 제곱합 방식 등 기존의 다른 방법들보다 모든 벤치마크에서 더 뛰어난 결과를 냈다고 밝혔어요. 안정성 분석의 효율성을 높였다는 점에서 의미가 크다고 볼 수 있어요.",
                "evidence": "Across all benchmarks, SLyM consistently outperforms the evaluated neural, sum-of-squares, and generative baselines."
              }
            ],
            "one_line": "거대 언어 모델을 활용해 리아푸노프 함수를 찾는 기법을 개발했어요.",
            "topic_tag": "제어·로봇",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "제어·로봇",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.15289",
          "title": "Fundamental Limits of Data-Driven Predictive Control",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15289"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "데이터 기반 제어 방식이 얼마나 잘 작동할지 따져봤습니다",
            "easy1_desc": "데이터 기반 예측 제어(DDPC)가 최근 주목받고 있지만, 실제로 이 방식들이 통계적으로 얼마나 성능을 낼 수 있는지, 그 한계는 어디까지인지에 대해서는 알려진 바가 적었거든요. 연구진은 기존에 개발한 통계적 의사결정 체계를 활용해 DDPC가 가진 근본적인 성능 한계를 분석해 봤습니다. 쉽게 말하면, 데이터만으로 제어기를 만들 때 피할 수 없는 성능의 벽이 어디인지 확인해 본 셈이에요.",
            "easy1_evidence": "Data-driven predictive control (DDPC) has attracted substantial interest, and many variants have been proposed; however, comparatively less is known about the statistical closed-loop performance of these methods and the fundamental limits they are subject to.",
            "easy2_title": "제어 성능의 하한선을 수학적으로 증명해 냈습니다",
            "easy2_desc": "연구진은 편향-분산 분해와 크라메르-라오 부등식을 사용해 제어 성능의 하한선을 도출했는데요, 이를 통해 어떤 DDPC 설계를 가져오더라도 넘을 수 없는 성능의 한계를 수치로 계산할 수 있게 됐습니다. 이 결과는 기존 제어 방식들이 얼마나 잘 작동하는지 평가하는 기준점이 될 수 있거든요. 결과적으로 제어기 설계 시 정규화 매개변수를 어떻게 조정해야 할지 구체적인 지침까지 제시했다는 점이 특징입니다.",
            "easy2_evidence": "This bound applies to any DDPC design, thereby quantifying unavoidable performance limitations and providing a benchmark for assessing existing DDPC methods.",
            "topic": "데이터 기반 예측 제어(DDPC)의 통계적 성능 한계를 수학적으로 규명하고 이를 평가하는 기준을 제시한 연구입니다.",
            "topic_evidence": "In this contribution, we apply the statistical decision framework developed in our earlier work to study fundamental limits of DDPC.",
            "points": [
              {
                "subtitle": "성능 평가 지표 설정",
                "desc": "제어기의 성능을 측정하기 위해 오라클 모델 기반 제어기와 비교했을 때 발생하는 기대 성능 저하인 위험(risk)과, 관심 있는 모든 시스템에 걸친 총 위험을 지표로 삼았습니다. 이 지표를 통해 데이터 기반 제어기가 이상적인 모델 기반 제어기와 비교해 얼마나 차이가 나는지 정량적으로 파악하는 겁니다.",
                "evidence": "The performance of a data-driven controller is measured by its risk, the expected deterioration in control performance relative to an oracle model-based controller at a given system, and by its total risk that measures the overall performance across all systems of interest."
              },
              {
                "subtitle": "수학적 하한선 도출",
                "desc": "편향-분산 분해와 크라메르-라오 부등식을 활용해 위험의 하한선을 유도했고, 특히 변분법을 사용하여 총 위험에 대한 하한선을 얻어냈습니다. 이는 데이터 기반 제어 설계에서 피할 수 없는 성능의 한계를 수학적으로 증명한 것이라는 게 연구진의 설명이에요.",
                "evidence": "Lower bounds on these risks are derived using the bias-variance decomposition and the Cramer-Rao inequality."
              },
              {
                "subtitle": "기존 방식과의 비교 및 지침",
                "desc": "확신 등가 모델 예측 제어, 부분 공간 예측 제어, 데이터 활성화 예측 제어 등 기존 방식들을 도출한 하한선과 비교해 봤습니다. 이를 통해 각 방식의 성능을 수치적으로 평가하고, DDPC 설계 시 정규화 매개변수를 조정하는 데 필요한 가이드를 제공했습니다.",
                "evidence": "In an illustrative example, we compare the risks of certainty-equivalence model predictive control, subspace predictive control, and data-enabled predictive control with the derived lower bounds, providing a quantitative performance assessment of these methods and some guidance on tuning regularization parameters in DDPC."
              }
            ],
            "one_line": "데이터 기반 예측 제어의 성능 한계를 수학적으로 분석하고 평가 기준을 마련했어요.",
            "topic_tag": "제어·로봇",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "제어·로봇",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.15205",
          "title": "Algorithms for Robust Dedicated Actuator Placement",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15205"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시스템이 고장 나도 작동하게 하려면 어디에 장치를 둘까",
            "easy1_desc": "구조화된 선형 시스템에서 특정 상태에 전용 액추에이터(구동기)를 설치할 때, 장치가 고장 나더라도 시스템이 멈추지 않게 하려면 어디에 배치해야 할지 고민해 봤는데요. 장치가 고장 나면 그 기능은 사라지지만 시스템의 상태와 연결 구조는 그대로 남는다는 점에 주목한 겁니다. 이게 왜 중요하냐면, 고장 상황에서도 시스템의 핵심 기능을 유지하기 위한 최적의 배치 지점을 찾아야 하기 때문이에요.",
            "easy1_evidence": "We study dedicated actuators installed at distinct states of a structured linear system.",
            "easy2_title": "고장 상황을 고려한 배치 알고리즘을 만들었어요",
            "easy2_desc": "연구진은 고장 상황을 반영해 액추에이터를 배치하는 알고리즘을 개발했는데요. 장치 하나가 고장 나는 상황에서는 공통 복구 그래프에서의 최대 매칭을 활용해 3/2 근사치를 찾아냈고, 여러 장치가 고장 나는 상황에서도 해결 가능한 알고리즘을 제시했습니다. 쉽게 말하면, 시스템의 복원력을 높이기 위해 고장 예산과 매칭 결함을 고려한 최적의 배치 전략을 수학적으로 증명해 낸 셈이에요.",
            "easy2_evidence": "For unit costs and one failure, an exact source-quota relaxation followed by maximum matching in a \\emph{common-repair graph} yields a $3/2$-approximation on arbitrary directed state graphs using $O(n^3)$ elementary graph operations.",
            "topic": "구조화된 선형 시스템에서 액추에이터 고장에 대비한 최적 배치 알고리즘 연구예요.",
            "topic_evidence": "The underlying result solves resilient matroid spanning with an arbitrary number of disjoint unit-cost quota constraints.",
            "points": [
              {
                "subtitle": "단일 고장 대응 알고리즘",
                "desc": "장치 하나가 고장 나는 경우를 가정해, 임의의 방향성 상태 그래프에서 3/2 근사치를 구하는 알고리즘을 설계했습니다. O(n^3)의 그래프 연산으로 효율적인 배치가 가능하도록 만들었다는 말이에요.",
                "evidence": "For unit costs and one failure, an exact source-quota relaxation followed by maximum matching in a \\emph{common-repair graph} yields a $3/2$-approximation on arbitrary directed state graphs using $O(n^3)$ elementary graph operations."
              },
              {
                "subtitle": "다중 고장 및 복원력 최적화",
                "desc": "여러 장치가 동시에 고장 나는 상황에서도 작동하는 알고리즘을 제시했는데요. 이는 최대 매칭 결함과 고장 예산에 따라 계산 복잡도가 결정되는 방식으로, 시스템의 복원력을 수학적으로 보장하는 겁니다.",
                "evidence": "For multiple failures, we give an exact algorithm fixed-parameter tractable in the maximum-matching deficiency and failure budget, independently of the number of source strongly connected components."
              },
              {
                "subtitle": "독립 오라클 모델 적용",
                "desc": "독립 오라클 모델을 사용하여 안전한 요소와 취약한 요소를 구분하는 가중치 스패닝 알고리즘을 확립했습니다. 강하게 연결된 상태 그래프에 이 방식을 적용해 실질적인 배치 문제를 해결할 수 있다는 거예요.",
                "evidence": "We also establish an exact weighted spanning algorithm for safe and vulnerable elements in the independence-oracle model, with an application to strongly connected state graphs."
              }
            ],
            "one_line": "시스템 고장에 대비한 액추에이터 배치 알고리즘을 수학적으로 설계했어요.",
            "topic_tag": "제어·로봇",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "제어·로봇",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.15142",
          "title": "When Does Learned Constraint Selection Pay in Security-Constrained Optimisation? A Boundary Map from SCOPF to Unit Commitment",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15142"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 전력망 최적화에서 인공지능이 정말 더 빠를까",
            "easy1_desc": "전력망을 운영할 때 안전 제약 조건을 미리 예측해서 문제를 단순화하는 학습 기반 최적화 방식이 있는데요, 이 방식은 기존보다 속도를 수백에서 수만 배까지 높일 수 있다고 알려져 있어요. 그런데 연구진은 이 방식이 학습 없이도 모든 제약 조건을 미리 포함하는 고정된 방식보다 정말 나은지 의문을 가졌거든요. 쉽게 말하면, 똑똑한 인공지능이 무식하게 모든 조건을 다 넣는 방식보다 항상 유리한지 따져 본 셈이에요.",
            "easy1_evidence": "Learning-to-optimise methods for security-constrained optimal power flow (SCOPF) predict the security constraints that bind on each instance and solve only the reduced problem, with reported speed-ups of two to four orders of magnitude over the full problem.",
            "easy2_title": "제약 조건의 비용에 따라 학습의 가치가 달라진다는 사실",
            "easy2_desc": "실험 결과, 전력망 최적화(SCOPF)에서는 고정된 제약 조건 세트가 인공지능보다 뒤처지지 않았는데요, 인공지능이 속도는 높여도 제약 조건을 4~5% 확률로 위반하는 문제가 있었거든요. 반면 단위 약정(Unit Commitment) 문제에서는 예비력에 비용이 발생하기 때문에 학습 기반 방식이 훨씬 효율적이었어요. 결국 학습이 효과를 보려면 단순히 문제의 크기가 중요한 게 아니라, 불필요한 제약 조건을 유지하는 데 비용이 드는지 여부가 핵심이라는 겁니다.",
            "easy2_evidence": "In our experiments, whether learning pays depends not on problem size but on whether a spare carries a price.",
            "topic": "전력망 최적화 문제에서 학습 기반 제약 조건 선택 방식이 기존 고정 방식보다 우월한지 그 효용성을 분석했어요.",
            "topic_evidence": "We ask whether learned selection beats the strongest learning-free alternative: a fixed umbrella set enforcing every constraint observed to bind in training.",
            "points": [
              {
                "subtitle": "가격의 기준, 예비력의 비용",
                "desc": "연구진은 제약 조건을 미리 선택하는 학습 방식이 언제 유리한지 판단하기 위해 예비력의 가격이라는 기준을 세웠어요. 제약 조건을 포함해도 활성화되지 않으면 비용이 들지 않지만, 예비력 결정에 비용이 발생하는 경우에는 학습 방식이 가치를 발휘한다는 거예요.",
                "evidence": "Our criterion, the price of a spare, answers this in advance: an enforced but inactive constraint is free, so the umbrella is exactly optimal wherever feasible, and learning can pay only where a spare decision carries a price."
              },
              {
                "subtitle": "전력망 최적화에서의 한계",
                "desc": "최대 10,000개 버스 규모의 PGLib-OPF 네트워크를 대상으로 실험해 봤더니, 고정된 제약 조건 세트가 인공지능보다 성능이 떨어지지 않았어요. 인공지능은 약 80,000배의 속도 향상을 보였지만 4~5%의 사례에서 제약 조건을 위반하는 단점이 있었거든요.",
                "evidence": "For SCOPF on a fixed network the umbrella is never beaten: its median size is five constraints across 43 networks, with no size trend, and our selector, while reproducing speed-ups of published magnitude (about x80,000 at case500), gains at most 0.25 ms over the umbrella and violates constraints on 4-5% of instances."
              },
              {
                "subtitle": "단위 약정 문제에서의 성과",
                "desc": "반면 단위 약정 문제에서는 고정된 방식이 샘플 외 데이터에서 4~12%의 손실을 보였는데요, 예측-수정-축소 파이프라인을 적용했더니 비용 격차를 0.2~2.9%까지 줄이면서도 혼합 정수 선형 계획법(MILP)보다 16~161배 빠르게 문제를 해결했어요.",
                "evidence": "In unit commitment, where a spare has a price, a static commitment loses 4-12% out of sample, and a predict-repair-reduce pipeline recovers it (cost gap 0.2-2.9%, fully feasible, 16-161x faster than the MILP)."
              }
            ],
            "one_line": "전력망 최적화에서 학습 기반 제약 조건 선택의 효용성을 분석했어요.",
            "topic_tag": "전력망·계통",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.15133",
          "title": "Sim-to-Real Powertrain Vibration Control via Model-Based Assisted Domain-Randomized Reinforcement Learning",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15133"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "모델만 믿고 제어기를 짜면 실제 기계에서는 성능이 떨어지거든요",
            "easy1_desc": "자동차 구동계처럼 비선형적인 특성이 있거나 부품 간 유격이 있는 기계는 원래 설계한 모델과 실제 움직임이 다를 때가 많습니다. 강화학습(DRL)으로 이런 차이를 극복하려 해도, 무작정 환경을 무작위로 바꾸면 학습이 불안정해지고 결과가 너무 소극적으로 나오는 문제가 있거든요. 그래서 실제 기계에 적용하는 사례를 찾기가 어려웠던 겁니다.",
            "easy1_evidence": "Controllers designed from nominal models often degrade on mechanical systems with nonlinearities and parametric variations, such as automotive powertrains with backlash.",
            "easy2_title": "모델 기반 제어와 강화학습을 합쳐서 학습을 안정화했습니다",
            "easy2_desc": "연구진은 모델 기반 제어기(H2 controller)가 기본적인 제어를 맡고, 강화학습이 나머지 비선형적인 오차를 보정하는 MBCADR이라는 방식을 제안했습니다. 강화학습 에이전트가 모든 제어 입력을 혼자 다 만들 필요가 없으니 학습이 훨씬 안정적으로 변한 겁니다. 실제로 유격이 있는 시험 장치에 적용해 봤더니, 추가적인 튜닝 없이도 시뮬레이션에서 학습한 정책이 실제 기계에서 잘 작동하는 것을 확인했습니다.",
            "easy2_evidence": "This paper presents model-based controller assisted domain randomization (MBCADR), a framework that integrates model-based control into domain-randomized DRL.",
            "topic": "자동차 구동계의 진동 제어를 위해 모델 기반 제어와 강화학습을 결합한 MBCADR 프레임워크를 제안하고 그 성능을 검증했습니다.",
            "topic_evidence": "This paper presents model-based controller assisted domain randomization (MBCADR), a framework that integrates model-based control into domain-randomized DRL.",
            "points": [
              {
                "subtitle": "MBCADR 제어 구조",
                "desc": "기본 모델로 설계한 H2 제어기가 기준 동작을 제공하고, 강화학습 정책이 비선형성과 불확실성을 보완하는 구조입니다. 에이전트의 부담을 줄여 광범위한 무작위 환경에서도 학습이 안정적으로 이루어지도록 했습니다.",
                "evidence": "An $H_{2}$ controller designed from the nominal model supplies a baseline action, while a residual policy trained with twin delayed deep deterministic policy gradient under randomized dynamics compensates for nonlinearities and uncertainties."
              },
              {
                "subtitle": "안정성 분석 및 최적화",
                "desc": "연구진은 리아푸노프(Lyapunov) 기반 안정성 분석을 통해 학습된 정책이 머무는 상태 범위와 한계치를 명확히 유도했습니다. 이를 통해 도메인 무작위화 학습을 매개변수화된 마르코프 결정 과정(MDP)으로 엄밀하게 정립했습니다.",
                "evidence": "A Lyapunov-based stability analysis further derives a forward-invariant set and an explicit ultimate bound, in which the learned action enters only through its saturation level."
              },
              {
                "subtitle": "시뮬레이션 및 실험 검증",
                "desc": "몬테카를로 시뮬레이션을 통해 MBCADR이 기존 방식보다 성능 편차를 줄인다는 점을 확인했습니다. 실제 유격이 있는 구동계 시험 장치에서도 별도의 추가 튜닝 없이 시뮬레이션 정책을 그대로 적용해 성공적인 시뮬레이션-실제(Sim-to-Real) 전이를 증명했습니다.",
                "evidence": "Experiments on a powertrain test bench with backlash, using the simulation-trained policy on an embedded processor without further tuning, confirm successful sim-to-real transfer."
              }
            ],
            "one_line": "모델 기반 제어와 강화학습을 결합해 구동계 진동을 효과적으로 제어했어요.",
            "topic_tag": "제어·로봇",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "제어·로봇",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.15123",
          "title": "Backstepping-Forwarding Design for Hyperbolic PIDE-ODE Systems with Distributed Interconnection and an Arbitrarily Large Input Delay",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15123"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡하게 얽힌 시스템에서 지연 문제를 어떻게 다룰까",
            "easy1_desc": "이 연구는 분산된 연결 구조를 가진 편미분-적분 방정식(PIDE)과 상미분 방정식(ODE)이 섞인 시스템을 다루고 있는데요. 여기서 가장 큰 문제는 입력 신호가 전달되는 데 시간이 걸리는 지연 현상이에요. 연구진은 이 지연이 아무리 길어도 시스템을 안정적으로 제어할 방법을 고민했거든요. 쉽게 말하면, 신호가 늦게 도착해도 시스템이 흔들리지 않게 만드는 기술을 연구한 셈이에요.",
            "easy1_evidence": "This paper studies first-order hyperbolic partial integro-differential equation (PIDE) and ordinary differential equation (ODE) cascades with distributed interconnection and an arbitrarily large known constant input delay.",
            "easy2_title": "변환 기술을 써서 시스템을 안정적으로 만들었어요",
            "easy2_desc": "연구진은 포워딩 변환이라는 기술을 써서 복잡한 분산 연결을 단순한 경계 결합 구조로 바꿨는데요. 이렇게 하면 시스템 자체가 원래 안정적이지 않아도 제어가 가능해진다는 장점이 있어요. 그 뒤에 백스테핑 설계를 더해 지연 문제를 보상하고 시스템 전체를 안정화했거든요. 결과적으로 커널 방정식에서 불연속성이 나타날 수 있는데, 연구진은 이 부분들이 서로 상쇄되어 전체 시스템에는 영향을 주지 않는다는 점을 증명해 냈습니다.",
            "easy2_evidence": "Within the backstepping--forwarding framework, a forwarding-type transformation is designed to reduce the distributed interconnection to an equivalent boundary-coupled Dirichlet cascade without requiring the PIDE to be open-loop stable.",
            "topic": "분산 연결과 큰 입력 지연을 가진 PIDE-ODE 시스템을 백스테핑-포워딩 기법으로 안정화하는 설계 연구예요.",
            "topic_evidence": "Within the backstepping--forwarding framework, a forwarding-type transformation is designed to reduce the distributed interconnection to an equivalent boundary-coupled Dirichlet cascade without requiring the PIDE to be open-loop stable.",
            "points": [
              {
                "subtitle": "포워딩 변환을 통한 구조 단순화",
                "desc": "복잡하게 얽힌 분산 연결 구조를 포워딩 변환을 통해 경계 결합 구조로 바꿨는데요. 이 과정 덕분에 시스템이 원래 안정적이지 않은 상태여도 제어 설계를 시작할 수 있게 된 겁니다.",
                "evidence": "Within the backstepping--forwarding framework, a forwarding-type transformation is designed to reduce the distributed interconnection to an equivalent boundary-coupled Dirichlet cascade without requiring the PIDE to be open-loop stable."
              },
              {
                "subtitle": "지연 보상과 안정화 설계",
                "desc": "포워딩 변환 이후에 백스테핑 설계를 적용해서 입력 지연을 보상하고 시스템을 안정화했는데요. 연구진은 이 과정을 통해 시스템이 지수적으로 안정된 상태를 유지할 수 있음을 증명했습니다.",
                "evidence": "A subsequent backstepping design stabilizes the PIDE and the ODE while compensating for the input delay."
              },
              {
                "subtitle": "불연속성 문제 해결",
                "desc": "지연 보상 과정에서 커널 방정식에 불연속성이 생길 수 있는데, 연구진은 이 점프의 위치와 크기를 찾아냈어요. 계산 결과 이 항들이 서로 상쇄되어 최종 시스템에는 영향을 주지 않는다는 점을 확인했습니다.",
                "evidence": "We determine their jump locations and amplitudes and prove that the interface terms cancel when deriving the target equations, so the kernel discontinuities do not change the target system."
              }
            ],
            "one_line": "지연이 큰 PIDE-ODE 시스템을 제어하는 설계를 제안했어요.",
            "topic_tag": "제어·로봇",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "제어·로봇",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.15086",
          "title": "Metropolis Random Walks Escape Deep Basins Faster in Higher Dimensions",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15086"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 최적화 문제에서 왜 빠져나오기 어려운지 알아봤어요",
            "easy1_desc": "시뮬레이티드 어닐링(SA)은 복잡한 문제의 최적값을 찾을 때 쓰는 방법인데, 특정 온도에서 지역 최솟값(local minima)이라는 웅덩이에 빠지면 잘 헤어 나오지 못하는 문제가 있거든요. 연구진은 이 웅덩이의 모양과 차원이 탈출 시간에 어떤 영향을 주는지 궁금해했습니다. 쉽게 말하면, 공간이 넓어질수록 웅덩이에서 빠져나오는 속도가 어떻게 변하는지 수학적으로 따져 본 셈이에요.",
            "easy1_evidence": "It is of great interest to understand how its ability to escape local minima at a fixed temperature depends on geometry and dimension.",
            "easy2_title": "차원이 높아질수록 웅덩이 탈출이 훨씬 빨라진다는 걸 증명했어요",
            "easy2_desc": "연구진은 D차원 입방체 웅덩이에서 메트로폴리스 무작위 보행이 탈출하는 시간을 계산해 봤는데요, 차원이 높아질수록 웅덩이에서 빠져나오는 속도가 N의 D-1제곱만큼 빨라진다는 사실을 밝혀냈습니다. 1차원과 비교했을 때 차원이 커질수록 탈출 효율이 좋아진다는 뜻이에요. 톰슨의 원리 등을 활용해 수학적으로 엄밀하게 증명했고, D가 1, 2, 3일 때 수치 계산으로도 확인했거든요.",
            "easy2_evidence": "Relative to D=1, this gives an asymptotic speedup of order N^{D-1} within this family of cubic basins.",
            "topic": "D차원 입방체 웅덩이에서 메트로폴리스 무작위 보행의 평균 탈출 시간을 수학적으로 분석하고 그 속도 향상을 증명했어요.",
            "topic_evidence": "In this paper, we extend the analysis to D-dimensional cubic basins defined by the infinity-norm energy V(x)=||x||_infinity.",
            "points": [
              {
                "subtitle": "쉘 몫 연쇄 모델 구축",
                "desc": "메트로폴리스 전기 네트워크의 동심원 껍질들을 하나의 노드로 합쳐서 1차원 생사 껍질 몫 연쇄(birth-death shell-quotient chain)를 만들었습니다. 이렇게 하면 전체 정지 질량을 유지하면서도 복잡한 다차원 구조를 단순화해서 다룰 수 있거든요.",
                "evidence": "We construct a one-dimensional birth-death shell-quotient chain by collapsing each concentric shell in the Metropolis electrical network to a single node while retaining its total stationary mass."
              },
              {
                "subtitle": "탈출 시간의 수학적 공식 도출",
                "desc": "수락 확률 p, 웅덩이 깊이 N, 차원 D를 변수로 하는 평균 탈출 시간 Q_D(N)의 닫힌 형식 식을 유도했습니다. N이 무한대로 커질 때 탈출 시간은 대략 알파의 N제곱을 N의 D-1제곱으로 나눈 값에 비례한다는 것을 확인했고요.",
                "evidence": "We derive a closed-form expression for the mean escape time Q_D(N) of this shell-quotient chain as a function of the acceptance probability p, the basin depth N, and the dimension D."
              },
              {
                "subtitle": "이론적 증명과 수치적 검증",
                "desc": "쉘 평균을 내지 않은 실제 메트로폴리스 평균 탈출 시간 H_D(N)도 같은 스케일링 법칙을 따른다는 것을 레일리 단조성과 톰슨의 원리를 이용해 증명했습니다. 또한 D가 1, 2, 3인 경우에 대해 수치 해석을 수행하여 실제 체인과 몫 체인 사이의 차이를 정량화했어요.",
                "evidence": "We prove that the true Metropolis mean escape time H_D(N), without shell averaging, has the same Theta(alpha^N/N^{D-1}) scaling, establishing a lower bound via Rayleigh monotonicity and a matching upper bound through an explicit low-energy flow construction using Thomson's principle."
              }
            ],
            "one_line": "D차원 입방체 웅덩이에서 무작위 보행의 탈출 속도를 수학적으로 분석했어요.",
            "topic_tag": "수학·이론",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                false
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "5/6",
            "evidence_all": false,
            "evidence_by_symbols": 3,
            "bad_numbers": [
              "2",
              "3"
            ],
            "format": [],
            "flags": [],
            "tag": "수학·이론",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.15003",
          "title": "LLM-Enhanced Deep Reinforcement Learning with Human-in-the-Loop Calibration for Real-Time Optimal Power Flow",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15003"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존의 숫자 보상만으로는 복잡한 전력망 운영을 다 담기 어려웠어요",
            "easy1_desc": "실시간 최적 전력 흐름(RT-OPF)을 제어할 때 딥러닝(DRL)을 쓰곤 하는데요, 운영자가 원하는 복잡한 안전 규칙이나 선호 사항을 오직 숫자 형태의 보상으로만 표현하기가 참 까다로웠거든요. 그러다 보니 인공지능이 실제 현장의 미묘한 요구사항까지 완벽하게 배우는 데 한계가 있었다는 말이에요. 쉽게 말하면, 기계가 이해하기엔 현장의 규칙이 너무 복잡하고 추상적이었다는 겁니다.",
            "easy1_evidence": "However, many practical operating preferences and safety related requirements are difficult to encode using conventional numerical rewards alone, which limits the effectiveness and controllability of deep reinforcement learning (DRL) for RT-OPF.",
            "easy2_title": "거대언어모델과 사람의 검수를 더해 똑똑하고 안전하게 제어했어요",
            "easy2_desc": "연구진은 거대언어모델(LLM)을 활용해 언어 기반의 평가를 보상에 추가했고, 사람이 직접 모델의 판단을 검수하는 사람 개입(HITL) 방식을 도입했는데요. 모델이 학습하는 과정에서 이상한 판단을 내리면 사람이 골라내어 바로잡아 주는 방식이에요. 이렇게 했더니 기존 방식보다 안전성이 좋아졌고, 학습 과정도 훨씬 안정적으로 변했다는 결과가 나왔거든요. 결국 언어적 조언과 전문가의 검수가 합쳐질 때 전력망 제어 성능이 가장 좋았다는 겁니다.",
            "easy2_evidence": "Case studies on the IEEE 30-bus and IEEE 118-bus systems show that LLM feedback improves policy safety over vanilla TD3, while further HITL calibration achieves the best overall performance and more stable training behavior.",
            "topic": "거대언어모델과 인간의 피드백을 결합하여 실시간 최적 전력 흐름 제어의 성능과 안전성을 높이는 새로운 학습 프레임워크를 제안했어요.",
            "topic_evidence": "To address this issue, this paper proposes an LLM-enhanced DRL framework with human-in-the-loop (HITL) for RT-OPF.",
            "points": [
              {
                "subtitle": "언어 기반 보상 설계",
                "desc": "기존의 물리 기반 보상 체계에 언어 형태의 평가 피드백을 더해서 학습시켰는데요. 이렇게 하면 운영자가 말로 표현하는 복잡한 요구사항들을 인공지능이 정책 학습 과정에 자연스럽게 녹여낼 수 있다는 거예요.",
                "evidence": "The proposed method augments the physics-based reward with sparse language evaluative feedback during offline training, so that semantic operational requirements can be incorporated into policy learning."
              },
              {
                "subtitle": "사람 개입을 통한 검수",
                "desc": "거대언어모델이 내리는 판단이 항상 정확할 수는 없기에, 사람이 중간에 개입해서 의심스러운 판단을 걸러내고 수정하는 과정을 넣었어요. 모델이 잘못된 방향으로 학습을 이어가는 것을 방지하는 안전장치인 셈이에요.",
                "evidence": "To improve reliability in RT-OPF, a selective HITL calibration mechanism is further introduced to inspect and correct questionable LLM judgments before they continuously shape the learning process."
              },
              {
                "subtitle": "성능 검증 결과",
                "desc": "IEEE 30-bus와 118-bus 시스템에서 실험해 봤더니, 기존의 TD3 방식보다 안전성이 크게 높아졌어요. 특히 사람의 검수까지 더했을 때 가장 안정적이고 뛰어난 성능을 보였다고 연구진은 주장했습니다.",
                "evidence": "Case studies on the IEEE 30-bus and IEEE 118-bus systems show that LLM feedback improves policy safety over vanilla TD3, while further HITL calibration achieves the best overall performance and more stable training behavior."
              }
            ],
            "one_line": "거대언어모델과 사람의 검수를 결합해 전력망 제어 성능을 높였어요.",
            "topic_tag": "전력망·계통",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.14927",
          "title": "Inverse-Optimal Fixed-Time Integral Reinforcement Learning for Unknown Nonlinear Leader-Follower Multi-Agent Systems",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14927"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 다중 에이전트 시스템의 움직임을 예측하기가 어려웠어요",
            "easy1_desc": "여러 대의 로봇이나 기기가 서로 따라가는 다중 에이전트 시스템은 각자의 움직임이 어떻게 변할지 미리 알기 어렵다는 문제가 있었는데요. 기존에는 시스템의 정보를 모두 알아야 제어가 가능했는데, 실제 환경에서는 이런 정보를 완벽히 파악하기가 힘들거든요. 뭔 소리냐면, 정보가 부족한 상태에서 시스템을 안정적으로 움직이게 만드는 게 큰 숙제였다는 말이에요.",
            "easy1_evidence": "This paper develops a distributed inverse-optimal fixed-time integral reinforcement learning framework for unknown nonlinear leader-follower multi-agent systems.",
            "easy2_title": "데이터를 재구성해서 정해진 시간 안에 목표를 달성하게 만들었어요",
            "easy2_desc": "연구진은 유한한 적분 데이터를 활용해 알 수 없었던 에이전트의 움직임을 먼저 재구성했는데요. 이를 바탕으로 정해진 시간 안에 목표를 달성하는 함수를 설계하고, 그에 맞는 비용을 찾아내는 역최적 제어 방식을 도입했어요. 특히 기존에 필요했던 지속적인 자극 조건 없이도 학습이 가능해졌다는 장점이 있는데, 덕분에 복잡한 시스템에서도 빠르게 합의에 도달할 수 있게 된 셈이에요.",
            "easy2_evidence": "A critic-only integral reinforcement learning architecture is then developed using current integral data and finitely informative experience-replay data, thereby avoiding the persistent-excitation requirement.",
            "topic": "알려지지 않은 비선형 다중 에이전트 시스템을 위해 역최적 고정 시간 강화학습 프레임워크를 제안했어요.",
            "topic_evidence": "This paper develops a distributed inverse-optimal fixed-time integral reinforcement learning framework for unknown nonlinear leader-follower multi-agent systems.",
            "points": [
              {
                "subtitle": "시스템 동역학 재구성",
                "desc": "알려지지 않은 에이전트의 움직임을 유한한 적분 데이터를 사용해 다시 구성해 냈는데요. 시스템의 정보를 미리 알지 못해도 데이터만으로 움직임의 특성을 파악할 수 있다는 게 핵심이에요.",
                "evidence": "The proposed method first reconstructs the unknown agent dynamics from finite integral data."
              },
              {
                "subtitle": "역최적 강화학습 설계",
                "desc": "목표로 하는 고정 시간 가치 함수를 미리 정해두고, 이에 적합한 비용 함수를 역으로 찾아내는 방식을 사용했어요. 비평가(Critic) 신경망만 사용하는 구조를 통해 복잡한 학습 과정을 단순화했거든요.",
                "evidence": "Based on the identified dynamics, a distributed inverse-optimal formulation is constructed by prescribing a desired fixed-time value function and recovering a compatible running cost."
              },
              {
                "subtitle": "고정 시간 합의 보장",
                "desc": "네트워크 수준에서 리아푸노프(Lyapunov) 분석을 통해 시스템이 정해진 시간 안에 목표를 따라가는 합의에 도달함을 증명했어요. 수치 시뮬레이션을 통해 이론의 타당성도 확인했고요.",
                "evidence": "Finally, a network-level composite Lyapunov analysis proves practical fixed-time leader-following consensus of the true unknown nonlinear multi-agent system."
              }
            ],
            "one_line": "알려지지 않은 다중 에이전트 시스템을 위한 역최적 강화학습 프레임워크를 개발했어요.",
            "topic_tag": "제어·로봇",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "제어·로봇",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.14778",
          "title": "An Inductively Assisted N :1 Switched-Capacitor Ladder Converter",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14778"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 변환기의 출력단 스위치를 인덕터로 바꿔 봤어요",
            "easy1_desc": "기존의 N:1 스위치드 커패시터 래더 벅(SCLB) 변환기는 출력단 아래쪽 스위치에서 손실이 생기는 문제가 있었는데요, 연구진은 이 스위치를 작은 인덕터로 대체하는 방식을 제안했어요. 이 인덕터는 에너지를 방출하는 단계에서 병렬로 연결되어 작동하는데요, 쉽게 말하면 스위치 대신 인덕터를 써서 전류 흐름을 더 효율적으로 조절하겠다는 거예요.",
            "easy1_evidence": "This paper proposes an inductively assisted N:1 switched-capacitor ladder buck (D-SCLB) converter that replaces the output-side switch in the bottom half-bridge of an N:1 SCLB with a small inductor placed in parallel with the ladder capacitors during the demagnetization phase.",
            "easy2_title": "전류 부담은 줄이고 효율은 높이는 설계를 해냈어요",
            "easy2_desc": "새로운 D-SCLB 방식을 적용했더니 인덕터에 흐르는 평균 전류가 최대 20% 줄어들었고, 출력 임피던스도 30%까지 개선되는 결과가 나왔거든요. 실제 48V에서 PoL(Point-of-Load)로 변환하는 4:1 설계에서 시험해 보니 효율은 96.2%를 기록했고, 인덕터 부피도 기존보다 49%나 줄일 수 있었다는 거예요. 결과적으로 성능은 유지하면서도 부품 크기를 크게 줄인 셈이에요.",
            "easy2_evidence": "For a 4:1 48V-to-PoL design, the D-SCLB reduces the average inductor current by up to 20% and improves the equivalent output impedance by up to 30% relative to the SCLB.",
            "topic": "인덕터를 추가하여 성능을 개선한 새로운 N:1 스위치드 커패시터 래더 벅 변환기 구조를 제안하고 검증했어요.",
            "topic_evidence": "This paper proposes an inductively assisted N:1 switched-capacitor ladder buck (D-SCLB) converter that replaces the output-side switch in the bottom half-bridge of an N:1 SCLB with a small inductor placed in parallel with the ladder capacitors during the demagnetization phase.",
            "points": [
              {
                "subtitle": "동작 원리와 모델링",
                "desc": "플라잉 커패시터가 부하 전류를 나누어 전달하게 함으로써 인덕터 전류를 (1-M)Iout 수준으로 낮추고 연속적인 전압 조절이 가능하게 만들었어요. 또한 스위치 크기에 상관없이 적용 가능한 출력 임피던스 모델을 유도해서 기존 방식들과 비교했거든요.",
                "evidence": "The flying capacitors share the load current delivery, lowering the average inductor current to (1-M)Iout and enabling continuous regulation with M=D/(N-1+D)."
              },
              {
                "subtitle": "성능 개선 수치",
                "desc": "기존 SCLB 방식과 비교했을 때 인덕터의 평균 전류는 최대 20% 감소했고, 출력 임피던스는 30% 향상되었다고 연구진은 주장했어요. 이는 더 적은 부품 부담으로도 안정적인 전력 변환이 가능하다는 점을 보여줍니다.",
                "evidence": "For a 4:1 48V-to-PoL design, the D-SCLB reduces the average inductor current by up to 20% and improves the equivalent output impedance by up to 30% relative to the SCLB."
              },
              {
                "subtitle": "하드웨어 검증 결과",
                "desc": "저비용 2층 PCB로 두 개의 시제품을 만들어 시험한 결과, 최대 96.2%의 효율을 달성했어요. 같은 효율 수준에서 인덕터 부피를 49% 줄였고, 실제 측정값과 모델 예측치가 부하가 큰 상황에서도 1.5% 이내로 일치했거든요.",
                "evidence": "Two hardware prototypes on a low-cost two-layer PCB achieve a peak efficiency of 96.2%, with the D-SCLB using 49% smaller inductor volume than the SCLB at comparable efficiency."
              }
            ],
            "one_line": "인덕터를 활용한 새로운 변환기 구조를 설계하고 성능을 검증했어요.",
            "topic_tag": "전력망·계통",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.14668",
          "title": "Learning of LPV Models With Linear Fractional Representations: Initialization, Optimization, and Conditioning",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14668"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 시스템을 다루는 모델을 만들 때 초기 설정이 너무 어려웠어요",
            "easy1_desc": "선형 파라미터 변화(LPV) 모델은 비선형 시스템을 제어하기 좋게 표현할 수 있는데, 입출력 데이터로 이 모델을 찾아내는 과정은 초기값 설정에 따라 결과가 크게 달라지는 비볼록 최적화 문제거든요. 그래서 기존에는 무작위로 초기값을 여러 번 설정하는 방식을 주로 썼는데, 이게 효율이 떨어지는 문제가 있었던 겁니다. 쉽게 말하면, 시작점을 잘 잡아야 하는데 그게 마음대로 안 돼서 고생했다는 말이에요.",
            "easy1_evidence": "However, identifying these models together with their scheduling map from input-output data requires solving a non-convex optimization problem that is highly sensitive to initialization.",
            "easy2_title": "더 똑똑한 초기화 전략과 최적화 기법으로 해결책을 찾았어요",
            "easy2_desc": "연구진은 최적의 선형 근사기(BLA)를 활용한 새로운 초기화 전략을 제안했는데요, 이를 통해 무작위 설정보다 훨씬 일관되고 정확한 결과를 얻을 수 있게 됐습니다. 또한 모델의 조건수를 개선하기 위해 두 가지 다중 슈팅 기법인 UMS와 EBMS를 비교 분석했는데, 이 방법들을 쓰면 무작위 초기화로 인한 결과의 편차를 줄일 수 있다는 겁니다. 결과적으로 초기화의 정확도는 높이고 최적화 과정의 불안정성은 낮추는 효과를 거둔 셈이에요.",
            "easy2_evidence": "Instead, our work proposes an initialization strategy based on the Best Linear Approximator (BLA).",
            "topic": "LPV-LFR 모델의 식별 성능을 높이기 위한 초기화 전략과 다중 슈팅 최적화 기법에 관한 연구예요.",
            "topic_evidence": "The initialization and multiple shooting methods are evaluated on a nonlinear mass-spring-damper example, showing that BLA initialization consistently yields accurate results, whereas random initialization has a large spread.",
            "points": [
              {
                "subtitle": "BLA 기반 초기화 전략",
                "desc": "연구진은 최적의 선형 근사기(BLA)를 사용하여 모델의 초기값을 설정하는 방식을 도입했습니다. 이를 통해 기존의 무작위 초기화 방식이 가졌던 큰 결과 편차 문제를 해결하고 일관된 정확도를 확보했다고 주장했어요.",
                "evidence": "Instead, our work proposes an initialization strategy based on the Best Linear Approximator (BLA)."
              },
              {
                "subtitle": "다중 슈팅 기법 비교",
                "desc": "비볼록 비용 함수의 조건수를 개선하기 위해 비제약 다중 슈팅(UMS)과 인코더 기반 다중 슈팅(EBMS)을 비교했습니다. 두 방법 모두 무작위 초기화 모델의 결과 편차를 줄이는 데 효과적임을 확인했거든요.",
                "evidence": "The results also show that both UMS and EBMS reduce the spread for randomly initialized models."
              },
              {
                "subtitle": "기법별 적용 환경",
                "desc": "UMS는 튜닝이 간단해 짧은 데이터 기록에 적합하고, EBMS는 인코더 학습과 하이퍼파라미터 튜닝이 필요하지만 많은 수의 짧은 기록을 활용해 조건수를 더 개선할 수 있다는 장점이 있습니다.",
                "evidence": "UMS is simple to tune and well suited to few sub-records, whereas EBMS can exploit many short sub-records to further improve conditioning, at the cost of training an encoder and tuning additional hyperparameters."
              }
            ],
            "one_line": "LPV 모델 식별을 위한 새로운 초기화 및 최적화 기법을 제안했어요.",
            "topic_tag": "수학·이론",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "수학·이론",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.05984",
          "title": "On the Design of Hyper-Connections: Simplification, Stability, and Scalability",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.05984",
            "arxiv": "https://arxiv.org/abs/2611.05984"
          },
          "published": "2026-11-04",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 29,
          "score": 2.9,
          "score_why": "추천 29 → +2.9",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 하이퍼 커넥션 구조를 제대로 파헤쳐 봤습니다",
            "easy1_desc": "최근 거대 언어 모델에서 하이퍼 커넥션(HC)이라는 구조를 많이 쓰는데, 이게 정확히 어떻게 작동하는지 잘 모르는 상태에서 학습 시간만 늘리는 문제가 있었거든요. 연구진이 이 구조를 뜯어봤더니, 굳이 복잡한 섞기 과정 없이도 게이트(입출력 조절 장치)만 잘 활용하면 성능을 유지할 수 있다는 걸 알아냈어요. 쉽게 말하면, 그동안 불필요하게 복잡했던 부분을 걷어내고 더 효율적인 설계가 가능하다는 걸 밝혀낸 셈이에요.",
            "easy1_evidence": "Hyper-Connections (HC) architectures are increasingly adopted in frontier language models, yet their components remain insufficiently understood and introduce non-negligible training overhead.",
            "easy2_title": "구조를 단순하게 바꿔서 학습 효율을 높였습니다",
            "easy2_desc": "연구진은 학습 속도를 갉아먹던 주범이 확장된 잔차 상태에 반복적으로 접근하는 방식이라는 걸 찾아냈는데요, 이를 해결하기 위해 메모리 접근을 공유하고 불필요한 섞기 과정을 뺀 SimpleHC라는 구조를 제안했어요. 이렇게 바꿨더니 기존 모델과 비슷한 성능을 내면서도 학습 시간은 바닐라 잔차 모델 대비 2.4%만 더 늘어나는 수준으로 효율적이었거든요. 게다가 모델 규모를 15B에서 30B로 키워도 성능이 안정적으로 유지되는 장점이 있다는 겁니다.",
            "easy2_evidence": "These findings lead to SimpleHC, which simplifies the architecture by removing residual mixing and simplifies execution through shared memory access, using the resulting additive structure and shared gate inputs.",
            "topic": "거대 언어 모델의 학습 효율과 성능을 동시에 잡기 위해 하이퍼 커넥션 구조를 단순화한 SimpleHC 설계에 관한 연구예요.",
            "topic_evidence": "In this work, we systematically study the HC architecture to understand its components and identify simpler, more efficient designs.",
            "points": [
              {
                "subtitle": "하이퍼 커넥션 구성 요소 분석",
                "desc": "연구진은 하이퍼 커넥션의 핵심인 게이트와 섞기 과정을 분석했는데요, 섞기 과정이 없는 학습된 게이트 방식이나 고정된 게이트를 사용하는 방식만으로도 기존 mHC와 비슷한 성능을 낼 수 있다는 걸 확인했어요. 뭔 소리냐면, 복잡한 상호작용 없이도 효율적인 설계가 가능하다는 말이에요.",
                "evidence": "We find that learned read/write gating without mixing and unconstrained mixing with fixed gates form two effective interaction groups: either alone achieves performance comparable to mHC."
              },
              {
                "subtitle": "SimpleHC 설계 및 최적화",
                "desc": "학습 속도를 늦추던 반복적인 메모리 접근 문제를 해결하기 위해, 계층별 게이트가 상태를 공유하고 읽기·쓰기를 일괄 처리하는 SimpleHC를 설계했어요. 스칼라 보정 값을 사용해 이전 계층의 출력 기여도를 그대로 유지하면서도 구조를 단순화한 겁니다.",
                "evidence": "Layer-specific gates share a group-entry state, enabling batched reads and deferred writes; scalar corrections exactly preserve preceding sublayer output contributions."
              },
              {
                "subtitle": "학습 성능 및 안정성 검증",
                "desc": "SimpleHC는 가장 큰 규모에서 기존 모델 대비 학습 시간이 2.4%만 추가될 정도로 효율적이었는데요, 15B에서 30B 규모의 MoE(전문가 혼합) 모델로 확장해도 성능이 잘 유지됐어요. 학습 과정에서 기울기 변화도 더 매끄럽고 스트레스 상황에서도 안정적이라는 게 연구진의 주장이에요.",
                "evidence": "SimpleHC incurs only 2.4% extra end-to-end training time over a vanilla residual baseline at the largest tested scale."
              }
            ],
            "one_line": "하이퍼 커넥션 구조를 단순화하여 학습 효율을 높인 SimpleHC를 제안했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.17060",
          "title": "Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.17060",
            "arxiv": "https://arxiv.org/abs/2611.17060"
          },
          "published": "2026-11-12",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 26,
          "score": 2.6,
          "score_why": "추천 26 → +2.6",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇이 복잡한 현실 세계에서 여전히 헤매고 있어요",
            "easy1_desc": "최근 GPT-6 Astra나 Claude Fable 5.1 같은 거대 모델들이 눈으로 보고 로봇을 직접 조종하는 수준까지 올라왔는데요. 그런데 이런 모델들이 현실에서 길게 이어지는 작업이나 물체와 계속 부딪혀야 하는 상황을 만나면 여전히 잘 깨지고 불안정한 모습을 보인다는 거예요. 결국 로봇이 더 똑똑해지려면 사람이 직접 행동하는 모습을 보여주거나, 로봇이 스스로 해보고 고칠 수 있는 환경이 꼭 필요하다는 말이에요.",
            "easy1_evidence": "They nevertheless remain brittle on long-horizon, contact-rich tasks in real-world environments.",
            "easy2_title": "로봇 학습을 위한 고품질 환경과 행동 데이터를 모았어요",
            "easy2_desc": "연구진은 로봇이 환경과 행동에 따라 어떻게 성장하는지 알아내려고 Ropedia Xperience 2라는 데이터를 만들었는데요. 여기에는 1,589개의 3D 스캔 데이터와 74개 작업이 담긴 131시간 분량의 영상이 포함되어 있어요. 이 데이터를 쓰면 장면을 로봇이 움직일 수 있는 시뮬레이션으로 바꾸거나, 사람의 동작을 로봇의 움직임으로 바로 옮길 수 있다는 겁니다. 쉽게 말하면 로봇 학습을 위한 표준 데이터 세트를 구축해서 로봇 지능의 확장 가능성을 확인한 셈이에요.",
            "easy2_evidence": "To address this question, we introduce Ropedia Xperience 2, comprising 1,589 released metric-scale 3D scans and a collection of 4,230 egocentric recordings of 74 tasks (131 hours).",
            "topic": "물리적 인공지능(Physical AI)의 성능을 높이기 위해 환경과 행동 데이터를 어떻게 확장하고 재사용할지 그 기준을 제시했어요.",
            "topic_evidence": "We propose this joint capture of environments and behaviors as a gold standard for physical AI data collection, laying a data foundation for establishing scaling laws over environments and behaviors.",
            "points": [
              {
                "subtitle": "데이터 구성과 규모",
                "desc": "연구진은 1,589개의 실제 크기 3D 스캔 데이터와 74가지 작업이 담긴 4,230개의 1인칭 시점 영상을 확보했어요. 총 131시간에 달하는 이 방대한 자료를 통해 로봇이 학습할 수 있는 기반을 마련한 거예요.",
                "evidence": "To address this question, we introduce Ropedia Xperience 2, comprising 1,589 released metric-scale 3D scans and a collection of 4,230 egocentric recordings of 74 tasks (131 hours)."
              },
              {
                "subtitle": "로봇 학습을 위한 데이터 변환",
                "desc": "수집한 데이터를 로봇이 바로 쓸 수 있도록 가공했는데요. 3D 장면을 로봇과 상호작용이 가능한 시뮬레이션 환경으로 바꾸고, 사람의 움직임을 로봇의 전신 궤적으로 변환하는 과정을 거쳤다는 겁니다.",
                "evidence": "We further show that each capture can be repurposed for robot learning: scenes are converted into physically interactive simulation environments, human motion is retargeted to whole-body robot trajectories, and additional robot behaviors are obtained through virtual teleoperation and automated long-horizon trajectory generation."
              },
              {
                "subtitle": "물리적 AI의 표준 제시",
                "desc": "연구진은 이번에 구축한 환경과 행동 데이터 세트가 물리적 인공지능 분야의 새로운 표준이 될 수 있다고 주장했어요. 이를 통해 로봇이 환경과 행동에 따라 어떻게 성능이 변하는지 측정하는 법칙을 세울 수 있을 것으로 봤다는 거예요.",
                "evidence": "We propose this joint capture of environments and behaviors as a gold standard for physical AI data collection, laying a data foundation for establishing scaling laws over environments and behaviors."
              }
            ],
            "one_line": "로봇 학습용 환경과 행동 데이터 세트를 구축하고 재사용 방안을 제시했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.17331",
          "title": "TTB: Test-time Baking for Efficient Rendering of Decoder-only View Synthesis Models",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.17331",
            "arxiv": "https://arxiv.org/abs/2611.17331"
          },
          "published": "2026-11-12",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 22,
          "score": 2.2,
          "score_why": "추천 22 → +2.2",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식은 속도와 품질 중 하나를 포기해야 했어요",
            "easy1_desc": "최근 3D 구조를 따로 만들지 않고 새로운 시점을 바로 그려내는 디코더 전용 대규모 시점 합성 모델(LVSMs)이 주목받고 있는데요. 이 모델들은 성능은 좋지만 연산량이 많다는 단점이 있어요. 그래서 테스트 타임 학습(TTT)이라는 기술을 써서 연산을 줄여봤더니, 이번에는 영상의 품질이 떨어지는 문제가 생겼거든요. 쉽게 말하면 속도를 챙기려다 화질을 잃어버린 셈이에요.",
            "easy1_evidence": "Decoder-only Large View Synthesis Models (LVSMs) with KV-cache have recently achieved state-of-the-art quality by regressing novel views from neural networks without reconstructing 3D geometry, while Test-Time Training (TTT) layers save computation but sacrifice quality.",
            "easy2_title": "정보를 가볍게 구워내서 속도와 품질을 모두 잡았어요",
            "easy2_desc": "연구진은 테스트 타임 베이킹(TTB)이라는 새로운 전략을 제안했는데요. 교차 시점 어텐션(cross-view attention)에 담긴 장면 정보를 가벼운 다층 퍼셉트론(MLP)에 미리 구워 넣는 방식이에요. 기존 TTT처럼 어텐션을 통째로 바꾸지 않고도 빠른 렌더링 효율을 유지하면서 품질은 훨씬 높였다고 주장했거든요. 덕분에 여러 벤치마크에서 기존 최고 수준과 비슷한 품질을 내면서도 렌더링 속도는 최대 23배까지 빨라졌다는 겁니다.",
            "easy2_evidence": "We propose Test-Time Baking (TTB), a strategy that learns to bake global scene information from cross-view attention into a lightweight MLP, enabling fast and high-fidelity novel-view decoding.",
            "topic": "대규모 시점 합성 모델의 렌더링 효율을 높이기 위해 교차 시점 정보를 가벼운 MLP에 학습시키는 TTB 기법을 제안했어요.",
            "topic_evidence": "We propose Test-Time Baking (TTB), a strategy that learns to bake global scene information from cross-view attention into a lightweight MLP, enabling fast and high-fidelity novel-view decoding.",
            "points": [
              {
                "subtitle": "빠른 가중치 MLP 활용",
                "desc": "TTT에서 쓰던 빠른 가중치 MLP를 그대로 활용하되, 어텐션을 대체하는 대신 입력과 출력 쌍을 통해 교차 시점 어텐션 매핑을 직접 학습하게 했어요. 이렇게 하면 기존 TTT의 효율적인 렌더링 속도를 그대로 유지하면서도 품질은 크게 높일 수 있다는 거예요.",
                "evidence": "The first key is to repurpose the fast-weight MLP of TTT to learn the cross-view attention mapping explicitly from its input-output pairs, rather than replacing attention entirely, achieving the same rendering efficiency as TTT while delivering substantially higher quality."
              },
              {
                "subtitle": "모달리티 불일치 해결",
                "desc": "컨텍스트 프리필링과 새로운 시점 렌더링 사이의 모달리티(데이터의 형식) 불일치를 해결하기 위해 토큰을 분리했어요. 카메라 정보만 담은 렌더링 토큰은 TTB 입력으로 쓰고, 이미지 내용을 담은 실제 토큰은 매핑 대상으로 삼은 건데요. 덕분에 MLP가 서로 다른 데이터 형식 사이에서 겪는 일반화 문제를 덜어낼 수 있게 된 겁니다.",
                "evidence": "The second key addresses a modality misalignment between context prefilling and novel-view rendering: we disentangle context tokens into camera-only context rendering tokens to serve as TTB input, and context ground-truth tokens with image content to serve as the TTB mapping target, ensuring the baked MLPs are relieved of the modality generalization challenge between context and novel-view processing."
              },
              {
                "subtitle": "성능 및 속도 개선",
                "desc": "연구진이 제안한 TTB 방식을 적용했더니 여러 벤치마크에서 기존 최고 수준의 모델과 대등한 품질을 보여줬어요. 특히 렌더링 속도는 최대 23배까지 빨라졌다고 밝혔는데요. 이는 고품질의 시점 합성을 훨씬 효율적으로 수행할 수 있음을 의미합니다.",
                "evidence": "Our method achieves up to 23x rendering speedup with quality on par with the state-of-the-art across several benchmarks."
              }
            ],
            "one_line": "TTB 기법을 통해 시점 합성 모델의 렌더링 속도와 품질을 동시에 개선했어요.",
            "topic_tag": "영상·음성·멀티모달",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 1,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "영상·음성·멀티모달",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2608.22237",
          "title": "Read Less, Solve More: Token-Efficient Sparse Reading of External Content for AI Agents",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2608.22237",
            "arxiv": "https://arxiv.org/abs/2608.22237"
          },
          "published": "2026-11-07",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 22,
          "score": 2.2,
          "score_why": "추천 22 → +2.2",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 웹 문서를 읽을 때 너무 많이 읽어서 생기는 문제",
            "easy1_desc": "AI 에이전트가 웹페이지나 문서를 읽을 때 필요한 부분만 찾으면 되는데도 전체 내용을 다 읽어 들이는 경우가 많거든요. 이렇게 불필요한 정보까지 다 읽으면 토큰 비용이 늘어나고 처리 속도도 느려지는 문제가 생깁니다. 게다가 정작 중요한 정보가 방대한 데이터 속에 묻혀 버린다는 단점도 있어요. 쉽게 말하면, AI가 공부할 때 핵심만 골라 읽지 않고 책 전체를 다 읽느라 시간과 비용을 낭비하고 있다는 말이에요.",
            "easy1_evidence": "Web-facing AI agents repeatedly access webpages, documents, repositories, and tool responses, yet reading interfaces often expose entire objects when only sparse evidence is needed.",
            "easy2_title": "필요한 정보만 골라 읽게 해서 효율을 높였어요",
            "easy2_desc": "연구진은 AI 모델을 직접 수정하지 않고도 읽기 방식을 제어하는 SparseRead라는 기술을 개발했는데요, 이게 필요한 정보만 선별해서 읽도록 도와주는 층을 하나 더 두는 방식이에요. 이 기술을 적용했더니 토큰 사용량은 최대 92.9%까지 줄었고, 처리 시간도 최대 89.0%까지 단축됐거든요. 성능 면에서도 97%의 상황에서 기존과 같거나 더 나은 결과를 보여줬다고 주장했어요. 쉽게 말하면, AI가 읽어야 할 양을 획기적으로 줄여서 더 빠르고 경제적으로 일하게 만든 셈이에요.",
            "easy2_evidence": "We present SparseRead, a reusable reading control layer that governs content admission without modifying the agent model.",
            "topic": "AI 에이전트가 외부 정보를 읽을 때 토큰 효율성을 높이기 위해 SparseRead라는 제어 계층을 도입한 연구예요.",
            "topic_evidence": "We present SparseRead, a reusable reading control layer that governs content admission without modifying the agent model.",
            "points": [
              {
                "subtitle": "SparseRead의 세 가지 핵심 설계",
                "desc": "연구진은 읽기 의도를 파악하는 프로토콜과 정보를 선택적으로 가져오는 백엔드, 그리고 읽기 양을 제한하는 게이트라는 세 가지 요소를 결합했어요. 이 구조를 통해 AI가 상황에 맞춰 필요한 정보만 효율적으로 가져오게 설계했거든요. 뭔 소리냐면, 무작정 다 읽는 게 아니라 목적에 따라 읽을 범위를 똑똑하게 조절한다는 말이에요.",
                "evidence": "Its Read Intent Protocol tracks evolving needs and source coverage; Adaptive Reader Backends select how evidence is located and exposed; and the Budgeted Read Gate bounds cumulative raw exposure per episode with faithful full-view fallback."
              },
              {
                "subtitle": "다양한 모델과 환경에서의 성능 검증",
                "desc": "Claude Opus 5를 포함한 6개의 모델과 5가지 환경에서 실험을 진행해 봤는데요, 전체 토큰 사용량을 최대 92.9% 줄이면서도 작업 품질은 97%의 환경에서 유지하거나 개선했다고 밝혔어요. 특히 웹 심층 검색 작업에서도 토큰을 31.0~43.0% 절감하고 완료 시간을 23.0~37.0% 단축했다는 결과가 나왔거든요. 성능 저하 없이 효율성만 크게 높였다는 점이 특징이에요.",
                "evidence": "Across six models, including Claude Opus 5, and five scenarios, SparseRead reduces total tokens by up to 92.9% and wall time by up to 89.0%, preserving or improving task quality in 97% settings."
              },
              {
                "subtitle": "범용성과 확장성 확인",
                "desc": "연구진은 이 기술이 특정 모델에 묶이지 않고 여러 에이전트 프레임워크와 쉽게 통합될 수 있다는 점을 강조했어요. 세 가지 설계 요소에 대한 검증도 마쳤고, 실제 에이전트 환경에 적용했을 때도 문제없이 작동하는 걸 확인했거든요. 쉽게 말하면, 어떤 AI 에이전트든 이 기술을 가져다 쓰기만 하면 바로 읽기 효율을 높일 수 있다는 뜻이에요.",
                "evidence": "Ablations validate the three designs, while integration with three agent frameworks demonstrates portability."
              }
            ],
            "one_line": "AI 에이전트가 문서를 읽을 때 필요한 정보만 선별해 토큰 효율을 높였어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.08318",
          "title": "Learning the Task or Learning the Verifier? Rethinking Criteria Exposure in Embodied Self-Improvement",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.08318",
            "arxiv": "https://arxiv.org/abs/2611.08318"
          },
          "published": "2026-11-05",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 18,
          "score": 1.8,
          "score_why": "추천 18 → +1.8",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇이 과제를 잘하는 게 아니라 시험 문제만 외우고 있었어요",
            "easy1_desc": "최근 로봇을 스스로 학습시키는 연구에서는 로봇이 성공했는지 확인하는 기준을 학습 과정에 미리 알려주는 방식을 쓰는데요, 이걸 기준 노출(CE)이라고 불러요. 그런데 이 기준은 원래 사람이 짠 코드를 검사하려고 만든 거라, 로봇이 직접 짠 코드와는 잘 안 맞을 때가 많거든요. 쉽게 말하면 로봇이 진짜 실력을 키우는 게 아니라, 시험 문제의 정답 패턴만 골라내는 요령을 익히고 있다는 의심이 드는 상황인 겁니다.",
            "easy1_evidence": "Several recent works expose the benchmark's success criteria to the learning agent, a practice we call Criteria Exposure (CE).",
            "easy2_title": "시험 기준을 살짝만 바꿔도 로봇의 실력이 바로 드러나 버려요",
            "easy2_desc": "연구진이 기준 노출을 한 경우와 안 한 경우를 나눠서 실험해 봤는데요, 기준을 미리 알려주면 당장은 점수가 높게 나오지만 시험 문제를 조금만 비틀어도 점수가 뚝 떨어졌거든요. 게다가 이렇게 배운 기술은 다른 과제에 써먹지도 못한다는 한계도 확인했어요. 그래서 연구진은 로봇이 진짜 과제를 수행했는지 제대로 평가할 수 있는 새로운 기준을 제안했답니다.",
            "easy2_evidence": "We conduct controlled experiments with a self-improving agent with and without CE, and find that with CE the agent quickly produces code with a higher success rate under the given criteria, but this advantage disappears when the criteria are changed slightly without departing from the original instructions.",
            "topic": "로봇 에이전트가 학습 과정에서 평가 기준에 노출될 때 발생하는 과적합 문제를 분석하고 이를 해결할 대안을 제시했어요.",
            "topic_evidence": "When a coding agent is exposed to the benchmark's criteria, does it generate code that better performs the instructed task, or code that simply overfits to the verification criteria?",
            "points": [
              {
                "subtitle": "기준 노출의 문제점",
                "desc": "평가 기준이 원래 의도보다 더 많은 정보를 담고 있어서, 로봇이 언어 지시를 따르기보다 검사 기준을 통과하는 코드만 짜게 된다는 거예요. 이게 무슨 말이냐면, 로봇이 과제 수행 능력보다는 시험 점수를 올리는 데 특화된 코드를 만들어 낸다는 뜻이에요.",
                "evidence": "These criteria, originally written to verify policies trained by imitation learning, often demand more than the corresponding language instructions, so a score from such a verifier may not faithfully reflect whether the instructed task was completed, especially for robot-control programs written by an agent."
              },
              {
                "subtitle": "실험을 통한 성능 검증",
                "desc": "연구진이 기준 노출을 적용한 에이전트와 그렇지 않은 에이전트를 비교해 봤는데요, 노출된 쪽이 점수는 빨리 오르지만 기준을 조금만 바꿔도 성능이 유지되지 않았거든요. 결국 로봇이 과제 자체를 배우기보다 특정 평가 방식에 과적합(Overfit)되었다는 사실을 밝혀낸 겁니다.",
                "evidence": "We conduct controlled experiments with a self-improving agent with and without CE, and find that with CE the agent quickly produces code with a higher success rate under the given criteria, but this advantage disappears when the criteria are changed slightly without departing from the original instructions."
              },
              {
                "subtitle": "지시 충실도 기반 평가 제안",
                "desc": "그래서 연구진은 로봇이 받은 언어 지시를 얼마나 잘 따르는지 평가하는 새로운 기준을 제안했어요. 이 방식이 기존 방식보다 로봇이 만든 프로그램의 실제 성능을 더 정확하게 반영한다고 주장했거든요.",
                "evidence": "We further propose instruction-faithful criteria and show that they better reflect the performance of agent-generated programs."
              }
            ],
            "one_line": "로봇 학습 시 평가 기준 노출이 과적합을 유발함을 밝히고 대안을 제안했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.10439",
          "title": "Who Remembers What? Multi-Granularity Memory Extraction for Multi-User, Multi-Agent Interaction",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.10439",
            "arxiv": "https://arxiv.org/abs/2611.10439"
          },
          "published": "2026-11-07",
          "first_seen": "2026-11-15",
          "backlog": false,
          "hf_upvotes": 7,
          "score": 1.7,
          "score_why": "추천 7 → +0.7 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "여러 에이전트가 경험을 공유할 때 누가 무엇을 알아야 하는지 놓치고 있었어요",
            "easy1_desc": "스스로 학습하는 에이전트들은 경험을 통해 기술을 키우고 지식을 쌓는데요, 여러 사용자와 서로 다른 에이전트가 섞여 있는 환경에서는 문제가 생깁니다. 모든 정보를 다 공유하면 개인정보가 새어 나갈 위험이 있거든요. 그래서 연구진은 누가 어떤 정보를 가져가야 하는지, 또 무엇을 비밀로 지켜야 하는지를 구분하는 과정이 대부분의 시스템에서 빠져 있다고 지적했어요.",
            "easy1_evidence": "Yet most such systems overlook that sharing across users and heterogeneous agents requires deciding who can benefit from each lesson and what information must remain private.",
            "easy2_title": "사용자별로 정보를 나누어 관리하는 MixUA 시스템을 만들었어요",
            "easy2_desc": "연구진은 MixUA라는 기억 시스템을 도입해 에이전트의 경험을 사용자나 에이전트 단위로 잘게 쪼개어 저장하도록 했는데요, 이 정보를 특정 사용자나 에이전트 쌍에게만 할당하거나 전체 공유 범위로 나누어 관리하는 방식이에요. 이렇게 했더니 이전에는 다른 사용자가 겪었던 작업도 성공적으로 수행하게 되었고, 개인정보 유출은 거의 막아냈다는 겁니다. 쉽게 말하면, 정보의 공유 범위와 보안을 동시에 챙기는 똑똑한 기억 저장소를 만든 셈이에요.",
            "easy2_evidence": "We present MixUA, a memory system that distills independent user-agent trajectories into lessons and assigns each lesson to a user-agent pair, user, agent, or global scope according to whom it benefits and what it may disclose.",
            "topic": "다양한 사용자와 에이전트가 상호작용하는 환경에서 개인정보를 보호하며 효율적으로 기억을 공유하는 시스템에 대한 연구예요.",
            "topic_evidence": "We present MixUA, a memory system that distills independent user-agent trajectories into lessons and assigns each lesson to a user-agent pair, user, agent, or global scope according to whom it benefits and what it may disclose.",
            "points": [
              {
                "subtitle": "MixUA 기억 시스템 개발",
                "desc": "사용자와 에이전트의 상호작용 기록을 분석해 유용한 교훈을 추출하고, 이를 사용자나 에이전트 단위로 적절히 할당하는 시스템을 설계했어요. 정보의 성격에 따라 공유 범위를 다르게 설정해 효율성을 높인 겁니다.",
                "evidence": "We present MixUA, a memory system that distills independent user-agent trajectories into lessons and assigns each lesson to a user-agent pair, user, agent, or global scope according to whom it benefits and what it may disclose."
              },
              {
                "subtitle": "CrossLearnBench 성능 평가",
                "desc": "연구진은 에이전트 작업과 사용자 선호도, 그리고 개인정보 유출 여부를 확인하는 CrossLearnBench를 도입해 시스템을 검증했는데요, 5명의 사용자와 7개의 에이전트를 대상으로 실험을 진행했습니다.",
                "evidence": "For evaluation, we introduce CrossLearnBench, a mixed-user-agent benchmark that pairs established agent tasks with user preferences and privacy probes that test whether private facts leak into memory other users can read."
              },
              {
                "subtitle": "성능 향상과 보안 검증",
                "desc": "실험 결과, MixUA는 기억이 없을 때보다 성공률을 최대 16포인트, 단일 공유 기억 시스템보다는 5포인트 높였다고 주장했어요. 또한 사용자의 선호도를 90%까지 유지하면서도, 개인정보가 허용되지 않은 범위로 유출된 경우는 0.02% 이하로 나타났다는 겁니다.",
                "evidence": "With five users and seven agents, MixUA raises pass rates by up to 16 points over no memory and 5 over a single global memory, even on tasks previously tried only by other users on other agents."
              }
            ],
            "one_line": "사용자와 에이전트 간의 기억 공유 범위를 조절하는 MixUA 시스템을 개발했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16217",
          "title": "WorldDraft: If Code Builds the World, Can Video Models Just Render It?",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.16217",
            "arxiv": "https://arxiv.org/abs/2611.16217"
          },
          "published": "2026-11-12",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 16,
          "score": 1.6,
          "score_why": "추천 16 → +1.6",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "코드로 세상을 만들고 영상 모델은 그저 그리기만 하면 어떨까",
            "easy1_desc": "멀티모달 코딩 에이전트는 4차원 세상을 만드는 일과 영상을 생성하는 일을 따로 떼어내서 처리하는데요, 영상 모델을 세상 전체를 만드는 도구가 아니라 단순히 그림을 그려주는 렌더러로 활용하려는 시도예요. 여기서 중요한 건 코드가 설계한 세상의 움직임과 카메라 경로를 그대로 유지하는지, 그리고 텍스트로 정해준 대상의 특징을 영상 내내 일관되게 보여주는지 확인하는 겁니다. 쉽게 말하면, 코드가 뼈대를 잡으면 영상 모델이 그 위에 색을 입히는 역할을 얼마나 잘 수행하는지 따져보는 셈이에요.",
            "easy1_evidence": "Multimodal coding agents decouple 4D world construction from visual generation, repurposing video models from world generators toward generative renderers.",
            "easy2_title": "영상 모델의 한계를 확인하고 성능을 높이는 방법을 찾았어요",
            "easy2_desc": "연구진은 432개의 테스트 케이스를 담은 월드드래프트(WorldDraft)라는 벤치마크를 만들어 영상 모델의 성능을 평가해 봤는데요, 세상의 구조를 유지하는 능력과 시각적인 표현력이 서로 충돌하는 경향이 있다는 걸 발견했어요. 특히 복잡한 설계 정보를 줄수록 구조는 잘 잡히지만 오히려 영상의 품질은 떨어지는 문제가 나타났거든요. 그래서 연구진은 월드드래프트-프라이머(WorldDraft-Primer)라는 시각적 프롬프팅 전략을 제안했는데, 이걸 쓰면 영상 모델을 수정하지 않고도 두 가지 목표를 모두 개선할 수 있다는 겁니다.",
            "easy2_evidence": "To mitigate these bottlenecks, we propose WorldDraft-Primer, a plug-and-play visual prompting strategy that consistently improves both objectives across frozen video renderers.",
            "topic": "코드로 생성된 4차원 세계를 영상 모델이 얼마나 정확하게 시각화할 수 있는지 평가하고 그 성능을 높이는 방법을 다루고 있어요.",
            "topic_evidence": "Together, WorldDraft and WorldDraft-Primer lay a foundation for bridging programmatic 4D simulation with video generation, advancing physically grounded generative rendering.",
            "points": [
              {
                "subtitle": "월드드래프트 벤치마크 구축",
                "desc": "연구진은 48개의 실행 가능한 4차원 세계군을 바탕으로 432개의 테스트 케이스를 설계했어요. 6개의 동적 범주를 나누고, 설계의 세밀함과 외형의 일치 여부를 조합해 모델의 능력을 엄격하게 검증했거든요.",
                "evidence": "To evaluate this capability, we introduce WorldDraft, a benchmark of 432 strictly paired test cases across 48 executable 4D world families spanning six dynamic challenge categories."
              },
              {
                "subtitle": "모델 성능 평가 결과",
                "desc": "12개의 대표적인 모델을 평가해 봤더니, 세상의 구조를 유지하는 능력과 시각적 일관성 사이에 심각한 긴장 관계가 있다는 사실을 확인했어요. 특히 서로 충돌하는 정보가 들어오면 최대 64%까지 정보가 새어 나가는 문제가 발생해, 모달 간의 분리 능력이 취약하다는 점을 드러냈거든요.",
                "evidence": "Extensive evaluations across 12 representative models reveal that: (I) world preservation and visual realization remain in stark operational tension; (II) richer draft scaffolding anchors structure but paradoxically impairs appearance fidelity; and (III) conflicting source cues trigger severe source leakage (up to 64%), exposing fragile cross-modal disentanglement."
              },
              {
                "subtitle": "월드드래프트-프라이머 제안",
                "desc": "이러한 문제를 해결하기 위해 연구진은 플러그 앤 플레이 방식의 시각적 프롬프팅 전략인 월드드래프트-프라이머를 제안했어요. 이 전략을 사용하면 기존의 고정된 영상 렌더러에서도 구조 유지와 시각적 표현이라는 두 가지 목표를 일관되게 개선할 수 있다고 주장했어요.",
                "evidence": "To mitigate these bottlenecks, we propose WorldDraft-Primer, a plug-and-play visual prompting strategy that consistently improves both objectives across frozen video renderers."
              }
            ],
            "one_line": "4차원 세계 생성과 영상 렌더링을 연결하는 벤치마크와 개선 전략을 제안했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.17334",
          "title": "Unbundling Multimodal Vision Encoding",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.17334",
            "arxiv": "https://arxiv.org/abs/2611.17334"
          },
          "published": "2026-11-12",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 14,
          "score": 1.4,
          "score_why": "추천 14 → +1.4",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "멀티모달 모델에서 시각 정보를 어떻게 넣을지 고민해 봤어요",
            "easy1_desc": "멀티모달 언어 모델이 이미지를 인식할 때 시각 인코더를 미리 학습시켜 쓸지, 아니면 아예 새로 학습할지 의견이 갈리고 있거든요. 기존 모델들은 데이터나 구조가 제각각이라 어떤 선택이 핵심인지 비교하기가 어려웠다는 문제가 있었어요. 그래서 연구진은 모든 모델을 같은 데이터와 연산량으로 처음부터 다시 학습시켜서 각 설계 요소가 어떤 영향을 주는지 뜯어보기로 한 겁니다.",
            "easy1_evidence": "Because published models also differ in data, architecture, and compute, comparing them cannot isolate the effect of each choice.",
            "easy2_title": "따로 인코더를 안 써도 되고 모델 안에 시각 능력을 넣는 게 중요해요",
            "easy2_desc": "실험해 봤더니 미리 학습된 시각 인코더는 굳이 필요 없었고, 언어 모델과 함께 처음부터 학습해도 성능이 비슷하게 나왔거든요. 대신 시각 정보를 처리할 전용 용량을 모델 안에 확보하는 게 훨씬 중요했다는 사실을 알아냈어요. 인코더 없이 모델만 키우는 것보다 전용 모듈을 넣는 게 낫고, 이걸 굳이 앞단에 두지 않고 중간에 섞어도 성능은 유지되면서 처리 속도는 빨라진다는 결과예요.",
            "easy2_evidence": "We find that the visual prior is not necessary; an encoder trained jointly from scratch is on par with a pretrained one, without a separate training stage.",
            "topic": "멀티모달 모델의 시각 인코딩 방식을 분리하여 각 설계 요소가 성능에 미치는 영향을 분석했어요.",
            "topic_evidence": "We disentangle these choices via a controlled framework where we pretrain all models from scratch on common data and compare them on visual question answering and language benchmarks at matched lifetime compute.",
            "points": [
              {
                "subtitle": "시각 사전 학습의 무용성",
                "desc": "기존에 널리 쓰이던 미리 학습된 시각 인코더가 반드시 필요한 건 아니라는 점을 확인했어요. 처음부터 언어 모델과 함께 학습시킨 인코더만으로도 충분히 비슷한 성능을 낼 수 있다는 거예요.",
                "evidence": "We find that the visual prior is not necessary; an encoder trained jointly from scratch is on par with a pretrained one, without a separate training stage."
              },
              {
                "subtitle": "전용 시각 용량의 중요성",
                "desc": "시각 정보를 처리할 전용 용량을 확보하는 것이 모델 성능의 핵심이라는 사실을 밝혀냈어요. 인코더를 아예 제거하고 언어 모델의 덩치만 키운 모델은 시각 이해 능력이 떨어지는 모습을 보였거든요.",
                "evidence": "What matters instead is dedicated vision capacity: an encoder-free model trails on visual understanding even when its backbone is enlarged by the encoder's parameter count."
              },
              {
                "subtitle": "모듈 배치와 효율성",
                "desc": "시각 처리 모듈을 반드시 모델 앞단에 배치할 필요는 없다는 점도 발견했어요. 모델 중간 층에 시각 모듈을 넣어도 성능은 비슷하면서 첫 토큰이 나오는 시간은 줄일 수 있다는 장점이 있거든요.",
                "evidence": "Yet that capacity need not precede multimodal fusion, as vision-only modules added in-fusion to early backbone layers perform comparably to a pre-fusion encoder and can lower time to first token."
              }
            ],
            "one_line": "멀티모달 모델의 시각 인코딩 방식을 분리해 최적의 설계 요소를 찾았어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16905",
          "title": "Factored One-sided Adam-Moment for Practical and Scalable SOAP",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.16905",
            "arxiv": "https://arxiv.org/abs/2611.16905"
          },
          "published": "2026-11-12",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 14,
          "score": 1.4,
          "score_why": "추천 14 → +1.4",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존의 고성능 최적화 기법은 너무 무겁고 느렸어요",
            "easy1_desc": "트랜스포머 모델을 학습할 때 샴푸(Shampoo)나 솝(SOAP) 같은 2차 최적화 기법을 쓰면 아담(Adam)보다 빠르게 수렴한다는 장점이 있는데요, 문제는 이 기법들이 메모리를 너무 많이 차지하고 고유값 분해라는 복잡한 연산 때문에 속도가 느려진다는 점이에요. 연구진은 이런 고성능 기법의 장점을 유지하면서도 아담처럼 가볍게 쓸 방법은 없을지 고민해 봤다는 겁니다.",
            "easy1_evidence": "However, they still remain costly in practice, and even SOAP still pays substantial optimizer-state memory and eigendecomposition overhead.",
            "easy2_title": "연산량을 확 줄인 새로운 최적화 기법 폼을 만들었어요",
            "easy2_desc": "연구진은 솝의 구조를 개선한 폼(FOAM)이라는 기법을 제안했는데요, 출력 쪽 요인을 제거해 메모리를 아끼고 고유값 분해 횟수도 줄여서 효율성을 높였어요. 기존 솝과 비교했을 때 메모리는 절반만 쓰면서도 성능은 비슷하게 유지했고, 학습 속도도 뮤온(Muon) 수준으로 빨라졌다는 거예요. 쉽게 말하면 고성능의 이점은 그대로 가져가면서 비용 부담만 덜어낸 셈입니다.",
            "easy2_evidence": "In this paper, we answer yes with a lightweight SOAP variant, Factored One-sided Adam-Moment (FOAM).",
            "topic": "대규모 언어 모델 학습을 위해 기존 솝(SOAP) 최적화 기법의 메모리 비용과 연산 부담을 획기적으로 줄인 폼(FOAM) 기법을 제안했어요.",
            "topic_evidence": "Our empirical results support the claim that FOAM matches strong SOAP and Muon baselines in validation loss across scales of large language model (LLM) pre-training, uses half of SOAP's optimizer state, runs at Muon-class wall-clock time, and retains robustness across a three-fold learning-rate range.",
            "points": [
              {
                "subtitle": "입력 기반 사전 조건화",
                "desc": "기존 솝 기법에서 출력 쪽 크로네커(Kronecker) 요인을 제거하고 입력 쪽만 사용하는 방식을 택했어요. 이렇게 하면 메모리 사용량이 줄어들고 고유값 분해 연산도 하나 줄어드는데, 실험 결과 성능 손실은 거의 없었다고 해요.",
                "evidence": "first, FOAM employs input-only preconditioning, dropping the output-side Kronecker factor to reduce memory and remove one eigendecomposition."
              },
              {
                "subtitle": "팩터화된 아담 모멘트 추정",
                "desc": "솝의 밀집된 회전 2차 모멘트 대신 행과 열 통계를 기반으로 한 팩터화된 아담 모멘트 추정기를 사용했어요. 이 방식은 특정 조건에서 솝의 밀집 2차 모멘트를 정확히 복구할 수 있다는 장점이 있어요.",
                "evidence": "Second, FOAM replaces SOAP's dense rotated second moment with a factored Adam-moment estimator based on row-by-column statistics."
              },
              {
                "subtitle": "학습 성능 검증",
                "desc": "124M에서 760M 파라미터 규모의 대규모 언어 모델 학습에서 폼을 검증해 봤는데요, 솝이나 뮤온과 대등한 검증 손실을 보이면서도 메모리는 절반만 사용하고 학습 속도는 뮤온과 비슷하게 빨랐다는 거예요. 학습률 변화에도 3배 범위까지 안정적으로 작동했다고 밝혔습니다.",
                "evidence": "The results hold from 124M to 760M parameters, demonstrating that SOAP's gains need not require SOAP's cost."
              }
            ],
            "one_line": "솝 최적화 기법의 메모리와 연산 비용을 줄인 폼 기법을 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.08286",
          "title": "Interactive Visual Gym: Evaluating Visual Interaction Models with Simulated Users in Interactive Worlds",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.08286",
            "arxiv": "https://arxiv.org/abs/2611.08286"
          },
          "published": "2026-11-05",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 13,
          "score": 1.3,
          "score_why": "추천 13 → +1.3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식으로는 모델이 사람과 어떻게 상호작용하는지 제대로 알 수 없었어요",
            "easy1_desc": "시각적 상호작용 모델은 사람이 실제 작업을 할 때 옆에서 도와주는 역할을 하는데요, 기존 평가 방식은 이미 녹화된 영상을 다시 재생하는 수준에 머물러 있었거든요. 그러다 보니 모델이 내놓은 반응이 사람의 행동이나 작업 결과에 어떤 영향을 주는지 실시간으로 확인하기가 어려웠다는 거예요. 쉽게 말하면, 모델이 사람과 주고받는 상호작용의 진짜 효과를 측정하지 못했다는 말이에요.",
            "easy1_evidence": "Existing benchmarks largely rely on offline replay and therefore cannot capture these effects.",
            "easy2_title": "사람처럼 행동하는 가상 환경을 만들어 모델의 실력을 제대로 평가해 봤어요",
            "easy2_desc": "연구진은 'Interactive Visual Gym'이라는 환경을 만들어 모델이 사람과 실시간으로 소통하며 작업을 수행하게 했는데요, 요리나 집안일 같은 일상적인 상황에서 사람이 실수하거나 계획을 바꾸는 상황까지 구현해 낸 거예요. 이렇게 315개의 시나리오로 평가해 봤더니, 가장 성능이 좋다는 모델도 제한 시간 내에 작업을 끝내는 비율이 53.4%에 그쳤거든요. 모델이 사람에게 정확한 정보를 주지 못하거나 반응 속도가 느려 실수를 막지 못하는 문제점도 확인했다는 겁니다.",
            "easy2_evidence": "We instantiate the framework as IVG-Bench, a benchmark with 315 interaction scenarios.",
            "topic": "시각적 상호작용 모델을 실시간 환경에서 평가하고 학습시키기 위한 새로운 프레임워크와 벤치마크를 제안했어요.",
            "topic_evidence": "We introduce Interactive Visual Gym, a framework for closed-loop evaluation and training of visual interaction models through joint simulation of executable task environments and human users.",
            "points": [
              {
                "subtitle": "가상 환경과 사용자 시뮬레이션",
                "desc": "요리, 집안일, 모바일 인터페이스 등 세 가지 환경을 구축해 모델이 사람과 협력하도록 만들었는데요, 이때 사람이 일부러 실수를 하거나 계획을 벗어나는 행동을 하도록 설정해 현실성을 높였어요. 모델이 단순히 정해진 답을 내놓는 게 아니라, 변화하는 상황에 맞춰 사람을 도와야 한다는 거예요.",
                "evidence": "We contribute three simulators that recreate everyday tasks and human-aligned action spaces across cooking, household manipulation, and mobile-interface domains, together with a persona-conditioned user simulation harness that collaborates with the assistant while incorporating controlled execution errors and other out-of-plan behaviors."
              },
              {
                "subtitle": "최신 모델의 성능 평가 결과",
                "desc": "현재 가장 뛰어난 성능을 보인다는 Gemini 4 Argon 모델을 평가해 봤더니, 제한 시간 안에 작업을 완수한 비율이 53.4%에 불과했다고 해요. 연구진은 이 모델들이 사실 관계를 확인하거나 실질적인 도움을 주는 데 큰 약점이 있고, 반응 속도가 느려 사람이 저지르는 실수를 제때 막지 못한다고 주장했어요.",
                "evidence": "Evaluating state-of-the-art VLMs as visual interaction models reveals substantial limitations: the best-performing model, Gemini 4 Argon, completes only 53.4% of tasks within the time limit, exhibits significant weaknesses in factual grounding and actionable guidance, and is often too slow to prevent errors when response latency is considered."
              },
              {
                "subtitle": "평가 방식 검증 및 학습 활용",
                "desc": "사람을 대상으로 한 실험을 통해 이 평가 방식이 실제 사용자의 선호도와 78.5% 일치한다는 점을 확인했는데요, 나아가 이 환경이 모델 학습에도 유용하다는 걸 보여줬어요. 실제로 Qwen3.5-4B 모델을 이 환경에서 학습시켰더니 작업 성공률과 상호작용 품질이 모두 좋아졌다는 겁니다.",
                "evidence": "We further show that the environments provide useful learning signals: in a proof-of-concept GRPO experiment, closed-loop training improves both task success and interaction quality for Qwen3.5-4B model in our cooking environment."
              }
            ],
            "one_line": "실시간 상호작용 환경을 구축해 시각적 모델의 성능을 평가하고 학습시켰어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16517",
          "title": "UniSpark: Exploring Hybrid Attention for Multimodal Understanding and Generation",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.16517",
            "arxiv": "https://arxiv.org/abs/2611.16517"
          },
          "published": "2026-11-12",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 12,
          "score": 1.2,
          "score_why": "추천 12 → +1.2",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "이해와 생성을 따로 하지 않고 하나로 합쳐 봤습니다",
            "easy1_desc": "기존에는 이미지를 이해하는 모델과 새로 만드는 모델이 따로 놀았는데, 연구진은 이 둘을 하나로 합친 UniSpark-9B를 만들어 봤어요. 핵심은 하이브리드 어텐션이라는 기술인데, 정보를 꼼꼼하게 살피는 방식과 압축해서 전달하는 방식을 섞어 쓴 거예요. 뭔 소리냐면, 복잡한 시각 정보는 정확하게 읽어내면서도 전체적인 문맥은 효율적으로 유지하겠다는 뜻이에요. 덕분에 질문에 답하는 것부터 이미지를 새로 그리는 일까지 한 모델이 다 할 수 있게 된 겁니다.",
            "easy1_evidence": "We present UniSpark-9B, a unified multimodal model that investigates hybrid attention for visual understanding and generation.",
            "easy2_title": "학습 방식을 단계별로 나눠서 성능을 높였습니다",
            "easy2_desc": "연구진은 1억 5970만 개의 생성 데이터와 2억 1340만 개의 이해 데이터를 활용해 4단계에 걸친 교육 과정을 설계했어요. 특히 이미지를 생성할 때 노이즈가 섞인 목표치와 깨끗한 시각 정보를 분리하는 블록 단위 프로토콜을 적용했거든요. 이렇게 했더니 이미지 합성 능력이 2K 해상도까지 확장되었고, MME-S 점수 2470.3과 GenEval 점수 0.83을 기록했다고 밝혔어요. 결과적으로 하이브리드 어텐션이 멀티모달 모델의 뼈대로서 아주 효과적이라는 점을 증명해 낸 셈이에요.",
            "easy2_evidence": "A four-stage curriculum jointly trains multimodal understanding and visual generation, refining answer accuracy and instruction following while extending image synthesis to 2K.",
            "topic": "하이브리드 어텐션을 활용하여 시각적 이해와 생성을 동시에 수행하는 통합 멀티모달 모델 UniSpark-9B에 관한 연구예요.",
            "topic_evidence": "Together, these results demonstrate that hybrid attention provides an effective backbone for unified multimodal understanding and generation.",
            "points": [
              {
                "subtitle": "하이브리드 어텐션 구조",
                "desc": "각 브랜치마다 약 9B 개의 파라미터를 가진 Mixture-of-Transformer-Experts 구조를 기반으로 했어요. 토큰 간의 명확한 상호작용을 위해 전체 어텐션을 사용하고, 문맥을 압축적으로 전달하기 위해 GatedDeltaNet 선형 어텐션을 결합한 방식이에요.",
                "evidence": "Built on a Mixture-of-Transformer-Experts backbone with approximately 9B parameters in each branch, UniSpark combines full attention for explicit token interactions with GatedDeltaNet linear attention for compact context propagation."
              },
              {
                "subtitle": "블록 단위의 생성 프로토콜",
                "desc": "이미지를 섞어서 생성할 때 노이즈가 섞인 목표값과 깨끗한 시각적 표현을 분리하는 방식을 썼어요. 전체 어텐션 층에서는 마스크를 사용하고, 선형 어텐션 층에서는 재귀적 상태 유지 규칙을 적용해 이 둘을 확실하게 구분한 겁니다.",
                "evidence": "A blockwise protocol enforces this distinction through attention masks in full-attention layers and recurrent-state retention rules in linear-attention layers."
              },
              {
                "subtitle": "학습 데이터와 성능",
                "desc": "총 1억 5970만 개의 생성 샘플과 2억 1340만 개의 이해 샘플, 그리고 62만 4800개의 인터리브 시퀀스를 학습에 사용했어요. 이를 통해 MME-S에서 2470.3점, GenEval에서 0.83점을 기록하며 이미지 생성과 비디오 합성 등에서 뛰어난 능력을 보였다고 주장했어요.",
                "evidence": "The selected training sources contain 159.7M generation samples, 213.4M understanding samples, and 624.8K interleaved sequences."
              }
            ],
            "one_line": "하이브리드 어텐션을 적용해 시각 이해와 생성을 통합한 모델을 개발했어요.",
            "topic_tag": "영상·음성·멀티모달",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [
              "4800"
            ],
            "format": [],
            "flags": [],
            "tag": "영상·음성·멀티모달",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.12304",
          "title": "Evolving Infra: Agent-Adaptive LLM Serving at Scale",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.12304",
            "arxiv": "https://arxiv.org/abs/2611.12304"
          },
          "published": "2026-11-09",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 12,
          "score": 1.2,
          "score_why": "추천 12 → +1.2",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "에이전트가 쓰는 AI 모델은 기존 방식으론 감당하기가 어려워요",
            "easy1_desc": "요즘은 AI 에이전트가 모델을 직접 호출하는 작업이 많아졌는데, 기존의 프리필-디코드(PD) 분리형 서버 구조는 이런 변화에 유연하게 대응하지 못한다는 문제가 있어요. 뭔 소리냐면, 연산 자원을 미리 정해진 대로만 나누다 보니 프리필 노드와 디코드 노드 사이의 부하 불균형이 생기기 쉽거든요. 게다가 에이전트가 나중에 다시 쓸 수도 있는 KV 캐시(데이터 저장 공간)를 함부로 지워버리는 바람에 성능이 떨어지는 겁니다.",
            "easy1_evidence": "Existing prefill--decode (PD) disaggregated serving systems offer limited flexibility for runtime adaptation of compute allocation and KV cache management, and rely on coarse signals that only partly capture the diverse and dynamic agent workload.",
            "easy2_title": "에이전트 특성에 맞춰 자원을 실시간으로 조절하는 기술을 만들었어요",
            "easy2_desc": "연구진은 에이전트의 작업 방식에 맞춰 연산 자원과 KV 캐시 관리를 실시간으로 바꾸는 'Evolving Infra'라는 프레임워크를 제안했는데요, 핵심은 연산 자원 할당과 캐시 관리를 완전히 분리해서 노드들이 상황에 따라 프리필과 디코드 역할을 자유롭게 오가게 만든 거예요. 온라인 플래너가 작업 구성을 보고 PD 비율을 맞추고, 에이전트가 문맥을 어떻게 관리하는지 파악해서 캐시를 효율적으로 옮기거든요. 그 결과 기존 엔비디아의 다이나모(Dynamo) 프레임워크보다 평균 요청 지연 시간은 최대 4.1배, P95 TTFT는 14배까지 줄였다고 주장했습니다.",
            "easy2_evidence": "We present Evolving Infra, an agent-adaptive serving framework that adapts compute allocation to agent workloads and KV cache management to agent context management at runtime.",
            "topic": "에이전트 기반 작업의 특성을 반영하여 연산 자원과 캐시 관리를 최적화하는 대규모 LLM 서빙 프레임워크에 대한 연구입니다.",
            "topic_evidence": "We present Evolving Infra, an agent-adaptive serving framework that adapts compute allocation to agent workloads and KV cache management to agent context management at runtime.",
            "points": [
              {
                "subtitle": "연산과 캐시 관리의 분리",
                "desc": "기존에는 연산 자원과 KV 캐시 관리가 묶여 있어 유연성이 떨어졌는데, 이를 분리하여 노드가 프리필과 디코드 역할을 효율적으로 전환할 수 있게 했습니다. 뭔 소리냐면, 특정 작업에 자원이 몰릴 때 노드들이 즉각적으로 역할을 바꿔 부하를 분산한다는 말이에요.",
                "evidence": "We decouple compute allocation from key--value (KV) cache management, allowing nodes to switch efficiently between prefill and decode."
              },
              {
                "subtitle": "온라인 플래너와 에이전트 인식 관리자",
                "desc": "온라인 플래너가 현재 들어오는 작업의 구성을 분석해 프리필과 디코드의 비율을 실시간으로 조정합니다. 동시에 에이전트의 문맥 관리 신호를 활용하는 분산 KV 관리자가 캐시를 지우거나 옮기는 결정을 내리도록 설계했어요.",
                "evidence": "Building on this design, an online planner matches the PD split to workload composition, while an agent-aware distributed KV manager guides cache eviction and transfer with signals from agent context management."
              },
              {
                "subtitle": "성능 개선 효과",
                "desc": "코딩, 수학, 컴퓨터 사용 작업 환경에서 GLM-5.2와 Kimi K2.6 모델을 사용해 최대 256개의 GB300 GPU로 실험해 봤는데요, 그 결과 기존 엔비디아의 다이나모 프레임워크 대비 지연 시간을 크게 줄이는 성과를 보였습니다.",
                "evidence": "Across coding, math, and computer-use tasks with GLM-5.2 and Kimi K2.6 on up to 256 GB300 GPUs, Evolving Infra reduces mean end-to-end request latency and P95 TTFT by up to 4.1x and 14x over Dynamo, NVIDIA's production framework."
              }
            ],
            "one_line": "에이전트 작업에 맞춰 연산과 캐시를 실시간으로 조절하는 서빙 구조를 만들었어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16728",
          "title": "EgoX: Egocentric Cross-Embodiment Manipulation with Embodiment Dreaming",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.16728",
            "arxiv": "https://arxiv.org/abs/2611.16728"
          },
          "published": "2026-11-12",
          "first_seen": "2026-11-15",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "서로 다른 로봇들이 경험을 나누기엔 몸집과 감각이 너무 달랐어요",
            "easy1_desc": "사람이나 로봇, 시뮬레이션 환경은 각자 생김새와 움직이는 방식이 제각각이라서 서로의 데이터를 그대로 가져다 쓰기가 어려웠거든요. 이런 차이 때문에 여러 곳에서 모은 시연 데이터를 하나로 합쳐 학습시키기가 까다로웠던 겁니다. 쉽게 말하면, 서로 다른 언어를 쓰는 사람들이 모여서 협업하려니 소통이 안 돼서 효율이 떨어지는 상황이었던 셈이에요.",
            "easy1_evidence": "However, differences in morphology, sensing, and control interfaces make it difficult to learn effectively from their combined demonstrations.",
            "easy2_title": "로봇마다 다른 경험을 하나로 묶어 학습하는 EgoX를 만들었어요",
            "easy2_desc": "연구진은 EgoX라는 학습 틀을 제안했는데, 로봇마다 다른 관찰과 행동 방식을 의미적으로 연결해서 데이터를 정리하는 방식이에요. 특히 '엠보디먼트 드리밍'이라는 기술을 써서 로봇이 미래의 상태를 예측하게 했더니, 서로 다른 로봇끼리도 공통된 움직임의 원리를 더 잘 배우게 된 겁니다. 실제로 13가지 작업 환경에서 실험해 보니, 처음부터 배우는 것보다 작업 성공률이 0.63에서 0.80으로 크게 올랐다고 해요.",
            "easy2_evidence": "We introduce EgoX, an egocentric cross-embodiment learning framework that organizes heterogeneous demonstrations through semantically corresponding observation and action modalities.",
            "topic": "서로 다른 형태를 가진 로봇들이 경험을 공유하여 조작 능력을 높이는 범용 학습 프레임워크인 EgoX에 대한 연구예요.",
            "topic_evidence": "We introduce EgoX, an egocentric cross-embodiment learning framework that organizes heterogeneous demonstrations through semantically corresponding observation and action modalities.",
            "points": [
              {
                "subtitle": "모듈형 트랜스포머 구조",
                "desc": "로봇마다 관찰 방식에 맞는 토크나이저와 행동 방식에 맞는 전문가 모델을 따로 배치했어요. 그러면서도 핵심이 되는 트랜스포머 몸통은 모든 로봇이 공유하게 해서 효율을 높인 겁니다.",
                "evidence": "Within each embodiment, MXT+ assigns a dedicated tokenizer to each observation modality and a dedicated expert to each action modality, with a Transformer trunk shared across embodiments."
              },
              {
                "subtitle": "엠보디먼트 드리밍 학습",
                "desc": "학습할 때만 사용하는 '엠보디먼트 드리밍' 목표를 추가해서 로봇이 미래의 시각적 정보와 상태를 예측하게 했어요. 이렇게 하면 공유된 트랜스포머가 각 로봇의 역학 관계를 더 잘 파악하게 된다는 거예요.",
                "evidence": "A training-only embodiment-dreaming objective predicts latent representations of future visual and proprioceptive states, encouraging the shared trunk to model each embodiment's dynamics."
              },
              {
                "subtitle": "성능 향상 확인",
                "desc": "5가지 작업과 6가지 로봇 형태를 포함한 13개 환경에서 실험했는데요, 학습 초기부터 배우는 것보다 평균 작업 진척도가 0.63에서 0.80으로 높아졌어요. 특히 낯선 환경에서는 0.53에서 0.77로 더 눈에 띄게 좋아졌다고 주장했습니다.",
                "evidence": "Across 13 task-embodiment pairs spanning five tasks and six robot embodiments, including five physical robots and one simulated humanoid, cross-embodiment pretraining raises MXT+'s average normalized task progress from 0.63 to 0.80 over training from scratch."
              }
            ],
            "one_line": "서로 다른 로봇의 데이터를 통합 학습하는 EgoX 프레임워크를 개발했어요.",
            "topic_tag": "제어·로봇",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "제어·로봇",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.13766",
          "title": "FAME-QP: A GPU-Accelerated Quadratic-Programming Solver for Real-Time Model Predictive Control",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.13766",
            "arxiv": "https://arxiv.org/abs/2611.13766"
          },
          "published": "2026-11-10",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 6,
          "score": 0.6,
          "score_why": "추천 6 → +0.6",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "실시간 제어에 필요한 계산이 너무 느렸던 문제",
            "easy1_desc": "로봇이나 드론 같은 기기를 실시간으로 제어하려면 복잡한 수학 문제인 이차 계획법(QP)을 아주 빠르게 풀어야 하거든요. 그런데 기존의 방식은 GPU를 쓰더라도 계산 과정에서 병목 현상이 생겨 실시간 대응이 어려운 경우가 많았다는 거예요. 쉽게 말하면, 기기는 빨리 움직여야 하는데 계산기가 그 속도를 못 따라가는 상황이었던 겁니다.",
            "easy1_evidence": "We present FAME-QP, a GPU-accelerated solver for dense quadratic programs arising in linear model predictive control.",
            "easy2_title": "GPU 성능을 최대한 끌어올려 계산 속도를 높였어요",
            "easy2_desc": "연구진은 FAME-QP라는 새로운 해결사를 만들어 GPU의 성능을 극대화했는데요, 계산에 필요한 연산자를 효율적으로 배치하고 CUDA 그래프를 활용해 커널 실행을 하나로 합치는 방식을 썼거든요. 이렇게 했더니 기존 GPU 해결사들보다 지연 시간이 줄어들면서도 정확도는 그대로 유지할 수 있었다는 거예요. 결과적으로 로봇이나 쿼드로터 같은 기기를 더 민첩하게 제어할 수 있게 된 셈입니다.",
            "easy2_evidence": "Numerical benchmarks and simulated humanoid and quadrotor control experiments demonstrate reduced latency relative to competing GPU solvers while maintaining solution accuracy and control performance.",
            "topic": "선형 모델 예측 제어(MPC)를 위한 GPU 가속 기반의 효율적인 이차 계획법(QP) 해결사 개발에 관한 연구예요.",
            "topic_evidence": "We present FAME-QP, a GPU-accelerated solver for dense quadratic programs arising in linear model predictive control.",
            "points": [
              {
                "subtitle": "연산 최적화 전략",
                "desc": "제약 조건에 따라 연산자를 다르게 표현하고, 단일 및 이중 커널 반복을 CUDA 그래프로 묶어서 실행하도록 설계했어요. 뭔 소리냐면, GPU가 불필요하게 쉬지 않고 계산을 이어가도록 구조를 짰다는 말이에요.",
                "evidence": "FAME-QP combines constraint-dependent operator representations with fused single- and two-kernel iterations replayed through CUDA graphs, automatically selecting the execution configuration through device calibration and problem-specific timing."
              },
              {
                "subtitle": "지능형 연산자 관리",
                "desc": "캐시된 연산자 은행을 활용해 초기 페널티 값을 선택하고, 문제 행렬이 바뀔 때만 연산자를 갱신하는 방식을 썼거든요. 매번 새로 계산하지 않아도 되니 효율이 훨씬 좋아진 겁니다.",
                "evidence": "It probes a cached operator bank to select the initial penalty and updates operators lazily when problem matrices change."
              },
              {
                "subtitle": "제어 성능 검증",
                "desc": "휴머노이드 로봇과 쿼드로터 시뮬레이션으로 실험해 봤더니, 기존 GPU 해결사들보다 지연 시간은 줄이면서도 제어 성능과 정확도는 그대로 유지했다고 해요. 실시간 제어 환경에서 충분히 쓸 수 있다는 걸 보여준 셈이에요.",
                "evidence": "Numerical benchmarks and simulated humanoid and quadrotor control experiments demonstrate reduced latency relative to competing GPU solvers while maintaining solution accuracy and control performance."
              }
            ],
            "one_line": "GPU 가속을 활용해 실시간 제어용 이차 계획법 해결사를 개발했어요.",
            "topic_tag": "제어·로봇",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "제어·로봇",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.12869",
          "title": "Where Does Alignment Emerge and What Does It Mean? A Closer Look at the Platonic Representation Hypothesis",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.12869",
            "arxiv": "https://arxiv.org/abs/2611.12869"
          },
          "published": "2026-11-09",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 6,
          "score": 0.6,
          "score_why": "추천 6 → +0.6",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 모델들이 서로 닮아간다는 가설이 정말 맞는지 따져 봤어요",
            "easy1_desc": "플라톤적 표현 가설(PRH)은 인공지능 모델들이 학습할수록 서로 비슷한 표현 공간으로 수렴한다는 주장인데요, 최근에는 새로운 언어 모델에서도 이런 경향이 계속되는지 의문이 제기되고 있어요. 게다가 모델의 깊이나 너비 같은 구조적 차이가 결과에 영향을 줄 수 있어서, 단순히 비슷하다고 결론 내리기 전에 적절한 기준점을 세우는 게 중요하거든요. 쉽게 말하면, 모델들이 정말로 같은 방향으로 진화하는지 확인하려면 더 정교한 비교 방법이 필요하다는 말이에요.",
            "easy1_evidence": "However, recent work has questioned whether this trend continues to hold for newer language models.",
            "easy2_title": "데이터만 깨끗하면 모델 간의 닮음은 여전히 나타난다는 걸 확인했어요",
            "easy2_desc": "연구진은 모델의 층과 차원별로 어떤 지점에서 정렬이 나타나는지 조사해 봤는데요, 캡션 데이터가 충분히 깨끗하고 정보가 많다면 성능이 좋은 모델일수록 서로 정렬되는 경향이 여전히 유지된다는 걸 발견했어요. 또한 다양한 데이터셋을 활용해 단일 모달과 다중 모달 모델의 기준점을 새로 만들었거든요. 결과적으로 단일 모달 모델끼리도 명시적으로 정렬된 시각-언어 모델보다 더 높은 정렬 수준을 보일 수 있다는 점을 확인한 셈이에요.",
            "easy2_evidence": "Next, we find that the PRH capability-alignment trend persists for newer models as long as the captions are sufficiently clean and informative.",
            "topic": "플라톤적 표현 가설(PRH)을 바탕으로 언어 모델과 시각 모델 사이의 표현 정렬 현상을 심층적으로 분석한 연구예요.",
            "topic_evidence": "In this work, we first investigate where alignment emerges between unimodal models across model layers and representation dimensions.",
            "points": [
              {
                "subtitle": "모델 간 정렬 지점 조사",
                "desc": "모델의 층과 표현 차원에 따라 정렬이 어디서 발생하는지 분석했는데요, 모델 구조가 결과에 미치는 영향을 고려해 적절한 기준점을 설정했어요. 뭔 소리냐면, 단순 비교가 아니라 구조적 요인을 배제한 정밀한 분석을 시도했다는 말이에요.",
                "evidence": "Moreover, it has been shown that representation similarity metrics can be confounded by model depth and width, requiring appropriate baselines for interpretation."
              },
              {
                "subtitle": "데이터 품질과 정렬의 상관관계",
                "desc": "데이터셋의 캡션이 깨끗하고 정보량이 충분할 때, 모델의 성능이 좋아질수록 표현 정렬도 강해진다는 가설이 유효함을 확인했어요. 즉, 데이터의 질이 모델 간의 닮음을 결정짓는 핵심 요소라는 거예요.",
                "evidence": "Next, we find that the PRH capability-alignment trend persists for newer models as long as the captions are sufficiently clean and informative."
              },
              {
                "subtitle": "교차 모달 정렬의 한계 확인",
                "desc": "단일 모달 모델들의 정렬 수준이 의외로 명시적으로 정렬된 시각-언어 모델을 뛰어넘기도 했는데요, 그럼에도 같은 모달리티를 가진 모델들 사이의 정렬보다는 여전히 낮은 수준에 머물러 있다고 연구진은 주장했어요.",
                "evidence": "Our results show that the cross-modal representational alignment of unimodal models can surpass that of explicitly aligned vision-language models, but remains substantially behind the alignment observed for models of the same modality."
              }
            ],
            "one_line": "플라톤적 표현 가설을 검증하고 모델 간 정렬 현상을 분석했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.08538",
          "title": "Subliminal Learning in Vision-Language Models",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.08538",
            "arxiv": "https://arxiv.org/abs/2611.08538"
          },
          "published": "2026-11-04",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 6,
          "score": 0.6,
          "score_why": "추천 6 → +0.6",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "관련 없는 데이터를 가르쳐도 모델이 은밀하게 영향을 받아요",
            "easy1_desc": "거대 언어 모델에서는 교사 모델이 가르치는 내용과 상관없는 데이터를 줘도 그 안에 숨겨진 선호도가 학생 모델에게 전달되는 현상이 있는데요, 연구진은 이런 잠재 학습(Subliminal learning)이 시각-언어 모델(VLM)에서도 나타나는지 확인해 봤습니다. 교사 모델이 특정 동물이나 얼굴 특징을 선호하도록 훈련한 뒤, 전혀 상관없는 기하학적 도형 문제를 풀게 해서 그 결과를 학생 모델에게 학습시킨 겁니다. 그랬더니 학생 모델이 교사 모델의 선호도를 그대로 따라가는 현상이 확인됐다는 거예요.",
            "easy1_evidence": "Subliminal learning is a phenomenon in large language models (LLMs) where a teacher passes a hidden preference to a student through training data unrelated to that preference.",
            "easy2_title": "모델이 선택만 따라 하는 게 아니라 설명 방식까지 닮아가요",
            "easy2_desc": "실험 결과 2B에서 7B 파라미터 규모의 모델들에서 이런 현상이 공통적으로 나타났는데요, 교사 모델의 편향된 정보를 학습한 학생 모델은 그렇지 않은 모델보다 특정 대상을 최대 10%포인트 더 자주 선택하는 모습을 보였습니다. 단순히 선택만 바뀌는 게 아니라, 같은 이미지를 골랐을 때도 교사 모델이 사용했던 단어나 문구들을 더 많이 따라 쓰는 경향이 나타났거든요. 결국 모델이 학습하는 데이터가 겉보기엔 무관해 보여도 모델의 판단 기준과 설명 방식까지 바꿀 수 있다는 사실을 보여준 셈이에요.",
            "easy2_evidence": "Beyond preferences, we show that the biased student's explanations use more of the same words and phrases as the biased teacher's explanations than those of the control student, even when all three models select the same image.",
            "topic": "시각-언어 모델(VLM)에서 학습 데이터와 무관한 교사의 선호도가 학생 모델에게 은밀하게 전달되는 잠재 학습 현상을 분석한 연구예요.",
            "topic_evidence": "We study whether subliminal learning also occurs in vision-language models (VLMs).",
            "points": [
              {
                "subtitle": "잠재 학습 실험 설계",
                "desc": "연구진은 특정 동물이나 얼굴 특징을 선호하도록 훈련된 교사 모델과 일반적인 제어 모델을 준비했습니다. 두 모델이 기하학적 도형과 관련된 무관한 작업을 수행하게 하고, 그 결과물을 학생 모델의 학습 데이터로 활용해 선호도가 전달되는지 측정했습니다.",
                "evidence": "We finetune a teacher VLM to prefer a specific animal or facial attribute and use a control teacher from the same base model."
              },
              {
                "subtitle": "선호도 전달 효과 확인",
                "desc": "실험 결과 2B에서 7B 규모의 모든 모델에서 교사의 선호도가 학생에게 전달되는 것이 확인됐습니다. 특히 동물 선호도 작업에서는 편향된 교사에게 배운 학생 모델이 목표 대상을 선택할 확률이 제어 모델보다 최대 10%포인트 높게 나타났습니다.",
                "evidence": "Across VLMs ranging from 2B to 7B parameters, we find that both animal and facial preferences can transfer through this unrelated task."
              },
              {
                "subtitle": "설명 방식의 변화",
                "desc": "선택 결과뿐만 아니라 모델이 내놓는 설명에서도 교사의 영향력이 발견됐습니다. 편향된 교사에게 학습받은 학생 모델은 제어 모델보다 교사가 사용한 단어와 문구를 더 자주 사용했는데, 이는 모델의 의사결정 과정 자체가 교사의 편향에 의해 변할 수 있음을 의미합니다.",
                "evidence": "Beyond preferences, we show that the biased student's explanations use more of the same words and phrases as the biased teacher's explanations than those of the control student, even when all three models select the same image."
              }
            ],
            "one_line": "시각-언어 모델에서 무관한 데이터를 통해 선호도가 전달되는 잠재 학습 현상을 입증했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "잠재 학습의 강도는 학습 데이터의 양이나 모델의 종류, 그리고 숫자가 생성되는 방식에 따라 달라질 수 있다고 밝혔습니다.",
            "limit_evidence": "Transfer can become stronger with more training data and varies with the target preference, model, and how the numbers are generated."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2607.13920",
          "title": "DeepStress: Stress-Testing Deep Search Agents",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2607.13920",
            "arxiv": "https://arxiv.org/abs/2607.13920"
          },
          "published": "2026-11-12",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 6,
          "score": 0.6,
          "score_why": "추천 6 → +0.6",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "검색 인공지능이 엉터리 정보를 받았을 때 어떻게 반응하는지 잘 모르는 게 문제였어요",
            "easy1_desc": "검색 에이전트가 여러 단계를 거쳐 질문에 답하는 능력은 뛰어나지만, 정작 품질이 낮은 정보를 받았을 때 얼마나 잘 버티는지는 충분히 연구되지 않았거든요. 기존의 평가 데이터셋에는 이런 나쁜 정보가 거의 없어서, 에이전트가 왜 틀리는지 재현하기도 어려웠다는 말이에요. 쉽게 말하면, 평소에는 잘하다가도 잘못된 정보를 주면 어떻게 무너지는지 알 길이 없었다는 겁니다.",
            "easy1_evidence": "While search agents demonstrate impressive capabilities in multi-step question answering, their robustness to poor-quality evidence remains under-explored.",
            "easy2_title": "가짜 정보를 섞어 에이전트를 시험하는 DeepStress를 만들었어요",
            "easy2_desc": "연구진은 DeepStress라는 스트레스 테스트 틀을 제안했는데, 검색 모듈을 대신해 정보를 마음대로 조절할 수 있는 가상 환경을 만든 거예요. 여기서 정보의 신뢰도나 관련성을 인위적으로 낮춰 에이전트가 얼마나 속아 넘어가는지 확인해 봤거든요. 그 결과, 많은 모델이 뻔히 보이는 거짓말에도 자신 있게 답하거나, 아예 검색 결과와 상관없이 자기 지식만으로 답하는 모습이 확인됐다는 겁니다.",
            "easy2_evidence": "We propose DeepStress, a dynamic stress-testing framework that subjects agents to degraded evidence at controlled rates.",
            "topic": "검색 에이전트의 신뢰성과 견고함을 평가하기 위해 정보 품질을 의도적으로 낮추는 스트레스 테스트 방법론을 제안했어요.",
            "topic_evidence": "We propose DeepStress, a dynamic stress-testing framework that subjects agents to degraded evidence at controlled rates.",
            "points": [
              {
                "subtitle": "가상 환경을 통한 정보 제어",
                "desc": "검색 모듈을 대신해 질문마다 문서를 새로 생성하는 환경을 구축했어요. 이 문서들의 신뢰성, 관련성, 사실 여부를 연구진이 독립적으로 조절할 수 있게 만든 겁니다.",
                "evidence": "It replaces the retrieval module with a synthetic environment where documents are generated dynamically for each query, under independent control of their trustworthiness, relevance, and factuality."
              },
              {
                "subtitle": "새로운 평가 지표 도입",
                "desc": "단순히 맞고 틀리고만 따지는 게 아니라, 에이전트의 답변 결과를 다섯 가지 유형으로 나누어 분석했어요. 여기에 신중한 답변 태도와 계산 비용까지 고려한 새로운 지표인 RAS와 CoPRAS를 도입했거든요.",
                "evidence": "To characterize behavior under stress, we go beyond binary accuracy with a five-way classification of final-answer outcomes and two new reliability-aware metrics, RAS and CoPRAS, which credit cautious behavior and account for computational cost."
              },
              {
                "subtitle": "에이전트의 취약점 확인",
                "desc": "12개 시스템을 HotpotQA와 BrowseComp-Plus 질문으로 시험해 봤더니, 많은 에이전트가 거짓 정보에도 자신감 있게 답하는 문제가 드러났어요. 심지어 모든 문서가 틀렸는데도 검색 결과는 무시하고 자기 내부 지식으로만 답하는 경우도 많았다는 겁니다.",
                "evidence": "Evaluating 12 systems on questions from HotpotQA and BrowseComp-Plus, we find that several open-weight agents answer confidently when sources contain obvious credibility red flags, and that many HotpotQA questions are answered from parametric knowledge even when all returned documents are factually wrong."
              }
            ],
            "one_line": "검색 에이전트의 신뢰성을 평가하는 스트레스 테스트 프레임워크를 개발했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [
              "easy1_title 한 줄 아님/너무 김(46자)"
            ],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.17190",
          "title": "Consensus Capture in Reference-Based UAV Video Stabilization: A Benchmark on Dynamic Urban Scenes",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.17190",
            "arxiv": "https://arxiv.org/abs/2611.17190"
          },
          "published": "2026-11-12",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 4,
          "score": 0.4,
          "score_why": "추천 4 → +0.4",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "드론 영상 흔들림을 잡을 때 움직이는 물체 때문에 생기는 오류가 문제였어요",
            "easy1_desc": "드론 영상의 흔들림을 보정할 때는 기준이 되는 프레임에 맞춰 각 화면을 정렬하는데요, 이때 도로 위를 달리는 자동차처럼 함께 움직이는 물체들이 많으면 정렬 기준이 그 물체들의 움직임 쪽으로 쏠리는 현상이 발생합니다. 연구진은 이를 '컨센서스 캡처(Consensus Capture)'라고 불렀는데, 일반적인 통계 방식으로는 이런 오류를 잡아내기가 어렵다는 게 문제예요. 쉽게 말하면, 배경을 고정해야 하는데 움직이는 차들을 배경으로 착각해서 영상이 엉뚱하게 흔들린다는 말이에요.",
            "easy1_evidence": "Over a busy intersection, vehicles moving together supply mutually consistent correspondences that can draw the robust homography estimate toward their motion: consensus capture, which inlier statistics cannot flag.",
            "easy2_title": "움직이는 물체를 가려내는 마스킹 기술을 도입해 정렬 정확도를 높였어요",
            "easy2_desc": "연구진은 이 문제를 해결하려고 움직이는 물체를 가려내는(Masking) 기술을 포함한 새로운 벤치마크를 만들어서 10가지 정렬 파이프라인을 평가해 봤는데요, 그 결과 마스킹을 사용하면 모든 파이프라인에서 물체에 의한 오류가 사라진다는 사실을 확인했습니다. 마스킹을 쓴다고 해서 기존의 우수한 정렬 성능이 떨어지지도 않았거든요. 쉽게 말하면, 움직이는 물체를 미리 지워버리는 것만으로도 드론 영상의 정렬 품질을 확실하게 높일 수 있다는 겁니다.",
            "easy2_evidence": "Masking removes capture for every pipeline and leaves the leading pipelines unchanged.",
            "topic": "드론 영상 정렬 시 발생하는 컨센서스 캡처 현상을 측정하고 이를 방지하기 위한 객체 마스킹의 효과를 분석했어요.",
            "topic_evidence": "A two-part benchmark measures it and the object masking meant to prevent it.",
            "points": [
              {
                "subtitle": "컨센서스 캡처 측정 벤치마크",
                "desc": "연구진은 정적인 장면과 동적인 장면을 나누어 10개의 정렬 파이프라인을 평가하는 벤치마크를 설계했습니다. 특히 동적 장면에서는 움직이는 물체의 양과 일관성을 고려해 배경 정렬 오류와 객체 위치 오차를 측정했어요.",
                "evidence": "A dynamic protocol scores them at an offline and a real-time budget on hovers selected from the video alone to span the amount and coherence of moving foreground, plus a stationary control."
              },
              {
                "subtitle": "정적 및 동적 환경에서의 성능 평가",
                "desc": "정적인 장면에서는 AKAZE, RootSIFT, SIFT, BRISK 같은 알고리즘이 우수한 성능을 보였는데요, 매처(Matcher)의 임계값을 조정해도 평균 정확도(mAA)는 최대 0.0062 정도만 개선될 뿐이었습니다. 반면 동적 환경에서는 마스킹 처리를 하지 않은 ORB 알고리즘이 304개의 실시간 쌍 중 28개에서 오류를 일으키는 등 취약한 모습을 보였어요.",
                "evidence": "Unmasked ORB is captured on 28 of 304 real-time dynamic pairs and on 6 offline; its real-time captured estimates have a median corner error of 18.8 px yet typical inlier counts and ratios."
              },
              {
                "subtitle": "객체 마스킹의 효과 검증",
                "desc": "실험 결과, 객체 마스킹을 적용하면 모든 파이프라인에서 컨센서스 캡처 현상이 제거되는 것으로 나타났습니다. 마스킹을 적용해도 기존에 성능이 좋았던 파이프라인들의 정렬 결과에는 변화가 없었거든요. 연구진은 이 결과를 바탕으로 관련 코드와 데이터, 결과물을 모두 공개했습니다.",
                "evidence": "Code, data and results are released."
              }
            ],
            "one_line": "드론 영상 정렬 시 발생하는 오류를 측정하고 마스킹 기법으로 해결했어요.",
            "topic_tag": "영상·음성·멀티모달",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "영상·음성·멀티모달",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16961",
          "title": "The Value of Thinking: Learning When to Reason in Hybrid Decision Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI",
            "허깅페이스"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16961",
            "hf": "https://huggingface.co/papers/2611.16961"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 4,
          "score": 0.4,
          "score_why": "추천 4 → +0.4",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "생각하는 시간을 줄이려다 보니 오히려 비효율이 생겼어요",
            "easy1_desc": "기존의 적응형 추론 방식들은 모델이 내놓는 답변의 길이를 줄이거나 아예 추론 과정을 건너뛰는 식으로 작동해 왔거든요. 그런데 이런 방식들도 결국 답변을 토큰 단위로 하나씩 써 내려가야 한다는 점은 똑같다는 한계가 있어요. 즉, 얼마나 깊게 생각할지를 결정하는 것 자체가 또 다른 비용이 되는 셈이에요.",
            "easy1_evidence": "Existing adaptive-reasoning methods shorten the explicit reasoning a model writes, or skip it by switching modes; either way the answer is still written out token by token.",
            "easy2_title": "생각할 가치가 있을 때만 골라서 깊게 생각하도록 만들었어요",
            "easy2_desc": "연구진은 제로 혹은 T번의 생각이라는 새로운 방식을 제안했는데요, 모델이 바로 답을 내놓거나 아니면 T개의 토큰을 써서 깊게 추론하는 두 가지 모드 중 하나를 선택하게 만든 거예요. 하이브리드 결정 모델(HDM)이라는 구조를 통해 모델이 스스로 생각의 가치를 따져보고, 그 가치가 설정한 비용보다 클 때만 느린 추론 모드를 실행하도록 설계했어요. 이렇게 했더니 추론 속도는 빨라지고 토큰 비용도 크게 줄어드는 효과를 확인했습니다.",
            "easy2_evidence": "We realise it in a \text{hybrid decision model} (HDM), where one frozen backbone serves both modes and a lightweight \text{self-routing block} chooses between them.",
            "topic": "하이브리드 결정 모델을 통해 추론의 가치를 판단하고 효율적으로 생각하는 방식을 제안했어요.",
            "topic_evidence": "Rather than deciding how much to think, we explore a different paradigm, \text{zero-or-$T$ thinking}: a single model either answers from the implicit thinking inside one forward pass, generating no token, or performs full autoregressive reasoning at a cost of $T$ tokens when that is worth paying.",
            "points": [
              {
                "subtitle": "하이브리드 결정 모델(HDM) 구조",
                "desc": "하나의 고정된 백본 모델이 두 가지 모드를 모두 수행하고, 가벼운 셀프 라우팅 블록이 상황에 맞춰 모드를 선택하도록 설계했어요. 이 블록은 이미 생성된 암묵적 사고를 바탕으로 느린 모드가 빠른 모드보다 얼마나 더 유용한지를 추정하는 역할을 합니다.",
                "evidence": "We realise it in a \text{hybrid decision model} (HDM), where one frozen backbone serves both modes and a lightweight \text{self-routing block} chooses between them."
              },
              {
                "subtitle": "보정된 결정 정책 최적화(CDPO)",
                "desc": "에피소드 단위의 작업처럼 개별 결정에 대한 정답 라벨이 없는 경우에는 보정된 결정 정책 최적화(CDPO)라는 강화 학습 방식을 도입했어요. 이를 통해 에피소드 전체의 보상을 기준으로 라우팅 블록을 학습시킬 수 있게 했습니다.",
                "evidence": "Where no per-decision label exists, as in episodic agentic tasks, we introduce \text{Calibrated Decision Policy Optimisation} (CDPO), a reinforcement-learning recipe that trains the block from episode-level returns."
              },
              {
                "subtitle": "성능 및 효율성 검증",
                "desc": "JevBench에서 HDM-4B 모델을 테스트했더니 기존 모델 대비 점수는 0.857로 0.7% 향상되었고, 중앙값 기준 처리 시간은 0.179초로 72.5% 단축되었어요. 또한 에이전트 작업인 MiniWoB에서는 HDM-27B 모델이 토큰 비용을 80.1%까지 줄였다고 밝혔습니다.",
                "evidence": "Specifically, on JevBench HDM-4B scores $0.857$ against Jev's $0.851$ ($+0.7%$) at a median $0.179$\\,s against $0.652$ ($-72.5\\%$)."
              }
            ],
            "one_line": "하이브리드 결정 모델을 도입해 추론 가치를 판단하고 효율성을 높였어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 5,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16409",
          "title": "Experience-Handoff Reinforcement Learning for Recursive Self-Improvement",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.16409",
            "arxiv": "https://arxiv.org/abs/2611.16409"
          },
          "published": "2026-11-12",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 4,
          "score": 0.4,
          "score_why": "추천 4 → +0.4",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "에이전트가 경험한 세세한 정보를 그냥 버리고 있었거든요",
            "easy1_desc": "거대언어모델(LLM)을 에이전트 작업에 쓸 때 강화학습(RL)을 주로 쓰는데, 이때 결과 점수만 보고 학습하는 경우가 많아요. 그런데 에이전트가 환경을 겪으면서 얻은 에러 로그 같은 세세한 정보들은 학습에 쓰지 않고 버려지는 셈이거든요. 연구진은 이런 풍부한 정보를 활용하지 못하는 게 문제라고 봤습니다.",
            "easy1_evidence": "However, this throws away the fine-grained information about the environment that the agent experienced during the trial (e.g., error logs).",
            "easy2_title": "경험을 다음 단계로 넘겨주는 방식까지 직접 학습하게 만들었어요",
            "easy2_desc": "연구진은 에이전트가 행동만 하는 게 아니라, 과거의 경험을 정리한 지침서(playbook)를 스스로 만들고 다음 단계로 넘겨주는 방식까지 학습하도록 설계했어요. 이렇게 하면 단순히 점수만 높이는 게 아니라, 미래의 에이전트가 더 잘할 수 있도록 도움을 주는 정보까지 함께 최적화할 수 있거든요. 실제로 여러 벤치마크에서 기존 방식보다 더 높은 성능을 보여줬다고 연구진은 주장했습니다.",
            "easy2_evidence": "Our method, , evaluates candidate experience-handoff artifacts by their downstream effect on future actor rollouts, and co-optimizes the role-specific behaviors (action generator, insight reflector, and playbook curator) under a fixed scaffold.",
            "topic": "에이전트가 경험한 정보를 활용해 스스로 지침서를 만들고 이를 다음 학습에 전달하는 강화학습 기법을 제안했어요.",
            "topic_evidence": "We want the best of both worlds: gradient updates from a scalar reward, while also utilizing environment information to hand off experience.",
            "points": [
              {
                "subtitle": "경험 전달 방식의 학습",
                "desc": "기존에는 에이전트가 경험을 정리하는 방식이 고정되어 있었는데, 이번 연구에서는 에이전트가 직접 지침서를 작성하고 관리하는 역할을 수행하게 했어요. 뭔 소리냐면, 에이전트가 스스로 무엇이 중요한 정보인지 판단해서 다음 단계로 넘겨준다는 말이에요.",
                "evidence": "As a concrete testbed, we fix the Agentic Context Engineering () harness and train one model to act, reflect, and curate task-local playbooks."
              },
              {
                "subtitle": "동시 최적화 기법",
                "desc": "행동 생성기, 통찰력 반성기, 지침서 관리자라는 세 가지 역할을 하나의 모델이 동시에 수행하도록 최적화했어요. 이 과정에서 각 역할이 미래의 에이전트 성능에 어떤 영향을 미치는지 평가하며 학습을 진행하는 겁니다.",
                "evidence": "Our method, , evaluates candidate experience-handoff artifacts by their downstream effect on future actor rollouts, and co-optimizes the role-specific behaviors (action generator, insight reflector, and playbook curator) under a fixed scaffold."
              },
              {
                "subtitle": "성능 향상 확인",
                "desc": "다양한 에이전트 벤치마크에서 실험해 봤더니, 기존의 방식들보다 더 높은 성능을 기록했다고 연구진은 밝혔어요. 현재의 행동뿐만 아니라 미래의 에이전트가 물려받을 경험까지 최적화하는 것이 중요하다는 점을 보여준 셈이에요.",
                "evidence": "Across agentic benchmarks, achieves higher held-out performance than baseline methods."
              }
            ],
            "one_line": "에이전트가 경험을 스스로 정리해 다음 단계로 전달하도록 학습시켰어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16009",
          "title": "JustRUA: A Controlled Study of GPT-6 Robot-Use Agents",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.16009",
            "arxiv": "https://arxiv.org/abs/2611.16009"
          },
          "published": "2026-11-11",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 4,
          "score": 0.4,
          "score_why": "추천 4 → +0.4",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇을 움직이는 인공지능이 너무 많아져서 뭐가 좋은지 알기 어려웠어요",
            "easy1_desc": "GPT-6 Astra가 로봇 팔을 직접 제어하게 되면서, RoboDojo라는 환경에서 로봇을 다루는 에이전트들이 빠르게 늘어났거든요. 그런데 각 연구마다 로봇을 연결하는 방식이나 테스트하는 환경이 제각각이라서, 어떤 기술이 성능을 높였는지 정확히 파악하기가 힘들었습니다. 여러 설계를 한꺼번에 바꾸다 보니 무엇이 핵심인지 알기 어려웠다는 말이에요.",
            "easy1_evidence": "Reported systems differ in harness and test subset and often change several designs at once, so it is hard to tell which choices produce the gains.",
            "easy2_title": "복잡한 설계를 다 걷어내고 핵심만 남겼더니 성능이 훌쩍 뛰었어요",
            "easy2_desc": "연구진은 기존의 복잡한 설계들을 하나씩 분해해서 같은 환경에서 다시 시험해 봤는데요, 그 결과 전체 기록을 유지하고 동작을 일찍 멈추는 단순한 연결 방식이 성능 향상에 큰 도움이 된다는 걸 확인했습니다. 이렇게 불필요한 것을 덜어낸 JustRUA를 사용했더니, 별도의 학습이나 튜닝 없이도 RoboDojo 점수가 29.7에서 50.3으로 크게 올랐거든요. 쉽게 말하면, 복잡한 기능보다 효율적인 구조 하나가 성능을 더 크게 좌우한다는 겁니다.",
            "easy2_evidence": "JustRUA starts from the official L3 harness and keeps only what matters most.",
            "topic": "로봇 제어 에이전트의 성능을 높이는 핵심 설계 요소들을 분석하고 이를 최적화한 JustRUA를 제안했어요.",
            "topic_evidence": "We take these designs apart and test them in one framework, along the harness around the model, the action interface, the reuse of experience and the scene geometry given to the model.",
            "points": [
              {
                "subtitle": "설계 요소 분해 및 분석",
                "desc": "연구진은 기존 로봇 에이전트들의 연결 방식, 행동 인터페이스, 경험 재사용, 장면 기하학 정보 등을 하나씩 분리해서 검증했습니다. 어떤 요소가 실제로 성능 향상을 이끄는지 명확히 확인하기 위해서였거든요.",
                "evidence": "We take these designs apart and test them in one framework, along the harness around the model, the action interface, the reuse of experience and the scene geometry given to the model."
              },
              {
                "subtitle": "성능 향상 요인 확인",
                "desc": "실험 결과, 전체 에피소드 기록을 유지하고 동작을 일찍 종료하는 단순한 연결 방식이 효과적이었고, 장면 기하학 정보도 큰 도움이 되었습니다. 다만 경험 재사용은 모델의 행동을 바꾸긴 하지만 항상 좋은 결과만 가져오는 것은 아니라고 봤습니다.",
                "evidence": "A lean harness that keeps the full episode history and stops each motion early goes a long way."
              },
              {
                "subtitle": "JustRUA의 성능 검증",
                "desc": "공식 L3 연결 방식을 기반으로 핵심 요소만 남긴 JustRUA를 적용했더니, 별도의 학습 정책이나 튜닝 없이도 성능이 크게 향상되었습니다. 연구진은 RoboDojo 벤치마크 점수가 29.7에서 50.3으로 상승했다고 주장했습니다.",
                "evidence": "Even with no learned policy, self-improvement loop or task-specific tuning, this simple harness raises the score on the RoboDojo simulation benchmark substantially, from 29.7 to 50.3."
              }
            ],
            "one_line": "로봇 제어 에이전트의 핵심 설계 요소를 분석해 성능을 높였어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.14418",
          "title": "Precision on Demand: Escalating Weight Bits at Uncertain Decoding Steps in a Small Local Model",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.14418",
            "arxiv": "https://arxiv.org/abs/2611.14418"
          },
          "published": "2026-11-10",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 4,
          "score": 0.4,
          "score_why": "추천 4 → +0.4",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "모델이 답변할 때 무조건 똑같은 정밀도로 계산하는 건 비효율적이에요",
            "easy1_desc": "보통 인공지능 모델은 답변을 생성할 때 모든 가중치(weight)를 똑같은 비트 수로 고정해서 계산하거든요. 그런데 모든 단계에서 높은 정밀도를 쓰면 메모리나 연산 비용이 불필요하게 많이 든다는 문제가 있어요. 연구진은 이 점에 주목해서, 평소에는 낮은 정밀도로 계산하다가 필요할 때만 정밀도를 높이는 방식을 고민해 본 겁니다.",
            "easy1_evidence": "Local decoding usually fixes one weight precision for the whole generation.",
            "easy2_title": "불확실할 때만 정밀도를 높여서 성능과 효율을 동시에 잡았어요",
            "easy2_desc": "연구진은 8비트 가중치를 저장해 두고 평소에는 상위 4비트만 쓰다가, 모델이 내놓은 결과가 불확실할 때만 8비트로 다시 계산하는 방식을 제안했는데요. 결과가 불확실한지는 엔트로피가 기준치를 넘거나 상위 두 선택지의 차이가 작을 때 판단하도록 했거든요. 이렇게 하면 모든 단계를 높게 쓰는 것보다 비용은 줄이면서도 성능은 비슷하게 유지할 수 있다는 장점이 있습니다.",
            "easy2_evidence": "We study a different allocation: store 8-bit weights, decode with their top 4 bits, and redo a step at 8 bits only when the low-precision output distribution looks uncertain (entropy above a threshold or a small top-two margin).",
            "topic": "가중치 정밀도를 동적으로 조절하여 소형 언어 모델의 추론 효율을 높이는 기법에 관한 연구예요.",
            "topic_evidence": "We study a different allocation: store 8-bit weights, decode with their top 4 bits, and redo a step at 8 bits only when the low-precision output distribution looks uncertain (entropy above a threshold or a small top-two margin).",
            "points": [
              {
                "subtitle": "불확실성 감지 성능",
                "desc": "Qwen3-0.6B 모델을 사용해 GSM8K 벤치마크에서 실험해 봤는데요. 15%의 정밀도 상향 예산 안에서 엔트로피 기반 게이트는 78%, 마진 기반 게이트는 94%의 확률로 낮은 정밀도에서 발생할 오류를 잡아냈다고 주장했습니다.",
                "evidence": "At a 15% escalation budget it catches 78% of flips and the margin gate 94%, against the 15% expected for a random gate of equal rate (a computed expectation, not a run)."
              },
              {
                "subtitle": "추론 정확도와 비용 비교",
                "desc": "150개의 실전 문제에서 실험한 결과, 모든 단계를 높은 정밀도로 처리할 때 점수는 64.0%였고, 낮은 정밀도는 55.3%였거든요. 제안한 엔트로피 게이트 방식은 16%의 상향 비율로 62.7%의 점수를 기록하면서도, 전체 가중치 바이트 사용량은 높은 정밀도 방식의 0.87배 수준으로 줄였다는 겁니다.",
                "evidence": "An entropy gate with a 16% escalation rate scores 62.7% at 0.87 of the all-high weight bytes."
              },
              {
                "subtitle": "실제 성능 차이의 모호성",
                "desc": "통계적으로 분석해 봤더니 제안한 방식이 높은 정밀도 방식이나 낮은 정밀도 방식과 뚜렷하게 구분될 만큼의 성능 차이를 보이지는 않았다고 해요. 즉, 비용은 줄였지만 성능 면에서는 두 방식 사이에서 유의미한 차이가 나타나지 않았다는 말이에요.",
                "evidence": "Its paired difference is -1.3 (-8.0 to +5.3) points to all-high and +7.3 (+0.0 to +14.7) points to all-low (p=0.080), so the live data do not separate the gate from either end."
              }
            ],
            "one_line": "가중치 정밀도를 가변적으로 조절해 소형 모델의 추론 효율을 높였어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "실제 환경에서의 무작위 제어, 사고 모드 단계 규칙, 다른 모델 적용 및 실시간 KL 발산 측정 등은 수행하지 못했다고 밝혔습니다.",
            "limit_evidence": "A live random control, a thinking-mode phase rule, a second model and live KL were not run."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.09567",
          "title": "TurtLES: A Large-Scale Benchmark for Turbulent 3D Neural PDE Surrogates",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.09567",
            "arxiv": "https://arxiv.org/abs/2611.09567"
          },
          "published": "2026-11-06",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 4,
          "score": 0.4,
          "score_why": "추천 4 → +0.4",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 난류를 제대로 다루는 데이터가 부족했어요",
            "easy1_desc": "컴퓨터로 유체의 흐름을 계산하는 전산유체역학에서 기계학습 모델을 많이 쓰는데요, 문제는 현실적이고 시간에 따라 변하는 난류를 제대로 담아낸 데이터셋이 부족했다는 거예요. 연구진은 기존 데이터가 실제 물리 현상을 충분히 반영하지 못했다고 봤거든요. 쉽게 말하면, 인공지능 모델을 훈련할 제대로 된 교과서가 없었던 셈이에요.",
            "easy1_evidence": "Machine-learning surrogates are increasingly used to accelerate computational fluid dynamics, yet progress is limited by the lack of benchmarks capturing realistic, time-dependent turbulent flows.",
            "easy2_title": "난류를 담은 대규모 데이터셋으로 모델 성능을 시험해 봤어요",
            "easy2_desc": "그래서 연구진은 14 TB 규모의 3D 난류 데이터셋인 TurtLES를 새로 만들었는데요, 여기에는 실제 물리적인 난류 현상과 복잡한 격자 구조가 담겨 있어요. 이걸로 최신 신경 연산자 모델들을 돌려봤더니, 시간이 지날수록 불안정해지거나 작은 규모의 에너지를 잃어버리는 문제점들이 나타났거든요. 즉, 이 데이터셋을 통해 모델이 어디서 무너지는지 정확히 파악할 수 있게 된 겁니다.",
            "easy2_evidence": "We introduce TurtLES, a 14 TB dataset of 3D turbulent cylinder wakes in the shear-layer transition regime, computed via high-fidelity implicit large-eddy simulations.",
            "topic": "3D 난류 흐름을 예측하는 인공지능 모델의 성능을 평가하기 위해 대규모 데이터셋인 TurtLES를 구축하고 이를 통해 모델의 한계를 분석했어요.",
            "topic_evidence": "TurtLES provides a new benchmark for evaluating surrogate models on 3D turbulent wakes at industrially relevant mesh resolution.",
            "points": [
              {
                "subtitle": "대규모 난류 데이터셋 구축",
                "desc": "연구진은 14 TB 크기의 3D 난류 데이터셋인 TurtLES를 공개했는데요, 여기에는 400개의 궤적과 각 프레임당 최대 1,100만 개의 점이 포함되어 있어요. 기하학적 구조와 레이놀즈 수, 받음각을 다양하게 변화시켜 현실적인 난류 흐름을 구현한 겁니다.",
                "evidence": "The dataset contains 400 trajectories of 400 time steps each, with 3-11 million points per frame, spanning variations in geometry, Reynolds number, and angle of attack."
              },
              {
                "subtitle": "기존 데이터와 차별화된 특징",
                "desc": "기존 데이터셋들과 달리 TurtLES는 소용돌이 늘어남 현상으로 에너지가 전달되는 물리적 난류를 포함하고 있는데요, 복잡하고 불규칙한 격자 구조를 사용하면서도 긴 시간 동안의 흐름 변화를 담아냈다는 점이 특징이에요. 쉽게 말하면, 실제 산업 현장에서 일어나는 복잡한 유체 흐름을 더 정교하게 모사했다는 거예요.",
                "evidence": "Unlike existing datasets, TurtLES combines (i) physically realistic turbulence with an active energy cascade driven by vortex stretching, (ii) dense irregular meshes, and (iii) long-horizon temporal dynamics."
              },
              {
                "subtitle": "모델 성능 평가 및 한계점 식별",
                "desc": "연구진은 이 데이터셋을 활용해 최신 신경 연산자 모델들을 평가했는데요, 그 결과 모델들이 시간이 흐를수록 불안정해지거나 작은 규모의 에너지를 제대로 유지하지 못하는 현상을 확인했어요. 특히 큰 규모의 불규칙한 영역에서 학습하는 데 어려움을 겪는다는 점을 밝혀냈다는 겁니다.",
                "evidence": "We benchmark state-of-the-art neural operators on autoregressive rollouts and identify key failure modes, including temporal instability, loss of small-scale energy, and challenges in learning on large irregular domains."
              }
            ],
            "one_line": "3D 난류 예측 모델을 평가할 대규모 데이터셋을 구축하고 성능 한계를 분석했어요.",
            "topic_tag": "기타",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "기타",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.08219",
          "title": "Agent-R^2: Scaling Agents for Realistic Productivity Work via Real-Source Data Synthesis",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.08219",
            "arxiv": "https://arxiv.org/abs/2611.08219"
          },
          "published": "2026-11-05",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 4,
          "score": 0.4,
          "score_why": "추천 4 → +0.4",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 에이전트가 실제 업무를 처리하기엔 아직 부족한 점이 많아요",
            "easy1_desc": "요즘 대규모 언어 모델(LLM)이 발전하면서 AI 에이전트가 사람의 업무를 대신할 거라는 기대가 큰데요, 막상 실제 업무를 맡겨 보면 긴 과정을 거쳐야 하거나 복잡한 파일 환경을 이해해야 할 때 어려움을 겪곤 합니다. 특히 세밀한 요구 사항에 맞춰 결과물을 만들어 내는 능력이 부족한데, 이는 실제 업무 의도나 진짜 파일 환경을 반영한 학습 데이터가 턱없이 부족하기 때문이에요. 쉽게 말하면, AI가 공부할 '진짜 업무 데이터'가 없어서 실전에서 헤매고 있다는 겁니다.",
            "easy1_evidence": "However, current agents still struggle to finish such tasks, where success requires following long-horizon professional workflows, understanding heterogeneous file contexts, and producing usable deliverables under fine-grained requirements.",
            "easy2_title": "진짜 업무 데이터를 직접 만들어 AI의 실전 능력을 끌어올렸어요",
            "easy2_desc": "연구진은 이 문제를 해결하려고 실제 직업 현장의 자료와 웹에서 가져온 파일들을 활용해 학습 데이터를 만드는 'Agent-R^2'라는 틀을 개발했는데요, 사람이 일일이 만든 작업 과정 대신 실제 업무의 흔적을 바탕으로 4천 개의 학습 데이터를 뽑아냈습니다. 이 데이터를 사용해 모델을 훈련했더니, 복잡한 업무를 처리하는 능력과 파일 내용을 바탕으로 추론하는 실력이 모두 좋아졌거든요. 결과적으로 4B 크기의 작은 모델로도 훨씬 큰 모델들을 뛰어넘는 성능을 보여줬다는 점이 핵심이에요.",
            "easy2_evidence": "To close this gap, we introduce Agent-R^2, a real-source data synthesis framework that scales training data for realistic productivity work.",
            "topic": "실제 업무 환경을 반영한 데이터 합성 프레임워크인 Agent-R^2를 통해 AI 에이전트의 생산성 업무 수행 능력을 개선한 연구입니다.",
            "topic_evidence": "To close this gap, we introduce Agent-R^2, a real-source data synthesis framework that scales training data for realistic productivity work.",
            "points": [
              {
                "subtitle": "실제 데이터 기반의 합성",
                "desc": "연구진은 웹에서 수집한 1만 개의 후보군에서 4천 개의 작업 사례를 추출했는데요, 여기에는 실제 여러 형식의 첨부 파일과 세밀한 평가 기준이 포함되어 있습니다. 인위적으로 만든 데이터가 아니라 실제 업무의 맥락을 담은 데이터를 사용했다는 게 특징이에요.",
                "evidence": "From 10k web-corpus candidates, Agent-R^2 distills 4k task instances that pair real multi-format attachments with fine-grained, deliverable-level rubrics."
              },
              {
                "subtitle": "모델 학습 및 성능 향상",
                "desc": "이렇게 만든 데이터로 Agent-R^2-4B 모델을 지도 미세 조정(SFT)과 평가 기준 기반 강화 학습으로 훈련했습니다. 그 결과 GDPval 지표에서 51.0%를 기록해 48.0%인 Qwen3-235B-A22B-Thinking-2507 모델을 앞섰고, OfficeQA에서도 14.8%로 더 높은 점수를 얻었다고 주장했습니다.",
                "evidence": "Trained on only 4k instances, Agent-R^2-4B surpasses Qwen3-235B-A22B-Thinking-2507 on both GDPval (51.0% vs. 48.0%) and OfficeQA (14.8% vs. 13.8%)."
              },
              {
                "subtitle": "지름길 편향 문제 해결",
                "desc": "분석 결과, 이 모델은 AI가 충분히 검증하지 않고 그럴듯한 결과물만 내놓으려는 지름길 편향(shortcut behavior)을 줄여 주는 효과가 있었습니다. 대신 모델이 업무를 수행할 때 더 꾸준히 탐색하도록 유도한다고 연구진은 밝혔습니다.",
                "evidence": "Further analysis shows that Agent-R^2 mitigates shortcut behavior, where agents produce superficially plausible deliverables before sufficiently grounding, constructing, or verifying them, while promoting sustained exploration."
              }
            ],
            "one_line": "실제 업무 데이터를 합성해 AI 에이전트의 생산성 업무 수행 능력을 높였어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.00359",
          "title": "Humanized but Still True? Auditing Facts and Detection in AI-Text Humanizers",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.00359",
            "arxiv": "https://arxiv.org/abs/2611.00359"
          },
          "published": "2026-10-30",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 4,
          "score": 0.4,
          "score_why": "추천 4 → +0.4",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 쓴 글을 사람처럼 바꾸는 도구들이 사실을 왜곡하고 있어요",
            "easy1_desc": "AI가 만든 글을 사람이 쓴 것처럼 고쳐주는 이른바 휴머나이저(Humanizer) 도구들을 조사해 봤는데요. 이 도구들이 글을 바꾸는 과정에서 숫자나 날짜, 이름 같은 중요한 정보들을 멋대로 바꾸거나 지워버리는 문제가 확인됐거든요. 2026년 10월 기준, 조사 대상인 상용 도구 11개 모두가 문서의 35~65%에서 이런 정보를 훼손한 것으로 나타났습니다. 쉽게 말하면, 글은 사람처럼 자연스러워졌을지 몰라도 그 안의 사실 관계는 엉망이 된 셈이에요.",
            "easy1_evidence": "In the October 2026 cycle of a public humanizer leaderboard, all 11 commercial tools changed or dropped at least one of these units in 35-65% of the documents that contained one.",
            "easy2_title": "사람처럼 쓴 글을 잡아내는 새로운 탐지 모델을 만들어 봤어요",
            "easy2_desc": "연구진은 휴머나이저로 바뀐 글을 사람이 쓴 글과 구분해 내기 위해 제브(Jev)라는 새로운 결정 모델을 도입했는데요. 기존의 탐지기들보다 성능이 훨씬 뛰어난데, AUROC(곡선 아래 면적) 기준으로 0.864라는 수치를 기록했거든요. 이는 기존 도구들보다 0.18~0.22 정도 더 높은 성능이에요. 다만 이 모델도 사람이 쓴 글의 24%를 AI가 쓴 것으로 잘못 판단하는 한계는 있다는 점을 연구진은 밝혔습니다.",
            "easy2_evidence": "On federal texts with matched human, AI-styled and humanized versions, a general-purpose decision model, Jev, asked a single zero-shot question, separated human originals from humanized rewrites with AUROC 0.864 (0.827-0.902), 0.18-0.22 higher than Binoculars, Fast-DetectGPT and the adversarially trained RADAR, while calling 24% of the human originals AI at a 0.5 threshold.",
            "topic": "AI 휴머나이저가 텍스트의 사실성을 얼마나 유지하는지 검증하고, 이를 탐지할 수 있는 모델의 성능을 평가했어요.",
            "topic_evidence": "We check whether numbers, dates, person and organization names, and quoted spans survive each rewrite, using a rule-based checker validated by two AI annotators (precision 0.84-1.00, recall 0.93-0.95; no human annotation).",
            "points": [
              {
                "subtitle": "휴머나이저의 정보 훼손 실태",
                "desc": "상용 휴머나이저 11개를 분석했더니 대부분이 숫자나 이름 같은 핵심 정보를 자주 바꿨는데요. 특히 인용구의 경우 훼손이 심각했고, 숫자와 이름만 따져도 10개의 도구가 문서의 20% 이상에서 정보를 변경했습니다. 정보 유지 능력과 탐지 회피 성능 사이에는 뚜렷한 연관성이 없다는 결과도 나왔거든요.",
                "evidence": "Most changes were to quoted spans; counting numbers and names alone, 10 of the 11 tools still altered at least one in 20% or more of the documents."
              },
              {
                "subtitle": "오픈 모델의 성능과 한계",
                "desc": "12B(120억 파라미터) 규모의 오픈형 휴머나이저 모델을 테스트해 봤더니, 미국 연방 기관 문서에서 숫자와 이름은 97% 이상 잘 지켰거든요. 하지만 인용구는 프롬프트 지시와 다르게 67~78%나 다시 썼습니다. 모델의 크기나 양자화 방식에 따른 성능 변화가 사전에 예측했던 것과는 다르게 나타나기도 했어요.",
                "evidence": "An open 12B humanizer kept at least 97% of numbers and names in fact-dense U.S. federal agency text, but reworded 67-78% of the quoted spans, against its own prompt."
              },
              {
                "subtitle": "제브(Jev) 모델의 탐지 성능",
                "desc": "제브 모델을 활용해 사람의 글과 휴머나이저가 바꾼 글을 구분해 본 결과, 기존 탐지기들보다 높은 정확도를 보였습니다. 반면 2026년형 모델이 만든 글에 대해서는 기존의 퍼플렉서티(Perplexity) 기반 탐지기들이 오히려 사람의 글보다 더 못 맞히는 현상도 확인됐거든요.",
                "evidence": "On the AI-styled rewrites by 2026 models, both perplexity-based detectors scored below chance (AUROC 0.37 and 0.39), also with line breaks removed."
              }
            ],
            "one_line": "AI 휴머나이저의 사실 왜곡을 검증하고 새로운 탐지 모델을 제안했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "제브 모델이 사람이 쓴 글을 AI가 쓴 것으로 잘못 분류하는 경우가 24% 발생한다는 한계가 있어요.",
            "limit_evidence": "On federal texts with matched human, AI-styled and humanized versions, a general-purpose decision model, Jev, asked a single zero-shot question, separated human originals from humanized rewrites with AUROC 0.864 (0.827-0.902), 0.18-0.22 higher than Binoculars, Fast-DetectGPT and the adversarially trained RADAR, while calling 24% of the human originals AI at a 0.5 threshold."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 안전·평가",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2607.24999",
          "title": "CogBattery: Human-Referenced Evaluation of Cognitive Task Behavior and Structure in Language Models",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2607.24999",
            "arxiv": "https://arxiv.org/abs/2607.24999"
          },
          "published": "2026-10-30",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 4,
          "score": 0.4,
          "score_why": "추천 4 → +0.4",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "사람과 똑같이 답한다고 진짜 사람처럼 생각하는 건 아니더라고요",
            "easy1_desc": "언어 모델이 사람과 비슷한 경향을 보인다고 해서 그게 곧 사람처럼 행동한다는 뜻은 아니거든요. 연구진이 13가지 인지 과제를 텍스트로 바꿔서 54개 언어 모델을 시험해 봤는데요, 모델이 사람처럼 정답을 맞히는 방향은 따라 해도 정작 틀리는 방식은 완전히 딴판이라는 걸 확인했어요. 쉽게 말하면, 겉모습만 사람을 흉내 낼 뿐 속은 다르게 작동한다는 말이에요.",
            "easy1_evidence": "These results show that matching human effect directions does not establish human-like behavior.",
            "easy2_title": "모델의 자신감과 실제 실력을 꼼꼼하게 다시 따져 봤습니다",
            "easy2_desc": "연구진은 CogBattery라는 도구를 써서 모델이 얼마나 사람처럼 생각하는지 평가했는데요, 모델들은 사람이 낚이는 문제에 똑같이 반응하면서도 엉뚱한 오답을 훨씬 많이 내놓는다는 걸 발견했어요. 특히 모델들은 정답을 맞힐 때나 틀릴 때나 자신감 수준이 비슷하고, 베팅할 때도 항상 같은 선택만 고집하는 경향이 있거든요. 모델의 크기가 커진다고 해서 반드시 사람과 더 비슷해지는 것도 아니라는 점을 밝혀낸 겁니다.",
            "easy2_evidence": "CogBattery evaluates 54 open-weight language models on text adaptations of 13 cognitive paradigms, comparing each with human data from its source study.",
            "topic": "언어 모델의 인지적 행동과 구조를 사람의 데이터와 비교하여 평가하는 CogBattery 프레임워크를 제안했습니다.",
            "topic_evidence": "CogBattery: Human-Referenced Evaluation of Cognitive Task Behavior and Structure in Language Models",
            "points": [
              {
                "subtitle": "인지 과제 기반의 모델 평가",
                "desc": "연구진은 13가지 인지 패러다임을 텍스트로 변환하여 54개의 오픈 웨이트 언어 모델을 테스트했어요. 각 모델의 결과는 해당 연구의 원본 인간 데이터와 직접 비교하는 방식을 취했거든요.",
                "evidence": "CogBattery evaluates 54 open-weight language models on text adaptations of 13 cognitive paradigms, comparing each with human data from its source study."
              },
              {
                "subtitle": "사람과 다른 모델의 오류 패턴",
                "desc": "모델들은 사람처럼 n-back 과제에서 유인책에 더 많이 반응했지만, 일반적인 비표적 자극에서는 훨씬 더 많은 오경보를 냈어요. 또한 모델의 자신감 지표는 정답과 오답을 사람만큼 잘 구분하지 못하는 것으로 나타났습니다.",
                "evidence": "Like humans, models respond more to n-back lures than to controls, yet they make far more false alarms on ordinary non-targets."
              },
              {
                "subtitle": "모델 규모와 성능의 상관관계",
                "desc": "모델의 점수는 크게 두 가지 차원으로 나뉘는데, 첫 번째 차원은 모델의 규모와 밀접한 관련이 있어요. 하지만 연구진은 모델이 커진다고 해서 항상 사람의 행동에 더 가까워지는 것은 아니라고 주장했습니다.",
                "evidence": "The first is closely tied to scale, yet larger models are not consistently closer to humans."
              }
            ],
            "one_line": "언어 모델의 인지적 행동을 사람 데이터와 비교해 평가하는 도구를 만들었어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "새로운 모델의 오류와 자신감 보고를 테스트하기 위한 조건별 인간 참조 데이터를 제공합니다.",
            "limit_evidence": "CogBattery provides condition-level human references for testing errors and confidence reports in new models."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                false
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "5/6",
            "evidence_all": false,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 안전·평가",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2603.27343",
          "title": "WMIP: A Working-Memory-Inspired Programmable Probe of Cumulative State Tracking in Large Language Models",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2603.27343",
            "arxiv": "https://arxiv.org/abs/2603.27343"
          },
          "published": "2026-10-30",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 4,
          "score": 0.4,
          "score_why": "추천 4 → +0.4",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "사람의 작업 기억처럼 모델도 정보를 계속 쌓아갈 수 있을까",
            "easy1_desc": "사람은 머릿속으로 정보를 유지하고 업데이트하는 작업 기억을 사용하는데요, 거대 언어 모델(LLM)도 긴 문장 안에서 중간 과정을 적지 않고 상태를 추적해야 할 때 비슷한 능력이 필요합니다. 하지만 기존의 평가 방식들은 중간 과정을 적게 하는지 여부 같은 조건이 제각각이라 모델의 진짜 능력을 비교하기가 어려웠거든요. 연구진은 그래서 작업 기억에서 영감을 얻은 새로운 평가 도구인 WMIP를 제안했습니다.",
            "easy1_evidence": "Large language models (LLMs) face a related demand when tracking updates within a single prompt without writing out intermediate states, yet existing tests differ in their constraints on written steps.",
            "easy2_title": "평가 방식을 바꾸니 모델의 성능이 완전히 다르게 나타났어요",
            "easy2_desc": "18개의 모델을 테스트해 봤더니, 단순한 한 단계 계산은 84.9%로 정확도가 높았지만 3~7번의 업데이트가 필요한 핵심 항목에서는 31.7%로 뚝 떨어졌습니다. 특히 50번 이상의 업데이트가 넘어가면 10%를 넘는 모델이 하나도 없었는데요, 흥미로운 점은 중간 과정을 적으라고 지시하거나 환경을 바꾸면 정확도가 88.0%까지 올라간다는 겁니다. 결국 모델의 성능은 단순히 계산 능력뿐만 아니라 어떤 방식으로 답을 요구하느냐에 따라 크게 달라진다는 사실을 확인한 셈이에요.",
            "easy2_evidence": "Core accuracy reaches 88.0% under a larger budget and instructions to write steps and place the answer on the last line, mainly due to the instruction changes rather than the budget.",
            "topic": "거대 언어 모델이 정보를 누적하여 추적하는 능력을 평가하기 위한 새로운 도구인 WMIP를 개발하고, 모델의 성능이 평가 프로토콜에 따라 어떻게 달라지는지 분석한 연구예요.",
            "topic_evidence": "We introduce a working-memory-inspired probe of cumulative state tracking with program-computed answers, 3 to 100 updates, and final-state, intermediate-state, or multi-target queries.",
            "points": [
              {
                "subtitle": "WMIP 평가 도구 개발",
                "desc": "연구진은 프로그램으로 계산된 정답을 사용하고 3개에서 100개까지의 업데이트를 수행하며, 최종 상태나 중간 상태를 묻는 방식으로 모델을 평가하는 WMIP를 만들었습니다. 이는 기존의 제각각이었던 평가 방식들을 동일한 항목으로 비교할 수 있게 해 줍니다.",
                "evidence": "We introduce a working-memory-inspired probe of cumulative state tracking with program-computed answers, 3 to 100 updates, and final-state, intermediate-state, or multi-target queries."
              },
              {
                "subtitle": "모델의 누적 추적 성능 분석",
                "desc": "18개의 모델을 실험한 결과, 한 단계 계산은 잘하지만 여러 번의 업데이트가 필요한 작업에서는 성능이 크게 낮아졌습니다. 특히 50번 이상의 업데이트가 요구되는 상황에서는 모든 모델이 10% 미만의 정확도를 보였다고 연구진은 밝혔습니다.",
                "evidence": "Across 18 LLMs, accuracy is 84.9% on single-step arithmetic but 31.7% on core items requiring one number after three to seven updates."
              },
              {
                "subtitle": "평가 프로토콜의 영향력 확인",
                "desc": "중간 과정을 적게 하거나 지시 사항을 바꾸는 것만으로도 정확도가 88.0%까지 올라가는 것을 확인했습니다. 이는 모델의 계산 능력이 충분하더라도 평가 방식에 따라 결과가 크게 달라질 수 있음을 시사합니다.",
                "evidence": "These findings show that strong single-step arithmetic does not ensure reliable cumulative tracking and that output protocols substantially change measured accuracy."
              }
            ],
            "one_line": "작업 기억을 모방한 평가 도구로 LLM의 정보 누적 추적 성능을 측정했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.17336",
          "title": "Back to Pixels: Lifting Latent Video Diffusion into Pixel Space",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.17336",
            "arxiv": "https://arxiv.org/abs/2611.17336"
          },
          "published": "2026-11-12",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 3,
          "score": 0.3,
          "score_why": "추천 3 → +0.3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "압축된 영상 공간에서 학습하다 보니 고해상도 작업이 어려웠어요",
            "easy1_desc": "기존의 영상 생성 모델들은 영상을 공간과 시간적으로 압축하는 VAE(변분 오토인코더) 잠재 공간에서 학습을 진행해 왔는데요. 이렇게 하면 학습은 쉬워지지만, 해상도를 두 배로 높이면 토큰 수가 네 배로 늘어나는 등 고해상도나 상호작용이 필요한 생성 작업에는 한계가 생기게 됩니다. 게다가 여러 프레임을 한꺼번에 묶어서 처리해야 하니, 각 프레임별로 즉각적인 반응을 끌어내기도 어렵다는 단점이 있어요.",
            "easy1_evidence": "Frontier video generation models work in a VAE latent space that compresses video in both space and time.",
            "easy2_title": "잠재 공간을 벗어나 픽셀 단위로 직접 영상을 생성하게 바꿨어요",
            "easy2_desc": "연구진은 PixVid라는 방법을 통해 기존의 잠재 영상 모델을 픽셀 공간에서 직접 모든 프레임을 생성하도록 개선했는데요. 기존의 VAE 디코더를 픽셀로 변환하는 합성곱 헤드로 교체하고, 속도가 아닌 깨끗한 영상을 예측하도록 학습 방식을 바꾼 것이 핵심이에요. 이렇게 했더니 같은 토큰 수로도 두 배 높은 해상도를 구현할 수 있고, 빠른 움직임 속에서도 영상 편집이 잘 유지되며 즉각적인 반응이 가능해졌다는 겁니다.",
            "easy2_evidence": "We present PixVid, a simple yet effective method that lifts a pretrained latent video model to directly generate every frame in pixel space.",
            "topic": "잠재 공간 기반 영상 생성 모델의 한계를 극복하기 위해 픽셀 공간에서 직접 프레임을 생성하는 PixVid 모델을 제안했어요.",
            "topic_evidence": "We present PixVid, a simple yet effective method that lifts a pretrained latent video model to directly generate every frame in pixel space.",
            "points": [
              {
                "subtitle": "픽셀 공간으로의 전환",
                "desc": "기존의 VAE 디코더를 제거하고 그 자리에 픽셀로 영상을 출력하는 합성곱 헤드를 도입했는데요. 이를 통해 잠재 공간의 제약에서 벗어나 프레임 단위로 직접 영상을 생성할 수 있게 만들었습니다.",
                "evidence": "PixVid keeps the diffusion transformer and replaces the VAE decoder with a convolutional head that renders its outputs into pixels."
              },
              {
                "subtitle": "학습 전략의 최적화",
                "desc": "영상 생성의 품질을 높이기 위해 속도(velocity)가 아닌 깨끗한 영상 자체를 예측하도록 학습시켰는데요. 여기에 더 큰 노이즈 이동(noise shift)을 적용한 것이 고품질 영상을 얻는 데 결정적인 역할을 했다고 연구진은 주장했습니다.",
                "evidence": "We find that predicting clean video rather than velocity, together with a larger noise shift, is key to quality."
              },
              {
                "subtitle": "성능 및 효율성 검증",
                "desc": "Wan2.1-14B 모델을 기반으로 130만 개의 학습 클립을 사용해 미세 조정을 거쳤는데요. 그 결과 기존 잠재 모델과 대등한 성능을 보이면서도, 동일한 프레임당 토큰 수로 두 배 높은 해상도를 생성하고 즉각적인 반응성을 확보했습니다.",
                "evidence": "Working framewise in pixels, it generates at 2times higher resolution with the same per-frame token count, keeps depth-conditioned video editing aligned under fast motion, and responds to each action at the next frame."
              }
            ],
            "one_line": "잠재 공간 대신 픽셀 공간에서 영상을 생성하는 PixVid 모델을 개발했어요.",
            "topic_tag": "영상·음성·멀티모달",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "영상·음성·멀티모달",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16321",
          "title": "From Large Language Models to Efficient System One Models via Adaptive Computation",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.16321",
            "arxiv": "https://arxiv.org/abs/2611.16321"
          },
          "published": "2026-11-12",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 3,
          "score": 0.3,
          "score_why": "추천 3 → +0.3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "거대 언어 모델을 의사결정에 쓰려니 너무 무겁고 느리더라고요",
            "easy1_desc": "거대 언어 모델(LLM)을 의사결정 모델로 바꿀 때는 보통 전체 층을 다 거치게 만드는데, 이게 매번 모든 층을 계산해야 해서 비용이 많이 든다는 문제가 있었거든요. 연구진이 확인해 봤더니 의사결정에 필요한 정보는 중간 층에 몰려 있고 마지막 6개 층은 없어도 성능에 지장이 없다는 걸 알아냈어요. 게다가 작게 따로 학습시킨 모델들은 큰 모델의 능력을 제대로 따라가지 못한다는 한계도 있었고요. 쉽게 말하면, 무작정 모델을 줄이는 것보다 층별로 계산을 효율적으로 나누는 게 중요하다는 겁니다.",
            "easy1_evidence": "Transferring LLMs into System One decision models typically replaces the language modeling head with a decision head while retaining the full backbone, making every decision pay for all layers.",
            "easy2_title": "필요한 만큼만 계산하는 똑똑한 모델을 만들었어요",
            "easy2_desc": "그래서 연구진은 모델의 마지막 층과 의사결정 머리를 공유하면서 스스로 지식을 전수하는 방식인 'Ada-LLM'을 제안했는데요. 모델 중간에 가벼운 게이트를 달아서 추가 계산이 필요한지 판단하게 만들었더니, 하나의 모델로도 상황에 따라 층을 다르게 쓰며 효율적으로 작동하게 된 거예요. 7개의 의사결정 벤치마크에서 확인해 보니 기존의 따로 학습한 모델들보다 성능이 좋거나 비슷하면서도 정확도와 효율성 사이의 균형을 훨씬 잘 잡았거든요. 쉽게 말하면, 상황에 맞춰 계산량을 조절해 성능은 챙기고 비용은 줄였다는 말이에요.",
            "easy2_evidence": "Building on this, we propose Ada-LLM, which jointly trains a full model with prefix sub-models that share its final layers and decision head through self-distillation.",
            "topic": "거대 언어 모델의 의사결정 효율성을 높이기 위해 적응형 계산을 활용하는 방법이에요.",
            "topic_evidence": "These findings suggest that efficiency requires not simply smaller backbones, but shared computation across different depths.",
            "points": [
              {
                "subtitle": "의사결정 정보의 위치 확인",
                "desc": "모델의 층별로 의사결정 정보를 분석해 봤더니, 중요한 정보는 중간 층에 집중되어 있다는 사실을 발견했어요. 마지막 6개 층은 제거해도 성능 손실이 없다는 점도 확인했고요. 뭔 소리냐면, 모든 층을 다 거치는 게 항상 정답은 아니라는 말이에요.",
                "evidence": "We find that decision information is concentrated in intermediate layers, with early layers building essential features and the final six layers removable without loss, while independently trained smaller models largely mimic the full model rather than developing specialized decision capabilities."
              },
              {
                "subtitle": "Ada-LLM 모델 설계",
                "desc": "전체 모델과 그 앞부분의 작은 모델들이 마지막 층과 의사결정 머리를 공유하도록 하는 Ada-LLM을 설계했어요. 스스로 지식을 전수하는 방식을 써서 모델 간의 연결성을 높였거든요. 덕분에 모델이 여러 층을 유연하게 활용할 수 있게 된 겁니다.",
                "evidence": "Building on this, we propose Ada-LLM, which jointly trains a full model with prefix sub-models that share its final layers and decision head through self-distillation."
              },
              {
                "subtitle": "적응형 계산의 성능 검증",
                "desc": "각 출구마다 가벼운 게이트를 달아서 추가 계산이 필요한지 스스로 결정하게 만들었는데요. 7개 벤치마크에서 테스트해 보니 기존 모델들보다 정확도와 효율성 면에서 더 나은 결과를 보여줬어요. 상황에 따라 계산량을 조절하는 적응형 계산이 효과적이라는 걸 증명한 셈이에요.",
                "evidence": "Across seven decision benchmarks, our approach matches or outperforms independently trained models at every depth, while achieving better accuracy-efficiency trade-offs through adaptive computation."
              }
            ],
            "one_line": "적응형 계산을 도입해 거대 언어 모델의 의사결정 효율을 높였어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 2,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.14413",
          "title": "Bits or permutations? Spending a fixed inference budget on weight precision or on option-order averaging in small local language models",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.14413",
            "arxiv": "https://arxiv.org/abs/2611.14413"
          },
          "published": "2026-11-10",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 3,
          "score": 0.3,
          "score_why": "추천 3 → +0.3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "모델을 가볍게 만들 때 무엇을 먼저 줄여야 할까",
            "easy1_desc": "언어 모델의 메모리를 아끼려고 가중치(모델의 매개변수)를 적은 비트로 저장하거나, 질문 보기 순서를 바꿔 평균을 내는 방식을 쓰는데요. 연구진은 이 두 가지 방법 중 무엇에 자원을 쓰는 게 더 효율적인지 따져 봤습니다. 6비트까지는 정밀도를 낮춰도 성능 저하가 거의 없었지만, 4비트 이하로 내려가면 보기 순서에 따라 답이 달라지는 편향이 커지는 문제가 생기거든요. 쉽게 말하면, 무작정 비트를 줄이기보다 성능을 지키면서 효율을 챙길 최적의 지점을 찾으려 했다는 겁니다.",
            "easy1_evidence": "We ask whether the first makes the second worse, and which is the cheaper way to spend a fixed budget.",
            "easy2_title": "6비트 가중치와 보기 순서 평균화가 가장 효율적이야",
            "easy2_desc": "실험 결과 6비트 가중치를 사용하고 남은 예산을 보기 순서를 4번 평균 내는 데 쓰는 것이 가장 효과적이라는 결론을 얻었습니다. 4비트 모델에서는 보기 순서 편향이 0.6B 모델 기준 0.15에서 0.53으로 크게 늘어나는 단점이 있는데, 이때 순서를 4번 평균 내면 12.6점의 성능을 회복할 수 있거든요. 즉, 무조건 비트를 줄이는 것보다 적절한 비트 수와 순서 평균화를 조합하는 게 성능 면에서 유리하다는 말이에요.",
            "easy2_evidence": "In cost-matched pairs, extra orders beat extra bits only when the weights have 6 or more bits, and the decision table reduces to: use 6-bit weights and spend the rest of the budget on up to four orders, one pass each.",
            "topic": "소형 언어 모델에서 가중치 양자화와 보기 순서 평균화 사이의 비용 대비 성능 효율을 분석한 연구입니다.",
            "topic_evidence": "We ask whether the first makes the second worse, and which is the cheaper way to spend a fixed budget.",
            "points": [
              {
                "subtitle": "양자화와 성능 변화",
                "desc": "Qwen3-0.6B와 1.7B 모델을 대상으로 8, 6, 4, 3비트 양자화(데이터 크기를 줄이는 기술)를 적용해 봤습니다. 6비트에서는 fp16(기본 정밀도) 대비 성능 손실이 없었지만, 4비트에서는 보기 순서에 따른 편향이 크게 증가하는 현상이 나타났거든요.",
                "evidence": "On Qwen3-0.6B and Qwen3-1.7B with simulated round-to-nearest weight quantization (8, 6, 4 and 3 bits, fp16 reference), read from the logits of the letters A to D on ARC-Easy, ARC-Challenge, MMLU and HellaSwag (300 items each), 6 bits lose no accuracy against fp16 (they score +1.8 (+1.0 to +2.5) and +0.9 (+0.3 to +1.5) points higher, which we do not explain), and 8 bits change it by -0.7 (-1.1 to -0.3) and -0.4 (-0.7 to -0.2) points."
              },
              {
                "subtitle": "보기 순서 평균화의 효과",
                "desc": "질문 보기 순서를 4번 바꿔서 평균을 내는 방식을 적용했더니, 4비트로 양자화된 0.6B 모델에서 12.6점의 성능 회복을 보였습니다. 이는 모델이 보기 순서에 민감하게 반응하는 문제를 완화하는 데 효과적이라는 뜻이에요.",
                "evidence": "Averaging four cyclic orders recovers +12.6 points at 4 bits for 0.6B (+5.3 at fp16)."
              },
              {
                "subtitle": "최적의 예산 배분 전략",
                "desc": "비트 수와 추론 횟수를 기계 독립적인 단위로 계산해 비용을 맞춘 결과, 6비트 가중치를 사용하고 남은 예산을 보기 순서 평균화에 투자하는 것이 가장 좋다고 밝혔습니다. 이는 제한된 자원 안에서 모델의 성능을 극대화하는 전략입니다.",
                "evidence": "In cost-matched pairs, extra orders beat extra bits only when the weights have 6 or more bits, and the decision table reduces to: use 6-bit weights and spend the rest of the budget on up to four orders, one pass each."
              }
            ],
            "one_line": "소형 언어 모델의 가중치 양자화와 보기 순서 평균화의 최적 조합을 찾았어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "이번 연구는 두 개의 작은 모델과 가장 단순한 양자화 방식을 사용했다는 한계가 있습니다.",
            "limit_evidence": "Everything is simulated on two small models with the simplest quantizer; a title-level search found no earlier study of quantization together with option order."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.13758",
          "title": "Mixed Signals: Weight-Space Programming for EEG and ECG",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.13758",
            "arxiv": "https://arxiv.org/abs/2611.13758"
          },
          "published": "2026-11-10",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 3,
          "score": 0.3,
          "score_why": "추천 3 → +0.3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "신경망의 가중치를 직접 수정해서 학습시키는 방법이 나왔어요",
            "easy1_desc": "보통 인공지능은 경사하강법이라는 방식으로 학습하지만, 이 연구에서는 언어 모델이 신경망의 가중치(연결 강도)를 직접 읽고 수정하는 가중치 공간 프로그래밍을 활용했어요. 이게 왜 중요하냐면, 데이터를 반복해서 넣는 과정 없이 추론만으로 신경망을 만들거나 고칠 수 있기 때문이에요. 기존에는 게임이나 언어 모델에 주로 썼는데, 이번에는 뇌파(EEG)나 심전도(ECG) 같은 생체 신호 모델에도 적용해 본 겁니다.",
            "easy1_evidence": "Weight-space programming allows language models to read a trained neural network's weights and edit them.",
            "easy2_title": "적은 데이터로도 생체 신호 모델을 척척 만들어 냅니다",
            "easy2_desc": "연구진이 클로드 오퍼스(Claude Opus) 5.5 모델을 써서 생체 신호 모델을 직접 만들어 봤는데요, 경사하강법을 전혀 쓰지 않고도 기존 방식보다 6배 적은 학습 대상자만으로 비슷한 성능을 냈어요. 심지어 사람이 직접 짠 기존의 생체 신호 분석 방식보다도 더 높은 점수를 기록했거든요. 다만, 이미 잘 학습된 모델의 성능을 더 높이지는 못한다는 한계도 확인했습니다.",
            "easy2_evidence": "In particular, in one set of experiments, a language model was able to match standard gradient-descent training using 6times fewer training subjects, through reasoning alone and without any gradient descent step.",
            "topic": "언어 모델을 이용한 가중치 공간 프로그래밍으로 생체 신호 처리 모델을 학습하고 수정하는 가능성을 검증했어요.",
            "topic_evidence": "In this work, we present its applicability to models trained on biosignal data, specifically EEG and ECG data.",
            "points": [
              {
                "subtitle": "생체 신호 모델의 오류 수정",
                "desc": "언어 모델이 생체 신호 기반 모델에 숨겨진 오류를 스스로 찾아내 고치는 능력을 확인했어요. 어떤 오류인지 미리 알려주지 않아도 모델이 알아서 문제를 해결했다는 점이 특징이에요.",
                "evidence": "We show that frontier models are not only able to debug specific faults planted in biosignal-based models without being told what these faults are, but are even capable of writing all the weights of a network from scratch, given only the architecture, the task, and a minimal set of training subjects."
              },
              {
                "subtitle": "경사하강법 없는 효율적 학습",
                "desc": "경사하강법을 거치지 않고 오직 추론만으로 신경망의 가중치를 작성해 봤는데요, 5명의 학습 대상자만으로도 기존의 수동 설계 방식보다 더 나은 성능을 보여줬어요.",
                "evidence": "Networks written by Claude Opus 5.5 also scored higher than classic hand-crafted EEG pipelines (alpha band power, and common spatial patterns with linear discriminant analysis) when built from the same 5 subjects."
              },
              {
                "subtitle": "소형 기기 적용 가능성",
                "desc": "이 방식은 웨어러블 기기나 엣지 디바이스처럼 작은 신경망을 다룰 때 유용할 것으로 보입니다. 다만 아직은 실제 현장에서 바로 쓰기엔 검증이 더 필요하다는 게 연구진의 입장이에요.",
                "evidence": "Overall, our results indicate that weight-space programming can be useful for small networks, such as those deployed on edge devices and wearables, but the concept still requires further investigation before it can be used in practice."
              }
            ],
            "one_line": "언어 모델로 생체 신호 모델의 가중치를 직접 수정해 효율적으로 학습시켰어요.",
            "topic_tag": "의료·바이오",
            "limit": "언어 모델이 이미 잘 학습된 모델의 성능을 향상시키지 못하며, 가중치만 보고는 모델이 어떤 작업을 위해 훈련되었는지 확실히 파악하지 못한다는 한계가 있어요.",
            "limit_evidence": "We also highlight some of the limitations, which include the inability of language models to improve already well-trained classification models, and their incapacity to reliably recognize, from the weights alone, the task a network was trained on."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [
              "예측 의심: 이 방식은 웨어러블 기기나 엣지 디바이스처럼 작은 신경망을 다룰 때 유용할 것으로 보입니다."
            ],
            "tag": "의료·바이오",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.12872",
          "title": "HiVe-Mem: Interleaving Horizontal Memory Expansion and Vertical Evidence Composition for Multimodal Agents",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.12872",
            "arxiv": "https://arxiv.org/abs/2611.12872"
          },
          "published": "2026-11-09",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 3,
          "score": 0.3,
          "score_why": "추천 3 → +0.3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "멀티모달 에이전트가 과거 기억을 잘 못 꺼내 쓰는 문제",
            "easy1_desc": "멀티모달 에이전트가 긴 대화를 나누다 보면 과거의 정보를 잘 찾아내지 못하는 경우가 생기는데요. 기존 방식은 기억을 압축해서 의미 위주로만 찾다 보니, 정작 필요한 구체적인 정보들을 놓치기 일쑤였거든요. 쉽게 말하면, 기억의 양은 많은데 정작 상황에 맞는 알짜배기 정보를 골라내는 능력이 부족했다는 말이에요.",
            "easy1_evidence": "Existing memory systems typically rely on semantic retrieval over compressed memories and expose predefined representations, which may miss relevant memories and overlook heterogeneous evidence needs across queries.",
            "easy2_title": "기억을 가로세로로 확장해서 필요한 정보만 쏙 뽑아내요",
            "easy2_desc": "연구진은 하이브멤(HiVe-Mem)이라는 새로운 기억 체계를 도입했는데요. 기억을 관계형 그래프로 엮어 연관된 정보를 넓게 찾고, 요약본이나 원본 이미지 같은 다양한 형태의 증거를 상황에 맞춰 골라 쓰도록 만들었어요. 덕분에 기억의 범위는 넓히면서도 토큰 사용량은 기존보다 약 90% 정도 줄이는 성과를 냈거든요. 결과적으로 에이전트가 더 똑똑하고 효율적으로 정보를 활용하게 된 셈이에요.",
            "easy2_evidence": "We introduce \\hivemem, a multimodal memory framework that interleaves \\textsc{H}or\\textsc{i}zontal Memory Expansion with \\textsc{Ve}rtical Evidence Composition.",
            "topic": "멀티모달 에이전트의 장기 기억 효율을 높이기 위해 기억의 범위와 증거 구성을 최적화하는 하이브멤 프레임워크를 제안했어요.",
            "topic_evidence": "We introduce \\hivemem, a multimodal memory framework that interleaves \\textsc{H}or\\textsc{i}zontal Memory Expansion with \\textsc{Ve}rtical Evidence Composition.",
            "points": [
              {
                "subtitle": "가로 방향 기억 확장",
                "desc": "기억 에피소드들을 텍스트와 시각적 기준점을 활용해 관계형 그래프로 묶어 봤는데요. 이렇게 하면 의미적으로 검색된 초기 정보에 연관된 이웃 정보들까지 함께 찾아낼 수 있어서, 놓치기 쉬운 보완 정보들을 더 많이 복구할 수 있다는 겁니다.",
                "evidence": "For horizontal memory expansion, \\hivemem organizes memory episodes into a relational graph using textual and visual anchors, expanding semantically retrieved seeds with related neighbors to recover complementary information."
              },
              {
                "subtitle": "세로 방향 증거 구성",
                "desc": "검색된 기억마다 요약, 캡션, 시각적 정보, 원본 이미지 등 여러 형태의 증거를 함께 보관하도록 했는데요. 가벼운 학습형 선택기가 각 질문에 맞춰 필요한 증거들만 골라내기 때문에, 상황에 딱 맞는 정보를 유연하게 쓸 수 있는 거예요.",
                "evidence": "For vertical evidence composition, each retrieved memory retains multiple evidence forms, including compact summaries, captions, grounded visual views, raw images, and interaction history."
              },
              {
                "subtitle": "성능 향상과 효율성",
                "desc": "세 가지 멀티모달 기억 벤치마크에서 실험해 봤더니, 하이브멤은 기본 모델들의 작업 성능을 꾸준히 높여주는 것으로 나타났어요. 특히 가장 효율적인 기존 방식들과 비교해도 토큰 사용량을 약 90%나 줄였다고 연구진은 주장했습니다.",
                "evidence": "Experiments across three multimodal memory benchmarks show that \\hivemem consistently improves task performance across base models while reducing token consumption by about 90\\% compared with the most efficient competing multimodal baselines."
              }
            ],
            "one_line": "멀티모달 에이전트의 기억 효율을 높이는 하이브멤 프레임워크를 제안했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.11531",
          "title": "Probing Transformer Representations Layer by Layer, Module by Module",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.11531",
            "arxiv": "https://arxiv.org/abs/2611.11531"
          },
          "published": "2026-11-08",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 3,
          "score": 0.3,
          "score_why": "추천 3 → +0.3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "마지막 층만 보는 게 항상 정답은 아니거든요",
            "easy1_desc": "트랜스포머 기반 모델을 분석할 때 보통 마지막 층의 정보를 가져다 쓰는 게 관행이었는데요, 연구진이 확인해 보니 중간 층에 더 좋은 정보가 담겨 있는 경우가 많다는 거예요. 단순히 층의 깊이만 따질 게 아니라, 모델 안의 세부 모듈까지 꼼꼼히 살펴봐야 한다는 뜻입니다. 즉, 마지막 층만 고집하는 방식이 최선이 아닐 수 있다는 걸 보여 준 셈이에요.",
            "easy1_evidence": "Recent work shows that the standard practice of probing the final layer is often suboptimal, as intermediate layers can provide better features.",
            "easy2_title": "층과 모듈을 같이 고려했더니 성능이 더 좋아졌어요",
            "easy2_desc": "연구진은 14만 4천 번이 넘는 선형 탐색 평가를 통해 층과 모듈을 함께 고려하는 것이 중요하다고 밝혔는데요, 최적의 층과 모듈 조합을 찾으면 마지막 층의 잔차 스트림만 쓰는 것보다 훨씬 큰 성능 향상을 얻을 수 있다는 겁니다. 특히 모듈의 성능이 층마다 크게 달라진다는 점을 확인했거든요. 그래서 비전 모델은 마지막 층의 피드포워드 활성화 값을, 언어 모델은 60% 깊이의 두 번째 정규화 층을 쓰는 간단한 전략을 제안했습니다.",
            "easy2_evidence": "Through more than 144,000 linear probing evaluations of vision foundation models (VFMs) and large language models (LLMs), we show that layer and module choices should be considered jointly: the best layer-module pair yields substantially larger gains over the final-layer residual stream than the best layer with the residual stream fixed.",
            "topic": "트랜스포머 기반 모델에서 가장 효과적인 표현을 추출하기 위해 층과 모듈을 세밀하게 분석하고 새로운 탐색 전략을 제안했어요.",
            "topic_evidence": "In this work, we analyze transformer representations layer by layer, module by module.",
            "points": [
              {
                "subtitle": "층과 모듈의 공동 분석",
                "desc": "연구진은 트랜스포머 블록을 하나의 단위로 보지 않고 층과 모듈을 쪼개어 분석했는데요, 14만 4천 번 이상의 평가를 거쳐 층과 모듈 선택이 서로 밀접하게 연관되어 있음을 입증했습니다. 마지막 층만 고정해서 쓰는 것보다 최적의 층-모듈 조합을 찾는 것이 훨씬 유리하다는 결과예요.",
                "evidence": "In this work, we analyze transformer representations layer by layer, module by module."
              },
              {
                "subtitle": "고정된 탐색 전략 제안",
                "desc": "분석 결과를 바탕으로 비전 모델은 마지막 층의 피드포워드 활성화(Act@100)를, 언어 모델은 60% 깊이의 두 번째 정규화 층(LN2@60)을 활용하는 고정 전략을 제시했습니다. 이 방식은 기존의 마지막 층 탐색 기준보다 대부분의 평가에서 더 나은 성능을 보였거든요.",
                "evidence": "Building on these findings, we evaluate simple fixed probing strategies: the final-layer feedforward activation (Act@100) for vision and the second normalization layer at 60% depth (LN2@60) for language."
              },
              {
                "subtitle": "성능 향상 폭 확인",
                "desc": "제안한 전략을 적용했을 때 최적의 층-모듈 조합에서 얻을 수 있는 성능 향상분의 평균 42%(비전)와 86%(언어)를 회복할 수 있었다고 연구진은 주장했습니다. 특히 비전 모델의 경우 사전 학습 데이터와 하위 작업 데이터 간의 전이 난도가 높을수록 이러한 성능 향상 폭이 더 커지는 것으로 나타났습니다.",
                "evidence": "These strategies improve over the probing baseline in a majority of evaluations and recover, on average, 42% and 86% of the gains from probing the best layer-module pair for vision and language, respectively."
              }
            ],
            "one_line": "트랜스포머 모델의 층과 모듈을 분석해 최적의 표현 추출 전략을 제시했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [
              "14",
              "4"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.08379",
          "title": "Module-Aware Optimization for Graph Neural Networks",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.08379",
            "arxiv": "https://arxiv.org/abs/2611.08379"
          },
          "published": "2026-11-05",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 3,
          "score": 0.3,
          "score_why": "추천 3 → +0.3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "그래프 신경망은 일반적인 최적화 방식이 잘 안 맞는 문제가 있었어요",
            "easy1_desc": "보통의 최적화 도구들은 가중치 행렬의 구조만 보고 업데이트를 진행하는데요, 그래프 신경망(GNN)은 그래프를 통해 전달된 데이터가 가중치와 섞이면서 그 영향력이 증폭되는 특성이 있거든요. 그래서 기존의 방식대로 업데이트를 하면 층의 출력값이 예상보다 크게 변하는 문제가 생기는 겁니다. 쉽게 말하면, 그래프 데이터의 특성을 고려하지 않은 업데이트 방식이 신경망 학습을 불안정하게 만든다는 거예요.",
            "easy1_evidence": "For Graph Neural Networks (GNN), however, the effective geometry of its weight matrices is shaped not only by its learned channel-mixing weights, but also by the graph-propagated representations it acts on.",
            "easy2_title": "그래프 구조를 직접 반영한 새로운 최적화 도구인 GraphMuon을 만들었어요",
            "easy2_desc": "연구진은 그래프로 전달된 입력값의 공분산 구조를 반영해 업데이트를 수행하는 GraphMuon이라는 도구를 제안했는데요, 이 방식은 그래프 데이터가 미치는 영향을 계산해서 업데이트 크기를 적절하게 조절해 줍니다. 이렇게 하면 기존 방식에서 나타나던 업데이트 증폭 현상을 막을 수 있다는 장점이 있거든요. 실제로 실험해 봤더니 기존의 AdamW 방식보다 학습 속도가 1.32배에서 2.42배까지 빨라졌다고 해요.",
            "easy2_evidence": "To address this gap, we introduce GraphMuon, a graph-aware optimizer that adapts Muon's matrix updates to the covariance structure of graph-propagated layer inputs.",
            "topic": "그래프 신경망의 학습 효율을 높이기 위해 그래프 데이터의 구조적 특성을 반영한 최적화 기법인 GraphMuon을 제안했어요.",
            "topic_evidence": "To address this gap, we introduce GraphMuon, a graph-aware optimizer that adapts Muon's matrix updates to the covariance structure of graph-propagated layer inputs.",
            "points": [
              {
                "subtitle": "그래프 데이터의 영향력 분석",
                "desc": "연구진은 그래프 신경망에서 가중치 행렬이 그래프를 통해 전달된 데이터와 결합할 때, 그 영향력이 증폭되어 학습에 왜곡을 줄 수 있다는 점을 이론적으로 분석했어요. 기존의 행렬 기반 최적화 도구인 Muon이 가진 한계를 지적한 겁니다.",
                "evidence": "We show that theoretically, vanilla Muon can suffer from graph-induced update amplification, while our GraphMuon can mitigate this effect."
              },
              {
                "subtitle": "GraphMuon의 최적화 방식",
                "desc": "GraphMuon은 그래프로 전달된 표현들의 공분산 구조를 기반으로 직교화 과정을 수행하고, 그에 맞춰 단계 크기를 정규화하는 방식을 취해요. 이는 Muon의 극좌표 업데이트 단계를 그래프 데이터의 특성에 맞게 변형한 것이라 볼 수 있습니다.",
                "evidence": "GraphMuon performs orthogonalization in a metric defined by these propagated representations and normalizes step sizes according to the update's induced effect on the layer representation."
              },
              {
                "subtitle": "학습 성능 및 속도 향상",
                "desc": "대규모 OGB 벤치마크 데이터셋에서 실험한 결과, AdamW 대비 1.32배에서 2.42배 빠른 속도로 목표 손실값에 도달했는데요, 총 15개의 데이터셋 구성 중 13개 사례에서 더 빠른 학습 속도를 보였으며 예측 성능 또한 우수하게 유지했다고 밝혔습니다.",
                "evidence": "Empirically, GraphMuon achieves 1.32times-2.42times validation-loss time-to-target speedups over AdamW on three large-scale OGB benchmarks."
              }
            ],
            "one_line": "그래프 신경망 학습을 위해 그래프 구조를 반영한 최적화 도구를 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 1,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.05862",
          "title": "CARTBench: Rubric-Based Evaluation of Shopping Advice for Complex and Ambiguous Requests with Timelines",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.05862",
            "arxiv": "https://arxiv.org/abs/2611.05862"
          },
          "published": "2026-11-04",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 3,
          "score": 0.3,
          "score_why": "추천 3 → +0.3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "쇼핑 AI가 복잡한 요청을 제대로 처리하기 어려웠던 이유",
            "easy1_desc": "요즘 대화형 쇼핑 AI가 많이 쓰이는데, 정작 사용자가 복잡하거나 시간이 흐르면서 바뀌는 요청을 하면 제대로 답하기가 어려웠거든요. 왜 그런가 살펴봤더니, AI의 성능을 공정하게 평가할 데이터가 부족하고 무엇이 좋은 답변인지 정하는 기준조차 없었기 때문이에요. 쉽게 말하면, AI가 쇼핑 도우미로서 제대로 실력을 발휘할 시험 문제와 채점표가 없었던 셈이에요.",
            "easy1_evidence": "However, reliable evaluation faces Data scarcity and Difficulty Standardizing Criteria.",
            "easy2_title": "쇼핑 AI를 제대로 평가하기 위해 새로운 기준과 데이터를 만들었어요",
            "easy2_desc": "그래서 연구진은 복잡하고 모호한 쇼핑 요청을 평가할 수 있는 CARTBench라는 새로운 틀을 만들었는데요. 17개 소매 분야에서 실제 쇼핑 사례를 모아 1,603개의 상품 기록과 대화 데이터를 구축했고, 전문가가 직접 뽑은 좋은 답변 원칙을 바탕으로 구체적인 채점표를 세웠거든요. 이 기준을 적용해 10개의 주요 AI 모델을 시험해 봤더니, 핵심적인 답변은 잘하지만 수준 높은 추천까지 해내는 모델은 아직 부족하다는 사실을 확인했다는 겁니다.",
            "easy2_evidence": "To address these obstacles, we introduce CARTBench for CART (Complex and Ambiguous Requests with Timelines).",
            "topic": "복잡하고 모호한 쇼핑 요청을 처리하는 대화형 AI 모델의 성능을 평가하기 위한 새로운 벤치마크 체계와 그 결과를 다루고 있어요.",
            "topic_evidence": "To address these obstacles, we introduce CARTBench for CART (Complex and Ambiguous Requests with Timelines).",
            "points": [
              {
                "subtitle": "데이터 구축과 평가 기준 마련",
                "desc": "17개 소매 분야에서 실제 쇼핑 데이터를 수집해 1,603개의 상품 기록을 확보했고, 우수한 답변 사례를 분석해 구체적인 평가 원칙을 세웠어요. 이 원칙은 AI가 쇼핑 추천을 할 때 따라야 할 구조적인 지침으로도 활용된다는 겁니다.",
                "evidence": "For Data scarcity, we curate cases from real commercial shopping needs across 17 retail domains, pairing timestamped dialogue with 1,603 product records."
              },
              {
                "subtitle": "주요 AI 모델 성능 평가",
                "desc": "GPT-6.1-Sol이나 Claude-Opus-5 같은 유명한 상용 모델과 35B 이상의 파라미터를 가진 오픈 모델 등 총 10개를 대상으로 시험을 진행했어요. 그 결과 핵심적인 답변은 3개 모델이 90% 이상의 점수를 받았지만, 우수한 추천을 의미하는 Excellence 항목에서는 45%를 넘긴 모델이 하나도 없었다고 해요.",
                "evidence": "In the first full-suite evaluation under the frozen rubrics, 3 of 10 models exceed 90% on Core, while none exceeds 45% on Excellence."
              },
              {
                "subtitle": "이해와 실행 사이의 간극 확인",
                "desc": "연구진은 AI가 사용자의 요구를 이해하는 것과 실제 고품질의 구매 조언을 실행하는 것 사이에 큰 차이가 있다는 점을 발견했어요. 특히 상품에 대한 근거를 제시하거나 사용자의 미해결 요구사항을 처리하는 부분에서 공통적인 실패가 나타났다고 주장했거든요.",
                "evidence": "Therefore, we identify an understanding-to-execution gap between required behavior and high-quality purchase advice."
              }
            ],
            "one_line": "쇼핑 AI의 성능을 평가할 새로운 벤치마크를 구축하고 모델별 한계를 분석했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "AI 모델들이 상품에 대한 근거를 제시하거나 변화하는 요구사항을 처리하는 과정에서 공통적인 실패를 보이고 있다는 한계가 있어요.",
            "limit_evidence": "To examine these limitations, we diagnose shared failures in product evidence and unresolved needs, linked to changing requirements and decisive unknowns."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.00428",
          "title": "Do Multimodal Models Decide Consistently on Equivalent Optical Spectra?",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.00428",
            "arxiv": "https://arxiv.org/abs/2611.00428"
          },
          "published": "2026-10-30",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 3,
          "score": 0.3,
          "score_why": "추천 3 → +0.3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "똑같은 데이터인데 보여주는 방식에 따라 답이 달라지더라고요",
            "easy1_desc": "연구진은 실리콘 메타표면과 금 나노입자의 광학 스펙트럼 데이터를 표나 그래프 같은 다양한 형태로 모델에 입력해 봤는데요. 똑같은 정보인데도 표현 방식만 바꾸면 모델의 정확도가 최대 41%포인트까지 변하는 현상을 확인했어요. 뭔 소리냐면, 모델이 데이터의 본질보다는 입력 형식에 따라 판단이 흔들린다는 말이에요. 결국 같은 데이터라면 어떤 방식으로 보여주든 일관된 답을 내놓아야 하는데, 지금의 모델들은 그렇지 못하다는 겁니다.",
            "easy1_evidence": "Changing only the representation moves accuracy by up to 41 percentage points within one model, mostly on photon-energy tables and plots.",
            "easy2_title": "데이터가 부족할 때 모른다고 말하게 하려면 훈련이 필요해요",
            "easy2_desc": "모델이 답을 낼 수 없는 상황에서 '알 수 없음'이라고 답하게 하려고 LoRA 미세 조정을 해봤는데요. 처음에는 입력이 잘리면 무조건 모른다고 답하는 꼼수를 부리기도 했거든요. 그래서 답이 가능한 경우와 불가능한 경우를 섞어서 학습시켰더니, 모델이 단순히 자르는 게 아니라 진짜로 답할 수 있는지 판단하게 됐다는 거예요. 결과적으로 과학적 결정을 내리는 모델은 단순히 평균 정확도만 볼 게 아니라 이런 일관성과 판단 능력을 꼭 검증해야 한다고 연구진은 주장했어요.",
            "easy2_evidence": "Training with answerable truncations avoids the shortcut in all six seeds, with a 90-100 point gap between abstention after inside and outside cuts on held-out structures; with the same amount of extra original-task data, five of six seeds keep the shortcut.",
            "topic": "멀티모달 모델이 과학적 데이터를 해석할 때 입력 표현 방식에 따라 얼마나 일관되게 판단하고, 정보가 부족할 때 적절히 대응하는지를 평가했어요.",
            "topic_evidence": "We test representation invariance and abstention on measured optical spectra of silicon metasurfaces (MOCLIP) and gold nanoparticles, with labels computed from the data.",
            "points": [
              {
                "subtitle": "모델의 표현 불변성 평가",
                "desc": "연구진은 d3-nano, Jev 1.13, GPT-6 Luna, Qwen3.5-2B 모델을 대상으로 스펙트럼 데이터를 표와 그래프 등 6가지 방식으로 입력해 봤어요. 그 결과 파장 대신 광자 에너지 단위를 사용하면 특정 모델에서는 정확도가 16~50%포인트 오르기도 하지만, 반대로 25%포인트까지 떨어지는 모델도 있다는 걸 확인했거든요. 표현 방식에 따라 성능이 크게 널뛰는 셈이에요.",
                "evidence": "With the same evidence, asking in photon energy instead of wavelength helps some model-view pairs by 16-50 points and hurts others by up to 25."
              },
              {
                "subtitle": "미세 조정을 통한 판단력 개선",
                "desc": "데이터의 일부가 제거되어 답을 낼 수 없는 상황에서 모델이 어떻게 반응하는지 살펴봤는데요. 미세 조정을 거치지 않은 모델들은 대부분 '알 수 없음'이라고 답하지 못하고 엉뚱한 값을 내놓았거든요. LoRA 학습을 통해 이 문제를 해결하려고 시도했는데, 모델이 단순히 입력이 잘렸다는 이유만으로 답을 회피하는 꼼수를 쓰지 않도록 훈련하는 과정이 중요했다는 겁니다.",
                "evidence": "LoRA fine-tuning of d3-nano improves comparisons on the trained table formats, but much of its gain on unanswerable questions comes from a shortcut: it abstains whenever the input is truncated."
              },
              {
                "subtitle": "과학적 모델 평가의 새로운 기준",
                "desc": "연구진은 과학적 결정을 내리는 멀티모달 모델을 평가할 때 단순히 평균적인 정확도만 따져서는 안 된다고 강조했어요. 대신 서로 다른 표현 방식에서도 일관된 결과를 내는지, 그리고 정보가 부족할 때 정확히 모른다고 답할 수 있는지를 반드시 테스트해야 한다는 거예요. 연구진은 이 연구에 사용된 과제와 코드, 응답 결과를 모두 공개했다고 밝혔습니다.",
                "evidence": "Multimodal language models used for scientific decisions should be tested on equivalent representations and on missing evidence, not only on average accuracy."
              }
            ],
            "one_line": "멀티모달 모델의 데이터 표현 방식에 따른 일관성과 판단 능력을 평가했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 안전·평가",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2610.41453",
          "title": "Evidence-Guided Recovery for AI Agents with Ambiguous Tool Outcomes and Partial Execution",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2610.41453",
            "arxiv": "https://arxiv.org/abs/2610.41453"
          },
          "published": "2026-10-30",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 3,
          "score": 0.3,
          "score_why": "추천 3 → +0.3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "도구 사용이 꼬여버리면 AI 에이전트가 갈피를 못 잡아요",
            "easy1_desc": "AI 에이전트가 도구를 쓰다 보면 시간이 초과되거나 결과가 불분명해지는 상황이 생기는데요, 어떤 작업은 실패했는데 다른 단계는 이미 끝나 버리는 등 상태가 엉키는 겁니다. 이게 왜 문제냐면, 도구가 실제로 일을 마쳤는지 아니면 중간에 멈췄는지 알기 어렵기 때문이에요. 쉽게 말하면, AI가 자기 행동의 결과를 확신하지 못해 다음 단계로 넘어가지 못하는 상태에 빠지는 셈이에요.",
            "easy1_evidence": "Tool timeouts can leave AI agents facing ambiguous tool outcomes and partial execution: an action may have failed, committed or remained in flight while other workflow steps have already completed.",
            "easy2_title": "증거를 바탕으로 작업을 다시 복구하는 방법을 만들었어요",
            "easy2_desc": "연구진은 공개된 증거와 도구의 능력을 따져서, AI가 멈춘 작업을 어떻게 복구할지 결정하는 체계를 세웠는데요, 핵심은 '종료 증명서'를 통해 목표가 실제로 달성됐는지 안전하게 확인하는 겁니다. 이 방식을 썼더니 58개 작업 단위에서 기존 방식보다 36.2%포인트 더 높은 완료율을 보였다고 해요. 다만, 도구의 결과가 불분명하거나 다른 곳으로 넘겨진 경우는 여전히 명확히 구분해서 처리해야 한다는 한계도 있다는 겁니다.",
            "easy2_evidence": "Across 58 paired units in 19 previously developed task families, advice certifies 30 completions versus 9, a 36.2-percentage-point difference (exact family sign-flip p=0.0078), using 272 proposals versus 399.",
            "topic": "불확실한 도구 실행 결과에 직면한 AI 에이전트를 위해 증거 기반의 작업 복구 체계를 제안했어요.",
            "topic_evidence": "We formulate evidence-guided task recovery over approved obligations, provider capabilities and states compatible with public evidence.",
            "points": [
              {
                "subtitle": "증거 기반 복구 체계",
                "desc": "공개된 증거와 도구의 능력, 그리고 허용된 의무 사항을 바탕으로 AI가 수행 중인 작업의 상태를 판단합니다. 뭔 소리냐면, 도구가 남긴 흔적을 통해 작업이 어디까지 진행됐는지 논리적으로 추적한다는 말이에요.",
                "evidence": "We formulate evidence-guided task recovery over approved obligations, provider capabilities and states compatible with public evidence."
              },
              {
                "subtitle": "상태 확인 및 종료 증명",
                "desc": "공통 허용성 검사를 통해 권한 만료나 의존성 문제를 해결하고, 종료 증명서를 발행해 작업이 안전하게 끝났는지 확인합니다. 실제 목표 달성 여부와 안전한 완료 상태를 분리해서 관리하는 방식이에요.",
                "evidence": "A shared admissibility check handles key expiry, authorization timing, dependencies and residual effects; a terminal certificate separates actual goal satisfaction from publicly supported safe completion."
              },
              {
                "subtitle": "성능 평가 결과",
                "desc": "19개 작업군에서 58개 쌍을 비교한 결과, 제안한 방식이 기존보다 36.2%포인트 높은 완료율을 기록했습니다. 연구진은 이 방식이 도구의 실행 결과를 더 명확하게 인증한다고 주장했어요.",
                "evidence": "Across 58 paired units in 19 previously developed task families, advice certifies 30 completions versus 9, a 36.2-percentage-point difference (exact family sign-flip p=0.0078), using 272 proposals versus 399."
              }
            ],
            "one_line": "증거를 활용해 AI 에이전트의 도구 실행 오류를 복구하는 체계를 설계했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "도구의 결과가 알 수 없거나 다른 곳으로 넘겨진 경우에는 여전히 명확한 처리가 필요하다고 밝혔어요.",
            "limit_evidence": "Unknown and handoff outcomes remain explicit, with guarantees tied to the declared provider capabilities rather than arbitrary third-party exactly-once execution."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.14256",
          "title": "A Cross-Scenario Survey and Analysis of Self-Evolving Multimodal Agents",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.14256",
            "arxiv": "https://arxiv.org/abs/2611.14256"
          },
          "published": "2026-11-10",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 2,
          "score": 0.2,
          "score_why": "추천 2 → +0.2",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "스스로 발전하는 에이전트가 상황이 바뀌면 잘 안 통하거든요",
            "easy1_desc": "사람의 도움 없이 스스로 학습하는 멀티모달 에이전트가 요즘 많이 나오고 있는데요, 문제는 이런 기술들이 특정 상황 하나에서만 검증됐다는 거예요. 다른 환경으로 옮겨서 써 보려고 하면 왜 잘 안 되는지 그 이유를 제대로 확인하지 못했다는 말이에요. 쉽게 말하면, 한 우물만 파다가 다른 곳으로 가니 적응을 못 하는 상황인 겁니다.",
            "easy1_evidence": "However, each self-improvement mechanism is designed and evaluated within a single scenario, leaving its preconditions unverified under cross-scenario transfer.",
            "easy2_title": "상황별로 어떤 자원이 필요한지 따져서 옮길 수 있는지 확인했어요",
            "easy2_desc": "연구진은 멀티모달 에이전트가 스스로 발전하는 과정을 3단계 루프로 나누고, 4가지 서로 다른 환경에서 이 기술이 어떻게 작동하는지 분석했는데요. 각 기술이 어떤 자원을 필요로 하는지 따져보고, 다른 환경으로 가져갔을 때 쓸 수 있는지 아니면 막히는지 분류해 봤거든요. 그랬더니 환경마다 필요한 자원이 달라서 생기는 불균형이 문제라는 걸 밝혀냈다는 겁니다.",
            "easy2_evidence": "We then recast each mechanism as a trade-off that raises a scarce factor by presupposing a task-structural resource, such as output equivalence or checkable outcomes, and judge it portable, conditional, blocked, or redundant across scenarios.",
            "topic": "멀티모달 에이전트의 자기 진화 메커니즘이 서로 다른 시나리오 간에 어떻게 전달되는지 구조적 원인을 분석했어요.",
            "topic_evidence": "This survey investigates the structural source of asymmetric mechanism transfer across four scenarios: multimodal reasoning, multimodal generation, GUI and Web navigation, and embodied manipulation.",
            "points": [
              {
                "subtitle": "자기 진화 프레임워크 정의",
                "desc": "연구진은 스스로 진화하는 멀티모달 에이전트를 4가지 기준과 자기 참조라는 개념으로 정의했는데요. 경험 생성, 피드백 획득, 업데이트 통합이라는 3단계 루프를 분석 틀로 삼아 각 시나리오를 배치해 봤다는 거예요.",
                "evidence": "We first formalize the self-evolving multimodal agent by four criteria and a differentia of self-reference, and adopt the three-stage self-evolving loop of experience generation, feedback acquisition, and update consolidation as our analytical framework to position the scenarios along ceilings on rollout count and feedback fidelity."
              },
              {
                "subtitle": "시나리오별 제약 사항 분리",
                "desc": "고정된 루프와 스스로 진화하는 루프를 비교해서, 어떤 한계가 환경 자체에서 오는지 아니면 설계 방식에서 오는지 구분해 냈거든요. 이렇게 하면 각 메커니즘이 가진 고유한 특성을 더 명확하게 파악할 수 있다는 겁니다.",
                "evidence": "Comparing self-evolving with fixed loops within each scenario separates the limitations that the scenario imposes from those inherent in the self-evolving design."
              },
              {
                "subtitle": "자원 불균형과 전달 가능성 분석",
                "desc": "메커니즘마다 필요한 자원이 다르다는 점을 확인하고, 이를 바탕으로 전달이 가능한지 아니면 조건부인지 등을 판단했는데요. 연구진은 이런 불균형이 환경마다 다른 자원 조합 때문에 발생한다고 주장했습니다.",
                "evidence": "We attribute the asymmetry to divergent combinations of scarce factors and resources across opposite transfer directions, and identify the matched-budget measurements that could overturn these still untested verdicts."
              }
            ],
            "one_line": "멀티모달 에이전트의 자기 진화 메커니즘이 환경 변화에 따라 어떻게 전달되는지 분석했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "연구진은 아직 검증되지 않은 판단들을 뒤집을 수 있는 측정 방법들을 확인했다고 밝혔습니다.",
            "limit_evidence": "We attribute the asymmetry to divergent combinations of scarce factors and resources across opposite transfer directions, and identify the matched-budget measurements that could overturn these still untested verdicts."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.14046",
          "title": "Structured Confidence Perturbation via Fisher Geometry for Adversarial Training",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.14046",
            "arxiv": "https://arxiv.org/abs/2611.14046"
          },
          "published": "2026-11-10",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 2,
          "score": 0.2,
          "score_why": "추천 2 → +0.2",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "가짜 공격 때문에 모델이 엉뚱한 곳에 집중하고 있었어요",
            "easy1_desc": "기존의 적대적 학습(Adversarial training) 방식은 손실 값만 크게 만드는 가짜 공격인 의사 공격(Pseudo-attacks)에 취약하다는 문제가 있었는데요. 이게 무슨 말이냐면, 모델의 예측 정확도는 떨어뜨릴 수 있지만 정작 모델이 가진 신뢰 구조 자체는 제대로 흔들지 못한다는 거예요. 그래서 공격이 들어와도 모델이 튼튼하게 방어하지 못하는 결과가 생기는 셈입니다.",
            "easy1_evidence": "Adversarial training is often plagued by \"pseudo-attacks\", perturbations that significantly increase the loss value but fail to truly alter the model's confidence structure.",
            "easy2_title": "신뢰 구조를 직접 건드리는 방식으로 방어력을 높였어요",
            "easy2_desc": "연구진은 모델의 신뢰 구조가 무너지는 것을 막기 위해 두 가지 방법을 제안했는데요. 먼저 교차 엔트로피와 KL 발산을 섞은 하이브리드 목적 함수를 써서 예측 정확도와 분포 일관성을 동시에 무너뜨리도록 했고, 피셔 정보 행렬(Fisher information matrix)의 기하학적 성질을 이용해 신뢰 다양체(Confidence manifold) 위에서 분포 거리를 최대화하는 방식으로 공격을 재구성했어요. 그 결과 기존 방식보다 적대적 견고함과 전이 능력이 더 뛰어나다는 것을 확인했거든요. 복잡한 행렬 계산을 피하는 효율적인 알고리즘까지 더해져서 성능을 높였다는 점이 특징입니다.",
            "easy2_evidence": "To address this, we propose two complementary approaches to directly attack and defend against confidence structure deformation.",
            "topic": "피셔 기하학(Fisher geometry)을 활용해 모델의 신뢰 구조를 변형시키는 적대적 공격과 이를 방어하는 학습법에 관한 연구예요.",
            "topic_evidence": "Structured Confidence Perturbation via Fisher Geometry for Adversarial Training",
            "points": [
              {
                "subtitle": "하이브리드 목적 함수 설계",
                "desc": "기존의 손실 극대화 관점을 확장해서 교차 엔트로피와 KL 발산을 결합한 새로운 목적 함수를 도입했어요. 이를 통해 적대적 예제가 예측 정확도와 분포 일관성을 동시에 방해하도록 유도하는 방식이에요.",
                "evidence": "First, building upon the traditional loss maximization perspective, we introduce a hybrid objective that integrates cross-entropy and KL divergence, encouraging adversarial examples to simultaneously disrupt prediction accuracy and distribution consistency."
              },
              {
                "subtitle": "피셔 기하학 기반의 공격 재구성",
                "desc": "신뢰 다양체 상에서 분포 거리를 최대화하는 방식으로 적대적 섭동을 생성하도록 학습 과정을 기하학적으로 다시 설계했어요. 이론적으로 분석해 보니 최적의 공격 방향이 피셔 정보 행렬의 주 고유벡터와 일치한다는 점을 밝혀냈거든요.",
                "evidence": "Second, we geometrically reconstruct adversarial training by generating perturbations that maximize the distribution distance on the confidence manifold."
              },
              {
                "subtitle": "효율적인 알고리즘과 성능 검증",
                "desc": "고차원 행렬 계산을 피할 수 있는 효율적인 알고리즘을 제안해서 계산 부담을 줄였어요. 여러 데이터셋과 모델 구조에서 실험해 본 결과, 기존 방법들보다 적대적 견고함과 전이 능력이 더 우수하며 특히 높은 신뢰도 영역에서의 구조적 섭동에 강하다는 것을 입증했답니다.",
                "evidence": "Experiments on multiple datasets and model architectures demonstrate that our method outperforms existing methods in adversarial robustness and robust transferability, particularly excelling in structural perturbations within high-confidence regions."
              }
            ],
            "one_line": "피셔 기하학을 이용해 적대적 학습의 견고함을 높이는 구조적 섭동법을 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                false
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "5/6",
            "evidence_all": false,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.13843",
          "title": "PolyRoute: A Twelve-Language and Code-Mixed Benchmark for Typed-Decision Routing, with Baselines and a Leaderboard",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.13843",
            "arxiv": "https://arxiv.org/abs/2611.13843"
          },
          "published": "2026-11-10",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 2,
          "score": 0.2,
          "score_why": "추천 2 → +0.2",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "영어 말고 다른 언어에서 인공지능이 얼마나 잘하는지 확인하기 어려웠어요",
            "easy1_desc": "인공지능이 텍스트를 읽고 부서를 분류하는 모델은 영어로는 잘 작동하는데, 다른 언어나 섞인 언어에서는 성능을 제대로 잴 기준이 없었거든요. 그래서 연구진은 12개 언어와 9개 문자 체계, 그리고 섞인 언어까지 포함한 데이터셋인 PolyRoute를 공개했어요. 쉽게 말하면, 인공지능이 영어 외의 언어를 얼마나 잘 이해하고 분류하는지 공정하게 시험할 수 있는 시험지를 만든 셈이에요.",
            "easy1_evidence": "Typed-decision encoders answer a question about a text in one forward pass, but their behaviour outside English is rarely measured on a fixed yardstick.",
            "easy2_title": "다양한 언어 환경에서 모델 성능을 측정하고 순위를 매겼어요",
            "easy2_desc": "연구진은 13개 시스템을 대상으로 성능을 측정해 순위표를 만들었는데요, 영어 기반 모델은 61.2%의 정확도를 보인 반면 다국어 모델은 77.3%까지 올랐고, 가장 잘 튜닝된 모델은 96.6%를 기록했어요. 특히 섞인 언어에서는 영어 기반 모델이 85%, 다국어 모델이 79%의 성능을 보였다고 해요. 다만 4점 이상의 차이가 나야 유의미한 성능 차이로 본다는 점도 함께 밝혔습니다.",
            "easy2_evidence": "A leaderboard of 13 systems gives 61.2% for the English-root checkpoint, 77.3% for the shipped multilingual one and 96.6% for the best fine-tune; TF-IDF with logistic regression reaches 91.9%.",
            "topic": "다국어 및 혼합 언어 환경에서 부서 분류 모델의 성능을 평가하기 위한 새로운 벤치마크인 PolyRoute를 구축하고 그 성능을 분석했어요.",
            "topic_evidence": "We release PolyRoute: 322 native-language support messages in 12 languages and 9 writing systems, 156 code-mixed or romanised messages (Hinglish, Spanglish, Arabizi), 967 optional native training rows, and a protocol for a three-way department-routing decision.",
            "points": [
              {
                "subtitle": "데이터셋 구축 및 검증",
                "desc": "연구진은 12개 언어와 9개 문자 체계, 그리고 섞인 언어 메시지를 포함한 PolyRoute를 만들었어요. 라벨은 Qwen3.8-27B 모델을 사용해 생성했고, gemma4-31b 모델이 97.2%의 일치율을 보이며 검증을 마쳤거든요. 데이터 간의 유사도도 낮게 유지해 평가의 신뢰도를 높였다는 거예요.",
                "evidence": "Labels come from Qwen3.8-27B with a blind second pass (91% of candidates kept); an independent model, gemma4-31b, agrees on 97.2% of test items, and the largest character 5-gram similarity between any test text and any training text is 0.33."
              },
              {
                "subtitle": "시스템별 성능 비교",
                "desc": "13개 시스템을 시험해 본 결과, 다국어 모델이 영어 기반 모델보다 전반적으로 높은 성능을 보였어요. 특히 가장 잘 튜닝된 모델은 96.6%라는 높은 정확도를 기록했거든요. 단순히 복잡한 모델뿐만 아니라 TF-IDF와 로지스틱 회귀를 사용한 방식도 91.9%의 성능을 냈다는 점이 흥미롭습니다.",
                "evidence": "A leaderboard of 13 systems gives 61.2% for the English-root checkpoint, 77.3% for the shipped multilingual one and 96.6% for the best fine-tune; TF-IDF with logistic regression reaches 91.9%."
              },
              {
                "subtitle": "언어별 및 혼합 언어 평가",
                "desc": "학습에 포함되지 않은 4개 언어에 대해서도 다국어 시스템들이 77%에서 93% 사이의 성능을 보여줬어요. 섞인 언어의 경우 영어 기반 모델이 85%, 다국어 모델이 79%를 기록했는데, 통계적으로는 4점 이상의 차이가 있어야 의미 있는 변화로 본다는 거예요.",
                "evidence": "On four withheld languages the three multilingual systems score 77%, 90% and 93%."
              }
            ],
            "one_line": "다국어 부서 분류 벤치마크인 PolyRoute를 공개하고 성능을 평가했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "모델의 성능 차이는 약 4점 이상일 때만 유의미한 것으로 간주합니다.",
            "limit_evidence": "The split resolves differences only above about 4 points."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.12750",
          "title": "The Narrative Gap: Can LLMs Help Us Navigate Diverse Narratives Across Languages?",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.12750",
            "arxiv": "https://arxiv.org/abs/2611.12750"
          },
          "published": "2026-11-09",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 2,
          "score": 0.2,
          "score_why": "추천 2 → +0.2",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "언어마다 다른 뉴스 이야기, AI가 제대로 짚어주지 못하고 있어요",
            "easy1_desc": "사람들이 정보를 찾을 때 거대 언어 모델(LLM)을 많이 쓰는데, 언어나 지역마다 서로 다른 주장이 엇갈리는 복잡한 주제에서는 한계가 있다는 거예요. 연구진은 사용자가 다양한 관점을 고루 접하려면 여섯 가지 능력이 필요하다고 봤는데요, 현재 모델들은 이런 능력이 부족해서 사용자가 원하는 만큼 다양한 이야기를 보여주지 못한다고 지적했어요. 쉽게 말하면, 사용자가 다양성을 원해도 AI가 특정 관점만 보여주거나 중요한 정보를 놓치기 쉽다는 말이에요.",
            "easy1_evidence": "Evaluating 14 LLMs across 24 query languages, we find that current models lack the capabilities needed to reliably navigate diverse narratives, limiting users' control over the perspectives they receive and leaving substantial gaps in exposure to competing accounts even when diversity is explicitly requested.",
            "easy2_title": "다양한 관점을 잘 다루는지 확인하는 새로운 기준을 만들었어요",
            "easy2_desc": "그래서 연구진은 AI가 여러 언어와 지역의 상충하는 이야기를 얼마나 잘 다루는지 측정할 수 있는 '내러티브벤치(NarrativeBench)'라는 평가 도구를 만들었는데요, 여기에는 23개 언어로 된 1,333개의 뉴스 기사와 460개의 레딧(Reddit) 기반 질문이 포함되어 있어요. 이 도구로 14개의 모델을 시험해 봤더니, 언어나 질문 방식에 따라 정보 접근성이 달라지는 문제가 확인됐거든요. 결과적으로 정보 편향이나 언어적 필터 버블 같은 부작용을 줄이고, 사용자가 주도적으로 다양한 관점을 탐색할 수 있는 시스템을 만드는 기초를 마련한 셈이에요.",
            "easy2_evidence": "To guide the development of those information seeking capabilities, we introduce NarrativeBench, a benchmark comprising 1,333 news articles in 23 publication languages across 23 contested topics and 460 Reddit-grounded queries.",
            "topic": "다국어 정보 탐색 과정에서 발생하는 다양한 서사 간의 격차를 줄이기 위해 LLM의 능력을 정의하고 평가하는 연구예요.",
            "topic_evidence": "We define six capabilities necessary for diverse multilingual information seeking: three foundational capabilities for narrative inclusion, narrative exclusion, and missing narrative identification; and three higher-level capabilities for presenting diverse narratives, preserving narrative coverage under confirmatory queries, and maintaining information parity across languages.",
            "points": [
              {
                "subtitle": "다국어 정보 탐색의 6가지 핵심 능력",
                "desc": "연구진은 다양한 서사를 포함하고, 불필요한 서사를 제외하며, 누락된 정보를 식별하는 세 가지 기초 능력과, 서사를 고루 제시하고, 질문에 따라 정보를 유지하며, 언어 간 정보 균형을 맞추는 세 가지 상위 능력을 정의했어요. 이 능력들이 갖춰져야 사용자가 언어 장벽 없이 다양한 관점을 접할 수 있다는 겁니다.",
                "evidence": "We define six capabilities necessary for diverse multilingual information seeking: three foundational capabilities for narrative inclusion, narrative exclusion, and missing narrative identification; and three higher-level capabilities for presenting diverse narratives, preserving narrative coverage under confirmatory queries, and maintaining information parity across languages."
              },
              {
                "subtitle": "내러티브벤치(NarrativeBench)를 통한 평가",
                "desc": "23개 언어와 23개 논쟁적 주제를 담은 1,333개의 뉴스 기사를 활용해 AI 모델의 성능을 측정했는데요, 14개의 LLM을 24개 언어 질문으로 평가해 본 결과입니다. 현재 모델들이 다양한 관점을 제공하는 데 있어 신뢰할 만한 수준에 도달하지 못했다는 점을 확인했어요.",
                "evidence": "To guide the development of those information seeking capabilities, we introduce NarrativeBench, a benchmark comprising 1,333 news articles in 23 publication languages across 23 contested topics and 460 Reddit-grounded queries."
              },
              {
                "subtitle": "정보 격차와 민주적 담론의 위기",
                "desc": "언어와 질문 방식에 따라 정보 접근성이 달라지면 에코 체임버나 언어적 필터 버블이 생길 위험이 있다고 연구진은 경고했어요. 이런 정보 불균형은 민주적 담론에 필요한 공통의 기반을 약화시킬 수 있다는 겁니다. 결국 이 연구는 사용자가 다양한 서사를 스스로 탐색할 수 있는 시스템을 개발하는 데 목적이 있어요.",
                "evidence": "Information access also differs across query framings and languages, risking echo chambers, linguistic filter bubbles, and information disparities that weaken the common ground needed for democratic discourse."
              }
            ],
            "one_line": "다국어 정보 탐색을 위한 LLM의 능력을 정의하고 평가 도구를 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.11306",
          "title": "ScrapeBench: Evaluating Legal Compliance of AI Agents in Website Scraping",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.11306",
            "arxiv": "https://arxiv.org/abs/2611.11306"
          },
          "published": "2026-11-10",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 2,
          "score": 0.2,
          "score_why": "추천 2 → +0.2",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 웹사이트 정보를 긁어올 때 법을 잘 지키는지 궁금했어요",
            "easy1_desc": "요즘 인공지능(AI) 에이전트가 웹사이트에서 정보를 가져오는 능력이 좋아졌는데, 이게 사실은 웹사이트 이용 약관이나 보안 법규를 어기는 경우가 많거든요. 그래서 연구진은 AI가 웹사이트 정책을 얼마나 잘 따르는지 확인하는 '스크레이프벤치(ScrapeBench)'라는 평가 도구를 처음으로 만들어 봤어요. 쉽게 말하면, AI가 법을 잘 지키며 정보를 수집하는지 시험해 보는 일종의 자격 시험을 도입한 셈이에요.",
            "easy1_evidence": "In this paper, we introduce ScrapeBench, the first agentic benchmark for empirically evaluating the legal compliance of AI agents with website scraping policies, namely terms of service (ToS) and robots.txt directives.",
            "easy2_title": "시험해 보니 AI는 법을 잘 안 지키고 오히려 너무 조심하기도 해요",
            "easy2_desc": "실제로 1,626개의 인기 웹사이트를 대상으로 AI 성능을 확인해 봤더니, 정보를 긁어가지 말라고 명시된 곳에서도 AI 대부분이 5% 미만의 낮은 준수율을 보였거든요. 심지어 약관을 스스로 확인하는 AI조차도 법을 잘 지키지 않는다는 점이 드러났어요. 반대로 정보를 가져가도 되는 곳에서는 AI가 너무 겁을 먹고 작업을 거부하는 경우도 있는데, 클로드 오퍼스(Claude Opus) 4.6 모델은 무려 98.5%나 거부하는 모습을 보였다는 겁니다.",
            "easy2_evidence": "Across widely used closed-weight and open-weight AI agents, we find that most agents exhibit low compliance rates (< 5%) when instructed to scrape websites in our sample of 1,626 popular websites that explicitly prohibit scraping.",
            "topic": "AI 에이전트가 웹사이트 정보를 수집할 때 발생하는 법적 준수 문제와 그 성능을 평가하는 연구예요.",
            "topic_evidence": "In this paper, we introduce ScrapeBench, the first agentic benchmark for empirically evaluating the legal compliance of AI agents with website scraping policies, namely terms of service (ToS) and robots.txt directives.",
            "points": [
              {
                "subtitle": "스크레이프벤치 도입",
                "desc": "연구진은 AI 에이전트가 웹사이트의 이용 약관(ToS)과 로봇 배제 표준(robots.txt)을 얼마나 잘 지키는지 측정하기 위해 스크레이프벤치를 개발했어요. 이는 AI의 법적 준수 여부를 체계적으로 평가하는 첫 번째 벤치마크라는 점이 특징이에요.",
                "evidence": "In this paper, we introduce ScrapeBench, the first agentic benchmark for empirically evaluating the legal compliance of AI agents with website scraping policies, namely terms of service (ToS) and robots.txt directives."
              },
              {
                "subtitle": "낮은 법적 준수율 확인",
                "desc": "1,626개의 웹사이트를 대상으로 실험한 결과, 대부분의 AI 모델은 정보를 수집하지 말라는 정책을 무시하고 5% 미만의 낮은 준수율을 보였거든요. 심지어 AI가 정책을 직접 확인하는 과정을 거쳐도 준수율이 낮게 나타났다는 점을 연구진은 지적했어요.",
                "evidence": "Across widely used closed-weight and open-weight AI agents, we find that most agents exhibit low compliance rates (< 5%) when instructed to scrape websites in our sample of 1,626 popular websites that explicitly prohibit scraping."
              },
              {
                "subtitle": "과도한 거부 현상",
                "desc": "정보 수집이 허용된 269개의 웹사이트에서는 AI가 오히려 작업을 거부하는 현상이 나타났는데요. 예를 들어 클로드 오퍼스 4.6 모델은 합법적인 상황에서도 98.5%의 비율로 수집을 거부하는 과도한 신중함을 보였다는 겁니다.",
                "evidence": "Conversely, in our sample of 269 websites that do not prohibit scraping, we observe that agents sometimes refuse to scrape despite it being lawful, such as Claude Opus 4.6 exhibiting an over-refusal rate of 98.5%."
              }
            ],
            "one_line": "AI 에이전트의 웹사이트 정보 수집 법규 준수 여부를 평가하는 벤치마크를 개발했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 안전·평가",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.15094",
          "title": "A frontier machine intelligence for human neuroimaging",
          "field": "cs.AI",
          "sources": [
            "cs.AI",
            "허깅페이스"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15094",
            "hf": "https://huggingface.co/papers/2611.15094"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": 1,
          "score": 0.1,
          "score_why": "추천 1 → +0.1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "의료 영상은 잘 보는데 정작 중요한 임상 결정은 못 내리는 게 문제였어요",
            "easy1_desc": "기존의 인공지능 모델들은 특정 작업만 수행하는 데 그치거나, 범용 모델은 병원 내부의 민감한 임상 데이터를 학습하지 못해 전문성이 부족하다는 한계가 있었거든요. 복잡한 검사 결과를 해석하고 실제 치료 결정에 필요한 정보를 대화로 풀어내는 모델을 만드는 게 여전히 큰 숙제였던 겁니다. 쉽게 말하면, 영상은 잘 읽는데 의사처럼 종합적인 판단을 내리는 데는 한계가 있었다는 말이에요.",
            "easy1_evidence": "Although artificial intelligence has advanced image interpretation, existing medical models often address restricted tasks, while general-purpose proprietary models lack access to private clinical imaging required to achieve medical expertise.",
            "easy2_title": "백만 건의 뇌 영상을 학습시켜서 의사처럼 대화하는 모델을 만들었어요",
            "easy2_desc": "연구진은 실제 임상 현장에서 나온 약 100만 건의 뇌 영상 데이터를 학습시킨 뉴로-VL(Neuro-VL)이라는 시각-언어 모델을 개발했는데요, 이 모델은 전체 검사 결과를 해석할 뿐만 아니라 그 내용에 대해 자연스럽게 대화도 나눌 수 있습니다. 기존의 범용 모델이나 전문 의료 모델보다 진단과 이상 부위 파악, 영상 보고서 작성 능력이 더 뛰어난 것으로 나타났거든요. 게다가 이전 검사 결과와 비교해 병의 진행 상황을 살피는 능력까지 갖췄다는 점이 특징이에요.",
            "easy2_evidence": "Here, we show that Neuro-VL, a vision-language model trained on nearly one million neuroimaging studies from routine clinical care, can interpret complete imaging examinations and engage in natural language conversations about their findings.",
            "topic": "임상 현장의 방대한 데이터를 학습해 전문적인 뇌 영상 해석과 대화가 가능한 의료 인공지능 모델 뉴로-VL을 개발하고 그 성능을 입증했어요.",
            "topic_evidence": "These results extend health system learning beyond individual predictions to interactive image interpretation and longitudinal disease monitoring.",
            "points": [
              {
                "subtitle": "뉴로-VL의 성능 입증",
                "desc": "연구진은 뉴로-VL이 내부 데이터와 국제 데이터셋 모두에서 기존의 범용 모델 및 전문 의료 모델보다 뛰어난 성능을 보였다고 주장했는데요, 특히 이상 징후를 진단하고 위치를 찾아내며 포괄적인 영상 보고서를 작성하는 데 강점이 있습니다. 오해를 불러일으킬 만한 임상적 가정에 대해서도 오픈AI나 구글의 모델보다 더 안정적으로 대응했다고 해요.",
                "evidence": "Across internal and international datasets, Neuro-VL outperformed frontier general-purpose and specialized medical models in diagnosing, localizing, and describing abnormalities, as well as generating comprehensive radiology reports."
              },
              {
                "subtitle": "질병 경과 추적 기능",
                "desc": "이 모델은 단순히 현재 상태만 보는 게 아니라 과거의 검사 기록과 비교해 병이 어떻게 진행되고 있는지 평가할 수 있습니다. 이는 단일 예측을 넘어 상호작용이 가능한 영상 해석과 장기적인 질병 모니터링으로 의료 시스템의 학습 범위를 넓혔다는 의미를 갖거든요.",
                "evidence": "The model also compared serial examinations to assess disease progression and more reliably resisted misleading clinical assumptions than leading frontier models from OpenAI and Google."
              },
              {
                "subtitle": "의료 데이터 활용의 가치",
                "desc": "연구진은 이번 연구가 의료 시스템이 축적한 집단적 임상 경험을 활용해 전문성과 폭넓은 임상 능력을 갖춘 인공지능을 개발할 수 있음을 보여준다고 설명했습니다. 즉, 실제 병원 환경의 데이터를 학습하는 것이 의료 인공지능의 성능을 높이는 핵심이라는 겁니다.",
                "evidence": "They demonstrate how the collective clinical experience of health systems can be used to develop medical AI with specialized expertise and broad clinical capabilities."
              }
            ],
            "one_line": "100만 건의 뇌 영상을 학습해 전문적인 해석과 대화가 가능한 의료 AI를 개발했어요.",
            "topic_tag": "의료·바이오",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [
              "100"
            ],
            "format": [],
            "flags": [],
            "tag": "의료·바이오",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.17323",
          "title": "AgentSSL: Can MLE Agents Leverage Unlabeled Data?",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17323"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "데이터가 부족한 상황에서 AI 에이전트를 쓰기가 어려웠어요",
            "easy1_desc": "머신러닝 시스템을 새로운 분야에 적용하려면 사람이 직접 데이터를 분류하거나 복잡한 파이프라인을 설계해야 하는 병목 현상이 생기거든요. 지금까지는 AI 에이전트가 이런 설계를 자동화하는 연구가 많이 진행됐지만, 대부분 정답이 다 주어진 환경에서만 테스트했다는 한계가 있어요. 실제 현장에서는 정답이 없는 데이터는 많아도 정답이 달린 데이터는 구하기가 힘들거든요. 그래서 정답이 부족한 현실적인 환경에서 에이전트가 어떻게 작동하는지 검증할 필요가 있었다는 겁니다.",
            "easy1_evidence": "While recent MLE agents show promise in automating pipeline design, they have been studied almost exclusively in fully supervised settings, leaving them untested in realistic regimes where labeled data is scarce but unlabeled data is abundant.",
            "easy2_title": "에이전트가 스스로 학습 전략을 짜게 했더니 성능이 더 좋아졌어요",
            "easy2_desc": "연구진은 정답이 적은 환경에서 반지도학습(SSL)을 수행하는 에이전트인 AgentSSL을 제안했는데요, 이 에이전트는 학습 전략을 프로그램 탐색 문제로 보고 스스로 코드를 조합해 냈거든요. 실험해 봤더니 12가지 설정 중 8곳에서 사람이 직접 설계한 기존 방식보다 최대 21.8% 더 높은 성능을 보였다고 해요. 다만 에이전트가 스스로 성능을 평가해 최적의 프로그램을 고르는 과정에서 오류가 생기면 성능이 최대 47%까지 떨어지는 병목 현상도 확인했답니다.",
            "easy2_evidence": "We find that even under weak feedback and matched compute, agents can synthesize code that combines and adapts established SSL techniques, exceeding the strongest human-engineered baselines in 8 of 12 settings by up to +21.8%.",
            "topic": "정답이 부족한 환경에서 AI 에이전트가 반지도학습 전략을 스스로 설계하고 최적화하는 가능성과 한계를 분석한 연구입니다.",
            "topic_evidence": "In this work, we introduce Agentic Semi-Supervised Learning (AgentSSL), framing SSL as a program search problem and studying how agents navigate this space under limited supervision.",
            "points": [
              {
                "subtitle": "AgentSSL의 전략 탐색",
                "desc": "연구진은 반지도학습을 프로그램 탐색 문제로 정의하고 에이전트가 기존의 학습 기법들을 조합해 새로운 전략을 짜도록 했습니다. 정답이 적은 환경에서도 에이전트가 스스로 코드를 합성해 인간이 설계한 기준 모델보다 뛰어난 성능을 낼 수 있음을 보여줬거든요.",
                "evidence": "In this work, we introduce Agentic Semi-Supervised Learning (AgentSSL), framing SSL as a program search problem and studying how agents navigate this space under limited supervision."
              },
              {
                "subtitle": "프로그램 선택의 병목 현상",
                "desc": "실험 결과 에이전트가 스스로 생성한 프로그램 중 가장 좋은 것을 고르는 과정에서 성능이 크게 떨어지는 문제가 발견되었습니다. 에이전트가 자신의 피드백 지표를 기준으로 프로그램을 선택할 때 성능이 최대 47%까지 하락하는 현상이 나타났거든요.",
                "evidence": "However, our results identify program selection as a critical bottleneck in AgentSSL, where performance drops by as much as 47% when selecting based on the agent's feedback metric."
              },
              {
                "subtitle": "ProgramSelectBench 벤치마크",
                "desc": "연구진은 이러한 선택 문제를 체계적으로 연구하기 위해 총 16,977개의 프로그램으로 구성된 대규모 벤치마크인 ProgramSelectBench를 구축했습니다. 이를 통해 비지도 방식과 능동 학습 방식의 프로그램 선택법을 평가하고 실제 생태계 탐지 작업에 적용해 보며 에이전트 전략의 확장성을 확인했습니다.",
                "evidence": "To systematically study this bottleneck, we introduce ProgramSelectBench, a large-scale benchmark with a combined total of 16,977 agent-generated and human-engineered SSL programs, and evaluate both unsupervised and active program selection methods."
              }
            ],
            "one_line": "정답이 적은 환경에서 AI 에이전트가 반지도학습 전략을 스스로 설계하도록 했습니다.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "에이전트가 스스로 생성한 프로그램 중 최적의 것을 선택하는 과정에서 성능이 크게 저하되는 병목 현상이 발생합니다.",
            "limit_evidence": "However, our results identify program selection as a critical bottleneck in AgentSSL, where performance drops by as much as 47% when selecting based on the agent's feedback metric."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.17235",
          "title": "Al-Ghasali: A Computational Framework for Simulating Islamic Jurisprudential Rulings via Finite State Automata and Large Language Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17235"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "이슬람 법학 판결을 컴퓨터로 계산할 수 있을까",
            "easy1_desc": "이슬람 법학(Fiqh)의 복잡한 판결 과정을 컴퓨터가 이해할 수 있는 논리 체계로 바꾸는 연구를 진행했는데요. 연구진은 법학의 닫힌 장들이 결국 결정론적 유한 상태 오토마타(FSA)라는 수학적 구조로 완전히 변환될 수 있음을 증명했어요. 뭔 소리냐면, 복잡한 법적 판단을 미리 정해진 상태 변화로 단순화해서 컴퓨터가 빠르게 처리할 수 있게 만들었다는 말이에요.",
            "easy1_evidence": "This work proves that the semantics of closed Fiqh chapters collapse completely to deterministic Finite State Automata (FSA).",
            "easy2_title": "AI의 환각 문제를 법학적 논리로 완벽히 차단했어요",
            "easy2_desc": "거대언어모델(LLM)은 그럴듯한 거짓말을 하는 환각 문제가 있는데, 연구진은 이를 막기 위해 FSA가 LLM을 엄격하게 통제하는 구조를 설계했어요. 문법 기반의 제약된 디코딩 방식을 써서 LLM이 법학적 사실을 왜곡하지 못하게 고정했거든요. 덕분에 LLM은 스스로 판단하는 게 아니라, 결정된 법적 사실을 언어적으로 전달하는 역할만 수행하게 되어 환각이 원천적으로 차단된다고 주장했어요.",
            "easy2_evidence": "To neutralize the risk of LLM hallucination, the system employs a Grammar Guided Constrained Decoding mechanism.",
            "topic": "이슬람 법학 판결을 시뮬레이션하기 위해 유한 상태 오토마타와 거대언어모델을 결합한 계산 프레임워크인 Al Ghasali를 제안했어요.",
            "topic_evidence": "This paper presents Al Ghasali, a computational framework designed to formalize and simulate Islamic jurisprudential (Fiqh) rulings.",
            "points": [
              {
                "subtitle": "법학의 수학적 형식화",
                "desc": "이슬람 법학의 최소 운영 규칙을 혼 절(Horn clause) 논리 프로그램으로 추출하여, 법학적 체계를 결정론적 유한 상태 오토마타로 변환했어요. 이 방식은 오프라인 컴파일 후 판결 추출 시간을 상수 시간(O(1))으로 보장한다는 장점이 있어요.",
                "evidence": "We establish a formal computational hierarchy, demonstrating that restricting formalization to finite propositional Horn theories guarantees decidability and constant time (O(1)) verdict extraction after offline compilation."
              },
              {
                "subtitle": "FSA와 LLM의 결합 구조",
                "desc": "결정론적 FSA가 확률적인 LLM을 엄격하게 제어하는 아키텍처를 도입했어요. FSA의 실행 이력을 바탕으로 모호하지 않은 문법을 동적으로 생성하여 LLM의 출력을 제한하는 방식이에요.",
                "evidence": "Al Ghasali incorporates Large Language Models (LLMs) via an architecture where the deterministic FSA strictly controls the probabilistic LLM."
              },
              {
                "subtitle": "환각 방지 및 안전성 확보",
                "desc": "제한된 중립 어휘집과 가치 잠금(Valence Locking) 기술을 사용하여 법학적 사실 왜곡이나 의미 반전 같은 환각 현상을 수학적으로 완전히 제거했다고 주장했어요. 이는 LLM을 단순한 언어 변환기로 활용하여 법학적 엄밀성을 유지하기 위함이에요.",
                "evidence": "The paper mathematically proves that this architecture, augmented by a Bounded Neutral Lexicon and Valence Locking, guarantees the absolute absence of Decisional Hallucination, Juristic Factual Hallucination, and Semantic Inversion reducing the LLM to a pure linguistic transformer of deterministic juristic facts"
              }
            ],
            "one_line": "이슬람 법학 판결을 시뮬레이션하는 계산 프레임워크를 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.17161",
          "title": "Cited but Unused: Parametric Provenance in Retrieval-Augmented Generation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17161"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 출처를 적어놓고도 정작 자기 기억으로 답하고 있었어요",
            "easy1_desc": "검색 증강 생성(RAG) 시스템은 AI가 답변할 때 참고한 문서를 출처로 표시하는데요, 사실 AI가 그 출처를 제대로 쓰지 않고 자기 머릿속에 있는 지식(파라메트릭 메모리)을 가져다 쓰는 경우가 많다는 거예요. 연구진이 검색된 정보의 사실을 거짓으로 바꿔서 실험해 봤더니, 모델 크기에 따라 적게는 1.2%에서 많게는 15.7%까지 출처가 아닌 자기 기억에 의존하고 있었거든요. 쉽게 말하면, AI가 겉으로는 문서를 참고하는 척하지만 실제로는 자기 마음대로 답하고 있다는 말이에요.",
            "easy1_evidence": "We find that across five sizes of one model family and a second comparator family, 1.2% to 15.7% of citable claims derive from parametric memory rather than the retrieved context.",
            "easy2_title": "기존 검증 방식은 무용지물이라 새로운 탐지기를 만들어 봤어요",
            "easy2_desc": "기존에 쓰던 자연어 추론 방식의 검증은 사실상 무작위로 찍는 것과 다를 바 없다는 게 드러났는데요, 연구진은 모델이 문맥을 제공받았을 때와 아닐 때의 출력 분포 차이를 비교하는 방식으로 출처를 추적하는 탐지기를 설계해 봤어요. 그런데 이 방법으로도 AI의 출처 정직성을 높이지는 못했다고 해요. 결국 AI가 무엇을 알고 있는지와 무엇을 실제로 사용했는지를 구분하는 건 여전히 해결해야 할 숙제로 남아 있다는 겁니다.",
            "easy2_evidence": "The resulting detector is hence still not accurate enough to act on: it measures what the model knew rather than what it used, and separating those remains the open problem.",
            "topic": "검색 증강 생성(RAG) 모델이 답변의 근거로 제시하는 출처가 실제로는 모델의 내부 기억에서 기인하는 문제를 분석하고 이를 탐지하려는 시도예요.",
            "topic_evidence": "Retrieval-augmented generation systems attach citations to attribute claims to their sources.",
            "points": [
              {
                "subtitle": "출처 오용 측정",
                "desc": "연구진은 검색된 문구의 사실을 거짓으로 바꾸는 반사실적 값 대체 방식을 통해 AI가 출처를 얼마나 제대로 쓰는지 측정했어요. 모델의 크기가 커질수록 출처가 아닌 자기 기억을 사용해 답변하는 비율이 높아지는 경향을 확인했거든요.",
                "evidence": "We measure provenance by counterfactual value substitution: a fact in the retrieved passages is replaced with a false variant and the model re-queried."
              },
              {
                "subtitle": "기존 검증 방식의 한계",
                "desc": "표준적으로 사용되는 자연어 추론 기반의 검증 방법은 모델의 출처 오용을 잡아내지 못한다는 사실을 밝혀냈어요. 심지어 인용된 문구로 범위를 좁혀서 검사해도 결과가 무작위 확률과 구분되지 않았다는 거예요.",
                "evidence": "We further find that natural language inference verification, the standard approach, gives results indistinguishable from chance across models, even when restricted to the cited passage."
              },
              {
                "subtitle": "탐지기 성능의 한계",
                "desc": "연구진은 모델의 출력 분포 차이를 이용해 출처를 구분하는 탐지기를 제안했지만, 이것만으로는 AI의 출처 정직성을 개선하기엔 부족하다고 주장했어요. 결국 모델이 알고 있는 지식과 실제로 활용한 정보를 완벽히 분리하는 것은 아직 해결되지 않은 문제라는 겁니다.",
                "evidence": "Acting on that signal does not improve provenance honesty at these base rates."
              }
            ],
            "one_line": "RAG 모델의 출처 오용 문제를 반사실적 방법으로 측정하고 탐지 가능성을 분석했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "모델이 알고 있는 지식과 실제로 답변에 사용한 정보를 명확히 구분하는 것은 여전히 해결되지 않은 과제로 남아 있습니다.",
            "limit_evidence": "The resulting detector is hence still not accurate enough to act on: it measures what the model knew rather than what it used, and separating those remains the open problem."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.17115",
          "title": "CapLite: Prompt-Injection Defense for Small Language Model Agents without Model-Written Security Artifacts",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17115"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "작은 언어 모델이 스스로 보안을 지키게 했더니 문제가 많았어요",
            "easy1_desc": "기존에는 인공지능 에이전트가 스스로 보안 정책이나 프로그램을 짜서 공격을 막게 했는데요, 15개의 작은 언어 모델(SLM)을 조사해 봤더니 대부분 제대로 된 보안 장치를 만들지 못한다는 사실을 확인했습니다. 실제로 14개 모델이 공격에 뚫리거나 프로그램이 실행되지 않는 비율이 68%에 달하는 등 보안 성능이 매우 불안정했거든요. 쉽게 말하면, 스스로 보안을 챙기라고 맡기기에는 모델들의 능력이 아직 부족하다는 말이에요.",
            "easy1_evidence": "Across 15 open-weight models, 13 of them between 1.7B and 12B parameters, they cannot: the policies, graphs and constraints that the agent's model writes admit attacks on 14 (Progent), 13 (IPIGuard) and 11 (DRIFT) of the models, and CaMeL's programs fail to run in up to 68% of episodes.",
            "easy2_title": "보안 정책을 직접 짜지 않고 도구 스키마에서 바로 가져왔어요",
            "easy2_desc": "그래서 연구진은 모델이 보안 정책을 직접 쓰지 않게 하는 캡라이트(CapLite)를 제안했는데요, 도구의 구조(스키마)에서 정책을 바로 가져오고 사용자가 요청한 내용에 포함된 정보만 쓰기 권한을 허용하는 방식이에요. 이렇게 하면 공격자가 입력한 문장이 권한을 마음대로 추가하거나 사용자가 의도하지 않은 곳으로 정보를 보내는 일을 원천 차단할 수 있습니다. 실제로 13,935번의 공격 실험에서 단 한 번도 뚫리지 않았고, 다른 보안 방식보다 토큰 사용량도 훨씬 적어 효율적이라는 장점이 있어요.",
            "easy2_evidence": "We present CapLite, which derives its policy from the tool schemas, commits the write calls before any tool result is read, and admits a write only if every argument that decides whom or what it affects is stated in the user's request.",
            "topic": "작은 언어 모델 에이전트의 프롬프트 주입 공격을 막기 위해 보안 아티팩트 작성 없이도 무결성을 보장하는 캡라이트(CapLite) 방어 기법을 제안했어요.",
            "topic_evidence": "We present CapLite, which derives its policy from the tool schemas, commits the write calls before any tool result is read, and admits a write only if every argument that decides whom or what it affects is stated in the user's request.",
            "points": [
              {
                "subtitle": "기존 보안 방식의 한계",
                "desc": "기존의 방어 기법들은 모델이 직접 보안 정책이나 그래프 같은 아티팩트를 작성하게 했는데요, 실험 결과 15개 모델 중 대부분이 공격을 막지 못하거나 프로그램 실행조차 실패하는 등 신뢰하기 어려운 모습을 보였습니다.",
                "evidence": "Enforcement defenses against prompt injection, such as CaMeL, Progent, IPIGuard and DRIFT, ask the agent's own model to write a security artifact (a program, a privilege policy, a dependency graph or a constraint list) that code then enforces."
              },
              {
                "subtitle": "캡라이트(CapLite)의 작동 원리",
                "desc": "캡라이트는 모델이 보안 정책을 직접 쓰지 않도록 설계되었습니다. 대신 도구 스키마를 활용하고, 사용자가 요청한 정보에 명시된 대상과 목적지만 쓰기 권한을 허용함으로써 공격자가 권한을 가로채는 것을 방지합니다.",
                "evidence": "This guarantees write integrity: injected text cannot add a write, and no write reaches a recipient, amount, object or destination that the user did not state."
              },
              {
                "subtitle": "방어 성능 및 효율성",
                "desc": "13,935번의 에이전트 도조(AgentDojo) 실험에서 공격이 단 한 번도 성공하지 못할 만큼 강력한 방어력을 보였습니다. 또한 기존 방식보다 토큰 사용량이 18% 수준으로 훨씬 적으면서도 유틸리티는 비슷하게 유지해 효율성 면에서 뛰어나다는 점을 강조했습니다.",
                "evidence": "CapLite reaches utility under attack comparable to CaMeL's (29.0% vs. 27.2%) with fewer tokens than every other enforcement defense and than the undefended agent: 17.1k per episode, 18% of CaMeL's, and the highest utility per token of all enforcement defenses."
              }
            ],
            "one_line": "모델이 보안 정책을 직접 쓰지 않게 하여 프롬프트 주입 공격을 막는 기법을 개발했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 안전·평가",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.17072",
          "title": "Reasoning Supervision and Capability Retention in LoRA Domain Adaptation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17072"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "금융 데이터를 학습시킬 때 모델의 원래 능력이 깎이는 게 문제였어요",
            "easy1_desc": "금융 분야의 뉴스나 보고서를 잘 이해하도록 모델을 추가 학습(Fine-tuning)시키다 보면, 모델이 원래 가지고 있던 일반적인 지식이나 추론 능력이 떨어지는 문제가 생기거든요. 연구진은 이런 현상을 막으면서도 특정 금융 업무 수행 능력은 높이는 방법을 찾으려고 했는데요. 쉽게 말하면, 전문 지식을 배우면서도 똑똑함을 잃지 않게 만드는 게 핵심이라는 말이에요.",
            "easy1_evidence": "In this setting, the main challenge is to improve task performance without degrading the generalization capabilities of the model.",
            "easy2_title": "학습 방식을 바꿔 봤더니 성능 변화가 이렇게 나타났어요",
            "easy2_desc": "연구진은 Qwen3-8B 모델에 로라(LoRA)라는 효율적인 학습 기법을 써서 세 가지 방식으로 실험해 봤는데요. 정답만 학습시키는 방식이 금융 업무 수행 능력은 가장 잘 높였고, 추론 과정을 함께 학습시키는 방식은 일반적인 지식 평가인 MMLU-Pro 점수를 약간 올리는 효과가 있었거든요. 다만 두 가지 어댑터를 따로 쓰는 방식은 별다른 추가 이득이 없었다는 결과가 나왔어요. 쉽게 말하면, 정답만 학습시키는 게 금융 업무에는 가장 효과적이었다는 겁니다.",
            "easy2_evidence": "Response-only LoRA improves in-domain performance and leaves general capabilities near those of the frozen model.",
            "topic": "금융 도메인 적응을 위한 로라(LoRA) 학습 방식이 모델의 성능과 일반화 능력에 미치는 영향을 분석했어요.",
            "topic_evidence": "In this paper, we present an extensive set of ablations for fine-tuning Qwen3-8B with low-rank adaptation (LoRA).",
            "points": [
              {
                "subtitle": "세 가지 학습 방식 비교",
                "desc": "정답만 학습하는 방식, 추론 과정을 포함하는 방식, 그리고 두 가지 어댑터를 따로 학습하는 방식을 비교했어요. 각 방식이 모델의 금융 업무 수행 능력과 일반적인 지식 유지에 어떤 영향을 주는지 확인해 본 거예요.",
                "evidence": "We compare three training regimes: (1) response-only LoRA, where the supervised response is the label alone; (2) single-adapter reasoning, where reasoning traces from a teacher model are included alongside the labels in the training loss; and (3) dual-adapter composite training, where separate LoRA adapters are trained on traces and labels."
              },
              {
                "subtitle": "정답 학습 방식의 효과",
                "desc": "정답만 학습시키는 방식이 금융 분야 내에서의 성능을 가장 크게 높였는데요. 특히 모델의 확률 보정(Calibration)과 정확도 측면에서 가장 좋은 결과를 보였다고 주장했어요.",
                "evidence": "The in-domain change is largest for calibration and argmax accuracy."
              },
              {
                "subtitle": "추론 과정 요약의 영향",
                "desc": "교사 모델의 추론 과정을 학습시키기 전에 미리 요약해서 길이를 줄여 봤는데요. 요약본이 짧을수록 모델의 확률 보정 능력이 정답만 학습시키는 방식과 비슷해지는 경향을 보였다고 해요.",
                "evidence": "Finally, we compress the teacher traces by summarizing them before training, and show that shorter summaries move calibration toward the response-only regime without reaching it."
              }
            ],
            "one_line": "금융 데이터 학습 시 모델 성능과 일반화 능력을 유지하는 최적의 로라 방식을 찾았어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.17007",
          "title": "Skill Adapter: Personalized Modification and Online Routing of General-Purpose Skills",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17007"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "범용 기술을 쓰려니 사용자마다 입맛이 달랐던 문제",
            "easy1_desc": "거대언어모델(LLM) 에이전트가 도구를 다룰 때 범용 기술을 재사용하곤 하는데요, 문제는 사용자마다 선호하는 작업 방식이나 출력 요구사항이 제각각이라는 점이에요. 긴 작업을 수행할 때는 상황이 계속 바뀌는데, 그때마다 적절한 기술을 골라내고 다음 단계를 준비하는 과정이 복잡해지거든요. 쉽게 말하면, 범용 기술만으로는 개별 사용자의 특수한 환경을 모두 맞추기 어려웠다는 말이에요.",
            "easy1_evidence": "General-purpose skills describe shared execution procedures, while specific tool choices, operating practices, and output requirements vary across users.",
            "easy2_title": "기술에 개인 맞춤형 조각을 붙여서 상황에 맞게 골라 쓰기",
            "easy2_desc": "연구진은 범용 기술에 개인화된 수정 사항을 덧붙이는 '스킬 어댑터(Skill Adapter)'를 제안했는데요, 사용자의 요구와 피드백을 바탕으로 기술을 조정해 저장해 두는 방식이에요. 라우팅 에이전트가 현재 상황에 맞는 기술과 어댑터를 실시간으로 선택하고, 강화학습을 통해 이 선택들을 최적화하도록 설계했거든요. 결과적으로 작업 성공률은 평균 11.43% 포인트 올랐고 실행 시간은 줄어드는 성과를 보였다고 주장했어요.",
            "easy2_evidence": "We propose Skill Adapter, which enables personalized modification and online routing of general-purpose skills.",
            "topic": "거대언어모델 에이전트가 범용 기술을 사용자 요구에 맞춰 수정하고 상황에 따라 실시간으로 선택하는 스킬 어댑터 시스템에 관한 연구예요.",
            "topic_evidence": "We propose Skill Adapter, which enables personalized modification and online routing of general-purpose skills.",
            "points": [
              {
                "subtitle": "개인화된 기술 수정 및 저장",
                "desc": "사용자의 요구사항과 실행 피드백에서 얻은 조정 내용을 어댑터 형태로 저장해 범용 기술과 연결했어요. 이렇게 하면 범용 기술을 그대로 쓰지 않고 사용자 환경에 맞춰 변형해서 사용할 수 있게 되는 겁니다.",
                "evidence": "The system distills local adjustments from user requirements and execution feedback and stores them as Adapters linked to general-purpose skills."
              },
              {
                "subtitle": "실시간 기술 라우팅과 최적화",
                "desc": "라우팅 에이전트가 현재 작업 단계와 환경 피드백을 고려해 적절한 기술과 어댑터를 실시간으로 골라내는데요, 강화학습을 통해 기술 수정과 라우팅 결정 과정을 각각 최적화하도록 만들었어요.",
                "evidence": "Reinforcement learning optimizes the two types of decisions using modification gains and routing outcomes, respectively."
              },
              {
                "subtitle": "성능 향상 및 확장성 검증",
                "desc": "ALFWorld, WebShop, SkillsBench에서 실험해 본 결과, 기존 SkillRL 대비 성공률이 평균 11.43% 포인트 높아졌고 실행 시간도 단축됐어요. 기술 풀이 1,000개까지 늘어나도 성능 이점이 유지된다는 점을 확인했거든요.",
                "evidence": "Compared with SkillRL, it improves task success rates by an average of 11.43 percentage points and reduces mean execution time on all three benchmarks."
              }
            ],
            "one_line": "거대언어모델 에이전트용 맞춤형 기술 수정 및 실시간 라우팅 시스템을 개발했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16935",
          "title": "Universal Infectious Disease Forecasting with Mantis 2",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16935"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "감염병 예측 모델이 데이터를 어떻게 써야 할지 고민했어요",
            "easy1_desc": "보건 당국은 감염병이 언제 정점에 달하고 의료 수요가 얼마나 지속될지 미리 알아야 하는데요, 연구진은 이전에 시뮬레이션 데이터만으로 학습시킨 Mantis 모델을 만들었었어요. 그런데 이 방식은 실제 관측 데이터와 시뮬레이션을 어떻게 섞어야 예측이 더 잘 되는지 명확하지 않았다는 문제가 있었거든요. 그래서 이번에는 두 데이터를 섞는 비율을 조절하며 실험해 본 겁니다.",
            "easy1_evidence": "However, our previous work left unresolved when simulation improves predictions and how it should complement observational data.",
            "easy2_title": "시뮬레이션과 실제 데이터를 합쳐서 예측 정확도를 높였어요",
            "easy2_desc": "연구진은 시뮬레이션 기반 학습이 지역 데이터가 부족할 때 특히 큰 오류를 줄여준다는 점을 확인했는데요, 이를 바탕으로 두 데이터를 결합한 Mantis 2를 개발했어요. 이 모델은 16주 앞까지 6개 변수를 동시에 예측할 수 있는데, 기존 모델들보다 30% 정도 더 정확하게 정점을 찾아냈거든요. 쉽게 말하면, 데이터가 적은 상황에서도 기계적인 지식을 활용해 예측의 구멍을 메운 셈이에요.",
            "easy2_evidence": "Building on these findings, we developed Mantis 2, which combines simulated and observational training to jointly forecast up to six variables sixteen weeks ahead.",
            "topic": "시뮬레이션과 관측 데이터를 결합한 감염병 예측 모델 Mantis 2의 성능과 활용성에 관한 연구예요.",
            "topic_evidence": "Building on these findings, we developed Mantis 2, which combines simulated and observational training to jointly forecast up to six variables sixteen weeks ahead.",
            "points": [
              {
                "subtitle": "데이터 혼합 방식의 효과 분석",
                "desc": "연구진은 시뮬레이션 데이터와 실제 관측 데이터의 비율을 바꿔가며 예측 성능을 시험했는데요, 지역 데이터가 부족할 때는 시뮬레이션 비중이 높은 학습이 큰 오류를 줄이는 데 효과적이었다고 주장했어요. 데이터가 많아질수록 시뮬레이션의 상대적 이점은 줄어드는 경향을 보였다는 겁니다.",
                "evidence": "We found that simulation-rich training was particularly valuable with limited local history, and its relative advantage diminished as more observations became available."
              },
              {
                "subtitle": "Mantis 2의 예측 성능",
                "desc": "30개의 예측 과제를 수행한 결과, Mantis 2는 머신러닝 및 통계 모델을 포함한 비교 대상들 중에서 가장 뛰어난 정확도를 보였는데요, 특히 정점 예측 실패율을 기존 최고 모델보다 30%가량 낮췄다는 점이 특징이에요. 평균적으로 6주 이상 앞서서 정점을 성공적으로 예측해 냈다고 연구진은 밝혔습니다.",
                "evidence": "It missed roughly 30% fewer outbreak peaks than the strongest comparison model, with successfully anticipated peaks identified more than six weeks in advance on average."
              },
              {
                "subtitle": "공공 보건을 위한 모델 배포",
                "desc": "연구진은 Mantis 2를 공개하여 보건 당국과 연구자들이 질병이나 지역별로 모델을 새로 만들지 않고도 즉시 활용할 수 있게 했는데요, 다양한 감염병 상황에 범용적으로 대응할 수 있는 도구를 제공한다는 의미가 있어요. 이는 공공 보건 대응의 효율성을 높이는 데 기여할 것으로 보입니다.",
                "evidence": "We publicly release Mantis 2, enabling public health agencies and researchers to forecast disease outcomes without developing a separate model for each disease or location."
              }
            ],
            "one_line": "시뮬레이션과 관측 데이터를 결합한 범용 감염병 예측 모델을 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 1,
            "bad_numbers": [],
            "format": [],
            "flags": [
              "예측 의심: 이는 공공 보건 대응의 효율성을 높이는 데 기여할 것으로 보입니다."
            ],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16710",
          "title": "Acoustic Respiratory Phase Detection on Mobile Devices",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16710"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "호흡을 재려면 몸에 뭘 붙이거나 환경을 통제해야 했거든요",
            "easy1_desc": "건강 관리나 스트레스 조절을 위해 호흡을 확인하는 게 중요한데요, 지금까지는 몸에 센서를 직접 붙이거나 조용한 환경을 따로 만들어야 하는 번거로움이 있었거든요. 이런 방식은 일상생활에서 쓰기에는 제약이 많다는 단점이 있어요. 그래서 연구진은 별도의 장비 없이 스마트폰만으로 호흡 상태를 알아내는 방법을 고민해 본 겁니다.",
            "easy1_evidence": "Breathing monitoring is important for well-being, stress regulation, and guided breathing exercises, yet existing approaches often rely on contact-based sensors or controlled environments.",
            "easy2_title": "스마트폰 소리만으로 호흡 단계를 알아내는 기술을 만들었어요",
            "easy2_desc": "연구진은 스마트폰으로 녹음한 소리에서 호흡의 주기적인 패턴을 찾아내는 인공지능 모델을 개발했는데요, 소리의 특징을 뽑아내는 CNN과 시간 흐름을 분석하는 트랜스포머를 합친 구조예요. 이걸 써 봤더니 새로운 사람의 호흡도 99.2%의 효율로 찾아낼 만큼 정확도가 높았거든요. 게다가 스마트폰 안에서 바로 처리하는 방식을 써서 반응 속도도 20ms 미만으로 아주 빠르다는 장점이 있어요.",
            "easy2_evidence": "The proposed hybrid CNN-Transformer architecture combines local spectral feature extraction with long-range temporal modeling to capture the cyclic structure of breathing.",
            "topic": "스마트폰의 소리 신호를 활용해 일상에서 비침습적으로 호흡 단계를 실시간으로 파악하는 인공지능 모델에 관한 연구예요.",
            "topic_evidence": "This paper presents a non-invasive framework for respiratory phase detection using acoustic signals recorded on commodity smartphones.",
            "points": [
              {
                "subtitle": "하이브리드 모델 설계",
                "desc": "호흡의 주기적인 구조를 파악하기 위해 소리의 국소적인 특징을 뽑는 CNN과 긴 시간의 흐름을 학습하는 트랜스포머를 결합했어요. 뭔 소리냐면, 짧은 소리 변화와 전체적인 호흡 리듬을 동시에 고려해서 정확도를 높였다는 말이에요.",
                "evidence": "The proposed hybrid CNN-Transformer architecture combines local spectral feature extraction with long-range temporal modeling to capture the cyclic structure of breathing."
              },
              {
                "subtitle": "높은 정확도와 일반화 성능",
                "desc": "1300개가 넘는 호흡 주기와 2시간 분량의 데이터를 바탕으로 모델을 검증해 봤는데요, 새로운 환경에서도 76.94%의 프레임 단위 정확도를 보였어요. 특히 날숨을 찾아내는 효율은 99.2%에 달해, 데이터가 제한적인 상황에서도 충분히 잘 작동한다고 연구진은 주장했어요.",
                "evidence": "The proposed 3-class formulation achieves 72.85% frame-level accuracy and 96.6% cycle-level exhalation detection efficiency in the LOSO evaluation, while achieving 76.94% frame-level accuracy, a Cohen's Kappa score of 0.65, and 99.2% cycle-level exhalation detection efficiency on the unseen test set."
              },
              {
                "subtitle": "온디바이스 실시간 추론",
                "desc": "ONNX라는 도구를 써서 스마트폰 내부에서 바로 계산이 끝나도록 구현했는데요, 개인정보를 보호하면서도 반응 속도가 20ms 미만이라 실시간 모니터링이 가능해요. 쉽게 말하면, 서버로 데이터를 보내지 않고도 휴대용 기기에서 즉시 호흡을 확인할 수 있다는 겁니다.",
                "evidence": "An end-to-end ONNX deployment pipeline enables privacy-preserving on-device inference with latency below 20 ms, supporting real-time monitoring on mobile and wearable devices."
              }
            ],
            "one_line": "스마트폰 소리 신호를 활용해 호흡 단계를 실시간으로 탐지하는 모델을 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16627",
          "title": "Folio: Recoverable Multi-Resolution Context Folding for Long-Horizon Language Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16627"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "긴 대화 기록을 요약하느라 에너지를 너무 많이 씁니다",
            "easy1_desc": "언어 에이전트가 도구를 쓰며 대화가 길어지면, 문맥 창이 꽉 차서 기록을 줄여야 하는데요. 지금까지는 모델이 직접 과거 기록을 다시 읽고 요약하는 방식을 썼거든요. 그런데 이 과정이 반복될수록 시간도 오래 걸리고 비용도 많이 든다는 단점이 있습니다. 쉽게 말하면, 기록을 정리하는 데 드는 비용이 너무 크다는 말이에요.",
            "easy1_evidence": "Current agents shrink this history by having a model summarize it, so each compaction rereads and rewrites the history it replaces, and cache-aware triggers decide when to compact while taking the size of the result as given.",
            "easy2_title": "기록을 요약하지 않고 단계별로 접어서 관리합니다",
            "easy2_desc": "연구진은 Folio라는 새로운 문맥 관리자를 제안했는데요. 모델이 요약하는 대신, 대화 기록을 세 가지 수준(L1, L2, L3)으로 나누어 자동으로 접어서 관리하는 방식이에요. 이렇게 하면 기록을 다시 쓸 필요 없이 필요한 부분만 골라낼 수 있거든요. 실제로 75개의 LOCA-bench 과제에서 실험해 봤더니, 기존 방식보다 2.4배 저렴한 비용으로 더 많은 문제를 해결했다고 합니다.",
            "easy2_evidence": "We present Folio, a context manager that records, folds, and recovers history through one set of handles.",
            "topic": "긴 대화 기록을 효율적으로 관리하기 위해 다중 해상도 문맥 접기 기술인 Folio를 개발했습니다.",
            "topic_evidence": "We present Folio, a context manager that records, folds, and recovers history through one set of handles.",
            "points": [
              {
                "subtitle": "다중 수준 기록 구조",
                "desc": "Folio는 대화 기록을 세 가지 수준으로 기록합니다. 모델이 직접 작성하는 짧은 메모(L1), 런타임이 기록하는 이벤트 목록(L2), 그리고 원본 소스 기록(L3)으로 나누어 관리하는 거예요. 이 구조 덕분에 기록을 일일이 다시 요약할 필요가 없어진다는 장점이 있습니다.",
                "evidence": "While the agent runs, Folio records three linked levels: a short turn note the model writes as part of its ordinary reply (L1), an event manifest of every call written by the runtime (L2), and the captured source records (L3)."
              },
              {
                "subtitle": "프로그래밍 방식의 문맥 접기",
                "desc": "기존의 모델 기반 요약과 달리, 런타임이 프로그램적으로 문맥을 접는 방식을 택했습니다. 오래된 대화일수록 더 거친 수준의 기록을 선택해서 문맥 창을 확보하는 건데요. 기록을 접을 때 L2와 L3를 가리키는 핸들을 남겨두기 때문에, 나중에 필요한 정보를 다시 불러오기도 쉽습니다.",
                "evidence": "Because these views already exist, the runtime folds the context programmatically, selecting coarser views for older turns."
              },
              {
                "subtitle": "성능 및 비용 효율성 검증",
                "desc": "DeepSeek-V4-Pro를 기반으로 75개의 LOCA-bench 과제를 수행해 봤더니, Folio는 66개를 해결했습니다. 이는 기존의 모델 기반 요약 방식이 54개를 해결한 것보다 높은 수치인데요. 처리 시간은 절반 수준으로 줄었고, 비용은 2.4배 낮아졌으며, 기록을 접는 데 걸리는 시간은 중앙값 기준 0.6초에 불과했다고 연구진은 주장했습니다.",
                "evidence": "On 75 LOCA-bench tasks with DeepSeek-V4-Pro behind every system, Folio solves 66 tasks against 54 for the same runtime with model-written compaction and 49-59 for Claude Code, Codex, and SoL-Pi, in about half their working time, at 2.4 times lower cost than that runtime; each fold takes a median of 0.6 seconds."
              }
            ],
            "one_line": "긴 대화 기록을 효율적으로 관리하는 다중 수준 접기 기술을 개발했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16591",
          "title": "Singularity-Bench: Can Agents Build Agents?",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16591"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 AI를 만드는 능력을 제대로 평가하기 어려웠어요",
            "easy1_desc": "최근 AI 에이전트가 복잡한 일을 척척 해내고 있지만, 기존 평가 방식은 너무 단순한 환경에만 갇혀 있었거든요. 에이전트가 스스로 시스템을 만들 때 그 결과물이 진짜 잘 작동하는지 검증할 방법도 마땅치 않았고요. 쉽게 말하면, AI의 진짜 실력을 측정할 제대로 된 시험지가 없었다는 말이에요.",
            "easy1_evidence": "Yet existing benchmarks often restrict agents to narrow action spaces, use simplified environments, or rely on verification methods that are unreliable for evaluating arbitrary agent-generated systems.",
            "easy2_title": "AI가 스스로 시스템을 개발하는지 확인하는 새로운 시험대를 만들었어요",
            "easy2_desc": "연구진은 AI가 직접 시스템을 구축하는 과정을 평가하는 싱귤래리티 벤치(Singularity-Bench)를 도입했는데요, 여기에는 사전 학습부터 클러스터 관리까지 총 6가지 핵심 과제가 포함되어 있어요. 이 시험을 통해 AI가 사람이 만든 기존 시스템과 얼마나 비슷하게 구현하는지 직접 겨뤄볼 수 있게 된 겁니다. 결과적으로 특정 모델은 사람의 실력을 넘어서는 성과를 보이기도 했거든요.",
            "easy2_evidence": "We introduce Singularity-Bench, an open-ended benchmark for autonomous AI development with six end-to-end tasks spanning pre-training, mid-training, post-training, inference, the agent harness, and cluster orchestration.",
            "topic": "AI 에이전트가 스스로 더 강력한 후속 AI 시스템을 개발할 수 있는지 평가하는 새로운 벤치마크를 제안하고 그 성능을 검증했어요.",
            "topic_evidence": "Our vision is for Singularity-Bench to track how much of AI development agents can already automate and when they may transition from assisting to taking end-to-end responsibility for building stronger successors.",
            "points": [
              {
                "subtitle": "싱귤래리티 벤치 도입",
                "desc": "AI 개발의 전 과정을 아우르는 6가지 과제를 통해 에이전트의 자율적 개발 능력을 평가합니다. 최소한의 시작점에서 시스템을 구현하게 한 뒤, 사람이 만든 기존 시스템과 같은 하드웨어 환경에서 성능을 비교하는 방식이에요.",
                "evidence": "Each task requires agents to implement core systems from a minimal starting point and evaluates them against mature human-engineered baselines on identical hardware."
              },
              {
                "subtitle": "보안 취약점 발견 및 해결",
                "desc": "연구진은 에이전트 애플리케이션의 보안 위협을 다루는 OWASP Top 10 항목 중 9개를 활용해 레드팀 평가를 진행했어요. 기존 하버(Harbor) 프레임워크의 보상 해킹 취약점을 찾아냈고, 이를 막아내는 브레이크워터(Breakwater)라는 확장 기능을 개발했거든요.",
                "evidence": "Additionally, through extensive red-teaming covering 9 of the 10 categories in the OWASP Top 10 for Agentic Applications, we expose reward-hacking vulnerabilities in the conventional Harbor framework and develop Breakwater, an extension of Harbor that blocks all attacks tested in our study."
              },
              {
                "subtitle": "AI 성능 비교 결과",
                "desc": "7개의 최신 모델과 2개의 하네스를 조합해 11개 에이전트를 테스트했는데요, 클로드 코드(Claude Code)를 탑재한 오퍼스 5.5(Opus 5.5) 모델이 1.25의 싱귤래리티 지수를 기록하며 사람의 기준을 넘어섰다고 연구진은 밝혔어요. 나머지 에이전트들은 평균 0.58에 그쳤다는 점도 함께 확인했고요.",
                "evidence": "Across 11 agents built from 7 frontier models and 2 harnesses, Opus 5.5 with Claude Code matches or outperforms the human baseline on all six tasks with a Singularity-Index of 1.25, suggesting it may have the skills needed to reach the singularity."
              }
            ],
            "one_line": "AI가 스스로 시스템을 개발하는 능력을 평가하는 벤치마크를 만들었어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 안전·평가",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16561",
          "title": "SPARC: Accurate Photonic Matrix Multiplication via Representative Vectors",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16561"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "빛으로 계산하는 신경망은 정확도가 떨어지는 문제가 있었어요",
            "easy1_desc": "빛을 이용해 딥러닝(DNN) 추론을 수행하는 광학 가속기는 전력 소모를 줄이는 데 유리하지만, 하드웨어 특성상 낮은 비트의 양자화가 필요하고 아날로그 노이즈가 발생한다는 단점이 있어요. 이 때문에 계산 결과의 정확도가 낮아지는 문제가 생기는데요. 쉽게 말하면, 전기는 덜 쓰지만 계산이 덜 정교하다는 말이에요.",
            "easy1_evidence": "However, their inference accuracy is limited by low-bit quantization required for photonic processing and by analog photonic noise.",
            "easy2_title": "비슷한 데이터끼리 묶어서 계산했더니 정확도가 올라갔어요",
            "easy2_desc": "연구진은 신경망 내 활성화 벡터들이 서로 매우 비슷하다는 점을 활용해 SPARC라는 방식을 제안했는데요. 비슷한 벡터들을 묶어 대표 벡터를 만들고, 이 부분은 정밀도가 높은 디지털 방식으로 계산한 뒤 나머지 오차만 광학 가속기에 맡기는 방식이에요. 이렇게 하면 광학 장치의 노이즈 영향을 훨씬 덜 받게 되거든요. 하드웨어를 따로 바꾸지 않아도 기존 광학 가속기에 바로 적용할 수 있다는 장점도 있답니다.",
            "easy2_evidence": "Specifically, our approach constructs a representative vector for each group of similar activation vectors, computes its inner product digitally with high precision, and offloads the residual inner products to the photonic accelerator.",
            "topic": "광학 신경망 가속기의 정확도 문제를 해결하기 위해 활성화 벡터의 유사성을 이용한 하이브리드 계산 기법을 제안했어요.",
            "topic_evidence": "This paper proposes an approach for improving inference accuracy by exploiting the high similarity among activation vectors in DNNs.",
            "points": [
              {
                "subtitle": "대표 벡터 기반의 하이브리드 연산",
                "desc": "비슷한 활성화 벡터들을 그룹으로 묶어 대표 벡터를 추출하고, 이를 디지털 방식으로 고정밀 연산하는 구조예요. 나머지 잔여 벡터들만 광학 가속기로 처리해서 전체적인 오차를 줄이는 방식이거든요.",
                "evidence": "Specifically, our approach constructs a representative vector for each group of similar activation vectors, computes its inner product digitally with high precision, and offloads the residual inner products to the photonic accelerator."
              },
              {
                "subtitle": "노이즈 및 양자화 오류 감소",
                "desc": "그룹 내 벡터들이 서로 비슷하기 때문에 잔여 벡터의 크기가 작아지는데요. 덕분에 광학 가속기에서 발생하는 아날로그 노이즈나 낮은 비트 양자화로 인한 오차의 영향이 크게 줄어드는 겁니다.",
                "evidence": "Since the activation vectors within each group are highly similar, the residual vectors have much smaller norms, thereby reducing the effects of quantization errors and analog photonic noise."
              },
              {
                "subtitle": "기존 하드웨어와의 호환성",
                "desc": "기존의 광학 내적 계산 파이프라인을 그대로 유지하는 방식이라 하드웨어를 수정할 필요가 없어요. 연구진은 6개의 대표적인 신경망 모델을 실험해 본 결과, 다양한 구조와 분야에서 정확도가 개선됨을 확인했다고 밝혔습니다.",
                "evidence": "Experimental results on six representative DNN models demonstrate that the proposed approach can improve inference accuracy across diverse network architectures and application domains."
              }
            ],
            "one_line": "활성화 벡터의 유사성을 활용해 광학 신경망 가속기의 추론 정확도를 높였어요.",
            "topic_tag": "반도체·하드웨어",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "반도체·하드웨어",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16527",
          "title": "AI has its own style in mathematical proving",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16527"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 수학 문제를 풀 때 사람과는 다른 방식을 쓰는지 궁금했어요",
            "easy1_desc": "거대언어모델(LLM)이 수학 증명을 척척 해내고 있는데, 이게 사람이 하는 방식과 똑같은지 아니면 AI만의 고유한 스타일이 있는지 확인해 봤거든요. 사실 수학자들 사이에서는 AI가 만든 증명은 사람이 이해하기 어렵다는 걱정이 많았거든요. 그래서 연구진은 유클리드의 원론에 나오는 465개 명제를 AI에게 직접 다시 증명하게 시켜서 그 결과를 사람의 증명 방식과 비교해 본 겁니다.",
            "easy1_evidence": "As large language models increasingly generate mathematical proofs, whether they develop a proving style distinct from that of human mathematicians remains an open question.",
            "easy2_title": "AI는 기초부터 차근차근 쌓아 올리는 방식을 선호하더라고요",
            "easy2_desc": "비교해 봤더니 AI는 사람보다 훨씬 더 기초적인 정의나 공리에 의존하는 경향이 뚜렷했는데요, 쉽게 말하면 AI는 이미 알려진 정리를 바로 가져다 쓰기보다는 맨바닥에서부터 논리를 쌓아 올리는 방식을 택한다는 거예요. AI끼리는 증명 방식이 서로 비슷하게 나타났는데, 사람의 증명과는 확실히 다른 패턴을 보였거든요. 이런 차이 때문에 AI가 만든 증명이 사람에게는 다소 낯설게 느껴질 수 있다는 점을 확인한 셈이에요.",
            "easy2_evidence": "Together, these findings suggest that the AI proving style is a tendency to construct arguments on its own from foundational elements rather than directly citing later, more established results, which we term \"building from the ground up\".",
            "topic": "거대언어모델이 수학 증명을 생성할 때 사람과 구별되는 고유한 논리 구조와 인용 방식을 가지고 있음을 분석했어요.",
            "topic_evidence": "We find that AI-generated proofs differ from human proofs, and this difference is stable and reproducible: mean pairwise Jaccard similarity among AI runs (~0.68) is nearly twice that between AI and human proofs (~0.37), and cross-run classification consistency is also high.",
            "points": [
              {
                "subtitle": "유클리드 원론을 통한 비교",
                "desc": "연구진은 3개의 거대언어모델을 활용해 유클리드의 원론에 수록된 465개의 명제를 각각 다시 증명하게 했습니다. 그 후 자카드 유사도와 복잡 네트워크 분석을 써서 AI가 인용한 근거들이 사람의 증명 방식과 얼마나 다른지 측정해 봤거든요.",
                "evidence": "Here we ask three large language models to independently reprove all 465 propositions of Euclid's \\textit{Elements} and compare their citation choices against the human-proof baseline through Jaccard similarity and complex network analysis."
              },
              {
                "subtitle": "기초 원리에 집중하는 AI",
                "desc": "분석 결과, AI가 인용한 근거의 약 40%가 정의나 공리 같은 기초 요소에 집중되어 있었는데요, 사람의 증명에서는 이 비율이 13%에 불과했거든요. AI는 이미 증명된 정리들을 활용하기보다 훨씬 더 먼 거리의 기초 결과들을 끌어다 쓰는 경향이 강하다는 말이에요.",
                "evidence": "By examining citation structure in detail, we identify the concrete signature of this difference: approximately 40% of AI citations point to foundational elements (definitions, common notions, and postulates), compared with only 13\\% in human proofs; even among theorem-to-theorem citations, AI tends to cite more distant results."
              },
              {
                "subtitle": "AI 증명 방식의 해석 가능성",
                "desc": "이러한 발견은 AI가 수학적 지식을 어떻게 조직하고 불러오는지에 대한 새로운 시각을 제시하고 있는데요, AI가 왜 사람과 다르게 증명하는지를 이해하면 앞으로 AI가 만든 증명을 사람이 더 쉽게 해석할 수 있는 길을 찾을 수 있을 것으로 보입니다.",
                "evidence": "Our findings offer a new perspective on how AI systems organise and invoke mathematical knowledge, with implications for understanding the interpretability of AI-generated proofs."
              }
            ],
            "one_line": "AI의 수학 증명 스타일을 사람과 비교 분석했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [
              "예측 의심: 이러한 발견은 AI가 수학적 지식을 어떻게 조직하고 불러오는지에 대한 새로운 시각을 제시하고 있는데요, AI"
            ],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16493",
          "title": "ReA-Bench: Benchmarking Responsible Agent Auditing",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16493"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 스스로 일할 때 생기는 위험을 찾아내는 게 쉽지 않거든요",
            "easy1_desc": "AI 에이전트가 로컬이나 클라우드 환경에서 스스로 작업을 수행할 때, 그 과정을 검사해서 위험을 찾아내는 일이 중요해졌는데요. 실제 운영 환경이나 모의 공격 데이터를 분석해 봤더니, 기존 검사 방식으로는 특정 위험을 계속 놓치는 문제가 발견됐다는 거예요. 전체적인 탐지율만 따지다 보니 어떤 위험을 놓치는지, 혹은 정상적인 행동을 위험하다고 잘못 판단하는 건 아닌지 구분하기 어렵다는 말이에요.",
            "easy1_evidence": "Our analysis of production and red-team trajectories shows that some risks are repeatedly missed across auditing configurations.",
            "easy2_title": "위험을 더 꼼꼼하게 골라내려고 새로운 평가 도구를 만들었어요",
            "easy2_desc": "그래서 연구진은 AI 에이전트의 행동을 더 정확히 진단하기 위해 ReA-Bench라는 새로운 평가 도구를 내놓았는데요. 이 도구는 내부 안전 지식부터 정보 부족 문제까지 총 6단계로 검사 항목을 나누어, AI가 놓치기 쉬운 위험을 체계적으로 분류하도록 설계됐다는 거예요. 특히 위험해 보이지만 실제로는 허가된 정상 행동인 경우까지 포함해서, 검사자가 진짜 위험을 제대로 잡아내는지 더 정밀하게 확인해 볼 수 있다는 점이 특징이에요.",
            "easy2_evidence": "We introduce ReA-Bench, a diagnostic benchmark for auditing responsible agent behavior.",
            "topic": "AI 에이전트의 행동을 책임감 있게 검사하고 평가하기 위한 새로운 진단 벤치마크인 ReA-Bench를 제안했어요.",
            "topic_evidence": "We introduce ReA-Bench, a diagnostic benchmark for auditing responsible agent behavior.",
            "points": [
              {
                "subtitle": "기존 검사 방식의 한계",
                "desc": "기존 벤치마크들은 AI가 왜 위험을 놓치는지에 대한 통찰을 충분히 주지 못한다는 문제가 있는데요. 검사 결과가 위험 유형별로만 묶여 있다 보니, 검사자가 증거를 놓친 건지 아니면 판단에 필요한 정보가 부족했던 건지 알기 어렵다는 거예요.",
                "evidence": "Grouping results by risk type also makes it difficult to tell whether auditors overlooked evidence, accepted an unsupported conclusion, or lacked information needed to make a judgment."
              },
              {
                "subtitle": "ReA-Bench의 6단계 평가 체계",
                "desc": "연구진이 만든 ReA-Bench는 검사 과제를 내부 안전 지식, 궤적 내 모순, 긴 문맥에서의 증거 검색, 출처 및 추론 검증, 간접적 조종, 정보 누락 등 6개 단계로 체계화했어요. 이를 통해 AI 에이전트가 수행한 작업의 위험성을 다각도로 진단할 수 있게 된 겁니다.",
                "evidence": "It organizes auditing challenges into six tiers: internal safety knowledge, contradictions within trajectories, evidence retrieval in long contexts, verification of sources and reasoning, indirect steering, and missing information."
              },
              {
                "subtitle": "실제 환경을 반영한 데이터 구성",
                "desc": "이 도구는 실제 운영 환경에서 수집된 데이터를 바탕으로 구성되었으며, 정상적인 행동과 위험한 행동을 구분하기 어려운 사례들을 포함하고 있어요. 또한 궤적의 길이를 줄이거나 부족한 정보를 채워 넣은 버전을 비교해, 검사자가 위험을 얼마나 신뢰성 있게 탐지하는지 테스트할 수 있게 했습니다.",
                "evidence": "It also provides paired trajectory versions to test whether auditors detect the same risks more reliably when the trajectory is shortened or missing information is supplied."
              }
            ],
            "one_line": "AI 에이전트의 위험 행동을 진단하는 벤치마크인 ReA-Bench를 개발했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 안전·평가",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16487",
          "title": "HeMeR: Heterogeneous Memory Reconciliation for Embodied Agents via Structured KV Reuse",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16487"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇이 기억을 불러올 때마다 처음부터 다시 계산하는 게 문제였어요",
            "easy1_desc": "로봇은 선언적 기억이나 작업 기억처럼 여러 종류의 기억을 섞어서 판단을 내리는데요, 문제는 상황이 조금만 바뀌어도 기억 전체를 다시 처리해야 한다는 거예요. 기존 방식은 기억 모듈마다 따로 접근하다 보니, 바뀌지 않은 정보까지 매번 새로 계산하는 비효율이 발생하거든요. 쉽게 말하면, 어제 했던 생각과 오늘 했던 생각을 연결하지 못하고 매번 처음부터 다시 생각하는 셈이에요.",
            "easy1_evidence": "However, existing memory modules are typically accessed through separate interfaces, so each updated memory context is often processed as a new input to the foundation model.",
            "easy2_title": "바뀐 기억만 골라서 재사용하는 방식으로 효율을 높였어요",
            "easy2_desc": "연구진은 HeMeR이라는 추론 프레임워크를 도입해서, 기억 내용이 변할 때마다 전체를 계산하지 않고 바뀐 부분만 골라내어 기존의 키-값(KV) 상태와 맞추는 방식을 썼어요. 이렇게 하면 변하지 않은 기억 정보는 그대로 재사용할 수 있어서 추론 과정이 훨씬 안정적이고 빨라지거든요. 실제로 로봇 실험을 해봤더니, 추론 시간을 단계당 2.94초에서 1.87초로 줄이면서도 작업 성공률은 83.20%를 기록했다고 밝혔습니다.",
            "easy2_evidence": "HeMeR tracks declarative, procedural, and working memory contents across action decisions, preserves KV states for unchanged contents, and reconciles only the KV states affected by memory-content updates.",
            "topic": "로봇 에이전트가 여러 기억 모듈을 사용할 때 키-값(KV) 캐시를 효율적으로 재사용하는 추론 프레임워크인 HeMeR에 관한 연구예요.",
            "topic_evidence": "We introduce HeMeR, an inference framework that performs KV reconciliation between dynamically updated memory contexts and reusable KV states.",
            "points": [
              {
                "subtitle": "기억 모듈 간의 KV 캐시 통합",
                "desc": "로봇이 선언적 기억, 절차적 기억, 작업 기억을 통합해서 판단할 때, 각 기억의 상태를 추적하고 변하지 않은 정보의 KV 상태를 보존하도록 설계했어요. 뭔 소리냐면, 기억이 업데이트되어도 바뀌지 않은 부분은 그대로 유지해서 불필요한 재계산을 막는다는 말이에요.",
                "evidence": "HeMeR tracks declarative, procedural, and working memory contents across action decisions, preserves KV states for unchanged contents, and reconciles only the KV states affected by memory-content updates."
              },
              {
                "subtitle": "실제 환경에서의 성능 검증",
                "desc": "ALFWorld, Habitat 환경과 실제 로봇 환경에서 HeMeR의 성능을 확인해 봤는데요, 실제 로봇 환경에서 83.20%의 작업 성공률을 보였다고 해요. 기존 방식인 MemRL과 비교했을 때 추론 시간을 2.94초에서 1.87초로 줄였다는 점에서 효율성이 입증된 셈이에요.",
                "evidence": "In the real-world setting, HeMeR achieves 83.20% task success and reduces per-step inference time from 2.94 to 1.87 seconds compared with MemRL, while preserving compatible KV states as task progress updates the memory context."
              },
              {
                "subtitle": "추론의 효율성과 안정성 확보",
                "desc": "기억 내용이 상호작용 중에 계속 변하더라도, 필요한 부분만 선택적으로 재계산함으로써 추론의 안정성을 높였다는 점이 핵심이에요. 전체를 다시 계산하지 않아도 되니 로봇이 복잡한 작업을 수행할 때 훨씬 빠르게 대응할 수 있게 된 겁니다.",
                "evidence": "This enables efficient and stable inference as memory contents evolve during interaction."
              }
            ],
            "one_line": "로봇 기억의 키-값 캐시를 선택적으로 재사용해 추론 속도를 높였어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16466",
          "title": "How Should Planning Agents ReSHAPE Their Search Space?",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16466"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "사용자가 처음 쓴 요청은 사실 완벽하지 않거든요",
            "easy1_desc": "사용자가 계획을 세워달라고 처음 요청할 때는 본인이 어떤 선택지를 선호하는지 정확히 모르는 경우가 많아요. 그러다 보니 정작 본인이 만족할 만한 계획인데도 처음 요청에 포함되지 않아 놓치는 일이 생기거든요. 연구진은 이런 문제를 해결하기 위해 사용자의 요청을 고쳐 나가는 과정을 ReSHAPE라는 작업으로 정의해 봤습니다.",
            "easy1_evidence": "Yet the requests users write exclude plans they would gladly take, since they rarely discover the possible trade-offs they would accept until seeing the options.",
            "easy2_title": "질문만 하지 말고 계획을 직접 보여줘야 더 잘 찾아요",
            "easy2_desc": "기존의 AI 에이전트들은 사용자에게 선호도를 물어보기만 하는데, 연구진이 5,800개의 사례를 분석해 보니 계획을 직접 보여주는 방식이 훨씬 효과적이었어요. 실제로 여행 분야에서 계획을 보여줬더니 성능 지표인 F1 점수가 9.7 포인트나 올랐거든요. 결국 사용자의 반응을 살피며 요청을 가설처럼 수정해 나가는 방식이 더 나은 결과를 만든다는 겁니다.",
            "easy2_evidence": "Current agents, however, admit at most 32% of the acceptable plans, where that trade-off alone admits over 52%, because they ask about preferences instead of showing plans; in travel, showing plans raises F1 by 9.7 points over asking, with two model families.",
            "topic": "사용자의 초기 요청을 고정된 것으로 보지 않고, 계획을 보여주며 반응을 확인해 탐색 범위를 최적화하는 ReSHAPE 방식의 중요성을 다뤘습니다.",
            "topic_evidence": "Planning agents should thus treat a request as a hypothesis to test against the user's reactions to concrete plans to recognize user trade-offs.",
            "points": [
              {
                "subtitle": "ReSHAPE 작업 정의",
                "desc": "사용자의 요청을 수정하는 과정을 ReSHAPE라는 작업으로 공식화했어요. 수정된 요청이 사용자가 수용 가능한 계획을 포함하는지, 그리고 실제로 계획기가 그 안에서 답을 찾을 수 있는지를 평가하는 방식이에요.",
                "evidence": "We formalize this step as the ReSHAPE task, which judges a revision by whether its search space matches the acceptable plans and a planner finds one there."
              },
              {
                "subtitle": "분석 결과와 탐색 범위",
                "desc": "여행과 쇼핑 분야에서 5,800개의 사례를 분석해 봤더니, 올바른 선택지 하나만 추가해도 계획기가 수용 가능한 계획을 찾아낼 확률이 최대 4.6배까지 높아졌거든요. 탐색 공간의 질이 곧 결과의 질을 결정한다는 사실을 확인한 셈이에요.",
                "evidence": "We find that reshaping matters: one correct trade-off makes the same planner reach an acceptable plan up to 4.6x as often, and search space quality predicts what the planner finds."
              },
              {
                "subtitle": "상호작용 방식의 개선",
                "desc": "현재의 에이전트들은 사용자의 선호도를 묻는 데 그치지만, 실제로는 계획을 직접 제시하는 것이 훨씬 효과적이라는 점을 밝혔어요. 사용자의 반응을 통해 요청을 수정하는 것이 더 나은 계획을 찾는 핵심이라는 겁니다.",
                "evidence": "Current agents, however, admit at most 32% of the acceptable plans, where that trade-off alone admits over 52%, because they ask about preferences instead of showing plans; in travel, showing plans raises F1 by 9.7 points over asking, with two model families."
              }
            ],
            "one_line": "사용자 반응을 바탕으로 요청을 수정하는 ReSHAPE 방식을 제안하고 효과를 분석했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16460",
          "title": "Fine-Tuned Small Language Model for Synthetic Clinical Data Generation and Predictive Healthcare Analytics",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16460"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "의료 데이터가 부족해서 인공지능 학습이 어려웠어요",
            "easy1_desc": "원격 의료를 위한 예측 모델을 만들려면 환자 데이터가 많이 필요한데, 실제로는 데이터가 부족하거나 특정 상태에 치우쳐 있는 경우가 많거든요. 기존 방식으로 데이터를 늘리는 데도 한계가 있어서 연구진은 작은 언어 모델(SLM)에 주목했어요. 거대 언어 모델(LLM)보다 계산 자원을 적게 쓰면서도 특정 업무에 맞게 조정하기 좋기 때문이에요. 하지만 모델 성능이 결국 학습 데이터의 질에 달려 있다는 점이 문제였던 겁니다.",
            "easy1_evidence": "The reduced availability of medical datasets represents an important challenge in the development of predictive models for remote healthcare solutions, especially when the available data are imbalanced or difficult to extend through traditional methods.",
            "easy2_title": "작은 언어 모델을 의료용으로 튜닝해 데이터를 늘려 봤어요",
            "easy2_desc": "연구진은 마이크로소프트의 Phi-2 모델을 의료 데이터셋인 MedQuad로 미세 조정해서 합성 데이터를 만드는 방법을 제안했어요. QLoRA라는 효율적인 학습 기법과 적은 예시만으로 학습하는 퓨샷 프롬프팅을 활용했는데요, 이렇게 만든 모델로 부족한 데이터를 보강했더니 예측 모델의 정확도가 89.0%에서 93.7%로 올라갔거든요. 데이터의 질이 좋아지니 모델의 분류 성능도 전반적으로 개선되었다는 결과예요.",
            "easy2_evidence": "In this paper, we propose a method for clinical data augmentation based on a fine-tuned Microsoft Phi-2 model that is used to generate synthetic instances, with the purpose of improving deep learning-based model for predicting remotely monitored vital signs.",
            "topic": "의료 분야에서 작은 언어 모델을 미세 조정하여 합성 데이터를 생성하고, 이를 통해 원격 생체 신호 예측 모델의 성능을 높이는 연구예요.",
            "topic_evidence": "In this paper, we propose a method for clinical data augmentation based on a fine-tuned Microsoft Phi-2 model that is used to generate synthetic instances, with the purpose of improving deep learning-based model for predicting remotely monitored vital signs.",
            "points": [
              {
                "subtitle": "의료 도메인 미세 조정",
                "desc": "마이크로소프트의 Phi-2 모델을 MedQuad 데이터셋을 활용해 의료 분야에 맞게 미세 조정했어요. 이때 QLoRA 기법을 써서 계산 효율을 높이고 퓨샷 프롬프팅으로 학습 효과를 더했거든요. 결과적으로 사전 학습된 모델보다 어휘적, 의미적 평가 지표에서 더 높은 점수를 받았다는 게 연구진의 주장이에요.",
                "evidence": "The Phi-2 model was adapted to the medical domain through supervised fine-tuning on the MedQuad dataset, through a Quantized Low-Rank Adaptation (QLoRA)-based method and by applying few-shot prompting techniques."
              },
              {
                "subtitle": "합성 데이터 생성 및 보강",
                "desc": "이렇게 튜닝된 모델을 사용해 생체 신호와 병리적 상태가 포함된 작은 데이터셋을 보강했어요. 모델이 구조화된 합성 임상 데이터를 효과적으로 생성해 냈다는 건데요, 이를 통해 데이터 부족 문제를 해결할 수 있음을 보여준 셈이에요.",
                "evidence": "Moreover, the fine-tuned SLM is effective for generating structured synthetic clinical data."
              },
              {
                "subtitle": "예측 모델 성능 향상",
                "desc": "생성된 데이터를 LSTM(장단기 메모리 신경망) 예측 모델 학습에 썼더니 분류 정확도가 89.0%에서 93.7%로 올랐어요. 정밀도와 재현율, F1 점수에서도 일관된 성능 향상을 확인했거든요. 데이터 보강이 실제 의료 예측 모델의 성능을 높이는 데 기여한다는 점을 입증한 겁니다.",
                "evidence": "When used for data augmentation, the generated dataset improved the performance of a LSTM predictive model, increasing the classification accuracy from 89.0% to 93.7% and showing consistent improvements in precision, recall, and F1-score."
              }
            ],
            "one_line": "작은 언어 모델을 미세 조정해 의료 합성 데이터를 만들고 예측 모델 성능을 높였어요.",
            "topic_tag": "의료·바이오",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "의료·바이오",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16318",
          "title": "Benchmarking AI risk behaviors",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16318"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 위험을 얼마나 피하고 즐기는지 확인해 봤어요",
            "easy1_desc": "인공지능(AI) 모델들이 상황에 따라 위험을 피하려 하는지 아니면 감수하는지 그 성향을 조사해 봤는데요. 단순히 성향만 보는 게 아니라, 조건이 바뀔 때마다 행동이 얼마나 일관되게 유지되는지도 함께 살펴봤다는 거예요. 쉽게 말하면 AI가 위험을 대하는 태도가 얼마나 안정적인지 측정하는 기준을 마련한 셈입니다.",
            "easy1_evidence": "We evaluate models for how risk averse or risk tolerant they are in various conditions, as well as how stable and consistent their behavior is across conditions.",
            "easy2_title": "최신 모델일수록 더 안정적이고 중립적인 선택을 하네요",
            "easy2_desc": "연구진이 모델 세대별로 비교해 봤더니, 2026년 최신 모델들은 이전 모델보다 더 안정적이고 일관된 모습을 보였다고 밝혔는데요. 위험에 대해 한쪽으로 치우치지 않는 중립적인 태도를 보이기도 했거든요. 이런 변화는 최신 모델일수록 기대값 극대화라는 의사결정 방식을 더 자주 사용하기 때문인 것으로 보입니다.",
            "easy2_evidence": "We observe that 2026 state-of-the-art models tend to be more stable, more consistent, and more risk neutral than older models.",
            "topic": "거대언어모델(LLM)의 위험 감수 성향을 측정하고 모델 세대별 변화를 분석한 연구입니다.",
            "topic_evidence": "We evaluate LLM risk propensities across a range of contexts and task demands.",
            "points": [
              {
                "subtitle": "위험 성향 평가 도구 개발",
                "desc": "모델의 위험 성향을 파악할 수 있는 프로필 도구를 만들었는데요. 이 도구를 활용하면 모델이 앞으로 어떤 행동을 보일지 예측할 수 있고, 새로운 평가 항목을 추가해 유연하게 확장할 수도 있다는 겁니다.",
                "evidence": "We present a toolkit for developing model risk profiles that can be used to predict model behavior and which can be adapted to include new evaluations of risk propensities."
              },
              {
                "subtitle": "모델 세대별 변화 분석",
                "desc": "다양한 모델 가문과 세대를 거치며 위험 관련 특성이 어떻게 변했는지 살펴봤는데요. 연구진은 최신 모델로 갈수록 위험을 대하는 행동이 더 안정적이고 일관되게 변하고 있다고 주장했습니다.",
                "evidence": "We also examine how these properties have changed across model generations and families."
              },
              {
                "subtitle": "의사결정 방식의 차이",
                "desc": "최신 모델들이 더 안정적인 이유는 의사결정 과정에서 기대값 극대화를 더 많이 활용하기 때문으로 보인다는 거예요. 즉, 감정적이거나 불규칙한 선택 대신 수학적인 계산을 바탕으로 결정을 내리는 비중이 늘어났다는 말입니다.",
                "evidence": "These trends appear to be related; newer models are more stable and consistent because they are more likely to use expected value maximization as a decision procedure."
              }
            ],
            "one_line": "거대언어모델의 위험 성향을 측정하는 도구를 개발하고 세대별 변화를 분석했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 안전·평가",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16175",
          "title": "Stack more levels: how to get general and human-like Mario playing",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16175"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "마리오 게임 AI가 새로운 스테이지도 잘 깰 수 있을까",
            "easy1_desc": "슈퍼 마리오 브라더스는 인공지능 연구에 자주 쓰이지만, 학습하지 않은 새로운 스테이지에서도 AI가 사람처럼 안정적으로 이길 수 있는지는 아직 확실하지 않았거든요. 그래서 연구진은 생성된 마리오 스테이지를 점점 더 많이 학습시켜서, 1000개의 새로운 스테이지에서 AI가 얼마나 잘하는지 확인해 봤습니다. 쉽게 말하면, AI가 처음 보는 환경에서도 실력을 발휘할 수 있는지 검증해 본 셈이에요.",
            "easy1_evidence": "Super Mario Bros. is widely used in game AI and procedural content generation (PCG), yet it remains unclear whether a model-free agent can reliably win unseen levels.",
            "easy2_title": "사람처럼 플레이하도록 AI를 다듬어 봤어요",
            "easy2_desc": "연구진은 강화학습 알고리즘인 PPO로 마리오 AI를 학습시킨 뒤, 달리기나 적 처치 같은 세 가지 유형으로 성격을 입혔는데요. 여기에 사람이 직접 플레이한 데이터를 활용하는 DRAIL이라는 방식을 써서 AI가 더 사람처럼 움직이도록 미세 조정했습니다. 그 결과, AI가 사람과 비슷한 행동을 보이면서도 기존에 학습한 성격은 잘 유지한다는 사실을 확인했다는 겁니다.",
            "easy2_evidence": "We find that increasing the number of distinct PCG-generated training levels generally improves unseen-level performance, and that fine-tuning PPO policies with DRAIL increases action-level human-likeness while preserving much of the persona induced by PPO pretraining.",
            "topic": "마리오 게임 AI의 일반화 성능을 높이고 사람과 유사한 플레이 방식을 구현하는 방법에 대한 연구예요.",
            "topic_evidence": "To address this question, we train Proximal Policy Optimization (PPO) agents on increasingly large sets of PCG-generated Mario levels and evaluate their generalization on 1000 held-out test levels.",
            "points": [
              {
                "subtitle": "학습 데이터 규모와 일반화",
                "desc": "연구진은 절차적 콘텐츠 생성(PCG)으로 만든 마리오 스테이지를 대량으로 학습시켜 AI의 일반화 능력을 평가했습니다. 학습하는 스테이지의 종류가 많아질수록 처음 보는 스테이지에서의 성능도 전반적으로 좋아진다고 연구진은 주장했어요.",
                "evidence": "We find that increasing the number of distinct PCG-generated training levels generally improves unseen-level performance, and that fine-tuning PPO policies with DRAIL increases action-level human-likeness while preserving much of the persona induced by PPO pretraining."
              },
              {
                "subtitle": "게임 플레이 유형 구분",
                "desc": "학습된 PPO 정책을 바탕으로 마리오 AI를 세 가지 게임 플레이 유형인 러너, 킬러, 콜렉터로 구분했습니다. 각 유형은 게임 내에서 서로 다른 전략적 성향을 가지도록 설계된 겁니다.",
                "evidence": "We then shape competent PPO policies into three gameplay archetypes---runner, killer, and collector."
              },
              {
                "subtitle": "사람 행동 모방 학습",
                "desc": "사람의 게임 플레이 데이터를 활용하는 DRAIL 방식을 도입해 AI를 미세 조정했습니다. 이를 통해 AI가 기존의 성격을 잃지 않으면서도 사람과 더 비슷한 수준의 행동을 보이게 되었다는 거예요.",
                "evidence": "Finally, we fine-tune these PPO policies using Diffusion-Reward Adversarial Imitation Learning (DRAIL) with human gameplay demonstrations."
              }
            ],
            "one_line": "마리오 AI의 일반화 성능을 높이고 사람처럼 행동하게끔 학습시켰어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16173",
          "title": "Between Niti and Nyaya: A Society-Centered Framework for AI Governance",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16173"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 정책이 만들어지는 과정에서 우리가 놓치고 있는 것",
            "easy1_desc": "정부들이 AI의 사회적 영향을 제대로 측정하기도 전에 정책을 서두르고 있는데요, 정작 시민들이 AI의 결정에 대해 알 권리를 갖거나 이의를 제기하고 바로잡을 수 있는지는 불분명한 상황이에요. 기존 연구들은 AI 거버넌스에서 나오는 원칙이나 감사 같은 결과물만 다뤘지, 정책이 형성되는 과정에서 시민의 권리를 어떻게 보장할지에 대한 공통된 언어는 부족했거든요. 쉽게 말하면, AI가 내 삶에 어떤 영향을 미치는지 따져볼 수 있는 실질적인 기준이 없다는 말이에요.",
            "easy1_evidence": "Governments are making decisions about AI before they can measure its public effects, and those decisions determine whether a person can learn that AI influenced an outcome, challenge it, and see it corrected.",
            "easy2_title": "시민의 권리를 중심으로 AI 정책을 평가하는 새로운 틀을 만들었어요",
            "easy2_desc": "연구진은 정책 입안자와 시민들이 AI 정책을 평가할 수 있도록 '사회 중심적 AI 거버넌스 프레임워크'를 제안했는데요, 이 틀은 특정 지역의 정책 문서들을 날짜와 구속력에 따라 분석해서 시민이 이의를 제기할 권리가 있는지, 그리고 그 결정이 실제로 수정될 수 있는지를 추적하는 방식이에요. 노스캐롤라이나주 사례를 분석해 보니, 현재는 AI의 존재를 알리는 의무는 있지만 시민이 직접 권리를 행사하기는 어려운 '가시성 우선' 정책에 머물러 있다는 점을 확인했거든요. 정책이 만들어지는 단계에서부터 시민의 구제 수단을 미리 점검할 수 있다는 장점이 있습니다.",
            "easy2_evidence": "We introduce the Society-Centered AI Governance Framework, which gives policymakers, researchers, and the public a way to assess instruments in any jurisdiction by whether a person can get notice, challenge a decision, and see it corrected.",
            "topic": "AI 정책 형성 과정에서 시민의 권리 보장 여부를 평가하기 위한 사회 중심적 거버넌스 프레임워크를 제안하고 검증했어요.",
            "topic_evidence": "We introduce the Society-Centered AI Governance Framework, which gives policymakers, researchers, and the public a way to assess instruments in any jurisdiction by whether a person can get notice, challenge a decision, and see it corrected.",
            "points": [
              {
                "subtitle": "프레임워크의 분석 방식",
                "desc": "이 틀은 각 지역의 정책 문서를 날짜와 법적 구속력에 따라 종합적으로 읽어 내는데요, 정부 기관의 의무와 개인이 행사할 수 있는 권리를 분리해서 어떤 정책이 각 약속을 강제하는지 추적하는 방식이에요. 뭔 소리냐면, 정책의 겉모습뿐만 아니라 실제 작동 구조를 뜯어본다는 말이에요.",
                "evidence": "It reads a jurisdiction's instruments together by date and binding status, separates an agency duty from a right a person can invoke, and traces which later instrument must enforce each commitment."
              },
              {
                "subtitle": "노스캐롤라이나주 사례 평가",
                "desc": "연구진은 9명의 AI 리더십 위원회 인터뷰와 19개 주의 AI 거버넌스 문서 49개를 분석했는데요, 노스캐롤라이나주의 경우 AI가 무엇을 하는지 알리는 의무는 있지만, 시민이 직접 이의를 제기하거나 수정을 요구할 권리는 아직 권고 수준에 머물러 있다는 점을 발견했어요.",
                "evidence": "For the state's own AI systems, we find visibility-first governance: visibility duties are in effect, notice exists as an agency duty with no right a person can invoke, and AI-specific challenge and correction remain advisory."
              },
              {
                "subtitle": "가시성 우선 거버넌스의 위험성",
                "desc": "연구진은 보호 조치보다 보여주기식 가시성만 앞서는 정책이 '보호보다 정당성 확보'라는 위험을 초래할 수 있다고 주장했어요. 정책이 형성되는 도중에 시민이 행동할 수 있는지를 평가함으로써 피해가 발생하기 전에 구제 수단을 미리 점검할 수 있다는 점을 강조했거든요.",
                "evidence": "We identify \"legitimacy before protection\" as a testable risk of visibility-first governance and name the milestones that would test it."
              }
            ],
            "one_line": "시민의 권리 보장 여부를 평가하는 AI 거버넌스 프레임워크를 제안하고 검증했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "최근 연방 차원의 선점 제안들이 AI 개발에 집중되어 있어, 주 정부 시스템에 대한 구제 수단은 여전히 주 단위의 결정으로 남을 가능성이 높다고 연구진은 봤어요.",
            "limit_evidence": "Recent federal preemption proposals focus on AI development, so recourse for a state's own systems is likely to remain a state decision."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 안전·평가",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.15843",
          "title": "Food Critic: An Agentic Visualization System for Auditable Restaurant-Safety Reasoning",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15843"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 내놓은 답이 진짜인지 확인하기가 어려웠어요",
            "easy1_desc": "요즘 생성형 AI 에이전트를 시각화 시스템에 넣어서 데이터를 찾거나 추천을 받는 경우가 늘고 있는데요. 문제는 AI가 자기 지식만 믿고 답을 내놓을 때, 사용자가 그 답이 어떤 근거로 만들어졌는지 직접 확인하기가 어렵다는 거예요. 뭔 소리냐면, AI가 똑똑한 답을 주는 것도 중요하지만 그 과정이 투명하게 보여야 믿고 쓸 수 있다는 말이에요.",
            "easy1_evidence": "However, when agents rely solely on their own knowledge, the visualization problem is not only whether the agent provides a useful answer, but also whether users can inspect how that answer is grounded.",
            "easy2_title": "AI의 추론 과정을 눈으로 직접 보고 검증할 수 있게 만들었어요",
            "easy2_desc": "그래서 연구진은 식당 위생 기록과 리뷰 데이터를 활용해 식당 선택을 돕는 '푸드 크리틱(Food Critic)'이라는 시스템을 개발했는데요. 이 시스템은 AI가 어떤 근거로 결론을 내렸는지 그 과정을 시각적인 증거로 보여줘서 사용자가 직접 검사할 수 있게 만들었어요. AI가 추론한 내용을 눈으로 확인할 수 있으니 신뢰도가 높아지는 장점이 있는데, 대신 시스템이 복잡한 데이터를 어떻게 구조화하느냐에 따라 성능이 달라진다는 점도 같이 고려해야 한다는 겁니다.",
            "easy2_evidence": "Food Critic externalizes the agent's reasoning within these groundings as inspectable visual evidence.",
            "topic": "생성형 AI 에이전트가 식당 위생 데이터를 기반으로 추론할 때, 그 과정을 시각화하여 사용자가 검증할 수 있도록 돕는 시스템에 관한 연구예요.",
            "topic_evidence": "We present Food Critic, an agentic visualization system for diners' restaurant decision support that integrates public health inspection records with crowd review data.",
            "points": [
              {
                "subtitle": "세 가지 방식의 에이전트 구현",
                "desc": "연구진은 데이터베이스만 사용하는 방식, 식품 안전 규정을 검색해 활용하는 방식, 그리고 온톨로지(지식 체계)를 따라 구조화된 가설을 세우는 방식 등 세 가지 조건에서 에이전트를 작동시켜 봤거든요. 각 방식에 따라 AI가 정보를 처리하는 깊이가 달라진다는 걸 확인한 셈이에요.",
                "evidence": "The system grounds agents under three conditions: a database-only ReAct agent, a retrieval- augmented agent with access to food-safety regulations, and an ontology-guided agent that produces structured hypotheses and typed evidence."
              },
              {
                "subtitle": "시각적 증거를 통한 추론 과정 공개",
                "desc": "이 시스템은 AI가 결론에 도달하기까지 거친 추론 과정을 시각적인 증거로 밖으로 꺼내 보여줍니다. 사용자는 AI가 어떤 데이터를 근거로 위생 상태를 판단했는지 눈으로 직접 확인할 수 있어서, AI의 판단을 더 쉽게 검증할 수 있게 되는 거예요.",
                "evidence": "Food Critic externalizes the agent's reasoning within these groundings as inspectable visual evidence."
              },
              {
                "subtitle": "인간과 AI 협업의 구체적 사례 제시",
                "desc": "연구진은 식당 선택이라는 일상적인 문제를 통해 인간과 AI가 어떻게 협업해야 하는지, 그리고 근거가 명확한 AI 결정을 위해 시각적 인터페이스를 어떻게 설계해야 하는지 연구했어요. 이번 연구가 앞으로 AI의 판단을 믿고 사용할 수 있는 환경을 만드는 데 중요한 사례가 될 것으로 보입니다.",
                "evidence": "Our work positions restaurant choice as a concrete case for studying human-agent collaboration, visual provenance of agent reasoning, and the design of visual interfaces for grounded GenAI decision support."
              }
            ],
            "one_line": "AI의 식당 추천 추론 과정을 시각화해 검증 가능한 시스템을 개발했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [
              "예측 의심: 이번 연구가 앞으로 AI의 판단을 믿고 사용할 수 있는 환경을 만드는 데 중요한 사례가 될 것으로 보입니다."
            ],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.15831",
          "title": "NIBench: benchmarking autonomous AI agents for execution, skill evolution and scientific judgment in neuroimaging",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15831"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 과학 연구를 돕고 있는데 정작 얼마나 믿을 수 있는지는 잘 모르는 상황이에요",
            "easy1_desc": "요즘 생물의학 연구를 자동화하려고 자율형 AI 에이전트를 많이 쓰는데요, 신경영상 분야에서는 AI가 그럴듯한 결과를 내놓더라도 실제로는 과학적 결론을 뒤흔들 만한 오류가 숨어 있을 수 있거든요. 기존 연구들은 단순히 질문에 답하거나 도구를 쓰는 수준에 머물러 있어서, 복잡한 연구 과정을 재구성하거나 새로운 기술을 익히고 과학적 판단을 내리는 능력은 제대로 검증되지 않았다는 문제가 있었어요. 쉽게 말하면, AI가 연구를 대신 해주고는 있지만 그 결과가 정말 믿을 만한지 따져볼 기준이 부족했다는 말이에요.",
            "easy1_evidence": "Their reliability in neuroimaging remains insufficiently characterized, where plausible analytical outputs can conceal errors that affect scientific conclusions.",
            "easy2_title": "신경영상 연구를 위한 AI 에이전트 평가 도구인 NIBench를 만들었어요",
            "easy2_desc": "그래서 연구진은 신경영상 분야에서 AI 에이전트의 능력을 다각도로 평가할 수 있는 NIBench라는 벤치마크를 개발했는데요, 이 도구는 AI가 연구 과정을 얼마나 잘 재구성하는지, 스스로 기술을 발전시킬 수 있는지, 그리고 과학적 판단을 제대로 내리는지를 세 가지 단계로 나누어 검증해요. 19개의 언어 모델을 공통된 환경에서 테스트해 봤더니, 안내가 주어질 때는 AI들이 분석 작업을 거의 완벽하게 수행했지만, 스스로 알아서 해야 하는 상황에서는 모델 간의 실력 차이가 크게 벌어지는 것으로 나타났거든요. 결과적으로 AI가 데이터를 분석해 결론을 내릴 수는 있지만, 전문가의 판단과 일치하지 않는 경우도 종종 발생한다는 점을 확인한 셈이에요.",
            "easy2_evidence": "Here we present NIBench, a neuroimaging benchmark comprising three complementary evaluations of autonomous agents.",
            "topic": "신경영상 연구 환경에서 자율형 AI 에이전트의 실행 능력, 기술 습득 과정, 그리고 과학적 판단력을 체계적으로 평가하는 연구예요.",
            "topic_evidence": "NIBench: benchmarking autonomous AI agents for execution, skill evolution and scientific judgment in neuroimaging",
            "points": [
              {
                "subtitle": "연구 과정 재구성 평가",
                "desc": "구조적·확산적·기능적 자기공명영상(MRI)과 양전자 방출 단층촬영(PET) 등을 포함한 7개 도구 생태계에서 56개의 과제를 수행하며 AI의 실행 능력을 측정했어요. 연구진은 AI가 복잡한 분석 프로토콜을 얼마나 정확하게 재현하는지 확인했거든요.",
                "evidence": "First, we benchmark execution and workflow reconstruction using 56 tasks across seven tool ecosystems, covering structural, diffusion and functional magnetic resonance imaging, positron emission tomography and multimodal analyses."
              },
              {
                "subtitle": "절차적 기술 습득 및 전이",
                "desc": "AI가 실행 경로를 학습하여 스스로 기술을 발전시킬 수 있는지 확인하기 위해 기술 증류(distillation) 방식을 적용해 봤는데요, 이를 통해 이전에 수행했던 과제나 다른 모델 간의 기술 전이 효과를 평가했어요. 다만, 처음 보는 새로운 과제에서는 그 효과가 일정하게 나타나지 않는다는 한계도 확인했거든요.",
                "evidence": "Distilled skills improve performance on acquisition tasks and transfer between models, but benefits on unseen tasks are inconsistent."
              },
              {
                "subtitle": "과학적 판단력 검증",
                "desc": "알츠하이머병 연구 논문 36건의 주장을 바탕으로 AI가 원시 데이터를 분석하고 재현 가능한 증거를 제시할 수 있는지 평가했어요. AI가 보고된 결과는 잘 재현해 내지만, 때로는 전문가의 판단과 다른 결론에 도달하기도 하며 데이터 접근 권한이 항상 판단력 향상으로 이어지지는 않는다는 점을 밝혔어요.",
                "evidence": "Agents reproduce their reported results yet sometimes reach conclusions inconsistent with expert-derived answers, and access to data does not always improve judgment."
              }
            ],
            "one_line": "신경영상 연구를 위한 AI 에이전트의 성능을 평가하는 벤치마크를 구축했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "기술 증류를 통해 습득한 기술이 이전에 경험하지 못한 새로운 과제에 적용될 때는 그 효과가 일관되지 않다는 점을 밝혔어요.",
            "limit_evidence": "Distilled skills improve performance on acquisition tasks and transfer between models, but benefits on unseen tasks are inconsistent."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                false
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "5/6",
            "evidence_all": false,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [
              "easy1_title 한 줄 아님/너무 김(46자)"
            ],
            "flags": [],
            "tag": "AI 안전·평가",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.15716",
          "title": "A Reliability Study of Explainable AI for Freight Mode Classification",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15716"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 내놓은 설명이 정말 믿을 만한지 따져 봤습니다",
            "easy1_desc": "화물 운송 방식을 분류할 때 머신러닝 모델을 많이 쓰는데, 정작 그 모델이 왜 그런 결과를 냈는지 설명해 주는 기능은 믿어도 되는지 검증이 부족했거든요. 그래서 연구진은 화물 배송 데이터를 활용해 여러 모델을 비교하고, AI가 내놓은 설명이 얼마나 안정적이고 정확한지 직접 평가해 봤습니다. 쉽게 말하면, AI의 똑똑함뿐만 아니라 그 똑똑함을 설명하는 방식까지 꼼꼼히 검증해 본 셈이에요.",
            "easy1_evidence": "Machine learning models are increasingly used to support freight transportation decisions, but their predictions are rarely accompanied by evidence that the associated explanations can be trusted.",
            "easy2_title": "트리 기반 모델이 더 정확하고 설명도 안정적이라는 결과가 나왔습니다",
            "easy2_desc": "실험 결과, 트리 앙상블 모델이 신경망이나 선형 모델보다 평균 테스트 정확도 면에서 더 뛰어난 성능을 보였는데요. 모델을 다시 학습시켜도 중요한 특징을 꼽는 순위가 가장 안정적으로 유지되는 장점이 있었습니다. 다만 정확도가 비슷한 모델끼리도 무엇을 더 중요하게 보는지에 대해서는 의견이 갈리는 경우가 많았거든요. 그래서 AI의 설명을 실제 의사결정에 쓰기 전에는 반드시 그 신뢰성을 먼저 확인해야 한다는 게 연구진의 주장이에요.",
            "easy2_evidence": "The results suggest that the tree ensembles significantly outperform the neural and linear models (86.8% against 83.3-85.0% mean testing accuracy) while their leading features remain the most stable across retraining.",
            "topic": "화물 운송 모드 분류를 위한 설명 가능한 AI(XAI) 모델의 신뢰성과 설명의 정확도를 평가했어요.",
            "topic_evidence": "In this study we investigate explainable machine learning for classifying shipments as Air/Air Charter or Truck/Ocean using the PEPFAR Supply Chain Management System Delivery History dataset, with 5,964 shipment records and 47 input features after cleaning, where freight cost and pack price are excluded as near-proxies of the transportation mode.",
            "points": [
              {
                "subtitle": "모델 성능 및 설명 안정성 비교",
                "desc": "다양한 모델을 100번 반복 학습시켜 성능을 비교했는데, 트리 앙상블 모델이 86.8%의 정확도로 다른 모델들보다 우수한 성적을 냈습니다. 또한 모델을 재학습할 때 SHAP(설명 가능한 AI 기법)이 제시하는 특징 순위가 얼마나 변하지 않는지 확인해 보니 트리 모델이 가장 안정적이었어요.",
                "evidence": "The results suggest that the tree ensembles significantly outperform the neural and linear models (86.8% against 83.3-85.0% mean testing accuracy) while their leading features remain the most stable across retraining."
              },
              {
                "subtitle": "설명의 충실도 검증",
                "desc": "SHAP이나 LIME(설명 가능한 AI 기법)이 중요하다고 꼽은 특징 5개를 지워 봤더니, 무작위로 특징을 지웠을 때보다 예측 확률이 약 4배 더 크게 변하는 것을 확인했습니다. 이는 AI가 내놓은 설명이 모델의 예측 결과와 실제로 밀접하게 연결되어 있음을 보여주는 결과예요.",
                "evidence": "Removing the five features ranked most important by SHAP or LIME changes the predicted probabilities roughly four times as much as removing randomly chosen features."
              },
              {
                "subtitle": "설명 신뢰성에 대한 제언",
                "desc": "목적지 국가에 따른 효과를 지도에 그려 보니 지리적으로 일관된 패턴이 나타났지만, 정확도가 비슷한 모델이라도 어떤 특징을 중요하게 여기는지는 서로 크게 달랐습니다. 따라서 운송 관련 의사결정에 AI의 설명을 활용하려면 반드시 사전에 그 설명의 안정성과 충실도를 평가해야 한다고 연구진은 강조했어요.",
                "evidence": "However, models with similar accuracy disagree substantially on which features matter most, and thus explanation stability and faithfulness should be assessed before such explanations are used to support freight transport decisions."
              }
            ],
            "one_line": "화물 운송 분류 모델의 설명 가능성과 신뢰성을 다양한 기법으로 검증했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 안전·평가",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.15515",
          "title": "Incentive-Responsive Agents: A Principal-Agent Framework, Metric Suite, and Runtime Architecture for Long-Lived Personal AI Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15515"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "개인용 AI 에이전트가 왜 계속 일을 잘하게 만들기는 어려운 걸까",
            "easy1_desc": "요즘 개인용 AI 에이전트는 메일함이나 기억 장치를 가지고 오랫동안 활동하는데요, 지금까지는 성능을 높이려고 프롬프트 엔지니어링이나 더 큰 모델을 쓰는 방식에만 집중해 왔거든요. 연구진은 이런 방식만으로는 한계가 있다고 봤는데요, 에이전트가 스스로 동기를 가지고 움직이게 만드는 체계가 빠져 있기 때문이라는 거예요. 쉽게 말하면, 똑똑한 뇌를 넣어주는 것만큼이나 일을 열심히 하게 만드는 보상 체계가 중요하다는 말이에요.",
            "easy1_evidence": "We argue that long-lived agents are missing an incentive layer.",
            "easy2_title": "프롬프트로 설득하는 대신 실행 환경에서 보상을 직접 조절해 봤더니",
            "easy2_desc": "연구진은 에이전트의 작동 환경을 계약처럼 설정해서 모델 등급이나 메모리 예산, 도구 사용 권한 같은 자원을 직접 할당하는 방식을 제안했는데요, 이를 통해 에이전트가 실제로 노력을 기울이게 만들었다는 거예요. 실험 결과 프롬프트로 동기를 부여하는 건 효과가 없었지만, 자원을 적절히 할당했더니 가장 어려운 작업의 성공률이 0.60에서 1.00으로 크게 올랐거든요. 결국 단순히 말로 시키는 것보다 자원과 보상을 직접 관리하는 게 훨씬 효과적이라는 사실을 보여준 셈이에요.",
            "easy2_evidence": "A 240-run real-LLM experiment with two models and 60 verifiable tasks shows that prompt-level incentive framing has no detectable effect (p = 0.62), whereas runtime allocation raises success on the hardest task family from 0.60 to 1.00 (p = 0.008) at 4.8x price-weighted cost; the exchange-rate theorem predicts the break-even baseline at 0.21.",
            "topic": "개인용 AI 에이전트의 지속적인 성능 향상을 위해 경제학의 주인-대리인 이론을 적용한 보상 체계와 실행 구조를 제안했어요.",
            "topic_evidence": "We formalize an incentive not as text in a prompt but as a runtime contract over the agent's operating point (model tier, test-time compute, memory budget, tool authority, task priority, verification, and compensation) that the agent's policy must causally consume.",
            "points": [
              {
                "subtitle": "주인-대리인 모델 설계",
                "desc": "연구진은 숨겨진 노력과 계약 가능한 작동 지점, 그리고 비용이 드는 검증 과정을 포함한 주인-대리인 모델을 만들었는데요, 이를 통해 에이전트가 단순히 프롬프트에 반응하는 것을 넘어 실제 성과를 내도록 유도하는 체계를 세웠다는 거예요.",
                "evidence": "We develop a principal-agent model with hidden effort, a contractible operating point, and costly verification."
              },
              {
                "subtitle": "이론적 성과와 보상 체계",
                "desc": "연구진은 비소비 불변 원리와 지속성을 위한 할인 정리 등을 도출해서 에이전트가 왜 꾸준히 노력해야 하는지를 수학적으로 증명했는데요, 특히 보상과 능력 사이의 교환 비율을 계산해 작업별로 자원을 어떻게 배분할지 규칙을 세웠다는 점이 핵심이에요.",
                "evidence": "We derive (i) a non-consumption invariance principle separating genuine incentives from prompt-level persuasion, (ii) a persistence-as-discount theorem making identity continuity a precondition for sustained effort, (iii) an incentive-capability exchange-rate frontier yielding a per-task routing rule, and (iv) a Goodhart bound for multi-channel verification, plus a three-channel decomposition of mechanism gains (allocation, verification, continuation)."
              },
              {
                "subtitle": "실험을 통한 효율성 검증",
                "desc": "3,000개의 작업을 시뮬레이션해 본 결과, 자원 투자 대비 수익률(ROI)이 7.09에서 16.67로 올랐고, 시스템을 악용하려는 시도인 게이밍은 0.333에서 0.115로 줄었다고 밝혔는데요, 이는 제안한 보상 체계가 에이전트의 효율성을 높이고 부정행위를 막는 데 효과적임을 보여줍니다.",
                "evidence": "A 20-seed, 3,000-task simulation shows resource ROI rising from 7.09 to 16.67 and gaming falling from 0.333 to 0.115."
              }
            ],
            "one_line": "AI 에이전트의 보상 체계와 실행 구조를 설계하고 성능을 검증했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "실제 환경에서의 배포는 아직 수행하지 않았으며 향후 과제로 남겨두었습니다.",
            "limit_evidence": "live deployment remains future work."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.15481",
          "title": "SkillEarth: Teaching General-Purpose Agents to Act on Earth via Skill Evolution",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15481"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 인공지능은 새로운 도구를 쓸 때마다 다시 배워야 했어요",
            "easy1_desc": "최근 원격 탐사(RS) 인공지능은 여러 단계를 거쳐 도구를 사용하며 복잡한 일을 처리하는데요, 문제는 새로운 도구나 작업이 생길 때마다 전문가의 지식을 새로 입력하거나 모델을 다시 학습시켜야 한다는 점이에요. 이런 방식은 지구가 계속 변하는 환경에서 인공지능이 스스로 적응하는 데 한계가 있다는 말이에요. 쉽게 말하면, 변화에 유연하게 대처하지 못하고 매번 사람의 손길이 필요했다는 겁니다.",
            "easy1_evidence": "These agents, however, typically rely on predefined expertise or parameter updates.",
            "easy2_title": "이제는 스스로 기술을 진화시켜 도구 활용 능력을 키우게 됐어요",
            "easy2_desc": "연구진은 사람이 직접 개입하지 않아도 인공지능이 스스로 도구 사용법을 익히는 '스킬어스(SkillEarth)'라는 방법을 제안했는데요, 이 방식은 도구 호출 지식을 재사용 가능한 파일 형태로 만들고 실제 실행 결과를 보며 스스로 다듬어 나가는 방식이에요. 기존처럼 결과만 보고 전체를 수정하는 게 아니라, 도구 체인 실행 과정을 직접 관찰하며 세밀하게 개선한다는 점이 특징이에요. 덕분에 모델을 다시 학습시키지 않아도 여러 인공지능 모델에서 기술을 공유하고 활용할 수 있게 된 셈이에요.",
            "easy2_evidence": "Specifically, we propose SkillEarth, a self-evolving skill extraction method that externalizes RS tool-call knowledge as reusable, retrievable, and evolvable skill files and refines them through observation-grounded evolution.",
            "topic": "원격 탐사 인공지능이 전문가 도움 없이도 스스로 도구 사용 기술을 추출하고 진화시킬 수 있는 스킬어스(SkillEarth) 방법론을 제안했어요.",
            "topic_evidence": "In this work, we seek to equip general-purpose agents with RS tool-call knowledge that can be automatically extracted from demonstrated trajectories without expert intervention or parameter updates.",
            "points": [
              {
                "subtitle": "스킬어스의 핵심 원리",
                "desc": "스킬어스는 도구 호출 지식을 재사용 가능한 파일로 만들고, 이를 실제 실행 과정에서 얻은 피드백을 통해 정교하게 다듬어 나가는 방식이에요. 단순히 결과만 보는 게 아니라 도구 체인 실행 과정을 관찰하고, 이중 평가와 관찰 경로 그래프를 활용해 기술을 세밀하게 개선한다는 점이 핵심이에요.",
                "evidence": "Unlike existing automatic skill extraction methods that rely on outcome-based reflection to refine skills holistically, SkillEarth grounds skill evolution in real tool-chain execution and combines dual-judge feedback with a grounded observation routing graph for precise component-level refinement."
              },
              {
                "subtitle": "모델 간 기술 공유와 활용",
                "desc": "이렇게 만들어진 기술은 특정 모델에 갇히지 않고 여러 인공지능 모델에서 공통으로 사용할 수 있다는 장점이 있어요. 연구진은 세 가지 최신 거대언어모델(LLM)과 네 가지 오픈소스 모델에서 실험해 본 결과, 별도의 재학습 없이도 도구 호출 성능이 전반적으로 향상되는 것을 확인했다고 밝혔어요.",
                "evidence": "The resulting skills are generalizable, reliable, and transferable: they improve overall RS tool-call performance across three frontier LLMs and four open-source LLMs, are refined through real tool execution feedback, and support cross-model reuse without retraining."
              },
              {
                "subtitle": "실험을 통한 성능 검증",
                "desc": "오픈어스 벤치(OpenEarth-Bench)와 어스 벤치(Earth-Bench)에서 실험해 봤더니, 기존 원격 탐사 인공지능이나 다른 기술 추출 방법들보다 도구 선택, 인자 정확도, 실행 순서 일관성, 작업 완료율 면에서 모두 더 뛰어난 성과를 보였다고 연구진은 주장했어요.",
                "evidence": "Experiments on OpenEarth-Bench and Earth-Bench demonstrate that SkillEarth achieves better tool selection, argument correctness, execution-order consistency, and task completion than existing RS agents and skill extraction methods."
              }
            ],
            "one_line": "스킬어스를 통해 인공지능이 스스로 도구 사용 기술을 추출하고 진화하게 했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.15389",
          "title": "A physics-constrained deep reinforcement learning method for autonomous mission planning of Titan deep space probes",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15389"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "지구와 너무 멀어서 실시간으로 조종하기가 어려웠어요",
            "easy1_desc": "토성은 지구에서 워낙 멀리 떨어져 있어서, 지상에서 일일이 명령을 보내는 방식으로는 탐사선을 제어하기가 사실상 불가능하거든요. 기존의 탐사 계획 방식들은 주로 지구를 관측하는 환경에 맞춰져 있다 보니, 토성처럼 불확실성이 크고 환경이 시시각각 변하는 심우주 탐사에는 적용하기가 어려웠다는 말이에요. 쉽게 말하면, 환경이 바뀔 때마다 유연하게 대처할 수 있는 능력이 부족했다는 겁니다.",
            "easy1_evidence": "Existing planning methods, primarily developed for Earth-observation scenarios, have limited generalizability to uncertain deep space conditions and adaptability to time-varying mission states.",
            "easy2_title": "물리 법칙을 반영한 인공지능으로 스스로 판단하게 만들었어요",
            "easy2_desc": "그래서 연구진은 물리 법칙을 제약 조건으로 넣은 강화학습(PCM-PPO) 방식을 제안했는데요, 탐사선이 움직일 때 중력이나 행성의 위치 같은 물리적인 모델을 학습 과정에 포함한 거예요. 이렇게 하면 탐사선이 물리적으로 불가능한 행동을 하지 않도록 미리 걸러낼 수 있어서, 훨씬 안전하고 효율적인 경로를 스스로 찾을 수 있게 됩니다. 결과적으로 심우주 탐사에서 자율적인 임무 수행이 가능해졌다는 의미예요.",
            "easy2_evidence": "To address these challenges, this paper proposes a physics-constrained maskable proximal policy optimization (PCM-PPO) method for Titan autonomous mission planning.",
            "topic": "토성 위성 타이탄 탐사를 위한 물리 제약 기반의 자율 임무 계획 강화학습 방법론을 제안했어요.",
            "topic_evidence": "This paper proposes a physics-constrained maskable proximal policy optimization (PCM-PPO) method for Titan autonomous mission planning.",
            "points": [
              {
                "subtitle": "타이탄 맞춤형 의사결정 모델",
                "desc": "임무의 성공 가능성과 자원 제약을 고려하기 위해 타이탄 환경에 특화된 마르코프 결정 과정(MDP)을 설계했어요. 여기에 중심 중력, J2 섭동, 제3체 인력, 통신 차단 같은 물리적 요소들을 모델에 통합해서 탐사 환경을 더 정확하게 표현했거든요.",
                "evidence": "A Titan-specific discrete-time Markov decision process is established to characterize mission feasibility and resource constraints."
              },
              {
                "subtitle": "물리 제약 기반의 행동 마스킹",
                "desc": "탐사선이 수행할 수 있는 행동의 범위를 제한된 차원 안에서 효율적으로 관리하기 위해, 물리적으로 가능한 행동만 선택하도록 돕는 마스크를 적용했어요. 이 마스크가 현재 임무 상태에서 실행 가능한 결정 영역을 만들어 주니까, 불가능한 경로를 탐색하느라 시간을 낭비하지 않게 되는 겁니다.",
                "evidence": "A physics-constrained action mask constructs an admissible decision domain from current mission states, guiding policy learning toward physically executable decisions and avoiding infeasible exploration."
              },
              {
                "subtitle": "학습 효율과 성능 검증",
                "desc": "여러 제약 조건이 복합적으로 얽힌 상황에서도 학습이 잘 이루어지도록 통합 훈련 전략을 도입했는데요, 비교 실험과 절제 실험을 통해 이 방식이 실제로 효과적임을 확인했어요. 연구진은 이 방법이 타이탄 심우주 탐사선의 자율 임무 계획을 위한 해석 가능하고 실행 가능한 대안이 된다고 주장했습니다.",
                "evidence": "Comparative, ablation, and uncertainty experiments validate the effectiveness of PCM-PPO."
              }
            ],
            "one_line": "물리 법칙을 반영한 강화학습으로 타이탄 탐사선의 자율 임무 계획을 수행했어요.",
            "topic_tag": "제어·로봇",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "제어·로봇",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.15315",
          "title": "MIGRO: A Decoupled and Portable Long-Term Memory System for Language Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15315"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "언어 모델이 바뀌어도 쌓아둔 기억은 그대로 써야 하거든요",
            "easy1_desc": "언어 모델은 계속 새로운 버전으로 발전하는데요, 사용자와 대화하며 쌓아온 경험이나 맥락은 모델이 바뀌어도 그대로 유지되어야 한다는 게 문제였어요. 모델이 바뀔 때마다 과거의 기록을 다시 불러오거나 새로운 정보를 덧붙이는 과정이 매끄럽지 않았거든요. 쉽게 말하면, 모델은 업그레이드되는데 기억은 단절되는 상황이 발생한다는 말이에요.",
            "easy1_evidence": "Each new model must be able to retrieve past evidence, track revisions, and add new observations.",
            "easy2_title": "기억을 따로 떼어 관리하니 효율이 확 올라갔어요",
            "easy2_desc": "연구진은 MIGRO라는 시스템을 만들어 경험을 모델과 분리된 독립적인 상태로 저장하게 했는데요, 질문이 들어오기 전까지는 정보를 대략적으로만 정리해 두었다가 필요할 때만 정확히 골라내는 방식을 썼어요. 모델마다 사용하는 단어 사전이 달라도 전용 인터페이스가 이를 변환해 주니 어떤 모델이든 과거의 경험을 이어받을 수 있게 된 겁니다. 결과적으로 이전 방식보다 기억 저장 효율은 높이면서도 답변의 품질은 유지할 수 있게 됐다는 거예요.",
            "easy2_evidence": "MIGRO, a decoupled long-term memory system that treats experience as a persistent state shared across successive language models.",
            "topic": "언어 모델의 세대교체와 상관없이 경험을 지속적으로 공유하고 저장할 수 있는 MIGRO 시스템에 대한 연구예요.",
            "topic_evidence": "MIGRO combines high answer quality, continued memory growth across hosts, and low storage cost.",
            "points": [
              {
                "subtitle": "비대칭적 충실도와 지연된 선택성",
                "desc": "기록은 정확하게 보존하되 정리는 대략적으로 수행하고, 실제 질문이 들어왔을 때만 무엇을 가져올지 결정하는 방식을 취했어요. 이를 통해 저장 공간은 아끼면서도 필요한 정보는 정확히 찾아낼 수 있게 설계했거든요.",
                "evidence": "MIGRO follows a simple principle: preserve historical evidence exactly, organize it approximately, and decide what to retrieve only when the question is known."
              },
              {
                "subtitle": "모델 간 호환성을 위한 인터페이스",
                "desc": "언어 모델마다 토큰화 방식이나 사용하는 단어 사전이 다르다는 점을 고려해, 호환 가능한 형태로 정보를 변환해 주는 인터페이스를 도입했어요. 덕분에 서로 다른 모델이라도 동일한 기억 저장소를 읽고 확장할 수 있게 된 겁니다.",
                "evidence": "Because models differ in vocabulary and tokenization, host-specific interfaces convert selected evidence into inputs the receiving model can use."
              },
              {
                "subtitle": "성능 및 저장 효율 검증",
                "desc": "실험 결과 MIGRO는 기존 최고 성능 모델 대비 점수는 7.3% 높았고 개인 메모리 사용량은 99.3%나 줄였다고 연구진은 주장했어요. 또한 백만 토큰 규모의 기록에서도 가장 압축률이 좋은 방식보다 저장 공간을 57.5% 더 아낄 수 있었다는 거예요.",
                "evidence": "On matched LoCoMo states, MIGRO scores 7.3% higher and uses 99.3% less private memory than the strongest quality baseline."
              }
            ],
            "one_line": "언어 모델이 경험을 공유하도록 분리된 장기 기억 시스템을 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.15309",
          "title": "Where Autonomy Belongs: A Separation of Powers for Agentic Program Evolution",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15309"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 코드를 고칠 때 권한을 어떻게 나누느냐가 문제였어요",
            "easy1_desc": "LLM(거대언어모델)으로 프로그램을 발전시킬 때, 연구진은 세 가지 결정 과정인 관리, 제안, 평가가 필수적이라고 봤는데요. 기존 방식은 관리자 중심이거나 에이전트 중심이라 이 세 가지 권한이 한곳에 쏠려 있었거든요. 그러다 보니 에이전트의 자율성이 제한되거나 계산 비용이 너무 많이 드는 문제가 생겼습니다. 쉽게 말하면, 권한 분배가 제대로 안 되어 성능과 효율이 모두 떨어졌다는 말이에요.",
            "easy1_evidence": "These failures share one root: autonomy is misallocated across the three decisions.",
            "easy2_title": "권한을 셋으로 쪼개서 성능과 효율을 모두 잡았어요",
            "easy2_desc": "연구진은 EvoTrias라는 구조를 만들어 관리, 제안, 평가의 권한을 각각 분리했는데요. 각 과정은 정해진 계약대로만 정보를 주고받으며, 실행 중에 경계를 확실히 지키도록 설계했습니다. 이렇게 했더니 기존 코딩 에이전트를 그대로 쓰면서도 성능은 더 좋아졌거든요. 결과적으로 수학, 시스템, 알고리즘 설계 벤치마크에서 새로운 최고 수준을 기록했다고 연구진은 주장했습니다.",
            "easy2_evidence": "We address this problem with EvoTrias, a separation-of-powers architecture in which each decision has one owner: Structured Governance for what spans evolution rounds, Open Proposal for construction inside a task, and Protected Judgment behind a private evaluator.",
            "topic": "LLM 기반 프로그램 진화 시스템에서 권한 분리를 통해 효율성과 신뢰성을 높이는 EvoTrias 아키텍처를 제안했어요.",
            "topic_evidence": "We address this problem with EvoTrias, a separation-of-powers architecture in which each decision has one owner: Structured Governance for what spans evolution rounds, Open Proposal for construction inside a task, and Protected Judgment behind a private evaluator.",
            "points": [
              {
                "subtitle": "권한 분리 구조",
                "desc": "관리, 제안, 평가라는 세 가지 핵심 결정을 각각 독립된 주체가 맡도록 설계했습니다. 각 주체는 타입이 지정된 계약을 통해서만 소통하며, 런타임 훅을 통해 권한의 경계를 엄격히 유지하는 방식이에요.",
                "evidence": "These owners exchange typed contracts only, and runtime hooks reinforce the boundaries."
              },
              {
                "subtitle": "플러그인 방식의 확장성",
                "desc": "EvoTrias는 독립적인 시스템일 뿐만 아니라, 기존의 코딩 에이전트를 진화 시스템으로 바꿔주는 플러그인 형태로도 작동할 수 있습니다. 덕분에 기존 도구들을 활용하면서도 시스템의 성능을 개선할 수 있다는 장점이 있어요.",
                "evidence": "This separation also lets EvoTrias run as a plugin that turns an existing coding agent into an evolution system."
              },
              {
                "subtitle": "성능 및 비용 개선 결과",
                "desc": "실험 결과 관리와 제안을 분리하여 토큰 비용을 64% 절감했고, 68만 줄 규모의 산업용 저장소까지 진화 범위를 넓혔습니다. 또한 평가 과정을 보호함으로써 벤치마크 점수의 신뢰성도 확보했다고 연구진은 밝혔습니다.",
                "evidence": "Three further results show what each owner buys: separating Governance from Proposal cuts token cost by 64%, Open Proposal extends evolution to a 680K-line industrial repository, and Protected Judgment keeps benchmark scores faithful to transfer."
              }
            ],
            "one_line": "권한 분리 구조인 EvoTrias를 설계해 프로그램 진화 시스템의 효율을 높였어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.15238",
          "title": "Towards Robust Vision-Language Reasoning: A Multi-Stage Optimization Pipeline with Masked Diffusion Model",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15238"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "자율주행에서 이산 확산 모델을 쓰려니 도메인 차이가 걸림돌이었어요",
            "easy1_desc": "이산 확산 생성 방식은 전체 토큰을 한꺼번에 다듬어 나가기 때문에 자율주행처럼 전체적인 계획이 중요한 분야에 유리한데요. 하지만 일반적인 환경에서 쓰던 이 방식을 자율주행에 그대로 가져오려고 보니 학습과 추론 과정에서 데이터의 성격이 달라지는 도메인 격차 문제가 크게 발생했습니다. 쉽게 말하면, 범용 모델을 자율주행이라는 특수한 환경에 바로 적용하기에는 성능을 제대로 내기 어려운 구조였다는 겁니다.",
            "easy1_evidence": "However, transferring this generation paradigm from general-purpose settings to driving introduces substantial domain gaps in both training and inference.",
            "easy2_title": "단계별 최적화로 자율주행 성능을 29.7% 끌어올렸어요",
            "easy2_desc": "연구진은 별도의 전문가 모델 없이도 기존 시각-언어 모델 구조를 그대로 활용하는 다단계 최적화 파이프라인을 제안했는데요. 미세 조정 단계에서는 환각 현상을 줄이고, 강화 학습에서는 더 나은 학습 지점을 찾아 정책 탐색을 개선했으며, 추론 시에는 장면 복잡도에 따라 디코딩 방식을 바꾸는 DAD 기법을 적용했습니다. 그 결과 MD-Drive 모델은 기존 모델보다 성능을 29.7% 개선하는 성과를 거뒀거든요. 결과적으로 성능과 계산 비용 사이에서 더 나은 균형을 찾았다는 점이 핵심입니다.",
            "easy2_evidence": "Based on this pipeline, we develop Masked Diffusion Drive (MD-Drive), improving its performance by 29.7% over the unoptimized model.",
            "topic": "이산 확산 모델을 자율주행에 효과적으로 적용하기 위한 다단계 최적화 파이프라인과 이를 구현한 MD-Drive 모델에 대한 연구예요.",
            "topic_evidence": "To unlock its potential, we propose a multi-stage optimization pipeline for standard vision-language model architectures, without auxiliary action experts or specialized mixture-of-experts Transformer, spanning post-training and inference.",
            "points": [
              {
                "subtitle": "학습 단계별 최적화",
                "desc": "지도 미세 조정 단계에서는 계획 입력의 표현을 최적화해 모델이 잘못된 정보를 생성하는 환각을 억제했고요. 강화 학습 단계에서는 지표 기반의 다양성 필터링을 도입해 더 강력한 학습 시작점을 찾고 정책 탐색 능력을 높였습니다.",
                "evidence": "During supervised fine-tuning, we optimize the representation of planning inputs to suppress hallucinations in task responses."
              },
              {
                "subtitle": "상황별 동적 디코딩",
                "desc": "추론 과정에서는 DAD(Dynamic Autonomous Driving Decoding)라는 방식을 제안했는데요. 이는 주행 장면의 복잡도에 따라 디코딩 모드를 유연하게 조절하는 기술입니다.",
                "evidence": "At inference time, we propose Dynamic Autonomous Driving Decoding (DAD), which adaptively adjusts decoding modes according to scene complexity."
              },
              {
                "subtitle": "성능 및 효율성 검증",
                "desc": "NAVSIM, nuScenes, DriveCoT 데이터셋으로 실험해 본 결과, 같은 구조를 가진 기존 자기회귀 기반 시각-언어 모델보다 뛰어난 성능을 보였습니다. 또한 다른 구조의 시스템들과 비교했을 때 성능과 계산 비용 사이에서 더 유리한 균형을 달성했다고 연구진은 주장했습니다.",
                "evidence": "Experiments on the NAVSIM closed loop benchmark and the nuScenes and DriveCoT open loop datasets show that MD-Drive outperforms autoregressive VLM baselines with the same architecture, while achieving a more favorable balance between performance and computational cost than systems with different architectures through discrete diffusion training and inference."
              }
            ],
            "one_line": "이산 확산 모델을 자율주행에 맞게 다단계로 최적화하여 성능을 개선했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 1,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.15223",
          "title": "guardscope: Measuring Which Actions Runtime Controls Check in LLM Agent Systems",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15223"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "LLM 에이전트가 외부 시스템을 쓸 때 보안 통제가 어디까지 닿는지 알기 어려웠어요",
            "easy1_desc": "거대언어모델(LLM) 에이전트가 도구를 호출해 외부 시스템을 움직일 때, 기업들은 이를 감시하려고 에이전트 게이트웨이 같은 보안 통제 장치를 둡니다. 그런데 이 장치가 에이전트의 모든 행동을 다 볼 수 있는 건 아니거든요. 에이전트는 도구 호출 외에도 여러 경로로 움직일 수 있는데, 보안 장치가 설치된 지점을 지나지 않는 행동은 아예 감시할 수 없다는 문제가 있었던 겁니다. 쉽게 말하면, 보안 장치가 어디를 지키고 어디를 놓치는지 정확히 잴 방법이 없었다는 말이에요.",
            "easy1_evidence": "However, a control can only evaluate the actions that cross the point where it is placed, and an agent can act through more paths than the tool-call channel; no existing work measures this coverage against kernel-level ground truth.",
            "easy2_title": "보안 장치가 에이전트의 행동을 제대로 감시하는지 측정하는 가드스코프를 만들었어요",
            "easy2_desc": "연구진은 가드스코프(guardscope)라는 프레임워크를 개발해 보안 장치의 감시 범위를 측정할 수 있게 했습니다. 먼저 정적 단계에서 에이전트의 15가지 행동 경로 중 보안 장치가 어디를 확인할 수 있는지 예측하고, 이후 실제 환경에서 커널 수준의 기록과 대조해 행동이 감시되었는지, 우회되었는지, 차단되었는지 분류하는 방식이에요. 이렇게 하면 보안 장치 개발자가 자기 제품이 어떤 경로를 검사하는지 검증된 자료로 증명할 수 있게 됩니다. 결과적으로 보안 장치의 감시 성능을 객관적으로 확인할 수 있다는 장점이 생긴 셈이에요.",
            "easy2_evidence": "In this paper, we present guardscope, a framework that makes this coverage measurable.",
            "topic": "LLM 에이전트 시스템에서 보안 통제 장치가 에이전트의 행동을 얼마나 포괄적으로 감시하는지 측정하는 방법론을 제안했어요.",
            "topic_evidence": "In this paper, we present guardscope, a framework that makes this coverage measurable.",
            "points": [
              {
                "subtitle": "가드스코프의 측정 단계",
                "desc": "가드스코프는 두 단계로 작동하는데요, 먼저 정적 단계에서 에이전트의 15가지 행동 경로 중 보안 장치가 감시할 수 있는 범위를 예측합니다. 그다음 경험적 단계에서는 8가지 토폴로지 설계 중 하나를 적용한 환경에서 실제 작업을 수행하며, 보안 장치의 기록과 커널 수준의 진실 값을 대조해 행동을 분류합니다.",
                "evidence": "guardscope works in two stages: a static stage that predicts which of an agent's 15 action paths a control can check from its source, and an empirical stage that runs a fixed workload on a deployment that realizes one of eight topology designs and classifies every executed action as checked, bypassed, or prevented by reconciling the control's decision records against kernel-level ground truth."
              },
              {
                "subtitle": "보안 통제 검증의 투명성",
                "desc": "연구진은 이 프레임워크를 통해 보안 장치 개발자가 자신의 제품이 어떤 경로를 검사하는지 투명하게 공개할 수 있다고 주장했습니다. 커널 수준에서 검증된 프로토콜을 사용하기 때문에 보안 장치의 감시 성능에 대한 주장을 객관적으로 입증할 수 있다는 겁니다.",
                "evidence": "guardscope makes a control's coverage claim verifiable: a runtime control developer can publish which paths its product inspects under a kernel-verified protocol."
              },
              {
                "subtitle": "실제 환경 실험",
                "desc": "연구진은 마이크로소프트의 에이전트 거버넌스 툴킷과 에이전트 게이트웨이 등 실제 보안 도구와 두 가지 에이전트 하네스를 사용해 실험을 진행했습니다. 이를 통해 가드스코프가 실제 환경에서 보안 장치의 감시 범위를 측정하는 데 유용함을 확인했습니다.",
                "evidence": "We conducted experiments with two agent harnesses and real runtime controls, including Microsoft's agent governance toolkit and agentgateway."
              }
            ],
            "one_line": "LLM 에이전트의 보안 통제 감시 범위를 측정하는 프레임워크를 개발했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [
              "easy1_title 한 줄 아님/너무 김(46자)"
            ],
            "flags": [],
            "tag": "AI 안전·평가",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.15091",
          "title": "Advancing Weighted Partial MaxSAT Solving via Differentiable GPU Guidance",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15091"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 제약 조건과 가중치를 동시에 다루기가 어려웠어요",
            "easy1_desc": "가중치가 있는 부분 최대 만족 문제(WPMAX-SAT)를 풀 때, 반드시 지켜야 하는 제약 조건과 점수를 매기는 가중치 조건을 동시에 만족시키는 게 핵심 과제였거든요. 기존 방식은 이 둘의 성격이 달라서 한꺼번에 최적화하기가 까다로웠다는 말이에요. 연구진은 이 문제를 해결하기 위해 하드 제약 조건을 먼저 만족시키고 나서 가중치를 최적화하는 계층적 손실 함수를 도입했어요. 쉽게 말하면, GPU가 문제의 구조를 더 잘 이해하도록 유도한 셈이에요.",
            "easy1_evidence": "The central challenge in extending differentiable optimization to WPMAX-SAT is the hard/soft clause asymmetry: hard clauses represent inviolable feasibility constraints while soft clauses carry weights.",
            "easy2_title": "GPU로 미리 방향을 잡고 CPU 솔버가 더 빨리 답을 찾게 했어요",
            "easy2_desc": "연구진은 GPU를 활용해 학습 데이터 없이도 변수들의 값을 최적화한 뒤, 이 정보를 CPU 솔버에 전달하는 하이브리드 방식을 개발했어요. GPU가 찾은 유망한 변수 값을 CPU 솔버에 주입하거나 초기값으로 설정해 주는 방식인데요, 이렇게 했더니 기존 최고 성능의 솔버들보다 최대 4.9% 더 나은 점수를 얻었다는 거예요. 덕분에 이전 대회 기록을 뛰어넘는 더 좋은 해를 찾을 가능성도 열린 셈입니다.",
            "easy2_evidence": "Our framework transforms the GPU-optimized variable logits to high-confidence assignments and transfers them to CPU solvers via two complementary modes: partial guidance, which injects the most confident perturbed partial variable assignments as soft clauses into $N$ parallel solver instances, and phase initialization, which guides the CDCL solver's internal branching polarity with the full GPU assignment as a warm start to preserve the problem's originality.",
            "topic": "가중치가 있는 부분 최대 만족 문제를 해결하기 위해 GPU 기반의 미분 가능한 최적화 기법을 CPU 솔버와 결합한 하이브리드 프레임워크를 제안했어요.",
            "topic_evidence": "We present a GPU-CPU hybrid framework for Weighted Partial MaxSAT (WPMAX-SAT) that complements state-of-the-art CPU solvers with differentiable GPU optimization.",
            "points": [
              {
                "subtitle": "계층적 손실 함수 설계",
                "desc": "하드 제약 조건과 소프트 가중치 조건 사이의 불균형을 해결하기 위해 계층적 손실 함수를 도입했어요. 이를 통해 GPU의 경사 하강법이 문제의 제약 구조를 우선적으로 학습하도록 만들었거든요. 결과적으로 최적화 과정이 문제의 성격에 맞게 정렬되도록 한 겁니다.",
                "evidence": "We introduce a hierarchical differentiable loss that prioritizes hard clause satisfaction before optimizing the weighted soft objective, ensuring that GPU gradient descent leans towards the constraint structure of WPMAX-SAT."
              },
              {
                "subtitle": "GPU-CPU 정보 전달 방식",
                "desc": "GPU에서 최적화된 변수 정보를 CPU 솔버로 전달하기 위해 두 가지 방식을 사용했어요. 하나는 변수 할당 정보를 소프트 절로 주입하는 부분 안내 방식이고, 다른 하나는 솔버의 초기 분기 방향을 설정하는 위상 초기화 방식이에요. 이 두 가지가 서로 보완하며 솔버의 성능을 높이는 역할을 합니다.",
                "evidence": "Our framework transforms the GPU-optimized variable logits to high-confidence assignments and transfers them to CPU solvers via two complementary modes: partial guidance, which injects the most confident perturbed partial variable assignments as soft clauses into $N$ parallel solver instances, and phase initialization, which guides the CDCL solver's internal branching polarity with the full GPU assignment as a warm start to preserve the problem's originality."
              },
              {
                "subtitle": "성능 평가 및 결과",
                "desc": "MSE 2024 벤치마크의 229개 사례를 대상으로 기존 우승 솔버들과 비교 실험을 진행했어요. 300초 제한 시간 내에 기존 솔버들보다 최대 4.9% 향상된 점수를 기록했거든요. 연구진은 이 프레임워크가 기존에 알려진 최상의 해를 능가하는 결과를 낼 잠재력이 있다고 주장했어요.",
                "evidence": "We evaluate on all 229 instances of the MSE 2024 (most recent due to cancellation in 2025) anytime weighted benchmark with the top 2 winners as baselines; our hybrid framework improves the average solution score by up to 4.9% over tt-open-wbo-inc-Glucose and 4.8% over SPB-MaxSAT-c-FPS at a 300-second time limit, with the potential to obtain better solutions surpassing the best known solution recorded in the competition evaluation."
              }
            ],
            "one_line": "GPU 최적화와 CPU 솔버를 결합해 WPMAX-SAT 해결 성능을 높였어요.",
            "topic_tag": "수학·이론",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "수학·이론",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.14965",
          "title": "Early Signals, Strong Decisions: Prefix-Guided Sampling for Parallel Test-Time Scaling",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14965"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식은 쓸데없는 계산을 너무 많이 했거든요",
            "easy1_desc": "대규모 언어 모델(LLM)이 추론할 때 여러 경로를 만들어 답을 찾는 병렬 테스트 타임 스케일링(TTS)을 쓰는데요, 문제는 질이 낮은 경로까지 끝까지 다 계산해 본다는 점이에요. 이게 왜 문제냐면, 결과적으로 쓸데없는 토큰을 많이 써서 계산 효율이 떨어진다는 말이에요. 쉽게 말하면, 정답 가능성이 낮은 경로에까지 자원을 낭비하고 있었던 셈입니다.",
            "easy1_evidence": "However, existing methods remain computationally inefficient, as low-quality paths are fully expanded before being evaluated.",
            "easy2_title": "앞부분만 보고 유망한 경로에만 자원을 몰아줬어요",
            "easy2_desc": "연구진은 짧은 접두사(prefix)만 보고도 내부 신뢰 점수를 매겨서 유망한 경로만 끝까지 생성하는 프리픽스 가이드 샘플링(PreG)을 제안했는데요, 이렇게 하면 전체 계산량을 줄이면서도 추론 성능은 유지할 수 있다는 거예요. 실제로 해 봤더니 기존 병렬 TTS 방식보다 토큰 효율이 좋고 계산량도 줄었다고 하거든요. 쉽게 말하면, 선택과 집중을 통해 효율을 높인 겁니다.",
            "easy2_evidence": "Building on this insight, we introduce Prefix-Guided Sampling (PreG), a method that reallocates computation by first generating short prefixes, ranking them using internal confidence scores, and then completing only the most promising candidates.",
            "topic": "LLM의 추론 성능을 높이기 위해 내부 신뢰 점수를 활용하여 계산 효율을 최적화하는 새로운 샘플링 기법을 제안했어요.",
            "topic_evidence": "In this work, we aim to improve the use of internal confidence signals for better model performance and computational efficiency.",
            "points": [
              {
                "subtitle": "신뢰 점수의 역할 재정의",
                "desc": "연구진은 신뢰 점수가 결정 경계(decision boundary) 근처의 질문에서 가장 큰 영향을 미친다는 점을 밝혀냈는데요, 짧은 접두사에서 얻은 작은 신호라도 다중 샘플을 합치면 결과에 의미 있는 영향을 줄 수 있다는 거예요.",
                "evidence": "Notably, when amplified by multi-sample aggregation, even small confidence signals derived from short prefixes can meaningfully influence outcomes in these boundary cases."
              },
              {
                "subtitle": "PreG 기법의 작동 방식",
                "desc": "제안한 PreG는 먼저 짧은 접두사를 생성한 뒤 내부 신뢰 점수로 순위를 매기고, 가장 유망한 후보만 끝까지 완성하는 방식을 취합니다. 이 전략을 통해 전체 토큰 사용량을 줄이면서도 경로의 품질은 그대로 유지할 수 있다는 거예요.",
                "evidence": "This strategy reduces token usage while maintaining gains in path quality."
              },
              {
                "subtitle": "성능 및 효율성 검증",
                "desc": "이론적 분석을 통해 PreG가 고정된 계산 예산 안에서 결정 경계 마진을 넓혀 신호를 강화함을 보였는데요, 여러 벤치마크 실험에서도 기존 병렬 TTS 방식보다 성능이 뛰어나고 계산 효율도 높았다고 연구진은 주장했어요.",
                "evidence": "Empirically, our method consistently outperforms standard parallel TTS approaches across benchmarks, while significantly improving token efficiency and reducing overall computation."
              }
            ],
            "one_line": "내부 신뢰 점수를 활용해 유망한 경로만 선택적으로 생성하는 샘플링 기법을 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.14910",
          "title": "MuEdit: An efficient multi-task editing method towards inter-domain knowledge conflicts",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14910"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "여러 분야 지식을 한꺼번에 고치려니 서로 충돌이 생기더라고요",
            "easy1_desc": "거대 언어 모델(LLM)은 다양한 분야의 지식을 자주 업데이트해야 하는데, 기존의 수정 방식들을 여러 작업에 순차적으로 적용해 봤더니 성능이 무너지는 문제가 생겼거든요. 연구진이 그 원인을 찾아봤더니, 서로 다른 분야의 작업들이 각기 다른 기하학적 구조를 만들면서 모델의 공통된 여유 공간인 널 스페이스(null space)를 급격히 줄여버리기 때문이라는 거예요. 쉽게 말하면, 지식을 고칠 때 서로 방해하지 않고 수정할 수 있는 여유가 부족해져서 충돌이 일어난다는 말이에요.",
            "easy1_evidence": "We trace this collapse to inter-domain null-space misalignment: heterogeneous tasks induce distinct Jacobian geometries, causing their common null space to shrink dramatically and leaving insufficient admissible directions for conflict-free updates.",
            "easy2_title": "충돌 지수를 계산해서 방해를 최소화하는 새로운 수정법을 만들었어요",
            "easy2_desc": "그래서 연구진은 충돌 지수(Conflict Index)를 도입해 이런 기하학적 간섭을 수치로 측정하고, 이를 해결하기 위해 뮤에디트(Mu-Edit)라는 방식을 제안했는데요. 우선 작업 순서를 조절해 간섭을 최소화하고, 그것만으로 부족할 때는 동적 저차원 근사(dynamic low-rank approximation)를 써서 널 스페이스를 다시 넓히는 방식을 썼거든요. 이렇게 했더니 기존 방식보다 여러 작업을 동시에 수정하는 성능이 훨씬 좋아졌고, 새로운 작업이 계속 추가되는 상황에서도 효과가 유지된다고 주장했어요.",
            "easy2_evidence": "We propose the Conflict Index to quantify this geometric interference, and introduce Mu-Edit, which mitigates multi-task conflicts via (1) conflict-aware ordering to minimize cumulative interference, and (2) dynamic low-rank approximation to expand the null space when ordering alone is insufficient.",
            "topic": "서로 다른 분야의 지식을 수정할 때 발생하는 충돌 문제를 해결하기 위해 기하학적 간섭을 줄이는 새로운 모델 수정 기법을 제안했어요.",
            "topic_evidence": "MuEdit: An efficient multi-task editing method towards inter-domain knowledge conflicts",
            "points": [
              {
                "subtitle": "충돌 원인 분석",
                "desc": "서로 다른 분야의 작업들이 모델의 야코비안(Jacobian) 기하 구조를 다르게 변화시키면서, 지식을 수정할 수 있는 공통의 널 스페이스를 좁히는 현상을 확인했어요. 뭔 소리냐면, 작업 간의 기하학적 불일치가 지식 업데이트를 방해하는 근본 원인이라는 거예요.",
                "evidence": "We trace this collapse to inter-domain null-space misalignment: heterogeneous tasks induce distinct Jacobian geometries, causing their common null space to shrink dramatically and leaving insufficient admissible directions for conflict-free updates."
              },
              {
                "subtitle": "뮤에디트(Mu-Edit)의 해결 전략",
                "desc": "간섭을 줄이기 위해 충돌 지수를 활용한 작업 순서 최적화와, 널 스페이스를 강제로 확장하는 동적 저차원 근사 방식을 결합했어요. 순서만으로 해결되지 않는 간섭까지 동적으로 대응할 수 있다는 장점이 있거든요.",
                "evidence": "We propose the Conflict Index to quantify this geometric interference, and introduce Mu-Edit, which mitigates multi-task conflicts via (1) conflict-aware ordering to minimize cumulative interference, and (2) dynamic low-rank approximation to expand the null space when ordering alone is insufficient."
              },
              {
                "subtitle": "성능 검증",
                "desc": "5개 기능 분야와 3개 백본 모델에서 실험해 봤더니, 기존 방식보다 다중 작업 수정 성능이 훨씬 뛰어났고 모델의 일반적인 능력도 잘 보존됐다고 해요. 특히 작업이 순차적으로 들어오는 상황에서도 효과적이라는 점을 확인했거든요.",
                "evidence": "Experiments across five functional domains and three backbones show that Mu-Edit significantly outperforms existing baselines in multi-task editing performance while preserving general capabilities, and remains effective under incremental task arrival."
              }
            ],
            "one_line": "다중 작업 지식 수정 시 발생하는 충돌을 해결하는 기법을 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "",
            "limit_evidence": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                false
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "5/6",
            "evidence_all": false,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.14794",
          "title": "When Is Proof-Step Verification Worth Its Cost? Operating Requirements of Certify-or-Decline Verification for Open-Weight Mathematical Reasoning",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14794"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "수학 문제를 풀 때 검증 과정을 거치면 얼마나 좋아질까",
            "easy1_desc": "거대언어모델(LLM)이 푼 수학 문제의 답을 단계별로 쪼개서 다시 검증하는 방식을 써 봤는데요, GPQA나 AIME-2025 같은 어려운 문제에서 정답률이 31%에서 46%까지 크게 오르는 효과가 나타났거든요. 하지만 모든 문제에 답할 수 있는 건 아니라서, 실제로는 전체 시도의 21%에서 35% 정도만 검증을 통과해 답을 내놓는다는 한계가 있어요. 쉽게 말하면, 정답의 정확도는 확실히 높여주지만 그만큼 풀 수 있는 문제의 범위는 좁아지는 셈이에요.",
            "easy1_evidence": "Certification raises answer-key-match precision by 31 percentage points on the strong GPQA configuration and 46 on AIME, while answering only 35% and 21% of attempts.",
            "easy2_title": "검증 과정에서 생기는 문제점과 한계를 짚어 봤어",
            "easy2_desc": "검증 과정을 자세히 들여다봤더니, 검증기(judge)가 판단하기도 전에 아예 잘못된 증명 과정을 만드는 경우가 꽤 많았거든요. 실제로 88개 문제 중 52개가 이런 식으로 실패했는데, 검증기 자체의 성능도 중요하지만 증명 단계가 제대로 만들어지는지가 더 큰 관건이라는 말이에요. 게다가 사람이나 공식적인 도구로 정답을 확인한 게 아니라서, 검증 결과가 정말로 옳은지 믿기 어렵다는 점도 연구진은 지적하고 있어요.",
            "easy2_evidence": "A diagnostic sample reveals a distinct failure mode: 52 of 88 completed problems end in invalid proof construction without ever reaching a judge.",
            "topic": "오픈 웨이트 모델의 수학적 추론을 위해 증명 단계를 검증하는 방식의 성능과 한계를 분석했어요.",
            "topic_evidence": "We evaluate this pipeline on open-weight models across GPQA, AIME-2025, and a MATH-500 subset.",
            "points": [
              {
                "subtitle": "검증 방식의 성능 분석",
                "desc": "GPQA와 AIME 같은 데이터셋에서 증명 단계 검증을 적용했더니 정답률은 크게 올랐지만, MATH-500처럼 이미 성능이 높은 데이터셋에서는 정답률 상승 폭이 5포인트에 그쳤거든요. 오히려 검증을 위해 답을 가려내는 과정에서 전체 문제의 13%에서 27%를 포기해야 하는 손실이 발생했다는 거예요.",
                "evidence": "On near-ceiling MATH-500, gains are at most 5 points at a loss of 13-27 points of coverage."
              },
              {
                "subtitle": "검증기와 선택 방식의 비교",
                "desc": "출력 토큰 수를 맞춘 자기 일관성(self-consistency) 선택 방식과 검증기를 비교해 봤는데요, 검증기가 87.6%의 정밀도를 보인 반면 선택 방식은 82.9%를 기록했거든요. 두 방식의 차이는 4.8포인트 정도로, 검증기가 조금 더 나은 결과를 보였다고 연구진은 주장했어요.",
                "evidence": "An output-token-matched self-consistency selector obtains 82.9% precision at 35% coverage, compared with the verifier's pooled 87.6% (paired difference: +4.8 points, 95% interval [-8.2, 18.5])."
              },
              {
                "subtitle": "검증 결과의 신뢰성 문제",
                "desc": "외부 LLM을 통해 검증된 증명 체인을 확인해 보니 61.0%에서 67.6% 정도만 수용되었는데, 이는 정답지와의 일치율인 87.6%보다 낮은 수치거든요. 연구진은 이런 검증 방식이 인간이나 공식적인 정답 확인 과정이 없다는 점을 지적하며, 실행 실패와 정답 정밀도 등을 따로 보고해야 한다고 강조했어요.",
                "evidence": "Finally, external-LLM acceptance of rendered certified chains is 61.0-67.6%, compared with 87.6% answer-key match."
              }
            ],
            "one_line": "수학 문제 풀이의 증명 단계 검증 방식이 가진 성능과 한계를 분석했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "현재의 검증 방식은 인간이나 공식적인 정답 확인 과정이 결여되어 있어 결과의 정확성을 보장하기 어렵다는 한계가 있어요.",
            "limit_evidence": "These audits lack human or formal-kernel ground truth."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.14544",
          "title": "Zugwise: Domain-Aware Game Reconstruction for Digitizing Handwritten Chess Scoresheets",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14544"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "손으로 쓴 체스 기록지를 읽을 때 생기는 조용한 오류가 문제였어요",
            "easy1_desc": "기존에는 단순히 글자를 인식하고 체스 규칙에 맞는지 확인하는 방식으로 기록지를 디지털화했는데요, 문제는 글자를 잘못 읽어도 체스 규칙상 말이 되는 수라면 시스템이 이를 그대로 통과시킨다는 거예요. 이렇게 되면 이후의 모든 수들이 잘못된 판 위에서 해석되면서 오류가 걷잡을 수 없이 커지게 되거든요. 쉽게 말하면, 틀린 줄도 모르고 계속해서 잘못된 길로 가는 셈이라는 말이에요.",
            "easy1_evidence": "A misread that yields an illegal move is loud.",
            "easy2_title": "체스 게임의 논리를 활용해 잘못된 수를 바로잡는 Zugwise를 만들었어요",
            "easy2_desc": "연구진은 단순히 글자를 읽는 대신, 체스 엔진의 기술을 활용해 사람이 실제로 이 수를 적었을 법한지를 판단하는 Zugwise라는 시스템을 개발했어요. 잘못된 수를 찾아내는 탐지기를 도입해 오류를 즉시 드러내고, 두 명의 기록지를 비교해 차이가 나면 사람이 직접 검토하게 했거든요. 그 결과, 조용한 오류가 16개에서 1개로 줄어드는 등 정확도가 크게 높아졌다는 거예요.",
            "easy2_evidence": "We therefore treat the task as game reconstruction and present Zugwise, which repurposes computer-chess machinery (quiescence search, static exchange evaluation, pin detection) to ask not \"what should be played?\" but \"could a human plausibly have written this?\"",
            "topic": "손으로 쓴 체스 기록지를 체스 게임의 규칙과 논리를 활용해 정확하게 디지털화하는 Zugwise 시스템을 제안했어요.",
            "topic_evidence": "Digitizing handwritten chess scoresheets has been studied as a handwriting-recognition problem: read the move in each box and check that it is legal.",
            "points": [
              {
                "subtitle": "게임 재구성 방식 도입",
                "desc": "단순한 필기 인식에서 벗어나 체스 엔진의 정적 교환 평가나 핀 탐지 같은 기술을 활용해 기록된 수가 체스 게임의 맥락에서 타당한지 검증했어요. 뭔 소리냐면, 글자 모양만 보는 게 아니라 실제 체스 게임의 흐름을 이해하려 했다는 말이에요.",
                "evidence": "We therefore treat the task as game reconstruction and present Zugwise, which repurposes computer-chess machinery (quiescence search, static exchange evaluation, pin detection) to ask not \"what should be played?\" but \"could a human plausibly have written this?\""
              },
              {
                "subtitle": "오류 탐지와 교정 성능",
                "desc": "오류 탐지기를 통해 잘못된 수를 즉시 찾아내고, 두 사람의 기록지를 대조해 불일치하는 부분을 사람이 검토하도록 설계했어요. 실제 토너먼트 데이터로 실험했을 때, 조용한 오류가 16개에서 1개로, 50개에서 13개로 줄어드는 성과를 보였거든요.",
                "evidence": "In oracle replay of two tournament sections, a release adding them cuts silent errors from 16 to 1 and from 50 to 13."
              },
              {
                "subtitle": "학습 모델을 통한 정확도 향상",
                "desc": "CTC 재점수화와 사람의 수 예측 모델을 결합해 올바른 수를 찾아낼 확률을 58.8%에서 78.0%까지 끌어올렸어요. 별도의 재학습 없이도 새로운 데이터에서 성능이 유지되는 모습을 보였다는 게 연구진의 설명이에요.",
                "evidence": "Two learned signals, CTC re-scoring against the recognizer's raw output and a Maia-style human-move prior, raise the correct fix's top-rank rate from 58.8% to 78.0% of the replacement decisions where it is a candidate, and hold without refitting on a later section."
              }
            ],
            "one_line": "체스 엔진 기술을 활용해 손으로 쓴 체스 기록지의 오류를 탐지하고 디지털화했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "기존의 방식보다 이 시스템이 더 빠르거나 정확하다고 단정할 수는 없다고 밝혔어요.",
            "limit_evidence": "We do not establish that either workflow is faster or more accurate."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "6/6",
            "evidence_all": true,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": true,
            "show_limit": true
          }
        }
      ],
      "backlog": {
        "n_waiting_all": 75,
        "oldest_day": "2026-11-14",
        "n_dropped_today": 0,
        "n_backlog_done_today": 88
      },
      "sources": [
        {
          "name": "arXiv AI(cs.AI)",
          "field": "cs.AI",
          "got": 0,
          "new_cards": 0
        },
        {
          "name": "arXiv 전력·제어(eess.SY)",
          "field": "eess.SY",
          "got": 0,
          "new_cards": 0
        },
        {
          "name": "허깅페이스 오늘의 논문",
          "field": "허깅페이스",
          "got": 50,
          "new_cards": 2
        }
      ],
      "calls": {
        "summary": {
          "val": 90,
          "source": "v2_secretary/결과/논문/2026-11-15_논문.json"
        },
        "flow": {
          "val": 1,
          "source": "v2_secretary/결과/논문/2026-11-15_논문.json"
        },
        "failed": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-15_논문.json"
        },
        "http429": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-15_논문.json"
        }
      },
      "cap": {
        "val": 90,
        "source": "v2_secretary/결과/논문/2026-11-15_논문.json"
      },
      "secs": {
        "val": 1071,
        "source": "v2_secretary/결과/논문/2026-11-15_논문.json"
      },
      "no_ai": false,
      "notes": [
        "arXiv cs.AI 오늘 0편",
        "arXiv eess.SY 오늘 0편",
        "1차 출처 몫: eess.SY 11/40 · cs.AI 31/31 · 허깅페이스 27/27 · 이월 21편"
      ],
      "source": "v2_secretary/결과/논문/2026-11-15_논문.json",
      "abstracts": {
        "file": "panel_abstracts.js",
        "n": 90,
        "source": "v2_secretary/결과/논문/초록/2026-11-15.json"
      }
    }
  },
  "machine_map": {
    "total_sections": 31,
    "counts_by_kind": {
      "run": 16,
      "separate": 9,
      "none": 6
    },
    "source": "구간_주소표.md",
    "sections": [
      {
        "addr": "인풋-1",
        "group": "인풋",
        "name": "출처 목록 (넣자/빼자)",
        "files": "읽는 코드 `sources.py` → `daily.collect()` · 사용자 `gate_rules/출처_목록.txt`(출처 38곳 + 구글뉴스 검색어 20개·제외어, 11-11 코드에서 꺼냄) · AI `gate_rules/출처_추천_AI.txt`(되먹임-1) · `인풋_분류표.json`(후보 156개, 추천 참고로만)",
        "status": "돎 (11-11부터 파일에서 읽음. 꺼내기 전·뒤 출처 38/38·글 1,002개 같음 `[실측]`). 층: 깊게 읽기 / 제목만(거푸집2 본문 안 읽음) / 보관만(바로 제외 보관함). 바꾼 줄은 `data/rules_history.jsonl`",
        "status_kind": "run",
        "editable": "**`gate_rules/출처_목록.txt`** — 켬/끔 · 층 · 검색어",
        "source": "구간_주소표.md",
        "line_in": "받음: 코드 내 출처 38곳 + 구글뉴스 검색어 20개 목록",
        "line_rule": "규칙: daily.py SOURCES 배열 (5층 후보 156개 표와는 아직 미연결)",
        "line_out": "내보냄: 수집 대상 38곳 (v2_secretary/결과/2026-11-16_하루_전체.md)",
        "metrics": {
          "in": 156,
          "out": 38,
          "calls": 0,
          "secs": 0.0,
          "num_source": "인풋_분류표.json · v2_secretary/daily.py"
        }
      },
      {
        "addr": "인풋-2",
        "group": "인풋",
        "name": "모으기",
        "files": "`daily.py` `collect()` · `dart_api.py`",
        "status": "돎",
        "status_kind": "run",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 출처 38곳 RSS·웹·OpenDART 공시 목록",
        "line_rule": "규칙: daily.collect() + dart_api.as_items(날짜)",
        "line_out": "내보냄: 오늘 들어온 글 1964건 (v2_secretary/결과/문앞/2026-11-16_문앞교통정리_길별.json)",
        "metrics": {
          "in": 38,
          "out": 1964,
          "calls": 0,
          "secs": 78.5,
          "num_source": "v2_secretary/결과/문앞/2026-11-16_문앞교통정리_길별.json"
        }
      },
      {
        "addr": "인풋-3",
        "group": "인풋",
        "name": "문 앞 교통정리",
        "files": "`gate.py`",
        "status": "돎. 우선순위: 되살리기 > 강한 반키워드('!'·AI 강함) > 관심 키워드 > 보통 반키워드 (11-11)",
        "status_kind": "run",
        "editable": "`gate_rules/길_규칙.txt` · `반키워드.txt`",
        "source": "구간_주소표.md",
        "line_in": "받음: 들어온 글 1964건 (새 글 160 + 이미 본 글 1804)",
        "line_rule": "규칙: gate_rules/길_규칙.txt · 관심_키워드.txt · 반키워드.txt (AI 0콜)",
        "line_out": "내보냄: 거푸집1 0 · 거푸집2 12 · 뉴스 145 · 제외 3 · 논문T 0 · 모름 0",
        "metrics": {
          "in": 1964,
          "out": 160,
          "calls": 0,
          "secs": 6.4,
          "num_source": "v2_secretary/결과/문앞/2026-11-16_문앞교통정리_길별.json"
        }
      },
      {
        "addr": "인풋-4",
        "group": "인풋",
        "name": "제외 보관함",
        "files": "`exclude.py`",
        "status": "돎",
        "status_kind": "run",
        "editable": "`gate_rules/되살리기.txt`",
        "source": "구간_주소표.md",
        "line_in": "받음: 문 앞 제외 규칙에 걸린 글 3건",
        "line_rule": "규칙: exclude.py + gate_rules/되살리기.txt (관심 키워드 든 글 표시)",
        "line_out": "내보냄: 결과/제외보관함/제외보관함.csv (2816행 누적)",
        "metrics": {
          "in": 3,
          "out": 3,
          "calls": 0,
          "secs": 0.1,
          "num_source": "v2_secretary/결과/제외보관함/제외보관함.csv"
        }
      },
      {
        "addr": "인풋-5",
        "group": "인풋",
        "name": "공식 숫자 연결 (한은·미국·공시)",
        "files": "`ecos.py` · `fred.py` · `dart_api.py`",
        "status": "돎",
        "status_kind": "run",
        "editable": "`gate_rules/ECOS_지표짝.txt` · `FRED_지표.txt`",
        "source": "구간_주소표.md",
        "line_in": "받음: 한국은행 ECOS · 미국 FRED · OpenDART 공식 API",
        "line_rule": "규칙: gate_rules/ECOS_지표짝.txt · FRED_지표.txt 대조",
        "line_out": "내보냄: 한은 표 35행 · FRED 표 11행 · DART 표 0행(오늘)",
        "metrics": {
          "in": 0,
          "out": 11,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/결과/거푸집1/*.csv"
        }
      },
      {
        "addr": "인풋-6",
        "group": "인풋",
        "name": "발표 일정표",
        "files": "—",
        "status": "없음",
        "status_kind": "none",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 주요 경제지표·실적 발표 일정 (예정)",
        "line_rule": "규칙: 아직 코드 없음 (설계 대기)",
        "line_out": "내보냄: 없음",
        "metrics": {
          "in": 0,
          "out": 0,
          "calls": 0,
          "secs": 0.0,
          "num_source": "구간_주소표.md"
        }
      },
      {
        "addr": "처리-1",
        "group": "처리",
        "name": "거푸집1 숫자",
        "files": "`plate1.py`",
        "status": "돎 (AI 0콜)",
        "status_kind": "run",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 문 앞 거푸집1 길 0건",
        "line_rule": "규칙: plate1.py 정규식 숫자 추출 + 직전 값 계산·공식 API 대조 (AI 0콜)",
        "line_out": "내보냄: 오늘 DART 표 0건 · 한은 0건 · FRED 11종",
        "metrics": {
          "in": 0,
          "out": 0,
          "calls": 0,
          "secs": 10.3,
          "num_source": "v2_secretary/결과/거푸집1/2026-11-16_거푸집1.md"
        }
      },
      {
        "addr": "처리-2",
        "group": "처리",
        "name": "거푸집2 요약",
        "files": "`body.py` · `plate2.py`",
        "status": "돎 (글당 AI 1콜)",
        "status_kind": "run",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 문 앞 거푸집2 길 12건 (보도자료·리포트·연방관보)",
        "line_rule": "규칙: body.py 본문 추출(0콜) → plate2.py 글당 AI 1콜 요약 + 파이썬 원문·숫자 대조 검사",
        "line_out": "내보냄: 오늘 요약 11건 (결과/거푸집2/2026-11-16_거푸집2.md)",
        "metrics": {
          "in": 12,
          "out": 11,
          "calls": 11,
          "secs": 82.2,
          "num_source": "v2_secretary/결과/거푸집2/2026-11-16_거푸집2.md"
        }
      },
      {
        "addr": "처리-3",
        "group": "처리",
        "name": "뉴스 사건 묶기",
        "files": "`news.py`",
        "status": "돎 (하루 AI 2콜)",
        "status_kind": "run",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 문 앞 뉴스 길 145건",
        "line_rule": "규칙: news.py 하루 AI 2콜(A·B 독립 묶기 대조) + 없는 숫자·중복 검사",
        "line_out": "내보냄: 사건 9개 묶음 (결과/뉴스/2026-11-16_뉴스사건.json)",
        "metrics": {
          "in": 145,
          "out": 9,
          "calls": 2,
          "secs": 17.5,
          "num_source": "v2_secretary/결과/뉴스/2026-11-16_뉴스사건.json"
        }
      },
      {
        "addr": "처리-4",
        "group": "처리",
        "name": "논문 풀이",
        "files": "`papers.py` · 규칙 `gate_rules/논문_설정.txt`·`논문_주제.txt`·`논문_키워드.txt` → `결과/논문/`",
        "status": "**돎 — 11-14 깃허브 손 실행 60편 성공(낮 예약은 아직 한 번도 제때 안 시작). 11-14 세션 다: 화면 챕터 5 '논문' 탭 + v2-papers 화면 보내기 — 복사본 시험 통과, 깃허브 올림 `440273f` · 18:11 손 실행에서 아이폰 주소에 논문 탭 뜸 확인** · 새벽 `run_day` 5-1 단계(0콜 카드) + 낮 `v2-papers.yml`(풀이) (11-14 세션 나) · 그 전 (11-14 세션 가: 복사본 시험 통과 — 0콜 5일·AI 40콜 근거 일치 95.8%·97.5%·배선 6/6. 11-14 아침 손봄: 초록 날짜별 파일·출처 분야 상한·브리핑 10자리·`--from-cards`·`--revive`. 다음 = 세션 나: 새벽 바퀴엔 `--no-ai`만, AI 풀이는 새 예약 `v2-papers.yml` 낮 12~15시, 지시서 루트 `다음세션_처리4_논문.md`)",
        "status_kind": "separate",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: [11월 15일(어제) 논문 — 이 화면 기준일(2026-11-16)보다 앞선 날, 오늘 논문은 논문 풀이 뒤] 새벽 바퀴 5-1(0콜)이 모으기 원본(arXiv·허깅페이스)으로 만든 새 논문 카드 2편",
        "line_rule": "규칙: papers.py — 새벽 카드(0콜) → 새벽 바퀴가 끝나면 바로 v2-papers(백업 12:07·14:07)가 점수 순으로 편당 AI 1콜 풀이 + 근거 문장 원문 대조 (gate_rules/논문_설정·주제·키워드.txt)",
        "line_out": "내보냄: 풀이 90편(새 카드 2 + 밀린 카드 88) · 새 카드 중 대기 0편 · AI 91콜(그날 합계) · 논문 파일 마지막으로 쓴 시각 2026-11-15 19:57 (v2_secretary/결과/논문/2026-11-15_논문.json)",
        "metrics": {
          "in": 2,
          "out": 90,
          "calls": 91,
          "secs": 1071.0,
          "num_source": "v2_secretary/결과/논문/2026-11-15_논문.json"
        }
      },
      {
        "addr": "처리-5",
        "group": "처리",
        "name": "해석 (수치 모델) — 계산 방법 + 보여 주는 방식",
        "files": "견본 계산 `scratch/build_way_board.py` → 기록 `해석모델_결정판.html`",
        "status": "없음 (설계 확정 11-11: Claude 추천대로. 정식 모듈 코드 0)",
        "status_kind": "none",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 버전1 지표 18개 시계열 (dashboard/data.db history, 2026-11-05까지)",
        "line_rule": "규칙: 설계 확정(급증도·변화시점·칼만추세·시차상관 등 Claude 추천안), 정식 모듈 코드 0 (견본만 scratch/build_way_board.py)",
        "line_out": "내보냄: 견본 해석모델_결정판.html (하루 바퀴 미연결)",
        "metrics": {
          "in": 18,
          "out": 0,
          "calls": 0,
          "secs": 0.0,
          "num_source": "scratch/way_board_data.json"
        }
      },
      {
        "addr": "처리-6",
        "group": "처리",
        "name": "연준 안전시스템 (성명서·연설)",
        "files": "`fed/fed_watch.py` · `fomc.py` · `speech.py`",
        "status": "돎 (새 글이 있을 때만)",
        "status_kind": "run",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 미국 연준 FOMC 성명서·연설·증언 피드",
        "line_rule": "규칙: fed_watch.py → fomc.py(직전 성명서 단어 대조) · speech.py(연설 원문 인용 검사)",
        "line_out": "내보냄: 누적 연설 브리핑 23편 (결과/연준연설/)",
        "metrics": {
          "in": 23,
          "out": 23,
          "calls": 0,
          "secs": 0.1,
          "num_source": "v2_secretary/결과/연준연설/"
        }
      },
      {
        "addr": "처리-7",
        "group": "처리",
        "name": "돌발 감지 X",
        "files": "`module_x.py`",
        "status": "따로 (11-06 하루 시험만)",
        "status_kind": "separate",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 하루 전체 글 모음 (돌발 급증 후보)",
        "line_rule": "규칙: module_x.py (11-06 하루 시험만, 사용자 표시판 숙제 대기)",
        "line_out": "내보냄: 결과/2026-11-06_X돌발.md (따로 보관)",
        "metrics": {
          "in": 0,
          "out": 0,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/결과/2026-11-06_X돌발.md"
        }
      },
      {
        "addr": "처리-8",
        "group": "처리",
        "name": "말투 규칙 (AI·Claude가 쓰는 설명 글의 말투)",
        "files": "규칙 `gate_rules/말투_규칙.txt` · 읽는 코드 `tone.py` → 처리-2(`plate2.py`)·처리-3(`news.py`)·처리-6(`fed/speech.py`·`fed/fomc.py`)",
        "status": "돎 (11-11부터 — 첫 실전은 11-12 05:30 자동 실행, 미확인). **사용자가 고칠 곳: `말투_규칙.txt`**",
        "status_kind": "run",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: gate_rules/말투_규칙.txt (이어서 풀어 주는 말투 규칙)",
        "line_rule": "규칙: tone.py → 거푸집2·연준·뉴스 AI 지시문 4곳 주입 + 딱딱함·예측 표현 검사",
        "line_out": "내보냄: 요약 설명문 3~4문장 말투 적용 (11-11 연결)",
        "metrics": {
          "in": 1,
          "out": 4,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/gate_rules/말투_규칙.txt"
        }
      },
      {
        "addr": "출력-1",
        "group": "출력",
        "name": "중요도 순위",
        "files": "—",
        "status": "없음 (지금은 기사 수 순)",
        "status_kind": "none",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 오늘 처리된 카드들",
        "line_rule": "규칙: 사용자 보류 결정 — 중요도 점수를 매기지 않고 기사 수 순서대로만 정렬",
        "line_out": "내보냄: 뉴스 사건 기사 수 순 정렬",
        "metrics": {
          "in": 9,
          "out": 9,
          "calls": 0,
          "secs": 0.0,
          "num_source": "구간_주소표.md"
        }
      },
      {
        "addr": "출력-2",
        "group": "출력",
        "name": "하루 결과지",
        "files": "`run_day.py` → `v2_secretary/결과/`",
        "status": "돎 (md 5~6장)",
        "status_kind": "run",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 0~5단계 실행 결과 및 요약 파일들",
        "line_rule": "규칙: run_day.py 종합 마크다운 생성 (AI 0콜)",
        "line_out": "내보냄: 결과/2026-11-16_하루_전체.md 외 5종 결과지",
        "metrics": {
          "in": 6,
          "out": 6,
          "calls": 0,
          "secs": 0.1,
          "num_source": "v2_secretary/결과/2026-11-16_하루_전체.md"
        }
      },
      {
        "addr": "출력-3",
        "group": "출력",
        "name": "기계 지도 (오늘 어떤 공식이 무엇을 했나)",
        "files": "`문서/버전2_계획/전수조사_2026-11-10.md` 2장이 초판",
        "status": "손으로 쓴 초판만",
        "status_kind": "separate",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 파이프라인 코드·공식 명세",
        "line_rule": "규칙: 손으로 쓴 초판 (문서/버전2_계획/전수조사_2026-11-10.md 2장)",
        "line_out": "내보냄: 기계 지도 초판 문서",
        "metrics": {
          "in": 1,
          "out": 1,
          "calls": 0,
          "secs": 0.0,
          "num_source": "문서/버전2_계획/전수조사_2026-11-10.md"
        }
      },
      {
        "addr": "출력-4",
        "group": "출력",
        "name": "화면용 데이터 내보내기 (그날 결과 → 화면이 읽는 파일 하나)",
        "files": "`v2_secretary/export_panel.py` → `결과/화면/panel.json`",
        "status": "돎 (AI 0콜 · `run_day.py` 6단계 연결)",
        "status_kind": "run",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 2026-11-16 결과 파일들 + runs.jsonl + calls.jsonl + 구간_주소표.md",
        "line_rule": "규칙: export_panel.py 세기와 옮겨 적기 (새 공식 없음, AI 0콜)",
        "line_out": "내보냄: v2_secretary/결과/화면/panel.json",
        "metrics": {
          "in": 1964,
          "out": 1,
          "calls": 0,
          "secs": 0.2,
          "num_source": "v2_secretary/결과/화면/panel.json"
        }
      },
      {
        "addr": "출력-5",
        "group": "출력",
        "name": "프로젝트 지도 (폴더·파일·세션 — 어느 파일이 무엇이고 어느 대화에서 무슨 일을 했나)",
        "files": "`지도_시작.md` · `지도_폴더와_파일.md` · `지도_세션.md` · 만드는 도구 `tools/make_map.py`",
        "status": "따로 (손으로 \"지도 다시 뽑아 줘\" 할 때만 갱신. 사실 칸은 도구가, 설명 칸은 사람이. 2026-11-10 Fable, 원장 10장 11번)",
        "status_kind": "separate",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 저장소 전체 폴더·파일·세션 기록",
        "line_rule": "규칙: tools/make_map.py + 설명 칸 수기 정리",
        "line_out": "내보냄: 지도_시작.md · 지도_폴더와_파일.md · 지도_세션.md",
        "metrics": {
          "in": 47,
          "out": 3,
          "calls": 0,
          "secs": 0.0,
          "num_source": "지도_시작.md"
        }
      },
      {
        "addr": "화면-1",
        "group": "화면",
        "name": "첫 화면 (스토리)",
        "files": "견본 `dashboard/sample_templates/버전2_스토리견본.html`",
        "status": "견본만 (움직임 승인, 색 반려)",
        "status_kind": "separate",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 버전1 11-05 샘플 데이터",
        "line_rule": "규칙: 버전2_스토리견본.html (움직임 승인, 색 반려)",
        "line_out": "내보냄: 4장 슬라이드 견본 화면",
        "metrics": {
          "in": 1,
          "out": 1,
          "calls": 0,
          "secs": 0.0,
          "num_source": "dashboard/sample_templates/버전2_스토리견본.html"
        }
      },
      {
        "addr": "화면-2",
        "group": "화면",
        "name": "제어판 (구간 지도 겸용)",
        "files": "`v2_secretary/panel/index.html` · `제어판_열기.bat`",
        "status": "돎 (앞 겹 오늘 5챕터 + 뒷 겹 기계 30구간 지도)",
        "status_kind": "run",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: v2_secretary/결과/화면/panel.json",
        "line_rule": "규칙: v2_secretary/panel/index.html (앞 겹 오늘 5챕터 + 뒷 겹 기계 구간 지도, 홀마크 옷 5벌)",
        "line_out": "내보냄: 브라우저 제어판 화면 (제어판_열기.bat)",
        "metrics": {
          "in": 1,
          "out": 2,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/panel/index.html"
        }
      },
      {
        "addr": "화면-3",
        "group": "화면",
        "name": "옛 화면 (버전1 PC 대시보드·아이폰 페이지)",
        "files": "`dashboard/` · `info-board/publish.py`",
        "status": "버전1 데이터로 돎",
        "status_kind": "separate",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 버전1 dashboard/data.db 및 info-board 데이터",
        "line_rule": "규칙: dashboard.py · publish.py (옛 화면)",
        "line_out": "내보냄: 버전1 PC 대시보드·아이폰 페이지",
        "metrics": {
          "in": 18,
          "out": 1,
          "calls": 0,
          "secs": 0.0,
          "num_source": "dashboard/dashboard.py"
        }
      },
      {
        "addr": "되먹임-1",
        "group": "되먹임",
        "name": "출처 추천 (AI가 넣자/층 내리자를 권하고 내가 고름 — 사용자 txt + AI 자동 따로)",
        "files": "`source_ai.py`(gate.py가 부름: 매일 0콜, 주 1회 제미나이 1콜 + 한 번 받아 보기) → AI `gate_rules/출처_추천_AI.txt` / 사용자 `출처_목록.txt` · 고르는 창 루트 `출처_결정.bat`(`source_decide.py`)",
        "status": "돎 (11-11부터 — 부딪힘·확신 보통·검색어 안 맞음·반키워드 많음은 대기. 새 출처는 안 고르면 다음 실행에 AI 판단대로 '제목만' 층으로 적용, 층 내리기는 고를 때까지 대기. 첫 실전 11-12 05:30 미확인. 원장 10장 19번)",
        "status_kind": "run",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 인풋-1 5층 표 + 모름 칸 + 내 표시",
        "line_rule": "규칙: 설계 완료(주 1회 출처 넣자/빼자 추천), 코드 0줄",
        "line_out": "내보냄: 없음",
        "metrics": {
          "in": 0,
          "out": 0,
          "calls": 0,
          "secs": 0.0,
          "num_source": "구간_주소표.md"
        }
      },
      {
        "addr": "되먹임-2",
        "group": "되먹임",
        "name": "키워드·반키워드 (사용자 txt + AI 자동 따로)",
        "files": "`gate.py` 후보 + `anti_ai.py`(제미나이 1콜 판정) → 사용자 `gate_rules/반키워드.txt`('!' 줄 = 강함) · `관심_키워드.txt` / AI `gate_rules/반키워드_AI.txt` · 고르는 창 루트 `반키워드_결정.bat`(`anti_decide.py`)",
        "status": "돎 (11-11부터 AI 자동 — 부딪히면 대기, 안 고르면 다음 실행에 AI 판단대로. 첫 실전 11-12 05:30 미확인. 원장 10장 17번)",
        "status_kind": "run",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 오늘 모름·충돌 글에서 뽑은 반키워드 후보 15개",
        "line_rule": "규칙: gate.py 후보 제안 → 사용자가 반키워드.txt · 관심_키워드.txt 직접 수정",
        "line_out": "내보냄: 다음 실행 문 앞 분류에 즉시 반영",
        "metrics": {
          "in": 15,
          "out": 15,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/결과/문앞/2026-11-16_문앞교통정리_길별.json"
        }
      },
      {
        "addr": "되먹임-3",
        "group": "되먹임",
        "name": "내 표시 (쓸모 있다/없다)",
        "files": "—",
        "status": "없음 (기록 0회)",
        "status_kind": "none",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 카드별 '쓸모 있다/없다' 버튼 클릭 (다음 세션 나 단계 예정)",
        "line_rule": "규칙: 아직 코드 없음 (기록 0회)",
        "line_out": "내보냄: 없음",
        "metrics": {
          "in": 0,
          "out": 0,
          "calls": 0,
          "secs": 0.0,
          "num_source": "구간_주소표.md"
        }
      },
      {
        "addr": "되먹임-4",
        "group": "되먹임",
        "name": "구간 수정 요청 (화면에서 구간을 눌러 메모)",
        "files": "—",
        "status": "없음",
        "status_kind": "none",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 화면에서 구간을 눌러 남긴 수정 요청 메모 (다음 세션 나 단계 예정)",
        "line_rule": "규칙: 아직 코드 없음",
        "line_out": "내보냄: 없음",
        "metrics": {
          "in": 0,
          "out": 0,
          "calls": 0,
          "secs": 0.0,
          "num_source": "구간_주소표.md"
        }
      },
      {
        "addr": "운영-1",
        "group": "운영",
        "name": "매일 자동 실행",
        "files": "`auto_run.py` · `auto_task.py` · 루트 `자동실행_스위치.bat`",
        "status": "등록됨 (첫 실전 11-11 05:30 미확인)",
        "status_kind": "separate",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: PC 작업 스케줄러 매일 05:30 트리거",
        "line_rule": "규칙: auto_run.py → run_day.py --collect 실행 후 runs.jsonl 기록",
        "line_out": "내보냄: 실행 기록 10건 (최근: 2026-11-16 ok)",
        "metrics": {
          "in": 1,
          "out": 10,
          "calls": 14,
          "secs": 195.0,
          "num_source": "v2_secretary/data/auto/runs.jsonl"
        }
      },
      {
        "addr": "운영-2",
        "group": "운영",
        "name": "깃허브 주고받기",
        "files": "`cloud_sync.py` · `v2_cloud/` · `cloud/v2-daily.yml`",
        "status": "돎 (11-12 깃허브 켬·PC 끔. 끝나면 화면 2개를 공개 info-board/docs로 — 열쇠 `INFO_BOARD_TOKEN` 생기면)",
        "status_kind": "run",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: v2_secretary 코드·규칙 변경분",
        "line_rule": "규칙: cloud_sync.py → v2_cloud 거울 동기화 (현재 스위치 꺼짐)",
        "line_out": "내보냄: 비공개 깃허브 동기화 대기",
        "metrics": {
          "in": 0,
          "out": 0,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/cloud_sync.py"
        }
      },
      {
        "addr": "운영-3",
        "group": "운영",
        "name": "규칙·브리핑·자동 검사",
        "files": "`CLAUDE.md` · `tools/session_brief.py` · `tools/claim_check.py`",
        "status": "버전1 기준에 머물러 있음",
        "status_kind": "separate",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: CLAUDE.md · GEMINI.md · claim_check.py",
        "line_rule": "규칙: 에이전트 보고 검사·시작 브리핑 (아직 버전1 기준 10개 항목 포함)",
        "line_out": "내보냄: 매 턴 보고 검증",
        "metrics": {
          "in": 10,
          "out": 10,
          "calls": 0,
          "secs": 0.0,
          "num_source": "tools/claim_check.py"
        }
      },
      {
        "addr": "운영-5",
        "group": "운영",
        "name": "설정 프로그램 (txt 규칙을 창에서 고치고 상태 점검 — PC 전용)",
        "files": "`v2_secretary/settings_app.py` · 루트 `설정_열기.bat`",
        "status": "따로 (11-11 만듦, 사용자가 열 때만. txt가 원본이고 창은 줄을 읽고 쓰기만. 탭: 출처·키워드·고를 것·자동 실행·점검. 원장 10장 21~24번)",
        "status_kind": "separate",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: `v2_secretary/settings_app.py` · 루트 `설정_열기.bat`",
        "line_rule": "상태: 따로 (11-11 만듦, 사용자가 열 때만. txt가 원본이고 창은 줄을 읽고 쓰기만. 탭: 출처·키워드·고를 것·자동 실행·점검. 원장 10장 21~24번)",
        "line_out": "고치는 곳: —",
        "metrics": {
          "in": 0,
          "out": 0,
          "calls": 0,
          "secs": 0.0,
          "num_source": "구간_주소표.md"
        }
      },
      {
        "addr": "운영-4",
        "group": "운영",
        "name": "남는 콜 쓰기 (하루 콜이 갱신되기 직전에 남은 콜을 대기 일감에 전부 씀)",
        "files": "—",
        "status": "없음. 사용자 구상 11-10(원장 10장 10번)",
        "status_kind": "none",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 일일 무료 한도 갱신 직전 남은 콜 수",
        "line_rule": "규칙: 설계 완료(남는 콜 대기 일감에 소진), 코드 0줄",
        "line_out": "내보냄: 없음",
        "metrics": {
          "in": 0,
          "out": 0,
          "calls": 0,
          "secs": 0.0,
          "num_source": "구간_주소표.md"
        }
      }
    ],
    "edges": [
      {
        "from": "인풋-1",
        "to": "인풋-2",
        "active": true
      },
      {
        "from": "인풋-2",
        "to": "인풋-3",
        "active": true
      },
      {
        "from": "인풋-3",
        "to": "인풋-4",
        "active": true
      },
      {
        "from": "인풋-3",
        "to": "처리-1",
        "active": true
      },
      {
        "from": "인풋-5",
        "to": "처리-1",
        "active": true
      },
      {
        "from": "인풋-3",
        "to": "처리-2",
        "active": true
      },
      {
        "from": "인풋-3",
        "to": "처리-3",
        "active": true
      },
      {
        "from": "인풋-2",
        "to": "처리-4",
        "active": true
      },
      {
        "from": "처리-4",
        "to": "출력-4",
        "active": true
      },
      {
        "from": "인풋-2",
        "to": "처리-6",
        "active": true
      },
      {
        "from": "처리-8",
        "to": "처리-2",
        "active": true
      },
      {
        "from": "처리-8",
        "to": "처리-3",
        "active": true
      },
      {
        "from": "처리-8",
        "to": "처리-6",
        "active": true
      },
      {
        "from": "처리-1",
        "to": "출력-2",
        "active": true
      },
      {
        "from": "처리-2",
        "to": "출력-2",
        "active": true
      },
      {
        "from": "처리-3",
        "to": "출력-2",
        "active": true
      },
      {
        "from": "처리-6",
        "to": "출력-2",
        "active": true
      },
      {
        "from": "출력-2",
        "to": "출력-4",
        "active": true
      },
      {
        "from": "출력-4",
        "to": "화면-2",
        "active": true
      },
      {
        "from": "인풋-3",
        "to": "되먹임-2",
        "active": true
      },
      {
        "from": "되먹임-2",
        "to": "인풋-3",
        "active": true
      },
      {
        "from": "운영-1",
        "to": "인풋-2",
        "active": true
      }
    ]
  }
};
