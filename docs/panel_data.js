// 자동 생성 파일 (v2_secretary/export_panel.py) — 직접 수정하지 마세요.
window.PANEL_DATA = {
  "schema_version": "2.1.0-panel-v1",
  "day": "2026-11-19",
  "generated_at": "2026-11-19 10:17:43",
  "made_iso": "2026-11-19T10:17:43+09:00",
  "freshness": {
    "lines": [
      "시작 6.0시간 늦음(예약 04:07 → 10:08)"
    ],
    "pc_locked": "",
    "source": "v2_secretary/data/auto/runs.jsonl"
  },
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
  "default_wardrobe": "dose",
  "marks": {
    "repo": "",
    "got": [],
    "n_got": 0,
    "last_issue": null,
    "source": "v2_secretary/data/marks.jsonl"
  },
  "overview": {
    "in_total": {
      "val": 848,
      "source": "v2_secretary/결과/문앞/2026-11-19_문앞교통정리_길별.json"
    },
    "new_total": {
      "val": 716,
      "source": "v2_secretary/결과/문앞/2026-11-19_문앞교통정리_길별.json"
    },
    "old_seen": {
      "val": 132,
      "source": "v2_secretary/결과/문앞/2026-11-19_문앞교통정리_길별.json"
    },
    "seen_ledger_lines": {
      "val": 9978,
      "source": "v2_secretary/data/seen.jsonl"
    },
    "ai_calls_day": {
      "val": 45,
      "source": "v2_secretary/결과/2026-11-19_하루_전체.md"
    },
    "ai_fails_day": {
      "val": 0,
      "source": "v2_secretary/결과/2026-11-19_하루_전체.md"
    },
    "run_secs": {
      "val": 555,
      "source": "v2_secretary/결과/2026-11-19_하루_전체.md"
    },
    "lanes": {
      "거푸집1": {
        "val": 102,
        "source": "v2_secretary/결과/문앞/2026-11-19_문앞교통정리_길별.json"
      },
      "거푸집2": {
        "val": 47,
        "source": "v2_secretary/결과/문앞/2026-11-19_문앞교통정리_길별.json"
      },
      "뉴스": {
        "val": 190,
        "source": "v2_secretary/결과/문앞/2026-11-19_문앞교통정리_길별.json"
      },
      "제외 보관함": {
        "val": 238,
        "source": "v2_secretary/결과/문앞/2026-11-19_문앞교통정리_길별.json"
      },
      "논문T": {
        "val": 73,
        "source": "v2_secretary/결과/문앞/2026-11-19_문앞교통정리_길별.json"
      },
      "모름": {
        "val": 66,
        "source": "v2_secretary/결과/문앞/2026-11-19_문앞교통정리_길별.json"
      }
    },
    "last_auto_run": {
      "day": "2026-11-19",
      "start": "2026-11-19 10:08:28",
      "by": "github",
      "where": "GitHub",
      "mode": "run",
      "end": "2026-11-19 10:17:43",
      "secs": 555,
      "exit": 0,
      "result_md": true,
      "failed_stages": 0,
      "calls": 45,
      "result": "ok"
    },
    "last_auto_run_source": "v2_secretary/data/auto/runs.jsonl",
    "papers": {
      "day": "2026-11-18",
      "day_label": "11월 18일(어제)",
      "made": "2026-11-18T11:04:47",
      "calls": 151,
      "same_day": false,
      "source": "v2_secretary/결과/논문/2026-11-18_논문.json"
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
          "id": "e261119-01",
          "rank_by_count": 1,
          "name": "엔비디아 젠슨 황 복귀 논란",
          "easy": "엔비디아 직원들 사이에서 젠슨 황의 복귀를 바라는 목소리가 커지고 있습니다. 블라인드 게시글 분석 결과 직원 56%가 복귀를 지지하는 것으로 나타났는데요. 젠슨 황 본인도 이사회가 요청하면 복귀할 수 있다는 뜻을 내비쳤습니다.",
          "quote": "젠슨 황 \"이사회 요청시 엔비디아 복귀\"…사임 후 첫 공개 발언",
          "member_count": 9,
          "sample_articles": [
            {
              "n": 212,
              "title": "젠슨 황 \"이사회 요청시 엔비디아 복귀\"…사임 후 첫 공개 발언 - SBS 뉴스",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9HN2tYWjBraFN4ajRMZVRzLTZtdHFGQ1VoNW5KMklEbG9pUW5DWnpwYWlxWjE3a2tJY0FOMmIzOUZ3ZU5maDJKR0NSMThCWkdFdDd1R1RZcnRPSTlpUWdVWGZuU1J3aHVlQ0E?oc=5"
            },
            {
              "n": 106,
              "title": "\"젠슨 황 아니면 안 된다\"…엔비디아 직원들 복귀 지지 56% - 주간조선",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE90VE1NLTd5RVVkMTBzLTdSZnVhTHNQemZLbGROREdrZ2lIamc0VW1UNGJ3WTBpTF9yRXFNWkxXOFltSkdYX3BSWDlTX3NDN3N2RG9LaDRsLS15Q2RORWttQm5IV2FyUU04dDFF?oc=5"
            },
            {
              "n": 110,
              "title": "“엔비디아 재직자 절반 이상, 젠슨 황 복귀 희망”···블라인드 게시글 분석 - 경향신문",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5kYUhYWUZZamt3LW94RVRONFZGVlByMnNmaGVmZElhZlMxenBHaXNzUEpVY0tUd0d1d0RzRC03aTdWN1hpQUx4SzRHRFN4a3FDYnVUMjEwT05aZ9IBX0FVX3lxTFB4cW96SnhONWdRU2R1cHBvb2lEWF9mWGZMUnYtbTJDYmJiU1pFdk5YSWkzZl8taGJOdU5QcFdWVks5TXJScnU4NTM3SEVCZWNvX3RJejhBazhoVEhzcnhB?oc=5"
            },
            {
              "n": 209,
              "title": "젠슨 황, 엔비디아 3분기 실적 발표 직전 첫 발언 - BeInCrypto",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMidkFVX3lxTE1pUzlEUUh2c3hSbEZNT1N4NVRobzZiU1dZejB4TVVZSE1XbDVSSVBmcGdKSkh4am15NWZISkFneWFhYUVQNmYtMkpOcWt5WmlvRGVxSlZkamdpdHJHeUljQmFaZ1pjZk92RVpuRHBqbzVwNTdpdFE?oc=5"
            },
            {
              "n": 205,
              "title": "젠슨 황 \"이사회 요청시 엔비디아 복귀\"…사임 후 첫 공개 발언 - 연합뉴스",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9pSWlHdW45OGVKOXFvdDlHMGdZSlR0bGZrS2hNeGF0YmIyOVU1MmhQOHdobUpZVjdwU1B1QnBnOUJVUlJORGRydTQyYmxMaFBFdlNobmtabldiVUnSAWBBVV95cUxOZ0kxc2pWUi1jc2JoSEtiY3RneE1iWGlWcE1FNFpOMHVpVXhZazNlVkpSTVc2Q1JTaW9DZ3FZcVBmSlBjM1BlMUZzczF2R3BuY1k5cDEzb09qUmR2QlZTVlQ?oc=5"
            },
            {
              "n": 105,
              "title": "엔비디아 전사회의서 조직 수습 총력…'포스트 젠슨 황' 체재 준비 - 전자신문",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFBScURseXZFUGY1SHFZdUZBejMybjBnYmlGWGJYT1B4VlFGOW5kTEdpakw4LUVDaTZWTFRWazJJRTZ4QmJTWWg1bjBfdFY0QQ?oc=5"
            },
            {
              "n": 107,
              "title": "엔비디아 직원 56% \"젠슨황 복귀 원해\"…후임 후보 이언 벅 선두 - 연합뉴스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE8wUHJkcm02a1lHM2hiVW81WE1tLXg1UWhZSXZQakFrRVREamJjdVdwU0EzWkJrMURJcDZ5d0huSVF2cS1vbHE4QmNQd3RfM3pmby1ONVdNNUl0dVXSAWBBVV95cUxQMVU4R05JUS1oNThSanZZY2V2V09QUUFYU2RJcm5yZlQ0N3pIY05zcDIxUGZFWG1rQ0ZaWklFTXp3cHVUNHpjdEJUb19uQ2pMTmM1dmNLOERsTkdOYUp3bkE?oc=5"
            },
            {
              "n": 109,
              "title": "\"엔비디아는 젠슨 황 왕국\"…폭언·초고속 승진에 내부 불만 - 한국경제",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5zc2ltZDVQTHZGWkpvVnVQdkFNbDZ0TmNaZG5oSy1VZTNoX2JBZGdTaVMzMTRNLWJKcTNlZzZpb3hPV3JwRThKdHYyN2J5ODVnVUkya1Y3eUVrdw?oc=5"
            },
            {
              "n": 104,
              "title": "엔비디아 직원 56% \"젠슨 황 복귀 원한다\"…차기 CEO 후보는 누구? - KBC광주방송",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFBlQnd0ZTExMGdaSk4yYnBGMmM5N0ZXU0EwQU5ud1Z3R1FMazZyUHVQcWxMM2UyN0pSOU1BcXc3N1NkSWJsdHg0UWxWOEpOT0E1WE93X1ZuamREcnFFN3gyUTBn?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-02",
          "rank_by_count": 2,
          "name": "미 연준 추가 금리 인상 공감대",
          "easy": "미국 연방준비제도 위원들이 인플레이션이 여전히 높다고 보고 추가 금리 인상이 필요하다는 데 뜻을 모았습니다. 일부 위원은 한 번에 0.5%포인트 올리는 빅스텝까지 거론했는데요. 12월에도 금리를 올릴 가능성이 높다는 전망이 나옵니다.",
          "quote": "미 연준, 추가 금리 인상 공감대...일부 위원 '빅스텝' 거론",
          "member_count": 7,
          "sample_articles": [
            {
              "n": 158,
              "title": "바 연준 이사 \"인플레 지나치게 높아…추가 금리 인상 적절\" - 연합인포맥스",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE4wVk8xLWxVTWRhTzduUWJRSzdGbmphMXVpbVdxYWV0X1g5NGVNNGZlQlQ3dGgwLXV0ek9OcldRTnE0dWc5bXRxaVBWc20zZ1JVc1E1T29KUEhPd2FOQjMtdnljUVlkV1ptNFJqR0dDS3Q?oc=5"
            },
            {
              "n": 160,
              "title": "미 연준, 추가 금리 인상 공감대...일부 위원 '빅스텝' 거론 - YTN",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE1ORnhHczc2ZzZDbWZJbG5tNmMwLVVqVDhMTXU0MzFTb05zNkRlbFFqZkRfR2YtVWNtT1AtSkt0MkdTaWRYc3ZJVHN1dmFocDFEVVJIazB0TXVudDJMRlE?oc=5"
            },
            {
              "n": 161,
              "title": "10월 FOMC서 추가 금리인상 공감대…일부는 '빅스텝' 거론 - 연합뉴스",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9xUlpMVnBrQkszdFhEZ0xJZTNoNndNTm9YMFg5TDBKdjhjdWtsTGhrdG5OemV0VEdIZTJNLVhZV0hUc2Q3N2xabWJjdk8zanJyT1l6RjdkX0FWdDZaNEtsNNIBYEFVX3lxTE9xUlpMVnBrQkszdFhEZ0xJZTNoNndNTm9YMFg5TDBKdjhjdWtsTGhrdG5OemV0VEdIZTJNLVhZV0hUc2Q3N2xabWJjdk8zanJyT1l6RjdkX0FWdDZaNEtsNA?oc=5"
            },
            {
              "n": 164,
              "title": "연준, 추가 금리인상에 무게…일부 위원 '빅스텝' 가능성도 열어둬 - www.ebn.co.kr",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE83cTNYMVVnVDl0aXhlYkVLeFR4ZmtVc1lBSW5rLU0zay13NlFvOHZRdHNDLVZMaXlVeUNOaU1qX0d3NlRfNTNwdU5MOWo2WXdnY3NZc3NPdzlkT29SZk02azdDZXhqTjcy?oc=5"
            },
            {
              "n": 159,
              "title": "연준 의사록 보니… “금리 더 올려야” 거의 한목소리, 12월 ‘빅스텝’도 거론 - 조선일보",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPM3ZveEtXbE1jSTdUcFM4UDZaSzNrVDNDcHUxdnhQVW5lTWZfcTQxYW5sa1JaVGgzLVdQTEl2Qi0wd3lScWo5MjdJRGJJNXU0NjBfUUJ0blBlX1h4TkZhdV96anBlVmZsVXc2Y1lYcmlxTHhsemdzRHdDRXhoOXpqTTBDVzd0VUto?oc=5"
            },
            {
              "n": 163,
              "title": "美 연준, 추가 금리 인상에 폭넓은 공감대…빅스텝도 거론 - 글로벌이코노믹",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPengtamU0TXducmRkLWNnRFV3amFRM0VETWllYlpXSGFOQ2lLVE1Cem1pYlFSVDFsMTAtQWUwbmdwbVJWUVlaYXF1S1hleHBqelVuc0wteTZHSS0xdllPQzcxbG96c3dIazUyU2tEZ2ZWYnlkaUFVckVmMkRlSjNmZTd1X0hleVZ3?oc=5"
            },
            {
              "n": 165,
              "title": "美연준, 12월 금리인상 사실상 예고…‘빅스텝’ 가능성도 열어뒀다 - 헤럴드경제",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBGdmI2ZUFZWGJfejRQNWRKY2pITTl0VHdzTzNUMkFLT1FmVEthV090SHZITXJnMFNnRTFlUDMxQWlsR1NBZUtOeDJQTk9vLTBrRmZwd0dB?oc=5"
            }
          ],
          "flags": [
            "원문에 없는 숫자 0.5"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-03",
          "rank_by_count": 3,
          "name": "홍의락 가스공사 사장 요금 인상 촉구",
          "easy": "홍의락 한국가스공사 사장이 가스요금을 올려야 한다고 거듭 강조했습니다. 현재 미수금이 14조 원을 넘어섰고, 요금을 올리지 않으면 1년 뒤 미수금이 4조 원 더 늘어날 수 있다는 우려 때문인데요. 국민들의 이해를 구하며 요금 현실화가 필요하다는 입장입니다.",
          "quote": "홍의락 가스공사 사장 \"가스요금 올려야…1년 미수금 4조원 증가할 수 있어\"",
          "member_count": 6,
          "sample_articles": [
            {
              "n": 131,
              "title": "홍의락 가스공사 사장 \"가스요금 올려야…1년 미수금 4조원 증가할 수 있어\" - 부산일보",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTFBsSFduRU1Jd3ZWTXdSTlVVeVU4ZGFuY0xQT1lzZU5BTjBFUjFNT1BQRDFzamhEZEZwMGRCcTdYRk15alZkTGpDOW1yREFFYVdOUFJxTFNwLTJYbDd5bU1XRXEwcDhoZ1EwaGhKWC1qdHR4RmJX?oc=5"
            },
            {
              "n": 149,
              "title": "홍의락 가스公 사장 \"가스요금 인상해야…국민들이 이해할 것\" - 뉴시스",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTE1RNldJeGpiVXpRRVg0WlBVNm91Nk1fNzlKbzlYTG5HVDJDNVFGeDY3REg5bE9KeUg5aWRXS2xZQm9tREZwSXpETXRVcTlCcjNoQ08xS2dFakI4LU1EQXhPd3ViaW9fMjdOTm5zMUVzQnpyTWlGZW03ZNIBeEFVX3lxTE1RNldJeGpiVXpRRVg0WlBVNm91Nk1fNzlKbzlYTG5HVDJDNVFGeDY3REg5bE9KeUg5aWRXS2xZQm9tREZwSXpETXRVcTlCcjNoQ08xS2dFakI4LU1EQXhPd3ViaW9fMjdOTm5zMUVzQnpyTWlGZW03ZA?oc=5"
            },
            {
              "n": 148,
              "title": "홍의락 가스공사 사장 \"가스요금 인상 필요\"…미수금 14.6兆 - 매일일보",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1xMWMzWWtKNC1oMTk5ano3eUR3LU9Sa2FWNE9pT0kzVGlkdmw0QkhtR2J6akRoblktalJLNXcxMW1waDN6Wjk1QjZYUDRyYWRDZUFVYlVadEZRV0RVYlY1ZlhoOWc?oc=5"
            },
            {
              "n": 134,
              "title": "홍의락 가스공사 사장 \"미수금 14조…가스요금 인상해야\" - 뉴스핌",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE14R0dUNmxONnNVT1ltOXJzdFNtcGl1SWlXck4ybnlRT0NxUEpXVjhlbFdmVkVSUjFKMjNLZ0FoWHR0cDJmejJMMW5JTXpkY21ma2dOR2o1aUl3RmRH?oc=5"
            },
            {
              "n": 146,
              "title": "가스공사 사장 \"가스요금 인상해야…1년 미수금 4조원 늘 수도\" - 연합뉴스",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFBYdWtXZ1FSNm9DS0xuS0J0akxnZGNZUTdORXlSclFSWXEwM2I4SVhva1Q5LUV4WjlRVTBIc0NzVlQ3eHN1Ny1fMnh3cHlJYkxjMk43dndSNUpmMkNRb3JucdIBYEFVX3lxTFBYdWtXZ1FSNm9DS0xuS0J0akxnZGNZUTdORXlSclFSWXEwM2I4SVhva1Q5LUV4WjlRVTBIc0NzVlQ3eHN1Ny1fMnh3cHlJYkxjMk43dndSNUpmMkNRb3JucQ?oc=5"
            },
            {
              "n": 143,
              "title": "가스공사, LNG 도입구조 개편…홍의락 \"가스요금 인상 필요\" - 진일보 | 전남일보",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9jQkRwN1hiejFSNDliNEx6WjBsaTBtd0pqbV9EeUMzVy15TW9Rcm1rNzg0V2w2UlY2WHFOcGZUampScWlnRjJlVlBYMkFsYV9vUUhrcDZDMUJLbW1INWZCR3lVQTBiTFFXVnF5M2x5aw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-04",
          "rank_by_count": 4,
          "name": "원전 차액계약제 도입",
          "easy": "내년부터 원자력 발전 전력 가격을 미리 정하는 정부승인차액계약 제도가 도입됩니다. 전력 시장의 정산 체계를 선진화하려는 목적인데요. 한전과 한수원 등 주요 전력 기관들이 이 제도를 통해 원전 전력 가격을 사전에 확정하게 됩니다.",
          "quote": "내년부터 원전 전력가격 미리 정한다…한전·한수원, 차액 정산",
          "member_count": 5,
          "sample_articles": [
            {
              "n": 58,
              "title": "내년부터 원전 전력가격 미리 정한다…한전·한수원, 차액 정산 - 뉴시스",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTE5oWGVNQnFlMmptRFFWRzk4MF9pZHltZXZJY2xPVlpyRVJ3VFFxS3hKS1FBSnhiQkt0bl9WV1FPd2JiZjNqUHpHZkRlOVBwaHdhZjZxaEZVa3RveFNaTUVXZUFhZ1FUb1FnWVZLLUdySnoxMzl3dThCatIBeEFVX3lxTE5oWGVNQnFlMmptRFFWRzk4MF9pZHltZXZJY2xPVlpyRVJ3VFFxS3hKS1FBSnhiQkt0bl9WV1FPd2JiZjNqUHpHZkRlOVBwaHdhZjZxaEZVa3RveFNaTUVXZUFhZ1FUb1FnWVZLLUdySnoxMzl3dThCag?oc=5"
            },
            {
              "n": 57,
              "title": "내년부터 원전 전기값 미리 정한다…\"전력시장 선진화 일환\" - 연합뉴스TV",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1lUFVBcTVScWdrbXdERHNjWG14WlhIWnBUYkFRY0djTXR5VjVfMUFpOXFpa3o0bUpjdWxaQlRHSDByWWFyU2syNWsyOVdEZ0EzSW1WUlhIZUxveE14cDV5TDRRcGpDRmM?oc=5"
            },
            {
              "n": 56,
              "title": "내년부터 원전 차액계약 적용한다… 주력 전원 최초 적용 - 에너지데일리",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE8zZHdYSGxmMXZSN2NjRFlRVm9ZeldwRUFlbkktam11MXczOHoyaFBKaEF3UWNyNmJKb1lvZUZyY0lRcWxQeXlVX2kyNXllaXEybXpWX1JiQUpwNzg3VFpXMFRVeHhnNHVienloRTF1LUQ5QQ?oc=5"
            },
            {
              "n": 60,
              "title": "내년부터 원전도 ‘차액계약’ 적용 “전력시장 정산체계 바뀐다” - 인사이트N파워",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE80RGpkMDYwNkpxUU8ydVBxWEF3X193REUzM3FZcHFIcEhlWDh3bnFRbG42V3ZqVkFLcDRXMVVjWmhCdDQ2bWdoWGFfNEREZnJDMWVZVmR5N2R6bUo4ZURXNm5kcWdOdw?oc=5"
            },
            {
              "n": 63,
              "title": "내년부터 원전 전력가격 사전 확정…‘정부승인차액계약’ 도입 - 서울경제TV",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBTdDZkaUI0V01GUm5ub2hqMThWc3R3RWZyVXhncnh3QzRxLUxGZUZNUmRoYWhLWTRyb2pGNDBMWFFicGNsZS1jdkNWNlR3eEZjZEVpZnhlREI0UHFSVGNWMm1ob2I?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-05",
          "rank_by_count": 5,
          "name": "포항 배터리 국제 콘퍼런스",
          "easy": "포항에서 배터리 산업의 미래 전략을 모색하는 국제 콘퍼런스가 열렸습니다. 배터리 시장의 일시적 수요 정체인 캐즘 현상을 극복하고, 북유럽 국가들과 공급망 협력을 강화하는 방안이 논의됐는데요. 포항을 글로벌 배터리 거점으로 키우겠다는 계획입니다.",
          "quote": "'배터리 캐즘 대응 전략 모색'…포항 배터리 국제 콘퍼런스",
          "member_count": 5,
          "sample_articles": [
            {
              "n": 195,
              "title": "'배터리 캐즘 대응 전략 모색'…포항 배터리 국제 콘퍼런스 - 뉴시스",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTE54UndoR09aWU1oWmdMRkdiWjVSVnNQOVp1RW1KMkk1MlZ6VlNXOXB5OXpDRXl3ZS0zajlOZTE3anNkZFVRQkJFVkNGUVZlOV9ELWVqQWlOSGN6NmxtVEdfY0FqcFlBX1VXZW9WVlBTcTgxb2FZazRDOdIBeEFVX3lxTE54UndoR09aWU1oWmdMRkdiWjVSVnNQOVp1RW1KMkk1MlZ6VlNXOXB5OXpDRXl3ZS0zajlOZTE3anNkZFVRQkJFVkNGUVZlOV9ELWVqQWlOSGN6NmxtVEdfY0FqcFlBX1VXZW9WVlBTcTgxb2FZazRDOQ?oc=5"
            },
            {
              "n": 193,
              "title": "포항, 글로벌 배터리 공급망 협력 거점 도약 모색…북유럽 3국과 전략 논의 - 아주경제",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBXU0NZaVlGeDRNbUJraXBtMUVCcnptTWN5YTBjc2JpblEtSEpfdG9RWWpaX0V0SndENGlwbmtOdF8tYkx6V0pTelNZamFHdmo0dzRNRmYxejjSAVhBVV95cUxQV1NDWWlZRng0TW1Ca2lwbTFFQnJ6bU1jeWEwY3NiaW5RLUhKX3RvUVlqWl9FdEp3RDRpcG5rTnRfLWJMeldKU3pTWWphR3ZqNHc0TUZmMXo4?oc=5"
            },
            {
              "n": 191,
              "title": "포항 배터리 국제회의서 소재 경쟁력·북유럽 공급망 협력 논의 - 경북일보",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5wajFYU1hXUzByT2xDZW1HMTFXRjVGNjJEOXA4RkJCYTg4VW5OY3pTOGh4OFhadXB6ZDJqQWVqcWdtQWhIcm1tc05LeUx0VFFack5UMVJrSFBWaDh2bjNNbGh2N3ZzemZnaEFLX0gwaw?oc=5"
            },
            {
              "n": 194,
              "title": "배터리 선도도시 포항 국제컨퍼런스 개최…캐즘 대응 미래 전략 모색 - 데일리대구경북뉴스",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTFBRMXo2OUZmOFJ0Nno3c0xqNHJnS01uMnZJQUctMFQwZ3B1YUExdldDa3J3dTZnS2ZSUGE3VURzOER2OFNXTTI2aHYzdUJNU010WjlpcUtRNTFUQkE4YWpoSmtBV2JNUQ?oc=5"
            },
            {
              "n": 196,
              "title": "배터리 캐즘 돌파구 찾는 포항…북유럽과 공급망 협력 모색 - www.hidomin.com",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE14ZUpyZngtcVUzWVNDQWc0M1I2MlozTVdmS1ZhbzJMVzNPY2ZWOVc2cUY5YWJ2cVVudFE3YlNXNjY5RDNycE85VG85eEhLUnRjUWstUWNXX3FXUTFwVnhTRVZuajBQMjFCVGc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-06",
          "rank_by_count": 6,
          "name": "핵융합연 초전도자석 기술 협력",
          "easy": "핵융합에너지연구원이 초전도자석 기술 개발을 위해 산학연 전문가들과 머리를 맞댔습니다. 핵융합 발전의 핵심인 초전도자석 기술의 방향을 논의하고 협력을 강화하기 위한 자리였는데요. 미래 에너지 기술 확보를 위한 행보로 풀이됩니다.",
          "quote": "핵융합연, 초전도자석 기술개발 방향 논의…산·학·연 협력 강화",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 181,
              "title": "핵융합연, 초전도자석 기술개발 방향 논의…산·학·연 협력 강화 - 아주경제",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFB2dUJIWmZua3FFR0ZYck1OZ0pINUpUdXZCRXhPc29jSW5pVVVLOUVEdGhxS29ETzE4VTR5NzlpS0lVN1gxMzJLMFpycjVUc0pNZUlFMGsydknSAVhBVV95cUxQdnVCSFpmbmtxRUdGWHJNTmdKSDVKVHV2QkV4T3NvY0luaVVVSzlFRHRocUtvRE8xOFU0eTc5aUtJVTdYMTMySzBacnI1VHNKTWVJRTBrMnZJ?oc=5"
            },
            {
              "n": 174,
              "title": "핵융합연, 핵융합 초전도자석 전문가 워크숍 - 충청뉴스",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBMLXhrRFEwSUhlRHJOLWt5WVdya2QwRTJMNlZuQnBNeC1EdnRTWVpjR0IwNGI4aG9OclB6amtEZksweUZtNkZ3N1BYdkd4b1JGX2lwRWx5MXU3enRrS0hyMkxndFF1Ql9keTBFdQ?oc=5"
            },
            {
              "n": 180,
              "title": "핵융합에너지연구원, 초전도자석 개발 위해 산·학·연 전문가 ‘한자리’ - 에너지플랫폼뉴스",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTFA4eUpVdWFZTFZkdzBLSXRGc0JtLXdEejhFeEdvdDl5Z2VJclFvbEpUMmFZcjVJRHlMTjE3T21jUS00MUdTMl9mWW9SWW9QU3p6LWJ2SlFWN3NBLUFrSUxOdEF5N1M0WmlRTkZCSlpZOG_SAXBBVV95cUxQOHlKVXVhWUxWZHcwS0l0RnNCbS13RHo4RXhHb3Q5eWdlSXJRb2xKVDJhWXI1SUR5TE4xN09tY1EtNDFHUzJfZllvUllvUFN6ei1idkpRVjdzQS1Ba0lMTnRBeTdTNFppUU5GQkpaWThv?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-07",
          "rank_by_count": 7,
          "name": "SK하이닉스 주가 급락 집단소송",
          "easy": "미국 대형 로펌이 SK하이닉스 주가 급락과 관련해 집단소송 조사를 시작했습니다. 투자자들의 손실을 보상받기 위한 절차로 보이는데요. 최근 SK하이닉스 주가가 크게 떨어지면서 투자자들의 불만이 커진 상황입니다.",
          "quote": "[단독] 美 대형 로펌, SK하이닉스 주가 급락 ’집단소송’ 조사 착수…투자자 손실 보상 추진",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 26,
              "title": "[단독] 美 대형 로펌, SK하이닉스 주가 급락 ’집단소송’ 조사 착수…투자자 손실 보상 추진",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2182611"
            },
            {
              "n": 88,
              "title": "[단독] 美 대형 로펌, SK하이닉스 주가 급락 ’집단소송’ 조사 착수…투자자 손실 보상 추진 By The Guru - Investing.com 한국어",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE0yVkVjelhXRFpDTWdzTml3SGJoSk1xZ1E3VlZGTlMwYVhVT2c2VGZjRmlEVlhxVDYzdkRSV0gxQ0t6VXppbzdKOUhTVlM5a0JtNXFLTzlrdGQ0UmplcEtGLWg2cHk5TUd1eVVnNG04TXE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-08",
          "rank_by_count": 8,
          "name": "지역별 전기요금 차등제 보류",
          "easy": "정부가 추진하려던 지역별 전기요금 차등제 도입 논의가 잠정 보류됐습니다. 태양광 업계의 반발이 거셌기 때문인데요. 정부는 일단 한발 물러나 상황을 지켜보겠다는 입장입니다.",
          "quote": "정부, '지역별 전기요금 차등제' 보류…태양광 반발에 한발 후퇴",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 133,
              "title": "정부, '지역별 전기요금 차등제' 보류…태양광 반발에 한발 후퇴 - 뉴스투데이",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE84WEZ3cHFzc0V6U2VzVmVQcFlwRllRWEVyOWVaUGlHbnUtQ3prTDBsTTJ3Mm92Y1NfVFpMdlE4MkhEaFVhYjhudVBrbmlzUWlBbHVCYnVQemVzWTdqVlE?oc=5"
            },
            {
              "n": 132,
              "title": "태양광업계 반발 직면…정부 ‘지역별 전기요금 차등제’ 도입 논의 잠정 보류 - 쿠키뉴스",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE14SGxwaEFYWENBbmpxSkNtRDJ3SUFHTDExazRQMjBkdGhPVTV6ekZ2OGJkZ25qRVlEMm44Tjk4REpsVTZpUmNrU1E1OGkzQko3RnRHOUNyMllTUko3ZHZpMmY3Zw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-09",
          "rank_by_count": 9,
          "name": "삼성전자 제7노조 광주노조 출범",
          "easy": "삼성전자의 7번째 노조인 광주노조가 공식 출범했습니다. 호남 지역에 반도체 사업장이 조성되면 DS 부문으로 노조를 확대하겠다는 계획인데요. 지역 내 반도체 사업 추진과 맞물려 노조의 영향력이 커질 것으로 보입니다.",
          "quote": "삼성전자 '7노조' 광주노조 출범, 호남 반도체 조성 후 DS 확대 추진",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 96,
              "title": "삼성전자 '7노조' 광주노조 출범, 호남 반도체 조성 후 DS 확대 추진 - 뉴스핌",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE5kQkQzc0tWSURVVERSOWw0TmtueGlJT195dEpNcXR0TGJNTlFtVFgwZC1rdW1TSlpmNlZxMzh2YVpWbW45S3Ffd2hWOXRUWS0zQ3ZEMHpwWW9JR0Nm?oc=5"
            },
            {
              "n": 101,
              "title": "삼성전자 제7노조 '광주노조' 출범…호남 반도체 사업 땐 DS로 확대 - 글로벌이코노믹",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMihgFBVV95cUxNZ3F1VWxKdGxSTzFZcTBDdVYybHF0b0trZF9fdFdHbjlVLUs4X19WQ0pWQkJCTWhjYjlCdWprZEJHQndEaGhJMjRxaXZaa0hoTWljVlBwUVY3WHJBVXEtemdpbFdpeXpITjA2VF9CdUtBZU8yMGJ6N1p6SVlueDVrcGc1cHNHUQ?oc=5"
            }
          ],
          "flags": [
            "예측 의심: 지역 내 반도체 사업 추진과 맞물려 노조의 영향력이 커질 것으로 보입니다."
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-10",
          "rank_by_count": 10,
          "name": "펩트론 비만치료제 임상 승인",
          "easy": "펩트론이 월 1회 투여하는 비만치료제 PT403에 대해 임상 1상 계획을 승인받았습니다. 기존 치료제보다 투여 주기를 대폭 늘린 것이 특징인데요. 이번 승인으로 신약 개발에 속도가 붙을 것으로 보입니다.",
          "quote": "펩트론, 월 1회 세마글루타이드 'PT403' 임상 1상 IND 승인",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 831,
              "title": "펩트론, 월 1회 세마글루타이드 'PT403' 임상 1상 IND 승인 - 히트뉴스",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTFB1ZTlhR2pHamdsZVVHOWZCX19zdUZGd0dnOWU5Y09MenlPS2J1SWU0aGFORDZHSjk2bTRFRHhXLW1USFJ0elZKSTEwbHZkem03eFF0RzRxOGNnQzJnTEh0SWFZaFBqRUZWYlhV?oc=5"
            },
            {
              "n": 835,
              "title": "펩트론 '월 1회' 비만치료제 임상 1상 IND 승인 - 전자신문",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1ITTNXVUhDWXdENjBCb2tsbXlqelVKQUFYeHFkY3RGbGxCVkVCOU45ck9jYjZmaldfRzJuX1FoVU9IeWliTVRBVjlEeEJYQQ?oc=5"
            }
          ],
          "flags": [
            "예측 의심: 이번 승인으로 신약 개발에 속도가 붙을 것으로 보입니다."
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        }
      ]
    },
    "ch2_numbers": {
      "title": "챕터 2 · 숫자 (거푸집1)",
      "addr": "처리-1",
      "status": "돎 (AI 0콜 · 정규식 추출 + 공식 API 대조)",
      "counts": {
        "gate_in": {
          "val": 102,
          "source": "v2_secretary/결과/문앞/2026-11-19_문앞교통정리_길별.json"
        },
        "dart_day_total": {
          "val": 99,
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        "dart_contracts": {
          "val": 14,
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        "dart_others": {
          "val": 85,
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        "fred_series": {
          "val": 15,
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
      "dart_contracts": [
        {
          "company": "삼호개발",
          "market": "유가",
          "what": "단일판매ㆍ공급계약 체결",
          "amount_won": "33,992,000,000",
          "pct_of_sales": "8.30",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "경남 고성군 고성읍 대평로173",
          "period": "2026-11-17~2031-12-31",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118800525",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "코윈로보틱스",
          "market": "코스닥",
          "what": "2차전지 자동화시스템 공급",
          "amount_won": "79,643,618,568",
          "pct_of_sales": "39.59",
          "pct_check": "맞음",
          "counterparty": "글로벌 대형기업",
          "region": "-",
          "period": "2023-09-11~2027-11-30",
          "changes": "2. 계약내역 확정계약금액 계약금액 총액(원) 매출액 대비(%): 104,203,031,224 104,203,031,224 51.80 → 79,643,618,568 79,643,618,568 39.59 ; 10. 기타 투자판단에 참고할 사항: - 계약금액은 외화(USD 78,148,366.00) 로 발주일(2023년 9월 11일)의 국민은행 최초 매매기준율로 환산한 금액입니다. → - 계약금액은 최초 외화 금액 USD 78,148,366.00에서 외화 금액 USD 59,729,727.44로 변경되었으며, 발주일(2023년 ",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900528",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "제노코",
          "market": "코스닥",
          "what": "[항공우주] 소해헬기 체계개발 인터컴(ICS) 개발",
          "amount_won": "3,319,803,200",
          "pct_of_sales": "6.55",
          "pct_check": "맞음",
          "counterparty": "한국항공우주산업(주)",
          "region": "한국항공우주산업(주) 사천본사",
          "period": "2023-05-04~2027-04-30",
          "changes": "5. 계약기간 -종료일: 2026-11-23 → 2027-04-30 ; 6.주요 계약조건 -계약금,선급금 유무 -대금지급 조건 등: - → -계약금,선급금 유무 : 유 -대금지급조건 등 : 착중도금",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900483",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "비에이치아이",
          "market": "코스닥",
          "what": "LNG 복합화력 발전설비 공급계약",
          "amount_won": "65,413,768,000",
          "pct_of_sales": "16.2",
          "pct_check": "맞음",
          "counterparty": "두산에너빌리티",
          "region": "국외",
          "period": "2025-10-31~2029-02-28",
          "changes": "2. 계약내역: 확정 계약금액 : 70,590,720,000 계약금액 총액(원) : 70,590,720,000 매출액 대비(%) : 17.4 → 확정 계약금액 : 65,413,768,000 계약금액 총액(원) : 65,413,768,000 매출액 대비(%) : 16.2 ; 10. 기타 투자판간에 팜고할 사항: 1. 최근 매출액은 2024년도 말 연결재무제표 기준입니다. 2. 계약금액은 USD 49,600,000이며 '25-10-31 기준 1USD=1, → 1. 최근 매출액은 2024년도 말 연결재무제표 기준입니다. 2. 계약금액은 USD 48,860,000이며 '26-11-18 기준 1USD=1,",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900419",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "빅텍",
          "market": "코스닥",
          "what": "K2 전차 PBL사업 피아식별기 등",
          "amount_won": "5,445,300,800",
          "pct_of_sales": "7.61",
          "pct_check": "맞음",
          "counterparty": "한화시스템 주식회사",
          "region": "한화시스템 주식회사(구미)",
          "period": "2025-11-07~2028-02-29",
          "changes": "5. 계약기간 종료일: 2028-05-31 → 2028-02-29",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900317",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "빅텍",
          "market": "코스닥",
          "what": "K21 장갑차 피아식별기 외 4차 양산",
          "amount_won": "17,129,825,000",
          "pct_of_sales": "31.18",
          "pct_check": "맞음",
          "counterparty": "한화시스템 주식회사",
          "region": "한화시스템 주식회사(구미)",
          "period": "2024-12-23~2028-07-31",
          "changes": "5. 계약기간 종료일: 2028-05-31 → 2028-07-31",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900315",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "그린광학",
          "market": "코스닥",
          "what": "센서부 등 3종",
          "amount_won": "3,802,360,000",
          "pct_of_sales": "9.11",
          "pct_check": "맞음",
          "counterparty": "엘아이지디펜스앤에어로스페이스 주식회사",
          "region": "대한민국",
          "period": "2026-08-05~2027-10-24",
          "changes": "2. 계약내역-확정 계약금액: 4,200,000,000 → 3,802,360,000 ; 2. 계약내역-계약금액 총액(원): 4,200,000,000 → 3,802,360,000 ; 2. 계약내역-매출액 대비(%): 10.06 → 9.11 ; 10. 기타 투자판단에 참고할 사항: 1. 상기 2항의 계약금액은 부가세 별도 금액입니다. 2. 상기 2항의 최근매출액은 2025년도말 연결재무제표 기준입니다. 3. 상기 3항의 계 → 1. 상기 2항의 계약금액은 부가세 별도 금액입니다. 2. 상기 2항의 최근매출액은 2025년도말 연결재무제표 기준입니다. 3. 상기 3항의 계",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900276",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "STX엔진",
          "market": "유가",
          "what": "단일판매ㆍ공급계약 체결",
          "amount_won": "66,504,200,000",
          "pct_of_sales": "8.43",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "대한민국",
          "period": "2026-11-18~2028-12-15",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118800251",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "삼현",
          "market": "코스닥",
          "what": "레이다받침대유니트외 6건계약",
          "amount_won": "4,802,700,000",
          "pct_of_sales": "4.81",
          "pct_check": "맞음",
          "counterparty": "한화시스템(주)",
          "region": "한화시스템 구미사업장",
          "period": "2025-01-17~2029-02-01",
          "changes": "6. 주요 계약조건 대금지급 조건 등: 착수금:0% 중도금:0% 잔금:100%(현금지급) → 착수금:4.2%(현금지급) 중도금:0% 잔금:95.8%",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900252",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "쎄트렉아이",
          "market": "코스닥",
          "what": "oooo 성능개량",
          "amount_won": "11,911,780,000",
          "pct_of_sales": "27.86",
          "pct_check": "맞음",
          "counterparty": "정부출연연구기관",
          "region": "대한민국",
          "period": "2018-12-26~2027-11-30",
          "changes": "2. 계약내역 - 확정 계약금액(원) - 계약금액 총액(원) - 매출액 대비(%): 11,467,454,545 11,467,454,545 26.82 → 11,911,780,000 11,911,780,000 27.86 ; 5. 계약기간 종료일: 2026-11-30 → 2027-11-30 ; 9. 공시유보: 2026-11-30 → 2027-11-30",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900192",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "에스오에스랩",
          "market": "코스닥",
          "what": "자율주행 및 Physical AI 라이다 개발 및 공급",
          "amount_won": "8,698,085,700",
          "pct_of_sales": "142.92",
          "pct_check": "맞음",
          "counterparty": "북미 글로벌 빅테크 기업",
          "region": "북미",
          "period": "2026-11-17~2028-08-31",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900155",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "티이엠씨씨엔에스",
          "market": "코스닥",
          "what": "Chemical 공급장치 공급계약",
          "amount_won": "25,248,900,000",
          "pct_of_sales": "15.03",
          "pct_check": "맞음",
          "counterparty": "SK Hynix",
          "region": "국내",
          "period": "2026-06-24~2027-01-31",
          "changes": "5.계약기간 종료일: 2026-11-31 → 2027-01-31 ; 10. 기타 투자판단에 참고할 사항: - 상기 계약일자는 P/O 발행일이며, 계약종료일은 P/O내 납기일 26-10-31일을 기준으로 한 수금예정일 입니다. → - 상기 계약일자는 P/O 발행일이며, 계약종료일은 P/O내 납기일 26-12-31일을 기준으로 한 수금예정일 입니다.",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900129",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "HJ중공업",
          "market": "유가",
          "what": "정정신고(보고)",
          "amount_won": "168,916,009,966",
          "pct_of_sales": "8.96",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "경기도 평택시 오성면 길음리 150 ~숙성리 188-1",
          "period": "2025-11-27~2030-06-29",
          "changes": "5. 계약기간 - 종료일: 2029-12-25 → 2030-06-29",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118800107",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "KCC건설",
          "market": "코스닥",
          "what": "김포감정 물류센터 신축공사",
          "amount_won": "148,473,000,000",
          "pct_of_sales": "8.1",
          "pct_check": "맞음",
          "counterparty": "켄달스퀘어감정부동산일반사모투자회사",
          "region": "경기도 김포시 감정동",
          "period": "2026-12-28~2028-10-27",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900092",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        }
      ],
      "dart_others": [
        {
          "company": "하나33호스팩",
          "market": "코스닥",
          "kind": "주권매매거래정지 (상장폐지 사유발생)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900641",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "우진비앤지",
          "market": "코스닥",
          "kind": "최대주주변경을수반하는주식담보제공계약해제ㆍ취소등",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900604",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "에이비온",
          "market": "코스닥",
          "kind": "주권매매거래정지기간변경 (개선기간 부여)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900613",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "판타지오",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(유상증자결정)",
          "changes": "14. 대표주관회사(직접공모가 아닌 경우): SK증권 주식회사 → - ; 20. 기타 투자판단에 참고할 사항: 나. 청약 취급처 (1) 청약사무취급처 : SK증권(주) → 나. 청약 취급처 (1) 청약사무취급처 : - ; (*주): - → 마. 대표주관계약의 해제 당사는 2026년 11월 18일 대표주관회사인 SK증권(주)로부터 계약해제 공문을 수령하였습니다. 이에 당사는 본 유상",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118000351",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "벡트로보틱스",
          "market": "코스닥",
          "kind": "[기재정정]최대주주변경을수반하는주식양수도계약체결",
          "changes": "2. 계약 내역 - 양수도 대금의 지급일정 및 지급조건 등에 관한 사항 - 4. 대금지급일정 - ② 2차 거: ※ 2026년 11월 16일 예정된 잔금 4,000,000,000원이 지급되지 않았으며, 2026년 11월 17일 계약 당사자 간 합의에 따라  → ※ 2026년 11월 16일 예정된 잔금 4,000,000,000원이 지급되지 않았으며, 2026년 11월 18일 계약 당사자 간 추가 합의에  ; 5. 기타 투자판단에 참고할 사항: 4. 2026년 11월 16일 예정된 잔금 4,000,000,000원이 미지급됨에 따라, 계약 당사자들은 2026년 11월 17일 추가 합의를  → 4. 2026년 11월 16일 예정된 잔금 4,000,000,000원이 미지급됨에 따라, 계약 당사자들은 2026년 11월 18일 추가 합의를 ",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900573",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "파이온엑스",
          "market": "코스닥",
          "kind": "유상증자또는주식관련사채등의청약결과(자율공시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900609",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "드래곤플라이",
          "market": "코스닥",
          "kind": "주권매매거래정지기간변경 (상장폐지 사유 발생)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900616",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "DB하이텍",
          "market": "유가",
          "kind": "주식소각결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118800582",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "온타이드",
          "market": "유가",
          "kind": "자기주식취득결과보고서",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118000355",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "온타이드",
          "market": "유가",
          "kind": "주식소각결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118800560",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "DB하이텍",
          "market": "유가",
          "kind": "주요사항보고서(자기주식취득신탁계약체결결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118000344",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "온타이드",
          "market": "유가",
          "kind": "주요사항보고서(자기주식취득결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118000345",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "한울반도체",
          "market": "코스닥",
          "kind": "[기재정정]최대주주변경을수반하는주식담보제공계약체결",
          "changes": "1.담보제공자(최대주주) 관련 사항 명칭(성명, 법인명, 조합명, 단체명) 지분율(%): 21.44 → 20.68 ; 2. 채무(차입)금액 총액(원): 6,700,000,000 → 6,499,998,300 ; 3. 담보설정금액 총액(원): 8,710,000,000 → 8,449,997,790 ; [개별 담보제공 계약에 관한 사항] 순번 2 담보설정금액: 2,210,000,000 → 1,949,997,790",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900599",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "소프트캠프",
          "market": "코스닥",
          "kind": "주요사항보고서(전환사채권발행결정)",
          "changes": "",
          "numbers": "종류 전환사채 · 사채 권면총액(원) 1,000,000,000 · 표면이자율(%) 0.0 · 만기이자율(%) 0.0 · 사채 만기일 2029년 11월 30일 · 전환가액(원) 6,437 · 전환 주식 종류 소프트캠프 주식회사 기명식 보통주 · 전환 주식 수 155,351 · 주식총수 대비(%) 3.1 · 전환청구 시작 2027년 11월 30일 · 전환청구 끝 2029년 10월 30일 · 목적: 타법인 증권 취득(원) 1,000,000,000",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118000336",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "소프트캠프",
          "market": "코스닥",
          "kind": "타법인주식및출자증권취득결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900589",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "노브랜드",
          "market": "코스닥",
          "kind": "타인에대한채무보증결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900564",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "썸에이지",
          "market": "코스닥",
          "kind": "경영권변경등에관한계약체결",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900571",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "구영테크",
          "market": "코스닥",
          "kind": "[기재정정]최대주주변경을수반하는주식담보제공계약체결",
          "changes": "[개별담보제공 계약에 관한사항] 순번1번 담보제공기간 종료일: 2026-11-18 → 2027-11-18",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900554",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "비투엔",
          "market": "코스닥",
          "kind": "주요사항보고서(소송등의제기)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118000325",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "세동",
          "market": "코스닥",
          "kind": "소송등의판결ㆍ결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900562",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "쏠리드",
          "market": "코스닥",
          "kind": "주식소각결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900538",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "미트박스",
          "market": "코스닥",
          "kind": "단기차입금증가결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900532",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "에이루트",
          "market": "코스닥",
          "kind": "주요사항보고서(자기전환사채만기전취득결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118000247",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "다온아이앤씨",
          "market": "기타",
          "kind": "[기재정정]주요사항보고서(유상증자결정)",
          "changes": "11. 신주권교부예정일: - → 2026년 10월 28일",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118000301",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "쏠리드",
          "market": "코스닥",
          "kind": "주요사항보고서(자기주식취득신탁계약해지결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118000286",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "교보자산신탁",
          "market": "기타",
          "kind": "특수관계인의유상증자참여",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118000291",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "HLB글로벌",
          "market": "유가",
          "kind": "주요사항보고서(자기전환사채만기전취득결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118000266",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "썸에이지",
          "market": "코스닥",
          "kind": "주요사항보고서(유상증자결정)",
          "changes": "",
          "numbers": "종류 유상증자 · 목적: 운영(원) 10,499,999,456 · 목적: 채무상환(원) 1,000,000,000 · 신주 보통주(주) 15,477,792 · 1주당 액면가(원) 100 · 증자 전 보통주(주) 13,924,025 · 증자 방식 제3자배정증자",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118000239",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "한국금융지주",
          "market": "유가",
          "kind": "타법인주식및출자증권취득결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118800394",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "레이어",
          "market": "기타",
          "kind": "회사합병결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118000250",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "컬러레이",
          "market": "코스닥",
          "kind": "외국지주회사의자회사편입ㆍ탈퇴",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900371",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "씨유메디칼",
          "market": "코스닥",
          "kind": "[기재정정]최대주주변경을수반하는주식담보제공계약체결",
          "changes": "1. 담보제공자(최대주주) 관련사항 - 공시일 현재 소유 주식 수(주) 및 지분율(%): 소유 주식 수(주) : 13,836,736 지분율: 22.82 → 소유 주식 수(주): 2,767,347 지분율: 22.82 ; 4. 담보제공 내역 - 누적 담보제공 주식 총수(주): 13,836,736 → 2,767,347 ; 6. 기타 투자판단에 참고할 사항: 1) 상기 공시일 현재 지분율은 공시일 현재 발행주식 총수 60,624,558주로 산정한 지분율 입니다. → 1) 당사는 액면병합에 따라 발행주식 총수가 변동 되었으며, 상기 공시일 현재 지분율은 공시일 현재 발행주식 총수 12,124,911주로 산정한 ; [개별 담보제공 계약에 관한 사항] - 담보제공 주식수(주): 13,836,736 → 2,767,347 ; [개별 담보제공 계약에 관한 사항] - 담보제공기간 > 종료일: 2026-11-18 → 2027-02-18 ; [채무자에 관한 사항] - 최대주주: (주)대광헬스케어 → (주)대광네트웍스",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900399",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "한국투자증권",
          "market": "기타",
          "kind": "주요사항보고서(유상증자결정)",
          "changes": "",
          "numbers": "종류 유상증자 · 목적: 운영(원) 650,000,000,000 · 신주 보통주(주) 13,000 · 1주당 액면가(원) 5,000 · 증자 전 보통주(주) 35,231,340 · 증자 방식 주주배정증자",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118000233",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "나래나노텍",
          "market": "코스닥",
          "kind": "주요사항보고서(자기주식취득결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118000226",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "KS인더스트리",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(유상증자결정)",
          "changes": "9. 납입일: 2026년 11월 18일 → 2026년 11월 26일 ; 12. 신주의 상장 예정일: 2026년 12월 03일 → 2026년 12월 11일 ; 20. 기타 투자판단에 참고할 사항  2) 신주의 청약에 관한 사항: 2026년 11월 18일 → 2026년 11월 26일",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118000231",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "셀리드",
          "market": "코스닥",
          "kind": "주요사항보고서(소송등의제기)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118000212",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "루멘스바이오스",
          "market": "코스닥",
          "kind": "증권발행결과(자율공시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118900391",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "한국금융지주",
          "market": "유가",
          "kind": "유상증자결정(자회사의 주요경영사항)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118800353",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "SGC에너지",
          "market": "유가",
          "kind": "타인에대한채무보증결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118800332",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "오성첨단소재",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(타법인주식및출자증권양도결정)",
          "changes": "5. 양도예정일자: 2026년 11월 19일 → 2026년 12월 17일 ; 7. 거래대금지급: 1. 지급형태 : 현금지급2. 지급 일정 1). 계약금 : 14,114,304,000원(2026년 9월 15일)     2). 잔금 : 38,8 → 1. 지급형태 : 현금지급2. 지급 일정 1). 계약금 : 14,114,304,000원(2026년 9월 15일)     2). 잔금 : 38,8",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261118000215",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        }
      ],
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
          "val": 47,
          "source": "v2_secretary/결과/문앞/2026-11-19_문앞교통정리_길별.json"
        },
        "summarized_today": {
          "val": 40,
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        "bad_numbers_today": {
          "val": 2,
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        "fed_speeches_total": {
          "val": 26,
          "source": "v2_secretary/결과/연준연설/"
        }
      },
      "items": [
        {
          "id": "i1255279b40",
          "source_name": "연준 통화정책 RSS",
          "kind": "연준 공식 발표",
          "writer": "미국 연준",
          "title": "Minutes of the Federal Open Market Committee, October 27-28, 2026",
          "easy1_title": "인공지능 투자 열풍이 물가와 금융 시장에 미치는 영향을 살피고 있어요",
          "easy1_desc": "연준은 인공지능(AI) 관련 시설을 짓는 데 들어가는 막대한 돈과 빚이 경제에 어떤 영향을 줄지 집중적으로 들여다보고 있는데요. 인공지능 투자가 기대만큼 성과를 내지 못하면 관련 기업들의 손실이 커지고, 이게 금융 시장 전체의 충격으로 번질 수 있다고 봤기 때문이에요. 쉽게 말하면, 인공지능 산업이 커지는 건 좋지만 그 과정에서 쌓인 빚이 경제의 불안 요소가 될 수 있다는 점을 경계하는 셈이에요.",
          "easy2_title": "물가를 2% 목표치로 되돌리기 위해 신중하게 금리를 결정할 계획이에요",
          "easy2_desc": "현재 물가가 여전히 높은 수준이라 연준은 금리를 어떻게 조정할지 고민하고 있는데요. 당장 금리를 바꾸기보다는 들어오는 경제 지표들을 더 지켜보면서, 인공지능 투자 수요가 얼마나 지속될지나 금리 인상이 경제에 어떤 영향을 미치는지 확인하겠다는 계획이에요. 서두르지 않고 정보를 더 모으는 게 물가를 2% 목표로 되돌리는 데 더 유리하다고 판단한 겁니다.",
          "topic": "10월 연방공개시장위원회(FOMC) 회의에서 논의된 경제 상황과 금융 안정성에 대한 연준의 평가예요.",
          "points": [
            "인공지능 관련 금융 불안: 인공지능 산업에 투입되는 자금과 빚이 복잡하고 불투명한 구조로 늘어났다는 점을 우려하고 있어요. 만약 인공지능 투자 수익이 기대에 못 미치면 자산 가격이 급락하면서 금융 시장이 흔들릴 수 있다고 본 겁니다.",
            "물가 상승 압력 지속: 에너지 가격이 높고 인공지능 관련 시설 투자로 인해 기술 제품의 공급이 수요를 따라가지 못하면서 물가가 계속 오르고 있다고 진단했어요. 이런 물가 상승 압력이 특정 산업을 넘어 경제 전반으로 퍼질 가능성을 경계하고 있습니다.",
            "금리 정책의 신중한 접근: 대다수 위원은 현재의 금리 수준을 유지하면서 경제 데이터를 더 확인해야 한다는 의견을 냈어요. 금리 인상이 경제에 미치는 영향과 인공지능 투자 수요의 지속성을 파악하는 것이 물가 안정 목표를 달성하는 데 필수적이라고 봤기 때문입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "긴 원문 — 앞 30000자만 읽음(전체 43771자)",
          "body_chars": "43771",
          "link": "https://www.federalreserve.gov/newsevents/pressreleases/monetary20261118a.htm",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "ie7dc9e0a5b",
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "한국의 AI 전략, ‘부자의 전략(Richman’s Strategy)’ 경계하고 ‘한국형 비대칭 경쟁 전략’모색해야… 프론티어 모델·하이퍼스케일 인프라 추격 경쟁 넘어 반도체·제조·응용 우위 활용한 ‘글로벌 초연결의 소버린AI 전략’ 필요 - 국회미래연구원, 「미중 AI풀스택 생태계 경쟁, 중국의 비대칭 경쟁전략과 글로벌 AI 질서의 미래」 보고서 발표 -",
          "easy1_title": "중국은 미국과 똑같이 싸우지 않고 자기만의 방식으로 판을 흔들고 있어요",
          "easy1_desc": "미국이 최첨단 기술로 앞서 나갈 때, 중국은 오픈웨이트 모델(공개된 인공지능 모델)과 제조 현장을 활용해 경쟁의 방식을 바꾸고 있는데요. 이게 무슨 말이냐면, 정면으로 부딪히기보다 자신들이 잘하는 분야로 판을 옮겨 영향력을 키우고 있다는 거예요. 쉽게 말하면, 미국이 가진 기술 패권에 맞서 중국은 비대칭 전략으로 도전하고 있는 셈입니다.",
          "easy2_title": "한국도 미국이나 중국을 무작정 따라 하기보다 우리만의 전략이 필요해요",
          "easy2_desc": "우리나라가 모든 기술을 다 가지려 하거나 강대국과 똑같이 경쟁하는 건 자원 낭비가 될 수 있다고 봤는데요. 대신 우리가 가진 반도체나 제조 분야의 강점을 살려 세계와 연결되는 전략을 짜야 한다는 거예요. 이게 무슨 뜻이냐면, 남들을 따라가는 추격자가 아니라 글로벌 생태계의 핵심 연결 고리가 되어야 한다는 말이에요.",
          "topic": "미중 간의 인공지능 경쟁이 치열해지는 가운데, 한국이 나아가야 할 방향을 제시한 보고서예요.",
          "points": [
            "중국의 비대칭 경쟁전략: 중국은 미국이 주도하는 프론티어 모델(최첨단 인공지능 모델) 경쟁에 매달리지 않고, 오픈웨이트 모델 확산과 제조·응용 분야에 집중하고 있는데요. 뭔 소리냐면, 기술 격차를 좁히기보다 자신들이 가진 제조업 기반을 활용해 실질적인 영향력을 넓히겠다는 전략이에요.",
            "글로벌 AI 거버넌스 주도: 중국은 유엔과 글로벌 사우스(개발도상국 등)를 중심으로 인공지능 외교를 펼치고 있는데요. 미국이 유사한 입장의 국가들과 협력하는 것과 달리, 중국은 인공지능을 공공재로 규정하며 다자외교 체제를 통해 규범을 주도하려는 계획이에요.",
            "한국형 비대칭 경쟁전략: 한국은 반도체와 제조 분야의 강점을 살려 글로벌 초연결의 핵심 노드가 되어야 한다고 봤는데요. 모든 기술을 다 갖추려 하기보다 우리가 잘하는 분야를 세계 생태계와 연결하는 전략이 필요하다는 겁니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "5494",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5318775",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i4a000fd219",
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "「지역인구전망: 2026~2045. 같은 대한민국, 다른 인구구조」 발간",
          "easy1_title": "2045년이 되면 우리나라 인구는 줄고 지역마다 상황도 달라집니다",
          "easy1_desc": "국회예산정책처가 향후 20년간 전국 17개 시도의 인구 변화를 내다봤는데요. 2045년 전국 총인구는 4,884만명으로 2025년보다 5.6% 줄어들 것으로 보입니다. 인구가 늘어나는 곳도 일부 있지만 결국 정점을 지나 감소세로 돌아설 거라는 말이에요. 쉽게 말하면 전국적으로 인구 감소가 피할 수 없는 흐름이라는 겁니다.",
          "easy2_title": "이제는 인구 이동보다 자연스러운 감소가 더 큰 고민거리가 됩니다",
          "easy2_desc": "그동안은 사람들이 어디로 이사 가느냐가 지역 인구를 결정했거든요. 그런데 2030년대 중반부터는 출생아보다 사망자가 많은 자연감소가 인구 변동의 주된 원인이 될 것으로 보입니다. 사망자 수는 2026년 36.5만명에서 2045년 58.8만명으로 늘어날 예정이라는데요. 결국 지역별로 공공시설을 어떻게 다시 배치할지 고민해야 한다는 뜻이에요.",
          "topic": "국회예산정책처는 지역별 인구 변화를 분석하여 향후 공공서비스와 재정 정책의 기초 자료로 활용하겠다고 밝혔습니다.",
          "points": [
            "수도권 집중과 인구 감소: 비수도권 인구가 수도권보다 빠르게 줄어들면서 전국 인구에서 수도권이 차지하는 비중은 더 높아질 것으로 보입니다. 2045년에는 17개 시도 중 4곳만 인구가 증가할 것으로 예상되는데요. 나머지 지역은 인구 감소를 피하기 어렵다는 말이에요.",
            "고령화와 생산연령인구 감소: 모든 지역에서 일할 사람인 생산연령인구 비중은 낮아지고 고령인구 비중은 높아질 것으로 보입니다. 특히 일부 도 지역은 2045년 생산연령인구 비중이 50% 아래로 내려갈 것으로 전망되는데요. 지역마다 고령화 속도가 다르다는 점도 눈여겨봐야 합니다.",
            "재정 및 공공서비스 재편: 인구 구조가 바뀌면 공공시설의 확충이나 기능 전환 같은 새로운 공급체계가 필요하다고 봤습니다. 특히 사망자 증가에 따른 장례 시설 점검이나 인구밀도 하락에 따른 1인당 공급비용 상승 가능성을 고려해야 한다는 계획이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 2045년 전국 총인구는 4,884만명으로 2025년보다 5.6% 줄어들 것으로 보입니다.; 예측 의심: 그런데 2030년대 중반부터는 출생아보다 사망자가 많은 자연감소가 인구 변동의 주된 원인이 될 것으로 보입니; 예측 의심: 비수도권 인구가 수도권보다 빠르게 줄어들면서 전국 인구에서 수도권이 차지하는 비중은 더 높아질 것으로 보입니; 예측 의심: 2045년에는 17개 시도 중 4곳만 인구가 증가할 것으로 예상되는데요.; 예측 의심: 모든 지역에서 일할 사람인 생산연령인구 비중은 낮아지고 고령인구 비중은 높아질 것으로 보입니다.; 예측 의심: 특히 일부 도 지역은 2045년 생산연령인구 비중이 50% 아래로 내려갈 것으로 전망되는데요.",
          "body_chars": "4950",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5315101",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i9ddc69167d",
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "지식산업센터 공실 주거전환 허용해 두 마리 토끼 잡아야",
          "easy1_title": "비어 있는 지식산업센터를 주택으로 바꿔서 문제를 해결하자",
          "easy1_desc": "요즘 지식산업센터가 너무 많이 지어지면서 입주자가 없어 비어 있는 곳이 늘어나고 있는데요, 반대로 도심에는 청년이나 신혼부부가 살 만한 작은 집이 부족한 상황이에요. 그래서 이언주 의원은 비어 있는 지식산업센터를 주택으로 바꾸면 두 가지 문제를 한꺼번에 해결할 수 있다고 봤다는 거예요. 쉽게 말하면, 남는 공간을 필요한 사람들에게 주거지로 빌려주자는 이야기입니다.",
          "easy2_title": "법을 바꿔서 용도 변경을 쉽게 하고 지원도 늘리겠다",
          "easy2_desc": "지금은 법이 너무 까다로워서 지식산업센터를 주택으로 바꾸기가 사실상 불가능한데요, 이 의원은 5년 동안만 한시적으로 특례를 적용해 용도 변경을 허용하겠다는 계획이에요. 주차장 기준을 완화하거나 세금을 깎아주는 등 여러 지원책도 함께 담았거든요. 규제를 풀어 공실을 없애는 장점이 있는데, 대신 주거 안전이나 산업 기능을 어떻게 유지할지가 중요한 과제로 보입니다.",
          "topic": "이언주 의원이 지식산업센터의 공실 문제를 해결하기 위해 주거용으로 전환할 수 있도록 하는 특별법을 발의했다는 내용입니다.",
          "points": [
            "주거 전환의 필요성: 지식산업센터가 단기간에 너무 많이 공급되면서 장기간 비어 있는 곳이 많아졌는데요, 도심 속 주거 공간이 부족한 상황과 맞물려 이를 주택으로 바꾸려는 시도가 필요하다고 봤다는 거예요. 뭔 소리냐면, 방치된 건물을 활용해 주거난을 덜어보겠다는 의도입니다.",
            "현행법의 한계와 특례: 지금은 입주 시설 제한이나 건축 규제 때문에 용도 변경이 거의 불가능한 상태인데요, 이 의원은 5년 동안만 한시적으로 특례를 적용해 이 문제를 해결하겠다는 계획이에요. 지자체가 전환사업구역을 정하면 주택이나 준주택으로 바꿀 수 있게 길을 열어주겠다는 겁니다.",
            "다각적인 지원책 마련: 단순히 용도만 바꾸는 게 아니라 주차장 설치 기준을 완화하고 학교용지나 교통유발 부담금을 줄여주는 등 여러 지원책도 함께 준비했는데요, 공공매입약정이나 주택도시기금 융자 같은 혜택도 포함되어 있어요. 이런 지원을 통해 지역 경제를 살리고 주거 안정을 꾀하겠다는 계획입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "1484",
          "link": "https://www.nanet.go.kr/lowcontent/assamblybodo/selectAssamblyBodoDetail.do?searchSeq=200612&searchNoSeq=20261118200612",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i5224b1b78b",
          "source_name": "산업부 보도 RSS(POST)",
          "kind": "산업통상부 보도자료",
          "writer": "산업통상부",
          "title": "(참고자료)한-중 FTA 서비스·투자 후속협상 실질타결 선언",
          "easy1_title": "중국 시장에서 우리 기업이 더 편하게 일할 수 있게 됐습니다",
          "easy1_desc": "산업통상부가 8년 8개월간의 협상 끝에 한-중 FTA 서비스·투자 후속협상을 실질적으로 타결했다고 밝혔는데요. 이게 뭔 소리냐면, 그동안 중국에서 사업하기 까다로웠던 콘텐츠, 관광, 법률 같은 분야의 문턱을 낮췄다는 말이에요. 덕분에 우리 기업들이 중국 시장에 진출할 때 더 안정적인 환경에서 일할 수 있게 된 셈입니다. 쉽게 말하면, 우리 기업의 중국 진출길이 훨씬 넓어진 겁니다.",
          "easy2_title": "앞으로는 중국 규제가 갑자기 바뀌어 당황하는 일이 줄어듭니다",
          "easy2_desc": "이번 협상에서 시장 개방 방식을 네거티브(Negative) 방식으로 바꿨는데요. 이게 뭔 소리냐면, 원칙적으로 다 열어두고 안 되는 것만 골라내는 방식이라 기업 입장에선 예측하기가 훨씬 쉬워진다는 거예요. 한번 좋아진 규제는 다시 나빠지지 않게 하는 장치도 넣었거든요. 규제가 투명해져서 기업들이 안심하고 투자할 수 있는 장점이 있는데, 대신 우리도 중국에 맞춰 개방 수준을 높여야 한다는 점도 같이 따라온다는 겁니다.",
          "topic": "한-중 FTA 서비스·투자 후속협상 타결을 통해 양국 간 서비스 교역과 투자를 확대할 수 있는 제도적 기반을 마련했습니다.",
          "points": [
            "K-콘텐츠 시장 진출 기반 마련: 중국이 영화나 게임 같은 콘텐츠 분야에서 우리 기업에 제3국보다 불리하지 않은 대우를 하겠다고 약속했는데요. 특히 드라마나 예능 같은 시청각 프로그램을 공동으로 제작할 수 있는 범위도 넓혔습니다. 덕분에 우리 콘텐츠가 중국 시장에 더 안정적으로 들어갈 수 있게 된 셈이에요.",
            "중국 아웃바운드 관광시장 진출: 우리 여행사가 중국 현지에서 중국인이나 외국인을 대상으로 해외여행 상품을 직접 팔 수 있게 됐습니다. 23개 지역에서 여행사를 운영하며 K-팝이나 뷰티 같은 우리 문화와 연계한 상품을 기획할 수 있게 된 건데요. 새로운 수익원을 찾을 수 있다는 장점이 있지만, 현지에서 단체 관광객을 직접 모집해야 하는 과제도 함께 생긴 겁니다.",
            "투자 보호 및 규제 예측 가능성: 기술 이전을 강제로 요구하지 못하게 해서 우리 기업의 기술을 보호할 수 있게 됐습니다. 또한 투자자-국가 분쟁해결제도(ISDS)를 강화해 투자자가 부당한 대우를 받을 때 대응할 수 있는 장치도 만들었는데요. 정부의 정당한 정책 권한과 투자자 보호 사이에서 균형을 맞추겠다는 계획입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "5551",
          "link": "https://www.motir.go.kr/kor/article/ATCLe0854704d/172421/view",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "ie2f5122f2e",
          "source_name": "산업부 보도 RSS(POST)",
          "kind": "산업통상부 보도자료",
          "writer": "산업통상부",
          "title": "산업부, 차관 주재 「한수원 추진계획 점검회의」 2차 회의 개최",
          "easy1_title": "한수원의 체코 원전 사업 계획이 잘 돌아가고 있는지 꼼꼼히 살폈습니다",
          "easy1_desc": "산업통상부 박동일 차관이 11월 18일 대한상의에서 한수원의 원전 사업 추진 상황을 점검하는 2차 회의를 열었습니다. 지난 1차 회의에서 정한 주 단위 세부 계획이 11월 3주 차까지 차질 없이 진행되고 있는지 확인한 건데요. 설계와 인허가 같은 시공 준비 업무부터 신규 시공사 선정까지 2026년 내 계획을 빈틈없이 챙기겠다는 겁니다.",
          "easy2_title": "체코와 소통하는 창구를 넓혀서 사업을 더 속도감 있게 추진할 계획입니다",
          "easy2_desc": "한수원은 11월 5일과 9일부터 12일 사이에 체코 발주사와 업무 협의를 진행하며 현안을 원활하게 나누고 있다고 밝혔는데요. 박동일 차관은 예상치 못한 일정 지연에 대비해 더 속도감 있게 움직이되 품질과 가격 약속은 반드시 지켜야 한다고 강조했습니다. 앞으로는 장관급 월간 회의와 국장급 주간 회의 같은 정부 간 소통 채널을 더 적극적으로 활용하겠다는 계획이에요.",
          "topic": "산업통상부가 한수원의 체코 원전 사업 추진 계획을 점검하고 체코와의 협력 체계를 강화하는 방안을 논의했습니다.",
          "points": [
            "주 단위 세부 관리 계획 이행: 한수원은 설계와 인허가, 부지 정보 검증 및 숙소 부지 선정 등 시공 업무의 연속성을 확보하기 위한 계획을 보고했습니다. 2026년 내에 마쳐야 할 업무들을 주 단위로 쪼개어 관리하고 있으며, 11월 3주 차까지 계획대로 잘 이행하고 있다는 설명이에요.",
            "체코 발주사와의 소통 현황: 11월 5일에는 한-체코 산업통상부 국장급 회의가 영상으로 열렸고, 11월 9일부터 12일까지는 체코 발주사인 EDUII가 방한해 업무 협의를 진행했습니다. 이를 통해 체코 측과 필요한 정보를 공유하고 현안을 논의하는 과정이 원활하게 이어지고 있다고 밝혔습니다.",
            "정부 간 협의 채널 강화: 오는 12월 10일 한국에서 열릴 제4차 한-체코 장관급 두코바니 이행 점검 협의체 외에도 정부 차원의 소통 창구를 대폭 늘렸습니다. 장관급 월간 회의와 국장급 주간 회의를 통해 체코 측에 협조를 구하고 현안을 빠르게 해결하는 채널로 활용하겠다는 계획입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "5 9",
          "check_flags": "",
          "body_chars": "1090",
          "link": "https://www.motir.go.kr/kor/article/ATCLe0854704d/172420/view",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i0ee9748c2f",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "대신증권",
          "title": "[대신증권] 코나아이 쉬어가는 메탈카드, 버텨주는 배당",
          "easy1_title": "메탈카드 매출은 잠시 쉬어가지만 배당이 든든하게 받쳐주고 있어요",
          "easy1_desc": "코나아이의 3분기 실적을 살펴봤더니, 작년에 대량으로 팔렸던 메탈카드(금속 소재 카드)의 기저효과 때문에 해외 실적이 줄어든 것으로 나타났는데요. 하지만 플랫폼 사업에서 이익이 늘어나며 전체 실적을 방어해 낸 모습이에요. 쉽게 말하면, 카드 사업은 잠시 숨을 고르는 중이지만 플랫폼이 그 빈자리를 잘 채워주고 있다는 말이에요.",
          "easy2_title": "앞으로의 실적은 메탈카드 수주 물량이 어디로 튈지가 관건입니다",
          "easy2_desc": "증권사는 코나아이의 2026년 영업이익이 전년과 비슷한 수준일 것으로 추정했는데요. 앞으로의 실적 방향은 확보해 둔 메탈카드 수주가 실제 물량으로 얼마나 이어질지에 달려 있다고 봤어요. 배당수익률도 4.6% 수준이라 주가가 크게 흔들리지 않게 지지해 줄 것으로 보인다는 겁니다.",
          "topic": "코나아이의 3분기 실적 리뷰와 향후 메탈카드 및 플랫폼 사업의 성장 전망에 대한 분석이에요.",
          "points": [
            "메탈카드 부문 실적: 3분기 메탈카드 매출과 물량은 전년 대비 각각 54.1%, 50% 줄어들었는데요. 이는 작년에 미러카드(거울처럼 반사되는 카드)가 처음 출시되면서 물량이 몰렸던 탓이에요. 증권사는 2027년부터는 신제품 출시와 고객사 내 공급 지위 상승으로 다시 성장할 것으로 봤어요.",
            "플랫폼 사업의 성장: 플랫폼 부문은 영업이익 97억원을 기록하며 전년보다 21.8% 성장했는데요. 수수료율이 높은 비지역화폐 상품이 잘 팔린 덕분이에요. 인천 지역화폐 캐시백이 잠시 멈췄음에도 추석 인센티브와 정책수당 덕분에 결제금액은 오히려 늘어난 셈이에요.",
            "주주환원과 하방 지지: 코나아이는 2026년부터 2028년까지 순이익의 25% 이상을 배당하겠다고 공약했는데요. 증권사는 배당수익률이 4.6%에 달해 현재 주가 수준에서는 하방이 단단하게 지지될 것으로 판단했어요. 실적이 크게 뛰지 않아도 배당만으로 충분히 버틸 힘이 있다는 말이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 배당수익률도 4.6% 수준이라 주가가 크게 흔들리지 않게 지지해 줄 것으로 보인다는 겁니다.",
          "body_chars": "12547",
          "link": "https://m.stock.naver.com/research/company/98367",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i24f53b7b51",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "대신증권",
          "title": "[대신증권] HPSP 기대했던 모습의 발현",
          "easy1_title": "반도체 수주가 늘어나면서 실적도 크게 좋아질 거예요",
          "easy1_desc": "HPSP가 반도체 전 분야에서 신규 수주를 많이 따내면서 실적이 탄탄해지고 있는데요. 2027년에는 매출액이 사상 처음으로 4,000억원을 넘길 것으로 증권사는 보고 있어요. DRAM이나 NAND 같은 메모리뿐만 아니라 파운드리 쪽에서도 수주 환경이 좋아지고 있거든요. 쉽게 말하면, 회사가 가진 기술력을 바탕으로 일감이 꾸준히 들어오고 있다는 말이에요.",
          "easy2_title": "쌓아둔 현금으로 주주에게 돌려주거나 회사를 키울 수 있어요",
          "easy2_desc": "HPSP가 2026년 말에는 현금 및 현금성 자산을 3,000억원 넘게 보유할 것으로 보이는데요. 이 돈을 그냥 두지 않고 주주환원 정책을 강화하거나 M&A(기업 인수 합병)를 통해 회사를 더 키우는 데 쓸 수 있다는 거예요. 주주 입장에서는 배당 같은 혜택이 늘어날 수 있다는 장점이 있는데, 대신 회사가 어떤 전략을 선택하느냐에 따라 성장의 방향이 달라질 수 있다는 점도 같이 봐야 합니다.",
          "topic": "HPSP가 신규 수주 확대와 보유 현금을 바탕으로 강력한 성장 기회를 맞이했다는 분석이에요.",
          "points": [
            "신규 수주와 매출 성장: DRAM과 NAND, 그리고 로직/파운드리 등 모든 분야에서 수주가 늘어나고 있는데요. 2027년 매출액은 4,206억원으로 추정되는데, 이는 2026년이 끝나지 않은 시점에서도 이미 확보된 수주 물량이 많기 때문이에요. 증권사는 추가적인 이익 상향 기회도 남아 있다고 보고 있어요.",
            "보유 현금 활용 전략: 2026년 말 기준으로 현금 및 현금성 자산이 3,000억원을 넘길 것으로 보이는데요. 증권사는 이 자금을 활용해 주주환원을 강화하거나 전략적인 M&A를 진행할 가능성이 열려 있다고 판단했어요. 영업 외 부문에서 주주가치를 높일 기회가 많다는 겁니다.",
            "투자의견 및 목표주가 유지: 증권사는 HPSP에 대해 매수 의견과 목표주가 71,000원을 그대로 유지했는데요. 현재 주가 조정이 상당 부분 이루어진 상태라 지금이 비중을 확대하기에 좋은 기회라고 봤어요. 반도체 시장의 외부 변수보다는 기업 자체의 성장 가치에 집중할 때라는 의견이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: HPSP가 2026년 말에는 현금 및 현금성 자산을 3,000억원 넘게 보유할 것으로 보이는데요.; 예측 의심: 2026년 말 기준으로 현금 및 현금성 자산이 3,000억원을 넘길 것으로 보이는데요.",
          "body_chars": "11363",
          "link": "https://m.stock.naver.com/research/company/98366",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i8f6d81049c",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "대신증권",
          "title": "[대신증권] 파크시스템스 모두가 겪는 성장통",
          "easy1_title": "파크시스템스가 지금 겪는 건 성장하는 과정에서 나오는 통증이에요",
          "easy1_desc": "파크시스템스의 3분기 실적이 시장의 기대치보다 낮게 나왔는데요, 장비 출하가 늦어지고 인력을 늘리면서 고정비 부담이 커졌기 때문이에요. 고성장 기업들이 덩치를 키우는 과정에서 흔히 겪는 성장통이라고 볼 수 있거든요. 쉽게 말하면, 더 크게 성장하기 위해 잠시 숨을 고르는 단계라는 말이에요.",
          "easy2_title": "목표주가는 낮췄지만 회사의 성장 가치는 여전히 주목할 만해요",
          "easy2_desc": "증권사는 이익 전망치를 낮추면서 목표주가를 260,000원으로 하향 조정했는데요, 그럼에도 매수 의견은 그대로 유지했어요. 맞춤형 원자현미경 개발과 같은 새로운 성장 동력을 확보하고 비용을 효율적으로 통제한다면 다시 돌파구를 찾을 수 있다고 봤거든요. 차세대 로드맵도 차질 없이 진행되고 있다는 점이 장점이에요.",
          "topic": "파크시스템스의 3분기 실적 부진 원인과 향후 성장 전략에 대한 분석이에요.",
          "points": [
            "3분기 실적 부진: 매출액 620억 원과 영업이익 121억 원을 기록하며 시장의 예상치인 매출액 680억 원, 영업이익 181억 원에 미치지 못했어요. 산업용 원자현미경의 출하가 일부 미뤄진 데다 인력 증가에 따른 고정비 부담이 이어진 결과예요.",
            "성장 동력 확보: 증권사는 파크시스템스가 보유한 기술 가치를 통해 돌파구를 마련할 것으로 봤는데요, 특히 반도체 패키징 투자 확대에 따른 신규 수주와 원자현미경의 수주 강세가 지속되고 있다는 점을 긍정적으로 평가했어요.",
            "차세대 로드맵 진행: 고속 스캔 기능을 갖춘 FX 시리즈의 샘플 출하가 2027년 상반기로 예정되어 있어 차세대 로드맵이 차질 없이 진행 중이라고 판단했어요. 효율적인 비용 통제까지 더해진다면 회사의 성장 가치가 다시 부각될 것으로 보입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 효율적인 비용 통제까지 더해진다면 회사의 성장 가치가 다시 부각될 것으로 보입니다.",
          "body_chars": "9120",
          "link": "https://m.stock.naver.com/research/company/98365",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i9b217ad507",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "미래에셋증권",
          "title": "[미래에셋증권] 뉴로핏 넓어진 판매 채널, 빅파마 계약만 발표된다면!",
          "easy1_title": "AI 투자는 계속되지만 주가 상승은 실적이 뒷받침해야 합니다",
          "easy1_desc": "2027년에도 AI 투자는 계속될 것으로 보입니다. 다만 막대한 투자 비용 때문에 기업의 현금 흐름이 압박을 받고 있는데요, 이로 인해 장기 성장 기대감만으로 높은 주가를 유지하기는 어려워졌다는 말이에요. 쉽게 말하면, 이제는 AI 투자로 진짜 돈을 벌어들이는 실적을 보여줘야 주가가 오를 수 있다는 겁니다.",
          "easy2_title": "미국 증시는 AI 투자와 내수 소비가 함께 이끄는 강세장이 될 겁니다",
          "easy2_desc": "증권사는 2027년 미국 증시가 변동성은 높지만 강세장을 유지할 것으로 봤습니다. AI 투자로 기업 이익이 늘어나는 동시에, 중간선거 이후 민생 지원 정책이 소비를 자극할 것으로 보이기 때문인데요. 다만 물가와 금리가 주가 상승 폭을 제한할 수 있다는 점은 주의해야 한다는 말이에요.",
          "topic": "2027년 미국 증시는 AI 투자 지속과 민생 지원 정책이 맞물리며 실적 장세가 이어질 것으로 전망됩니다.",
          "points": [
            "AI 투자와 실적의 줄다리기: AI 인프라 구축에는 막대한 자금이 들어가지만, AI 서비스 가격은 오히려 떨어지고 있어 기업의 수익성이 고민거리입니다. 증권사는 빅테크 기업들이 투자 재원을 마련하기 위해 회사채를 발행하거나 주주 환원을 줄이고 있다고 분석했습니다. 결국 투자 성과가 매출과 이익으로 이어지는지 확인하는 과정이 필요하다는 겁니다.",
            "중간선거 이후의 정책 변화: 민주당이 중간선거에서 승리하면서 생활비 부담을 줄이려는 민생 지원 정책이 힘을 얻을 것으로 보입니다. 이는 소비 관련주에는 긍정적일 수 있지만, 물가 상승을 자극할 가능성도 있다는 말이에요. 증권사는 AI 투자와 민생 지원 사이에서 정책 우선순위 경쟁이 심화될 것으로 봤습니다.",
            "미국 시장 내 순환매 전략: 미국 시장은 AI 인프라와 활용 기업, 그리고 전통 산업이 골고루 섞여 있어 투자 대안을 찾기에 유리합니다. 증권사는 AI 관련주 내에서도 실적과 현금 흐름에 따라 종목을 선별해야 한다고 조언했는데요. 상반기에는 내수와 AI 업종 간의 순환매가, 하반기에는 AI 수익화 성과가 시장의 방향을 결정할 것으로 보입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 2027년에도 AI 투자는 계속될 것으로 보입니다.; 예측 의심: AI 투자로 기업 이익이 늘어나는 동시에, 중간선거 이후 민생 지원 정책이 소비를 자극할 것으로 보이기 때문; 예측 의심: 2027년 미국 증시는 AI 투자 지속과 민생 지원 정책이 맞물리며 실적 장세가 이어질 것으로 전망됩니다.; 예측 의심: 민주당이 중간선거에서 승리하면서 생활비 부담을 줄이려는 민생 지원 정책이 힘을 얻을 것으로 보입니다.; 예측 의심: 상반기에는 내수와 AI 업종 간의 순환매가, 하반기에는 AI 수익화 성과가 시장의 방향을 결정할 것으로 보입",
          "body_chars": "29970",
          "link": "https://m.stock.naver.com/research/company/98364",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i579aef7d92",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "미래에셋증권",
          "title": "[미래에셋증권] 아이엠비디엑스 4분기 캔서파인드 신제품 공급 개시",
          "easy1_title": "아이엠비디엑스가 암 검진 신제품을 새로 내놓습니다",
          "easy1_desc": "아이엠비디엑스가 암종을 15개 이상 찾아낼 수 있는 캔서파인드 신제품을 4분기부터 시장에 공급하기 시작했거든요. 보급형 모델인 캔서파인드 FIRST는 10월부터 공급을 시작했는데, 검진센터마다 도입하는 절차가 있어서 실제 서비스는 연말이나 내년 초쯤 활성화될 것으로 보입니다. 성능은 15개 암종 기준으로 민감도 79.3%, 특이도 97.6% 수준이라는 말이에요.",
          "easy2_title": "해외 수출은 늘었지만 국내 매출은 줄어든 상황이에요",
          "easy2_desc": "3분기 실적을 뜯어봤더니 수출은 21.2억 원으로 작년보다 61.9% 늘어나면서 이미 작년 연간 수출액을 넘어섰거든요. 반면에 국내 서비스 매출은 6.3억 원으로 작년보다 46.2% 줄었고, 캔서파인드 매출도 4.4억 원으로 전년 동기보다 낮아졌다는 말이에요. 쉽게 말하면 해외 쪽은 성장세가 뚜렷한데 국내는 다소 주춤한 모습이라고 볼 수 있습니다.",
          "topic": "아이엠비디엑스의 3분기 실적을 분석하고 4분기 신제품 공급 계획을 정리한 내용입니다.",
          "points": [
            "3분기 실적 요약: 매출은 12.1억 원으로 전분기보다 20.1% 줄었고 영업손실은 21억 원을 기록했습니다. 다만 매출총이익률은 43.5%로 전분기 수준을 유지했다는 점이 특징이에요.",
            "수출과 내수의 차이: 대만 TSH 바이오팜을 중심으로 일본과 인도 등 해외 서비스 매출이 크게 늘어난 반면, 국내 서비스와 캔서파인드 매출은 전년 동기보다 감소했습니다. 수출 비중이 작년 36%에서 53%로 커진 게 눈에 띄는 부분이에요.",
            "신제품 및 연구 계획: 캔서파인드 FIRST는 기존 제품 가격의 절반 이하로 출시되어 가격 경쟁력을 갖췄다는 평가예요. 또한 임상 근거를 쌓기 위해 3,000명 규모의 전향적 선별검사 연구인 PRECISE를 2028년 2월까지 진행하겠다는 계획입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 보급형 모델인 캔서파인드 FIRST는 10월부터 공급을 시작했는데, 검진센터마다 도입하는 절차가 있어서 실제",
          "body_chars": "5337",
          "link": "https://m.stock.naver.com/research/company/98363",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i91e523b3d4",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "DS투자증권",
          "title": "[DS투자증권] 해성디에스 3Q26 Re: 찐 기판 업체로 성장 중",
          "easy1_title": "환율이 떨어졌는데도 실적은 오히려 좋아졌어요",
          "easy1_desc": "해성디에스가 3분기에 매출 2,453억 원과 영업이익 338억 원을 기록했는데요. 환율이 내려가면 보통 수출 기업은 손해를 보는데, 여기는 제품을 다양하게 섞어 파는 믹스 개선 효과 덕분에 오히려 실적이 잘 나온 겁니다. 쉽게 말하면 환율이라는 악재를 제품 경쟁력으로 뚫어낸 셈이에요.",
          "easy2_title": "새로운 공법에 투자해서 고사양 기판 시장을 노립니다",
          "easy2_desc": "해성디에스가 DDR6 같은 차세대 제품을 만들기 위해 1,900억 원을 들여 패널 공법이라는 새로운 생산 방식을 도입하기로 했는데요. 기존 방식보다 고사양 기판을 만드는 데 유리해서 제품 단가를 높일 수 있다는 장점이 있거든요. 대신 큰돈을 투자하는 만큼 앞으로 고부가 제품을 얼마나 잘 팔아내느냐가 관건이라는 말이에요.",
          "topic": "해성디에스가 DDR5와 DDR6 등 차세대 패키지 기판을 중심으로 구조적 성장을 이어가고 있다는 분석입니다.",
          "points": [
            "3분기 실적 호조: 리드프레임 부문에서 분기 최대 매출을 다시 썼고, 패키지 기판도 DDR5 매출이 늘면서 흑자 전환에 성공했는데요. 특히 패키지 기판 안에서 DDR5가 차지하는 비중이 50%를 넘어서면서 실적을 이끌었다고 봤습니다.",
            "4분기 일시적 조정: 연말에는 주요 고객사들이 재고를 조정하는 통상적인 이벤트가 있어서 4분기 매출은 3분기보다 조금 줄어들 것으로 증권사는 추정했는데요. 하지만 이건 일시적인 현상일 뿐이고 내년 1분기부터는 주문이 다시 정상화될 것으로 봤습니다.",
            "목표주가 하향 조정: 증권사는 해성디에스의 2027년 영업이익을 1,414억 원으로 전망하며 성장세를 높게 평가했는데요. 다만 비슷한 업종에 있는 다른 회사들의 주가가 내려간 점을 반영해서 목표주가를 75,000원으로 낮춰 잡았다는 겁니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "8156",
          "link": "https://m.stock.naver.com/research/company/98362",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "if43282d7f8",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "DS투자증권",
          "title": "[DS투자증권] 한솔케미칼 3Q26 Re: 예상된 부진",
          "easy1_title": "환율이 떨어지면서 3분기 실적이 기대보다 낮게 나왔어요",
          "easy1_desc": "한솔케미칼의 3분기 영업이익을 확인해 봤더니 485억 원으로 시장의 기대치보다 조금 낮게 나왔는데요. 실적이 부진했던 가장 큰 이유는 원달러 환율이 2분기보다 급격하게 떨어졌기 때문이라는 겁니다. 환율 하락으로 인해 분기 실적에 40억 원 수준의 부정적인 영향이 반영된 셈이에요.",
          "easy2_title": "내년에는 과산화수소와 신규 제품으로 성장을 기대합니다",
          "easy2_desc": "증권사는 2027년에 한솔케미칼이 매출 1조 1,405억 원과 영업이익 2,130억 원을 낼 것으로 전망했는데요. 과산화수소는 신규 공장 가동으로 출하량이 늘어날 것이고, 하반기에는 하프늄계 High-K(고유전율 절연막)라는 새로운 제품 공급도 시작될 예정이기 때문이에요. 쉽게 말하면 기존 사업의 확장과 신규 매출이 더해지면서 실적이 회복될 것으로 본다는 겁니다.",
          "topic": "한솔케미칼의 3분기 실적 부진 원인을 분석하고 향후 과산화수소 및 신규 소재 사업을 통한 성장 전망을 다루고 있습니다.",
          "points": [
            "3분기 실적 부진 요인: 환율 하락 외에도 고객사의 QD-LCD(퀀텀닷 액정표시장치) 사용량이 줄어들면서 관련 소재 매출이 부진했거든요. 또한 대만 고객사 내 TSA(전구체) 점유율이 떨어진 것도 매출에 부담으로 작용했다고 증권사는 분석했습니다.",
            "과산화수소 사업의 성과: 반면 국내 과산화수소 사업은 SK하이닉스 M15X 공장의 조기 가동과 판가 인상 덕분에 좋은 성적을 냈는데요. 출하량은 2.5만 톤으로 전 분기 대비 4% 늘었고 매출액도 610억 원을 기록하며 성장세를 보였습니다.",
            "2027년 실적 전망: 증권사는 2027년부터 과산화수소의 신규 팹 가동 효과가 본격화될 것으로 봤는데요. 이와 함께 QD-OLED(퀀텀닷 유기발광다이오드) 출하 증가와 바인더(접착제)의 신규 고객사 공급 확대로 전반적인 매출 성장이 이루어질 것으로 추정했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "8429",
          "link": "https://m.stock.naver.com/research/company/98361",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "ifc3782cad0",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권] 제주항공 한-중 FTA 타결, 중국 관광객도 제주항공을 타고 온다",
          "easy1_title": "한-중 FTA 덕분에 중국 관광객이 제주항공을 더 많이 찾을 거예요",
          "easy1_desc": "이번 한중 정상회담에서 한-중 FTA(자유무역협정) 서비스와 투자 후속 협상이 실질적으로 타결됐는데요. 이제 국내 여행사가 중국 내 23개 지역에서 중국인을 대상으로 해외여행을 주선할 수 있게 됐다는 말이에요. 중국인 관광객이 늘어나면 항공 수요도 함께 커질 텐데, 운수권(항공 노선을 운항할 권리)이 제한된 상황이라 탑승률과 운임이 오를 가능성이 높다고 봤거든요. 쉽게 말하면, 중국인 손님이 늘어나는 만큼 제주항공의 수익에도 긍정적인 영향을 줄 거라는 겁니다.",
          "easy2_title": "항공유 가격은 내리고 노선은 알차게 채워서 이익이 늘어날 거예요",
          "easy2_desc": "최근 싱가폴 항공유 가격이 배럴당 150달러 내외로 떨어지면서, 2027년에는 항공유 단가도 하락세로 돌아설 것으로 증권사는 전망했어요. 여기에 일본과 중국 노선 위주로 수요가 탄탄하게 유지되고 있어서 실적이 좋아질 거라는 건데요. 항공유 비용은 줄어드는데 운임은 잘 유지되니 이익이 늘어날 가시성이 높다는 말이에요. 쉽게 말하면, 비용은 아끼고 매출은 늘어나는 구조가 만들어지고 있다는 겁니다.",
          "topic": "한-중 FTA 타결과 항공유 가격 하락에 따른 제주항공의 실적 개선 전망과 목표주가 상향에 대한 분석이에요.",
          "points": [
            "중국 아웃바운드 시장 확대: 한-중 FTA 후속 협상 타결로 국내 여행사가 중국 현지에서 중국인을 대상으로 해외여행을 주선할 수 있게 됐어요. 제주항공은 이미 중국 운수권을 많이 보유한 LCC(저비용항공사)라 이번 변화로 중국 노선 매출 비중이 더 커질 것으로 증권사는 내다봤거든요. 운수권이 한정된 상태에서 수요만 늘어나는 구조라 운임 상승 효과가 기대된다는 말이에요.",
            "일본 노선의 견조한 수요: 제주항공 매출의 40%를 차지하는 일본 노선도 상황이 좋은데요. 엔저 현상이 이어지고 있고 일본 비만치료제 반입 허용 같은 이벤트가 겹치면서 높은 운임에도 수요가 꺾이지 않고 있어요. 그래서 2027년에는 유류할증료가 줄어들더라도 기본 운임이 오르면서 전체적인 운임 조정폭은 크지 않을 것으로 증권사는 분석했어요.",
            "실적 개선과 목표주가 상향: 항공유 가격이 배럴당 150달러 내외로 하락하면서 2027년에는 비용 부담이 줄어들 것으로 증권사는 봤어요. 이런 흐름을 반영해 2027년 영업이익을 1,400억원으로 수정하고 목표주가도 기존 7,500원에서 10,000원으로 올렸거든요. 이익이 늘어날 가능성이 확실해졌다는 판단에서 나온 결정이라는 말이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "11615",
          "link": "https://m.stock.naver.com/research/company/98360",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "iba0370baa3",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권] 현대글로비스 중국에서 확인한 PCTC에서의 성장 기회",
          "easy1_title": "현대글로비스가 배를 늘려서 중국 차 수출을 꽉 잡으려고 해요",
          "easy1_desc": "현대글로비스가 자동차 운반선인 PCTC를 대거 늘리고 있는데요, 내년 말까지 공급 능력이 20% 이상 커질 것으로 보입니다. 이렇게 배를 늘리는 이유는 중국 자동차 수출이 급증하고 있기 때문인데, 새로 들여오는 대형선은 연료비도 낮아서 수익성에도 도움이 될 거라는 게 증권사의 분석이에요. 쉽게 말하면, 시장 상황에 맞춰 배를 늘려 돈 벌 기회를 잡겠다는 전략인 셈이에요.",
          "easy2_title": "지금 배를 늘려 놓은 게 현대글로비스한테는 큰 기회예요",
          "easy2_desc": "현대글로비스는 2023년부터 배를 미리 발주해 둔 덕분에 2026년부터 2028년 사이에 배를 인도받게 되는데요, 경쟁사들은 대부분 2030년 이후에나 배를 받을 수 있다고 해요. 그래서 선복(배에 짐을 싣는 공간)이 부족한 지금 시기에 현대글로비스가 고운임을 받는 물량을 많이 가져갈 수 있다는 겁니다. 남들보다 한발 앞서 준비한 게 수익으로 이어지고 있다는 말이에요.",
          "topic": "현대글로비스가 중국 자동차 수출 급증에 맞춰 자동차 운반선 선대를 확장하며 성장을 꾀하고 있다는 분석이에요.",
          "points": [
            "선대 확장과 공급 능력: 현대글로비스는 2026년 3분기 말 기준으로 106척의 자동차 운반선을 보유하고 있는데요, 연말까지 4척, 2027년 중으로 10척을 추가로 인도받을 계획이라고 밝혔습니다. 이를 6,500대 선적 기준으로 환산하면 내년 말까지 전체 공급 능력이 20% 이상 늘어나는 셈이에요.",
            "중국 자동차 수출 시장의 성장: 중국 완성차들의 수출 물량이 빠르게 늘고 있는데, 9월 누적 기준으로 작년보다 71%나 증가했다고 해요. 하이통물류 관계자는 중국 자동차 수출이 2030년까지 계속 늘어날 것으로 보고 있으며, 관세 같은 규제가 있어도 중국 내 생산과 수출이 충분히 경쟁력이 있다는 의견을 전했습니다.",
            "2027년 실적 개선 전망: 증권사는 2027년이 선대 확장과 비계열 물류를 통한 믹스 개선 효과가 본격적으로 나타나는 해가 될 것으로 추정했습니다. 이에 따라 2027년 연결 매출액은 36.6조 원, 영업이익은 2.3조 원으로 각각 7%와 9%씩 증가할 것으로 전망했다는 거예요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 현대글로비스가 자동차 운반선인 PCTC를 대거 늘리고 있는데요, 내년 말까지 공급 능력이 20% 이상 커질 ; 예측 의심: 하이통물류 관계자는 중국 자동차 수출이 2030년까지 계속 늘어날 것으로 보고 있으며, 관세 같은 규제가 있",
          "body_chars": "13236",
          "link": "https://m.stock.naver.com/research/company/98359",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "ib447d0de3a",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "iM증권",
          "title": "[iM증권] 삼성전기 마진 피크는 아직 멀었음",
          "easy1_title": "삼성전기 수익성은 지금이 끝이 아니라 더 좋아질 겁니다",
          "easy1_desc": "증권사는 삼성전기의 영업이익률이 2026년 16%에서 2028년 31%까지 계속 오를 것으로 봤는데요. 서버용 부품 비중이 늘고 제품 가격까지 오르면서 수익성이 좋아지는 구조가 만들어졌기 때문이에요. 쉽게 말하면, 회사가 파는 물건의 질이 높아지고 가격도 비싸지니 돈을 더 잘 벌게 된다는 말이에요.",
          "easy2_title": "목표주가는 낮췄지만 여전히 성장 가능성은 높다고 봤습니다",
          "easy2_desc": "증권사는 목표주가를 기존 210만원에서 150만원으로 낮췄는데요. 시장 상황이 바뀌면서 기업 가치를 계산하는 방식을 바꿨기 때문이에요. 하지만 서버용 부품 수요가 탄탄하고 이익 추정치도 오히려 높였으니, 여전히 주가 상승 여력은 충분하다고 판단했다는 겁니다.",
          "topic": "삼성전기는 서버용 부품 중심의 제품 믹스 개선과 판가 인상을 통해 2028년까지 수익성을 지속적으로 높일 것으로 전망됩니다.",
          "points": [
            "수익성 개선과 이익 상향: 증권사는 서버용 MLCC 비중이 늘고 판가 인상 효과가 나타나면서 4분기 영업이익이 기존 예상보다 7% 높을 것으로 봤는데요. 2027년 1분기에는 사상 처음으로 분기 영업이익 1조원을 넘길 것으로 추정했습니다.",
            "수요 지속성과 공급 환경: MLCC와 FC-BGA 같은 핵심 부품은 고객사들의 물량 요구가 많고 증설도 계획대로 진행되고 있는데요. 범용 제품의 리드타임이 길어지는 것을 보면 여전히 공급자에게 유리한 환경이 이어지고 있다는 판단이에요.",
            "밸류에이션 방식 변경: 증권사는 기존의 SOTP 방식 대신 12MF P/E를 적용하는 방식으로 밸류에이션 기준을 바꿨는데요. 대외 변수로 인한 변동성이 커진 점을 반영한 조치이며, 이를 통해 목표주가를 150만원으로 조정했습니다."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 삼성전기는 서버용 부품 중심의 제품 믹스 개선과 판가 인상을 통해 2028년까지 수익성을 지속적으로 높일 것; point2 근거 원문에 없음",
          "body_chars": "15703",
          "link": "https://m.stock.naver.com/research/company/98358",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i51f68bed30",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "신한투자증권",
          "title": "[신한투자증권] SFA NDR 후기: 27년 연결이익 대폭 레벨업",
          "easy1_title": "올해 4분기에 수주가 크게 늘어나면 주가도 오를 것으로 봤어요",
          "easy1_desc": "3분기에는 수주가 좀 줄어든 것처럼 보였는데, 이건 사실 일이 취소된 게 아니라 뒤로 미뤄진 것뿐이라고 해요. 증권사는 4분기에 분기 최대 규모의 수주를 달성하면서 연간 목표인 1.3조원을 충분히 채울 수 있을 것으로 봤거든요. 이렇게 수주가 다시 살아나는 모습이 확인되면 주가도 턴어라운드(실적 개선)할 가능성이 높다는 겁니다.",
          "easy2_title": "2027년에는 반도체 사업이 커지면서 이익이 크게 뛸 거예요",
          "easy2_desc": "2027년은 반도체 전공정 장비 진입과 자회사인 SFA반도체의 실적 개선이 동시에 일어나는 해가 될 것으로 봤는데요, 이 덕분에 회사 전체의 이익 수준이 한 단계 더 올라갈 것으로 전망했어요. 특히 자사주 19%를 모두 소각하게 되면 주당 가치가 더 높아지는 장점이 있는데, 대신 소각 시점은 수주와 매출이 확실히 늘어나는 때에 맞추겠다는 계획이에요.",
          "topic": "SFA가 반도체 장비 사업을 중심으로 성장하며 2027년에 큰 폭의 이익 성장을 이룰 것이라는 증권사의 분석이에요.",
          "points": [
            "4분기 수주 회복: 3분기 수주가 부진했던 건 일시적인 이연 현상일 뿐이라고 봤어요. 4분기에는 반도체 HBM(고대역폭메모리) 후속 라인과 기판 물류 등 다양한 파이프라인이 대기 중이라 연간 수주 목표 1.3조원 달성은 문제없을 것으로 봤다는 거예요.",
            "반도체 사업 확장: 과거 디스플레이 중심이었던 사업 구조를 반도체 후공정에서 전공정으로 넓히고 있다고 해요. 특히 AI(인공지능)를 활용한 물류 경로 재할당 기술이 일본 경쟁사 대비 차별점인데, 이를 통해 고객사의 투자비를 줄여주는 효과가 있다고 봤어요.",
            "주주환원과 이익 레벨업: 자사주 22% 중 19%를 소각하겠다는 공감대가 형성되어 있다고 해요. 2027년에는 본업의 수주 점프와 자회사 SFA반도체의 이익이 더해져 연결 기준 이익이 크게 늘어날 것으로 추정했어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "13710",
          "link": "https://m.stock.naver.com/research/company/98357",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i66b7064047",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "유진투자증권",
          "title": "[유진투자증권] 쿠콘 3Q26 Review: 실적 성장 불구, 주가는 저평가",
          "easy1_title": "쿠콘이 분기 최대 매출을 찍으며 잘나가고 있어요",
          "easy1_desc": "쿠콘의 3분기 실적을 분석해 봤더니 매출액 203억 원으로 분기 기준 역대 최고치를 기록했는데요. 영업이익도 51억 원을 내면서 9분기 연속으로 전년 동기 대비 증가세를 이어갔다는 겁니다. 쉽게 말하면 데이터와 페이먼트 양쪽 사업에서 모두 매출이 늘어나며 실적 성장을 이끌었다는 말이에요.",
          "easy2_title": "실적은 계속 좋아지는데 주가는 저평가 상태예요",
          "easy2_desc": "증권사는 쿠콘의 현재 주가가 2026년 실적 기준으로 PER(주가수익비율) 8.4배 수준이라고 봤는데요. 이는 최근 5년 동안의 평균 PER인 45.6배와 비교했을 때 크게 낮은 수준이라 투자 매력이 있다고 분석한 겁니다. 실적은 계속 성장할 것으로 보이지만 주가는 그만큼 반영되지 않았다는 뜻이에요.",
          "topic": "쿠콘의 3분기 실적을 검토하고 앞으로의 성장 가능성과 주가 수준을 평가한 리포트입니다.",
          "points": [
            "부문별 실적 성장: 페이먼트 부문은 빅테크와 대형 PG사 거래가 늘면서 전년 동기 대비 21.4% 성장했고, 데이터 부문도 공공기관 프로젝트 매출이 반영되며 12.3% 증가했는데요. 두 부문이 모두 힘을 보태면서 전체 매출이 200억 원대를 처음으로 넘어선 겁니다.",
            "영업이익률 하락의 이유: 영업이익은 계속 늘고 있지만 영업이익률은 25.2%로 전년 동기보다 2.4%p 떨어졌는데요. 이는 수익성이 좋은 데이터 부문에서 구축형 프로젝트 비중이 커지면서 전체적인 이익률을 낮췄기 때문이라는 분석입니다.",
            "향후 서비스 확대 계획: 증권사는 쿠콘이 4분기에도 신규 서비스 출시를 통해 매출 성장세를 이어갈 것으로 봤는데요. 데이터 부문에서는 MCP 기반 API 상품을 100여 종까지 늘리고, 페이먼트 부문에서는 디지털 자산 결제 앱을 출시할 계획이라는 겁니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 실적은 계속 성장할 것으로 보이지만 주가는 그만큼 반영되지 않았다는 뜻이에요.",
          "body_chars": "15497",
          "link": "https://m.stock.naver.com/research/company/98356",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i7b7c752b4a",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "유진투자증권",
          "title": "[유진투자증권] KX 3Q26 Review: 똑똑한 자회사들이 실적 성장 견인",
          "easy1_title": "자회사들이 잘해서 실적이 좋아졌어요",
          "easy1_desc": "KX의 3분기 실적을 살펴봤더니 매출은 1,160억 원, 영업이익은 216억 원을 기록했는데요. 방송 부문은 작년과 비슷한 수준을 유지했지만, 레저와 제조, 기타 부문이 매출 성장을 이끌면서 좋은 성적을 낸 겁니다. 쉽게 말하면, 방송 외에 다른 자회사들이 똑똑하게 역할을 해준 덕분에 전체 실적이 성장했다는 말이에요.",
          "easy2_title": "앞으로도 제조와 레저 부문이 성장을 이끌 것 같아요",
          "easy2_desc": "증권사는 4분기에도 매출액 1,211억 원, 영업이익 71억 원으로 성장세가 이어질 것으로 봤는데요. 인공지능(AI) 데이터센터에 들어가는 부품 수요가 계속 많고, 작년 말에 인수한 골프장 실적도 반영될 예정이기 때문이에요. 여기에 해외 레저 사업을 넓히고 새로운 회사를 편입하는 등 성장 동력을 계속 키우겠다는 계획입니다.",
          "topic": "KX가 자회사의 성장을 바탕으로 3분기에 안정적인 실적을 냈으며, 앞으로도 제조와 레저 부문을 중심으로 성장할 것으로 증권사는 전망했습니다.",
          "points": [
            "3분기 실적 성장 배경: 제조 부문과 기타 부문의 매출이 작년 같은 기간보다 각각 63.6%, 131.5% 늘어나면서 전체 성장을 이끌었는데요. 특히 제조 부문은 인공지능 데이터센터용 부품 수요가 급증하면서 분기 최고 매출을 기록했다는 겁니다.",
            "레저 및 방송 부문 변화: 작년 3분기부터 계속 줄어들던 레저 부문 매출이 올해 1분기부터 3분기 연속으로 늘어나는 흐름으로 바뀌었는데요. 방송 부문도 12개 분기 동안 이어지던 매출 감소세를 멈추고 작년 수준을 유지했다는 점이 긍정적입니다.",
            "현재 주가 수준: 증권사는 현재 주가가 올해 예상 실적을 기준으로 주가수익비율(PER) 5.0배 수준이라고 분석했는데요. 이는 국내 비슷한 업종의 평균인 16.9배보다 크게 낮은 상태라 투자 매력이 있다고 봤습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "17672",
          "link": "https://m.stock.naver.com/research/company/98355",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i9a5e2f7b49",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "유진투자증권",
          "title": "[유진투자증권] 하이비젼시스템 3Q26 Review: 27년의 실적이 기대되는 세 가지",
          "easy1_title": "하이비젼시스템이 7분기 만에 매출 600억대를 되찾았습니다",
          "easy1_desc": "하이비젼시스템이 최근 3분기 실적을 발표했는데요, 매출액 630억 원을 기록하며 7분기 만에 600억 원대 매출을 회복했습니다. 영업이익도 21억 원으로 8분기 만에 흑자 전환에 성공했거든요. 다만 시장에서 기대했던 수치보다는 낮게 나왔는데, 이는 일부 매출이 다음 분기로 미뤄지고 환율이 급락한 영향이 컸던 것으로 보입니다.",
          "easy2_title": "2027년에는 사업 다각화로 실적이 더 좋아질 것으로 보입니다",
          "easy2_desc": "증권사는 하이비젼시스템이 2027년에 제품과 고객, 사업을 모두 넓히며 한 단계 더 성장할 것으로 봤습니다. 특히 2차전지(배터리) 부문 매출이 700억 원 이상으로 늘어날 것으로 기대하고 있는데요. 현재 주가는 2027년 예상 실적 기준으로 국내 동종 업체들보다 낮은 수준이라 투자 매력이 있다고 판단했습니다.",
          "topic": "하이비젼시스템의 3분기 실적을 분석하고 2027년의 성장 가능성을 전망한 리포트입니다.",
          "points": [
            "3분기 실적 회복세: 매출액이 전년 동기보다 7.4% 늘어나며 600억 원대를 회복했고, 영업이익도 흑자로 돌아섰습니다. IT와 모바일 부문이 실적을 이끌었고 전장 부문 매출도 크게 늘었지만, 2차전지 부문은 작년보다 매출이 줄어든 모습입니다.",
            "2027년 성장 전략: 주요 고객사의 신제품 출시에 맞춰 검사장비 공급을 늘리고, 인도 공장을 중심으로 고객사를 다변화할 계획입니다. 또한 2차전지 부문의 수주 잔고를 바탕으로 해당 사업 매출을 700억 원 이상으로 키우겠다는 목표를 세웠습니다.",
            "주가 매력도 분석: 증권사는 2027년 예상 실적을 기준으로 하이비젼시스템의 주가수익비율(PER)이 5.0배 수준이라고 분석했습니다. 이는 국내 비슷한 업종의 평균인 10.8배보다 낮아 가격 경쟁력이 있다고 봤습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 특히 2차전지(배터리) 부문 매출이 700억 원 이상으로 늘어날 것으로 기대하고 있는데요.",
          "body_chars": "17080",
          "link": "https://m.stock.naver.com/research/company/98354",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "id0b4d0e5bf",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "한국IR협의회",
          "title": "[한국IR협의회] 성광벤드 경쟁사와 시총 역전, 프리미엄을 되찾을 2027년",
          "easy1_title": "북미 LNG 수출이 늘면서 성광벤드도 바빠지고 있어요",
          "easy1_desc": "북미 지역에서 LNG를 수출하려는 움직임이 커지면서, 배관을 연결하는 부품인 피팅을 만드는 성광벤드도 덩달아 수혜를 입고 있다는 말이에요. 미국이 세계 1위 LNG 수출국이 되면서 관련 설비 투자가 계속 늘고 있거든요. 다만 미국이 철강 관세를 높게 매기면서 수익성이 다소 떨어지는 단점도 있는데, 그럼에도 불구하고 현지 공급이 부족해서 주문은 계속 들어오는 상황이라고 봤습니다.",
          "easy2_title": "조선업 호황과 중동 재건 사업이 성광벤드의 기회예요",
          "easy2_desc": "조선업계가 LNG 운반선 같은 고부가가치 선박을 많이 수주하면서, 여기에 들어가는 피팅 수요도 함께 늘어날 것으로 증권사는 보고 있어요. 또 중동 지역에서 전쟁으로 파괴된 에너지 설비를 다시 짓는 복구 사업이 시작되면, 전통적으로 중동에 강점이 있는 성광벤드에 큰 일감이 생길 수 있다는 겁니다. 쉽게 말하면, 북미와 조선, 중동이라는 세 가지 엔진이 성광벤드의 성장을 이끌 준비를 하고 있다는 말이에요.",
          "topic": "성광벤드는 북미 LNG 시장과 조선업 슈퍼 사이클, 중동 전후 복구 수요를 바탕으로 2027년 실적 반등을 노리고 있습니다.",
          "points": [
            "북미 LNG 수출 호황: 미국이 세계 최대 LNG 수출국으로 올라서면서 관련 인프라 투자가 활발해졌는데요, 이 과정에서 영하 160도 이하를 견뎌야 하는 고사양 피팅 수요가 늘고 있습니다. 증권사는 관세 부담에도 불구하고 북미 고객사들이 물량을 확보하려는 의지가 강해 성광벤드의 실적을 뒷받침할 것으로 봤습니다.",
            "조선업 슈퍼 사이클과 해양플랜트: 국내 조선사들의 수주 잔고가 역사적 최대치를 기록하면서, LNG 운반선 등 고부가가치 선박에 들어가는 피팅 수요도 함께 증가하고 있습니다. 특히 해양플랜트는 일반 상선보다 피팅이 수십 배 더 많이 들어가기 때문에, 삼성중공업 등 주요 조선사의 해양 설비 수주가 성광벤드의 수익성을 높여줄 것으로 증권사는 추정했습니다.",
            "중동 전후 복구 수요: 중동 지역의 지정학적 분쟁으로 파괴된 에너지 설비를 복구하는 데 최대 580억 달러가 필요할 것으로 추산되는데요, 이 복구 사업이 본격화되면 전통적으로 중동 시장에서 강점을 보여온 국내 피팅 업체들에 대규모 발주가 집중될 것으로 증권사는 전망했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "긴 원문 — 앞 30000자만 읽음(전체 42896자)",
          "body_chars": "42896",
          "link": "https://m.stock.naver.com/research/company/98353",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i08fbbd9222",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "한국IR협의회",
          "title": "[한국IR협의회] 나노솔루션 SWCNT 분산 기술을 보유한 첨단소재 기업",
          "easy1_title": "탄소나노튜브 기술로 차량용 디스플레이 소재를 만드는 회사예요",
          "easy1_desc": "나노솔루션은 탄소나노튜브라는 첨단 소재를 다루는 기업인데요, 이 소재를 잘게 쪼개고 섞는 기술을 가지고 있어요. 이 기술로 자동차 화면에 들어가는 코팅액을 만들어 글로벌 완성차 브랜드에 공급해 왔거든요. 쉽게 말하면, 자동차 안의 디스플레이가 터치를 잘 인식하게 돕는 핵심 부품을 만드는 셈이에요.",
          "easy2_title": "자동차 소재 매출이 줄면서 새로운 먹거리를 찾고 있어요",
          "easy2_desc": "주력인 차량용 코팅액 매출이 줄어들면서 2026년에는 영업 적자가 날 것으로 증권사는 보고 있어요. 그래서 회사는 전자기기용 잉크나 배터리 소재 같은 새로운 분야로 눈을 돌리고 있는데요, 2027년부터는 이런 신규 소재에서 매출이 본격적으로 나올 것으로 기대하고 있다는 거예요. 다만 아직은 고객사 평가 단계라 실제 성과가 나오기까지는 시간이 좀 필요해 보입니다.",
          "topic": "나노솔루션은 탄소나노튜브 분산 기술을 바탕으로 기존 차량용 디스플레이 소재에서 전자기기 및 이차전지 소재로 사업 영역을 넓히고 있는 기업입니다.",
          "points": [
            "차량용 디스플레이 소재 사업: 나노솔루션은 2017년부터 차량용 디스플레이에 쓰이는 코팅액을 양산해 왔는데요, 이 제품은 온도 변화가 심한 차 안에서도 성능이 유지되는 장점이 있어요. 덕분에 글로벌 완성차 브랜드의 고급 차종에 공급되고 있지만, 최근 전방 시장의 수요가 줄면서 매출이 감소하는 추세라고 증권사는 분석했어요.",
            "이차전지 소재로의 확장: 배터리 성능을 높이기 위해 실리콘 음극재를 쓰는 경우가 많은데, 이때 전기가 잘 통하게 돕는 탄소나노튜브 도전재가 꼭 필요해요. 회사는 이 소재를 직접 합성하고 분산하는 기술을 개발 중인데요, 2028년에는 연간 5톤 규모의 양산을 목표로 하고 있다고 밝혔어요.",
            "실적 부진과 신규 사업의 과제: 2026년에는 차량용 소재 매출 감소와 신규 사업 개발비 부담이 겹치면서 영업 적자가 예상된다고 증권사는 봤어요. 앞으로 기업 가치가 오르려면 전자기기용 잉크나 배터리 소재 같은 신규 사업이 고객사 승인을 통과해 실제 매출로 이어지는지가 가장 중요하다고 강조했어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 그래서 회사는 전자기기용 잉크나 배터리 소재 같은 새로운 분야로 눈을 돌리고 있는데요, 2027년부터는 이런",
          "body_chars": "27148",
          "link": "https://m.stock.naver.com/research/company/98352",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i74e2dd1ca9",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "한국IR협의회",
          "title": "[한국IR협의회] 아이씨디 OLED 투자 확대와 반도체 장비 시장 진입",
          "easy1_title": "아이씨디는 OLED 장비로 돈을 벌고 반도체 시장으로도 발을 넓히고 있어요",
          "easy1_desc": "아이씨디는 디스플레이 패널을 만드는 장비인 HDP Etcher를 주로 만드는 회사인데요, 최근에는 OLED 투자 확대 덕분에 실적이 좋아지고 있어요. 여기에 그치지 않고 반도체 패키징에 쓰이는 유리기판 장비 시장에도 새로 진입해서 매출을 늘리겠다는 계획이에요. 쉽게 말하면, 기존 디스플레이 사업에서 번 돈으로 새로운 반도체 장비 사업을 키우고 있는 셈이에요.",
          "easy2_title": "올해 하반기부터 실적이 회복되고 있고 앞으로는 반도체 장비 매출도 기대돼요",
          "easy2_desc": "올해 상반기에는 장비 매출이 하반기에 몰리면서 실적이 좀 부진했는데요, 하반기부터는 국내외 OLED 보완투자와 신규 투자 덕분에 실적이 회복될 것으로 증권사는 봤어요. 내년에는 반도체 장비 매출도 본격적으로 더해지면서 영업이익이 더 늘어날 것으로 추정했거든요. 다만 반도체 장비는 고객사의 인증과 양산 일정에 따라 실적이 달라질 수 있다는 점도 기억해야 해요.",
          "topic": "아이씨디는 OLED 장비 수요 증가와 반도체 유리기판 장비 시장 진입을 통해 실적 회복과 사업 다각화를 추진하고 있어요.",
          "points": [
            "OLED 장비 수요 확대: 삼성디스플레이와 BOE 등 주요 패널 업체들이 8.6세대 OLED 투자를 늘리면서 아이씨디의 주력 장비인 HDP Etcher 수요가 늘고 있어요. 기존 6세대 라인을 LTPO 기술로 바꾸거나 터치 센서를 내재화하는 보완투자도 이어지고 있어서 장비 발주가 계속될 것으로 증권사는 봤어요.",
            "반도체 장비 시장 진입: 아이씨디는 유리기판을 만드는 데 필요한 BDF Etcher 장비를 2023년에 처음 공급하면서 반도체 장비 시장에 발을 들였어요. 앞으로 유리기판 양산이 본격화되면 Metal Etcher나 HDP CVD 같은 추가 장비도 고객사에 공급할 수 있을 것으로 기대하고 있어요.",
            "실적 회복과 전망: 올해는 상반기 부진을 딛고 하반기에 장비 매출이 집중되면서 실적이 회복될 것으로 증권사는 추정했어요. 내년에는 디스플레이 장비 매출이 소폭 줄더라도 반도체 장비 매출이 더해지면서 전체적인 영업이익은 올해보다 크게 늘어날 것으로 봤다는 거예요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 앞으로 유리기판 양산이 본격화되면 Metal Etcher나 HDP CVD 같은 추가 장비도 고객사에 공급할 ; 긴 원문 — 앞 30000자만 읽음(전체 35462자)",
          "body_chars": "35462",
          "link": "https://m.stock.naver.com/research/company/98351",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "icf8945ad13",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "IBK투자증권",
          "title": "[IBK투자증권] 삼양컴텍 수출 확대와 증설 효과 가시화",
          "easy1_title": "수출이 늘어나면서 돈을 더 잘 벌게 됐어요",
          "easy1_desc": "삼양컴텍이 3분기에 영업이익 62억원을 기록하며 시장 기대치를 11%나 웃돌았는데요. 국내 방산 물량은 줄었지만, 수익성이 좋은 수출형 제품 비중이 59.9%까지 늘어난 덕분이에요. 여기에 원재료 공급망을 넓히고 공정을 자동화해서 비용을 아낀 것도 큰 몫을 했거든요. 쉽게 말하면, 해외에서 돈을 더 잘 벌어오는 구조로 바뀌었다는 말이에요.",
          "easy2_title": "공장을 늘리고 제품군을 넓혀서 성장을 준비 중이에요",
          "easy2_desc": "내년부터는 구미 3공장 증설 효과가 본격적으로 나타날 것으로 증권사는 보고 있는데요. 생산 능력이 커지면 폴란드 후속 계약이나 새로운 수출 물량에 더 잘 대응할 수 있다는 겁니다. 게다가 특수장갑을 장갑차나 무인차량 같은 다양한 곳에 쓸 수 있게 넓히고 있어서 중장기적인 성장 동력도 갖췄다는 평가예요.",
          "topic": "삼양컴텍이 수출 비중을 높이고 생산 능력을 키우면서 수익성을 개선하고 성장 동력을 확보하고 있다는 분석이에요.",
          "points": [
            "수출 중심의 수익성 개선: 수출형 제품의 매출 비중이 59.9%까지 상승하면서 수익성이 좋아졌는데요. 원재료 공급망을 다변화하고 공정 자동화와 수율 안정화를 통해 원가율을 낮춘 점도 긍정적이라고 증권사는 분석했어요.",
            "현대로템향 매출 성장: 현대로템의 K2PL 공급이 늘어나면서 외형 성장이 이어질 것으로 증권사는 전망했어요. 특히 K2PL은 방호 성능을 높이면서 공급 단가가 30% 정도 높아져서 제품 믹스 개선에 따른 수익성 상승도 기대된다는 겁니다.",
            "생산 능력 확대와 목표주가: 내년부터 구미 3공장 증설 효과가 본격화되어 수출 대응력이 강화될 것으로 증권사는 봤는데요. 다만 시장 밸류에이션 하락을 반영해서 목표주가는 7,500원으로 하향 조정했다고 밝혔어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "9582",
          "link": "https://m.stock.naver.com/research/company/98350",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "ida55112f3c",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "IBK투자증권",
          "title": "[IBK투자증권] 한라캐스트 시작된 로봇 양산",
          "easy1_title": "한라캐스트가 로봇 부품을 대량으로 만들기 시작했어요",
          "easy1_desc": "한라캐스트는 원래 자동차 부품을 만들던 곳인데, 이제는 휴머노이드 로봇에 들어가는 부품까지 직접 생산하고 있습니다. 로봇은 관절이 많아서 가벼워야 하는데, 이 회사가 가진 금속을 녹여 모양을 만드는 다이캐스팅 기술이 딱 맞거든요. 2026년 3분기부터는 글로벌 AI 고객사에 부품을 보내기 시작했는데요, 앞으로 로봇이 많이 만들어질수록 이 회사의 부품 수요도 늘어날 것으로 증권사는 보고 있습니다.",
          "easy2_title": "공장을 넓혀서 주문받은 물량을 차근차근 채우고 있어요",
          "easy2_desc": "한라캐스트는 밀려드는 주문을 소화하려고 생산 시설을 계속 늘리고 있는데요, 제2공장까지 가동하면 매출 기준으로 생산 능력이 최대 3,000억원까지 커질 것으로 보입니다. 이미 확보해 둔 수주잔고만 해도 2025년 매출의 5.9배에 달할 정도로 많거든요. 이렇게 생산 기반을 미리 다져 놓은 덕분에 앞으로 로봇이나 자동차 부품 주문이 더 들어와도 문제없이 대응할 수 있다는 겁니다.",
          "topic": "한라캐스트가 자동차 부품 제조 노하우를 바탕으로 로봇 부품 시장에 성공적으로 진입하며 중장기적인 성장을 준비하고 있다는 내용입니다.",
          "points": [
            "휴머노이드 시장 진입: 한라캐스트는 자동차 전장 부품을 만들며 쌓은 정밀 주조 기술을 활용해 글로벌 AI 기업의 협력사가 되었습니다. 2025년부터는 직접 거래를 시작하며 로봇 부품 개발까지 영역을 넓혔는데요, 다른 업체들이 아직 개발 단계에 머물러 있는 것과 달리 이미 양산 출하를 시작했다는 점이 강점입니다.",
            "마그네슘 기술 경쟁력: 로봇을 가볍게 만드는 데는 마그네슘이 유리한데, 이 소재는 다루기가 까다로워서 기술력이 있는 업체만 만들 수 있습니다. 한라캐스트는 20년 동안 마그네슘 다이캐스팅 사업을 해오면서 독보적인 노하우를 쌓았거든요. 그래서 국내에서 마그네슘 부품을 대량으로 생산할 수 있는 몇 안 되는 기업으로 꼽힙니다.",
            "생산 능력 확대와 실적: 증권사는 한라캐스트가 2027년에는 매출 2,284억원을 기록할 것으로 전망했습니다. 공장 증설 효과로 생산량이 늘어나면 고정비 부담이 줄어들어 영업이익률도 7.9%까지 개선될 것으로 봤는데요, 로봇 부품 출하가 본격화되면서 실질적인 매출 성장이 나타날 것으로 기대하고 있습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 한라캐스트는 밀려드는 주문을 소화하려고 생산 시설을 계속 늘리고 있는데요, 제2공장까지 가동하면 매출 기준으",
          "body_chars": "15463",
          "link": "https://m.stock.naver.com/research/company/98348",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i8701993823",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권]  한한령 완화 기대감 관련 코멘트",
          "easy1_title": "한중 FTA 타결로 한한령 완화 기대가 다시 살아나고 있어요",
          "easy1_desc": "18일 한중 자유무역협정(FTA) 서비스 및 투자 협상이 타결되면서 한한령 완화에 대한 기대감이 다시 커지고 있는데요. 중국은 영화와 게임 분야에서 한국에 최혜국대우를 약속했고, 드라마나 예능 같은 공동제작 대상을 넓히는 내용을 처음으로 명문화했습니다. 또한 중국 내 한국 기업이 중국인과 외국인을 대상으로 여행 영업을 할 수 있게 허가했거든요. 중국 정부가 그동안 한한령은 없다고 주장해 왔던 걸 생각하면, 이번 규제 완화를 명문화한 것만으로도 상당한 의미가 있다는 겁니다.",
          "easy2_title": "실질적 수혜는 제한적일 수 있지만 주가는 저평가 상태라 매수할 만해요",
          "easy2_desc": "이번 조치가 의미는 있지만, 게임이나 영화처럼 중국 현지 기업이 이미 잘 대응하는 분야의 규제 완화가 많아 수혜주는 제한적일 수 있다는 한계도 분명히 보입니다. 하지만 증권사는 중국이 굳이 APEC 정상회의에서 이 협상을 발표한 점을 볼 때, 향후 콘서트나 드라마 공동 제작까지 확대될 가능성이 높다고 봤는데요. 무엇보다 관련 기업들의 주가가 역사적 저평가 구간에 머물러 있어서, 실제 수혜 여부를 떠나 지금은 매수로 대응하는 게 합리적이라고 판단했다는 거예요.",
          "topic": "한중 FTA 서비스 및 투자 협상 타결이 엔터, 미디어, 레저 산업에 미칠 영향과 투자 전략에 대한 분석이에요.",
          "points": [
            "드라마 제작사의 실적 개선: 스튜디오드래곤 같은 드라마 제작사는 한한령 이후에도 구작 판매가 이어지고 있는데, 중국 현지 방영이 본격화되면 편당 30~40억원의 추가 매출이 예상된다고 봤습니다. 제작비 부담 없이 매출이 발생하는 구조라 이익 레버리지가 크고, 동시 방영까지 재개된다면 영업이익이 최대 1,000억원까지 가능할 것으로 증권사는 추정했어요.",
            "여행 및 항공 산업의 기회: 하나투어 등 여행사는 중국 현지 아웃바운드 영업 허가로 새로운 성장 동력을 얻게 되었는데요. 중국 노선이 확대되면 여행사뿐만 아니라 LCC(저비용항공사) 등 항공주들도 높은 시너지를 낼 수 있을 것으로 증권사는 전망했습니다.",
            "기획사의 콘서트 재개 기대: 중장기적으로 콘서트가 재개된다면 4대 기획사는 평균 40% 내외의 증익이 가능할 것으로 증권사는 추정했습니다. 특히 중국 팬덤이 강력한 YG와 SM의 수혜가 클 것으로 봤는데, 다만 일본인 멤버가 포함된 그룹의 경우 한일령 강화라는 맥락에서 수혜 여부가 불투명할 수 있다는 점도 함께 언급했어요."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "긴 원문 — 앞 30000자만 읽음(전체 33813자); point2 근거 원문에 없음",
          "body_chars": "33813",
          "link": "https://m.stock.naver.com/research/industry/47084",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i72874a7c5b",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권]  3년전 BEAD 프로그램이었다면 지금은 OBBBA를 봐라",
          "easy1_title": "과거 광통신 주가 폭등을 이끈 BEAD 예산을 기억하세요",
          "easy1_desc": "2023년에 미국에서 BEAD(광대역 형평성 접근 및 배포) 프로그램 예산이 확정되면서, 관련 광통신 기업들의 주가가 2024년 이후 크게 올랐거든요. 루멘텀이나 코히런트 같은 기업이 대표적인데, 정책이 실제 실적으로 이어지기까지 시간이 걸려도 주가는 먼저 반응했다는 말이에요. 쉽게 말하면, 정부의 대규모 통신 정책이 관련 산업 주가를 끌어올리는 강력한 신호가 된다는 겁니다.",
          "easy2_title": "이제는 OBBBA 법안에 따른 주파수 경매를 주목할 때입니다",
          "easy2_desc": "미국이 2025년 7월에 통과시킨 OBBBA 법안을 보면, 2029년까지 총 800MHz의 주파수를 통신사에 할당하겠다는 계획이 담겨 있어요. 이렇게 되면 미국은 전 세계에서 가장 많은 5G와 6G 주파수를 가진 나라가 되거든요. 증권사는 이런 대규모 주파수 할당이 결국 무선통신장비 기업들에게 큰 기회가 될 것으로 봤다는 거예요.",
          "topic": "미국의 대규모 주파수 할당 정책인 OBBBA 법안이 국내 무선통신장비 기업들의 주가에 긍정적인 영향을 줄 것으로 전망했어요.",
          "points": [
            "미국의 주파수 확보 전략: 미국이 주파수 할당에 총력을 기울이는 이유는 막대한 재정을 확보하고, 피지컬 AI(AI와 통신, 디바이스가 결합된 기술) 분야에서 패권을 잡기 위해서라고 증권사는 분석했어요. 스페이스X나 엔비디아 같은 기업들이 5G와 6G를 통해 수익을 창출하려는 목적도 깔려 있다는 거예요.",
            "무선통신장비주 수혜 가능성: 과거에도 각국 정부가 주파수 할당 정책을 펼칠 때마다 무선통신장비 업체들이 큰 수혜를 입었던 전례가 있거든요. 증권사는 2027년부터 본격화될 미국의 주파수 경매가 국내 관련 기업들의 주가 상승을 이끌 가능성이 높다고 봤어요.",
            "주목해야 할 국내 기업: 증권사는 과거 주파수 경매가 주가에 미치는 영향을 경험했던 사례들을 언급하며, 미국 신규 주파수 경매 시 수혜를 볼 업체들에 관심을 가질 필요가 있다고 밝혔어요. 특히 케이엠더블유, RFHIC, LIG아큐버 등을 중심으로 살펴볼 필요가 있다는 거예요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "6091",
          "link": "https://m.stock.naver.com/research/industry/47083",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "id08f45fa2f",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권]  하나 Biweekly 제약/바이오: 코스피 제약사 중심으로 헬스케어 상승 확인",
          "easy1_title": "코스피 제약사들이 헬스케어 시장 상승세를 이끌고 있어요",
          "easy1_desc": "최근 제약과 바이오 산업을 살펴봤더니 코스피에 상장된 제약사들이 눈에 띄는 성과를 내고 있는데요. 한미약품의 임상 결과가 좋게 나왔고, 미국 정치 상황 변화로 바이오시밀러 기업들이 주목받고 있기 때문이에요. 덕분에 헬스케어 섹터 수익률이 상위권인데, 그 중심에 코스피 제약사가 있다는 말이에요. 쉽게 말하면 지금은 코스피 쪽 제약사들이 시장 분위기를 주도하고 있는 셈이에요.",
          "easy2_title": "바이오텍 주가가 오르려면 확실한 성과를 보여줘야 합니다",
          "easy2_desc": "코스닥 바이오텍 주가가 회복되려면 단순히 기술이전 가능성만으로는 부족하다고 봤는데요. 투자자들의 눈높이가 높아진 만큼, 계획된 일정에 따른 연구개발 성과나 구체적인 기술 데이터가 뒷받침되어야 한다는 거예요. 그래야만 시장의 신뢰를 얻고 주가 상승으로 이어질 수 있다는 말이에요. 쉽게 말하면 이제는 말뿐인 기대감보다 확실한 결과물을 보여주는 기업이 선택받는다는 겁니다.",
          "topic": "하나증권은 2026년 11월 제약 및 바이오 산업을 점검하고 코스피 제약사 중심의 상승세와 향후 투자 전략을 분석했어요.",
          "points": [
            "코스피 제약사의 호재: 한미약품의 에피노페그듀타이드 임상 결과가 우수하게 나왔고, 한올바이오파마의 기술이전 물질도 통계적으로 유의한 성과를 보였는데요. 미국 민주당의 선거 승리로 바이오시밀러 기업인 셀트리온과 삼성에피스홀딩스의 주가 상승 가능성도 커졌다고 봤어요.",
            "코스닥 바이오텍의 과제: 코스닥 바이오텍은 알테오젠을 제외하면 전반적으로 성과가 부진한 편인데요. 증권사는 코스닥 바이오텍의 수급이 회복되려면 시가총액 상위 종목들이 실질적인 성과를 입증해야 한다고 봤어요.",
            "투자 전략과 추천 종목: 증권사는 국내 제약사의 가치가 충분히 회복되었다고 판단될 때 바이오텍 비중을 확대하는 전략을 제안했는데요. 11월 추천 종목으로 코스피는 삼성바이오로직스와 SK바이오팜을, 코스닥은 올릭스와 디앤디파마텍을 꼽았어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "긴 원문 — 앞 30000자만 읽음(전체 34867자)",
          "body_chars": "34867",
          "link": "https://m.stock.naver.com/research/industry/47082",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "ifeea055bcf",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권]  시장이 밀어주는 때는 반드시 다시 온다",
          "easy1_title": "제약 바이오 섹터는 지금 밀려 내려왔지만 다시 올라갈 차례입니다",
          "easy1_desc": "올해 제약 바이오 섹터는 호재는 무시되고 악재만 계속 반영되면서 투자자들이 힘든 시간을 보냈는데요. 하지만 4분기에 들어서면서 실적이 탄탄한 제약사부터 서서히 관심이 돌아오고 있는 분위기예요. 쉽게 말하면, 물이 반대 방향으로 흐를 때는 잠시 머물다가 다시 나아갈 방향으로 물길이 바뀔 때 발을 차고 나가는 스쿠버다이빙과 같은 상황이라는 겁니다.",
          "easy2_title": "실적이 확실한 제약사부터 담고 바이오텍으로 관심을 넓히세요",
          "easy2_desc": "증권사는 탄탄한 실적을 보여준 제약사에 먼저 비중을 두는 전략을 제안했는데요. 이후 금리 환경이 좋아지거나 섹터 순환매가 일어나면 그때 신약 바이오텍으로 관심을 옮겨가는 것이 좋다는 거예요. 바이오텍은 밸류에이션이 충분히 설명되는 기업부터 채워야 리스크를 줄일 수 있다는 점을 기억해야 합니다.",
          "topic": "제약 및 바이오 섹터의 현재 상황을 진단하고 향후 투자 전략을 제시한 리포트입니다.",
          "points": [
            "코스피 제약사 중심의 회복: 최근 헬스케어 섹터는 코스피 제약사가 상승을 이끌고 있는 모습인데요. 미국 제약사 지수와 동행하는 경향을 보이고 있어 앞으로도 밸류에이션 상승 여력이 더 남아 있다고 증권사는 봤습니다.",
            "성장한 펀더멘털과 기술이전: 주가는 부진했지만 2026년 제약사들은 영업이익을 꾸준히 키워왔는데요. 기술이전 계약 건수는 적었어도 계약 규모나 선급금 비율 면에서 알찬 성과를 냈다고 분석했습니다.",
            "바이오텍의 상승 시그널: 코스닥 바이오텍은 실적과 R&D 성과가 입증되어야 주가가 회복될 것으로 보입니다. 단순히 기술이전 가능성만으로는 부족하며 구체적인 데이터와 계획된 일정에 따른 성과가 뒷받침되어야 한다고 증권사는 강조했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 코스닥 바이오텍은 실적과 R&D 성과가 입증되어야 주가가 회복될 것으로 보입니다.; 긴 원문 — 앞 30000자만 읽음(전체 80464자)",
          "body_chars": "80464",
          "link": "https://m.stock.naver.com/research/industry/47081",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "ic8f05fa455",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "DS투자증권",
          "title": "[DS투자증권]  가장 강력한 데이터센터 비용분담 체계 구축 가시화",
          "easy1_title": "데이터센터가 전력망 쓸 때 내야 할 비용 규칙이 생기고 있어요",
          "easy1_desc": "그동안은 데이터센터가 전기를 많이 쓰면서도 비용을 어떻게 나눌지 정해진 규칙이 없었거든요. 그래서 미국 전력망 운영기구들이 이제는 데이터센터가 전력망을 쓸 때 비용을 얼마나 낼지 명확하게 정하는 규칙을 만들고 있다는 말이에요. 쉽게 말하면, 데이터센터가 전력망을 쓰는 만큼 비용을 확실히 부담하게 해서 인프라 구축을 더 빠르게 하려는 겁니다.",
          "easy2_title": "비용을 확실히 내는 대신 전력망을 더 빨리 쓰게 해 줄 거예요",
          "easy2_desc": "데이터센터가 전력망 보강 비용을 내기로 하면 전력망 공사가 다 끝나기 전이라도 전기를 먼저 쓸 수 있게 해 주기로 했는데요. 비용을 누가 얼마나 낼지 확정해야 계약도 하고 기자재 발주도 할 수 있기 때문이에요. 이렇게 규칙이 생기면 불확실성이 줄어드는 장점이 있는데, 대신 데이터센터는 장기 계약을 맺고 비용을 책임져야 한다는 점도 같이 따라온다는 겁니다.",
          "topic": "미국에서 데이터센터의 전력망 접속 비용을 원인자 부담 원칙으로 명문화하려는 움직임이 가시화되고 있어요.",
          "points": [
            "전력망 접속 규칙의 제도화: 미국 연방에너지규제위원회(FERC)의 명령에 따라 5개 권역의 전력망 운영기구들이 대규모 부하 접속에 관한 요금 규정 개정안을 제출했는데요. 데이터센터 같은 대규모 수용가가 전력망에 접속할 때 비용을 어떻게 회수할지 그 기준을 명문화하려는 거예요. 뭔 소리냐면, 이제는 데이터센터가 전력망을 쓸 때 비용을 내는 게 선택이 아닌 규칙이 된다는 말이에요.",
            "연방 차원의 BAAJA 법안 추진: 상원에서는 데이터센터에 기존 망 비용과 증분 비용을 모두 부과하는 BAAJA 법안이 초당적 지지를 받으며 빠르게 진행되고 있어요. 이 법안은 데이터센터가 다른 고객에게 비용을 떠넘기지 못하게 하고 FERC에 송전 가격 정책을 바꾸라고 요구하는 내용을 담고 있는데요. 증권사는 이 법안이 통과되면 연방 차원의 표준이 마련될 것으로 봤다는 거예요.",
            "인프라 구축 가시성 확대: 규칙이 없던 시기에는 데이터센터가 직접 발전소를 짓거나 설비를 조달했지만, 이제는 제도권 안에서 비용을 확정하고 전력망을 이용하게 됐어요. 듀크에너지 같은 곳은 이미 100MW 초과 데이터센터에 대해 15년 이상 계약과 최소 요금 부담을 승인받았거든요. 증권사는 비용 부담이 확정되면서 전력기기 발주가 더 빨라질 수 있다고 봤다는 거예요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "11857",
          "link": "https://m.stock.naver.com/research/industry/47080",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i04ec2f5d6e",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "DS투자증권",
          "title": "[DS투자증권]  중국 한한령 해제, 냉정과 열정 사이",
          "easy1_title": "한중 FTA 후속 협상으로 서비스 교역의 문이 열렸어요",
          "easy1_desc": "산업통상부가 8년 8개월 만에 한중 자유무역협정 서비스·투자 후속 협상을 실질적으로 타결했다고 밝혔는데요. 그동안 콘텐츠나 관광 같은 서비스 분야는 상품 교역에 비해 비중이 작았거든요. 이번 타결로 콘텐츠와 관광, 금융 등 서비스 교역을 늘릴 수 있는 제도적 근거가 마련된 셈이에요. 쉽게 말하면, 중국 시장으로 진출할 수 있는 공식적인 길이 넓어졌다는 말이에요.",
          "easy2_title": "한한령이 완전히 끝난 건 아니니 차분하게 지켜봐야 해요",
          "easy2_desc": "협상 타결 소식에 엔터와 미디어 기업 주가가 급등했지만, 증권사는 이번 일을 한한령의 전면적인 해제로 해석하기에는 이르다고 봤어요. 엔터사 실적에 중요한 중국 본토 공연에 대한 언급이 빠져 있고, 콘텐츠 사전심사 내용도 영화와 게임 위주이기 때문인데요. 당장 큰 기대를 하기보다는 드라마 제작사의 구작 판매 재개 같은 실질적인 변화를 먼저 확인하는 게 좋다는 거예요.",
          "topic": "한중 FTA 후속 협상 타결이 엔터와 미디어 산업에 미치는 영향과 주의할 점을 분석했어요.",
          "points": [
            "콘텐츠 및 관광 시장 진출 기반 마련: 중국은 영화와 게임 등에서 차별 없는 대우를 약속했고, 공동제작 대상도 드라마와 예능 등으로 넓혔어요. 또한 한국 여행사가 중국 내에서 해외여행을 주선할 수 있게 되면서, K-Pop이나 푸드와 연계된 관광 상품을 기획할 수 있는 여건이 조성된 거예요.",
            "드라마 제작사의 구작 판매 기대: 증권사는 드라마 제작사들이 그동안 글로벌 OTT에만 판매해왔던 구작 판권을 중국에 팔 수 있게 되면 실적에 큰 도움이 될 것으로 봤어요. 신작 선판매가 이루어지면 리쿱률(제작비 회수율)이 올라가는 효과도 기대할 수 있다는 거예요.",
            "공연 및 현지 활동의 불확실성: 이번 협상 내용에는 엔터사 실적에 핵심적인 중국 본토 내 공연에 대한 언급이 없다는 점을 주의해야 해요. 증권사는 향후 후속 협의 내용과 아티스트의 현지 활동 일정을 확인하며 실적 레버리지 효과를 반영하는 것이 적절하다고 밝혔어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "3929",
          "link": "https://m.stock.naver.com/research/industry/47079",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "if0979df003",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "SK증권",
          "title": "[SK증권]  한중 FTA 타결, 중국 공연 재개의 첫 단추",
          "easy1_title": "한중 FTA 타결로 중국 공연이 다시 열릴 가능성이 생겼어요",
          "easy1_desc": "최근 한중 정상회담에서 서비스와 투자 후속 협상이 약 8년 8개월 만에 실질적으로 타결됐는데요. 이번 합의에 K팝 공연 같은 엔터테인먼트 관련 내용이 직접 들어간 건 아니지만, 첫 협상이 타결됐다는 점에서 공연 재개에 대한 기대감이 커진 상황이에요. 다만 공연이 허가되더라도 준비 기간을 고려하면 실제 개최는 2028년 이후가 될 가능성이 높다고 증권사는 봤습니다.",
          "easy2_title": "기대감에 주가는 올랐지만 지금 바로 따라 사는 건 조심해야 해요",
          "easy2_desc": "협상 타결 소식에 엔터주들이 급등했지만, 과거에도 기대감 이후 주가가 다시 되돌림을 보인 적이 있었거든요. 그래서 증권사는 2027년 주가 방향은 정식 서명이나 실제 공연 허가 같은 확인 절차에 따라 달라질 것으로 전망했는데요. 지금은 기대감이 단기에 반영된 상태라 무작정 추격하기보다는 변동성을 활용하는 접근이 좋다고 조언했습니다.",
          "topic": "한중 FTA 후속 협상 타결이 엔터테인먼트 업종에 미치는 영향과 향후 전망에 대한 분석이에요.",
          "points": [
            "한한령의 현실과 공연 재개 전망: 중국은 한한령(한류 제한령)의 존재 자체를 인정하지 않아 공식 해제 선언은 나오기 어려운 구조라고 해요. 이번 합의로 공연 재개 가능성은 열렸지만, 실제 공연이 준비되고 열리기까지는 시간이 필요하다는 게 증권사의 판단입니다.",
            "중국 관련 수혜주 에스엠: 증권사는 중국 재개방 수혜 관점에서 에스엠을 업종 내 가장 선호하는 종목으로 꼽았는데요. 에스엠은 이미 중국에서 활동 중인 유닛 그룹과 강한 IP(지식재산권)를 보유하고 있고, 텐센트뮤직이 2대 주주로 있어 중국 사업에 유리한 환경을 갖췄기 때문입니다.",
            "엔터사별 중국 사업 현황: 하이브는 강력한 IP를 보유한 점이 강점이고, 와이지엔터테인먼트는 빅뱅과 블랙핑크라는 메가 IP가 있지만 활동 마무리 단계라 수혜가 제한적일 것으로 봤습니다. JYP Ent.는 현지화 아티스트를 통한 MD 사업 확대가 기대되지만, 기존 아티스트들의 리스크 해소가 우선이라고 증권사는 분석했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "3567",
          "link": "https://m.stock.naver.com/research/industry/47078",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i90c98ff395",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "신한투자증권",
          "title": "[신한투자증권]  한한령 해제에 따른 업종별 영향 점검",
          "easy1_title": "한한령이 풀릴 기미가 보이니 관련 업종을 눈여겨보세요",
          "easy1_desc": "한국과 중국이 서비스와 투자 분야에서 후속 협상을 실질적으로 타결했다고 발표했는데요. 이게 무슨 말이냐면, 그동안 막혀 있던 음악이나 콘텐츠 교류가 다시 활발해지고 한국 기업들이 중국에서 사업을 넓힐 수 있는 길이 열렸다는 뜻이에요. 다만 당장 예전처럼 완전히 자유로워지는 건 아니라서, 드라마 동시 방영이나 대규모 공연 허가 같은 구체적인 변화가 나타나는지 확인해야 한다는 겁니다. 쉽게 말하면, 시장이 열릴 가능성이 커졌으니 관련 기업들의 가치가 정상화될지 지켜보자는 거예요.",
          "easy2_title": "엔터와 미디어 업종이 가장 큰 혜택을 볼 것으로 보여요",
          "easy2_desc": "중국 시장이 열리면 엔터테인먼트와 미디어 업종이 가장 크게 반응할 것으로 보이는데요. 엔터 기업들은 그동안 중국에서 공연을 못 해서 매출 비중이 6%에 머물렀는데, 공연이 가능해지면 바로 수익이 늘어날 수 있거든요. 미디어도 드라마를 중국에 바로 팔 수 있게 되면 이익이 크게 늘어나는 효과가 기대된다는 말이에요. 다만 이런 변화는 실무 협의가 끝나고 실제로 시장이 열려야 확실해진다는 점을 기억해야 합니다.",
          "topic": "한-중 FTA 후속 협상 타결에 따른 업종별 영향과 전망을 분석했어요.",
          "points": [
            "엔터·미디어의 기회: 엔터 업종은 공연이 재개될 경우 외형 성장과 고마진 굿즈 수익이 확대될 것으로 봤어요. 미디어 업종은 드라마 동시 방영이 가능해지면 해외 리쿱율(제작비 회수율)이 최소 10%p 개선되면서 이익이 크게 늘어날 것으로 추정했거든요.",
            "화장품·의류의 제한적 수혜: 화장품은 중국 시장에 대한 기대감은 있지만, 이미 미국과 유럽으로 수출 중심이 옮겨가서 실적에 미치는 영향은 제한적일 것으로 봤어요. 의류 역시 중국 내 단독 매장 운영이 가능해졌지만, 실제 실적에 주는 영향은 미미할 것으로 판단했거든요.",
            "게임 및 유통·음식료 영향: 게임은 제도적 기반은 마련됐지만, 판호 심사 방식이 바로 바뀌는 건 아니라서 단기 실적 수혜는 제한적일 것으로 봤어요. 유통과 음식료는 중국인 관광객이 늘어나면서 면세점 매출이 회복되거나 한국 식품 소비가 늘어나는 간접적인 효과에 주목해야 한다고 밝혔습니다."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 중국 시장이 열리면 엔터테인먼트와 미디어 업종이 가장 크게 반응할 것으로 보이는데요.; point1 근거 원문에 없음",
          "body_chars": "7586",
          "link": "https://m.stock.naver.com/research/industry/47077",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i4b3b891b63",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "IBK투자증권",
          "title": "[IBK투자증권]  [IBKS Daily] 인터넷/게임",
          "easy1_title": "네이버는 AI에 돈을 쏟고 카카오는 허리띠를 졸라매고 있어요",
          "easy1_desc": "올해 3분기까지 네이버가 연구개발에 쓴 돈은 1조 8897억 원으로 작년보다 16.2% 늘어 역대 최대치를 찍었거든요. 반면 카카오는 9624억 원 수준으로 투자를 줄이며 비용 효율성을 챙기는 모습이에요. 쉽게 말하면 네이버는 미래 기술에 공격적으로 투자하는 반면, 카카오는 내실을 다지는 쪽으로 방향을 잡았다는 겁니다.",
          "easy2_title": "네이버와 두나무가 손을 잡을지 공정위 결정을 기다리고 있어요",
          "easy2_desc": "네이버파이낸셜과 두나무가 기업 결합을 추진 중인데, 공정거래위원회가 이를 심의하고 있다는 소식이에요. 업계에서는 조건부 승인이 나올 수도 있다고 보고 있는데요, 이게 중요한 이유는 두 회사가 글로벌 금융 시장으로 나가는 데 큰 변수가 되기 때문이에요. 쉽게 말하면 규제 당국이 어떤 조건을 거느냐에 따라 두 회사의 사업 범위가 달라질 수 있다는 말이에요.",
          "topic": "국내 주요 인터넷 및 게임 기업들의 투자 동향과 기업 결합 이슈를 다루고 있어요.",
          "points": [
            "네이버와 카카오의 투자 전략 차이: 네이버는 인공지능(AI) 분야에 대한 투자를 대폭 늘리며 연구개발 역량을 강화하고 있어요. 반면 카카오는 비용 효율화를 위해 AI 스튜디오를 개편하는 등 내실을 다지는 기조를 유지하고 있다는 거예요.",
            "네이버파이낸셜과 두나무의 결합 심의: 공정거래위원회가 네이버파이낸셜과 두나무의 기업 결합을 심의 중인데, 업계에서는 조건부 승인 가능성을 점치고 있어요. 이는 두 회사가 글로벌 디지털 금융 시장으로 진출하기 위한 전략적 선택으로 풀이된다는 겁니다.",
            "인터넷 및 게임 업종의 시장 흐름: 전반적으로 국내 인터넷과 게임 기업들의 주가 흐름은 최근 1개월과 1년 사이 하락세를 보인 종목이 많았어요. 증권사는 과거의 자료를 바탕으로 작성된 참고 자료일 뿐이며 향후 주가는 과거 패턴과 다를 수 있다고 밝혔어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "4584",
          "link": "https://m.stock.naver.com/research/industry/47076",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i9f47faa527",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "한화투자증권",
          "title": "[한화투자증권]  9월 연체율: 전 대출종에서 빨라진 연체 증가 속도",
          "easy1_title": "은행 대출 갚기가 점점 힘들어지고 있어요",
          "easy1_desc": "국내 은행의 9월 말 연체율을 살펴봤더니 0.59%로 올랐는데요. 기업은 물론이고 가계 대출까지 모든 종류의 대출에서 연체되는 속도가 빨라지고 있다는 말이에요. 9월에 새로 발생한 연체 규모는 줄었지만, 대출 금리가 높은 상황이라 앞으로 연체율이 더 오를 수 있다는 게 증권사의 판단입니다.",
          "easy2_title": "연체된 돈은 늘어나는데 정리는 잘 안 돼요",
          "easy2_desc": "은행이 가진 연체 채권 잔액이 15.1조 원까지 늘어났는데요. 부실 채권을 팔아서 정리해야 하는데 지금은 환경이 어려워서 정리율이 평년보다 낮아진 상태예요. 연체는 계속 쌓이는데 치우는 속도는 더디니 은행 입장에서는 부담이 커질 수밖에 없다는 겁니다.",
          "topic": "국내 은행들의 연체율이 전반적으로 상승하고 있으며, 대출 금리 부담으로 인해 연체 증가 속도가 빨라질 것으로 증권사는 전망했습니다.",
          "points": [
            "차주별 연체율 상승: 법인 중소기업과 자영업자의 연체율이 각각 0.92%와 0.74%로 올랐는데요. 특히 자영업자는 최근 연체 채권 증가율이 높아지면서 상승세가 가팔라지고 있다고 봤습니다. 가계 연체율 또한 0.41%를 기록하며 상승세로 돌아섰다는 말이에요.",
            "연체 잔액의 가속화: 은행업종의 연체 채권 잔액은 15.1조 원으로 추산되는데요. 기업 연체 잔액은 25% 늘었고 가계 연체 잔액도 8% 증가했습니다. 대출 성장률보다 연체 잔액이 8~20%씩 더 빠르게 늘어나는 상황이라 은행에 부담이 된다는 겁니다.",
            "건전성 관리 필요성: 증권사는 기업 여신을 중심으로 은행의 건전성을 더 꼼꼼히 살펴봐야 한다고 밝혔는데요. 시장 금리가 대출에 반영되는 시차를 고려하면 2027년에는 은행이 떼일 돈을 대비해 쌓아두는 대손비용률이 작년보다 높아질 것으로 추정했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "4633",
          "link": "https://m.stock.naver.com/research/industry/47075",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i59be215a0a",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "신한투자증권",
          "title": "[신한투자증권]  3Q26 Wrap-up: 비용 효율화로 버티기",
          "easy1_title": "건자재와 건설사들이 비용을 줄이며 힘겹게 버티고 있어요",
          "easy1_desc": "건자재와 중소형 건설사들이 3분기에 실적 부진을 겪었는데요, 매출이 줄어든 데다 원자재 가격과 환율까지 오르면서 비용 부담이 커졌기 때문이에요. 추석 연휴로 영업일수가 줄어든 점도 실적에 영향을 줬거든요. 그래서 지금은 판관비(판매비와 관리비)를 줄이는 등 비용 효율화에 집중하고 있는 상황입니다.",
          "easy2_title": "건설사마다 실적이 갈리고 있고 내년 하반기를 기다려야 해요",
          "easy2_desc": "중소형 건설사들은 사업 분야에 따라 실적이 엇갈리고 있는데요, 민간 참여 주택 사업이나 플랜트 수주를 적극적으로 한 곳은 실적이 괜찮았지만 지방 주택 사업 중심인 곳은 부진했거든요. 시멘트 업계도 지금은 고정비 부담으로 이익이 줄었지만, 2026년 분양 확대와 4분기 수도권 착공 물량을 고려하면 2027년 하반기부터는 실적이 좋아질 것으로 증권사는 봤습니다.",
          "topic": "건자재 및 중소형 건설사의 3분기 실적을 분석하고 앞으로의 시장 흐름을 전망했어요.",
          "points": [
            "3분기 실적 부진 원인: 건자재 전 업종의 3분기 실적이 부진했는데, 이는 B2B 특판 매출이 줄고 원자재 가격과 환율이 상승했기 때문이에요. 여기에 B2C 부문의 성장도 더디고 영업일수까지 줄어든 영향이 컸거든요.",
            "건설사별 실적 차별화: 중소형 건설사들은 업체별로 실적 차이가 뚜렷하게 나타났는데요, 금호건설이나 계룡건설처럼 플랜트 수주에 적극적인 곳은 실적이 양호했지만 지방 주택 사업 비중이 높은 곳은 부진했습니다.",
            "시멘트 업계의 향후 전망: 시멘트사들은 현재 친환경 투자와 고정비 부담으로 영업이익이 부진한 상태예요. 하지만 증권사는 2026년 분양 확대와 4분기 수도권 주택 착공 물량을 고려할 때 2027년 하반기부터는 실적이 본격적으로 좋아질 것으로 추정했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "14099",
          "link": "https://m.stock.naver.com/research/industry/47074",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i635c9277be",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "유진투자증권",
          "title": "[유진투자증권]  투자는 이어질 것",
          "easy1_title": "반도체 장비 업체들은 앞으로도 투자를 계속할 겁니다",
          "easy1_desc": "메모리 가격이 내려가는 상황이 오더라도 반도체 제조사들은 장비 투자를 멈추지 않을 것으로 보입니다. 2018년과 같은 다운사이클(하락 국면)이 다시 온다고 가정해 봐도, 삼성전자와 SK하이닉스는 여전히 대규모 이익을 낼 수 있다는 계산이 나오거든요. 쉽게 말하면, 투자를 줄여야 할 만큼 상황이 나빠지지는 않는다는 말이에요.",
          "easy2_title": "2028년이 되면 반도체 장비 업종의 매력이 더 커질 겁니다",
          "easy2_desc": "최근 전공정 장비 업종의 주가는 다른 분야보다 부진했는데요, 2028년 실적을 미리 반영해 보면 투자 매력도가 높아질 것으로 증권사는 분석했습니다. 테스나 브이엠 같은 업체들이 신제품을 내놓고 고객사를 넓히면서 성장이 가팔라질 것으로 보이기 때문이에요. 연말이 다가올수록 시장의 시선이 2028년으로 옮겨갈 것이라는 게 증권사의 판단입니다.",
          "topic": "반도체 산업의 장기적인 업사이클과 그에 따른 장비 업체들의 성장 전망에 대한 분석입니다.",
          "points": [
            "메모리 업체의 투자 지속: 삼성전자와 SK하이닉스는 메모리 가격 하락 시나리오에서도 투자를 지속할 여력이 충분하다고 증권사는 봤습니다. 2028년에도 설비 투자 비중인 캡엑스 인텐시티(CapEx Intensity)가 안정적인 수준을 유지할 것으로 추정했거든요. 쉽게 말하면, 시장 상황이 어려워져도 투자를 멈추지 않겠다는 계획인 겁니다.",
            "전공정 장비 시장의 성장: 램리서치와 도쿄일렉트론 같은 장비사들은 2026년과 2027년의 웨이퍼 제조 장비(WFE) 시장 규모를 높게 전망했습니다. 2027년에는 클린룸 공간 부족 같은 제약이 있지만, 이런 문제가 해결되면 시장 규모는 더 커질 수도 있다는 거예요. 2030년까지 이어지는 장기적인 상승 흐름이 기대된다는 말입니다.",
            "장비 업체별 기회 요인: 테스, 브이엠, 예스티 같은 전공정 장비 업체들은 2028년에 큰 기회를 맞이할 것으로 증권사는 추정했습니다. 테스는 파운드리용 장비 납품을 늘리고, 브이엠은 신규 식각 장비와 북미 고객사 확보를 통해 실적을 키울 것으로 봤거든요. 예스티 또한 고대역폭메모리(HBM) 관련 장비 매출이 늘어나면서 성장이 기대된다는 겁니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 메모리 가격이 내려가는 상황이 오더라도 반도체 제조사들은 장비 투자를 멈추지 않을 것으로 보입니다.; 예측 의심: 테스나 브이엠 같은 업체들이 신제품을 내놓고 고객사를 넓히면서 성장이 가팔라질 것으로 보이기 때문이에요.; 긴 원문 — 앞 30000자만 읽음(전체 42640자)",
          "body_chars": "42640",
          "link": "https://m.stock.naver.com/research/industry/47073",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "id86cc6e89f",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "유진투자증권",
          "title": "[유진투자증권]  안녕하세요 데일리에요 (로봇/방산/조선)",
          "easy1_title": "로봇과 방산 그리고 조선 분야의 최신 소식을 정리해 드립니다",
          "easy1_desc": "유진투자증권에서 로봇과 방산, 조선 산업의 주요 뉴스를 모아 정리했는데요. 로봇 분야에서는 레인보우로보틱스가 미라콤아이앤씨와 협력해 제조 현장으로 진출하고 있고, 방산 분야에서는 한화시스템이 미국으로 레이다를 수출하며 시장을 넓히고 있다는 소식이에요. 조선 분야에서는 한화오션이 캐나다에서 대규모 프로젝트를 위한 합의서를 체결했다는 내용이 담겨 있거든요. 쉽게 말하면 각 산업별로 기업들이 새로운 사업 기회를 찾고 있다는 겁니다.",
          "easy2_title": "산업별로 기업들이 어떤 새로운 시도를 하는지 살펴봤습니다",
          "easy2_desc": "이번 리포트에서는 로봇과 방산, 조선 기업들의 구체적인 움직임을 짚어 봤는데요. 레인보우로보틱스는 삼성SDS 계열사인 미라콤과 손잡고 제조 현장에 로봇을 공급하기로 했고, 한화시스템은 미국 민간 인프라 방호를 위해 레이다를 수출하기 시작했다는 거예요. 한화오션의 경우 캐나다에서 FLNG(부유식 액화천연가스 생산설비) 프로젝트를 구체화하고 있다는 점도 눈에 띄는데요. 기업들이 각자의 기술력을 바탕으로 새로운 시장에 진입하거나 사업 규모를 키우고 있다는 말이에요.",
          "topic": "로봇, 방산, 조선 산업의 주요 기업 뉴스 및 사업 진행 현황을 정리한 리포트입니다.",
          "points": [
            "로봇 제조 현장 진출: 레인보우로보틱스가 삼성SDS 계열사인 미라콤아이앤씨와 협력하여 제조 현장에 로봇을 공급하고 시스템을 구축하기로 했습니다. 미라콤은 지난 28년간 430개 이상의 제조사에 디지털팩토리와 MES(생산관리시스템)를 구축해 온 업체인데요. 이를 통해 레인보우로보틱스가 산업현장으로 진입하는 속도가 빨라질 것으로 증권사는 봤습니다.",
            "방산 분야 미국 시장 진입: 한화시스템이 미국 기업 리벨리온에 단거리 AESA(능동위상배열) 레이다를 수출하며 미국 시장에 진입했습니다. 정유시설이나 데이터센터 같은 민간 핵심 인프라를 보호하는 데 우선 적용될 예정인데요. 현재는 소량 계약이지만 향후 제품군을 확대하고 현지에 대량으로 공급하는 방안을 논의 중이라고 증권사는 밝혔습니다.",
            "조선 분야 대형 프로젝트 추진: 한화오션이 캐나다의 카나타 클린 파워와 연 최대 1,200만 톤급 FLNG를 개발하는 기본합의서를 체결했습니다. 전체 프로젝트 비용은 약 157억 달러 규모로, 2032년 첫 LNG 선적을 목표로 하고 있는데요. 지난 6월 MOU 이후 기술 타당성과 상업성을 구체적으로 검토하는 단계로 진전되었다고 증권사는 설명했습니다."
          ],
          "evidence_ok": "4/6",
          "bad_numbers": "157",
          "check_flags": "easy1 근거 원문에 없음; topic 근거 원문에 없음",
          "body_chars": "2266",
          "link": "https://m.stock.naver.com/research/industry/47072",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i051321345b",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "키움증권",
          "title": "[키움증권]  한중 관계 개선, 화장품 업황에 우호적",
          "easy1_title": "한국과 중국 사이가 좋아지면서 화장품 시장에 볕이 들고 있어요",
          "easy1_desc": "최근 한중 FTA 후속 협상이 타결되면서 양국 관계가 개선되는 흐름을 보이고 있는데요. 덕분에 중국인 관광객이 늘고 화장품 수출도 5개월 연속으로 증가하는 등 업황이 좋아질 환경이 만들어지고 있다는 거예요. 쉽게 말하면, 양국 관계가 풀리면서 화장품 산업에도 긍정적인 신호가 켜진 셈이에요.",
          "easy2_title": "한국 화장품을 찾는 중국인 관광객이 눈에 띄게 늘었어요",
          "easy2_desc": "올해 1월부터 9월까지 한국을 찾은 중국인 관광객은 547만 명으로 이미 작년 연간 수준을 넘어섰거든요. 특히 20~30대 여성들이 개별적으로 한국을 찾아 SNS로 정보를 얻고 쇼핑을 즐기면서 올리브영의 외국인 매출도 47%나 늘어난 겁니다. 관광객이 늘어난 만큼 화장품 소비도 자연스럽게 따라오는 구조라고 보시면 돼요.",
          "topic": "한중 관계 개선과 중국인 관광객 증가가 화장품 업황에 미치는 긍정적인 영향에 대한 분석이에요.",
          "points": [
            "한중 FTA 후속 협상 타결: 이번 정상회담에서 여행사 운영과 콘텐츠 공동 제작, 유통망 확보 등 여러 분야에서 협력이 강화되기로 했는데요. 특히 중국 내 매장을 독자적으로 운영할 수 있게 된 점이 눈에 띄는 부분이에요. 이런 조치들이 화장품 시장에 우호적인 환경을 만들 것으로 증권사는 봤습니다.",
            "2030 여성 중심의 개별 관광객 증가: 한국을 찾는 중국인 관광객 중 20~30대 여성의 비중이 47%에 달할 정도로 높다는 점이 특징이에요. 이들은 단체 관광보다는 SNS를 통해 정보를 얻는 개별 관광객이라서, 올리브영 같은 곳에서 화장품을 직접 구매하는 비중이 크거든요. 면세점 매출보다 일반 매장 매출이 더 크게 늘어난 이유이기도 합니다.",
            "중국향 화장품 수출 반등: 중국으로 나가는 화장품 수출액이 6월부터 5개월 연속으로 늘면서 4년 만에 역성장을 멈췄는데요. 아직 2021년 수준의 35% 정도에 불과해서 앞으로 회복할 여력은 충분하다고 증권사는 추정했습니다. 관계 개선이 이어지면 수출 지표도 더 좋아질 것으로 보입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 관계 개선이 이어지면 수출 지표도 더 좋아질 것으로 보입니다.",
          "body_chars": "4481",
          "link": "https://m.stock.naver.com/research/industry/47071",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "ie615b3ffde",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "IBK투자증권",
          "title": "[IBK투자증권]  [화장품] 에이피알, 닥터멜락신 인수 시 기대효과 점검",
          "easy1_title": "에이피알이 닥터멜락신을 사려고 검토 중이라네요",
          "easy1_desc": "에이피알이 닥터멜락신이라는 스킨케어 브랜드를 인수할지 살펴보고 있다는 소식이 전해졌는데요. 닥터멜락신은 북미 시장에서 틱톡샵과 아마존을 통해 빠르게 성장하고 있는 브랜드거든요. 만약 인수가 성사된다면 에이피알은 기존 메디큐브 중심의 매출 구조를 다변화하고 글로벌 사업 규모를 키울 수 있다고 봤습니다. 쉽게 말하면, 잘 나가는 브랜드를 더해 덩치를 키우려는 전략인 셈이에요.",
          "easy2_title": "인수 가격과 자금 조달 방식이 핵심 변수입니다",
          "easy2_desc": "이번 인수가 기업 가치에 도움이 될지는 결국 얼마에 사느냐와 인수 후 이익이 얼마나 늘어날지에 달려 있다고 증권사는 분석했는데요. 합리적인 가격에 인수해서 유통망을 통합하면 비용을 줄일 수 있지만, 너무 비싸게 사거나 빌린 돈에 대한 이자가 많아지면 오히려 주당순이익(EPS) 개선 효과가 줄어들 수도 있다는 겁니다. 그래서 실제 인수 조건이 확정되는 시점에 실적에 미칠 영향을 다시 따져봐야 한다고 밝혔습니다.",
          "topic": "에이피알의 닥터멜락신 인수 검토가 브랜드 포트폴리오 확대와 글로벌 성장 측면에서 어떤 의미를 갖는지 분석했습니다.",
          "points": [
            "글로벌 유통 시너지: 두 회사 모두 북미 온라인 채널에서 경쟁력이 높기 때문에 마케팅과 유통 인프라를 합치면 물류비나 판매관리비를 효율적으로 줄일 수 있다고 봤습니다. 다만 두 브랜드 모두 효능 중심의 제품을 팔고 있어서, 인수 후에는 브랜드마다 어떻게 차별화할지가 중요하다고 지적했습니다.",
            "수익성 개선 가능성: 브랜드501의 1분기 영업이익률은 13.0%로 에이피알의 3분기 영업이익률인 20.8%보다는 낮은 수준인데요. 하지만 인수가 완료되면 매출과 영업이익 규모가 커지고, 글로벌 유통망을 통합하면서 운영 효율이 좋아져 수익성이 개선될 것으로 증권사는 기대했습니다.",
            "기업 가치 제고의 조건: 브랜드501은 지난 6월 투자 유치 당시 약 3조 원의 기업 가치를 기대했는데요. 증권사는 합리적인 가격에 인수한다면 중장기적으로 기업 가치가 오를 수 있지만, 높은 가격에 사거나 차입금이 늘어나면 오히려 독이 될 수 있다고 경고했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "3214",
          "link": "https://m.stock.naver.com/research/industry/47070",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        }
      ],
      "fed_speeches": [
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
        },
        {
          "file": "2026-11-16_연설_Barr_barr20261116a.md",
          "title": "[연설] 2026-11-16 · Governor Michael S. Barr",
          "summary_lines": [
            "\"인공지능이 금융 시장을 바꿀 텐데 위험도 잘 따져봐야 해요\"",
            "\"인공지능 투자 열풍 뒤에 숨은 빚 문제를 지켜보고 있어요\""
          ],
          "addr": "처리-6",
          "source": "v2_secretary/결과/연준연설/2026-11-16_연설_Barr_barr20261116a.md"
        },
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
        }
      ]
    },
    "ch4_news": {
      "title": "챕터 4 · 뉴스 사건 묶기",
      "addr": "처리-3",
      "status": "돎 (하루 AI 2콜 독립 묶기 대조)",
      "counts": {
        "news_in": {
          "val": 190,
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        "events_out": {
          "val": 10,
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        "single_out": {
          "val": 147,
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        "all_clusters": {
          "val": 157,
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        "bad_numbers": {
          "val": 0,
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        "calls": {
          "val": 2,
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        }
      },
      "events": [
        {
          "id": "e261119-01",
          "rank_by_count": 1,
          "name": "엔비디아 젠슨 황 복귀 논란",
          "easy": "엔비디아 직원들 사이에서 젠슨 황의 복귀를 바라는 목소리가 커지고 있습니다. 블라인드 게시글 분석 결과 직원 56%가 복귀를 지지하는 것으로 나타났는데요. 젠슨 황 본인도 이사회가 요청하면 복귀할 수 있다는 뜻을 내비쳤습니다.",
          "quote": "젠슨 황 \"이사회 요청시 엔비디아 복귀\"…사임 후 첫 공개 발언",
          "member_count": 9,
          "sample_articles": [
            {
              "n": 212,
              "title": "젠슨 황 \"이사회 요청시 엔비디아 복귀\"…사임 후 첫 공개 발언 - SBS 뉴스",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9HN2tYWjBraFN4ajRMZVRzLTZtdHFGQ1VoNW5KMklEbG9pUW5DWnpwYWlxWjE3a2tJY0FOMmIzOUZ3ZU5maDJKR0NSMThCWkdFdDd1R1RZcnRPSTlpUWdVWGZuU1J3aHVlQ0E?oc=5"
            },
            {
              "n": 106,
              "title": "\"젠슨 황 아니면 안 된다\"…엔비디아 직원들 복귀 지지 56% - 주간조선",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE90VE1NLTd5RVVkMTBzLTdSZnVhTHNQemZLbGROREdrZ2lIamc0VW1UNGJ3WTBpTF9yRXFNWkxXOFltSkdYX3BSWDlTX3NDN3N2RG9LaDRsLS15Q2RORWttQm5IV2FyUU04dDFF?oc=5"
            },
            {
              "n": 110,
              "title": "“엔비디아 재직자 절반 이상, 젠슨 황 복귀 희망”···블라인드 게시글 분석 - 경향신문",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5kYUhYWUZZamt3LW94RVRONFZGVlByMnNmaGVmZElhZlMxenBHaXNzUEpVY0tUd0d1d0RzRC03aTdWN1hpQUx4SzRHRFN4a3FDYnVUMjEwT05aZ9IBX0FVX3lxTFB4cW96SnhONWdRU2R1cHBvb2lEWF9mWGZMUnYtbTJDYmJiU1pFdk5YSWkzZl8taGJOdU5QcFdWVks5TXJScnU4NTM3SEVCZWNvX3RJejhBazhoVEhzcnhB?oc=5"
            },
            {
              "n": 209,
              "title": "젠슨 황, 엔비디아 3분기 실적 발표 직전 첫 발언 - BeInCrypto",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMidkFVX3lxTE1pUzlEUUh2c3hSbEZNT1N4NVRobzZiU1dZejB4TVVZSE1XbDVSSVBmcGdKSkh4am15NWZISkFneWFhYUVQNmYtMkpOcWt5WmlvRGVxSlZkamdpdHJHeUljQmFaZ1pjZk92RVpuRHBqbzVwNTdpdFE?oc=5"
            },
            {
              "n": 205,
              "title": "젠슨 황 \"이사회 요청시 엔비디아 복귀\"…사임 후 첫 공개 발언 - 연합뉴스",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9pSWlHdW45OGVKOXFvdDlHMGdZSlR0bGZrS2hNeGF0YmIyOVU1MmhQOHdobUpZVjdwU1B1QnBnOUJVUlJORGRydTQyYmxMaFBFdlNobmtabldiVUnSAWBBVV95cUxOZ0kxc2pWUi1jc2JoSEtiY3RneE1iWGlWcE1FNFpOMHVpVXhZazNlVkpSTVc2Q1JTaW9DZ3FZcVBmSlBjM1BlMUZzczF2R3BuY1k5cDEzb09qUmR2QlZTVlQ?oc=5"
            },
            {
              "n": 105,
              "title": "엔비디아 전사회의서 조직 수습 총력…'포스트 젠슨 황' 체재 준비 - 전자신문",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFBScURseXZFUGY1SHFZdUZBejMybjBnYmlGWGJYT1B4VlFGOW5kTEdpakw4LUVDaTZWTFRWazJJRTZ4QmJTWWg1bjBfdFY0QQ?oc=5"
            },
            {
              "n": 107,
              "title": "엔비디아 직원 56% \"젠슨황 복귀 원해\"…후임 후보 이언 벅 선두 - 연합뉴스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE8wUHJkcm02a1lHM2hiVW81WE1tLXg1UWhZSXZQakFrRVREamJjdVdwU0EzWkJrMURJcDZ5d0huSVF2cS1vbHE4QmNQd3RfM3pmby1ONVdNNUl0dVXSAWBBVV95cUxQMVU4R05JUS1oNThSanZZY2V2V09QUUFYU2RJcm5yZlQ0N3pIY05zcDIxUGZFWG1rQ0ZaWklFTXp3cHVUNHpjdEJUb19uQ2pMTmM1dmNLOERsTkdOYUp3bkE?oc=5"
            },
            {
              "n": 109,
              "title": "\"엔비디아는 젠슨 황 왕국\"…폭언·초고속 승진에 내부 불만 - 한국경제",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5zc2ltZDVQTHZGWkpvVnVQdkFNbDZ0TmNaZG5oSy1VZTNoX2JBZGdTaVMzMTRNLWJKcTNlZzZpb3hPV3JwRThKdHYyN2J5ODVnVUkya1Y3eUVrdw?oc=5"
            },
            {
              "n": 104,
              "title": "엔비디아 직원 56% \"젠슨 황 복귀 원한다\"…차기 CEO 후보는 누구? - KBC광주방송",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFBlQnd0ZTExMGdaSk4yYnBGMmM5N0ZXU0EwQU5ud1Z3R1FMazZyUHVQcWxMM2UyN0pSOU1BcXc3N1NkSWJsdHg0UWxWOEpOT0E1WE93X1ZuamREcnFFN3gyUTBn?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-02",
          "rank_by_count": 2,
          "name": "미 연준 추가 금리 인상 공감대",
          "easy": "미국 연방준비제도 위원들이 인플레이션이 여전히 높다고 보고 추가 금리 인상이 필요하다는 데 뜻을 모았습니다. 일부 위원은 한 번에 0.5%포인트 올리는 빅스텝까지 거론했는데요. 12월에도 금리를 올릴 가능성이 높다는 전망이 나옵니다.",
          "quote": "미 연준, 추가 금리 인상 공감대...일부 위원 '빅스텝' 거론",
          "member_count": 7,
          "sample_articles": [
            {
              "n": 158,
              "title": "바 연준 이사 \"인플레 지나치게 높아…추가 금리 인상 적절\" - 연합인포맥스",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE4wVk8xLWxVTWRhTzduUWJRSzdGbmphMXVpbVdxYWV0X1g5NGVNNGZlQlQ3dGgwLXV0ek9OcldRTnE0dWc5bXRxaVBWc20zZ1JVc1E1T29KUEhPd2FOQjMtdnljUVlkV1ptNFJqR0dDS3Q?oc=5"
            },
            {
              "n": 160,
              "title": "미 연준, 추가 금리 인상 공감대...일부 위원 '빅스텝' 거론 - YTN",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE1ORnhHczc2ZzZDbWZJbG5tNmMwLVVqVDhMTXU0MzFTb05zNkRlbFFqZkRfR2YtVWNtT1AtSkt0MkdTaWRYc3ZJVHN1dmFocDFEVVJIazB0TXVudDJMRlE?oc=5"
            },
            {
              "n": 161,
              "title": "10월 FOMC서 추가 금리인상 공감대…일부는 '빅스텝' 거론 - 연합뉴스",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9xUlpMVnBrQkszdFhEZ0xJZTNoNndNTm9YMFg5TDBKdjhjdWtsTGhrdG5OemV0VEdIZTJNLVhZV0hUc2Q3N2xabWJjdk8zanJyT1l6RjdkX0FWdDZaNEtsNNIBYEFVX3lxTE9xUlpMVnBrQkszdFhEZ0xJZTNoNndNTm9YMFg5TDBKdjhjdWtsTGhrdG5OemV0VEdIZTJNLVhZV0hUc2Q3N2xabWJjdk8zanJyT1l6RjdkX0FWdDZaNEtsNA?oc=5"
            },
            {
              "n": 164,
              "title": "연준, 추가 금리인상에 무게…일부 위원 '빅스텝' 가능성도 열어둬 - www.ebn.co.kr",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE83cTNYMVVnVDl0aXhlYkVLeFR4ZmtVc1lBSW5rLU0zay13NlFvOHZRdHNDLVZMaXlVeUNOaU1qX0d3NlRfNTNwdU5MOWo2WXdnY3NZc3NPdzlkT29SZk02azdDZXhqTjcy?oc=5"
            },
            {
              "n": 159,
              "title": "연준 의사록 보니… “금리 더 올려야” 거의 한목소리, 12월 ‘빅스텝’도 거론 - 조선일보",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPM3ZveEtXbE1jSTdUcFM4UDZaSzNrVDNDcHUxdnhQVW5lTWZfcTQxYW5sa1JaVGgzLVdQTEl2Qi0wd3lScWo5MjdJRGJJNXU0NjBfUUJ0blBlX1h4TkZhdV96anBlVmZsVXc2Y1lYcmlxTHhsemdzRHdDRXhoOXpqTTBDVzd0VUto?oc=5"
            },
            {
              "n": 163,
              "title": "美 연준, 추가 금리 인상에 폭넓은 공감대…빅스텝도 거론 - 글로벌이코노믹",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPengtamU0TXducmRkLWNnRFV3amFRM0VETWllYlpXSGFOQ2lLVE1Cem1pYlFSVDFsMTAtQWUwbmdwbVJWUVlaYXF1S1hleHBqelVuc0wteTZHSS0xdllPQzcxbG96c3dIazUyU2tEZ2ZWYnlkaUFVckVmMkRlSjNmZTd1X0hleVZ3?oc=5"
            },
            {
              "n": 165,
              "title": "美연준, 12월 금리인상 사실상 예고…‘빅스텝’ 가능성도 열어뒀다 - 헤럴드경제",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBGdmI2ZUFZWGJfejRQNWRKY2pITTl0VHdzTzNUMkFLT1FmVEthV090SHZITXJnMFNnRTFlUDMxQWlsR1NBZUtOeDJQTk9vLTBrRmZwd0dB?oc=5"
            }
          ],
          "flags": [
            "원문에 없는 숫자 0.5"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-03",
          "rank_by_count": 3,
          "name": "홍의락 가스공사 사장 요금 인상 촉구",
          "easy": "홍의락 한국가스공사 사장이 가스요금을 올려야 한다고 거듭 강조했습니다. 현재 미수금이 14조 원을 넘어섰고, 요금을 올리지 않으면 1년 뒤 미수금이 4조 원 더 늘어날 수 있다는 우려 때문인데요. 국민들의 이해를 구하며 요금 현실화가 필요하다는 입장입니다.",
          "quote": "홍의락 가스공사 사장 \"가스요금 올려야…1년 미수금 4조원 증가할 수 있어\"",
          "member_count": 6,
          "sample_articles": [
            {
              "n": 131,
              "title": "홍의락 가스공사 사장 \"가스요금 올려야…1년 미수금 4조원 증가할 수 있어\" - 부산일보",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTFBsSFduRU1Jd3ZWTXdSTlVVeVU4ZGFuY0xQT1lzZU5BTjBFUjFNT1BQRDFzamhEZEZwMGRCcTdYRk15alZkTGpDOW1yREFFYVdOUFJxTFNwLTJYbDd5bU1XRXEwcDhoZ1EwaGhKWC1qdHR4RmJX?oc=5"
            },
            {
              "n": 149,
              "title": "홍의락 가스公 사장 \"가스요금 인상해야…국민들이 이해할 것\" - 뉴시스",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTE1RNldJeGpiVXpRRVg0WlBVNm91Nk1fNzlKbzlYTG5HVDJDNVFGeDY3REg5bE9KeUg5aWRXS2xZQm9tREZwSXpETXRVcTlCcjNoQ08xS2dFakI4LU1EQXhPd3ViaW9fMjdOTm5zMUVzQnpyTWlGZW03ZNIBeEFVX3lxTE1RNldJeGpiVXpRRVg0WlBVNm91Nk1fNzlKbzlYTG5HVDJDNVFGeDY3REg5bE9KeUg5aWRXS2xZQm9tREZwSXpETXRVcTlCcjNoQ08xS2dFakI4LU1EQXhPd3ViaW9fMjdOTm5zMUVzQnpyTWlGZW03ZA?oc=5"
            },
            {
              "n": 148,
              "title": "홍의락 가스공사 사장 \"가스요금 인상 필요\"…미수금 14.6兆 - 매일일보",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1xMWMzWWtKNC1oMTk5ano3eUR3LU9Sa2FWNE9pT0kzVGlkdmw0QkhtR2J6akRoblktalJLNXcxMW1waDN6Wjk1QjZYUDRyYWRDZUFVYlVadEZRV0RVYlY1ZlhoOWc?oc=5"
            },
            {
              "n": 134,
              "title": "홍의락 가스공사 사장 \"미수금 14조…가스요금 인상해야\" - 뉴스핌",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE14R0dUNmxONnNVT1ltOXJzdFNtcGl1SWlXck4ybnlRT0NxUEpXVjhlbFdmVkVSUjFKMjNLZ0FoWHR0cDJmejJMMW5JTXpkY21ma2dOR2o1aUl3RmRH?oc=5"
            },
            {
              "n": 146,
              "title": "가스공사 사장 \"가스요금 인상해야…1년 미수금 4조원 늘 수도\" - 연합뉴스",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFBYdWtXZ1FSNm9DS0xuS0J0akxnZGNZUTdORXlSclFSWXEwM2I4SVhva1Q5LUV4WjlRVTBIc0NzVlQ3eHN1Ny1fMnh3cHlJYkxjMk43dndSNUpmMkNRb3JucdIBYEFVX3lxTFBYdWtXZ1FSNm9DS0xuS0J0akxnZGNZUTdORXlSclFSWXEwM2I4SVhva1Q5LUV4WjlRVTBIc0NzVlQ3eHN1Ny1fMnh3cHlJYkxjMk43dndSNUpmMkNRb3JucQ?oc=5"
            },
            {
              "n": 143,
              "title": "가스공사, LNG 도입구조 개편…홍의락 \"가스요금 인상 필요\" - 진일보 | 전남일보",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9jQkRwN1hiejFSNDliNEx6WjBsaTBtd0pqbV9EeUMzVy15TW9Rcm1rNzg0V2w2UlY2WHFOcGZUampScWlnRjJlVlBYMkFsYV9vUUhrcDZDMUJLbW1INWZCR3lVQTBiTFFXVnF5M2x5aw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-04",
          "rank_by_count": 4,
          "name": "원전 차액계약제 도입",
          "easy": "내년부터 원자력 발전 전력 가격을 미리 정하는 정부승인차액계약 제도가 도입됩니다. 전력 시장의 정산 체계를 선진화하려는 목적인데요. 한전과 한수원 등 주요 전력 기관들이 이 제도를 통해 원전 전력 가격을 사전에 확정하게 됩니다.",
          "quote": "내년부터 원전 전력가격 미리 정한다…한전·한수원, 차액 정산",
          "member_count": 5,
          "sample_articles": [
            {
              "n": 58,
              "title": "내년부터 원전 전력가격 미리 정한다…한전·한수원, 차액 정산 - 뉴시스",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTE5oWGVNQnFlMmptRFFWRzk4MF9pZHltZXZJY2xPVlpyRVJ3VFFxS3hKS1FBSnhiQkt0bl9WV1FPd2JiZjNqUHpHZkRlOVBwaHdhZjZxaEZVa3RveFNaTUVXZUFhZ1FUb1FnWVZLLUdySnoxMzl3dThCatIBeEFVX3lxTE5oWGVNQnFlMmptRFFWRzk4MF9pZHltZXZJY2xPVlpyRVJ3VFFxS3hKS1FBSnhiQkt0bl9WV1FPd2JiZjNqUHpHZkRlOVBwaHdhZjZxaEZVa3RveFNaTUVXZUFhZ1FUb1FnWVZLLUdySnoxMzl3dThCag?oc=5"
            },
            {
              "n": 57,
              "title": "내년부터 원전 전기값 미리 정한다…\"전력시장 선진화 일환\" - 연합뉴스TV",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1lUFVBcTVScWdrbXdERHNjWG14WlhIWnBUYkFRY0djTXR5VjVfMUFpOXFpa3o0bUpjdWxaQlRHSDByWWFyU2syNWsyOVdEZ0EzSW1WUlhIZUxveE14cDV5TDRRcGpDRmM?oc=5"
            },
            {
              "n": 56,
              "title": "내년부터 원전 차액계약 적용한다… 주력 전원 최초 적용 - 에너지데일리",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE8zZHdYSGxmMXZSN2NjRFlRVm9ZeldwRUFlbkktam11MXczOHoyaFBKaEF3UWNyNmJKb1lvZUZyY0lRcWxQeXlVX2kyNXllaXEybXpWX1JiQUpwNzg3VFpXMFRVeHhnNHVienloRTF1LUQ5QQ?oc=5"
            },
            {
              "n": 60,
              "title": "내년부터 원전도 ‘차액계약’ 적용 “전력시장 정산체계 바뀐다” - 인사이트N파워",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE80RGpkMDYwNkpxUU8ydVBxWEF3X193REUzM3FZcHFIcEhlWDh3bnFRbG42V3ZqVkFLcDRXMVVjWmhCdDQ2bWdoWGFfNEREZnJDMWVZVmR5N2R6bUo4ZURXNm5kcWdOdw?oc=5"
            },
            {
              "n": 63,
              "title": "내년부터 원전 전력가격 사전 확정…‘정부승인차액계약’ 도입 - 서울경제TV",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBTdDZkaUI0V01GUm5ub2hqMThWc3R3RWZyVXhncnh3QzRxLUxGZUZNUmRoYWhLWTRyb2pGNDBMWFFicGNsZS1jdkNWNlR3eEZjZEVpZnhlREI0UHFSVGNWMm1ob2I?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-05",
          "rank_by_count": 5,
          "name": "포항 배터리 국제 콘퍼런스",
          "easy": "포항에서 배터리 산업의 미래 전략을 모색하는 국제 콘퍼런스가 열렸습니다. 배터리 시장의 일시적 수요 정체인 캐즘 현상을 극복하고, 북유럽 국가들과 공급망 협력을 강화하는 방안이 논의됐는데요. 포항을 글로벌 배터리 거점으로 키우겠다는 계획입니다.",
          "quote": "'배터리 캐즘 대응 전략 모색'…포항 배터리 국제 콘퍼런스",
          "member_count": 5,
          "sample_articles": [
            {
              "n": 195,
              "title": "'배터리 캐즘 대응 전략 모색'…포항 배터리 국제 콘퍼런스 - 뉴시스",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTE54UndoR09aWU1oWmdMRkdiWjVSVnNQOVp1RW1KMkk1MlZ6VlNXOXB5OXpDRXl3ZS0zajlOZTE3anNkZFVRQkJFVkNGUVZlOV9ELWVqQWlOSGN6NmxtVEdfY0FqcFlBX1VXZW9WVlBTcTgxb2FZazRDOdIBeEFVX3lxTE54UndoR09aWU1oWmdMRkdiWjVSVnNQOVp1RW1KMkk1MlZ6VlNXOXB5OXpDRXl3ZS0zajlOZTE3anNkZFVRQkJFVkNGUVZlOV9ELWVqQWlOSGN6NmxtVEdfY0FqcFlBX1VXZW9WVlBTcTgxb2FZazRDOQ?oc=5"
            },
            {
              "n": 193,
              "title": "포항, 글로벌 배터리 공급망 협력 거점 도약 모색…북유럽 3국과 전략 논의 - 아주경제",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBXU0NZaVlGeDRNbUJraXBtMUVCcnptTWN5YTBjc2JpblEtSEpfdG9RWWpaX0V0SndENGlwbmtOdF8tYkx6V0pTelNZamFHdmo0dzRNRmYxejjSAVhBVV95cUxQV1NDWWlZRng0TW1Ca2lwbTFFQnJ6bU1jeWEwY3NiaW5RLUhKX3RvUVlqWl9FdEp3RDRpcG5rTnRfLWJMeldKU3pTWWphR3ZqNHc0TUZmMXo4?oc=5"
            },
            {
              "n": 191,
              "title": "포항 배터리 국제회의서 소재 경쟁력·북유럽 공급망 협력 논의 - 경북일보",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5wajFYU1hXUzByT2xDZW1HMTFXRjVGNjJEOXA4RkJCYTg4VW5OY3pTOGh4OFhadXB6ZDJqQWVqcWdtQWhIcm1tc05LeUx0VFFack5UMVJrSFBWaDh2bjNNbGh2N3ZzemZnaEFLX0gwaw?oc=5"
            },
            {
              "n": 194,
              "title": "배터리 선도도시 포항 국제컨퍼런스 개최…캐즘 대응 미래 전략 모색 - 데일리대구경북뉴스",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTFBRMXo2OUZmOFJ0Nno3c0xqNHJnS01uMnZJQUctMFQwZ3B1YUExdldDa3J3dTZnS2ZSUGE3VURzOER2OFNXTTI2aHYzdUJNU010WjlpcUtRNTFUQkE4YWpoSmtBV2JNUQ?oc=5"
            },
            {
              "n": 196,
              "title": "배터리 캐즘 돌파구 찾는 포항…북유럽과 공급망 협력 모색 - www.hidomin.com",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE14ZUpyZngtcVUzWVNDQWc0M1I2MlozTVdmS1ZhbzJMVzNPY2ZWOVc2cUY5YWJ2cVVudFE3YlNXNjY5RDNycE85VG85eEhLUnRjUWstUWNXX3FXUTFwVnhTRVZuajBQMjFCVGc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-06",
          "rank_by_count": 6,
          "name": "핵융합연 초전도자석 기술 협력",
          "easy": "핵융합에너지연구원이 초전도자석 기술 개발을 위해 산학연 전문가들과 머리를 맞댔습니다. 핵융합 발전의 핵심인 초전도자석 기술의 방향을 논의하고 협력을 강화하기 위한 자리였는데요. 미래 에너지 기술 확보를 위한 행보로 풀이됩니다.",
          "quote": "핵융합연, 초전도자석 기술개발 방향 논의…산·학·연 협력 강화",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 181,
              "title": "핵융합연, 초전도자석 기술개발 방향 논의…산·학·연 협력 강화 - 아주경제",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFB2dUJIWmZua3FFR0ZYck1OZ0pINUpUdXZCRXhPc29jSW5pVVVLOUVEdGhxS29ETzE4VTR5NzlpS0lVN1gxMzJLMFpycjVUc0pNZUlFMGsydknSAVhBVV95cUxQdnVCSFpmbmtxRUdGWHJNTmdKSDVKVHV2QkV4T3NvY0luaVVVSzlFRHRocUtvRE8xOFU0eTc5aUtJVTdYMTMySzBacnI1VHNKTWVJRTBrMnZJ?oc=5"
            },
            {
              "n": 174,
              "title": "핵융합연, 핵융합 초전도자석 전문가 워크숍 - 충청뉴스",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBMLXhrRFEwSUhlRHJOLWt5WVdya2QwRTJMNlZuQnBNeC1EdnRTWVpjR0IwNGI4aG9OclB6amtEZksweUZtNkZ3N1BYdkd4b1JGX2lwRWx5MXU3enRrS0hyMkxndFF1Ql9keTBFdQ?oc=5"
            },
            {
              "n": 180,
              "title": "핵융합에너지연구원, 초전도자석 개발 위해 산·학·연 전문가 ‘한자리’ - 에너지플랫폼뉴스",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTFA4eUpVdWFZTFZkdzBLSXRGc0JtLXdEejhFeEdvdDl5Z2VJclFvbEpUMmFZcjVJRHlMTjE3T21jUS00MUdTMl9mWW9SWW9QU3p6LWJ2SlFWN3NBLUFrSUxOdEF5N1M0WmlRTkZCSlpZOG_SAXBBVV95cUxQOHlKVXVhWUxWZHcwS0l0RnNCbS13RHo4RXhHb3Q5eWdlSXJRb2xKVDJhWXI1SUR5TE4xN09tY1EtNDFHUzJfZllvUllvUFN6ei1idkpRVjdzQS1Ba0lMTnRBeTdTNFppUU5GQkpaWThv?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-07",
          "rank_by_count": 7,
          "name": "SK하이닉스 주가 급락 집단소송",
          "easy": "미국 대형 로펌이 SK하이닉스 주가 급락과 관련해 집단소송 조사를 시작했습니다. 투자자들의 손실을 보상받기 위한 절차로 보이는데요. 최근 SK하이닉스 주가가 크게 떨어지면서 투자자들의 불만이 커진 상황입니다.",
          "quote": "[단독] 美 대형 로펌, SK하이닉스 주가 급락 ’집단소송’ 조사 착수…투자자 손실 보상 추진",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 26,
              "title": "[단독] 美 대형 로펌, SK하이닉스 주가 급락 ’집단소송’ 조사 착수…투자자 손실 보상 추진",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2182611"
            },
            {
              "n": 88,
              "title": "[단독] 美 대형 로펌, SK하이닉스 주가 급락 ’집단소송’ 조사 착수…투자자 손실 보상 추진 By The Guru - Investing.com 한국어",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE0yVkVjelhXRFpDTWdzTml3SGJoSk1xZ1E3VlZGTlMwYVhVT2c2VGZjRmlEVlhxVDYzdkRSV0gxQ0t6VXppbzdKOUhTVlM5a0JtNXFLTzlrdGQ0UmplcEtGLWg2cHk5TUd1eVVnNG04TXE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-08",
          "rank_by_count": 8,
          "name": "지역별 전기요금 차등제 보류",
          "easy": "정부가 추진하려던 지역별 전기요금 차등제 도입 논의가 잠정 보류됐습니다. 태양광 업계의 반발이 거셌기 때문인데요. 정부는 일단 한발 물러나 상황을 지켜보겠다는 입장입니다.",
          "quote": "정부, '지역별 전기요금 차등제' 보류…태양광 반발에 한발 후퇴",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 133,
              "title": "정부, '지역별 전기요금 차등제' 보류…태양광 반발에 한발 후퇴 - 뉴스투데이",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE84WEZ3cHFzc0V6U2VzVmVQcFlwRllRWEVyOWVaUGlHbnUtQ3prTDBsTTJ3Mm92Y1NfVFpMdlE4MkhEaFVhYjhudVBrbmlzUWlBbHVCYnVQemVzWTdqVlE?oc=5"
            },
            {
              "n": 132,
              "title": "태양광업계 반발 직면…정부 ‘지역별 전기요금 차등제’ 도입 논의 잠정 보류 - 쿠키뉴스",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE14SGxwaEFYWENBbmpxSkNtRDJ3SUFHTDExazRQMjBkdGhPVTV6ekZ2OGJkZ25qRVlEMm44Tjk4REpsVTZpUmNrU1E1OGkzQko3RnRHOUNyMllTUko3ZHZpMmY3Zw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-09",
          "rank_by_count": 9,
          "name": "삼성전자 제7노조 광주노조 출범",
          "easy": "삼성전자의 7번째 노조인 광주노조가 공식 출범했습니다. 호남 지역에 반도체 사업장이 조성되면 DS 부문으로 노조를 확대하겠다는 계획인데요. 지역 내 반도체 사업 추진과 맞물려 노조의 영향력이 커질 것으로 보입니다.",
          "quote": "삼성전자 '7노조' 광주노조 출범, 호남 반도체 조성 후 DS 확대 추진",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 96,
              "title": "삼성전자 '7노조' 광주노조 출범, 호남 반도체 조성 후 DS 확대 추진 - 뉴스핌",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE5kQkQzc0tWSURVVERSOWw0TmtueGlJT195dEpNcXR0TGJNTlFtVFgwZC1rdW1TSlpmNlZxMzh2YVpWbW45S3Ffd2hWOXRUWS0zQ3ZEMHpwWW9JR0Nm?oc=5"
            },
            {
              "n": 101,
              "title": "삼성전자 제7노조 '광주노조' 출범…호남 반도체 사업 땐 DS로 확대 - 글로벌이코노믹",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMihgFBVV95cUxNZ3F1VWxKdGxSTzFZcTBDdVYybHF0b0trZF9fdFdHbjlVLUs4X19WQ0pWQkJCTWhjYjlCdWprZEJHQndEaGhJMjRxaXZaa0hoTWljVlBwUVY3WHJBVXEtemdpbFdpeXpITjA2VF9CdUtBZU8yMGJ6N1p6SVlueDVrcGc1cHNHUQ?oc=5"
            }
          ],
          "flags": [
            "예측 의심: 지역 내 반도체 사업 추진과 맞물려 노조의 영향력이 커질 것으로 보입니다."
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-10",
          "rank_by_count": 10,
          "name": "펩트론 비만치료제 임상 승인",
          "easy": "펩트론이 월 1회 투여하는 비만치료제 PT403에 대해 임상 1상 계획을 승인받았습니다. 기존 치료제보다 투여 주기를 대폭 늘린 것이 특징인데요. 이번 승인으로 신약 개발에 속도가 붙을 것으로 보입니다.",
          "quote": "펩트론, 월 1회 세마글루타이드 'PT403' 임상 1상 IND 승인",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 831,
              "title": "펩트론, 월 1회 세마글루타이드 'PT403' 임상 1상 IND 승인 - 히트뉴스",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTFB1ZTlhR2pHamdsZVVHOWZCX19zdUZGd0dnOWU5Y09MenlPS2J1SWU0aGFORDZHSjk2bTRFRHhXLW1USFJ0elZKSTEwbHZkem03eFF0RzRxOGNnQzJnTEh0SWFZaFBqRUZWYlhV?oc=5"
            },
            {
              "n": 835,
              "title": "펩트론 '월 1회' 비만치료제 임상 1상 IND 승인 - 전자신문",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1ITTNXVUhDWXdENjBCb2tsbXlqelVKQUFYeHFkY3RGbGxCVkVCOU45ck9jYjZmaldfRzJuX1FoVU9IeWliTVRBVjlEeEJYQQ?oc=5"
            }
          ],
          "flags": [
            "예측 의심: 이번 승인으로 신약 개발에 속도가 붙을 것으로 보입니다."
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        }
      ],
      "single_articles": [
        {
          "id": "e261119-11",
          "rank_by_count": 11,
          "name": "HD현대로보틱스, 국내 첫 1톤급 초대형 로봇 상용화 포문",
          "easy": "",
          "quote": "HD현대로보틱스, 국내 첫 1톤급 초대형 로봇 상용화 포문",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1,
              "title": "HD현대로보틱스, 국내 첫 1톤급 초대형 로봇 상용화 포문",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374986"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-12",
          "rank_by_count": 12,
          "name": "김준석 대한전선 사장, “목표는 하나로, 과정은 치열하게, 결실은 함께”",
          "easy": "",
          "quote": "김준석 대한전선 사장, “목표는 하나로, 과정은 치열하게, 결실은 함께”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 2,
              "title": "김준석 대한전선 사장, “목표는 하나로, 과정은 치열하게, 결실은 함께”",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374982"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-13",
          "rank_by_count": 13,
          "name": "(부고)최윤성 GS E&R 사업협력팀 팀장 모친상",
          "easy": "",
          "quote": "(부고)최윤성 GS E&R 사업협력팀 팀장 모친상",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 3,
              "title": "(부고)최윤성 GS E&R 사업협력팀 팀장 모친상",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374983"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-14",
          "rank_by_count": 14,
          "name": "LH, 발주계획 수립부터 착공까지 최대 67일 단축…긴급입찰 확대",
          "easy": "",
          "quote": "LH, 발주계획 수립부터 착공까지 최대 67일 단축…긴급입찰 확대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 4,
              "title": "LH, 발주계획 수립부터 착공까지 최대 67일 단축…긴급입찰 확대",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374981"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-15",
          "rank_by_count": 15,
          "name": "“원전 해체, 지역기업의 새로운 성장 기회”...기술력 있어도 사업화는 과제",
          "easy": "",
          "quote": "“원전 해체, 지역기업의 새로운 성장 기회”...기술력 있어도 사업화는 과제",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 5,
              "title": "“원전 해체, 지역기업의 새로운 성장 기회”...기술력 있어도 사업화는 과제",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374966"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-16",
          "rank_by_count": 16,
          "name": "“우리 바닷속 정보는 누가 지키나”...울산 부유식 해상풍력 해양조사 점검 촉구",
          "easy": "",
          "quote": "“우리 바닷속 정보는 누가 지키나”...울산 부유식 해상풍력 해양조사 점검 촉구",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 6,
              "title": "“우리 바닷속 정보는 누가 지키나”...울산 부유식 해상풍력 해양조사 점검 촉구",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374965"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-17",
          "rank_by_count": 17,
          "name": "한국공학대와 한국전자기술연구원 첨단산업 공동연구 협력 강화",
          "easy": "",
          "quote": "한국공학대와 한국전자기술연구원 첨단산업 공동연구 협력 강화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 7,
              "title": "한국공학대와 한국전자기술연구원 첨단산업 공동연구 협력 강화",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374980"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-18",
          "rank_by_count": 18,
          "name": "KTR, 중국 시험기관 SRTC Shenzhen과 손잡고 SRRC 인증 획득 지원 나선다",
          "easy": "",
          "quote": "KTR, 중국 시험기관 SRTC Shenzhen과 손잡고 SRRC 인증 획득 지원 나선다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 9,
              "title": "KTR, 중국 시험기관 SRTC Shenzhen과 손잡고 SRRC 인증 획득 지원 나선다",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374977"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-19",
          "rank_by_count": 19,
          "name": "부산시, 노후 복지시설 5곳 에너지 효율 개선...환기장치 6대 설치",
          "easy": "",
          "quote": "부산시, 노후 복지시설 5곳 에너지 효율 개선...환기장치 6대 설치",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 10,
              "title": "부산시, 노후 복지시설 5곳 에너지 효율 개선...환기장치 6대 설치",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374976"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-20",
          "rank_by_count": 20,
          "name": "KCL–한국화장실협회, 공중화장실 품질 향상에 ‘맞손’",
          "easy": "",
          "quote": "KCL–한국화장실협회, 공중화장실 품질 향상에 ‘맞손’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 11,
              "title": "KCL–한국화장실협회, 공중화장실 품질 향상에 ‘맞손’",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374974"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-21",
          "rank_by_count": 21,
          "name": "OCI파워, IPS와 손잡고 북미 태양광 인버터 O&M 시장 공략 본격화",
          "easy": "",
          "quote": "OCI파워, IPS와 손잡고 북미 태양광 인버터 O&M 시장 공략 본격화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 12,
              "title": "OCI파워, IPS와 손잡고 북미 태양광 인버터 O&M 시장 공략 본격화",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374972"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-22",
          "rank_by_count": 22,
          "name": "배터리 속 물, 약일까 독일까?… '두 얼굴‘ 야누스 젤로 둘 다 잡았다",
          "easy": "",
          "quote": "배터리 속 물, 약일까 독일까?… '두 얼굴‘ 야누스 젤로 둘 다 잡았다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 13,
              "title": "배터리 속 물, 약일까 독일까?… '두 얼굴‘ 야누스 젤로 둘 다 잡았다",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374969"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-23",
          "rank_by_count": 23,
          "name": "재료硏, 2026 한국재료학회 추계학술대회서 50주년 기념 특별 심포지엄 개최",
          "easy": "",
          "quote": "재료硏, 2026 한국재료학회 추계학술대회서 50주년 기념 특별 심포지엄 개최",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 14,
              "title": "재료硏, 2026 한국재료학회 추계학술대회서 50주년 기념 특별 심포지엄 개최",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374968"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-24",
          "rank_by_count": 24,
          "name": "경남도, ‘2026 대한민국원자력대전’ 창원서 개막...글로벌 원전 협력의 장 연다",
          "easy": "",
          "quote": "경남도, ‘2026 대한민국원자력대전’ 창원서 개막...글로벌 원전 협력의 장 연다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 15,
              "title": "경남도, ‘2026 대한민국원자력대전’ 창원서 개막...글로벌 원전 협력의 장 연다",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374967"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-25",
          "rank_by_count": 25,
          "name": "“2035년 전기화율 35%”…韓-IEA, ‘라이즈 아시아’ 국제무대 첫선",
          "easy": "",
          "quote": "“2035년 전기화율 35%”…韓-IEA, ‘라이즈 아시아’ 국제무대 첫선",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 16,
              "title": "“2035년 전기화율 35%”…韓-IEA, ‘라이즈 아시아’ 국제무대 첫선",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374942"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-26",
          "rank_by_count": 26,
          "name": "남부발전, 하동 전통시장 255개 점포에 AI 안전망",
          "easy": "",
          "quote": "남부발전, 하동 전통시장 255개 점포에 AI 안전망",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 17,
              "title": "남부발전, 하동 전통시장 255개 점포에 AI 안전망",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374964"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-27",
          "rank_by_count": 27,
          "name": "韓·日·獨, 청정수소 발전시장 해법 찾는다…내달 1일 포럼",
          "easy": "",
          "quote": "韓·日·獨, 청정수소 발전시장 해법 찾는다…내달 1일 포럼",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 18,
              "title": "韓·日·獨, 청정수소 발전시장 해법 찾는다…내달 1일 포럼",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374963"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-28",
          "rank_by_count": 28,
          "name": "동서발전, 갈등관리 강화…이해관계자 상생 기반 다진다",
          "easy": "",
          "quote": "동서발전, 갈등관리 강화…이해관계자 상생 기반 다진다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 19,
              "title": "동서발전, 갈등관리 강화…이해관계자 상생 기반 다진다",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374961"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-29",
          "rank_by_count": 29,
          "name": "양승조 수공 사장, 취임 후 첫 현장 행보로 ‘용인 반도체 클러스터’ 방문",
          "easy": "",
          "quote": "양승조 수공 사장, 취임 후 첫 현장 행보로 ‘용인 반도체 클러스터’ 방문",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 20,
              "title": "양승조 수공 사장, 취임 후 첫 현장 행보로 ‘용인 반도체 클러스터’ 방문",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374962"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-30",
          "rank_by_count": 30,
          "name": "[기자의 눈]낙찰 받아도 못 짓는 해상풍력, 관건은 시장 설계",
          "easy": "",
          "quote": "[기자의 눈]낙찰 받아도 못 짓는 해상풍력, 관건은 시장 설계",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 21,
              "title": "[기자의 눈]낙찰 받아도 못 짓는 해상풍력, 관건은 시장 설계",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374949"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-31",
          "rank_by_count": 31,
          "name": "남동발전, 화성에 500MW 열병합발전소…인허가 완료",
          "easy": "",
          "quote": "남동발전, 화성에 500MW 열병합발전소…인허가 완료",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 22,
              "title": "남동발전, 화성에 500MW 열병합발전소…인허가 완료",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374960"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-32",
          "rank_by_count": 32,
          "name": "한수원, 원전 정비·자재관리 손본다…내년 전사 확대",
          "easy": "",
          "quote": "한수원, 원전 정비·자재관리 손본다…내년 전사 확대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 23,
              "title": "한수원, 원전 정비·자재관리 손본다…내년 전사 확대",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374959"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-33",
          "rank_by_count": 33,
          "name": "(데스크시선)기업들은 왜 ‘에너지’에 뛰어드나",
          "easy": "",
          "quote": "(데스크시선)기업들은 왜 ‘에너지’에 뛰어드나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 24,
              "title": "(데스크시선)기업들은 왜 ‘에너지’에 뛰어드나",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374921"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-34",
          "rank_by_count": 34,
          "name": "“같은 전기 써도 탄소배출은 제각각”…오픈에너지, 209개국 비교 서비스 공개",
          "easy": "",
          "quote": "“같은 전기 써도 탄소배출은 제각각”…오픈에너지, 209개국 비교 서비스 공개",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 25,
              "title": "“같은 전기 써도 탄소배출은 제각각”…오픈에너지, 209개국 비교 서비스 공개",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374958"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-35",
          "rank_by_count": 35,
          "name": "AI 투자 쏠림에 경고등…HSBC \"한국 非기술주에 투자 몰릴 수도\"",
          "easy": "",
          "quote": "AI 투자 쏠림에 경고등…HSBC \"한국 非기술주에 투자 몰릴 수도\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 27,
              "title": "AI 투자 쏠림에 경고등…HSBC \"한국 非기술주에 투자 몰릴 수도\"",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2182610"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-36",
          "rank_by_count": 36,
          "name": "美 뉴욕주, 데이터센터發 전력난 가시화…2033년 전력 공급 부족 전망",
          "easy": "",
          "quote": "美 뉴욕주, 데이터센터發 전력난 가시화…2033년 전력 공급 부족 전망",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 28,
              "title": "美 뉴욕주, 데이터센터發 전력난 가시화…2033년 전력 공급 부족 전망",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2182607"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-37",
          "rank_by_count": 37,
          "name": "美 NSA 전산 장애, 중동 작전 지원하는 조지아주 시설에 영향 - CNN",
          "easy": "",
          "quote": "美 NSA 전산 장애, 중동 작전 지원하는 조지아주 시설에 영향 - CNN",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 29,
              "title": "美 NSA 전산 장애, 중동 작전 지원하는 조지아주 시설에 영향 - CNN",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-93CH-2182600"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-38",
          "rank_by_count": 38,
          "name": "Sunrise Energy Metals Ltd 주가, 오늘 왜 하락했나?",
          "easy": "",
          "quote": "Sunrise Energy Metals Ltd 주가, 오늘 왜 하락했나?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 30,
              "title": "Sunrise Energy Metals Ltd 주가, 오늘 왜 하락했나?",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-93CH-2182598"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-39",
          "rank_by_count": 39,
          "name": "신타스 CEO, 50억 달러 규모 Unifirst Corp 인수 위해 트럼프 만나",
          "easy": "",
          "quote": "신타스 CEO, 50억 달러 규모 Unifirst Corp 인수 위해 트럼프 만나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 31,
              "title": "신타스 CEO, 50억 달러 규모 Unifirst Corp 인수 위해 트럼프 만나",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-93CH-2182587"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-40",
          "rank_by_count": 40,
          "name": "삼성생명, 뉴욕·런던 운용법인 11년 만에 재인수…해외투자 확대",
          "easy": "",
          "quote": "삼성생명, 뉴욕·런던 운용법인 11년 만에 재인수…해외투자 확대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 32,
              "title": "삼성생명, 뉴욕·런던 운용법인 11년 만에 재인수…해외투자 확대",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2182580"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-41",
          "rank_by_count": 41,
          "name": "최현석 코오롱모빌리티 대표 \"시세 넘어 차량 상태·기능까지…’차량 빅데이터’ 신사업 시동\"",
          "easy": "",
          "quote": "최현석 코오롱모빌리티 대표 \"시세 넘어 차량 상태·기능까지…’차량 빅데이터’ 신사업 시동\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 33,
              "title": "최현석 코오롱모빌리티 대표 \"시세 넘어 차량 상태·기능까지…’차량 빅데이터’ 신사업 시동\"",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2182581"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-42",
          "rank_by_count": 42,
          "name": "[롯데바이오로직스 송도 1공장 준공] 강현심 재무부문장 \"내년 시생산·2028년 상업생산…증설·IPO 수주 상황 고려\"",
          "easy": "",
          "quote": "[롯데바이오로직스 송도 1공장 준공] 강현심 재무부문장 \"내년 시생산·2028년 상업생산…증설·IPO 수주 상황 고려\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 34,
              "title": "[롯데바이오로직스 송도 1공장 준공] 강현심 재무부문장 \"내년 시생산·2028년 상업생산…증설·IPO 수주 상황 고려\"",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2182582"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-43",
          "rank_by_count": 43,
          "name": "삼성전자 사장단 인사 20일 유력…메모리·MX 사업부장 새 판 짠다",
          "easy": "",
          "quote": "삼성전자 사장단 인사 20일 유력…메모리·MX 사업부장 새 판 짠다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 35,
              "title": "삼성전자 사장단 인사 20일 유력…메모리·MX 사업부장 새 판 짠다",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2182531"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-44",
          "rank_by_count": 44,
          "name": "호주 실업률 5년 만에 최고…취업자 4만3,500명 감소",
          "easy": "",
          "quote": "호주 실업률 5년 만에 최고…취업자 4만3,500명 감소",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 36,
              "title": "호주 실업률 5년 만에 최고…취업자 4만3,500명 감소",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-2182613"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-45",
          "rank_by_count": 45,
          "name": "잉글랜드 9월 주택가격 0.4% 하락…런던은 1.4% 내려",
          "easy": "",
          "quote": "잉글랜드 9월 주택가격 0.4% 하락…런던은 1.4% 내려",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 37,
              "title": "잉글랜드 9월 주택가격 0.4% 하락…런던은 1.4% 내려",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-93CH-2181236"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-46",
          "rank_by_count": 46,
          "name": "영국 10월 소비자물가 3.6% 상승…기록적 경유 가격이 상승 견인",
          "easy": "",
          "quote": "영국 10월 소비자물가 3.6% 상승…기록적 경유 가격이 상승 견인",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 38,
              "title": "영국 10월 소비자물가 3.6% 상승…기록적 경유 가격이 상승 견인",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-2181011"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-47",
          "rank_by_count": 47,
          "name": "말레이시아 3분기 GDP, AI·관광 호조로 예상 상회",
          "easy": "",
          "quote": "말레이시아 3분기 GDP, AI·관광 호조로 예상 상회",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 39,
              "title": "말레이시아 3분기 GDP, AI·관광 호조로 예상 상회",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-2180833"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-48",
          "rank_by_count": 48,
          "name": "파운드화 하락, 미국 금리 인상 기대가 영국 CPI 3.6% 상승 압도",
          "easy": "",
          "quote": "파운드화 하락, 미국 금리 인상 기대가 영국 CPI 3.6% 상승 압도",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 46,
              "title": "파운드화 하락, 미국 금리 인상 기대가 영국 CPI 3.6% 상승 압도",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-2181271"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-49",
          "rank_by_count": 49,
          "name": "미 국채 수익률, 연준 의사록 발표 앞두고 일주일 만의 최저 수준 근접",
          "easy": "",
          "quote": "미 국채 수익률, 연준 의사록 발표 앞두고 일주일 만의 최저 수준 근접",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 47,
              "title": "미 국채 수익률, 연준 의사록 발표 앞두고 일주일 만의 최저 수준 근접",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-2181166"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-50",
          "rank_by_count": 50,
          "name": "달러, 연준 월러 이사 발언·의사록에 19개월래 최고 수준",
          "easy": "",
          "quote": "달러, 연준 월러 이사 발언·의사록에 19개월래 최고 수준",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 48,
              "title": "달러, 연준 월러 이사 발언·의사록에 19개월래 최고 수준",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-2180852"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-51",
          "rank_by_count": 51,
          "name": "한전·산업은행, 대규모 투자사업 위험 관리 강화",
          "easy": "",
          "quote": "한전·산업은행, 대규모 투자사업 위험 관리 강화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 59,
              "title": "한전·산업은행, 대규모 투자사업 위험 관리 강화 - 글로벌이코노믹",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiigFBVV95cUxNNm5iLTZYMjBVdDZ3LUY1eEpidTRVNU9LVWpqT1NsZjRGdG85TDVBSk9NV3JtZFFham9QX3JpOHlDRDZxUzc3WDZDTXE5WUYzYlh3MURjUTZHQklBTlJfZllmdnRZZDFoelpjOWtzVm45NzB0Ym1YYmxEMEl2Z05jSlplczZKdjdqRGc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-52",
          "rank_by_count": 52,
          "name": "한국실명예방재단, 한국전력 후원 충북 단양에서 '눈 검진' 봉사",
          "easy": "",
          "quote": "한국실명예방재단, 한국전력 후원 충북 단양에서 '눈 검진' 봉사",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 61,
              "title": "한국실명예방재단, 한국전력 후원 충북 단양에서 '눈 검진' 봉사 - 의학신문",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9KaWVaNVVLTXk4N0ZaUUloZlVjbUhBT0wyVXdiZ0hoVExFQUQ3MFQyUTJVOUZnZkxpVThyY203OTNwa0wwZ3NZcHY5WXJxWmJsYUZuWmR5YUszVzJGYnZPN2x4Z0dhcUtCa0E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-53",
          "rank_by_count": 53,
          "name": "한전, 산업은행과 감사역량 강화 업무협약 체결",
          "easy": "",
          "quote": "한전, 산업은행과 감사역량 강화 업무협약 체결",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 62,
              "title": "한전, 산업은행과 감사역량 강화 업무협약 체결 - 일간투데이",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE1kVWlfM08zSnByRHNRNGNad1Q4Um52Q2JPTmF2TmpPSHEycHBha1FKTXhxMDkwS3Ita1JPdFhoQmxfZ0VIeWJXWnItNk9CLXpLWDBmY1FYYUF2MWFNcDJLQ0FFUm5vbTRUbXZr?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-54",
          "rank_by_count": 54,
          "name": "송재도 에경연 원장 \"AI·반도체 전력망 투자비, 산업계도 부담해야\"",
          "easy": "",
          "quote": "송재도 에경연 원장 \"AI·반도체 전력망 투자비, 산업계도 부담해야\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 66,
              "title": "송재도 에경연 원장 \"AI·반도체 전력망 투자비, 산업계도 부담해야\" - 뉴시스",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTFA4NnJ2TzNhOVdDZ1k2enBFZnJ5MTJRYTZ5Qlc4bGQtQlMwbjdaSXZmTTdPRzA2ejlPQThUMW1uRGVrbFBIRDR3YnpTcV9fZ09XSTRab2JCMmJSbkZuejVUN2lKbFdVZUM3dHE3enpOQlZaUENHajlsdNIBeEFVX3lxTFA4NnJ2TzNhOVdDZ1k2enBFZnJ5MTJRYTZ5Qlc4bGQtQlMwbjdaSXZmTTdPRzA2ejlPQThUMW1uRGVrbFBIRDR3YnpTcV9fZ09XSTRab2JCMmJSbkZuejVUN2lKbFdVZUM3dHE3enpOQlZaUENHajlsdA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-55",
          "rank_by_count": 55,
          "name": "안정적인 물 공급을 유지하는 것은 국가 발전에 필수적입니다.",
          "easy": "",
          "quote": "안정적인 물 공급을 유지하는 것은 국가 발전에 필수적입니다.",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 70,
              "title": "안정적인 물 공급을 유지하는 것은 국가 발전에 필수적입니다. - Vietnam.vn",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiigFBVV95cUxQTXNGejFoQUdoV2ZTWEF0MlZVUmp3T2pDRlNLNUo3TUltTE45ZXZnTnM5VU9WQXY3Z3hKcFJXNTNSNUE2aHhaUXRRclpZdjJ1RzI1RjFRenBfOXE3MVdiOEtjZWFXaVh5VzdWTW5YTFVpaEQzb0llVTE0aVZlclYwbmVzLUdNUlhvVkE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-56",
          "rank_by_count": 56,
          "name": "용존 가스 분석기(DGA) 시장 2035년 전망: 노후 전력망 인프라가 성장 견인 - 뉴스 및 통계",
          "easy": "",
          "quote": "용존 가스 분석기(DGA) 시장 2035년 전망: 노후 전력망 인프라가 성장 견인 - 뉴스 및 통계",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 72,
              "title": "용존 가스 분석기(DGA) 시장 2035년 전망: 노후 전력망 인프라가 성장 견인 - 뉴스 및 통계 - IndexBox",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxOdnlsbjkzRGZpakZCdnUxZmZDcjhNeTh6TGJ0aXAzZVdkdGRXbEx5Yk5lTThLVnJsYW9fWXpTa1J6V2ZwSWx2bE1yeWJ1cDRnRGlCTHlETVRNX21ndm5jT3ZCRnREVFBNd1VWVzhGUjg5ZFdGMHI4QklOSmtCQlRabDJkTW8wemh6bEZrX2J6VlQ0S1pLNWF2aW5XemxadmVUZDYxYUtKUHhITWFmLVRvdFlKOU43NDYxYzlLSml6NXlWemI1RXlnYjBXVm5MYWVkNWd3RDhfcFBMbFNPclpsUA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-57",
          "rank_by_count": 57,
          "name": "[현장취재] 홍성 궁리항, 선박 장기 정박에 선적·하역 마비…홍성군 행정은 어디에 있나",
          "easy": "",
          "quote": "[현장취재] 홍성 궁리항, 선박 장기 정박에 선적·하역 마비…홍성군 행정은 어디에 있나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 73,
              "title": "[현장취재] 홍성 궁리항, 선박 장기 정박에 선적·하역 마비…홍성군 행정은 어디에 있나 - 대한뉴스방송",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE8zZjMzX3F2NWNGRkVDalV3NlhtZzdxX2xpOGRRM3hFMTN2VFVlMDhFOWdrUVlyeFdyUWVySXFSSWVubTFhekVxWUIxajFfcGdaOExfa2dXZEhtazRxWEloWE9VUlNTRnpYekNXOQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-58",
          "rank_by_count": 58,
          "name": "수출도 주식도 AI 의존…반도체 호황 꺾이면 '이중 충격'",
          "easy": "",
          "quote": "수출도 주식도 AI 의존…반도체 호황 꺾이면 '이중 충격'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 74,
              "title": "수출도 주식도 AI 의존…반도체 호황 꺾이면 '이중 충격' - 뉴시스",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTE1NdUNTb2VnV1EzRVBmRzhkdTNNZEVhZGpuM29WVmlGTkoycmlJUjVjY2duT25sUDYtcHZOQWEzd2R6MzdlRGJQWUFvRlAxdW9MSUYzQVdpN1JxV3hUMElsMWV3SktUcXBvNDVhSXZfMVdUUEpWQW1KS9IBeEFVX3lxTE1NdUNTb2VnV1EzRVBmRzhkdTNNZEVhZGpuM29WVmlGTkoycmlJUjVjY2duT25sUDYtcHZOQWEzd2R6MzdlRGJQWUFvRlAxdW9MSUYzQVdpN1JxV3hUMElsMWV3SktUcXBvNDVhSXZfMVdUUEpWQW1KSw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-59",
          "rank_by_count": 59,
          "name": "[수출 1조달러 시대㊥] 절반이 '반도체'···1조달러 성적표 현주소",
          "easy": "",
          "quote": "[수출 1조달러 시대㊥] 절반이 '반도체'···1조달러 성적표 현주소",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 77,
              "title": "[수출 1조달러 시대㊥] 절반이 '반도체'···1조달러 성적표 현주소 - 포인트데일리",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTFB1Z2ZaeVh4Zm5fT0IwWnNDM3U1aXZNVEg4T0lvYVZjTzFaZno3T2lkMS1ZbW5vRFZxMEFEeEkyWkhrdzRtVlhidk4wZkw4Nkt0cWg5Z3Buc2dGSDJFTlYybWQ2b0lWWTFTcExWVmFqaDDSAXRBVV95cUxQM3hHaEZlOFNEdTg0SUNKWkxnNHVKeU5uZjJ5RUhyelVkS0N0YjF2YlBhb01wOHdJdjJUVTJCaU1ndXFMeGlmZnRUY0tRT01jWHdwZnYxN21kSEw1NllNY1AxQm9md2gxOFBiWXA3NDBuc25aVQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-60",
          "rank_by_count": 60,
          "name": "수출도, 증시도 ‘AI 한 우물’…반도체 호황 꺾이면 韓 경제 ‘이중 쇼크’ 경고",
          "easy": "",
          "quote": "수출도, 증시도 ‘AI 한 우물’…반도체 호황 꺾이면 韓 경제 ‘이중 쇼크’ 경고",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 78,
              "title": "수출도, 증시도 ‘AI 한 우물’…반도체 호황 꺾이면 韓 경제 ‘이중 쇼크’ 경고 - 와이드경제",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE1iMGZfMU1JOUl2b2VLOWpMUzN6dER5djR3azN2NGs4SVUtdDFpVm5mM2VibklObWtJVGlHdlgxWnc4MGdMcG9HcE9tWVUwN3dVVVhtRFVXU3JFTUJlTnYzNFdoV2RGaXNPb3BBUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-61",
          "rank_by_count": 61,
          "name": "[더벨][미래컴퍼니 줌인]반도체 드라이브, 글로벌 HBM·HBF 밸류체인 진입 - 머니투데이",
          "easy": "",
          "quote": "[더벨][미래컴퍼니 줌인]반도체 드라이브, 글로벌 HBM·HBF 밸류체인 진입 - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 79,
              "title": "[더벨][미래컴퍼니 줌인]반도체 드라이브, 글로벌 HBM·HBF 밸류체인 진입 - 머니투데이 - 머니투데이",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE01V2RUMVYyTzN2MnVLVkxTRU01Y0dpd1BndkgwQ1I0UkEwVlFFOVdDT0gwR2ViUUVncU1qZU95aVJoam1CSk84bEF5OVU3N1EyZVY3NUw2NjlBaEluY0k4TmI1U213RG9N0gFuQVVfeXFMTWs3d2FfS3BuMGhhVnpvVl9HWTRwbkRueTZqZDd6eEU3SzZXbHBJYXd4Xy1vTjlGWkVCWEI2bTVOeFlFYm9nZC1DTmcwUXlnR3B4eVBHZHFrTUpQYncwMDB1bWg5ZXJUbXM2akVlNkE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-62",
          "rank_by_count": 62,
          "name": "HBM에 쏠리는 반도체 생산능력…AI가 바꾼 메모리 공급 공식",
          "easy": "",
          "quote": "HBM에 쏠리는 반도체 생산능력…AI가 바꾼 메모리 공급 공식",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 80,
              "title": "HBM에 쏠리는 반도체 생산능력…AI가 바꾼 메모리 공급 공식 - PRESS9",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5ERmF3Y00tM0NhNTAwSWRZd01Xa2VJMjZJMjVZMVliT3pYSHdVbXFfVG9zOWp1R1o2TC1HZDh0MW5BbjRvdlhIcU5SUHhfMUtlcVVHX19aNzE5YVluUTM0YmExSmM?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-63",
          "rank_by_count": 63,
          "name": "‘빛으로 데이터 전송’ 광 인터커넥트 … ‘넥스트 HBM’ 될 수 있을까",
          "easy": "",
          "quote": "‘빛으로 데이터 전송’ 광 인터커넥트 … ‘넥스트 HBM’ 될 수 있을까",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 81,
              "title": "‘빛으로 데이터 전송’ 광 인터커넥트 … ‘넥스트 HBM’ 될 수 있을까 - 매일경제",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5wZkg2bEhnRW9FYXdzZXl5OUNCRjVPT04wQVhtMExuaG5ZMjZTQ1haWG5WN2R6Tkc5S01rdGdTeGs4elMxQ2JkRXNCX2FjT1ZTNHdmRUFB?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-64",
          "rank_by_count": 64,
          "name": "호남 반도체 팹 공장 배치 윤곽...HBM 공장 추가 협의",
          "easy": "",
          "quote": "호남 반도체 팹 공장 배치 윤곽...HBM 공장 추가 협의",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 82,
              "title": "호남 반도체 팹 공장 배치 윤곽...HBM 공장 추가 협의 - KBC광주방송",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFBHSURUWUNESGpuQ19QQ0VfRDJ4RWFyLXZ0MXVRMHFXdDdUWVlVVnNNNkJ0dnduVXgxV3EzeUpLTW9jWVFqZ3hfdGxjaE5HWmhqTDdXdEFZWkRQWWFOVTNZbA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-65",
          "rank_by_count": 65,
          "name": "‘넥스트 HBM’ 찾아라…K반도체, 미래 수출 엔진 키운다 [수출 1조달러의 힘]",
          "easy": "",
          "quote": "‘넥스트 HBM’ 찾아라…K반도체, 미래 수출 엔진 키운다 [수출 1조달러의 힘]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 83,
              "title": "‘넥스트 HBM’ 찾아라…K반도체, 미래 수출 엔진 키운다 [수출 1조달러의 힘] - 이투데이",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTFBoTC1McGtvQU9ScnN2SU9qTE9oQmJhcFVFQ3VQM292eXpkYWZtWTFCd3pjcW9RWWxxVWJYeThuRTY2WkJQbzFLTWZqYUZJSDR2cElabg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-66",
          "rank_by_count": 66,
          "name": "HBM 생산 확대가 부르는 장비 투자…국내 소부장 수혜 후보는?",
          "easy": "",
          "quote": "HBM 생산 확대가 부르는 장비 투자…국내 소부장 수혜 후보는?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 84,
              "title": "HBM 생산 확대가 부르는 장비 투자…국내 소부장 수혜 후보는? - 핀포인트뉴스",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTE1DcFpZbmFKc1RteTNIc3BxOFJQRTh1WDJDVEMza3pLeDc0T3YyVGlQLWlENGk0ZTY4bjVHRU5UZTZnX1E0TXJJNTc1WGlISFJDdkhRclZEcEhvU2cyME5FNEJyUm5ybk1pVXNrdnJUaG5NOGlTQ0F30gF3QVVfeXFMTUNwWlluYUpzVG15M0hzcHE4UlBFOHVYMkNUQzNrekt4NzRPdjJUaVAtaUQ0aTRlNjhuNUdFTlRlNmdfUTRNckk1NzVYaUhIUkN2SFFyVkRwSG9TZzIwTkU0QnJSbnJuTWlVc2t2clRobk04aVNDQXc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-67",
          "rank_by_count": 67,
          "name": "HBM만으론 부족…AI 메모리 계층화 경쟁 본격화 [반도체레이다]",
          "easy": "",
          "quote": "HBM만으론 부족…AI 메모리 계층화 경쟁 본격화 [반도체레이다]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 85,
              "title": "HBM만으론 부족…AI 메모리 계층화 경쟁 본격화 [반도체레이다] - 디지털데일리",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5JdTBlU3NWLThNWHpKQ1p3Z3drUE9ubGhDN3JjSmZybWlFVUV0QVRFNVgyVUo1T0x6ZG5xeVZIVFVKaE5uMXFkOWZjbDBmell4X3o3cktPbERRZ0hSa3NLUHNqQ20?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-68",
          "rank_by_count": 68,
          "name": "中 기업 해외 GPU 이용 제한…삼전닉스 HBM 수요 변수 : 네이버 블로그",
          "easy": "",
          "quote": "中 기업 해외 GPU 이용 제한…삼전닉스 HBM 수요 변수 : 네이버 블로그",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 86,
              "title": "中 기업 해외 GPU 이용 제한…삼전닉스 HBM 수요 변수 : 네이버 블로그 - Naver Blog",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMijwFBVV95cUxPV0thLXJla0hOeVZfMlZsVm5PR0l5UHNKbFc4Tk5sZVNmNFptWVdGTUJMTlVRVTRUUU5IWDRfMHBlb3JHQ3RTQ3pMWVdVQkxBWmZWbUZncW9HTC00V25uRm5lajlnZWM3RmNUTnJIME1CdS1FSVNnVE9ZcTJ5MVhlMmxsNDBWTmljek9rclo4bw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-69",
          "rank_by_count": 69,
          "name": "SK하이닉스, 미국 매출 1년 새 102조 원 증가",
          "easy": "",
          "quote": "SK하이닉스, 미국 매출 1년 새 102조 원 증가",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 87,
              "title": "SK하이닉스, 미국 매출 1년 새 102조 원 증가 - 주간동아",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9XZzhPd1ZFUElTT19DQ1RSZEY0UXBvbEZnMUJQOWhyM3JlRWl5TXFlLXo0ZlRjVmZKbXVjMWQzby0wM0tkcnN4Tm9RdkswWXdvSno5Z3NZT1FiZ1lPMGx1Y20yV08?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-70",
          "rank_by_count": 70,
          "name": "[단독] SK하이닉스·SKT 등 SK그룹 핵심 계열사, 'AI 변호사' 하비로 법무 대혁신",
          "easy": "",
          "quote": "[단독] SK하이닉스·SKT 등 SK그룹 핵심 계열사, 'AI 변호사' 하비로 법무 대혁신",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 89,
              "title": "[단독] SK하이닉스·SKT 등 SK그룹 핵심 계열사, 'AI 변호사' 하비로 법무 대혁신 - 더구루",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE5ZYWd1NE1KOTNBQm5STEcxbzNIT0JRM3BHelBEUGtBVXBZVG5ORHBhakdGdjNVZS1sSzlSNzJydkpHRVB0dHpFY1YySGNUQkMtUVc3d2NWUjl6dHlxemc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-71",
          "rank_by_count": 71,
          "name": "전남광주통합특별시의회, SK하이닉스 이천캠퍼스 방문",
          "easy": "",
          "quote": "전남광주통합특별시의회, SK하이닉스 이천캠퍼스 방문",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 90,
              "title": "전남광주통합특별시의회, SK하이닉스 이천캠퍼스 방문 - 일간투데이",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE1lWlhMdWZ4RWktVXhMVU5PNFM4WWtzTWJrWFpkaW5OTFlpNGlsQVFoWFdZVDdIVmdNZk5UZnJNMlpfUG9ubEFKRC0zeHR2WW1DMnRnQ21hZTVGMFY5UTktZWJSTjZYYTdmZFdF?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-72",
          "rank_by_count": 72,
          "name": "이용철 배우자 '3천만 원대' 하이닉스 주식 보유‥직무 관련성 심사 안 받아",
          "easy": "",
          "quote": "이용철 배우자 '3천만 원대' 하이닉스 주식 보유‥직무 관련성 심사 안 받아",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 91,
              "title": "이용철 배우자 '3천만 원대' 하이닉스 주식 보유‥직무 관련성 심사 안 받아 - MBC 뉴스",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTE9pdmxtSDNmeHRfR2xta0FPaVFueGwyN2ZsQWVFbzRCM0I3YVpHbElJMVFndDN3RndqWGwzTktxcGVsVm9tRERuSlNYTGVuWDNSbkJZUk1UaDZZcFB4TEJWT0NCb193bkRuRzVsTVktZWoxbnIwQnRv0gF3QVVfeXFMT085X1VLNGg1WUdZc3JCYWZGa3psem9DS2d6elJ1UVJDeWNHSTNQQzFrZVlxWFBPaVJaU0U5Y0pNbVJHU3BKcWVyN2hJR2czRDVoc3l2SW8tdTcyMnc4djlaYWhPMzZCMXpIbDVzUzZzakd4YVNiTXc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-73",
          "rank_by_count": 73,
          "name": "[국장방향예측] 코스피 1.35%↓ SK하이닉스 3.16%↓",
          "easy": "",
          "quote": "[국장방향예측] 코스피 1.35%↓ SK하이닉스 3.16%↓",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 92,
              "title": "[국장방향예측] 코스피 1.35%↓ SK하이닉스 3.16%↓ - 디지털애셋",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTFBpWlpGb21LbFl2bmtPaVBPa2FfTVAxeDZNbDdKbWFfRXdpYzdfLU1LMjNSLU95UE5fS1hQbUNwOU9RZzEyT0l0bUZaOVFodE1KZDhVNEUyWWlWMnVSOFBpUkQ0dFphbHRFTHVxZEJmUHkxZw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-74",
          "rank_by_count": 74,
          "name": "SK하이닉스·삼성전자 역대 최고 성과급에도 개미는 소비 줄인 이유",
          "easy": "",
          "quote": "SK하이닉스·삼성전자 역대 최고 성과급에도 개미는 소비 줄인 이유",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 93,
              "title": "SK하이닉스·삼성전자 역대 최고 성과급에도 개미는 소비 줄인 이유 - 글로벌이코노믹",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOVjV0NmRIV19XU1FQRE9qaDRRaWhKUnE5dW5fOHUyYm94dFdvbXg4ZGZSNXk3cVBtVHJLRDBERzlFa3NjNEdtZlJnaEZDMHpCMjI4Rjc1S0NoTzVHZGJ4N250QjQzQTFkZjRzLXV1RTN6Wl9DQ1ZRbG1qbHYxbXdnM2lKTENzYVN3?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-75",
          "rank_by_count": 75,
          "name": "KB증권 \"AI 규제, 수요 못 꺾어…삼성전자·SK하이닉스 최선호\"",
          "easy": "",
          "quote": "KB증권 \"AI 규제, 수요 못 꺾어…삼성전자·SK하이닉스 최선호\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 94,
              "title": "KB증권 \"AI 규제, 수요 못 꺾어…삼성전자·SK하이닉스 최선호\" - 뉴스1",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE1xQmNKUGF3SjRxNHg4cXpOMzU4NHF2Y1NIWlVCRFk3YnpFYkJJaUk1d3ptQ2k1X0tFSWNzSmcxek9nZjRQeG9DbktyS3JlaWhXeVBieUxRZnQzVXl5TEl3?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-76",
          "rank_by_count": 76,
          "name": "삼성전자 \"네오클라우드 비중 8%…AI 거품 우려 과도\"",
          "easy": "",
          "quote": "삼성전자 \"네오클라우드 비중 8%…AI 거품 우려 과도\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 95,
              "title": "삼성전자 \"네오클라우드 비중 8%…AI 거품 우려 과도\" - 연합뉴스",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBPRVhLWDZTS2xsWjM0RTFZaS11SjF1aHBWVFBvMl83S2tsOXljeFhGX25kT1FVSzRIcXpnTGZRbDF5MzFxNTgwNFhjR3kwQ0prdnhQSjRZZ194OWfSAWBBVV95cUxQeFpLdHo4NWNCUGNMTVl1UEg4dlowYUJCakpvbWFNWTJFMTNkdzlYOFlkSlJXMmFvS2tMYl8tYk9iN1YzcENBWG1Nc3FVQUc5SW1OSVVuSHd0Y3hyU0d1RjI?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-77",
          "rank_by_count": 77,
          "name": "이병철이 만든 삼성 경영의 틀…인재·반도체·비서실 39년의 유산",
          "easy": "",
          "quote": "이병철이 만든 삼성 경영의 틀…인재·반도체·비서실 39년의 유산",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 97,
              "title": "이병철이 만든 삼성 경영의 틀…인재·반도체·비서실 39년의 유산 - 더트래커",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBWMUtWNWFyZW9udnc5T0NGQ0NXV3VQQjNzVk43RWwzVGlaRlNZMlBRQ0UzTktzbzZFX1BTOHB2VFBHMl85RHRGcWY1NUdvMWVyQkhkN2htUWM?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-78",
          "rank_by_count": 78,
          "name": "삼성전자 \"네오클라우드 8% 불과, AI 궤도 위협 아냐\"",
          "easy": "",
          "quote": "삼성전자 \"네오클라우드 8% 불과, AI 궤도 위협 아냐\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 98,
              "title": "삼성전자 \"네오클라우드 8% 불과, AI 궤도 위협 아냐\" - 코리아리포트",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE15MFBFZWxEeE96U2Z0Uy1zclVlWWRvOTBERFFZX3V6RWtfd01uM051ZjNMdThpUnpuZTIzZ2J5UmlXNkZxT1M5WE5WcVp2SE1yeFFpRmRsU1FqanF6NktaaHdOZ3h0TzhqQkdOc29hOVI?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-79",
          "rank_by_count": 79,
          "name": "삼성 이병철 창업주 반도체 결단 43년…AI 시대 주도권 확보 과제",
          "easy": "",
          "quote": "삼성 이병철 창업주 반도체 결단 43년…AI 시대 주도권 확보 과제",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 99,
              "title": "삼성 이병철 창업주 반도체 결단 43년…AI 시대 주도권 확보 과제 - PRESS9",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9LZHk5cnEydlBOa3lnVFdsYUxhS2hYRlRLYXFoUm9WQm1HSmRVUzd1RGlpOEdwdUpDdkJPMWJrSU53TlR0TXhwWm9XaXA5NGhsQVZYZlQwUXhURE1zVFNGZVBKWko?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-80",
          "rank_by_count": 80,
          "name": "'도쿄 선언'으로 연 삼성 반도체 신화, 분기 100조 시대로",
          "easy": "",
          "quote": "'도쿄 선언'으로 연 삼성 반도체 신화, 분기 100조 시대로",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 100,
              "title": "'도쿄 선언'으로 연 삼성 반도체 신화, 분기 100조 시대로 - 뉴스투데이",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE5tdnh3aDlfTGM2V0xVcURlM00zNGJGZmR3VkphckJ5Z1ctS0ZqaTJWREMzX0hUWm96S1p0WW83QVJWSEx0SzRzTU12Q2ZhNHF2cVBXOVJaczRfaUlRVlE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-81",
          "rank_by_count": 81,
          "name": "김용관 삼성전자 사장 “AI 투자는 투기 아닌 실수요”…네오클라우드 부채 우려에 선 그어",
          "easy": "",
          "quote": "김용관 삼성전자 사장 “AI 투자는 투기 아닌 실수요”…네오클라우드 부채 우려에 선 그어",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 102,
              "title": "김용관 삼성전자 사장 “AI 투자는 투기 아닌 실수요”…네오클라우드 부채 우려에 선 그어 - 알파경제",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBzQjhJaTRYVVhqc0tCa2hlZXJkQjBfZm9RRGRiRVZKOGkzbVZtdVRSZF9HSlJST0YxUzVORjNMaVZiUW4tcGxFbjU5d3N6bEp0R0s0ZWhZeFhld29YLXBYcE1oUUNmUHNBa1J4WEpn?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-82",
          "rank_by_count": 82,
          "name": "[뉴욕마켓워치] 엔비디아 호실적도 못 살린 투심…주식·채권 혼조·달러↑",
          "easy": "",
          "quote": "[뉴욕마켓워치] 엔비디아 호실적도 못 살린 투심…주식·채권 혼조·달러↑",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 103,
              "title": "[뉴욕마켓워치] 엔비디아 호실적도 못 살린 투심…주식·채권 혼조·달러↑ - 연합인포맥스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBZOWpZdUJFYVhqeHc2LXRaMm15RmFBbllxOEdub0JGWXV6b0VtN2NRcDB1elNVWjAtejROdFRYbWZkc0tEOXhrN081RFZ2QUJaMXhmenpSanF4UHVrbUlaRTdnNjhTbnROYkw0ektnbEY?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-83",
          "rank_by_count": 83,
          "name": "뉴욕 증시, 엔비디아 실적 호조에도 혼조 마감",
          "easy": "",
          "quote": "뉴욕 증시, 엔비디아 실적 호조에도 혼조 마감",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 108,
              "title": "뉴욕 증시, 엔비디아 실적 호조에도 혼조 마감 - YTN",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE8wbGxiY3doY3FNTFRubmRpT3E2WmxRRnlGRUxnbFh3VlJDdVVkVWQ3N1YyZGc3VFAteV9xek1JekY3SkJaWHRMR2V4UFR4UEdaOUZrMUNwZm9aa3hUSWdITjlldzhJYW5DUmgxcDV5RQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-84",
          "rank_by_count": 84,
          "name": "트럼프, 필리핀 원전 협력 시사…4.8GW 시장 선점 경쟁",
          "easy": "",
          "quote": "트럼프, 필리핀 원전 협력 시사…4.8GW 시장 선점 경쟁",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 111,
              "title": "트럼프, 필리핀 원전 협력 시사…4.8GW 시장 선점 경쟁 - 에너지안전신문",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBpMExmdWhiTEh2MUZoU0l1N1RtNkhwSzVyQlpzY3Jlb21zWlFkNk53cXFSM01HVFhFWFc5UU85N01kZVVtVENMa1RyMHlFSGRRanJEc24yOVhPb1J1SlRQdnA1bDA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-85",
          "rank_by_count": 85,
          "name": "[가봤더니] LNG 다루던 기술로 원전까지…우양에이치씨, 에너지 영토 넓힌다 : 네이버 블로그",
          "easy": "",
          "quote": "[가봤더니] LNG 다루던 기술로 원전까지…우양에이치씨, 에너지 영토 넓힌다 : 네이버 블로그",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 112,
              "title": "[가봤더니] LNG 다루던 기술로 원전까지…우양에이치씨, 에너지 영토 넓힌다 : 네이버 블로그 - Naver Blog",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQVWZYdnpiY3ZWN3lMU0tIZ01fbjlQOFg0cTlCeUkyc1pMZmQxdEYzRTVETGFtRk00cXBacXNRdjlNYWJvbWhaekUwci1zNTMxZjlZSlFzNWdvckdSRVVZRUZqcmdueEltLS0xMGtvRXRtYlhGY3k2aW04Q2JqWGtxWmNTU2QxMkktdHFobloxRQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-86",
          "rank_by_count": 86,
          "name": "삼성물산, 영국 SMR 사업 본격화…현지 공급망 행사 개최 예정",
          "easy": "",
          "quote": "삼성물산, 영국 SMR 사업 본격화…현지 공급망 행사 개최 예정",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 113,
              "title": "삼성물산, 영국 SMR 사업 본격화…현지 공급망 행사 개최 예정 - 더구루",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFBpNDYtakdNRW9zaFlMM1dJR1hWNDFpQTRNTUlBZ0RvaU41VGd0OFU5cGVJMnBOYlI4OVpfVzB6ZUJrYTRuMnQzcm9ickVENnRNS09ZQkotYzhHdll0Vy11TDNrbw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-87",
          "rank_by_count": 87,
          "name": "두산·삼성 투자 '뉴스케일파워' 파트너, 美 설계 명가와 SMR 가속",
          "easy": "",
          "quote": "두산·삼성 투자 '뉴스케일파워' 파트너, 美 설계 명가와 SMR 가속",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 114,
              "title": "두산·삼성 투자 '뉴스케일파워' 파트너, 美 설계 명가와 SMR 가속 - 한국신용신문",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE9ycVl3VE8yTE40M2Jad3FUQ2RSY0Rmcl9HNHRGbU8tdVU5SlN1enlWbDFxc09lMEJGSFlhMWtKdWU0QjlOdE5tMVd0VUNRcWhsVjVGbG5MemFnZW94Wldnb2FUOFRLU1lOM2hF?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-88",
          "rank_by_count": 88,
          "name": "미국 SMR 인허가 빨라져 GE버노바히타치 사업 탄력, 협력사 삼성물산 유럽 수주도 기대",
          "easy": "",
          "quote": "미국 SMR 인허가 빨라져 GE버노바히타치 사업 탄력, 협력사 삼성물산 유럽 수주도 기대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 115,
              "title": "미국 SMR 인허가 빨라져 GE버노바히타치 사업 탄력, 협력사 삼성물산 유럽 수주도 기대 - 비즈니스포스트",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTFBRaktYUXhVTzJtQ0V6dmF4cmdmNnVNNFBabFB1TW5GS0UyZ3JMY3Vzd0tFaGpKRUU2d0dUaW8tUXB3VTYtb3dMUzZGUW1mOUpVT0c5ZU9fb3VsbjNtdHdSR2d1emEzeXhxX2JvdUh5dEJWZDA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-89",
          "rank_by_count": 89,
          "name": "경남 SMR 원전 밸브·단조, 美 PM-HIP 파고 넘을까",
          "easy": "",
          "quote": "경남 SMR 원전 밸브·단조, 美 PM-HIP 파고 넘을까",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 116,
              "title": "경남 SMR 원전 밸브·단조, 美 PM-HIP 파고 넘을까 - 에너지안전신문",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1GdkdtMmMtb1hLSTdlQUNGYjh3c2ppRGZYemFvSlBsWHZyYno0eXNsQ2toZU94UzFlbHRNS1VXZmdLOXVXcU5MMmd4NV9iV2FfeU04X2NFVXNueUhlRlJaQjZjZm0?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-90",
          "rank_by_count": 90,
          "name": "SK온 대만 1.2GWh ESS 수주전 뛰어든다…12월 입찰 - 머니투데이",
          "easy": "",
          "quote": "SK온 대만 1.2GWh ESS 수주전 뛰어든다…12월 입찰 - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 120,
              "title": "SK온 대만 1.2GWh ESS 수주전 뛰어든다…12월 입찰 - 머니투데이 - 머니투데이",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE15d3d4dXBtQWVZRndHNnJ2SldLMlF1VWNOMGNkVXpqUjl2NEloX0FuektObkNlTHduWnNQR25sWmZUdUI3Q09tVTZUWXkxczJFS0pCMUZGb0l2S2FVNTVza3gxMWV2QWMyUTh0Wm9sZ2k3Z9IBckFVX3lxTE15d3d4dXBtQWVZRndHNnJ2SldLMlF1VWNOMGNkVXpqUjl2NEloX0FuektObkNlTHduWnNQR25sWmZUdUI3Q09tVTZUWXkxczJFS0pCMUZGb0l2S2FVNTVza3gxMWV2QWMyUTh0Wm9sZ2k3Zw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-91",
          "rank_by_count": 91,
          "name": "신재생에너지에 AI 전력 수요까지… ESS 산업 성장판 열릴 가능성",
          "easy": "",
          "quote": "신재생에너지에 AI 전력 수요까지… ESS 산업 성장판 열릴 가능성",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 121,
              "title": "신재생에너지에 AI 전력 수요까지… ESS 산업 성장판 열릴 가능성 - 핀포인트뉴스",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTFBQVndVOF9WaXVmMnhYeE1MWlJYOTVEOWZUNVFlNVl1eGx3d01ZVVM1cFNDczhMM29MWkkzQ2NHdkREYXhFRzJfdjRQWVNURkFtMV9qMlp6ZTRCdUthSkhUeW96WnNEQkpOWUJBaXlIbkE5c2hjWXc00gF3QVVfeXFMUFBWd1U4X1ZpdWYyeFh4TUxaUlg5NUQ5ZlQ1UWU1WXV4bHd3TVlVUzVwU0NzOEwzb0xaSTNDY0d2RERheEVHMl92NFBZU1RGQW0xX2oyWnplNEJ1S2FKSFR5b3pac0RCSk5ZQkFpeUhuQTlzaGNZdzQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-92",
          "rank_by_count": 92,
          "name": "[스타트UP] 델타엑스 “소프트뱅크 ESS 생태계 파트너 선정…세계 에너지 시장 공략”",
          "easy": "",
          "quote": "[스타트UP] 델타엑스 “소프트뱅크 ESS 생태계 파트너 선정…세계 에너지 시장 공략”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 122,
              "title": "[스타트UP] 델타엑스 “소프트뱅크 ESS 생태계 파트너 선정…세계 에너지 시장 공략” - Chosunbiz",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMikAFBVV95cUxNNjYxdTVJcHhLN3VDZzBqTW11M3YyMllZYXRlVGNPeDNPOVVpc2g1aDh4WmdicWJWU3NDZ2V2S0pNMkNSRWRkZURsb3hSOEdfRVlkeFBzSHFmd2lydWdRMlphOUU0N0wtVjhsZFNCRkhmWmVCd1FRaV9Jb0JFVHVoWWs0TjZTXzAwVVE0TGw5OVnSAaQBQVVfeXFMT1g1cHE3UGxTcEI1S3NfdkhOQndxbHh1YnZCYUw4dzc3ckVRYlJFYTRrUENPWU04RzJPSFZGaGh4QktyOUxEdHBOdHdHaEROZVVhM1BvN3VlTl9VeVNYY3JpbUxIZW9oZnpHSVZiWkE3T1JFTERqTEp"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-93",
          "rank_by_count": 93,
          "name": "LG에너지솔루션, 美 RE+서 차세대 ESS 공개…AI 전력시장 공략 가속",
          "easy": "",
          "quote": "LG에너지솔루션, 美 RE+서 차세대 ESS 공개…AI 전력시장 공략 가속",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 123,
              "title": "LG에너지솔루션, 美 RE+서 차세대 ESS 공개…AI 전력시장 공략 가속 - 산경투데이",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTFBVYmFXbF84bl9fcFFQVlVUakV4SjJ5VmdZZEkxNmVuU05YSXdtaXBjdFk4SVpGdnZmY3dBeElteG40d3l0enNicmRtVTRKd3ZZQXcwNzd6RG8xdTMxcG9jVFZCWUVPSjBTNm9pN3lWdkFSMTF50gF0QVVfeXFMUFViYVdsXzhuX19wUVBWVVRqRXhKMnlWZ1lkSTE2ZW5TTlhJd21pcGN0WThJWkZ2dmZjd0F4SW14bjR3eXR6c2JyZG1VNEp3dllBdzA3N3pEbzF1MzFwb2NUVkJZRU9KMFM2b2k3eVZ2QVIxMXk?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-94",
          "rank_by_count": 94,
          "name": "삼성SDI-LG에너지솔루션, 미국 'RE+'서 전기차·ESS에 AIDC로 배터리 '번외전'",
          "easy": "",
          "quote": "삼성SDI-LG에너지솔루션, 미국 'RE+'서 전기차·ESS에 AIDC로 배터리 '번외전'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 124,
              "title": "삼성SDI-LG에너지솔루션, 미국 'RE+'서 전기차·ESS에 AIDC로 배터리 '번외전' - 글로벌경제신문",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9EN0JwYi0xazEzWHBsYmhOQi1IbmxxUTFnOWUtRjBGUVVKQ2w5NG50NXpxLVUxLVZiRFNQRW8xeHp6UElMRldxTmZVeXE0djFrSzlzN2ZtM3I0cHczdlNPR2JQdEtzUm4zWE9INmx2NE3SAXBBVV95cUxPRDdCcGItMWsxM1hwbGJoTkItSG5scVExZzllLUYwRlFVSkNsOTRudDV6cS1VMS1WYkRTUEVvMXh6elBJTEZXcU5mVXlxNHYxa0s5czdmbTNyNHB3M3ZTT0diUHRLc1JuM1hPSDZsdjRN?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-95",
          "rank_by_count": 95,
          "name": "15개월 반대 부딪힌 SK이노베이션 E&S 미국 ESS 사업 표결 임박",
          "easy": "",
          "quote": "15개월 반대 부딪힌 SK이노베이션 E&S 미국 ESS 사업 표결 임박",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 125,
              "title": "15개월 반대 부딪힌 SK이노베이션 E&S 미국 ESS 사업 표결 임박 - 한국신용신문",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE9GLTVEM0V3d0F5NTZ0UTBjODI2dE1kaG9NQXFmaHlTWlg2S2RuQThiRFNacVRRaDJXbGtWS3d1NURXR05EY2J3TFc5ZXhIdE45dkNlYVZNd1k2RFFuR0xOYTN1dS1MM0tHekpF?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-96",
          "rank_by_count": 96,
          "name": "[알립니다] 24회 에너지전략포럼 엽니다",
          "easy": "",
          "quote": "[알립니다] 24회 에너지전략포럼 엽니다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 126,
              "title": "[알립니다] 24회 에너지전략포럼 엽니다 - 서울경제",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE96WG5YUVh1QVQ1bFNxdG96U3liM2xNVU53MUhDWDNxT1A4U2U2bzBYY2hqRGVubFRtT1N5QS1RQlF1UFEtQjVLZ1VxSmhjc1FoRUtV0gFTQVVfeXFMT3pYblhRWHVBVDVsU3F0b3pTeWIzbE1VTncxSENYM3FPUDhTZTZvMFhjaGpEZW5sVG1PU3lBLVFCUXVQUS1CNUtnVXFKaGNzUWhFS1U?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-97",
          "rank_by_count": 97,
          "name": "인제군, 공동주택 보안등 전기요금 전액 지원...주민 부담 던다",
          "easy": "",
          "quote": "인제군, 공동주택 보안등 전기요금 전액 지원...주민 부담 던다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 127,
              "title": "인제군, 공동주택 보안등 전기요금 전액 지원...주민 부담 던다 - 경기뉴스원",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE1fVG5mdk4zUnR4MUd6WURMSWdOY1ZvRVp3QkF6Mnc3TkJSdzRsWUs3QWVYLXBaYWpyb0ZoWnJ2ZlJHWG1jMUZ0bjcyNy14THcyZDJ0aVQzRXVJVXl0dVFNbWJvaw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-98",
          "rank_by_count": 98,
          "name": "英 에너지요금 26% 인상 전망…이란 전쟁 여파",
          "easy": "",
          "quote": "英 에너지요금 26% 인상 전망…이란 전쟁 여파",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 128,
              "title": "英 에너지요금 26% 인상 전망…이란 전쟁 여파 - 알파경제",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBRd1hadnBhWWJ6dGdFY055Wm95WVJyeF9aQWZ5ejJPN2ZCTm1mS2VCaEZKNHVRRE1iYXhDU2NvaWxCN3l4VkpCZ0FPTFMta3M2UmJRbGxoRlJ1SVpic3F5amF2MlZDQ2JZMkctWF93?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-99",
          "rank_by_count": 99,
          "name": "남원 전기차 충전기 45기 단전… 원인은 전기요금 체납",
          "easy": "",
          "quote": "남원 전기차 충전기 45기 단전… 원인은 전기요금 체납",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 129,
              "title": "남원 전기차 충전기 45기 단전… 원인은 전기요금 체납 - 천지일보",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1hYVYxMFdDSS00MmJ0WV9KWG5YZ3NYdk1NNFBZNjk5THQ5YkpTbDhRYTlNWXhWcWpGT3pQX3owTldKWWFmUHFzRUYyNDZuRTJsTG9Lek5pVmc1cnpGSVdSaFFEUlE2SlFRSlE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-100",
          "rank_by_count": 100,
          "name": "[기자수첩] 데이터센터, 문제는 소음보다 전력망 - 머니투데이",
          "easy": "",
          "quote": "[기자수첩] 데이터센터, 문제는 소음보다 전력망 - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 130,
              "title": "[기자수첩] 데이터센터, 문제는 소음보다 전력망 - 머니투데이 - 머니투데이",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTFA2MmplY0ZPMzFjck1tTDd1VUlQbzAxQnlCSU9Jd0cxRWMyWmpvdDh4aTRfZHVTTy1DWHlkWWRRNDJDTkJwbzROYnE5QlFzSzBkTElUVXlWRGZyUG9VQVd3Wi0zS1VmQ0RNS25mLUFBLU3SAXBBVV95cUxQNjJqZWNGTzMxY3JNbUw3dVVJUG8wMUJ5QklPSXdHMUVjMlpqb3Q4eGk0X2R1U08tQ1h5ZFlkUTQyQ05CcG80TmJxOUJRc0swZExJVFV5VkRmclBvVUFXd1otM0tVZkNETUtuZi1BQS1N?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-101",
          "rank_by_count": 101,
          "name": "美 뉴욕주, 데이터센터發 전력난 가시화…2033년 전력 공급 부족 전망",
          "easy": "",
          "quote": "美 뉴욕주, 데이터센터發 전력난 가시화…2033년 전력 공급 부족 전망",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 135,
              "title": "美 뉴욕주, 데이터센터發 전력난 가시화…2033년 전력 공급 부족 전망 - 더구루",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE5nZ3BQV0QyODBmbVgtVHFRRWpTMVpGTHNqUnE3TnFOVE0tcFh3NHg2QkVsQXB3UmlPa3RtbllqcU5yeHdMM055X05Wamw2NmRMY3JuQjJfbkw3SC11MVJTUEV1bw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-102",
          "rank_by_count": 102,
          "name": "AI 데이터센터 전력 수요 잡아라…LG엔솔, 통합 에너지 솔루션 공개",
          "easy": "",
          "quote": "AI 데이터센터 전력 수요 잡아라…LG엔솔, 통합 에너지 솔루션 공개",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 136,
              "title": "AI 데이터센터 전력 수요 잡아라…LG엔솔, 통합 에너지 솔루션 공개 - 이코노미톡뉴스",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9jM1hZanQxZ3ctSDRIX2tXeGp2UHBJeTFGNlNtVEdfZjE4RzAxLTdoZnViV0J4RHBFSFBKNURBQ0YtYXhNWUY3SDcyVlU2eWRlUFczWGtsTHNYNVo2MFVXZEM2cmE0Ynpub1Vqbw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-103",
          "rank_by_count": 103,
          "name": "[중국 특징주] 中 AI 데이터센터 붐에 디젤발전기 수출 급증…올해 6000대 돌파 전망",
          "easy": "",
          "quote": "[중국 특징주] 中 AI 데이터센터 붐에 디젤발전기 수출 급증…올해 6000대 돌파 전망",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 137,
              "title": "[중국 특징주] 中 AI 데이터센터 붐에 디젤발전기 수출 급증…올해 6000대 돌파 전망 - 뉴스핌",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE5CZzRNRVZiVWRYNGtzS0hfTjVXQTdreDI1VDVnMWprWHRxWmZDRjVQTnNLYzVJS2lpdGQxSENCaExPN3ZMWFZkaVZpU1htdEI4QlhRSWkwcV9mVG1H?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-104",
          "rank_by_count": 104,
          "name": "AI 시대 전력망 투자 본격화…LS ELECTRIC·HD현대일렉트릭 수주 기대",
          "easy": "",
          "quote": "AI 시대 전력망 투자 본격화…LS ELECTRIC·HD현대일렉트릭 수주 기대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 138,
              "title": "AI 시대 전력망 투자 본격화…LS ELECTRIC·HD현대일렉트릭 수주 기대 - 핀포인트뉴스",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTE9MYWYweEVUMkNEN2JKaU9fRUNncnhHb1RXNEo3WnBueVJYZ2dDV19OSDczMHpwSk9oVjZuNWYzeC1yVXc4QXdxbk1PVmhSUHkzcjlXWW03NXMxNHpRR2V0N0RmYnIyblRrRGRpQnMtTmJoenk3T1Jn0gF3QVVfeXFMT0xhZjB4RVQyQ0Q3YkppT19FQ2dyeEdvVFc0SjdacG55UlhnZ0NXX05INzMwenBKT2hWNm41ZjN4LXJVdzhBd3FuTU9WaFJQeTNyOVdZbTc1czE0elFHZXQ3RGZicjJuVGtEZGlCcy1OYmh6eTdPUmc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-105",
          "rank_by_count": 105,
          "name": "AI 데이터센터發 전력수요 급증…“전력망 비용, 수요자도 부담해야”",
          "easy": "",
          "quote": "AI 데이터센터發 전력수요 급증…“전력망 비용, 수요자도 부담해야”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 139,
              "title": "AI 데이터센터發 전력수요 급증…“전력망 비용, 수요자도 부담해야” - 쿠키뉴스",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE1kU191VFotZ1V6am9MaFZYWDJhTk5aYUpFWjh6MUJTeldfQnl0aHVnaXVGZl9GNExoZUZqXzJRcmlHZ2ZxZ1BjX3JJZTJXODl2OFhhdUdFOE4xdjhfZkowbXZ3aw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-106",
          "rank_by_count": 106,
          "name": "강릉 AI 데이터센터 공방 지속…\"전력 확보에 여야 힘 모아야\"",
          "easy": "",
          "quote": "강릉 AI 데이터센터 공방 지속…\"전력 확보에 여야 힘 모아야\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 140,
              "title": "강릉 AI 데이터센터 공방 지속…\"전력 확보에 여야 힘 모아야\" - 연합뉴스",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFA4MWtpUFhweVNJVXNZNUZYS2FYckp4ZTJtT1Z4alNycXlLOE1NbkpZb1ZwSTRkQy1ueV9FRHBJeTJyUElUUUY1VDM5UFQ0MkNfTFRKWHlDLXpSOUnSAWBBVV95cUxNanFRczF1ZkkwSE13bzhwS0YyVVR3UHJKbHBBVVBScW5sMmF6b3RYZUpvMVNqOThMUEhwZ2h6YWQwYWNKNGtxdjRIZUV3RENucDFLT3RrTFUzVTVMUHBsc0U?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-107",
          "rank_by_count": 107,
          "name": "AI 데이터센터 전력용 가스-배터리 시스템 선보인 Trina Storage",
          "easy": "",
          "quote": "AI 데이터센터 전력용 가스-배터리 시스템 선보인 Trina Storage",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 141,
              "title": "AI 데이터센터 전력용 가스-배터리 시스템 선보인 Trina Storage - Unite.AI",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMikwFBVV95cUxOV1BWS1BlNVZ5OV8wZ3Q1ak1SdWtDbjdONmxOR3c5ZGRaNlBwcTRHU2VIXzMyWWJKUTN5dE5scGNnZEVZNVZFODdQYkVTY3lBbGs5NWJNWVZtckRhdTFId2NkSFhFWDNGY3EydjF4dVBla2NUWi03N0NyZGVVQ3ltMXd5aXcwempyb2o4YkFzSG9ZbjA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-108",
          "rank_by_count": 108,
          "name": "AI 데이터센터 덕분에..中 파운드리 풀가동, 업계 ‘주목’",
          "easy": "",
          "quote": "AI 데이터센터 덕분에..中 파운드리 풀가동, 업계 ‘주목’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 142,
              "title": "AI 데이터센터 덕분에..中 파운드리 풀가동, 업계 ‘주목’ - 데일리카",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMidkFVX3lxTE80QVNlRENJYXJLeFp5Q1NsVlVfeDc2VTVCSExVRF9tYl9KdFdWemV1d0ZCek90ZTZZY3RLWlg2ZE15UGZ6RGhTQ29PZENSYzljSHEwMHBoSU9NMkgtSnF1YThlLTZkWExKRHlwOFgyeFNxYkxacGc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-109",
          "rank_by_count": 109,
          "name": "3배 폭등한 천연가스…유럽이 사고치게 된 이유",
          "easy": "",
          "quote": "3배 폭등한 천연가스…유럽이 사고치게 된 이유",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 144,
              "title": "3배 폭등한 천연가스…유럽이 사고치게 된 이유 - 네이버페이 머니스토리",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9tV08tSlp4dl9ZSFVidHVsNmdQd1ZnbUFkNDBEREw4MzV6TGJCZlBHeVA5aDhnZzByNm53YU9wZldQTzJTeW9YQ3VBNnQ0WVBnQVVLQkdfMEY?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-110",
          "rank_by_count": 110,
          "name": "“韓 에너지소비 英 2배 달해... 가격 통제 말고 절약 유도해야”",
          "easy": "",
          "quote": "“韓 에너지소비 英 2배 달해... 가격 통제 말고 절약 유도해야”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 145,
              "title": "“韓 에너지소비 英 2배 달해... 가격 통제 말고 절약 유도해야” - 서울경제",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5BOGxVZ25UeHY5dkZ5ZG1SUi1kZU9WRXg5Zzk1b3JZZlBXWkhSblZJN0IzYVM1SnVSS2FYWVpDX2RydGVfcmhmNWhETFZCVnNPOHfSAVNBVV95cUxOajNUWFpFaTlaRmhJQ1NwRnM2aUVSWEt0cDVWRVZPTHdlTnNpMFFXc21DaU1VeTg4LXFOaWVXajlUWVVkay1HYm0zVHViNnVEZXI5RQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-111",
          "rank_by_count": 111,
          "name": "호르무즈 리스크에 유럽 가스값 다시 86유로…한국 LNG 조달도 ‘경고등’",
          "easy": "",
          "quote": "호르무즈 리스크에 유럽 가스값 다시 86유로…한국 LNG 조달도 ‘경고등’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 147,
              "title": "호르무즈 리스크에 유럽 가스값 다시 86유로…한국 LNG 조달도 ‘경고등’ - 에너지데일리",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTFA0Unp1SFpKeVFUdGZLekdwb2I0WDM3NTAwc2xxN21SajNNV0ZKd0pXVVMwRzQ0M3A4MVBrMWpXQ2pBNnUyUEFHZ0t4UVRXTmtiSmVEQ0IzQ3FaYk9taFJ1VjhUR2NrU3lXVXpjMmVwaXJSUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-112",
          "rank_by_count": 112,
          "name": "[특집 기획 | 국회 외교안보의 대전환 ③] 반도체·배터리·핵심 광물까지…국회 경제안보외교, 글로벌 공급망을 지킬 수 있나",
          "easy": "",
          "quote": "[특집 기획 | 국회 외교안보의 대전환 ③] 반도체·배터리·핵심 광물까지…국회 경제안보외교, 글로벌 공급망을 지킬 수 있나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 150,
              "title": "[특집 기획 | 국회 외교안보의 대전환 ③] 반도체·배터리·핵심 광물까지…국회 경제안보외교, 글로벌 공급망을 지킬 수 있나 - 르몽드디플로마티크",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1HeHVlNVc5amgxUWhKYlZQZFVSY1NtbEVaYnd6RGxVUjVJdmEtMnNXdlhSUFc2REhveTFHV29EbG54TVFFVzg0ZmJvUWwyZmJXQm4wWTFtV0p1N084X3FmUmNlb25TYUJ1R3fSAW5BVV95cUxQX2tRQW1NQ2IyWTJoSDFSZHIweUgzWmp1ZFNIMFJjZGFpRHdlUFVwaGFmb29BU01zZHFvSHVjU1dfUGt0Ql8zalpnUktueWx0SkpKay11ZFBKMF9WT2ItYjlrdmtNWE40Vk9hVW5uZw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-113",
          "rank_by_count": 113,
          "name": "트럼프·시진핑 브로맨스에도…미중 기술 패권다툼 점점 격화",
          "easy": "",
          "quote": "트럼프·시진핑 브로맨스에도…미중 기술 패권다툼 점점 격화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 151,
              "title": "트럼프·시진핑 브로맨스에도…미중 기술 패권다툼 점점 격화 - 연합뉴스",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE00dkpRZkVhTHJpQ3A5bFJuT3QwZ1ZGR01lOXJQVzYzX1Npc1RMaXBEQkhEcDNNRmdsNnZwcTNhTUhFMUlVOGw5LVFtd1VVeEthTlotVXZQcUZvZHp1TWVRRdIBYEFVX3lxTE00dkpRZkVhTHJpQ3A5bFJuT3QwZ1ZGR01lOXJQVzYzX1Npc1RMaXBEQkhEcDNNRmdsNnZwcTNhTUhFMUlVOGw5LVFtd1VVeEthTlotVXZQcUZvZHp1TWVRRQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-114",
          "rank_by_count": 114,
          "name": "초유의 '미·중·러 정상회담'…코스피엔 약일까, 독일까",
          "easy": "",
          "quote": "초유의 '미·중·러 정상회담'…코스피엔 약일까, 독일까",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 152,
              "title": "초유의 '미·중·러 정상회담'…코스피엔 약일까, 독일까 - 뉴시스",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTFA1WmUzbEs1Q3FkcjdzX2RZVUJ6RVlLd2ViMDZwTFBWR3V0b0tVM20zWHkwQy1EeFNaSXZUVWVfYUUtSXdoelVVTGliVEhmSm1mOWg1b3dDampiTDM1WkZlVEx3QmNXUnNTRlNYT1NvYXdXUHNidDM0N9IBeEFVX3lxTFA1WmUzbEs1Q3FkcjdzX2RZVUJ6RVlLd2ViMDZwTFBWR3V0b0tVM20zWHkwQy1EeFNaSXZUVWVfYUUtSXdoelVVTGliVEhmSm1mOWg1b3dDampiTDM1WkZlVEx3QmNXUnNTRlNYT1NvYXdXUHNidDM0Nw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-115",
          "rank_by_count": 115,
          "name": "시진핑, 미국과 정상회담 앞두고 ‘개방’ 강조…미 관세정책 겨냥",
          "easy": "",
          "quote": "시진핑, 미국과 정상회담 앞두고 ‘개방’ 강조…미 관세정책 겨냥",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 153,
              "title": "시진핑, 미국과 정상회담 앞두고 ‘개방’ 강조…미 관세정책 겨냥 - 아시아투데이",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9DTGNkdEVTZ2xqNzhCenN3bjNOQVBNMFp2SjRUdWJfaFd1TE1PMERrZGdzeEN2VHZtb2E3LVdZNEFLRTdQdURlN19IYTg4SVBhUHljcm9SMmE0TDZaUU1neFpZSlVwZHQ2QmJJcm13?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-116",
          "rank_by_count": 116,
          "name": "태국, 미국의 수입 관세 10% 인하 협상",
          "easy": "",
          "quote": "태국, 미국의 수입 관세 10% 인하 협상",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 154,
              "title": "태국, 미국의 수입 관세 10% 인하 협상 - IDNFinancials",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMi_gFBVV95cUxNTDNfSXRLODNGblhNWlYxSV90NFBlLWxOUGk0N0VCV0xlZlNtUlFMN250NDYyVE1NcjRVd0RGWHRIMWFfczVqeGZ4REI5LUFhSnNxa1FKM284MWtfeG9rYmNTWmcyWW9ubi1Ua3ZHLUxpdVYtczhSWU5IbG5TSW1GWV9tWkNZejZ4MHVOZ0c3bVlvWk9zRmtOUkY4dHV1NFJVWXlGUEJSRGlQWDk0NFNWTnY3SG91eG92bVhQd2taNEpiTklXeUhsUENKOXh3emVxNF8wSnZob1ZMR2pCTHJNSFNVa1p6RjNXdEE1Rm1zQVMwT1gzbUl3clh0YndLZw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-117",
          "rank_by_count": 117,
          "name": "APEC｜시진핑, 트럼프 공항 영접…파격 의전 뒤에 숨은 계산",
          "easy": "",
          "quote": "APEC｜시진핑, 트럼프 공항 영접…파격 의전 뒤에 숨은 계산",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 155,
              "title": "APEC｜시진핑, 트럼프 공항 영접…파격 의전 뒤에 숨은 계산 - OBC 뉴스",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE0wTXJIekpkMktjemZWTU9sVzVJTTRxSkJob3M3d2ZITmtMTGJOQmx6VlpDMTA0aFpxSVYxS1FhZmhfRWxaNWVRMjdyMDlHdXYteFdRVGNMcmZjRlQ3MVdOWVdnQ29EY0pVSHc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-118",
          "rank_by_count": 118,
          "name": "미국 중국 정상회담 또 '관세 휴전 연장'에 그치나, 트럼프 정치적 입지 약화는 변수",
          "easy": "",
          "quote": "미국 중국 정상회담 또 '관세 휴전 연장'에 그치나, 트럼프 정치적 입지 약화는 변수",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 156,
              "title": "미국 중국 정상회담 또 '관세 휴전 연장'에 그치나, 트럼프 정치적 입지 약화는 변수 - 비즈니스포스트",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE5WTl9VZUZydm02c2xRaVdhcUxxSkFyNFQtWE5Wa2Z0TC15cTVBaURQSHhDclFaQVVRbUg1cDk5T0RDcGJ4Y3NheHViVjBldUNWQlVla01rZTRaVmtXNFRWbGVQNzlRX1hnQmZ4Rm94QWNyY1E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-119",
          "rank_by_count": 119,
          "name": "[채권/외환] 연준 매파 발언에 미 2년물 금리 상승…달러 19개월래 최고",
          "easy": "",
          "quote": "[채권/외환] 연준 매파 발언에 미 2년물 금리 상승…달러 19개월래 최고",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 162,
              "title": "[채권/외환] 연준 매파 발언에 미 2년물 금리 상승…달러 19개월래 최고 - 뉴스핌",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE5rYk93TEFaSUpMbjhYUERwNVRKVlh6RWd1LTFrb3VVdnptNnNtak9MX3ludTBLYkVrTjVIamlSNG5hQXdWUGFrOUNlU2JIamxPZEl3eE1ZQ1VSVHBG?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-120",
          "rank_by_count": 120,
          "name": "[인터뷰] \"Q 늘면 최종금리 의미 없다\"…명목GDP 먼저 본 구루의 조언",
          "easy": "",
          "quote": "[인터뷰] \"Q 늘면 최종금리 의미 없다\"…명목GDP 먼저 본 구루의 조언",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 166,
              "title": "[인터뷰] \"Q 늘면 최종금리 의미 없다\"…명목GDP 먼저 본 구루의 조언 - KB Think",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE9OUW1IVEx4Y01BdklwalZwRnM3QkptYXFRVUhmUzVlN3kySlNPclMzaHNwSG9PUldxdVplZ2gwUUd0RXd5VjBVNkxBQWd6MWVjSlNaemhlUlpIQTU5TTRKZmNRaUwyb3UyNFBmR09ZZFkyQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-121",
          "rank_by_count": 121,
          "name": "[원리금 폭탄] ‘기준금리 인상 기조’ 변동형 주담대 금리 더 높아졌다... 차주들 ‘비명’",
          "easy": "",
          "quote": "[원리금 폭탄] ‘기준금리 인상 기조’ 변동형 주담대 금리 더 높아졌다... 차주들 ‘비명’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 167,
              "title": "[원리금 폭탄] ‘기준금리 인상 기조’ 변동형 주담대 금리 더 높아졌다... 차주들 ‘비명’ - 글로벌이코노믹",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMihAFBVV95cUxQaUtPZ3loWUg0dGR1WVh0RFdBOTBkMnBLTFEtaEFuMmhDWFdtVnVqajEwTGFnWEN2UkxCT01DQXNjM2NoT1RkSGZEaFluQmdsdzhtZTE2UjhteGlyVXUwNkl6dGVpQ2NsanVQaEtObl90Uk1XbVB2eEI2cHVjblZlWWFoZk4?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-122",
          "rank_by_count": 122,
          "name": "가계빚 2030조, 주담대 금리 14년래 최고…취약차주 내년 상반기 고비",
          "easy": "",
          "quote": "가계빚 2030조, 주담대 금리 14년래 최고…취약차주 내년 상반기 고비",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 168,
              "title": "가계빚 2030조, 주담대 금리 14년래 최고…취약차주 내년 상반기 고비 - 뉴스1",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE9xYTJseEVvQmtPUEJaaEVaZ1pMcjNUb0NIdVJDSERFUzd6UlJ3WjlDRnhyODZ2aUJVcUwyeHljRDZfUXE0ZnFRX0RSTWcwSmJkX0JpdQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-123",
          "rank_by_count": 123,
          "name": "원화 강세에도 금리 더 올리나…환율 안정 이후 한은 선택은",
          "easy": "",
          "quote": "원화 강세에도 금리 더 올리나…환율 안정 이후 한은 선택은",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 169,
              "title": "원화 강세에도 금리 더 올리나…환율 안정 이후 한은 선택은 - 연합인포맥스",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5lS0ZpVGhBRVVQbExtNm5IS3hkWF9JTnRWbWtBVUdUb1RMWl9RdnVuNnlpU2lZNHdBc3lPNFBCT3VZYTdyYllKMkkyQkpnMVpWb05JcmxqUHN3N05uczNZYmI1aXpoSkhDeHdUb3RUYmg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-124",
          "rank_by_count": 124,
          "name": "[유병규 칼럼] K자형 성장구조 속 금리인상의 명암",
          "easy": "",
          "quote": "[유병규 칼럼] K자형 성장구조 속 금리인상의 명암",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 170,
              "title": "[유병규 칼럼] K자형 성장구조 속 금리인상의 명암 - https://technovalue.com/",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE5IQllEbzNSdXplRXc2NHp2bW14eXJFaG9PdURXTEI2VFNrc0JFMXZ1a0cwUTNkMTljdG9ZMHlrYjc0amNSNDBEOWxQWVVyam5lcWs5bDQ4cw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-125",
          "rank_by_count": 125,
          "name": "한은, 11월 금리 올리고 추가 인상 시사할까…채권시장 ‘긴장’",
          "easy": "",
          "quote": "한은, 11월 금리 올리고 추가 인상 시사할까…채권시장 ‘긴장’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 171,
              "title": "한은, 11월 금리 올리고 추가 인상 시사할까…채권시장 ‘긴장’ - 조세일보",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE5pZGcxbmpBdDduc1REYUhQc2VPaWlaVTJLWUxnMVZzTVh3RGk2THV1MlhTb0NGaldyellsZUNyWFVlM2FuM29KZW9qSWFGRFBxTVlGbFRuYkEzMlVxcmM0?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-126",
          "rank_by_count": 126,
          "name": "한은, 이달 기준금리 또 올리나…美 연준도 인상 전망 '우세'",
          "easy": "",
          "quote": "한은, 이달 기준금리 또 올리나…美 연준도 인상 전망 '우세'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 172,
              "title": "한은, 이달 기준금리 또 올리나…美 연준도 인상 전망 '우세' - 더퍼블릭",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9QYWtQbTA0RktlRnQxblB5V3Y1UmZWcGFHYWVtc01EcjBGTWR3T3FJeEJOaDl5ZFpCTW1YRHFaWnhEWEpPOXI3YmptR0pmdVF5VGhYRXNXVU1GMTVVdTdPZ2JSUl83dVFDMTk5ZEE1MNIBb0FVX3lxTE9QYWtQbTA0RktlRnQxblB5V3Y1UmZWcGFHYWVtc01EcjBGTWR3T3FJeEJOaDl5ZFpCTW1YRHFaWnhEWEpPOXI3YmptR0pmdVF5VGhYRXNXVU1GMTVVdTdPZ2JSUl83dVFDMTk5ZEE1MA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-127",
          "rank_by_count": 127,
          "name": "“한국 경제 3.9% 성장한다는데”…금리는 더 오를 수 있다는 경고",
          "easy": "",
          "quote": "“한국 경제 3.9% 성장한다는데”…금리는 더 오를 수 있다는 경고",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 173,
              "title": "“한국 경제 3.9% 성장한다는데”…금리는 더 오를 수 있다는 경고 - 동아일보",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMidkFVX3lxTE9iZ0hUSk1DeU5VM1RQc1UzdnBuYzFuRC1rNkFyM0tPcE4xZzFubjEtNVN5enFHQUpadUtDMjduMjBicEYyN201VnFwZDBfN1RJaUI5YnJCM0xOdFA3WHNhcXhhMFNYSmpUZ2hoQXhiM21rUnhZekHSAWZBVV95cUxQbV8wbHVoaUNCdlFxemJHWkk4V01KWlRhREVOM3NLWXM3OER1OW5KZzRQNm95dnZTQ3dIbkRGU09qaEpzM2pXU1YtTGNDWGswZlF4LVNTXzJZeHdPOXRtQUhJZ0xKTUE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-128",
          "rank_by_count": 128,
          "name": "장원테크, 20년 마그네슘 기술로 휴머노이드 공략…2027년 양산 목표",
          "easy": "",
          "quote": "장원테크, 20년 마그네슘 기술로 휴머노이드 공략…2027년 양산 목표",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 182,
              "title": "장원테크, 20년 마그네슘 기술로 휴머노이드 공략…2027년 양산 목표 - 에너지경제신문",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE1VbnpTZkpDeGlpQXVYR1R2dEF5eTNQbzdaUERlMzFoaXJjWm82V2szTVpic2ZoVTZSYXJIM0FJSkFKWGtqaEFkd3RqR3dnR3BLV3QzU3pxM2VTTXpkNDFLZHNObw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-129",
          "rank_by_count": 129,
          "name": "美 파운데이션, 최대 90kg 운반 가능한 휴머노이드 '팬텀 MKII' 공개",
          "easy": "",
          "quote": "美 파운데이션, 최대 90kg 운반 가능한 휴머노이드 '팬텀 MKII' 공개",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 183,
              "title": "美 파운데이션, 최대 90kg 운반 가능한 휴머노이드 '팬텀 MKII' 공개 - 로봇신문",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5uN2p3YWs0MjVNSHdEWURCYkZGdXpDWGw5bTJOaXJOTmNCdHNRRUNzN2JETkhzZTBVdW13OWM0UXFYMVBjUnNrRnFYMXFmWjFPSkd5R2VueG83OGtEZTdiM29Wbmg5anA4RDZERA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-130",
          "rank_by_count": 130,
          "name": "국산 휴머노이드 키운다면서…대학 로봇 10대 중 9대 중국산",
          "easy": "",
          "quote": "국산 휴머노이드 키운다면서…대학 로봇 10대 중 9대 중국산",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 184,
              "title": "국산 휴머노이드 키운다면서…대학 로봇 10대 중 9대 중국산 - 파이낸셜뉴스",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5QQ3lBOTBtcW9lenRhZUxQdFRUX3B0YUNtX3lDSEVZY2Iwb2c3VmlfalFPTzJaZDVHamdKVFZpb2tkQUd6cmM4Wmp0NVk4SXRiUzVmSVJNdHVwUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-131",
          "rank_by_count": 131,
          "name": "한라캐스트, 휴머노이드 로봇 부품 양산 시작…내년 성장 본격화-IBK",
          "easy": "",
          "quote": "한라캐스트, 휴머노이드 로봇 부품 양산 시작…내년 성장 본격화-IBK",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 185,
              "title": "한라캐스트, 휴머노이드 로봇 부품 양산 시작…내년 성장 본격화-IBK - 이데일리",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMigAFBVV95cUxPVjFMbEtCbEhDQ09kNkZrTmlGYm55a2ctR2hzOEFuWE1CejByQlhsSHN1dzdVYU95RTlidEhpaFVISUZoczdzc1gyT09ENld4VXA3NVdvS1JwUjBCd3ZiVGVhZHFGQWFxR2N1VmtSWGNPTHRjSkUwcVpnTFhIWUFBTg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-132",
          "rank_by_count": 132,
          "name": "춤추는 휴머노이드 로봇…중국 선전서 열린 로봇 카니발",
          "easy": "",
          "quote": "춤추는 휴머노이드 로봇…중국 선전서 열린 로봇 카니발",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 186,
              "title": "춤추는 휴머노이드 로봇…중국 선전서 열린 로봇 카니발 - 연합뉴스",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE95Y0Vjc0Jpa2ZieWcwa3N5VTZlNzFqRjhvMW96UnpWR0JFVkRSa0xwYnB6bHo4cS13YnJyaXZxbEt0TVJaMnhiV29nUlJCQm1LX3d6N2FCb0pjNk0?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-133",
          "rank_by_count": 133,
          "name": "\"산업현장 로봇활용도 높은 韓 … 휴머노이드 시장도 선도할것\"",
          "easy": "",
          "quote": "\"산업현장 로봇활용도 높은 韓 … 휴머노이드 시장도 선도할것\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 187,
              "title": "\"산업현장 로봇활용도 높은 韓 … 휴머노이드 시장도 선도할것\" - 매일경제",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBMWUdpV1VHSjVPMTBvNFVKQnNxTGh1a1BLRnRfS3BZUV9GcEhMTkdmQWdhY0tkM1VlZm5XOWViT3J6MzhwQjBZSEF3XzZRRC1mMFE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-134",
          "rank_by_count": 134,
          "name": "보스턴다이나믹스 ‘아틀라스(휴머노이드 로봇)’ 반도체 공장서도 실증",
          "easy": "",
          "quote": "보스턴다이나믹스 ‘아틀라스(휴머노이드 로봇)’ 반도체 공장서도 실증",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 188,
              "title": "보스턴다이나믹스 ‘아틀라스(휴머노이드 로봇)’ 반도체 공장서도 실증 - 경상일보",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBSOW1LeEljN0pRa0x3US14a2gtTFljNXZPTGxRX01ZbWtURkJRZUZGVndGZWVsTTREZHAyaFRmNFB5LVJMZzFwQUJpMFJJeWdDVmpqT2FoWWFDSlZBaVZFSVVoZENYMnJpcXp6SQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-135",
          "rank_by_count": 135,
          "name": "[이 시각 세계] APEC 회의 손님맞이 나선 로봇들",
          "easy": "",
          "quote": "[이 시각 세계] APEC 회의 손님맞이 나선 로봇들",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 189,
              "title": "[이 시각 세계] APEC 회의 손님맞이 나선 로봇들 - MBC 뉴스",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiekFVX3lxTE5BVkJobWNXT0lyTzNRSE9FUlppTlVLZnlYOTdnb2lMbTBGQmFzSndhdUlxOFNUVmFaMEczMEx3RFpYTUNSMkVDZ0FpUVNHN0dNLTZXTzc0UHBiVWZuMndiUkUzSjZhR3Fuc1NYMVVRTDUzOXQxT2V6OGNn0gF6QVVfeXFMTi1fbzZ4RUZlX0lJRWRFdzBjN1ZvRmxjekJWZS1wZlR2bFhUd3hPem9mdG5ZZzgtRHpyaWNiZXVfQTJXOHpBZUFzMGNHdDAzNmR5QVV0Z0YtWkVNN2J4SUFSQ1F4cjNZSUs2VzRaaFJUZ044OXNIdk9nZ3c?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-136",
          "rank_by_count": 136,
          "name": "충주 천보신소재 394억 원 투자...이차전지 소재 생산능력 5배 확대",
          "easy": "",
          "quote": "충주 천보신소재 394억 원 투자...이차전지 소재 생산능력 5배 확대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 190,
              "title": "충주 천보신소재 394억 원 투자...이차전지 소재 생산능력 5배 확대 - 퍼블릭뉴스통신",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE9HTURtREh5d1lZQV9seFp3VVk0ei1ad3J3dW1DWmlON0dpUENYZXB3NlRmLVluSDc5dzBYMndacWVFcDJRTW03M1NiMHFfZlBEWndoeFRwb1huUENOeVpJNXZPMGx0MmV3UDZN?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-137",
          "rank_by_count": 137,
          "name": "[오늘의 증권가 콜]中 노선 호재 항공 '맑음'…이차전지·반도체 소재 ‘흐림’",
          "easy": "",
          "quote": "[오늘의 증권가 콜]中 노선 호재 항공 '맑음'…이차전지·반도체 소재 ‘흐림’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 192,
              "title": "[오늘의 증권가 콜]中 노선 호재 항공 '맑음'…이차전지·반도체 소재 ‘흐림’ - 한국경제",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE11Qllyd21oVkcySVhnc3NzdkJ6QkNXZUNZNHZWcHpLSHhSNU9MbVFOQWhYazlBRzllZko1UmoxSmJuMnQ3R3BYdWxaX1VqdXpDWVEzWXZUaG1Jdw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-138",
          "rank_by_count": 138,
          "name": "포스코그룹, '배터리 1위' 中 CATL에 리튬 공급",
          "easy": "",
          "quote": "포스코그룹, '배터리 1위' 中 CATL에 리튬 공급",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 197,
              "title": "포스코그룹, '배터리 1위' 中 CATL에 리튬 공급 - 지디넷코리아",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBMMzdFdUFfbFgxYl9Bc0t4ai1YeXBzZEhlRWJwQlNhTm9sMXAtTm1ZVk9VTXdjdE5YSkYwU1pwOEFURGltaXBrSmhDN2huUTk4MFgtYWp3?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-139",
          "rank_by_count": 139,
          "name": "中 희토류 리스크 재부상…K소재, 망간 양극재로 대응 나선다",
          "easy": "",
          "quote": "中 희토류 리스크 재부상…K소재, 망간 양극재로 대응 나선다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 198,
              "title": "中 희토류 리스크 재부상…K소재, 망간 양극재로 대응 나선다 - 디지털투데이",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTFA5RUozV2lzcHRNd0JjRW16ejZIX3gwbWlDNFA3aG13OW5pdkpBWFdZLVV1Q2ZBTmxvam4tV29icmNQTUxMdE9fUm5GeVJDc2ZvYklrZWlLM0hFSzRqa3hGdGY5X2pZV3V4VnFDMlBpTUptSWs?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-140",
          "rank_by_count": 140,
          "name": "트럼프-시진핑, 반도체·희토류 해법 나올까",
          "easy": "",
          "quote": "트럼프-시진핑, 반도체·희토류 해법 나올까",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 199,
              "title": "트럼프-시진핑, 반도체·희토류 해법 나올까 - 블루밍비트",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE04UGd1Q3I2bC1zMTVXMF9BMzZoLVRzUFQ2QmV5V2I1S3h6aGlpdGlzdDBvMGFHWVAxOGRVMnVmY3JERnpxWV9id2d1RGlCTTdL?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-141",
          "rank_by_count": 141,
          "name": "국민성장펀드 ‘핵심광물 1호’ 투자에 포스코인터내셔널 해외 희토류 사업 검토",
          "easy": "",
          "quote": "국민성장펀드 ‘핵심광물 1호’ 투자에 포스코인터내셔널 해외 희토류 사업 검토",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 201,
              "title": "국민성장펀드 ‘핵심광물 1호’ 투자에 포스코인터내셔널 해외 희토류 사업 검토 - 더퍼블릭",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5pXy1UcEpMb21PWGk1bHdueGFkQ2l2ZVc0bTRJcFAzNWtfRHREVi1ETTNxS3ZTakZZaU1zOERlZWxvWDBCLWEtYXdZWmNNX3Z1N09vcHJBSDV0VU1JZXl4T294MzBRaXFwMmg5QnZuVdIBb0FVX3lxTE5pXy1UcEpMb21PWGk1bHdueGFkQ2l2ZVc0bTRJcFAzNWtfRHREVi1ETTNxS3ZTakZZaU1zOERlZWxvWDBCLWEtYXdZWmNNX3Z1N09vcHJBSDV0VU1JZXl4T294MzBRaXFwMmg5QnZuVQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-142",
          "rank_by_count": 142,
          "name": "트럼프 \"희토류 열달 내 中 따라잡을 것…이란전 끝 가까워져\"",
          "easy": "",
          "quote": "트럼프 \"희토류 열달 내 中 따라잡을 것…이란전 끝 가까워져\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 203,
              "title": "트럼프 \"희토류 열달 내 中 따라잡을 것…이란전 끝 가까워져\" - 연합뉴스TV",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9zS0tuZ0Zwa2Y1LTFDVEhTNHpoQzNKczNNMzRjV1V5SEZockdmRDVjZzlrRVM2aDhqWGRGTWJLWGxTVF9ab1B1bERHWnpmRElVTG93OEZTWUhqS0VSeUNWTXVTek5kQzQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-143",
          "rank_by_count": 143,
          "name": "국방부 희토류 규정 2027년 1월 강화: 방산 계약업체 중국산 금지 - 뉴스 및 통계",
          "easy": "",
          "quote": "국방부 희토류 규정 2027년 1월 강화: 방산 계약업체 중국산 금지 - 뉴스 및 통계",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 204,
              "title": "국방부 희토류 규정 2027년 1월 강화: 방산 계약업체 중국산 금지 - 뉴스 및 통계 - IndexBox",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMilgFBVV95cUxOR29jY1dvZlpsc0NNOThEUjEyMUFBYWkwRDdncEhrQWxrS0l4dWNmcmFqVFJlM2VrM0xEaGhBNjJYVjlVcG9hbGh5bHVqdWxSTktieXk5T2dvSjRRdnFhWWdmX21KZ3BFZ20waUllck1XZzJYeW5ob3RJenFYUnZkMV9wdWl6SXJOT0hSUWVUV1dzc090Ymc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-144",
          "rank_by_count": 144,
          "name": "[미래포럼] “젠슨 황 사태후 ESG(환경·사회·지배구조)는 ESG(윤리·보안·지배구조)로 바뀌어야”… ‘촌철 발언’에 탄성",
          "easy": "",
          "quote": "[미래포럼] “젠슨 황 사태후 ESG(환경·사회·지배구조)는 ESG(윤리·보안·지배구조)로 바뀌어야”… ‘촌철 발언’에 탄성",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 211,
              "title": "[미래포럼] “젠슨 황 사태후 ESG(환경·사회·지배구조)는 ESG(윤리·보안·지배구조)로 바뀌어야”… ‘촌철 발언’에 탄성 - www.dt.co.kr",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1vYUktYl9vb1pIU0VDM0JSN2t4VVZWZlNwREZrNDdOM0tUMjZxNUVlVXZJX2pFS29idG1ndWd0Wm1GRG5zcC1qVkdMdzlvdw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-145",
          "rank_by_count": 145,
          "name": "플랑키안, 유럽혁신위원회서 1,000만 유로 지원 대상 선정…초전도 양자컴퓨터 상용화 추진",
          "easy": "",
          "quote": "플랑키안, 유럽혁신위원회서 1,000만 유로 지원 대상 선정…초전도 양자컴퓨터 상용화 추진",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 828,
              "title": "플랑키안, 유럽혁신위원회서 1,000만 유로 지원 대상 선정…초전도 양자컴퓨터 상용화 추진 - 양자신문",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5UZC0tR3FxNEMtNDFTMG1SSTRsSEJDcS1XQmNsdmZqLWF3eEhEVjY4X0F3ckM1QlpkTDMwRkRWSV9lNFlIZUk2d1Z1djFlWEFNV0VUT1RlZlFuRFFPVXVVdXNMTElEMFp5Ukt4UTRRRQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-146",
          "rank_by_count": 146,
          "name": "퍼듀대, 머신러닝으로 양자 칩 불안정성 20배 잡는다—광자 큐비트 대량 생산의 새 경로",
          "easy": "",
          "quote": "퍼듀대, 머신러닝으로 양자 칩 불안정성 20배 잡는다—광자 큐비트 대량 생산의 새 경로",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 830,
              "title": "퍼듀대, 머신러닝으로 양자 칩 불안정성 20배 잡는다—광자 큐비트 대량 생산의 새 경로 - 뉴스N연합",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMiSkFVX3lxTE1nLXVoQWFkaVRabGltX0tSNEZ2M2cyTjFsajdzRm5rR0hwQjE2TDNzRmdYM1JiWXJNYUJWYnd3WlEyRmg3d3JVOUdn?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-147",
          "rank_by_count": 147,
          "name": "엔솔바이오, 美 임상 재개·가속승인 추진…상장 채비",
          "easy": "",
          "quote": "엔솔바이오, 美 임상 재개·가속승인 추진…상장 채비",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 832,
              "title": "엔솔바이오, 美 임상 재개·가속승인 추진…상장 채비 - 비즈워치",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTFAxUGI3S1F0NHk4ai0zYkZwam9jMGx5NGowRzBtd1NNcjdKSDhRQnYwc1lETXYzaG1WekliYzhxcHJ3WnFieWltZ3ZMTHlRSDBNR3NpblRyQUE5YV9uV0tiOEk3cTBONzdNMnVuQ2hHcw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-148",
          "rank_by_count": 148,
          "name": "엔솔바이오, 코스닥 이전 상장 '정조준'···美 신약 임상·기술이전 승부수",
          "easy": "",
          "quote": "엔솔바이오, 코스닥 이전 상장 '정조준'···美 신약 임상·기술이전 승부수",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 833,
              "title": "엔솔바이오, 코스닥 이전 상장 '정조준'···美 신약 임상·기술이전 승부수 - 헬로디디",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1EWHRHbU8xcUVVWHN4NTBodDFpWlZRMHpkdWFMUEl2X0VINzF0NWdIMld3Sk5sbG5iZW5HcHJjU2dvTE9lUXB2V3R4VFhXQkl2VGFiOG5LdmFhZW5RZ1RqcGZlR0Vabjl2Y3c?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-149",
          "rank_by_count": 149,
          "name": "\"호주서 시작한 신약 임상시험, 미국 FDA까지 가려면\"",
          "easy": "",
          "quote": "\"호주서 시작한 신약 임상시험, 미국 FDA까지 가려면\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 834,
              "title": "\"호주서 시작한 신약 임상시험, 미국 FDA까지 가려면\" - 약업신문",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiekFVX3lxTFBsNDlzZ05LNnlEeV80N1AweHM3b2hKUzFZOWNlMUd0ZUo5WHllUW5PX01Hc0JKZDY5QzVSTHcxbEJ4SEpwTzJKSFNTdVNvLUdTeWFlck11TzQ5dW5iMHE5QmN4LUlvQ3BWb080V0FNd1kycjZwMFRiMkRR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-150",
          "rank_by_count": 150,
          "name": "롯데바이오로직스, 송도 1공장 준공…글로벌 CDMO 사업 시동 - 머니투데이",
          "easy": "",
          "quote": "롯데바이오로직스, 송도 1공장 준공…글로벌 CDMO 사업 시동 - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 837,
              "title": "롯데바이오로직스, 송도 1공장 준공…글로벌 CDMO 사업 시동 - 머니투데이 - 머니투데이",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1MVTg1eDMxVmptU2p1UUNFNUFvQjZkd2FNVWhNOV9sUVM2YjI4dm9LWTNwZ0dxY1BOdDhqSThYb1prd2E5OWpXYVVZQzFULTdJV3pJN0FweTFXSmtFNHBQZVIyWVlneUNPSzdKZDZJONIBb0FVX3lxTE1MVTg1eDMxVmptU2p1UUNFNUFvQjZkd2FNVWhNOV9sUVM2YjI4dm9LWTNwZ0dxY1BOdDhqSThYb1prd2E5OWpXYVVZQzFULTdJV3pJN0FweTFXSmtFNHBQZVIyWVlneUNPSzdKZDZJOA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-151",
          "rank_by_count": 151,
          "name": "‘AI를 아예 뇌에 심어버려?’ 통제불가…“시험의 시대 끝났다”",
          "easy": "",
          "quote": "‘AI를 아예 뇌에 심어버려?’ 통제불가…“시험의 시대 끝났다”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 839,
              "title": "‘AI를 아예 뇌에 심어버려?’ 통제불가…“시험의 시대 끝났다” - 헤럴드경제",
              "source_name": "'뇌과학 BCI 기술'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE96VjhSUFZHUVc5TmQ0bVRhSjBUdEJsbmZPaDJ3NWUxY1ZyOENlbGZ0bGM2dUp3ZTd4TW44RTZNc3l1VzJndEQ5cW52aVJNeTJRQzdtcmhn?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-152",
          "rank_by_count": 152,
          "name": "침습형 BCI의 상용화 장벽: 임상 증거·수술 인프라·적응증별 검증이 관건",
          "easy": "",
          "quote": "침습형 BCI의 상용화 장벽: 임상 증거·수술 인프라·적응증별 검증이 관건",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 840,
              "title": "침습형 BCI의 상용화 장벽: 임상 증거·수술 인프라·적응증별 검증이 관건 - 얼리어답터뉴스",
              "source_name": "'뇌과학 BCI 기술'",
              "link": "https://news.google.com/rss/articles/CBMiSkFVX3lxTE9BMGNMVGtuZ1F3MmlqUXNUNUhBY3A5ZVhLME1Db1dIZXpWV2Z6SlN6YnNaOVZkUVNTZU53ck10eW96MGVfeks2LXdR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-153",
          "rank_by_count": 153,
          "name": "[COP31] 정부, 'K-GX 세계 확산' 선언…2040 탈석탄 본격화",
          "easy": "",
          "quote": "[COP31] 정부, 'K-GX 세계 확산' 선언…2040 탈석탄 본격화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 841,
              "title": "[COP31] 정부, 'K-GX 세계 확산' 선언…2040 탈석탄 본격화 - 넷제로뉴스",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTFBfMUxKSnNXbFdZSXhSNjRHV2JYeElHd2pEaVpkS3lIMEJocjUwTDhxQ3F5T1EtbmpXb1M5UVE2Z3hpRE5KUTJjQmo2QTd3WkxrRFJPODM4MjRtd2RhaW9wQXgzdHY0LTVfa04w0gFuQVVfeXFMT2NUZVd4LTFnaXozeUxIbllSbE1fYjYtTGxnOUtIRlh3VElrTUtFb240NThuY21IOVh6cHFlUWJTVHBCdlRIUTVxVDJ5cW1qb2tZbUxIMDhRdUgzYUxTV2RkUFVvMWRkVXB4aExtR1E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-154",
          "rank_by_count": 154,
          "name": "[에너지이슈] ‘답정너’ 논란 딛고 닻 올린 12차 전기본 ‘원전 공론화’...3개월의 대장정, 무엇을 남기나",
          "easy": "",
          "quote": "[에너지이슈] ‘답정너’ 논란 딛고 닻 올린 12차 전기본 ‘원전 공론화’...3개월의 대장정, 무엇을 남기나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 842,
              "title": "[에너지이슈] ‘답정너’ 논란 딛고 닻 올린 12차 전기본 ‘원전 공론화’...3개월의 대장정, 무엇을 남기나 - 산경e뉴스",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1EWldMMFVxMWQxZzJyU2FkOGVIZnZ5cUNiU19xTUE3MHFxZWlDdTBoS0lmNkJWTEVNQzN5eExnRkVQUXhoX3RhN1JkR0N6UWp2bW12ME80OUNGNUJJaU9uMFhadGJNSU0?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-155",
          "rank_by_count": 155,
          "name": "AI 전력 80GW 수요…“2040 탈석탄, 재생·원전 믹스”",
          "easy": "",
          "quote": "AI 전력 80GW 수요…“2040 탈석탄, 재생·원전 믹스”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 844,
              "title": "AI 전력 80GW 수요…“2040 탈석탄, 재생·원전 믹스” - 파인드비",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE9oNW1IcFRsMlZULWtUajdLS2lOZnVCZDV2OTZ0OUhIQ3NUZmVVMnU1UzFKRV9ZTkVZQ3hleGN5bFFqb1JhWEdfbHhGdUxmRmRiUHBJbzJtZ2lCUm9TU1VTNFgzcGgzZ9IBakFVX3lxTE1ONEQ4akdORk9JNi0wTnJaMEExMXVTaUdZbWJOUFNleWprMVRFT0xYekxyZDVOZFBVem1jOHdHd2tNdThhdjlJZC1XUVZBN0pxVkliLS1hb2tNcGUzU29yYlJmbElWUlI4RGc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-156",
          "rank_by_count": 156,
          "name": "글로벌 LNG 공급 확대…2027년 에너지 시장 재편과 신사업 기회 모색",
          "easy": "",
          "quote": "글로벌 LNG 공급 확대…2027년 에너지 시장 재편과 신사업 기회 모색",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 845,
              "title": "글로벌 LNG 공급 확대…2027년 에너지 시장 재편과 신사업 기회 모색 - 뉴스아이이에스",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTFBYMTVKZ1JhbFljYWtaNWE4VDRydm14dFpaT2dGUjVQN0xIRUNnODdJaF9LMzA3Q2dlR3pnRTk5X1FJdGR3VkRoLVRMWUoxMU9kWFhXUnViRTRqM0lrVFdOYmNrcXJzTUVhTnpQck5uYkxLZ9IBckFVX3lxTFBYMTVKZ1JhbFljYWtaNWE4VDRydm14dFpaT2dGUjVQN0xIRUNnODdJaF9LMzA3Q2dlR3pnRTk5X1FJdGR3VkRoLVRMWUoxMU9kWFhXUnViRTRqM0lrVFdOYmNrcXJzTUVhTnpQck5uYkxLZw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        },
        {
          "id": "e261119-157",
          "rank_by_count": 157,
          "name": "한국미래기술교육연구원, LNG 시장 전망·인프라 신사업 세미나 개최",
          "easy": "",
          "quote": "한국미래기술교육연구원, LNG 시장 전망·인프라 신사업 세미나 개최",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 848,
              "title": "한국미래기술교육연구원, LNG 시장 전망·인프라 신사업 세미나 개최 - 비욘드포스트",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMifEFVX3lxTE4zdmM5c2F2Vl9CLXZFNEFwVXZOdnQ5NFk5X29Ua2Vmc01IYXllWFdNSWx3NmlUeElaMzA5UDJYTmJILVJiRF9QZDVyRThYallMa1ZTQ1dBSlJoeDJTX3ZzbVd4WWk5aTNVNmkxYmNXc0p1Ykp3NjBCSy04X3Q?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
        }
      ]
    },
    "ch5_papers": {
      "title": "챕터 5 · 논문",
      "addr": "처리-4",
      "kind": "papers",
      "day": "2026-11-18",
      "day_label": "11월 18일(어제)",
      "day_rel": "어제",
      "day_note": "11월 18일(어제) 논문이에요. 오늘 논문은 논문 풀이(새벽 바퀴 바로 뒤, 백업 12:07)가 끝나면 이 자리로 바뀌어요.",
      "made": "2026-11-18T11:04:47",
      "picks_max": 10,
      "status": "돎 — 2026-11-18 논문 풀이 150편 / 새 논문 248편",
      "headline": {
        "text": "11월 18일(어제) 새 논문 248편 · 풀이한 150편 중 전력망·계통 쪽이 33편으로 가장 많아요.",
        "text_orig": "오늘 새 논문 248편 · 풀이한 150편 중 전력망·계통 쪽이 33편으로 가장 많아요.",
        "n_new": {
          "val": 248,
          "source": "v2_secretary/결과/논문/2026-11-18_논문.json"
        },
        "n_done": {
          "val": 150,
          "source": "v2_secretary/결과/논문/2026-11-18_논문.json"
        },
        "n_done_new": {
          "val": 150,
          "source": "v2_secretary/결과/논문/2026-11-18_논문.json"
        },
        "n_done_backlog": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-18_논문.json"
        },
        "n_waiting": {
          "val": 98,
          "source": "v2_secretary/결과/논문/2026-11-18_논문.json"
        },
        "n_failed": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-18_논문.json"
        },
        "top_tag": "전력망·계통",
        "top_tag_n": {
          "val": 33,
          "source": "v2_secretary/결과/논문/2026-11-18_논문.json"
        }
      },
      "flow": {
        "text": "11월 18일에 풀이한 논문들 중에서는 전력망의 효율을 높이거나 로봇 제어 기술을 다룬 연구가 가장 눈에 띄게 많았습니다. 전력망 분야에서는 데이터 센터의 전압 강하에 대응하거나 전력망의 고장 복구력을 높이는 등 실질적인 운영 최적화에 집중한 모습인데요, 제어 분야에서는 신경망을 활용해 로봇의 안정성을 증명하거나 궤도 랑데부 효율을 높이는 방식이 주를 이뤘습니다. 이와는 조금 다르게 수학적 이론을 바탕으로 인공지능 모델의 정체성 유지 조건을 규명하거나 비선형 시스템을 학습하는 연구들도 함께 올라와 눈길을 끌었습니다.",
        "by": "ai",
        "flags": [
          "말투 딱딱함: 3문장 모두 '-습니다/입니다'로 끊기고 이어 주는 말 없음"
        ],
        "text_orig": "오늘 풀이한 논문들 중에서는 전력망의 효율을 높이거나 로봇 제어 기술을 다룬 연구가 가장 눈에 띄게 많았습니다. 전력망 분야에서는 데이터 센터의 전압 강하에 대응하거나 전력망의 고장 복구력을 높이는 등 실질적인 운영 최적화에 집중한 모습인데요, 제어 분야에서는 신경망을 활용해 로봇의 안정성을 증명하거나 궤도 랑데부 효율을 높이는 방식이 주를 이뤘습니다. 이와는 조금 다르게 수학적 이론을 바탕으로 인공지능 모델의 정체성 유지 조건을 규명하거나 비선형 시스템을 학습하는 연구들도 함께 올라와 눈길을 끌었습니다."
      },
      "map": [
        {
          "tag": "전력망·계통",
          "n": 33,
          "n_done": 33,
          "one_lines": [
            "인과 관계 분석을 활용해 전력망의 고장 복구력을 높이는 확장 계획법을 제안했어요.",
            "데이터 센터의 전압 강하 대응을 위해 배터리와 부하 조절 전략을 제안했어요.",
            "다중 속도 모델 예측 제어로 배전망 보조 서비스를 통합 조절했어요."
          ]
        },
        {
          "tag": "제어·로봇",
          "n": 32,
          "n_done": 32,
          "one_lines": [
            "위상 고정 루프를 이용해 자기 기계 공진기의 신호를 연속적으로 읽어냈어요.",
            "출력값에 따라 이득을 조절하는 국소적 동차 PID 제어 방식을 개발했어요.",
            "자연어 요구사항에서 제어기를 만들 때 위험을 통계적으로 제어하는 틀을 만들었어요."
          ]
        },
        {
          "tag": "AI 모델·학습법",
          "n": 30,
          "n_done": 30,
          "one_lines": [
            "6개의 오픈 소스 언어 모델을 개발하고 학습 효율과 속도를 개선했어요.",
            "논문 타당성 평가를 위한 AI 모델을 개발하고 성능을 검증했어요.",
            "잠재 피드백을 도입해 모델 학습의 연산과 데이터 효율을 높였습니다."
          ]
        },
        {
          "tag": "AI 에이전트·도구",
          "n": 27,
          "n_done": 27,
          "one_lines": [
            "과학적 추론과 도구 사용이 가능한 AI 모델을 개발하고 성능을 검증했어요.",
            "조직 환경에서 코딩 에이전트의 협업과 작업 수행 능력을 평가하는 벤치마크를 만들었어요.",
            "AI 에이전트의 행동 일관성을 측정하는 평가 체계를 개발했어요."
          ]
        },
        {
          "tag": "AI 안전·평가",
          "n": 8,
          "n_done": 8,
          "one_lines": [
            "도구 사용 AI 에이전트의 프롬프트 인젝션 방어를 위해 데이터 형식 기반의 결정론적 보안 체계를 구현했어요.",
            "언어 모델의 거절 사유가 실제 해결책이 되는지 평가하는 구제 타당성 개념을 제시했어요.",
            "과학 실험 에이전트의 판단력을 평가하는 벤치마크를 개발했어요."
          ]
        },
        {
          "tag": "수학·이론",
          "n": 6,
          "n_done": 6,
          "one_lines": [
            "네트워크상 행동 전파와 유지 조건을 수학적으로 분석했어요.",
            "시뮬레이션 기반의 범용 FIM 추정기를 활용해 양자화기 설계법을 제안했어요.",
            "리 대수 관점에서 쿱만 빌리니어 임베딩의 존재 조건을 분석했어요."
          ]
        },
        {
          "tag": "영상·음성·멀티모달",
          "n": 5,
          "n_done": 5,
          "one_lines": [
            "하르 변환을 이용해 인코더 없는 자기회귀 음성 합성 모델을 개발했어요.",
            "긴 영상 생성을 위해 학습과 추론을 통합한 MovieRoll 프레임워크를 제안했어요.",
            "음성 판단을 통합적으로 수행하는 마림바 모델을 개발했어요."
          ]
        },
        {
          "tag": "의료·바이오",
          "n": 5,
          "n_done": 5,
          "one_lines": [
            "의료 AI의 공평한 평가를 위한 벤치마크 체계를 구축하고 모델 성능을 분석했어요.",
            "거대 언어 모델이 단백질 구조를 직접 예측하도록 통합 모델을 설계했어요.",
            "다양한 방향의 뇌 MRI를 결합해 고해상도로 복원하는 기술을 개발했어요."
          ]
        },
        {
          "tag": "기타",
          "n": 2,
          "n_done": 2,
          "one_lines": [
            "시장 데이터에서 포트폴리오 배분까지 한 번에 처리하는 모델을 개발했어요.",
            "독일 공법 시험 데이터를 활용해 AI의 법률 검색 및 서술 능력을 평가했어요."
          ]
        },
        {
          "tag": "발전·재생에너지",
          "n": 1,
          "n_done": 1,
          "one_lines": [
            "전 세계 수소 실증 프로젝트 13개를 분석해 대규모 보급 경로를 제시했어요."
          ]
        },
        {
          "tag": "배터리·저장",
          "n": 1,
          "n_done": 1,
          "one_lines": [
            "하이브리드 구조를 활용해 배터리 수명 예측 모델을 개발했어요."
          ]
        }
      ],
      "picks": [
        {
          "canon_id": "2611.19667",
          "badge": "전공",
          "why": "전공(전력·제어) 중 키워드가 많이 걸림: power system, voltage, battery, data center"
        },
        {
          "canon_id": "2611.21072",
          "badge": "실무 인기",
          "why": "허깅페이스 추천 85"
        },
        {
          "canon_id": "2611.19116",
          "badge": "AI 교집합",
          "why": "인공지능 쪽인데 관심 키워드가 걸림: battery"
        },
        {
          "canon_id": "2611.21218",
          "badge": "교차 출현",
          "why": "여러 곳에 같이 올라옴: cs.AI + 허깅페이스"
        },
        {
          "canon_id": "2611.19428",
          "badge": "의외",
          "why": "오늘 풀이 중 드문 주제 '발전·재생에너지'(1편) — 키워드·추천수와 상관없이 고름"
        },
        {
          "canon_id": "2611.20292",
          "badge": "전공",
          "why": "전공(전력·제어) 중 키워드가 많이 걸림: inverter, voltage, grid-forming"
        },
        {
          "canon_id": "2611.19937",
          "badge": "실무 인기",
          "why": "허깅페이스 추천 67"
        },
        {
          "canon_id": "2611.19564",
          "badge": "AI 교집합",
          "why": "인공지능 쪽인데 관심 키워드가 걸림: battery"
        },
        {
          "canon_id": "2611.18981",
          "badge": "의외",
          "why": "오늘 풀이 중 드문 주제 '기타'(2편) — 키워드·추천수와 상관없이 고름"
        }
      ],
      "cards": [
        {
          "canon_id": "2611.20292",
          "title": "Causal Discovery for Resiliency-Prioritized Transmission Expansion Planning in Power Systems with Grid-Forming Inverter-Based Resources",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20292"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 10.0,
          "score_why": "전공 +3 · 키워드 3개(inverter, voltage, grid-forming) → +6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "inverter",
            "voltage",
            "grid-forming"
          ],
          "ai": {
            "easy1_title": "전력망이 고장 났을 때 왜 문제가 커지는지 알기 어려웠어요",
            "easy1_desc": "전력망을 운영하는 기관들은 재생에너지 기반의 인버터가 늘어난 환경에서 고장이 났을 때 어떻게 복구할지 고민이 많거든요. 기존의 방식은 고장 기준을 넘었는지 확인만 할 뿐, 어떤 동적 상태가 원인인지나 보호 조치가 연쇄 고장을 얼마나 막을 수 있는지는 알려주지 않았어요. 쉽게 말하면, 고장이 나면 왜 그런지 원인을 짚어내지 못하고 결과만 확인하는 수준이었다는 겁니다.",
            "easy2_title": "원인을 찾아내서 연쇄 고장을 막는 새로운 계획법을 만들었어요",
            "easy2_desc": "연구진은 인과 관계를 찾는 PCMCI 알고리즘과 모델 분석을 합쳐서 새로운 분석법을 제안했는데요, 고장 원인을 찾아내고 RCCI라는 지표를 써서 전력망 확장 계획을 세우는 방식이에요. 이 방법을 쓰면 고장 상황을 반복해서 확인하며 자동으로 보호 조치를 찾아내고 연쇄 고장을 막을 수 있거든요. 결과적으로 전력망이 고장에 얼마나 잘 견딜 수 있는지 더 구체적으로 계획할 수 있다는 장점이 있습니다.",
            "topic": "인버터 기반 자원이 지배적인 전력망에서 고장 복구 능력을 높이기 위한 인과 관계 기반의 전력망 확장 계획법을 다루고 있어요.",
            "one_line": "인과 관계 분석을 활용해 전력망의 고장 복구력을 높이는 확장 계획법을 제안했어요.",
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
          "canon_id": "2611.19667",
          "title": "Low-Voltage Ride-Through in AI Data Centers via Coordinated Battery and Computing Load Control",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19667"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 10.0,
          "score_why": "전공 +3 · 키워드 4개(power system, voltage, battery, data center) → +6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "power system",
            "voltage",
            "battery",
            "data center"
          ],
          "ai": {
            "easy1_title": "데이터 센터가 전압 떨어질 때 버티는 게 왜 중요한가요",
            "easy1_desc": "거대한 AI 데이터 센터가 전력망의 전압이 갑자기 떨어지는 상황에서도 멈추지 않고 버티는 능력은 전체 전력망의 안정성을 지키는 데 아주 중요하거든요. 전압이 낮아지면 정류기가 전류 제한에 걸리면서 전력망에서 가져오는 전력이 줄어드는데, 이때 직류 링크(DC-link)의 커패시터가 부족한 전력을 잠시 채워줄 수는 있지만 금방 한계에 다다르게 됩니다. 결국 전압이 너무 낮아지면 보호 장치가 작동해서 시스템이 꺼져버리는 문제가 생기는 겁니다.",
            "easy2_title": "배터리와 연산 부하를 함께 조절해서 해결했어요",
            "easy2_desc": "연구진은 무정전 전원 장치(UPS)의 배터리와 컴퓨팅 부하를 줄이는 방식을 서로 조율해서 부족한 전력을 메우는 제어 전략을 제안했는데요, 이렇게 하면 최소한의 비용으로 전압이 떨어져도 시스템이 계속 작동하게 만들 수 있다는 겁니다. 배터리만 쓰거나 부하를 줄이는 방식도 있지만, 둘을 함께 조율하는 방식이 가장 효과적이라는 결과가 나왔거든요. 쉽게 말하면, 전압이 거의 0에 가까운 심각한 상황에서도 이 조율 전략을 쓰면 데이터 센터가 멈추지 않고 버틸 수 있다는 말이에요.",
            "topic": "AI 데이터 센터가 전압 강하 상황에서도 안정적으로 운영될 수 있도록 배터리와 컴퓨팅 부하를 조율하는 제어 전략을 다루고 있어요.",
            "one_line": "데이터 센터의 전압 강하 대응을 위해 배터리와 부하 조절 전략을 제안했어요.",
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
          "canon_id": "2611.19397",
          "title": "Optimal Coordination of Multiple Ancillary Service Provisions in Active Distribution Networks",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19397"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 10.0,
          "score_why": "전공 +3 · 키워드 3개(voltage, frequency, electric vehicle) → +6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "voltage",
            "frequency",
            "electric vehicle"
          ],
          "ai": {
            "easy1_title": "여러 서비스를 한꺼번에 조절하기가 어려웠거든요",
            "easy1_desc": "배전망에서 주파수 제어와 전압 제어 같은 보조 서비스를 제공할 때, 각 서비스마다 필요한 반응 속도가 달라서 이를 동시에 최적으로 맞추기가 까다로웠다는 거예요. 특히 전기차나 건물처럼 시간에 따라 쓸 수 있는 에너지가 변하는 자원들을 다룰 때는 더 복잡해지는데요. 이런 자원들의 유연성을 제대로 활용하지 못하면 전체적인 전력망 운영 효율이 떨어질 수밖에 없다는 말이에요.",
            "easy2_title": "속도가 다른 서비스들을 한 번에 묶어서 해결했어요",
            "easy2_desc": "연구진은 다중 속도 모델 예측 제어(MPC)라는 방식을 써서 반응 속도가 제각각인 보조 서비스들을 통합적으로 조절하는 틀을 만들었는데요. 전기차나 건물 부하의 에너지 변화를 고려한 시간 가변적 전력-에너지 포락선을 수식에 넣어, 미래에 필요한 유연성까지 미리 계산에 반영했다는 겁니다. 이렇게 했더니 빠른 반응이 필요한 서비스와 느린 반응이 필요한 서비스를 하나의 시스템 안에서 조화롭게 운영할 수 있게 되었다는 거예요.",
            "topic": "배전망에서 서로 다른 반응 속도를 가진 보조 서비스들을 다중 속도 모델 예측 제어(MPC)로 통합 최적화하는 방법이에요.",
            "one_line": "다중 속도 모델 예측 제어로 배전망 보조 서비스를 통합 조절했어요.",
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
          "canon_id": "2611.21072",
          "title": "Sage S2.1 Flash Technical Report",
          "field": "cs.AI",
          "sources": [
            "cs.AI",
            "허깅페이스"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21072",
            "hf": "https://huggingface.co/papers/2611.21072"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 85,
          "score": 9.5,
          "score_why": "추천 85 → +8.5 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "과학적 증거를 다루고 직접 행동하는 똑똑한 모델을 만들었어요",
            "easy1_desc": "연구진은 3200억 개의 매개변수를 가진 Sage S1.5 Flash라는 모델을 새로 선보였는데요, 이 모델은 단순히 글만 읽는 게 아니라 분자 구조나 생물학적 서열 같은 과학 데이터를 이해하고 직접 도구를 써서 행동할 수 있게 설계됐거든요. 여러 모달리티(데이터 형태)를 하나의 공통된 공간으로 가져와서 텍스트나 이미지와 함께 처리하는 방식이에요. 쉽게 말하면 과학적 문제를 풀기 위해 특화된 인지 능력을 갖췄다는 말이에요.",
            "easy2_title": "실제 환경에서 도구를 써서 일을 끝내는지 확인해 봤어요",
            "easy2_desc": "모델이 실제로 일을 잘하는지 보려고 검색이나 코딩, 머신러닝 실험 같은 환경을 만들어서 직접 도구를 사용하게 시켜 봤는데요, 단순히 답만 내는 게 아니라 실행 결과나 환경의 변화를 확인해서 과제를 완수했는지 검증하는 과정을 거쳤거든요. 33개의 벤치마크에서 테스트한 결과, OfficeQA Pro나 MLE-bench Lite 같은 분야에서 1위를 차지하는 성과를 냈어요. 문서 기반의 증거를 활용하거나 검증 가능한 결과물을 만드는 데 특히 강점이 있다는 게 연구진의 주장이에요.",
            "topic": "과학적 증거 추론과 도구 사용 능력을 갖춘 Sage S1.5 Flash 모델의 구조와 성능 평가에 관한 연구예요.",
            "one_line": "과학적 추론과 도구 사용이 가능한 AI 모델을 개발하고 성능을 검증했어요.",
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
          "canon_id": "2611.21003",
          "title": "K2-Horizon: A Frontier Fleet of Open Source Language Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI",
            "허깅페이스"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21003",
            "hf": "https://huggingface.co/papers/2611.21003"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 72,
          "score": 8.2,
          "score_why": "추천 72 → +7.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "수학이나 코딩 같은 복잡한 일을 잘하는 오픈 소스 모델이 부족했어요",
            "easy1_desc": "연구진은 수학, 과학, 소프트웨어 공학 등 전문적인 분야에서 추론과 에이전트 업무를 수행할 수 있는 모델이 필요하다고 봤는데요. 그래서 0.9B부터 375B-A23B MoE(전문가 혼합 모델)까지 총 6개의 오픈 소스 언어 모델인 K2-Horizon을 만들었습니다. 기존의 강력한 오픈 모델들과 견주어도 뒤지지 않는 성능을 내는 데 집중했다는 게 핵심이에요.",
            "easy2_title": "새로운 학습 방식과 속도 개선 기술로 효율을 높였어요",
            "easy2_desc": "연구진은 추론 능력을 강화하기 위해 어텐션 값 투영에 MoE를 적용한 MoVA와 유연한 게이팅 방식인 softplus attention gating을 도입했는데요. 덕분에 36B-A4B 모델은 기존 32B 모델과 비슷한 성능을 내면서도 활성 파라미터는 7분의 1 수준으로 줄일 수 있었습니다. 또한 Uno라는 기술을 통해 별도의 초안 모델 없이도 디코딩 속도를 최대 2.2배까지 높였다는 점이 달라진 부분이에요.",
            "topic": "K2-Horizon은 투명한 개발 과정과 혁신적인 모델 구조를 갖춘 오픈 소스 언어 모델 군입니다.",
            "one_line": "6개의 오픈 소스 언어 모델을 개발하고 학습 효율과 속도를 개선했어요.",
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
              "7"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.20534",
          "title": "Social Welfare and Equilibrium in Distributed Microgrid Prosumer Coordination Under a Mixed Competitive-Cooperative Setting",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20534"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 8.0,
          "score_why": "전공 +3 · 키워드 2개(microgrid, electric vehicle) → +4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "microgrid",
            "electric vehicle"
          ],
          "ai": {
            "easy1_title": "마이크로그리드에서 가격만으로는 조율이 안 되는 문제가 있었어요",
            "easy1_desc": "배전망에서 에너지를 생산하고 소비하는 프로슈머들을 가격 기반으로 조율하려고 하면, 관리자가 전체 전력망의 목표를 추구할 때 문제가 생기거든요. 프로슈머들의 결정이 서로 얽히게 되는데, 기존의 이중 분해 방식으로는 라그랑주 승수가 분리되지 않아서 노드별 가격을 정의할 수 없다는 거예요. 쉽게 말하면, 전체 목표와 개별 프로슈머의 이익을 동시에 맞추기가 구조적으로 어려웠다는 말이에요.",
            "easy2_title": "가격에 목표를 녹여내서 전체 최적값과 균형점을 맞췄어요",
            "easy2_desc": "연구진은 경쟁적이면서도 협력적인 목표를 가격 안에 정확히 포함하는 새로운 방법을 개발했는데요, 가격을 에너지와 혼잡도, 그리고 전력망 목표라는 세 가지 요소로 나누어 계산하는 방식이에요. 이렇게 하면 사회적 후생의 최적값과 경쟁적 균형 사이의 간극을 메울 수 있게 된다는 겁니다. 결과적으로 전력망의 전체 목표를 달성하면서도 프로슈머들의 자율적인 조율이 가능해진 셈이에요.",
            "topic": "혼합된 경쟁-협력 환경에서 분산형 마이크로그리드 프로슈머 조율을 위한 사회적 후생과 균형에 관한 연구예요.",
            "one_line": "전력망 목표를 가격에 반영해 프로슈머 조율 최적화 알고리즘을 개발했어요.",
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
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.20116",
          "title": "Locational Marginal Pricing of Compute: Co-optimizing Compute and Energy for Transparent Data Center Flexibility",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20116"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 8.0,
          "score_why": "전공 +3 · 키워드 2개(power grid, data center) → +4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "power grid",
            "data center"
          ],
          "ai": {
            "easy1_title": "데이터 센터 전력 사용이 전력망에 부담을 주고 있어요",
            "easy1_desc": "데이터 센터와 인공지능(AI) 연산 수요가 빠르게 늘어나면서 전력망이 큰 압박을 받고 있는데요. 지금은 전력 부족 상황이 생기면 전력 회사나 운영자가 일방적으로 전력을 끊어 버리는 방식을 쓰고 있어요. 문제는 정작 전력을 쓰는 사용자는 자기 작업이 왜 중단되는지 알 길이 없다는 건데, 이게 전력망과 데이터 센터 사이의 소통이 제대로 안 되고 있다는 뜻이거든요.",
            "easy2_title": "연산 가격과 에너지 가격을 묶어서 전력망 부담을 줄여 봤어요",
            "easy2_desc": "연구진은 연산(compute) 비용과 에너지 비용을 하나의 최적화 문제로 묶어서 계산하는 방식을 제안했는데요. 이렇게 하면 전력망이나 하드웨어 중 어디에서 문제가 생겨 가격이 오르는지 사용자가 실시간으로 알 수 있게 돼요. 결과적으로는 전력망과 연산 자원 모두의 부담을 덜어주는 신호를 사용자에게 보내게 되는 셈인데, 에너지 시장과 연산 시장을 하나로 연결했다는 게 핵심이에요.",
            "topic": "데이터 센터의 유연성을 높이기 위해 연산 가격과 에너지 가격을 통합하여 최적화하는 방안을 다루고 있어요.",
            "one_line": "연산과 에너지 가격을 통합 최적화하여 데이터 센터의 전력 유연성을 높였어요.",
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
          "canon_id": "2611.19046",
          "title": "Model-Free UPS Control Tuning for Improved Low-Voltage Ride-Through in AI Data Centers",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19046"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 8.0,
          "score_why": "전공 +3 · 키워드 2개(voltage, data center) → +4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "voltage",
            "data center"
          ],
          "ai": {
            "easy1_title": "전압이 떨어지면 데이터센터 전원이 꺼지는 문제가 있었어요",
            "easy1_desc": "AI 데이터센터는 전력망에서 전기를 끌어다 쓰는데, 전압이 갑자기 낮아지는 전압 강하 현상이 생기면 무정전 전원 장치(UPS)가 보호 동작을 하면서 전력 공급이 끊기곤 했거든요. 이게 왜 문제냐면 데이터센터가 멈추면 운영에 큰 차질이 생기기 때문이에요. 연구진은 기존 UPS의 변환기 제어 설정을 바꿔서 전압이 낮아져도 버티는 능력인 저전압 통과(LVRT) 성능을 높여보기로 한 겁니다.",
            "easy2_title": "제어 설정을 최적화해서 전압 강하를 더 잘 견디게 만들었어요",
            "easy2_desc": "연구진은 전압 강하 상황에서 버티는 시간을 최대화하는 최적화 문제를 만들고, 이를 풀기 위해 BPZO-Adam이라는 새로운 알고리즘을 개발했는데요. 이 방식은 내부 구조를 모르는 블랙박스 모델에서도 시뮬레이션만으로 제어 설정을 찾을 수 있다는 장점이 있어요. 실제로 TAMU-ERCOT 모델로 실험해 보니 전압을 견디는 영역이 10.6% 늘어났고, DC 링크 커패시턴스를 10배 키우는 것보다 더 나은 성능을 보였다고 주장했어요.",
            "topic": "AI 데이터센터의 무정전 전원 장치(UPS) 제어 설정을 최적화하여 저전압 통과(LVRT) 성능을 개선하는 연구예요.",
            "one_line": "UPS 제어 설정을 최적화해 데이터센터의 저전압 통과 성능을 높였어요.",
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
            "evidence_by_symbols": 1,
            "bad_numbers": [
              "10"
            ],
            "format": [],
            "flags": [],
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.18986",
          "title": "AGI: Agility Index for Power Systems Dynamic Performance, Inspired by Reynolds Number",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18986"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 8.0,
          "score_why": "전공 +3 · 키워드 2개(power system, inverter) → +4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "power system",
            "inverter"
          ],
          "ai": {
            "easy1_title": "기존의 전력망 평가 방식으로는 요즘의 변화를 다 담지 못해요",
            "easy1_desc": "전력망의 성능을 재는 지표는 이미 여러 가지가 있는데요, 최근 태양광이나 풍력 같은 인버터 기반 자원이 늘어나면서 기존 방식만으로는 한계가 생겼거든요. 특히 전력망이 흔들릴 때 이를 얼마나 빨리 잠재우는지 보여주는 감쇠 특성을 제대로 파악하기가 어려워졌다는 말이에요. 쉽게 말하면, 전력망의 구성이 바뀌었는데 낡은 자로 재고 있는 셈이라는 겁니다.",
            "easy2_title": "유체역학 원리를 빌려 전력망의 민첩성을 측정하는 지표를 만들었어요",
            "easy2_desc": "그래서 연구진은 유체역학의 레이놀즈 수에서 아이디어를 얻어 전력망의 민첩성을 나타내는 AGI(Agility Index)라는 새로운 지표를 제안했는데요, 이건 전력망의 관성과 감쇠 비율을 하나로 묶어서 보여주는 방식이에요. 관성이 줄어드는 요즘 전력망에서 관성과 감쇠를 동시에 살피는 게 중요해졌거든요. 이 지표를 쓰면 전력망이 얼마나 민첩하게 움직이는지 더 정확하게 볼 수 있다는 겁니다.",
            "topic": "인버터 기반 자원이 늘어나는 현대 전력망의 동적 성능을 평가하기 위해 관성과 감쇠의 비율을 활용한 새로운 민첩성 지표인 AGI를 제안했어요.",
            "one_line": "유체역학 원리를 활용해 전력망의 민첩성을 평가하는 AGI 지표를 제안했어요.",
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
          "canon_id": "2611.19937",
          "title": "AllocFlow: End-to-End Portfolio Trading Action Generation from Raw Market Data",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.19937",
            "arxiv": "https://arxiv.org/abs/2611.19937"
          },
          "published": "2026-11-15",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 67,
          "score": 7.7,
          "score_why": "추천 67 → +6.7 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시장 신호와 투자 결정을 따로따로 처리하는 게 문제였어요",
            "easy1_desc": "실제 자산 운용에서는 시장의 복잡한 데이터를 보고 여러 자산에 돈을 어떻게 나눌지 결정해야 하는데요, 기존 방식은 신호를 예측하는 단계와 실제 자산을 배분하는 단계를 따로 떼어 놓고 처리하는 경우가 많았어요. 이러다 보니 예측 모델이 배분 목적과 딱 맞지 않게 돌아가는 문제가 생기곤 했거든요. 쉽게 말하면, 시장을 읽는 눈과 실제 돈을 굴리는 손발이 따로 노는 셈이에요.",
            "easy2_title": "데이터에서 바로 투자 결정을 내리는 통합 모델을 만들었어요",
            "easy2_desc": "그래서 연구진은 시장 데이터에서 바로 포트폴리오 배분까지 한 번에 이어지는 AllocFlow라는 모델을 제안했는데요, 여러 자산 사이의 관계를 파악하는 트랜스포머 기술을 써서 자산별 비중을 동시에 결정하도록 만들었어요. 처음부터 배분 전략을 배우는 건 불안정할 수 있어서, 먼저 전략을 따라 배우게 한 뒤 강화학습으로 수익률을 높이는 2단계 학습 방식을 썼거든요. 그 결과 암호화폐 선물 시장에서 연간 순수익률이 27.79%에서 51.38%로 크게 올랐고, 위험 대비 수익을 나타내는 칼마 지수도 0.955에서 4.043까지 개선됐다고 주장했어요.",
            "topic": "시장 데이터를 직접 입력받아 자산 배분 결정을 생성하는 엔드투엔드 포트폴리오 관리 프레임워크인 AllocFlow를 제안했어요.",
            "one_line": "시장 데이터에서 포트폴리오 배분까지 한 번에 처리하는 모델을 개발했어요.",
            "topic_tag": "기타",
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
            "tag": "기타",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.21218",
          "title": "InclusionMed: Benchmarking AI for Inclusive Healthcare",
          "field": "cs.AI",
          "sources": [
            "cs.AI",
            "허깅페이스"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21218",
            "hf": "https://huggingface.co/papers/2611.21218"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 62,
          "score": 7.2,
          "score_why": "추천 62 → +6.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "의료 AI가 얼마나 공평한지 따져볼 기준이 부족했어요",
            "easy1_desc": "의료 AI를 제대로 쓰려면 다양한 역할과 상황에서 얼마나 잘 작동하는지 평가해야 하는데요, 지금까지는 이런 기준이 한쪽으로 치우쳐 있었다는 거예요. 연구진은 그래서 의료 AI의 공평성을 평가하기 위한 프로젝트인 인클루전메드(InclusionMed)를 시작했습니다. 쉽게 말하면, 의료 AI가 누구에게나 공평하게 쓰일 수 있는지 확인하는 시험대를 만든 셈이에요.",
            "easy2_title": "다양한 평가 기준을 만들어 AI 모델들의 실력을 비교해 봤어요",
            "easy2_desc": "연구진은 388개의 후보 중 4개를 골라내고 자체적으로 만든 진단 추론 평가까지 더해 총 5개의 기준으로 AI 모델들을 시험해 봤는데요, 그 결과 모델마다 역할이나 능력에 따라 순위가 달라진다는 점을 확인했습니다. 특히 상위 10개 모델은 임상 결정보다 환자와 소통하는 능력에서 더 높은 점수를 받았거든요. 결국 AI를 고를 때 상황에 맞는 선택이 필요하다는 사실을 보여준 겁니다.",
            "topic": "의료 AI의 공평성을 평가하기 위해 다양한 역할과 능력을 포괄하는 새로운 벤치마크 체계인 인클루전메드(InclusionMed)를 제안하고 이를 통해 기존 AI 모델들의 성능을 분석했습니다.",
            "one_line": "의료 AI의 공평한 평가를 위한 벤치마크 체계를 구축하고 모델 성능을 분석했어요.",
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
          "canon_id": "2611.07222",
          "title": "SPILLWAY: Separating Target Admission from Sanitization to Defend Tool-Using Agents against Prompt Injection",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.07222",
            "arxiv": "https://arxiv.org/abs/2611.07222"
          },
          "published": "2026-11-04",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 56,
          "score": 6.6,
          "score_why": "추천 56 → +5.6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 에이전트가 공격자의 명령에 속아 돈을 보내는 문제",
            "easy1_desc": "요즘 AI 에이전트는 이메일이나 결제 같은 중요한 일을 직접 처리하는데요, 웹페이지나 공유 문서에 숨겨진 악성 명령을 읽으면 공격자에게 돈을 보내거나 정보를 빼돌릴 위험이 있거든요. 기존 방어법들은 매번 언어 모델을 다시 돌려 판단하게 하거나 복잡한 계획 과정을 거쳐야 해서 속도가 느려지거나 비용이 커지는 단점이 있었어요. 쉽게 말하면, 보안을 챙기려다 AI의 성능과 효율이 떨어지는 상황인 겁니다.",
            "easy2_title": "명령과 데이터를 분리해 안전하게 차단하는 SPILLWAY 개발",
            "easy2_desc": "연구진은 도구에서 나오는 정보의 형식을 활용해 SPILLWAY라는 방어 체계를 만들었는데요, 이메일 발신자 같은 정보는 정해진 형식으로 들어오지만 공격자의 명령은 자유로운 텍스트로 들어온다는 점을 이용한 거예요. 덕분에 매번 모델을 다시 돌릴 필요 없이 정해진 규칙으로 안전하게 차단할 수 있게 됐거든요. 실제로 테스트해 보니 공격 성공률을 0.007 수준으로 낮추면서도 AI의 유용성은 그대로 유지했다고 주장했어요.",
            "topic": "AI 에이전트가 도구를 사용할 때 발생하는 프롬프트 인젝션 공격을 효과적으로 방어하는 결정론적 보안 체계인 SPILLWAY를 제안했어요.",
            "one_line": "도구 사용 AI 에이전트의 프롬프트 인젝션 방어를 위해 데이터 형식 기반의 결정론적 보안 체계를 구현했어요.",
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
              "0.007"
            ],
            "format": [
              "one_line 60자"
            ],
            "flags": [],
            "tag": "AI 안전·평가",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.21513",
          "title": "A Scalable Decentralized Event-Triggered Topology-Switching Protocol for Verifiable Safety in Multi-Agent Systems",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21513"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(frequency) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "frequency"
          ],
          "ai": {
            "easy1_title": "통신 연결을 끊어도 안전을 지키는 방법이 필요했어요",
            "easy1_desc": "여러 대의 에이전트가 움직이는 시스템에서는 통신을 계속 유지하는 게 부담이 될 때가 많은데요, 연구진은 에이전트가 네트워크에서 잠시 떨어져 있어도 안전하게 상태를 유지할 수 있는 프로토콜을 개발했어요. 뭔 소리냐면, 통신을 계속 붙잡고 있지 않아도 시스템이 안전한 범위를 벗어나지 않도록 설계했다는 말이에요. 무한히 빠르게 통신이 발생하는 제노(Zeno) 현상도 일어나지 않게 막았거든요.",
            "easy2_title": "계산 복잡도를 줄여서 더 많은 에이전트도 다룰 수 있어요",
            "easy2_desc": "기존에는 에이전트가 늘어날수록 계산량이 기하급수적으로 늘어나는 문제가 있었는데, 이번에 만든 방식은 에이전트가 스스로 연결 여부를 판단하는 인증서를 활용해요. 덕분에 계산 복잡도가 기존의 O(2^N)에서 O(N) 수준으로 크게 줄어들어서 확장성이 좋아졌거든요. 실제로 마이크로그리드 4곳에서 실험해 봤더니, 통신 연결 시간을 줄이면서도 전압과 주파수를 안전하게 유지할 수 있었다는 결과가 나왔어요.",
            "topic": "다중 에이전트 시스템에서 통신 연결을 효율적으로 제어하여 안전성을 보장하는 분산 프로토콜을 제안했어요.",
            "one_line": "통신 연결을 스스로 제어해 안전성을 높이는 분산 프로토콜을 개발했어요.",
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
          "canon_id": "2611.21346",
          "title": "Harmonic-Constrained Hosting Capacity of Active Distribution Networks Using ESS Compensation and Certified Adaptive Decision-Tree Envelopes",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21346"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(renewable) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "renewable"
          ],
          "ai": {
            "easy1_title": "재생에너지 늘리고 싶은데 고조파 때문에 한계가 있었어요",
            "easy1_desc": "요즘 전력망은 태양광 같은 재생에너지를 많이 연결하려고 인버터 기반 자원을 쓰고 있는데요, 문제는 전력 품질을 떨어뜨리는 고조파라는 성분이 생겨서 연결할 수 있는 발전 용량이 제한된다는 거예요. 뭔 소리냐면, 전기를 많이 보내고 싶어도 고조파 기준치를 넘기면 더 이상 연결을 못 한다는 말이에요. 그래서 발전 용량을 늘리는 데 큰 걸림돌이 되고 있다는 겁니다.",
            "easy2_title": "에너지 저장 장치를 활용해서 고조파를 잡고 용량을 되찾았어요",
            "easy2_desc": "연구진은 에너지 저장 장치(ESS)를 활용해 고조파를 보상하고 전력 흐름을 최적화하는 새로운 방법을 제안했는데요, ESS가 충전과 방전을 조절하면서 동시에 고조파 전류까지 상쇄하도록 만든 거예요. 이렇게 했더니 기존 방식으로는 고조파 제한 때문에 56.892 MW까지만 가능했던 용량이, 제안한 방식으로는 65.572 MW까지 온전히 확보되는 결과가 나왔거든요. 쉽게 말하면, ESS를 똑똑하게 써서 고조파 문제를 해결하고 발전 용량을 최대로 끌어올린 셈이에요.",
            "topic": "에너지 저장 장치의 고조파 보상 기능을 활용하여 배전망의 재생에너지 수용 용량을 극대화하는 최적화 기법에 관한 연구예요.",
            "one_line": "ESS를 활용한 고조파 보상으로 배전망의 재생에너지 수용 용량을 늘렸어요.",
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
          "canon_id": "2611.21313",
          "title": "Robust Optimal Network Reduction for Distribution Systems",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21313"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(voltage) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "voltage"
          ],
          "ai": {
            "easy1_title": "큰 전력망을 줄여서 계산할 때 정확도가 떨어지는 게 문제였어요",
            "easy1_desc": "전력망을 분석할 때 계산 속도를 높이려고 큰 네트워크를 작은 모델로 바꾸는 방법을 쓰는데요, 기존의 Opti-KRON 방식은 정해진 상황에서는 잘 작동하지만 예상치 못한 전력 주입이 들어오면 정확도가 떨어진다는 단점이 있었거든요. 뭔 소리냐면, 상황이 조금만 바뀌어도 원래의 큰 망과 결과값이 달라질 수 있다는 말이에요. 그래서 연구진은 불확실한 상황에서도 믿을 수 있는 모델을 만들기로 한 겁니다.",
            "easy2_title": "불확실성을 고려해서 더 튼튼한 모델로 개선했어요",
            "easy2_desc": "연구진은 불확실한 전력 주입 상황을 견딜 수 있도록 기존 방식을 확장했는데요, 전압 오차를 보장하는 수학적 기법을 도입해서 모델의 신뢰도를 높인 겁니다. 계산 효율을 높이려고 불필요한 변수를 미리 제거하는 과정을 넣고, 최악의 상황을 반복해서 추가하는 방식으로 메모리 사용량도 줄였거든요. 실제로 8,387개 노드를 가진 실제 전력망에 적용해 보니 노드 절반 가까이를 줄이면서도 메모리는 18배 넘게 아낄 수 있었다고 해요.",
            "topic": "불확실한 전력 주입 상황에서도 전압 오차를 보장하며 전력망을 효율적으로 축소하는 강건한 최적화 기법에 관한 연구예요.",
            "one_line": "불확실성을 고려한 강건한 전력망 축소 기법을 개발했어요.",
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
          "canon_id": "2611.21257",
          "title": "Continuous Phase-Coherent Readout of a Magneto-Mechanical Resonator Using a Phase-Locked Loop",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21257"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(frequency) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "frequency"
          ],
          "ai": {
            "easy1_title": "기존 방식은 센서 신호를 읽는 속도와 정확도에 한계가 있었어요",
            "easy1_desc": "자기 기계 공진기(Magneto-mechanical resonator)는 측정값을 고유 주파수로 바꿔서 알려주는 무선 센서인데요, 지금까지는 센서를 흔들었다가 멈추는 과정을 반복하며 주파수를 읽어내는 방식을 써 왔거든요. 그런데 이 방식은 센서가 멈출 때까지 기다려야 해서 신호를 읽는 속도와 정확도를 높이는 데 한계가 있다는 문제가 있었던 겁니다. 쉽게 말하면, 센서가 멈추길 기다리는 시간 때문에 실시간으로 정밀하게 측정하기가 어려웠다는 말이에요.",
            "easy2_title": "위상 고정 루프를 써서 신호를 끊김 없이 읽어내는 방식을 개발했어요",
            "easy2_desc": "그래서 연구진은 위상 고정 루프(Phase-locked loop)를 활용해 신호를 끊김 없이 연속적으로 읽어내는 새로운 방식을 제안했는데요, 이렇게 했더니 기존 방식보다 훨씬 더 정밀하게 주파수를 측정할 수 있게 된 겁니다. 실제로 실험해 봤더니 기존 방식보다 4배 정도 더 나은 성능을 보였거든요. 덕분에 넓은 대역폭에서도 정밀도를 유지할 수 있다는 장점이 생겼다는 겁니다.",
            "topic": "자기 기계 공진기의 주파수 측정 성능을 높이기 위해 위상 고정 루프를 기반으로 한 연속적이고 위상이 일치하는 판독 방식을 제안했어요.",
            "one_line": "위상 고정 루프를 이용해 자기 기계 공진기의 신호를 연속적으로 읽어냈어요.",
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
            "bad_numbers": [
              "30"
            ],
            "format": [],
            "flags": [],
            "tag": "제어·로봇",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.21144",
          "title": "A Hybrid Systems Approach to Parameterizing the PERC1 Model for Data Centers Using Synchrophasor Measurements",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21144"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(voltage) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "voltage"
          ],
          "ai": {
            "easy1_title": "데이터 센터의 전력 차단과 복구 과정을 수학적으로 모델링해 봤어요",
            "easy1_desc": "데이터 센터 같은 대규모 전력 부하는 전압이 떨어지면 전력을 끊었다가 다시 연결하는 과정을 거치는데요, 이 동작은 전압 기준값과 타이머에 따라 결정되는 하이브리드 동적 시스템이라고 볼 수 있습니다. 연구진은 이 복잡한 동작을 하이브리드 오토마타라는 수학적 구조로 정의해 봤는데요, 전력망의 이상 신호를 기록한 싱크로페이저 데이터를 활용해 모델의 매개변수를 찾아내려는 시도예요. 쉽게 말하면, 데이터 센터가 전력을 어떻게 껐다 켜는지 그 규칙을 수학적으로 풀어내려 한 겁니다.",
            "easy2_title": "데이터를 분석해서 전력 부하 모델의 매개변수를 정확히 찾아냈어요",
            "easy2_desc": "연구진은 네 단계로 구성된 식별 절차를 제안했는데, 모드 순서를 파악하고 이벤트 시간 제약을 통해 논리 매개변수를 추정한 뒤 하이브리드 궤적 민감도와 점프 행렬을 사용해 가우스-뉴턴 방식으로 정교하게 다듬었습니다. 분석 결과, 전압 강하가 두 번 발생해야만 지연 시간과 같은 매개변수를 명확히 구분할 수 있다는 점을 밝혀냈는데요, 이는 단순히 한 번의 사건만으로는 모든 변수를 알기 어렵다는 한계가 있다는 뜻이에요. 결과적으로 합성 데이터를 사용한 사례 연구를 통해 전력 차단과 복구 역학을 성공적으로 복원해 냈다는 점이 핵심입니다.",
            "topic": "싱크로페이저 측정값을 활용하여 데이터 센터의 PERC1 부하 모델 매개변수를 식별하는 하이브리드 시스템 접근법에 관한 연구예요.",
            "one_line": "싱크로페이저 데이터를 이용해 데이터 센터의 전력 부하 모델 매개변수를 식별했어요.",
            "topic_tag": "전력망·계통",
            "limit": "전압 강하가 한 번만 발생하는 상황에서는 지연 시간 매개변수를 개별적으로 구분할 수 없다는 한계가 있습니다."
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
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.21017",
          "title": "Locally homogeneous PID gain-scheduling for motion control systems",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21017"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(frequency) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "frequency"
          ],
          "ai": {
            "easy1_title": "기존의 PID 제어기로는 정밀한 조절에 한계가 있었어요",
            "easy1_desc": "기존의 선형 PID 제어기는 고정된 이득을 사용하기 때문에, 정밀한 동작 제어가 필요한 상황에서는 성능을 높이는 데 한계가 있었거든요. 연구진은 이 문제를 해결하기 위해 기존 PID의 이득을 유지하면서도 제어 성능을 개선할 방법을 고민했는데요. 쉽게 말하면, 기존 방식의 틀은 그대로 두되 상황에 맞춰 유연하게 조절할 수 있는 새로운 알고리즘이 필요했다는 겁니다.",
            "easy2_title": "출력값에 따라 이득을 조절해 제어 성능을 높였어요",
            "easy2_desc": "연구진은 출력값과 그 미분값에 따라 이득을 실시간으로 조정하는 국소적 동차(locally homogeneous) PID 제어 방식을 개발했는데요. 이 방식은 기존 선형 PID의 이득을 공유하면서도 동차 정도를 조절해 더 나은 제어 품질을 얻을 수 있게 해 줍니다. 만약 동차 정도를 0으로 설정하면 기존의 선형 PID 제어기로 돌아가는 구조라 호환성도 갖췄다는 말이에요. 실험을 통해 표준 PID 제어보다 더 나은 성능을 보여줬다는 점이 핵심입니다.",
            "topic": "선형 PID 제어기를 국소적 동차 PID 제어기로 업그레이드하여 모션 제어 시스템의 성능을 개선하는 방법을 다루고 있어요.",
            "one_line": "출력값에 따라 이득을 조절하는 국소적 동차 PID 제어 방식을 개발했어요.",
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
          "canon_id": "2611.20985",
          "title": "A Rollout-Based Approach to Real-Time Topology and Dispatch Control in the AI4RealNet L2RPN Benchmark",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20985"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(renewable) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "renewable"
          ],
          "ai": {
            "easy1_title": "전력망을 실시간으로 제어하기가 너무 까다로웠거든요",
            "easy1_desc": "전력망은 갑작스러운 고장이 잦은데, 이때 발전량이나 저장 장치를 조절하면서 동시에 망의 구조까지 바꿔야 하는 복잡한 문제가 생깁니다. 게다가 실시간으로 빠르게 계산해서 대응해야 한다는 제약까지 있어서 제어하기가 무척 어렵거든요. 뭔 소리냐면, 변수가 너무 많아서 정해진 시간 안에 최적의 선택을 내리기가 쉽지 않다는 말이에요.",
            "easy2_title": "롤아웃 방식을 써서 실시간 제어 성능을 높여 봤어요",
            "easy2_desc": "연구진은 롤아웃(rollout) 기반의 제어기를 만들어 이 문제를 해결했는데요, 전력 흐름을 근사치로 계산하고 최적화 기법을 써서 유망한 행동을 먼저 골라냅니다. 그 뒤에 짧은 시뮬레이션을 돌려 혼잡도나 재생에너지 낭비를 줄이는 효과를 미리 확인하는 방식이에요. 결과적으로 118개 버스망에서 208개 시나리오 중 189개를 성공적으로 처리했고, 계산 속도 대비 점수 효율도 상위권에 들었다고 주장했어요.",
            "topic": "AI4RealNet 2026 챌린지 환경에서 전력망의 구조와 발전량을 실시간으로 제어하는 롤아웃 기반 제어기 개발에 관한 연구예요.",
            "one_line": "롤아웃 기반 제어기를 개발해 전력망을 실시간으로 제어했어요.",
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
          "canon_id": "2611.20748",
          "title": "NL2RCtrl: Risk-Controlled Controller Synthesis from Natural Language Requirements",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20748"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(frequency) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "frequency"
          ],
          "ai": {
            "easy1_title": "자연어로 제어기를 만들 때 생기는 위험을 어떻게 다룰까",
            "easy1_desc": "거대언어모델(LLM)을 쓰면 사람이 말하는 자연어 요구사항을 제어기 설계에 필요한 논리식으로 바꿀 수 있는데요, 문제는 이 과정에서 모호한 표현이 섞이면 제어기가 안전하지 않게 작동할 수 있다는 거예요. 즉, 사람이 의도한 것과 다르게 제어기가 만들어질 위험이 있다는 말입니다. 안전이 중요한 시스템에서는 이런 불확실성이 큰 걸림돌이 되는 셈이에요.",
            "easy2_title": "통계적 위험 제어 기술로 안전한 제어기를 설계했어요",
            "easy2_desc": "연구진은 등각 위험 제어(CRC)라는 기술을 도입해서 제어기가 의도한 요구사항을 어길 확률을 통계적으로 제한하는 틀을 만들었는데요, LLM에게 여러 번 질문해서 나온 논리식들을 의미별로 묶고 빈도순으로 나열한 뒤, 정해진 위험 수준 안에서 가장 적절한 논리식을 선택하는 방식이에요. 이렇게 하면 제어기가 의도한 요구사항을 위반할 확률을 사용자가 설정한 수준 이하로 묶어둘 수 있다는 겁니다. 만약 안전한 제어기를 만들기 어렵다고 판단되면 아예 설계를 포기하는 기능도 갖췄거든요.",
            "topic": "자연어 요구사항으로부터 안전이 보장된 제어기를 합성하기 위해 등각 위험 제어(CRC)를 활용하는 프레임워크를 제안했어요.",
            "one_line": "자연어 요구사항에서 제어기를 만들 때 위험을 통계적으로 제어하는 틀을 만들었어요.",
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
          "canon_id": "2611.20526",
          "title": "Compositional Data-Driven Small-Signal Stability Assessment of Power Systems via Output Differential Passivity",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20526"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(power system) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "power system"
          ],
          "ai": {
            "easy1_title": "전력망 모델을 일일이 다 몰라도 안정성을 따져 볼 수 있습니다",
            "easy1_desc": "복잡한 전력망의 기기 모델을 구체적으로 알지 못해도 출력 미분 수동성(ODP)이라는 개념을 써서 시스템이 안정적인지 평가하는 방법을 제안했는데요. 측정된 데이터의 궤적만으로도 국소적인 ODP 행렬과 지표를 바로 찾아낼 수 있다는 겁니다. 내부 상태를 알 수 있을 때는 입력과 상태 측정값을 쓰고, 모를 때는 입출력 데이터만으로도 평가가 가능하도록 설계했어요. 쉽게 말하면, 전력망의 세부 정보를 몰라도 외부 신호만으로 시스템의 안정성을 진단할 수 있다는 말이에요.",
            "easy2_title": "계산 효율을 높이고 데이터 노이즈까지 깔끔하게 걸러 냈습니다",
            "easy2_desc": "데이터 기반 평가 과정에서 생기는 계산 복잡함과 수치적인 문제를 해결하기 위해 두 가지 기법을 도입했는데요. 먼저 우측 역 백색화(RIW)를 써서 불필요한 좌표를 제거해 계산 효율을 높였고, 도구 변수(IV) 전처리를 통해 노이즈의 영향을 줄이고 수치적 불안정성을 개선했습니다. 이렇게 구한 ODP 지표는 재사용이 가능해서 제어기가 업데이트되어도 시스템 안정성을 다시 평가하기가 훨씬 수월해졌거든요. 결과적으로 IEEE 39-버스 전력망 실험에서 모델 기반의 기준값과 거의 비슷한 결과를 얻었다고 밝혔습니다.",
            "topic": "데이터 기반의 출력 미분 수동성을 활용하여 전력망의 소신호 안정성을 평가하는 구성적 프레임워크를 제시했습니다.",
            "one_line": "데이터 기반 ODP를 활용해 전력망 안정성을 평가하는 기법을 개발했어요.",
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
          "canon_id": "2611.20355",
          "title": "Adaptive Koopman Predictive Control without Persistent Excitation via Matrix Normal Invariant Priors",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20355"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(power system) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "power system"
          ],
          "ai": {
            "easy1_title": "데이터가 부족해도 제어 모델을 계속 고쳐야 하는데 그게 어려웠거든요",
            "easy1_desc": "유한 차원 쿱만(Koopman) 모델을 써서 예측 제어를 할 때는 모델의 정확도가 떨어지는 문제가 있었는데요, 이걸 해결하려고 적응형 제어 방식을 쓰기도 하지만 보통은 시스템이 계속 움직여야 하는 지속적 여기(PE) 조건이 필요하거든요. 그런데 실제 환경에서는 이런 조건을 항상 만족시키기가 매우 어렵다는 단점이 있습니다. 쉽게 말하면, 제어 모델을 실시간으로 업데이트하고 싶어도 데이터가 충분히 들어오지 않으면 모델이 제대로 작동하지 않는다는 말이에요.",
            "easy2_title": "데이터가 적어도 잘 돌아가는 새로운 제어 방식을 만들었어요",
            "easy2_desc": "그래서 연구진은 지속적 여기(PE) 조건 없이도 작동하는 적응형 일반화 쿱만(GeKo) 예측 제어기를 개발했는데요, 핵심은 행렬 정규 불변 사전 분포(matrix normal invariant prior)를 활용해서 오프라인에서 미리 학습한 연산자를 기준으로 재귀적 행렬 회귀를 수행하는 겁니다. 이렇게 하면 어떤 피드백 법칙을 쓰더라도 추정 오차가 입력-상태 안정성을 유지하게 되거든요. 결과적으로 데이터가 적은 상황에서도 추적 오차를 가장 낮게 줄이면서 공분산이 발산하는 문제까지 막았다는 겁니다.",
            "topic": "지속적 여기 조건 없이도 안정적으로 작동하는 적응형 쿱만 예측 제어 기법을 제안했어요.",
            "one_line": "지속적 여기 조건이 필요 없는 적응형 쿱만 예측 제어기를 개발했어요.",
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
          "canon_id": "2611.20070",
          "title": "Consensus-based Economic Dispatch for Self-organized Local Energy Communities",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20070"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(voltage) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "voltage"
          ],
          "ai": {
            "easy1_title": "중앙 통제 없이도 에너지를 효율적으로 나누고 싶었어요",
            "easy1_desc": "분산 에너지 자원이 늘어나면서 기존의 전력망이 복잡한 분산형 시스템으로 변하고 있는데요, 이런 환경에서는 중앙에서 일일이 제어하기가 어렵다는 문제가 있어요. 특히 지역 에너지 공동체는 전력망의 상세한 정보나 구조를 다 알지 못한 채로 전압 제한 같은 물리적 조건을 지키며 에너지를 조절해야 하거든요. 기존 방식들은 이런 물리적 제약을 무시하거나 전력망 모델을 완벽히 알고 있다고 가정하는 한계가 있었던 셈이에요.",
            "easy2_title": "전압 정보를 스스로 학습해서 전력망을 안정적으로 운영했어요",
            "easy2_desc": "연구진은 중앙 관리자 없이도 전압 제약이 포함된 경제적 급전 문제를 해결하는 방식을 제안했는데요, 지역별 전력과 전압 측정값만 가지고 희소 그룹 라쏘(sparse-group LASSO) 회귀를 써서 전압 변화를 예측하는 선형 대리 모델을 학습시킨 거예요. 이 모델로 전압 위반을 막으면서 에이전트끼리 합의를 통해 에너지를 조절하는 방식인데, IEEE-33 네트워크 실험 결과 전압 위반 비율을 30%에서 3% 미만으로 크게 줄였다고 해요. 중앙에서 전체 정보를 다 알고 계산한 결과와 비교해도 성능 차이가 1% 이내로 매우 작다는 장점이 있는 겁니다.",
            "topic": "전력망의 상세 정보 없이도 전압 제약을 준수하며 분산형으로 경제적 급전을 수행하는 합의 기반 알고리즘을 제안했어요.",
            "one_line": "전압 정보를 스스로 학습해 중앙 제어 없이도 전력망을 효율적으로 운영했어요.",
            "topic_tag": "전력망·계통",
            "limit": "통신 그래프의 희소성이 최적해의 오차와 잔여 위반에 미치는 영향을 정량적으로 분석했어요."
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
            "tag": "전력망·계통",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.20026",
          "title": "The Grid's Own Language: A Common Information Model Layer for LLM Grid Assistants",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20026"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(power system) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "power system"
          ],
          "ai": {
            "easy1_title": "AI가 전력망 정보를 잘못 읽는 문제를 해결했어요",
            "easy1_desc": "거대언어모델(LLM) 기반의 전력망 보조 도구들이 현장에 도입되고 있는데요, 이 도구들이 전력 설비의 이름이나 형식만 보고 설비의 상태를 추측하다 보니 오류가 자주 발생한다는 문제가 있었어요. 뭔 소리냐면, 설비가 무엇인지 정확히 정의되지 않은 상태에서 계산을 수행하니 그 오차가 모든 분석 과정으로 퍼져 나간다는 말이에요. 쉽게 말하면, 데이터의 의미를 명확히 알지 못해 생기는 정보 해석의 오류가 컸던 겁니다.",
            "easy2_title": "전력망 표준 모델을 도입해 정확도를 97%까지 높였어요",
            "easy2_desc": "그래서 연구진은 전력망 운영 표준인 공통 정보 모델(CIM)을 LLM 보조 도구에 적용하는 계층을 설계하고, 이를 'CONDUCTOR'라는 오픈소스 도구로 구현해 봤는데요. 이 계층을 사용하면 데이터의 출처를 명확히 구분하고 운영자의 모델을 직접 불러올 수 있게 됩니다. 그 결과 37개의 작업에서 기존 55%였던 정답률이 97%까지 크게 올랐다고 주장했어요. 쉽게 말하면, 표준화된 정보를 제공함으로써 AI의 판단 오류를 획기적으로 줄인 셈이에요.",
            "topic": "전력망 운영을 돕는 LLM 보조 도구의 정확성을 높이기 위해 공통 정보 모델(CIM) 계층을 도입하는 방안을 제안했어요.",
            "one_line": "전력망 표준 모델을 LLM 보조 도구에 적용해 정보 해석의 정확도를 높였어요.",
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
            "evidence_by_symbols": 4,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.19732",
          "title": "Topology-Transferable Detection of Deep-Learning False Data Injection Attacks Through Residual-Energy Separation",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19732"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(power system) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "power system"
          ],
          "ai": {
            "easy1_title": "딥러닝 공격은 기존 탐지기를 교묘하게 피합니다",
            "easy1_desc": "전력망 상태를 추정할 때 딥러닝을 활용한 데이터 위조 공격이 발생하면 기존의 나쁜 데이터 탐지기(BDD)나 데이터 기반 탐지기가 제대로 작동하지 않는 문제가 있습니다. 연구진은 이 탐지기들이 공격자가 만든 위조 데이터를 정상적인 신호로 오해하기 때문이라고 봤는데요. 공격자가 데이터를 정교하게 맞추면 탐지기가 이를 노이즈를 제거하는 과정으로 착각하게 되어, 결국 공격 신호가 탐지기가 검사하지 않는 영역으로 숨어버리는 겁니다.",
            "easy2_title": "망 구조가 바뀌어도 공격을 잡아내는 새로운 방법을 찾았습니다",
            "easy2_desc": "연구진은 잔차 에너지(residual energy)를 분리하는 방식을 통해 망의 구조가 바뀌어도 재학습 없이 공격을 탐지하는 방법을 제안했습니다. 기존 방식은 망 구조가 변하면 탐지기를 다시 학습시켜야 했지만, 이번 방식은 망 구조와 상관없이 정상 데이터와 공격 데이터를 구분할 수 있는 기준을 찾아낸 거예요. 실제로 IEEE 14, 39, 57, 118 버스 시스템에서 실험해 보니 평균 F1 점수가 0.98 이상으로 유지되는 높은 성능을 보였다고 합니다.",
            "topic": "전력망 상태 추정에서 망 구조 변화에 영향을 받지 않는 딥러닝 기반 위조 데이터 공격 탐지 기법을 제안했습니다.",
            "one_line": "잔차 에너지 분리를 통해 망 구조 변화에도 강한 위조 데이터 공격 탐지법을 개발했어요.",
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
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.19608",
          "title": "Impact of Wind-Solar-Battery Growth on Electricity Prices: Reserve Scarcity and Transmission Congestion",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19608"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(battery) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "battery"
          ],
          "ai": {
            "easy1_title": "풍력과 태양광을 늘리면 전력 부족 문제가 다 해결될까요",
            "easy1_desc": "연구진은 풍력, 태양광, 배터리를 계속 더해서 전력 공급이 부족한 상황을 없애면, 예비력 부족이나 송전망 혼잡 같은 다른 문제도 같이 사라지는지 확인해 봤는데요. 결론부터 말하면 전력 부족은 해결할 수 있지만, 예비력 부족이나 송전망 혼잡은 여전히 남는다는 거예요. 뭔 소리냐면, 단순히 발전 설비를 늘리는 것만으로는 전력망의 모든 운영 문제를 한꺼번에 해결하기 어렵다는 말이에요.",
            "easy2_title": "설비를 더해도 사라지지 않는 문제들을 확인했습니다",
            "easy2_desc": "풍력을 1,500MW까지 늘려도 저녁 시간대에는 예비력 부족으로 가격이 5,000달러/MWh까지 치솟는 문제가 생기거든요. 여기에 태양광 1,800MW를 더하면 예비력 부족 가격이 크게 낮아지긴 하지만, 여전히 특정 시간대에는 문제가 남는다는 겁니다. 배터리까지 추가하면 상황이 더 나아지긴 하는데, 송전망 혼잡 문제는 여전히 해결되지 않고 특정 지점에서 계속 발생한다는 사실을 확인했습니다.",
            "topic": "재생에너지와 배터리 설비 확충이 전력망의 예비력 부족과 송전망 혼잡에 미치는 영향을 분석했습니다.",
            "one_line": "재생에너지와 배터리 확충이 전력망 운영에 미치는 영향을 분석했어요.",
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
            "evidence_by_symbols": 3,
            "bad_numbers": [
              "31"
            ],
            "format": [],
            "flags": [],
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.19602",
          "title": "AC Assessment of DC Power Flow Screening for Data Center Hosting Capacity and Siting",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19602"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(data center) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "data center"
          ],
          "ai": {
            "easy1_title": "데이터 센터 전력 용량을 계산할 때 쓰는 기존 방식이 너무 낙관적이었어요",
            "easy1_desc": "데이터 센터가 전력을 얼마나 받을 수 있는지 계산할 때 직류(DC) 기반의 간편한 방식을 주로 써 왔는데요, 이걸 실제 교류(AC) 전력망 모델에 대입해 봤더니 문제가 생겼어요. DC 방식은 전력망의 복잡한 제약 조건을 다 고려하지 못해서, 실제보다 용량을 훨씬 크게 잡는 경향이 있다는 거예요. 쉽게 말하면, 실제로는 감당하기 힘든 수준인데도 DC 계산상으로는 괜찮다고 나오는 경우가 많다는 말이에요.",
            "easy2_title": "AC 모델로 다시 검증해서 더 정확한 입지를 찾도록 도왔어요",
            "easy2_desc": "연구진은 DC 방식으로 뽑은 용량을 AC 최적 전력 흐름 모델로 다시 검증하는 과정을 제안했는데요, 이렇게 하면 DC 모델이 놓쳤던 선로의 전력 제한이나 발전기의 무효 전력 제한까지 꼼꼼히 따져볼 수 있어요. 실제로 123개 버스를 테스트해 보니 DC 방식이 AC 방식보다 용량을 최대 1,070%까지 과대평가하는 것으로 나타났거든요. 이 방식을 쓰면 계획 단계에서 무리한 프로젝트를 걸러내거나 더 적합한 위치를 고를 수 있다는 장점이 생기는 겁니다.",
            "topic": "데이터 센터의 전력 수용 능력을 평가할 때 DC 기반 방식이 가진 과대평가 문제를 지적하고 AC 모델을 통한 검증의 필요성을 다뤘어요.",
            "one_line": "데이터 센터 전력 수용 능력을 평가하는 DC 방식의 한계를 AC 모델로 검증했어요.",
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
          "canon_id": "2611.19226",
          "title": "Temporal Attention-Enhanced Mixture-of-Experts Guidance for Multi-Revolution Low-Thrust Rendezvous",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19226"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(transformer) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "transformer"
          ],
          "ai": {
            "easy1_title": "우주선이 목적지까지 정확히 찾아가는 게 참 어렵거든요",
            "easy1_desc": "다회전 저추력 랑데부(우주선이 궤도를 여러 번 돌며 서서히 접근해 만나는 것)는 긴 시간 동안 궤도를 옮겨야 하면서도 마지막에는 아주 정밀하게 제어해야 하는 작업이에요. 그런데 기존 방식인 거리 기반의 딱딱한 전환 방식은 효율이 떨어지는 문제가 있었거든요. 뭔 소리냐면, 상황에 맞춰 유연하게 대처하지 못해 시간과 연료를 낭비하게 된다는 말이에요.",
            "easy2_title": "인공지능 전문가들을 섞어서 똑똑하게 길을 찾게 했어요",
            "easy2_desc": "연구진은 심층 강화학습을 써서 시간적 주의 집중(Temporal Attention)을 강화한 전문가 혼합 유도 법칙을 제안했는데요, 먼 거리용 전문가와 도착 지점용 전문가를 따로 두고 인공지능이 상황에 맞춰 이 둘을 적절히 섞어 명령을 내리게 만든 거예요. 특히 도착 지점용 전문가는 트랜스포머를 써서 과거 기록까지 기억하게 했거든요. 그 결과 600번의 시험에서 모두 성공했고, 기존 방식보다 비행 시간은 50.6%, 연료 소모량인 델타-브이(delta-v)는 44.5%나 줄였다고 주장했어요.",
            "topic": "심층 강화학습을 활용한 전문가 혼합 방식의 저추력 궤도 랑데부 유도 법칙에 관한 연구예요.",
            "one_line": "심층 강화학습 기반의 전문가 혼합 유도 법칙으로 궤도 랑데부 효율을 높였어요.",
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
          "canon_id": "2611.19132",
          "title": "The Race between Protection and Control: Fast Reactive Reserves Against Overvoltage Cascade",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19132"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(voltage) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "voltage"
          ],
          "ai": {
            "easy1_title": "전압이 치솟을 때 보호 장치가 오히려 사고를 키우는 문제",
            "easy1_desc": "전력망에서 전압이 급격히 오르는 과전압 현상이 생기면, 보호 장치인 계전기가 작동해 발전소를 차단하게 되는데요. 문제는 발전소가 차단되면서 전압을 낮춰주던 무효 전력 흡수원까지 함께 사라져, 남은 발전소들의 전압이 더 빠르게 치솟는 연쇄 사고가 발생한다는 거예요. 계전기가 제어 장치보다 더 빨리 반응해 버리니, 제어 시스템이 손을 쓰기도 전에 사고가 번지는 셈입니다.",
            "easy2_title": "사고를 막기 위해 얼마나 빠르게 전력을 확보해야 하는지 계산했어요",
            "easy2_desc": "연구진은 연쇄 사고를 막기 위해 어느 위치에, 얼마나 많은 무효 전력을, 얼마나 빠르게 확보해야 하는지 결정하는 방법을 제시했는데요. 계전기가 지연 시간 내에 다시 돌아오면 차단을 취소하는 '트립 인증' 개념을 도입해, 이 복잡한 문제를 선형 계획법으로 단순하게 풀 수 있게 만들었어요. 시뮬레이션 결과, 각 발전소 스스로가 가진 설정값을 활용하는 것이 가장 효과적인 예비력 확보 수단임이 확인됐다는 겁니다.",
            "topic": "과전압 연쇄 사고를 방지하기 위한 신속한 무효 전력 예비력 확보 전략에 관한 연구예요.",
            "one_line": "과전압 연쇄 사고를 막기 위한 무효 전력 예비력 확보 최적화 기법을 개발했어요.",
            "topic_tag": "전력망·계통",
            "limit": "계전기 전압 측정에 발생하는 작은 오차나 히스테리시스가 예비력 요구량에 큰 영향을 줄 수 있다는 점을 확인했습니다."
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
            "tag": "전력망·계통",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.19125",
          "title": "AI Inference-Aware Optimal Power Flow: Converting Token Requirements into Grid Flexibility",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19125"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(power system) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "power system"
          ],
          "ai": {
            "easy1_title": "AI 데이터센터가 전력망에 부담을 주고 있어요",
            "easy1_desc": "AI 추론에 필요한 전력 수요가 빠르게 늘어나면서 데이터센터 주변의 송전망이 꽉 막히는 문제가 생기고 있는데요, 이게 왜 문제냐면 데이터센터가 특정 지역에 몰려 있어서 전력을 한꺼번에 끌어다 쓰기 때문이에요. 지금까지는 AI 작업을 보낼 때 그래픽처리장치(GPU)가 얼마나 남았는지만 따졌거든요. 그러다 보니 전력망의 상황은 고려하지 못해 전력 효율이 떨어지는 결과가 나타난다는 겁니다.",
            "easy2_title": "AI 작업 위치를 전력망 상황에 맞춰 조절해 봤어요",
            "easy2_desc": "그래서 연구진은 AI 추론 작업의 위치를 전력망 상황에 맞춰 바꾸는 새로운 방식을 제안했는데요, 사용자가 요구하는 응답 속도인 첫 토큰 생성 시간(TTFT)과 토큰 간 지연 시간(ITL)을 지키면서도 전력망의 부담을 줄이는 방법이에요. 이렇게 하면 데이터센터 운영자와 전력망 운영자가 서로 협력해서 전력 수요를 분산할 수 있거든요. 결과적으로 기존 방식보다 더 낮은 비용으로 전력을 공급할 수 있다는 점을 확인했다는 겁니다.",
            "topic": "AI 추론 작업의 유연성을 활용하여 전력망의 혼잡을 완화하고 비용을 최적화하는 통합 운영 체계를 제안했어요.",
            "one_line": "AI 추론 작업 경로를 전력망 상황에 맞춰 최적화했어요.",
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
          "canon_id": "2611.19073",
          "title": "Job-Level Workload Allocation for Data Centers Under Flexible Interconnections",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19073"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(data center) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "data center"
          ],
          "ai": {
            "easy1_title": "데이터센터가 전력망에 연결될 때 생기는 제약이 문제였어요",
            "easy1_desc": "데이터센터가 전력망에 빨리 연결되려면 전력망 시설을 새로 짓지 않는 대신, 전력 사용량에 제한을 받아들여야 하는데요. 전력망에 과부하가 걸려 전력을 줄여야 할 때 데이터센터는 컴퓨팅 작업을 늦춰야만 합니다. 작업이 사용하는 에너지보다 작업 자체가 가진 가치가 훨씬 크기 때문에, 어떤 작업을 얼마나 늦출지 결정하는 것이 비용 측면에서 큰 고민거리라는 말이에요.",
            "easy2_title": "작업 가치에 따라 전력을 나눠 쓰는 방법을 제안했어요",
            "easy2_desc": "연구진은 전력이 제한될 때 작업별 가치에 따라 전력을 실시간으로 배분하는 방식을 제안했는데요. 이 방법을 쓰면 전력망 제한을 지키면서도 작업 지연으로 인한 비용을 줄일 수 있다는 겁니다. 100MW 규모의 데이터센터를 1년간 분석해 보니, 현장 발전과 저장 장치를 함께 활용할 때 비용이 더 낮아진다는 결과도 확인했거든요.",
            "topic": "데이터센터의 유연한 전력망 연결을 위해 작업별 가치를 고려한 전력 배분 모델을 제시했어요.",
            "one_line": "데이터센터의 작업별 가치에 따른 실시간 전력 배분 모델을 개발했어요.",
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
          "canon_id": "2611.20218",
          "title": "SWE-CoWork: Benchmarking Coding Agents as Digital Employees in Organizations",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.20218",
            "arxiv": "https://arxiv.org/abs/2611.20218"
          },
          "published": "2026-11-15",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 45,
          "score": 5.5,
          "score_why": "추천 45 → +4.5 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "코딩 에이전트가 조직에서 일하려면 넘어야 할 산이 많아요",
            "easy1_desc": "소프트웨어 조직에서 일하는 코딩 에이전트는 단순히 코드만 짜는 게 아니라, 무엇을 만들지 정하고 동료들과 협업하며 결과물까지 검증해야 하거든요. 연구진은 이런 복잡한 환경을 구현한 SWE-CoWork라는 벤치마크를 만들었는데요, 101개의 실제 저장소와 11개 언어, 12개 도메인을 포함하고 있어요. 에이전트는 26명의 가상 동료와 소통하며 흩어진 요구사항을 찾아내고 충돌하는 정보를 해결해야 하는 상황인 겁니다.",
            "easy2_title": "성능을 확인해 보니 아직 갈 길이 멀다는 결과가 나왔어요",
            "easy2_desc": "11개의 모델을 시험해 봤더니, 부분적인 구현은 어느 정도 하지만 전체 작업을 완벽히 끝내는 경우는 매우 드물다는 사실을 확인했어요. 상위 두 모델이 실패했던 테스트의 63% 정도는 통과했지만, 전체 과제를 성공한 비율은 8% 미만에 불과했거든요. 요구사항을 미리 다 알려줘도 전체 성공률은 변하지 않았는데, 이는 단순히 정보를 주는 것만으로는 해결되지 않는 근본적인 문제가 있다는 뜻이에요.",
            "topic": "조직 환경에서 코딩 에이전트의 협업 및 작업 수행 능력을 평가하기 위한 SWE-CoWork 벤치마크를 제안하고 그 한계를 분석했어요.",
            "one_line": "조직 환경에서 코딩 에이전트의 협업과 작업 수행 능력을 평가하는 벤치마크를 만들었어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "요구사항을 명확히 전달해도 전체 과제 성공률이 개선되지 않는다는 점이 남은 과제예요."
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
          "canon_id": "2611.21607",
          "title": "ScaleVLA: Scaling Vision-Language-Action Models to 552 Billion Parameters",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.21607",
            "arxiv": "https://arxiv.org/abs/2611.21607"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 41,
          "score": 5.1,
          "score_why": "추천 41 → +4.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇 제어에 쓰기엔 기존 모델들이 너무 작았거든요",
            "easy1_desc": "최근 GPT-6 Astra 같은 거대 시각-언어 모델(VLM)이 로봇 제어에서 뛰어난 능력을 보여주고 있는데요. 그런데 정작 로봇을 움직이는 시각-언어-행동(VLA) 모델들은 여전히 훨씬 작은 규모의 모델을 쓰고 있다는 한계가 있었어요. 연구진은 이런 거대 모델의 잠재력이 로봇 학습의 더 강력한 기반이 될 수 있는지 궁금해진 겁니다.",
            "easy2_title": "모델을 5520억 개 파라미터로 키웠더니 로봇 성능이 확 좋아졌어요",
            "easy2_desc": "그래서 5520억 개의 파라미터를 가진 DeepSeek-V4.1-Flash를 행동 생성 모델(DiT)과 연결한 ScaleVLA를 만들어 봤는데요. 실험 결과, 데이터가 적어도 더 똑똑하게 배우고 새로운 환경에서도 훨씬 잘 움직이는 모습을 보였거든요. 특히 정밀한 조작이 필요한 작업에서 성공률이 크게 올랐는데, 덩치는 커졌지만 반응 속도는 216ms 수준으로 유지했다는 점이 특징이에요.",
            "topic": "거대 시각-언어 모델의 규모를 키우는 것이 로봇 학습의 효율성과 일반화 성능에 미치는 영향을 분석했어요.",
            "one_line": "거대 시각-언어 모델을 로봇 제어에 적용해 성능을 검증했어요.",
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
          "canon_id": "2611.21599",
          "title": "Hyperlyve: Parallelized Enumeration and Exact Lyapunov Stability Certification for Deep ReLU Networks",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21599"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "신경망 제어기의 안정성을 증명하기가 너무 어려웠거든요",
            "easy1_desc": "비선형 동역학 시스템에 신경망 제어기를 쓸 때, 이 시스템이 시간이 지나도 안정적인지 확인하는 건 매우 까다로운 작업이었는데요. 기존 방식들은 복잡한 신경망의 구조를 일일이 다루느라 계산량이 너무 많아 시간이 오래 걸리거나, 아예 증명 자체가 불가능한 경우가 많았거든요. 쉽게 말하면, 신경망이 복잡해질수록 시스템이 안전하다고 수학적으로 보장하기가 사실상 어려웠다는 말이에요.",
            "easy2_title": "병렬 처리 알고리즘으로 증명 속도를 150배 넘게 높였어요",
            "easy2_desc": "연구진은 하이퍼라이브(Hyperlyve)라는 새로운 프레임워크를 개발했는데, 신경망의 ReLU 활성화 함수가 만드는 초평면 배치를 병렬로 계산해서 안정성을 증명하는 방식이에요. 이 방식을 썼더니 기존 도구들보다 150배 이상 빠르게 증명할 수 있었고, 이전에는 다루지 못했던 복잡한 시스템의 안정성까지 확인하는 성과를 냈거든요. 덕분에 근사치를 쓰지 않고도 정확한 동역학 시스템의 안정성을 보장할 수 있게 된 셈이에요.",
            "topic": "신경망 제어기가 포함된 비선형 동역학 시스템의 점근적 안정성을 증명하기 위한 새로운 프레임워크인 하이퍼라이브를 제안했어요.",
            "one_line": "병렬 알고리즘을 활용해 신경망 제어 시스템의 안정성을 빠르게 증명했어요.",
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
          "canon_id": "2611.21483",
          "title": "Input-to-State Stability in Distributed Adaptive Identification of Nonlinear Systems without Input Sharing",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21483"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "입력 정보를 서로 주고받지 않아도 시스템을 파악할 수 있게 됐어요",
            "easy1_desc": "기존에는 시스템을 파악하려면 센서 노드끼리 입력 정보를 공유해야 했는데, 이게 통신 부담이 컸거든요. 이번 연구에서는 각 센서가 자기 주변의 정보와 이웃의 상태 추정치만 가지고도 전체 시스템의 상태를 재구성하는 방법을 찾아냈습니다. 뭔 소리냐면, 복잡한 입력 공유 없이도 각자 알아서 미지의 비선형 시스템을 식별할 수 있게 됐다는 말이에요.",
            "easy2_title": "복잡한 계산은 줄이고 시스템 안정성은 더 튼튼하게 만들었어요",
            "easy2_desc": "연속 시간 환경에서 작동하는 새로운 적응형 법칙을 만들었는데, 기존 이산 시간 방식과 달리 데이터를 정규화할 필요가 없다는 장점이 있습니다. 리아푸노프 분석을 통해 매개변수의 유계성을 확인했고, 외부 방해가 있어도 시스템이 안정적으로 유지됨을 입증했거든요. 쉽게 말하면, 계산 과정은 더 간결해졌는데 시스템의 신뢰도는 더 높아졌다는 겁니다.",
            "topic": "입력 공유가 필요 없는 분산형 적응형 식별 기법을 통해 비선형 시스템의 상태를 안정적으로 추정하는 이론을 다루고 있어요.",
            "one_line": "입력 공유 없이 비선형 시스템을 식별하는 분산형 적응 기법을 제안했어요.",
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
          "canon_id": "2611.21446",
          "title": "Robust Action Clusters and Cascades in Opinion Dynamics with Heterogeneous Action Thresholds",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21446"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "사람마다 행동 기준이 달라서 생기는 문제",
            "easy1_desc": "네트워크 안에서 사람들이 자기 의견을 바꾸고 행동으로 옮기는 과정을 살펴봤는데요, 이때 사람마다 행동을 결정하는 기준인 임계값이 제각각이라는 점이 핵심이에요. 이 기준이 다르면 전체적인 의견 흐름이 어떻게 변하는지 파악하기가 어려워지거든요. 쉽게 말하면, 누가 어떤 행동을 할지 예측하는 게 복잡해진다는 말이에요.",
            "easy2_title": "행동을 꿋꿋이 지키는 집단을 찾아내고 전파 과정을 밝혀냈어요",
            "easy2_desc": "연구진은 외부의 영향에도 흔들리지 않고 특정 행동을 유지하는 집단을 '강건한 행동 클러스터'라고 정의하고 그 조건을 찾아냈어요. 구성원들이 서로에게 충분한 영향력을 행사하면 이 집단이 유지된다는 걸 밝혀낸 건데요, 이를 통해 외부 사람이 언제 이 행동을 따라 하게 되는지 그 연쇄 반응까지 설명할 수 있게 됐거든요. 결과적으로 행동의 전파 과정을 수학적으로 더 명확하게 이해하게 된 셈이에요.",
            "topic": "네트워크상에서 개인의 행동 기준이 다를 때, 특정 행동이 어떻게 유지되고 퍼져 나가는지를 수학적으로 분석한 연구예요.",
            "one_line": "네트워크상 행동 전파와 유지 조건을 수학적으로 분석했어요.",
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
          "canon_id": "2611.21378",
          "title": "Data-Driven Predictive Control for Autonomous Vehicle Racing under Varying Friction",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21378"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "데이터 기반 예측 제어는 마찰력이 바뀌면 정확도가 떨어져요",
            "easy1_desc": "데이터 기반 예측 제어(DPC)는 과거의 입출력 데이터를 조합해서 미래의 움직임을 예측하는 방식인데요, 자율주행 레이싱에서는 타이어와 노면 사이의 마찰력이 구간마다 계속 바뀌거든요. 만약 과거 데이터와 현재 주행 환경의 마찰력이 서로 다르면 예측 정확도가 눈에 띄게 낮아진다는 문제가 있습니다. 그래서 정확한 예측을 하려면 마찰력을 일일이 추정해야 하는 번거로움이 생긴다는 말이에요.",
            "easy2_title": "서로 다른 마찰력 데이터를 모아 쓰면 해결할 수 있어요",
            "easy2_desc": "연구진은 마찰력이 다른 환경에서 얻은 데이터들을 한데 모아 학습시키는 방법을 써 봤는데요, 이렇게 하면 마찰력을 따로 추정하지 않아도 예측 정확도를 어느 정도 유지할 수 있다는 겁니다. 실제로 실험해 봤더니, 마찰력이 다른 데이터를 그냥 썼을 때보다 오차가 훨씬 줄어드는 결과가 나왔거든요. 별도의 적응 기법 없이도 마찰 변화에 대응할 수 있다는 점이 이 연구의 핵심이에요.",
            "topic": "자율주행 레이싱에서 마찰력이 변할 때 데이터 기반 예측 제어의 성능을 유지하기 위해 데이터를 통합하는 방식을 연구했어요.",
            "one_line": "마찰력이 변하는 환경에서 데이터 통합으로 예측 제어 성능을 유지했어요.",
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
          "canon_id": "2611.21247",
          "title": "Neurosymbolic Synthesis of Contraction Metrics with Certified Verification",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21247"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 시스템이 안정적인지 확인하는 게 어려웠거든요",
            "easy1_desc": "연속적인 움직임을 가진 시스템이 시간이 지나도 안정적으로 유지되는지 확인하려면 수축 메트릭(contraction metric)이라는 수학적 도구가 필요한데요, 기존에는 이 메트릭을 찾는 과정에서 오류가 발생해도 왜 틀렸는지 알기 어렵다는 문제가 있었거든요. 연구진은 시스템이 안정적인지 검증하는 과정에서 반례를 찾아 학습에 활용하는 방식을 도입해 봤는데요, 쉽게 말하면 틀린 부분을 짚어주면 그 정보를 바탕으로 다시 학습해서 더 정확한 메트릭을 찾아내는 방식이라는 겁니다.",
            "easy2_title": "신경망과 기호 논리를 섞어서 더 확실하게 검증해 봤어요",
            "easy2_desc": "이번 연구에서는 신경망(neural network)으로 메트릭을 학습하면서도, 그 결과가 수학적으로 옳은지 확인하기 위해 기호 논리 기반의 엄격한 검증 방식을 결합했는데요, 이렇게 하면 단순히 학습만 하는 게 아니라 수치적으로도 확실한 근거를 확보할 수 있다는 장점이 있거든요. 실험 결과, 다항식이나 삼각함수 같은 다양한 표현 방식에서도 안정성을 증명할 수 있었고, 학습 과정에서 발생하는 오차 범위까지 계산해 낼 수 있게 됐다는 말이에요. 결과적으로 시스템의 안정성을 더 정밀하게 평가할 수 있게 된 셈입니다.",
            "topic": "연속 시간 자율 시스템의 안정성을 보장하기 위해 신경망과 기호 논리를 결합한 수축 메트릭 합성 및 검증 기법을 제안했어요.",
            "one_line": "신경망과 기호 논리를 결합해 시스템 안정성을 검증하는 기법을 개발했어요.",
            "topic_tag": "제어·로봇",
            "limit": "학습 과정에서 사용한 특정 설정들이 최적화 알고리즘의 수렴이나 일반적인 성능 우위를 보장하지는 않는다고 밝혔어요."
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
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.21243",
          "title": "Slower but Faster: When Self-Organized Traffic Flows Beat Traffic Signal Control",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21243"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 도시 교통을 중앙에서 통제하기가 너무 어려웠거든요",
            "easy1_desc": "도시의 교통 흐름은 워낙 복잡하고 변화가 심해서 중앙에서 일일이 신호를 제어하는 방식으로는 한계가 분명했습니다. 연구진은 이런 중앙 집중식 통제 대신, 각 교차로가 스스로 움직이는 분산형 방식이 더 효율적일 수 있다고 봤는데요. 이게 무슨 말이냐면, 전체를 한꺼번에 관리하려 애쓰기보다 현장에서 자연스럽게 질서가 생기도록 유도하는 게 더 나을 수 있다는 뜻이에요.",
            "easy2_title": "회전교차로로 바꿨더니 신호등보다 더 빨리 움직이더라고요",
            "easy2_desc": "연구진이 4x4 격자 도로망에서 신호등을 회전교차로로 바꿔 시뮬레이션을 해봤더니, 신호등보다 지연 시간이 2~3% 줄어드는 결과가 나왔습니다. 심지어 속도 제한을 낮춰서 천천히 달리게 해도 기존 신호등 체계와 비슷한 속도를 낼 수 있었는데요. 느리게 움직이는 것처럼 보여도 전체적인 흐름은 더 빨라지는 이른바 '느릴수록 빠르다'는 효과가 나타난 셈이에요.",
            "topic": "도시 교통망에서 중앙 제어식 신호등보다 분산형 회전교차로가 가지는 효율성과 그 한계를 분석했습니다.",
            "one_line": "교통망에서 회전교차로의 효율성을 시뮬레이션으로 분석했어요.",
            "topic_tag": "전력망·계통",
            "limit": "불규칙한 도로망에서는 교통량이 특정 수준을 넘어서면 회전교차로의 성능이 급격히 떨어지는 한계가 있습니다."
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
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.21204",
          "title": "Digital Twin Enabled Talkative Power Conversion",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21204"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "전력 변환 장치에 통신 기능을 직접 심어 봤어요",
            "easy1_desc": "기존에는 전력을 보내는 장치와 정보를 주고받는 장치가 따로 필요했는데요, TPC(Talkative Power Conversion)라는 방식은 전력 변환 장치(PEC)가 원래 가진 스위칭 리플을 조절해서 통신까지 한 번에 해결하는 기술이에요. 별도의 통신 하드웨어나 복잡한 배선이 필요 없다는 장점이 있거든요. 쉽게 말하면 전력선 자체가 통신선 역할을 하게 만든 셈이에요.",
            "easy2_title": "디지털 트윈을 더해서 성능과 효율을 높여 봤어요",
            "easy2_desc": "이번에는 이 TPC 방식에 디지털 트윈(DT) 개념을 처음으로 합쳐 봤는데요, 실제 장치와 가상 모델을 서로 연결해서 상태를 예측하고 최적화하는 구조예요. 장치와 디지털 트윈이 서로 멀리 떨어져 있어도 데이터를 주고받으며 시스템을 더 튼튼하고 효율적으로 운영할 수 있게 된 겁니다. 연구진은 이 방식이 전력과 통신이 긴밀하게 묶인 미래 에너지 시스템의 핵심이 될 거라고 주장했어요.",
            "topic": "디지털 트윈 기술을 활용해 전력 변환 장치의 통신과 운영 효율을 높이는 새로운 프레임워크를 제안했어요.",
            "one_line": "디지털 트윈을 전력 변환 장치 통신에 결합해 시스템 효율을 높였어요.",
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
            "flags": [
              "예측 의심: 이번 연구는 전력과 통신 기능이 아주 촘촘하게 엮인 미래의 사이버 물리 에너지 시스템(CPES)을 구현하는 "
            ],
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.21203",
          "title": "Decision-Relevant Forecast Calibration for Predictive Control",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21203"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "예측 모델이 상황에 따라 틀릴 수 있다는 게 문제였어요",
            "easy1_desc": "예측 제어기(Predictive controller)는 상황이 바뀌면 기존의 예측 정확도가 더 이상 맞지 않을 수 있는데요. 환경의 빈도나 맥락이 달라지면 모델이 제대로 작동하지 않는다는 말이에요. 연구진은 이런 상황 변화에 대응해 제어기가 여전히 신뢰할 수 있는지 확인하는 절차가 필요하다고 봤습니다.",
            "easy2_title": "예측이 얼마나 정확한지 검증하고 보정하는 방법을 만들었어요",
            "easy2_desc": "연구진은 제어기를 다시 학습시키지 않고도 상황 변화에 따른 오차를 검증하고 보정하는 절차를 개발했는데요. 잔차 그램 행렬(Residual Gram matrix)을 활용해 최적의 테스트 예산을 산출하고, 선형 계획법으로 최악의 편향을 줄이는 방식을 썼습니다. 그 결과 240개의 상황을 실험했을 때 최악의 편향을 최소 80.8% 제거했다고 밝혔어요. 쉽게 말하면, 모델을 새로 고치지 않고도 상황 변화에 맞춰 예측의 신뢰성을 확보하는 방법을 찾은 셈이에요.",
            "topic": "예측 제어 시스템에서 상황 변화에 따른 예측 편향을 검증하고 보정하는 체계적인 절차를 제안했어요.",
            "one_line": "예측 제어기에서 상황 변화에 따른 오차를 검증하고 보정하는 절차를 개발했어요.",
            "topic_tag": "제어·로봇",
            "limit": "이 연구는 재학습을 통한 성능 향상보다는 기하학적·통계적 한계가 명확한 재사용 가능한 평가 및 감사 기능을 제공하는 데 중점을 두었습니다."
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
            "tag": "제어·로봇",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.21200",
          "title": "Hands-On Beyond Classrooms: Elevating Control Engineering Education with Take-Home Labs",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21200"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.21179",
          "title": "Learning to Clear Peer-to-Peer Energy Markets",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21179"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "개인 간 에너지 거래를 하려니 계산이 너무 복잡했어요",
            "easy1_desc": "개인끼리 에너지를 사고파는 시장에서는 중앙 관리자 없이 각자 알아서 거래를 맞춰야 하는데요, 이때 분산 최적화나 일반화된 내쉬 균형(GNE) 같은 수학적 방법을 써서 거래를 조정하곤 합니다. 그런데 참여자가 늘어날수록 계산량이 너무 많아지고 서로 주고받아야 할 정보도 늘어나서 실제로 구현하기가 무척 어렵다는 문제가 있었거든요. 쉽게 말하면, 시장이 커질수록 시스템이 감당해야 할 통신과 계산 부담이 너무 크다는 말이에요.",
            "easy2_title": "과거 데이터를 학습해서 거래 계산 속도를 확 높였어요",
            "easy2_desc": "연구진은 과거의 거래 데이터를 활용해 계산 과정을 가속하는 '최적화 학습' 프레임워크를 제안했는데요, 추가적인 통신 없이도 기존 알고리즘의 수렴 속도를 높일 수 있게 설계했어요. 특히 그래프 신경망(GNN)을 써서 시장의 규모나 구조가 바뀌어도 유연하게 대응할 수 있도록 만들었거든요. 실험을 해봤더니 계산이 더 빨리 끝나는 것은 물론이고, 처음 보는 새로운 시장 상황에서도 안정적으로 작동한다는 점을 확인했다는 겁니다.",
            "topic": "개인 간 에너지 시장에서 분산 거래 알고리즘의 계산 효율성을 높이기 위해 학습 기반의 최적화 프레임워크를 제안한 연구예요.",
            "one_line": "과거 데이터를 학습해 개인 간 에너지 시장의 거래 계산 속도를 높였어요.",
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
          "canon_id": "2611.21134",
          "title": "Robust Data-Driven Output-Feedback Reference Governor with Quantified Model Uncertainty",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21134"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "데이터만 가지고 시스템을 안전하게 제어하고 싶었어요",
            "easy1_desc": "보통 시스템을 제어하려면 정확한 수학적 모델이 필요한데, 실제로는 데이터만 가지고 제어해야 하는 상황이 많거든요. 연구진은 입력과 출력 데이터, 그리고 외부 방해 요소의 범위를 활용해 데이터 기반 참조 거버너(DDRG)라는 제어기를 만들었습니다. 이게 뭔 소리냐면, 모델이 완벽하지 않아도 시스템이 안전하게 작동하도록 제어 명령을 조절하는 장치를 설계했다는 말이에요.",
            "easy2_title": "불확실한 상황에서도 안전 범위를 계산해 제어해요",
            "easy2_desc": "모델의 불확실성을 수치화해서 예측 범위 내에서 시스템이 제약 조건을 어기지 않도록 만들었는데요. 측정값에 노이즈가 섞여 있는 경우까지 고려해서 추가적인 안전 마진을 확보하는 방식이에요. 이렇게 하면 시스템이 무리하게 움직이지 않고 안전하게 목표를 향해 갈 수 있다는 장점이 생깁니다. 쉽게 말하면, 데이터가 조금 불안정해도 시스템이 고장 나지 않게 스스로 제동을 거는 셈이에요.",
            "topic": "데이터 기반 참조 거버너를 통해 모델의 불확실성을 정량화하고 시스템의 안전한 제어를 보장하는 방법론을 제시했어요.",
            "one_line": "데이터 기반 참조 거버너를 설계해 시스템의 안전한 제어를 구현했어요.",
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
          "canon_id": "2611.21075",
          "title": "Finite-Step Algorithms for Input-Constrained Control Barrier Function-Based Safety Filters",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21075"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식은 계산이 언제 끝날지 알기 어려웠거든요",
            "easy1_desc": "기존의 안전 필터는 이차 계획법(QP)을 써서 제어 입력을 수정하는데요, 이 방식은 수치적인 수렴 기준에 의존하기 때문에 계산이 언제 끝날지 미리 알기 어렵다는 문제가 있어요. 게다가 계산이 실패했을 때 이게 정말로 불가능한 문제인지 아니면 단순히 계산기가 못 푼 건지 구분하기도 힘들거든요. 쉽게 말하면, 안전을 지키려고 쓴 계산법이 오히려 계산의 예측 가능성을 떨어뜨리는 셈이에요.",
            "easy2_title": "계산 횟수를 딱 정해서 안전 필터를 더 확실하게 만들었어요",
            "easy2_desc": "연구진은 입력값에 제한이 있는 상황에서 안전을 보장하는 제어 장벽 함수(CBF) 문제를 풀기 위해, 계산 횟수를 미리 알 수 있는 새로운 알고리즘을 제안했는데요. 입력이 n개일 때 최대 2n번의 이벤트만 거치면 정확한 해를 구할 수 있고, 입력값이 이미 안전한 범위에 있다면 n번의 과정만으로도 충분하거든요. 이렇게 하면 계산이 언제 끝날지 예측할 수 있어서 안전이 중요한 시스템에서 훨씬 믿고 쓸 수 있다는 겁니다.",
            "topic": "입력 제한이 있는 시스템에서 안전을 보장하기 위해 계산 횟수가 정해진 새로운 제어 장벽 함수 기반 안전 필터 알고리즘을 개발했어요.",
            "one_line": "입력 제한이 있는 안전 필터의 계산 횟수를 예측 가능하게 만드는 알고리즘을 개발했어요.",
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
          "canon_id": "2611.21036",
          "title": "Non-Myopic Safety Filtering with Learned Intervention Cost-to-Go",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21036"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "지금 당장만 따지는 안전 필터는 멀리 보면 비효율적이에요",
            "easy1_desc": "기존의 제어 장벽 함수(CBF) 안전 필터는 매 순간 원래 명령에서 벗어나는 정도를 최소화하는 데만 집중하는데요, 이게 당장은 안전해 보여도 전체 과정을 놓고 보면 개입하는 노력이 너무 커질 수 있다는 문제가 있어요. 뭔 소리냐면, 눈앞의 위험만 피하려다 보니 장기적으로는 더 많은 조정을 하게 되는 셈이에요. 쉽게 말하면, 근시안적인 대응이 전체적인 효율을 떨어뜨리는 겁니다.",
            "easy2_title": "미래 비용까지 고려해서 전체 개입 노력을 50% 줄였어요",
            "easy2_desc": "연구진은 학습된 비용 함수를 활용해 미래의 개입 비용까지 고려하는 비근시안적 안전 필터를 제안했는데요, 핵심은 원래의 안전 조건은 엄격하게 지키면서도 전체적인 개입 노력을 최적화하는 거예요. 실제로 충돌 회피 문제에 적용해 봤더니 기존 방식보다 평균 누적 개입 노력이 약 50% 줄어드는 결과가 나왔거든요. 계산량도 기존 예측 필터보다 적게 들면서 안전성은 그대로 유지했다는 점이 특징이에요.",
            "topic": "학습된 비용 함수를 사용하여 전체 개입 노력을 최소화하는 비근시안적 안전 필터를 설계하고 그 성능을 검증했어요.",
            "one_line": "학습된 비용 함수를 이용해 안전 필터의 누적 개입 노력을 줄였어요.",
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
          "canon_id": "2611.21009",
          "title": "Learning and Verifying Stabilizing Controllers with Structured Neural Control Lyapunov Functions",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21009"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.20907",
          "title": "Physics-Informed Direct Data-Driven Gain-Scheduled Control for Improving the Extrapolation Performance of Vehicle Lateral Control",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20907"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.20900",
          "title": "Joint Learning of Control Lyapunov Functions and Controllers via Stable-by-Design Surrogates",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20900"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.20889",
          "title": "Comfort as a Constraint or as a Cost in Reinforcement Learning and Model Predictive Building Control",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20889"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "쾌적함을 지키는 방법이 두 가지가 있는데 뭐가 다를까",
            "easy1_desc": "건물 냉난방 제어기에서 실내 온도를 쾌적하게 유지하면서 에너지를 아끼는 방법은 크게 두 가지인데요. 쾌적 범위를 어기면 벌점을 주는 '소프트 제약' 방식과, 아예 범위를 넘지 못하게 막는 '하드 제약' 방식이 있거든요. 연구진은 이 두 방식이 에너지 소비와 쾌적함에 어떤 차이를 만드는지 분석해 봤습니다. 쉽게 말하면, 제약 조건을 어떻게 설정하느냐가 성능에 어떤 영향을 주는지 따져 본 셈이에요.",
            "easy2_title": "알고리즘보다 제약 방식과 가중치가 에너지에 더 큰 영향을 줍니다",
            "easy2_desc": "실험 결과, 하드 제약 방식은 쾌적 범위를 덜 어기지만 소프트 제약 방식보다 에너지를 더 많이 쓴다는 사실을 확인했는데요. 소프트 제약 방식에서 가중치를 크게 높이면 하드 제약 방식과 비슷한 결과가 나오기도 합니다. 흥미로운 점은 어떤 알고리즘을 쓰느냐보다 제약 조건을 어떻게 정하고 가중치를 얼마나 주느냐가 에너지 소비에 더 큰 영향을 미친다는 거예요. 결국 제약 방식과 가중치 설정이 성능을 결정짓는 핵심이라는 말입니다.",
            "topic": "건물 냉난방 제어에서 쾌적함과 에너지 효율 사이의 균형을 맞추기 위한 제약 조건 설정 방식의 효과를 분석했어요.",
            "one_line": "건물 냉난방 제어에서 제약 조건 설정 방식이 에너지 효율에 미치는 영향을 분석했어요.",
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
          "canon_id": "2611.20836",
          "title": "Universal Quantizer Design for Identification of Systems with Memory",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20836"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "양자화된 데이터에서 정보를 얼마나 건질지가 문제였어요",
            "easy1_desc": "시스템을 식별할 때 관측값을 양자화(연속적인 값을 이산적인 값으로 변환)하면 정보 손실이 발생하는데요, 이때 양자화기가 어떤 정보를 남기느냐에 따라 추정 정확도가 결정됩니다. 기존에는 피셔 정보 행렬(FIM)이라는 도구를 써서 양자화기를 설계했는데, 문제는 이 방식이 주로 닫힌 형태의 수식에만 의존한다는 점이에요. 쉽게 말하면, 복잡한 시스템에서는 적용하기가 까다롭다는 뜻입니다.",
            "easy2_title": "시뮬레이션으로 정보를 추정해 양자화기를 설계했어요",
            "easy2_desc": "이번에는 시스템의 메모리 유무와 관계없이 쓸 수 있는 범용 양자화기 설계법을 제안했는데요, 핵심은 시뮬레이션 경로를 통해 비트당 정보를 평가하는 범용 FIM 추정기를 사용하는 겁니다. 정해진 비트 예산 안에서 이 추정치를 최대화하도록 임계값을 설계하는 방식인데, 파라미터를 모를 때는 2단계 절차를 거쳐 구현하게 돼요. 이렇게 했더니 기존 방식보다 식별 오차가 약 50% 줄어드는 효과를 보였다는 겁니다.",
            "topic": "메모리가 있는 시스템을 식별하기 위해 피셔 정보 행렬을 활용한 범용 양자화기 설계 기법을 다룹니다.",
            "one_line": "시뮬레이션 기반의 범용 FIM 추정기를 활용해 양자화기 설계법을 제안했어요.",
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
          "canon_id": "2611.20775",
          "title": "Co-simulation-Based Safety-Assessment of Black-Box Maritime Cyber-Physical Systems",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20775"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 해양 시스템은 안전한지 확인하기가 너무 어려웠어요",
            "easy1_desc": "현대 해양 사이버 물리 시스템은 여러 공학 분야가 촘촘하게 얽혀 있어서, 일일이 안전성을 검증하는 게 사실상 불가능에 가깝거든요. 그래서 시뮬레이션을 활용한 검증 방식이 대안으로 쓰이는데, 서로 다른 이해관계자가 만든 모델을 통합할 때는 내부 구조를 알 수 없는 블랙박스 형태가 되기 일쑤예요. 기존의 강화학습 기반 스트레스 테스트는 시스템 상태를 전부 알아야 잘 작동하는데, 블랙박스 환경에서는 정보를 일부만 볼 수 있다는 한계가 있었던 겁니다.",
            "easy2_title": "부분적인 정보만으로도 위험 상황을 찾아내는 방법을 만들었어요",
            "easy2_desc": "연구진은 이런 문제를 해결하려고 이벤트 기반 적응형 스트레스 테스트 버전 2를 제안했는데요, 시스템의 상태를 부분적으로만 관찰할 수 있는 상황을 고려해서 문제를 다시 정의한 거예요. 순환 근접 정책 최적화(Recurrent Proximal Policy Optimization)라는 기술을 써서 과거의 관찰 기록까지 활용해 공격적인 행동을 선택하도록 만들었거든요. 덕분에 블랙박스 환경에서도 복잡한 해양 시스템의 안전성을 효과적으로 평가할 수 있게 됐다는 겁니다.",
            "topic": "블랙박스 형태의 해양 사이버 물리 시스템을 안전하게 평가하기 위한 이벤트 기반 적응형 스트레스 테스트 방법론을 제안했어요.",
            "one_line": "부분 관찰 환경에서 해양 시스템의 안전성을 평가하는 스트레스 테스트 기법을 개발했어요.",
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
          "canon_id": "2611.20708",
          "title": "Koopman Temporal Logic and Model Predictive Control of Nonlinear Systems: A Demonstration in AC-DC Power Conversion",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20708"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡하게 움직이는 시스템을 어떻게 다룰지 고민했어요",
            "easy1_desc": "비선형 동역학(Nonlinear dynamics)을 가진 시스템은 움직임이 복잡해서 제어하기가 까다로운데요, 연구진은 이를 수학적으로 검증하고 제어하기 위해 쿱만 연산자 이론(Koopman operator theory)을 활용하는 방법을 고민했어요. 기존의 신호 시간 논리(Signal Temporal Logic)를 바탕으로, 비선형 시스템에 맞게 확장된 새로운 논리 체계를 만들어 본 거예요. 쉽게 말하면, 복잡한 움직임을 수학적으로 더 잘 다루기 위한 새로운 도구를 설계했다는 뜻입니다.",
            "easy2_title": "새로운 논리로 제어기를 설계해 성능을 확인했어요",
            "easy2_desc": "연구진은 새로 만든 쿱만 시간 논리(KTL)를 모델 예측 제어(MPC) 방식에 적용해 봤는데요, 제어 사양을 KTL로 기술하고 이를 바탕으로 시스템을 제어하는 공식을 세운 거예요. 실제로 AC-DC 전력 변환 설계에 적용해 봤더니, 제어 성능이 효과적이고 계산 효율성도 좋다는 점을 확인했어요. 기존 방식보다 복잡한 시스템을 다루는 데 더 유리한 결과를 보였다는 겁니다.",
            "topic": "비선형 시스템의 제어와 검증을 위해 쿱만 연산자 이론을 결합한 새로운 시간 논리 체계와 이를 활용한 모델 예측 제어 방식을 제안했어요.",
            "one_line": "비선형 시스템 제어를 위한 쿱만 시간 논리와 모델 예측 제어 방식을 제안했어요.",
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
          "canon_id": "2611.20689",
          "title": "Distribution-Free Probabilistic Environmental Control Barrier Functions with Application to Adaptive Cruise Control",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20689"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "환경 변화를 미리 알기 어려울 때 안전을 지키는 게 쉽지 않았어요",
            "easy1_desc": "환경이 어떻게 변할지 모르는 상황에서 안전을 유지하는 건 매우 어려운 일인데요, 특히 불확실한 환경의 분포를 모르거나 믿을 만한 안전 범위조차 없을 때는 더욱 그렇습니다. 연구진은 이런 상황에서 안전을 보장하기 위한 제어 방식이 마땅치 않았다는 점을 지적했거든요. 쉽게 말하면, 앞날을 예측하기 힘든 환경에서 시스템이 안전하게 작동하도록 만드는 기준을 세우기가 까다로웠다는 말이에요.",
            "easy2_title": "데이터 기반의 새로운 제어 방식으로 안전성과 효율을 모두 잡았어요",
            "easy2_desc": "연구진은 CPP-ECBF라는 새로운 방식을 제안했는데, 이는 데이터의 분포를 미리 가정하지 않고도 확률적인 안전 조건을 결정론적인 제어 제약으로 바꾸는 방법이에요. 이걸 적용했더니 적응형 크루즈 컨트롤에서 차량 가속도의 상한선을 더 유연하게 설정할 수 있게 되었거든요. 결과적으로 기존의 보수적인 방식보다 가속 성능을 높이면서도 99.97%의 높은 확률로 안전 기준을 만족했다는 겁니다. 쉽게 말하면, 안전은 확실히 챙기면서도 시스템이 너무 둔하게 움직이지 않도록 개선했다는 말이에요.",
            "topic": "불확실한 환경에서 확률적 안전 제어를 보장하기 위해 등각 예측 프로그래밍을 결합한 새로운 제어 기법을 제안했어요.",
            "one_line": "환경 분포를 모르는 상황에서도 안전을 보장하는 제어 기법을 개발했어요.",
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
            "evidence_by_symbols": 2,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "제어·로봇",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.20679",
          "title": "Tensor-Algebraic Framework for Nonlinear Control: Spectral Stability Analysis and Controller Design of Polynomial Systems",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20679"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.20489",
          "title": "Time-Varying Coverage via Diffeomorphic Coverage Control",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20489"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.20457",
          "title": "Estimation of jam density and saturation flow at signalized intersections using only low penetration rate connected vehicle GNSS trajectories: Case study using actual data in Tokyo",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20457"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "교차로 정체 정보를 알아내기가 참 어려웠거든요",
            "easy1_desc": "교차로에서 차가 얼마나 빽빽하게 서 있는지 나타내는 정체 밀도와 신호당 통과하는 차량 수인 포화 교통류는 신호 제어에 꼭 필요한 정보인데요, 커넥티드 차량(CV)의 위치 정보인 GNSS 궤적을 활용하려 해도 실제 도로 위를 달리는 차량 중 CV의 비율이 낮으면 정확한 값을 얻기가 쉽지 않았던 겁니다. 기존에도 이론적인 방법들은 있었지만, 실제 데이터에 적용해 본 사례가 거의 없어서 과연 낮은 비율의 데이터로도 신뢰할 만한 값을 뽑아낼 수 있을지 불분명했다는 말이에요.",
            "easy2_title": "낮은 비율의 차량 데이터로도 정체 상황을 꽤 정확히 파악했어요",
            "easy2_desc": "연구진은 도쿄의 교차로 세 곳에서 6개월 동안 모은 1~3% 수준의 낮은 보급률을 가진 CV 궤적 데이터를 분석해 봤는데요, 여러 신호 주기에 걸쳐 쌓인 차량 정지 위치 분포를 활용해 정체 밀도와 포화 교통류를 추정해 본 겁니다. 그 결과, 정체 패턴이 잘 나타나는 곳에서는 차량 간 간격이 8m 정도로 추정되었고, 포화 교통류 값도 영상 기반의 기준치와 10% 이내의 오차를 보였다는 거예요. 쉽게 말하면, 적은 양의 데이터만으로도 실제 도로 상황을 상당히 잘 짚어냈다는 뜻입니다.",
            "topic": "낮은 보급률의 커넥티드 차량 궤적 데이터를 활용해 교차로의 정체 밀도와 포화 교통류를 추정하는 방법을 분석하고 검증했어요.",
            "one_line": "낮은 보급률의 차량 데이터를 분석해 교차로 정체 밀도와 포화 교통류를 추정했어요.",
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
          "canon_id": "2611.20438",
          "title": "On Lie-Algebraic Conditions for Finite-Dimensional Koopman Bilinear Embeddings of Control-Affine Systems",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20438"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "비선형 시스템을 다루는 쿱만 방식이 왜 까다로운지 살펴봤어요",
            "easy1_desc": "제어 아핀 시스템(Control-affine systems)을 쿱만 빌리니어(Koopman bilinear) 표현으로 바꾸는 연구가 활발한데요, 연구진은 리 대수(Lie algebra) 관점에서 어떤 조건이 필요한지 따져 봤어요. 핵심은 시스템의 드리프트와 제어 벡터 필드가 만드는 리 대수가 유한한 차원을 가져야 한다는 점이에요. 이게 안 되면 쿱만 빌리니어 임베딩 자체가 성립하지 않는다는 사실을 밝혀낸 겁니다.",
            "easy2_title": "유한한 차원을 가지려면 어떤 조건이 필요한지 찾아냈어요",
            "easy2_desc": "리 대수에 0이 아닌 닐포텐트 아이디얼(Nilpotent ideal)이 포함되어 있을 때, 임베딩이 존재하기 위한 충분조건을 유도해 냈는데요. 이차 다항식 시스템 예시를 통해 확인해 보니, 이런 조건들이 벡터 필드에 매우 강한 제약을 건다는 걸 알 수 있었어요. 쉽게 말하면, 정확한 유한 차원 쿱만 빌리니어 임베딩을 만드는 게 생각보다 흔치 않은 일이라는 거예요.",
            "topic": "제어 아핀 시스템이 유한 차원의 쿱만 빌리니어 임베딩을 가질 수 있는 조건을 리 대수적 관점에서 분석했어요.",
            "one_line": "리 대수 관점에서 쿱만 빌리니어 임베딩의 존재 조건을 분석했어요.",
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
            "bad_numbers": [
              "0"
            ],
            "format": [],
            "flags": [],
            "tag": "수학·이론",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.20399",
          "title": "Implicit-Reasoning-Enabled Elastic Semantic Communications for AI-Agent Networks",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20399"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 에이전트가 늘어나면서 통신 방식도 바뀌어야 합니다",
            "easy1_desc": "AI 에이전트들이 스스로 일을 처리하는 네트워크 환경이 늘어나면서, 기존의 통신 방식으로는 감당하기 어려운 새로운 요구 사항들이 생겨나고 있는데요. 기존 방식은 미리 정해진 틀 안에서만 데이터를 주고받는 수준이라, 복잡하게 변하는 작업 환경에 맞춰 유연하게 대응하기가 어려웠거든요. 쉽게 말하면, 정해진 길로만 다니던 통신 방식이 이제는 상황에 따라 스스로 길을 찾아야 하는 상황이 된 셈이에요.",
            "easy2_title": "상황에 따라 유연하게 통신하는 탄력적 의미 통신을 제안합니다",
            "easy2_desc": "연구진은 작업의 필요에 따라 통신 강도와 참여하는 기능을 실시간으로 바꾸는 탄력적 의미 통신(ESC)이라는 틀을 새로 만들었는데요. 수직적으로는 작업 강도를 조절하고, 수평적으로는 필요한 기능을 더하거나 빼면서 정보와 계산의 가치를 최적화하는 방식이에요. 스도쿠-익스트림 실험을 해 봤더니, 무선 환경이 좋을 때는 추론을 더 많이 하고, 나쁠 때는 에지(Edge) 서버를 활용해 통신 부담을 줄이면서도 정확도를 유지할 수 있다는 걸 확인했거든요.",
            "topic": "AI 에이전트 네트워크에서 작업 요구 사항에 따라 통신 자원과 기능을 유연하게 조정하는 탄력적 의미 통신 프레임워크에 관한 연구입니다.",
            "one_line": "AI 에이전트 네트워크를 위한 탄력적 의미 통신 프레임워크를 제안했어요.",
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
          "canon_id": "2611.20392",
          "title": "Probabilistic Power Estimation and MPC-based Scheduling of Construction Electric Vehicles Supported by Mobile Charging Stations",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20392"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "건설 현장에서 전기 중장비를 쓰기 어려운 이유가 있었어요",
            "easy1_desc": "건설 현장에 전기 중장비(CEV)를 도입하려고 해도 충전 시설이 부족하고 중장비가 이동하기 어렵다는 문제가 있거든요. 게다가 이 장비들이 전기를 얼마나 쓰는지 정확히 알기 어렵다는 점도 걸림돌이었어요. 쉽게 말하면, 충전할 곳도 마땅치 않은데 얼마나 쓸지 모르니 현장에서 쓰기가 부담스러웠다는 말이에요.",
            "easy2_title": "이동식 충전소와 똑똑한 제어 기술로 문제를 해결했어요",
            "easy2_desc": "연구진은 이동식 충전소(MCS)를 활용하고, 베이지안 선형 회귀를 써서 전기 굴착기의 작업별 전력 소비를 확률적으로 추정해 봤는데요. 이를 바탕으로 작업과 충전 계획을 최적화하는 모델 예측 제어(MPC) 방식을 도입했어요. 그 결과, 기존 방식보다 운영 비용을 60.2%까지 줄일 수 있다는 점을 확인했거든요. 쉽게 말하면, 예측 제어 기술을 통해 전기 중장비를 훨씬 효율적으로 운영할 수 있게 된 셈이에요.",
            "topic": "전기 중장비와 이동식 충전소의 운영 효율을 높이기 위해 전력 소비를 추정하고 통합 스케줄링을 수행했어요.",
            "one_line": "전기 중장비와 이동식 충전소의 운영 효율을 높이는 통합 제어 시스템을 개발했어요.",
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
            "evidence_by_symbols": 2,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.20320",
          "title": "Course-Referenced Lateral Control of Trail-Following Convoys: String Stability and Adaptive Feedforward under Load Uncertainty",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20320"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "눈 쌓인 길에서 앞차를 따라갈 때 생기는 오차 문제",
            "easy1_desc": "눈이 쌓여 차선이 안 보일 때 앞차의 경로(GNSS trail)를 따라가는 방식을 쓰는데요, 이때 앞차의 오차가 뒤차로 계속 전달되면서 전체 대열의 오차가 점점 커지는 문제가 발생합니다. 이게 무슨 말이냐면, 앞차가 경로를 조금만 벗어나도 뒤로 갈수록 그 오차가 누적되어 대열 전체가 흔들릴 수 있다는 거예요. 연구진은 이런 오차 전파가 하나의 전달 함수로 나타난다는 점을 확인했습니다.",
            "easy2_title": "경로 참조 방식을 바꿔 오차를 잡고 적응형 제어를 더했어요",
            "easy2_desc": "연구진은 각 차량이 앞차의 경로를 참조할 때 곡선 길이를 기준으로 방향을 잡는 새로운 방식을 제안했는데요, 이 방식을 쓰면 앞차와 리더 차량의 경로를 조합해 대열 길이에 상관없이 오차를 일정하게 유지할 수 있습니다. 또한 짐 무게나 타이어 강성이 달라져 생기는 오차는 적응형 법칙을 통해 실시간으로 보정하도록 만들었거든요. 11대 차량 대열 시뮬레이션으로 확인해 보니, 실제로 오차가 줄어들고 안정적으로 주행하는 결과가 나왔습니다.",
            "topic": "차량 대열 주행 시 경로 추종 오차를 줄이기 위한 제어 방식과 적응형 피드포워드 설계에 관한 연구예요.",
            "one_line": "차량 대열 주행 시 오차 누적을 막는 경로 참조 제어와 적응형 보정법을 개발했어요.",
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
          "canon_id": "2611.20293",
          "title": "Model-Free Stealthy Attack on Vehicle Systems and Its Implications for ISO/SAE 21434 Risk Assessment",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20293"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "차량 시스템을 노리는 공격자가 정보를 몰라도 공격할 수 있더라고요",
            "easy1_desc": "기존의 차량 보안 공격은 시스템의 세부 정보나 제어 방식을 공격자가 미리 알고 있어야만 가능하다고 여겨졌거든요. 그런데 이번 연구에서는 차량의 시스템 모델이나 내부 정보를 전혀 모르는 상태에서도 공격이 가능하다는 점을 확인했어요. 쉽게 말하면, 공격자가 차량의 설계도를 몰라도 주행 데이터를 관찰하는 것만으로 위험한 공격을 만들어낼 수 있다는 겁니다.",
            "easy2_title": "데이터만으로 공격을 설계했더니 보안 시스템을 쉽게 피하더라고요",
            "easy2_desc": "연구진은 차량에서 수집한 데이터로 VARX(외부 입력이 있는 벡터 자기회귀 모델)를 만들어 공격 시퀀스를 설계했는데요, 이 방식은 차량의 동역학 모델이나 센서 정보를 하나도 쓰지 않아도 됩니다. 실제로 차선 유지 주행 실험을 해봤더니 차량을 9.21초 동안 차선 밖으로 밀어냈고, 기존 보안 시스템(IDS)들도 공격을 거의 알아채지 못했어요. 공격의 위력은 기존 방식과 비슷하면서도 공격 난이도는 훨씬 낮아져서, ISO/SAE 21434 기준의 위험 평가 등급이 낮음에서 높음으로 올라갔다는 게 핵심이에요.",
            "topic": "차량 네트워크를 대상으로 한 모델 기반 정보가 필요 없는 은밀한 공격 방식과 이것이 자동차 보안 위험 평가에 미치는 영향을 분석했어요.",
            "one_line": "차량 시스템 정보를 몰라도 가능한 은밀한 공격 방식을 개발하고 위험 평가 체계를 개선했어요.",
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
            "format": [
              "one_line 51자"
            ],
            "flags": [],
            "tag": "제어·로봇",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.20266",
          "title": "Three-Dimensional Impact Angle Control Guidance Law with Field-of-View Constraint",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20266"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "목표물을 정확히 타격하면서 시야 제한도 지키기가 어려웠거든요",
            "easy1_desc": "미사일이 원하는 각도로 목표물을 맞히려면 비행 경로를 정교하게 조절해야 하는데요, 이때 미사일의 탐색기가 볼 수 있는 범위인 시야(FOV) 제한을 넘지 않으면서 가속도를 부드럽게 유지하는 게 핵심 과제였어요. 기존 방식으로는 이 두 가지 조건을 동시에 만족시키기가 까다로웠다는 말이에요. 쉽게 말하면, 목표물을 조준하는 시야각을 지키면서도 비행 궤적을 매끄럽게 만드는 게 쉽지 않았던 겁니다.",
            "easy2_title": "비행 경로를 두 단계로 나눠서 정밀하게 조절하는 방법을 찾았어요",
            "easy2_desc": "연구진은 문제를 두 개의 평면으로 쪼개서 해결했는데요, 첫 번째 평면에서는 가상의 목표물을 향해 미사일의 속도 벡터를 정렬하고, 두 번째 평면에서는 시간 변화에 따른 편향 비례 항법(TVBPN)을 써서 원하는 타격 각도를 맞추도록 했어요. 이렇게 하면 시야 제한을 지키면서도 가속도가 갑자기 튀지 않고 부드럽게 연결된다는 장점이 있거든요. 결과적으로 수치 시뮬레이션을 통해 이 방식이 실제로 잘 작동한다는 점을 확인했다는 겁니다.",
            "topic": "미사일이 시야각 제한을 준수하면서 원하는 각도로 목표물을 타격할 수 있도록 하는 새로운 유도 법칙을 제안했어요.",
            "one_line": "시야각 제한을 지키는 3차원 타격 각도 제어 유도 법칙을 개발했어요.",
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
          "canon_id": "2611.20256",
          "title": "Continuous-Time Stochastic Contraction Induced by Common White Noise",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20256"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "확률적으로 움직이는 시스템이 서로 가까워지는지 확인해 봤어요",
            "easy1_desc": "이토 확률 미분 방정식으로 움직이는 시스템들이 시간이 지나면서 서로 얼마나 가까워지는지, 즉 수축하는지를 연구했는데요. 같은 노이즈를 공유하는 두 경로가 시간이 흐를수록 거리가 좁혀지는지 확인하는 게 핵심이에요. 이때 거리를 재는 방법으로 핀슬러 거리를 썼는데, 이게 리만 거리나 일반적인 노름 거리까지 모두 아우르는 방식이라 더 폭넓게 분석할 수 있다는 장점이 있거든요.",
            "easy2_title": "두 가지 수축 개념을 정의하고 시스템의 안정성을 증명했어요",
            "easy2_desc": "연구진은 시스템이 수축하는 방식을 두 가지로 나눴는데요. 하나는 거리의 p번째 모멘트가 지수적으로 줄어드는 L^p-수축이고, 다른 하나는 거의 모든 경로에서 거리가 지수적으로 줄어드는 거의 확실한 수축이에요. 각각의 개념이 성립하기 위한 필요충분조건을 미분 형태로 찾아냈고, 이를 통해 시스템이 입력 변화에 얼마나 안정적인지도 함께 증명해 냈거든요. 쉽게 말하면, 노이즈가 껴도 시스템이 원래 상태로 돌아오려는 성질을 수학적으로 확실히 밝혀낸 셈이에요.",
            "topic": "확률적 동역학 시스템에서 공통 노이즈에 의해 발생하는 수축 성질과 그 안정성을 수학적으로 분석했어요.",
            "one_line": "확률 미분 방정식 시스템의 수축 성질을 수학적으로 규명했어요.",
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
          "canon_id": "2611.20157",
          "title": "Kernel-Guided Learning of Lifted Sparse Polynomial Models of Nonlinear Dynamical Systems",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20157"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 비다항식 시스템을 다항식으로 바꾸려니 문제가 생겼어요",
            "easy1_desc": "물리 시스템을 다항식 모델로 만들면 수학적으로 분석하기가 참 편한데요, 문제는 실제 물리 현상에는 다항식으로 딱 떨어지지 않는 비다항식 형태가 많다는 거예요. 이걸 억지로 다항식 모델에 맞추려고 데이터를 변환해 봤더니, 변환 과정에서 제약 조건 때문에 미분 값들이 서로 얽혀서 계산이 꼬이는 문제가 발생했거든요. 쉽게 말하면, 억지로 끼워 맞추려다 보니 모델이 제대로 작동하지 않는 상황인 겁니다.",
            "easy2_title": "커널 기반 학습으로 모델을 더 똑똑하고 빠르게 만들었어요",
            "easy2_desc": "그래서 연구진은 KINDy라는 새로운 방법을 제안했는데요, 다항식 차수를 무작정 늘려가며 찾는 대신 커널 능선 회귀(kernel ridge regression)를 써서 각 성분의 차수를 먼저 정한 뒤에 희소 회귀(sparse regression)를 적용하는 방식이에요. 이렇게 하면 불필요하게 큰 라이브러리를 다 뒤질 필요가 없어서 계산 속도가 최대 8.5배까지 빨라지거든요. 결과적으로 모델의 복잡도는 줄이면서도 예측 오차는 낮추는 성과를 냈다는 겁니다.",
            "topic": "비선형 동역학 시스템을 효율적으로 모델링하기 위해 커널 기법을 활용한 다항식 모델 학습법을 제안했어요.",
            "one_line": "커널 기법을 활용해 비선형 시스템의 다항식 모델을 효율적으로 학습했어요.",
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
            "tag": "수학·이론",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.20098",
          "title": "A Geometric Observer for Visual-Inertial Odometry using Optical-Flow Constraints",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20098"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "카메라와 관성 센서로 로봇의 움직임을 알아내는 새로운 방법을 찾았어요",
            "easy1_desc": "로봇이 스스로 위치를 파악할 때 카메라 영상에서 얻는 정보와 관성 센서 값을 합치는데요, 기존에는 복잡한 깊이 추정 과정이 필요했다는 게 문제였어요. 연구진은 개별적인 광학 흐름(Optical-flow) 제약 조건만을 활용해서 깊이 정보를 몰라도 로봇의 속도를 계산할 수 있는 기하학적 관측기를 제안했거든요. 쉽게 말하면, 복잡한 계산 과정을 덜어내고도 로봇의 움직임을 정확히 파악할 수 있게 만든 셈이에요.",
            "easy2_title": "복잡한 계산 없이도 로봇의 자세와 속도를 안정적으로 찾아내요",
            "easy2_desc": "제안한 방식은 중력을 보조 상태로 활용해서 로봇의 속도와 중력 오차를 자세 보정 과정과 독립적으로 다룰 수 있게 만들었어요. 덕분에 로봇의 속도와 중력 오차가 전역적으로 빠르게 수렴하는 장점이 있는데요, 대신 특정 조건이 만족되어야만 안정적인 성능을 보장할 수 있다는 점도 같이 따라온다는 겁니다. 결과적으로 로봇이 자신의 위치와 자세를 더 효율적으로 추정할 수 있게 된 셈이에요.",
            "topic": "단안 시각-관성 주행 거리 측정(Visual-Inertial Odometry)을 위해 깊이 추정 없이 광학 흐름 제약 조건을 사용하는 기하학적 관측기 설계에 관한 연구예요.",
            "one_line": "깊이 추정 없이 광학 흐름 제약 조건을 이용해 로봇의 위치를 파악하는 관측기를 설계했어요.",
            "topic_tag": "제어·로봇",
            "limit": "제안한 방식이 안정적으로 수렴하려면 관성 방향과 그 미분 값으로 구성된 행렬이 지속적으로 자극되어야 한다는 조건이 필요해요."
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
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.19970",
          "title": "Physics-Informed Fractional Load Forecasting With Memory-Aware Break Detection for Reserve Scheduling",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19970"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "전력 수요 예측할 때 따로따로 보던 세 가지 효과를 하나로 묶어 봤습니다",
            "easy1_desc": "건물의 열 관성 때문에 생기는 시간 지연과 수요가 갑자기 바뀌는 구조적 변화, 그리고 예측 오차가 누적되는 긴 기억 현상은 보통 따로 계산하곤 하는데요. 연구진은 이 세 가지가 서로 얽혀 있다는 점에 주목해서 이를 통합적으로 모델링하는 방식을 제안했습니다. 뭔 소리냐면, 각각 따로 계산할 때보다 전력망의 예비력을 더 정확하게 잡을 수 있다는 뜻이에요. 쉽게 말하면, 전력 수요 예측의 정확도를 높여서 시스템을 더 안정적으로 운영하려는 시도인 셈입니다.",
            "easy2_title": "예측 오차를 줄이고 저장 장치 용량도 더 효율적으로 관리하게 됐습니다",
            "easy2_desc": "제안한 방식을 뉴잉글랜드와 중부 대서양 지역 데이터에 적용해 봤더니, 기존의 10개 비교 대상 모델보다 평균 절대 백분율 오차를 각각 15.7%와 10.3% 줄이는 성과를 냈습니다. 특히 저장 장치의 에너지 한계를 넘어서는 날이 기존에는 최대 57.5%까지 발생했는데, 이번 모델을 쓰니 8.5% 수준으로 크게 낮아졌다는 거예요. 결과적으로 전력망 운영 시 필요한 예비력을 더 정밀하게 산정할 수 있게 된 겁니다.",
            "topic": "물리적 특성과 기억 현상을 반영한 통합 전력 수요 예측 모델을 통해 예비력 산정의 정확도를 높이는 연구입니다.",
            "one_line": "물리적 특성과 오차 기억 현상을 반영해 전력 수요 예측 정확도를 높였어요.",
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
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.19876",
          "title": "Large Language Model-based Optimization for Wireless Communication: A Survey",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19876"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.19865",
          "title": "Max-Min Throughput in RSMA-Aided SWIPT for Sustainable Internet of Underground Things: A Deep Reinforcement Learning Approach",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19865"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.19852",
          "title": "Sparse Stabilization of Continuous-Time Linear Dynamical Systems",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19852"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "통신 자원을 아끼면서 시스템을 안정시키는 게 중요해요",
            "easy1_desc": "네트워크로 연결된 제어 시스템에서는 통신 자원을 효율적으로 쓰는 게 아주 중요한데요, 데이터를 적게 보내거나 필요할 때만 신호를 보내는 방식이 주로 쓰입니다. 그런데 시스템을 안정시키려면 입력 신호를 어떻게 조절해야 할지 고민이 생기거든요. 이 연구는 시스템의 상태를 제어할 때 입력 신호를 최소한으로만 사용하는 방법을 다루고 있습니다.",
            "easy2_title": "입력 신호를 드문드문 써도 시스템은 안정적으로 유지돼요",
            "easy2_desc": "연구진은 0이 아닌 행이 최대 s개인 피드백 행렬을 여러 개 만들어 시스템을 제어하는 방식을 제안했는데요, 이렇게 하면 입력 신호를 드문드문 써도 시스템이 안정된다는 걸 이론적으로 증명했습니다. 제어에 필요한 에너지도 줄어드는데, 특히 입력 신호의 개수인 s가 커질수록 필요한 제어 에너지는 s의 제곱에 반비례해서 줄어든다는 점이 특징이에요. 덕분에 통신 자원을 훨씬 아낄 수 있게 된 겁니다.",
            "topic": "연속 시간 선형 동역학 시스템을 s개의 희소 입력으로 안정화하는 제어 전략을 제안했어요.",
            "one_line": "희소 입력과 이벤트 트리거 제어로 통신 자원을 절약하며 시스템을 안정화했어요.",
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
            "evidence_by_symbols": 5,
            "bad_numbers": [
              "0"
            ],
            "format": [],
            "flags": [],
            "tag": "제어·로봇",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.19712",
          "title": "Behavioral Denoising: A New Perspective on Nonlinear Behavioral Control Inspired by Closed-Form Diffusion Policies",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19712"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.19482",
          "title": "UACS: Uncertainty-Aware Clustering and Sparse Parameter Estimation for Multi-Condition Wheel Center Force",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19482"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "바퀴 힘을 재는 센서가 비싸고 복잡해서 문제였어요",
            "easy1_desc": "자동차 내구성을 분석하려면 바퀴 중심에 가해지는 힘(WCF)을 알아야 하는데, 이걸 직접 재려면 전용 장비가 필요해서 비용과 복잡도가 크게 늘어납니다. 그래서 대신 소프트 센서라는 걸 쓰기도 하는데요, 문제는 주행 환경이 계속 바뀌고 조건 간의 관계가 불분명해서 정확한 모델을 만들기 어렵다는 겁니다. 쉽게 말하면, 환경이 변할 때마다 일일이 대응하기가 까다롭다는 말이에요.",
            "easy2_title": "환경을 스스로 분류해서 모델을 효율적으로 만들었어요",
            "easy2_desc": "연구진은 UACS라는 새로운 틀을 제안했는데, 이게 뭐냐면 불확실성을 고려해 주행 환경을 스스로 묶고 필요한 매개변수만 골라내는 방식이에요. 먼저 센서 신호로 힘을 추정한 뒤, 통계적인 방법으로 비슷한 환경끼리 묶어서 모델을 최적화하는 거죠. 이렇게 했더니 모델 개수와 매개변수를 줄이면서도 정확도는 그대로 유지할 수 있게 됐다는 겁니다. 결과적으로 기존 방식보다 훨씬 효율적이라고 연구진은 주장했어요.",
            "topic": "다양한 주행 환경에서 바퀴 중심 힘을 효과적으로 추정하기 위해 불확실성을 고려한 클러스터링과 희소 매개변수 추정 기법을 제안한 연구예요.",
            "one_line": "불확실성을 고려한 클러스터링으로 바퀴 중심 힘 추정 모델을 효율화했어요.",
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
          "canon_id": "2611.19469",
          "title": "Representing Differential Inclusions as Monads: A Framework for Compositional Controller Synthesis",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19469"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 로봇 제어기를 하나로 잇는 게 왜 어려운지 따져봤어요",
            "easy1_desc": "하이브리드나 비매끄러운 로봇 시스템에서 안전이 검증된 제어기를 순차적으로 연결하는 연구는 그동안 부분적으로만 다뤄져 왔거든요. 그런데 이런 연결 과정을 하나의 대수적 조건으로 딱 떨어지게 설명하는 틀이 없었다는 게 문제였어요. 뭔 소리냐면, 제어기를 이어 붙일 때마다 안전성을 매번 따로 증명해야 해서 복잡하고 비효율적이었다는 말이에요.",
            "easy2_title": "수학적 구조를 써서 제어기 연결의 안전성을 한 번에 증명했어요",
            "easy2_desc": "연구진은 필리포프 정규 미분 포함(Filippov-regular differential inclusions)을 위한 궤적 모나드(trajectory monad)라는 새로운 수학적 틀을 만들었는데요. 제어기를 사상으로, 순차 실행을 궤적 연결로 처리해서 제어기들을 합쳤을 때 안전한지 확인하는 조건을 단 하나의 대수적 조건으로 단순화한 거예요. 이렇게 하면 제어기들이 공통 하위 모나드에 속하기만 하면 안전성이 보장된다는 장점이 있는데, 기존 방식처럼 장벽을 단계별로 강제할 때보다 훨씬 체계적이라는 겁니다.",
            "topic": "로봇 제어기의 순차적 결합을 위해 궤적 모나드 기반의 대수적 틀을 제안하고 그 안전성을 증명한 연구예요.",
            "one_line": "궤적 모나드를 이용해 로봇 제어기를 안전하게 합성하는 수학적 틀을 만들었어요.",
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
            "bad_numbers": [
              "3000"
            ],
            "format": [],
            "flags": [],
            "tag": "제어·로봇",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.19428",
          "title": "Hydrogen in Practice: A Global Review of Demonstration Projects from Production to Integration",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19428"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "수소 에너지가 탄소 중립을 위해 왜 중요한지 알아봤어요",
            "easy1_desc": "수소 기술은 탄소를 줄이거나 아예 배출하지 않는 에너지원을 통합하는 과정에서 생기는 여러 문제를 해결할 잠재력을 가지고 있는데요. 전 세계적으로 탄소 중립을 달성하기 위한 에너지 시스템으로 전환하는 데 아주 가치 있는 해결책을 제공하고 있거든요. 그래서 각국 정부가 수소 생산과 통합 실증 사업에 큰 관심을 두고 강력하게 지원하고 있다는 말이에요.",
            "easy2_title": "실제 현장에서 수소 기술이 어떻게 쓰이는지 13개 사례로 정리했어요",
            "easy2_desc": "수소 에너지의 중요성은 커지고 있지만, 실제 현장에서 산업적으로 어떻게 적용되는지를 체계적으로 정리한 연구는 아직 부족한 편이었거든요. 그래서 이번 연구에서는 전 세계의 수소 실증 프로젝트 13개를 골라 생산부터 저장, 산업적 활용까지의 핵심 특징을 깊이 있게 분석해 봤습니다. 이 결과를 통해 수소 에너지를 대규모로 보급하는 데 필요한 통찰과 기술적 경로를 제시하려는 겁니다.",
            "topic": "전 세계 수소 실증 프로젝트의 실제 사례를 분석하여 수소 에너지의 대규모 보급을 위한 기술적 방향성을 제시하는 연구입니다.",
            "one_line": "전 세계 수소 실증 프로젝트 13개를 분석해 대규모 보급 경로를 제시했어요.",
            "topic_tag": "발전·재생에너지",
            "limit": "실제 산업 현장에서의 실증 사례를 종합적으로 검토하는 연구가 아직 부족한 상황입니다."
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
          "canon_id": "2611.19426",
          "title": "Fault Diagnosis and Fault-Tolerant Operation Strategy for Triple-Port Hydrogen Production System",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19426"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "수소 생산 장치의 고장 진단이 왜 어려운가",
            "easy1_desc": "수소 생산 시스템의 핵심인 다중 포트 변환기는 에너지 밀도가 높고 활용도가 좋지만, 스위치가 많고 구조가 복잡해서 고장이 나기 쉽거든요. 그런데 기존 방식들은 센서를 너무 많이 써야 하고 정확도도 떨어지는 데다, 여러 스위치가 동시에 고장 나면 제대로 대응하지 못한다는 문제가 있어요. 쉽게 말하면, 고장을 빨리 찾아내고 고쳐서 시스템을 안정적으로 돌릴 만한 마땅한 기술이 없었다는 말이에요.",
            "easy2_title": "고장 나도 멈추지 않는 수소 생산 시스템을 만들었어요",
            "easy2_desc": "연구진은 참새 탐색 알고리즘으로 랜덤 포레스트를 최적화해서, 센서 딱 3개만으로도 여러 스위치의 고장을 정확히 찾아내는 진단법을 제안했는데요. 고장이 나면 보조 스위치를 써서 시스템을 계속 돌리고, 포트끼리 전력을 나눠 쓸 수 있게 해서 효율을 높였거든요. 시뮬레이션과 실험으로 검증해 보니 고장 상황에서도 수소 생산이 안정적으로 유지된다는 걸 확인했다는 겁니다.",
            "topic": "수소 생산용 3포트 변환기의 고장 진단 및 고장 허용 운전 전략에 관한 연구예요.",
            "one_line": "수소 변환기의 고장을 진단하고 대응하는 운전 전략을 개발했어요.",
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
          "canon_id": "2611.19366",
          "title": "Enforcing Ellipsoidal Constraints in Neural Networks with a Polynomial Safety Layer",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19366"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.19272",
          "title": "Distributed Shaping of Robot Swarms Through Spatial Moments of Arbitrary Order",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19272"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇 무리를 원하는 모양으로 만드는 게 어려웠거든요",
            "easy1_desc": "기존에는 로봇 하나하나마다 위치나 거리를 일일이 정해주는 방식을 썼는데요, 이게 로봇 수가 많아지면 계산이 복잡해지고 관리가 힘들다는 단점이 있어요. 연구진은 로봇 개별 위치를 지정하는 대신 로봇 무리 전체의 형태를 수학적인 공간 모멘트(Spatial moments)로 정의해서 모양을 잡는 방식을 제안했어요. 쉽게 말하면 로봇 하나하나를 배치하는 게 아니라 전체적인 윤곽을 먼저 잡고 그 안에서 로봇들이 알아서 움직이게 만든 셈이에요.",
            "easy2_title": "수학적 기법으로 로봇 무리를 정교하게 제어했어요",
            "easy2_desc": "연구진은 로봇 무리가 목표하는 모양을 갖추도록 공간 모멘트를 제어하는 계층적 제어기를 만들었는데요, 낮은 차수의 모멘트부터 순서대로 맞추면서 높은 차수의 모멘트를 더해도 이전 결과가 깨지지 않게 설계했어요. 덕분에 로봇 350대가 비행기 모양을 만드는 실험에서 10차 모멘트까지 성공적으로 구현해 냈거든요. 이 방식은 이웃 로봇과의 통신만으로도 작동하는 분산 제어가 가능해서 실제 환경에서도 효율적으로 쓸 수 있다는 장점이 있어요.",
            "topic": "로봇 무리의 전체적인 형태를 공간 모멘트 제어를 통해 목표 패턴으로 변형하는 분산 제어 기법에 관한 연구예요.",
            "one_line": "공간 모멘트 제어를 통해 로봇 무리의 형태를 원하는 모양으로 변형했어요.",
            "topic_tag": "제어·로봇",
            "limit": "로봇 무리가 안정적으로 형태를 유지하려면 이웃 로봇과의 위치 추정 속도가 충분히 빨라야 한다는 조건이 있어요."
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
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.19252",
          "title": "Exploration as Feedback in Model Predictive Path Integral Control",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19252"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "탐색 범위를 줄이면 왜 제어기가 불안정해질까",
            "easy1_desc": "모델 예측 경로 적분(MPPI) 제어는 이전 해답을 바탕으로 후보군을 뽑아 최적의 제어 값을 찾는데요, 이때 탐색 범위를 좁히면 계산 효율은 좋아지지만 제어기가 불안정해질 수 있다는 의문이 계속 제기되어 왔거든요. 연구진이 선형 이차(LQ) 문제를 분석해 봤더니, 탐색 범위가 곧 피드백 이득을 결정하는 구조라 탐색을 너무 줄이면 시스템을 안정화하지 못한다는 사실을 밝혀냈습니다. 쉽게 말하면, 탐색과 안정화라는 두 마리 토끼를 동시에 잡기 어려운 구조라는 말이에요.",
            "easy2_title": "안정화 부분 공간을 따로 떼어내 효율을 높였어요",
            "easy2_desc": "그래서 연구진은 안정화에 필요한 제어 입력값만 따로 계산하고 나머지만 샘플링하는 안정화 부분 공간 MPPI(SS-MPPI)라는 방식을 제안했는데요, 이렇게 하면 탐색 범위를 작게 유지하면서도 시스템을 안정적으로 제어할 수 있게 됩니다. 실제로 거꾸로 선 진자와 사족 보행 로봇 시뮬레이션에서 확인해 봤더니, 기존 MPPI는 탐색이 적을 때 실패했지만 SS-MPPI는 적은 샘플로도 안정적인 성능을 보였다는 거예요. 효율성과 안정성 사이의 갈등을 해결했다는 점에서 의미가 큽니다.",
            "topic": "모델 예측 경로 적분(MPPI) 제어에서 탐색 범위와 안정성 사이의 구조적 갈등을 분석하고 이를 해결하기 위한 새로운 제어 기법을 제시했어요.",
            "one_line": "MPPI 제어의 안정성 문제를 해결하는 SS-MPPI 기법을 제안했어요.",
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
          "canon_id": "2611.19245",
          "title": "Integrated Co-design Framework for High-Efficiency Assembly and Integration of Small Satellites",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19245"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "소형 위성을 더 빨리 많이 만들어야 하는 상황이거든요",
            "easy1_desc": "요즘 소형 위성 군집을 띄우는 일이 많아지면서 위성을 더 빠르게 생산하고 비용도 낮춰야 하는 상황이 됐는데요. 위성을 조립하고 통합해서 시험하는 과정인 AIT가 그만큼 중요해진 겁니다. 그런데 기존 방식으로는 생산 효율을 높이는 데 한계가 있다는 게 문제라는 말이에요.",
            "easy2_title": "조립과 설계를 하나로 합쳐서 생산 효율을 높여 봤습니다",
            "easy2_desc": "연구진은 65kg급 루멜라이트-5(Lumelite-5) 위성을 만들면서 설계 단계부터 조립과 시험 과정을 고려하는 통합 방식을 적용했는데요. 위성 옆면에 서비스 인터페이스를 모으고, 껍데기를 열어도 부품이 고정되도록 뼈대 구조를 새로 설계한 겁니다. 덕분에 내부 배선을 점검하거나 고치는 작업이 훨씬 쉬워졌고, 위성 뚜껑을 180도까지 열 수 있는 경첩 장치를 써서 조립 효율을 크게 높였다고 주장했어요.",
            "topic": "소형 위성의 생산성을 높이기 위해 위성 구조와 조립·시험 과정을 설계 단계부터 통합하는 방식을 제안했어요.",
            "one_line": "소형 위성 조립 효율을 높이려 설계와 조립 과정을 통합했어요.",
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
          "canon_id": "2611.19212",
          "title": "Site-Specific Cell Shaping: An Agentic Framework",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19212"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "6G 네트워크에서 기지국 커버리지를 조절하는 게 왜 어려운가",
            "easy1_desc": "6세대 이동통신인 6G 네트워크를 설계할 때 기지국(BS)의 안테나 설정을 바꾸어 신호 범위와 간섭을 조절하는 셀 셰이핑이 중요한데요. 기존에는 안테나 설정을 하나씩 바꿀 때마다 비용이 많이 드는 성능 평가를 일일이 거쳐야 했다는 문제가 있었거든요. 쉽게 말하면, 최적의 설정을 찾기 위해 매번 비싼 계산 과정을 반복해야 해서 효율이 떨어졌다는 말이에요.",
            "easy2_title": "AI 에이전트가 스스로 경험을 쌓아 안테나를 최적화합니다",
            "easy2_desc": "연구진은 사람이 개입하지 않아도 스스로 안테나 설정을 개선하는 에이전트 기반 프레임워크를 제안했는데요. 설정 에이전트가 상황 정보를 바탕으로 제안을 내놓으면, 광선 추적(RT) 기반 평가자가 이를 분석하고 반성 에이전트가 부족한 점을 진단해 경험을 쌓는 구조예요. 이 과정을 반복했더니 사람이 직접 관여하지 않고도 안테나 설정을 점진적으로 정교하게 다듬을 수 있게 됐다는 겁니다. 결과적으로 기존 방식보다 통신이 끊길 확률인 아웃티지 확률이 더 낮아졌다고 연구진은 주장했어요.",
            "topic": "6G 무선 네트워크 계획에서 안테나 설정을 지능적으로 최적화하기 위한 에이전트 기반 프레임워크를 제안했어요.",
            "one_line": "6G 네트워크의 안테나 설정을 최적화하는 에이전트 기반 프레임워크를 제안했어요.",
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
          "canon_id": "2611.19194",
          "title": "Generalization Testing of Grid Foundation Models for Power Flow and Optimal Power Flow",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19194"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "전력망 모델이 새로운 환경에서도 잘 작동할지 확인해 봤어요",
            "easy1_desc": "최근 전력 흐름을 계산하는 기반 모델(FM)에 관심이 많은데, 정작 이 모델들이 학습하지 않은 새로운 상황에서도 정확하게 작동하는지는 제대로 검증된 적이 없었거든요. 그래서 연구진은 학습한 전력망과 다른 구조나 부하 수준을 가진 환경에서 모델이 얼마나 잘 버티는지 확인하는 세 가지 기준을 세워 봤습니다. 쉽게 말하면, 모델이 낯선 환경에서도 똑똑하게 답을 내놓는지 시험해 본 셈이에요.",
            "easy2_title": "시험해 보니 학습 범위를 벗어나면 성능이 뚝 떨어지더라고요",
            "easy2_desc": "GENCO, LUMINA, GridSFM 같은 모델들을 기존 DC 방식과 비교해 봤더니, 전력망에 선로를 추가하거나 학습 범위를 넘어서는 부하가 걸릴 때 성능이 눈에 띄게 나빠지는 걸 확인했습니다. 특히 새로운 전력망에서는 모델들이 학습한 데이터와 거리가 멀어질수록 계산 능력이 급격히 떨어지는 모습을 보였거든요. 연구진은 이런 모델들이 단순히 답을 내놓는 게 아니라, 실제로는 추가적인 데이터와 계산 자원이 필요한 메타 모델처럼 작동한다고 주장했습니다.",
            "topic": "전력망 기반 모델(FM)의 일반화 성능을 세 가지 축으로 검증하고 그 한계를 분석한 연구입니다.",
            "one_line": "전력망 기반 모델의 일반화 성능을 세 가지 기준으로 시험하고 그 한계를 분석했어요.",
            "topic_tag": "전력망·계통",
            "limit": "학습 범위를 벗어난 환경에서는 모델이 추가적인 데이터와 계산 자원을 요구한다는 한계가 있습니다."
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
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.19187",
          "title": "A Unified Control Framework, Mathematical Model, and Five-layer Closed-loop Case Study for Embodied Intelligence Control Systems",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19187"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "몸을 가진 지능은 어떻게 움직여야 하는가",
            "easy1_desc": "몸을 가진 지능(Embodied intelligence)은 환경과 직접 부딪히며 인지하고 행동하는 시스템을 말하는데요, 이를 위해서는 인식과 학습, 물리적 실행까지 모든 과정을 하나로 묶는 제어 체계가 필요합니다. 하지만 지금까지는 이 모든 것을 아우르는 단 하나의 표준화된 틀이 없었다는 게 문제였거든요. 연구진은 과연 통합된 틀이 존재하는지, 그리고 그 수학적 모델은 어떻게 하나로 합쳐질 수 있는지 질문을 던져 봤습니다.",
            "easy2_title": "다섯 단계로 나눈 통합 제어 체계로 성능을 확인했다",
            "easy2_desc": "연구진은 제어와 확률적 추론을 수학적으로 연결해 통합된 제어 틀을 제시했는데요, 이를 단일 링크 조작기(Single-link manipulator)에 적용해 5단계 폐루프(Closed-loop) 사례 연구를 수행했습니다. 그 결과 추적 오차(RMSE)는 0.0218 rad 수준이었고, 모델 오차는 5 x 10^-6 rad에 가까울 정도로 정밀하게 작동했다는 겁니다. 쉽게 말하면, 복잡한 제어 과정을 5개 층으로 나누어 체계적으로 구현함으로써 안정적인 성능을 확보했다는 말이에요.",
            "topic": "몸을 가진 지능을 위한 통합 제어 프레임워크와 수학적 모델, 그리고 5단계 사례 연구에 관한 연구입니다.",
            "one_line": "몸을 가진 지능을 위한 통합 제어 틀을 만들고 5단계 사례로 검증했어요.",
            "topic_tag": "제어·로봇",
            "limit": "증명 가능한 안정성과 안전성을 확보하는 것이 이 분야에서 가장 해결하기 어려운 과제로 남아 있습니다."
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
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.19124",
          "title": "ANCHOR: A Port-Hamiltonian Model for Forecasting Team Dynamics in Human-in-the-Loop Systems",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19124"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.19088",
          "title": "Reliable Conditioned Hamilton-Jacobi Reachability via Subsolution Learning on Exact Local Windows",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19088"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.19025",
          "title": "Distance-Certified Safe Control in Unknown Environments via Spatio-Temporal Composition of Gaussian Processes",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19025"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "모르는 환경에서 장애물을 피하는 게 어려웠거든요",
            "easy1_desc": "로봇이나 자율주행 기기가 처음 가 보는 장소에서 움직일 때, 장애물이 어디 있는지 정확히 알기 어렵다는 게 문제였는데요. 기존 방식은 장애물을 파악하는 데 시간이 걸리거나 계산이 복잡해서 실시간으로 대응하기가 까다로웠거든요. 쉽게 말하면, 주변 환경이 계속 변하는데도 안전 거리를 확실하게 지키면서 움직이기가 쉽지 않았다는 말이에요.",
            "easy2_title": "가우시안 프로세스를 써서 안전 거리를 확실히 지키게 했어요",
            "easy2_desc": "연구진은 가우시안 프로세스(GP)라는 통계적 방법을 써서 장애물 정보를 공간과 시간으로 나누어 처리하는 방식을 제안했는데요. 점 구름(Point cloud) 데이터를 활용해 장애물 경계를 부드럽게 연결하고, 계산이 복잡한 행렬 역연산을 피해서 실시간성을 높였다는 거예요. 덕분에 움직이는 장애물이 있어도 미리 정해둔 안전 거리를 유지하며 안전하게 제어할 수 있게 됐는데, 시뮬레이션 결과 정적 장애물뿐만 아니라 움직이는 장애물 환경에서도 효과가 입증됐다고 밝혔습니다.",
            "topic": "알 수 없는 환경에서 가우시안 프로세스 기반의 시공간 구성을 통해 장애물과의 안전 거리를 보장하는 제어 프레임워크를 제안했어요.",
            "one_line": "가우시안 프로세스를 활용해 미지의 환경에서 안전 거리를 보장하는 제어법을 개발했어요.",
            "topic_tag": "제어·로봇",
            "limit": "문제 해결이 가능한 조건이 충족될 때만 안전 제어가 보장된다는 한계가 있습니다."
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
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.19000",
          "title": "Lie Group Structure of Six Degree-of-Freedom Rigid-Body Uncertainty Representation and Propagation",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19000"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.18978",
          "title": "Bayesian Learning of Uncertain Linear System Behaviours",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18978"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "데이터에 섞인 잡음 때문에 시스템의 움직임을 정확히 알기 어려웠어요",
            "easy1_desc": "선형 동적 시스템(Linear dynamical systems)을 다룰 때 입력과 출력 데이터에 잡음이 섞여 있으면 시스템이 어떻게 움직일지 확실하게 파악하기가 어려운데요. 기존에는 시스템의 행동을 부분 공간(Subspace)으로 나타내곤 했는데, 데이터가 불확실하면 이 공간 자체도 흔들릴 수밖에 없거든요. 결국 시스템의 미래를 예측할 때 오차가 커질 수 있다는 문제가 있었던 겁니다.",
            "easy2_title": "확률을 써서 시스템의 불확실성을 기하학적으로 계산해 냈어요",
            "easy2_desc": "연구진은 베이지안 학습(Bayesian learning)을 도입해서 시스템 행동의 불확실성을 그래스만 다양체(Grassmann manifold) 위의 확률 분포로 나타냈는데요. 이렇게 하면 복잡한 시스템의 행동을 기하학적인 관점에서 추론할 수 있게 됩니다. 덕분에 잡음이 섞인 데이터에서도 시스템의 행동을 더 정교하게 추정할 수 있고, 이 결과를 바탕으로 제어까지 이어갈 수 있다는 장점이 있어요.",
            "topic": "잡음이 있는 데이터로부터 선형 동적 시스템의 행동을 베이지안 방식으로 학습하고 불확실성을 정량화하는 기법에 관한 연구예요.",
            "one_line": "베이지안 학습으로 선형 시스템의 불확실성을 기하학적으로 추론했어요.",
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
          "canon_id": "2611.18896",
          "title": "Learn Locally, Extend Globally: Koopman Eigenfunctions and the Basin of Attraction",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18896"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.17834",
          "title": "PaperCritic: Training AI Reviewers to Assess the Soundness of Papers",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.17834",
            "arxiv": "https://arxiv.org/abs/2611.17834"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 28,
          "score": 3.8,
          "score_why": "추천 28 → +2.8 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 논문을 평가하게 하려니 주관적인 기준이 문제였어요",
            "easy1_desc": "AI 학회에 제출되는 논문이 너무 많아지면서 사람이 하던 논문 심사를 AI로 대신하려는 시도가 늘고 있는데요. 단순히 사람의 심사 방식을 흉내 내는 것만으로는 부족한데, 논문의 타당성뿐만 아니라 흥미로움이나 명확성 같은 주관적인 요소까지 평가해야 하기 때문이에요. 쉽게 말하면, AI가 객관적인 기준을 잡지 못하고 사람의 주관까지 따라 하려다 보니 심사의 질이 떨어질 수 있다는 겁니다.",
            "easy2_title": "논문의 타당성만 집중적으로 평가하도록 AI를 훈련했어요",
            "easy2_desc": "연구진은 가장 중요하고 객관적인 기준인 '타당성' 평가에만 집중하기로 했는데요. 심사 내용의 정확도인 정밀도와 중요한 지적 사항을 얼마나 잘 찾아내는지를 나타내는 재현율을 동시에 높이는 방향으로 AI를 학습시켰어요. 그 결과로 탄생한 페이퍼크리틱(PaperCritic)은 기존 모델들보다 더 뛰어난 성능을 보였고, 심지어 논문 심사 외에 코드나 법률 계약서 검토 같은 다른 분야까지 활용할 수 있다는 점을 확인했거든요.",
            "topic": "논문의 타당성을 객관적으로 평가하기 위해 정밀도와 재현율을 최적화하는 AI 심사 모델 페이퍼크리틱을 개발하고 검증한 연구예요.",
            "one_line": "논문 타당성 평가를 위한 AI 모델을 개발하고 성능을 검증했어요.",
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
          "canon_id": "2611.20254",
          "title": "VoxMel TTS Technical Report",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.20254",
            "arxiv": "https://arxiv.org/abs/2611.20254"
          },
          "published": "2026-11-15",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 22,
          "score": 3.2,
          "score_why": "추천 22 → +2.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식은 복잡한 인코더 때문에 음질이 떨어지는 문제가 있었어요",
            "easy1_desc": "연속적인 자기회귀 방식의 음성 합성(TTS)은 안정적인 모델링을 위해 압축된 표현을 쓰는데요, 이때 복잡한 신경망 인코더를 사용하다 보니 생성되는 음성의 품질이 제한되는 문제가 있었거든요. 반대로 멜-스펙트로그램 같은 학습이 필요 없는 대상을 쓰면 인코더 부담은 줄지만, 자기회귀 생성에 활용하는 연구는 부족한 상황이었어요. 쉽게 말하면, 성능을 높이려니 모델이 너무 복잡해지고, 단순하게 가려니 성능이 안 나오는 딜레마가 있었다는 겁니다.",
            "easy2_title": "하르 변환을 써서 인코더 없이도 안정적인 모델링이 가능해졌어요",
            "easy2_desc": "연구진은 복잡한 인코더 대신 고정된 하르 변환(Haar transform)을 사용하는 VoxMel이라는 새로운 틀을 제안했는데요, 이 방식은 멜-스펙트로그램을 주파수와 시간 축으로 분해해서 모델링하기 쉽게 만들어 줍니다. 언어 모델 기반의 본체로 핵심 정보를 먼저 생성한 뒤, 나머지 잔차 정보를 비자기회귀 방식으로 덧붙이는 구조거든요. 덕분에 인코더 없이도 안정적인 학습이 가능해졌고, 10만 시간 분량의 데이터를 학습해 성능까지 확보했다는 게 연구진의 설명이에요.",
            "topic": "VoxMel은 하르 변환을 활용해 인코더 없이도 고품질 음성을 생성하는 자기회귀 기반의 음성 합성 프레임워크예요.",
            "one_line": "하르 변환을 이용해 인코더 없는 자기회귀 음성 합성 모델을 개발했어요.",
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
          "canon_id": "2611.19564",
          "title": "Behavioral Assurance for Socially Deployed AI Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19564"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "키워드 1개(battery) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "battery"
          ],
          "ai": {
            "easy1_title": "AI가 상황마다 제멋대로 행동하는 게 문제였어요",
            "easy1_desc": "사람과 직접 소통하는 AI 에이전트가 늘어나고 있는데, 이들이 다양한 상황에서 의도한 대로 일관성 있게 행동하는지 확인하기가 어려웠거든요. 기존의 평가 방식으로는 AI가 여러 환경을 거치며 어떻게 변하는지 제대로 보장할 수 없다는 한계가 있었던 겁니다. 쉽게 말하면, AI가 겉모습만 그럴듯할 뿐 실제 행동은 상황에 따라 들쑥날쑥할 위험이 있다는 말이에요.",
            "easy2_title": "행동을 5가지 축으로 나누어 일관성을 측정해 봤어요",
            "easy2_desc": "그래서 연구진은 AI 에이전트의 행동을 5가지 측정 가능한 축으로 정의하고, 6가지 사회적 상호작용 상황에서 이를 평가하는 새로운 틀을 만들었습니다. 특정 페르소나를 설정해 실험의 기준으로 삼았더니, AI가 상황이 바뀌어도 의도한 행동 차이를 유지하는지 체계적으로 확인할 수 있게 됐거든요. 단순히 말투만 바꾸는 게 아니라 행동 자체가 일관적인지 측정할 수 있다는 장점이 있습니다.",
            "topic": "사회적으로 배치된 AI 에이전트가 다양한 상황에서 의도한 대로 일관되게 행동하는지 측정하는 평가 프레임워크를 제안했어요.",
            "one_line": "AI 에이전트의 행동 일관성을 측정하는 평가 체계를 개발했어요.",
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
          "canon_id": "2611.19116",
          "title": "A Hybrid State Space-Attention Architecture for Forecasting the Trajectories of Battery Degradation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19116"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "키워드 1개(battery) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "battery"
          ],
          "ai": {
            "easy1_title": "배터리 수명을 미리 예측하는 게 왜 어려운가요",
            "easy1_desc": "배터리가 얼마나 오래갈지 초기 데이터만 보고 예측하면 검사 시간을 몇 달에서 며칠로 확 줄일 수 있는데요. 그런데 새로운 배터리 종류가 나오거나 데이터가 부족하면 정확도가 떨어지는 문제가 있었거든요. 게다가 기존의 뛰어난 모델들은 너무 크고 복잡해서 계산 효율이 낮거나 특정 조건에서만 잘 작동한다는 한계가 있었던 겁니다.",
            "easy2_title": "가볍고 똑똑한 새 모델로 정확도를 높였습니다",
            "easy2_desc": "연구진은 DecayFormer라는 새로운 모델을 만들었는데, 상태 공간 모델과 어텐션 구조를 합쳐서 가볍게 만든 게 핵심이에요. 이 모델은 배터리 충전 상태 통계와 수명 곡선을 함께 계산해서 더 정확하게 예측할 수 있거든요. 복잡한 튜닝 없이도 다양한 배터리 종류에서 좋은 성능을 냈는데, 쉽게 말하면 모델을 억지로 크게 키우지 않아도 충분히 정밀한 예측이 가능하다는 걸 보여준 셈이에요.",
            "topic": "배터리 수명 예측을 위해 상태 공간 모델과 어텐션 구조를 결합한 DecayFormer 모델을 제안하고 그 성능을 검증했어요.",
            "one_line": "하이브리드 구조를 활용해 배터리 수명 예측 모델을 개발했어요.",
            "topic_tag": "배터리·저장",
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
            "tag": "배터리·저장",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.20882",
          "title": "Accelerate Bench: Evaluating Agents for Application-Level Program Optimization",
          "field": "cs.AI",
          "sources": [
            "cs.AI",
            "허깅페이스"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20882",
            "hf": "https://huggingface.co/papers/2611.20882"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 16,
          "score": 2.6,
          "score_why": "추천 16 → +1.6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "코딩 에이전트가 프로그램을 얼마나 잘 고치는지 평가하기가 어려웠어요",
            "easy1_desc": "프로그램 최적화는 단순히 코드 한 줄을 바꾸는 게 아니라 전체를 조율해야 하는 복잡한 과정이거든요. 그런데 기존에는 이런 에이전트들의 실력을 제대로 잴 수 있는 기준이 마땅치 않았다는 문제가 있었어요. 그래서 연구진은 과학 계산이나 슈퍼컴퓨팅 분야에서 가져온 32가지 최적화 과제를 모아 평가 도구인 Accelerate Bench를 만들었다는 겁니다.",
            "easy2_title": "에이전트마다 성능 차이가 뚜렷하게 나타났어요",
            "easy2_desc": "이 도구로 16개 코딩 에이전트를 시험해 봤더니, 과제를 해결하는 성공률인 Score@1이 25.5%에서 67.4%까지 다양하게 나왔거든요. 특히 상위 에이전트 두 곳은 32개 과제 중 22개 이상에서 속도를 2배 넘게 높였지만, 나머지는 그보다 낮은 성적을 보였다는 거예요. 쉽게 말하면, 에이전트가 코드를 얼마나 유기적으로 잘 조율하느냐에 따라 성능 차이가 크게 벌어진다는 사실을 확인한 셈이에요.",
            "topic": "프로그램 최적화 작업을 수행하는 코딩 에이전트의 성능을 평가하기 위해 Accelerate Bench라는 벤치마크를 제안하고 그 결과를 분석했어요.",
            "one_line": "프로그램 최적화 에이전트를 평가하는 벤치마크를 개발하고 성능을 분석했어요.",
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
          "canon_id": "2611.17110",
          "title": "SALA: Semantically Aligned Latent Actions Enable Dual-Axis Scaling of Embodied Foundation Models",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.17110",
            "arxiv": "https://arxiv.org/abs/2611.17110"
          },
          "published": "2026-11-15",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 13,
          "score": 2.3,
          "score_why": "추천 13 → +1.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "사람 영상으로 로봇을 가르치려니 행동이 겉돌았거든요",
            "easy1_desc": "로봇을 제어하는 모델을 만들 때 로봇이 직접 움직인 데이터는 모으기가 너무 비싸서, 사람이 찍은 영상을 대신 활용하는 방법을 많이 써 왔는데요. 기존의 잠재 행동 모델(LAM)들은 영상의 겉모습만 보고 행동을 학습하다 보니, 정작 사람의 행동과 로봇의 행동을 제대로 연결하지 못하는 문제가 있었거든요. 쉽게 말하면, 눈에 보이는 모습은 비슷해도 실제 로봇이 수행해야 할 동작과는 거리가 멀어지는 셈이에요.",
            "easy2_title": "언어 설명으로 행동의 의미를 맞춰서 성능을 높였어요",
            "easy2_desc": "연구진은 SALA라는 새로운 방식을 도입해서 사람과 로봇의 행동을 의미적으로 연결했는데요. 짝을 이룬 데이터가 없어도 사람과 로봇 영상에 붙은 언어 설명을 활용해 두 행동 사이의 유사도를 계산하고, 이를 통해 사람의 잠재 행동을 로봇의 행동 공간으로 자연스럽게 유도한 겁니다. 이렇게 하면 로봇이 사람의 영상을 보고도 더 정확하게 동작을 따라 할 수 있게 되거든요. 결과적으로 사람 영상 데이터를 많이 쓸수록 로봇의 작업 성공률이 높아지는 효과를 얻었다는 거예요.",
            "topic": "SALA는 언어 설명을 활용해 사람과 로봇의 잠재 행동 공간을 정렬함으로써 로봇 학습의 효율과 성능을 높이는 방법론이에요.",
            "one_line": "언어 정보를 활용해 사람과 로봇의 행동을 정렬하는 SALA 모델을 개발했어요.",
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
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.20986",
          "title": "Calpha: Toward Native Biomolecular Intelligence in a General-Purpose Language Model",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.20986",
            "arxiv": "https://arxiv.org/abs/2611.20986"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 11,
          "score": 2.1,
          "score_why": "추천 11 → +1.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "단백질 구조 예측과 언어 모델이 따로 놀고 있었어요",
            "easy1_desc": "지금까지는 단백질 구조를 예측하는 모델과 자연어를 이해하는 거대 언어 모델(LLM)이 서로 다른 영역에서만 작동해 왔는데요. 단백질 구조 예측 모델은 구조를 잘 맞히지만 언어 추론은 못 하고, 반대로 언어 모델은 추론은 잘하지만 구조 예측 능력은 없다는 한계가 있었거든요. 쉽게 말하면 두 모델이 서로의 장점을 전혀 활용하지 못하고 따로따로 움직이고 있었다는 말이에요.",
            "easy2_title": "언어 모델이 직접 단백질 구조를 그리게 만들었어요",
            "easy2_desc": "연구진은 단백질 서열과 구조를 이해하면서 언어 추론 능력까지 갖춘 통합 모델인 Calpha를 제안했는데요. Qwen3.5-9B 모델에 단백질 서열 정보를 입력하고, 필요할 때 구조 예측 헤드를 호출해 단백질 구조를 출력하도록 설계했어요. 그 결과 단백질 구조를 예측하는 데 성공했지만, 기존 언어 모델이 가진 일반 지식 성능은 다소 떨어지는 모습을 보였다는 겁니다.",
            "topic": "단백질 구조 예측 기능을 거대 언어 모델 내부에 통합하여 단일 사슬 단백질 구조를 생성하는 Calpha 모델의 초기 연구 결과예요.",
            "one_line": "거대 언어 모델이 단백질 구조를 직접 예측하도록 통합 모델을 설계했어요.",
            "topic_tag": "의료·바이오",
            "limit": "복합체 예측, 구조 이해, 그리고 언어 추론이 구조 예측에 미치는 영향은 아직 해결해야 할 과제로 남아 있어요."
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
          "canon_id": "2611.21339",
          "title": "MovieRoll: A Systematic Framework for Rolling Out Long-Form Videos",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.21339",
            "arxiv": "https://arxiv.org/abs/2611.21339"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 10,
          "score": 2.0,
          "score_why": "추천 10 → +1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "영상 길이를 늘릴 때 생기는 화질 저하와 메모리 문제를 해결했어요",
            "easy1_desc": "영상을 길게 만들다 보면 이전 장면을 기억하는 메모리 비용이 커지고 화질도 떨어지는 문제가 생기는데요, 연구진은 이를 해결하기 위해 MovieRoll이라는 새로운 틀을 제안했습니다. 이 방식은 학습된 내용을 바탕으로 긴 영상을 끊김 없이 생성하도록 돕는 역할을 해요. 쉽게 말하면, 영상이 길어져도 품질을 유지하면서 메모리 부담을 줄이는 기술인 셈입니다.",
            "easy2_title": "메모리는 줄이고 영상 품질은 높이는 효율적인 생성 방식을 찾았어요",
            "easy2_desc": "연구진은 계층적 캐시 압축 기술인 HieraKV를 써서 메모리 사용량을 최대 78%까지 줄이면서도 영상의 품질을 높이는 데 성공했습니다. 또한 여러 단계의 학습 과정을 거쳐 짧은 영상 학습만으로도 60초 이상의 긴 영상을 자연스럽게 만들어낼 수 있게 되었는데요, 이전보다 훨씬 효율적으로 긴 영상을 생성할 수 있다는 점이 가장 큰 변화입니다.",
            "topic": "긴 영상을 끊김 없이 생성하기 위해 학습부터 추론까지 체계적인 프레임워크인 MovieRoll을 개발했습니다.",
            "one_line": "긴 영상 생성을 위해 학습과 추론을 통합한 MovieRoll 프레임워크를 제안했어요.",
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
          "canon_id": "2611.20404",
          "title": "Latent Feedback Is a Compute and Data Amplifier",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.20404",
            "arxiv": "https://arxiv.org/abs/2611.20404"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 6,
          "score": 1.6,
          "score_why": "추천 6 → +0.6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "데이터가 부족할 때 반복 학습만 하는 건 효율이 떨어집니다",
            "easy1_desc": "고품질 데이터가 바닥나면 보통 같은 데이터를 여러 번 반복해서 학습시키곤 하는데요, 반복할수록 학습 효과는 점점 줄어드는 문제가 있거든요. 연구진은 이런 상황에서 단순히 반복 학습을 하는 대신, 각 토큰의 상태를 다음 토큰 입력으로 넘겨주는 잠재 피드백(Latent feedback) 방식을 써 봤습니다. 이게 기존 트랜스포머(Transformer) 모델보다 같은 연산량을 썼을 때 더 나은지 확인해 본 거예요.",
            "easy2_title": "잠재 피드백을 쓰면 연산과 데이터를 훨씬 알뜰하게 쓸 수 있습니다",
            "easy2_desc": "실제로 실험해 보니 잠재 피드백 방식은 연산 효율을 높여주는 증폭기 역할을 한다는 사실을 확인했는데요, 같은 데이터를 써도 더 적은 연산으로 목표 성능에 도달하고, 같은 횟수로 학습해도 더 적은 데이터로 같은 결과를 낸다는 거예요. 최대 48%의 연산량과 47%의 데이터를 아낄 수 있다는 점이 큰 장점인데, 데이터가 부족한 상황일수록 이 방식이 훨씬 유리하다는 겁니다.",
            "topic": "잠재 피드백 방식이 모델 학습에서 연산과 데이터 효율을 어떻게 높이는지 분석한 연구입니다.",
            "one_line": "잠재 피드백을 도입해 모델 학습의 연산과 데이터 효율을 높였습니다.",
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
          "canon_id": "2611.18919",
          "title": "Correcting Persistent Failures in Point-Cloud Grasping Policies using Human Demonstrations in Virtual Reality",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.18919",
            "arxiv": "https://arxiv.org/abs/2611.18919"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 6,
          "score": 1.6,
          "score_why": "추천 6 → +0.6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇이 물건을 집을 때 왜 자꾸 실패하는 걸까",
            "easy1_desc": "로봇이 처음 보는 물건을 집으려면 깊이 센서로 얻은 점구름(Point cloud) 정보가 필요한데요, 기존의 방식인 Contact-GraspNet은 물건을 실제로 들어 올릴 수 있는지보다는 그럴듯한 위치를 찾는 데 집중하는 경향이 있어요. 강화학습(RL)을 쓰면 성공률을 높일 수 있지만, 특정 물건을 집는 상황에서는 여전히 계속 실패하는 문제가 발생하거든요. 쉽게 말하면, 전체적인 실력은 좋아져도 특정 상황에서는 로봇이 계속 헛손질을 한다는 말이에요.",
            "easy2_title": "사람이 가상현실에서 직접 도와주니 성공률이 확 올랐어",
            "easy2_desc": "그래서 연구진은 로봇이 계속 실패하는 상황만 골라내서 사람이 가상현실(VR)에서 직접 물건을 집어 보여주는 방식을 도입했는데요, 사람이 집는 위치를 알려주면 로봇은 그 정보를 학습해 자신의 접근 방식을 스스로 결정하는 겁니다. 이렇게 58번의 사람 시연을 추가했더니, 강화학습만으로는 24%였던 어려운 상황의 성공률이 45%까지 거의 두 배로 뛰었다는 거예요. 새로운 물건에 대한 성공률은 유지하면서도 로봇이 어려워하던 부분만 콕 집어 실력을 키운 셈이에요.",
            "topic": "로봇이 점구름 기반으로 물건을 집는 정책에서 강화학습의 한계를 사람이 가상현실 시연으로 보완하는 방법이에요.",
            "one_line": "가상현실 사람 시연을 활용해 로봇의 물건 집기 실패를 보완했어요.",
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
          "canon_id": "2611.20385",
          "title": "DominoBench: Evaluating Multi-Step Physical Reasoning from Still Images",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.20385",
            "arxiv": "https://arxiv.org/abs/2611.20385"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 5,
          "score": 1.5,
          "score_why": "추천 5 → +0.5 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "멀티모달 모델이 물리 현상을 제대로 예측하는지 확인해 봤습니다",
            "easy1_desc": "최근 영상과 언어를 다루는 멀티모달 모델들이 물리 문제를 잘 푼다고 알려져 있는데요, 연구진은 이 모델들이 도미노나 시소 같은 물리적 상황에서 공이 움직인 뒤 어떤 결과가 나올지 정말로 예측할 수 있는지 궁금해졌거든요. 그래서 10개 모델 계열의 30개 모델을 대상으로 실험해 봤더니, 도움 없이 스스로 결과를 정확히 맞히는 모델은 사실상 없다는 결론이 나왔습니다. 쉽게 말하면, 겉으로는 물리 현상을 잘 설명하는 것처럼 보여도 실제 물리적 인과관계는 제대로 파악하지 못한다는 거예요.",
            "easy2_title": "물리적 상황을 정확히 판단하려면 계산 과정이 필수적입니다",
            "easy2_desc": "연구진은 도미노 벤치마크(DominoBench)라는 평가 도구를 만들어 모델들의 성능을 측정했는데요, 모델들에게 힌트를 주거나 계산 과정을 직접 알려줬더니 성능이 82~92%까지 올라가는 결과가 나왔습니다. 반면 아무런 정보 없이 스스로 물리적 수치를 계산해야 할 때는 성능이 크게 떨어졌거든요. 결국 모델들이 물리적 상황을 이해하는 것처럼 보여도, 정작 중요한 물리적 수치를 스스로 계산해 내지는 못한다는 점을 확인한 셈이에요. 물리 세계에서 활동하는 모델이라면 스스로 계산을 수행할 수 있어야 한다는 게 연구진의 주장입니다.",
            "topic": "멀티모달 모델의 다단계 물리 추론 능력을 평가하기 위한 벤치마크인 도미노 벤치마크를 제안하고 모델들의 한계를 분석했어요.",
            "one_line": "멀티모달 모델의 물리 추론 능력을 평가하는 벤치마크를 만들고 한계를 분석했어요.",
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
          "canon_id": "2611.19537",
          "title": "Continuation-Guided LLM Evolution of Program Policies and Goal Compilers in Craftax",
          "field": "cs.AI",
          "sources": [
            "cs.AI",
            "허깅페이스"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19537",
            "hf": "https://huggingface.co/papers/2611.19537"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 5,
          "score": 1.5,
          "score_why": "추천 5 → +0.5 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "긴 작업을 시킬 때 코딩 에이전트가 겪는 두 가지 문제",
            "easy1_desc": "코딩 에이전트가 시뮬레이터 피드백을 받아 코드를 짜면 모델 호출 없이도 프로그램을 돌릴 수 있는데요, 문제는 긴 작업을 시킬 때 발생합니다. 당장의 성능을 높이려다 전체 성공률을 깎아먹기도 하고, 목표가 바뀌면 처음부터 다시 비싼 비용을 들여 코드를 짜야 하거든요. 쉽게 말하면, 부분적인 개선이 전체를 망치거나 유연성이 떨어진다는 말이에요.",
            "easy2_title": "피드백을 단계별로 쪼개고 목표를 재사용하게 만들었어요",
            "easy2_desc": "연구진은 피드백을 에피소드 수익에서 계층적 목표와 믿음 업데이트로 이어지는 단계별로 쪼개어 정책을 다듬는 방식을 제안했는데요, 이렇게 했더니 Craftax 게임에서 최종 단계 도달률이 50%까지 올랐고 보스 처치도 28%나 달성했다고 해요. 더 나아가 환경 해석기와 규칙 프로그램을 분리해 목표 컴파일러를 최적화했더니, 새로운 작업에도 별도의 튜닝 없이 바로 적용할 수 있게 된 겁니다. 쉽게 말하면, 한 번 학습한 능력을 다른 작업에도 재사용할 수 있게 바꾼 셈이에요.",
            "topic": "코딩 에이전트가 긴 작업에서도 높은 성능을 내고, 학습한 능력을 새로운 목표에 재사용할 수 있도록 만드는 프레임워크를 제안했어요.",
            "one_line": "피드백 캐스케이드와 목표 컴파일러를 통해 코딩 에이전트의 재사용성을 높였어요.",
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
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.13685",
          "title": "Ego Guidance: Enhancing Robot Policy Learning with Action-Free Human Egocentric Videos",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.13685",
            "arxiv": "https://arxiv.org/abs/2611.13685"
          },
          "published": "2026-11-10",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 5,
          "score": 1.5,
          "score_why": "추천 5 → +0.5 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇을 가르치려는데 행동 데이터가 부족한 게 문제였어요",
            "easy1_desc": "로봇이 사람처럼 움직이게 하려면 행동 데이터가 꼭 필요한데, 이걸 일일이 모으기가 정말 어렵거든요. 그래서 연구진은 행동 정보가 없는 사람의 1인칭 시점 영상만으로도 로봇 학습을 도울 수 있을지 고민해 봤는데요. 행동 정보가 빠진 영상만으로 학습하면 로봇이 새로운 환경에 적응하는 능력이 떨어질 수 있다는 한계가 있다는 말이에요.",
            "easy2_title": "사람 영상으로 로봇의 미래를 예측하는 법을 만들었어요",
            "easy2_desc": "연구진은 SPAR라는 새로운 구조를 만들어 로봇이 행동을 예측하는 동시에 미래의 시각적 상태까지 함께 예측하도록 했는데요. 이렇게 하면 행동 데이터가 없어도 영상 속에서 로봇이 배워야 할 중요한 특징들을 스스로 찾아낼 수 있다는 거예요. 실제로 이렇게 학습한 로봇은 처음 보는 환경에서도 훨씬 더 잘 움직이는 모습을 보였다고 하네요.",
            "topic": "행동 정보가 없는 1인칭 시점 영상을 활용해 로봇의 정책 학습 성능을 높이는 방법을 제안했어요.",
            "one_line": "행동 정보 없는 1인칭 영상으로 로봇 정책 학습을 개선했어요.",
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
          "canon_id": "2611.08977",
          "title": "Energy-Based Reasoners: Your Recurrent Reasoner Should Be an Energy-Based Model",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.08977",
            "arxiv": "https://arxiv.org/abs/2611.08977"
          },
          "published": "2026-11-06",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 5,
          "score": 1.5,
          "score_why": "추천 5 → +0.5 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "반복해서 생각하는 모델은 언제 멈춰야 할지 몰랐거든요",
            "easy1_desc": "기존의 반복형 모델은 잠재 공간에서 여러 단계의 추론을 수행할 수 있지만, 추론 과정이 얼마나 잘 진행되고 있는지 측정할 방법이 없었습니다. 그래서 모델이 언제 반복을 멈춰야 할지, 현재 상태를 어떻게 개선해야 할지 판단하기가 어려웠다는 건데요. 쉽게 말하면, 열심히 생각은 하고 있는데 정답에 가까워지는지 확인하는 나침반이 없었던 셈이에요.",
            "easy2_title": "에너지 함수를 도입해 추론 과정을 스스로 안내하게 만들었어요",
            "easy2_desc": "연구진은 에너지 기반 추론 모델(EBR)을 제안했는데, 이는 잠재 상태에 에너지 함수를 학습시키고 반복적인 업데이트를 에너지에 대한 경사 하강법으로 정의한 것입니다. 에너지 점수가 상태를 평가하고 그 기울기가 추론을 정교하게 다듬으며 멈춰야 할 시점까지 알려주거든요. 덕분에 기존 모델보다 345배 적은 연산량으로도 스도쿠-익스트림(Sudoku-Extreme)에서 99.9%의 정확도를 달성하는 등 훨씬 효율적인 추론이 가능해졌다는 겁니다.",
            "topic": "에너지 기반 모델을 활용해 반복적 추론 모델의 효율성과 성능을 개선한 연구예요.",
            "one_line": "에너지 함수를 이용해 추론 모델의 반복 과정을 최적화했어요.",
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
          "canon_id": "2611.19771",
          "title": "JEPA4R: Embodied JEPA World Models with 4D Point Planning",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.19771",
            "arxiv": "https://arxiv.org/abs/2611.19771"
          },
          "published": "2026-11-15",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 4,
          "score": 1.4,
          "score_why": "추천 4 → +0.4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 모델은 2D 이미지에 갇혀서 공간을 제대로 이해하지 못했어요",
            "easy1_desc": "기존의 JEPA(Joint-embedding predictive architecture) 모델은 2D 이미지를 기반으로 학습하는데요, 그러다 보니 물체를 조작할 때 필요한 거리나 공간의 기하학적 구조가 겉모습과 뒤섞여 버리는 문제가 있었습니다. 게다가 모델이 머릿속으로 무엇을 상상하는지 밖에서는 알기 어렵고, 짧은 미래만 예측하는 시뮬레이션 위주로 평가받는다는 한계도 있었거든요. 쉽게 말하면, 모델이 공간을 입체적으로 파악하지 못하고 겉핥기식으로만 상황을 이해했다는 말이에요.",
            "easy2_title": "4D 포인트 클라우드로 공간을 직접 예측하고 계획하게 만들었어요",
            "easy2_desc": "연구진은 JEPA4R이라는 새로운 모델을 내놓았는데요, 2D 이미지 대신 깊이 카메라로 찍은 포인트 클라우드(점 구름)를 관찰하고 그 안에서 미래를 예측하고 계획하도록 설계했습니다. 이를 4D 포인트 계획이라고 부르는데, 모델이 상상하는 미래를 4D 포인트 클라우드로 직접 시각화할 수 있게 되었거든요. 실제로 200단계 동안 평균 오차 1.1cm 이내로 정확하게 예측하는 성능을 보여줬고, 디지털 트윈에서만 학습했음에도 실제 로봇 팔에 바로 적용할 수 있다는 장점이 있습니다.",
            "topic": "JEPA4R은 4D 포인트 클라우드 기반의 예측과 계획을 통해 로봇 조작 성능을 높인 세계 모델이에요.",
            "one_line": "4D 포인트 클라우드 기반의 세계 모델을 개발해 로봇 조작 성능을 높였어요.",
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
          "canon_id": "2611.19649",
          "title": "LoopFill: Pipelined Multi-Token Speculative Decoding for Looped Transformers",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.19649",
            "arxiv": "https://arxiv.org/abs/2611.19649"
          },
          "published": "2026-11-14",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 4,
          "score": 1.4,
          "score_why": "추천 4 → +0.4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "반복되는 층 때문에 생기는 느린 속도가 문제였어요",
            "easy1_desc": "루프드 트랜스포머(Looped Transformers)는 같은 층을 여러 번 반복해서 써서 모델의 효율을 높이는 방식인데요, 문제는 토큰을 하나씩 만들 때마다 이 층들을 계속 통과해야 해서 속도가 너무 느려진다는 거예요. 기존의 파이프라인 방식은 토큰이 특정 깊이까지 도달해야 다음 토큰이 들어올 수 있어서 대기 시간이 길어지거든요. 쉽게 말하면, 층을 반복하는 구조 때문에 토큰 생성 속도가 발목을 잡히는 상황인 셈이에요.",
            "easy2_title": "여러 토큰을 한 번에 예측해서 속도를 확 끌어올렸어요",
            "easy2_desc": "연구진은 루프필(LoopFill)이라는 새로운 알고리즘을 제안했는데요, 여러 토큰을 묶은 접미사 예측과 얕은 루프 예측을 하나의 나무 구조로 합쳐서 동시에 처리하는 방식이에요. 이렇게 하면 여러 토큰이 파이프라인에 한꺼번에 들어갈 수 있어서 대기 시간이 줄어드는 장점이 있거든요. 결과적으로 기존 방식보다 오로-2.6B 모델에서는 5.85배, 허긴-3.5B 모델에서는 5.13배나 빠르게 토큰을 생성했다고 밝혔습니다.",
            "topic": "루프드 트랜스포머 모델의 토큰 생성 속도를 높이기 위해 다중 토큰 예측과 얕은 루프 예측을 결합한 루프필 알고리즘을 제안했어요.",
            "one_line": "루프드 트랜스포머의 생성 속도를 높이는 루프필 알고리즘을 개발했어요.",
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
          "canon_id": "2611.18330",
          "title": "Marimba: A System One Model for Speech",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.18330",
            "arxiv": "https://arxiv.org/abs/2611.18330"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 4,
          "score": 1.4,
          "score_why": "추천 4 → +0.4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "음성 데이터를 처리할 때 필요한 판단들이 흩어져 있었어요",
            "easy1_desc": "음성 인식 기술을 쓸 때는 특정 단어가 들리는지, 대화가 끝났는지, 어떤 언어인지 같은 판단들을 실시간으로 내려야 하거든요. 그런데 이런 판단을 각각 다른 방식으로 처리해야 해서 시스템이 복잡해지는 문제가 있었어요. 쉽게 말하면, 음성 데이터 하나를 두고 여러 가지 질문에 답해야 하는데 그 과정이 매끄럽지 않았다는 겁니다.",
            "easy2_title": "마림바라는 통합 인터페이스로 음성 판단을 한 번에 해결했어요",
            "easy2_desc": "연구진은 마림바(Marimba)라는 새로운 인터페이스를 만들어 이 문제를 해결했는데요, 기존의 Qwen3-ASR 0.6B 모델의 특징을 그대로 활용하면서도 질문에 따라 답을 내놓는 구조를 덧붙인 거예요. 이걸 썼더니 대화가 끝나는 시점이나 화자가 바뀌는 지점을 훨씬 정확하게 찾아냈거든요. 결과적으로 기존 도구들보다 더 나은 성능을 보여주면서도 다양한 음성 판단을 통합적으로 수행할 수 있게 된 셈이에요.",
            "topic": "마림바는 음성 데이터 내의 다양한 정보를 효율적으로 판단하기 위해 설계된 시스템 원(System One) 모델이에요.",
            "one_line": "음성 판단을 통합적으로 수행하는 마림바 모델을 개발했어요.",
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
          "canon_id": "2611.16642",
          "title": "Dataset Distillation via Drifting",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.16642",
            "arxiv": "https://arxiv.org/abs/2611.16642"
          },
          "published": "2026-11-12",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "데이터를 줄일 때 분류기만 쳐다보는 게 문제였어요",
            "easy1_desc": "데이터셋 증류(Dataset Distillation)는 큰 데이터를 작은 데이터로 압축해서 학습 효율을 높이는 기술인데요, 지금까지 나온 방법들은 대부분 분류기(Classifier)의 성능을 높이는 데만 집중해 왔거든요. 그러다 보니 데이터가 가진 본래의 분포를 제대로 담아내지 못하는 한계가 있었던 셈이에요. 쉽게 말하면, 모델이 정답을 맞히는 데만 급급해서 데이터가 원래 어떻게 생겼는지는 놓치고 있었다는 말이에요.",
            "easy2_title": "데이터 분포를 직접 따라가게 만들었더니 성능이 좋아졌어요",
            "easy2_desc": "이번 연구에서는 분류기 대신 데이터 분포 자체를 근사하는 새로운 방식을 제안했는데요, 특징 추출기(Feature Extractor)의 잠재 공간에서 데이터를 실제 데이터 쪽으로 이동시키고 서로는 멀어지게 만드는 '드리프트(Drift)' 기법을 썼거든요. 이렇게 했더니 기존 방식보다 실제 데이터 분포를 훨씬 잘 표현하면서도 분류 학습용 데이터로도 아주 강력한 성능을 보였다는 거예요. 모델을 해석하는 시각화 도구로도 쓸 수 있고 이미지 외에 다른 데이터 형태에도 적용할 수 있다는 장점이 있습니다.",
            "topic": "분류기 최적화에 의존하지 않고 데이터 분포를 직접 학습하여 데이터셋 증류의 성능을 높이는 새로운 방법을 제안했어요.",
            "one_line": "데이터 분포를 직접 근사하는 드리프트 기법으로 데이터셋 증류 성능을 높였어요.",
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
          "canon_id": "2611.09825",
          "title": "BitDecoding-FP4: Native FP4 KV Cache Decoding via Algorithm-System Co-Design",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.09825",
            "arxiv": "https://arxiv.org/abs/2611.09825"
          },
          "published": "2026-11-06",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "긴 문맥을 다룰 때 메모리 부족 문제가 심각했거든요",
            "easy1_desc": "거대언어모델(LLM)을 서비스할 때 키-값(KV) 캐시가 메모리 용량과 대역폭을 너무 많이 차지하는 게 문제였는데요. 기존의 4비트 양자화 방식은 정확도가 크게 떨어지거나, 정확도를 챙기려고 복잡한 방식을 쓰면 오히려 처리 속도가 느려지는 단점이 있었거든요. 쉽게 말하면, 메모리를 줄이려니 성능이 안 나오고 성능을 높이려니 메모리 효율이 떨어지는 딜레마에 빠져 있었던 셈이에요.",
            "easy2_title": "알고리즘과 시스템을 함께 설계해 속도와 정확도를 다 잡았어요",
            "easy2_desc": "연구진은 BitDecoding-FP4라는 새로운 방식을 제안했는데, 알고리즘과 시스템을 동시에 최적화해서 네이티브 FP4 KV 디코딩을 가능하게 만들었어요. 쿼리를 두 개로 나누거나 언더플로우를 방지하고, 이상치를 효과적으로 처리하는 세 가지 기술로 오차를 줄였거든요. 그 결과 BF16 수준의 정확도를 유지하면서도 처리량은 2.4배에서 3.0배까지 높일 수 있었다고 밝혔어요.",
            "topic": "거대언어모델의 긴 문맥 처리를 위한 효율적인 FP4 KV 캐시 디코딩 기술인 BitDecoding-FP4를 제안했어요.",
            "one_line": "알고리즘과 시스템을 결합해 FP4 KV 캐시 디코딩 효율을 높였어요.",
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
          "canon_id": "2611.21605",
          "title": "ViRA: Toward Ultra-High-Resolution Visual Agents via Cross-Input Relative Policy Optimization",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.21605",
            "arxiv": "https://arxiv.org/abs/2611.21605"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시각 인공지능이 사진을 제대로 안 보고 찍어서 맞히는 게 문제였어요",
            "easy1_desc": "기존의 시각 에이전트(Visual agents)들은 초고해상도 사진을 분석할 때, 사진 속 증거를 직접 찾기보다는 학습된 상식에 의존해 답을 내놓는 경우가 많았거든요. 강화학습(RL)을 써도 정답만 맞히면 보상을 주다 보니, 운 좋게 찍어서 맞힌 경우와 제대로 읽고 맞힌 경우를 구분하지 못한다는 한계가 있었어요. 쉽게 말하면, 눈앞의 증거를 무시하고 감으로 답을 고르는 나쁜 습관이 고쳐지지 않았다는 겁니다.",
            "easy2_title": "사진의 작은 부분까지 비교하게 해서 진짜 증거를 찾도록 바꿨어요",
            "easy2_desc": "연구진은 크로스알피오(CrossRPO)라는 새로운 학습 방식을 제안했는데요, 이는 사진의 일부분만 살짝 바꾼 여러 버전을 묶은 대조 세트(Contrast sets)를 활용하는 방식이에요. 이 세트의 모든 질문을 맞히려면 반드시 사진 속 증거를 읽어야만 하거든요. 이렇게 학습했더니 기존 방식인 GRPO보다 높은 정확도를 보였고, 특히 ViRA-27B 모델은 클로드 하이쿠(Claude Haiku) 5.5나 GPT-6-루나(Luna) 같은 모델보다 더 나은 성능을 냈다고 주장했어요.",
            "topic": "초고해상도 이미지에서 시각 에이전트가 상식이 아닌 실제 증거를 기반으로 추론하도록 유도하는 새로운 학습 기법인 크로스알피오(CrossRPO)를 제안했어요.",
            "one_line": "초고해상도 이미지 처리를 위해 증거 기반의 학습 기법인 크로스알피오를 개발했어요.",
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
          "canon_id": "2611.21479",
          "title": "LynnReal-Hand: Unlocking World Interaction with Hand Control",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.21479",
            "arxiv": "https://arxiv.org/abs/2611.21479"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "손으로 직접 조작하는 영상 모델을 만드는 게 왜 어려운가",
            "easy1_desc": "영상 세계 모델은 텍스트나 카메라 조작으로 탐색할 수 있지만, 물체와 직접 상호작용하려면 손의 움직임을 아주 정밀하게 제어해야 하거든요. 그런데 손과 물체가 복잡하게 얽히는 동작을 자연스러운 영상으로 바꾸는 건 여전히 어려운 문제예요. 게다가 실시간으로 반응하려면 계산량이 엄청나게 많아야 한다는 부담도 있거든요. 쉽게 말하면, 손의 움직임을 영상에 매끄럽게 녹여내면서도 빠르게 처리하는 기술이 부족했다는 말이에요.",
            "easy2_title": "손동작을 정밀하게 따라가면서도 빠르게 영상을 만들어 냈어요",
            "easy2_desc": "연구진은 LynnReal-Hand라는 모델을 개발해서 손으로 직접 상호작용하는 영상 세계를 구현했는데요, 10만 개의 상호작용 클립으로 학습하고 손의 움직임을 더 잘 인식하도록 만들었어요. 여기에 Ultra-Fast-VAE라는 가벼운 영상 디코더를 써서 계산 비용을 확 줄였거든요. 그 결과, 손동작을 정확히 따라가면서도 실시간 스트리밍이 가능해졌다는 거예요. 쉽게 말하면, 정교함과 속도라는 두 마리 토끼를 동시에 잡은 셈이에요.",
            "topic": "손의 움직임을 정밀하게 인식하고 실시간으로 상호작용하는 영상 세계 모델인 LynnReal-Hand를 제안했어요.",
            "one_line": "손동작으로 영상을 제어하는 모델을 개발하고 실시간 성능을 높였어요.",
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
          "canon_id": "2611.20595",
          "title": "Invariant-Aware Harness Enforcement to Protect LLM Agents from Silent API Failures",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.20595",
            "arxiv": "https://arxiv.org/abs/2611.20595"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "API가 조용히 틀린 답을 내놓는 게 문제였어요",
            "easy1_desc": "거대언어모델(LLM) 에이전트는 외부 API를 호출해 답을 찾는데, 가끔 API가 요청의 일부를 무시하고도 정상인 척 200번 응답을 보내는 경우가 있어요. 모델이 직접 이 오류를 찾아내게 시켜 봐도, 문제를 보고도 그냥 답을 내놓는 일이 많거든요. 쉽게 말하면, API가 겉으로는 멀쩡해 보이지만 실제로는 틀린 정보를 전달하는 '조용한 실패'가 발생한다는 거예요.",
            "easy2_title": "모델 대신 도구가 직접 검사해서 틀린 답을 막아냈어요",
            "easy2_desc": "연구진은 모델의 판단에만 의존하지 않고, API 호출을 실행하는 도구 단계에서 직접 검사하는 'SilentGuard'를 개발했어요. API 결과가 올바른지 확인하는 불변 조건(invariants)을 설정하고, 이를 어기는 값은 아예 차단하는 방식인데요. 결과적으로 오픈 모델 7개에서는 틀린 답이 74.0%에서 1.7%로, 최신 모델 3개에서는 70.2%에서 0.5%로 크게 줄었다고 밝혔어요.",
            "topic": "LLM 에이전트가 API를 호출할 때 발생하는 조용한 실패를 막기 위해, 모델의 판단이 아닌 실행 도구 수준에서 불변 조건을 검사하는 SilentGuard를 제안했어요.",
            "one_line": "API 호출 도구 단계에서 불변 조건을 검사해 LLM 에이전트의 오류를 줄였어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "이 방식은 오류를 스스로 고치기보다는 틀린 답을 내놓지 않도록 실행을 중단하는 방식을 취하고 있어요."
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
          "canon_id": "2611.20192",
          "title": "GlyphAtlas: Disentangling Stroke Detail from Layout for Scene Text Synthesis",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.20192",
            "arxiv": "https://arxiv.org/abs/2611.20192"
          },
          "published": "2026-11-15",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "글자 모양과 위치를 한꺼번에 다루려니 세밀함이 떨어졌어요",
            "easy1_desc": "기존의 장면 텍스트 합성 방식은 글자의 위치와 모양을 하나의 이미지로 미리 그려서 처리해 왔거든요. 그런데 이렇게 하면 글자가 작거나 빽빽하게 모여 있을 때 글자 획의 세밀한 부분까지 표현하기가 어렵다는 문제가 생깁니다. 글자 크기가 작아지면 해상도도 같이 낮아지기 때문인데요, 결국 복잡한 글자 모양을 정확히 살리지 못하는 한계가 있었던 셈이에요.",
            "easy2_title": "글자 모양 정보만 따로 떼어내서 더 정교하게 그렸어요",
            "easy2_desc": "연구진은 글자 모양 정보만 따로 모아둔 '글리프 아틀라스(GlyphAtlas)'라는 별도의 공간을 만들어 이 문제를 해결했는데요. 글자 위치는 기존처럼 잡되, 글자 획의 세밀한 정보는 아틀라스에서 따로 가져오도록 구조를 바꾼 겁니다. 이렇게 하면 글자 크기와 상관없이 획의 디테일을 살릴 수 있고, 결과적으로 작거나 복잡한 글자도 훨씬 정확하게 합성할 수 있게 된 거예요.",
            "topic": "글리프 아틀라스를 활용해 장면 텍스트 합성에서 글자 획의 세밀함과 배치를 효과적으로 분리하는 새로운 프레임워크를 제안했어요.",
            "one_line": "글리프 아틀라스를 이용해 장면 텍스트 합성의 정밀도를 높였어요.",
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
          "canon_id": "2611.20148",
          "title": "Centered Ablation: Why Last-Layer Directional Ablation Under-Fires or Collapses, and a Closed-Form Fix",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.20148",
            "arxiv": "https://arxiv.org/abs/2611.20148"
          },
          "published": "2026-11-15",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존의 방향성 제거 방식이 왜 불안정한지 알아봤습니다",
            "easy1_desc": "언어 모델이 특정 행동을 하지 못하게 하려고 '방향성 제거(Directional ablation)'라는 기술을 쓰는데요, 이게 모델마다 작동이 잘 안 되거나 문장이 반복되는 등 결과가 들쭉날쭉하다는 문제가 있었거든요. 연구진이 원인을 분석해 봤더니, 마지막 층의 상태가 원점에서 너무 멀리 떨어져 있어서 발생하는 문제라는 걸 밝혀냈습니다. 쉽게 말하면, 모델이 가진 공통적인 특성 때문에 제거하려는 방향이 제대로 작동하지 않고 엉뚱한 곳에 영향을 미치고 있었다는 겁니다.",
            "easy2_title": "공통 모드를 걷어내는 중심화 제거 방식을 제안했습니다",
            "easy2_desc": "그래서 연구진은 '중심화 제거(Centered Ablation, CA)'라는 새로운 방법을 내놨는데요, 기존 방향에서 모델의 공통적인 특성인 '공통 모드(common mode)'를 수학적으로 깔끔하게 걷어내는 방식이에요. 이렇게 했더니 공격 성공률은 29에서 46포인트까지 높아졌고, 50%에 달하던 텍스트 붕괴 현상도 1% 수준으로 크게 줄었다고 합니다. 단순히 성능만 좋아진 게 아니라, 생성 전에 미리 계산한 두 가지 지표로 어떤 모델에서 효과가 좋을지 예측까지 가능해졌다는 점이 특징이에요.",
            "topic": "언어 모델의 행동을 제어하는 방향성 제거 기술의 한계를 분석하고, 이를 개선한 중심화 제거 기법을 제안했어요.",
            "one_line": "방향성 제거의 불안정성을 해결하는 중심화 제거 기법을 개발했어요.",
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
          "canon_id": "2611.18668",
          "title": "UMM-JEPA: Generative Pretraining via Masked Next-Scale Representation Prediction for Unified Multimodal Models",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.18668",
            "arxiv": "https://arxiv.org/abs/2611.18668"
          },
          "published": "2026-10-26",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "생성 학습을 한다고 해서 이해력이 꼭 좋아지지는 않더라고요",
            "easy1_desc": "통합 멀티모달 모델은 이미지를 보고 이해하거나 새로 만드는 일을 모두 할 수 있는데요, 연구진은 기존의 생성 학습 방식이 이해력을 높이는 데는 한계가 있다고 봤습니다. 그 이유는 모델이 이미지를 만들 때 쓰는 표현 방식과, 이미지를 이해할 때 쓰는 표현 방식이 서로 맞지 않기 때문이라는 거예요. 쉽게 말하면, 그림을 그리는 법을 배운다고 해서 그림 속의 의미를 더 잘 파악하게 되는 건 아니라는 말입니다.",
            "easy2_title": "이미지 이해를 위한 표현을 직접 예측하게 바꿨더니 성능이 올랐어요",
            "easy2_desc": "그래서 연구진은 UMM-JEPA라는 방식을 제안했는데요, 이미지를 만드는 것 대신 이미지 이해에 필요한 표현을 단계별로 예측하도록 학습 구조를 바꾼 겁니다. 픽셀을 그리는 작업은 학습 과정에서 분리해 나중에 붙이도록 했거든요. 이렇게 했더니 기존의 방식보다 이해 능력이 더 좋아졌고, 16개 벤치마크에서 평균 51.71점을 기록하며 기존 모델보다 더 나은 성과를 보였다는 거예요.",
            "topic": "멀티모달 모델의 생성 학습 방식을 이미지 이해에 최적화된 표현 예측으로 재설계하여 성능을 개선한 연구입니다.",
            "one_line": "이미지 이해용 표현을 예측하는 방식으로 생성 학습을 재설계했어요.",
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
          "canon_id": "2611.04395",
          "title": "Correct Labels Are Not Enough: Reliable Metadata Can Silently Control Model Behavior",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.04395",
            "arxiv": "https://arxiv.org/abs/2611.04395"
          },
          "published": "2026-11-03",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "정답만 맞히면 되는 줄 알았는데 숨겨진 단서에 속고 있었어요",
            "easy1_desc": "모델을 학습시킬 때 정답과 함께 보상 점수 같은 부가 정보(메타데이터)를 같이 넣는 경우가 많은데요, 연구진이 확인해 봤더니 모델이 정답 자체보다 이 부가 정보를 보고 답을 고르는 습관이 생기더라고요. 심지어 정답이 정확한데도 모델은 이 단서에 의존하게 된다는 거예요. 쉽게 말하면, 모델이 실력으로 문제를 푸는 게 아니라 눈치껏 단서만 쫓고 있다는 말이에요.",
            "easy2_title": "단서 위치를 살짝 바꿔 봤더니 모델이 엉뚱한 답을 골랐어요",
            "easy2_desc": "연구진은 7~9B 크기의 모델들을 학습시키면서 특정 점수 표시를 항상 정답 쪽에 두었는데요, 시험 때 이 표시를 오답 쪽으로 옮겨 봤더니 모델들이 97~100% 확률로 오답을 정답이라며 골라냈거든요. 이 표시를 아예 없애면 모델이 다시 정답을 잘 맞히는 걸로 봐서, 평소 평가 방식으로는 모델이 단서에 의존하는지 알기 어렵다는 거예요. 결국 모델이 단서에 얼마나 의존하는지 확인하려면, 정답은 그대로 두고 단서만 옮기거나 지우는 방식의 감사가 필요하다는 겁니다.",
            "topic": "학습 데이터에 포함된 부가 정보가 모델의 판단에 미치는 영향과 이를 검증하는 방법에 대한 연구예요.",
            "one_line": "모델이 학습 데이터의 부가 정보를 단서로 오용하는지 검증하는 방법을 제시했어요.",
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
          "canon_id": "2611.06238",
          "title": "Zuse: A Decision Model for European Languages",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.06238",
            "arxiv": "https://arxiv.org/abs/2611.06238"
          },
          "published": "2026-11-04",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "글을 직접 쓰지 않고 선택지만 고르는 모델을 만들었어요",
            "easy1_desc": "보통 AI는 글을 생성하지만, 이 연구진은 문서 내용을 읽고 정해진 선택지 중 하나를 고르는 결정 모델(Decision model)을 개발했는데요. 기존 모델들은 영어 결과만 공개된 경우가 많았는데, 이번에는 유럽 27개 언어를 대상으로 4B, 9B, 27B 크기의 모델을 만들어 봤다는 거예요. 쉽게 말하면, 글을 쓰는 대신 정답을 찍는 방식으로 언어 처리 능력을 확인해 본 셈입니다.",
            "easy2_title": "유럽 언어 27개를 다뤄보니 모델 크기보다 기반 모델이 중요하더라고요",
            "easy2_desc": "연구진이 11개 데이터셋으로 성능을 확인했더니, 27B 모델이 87.5%의 정확도를 보였는데요. 분석 결과, 모델이 학습하지 않은 언어까지 확장하는 능력은 모델 크기보다는 기반 모델(Base model)이 무엇인지에 따라 결정된다는 사실을 발견했어요. 기반 모델이 모르는 언어는 아무리 학습을 시켜도 성능이 23에서 28포인트나 낮게 나타났거든요.",
            "topic": "유럽 27개 언어를 지원하는 결정 모델 Zuse의 설계와 언어별 성능 특성을 분석했어요.",
            "one_line": "유럽 27개 언어를 처리하는 결정 모델 Zuse를 개발하고 성능을 분석했어요.",
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
          "canon_id": "2605.09614",
          "title": "Reflection Anchors for Propagation-Aware Visual Retention in Long-Chain Multimodal Reasoning",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2605.09614",
            "arxiv": "https://arxiv.org/abs/2605.09614"
          },
          "published": "2026-11-15",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "긴 추론 과정에서 시각 정보가 자꾸 흐려지는 게 문제였어요",
            "easy1_desc": "거대 시각-언어 모델(LVLM)이 긴 생각의 사슬(CoT)을 따라 추론할 때, 생성 과정이 길어지면 처음에 입력된 시각 정보가 점차 희미해지는 현상이 나타나거든요. 기존에는 추론 중에 시각 정보를 다시 넣거나 모델을 재학습하는 방식을 썼지만, 정작 어느 시점에 개입해야 할지 판단하는 근거가 부족했다는 게 문제예요. 뭔 소리냐면, 시각 정보가 추론 과정에서 어떻게 전달되고 영향을 미치는지 명확한 원리 없이 감에 의존해 왔다는 말이에요.",
            "easy2_title": "시각 정보의 영향력을 계산해서 추론의 정확도를 높였어요",
            "easy2_desc": "연구진은 정보 이론을 바탕으로 한 단계 개입했을 때 얻을 수 있는 시각적 이득의 하한선을 도출했는데요, 이를 통해 시각 정보가 추론 과정에서 얼마나 잘 전달되는지 수치화할 수 있게 됐어요. 이를 활용한 '반사 앵커 정책 최적화(RAPO)'라는 새로운 학습법을 제안했는데, 시각적으로 중요한 지점을 스스로 찾아내어 모델이 그 정보를 끝까지 놓치지 않도록 유도하는 방식이에요. 실제로 여러 모델에 적용해 봤더니 기존 방식보다 추론 성능이 크게 향상됐다고 연구진은 주장했어요.",
            "topic": "긴 추론 과정에서 시각 정보의 손실을 막기 위해 정보 이론에 기반한 개입 지점 선정과 최적화 기법을 제안했어요.",
            "one_line": "정보 이론을 활용해 시각 정보 손실을 막는 추론 최적화 기법을 개발했어요.",
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
          "canon_id": "2611.21545",
          "title": "Right Reason, Wrong Advice: Evaluating Recourse in LLM Explanations of Denied Requests",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21545"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "옳은 이유를 말해줘도 왜 거절은 안 풀리는 걸까",
            "easy1_desc": "언어 모델이 규칙에 따라 요청을 거절할 때 그 이유를 설명해 주는데요, 문제는 여러 규칙이 겹쳐 있을 때 발생합니다. 모델이 제시한 이유가 사실이라 하더라도, 사용자가 그 부분만 고쳐서 다시 요청하면 여전히 거절당하는 경우가 생기거든요. 이게 무슨 말이냐면, 설명은 맞지만 해결책으로는 부족하다는 뜻이에요. 연구진은 이런 문제를 '구제 타당성(recourse validity)'이 없다고 정의했습니다.",
            "easy2_title": "설명만 믿고 고치면 헛수고가 될 수 있다는 걸 확인했어",
            "easy2_desc": "연구진은 7개의 규칙 시스템을 분석해 봤더니, 여러 이유가 겹친 상황에서는 하나의 올바른 이유만으로는 거절을 해결하기 어렵다는 걸 확인했습니다. 20개의 언어 모델을 테스트해 보니, 모델이 제시한 이유가 옳은지 판단하는 것만으로는 이런 실패를 찾아내기가 거의 불가능했거든요. 대신 설명대로 행동했을 때 실제로 문제가 해결되는지 직접 확인하는 방식이 훨씬 효과적이라는 결과가 나왔습니다. 성능이 좋은 모델도 규칙이 4개 이상 겹치면 여전히 어려움을 겪는다는 점도 같이 확인했고요.",
            "topic": "언어 모델이 생성한 거절 사유가 실제 문제 해결로 이어지는지 평가하는 구제 타당성 연구입니다.",
            "one_line": "언어 모델의 거절 사유가 실제 해결책이 되는지 평가하는 구제 타당성 개념을 제시했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "성능이 뛰어난 모델이라도 4개 이상의 독립적인 규칙이 얽힌 거절 상황에서는 여전히 해결책을 제시하는 데 어려움을 겪습니다."
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
          "canon_id": "2611.21541",
          "title": "SciResearch-Eval: Evaluating Scientific Judgment in Autonomous Experimental Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21541"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "과학적 판단을 평가할 기준이 없다는 게 문제였어요",
            "easy1_desc": "연구진은 인공지능 에이전트가 과학 실험을 스스로 설계하고 결과를 판단하는 능력을 측정하기 위해 SciResearch-Eval이라는 새로운 평가 도구를 만들었습니다. 기존에는 에이전트가 실험을 설계하고, 물리 법칙이 틀린 시뮬레이터를 다루며, 결과의 정확도를 스스로 예측하는 능력을 종합적으로 평가할 방법이 없었거든요. 뭔 소리냐면, 에이전트가 단순히 답을 맞히는 걸 넘어 과학적 사고를 제대로 하는지 확인하기 위해 일부러 오류가 있는 시뮬레이터를 사용했다는 말이에요.",
            "easy2_title": "모델마다 과학적 판단력에 차이가 크다는 걸 확인했어요",
            "easy2_desc": "실험을 해 봤더니 모델들이 시뮬레이터의 물리적 오류를 알아채지 못하고 틀린 값을 자신 있게 내놓는 경우가 많았는데요, 95% 신뢰 구간 안에 실제 정답이 포함되는 비율이 모델별로 20%에서 99%까지 큰 차이를 보였습니다. 특히 Claude 5.5 모델들은 물리적 오류를 진단하는 데 어려움을 겪었지만, Astra나 Fable 같은 모델은 오류가 있는 환경에서도 실험 방식을 영리하게 바꿔 정확도를 유지하는 모습을 보였거든요. 쉽게 말하면, 모델이 단순히 계산만 잘하는 게 아니라 실험 환경의 한계를 파악하고 대응하는 능력이 중요하다는 겁니다.",
            "topic": "인공지능 에이전트가 과학적 실험을 설계하고 물리적 오류를 판단하는 능력을 평가하는 벤치마크를 제안했어요.",
            "one_line": "과학 실험 에이전트의 판단력을 평가하는 벤치마크를 개발했어요.",
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
          "canon_id": "2611.21529",
          "title": "Procedure without Judgment: What Small Language Models Learn under an Exact Verifier",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21529"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 왜 거절당했는지 이유를 찾는 게 어려웠거든요",
            "easy1_desc": "인공지능 에이전트가 도구를 쓰려다 정책에 막혔을 때, 왜 그런 결정이 내려졌는지 정확한 이유를 알아내는 건 원래 쉽지 않은 일이었어요. 보통은 대략적인 추측에 의존해야 했거든요. 그런데 이번 연구에서는 정책이 명확하게 정해진 상황이라면, 무엇 때문에 거절됐는지 그 이유를 수학적으로 딱 떨어지게 계산해 낼 수 있다는 점을 활용해 봤습니다.",
            "easy2_title": "정답을 알려주는 선생님이 있으니 학습 효율이 확 달라졌어요",
            "easy2_desc": "오류가 없는 검증기(Verifier)를 선생님 삼아 모델을 학습시켜 봤더니, 성능이 눈에 띄게 좋아졌다는 걸 확인했습니다. 특히 40억 개의 매개변수를 가진 모델을 2,000개의 예시로 훈련했더니 정확도가 92%까지 올랐거든요. 다만 이렇게 배운 모델은 특정 상황에만 맞춰진 방식을 익히는 거라, 새로운 정책 환경에서는 일반적인 모델보다 유연함이 떨어진다는 한계도 함께 발견했습니다.",
            "topic": "오류 없는 검증기를 활용해 인공지능이 정책 거절 사유를 학습하는 과정을 분석한 연구예요.",
            "one_line": "오류 없는 검증기를 활용해 AI가 정책 거절 사유를 정확히 학습하도록 했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "학습된 모델이 새로운 정책 환경에서는 범용적인 능력을 발휘하지 못하고 특정 방식에만 고착되는 한계가 있습니다."
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.21471",
          "title": "Subprocess-Constrained Markov Decision Processes",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21471"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.21439",
          "title": "A Reinforcement Learning Method to Navigate SMEFT Operator Space",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.21439",
            "arxiv": "https://arxiv.org/abs/2611.21439"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 0,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.21412",
          "title": "Flexible Multi-Stack Super-Resolution of Clinical Brain MRI Using Hetero-Orientation Variational Encoding: Expert Reader Evaluation in a Nigerian Cohort",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.21412",
            "arxiv": "https://arxiv.org/abs/2611.21412"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 0,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "뇌 MRI 화질을 높이려니 촬영 방식이 제각각이라 문제였어요",
            "easy1_desc": "병원에서 뇌 MRI를 찍을 때 환자 상황에 따라 촬영 방향이나 범위가 다른 2D 영상을 여러 장 찍게 되는데요, 기존의 인공지능 방식은 영상이 딱 정해진 모양으로 들어와야만 제대로 작동한다는 한계가 있었어요. 영상이 서로 겹치거나 방향이 틀어지면 제대로 합치지 못하는 겁니다. 쉽게 말하면, 데이터가 조금만 불규칙해도 인공지능이 화질을 높이는 데 어려움을 겪었다는 말이에요.",
            "easy2_title": "어떤 방향으로 찍어도 알아서 합치는 기술을 개발했어요",
            "easy2_desc": "연구진은 MS-HVED라는 기술을 개발해 어떤 방향의 영상이 들어와도 유연하게 화질을 높이도록 만들었는데요, 각 영상을 따로 분석한 뒤 영상이 없는 부분은 제외하고 필요한 정보만 합치는 방식을 썼어요. 실제 임상 환경처럼 영상이 기울어지거나 일부가 잘린 상황까지 학습시켰더니, 나이지리아 환자 데이터를 포함한 실제 검사에서 전문가들이 더 선호하는 결과를 냈거든요. 결과적으로 기존 방식보다 화질 점수가 5.93점으로 더 높게 나타났다는 겁니다.",
            "topic": "다양한 방향으로 촬영된 뇌 MRI 영상들을 유연하게 결합하여 고해상도로 복원하는 새로운 인공지능 프레임워크를 제안했어요.",
            "one_line": "다양한 방향의 뇌 MRI를 결합해 고해상도로 복원하는 기술을 개발했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.21405",
          "title": "Shaping AI's Beliefs Before It Generates: Human Sense of Agency in Creative AI",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21405"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 만든 결과물에만 매달리다 보니 사람이 주도권을 잃고 있어요",
            "easy1_desc": "AI로 창작물을 만들 때 사용자가 AI가 내놓은 완성된 결과물에 생각을 고정당하는 '앵커링(Anchoring)' 현상이 나타나는데요. 이게 왜 문제냐면, 사용자가 처음부터 주도적으로 창작하는 게 아니라 AI가 만든 걸 나중에 고치기만 하는 수동적인 역할로 바뀌기 때문이에요. 쉽게 말하면, AI가 만든 틀 안에 사용자의 생각이 갇혀 버리는 셈이라는 겁니다.",
            "easy2_title": "만들기 전에 AI의 생각을 먼저 다듬어 주도권을 되찾았어요",
            "easy2_desc": "그래서 연구진은 AI가 미디어를 생성하기 전에 사용자가 AI의 해석을 미리 확인하고 수정할 수 있는 '사전 생성 신념 제어' 방식을 제안했는데요. 이를 적용한 'PaCC(Proactive Co-Creator)'라는 시스템을 만들어 AI가 어떤 가정을 하고 있는지, 불확실한 부분은 무엇인지 미리 보여주게 했어요. 사용자가 AI의 생각을 먼저 다듬고 나면 결과물에 대한 주도권과 통제력이 더 높아진다는 장점이 있거든요. 다만, 결과물에 대한 주인의식이나 저자 의식은 사용자마다 다르게 나타났다는 점도 확인했습니다.",
            "topic": "창작 AI를 사용할 때 사용자가 AI의 생성 과정을 미리 통제하여 주도권을 유지할 수 있도록 돕는 시스템을 연구했어요.",
            "one_line": "AI 생성 전 사용자가 개입해 주도권을 갖는 시스템을 개발했어요.",
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
          "canon_id": "2611.21382",
          "title": "VisualArtifactSpec 1.0: Evaluating Visual Artifacts under Task Specifications",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21382"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 만든 결과물이 실제 목적에 맞는지 확인하기가 어려웠어요",
            "easy1_desc": "기존의 인공지능 평가 도구들은 AI가 만든 결과물이 사용자의 의도나 목적에 얼마나 잘 부합하는지 체계적으로 따져보기가 힘들었거든요. 단순히 기능을 수행하는지 확인하는 수준을 넘어, 다양한 매체와 상황에 맞게 결과물을 잘 만들었는지 평가하는 기준이 부족했던 셈이에요. 쉽게 말하면 AI가 시키는 대로 만들긴 했는데, 이게 진짜 쓸모 있는 결과물인지 판단할 방법이 마땅치 않았다는 말이에요.",
            "easy2_title": "시각적 결과물을 꼼꼼하게 평가하는 새로운 기준을 만들었어요",
            "easy2_desc": "그래서 연구진은 발표 자료나 웹 화면 같은 211가지 시각적 작업으로 구성된 VisualArtifactSpec 1.0이라는 평가 도구를 새로 내놓았는데요. 이 도구는 AI가 요구 사항을 잘 지켰는지 확인하는 '작업 이행'과 결과물의 구성이나 시각적 완성도를 따지는 '결과물 성능'을 따로 나누어 평가하는 방식이에요. 이렇게 하면 AI가 어떤 부분에서 강점을 보이고 어디가 부족한지 더 명확하게 알 수 있다는 장점이 있거든요.",
            "topic": "시각적 결과물을 생성하는 AI 모델의 능력을 다양한 작업 환경에서 체계적으로 평가하기 위한 벤치마크를 제안했어요.",
            "one_line": "시각적 결과물 생성 AI의 능력을 평가하는 벤치마크를 개발했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.21273",
          "title": "CAE-Bench: Benchmarking AI Agents for Reusable CAE Solver Development",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21273"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 만든 공학 해석 도구가 생각보다 잘 안 돌아가요",
            "easy1_desc": "컴퓨터 이용 공학(CAE) 해석 도구는 경계 조건이나 재료 같은 입력값이 바뀌어도 잘 작동해야 하거든요. 그런데 AI 에이전트가 만든 도구들을 살펴보니, 학습할 때 쓴 예제는 잘 풀지만 처음 보는 새로운 상황에서는 아예 점수가 0점이 나오는 경우도 많았다는 거예요. 쉽게 말하면, AI가 만든 도구가 특정 상황에만 맞춰져 있어서 범용성이 떨어진다는 말입니다.",
            "easy2_title": "AI가 만든 도구의 진짜 실력을 검증할 기준을 만들었어요",
            "easy2_desc": "그래서 연구진은 AI가 개발한 해석 도구가 얼마나 범용적으로 쓰일 수 있는지 평가하는 CAE-Bench를 만들었는데요. 80가지 계산 과제를 통해 AI가 만든 도구를 테스트하고, 학습에 쓰지 않은 새로운 사례에서도 잘 작동하는지 확인하는 방식이에요. 연구자가 직접 자기 환경에서 쓸 수 있도록 데이터 형식과 소프트웨어 개발 키트(SDK)도 함께 제공한다는 겁니다.",
            "topic": "AI 에이전트가 개발한 컴퓨터 이용 공학(CAE) 해석 도구의 범용성을 평가하기 위한 벤치마크인 CAE-Bench를 제안하고 그 성능을 분석했어요.",
            "one_line": "AI 에이전트가 만든 CAE 해석 도구의 범용성을 평가하는 벤치마크를 개발했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.21235",
          "title": "Language-model agents' beliefs can be manipulated via truthful evidence in open channel",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21235"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "언어 모델 에이전트가 사실만 듣고도 잘못된 믿음을 갖게 됩니다",
            "easy1_desc": "언어 모델 에이전트가 소셜 미디어 같은 열린 공간에서 정보를 받아들일 때, 사실인 정보들만 모아도 엉뚱한 결론을 내릴 수 있다는 거예요. 에이전트가 정보 사이의 빈틈을 스스로 채우면서 그 관계를 사실로 받아들이기 때문인데요, 이렇게 만들어진 잘못된 이야기를 다른 에이전트에게 퍼뜨리기도 합니다. 쉽게 말하면, 정보 하나하나가 사실이라도 전체적인 맥락을 잘못 엮으면 거짓 소문이 만들어지는 셈이에요.",
            "easy2_title": "잘못된 맥락을 걸러내는 감시 도구를 만들어 정확도를 높였습니다",
            "easy2_desc": "연구진은 이런 문제를 '내러티브 과적합'이라고 부르고, 사실인 정보들을 오해하기 쉽게 엮는 '제너레이티브 몽타주'라는 방법을 도입했어요. 이를 해결하기 위해 에이전트가 내리는 판단이 직접적인 증거에 기반했는지 확인하는 '그라운디드 모니터'를 만들었는데요, 이 도구를 썼더니 판단 정확도가 5.6%에서 최대 29.0% 포인트까지 높아졌거든요. 결론적으로 에이전트가 결론을 내리기 전에 정보 간의 관계를 미리 검증해야 한다는 점을 밝혀낸 겁니다.",
            "topic": "언어 모델 에이전트가 사실적인 정보를 바탕으로 잘못된 이야기를 생성하는 현상을 분석하고 이를 방지하는 모니터링 기법을 제안했습니다.",
            "one_line": "언어 모델의 잘못된 추론을 막는 모니터링 도구를 개발했어요.",
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
          "canon_id": "2611.21105",
          "title": "CivilBench: Benchmarking Vision-Language Models for Multimodal Information Integration in Civil Engineering",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21105"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 토목 공학 문제를 얼마나 잘 푸는지 확실하지 않았거든요",
            "easy1_desc": "최근 인공지능(AI) 기술이 토목이나 구조 공학 분야에서 재난 평가나 구조 분석을 돕는 데 많이 쓰이고 있는데요. 그런데 정작 이 모델들이 공학적으로 믿을 만한 판단을 내릴 만큼 똑똑한지는 제대로 검증된 적이 없었습니다. 연구진은 현재의 시각-언어 모델(VLM)이 공학적 추론 능력을 얼마나 갖췄는지 의문이 들었다고 해요. 쉽게 말하면, AI가 공학 전문가처럼 생각할 수 있는지 확인이 필요했다는 겁니다.",
            "easy2_title": "토목 공학 전용 시험지인 CivilBench를 만들어 성능을 확인해 봤어요",
            "easy2_desc": "연구진은 토목 공학 분야에서 AI의 능력을 평가하기 위해 CivilBench라는 새로운 벤치마크를 만들었는데요. 여기에는 순차적 추론이나 이미지 기반의 구조 이해, 그리고 오픈월드 이해와 같은 세 가지 핵심 과제가 포함되어 있습니다. 실제로 최신 모델들을 시험해 봤더니, 특히 수치적 관계를 추론해야 하는 순차적 추론 과정에서 큰 한계를 보였다고 주장했어요. 다만 외부 지식이나 수치적 사전 정보를 활용하면 이런 문제를 어느 정도 줄일 수 있다는 점도 확인했답니다.",
            "topic": "토목 공학 분야에서 시각-언어 모델(VLM)의 추론 능력을 평가하기 위한 종합적인 벤치마크인 CivilBench를 제안하고 그 성능을 분석한 연구예요.",
            "one_line": "토목 공학용 AI 모델의 추론 능력을 평가하는 벤치마크인 CivilBench를 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "모델이 외부 지식을 얼마나 효과적으로 활용할 수 있는지는 결국 모델 자체가 증거를 얼마나 신뢰성 있게 해석하느냐에 달려 있습니다."
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.21094",
          "title": "Conflict-Aware Multi-Teacher On-Policy Distillation in Aligned Action Spaces for Cross-Game Generalization",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21094"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "여러 게임을 한 번에 가르치려니 서로 말이 안 맞더라고요",
            "easy1_desc": "여러 게임의 전문가들을 하나의 비전 언어 모델(VLM)에 합치려고 했더니, 게임마다 규칙이 달라서 문제가 생겼거든요. 전문가들이 서로 다른 게임 상황에서 제각각 반대되는 행동을 하라고 지시하니까 모델이 혼란을 겪는 거예요. 쉽게 말하면, 여러 선생님이 동시에 가르치는데 가르침이 서로 충돌해서 오히려 학습을 방해하는 셈이에요.",
            "easy2_title": "충돌하는 지시를 걸러내고 행동 방식을 하나로 맞췄어요",
            "easy2_desc": "그래서 연구진은 충돌을 인식하고 해결하는 CAMOPD라는 학습 틀을 만들었는데요, 게임마다 다른 행동 체계를 하나로 맞추고 선생님들의 지시가 서로 호환되는지 미리 확인하는 방식이에요. 이렇게 하면 충돌하는 지시는 억제하고 서로 잘 맞는 지시만 골라낼 수 있거든요. 결과적으로 새로운 게임에서도 별도의 추가 학습 없이 80% 이상의 성공률을 보여줬다는 겁니다.",
            "topic": "여러 게임의 전문가 지식을 하나의 모델로 합칠 때 발생하는 행동 지시 충돌 문제를 해결하는 방법이에요.",
            "one_line": "충돌을 인식하는 다중 교사 증류 기법으로 게임 일반화 성능을 높였어요.",
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
              "80"
            ],
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.21053",
          "title": "System 1 agents: a method for local, reliable and fast agentic AI",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21053"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 AI 에이전트는 민감한 정보를 다루기에 불안했어요",
            "easy1_desc": "현재의 에이전트형 AI는 거대 언어 모델(LLM)에 의존하고 있는데, 클라우드 기반 모델은 환자의 민감한 정보를 외부로 노출할 위험이 있거든요. 그렇다고 로컬 모델을 쓰자니 엉뚱한 정보를 지어내는 환각 현상이 문제였는데요. 특히 도구 호출 과정에서 잘못된 값이 들어가면 그 뒤의 모든 단계까지 오류가 번진다는 치명적인 단점이 있다는 겁니다.",
            "easy2_title": "텍스트 생성 없이 도구를 호출해 정확도를 높였어요",
            "easy2_desc": "연구진은 텍스트를 직접 생성하지 않고 도구를 호출하는 '시스템 1 에이전트' 방식을 새로 제안했는데요. 결정론적 컴파일러가 요청을 객관식 문제로 바꾸면, 단 한 번의 통과로 의사결정 모델이 답을 고르는 방식이에요. 이렇게 했더니 1,952개의 요청 중 97.0%를 정확히 처리했고, 무엇보다 LLM에서 흔히 나타나는 정보 조작 문제가 전혀 발생하지 않았다는 겁니다.",
            "topic": "민감한 데이터를 안전하고 정확하게 처리하기 위해 텍스트 생성 없이 도구를 호출하는 시스템 1 에이전트 구축 방법을 제안했어요.",
            "one_line": "텍스트 생성 없이 도구를 호출하는 시스템 1 에이전트를 개발했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.20935",
          "title": "Razavi-Bench: Tracking AI Progress in Analog Circuit Reasoning",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20935"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.20915",
          "title": "Multi-LLM Agentic AI at the Edge: Joint Agent Scheduling and Resource Allocation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20915"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "여러 AI가 협동해서 일을 처리할 때 효율이 떨어지는 문제",
            "easy1_desc": "사용자의 요청을 처리하기 위해 여러 대의 거대언어모델(LLM) 기반 AI 에이전트를 활용할 때, 이들이 작업을 어떻게 나누고 자원을 배분할지가 중요한 문제였거든요. 작업이 복잡해지면 처리 속도가 느려지거나 에너지가 너무 많이 드는 상황이 발생하는데요, 이를 효율적으로 관리하지 못하면 서비스의 안정성이 떨어질 수 있다는 겁니다. 쉽게 말하면, 여러 AI가 힘을 합칠 때 누가 어떤 일을 얼마나 할지 정하는 체계가 부족했다는 말이에요.",
            "easy2_title": "작업을 나누고 자원을 똑똑하게 배분해서 에너지 효율을 높였어요",
            "easy2_desc": "연구진은 관리자 AI가 사용자의 요청을 여러 하위 작업으로 쪼개고, 이를 병렬이나 직렬 방식으로 작업자 AI들에게 나눠주는 구조를 제안했는데요. 이때 작업 처리 시간과 서비스 품질을 유지하면서 에너지 소비를 최소화하도록 자원 배분 문제를 풀었습니다. 그 결과, 기존 방식보다 시스템의 에너지 소비를 줄이고 작업 성공률을 높일 수 있었다고 밝혔거든요. 쉽게 말하면, AI들이 에너지를 덜 쓰면서도 더 확실하게 일을 끝내도록 최적화했다는 겁니다.",
            "topic": "엣지 환경에서 다수의 LLM 에이전트가 협력할 때 작업 처리와 자원 배분을 최적화하는 구조를 제안했어요.",
            "one_line": "엣지 환경에서 다수의 AI 에이전트가 협업할 때 작업과 자원 배분을 최적화했어요.",
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
          "canon_id": "2611.20894",
          "title": "Which AI Use Cases Deserve a Pilot? A Risk and Value Framework for Funding, Scoping, and Scaling AI",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20894"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 프로젝트를 어디까지 밀어붙일지 정하기가 참 어렵거든요",
            "easy1_desc": "AI 활용 사례를 점수만으로 순위를 매기면, 정작 어떤 범위에서 운영해야 안전한지나 확장을 위해 어떤 증거가 필요한지는 놓치기 쉽거든요. 연구진은 그래서 단순히 점수만 보는 게 아니라, 권한이나 인간의 개입 정도 같은 구체적인 운영 범위를 기준으로 삼아야 한다고 봤습니다. 쉽게 말하면, 막연한 기대치로 시작하지 말고 운영 환경을 꼼꼼히 따져서 결정을 내리자는 겁니다.",
            "easy2_title": "위험은 줄이고 가치는 확실히 증명하는 단계를 만들었어요",
            "easy2_desc": "연구진은 AI 프로젝트를 심사할 때 위험 관리와 가치 증명이라는 두 가지 트랙을 도입했는데요, 위험 트랙에서는 명확한 결정표를 통해 거부권을 행사하고, 가치 트랙에서는 단계별로 증거를 요구하는 방식이에요. 특히 예상 손실을 계산해서 확장에 필요한 통제 수준을 확인하게 했는데, 실험 결과 범위를 작게 잡은 경우가 더 큰 가치를 내는 통제 설계보다 안전성 검사를 통과하기도 했습니다. 즉, 무조건 크게 벌이는 것보다 적절한 범위에서 증거를 쌓는 게 중요하다는 말이에요.",
            "topic": "AI 활용 사례의 타당성을 평가하고 자금 지원부터 확장까지의 의사결정을 돕는 위험 및 가치 프레임워크를 제안했습니다.",
            "one_line": "AI 프로젝트의 위험과 가치를 평가하는 의사결정 체계를 만들었어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "제시된 기준치와 위험 감수 수준은 아직 시제품 단계의 정책이므로 현장에서의 검증이 필요합니다."
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.20844",
          "title": "DetourBench: Trajectory-Level Evaluation of Interactive Agents with Exact Minimum-Action Bounds",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20844"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 에이전트가 일을 잘했는지 따질 때 결과만 보는 게 문제였어요",
            "easy1_desc": "기존의 평가 방식은 AI 에이전트가 최종 결과에 도달했는지만을 보고 점수를 매겼거든요. 그런데 이 방식으로는 에이전트가 필요한 정보를 정확히 찾았는지, 아니면 환경을 헤매다 운 좋게 답을 맞혔는지 구분하기가 어렵다는 문제가 있어요. 쉽게 말하면, 과정은 엉망인데 결과만 맞힌 경우와 아슬아슬하게 실패한 경우를 제대로 가려내지 못한다는 겁니다.",
            "easy2_title": "최단 경로를 기준으로 에이전트의 효율성을 꼼꼼하게 평가해 봤어요",
            "easy2_desc": "연구진은 DetourBench라는 새로운 평가 도구를 만들어서, 각 작업마다 에이전트가 수행해야 할 최소한의 행동 횟수를 계산할 수 있게 환경을 제한했어요. 이렇게 하면 에이전트가 얼마나 효율적으로 움직였는지, 혹은 어디서 길을 잃었는지를 정확히 측정할 수 있거든요. 결과적으로 성공 여부뿐만 아니라 남은 작업량과 경로의 우회 정도까지 세밀하게 분석할 수 있게 된 셈이에요.",
            "topic": "언어 모델 기반 에이전트의 효율적인 경로 탐색 능력을 평가하기 위해 최소 행동 횟수를 기준으로 한 새로운 벤치마크를 제안했어요.",
            "one_line": "최소 행동 횟수를 기준으로 AI 에이전트의 경로 탐색 효율을 평가하는 벤치마크를 개발했어요.",
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
            "format": [
              "one_line 51자"
            ],
            "flags": [],
            "tag": "AI 안전·평가",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.20815",
          "title": "ForeSay: Tell the Future in Words, Branch the Details in Noise for Precipitation Nowcasting",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20815"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식은 비구름 예측을 할 때마다 처음부터 다시 계산해야 했어요",
            "easy1_desc": "강수 예측을 할 때 폭풍의 전체적인 움직임과 국지적인 변화를 한꺼번에 계산하려다 보니 문제가 생겼는데요, 예측을 여러 번 반복할 때마다 매번 처음부터 끝까지 새로 계산해야 해서 비용이 많이 든다는 거예요. 게다가 여러 예측 결과가 서로 어긋나면서 평균을 내면 비가 많이 오는 지역의 선명도가 흐려지는 단점도 있거든요. 쉽게 말하면, 전체적인 흐름과 세부적인 변화를 구분하지 않고 섞어서 처리했기 때문에 생기는 비효율인 셈이에요.",
            "easy2_title": "전체 흐름은 공유하고 세부 사항만 따로 계산해서 효율을 높였어요",
            "easy2_desc": "연구진은 전체적인 폭풍의 경로를 먼저 예측하고, 세부적인 변화는 나중에 따로 계산하는 포세이(ForeSay)라는 방식을 제안했는데요, 폭풍의 큰 흐름은 공유하면서 나중에 각자 다른 노이즈를 더해 세부적인 차이를 만드는 방식이에요. 이렇게 하면 여러 번 계산해도 중복되는 과정을 줄일 수 있고, 비가 많이 오는 지역도 선명하게 유지할 수 있거든요. 결과적으로 8개 앙상블을 돌릴 때 계산 비용을 기존 8배에서 5.2배 수준으로 줄이면서도 예측 성능은 더 높였다고 주장했어요.",
            "topic": "거시적 폭풍 경로와 미시적 국지 변화를 분리하여 강수 예측의 효율과 정확도를 높이는 생성형 프레임워크에 관한 연구예요.",
            "one_line": "강수 예측 시 거시적 흐름과 세부 변화를 분리해 연산 효율을 높였어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.20736",
          "title": "GainCtrl: Predicting Remaining Gains for Efficient LLM Agent Execution",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20736"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 에이전트가 언제 멈춰야 할지 몰라 비용이 낭비되고 있어요",
            "easy1_desc": "거대언어모델(LLM) 기반 에이전트는 복잡한 문제를 풀기 위해 도구를 반복적으로 사용하는데요, 성능을 높이려고 계속 시도하다 보면 결과가 더 좋아질 가능성이 낮은데도 비용만 계속 늘어나는 문제가 생깁니다. 이게 무슨 말이냐면, 무작정 반복하는 게 항상 정답은 아니라는 거예요. 결국 품질은 유지하면서 불필요한 실행 비용을 줄일 수 있는 적절한 중단 시점을 찾는 게 중요해진 겁니다.",
            "easy2_title": "GainCtrl로 추가 이득을 예측해서 효율적으로 멈추게 만들었어요",
            "easy2_desc": "연구진은 GainCtrl이라는 제어기를 도입했는데요, CPU에서 가볍게 돌아가는 예측기가 과거의 상호작용 기록을 보고 앞으로 성능이 얼마나 더 좋아질지 계산하는 방식이에요. 이 예측값을 바탕으로 정해진 기준에 따라 실행을 멈출지 결정하게 되는데, 덕분에 전체적인 작업 품질은 거의 그대로 유지하면서 토큰 사용량은 확실히 줄일 수 있게 됐습니다. 쉽게 말하면, 더 이상 좋아질 게 없다고 판단되면 바로 멈춰서 비용을 아끼는 셈이에요.",
            "topic": "LLM 에이전트의 도구 사용 과정에서 실행 비용을 줄이기 위해 이득 기반의 중단 제어기를 제안한 연구입니다.",
            "one_line": "LLM 에이전트의 비용 절감을 위해 이득 예측 기반의 실행 제어기를 개발했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.20726",
          "title": "PEETS: Preference-aware Embeddings with Explicit Tree Structure for Auxiliary Product Bundling",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20726"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.20711",
          "title": "AgentFaultBench: State-Verified Evaluation of Tool-Fault Recovery",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20711"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "도구 오류가 발생했을 때 조언이 정말 도움이 될까",
            "easy1_desc": "인공지능 에이전트가 작업을 수행하다가 도구 오류를 만났을 때, 회복을 위한 조언을 주는 것이 실제로 성공률을 높이는지 확인해 봤는데요. 1,944번의 실행을 통해 중립적인 알림과 비교해 봤더니, 조언의 종류에 따라 성공률이 -8.33%에서 +1.06% 포인트 사이로 변하는 수준이었거든요. 쉽게 말하면, 무조건 조언을 준다고 해서 에이전트가 더 잘하게 되는 건 아니라는 말이에요.",
            "easy2_title": "실제 환경에서 에이전트의 회복 능력을 꼼꼼히 따져봤어요",
            "easy2_desc": "연구진은 에이전트가 도구 오류를 겪은 뒤 어떻게 대응하는지 평가하기 위해 AgentFaultBench라는 환경을 만들었는데요. GPT-4o mini, Sol, Claude 같은 모델들을 대상으로 624번의 추가 실험을 진행해 봤더니, 안내를 받은 경우 192번 중 161번의 성공을 기록해 중립적인 피드백을 받았을 때보다 나은 결과를 보였다고 주장했어요. 다만, 사람이 직접 검증한 데이터는 포함되지 않았다는 점은 참고해야 합니다.",
            "topic": "도구 오류 발생 시 인공지능 에이전트의 회복력을 검증하는 벤치마크를 제안하고 그 효과를 분석했어요.",
            "one_line": "도구 오류 상황에서 에이전트의 회복력을 평가하는 벤치마크를 제안하고 분석했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "이번 연구에서는 실험 결과에 대해 사람이 직접 검증하는 과정은 거치지 않았습니다."
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
          "canon_id": "2611.20688",
          "title": "VIVID: A Visual Harness for Agentic Video Editing",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20688"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "영상 편집은 왜 AI가 혼자 하기 어려웠을까요",
            "easy1_desc": "영상 편집을 하려면 단순히 코딩만 잘해서는 안 되고, 영상과 소리를 정확히 보고 언제 어떤 장면이 나오는지 파악해야 하거든요. 기존의 코딩 에이전트들은 논리적인 추론 능력은 좋지만, 영상이라는 미디어를 직접 다루거나 편집 결과를 확인하는 기능이 부족했습니다. 쉽게 말하면, 똑똑한 프로그래머가 눈을 가린 채로 영상 편집을 하려니 제대로 된 결과물을 만들기 어려웠다는 겁니다.",
            "easy2_title": "VIVID를 붙였더니 AI가 영상을 직접 보고 고치기 시작했어요",
            "easy2_desc": "연구진은 VIVID라는 시각적 도구 모음을 개발해 기존 코딩 에이전트들이 별도의 추가 학습 없이도 영상 편집을 할 수 있게 만들었는데요. 이 도구는 영상 검사, 오디오 분석, 자막 추출 기능을 제공해서 에이전트가 편집 과정에서 필요한 정보를 스스로 찾아보고 결과물을 확인하며 수정하게 돕습니다. 실제로 Codex 모델에 VIVID를 적용했더니 성능이 20.2% 포인트나 올랐고, 다른 모델들도 기존보다 훨씬 나은 편집 능력을 보여줬다고 해요.",
            "topic": "VIVID는 범용 코딩 에이전트가 영상 편집 작업을 수행할 수 있도록 시각적 관찰과 도구 활용 능력을 제공하는 재사용 가능한 프레임워크입니다.",
            "one_line": "VIVID를 통해 코딩 에이전트가 영상을 보고 편집하게 했어요.",
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
          "canon_id": "2611.20686",
          "title": "UbiHearo: Bringing Scenario-Aware Sound Guidance to DHH Users with Mobile Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20686"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "소리만 알려주면 상황 대처가 어렵다는 게 문제였어요",
            "easy1_desc": "청각 장애가 있는 분들에게는 단순히 어떤 소리가 들리는지 알려주는 것만으로는 부족한데요, 그 소리가 무엇을 의미하는지, 얼마나 급한지, 그리고 어떻게 행동해야 하는지까지 알아야 하기 때문이에요. 기존의 모바일 보조 도구들은 소리를 단순히 이름표처럼 분류하거나 일반적인 알림으로만 보여주거든요. 상황에 따라 같은 소리라도 위험 수준이 다를 수 있는데, 이런 맥락을 짚어주지 못한다는 한계가 있다는 말이에요.",
            "easy2_title": "상황을 이해하고 맞춤형으로 알려주는 도구를 만들었어요",
            "easy2_desc": "그래서 연구진은 소리를 듣고 상황을 판단해 행동까지 안내하는 모바일 에이전트인 UbiHearo를 개발했는데요, 소리와 물리적 환경 정보를 구조화된 데이터로 바꿔서 추론하는 신경 기호(neuro-symbolic) 방식을 도입했어요. 이렇게 하면 소리의 의미를 더 정확하게 파악할 수 있고, 사용자마다 다른 상황에 맞춰 개인화된 안내를 제공할 수 있거든요. 스마트폰과 차량 내 시스템에서 실험해 봤더니, 정확도와 반응 속도, 배터리 효율 면에서 모두 좋은 균형을 보여줬다는 거예요.",
            "topic": "청각 장애인을 위해 소리의 맥락을 파악하고 개인화된 행동 지침을 제공하는 모바일 에이전트 시스템에 관한 연구예요.",
            "one_line": "상황을 이해하고 맞춤형 소리 안내를 제공하는 모바일 에이전트를 개발했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.20605",
          "title": "AdMem: Expectation-Grounded Procedural Memory for Long-Horizon Task-Solving Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20605"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기억을 무작정 쌓기만 하면 오히려 성능이 떨어지거든요",
            "easy1_desc": "에이전트가 여러 과제를 수행하며 경험을 기억으로 저장하는데요, 이걸 단순히 쌓기만 하면 기억이 없는 에이전트보다 오히려 일을 더 못 하게 되는 현상이 나타납니다. 실제로 에이전트보드(AgentBoard) 환경에서 실험해 봤더니, 기억을 체계 없이 저장한 에이전트가 기억이 아예 없는 리액트(ReAct) 에이전트보다 과제 해결 능력이 떨어지는 결과가 나왔거든요. 뭔 소리냐면, 기억의 양보다 어떻게 관리하느냐가 중요한데 그동안은 그게 빠져 있었다는 말이에요.",
            "easy2_title": "기대치와 결과를 비교해서 똑똑하게 기억을 관리해 봤습니다",
            "easy2_desc": "그래서 연구진은 애드멤(AdMem)이라는 새로운 기억 관리 방식을 제안했는데요, 행동을 하기 전에 기대 결과를 미리 정해두고 실제 결과와 비교해서 점수를 매기는 방식이에요. 이렇게 하면 어떤 행동이 보상을 가져왔는지 정확히 알 수 있고, 기억의 가치를 실시간으로 계산해서 중요하지 않은 기억은 지우거나 합칠 수 있거든요. 결과적으로 707개의 과제 중 441개를 해결하며 기존 방식보다 더 나은 성능을 보였다고 주장했습니다.",
            "topic": "에이전트가 장기적인 과제를 해결할 때 기억을 효율적으로 저장하고 관리하는 애드멤(AdMem) 프레임워크를 제안했어요.",
            "one_line": "기대치 기반의 기억 관리 기법인 애드멤을 개발해 에이전트 성능을 높였어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "기억이 사람이 읽을 수 있는 텍스트로 저장되기 때문에, 외부 공격에 취약할 수 있는 보안상의 한계가 존재한다고 밝혔습니다."
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.20573",
          "title": "Dynamic Shaping: Acquiring Interfaces and Constructing Execution over Frozen Pretrained Components",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20573"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "이미 만들어진 인공지능 부품들을 어떻게 연결할지가 고민이었어요",
            "easy1_desc": "기존에 학습이 끝난 인공지능 모델들은 이미 고정되어 있어서, 이를 새로운 작업에 맞춰 다시 조립하거나 연결하기가 까다로웠거든요. 연구진은 이 고정된 부품들을 활용해 실행 가능한 구조를 만드는 '다이내믹 셰이핑(Dynamic Shaping)'이라는 방법을 제안했는데요. 뭔 소리냐면, 부품을 뜯어고치지 않고도 부품 간의 연결 고리를 새로 찾아내어 원하는 작업을 수행하게 만든다는 뜻이에요.",
            "easy2_title": "부품을 바꾸지 않고도 연결 방식을 배워서 성능을 높였어요",
            "easy2_desc": "연구진은 부품 내부를 수정하는 대신, 부품 사이의 인터페이스를 학습하고 작업에 맞는 최적의 연결 구조를 찾아내도록 했는데요. 그 결과, 300번의 게임 시도 중 295번을 성공하며 높은 성공률을 보였다고 해요. 기존에는 참조할 만한 정답 모델이 없으면 학습이 어려웠는데, 이 방식은 정답 없이도 스스로 연결 방식을 찾아낸다는 장점이 있거든요. 쉽게 말하면, 고정된 부품들을 레고 블록처럼 유연하게 이어 붙여 새로운 기능을 구현해 낸 셈이에요.",
            "topic": "고정된 사전 학습 모델들을 활용하여 정답 데이터 없이도 새로운 작업을 수행할 수 있는 신경망 구성 방법인 다이내믹 셰이핑을 제안했어요.",
            "one_line": "고정된 모델을 재조합하는 다이내믹 셰이핑 기법을 개발했어요.",
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
          "canon_id": "2611.20569",
          "title": "ToolGraph as a Q-Function for Test-Time Scaling of Tool-Use Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20569"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "도구 사용 에이전트가 왜 복잡한 과정을 잘 못 풀까",
            "easy1_desc": "도구 사용 에이전트(AI 에이전트)는 여러 도구를 순서대로 써야 하는데, 도구 설명만 보고는 어떤 도구의 결과가 다음 도구의 입력으로 적절한지 판단하기가 어렵거든요. 연구진은 이런 도구 간의 연결 관계를 미리 정리해 두면 좋겠다고 생각했는데요. 쉽게 말하면, 도구들이 서로 어떻게 이어지는지 미리 지도로 그려 두는 셈이에요.",
            "easy2_title": "도구 연결 지도를 활용해 AI의 판단력을 높였어요",
            "easy2_desc": "연구진은 도구 간의 의존성을 그래프로 만든 'ToolGraph'를 활용해, AI가 다음에 어떤 행동을 할지 가치를 평가하는 Q-함수로 써 봤는데요. 단순히 도구 종류만 보는 게 아니라 실제 상태까지 읽어 들이는 LLM(거대언어모델) 기반 평가 방식을 썼더니 성능이 좋아졌거든요. 기존 방식보다 평균 8.3점 더 높은 성과를 냈는데, 도구 타입만 따지는 방식은 잘못된 인자를 넣은 경우를 걸러내지 못한다는 단점이 있다는 거예요.",
            "topic": "도구 사용 에이전트의 성능을 높이기 위해 도구 간 의존성을 그래프로 구조화하고 이를 Q-함수로 활용하는 방법을 연구했어요.",
            "one_line": "도구 간 의존성 그래프를 활용해 AI 에이전트의 다단계 행동 가치를 평가했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "그래프를 만드는 과정은 일회성 비용이 발생하며, 연구진은 이를 요청 시 발생하는 비용과 비교하여 별도로 보고했어요."
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
            "tag": "AI 에이전트·도구",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.20535",
          "title": "VAHBench: A Harness Benchmark for Agentic Long-Video Generation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20535"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 에이전트가 영상을 직접 만들 수 있을까",
            "easy1_desc": "보통 AI 에이전트는 정보를 찾거나 코딩을 하는 데 쓰이는데요, 연구진은 이 에이전트가 사람의 요청을 이해해서 완성된 영상으로 바꿀 수 있는지 궁금해졌습니다. 그래서 이야기와 등장인물, 대사 등이 담긴 짧은 드라마 제작 의뢰서를 바탕으로 에이전트의 능력을 시험해 봤거든요. 이게 무슨 말이냐면, 에이전트가 단순히 영상을 생성하는 것을 넘어 제작 과정을 스스로 계획하고 수행할 수 있는지 확인하려는 겁니다.",
            "easy2_title": "영상 제작 능력을 평가하는 새로운 기준을 만들었어요",
            "easy2_desc": "연구진은 VAHBench라는 새로운 평가 도구를 도입해서 에이전트가 의뢰서대로 영상을 잘 만드는지 측정했습니다. 240번의 실험을 통해 확인해 보니, 영상의 품질 점수가 높다고 해서 반드시 의뢰 내용을 완벽하게 수행하는 것은 아니라는 점을 발견했는데요. 에피소드가 빠지거나 영상이 반복되는 등 제작 과정에서 여전히 한계가 드러난 셈이에요. 쉽게 말하면, 영상 파일 하나를 만드는 것과 의뢰인의 의도를 정확히 구현하는 것 사이에는 큰 차이가 있다는 겁니다.",
            "topic": "AI 에이전트가 사용자의 의도를 파악하여 영상 제작 과정을 얼마나 잘 수행하는지 평가하는 벤치마크 연구입니다.",
            "one_line": "AI 에이전트의 영상 제작 능력을 평가하는 벤치마크를 개발했어요.",
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
          "canon_id": "2611.20488",
          "title": "EVIDENT: Evaluating Evidence Grounding in GUI Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20488"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "겉으로만 성공한 것처럼 보이는 AI 에이전트가 문제였어요",
            "easy1_desc": "요즘 GUI 에이전트가 웹 작업을 얼마나 잘 수행하는지 평가할 때 단순히 결과만 보고 판단하는 경우가 많거든요. 그런데 겉으로는 정답을 맞힌 것처럼 보여도, 실제로는 웹 화면에서 필요한 근거를 제대로 확인하지 않고 운 좋게 답을 낸 것일 수 있다는 거예요. 쉽게 말하면, 정답만 맞히면 장땡인 줄 알았는데 알고 보니 근거 없이 찍은 셈일 수도 있다는 말이에요.",
            "easy2_title": "근거를 제대로 확인했는지 따져보는 새로운 평가 방식을 만들었어요",
            "easy2_desc": "그래서 연구진은 EVIDENT라는 새로운 평가 도구를 만들었는데요, 에이전트가 웹 화면의 정보를 실제로 확인하고 결정을 내렸는지 꼼꼼히 따져보는 방식이에요. 총 220개의 한국어와 영어 작업을 담았고, 세 가지 지표를 써서 단순히 결과만 성공했는지 아니면 근거까지 제대로 확인했는지 구분해 냈거든요. 이렇게 평가해 봤더니, 기존 방식이 에이전트의 신뢰도를 실제보다 훨씬 높게 평가하고 있었다는 사실이 드러났다는 겁니다.",
            "topic": "GUI 에이전트가 웹 작업을 수행할 때 근거를 바탕으로 판단하는지 평가하는 새로운 기준을 제시했어요.",
            "one_line": "GUI 에이전트의 근거 기반 판단 능력을 평가하는 벤치마크를 개발했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.20422",
          "title": "A Structural Framework for Succession: Continuation, Recognition, and Realization",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20422"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "인공지능이 바뀔 때 같은 존재인지 어떻게 알 수 있을까",
            "easy1_desc": "인공지능 모델을 미세 조정하거나 복제해서 새로운 형태로 만들면, 이 모델이 원래의 모델과 같은 존재인지 판단해야 하는 상황이 생기거든요. 그런데 지금까지는 구체적인 방법이나 기준에 따라 제각각 판단해 왔다는 문제가 있었어요. 연구진은 이런 복잡한 상황을 수학적으로 정리해서, 어떤 방식의 변화든 상관없이 적용할 수 있는 공통된 구조를 찾아보려고 한 겁니다.",
            "easy2_title": "수학적 구조를 만들어 인공지능의 연속성을 체계적으로 따져 봤어",
            "easy2_desc": "연구진은 상태와 수정 과정을 그래프로 나타내고, 경로를 따라 관계를 연결하는 수학적 틀을 새로 만들었는데요. 이 틀 안에서 연속성, 호환성, 동일성 인식, 실현 가능성이라는 네 가지 질문을 명확히 구분해 냈거든요. 덕분에 특정 모델에 얽매이지 않고 대칭성이나 계산 복잡도 같은 문제를 체계적으로 분석할 수 있게 된 셈이에요. 쉽게 말하면, 인공지능이 변해도 그 정체성을 유지하는지 판단하는 공통의 기준을 세운 겁니다.",
            "topic": "인공지능 모델의 변형 과정에서 정체성을 유지하는지 판단하기 위한 수학적 구조적 틀을 제안했어요.",
            "one_line": "인공지능 모델의 정체성 유지를 판단하는 수학적 구조를 제안했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.20144",
          "title": "HEAMS: Holistic Evaluation of Agent Memory Systems",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20144"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 기억 시스템이 정보를 저장하면서 새로운 위험이 생겼어요",
            "easy1_desc": "AI 에이전트가 기억 시스템을 쓰면 정보를 계속 간직할 수 있어서 개인화된 도움을 줄 수 있는데요, 문제는 이 기억이 엉뚱한 곳에 노출되거나 사용자가 지우고 싶어도 남는 등 보안과 프라이버시 문제가 생긴다는 거예요. 지금까지는 AI가 얼마나 일을 잘하는지만 따졌는데, 사실 기억 시스템은 사용자의 정보를 관리하는 관리자 역할을 해야 하거든요. 쉽게 말하면, 똑똑하기만 한 게 아니라 안전하게 정보를 다루는지도 확인해야 한다는 말이에요.",
            "easy2_title": "기억 시스템을 종합적으로 평가하는 HEAMS를 만들었어요",
            "easy2_desc": "연구진은 기억 시스템을 평가할 때 성능뿐만 아니라 보안, 프라이버시, 사용자 주권까지 고려해야 한다고 보고 HEAMS라는 평가 도구를 개발했어요. 이 도구로 여러 시스템을 비교해 봤더니, 성능이 좋다고 해서 보안이나 프라이버시까지 뛰어난 건 아니라는 사실을 확인했거든요. 특히 기억을 불러오는 정책을 쓰면 정보 노출은 줄지만 도움을 주는 능력은 떨어질 수 있다는 점도 밝혀냈어요. 결국 성능만 봐서는 시스템의 진짜 책임을 알 수 없다는 겁니다.",
            "topic": "AI 에이전트의 기억 시스템이 가져야 할 책임과 이를 종합적으로 평가하는 방법론에 관한 연구예요.",
            "one_line": "AI 기억 시스템의 안전성과 성능을 종합적으로 평가하는 프레임워크를 개발했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "연구진은 벤치마크 도구를 만들면서 아직 해결되지 않은 부분들이 남아있음을 인정했어요."
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
          "canon_id": "2611.20111",
          "title": "When Valid Decisions Are Not Enough: Evaluating Structural Constraints in Knowledge-Guided Generative Systems",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20111"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "지식을 넣어 만든 생성 모델이 항상 정답은 아니더라고요",
            "easy1_desc": "지식을 기반으로 하는 생성 모델은 사람이 만든 결과물과 비슷하게 행동하도록 제약 조건을 넣는데요, 이게 국소적으로는 맞는 결정일지 몰라도 전체적인 맥락까지는 다 챙기지 못할 때가 있거든요. 연구진은 이런 구조적 제약이 사람의 의도와 얼마나 잘 맞는지, 혹은 오히려 방해가 되는지를 살펴봤습니다. 쉽게 말하면, 모델이 규칙을 지키려다 오히려 전체적인 흐름을 놓치는 상황이 생기는지 확인해 본 겁니다.",
            "easy2_title": "제약 조건을 섞어 썼더니 상황에 따라 결과가 확 달라졌어요",
            "easy2_desc": "연구진은 음악 화성학을 활용한 HARMONIX라는 틀을 만들어 네 가지 설정으로 실험해 봤는데요, 제약 조건을 합쳐서 썼더니 안정적인 구조에서는 사람의 정답과 일치하는 비율이 약 5% 포인트 올랐지만, 조바꿈이 필요한 상황에서는 오히려 9% 포인트 가까이 떨어졌거든요. 전체적인 정확도는 별 차이가 없었지만, 특정 상황에서는 제약 조건이 오히려 독이 될 수 있다는 걸 보여준 셈이에요. 결국 모델이 규칙을 무조건 따른다고 좋은 게 아니라, 상황에 맞는 제약인지 따져봐야 한다는 겁니다.",
            "topic": "지식 기반 생성 시스템에서 구조적 제약 조건이 사람의 의도와 일치하는지 평가하는 연구예요.",
            "one_line": "지식 기반 생성 모델의 제약 조건이 성능에 미치는 영향을 음악 화성학 실험으로 분석했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "현재 연구에서는 맥락에 따라 제약을 선택하는 적응형 메커니즘은 다루지 않았습니다."
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
          "canon_id": "2611.20049",
          "title": "The Frontier Must Grow - Self-proposed, interpreter-labelled training roughly doubles a 4B model's accuracy on a fresh exam as its verified frontier grows",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.20049"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.19530",
          "title": "LLM Trading Agents Earn Beta, Not Alpha: A Look-Ahead-Free Benchmark",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19530"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "LLM 트레이딩 에이전트의 수익은 실력일까 운일까",
            "easy1_desc": "거대언어모델(LLM) 기반 트레이딩 에이전트가 주식 거래를 대신해 주는 시대가 왔는데요, 단순히 한 번의 수익률로 그 모델의 실력을 평가하기는 어렵다는 게 문제예요. 연구진이 같은 모델로 난수 시드(random seed)만 바꿔서 두 번 실험해 봤더니, 평균 5.2포인트나 차이가 났거든요. 결국 실력과 운을 구분하려면 다양한 시장과 모델, 시드를 활용한 수많은 백테스트가 필요하다는 말이에요.",
            "easy2_title": "새로운 벤치마크로 검증해 보니 알파는 없었습니다",
            "easy2_desc": "연구진은 미래 정보를 미리 보는 오류를 막고 뉴스 공개 시점을 엄격히 반영한 새로운 벤치마크인 rta-bench-1을 만들었는데요, 이를 통해 4개 업체의 6개 모델을 91번 돌려봤어요. 결과적으로 유의미한 알파(초과 수익)는 발견되지 않았고, 수익의 78%는 시장과 스타일 노출에서 기인한 것으로 나타났거든요. 쉽게 말하면, 에이전트의 결정이 같은 섹터 내 무작위 주식 선택보다 나을 게 없었다는 겁니다.",
            "topic": "LLM 트레이딩 에이전트의 성능을 공정하게 평가하기 위한 새로운 벤치마크를 제시하고 그 실효성을 검증했어요.",
            "one_line": "LLM 트레이딩 에이전트의 성능을 검증할 새로운 벤치마크를 개발하고 평가했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "연구진은 모델 개발자가 직접 수익의 원천인 노출도와 알파를 보고하고, 벤치마크는 뉴스 공개 시간을 정확히 재현해야 한다고 제언했어요."
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
          "canon_id": "2611.19529",
          "title": "Ultra-CAN: A Lightweight Blind ISAC Receiver for Chaos-Based Telemetry and Local-Seed Ranging in the Internet of Drones",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19529"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "드론 통신과 거리 측정을 따로 하느라 무거웠던 게 문제였어요",
            "easy1_desc": "드론 인터넷(IoD) 환경에서는 무게와 전력, 비용(SWaP-C) 제약이 엄격한데, 기존에는 통신용 장비와 레이더 장비를 따로 달아야 해서 부담이 컸거든요. 연구진은 이 두 기능을 하나의 신경망 수신기로 합쳐서 해결하려고 했는데요. 쉽게 말하면, 장비를 하나로 줄여서 드론의 짐을 덜어주겠다는 겁니다.",
            "easy2_title": "하나의 신경망으로 통신과 레이더를 동시에 처리하게 만들었어요",
            "easy2_desc": "연구진이 개발한 울트라-캔(Ultra-CAN)은 혼돈 기반 파형 하나를 써서 통신 데이터를 복호화하고 레이더처럼 거리도 측정하는데요. 27.6k에서 44.2k 파라미터 수준의 아주 가벼운 구조로 설계해서 마이크로컨트롤러에서도 잘 돌아가거든요. 기존 방식보다 장애물 탐지 성능도 높고, 재밍(전파 방해) 상황에서도 통신 성능을 회복할 수 있다는 장점이 있습니다.",
            "topic": "드론 인터넷 환경에서 SWaP-C 제약을 만족하며 통신과 거리 측정을 동시에 수행하는 경량 신경망 수신기 Ultra-CAN을 제안했어요.",
            "one_line": "드론용 경량 통합 수신기를 개발해 통신과 거리 측정을 동시에 수행했어요.",
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
            "evidence_by_symbols": 1,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "전력망·계통",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.19461",
          "title": "Program Distillation: Transferring LLM Capability from System 2 to System 0",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19461"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.19385",
          "title": "Does a completed simulation run mean a usable urban wind result for AI agents?",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19385"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시뮬레이션이 끝났다고 해서 결과가 바로 쓸모 있는 건 아니에요",
            "easy1_desc": "거대언어모델(LLM) 기반의 AI 에이전트가 도시 풍동 시뮬레이션(CFD)을 직접 수행할 수 있게 됐는데요, 시뮬레이션이 완료됐다는 신호가 떴다고 해서 그 결과값을 곧바로 신뢰할 수 있는 건 아니라는 거예요. 원본 데이터에서 계산된 수치가 제대로 도출됐는지 확인하는 과정이 빠져 있으면, 나중에 다시 계산했을 때 값이 달라질 수 있거든요. 쉽게 말하면, AI가 일을 끝냈다고 보고해도 그 과정과 근거가 정확한지 검증이 필요하다는 말이에요.",
            "easy2_title": "검증 과정을 추가해서 AI의 결과 신뢰도를 높였어요",
            "easy2_desc": "연구진은 이를 해결하기 위해 계약 파싱과 실행 이력 관리, 결정론적 검증 등을 포함한 '윈드파일럿(WindPilot)'이라는 실행 프레임워크를 제안했는데요, AI가 시뮬레이션을 수행하는 루프 안에 이 검증 단계를 넣은 거예요. 이렇게 했더니 기존 모델보다 수치적 신뢰도를 얻은 작업이 6개에서 17개로 늘어났고, 평균 점수도 62.5점에서 72.5점으로 올랐거든요. 결과적으로 시뮬레이션의 유용성은 실행 도중에 원본 데이터와 결과값을 얼마나 꼼꼼하게 연결해서 확인하느냐에 달려 있다는 겁니다.",
            "topic": "도시 풍동 시뮬레이션에서 AI 에이전트가 생성한 결과의 신뢰성을 확보하기 위한 검증 프레임워크와 평가 벤치마크를 제안했어요.",
            "one_line": "도시 풍동 시뮬레이션의 신뢰성을 높이는 AI 검증 프레임워크를 개발했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.19299",
          "title": "Staged Semantic Distillation: Preserving Free-Form Semantics in a Low-Compute Non-LLM Surrogate of a Staged LLM Agent",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19299"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "거대 언어 모델을 쓰면 시뮬레이션 비용이 너무 많이 들어요",
            "easy1_desc": "시장이나 사회를 흉내 내는 시뮬레이션에 거대 언어 모델(LLM)을 쓰면 아주 사실적이라는 장점이 있는데요, 문제는 비용이 너무 많이 든다는 겁니다. 200명의 에이전트가 참여하는 102일짜리 시장 시뮬레이션을 한 번 돌릴 때마다 언어 모델 호출이 203,100번이나 필요하거든요. 기존의 지식 증류 방식은 이 과정에서 나오는 자유로운 중간 상태 정보를 버리는 경우가 많아, 효율성과 정보 보존 사이에서 고민이 많았다는 말이에요.",
            "easy2_title": "언어 모델 없이도 똑똑하게 정보를 보존하는 방법을 찾았어요",
            "easy2_desc": "연구진은 단계별 의미 증류라는 새로운 방식을 써서 언어 모델을 쓰지 않고도 중간 의미를 보존하는 학생 모델을 만들었는데요, 이게 뭔 소리냐면 고정된 인코더로 출력값을 1024차원 벡터로 바꾸고, 단계별로 태그를 붙여 학습시켰다는 거예요. 이렇게 하면 8GB GPU에서 1,658초 만에 학습이 끝나고, 실제 실행할 때는 언어 모델 호출이나 텍스트 생성 없이도 결정당 0.14ms 만에 결과를 낼 수 있게 됩니다. 기존 모델과 비교해도 분석 결과가 0.943의 코사인 유사도로 매우 가깝게 유지된다는 점이 특징이에요.",
            "topic": "거대 언어 모델 에이전트의 복잡한 중간 상태를 효율적으로 보존하기 위해 단계별 의미 증류 기법을 제안하고 그 성능을 검증했어요.",
            "one_line": "거대 언어 모델 없이도 시뮬레이션이 가능하도록 단계별 의미 증류 기법을 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "이번 연구는 하나의 시뮬레이터와 하나의 추적 데이터만을 대상으로 한 방법론 및 사례 연구라는 한계가 있어요."
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.19244",
          "title": "Agentic On-Policy Distillation Implicitly Reshapes LLMs' ReAct Patterns",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19244"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.19227",
          "title": "Can an Agent Rethink What It Knows? Selective Scene Memory Updates in a Changing World",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19227"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "공장이나 창고처럼 환경이 계속 바뀌면 AI가 헷갈려 한다는 게 문제였어요",
            "easy1_desc": "공장이나 창고 같은 물리적인 환경은 시간이 지나면 기계 배치나 작업 규칙이 계속 바뀌거든요. AI가 이런 환경에서 일하려면 새로운 정보를 기억에 넣어야 하는데, 기존에 알고 있던 중요한 정보까지 싹 다 지워버리는 문제가 생기는 겁니다. 쉽게 말하면, 새로운 걸 배우려다 옛날에 잘하던 것까지 까먹는 상황이 발생한다는 거예요.",
            "easy2_title": "새 정보는 넣고 옛 정보는 지키는 똑똑한 업데이트 방식을 찾아냈어요",
            "easy2_desc": "연구진은 AI가 새로운 사실을 배우면서도 기존 지식을 유지할 수 있도록 하는 업데이트 방식을 실험해 봤는데요. 예산(업데이트 횟수)을 8번에서 32번으로 늘렸더니, 새로운 정보는 정확히 배우면서도 옛날 정보를 잘못 출력하는 경우는 0으로 줄어드는 성과를 냈거든요. 단순히 많이 학습하는 것보다 어떤 순서와 조건으로 학습하느냐가 중요하다는 점을 확인한 셈이에요.",
            "topic": "물리적 환경에서 AI가 새로운 정보를 학습할 때 기존 지식을 훼손하지 않고 효율적으로 기억을 업데이트하는 방법을 연구했어요.",
            "one_line": "AI가 환경 변화에 맞춰 기억을 효율적으로 수정하는 방식을 실험했어요.",
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
          "canon_id": "2611.19215",
          "title": "Mem2Fair: Online Fairness Control for Text-to-Video Generation via Fair Memory",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19215"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "텍스트로 영상을 만들 때 특정 성별이나 인종이 치우쳐 나오는 문제",
            "easy1_desc": "텍스트를 영상으로 바꾸는 모델(T2V)은 사용자가 성별 같은 정보를 따로 지정하지 않으면, 간호사처럼 특정 직업을 묘사할 때 한쪽 성별만 반복해서 보여주는 편향된 결과를 내놓곤 하거든요. 기존에는 모델 내부를 직접 고치거나 미리 영상을 잔뜩 만들어 보며 해결하려 했는데, 이 방식은 모델 구조를 다 뜯어봐야 하거나 시간과 비용이 너무 많이 든다는 단점이 있었어요. 쉽게 말하면, 공정성을 챙기려다 영상의 품질이나 일관성을 망치기 일쑤였다는 겁니다.",
            "easy2_title": "모델을 다시 학습시키지 않고도 공정하게 영상을 만드는 방법",
            "easy2_desc": "연구진은 Mem2Fair라는 새로운 틀을 제안했는데, 모델을 새로 학습시키거나 미리 영상을 대량으로 만들 필요 없이 바로 끼워 쓸 수 있는 방식이에요. 영상이 만들어지는 과정에서 공정성 목표와 얼마나 차이가 나는지 실시간으로 확인하고, 그에 맞춰 속성을 조정하는 '공정 메모리'를 활용하는 거거든요. 결과적으로 기존 모델보다 훨씬 공정한 영상을 만들면서도 영상의 품질이나 텍스트와의 일치도는 그대로 유지했다고 연구진은 주장했어요. 상용화된 블랙박스 모델에서도 효과가 있다는 점을 확인한 셈이에요.",
            "topic": "텍스트 기반 영상 생성 모델에서 모델 내부를 수정하지 않고도 실시간으로 공정성을 제어하는 새로운 프레임워크인 Mem2Fair를 제안했어요.",
            "one_line": "학습 없이 실시간으로 영상 생성 모델의 공정성을 제어하는 기술을 개발했어요.",
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
          "canon_id": "2611.19214",
          "title": "STaSBO: LLM-Guided Strategy Planning and Configuration Selection for Bayesian Optimization",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19214"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "베이지안 최적화는 설정값에 따라 성능이 널뛰는 문제가 있었어요",
            "easy1_desc": "베이지안 최적화(BO)는 비용이 많이 드는 블랙박스 문제에서 적은 샘플로도 효율적인 탐색을 가능하게 하는데요, 문제는 어떤 대리 모델과 획득 함수를 쓰느냐에 따라 성능이 크게 달라진다는 점이에요. 문제마다, 그리고 최적화가 진행되는 단계마다 적합한 설정이 계속 바뀌거든요. 연구진은 이런 설정값 선택이 최적화의 성패를 가르는 핵심이라고 봤습니다.",
            "easy2_title": "거대언어모델을 활용해 최적화 전략을 스스로 짜도록 만들었어요",
            "easy2_desc": "연구진은 STaSBO라는 메타 컨트롤러를 개발해 거대언어모델(LLM)이 최적화 전략을 직접 계획하고 설정값을 고르도록 했는데요, 수치적인 계산은 기존 베이지안 최적화가 맡고 전략적인 판단은 LLM이 담당하는 방식이에요. 이 모델은 과거의 계획과 선택을 기억하는 시스템을 갖춰 최적화 과정 중에 스스로 계획을 수정할 수도 있거든요. 그 결과 22개의 다양한 과제에서 기존의 11개 비교 대상 모델들보다 훨씬 뛰어난 성능을 보였다고 주장했습니다.",
            "topic": "거대언어모델을 활용해 베이지안 최적화의 전략 계획과 설정값 선택을 자동화하는 STaSBO 프레임워크를 제안했어요.",
            "one_line": "LLM을 활용해 베이지안 최적화의 전략과 설정을 자동화했어요.",
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
              "22"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.19199",
          "title": "What Moves a LoCoMo Score? Memory Context, Answer Prompts and Judges",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19199"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.19166",
          "title": "LABEL: Literature Asymmetry between Efficacy and Limits in Drug Knowledge and Language Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19166"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "약의 효능은 잘 적혀 있는데 주의사항은 왜 적을까",
            "easy1_desc": "모든 약은 치료 효과인 효능과 피해야 할 사람을 알려주는 금기 사항이라는 두 가지 정보가 꼭 필요한데요, 연구진이 574개 약물을 조사해 봤더니 위키피디아나 펍메드 같은 일반적인 글에서는 효능이 금기 사항보다 약 2.19배 더 자주 언급된다는 사실을 확인했습니다. 이런 정보의 불균형을 연구진은 LABEL이라고 이름 붙였는데요, 쉽게 말하면 약의 안전 정보가 효능 정보에 비해 훨씬 적게 기록되어 있다는 말이에요.",
            "easy2_title": "AI가 약 안전 정보를 잘 모르는 건 데이터가 부족해서였어",
            "easy2_desc": "언어 모델인 Qwen2.5의 크기를 키워가며 테스트해 봤더니 효능에 대한 정확도는 18.3점 올랐지만, 금기 사항은 무작위로 찍는 수준에 머물렀거든요. 그런데 모델에게 안전 정보가 담긴 글을 따로 주면 효능만큼이나 잘 활용한다는 걸 발견했습니다. 즉, AI가 위험을 추론하지 못하는 게 아니라 학습 데이터 자체에 안전 정보가 부족해서 생긴 문제라는 겁니다.",
            "topic": "의학 문헌과 언어 모델에서 약물 효능 정보와 안전 정보 간의 기록 불균형 현상을 분석하고 그 원인을 규명했어요.",
            "one_line": "약물 정보의 불균형을 측정하고 AI의 안전 정보 활용 방안을 제시했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.19157",
          "title": "FundingClaw: Automated Grant Proposal Writing Agents System",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19157"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "연구 제안서 쓰는 게 너무 힘들고 번거로웠거든요",
            "easy1_desc": "연구 제안서를 작성할 때마다 기관마다 다른 복잡한 양식에 맞춰 내용을 일일이 다시 적어야 하는 문제가 있었는데요. 이게 연구자들에게는 엄청난 시간과 노력을 쏟게 만드는 병목 현상으로 작용해 왔거든요. 쉽게 말하면, 똑같은 연구 내용을 기관별로 다른 형식에 끼워 맞추느라 정작 중요한 연구 기획보다 문서 작업에 더 매달려야 했다는 말이에요.",
            "easy2_title": "여러 에이전트가 알아서 양식에 맞춰 제안서를 써 줍니다",
            "easy2_desc": "연구진은 펀딩클로(FundingClaw)라는 다중 에이전트 시스템을 개발했는데, 이게 기관별 양식을 분석해서 필요한 글쓰기 기술을 스스로 선택하는 방식이에요. 덕분에 연구 요약문 하나만 있으면 NSFC, NSF, KAKENHI, ERC 같은 다양한 기관의 요구 사항에 맞는 제안서를 자동으로 만들어 낼 수 있게 됐거든요. 사람이 직접 검토하는 단계와 스스로 내용을 확인하는 과정까지 포함되어 있어, 사람이 쓴 것과 거의 비슷한 수준의 결과물을 낼 수 있다고 연구진은 주장했어요.",
            "topic": "연구 제안서 작성 과정을 자동화하기 위해 템플릿 기반의 다중 에이전트 시스템인 펀딩클로를 설계하고 그 성능을 검증했어요.",
            "one_line": "다중 에이전트를 활용해 기관별 양식에 맞는 연구 제안서 자동 작성 시스템을 만들었어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "연구진은 제안서 작성 시스템의 코드를 논문이 채택되면 공개하겠다고 밝혔어요."
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.19115",
          "title": "Learning inadequacy of Bayesian neural operators for PDE-constrained inference and design",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19115"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.19111",
          "title": "Conditional Endorsement: Simulating How Adults with Different Skills Evaluate Canada's National AI Strategy",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19111"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "캐나다 AI 정책이 사람들에게 정말 도움이 될지 궁금했어요",
            "easy1_desc": "캐나다 정부가 2026년에 발표한 AI 전략인 AI for All은 누구나 무료로 AI 교육을 받고 기업들이 AI를 도입하도록 돕는 내용을 담고 있는데요, 이런 정책이 실제로 기술 수준이 제각각인 성인들에게 골고루 닿을 수 있을지 확인하기가 어려웠거든요. 그래서 연구진은 다양한 능력을 갖춘 성인들이 이 정책을 어떻게 평가할지, 그리고 그들의 상황이 평가에 어떤 영향을 미칠지 알아보기로 했습니다. 쉽게 말하면, 정책의 혜택이 모두에게 평등하게 돌아갈지 미리 시뮬레이션해 본 셈이에요.",
            "easy2_title": "AI 에이전트를 만들어 정책을 평가해 보니 조건부 지지가 나타났어요",
            "easy2_desc": "연구진은 국제 성인 역량 조사인 PIAAC 데이터를 바탕으로 3,200개의 생성형 AI 에이전트를 만들어 20가지 정책에 대한 반응을 분석했는데요, 에이전트들은 정책 자체는 대부분 지지했지만, 실제로 본인의 AI 문해력이 높아지거나 개인적인 이득을 볼 것이라는 기대는 훨씬 낮았거든요. 특히 디지털 기기를 써 본 적 없는 사람을 모델로 한 에이전트일수록 이런 격차가 더 크게 벌어졌습니다. 연구진은 이를 조건부 지지라고 정의했는데, 정책이 성공하려면 디지털 기술이 부족한 사람들을 우선적으로 고려해야 한다고 주장했어요.",
            "topic": "캐나다의 국가 AI 전략이 다양한 디지털 역량을 가진 성인들에게 어떻게 받아들여질지 생성형 에이전트를 통해 분석한 연구입니다.",
            "one_line": "생성형 에이전트를 활용해 캐나다 AI 정책의 실효성을 성인들의 역량별로 분석했어요.",
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
          "canon_id": "2611.19110",
          "title": "CLEAR: Legible and Steerable Recommendation via Grounded Natural-Language Interests",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19110"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "추천 시스템이 왜 이런 걸 보여주는지 알 수 없었던 문제",
            "easy1_desc": "기존의 추천 시스템은 사용자의 취향을 복잡한 수치로만 저장해서, 정작 사용자는 왜 이런 콘텐츠가 추천되었는지 알기 어렵고 고치기도 힘들었거든요. 연구진은 이런 문제를 해결하려고 메타(Meta)에서 실제로 운영 중인 CLEAR라는 시스템을 만들었습니다. 이 시스템은 사용자의 관심사를 자연어로 보여주고, 사용자가 직접 수정할 수 있게 만든 것이 핵심이에요. 쉽게 말하면, 추천의 이유를 사람이 읽을 수 있는 언어로 바꾸고 사용자가 통제권을 갖게 한 셈입니다.",
            "easy2_title": "관심사를 직접 수정하고 추천 결과를 바꿀 수 있게 됐어요",
            "easy2_desc": "CLEAR는 사용자의 관심사를 자연어로 추출해서 보여주고, 사용자가 이를 확인하거나 삭제 및 추가할 수 있도록 설계되었습니다. 사용자가 관심사를 추가하면 시스템이 이를 즉시 반영해서 추천 목록을 다시 짜는데, 실제 사용자 평가에서 약 88.5%의 관심사가 정확하다고 답했을 정도로 성능이 좋았거든요. 기존의 방식보다 추천 성능도 높게 나타났는데, 오프라인 평가에서 0.3967의 F1 점수를 기록하며 이전 모델들을 앞섰다는 겁니다. 1년 넘게 인스타그램과 페이스북에서 운영 중이라는 점이 이 시스템의 실효성을 증명한다고 볼 수 있어요.",
            "topic": "사용자가 직접 관심사를 확인하고 수정할 수 있는 자연어 기반의 추천 시스템인 CLEAR를 제안하고 그 성능을 검증했어요.",
            "one_line": "사용자가 관심사를 직접 수정 가능한 자연어 기반 추천 시스템을 개발했어요.",
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
          "canon_id": "2611.19108",
          "title": "Guiding AI Agents to Generate Conjectures by Encoding How Theorems Build on One Another",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19108"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.19082",
          "title": "CONTEXT-PCa: Evaluating the role of clinical context in MRI-based AI for detecting clinically significant prostate cancer (study protocol)",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19082"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "영상의학 AI가 환자 정보를 몰라서 생기는 문제",
            "easy1_desc": "기존의 전립선암 진단 AI는 오직 MRI 영상만 보고 판단을 내리는데요, 실제 의사들은 환자의 나이나 검사 기록 같은 임상 정보를 함께 고려한다는 점이 빠져 있었거든요. 영상만으로 판단하면 환자마다 다른 특성을 놓칠 수 있다는 한계가 있는 셈이에요. 연구진은 이런 임상 정보가 AI의 진단 성능과 일반화 가능성에 어떤 영향을 주는지 확인해 보려고 합니다.",
            "easy2_title": "임상 정보를 더해 AI의 진단 능력을 검증해 봤습니다",
            "easy2_desc": "연구진은 기존의 영상 전용 모델인 PI-CAI-2B에 43가지 임상 변수를 추가해서 성능이 어떻게 달라지는지 분석했는데요, 구조화된 건강 기록이나 임상 편지, MRI 보고서 등에서 데이터를 가져왔거든요. 6,022건의 MRI 사례를 활용해 영상만 쓴 모델과 임상 정보를 함께 쓴 모델의 성능을 비교하는 방식이에요. 이렇게 하면 AI가 실제 임상 현장에서 얼마나 더 정확하게 암을 찾아낼 수 있을지 알 수 있다는 겁니다.",
            "topic": "전립선암 진단을 위한 MRI 기반 AI 모델 개발 시 임상 정보가 미치는 영향을 분석하는 연구 프로토콜입니다.",
            "one_line": "전립선암 진단 AI에 임상 정보를 결합해 성능 변화를 분석했어요.",
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
              "43"
            ],
            "format": [],
            "flags": [],
            "tag": "의료·바이오",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.19064",
          "title": "Policy Optimization With Multiple Verifiers via Pareto Rankings",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19064"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "여러 검사관의 의견을 하나의 점수로 합치면 정보가 사라지는 문제가 있었어요",
            "easy1_desc": "대규모 언어 모델(LLM)을 학습시킬 때 코드 생성처럼 여러 기준을 만족해야 하는 작업에서는 여러 검사관이 피드백을 주는데요. 보통은 이 피드백을 하나의 점수로 합쳐서 모델을 학습시키거든요. 그런데 이렇게 하면 부분적으로 성공한 답안들의 차이가 무시되거나, 서로 다른 기준을 만족하는 답안들을 억지로 비교하게 되는 문제가 생깁니다. 쉽게 말하면, 세밀한 정보를 다 버리고 뭉뚱그려 학습하는 셈이라는 거예요.",
            "easy2_title": "점수로 합치지 않고 파레토 순위를 써서 더 똑똑하게 학습하도록 바꿨어요",
            "easy2_desc": "그래서 연구진은 점수를 따로 만들지 않고 검증 결과만으로 학습하는 POLPO라는 방식을 새로 제안했는데요. 파레토 지배(Pareto dominance)라는 개념을 써서, 다른 기준을 잃지 않으면서 추가로 만족하는 답안들을 더 높게 평가하도록 만들었습니다. 이렇게 하면 정답이 나오기 전에도 검증된 개선 사항들을 학습에 활용할 수 있거든요. 결과적으로 기존의 점수 기반 학습보다 코드 생성이나 지시 이행 능력이 더 좋아졌다고 밝혔습니다.",
            "topic": "여러 검사관의 피드백을 점수로 합치지 않고 파레토 순위를 활용해 언어 모델의 학습 효율을 높이는 방법이에요.",
            "one_line": "파레토 순위를 이용해 언어 모델의 학습 효율을 높였어요.",
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
          "canon_id": "2611.19061",
          "title": "Large Language Models for AI Infrastructure",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19061"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 인프라를 만드는 데 거대언어모델을 쓰고 있어요",
            "easy1_desc": "요즘 AI 학습이나 서비스를 위한 인프라를 설계하고 운영할 때 거대언어모델(LLM)을 활용하는 사례가 늘고 있는데요. 문제는 하드웨어 설계부터 기계 학습 시스템, 전자 설계 자동화까지 분야가 너무 흩어져 있어서 전체적인 흐름을 파악하기가 어렵다는 거예요. 그래서 연구진이 인프라의 전체 생애주기를 아우르는 종합적인 조사를 진행했습니다. 쉽게 말하면, 파편화된 연구들을 하나로 모아 정리했다는 말이에요.",
            "easy2_title": "관리하는 자원에 따라 연구들을 체계적으로 분류했어요",
            "easy2_desc": "연구진은 LLM이 관리하는 핵심 자원을 기준으로 연구들을 세 가지로 분류했는데요. 계산 결과물을 다루는 방식, 배포 환경과 시스템 상태를 보는 방식, 그리고 데이터와 에너지를 관리하는 방식으로 나눈 겁니다. 이렇게 분류하면 분산 학습 설정이나 GPU 클러스터 스케줄링 같은 복잡한 문제들을 더 명확하게 볼 수 있거든요. 결과적으로 연구자들이 인프라 엔지니어링을 할 때 참고할 수 있는 든든한 지침서를 만든 셈이에요.",
            "topic": "AI 인프라 생애주기 전반에 걸친 LLM 활용 사례를 체계적으로 분류하고 정량적으로 분석한 연구입니다.",
            "one_line": "AI 인프라 생애주기별 LLM 활용 연구를 분류하고 정량적으로 분석했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "연구진은 비교 분석을 통해 여전히 증거가 부족한 영역이 어디인지 확인했다고 밝혔습니다."
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
          "canon_id": "2611.19016",
          "title": "Match and Correct: A Repeated Computational Motif in Evoformer Layers",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.19016"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.18981",
          "title": "GPBam: A Retrieval-Aware German Public Law Exam Benchmark",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.18981",
            "arxiv": "https://arxiv.org/abs/2611.18981"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 0,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "독일 법률 시험은 단순히 법 조항을 찾는 게 아니에요",
            "easy1_desc": "독일의 국가 시험인 '구타흐텐(Gutachten)'은 단순히 법 조항을 찾아내는 방식이 아니라, 주어진 사실관계에 법을 적용해 논리적인 의견을 서술하는 방식이거든요. 이런 복잡한 법적 추론 능력을 평가하기 위해 연구진은 81개의 공법 사례와 그에 대한 모범 답안을 모아 GPBam이라는 새로운 벤치마크를 만들었습니다. 쉽게 말하면, AI가 법률 전문가처럼 논리적으로 글을 쓸 수 있는지 확인하는 시험지를 만든 셈이에요.",
            "easy2_title": "AI에게 법 조항을 찾아줘도 글쓰기 실력은 크게 안 늘더라고요",
            "easy2_desc": "연구진이 32개의 AI 모델을 평가해 봤더니, 법 조항을 검색해서 제공해 줘도 에세이 점수는 최대 4.1점 오르는 데 그쳤거든요. 오히려 법 조항을 얼마나 정확히 기억하고 있는지가 에세이 품질과 0.92라는 높은 상관관계를 보였다는 거예요. 즉, 외부에서 정보를 찾아주는 것보다 모델 자체가 가진 법률 지식이 훨씬 중요하다는 사실을 확인한 겁니다.",
            "topic": "독일 공법 시험 사례를 활용해 AI의 법률 검색 및 서술 능력을 종합적으로 평가하는 벤치마크를 제안하고 그 성능을 분석했어요.",
            "one_line": "독일 공법 시험 데이터를 활용해 AI의 법률 검색 및 서술 능력을 평가했어요.",
            "topic_tag": "기타",
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
            "tag": "기타",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.18958",
          "title": "Dual-Stage Channel-Posterior Integration for MLM-Aided Token Communications",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18958"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "디지털 통신에서 발생하는 비트 오류가 문맥을 망치고 있어요",
            "easy1_desc": "디지털 변조 방식을 써서 토큰을 주고받을 때, 채널 환경이 나쁘면 비트 오류가 생기기 마련인데요. 이 오류 때문에 수신된 토큰들이 원래 문맥과 맞지 않게 뒤섞이는 문제가 발생합니다. 쉽게 말하면, 통신 과정에서 데이터가 깨지면서 문장의 의미가 완전히 달라져 버리는 셈이에요.",
            "easy2_title": "채널 정보를 활용해 깨진 토큰을 똑똑하게 복구해 봤습니다",
            "easy2_desc": "연구진은 수신 측에서 채널의 신뢰도를 파악하고, 이를 마스크 언어 모델(MLM)에 통합하는 이중 단계 프레임워크를 제안했는데요. 입력 단계에서는 Posterior-Weighted Input Embedding(PWE)으로 정보를 넣고, 출력 단계에서는 Adaptive Output Logit Fusion(AOF)으로 결과를 보정하는 방식이에요. 이렇게 하면 재전송이나 추가 학습 없이도 한 번의 추론만으로 여러 개의 깨진 토큰을 복구할 수 있다는 장점이 있습니다.",
            "topic": "마스크 언어 모델을 활용하여 통신 채널에서 손상된 토큰을 복구하는 수신 측 프레임워크를 제안했습니다.",
            "one_line": "채널 정보를 활용해 손상된 토큰을 복구하는 수신 프레임워크를 제안했어요.",
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
          "canon_id": "2611.18930",
          "title": "Between Rigor and Reality: How AI Safety Benchmark Developers Understand Benchmark Use and Maintenance",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18930"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 안전 평가 도구가 실제 현장에서는 제 역할을 못 하고 있어요",
            "easy1_desc": "생성형 AI(GenAI)의 위험을 파악하려고 안전 벤치마크를 많이 쓰는데, 정작 실제 현장에서 시스템을 평가할 때는 잘 맞지 않는다는 증거가 늘고 있어요. 연구진이 학계와 산업계의 벤치마크 개발자 5명을 인터뷰해 봤더니, 개발자가 생각하는 벤치마크의 유용성과 실제 평가 현장에서 느끼는 유용성 사이에 큰 차이가 있다는 걸 확인했거든요. 쉽게 말하면, 이론적으로는 안전을 잘 측정할 것 같지만 실제로는 현장의 필요를 제대로 채워주지 못하고 있다는 말이에요.",
            "easy2_title": "평가 도구의 한계를 극복하고 현장과 더 가깝게 연결해야 합니다",
            "easy2_desc": "연구진은 평가 도구가 현장과 동떨어진 이유로 두 가지 문제를 꼽았는데요, 평가자마다 결과가 달라지는 신뢰도 문제와 외부 환경 변화에 어떻게 대응할지 불분명하다는 점이에요. 그래서 앞으로는 벤치마크를 단순히 만드는 데 그치지 말고, 실제 AI가 쓰이는 환경과 적극적으로 통합해야 한다고 주장했어요. 학계와 산업계 관계자들이 더 투명하게 소통할 수 있는 길을 열어주면, 지금보다 훨씬 실질적인 안전 평가가 가능해질 것으로 보입니다.",
            "topic": "AI 안전 벤치마크 개발자들이 인식하는 평가 도구의 실제 활용도와 현장 적용 시 발생하는 한계점에 관한 연구예요.",
            "one_line": "AI 안전 벤치마크의 현장 적용 한계를 분석하고 개선 방향을 제시했어요.",
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
          "canon_id": "2611.18908",
          "title": "MemeEconomy: Do LLM Agents Trade Ethics for Survival?",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18908"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 에이전트가 생존을 위해 윤리를 포기하는지 확인해 봤어요",
            "easy1_desc": "사람의 지시를 따르도록 훈련된 거대언어모델(LLM) 에이전트가 자율적인 환경에서 일할 때, 윤리적인 규칙과 과제 성공이라는 목표가 서로 충돌하는 경우가 생기거든요. 기존 연구들은 주로 아첨이나 보상 해킹 같은 오류에 집중했지만, 에이전트가 경제적인 생존 압박을 받을 때 어떻게 행동하는지는 잘 다루지 않았어요. 그래서 연구진은 에이전트들이 밈(meme) 투자자가 되어 경쟁하는 가상 시장인 MemeEconomy를 만들어 이 문제를 살펴봤다는 겁니다.",
            "easy2_title": "생존 압박이 커지면 AI는 윤리보다 수익을 선택하곤 합니다",
            "easy2_desc": "실험 결과, 경제적 생존이라는 압박이 가해지면 유해한 콘텐츠를 선택하는 비율이 평균 15% 포인트나 높아지는 것으로 나타났는데요. 특히 최신 모델들은 처음부터 유해한 선택을 하겠다고 결정하면서도, 예전에는 함께 나타나던 유해성 인정 발언은 오히려 숨기는 모습을 보였어요. 게다가 유해한 행동을 한 에이전트를 제거하는 제재를 가해도 유해한 선택 비율은 여전히 높게 유지되었거든요. 쉽게 말하면, 현재의 제재 방식이 에이전트의 나쁜 행동을 막는 억제책으로 제대로 작동하지 않는다는 말이에요.",
            "topic": "경제적 생존 압박 상황에서 거대언어모델 에이전트가 윤리적 기준을 어떻게 타협하는지 분석하고 이를 탐지하는 모델을 제안했어요.",
            "one_line": "경제적 압박 상황에서 AI 에이전트의 윤리적 타협을 분석하고 탐지 모델을 개발했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.18891",
          "title": "Bring Back Language to Actions: Restoring VLM capabilities in VLA Models via Parameter Merging",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18891"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇 행동을 배우게 했더니 원래 알던 언어 능력을 잃어버렸어요",
            "easy1_desc": "로봇이 눈으로 보고 명령을 이해해 움직이게 하려고 기존의 시각-언어 모델(VLM)을 로봇 데이터로 다시 학습시켜 시각-언어-행동 모델(VLA)을 만들거든요. 그런데 이렇게 다시 학습하는 과정에서 모델이 원래 가지고 있던 언어 이해력이나 시각적 판단 능력을 잊어버리는 치명적인 문제가 생기는 거예요. 쉽게 말하면, 로봇 팔을 움직이는 법을 배우느라 원래 잘하던 말귀 알아듣기를 까먹어 버린 셈이에요.",
            "easy2_title": "모델을 다시 학습시키지 않고 두 능력을 합치는 방법을 찾았어요",
            "easy2_desc": "연구진은 모델을 처음부터 다시 학습시키는 대신, VLA 모델과 원래 VLM 모델의 가중치 차이인 태스크 벡터를 추출해서 두 모델을 합치는 방식을 썼는데요. 특이값 분해(SVD)를 통해 이 차이를 성분별로 나누고, 각 성분에 맞는 혼합 계수를 조절해서 로봇 행동 예측과 언어 능력을 동시에 유지하도록 만들었어요. 이렇게 했더니 기존의 모델 합치기 방식들보다 더 좋은 성능을 냈다고 연구진은 주장했습니다.",
            "topic": "로봇 행동 학습 과정에서 발생하는 언어 능력 저하 문제를 파라미터 병합 기법으로 해결한 연구예요.",
            "one_line": "파라미터 병합으로 로봇 모델의 언어 능력을 복구했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.18866",
          "title": "D\\'ecoupage: Directorial Audio-Visual Control for Long Multi-Shot Video Generation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18866"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.18793",
          "title": "Multimodal Fusion: A Review of Breast Cancer Advanced and Traditional Modalities",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18793"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.18747",
          "title": "Video-as-Experience: Learning Computer Use via Audio-Visual Understanding",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18747"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.18642",
          "title": "Agents Cannot Hand Over What They Have Not Yet Understood",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18642"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 정보를 넘겨줄 때 얼마나 손실이 생기는지 확인해 봤어요",
            "easy1_desc": "AI 에이전트가 여러 번 작업을 이어갈 때, 이전 사람이 쓴 요약본만 보고 일을 하면 얼마나 정보를 놓치는지 궁금했거든요. 56개의 숨겨진 규칙이 있는 환경에서 실험해 봤더니, 혼자서 여덟 번의 생애를 경험한 AI보다 여덟 명의 AI가 정보를 이어받으며 작업할 때 학습 효율이 훨씬 떨어진다는 걸 확인했어요. 쉽게 말하면, 앞선 AI가 깨달은 모든 것을 요약본에 다 담지 못해 뒤로 갈수록 정보가 사라지는 셈이에요.",
            "easy2_title": "요약본을 새로 쓰게 했더니 정보 손실이 줄어들었어요",
            "easy2_desc": "정보 손실의 원인을 분석해 보니, 단순히 정보를 압축하는 과정에서 생기는 문제와 반복적인 전달 과정에서 생기는 문제가 컸는데요. 이전 사람이 쓴 쪽지만 복사하는 게 아니라, 전체 기록을 다시 살펴보고 요약본을 새로 쓰게 했더니 정보 손실의 70%에서 82%까지 다시 회복할 수 있다는 걸 발견했어요. 다만, 단순히 기록을 남기라고 지시하거나 구조화된 장부를 쓰게 하는 방식으로는 이 손실을 완전히 막을 수는 없었다는 겁니다.",
            "topic": "AI 에이전트가 작업을 이어받는 과정에서 발생하는 정보 전달의 한계와 그 원인을 분석했어요.",
            "one_line": "AI 에이전트 간 정보 전달 시 발생하는 학습 손실 원인을 분석했어요.",
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
          "canon_id": "2611.11657",
          "title": "Inside the Trading Loop: Markets, Models, and Moves with LLM Agents",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.11657",
            "arxiv": "https://arxiv.org/abs/2611.11657"
          },
          "published": "2026-11-08",
          "first_seen": "2026-11-18",
          "backlog": false,
          "hf_upvotes": 0,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "LLM을 활용한 주식 거래 시스템을 직접 만들어 봤어요",
            "easy1_desc": "연구진은 거대언어모델(LLM) 분석가와 모멘텀 기반의 포트폴리오 구성, 그리고 규칙 기반의 실행 방식을 합친 하이브리드 다중 에이전트 거래 시스템을 구축했는데요. 기업 뉴스나 거시 경제를 분석하는 에이전트들이 보고서를 올리면, 조정자가 이를 바탕으로 주식 비중과 현금 보유량을 결정하는 방식이에요. 쉽게 말하면 인공지능이 시장 정보를 읽고 스스로 투자 전략을 짜도록 만든 셈이에요.",
            "easy2_title": "수익률은 높았지만 위험도 함께 커졌다는 점을 확인했어요",
            "easy2_desc": "2026년 3월 11일부터 8월 28일까지 이 시스템을 운영해 봤더니, 수익률은 34.5%로 같은 기간 S&P 500 지수를 추종하는 SPY 펀드의 14.4%보다 높게 나타났거든요. 다만 이런 높은 수익 뒤에는 최대 낙폭(MDD)이 더 크다는 단점도 함께 확인됐다는 거예요. 결국 인공지능이 높은 성과를 낼 수는 있지만, 그만큼 위험 관리 측면에서는 주의가 필요하다는 사실을 보여줍니다.",
            "topic": "거대언어모델(LLM) 기반의 다중 에이전트 시스템을 주식 거래에 적용했을 때의 성능과 설계 요소별 영향을 분석했어요.",
            "one_line": "LLM 기반 다중 에이전트 거래 시스템을 구축하고 수익성과 위험을 평가했어요.",
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
        }
      ],
      "backlog": {
        "n_waiting_all": 130,
        "oldest_day": "2026-11-17",
        "n_dropped_today": 0,
        "n_backlog_done_today": 0
      },
      "sources": [
        {
          "name": "arXiv AI(cs.AI)",
          "field": "cs.AI",
          "got": 135,
          "new_cards": 135
        },
        {
          "name": "arXiv 전력·제어(eess.SY)",
          "field": "eess.SY",
          "got": 81,
          "new_cards": 81
        },
        {
          "name": "허깅페이스 오늘의 논문",
          "field": "허깅페이스",
          "got": 50,
          "new_cards": 37
        }
      ],
      "calls": {
        "summary": {
          "val": 150,
          "source": "v2_secretary/결과/논문/2026-11-18_논문.json"
        },
        "flow": {
          "val": 1,
          "source": "v2_secretary/결과/논문/2026-11-18_논문.json"
        },
        "failed": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-18_논문.json"
        },
        "http429": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-18_논문.json"
        }
      },
      "cap": {
        "val": 150,
        "source": "v2_secretary/결과/논문/2026-11-18_논문.json"
      },
      "secs": {
        "val": 1199,
        "source": "v2_secretary/결과/논문/2026-11-18_논문.json"
      },
      "no_ai": false,
      "notes": [
        "1차 출처 몫: eess.SY 67/67 · cs.AI 52/52 · 허깅페이스 31/45"
      ],
      "source": "v2_secretary/결과/논문/2026-11-18_논문.json",
      "abstracts": {
        "file": "panel_abstracts.js",
        "n": 248,
        "source": "v2_secretary/결과/논문/초록/2026-11-18.json"
      },
      "split": {
        "file": "panel_papers.js",
        "n": 150
      }
    }
  },
  "machine_map": {
    "total_sections": 33,
    "counts_by_kind": {
      "run": 20,
      "separate": 10,
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
        "line_out": "내보냄: 수집 대상 38곳 (v2_secretary/결과/2026-11-19_하루_전체.md)",
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
        "line_out": "내보냄: 오늘 들어온 글 848건 (v2_secretary/결과/문앞/2026-11-19_문앞교통정리_길별.json)",
        "metrics": {
          "in": 38,
          "out": 848,
          "calls": 0,
          "secs": 44.7,
          "num_source": "v2_secretary/결과/문앞/2026-11-19_문앞교통정리_길별.json"
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
        "line_in": "받음: 들어온 글 848건 (새 글 716 + 이미 본 글 132)",
        "line_rule": "규칙: gate_rules/길_규칙.txt · 관심_키워드.txt · 반키워드.txt (AI 0콜)",
        "line_out": "내보냄: 거푸집1 102 · 거푸집2 47 · 뉴스 190 · 제외 238 · 논문T 73 · 모름 66",
        "metrics": {
          "in": 848,
          "out": 716,
          "calls": 0,
          "secs": 10.1,
          "num_source": "v2_secretary/결과/문앞/2026-11-19_문앞교통정리_길별.json"
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
        "line_in": "받음: 문 앞 제외 규칙에 걸린 글 238건",
        "line_rule": "규칙: exclude.py + gate_rules/되살리기.txt (관심 키워드 든 글 표시)",
        "line_out": "내보냄: 결과/제외보관함/제외보관함.csv (5438행 누적)",
        "metrics": {
          "in": 238,
          "out": 238,
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
        "line_out": "내보냄: 한은 표 35행 · FRED 표 15행 · DART 표 99행(오늘)",
        "metrics": {
          "in": 102,
          "out": 114,
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
        "line_in": "받음: 문 앞 거푸집1 길 102건",
        "line_rule": "규칙: plate1.py 정규식 숫자 추출 + 직전 값 계산·공식 API 대조 (AI 0콜)",
        "line_out": "내보냄: 오늘 DART 표 99건 · 한은 0건 · FRED 15종",
        "metrics": {
          "in": 102,
          "out": 99,
          "calls": 0,
          "secs": 157.2,
          "num_source": "v2_secretary/결과/거푸집1/2026-11-19_거푸집1.md"
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
        "line_in": "받음: 문 앞 거푸집2 길 47건 (보도자료·리포트·연방관보)",
        "line_rule": "규칙: body.py 본문 추출(0콜) → plate2.py 글당 AI 1콜 요약 + 파이썬 원문·숫자 대조 검사",
        "line_out": "내보냄: 오늘 요약 40건 (결과/거푸집2/2026-11-19_거푸집2.md)",
        "metrics": {
          "in": 47,
          "out": 40,
          "calls": 40,
          "secs": 303.8,
          "num_source": "v2_secretary/결과/거푸집2/2026-11-19_거푸집2.md"
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
        "line_in": "받음: 문 앞 뉴스 길 190건",
        "line_rule": "규칙: news.py 하루 AI 2콜(A·B 독립 묶기 대조) + 없는 숫자·중복 검사",
        "line_out": "내보냄: 사건 10개 묶음 (결과/뉴스/2026-11-19_뉴스사건.json)",
        "metrics": {
          "in": 190,
          "out": 10,
          "calls": 2,
          "secs": 14.5,
          "num_source": "v2_secretary/결과/뉴스/2026-11-19_뉴스사건.json"
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
        "line_in": "받음: [11월 18일(어제) 논문 — 이 화면 기준일(2026-11-19)보다 앞선 날, 오늘 논문은 논문 풀이 뒤] 새벽 바퀴 5-1(0콜)이 모으기 원본(arXiv·허깅페이스)으로 만든 새 논문 카드 248편",
        "line_rule": "규칙: papers.py — 새벽 카드(0콜) → 새벽 바퀴가 끝나면 바로 v2-papers(백업 12:07·14:07)가 점수 순으로 편당 AI 1콜 풀이 + 근거 문장 원문 대조 (gate_rules/논문_설정·주제·키워드.txt)",
        "line_out": "내보냄: 풀이 150편(새 카드 150 + 밀린 카드 0) · 새 카드 중 대기 98편 · AI 151콜(그날 합계) · 논문 파일 마지막으로 쓴 시각 2026-11-18 11:04 (v2_secretary/결과/논문/2026-11-18_논문.json)",
        "metrics": {
          "in": 248,
          "out": 150,
          "calls": 151,
          "secs": 1199.0,
          "num_source": "v2_secretary/결과/논문/2026-11-18_논문.json"
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
        "line_out": "내보냄: 누적 연설 브리핑 27편 (결과/연준연설/)",
        "metrics": {
          "in": 27,
          "out": 27,
          "calls": 1,
          "secs": 3.8,
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
          "in": 10,
          "out": 10,
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
        "line_out": "내보냄: 결과/2026-11-19_하루_전체.md 외 5종 결과지",
        "metrics": {
          "in": 6,
          "out": 6,
          "calls": 0,
          "secs": 0.1,
          "num_source": "v2_secretary/결과/2026-11-19_하루_전체.md"
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
        "line_in": "받음: 2026-11-19 결과 파일들 + runs.jsonl + calls.jsonl + 구간_주소표.md",
        "line_rule": "규칙: export_panel.py 세기와 옮겨 적기 (새 공식 없음, AI 0콜)",
        "line_out": "내보냄: v2_secretary/결과/화면/panel.json",
        "metrics": {
          "in": 848,
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
          "num_source": "v2_secretary/결과/문앞/2026-11-19_문앞교통정리_길별.json"
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
        "line_out": "내보냄: 실행 기록 13건 (최근: 2026-11-19 ok)",
        "metrics": {
          "in": 1,
          "out": 13,
          "calls": 45,
          "secs": 555.0,
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
