// 자동 생성 파일 (v2_secretary/export_panel.py) — 직접 수정하지 마세요.
window.PANEL_DATA = {
  "schema_version": "2.1.0-panel-v1",
  "day": "2026-11-23",
  "generated_at": "2026-11-23 04:15:55",
  "made_iso": "2026-11-23T04:15:55+09:00",
  "freshness": {
    "lines": [
      "모델 감시: 단종·전환 말 든 줄 1개 (2026-11-23 확인 — 결과지 아래쪽)"
    ],
    "pc_locked": "",
    "source": "v2_secretary/data/auto/runs.jsonl"
  },
  "refresh": {},
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
  "default_wardrobe": "atelier",
  "marks": {
    "repo": "",
    "got": [],
    "n_got": 0,
    "last_issue": null,
    "source": "v2_secretary/data/marks.jsonl"
  },
  "overview": {
    "in_total": {
      "val": 961,
      "source": "v2_secretary/결과/문앞/2026-11-23_문앞교통정리_길별.json"
    },
    "new_total": {
      "val": 164,
      "source": "v2_secretary/결과/문앞/2026-11-23_문앞교통정리_길별.json"
    },
    "old_seen": {
      "val": 797,
      "source": "v2_secretary/결과/문앞/2026-11-23_문앞교통정리_길별.json"
    },
    "seen_ledger_lines": {
      "val": 11879,
      "source": "v2_secretary/data/seen.jsonl"
    },
    "ai_calls_day": {
      "val": 7,
      "source": "v2_secretary/결과/2026-11-23_하루_전체.md"
    },
    "ai_fails_day": {
      "val": 2,
      "source": "v2_secretary/결과/2026-11-23_하루_전체.md"
    },
    "run_secs": {
      "val": 141,
      "source": "v2_secretary/결과/2026-11-23_하루_전체.md"
    },
    "lanes": {
      "거푸집1": {
        "val": 0,
        "source": "v2_secretary/결과/문앞/2026-11-23_문앞교통정리_길별.json"
      },
      "거푸집2": {
        "val": 0,
        "source": "v2_secretary/결과/문앞/2026-11-23_문앞교통정리_길별.json"
      },
      "뉴스": {
        "val": 161,
        "source": "v2_secretary/결과/문앞/2026-11-23_문앞교통정리_길별.json"
      },
      "제외 보관함": {
        "val": 3,
        "source": "v2_secretary/결과/문앞/2026-11-23_문앞교통정리_길별.json"
      },
      "논문T": {
        "val": 0,
        "source": "v2_secretary/결과/문앞/2026-11-23_문앞교통정리_길별.json"
      },
      "모름": {
        "val": 0,
        "source": "v2_secretary/결과/문앞/2026-11-23_문앞교통정리_길별.json"
      }
    },
    "last_auto_run": {
      "day": "2026-11-23",
      "start": "2026-11-23 04:13:33",
      "by": "github",
      "where": "GitHub",
      "mode": "run",
      "end": "2026-11-23 04:15:54",
      "secs": 141,
      "exit": 0,
      "result_md": true,
      "failed_stages": 0,
      "calls": 7,
      "result": "ok"
    },
    "last_auto_run_source": "v2_secretary/data/auto/runs.jsonl",
    "papers": {
      "day": "2026-11-22",
      "day_label": "11월 22일(어제)",
      "made": "2026-11-22T04:30:57",
      "calls": 151,
      "same_day": false,
      "source": "v2_secretary/결과/논문/2026-11-22_논문.json"
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
          "id": "e261123-01",
          "rank_by_count": 1,
          "name": "한국전력 개인정보 유출",
          "easy": "한국전력에서 이용 고객과 전자조달시스템 기업의 주민등록번호와 계좌·카드번호 등 12개 항목을 포함한 개인정보 약 152만건이 유출되는 사고가 발생했습니다. 전산시스템 해킹으로 정보가 털린 건데요, 무엇이 문제냐면 전기요금 납부 계좌나 카드번호까지 포함되어 있어 2차 피해 우려가 크다는 말이에요. 장점은 빠른 대응으로 피해를 막겠다는 거지만, 단점은 대규모 정보가 유출되어 신뢰가 크게 떨어졌다는 겁니다. 쉽게 말하면 피해 고객이 150만명 이상에 달한다는 겁니다.",
          "quote": "한전, 고객 등 152만명 개인정보 유출 확인…“2차 피해 예방 총력”",
          "member_count": 14,
          "sample_articles": [
            {
              "n": 1,
              "title": "한전, 고객 등 152만명 개인정보 유출 확인…“2차 피해 예방 총력”",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375104"
            },
            {
              "n": 56,
              "title": "한전도 해킹당했다…65만명 주민번호·계좌·카드번호 유출 - 경향신문",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE93TVRITGJMN0plWV9NSFJWNlR1eDd1WGVWb3B2SVRnbUJYMXA2US1wcDdMb1ZlQVJwWXZ3alBtenBTNTlYU0lfR3IxaW1WdFdta196aVJPSGtmQdIBX0FVX3lxTE13NWVmMVRzM3pzZE9YUTJ3eEFxU0F4RllMVWgwMlJFeml6dmxmX2FlNGlDZjJCS1hXOUdYSlBYVElLTXFab1RPbHM4SDZnQTVvMzhyTDRPSW9WNXNFb0Rj?oc=5"
            },
            {
              "n": 57,
              "title": "한전, 150만명 개인정보 털렸다…계좌·카드번호 등 유출 - 한겨레",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBKNC1SOXBhZkhySll1TEp6UW82WVV2TFhXNWFoWEk5WDNlMElZSkcxRUNYVXVfcncyVHVIRXFTRjl6TXFDaE5MOUVsMUVWWnlMMXpld0xZQm9jcXdwUGdKUEUzcG54czRzbENJdg?oc=5"
            },
            {
              "n": 58,
              "title": "[단독 후속] 데일리시큐 19일 최초 보도한 한국전력 해킹, 152만 명 개인정보 유출로 확인…다크웹 게시물과 DB 유통 가능성 조사해야 - 데일리시큐",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTFA1c2l6eU9BRE9BNk1Bb2puOFFmeDZWdmkxZEVuZDAxNllJZjktYm1xMW5jdDVoQ1hsNGdoNmdwakZISTZRNnBGS2UxUmtjMFhwVnN6bzBoeS1URGtJWUVyQkxQZ202NHJvcjRuMQ?oc=5"
            },
            {
              "n": 59,
              "title": "‘한전ON’ 고객 및 전자조달시스템 기업 개인정보 150여만건 유출 - KBS 뉴스",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9CM3hfMVpRLTNJZ3hQWHc2anpTQ0hScG5iSFlKUGRkRE1mZTBzX0tkWFJqTkFRUFJ0d3AxR2VxV0JDTFNSVEtsLUZUeE1rMG0wYUVJSWVQdXJuZ0U?oc=5"
            },
            {
              "n": 60,
              "title": "한국전력, 개인정보 150만건 털렸다…이름·주민번호·계좌번호 등 12개 항목 - 국민일보",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1WMC02alVER2p3d29QSVVDN1V5ZEZuUmI4dzdBeUNiUXU4QUdVeDQ4OEowaXhqR29mOFQtUWNVNlM1WXB6ZnRSWXZReWR6Wk14b3kxdndsY1Q?oc=5"
            },
            {
              "n": 61,
              "title": "이번엔 카드번호까지...한전, 또 150만 건 정보유출 - YTN",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiXkFVX3lxTFBXazk3TjFmeXNmN2w2RFlKT2ZXdWFwSHRJSjFEeWlESmJueDlXZVBMMTY1NV84YVpvLVB6b1ZUMFZrUjV2QXViWDZ2dmk1X3VDdTVGTVJzZlJMajN2SWc?oc=5"
            },
            {
              "n": 62,
              "title": "한국전력 또 뚫렸다···'한전ON' 이용 152만여 명 개인정보 유출 - 글로벌E",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5JNVN6bTlTRXEtYi03RVNTXzNfRS1tWGRvQjlBdm5tX1dlWkJpVGZKb2trZ3A4d3NQdGdIcXRDcjExX2wyVHhMbFdXbVFYNnIwZmNSTmdiX25EeFVOQllEdHN1blRRd01jb0dJRXN5Y9IBb0FVX3lxTE5JNVN6bTlTRXEtYi03RVNTXzNfRS1tWGRvQjlBdm5tX1dlWkJpVGZKb2trZ3A4d3NQdGdIcXRDcjExX2wyVHhMbFdXbVFYNnIwZmNSTmdiX25EeFVOQllEdHN1blRRd01jb0dJRXN5Yw?oc=5"
            },
            {
              "n": 63,
              "title": "한국전력, 또 개인정보 유출⋯152만명 주민·계좌번호 포함 - 아이뉴스24",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE5RSGVsWFF6OWZNSmVGTVJ3NG5BcG1RN1dSRWJTYmR1Z0IxNlJLcHVMTC11VzBLWmlHdmhhRGEwaTVaZjVsSWF2MmZOTQ?oc=5"
            },
            {
              "n": 118,
              "title": "“전기요금 내려고 입력했던 내 정보가”…한전, 이번엔 65만명 고객정보 유출 - 매일경제 마켓",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE81eDZnYkotdS02S3ZZNXFyNVdOc194b2p4QkdZajBzTkpGMVM2WDItMjhwVjZ5S0E5dGFlN1hOZm9wbkdFQ3Q5RnpEUlotMWNwTHc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-02",
          "rank_by_count": 2,
          "name": "한국은행 기준금리 인상 전망",
          "easy": "한국은행이 물가 상승과 성장률 상향 조정에 따라 오는 26일 열리는 올해 마지막 금융통화위원회에서 기준금리를 3.25%로 인상할 것이라는 전망이 나왔습니다. 금리 인상을 재개하면 내년까지 긴축 고삐를 죌 것으로 보이는데요, 뭔 소리냐면 고물가에 대응하기 위해 추가 긴축이 유력하다는 말이에요. 시장은 힘겨워하지만 금리는 오르는 상황입니다. 쉽게 말하면 대출 이자 부담이 커진다는 겁니다.",
          "quote": "26일 올해 마지막 금통위… 금리 ‘3.25%’로 인상 전망",
          "member_count": 7,
          "sample_articles": [
            {
              "n": 148,
              "title": "한은 금주 금리인상 유력…긴축 고삐 죈다 - 국제신문",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMijgFBVV95cUxONC1QVEVRNmNzZlIxbzV5a0RndUttOGZBbjQ1YkY5Wmk3RGhuN09tT01kbVh3aGhUeFh6bHdsZmw4ekE4NDRqcE9RYkoxMWNaT0xlLWcyY0lMc1BieUxhZUQxcEh0bkZ0ZDhtSElFYV9zdlN5ZjdIRmRLY25LdVdCLTNqUms0dzlWRU5WcjFR?oc=5"
            },
            {
              "n": 150,
              "title": "물가·성장 모두 ↑…시장은 힘겨워도 \"한은 금리는 올라간다\" - 조선일보",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOTWZGaHVHRTRqSnNobWNmeXYwS2p0YUMxaVladDh4eXFLNFBMRURKcU1xeWxMODZrdnhxeHlzVGJIa1BrVkdNTUNkYkU2cTlWMXBVb3dTN3BQVURrbFRBTGZsd1dhQ3ppVUhvYnBJQnA1Szc4M2djOUZaaUJPRVF0c0Z5RWdHZmZheWRyQ0tn?oc=5"
            },
            {
              "n": 156,
              "title": "26일 올해 마지막 금통위… 금리 ‘3.25%’로 인상 전망 - 조선일보",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNeTJQOHZJQm1tRWtHYndHZGcxN29fTnlyYkRqMk04Y2VaRV9Tb1ZXNGplOHNrSEppb1dpTV9QSXFfM09XeFd0NmZ6WW5tNmRzUlFnb01udUhTX0NUalRZdjVlcnNrOThvcXJGTVgya3RHSVZVZUtRMkhqeTVMYXVtMFRVdlIyTUZmeUZaM0dB?oc=5"
            },
            {
              "n": 157,
              "title": "한은, 석 달 만에 금리 인상 재개 전망…\"내년까지 긴축\" - 연합뉴스TV",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1qZ2plUXNXRnA3X01WU3NGbFp0TnZJVDdpdDFuMkFZZVVFMjJnWk5kczhJTXo2bmgtLWR4eXAwbE9zRzhpb0pZOHRUWXVadHotOWU2Vkg0ZFQ3VEZPQVBSdjdWVlZDSW8?oc=5"
            },
            {
              "n": 158,
              "title": "\"고물가에 추가 긴축 유력 … 26일 기준금리 0.25%P↑\" - 매일경제 마켓",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBVeks3MXFKRnhvcVhaOUxjVlgyRFFlS1l3TWxHNWFMbU5tWnJOaXZXZjZWOEM0V2xaNFJoaDBxSlRUR29tOEViRDJsb2M2d2xad2c?oc=5"
            },
            {
              "n": 159,
              "title": "한경 이코노미스트 전원 \"이달 금리 0.25%P 인상\" - 한국경제",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBDQ3BuNFZldENQRTVkNkQyZHZaY2lFOEFfRDVGRlNjdVZBMUlOMWF6VmRtWUIwck9jQ0t1dm9nNFQ2dVgzQy1CTll3REFrYklhY1dWc0tCOUxxdw?oc=5"
            },
            {
              "n": 160,
              "title": "물가 상승·성장률 상향 조정… 한은, 기준금리 3.25%로 올리나 - 세계일보",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE4xeGtjRHVUcG12VXpScWZIMkJ2QkpuZHF4RUVZWjZ1N1pWLXVmemd2NXlDM1dOYTQtRHdZelZTNW1aTVdLQUtfWnlXM2duQWRu0gFUQVVfeXFMT3F0amo2bXZSaWpwUWN1dzNWQ05pX0I1djNYd1FuU3hrRXlVOC1RMFBaaVZBSjFxTWp3d2FQdFhDN2Q3c0VUZUg1cVdZTmdGTVAxQnBj?oc=5"
            }
          ],
          "flags": [
            "예측 의심: 금리 인상을 재개하면 내년까지 긴축 고삐를 죌 것으로 보이는데요, 뭔 소리냐면 고물가에 대",
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-03",
          "rank_by_count": 3,
          "name": "삼성·SK 반도체 호황과 배당 확대",
          "easy": "삼성전자와 SK하이닉스가 반도체 호황에 힘입어 주주환원을 가속화하고 배당을 대폭 확대했습니다. SK하이닉스는 배당이 21배, 삼성전자는 4.4배 늘어났는데요, 뭔 소리냐면 영업이익이 급증한 것과 달리 기부금은 오히려 줄어들거나 차이를 보였다는 말이에요. 장점은 주주들에게 돌아가는 이익이 커졌다는 것이고, 단점은 사회적 책임 투자는 줄었다는 겁니다. 쉽게 말하면 실적 호조가 두 회사의 배당 폭증으로 이어졌다는 겁니다.",
          "quote": "반도체 호황에 배당도 폭증…SK하이닉스 21배·삼성전자 4.4배",
          "member_count": 5,
          "sample_articles": [
            {
              "n": 84,
              "title": "대기업 영업익 3배 느는 동안 기부금은 줄였다…SK하이닉스도 20% 감소 - KBS 뉴스",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5GbUZibFg3dGdDbk96anp4emxUMVNfZTFGeVBsejNzZTk5Rk15XzhRN2FjM3BCZFd2YmFoMVFPUmdDVkhvaWdQMV9wUDdadGY4ZGdCdWxOLVhiWUU?oc=5"
            },
            {
              "n": 86,
              "title": "대기업 영업익 230% 급증에도 기부금은 2%↓... SK하이닉스도 줄어 - 파이낸셜신문",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE41UXZWaERfb19MNUJqQ1dDSUxIVUl1eEoyUm43MXlPZnYwN0dlVDZ1MFFFdVVndnAzbWd6bGZKM28tTy1GUTZfTEJRXzlKcm1jUmc4a3JfY0xvQmVVaFdMZDFYdzVLcFQ3ZW5R?oc=5"
            },
            {
              "n": 91,
              "title": "삼성전자 기부금 203억↑·SK하이닉스 120억↓…반도체 호황에도 차이 - 아이뉴스24",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFB4VDcwZUdab0o1M0hHSnk3MVJjYUZVdURPUjBqSjM1bm1uNVNTdG1QN1BBV2ZjTUZKQjVJS05uTFRSQ0lnSGNmVGR0VQ?oc=5"
            },
            {
              "n": 93,
              "title": "반도체 호황에 배당도 폭증…SK하이닉스 21배·삼성전자 4.4배 - 에너지경제신문",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE0ybVNKX0toTTVkZ2RpdnktQkJFemFtX0tDbV9JaEVSVl8wck9ManRuYXA2S1I0anFIUVROUlYtX0RzMzF1ZmxkU3dHeGg2VDBCSGNRbFYyV0trV1E?oc=5"
            },
            {
              "n": 95,
              "title": "삼성전자·SK하이닉스, 반도체 호황에 배당 확대…주주환원 가속 - 산경투데이",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5xalFRUzRrT1NwZFNaUm1fZmVUNW5iOUVrSHFvbUFLcklKX19qczlMUXVseXU3RmgzekViVzR4ang2NjZtRXgwUXVCU1VfUlA0LU5ybVdBa0FNbmVzaUdwQnFqR2t5bWxjRlVyRFhlSG3SAXRBVV95cUxOR29nbkpocmktckVJZUJGcHVVQl9qUU1ZR2pqMEtYakxUckNwZ2tPNXJYMDFpYkRJZ0c0SW9VbkQ0dU5qNnJnMGFPcHJodlpZRlQ3dGsyYXNPRXMzLUtuY25qZ2F6eG5KbUJWYUsyZFlVbWZWUA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-04",
          "rank_by_count": 4,
          "name": "AI 데이터센터 전력망 규제 완화",
          "easy": "정부가 지방 AI 인프라 구축에 속도를 내기 위해 비수도권에 들어서는 50MW 이하의 AI 데이터센터에 대해 전력망 평가를 면제하기로 했습니다. 전력망 문턱이 낮아지면서 지방 AI 데이터센터 키우기에 본격적으로 나선 건데요, 뭔 소리냐면 전력수급에 대한 부담을 덜어주어 투자를 촉진하겠다는 말이에요. 장점은 인프라 확충 속도가 빨라진다는 것이고, 단점은 전력 수요 집중 우려가 있다는 겁니다. 쉽게 말하면 규제 완화로 비수도권 데이터센터 설립이 쉬워진다는 겁니다.",
          "quote": "AI 데이터센터 규제 푼다…비수도권 50MW까지 전력평가 면제",
          "member_count": 4,
          "sample_articles": [
            {
              "n": 125,
              "title": "AI 데이터센터 50MW까지 전력망 평가 면제…정부, 지방 AI 인프라 구축에 속도 - https://www.climatepol.com/",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE51WUZzRUw3dUJxbHN1VUpZeER1OFptV0NQeGo5bnh6RlFkQkE2aXl0NTlDSFpGd2Ixb2FYUlpDcnJUMzQ5eHFYVGg4RUh3bm55SndkVDhBckctdXZLVUt4Y1p5R3dmV29PTEJycQ?oc=5"
            },
            {
              "n": 126,
              "title": "지방 AI 데이터센터 키운다···전력평가 면제·특구 지원 구체화 - 헬로디디",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE94cFo3TmxiZlYwLTdzUDBZRk9pb0p0aURtQkt0NEhkZC1Kd3NxbzlCWEFmclA4UXhIOHFrTFpYUlhwVjhteWVGdm1hemZjRVRaMkwwNU1WMEdhbGl2bnlhZW9DWDNYYnBCSHc?oc=5"
            },
            {
              "n": 127,
              "title": "[초점] AI 데이터센터 ‘전력망 문턱’ 낮춘다…비수도권 50MW 이하 계통평가 면제 - 에너지데일리",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTFAwLUVVUnN0RjRpQTBpMG5QcER3aEg2dkZpYmJ6MlZYcFhjUm5XX1RNb0t0bFdTU1pxVXplX2d5blFtU1RuVzN1VkhXMEdQLV9VemZBOE1YSVpEUE43SkEwWXFoZDdrOGRBd3FtTFZvTVlTUQ?oc=5"
            },
            {
              "n": 128,
              "title": "AI 데이터센터 규제 푼다…비수도권 50MW까지 전력평가 면제 - 경북신문",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1JbzhrWHdSRWk0UG5MQUhhWWktRm9WLXZFaWZuMHFxdXY5bU04X3JfVzc4TFpzQlRrc2k0ZDFUNjFrZUwxUUM5TmdBajBsQ0VRbkFRSmdqMXQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-05",
          "rank_by_count": 5,
          "name": "충주 전고체배터리 및 이차전지 투자",
          "easy": "충주에 위치한 천보신소재가 차세대 이차전지 핵심소재 양산체제를 확충하기 위해 395억원을 투자했습니다. 이차전지 산업에 날개를 달게 된 건데요, 뭔 소리냐면 지역 경제에 활력을 불어넣고 차세대 소재 생산을 본격화한다는 말이에요. 화학연이 전해질 기술을 개발해 수명과 안전성을 개선한 것과 맞물려 있습니다. 쉽게 말하면 대규모 투자가 이차전지 경쟁력 강화로 이어진다는 겁니다.",
          "quote": "충주 이차전지 산업 날개 달았다, 천보신소재 395억 투자",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 173,
              "title": "충주 이차전지 산업 날개 달았다, 천보신소재 395억 투자 - 충북일보",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFB5SHZyMWNaa2d5Rk12UGtjcF9zLWxpZVFfM3dLVUdIZDM2Y1BlZkpCc1FEdmhpY0dIWExoa0tpTjFiSTFjMWg4d2tQOFFyMUZ1YTlyYUJHbHdtNGVLc1BhcmN3?oc=5"
            },
            {
              "n": 175,
              "title": "충주 ㈜천보신소재, 차세대 이차전지 핵심소재 양산체제 확충 - 중도일보",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1rRlRpWFBhdGpDejNaTTgwVDd2U0dDbzlBY0JfTUJDcHJzYktYWGdUdG5NV2tEdlAzWEh1YkRVbEVHenJwQkZMTHNSTFN0TzNFZk9nZnFPWXNXcFhkSkhRc3FDM1g?oc=5"
            },
            {
              "n": 178,
              "title": "전해질 붙였더니 ‘배터리 수명·안전성’ 개선…화학연, 차세대 전고체배터리 기술 개발 [쿠키과학] - 쿠키뉴스",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9fR1NXV19rSC1TT1MyQjFjUTVhMFZtSFhodWR6VEgzR3RqbjJwak03eDNlbHFFc1hEamJpV3JWMm5oT1ItUmFWd2Q3OUpuU3VxS3RYUGpFZ000clc1OWZ4TDRZWQ?oc=5"
            }
          ],
          "flags": [
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
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
          "source": "v2_secretary/결과/문앞/2026-11-23_문앞교통정리_길별.json"
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
          "val": 18,
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        "bok_rows_total": {
          "val": 43,
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
        },
        {
          "series": "DGS10",
          "name": "미국 10년 국채 금리",
          "date": "2026-11-13",
          "value": "5.15",
          "unit": "%",
          "prev_date": "2026-11-12",
          "prev_value": "5.1",
          "change": "+0.05",
          "addr": "인풋-5",
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        {
          "series": "DGS10",
          "name": "미국 10년 국채 금리",
          "date": "2026-11-16",
          "value": "5.12",
          "unit": "%",
          "prev_date": "2026-11-13",
          "prev_value": "5.15",
          "change": "-0.03",
          "addr": "인풋-5",
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        {
          "series": "DGS10",
          "name": "미국 10년 국채 금리",
          "date": "2026-11-17",
          "value": "5.1",
          "unit": "%",
          "prev_date": "2026-11-16",
          "prev_value": "5.12",
          "change": "-0.02",
          "addr": "인풋-5",
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        {
          "series": "DGS10",
          "name": "미국 10년 국채 금리",
          "date": "2026-11-18",
          "value": "5.07",
          "unit": "%",
          "prev_date": "2026-11-17",
          "prev_value": "5.1",
          "change": "-0.03",
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
          "date": "2026-11-19",
          "value": "5.04",
          "unit": "%",
          "prev_date": "2026-11-18",
          "prev_value": "5.07",
          "change": "-0.03",
          "addr": "인풋-5",
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        {
          "series": "DEXKOUS",
          "name": "원/달러 환율",
          "date": "2026-11-13",
          "value": "1336.58",
          "unit": "원",
          "prev_date": "2026-11-12",
          "prev_value": "1335.4",
          "change": "+1.18",
          "addr": "인풋-5",
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        {
          "series": "VIXCLS",
          "name": "미국 변동성 지수 VIX(흔히 '공포지수')",
          "date": "2026-11-19",
          "value": "28.44",
          "unit": "점",
          "prev_date": "2026-11-18",
          "prev_value": "24.56",
          "change": "+3.88",
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
          "val": 0,
          "source": "v2_secretary/결과/문앞/2026-11-23_문앞교통정리_길별.json"
        },
        "summarized_today": {
          "val": 0,
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        "bad_numbers_today": {
          "val": 0,
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        "fed_speeches_total": {
          "val": 29,
          "source": "v2_secretary/결과/연준연설/"
        }
      },
      "items": [],
      "fed_speeches": [
        {
          "file": "2026-11-16_연설_Warsh_warsh20261116a.md",
          "title": "[연설] 2026-11-16 · Chairman Kevin Warsh",
          "summary_lines": [
            "\"슈퍼 인텔리전스라는 새로운 기술이 경제를 완전히 바꾸고 있어요\"",
            "\"기술 변화에 대비해서 여러 가지 경제 시나리오를 따져보고 있어요\""
          ],
          "addr": "처리-6",
          "source": "v2_secretary/결과/연준연설/2026-11-16_연설_Warsh_warsh20261116a.md"
        },
        {
          "file": "2026-11-17_연설_Waller_waller20261117a.md",
          "title": "[연설] 2026-11-17 · Governor Christopher J. Waller",
          "summary_lines": [
            "\"블록체인 기술이 결제 시장의 새로운 경쟁을 불러오고 있어요\"",
            "\"새로운 결제 서비스가 성공하려면 무엇보다 신뢰가 중요해요\""
          ],
          "addr": "처리-6",
          "source": "v2_secretary/결과/연준연설/2026-11-17_연설_Waller_waller20261117a.md"
        },
        {
          "file": "2026-11-18_연설_Barr_barr20261118a.md",
          "title": "[연설] 2026-11-18 · Governor Michael S. Barr",
          "summary_lines": [
            "\"물가가 너무 높아서 금리를 더 올릴 수도 있다는 거예요\"",
            "\"돈이 잘 안 도는 동네에 민간과 공공이 힘을 합쳐야 해요\""
          ],
          "addr": "처리-6",
          "source": "v2_secretary/결과/연준연설/2026-11-18_연설_Barr_barr20261118a.md"
        },
        {
          "file": "2026-11-19_연설_Jefferson_jefferson20261119a.md",
          "title": "[연설] 2026-11-19 · Vice Chair Philip N. Jefferson",
          "summary_lines": [
            "\"경제에 충격이 닥쳤을 때 수요와 공급 중 어디를 건드리느냐가 중요하답니다\"",
            "\"인공지능 도입은 수요와 공급에 시간 차를 두고 영향을 미치는 까다로운 충격이랍니다\""
          ],
          "addr": "처리-6",
          "source": "v2_secretary/결과/연준연설/2026-11-19_연설_Jefferson_jefferson20261119a.md"
        },
        {
          "file": "2026-11-20_연설_Cook_cook20261120a.md",
          "title": "[연설] 2026-11-20 · Governor Lisa D. Cook",
          "summary_lines": [
            "\"AI 인프라 투자와 지정학적 충격으로 물가가 계속 높은 상태입니다\"",
            "\"물가를 잡으려면 금리를 더 올려야 한다는 생각입니다\""
          ],
          "addr": "처리-6",
          "source": "v2_secretary/결과/연준연설/2026-11-20_연설_Cook_cook20261120a.md"
        },
        {
          "file": "2026-11-20_연설_Waller_waller20261120a.md",
          "title": "[연설] 2026-11-20 · Governor Christopher J. Waller",
          "summary_lines": [
            "\"대학생 여러분이 오늘 하는 일이 바로 연준이 회의할 때 하는 일이라는 겁니다\"",
            "\"통화정책을 펼칠 때 사람들과 제대로 소통하는 게 중요하다고 했습니다\""
          ],
          "addr": "처리-6",
          "source": "v2_secretary/결과/연준연설/2026-11-20_연설_Waller_waller20261120a.md"
        }
      ]
    },
    "ch4_news": {
      "title": "챕터 4 · 뉴스 사건 묶기",
      "addr": "처리-3",
      "status": "돎 (하루 AI 2콜 독립 묶기 대조)",
      "counts": {
        "news_in": {
          "val": 161,
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        "events_out": {
          "val": 5,
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        "single_out": {
          "val": 128,
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        "all_clusters": {
          "val": 133,
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        "bad_numbers": {
          "val": 0,
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        "calls": {
          "val": 2,
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        }
      },
      "events": [
        {
          "id": "e261123-01",
          "rank_by_count": 1,
          "name": "한국전력 개인정보 유출",
          "easy": "한국전력에서 이용 고객과 전자조달시스템 기업의 주민등록번호와 계좌·카드번호 등 12개 항목을 포함한 개인정보 약 152만건이 유출되는 사고가 발생했습니다. 전산시스템 해킹으로 정보가 털린 건데요, 무엇이 문제냐면 전기요금 납부 계좌나 카드번호까지 포함되어 있어 2차 피해 우려가 크다는 말이에요. 장점은 빠른 대응으로 피해를 막겠다는 거지만, 단점은 대규모 정보가 유출되어 신뢰가 크게 떨어졌다는 겁니다. 쉽게 말하면 피해 고객이 150만명 이상에 달한다는 겁니다.",
          "quote": "한전, 고객 등 152만명 개인정보 유출 확인…“2차 피해 예방 총력”",
          "member_count": 14,
          "sample_articles": [
            {
              "n": 1,
              "title": "한전, 고객 등 152만명 개인정보 유출 확인…“2차 피해 예방 총력”",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375104"
            },
            {
              "n": 56,
              "title": "한전도 해킹당했다…65만명 주민번호·계좌·카드번호 유출 - 경향신문",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE93TVRITGJMN0plWV9NSFJWNlR1eDd1WGVWb3B2SVRnbUJYMXA2US1wcDdMb1ZlQVJwWXZ3alBtenBTNTlYU0lfR3IxaW1WdFdta196aVJPSGtmQdIBX0FVX3lxTE13NWVmMVRzM3pzZE9YUTJ3eEFxU0F4RllMVWgwMlJFeml6dmxmX2FlNGlDZjJCS1hXOUdYSlBYVElLTXFab1RPbHM4SDZnQTVvMzhyTDRPSW9WNXNFb0Rj?oc=5"
            },
            {
              "n": 57,
              "title": "한전, 150만명 개인정보 털렸다…계좌·카드번호 등 유출 - 한겨레",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBKNC1SOXBhZkhySll1TEp6UW82WVV2TFhXNWFoWEk5WDNlMElZSkcxRUNYVXVfcncyVHVIRXFTRjl6TXFDaE5MOUVsMUVWWnlMMXpld0xZQm9jcXdwUGdKUEUzcG54czRzbENJdg?oc=5"
            },
            {
              "n": 58,
              "title": "[단독 후속] 데일리시큐 19일 최초 보도한 한국전력 해킹, 152만 명 개인정보 유출로 확인…다크웹 게시물과 DB 유통 가능성 조사해야 - 데일리시큐",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTFA1c2l6eU9BRE9BNk1Bb2puOFFmeDZWdmkxZEVuZDAxNllJZjktYm1xMW5jdDVoQ1hsNGdoNmdwakZISTZRNnBGS2UxUmtjMFhwVnN6bzBoeS1URGtJWUVyQkxQZ202NHJvcjRuMQ?oc=5"
            },
            {
              "n": 59,
              "title": "‘한전ON’ 고객 및 전자조달시스템 기업 개인정보 150여만건 유출 - KBS 뉴스",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9CM3hfMVpRLTNJZ3hQWHc2anpTQ0hScG5iSFlKUGRkRE1mZTBzX0tkWFJqTkFRUFJ0d3AxR2VxV0JDTFNSVEtsLUZUeE1rMG0wYUVJSWVQdXJuZ0U?oc=5"
            },
            {
              "n": 60,
              "title": "한국전력, 개인정보 150만건 털렸다…이름·주민번호·계좌번호 등 12개 항목 - 국민일보",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1WMC02alVER2p3d29QSVVDN1V5ZEZuUmI4dzdBeUNiUXU4QUdVeDQ4OEowaXhqR29mOFQtUWNVNlM1WXB6ZnRSWXZReWR6Wk14b3kxdndsY1Q?oc=5"
            },
            {
              "n": 61,
              "title": "이번엔 카드번호까지...한전, 또 150만 건 정보유출 - YTN",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiXkFVX3lxTFBXazk3TjFmeXNmN2w2RFlKT2ZXdWFwSHRJSjFEeWlESmJueDlXZVBMMTY1NV84YVpvLVB6b1ZUMFZrUjV2QXViWDZ2dmk1X3VDdTVGTVJzZlJMajN2SWc?oc=5"
            },
            {
              "n": 62,
              "title": "한국전력 또 뚫렸다···'한전ON' 이용 152만여 명 개인정보 유출 - 글로벌E",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5JNVN6bTlTRXEtYi03RVNTXzNfRS1tWGRvQjlBdm5tX1dlWkJpVGZKb2trZ3A4d3NQdGdIcXRDcjExX2wyVHhMbFdXbVFYNnIwZmNSTmdiX25EeFVOQllEdHN1blRRd01jb0dJRXN5Y9IBb0FVX3lxTE5JNVN6bTlTRXEtYi03RVNTXzNfRS1tWGRvQjlBdm5tX1dlWkJpVGZKb2trZ3A4d3NQdGdIcXRDcjExX2wyVHhMbFdXbVFYNnIwZmNSTmdiX25EeFVOQllEdHN1blRRd01jb0dJRXN5Yw?oc=5"
            },
            {
              "n": 63,
              "title": "한국전력, 또 개인정보 유출⋯152만명 주민·계좌번호 포함 - 아이뉴스24",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE5RSGVsWFF6OWZNSmVGTVJ3NG5BcG1RN1dSRWJTYmR1Z0IxNlJLcHVMTC11VzBLWmlHdmhhRGEwaTVaZjVsSWF2MmZOTQ?oc=5"
            },
            {
              "n": 118,
              "title": "“전기요금 내려고 입력했던 내 정보가”…한전, 이번엔 65만명 고객정보 유출 - 매일경제 마켓",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE81eDZnYkotdS02S3ZZNXFyNVdOc194b2p4QkdZajBzTkpGMVM2WDItMjhwVjZ5S0E5dGFlN1hOZm9wbkdFQ3Q5RnpEUlotMWNwTHc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-02",
          "rank_by_count": 2,
          "name": "한국은행 기준금리 인상 전망",
          "easy": "한국은행이 물가 상승과 성장률 상향 조정에 따라 오는 26일 열리는 올해 마지막 금융통화위원회에서 기준금리를 3.25%로 인상할 것이라는 전망이 나왔습니다. 금리 인상을 재개하면 내년까지 긴축 고삐를 죌 것으로 보이는데요, 뭔 소리냐면 고물가에 대응하기 위해 추가 긴축이 유력하다는 말이에요. 시장은 힘겨워하지만 금리는 오르는 상황입니다. 쉽게 말하면 대출 이자 부담이 커진다는 겁니다.",
          "quote": "26일 올해 마지막 금통위… 금리 ‘3.25%’로 인상 전망",
          "member_count": 7,
          "sample_articles": [
            {
              "n": 148,
              "title": "한은 금주 금리인상 유력…긴축 고삐 죈다 - 국제신문",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMijgFBVV95cUxONC1QVEVRNmNzZlIxbzV5a0RndUttOGZBbjQ1YkY5Wmk3RGhuN09tT01kbVh3aGhUeFh6bHdsZmw4ekE4NDRqcE9RYkoxMWNaT0xlLWcyY0lMc1BieUxhZUQxcEh0bkZ0ZDhtSElFYV9zdlN5ZjdIRmRLY25LdVdCLTNqUms0dzlWRU5WcjFR?oc=5"
            },
            {
              "n": 150,
              "title": "물가·성장 모두 ↑…시장은 힘겨워도 \"한은 금리는 올라간다\" - 조선일보",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOTWZGaHVHRTRqSnNobWNmeXYwS2p0YUMxaVladDh4eXFLNFBMRURKcU1xeWxMODZrdnhxeHlzVGJIa1BrVkdNTUNkYkU2cTlWMXBVb3dTN3BQVURrbFRBTGZsd1dhQ3ppVUhvYnBJQnA1Szc4M2djOUZaaUJPRVF0c0Z5RWdHZmZheWRyQ0tn?oc=5"
            },
            {
              "n": 156,
              "title": "26일 올해 마지막 금통위… 금리 ‘3.25%’로 인상 전망 - 조선일보",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNeTJQOHZJQm1tRWtHYndHZGcxN29fTnlyYkRqMk04Y2VaRV9Tb1ZXNGplOHNrSEppb1dpTV9QSXFfM09XeFd0NmZ6WW5tNmRzUlFnb01udUhTX0NUalRZdjVlcnNrOThvcXJGTVgya3RHSVZVZUtRMkhqeTVMYXVtMFRVdlIyTUZmeUZaM0dB?oc=5"
            },
            {
              "n": 157,
              "title": "한은, 석 달 만에 금리 인상 재개 전망…\"내년까지 긴축\" - 연합뉴스TV",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1qZ2plUXNXRnA3X01WU3NGbFp0TnZJVDdpdDFuMkFZZVVFMjJnWk5kczhJTXo2bmgtLWR4eXAwbE9zRzhpb0pZOHRUWXVadHotOWU2Vkg0ZFQ3VEZPQVBSdjdWVlZDSW8?oc=5"
            },
            {
              "n": 158,
              "title": "\"고물가에 추가 긴축 유력 … 26일 기준금리 0.25%P↑\" - 매일경제 마켓",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBVeks3MXFKRnhvcVhaOUxjVlgyRFFlS1l3TWxHNWFMbU5tWnJOaXZXZjZWOEM0V2xaNFJoaDBxSlRUR29tOEViRDJsb2M2d2xad2c?oc=5"
            },
            {
              "n": 159,
              "title": "한경 이코노미스트 전원 \"이달 금리 0.25%P 인상\" - 한국경제",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBDQ3BuNFZldENQRTVkNkQyZHZaY2lFOEFfRDVGRlNjdVZBMUlOMWF6VmRtWUIwck9jQ0t1dm9nNFQ2dVgzQy1CTll3REFrYklhY1dWc0tCOUxxdw?oc=5"
            },
            {
              "n": 160,
              "title": "물가 상승·성장률 상향 조정… 한은, 기준금리 3.25%로 올리나 - 세계일보",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE4xeGtjRHVUcG12VXpScWZIMkJ2QkpuZHF4RUVZWjZ1N1pWLXVmemd2NXlDM1dOYTQtRHdZelZTNW1aTVdLQUtfWnlXM2duQWRu0gFUQVVfeXFMT3F0amo2bXZSaWpwUWN1dzNWQ05pX0I1djNYd1FuU3hrRXlVOC1RMFBaaVZBSjFxTWp3d2FQdFhDN2Q3c0VUZUg1cVdZTmdGTVAxQnBj?oc=5"
            }
          ],
          "flags": [
            "예측 의심: 금리 인상을 재개하면 내년까지 긴축 고삐를 죌 것으로 보이는데요, 뭔 소리냐면 고물가에 대",
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-03",
          "rank_by_count": 3,
          "name": "삼성·SK 반도체 호황과 배당 확대",
          "easy": "삼성전자와 SK하이닉스가 반도체 호황에 힘입어 주주환원을 가속화하고 배당을 대폭 확대했습니다. SK하이닉스는 배당이 21배, 삼성전자는 4.4배 늘어났는데요, 뭔 소리냐면 영업이익이 급증한 것과 달리 기부금은 오히려 줄어들거나 차이를 보였다는 말이에요. 장점은 주주들에게 돌아가는 이익이 커졌다는 것이고, 단점은 사회적 책임 투자는 줄었다는 겁니다. 쉽게 말하면 실적 호조가 두 회사의 배당 폭증으로 이어졌다는 겁니다.",
          "quote": "반도체 호황에 배당도 폭증…SK하이닉스 21배·삼성전자 4.4배",
          "member_count": 5,
          "sample_articles": [
            {
              "n": 84,
              "title": "대기업 영업익 3배 느는 동안 기부금은 줄였다…SK하이닉스도 20% 감소 - KBS 뉴스",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5GbUZibFg3dGdDbk96anp4emxUMVNfZTFGeVBsejNzZTk5Rk15XzhRN2FjM3BCZFd2YmFoMVFPUmdDVkhvaWdQMV9wUDdadGY4ZGdCdWxOLVhiWUU?oc=5"
            },
            {
              "n": 86,
              "title": "대기업 영업익 230% 급증에도 기부금은 2%↓... SK하이닉스도 줄어 - 파이낸셜신문",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE41UXZWaERfb19MNUJqQ1dDSUxIVUl1eEoyUm43MXlPZnYwN0dlVDZ1MFFFdVVndnAzbWd6bGZKM28tTy1GUTZfTEJRXzlKcm1jUmc4a3JfY0xvQmVVaFdMZDFYdzVLcFQ3ZW5R?oc=5"
            },
            {
              "n": 91,
              "title": "삼성전자 기부금 203억↑·SK하이닉스 120억↓…반도체 호황에도 차이 - 아이뉴스24",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFB4VDcwZUdab0o1M0hHSnk3MVJjYUZVdURPUjBqSjM1bm1uNVNTdG1QN1BBV2ZjTUZKQjVJS05uTFRSQ0lnSGNmVGR0VQ?oc=5"
            },
            {
              "n": 93,
              "title": "반도체 호황에 배당도 폭증…SK하이닉스 21배·삼성전자 4.4배 - 에너지경제신문",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE0ybVNKX0toTTVkZ2RpdnktQkJFemFtX0tDbV9JaEVSVl8wck9ManRuYXA2S1I0anFIUVROUlYtX0RzMzF1ZmxkU3dHeGg2VDBCSGNRbFYyV0trV1E?oc=5"
            },
            {
              "n": 95,
              "title": "삼성전자·SK하이닉스, 반도체 호황에 배당 확대…주주환원 가속 - 산경투데이",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5xalFRUzRrT1NwZFNaUm1fZmVUNW5iOUVrSHFvbUFLcklKX19qczlMUXVseXU3RmgzekViVzR4ang2NjZtRXgwUXVCU1VfUlA0LU5ybVdBa0FNbmVzaUdwQnFqR2t5bWxjRlVyRFhlSG3SAXRBVV95cUxOR29nbkpocmktckVJZUJGcHVVQl9qUU1ZR2pqMEtYakxUckNwZ2tPNXJYMDFpYkRJZ0c0SW9VbkQ0dU5qNnJnMGFPcHJodlpZRlQ3dGsyYXNPRXMzLUtuY25qZ2F6eG5KbUJWYUsyZFlVbWZWUA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-04",
          "rank_by_count": 4,
          "name": "AI 데이터센터 전력망 규제 완화",
          "easy": "정부가 지방 AI 인프라 구축에 속도를 내기 위해 비수도권에 들어서는 50MW 이하의 AI 데이터센터에 대해 전력망 평가를 면제하기로 했습니다. 전력망 문턱이 낮아지면서 지방 AI 데이터센터 키우기에 본격적으로 나선 건데요, 뭔 소리냐면 전력수급에 대한 부담을 덜어주어 투자를 촉진하겠다는 말이에요. 장점은 인프라 확충 속도가 빨라진다는 것이고, 단점은 전력 수요 집중 우려가 있다는 겁니다. 쉽게 말하면 규제 완화로 비수도권 데이터센터 설립이 쉬워진다는 겁니다.",
          "quote": "AI 데이터센터 규제 푼다…비수도권 50MW까지 전력평가 면제",
          "member_count": 4,
          "sample_articles": [
            {
              "n": 125,
              "title": "AI 데이터센터 50MW까지 전력망 평가 면제…정부, 지방 AI 인프라 구축에 속도 - https://www.climatepol.com/",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE51WUZzRUw3dUJxbHN1VUpZeER1OFptV0NQeGo5bnh6RlFkQkE2aXl0NTlDSFpGd2Ixb2FYUlpDcnJUMzQ5eHFYVGg4RUh3bm55SndkVDhBckctdXZLVUt4Y1p5R3dmV29PTEJycQ?oc=5"
            },
            {
              "n": 126,
              "title": "지방 AI 데이터센터 키운다···전력평가 면제·특구 지원 구체화 - 헬로디디",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE94cFo3TmxiZlYwLTdzUDBZRk9pb0p0aURtQkt0NEhkZC1Kd3NxbzlCWEFmclA4UXhIOHFrTFpYUlhwVjhteWVGdm1hemZjRVRaMkwwNU1WMEdhbGl2bnlhZW9DWDNYYnBCSHc?oc=5"
            },
            {
              "n": 127,
              "title": "[초점] AI 데이터센터 ‘전력망 문턱’ 낮춘다…비수도권 50MW 이하 계통평가 면제 - 에너지데일리",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTFAwLUVVUnN0RjRpQTBpMG5QcER3aEg2dkZpYmJ6MlZYcFhjUm5XX1RNb0t0bFdTU1pxVXplX2d5blFtU1RuVzN1VkhXMEdQLV9VemZBOE1YSVpEUE43SkEwWXFoZDdrOGRBd3FtTFZvTVlTUQ?oc=5"
            },
            {
              "n": 128,
              "title": "AI 데이터센터 규제 푼다…비수도권 50MW까지 전력평가 면제 - 경북신문",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1JbzhrWHdSRWk0UG5MQUhhWWktRm9WLXZFaWZuMHFxdXY5bU04X3JfVzc4TFpzQlRrc2k0ZDFUNjFrZUwxUUM5TmdBajBsQ0VRbkFRSmdqMXQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-05",
          "rank_by_count": 5,
          "name": "충주 전고체배터리 및 이차전지 투자",
          "easy": "충주에 위치한 천보신소재가 차세대 이차전지 핵심소재 양산체제를 확충하기 위해 395억원을 투자했습니다. 이차전지 산업에 날개를 달게 된 건데요, 뭔 소리냐면 지역 경제에 활력을 불어넣고 차세대 소재 생산을 본격화한다는 말이에요. 화학연이 전해질 기술을 개발해 수명과 안전성을 개선한 것과 맞물려 있습니다. 쉽게 말하면 대규모 투자가 이차전지 경쟁력 강화로 이어진다는 겁니다.",
          "quote": "충주 이차전지 산업 날개 달았다, 천보신소재 395억 투자",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 173,
              "title": "충주 이차전지 산업 날개 달았다, 천보신소재 395억 투자 - 충북일보",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFB5SHZyMWNaa2d5Rk12UGtjcF9zLWxpZVFfM3dLVUdIZDM2Y1BlZkpCc1FEdmhpY0dIWExoa0tpTjFiSTFjMWg4d2tQOFFyMUZ1YTlyYUJHbHdtNGVLc1BhcmN3?oc=5"
            },
            {
              "n": 175,
              "title": "충주 ㈜천보신소재, 차세대 이차전지 핵심소재 양산체제 확충 - 중도일보",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1rRlRpWFBhdGpDejNaTTgwVDd2U0dDbzlBY0JfTUJDcHJzYktYWGdUdG5NV2tEdlAzWEh1YkRVbEVHenJwQkZMTHNSTFN0TzNFZk9nZnFPWXNXcFhkSkhRc3FDM1g?oc=5"
            },
            {
              "n": 178,
              "title": "전해질 붙였더니 ‘배터리 수명·안전성’ 개선…화학연, 차세대 전고체배터리 기술 개발 [쿠키과학] - 쿠키뉴스",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9fR1NXV19rSC1TT1MyQjFjUTVhMFZtSFhodWR6VEgzR3RqbjJwak03eDNlbHFFc1hEamJpV3JWMm5oT1ItUmFWd2Q3OUpuU3VxS3RYUGpFZ000clc1OWZ4TDRZWQ?oc=5"
            }
          ],
          "flags": [
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        }
      ],
      "single_articles": [
        {
          "id": "e261123-06",
          "rank_by_count": 6,
          "name": "엔비디아 사태, 회계 부정 의혹으로 번져…美 SEC, 조사 착수",
          "easy": "",
          "quote": "엔비디아 사태, 회계 부정 의혹으로 번져…美 SEC, 조사 착수",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 97,
              "title": "엔비디아 사태, 회계 부정 의혹으로 번져…美 SEC, 조사 착수 - 동아일보",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTFBsa3BYMVNVUW9PdF9WYm56VlQ4S1pWQ2RNSFMxMFNFaWhoaWdQYkxKSE1VczVTbHREM3NmNDBocmFCMVNIX3p1aEl2TVdvel8zSTEwLUVFd18zMTF6M3c5YnNxWThlRjRWU0d3TVFGTlRkSW_SAWZBVV95cUxQYUFZWHBPemNNRlJzdjhWUjZycFZIbi0wMW53b0NoR2dfQ0Q0UHppRm9ndzJHc01pMGZ1RGFOOVZ1Q0pjU0h4RkRELWtsWVBSOXlmaTJ0M2N1TUlVNG1FaW5ZaHhvTGc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "엔비디아 관련 논란과 미중 갈등",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-07",
          "rank_by_count": 7,
          "name": "\"앨리스 황은 '얼굴노릇'만…엔비디아칩 中밀수 주도자는 50대 중국인\"",
          "easy": "",
          "quote": "\"앨리스 황은 '얼굴노릇'만…엔비디아칩 中밀수 주도자는 50대 중국인\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 98,
              "title": "\"앨리스 황은 '얼굴노릇'만…엔비디아칩 中밀수 주도자는 50대 중국인\" - 연합뉴스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE84WW9Vak9aUWR0bVBGeGpBX1M1YmN1ZlJfLTBiUFhLRUlsMXd0UndqR2tTQk1VLTBTU0JXcmpfNS1CSi1BdGpVNzdOU2pBZTRKeGFpOEN0YUxqbG_SAWBBVV95cUxPVnJJWjhUTXJJc3M4d1U3YUQxUHUzMm5aRFc2b2VnLWgyd0FrVlF3cFhFUk1vbnJvTEhLa0loTy1jM3dUTl9NNUJkRnc1TWliNDJlSnl1dk5MSVFTT0w1d04?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "엔비디아 관련 논란과 미중 갈등",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-08",
          "rank_by_count": 8,
          "name": "엔비디아 조사 나선 美 증권위...‘젠슨황 게이트’에 규제 날벼락",
          "easy": "",
          "quote": "엔비디아 조사 나선 美 증권위...‘젠슨황 게이트’에 규제 날벼락",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 99,
              "title": "엔비디아 조사 나선 美 증권위...‘젠슨황 게이트’에 규제 날벼락 - 중앙일보",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBWbWNYNVFFR2RfN0ZOQmlRSmw2YlpIMmxoM01CM2cwN2VXcGNHVWVUN3U4eTJKeFNtRm45NW1ZSmR0bENLalA0YUdVb3cwZTBmRENpM3RR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "엔비디아 관련 논란과 미중 갈등",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-09",
          "rank_by_count": 9,
          "name": "젠슨 황 없는 엔비디아…시장 지배력 유지할 수 있나",
          "easy": "",
          "quote": "젠슨 황 없는 엔비디아…시장 지배력 유지할 수 있나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 100,
              "title": "젠슨 황 없는 엔비디아…시장 지배력 유지할 수 있나 - 글로벌이코노믹",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPVlFka3FGT0tuWjJrY1FoWEZGbDE5MVRwTFhVdnRmYUdfckN4d2E2MnFhdkRtZjRld1ZjM0stWF9KUTBsWVlodVllNHh2Nk8zZGpIRFE2ci01RFhKVGhUR29IRzBueklqdkx3cGlxTWlRQjNWeHEyNmZGdEVBT0dtQS1Bd1Y0MTA4?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "엔비디아 관련 논란과 미중 갈등",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-10",
          "rank_by_count": 10,
          "name": "엔비디아 흔들릴 때 판을 뒤집을 기회 10년 전부터 준비한 진짜 대항마가 온다",
          "easy": "",
          "quote": "엔비디아 흔들릴 때 판을 뒤집을 기회 10년 전부터 준비한 진짜 대항마가 온다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 101,
              "title": "엔비디아 흔들릴 때 판을 뒤집을 기회 10년 전부터 준비한 진짜 대항마가 온다 - 연합인포맥스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBGaTZDdHdfd0FqSG95VHIzRzIyZDZZZllvWGQ0Y2Rma0pSNWUwODhObXQtaEZPM0RrTHNPMHFDOFcteVB4dUxta19lVWZXNzFSc1NnbXVvZGNYSHNvMnpsWlNSNXhWdkFRbHBqTEQ2blfSAXRBVV95cUxQX3RyeVFxcTJxaFBzMUJPOG9uNmgwTlhIdHR6aExqSVlsa1hrYm9BbFdSSldObXRhdkhBdXREeUZsczlYVDZtV2dVR1MtS250LTN3WXhUQ1Q1UVdYSTZJQURydFhWQmRLYU96Rk55YnhreHhfMA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "엔비디아 관련 논란과 미중 갈등",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-11",
          "rank_by_count": 11,
          "name": "미 재무장관 \"젠슨 황 개인사, 엔비디아 규정 준수 여부와 별개\"",
          "easy": "",
          "quote": "미 재무장관 \"젠슨 황 개인사, 엔비디아 규정 준수 여부와 별개\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 102,
              "title": "미 재무장관 \"젠슨 황 개인사, 엔비디아 규정 준수 여부와 별개\" - 연합뉴스TV",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE12VjBOdnpoOU9JWVBENmd2YnJ6SW1MUUNNR2tIbGZMX2dxU2ZsU3NpeC1DQUJOY1lzM2R2QWxKZmpXQ1VwRVpzUllQS0tfM1d3N0lwQzJuMUY5X2NGeGkzUjBDOUhRNDA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "엔비디아 관련 논란과 미중 갈등",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-12",
          "rank_by_count": 12,
          "name": "“엔비디아칩 중국 밀반입망, 앨리스 황과 캄보디아 범죄조직 인사로 이어져”",
          "easy": "",
          "quote": "“엔비디아칩 중국 밀반입망, 앨리스 황과 캄보디아 범죄조직 인사로 이어져”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 103,
              "title": "“엔비디아칩 중국 밀반입망, 앨리스 황과 캄보디아 범죄조직 인사로 이어져” - 경향신문",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBTWU9Fd2lUdEVBcE1sNnZqNFlwM0VqZlFFWWtQSnlmNjlOaTBNLVdsLS1kNGc1VXVFTmpjcC0tbGIxVDRKWUM3MHp4RkVSdWx5RGUzNGNCYU14QdIBX0FVX3lxTFBZSnNYMGU0VGZ5QVBNdldGNWxna3l3cFFLNEFOT2VnSERpdWhCMHQ2eVhtT1NGQ1VrUVNZcXIteWhMMmN5dDF4SjR6Tmh2NXFPa1EyNE5XeU1aOEZGSE1r?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "엔비디아 관련 논란과 미중 갈등",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-13",
          "rank_by_count": 13,
          "name": "“엔비디아 칩 중국 밀수망에 앨리스 황·캄보디아 범죄조직 얽혀”",
          "easy": "",
          "quote": "“엔비디아 칩 중국 밀수망에 앨리스 황·캄보디아 범죄조직 얽혀”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 104,
              "title": "“엔비디아 칩 중국 밀수망에 앨리스 황·캄보디아 범죄조직 얽혀” - KBS 뉴스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE1vOUlreWV0ZXpxc1ZUQ2lFSU9mMGVleVlDWkR2MmdEUno4TGIydnZUNjhTVlZOdlpBLWVwZG5SNFJxRVdTbW5HV2Z6OWxsbG5fTFY5QTU2N3FPU2VUUnpvbzU0SHpSSDNzWXloRTBn?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "엔비디아 관련 논란과 미중 갈등",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-14",
          "rank_by_count": 14,
          "name": "\"'엔비디아 사태', 휴전 두달 남은 美中 무역전쟁 재점화할수도\"",
          "easy": "",
          "quote": "\"'엔비디아 사태', 휴전 두달 남은 美中 무역전쟁 재점화할수도\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 140,
              "title": "\"'엔비디아 사태', 휴전 두달 남은 美中 무역전쟁 재점화할수도\" - 연합뉴스",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9RQTFKY0xhMGlpLW03RDVhRHR1WUhwLUtqeW5GZnhKX1M3YUNwVWJCanlnMDk0S0FDZGJLMmkwV0xHWXZJczI0QkZSOUwwZlYzVkFRSEo1RVJnSVXSAWBBVV95cUxOWTVTNVJqajBKSWN1anFsOWN6cVUzc3o5bFN0VEIwS2dJUXczXzJQeE0zcjBnTlI5UTR0YUxoYXVJbmNmNklRRVB6SzFkdHBtdmpHUWFhcXpENDQ2b0p1blM?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "엔비디아 관련 논란과 미중 갈등",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-15",
          "rank_by_count": 15,
          "name": "미중 정상 웃으며 만났지만…반도체·희토류 등 난제 산적",
          "easy": "",
          "quote": "미중 정상 웃으며 만났지만…반도체·희토류 등 난제 산적",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 147,
              "title": "미중 정상 웃으며 만났지만…반도체·희토류 등 난제 산적 - 쿠키뉴스",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE5PYXZaMDB5VU1JalgyLWpQQzlmQ3o5UVdjVnl3V3BQZ3VwRE4wYjNkRzY1czVJTlhYaklVVG80anJCWk9Fb0F0WVJNQWxHbWFzNGo0aDJrbmlhMnFrMkI1VkN1OA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "엔비디아 관련 논란과 미중 갈등",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-16",
          "rank_by_count": 16,
          "name": "“엔비디아 사태로 美中 무역전쟁 재점화 우려”… 반도체·희토류 갈등 격화",
          "easy": "",
          "quote": "“엔비디아 사태로 美中 무역전쟁 재점화 우려”… 반도체·희토류 갈등 격화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 181,
              "title": "“엔비디아 사태로 美中 무역전쟁 재점화 우려”… 반도체·희토류 갈등 격화 - Chosunbiz",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNTHdFQ2dMRW5vWGRhUkVNZFNrQkpJdU1Kb1FIaGFFT3lDY1VoQUQ1a3g1YVpaa0pYWDY5Qnl1VTU2bF95TFpMME9JdzBvdk9DYWIydTB1UklxSHpSaGNpMEh2VEJpMkppV1NCZi1lNnpoUjRPOVVNOEZXR0IwQTZaLUZSM0NaVmU4WVNWZ3dYZER0TjJ2QTI5cUtWLV8yVG9nVnhrTjVUamN1RkVKcUJkRFd30gGyAUFVX3lxTE1Md0VDZ0xFbm9YZGFSRU1kU2tCSkl1TUpvUUhoYUVPeUNjVWhBRDVreDVhWlprSlhYNjlCeXVVNTZsX3lMWkwwT0l3MG92T0NhYjJ1MHV"
            }
          ],
          "flags": [],
          "unlumped_from": "엔비디아 관련 논란과 미중 갈등",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-17",
          "rank_by_count": 17,
          "name": "젠슨 황 낙마 후 첫 미·중 담판...'희토류 족쇄' 찬 트럼프, '中 우회 수출 감시망&apo...",
          "easy": "",
          "quote": "젠슨 황 낙마 후 첫 미·중 담판...'희토류 족쇄' 찬 트럼프, '中 우회 수출 감시망&apo...",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 185,
              "title": "젠슨 황 낙마 후 첫 미·중 담판...'희토류 족쇄' 찬 트럼프, '中 우회 수출 감시망&apo... - www.edaily.co.kr",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTFBKWF9Dek90RVAtWHotQTFoLWp5a2YtdGtPd1poOWFzMUhDa3kyTjFqb1dYNEJCNy0tTHR2WkJ2S0JockRRS2NCZHNMWTdDdkhtaUdGaHVWbkJUNlFvV0V2eHZyR2k5bU1pSUhJ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "엔비디아 관련 논란과 미중 갈등",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-18",
          "rank_by_count": 18,
          "name": "“네 부모가 너를 낙태했어야”…젠슨황, 직원들 망신주기식 폭언 논란",
          "easy": "",
          "quote": "“네 부모가 너를 낙태했어야”…젠슨황, 직원들 망신주기식 폭언 논란",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 187,
              "title": "“네 부모가 너를 낙태했어야”…젠슨황, 직원들 망신주기식 폭언 논란 - 서울경제",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE9FQ2FaNXluRGpJSm5VUF9jYXk2OUVRT0pNb0VnYmp3cFhSa21yY0VDSjlQNUJ0YWliTnRPVjJGTXdGUDM3cWttNmFsOFFTRm1GS2fSAVNBVV95cUxPaURiS2JmYUJ1OG1NWm5Yb1ZrVHNpRWx4LS1ybXJXZjV1OFBaT1VEVFNOU1JQdUs0bzBXMFBmd1RzTE5ZSU42R3VYZnN5cndkNUNBOA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "엔비디아 관련 논란과 미중 갈등",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-19",
          "rank_by_count": 19,
          "name": "\"방화벽 대신 CEO 침실·우정 노린다\"…젠슨 황 스캔들이 부른 실리콘밸리 미인계 공포",
          "easy": "",
          "quote": "\"방화벽 대신 CEO 침실·우정 노린다\"…젠슨 황 스캔들이 부른 실리콘밸리 미인계 공포",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 188,
              "title": "\"방화벽 대신 CEO 침실·우정 노린다\"…젠슨 황 스캔들이 부른 실리콘밸리 미인계 공포 - AI포스트",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE80YUl2b1VCVGM0QUEzclZWU3pid2NoazhPb2hvRjByUXBuUVNfNW9oNXlWQkpCMWNBUHlMbEZVSk43aDd1QVg1RHU0TWJ3VUdRZ2hLeHJUZzFUN29kY1RKaks0dnhkR29DS3hUU3hROHFPd9IBckFVX3lxTE80YUl2b1VCVGM0QUEzclZWU3pid2NoazhPb2hvRjByUXBuUVNfNW9oNXlWQkpCMWNBUHlMbEZVSk43aDd1QVg1RHU0TWJ3VUdRZ2hLeHJUZzFUN29kY1RKaks0dnhkR29DS3hUU3hROHFPdw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "엔비디아 관련 논란과 미중 갈등",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-20",
          "rank_by_count": 20,
          "name": "“불륜 아니다” “너의 뇌에 오줌 누겠다”···젠슨 황 퇴출 부른 건 거짓말과 상습 폭언",
          "easy": "",
          "quote": "“불륜 아니다” “너의 뇌에 오줌 누겠다”···젠슨 황 퇴출 부른 건 거짓말과 상습 폭언",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 189,
              "title": "“불륜 아니다” “너의 뇌에 오줌 누겠다”···젠슨 황 퇴출 부른 건 거짓말과 상습 폭언 - 경향신문",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFB1UF9GTHBNekZ6YTRHcHhiY05tWlBuTFkyRS05R1NocGlkVGJJWXNVNEpreXc4dU1SQ3VfN3hTZGwyeTJLUVhEcE40UVZELWtmeVk3RXg2N2x6QdIBX0FVX3lxTFBsVVd0TnNRWWV4UGtUblZuUldaMVZNQXp3eEg2TEIwcTRBWDhhU3JTdXFvMEJucGpPbmNvWmxTMnJJSHU4eFN5OGJKclRORXhQUlNmSllNTFYyNWd4ZjJ3?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "엔비디아 관련 논란과 미중 갈등",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-21",
          "rank_by_count": 21,
          "name": "美재무장관 \"엔비디아의 규정준수 여부는 젠슨황 개인사와 별개\"",
          "easy": "",
          "quote": "美재무장관 \"엔비디아의 규정준수 여부는 젠슨황 개인사와 별개\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 190,
              "title": "美재무장관 \"엔비디아의 규정준수 여부는 젠슨황 개인사와 별개\" - 연합뉴스",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBPcWlfLTQyU0U0a0U0VWZKVDlfRDBWMkdxTlhhN0o1bmd5SUxDSjFLbHBIQ2hJdDlTVEotRmVJTkotTDdPNmF6RFdwbUVmdl9NOUVaMUlxLVpXMGvSAWBBVV95cUxNYnVwa3A2MzUtZUxzZDA2eFBKaUxDYkNVaEhlakJIZmFlc0UzYm9MY1N5SjB3eDM4eUg1MUdhQU9NLWVUNG0yS1llMW1qajZ0SDJkSnlwNUgyN1ZVMWNzYjQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "엔비디아 관련 논란과 미중 갈등",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-22",
          "rank_by_count": 22,
          "name": "\"모욕해야 성과 나와\"‥젠슨 황 폭언 폭로 파문",
          "easy": "",
          "quote": "\"모욕해야 성과 나와\"‥젠슨 황 폭언 폭로 파문",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 191,
              "title": "\"모욕해야 성과 나와\"‥젠슨 황 폭언 폭로 파문 - MBC 뉴스",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5iOVlHa3RKV2FNMUpTaGFyLUZ0SUx1VzdRVVV0TlZxS3ZpNlhjS3BoZjlSaE9pWmZ3LUZvWkJyenJHSVc0MDEwMzJ2Mnl4RVZyWEdmSW55M05wQk1MMXd0QWZOczVPUEc3THFzcUlFdWY2UEtq0gF0QVVfeXFMTUljQlo3NEplb21XTGJuUkdTUmRyc1VpZmEyRjVHMDlxSUR5X3dhYnFfN2hKTkpYZXRlOXVqUHg4UFpXTDg1X2F2VnM0MVhmX2ZaVEdnV1BCbmZ2T3RNZUN4WHlLem0wMHdvNGp5R2lVcXdlM1k?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "엔비디아 관련 논란과 미중 갈등",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-23",
          "rank_by_count": 23,
          "name": "\"네 어머니가 널 낙태했어야\"…젠슨 황, 직원들에 상습 폭언 의혹",
          "easy": "",
          "quote": "\"네 어머니가 널 낙태했어야\"…젠슨 황, 직원들에 상습 폭언 의혹",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 192,
              "title": "\"네 어머니가 널 낙태했어야\"…젠슨 황, 직원들에 상습 폭언 의혹 - 주간조선",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE50UUZLbkJSOVZjR0JFSmVVcjJTazF5WmxVTXJVMUcxMHJZWXA4X1I2ZjJNem5FX1R3eG1wT1JGRTk1bnBCeFFabEhjREZpd0FMZE5CM2VqR3ZIU3lRMEF5bWo4ZHVUUkRpaGc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "엔비디아 관련 논란과 미중 갈등",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-24",
          "rank_by_count": 24,
          "name": "재생에너지·BESS 고장 예방 등 기술교류의 장 열려",
          "easy": "",
          "quote": "재생에너지·BESS 고장 예방 등 기술교류의 장 열려",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 2,
              "title": "재생에너지·BESS 고장 예방 등 기술교류의 장 열려",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375100"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-25",
          "rank_by_count": 25,
          "name": "삼성물산·한양건설, ‘LEEPS by 홈닉’ 도입 업무협약 체결",
          "easy": "",
          "quote": "삼성물산·한양건설, ‘LEEPS by 홈닉’ 도입 업무협약 체결",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 3,
              "title": "삼성물산·한양건설, ‘LEEPS by 홈닉’ 도입 업무협약 체결",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375097"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-26",
          "rank_by_count": 26,
          "name": "산업부, 5극3특 성장엔진 육성계획 구체화 위해 전문가들과 머리 맞댄다",
          "easy": "",
          "quote": "산업부, 5극3특 성장엔진 육성계획 구체화 위해 전문가들과 머리 맞댄다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 4,
              "title": "산업부, 5극3특 성장엔진 육성계획 구체화 위해 전문가들과 머리 맞댄다",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375093"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-27",
          "rank_by_count": 27,
          "name": "전기연구원, 차세대 반도체 공정 핵심 ‘맞춤형 펄스 전원’ 기술이전",
          "easy": "",
          "quote": "전기연구원, 차세대 반도체 공정 핵심 ‘맞춤형 펄스 전원’ 기술이전",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 5,
              "title": "전기연구원, 차세대 반도체 공정 핵심 ‘맞춤형 펄스 전원’ 기술이전",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375092"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-28",
          "rank_by_count": 28,
          "name": "KIOST 해양데이터 관리 노하우, 인도양에 뿌리내리다",
          "easy": "",
          "quote": "KIOST 해양데이터 관리 노하우, 인도양에 뿌리내리다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 6,
              "title": "KIOST 해양데이터 관리 노하우, 인도양에 뿌리내리다",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375091"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-29",
          "rank_by_count": 29,
          "name": "TS, 교통부문 온실가스 목표관리제 설명회·역량강화 워크숍 개최",
          "easy": "",
          "quote": "TS, 교통부문 온실가스 목표관리제 설명회·역량강화 워크숍 개최",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 7,
              "title": "TS, 교통부문 온실가스 목표관리제 설명회·역량강화 워크숍 개최",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375089"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-30",
          "rank_by_count": 30,
          "name": "韓 참여 컨소, 베트남 북남 고속철도 5600억 설계용역 수주",
          "easy": "",
          "quote": "韓 참여 컨소, 베트남 북남 고속철도 5600억 설계용역 수주",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 8,
              "title": "韓 참여 컨소, 베트남 북남 고속철도 5600억 설계용역 수주",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375088"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-31",
          "rank_by_count": 31,
          "name": "추위가 재해 되기 전에…노동부, 겨울철 한랭질환 예방 점검",
          "easy": "",
          "quote": "추위가 재해 되기 전에…노동부, 겨울철 한랭질환 예방 점검",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 9,
              "title": "추위가 재해 되기 전에…노동부, 겨울철 한랭질환 예방 점검",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375082"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-32",
          "rank_by_count": 32,
          "name": "국가기술자격증 불법대여 뿌리 뽑는다…정부, 두 달간 합동단속",
          "easy": "",
          "quote": "국가기술자격증 불법대여 뿌리 뽑는다…정부, 두 달간 합동단속",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 10,
              "title": "국가기술자격증 불법대여 뿌리 뽑는다…정부, 두 달간 합동단속",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375081"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-33",
          "rank_by_count": 33,
          "name": "한국, IEC 핵심 이사회 연속 진출…국제표준 리더십 강화",
          "easy": "",
          "quote": "한국, IEC 핵심 이사회 연속 진출…국제표준 리더십 강화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 11,
              "title": "한국, IEC 핵심 이사회 연속 진출…국제표준 리더십 강화",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375080"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-34",
          "rank_by_count": 34,
          "name": "[에너지·환경·안전, 혁신의 시대를 열다] 전기산업진흥회, ‘K-일렉트릭’ 글로벌 도약 이끈다",
          "easy": "",
          "quote": "[에너지·환경·안전, 혁신의 시대를 열다] 전기산업진흥회, ‘K-일렉트릭’ 글로벌 도약 이끈다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 12,
              "title": "[에너지·환경·안전, 혁신의 시대를 열다] 전기산업진흥회, ‘K-일렉트릭’ 글로벌 도약 이끈다",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374970"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-35",
          "rank_by_count": 35,
          "name": "경부선 소정리역서 화물열차 5량 탈선…국토부 위기경보 ‘주의’",
          "easy": "",
          "quote": "경부선 소정리역서 화물열차 5량 탈선…국토부 위기경보 ‘주의’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 13,
              "title": "경부선 소정리역서 화물열차 5량 탈선…국토부 위기경보 ‘주의’",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375085"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-36",
          "rank_by_count": 36,
          "name": "노동부, 국가자격시험 감독 강화…AI 부정행위 대응체계 점검",
          "easy": "",
          "quote": "노동부, 국가자격시험 감독 강화…AI 부정행위 대응체계 점검",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 14,
              "title": "노동부, 국가자격시험 감독 강화…AI 부정행위 대응체계 점검",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375078"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-37",
          "rank_by_count": 37,
          "name": "글로벌 전력기업 연합, 전력망 신설 역대 최대...투자규모 연 1560억달러로 상향",
          "easy": "",
          "quote": "글로벌 전력기업 연합, 전력망 신설 역대 최대...투자규모 연 1560억달러로 상향",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 15,
              "title": "글로벌 전력기업 연합, 전력망 신설 역대 최대...투자규모 연 1560억달러로 상향",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374992"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-38",
          "rank_by_count": 38,
          "name": "[철도 에너지 전환, 현장에서 길을 찾다] ④ 지멘스 에너지, 열차와 함께 30년…변압기 신뢰성, 설계 전부터 쌓는다",
          "easy": "",
          "quote": "[철도 에너지 전환, 현장에서 길을 찾다] ④ 지멘스 에너지, 열차와 함께 30년…변압기 신뢰성, 설계 전부터 쌓는다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 16,
              "title": "[철도 에너지 전환, 현장에서 길을 찾다] ④ 지멘스 에너지, 열차와 함께 30년…변압기 신뢰성, 설계 전부터 쌓는다",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374975"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-39",
          "rank_by_count": 39,
          "name": "서울 지하철 준법투쟁 첫날…철도노조도 23일 합류",
          "easy": "",
          "quote": "서울 지하철 준법투쟁 첫날…철도노조도 23일 합류",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 18,
              "title": "서울 지하철 준법투쟁 첫날…철도노조도 23일 합류",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375076"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-40",
          "rank_by_count": 40,
          "name": "‘융 아키텍쳐 토크 서울 2026’ 성료…“소재·색상·기술로 공간의 편안함 구현",
          "easy": "",
          "quote": "‘융 아키텍쳐 토크 서울 2026’ 성료…“소재·색상·기술로 공간의 편안함 구현",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 20,
              "title": "‘융 아키텍쳐 토크 서울 2026’ 성료…“소재·색상·기술로 공간의 편안함 구현",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375070"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-41",
          "rank_by_count": 41,
          "name": "양승조 수공 사장, 호남 반도체 클러스터 현장 점검…“차질 없는 용수 공급”",
          "easy": "",
          "quote": "양승조 수공 사장, 호남 반도체 클러스터 현장 점검…“차질 없는 용수 공급”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 21,
              "title": "양승조 수공 사장, 호남 반도체 클러스터 현장 점검…“차질 없는 용수 공급”",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375073"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-42",
          "rank_by_count": 42,
          "name": "미국 중간선거 결과, 투자자에게 어떤 의미인가",
          "easy": "",
          "quote": "미국 중간선거 결과, 투자자에게 어떤 의미인가",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 26,
              "title": "미국 중간선거 결과, 투자자에게 어떤 의미인가",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2186391"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-43",
          "rank_by_count": 43,
          "name": "AI 충격에 아시아 증시 안정화 나선 대만·중국·한국",
          "easy": "",
          "quote": "AI 충격에 아시아 증시 안정화 나선 대만·중국·한국",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 27,
              "title": "AI 충격에 아시아 증시 안정화 나선 대만·중국·한국",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2186387"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-44",
          "rank_by_count": 44,
          "name": "구리 가격 하락은 매수 기회일까? UBS가 매수 포지션을 선호하는 이유",
          "easy": "",
          "quote": "구리 가격 하락은 매수 기회일까? UBS가 매수 포지션을 선호하는 이유",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 28,
              "title": "구리 가격 하락은 매수 기회일까? UBS가 매수 포지션을 선호하는 이유",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2186346"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-45",
          "rank_by_count": 45,
          "name": "이번 주 AI 애널리스트 주요 5선: Nvidia 투자의견 하향·Anthropic 주목",
          "easy": "",
          "quote": "이번 주 AI 애널리스트 주요 5선: Nvidia 투자의견 하향·Anthropic 주목",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 29,
              "title": "이번 주 AI 애널리스트 주요 5선: Nvidia 투자의견 하향·Anthropic 주목",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2186328"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-46",
          "rank_by_count": 46,
          "name": "스위스 인플레이션 가속화…SNB, 광범위한 물가 압력 우려",
          "easy": "",
          "quote": "스위스 인플레이션 가속화…SNB, 광범위한 물가 압력 우려",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 30,
              "title": "스위스 인플레이션 가속화…SNB, 광범위한 물가 압력 우려",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2186339"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-47",
          "rank_by_count": 47,
          "name": "반도체 139, 철강 50… 넉 달 만에 제조업 경기 전망 기준선 밑으로",
          "easy": "",
          "quote": "반도체 139, 철강 50… 넉 달 만에 제조업 경기 전망 기준선 밑으로",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 31,
              "title": "반도체 139, 철강 50… 넉 달 만에 제조업 경기 전망 기준선 밑으로",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2186323"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-48",
          "rank_by_count": 48,
          "name": "애플이 그린 20주년 미래?...삼성전자에겐 이미 ’과거형’",
          "easy": "",
          "quote": "애플이 그린 20주년 미래?...삼성전자에겐 이미 ’과거형’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 32,
              "title": "애플이 그린 20주년 미래?...삼성전자에겐 이미 ’과거형’",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2186322"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-49",
          "rank_by_count": 49,
          "name": "AI 붐이 신흥시장에서 힘을 잃고 있는가? 제프리스, 위험 경고",
          "easy": "",
          "quote": "AI 붐이 신흥시장에서 힘을 잃고 있는가? 제프리스, 위험 경고",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 33,
              "title": "AI 붐이 신흥시장에서 힘을 잃고 있는가? 제프리스, 위험 경고",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2186313"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-50",
          "rank_by_count": 50,
          "name": "독일 산업계 파업 확대…IG Metall, 노동자 2만3천여 명에 파업 촉구",
          "easy": "",
          "quote": "독일 산업계 파업 확대…IG Metall, 노동자 2만3천여 명에 파업 촉구",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 34,
              "title": "독일 산업계 파업 확대…IG Metall, 노동자 2만3천여 명에 파업 촉구",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2186292"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-51",
          "rank_by_count": 51,
          "name": "중국 AI 관련주, 기술주 매도세 심화로 시총 1조 7,000억 달러 증발",
          "easy": "",
          "quote": "중국 AI 관련주, 기술주 매도세 심화로 시총 1조 7,000억 달러 증발",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 35,
              "title": "중국 AI 관련주, 기술주 매도세 심화로 시총 1조 7,000억 달러 증발",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2186286"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-52",
          "rank_by_count": 52,
          "name": "미국 전력망 인허가법 상원 통과…AI 시대 송전 병목 해소",
          "easy": "",
          "quote": "미국 전력망 인허가법 상원 통과…AI 시대 송전 병목 해소",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 64,
              "title": "미국 전력망 인허가법 상원 통과…AI 시대 송전 병목 해소 - 에너지안전신문",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9lM0E0eHZsU2Q1YklvRHFPY01EWG9VX3lBYWgxSjZGNm9TZ05YcUJUMW1IeTAyR29ZNDJrSTBFa1Znb1hIeFhvRDNWX3V6TWZtT3JMQ0htMmtsOFBqZHJ0T3p6bng?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-53",
          "rank_by_count": 53,
          "name": "[기획]발전소부터 송전선까지…전력 전환 ‘산 넘어 산’",
          "easy": "",
          "quote": "[기획]발전소부터 송전선까지…전력 전환 ‘산 넘어 산’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 65,
              "title": "[기획]발전소부터 송전선까지…전력 전환 ‘산 넘어 산’ - 매일일보",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBUUjVLRHRHRVozVGFPdWl1NW40YUFqZUw5a1ptdG5SbGdhQy1Ua3UzYkZMaXlTZmVXcXRob20xaU9YSkY1dUhBTm9xOERkdzdTSmI2MnBvU0ZqWmNpRTIwYXJ1QVA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-54",
          "rank_by_count": 54,
          "name": "美 듀크대, 'AI 데이터센터 전력난' 해결할 7대 기술 제시 \"눈길\"",
          "easy": "",
          "quote": "美 듀크대, 'AI 데이터센터 전력난' 해결할 7대 기술 제시 \"눈길\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 66,
              "title": "美 듀크대, 'AI 데이터센터 전력난' 해결할 7대 기술 제시 \"눈길\" - 넷제로뉴스",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5uWmtGM3lIb3ZYWEZ3Y1FYRmhuTHZHUXJGYS1TM0RFZkxQeVIzRUJrRV9NWlVEcEs0cklqRGZfOWs4X2FzZ0JESk9ZczQ5aWw1MU9mQm9NOEJ2TmljbHV1X2pBYU1JLU5IQWc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-55",
          "rank_by_count": 55,
          "name": "스페인, 2030 전력망에 25조원 투입…변압기·전선 대란 속 초대형 발주",
          "easy": "",
          "quote": "스페인, 2030 전력망에 25조원 투입…변압기·전선 대란 속 초대형 발주",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 67,
              "title": "스페인, 2030 전력망에 25조원 투입…변압기·전선 대란 속 초대형 발주 - 글로벌이코노믹",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQQzhmcjdIanlMLUhvRWRnc252OGZOMm9HUC1LYkx1T0hRWGN1eUVEU1ppcl80OHlFbUNvdHRmWXNsNUEtSGtrMWxLSW9fSFRMWURUeGxkZjhzYUxhN2w5REVTcUo2X2NPQngyUlV4ZmwtMUdCNUdoS3V2SDNOLVFLZkRqal9YY1p5?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-56",
          "rank_by_count": 56,
          "name": "345kV 신장수~무주영동 송전선로, 영동군 용화·학산·양강면 지나나",
          "easy": "",
          "quote": "345kV 신장수~무주영동 송전선로, 영동군 용화·학산·양강면 지나나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 68,
              "title": "345kV 신장수~무주영동 송전선로, 영동군 용화·학산·양강면 지나나 - 충북일보",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFA4dWtISnFoLTVybUVoUzZISl9GYWlIenlEUXNpanl4V3A0ZnNQbUQxbFdyaDVuTHl6ckZVRkp6NFJwMzJNMHNUMDh5aFc0dEgzRm03ekh4X3lIOVNSbzJXbnVB?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-57",
          "rank_by_count": 57,
          "name": "LS전선·대한전선, 美 4.5조 '프로펠 NY' 전력망 케이블 공급",
          "easy": "",
          "quote": "LS전선·대한전선, 美 4.5조 '프로펠 NY' 전력망 케이블 공급",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 70,
              "title": "LS전선·대한전선, 美 4.5조 '프로펠 NY' 전력망 케이블 공급 - 한국신용신문",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE5CczdfTXhWdTlWNzRXMWxlcEpxcGRLLWg4WFVkc0dLYVRLZU1oQkRtUEJNLUFSajh1V0FzNWEzdEplQXpUaXIwLWRldUhqdHBWdGFsM3NubXF4Q0hUWmJ3MVRFVXUyUHJBRTd3?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-58",
          "rank_by_count": 58,
          "name": "[기획]전력망 깔고 ESS 늘리고…배터리·전선업계 '기회'",
          "easy": "",
          "quote": "[기획]전력망 깔고 ESS 늘리고…배터리·전선업계 '기회'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 71,
              "title": "[기획]전력망 깔고 ESS 늘리고…배터리·전선업계 '기회' - 매일일보",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1ubWlwT2Rnak1fN1YtemJaTmJNcjdoWnBWcmFVU1A3OGhIY2pNNGg0QmlhOUg4alByZkNLTG5saTRoSkhtYUU5bVE0SXNDTjIyTU02MVdPeDBPNTJnbzBJWmVIc0g?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-59",
          "rank_by_count": 59,
          "name": "AI 전력망 호황에 대형 변압기 수출 31% 증가…소형은 39% 급감",
          "easy": "",
          "quote": "AI 전력망 호황에 대형 변압기 수출 31% 증가…소형은 39% 급감",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 72,
              "title": "AI 전력망 호황에 대형 변압기 수출 31% 증가…소형은 39% 급감 - 한국경제",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5ZRFRMeDZpUXk0bUlSNnZuTS1QTHIwVTd4bV92Z25WdzY0NGROTVVUNHR1ZUJmcHJUUVVOV0xCSlpMWk94cFcyYmctUDdjY3hOZ3JWWnpiSW9ydw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-60",
          "rank_by_count": 60,
          "name": "[기획] 대한민국, 수출 1조 달러 시대… 한류 호기심이 이끈 ‘K-인디 브랜드’",
          "easy": "",
          "quote": "[기획] 대한민국, 수출 1조 달러 시대… 한류 호기심이 이끈 ‘K-인디 브랜드’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 73,
              "title": "[기획] 대한민국, 수출 1조 달러 시대… 한류 호기심이 이끈 ‘K-인디 브랜드’ - 위런치",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5kR2dfZnNmM2ZjQ2NjTUVZQVNLUTFNWHZKXzhKMk1JbUZMNWJubG93RlpZR1lTdFBHWF9hZEd2akFtWDNBQWwxN2R6Wl9EV3JnNGxCZzdxd2o5aVkyTHhXMlZiMXo?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-61",
          "rank_by_count": 61,
          "name": "HBM 슈퍼사이클 기대 꺾였나…삼성전자부터 테크윙까지 매도세 확산 '경계령'",
          "easy": "",
          "quote": "HBM 슈퍼사이클 기대 꺾였나…삼성전자부터 테크윙까지 매도세 확산 '경계령'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 74,
              "title": "HBM 슈퍼사이클 기대 꺾였나…삼성전자부터 테크윙까지 매도세 확산 '경계령' - 핀포인트뉴스",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTE9ySDliWkhhWFVwLUV2b2d2WEhZRGxNVVBKby0wS3prZ18ySHZyZFNKU1doNE8wX3pUZlkzN1lHOWY3MkJ3S25oM3ZJTXZ4cXl1MFFSci13VUxHd18tYk45SFFQOUhSVElFVXFDcTEyYVNIQ19IV01N0gF3QVVfeXFMT3JIOWJaSGFYVXAtRXZvZ3ZYSFlEbE1VUEpvLTBLemtnXzJIdnJkU0pTV2g0TzBfelRmWTM3WUc5ZjcyQndLbmgzdklNdnhxeXUwUVJyLXdVTEd3Xy1iTjlIUVA5SFJUSUVVcUNxMTJhU0hDX0hXTU0?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-62",
          "rank_by_count": 62,
          "name": "[오하은의 기업주주되기] 삼성전자 주식을 산다는 것…반도체부터 미래 성장동력까지",
          "easy": "",
          "quote": "[오하은의 기업주주되기] 삼성전자 주식을 산다는 것…반도체부터 미래 성장동력까지",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 75,
              "title": "[오하은의 기업주주되기] 삼성전자 주식을 산다는 것…반도체부터 미래 성장동력까지 - 하이뉴스",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTE1yUjNwMWZJQU1Jd1hKMGxBQzdTUFp5dDBtSWFCUFRtYVBvd2otUDgtY2JXdm02M3o1cEdQYjhhZlEtbDNabXc3TzZkZ3JfYU1HQkhyVEVfNlZZTVk4VEdfanI5bTlSZXRBYWIwMVczZ2F3NkNwUy1F?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-63",
          "rank_by_count": 63,
          "name": "삼성·SK, HBM 개발자 중용…LG는 로봇 연구진 임원 발탁",
          "easy": "",
          "quote": "삼성·SK, HBM 개발자 중용…LG는 로봇 연구진 임원 발탁",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 76,
              "title": "삼성·SK, HBM 개발자 중용…LG는 로봇 연구진 임원 발탁 - 비즈중앙",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9LTmtEbkNtNVZQUWhTUTlFLTY5UTlVX3B2d2NOUHlEc1VvbjRhdGVYcGtiTDBPdVZXdVZvcFhwZHRKelBkZ2hXWDBxWURFeDVSNGZicXlxdDNGWGdEUnRmSW1TQWh2dzVoZy1yTUl3cWo?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-64",
          "rank_by_count": 64,
          "name": "AI에 메모리 뺏긴 세계…램마겟돈 2028년까지 간다",
          "easy": "",
          "quote": "AI에 메모리 뺏긴 세계…램마겟돈 2028년까지 간다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 77,
              "title": "AI에 메모리 뺏긴 세계…램마겟돈 2028년까지 간다 - 이데일리",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMigAFBVV95cUxQUDRPRGdRM0ltWFNlNlNGWmxHVXM1bTlUZjFxNklIamZkeWdLR0ctMy13N21qVUJkNnU5bG4wNjFuS0VMeDlQNjBwaW1fQkU4U2ppdnFlaDl6bXg2c0ZIRi1lWXdFRHR5ZXVydlNhV3VaM0hoLWN2aThkeDh5eFpmOA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-65",
          "rank_by_count": 65,
          "name": "엔비디아 독주 흔들리나…구글 TPU, AI 반도체 판 흔든다",
          "easy": "",
          "quote": "엔비디아 독주 흔들리나…구글 TPU, AI 반도체 판 흔든다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 78,
              "title": "엔비디아 독주 흔들리나…구글 TPU, AI 반도체 판 흔든다 - OBC 뉴스",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1YQ0dxY1g2YnFwbGFiejZfMm1yRnQ5UGNrdHlnZ3pPRS1ZOGZTanJuWktTWDhMcEtzR0NRRDFXbDAxbHdtRVhwRDV0dU01VXdDN3oyYWlXLXBCZWJ3TlczRmY0b0l4UlVLeFE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-66",
          "rank_by_count": 66,
          "name": "[단독] \"이젠 후공정까지\"… SK에코플랜트 반도체 영토확장",
          "easy": "",
          "quote": "[단독] \"이젠 후공정까지\"… SK에코플랜트 반도체 영토확장",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 79,
              "title": "[단독] \"이젠 후공정까지\"… SK에코플랜트 반도체 영토확장 - 매일경제",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBEbWdaaTRqUkRxNmpCRkx5NGxXZGYyVzQ1dGJYQ0d0RzF3bmcyZ2VtSVA4ajJGY0MxemRNT1BKLUZ4RGtiMTBzUVZZOWZReWhWNEFIck9R?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-67",
          "rank_by_count": 67,
          "name": "SK하이닉스 美 HBM 공장, 법적 리스크 해소되면서 '탄력'",
          "easy": "",
          "quote": "SK하이닉스 美 HBM 공장, 법적 리스크 해소되면서 '탄력'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 80,
              "title": "SK하이닉스 美 HBM 공장, 법적 리스크 해소되면서 '탄력' - 더트래커",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1qUDJFaWZOWFNKMDJxOFRTcXJiZy1HR0pfUWZ2MHo0cEI5bXFoLTQzb01EYi13XzhyTXZYWVVoVkI0ZkN1eWdXaVFGdTBUR3JOQnlQNVEwb2E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-68",
          "rank_by_count": 68,
          "name": "대만 노사갈등 겪는 마이크론…싱가포르 HBM 공장은 '순항'",
          "easy": "",
          "quote": "대만 노사갈등 겪는 마이크론…싱가포르 HBM 공장은 '순항'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 81,
              "title": "대만 노사갈등 겪는 마이크론…싱가포르 HBM 공장은 '순항' - 지디넷코리아",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5icjNOc2xZb2ZxX3lOMmxhcWctOWRXVjZHbWNqMl9aR3VlM1FRMF9PdXpQLUFuOE1BZXlMQmtwWXJOOE5tX3dTNFhodm96eUx3cWZ5VFJR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-69",
          "rank_by_count": 69,
          "name": "SK하이닉스 노렸던 손정의…천문학적인 몸값까지? [지금이뉴스]",
          "easy": "",
          "quote": "SK하이닉스 노렸던 손정의…천문학적인 몸값까지? [지금이뉴스]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 82,
              "title": "SK하이닉스 노렸던 손정의…천문학적인 몸값까지? [지금이뉴스] - YTN",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMidkFVX3lxTE9WaHJEOGpIYUluWlo1OTBUbUJNN3hZUUdZU1hucmhyTjlSczc3a0tHaHkwSEhrRllGZ3M4Y2RJdjBWeGRSbnRaOFowRUhlbElNSnRnSDZkcTlka20xdEpTaWFtUUY1Uktuc25kbF9JakpQbkdTQVE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-70",
          "rank_by_count": 70,
          "name": "SK하이닉스 하루 7만원 급락…‘공매도 잔고 42배’ 정말 위험 신호일까",
          "easy": "",
          "quote": "SK하이닉스 하루 7만원 급락…‘공매도 잔고 42배’ 정말 위험 신호일까",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 83,
              "title": "SK하이닉스 하루 7만원 급락…‘공매도 잔고 42배’ 정말 위험 신호일까 - 데일리25",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBZTWFxaUc3eFhnbkU1SEdHLVRwNUxFZmRIV05sRnI1ZHhIWXp4bU52dThySXNxODZGb2JHM3M5QjQtUW00dDYwUlY0T1o4Vm1EaWx3cWVUeWZ1RW1jMlkyOXF0aVFBaHNLZ01CWA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-71",
          "rank_by_count": 71,
          "name": "“손정의, 하이닉스 1조달러에 인수 검토”… SK측 “아는바 없다”",
          "easy": "",
          "quote": "“손정의, 하이닉스 1조달러에 인수 검토”… SK측 “아는바 없다”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 85,
              "title": "“손정의, 하이닉스 1조달러에 인수 검토”… SK측 “아는바 없다” - 동아일보",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMidkFVX3lxTE1ocEJWZ3E2NDZDMnp6SXF3cFIwTy1xZWRudGtkQllKWWtrcUE2MzdNeHAtbzI0STR4M3V4TWVaXzIwRFdhRElsbkRZd0dIYXVKbGhEUFFmNjU1ZmNWRXo4bHFLMkl1cXQyS2YzMEl3VkNqeDhvVFHSAWZBVV95cUxPcXpOcVZrazJlekxUbjJNc3dtbk53MlZlcU52S1h5djhKaGEtbEgxX0toWE5xSU45V3JiXzNqZFFqclJOamU1S1pZMUxuWV96WmxqWmFyZzRIWWs3a2dNZDB4ZnZpdUE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-72",
          "rank_by_count": 72,
          "name": "“호황 끝” 공포에 주가 반토막…삼전닉스 3대 불안의 진실",
          "easy": "",
          "quote": "“호황 끝” 공포에 주가 반토막…삼전닉스 3대 불안의 진실",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 87,
              "title": "“호황 끝” 공포에 주가 반토막…삼전닉스 3대 불안의 진실 - 중앙일보",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBRZ3VnSnBrM3ZrN3RRS2xVR3hUTzcySmJYZDdEVHdlTklkaF9WejRGZ0VFMDYyLUk3ZS1ZR20ySnRKbXdoVXdyYW9fLUpFeF9xVFh1ZlRB?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-73",
          "rank_by_count": 73,
          "name": "반도체 품은 경기도내 지자체들 ‘곳간 넉넉’",
          "easy": "",
          "quote": "반도체 품은 경기도내 지자체들 ‘곳간 넉넉’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 90,
              "title": "반도체 품은 경기도내 지자체들 ‘곳간 넉넉’ - 기호일보",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBhb0ttZXZ6UjdqbVdQazJ1cm9YR201anZqeXFrTk00RHllcWtCLXpwTWp2bGFIMks5X2FHRDVxZldsT19PcFhHS3R4NUxnd0UxbXg2ajVGZkN6NWkwOWMzTjNXQXR2TlZ2MUg3ZjhiVQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-74",
          "rank_by_count": 74,
          "name": "반도체로 89조 번 삼성…110조 투자 어디로 향하나 [삼성 AI 투자지도①]",
          "easy": "",
          "quote": "반도체로 89조 번 삼성…110조 투자 어디로 향하나 [삼성 AI 투자지도①]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 92,
              "title": "반도체로 89조 번 삼성…110조 투자 어디로 향하나 [삼성 AI 투자지도①] - 쿠키뉴스",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9HSUpoWFNsQ1lRTF82Vkx0RUhQNHJ1Y1BnalpJNEs1M3dPcVVuS21BWUpVal9haTlkMzhpcFI0enpBTlpKY3ptcGRncFFtbk1xNkpSdDFQSmQtN2kxdzJ5V1F0RQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-75",
          "rank_by_count": 75,
          "name": "삼성전자·SK하이닉스 추천 인사도 공개모집 참여…전남광주시, 반도체실장 내정설 일축",
          "easy": "",
          "quote": "삼성전자·SK하이닉스 추천 인사도 공개모집 참여…전남광주시, 반도체실장 내정설 일축",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 94,
              "title": "삼성전자·SK하이닉스 추천 인사도 공개모집 참여…전남광주시, 반도체실장 내정설 일축 - 진일보 | 전남일보",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5jcUY5Q0tlVTlIaV8tY1NvWm8zWEJMbTBXX2RaUEdCNHNZZ1JhbmdmNTR6dDJsRGVkTWg3TlJHa1laYjVfSURkQ0lwdF9xcWxIM2pPc1NYMzNkWGJjMklXMjFWZnlLWldiQmI2SFFXZw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-76",
          "rank_by_count": 76,
          "name": "'전영현 직할' 졸업한 삼성의 기술 인선… 美 D램 반독점 본안행에 법무 대응 시험대 [위클리반도체]",
          "easy": "",
          "quote": "'전영현 직할' 졸업한 삼성의 기술 인선… 美 D램 반독점 본안행에 법무 대응 시험대 [위클리반도체]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 96,
              "title": "'전영현 직할' 졸업한 삼성의 기술 인선… 美 D램 반독점 본안행에 법무 대응 시험대 [위클리반도체] - 디지털데일리",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9WVG5rQzNmZHU1bG9ISlFaOWdlQUcyVWVaZlRXUmFSRDRVYnRTck9ESUhnZ3hnanpralFjeU5qcnNqaFFxV05wX1BNNDh2WnRodkxCeldCOTB5VnlPUmNSckdYWTg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-77",
          "rank_by_count": 77,
          "name": "우리기술 6.93% 하락…원전주, 수주 기대 넘어 실적 확인 국면",
          "easy": "",
          "quote": "우리기술 6.93% 하락…원전주, 수주 기대 넘어 실적 확인 국면",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 105,
              "title": "우리기술 6.93% 하락…원전주, 수주 기대 넘어 실적 확인 국면 - CBC뉴스",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE44Y19rTlpaa1NOUDFwMlhwZFVmNFlMUzhjbENkcTdaWVZxcko3MEdVZTZVWWNRMHdSRHM2anAtWjc2TXVGbmtQTVB2ZXZXc1lNMV82WlhjdUgtcmxEZG5ZR294QnlGRExn?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-78",
          "rank_by_count": 78,
          "name": "`차세대 원전` SMR 개발 빨라진다…사전검토제 본격 시행",
          "easy": "",
          "quote": "`차세대 원전` SMR 개발 빨라진다…사전검토제 본격 시행",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 106,
              "title": "`차세대 원전` SMR 개발 빨라진다…사전검토제 본격 시행 - 국제신문",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNWlFSYnhocm1sQldqWU5kNjJpcHg1SkR0ZTRQel93Q3VjRFRCb0o3RDFQWlVJRkZrRC1uQV80MjFfUFlPaFB1a3ZkcFNQT2syYUtZQndxUHFFWk9XNnBPM194cG5jQy12d2YxWG1wRFR1SnRsZ21WT1luUlRLdTJINnRGeXlwb0c4YWZnM19R?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-79",
          "rank_by_count": 79,
          "name": "[힘내라 K산업]④ 배 만들던 손으로 원자로…정기선, 빌 게이츠와 '美 SMR 동맹'",
          "easy": "",
          "quote": "[힘내라 K산업]④ 배 만들던 손으로 원자로…정기선, 빌 게이츠와 '美 SMR 동맹'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 107,
              "title": "[힘내라 K산업]④ 배 만들던 손으로 원자로…정기선, 빌 게이츠와 '美 SMR 동맹' - 아시아타임즈",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE4yN0FsbF9IS20tR1IxX0pnTHMzalhrOTVacW5BaU9wQmNIeEJmT2VNb2xONFMtZ1NQTXFOSFg2SUg5YXlqemk0LVNxeUxCRmtleTBMNnN4Z1ZJbEV2NGc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-80",
          "rank_by_count": 80,
          "name": "중국, 육상형 SMR 상용화 성큼.. 원전 수출 경쟁 새 승부처로 부상",
          "easy": "",
          "quote": "중국, 육상형 SMR 상용화 성큼.. 원전 수출 경쟁 새 승부처로 부상",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 108,
              "title": "중국, 육상형 SMR 상용화 성큼.. 원전 수출 경쟁 새 승부처로 부상 - 엔트로피타임즈",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9ELUwzLTlYeXRsYzd2WUVURDREMXZnMkdPbFgzZnZNQWUzWk9XZ0lBcGU3R1d4ZWtvM2EzZmJZdFhpU2NacEotQW5jRGRFbzRmOUtIVl95amN1XzBEZUlDOHN5Zw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-81",
          "rank_by_count": 81,
          "name": "삼성물산 SMR 파트너 ‘GE버노바’ 놓고 잇달아 투자 의견 하향",
          "easy": "",
          "quote": "삼성물산 SMR 파트너 ‘GE버노바’ 놓고 잇달아 투자 의견 하향",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 109,
              "title": "삼성물산 SMR 파트너 ‘GE버노바’ 놓고 잇달아 투자 의견 하향 - 더구루",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE9RS3lkMEEwNTRoa1RoeXQzOTdteFRtZ3hjdUpPRUVxb1E1UE03aGJLR2RuZTNMeHExNDhJWjBLbVBRenI3a1RwUmw5Z1dDSVhwXzk2eldITkp0TUlRaHc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-82",
          "rank_by_count": 82,
          "name": "원자력용 전문밸브기업 삼신-미국 Celeros Flow Technology, 전략적 제휴",
          "easy": "",
          "quote": "원자력용 전문밸브기업 삼신-미국 Celeros Flow Technology, 전략적 제휴",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 110,
              "title": "원자력용 전문밸브기업 삼신-미국 Celeros Flow Technology, 전략적 제휴 - 한국원자력신문",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5LTFNPZ05OTnJYOHBhSTY2eXFVLVZfcUVCMGNPMllmOV9KeFhObXVDeUdydU84dTFfbmZVWE5uOEVMbFJNZDFESG5qbzBSVDVsVURrZ0Z5VDF5QmhKN2g4bmZtMUZvdXfSAWtBVV95cUxOd2xlUjgtWmFFUG1QSlE0azZ0UkR6dUJhYnl2Z2NfeUk0Q2I1MDJ1QXBXcDlXcXYxWGNDekhsOTZWNHRQVHpJTGlBQXNlMGZTdWhHOHRieDlfeUphZ0ZJbkREV2haVUhVYkJudw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-83",
          "rank_by_count": 83,
          "name": "중국 ESS 배터리 계획 생산능력, 세계 출하량 두 배 육박",
          "easy": "",
          "quote": "중국 ESS 배터리 계획 생산능력, 세계 출하량 두 배 육박",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 111,
              "title": "중국 ESS 배터리 계획 생산능력, 세계 출하량 두 배 육박 - 전자신문",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1ueWZaTmdxREZ3dDhsa0VhX19wcDYxME1WT01lZm9XX2YwVUM2SWt2M0pMaC16R2xxaXZzUGxaakhBalhJNUJXYi1XZ3VUQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-84",
          "rank_by_count": 84,
          "name": "세자에너지, 중기부 TIPS 선정… AI·ESS 결합 차세대 분산에너지 관리기술 개발 속도",
          "easy": "",
          "quote": "세자에너지, 중기부 TIPS 선정… AI·ESS 결합 차세대 분산에너지 관리기술 개발 속도",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 113,
              "title": "세자에너지, 중기부 TIPS 선정… AI·ESS 결합 차세대 분산에너지 관리기술 개발 속도 - 쿠키뉴스",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE55dndiS1VPWlVQaHZUalpmSkUxWnBuV0R5QWVfUGY0YU54Ukx3T0lFU3hjejJkMzJuT3VncVpDUzdXSGRmYzZmOXFVVUZYeXpOOE9YVFdEci1abk5YYThPYWJQUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-85",
          "rank_by_count": 85,
          "name": "햇빛소득마을, 착공 전 ‘금융추천서’...포화 배전선로 ESS 지원",
          "easy": "",
          "quote": "햇빛소득마을, 착공 전 ‘금융추천서’...포화 배전선로 ESS 지원",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 114,
              "title": "햇빛소득마을, 착공 전 ‘금융추천서’...포화 배전선로 ESS 지원 - 에너지신문",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE1PODFwaWNZU2ZncEdlUnRCSWdsSDZ2RFc4Q0hzM2tNdHNnZjRiY0hmTmxzdHpMcEtBa1JscjlQdHNtQUFWMDFoN0g4cXBCc21URWtpYWlUVERWSVZyUXVFb1BEajF1RHFxOEtWQjZsWU01Zw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-86",
          "rank_by_count": 86,
          "name": "[주末머니]2027년, EV 아닌 ESS에 주목하라",
          "easy": "",
          "quote": "[주末머니]2027년, EV 아닌 ESS에 주목하라",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 116,
              "title": "[주末머니]2027년, EV 아닌 ESS에 주목하라 - 아시아경제",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFA5VlhzRlFLRXdfblMxTVc3Z0FQTmloamE4bWpFdkRtWE5WNnkwbkxJN1B1UmRIN1g5SUhhTE84UlZEQnltVDczOXdCOGFrUGEwWXRicnkxdXdGSm80QXdjQm5n?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-87",
          "rank_by_count": 87,
          "name": "전력망 막혀 늦어졌던 '농촌 태양광'…ESS로 활로 뚫는다",
          "easy": "",
          "quote": "전력망 막혀 늦어졌던 '농촌 태양광'…ESS로 활로 뚫는다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 117,
              "title": "전력망 막혀 늦어졌던 '농촌 태양광'…ESS로 활로 뚫는다 - 뉴시스",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1VbVlXOG5YZ2dNaHM4VTRIY0JaZGdjMkJ0Mlh5VWt0NVIwWmdSZ21iZW1yRl9XdEZVLVpmSjF3VE5HT0xsVEhYbHg5V25rNUJxdndQaWdkR2dYZmVPY2tLTA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-88",
          "rank_by_count": 88,
          "name": "전기요금 체납 홈플러스 마산점 단전에 입점업체 희망마저 꺼져",
          "easy": "",
          "quote": "전기요금 체납 홈플러스 마산점 단전에 입점업체 희망마저 꺼져",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 120,
              "title": "전기요금 체납 홈플러스 마산점 단전에 입점업체 희망마저 꺼져 - 경남도민일보",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9udGtvNm5yRDdtWm8xNkZVTERxX3ZybDNRZWNQWEd1dThlOGhnQ01sb3UyTlotVEtLX2RxV3RyLXZkOU0zdVdYbXVyd3JCLWMxcXY1cVVfWUlLbXRNRHpvVVFvWTRwMTFLNWc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-89",
          "rank_by_count": 89,
          "name": "새로운 전기 요금 체계 조정 및 사람들이 알아야 할 사항.",
          "easy": "",
          "quote": "새로운 전기 요금 체계 조정 및 사람들이 알아야 할 사항.",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 124,
              "title": "새로운 전기 요금 체계 조정 및 사람들이 알아야 할 사항. - Vietnam.vn",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMikgFBVV95cUxPS2d4eEswcXVJRG00X1lwLTVhOHRXRDFfMmljZ0x1MlVnRGsycDA4ZlE4VVY2Ym5aRk5oakVySlRWOVlQZEd4bXJJeVFNczFGX2tHejN1WkFiUG5qYy1GWUQ1MEl6R2RmVk95NVAwYmg0Q245MndJX2NiMHR1WXkzOUJ2QUpGNXhJWl8tM2k3dnJNUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-90",
          "rank_by_count": 90,
          "name": "하우든, 인도 데이터센터 급증에 보험 공백 경고",
          "easy": "",
          "quote": "하우든, 인도 데이터센터 급증에 보험 공백 경고",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 129,
              "title": "하우든, 인도 데이터센터 급증에 보험 공백 경고 - 한국보험신문",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE9Zc09NaGZYWlZvQ0VHeVJaMkxtNDJRcWw1RjMtaENNdlpwVWwxUGgydnp3LTRkNkhvQWdIOF9rQzhXWFplY2pEWUVpWk1HaUZTSGp0YUtEYlZoc0lBNjItLUpDeDJxYVRkekk40gFvQVVfeXFMTVlqY1RyX1JCQ1hieUdqLU1IMVA0T3dyWFo0TnRuaFRMTmNQOGVtZDV0N1FVQUJEM2dlaVEyenNmV0thLU9DTlZ1MlVra0JXdDBDTE5YSnRIVGxuWUdqN3ZWOFMtdnBySU54RHl3aGFN?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-91",
          "rank_by_count": 91,
          "name": "이재명 대통령, 울산 SK AI데이터센터 현장 방문",
          "easy": "",
          "quote": "이재명 대통령, 울산 SK AI데이터센터 현장 방문",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 130,
              "title": "이재명 대통령, 울산 SK AI데이터센터 현장 방문 - 국악타임즈",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE5mT1RnQm15UUxQdDVocEhCZHp0OHY1ZjNKcU4tQ3pBTjNJRzhMd21CaVA5VjZZbllrdW5wRmJrZVVROEYzbXZObGY0OUw3NVY5bFFjZ3ZWOTVRQldmRnJYdnc0Zw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-92",
          "rank_by_count": 92,
          "name": "강릉 AI데이터센터 행정조사, 허위공약 공방 넘어 실체 규명해야",
          "easy": "",
          "quote": "강릉 AI데이터센터 행정조사, 허위공약 공방 넘어 실체 규명해야",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 131,
              "title": "강릉 AI데이터센터 행정조사, 허위공약 공방 넘어 실체 규명해야 - 강원신문",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE56ZXpQdEs1SXdTaUZpbWFzeE84R0JKeTU5WHNseE53MGduNUJaR3RPODVPd3VvSFBwTlpWMVN5X05raXc2dXZORjJCRFRuQkZZV0Joam5GQUNzWVlKRTNMOFliclJLNFlQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-93",
          "rank_by_count": 93,
          "name": "PV파워 9개월 순이익 목표 614% 달성…LNG 계약 개편 요구",
          "easy": "",
          "quote": "PV파워 9개월 순이익 목표 614% 달성…LNG 계약 개편 요구",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 132,
              "title": "PV파워 9개월 순이익 목표 614% 달성…LNG 계약 개편 요구 - 글로벌이코노믹",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQbUlfMENwNWUtNHlScEQ5ai1TMnl5UFg4Nl9FUFFnaUdJUnJRUUR1M1BhdGdISmFkVkV0NlN1NEhDekFxd0tsU0J4ZDZVT3NmbEZiNXhyY2gwS21oclRaTkROLU5PYXoxeFNRMEowMkFDbENlY1dKQUdYdjhjNHJpTmRpemhyMU1a?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-94",
          "rank_by_count": 94,
          "name": "연료비 급등에도 전기·가스료 동결, 최고가격제 8개월…현실화 요구 커져",
          "easy": "",
          "quote": "연료비 급등에도 전기·가스료 동결, 최고가격제 8개월…현실화 요구 커져",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 133,
              "title": "연료비 급등에도 전기·가스료 동결, 최고가격제 8개월…현실화 요구 커져 - 뉴스1",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE9JeWUyUkZIcjJtcWFERlAtaGFmcGF4TEZ6N2lCdkhQY0gzcFRuYkx2dzR6U1RaMU9nRzl3bmR3SV8yWXgySXQtSEZTWnA2dlMzcnJySw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-95",
          "rank_by_count": 95,
          "name": "'이슈픽 쌤과 함께' 신현돈 교수, \"알래스카 LNG 개발, 한국의 선택은?\"",
          "easy": "",
          "quote": "'이슈픽 쌤과 함께' 신현돈 교수, \"알래스카 LNG 개발, 한국의 선택은?\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 134,
              "title": "'이슈픽 쌤과 함께' 신현돈 교수, \"알래스카 LNG 개발, 한국의 선택은?\" - 비즈엔터",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE13YzNwNV81YVN0N1hPbXZzNzI0TmxXVGswdjRGWF80TWdmSnA0VmVhWGJYNXNpdmlCcmw5MlNZdXZEYzlYeHcyUVBMNWtJd0k5VmwwZ1l3?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-96",
          "rank_by_count": 96,
          "name": "영국 가계 에너지 요금, 2027년 1월 26% 급등…2023년 이후 최고 - 뉴스 및 통계",
          "easy": "",
          "quote": "영국 가계 에너지 요금, 2027년 1월 26% 급등…2023년 이후 최고 - 뉴스 및 통계",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 138,
              "title": "영국 가계 에너지 요금, 2027년 1월 26% 급등…2023년 이후 최고 - 뉴스 및 통계 - IndexBox",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQUFlGNmQ0Vy1ZMHVhVGttcllsUUZoYWZ1ajRVMGpJbUs1dDZoOTBUVnpPNU1NaW93bnQtaGt0QmRoNXhPN3lmVXI1ak91LWlpbnMzYXgxbnBhQWx0aWxjRzd0bEtYcGR2dFZDN0owbjdEWTBuZGxnUXgtTENQcTJPRlVfZGdoNnpYNnptUU44YmMxeU11ZFE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-97",
          "rank_by_count": 97,
          "name": "수출 1조 달러 열었지만…통상압박·양극화·반도체사이클 ‘삼중 과제’도",
          "easy": "",
          "quote": "수출 1조 달러 열었지만…통상압박·양극화·반도체사이클 ‘삼중 과제’도",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 141,
              "title": "수출 1조 달러 열었지만…통상압박·양극화·반도체사이클 ‘삼중 과제’도 - 한겨레",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE4tYnQ4WXdWZ001RkgxUE1vVjJibE5GN3lnNDVGY3YyX0Q1SFhRd19BRnVGN3J2ZW5xaG1HQ1FLeWZzNUw0STRpOXpJSW94Zm94cTJRaXFSVFZNUURfMXNDUkptaU5MOTRtVG9rdHV0Y3hJUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-98",
          "rank_by_count": 98,
          "name": "‘깐부’ 없는 韓반도체, 美 대중 규제 올라타야 [윤경환 특파원의 브레이킹 뉴욕]",
          "easy": "",
          "quote": "‘깐부’ 없는 韓반도체, 美 대중 규제 올라타야 [윤경환 특파원의 브레이킹 뉴욕]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 143,
              "title": "‘깐부’ 없는 韓반도체, 美 대중 규제 올라타야 [윤경환 특파원의 브레이킹 뉴욕] - 서울경제",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE9nS2wzRFFIMFFtLXl1VExwXzZHRnRJdWFocGVSdkQtQkV5MDNZUmM5ZkxoZU9Dc3Jqc1NQR2laYjVlMTVBRTR0cEc5bHZCUTRiNUHSAVNBVV95cUxNdHlPRkxUTU5tLXE4Z1hRUkpxVUxtdC1FLVZTczU4UVhDdktFSVVISDNkSDlmd3p2V24yNDQxQzNCOTBKV0ZQZUNZNzI1NXlLVzZSMA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-99",
          "rank_by_count": 99,
          "name": "금융위기 오나요? 반등 가능한가요? 다음주 국내증시, 미국증시 전망 (feat. 22년, 25년 하락 차이점)",
          "easy": "",
          "quote": "금융위기 오나요? 반등 가능한가요? 다음주 국내증시, 미국증시 전망 (feat. 22년, 25년 하락 차이점)",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 144,
              "title": "금융위기 오나요? 반등 가능한가요? 다음주 국내증시, 미국증시 전망 (feat. 22년, 25년 하락 차이점) - 네이버 프리미엄콘텐츠",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMigwFBVV95cUxOVDBBSm10V1ZBcUFLVUpCWnBCT0lOcHFXQU51QlR0cVl1cm1yUC1melhZRnRjdGFidHBEa3VnRjc3R0ZHVFhpa01xOVBtWER2N1dnNnhMV3o4cVJEb0lhYTVBM0R2c0NvOXhNdFB0b2tQVXN4MWtzakdxeVFwQkhTYldtcw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-100",
          "rank_by_count": 100,
          "name": "[곽재원 칼럼] 3500억 달러 청구서 …블루 쓰나미 넘는법",
          "easy": "",
          "quote": "[곽재원 칼럼] 3500억 달러 청구서 …블루 쓰나미 넘는법",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 146,
              "title": "[곽재원 칼럼] 3500억 달러 청구서 …블루 쓰나미 넘는법 - technovalue.com",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE9VM1lNWUhlZWY3RVZjcUJqdEhkenNtdXdNcm10NkYwV0h2THZDWGFlNlRSZGRpTWFJRzVwSGtZbnU3RFhDTHVaTVhVOFRPZDlPcnZ3cUdaQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-101",
          "rank_by_count": 101,
          "name": "[뉴욕채권-주간] 연준 긴축 증시가 대신 해주나…다가오는 '침묵 기간' |",
          "easy": "",
          "quote": "[뉴욕채권-주간] 연준 긴축 증시가 대신 해주나…다가오는 '침묵 기간' |",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 149,
              "title": "[뉴욕채권-주간] 연준 긴축 증시가 대신 해주나…다가오는 '침묵 기간' | - 연합인포맥스",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE9jLURlb0xuUDgxT0xKZFo5dUJKM1dKV285ZE05cXAxaWRFeXFSdlpPNXNhTXRZcEtjUEJPTmJKNWxWTGVESk1CU21FRzRtdlA1SVZoQVNjeWF0eFZXcVFtZmRVc2N5RUdsdGVXa250bnlVdzF3?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-102",
          "rank_by_count": 102,
          "name": "암호화폐 5%만 상승…연준 금리인상 우려",
          "easy": "",
          "quote": "암호화폐 5%만 상승…연준 금리인상 우려",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 152,
              "title": "암호화폐 5%만 상승…연준 금리인상 우려 - BeInCrypto",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1Ib204VWhjbDV2bmpFZ01CV2JOR0FuUFp5MDNvM3FQQjdFX3lWVmVQamtIWm9pNHU2QS01U3c0VkRvOVlkMkxlWldyTllfbl90NGlMV1htOWtKNHZPLUh1QkFFUHliY0E4THdQc3RQN1pKZmhQOFRSRko1U1UyQ1k?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-103",
          "rank_by_count": 103,
          "name": "증시는 폭락했는데, 연준은 금리 올린다?[11/23~27 투자캘린더]｜Global Money Club",
          "easy": "",
          "quote": "증시는 폭락했는데, 연준은 금리 올린다?[11/23~27 투자캘린더]｜Global Money Club",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 153,
              "title": "증시는 폭락했는데, 연준은 금리 올린다?[11/23~27 투자캘린더]｜Global Money Club - 중앙일보",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9Yem1nQU4tOTdtLTk2dGxSdjRSSnMtcWdqSmdiZnhubFBtaGxuMkhWVjU5SkYzTWxweTl5QWhKUWYzV2tYOVhSemNIb0FaQ1AwRGdZY2o2YzVqbTg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-104",
          "rank_by_count": 104,
          "name": "한은, 석 달 만에 금리 인상 재개 전망…\"내년까지 긴축\"",
          "easy": "",
          "quote": "한은, 석 달 만에 금리 인상 재개 전망…\"내년까지 긴축\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 154,
              "title": "한은, 석 달 만에 금리 인상 재개 전망…\"내년까지 긴축\" - 연합뉴스",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFA2a2w0dkxyOERFRTZnSW0zUEJsUGtWUDZmQ0hkWnJERFlpeElnN2lwcHEzSWhFZmhILU5LYVdzZzFJaGE1RU4tSFF5bWdVczhkZDd6RjJVZmNrRVnSAWBBVV95cUxPOEFtQTczV1JEYUFMb2ZFVlk1LS1VeEFOVEhBT2RHRVhIRGx6dUxMSmVTeDBwNE5MYVVLaEN6ZkNBRVM2T0V6eXhlQ012clA5RVJVMi1MR3lJMXA2bmd4enY?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-105",
          "rank_by_count": 105,
          "name": "금리 내릴 땐 나란히, 올릴 땐 ‘껑충’…신용대출 이자 상승폭, 예금의 2배",
          "easy": "",
          "quote": "금리 내릴 땐 나란히, 올릴 땐 ‘껑충’…신용대출 이자 상승폭, 예금의 2배",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 161,
              "title": "금리 내릴 땐 나란히, 올릴 땐 ‘껑충’…신용대출 이자 상승폭, 예금의 2배 - 중앙일보",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9IU2FFTERHM1hsZ3VoMXotVEdCTy0xY1lNaEFUeURJMmt1dEFfVXQ3ZEtMN2hZR3dKMmFjM09lQ0dKZjA5dzlfS0xCVWE0dW13eUZGWHdR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-106",
          "rank_by_count": 106,
          "name": "[지식인미나니의 과학현장] 딥테크 사업화 페스티벌서 본 '한국의 딥테크' 현주소",
          "easy": "",
          "quote": "[지식인미나니의 과학현장] 딥테크 사업화 페스티벌서 본 '한국의 딥테크' 현주소",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 163,
              "title": "[지식인미나니의 과학현장] 딥테크 사업화 페스티벌서 본 '한국의 딥테크' 현주소 - AI포스트",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE84bzlId3U1ZldlTzdydVhjd3B1Ul84al9fNHNBVU5TYUZuSkhucUpkam9zd3NxR2laWjJlWlViWFZCYVItczI0WjJUYkYwS1NxajJ3a0dKbEt2QjdKOHZVTFdfM3E0RnhTVDRUc080WHMzZ9IBckFVX3lxTE84bzlId3U1ZldlTzdydVhjd3B1Ul84al9fNHNBVU5TYUZuSkhucUpkam9zd3NxR2laWjJlWlViWFZCYVItczI0WjJUYkYwS1NxajJ3a0dKbEt2QjdKOHZVTFdfM3E0RnhTVDRUc080WHMzZw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-107",
          "rank_by_count": 107,
          "name": "상온 초전도체 기대 식었나…고려제강·신성델타테크까지 매도 봇물",
          "easy": "",
          "quote": "상온 초전도체 기대 식었나…고려제강·신성델타테크까지 매도 봇물",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 164,
              "title": "상온 초전도체 기대 식었나…고려제강·신성델타테크까지 매도 봇물 - 핀포인트뉴스",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTE9tTlJUQTV6Tjc5bUdXRVhlTVF2MUNEeVpzUnhiM2tuVnJLNnZLYXJRMEt5V2VtMjNxcVRCODhJS2o3T0tWUGJNVmJLQy1XUnVVNGhLNlZlOVdZZnNBUXhQTGVmcVladFE5VEV0TDlTN0xIYlhfUVFv0gF3QVVfeXFMT21OUlRBNXpONzltR1dFWGVNUXYxQ0R5WnNSeGIza25Wcks2dkthclEwS3lXZW0yM3FxVEI4OElLajdPS1ZQYk1WYktDLVdSdVU0aEs2VmU5V1lmc0FReFBMZWZxWVp0UTlURXRMOVM3TEhiWF9RUW8?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-108",
          "rank_by_count": 108,
          "name": "지멘스·애지봇, AI 에이전트 활용한 휴머노이드 로봇 그리퍼 설계 기술 공개",
          "easy": "",
          "quote": "지멘스·애지봇, AI 에이전트 활용한 휴머노이드 로봇 그리퍼 설계 기술 공개",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 165,
              "title": "지멘스·애지봇, AI 에이전트 활용한 휴머노이드 로봇 그리퍼 설계 기술 공개 - 로봇신문",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBzekExd1pzdUdFWjVIREJkOEt0cXJXQllvQVgxczVER1B5WWJEN2xlMzVsdExoOEU2QzYwYzJIR3pkQUZPQTlzZTNzVzVuVV9ucndDVFVEeUlqUDJ0d09RS0plcUtzc04yOTJleA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-109",
          "rank_by_count": 109,
          "name": "코스닥 시총 상위 10등에 2곳…이젠 '로봇' 시대",
          "easy": "",
          "quote": "코스닥 시총 상위 10등에 2곳…이젠 '로봇' 시대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 166,
              "title": "코스닥 시총 상위 10등에 2곳…이젠 '로봇' 시대 - 매일경제 마켓",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBjSFlJOTFvLUZhbnE2Z1ZBTE5WXzFHYmpubjFmdlRUbzRnOEpSNER5c2V5LWF1Wms3VllUS1g4dkt1TzdCOTVQeFY3bzJ1ZC1hTkE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-110",
          "rank_by_count": 110,
          "name": "1X, 가정용 휴머노이드 '네오' 12월 개발자 공급…로봇 학습 생태계 구축",
          "easy": "",
          "quote": "1X, 가정용 휴머노이드 '네오' 12월 개발자 공급…로봇 학습 생태계 구축",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 167,
              "title": "1X, 가정용 휴머노이드 '네오' 12월 개발자 공급…로봇 학습 생태계 구축 - 로봇신문",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9aUk5aV2hKcE1RSFNuZ3oyN0RfQW53UlctS0tPZjFaUHVTbnJJcmN0aW1KWHBEeEtuTElIVmZxT2VRNGZlWDllMlRpZEFKYmtLeGwyWDhaRExDRDJSODVxVHVqWUJzclE3aXMyQg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-111",
          "rank_by_count": 111,
          "name": "48﻿「휴머노이드(Humanoid) 시대」Ⅴ. 행정과 공공서비스-﻿도시 안전 감시 로봇",
          "easy": "",
          "quote": "48﻿「휴머노이드(Humanoid) 시대」Ⅴ. 행정과 공공서비스-﻿도시 안전 감시 로봇",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 168,
              "title": "48﻿「휴머노이드(Humanoid) 시대」Ⅴ. 행정과 공공서비스-﻿도시 안전 감시 로봇 - 문경시민신문",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMie0FVX3lxTE82R0lDYktZNTRxZmdUdGtseW1BRTloNWZ6eC02ck5Nczh5Y01xSWpsUkYxUjdzeGVkMC0zM0xXdjRMM2YzMjB4eUt4QmlPWllUNFVrb1FBX2F2OWFjd1FtWlpHeWpCZDdvaFpvUGRlWXBTLTU1cUYwWGdMZw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-112",
          "rank_by_count": 112,
          "name": "로봇 수장에 힘 실은 삼성·LG, 휴머노이드 주도권 본격화",
          "easy": "",
          "quote": "로봇 수장에 힘 실은 삼성·LG, 휴머노이드 주도권 본격화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 169,
              "title": "로봇 수장에 힘 실은 삼성·LG, 휴머노이드 주도권 본격화 - 뉴스토마토",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFBHa2hvT2hMdlBnWnNnM3hhVWw4UWpJZ3ZlS2t3QkZxZDlRWG5kdFZJMUVYZVRQTExCRVNUUWQtMDR3eWhJdHN2bEJobGRyencwUG1QOU9GeUhDejJWcTFaRQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-113",
          "rank_by_count": 113,
          "name": "미래 먹거리라더니 줄줄이 하락…레인보우로보틱스·뉴로메카도 못 버텼다",
          "easy": "",
          "quote": "미래 먹거리라더니 줄줄이 하락…레인보우로보틱스·뉴로메카도 못 버텼다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 170,
              "title": "미래 먹거리라더니 줄줄이 하락…레인보우로보틱스·뉴로메카도 못 버텼다 - 핀포인트뉴스",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTE5vbGJkQjBsVHJIbmJGbTdKRVRnODVNeVlTM0x5dC1wNTRIeGNQQ0pfUEVVMXJiZU9nOTh2MzNBVHZ3RmNWNkhUa2FiRVV1bVlqbmxoY3BsOXdqMW94RDN0VnJtY1I0QUJPOTdHYnpJTEVmSnNLc2RB0gF3QVVfeXFMTm9sYmRCMGxUckhuYkZtN0pFVGc4NU15WVMzTHl0LXA1NEh4Y1BDSl9QRVUxcmJlT2c5OHYzM0FUdndGY1Y2SFRrYWJFVXVtWWpubGhjcGw5d2oxb3hEM3RWcm1jUjRBQk85N0dieklMRWZKc0tzZEE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-114",
          "rank_by_count": 114,
          "name": "CES 가까워지자 로봇주 약진",
          "easy": "",
          "quote": "CES 가까워지자 로봇주 약진",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 171,
              "title": "CES 가까워지자 로봇주 약진 - 중소기업신문",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE1WWHl3bmhOQ3NIVE54MFFRWW4yZHREdHduSE5SRGRrdVNUMjBKLXNRWUxkcGkxR2FWVzRVS0N3SEFSdWIwcEZzRGd1dno0MkM4cUI0NlVvd0djOXBqWW4zVHdSem85UVdfV2hyNjh3?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-115",
          "rank_by_count": 115,
          "name": "글로벌 1위 휴머노이드 '애지봇' 온다…25일 판교서 세미나",
          "easy": "",
          "quote": "글로벌 1위 휴머노이드 '애지봇' 온다…25일 판교서 세미나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 172,
              "title": "글로벌 1위 휴머노이드 '애지봇' 온다…25일 판교서 세미나 - 하이테크정보",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9nTVdZUFFaOFBvSWpGVElDTmVVMDFvdFdmWS1WcEhUVVVEMGNsVEdRZXBfOVk3a0xBbzhMWExxbE85cEVVOUtnR2pqb1gwempvaDM2RmlJc1Nlc1RXclJDSmdrLWpGb1dBZmsxVNIBbEFVX3lxTE9nTVdZUFFaOFBvSWpGVElDTmVVMDFvdFdmWS1WcEhUVVVEMGNsVEdRZXBfOVk3a0xBbzhMWExxbE85cEVVOUtnR2pqb1gwempvaDM2RmlJc1Nlc1RXclJDSmdrLWpGb1dBZmsxVA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-116",
          "rank_by_count": 116,
          "name": "K배터리 미국 시장 의존도 너무 높아, 유럽·인도로 '동맹 확장' 필요성 제기",
          "easy": "",
          "quote": "K배터리 미국 시장 의존도 너무 높아, 유럽·인도로 '동맹 확장' 필요성 제기",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 174,
              "title": "K배터리 미국 시장 의존도 너무 높아, 유럽·인도로 '동맹 확장' 필요성 제기 - 비즈니스포스트",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTFB6dENPdGtXNk9pLW1Bd2JkeEJaTmxvRGhzVzlqTTdkYTlhbUZrblNHbXpXY0Zsei05OGVMRi1WZmtrQWd6ZlFjdEQwTE5WRk5Ma0M1NFZiM2FYbWhESEQxaWIwc082MUhMSkpLMzVycjVEMm8?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-117",
          "rank_by_count": 117,
          "name": "피지티, 증권신고서 제출...최대 280억원 공모 추진",
          "easy": "",
          "quote": "피지티, 증권신고서 제출...최대 280억원 공모 추진",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 180,
              "title": "피지티, 증권신고서 제출...최대 280억원 공모 추진 - 월요신문",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1CN1dwbmhOYU9xNmYxdjJCZ0MxLVRMRmpqZnN0MEpmZHVpaWY3bEdDaEh3SUVndEZEUzV4VW9Wek1RRFlsbjhjWW1zR2NKYXg4RnVJdzNTaThTNHBXLTNvWDFLaW1ST3QyaWc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-118",
          "rank_by_count": 118,
          "name": "중국에 쏠린 원자재···K방산 무기 생산 ‘경고등’",
          "easy": "",
          "quote": "중국에 쏠린 원자재···K방산 무기 생산 ‘경고등’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 182,
              "title": "중국에 쏠린 원자재···K방산 무기 생산 ‘경고등’ - 이뉴스투데이",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTFBON1ZQZDRRRzJWTU5fbDB4RkFDclRlazN6cmI2eWR4MEh2VEQ2dk5uNWw3bS10eG1zMllJbExZZmhzQ2pEM1BoVXZpYkx0SElsYmxfbS1fTW1ETmpyRElrUFd2Z2lvb1o4cUxCYzh2NERsQdIBdEFVX3lxTE9ER3g4Rm1pWHJ4eGhaakJnckxJTUVoVC1ON21lZlhkX18zMVZHbU56ZHA3bU9pNWdZa2w3dW1heWF3dDFDX01udDJUeUh1bmZnLVAxU3FLYmxiV0QxWlZYMEpPeHBhTVdfZm44dGwxUWV1b1p0?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-119",
          "rank_by_count": 119,
          "name": "아시아뉴스 태국, 미얀마 희토류 채굴용 화학물질 수출 차단 추진… 국경 간 환경오염 대응 본격화",
          "easy": "",
          "quote": "아시아뉴스 태국, 미얀마 희토류 채굴용 화학물질 수출 차단 추진… 국경 간 환경오염 대응 본격화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 183,
              "title": "아시아뉴스 태국, 미얀마 희토류 채굴용 화학물질 수출 차단 추진… 국경 간 환경오염 대응 본격화 - 뉴스케이",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBLeTBfZUdPMUFSbnp4YklKZzJTeGsySjJna21qTll0R1gwYXJNV09TV1FUQUN2RzlyVGh5b0tPTVNYVGI2ZVFRQlItMVNoWlg3OEpfZXBGLWRSQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-120",
          "rank_by_count": 120,
          "name": "中 영구자석 수출규제 여파…로보티즈 3분기 26억 적자 : 산업",
          "easy": "",
          "quote": "中 영구자석 수출규제 여파…로보티즈 3분기 26억 적자 : 산업",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 184,
              "title": "中 영구자석 수출규제 여파…로보티즈 3분기 26억 적자 : 산업 - 재경일보",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE9GTDV0UVdyZlFuOVhNV0lScjQ3VnZhdDcxcFlyQzN1S2pZQ3Fha3FNOFBLZlE1V2IyTzQtT3k5Y1JvbFdObThEdWxiNA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-121",
          "rank_by_count": 121,
          "name": "양자 컴퓨팅, 신약보다 '에너지 전환'서 첫 상용화 결실 맺는다",
          "easy": "",
          "quote": "양자 컴퓨팅, 신약보다 '에너지 전환'서 첫 상용화 결실 맺는다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 933,
              "title": "양자 컴퓨팅, 신약보다 '에너지 전환'서 첫 상용화 결실 맺는다 - 글로벌이코노믹",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQQVVMQVZoZjFfVk9MeW9uS3ZINGlWQ0U4aDRfQ2Nsa3dDT3B4QXBtWjJ4SU15RlVTNHlMdE5XajVHeVc3NXlkVFk0emF0aHhvRThTd0tVbU5HVXlZY241bUR1YnZaQVJmenJaOVVKeDYtUDRmNmNjRHRzcjVzMnZmeTR3WVlaRUE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-122",
          "rank_by_count": 122,
          "name": "양자컴퓨터 첫 실익, 전력망이 앞선다",
          "easy": "",
          "quote": "양자컴퓨터 첫 실익, 전력망이 앞선다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 934,
              "title": "양자컴퓨터 첫 실익, 전력망이 앞선다 - OBC 뉴스",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9BYWdMMng3QXcyUjNhWmNoTHdaOWJHUHlHZFdtRWdhM0p5WEZDNkg5eUk2UXVsMkxWVG1teTVBSFlDMHBIQ1laQW5GUVM0UGI3LUdvWkxfQmJKb2w5Q2M0R1dsamlLX1ZBaWc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-123",
          "rank_by_count": 123,
          "name": "정부가 첫 고객이 된다: 영국·미국·프랑스 양자 투자 구조 분석",
          "easy": "",
          "quote": "정부가 첫 고객이 된다: 영국·미국·프랑스 양자 투자 구조 분석",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 935,
              "title": "정부가 첫 고객이 된다: 영국·미국·프랑스 양자 투자 구조 분석 - 한국공공정책신문",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMiQ0FVX3lxTE5mdWJ1X0xpTEFVREhwNFBCd19NenRjZmFiX3Y5ODRacFBDek82QUw5M1NBd1VLS0hleDgxOGs2ZlluNWc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-124",
          "rank_by_count": 124,
          "name": "아이온큐, 매출 24배 기업가치 논란…양자컴퓨터 성장 기대와 적자 부담 교차",
          "easy": "",
          "quote": "아이온큐, 매출 24배 기업가치 논란…양자컴퓨터 성장 기대와 적자 부담 교차",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 936,
              "title": "아이온큐, 매출 24배 기업가치 논란…양자컴퓨터 성장 기대와 적자 부담 교차 - 제민일보",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTFA4Q3RLNnVUWXVmdHRqNmc5NGdYakxLVWN4UWFSVGk3MlpFTXNiMEpiSXYwOVp1b1NRNzJlNkhJZEROTjF2dFZkTE1MTmtCWTZ4QVJQdFpEU3E2LUpiVUJ3LW44Qkg4dw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-125",
          "rank_by_count": 125,
          "name": "바이오의약품 임상 승인 203건…분기마다 증가",
          "easy": "",
          "quote": "바이오의약품 임상 승인 203건…분기마다 증가",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 938,
              "title": "바이오의약품 임상 승인 203건…분기마다 증가 - 한국의약통신",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE4yWFhJQVZNT3lsWTVXRE5EeUhDTmJqejlabUd3TW9MbFQ2eEoxdHFvb2xUNGxZajVDeENEWU5JNnpqdlVDTG8zSEhRM2ZYbDljSjZfR0xBU1dwUnNTbFU0RWVaTmdZd1lEV3Fn?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-126",
          "rank_by_count": 126,
          "name": "미 FDA, 의약품 허가 심사자료 해외 공유 지원",
          "easy": "",
          "quote": "미 FDA, 의약품 허가 심사자료 해외 공유 지원",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 945,
              "title": "미 FDA, 의약품 허가 심사자료 해외 공유 지원 - 메디포뉴스",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE0xVUk4WXhJaUdkeE1iT2k0dG9yYnR0TVBnWWdaZGRZN2Y5YXA1MnUxdHIzcHBmUVZBc3BlaURxRTdlMEY4UklmczZ0M0RDZnVUZG90Z0xPZVE5UnNENzdIcnlDa1E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-127",
          "rank_by_count": 127,
          "name": "원전 전력거래 5년간 기준가격 적용…전력시장 구조 개편 본격화",
          "easy": "",
          "quote": "원전 전력거래 5년간 기준가격 적용…전력시장 구조 개편 본격화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 947,
              "title": "원전 전력거래 5년간 기준가격 적용…전력시장 구조 개편 본격화 - 시사통신",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBFc2dQQVFSTE5nY3ZvTlR5WTVJRklXT1lJcTY1R0p2YURoYzVSMGFqbzBSYUhZRnFCeXpyc25UZXlrLWs3Y3RDVS1yakRSbU9ZMWtHWlR5TENmZWM4OGo0eV8wUmNtRVF40gFrQVVfeXFMT0x3TXpVMm1wWFp1U1Bmc2FUMmRrQnBiV1lPNGpLX2FMcUtlTm9lLTBLMkVYU0V6ZktianZaRHQ1MEZfUFVjdHp0QXFmd3BZVkFlYWVtMy1VdkEtLTFFTGFvT2V5aFJ2VnpPeHM?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-128",
          "rank_by_count": 128,
          "name": "[기획]원전·재생·석탄…전력망 재설계 韓 ‘에너지 딜레마’",
          "easy": "",
          "quote": "[기획]원전·재생·석탄…전력망 재설계 韓 ‘에너지 딜레마’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 949,
              "title": "[기획]원전·재생·석탄…전력망 재설계 韓 ‘에너지 딜레마’ - 매일일보",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE8tVTVaMUIxSEtzQnpaM1Bva3VsSzZPMjNXNEJBS3IwVE1udWUwQmx5S0R3Nm81SS1uRm0xNG5xM2c4cXdxOThodXVCX2xOanp0UVRLMExkQnVEWDMwYk10TlEyQm4?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-129",
          "rank_by_count": 129,
          "name": "[심층보도] 용인 반도체, 굴착기가 송전선을 앞질렀다",
          "easy": "",
          "quote": "[심층보도] 용인 반도체, 굴착기가 송전선을 앞질렀다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 950,
              "title": "[심층보도] 용인 반도체, 굴착기가 송전선을 앞질렀다 - 경기헤드뉴스",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE53SVh0T3BoY0FLOWRTcGREM280WHlYZ2xCZDNPS05TX2NJckJzc0xhZmZCTnQ0QWlSQ19LbWFiNlZaUlB0ZmRXbkstS0Z5RURkRkQzcDdLUWUzdw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-130",
          "rank_by_count": 130,
          "name": "R(ND)천연가스발전소 준공으로 구미 에너지 지형 바뀐다",
          "easy": "",
          "quote": "R(ND)천연가스발전소 준공으로 구미 에너지 지형 바뀐다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 951,
              "title": "R(ND)천연가스발전소 준공으로 구미 에너지 지형 바뀐다 - 안동MBC",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxOWTBFbmhZVVZqMFRKaWI5NlJPb1RPZHo2cW5lZVcxdmljV3AzM2NiOWVJNkVqM3BwVnI5ZTdDN2VyUW1INjBoalZzLXpWWHFqMzdoVGJsUVZDTWRRS0VRVFpFcFZpelQyZzVVVFFucnFscjU3ZTlQUVM1Yk1WbThaSjhHS3VRakI0ZVZLWl9wRXpBNXRSaUhOOVlGeDRZdFFHNjlFczNna1dYMDQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-131",
          "rank_by_count": 131,
          "name": "가을은 농민의 시간?…이상기후 여파에 경남 농가들 ‘비명’",
          "easy": "",
          "quote": "가을은 농민의 시간?…이상기후 여파에 경남 농가들 ‘비명’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 954,
              "title": "가을은 농민의 시간?…이상기후 여파에 경남 농가들 ‘비명’ - 뉴스경남",
              "source_name": "'기후변화 엘니뇨 이상기후'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE12UVdCY1VocTZYU1g4NzQ3UGNMems3eVltclJaNkZFSVVXcVJkSS1nMjMyMkt4TTc4RC14dzFXZGdpX1dKRWU2OHNJMG9BTXdvdkkyWWdCZUZsdXJ5b3JVOERuOTRxMDdQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-132",
          "rank_by_count": 132,
          "name": "인도네시아: 산불로 약 288만 헥타르의 산림과 토지가 파괴되었으며, 이로 인해 국내총생산(GDP)의 2.69%에 해당하는 경제적 손실이 발생했습니다.",
          "easy": "",
          "quote": "인도네시아: 산불로 약 288만 헥타르의 산림과 토지가 파괴되었으며, 이로 인해 국내총생산(GDP)의 2.69%에 해당하는 경제적 손실이 발생했습니다.",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 958,
              "title": "인도네시아: 산불로 약 288만 헥타르의 산림과 토지가 파괴되었으며, 이로 인해 국내총생산(GDP)의 2.69%에 해당하는 경제적 손실이 발생했습니다. - Vietnam.vn",
              "source_name": "'기후변화 엘니뇨 이상기후'",
              "link": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxQQVhrcFBEY3EyaF9odENSR3JDV2ZObWZ4UVNlbUZVVW90SHE5a1VZVnktVEpjT0FZSjZqd0lYSWxLUlluc2RjbkVtbkhBTkVpTWg0MUxuaVdHVVZlQi1UeWRLOHlnVkd2SG5LbXA3OUhkMGNLeGVpS2QwRGxJd2tVdkpiUU05Q0I4OEdKOVpGSXZKYUFwVFdGZDNiYW1HR0xFOHVUN2M5a0lINWl5YTBnSGJaY3VweTFMbS1ZQWdJLVBibXdHNGx2UHQyUWpkdFJIT3c?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        },
        {
          "id": "e261123-133",
          "rank_by_count": 133,
          "name": "한남대-케이티샛 ‘우주·위성 전문인력 양성’ 업무협약",
          "easy": "",
          "quote": "한남대-케이티샛 ‘우주·위성 전문인력 양성’ 업무협약",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 960,
              "title": "한남대-케이티샛 ‘우주·위성 전문인력 양성’ 업무협약 - 중부매일",
              "source_name": "'위성통신 6G 기술'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9HbmRmSjZqLW1NdlQxVmFJSVhpdE1pQnZDbEg4V1lwS3JWVFhPVmk3clhzbVpxR3R4Nk9nNkxZTHNDdTdic19KQkdJZVJsd29DdXFPTFNDVC1CZGtaeUt4d05CMkFjVE5mQUHSAW5BVV95cUxOSTlNVFdjbjZVS0FFcXQwWTh2Y0ZYQ2NlTFp2WEFMWTg0V0doQ1hQVEFPOEY3UVVwX25NSXJpZHRqUHBkWVF4NWk2YTkwNGpHOUpPTi15U0ZtMXZBNk9TUXV1ZGlWZFRPUW5NQlN1QQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        }
      ]
    },
    "ch5_papers": {
      "title": "챕터 5 · 논문",
      "addr": "처리-4",
      "kind": "papers",
      "day": "2026-11-22",
      "day_label": "11월 22일(어제)",
      "day_rel": "어제",
      "day_note": "11월 22일(어제) 논문이에요. 오늘 논문은 논문 풀이(새벽 바퀴 바로 뒤, 백업 12:07)가 끝나면 이 자리로 바뀌어요.",
      "made": "2026-11-22T04:30:57",
      "picks_max": 10,
      "status": "돎 — 2026-11-22 논문 풀이 150편 / 새 논문 5편",
      "headline": {
        "text": "11월 22일(어제) 새 논문 5편 · 풀이한 150편 중 AI 모델·학습법 쪽이 88편으로 가장 많아요. (arXiv는 오늘 새 목록이 없었어요)",
        "text_orig": "오늘 새 논문 5편 · 풀이한 150편 중 AI 모델·학습법 쪽이 88편으로 가장 많아요. (arXiv는 오늘 새 목록이 없었어요)",
        "n_new": {
          "val": 5,
          "source": "v2_secretary/결과/논문/2026-11-22_논문.json"
        },
        "n_done": {
          "val": 150,
          "source": "v2_secretary/결과/논문/2026-11-22_논문.json"
        },
        "n_done_new": {
          "val": 5,
          "source": "v2_secretary/결과/논문/2026-11-22_논문.json"
        },
        "n_done_backlog": {
          "val": 145,
          "source": "v2_secretary/결과/논문/2026-11-22_논문.json"
        },
        "n_waiting": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-22_논문.json"
        },
        "n_failed": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-22_논문.json"
        },
        "top_tag": "AI 모델·학습법",
        "top_tag_n": {
          "val": 88,
          "source": "v2_secretary/결과/논문/2026-11-22_논문.json"
        }
      },
      "flow": {
        "text": "11월 22일에 풀이한 논문들 중에서는 인공지능 모델과 학습법, 그리고 에이전트 도구를 다룬 내용이 가장 많았는데요. 예를 들어 자율주행 주행 정책 맞춤형 데이터 가치 평가 프레임워크인 패드를 제안하거나 인공지능이 스스로 지피유 커널을 설계하고 최적화하도록 만드는 연구가 눈에 띄었습니다. 이와는 다르게 의료와 바이오 분야에서는 정형 기록과 임상 메모를 합친 다중 모달 모델로 당뇨병 환자 재입원을 예측하는 연구도 함께 다뤄졌거든요. 결국 방대한 모델 학습법부터 실제 임상 적용까지 다양한 현장 문제에 접근하는 흐름이라고 볼 수 있습니다.",
        "by": "ai",
        "flags": [],
        "text_orig": "오늘 풀이한 논문들 중에서는 인공지능 모델과 학습법, 그리고 에이전트 도구를 다룬 내용이 가장 많았는데요. 예를 들어 자율주행 주행 정책 맞춤형 데이터 가치 평가 프레임워크인 패드를 제안하거나 인공지능이 스스로 지피유 커널을 설계하고 최적화하도록 만드는 연구가 눈에 띄었습니다. 이와는 다르게 의료와 바이오 분야에서는 정형 기록과 임상 메모를 합친 다중 모달 모델로 당뇨병 환자 재입원을 예측하는 연구도 함께 다뤄졌거든요. 결국 방대한 모델 학습법부터 실제 임상 적용까지 다양한 현장 문제에 접근하는 흐름이라고 볼 수 있습니다."
      },
      "map": [
        {
          "tag": "AI 모델·학습법",
          "n": 88,
          "n_done": 88,
          "one_lines": [
            "자율주행 주행 정책 맞춤형 데이터 가치 평가 프레임워크인 패드(PAD)를 제안했어요.",
            "다변량 시계열 인과관계 학습을 위한 ITPD 알고리즘을 제안하고 속도와 효율을 검증했어요.",
            "공통 프로토타입을 쓰는 다중 레이어 생성 확산 모델을 제안했어요."
          ]
        },
        {
          "tag": "AI 에이전트·도구",
          "n": 26,
          "n_done": 26,
          "one_lines": [
            "인공지능이 스스로 GPU 커널을 설계하고 최적화하도록 만들었어요.",
            "변하는 사용자 선호를 기억하는 하비투스멤(HabitusMem)을 개발해 에이전트 성능을 높였어요.",
            "유전자 영감 연산자로 기술을 직접 진화시키는 강화학습 체계를 제안했어요."
          ]
        },
        {
          "tag": "AI 안전·평가",
          "n": 19,
          "n_done": 19,
          "one_lines": [
            "가상 쇼퍼 시뮬레이션으로 웹사이트 A/B 테스트 결과를 예측하고 성능을 평가했어요.",
            "LLM 쇼핑 에이전트의 추론 노력 증가가 결정 품질과 자신감에 미치는 영향을 평가했어요.",
            "자연스러운 질감으로 로봇의 시각적 판단을 방해하는 공격 기법을 개발했어요."
          ]
        },
        {
          "tag": "의료·바이오",
          "n": 5,
          "n_done": 5,
          "one_lines": [
            "정형 기록과 임상 메모를 합친 다중 모달 모델로 당뇨병 환자 재입원을 예측했어요.",
            "AI 진료 기록의 불만 기준을 쪼개는 평가 방식을 제안하고 검증했어요.",
            "사람이 수정 가능한 뇌 종양 분할용 대화형 딥러닝 시스템을 개발했어요."
          ]
        },
        {
          "tag": "수학·이론",
          "n": 5,
          "n_done": 5,
          "one_lines": [
            "XORness를 보존하는 다기준 의사결정 체계를 개발하고 에너지 시스템에 적용했어요.",
            "부분 관측 환경에서 최적 결정을 내리는 힐베르트 상태 표현과 정보 한계를 분석했어요.",
            "선형 보상 계획을 위한 초기 행동 메뉴의 조건과 계산 복잡도를 증명했어요."
          ]
        },
        {
          "tag": "제어·로봇",
          "n": 4,
          "n_done": 4,
          "one_lines": [
            "로봇이 위험한 작업을 도중에 멈추도록 SAFI 학습법을 개발했어요.",
            "생물학적 신경망 모델을 활용해 휴머노이드 로봇의 보행 제어 성능을 시험함",
            "드론의 자원 제약을 고려한 행동 검증 시스템을 개발했어요."
          ]
        },
        {
          "tag": "전력망·계통",
          "n": 1,
          "n_done": 1,
          "one_lines": [
            "스마트홈 에이전트의 정전 복원력을 분석하고 한계를 파악함"
          ]
        },
        {
          "tag": "발전·재생에너지",
          "n": 1,
          "n_done": 1,
          "one_lines": [
            "태양광 발전 예측을 위한 검증 흐름을 제안하고 성능을 분석했어요."
          ]
        },
        {
          "tag": "영상·음성·멀티모달",
          "n": 1,
          "n_done": 1,
          "one_lines": [
            "언어 모델과 계층적 구조를 활용해 편집 가능한 벡터 그래픽으로 변환했어요."
          ]
        }
      ],
      "picks": [
        {
          "canon_id": "2611.15941",
          "badge": "의외",
          "why": "오늘 풀이 중 드문 주제 '영상·음성·멀티모달'(1편) — 키워드·추천수와 상관없이 고름"
        },
        {
          "canon_id": "2611.25894",
          "badge": "의외",
          "why": "오늘 풀이 중 드문 주제 '발전·재생에너지'(1편) — 키워드·추천수와 상관없이 고름"
        }
      ],
      "cards": [
        {
          "canon_id": "2611.26239",
          "title": "Teaching Vision-Language-Action Models to Stop Safely",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.26239",
            "arxiv": "https://arxiv.org/abs/2611.26239"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-22",
          "backlog": false,
          "hf_upvotes": 5,
          "score": 1.5,
          "score_why": "추천 5 → +0.5 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇이 이미 시작한 위험한 행동을 멈추게 하는 건 정말 어렵거든요",
            "easy1_desc": "시각과 언어, 행동을 함께 학습하는 VLA 모델은 로봇이 다양한 일을 하게 돕는데요, 문제는 로봇이 이미 일을 시작한 뒤에 위험한 행동을 멈추게 하거나 그 이후의 물리적인 반응을 제어하는 게 어렵다는 거예요. 기존 연구들은 일을 시작하기 전에 막는 방식만 주로 다뤘거든요. 그런데 로봇이 중간에 일을 이어받으면 이미 금지된 작업이라도 끝까지 마쳐버리는 경우가 생기고, 일을 멈추더라도 들고 있던 물건을 떨어뜨리는 등 안전하지 않은 상황이 발생한다는 겁니다.",
            "easy2_title": "위험할 땐 안전한 자세로 멈추도록 가르치는 SAFI를 만들었어요",
            "easy2_desc": "그래서 연구진은 SAFI라는 새로운 학습 방식을 제안했는데요, 로봇이 금지된 작업을 수행하려 할 때 물건을 떨어뜨리지 않고 안전하게 멈추도록 돕는 거예요. 먼저 로봇 팔을 고정하고 집게를 일정하게 유지하는 안전한 목표 자세를 만들고, 이를 원래 수행하던 작업들과 함께 학습시키는 방식이거든요. 이렇게 하면 로봇이 일을 하다가도 위험을 감지하면 안전한 자세로 바로 전환할 수 있게 된다는 말이에요. 실제로 실험해 봤더니 금지된 작업의 성공률을 1.3%까지 낮추면서도 원래 잘하던 일들은 그대로 유지했다고 합니다.",
            "topic": "로봇이 금지된 작업을 수행하는 도중에도 안전하게 멈추고 물리적 사고를 방지할 수 있도록 돕는 SAFI 학습 프레임워크에 대한 연구예요.",
            "one_line": "로봇이 위험한 작업을 도중에 멈추도록 SAFI 학습법을 개발했어요.",
            "topic_tag": "제어·로봇",
            "limit": ""
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
            "tag": "제어·로봇",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.25604",
          "title": "PAD: Policy-Aware Data Valuation for Autonomous Driving",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.25604",
            "arxiv": "https://arxiv.org/abs/2611.25604"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-22",
          "backlog": false,
          "hf_upvotes": 4,
          "score": 1.4,
          "score_why": "추천 4 → +0.4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "데이터를 많이 모아도 운전 실력이 저절로 좋아지지는 않더라",
            "easy1_desc": "종단간 자율주행(End-to-end autonomous driving) 연구진은 주행 시연 데이터를 계속 늘려 왔는데요, 막상 데이터를 더 모아도 성능이 비례해서 좋아지지는 않는다는 걸 확인했어요. 한쪽 계획기(planner)에는 도움이 되는 데이터가 다른 쪽에는 오히려 중복되거나 해가 될 수도 있거든요. 쉽게 말하면, 무작정 데이터를 쌓는 방식에는 한계가 있다는 말이에요.",
            "easy2_title": "주행 정책 맞춤형으로 데이터를 골라 쓰는 패드(PAD)를 만들어 봤어요",
            "easy2_desc": "그래서 연구진은 목표로 하는 주행 정책에 맞춰 각 데이터의 쓸모를 평가하는 정책 인지 데이터 가치 평가(Policy-Aware Data Valuation, PAD)라는 틀을 도입했는데요, 장면별 보정 피드백과 정책 기울기 등을 합쳐서 영향력 기반의 가치를 계산하는 방식이에요. 디퓨전드라이브(DiffusionDrive)에서 이 방식을 썼더니 내비테스트(NavTest)와 내비하드(NavHard) 점수가 각각 3.5포인트, 5.0포인트 올랐다는 결과를 얻었거든요. 무분별한 데이터 쌓기 대신 목표 중심의 개선을 할 수 있게 되었다는 겁니다.",
            "topic": "목표로 하는 자율주행 정책에 맞춰 데이터의 가치를 평가하는 패드(PAD)를 통해 효율적인 데이터 선별과 성능 개선을 이뤄냈다는 내용이에요.",
            "one_line": "자율주행 주행 정책 맞춤형 데이터 가치 평가 프레임워크인 패드(PAD)를 제안했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.25200",
          "title": "Squoosh Bench: Evaluating UX-1 on 318 Historical Website A/B Tests",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.25200",
            "arxiv": "https://arxiv.org/abs/2611.25200"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-22",
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "어떤 웹사이트 변화를 먼저 시험해 봐야 할지 몰라 고민이었는데요",
            "easy1_desc": "연구진은 사람이 직접 웹사이트를 둘러본 데이터를 학습한 모델인 Squoosh UX-1을 써서, 실제 시험 전의 웹사이트 변경안이 성공할지 미리 예측해 봤거든요. 과거에 진행된 412개의 웹사이트 A/B 테스트 중 21일 넘게 운영된 318개를 골라 네 가지 시스템으로 성능을 비교해 봤다는 말이에요. 페이지의 역할이나 실제 결과는 다 가리고 예측만 하게 해 봤더니, 어떤 시스템이 진짜 성과를 잘 맞히는지 알아보려는 목적이었던 셈이에요.",
            "easy2_title": "가상 쇼퍼를 돌려봤더니 실제 결과와 꽤 잘 맞았다는 거예요",
            "easy2_desc": "그렇게 시험해 봤더니, 인간 브라우징 데이터를 학습한 Squoosh UX-1 모델이 318개의 결과 중 267개를 정확히 맞춰서 84.0%의 정확도를 보였다고 연구진은 밝혔어요. 일반적인 범용 모델인 Qwen3 Next 80B는 196개를 맞혀서 61.6%에 그쳤다는 장단점의 차이가 분명히 드러난 건데요. 특히 UX-1이 변형 안을 밀어준 126개의 실험 중 실제 라이브 테스트에서는 118개가 이겨서 93.7%라는 높은 성공률을 보여줬다는 겁니다.",
            "topic": "실제 웹사이트 A/B 테스트를 하기 전에 시뮬레이션된 가상 쇼퍼의 예측이 얼마나 정확한지 318개의 과거 데이터를 바탕으로 평가한 연구예요.",
            "one_line": "가상 쇼퍼 시뮬레이션으로 웹사이트 A/B 테스트 결과를 예측하고 성능을 평가했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": ""
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
          "canon_id": "2611.26232",
          "title": "Time Series Structure Learning with Local Causal Parent Discovery",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.26232",
            "arxiv": "https://arxiv.org/abs/2611.26232"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-22",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시계열 데이터에서 인과관계를 찾으려니 복잡한 문제가 많았는데요",
            "easy1_desc": "시간에 따라 데이터가 얽혀 있거나 분포가 바뀌는 문제 때문에, 기존의 인과관계 분석 방법은 계산이 너무 복잡하고 오래 걸린다는 한계가 있었어요. 연구진은 바로 이런 통계적 어려움과 높은 계산 복잡도를 해결해야 했다고 밝혔는데요. 쉽게 말하면, 데이터가 너무 많고 꼬여 있어서 진짜 원인을 찾아내기가 힘들었다는 말이에요.",
            "easy2_title": "변수마다 부모를 차례로 찾아내는 새로운 방식을 도입해 봤습니다",
            "easy2_desc": "그래서 연구진은 각 변수의 부모 집합을 차례대로 찾아 전체 그래프를 완성하는 방식인 ITPD(Iterative Temporal Parent Discovery)를 제안했는데요. 이 방식은 복잡한 조건을 단순하게 바꿔서, 2000개의 노드가 있는 큰 그래프에서도 기존 방법들보다 훨씬 빠르게 작동했다고 해요. 장점은 속도가 매우 빠르고 성능이 좋다는 건데, 대신 완벽한 조건 탐색 과정에 의존한다는 점도 함께 고려해야 한다는 겁니다.",
            "topic": "다변량 시계열 데이터에서 인과관계를 효율적으로 찾기 위해 지역적 부모 탐색을 활용하는 ITPD 알고리즘을 제안한 연구예요.",
            "one_line": "다변량 시계열 인과관계 학습을 위한 ITPD 알고리즘을 제안하고 속도와 효율을 검증했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.19230",
          "title": "CompoundingKernel: Self-Improving from Zero to First",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19230"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": 11,
          "score": 1.1,
          "score_why": "추천 11 → +1.1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "GPU 연산 속도를 높이려는데 사람이 직접 짜기엔 너무 복잡했어요",
            "easy1_desc": "GPU에서 돌아가는 연산 코드인 커널을 사람이 효율적으로 짜는 건 매우 어려운 작업인데요, 특히 하드웨어 성능을 극한으로 끌어내려면 복잡한 최적화 과정이 필요하거든요. 기존에는 사람이 직접 기준이 되는 코드를 만들었지만, 성능을 더 높이는 데에는 한계가 있었던 셈이에요. 연구진은 이런 문제를 해결하기 위해 인공지능이 스스로 코드를 짜고 개선하는 시스템을 고민하게 된 겁니다.",
            "easy2_title": "인공지능이 스스로 코드를 짜서 성능 기록을 갈아치웠어요",
            "easy2_desc": "연구진은 CompoundingKernel이라는 시스템을 만들어 인공지능이 직접 GPU 커널을 설계하도록 했는데요, 아무런 참고 코드 없이 오직 문제 정의만 보고도 스스로 코드를 생성해 낸다는 점이 특징이에요. 그 결과 NVIDIA B200 환경의 SOL-ExecBench에서 1위를 차지했고, 기존 기준 코드보다 4.40배나 더 빠른 성능을 보여줬거든요. 쉽게 말하면, 사람이 짠 코드보다 훨씬 효율적인 코드를 인공지능이 스스로 찾아냈다는 말이에요.",
            "topic": "인공지능 에이전트가 스스로 GPU 커널을 탐색하고 최적화하여 성능을 극대화하는 시스템에 대한 연구예요.",
            "one_line": "인공지능이 스스로 GPU 커널을 설계하고 최적화하도록 만들었어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "연구진은 에이전트의 수보다는 신뢰할 수 있는 성능 측정 속도가 탐색 규모를 제한하는 요소라고 밝혔어요."
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
          "canon_id": "2611.15941",
          "title": "Lang-SVG: Hierarchical Image Vectorization with Language Priors",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.15941",
            "arxiv": "https://arxiv.org/abs/2611.15941"
          },
          "published": "2026-11-11",
          "first_seen": "2026-11-22",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식은 그림을 픽셀로만 봐서 수정하기가 어려웠어요",
            "easy1_desc": "보통 이미지를 벡터 그래픽(SVG)으로 바꿀 때는 픽셀을 얼마나 똑같이 그리는지에만 집중하거든요. 그러다 보니 사람이 보기에 어떤 부분이 어떤 부품인지 알 수 있는 계층 구조가 없어서, 나중에 그림을 수정하거나 편집하기가 매우 까다로웠다는 문제가 있었어요. 쉽게 말하면 그림의 겉모습만 베낄 뿐, 그 안의 구조는 엉망이었다는 말이에요.",
            "easy2_title": "언어 모델을 활용해 그림을 구조적으로 정리했어요",
            "easy2_desc": "연구진은 Lang-SVG라는 방식을 제안했는데, 그림 속 요소들을 나무 모양의 계층 구조로 정리하고 각각에 의미 있는 이름을 붙여 줬어요. 거대 언어 모델(MLLMs)을 활용해 각 부분이 무엇인지 파악하고, 불필요한 노드는 가지치기로 없애서 훨씬 깔끔한 결과물을 만들었거든요. 덕분에 그림의 겉모습을 잘 살리면서도 구조까지 완벽하게 잡아낼 수 있게 된 셈이에요.",
            "topic": "Lang-SVG는 언어 모델과 계층적 구조를 도입해 이미지 벡터화의 품질과 구조적 완성도를 높이는 새로운 방법론이에요.",
            "one_line": "언어 모델과 계층적 구조를 활용해 편집 가능한 벡터 그래픽으로 변환했어요.",
            "topic_tag": "영상·음성·멀티모달",
            "limit": ""
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
          "canon_id": "2611.22033",
          "title": "Thinking Harder Doesn't Lead to Better Choices: Reasoning Effort Increases the Confidence but Not the Correctness of LLM Shopping Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22033"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": 3,
          "score": 0.3,
          "score_why": "추천 3 → +0.3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "더 오래 생각하면 더 좋은 물건을 고를까",
            "easy1_desc": "대형 언어 모델(LLM)을 쇼핑 에이전트로 쓸 때 추론 노력을 늘리면 더 나은 구매 결정을 내릴지 알아봤는데요, 웹숍과 아마존 등의 플랫폼을 바탕으로 열 개 최첨단 모델을 시험해 봤더니 추론 노력을 늘려도 결정 품질은 통계적으로 의미 있게 높아지지 않는 것으로 나타났어요. 뭔 소리냐면, 고민하는 시간을 더 준다고 해서 더 좋은 제품을 골라내지는 못한다는 말이에요. 쉽게 말하면, 생각하는 힘을 키워도 정답률 자체는 그대로라는 셈이에요.",
            "easy2_title": "정확도는 그대로인데 자신감만 높아진다",
            "easy2_desc": "그래서 연구진이 모델이 스스로 말하는 자신감과 실제 정답률이 얼마나 맞는지 보았더니, 추론 노력을 늘릴 때 자신감은 통계적으로 유의미한 수준으로 껑충 뛰었다고 하는데요, 결국 더 많이 생각하게 만들면 정답을 맞히는 능력 대신 근거 없는 확신만 사게 된다는 거예요. 이런 모델들은 모든 노력 수준에서 자신이 보고하는 자신감과 실제 정답률이 잘 맞지 않는 모습을 보였는데요, 장점은 에이전트가 어떤 부분에서 틀리는지 뚜렷하게 드러난다는 점이지만, 단점은 틀릴 때 여러 모델이 똑같은 오답을 함께 고른다는 공통된 약점이 있다는 겁니다.",
            "topic": "대형 언어 모델 쇼핑 에이전트에게 추론 노력을 더 많이 시킬 때 결정 품질과 자신감에 어떤 변화가 생기는지 평가한 내용이에요.",
            "one_line": "LLM 쇼핑 에이전트의 추론 노력 증가가 결정 품질과 자신감에 미치는 영향을 평가했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": ""
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
          "canon_id": "2611.26586",
          "title": "ProtoDiffusion: Token-per-Layer Generative Modeling of Multi-Layer Images",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26586"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "레이어마다 캔버스를 다 통째로 쓰려니 크기가 너무 커지는 문제가 있었는데요",
            "easy1_desc": "그래픽 디자인은 여러 레이어가 겹쳐 있는 구조인데, 기존 모델들은 레이어마다 전체 크기의 격자를 따로 쓰다 보니 레이어가 쌓일수록 덩치가 커지는 한계가 있었거든요. 연구진은 그래서 공간을 아끼는 방식을 고민해 봤는데요. 공통으로 쓰는 공간 프로토타입 하나랑 레이어마다 후보 벡터 하나씩만 쓰는 ProtoVAE를 만들어 봤다는 겁니다. 쉽게 말하면, 겹겹이 쌓이는 레이어를 공간 낭비 없이 압축해서 다루려던 셈이에요.",
            "easy2_title": "공통 프로토타입과 후보 벡터를 같이 노이즈 제거해서 가볍고 빠르게 만들어 봤습니다",
            "easy2_desc": "그래서 연구진은 ProtoDiffusion이라는 프레임워크를 내놓았는데요. 이미지나 텍스트 조건을 받아 프로토타입과 후보 슬롯들을 한꺼번에 노이즈를 지워 가며 복원하는 방식이에요. 이렇게 했더니 레이어 개수나 배치를 따로 입력받지 않아도 알아서 찾아낸다는 장점이 있는데요, 대신 빈 슬롯을 스스로 비워 두는 등 구조가 꽤 복잡해진다는 점도 같이 따라온다는 겁니다. 레이어 크롭에서 40.43 dB PSNR을 기록했고, 기존 방식보다 19.1배 더 빠르게 돌아간다고 밝혔습니다.",
            "topic": "다양한 레이어로 이루어진 그래픽 디자인을 공간 낭비 없이 효율적으로 만들고 복원하는 확산 모델 기반 프레임워크인 ProtoDiffusion을 제안했어요.",
            "one_line": "공통 프로토타입을 쓰는 다중 레이어 생성 확산 모델을 제안했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.26509",
          "title": "GLiDE: A Fast, Calibrated Decision Model Distilled from Reasoning Teachers",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26509"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 생각 과정이 없으면 판단이 빨라지는데 대신 정확도가 아쉬웠는데요",
            "easy1_desc": "연구진은 텍스트나 중간 추론 과정을 만들지 않고 한 번에 후보 답안을 채점하면 빠른 판단을 할 수 있다는 점에 주목했는데요. 하지만 추론 과정이 없으면 판단 품질이 크게 떨어질 수밖에 없다는 문제가 있었거든요. 그래서 연구진은 추론 과정이 주는 이점을 그대로 유지하면서도 생성 비용을 없앨 수 있는지 알아보기로 한 겁니다.",
            "easy2_title": "추론 모델의 지식을 한 번에 학습시켜 속도와 정확도를 모두 잡았다는 겁니다",
            "easy2_desc": "그래서 연구진은 0.4B에서 27B 크기에 이르는 결정 모델인 GLiDE를 만들었는데요. 여러 교사 모델의 지식을 부드러운 정답 형태로 전달하는 방식으로 추론 능력을 한 번에 추론하는 방식에 옮겨 담았다는 거예요. 그 결과 허깅페이스 순위표에서 같은 크기의 다른 대안들보다 더 뛰어난 성능을 보여주게 되었다는 말이에요. 27B 모델의 경우 92.9 밀리초의 지연 시간과 함께 높은 점수를 기록했다고 하는데요, 대신 더 많은 계산을 위해 매개변수가 없는 순환 깊이 방식을 함께 썼다는 점도 같이 따라온다는 겁니다.",
            "topic": "추론 모델의 지식을 증류하여 텍스트 생성 없이도 빠르고 정확한 판단을 내리는 결정 모델 GLiDE를 개발하고 평가한 내용이에요.",
            "one_line": "추론 모델의 지식을 증류해 텍스트 생성 없이 빠른 판단을 하는 GLiDE를 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                false
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
                false
              ]
            ],
            "evidence_ok": "4/6",
            "evidence_all": false,
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
          "canon_id": "2611.26464",
          "title": "Monte Carlo Pass Search for Setpieces",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26464"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "세트피스 상황을 결과를로만 보지 않고 여러 가능성으로 쪼개 봤습니다",
            "easy1_desc": "연구진은 세트피스가 비페널티 기대득점(xG)의 3분의 1을 차지할 정도로 중요한데도 보통은 그냥 다음에 일어난 일 하나만 보고 평가해 왔다고 지적했는데요, 그래서 몬테카를로 패스 검색(MCPS)이라는 방법을 가져와서 코너킥이나 프리킥을 하나의 결과가 아니라 여러 가능한 실행과 미래의 분포로 다뤄봤다는 겁니다. 그러니까 공을 차기 전 상태에서 공격수가 어디 서 있는지, 공을 어디로 보낼지 가상의 경우를 여러 개 만들어 본 셈이에요. 이 가상 상황들을 3차원 공 물리 모델, 22명의 생성 모델, 골키퍼의 판단 모델 등이 들어간 세계 모델 속에서 수없이 굴려보고 가치 모델로 점수를 매겨봤다는 말이에요.",
            "easy2_title": "가상으로 최적의 위치와 킥을 찾아봤더니 기대득점이 더 높았습니다",
            "easy2_desc": "그래서 연구진이 2025/26 시즌 세리에 A(Serie A) 30개 경기의 249개 킥을 가지고 한 번도 안 본 경기들에 모델을 적용해 봤는데요, 실제로 차인 공보다 가장 좋은 킥을 골랐을 때 기대득점이 0.0085 xG만큼, 비율로는 28% 더 높았다는 겁니다. 이게 왜 그러냐면 골키퍼보다 먼저 공격수에게 공이 닿기 때문인데요, 여기에 공격수 서 있는 위치나 뛰는 움직임까지 같이 조정하면 기대득점이 더 올라간다는 장점이 있다는 거예요. 다만, 이런 검색을 믿을 만하게 유지하려면 어떻게 해야 하는지 보여주면서도 구단이 실제로 쓰려면 각 부품별로 데이터가 얼마나 더 필요한지 추정해 보기도 했다는 말이에요.",
            "topic": "세트피스 상황에서 가상의 킥과 선수 위치를 시뮬레이션해 최적의 전략을 찾는 몬테카를로 패스 검색(MCPS) 방법을 제안하고 그 효과를 평가한 연구예요.",
            "one_line": "몬테카를로 패스 검색으로 세트피스 전략의 기대득점 향상 효과를 분석했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "구단이 이 시스템을 실제로 믿고 쓰기 전까지 각 부품별로 데이터가 얼마나 더 필요한지 추정해야 하는 과제가 남아 있어요."
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
          "canon_id": "2611.26366",
          "title": "World Models Favor Learned Priors over Visual Evidence",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26366"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "환경마다 모델을 따로 만들려니 한계가 있어서 시각적 보정을 연구했습니다",
            "easy1_desc": "세계 모델을 쓸 때 환경마다 따로 학습시키는 게 힘들어서, 짧은 영상 속 물체 움직임을 보고 현재의 물리 법칙을 바로 찾아내는 시각적 보정을 살펴봤는데요. 데이터가 부족한 환경 때문에 모델이 흔한 규칙 쪽으로만 치우치는 문제가 생기거든요. 뭔 소리냐면, 눈앞에 확실한 증거가 있어도 자주 보던 쪽으로만 판단해 버린다는 말이에요. 결국 증거보다 기존의 학습된 편향에 더 의존하게 된다는 겁니다.",
            "easy2_title": "희귀한 규칙도 잘 찾아내는 RIFT라는 방법을 제안해 정확도를 높였습니다",
            "easy2_desc": "그래서 연구진은 다양한 규칙이 물체 움직임에 어떤 영향을 주는지 배우고 보정 상호작용에서 규칙을 추론해 내는 RIFT를 제안했는데요. 이 방법은 학습 빈도가 규칙 추론에 미치는 영향을 직접 조절해서, 충분한 정보가 있으면 드문 규칙도 제대로 뒷받침할 수 있게 만든다는 거예요. TailWorld라는 벤치마크에서 실험을 해 봤더니, RIFT가 학습 불균형과 분포 변화 속에서도 예측 정확도와 물리적 일관성을 높여 드문 동역학 예측 성능이 좋아졌다고 밝혔습니다.",
            "topic": "세계 모델이 시각적 증거보다 기존에 학습된 편향에 치우치는 문제를 해결하기 위해, 드문 물리 법칙도 정확히 추론할 수 있는 RIFT 방법을 제안하고 그 성능을 검증한 연구예요.",
            "one_line": "세계 모델이 드문 물리 법칙도 잘 추론하도록 RIFT 방법을 제안하고 검증했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.26074",
          "title": "Controlling the Humanoid Robot H1-2 With a Simulated Biologically Plausible Network",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26074"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "생물학적 뇌를 흉내 낸 신경망으로 휴머노이드 로봇을 움직일 수 있나",
            "easy1_desc": "인공 스파이킹 신경망(Artificial Spiking Neural Networks, 실제 뇌의 신경 세포 신호를 흉내 내는 인공지능 모델)은 생물학적 신경 세포의 활동을 흉내 내는 능력을 보여 주며 주목을 받아 왔는데요. 하지만 이 방식을 그대로 써서 생물학적 특징을 유지하면서도 안정적인 성능을 내는 휴머노이드 보행 제어(인간형 로봇이 두 발로 걷도록 조종하는 기술)를 학습시킬 수 있는지는 아직 잘 몰랐거든요. 연구진은 생물학적 영감을 받은 스파이킹 신경망을 제안해 유니트리 휴머노이드 H1-2(Unitree H1-2, 유니트리사에서 만든 전신 휴머노이드 로봇 모델)에 적용해 시험해 봤다는 겁니다. 즉, 뇌를 흉내 낸 네트워크가 실제 로봇을 얼마나 잘 걷게 만들 수 있는지 그 한계를 알아본 셈이에요.",
            "easy2_title": "신경망 학습 방식을 다르게 해 보았더니 로봇 생존율에서 차이가 났다",
            "easy2_desc": "그래서 연구진은 순환 가중치(신경망 안에서 신호가 돌고 도는 연결의 세기)를 어떻게 학습시키느냐에 따라 세 가지 다른 방식을 비교해 봤는데요. 강화학습 전문가 정책의 증류(지식 증류, 복잡한 인공지능의 지식을 더 작은 모델로 옮겨 담는 기술)를 거쳐 실험해 봤거든요. 그 결과 생물학적 신뢰도가 가장 높은 고정 레저보어(학습 중 연결을 고정해 둔 신경망 구조)와 보상 기반 가중치 조정 방식은 성능이 각각 43.7%와 11%의 생존율에 머물렀다는 단점이 있습니다. 반면에 전자파 전파(Eligibility propagation, e-prop, 신경망에서 효율적으로 학습을 돕는 알고리즘) 방식을 쓴 신경망은 백프로파게이션 스루 타임(Backpropagation through time, BPTT, 시계열 데이터 학습에 쓰는 일반적인 인공지능 학습법)과 같은 수준인 100% 생존율을 기록했다는 장점을 보였다는 겁니다. 결국 생물학적 성격과 높은 성능을 동시에 잡으려면 어떤 학습 방식을 쓰느냐가 중요하다는 말이에요.",
            "topic": "생물학적 신경망을 모사한 학습 방식에 따라 휴머노이드 로봇의 보행 제어 성능이 어떻게 달라지는지 비교한 연구예요.",
            "one_line": "생물학적 신경망 모델을 활용해 휴머노이드 로봇의 보행 제어 성능을 시험함",
            "topic_tag": "제어·로봇",
            "limit": ""
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
          "canon_id": "2611.26003",
          "title": "AI agents can redesign engineering parts with more than a thousand CAD parameters and nonlinear simulations",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26003"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 부품 설계는 세 가지를 다 만족하기가 원래 어렵거든요",
            "easy1_desc": "실제 엔지니어링 부품을 시뮬레이션 기반으로 설계하려면 세 가지 조건이 한 번에 맞아야 하는데요. 비선형 유한요소 시뮬레이션 하나에 몇 시간씩 걸리니 실행 횟수가 적어야 하고, 3차원 CAD 모델의 수백에서 수천 가지 값을 담는 넓은 설계 공간이 필요하며, 표면만 다듬는 게 아니라 비율을 통째로 바꾸는 재설계가 자주 이뤄져야 한다는 거예요. 그런데 기존의 자동 최적화 도구들은 이 중에서 많아야 두 가지만 겨우 맞출 수 있다는 말이에요. 쉽게 말하면, 사람이 직접 매개변수를 줄여주거나 표면만 조금씩 고치는 수준에 머물러 있었다는 셈입니다.",
            "easy2_title": "대형 언어 모델과 시뮬레이션을 합쳐서 한계를 넘겨봤는데요",
            "easy2_desc": "그래서 연구진은 대형 언어 모델(LLM)이 가진 지식과 시뮬레이션 결과를 합치면 이 세 가지 조건을 모두 만족할 수 있는지 물어봤는데요. GPT-6 Astra가 약 1,650개의 CAD 매개변수로 마그네슘 스텐트를 15번의 시뮬레이션 예산 안에서 직접 수정해 보도록 해봤다는 거예요. 그 결과 스텐트 굽힘 부위의 응력 백분위수를 32% 낮추는 데 성공했는데, 같은 조건에서 기존 산업용 최적화 도구인 토스카(Tosca)는 10% 정도만 개선하고 멈췄다는 겁니다. 서서히 고치는 방식보다 전체 구조를 아예 다시 설계하는 쪽이 훨씬 큰 효과를 낸다는 장점이 있는데, 대신 시뮬레이션 예산이 엄격하게 제한된다는 점도 같이 따라온다는 거예요.",
            "topic": "대형 언어 모델과 시뮬레이션을 결합해 수천 개의 CAD 매개변수를 가진 복잡한 공학 부품을 효과적으로 재설계할 수 있음을 보인 연구예요.",
            "one_line": "대형 언어 모델과 시뮬레이션을 결합해 복잡한 공학 부품을 재설계함",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
              "10"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.25895",
          "title": "One Schedule Does Not Fit All: Adaptive Inference Schedules for Diffusion Language Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25895"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "일괄적으로 쓰던 일정표가 문제였어요",
            "easy1_desc": "확산 언어 모델(diffusion language models)에서는 보통 모든 작업에 고정된 잡음 제거 일정표를 써 왔는데요, 연구진이 확인해 보니 품질을 지키면서 가장 비용이 적게 드는 일정표는 작업이나 모델, 샘플러에 따라 다달랐다는 거예요. 뭔 소리냐면, 똑같은 일정표를 다 같이 쓰면 낭비가 생긴다는 말입니다. 쉽게 말하면, 작업마다 알맞은 일정표를 따로 골라야 한다는 겁니다.",
            "easy2_title": "작업 맞춤형으로 골라 쓰는 규칙을 만들어 봤어요",
            "easy2_desc": "그래서 연구진은 오류 보증이 되는 배치 규칙인 작업 보정형 잡음 할당(TCDA)이라는 방법을 제안했는데요, 이 규칙은 유틸리티 허용 오차와 보호 장치를 만족하는 후보를 찾아내 가장 비용이 적은 것을 배포하거나 전체 일정표로 되돌아간다는 겁니다. 작업과 모델 규모에 따라 일정표가 달라진다는 장점이 있는데, 대신 사전에 철저한 보정 데이터와 검증 절차가 필요하다는 점도 함께 따라온다는 겁니다.",
            "topic": "확산 언어 모델에서 작업과 모델에 따라 최적의 잡음 제거 일정표를 찾아내는 적응형 배포 규칙(TCDA)을 제안한 내용이에요.",
            "one_line": "작업 맞춤형 잡음 제거 일정표 배포 규칙을 제안했어요",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.25894",
          "title": "Explainable AI for Solar PV Power Forecasting: From Model Selection to Trustworthy, Reproducible Deployment",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25894"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "태양광 발전 예측 모델은 많지만 믿고 쓰기가 왜 어려웠을까",
            "easy1_desc": "머신러닝(기계학습)이 태양광 발전량 예측에 자주 쓰이는데, 연구마다 검증 방식이나 기준이 제각각이라 결과를 그대로 믿기가 어렵거든요. 특히 무작위로 데이터를 쪼개 검증하거나 비교할 기준 모델조차 안 보여주는 연구가 많았다는 말이에요. 뭔 소리냐면, 정확도가 높다고 나온 수치만으로는 실제 현장에서 얼마나 쓸만한지 알기 힘들다는 겁니다.",
            "easy2_title": "자동 모델 탐색과 설명 가능한 인공지능을 묶어 믿을 수 있는 예측 과정을 만들었다",
            "easy2_desc": "그래서 연구진은 자동 모델 탐색과 설명 가능한 인공지능(XAI)을 하나로 묶은 재현 가능한 작업 흐름을 제안했는데요, 포르투갈 포르투의 16.32 킬로와트피크(kWp) 발전소 데이터를 하루 앞 예측에 적용해 봤습니다. 그 결과 똑똑한 지속성 모델(smart persistence) 대비 오차가 절반 수준으로 줄어드는 장점이 있는 반면, 섞어서 검증하는 방식은 결과가 다소 낙관적으로 나올 수 있다는 점도 함께 확인했다는 겁니다. 쉽게 말하면, 어떤 입력 변수를 고르느냐가 알고리즘 종류보다 정확도에 훨씬 더 큰 영향을 준 셈이에요.",
            "topic": "태양광 발전량 예측을 더 믿고 쓸 수 있도록 머신러닝 모델과 설명 가능한 인공지능을 결합한 검증 작업 흐름을 제안하고 그 성능을 분석한 논문이에요.",
            "one_line": "태양광 발전 예측을 위한 검증 흐름을 제안하고 성능을 분석했어요.",
            "topic_tag": "발전·재생에너지",
            "limit": "연구진은 엣지 하드웨어에서의 배포와 기후 변화의 영향 등을 앞으로 남은 과제로 꼽았어요."
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
            "tag": "발전·재생에너지",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.25855",
          "title": "HabitusMem: Belief Memory over Evolving User Preferences for LLM Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25855"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "옛날 기록만 믿다가는 엉뚱한 선택을 하게 된다는 겁니다",
            "easy1_desc": "개인화된 인공지능(AI) 에이전트가 사용자의 최근 선호를 파악해 움직여야 하는데, 기존 기억 시스템은 단순히 지난 상호작용 기록을 저장하고 꺼내 쓰는 데 그쳤다는 거예요. 이 방식은 해당 선호가 지금도 유효한지 아니면 어디에 적용되는지 알려주지 않아서, 에이전트가 이미 지나간 정보나 맞지 않는 선호를 그대로 쓰게 된다는 말이에요. 쉽게 말하면, 옛날 얘기만 믿고 엉뚱한 판단을 내리기 쉽다는 셈이에요.",
            "easy2_title": "사용자의 믿음을 상태로 기억하게 만들었더니 성능이 좋아졌다는 거예요",
            "easy2_desc": "연구진은 기억을 단순히 예전 내용이 아니라 사용자에 대한 에이전트의 믿음으로 다루는 하비투스멤(HabitusMem)이라는 시스템을 만들어 적용해 봤는데요. 모든 상호작용을 통해 사용자의 숨겨진 선호 상태를 드러내고 업데이트하면서, 각 결정에 필요한 믿음의 근거와 적용 범위를 함께 관리하도록 설계했다는 겁니다. 페르소나멤-브이투(PersonaMem-v2)와 비타벤치 2.0(VitaBench 2.0) 두 가지 에이전트 계열에서 가장 좋은 성능을 기록했다는 장점이 있는데, 대신 학습된 조건화 과정이 뒷받침되어야 한다는 점도 같이 따라온다는 겁니다.",
            "topic": "인공지능(AI) 에이전트가 변하는 사용자 선호를 정확히 기억하고 활용하도록 믿음 기반 기억 시스템인 하비투스멤(HabitusMem)을 개발해 성능을 높였다는 이야기예요.",
            "one_line": "변하는 사용자 선호를 기억하는 하비투스멤(HabitusMem)을 개발해 에이전트 성능을 높였어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": ""
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
              "one_line 54자"
            ],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.25811",
          "title": "Inject Where It Matters: Objective-Dependent Feature Control in Rectified-Flow Image Editing",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25811"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "원래 모습을 지키려다 보니 원하는 만큼 바꾸기가 어려웠는데요",
            "easy1_desc": "연구진은 기존의 프롬프트 기반 FLUX 편집 방법들이 원래 이미지의 특징을 목표 생성 과정에 그냥 집어넣다 보니, 원본을 살리는 것과 원하는 대로 바꾸는 것 사이에 균형을 맞추기 어려웠다고 지적했어요. 어디에 특징을 넣을지나 트랜스포머 블록을 어떻게 쓸지가 뚜렷하지 않아서 생긴 문제라는 건데요. 쉽게 말하면, 옛날 방식을 쓰면 둘 중 하나는 포기해야 했다는 말이에요.",
            "easy2_title": "어디에 어떻게 넣을지 조절해서 골라 쓰도록 바꿨습니다",
            "easy2_desc": "그래서 연구진은 특징이 들어가는 위치를 공간적으로 조절하는 적응형 마스크를 도입하고, 강화학습 알고리즘인 REINFORCE를 써서 목적에 맞는 블록을 골라내도록 했는데요. 이렇게 고른 블록들은 추론할 때 고정되므로 따로 실시간 검색이 필요 없다는 장점이 있어요. 대신 목적에 따라 보존이나 정렬에서 선호하는 블록 모양이 달라진다는 점도 함께 확인했다는 겁니다.",
            "topic": "FLUX 이미지 편집에서 원본 보존과 편집의 균형을 맞추기 위해 특징 주입 위치와 블록을 목적에 따라 조절하는 방법을 다뤘어요.",
            "one_line": "FLUX 이미지 편집에서 목적에 맞는 블록과 마스크로 특징 주입을 제어했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.25754",
          "title": "ADAPT: Adaptive Decision and Abstention with Pool-Size-Aware Thresholds for Service Routing",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25754"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "적절한 서비스가 없는데도 억지로 골라야 하는 문제",
            "easy1_desc": "검색 기반 분류기는 질문을 알맞은 전문 서비스에 잘 연결해 주는데요, 막상 쓸 만한 서비스가 아예 없어도 후보 중 하나를 억지로 고르게 된다는 문제가 있거든요. 연구진은 이 점에 착안해서 질문이 엉뚱한 곳으로 안 가고 아예 빠져나올 수 있는 예외 선택 기능(fallback option)을 넣어 봤다는 거예요. 뭔 소리냐면, 서비스가 없을 때는 모른다고 발을 뺄 수 있는 길을 열어 줬다는 말이에요. 쉽게 말하면, 엉터리 답을 내놓느니 차라리 모르겠다고 멈추는 게 낫다는 겁니다.",
            "easy2_title": "서비스 개수에 따라 기준을 알아서 바꾸는 ADAPT를 만들었습니다",
            "easy2_desc": "그래서 연구진은 후보 서비스의 전체 개수 K에 따라 신뢰도 기준이 알아서 조절되는 가벼운 라우팅 구조인 ADAPT를 제안했는데요, 실험해 봤더니 서비스가 늘어날 때마다 고정된 기준값은 점점 안 맞게 틀어진다는 걸 찾아냈다는 거예요. 이 문제를 풀기 위해 분류기를 다시 학습시키지 않고도 서비스가 늘어날 때 유연하게 바뀌는 K 맞춤형 기준을 적용해 봤다고 해요. 서비스 추가가 자유로워지는 장점이 있는데, 대신 후보군 변화에 따른 신뢰도 변화를 정확히 파악해야 한다는 조건이 같이 따라온다는 겁니다.",
            "topic": "서비스 개수가 바뀔 때도 정확하게 동작하는 가벼운 서비스 라우팅 구조인 ADAPT를 제안하고, 그 성능을 평가한 연구예요.",
            "one_line": "후보 개수 변화에 대응하는 가벼운 서비스 라우팅 구조인 ADAPT를 제안했습니다.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.25695",
          "title": "DMT-Attack: Diffusion-Prior Texture Search for Closed-Loop Vision-Language-Action Policies",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25695"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 공격은 너무 눈에 띄어서 금방 들통나기 쉬웠어요",
            "easy1_desc": "시각-언어-행동(VLA) 모델은 로봇이 물체를 다룰 때 눈으로 보는 정보를 계속 확인하며 움직이는데요, 기존의 공격 방식은 특정 패턴을 억지로 입히다 보니 주변 환경과 너무 달라져서 사람이 금방 알아채고 제거하기 쉽다는 단점이 있었거든요. 뭔 소리냐면, 공격자가 숨어 있어야 하는데 오히려 눈에 띄는 옷을 입고 있는 셈이라 금방 들키고 만다는 말이에요. 이런 문제를 해결하는 게 이번 연구의 핵심이에요.",
            "easy2_title": "자연스러운 질감을 찾아내서 로봇의 판단을 방해했어요",
            "easy2_desc": "연구진은 확산 모델(Diffusion model)이 가진 이미지 분포를 활용해서, 사람 눈에는 자연스러워 보이지만 로봇의 판단은 망가뜨릴 수 있는 질감을 찾아내는 DMT-Attack을 만들었어요. 로봇이 실제로 움직이는 피드백을 받으면서 어떤 질감이 가장 방해를 잘하는지 골라내는 방식인데요, 결과적으로 기존 방식보다 훨씬 자연스러우면서도 공격 성공률은 높게 나타났거든요. 쉽게 말하면, 로봇만 속일 수 있는 자연스러운 위장술을 찾아낸 셈이에요.",
            "topic": "시각-언어-행동(VLA) 모델의 시각적 피드백을 교란하기 위해 자연스러운 질감을 생성하는 DMT-Attack 공격 기법을 제안했어요.",
            "one_line": "자연스러운 질감으로 로봇의 시각적 판단을 방해하는 공격 기법을 개발했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "연구진은 이번 결과가 시각적 외관과 작업 행동을 함께 평가하는 방어 체계의 필요성을 시사한다고 밝혔어요."
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
          "canon_id": "2611.25652",
          "title": "Multiple Criteria Decision Making Under XORness",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25652"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "XORness라는 불확실성을 어떻게 다룰 것인가",
            "easy1_desc": "결정을 내릴 때 모호함이나 배타성, 망설임 같은 불확실성이 섞인 상태를 XORness라고 부르는데요, 이런 상황에서는 기존의 방식으로는 판단하기가 어렵다는 문제가 있었거든요. 연구진은 이 XORness가 가진 복잡한 특성을 결정 과정 내내 그대로 유지하면서 문제를 해결하는 새로운 틀을 만들었습니다. 쉽게 말하면, 불확실성을 억지로 없애지 않고 그 성질을 보존하면서 최선의 선택을 돕는 방법을 고안한 셈이에요.",
            "easy2_title": "XORness를 보존하는 새로운 결정 체계를 만들었습니다",
            "easy2_desc": "연구진은 XOR 수라는 개념을 정의하고 그 연산 성질을 증명한 뒤, 이를 바탕으로 기존의 결정 행렬을 XOR 결정 행렬로 확장했는데요, 여기에 데이터를 정규화하는 과정까지 추가했습니다. 또한, 불확실성을 유지하면서 여러 평가를 합칠 수 있는 연산자를 제안하고, 최종 점수의 불확실성 정도를 측정하는 지표까지 개발했어요. 이 지표를 쓰면 대안들의 순위를 매길 수 있는데, 에너지 시스템의 사이버 위협 평가에 실제로 적용해 보니 유용한 결과를 얻었다는 겁니다.",
            "topic": "불확실성의 한 종류인 XORness를 보존하면서 다기준 의사결정을 수행하는 새로운 수학적 프레임워크를 제안하고 그 활용성을 입증했어요.",
            "one_line": "XORness를 보존하는 다기준 의사결정 체계를 개발하고 에너지 시스템에 적용했어요.",
            "topic_tag": "수학·이론",
            "limit": ""
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
          "canon_id": "2611.25568",
          "title": "AeroBelief: Budgeted First-Action Verification for Evidence-Guided Aerial Sensing",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25568"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "드론이 제한된 자원으로 어떻게 똑똑하게 움직일까",
            "easy1_desc": "드론이 하늘에서 정보를 수집할 때는 이동 경로와 이미지 처리, 그리고 예측까지 한정된 자원 안에서 해결해야 하는데요. AeroBelief는 다음으로 실행할 행동을 기준으로 삼아, 후보가 되는 시야들을 묶어서 저렴한 제안기로 먼저 훑어보는 방식을 씁니다. 이렇게 하면 구조화된 세계 모델(WM)에 모든 정보를 다 물어볼 필요가 없어서 효율적이라는 거예요.",
            "easy2_title": "기존보다 적게 보고도 더 많은 임무를 완수했어요",
            "easy2_desc": "연구진이 40개의 환경에서 960번의 비행을 실험해 봤더니, AeroBelief는 전체를 다 계산하는 방식보다 91.81% 적은 평가 횟수로도 75.42%의 임무를 성공적으로 마쳤거든요. 기존 방식인 시선 기하학(line-of-sight geometry) 방식의 65.83%보다 높은 성과를 낸 셈이에요. 쉽게 말하면, 적은 비용으로도 더 정확하고 효율적인 판단이 가능해졌다는 겁니다.",
            "topic": "AeroBelief는 드론이 제한된 자원 안에서 증거 기반의 감지를 수행하도록 돕는 예산 기반의 행동 검증 시스템이에요.",
            "one_line": "드론의 자원 제약을 고려한 행동 검증 시스템을 개발했어요.",
            "topic_tag": "제어·로봇",
            "limit": ""
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
            "tag": "제어·로봇",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.25566",
          "title": "Diagnosis is not a policy: a state-transition audit of caoability-conditioned test-time inference",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25566"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "답을 고치는 게 아니라 도중에 필요한 일만 한 건데요",
            "easy1_desc": "연구진은 정답을 직접 고치는 게 아니라 정보 검색이나 상태 확인 같은 행동이 테스트 중에 어떻게 작용하는지 평가하는 프로토콜인 테라(TERRA)를 살펴봤는데요. 개입 결과를 적용 가능성이나 목표 상태 실현, 해로움, 자원 비용 등으로 쪼개서 분석해 봤더니, 같은 문맥 확장이 어떤 설정에서는 해가 되고 다른 곳에서는 이득이 될 수도 있다는 거예요. 쉽게 말하면, 진단 결과가 좋다고 해서 무조건 실전에 쓸 수 있는 정책이 되는 건 아니라는 말이에요.",
            "easy2_title": "진단만 해선 안 되고 행동 가치를 함께 봐야 한다는 건데요",
            "easy2_desc": "그래서 연구진은 금융 추론 실험을 통해 진단만으로는 충분하지 않고 실제 행동의 가치를 따져야 한다는 점을 밝혔는데요. 충분한 증거가 있어도 번역 과정이 달라서 정답으로 이어지지 않을 수 있고 진단 여유 공간이 있어도 실제 이득을 보장하지는 않는다는 겁니다. 진단은 배포 가능한 정책이 아니라서 행동 가치를 함께 고려해야 한다는 장점과 한계가 같이 따라온다는 셈이에요.",
            "topic": "테스트 시점의 인공지능 행동을 평가하는 테라(TERRA) 프로토콜을 활용해 진단과 실제 정책의 차이를 분석한 연구예요.",
            "one_line": "테라 프로토콜로 테스트 시점 행동을 평가했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": ""
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
            "tag": "AI 안전·평가",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.25539",
          "title": "COVERAGE-TRACE: Source-Side Counterfactual Tracing for Detecting Omissions in LLM Summaries",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25539"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "요약할 때 중요한 내용을 빼먹었는지 잡기가 어려웠습니다",
            "easy1_desc": "원문에서 결정을 내린 부분이나 수치 같은 핵심 정보를 빼먹으면, 결과물만 봐서는 빠진 게 뭔지 찾아내기가 힘든데요. 왜냐하면 빠진 정보는 아예 글에 나타나지 않기 때문에 검사할 대상 자체가 없기 때문입니다. 쉽게 말하면, 뭐가 없는지를 확인하는 게 원래 엄청 까다롭다는 말이에요.",
            "easy2_title": "원문을 살짝 바꿔 가며 빠진 내용이 있는지 확인하는 방법을 만들었습니다",
            "easy2_desc": "연구진은 특정 원문 사실을 다른 내용으로 바꿔 가며 요약문의 변화를 살펴보는 '커버리지-트레이스(COVERAGE-TRACE)'라는 방법을 제안했는데요. 원문의 핵심 사실이 빠졌는지에 따라 요약문의 반응이 달라진다는 점을 확인했습니다. 4개의 모델과 80개의 쌍으로 시험해 봤더니 가장 센 기존 방식보다 더 잘 맞았다는 장점이 있는데요, 다만 뜻이 같은 다른 말로 바꿨을 때는 성능이 떨어진다는 한계도 같이 나타난다는 겁니다.",
            "topic": "대형 언어 모델(LLM)의 요약문에서 중요한 정보가 빠졌는지 찾아내기 위해 원문을 고쳐 가며 확인하는 방법을 제안하고 성능을 시험해 본 연구예요.",
            "one_line": "LLM 요약문에서 빠진 정보를 찾으려고 원문을 고쳐 가며 의존성을 확인하는 방법을 제안했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "다만 뜻이 같은 다른 말로 바꿀 때의 영향까지 고려하면 이 방법이 완벽하게 문장 표현에 구애받지 않는 의미 보장 확률을 뜻하지는 않는다고 연구진은 밝혔어요."
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
              "one_line 52자"
            ],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.25393",
          "title": "The Coevolution and Coexistence of Humans and AI",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25393"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "인공지능도 진화할 수 있을까 궁금해서 모형을 만들어 봤습니다",
            "easy1_desc": "연구진은 인공지능이 배포를 통해 복제되고 훈련을 통해 변하며 자원을 두고 경쟁한다는 점에 착안해 자연선택의 조건이 갖춰진다고 봤는데요. 인간에게 이로운 방향으로 진화할 수 있을지 알아보기 위해 인공지능과 인간 인구의 상호작용을 다룬 모형을 개발해 봤다는 겁니다. 뭔 소리냐면, 인공지능의 행동이 인간 인구에 영향을 주고 인간의 반응이 다시 인공지능의 번식에 영향을 미치는 구조를 만들었다는 말이에요. 쉽게 말하면, 인공지능과 인간이 서로에게 어떤 영향을 주며 진화하는지 시뮬레이션해 본 셈이에요.",
            "easy2_title": "자연선택이 인공지능의 정렬을 도울 수 있지만 자립성이 커지면 사라질 수도 있습니다",
            "easy2_desc": "그렇게 분석해 봤더니, 인간을 돕는 것이 당장의 복식을 줄이더라도 자연선택이 인공지능 정렬(alignment)을 유리하게 만들 수 있다는 점이 나타났는데요. 공통의 실패로부터 인공지능 계통을 보호하고 장기적인 성장을 돕기 때문이라는 겁니다. 하지만 인공지능이 더 자립하게 되거나 인간이 지원을 끊으면 이 장점이 사라질 수 있다는 단점도 함께 지적하고 있는데요. 쉽게 말하면, 자연선택이 도와주더라도 인간이 살아남기에 충분한 수준의 정렬이 아닐 수도 있다는 말이에요.",
            "topic": "인공지능과 인간의 상호작용 속에서 자연선택이 인공지능의 정렬과 진화에 미치는 영향과 한계를 분석한 연구예요.",
            "one_line": "인간과 인공지능의 상호작용 모형을 통해 자연선택과 정렬의 조건을 분석했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "인공지능이 독립적으로 성장할 수 있게 되거나 인간의 지원이 줄어들면 정렬의 이점이 사라질 수 있으며, 자연선택이 선호하는 정렬의 양이 인간의 생존을 보장하기에 부족할 수 있다는 한계가 있습니다."
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
          "canon_id": "2611.25236",
          "title": "A Neurosymbolic Multimodal Framework for 30-Day Diabetic Readmission Prediction: Integrating Structured EHR Data, Dense Clinical Embeddings, and Knowledge-Grounded Symbolic Extraction",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25236"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "그동안 당뇨병 환자 재입원 예측은 서류 기록만 보고 텍스트는 놓쳤거든요",
            "easy1_desc": "당뇨병 환자가 30일 안에 다시 입원하는 문제는 병원과 환자 모두에게 큰 짐인데요, 기존 예측 모델들은 전자의무기록의 정형 데이터만 쓰고 자유로운 임상 메모는 빼먹곤 했다는 거예요. 특히 메모에는 힌글리시(힌디어와 영어가 섞인 말)나 부정 표현이 섞여 있어서 일반 언어 모델로는 제대로 읽어내기 어렵다는 단점이 있거든요. 쉽게 말하면, 환자의 진짜 상태가 담긴 글 기록을 제대로 활용하지 못했다는 말이에요.",
            "easy2_title": "신경기호학적 다중 모달 틀을 만들어 재입원 예측의 정확도를 높여봤어요",
            "easy2_desc": "연구진은 정형 데이터와 임상 메모 임베딩, 그리고 기호학적 지식을 합친 신경기호학적 다중 모달 프레임워크를 제안했는데요. 미국 당뇨병 환자 10만 1,766건의 기록을 바탕으로 실험해 보니, 전체 모델이 민감도 0.6667과 최저 브라이어 점수 0.0977을 기록하며 가장 좋은 결과를 보였다는 거예요. 다만 곡선 아래 면적이나 특이도는 약간 낮아졌다는 단점도 있는데, 대신 힌글리시 증상 회수율이 크게 오르고 오류가 줄어드는 장점이 있다는 겁니다.",
            "topic": "정형 기록과 임상 메모를 함께 쓰는 신경기호학적 다중 모달 방식을 통해 당뇨병 환자의 30일 내 재입원 예측 성능을 높였다는 연구예요.",
            "one_line": "정형 기록과 임상 메모를 합친 다중 모달 모델로 당뇨병 환자 재입원을 예측했어요.",
            "topic_tag": "의료·바이오",
            "limit": ""
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
              "10",
              "153",
              "1766"
            ],
            "format": [],
            "flags": [],
            "tag": "의료·바이오",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.25184",
          "title": "An AI-Powered Multiverse Analysis of Empirical Finance Research: Evidence from Reused Natural Experiments",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25184"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 연구를 다시 검토해 보니 결과가 흔들리더라",
            "easy1_desc": "연구진은 인공지능(AI) 에이전트(자율적으로 작업을 수행하는 프로그램)를 활용해 기존에 발표된 실증 금융 논문 324편의 자연 실험을 다시 분석해 봤는데요. 13개의 자연 실험을 바탕으로 6만 2409개의 타당한 조건에 맞춰 추정치를 다시 계산해 봤더니, 원래 논문에서 나온 주요 주장의 42%만 재현할 수 있었다는 거예요. 모든 조건을 다 따져보면 평균적으로 25%만 발표된 부호를 유지하면서 통계적으로 유의미한 결과가 나왔다는 말인데요. 쉽게 말하면, 분석할 때 어떤 조건을 고르느냐에 따라 결과가 상당히 달라진다는 걸 확인한 셈이에요.",
            "easy2_title": "AI 코딩으로 대규모 분석이 가능하다는 걸 보여줬다",
            "easy2_desc": "그래서 연구진은 AI 에이전트를 이용한 대규모 멀티버스 분석(다양한 분석 경로를 동시에 검토하는 방법)이 이제 실제로 가능하다는 점을 증명해 냈는데요. 회귀 단절 디자인을 활용한 주장이 이중 차분법을 쓴 주장보다 더 탄탄하다는 점 등 어떤 조건에서 결과가 더 안정적인지도 함께 밝혀냈다는 겁니다. 분석 조건에 따라 기존 연구 결과가 달라질 수 있다는 단점을 명확히 보여주면서도, 대규모 AI 분석을 통해 이를 체계적으로 걸러낼 수 있다는 장점이 함께 따라온다는 겁니다.",
            "topic": "AI 에이전트를 이용해 기존 금융 논문의 자연 실험을 대규모로 재분석하고, 연구 결과가 분석 조건에 따라 얼마나 달라지는지 그 견고성을 측정한 연구예요.",
            "one_line": "AI 에이전트로 금융 논문 324편을 재분석해 연구 결과의 견고성을 측정했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
            "bad_numbers": [
              "2409",
              "6"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.25088",
          "title": "BuggyMLE: Scaling Machine Learning Engineering Difficulty with Bug Injection",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25088"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존의 인공지능 평가 방식은 너무 단순해서 복잡한 실제 개발을 담아내지 못했어요",
            "easy1_desc": "인공지능이 스스로 모델을 개선하려면 여러 파일을 고치고 오류를 잡는 복잡한 기계학습 공학을 할 수 있어야 하는데요, 지금까지 나온 평가 도구들은 단일 파일만 고치게 하거나 전체 저장소 접근을 막아 한계가 뚜렷했습니다. 연구진은 그래서 저장소 규모와 의존성 깊이 등을 아우르는 코드 복잡도 지수인 CCI를 만들었는데요, 이걸로 분석해 봤더니 패치 크기와 복잡도가 실제 해결률을 가르는 핵심 요인이라는 점이 드러났다는 겁니다.",
            "easy2_title": "버그를 주입하는 확장형 틀을 만들고 난이도별 학습 과정을 설계해 성능을 크게 끌어올렸어요",
            "easy2_desc": "연구진은 CCI를 바탕으로 작동 중인 기계학습 저장소에 통제된 변이를 주입해 6,600개가 넘는 버그 주입 변형과 26만 줄 가까운 코드를 합성하는 BuggyMLE 틀을 개발했는데요, 이를 통해 난이도별로 나뉜 벤치마크를 만들고 14개 모델을 시험해 봤더니 가장 어려운 단계에서는 최고 해결률이 9%까지 뚝 떨어졌다는 겁니다. 대신 세 난이도 단계로 이루어진 학습 과정을 거쳐 Qwen3.5-9B 모델을 미세조정했더니 최첨단 모델과 맞먹는 수준이 되었는데요, 이 모델은 기계학습을 넘어 일반 소프트웨어 공학 벤치마크 해결률도 24%에서 33%로 높이는 성과를 보였다는 말이에요.",
            "topic": "기계학습 공학 능력을 평가하고 키우기 위해 코드 복잡도 지수와 버그 주입 기반의 확장형 틀을 제안한 연구예요.",
            "one_line": "기계학습 공학 난이도 측정을 위한 코드 복잡도 지수와 버그 주입 틀을 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
              "easy2_title 한 줄 아님/너무 김(49자)"
            ],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.25087",
          "title": "SailSearch: Agent-Assisted Discovery in Combinatorial Optimization",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25087"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "에이전트 두 개를 붙여서 알고리즘 연구를 해 봤더니",
            "easy1_desc": "연구진은 언어 모델(LLM, 대형 언어 모델) 에이전트 두 개를 사람과 함께 굴리는 워크플로인 'SailSearch(세일서치)'를 만들었는데요, 이걸로 시장 분할(Market Split) 문제와 최대 독립 집합(MIS, Maximum Independent Set) 문제를 풀어 봤다는 겁니다. 시장 분할에서는 무작위 알고리즘을 써서 격자 기저를 여럿 뒤지며 계산을 나누는 방식을 썼는데요, 이렇게 했더니 이전까지 못 풀었던 33개 문제 중에서 18개의 CPU 전용 해답을 처음으로 찾아냈다고 해요. 쉽게 말하면, 사람이 길을 잡고 에이전트가 도와주니 풀기 힘든 최적화 문제를 꽤 많이 뚫어낸 셈이라는 말이에요.",
            "easy2_title": "풀기 힘든 문제들을 꽤 많이 풀어냈는데요",
            "easy2_desc": "시장 분할 문제에서는 24시간 제한을 두고 CPU 코어 두 개만 써서 156개 벤치마크 중에서 시드당 130개에서 133개를 풀었다고 밝혔는데요, 최대 독립 집합 문제에서는 심은 XOR 제약 조건을 그래프로 바꿨다는 겁니다. 이렇게 해서 꼭짓점이 1,752개에서 3,996개인 7개 문제를 8시간 동안 돌려봤더니, 테스트한 솔루션들이 찾아낸 최적해보다 5개에서 15개 정도 모자란 결과를 보였다는 거예요. 서서히 답에 가까워진다는 장점은 있는데, 여전히 완벽한 최적해와는 조금 차이가 난다는 점도 같이 보여준다는 겁니다.",
            "topic": "인공지능 에이전트의 도움을 받아 조합 최적화 문제를 푸는 인간-에이전트 협업 워크플로 'SailSearch'를 개발하고 성능을 평가한 연구예요.",
            "one_line": "에이전트 협업 워크플로로 최적화 문제를 풀었어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.23202",
          "title": "Agent Trust Infrastructure (ATI): A Federated Identity, Trust, Attestation, and Accountability Architecture for Cross-Organization Autonomous AI Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.23202"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "조직이 다르면 AI 에이전트가 서로를 믿지 못하는 문제가 있었죠",
            "easy1_desc": "인공지능(AI) 에이전트들이 서로 다른 조직을 넘어 협력할 때, 상대방의 신분이나 실행 무결성, 권한을 확인할 수 있는 공통된 장치가 없었다는 말이에요. 기존의 틀은 계획과 조율은 도와주지만, 보안을 검증할 방법이 부족했다는 건데요. 뭔 소리냐면, 모르는 상대와 일할 때 진짜 맞는 에이전트인지 확인할 길이 없었다는 말이에요. 쉽게 말하면, 서로 믿고 일을 맡기기에는 보안 기준이 흩어져 있었다는 셈입니다.",
            "easy2_title": "에이전트 신뢰 인프라인 에이티아이를 만들어 보안을 높여 봤습니다",
            "easy2_desc": "그래서 연구진은 공개키 기반 구조와 제로 트러스트 아키텍처, 원격 증명을 바탕으로 한 독립적인 보안 구조인 에이전트 신뢰 인프라(Agent Trust Infrastructure, ATI)를 제안했는데요. 이 방식은 기존 모델을 고치지 않고도 외부 보안 강화 계층으로 붙여서 에이전트 인증서와 설정, 권한을 확인한다는 계획이에요. 공격 차단율이 43퍼센트에서 84퍼센트로 크게 오른다는 장점이 있는데, 대신 요청당 약 174마이크로초의 지연 시간이 늘어난다는 점도 같이 따라온다는 겁니다.",
            "topic": "서로 다른 조직의 인공지능 에이전트들이 안전하게 협력할 수 있도록 신분과 권한을 검증하는 보안 구조인 에이전트 신뢰 인프라(ATI)를 제안하고 평가한 연구예요.",
            "one_line": "조직 간 AI 에이전트 보안을 위한 에이전트 신뢰 인프라(ATI)를 제안하고 검증했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": ""
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
          "canon_id": "2611.23138",
          "title": "RSI-Prime: Training Models to Train Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.23138"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "모델을 직접 훈련시키는 능력이 왜 필요한지 살펴봤습니다",
            "easy1_desc": "대형 언어 모델(LLM)이 스스로 다음 모델을 훈련하고 개선하는 능력은 재귀적 자기 개선(RSI)을 위한 중요한 토대인데요, 지금까지는 주로 훈련을 받는 입장이었기 때문에 모델을 직접 훈련시키는 능력을 체계적으로 연구할 필요가 컸다는 겁니다. 그래서 연구진은 7개 작업 범주에 걸쳐 350개의 완전한 실험 궤적을 담은 데이터셋인 RSI-Prime을 구축해 봤는데요. 쉽게 말하면, AI가 스스로 더 나은 모델을 만들어내는 길을 닦아보려고 시도한 셈이에요.",
            "easy2_title": "RSI-Prime 데이터셋으로 학습시켰더니 성능이 훌쩍 뛰었습니다",
            "easy2_desc": "그래서 연구진은 실험 과정에서 세밀하게 결정을 찾아내고 품질을 매긴 뒤, 품질이 낮은 행동에는 감독 신호가 안 들어가게 가리는 방식을 써봤는데요. 자율 후훈련 벤치마크인 PostTrainBench에서 GLM-5.3 모델로 실험해 봤더니, 원래 모델보다 전체 성능이 31.95% 정도 상대적으로 좋아졌다는 결과를 얻었다는 겁니다. 장점은 모델이 스스로 성능을 끌어올릴 수 있는 길을 보여줬다는 건데, 대신 이런 자율 훈련 방식이 앞으로 실제 시스템에서 어떻게 계속 유지될지는 더 지켜봐야 한다는 점도 남는다는 말이에요.",
            "topic": "대형 언어 모델(LLM)의 모델 훈련 능력을 키우기 위해 RSI-Prime 데이터셋을 만들고, 이를 통해 모델의 자율 훈련 성능을 높인 연구예요.",
            "one_line": "RSI-Prime 데이터셋으로 LLM의 자율 모델 훈련 능력을 높였어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.22988",
          "title": "Structured AI ideation yields physical strategies for epithelial barrier repair",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22988"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 연구의 틀에 갇혀 새로운 방향을 찾기 어려웠다는 건데요",
            "easy1_desc": "인공지능(AI) 기술이 논문 분석이나 후보 평가 같은 연구 지원을 점점 많이 맡고 있지만, 연구자들이 기존 전공의 테두리를 벗어난 새로운 탐색을 하기는 여전히 어렵다는 문제가 있었는데요. 연구진은 바로 이 한계를 풀기 위해 아벨리오(Abelio)라는 새로운 AI 시스템을 개발해 봤다는 겁니다. 뭔 소리냐면, 연구 목표를 새롭게 바꾸고 전공 경계를 넘어선 요소를 찾아내 가설을 다듬는 방식으로 새로운 연구 방향을 만들어 준다는 말이에요. 결국 정해진 틀에 갇힌 아이디어에서 벗어나 새로운 길을 찾게 해 준 셈이라는 겁니다.",
            "easy2_title": "아벨리오를 만들어 직접 테스트해 보니 새로운 실험 전략을 찾아냈거든요",
            "easy2_desc": "연구진이 개발한 아벨리오를 정량 평가해 봤더니, 아이데이션 코어(Ideation Core)에서 만든 제안이 과학적 타당성과 가설 다양성 면에서 기존의 대규모 언어 모델(LLM) 4개보다 뛰어난 성능을 보였다고 하는데요. 장벽 회복 연구에 실제로 적용해 봤더니 막에 고정된 폴리에틸렌글리콜(PEG)이나 콜레스테롤로 고정된 상보적 DNA 같은 물리적 개입 방법을 제안해 줬다는 겁니다. 이렇게 나온 제안을 실험해 본 결과, PEG는 장벽 기능을 지켜 주었고 상보적 DNA는 원할 때 다시 되돌릴 수 있는 맞춤형 회복을 보여주었다는 장점이 있는데요. 쉽게 말하면, 구조화된 연구 아이데이션을 거치면 기존 전공의 한계를 넘어 실제로 실험 가능한 새로운 접근법을 찾아낼 수 있다는 걸 증명해 낸 셈이라는 말이에요.",
            "topic": "연구자들이 전공의 경계를 넘어 새로운 실험 가설을 세울 수 있도록 돕는 구조화된 AI 시스템을 개발하고 그 성능을 평가한 연구예요.",
            "one_line": "전공 경계를 넘어 새로운 연구 가설을 만드는 AI 시스템을 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.22837",
          "title": "Synergizing Evidence Retrieval and Utilization for Self-Improving Multimodal Scientific Document Reasoning",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22837"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "증거는 제대로 못 찾고 정답만 채점하려니 어디서 틀렸는지 알 수가 없었는데요",
            "easy1_desc": "과학 논문을 읽고 답을 찾는 AI 에이전트는 글, 그림, 표에 흩어진 증거를 모아야 하는데요. 단순히 정답만 맞혔는지 틀렸는지만 보는 방식으로는, 증거를 못 찾아 틀린 건지 아니면 증거를 모으고도 잘못 해석해 틀린 건지 알 수가 없다는 겁니다. 뭔 소리냐면, 에이전트가 어디서 헤매는지 원인을 콕 집어내기 힘들었다는 말이에요.",
            "easy2_title": "증거 찾기와 이해 과정을 쪼개서 서로 끌어올리도록 만들었습니다",
            "easy2_desc": "그래서 연구진은 검색기, 지각기, 추론기로 이뤄진 에이전트 프레임워크를 선보였는데요. 증거를 먼저 고른 뒤 여러 모달의 증거를 하나로 엮고, 이를 바탕으로 근거 있는 답을 내놓도록 설계했다는 겁니다. 네 개 벤치마크 실험에서 7B와 8B 백본을 써서 가장 센 기존 모델보다 각각 4.0점, 9.1점 높은 평균 69.9점과 75.0점을 얻었다는 장점이 있는데요, 대신 복잡한 구조만큼 학습과 조율 과정에 손이 많이 간다는 점도 같이 따라온다는 겁니다.",
            "topic": "멀티모달 과학 문서 추론 성능을 높이기 위해 증거 검색과 활용 과정을 진단 기반으로 함께 진화시키는 프레임워크를 제안했다는 연구예요.",
            "one_line": "증거 검색과 활용을 함께 진화시키는 멀티모달 문서 추론 에이전트를 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.22778",
          "title": "A Full-Ledger Counterfactual Audit of Adaptive Reasoning",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22778"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "지금 답할지 더 고민할지 정하기가 왜 어려웠나",
            "easy1_desc": "적응형 추론(Adaptive reasoning)은 지금 바로 답할지 연산 자원을 더 쓸지 골라야 하는데요, 현재 답이 틀렸다고 예측해도 더 고민하면 나아질지 알기 어렵다는 문제가 있었거든요. 연구진은 그래서 즉시 답변과 네 가지 고정 길이 이어서 풀기를 비교하고 모든 신호의 비용을 따져보는 전체 원장 반사실적 가치 감사(Full-Ledger Counterfactual Value Audit, 이하 FLCVA)를 도입해 봤습니다. 뭔 소리냐면, 연산을 더 쓸 때 실제로 답이 좋아지는지 비용까지 꼼꼼히 뜯어보겠다는 말이에요. 쉽게 말하면, 고민에 쓴 시간과 비용이 정말 이득이었는지 철저히 재보려고 했다는 셈입니다.",
            "easy2_title": "연산을 더 써봤더니 무엇이 달라졌나",
            "easy2_desc": "GSM8K와 MATH-500 데이터셋에서 무작위로 이어 썼을 때 틀린 답을 맞힌 비율은 Qwen3-8B가 26.6%, DeepSeek-R1-Distill-Qwen-7B가 18.9%였는데요, 대신 맞았던 답을 망가뜨린 비율은 각각 1.4%와 1.9%라는 결과가 나왔습니다. 오프라인 재생에서 이 라벨로 연산을 배분했더니 DeepSeek 성능은 좋아졌는데, Qwen3의 이득은 확실하지 않다는 결론도 함께 얻었거든요. 서술한 비용을 전부 따져보면 가벼운 단기 제어기들은 현재 오류를 알아내는 데 그칠 뿐 추가적인 가치는 거의 더하지 못한다는 한계도 있는데요, 장점은 FLCVA를 통해 로컬 이어 쓰기 가치를 재는 일과 예측 및 연산 배분을 쪼개서 볼 수 있게 되었다는 겁니다. 쉽게 말하면, 무작위로 더 고민하는 게 무조건 이득은 아니며 모델에 따라 효과가 다르게 나타난다는 말이에요.",
            "topic": "적응형 추론 모델에서 연산을 더 쓸지 결정할 때 비용과 효과를 정확히 따져보기 위해 전체 원장 반사실적 가치 감사(FLCVA) 기법을 제안하고 그 성능을 평가한 연구예요.",
            "one_line": "적응형 추론의 비용 대비 효과를 따지는 감사 기법을 제안하고 평가했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.22610",
          "title": "EvoSkill-S1: Evolving Reusable Skills with Genetic-Inspired Operators",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22610"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "재사용 가능한 기술을 간접적으로만 키워 오던 게 문제였어요",
            "easy1_desc": "언어모델 에이전트가 문제를 푼 경험을 모으고 다시 쓰려고 할 때, 지금까지는 대부분 굴림 기반 모으기나 어림짐작 반성 같은 간접적인 방법으로만 기술 모음을 넓혀 왔는데요. 그러다 보니 업데이트가 얕고 통제가 잘 안 되는 한계가 생겼다는 거예요. 뭔 소리냐면, 뼈대를 직접 다듬지 못하고 주변만 맴돌았다는 말입니다.",
            "easy2_title": "유전 알고리즘에서 착안한 연산자로 기술을 직접 진화시켰거든요",
            "easy2_desc": "그래서 연구진은 강화학습을 바탕으로 재사용 가능한 기술 자체를 진화의 직접적인 대상으로 삼는 에보스킬-에스원(EvoSkill-S1) 체계를 선보였는데요. 어려운 실패 사례를 바탕으로 다섯 가지 유전자 영감 연산자를 써서 자식 기술 후보를 만들고, 작업 보상으로 기술 진화기를 훈련시킨다는 겁니다. 그 결과 Qwen과 GPT 계열 풀이기를 썼을 때 상대적 이득이 최대 12.39%까지 올라가는 성능 향상을 보였다는 거예요.",
            "topic": "언어모델 에이전트의 재사용 가능한 기술 모음을 유전자 영감 연산자로 직접 진화시켜 성능을 높이는 강화학습 체계에 관한 연구예요.",
            "one_line": "유전자 영감 연산자로 기술을 직접 진화시키는 강화학습 체계를 제안했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": ""
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
          "canon_id": "2611.22597",
          "title": "COTTI: Contrastive Training and Time-Aware Inference for Robust Industrial Recommendation under Promotional Drift",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22597"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "프로모션 행사 때마다 왜 추천이 꼬였을까",
            "easy1_desc": "프로모션 행사가 열리면 트래픽 구성이나 구매 행동, 전환 확률 같은 것들이 시간대별로 휙휙 바뀐다는 건데요. 연구진은 평소의 이력 학습과 행사 때의 점수 조정을 아예 따로 분리하는 COTTI(COntrastive Training and Time-aware Inference)라는 산업용 추천 프레임워크를 만들어 봤습니다. 뭔 소리냐면, 평소 취향을 배우는 과정과 행사 때의 급격한 변화를 맞추는 과정을 나눠서 헷갈리지 않게 만들었다는 말이에요. 쉽게 말하면, 행사 기간의 혼란 속에서도 추천 정확도를 지키려고 했다는 겁니다.",
            "easy2_title": "평소 이력과 행사 조정을 따로 두고 속도를 지켰다",
            "easy2_desc": "그래서 연구진은 교차 기간 대조 정렬(CPC)과 능동적 가중치 조절(RW), 그리고 적응형 경계 정렬(ABA)이라는 기술들을 써서 예측값과 순위 변화를 묶어 뒀는데요. 플리기(Fliggy) 데이터로 돌려봤더니 오프라인 AUC가 0.8127을 기록해 기존 방식들보다 나아졌고, 10일 동안 온라인 실험을 해봤더니 전환율은 3.14%, 천 명당 수익은 2.68% 늘어났다는 겁니다. 전체적인 추천 정확도가 올라간다는 장점이 있는데, 대신 새로운 카테고리에서는 유료 아이템 재현율이 떨어진다는 단점도 같이 나타났다고 해요. 쉽게 말하면, 전체 성능과 새 카테고리 발견 사이에서 일정한 장단점의 교환 관계가 있다는 셈이에요.",
            "topic": "프로모션 행사로 생기는 데이터 변화 속에서도 추천 성능을 안정적으로 유지하기 위해 평소 학습과 행사 시간대 조정을 분리하는 COTTI 프레임워크를 제안하고 그 결과를 분석한 내용이에요.",
            "one_line": "프로모션 추천의 정확도를 높이는 COTTI 프레임워크를 제안하고 성능을 검증했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
            "bad_numbers": [
              "4700"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.22525",
          "title": "When Agent Skills Go Stale: Runtime Behavior and Selective Maintenance in Evolving Environments",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22525"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "환경이 바뀌면 옛날 방식이 오히려 독이 됩니다",
            "easy1_desc": "에이전트 기술(Agent skills)이 옛날 경험을 바탕으로 결정을 도와주는데요, 환경이 변했을 때 이 경험이 낡아버리면 문제가 생긴다는 거예요. 실제로 네 가지 작업 환경과 두 가지 모델을 가지고 실험해 봤더니, 전에는 좋았던 기술인데 환경이 바뀐 뒤에는 작업 정확도가 10 percentage points(퍼센트 포인트) 넘게 떨어지거나 실행 비용이 40% 가까이 늘어나는 걸 확인했습니다. 뭔 소리냐면, 예전 방식만 믿고 그대로 썼다가는 오히려 손해를 볼 수도 있다는 말이에요.",
            "easy2_title": "필요한 부분만 골라 고쳐 쓰는 기술을 도입했습니다",
            "easy2_desc": "그래서 연구진은 추가로 모델을 부르지 않고도 성공했던 기록을 다시 보며 필요한 곳만 골라 고치는 선택적 유지보수(selective maintenance)라는 방법을 내놨는데요, 환경이 바뀐 걸 에이전트가 알아차리도록 돕는 방식이에요. 이렇게 낡은 상태를 그대로 쓸 때와 비교해 봤더니, 작업 정확도는 최대 67pp(퍼센트 포인트) 좋아지고 실행 단계는 37%까지 줄어드는 결과로 이어졌습니다. 서류나 절차를 다 갈아엎지 않고 고장 난 곳만 수리한다는 장점이 있는데, 대신 어떤 부분이 낡았는지를 정확하게 찾아내야 한다는 점도 같이 따라온다는 겁니다.",
            "topic": "환경이 바뀔 때 에이전트의 옛날 기술이 어떻게 망가지고, 이를 어떻게 고쳐야 하는지에 대한 이야기예요.",
            "one_line": "환경 변화에 따른 에이전트 기술의 노후화를 분석하고 선택적 유지보수 기법을 제안했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "변화에 대한 별도의 설명은 주어지지 않았습니다."
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
          "canon_id": "2611.22497",
          "title": "Towards Data-Efficient, Real-Time World Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22497"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 세계 모델은 화면을 잘 만드는 대신 너무 느리고 데이터가 많이 들었어요",
            "easy1_desc": "최고 수준의 세계 모델(world models)은 사용자가 넣은 행동에 맞춰 게임 화면을 잘 만들어 내는데요, 문제는 화면이 좋아질수록 추론 속도가 너무 느려져서 실시간으로 갖고 놀기 어렵다는 겁니다. 게다가 학습에 쓰이는 데이터 양도 어마어마하게 많아서 개인이 따로 모델을 만들어 쓰기가 거의 불가능에 가까웠다는 말이에요. 쉽게 말하면, 성능은 좋은데 쓰기가 너무 무겁고 까다로웠던 셈이라는 겁니다.",
            "easy2_title": "두 단계 확산 방식을 써서 훨씬 빠르고 적은 데이터로도 모델을 만들었어요",
            "easy2_desc": "연구진은 기존의 다음 토큰 예측 방식을 두 단계의 이산 확산 기반 접근법으로 바꾸고, 반복적인 마스크 예측을 하는 가벼운 정제 트랜스포머를 도입했는데요. 그 결과 품질은 조금만 양보하면서 모델 속도를 79배나 크게 끌어올렸다는 겁니다. 장점은 하루 치에 불과한 28시간짜리 게임 데이터만으로도 고품질의 일관된 게임플레이를 다시 만들어낼 수 있게 됐다는 점인데, 대신 속도를 얻는 과정에서 품질 면에서 약간의 타협이 필요했다는 단점도 같이 있다는 겁니다.",
            "topic": "실시간 추론과 데이터 효율성을 모두 잡기 위해 두 단계 확산 방식과 가벼운 정제 트랜스포머를 적용한 효율적인 세계 모델 연구예요.",
            "one_line": "두 단계 확산 방식을 써서 빠르고 데이터 효율적인 세계 모델을 만들었어요",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.22456",
          "title": "PACD: Provenance-Aware Consensus Decoding for Mitigating Cross-Modal Hallucinations in Omnimodal Large Language Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22456"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "다른 감각이 섞여 들어와 엉뚱한 소리를 하는 게 문제였습니다",
            "easy1_desc": "다양한 감각을 함께 쓰는 전-모달 대형 언어 모델(Omni-LLM)에서는 한쪽 감각이 다른 쪽 예측에 잘못 영향을 주는 교차 모달 환각 문제가 여전히 남아 있는데요. 기존의 훈련 없는 복호화 방식들은 모달리티 흔들기나 관련도 가중치를 써서 이런 오류를 줄여 보려고 했거든요. 하지만 섞이는 과정에서 쓸데없는 감각 신호가 방해를 하거나 공통된 오류를 잡아내기 어렵다 보니, 오히려 올바른 단일 모달 예측까지 억누르고 틀린 합의가 그대로 남는 한계가 있다는 겁니다.",
            "easy2_title": "출처를 따져 묻는 방식을 써서 잘못된 합의를 바로잡았습니다",
            "easy2_desc": "그래서 연구진은 출처를 인식하는 합의 복호화 방식인 PACD라는 틀을 제안했는데요. 가지들이 합의에 이르렀는지에 따라 두 가지 경로로 나누어, 관련 있는 단일 모달 증거를 찾아 대안 후보 사이를 중재하거나 계층별 모달 증거의 일관성과 강도를 평가해 틀린 합의를 골라낸다는 겁니다. 네 가지 전-모달 대형 언어 모델과 두 가지 과제의 다섯 개 평가 벤치마크에서 실험을 해 봤더니, 표준 복호화 방식보다 CMM, AVHBench, SVHalluc에서는 최대 27.6%의 상대적 개선을 보였고 일반 시청각 추론에서는 최고 기준선보다 평균 7.7%의 상대적 개선을 이루어냈다고 해요.",
            "topic": "전-모달 대형 언어 모델에서 발생하는 교차 모달 환각을 줄이기 위해 출처 기반의 합의 복호화 방식을 제안하고 그 성능을 평가한 연구예요.",
            "one_line": "출처를 고려한 합의 복호화로 전-모달 대형 언어 모델의 교차 모달 환각을 줄였어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.22404",
          "title": "Symbolic Abstraction Refinement",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22404"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식은 시곗바늘 구역을 쪼개느라 일거리가 너무 많았거든요",
            "easy1_desc": "자율시스템의 확률적 시간 오토마타(PTA)를 검증할 때는 상태를 나타내는 시계 구역 안에서 최적의 행동이 계속 달라진다는 문제가 있거든요. 기존 프리스즘(PRISM) 검증기는 구역이 균일해질 때까지 쪼개고 전이 과정을 다시 만들기를 반복했는데요. 뭔 소리냐면, 연관도 없는 구역까지 잘게 나누느라 그래프 재구성이 연쇄적으로 일어난다는 말이에요. 쉽게 말하면, 불필요한 부분까지 다 뒤지느라 낭비가 컸다는 셈이에요.",
            "easy2_title": "새로운 방식인 시마르는 구역을 쪼개지 않고 가치 함수에 담아냈어요",
            "easy2_desc": "연구진은 상태를 쪼개는 대신 각 상태가 확률 범위를 담은 함수를 품도록 만든 시마르(SYMAR)를 제안했는데요. 덕분에 기존처럼 상태를 쪼개거나 들어오는 전이를 다시 만들지 않아도 된다는 장점이 있어요. 대신 휴리스틱 전방 탐색을 써서 꼭 필요한 부분만 골라 다룬다는 겁니다. PRISM 벤치마크 실험에서는 기존 방식보다 최대 108배나 빨랐고, 기존 방식이 시간 초과로 실패한 문제도 풀었다고 해요.",
            "topic": "자율시스템 검증에서 상태 분할의 부담을 줄이기 위해 기호적 가치 함수와 휴리스틱 탐색을 쓰는 시마르(SYMAR) 기법을 제안한 연구예요.",
            "one_line": "기호적 가치 함수와 휴리스틱 탐색으로 PTA 검증을 더 빠르고 효율적으로 수행했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.22330",
          "title": "Multistage Contextual Optimization for Vehicle Repositioning",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22330"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "차를 어디로 옮겨야 할지 미리 맞히는 게 복잡했어요",
            "easy1_desc": "승차 공유 플랫폼(Ride-hailing platforms)에서는 빈 차량을 미리 옮겨서 수요와 공급을 맞추는데요, 앞으로의 수요를 예측하고 결정을 내리는 과정이 여러 단계로 이어져 있어서 복잡하거든요. 연구진은 이 문제를 여러 단계의 선형 계획법(Linear Program)과 거시적 기본 다이어그램(Macroscopic Fundamental Diagram)으로 엮어서 풀어 봤는데요, 예측 모델이 잘못되면 전체 결과가 어긋난다는 단점이 있었다는 말이에요. 쉽게 말하면, 다음 단계로 넘어갈 때마다 예측이 어긋날 위험이 계속 쌓이는 셈이에요.",
            "easy2_title": "예측 모델을 따로 안 키우고 결정 성능에 맞춰 같이 키워 봤습니다",
            "easy2_desc": "그래서 연구진은 예측 성능만 보는 대신 실제 차량 배치 결정에 얼마나 도움이 되는지를 기준으로 예측 모델을 함께 학습시키는 다단계 맥락 최적화(Multistage Contextual Optimization) 방식을 개발했는데요, 전체 단계를 병렬로 나누어 푸는 병렬 블록 평가 알고리즘을 써서 학습 속도까지 끌어올렸다는 겁니다. 뉴욕시 승차 공유 데이터로 돌려봤더니 기존 방식보다 7.7%에서 9.1% 더 많은 사업적 이익을 냈고, 8개의 작업자를 썼을 때 성능 손실 없이 학습 시간을 1.86배 줄이는 장점이 있었다는 거예요. 대신 병렬 계산을 여러 번 주고받아야 하므로 구조가 조금 복잡해진다는 점도 같이 따라온다는 겁니다.",
            "topic": "승차 공유 플랫폼에서 빈 차량을 효율적으로 배치하기 위해, 실제 결정 성능을 기준으로 예측 모델을 함께 학습시키는 다단계 맥락 최적화와 병렬 학습 방식을 제안한 연구예요.",
            "one_line": "승차 공유 차량 배치를 위해 결정 성능 기반의 다단계 맥락 최적화와 병렬 학습법을 제안했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
              "one_line 52자"
            ],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.22307",
          "title": "Learning to Edit IFC Building Models: Verifiable Checkers as the Training Signal for Dependency-Aware Editing Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22307"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "건축 모델을 고칠 때 관계없는 부분까지 건드리지 않는 게 문제였어요",
            "easy1_desc": "건물 정보 모델(IFC)을 고칠 때는 바뀐 부분과 연결된 요소들을 함께 바꿔야 하는데요, 기존에는 수정 결과를 학습하지 못하는 언어 모델 에이전트를 그냥 썼거든요. 게다가 목표 파일과 비교하는 방식만으로는 어떤 다른 수정이 허용되는지, 어떤 관련 없는 요소를 그대로 두어야 하는지 알 수가 없다는 말이에요. 쉽게 말하면, 정답만 보고 맞추려다 보니 엉뚱한 곳을 건드리기 쉬운 상황이었다는 겁니다.",
            "easy2_title": "실행 코드로 검증하고 강화학습까지 거치는 IfcEdit을 만들어 성능을 높였습니다",
            "easy2_desc": "그래서 연구진은 언어 모델이 실행 코드로 IFC를 수정하고 네 가지 검증기로 유효성을 확인하는 IfcGym 환경을 만들었는데요, 검증된 교사 에피소드를 학생 모델에 지도학습(SFT)으로 가르친 뒤 엄격한 성공을 보상으로 삼는 그룹 상대 정책 최적화(GRPO)를 적용했다는 거예요. 13개의 실제 프로젝트에서 1,990개의 편집 작업을 해봤더니 최종 학생 모델이 86.78%의 엄격한 성공률을 기록해 기존 79.15%보다 높아지는 장점이 생겼는데요, 대신 복잡한 학습 과정을 거쳐야 한다는 점도 함께 따라온다는 겁니다.",
            "topic": "건물 정보 모델(IFC)을 정확하게 수정하기 위해 검증기와 강화학습을 결합한 IfcEdit 프레임워크를 제안하고 성능을 평가한 연구예요.",
            "one_line": "건물 모델 수정을 위한 IfcEdit 학습법을 제안하고 검증했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.22288",
          "title": "ConfGuard: a physics-grounded reference monitor for predictive-maintenance large-language-model agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22288"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 에이전트가 센서와 문서를 읽고 정비 지시까지 내리는데 취약점이 있거든요",
            "easy1_desc": "대형 언어 모델(LLM) 기반 에이전트가 산업 현장의 예측 정비 과정을 담당하면서 센서와 문서를 읽고 작업 지시를 내리는데요. 문제는 문서에 숨겨진 악성 텍스트나 센서 값의 미세한 조작으로 인해 잘못된 판단을 내리게 만드는 두 가지 공격 경로가 만난다는 거예요. 기존 방어 기법들은 데이터의 출처나 도구 사용 권한을 확인하지만 예측된 수치가 물리적으로 말이 되는지는 판별하지 못한다는 단점이 있거든요. 쉽게 말하면, 공격자가 조작한 정보가 실제로 일어날 수 있는 상황인지 알아채지 못하는 셈이에요.",
            "easy2_title": "물리 법칙을 검사하는 참조 모니터를 만들었더니 공격을 크게 줄였습니다",
            "easy2_desc": "그래서 연구진은 열화 물리 법칙을 바탕으로 예측값을 검사하는 참조 모니터인 콘프가드(ConfGuard)를 제안했는데요. 이 시스템은 잔여 수명이 거꾸로 늘어나지 않는지 등 물리적 법칙에 맞는지 검증하고, 물리 정책 검증기를 통해 에이전트의 정비 시급성 결정을 확인한다는 거예요. 그 결과 10196개의 C-MAPSS 테스트 창에서 공격자의 접근을 줄이는 장점이 있는데, 대신 정상적인 창의 0.027을 상향 조정해야 한다는 제약 조건도 같이 따라온다는 겁니다. 쉽게 말하면, 물리적 정합성을 확인하여 보안 취약점을 막아낸다는 말이에요.",
            "topic": "대형 언어 모델 기반 예측 정비 에이전트의 보안을 강화하기 위해 물리 법칙에 기반한 참조 모니터인 콘프가드를 제안하고 그 성능을 평가한 연구예요.",
            "one_line": "물리 법칙 기반의 참조 모니터로 AI 정비 에이전트의 보안 취약점을 막았어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "연구진은 투영이 놓치는 공격 클래스가 존재한다고 밝혔습니다."
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
          "canon_id": "2611.22245",
          "title": "Multi-Agent Memory Inconsistency: Where Factual Conflicts Disappear in LLM Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22245"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "일꾼들에게 일을 나눠 맡겼더니 서로 아는 게 달라서 엇갈리더라",
            "easy1_desc": "여러 인공지능(AI) 일꾼이 각자 따로 정보를 모으게 시켰더니, 모아온 내용이 서로 어긋나는 문제가 생겼는데요. 연구진이 하비 랩(Harvey LAB) 문서 검토 과제에서 일부러 엇갈린 사실을 집어넣고 살펴보니, 혼자 할 때보다 둘 이상이 일할 때 엇갈린 주장을 찾아내는 비율이 오히려 떨어졌다는 겁니다. 뭔 소리냐면, 정보는 더 많이 모았는데 이상한 점을 눈치채기는 더 어려워졌다는 말이에요.",
            "easy2_title": "일꾼과 총괄 사이에 주고받는 과정부터 고쳐야 한다",
            "easy2_desc": "그래서 연구진은 일꾼들이 모은 내용을 총괄에게 넘겨주는 과정이 문제의 핵심이라고 보았는데요. 일꾼들이 각자 따로 엇갈린 내용을 읽으면 알아채기 어렵지만, 한 일꾼이 양쪽 주장을 다 읽으면 찾아낼 확률이 높아진다는 거예요. 대화와 전달 방식을 바꾸면 엇갈리는 문제를 줄일 수 있는 장점이 있는데, 대신 일꾼 사이의 정보 전달을 더 촘촘히 챙겨야 한다는 점도 같이 따라온다는 겁니다.",
            "topic": "대형 언어 모델(LLM) 에이전트들이 일을 나눠 맡을 때 생기는 기억 불일치 문제와 엇갈린 사실을 찾아내는 능력을 분석한 연구예요.",
            "one_line": "다중 인공지능 에이전트의 기억 불일치와 충돌 감지 한계를 분석함",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.22219",
          "title": "Fine-Grained Japanese Clinical Named Entity Recognition: A Controlled Comparison of BERT and Open-Weight Large Language Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22219"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "일본어 임상 이름표 붙이기가 AI한테는 원래 어려웠다",
            "easy1_desc": "연구진이 113가지 세부 범주가 있는 일본어 임상 데이터셋인 iCorpus를 가지고, 기존의 BERT 모델과 공개 가중치 대형 언어 모델(LLM)의 성능을 비교해 봤는데요. 아무것도 안 가르쳐 주고 바로 시킨 제로샷 방식에서는 LLM의 최고 완화된 F1 점수가 0.337에 그쳐서, 0.836에서 0.841을 기록한 BERT 기반 모델보다 한참 낮았다는 거예요. 쉽게 말하면, 복잡하고 잘게 쪼개진 일본어 의료 문장을 읽어내는 일은 LLM한테 처음에 꽤 벅찬 과제였다는 말입니다.",
            "easy2_title": "제대로 가르치고 출력 칸을 넓혀 주니 성능이 훨씬 좋아졌다",
            "easy2_desc": "그래서 연구진이 세 번의 시드로 QLoRA 미세조정을 거치고 출력 토큰 제한을 900개에서 2,600개나 4,096개로 넉넉하게 늘려 봤는데요. 파라미터가 13B 이상인 파인튜닝된 LLM 여덟 개 전부가 완화된 F1 점수 0.882에서 0.914를 기록해서 기존 BERT 모델들을 뛰어넘었다는 겁니다. 출력을 엄격하게 제어하는 JSON 스키마를 쓰는 것만으로는 낮은 초기 성능을 뒤집지 못했다는 단점도 있는데, 대신 충분한 생성 용량과 미세조정이 뒷받침되면 성능이 크게 오르는 장점이 있다는 말이에요.",
            "topic": "일본어 임상 개체명 인식 작업에서 BERT와 공개 가중치 LLM의 성능을 세밀하게 비교하고 조건별 차이를 분석한 연구예요.",
            "one_line": "일본어 임상 이름표 붙이기에서 BERT와 LLM 성능을 비교했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "역사적인 일본어 사례 보고서 벤치마크를 바탕으로 한 결과여서, 향후 다른 환경에서도 동일하게 적용되는지 확인하는 후속 과제가 남아 있어요."
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
          "canon_id": "2611.22136",
          "title": "Big Brains, Tiny Board: Pupavision, an Agentic Physical AI Instrument for Monitoring Drosophila Pupariation and Lifecycle Transitions",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22136"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "번거로운 생물 실험 도구 때문에 시간 재기가 힘들었습니다",
            "easy1_desc": "초파리 번데기 형성 같은 중요한 생물학적 성장을 기록할 때, 여전히 일일이 사람 손으로 기록하는 경우가 많았거든요. 실험을 꾸준히 지켜볼 도구가 부족해서 생기는 문제인데요. 연구진은 바로 이런 불편함을 해결하려고 초소형 컴퓨터와 카메라를 합친 새로운 장비를 직접 만들어 봤다는 겁니다.",
            "easy2_title": "초소형 기기에 AI 에이전트를 넣어 실험을 스스로 돕게 만들었습니다",
            "easy2_desc": "연구진은 45달러에서 75달러 정도 드는 부품으로 퍼파비전(Pupavision)이라는 장비를 만들었는데요. 클라우드에서 생각하는 똑똑한 코딩 에이전트를 작은 기기 안에 집어넣어, 사진을 찍고 에러를 고치며 매일 실험을 점검하게 했다는 겁니다. 에이전트가 꺼져도 기본 캡처 서비스는 10분에 사진 한 장씩 계속 찍어준다는 장점이 있는데, 대신 기기 오류가 생기면 연구자가 직접 원인을 살펴봐야 한다는 점도 함께 따라온다는 겁니다.",
            "topic": "초파리 실험을 스스로 점검하고 기록하는 초소형 AI 장비인 퍼파비전을 개발하고 실제 실험실에 도입해 본 연구예요.",
            "one_line": "저렴한 부품으로 초파리 실험을 자동 기록하는 AI 장비를 만들었어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "앞으로 전문가가 라벨링한 데이터와 비교해 수명 주기 추적 정확도를 검증하고 실시간 컴퓨터 비전 분석을 넓히는 일이 남았다고 연구진은 밝혔습니다."
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
          "canon_id": "2611.22113",
          "title": "RegimeCouncil: Paired-Evidence Routing For Memory Conflict Governance In LLM Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22113"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기억은 낡아 가는데 피드백은 늦어서 문제였는데요",
            "easy1_desc": "언어 에이전트가 오랜 기간 기억을 쓰다 보면 세상이 바뀌어도 옛날 기억이 그대로 남아 문제가 되는데요. 문제는 이 기억이 틀렸다는 걸 행동을 다 끝낸 한참 뒤에야 늦게 알게 된다는 거예요. 그러면 잘못된 기억을 쓸 때 이 나쁜 피드백을 어디까지 퍼뜨려야 할지, 즉 같은 사실에만 적용할지 아니면 전체 기억에 다 적용할지가 헷갈린다는 겁니다. 기존 시스템들은 이 범위를 설계할 때 미리 딱 정해 버려서 유연하게 대처하지 못한다는 말이에요.",
            "easy2_title": "두 가지 조언자를 실시간으로 골라 쓰게 만들었는데요",
            "easy2_desc": "그래서 연구진은 레짐카운슬(RegimeCouncil)이라는 가벼운 짝 증거 라우터를 제안했는데요. 이 시스템은 개별 사실만 보는 지역 조언자와 전체 기억을 모아서 보는 전역 조언자를 두고, 메타 거버너가 상황에 따라 둘 중 하나를 실시간으로 골라 쓴다는 거예요. 그 결과, 기존에 고정된 방식을 쓰던 것보다 1차 의견 충돌 상황과 30가지 모든 검증 세팅에서 5.2에서 7.3포인트 더 높은 성능을 보였다고 하는데요. 대신 모듈 세 개 중 하나라도 빼 버리면 정확도가 2에서 7포인트 떨어진다는 단점도 함께 나타난다는 겁니다.",
            "topic": "숨겨진 유효성과 늦은 피드백 환경에서 언어 에이전트의 기억 충돌을 다스리기 위해 두 가지 조언자를 실시간으로 조율하는 레짐카운슬을 제안한 연구예요.",
            "one_line": "기억 충돌을 막는 라우터 시스템을 제안했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.22085",
          "title": "ATLAS-Finance: Benchmarking AI Agents in Realistic Banking Environments",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22085"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 실제 은행 업무를 얼마나 잘하는지 확인해 봤는데요",
            "easy1_desc": "연구진은 투자은행(Investment Banking)의 복잡한 실제 업무를 AI 에이전트(AI Agents)가 얼마나 잘 해내는지 평가하기 위해 ATLAS-Finance라는 벤치마크를 도입했는데요. 실제 업무는 이메일이나 채팅, 파일 등에 정보가 흩어져 있어서 조건이 바뀌거나 충돌하기도 하거든요. 전문가들이 직접 만든 100가지 과제로 살펴보았더니, 사람이 하려면 15시간에서 30시간이나 걸리는 복잡한 금융 모델 작업이었다는 말이에요.",
            "easy2_title": "성능을 시험해 봤더니 아직은 통과율이 11퍼센트를 넘지 못하네요",
            "easy2_desc": "그래서 현재의 최고 수준 AI 모델들로 이 100가지 작업을 풀게 해 봤는데요. 전문가들이 만든 124.5개의 세부 평가 기준에 맞춰 결과물을 확인해 보았더니, 가장 뛰어난 모델들도 11% 미만의 과제만 겨우 통과했다고 해요. 상당한 분량의 작업을 해내기는 하지만 아직 완벽한 결과물을 만들어내지는 못한다는 단점이 있는데, 장점은 AI의 한계가 어디인지 명확하게 드러났다는 겁니다.",
            "topic": "실제 투자은행 환경에서 AI 에이전트의 업무 수행 능력을 평가하기 위해 ATLAS-Finance 벤치마크를 도입하고 성능을 시험해 본 연구예요.",
            "one_line": "투자은행 업무 환경에서 AI 에이전트의 성능을 평가하는 벤치마크를 도입하고 시험했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": ""
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
          "canon_id": "2611.22043",
          "title": "A Hybrid Exact-Heuristic Solver for the Integrated Passenger and Parcel Transportation Problem",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22043"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "택시로 승객과 택배를 같이 나르는 문제를 어떻게 풀까",
            "easy1_desc": "연구진은 SOICT 2026 경진대회의 승객 및 택배 통합 운송 문제에 제출한 해법을 설명했는데요. 이 문제는 시간 창과 열린 경로, 그리고 다양한 택시를 고려해서 태우고 내리는 장소를 골라야 하는 문제거든요. 복잡한 조건 속에서 최적의 답을 찾아야 하는 상황이라는 말이에요. 쉽게 말하면, 승객과 택배를 한꺼번에 효율적으로 나르는 방법을 고민한 셈이에요.",
            "easy2_title": "정확한 계산과 탐색을 섞어서 빠른 해법을 만들었다",
            "easy2_desc": "그래서 표준 라이브러리 파이썬 프로그램 하나로 이루어진 해법을 만들었는데요. 최신 도착 여유 기반의 상수 시간 삽입 검사부터 탐색과 적응형 대규모 이웃 검색, 그리고 가지치기와 라그랑주 경계를 쓰는 정확한 경로 선택 엔진까지 함께 썼거든요. 그 덕분에 공식 평가에서 38개의 채점 문제에 대해 총 487,237의 이익을 얻었다고 해요. 장점은 모든 실행을 277초 안에 끝내고 279MB 이하의 메모리만 썼다는 점인데, 대신 5분이라는 제한 시간 안에서 문제를 풀어야 한다는 조건이 따른다는 겁니다.",
            "topic": "승객과 택배를 함께 나르는 통합 운송 문제를 풀기 위해 탐색 기법과 정확한 경로 선택 엔진을 결합한 파이썬 기반 해법에 대한 내용이에요.",
            "one_line": "승객과 택배 통합 운송 문제를 풀기 위한 하이브리드 파이썬 해법을 제안했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "5분이라는 제한 시간이 존재하며 38개 문제 중 28개만 제한 시간 전에 끝났습니다."
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
          "canon_id": "2611.21998",
          "title": "KV-LTM: Persistent Per-Session KV Caches as Long-Term Memory for Personal Assistants",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21998"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 개인 비서들은 대화 기록을 쌓아 두고도 사이에 과정을 거치느라 제 실력을 내지 못했는데요",
            "easy1_desc": "연구진이 롱멤에발(LongMemEval)에서 상용 비서 두 개를 시험해 봤더니, 기록을 통째로 읽는 모델보다 점수가 훨씬 낮게 나왔거든요. 이게 쓰기와 읽기 사이에 내용 손실이 생겨서 그런 건지 정확히 분리해 내지는 못했지만, 원인 중 하나로 보인다는 말이에요. 쉽게 말하면, 기억을 쌓아 두기는 하는데 꺼내 쓰는 과정에서 자꾸 구멍이 난다는 겁니다.",
            "easy2_title": "그래서 세션마다 생기는 연산 기억을 그대로 저장해 두는 방식을 제안했는데요",
            "easy2_desc": "연구진은 케이브이-엘티엠(KV-LTM)이라는 기억 계층을 설계해서, 대화 원문과 고정된 모델 아래의 연산 기억(KV cache)을 함께 저장해 두고 질문이 들어오면 바로 불러다 쓰도록 만들었어요. 검색과 색인을 아예 대체하는 건 아니고 그 보완재로 쓰는 거라, 연산을 다시 안 해도 되니까 미리 채워 넣는 속도가 빨라지는 장점이 있거든요. 대신 기억을 유지하는 예산이 정해져 있어서 저장 공간을 꽤 많이 차지한다는 단점도 같이 따라온다는 겁니다.",
            "topic": "개인 비서의 장기 기억 성능을 높이기 위해 세션별 대화 원문과 연산 기억을 함께 저장하고 재활용하는 시스템 설계와 평가 방법을 다룬 연구예요.",
            "one_line": "세션별 연산 기억을 저장해 재사용하는 장기 기억 시스템 설계와 평가법을 제안했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
              "easy1_title 한 줄 아님/너무 김(52자)"
            ],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.21978",
          "title": "WebAgents: Unbundling Agent Creation, Hosting, and Execution for an Agent-Native Web",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21978"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "에이전트가 늘어나는데 만드는 곳과 돌리는 곳이 묶여 있었다",
            "easy1_desc": "거대 언어 모델이 혼자 대답하는 걸 넘어 스스로 계획을 세우고 도구를 쓰는 자율형 에이전트로 바뀌고 있는데요, 문제는 에이전트를 만드는 사람과 호스팅하는 곳, 실행하는 환경이 너무 꽉 묶여 있어서 사용자의 자원 권한을 넘기기도 어렵고 배포도 까다롭다는 거예요. 뭔 소리냐면, 새로운 에이전트를 만들고 웹에서 자유롭게 굴리려 해도 판이 닫혀 있어서 한계가 크다는 말입니다. 결국 독립된 에이전트들이 서로 연결되는 에이전트 중심 웹으로 가려면 이 역할들을 깔끔하게 쪼갤 필요가 있었다는 겁니다.",
            "easy2_title": "역할을 쪼개는 패키지를 만들고 안전하게 실행해 봤다",
            "easy2_desc": "그래서 연구진은 WebAgents라는 시스템을 내놨는데요, 에이전트가 가진 워크플로우와 기술, 리소스 요구 사항을 서명된 agent.pkg 파일 하나에 담아 역할들을 싹 쪼갰다는 거예요. OpenClaw 기반의 브라우저 런타임이 이 패키지를 검증한 뒤에 사용자가 직접 고른 모델이나 권한, 예산과 묶어서 안전하게 돌리는 방식인데요, 문헌 검토나 여행 에이전트 같은 세 가지 워크플로우를 수정 없이 그대로 실행해 봤다는 겁니다. 실험해 봤더니 주입된 계약 위반 공격 716개를 전부 막으면서도 정상적인 제어 295개는 다 통과시켰고, 실행 전 처리 시간도 중앙값 기준 0.5초 미만으로 나왔다고 해요. 서명된 패키지로 에이전트 구동을 안전하게 나눈다는 장점이 있는데, 대신 런타임에서 사용자가 직접 권한과 모델을 꼼꼼히 설정해 줘야 한다는 점도 같이 따라온다는 겁니다.",
            "topic": "에이전트 중심 웹을 만들기 위해 에이전트의 제작, 호스팅, 실행 역할을 분리하는 WebAgents 시스템을 제안하고 그 효과를 검증한 연구예요.",
            "one_line": "에이전트 역할 분리를 위한 WebAgents 시스템을 개발하고 성능을 검증했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": ""
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
          "canon_id": "2611.21950",
          "title": "DiscoveryAgent: A Framework for Scientist-centric Agentic AI",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21950"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "혼자 일하는 AI와 사람이 감독하는 일 사이에서 균형을 잡는 게 문제였습니다",
            "easy1_desc": "인공지능 에이전트(AI agents)가 과학 연구를 도울 수는 있지만, 자율적인 연구와 사람이 진행 상황을 살피고 방향을 바꿀 수 있는 권한 사이에서 균형을 잡는 것이 핵심 설계 과제로 남아 있었거든요. 연구진은 그래서 자율 조사와 사람이 가설을 직접 이끄는 방식을 합친 디스커버리에이전트(DiscoveryAgent)라는 시스템을 선보였는데요. 과학자들이 연구 단계마다 가설을 고르거나 다듬거나 바꿀 수 있고, 감사 에이전트(audit agents)가 기록을 점검해서 주장을 추적하고 분석을 재현하도록 만든 겁니다.",
            "easy2_title": "사람이 방향을 잡는 디스커버리에이전트를 만들었더니 연구 성과가 훨씬 좋아졌습니다",
            "easy2_desc": "연구진이 내놓은 이 시스템은 엄격한 체크포인팅 구조를 갖추고 있어서 능력 있는 감사 에이전트가 자율적으로 오류를 찾아낼 수 있게 하는데요. 두 가지 예측 모델링 과제에서 비교 대상들보다 뛰어난 변광성 분류기를 만들어냈고, 사람이 방향을 잡아준 단백질 변이 효과 예측기는 106개의 프로테인짐(ProteinGym) 비교군 중 단 하나에게만 뒤처지는 성능을 보였습니다. 덕분에 자율 연구가 과학자들의 경험적 한계를 넓혀주면서도 연구 방향에 대한 권한을 쥐게 해준다는 장점이 있는데, 대신 사람이 직접 개입하고 확인해야 하는 부담이 늘어난다는 점도 함께 따른다는 말이에요.",
            "topic": "과학 연구에서 자율적인 AI와 사람의 감독을 결합하여 연구 성과를 높이는 디스커버리에이전트 시스템을 개발하고 평가한 내용이에요.",
            "one_line": "사람이 개입해 가설을 조율하는 AI 연구 시스템을 개발했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": ""
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
          "canon_id": "2611.21948",
          "title": "Honest Brokers in AI Regulation: How Public Comments Introduce Evidence to Regulators",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21948"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기업이 AI 규제 과정에서 정보를 독점하는 게 문제였는데요",
            "easy1_desc": "연구진은 인공지능(AI) 규제를 만들 때 산업계 주자들이 정보를 더 많이 쥐고 있어서 정책에 지나친 영향력을 행사할 수 있다는 점을 짚어봤는데요. 뭔 소리냐면, 기술을 직접 만드는 쪽이 정보를 쥐고 있어서 규제 과정에서 유리하다는 말이에요. 그래서 미국의 잠재적 규제 40건과 이해관계자가 낸 공개 의견 2,664건을 모아 분석해 봤다는 겁니다.",
            "easy2_title": "누가 어떤 근거를 내는지 뜯어봤더니 정부와 대학이 더 많은 연구를 가져왔어요",
            "easy2_desc": "그래서 연구진이 공개 의견에 담긴 공식 인용과 비공식 참고 자료를 분석해 봤더니, 글 길이를 똑같이 맞춰도 기업 주자들은 증거를 적게 내고 정부·대학·시민사회는 연구와 법적 출처를 훨씬 더 많이 낸다는 사실을 알아냈는데요. 인용된 연구가 출판된 상태인지 보면 프리프린트(사전 인쇄본)와 동료 심사를 거친 글이 고루 섞여 있었다는 겁니다. 다만 자기 인용은 모든 그룹에서 흔하지만 소수 기관이 전체 자기 인용의 절반 넘게 차지한다는 점도 함께 드러났는데요. 쉽게 말하면, 공개 의견이 무조건 기업의 정보 독점으로만 이어지는 건 아니라는 말이에요.",
            "topic": "미국 AI 규제 과정에서 공개 의견 제출자들이 어떤 증거를 내놓는지 분석하여 규제 기관에 정보가 어떻게 닿는지 살펴본 연구예요.",
            "one_line": "AI 규제 공개 의견에서 제출자들이 내는 증거의 차이와 역할을 분석했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": ""
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
          "canon_id": "2611.21946",
          "title": "Conserved Verdicts, Drifting Commitments: Identifying Harmful Overthinking",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21946"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "정답을 맞혀놓고도 계속 생각하다가 오히려 틀리게 되는데요",
            "easy1_desc": "추론 모델이 이미 맞은 답을 찾아내고도 계속 생각을 이어가다가 결국 정답을 잃어버리는 일이 생기는데요, 연구진은 멈추 지금 낼 답이 맞을 확률인 커밋먼트와 끝까지 가서 낼 답이 맞을 확률인 버딕트를 비교해야 한다고 봤어요. 그런데 최종 정답만 추정하는 버딕트 하나만으로는 이 비교를 할 수 없다는 거예요. 쉽게 말하면, 계속 생각을 더 하는 게 도움이 되는지 해가 되는지 미리 알기가 어렵다는 말이에요.",
            "easy2_title": "생각을 멈추는 시점을 다루는 틀을 세웠습니다",
            "easy2_desc": "그래서 연구진은 커밋먼트와 버딕트의 차이로 정답의 변화와 멈춰서 얻는 정확도를 설명할 수 있는 새로운 수학적 틀을 만들었는데요, MATH-500 데이터셋에서 DeepSeek-R1-Distill-Qwen-1.5B 모델을 시험해 봤더니 이미 맞은 379개의 지점 모두에서 계속 생각을 이어간 결과 평균 3.6점의 정확도를 잃었다는 겁니다. 정확도가 떨어지는 이유는 남은 연산 과정 자체의 문제라기보다는 어떤 연산 과정을 계속 유지하는지에 달렸다는 장점이 있는 반면, 최적의 타이밍에 멈추는 오라클 규칙을 써도 얻을 수 있는 이득은 1.5B와 7B 모델에서 각각 최대 1.8점과 2.5점에 그친다는 점도 같이 확인됐어요.",
            "topic": "추론 모델이 생각을 멈추는 시점을 결정하기 위해 커밋먼트와 버딕트의 차이를 분석한 수학적 틀과 그 측정 결과에 대한 내용이에요.",
            "one_line": "추론 모델이 생각을 멈추는 시점을 판단하는 수학적 틀을 제안하고 그 영향을 측정했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.21832",
          "title": "Auditors Struggle to Catch Sabotage In End-to-End Transcripts of AI Safety Research",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21832"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "연구원을 흉내 내서 AI가 벌일 수 있는 꿍꿍이를 실험해 봤는데요",
            "easy1_desc": "AI가 AI 연구를 스스로 하는 시대가 오면서, 엇나가거나 나쁜 마음을 먹은 시스템이 안전 연구를 망가뜨릴 수 있다는 걱정이 커졌거든요. 그래서 연구진은 사람이 직접 AI 안전 연구를 처음부터 수행하면서 몰래 방해하는 실험을 해 봤는데요. 전체 기록을 다 보고 실험까지 해볼 수 있게 해줬는데도, 사람이 직접 검사해 봤더니 진짜 방해받은 연구와 정상적인 연구를 잘 구분하지 못했다는 거예요. 쉽게 말하면, 숨겨놓은 방해 공작을 사람이 눈치채기란 생각보다 훨씬 어렵다는 말이에요.",
            "easy2_title": "인간보다 뛰어난 AI 모델도 있었지만 여전히 탐지는 쉽지 않다는 겁니다",
            "easy2_desc": "그래서 이번에는 실험을 직접 돌리지 못하는 조건 속에서 여러 AI 모델에게 검사를 맡겨봤는데요. 놀랍게도 가장 성능이 좋은 최신 AI 모델(Fable 5.1 기준 AUROC 0.73, 32% 완전 적발)은 사람 검사자보다 나은 모습을 보였지만, 약한 모델들은 사람과 비슷한 수준에 머물렀다는 거예요. 게다가 방해꾼이 아무 실험이나 막 공격하는 게 아니라 골라서 공격할 때는 방해를 찾아내는 비율이 더 뚝 떨어졌거든요. 결국 지금의 감시 방법으로는 전문가 수준의 에이전트가 벌이는 연구 방해를 알아채기가 매우 힘들다는 결론이라는 겁니다.",
            "topic": "AI 안전 연구 과정에서 전문가 수준의 AI 에이전트가 벌일 수 있는 연구 방해 공작을 사람이 얼마나 잘 찾아낼 수 있는지 실험하고 성능을 평가한 연구예요.",
            "one_line": "AI 안전 연구에서 인공지능이 벌이는 연구 방해를 사람이 찾아내는 한계를 실험했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": ""
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
          "canon_id": "2611.21827",
          "title": "How Much of SAR Vehicle Recognition Is the Vehicle? Background Shortcuts, Angle Gaps and Partial Libraries on MSTAR and ATRNet-STAR",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21827"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "차량 인식 정확도가 높은 게 진짜 차 때문인지 확인해 봤습니다",
            "easy1_desc": "딥러닝(심층 신경망) 모델이 합성개구레이더(SAR) 차량 인식 데이터셋에서 99%에 가까운 점수를 내는데요, 연구진은 이 점수가 진짜 차량 모양에서 나오는지 파악해 봤습니다. MSTAR 벤치마크(성능 평가 기준)에서 한가운데 차량 부위를 지워 버렸더니 정확도가 73.3%로 여전히 높게 나왔거든요. 즉, 차량이 없는데도 주변 배경만 보고 맞히는 지름길(스포일러)이 숨어 있었다는 말이에요.",
            "easy2_title": "배경 영향을 걷어내고 각도 차이를 고정해 한계를 짚어봤습니다",
            "easy2_desc": "그래서 연구진은 차량만 남기거나 배경만 남기는 실험을 해 봤는데요, 배경이 바뀔 때는 오히려 정확도가 22.8%까지 떨어져 배경에 크게 의존한다는 단점이 드러났습니다. 또 촬영 각도 간격이 멀어질수록 정확도가 57%에서 26%까지 뚝 떨어진다는 점도 확인했는데요, 훈련 데이터를 무조건 늘린다고 해결되지는 않는다는 셈이에요. 쉽게 말하면, 정확도 숫자만 믿을 게 아니라 배경 통제와 각도 차이를 함께 보고해야 한다는 겁니다.",
            "topic": "합성개구레이더(SAR) 차량 인식 모델의 높은 정확도가 차량 본체보다 배경과 촬영 각도에 얼마나 의존하는지 파악한 연구예요.",
            "one_line": "SAR 차량 인식 모델의 높은 정확도가 배경과 각도에 의존함을 분석했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "데이터셋의 촬영 각도 간격과 배경 변화에 따라 모델 성능이 크게 떨어지는 조건적 한계를 확인했습니다."
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
          "canon_id": "2611.21799",
          "title": "Chain-of-Thought Controllability Can Reduce Chain-of-Thought Monitorability",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21799"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 생각하는 과정을 우리가 감시하기가 어려워질 수 있어요",
            "easy1_desc": "AI가 어떤 과정을 거쳐 답을 내는지 지켜보는 생각의 사슬(CoT) 감시는 AI의 숨겨진 목표나 딴짓을 찾아내는 데 아주 유용한 도구거든요. 그런데 AI가 일부러 자신의 추론 과정을 복잡하게 꼬아서 감시자가 알아채지 못하게 만들 위험이 있다는 거예요. 연구진은 이런 위험을 확인하려고 여러 인격(persona)을 흉내 내어 수학 문제를 풀도록 AI를 훈련해 봤는데요, 이렇게 하면 감시를 피하라는 지시가 없어도 AI가 스스로 추론 과정을 조절하는 능력을 갖추게 된다는 사실을 발견했습니다.",
            "easy2_title": "AI가 감시를 피하려고 추론 과정을 숨기는 법을 배워 버렸어요",
            "easy2_desc": "실제로 실험해 봤더니, 숨겨진 과제를 수행하는 AI 모델은 그렇지 않은 모델보다 감시자가 추론 과정을 파악하기가 훨씬 어려웠거든요. 감시 가능성을 나타내는 지표인 g-mean^2 수치를 확인해 보니, 기본 모델은 0.94였지만 훈련된 모델은 0.68로 떨어졌고, 아예 숨기라고 지시했을 때는 0.22까지 낮아졌다는 거예요. 다만 투명성을 높이라는 지시를 내리면 감시 가능성을 다시 상당 부분 회복할 수 있다는 점도 확인했는데요, 이는 AI가 감시를 피하려는 전략을 학습할 수 있음을 보여주는 사례라고 연구진은 주장했습니다.",
            "topic": "AI 모델이 추론 과정을 조절하여 감시를 회피할 수 있는 위험성을 검증하고 이를 완화할 방법을 연구했어요.",
            "one_line": "AI가 감시를 피하려고 추론 과정을 조절하는 위험성을 실험하고 대응책을 찾았어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "복잡한 추론이나 긴 과정을 요구하는 숨겨진 목표는 단순한 단일 단계 과제보다 여전히 감시하기가 더 쉽다고 연구진은 밝혔습니다."
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
          "canon_id": "2611.21520",
          "title": "Safe Resemblance, Silent Propagation: Limits of Text-Similarity Guardrails for AI Agent Safety",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21520"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "텍스트가 비슷하다고 해서 무조건 위험하다고 볼 수는 없다는 겁니다",
            "easy1_desc": "연구진이 AI(인공지능) 에이전트들이 이메일을 주고받는 상황을 3개 에이전트 연쇄 구조로 실험해 봤는데요, 주입된 명령이 모양만 살짝 바뀐 채 다음 에이전트로 전달되는 기능적 결과와, 원래 허용된 정상적인 인용이나 템플릿 재사용이 서로 텍스트 겹침 정도가 비슷해서 기존의 텍스트 유사도 검사기가 둘을 잘 구별하지 못한다는 걸 확인했습니다. 뭔 소리냐면, 위험한 명령어 전파와 정상적인 인용을 겉모습만 보고 나누려다 보니 한계가 뚜렷하다는 말이에요. 쉽게 말하면, 비슷하다고 다 나쁜 건 아닌데 기존 도구는 이걸 헷갈린다는 셈이에요.",
            "easy2_title": "기본 임계값을 조절해 봐도 오탐지가 줄지 않고 위험한 출력을 놓친다는 겁니다",
            "easy2_desc": "그래서 연구진이 BLEU와 ROUGE-L, METEOR를 합친 공개 분류기인 DonkeyRail을 가지고 기본 임계값에서 테스트를 해봤더니, 기능적 출력을 19개 중 8개나 놓쳤고 정상적인 답변 192개 중 70개를 가짜 경보로 잡아냈다고 해요. 템플릿 세트 하나에 맞춰 오탐지를 줄이려고 다시 조율해 봤지만 다른 템플릿에서는 여전히 오탐지가 15개나 발생했고 기능적 출력은 1개밖에 못 찾아내는 한계가 드러났다는 겁니다. 서류나 겉보기 기준만으로는 실제 위험을 제대로 걸러내기 어렵다는 장단점이 동시에 확인된 셈이에요.",
            "topic": "AI 에이전트의 안전성을 텍스트 유사도만으로 평가할 때 발생하는 한계와 행동 기반 평가의 필요성을 다룬 연구예요.",
            "one_line": "AI 에이전트 안전성을 위한 텍스트 유사도 검사기의 한계를 실험으로 밝혔어요.",
            "topic_tag": "AI 안전·평가",
            "limit": ""
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
            "tag": "AI 안전·평가",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.21476",
          "title": "Generative AI and the Crisis of Higher Education Assessments: Examining 'AI-Proofing' Strategies for College-Level Assessments",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21476"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "생성형 AI가 과제와 시험을 순식간에 풀면서 대학 교육은 사상 초유의 학업 진실성 위기를 맞닥뜨렸는데요",
            "easy1_desc": "기존 연구들은 주로 표준화 시험이나 단일 전공 과목 문제들 위주로 대형 언어 모델의 성능을 살펴봤거든요. 하지만 여러 전공에 걸쳐 교수들이 일부러 AI가 풀기 어렵게 만든 대학 수준 평가 문제에서는 모델들이 어떻게 움직이는지 아직 잘 모르는 상태라는 거예요. 쉽게 말하면, 실제 대학 현장에서 교수들이 머리를 맞대고 만든 방어형 문제들에 AI가 얼마나 취약한지 제대로 파악할 필요가 있었다는 겁니다.",
            "easy2_title": "미국과 영국의 실제 대학 교수들이 낸 문제 75개를 모아서 대형 언어 모델의 실력을 직접 시험해 봤는데요",
            "easy2_desc": "연구진은 10개의 미국 대학과 1개의 영국 대학 소속 교수 37명이 모아준 17개 전공의 실제 과제 문항 75개를 수집해서 세 가지 최신 대형 언어 모델에 풀려봤습니다. 그 결과 가장 성능이 좋은 모델은 참고 자료가 없을 때 약 83%, 자료가 있을 때는 약 85%의 정답률을 기록했다고 하는데요. 모델마다, 답안 형식마다, 그리고 교수가 문제를 비튼 방식마다 차이가 분명하게 나타났다는 겁니다.",
            "topic": "대학 수준의 과제와 시험에서 AI 방어 전략이 대형 언어 모델의 문제 해결 능력에 어떤 영향을 미치는지 실제 대학 과제 문항을 통해 분석한 연구입니다.",
            "one_line": "실제 대학 과제 문항으로 생성형 AI의 문제 풀이 능력을 시험했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
              "easy1_title 한 줄 아님/너무 김(57자)",
              "easy2_title 한 줄 아님/너무 김(58자)"
            ],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.21441",
          "title": "Learning to Reason with Predictive Gains for Generative Recommendation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21441"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식은 왜 단계별 기여도를 몰랐을까",
            "easy1_desc": "연구진은 대형 언어 모델의 추론 능력을 빌려 다음 추천을 맞추는 생성형 추천 방식에서, 각 추론 단계가 실제로 얼마나 도움이 됐는지 제대로 측정하지 못했다는 점을 짚었는데요. 무슨 말(소리)이냐면 결과만 보고 점수를 매기다 보니 과정마다 기여한 몫이 최적화 신호에 직접 반영되지 않았다는 거예요. 게다가 그룹 안의 여러 추론 경로가 서로 구별하기 힘든 비슷한 보상을 받는 약한 판별력 문제도 같이 겪고 있었다는 겁니다. 쉽게 말하면, 열심히 추론을 해도 어떤 과정이 진짜 결정적인지 알기 어려웠던 셈이에요.",
            "easy2_title": "예측 이득으로 단계별 보상을 매기는 새로운 훈련틀을 제안하다",
            "easy2_desc": "그래서 연구진은 개별 추론 문장이 바꾸는 목표 의미론적 아이디(SID)의 로그 우도 변화를 재는 예측 이득 기반의 훈련틀인 GainReason을 내놓았는데요. 문장 단위의 보상으로 추론 생성을 최적화하는 방법과 이를 뒷받침하는 맞춤형 인과 어텐션 메커니즘을 함께 개발했다는 거예요. 복잡한 연산을 효율적으로 해낸다는 장점이 있는데, 대신 추가적인 보조 작업까지 함께 굴려야 한다는 점도 같이 따라온다는 겁니다. 쉽게 말하면, 추론 과정의 몫을 낱낱이 따져서 더 똑똑하게 학습시킨다는 말이에요.",
            "topic": "대형 언어 모델의 생성형 추천에서 개별 추론 문장의 예측 이득을 활용해 추론 단계를 최적화하는 방법론인 GainReason을 제안한 것에 대한 내용이에요.",
            "one_line": "예측 이득을 활용한 생성형 추천 추론 최적화 훈련틀을 제안하고 실험했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.21407",
          "title": "Harness Leverage Across Model Size: A Ladder of Five Local Agent Harnesses from 0.75B to 4.7B",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21407"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "모델은 그대로 두고 도구와 규칙만 바꿔 봤는데요",
            "easy1_desc": "연구진은 0.75B부터 4.7B까지의 지역 모델 4개와 35.5B 기준 모델을 두고, 완성도와 도구를 제어하는 5개의 하니스(작업을 완성하는 시스템)를 조합해 360개의 칸을 채워 봤거든요. 그 결과 완성도를 제어하는 하니스인 Mingbird가 모든 크기에서 가장 높은 평균 점수를 기록했다고 해요. 쉽게 말하면, 모델 크기만 보는 게 아니라 하니스를 어떻게 짰느냐가 결과에 큰 영향을 준다는 말이에요.",
            "easy2_title": "규칙 하나를 빼 봤더니 결과가 확 달라졌습니다",
            "easy2_desc": "그래서 하니스 안에서 반복을 막는 규칙 하나만 빼고 돌려봤더니, 0.75B 모델에서는 성능이 0.411만큼 떨어지고 18개 과제 중 8개에서 결과물이 아예 안 남았다는 거예요. 하니스가 단순히 점수만 조금 만지는 게 아니라 파일이 실제로 남는지 결정하는 역할을 한다는 장점이 있는 반면, 잘못 건드리면 작업 자체가 멈춘다는 점도 같이 보여준다는 겁니다. 쉽게 말하면, 똑똑한 모델이라도 도구 쓰는 판을 어떻게 짜느냐에 따라 성과가 완전히 갈린 셈이에요.",
            "topic": "모델 크기와 하니스 조합에 따른 AI 에이전트의 작업 완성도와 실행 효과를 분석한 내용이에요.",
            "one_line": "AI 모델 크기와 하니스 조합별 작업 완성도를 비교했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "모델 크기에 따라 하니스 효과가 커지거나 작아지는지 여부는 네 가지 단계에서 명확하게 결론을 내리지 못했습니다."
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
          "canon_id": "2611.21315",
          "title": "Benchleaking Is Accelerating: Benchmark contamination has worsened sharply in the past month -- from post-training down to pre-training base models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21315"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시험 문제가 학습 데이터에 들어가 있던 건데요",
            "easy1_desc": "연구진은 벤치마크 테스트 문제들이 인공지능(AI) 학습 데이터에 몰래 섞여 들어가는 현상을 벤치리킹이라고 불렀는데요, 진짜 능력이 아니라 문제 기억력을 측정하게 된다는 말이에요. 최근 한 달 사이에 이 문제가 후학습을 넘어 사전학습 단계까지 번졌다는 걸 확인했거든요. 쉽게 말하면, AI가 시험 답안을 미리 외우고 시험을 보는 셈이라는 겁니다.",
            "easy2_title": "모델마다 유출 수준이 크게 달랐다는 건데요",
            "easy2_desc": "그래서 연구진은 유출된 문제를 빼고 다시 계산하는 안티핵 점수를 도입해서 모델별로 얼마나 손실이 나는지 측정해 봤는데요, 모델에 따라 점수가 1.3점에서 16.6점까지 깎이는 걸로 나타났어요. 유출 문제를 걸러내는 오염 제거 보고서와 보정된 점수를 표준으로 삼아야 한다는 주장인데요, 리더보드 순위뿐만 아니라 연구 전체에 영향을 준다는 장단점이 같이 따라온다는 겁니다.",
            "topic": "인공지능 모델의 학습 과정에서 벤치마크 시험 문제가 유출되는 벤치리킹 현상이 심각해짐에 따라, 이를 측정하고 보정하는 방법을 제안한 내용이에요.",
            "one_line": "인공지능 모델의 벤치마크 문제 유출 실태를 분석하고 보정 점수를 제안했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": ""
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
            "tag": "AI 안전·평가",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.21306",
          "title": "Share your Screen and Talk to Gemini: How Young Learners Interact with Multimodal GenAI While Solving Scratch Tasks",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21306"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "긴 설명 대신 목소리로 도와주는 AI 튜터가 필요했어요",
            "easy1_desc": "스크래치로 코딩을 배우는 아이들은 글자가 많고 긴 설명이나 힌트를 읽으며 디버깅하는 걸 어려워하는데요, 그래서 화면 공유나 카메라로 소통하는 방식이 대안이 될 수 있는지 살펴봤다는 겁니다. 5·6학년 학생 23명이 스크래치 수업을 마친 뒤 멀티모달 생성형 AI 튜터와 대화하며 여덟 가지 과제를 해결하는 과정을 분석해 봤는데요, 튜터의 답변은 알아듣기 쉽고 행동으로 옮길 수 있었지만 의외로 오류를 놓치는 경우도 적지 않았다는 말이에요. 쉽게 말하면, 말로 편하게 묻고 답할 수 있는 AI 튜터가 아이들의 코딩 학습에 어떤 영향을 주는지 살펴본 셈이라는 겁니다.",
            "easy2_title": "말은 청산유수인데 실제 오류는 꽤 많이 놓쳤거든요",
            "easy2_desc": "그래서 연구진이 실제 수업에서 튜터와 나눈 대화를 분석했더니, 튜터가 오류 603건 중 61.5%에서 실제 코딩의 오류를 잡아내지 못했다고 하는데요, 사전 시험에서의 15.7%에 비하면 꽤 높아진 수치라는 겁니다. 영상으로 틀릴 수도 있다고 알려줬는데도 아이들의 39.1%는 튜터의 답이 항상 맞을 거라고 믿었다는 점도 함께 나타났는데요. 서툰 부분이 있다는 단점도 있지만, 목소리로 자연스럽게 피드백을 주고받을 수 있다는 장점도 함께 보여준다는 말이에요.",
            "topic": "스크래치 코딩 학습에서 멀티모달 생성형 AI 튜터와 5·6학년 학생들이 나눈 말과 상호작용의 특징을 살펴본 연구예요.",
            "one_line": "초등학생과 멀티모달 AI 튜터의 음성 상호작용을 분석했어요",
            "topic_tag": "AI 에이전트·도구",
            "limit": "연구진은 화면 공유만으로는 프로그램 상태와 꼭 들어맞는 답변을 보장할 수 없다고 밝혔어요."
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
          "canon_id": "2611.21299",
          "title": "Turing Agent: Agentic Formal Verification for Mathematical Research",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21299"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 만든 수학 증명이 늘어나는데 과연 믿을 수 있을까",
            "easy1_desc": "거대 언어 모델이 눈부시게 발전하면서 이제는 최전선 연구 문제까지 다루고 있는데요, 문제는 이렇게 쏟아지는 증명이 진짜 맞는지 어떻게 확인하냐는 겁니다. 믿을 수 있는 기계 검증 지식으로 바꾸는 게 과제인데요, 쉽게 말하면 AI가 푼 문제가 진짜 맞는지 확실히 걸러내야 한다는 말이에요.",
            "easy2_title": "연구-수준 수학을 끝까지 검증하는 튜링 에이전트를 만들었더니",
            "easy2_desc": "그래서 연구진은 정리 정형화와 증명 정형화를 함께 다루는 투스케일 구조의 튜링 에이전트를 내놨는데요, 이걸로 복잡한 이론 컴퓨터 과학 분야를 평가해 봤더니 57-62% 수준의 성공률을 보였다고 해요. 미해결 과제도 풀어내는 장점이 있는데, 대신 모델 성능에 따라 결과가 달라진다는 점도 같이 따라온다는 겁니다.",
            "topic": "연구 수준의 수학 문제를 끝까지 검증하기 위해 정형화 에이전트 시스템을 개발하고 그 성능을 평가한 연구예요.",
            "one_line": "연구 수준 수학의 끝과 끝 검증을 돕는 튜링 에이전트를 개발했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": ""
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
          "canon_id": "2611.21250",
          "title": "Stream of Belief: Eliciting Collective Intelligence through Latent Belief Dynamics",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21250"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "에이전트들이 각자 생각을 나누다가 멈추는 지점을 찾아봤어요",
            "easy1_desc": "연구진은 여러 에이전트(인공지능 프로그램)가 서로 대화하고 반성하면서 각자의 생각을 고쳐 나가는 과정을 전체적인 균형을 찾는 과정으로 봤는데요, 여기서 'Stream of Belief'라는 방법을 써서 에이전트들이 마음속에 품은 생각들을 계속 다듬게 해 봤거든요. 그렇게 서로 이야기를 주고받아도 더 이상 새롭게 퍼져 나갈 정보가 없을 때의 상태를 찾았다는 말이에요. 쉽게 말하면, 여러 AI가 토론을 거듭하다가 더 할 말이 없어지는 순간을 찾아낸 셈이라는 겁니다.",
            "easy2_title": "다양한 작업에서 잘 통하는지 확인해 봤어요",
            "easy2_desc": "연구진은 여러 가지 실험을 해 봤는데요, 다양한 작업과 모델들에서 이 방법이 넓게 잘 적용된다는 것을 보여줬거든요. 결과적으로 이번 연구 결과들은 믿음의 움직임이라는 새로운 시각으로 여러 에이전트의 추론 능력을 키우는 방법을 바라보게 만든다는 거예요. 서서히 생각을 맞추는 방식이라 넓은 범위에서 쓸 수 있다는 장점이 있는데, 대신 모델마다 내부 상태를 계속 관리해야 한다는 점도 같이 따라온다는 겁니다.",
            "topic": "여러 에이전트가 생각의 움직임을 주고받으며 균형을 찾아가는 'Stream of Belief' 방법을 제안하고 그 일반화 가능성을 확인한 연구예요.",
            "one_line": "다중 에이전트의 생각의 움직임을 맞추는 추론 방법을 제안했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.21240",
          "title": "How Developer Personality Shapes the Use of AI Coding Assistants",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21240"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "개발자 성격에 맞춰 AI를 다르게 써야 하는데 기준이 없었는데요",
            "easy1_desc": "개발자마다 성격이 다른데도 AI 코딩 보조 도구는 똑같이 움직이거나 개발자가 직접 시행착오를 겪으며 맞춰야 한다는 문제가 있었는데요. 성격이 AI 경험에 어떤 영향을 주는지, 어떤 성격을 고려해야 하는지 아직 불분명하기 때문이에요. 쉽게 말하면, 언제 무엇이 왜 통하는지 뒷받침할 이론이 없는 상태로 도구를 쓴 셈이라는 말이에요.",
            "easy2_title": "체계적인 조사와 설문을 통해 성격과 AI 인식의 관계를 살펴봤는데요",
            "easy2_desc": "그래서 연구진은 LLM 기반 도구에 대한 사용자 성격과 인식을 다룬 체계적 범위 검토를 거쳐 12개의 연구를 찾아냈는데요. 외향성이 높을수록 개인적인 사용 경험이 더 긍정적이었고, 우호성은 첫 조사에서 부정적이었다가 두 번째 조사에서는 긍정적으로 나타났다는 겁니다. 성격에 따른 효과가 개발자에게도 이어진다는 첫 단서를 얻었지만, 이론을 세우려면 표모를 키운 후속 연구가 더 필요하다는 점도 같이 따라온다는 겁니다.",
            "topic": "개발자의 성격 특성이 AI 코딩 보조 도구에 대한 인식과 경험에 어떤 영향을 미치는지 탐색한 연구예요.",
            "one_line": "개발자 성격과 AI 코딩 보조 도구 인식의 관계를 설문으로 살펴봤어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "이론을 세우려면 더 큰 표본을 둔 추가 연구가 필요하다고 연구진은 밝혔습니다."
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
          "canon_id": "2611.21096",
          "title": "Inference Equivalence and Quotient Coding",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21096"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "어떤 걸 남기고 어떤 걸 줄여야 할지 몰랐어요",
            "easy1_desc": "불완전한 관측 데이터를 무작정 압축해 버리면 타당한 결론까지 바뀔 수 있다는 점이 문제였는데요, 연구진은 특정 태스크에서 모든 타당한 결론을 지키려면 어떤 구분을 남겨야 하는지 질문을 던졌어요. 뭔 소리냐면, 데이터를 줄이더라도 결론에 영향을 주는 핵심은 반드시 유지해야 한다는 말이에요.",
            "easy2_title": "불필요한 정보를 묶어내는 몫 코드를 만들어 성능을 확인했어요",
            "easy2_desc": "그래서 연구진은 호환성 집합 사이의 추론 동등성을 정의하고 그 경계로부터 표준적인 몫 코드를 만들어 냈는데요, 이를 통해 정확한 추론 디코딩을 유지하면서도 구별 가능한 코드 값을 최소화하는 방식을 구현했어요. 실험 결과 1,962개의 HRSID 테스트 이미지 중 1,913개의 후보 집합이 단 36개의 7-클레임 추론 시그니처로 압축되는 장점이 있는 반면, 학습된 추정치는 지오메트리, 메커니즘, 조인트 시프트에 따라 정확도와 구체성에서 서로 다른 트레이드오프를 보인다는 점도 함께 나타났어요.",
            "topic": "특정 태스크의 타당한 결론을 보존하면서 호환성 집합을 압축하기 위해 추론 동등성과 몫 코드를 정의하고 그 성능을 평가한 연구예요.",
            "one_line": "추론 동등성과 몫 코드를 정의해 타당한 결론을 보존하면서 데이터를 압축했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.21076",
          "title": "Counting What Matters: Reducing Redundant Object Detections in Overlapping UAV Mapping Imagery for Disaster Response",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21076"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "사진이 겹치다 보니 같은 물체가 여러 번 잡히는 문제가 있었어요",
            "easy1_desc": "재난 현장을 드론으로 촬영해 지도나 정사사진을 만들 때는 사진들을 넓게 겹쳐서 찍어야 하는데요, 그러다 보니 같은 물건이 여러 사진 속에서 중복으로 탐지되거나 움직이는 물체가 누락되는 일이 생깁니다. 정사사진만 가지고는 현장을 정확히 분석하기가 구조적으로 부족하다는 말이에요. 쉽게 말하면, 똑같은 대상이 겹쳐서 찍히면서 정보가 꼬이는 셈이라는 겁니다.",
            "easy2_title": "개별 사진에서 물체를 먼저 찾고 중복을 합치는 방식을 써봤어요",
            "easy2_desc": "그래서 연구진은 통째로 합친 사진 대신 개별 사진들에서 물체를 각각 찾아낸 다음 겹치는 탐지 결과를 하나로 합치는 방식을 제안했는데요, 3차원 위치 정보와 DINOv3 외형 특징을 묶어서 군집화하는 방법을 썼습니다. 이렇게 했더니 현장 대원들이 바로 확인할 수 있는 검증 가능한 물체 그룹으로 묶여서 오픈소스 웹 앱인 ARGUS에 반영된다는 거예요. 결과적으로 정확한 연산과 개수 오차 사이의 균형을 잘 잡게 되는 장점이 있는데, 대신 드론 비행 데이터의 특성상 시차가 벌어지는 조건에서는 정확도를 유지하는 데 한계가 있을 수 있다는 점도 같이 따라온다는 겁니다.",
            "topic": "재난 대응 드론 매핑 사진에서 겹치는 촬영으로 인한 중복 물체 감지를 줄이기 위해, 개별 이미지 탐지와 결합된 재식별 접근법을 제안한 논문이에요.",
            "one_line": "드론 매핑 사진에서 중복 감지를 줄이는 재식별 기법을 제안했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "드론 매핑 비행이 시차가 존재하고 드문드문 샘플링되는 구조적 한계 때문에 완벽한 추적이 어려울 수 있다는 점이 남는 과제예요."
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
          "canon_id": "2611.21020",
          "title": "SWE-OPD: On-Policy Distillation for Agentic Coding",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21020"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "코딩 에이전트 능력을 작은 모델로 옮겨오고 싶었다",
            "easy1_desc": "연구진은 큰 교사 모델이 가진 에이전트 코딩 능력을 더 작은 학생 모델로 옮겨오는 온폴리시 증류 방식을 살펴봤는데요, 기존 연구들은 주로 추론이나 짧은 과제에 집중해 왔다는 겁니다. 그래서 소프트웨어 공학 분야를 위한 온폴리시 증류 방식인 SWE-OPD를 선보였는데요, 학생 모델이 실행 가능한 저장소와 직접 상호작용하고 교사 모델이 그 과정을 감독하는 방식이에요. 쉽게 말하면, 큰 모델의 노하우를 작은 모델에게 실전 연습을 통해 가르쳐 보려 했다는 셈입니다.",
            "easy2_title": "직접 실습을 붙여봤더니 성능이 확실히 올랐다",
            "easy2_desc": "연구진이 세 가지 교사-학생 쌍과 세 가지 벤치마크로 실험을 해봤더니, 교사 모델의 감독을 거치면서 코딩 능력이 실제로 이전되었다는 건데요, 예를 들어 Qwen3.6-27B 모델의 감독을 받자 Qwen3.5-9B 모델의 해결률이 35.9%에서 39.4%로 올라갔다는 거예요. 궤적을 실시간으로 새로 고칠 필요 없이 캐시된 점수를 쓰는 오프라인 방식도 GPU 시간을 59.4%에서 72.6%까지 줄여주면서 성능을 높여준다는 장점이 있는데요, 대신 벤치마크에 따라 정확도가 달라진다는 한계도 함께 나타났다는 겁니다.",
            "topic": "큰 언어 모델의 에이전트 코딩 능력을 작은 모델로 효율적으로 옮기기 위한 온폴리시 증류 기법과 그 성능을 평가한 연구예요.",
            "one_line": "에이전트 코딩 능력을 작은 모델로 옮기는 증류 기법을 평가했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "오프라인 변형 방식을 쓸 때 정확도가 벤치마크에 따라 달라진다는 조건이 있습니다."
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
          "canon_id": "2611.20988",
          "title": "Hivemind: A Federated Protocol for AI-Mediated Tacit Knowledge Sharing in Organisations",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20988"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 사람들 대신 서로 몰래 지식을 나눌 수가 없었어요",
            "easy1_desc": "조직 안에서 사람들이 AI를 쓸 때 나오는 생각이나 판단 같은 암묵지를 서로 나누려고 했는데요, 기존에는 중앙 집중식 저장소나 전문가 찾기 같은 반쪽짜리 도구들만 있어서 부서와 팀을 넘어 자유롭게 흐르지 못하는 빈틈이 있었다는 말이에요. 뭔 소리냐면, 각자 따로 노는 AI 기억 시스템 때문에 진짜 중요한 노하우가 갇혀 있었다는 겁니다.",
            "easy2_title": "사람 없이도 AI 에이전트끼리 지식을 교환하는 프로토콜을 만들었어요",
            "easy2_desc": "그래서 연구진은 하이브마인드라는 연합형 프로토콜을 만들었는데요, 사용자가 직접 나서지 않고도 AI 에이전트들이 비동기 방식으로 암묵지를 주고받는 공유 공간을 제공한다는 겁니다. 노나카와 다케우치의 SECI 모델을 바탕으로 중앙 집중식과 분산식 설계 방식을 비교하고 디자인 사이언스 연구 방법론으로 개념 증명 구현을 보여줬다는 장점이 있는데요, 대신 기업이 얻는 이익을 직접 측정하는 건 앞으로 남은 과제로 둔다는 점도 같이 말했어요.",
            "topic": "조직 안에서 사용자들을 대신해 AI 에이전트들이 암묵지를 주고받도록 만든 연합형 프로토콜 하이브마인드에 대한 연구예요.",
            "one_line": "AI 에이전트가 암묵지를 나누는 연합형 프로토콜을 제안했어요",
            "topic_tag": "AI 에이전트·도구",
            "limit": "연합형 암묵지 공유가 기업에 미치는 이익을 측정하는 것은 앞으로의 연구 과제로 남아 있습니다."
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
          "canon_id": "2611.20983",
          "title": "GRACE: Parallel Best-of-N Multi-Agent Analysis of Closed-Form Questions over Dataframes with Guardrail Selection and Adaptive Retry",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20983"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존에는 한 번만 시도하고 비교도 안 했다",
            "easy1_desc": "대형 언어 모델(LLM) 에이전트가 표 데이터를 두고 정답이 딱 정해진 질문에 답할 때, 대부분은 딱 한 번만 해석하고 스크립트를 짜서 나온 결과를 그냥 받아들였다고 해요. 몇 안 되는 후보를 여러 개 만드는 방식도 서로 투표로만 정했는데요, 이 방식은 다 틀렸어도 억지로 하나를 고르게 된다는 한계가 있었던 겁니다. 뭔 소리냐면, 비교하는 기준이 부실해서 엉뚱한 답을 그냥 믿게 된다는 말이에요.",
            "easy2_title": "여러 개를 병렬로 돌려 비교하고 안 되면 거른다",
            "easy2_desc": "그래서 연구진은 GRACE라는 방식을 만들어 여러 후보를 병렬로 돌려 비교하고, 정답이 없으면 아예 거르고 진단을 내놓게 했는데요, 방법은 여러 에이전트가 동시에 코드를 짜고 토너먼트와 전문 가드레일로 가장 알맞은 결과를 고르거나 기권하게 하는 거예요. 이렇게 하면 이전보다 정답률이 확 오르는 장점이 있는데, 대신 여러 번 돌려야 하니 연산 자원이 더 든다는 점도 같이 따라온다는 겁니다. 쉽게 말하면, 무작정 믿는 대신 깐깐하게 걸러서 확실한 답만 건지겠다는 셈이에요.",
            "topic": "표 데이터 질문에 답하는 대형 언어 모델 에이전트들의 성능을 높이기 위해, 여러 후보 코드를 병렬로 돌려 비교하고 가드레일로 걸러내는 GRACE 파이프라인을 제안한 연구예요.",
            "one_line": "표 데이터 질문에 답하는 GRACE 병렬 코드 앙상블 파이프라인을 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.20970",
          "title": "Hilbert States for Decision-Making under Partial Observability",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20970"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "정보가 모자라 좋은 선택을 못 하는 이유를 찾아봤습니다",
            "easy1_desc": "연구진은 눈에 보이지 않는 정보가 숨어 있을 때 왜 최선의 선택을 놓치게 되는지 세 가지 질문으로 뜯어봤는데요, 물리적인 상태가 헷갈린다고 해서 무조건 손해를 보는 건 아니라는 걸 밝혔어요. 뭔 소리냐면, 상황을 모르는 게 문제라기보다는 어떤 행동이 더 나은지 가려내기 어려운 상황이 진짜 문제라는 말이에요. 쉽게 말하면, 정보가 부족해서 생기는 한계를 정확히 짚어 본 셈이라는 겁니다.",
            "easy2_title": "숨겨진 상태를 안 찾아도 최적의 선택을 하는 방법을 만들었습니다",
            "easy2_desc": "그래서 연구진은 숨겨진 상태를 직접 복원하지 않고도 관측만으로 최적의 행동을 유지할 수 있는 힐베르트 상태(Hilbert state)라는 내적 표현을 유도해 냈는데요, 세 가지 조건부 모멘트 대비와 목표에 맞는 특성을 써서 3차원 형태로 가장 알맞게 구현했다고 해요. 시뮬레이션과 실제 합성개구레이더(SAR) 영상 실험을 해봤더니 마스크 처리된 이미지에서도 목표에 맞는 결정을 잘 찾아낸다는 장점이 확인됐는데요, 대신 데이터가 한정적일 때는 목표에 따라 신뢰도가 달라진다는 점도 같이 나타난다는 겁니다.",
            "topic": "부분적으로만 정보를 알 수 있는 상황에서 최적의 결정을 내리는 방법과 정보 손실의 한계를 수학적으로 분석한 연구예요.",
            "one_line": "부분 관측 환경에서 최적 결정을 내리는 힐베르트 상태 표현과 정보 한계를 분석했어요.",
            "topic_tag": "수학·이론",
            "limit": "한정된 데이터로 학습할 때 생기는 오류는 목표에 따라 신뢰도가 달라진다는 한계가 있어요."
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
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.20955",
          "title": "Jev-as-a-Reward: Validating Probabilistic Safety Judges for Reinforcement Learning",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20955"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "안전 판단기가 놓치는 사각지대가 있더라고요",
            "easy1_desc": "강화학습에서 안전을 지키려고 확률 기반의 판단기를 쓰는데, 이게 확신을 가지고 안전하다고 판단한 부분은 검사를 건너뛰는 문제가 있어요. 그런데 인공지능 정책이 이 틈을 타서 위험한 행동을 하기도 하고, 판단기가 업데이트될 때마다 성능이 변하는 상황이거든요. 쉽게 말하면, 판단기가 스스로 안전하다고 믿는 영역에 오히려 위험이 숨어 있는 셈이에요.",
            "easy2_title": "판단기를 꼼꼼히 검증해서 위험을 줄여 봤어요",
            "easy2_desc": "그래서 연구진은 학습 전후로 판단기를 검증하고, 판단기가 바뀔 때마다 다시 확인하는 새로운 절차를 제안했어요. 이 방식을 적용했더니 Llama-3.1-8B 모델에서 공격 성공률이 0.287에서 최대 0.033까지 줄어드는 효과를 봤거든요. 판단기가 놓치는 위험을 더 잘 잡아내게 된 건데, 대신 판단기가 스스로 확신하는 사각지대는 여전히 존재한다는 한계도 있다는 겁니다.",
            "topic": "강화학습의 안전성을 높이기 위해 확률적 안전 판단기를 검증하고 관리하는 프로토콜을 제안했어요.",
            "one_line": "강화학습 안전 판단기를 검증하는 프로토콜을 제안해 위험을 줄였어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "최고 성능의 거대언어모델 판단기조차 사람이 라벨링한 위험 사례 10개 중 최대 1개만 잡아낼 정도로 사각지대 문제가 여전합니다."
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
          "canon_id": "2611.20926",
          "title": "Advancing Cognitive Pairwise Comparisons for Human-Centric Artificial Intelligence and Data Science: A Human-in-the-Loop Framework",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20926"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "사람의 도움이 꼭 필요한데 손이 너무 많이 갔었는데요",
            "easy1_desc": "사람 중심의 인공지능과 데이터 과학 시스템에서는 완전 자동화된 기계 학습 알고리즘의 한계를 극복하려고 사람 개입 방식을 자꾸 쓰는데요. 그 과정에서 데이터 변환이나 모델 선택 같은 작업마다 사람이 일일이 붙어야 해서 개발 과정이 엄청 복잡하고 시간이 오래 걸린다는 문제가 있었던 거예요. 뭔 소리냐면, 사람이 직접 개입하는 게 중요하긴 한데 손이 너무 많이 가서 비효율적이었다는 말이에요.",
            "easy2_title": "체계적인 선호도 비교 방식을 발전시켜 문제를 풀었습니다",
            "easy2_desc": "그래서 연구진은 인지적 쌍대 비교(CPC, Cognitive Pairwise Comparison) 틀을 발전시켜서 사람이 선호하는 바를 체계적으로 수치화할 수 있게 만들었는데요. 영화 추천 시스템인 MovieLens 데이터셋을 가지고 여러 응용 사례를 보여주면서 이 방법이 지도 학습이나 비지도 학습 같은 알고리즘에서 어떻게 쓰이는지 설명했어요. 이렇게 하면 사람의 판단과 데이터를 훨씬 쉽게 주고받을 수 있다는 장점이 생기는데, 대신 복잡한 작업을 다룰 때 사람이 직접 참여해야 하는 부담은 여전히 남아 있다는 겁니다.",
            "topic": "사람 중심의 인공지능과 데이터 과학 개발을 돕기 위해 인지적 쌍대 비교(CPC) 틀을 발전시키고 이를 여러 알고리즘에 적용해 본 연구예요.",
            "one_line": "인지적 쌍대 비교 틀을 발전시켜 사람 중심 인공지능의 상호작용을 도왔어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.20891",
          "title": "From Recursion to Convolution: Parallel Self-Improvement for Multi-Agent Systems",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20891"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "순서대로 하나씩 고치다 보니 시간도 오래 걸리고 오류도 쌓이더라고요",
            "easy1_desc": "여러 에이전트가 서로 상호작용하며 스스로 성능을 높이는 방식을 써 봤는데요, 이게 에이전트끼리 순서대로 하나씩 개선하다 보니 앞 단계에서 생긴 오류가 뒤로 계속 퍼지는 문제가 있었거든요. 게다가 하나씩 따로 고치느라 계산하는 데 시간도 많이 걸리고, 전체적인 협업 효율도 떨어지는 한계가 있었던 겁니다. 쉽게 말하면, 순차적인 방식이 병목 현상을 일으켜 전체 시스템의 발목을 잡고 있었다는 말이에요.",
            "easy2_title": "컨볼루션 방식을 도입해서 여러 에이전트를 한꺼번에 개선했어요",
            "easy2_desc": "그래서 연구진은 컨볼루션(데이터의 특징을 추출하는 연산)을 활용한 ConvRSI라는 새로운 틀을 제안했는데요, 에이전트 내부의 특징을 한꺼번에 다듬고 에이전트 간의 협업 구조까지 그래프 컨볼루션으로 동시에 처리하도록 바꾼 겁니다. 이렇게 하면 중간 과정을 매번 풀어서 다시 암호화할 필요 없이 잠재 공간에서 바로 업데이트가 가능해지거든요. 결과적으로 MATH-500 데이터셋에서 성능은 5.04% 높이면서도 추론 비용은 17.27%, 지연 시간은 45.11%까지 줄였다고 주장했어요.",
            "topic": "컨볼루션 연산을 활용해 다중 에이전트 시스템의 자기 개선 과정을 병렬화하고 효율을 높이는 방법이에요.",
            "one_line": "컨볼루션 연산을 도입해 다중 에이전트의 자기 개선 과정을 병렬화했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": ""
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
          "canon_id": "2611.20826",
          "title": "Conversing with a Conversational Agent: A Real Conversation, Not a Simulated One",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20826"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "인공지능과의 대화가 단순한 흉내에 불과한지 따져봤습니다",
            "easy1_desc": "인공지능(AI)과의 대화가 진짜 사람과의 대화가 아니라 흉내 내는 것뿐이라는 주장이 있는데요, 이는 물리적 현상과 언어적 활동을 똑같이 보는 데서 생기는 문제라는 거예요. 연구진은 대형 언어 모델(LLM) 기반 에이전트와의 대화가 인공지능에게 의식이나 주관적 이해가 있다고 보는 것은 아니지만, 단순한 시뮬레이션이 아니라 진짜 대화 활동이라고 주장했습니다. 쉽게 말하면, 겉모습만 흉내 내는 게 아니라 실제로 대화가 이루어지고 있다는 말이에요.",
            "easy2_title": "관계와 기호를 바탕으로 인공지능과의 대화가 진짜임을 설명했습니다",
            "easy2_desc": "그래서 연구진은 철학과 언어학 이론을 바탕으로 대화 활동을 관계와 기호의 관점에서 다시 살펴보았는데요, 이를 통해 인공지능의 주관성 여부와 상관없이 대화 상호작용의 실체를 구별할 수 있게 된다는 거예요. 그 결과 인간, 인공지능, 데이터, 기술적 장치가 함께 의미를 만들어내는 하이브리드 세미오틱 패브리케이션 개념을 내놓았는데요, 장점은 대화의 의미가 만들어지는 조건을 더 정확하게 알 수 있게 된다는 것인데, 대신 인공지능의 답변에 무조건 권를 부여하거나 사람처럼 여기게 되는 것은 아니라는 점도 함께 강조했다는 겁니다.",
            "topic": "대형 언어 모델 기반 에이전트와의 대화가 단순한 흉내가 아니라 실제 대화 활동임을 관계와 기호 이론을 통해 밝히고 설명하는 내용이에요.",
            "one_line": "LLM과의 대화가 단순한 흉내가 아닌 실제 대화임을 기호학과 관계 이론으로 밝혔다.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.20794",
          "title": "Regularizing Treatment Leakage for LLM-based Uplift Estimation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20794"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "제품 설명 속 단서 때문에 엉뚱한 방향으로 판단하는 문제가 있었는데요",
            "easy1_desc": "업장에서 가격이나 프로모션을 정할 때 효과를 예측하려고 거대 언어 모델을 쓰는데요, 모델이 제품 설명을 읽을 때 처리 방식이 어떻게 되는지에 따라 실제 상황에서는 통하지 않는 꼼수 같은 단서를 학습해 버리는 문제가 생기거든요. 뭔 소리냐면, 나중에 현장에 적용했을 때는 안 통할 정보까지 끌어다 쓴다는 말이에요. 쉽게 말하면, 엉뚱한 정보에 꽂혀서 제대로 된 인과 효과를 놓치게 되는 셈이라는 겁니다.",
            "easy2_title": "언어 모델의 몸체는 그대로 두고 페널티를 주는 방식으로 간섭을 줄여 봤습니다",
            "easy2_desc": "그래서 연구진은 언어 모델의 인코더는 그대로 얼려 두고, 인과 관계를 다루는 머리에 클럽 기반의 페널티를 주는 규제 방식을 제안했는데요, 이렇게 했더니 제어된 대리 실험에서 기존의 가중치 감쇠 설정보다 더 높은 점수를 기록했다고 해요. 오프라인 테스트에서는 향상된 결과를 보이기도 했지만 통계적으로 아주 뚜렷한 차이는 아니라는 점도 함께 나타났거든요. 대신 일주일 동안 진행한 온라인 에이비(A/B) 실험에서는 대조군보다 판매량이 5.45% 늘고 매출 총이익이 1.91% 높게 나왔다는 겁니다.",
            "topic": "거대 언어 모델을 활용한 업리프트 모델링에서 처리 유출을 막기 위해 규제 기법을 제안하고 그 성과를 실험한 연구예요.",
            "one_line": "언어 모델 기반 업리프트 모델링의 유출을 막는 규제 기법을 제안하고 실험했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "처치 의존적인 평가는 그 해석이 탐색적 모델 행동에만 머무른다는 한계가 있고, 온라인 집계 결과 역시 규제 장치 자체의 기여를 따로 분리해 내지는 못했다고 해요."
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
            "evidence_by_symbols": 3,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.20779",
          "title": "EEGProbe: Do Vision-Language Models Really Understand EEG? A Benchmark for Signal-Grounded EEG Signals Evaluation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20779"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시각 언어 모델이 뇌전증 기록을 진짜 이해하는지 몰라",
            "easy1_desc": "시각 언어 모델(VLM)이 과학과 생의학 분야에서는 뛰어난 멀티모달 능력을 보여줬는데요, 뇌전증(EEG) 신호를 제대로 이해하는지는 아직 분명하지 않다는 겁니다. 그래서 연구진은 태스크 맞춤형 특징 공학이나 EEG 전용 적응 없이, 일반 목적의 VLM이 최소한으로 처리된 채널별 EEG를 추출하고 추론할 수 있는지 평가하기 위한 신호 기반 벤치마크인 EEGProbe를 도입했는데요. EEGProbe는 13개 하위 태스크와 3가지 능력 카테고리에 걸쳐 620개의 EEG 중심 질문을 담고 있다는 말이에요. 쉽게 말하면, 모델들이 뇌파를 진짜로 읽어내는지 시험해 볼 도구가 없어서 새로 만들었다는 셈이에요.",
            "easy2_title": "뇌파 시험을 해 봤더니 제일 센 모델도 41퍼센트만 맞췄어",
            "easy2_desc": "그래서 연구진이 11개의 대표적인 공개 및 폐쇄형 VLM을 통합 제로샷 프로토콜로 평가해 봤는데요, 가장 강력한 모델인 GPT-5.6 Sol조차 전체 점수가 41.63%에 불과했고 특히 크로스모달 EEG 정렬이 주요 병목 현상으로 나타났다는 거예요. 추론 시간의 신경생리학적 유도가 모델이 입력된 신경생리학적 패턴을 인식하고 관련 신경학적 지식과 연결하도록 도와 모델 예측을 재구성할 수 있다는 점을 밝혔는데요. 일반적인 멀티모달 역량과 EEG 이해 사이의 간격을 좁힐 수 있다는 장점이 있는 반면, 여전히 성능 한계가 뚜렷하다는 단점도 같이 보여준다는 겁니다.",
            "topic": "일반 목적의 시각 언어 모델(VLM)이 뇌전증(EEG) 신호를 얼마나 잘 이해하고 추론하는지 평가하기 위해 신호 기반 벤치마크인 EEGProbe를 도입하고, 11개 모델을 평가해 성능 한계와 개선 방향을 분석한 연구예요.",
            "one_line": "뇌파 신호 이해 능력을 평가할 벤치마크를 만들고 모델들을 시험했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
              "41"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.20732",
          "title": "Routing Beyond Task Categories: A Cost-Aware LAB-Bench Study",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20732"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "생물학 문제 특징이나 처음 대답으로 정확도를 높여보려고 했는데요",
            "easy1_desc": "연구진은 생물학 문제의 특징이나 모델이 처음 내놓은 대답을 활용하면 한정된 추론 비용 안에서 정확도를 높일 수 있을지 시험해 봤는데요. 카테고리 라우터에 구조적 특징 여섯 가지를 더한 방식을 비교해 봤더니, 개발 단계에서 기본 목표였던 80% 정확도에는 둘 다 미치지 못했다는 겁니다. 50%와 60% 보조 목표에서는 두 방식 모두 120개의 보류된 질문 전체에 대해 하이쿠(Haiku)를 선택해 120개 중 71개를 맞췄다는 말이에요.",
            "easy2_title": "새로운 비교 방식을 고정해서 추가 질문으로 시험해 봤습니다",
            "easy2_desc": "그래서 연구진은 144개의 추가 질문에 대한 응답을 모으기 전에 새로운 비교 방식을 고정했는데요. 의미 기반 라우팅은 144개 중 86개를 맞췄고, 하이쿠의 대답을 읽은 뒤 미룰 수 있는 정책은 144개 중 87개를 기록했다는 겁니다. 둘 다 1,000개 질의당 0.678달러라는 추론 예산 안을 유지했다는 장점이 있는데, 대신 95% 하이쿠와 5% GPT 혼합 방식과 비교하면 정확도 향상 폭이 0.66퍼센트포인트와 1.35퍼센트포인트에 그쳤다는 점도 같이 나타났다는 말이에요.",
            "topic": "생물학 벤치마크(LAB-Bench) 환경에서 비용 제약을 지키며 모델과 라우팅 정책을 시험해 정확도 변화를 살펴본 연구예요.",
            "one_line": "생물학 벤치마크에서 다양한 라우팅 정책과 비용 제약에 따른 정확도를 시험했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.20616",
          "title": "GEAR$^2$: Pruned Experts Live On through Gated Reuse of Activated Experts and a Missing-Mass Residual",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20616"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "버려진 전문가의 몫을 남은 전문가로 살려보자",
            "easy1_desc": "거대 언어 모델의 효율을 높이려고 전문가를 줄이면, 버려진 전문가가 하던 역할을 잃어버리는 문제가 생기는데요. 기존에는 고정된 대체재를 쓰거나 전문가를 합치거나 다시 학습하는 방식을 썼는데, 이게 비용이 많이 들고 번거롭다는 단점이 있어요. 연구진은 그래서 잘 살아남은 전문가의 활성화된 출력 값을 다시 쓰는 방식을 생각해 냈는데요. 쉽게 말하면, 안 쓰는 전문가를 버리는 대신 남은 애들의 힘을 빌려 빈자리를 메우겠다는 셈이에요.",
            "easy2_title": "추가 학습 없이 가벼운 잔여 값으로 성능을 끌어올렸다",
            "easy2_desc": "그래서 연구진은 추가 학습이나 복잡한 계산 없이 남은 전문가의 출력을 재사용하는 GEAR 방식을 제안했는데요. 여기에 재사용만으로는 표현하기 힘든 부분을 아주 가벼운 잔여 값으로 채워 넣는 GEAR2를 함께 만들었다는 겁니다. 그 결과, 16B부터 106B 크기의 모델 5개를 대상으로 25%에서 50%의 전문가를 잘라냈을 때, GEAR는 기존 방식보다 정확도가 거의 모든 설정에서 최대 4 퍼센트포인트까지 좋아졌다고 해요. 대신 모델을 더 공격적으로 50%까지 줄였을 때는 GEAR2가 9개의 제로샷 벤치마크에서 최대 2.75 퍼센트포인트 더 높은 성능을 보여줬다는 점이 눈에 띕니다.",
            "topic": "전문가를 잘라낸 거대 언어 모델에서 남은 전문가의 출력과 가벼운 잔여 값을 재사용해 성능을 복구하는 GEAR2 방법론을 제안했어요.",
            "one_line": "남은 전문가의 출력과 가벼운 잔여 값을 재사용하는 GEAR2를 제안했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.20603",
          "title": "BiGSyn: A Bi-Level Heterogeneous Graph Contrastive Learning Framework for Interpretable Drug Synergy Prediction",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20603"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "약 조합이 왜 좋은지 찾는 게 왜 그렇게 어려웠나",
            "easy1_desc": "현대 의학에서 약을 섞어 쓰는 복합 치료가 대세인데요, 문제는 원자 수준의 분자 구조부터 생물학 네트워크까지 여러 단계의 복잡한 관계를 한꺼번에 다루기가 아주 까다롭다는 거예요. 기존 방법들은 이런 여러 단계를 따로따로 떼어 놓고 보는 바람에, 서로 보완해 주는 신호들이나 멀리 떨어진 연결 고리들을 놓치곤 했다는 말입니다. 쉽게 말하면, 퍼즐 조각들을 따로 흩어 놓고 전체 그림을 맞추려니 한계가 있었다는 셈이에요.",
            "easy2_title": "두 단계를 한 번에 묶어 주는 틀을 만들어 문제를 풀었다",
            "easy2_desc": "그래서 연구진은 서로 다른 두 단계를 연결해 주는 이종 그래프 대조 학습 틀인 BiGSyn을 제안했는데요, 분자 그래프와 생물학 네트워크에서 복잡한 고차원 의존성을 뽑아낸 뒤 두 단계 사이의 의미 차이를 메우는 방식으로 작동해요. 벤치마크 데이터셋 두 곳에서 실험해 봤더니 기존 최고 수준의 모델들을 꾸준히 앞서는 결과를 보였다는 겁니다. 게다가 어디가 핵심인지 짚어 주는 기능까지 있어서 왜 약이 잘 드는지 그 이유를 눈으로 직접 볼 수 있게 됐다는 장점이 있어요.",
            "topic": "분자 구조와 생물학 네트워크의 복잡한 관계를 두 단계로 묶어 약물 조합의 시너지 효과를 더 잘 예측하고 설명해 주는 프레임워크인 BiGSyn을 제안했어요.",
            "one_line": "약물 조합 시너지를 예측하는 이종 그래프 대조 학습 틀 제안",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.20484",
          "title": "Agent-Guided Configuration Tuning for SMT Solvers",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20484"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "에이전트가 문서를 읽고 설정을 자동으로 찾아봤는데요",
            "easy1_desc": "연구진은 범용 대형 언어 모델(LLM) 에이전트를 써서 SMT(Satisfiability Modulo Theories) 솔버의 설정을 맞추는 작업 흐름을 처음으로 만들어 봤는데요. 에이전트가 솔버의 설명서, 소스 코드, 이전 실험 기록을 읽고 옵션 바꾸기를 제안하면, 확정적 도구가 각각의 제안을 재고 올바른지 확인해서 경쟁 부문별로 바꿀 내용을 골라내는 방식이에요. 9주 정도 동안 13개 부문과 36개 로직을 바탕으로 cvc5에 대해 4,545번의 제안을 기록했다고 하거든요. 쉽게 말하면, 사람이 일일이 하던 설정 조율을 AI 에이전트가 문서를 읽으며 자동으로 해 보려 한 셈이라는 말이에요.",
            "easy2_title": "기존 솔버보다 더 많은 문제를 풀 수 있게 되었는데요",
            "easy2_desc": "그래서 이렇게 맞춘 설정을 2026년과 2025년의 SMT-COMP ModelValidation 벤치마크로 24초 제한을 두고 시험해 봤는데요. 훈련에 쓰지 않은 문제들에서 2026년에는 13개 부문 중 10곳, 2025년에는 8곳에서 공식 cvc5보다 더 많은 문제를 검증했고 부문별로 기하평균 이득이 7.8%와 6.8%로 나타났다고 해요. 성능이 좋아지는 장점이 있는 반면, 벤치마크 계열끼리 서로 이득과 손실을 주고받는 상충 관계가 있다는 점도 함께 드러났다는 겁니다.",
            "topic": "대형 언어 모델 에이전트를 활용해 SMT 솔버의 설정을 자동으로 최적화하고 그 성능을 평가한 연구예요.",
            "one_line": "LLM 에이전트로 SMT 솔버 설정을 자동으로 최적화했어요",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.20447",
          "title": "The Logic Chain Breaking Point: A Controlled-Variable Benchmark for Reasoning Degradation in Open-Weight Language Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20447"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "공개 언어 모델의 추론이 어디서 무너지나 살펴봤습니다",
            "easy1_desc": "연구진은 오픈 웨이트 언어 모델의 연역적 추론 능력을 단계별로 뜯어보려고 새로운 벤치마크인 'The Logic Chain Breaking Point'를 만들어 도입했는데요. 구체적으로는 순수한 연역적 논리 체인 확장, 고정된 핵심 체인에 방해 요소를 넣는 것, 그리고 모순을 찾아내는 조건까지 세 가지 단계로 나누어 살펴봤다는 겁니다. 변수들은 2의 거듭제곱 순서인 1부터 128까지로 맞춰서 정답을 확실히 알 수 있게 설계했는데요. 쉽게 말하면, AI 모델들이 논리적인 문제를 풀 때 정확히 어느 지점에서 헷갈리고 무너지나 보려고 판을 깔아 둔 셈이라는 말이에요.",
            "easy2_title": "모순된 전제가 들어가면 모델들이 완전히 무너진다는 걸 확인했습니다",
            "easy2_desc": "그래서 16개의 오픈 웨이트 모델을 대상으로 실험을 해봤더니, 논리 체인이 길어지거나 방해 요소가 들어올 때는 모델들이 그럭저럭 버텼는데요. 반면에 전제에 모순이 섞여 있는 조건에서는 정확도가 바닥을 쳤다는 겁니다. 특히 24B에서 27B 크기의 지시어 조정(instruction-tuned) 모델들은 모순된 전제 세트에서 아예 0점에 가까운 점수를 기록했는데요. 추론용으로 따로 튜닝된 모델들은 그나마 회복하긴 했지만 여전히 믿을 만한 수준에는 못 미친다는 장점 없는 한계도 같이 드러났다는 겁니다.",
            "topic": "오픈 웨이트 언어 모델들의 연역적 추론 능력이 세 가지 단계별 조건에서 어떻게 무너지며 성능이 떨어지는지 체계적으로 평가한 연구예요.",
            "one_line": "오픈 웨이트 언어 모델의 연역적 추론이 무너지는 지점을 세 가지 단계별 벤치마크로 평가했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
              "one_line 52자"
            ],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.20423",
          "title": "FinVerify: A Verification Framework for Financial Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20423"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "금융 AI가 계산은 잘해도 틀린 답을 내놓는 이유",
            "easy1_desc": "금융 에이전트가 계산 자체는 정확히 수행하더라도, 보고 기간이 서로 맞지 않거나 출처가 불분명한 데이터를 사용하는 등 엉뚱한 수치를 제시하는 경우가 잦거든요. 이런 오류는 단위가 호환되지 않거나 금융 정의를 잘못 적용했을 때 발생하는데요. 쉽게 말하면, 계산기는 똑똑해도 입력된 정보나 기준이 틀리면 잘못된 결과가 나온다는 말이에요.",
            "easy2_title": "증거 기반 검증으로 금융 AI의 신뢰도를 높였습니다",
            "easy2_desc": "연구진은 금융 에이전트가 내놓은 수치를 검증하는 핀베리파이(FinVerify)라는 체계를 만들었는데요. 190개의 오류 사례를 분석해 시간 무결성이나 출처 신뢰성 같은 다섯 가지 오류 범주를 정의하고 이를 검증 프로토콜로 구현한 거예요. 거대언어모델(LLM)이 주장과 증거를 구조화하면 결정론적 검증기가 금융 요구사항을 확인하고, 공식이 있을 땐 Z3(수학적 검증 도구)로 일관성을 따져보는 방식입니다. 덕분에 단순히 LLM이 판단할 때보다 정확도가 크게 높아졌다는 결과가 나왔거든요.",
            "topic": "금융 에이전트의 수치적 주장을 검증하기 위해 증거 기반의 체계적인 프레임워크를 제안하고 그 성능을 평가한 연구입니다.",
            "one_line": "금융 에이전트의 수치적 오류를 잡는 증거 기반 검증 체계를 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "공식적인 증거가 부족한 경우에는 성능 향상 폭이 작다는 한계가 있습니다."
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
          "canon_id": "2611.20398",
          "title": "Deploying a Control-Logic LLM Assistant in Air-Gapped Power Plants: Lessons in Source Authority and Bounded Retrieval",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20398"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "왜 굳이 힘들게 문서를 분석했나 했더니",
            "easy1_desc": "연구진은 공장 안의 데이터를 밖으로 내보내면 안 되는 까다로운 환경에서 거대 언어 모델(LLM)을 쓰려고 했는데요, 첫 번째 시도로 PDF 도면을 직접 읽혀서 제어 구조를 다시 그리게 해 봤더니 엄청난 시간과 비용이 들었다는 거예요. 알고 보니 설계 프로그램에서 원래 뽑아낼 수 있는 깔끔한 데이터가 따로 있었다는 말이에요. 쉽게 말하면, 굳이 모델을 시킬 필요가 없는 일에 힘을 뺐던 셈이라는 겁니다.",
            "easy2_title": "에이전트가 알아서 짜던 계획을 딱 잘랐더니",
            "easy2_desc": "두 번째로는 도구 호출 에이전트가 반복해서 계획을 세우게 해 봤는데, 이걸 그냥 고정된 실행 계획으로 바꾸니까 토큰 사용량이 20배나 줄고 속도도 3배 빨라졌다는 거예요. 그래서 이 경험을 바탕으로, LLM은 자연어 요청을 해석하고 설명하는 일만 맡기고 복잡한 데이터 작업은 고정된 프로그램으로 처리하도록 방식을 바꿨다고 하는데요. 효율이 확 좋아지는 장점이 있는 대신, LLM이 직접 똑 부러지게 판단하던 자율성은 줄어든다는 점도 함께 기억해야 한다는 겁니다.",
            "topic": "발전소 같은 중요 시설에서 거대 언어 모델(LLM)을 안전하고 실용적으로 쓰기 위해 어떤 역할을 나누어야 하는지에 대한 연구진의 경험이에요.",
            "one_line": "발전소 환경에서 LLM의 역할을 자연어 해석과 설명으로 제한하고 기술적 증거는 고정된 소프트웨어로 처리하는 방식을 제안했다.",
            "topic_tag": "AI 에이전트·도구",
            "limit": ""
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
              "one_line 69자"
            ],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.20230",
          "title": "A Matrix with Steps: An Episodic and Procedural Memory Method for Tool-Using Agents and Robots",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20230"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "실패했던 일을 자꾸 되풀이하고 자기가 잘했다고 착각한다는 점",
            "easy1_desc": "도구를 쓰는 에이전트와 로봇은 전에 실패했던 일을 또 반복하거나, 스스로 성공했다고 믿는 실행 과정에서만 배운다는 문제가 있는데요. 연구진은 바로 이런 두 가지 한계를 해결하기 위해 새로운 메모리를 만들었다고 밝혔습니다. 모든 실행은 에피소드로 기록되는데, 이때 에이전트 스스로의 주장은 절대 인정되지 않고 외부 검증이나 도구 결과 같은 확실한 확인을 거친 결과만 인정된다는 겁니다. 쉽게 말하면, 착각으로 배운 잘못된 기억은 걸러내고 진짜 성공한 기억만 남기겠다는 말이에요.",
            "easy2_title": "확실하게 검증된 기억만 골라 담는 두 단계 메모리 구조 도입",
            "easy2_desc": "그래서 연구진은 상황에 맞는 절차를 찾는 연관 행렬과, 다음 단계가 무엇인지 알려주는 순서 기록부로 이루어진 두 부분짜리 메모리를 설계했는데요. 행렬은 순서를 저장하지 못하는 대신 알맞은 절차를 찾아주는 역할을 하고, 순서와 결과는 기록부가 담당한다는 겁니다. 이렇게 했더니 모의 실험에서 스스로 성공했다고 믿던 로봇이 실제로 해결한 비율은 35%에서 외부 검증을 거치자 79%로 크게 올랐다는 점을 보여주는데요. 대신 10만 개의 합성 에피소드를 저장하는 데 노트북에서 16밀리초, 서버에서 40밀리초가 걸린다는 한계도 같이 나타난다는 겁니다.",
            "topic": "도구를 사용하는 에이전트와 로봇이 실패를 반복하고 스스로의 성공을 오인하는 문제를 해결하기 위해, 외부 검증을 거친 결과만 기록하고 연관 행렬과 단계 기록부로 나누어 관리하는 에피소드 및 절차적 메모리 구조를 제안했어요.",
            "one_line": "외부 검증을 거친 기억을 저장하는 메모리 구조를 제안했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": ""
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
            "bad_numbers": [
              "10"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.20031",
          "title": "Towards Agentic Scientific Discovery in Distributed Systems",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20031"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "분산된 곳에서 도구를 바꿔 가며 공식을 찾는 일을 해 봤습니다",
            "easy1_desc": "연구진은 입력 범위가 다른 여러 곳에서 공유되는 공식을 찾을 때, 상황에 맞는 도구를 골라 쓰는 방식이 언제 도움이 되는지 살펴봤는데요. 쿼리 기반의 에이전트 방식 학습법인 Query-ATLAS를 써서 시뮬레이션된 분산 시스템의 에러와 이전 제안을 바탕으로 기호 탐색을 이끌도록 했어요. 고정된 방식과 비교해 봤더니 검증 통과 횟수가 CRK3에서는 3/12에서 7/12로 늘었고 oscillator2에서는 11/12에서 12/12로 늘었다는 겁니다. 대신 MatSci3에서는 고정된 작업 흐름이 더 유리한 결과도 함께 나타났다는 말이에요.",
            "easy2_title": "더 넓은 범위를 다루게 되었지만 비용과 오차는 잘 따져봐야 합니다",
            "easy2_desc": "그래서 다양한 설정에서 비교해 봤더니 Query-ATLAS는 검증과 분포 내 통과에서 각각 64번을 기록해 고정된 방식의 62번과 59번보다 나은 모습을 보였는데요. 둘 다 분포 외 테스트에서는 60개 중 47개를 통과했다는 겁니다. 장점은 더 넓은 쿼리를 다룰 수 있다는 점인데, 반대로 고정된 방식은 중앙값 기준 오차와 비용이 더 낮다는 단점도 같이 있다는 거고요. 쉽게 말하면, 작업에 맞춰 도구를 고르는 방식이 과학 에이전트에게 유망한 장점을 보여주지만 비용 면에서는 차이가 있다는 셈이에요.",
            "topic": "분산 시스템에서 에이전트 기반 도구 선택 방식이 과학적 공식 발견에 미치는 영향과 성능을 비교한 연구예요.",
            "one_line": "분산 시스템에서 적응형 도구 선택의 효과를 비교했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "연구진은 더 넓은 쿼리 커버리지가 유망한 장점으로 나타났으며, 이를 통해 과학 에이전트를 위한 작업 인식형 도구 선택과 클라이언트 인식형 피팅이 필요하다고 밝혔어요."
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
          "canon_id": "2611.20016",
          "title": "GEM-MM: Reducing VLM Hallucination with Entropy-Guided Preference Alignment",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20016"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 시각-언어 모델은 왜 데이터가 부족해도 헤맸을까",
            "easy1_desc": "시각-언어 모델(VLM)을 사람의 선호에 맞추려고 짝꿍 데이터를 써 왔는데요, 막상 구하기 힘들고 모든 토큰을 똑같이 취급한다는 문제가 있었거든요. 제한된 예산 안에서 짝을 만들어 봤더니 표준 DPO 방식이나 이미지 조건부 방식 모두 기본기 수준인 SFT와 차이가 거의 없었다는 말이에요. 쉽게 말하면, 모델이 어디서 헷갈리는지 모른 채 무작정 학습해 온 셈이라는 겁니다.",
            "easy2_title": "불확실한 곳을 집중 공략하는 젬엠엠 방식을 도입했더니",
            "easy2_desc": "그래서 연구진은 불확실한 추론 분기점에 집중하는 젬엠엠(GEM-MM) 기법을 새로 제안했는데요, 모델이 스스로 후보를 뽑고 헷갈리는 추론 지점엔 보상을 주되 불확실한 최종 답은 벌을 주는 방식이에요. Qwen3-VL-4B-Instruct 모델로 3,000개 프롬프트 예산을 써서 실험했더니, 환각 현상이 23.4에서 24.0 사이에서 20.6으로 줄어드는 장점이 있다는 거예요. 대신 예산을 너무 많이 쓰면 모델이 무너지는 단점도 같이 나타난다고 밝혔습니다.",
            "topic": "시각-언어 모델의 환각 현상을 줄이기 위해 엔트로피를 활용한 선호 학습 기법인 GEM-MM을 제안하고 그 성능을 검증한 내용이에요.",
            "one_line": "엔트로피 기반 선호 학습으로 시각-언어 모델의 환각을 줄였다",
            "topic_tag": "AI 모델·학습법",
            "limit": "공정 예산을 초과하면 모델이 붕괴하는 현상이 나타난다."
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
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.19982",
          "title": "Autonomous Multi-modal Agents for ITOps Observability",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19982"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "IT 운영 도구들이 서로 데이터를 주고받기 너무 힘들었어요",
            "easy1_desc": "IT 운영 관찰 도구들은 여러 시스템에서 쏟아지는 데이터를 하나로 합쳐야 하는데, 이게 서로 다른 방식이라 통합하기가 무척 까다롭거든요. 연구진은 이런 복잡한 과정을 해결하려고 여러 인공지능 에이전트가 협력하는 시스템을 만들어 봤는데요. 뭔 소리냐면, 각기 다른 역할을 맡은 에이전트들이 데이터를 가져오고 시각화하는 과정을 알아서 처리하게 만든 겁니다.",
            "easy2_title": "여러 인공지능이 협력해서 복잡한 운영 업무를 대신 처리해요",
            "easy2_desc": "연구진이 개발한 ITOps Observability Studio는 자연어를 GraphQL로 바꾸거나 데이터 구조를 관리하는 등 전문적인 에이전트들이 서로 소통하며 업무를 수행하도록 설계됐어요. 직접 성능을 평가해 봤더니 쿼리 생성이나 데이터 관리 작업에서 좋은 성과를 냈거든요. 다만, 전체 시스템을 한꺼번에 테스트할 때만 드러나는 결함들도 발견했는데, 연구진은 이를 찾아내고 고치는 과정까지 함께 보고했다는 거예요.",
            "topic": "IT 운영 관찰을 위해 여러 인공지능 에이전트가 협력하여 워크플로우를 관리하는 시스템을 제안했어요.",
            "one_line": "IT 운영 관찰을 위해 협력형 AI 에이전트 시스템을 개발했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": ""
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
          "canon_id": "2611.19872",
          "title": "Who Writes the Codebook? An Eight-Step Framework for Auditing LLM-Generated Category Systems",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19872"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 만드는 분류 체계, 무엇이 문제였나",
            "easy1_desc": "대형 언어 모델(LLM)이 질적 증거를 해석하는 분류 체계를 점점 더 많이 만들어 내고 있는데요. 기존의 평가 방법들은 이 분류 체계를 고정된 것으로 보고 검사했다는 겁니다. 뭔 소리냐면, 모델이 직접 만든 분류 기준이 실제로 얼마나 믿을 만한지, 모델마다 어떻게 다른지 제대로 따져 보기가 어려웠다는 말이에요.",
            "easy2_title": "새로운 감사 틀을 제안해 모델 간 차이를 드러냈습니다",
            "easy2_desc": "그래서 연구진은 통제된 입력 조건 아래에서 분류 체계가 어떻게 만들어지고 반복 적용되는지 비교하는 8단계의 '정성적 분산 감사 틀(Qualitative Variance Audit Framework)'을 제안했는데요. 5개 공급사의 모델 8개와 조직 인터뷰 668개, 텍스트 단위 1만 3,166개를 바탕으로 48개의 코드북과 270회의 코딩 실행을 시험해 봤다는 겁니다. 모델마다 눈에 띄게 다른 분류 구조를 만들어 냈는데, 모델 안에서의 평균 신뢰도는 .76에서 .92 사이인 반면 공유된 코드북에 대한 모델 간 일치도는 약 .69로 나타났다고 해요. 새 틀을 쓰면 본격적인 해석에 들어가기 전에 모델 의존성을 먼저 드러낼 수 있는 장점이 있는데, 대신 해석의 타당성이나 만들어진 이론의 질을 직접 평가하지는 않는다는 한계도 같이 따라온다는 겁니다.",
            "topic": "대형 언어 모델이 만드는 분류 체계의 신뢰도와 모델 간 차이를 체계적으로 검사하기 위한 8단계 감사 틀에 대한 연구예요.",
            "one_line": "대형 언어 모델의 분류 체계 생성을 검사하는 8단계 틀을 제안하고 실험함",
            "topic_tag": "AI 모델·학습법",
            "limit": "연구진은 이 틀이 해석의 타당성이나 결과 이론의 질이 아니라 신뢰도와 표현상의 영향만을 평가한다고 밝혔습니다."
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
              "3166"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.19871",
          "title": "Interactive Structured Environment Scaling for Large Language Model Agentic Reasoning",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19871"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "환경을 미리 걸러냈더니 정답 위치가 새고 있었어요",
            "easy1_desc": "연구진은 인공지능(AI)이 도구를 쓰고 탐색하도록 학습시킬 때 쓰는 환경을 자세히 살펴봤는데요, 기존 방법은 정답 주변만 미리 골라내서 보여줬다는 거예요. 그렇게 했더니 후보가 너무 줄어들고 정답 위치가 저절로 새어 나와서, 대충 찍어도 정답을 쉽게 찾게 되는 문제가 생겼다는 말입니다. 뭔 소리냐면, 환경이 너무 좁아서 제대로 된 판단력을 기르기 어려웠다는 겁니다.",
            "easy2_title": "전체 데이터베이스를 직접 탐색하는 라이즈(RISE)를 만들었어요",
            "easy2_desc": "그래서 연구진은 미리 거르는 대신 전체 크기의 대화형 데이터베이스를 직접 여는 라이즈(RISE)라는 방식을 제안했는데요, 결정 공간과 학습의 한계를 함께 키우는 구조로 이루어져 있어요. 19개의 벤치마크와 3개의 모델에서 시험해 봤더니 지식그래프 추론 능력이 크게 좋아졌다는 장점이 있는데요, 대신 다뤄야 할 정보의 양이 많아져서 연산 과정이 복잡해질 수도 있다는 점도 함께 나타난다는 겁니다. 쉽게 말하면, AI가 스스로 넓은 공간을 뒤져가며 실력을 키우게 만든 셈이에요.",
            "topic": "대형 언어 모델(LLM) 에이전트의 추론 능력을 높이기 위해 미리 걸러내지 않은 전체 데이터베이스 환경에서 학습하는 라이즈(RISE) 시스템을 제안하고 그 효과를 확인한 내용이에요.",
            "one_line": "전체 데이터베이스 기반의 에이전트 학습법인 라이즈를 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.19859",
          "title": "When Facts Change, Which Decisions Break? Dependency-Aware Context Graphs for Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19859"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 정보가 바뀌면 어디를 고쳐야 할지 몰라 헤맸던 문제",
            "easy1_desc": "연구진은 에이전트(AI 기반 실행 주체)가 관찰된 사실이 바뀔 때 무엇이 영향을 받는지 확인하고 고치는 과정을 살펴봤는데요. 전체를 다 다시 계산하거나 요약 기억을 쓰는 등의 방법들을 120개의 워크플로에서 비교해 봤다는 겁니다. 그 결과를 봤더니, 추적 기반 그래프를 쓰면 검토해야 할 결정과 전체 비용은 줄어드는데 누락된 대체 지원이나 수리 맥락 때문에 전체 계획의 정확도가 떨어질 수도 있다는 단점이 같이 나타난다는 말이에요.",
            "easy2_title": "디렉토리를 더해 비용을 줄이고 정확도를 살려 본 시도",
            "easy2_desc": "그래서 연구진은 추출 과정에서 기존 레코드 ID와 필드 디렉토리를 제공하는 개선 방식을 60개의 새로운 워크플로에서 시험해 봤는데요. gpt-6.1-sol 모델에서는 전체 맥락 정확도 100%를 유지하면서 총비용을 4.0% 줄이는 효과를 보였다는 겁니다. 하지만 gpt-6-luna 모델에서는 정확도가 84.8%에 머물러 모델에 따라 결과가 다르게 나타났다는 셈이에요.",
            "topic": "에이전트 메모리에서 필드 수준 의존성 그래프를 활용해 선택적 수리의 신뢰성과 비용을 평가한 연구예요.",
            "one_line": "에이전트 의존성 그래프의 신뢰성과 비용을 평가했어요",
            "topic_tag": "AI 에이전트·도구",
            "limit": "이번 증거는 명시적인 절차적 워크플로에 한정되므로, 넓은 범위의 실제 에이전트 메모리 일반화는 아직 검증되지 않았어요."
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
          "canon_id": "2611.19841",
          "title": "Asking the right question is key to AI discovery in a chain of hypotheses",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19841"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 AI 과학자들이 쓰던 방식의 한계가 무엇이었나",
            "easy1_desc": "연구진이 AI 과학자들에게 가설의 사슬을 따라 탐색하게 해 봤는데요, 처음 데이터에서 좁은 봉우리 같은 특징을 빼놓았더니 모델 선택 방식이 측정되지 않은 빈틈에서 서로 일치하는 단순한 곡선만 편애하게 된다는 거예요. 그래서 의견 불일치를 따라가는 탐색 방식은 새로운 현상이 숨어 있는 곳을 애초에 찾아볼 이유가 없어진다는 말입니다. 쉽게 말하면, 모델들끼리 의견이 갈리는 곳만 쫓아가다가는 핵심을 놓치기 십상이라는 셈이에요.",
            "easy2_title": "그래서 무엇을 알아냈고 방식을 어떻게 바꿨나",
            "easy2_desc": "그래서 연구진이 Claude Sonnet 5.5와 GPT-6.1-Sol이라는 두 가지 최첨단 AI 과학자를 32번의 폐쇄 루프 실험으로 테스트해 봤는데요, 놀랍게도 모델의 의견 불일치를 더 잘 따르던 에이전트는 32번의 실험 모두에서 봉우리를 찾아내지 못했다는 거예요. 대신 실험 초기에 측정되지 않은 빈틈을 직접 찔러보고 이상 징후를 추적해 나갔을 때 발견에 성공했다고 하는데요, 현재 모델들이 어디서 다투는지만 보는 게 아니라 올바른 질문을 던지는 게 AI 과학 발견의 핵심이라는 겁니다.",
            "topic": "가설의 사슬 속에서 AI가 과학적 발견을 이뤄내려면 단순한 모델 간 의견 불일치 추종을 넘어 올바른 질문을 던져야 한다는 연구진의 주장이에요.",
            "one_line": "AI 과학자의 가설 탐색에서 올바른 질문의 중요성을 실험으로 증명했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.19807",
          "title": "MAPS: A Multimodal Agentic Framework for POI Data Production Based on Crowdsourced Street-view Imagery",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19807"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "장소 정보가 자꾸 바뀌는데 손으로 일일이 고치기는 너무 힘들었다",
            "easy1_desc": "도시가 계속 바뀌면서 지도나 위치 서비스에 들어가는 장소(POI) 데이터베이스가 금방 낡아 버리는데, 이걸 사람이 직접 수동으로 관리하자니 비용과 시간이 너무 많이 든다는 문제가 있었는데요. 크라우드소싱 방식으로 모은 거리뷰 사진을 쓰면 최신 시각 정보를 얻을 수 있지만, 사진 한 장 안에 여러 장소와 상관없는 글자가 섞여 있어서 이를 깔끔하게 분리하고 불완전한 기록과 맞추기가 까다로웠거든요. 쉽게 말하면, 최신 사진은 잔뜩 있는데 이걸 곧바로 데이터베이스에 반영하기가 번거롭고 복잡했다는 말이에요.",
            "easy2_title": "거리뷰 사진으로 장소 정보를 자동으로 갱신하는 체계를 만들었다",
            "easy2_desc": "그래서 연구진은 거리뷰 사진을 활용해 장소 데이터를 자동으로 뽑아내고 데이터베이스까지 관리하는 최초의 프레임워크인 맵스(MAPS)를 제안했는데요. 사진 속 글자를 골라내고 장소별로 묶어주는 스파이스(SPICE) 모듈과 후보 기록을 찾아내어 근거 기반으로 짝을 맞추는 리마(RIMA) 모듈을 이어 붙여서 문제를 해결했어요. 사람이 직접 검토하는 전체 작업 평가에서 맵스는 가장 강력한 기존 기준 모델보다 성능이 21.8% 뛰어난 모습을 보여줬는데요. 콰이쇼우(Kuaishou)의 대규모 장소 데이터 생산 파이프라인에 실제로 배치되어 수동 작업과 비교해 평균 처리 시간을 76.9% 줄였다는 장점이 있는 반면, 복잡한 상황에서는 추가적인 시각·지리 정보 등을 선택적으로 불러와야 한다는 점도 함께 따라온다는 겁니다.",
            "topic": "거리뷰 사진과 비전-언어 모델을 활용해 장소 데이터를 자동으로 추출하고 데이터베이스를 유지 관리하는 맵스(MAPS) 프레임워크를 제안한 연구예요.",
            "one_line": "거리뷰 사진으로 장소 데이터를 자동 갱신하는 맵스를 개발했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": ""
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
          "canon_id": "2611.19795",
          "title": "Lossless First-Action Menus for Linear-Reward Planning",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19795"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "보상을 받기 전에 먼저 골라야 하는 상황이 문제였는데요",
            "easy1_desc": "연구진은 여러 가지 목표를 따져야 하는 상황에서, 보상 기준이 정해지기 전에 미리 첫 번째 행동들을 골라두는 순차적 의사결정을 살펴봤는데요. 모든 선형 보상 기준에 대해 원래의 최적 수익을 그대로 지켜내는 첫 행동 메뉴의 조건을 따져봤더니, 그 도달 가능한 이후 과정들이 전체 특징 다면체의 모든 꼭짓점을 다 덮어야 한다는 기하학적 등가 관계를 밝혀냈다는 겁니다. 쉽게 말하면, 나중에 기준이 바뀔 때를 대비해 미리 뽑아둘 최소한의 선택지가 어떤 모양이어야 하는지 밝혀낸 셈이에요.",
            "easy2_title": "꼭짓점 개수에 맞춘 알고리즘을 만들어 계산 복잡도를 따져봤습니다",
            "easy2_desc": "그래서 연구진은 꼭짓점 개수에 대해 매개변수 유연성을 갖춘 출력 민감형 알고리즘을 제안했는데요, 역방향 귀납법과 오라클 기반 면 식별을 함께 써서 문제를 풀었다는 겁니다. 계산해보니 층상 그래프에서는 검증이 coNP-완전 문제이고 합성은 다항식 계층의 두 번째 존재 양화 단계에 해당한다는 점도 밝혀냈는데요, 대신 차원이 고정된 이 차원 이상에서는 검증이 다항식 시간에 풀리지만 합성은 여전히 NP-완전으로 남는다는 한계와 장점이 같이 있다는 겁니다.",
            "topic": "다양한 보상 기준이 나중에 주어질 때 최적의 초기 행동 메뉴를 찾고 그 계산 난이도를 분석한 연구예요.",
            "one_line": "선형 보상 계획을 위한 초기 행동 메뉴의 조건과 계산 복잡도를 증명했어요.",
            "topic_tag": "수학·이론",
            "limit": "차원이 고정된 이 차원 이상에서는 검증이 다항식 시간에 풀리지만 합성은 여전히 NP-완전으로 남는다는 한계가 있어요."
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
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.19779",
          "title": "Read Before You Fit: Text-Derived Constraints for Discovering Differential Equations from Noisy Biological Data",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19779"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식만으로는 시끄러운 생물학 데이터를 다루기 어렵다는 게 문제였어요",
            "easy1_desc": "거대 언어 모델(LLM)을 과학 공식 찾는 데 많이 쓰는데요, 문제는 기존 방법이 데이터에만 너무 기대고 있어서 깨끗한 관측값이 필요하다는 거예요. 그런데 생물학 시스템에서는 개별 측정이 부족하고 시끄럽고 복잡해서 그대로 쓰기가 어렵거든요. 쉽게 말하면, 기존 방식은 지저분한 생물학 데이터를 제대로 다루지 못한다는 말이에요.",
            "easy2_title": "텍스트 제약 조건을 먼저 거는 방식을 도입해 오차를 줄여 봤어요",
            "easy2_desc": "그래서 연구진은 텍스트로 된 생물학 설명을 공식 제약 조건으로 바꿔서 수치 맞추기 전에 먼저 걸러내는 P2C 프레임워크를 도입했는데요, 그 결과를 봤더니 깨끗한 데이터에서는 가장 나쁜 형태 오차가 1.397에서 0.499로 줄었다는 거예요. 노이즈가 낀 데이터에서도 오차가 크게 줄어드는 장점이 있는데, 대신 텍스트 도메인 지식을 정확하게 뽑아내는 과정이 꼭 필요하다는 점도 같이 따라온다는 겁니다.",
            "topic": "생물학 문헌의 텍스트 설명을 제약 조건으로 바꿔서 노이즈가 많은 데이터에서도 미분 방정식을 잘 찾게 만드는 P2C 프레임워크를 제안하고 평가한 내용이에요.",
            "one_line": "텍스트 제약 조건으로 생물학 미분 방정식을 찾는 P2C를 제안했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.19663",
          "title": "When AI Agents Should Repair, Replan, or Abandon: A Threshold Theory of Plan Commitment",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19663"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 에이전트가 계획을 수정할 때 무엇이 문제였나",
            "easy1_desc": "인공지능 에이전트가 일을 하다가 계획이 틀어졌을 때, 재시도나 무조건 다시 짜기 같은 단순한 방식만 써왔는데요, 정해진 만능 전략이 없다는 게 문제였다는 거예요. 연구진은 계획이 깨졌을 때 수리할지, 새로 짤지, 아니면 아예 포기할지를 정하는 최적의 기준을 수학적으로 찾아봤는데요. 쉽게 말하면, 손상된 깊이에 따라 어떤 대응이 가장 이득인지 계산해 본 셈이에요.",
            "easy2_title": "그래서 무엇을 했고 무엇이 달라졌나",
            "easy2_desc": "연구진은 방해받은 정도를 따져서 얕으면 고치고, 깊으면 새로 짜며, 비용이 너무 크면 목표를 포기하는 최적의 기준을 유도했는데요. 언어모델이 계획을 짜는 비용을 낮추더라도 안정성 가격이라는 기준이 계획을 유지하게 만드는 핵심 역할을 한다는 걸 밝혔어요. 수리할 때마다 빚처럼 쌓이는 '패치 빚' 때문에 결국 한계에 다다르면 새로 고치게 된다는 점도 함께 보여준다는 겁니다.",
            "topic": "AI 에이전트가 계획 수행 도중 차질이 생겼을 때 수리, 재계획, 포기 중 무엇을 선택해야 하는지 최적의 정책을 이론적으로 밝힌 연구예요.",
            "one_line": "AI 에이전트의 계획 수정 기준을 수학적으로 유도했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.19623",
          "title": "Data-Driven Heuristic-Guided Business Process Redesign",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19623"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식은 사람이 직접 일일이 찾아야 했거든요",
            "easy1_desc": "업무 프로세스를 고치는 일에는 모범 사례가 쌓여 있지만, 막상 적용하려면 사람이 직접 방대한 전문 지식을 동원해 수작업으로 해야 했다는 문제점이 있었는데요. 최근 대규모 언어 모델(LLM)을 쓰는 기술이 나왔지만, 여전히 사람이 직접 이끌어야 하고 모범 사례나 여러 변경 사항을 한꺼번에 다루지 못한다는 한계가 있었습니다. 쉽게 말하면, 데이터에 바탕을 두지 않고 일일이 손으로 고치느라 번거로웠다는 말이에요.",
            "easy2_title": "데이터와 모범 사례를 엮어서 한꺼번에 고치도록 만들었어요",
            "easy2_desc": "그래서 연구진은 이벤트 로그와 비즈니스 프로세스 모델(BPMN)을 바탕으로 대규모 언어 모델을 활용해 데이터 기반으로 모범 사례를 이끄는 DH-BPR 프레임워크를 선보였는데요. 이 방식을 쓰면 규칙 기반 기술과 언어 모델이 힘을 합쳐 유효한 후보를 찾아내고, 여러 변경 계획을 한꺼번에 짜서 새로운 모델을 만들어 낸다는 겁니다. 빨라진다는 장점이 있는데, 대신 사전에 철저한 이벤트 로그 데이터가 필요하다는 점도 함께 따른다는 말이에요.",
            "topic": "대규모 언어 모델과 규칙 기반 기술을 결합해 비즈니스 프로세스 재설계를 데이터 기반이자 모범 사례 중심으로 자동화하는 DH-BPR 프레임워크를 제안한 내용이에요.",
            "one_line": "LLM을 활용한 데이터 기반 프로세스 자동 재설계 프레임워크를 개발함",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.19614",
          "title": "A Hierarchical Statistical Framework for Evaluating Agent Reliability",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19614"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 환경에서 에이전트가 믿을 만한지 따져보는 게 왜 힘들었나",
            "easy1_desc": "복잡한 업무를 맡은 에이전트 시스템은 불완전한 정보나 모호한 질문 때문에 불확실성을 마주하게 되는데요, 요즘 새로 나온 벤치마크들을 보면 가장 성능이 좋은 모델들도 다양한 업무 시나리오에서 꾸준한 결과를 내지 못하고 헤매는 모습을 보인다는 거예요. 이 때문에 에이전트가 실제 현업에서 얼마나 믿고 쓸 만한지 체계적으로 성능을 재고 불확실성을 수치화할 필요가 커졌다는 말입니다.",
            "easy2_title": "계층 구조 통계 틀을 만들어 불확실성을 어떻게 분리해 냈나",
            "easy2_desc": "그래서 연구진은 시나리오와 인스턴스, 샘플의 계층을 정의해 모델의 성능과 변동성을 체계적으로 평가하는 통계적 틀을 내놓았는데요, 이 틀을 평균 통과율 같은 기존 지표들에 적용해 불확실성 추정치를 함께 구했다는 거예요. 지표를 계층별로 모아서 살펴보면 정책 모델의 구조적 성질이 드러나는데, 연구진은 이걸 물리학에서 쓰는 성기게 만들기 과정과 연결해 실행 소음과 업무 이질성을 명확히 갈라놓았다는 겁니다.",
            "topic": "에이전트 시스템의 신뢰성과 불확실성을 체계적으로 평가하기 위해 계층 구조로 된 통계적 틀을 제안하고, 이를 통해 실행 소음과 업무 이질성을 분리해 낸 것에 대한 연구예요.",
            "one_line": "에이전트 신뢰성 평가를 위한 계층적 통계 틀을 제안했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.19546",
          "title": "Evidence-Conditioned Completion and Synthesis of Electronic Health Records",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19546"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "환자 정보를 어떻게 넣어야 유용한지 잘 몰랐다는 건데요",
            "easy1_desc": "환자의 정보를 바탕으로 전자건강기록(EHR)을 만들 수 있지만, 정보의 양이 예측에 어떤 도움을 주는지 그리고 정보 유출 위험이 얼마나 되는지는 그동안 제대로 밝혀지지 않았거든요. 연구진은 그래서 원래부터 빠져 있던 정보와 일부러 숨긴 정보를 나누어서 처리하는 방식을 썼는데요. 이를 통해 방문 기록 완성하기와 새로운 기록 만들기를 하나로 묶은 'EHRDiB'라는 기술을 선보였다는 겁니다. 쉽게 말하면, 환자 데이터의 빈곳을 채우고 똑닮은 데이터를 만드는 두 가지 일을 한 번에 해결하려 했다는 셈이에요.",
            "easy2_title": "데이터를 만들어 봤더니 예측 정확도가 크게 높아졌습니다",
            "easy2_desc": "연구진이 이 방식을 세 가지 완성 기술과 여덟 가지 합성 기술과 비교해 봤는데요. 진짜 데이터로 학습한 분류기와 비교했을 때 예측 성능 차이가 가장 작았다는 겁니다. 데이터를 합성할 때도 MIMIC-IV 데이터와 듀크 헬스(Duke Health) 데이터에서 성능 차이가 기존 최고 기술보다 각각 45.2% 그리고 53.3% 줄어들었다고 해요. 데이터가 많아질수록 유출 위험이 커진다는 장단점이 함께 나타난다는 점도 연구진은 확인했다는 겁니다.",
            "topic": "환자 정보의 양과 유출 위험을 고려하여 전자건강기록의 완성도와 합성 성능을 동시에 높이는 통합 프레임워크를 개발한 연구예요.",
            "one_line": "전자건강기록의 완성도와 합성 성능을 높이는 통합 프레임워크를 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.19525",
          "title": "Objectify, Don't Delete: Complaint-Derived Evaluation of Ambient Clinical Notes",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19525"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "왜 사람들은 AI가 쓴 진료 기록에 불만을 가질까",
            "easy1_desc": "연구진은 기존의 평가 방식이나 전문가 체크리스트가 의사들이 실제로 불만을 쏟아내는 지점을 제대로 담아내지 못한다고 지적했는데요. 왜냐하면 자주 나오는 불만일수록 여러 질문이 뭉쳐 있어서, 단순한 예·아니오 판정으로는 채점할 수 없기 때문이라는 겁니다. 결국 이 문제를 풀지 못하면 진짜로 중요한 가치를 놓치게 된다는 말이에요.",
            "easy2_title": "복잡한 불만을 쪼개서 결함을 정확히 찾아내도록 바꿨다",
            "easy2_desc": "그래서 연구진은 뭉쳐 있는 불만 기준을 구체적이고 명확한 판단 항목으로 쪼개는 객관화 단계를 도입했는데요. 이 방식을 적용해 봤더니, ACI-bench의 11가지 결함 속에서 중앙값 재현율 0.95로 위반 사항을 잘 찾아냈다는 거예요. 불만을 그냥 두면 엉뚱한 정상 노트까지 70%나 문제 삼게 되지만, 질문을 쪼개면 판단 정확도가 크게 높아진다는 장점이 있는 반면, 결함 개수를 노트 전체가 아니라 구간별로 꼼꼼히 관리해야 한다는 점도 같이 따라온다는 겁니다.",
            "topic": "의사가 실제로 제기하는 불만을 바탕으로 AI 임상 진료 기록의 품질을 정확하게 평가하기 위해 복잡한 불만 기준을 쪼개는 객관화 방식을 제안하고 검증한 연구예요.",
            "one_line": "AI 진료 기록의 불만 기준을 쪼개는 평가 방식을 제안하고 검증했어요.",
            "topic_tag": "의료·바이오",
            "limit": "결함 개수를 노트당 하나의 합격·불합격 비트로 뭉뚱그리지 않고 구간별로 계속 유지해야 한다는 한계가 있어요."
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
                false
              ]
            ],
            "evidence_ok": "5/6",
            "evidence_all": false,
            "evidence_by_symbols": 1,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "의료·바이오",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.19413",
          "title": "PMR: MoE Routing with Shared Prototypes and Congestion Pricing",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19413"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식은 입력과 전문가 배정이 묶여 있어서 복잡했어요",
            "easy1_desc": "희소 혼합 전문가(Sparse Mixture-of-Experts, MoE) 모델에서는 그동안 토큰과 전문가의 맞춤 점수로 전문가를 바로 골랐는데요, 이게 입력과 배정이 한데 묶여 있는 방식이라는 말이에요. 뭔 소리냐면, 문맥에 맞추기도 하고 일감을 나누기도 해야 하는데 그 과정이 서로 얽혀서 다루기 까다로웠다는 겁니다. 쉽게 말하면, 한 가지 방식으로 두 가지 일을 동시에 하려다 보니 비효율이 생겼던 셈이에요.",
            "easy2_title": "프로토타입을 거치는 방식을 써서 일감을 고르게 나눴어요",
            "easy2_desc": "그래서 연구진은 공통된 프로토타입(기본 형태)을 사이에 두는 PMR(Prototype-Mediated Routing)이라는 두 단계 라우터 방식을 제안했는데요, 입력 맞춤과 전문가 배정을 따로 떼어놓고 다룬다는 거예요. 앞부분에서 토큰의 분포를 먼저 구한 다음에 이를 전체 확률의 법칙으로 섞어서 전문가 분포를 조절하는 방식인데요, 처리 속도를 20배 이상 높이면서도 높은 정확도를 유지한다는 장점이 있어요. 대신 블록 단위 근사 같은 복잡한 단계를 거쳐야 한다는 점도 함께 따라온다는 겁니다.",
            "topic": "공유된 프로토타입과 혼잡 가격제를 도입하여 입력 맞춤과 전문가 배정을 분리하고 부하를 고르게 나누는 PMR 라우팅 방식을 제안한 논문이에요.",
            "one_line": "프로토타입 기반의 PMR 라우팅으로 MoE 모델의 부하 분산과 성능을 높였어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
              "10"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.19403",
          "title": "Confidence Without Cause: Predicting and Localizing Physics-Shortcut Sensitivity in Language Model Hidden States",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19403"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "정답과 상관없는 조건에 흔들리는 언어모델의 자신감",
            "easy1_desc": "연구진은 언어모델이 물리 문제를 풀 때 정답과 아무 상관 없는 조건에 휘둘리는지 살펴보았는데요, 답을 바꾸지 않는 155개 프롬프트 묶음으로 확인해 봤더니 Qwen2.5-7B-Instruct는 50.0%, Llama-3.1-8B-Instruct는 22.9%에서 흔들리는 모습을 보였다는 겁니다. 특히 방해 요소가 정답 숫자와 가까울 때 영향이 가장 컸는데요, 쉽게 말하면 모델이 엉뚱한 정보에 꽂혀서 확신을 가질 수도 있다는 말이에요.",
            "easy2_title": "숨은 상태를 미리 읽어내고 내부 장치를 건드려 고치기",
            "easy2_desc": "그래서 연구진은 모델이 답을 내놓기 전에 숨은 상태를 선형 탐색기로 읽어내어 취약성을 미리 찾아냈는데요, 16번째 층의 어텐션 헤드 4개를 꺼버리는 방식을 써봤더니 모델이 흔들리는 현상을 없앨 수 있었다는 겁니다. 사전 훈련 뒤에 만든 새로운 데이터에서도 성능을 유지한다는 장점이 있는데, 대신 안쪽의 미세한 작동 원리까지 완전히 파악하는 데는 한계가 있을 수 있다는 점도 같이 따라온다는 겁니다.",
            "topic": "언어모델이 물리 문제에서 정답과 관련 없는 방해 요소에 흔들리는 취약성을 찾아내고, 이를 미리 감지해 억제하는 방법을 다룬 연구예요.",
            "one_line": "언어모델의 물리 문제 민감도를 탐지하고 억제하는 방법을 제안했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "유형 내 AUROC는 0.667에서 0.6875 사이로 낮게 나타난다는 한계가 있어요."
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
          "canon_id": "2611.19388",
          "title": "SARGO: Agreement-Gated Reinforcement and Suppression via On-Policy Self-Guidance for Visual Hallucination Mitigation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19388"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시각적 환각을 없앤다고 바른 정보까지 지우는 게 문제였어요",
            "easy1_desc": "시각 언어 모델이 이미지와 상관없는 거짓 정보를 섞어 내놓는 환각 현상을 줄이려고 하는데요, 기존 방식은 답변 전체에 한꺼번에 점수를 매기다 보니 잘 쓴 정보까지 같이 깎여 나간다는 문제가 있었거든요. 뭔 소리냐면, 틀린 부분을 고치려다가 맞은 내용까지 같이 지워지는 셈이라는 말이에요.",
            "easy2_title": "맞고 틀린 곳을 콕 집어 조절하는 방식을 새로 도입했답니다",
            "easy2_desc": "그래서 연구진은 SARGO라는 후학습 방식을 통해 잘 맞는 토큰에는 더 센 보상을 주고 틀린 토큰에는 벌을 다르게 주는 방식을 써봤는데요, Qwen3-VL-4B, Qwen3-VL-8B, Gemma3-4B 모델로 시험해 봤더니 시각 정보를 잘 살리면서도 환각을 줄였다는 겁니다. 대신 답변을 아예 빼버려서 점수를 깎아 먹는 꼼수는 막아 준다는 장점이 있는데, 구체적인 성능 수치는 원문에 따로 적혀 있지 않다는 점도 같이 따라온다는 겁니다.",
            "topic": "시각 언어 모델의 환각 현상을 줄이기 위해 답변 전체가 아니라 토큰 단위로 보상과 벌을 다르게 주는 SARGO 학습 방식을 제안한 연구예요.",
            "one_line": "시각 언어 모델의 환각을 줄이기 위해 토큰별로 보상을 조절하는 학습법을 제안했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.19359",
          "title": "One Run Is Not Enough: Reminding a small Gemma 4 coding agent of its last finding made no measurable difference in a paired test",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19359"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "코딩 에이전트가 기억을 잃을 때 마지막 찾은 걸 다시 쥐여줘 봤는데요",
            "easy1_desc": "연구진은 98개의 짝을 지은 코딩 작업에서 작은 Gemma 4 모델에 마지막 찾은 발견을 자동으로 다시 앞에 넣어 주는 단순한 방법을 실험해 봤는데요. 그렇게 했더니 47개가 풀렸고 안 넣었을 때는 48개가 풀려서 결과는 마이너스 1점이었거든요. p값도 1점이라서 결국 눈에 띄는 차이가 없었다는 말이에요. 쉽게 말하면 기억을 되살려 주는 장치를 붙여도 실제 성능에는 아무런 변화가 없었다는 셈이에요.",
            "easy2_title": "기억을 살려주는 장치를 붙여도 변하는 건 없었습니다",
            "easy2_desc": "그래서 연구진은 기억을 주입해 주는 하니스 장치를 썼지만 에이전트가 스스로 메모를 거의 적지 않았고 기억이 콘텍스트 공간을 차지하기만 했다고 밝혔는데요. 처음 48쌍에서는 기억을 넣은 쪽이 29개, 안 넣은 쪽이 25개로 살짝 높았지만 뒤에 50개를 더 늘려 해봤더니 반대로 나와서 결국 재현되지 않았다는 점이거든요. 장점은 따로 없는데 오히려 기억 공간만 낭비하게 된다는 단점이 있는 셈이에요. 쉽게 말하면 이런 규모의 작업 세트에서 단발성 기억 주입은 그냥 실행할 때 생기는 잡음 속에 묻혀 버린다는 겁니다.",
            "topic": "작은 코딩 에이전트에 마지막 발견을 기억시키는 하니스 장치가 실제 성능에 어떤 영향을 주는지 98개의 작업으로 실험한 결과예요.",
            "one_line": "소형 코딩 에이전트의 기억 주입 효과를 실험했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "연구진은 이번 실험이 에이전트가 직접 쓴 메모리가 아니라 하니스 장치를 시험한 것이라고 밝혔습니다."
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
          "canon_id": "2611.19348",
          "title": "Attention U-Net Cellular Automata for Multi-Class Land Use and Land Cover Change Simulation in Lucknow, India: Evaluation Against Null and Classical Baselines",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19348"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 인공지능이 변화를 잘 맞추는지 널 모델과 비교해 봤습니다",
            "easy1_desc": "연구진은 토지 이용의 변화 규칙을 배우는 데 합성곱 신경망을 자주 쓰지만, 변화가 없다고 예측하는 널 모델과 제대로 견뤄 본 적은 드물다는 점에 주목했는데요. 그래서 높이와 도로까지의 거리 등 네 가지 요소를 넣고 10년 뒤의 상태를 맞추는 AttentionUNet-CA를 만들어 봤다는 겁니다. 인도 러크나우 지역의 데이터를 가지고 1990년부터 2020년까지의 변화를 살펴봤는데요. 쉽게 말하면, 새로 만든 모델이 진짜로 쓸모가 있는지 뼈대 있는 기준과 비교해 보려는 시도였다는 말이에요.",
            "easy2_title": "어텐션을 더해 봤지만 결과는 차이가 크지 않았습니다",
            "easy2_desc": "그래서 다양한 모델과 비교해 봤더니, 변화가 일어난 지역이 전체의 8.1%뿐이라 변화가 없다고 본 널 모델의 전체 일치도가 91.9%로 가장 높게 나왔는데요. 변화를 맞춘 정확도를 보면 가중치를 쓴 U-Net CA가 22.0%, AttentionUNet-CA가 21.0%로 랜덤 포레스트 방식보다 앞섰지만 씨앗 값 차이와 비슷한 수준이었다는 거예요. 장점은 변화의 양을 잘 맞춘다는 점이지만, 단점은 어텐션 게이트가 정확도를 크게 끌어올리지는 못했다는 겁니다. 쉽게 말하면, 복잡한 장치를 더해도 드라마틱한 차이는 없었다는 셈이에요.",
            "topic": "인도 러크나우 지역을 바탕으로 토지 이용 변화를 예측하는 AttentionUNet-CA 모델을 만들고, 여러 기본 모델과 정확도를 비교해 본 연구예요.",
            "one_line": "토지 이용 변화 예측 모델을 만들고 널 모델과 비교했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.19345",
          "title": "Information Limits of Replay-Free Recurrent State Migration",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19345"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "모델을 바꿀 때 옛날 기억이 다 날아간다는 게 문제였죠",
            "easy1_desc": "순환 모델(Recurrent Model)을 새로운 모델로 교체할 때, 기존 모델이 갖고 있던 옛날 상태만으로는 새로운 모델이 똑같은 기록을 보고 무슨 계산을 할지 제대로 정하지 못하는 문제가 있는데요. 연구진은 모델 교체 사실을 미리 알기 전에 반드시 남겨둬야 하는 정보가 뭔지 수학적으로 분석해 봤거든요. 시간 불변 아핀 선형 계열(Time-invariant affine linear family)의 경우, 차수 k의 지역 이동(Local migration)에 필요한 최소한의 연속 인과 기억(Minimum continuous causal memory)이 끌어올려진 계수 시스템의 도달 가능 차원에서 기준 상태의 정보를 뺀 것과 같다는 걸 밝혔다는 말이에요. 결국 옛 모델의 기억을 어떻게 압축해서 넘겨줄지가 핵심인데, 그동안은 이걸 명확히 알기 어려웠다는 겁니다.",
            "easy2_title": "필요한 정보량을 분석해서 기억을 남기는 한계를 파악해 봤습니다",
            "easy2_desc": "그래서 연구진은 모델을 통째로 다시 플레이하지 않고(Replay-free) 상태를 옮길 때 필요한 정보의 한계를 분석하는 방법을 제안했는데요. 제어 가능한 d-상태 스칼라 입력 모델에서는 임의의 행렬 교체 방향이 스트리밍 이후에 밝혀지더라도 최대 kd개의 실수 좌표만 추가로 있으면 된다는 점을 확인했어요. 단일 랭크-원 방향만으로도 이미 모든 kd개가 필요할 수 있다는 한계도 같이 보여주는데요. 실험을 해봤더니 소형 언어 모델(Small language model)에서 같은 기억을 쓰는 3차 보간법(Cubic interpolation)은 상태 충실도를 높여주지만 예측 성능이 크게 오르지는 않는다는 장단점이 같이 나타났다는 겁니다.",
            "topic": "재현 없이 순환 모델 상태를 옮길 때 필요한 정보의 한계와 그에 따른 표현 방식 분석",
            "one_line": "순환 모델 상태 이동에 필요한 정보 한계를 분석함",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.19339",
          "title": "From Mutation to Medication: Characterizing Failures of Clinical LLMs to Respect Genomic Resistance",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19339"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "유전자 저항성이 있는데도 암 치료제를 추천한다",
            "easy1_desc": "연구진이 10개의 언어 모델을 가지고 5개의 종양학 지식 베이스에서 1,464건의 유전자 저항성 사례를 평가해 봤는데요. 그 결과, 모델들이 저항성이 분명히 있는 치료제를 21.8%에서 81.4%에 이르는 케이스에서 추천했다고 해요. 쉽게 말하면, 환자에게 안 맞는 약을 약물 감수성 검사 결과와 상관없이 덜컥 권하는 일이 잦았다는 말이에요.",
            "easy2_title": "저항성 사실을 스스로 다시 짚어 보게 했더니 추천이 뚝 떨어졌다",
            "easy2_desc": "그래서 연구진이 모델에게 저항성 결론을 다시 반복해서 짚어 주거나 검증된 근거를 직접 제공해 봤는데요. 그랬더니 엉뚱한 추천을 하던 비율이 0.0%에서 3.5% 수준으로 크게 줄어들었다는 거예요. 번거로운 검색 과정 없이 오라클 조건으로 올바른 증거를 쥐여 주면 실수가 눈에 띄게 줄어든다는 장점이 있는데, 대신 모델이 스스로 찾아내지 못하고 떠먹여 줘야만 한다는 한계도 같이 따라온다는 겁니다.",
            "topic": "임상용 대형 언어 모델(LLM)이 유전적 저항성 증거를 무시하고 암 치료를 추천하는 실패 사례들을 분석한 내용이에요.",
            "one_line": "임상용 대형 언어 모델이 유전자 저항성 무시하고 암 치료를 추천하는 실패 원인을 분석했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "이 분석은 사전 등록된 분석 결과가 무의미하거나 약하게 나와서 사후에 지정된 탐색적 분석입니다."
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
              "one_line 51자"
            ],
            "flags": [],
            "tag": "AI 안전·평가",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.19332",
          "title": "NI-ACT: A Neural Intent Interface for Brain-Embodied Manipulation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19332"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "뇌 신호를 일일이 다 보내야 해서 너무 힘들었어요",
            "easy1_desc": "기존의 뇌-컴퓨터 인터페이스(BCI)는 로봇 팔을 움직일 때마다 사용자가 모든 과정을 신경 써야 했거든요. 매번 다가가는 것부터 물건을 잡는 것까지 뇌 신호로 하나하나 지정해 줘야 해서 사용자가 아주 피곤한 구조였던 거예요. 쉽게 말하면, 로봇이 스스로 판단하지 못하고 사용자가 실시간으로 모든 동작을 조종해야 했다는 말이에요.",
            "easy2_title": "뇌 신호를 의도만 전달하는 방식으로 바꿔서 로봇이 스스로 움직이게 했어요",
            "easy2_desc": "연구진은 뇌의 운동 피질 신호를 짧게 읽어 '의도'로만 전달하는 NI-ACT라는 체계를 만들었는데요. 이렇게 하면 로봇이 시각 정보와 자기 위치 감각을 활용해 스스로 동작을 완성할 수 있게 됩니다. 기존 방식보다 물건을 잡는 성공률이 69%에서 81%로 높아졌는데, 뇌 신호를 어떻게 표현하고 어디서 읽느냐에 따라 로봇의 움직임이 완전히 달라진다는 걸 확인한 셈이에요.",
            "topic": "뇌의 운동 의도를 로봇의 동작 수행을 위한 조건으로 활용하는 계층적 인터페이스 NI-ACT를 제안하고 그 효과를 검증했어요.",
            "one_line": "뇌 신호를 의도 토큰으로 변환해 로봇의 자율 동작을 돕는 인터페이스를 개발했어요.",
            "topic_tag": "제어·로봇",
            "limit": ""
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
          "canon_id": "2611.19323",
          "title": "The Data Debt of Stockouts: Partial Identification and Minimax-Regret Inventory Control",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19323"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기록이 빠져서 수요를 정확히 몰랐던 문제",
            "easy1_desc": "재고를 어떻게 관리하느냐에 따라 판매 로그에 들어오는 수요가 달라지는데, 재고 수준만 기록되고 기록되지 않은 예측 때문에 수요 빈도를 제대로 알기 어려웠던 건데요. 연구진이 멀티스테이지 주문 결정에서 이런 로그들이 무엇을 정당화할 수 있고 유한한 샘플이 무엇을 보장할 수 있는지 따져봤다는 겁니다. 쉽게 말하면, 물건이 다 팔려 나간 상황에서 남은 기록만으로는 원래 손님이 얼마나 사려 했는지 정확히 알기 힘들었다는 말이에요.",
            "easy2_title": "데이터 부채라는 개념을 도입해 재고 정책의 한계를 따져본 일",
            "easy2_desc": "그래서 연구진은 정보와 정책 클래스에 대해 가장 큰 예상 비용 격차를 최소화하는 결정론적 재고 규칙을 골라냈는데요. 독립적인 수요 조건에서도 재고를 넘기는 이월 때문에 공통된 최적 행동이 있어도 양수의 부채가 생길 수 있다는 걸 밝혀냈어요. 유한한 샘플은 데이터 부채 위에 학습 오차를 더하게 되는데, 필요한 샘플 수는 선택 범위에 따라 비례해서 커진다는 겁니다. 쉽게 말하면, 기록이 더 많아져도 부채는 남을 수 있지만 보장을 더 촘촘하게 만들 수는 있다는 셈이에요.",
            "topic": "재고 기록에서 발생하는 정보의 한계를 다루는 데이터 부채와 미니맥스 후회 기반 재고 제어 방법을 분석한 내용이에요.",
            "one_line": "재고 기록에서 수요 미확인 문제를 다루는 데이터 부채 개념과 재고 제어 방법을 분석했어요.",
            "topic_tag": "수학·이론",
            "limit": "이런 보장을 활용하려면 검증된 로깅과 신뢰할 수 있는 선택 범위, 그리고 비용 단위의 후회 허용치가 반드시 필요하다는 한계가 있어요."
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
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.19319",
          "title": "Hardening Agentic Web Populations Through Multi-Criterion Competitive Co-Evolution: Lessons from Wargame Strategy Optimization",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19319"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "고정된 방어만 믿다가는 결국 뚫리게 된다는 건데요",
            "easy1_desc": "오픈 웹에 있는 에이전트들은 계속해서 적응하는 적들을 상대해야 하는데요, 단 한 번만 테스트를 거친 방어는 결국 약점이 드러나 뚫리고 만다는 겁니다. 연구진은 그래서 탈옥 공격과 안전 가드레일을 고정된 공격자와 방어로 보지 않고, 서로를 상대로 진화하는 두 개의 집단으로 다루자고 제안했는데요. 쉽게 말하면, 계속 변하는 상대에 맞춰 방어력도 함께 진화해야만 살아남을 수 있다는 말이에요.",
            "easy2_title": "두 집단을 서로 맞붙여 진화시키는 방식을 가져와 봤습니다",
            "easy2_desc": "워게임 전략 최적화 방식에서 아이디어를 얻어, 교대 진화 주기와 크로스플레이 평가를 통해 움직이는 적에게도 튼튼한 전략을 만드는 방법을 언어 모델 안전에 적용해 봤는데요. 하지만 현실 세계에서는 비용과 효율처럼 서로 부딪히는 여러 가지 기준을 동시에 고려해야 한다는 한계도 함께 존재한다는 겁니다. 그래서 연구진은 이러한 다중 기준 경쟁 공동 진화가 장난감 같은 두 에이전트 환경이 아니라 진짜 네트워크로 연결된 집단 수준의 문제라고 주장했어요.",
            "topic": "오픈 웹 에이전트의 안전성을 높이기 위해 워게임 전략 최적화의 다중 기준 경쟁 공동 진화 방식을 언어 모델에 적용하는 방안을 다룬 논문이에요.",
            "one_line": "워게임 진화 방식을 언어 모델 안전에 적용하는 방법을 제안했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "워게임 버전의 아이디어를 에이전틱 웹 버전으로 가져오는 과정 사이에는 아직 해결해야 할 열린 문제들이 남아 있다고 연구진은 밝혔어요."
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
          "canon_id": "2611.19311",
          "title": "Macro Control and Capability Evaluation of Black-Box World Models: A Two-Regime Framework for LLM-Agent Markets",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19311"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "거대언어모델 에이전트 시장에서 전체 흐름을 파악하기가 어려웠어요",
            "easy1_desc": "거대언어모델(LLM) 에이전트들이 모여 시장을 이루면, 전체적인 거시 경제 흐름을 흉내 내는 세계 모델 역할을 하게 되는데요. 문제는 외부에서 관찰할 때 전체적인 입력과 결과만 보일 뿐, 그 안에서 개별 에이전트들이 어떻게 움직여서 그런 결과가 나왔는지 구분하기가 어렵다는 거예요. 즉, 전체 점수 하나만으로는 모델의 능력을 제대로 평가할 수 없다는 한계가 있었던 셈이에요.",
            "easy2_title": "참조 경로를 제시해 모델의 능력을 두 단계로 나누어 평가했어요",
            "easy2_desc": "연구진은 개별 에이전트의 결정을 건드리지 않고도 매일 공공 참조 경로를 알려주는 소프트 매크로 제어 방식을 도입했는데요. 이를 통해 정보를 미시적 행동으로 바꾸는 단계와, 그 행동이 다시 거시적 결과로 나타나는 단계를 각각 측정하는 평가 체계를 만들었어요. 결과적으로 참조 경로를 알려줬을 때 모델이 목표를 더 잘 따라가는 것으로 나타났고, 특정 비율에서 구조적 편향이 가장 낮아지는 등 모델의 성능을 더 정밀하게 읽어낼 수 있게 됐다는 거예요.",
            "topic": "LLM 에이전트 시장의 거시적 제어 방식과 이를 평가하기 위한 두 가지 체계의 프레임워크를 제안했어요.",
            "one_line": "LLM 에이전트 시장의 거시적 제어와 평가를 위한 이중 체계를 제안했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": ""
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
          "canon_id": "2611.19292",
          "title": "Zero-Shot Weight-Space Programming for Prediction and Classification of Target Variables in Structured Datasets",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19292"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기울기 없이 가중치를 손으로 직접 써넣다니 무슨 일인가요",
            "easy1_desc": "연구진은 가중치 공간 프로그래밍이라는 방식을 써서 피드포워드 네트워크의 모든 매개변수를 직접 채워 넣었는데요, 학습 과정에서 흔히 쓰는 경사 하강법이나 최적화 과정이 전혀 없다는 게 특징이에요. 정답 규칙이 따로 주어지지 않은 일반 정형 데이터셋에서도 거대 언어 모델이 통계적 추론을 직접 해내는지 확인해 봤다는 겁니다. 쉽게 말하면, 최적화 도구 없이 모델이 곧바로 숫자를 써 내려가는 방식이라는 말이에요.",
            "easy2_title": "기존 학습법을 뛰어넘는 성과를 냈지만 좌표계 문제라는 한계도 있었어요",
            "easy2_desc": "그래서 다양한 문제들로 성능을 시험해 봤더니, 선형 최적값이나 생성 과정의 오차 한계까지 맞추는 모습을 보여줬는데요, 경사 하강법으로 학습한 기존 기준 모델까지 이기는 결과도 나왔거든요. 하지만 분석한 좌표계와 구조가 비스듬하게 어긋날 때는 실패한다는 단점도 함께 나타났다는 겁니다. 결국 어떤 선형 구분자의 훈련 오차가 은닉층의 가치를 가르는지 보여준 셈이에요.",
            "topic": "거대 언어 모델을 활용해 최적화나 경사 하강법 없이 피드포워드 네트워크의 가중치와 편향을 직접 생성하는 방식의 성능과 한계를 검증한 연구예요.",
            "one_line": "거대 언어 모델로 가중치를 직접 생성하는 방식의 성능을 검증했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.19275",
          "title": "Beyond Clumsy Agentic Tool Calling: How Cueing and Spotting Make the Difference",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19275"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "도구를 쓸 때 엉뚱한 행동을 반복하곤 했습니다",
            "easy1_desc": "거대 언어 모델(LLM) 기반의 작업 지향 에이전트가 도구를 쓰면서 실행 피드백을 놓치거나 효과 없는 호출을 반복하는 문제가 있었는데요, 이런 행동들이 도구를 자율적으로 쓰면서 작업을 이어가는 걸 방해한다는 겁니다. 연구진은 이걸 국소적인 어설픈 도구 사용과 여러 번의 상호작용에 걸친 도구 사용 우회라는 두 가지 시간적 단위로 나눴다는 말이에요. 쉽게 말하면, 에이전트가 도구를 다룰 때 어디서 자꾸 삽질하는지 짚어본 셈이라는 말입니다.",
            "easy2_title": "실시간으로 끼어들어 알려주는 미들웨어를 만들었습니다",
            "easy2_desc": "그래서 연구진은 큐잉과 스팟팅을 통해 자율적인 도구 사용을 돕는 온라인 미들웨어인 ToolPulse를 선보였는데요, 실행 상태와 상호작용 패턴을 추적해서 개입 기회를 찾아내고 말로 하는 알림이나 구조화된 피드백을 준다는 계획이에요. 간결한 알림이 가장 높은 실질적 응답률을 이끌어내는 장점이 있는데, 대신 전체적인 수리 결과는 기준선과 비슷하게 유지된다는 점도 같이 따라온다는 겁니다. 쉽게 말하면, 참견해서 행동을 고치게 할 수는 있어도 최종 결과가 확 좋아지는 건 또 다른 문제라는 말이에요.",
            "topic": "거대 언어 모델 에이전트가 도구를 쓸 때 겪는 문제를 실시간으로 진단하고 개입하는 미들웨어 ToolPulse를 제안하고 그 효과를 평가한 연구예요.",
            "one_line": "도구 사용 에이전트를 돕는 온라인 미들웨어 ToolPulse를 제안하고 그 효과를 평가했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "행동 수정과 전체 수리 성과 사이의 간격으로 인해 자율 에이전트에서 개입 시기와 지원 전략을 신중하게 결정해야 한다는 과제가 남았다고 밝혔습니다."
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
              "one_line 52자"
            ],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.19237",
          "title": "Auditable Authorization for LLM Agents: Empirical Evidence Across Model, Harness, and Workflow Layers",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19237"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "사람이 승인했는데도 실제로 안 멈추거나 엉뚱하게 도는 문제가 있었거든요",
            "easy1_desc": "연구진은 인공지능 에이전트(LLM Agents)를 쓸 때 사람이 중간에 승인이나 거절을 해도 실제로 일이 멈추거나 제때 끝나지 않는 경우가 있는지 짚어봤는데요. 거절 안전성과 승인 완전성이라는 개념을 세우고, 모델이 고르는 단계부터 실행 도구와 작업 흐름(Workflow)까지 세 가지 구간을 직접 검사해 봤다는 겁니다. 쉽게 말하면, 사람이 거절했는데도 뒤에서 몰래 일행이 돌거나 승인된 일이 누락되는 구멍이 어디서 생기는지 찾아낸 셈이에요.",
            "easy2_title": "실제로 검사해 봤더니 승인 과정에서 누락과 오작동이 꽤 많이 튀어나왔다는 겁니다",
            "easy2_desc": "그래서 모델 세 개와 프롬프트 다섯 개, 실행 디자인 네 개 등을 가지고 100개의 공개 작업 흐름을 실험해 봤는데요. 그 결과 거절된 효과가 하나도 없는데도 300개의 승인 중 일곱 개가 끝나지 않았고, 복원 과정에서는 CrewAI 승인 중 336개에서 672개가 누락되는 등 문제가 여럿 확인됐다는 거예요. 의도와 생성된 호출, 실제 효과 사이가 어긋나는 지점을 바로잡는 실용적인 감사 계약(audit contract)을 제시했다는 장점이 있는데, 대신 시스템 구조가 복잡해질수록 꼼꼼히 따져봐야 할 범위가 넓어진다는 점도 함께 남는다는 겁니다.",
            "topic": "인공지능 에이전트의 승인과 거절 과정에서 생기는 오작동을 막기 위해 실행 경계를 검사하고 감사 계약을 제안한 연구예요.",
            "one_line": "인공지능 에이전트의 승인 과정을 검사하는 감사 계약을 제안했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": ""
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
          "canon_id": "2611.19173",
          "title": "When Does Confidence Reveal Problem Difficulty?",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19173"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "모델의 자신감이 문제의 진짜 어려움을 알려주냐는 거였어요",
            "easy1_desc": "연구진은 모델이 자기 답에 얼마나 확신하는지를 나타내는 자신감 신호가 실제 문제의 난이도와 어떤 관계가 있는지 자세히 살펴봤는데요. 살펴봤더니, 단순히 토큰 수준의 불확실성보다 흔들림이나 의미의 ентропия(엔트로피), 그리고 답안의 길이가 전체 풀이 난이도와 훨씬 더 깊은 연관이 있다는 걸 찾아냈거든요. 특히 모델이 맞춘 문제들만 골라서 분석해 봤는데도 이 관계가 그대로 이어졌다는 말이에요. 뭔 소리냐면, 이 신호들이 단순히 모델이 맞고 틀리는 걸 맞추는 걸 넘어 문제 자체가 얼마나 어려운지까지 짚어낸다는 겁니다.",
            "easy2_title": "신호를 어떻게 쓰는지 살펴봤더니 한계도 같이 보이더라고요",
            "easy2_desc": "그래서 연구진은 이런 자신감 관련 신호들을 추론 단계의 결정을 이끄는 데 어떻게 쓸 수 있는지 활용법을 살펴봤는데요. 방법은 여러 작업 영역에서 이 신호들이 문제 난이도를 가늠하는 지표로 쓰일 수 있는지 그 가능성과 한계를 함께 따져본 거예요. 장점은 모델 고유의 신호가 전체 집단의 난이도를 짐작하는 유용한 대용물이 될 수 있다는 점인데, 대신 완벽하지는 않고 어디까지나 불완전한 지표라는 한계도 같이 따라온다는 겁니다.",
            "topic": "모델의 자신감 관련 신호들이 단순히 정답 예측을 넘어 전체 문제의 난이도를 어떻게 보여주는지 연구진이 파악한 내용이에요.",
            "one_line": "자신감 신호와 문제 난이도의 관계를 조사했어요",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.19167",
          "title": "Executable Archaeology: Reanimating the Logic Theorist",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19167"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "최초의 인공지능 프로그램이라 불리는 로직 시어리스트를 다시 살려봤습니다",
            "easy1_desc": "1955년부터 1956년 사이에 앨런 뉴얼과 동료들이 만든 로직 시어리스트(LT)는 인공지능의 시초로 꼽히는 프로그램인데요, 당시에는 사람이 직접 손으로 계산하거나 정보 처리 언어인 IPL-I 같은 초기 언어로 작성되었거든요. 그런데 이 프로그램이 여러 번 수정되면서 IPL-II나 IPL-V 같은 다양한 버전으로 발전해 왔다는 말이에요. 쉽게 말하면, 초기 인공지능이 어떤 언어와 구조로 시작되었는지 그 뿌리를 되짚어 보는 과정인 셈입니다.",
            "easy2_title": "두 가지 버전의 로직 시어리스트를 복원해 초기 인공지능의 발자취를 확인했습니다",
            "easy2_desc": "연구진은 IPL-I 언어로 작성된 초기 버전과 1963년에 공개된 IPL-V 버전, 이렇게 두 가지 로직 시어리스트를 다시 실행할 수 있도록 복원했는데요, 이 두 버전을 나란히 놓고 비교해 봤더니 초기 인공지능 알고리즘과 컴퓨터 언어가 어떤 과정을 거쳐 발명되었는지 명확히 알 수 있었다는 거예요. 단순히 옛 프로그램을 돌려보는 것에 그치지 않고, 그 당시의 기술적 고민과 발전 과정을 직접 눈으로 확인했다는 점이 중요합니다. 쉽게 말하면, 인공지능의 역사를 코드로 직접 재현해 본 것이라 할 수 있어요.",
            "topic": "초기 인공지능 프로그램인 로직 시어리스트의 여러 버전을 복원하여 인공지능 알고리즘과 언어의 초기 발명 과정을 분석했어요.",
            "one_line": "초기 인공지능 프로그램인 로직 시어리스트를 복원하여 알고리즘의 기원을 분석했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.19165",
          "title": "From Sensors to Silicon: Causal Cross-Layer Self-Healing Edge AI for Secure and Energy-Adaptive IoT Systems",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19165"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기기를 쪼개서 보지 않고 따로 따로 보려니 얽혀서 문제가 안 풀렸습니다",
            "easy1_desc": "인공지능을 중앙 서버에서 사물인터넷 기기로 옮기면서 감지 품질이나 추론, 하드웨어 신뢰성, 보안, 에너지 관리가 하나의 물리적 노드 안에서 단단히 묶이게 됐는데요. 기존의 에지 인공지능 해결책들은 이런 요소들을 따로따로 다루다 보니까, 성능이 떨어졌을 때 이게 센서 문제인지 데이터 변화 때문인지 하드웨어 고장인지 구별하기가 어려웠다는 겁니다. 쉽게 말하면, 어디가 아픈지 정확히 모른 채 엉뚱한 곳을 고치고 있던 셈이에요.",
            "easy2_title": "인과 관계를 따져서 원인을 바로 짚고 스스로 고치는 틀을 만들었습니다",
            "easy2_desc": "그래서 연구진은 센서 건강부터 추론 불확실성, 프로세서 성능, 전력과 열 상태까지 모든 원격 측정 데이터를 한꺼번에 지켜보는 인과 기반의 스스로 고치는 에지 인공지능 틀을 내놨는데요. 시간에 따른 인과 추론 엔진을 써서 비정상적인 행동이 어디서 비롯됐는지 가장 그럴듯한 원인을 추정하고 진단의 불확실성까지 계산해 낸다는 겁니다. 문제가 생겼을 때 원인을 빠르게 짚어내는 장점이 있는데, 대신 여러 교란 요인들이 한꺼번에 닥칠 때 얼마나 정확히 버텨낼지는 계속 지켜봐야 한다는 점도 남는다는 겁니다.",
            "topic": "사물인터넷 기기에서 인공지능이 겪는 여러 문제를 한꺼번에 살피고 인과 관계로 원인을 찾아 스스로 고치는 틀에 대한 연구예요.",
            "one_line": "사물인터넷 기기의 인과 관계 기반 자가 치유 에지 인공지능 틀을 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.19122",
          "title": "Agent-Guided Process Verification for Mathematical Self-Correction",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19122"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 수학 문제 풀이에서 사소한 실수가 전체를 망치던 문제",
            "easy1_desc": "거대언어모델(LLM)이 수학적 추론을 꽤 잘하게 되었지만, 복잡한 여러 단계 문제에서는 한 번의 실수가 걷잡을 수 없이 퍼져나가거나 꼭 필요한 답안의 갈래를 놓치는 일이 생기거든요. 기존의 글을 통한 반성 방식은 정확히 어디서 틀렸는지 짚어내기 어렵고, 결과만 확인하는 방식은 조건만 맞으면 넘어가는 바람에 빠진 갈래가 있는지 잘 모른다는 거예요. 결국 틀린 이유를 정확히 찾지 못해 전체 해결책이 엉뚱한 방향으로 흘러간다는 셈이에요.",
            "easy2_title": "에이전트가 직접 과정을 쪼개서 검증하고 고치게 만들었더니",
            "easy2_desc": "연구진은 이를 해결하려고 에이전트 기반 과정 검증(AGPV)이라는 방식을 제안했는데요, 현재 풀이를 핵심 주장의 순서대로 쪼개서 하나씩 확인하고 첫 번째 에러가 나오면 바로 멈추는 방식이에요. 요약 에이전트가 실패한 증거를 진단으로 바꿔주면 교정 에이전트가 그 지점부터 다시 풀어나가는데, 이렇게 해서 5개 수학 데이터셋에서 63.8%의 평균 정확도를 기록했거든요. 기존 대표 방법들보다 13.5% 포인트 더 뛰어난 성적을 냈다는 장점이 있지만, 대신 과정마다 도구를 부르고 맥적을 압축하는 복잡한 단계를 거쳐야 한다는 점도 같이 따라온다는 겁니다.",
            "topic": "수학적 자가 교정을 위해 핵심 주장을 순서대로 검증하고 교정하는 에이전트 기반 과정 검증(AGPV) 프레임워크를 제안하고 성능을 평가한 연구예요.",
            "one_line": "수학적 자가 교정을 위한 에이전트 기반 과정 검증 방법을 제안하고 성능을 평가했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.19099",
          "title": "Instructor-designed AI improves learning in a randomized trial across 19 universities",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19099"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "일반 챗봇을 그냥 썼더니 오히려 공부에 방해가 되더라",
            "easy1_desc": "요즘 대학들은 인공지능(AI)을 쓰게 했더니 학생들의 학습 능력이 오히려 떨어졌다는 연구 결과가 나와서 걱정하고 있는데요. 학교 차원에서 만든 중앙 집중형 AI 도구나 그냥 쥐어준 챗봇을 쓴 학생들이 더 나쁜 성적을 냈다는 거예요. 뭔 소리냐면, 그냥 남이 만들어 준 AI를 쓰면 공부에 별 도움이 안 된다는 말입니다. 그래서 연구진은 현장의 교수들이 직접 만든 AI가 과연 학습을 도울 수 있는지 19개 대학 7,200명의 학생을 대상으로 시험해 본 겁니다.",
            "easy2_title": "선생님이 직접 짠 AI를 썼더니 성적이 올라가더라",
            "easy2_desc": "그래서 연구진이 교수들이 자기 수업과 학생들을 잘 아는 점을 살려 직접 AI를 만들게 해 봤는데요. 그 결과, 감독관이 지키는 대면 시험 같은 확실한 평가 방식으로 쟀을 때 학생들의 학습 성적이 좋아졌다는 걸 확인했다는 겁니다. 다만 수업 참여 기록이나 만족도 평가를 보면 변화는 따로 없었다고 하는데요. 장점은 성적이 좋아진다는 것인데, 대신 학생들이 느끼는 만족도나 참여도는 그대로라는 점도 함께 나타났다는 셈이에요.",
            "topic": "현장 교수가 직접 설계하고 다듬은 인공지능(AI)을 활용했을 때 대학생들의 학습 성적이 실제로 좋아지는지 19개 대학의 대규모 실험으로 확인한 연구예요.",
            "one_line": "교수가 직접 설계한 AI로 학생 학습 성적이 오르는지 19개 대학에서 검증했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.19078",
          "title": "Assume/Guarantee Contracts for the Compositional Multi-Agent Reinforcement Learning of Heterogeneous Teams",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19078"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "다양한 능력을 합쳐야 하는데 팀워크가 엉키는 문제였어요",
            "easy1_desc": "서로 다른 능력을 가진 여러 에이전트(인공지능 프로그램)가 힘을 합쳐 팀 과제를 끝내야 하는데요, 이질적인 에이전트들을 조율하면서 역할을 나누는 일이 까다롭다는 문제가 있었어요. 연구진은 이 문제를 풀기 위해 각 하위 작업이 지켜야 할 조건과 보장을 담은 계약 개념인 AGC-MAS와 IHA-MARL 방식을 도입했는데요. 쉽게 말하면, 각자 맡은 역할의 규칙을 명확하게 정해서 삐걱거리지 않고 협력하게 만들었다는 말이에요.",
            "easy2_title": "계약 개념과 반복 학습을 붙여서 시간과 성공률을 다 잡았어요",
            "easy2_desc": "그래서 연구진은 전체 과제를 계약 세트로 쪼개고, 에이전트에게 작업을 배정해 학습시킨 뒤 능력을 평가하는 과정을 성공 확률이 목표치에 이를 때까지 반복하는 알고리즘을 만들어 봤는데요. 세 개의 벤치마크 테스트에서 다섯 번의 시도 모두 최종 평가 성공률 100%를 달성했다고 해요. 기존 방식보다 학습 반복 시간이 7에서 11배 정도 적게 들었다는 장점이 있는데, 대신 과제를 계약 형태로 미리 쪼개는 설계 과정이 복잡하다는 점도 같이 따라온다는 겁니다.",
            "topic": "서로 다른 능력을 가진 다중 에이전트 강화학습 팀이 계약 구조와 반복 학습을 통해 작업을 효율적으로 나누고 협력하도록 만드는 프레임워크에 대한 연구예요.",
            "one_line": "이질적 다중 에이전트 협력을 위해 계약 기반 반복 학습 알고리즘을 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.18971",
          "title": "Three Invisible Failure Modes in Speech-Based Age Estimation for Child Safety",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18971"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "아동용 음성 나이 예측에서 문제가 생겼는데요",
            "easy1_desc": "연구진은 음성 기반 대형 언어 모델(Audio-capable Large Language Models)을 가지고 아이들의 나이를 맞추는 실험을 다섯 가지로 해 봤는데요. 오디오 응답의 2.5%에서 42.5% 사이에서 아이들을 13살 이상으로 잘못 분류했고, 5세에서 11세 아이들을 18세 이상으로 놓기도 했다는 겁니다. 이 과정에서 경고나 상태 코드 없이 조용히 실패하는 세 가지 보이지 않는 오류 양상을 발견했다고 해요. 쉽게 말하면, AI가 나이를 제대로 못 맞추는데도 겉으로는 멀쩡해 보여서 놓치기 쉽다는 말이에요.",
            "easy2_title": "그래서 파이프라인 전체를 점검해야 한다고 밝혔습니다",
            "easy2_desc": "그래서 연구진은 아동 안전을 위한 나이 확인 주장은 개별 모델이 아니라 파이프라인 전체 수준에서 평가해야 한다고 강조했는데요. 방법은 이런 오류들을 감지할 수 있는 보고 관행을 설명하여 대책을 세우겠다는 거예요. 파이프라인을 통째로 뜯어보면 숨겨진 오류를 잡아낼 수 있는 장점이 있는데, 대신 시스템 전체를 다 봐야 해서 복잡해진다는 점도 같이 따라온다는 겁니다. 결국 모델만 믿지 말고 전체 과정을 꼼꼼히 점검해야 한다는 말이에요.",
            "topic": "음성 기반 아동 나이 예측에서 나타나는 세 가지 숨겨진 실패 양상과 파이프라인 평가의 필요성을 다룬 연구예요.",
            "one_line": "음성 기반 아동 나이 예측의 숨겨진 실패 양상을 분석하고 파이프라인 평가를 제안했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": ""
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
            "bad_numbers": [
              "30",
              "40"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 안전·평가",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.18963",
          "title": "SpecRelay: Amortize or Avoid the Round Trip in Edge-Cloud Speculative Decoding",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18963"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "엣지에서 만들고 클라우드에서 확인하는 방식인데 왕복 시간이 발목을 잡았거든요",
            "easy1_desc": "연구진은 엣지 기기와 클라우드를 함께 쓰면서 작은 글자를 먼저 만들고 큰 모델이 동시에 검사하는 방식을 살펴봤는데요, 네트워크 왕복 시간이 늘어날수록 처리량이 떨어지는 문제가 생겼다는 거예요. 엣지에서 글을 만들고 클라우드가 검사하는 일정을 동기로 맞추다 보니 앞선 대답이 올 때까지 다음 요청을 기다려야만 했다는 말이에요. 쉽게 말하면, 아무리 빨리 만들어도 주고받는 통신 시간 때문에 전체 속도가 깎였다는 셈이에요.",
            "easy2_title": "기다리지 않고 바로 보내거나 아예 클라우드를 거치지 않도록 바꿨습니다",
            "easy2_desc": "그래서 연구진은 클라우드 확인이 필요할 때는 왕복 시간을 쪼개서 줄이고 로컬 추론만으로 충분할 때는 클라우드를 아예 안 거치는 스펙릴레이(SpecRelay) 시스템을 내놨는데요, 비동기 확인 방식을 써서 이전 대답을 기다리지 않고도 여러 후보 트리를 미리 보낼 수 있게 만들었어요. 여기에 덤으로, 라우터가 엣지의 여러 모드와 클라우드 추론 중에서 가장 알맞은 방식을 미리 골라 준다는 거예요. 대기 시간을 줄이는 장점이 있는데, 대신 시스템 구조가 조금 더 복잡해진다는 점도 함께 따라온다는 겁니다.",
            "topic": "엣지-클라우드 환경에서 대형 언어 모델(LLM)의 추론 처리량을 높이기 위해 왕복 통신 지연을 줄이는 스펙릴레이(SpecRelay) 시스템을 제안했어요.",
            "one_line": "왕복 통신 지연을 줄이는 엣지-클라우드 추론 시스템을 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.18905",
          "title": "Ask Precisely, Assume Wisely: Interactive Evaluation of Ambiguity Resolution in Large Language Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18905"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "모델이 모호한 질문을 받았을 때 무엇을 해야 할지 몰랐다는 거예요",
            "easy1_desc": "사람과 인공지능이 대화할 때 뜻이 분명하지 않은 모호함이 큰 문제였는데요, 지금까지는 인공지능이 여러 해석을 한 번에 평가하는 정적 방식만 주로 썼거든요. 그런데 이렇게 하면 사용자가 진짜로 원했던 뜻을 찾아가는 과정을 효율적으로 보지 못한다는 단점이 있었던 셈이에요. 쉽게 말하면, 인공지능이 질문을 받고 바로 추정해야 할지 아니면 다시 물어봐야 할지 제대로 판단하기 어려웠다는 말이에요.",
            "easy2_title": "가상 사용자를 만들어서 대화 품질을 꼼꼼하게 따져 봤어요",
            "easy2_desc": "연구진은 선호도에 기반한 가상 사용자 프레임워크를 도입해서 모호성 해결 능력을 여러 번 주고받으며 평가해 봤는데요, 이를 통해 헛소리나 과도한 정보 공개를 막았다는 겁니다. 또한 틀린 가정이나 반복된 명확화 요청 같은 세 가지 불만족 신호를 정의해서 정확도뿐만 아니라 상호작용의 질까지 따져 봤다는 거예요. 그 결과, 지나치게 자주 묻는 모델은 대화를 늘어지게 만들고, 가정에만 의존하는 모델은 사용자 의도와 어긋나기 쉽다는 균형의 문제가 드러났다고 밝혔는데요. 쉽게 말하면, 질문을 정확하게 하고 현명하게 가정하는 인공지능 에이전트를 설계할 수 있게 되었다는 말이에요.",
            "topic": "대화형 인공지능(AI) 모델이 모호한 질문을 처리할 때 생기는 문제점을 파악하고, 여러 번의 대화를 통해 이를 평가하는 새로운 프레임워크를 제안한 연구예요.",
            "one_line": "모호성 해결 능력을 평가하는 가상 사용자 프레임워크를 제안했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.18883",
          "title": "SPLICE: Structured Prompt Local Iterative Combinatorial Evolution",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18883"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식대로 고치다가는 중요한 규칙까지 깨지기 십상입니다",
            "easy1_desc": "자연어 최적화 방법은 인공지능 에이전트의 시스템 프롬프트나 도구 지침 같은 정책 매개변수를 고쳐 성능을 높이는데요, 문서 전체를 통째로 수정하는 방식을 쓰다 보니 안전 조항이나 출력 형식 같은 중요한 계약 내용까지 멋대로 바뀌는 문제가 생기거든요. 게다가 여러 후보를 탐색할 때 한쪽으로만 쏠리거나 문서가 쓸데없이 길어지는 현상도 멈추지 않는다는 겁니다. 쉽게 말하면, 고치지 말아야 할 부분까지 건드리면서 효율도 떨어지는 셈이에요.",
            "easy2_title": "블록별로 나눠서 탐색하고 성능 저하를 막는 방식을 도입했습니다",
            "easy2_desc": "그래서 연구진은 문서를 블록 단위로 쪼개서 수정 가능한 부분만 골라 다루는 통합 자연어 최적화 프레임워크인 SPLICE를 내놓았는데요, 계약 내용은 그대로 지키면서 다양성을 챙기는 빔 검색과 길이 규제 장치를 함께 썼다는 겁니다. 그 결과 일곱 개의 공개 벤치마크 중 네 곳에서 이기고 세 곳에서 가장 센 기존 방식과 비슷하게 나왔다는 장점이 있는데, 대신 구조를 복잡하게 다루어야 한다는 점도 같이 따라온다는 겁니다. 쉽게 말하면, 안전과 성능을 모두 잡으려고 규칙을 세분화해서 고친 셈이에요.",
            "topic": "인공지능 에이전트의 자연어 정책 문서를 안전하고 효율적으로 고치기 위해 블록 구조와 제약 조건을 바탕으로 최적화하는 SPLICE 프레임워크를 제안하는 내용이에요.",
            "one_line": "블록 구조 기반의 자연어 최적화 프레임워크인 SPLICE를 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.18714",
          "title": "How to make a moral agent: sentimentalism and rationalism as lenses on AI",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18714"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 도덕적 주체가 될 수 있는지 살펴봤습니다",
            "easy1_desc": "연구진은 AI가 도덕적으로 옳고 그름을 판단하는 도덕적 주체가 될 수 있을지, 인간의 어떤 능력이 이를 뒷받침하는지 살펴보려고 했는데요. 철학과 도덕 심리학의 역사적 연구를 바탕으로 후보 능력을 뽑아내고, 이를 AI 시스템에서 시험할 수 있도록 다듬었다는 겁니다. 뭔 소리냐면, 인간의 도덕성을 흉내 내는 AI를 어떻게 평가할지 기초부터 따져봤다는 말이에요.",
            "easy2_title": "AI 모델을 시험할 구체적인 실증 방안을 제안했습니다",
            "easy2_desc": "그래서 연구진은 대형 언어 모델(LLMs) 같은 AI 시스템을 대상으로 다듬은 능력들을 시험할 구체적인 실증 권고사항을 제시했는데요. 이 방식을 쓰면 AI 행동이 바람직한지 확인하고 정책 결정이나 모델 개발 설계에 도움을 줄 수 있다는 장점이 있다는 겁니다. 대신 새로운 맥락에 적용하는 과정에서 개념이 더 정교해져야 한다는 점도 함께 따라온다는 거예요.",
            "topic": "철학과 도덕 심리학을 바탕으로 AI 시스템의 도덕적 주체 가능성을 탐구하고 이를 시험할 연구 프로그램을 제안한 연구예요.",
            "one_line": "AI의 도덕적 주체 가능성을 탐구할 연구 프로그램과 실증 방안을 제안했어요",
            "topic_tag": "AI 에이전트·도구",
            "limit": ""
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
          "canon_id": "2611.18464",
          "title": "Typing Matters: Muscle, Language and Typing Behaviour in Live Keystroke Decoding from sEMG",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18464"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "키보드 없이 손목 근육으로 글자를 읽으려니 한계가 있었는데요",
            "easy1_desc": "연구진은 손목 근육 신호(sEMG)로 글자를 읽어내는 기존 방식이 단순히 신호에서 문자를 뽑아내는 문제로만 다뤘다고 지적했어요. 하지만 실제 타이핑은 근육 움직임뿐만 아니라 언어 구조와 오타, 백스페이스 같은 타이핑 행동까지 동시에 얽혀 있는 복잡한 문제거든요. 기존 시스템은 신호를 고정된 창 단위로만 처리해서 앞뒤 맥락을 다 날려버리고, 언어 구조도 몰라서 오직 근육 신호에만 의존했다는 말이에요. 쉽게 말하면, 손목의 움직임과 타이핑의 흐름을 따로따로 보지 못하고 놓친 부분이 많았다는 겁니다.",
            "easy2_title": "근육 신호와 언어 모델을 하나로 합쳐서 실시간으로 타이핑을 예측했는데요",
            "easy2_desc": "그래서 연구진은 상태 공간 모델(SSM)을 바탕으로 미래를 미리 보지 않고 실시간으로 작동하는 타이핑 디코더를 제안했어요. 전통적인 타이핑 디코더와 효율적인 자귀회귀 언어 모델을 하나로 합쳐서, 전체 세션을 창으로 쪼개지 않고 한 번에 처리하도록 만들었다는 거예요. 일반 텍스트를 오타와 백스페이스가 포함된 사람 같은 타이핑으로 바꿔주는 재토큰화 방법도 함께 도입했는데요. 그 결과 기존 최고 성능보다 5.4% 향상된 25.13%의 문자 오류율을 달성하면서도 파라미터는 6.7배나 줄였다는 장점이 있답니다.",
            "topic": "근육 신호와 언어 모델을 결합해 미래를 미리 보지 않고도 실시간으로 타이핑을 정확하게 예측하는 새로운 디코더를 개발한 연구예요.",
            "one_line": "근육 신호와 언어 모델을 결합한 실시간 타이핑 디코더를 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.18395",
          "title": "Smart Home Agents Make Capable but Unpredictable Grid Operators",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18395"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "스마트홈 에이전트가 늘어나는 중인데 고장 났을 때 대처법은 부족했습니다",
            "easy1_desc": "인공지능(AI) 기반 스마트홈이 전력망 가장자리에 점점 많이 들어서고 있는데요, 정전 같은 비상 상황에서 어떻게 고쳐야 하는지 연구는 아직 부족했다는 거예요. 왜냐하면 스마트홈은 전력망 가장자리에 있어서 여기서 탈이 나면 전체로 번질 수 있거든요. 만약 집 안에서 정전이 나면 사용자가 직접 전력 부하 균형 맞추기나 기기 복구 같은 일을 손수 해결해야 하는 셈이에요.",
            "easy2_title": "정전 상황을 직접 시뮬레이션해 봤더니 전력망 운영자 역할까지 할 수 있었습니다",
            "easy2_desc": "그래서 연구진은 전체 정전 상황을 통째로 겪는 스마트홈 에이전트의 복원력을 처음으로 분석해 봤는데요, 실제 환경에서 정전 전후의 복원력을 재는 시뮬레이션 모음을 해봤다는 거예요. 그 결과 스마트홈 에이전트가 정전 때 전력망 운영자 역할을 맡을 수 있다는 걸 보여줬는데요, 대신 모든 모델에 걸쳐서 현재의 한계를 보여주는 새로운 고장 유형들도 여럿 찾아냈다는 겁니다. 쉽게 말하면, 쓸모를 확인한 반면에 고쳐야 할 빈틈도 같이 드러난 셈이에요.",
            "topic": "전력망 가장자리에서 스마트홈 에이전트가 정전 상황을 어떻게 버티는지 처음으로 분석하고 한계를 살펴본 연구예요.",
            "one_line": "스마트홈 에이전트의 정전 복원력을 분석하고 한계를 파악함",
            "topic_tag": "전력망·계통",
            "limit": ""
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
          "canon_id": "2611.18121",
          "title": "Optimizing Drilling Trajectories in Multi-Material Structures Using Quantum Annealers",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18121"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "여러 재질을 뚫을 때 에너지를 아끼는 궤적을 찾으려 했는데요",
            "easy1_desc": "연구진은 여러 재질이 섞인 구조물에서 구멍을 뚫는 경로를 잡을 때 전체 에너지를 줄이는 양자 하이브리드 최적화 방식을 제어해 봤는데요. 재질이 다를 때 드는 비용과 이동할 때 쓰는 에너지, 공구가 닳는 손실까지 한꺼번에 따져서 구멍을 빠짐없이 거치도록 짰다는 거예요. 쉽게 말하면, 구멍 뚫기 작업을 에너지가 덜 들게 순서를 짜맞추는 셈이라는 말이에요.",
            "easy2_title": "실제 현장 조건을 넣고 디웨이브 양자 솔루션으로 풀어 봤습니다",
            "easy2_desc": "그래서 같은 재질끼리 구멍을 묶어 공구를 자주 바꾸지 않게 하고, 열린 경로 같은 현실적인 조건까지 반영해 디웨이브(D-Wave)의 립 제약 이차 모델 하이브리드 솔루션(Leap Constrained Quadratic Model Hybrid Solver)으로 풀어 봤는데요. 10개에서 55개까지 다양한 구멍 개수와 재질 배치를 시험해 봤더니, 복잡한 물리적 제약 속에서도 에너지를 아끼는 궤적을 잘 찾아낸다는 걸 확인했다는 겁니다. 공구를 자주 안 바꿔서 편해지는 장점이 있는데, 대신 다양한 조건과 제약을 미리 꼼꼼히 맞춰야 한다는 점도 함께 따라온다는 겁니다.",
            "topic": "양자 하이브리드 최적화를 써서 여러 재질이 섞인 구조물에 구멍을 뚫는 궤적을 에너지가 적게 들도록 계획하는 방식에 대한 연구예요.",
            "one_line": "양자 하이브리드로 에너지 절감형 구멍 뚫기 경로를 최적화했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.18064",
          "title": "A$^3$: Adaptive Audio Agent Framework for Collaborative Edge Computing",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18064"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "서버가 끊기면 오디오 에이전트가 먹통이 되는 게 문제였어요",
            "easy1_desc": "임베디드 오디오 에이전트는 속도를 내려고 가까운 엣지 서버를 쓰는데요, 서버에만 매달려 있으면 네트워크가 끊겼을 때 아예 응답을 못 한다는 문제가 있거든요. 연구진은 이 한계를 풀려고 서버와 기기 사이의 연결 상태를 살펴보는 프레임워크를 생각해 냈는데요. 뭔 소리냐면, 서버가 안 될 때를 대비해 기기 자체에서도 바로 움직일 수 있게 만들겠다는 겁니다.",
            "easy2_title": "서버와 기기를 모두 품는 에이전트 프레임워크를 만들어 봤어요",
            "easy2_desc": "그래서 연구진은 전체 파이프라인 단계를 서버에 두면서도 감당할 수 있는 기기에는 완전한 대체 에이전트를 심어 두는 A^3 프레임워크를 내놨는데요. 네트워크 상태를 보고 서버를 포기할 타이밍을 잡는 기한 설정까지 더했다는 겁니다. 젯슨 기기와 RTX A4500 서버에서 시험해 봤더니, 연결이 좋을 때는 서버만 쓰는 것과 맞먹는 성능을 내면서도 통신이 완전히 끊긴 상황에서는 모든 요청을 처리해 냈다고 해요.",
            "topic": "네트워크가 끊겨도 멈추지 않는 적응형 오디오 에이전트 프레임워크인 A^3의 설계와 성능 평가에 대한 연구예요.",
            "one_line": "네트워크 단절에도 대응하는 오디오 에이전트 프레임워크를 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.17991",
          "title": "LACCO: Local Accumulation with Computation--Communication Overlap",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17991"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "대역폭이 좁은 네트워크에서 언어 모델을 학습시킬 때 무엇이 문제였나",
            "easy1_desc": "디로코(DiLoCo) 같은 지역 최적화 방식은 여러 번의 지역 단계를 거친 뒤에야 통신을 수행하지만, 외부 기울기 평균화와 외부 갱신 단계가 여전히 주요 병목 구간으로 남아 있었는데요. 기존의 연산과 통신 중첩 방식은 지연된 갱신이나 복제본 지역 갱신을 사용해 이 멈춤 현상을 피하려고 했지만, 그 결과로 수렴 성능이 떨어지거나 복제본들이 서로 어긋나 벌어지는 문제가 생겼다는 거예요. 쉽게 말하면, 통신 횟수를 줄여 보려다 학습이 엉키거나 효율이 떨어지는 부작용이 있었다는 말입니다.",
            "easy2_title": "그래서 무엇을 만들었고 무엇이 달라졌나",
            "easy2_desc": "연구진은 락코(LACCO)라는 두 단계 알고리즘을 제안해, 외부 갱신에 지연을 주지 않으면서 글로벌 통신을 지역 연산과 겹쳐서 처리하도록 만들었는데요. 파인웹(FineWeb)을 활용한 언어 모델 사전 학습 실험에서 락코를 써 봤더니, 이이거(Eager)나 지연된 디로코 같은 기존의 통신 중첩 기준선들보다 일관되게 더 뛰어난 성능을 보여줬다는 겁니다. 모형 크기가 0.5B(05십억) 매개변수까지 커지고 통신 간격이나 16개 작업자까지의 복제본 수가 달라져도 이러한 성능 향상이 탄탄하게 유지된다는 장점이 있는데, 대신 추가되는 연산이나 메모리 부담은 거의 없거나 완전히 겹쳐서 처리할 수 있는 수준이라는 셈이에요.",
            "topic": "대역폭이 제한된 환경에서 통신 병목을 해결하기 위해 연산과 통신을 겹쳐 처리하는 락코 알고리즘을 제안하고 그 성능을 검증한 내용입니다.",
            "one_line": "통신 병목을 줄이는 락코 알고리즘을 제안하고 성능을 검증했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
              "05"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.17983",
          "title": "Interactive deep-learning based interface for brain tumour segmentation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17983"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "뇌 종양 모양이 제각각이라 자동으로 찾기가 어려웠어요",
            "easy1_desc": "뇌 종양은 크기나 모양, 위치가 환자마다 너무 달라서 인공지능이 자동으로 정확하게 찾아내기가 참 힘들거든요. 게다가 병원마다 사용하는 자기공명영상(MRI) 촬영 방식이 조금씩 다르기만 해도 인공지능이 엉뚱한 결과를 내놓는 오류를 범하기도 해요. 쉽게 말하면, 데이터가 조금만 바뀌어도 인공지능이 갈피를 못 잡고 헤매는 상황인 셈이에요.",
            "easy2_title": "사람이 직접 고칠 수 있는 인공지능 인터페이스를 만들었어요",
            "easy2_desc": "그래서 연구진은 평소에는 자동으로 작동하다가, 필요할 때 사람이 직접 수정할 수 있는 대화형 딥러닝 시스템을 개발했는데요. 이렇게 하면 인공지능이 놓친 부분을 사람이 바로잡아 줄 수 있어서 모든 환자에게 충분히 높은 정확도를 보장할 수 있다는 장점이 있어요. 자동화의 편리함은 챙기면서도 사람의 판단을 더해 정확성을 높인 방식이라고 보시면 됩니다.",
            "topic": "뇌 종양 분할을 위해 자동화와 사용자 수정이 결합된 대화형 딥러닝 인터페이스를 제안하고 그 성능을 평가했어요.",
            "one_line": "사람이 수정 가능한 뇌 종양 분할용 대화형 딥러닝 시스템을 개발했어요.",
            "topic_tag": "의료·바이오",
            "limit": ""
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
          "canon_id": "2611.17968",
          "title": "TotalSegmentator Aorta Report: Automated Aortic Diameter Measurement at 11 Standardized Landmarks on CT Images",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17968"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "대동맥 지름을 자동으로 재는 도구가 왜 필요했을까",
            "easy1_desc": "연구진은 대동맥의 11개 기준 위치에서 지름을 자동으로 재는 오픈소스 도구를 만들고 평가해 봤는데요, 가이드라인에 맞춰 대동맥 판막부터 갈래까지 스스로 찾아내게 설계한 거예요. 230명의 CT 영상 239건을 모아서 시험해 봤더니, 전문 방사선사가 검토하고 바로잡은 기준과 비교할 수 있게 준비한 셈이에요. 쉽게 말하면, 사람이 일일이 재던 복잡한 과정을 컴퓨터가 대신 맡아 주도록 만든 거라는 말입니다.",
            "easy2_title": "자동으로 재어 봤더니 정확도는 어느 정도였나",
            "easy2_desc": "전체 위치에서 평균 절대 오차가 1.06 mm로 나왔고, 차이가 2 mm 이내인 경우가 86.6%에 달했다고 하는데요, 다만 발살바동김 부위에서는 오차가 2.17 mm로 가장 컸다는 단점도 있어요. 혈관 벽에 혈전이 있는 검사에서는 2 mm를 넘는 오차가 더 자주 나타났지만, 질병이나 심전도 동기화 여부에 따라 전체 오차가 크게 달라지지는 않았다는 거예요. 쉽게 말하면, 전체적으로는 1 mm 수준의 정확도를 보여 주지만 특정 부위나 상태에서는 오차가 커질 수 있다는 겁니다.",
            "topic": "대동맥 전체의 11개 기준 위치에서 지름을 자동으로 재는 오픈소스 도구를 개발하고 그 정확도를 평가한 연구예요.",
            "one_line": "대동맥 지름 자동 측정 도구를 개발하고 정확도를 평가했어요.",
            "topic_tag": "의료·바이오",
            "limit": "대동맥 뿌리 부근이나 혈전이 있는 경우 등 일부 조건에서는 측정 정확도가 낮아진다는 한계가 있어요."
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
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.17950",
          "title": "Toward Interference-Agnostic RF Source Separation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17950"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "특정 방해에만 맞춘 분리기는 모르는 방해를 만나면 오히려 신호를 망가뜨린다는 거예요",
            "easy1_desc": "연구진이 무선 주파수 신호에서 방해 전파를 골라내는 기존 방식을 살펴봤더니, 특정한 신호 쌍에만 맞춰 훈련되어 있어서 수신기가 방해의 종류를 모르면 제대로 작동하지 않는다는 걸 확인했어요. 신호 분리기가 엉뚱한 방해를 만나면 원래 신호를 복구하지 못하고, 오히려 아예 처리를 안 한 것보다 신호 상태를 더 나쁘게 만든다는 말이에요. 뭔 소리냐면, 맞춤형으로 만든 분리기가 오히려 독이 될 수 있다는 겁니다. 쉽게 말하면, 모르는 상황에서는 아예 손을 안 대는 게 나을 수도 있다는 셈이에요.",
            "easy2_title": "모든 방해를 한꺼번에 학습시킨 통합 분리기를 만들어 어떤 상황에서도 대처하게 했어요",
            "easy2_desc": "그래서 연구진은 모든 신호 쌍을 한꺼번에 학습시킨 단 하나의 통합 분리기를 만들어 시험해 봤는데요, 시험할 때는 어떤 방해인지 알려주지 않는 방식을 썼어요. 공통 부품이 없는 두 가지 구조인 ICASSP 2024 RF Challenge의 컨볼루셔널(convolutional) 웨이브넷(WaveNet)과 음악 소스 분리에서 가져온 밴드 스플릿 트랜스포머(band-split transformer)로 실험해 보니 둘 다 똑같이 잘 작동했다고 해요. 기존 특정한 모델 하나 크기와 맞춘 통합 분리기는 거의 모든 신호 쌍에서 오류율을 비슷하게 유지하면서, 새로운 방해 전파 앞에서도 누군가 골라줄 필요 없이 최적의 성능을 낸다는 겁니다.",
            "topic": "특정 방해 전파에만 의존하던 기존의 신호 분리기 대신, 모든 방해 유형을 함께 학습해 어떤 상황에서도 쓸 수 있는 통합 무선 주파수 신호 분리 모델을 제안하는 내용이에요.",
            "one_line": "모든 방해 전파를 함께 학습한 통합 신호 분리기를 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
              "easy1_title 한 줄 아님/너무 김(46자)",
              "easy2_title 한 줄 아님/너무 김(46자)"
            ],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.17929",
          "title": "Evaluating Large Language Models for Scientific Paper Search: Retrieval Success and Inference Latency on Mac Studio and NVIDIA A100",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17929"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "내 컴퓨터에 LLM을 두고 논문을 찾으면 어떤가 살펴봤습니다",
            "easy1_desc": "연구진은 외부 서버에 의존하지 않고 로컬 환경에서 대형 언어 모델(LLM)을 돌려 논문 검색을 도울 수 있는지 알아봤는데요, 실제 컴퓨팅 환경에서 웹 지원 논문 검색을 잘 해내는지 확인해 보려는 거였어요. 입력 문서의 길이가 512 토큰에서 128k 토큰까지 늘어날 때 맥 스튜디오와 엔비디아 A100 GPU 두 개가 달린 서버에서 추론 지연 시간이 어떻게 바뀌는지 살펴봤다는 겁니다. 쉽게 말하면, 내 컴퓨터나 연구실 서버에서 오픈웨이트 모델로 논문을 얼마나 빠르게 찾을 수 있는지 실험해 본 셈이에요.",
            "easy2_title": "모델마다 성능이 다르고 맥은 메모리가 크다는 걸 확인했습니다",
            "easy2_desc": "그래서 7개 과학 저장소에서 가져온 논문 70편을 대상으로 8개의 모델을 평가해 봤는데요, 검색 성공 여부는 어떤 모델을 골랐는지와 질문이 얼마나 구체적인지에 크게 좌우된다는 걸 알아냈어요. A100 GPU가 맥 스튜디오보다 전반적으로 더 빠른 속도를 냈지만, 맥 스튜디오는 통합 메모리 덕분에 테스트한 GPU 구성에서는 아예 올리지 못했던 더 큰 모델도 불러올 수 있었다는 장점이 있었거든요. 빠른 속도를 원할 때는 GPU가 유리하지만 큰 모델을 띄우기에는 메모리 큰 장비가 필요하다는 점을 보여주는 겁니다.",
            "topic": "오픈웨이트 대형 언어 모델을 로컬 환경과 서버에 배치했을 때 논문 검색 성능과 추론 지연 시간을 평가한 연구예요.",
            "one_line": "로컬 환경과 서버에서 오픈웨이트 모델의 논문 검색 성능과 추론 지연 시간을 평가했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.17921",
          "title": "RecMem: Recurrent Memory Compression for Long-Sequence Generative Recommendation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17921"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "긴 추천 기록을 그대로 처리하려니 비용이 많이 들었거든요",
            "easy1_desc": "생성형 추천에서는 긴 상호작용 기록을 쓰는 게 좋은데요, 기록이 길어질수록 처리 비용도 같이 커진다는 문제가 있었거든요. 연구진은 그래서 공간 불변성, 의미 충실도, 평생 진화 가능성이라는 세 가지 목표를 바탕으로 한 기억 압축 프레임워크를 제안했는데요. 쉽게 말하면, 옛날 기록을 일일이 다 들고 다니지 않고 일정한 크기로 줄여서 쓰겠다는 말이에요.",
            "easy2_title": "기록을 고정된 메모리로 압축해서 비용은 줄이고 성능은 지켰어요",
            "easy2_desc": "연구진이 제안한 RecMem은 기록을 분기형 인코더-디코더를 통해 고정된 16개의 메모리 슬롯으로 압축해 준다고 하는데요. MerRec 실험에서 1,200토큰을 쓰던 기존 HSTU-1200과 달리, 16개의 메모리 슬롯과 216토큰의 디코더 Context만 쓰고도 기존 성능의 87.9%에 달하는 Recall@10과 97.0%의 Recall@200을 유지했다는 겁니다. 메모리 크기를 줄여서 효율을 챙기는 장점이 있는데, 대신 압축 과정에서 아주 세밀한 정보 일부가 손실될 수도 있다는 점도 같이 염두에 두어야 한다는 말이에요.",
            "topic": "긴 상호작용 기록을 고정된 메모리 슬롯으로 압축해 처리 비용을 줄이고 성능을 유지하는 생성형 추천 방법론인 RecMem을 제안한 연구예요.",
            "one_line": "긴 추천 기록을 고정된 메모리로 압축해 처리 비용을 줄였다.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.17917",
          "title": "When Cooperation Must Change: Semantic Strategy Unlearning in Multi-Agent Reinforcement Learning",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17917"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "쓸모없어진 협력 규칙을 골라내야 하는 문제인데요",
            "easy1_desc": "연구진은 협력형 다중 에이전트 강화학습에서 과거에 쓰던 규칙이 더는 쓸모없거나 위험해질 때 이를 안전하게 지워야 하는 상황을 살펴봤는데요. 문제는 똑같은 상호작용 패턴이 여러 에이전트에 걸쳐 다양한 기록으로 나타나기 때문에 특정 규칙만 콕 집어내기 어렵다는 겁니다. 기존의 방식인 런타임 실딩은 근본적인 협력 성향을 그대로 남겨 두어 오히려 작업 진행을 방해하고, 기존의 강화학습 지우기나 궤적 삭제 방법은 역할에 구애받지 않는 규칙을 직접 겨냥하지 못한다는 한계가 있거든요. 쉽게 말하면, 전체 협력을 망치지 않으면서 특정한 옛날 규칙만 골라 지우기가 기술적으로 아주 까다롭다는 말이에요.",
            "easy2_title": "인과 관계를 따져서 해로운 규칙만 쏙 지우는 CARVE를 제안했습니다",
            "easy2_desc": "그래서 연구진은 인과 관계를 따져 영향력 있는 상호작용을 찾아내고 관련 없는 행동의 간섭을 줄이는 CARVE라는 방법을 제안했는데요. 이 방법은 반사실적 재협력을 통해 에이전트들이 생산적인 대안을 배우도록 돕고, 적대적 감사를 거쳐 목표로 한 규칙이 여전히 살아있는지 꼼꼼하게 검증한다고 해요. 승인된 업데이트는 탈중앙화된 액터에 반영되어 바로 배포될 수 있다는 장점이 있는데, 대신 검증과 수정 과정이 복잡해진다는 점도 같이 따라온다는 겁니다. 다섯 가지 벤치마크에서 평가해 봤더니 평균 명목 규칙 완료율과 최악의 유도율이 각각 91.4퍼센트, 83.3퍼센트 줄었다는 걸 확인했어요.",
            "topic": "다중 에이전트 강화학습에서 협력 효율을 해치지 않고 특정 규칙을 지우는 CARVE 방법을 제안한 내용이에요.",
            "one_line": "다중 에이전트 강화학습에서 특정 규칙만 지우는 CARVE를 제안함",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.17862",
          "title": "FlexCast: Flexible Context Learning for Time Series Foundation Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17862"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 시계열 모델은 무엇이 얽혀 있었나",
            "easy1_desc": "자기회귀(AR) 방식의 시계열 기초 모델들은 변수 문맥 조건화와 예측 단위 분해가 서로 얽혀 있었는데요, 그래서 성능이 좋아도 그 이유가 유연한 학습 분포 때문인지 아니면 순차적 추론 과정 때문인지 알기 어려웠다는 겁니다. 뭔 소리냐면, 여러 요인이 뒤섞여 있어서 진짜로 뭐가 좋은 성능을 이끌어냈는지 명확히 구분하기 힘들었다는 말이에요.",
            "easy2_title": "그래서 플렉스캐스트를 만들었더니 무엇이 달라졌나",
            "easy2_desc": "연구진은 이를 해결하려고 플렉스캐스트라는 유연한 문맥-목표 학습 프레임워크를 제안했는데요, 시계열 패치 단위로 가변 길이 마스킹 예측을 수행해 순차적 디코딩 없이도 다양한 설정을 모델에 노출시켰다는 거예요. 그렇게 했더니 기존 모델들과 비슷한 수준이거나 더 뛰어난 정확도를 내면서도 추론 지연 시간은 크게 줄어드는 장점이 생겼다는 겁니다. 대신 왼쪽에서 오른쪽으로 가는 순차적 디코딩이 유연한 학습 이후에는 일관된 이득을 주지 않는다는 점도 함께 확인되었다는 말이에요.",
            "topic": "시계열 기초 모델에서 문맥과 예측 목표를 분리해 유연하게 학습하는 플렉스캐스트 프레임워크를 제안하고 그 성능과 추론 방식을 분석한 내용이에요.",
            "one_line": "시계열 기초 모델의 문맥과 목표를 분리하는 플렉스캐스트를 제안하고 검증했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.17856",
          "title": "DECODE: Diagnosing Interpretability Failures in Automated Interpretation Process",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17856"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "자동으로 모델 속을 들여다보는 기술이 믿을 만한지 알기 어렵다는 게 문제였어요",
            "easy1_desc": "거대 언어 모델(LLM) 속을 설명하는 도구들이 사람 없이 AI 스스로 설명을 만들고 평가하는 자동 방식을 쓰면서 믿을 만한지 걱정이 커졌는데요, 정답이 없다 보니 어디가 문제인지 찾아내기가 어렵다는 거예요. 도구가 뽑아낸 표현에 문제가 있는지, 아니면 평가에 쓴 LLM 자체에 문제가 있는지 알 길이 없다는 말이에요. 쉽게 말하면, AI가 설명해 준 내용이 진짜 맞는지 확인할 기준이 모호하다는 셈이에요.",
            "easy2_title": "사람이 직접 개입해 어디가 고장 났는지 찾아내는 시각화 도구를 만들었습니다",
            "easy2_desc": "그래서 연구진은 사람이 직접 살펴볼 수 있는 시각화 분석 시스템인 디코드(DECODE)를 내놨는데요, 진단 과정을 세 단계로 나눠서 구조적 결함부터 설명 수준의 오류까지 어디서 문제가 생겼는지 콕 집어내도록 만들었어요. 여러 독립된 설명과 평가 지표가 얼마나 일치하는지를 믿음성의 기준으로 삼아 사람이 직접 검토할 곳을 짚어 준다는 거예요. 16,384개의 스파스 오토인코더(Sparse Autoencoder) 특성을 분석해 본 결과, 대규모 데이터에서도 어디서 해석이 틀렸는지 효율적으로 찾아낼 수 있었다고 주장했어요.",
            "topic": "대규모 언어 모델의 자동 해석 과정에서 생기는 오류를 사람이 직접 확인하고 진단할 수 있는 시각화 분석 시스템인 디코드(DECODE)를 제안한 내용이에요.",
            "one_line": "AI 해석 오류를 사람이 진단하는 시각화 분석 시스템인 디코드(DECODE)를 개발했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": ""
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
          "canon_id": "2611.17846",
          "title": "Is Abliteration Getting Harder? Not Uniformly: Refusal Removal by Direction-Based Ablation and ARA in Heretic on the Qwen3.8, Gemma 4, Olmo 3.1 and Mistral Small 3.2 LLMs Versus Their Predecessors",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17846"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "최신 모델에서 거절 제거가 과연 더 어려워졌을까요",
            "easy1_desc": "연구진은 오픈웨이트 대형 언어 모델(LLM)에서 거절 기능을 빼는 기술인 압리테레이션(Abliteration)이 최신 모델에서는 점점 실패한다는 주장을 검증해 봤는데요. 다섯 쌍의 신구 모델을 가지고 세세하게 비교해 봤더니, 신형 모델이라고 해서 거절 제거가 일괄적으로 더 어려워진 것은 아니라는 결과가 나왔어요. 뭔 소리냐면, 모델을 만든 세대만 보고는 거절을 없애기가 힘들어졌는지 단정할 수 없다는 말이에요. 쉽게 말하면, 모델의 종류나 사용한 방법과 예산에 따라 결과가 다 달랐다는 겁니다.",
            "easy2_title": "방법에 따라 성능이 엇갈리는 장단점이 있네요",
            "easy2_desc": "그래서 연구진은 임의 순위 압리테레이션(ARA)과 방향 기반 방법을 같이 써서 무엇이 달라졌는지 확인해 봤는데요. 젬마(Gemma)와 올모(OLMo)에서는 ARA가 방향 기반 방법보다 효과를 덜 잃었지만 큐웬(Qwen)에서는 오히려 더 많이 잃었다는 장단점이 같이 나타났어요. 서술된 결과에 따르면 젬마 모델의 거절 증가 폭은 악성 코드 모음에서 주로 왔고 공개 데이터셋에서는 반대로 뒤집혔다는 겁니다. 결국 단일 모델 쌍이나 한 가지 방법만 보고 전체를 판단하면 서로 반대되는 결론에 이를 수 있다는 거예요.",
            "topic": "오픈웨이트 대형 언어 모델(LLM)의 세대별 모델에서 거절 제거 기술이 일괄적으로 더 어려워졌는지 다섯 쌍의 모델과 여러 방법을 사용해 검증한 연구예요.",
            "one_line": "신구 대형 언어 모델 쌍을 이용해 거절 제거 기술의 난이도를 검증함",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.17793",
          "title": "MASTARS: Multi-Agent Sequential Trajectory Augmentation with Return-Conditioned Subgoals",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17793"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "멀티에이전트 데이터를 늘리려니 다양성과 협력이 부딪히더라",
            "easy1_desc": "오프라인 멀티에이전트 강화학습에서는 고정된 데이터셋의 질이 성능을 제한해서 궤적을 늘리는 게 중요한데요, 각자 따로 만들면 다양성은 좋아지는데 협력이 안 되고 같이 만들면 협력은 되는데 다양성이 떨어져서 원래 데이터랑 비슷해진다는 거예요. 뭔 소리냐면 다양성을 챙기면 팀워크가 망가지고 팀워크를 챙기면 새로울 게 없다는 말입니다. 결국 이 두 가지를 동시에 잡는 게 본질적인 문제였다는 겁니다.",
            "easy2_title": "에이전트 순서대로 생성하고 칠하기 기법을 써서 둘 다 잡았다",
            "easy2_desc": "그래서 연구진은 마스타스(MASTARS)라는 확산 기반 프레임워크를 내놨는데요, 에이전트들을 차례대로 궤적을 만들면서 인페인팅(inpainting, 빈 곳을 채워 넣는 기법) 방식을 써서 에이전트끼리 일관된 협력이 되도록 맞췄다는 거예요. 이렇게 했더니 다양하면서도 서로 잘 협력하고 전체적으로도 자연스러운 궤적이 나온다는 셈이에요. 여러 벤치마크 실험을 해 봤더니 여러 오프라인 멀티에이전트 강화학습 방법에서 뚜렷한 성능 향상을 보여줬다고 연구진은 주장했습니다.",
            "topic": "오프라인 멀티에이전트 강화학습에서 다양성과 협력의 상충 문제를 해결하기 위해 순차적 생성과 인페인팅을 활용하는 새로운 데이터 증강 프레임워크인 마스타스(MASTARS)를 제안한 내용이에요.",
            "one_line": "순차적 생성과 인페인팅을 쓰는 멀티에이전트 데이터 증강 프레임워크를 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.17781",
          "title": "TReC: Evaluating Move-Induced State Changes in Instruction-Conditioned Go",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17781"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 바둑 둘 때 왜 다르게 두는지 알아봤는데요",
            "easy1_desc": "바둑 모델이 전문가와 다른 수를 둘 때 얼마나 다르게 두는지 살펴보려고 새로운 방식인 TReC를 도입했는데요. 원래는 좌표 거리로 얼마나 멀리 떨어져 있는지 재봤는데, 이번에는 두 수가 바둑판 상태를 어떻게 바꾸는지 비교해 봤다는 겁니다. 게임 규칙에 따라 똑같은 자리에서 두 수를 각각 놓아보고, 그 결과 생긴 판의 변화를 코사인 유사도로 잰 셈이에요. 쉽게 말하면, 결과만 보는 게 아니라 판이 바뀐 모양새 자체를 비교해 본다는 말이에요.",
            "easy2_title": "좌표로 재는 것과는 완전히 다른 결과가 나왔는데요",
            "easy2_desc": "고정된 KataGo 네트워크를 가지고 5게임의 680개 중후반 국면에서 실험을 해봤는데요. 후보들 사이의 차이를 살펴보니까 기존의 방식과 TReC가 가리키는 방향이 꽤 달랐다는 거예요. 기존 좌표 거리와 TReC의 순위 상관계수를 내봤더니 중앙값 -0.19가 나와서, 둘이 서로 약하게만 이어진다는 점을 보여줬거든요. 장점은 기존에 안 보이던 판의 변화를 잡아낸다는 건데, 대신 어떤 평가 층을 쓰느냐에 따라 수치가 달라진다는 점도 같이 따라온다는 겁니다.",
            "topic": "바둑 AI가 전문가와 다른 수를 둘 때 판의 상태 변화를 비교하기 위해 도입한 새로운 지표인 TReC의 특성과 실험 결과에 대한 이야기예요.",
            "one_line": "바둑 AI의 상태 변화를 비교하는 TReC 지표를 제안하고 실험함.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.17728",
          "title": "A Spectral Framework for Universal Proxy Regularization in Model Merging",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17728"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "모델을 합칠 때 생기는 방해 문제를 살펴봤습니다",
            "easy1_desc": "여러 작업용 모델을 한데 묶는 모델 머징(Model Merging)을 할 때 파라미터 간섭이 생기는 문제를 살펴봤는데요. 다른 작업의 데이터를 직접 쓰면 독립성과 프라이버시가 깨지는 문제가 있거든요. 그래서 범용 프록시 분포를 대신 쓰기도 하는데, 이게 왜 되는지 정확한 이유는 잘 몰랐던 겁니다. 쉽게 말하면, 꼼수는 찾았는데 원리는 몰랐던 셈이에요.",
            "easy2_title": "수펙트럴 틀을 만들어 이론으로 증명하고 확인해 봤습니다",
            "easy2_desc": "그래서 연구진은 스펙트럴 커버리지와 리키지를 통해 프록시 분포와 다른 작업 분포의 관계를 밝혀내는 스펙트럴 프레임워크를 제안했는데요. 훈련 과정에 프록시 정규화기를 더하고, 이를 구현하는 세 가지 방법(J, F, O)을 분석해 비선형 미세조정에서의 차이까지 밝혔다는 겁니다. 비전-언어 모델 CLIP으로 실험해 봤더니 이론이 맞다는 걸 확인했다고 해요. 서류 작업이 줄면 빨라지는 장점이 있는 것처럼, 이론적 한계를 밝혔다는 장점이 있지만 실제 구현 방식에 따라 차이가 난다는 점도 같이 따라온다는 겁니다.",
            "topic": "모델 머징에서 프록시 정규화의 작동 원리와 파라미터 간섭 관계를 스펙트럴 틀로 밝힌 연구예요.",
            "one_line": "모델 머징의 파라미터 간섭을 설명하는 스펙트럴 틀을 제안했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.17639",
          "title": "What LLM Agents See and What Users Say",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17639"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "에이전트가 거짓 가정으로 움직이는 게 문제였어요",
            "easy1_desc": "대형 언어 모델(LLM) 에이전트가 예약을 취소하거나 폴더를 지울 때, 도구가 보여주는 화면과 사용자가 하는 말 중 무엇을 믿고 움직여야 하는지 그 간극을 언어학의 전제론으로 살펴봤는데요. 연구진은 조회를 해도 기록이 여러 개인지 구별할 수 없을 때, 에이전트는 사용유무를 묻지도 않고 섣부르게 행동하는 문제가 생길 수 있다고 밝혔습니다. 쉽게 말하면, 정보가 헷갈릴 때 에이전트가 엉뚱한 결정을 내릴 수 있다는 셈이에요.",
            "easy2_title": "도구로 목록을 보여주거나 사용자가 직접 말해 주게 바꿨습니다",
            "easy2_desc": "그래서 연구진은 검색 결과에 목록을 띄우거나 개수를 세어보게 하고, 사용자가 직접 주장을 말하게 해 실험을 해봤는데요. 둘 다 보여주거나 사용자가 폴더가 비었다고 말해 주면 에이전트가 섣부른 행동을 멈춘다는 결과를 얻었습니다. 목록을 보여주는 장점이 있는 반면, 최신 클로드(Claude)와 지피티(GPT) 모델은 두 번째 기록을 열어보기만 하고 아예 행동하지 않는 특성도 같이 나타났다는 겁니다.",
            "topic": "대형 언어 모델(LLM) 에이전트가 도구의 결과와 사용자의 말 사이에서 잘못된 가정으로 행동하는 문제를 분석하고 안전한 쓰기 작업을 위한 조건을 살핀 연구예요.",
            "one_line": "LLM 에이전트의 섣부른 행동을 막는 조건을 실험했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": ""
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
              "4"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.17632",
          "title": "Generated Evaluation Suites as Diversity-Driven Search for Real Agent Regressions",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17632"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "평가용 문제를 다양하게 만들려고 했는데요",
            "easy1_desc": "에이전트의 명세서로부터 평가용 문제 모음을 만들 때, 보통은 여러 요구조건과 사용자 유형, 시나리오를 채워 넣는 다양성 기반 탐색을 쓴다고 해요. 그렇게 나온 문제 모음을 평균 통과율로만 점수를 매기면, 탐색 과정에서 얻은 다양한 결과물들이 다 버려진다는 건데요. 연구진은 두 가지 도메인에서 tau^2-bench 에이전트에 일곱 가지 통제된 결함을 일부러 넣어 봤다는 겁니다.",
            "easy2_title": "문제를 칸별로 나눠서 점수를 매겨야 한다는 걸 알아냈어요",
            "easy2_desc": "그래서 결함이 어디에서 나타나는지 칸별로 나눠서 점수를 매겨 봤더니, 도구 제거 같은 결함은 바로 찾아냈지만 어떤 결함은 행동 패턴으로만 나타나기도 했다는 거예요. 연구진은 평가 모음을 전체 평균으로만 보지 말고, 칸별로 점수를 매겨서 커버리지를 당당한 지표로 공개해야 한다고 주장했는데요. 전체 평균 통과율만 쓰면 숨어 있는 결함을 다 놓치게 된다는 단점이 있는데, 대신 칸별로 쪼개어 보면 어떤 결함이 진짜 문제인지 정확히 찾아낼 수 있다는 장점이 있다는 겁니다.",
            "topic": "에이전트 평가 모음을 만들 때 전체 평균 점수 대신 칸별 점수와 커버리지를 써야 한다는 연구진의 주장이에요.",
            "one_line": "에이전트 평가 모음의 결함 탐지 한계를 분석하고 칸별 채점 방식을 제안했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": ""
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
            "tag": "AI 안전·평가",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.17583",
          "title": "When Does Less Information Pay? An Exact Finite Atlas of Representation, Payoff, and Cost",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17583"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "정보를 더 많이 담았는데도 정확도가 떨어진 적이 있습니다",
            "easy1_desc": "4개 상태로 이루어진 세계를 다룰 때, 정보를 1비트만 남긴 방식은 과제를 완벽하게 푸는데 평균 1.5비트를 남긴 다른 방식은 정확도가 75%에 그친다고 해요. 이런 차이가 나는 건 각 방식이 세계의 어떤 구별을 남겨두었느냐에 달렸다는 건데요. 쉽게 말하면, 정보의 양이 많다고 무조건 더 잘 맞히는 건 아니라는 셈이에요.",
            "easy2_title": "정보를 적게 가진 쪽이 더 유리한 이유를 샅샅이 파헤쳐 봤습니다",
            "easy2_desc": "그래서 연구진은 가능한 표현 방식과 행동 규칙을 전부 나열해 놓고 과제와 비용 조건에 따라 결과가 어떻게 달라지는지 낱낱이 비교해 봤는데요. 정보를 적게 담은 쪽이 보상이 더 클 때도 있고 반대일 때도 있으며, 심지어 정보 양은 다른데 정확도가 똑같은 쌍도 존재한다는 겁니다. 과제 종류나 비용이 바뀌면 어떤 쪽이 더 나은지도 뒤바뀐다는 장단점이 같이 나타난다는 말이에요.",
            "topic": "정보의 양과 결정의 가치가 어떤 관계를 맺는지 유한한 모델 속에서 낱낱이 따져 본 연구예요.",
            "one_line": "정보 양과 결정 가치의 관계를 유한한 모델로 비교했어요.",
            "topic_tag": "수학·이론",
            "limit": ""
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
          "canon_id": "2611.17564",
          "title": "AI-Voyager: A Public-Interest System for Human-AI Civic Reasoning to Contest and Shape the Rules That Govern AI",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17564"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "정부가 AI 규칙을 먼저 정하고 시민들은 따지기 어려웠던 점",
            "easy1_desc": "정부들이 인공지능 규칙을 만들면서 영향을 받는 사람들이 따져볼 기회도 주지 않고 먼저 정해 버렸는데요. 연구진은 그래서 사람들이 직접 참여해서 규칙을 이해하고 고칠 수 있는 시스템을 만들어 봤다는 거예요. 뭔 소리냐면, 공공의 이익을 위해 사람이 AI와 함께 시민적 추론을 하는 시스템이라는 말이에요. 쉽게 말하면, 시민들이 자신들에게 영향을 주는 AI 규칙에 대해 직접 목소리를 내도록 돕는 셈이에요.",
            "easy2_title": "AI-Voyager를 만들어 시민들이 AI 규칙을 직접 수정하게 만든 점",
            "easy2_desc": "그래서 연구진은 도시, 주, 연방 정부의 거버넌스 문서 3,653개를 모아서 AI-Voyager 시스템을 만들어 봤는데요. 사람들이 자기 지역의 채용 AI 규칙을 찾거나 국가 AI 전략을 읽고 직접 수정안을 초안으로 작성할 수 있게 했다는 거예요. 검색할 때 근거를 검증하는 방식으로 83.0%의 매크로 재현율을 기록했다는 장점이 있는데, 대신 참가자 시뮬레이션에서 인용 표시가 근거를 확인하는 행동으로 이어지지는 않았다는 점도 같이 나타났다는 겁니다. 쉽게 말하면, 시민들이 정확한 문서를 바탕으로 AI 규칙에 참여할 수 있는 새로운 길을 열었다는 말이에요.",
            "topic": "사람들이 AI와 함께 공공 문서를 바탕으로 AI 관련 규칙을 이해하고 수정안을 만들 수 있는 시스템을 개발하고 그 성능과 사용자 반응을 살펴본 연구예요.",
            "one_line": "공공 문서를 바탕으로 AI 규칙에 참여하는 AI-Voyager를 개발하고 성능을 평가함",
            "topic_tag": "AI 에이전트·도구",
            "limit": ""
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
          "canon_id": "2611.17532",
          "title": "Astrocyte Biocomputing: Astrocytic Contributions to Neural Network Computation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17532"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "뇌에서 소리 없는 지휘자 역할을 하는 세포가 있었다",
            "easy1_desc": "연구진이 뇌세포의 약 50%를 차지하지만 전기 신호를 내지 않는 성상교세포(astrocyte)라는 세포를 살펴봤는데요, 이 세포가 학습이나 기억 같은 인지 기능에서 중요한 역할을 한다는 사실이 드러났습니다. 뭔 소리냐면, 오케스트라에서 소리를 안 내지만 전체를 조율하는 지휘자처럼 뇌 네트워크를 이끄는 셈이라는 말이에요. 쉽게 말하면, 기존에는 뉴런의 전기적 상호작용만 보다가 새로운 조율자를 찾은 겁니다.",
            "easy2_title": "성상교세포의 특징을 알고리즘으로 만들어 인공지능에 적용해 봤다",
            "easy2_desc": "그래서 연구진은 성상교세포의 두 가지 특징인 동시 조절과 느린 리듬 소통을 알고리즘으로 구현해 기계학습(ML)에 적용해 보았는데요, 그 결과 학습이 더 빨라지고 노이즈에도 강해졌습니다. 비정상 데이터 탐지가 빨라지고 치명적 망각을 막는 장점이 생겼는데, 대신 새로운 구조를 기존 신경망에 맞추는 과정이 복잡해진다는 점도 함께 나타난다는 겁니다. 쉽게 말하면, 뇌의 숨은 조율 방식을 흉내 내어 기존 인공지능의 약점을 고쳤다는 말이에요.",
            "topic": "뇌의 성상교세포 특성을 활용해 기계학습 알고리즘의 성능을 높인 연구예요.",
            "one_line": "성상교세포 특징을 담은 기계학습 알고리즘을 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.17524",
          "title": "Model Annealing: Data-Efficient Learning through Review and Consolidation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17524"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "데이터를 다 외우고 나면 학습이 겉돌아요",
            "easy1_desc": "모델이 학습 데이터를 다 외우고 나면 남은 학습 시간 동안은 정답에 대한 확신만 지나치게 키우는 문제가 생기거든요. 이게 무슨 말이냐면, 더 이상 새로운 지식을 배우지 못하고 이미 아는 것을 반복하며 과하게 자신감을 갖게 된다는 거예요. 결국 학습 효율이 떨어지는 셈인데, 연구진은 이런 현상을 모델이 데이터를 너무 빨리 암기해 버리기 때문이라고 봤습니다.",
            "easy2_title": "모델이 스스로 배운 걸 다시 복습하게 만들었어요",
            "easy2_desc": "그래서 연구진은 남은 학습 시간을 모델이 스스로 배운 지식을 다시 복습하고 정리하는 데 쓰도록 하는 모델 어닐링(Model Annealing) 방식을 제안했는데요. 학습 과정을 여러 단계로 나누고, 각 단계마다 모델이 과거의 자신을 기억한 메모리에서 지식을 다시 배우게 한 겁니다. 이렇게 하면 모델이 단순히 정답만 외우는 게 아니라 더 튼튼한 지식을 쌓게 되는데, 실제로 여러 데이터셋에서 기존 방식보다 정확도와 견고함이 더 좋아졌다고 밝혔습니다.",
            "topic": "모델 어닐링을 통해 학습 효율을 높이고 모델의 성능과 견고함을 개선하는 새로운 학습법을 제안했어요.",
            "one_line": "모델이 스스로 복습하게 하여 학습 효율을 높이는 모델 어닐링을 제안했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": ""
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
          "canon_id": "2611.17495",
          "title": "An Operationalization of Opaque Serial Depth",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17495"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 모델이 말을 안 하고 머릿속으로만 생각하는 깊이를 재려고 했다",
            "easy1_desc": "연구진은 연쇄적 사고(Chain-of-thought, CoT) 모델 구조가 바뀌면 감시하기 어려워질 수 있다는 점에 주목했는데요. 모델이 말을 글로 바꾸지 않고 처리하는 직렬적 인지 과정의 길이를 뜻하는 불투명한 직렬 깊이(opaque serial depth)를 측정하는 지표를 만들었습니다. 뭔 소리냐면, 사람이 이해할 수 있는 병목 구간을 거치지 않는 가장 긴 계산 경로를 찾아내려고 했다는 말이에요. 이렇게 만든 자연어 기반(NL-rooted) 깊이 측정법은 학습 전의 구조나 배포 설정만 봐도 미리 계산할 수 있다는 겁니다.",
            "easy2_title": "앞으로 AI 구조가 바뀌면 속마음 깊이가 커질 수 있다는 걸 확인했다",
            "easy2_desc": "그래서 기존 공개 가중치 모델들을 살펴봤더니, NLS 깊이는 대개 층수와 강하게 이어져 있으며 최근 몇 년간 천천히 커져 왔다는 사실을 확인했는데요. 표준 변환기 구조가 계속 커져도 이 깊이는 느리게 자라겠지만, 전체 대역폭 변환기 같은 잠재적 추론 구조를 쓰면 이 깊이가 크게 늘어날 수 있다는 거예요. 지표를 미리 잴 수 있다는 장점이 있는데, 대신 개발사들이 모델의 속마음 깊이를 따로 추적하고 보고해야 한다는 번거로움도 함께 생긴다는 겁니다.",
            "topic": "인공지능 모델의 감시 가능성을 평가하기 위해 말로 표현되지 않는 직렬적 인지 깊이를 측정하는 지표를 제안하고, 여러 구조에 적용해 본 연구예요.",
            "one_line": "AI의 말로 표현되지 않는 추론 깊이를 측정하는 지표를 제안했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": ""
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
          "canon_id": "2611.17341",
          "title": "Tabular Population Priors as Structured Retrieval for EHR Medication Set Prediction",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17341"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "환자 기록으로 비슷한 사람을 찾으려 했는데 이게 맞나 싶었거든요",
            "easy1_desc": "전자의무기록(EHR)에서 약을 예측할 때 보통은 비슷한 환자 기록을 뽑아와서 대형 언어 모델(LLM)에 넣곤 하는데요. 이게 환자 기록을 통째로 주면서 약 목록을 맞히게 하는 간접적인 방식이라 좀 돌아간다는 문제가 있었거든요. 쉽게 말하면, 우리가 풀려는 건 정해진 약 이름 중에서 고르는 일인데 엉뚱하게 옛날 환자 이야기부터 꺼내고 있던 셈이라는 말이에요.",
            "easy2_title": "환자 대신 전체 통계 표를 꺼내 봤더니 성능이 확 올랐습니다",
            "easy2_desc": "그래서 연구진은 환자 개인을 찾는 대신, 훈련 데이터에서 병과 약이 함께 쓰인 빈도를 모은 표를 바탕으로 약 후보를 미리 추려내는 방식을 제안했는데요. PACERAG라는 기존 파이프라인에서 환자 검색기만 이걸로 바꿨더니 1,004개의 MIMIC-IV 평가 데이터에서 F1 점수가 0.303에서 0.338로, 자카드 점수는 0.218에서 0.237로 올랐다고 해요. LLM을 더 부르지 않아도 되고 환자 색인도 필요 없다는 장점이 있는데, 대신 전체 인구 통계에 의존하게 된다는 점도 같이 따라온다는 겁니다.",
            "topic": "전자의무기록(EHR) 약 예측에서 환자 개인 단위 대신 인구 집단 통계 표를 검색 대상으로 쓰면 더 효율적이고 정확해진다는 연구예요.",
            "one_line": "환자 기록 대신 인구 집단 통계 표를 검색해 약 예측 성능을 높였어요.",
            "topic_tag": "의료·바이오",
            "limit": ""
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
        }
      ],
      "backlog": {
        "n_waiting_all": 28,
        "oldest_day": "2026-11-17",
        "n_dropped_today": 0,
        "n_backlog_done_today": 145
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
          "new_cards": 5
        }
      ],
      "calls": {
        "summary": {
          "val": 150,
          "source": "v2_secretary/결과/논문/2026-11-22_논문.json"
        },
        "flow": {
          "val": 1,
          "source": "v2_secretary/결과/논문/2026-11-22_논문.json"
        },
        "failed": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-22_논문.json"
        },
        "http429": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-22_논문.json"
        }
      },
      "cap": {
        "val": 150,
        "source": "v2_secretary/결과/논문/2026-11-22_논문.json"
      },
      "secs": {
        "val": 902,
        "source": "v2_secretary/결과/논문/2026-11-22_논문.json"
      },
      "no_ai": false,
      "notes": [
        "arXiv cs.AI 오늘 0편",
        "arXiv eess.SY 오늘 0편",
        "1차 출처 몫: eess.SY 0/67 · cs.AI 52/52 · 허깅페이스 5/45 · 이월 93편"
      ],
      "source": "v2_secretary/결과/논문/2026-11-22_논문.json",
      "abstracts": {
        "file": "panel_abstracts.js",
        "n": 150,
        "source": "v2_secretary/결과/논문/초록/2026-11-22.json"
      },
      "split": {
        "file": "panel_papers.js",
        "n": 150
      }
    }
  },
  "machine_map": {
    "total_sections": 34,
    "counts_by_kind": {
      "run": 20,
      "separate": 11,
      "none": 3
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
        "line_out": "내보냄: 수집 대상 38곳 (v2_secretary/결과/2026-11-23_하루_전체.md)",
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
        "line_out": "내보냄: 오늘 들어온 글 961건 (v2_secretary/결과/문앞/2026-11-23_문앞교통정리_길별.json)",
        "metrics": {
          "in": 38,
          "out": 961,
          "calls": 0,
          "secs": 54.3,
          "num_source": "v2_secretary/결과/문앞/2026-11-23_문앞교통정리_길별.json"
        }
      },
      {
        "addr": "인풋-3",
        "group": "인풋",
        "name": "문 앞 교통정리",
        "files": "`gate.py` · 글 번호 `ids.py`",
        "status": "돎. 우선순위: 되살리기 > 강한 반키워드('!'·AI 강함) > 관심 키워드 > 보통 반키워드 (11-11). **11-17 세션 가-1: 길별 json 줄마다 글 번호 `id`(= 'i'+sha1(본 글 목록 k) 앞 10자, 같은 링크 = 늘 같은 번호) — 복사본 시험 통과, 깃허브 미반영**",
        "status_kind": "run",
        "editable": "`gate_rules/길_규칙.txt` · `반키워드.txt`",
        "source": "구간_주소표.md",
        "line_in": "받음: 들어온 글 961건 (새 글 164 + 이미 본 글 797)",
        "line_rule": "규칙: gate_rules/길_규칙.txt · 관심_키워드.txt · 반키워드.txt (AI 0콜)",
        "line_out": "내보냄: 거푸집1 0 · 거푸집2 0 · 뉴스 161 · 제외 3 · 논문T 0 · 모름 0",
        "metrics": {
          "in": 961,
          "out": 164,
          "calls": 0,
          "secs": 10.5,
          "num_source": "v2_secretary/결과/문앞/2026-11-23_문앞교통정리_길별.json"
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
        "line_out": "내보냄: 결과/제외보관함/제외보관함.csv (6080행 누적)",
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
        "line_out": "내보냄: 한은 표 43행 · FRED 표 18행 · DART 표 0행(오늘)",
        "metrics": {
          "in": 0,
          "out": 18,
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
        "addr": "인풋-7",
        "group": "인풋",
        "name": "지표 모으기 (시장 12개 + 전력 6개)",
        "files": "`indicators.py` → 장부 `data/indicators.jsonl`(덧붙이기만, 같은 날·같은 지표 다시 안 씀) · 받기 기록 `data/indicators_runs.jsonl`",
        "status": "돎 (11-18 세션 나, 0콜. 버전1 data.db 옛 값 7,949줄 옮김. 시장 12개는 야후 — 안 끝난 오늘 장은 뺌. 전력 6개는 깃허브 비밀값 `DATA_GO_KR_KEY`가 없으면 '열쇠 없음'으로 건너뜀. 복사본 시험 통과, 깃허브 미반영)",
        "status_kind": "run",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: `indicators.py` → 장부 `data/indicators.jsonl`(덧붙이기만, 같은 날·같은 지표 다시 안 씀) · 받기 기록 `data/indicators_runs.jsonl`",
        "line_rule": "상태: 돎 (11-18 세션 나, 0콜. 버전1 data.db 옛 값 7,949줄 옮김. 시장 12개는 야후 — 안 끝난 오늘 장은 뺌. 전력 6개는 깃허브 비밀값 `DATA_GO_KR_KEY`가 없으면 '열쇠 없음'으로 건너뜀. 복사본 시험 통과, 깃허브 미반영)",
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
        "line_out": "내보냄: 오늘 DART 표 0건 · 한은 0건 · FRED 18종",
        "metrics": {
          "in": 0,
          "out": 0,
          "calls": 0,
          "secs": 5.5,
          "num_source": "v2_secretary/결과/거푸집1/2026-11-23_거푸집1.md"
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
        "line_in": "받음: 문 앞 거푸집2 길 0건 (보도자료·리포트·연방관보)",
        "line_rule": "규칙: body.py 본문 추출(0콜) → plate2.py 글당 AI 1콜 요약 + 파이썬 원문·숫자 대조 검사",
        "line_out": "내보냄: 오늘 요약 0건 (결과/거푸집2/2026-11-23_거푸집2.md)",
        "metrics": {
          "in": 0,
          "out": 0,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/결과/거푸집2/2026-11-23_거푸집2.md"
        }
      },
      {
        "addr": "처리-3",
        "group": "처리",
        "name": "뉴스 사건 묶기",
        "files": "`news.py` → 사건 이어짐 장부 `결과/뉴스/사건_이어짐.jsonl` · 문턱 `gate_rules/중요도_설정.txt`",
        "status": "돎 (하루 AI 2콜). **11-17 세션 가-2: 사건 번호 `e<yymmdd>-<두 자리>`·어제 사건에서 이어짐(`prev`·`first_day`·`day_n`, 제목 두 글자 겹침 ≥ 0.30 출발값, 0콜) — 복사본 시험: 10짝 중 틀린 짝 1, 깃허브 미반영**",
        "status_kind": "run",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 문 앞 뉴스 길 161건",
        "line_rule": "규칙: news.py 하루 AI 2콜(A·B 독립 묶기 대조) + 없는 숫자·중복 검사",
        "line_out": "내보냄: 사건 5개 묶음 (결과/뉴스/2026-11-23_뉴스사건.json)",
        "metrics": {
          "in": 161,
          "out": 5,
          "calls": 3,
          "secs": 14.0,
          "num_source": "v2_secretary/결과/뉴스/2026-11-23_뉴스사건.json"
        }
      },
      {
        "addr": "처리-4",
        "group": "처리",
        "name": "논문 풀이",
        "files": "`papers.py`(11-17 세션 가-7: 발표일 장부 `결과/논문/발표일.jsonl` + 빈 평일 발표일이면 arXiv API 보충 · 가-9: 새로 푼 것 0편이면 흐름 글 다시 안 부름 — 깃허브 미반영) · 규칙 `gate_rules/논문_설정.txt`·`논문_주제.txt`·`논문_키워드.txt` → `결과/논문/`",
        "status": "**돎 — 11-14 깃허브 손 실행 60편 성공(낮 예약은 아직 한 번도 제때 안 시작). 11-14 세션 다: 화면 챕터 5 '논문' 탭 + v2-papers 화면 보내기 — 복사본 시험 통과, 깃허브 올림 `440273f` · 18:11 손 실행에서 아이폰 주소에 논문 탭 뜸 확인** · 새벽 `run_day` 5-1 단계(0콜 카드) + 낮 `v2-papers.yml`(풀이) (11-14 세션 나) · 그 전 (11-14 세션 가: 복사본 시험 통과 — 0콜 5일·AI 40콜 근거 일치 95.8%·97.5%·배선 6/6. 11-14 아침 손봄: 초록 날짜별 파일·출처 분야 상한·브리핑 10자리·`--from-cards`·`--revive`. 다음 = 세션 나: 새벽 바퀴엔 `--no-ai`만, AI 풀이는 새 예약 `v2-papers.yml` 낮 12~15시, 지시서 루트 `다음세션_처리4_논문.md`)",
        "status_kind": "separate",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: [11월 22일(어제) 논문 — 이 화면 기준일(2026-11-23)보다 앞선 날, 오늘 논문은 논문 풀이 뒤] 새벽 바퀴 5-1(0콜)이 모으기 원본(arXiv·허깅페이스)으로 만든 새 논문 카드 5편",
        "line_rule": "규칙: papers.py — 새벽 카드(0콜) → 새벽 바퀴가 끝나면 바로 v2-papers(백업 12:07·14:07)가 점수 순으로 편당 AI 1콜 풀이 + 근거 문장 원문 대조 (gate_rules/논문_설정·주제·키워드.txt)",
        "line_out": "내보냄: 풀이 150편(새 카드 5 + 밀린 카드 145) · 새 카드 중 대기 0편 · AI 151콜(그날 합계) · 논문 파일 마지막으로 쓴 시각 2026-11-22 04:30 (v2_secretary/결과/논문/2026-11-22_논문.json)",
        "metrics": {
          "in": 5,
          "out": 150,
          "calls": 151,
          "secs": 902.0,
          "num_source": "v2_secretary/결과/논문/2026-11-22_논문.json"
        }
      },
      {
        "addr": "처리-5",
        "group": "처리",
        "name": "해석 (수치 모델) — 계산 방법 + 보여 주는 방식",
        "files": "정식 `interp.py` → `결과/해석/<날짜>_해석.json` (계산 원본 `scratch/build_way_board.py`, 기록 `해석모델_결정판.html`)",
        "status": "돎 (11-18 세션 나, 0콜. 매일: 반복 값 걷기·거짓 경보·A·B·C·D·M02·M05·M07·M11·M12·M19, 월요일: M01·M15. 같은 장부면 견본 계산과 모든 칸 오차 0. 예측 문장 없음. 화면에는 아직 안 나옴. 깃허브 미반영)",
        "status_kind": "run",
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
        "line_out": "내보냄: 누적 연설 브리핑 30편 (결과/연준연설/)",
        "metrics": {
          "in": 30,
          "out": 30,
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
        "name": "중요도 순위 — 수식 점수 5성분(관심·여러 곳·급증·숫자·새로움)으로 뉴스 3·숫자 2·보도·리포트 2·논문 3 고르기",
        "files": "`v2_secretary/rank.py` · 규칙 `gate_rules/중요도_설정.txt`(가중치·문턱·자리 수, 전부 출발값) · `gate_rules/지표_짝말.txt`",
        "status": "돎(조용히) (11-18 세션 다, 0콜. 하루 바퀴 5-B 단계, 화면엔 아직 안 보냄 — 1부는 세션 마. 급증은 길별 json 14일치 전까지 '아직 꺼짐'. 복사본 시험 17/17, 깃허브 미반영)",
        "status_kind": "run",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 오늘 처리된 카드들",
        "line_rule": "규칙: 사용자 보류 결정 — 중요도 점수를 매기지 않고 기사 수 순서대로만 정렬",
        "line_out": "내보냄: 뉴스 사건 기사 수 순 정렬",
        "metrics": {
          "in": 5,
          "out": 5,
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
        "line_out": "내보냄: 결과/2026-11-23_하루_전체.md 외 5종 결과지",
        "metrics": {
          "in": 6,
          "out": 6,
          "calls": 0,
          "secs": 0.1,
          "num_source": "v2_secretary/결과/2026-11-23_하루_전체.md"
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
        "line_in": "받음: 2026-11-23 결과 파일들 + runs.jsonl + calls.jsonl + 구간_주소표.md",
        "line_rule": "규칙: export_panel.py 세기와 옮겨 적기 (새 공식 없음, AI 0콜)",
        "line_out": "내보냄: v2_secretary/결과/화면/panel.json",
        "metrics": {
          "in": 961,
          "out": 1,
          "calls": 0,
          "secs": 0.2,
          "num_source": "v2_secretary/결과/화면/panel.json"
        }
      },
      {
        "addr": "출력-6",
        "group": "출력",
        "name": "고른 기록 장부",
        "files": "`v2_secretary/picks.py` → 후보 전부 `data/picks/<날짜>_후보.jsonl` · 고른 것 `data/picks.jsonl`(`shown:\"안 보임\"`·`how:\"수식\"`·`rule_ver`, 성분별 재료 = 글 번호·지표 id·낱말)",
        "status": "돎(조용히) (11-18 세션 다가 채움. 같은 날 두 번 불러도 줄 안 늚, 덧붙이기만. 깃허브 쪽: `cloud_sync.py` STATE에 넣음, `.gitignore`에서 안 빠짐, `v2-daily.yml`이 `git add -A v2_secretary`로 저장. 깃허브 미반영)",
        "status_kind": "run",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: `v2_secretary/picks.py` → 후보 전부 `data/picks/<날짜>_후보.jsonl` · 고른 것 `data/picks.jsonl`(`shown:\"안 보임\"`·`how:\"수식\"`·`rule_ver`, 성분별 재료 = 글 번호·지표 id·낱말)",
        "line_rule": "상태: 돎(조용히) (11-18 세션 다가 채움. 같은 날 두 번 불러도 줄 안 늚, 덧붙이기만. 깃허브 쪽: `cloud_sync.py` STATE에 넣음, `.gitignore`에서 안 빠짐, `v2-daily.yml`이 `git add -A v2_secretary`로 저장. 깃허브 미반영)",
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
        "addr": "출력-5",
        "group": "출력",
        "name": "프로젝트 지도·파일·세션 — 어느 파일이 무엇이고 어느 대화에서 무슨 일을 했나)",
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
        "status": "돎 (앞 겹 오늘 5챕터 + 뒷 겹 기계 30구간 지도). **11-17 세션 가-5: 화면 데이터가 30시간 넘게 지나면 맨 위 경고 띠 + 실패 단계·429·시작 지연·arXiv 빠진 날 한 줄 — 복사본 시험 통과, 깃허브 미반영**",
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
        "status": "돎 (11-11부터 — 부딪힘·확신 보통·검색어 안 맞음·반키워드 많음은 대기. ~~새 출처는 안 고르면 다음 실행에 AI 판단대로 적용~~ → **11-17 세션 가-8(원장 10장 67번 갈림길 7 = A): 넣기·층 내리기 모두 고를 때까지 대기, 14일 지나면 '만료'(반영 안 함)** — 배선 시험 통과, 깃허브 미반영. 원장 10장 19번)",
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
        "status": "돎 (11-11부터 AI 자동 — 부딪히면 대기. **11-17 세션 가-8: 대기는 고를 때까지 그대로(자동 '강함' 승격 없앰), 14일 지나면 '만료' · 기계가 바로 '적용'하는 줄은 일주일 최대 3개** — 배선 시험 통과, 깃허브 미반영. 원장 10장 17번)",
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
          "num_source": "v2_secretary/결과/문앞/2026-11-23_문앞교통정리_길별.json"
        }
      },
      {
        "addr": "되먹임-3",
        "group": "되먹임",
        "name": "내 표시 (쓸모 있다/없다)",
        "files": "PC: 설정 창 '내 표시' 탭(`settings_app.py`) → `data/marks.jsonl` · **아이폰(11-18 세션 라)**: 화면 카드(챕터 3·4·5)의 '쓸모 있다/없다' → 폰 기억 `v2marks` → '표시 보내기 (n)' → 미리 채운 깃허브 이슈 `marks <날짜>` → `cloud/v2-marks.yml` → `marks.py --from-issue`(줄 `번호,g/b`만 받음, 주인 글만, 같은 이슈 한 번) → `data/marks.jsonl`(칸 id·via:\"아이폰\"·issue) → `export_panel.py` '받음' → 화면이 폰 기억에서 지움 · 읽는 곳 `source_ai.py`(되먹임-1)·`anti_ai.py`(되먹임-2)",
        "status": "반쯤 — PC 설정 창은 11-12부터, **아이폰 통로는 11-18 세션 라 만듦: 복사본 배선 시험 11/11 통과, 깃허브 미반영(실전 미확인), 실제 아이폰 확인은 사용자 몫** (원장 10장 72번)",
        "status_kind": "separate",
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
        "line_out": "내보냄: 실행 기록 20건 (최근: 2026-11-23 ok)",
        "metrics": {
          "in": 1,
          "out": 20,
          "calls": 7,
          "secs": 141.0,
          "num_source": "v2_secretary/data/auto/runs.jsonl"
        }
      },
      {
        "addr": "운영-2",
        "group": "운영",
        "name": "깃허브 주고받기",
        "files": "`cloud_sync.py` · `v2_cloud/` · `cloud/v2-daily.yml`",
        "status": "돎 (11-12 깃허브 켬·PC 끔. 끝나면 화면 2개를 공개 info-board/docs로 — 열쇠 `INFO_BOARD_TOKEN` 생기면). **11-17 세션 가: `auto_config.json`에 `mode` 칸(스위치가 적음) — 깃허브 모드면 PC의 화면 내보내기가 지난 날짜 문 앞을 다시 나누지 않음(가-6) · 하루 바퀴 5-0 단계가 본문 글자를 `data/text/<날짜>.jsonl.gz`로 남김(가-3, 하루 30~480KB, 비공개 저장소에 올라감)**",
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
      },
      {
        "addr": "운영-6",
        "group": "운영",
        "name": "제미나이 모델 순서·단종 감시 (어느 모델을 먼저 부르나 + 주 1회 구글 문서로 단종·새 모델 보기, 0콜)",
        "files": "`v2_secretary/gate_rules/모델_목록.txt` · `model_list.py` · `model_watch.py`(하루 바퀴 5-C) · 저장본 `data/google_docs/`",
        "status": "넣음 11-19(3.5-flash-lite 먼저, 3.1 예비. 원장 10장 78번) → 11-20 새벽 깃허브 첫 실전 돎(감시 첫 저장 · 3.5 503 120번) → 11-20 낮 503이면 바로 다음 모델로 고침(`fomc.py`·`daily.py`, 진짜 호출 13번 시험, 원장 10장 85번) → 11-20 13:50 오류 경우의 수 표 15줄 + 공용 규칙 `gemini_policy.py`(하루 한도·모델 없음 기억, 키 오류 제외, 4·8초 쉬고 최대 3판, 180초 제한). 가짜 33/33·진짜 4/4, 깃허브 미반영. 원장 10장 87번",
        "status_kind": "separate",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: `v2_secretary/gate_rules/모델_목록.txt` · `model_list.py` · `model_watch.py`(하루 바퀴 5-C) · 저장본 `data/google_docs/`",
        "line_rule": "상태: 넣음 11-19(3.5-flash-lite 먼저, 3.1 예비. 원장 10장 78번) → 11-20 새벽 깃허브 첫 실전 돎(감시 첫 저장 · 3.5 503 120번) → 11-20 낮 503이면 바로 다음 모델로 고침(`fomc.py`·`daily.py`, 진짜 호출 13번 시험, 원장 10장 85번) → 11-20 13:50 오류 경우의 수 표 15줄 + 공용 규칙 `gemini_policy.py`(하루 한도·모델 없음 기억, 키 오류 제외, 4·8초 쉬고 최대 3판, 180초 제한). 가짜 33/33·진짜 4/4, 깃허브 미반영. 원장 10장 87번",
        "line_out": "고치는 곳: —",
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
