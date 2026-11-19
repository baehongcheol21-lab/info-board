// 자동 생성 파일 (v2_secretary/export_panel.py) — 직접 수정하지 마세요.
window.PANEL_DATA = {
  "schema_version": "2.1.0-panel-v1",
  "day": "2026-11-19",
  "generated_at": "2026-11-19 10:31:11",
  "made_iso": "2026-11-19T10:31:11+09:00",
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
      "day": "2026-11-19",
      "day_label": "11월 19일(오늘)",
      "made": "2026-11-19T10:31:10",
      "calls": 151,
      "same_day": true,
      "source": "v2_secretary/결과/논문/2026-11-19_논문.json"
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
      "day": "2026-11-19",
      "day_label": "11월 19일(오늘)",
      "day_rel": "오늘",
      "day_note": "11월 19일(오늘) 논문 — 논문 풀이가 끝난 결과예요.",
      "made": "2026-11-19T10:31:10",
      "picks_max": 10,
      "status": "돎 — 2026-11-19 논문 풀이 150편 / 새 논문 170편",
      "headline": {
        "text": "오늘 새 논문 170편 · 풀이한 150편 중 AI 모델·학습법 쪽이 45편으로 가장 많아요.",
        "text_orig": "",
        "n_new": {
          "val": 170,
          "source": "v2_secretary/결과/논문/2026-11-19_논문.json"
        },
        "n_done": {
          "val": 150,
          "source": "v2_secretary/결과/논문/2026-11-19_논문.json"
        },
        "n_done_new": {
          "val": 134,
          "source": "v2_secretary/결과/논문/2026-11-19_논문.json"
        },
        "n_done_backlog": {
          "val": 16,
          "source": "v2_secretary/결과/논문/2026-11-19_논문.json"
        },
        "n_waiting": {
          "val": 36,
          "source": "v2_secretary/결과/논문/2026-11-19_논문.json"
        },
        "n_failed": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-19_논문.json"
        },
        "top_tag": "AI 모델·학습법",
        "top_tag_n": {
          "val": 45,
          "source": "v2_secretary/결과/논문/2026-11-19_논문.json"
        }
      },
      "flow": {
        "text": "오늘 풀이한 논문들 중에서는 AI 모델의 학습 효율을 높이거나 로봇과 제어 시스템의 성능을 개선하는 연구가 가장 많이 눈에 띄었습니다. 예를 들어 어센드 칩 환경에 맞춘 모델 훈련 인프라를 구축하거나, 로봇이 스스로 경로를 찾고 제어하는 알고리즘을 개발한 사례가 대표적인데요. 이와 함께 전력망 안정성을 확보하기 위한 최적화 기법이나 의료 현장에서의 진단 신뢰도를 검증하는 벤치마크 연구들도 다수 포함되어 있습니다. 수학적 이론을 바탕으로 시스템의 안정성을 분석하거나 물리 법칙을 딥러닝에 접목해 배터리 수명을 예측하는 등, 각 분야의 전문성을 높이려는 시도가 두루 나타난 셈입니다.",
        "by": "ai",
        "flags": []
      },
      "map": [
        {
          "tag": "AI 모델·학습법",
          "n": 45,
          "n_done": 45,
          "one_lines": [
            "어센드 칩 환경에서 거대 모델 훈련 인프라와 에이전트 플랫폼을 구축했어요.",
            "실제 작업 부하를 반영한 어센드 NPU용 커널 최적화 벤치마크를 개발했어요.",
            "가중치 공간 프로그래밍을 위한 효율적인 모델 구조를 설계했어요."
          ]
        },
        {
          "tag": "제어·로봇",
          "n": 26,
          "n_done": 26,
          "one_lines": [
            "시스템 식별 개념을 이용해 데이터 기반 모델 차수 축소 기법을 제안했어요.",
            "학습 없이 힘을 물리 정보로 변환해 로봇 제어 성능을 높였어요.",
            "SMT를 활용해 로봇의 경로 합성 효율을 높였어요."
          ]
        },
        {
          "tag": "AI 에이전트·도구",
          "n": 26,
          "n_done": 26,
          "one_lines": [
            "영상 스트리밍 환경에서 AI가 먼저 대화를 시작하고 도구를 쓰도록 개선했어요.",
            "영상 인식과 추론을 분리해 효율적인 분석을 수행했어요.",
            "실제 저장소를 활용한 자동화 환경으로 코딩 에이전트의 학습 효율을 높였어요."
          ]
        },
        {
          "tag": "전력망·계통",
          "n": 20,
          "n_done": 20,
          "one_lines": [
            "마이크로그리드 주파수 제어를 위해 안정성이 보장된 모방 학습 모델을 개발했어요.",
            "가상 발전소의 운영 범위를 할당해 전력망 안전을 확보했어요.",
            "데이터센터의 작업 유연성과 배터리 활용이 전력망 안정성에 미치는 가치를 분석했어요."
          ]
        },
        {
          "tag": "AI 안전·평가",
          "n": 11,
          "n_done": 11,
          "one_lines": [
            "원자력 분야의 전문성을 평가하는 벤치마크를 구축하고 모델의 추론 품질을 검증했어요.",
            "시뮬레이터 기반 학습 모델의 실제 환경 성능 격차와 신뢰도 문제를 분석했어요.",
            "AI 내부 활성화 상태 분석으로 유해 행동 재발 원인을 규명했어요."
          ]
        },
        {
          "tag": "의료·바이오",
          "n": 10,
          "n_done": 10,
          "one_lines": [
            "호흡 데이터 기반 질병 진단 모델의 성능을 평가하는 첫 벤치마크를 구축했어요.",
            "언어 생성 과정 없이 의료 영상을 바로 분석하는 모델을 개발했어요.",
            "기초 모델을 활용해 임상 데이터에서 새로운 질병 특징을 자동으로 추출하고 해석했어요."
          ]
        },
        {
          "tag": "수학·이론",
          "n": 6,
          "n_done": 6,
          "one_lines": [
            "열교환기 오염 법칙이 퇴적 메커니즘을 식별하지 못함을 수학적으로 증명했어요.",
            "세 가지 시스템 식별 알고리즘의 최소화 기준 간 연결성을 수학적으로 분석했어요.",
            "메커니즘 설계와 능동 시스템 이론의 60년 발전 과정을 비교 분석했어요."
          ]
        },
        {
          "tag": "영상·음성·멀티모달",
          "n": 3,
          "n_done": 3,
          "one_lines": [
            "영상 생성 모델의 구조를 개선해 실시간 반응 속도를 구현했어요.",
            "병렬 처리 구조를 도입해 이미지 압축 속도를 높였어요.",
            "혼합 해상도 방식을 개선해 영상 생성 속도와 품질을 높였어요."
          ]
        },
        {
          "tag": "기타",
          "n": 2,
          "n_done": 2,
          "one_lines": [
            "신호 세기에 따라 정보를 동적으로 결합하는 RFFI 기술을 개발했어요.",
            "기후 데이터 축소 모델에 물리 제약과 투영 기법을 적용해 물리적 오류를 제거했어요."
          ]
        },
        {
          "tag": "배터리·저장",
          "n": 1,
          "n_done": 1,
          "one_lines": [
            "물리 법칙 기반의 딥러닝으로 배터리 상태와 수명을 실시간 예측했어요."
          ]
        }
      ],
      "picks": [
        {
          "canon_id": "2611.22129",
          "badge": "전공",
          "why": "전공(전력·제어) 중 키워드가 많이 걸림: microgrid, frequency"
        },
        {
          "canon_id": "2611.22115",
          "badge": "실무 인기",
          "why": "허깅페이스 추천 149"
        },
        {
          "canon_id": "2611.21682",
          "badge": "AI 교집합",
          "why": "인공지능 쪽인데 관심 키워드가 걸림: nuclear, reactor"
        },
        {
          "canon_id": "2611.22563",
          "badge": "교차 출현",
          "why": "여러 곳에 같이 올라옴: cs.AI + 허깅페이스"
        },
        {
          "canon_id": "2611.22283",
          "badge": "의외",
          "why": "오늘 풀이 중 드문 주제 '기타'(1편) — 키워드·추천수와 상관없이 고름"
        },
        {
          "canon_id": "2611.21981",
          "badge": "전공",
          "why": "전공(전력·제어) 중 키워드가 많이 걸림: voltage, transformer"
        },
        {
          "canon_id": "2611.22055",
          "badge": "실무 인기",
          "why": "허깅페이스 추천 47"
        },
        {
          "canon_id": "2611.23226",
          "badge": "의외",
          "why": "오늘 풀이 중 드문 주제 '영상·음성·멀티모달'(3편) — 키워드·추천수와 상관없이 고름"
        }
      ],
      "cards": [
        {
          "canon_id": "2611.22115",
          "title": "TeleChat to Xing4: Advancing Frontier Agentic Models on Domestic Chips and Frameworks",
          "field": "cs.AI",
          "sources": [
            "cs.AI",
            "허깅페이스"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22115",
            "hf": "https://huggingface.co/papers/2611.22115"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 149,
          "score": 11.0,
          "score_why": "추천 149 → +10 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "국산 칩과 프레임워크에서 거대 모델을 돌리기가 어려웠거든요",
            "easy1_desc": "기존에는 거대 언어 모델을 훈련할 때 특정 하드웨어 환경에 최적화된 구조를 찾기가 쉽지 않았는데요, 특히 화웨이의 어센드(Ascend) 칩과 마인드스포어(MindSpore) 프레임워크 환경에서 대규모 모델을 효율적으로 학습시키는 데 한계가 있었던 겁니다. 연구진은 모델의 깊이나 너비, 그리고 주의 집중 구조를 조정하면서 연산 효율과 메모리 접근 속도 사이의 균형을 맞추는 방법을 고민했거든요. 쉽게 말하면, 하드웨어 성능을 최대한 뽑아내기 위해 모델 구조와 훈련 인프라를 처음부터 다시 설계했다는 말이에요.",
            "easy2_title": "국산 인프라에 딱 맞는 훈련 체계와 에이전트 플랫폼을 만들었어요",
            "easy2_desc": "연구진은 어센드 910C 카드 8,192개를 활용해 2,850억 개의 파라미터를 가진 모델을 훈련할 수 있는 인프라를 구축했는데요, 여기에는 분산 최적화와 메모리 관리 기술이 포함되어 있습니다. 또한 텔레짐(TeleGym)이라는 에이전트 실행 플랫폼을 도입해 모델이 스스로 작업을 수행하고 평가하며 학습할 수 있도록 만들었거든요. 이 덕분에 복잡한 추론이나 에이전트 작업에서도 모델이 더 안정적으로 작동하게 되었다는 겁니다. 쉽게 말하면, 하드웨어부터 소프트웨어까지 국산 환경에 최적화된 거대 모델 개발 기반을 마련한 셈이에요.",
            "topic": "어센드 칩과 마인드스포어 프레임워크를 기반으로 거대 언어 모델인 Xing 4 시리즈를 개발하기 위한 모델 구조 설계와 훈련 인프라 기술을 다루고 있어요.",
            "one_line": "어센드 칩 환경에서 거대 모델 훈련 인프라와 에이전트 플랫폼을 구축했어요.",
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
          "canon_id": "2611.17621",
          "title": "AscendGYM: A Cost-Aware Kernel Optimization Benchmark for Real-World Workloads on Ascend NPUs",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17621"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": true,
          "hf_upvotes": 91,
          "score": 9.1,
          "score_why": "추천 91 → +9.1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 벤치마크는 실제 작업 환경을 제대로 반영하지 못했어요",
            "easy1_desc": "기존의 어센드(Ascend) NPU용 커널 벤치마크들은 주로 커널을 새로 만드는 데만 집중해 왔거든요. 그러다 보니 실제 인공지능 모델을 학습하거나 추론할 때 쓰는 다양한 입력 조건에서 기존 코드를 최적화하는 능력은 제대로 평가하기 어려웠다는 문제가 있었어요. 쉽게 말하면, 실전에서 쓰이는 복잡한 상황을 충분히 고려하지 못했다는 말이에요.",
            "easy2_title": "실제 작업 데이터를 담은 벤치마크로 최적화 효율을 측정해요",
            "easy2_desc": "연구진은 실제 학습과 추론 작업에서 수집한 데이터 형태와 텐서 모양을 반영한 48개의 커널로 구성된 어센드짐(AscendGYM)을 만들었어요. 이 벤치마크는 모델이나 에이전트가 최적화를 얼마나 잘하는지 측정할 수 있고, 속도 향상과 비용을 함께 고려하는 새로운 지표인 STS(Speedup-Token Score)를 도입했거든요. 덕분에 예산 안에서 얼마나 실질적인 성능 개선을 이뤄냈는지 정확히 평가할 수 있게 된 셈이에요.",
            "topic": "어센드 NPU 환경에서 실제 작업 부하를 반영해 커널 최적화 능력을 평가하는 벤치마크인 어센드짐을 제안했어요.",
            "one_line": "실제 작업 부하를 반영한 어센드 NPU용 커널 최적화 벤치마크를 개발했어요.",
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
          "canon_id": "2611.22129",
          "title": "Stability-Constrained Imitation Learning for Performance-Guaranteed Neural Feedback Frequency Control in Microgrids",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22129"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 8.0,
          "score_why": "전공 +3 · 키워드 2개(microgrid, frequency) → +4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "microgrid",
            "frequency"
          ],
          "ai": {
            "easy1_title": "마이크로그리드 주파수 제어는 왜 이렇게 어려운 걸까요",
            "easy1_desc": "마이크로그리드에서 주파수를 일정하게 유지하려면 외부 충격이 얼마나 올지 정확히 알아내고, 아주 짧은 시간 안에 제어 신호를 계산해야 하거든요. 그런데 기존 제어 방식으로는 이 과정을 실시간으로 처리하기가 무척 까다롭다는 문제가 있었어요. 뭔 소리냐면, 복잡한 계산을 빠르게 해내면서 동시에 시스템의 안정성까지 챙겨야 하는 이중고를 겪고 있다는 말이에요.",
            "easy2_title": "인공지능을 학습시켜 안정적인 제어기를 만들었어요",
            "easy2_desc": "연구진은 이를 해결하려고 모방 학습(imitation learning)을 활용한 새로운 제어 프레임워크를 제안했는데요, 오프라인에서 최적의 제어 데이터를 미리 뽑아내고 이를 바탕으로 심층 신경망(DNN)을 학습시킨 거예요. 특히 절대 안정성 이론을 활용한 리아푸노프(Lyapunov) 기반의 제약 조건을 넣어, 인공지능이 제어해도 시스템이 안정적으로 작동하도록 만들었거든요. 결과적으로 인공지능이 방해 요소를 파악하고 제어까지 한 번에 처리하면서 학습 효율도 크게 높였다고 주장했어요.",
            "topic": "마이크로그리드의 주파수 조절을 위해 안정성이 보장된 심층 신경망 기반의 모방 학습 제어 프레임워크를 제안하고 검증했어요.",
            "one_line": "마이크로그리드 주파수 제어를 위해 안정성이 보장된 모방 학습 모델을 개발했어요.",
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
          "canon_id": "2611.21981",
          "title": "Who Gets the Grid Capacity? Allocating Dynamic Access Among Multiple Virtual Power Plants",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21981"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 8.0,
          "score_why": "전공 +3 · 키워드 2개(voltage, transformer) → +4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "voltage",
            "transformer"
          ],
          "ai": {
            "easy1_title": "여러 가상 발전소가 전력망을 공유하면서 생기는 문제",
            "easy1_desc": "여러 가상 발전소(VPP)가 같은 도매 시장에서 거래하며 배전선과 변압기를 함께 쓰는데요, 각자 이익만 챙기다 보면 변압기가 견딜 수 있는 열 한계를 넘기거나 전압이 정상 범위를 벗어나는 일이 생기거든요. 전력 회사는 각 지점의 전체 전력량만 볼 수 있어서 이런 상황을 막기가 어렵다는 말이에요. 쉽게 말하면, 개별 발전소의 욕심이 전체 전력망의 안전을 위협하는 상황인 겁니다.",
            "easy2_title": "발전소마다 운영 범위를 정해주니 전력망이 훨씬 안전해졌어요",
            "easy2_desc": "연구진은 벤더스 분해(Benders decomposition)라는 방식을 써서 각 발전소에 24시간 동안의 운영 범위를 할당해 봤는데요, 발전소는 자신의 비용이나 상태 같은 정보를 숨긴 채 최적의 계획을 세우고, 전력 회사는 이 범위를 조정해 전체 망을 안전하게 지키는 방식이에요. 이렇게 했더니 변압기 온도가 치솟는 위험이 크게 줄었고, 발전소는 자신의 정보를 보호하면서도 전력망의 한계를 지킬 수 있게 됐거든요. 결과적으로 발전소의 수익을 일부 포기하는 대신 전력망의 안전을 확실히 챙긴 셈이에요.",
            "topic": "가상 발전소들이 공유하는 전력망의 안전을 지키기 위해 각 발전소에 운영 범위를 할당하는 최적화 기법을 제안했어요.",
            "one_line": "가상 발전소의 운영 범위를 할당해 전력망 안전을 확보했어요.",
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
          "canon_id": "2611.22814",
          "title": "Capacity Credit of Data-Centre Flexibility: The Role of Workload Scheduling and Usable Battery Energy",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22814"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(battery) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "battery"
          ],
          "ai": {
            "easy1_title": "데이터센터마다 전력망에 기여하는 정도가 다릅니다",
            "easy1_desc": "데이터센터가 전력 수요를 줄여준다고 해서 모두 똑같이 전력 공급 안정성에 도움을 주는 건 아니거든요. 연구진은 데이터센터가 가진 작업 스케줄링과 현장에 설치된 배터리를 활용해, 전력망이 부족할 때 얼마나 실질적인 도움을 줄 수 있는지 그 능력을 따져봤습니다. 쉽게 말하면, 똑같이 전력을 아껴도 그 방식에 따라 전력망을 튼튼하게 만드는 효과가 다르다는 걸 확인한 셈이에요.",
            "easy2_title": "작업을 미룰 수 있는 시간과 배터리 용량이 핵심입니다",
            "easy2_desc": "연구진은 작업을 미룰 수 있는 기한이 길수록 데이터센터가 전력망에 기여하는 용량 가치가 커진다는 걸 밝혀냈는데요, 이는 운영자가 작업을 언제 미루고 다시 시작할지 선택할 수 있는 폭이 넓어지기 때문이에요. 반면 배터리는 무조건 큰 것보다 방전 시간이 길수록 더 큰 가치를 보여줬고, 비상용 전력은 예비 전력으로 보호해야 해서 활용도가 낮다는 점도 확인했습니다. 결국 전력 수요를 줄이는 것뿐만 아니라, 작업을 얼마나 유연하게 조정할 수 있는지와 실제 쓸 수 있는 배터리 에너지를 함께 고려해야 한다는 겁니다.",
            "topic": "데이터센터의 작업 스케줄링과 배터리 유연성이 전력망 공급 안정성에 기여하는 용량 가치를 분석한 연구입니다.",
            "one_line": "데이터센터의 작업 유연성과 배터리 활용이 전력망 안정성에 미치는 가치를 분석했어요.",
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
          "canon_id": "2611.22520",
          "title": "A Discrete Digital Isolator with Shielded Planar Transformer for Gate Driver Applications",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22520"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(transformer) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "transformer"
          ],
          "ai": {
            "easy1_title": "전력 장치에서 신호를 안전하게 주고받기가 어려웠어요",
            "easy1_desc": "전력 전자 기기에서는 높은 전압이 흐르는 곳과 제어하는 곳을 전기적으로 분리하는 절연 기술이 꼭 필요한데요, 기존에는 이 과정에서 외부 노이즈가 섞여 들어오는 문제가 있었거든요. 특히 스위칭이 일어날 때 전압이 급격히 변하는 상황에서는 신호가 왜곡되기 쉬운데, 이게 시스템 전체의 안정성을 떨어뜨리는 원인이 된다는 말이에요. 쉽게 말하면, 전압 변화가 심한 환경에서도 신호를 깨끗하게 전달하는 게 기술적인 숙제였다는 겁니다.",
            "easy2_title": "평면 변압기를 써서 노이즈를 막고 구조도 간단해졌어요",
            "easy2_desc": "연구진은 인쇄회로기판(PCB)에 평면형 코어리스 변압기를 구현하고, 그 사이에 정전기 차폐막을 넣어서 노이즈를 막는 방식을 택했는데요, 이렇게 했더니 전압이 빠르게 변하는 환경에서도 신호가 섞이지 않고 잘 유지된다는 걸 확인했어요. 기존 복잡한 부품 대신 개별 소자를 활용해 구조를 단순화했다는 장점도 있는데, 대신 성능은 15 kV/us 이상의 노이즈 내성을 보여준다는 거예요. 쉽게 말하면, 간단한 구조로도 높은 수준의 신호 안정성을 확보했다는 말이에요.",
            "topic": "전력 전자 기기용 게이트 드라이버를 위해 평면 변압기를 활용한 디지털 절연기 설계와 그 성능을 검증했어요.",
            "one_line": "평면 변압기를 활용한 디지털 절연기를 설계하고 성능을 검증했어요.",
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
          "canon_id": "2611.22455",
          "title": "MARS: Feature-guided physics-informed deep learning for real-time battery health and lifetime prediction",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22455"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(battery) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "battery"
          ],
          "ai": {
            "easy1_title": "배터리 상태를 정확히 알아내는 게 왜 이렇게 어려운가요",
            "easy1_desc": "전기차 같은 이동 수단에서 배터리의 건강 상태(SOH)와 남은 수명(RUL)을 정확히 아는 건 안전과 비용 측면에서 정말 중요한데요. 그런데 배터리를 쓰는 환경이 계속 바뀌고, 노화 방식도 일정하지 않은 데다 측정할 때마다 알 수 없는 잡음까지 섞여서 정확한 예측이 쉽지 않았거든요. 쉽게 말하면, 배터리가 어떻게 늙어가는지 파악하는 게 생각보다 복잡한 문제라는 겁니다.",
            "easy2_title": "물리 법칙을 활용한 새로운 예측 방법으로 정확도를 높였어요",
            "easy2_desc": "연구진은 MARS라는 새로운 예측 틀을 제안했는데, 배터리 내부의 물리 법칙을 반영한 모델과 데이터를 학습하는 인공지능을 결합한 방식이에요. 이 모델은 배터리의 빠른 변화와 느린 노화 과정을 따로 떼어 분석하고, 불확실한 상황에서도 강하게 버티며 예측값을 내놓거든요. 그 결과 기존 방식보다 훨씬 정확하게 배터리 상태를 맞히고, 수명 예측의 신뢰 구간까지 확실하게 제공할 수 있게 됐다는 겁니다.",
            "topic": "물리 기반의 딥러닝과 적응형 필터를 결합하여 배터리의 건강 상태와 남은 수명을 실시간으로 예측하는 기술을 개발했어요.",
            "one_line": "물리 법칙 기반의 딥러닝으로 배터리 상태와 수명을 실시간 예측했어요.",
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
            "bad_numbers": [
              "100"
            ],
            "format": [],
            "flags": [],
            "tag": "배터리·저장",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.22354",
          "title": "Data-driven model reduction: An identification perspective using Generalized Bases of Orthonormal Functions",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22354"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(frequency) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "frequency"
          ],
          "ai": {
            "easy1_title": "복잡한 시스템을 간단하게 줄이는 새로운 방법을 찾아봤습니다",
            "easy1_desc": "시스템 식별이라는 개념을 활용해서 데이터 기반으로 모델의 차수를 줄이는 방법을 제안했는데요, 이게 무슨 말이냐면 복잡한 수학적 모델을 더 다루기 쉬운 작은 모델로 바꾸는 과정이에요. 기존에는 모델을 줄일 때 어려움이 있었는데, 이번에는 GBOF(일반화된 정규 직교 전달 함수 기저)를 사용해서 모델을 매개변수화하는 방식을 도입했거든요. 쉽게 말하면 복잡한 시스템의 핵심 특징만 뽑아내서 더 효율적인 모델을 만들겠다는 겁니다.",
            "easy2_title": "기저 극점을 잘 골라서 모델의 정확도를 높였습니다",
            "easy2_desc": "모델의 차수를 줄이는 문제를 GBOF 변환과 관련된 Hambo 주파수 영역에서 정의했는데요, 여기서 핵심은 모델의 정확도를 결정하는 기저 극점을 어떻게 선택하느냐는 거예요. 연구진은 이 극점들을 선택할 때 도움을 줄 수 있는 적합도 지표를 새로 도입했는데, 이걸 활용하면 모델이 주파수 영역에서 얼마나 잘 맞는지 조정할 수 있거든요. 결과적으로 이 지표가 극점을 고르는 데 유용한 경험적 가이드를 제공한다는 점이 달라진 부분입니다.",
            "topic": "시스템 식별 개념을 활용하여 GBOF 기반의 데이터 주도 모델 차수 축소 기법을 제안하고 그 최적화 방식을 설명합니다.",
            "one_line": "시스템 식별 개념을 이용해 데이터 기반 모델 차수 축소 기법을 제안했어요.",
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
          "canon_id": "2611.22239",
          "title": "Solver-Free and Cost-Aware Online Scheduling of AI Data Center Tasks",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22239"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(data center) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "data center"
          ],
          "ai": {
            "easy1_title": "AI 데이터 센터는 계산할 때마다 시간이 걸리고 전기료도 계속 바뀌는 게 문제였어요",
            "easy1_desc": "AI 데이터 센터로 들어오는 작업들은 쉴 새 없이 이어지는데, 기존처럼 최적화 도구(solver)를 써서 일정을 짜려면 계산 시간이 너무 오래 걸린다는 문제가 있거든요. 게다가 전기 요금은 시간대별로 계속 변하는데, 이런 상황을 실시간으로 반영하기가 쉽지 않았던 겁니다. 쉽게 말하면, 작업은 밀려드는데 정작 일정을 짜는 과정이 너무 무겁고 느렸다는 말이에요.",
            "easy2_title": "복잡한 계산기 없이도 전기료 싼 시간에 맞춰 일을 배분하는 규칙을 만들었어요",
            "easy2_desc": "그래서 연구진은 복잡한 최적화 도구 없이도 작동하는 새로운 온라인 규칙을 제안했는데요, 이 규칙은 듀얼 분해(dual decomposition)라는 수학적 원리를 활용해서 작업이 들어오자마자 바로 시작 시간을 정해 주는 방식이에요. 전기료가 싼 시간대에는 유연한 작업들을 몰아넣고, 급한 작업은 제때 처리하도록 조절하는 거죠. 결과적으로 계산 시간은 훨씬 줄이면서도 전기료는 낮추는 효과를 거뒀다고 주장했습니다.",
            "topic": "AI 데이터 센터에서 전기 요금과 운영 제약을 고려해 실시간으로 작업 일정을 짜는 효율적인 규칙을 제안했어요.",
            "one_line": "최적화 도구 없이 실시간으로 전기료를 아끼는 AI 작업 일정 관리 규칙을 개발했어요.",
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
            "format": [
              "easy1_title 한 줄 아님/너무 김(46자)"
            ],
            "flags": [],
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.22167",
          "title": "AI Agents Executing an RMS and EMT Ride-Through Workflow on a 2,000-Bus Synthetic Texas Grid: A Case Study with Open-Source Tools",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22167"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(battery) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "battery"
          ],
          "ai": {
            "easy1_title": "복잡한 전력망 분석을 AI 에이전트에게 맡겨 봤습니다",
            "easy1_desc": "연구진은 2,000개의 버스로 구성된 텍사스 전력망 모델에서 AI 에이전트가 전력 계통의 안정성을 평가하는 과정을 자동으로 수행하도록 해 봤는데요. RMS(Root Mean Square)와 EMT(Electromagnetic Transient)라는 두 가지 분석 방식을 활용해 배터리와 데이터 센터가 포함된 시스템의 성능을 검증한 겁니다. 쉽게 말하면, 사람이 일일이 하던 복잡한 시뮬레이션 작업을 AI가 대신 수행하며 기록까지 남기도록 만든 셈이에요.",
            "easy2_title": "AI가 분석한 결과 전력망의 문제점들을 찾아냈습니다",
            "easy2_desc": "AI 에이전트가 44번의 RMS 사례를 분석한 결과, 모든 경우에서 동기화 상실이 발생하는 등 총 127개의 기준 셀에서 실패가 확인됐거든요. 특히 배터리가 전압 강하 상황에서도 무효 전력을 계속 흡수하거나, 데이터 센터의 부하가 규정된 시간 내에 복귀하지 못하는 문제들이 발견됐습니다. 연구진은 이러한 결과가 전력망 운영 기준을 충족하지 못하는 사례임을 보여준다고 주장했습니다.",
            "topic": "오픈 소스 도구를 활용해 AI 에이전트가 전력 계통의 안정성 평가 업무를 수행한 사례 연구입니다.",
            "one_line": "오픈 소스 도구를 이용해 AI 에이전트가 전력망 안정성 평가를 수행하게 했습니다.",
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
          "canon_id": "2611.22056",
          "title": "Grid-Aware Assessment of Forced Oscillations from Spatially Distributed Large Loads",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22056"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(frequency) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "frequency"
          ],
          "ai": {
            "easy1_title": "데이터센터처럼 큰 부하가 전력망을 흔드는 문제를 분석했어요",
            "easy1_desc": "하이퍼스케일 데이터센터 같은 대형 부하가 생기면서 전력망에 주기적인 변동이 나타나고 있는데요, 이런 변동이 전력망의 주파수에 어떤 영향을 주는지 파악하는 게 중요해졌거든요. 연구진은 부하의 위치나 파형 특성에 따라 전력망이 얼마나 흔들리는지 분석하는 통합 분석 틀을 개발했습니다. 쉽게 말하면, 큰 부하가 어디서 어떻게 전력망을 흔드는지 정밀하게 계산해 본 셈이에요.",
            "easy2_title": "어디에 부하를 분산해야 전력망이 덜 흔들릴지 찾아냈어요",
            "easy2_desc": "연구진은 결정론적 모델과 확률적 모델을 써서 전력망의 주파수 편차를 분석하고, 허용 가능한 변동 범위를 정하는 기준을 만들었는데요. 이 기준을 바탕으로 전체 부하의 변동을 전력망의 민감도가 낮은 곳으로 분산시키는 최적화 기법을 제안했습니다. 이렇게 하면 전력망 전체의 진동 강도를 크게 줄일 수 있다는 결과가 나왔거든요. 결과적으로 전력망의 안정성을 높이는 구체적인 전략을 제시한 겁니다.",
            "topic": "공간적으로 분산된 대형 부하가 전력망에 유발하는 강제 진동을 평가하고 이를 완화하기 위한 최적화 프레임워크를 제안했어요.",
            "one_line": "대형 부하의 전력 변동이 전력망에 미치는 영향을 분석하고 진동을 줄이는 최적화 기법을 개발했어요.",
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
            "format": [
              "one_line 54자"
            ],
            "flags": [],
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.21982",
          "title": "Emerging Vertical Power Delivery in AI Data Centers: Challenges and Solutions",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21982"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(voltage) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "voltage"
          ],
          "ai": {
            "easy1_title": "AI 데이터 센터의 전력 수요가 감당하기 힘들 정도로 커졌어요",
            "easy1_desc": "AI 작업이 급격히 늘어나면서 데이터 센터의 프로세서가 필요로 하는 전류량이 2000 A까지 치솟을 것으로 보입니다. 기존의 측면 전력 공급 방식(LPD)으로는 이 정도의 큰 전류를 안정적으로 보내는 데 한계가 있다는 건데요. 쉽게 말하면, 전력을 옆에서 밀어 넣어주는 방식으로는 이제 전력 공급이 버거워졌다는 말이에요.",
            "easy2_title": "전력을 위에서 아래로 바로 꽂는 수직 공급 방식으로 바꾸고 있어요",
            "easy2_desc": "그래서 연구진은 전력 공급 장치를 프로세서 바로 아래에 배치하는 수직 전력 공급(VPD) 기술을 검토했습니다. 실제로 전압 조정기 모듈(VRM)을 50 mm 거리에서 프로세서 바로 아래로 옮겨 봤더니, 루프 인덕턴스가 거의 절반으로 줄어드는 효과가 나타났거든요. 다만 조정기 높이나 열 관리 같은 해결해야 할 과제들도 여전히 남아 있다는 점을 연구진은 지적했습니다.",
            "topic": "AI 데이터 센터의 전력 공급망(PDN)을 기존 측면 방식에서 수직 방식으로 전환하기 위한 기술적 과제와 설계 가이드라인을 다루고 있습니다.",
            "one_line": "AI 데이터 센터의 수직 전력 공급 전환을 위한 설계 기술과 과제를 분석했어요.",
            "topic_tag": "전력망·계통",
            "limit": "수직 전력 공급을 실제로 구현하려면 조정기 높이, 수동 소자 내장, 그리고 열 관리 문제를 해결해야 한다고 밝혔습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
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
              "예측 의심: AI 작업이 급격히 늘어나면서 데이터 센터의 프로세서가 필요로 하는 전류량이 2000 A까지 치솟을 것으로 "
            ],
            "tag": "전력망·계통",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.22055",
          "title": "Weight-Space Programming Doesn't Need Transformers",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.22055",
            "arxiv": "https://arxiv.org/abs/2611.22055"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 47,
          "score": 5.7,
          "score_why": "추천 47 → +4.7 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "트랜스포머 구조가 꼭 필요한 건 아니더라고요",
            "easy1_desc": "기존 신경망들은 그래디언트 하강법으로 학습하기 좋고 GPU에서 빠르게 돌아가서 트랜스포머(Transformer)를 주로 썼는데요. 가중치 공간 프로그래밍(Weight-space programming)에서는 거대언어모델(LLM)이 직접 가중치를 써 내려가기 때문에 굳이 트랜스포머를 고집할 이유가 없다는 거예요. 뭔 소리냐면, 학습 방식이 바뀌었으니 그에 맞는 새로운 구조를 고민해 봐야 한다는 말이에요.",
            "easy2_title": "모델이 직접 설계한 표 방식이 훨씬 효율적이었어요",
            "easy2_desc": "연구진은 세 개의 최신 LLM에게 직접 구조를 설계하게 시켜 봤는데요. 그 결과 텍스트 정보를 희소 테이블(Sparse table) 형태로 정리하고 이를 절차적으로 조회하는 방식을 택했는데, 이게 기존 트랜스포머보다 정확도는 높으면서 파라미터는 약 1,800배나 적게 썼다는 겁니다. 가중치를 직접 수정할 수 있어 오류를 찾기도 쉽고, 연산 속도도 최대 17배까지 빨라진다는 장점이 있거든요.",
            "topic": "가중치 공간 프로그래밍 환경에서 트랜스포머 대신 연관 기억 기반 모델을 사용하는 것이 더 효율적이라는 연구예요.",
            "one_line": "가중치 공간 프로그래밍을 위한 효율적인 모델 구조를 설계했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "사전 학습된 모델이 여전히 정확도 면에서는 더 뛰어난 성능을 보인다고 밝혔어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.19800",
          "title": "Multi-Branch Transformer",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.19800",
            "arxiv": "https://arxiv.org/abs/2611.19800"
          },
          "published": "2026-11-15",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 43,
          "score": 5.3,
          "score_why": "추천 43 → +4.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "트랜스포머 모델을 더 크게 만드는 새로운 길을 찾았어요",
            "easy1_desc": "기존의 트랜스포머 언어 모델은 블록을 옆으로 넓히거나 위로 쌓는 방식으로만 키워 왔는데요, 연구진은 이와는 다른 방법으로 블록을 병렬로 배치하는 가지치기 방식을 제안했어요. 입력 데이터를 공유 층에서 처리한 뒤 여러 독립적인 블록으로 나누어 계산하고, 마지막에 다시 합치는 구조예요. 이렇게 하면 같은 계산량을 썼을 때 기존 방식보다 더 나은 성능을 낼 수 있다는 겁니다.",
            "easy2_title": "모델 성능은 높이고 추론 속도는 더 빠르게 만들었어요",
            "easy2_desc": "연구진은 가지치기 구조에 더해 긴 문맥을 처리할 때 효율을 높이는 조인트 KV(Joint-KV) 기술을 도입했는데요, 각 층에서 가지들의 정보를 합쳐 공유 캐시를 만드는 방식이에요. 이를 통해 모델의 KV 캐시 저장 공간을 최대 34% 줄이고, H200 GPU에서 디코딩 처리량을 최대 51.4%까지 높였다고 해요. 결과적으로 기존 트랜스포머보다 1.26배 적은 학습 계산량으로도 같은 수준의 성능을 낼 수 있다는 점을 확인한 셈이에요.",
            "topic": "멀티 브랜치 트랜스포머(MBT) 구조를 통해 언어 모델의 학습 효율과 추론 속도를 동시에 개선하는 방법을 제시했어요.",
            "one_line": "병렬 가지 구조와 공유 캐시 기술로 언어 모델의 효율을 높였어요.",
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
          "canon_id": "2611.21682",
          "title": "NEBench R1: a Reasoning Benchmark for Evaluating Nuclear Domain Competence in Large Language Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21682"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 5.0,
          "score_why": "키워드 2개(nuclear, reactor) → +4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "nuclear",
            "reactor"
          ],
          "ai": {
            "easy1_title": "원자력 분야에서 거대언어모델이 얼마나 똑똑한지 따져볼 기준이 없었어요",
            "easy1_desc": "원자력 공학 같은 안전이 중요한 분야에 거대언어모델(LLM)을 쓰려는 시도가 늘고 있는데요, 기존에 있던 평가 도구들은 단순히 정답만 맞히는지 확인하는 수준이라 모델이 왜 그런 답을 내놨는지 논리적인 과정을 제대로 살피기 어려웠거든요. 뭔 소리냐면, 답은 맞혔어도 그 과정이 원자력 공학적으로 타당한지 검증할 방법이 부족했다는 말이에요. 그래서 연구진은 원자력 분야의 전문성을 제대로 평가할 새로운 기준이 필요하다고 봤다는 겁니다.",
            "easy2_title": "원자력 면허 시험 문제로 모델의 추론 능력을 꼼꼼하게 검증해 봤어요",
            "easy2_desc": "연구진은 미국 원자력규제위원회(NRC)의 원자로 운전원 면허 시험 문제 7,546개를 모아 NEBench R1이라는 새로운 평가 도구를 만들었는데요, 이걸로 6개 모델을 시험해 봤더니 정답률은 34.0%에서 73.9%까지 다양하게 나타났거든요. 단순히 답만 맞히는 게 아니라 모델이 내놓은 근거가 얼마나 정확한지 평가해 보니, 답은 맞혀도 기술적인 설명이 부족하거나 틀린 경우가 많았다는 거예요. 쉽게 말하면, 정답을 냈다고 해서 모델의 추론 과정까지 완벽하게 믿을 수는 없다는 사실을 확인한 셈이에요.",
            "topic": "거대언어모델이 원자력 공학 분야에서 얼마나 신뢰할 수 있는 추론을 수행하는지 평가하기 위해 NEBench R1 벤치마크를 제안했어요.",
            "one_line": "원자력 분야의 전문성을 평가하는 벤치마크를 구축하고 모델의 추론 품질을 검증했어요.",
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
          "canon_id": "2611.21099",
          "title": "ForceHarness: Turning Force into Action and Physics for Frozen Frontier Models",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.21099",
            "arxiv": "https://arxiv.org/abs/2611.21099"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 39,
          "score": 4.9,
          "score_why": "추천 39 → +3.9 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇이 힘을 못 느끼면 정교한 작업이 어렵거든요",
            "easy1_desc": "최신 멀티모달 모델은 이미지로 로봇을 조종할 수 있지만, 정작 중요한 접촉 힘은 눈으로 볼 수 없다는 문제가 있어요. 게다가 힘은 모델이 판단하는 속도보다 훨씬 빠르게 변해서, 모델이 일일이 대응하기엔 너무 느리다는 단점이 있거든요. 쉽게 말하면, 눈은 있는데 손끝 감각이 없는 상태로 로봇을 움직이려니 한계가 컸던 셈이에요.",
            "easy2_title": "힘을 물리 정보로 바꿔서 모델에게 알려줬더니 성능이 확 올랐어요",
            "easy2_desc": "연구진은 ForceHarness라는 도구를 만들어 고정된 모델이 힘을 이해하고 활용하게 만들었는데요, 힘을 스스로 조절하는 기본 동작을 넣고 힘의 변화를 모델이 이해할 수 있는 물리량으로 변환해 전달하는 방식을 썼어요. 이렇게 했더니 실제 로봇 팔에서 GPT-6 Astra의 성공률이 3.3%에서 90.0%로 크게 뛰었다는 거예요. 모델이 날것의 힘 데이터보다 물리적인 수치를 받았을 때 훨씬 더 나은 결정을 내린다는 점도 확인했답니다.",
            "topic": "ForceHarness를 통해 고정된 멀티모달 모델이 별도의 학습 없이도 힘을 감지하고 제어할 수 있도록 만든 연구예요.",
            "one_line": "학습 없이 힘을 물리 정보로 변환해 로봇 제어 성능을 높였어요.",
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
          "canon_id": "2611.17048",
          "title": "Beyond Answering: Learning to Speak First and Act in Streaming Video",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.17048",
            "arxiv": "https://arxiv.org/abs/2611.17048"
          },
          "published": "2026-11-15",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 33,
          "score": 4.3,
          "score_why": "추천 33 → +3.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "사용자가 묻기 전까지는 가만히 있는 게 문제였어요",
            "easy1_desc": "기존 AI 비서들은 사용자가 먼저 말을 걸어야만 반응하는 수동적인 방식이었는데요, 영상 속에서 대화할 거리가 생겨도 가만히 지켜보기만 한다는 한계가 있었거든요. 연구진은 이런 방식에서 벗어나 AI가 스스로 상황을 판단하고 먼저 말을 건네는 능력이 필요하다고 본 거예요. 쉽게 말하면, 사용자의 질문을 기다리지 않고 AI가 먼저 대화를 시작하는 능동적인 비서가 필요했다는 말이에요.",
            "easy2_title": "AI가 스스로 상황을 보고 먼저 말을 걸고 행동하게 바꿨어요",
            "easy2_desc": "연구진은 AURA 2.0이라는 모델을 개발해서 AI가 영상 속 상황을 파악하고 적절한 순간에 먼저 말을 걸도록 만들었는데요, 외부 도구를 불러와서 직접 행동하거나 사용자가 가리키는 물체를 정확히 찾아내는 기능도 추가했어요. 이렇게 하면 AI가 단순히 대답만 하는 게 아니라 영상 흐름에 맞춰 능동적으로 참여할 수 있게 되는 거예요. 덕분에 이전 모델보다 훨씬 자연스럽고 연속적인 상호작용이 가능해졌다고 연구진은 주장했어요.",
            "topic": "영상 스트리밍 환경에서 AI가 스스로 대화를 시작하고 도구를 활용하며 시각 정보를 정확히 파악하도록 개선한 AURA 2.0 모델에 대한 연구예요.",
            "one_line": "영상 스트리밍 환경에서 AI가 먼저 대화를 시작하고 도구를 쓰도록 개선했어요.",
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
          "canon_id": "2611.15348",
          "title": "Breath-Dx: A Time Series Classification Benchmark for Disease Screening with eNose",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.15348",
            "arxiv": "https://arxiv.org/abs/2611.15348"
          },
          "published": "2026-11-11",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 32,
          "score": 4.2,
          "score_why": "추천 32 → +3.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "전자 코 기술이 왜 발전하기 어려운지 살펴봤어요",
            "easy1_desc": "전자 코(eNose) 기술은 숨결을 분석해서 병을 찾아내는 비침습적 방법인데, 그동안은 체계적인 비교 기준이 없어서 발전이 더뎠거든요. 연구진은 특히 센서가 시간이 지나며 성능이 변하는 '센서 드리프트' 문제를 제대로 다루지 않는 게 큰 걸림돌이라고 봤어요. 기존 연구들은 각자 작은 데이터셋을 써서 결과끼리 비교하기가 어려웠다는 말이에요. 쉽게 말하면, 표준화된 시험대가 없어서 기술이 얼마나 잘 작동하는지 제대로 검증할 수 없었다는 겁니다.",
            "easy2_title": "호흡 데이터로 병을 진단하는 첫 표준 시험대를 만들었어요",
            "easy2_desc": "그래서 연구진은 'Breath-Dx'라는 첫 번째 종합 벤치마크를 내놓았는데요, 1,234명의 환자 데이터를 담은 'Scent of Health(S-OH)' 데이터셋을 활용했어요. 이 데이터는 9개 진단 그룹으로 나뉘어 있고, 센서 드리프트를 고려한 시간적 분할 방식을 적용해서 훨씬 현실적인 평가가 가능해졌거든요. 10가지 기계 학습 모델을 시험해 봤더니, 시간적 검증을 거칠 때 성능이 0.05에서 0.12 AUC만큼 떨어지는 걸 확인했어요. 결과적으로 어떤 모델이 더 안정적인지 명확히 가려낼 수 있게 된 셈이에요.",
            "topic": "호흡 기반 질병 진단을 위한 시계열 분류 방법론의 성능을 센서 드리프트 환경에서 체계적으로 평가했어요.",
            "one_line": "호흡 데이터 기반 질병 진단 모델의 성능을 평가하는 첫 벤치마크를 구축했어요.",
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
          "canon_id": "2611.23021",
          "title": "Satisfiability Modulo Theories for Robust Synthesis of Signal Temporal Logic Specifications",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.23021"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇이 긴 시간 동안 안전하게 움직이게 하는 게 어려웠거든요",
            "easy1_desc": "로봇의 목표를 정할 때 신호 시간 논리(Signal Temporal Logic)를 주로 쓰는데, 이걸 실제 로봇의 행동으로 바꾸는 과정에서 문제가 생기곤 합니다. 기존에는 혼합 정수 선형 계획법(MILP)이라는 방식을 썼는데, 이게 로봇이 움직여야 할 시간이 길어지거나 환경이 복잡해지면 계산이 너무 느려진다는 단점이 있거든요. 쉽게 말하면, 로봇이 장시간 동안 안전하게 움직일 경로를 제대로 찾지 못하는 상황이 자주 발생한다는 말이에요.",
            "easy2_title": "SMT라는 방식을 써서 긴 시간도 거뜬히 계산해 냈습니다",
            "easy2_desc": "그래서 연구진은 만족도 모듈로 이론(SMT)을 활용한 새로운 합성 방법을 제안했는데요, 로봇의 목표와 시스템을 SMT 제약 조건으로 바꾸는 인코딩 방식을 새로 고안한 겁니다. 이렇게 했더니 기존 MILP 방식보다 긴 시간 동안의 작업에서 훨씬 더 효율적으로 경로를 찾을 수 있게 됐거든요. 환경이 변해도 더 빠르게 적응한다는 장점이 있는데, 결과적으로 긴 시간 동안 로봇을 운용할 때 훨씬 유리한 셈이에요.",
            "topic": "로봇의 목표를 안전한 경로로 변환하는 과정에서 SMT 기반의 새로운 합성 방법이 기존 MILP 방식보다 효율적임을 입증한 연구입니다.",
            "one_line": "SMT를 활용해 로봇의 경로 합성 효율을 높였어요.",
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
          "canon_id": "2611.23017",
          "title": "On the recursive feasibility and stability of MPC without terminal constraints",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.23017"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "제약 조건 없이도 모델 예측 제어를 안정적으로 돌릴 수 있을까",
            "easy1_desc": "보통 모델 예측 제어(MPC)를 할 때는 끝부분에 제약 조건이나 비용 함수를 넣어 시스템이 망가지지 않게 막는데요, 이런 복잡한 장치 없이도 제어가 잘 되는지 궁금했던 거예요. 연구진은 끝단 제약 조건 없이도 시스템을 안정적으로 유지할 수 있는 새로운 방식을 분석해 봤거든요. 쉽게 말하면, 제어의 끝을 강제로 정하지 않아도 시스템이 안정적으로 작동할 수 있는 조건을 찾아낸 셈이에요.",
            "easy2_title": "가중치를 조절해서 안정적인 제어 범위를 넓혔어요",
            "easy2_desc": "연구진은 비용 함수에 온라인으로 최적화되는 가중치가 붙은 유한한 꼬리 부분을 추가했는데요, 이게 마치 안정성을 보장하는 끝단 비용처럼 작동한다는 걸 증명했어요. 이 꼬리 부분의 가중치를 키울수록 시스템이 안정적으로 작동하는 영역이 더 넓어진다는 사실도 확인했거든요. 결과적으로 제어 지평 내에서 원점 근처로 이동할 수 있는 상태라면, 충분히 큰 가중치를 썼을 때 모두 안정적인 제어가 가능해진다는 겁니다.",
            "topic": "끝단 제약 조건이 없는 모델 예측 제어(MPC)의 안정성과 재귀적 실행 가능성을 분석하고 이를 보장하는 조건을 제시했어요.",
            "one_line": "끝단 제약 조건이 없는 MPC의 안정성을 가중치 최적화로 보장했어요.",
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
          "canon_id": "2611.22808",
          "title": "Classical heat exchanger fouling-resistance laws as first-moment identities of additive stochastic deposition",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22808"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "열교환기 오염 데이터만 봐서는 실제 원인을 알 수 없어요",
            "easy1_desc": "열교환기에 찌꺼기가 쌓이는 오염 현상을 측정할 때 보통 에버트-판찰이나 컨-시튼 같은 고전적인 법칙을 써서 데이터를 분석하거든요. 그런데 연구진이 확인해 보니, 이런 법칙들은 오염이 어떻게 일어나는지 그 미세한 메커니즘을 구분해 주지 못한다는 거예요. 즉, 데이터 모양이 비슷하다고 해서 실제 오염 방식이 같다고 단정할 수 없다는 말입니다.",
            "easy2_title": "오염의 진짜 원인을 찾으려면 평균값이 아닌 분산까지 봐야 해요",
            "easy2_desc": "연구진은 오염 과정을 레비 종속 과정으로 모델링해서 분석해 봤는데요, 평균값만으로는 부족하고 분산이나 고차 누적량을 살펴봐야 비로소 오염의 진짜 원인을 구분할 수 있다는 사실을 밝혀냈어요. 다만, 측정 노이즈 때문에 실제 현장에서 이를 구분해 내려면 데이터 요구량이 엄청나게 늘어난다는 단점이 있거든요. 결국 현실적인 측정 정확도 안에서는 오염 법칙을 완벽히 가려내기가 매우 어렵다는 겁니다.",
            "topic": "열교환기 오염 저항 법칙이 실제 미세한 퇴적 메커니즘을 식별하는 데 한계가 있음을 수학적으로 증명했어요.",
            "one_line": "열교환기 오염 법칙이 퇴적 메커니즘을 식별하지 못함을 수학적으로 증명했어요.",
            "topic_tag": "수학·이론",
            "limit": "현실적인 측정 정확도 내에서는 오염 법칙을 구분하기 위해 필요한 데이터 양이 너무 많아 사실상 식별이 어렵습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.22413",
          "title": "Model Augmentation for thermo-mechanical hysteretic dynamics",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22413"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "반도체 웨이퍼가 열 때문에 휘어지는 걸 예측하기가 너무 어려웠어요",
            "easy1_desc": "극자외선(EUV) 노광 공정에서는 웨이퍼가 아주 미세하게 변형되는 걸 정확히 예측해야 하는데요, 국소적으로 열이 가해지면 웨이퍼가 팽창하고 웨이퍼를 받치는 기둥과의 마찰 때문에 히스테리시스(이전 상태가 결과에 영향을 주는 현상)가 발생하거든요. 그런데 시스템 규모가 워낙 크고 마찰로 인한 히스테리시스를 계산하는 비용도 많이 드는 데다, 변형을 측정할 수 있는 데이터마저 부족해서 모델을 만들기가 까다로웠던 겁니다.",
            "easy2_title": "기존 모델에 학습 기반 구조를 더해서 정확도를 높였어요",
            "easy2_desc": "그래서 연구진은 기존의 선형 열역학 모델에 학습 기반 구조를 결합하는 방식을 택했는데요, 선형 분수 표현(LFR)이라는 틀 안에서 부족한 측정 데이터로부터 모델을 보완한 거예요. 이렇게 했더니 기존 모델이 잡아내지 못했던 히스테리시스 효과를 포함한 동역학을 잘 포착하게 되었거든요. 결과적으로 기존 모델보다 훨씬 더 정확하게 변형을 예측할 수 있게 되었다고 연구진은 주장했습니다.",
            "topic": "열과 기계적 마찰로 인해 발생하는 웨이퍼의 히스테리시스 변형을 예측하기 위해 선형 분수 표현(LFR) 기반의 모델 보강 기법을 제안했어요.",
            "one_line": "EUV 노광 공정을 위해 웨이퍼의 열역학적 변형을 예측하는 모델을 보강했어요.",
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
            "flags": [
              "예측 의심: 시뮬레이션 결과, 보강된 모델은 기존의 기초 모델보다 훨씬 더 정확하게 웨이퍼 변형을 예측하는 것으로 나타났"
            ],
            "tag": "제어·로봇",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.22369",
          "title": "Explicit Dual Model Predictive Path Integral Control",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22369"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "알 수 없는 환경에서 로봇이 어떻게 움직일지 고민했어요",
            "easy1_desc": "로봇이 주변 환경을 완전히 알지 못하는 상황에서는, 현재 상태를 추측하면서 동시에 목표를 향해 움직여야 하는 이중적인 어려움이 있거든요. 기존 방식들은 복잡한 계산이 필요하거나 특정 조건에 갇히는 경우가 많았는데요. 연구진은 입자 필터(Particle filter)를 활용해 로봇이 처한 상황을 여러 가지 가능성으로 나누어 추측하고, 그 결과를 바탕으로 조심스럽게 움직이도록 설계했습니다. 쉽게 말하면, 로봇이 확실하지 않은 정보 속에서도 스스로 판단하며 안전하게 길을 찾도록 만든 겁니다.",
            "easy2_title": "복잡한 계산 없이도 스스로 탐색하고 조심스럽게 움직여요",
            "easy2_desc": "이번에 제안한 방식은 미래에 일어날 상황을 미리 시뮬레이션해서 정보를 얻고, 이를 통해 로봇이 더 똑똑하게 탐색하도록 만들었습니다. 특히 미분 같은 복잡한 수학 계산이 필요 없고, 데이터 형태가 정규분포를 따르지 않아도 작동한다는 장점이 있거든요. 모든 계산 과정을 병렬로 처리할 수 있어서 실제 하드웨어에서 실시간으로 돌리기에도 적합하다는 게 연구진의 설명이에요. 결과적으로 로봇이 스스로 정보를 수집하면서도 목표를 향해 효율적으로 이동하게 된 셈입니다.",
            "topic": "부분적으로만 관측 가능한 비선형 시스템에서 탐색과 제어를 동시에 수행하는 명시적 이중 제어 알고리즘을 제안했습니다.",
            "one_line": "입자 필터와 경로 적분 제어를 결합해 로봇의 탐색과 제어를 수행했어요.",
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
          "canon_id": "2611.22349",
          "title": "Connections Between Instrumental Variable, Pseudo-Linear Regression, and Prediction Error Methods in Terms of Their Minimized Criteria",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22349"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시스템을 식별하는 세 가지 방법이 어떻게 연결되는지 살펴봤어요",
            "easy1_desc": "예측 오차(PE), 도구 변수(IV), 그리고 의사 선형 회귀(PLR) 알고리즘은 시스템을 식별할 때 서로 다른 기준을 쓰는데요, 이들이 각자 무엇을 최소화하려고 하는지 그 연결 고리를 분석해 봤습니다. 원래 PE는 예측 오차의 분산을 줄이는 게 목표인데, IV나 PLR은 그런 손실 함수의 기울기를 직접 쓰지 않거든요. 그런데도 이들이 결국 어떤 관계에 있는지 수학적으로 따져 본 겁니다.",
            "easy2_title": "알고 보니 이들은 결국 같은 목표를 향하고 있었어요",
            "easy2_desc": "분석 결과, 실제 시스템이 모델 안에 있다면 IV 알고리즘도 결국 '등가 예측 오차'라고 부르는 신호의 분산을 최소화한다는 사실을 밝혀냈습니다. 이는 PLR의 편향 분포를 분석할 때 쓰던 개념이거든요. 즉, 일부 반복적인 IV와 PLR 알고리즘은 결국 예측 오차 분산을 줄이는 셈이라서, 간접적인 PE 알고리즘으로 해석할 수 있다는 결론이에요.",
            "topic": "출력 오차 모델을 식별하는 세 가지 주요 알고리즘이 최소화하는 기준들 사이의 수학적 연결성을 규명한 연구입니다.",
            "one_line": "세 가지 시스템 식별 알고리즘의 최소화 기준 간 연결성을 수학적으로 분석했어요.",
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
          "canon_id": "2611.22242",
          "title": "Optimal Energy and LLM Task Scheduling for Multiple Cloud Data Centers",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22242"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "데이터 센터마다 흩어진 AI 학습 작업을 어떻게 효율적으로 배치할까",
            "easy1_desc": "여러 곳에 떨어진 클라우드 데이터 센터(CDC)에서 거대언어모델(LLM) 학습 작업을 어떻게 나누고 운영할지 고민해 봤는데요. 데이터 센터 간에 작업을 옮기거나 순서를 바꾸는 유연함이 서비스와 경제적 결과에 어떤 영향을 주는지 살펴본 겁니다. 이때 컴퓨팅 자원이나 에너지, 온도 같은 제약 조건들이 여전히 남아 있어서 이를 고려한 최적화가 필요하다는 말이에요.",
            "easy2_title": "작업을 자유롭게 옮기고 순서를 바꿨더니 수익과 완료율이 확 늘었어요",
            "easy2_desc": "연구진은 혼합 정수 최적화 모델을 만들어 작업 배치와 노드 할당, 에너지 운영 등을 한꺼번에 결정해 봤는데요. 실제로 3개의 데이터 센터와 15개의 GPU 노드를 활용해 24시간 동안 실험했더니, 작업을 자유롭게 옮길 수 있을 때 순이익이 57.9% 늘고 완료된 작업도 76개에서 103개로 크게 증가했다는 겁니다. 반면 순서를 바꾸지 못하는 방식은 수익이 마이너스였는데, 이번 모델은 39개의 작업을 옮기면서 노드 활용도를 70.3%까지 끌어올렸다는 점이 핵심이에요.",
            "topic": "지리적으로 분산된 클라우드 데이터 센터 환경에서 LLM 학습 작업의 효율성을 높이기 위한 최적의 스케줄링 및 시설 운영 전략을 다룹니다.",
            "one_line": "데이터 센터 간 LLM 학습 작업 스케줄링 최적화 모델을 개발했어요.",
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
          "canon_id": "2611.22220",
          "title": "Safely Mitigating Grid Imbalance: A Hybrid Distributional Wide-Margin Recourse Approach",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22220"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "전력망 불균형을 안전하게 해결하는 게 어려웠거든요",
            "easy1_desc": "전력망에서 전력이 남거나 모자라는 불균형 문제를 해결하려면 여러 장치를 제어해야 하는데, 이때 안전 규칙을 어기지 않으면서 최적의 동작을 찾는 게 무척 까다로운 일이었거든요. 기존의 강화학습 방식은 학습 과정에서 위험한 행동을 할 가능성이 있어 실제 전력망에 바로 적용하기가 불안했다는 말이에요. 쉽게 말하면, 성능을 높이려다 오히려 전력망의 안정성을 해칠 위험이 컸던 셈이에요.",
            "easy2_title": "안전한 행동을 미리 구분해서 불균형을 잡는 방식을 만들었어요",
            "easy2_desc": "연구진은 안전한 행동과 위험한 행동을 최대한 멀리 떨어뜨려 구분하는 새로운 방식을 도입했는데요, 덕분에 학습 중에 위험한 행동을 미리 억제할 수 있게 된 겁니다. 또한 전력망의 변동성을 파악하기 위해 전체 수익 분포를 추적하는 기술을 썼고, 물리 법칙을 반영한 투영 장치를 더해 안전한 행동만 골라내도록 만들었어요. 결과적으로 기존 방식보다 더 안전하고 성능도 뛰어나다는 점을 IEEE 123-bus 테스트망에서 확인했다는 거예요.",
            "topic": "전력망의 불균형을 안전하게 해결하기 위해 다중 에이전트 기반의 강화학습 프레임워크를 제안하고 그 성능을 검증했어요.",
            "one_line": "전력망 불균형 해결을 위한 안전한 강화학습 프레임워크를 제안했어요.",
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
          "canon_id": "2611.22197",
          "title": "Grid-Responsive Pricing of Dynamic Wireless Charging with Coupled Residential Demand",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22197"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "도로 위 충전 가격이 집 안 전력망까지 흔들고 있었어요",
            "easy1_desc": "달리는 전기차를 무선으로 충전하는 기술(DWC)은 도로 이용료와 전기 판매로 수익을 내는데요, 이 가격이 바뀌면 운전자들이 도로에서 충전할지 집에서 충전할지 결정하는 패턴도 달라지거든요. 그런데 기존 방식은 이런 연관성을 무시하고 도로 충전 가격만 정하다 보니, 정작 집으로 몰리는 전력 수요를 제대로 계산하지 못해 전력망에 과부하가 걸릴 위험이 컸던 겁니다. 쉽게 말하면, 도로와 가정의 전력 수요가 서로 얽혀 있는데 한쪽만 보고 가격을 정해 문제가 생겼다는 말이에요.",
            "easy2_title": "가정용 전력 수요까지 함께 고려해 가격을 정했더니 안전해졌어요",
            "easy2_desc": "그래서 연구진은 도로 교통량과 전기차 에너지, 운전자의 반응, 그리고 교류(AC) 배전망 모델을 하나로 묶은 통합 모델을 만들었는데요, 모델 예측 제어(MPC)를 활용해 도로 충전 가격과 가정용 충전 수요를 동시에 최적화하도록 설계한 겁니다. 실제로 78일간의 교통 데이터를 넣어 돌려봤더니, 기존 방식은 52일 동안 전력망 과부하 제한을 넘겼지만, 제안한 방식은 이를 완전히 없애면서도 운영 수익은 0.6%만 줄어드는 결과를 보였거든요. 수익은 거의 유지하면서도 전력망의 안정성을 확보했다는 점이 핵심이에요.",
            "topic": "도로 위 무선 충전 가격과 가정용 전기 수요를 통합적으로 고려하여 전력망의 과부하를 방지하는 가격 책정 모델을 개발했어요.",
            "one_line": "도로 무선 충전과 가정용 전력 수요를 통합 최적화하여 전력망 과부하를 해결했어요.",
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
          "canon_id": "2611.22181",
          "title": "Benchmarking a Grid Foundation Model for AC Optimal Power Flow: Feasibility and Warm-Start Results on Synthetic Texas and South Carolina Grids",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22181"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 내놓은 전력망 해답이 진짜 가능한지 따져 봤어요",
            "easy1_desc": "교류 최적 전력 흐름(AC-OPF) 문제를 풀 때 AI 대리 모델을 많이 쓰는데, 지금까지는 단순히 정답과 얼마나 비슷한지만 따졌거든요. 그런데 이게 실제로 전력망의 물리적 규칙을 지키는지, 즉 전력 균형이나 설비 한계를 넘지는 않는지는 확인하지 않았다는 문제가 있었어요. 연구진은 마이크로소프트의 GridSFM-Open 1.1.0 모델을 가져와서, AI가 제시한 값이 실제로 전력망 운영이 가능한 상태인지 직접 검증해 본 겁니다.",
            "easy2_title": "AI로 시작점만 잡고 실제 계산은 기존 방식대로 해야 해요",
            "easy2_desc": "AI 모델을 미세 조정(fine-tuning)해서 써 봤더니, 비용 격차는 줄어들었지만 여전히 전력망의 열적 한계를 위반하거나 전력 불균형이 발생하는 경우가 많았어요. AI가 내놓은 값을 비선형 솔버(nonlinear solver)의 초기값으로 넣었을 때 계산 속도가 조금 빨라지기도 했지만, 어떤 경우에는 오히려 더 느려지기도 했거든요. 결국 AI가 내놓은 결과만으로는 전력망을 운영할 수 없고, 반드시 기존의 솔버를 거쳐야만 정확한 해를 얻을 수 있다는 결론이에요.",
            "topic": "마이크로소프트의 전력망 파운데이션 모델인 GridSFM-Open 1.1.0이 교류 최적 전력 흐름 문제에서 실제 운영 가능한 해를 제공할 수 있는지와 솔버의 초기값으로 유용한지를 평가했어요.",
            "one_line": "전력망 파운데이션 모델의 물리적 타당성과 솔버 초기값으로서의 성능을 검증했어요.",
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
          "canon_id": "2611.22081",
          "title": "Facet-offset Polytope Expansion for Dynamic Operating Envelopes of Aggregated Distribution Grid Resources",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22081"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "전력망 자원을 효율적으로 쓰기가 참 어려웠거든요",
            "easy1_desc": "배전망에 연결된 수많은 자원들을 통합해서 관리할 때, 각 자원이 얼마나 유연하게 움직일 수 있는지 범위를 정하는 게 중요합니다. 기존 방식들은 범위를 단순한 상자 모양으로 잡거나 무작위 방향으로 늘리는 식이라서 실제 가능한 유연성을 충분히 담아내지 못하는 문제가 있었거든요. 쉽게 말하면, 전력망이 가진 잠재력을 제대로 다 쓰지 못하고 낭비하고 있었다는 말이에요.",
            "easy2_title": "새로운 방식으로 유연성을 훨씬 더 많이 확보했어요",
            "easy2_desc": "연구진은 민감도 정보를 활용해서 다각형 모양의 범위를 효율적으로 확장하는 FOPE-sen이라는 방식을 제안했는데요, 이 방식을 써 봤더니 기존의 상자형이나 무작위 방식보다 차원당 유연성을 최소 106% 더 많이 확보할 수 있었다고 해요. 게다가 기존의 복잡한 방식보다 훨씬 적은 면만 사용하면서도 비슷한 수준의 범위를 만들어낸다는 장점이 있거든요. 쉽게 말하면, 더 적은 계산량으로 더 넓은 운영 범위를 찾아냈다는 겁니다.",
            "topic": "배전망 자원의 운영 범위를 효율적으로 결정하기 위한 다면체 확장 프레임워크 연구예요.",
            "one_line": "배전망 자원의 운영 범위를 효율적으로 산출하는 다면체 확장 기법을 개발했어요.",
            "topic_tag": "전력망·계통",
            "limit": "연구진은 비볼록 AC 영역에 대한 안전성 검증과 고차원 공간에서의 확장성, 그리고 다중 집합체 할당 및 시장 참여 응용 분야로의 확장을 향후 과제로 꼽았습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.22061",
          "title": "FM-Mamba: An Efficient Native 2D Selective State Space Model with Stability-Aware Discretization",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22061"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "2차원 데이터를 1차원으로 펴서 처리하는 방식의 한계",
            "easy1_desc": "기존의 맘바(Mamba) 기반 모델들은 이미지 같은 2차원 데이터를 다룰 때, 이를 1차원 배열로 길게 펴서 처리하곤 했는데요. 이렇게 하면 데이터가 원래 가지고 있던 공간적인 인접성이 깨지고 계산량만 늘어나는 문제가 발생합니다. 그렇다고 2차원 격자 위에서 바로 계산하자니, 안정성을 보장하는 이론적 근거가 부족해 불안정한 면이 있었거든요. 쉽게 말하면, 성능을 높이려다 보니 데이터의 구조를 훼손하거나 계산의 안정성을 놓치는 상황이었던 겁니다.",
            "easy2_title": "공간 구조를 그대로 유지하면서 안정성까지 챙기는 새로운 모델",
            "easy2_desc": "연구진은 포르나시니-마르케시(FM) 모델을 기반으로 한 FM-맘바(FM-Mamba)를 제안했는데요. 이 모델은 데이터를 1차원으로 펴지 않고 2차원 구조를 그대로 유지하면서, 두 축을 따라 정보를 전달하는 방식을 사용합니다. 특히 위치와 방향에 따라 단계 크기를 조절하고 안정성 이론을 적용해, 학습 과정에서 발생할 수 있는 국소적인 증폭 현상을 억제했거든요. 결과적으로 데이터의 공간적 특성을 보존하면서도 계산의 안정성을 확보했다는 점이 핵심입니다.",
            "topic": "2차원 데이터 처리에 최적화된 안정적인 선택적 상태 공간 모델인 FM-맘바를 제안하고 그 구조를 설명합니다.",
            "one_line": "2차원 데이터 처리에 최적화된 안정적인 상태 공간 모델을 개발했어요.",
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
          "canon_id": "2611.22016",
          "title": "An Explainable Agentic AI Framework for Distribution System Load Restoration",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22016"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "배전망 복구는 복잡한 의사결정이 필요한 문제였거든요",
            "easy1_desc": "배전망에서 정전이 발생했을 때 전력을 다시 공급하는 일은 단순히 전기를 켜는 문제가 아니에요. 공급량을 최대화하면서도 중요한 시설을 우선순위에 두고, 전력 흐름이 물리적으로 가능한지까지 따져야 하는 복잡한 과정이거든요. 기존에는 이런 제약 조건을 모두 고려하면서 최적의 복구 경로를 찾는 일이 쉽지 않았다는 말이에요. 즉, 효율성과 안정성을 동시에 챙기기가 까다로웠던 셈입니다.",
            "easy2_title": "여러 AI 에이전트를 써서 설명 가능한 복구 계획을 만들었어요",
            "easy2_desc": "연구진은 여러 개의 거대언어모델(LLM) 에이전트를 활용해 계획 수립부터 의사결정, 피드백까지 나누어 처리하는 새로운 프레임워크를 제안했는데요. 단순히 AI가 내놓는 답을 따르는 게 아니라, 결정된 계획이 물리적으로 가능한지 확인하는 과정을 거치고 왜 그런 결정을 내렸는지 설명까지 제공하는 거예요. 기존의 단일 AI 모델 방식보다 복구 성능이 더 좋고, 운영자가 이해하기 쉬운 구조를 갖췄다는 점이 특징입니다.",
            "topic": "배전망 부하 복구를 위해 거대언어모델 에이전트를 활용한 설명 가능한 AI 프레임워크를 제안하고 그 성능을 검증했어요.",
            "one_line": "다중 LLM 에이전트를 활용해 배전망 복구 계획을 세우고 검증하는 프레임워크를 개발했어요.",
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
          "canon_id": "2611.22012",
          "title": "PS-HalluBench: Taxonomy-Driven Benchmarking of LLM Hallucinations in Power Systems",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22012"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "전력망 분석에 거대언어모델을 써 봤는데 믿어도 될지 의문이 들었어요",
            "easy1_desc": "전력망 분야에서 거대언어모델(LLM)을 활용하려는 시도가 늘고 있는데, 정작 공학적인 분석을 얼마나 믿을 수 있는지는 확실하지 않았거든요. 그래서 연구진이 200개의 질문으로 구성된 PS-HalluBench라는 평가 도구를 직접 만들어서 LLM이 얼마나 잘못된 정보를 사실처럼 말하는지 확인해 봤습니다. 수치 계산부터 네트워크 구조 파악까지 다섯 가지 분야를 따져 봤더니, 전반적인 정답률이 39.35%에 그쳤다는 거예요. 특히 제약 조건을 확인하는 작업은 21.75%밖에 안 돼서 공학적인 추론에 여전히 큰 어려움이 있다는 점을 보여 줍니다.",
            "easy2_title": "검증된 도구와 함께 쓰니까 성능이 훨씬 좋아졌어요",
            "easy2_desc": "연구진은 LLM이 혼자서 추론할 때 생기는 한계를 넘기 위해 수치 계산기나 검증된 네트워크 정보를 함께 연결해 봤는데요. 그랬더니 공학적인 추론 능력이 눈에 띄게 좋아지는 결과가 나타났거든요. LLM이 단독으로 판단하는 것보다는 신뢰할 수 있는 공학 도구와 결합하는 방식이 전력망 분석에 더 적합하다는 뜻이에요. 쉽게 말하면, LLM의 한계를 보완할 외부 도구와의 연동이 필수적이라는 결론입니다.",
            "topic": "전력망 분석 분야에서 거대언어모델(LLM)이 가진 환각 현상을 평가하고 이를 개선하기 위한 도구 연동의 필요성을 다루고 있습니다.",
            "one_line": "전력망 분석용 LLM의 환각 현상을 평가하고 도구 연동을 통한 개선 방안을 제시했어요.",
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
          "canon_id": "2611.21987",
          "title": "Safe Reinforcement Learning with Hard Constraints: Policy Gradient Methods with Intersample Guarantees",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21987"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇이 학습할 때 안전을 지키기가 참 어려웠거든요",
            "easy1_desc": "강화학습(RL)을 할 때 로봇이 제멋대로 움직이지 않게 안전장치를 거는 게 보통 일은 아니었는데요, 특히 데이터를 주고받는 짧은 순간마다 안전한지 확인하는 게 어려웠던 겁니다. 기존 방식들은 로봇이 다음 행동을 결정하는 찰나의 순간만 안전하면 된다고 생각했거든요. 그런데 실제로는 그 짧은 시간 사이에도 로봇이 위험한 구역으로 들어갈 수 있다는 게 문제라는 말이에요.",
            "easy2_title": "학습하는 내내 안전하도록 촘촘하게 규칙을 세웠어요",
            "easy2_desc": "연구진은 로봇이 데이터를 샘플링하는 그 짧은 간격 사이에도 안전을 보장할 수 있는 새로운 정책 경사(PG) 알고리즘을 제안했는데요, 로봇이 애초에 안전한 행동만 고르도록 정책의 범위를 제한해 버린 겁니다. 이렇게 하면 학습하는 도중에도 로봇이 위험한 행동을 할 가능성이 거의 없어진다는 거예요. 실제로 쿼드로터(드론)를 날려 봤더니, 학습 내내 안전 규칙을 잘 지키면서 목적지까지 움직이는 걸 확인했다고 합니다.",
            "topic": "비선형 샘플링 시스템에서 샘플링 간격 사이에도 안전을 보장하는 강화학습 알고리즘을 개발했어요.",
            "one_line": "샘플링 간격 사이에도 안전을 보장하는 강화학습 알고리즘을 개발했어요.",
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
          "canon_id": "2611.21985",
          "title": "First-Order Model-Free Policy Gradient for Undiscounted LQR with Global Optimality and Convergence Guarantees",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21985"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "모델을 몰라도 최적의 제어 방법을 찾고 싶었어요",
            "easy1_desc": "보통 제어 시스템을 설계하려면 시스템이 어떻게 움직이는지 수학적 모델을 먼저 알아야 하는데요, 이번 연구에서는 모델을 전혀 모르는 상태에서도 최적의 제어 정책을 찾을 수 있는 방법을 고민해 봤습니다. 특히 무한한 시간 동안 시스템을 안정적으로 유지하는 선형 이차 조절기(LQR) 문제를 풀려고 했는데요, 모델 정보 없이도 학습이 가능하다는 점이 핵심이에요. 쉽게 말하면, 시스템의 내부 구조를 몰라도 데이터만으로 최적의 답을 찾아낼 수 있다는 겁니다.",
            "easy2_title": "탐색 기능을 더해 전체적인 최적해를 찾아냈어요",
            "easy2_desc": "연구진은 결정론적인 제어 법칙 주변을 탐색할 수 있도록 확률적인 래퍼 정책 클래스를 새로 만들었는데요, 이를 통해 시스템이 전체적인 최적해에 도달할 수 있음을 수학적으로 증명했습니다. 기존 방식과 달리 시스템의 역학을 미리 파악하거나 가치 함수를 근사할 필요 없이, 실제 샘플링된 궤적 정보만으로 학습하는 알고리즘을 구현한 거예요. 결과적으로 유한한 시간 안에 최적해에 가까워질 수 있는 충분한 샘플 개수까지 제시했다는 점이 달라진 부분입니다.",
            "topic": "모델 정보가 없는 상황에서 선형 이차 조절기(LQR) 문제를 해결하기 위한 정책 경사(PG) 알고리즘의 최적성과 수렴성을 분석한 연구예요.",
            "one_line": "모델 정보 없이 LQR 정책을 학습하는 알고리즘을 개발했어요.",
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
          "canon_id": "2611.21858",
          "title": "Tie-Line Scheduling Using Real-Time Contraction Metrics: Hierarchical Reachable Sets for Multi-Area Inverter-Dominated Grids",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21858"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 전력망 제어 방식은 너무 느리고 불안정했어요",
            "easy1_desc": "인버터 기반 자원(IBR)이 많은 전력망에서는 전력 흐름을 제어하는 게 매우 까다로운데요, 기존 방식인 온라인 피드백 최적화(OFO)나 모델 예측 제어(MPC)는 전력망을 단순하게 가정해서 1초 미만의 짧은 순간에 일어나는 불안정성을 막지 못한다는 단점이 있어요. 반대로 ADMM 같은 방식은 계산을 위해 주고받는 메시지 때문에 급격한 전력 급증을 따라가지 못하는 문제가 있거든요. 쉽게 말하면, 기존 기술들은 전력망의 복잡한 변화 속도를 제대로 따라잡지 못했다는 말이에요.",
            "easy2_title": "복잡한 계산 없이도 안전하게 전력을 제어하는 새 구조를 만들었어요",
            "easy2_desc": "연구진은 비선형 제어 수축 메트릭(SCCM)이라는 새로운 구조를 도입해서 장치, 지역, 계통 연결선이라는 세 단계로 나누어 제어하도록 설계했는데요, 실시간으로 복잡한 최적화 문제를 푸는 대신 미리 계산된 비선형 피드백 법칙을 바로 적용하는 방식을 썼어요. 이렇게 했더니 전력망의 안전 범위를 수학적으로 보장할 수 있게 되었고, 통신이 3초 동안 끊기는 상황에서도 안정적으로 작동한다는 점을 확인했거든요. 결과적으로 IEEE 39-bus와 118-bus 시스템에서 전력선 과부하를 82.8% 줄이는 성과를 냈다는 겁니다.",
            "topic": "인버터 기반 자원이 지배하는 다중 지역 전력망에서 비선형 제어 수축 메트릭을 활용한 계통 연결선 스케줄링 기법을 제안했어요.",
            "one_line": "비선형 제어 구조를 도입해 전력망 연결선의 과부하를 줄였어요.",
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
          "canon_id": "2611.21803",
          "title": "Mechanism Design and Active Systems Theory: 60 Years of Parallel Development",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21803"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "두 연구 분야가 60년 동안 따로 발전해 왔어요",
            "easy1_desc": "사람들이 상호작용하는 규칙을 설계하는 수학 이론에는 메커니즘 설계와 능동 시스템 이론이라는 두 가지 큰 흐름이 있는데요, 이 연구는 지난 60년간 이 두 분야가 어떻게 각각 발전해 왔는지 비교해 본 겁니다. 메커니즘 설계는 주로 계약 이론이나 구현 이론을 중심으로 다루고, 능동 시스템 이론은 조직 내의 제어 문제를 해결하는 데 집중해 왔거든요. 쉽게 말하면, 같은 목적을 가진 두 학문이 서로 다른 관점에서 규칙을 만들어 온 셈이에요.",
            "easy2_title": "두 이론의 공통점과 차이를 정리해 봤어요",
            "easy2_desc": "연구진은 2006년부터 2026년까지 발표된 주요 성과들을 모아 두 이론이 어디서 만나고 어디서 갈라지는지 분석했는데요, 공정성 원칙이나 계시 원칙처럼 서로 대응되는 개념들을 찾아내어 정리했습니다. 물론 두 분야가 완전히 같은 건 아니라서, 조직 구조나 구성원 관리처럼 능동 시스템 이론에서만 다루는 영역도 분명히 존재하거든요. 결과적으로 두 이론이 가진 고유한 특징과 서로 보완할 수 있는 지점을 명확히 밝혀낸 겁니다.",
            "topic": "상호작용 규칙 설계를 위한 두 수학적 이론인 메커니즘 설계와 능동 시스템 이론의 60년 발전 과정을 비교하고 그 관계를 규명했어요.",
            "one_line": "메커니즘 설계와 능동 시스템 이론의 60년 발전 과정을 비교 분석했어요.",
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
              "20"
            ],
            "format": [],
            "flags": [],
            "tag": "수학·이론",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.21795",
          "title": "The Impact of Scenario Representation in Scenario-based Optimization Certification",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21795"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시나리오를 어떻게 표현하느냐에 따라 인증 결과가 달라지더라고요",
            "easy1_desc": "시나리오 기반 최적화는 샘플링된 불확실성을 바탕으로 결정을 내릴 때 그 안전성을 보장해 주는 기법인데요, 연구진이 이 기법을 살펴봤더니 똑같은 데이터라도 시나리오를 어떤 방식으로 표현하느냐에 따라 인증 결과가 민감하게 변한다는 사실을 확인했습니다. 이게 무슨 말이냐면, 데이터 자체는 그대로인데 표현 방식만 바꿔도 인증이 통과되거나 거절되는 상황이 생긴다는 거예요. 즉, 인증의 성공 여부가 데이터의 질보다는 표현의 형식에 좌우될 수 있다는 점을 지적한 겁니다.",
            "easy2_title": "표현 방식을 바꾸지 않아도 더 나은 인증 결과를 얻을 수 있어요",
            "easy2_desc": "연구진은 시나리오를 재그룹화하거나 좌표별 시나리오 포락선을 활용하는 방식을 통해, 샘플을 추가하지 않고도 인증 성공률을 높일 수 있음을 보여줬는데요, 실제로 시나리오 기반 모델 예측 제어(MPC) 실험에서 재그룹화를 적용했더니 전체 480번의 시도 중 인증 성공 사례가 318번에서 471번으로 늘어났습니다. 이는 샘플 효율성이 좋아진 것처럼 보이지만, 실제로는 정보가 늘어난 게 아니라 인증 계산 방식이 바뀌면서 나타난 현상이라는 거예요. 쉽게 말하면, 데이터는 그대로인데 계산법을 똑똑하게 다듬어서 더 많은 인증을 받아낸 셈입니다.",
            "topic": "시나리오 기반 최적화에서 시나리오 표현 방식이 인증 결과에 미치는 영향과 그에 따른 인증 효율성 변화를 분석한 연구예요.",
            "one_line": "시나리오 기반 최적화에서 표현 방식이 인증에 미치는 영향을 분석하고 효율을 높였어요.",
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
          "canon_id": "2611.18856",
          "title": "Self-Improvement Memory Enables Continual Recursive Self-Improvement",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.18856",
            "arxiv": "https://arxiv.org/abs/2611.18856"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 30,
          "score": 4.0,
          "score_why": "추천 30 → +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존의 최적화 방식은 상황이 바뀌면 왜 예전처럼 고쳤는지 알기 어려웠어요",
            "easy1_desc": "보통 인공지능 모델을 최적화할 때 고정된 환경에서만 연구를 진행하곤 하는데요. 그러다 보니 환경이나 모델이 바뀌면 이전에 왜 그런 방식으로 수정했는지, 결과가 어땠는지 알 수 없다는 문제가 생깁니다. 쉽게 말하면, 과거의 경험을 기록하지 않아서 새로운 상황에 맞게 최적화하기가 까다로웠다는 말이에요.",
            "easy2_title": "경험을 기억하는 메모리를 도입해서 성능을 더 높였어요",
            "easy2_desc": "그래서 연구진은 최적화 과정에서 발생한 수정 사항과 그 이유, 결과 등을 기록하는 '자기 개선 메모리(SIM)'를 제안했어요. 이 메모리는 새로운 시도가 이어질 때마다 과거의 기록을 확장하며 학습을 돕거든요. 실제로 실험해 봤더니, 단순히 기존 방식만 사용하는 것보다 훨씬 더 높은 최종 점수를 얻었다고 주장했습니다.",
            "topic": "지속적 재귀적 자기 개선(CRSI) 환경에서 최적화 도구의 성능을 높이기 위해 과거의 수정 이력을 기록하고 활용하는 메모리 기법에 대한 연구예요.",
            "one_line": "최적화 도구에 수정 이력을 기록하는 메모리를 도입해 성능을 개선했어요.",
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
          "canon_id": "2611.23226",
          "title": "FastFrames: Video Generation at Interactive Latency",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.23226",
            "arxiv": "https://arxiv.org/abs/2611.23226"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 23,
          "score": 3.3,
          "score_why": "추천 23 → +2.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 영상 생성 모델은 반응이 너무 느려서 문제였거든요",
            "easy1_desc": "영상 생성 모델이 사용자의 입력에 따라 실시간으로 반응하려면 아주 빠르게 움직여야 하는데요, 지금 나와 있는 모델들은 영상 한 장을 만드는 데 시간이 너무 많이 걸려서 매끄러운 상호작용이 어렵다는 문제가 있었거든요. 연구진이 기존 모델의 처리 과정을 뜯어봤더니, 영상 압축을 푸는 과정이나 데이터를 임시 저장하는 과정에서 전체 시간의 절반 이상을 잡아먹고 있다는 걸 확인했습니다. 쉽게 말하면, 중요해 보이던 부품들이 오히려 속도를 늦추는 발목을 잡고 있었던 셈이에요.",
            "easy2_title": "느린 부품을 가벼운 걸로 바꿔서 속도를 확 높였어요",
            "easy2_desc": "연구진은 기존 모델에서 필수라고 여겨졌던 부품들을 가벼운 대체 기술로 바꿔서 FastFrames라는 새로운 모델을 만들었는데요, 이렇게 했더니 영상 품질은 그대로 유지하면서도 반응 속도는 훨씬 빨라졌다는 겁니다. 1.3B 모델의 경우 B200 GPU 한 대에서 프레임당 36ms로 작동해서 기존 모델보다 8배나 빠르게 영상을 만들어내거든요. 14B 모델은 8개의 GPU 노드에서 프레임당 45ms로 작동하며 훨씬 더 사실적인 영상을 보여준다고 연구진은 주장했습니다.",
            "topic": "기존 영상 생성 모델의 구조를 개선하여 상호작용이 가능한 수준의 빠른 영상 생성을 구현한 연구예요.",
            "one_line": "영상 생성 모델의 구조를 개선해 실시간 반응 속도를 구현했어요.",
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
          "canon_id": "2611.23143",
          "title": "TCP4D: A Unified Tool-Center-Point Tracking and Generation Model for Robot Manipulation",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.23143",
            "arxiv": "https://arxiv.org/abs/2611.23143"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 23,
          "score": 3.3,
          "score_why": "추천 23 → +2.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇이 어떻게 움직이는지 영상만 보고 알아내기가 참 어려웠거든요",
            "easy1_desc": "로봇이 물건을 잡거나 움직이는 영상을 보면, 로봇 팔 끝인 도구 중심점(TCP)이 어디에 있는지 정확히 파악하기가 쉽지 않습니다. 기존에는 로봇의 상태나 행동 정보를 일일이 기록해야 했는데, 이런 데이터가 없는 영상에서는 정보를 뽑아내기가 까다로웠거든요. 뭔 소리냐면, 영상 속 로봇의 움직임을 수치로 바꾸는 과정 자체가 복잡한 숙제였다는 말이에요.",
            "easy2_title": "움직임을 추적하고 미래까지 예측하는 통합 모델을 만들었어요",
            "easy2_desc": "연구진은 TCP4D라는 모델을 제안했는데, 하나의 4D 장면 표현을 써서 로봇의 현재 움직임을 추적하고 미래 경로까지 생성하는 방식이에요. 영상에서 로봇의 위치와 상태를 찾아낸 뒤, 언어 명령과 결합해 다음 행동을 예측하는 거죠. 특히 기존 영상을 다른 로봇의 데이터로 바꾸는 증강 기술을 써서, 데이터가 부족한 상황에서도 로봇이 새로운 환경에 잘 적응하도록 도왔다는 겁니다.",
            "topic": "로봇 조작을 위해 영상에서 도구 중심점(TCP)의 움직임을 추적하고 미래 경로를 생성하는 통합 모델 TCP4D에 관한 연구예요.",
            "one_line": "로봇 영상에서 움직임을 추적하고 미래 경로를 생성하는 통합 모델을 개발했어요.",
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
          "canon_id": "2611.22275",
          "title": "Heave-Ho: Decentralized Long-Horizon Multi-Humanoid Collaboration",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.22275",
            "arxiv": "https://arxiv.org/abs/2611.22275"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 21,
          "score": 3.1,
          "score_why": "추천 21 → +2.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇 여러 대가 힘을 합치려면 넘어야 할 산이 많았거든요",
            "easy1_desc": "로봇 한 대가 할 수 없는 일을 여러 대가 함께해서 해결하려는 시도가 늘고 있는데요, 이게 쉽지 않은 이유가 있어요. 로봇끼리 몸을 맞대고 움직임을 맞추는 전신 상호작용과 긴 시간 동안 계획을 세우는 일, 그리고 로봇 간의 정확한 타이밍을 맞추는 게 매우 어렵기 때문이에요. 쉽게 말하면, 로봇들이 서로 손발을 맞추는 게 생각보다 훨씬 복잡한 문제라는 겁니다.",
            "easy2_title": "통신 없이도 로봇들이 알아서 협동하게 만들었어요",
            "easy2_desc": "연구진은 히브-호(Heave-Ho)라는 분산형 협동 프레임워크를 개발했는데요, 로봇이 네트워크 통신 없이도 주변 상황만 보고 스스로 움직이게 만든 거예요. 낮은 단계에서는 로봇이 물리적으로 연결된 상태를 학습하고, 높은 단계에서는 시각-언어 모델을 활용해 리더와 팔로워가 대화하듯 협동하도록 설계했거든요. 덕분에 로봇 두 대로 학습해도 최대 열 대까지 확장할 수 있고, 다른 종류의 로봇이 섞여 있어도 다시 학습할 필요가 없다는 장점이 있어요.",
            "topic": "여러 대의 휴머노이드 로봇이 네트워크 통신 없이도 긴 시간 동안 협동하여 복잡한 작업을 수행할 수 있는 분산형 제어 프레임워크를 제안했어요.",
            "one_line": "휴머노이드 로봇들이 통신 없이 협동하도록 분산 제어 프레임워크를 개발했어요.",
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
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "이론만 배우던 제어 공학 수업에 직접 만지는 실험을 더해 봤습니다",
            "easy1_desc": "기존 제어 공학 수업은 이론과 시뮬레이션 위주로 진행되다 보니 학생들이 추상적인 개념을 실제 구현과 연결하는 데 어려움을 겪곤 했는데요. 연구진은 이를 해결하기 위해 학생들이 집으로 가져가서 직접 실습할 수 있는 저렴한 실험 키트를 도입해 봤습니다. 이 키트를 활용하면 수업 환경에 상관없이 실습 기회를 넓힐 수 있다는 장점이 있거든요. 쉽게 말하면 교실 밖에서도 손으로 직접 만지며 배울 수 있는 환경을 만든 셈이에요.",
            "easy2_title": "직접 실습해 보니 학생들의 이해도와 성적이 모두 올랐습니다",
            "easy2_desc": "학생들이 이 키트를 사용해 모델링이나 제어 설계 같은 과제를 수행하도록 했는데요. 설문 조사와 시험 성적을 분석해 보니, 새로운 실습 방식에 대한 학생들의 만족도가 높았고 핵심 원리에 대한 이해도 역시 깊어졌다는 결과가 나왔습니다. 통계적으로도 실험 키트를 도입하기 전과 후의 학생들 사이에서 유의미한 차이가 확인되었거든요. 연구진은 이런 방식이 학생들의 동기 부여와 학업 성취도를 동시에 끌어올릴 수 있다고 주장했습니다.",
            "topic": "제어 공학 교육 과정에 휴대용 실험 키트를 도입하여 실습 중심의 학습 효과를 분석한 연구입니다.",
            "one_line": "제어 공학 교육에 휴대용 실험 키트를 도입해 실습 효과를 높였습니다.",
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
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 시스템을 제어할 때 안정성을 보장하기가 어려웠어요",
            "easy1_desc": "비선형 이산 시간 시스템을 제어할 때 신경망을 쓰면 성능은 좋지만, 시스템이 안정적인지 수학적으로 증명하기가 까다롭다는 문제가 있었거든요. 기존에는 제어기와 제어 리아푸노프 함수(CLF)를 따로 학습시키거나, 학습 후에도 복잡한 검증 과정을 거쳐야 해서 효율이 떨어졌던 겁니다. 쉽게 말하면, 똑똑한 인공지능을 만들어도 이게 진짜 안전한지 확인하는 데 너무 많은 힘을 쏟아야 했다는 말이에요.",
            "easy2_title": "구조를 미리 정해두니 검증이 훨씬 쉬워졌어요",
            "easy2_desc": "연구진은 입력 볼록 신경망(ICNN)과 폴랴크-워야시에비치 신경망(PLNets)의 구조적 특성을 활용해서, 제어 리아푸노프 함수가 항상 양수 값을 갖도록 설계했어요. 이렇게 구조적으로 안정성을 보장해 두니까, 나중에 따로 검증해야 할 조건이 확 줄어든다는 겁니다. 추가로 혼합 정수 프로그래밍을 써서 남은 안정성 조건까지 확인하고, 재학습 없이도 안정적인 영역을 넓히는 방법도 도입했거든요. 결과적으로 더 효율적이고 안전한 제어가 가능해진 셈이에요.",
            "topic": "비선형 시스템의 안정성을 보장하기 위해 구조화된 신경망을 활용한 제어기와 리아푸노프 함수 학습법을 제안했어요.",
            "one_line": "구조화된 신경망을 활용해 비선형 시스템의 제어기와 안정성 함수를 함께 학습했어요.",
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
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "데이터만 쓰면 속도가 바뀔 때 제어가 잘 안 돼요",
            "easy1_desc": "차량의 옆 방향 움직임은 속도에 따라 계속 변하는데요, 특정 속도 범위에서만 모은 데이터로 제어기를 만들면 그 범위를 벗어났을 때 성능이 뚝 떨어지는 문제가 생깁니다. 데이터 기반 방식인 VRFT(가상 참조 피드백 튜닝)만으로는 학습하지 않은 속도 영역에서 제어 성능을 유지하기 어렵다는 말이에요. 쉽게 말하면, 학습한 데이터 밖의 상황에 대처하는 능력이 부족하다는 겁니다.",
            "easy2_title": "물리 법칙을 더했더니 학습 범위 밖에서도 잘 움직여요",
            "easy2_desc": "연구진은 기존 데이터 기반 방식에 차량의 물리적 지식을 합친 PI-D3C(물리 기반 직접 데이터 주도 제어)라는 새로운 틀을 제안했는데요, 학습 데이터와 물리 모델이 예측한 요레이트(차량 회전율) 반응을 함께 써서 제어기 매개변수를 설계한 겁니다. 이렇게 했더니 학습한 속도 범위를 벗어나도 제어 성능이 잘 유지되는 장점이 생겼거든요. 조향 입력이나 제어 이득이 과하게 변하는 것도 막아주는데, 물리 지식을 섞는 것만으로도 데이터가 부족한 상황에서의 확장 성능이 좋아졌다고 연구진은 주장했습니다.",
            "topic": "차량의 요레이트 추적 성능을 높이기 위해 물리 지식을 결합한 데이터 기반 제어 프레임워크를 제안하고 그 효과를 검증했어요.",
            "one_line": "물리 지식을 결합한 데이터 기반 제어 방식으로 차량의 요레이트 추적 성능을 높였어요.",
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
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "신경망 기반 제어 함수를 학습하고 검증하는 게 너무 힘들었어요",
            "easy1_desc": "신경망을 활용해서 제어 리아푸노프 함수(CLF)를 만들고 이게 제대로 작동하는지 확인하는 과정은 원래 계산량이 엄청나게 많거든요. 그래서 복잡한 시스템을 다룰 때마다 시간과 자원이 많이 들어가는 문제가 있었던 거예요. 연구진은 이런 계산 부담을 줄이는 게 필요하다고 봤습니다.",
            "easy2_title": "함수와 제어기를 동시에 학습해서 안정성을 바로 확보했어요",
            "easy2_desc": "연구진은 제어 리아푸노프 함수와 안정화 제어기를 한꺼번에 학습하는 새로운 틀을 제안했는데요, 폴랴크-워야시에비치 신경망(PLNets)을 써서 함수를 만들고 설계 단계부터 안정성이 보장되는 대리 모델을 활용한 거예요. 기존 방식은 미리 함수를 알아야 했지만, 이번에는 함수와 제어기를 동시에 학습하면서도 국소적·전역적 안정성을 보장할 수 있게 됐다는 점이 달라진 겁니다.",
            "topic": "신경망 기반 제어 리아푸노프 함수와 제어기를 동시에 학습하여 안정성을 보장하는 새로운 프레임워크를 제안했어요.",
            "one_line": "신경망 기반 제어 함수와 제어기를 동시에 학습하는 틀을 제안했어요.",
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
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 다항식 시스템을 다룰 수학적 도구가 부족했어요",
            "easy1_desc": "기존에는 행렬을 써서 시스템을 제어했지만, 차수가 높은 다항식 형태의 복잡한 움직임을 한 번에 다룰 수 있는 텐서 기반의 체계적인 틀은 아직 없었거든요. 연구진은 이 빈틈을 메우기 위해 텐서의 구조와 고유값 성질을 이용한 새로운 분석 틀을 개발했는데요. 쉽게 말하면, 행렬로 풀기 어려웠던 복잡한 비선형 시스템을 텐서라는 더 큰 그릇에 담아 분석할 수 있게 만든 셈이에요.",
            "easy2_title": "텐서 기반의 새로운 제어 방식으로 계산 속도를 높였어요",
            "easy2_desc": "연구진은 다항식 시스템의 안정성을 확인하는 새로운 테스트 방법을 만들고, 이를 바탕으로 제어기를 설계하는 방식까지 제시했는데요. 기존의 SOS(Sum-of-Squares) 방식보다 계산 시간이 훨씬 짧다는 장점이 있는데, 대신 텐서 연산의 특성을 잘 활용해야 한다는 조건이 붙는다는 겁니다. 결과적으로 복잡한 시스템에서도 더 효율적으로 안정성을 증명하고 제어기를 설계할 수 있게 된 거예요.",
            "topic": "다항식 시스템의 안정성 분석과 제어기 설계를 위한 텐서 대수 기반의 통합적인 방법론을 제시했어요.",
            "one_line": "텐서 대수를 활용해 다항식 시스템의 안정성을 분석하고 제어기를 설계했어요.",
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
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시간에 따라 변하는 영역을 어떻게 다룰지 고민했어요",
            "easy1_desc": "로봇이나 물체가 움직일 때 영역의 밀도가 시간에 따라 변하는 상황을 다루는 게 어려웠는데요, 연구진은 이를 미분동형사상(diffeomorphism)이라는 수학적 도구로 해결해 보려고 했어요. 이게 뭔 소리냐면, 복잡하게 변하는 영역을 고정된 영역으로 변환해서 생각하겠다는 말이에요. 이렇게 하면 시간에 따라 변하는 문제를 다루기 쉬운 고정된 문제로 바꿀 수 있다는 겁니다.",
            "easy2_title": "분산 제어 방식으로 복잡한 움직임을 제어했어요",
            "easy2_desc": "연구진은 중앙에서 통제하지 않고도 각 개체가 스스로 움직이는 분산 제어기를 제안했는데요, 연속 시간과 이산 시간 시스템 모두에서 잘 작동하도록 만들었어요. 이 제어기를 썼더니 시간에 따라 변하는 영역에서도 안정적으로 목표를 달성할 수 있었다고 해요. 중앙 집중식 제어와 비교해도 성능이 비슷하게 나온다는 장점이 있는데, 대신 복잡한 비선형 변환에서도 잘 작동하는지 확인하는 과정이 필요하다는 겁니다.",
            "topic": "시간에 따라 변하는 영역 밀도를 미분동형사상을 활용해 효율적으로 제어하는 방법을 다루고 있어요.",
            "one_line": "미분동형사상을 활용해 시간에 따라 변하는 영역을 제어하는 분산 제어기를 설계했어요.",
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
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡해진 무선 통신 환경에서 기존 방식은 한계가 있었어요",
            "easy1_desc": "요즘 무선 통신망은 워낙 복잡하고 시시각각 변하다 보니 실시간으로 자원을 최적화하는 게 필수적인데요. 기존에 쓰던 최적화 기법이나 일반적인 기계 학습 방식은 환경이 조금만 바뀌어도 적응하기 어렵고, 규모가 커지면 안정적으로 작동하지 못하는 문제가 있었거든요. 쉽게 말하면, 새로운 상황에 유연하게 대처하는 능력이 부족했다는 말이에요.",
            "easy2_title": "거대 언어 모델을 써서 실시간으로 통신 자원을 관리해 봤어요",
            "easy2_desc": "그래서 연구진은 거대 언어 모델(LLM)을 활용해 무선 통신 문제를 해결하는 방법을 정리했는데요. 이 모델은 별도의 재학습 없이도 구조화된 질문을 이해하고 실시간으로 상황에 맞는 결정을 내릴 수 있거든요. 전력 제어나 대역폭 할당 같은 복잡한 문제를 어떻게 풀 수 있는지 체계적으로 분류하고, 실제 사례를 통해 그 가능성을 확인했다는 겁니다.",
            "topic": "무선 통신망의 자원 최적화 문제를 해결하기 위해 거대 언어 모델(LLM)을 어떻게 활용할 수 있는지 분석한 연구예요.",
            "one_line": "무선 통신 최적화를 위한 LLM 활용 기술을 체계적으로 정리했어요.",
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
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "땅속 기기들에 에너지를 어떻게 줄지가 고민이었어요",
            "easy1_desc": "땅속에 묻힌 센서들은 전력을 스스로 얻기 어려워서 드론을 띄워 무선으로 에너지를 보내주는 방식을 써왔거든요. 그런데 여러 기기에 정보를 보내고 에너지를 동시에 전달하는 과정에서 효율을 높이는 게 쉽지 않았다는 말이에요. 뭔 소리냐면, 기기마다 필요한 에너지는 다른데 드론이 가진 자원은 한정되어 있어서 공평하게 데이터를 주고받기가 어려웠다는 겁니다.",
            "easy2_title": "AI 학습법을 써서 드론의 자원 배분을 최적화했어요",
            "easy2_desc": "연구진은 드론의 전력과 시간 배분을 최적화하려고 강화학습 기반의 새로운 알고리즘인 PD-TQC를 개발했는데요. 이 방식은 기기들의 데이터 처리량을 공평하게 높이면서도 드론의 에너지 제한 조건을 지키도록 설계됐거든요. 실제로 농장 토양 데이터를 바탕으로 실험해 봤더니, 기존 방식들보다 더 높은 처리량을 보여주면서도 제약 조건을 96% 넘게 만족시켰다는 거예요. 쉽게 말하면, 땅속 환경이 바뀌어도 드론이 효율적으로 에너지를 나눠줄 수 있게 된 셈이에요.",
            "topic": "드론을 활용한 지하 사물인터넷 환경에서 무선 전력 전송과 정보 전달 효율을 극대화하는 최적화 연구예요.",
            "one_line": "강화학습을 이용해 드론 기반 지하 사물인터넷의 전력 및 데이터 전송 효율을 높였어요.",
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
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇 학습에 쓰는 확산 정책이 사실은 옛날 방식과 닮았더라고요",
            "easy1_desc": "로봇이 사람의 행동을 따라 배우는 모방 학습에서 최근 확산 정책(Diffusion policies)이 대세로 쓰이고 있는데요. 연구진이 살펴보니 데이터가 적을 때 이 방식이 과거의 행동 제어 기법처럼 기록된 경로들을 조합해 결과를 내놓는다는 걸 확인했어요. 쉽게 말하면, 최신 기술인 줄 알았던 확산 정책이 사실은 이미 알려진 행동 제어의 원리와 수학적으로 똑같다는 말이에요.",
            "easy2_title": "데이터를 조합하는 새로운 방식을 만들어 성능을 높였어요",
            "easy2_desc": "그래서 연구진은 이 연결 고리를 바탕으로 카이제곱 투영 행동 노이즈 제거(χ²-projected behavioral denoising)라는 새로운 알고리즘을 제안했는데요. 이 방법은 별도의 학습 과정 없이도 주변의 경로 데이터를 적절히 섞어 쓰되, 데이터가 부족한 영역에서는 무리하게 예측하지 않도록 제한을 걸어 뒀어요. 그 결과 네 가지 비선형 제어 과제에서 기존의 비선형 행동 제어 방법들보다 더 나은 성과를 보여줬다는 겁니다.",
            "topic": "확산 정책과 행동 제어 사이의 수학적 연결 고리를 밝히고 이를 활용한 새로운 제어 알고리즘을 제안했어요.",
            "one_line": "확산 정책과 행동 제어의 수학적 관계를 밝히고 새로운 제어법을 제안했어요.",
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
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "인공지능이 내놓은 답이 안전한지 확인하기가 어려웠거든요",
            "easy1_desc": "자율주행 같은 시스템에서는 인공지능이 내놓은 행동이 안전 구역을 벗어나지 않도록 강제해야 하는데요, 보통은 출력값을 안전한 타원형 영역으로 투영해서 수정하는 방식을 씁니다. 그런데 이 투영 과정을 계산하려면 이차 제약이 있는 이차 계획법(QCQP)을 풀어야 해서 과정이 복잡하다는 문제가 있었거든요. 쉽게 말하면, 인공지능이 똑똑한 답을 내놓아도 그게 안전한지 실시간으로 검증하는 게 쉽지 않았다는 말이에요.",
            "easy2_title": "안전 계층을 신경망에 직접 넣어서 실시간으로 안전을 지키게 했어요",
            "easy2_desc": "연구진은 다항식 페널티 반복법을 신경망 구조로 펼쳐서 안전 계층을 만들었는데요, 이렇게 하면 학습할 때 손실 기울기가 안전 계층을 통과해 신경망 매개변수까지 전달될 수 있게 됩니다. 실제로 드론 제어에 적용해 봤더니, 학습 초기부터 벽에 부딪히지 않고 안전하게 비행하는 모습을 보였거든요. 메모리도 36 KiB 정도만 써서 성능이 낮은 마이크로컨트롤러에서도 충분히 돌아간다는 장점이 있습니다.",
            "topic": "신경망의 출력값이 안전한 타원형 제약 조건을 항상 만족하도록 보장하는 새로운 안전 계층 설계 방식에 관한 연구예요.",
            "one_line": "신경망에 안전 계층을 추가해 출력값이 항상 제약 조건을 지키도록 학습시켰어요.",
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
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "사람들이 협동할 때 생기는 문제를 미리 알아채고 싶었어요",
            "easy1_desc": "사람들이 모여서 일하다 보면 소통이 꼬이거나 협동이 깨지는 순간이 오는데요, 이런 상황을 미리 감지해서 적절한 신호를 주면 문제를 막을 수 있거든요. 연구진은 혼합 현실(MR) 기기를 센서로 써서 팀의 행동을 관찰하고, 기기가 직접 개입해 팀의 상태를 조절하는 시스템을 구상했어요. 다만 이런 시스템을 만들려면 팀의 움직임을 수학적으로 잘 설명하면서도, 설계자가 이해하기 쉽고 학습이 빠른 모델이 필요하다는 점이 핵심이에요.",
            "easy2_title": "에너지 그릇 모델로 팀의 상태를 예측하고 조절해 봤어요",
            "easy2_desc": "연구진은 팀을 에너지 그릇 안에 있는 공으로 비유한 ANCHOR라는 모델을 제안했는데요, 공이 그릇 바닥에 머무는 지점은 팀의 과거 행동이나 다른 팀의 사례를 바탕으로 결정돼요. 이 모델은 52개의 매개변수로 이루어진 포트 해밀턴 시스템인데, 각 변수가 심리학적 가설을 담고 있어서 해석이 쉽다는 장점이 있어요. 실제로 테스트해 보니 복잡한 블랙박스 모델과 비슷한 정확도를 보이면서도, 대화가 끊길 위험을 0.85의 AUROC로 예측해 냈다는 겁니다.",
            "topic": "인간-기계 시스템에서 팀의 역학 관계를 예측하고 제어하기 위한 포트 해밀턴 모델인 ANCHOR를 제안하고 그 성능을 검증했어요.",
            "one_line": "팀의 행동을 예측하고 제어하는 포트 해밀턴 모델을 개발했어요.",
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
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "장애물이 바뀔 때마다 다시 계산해야 하는 번거로움이 문제였어요",
            "easy1_desc": "로봇이 안전하게 움직이려면 장애물을 피하는 영역을 계산해야 하는데요, 기존의 해밀턴-야코비(HJ) 도달 가능성 분석은 장애물 배치가 달라질 때마다 처음부터 다시 계산해야 한다는 단점이 있어요. 이를 해결하려고 장애물 정보를 반영한 인공지능 모델을 쓰기도 하는데, 이 방식은 여러 상황을 한꺼번에 학습하다 보니 드물게 나타나는 장애물 배치에서 위험한 상태를 안전하다고 잘못 판단할 위험이 있거든요. 쉽게 말하면, 계산 효율을 챙기려다 안전성이라는 핵심을 놓칠 수 있다는 말이에요.",
            "easy2_title": "안전한 쪽으로만 오차가 생기게 해서 믿을 수 있는 모델을 만들었어요",
            "easy2_desc": "연구진은 장애물 정보를 반영하면서도 오차가 발생할 때 항상 보수적인 방향, 즉 안전한 쪽으로만 치우치도록 모델을 설계했는데요. 장애물과의 거리를 제한해 로봇 주변의 좁은 영역만 살피게 함으로써, 학습은 작은 환경에서 하고 실제로는 어떤 크기의 환경에서도 빠르게 적용할 수 있게 만든 겁니다. 결과적으로 기존 방식만큼 성능이 나오면서도 충돌은 거의 일어나지 않는다는 장점이 있는데, 10차원 쿼드로터 실험에서도 다른 방식보다 충돌률이 훨씬 낮았다고 해요.",
            "topic": "장애물 배치에 따라 실시간으로 안전 영역을 계산할 수 있는 새로운 도달 가능성 학습 모델을 제안했어요.",
            "one_line": "장애물 배치에 따라 안전 영역을 보수적으로 학습하는 모델을 개발했어요.",
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
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "6자유도 물체의 움직임을 어떻게 표현할지 고민해 봤어요",
            "easy1_desc": "6자유도(6-DOF)로 움직이는 물체를 다룰 때, 리 군(Lie-group) 구조를 어떻게 선택하느냐에 따라 상태 분포를 얼마나 잘 나타내고 오차를 정확히 전파할 수 있는지가 달라지거든요. 연구진은 쿼터니언(quaternion)을 기반으로 속도 위상 공간을 표현하는 새로운 방식을 개발했는데요. 행렬 그룹을 직접 쓰지 않고도 닫힌 형태의 연산과 야코비안(Jacobian)을 구할 수 있게 만든 겁니다.",
            "easy2_title": "새로운 구조를 써 보니 물체의 움직임이 더 잘 설명되네요",
            "easy2_desc": "연구진이 제안한 반직접곱(semidirect-product) 방식은 물체의 자세가 바뀔 때 발생하는 뒤틀림을 더 자연스럽게 포착할 수 있는데요. 달 착륙 실험을 통해 기존 방식과 비교해 봤더니, 바나나 모양의 속도 분포를 훨씬 잘 표현하고 몬테카를로(Monte Carlo) 시뮬레이션 결과와도 더 비슷하게 나타났거든요. 결국 수학적 구조를 바꾼 것만으로도 성능이 크게 좋아졌다는 게 연구진의 주장이에요.",
            "topic": "6자유도 강체 운동의 불확실성을 표현하고 전파하기 위한 리 군 구조의 설계와 그 성능을 검증한 연구예요.",
            "one_line": "6자유도 강체 운동의 불확실성 표현을 위해 새로운 리 군 구조를 설계했어요.",
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
          "backlog": true,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "전공 +3",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "안정적인 상태를 유지하는 범위를 찾기가 어려웠어요",
            "easy1_desc": "전력망에서 시스템이 안정적으로 유지되는 범위를 수학적으로 찾아내는 건 원래 아주 까다로운 작업이거든요. 연구진은 쿱만 고유함수(Koopman eigenfunctions)가 리아푸노프 함수(Lyapunov functions)와 같다는 점에 주목했는데요. 이게 무슨 말이냐면, 시스템의 안정적인 상태를 수학적으로 증명할 수 있는 도구를 찾았다는 뜻이에요. 하지만 기존 방식으로는 이 범위를 정확히 계산해 내는 데 한계가 있었다는 겁니다.",
            "easy2_title": "데이터를 활용해 안정 범위를 더 넓게 찾아냈어요",
            "easy2_desc": "연구진은 확장 동적 모드 분해(EDMD)라는 방법을 써서 데이터를 기반으로 고유함수를 추정해 봤는데요. 단일 기기 무한 버스 시스템에서 이 방법을 썼더니, 전체 안정 범위의 최대 66%까지 증명해 낼 수 있었다는 거예요. 여기서 끝이 아니라 쿱만 반군 성질을 이용해 이 범위를 전체로 확장까지 했거든요. 쉽게 말하면, 국소적인 데이터만 가지고도 시스템 전체의 안정적인 영역을 더 넓게 파악할 수 있게 된 셈이에요.",
            "topic": "데이터 기반의 확장 동적 모드 분해를 활용해 전력망의 안정적인 영역을 계산하고 확장하는 방법이에요.",
            "one_line": "데이터 기반의 EDMD를 활용해 전력망의 안정적인 영역을 계산하고 확장했어요.",
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
            "bad_numbers": [
              "0"
            ],
            "format": [],
            "flags": [],
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.21392",
          "title": "VideoNexus: Video Perception Beyond the Reasoning Context",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.21392",
            "arxiv": "https://arxiv.org/abs/2611.21392"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 19,
          "score": 2.9,
          "score_why": "추천 19 → +1.9 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "긴 영상을 다 볼 필요 없이 핵심만 골라내고 싶었어요",
            "easy1_desc": "긴 영상을 분석할 때 모든 장면을 모델의 기억 공간에 넣으면 정보가 너무 많아져서 판단력이 흐려지는 문제가 생기거든요. 그렇다고 드문드문 장면을 뽑아 쓰자니 중요한 단서를 놓치기 일쑤고, 장면마다 일일이 설명문을 달자니 데이터가 너무 커지는 단점이 있어요. 쉽게 말하면, 영상은 길고 정보는 많은데 정작 중요한 걸 찾기가 너무 힘들었다는 말이에요.",
            "easy2_title": "영상 보는 눈과 생각하는 뇌를 따로 떼어 놓았어요",
            "easy2_desc": "연구진은 비디오넥서스(VideoNexus)라는 틀을 만들어 영상의 세부 정보를 파악하는 눈과 계획을 세우는 뇌를 분리했는데요, 계획을 담당하는 쪽이 필요한 장면만 골라 검사하도록 시키면 시각 정보를 처리하는 쪽이 그 부분만 요약해서 전달하는 방식이에요. 이렇게 하면 전체 영상을 다 기억할 필요가 없어 효율적이고, 필요한 정보만 쏙쏙 뽑아오니 정확도도 올라가는 셈이죠. 쉽게 말하면, 영상 전체를 다 짊어지고 고민하는 대신 필요한 단서만 주고받으며 문제를 해결하는 겁니다.",
            "topic": "비디오넥서스는 영상 인식과 추론 과정을 분리하여 긴 영상 분석의 효율성과 정확도를 높이는 프레임워크예요.",
            "one_line": "영상 인식과 추론을 분리해 효율적인 분석을 수행했어요.",
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
          "canon_id": "2611.23144",
          "title": "π^4: A Foundation Model for 4D Scene Geometry and Motion",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.23144",
            "arxiv": "https://arxiv.org/abs/2611.23144"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 13,
          "score": 2.3,
          "score_why": "추천 13 → +1.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "4차원 장면을 이해하는 게 예전엔 참 어려웠거든요",
            "easy1_desc": "기존에는 사진이나 영상처럼 제각각인 자료에서 3차원 공간의 모양이나 카메라 위치를 알아내는 게 쉽지 않았는데요, 자료마다 카메라 설정이 다르면 더 복잡해지곤 했거든요. 이런 자료들을 하나로 묶어서 처리할 통합 모델이 부족했다는 게 문제였던 겁니다. 쉽게 말하면, 다양한 환경에서 찍힌 이미지들을 한꺼번에 해석할 도구가 마땅치 않았던 셈이에요.",
            "easy2_title": "하나의 모델로 4차원 공간과 움직임을 한 번에 찾아냈어요",
            "easy2_desc": "연구진은 파이포(π^4)라는 모델을 만들어 이미지나 영상 속에서 공간의 모양과 카메라 위치, 물체의 움직임까지 한 번에 뽑아내도록 했는데요, 기존 모델보다 절반 이하인 0.5B 개의 파라미터만 쓰고도 더 뛰어난 성능을 보였다고 주장했어요. 특히 수천 장의 사진이 들어가는 큰 장면도 64개 뷰(view)까지만 학습한 모델로 처리할 수 있다는 장점이 있거든요. 대신 이 모델이 모든 상황에서 완벽한지 확인하려면 더 다양한 데이터로 검증이 필요하다는 점도 함께 언급했답니다.",
            "topic": "파이포(π^4)는 다양한 시각 자료를 입력받아 4차원 장면의 기하학적 구조와 물체의 움직임을 동시에 복원하는 통합 기초 모델이에요.",
            "one_line": "다양한 시각 자료를 통합 처리하는 4차원 장면 복원 모델을 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "학습 시 최대 64개의 뷰를 사용했다는 조건이 있습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.21152",
          "title": "From Repositories to Training Environments: Scaling Long-Horizon Coding Agents with Environment Evolution Loop",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.21152",
            "arxiv": "https://arxiv.org/abs/2611.21152"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 12,
          "score": 2.2,
          "score_why": "추천 12 → +1.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "코딩 에이전트를 가르칠 때 피드백이 너무 늦고 부족한 게 문제였어요",
            "easy1_desc": "긴 작업을 수행하는 코딩 에이전트를 훈련하려면 결과가 맞는지 바로 확인해 주는 환경이 필요한데요, 기존 방식은 마지막에만 검증을 거치다 보니 학습에 필요한 정보를 충분히 얻지 못하는 문제가 있었거든요. 특히 긴 코딩 작업은 평가까지 시간이 오래 걸리고 비용도 많이 든다는 단점이 있어요. 쉽게 말하면, 학습 효율을 높일 수 있는 적절한 신호를 제때 받지 못해 에이전트가 성장하기 어려웠다는 겁니다.",
            "easy2_title": "실제 저장소를 활용한 환경 생성 루프로 학습 효율을 높였어요",
            "easy2_desc": "연구진은 실제 소프트웨어 저장소를 검증 가능한 환경으로 바꾸는 RepoFactory라는 자동화 파이프라인을 만들었는데요, 환경 진화 루프를 통해 유효성이나 구조적 결합 같은 지표를 최적화하며 학습 가치를 높이는 방식을 택했어요. 그 결과 17개 소프트웨어 분야에서 10,159개의 환경을 만들어냈고, 이를 통해 훈련된 모델은 실제 코딩 작업에서 성능이 크게 향상됐거든요. 결과적으로 기존 방식보다 더 정교한 학습이 가능해졌다는 의미예요.",
            "topic": "실제 저장소를 기반으로 코딩 에이전트의 학습 환경을 자동 생성하고 최적화하는 RepoFactory 파이프라인에 대한 연구예요.",
            "one_line": "실제 저장소를 활용한 자동화 환경으로 코딩 에이전트의 학습 효율을 높였어요.",
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
          "canon_id": "2611.23108",
          "title": "FMT: Lossless Image Compression in a Fixed Number of Parallel Steps",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.23108",
            "arxiv": "https://arxiv.org/abs/2611.23108"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 10,
          "score": 2.0,
          "score_why": "추천 10 → +1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "학습 기반 압축 기술은 왜 느린가",
            "easy1_desc": "학습 기반의 무손실 이미지 압축 기술은 기존 방식보다 파일 크기를 줄이는 데는 유리하지만, 사진 한 장을 푸는 데 수 초가 걸릴 정도로 속도가 느리다는 단점이 있어요. 기존 방식은 밀리초 단위로 처리하는 것과 비교하면 차이가 큰 셈인데요. 연구진은 이 지연 시간이 연산 자체가 아니라, 네트워크가 이전 값을 기다리거나 산술 복호기가 데이터를 하나씩 읽느라 발생하는 대기 시간 때문이라고 분석했어요.",
            "easy2_title": "기다림 없는 병렬 처리로 속도를 높였다",
            "easy2_desc": "연구진은 FMT(Fixed-step Multiscale Tree)라는 새로운 방식을 도입해 이미지 크기와 상관없이 대기 시간이 늘어나지 않도록 설계했어요. 이미지를 계층적인 트리 구조로 저장하고 GPU가 각 단계를 한꺼번에 예측해 병렬로 처리하는 방식인데요. 덕분에 이미지 크기에 관계없이 정해진 단계 내에서 복호화가 가능해졌고, 기존 학습 기반 코덱보다 최대 61배 빠르게 사진을 처리할 수 있게 됐다는 겁니다.",
            "topic": "FMT 방식을 통해 이미지 크기에 구애받지 않고 고속으로 무손실 압축을 수행하는 기술을 제안했어요.",
            "one_line": "병렬 처리 구조를 도입해 이미지 압축 속도를 높였어요.",
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
          "canon_id": "2611.20992",
          "title": "MedJev: A System One Vision-Language Decision Model for Fast and Effective Medical Image Understanding",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.20992",
            "arxiv": "https://arxiv.org/abs/2611.20992"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 10,
          "score": 2.0,
          "score_why": "추천 10 → +1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "의료 영상 분석할 때 굳이 글자를 다 만들 필요가 있을까",
            "easy1_desc": "기존의 시각-언어 모델(VLM)들은 의료 영상을 분석할 때마다 추론 과정을 거쳐 답변을 하나씩 생성하는 방식을 써 왔거든요. 그런데 이렇게 글자를 일일이 만들어 내면 답변이 길어질수록 시간이 오래 걸리고, 텍스트에서 답을 다시 찾아내야 해서 오류가 생길 위험도 커진다는 단점이 있어요. 쉽게 말하면, 굳이 안 해도 될 글자 생성 과정을 거치느라 속도와 정확도 모두 손해를 보고 있었던 셈이에요.",
            "easy2_title": "글자 생성 과정을 싹 빼고 바로 답만 고르도록 바꿨어",
            "easy2_desc": "연구진은 MedJev라는 새로운 모델을 만들어서 복잡한 언어 생성 과정을 아예 없애 버렸는데요, 의료 영상과 질문, 그리고 후보 답변들을 한 번에 넣어서 바로 결정을 내리는 방식을 택한 거예요. 모델의 윗부분에 있는 언어 층을 걷어내고 영상 처리 경로만 남겨서 속도를 확 높였거든요. 그 결과 기존 모델보다 정확도는 7.93% 올랐고, 속도는 6.04배나 빨라졌다고 연구진은 밝혔습니다.",
            "topic": "의료 영상 이해를 위해 언어 생성 과정 없이 직접 결정을 내리는 시스템 원(System One) 시각-언어 모델 MedJev를 제안했어요.",
            "one_line": "언어 생성 과정 없이 의료 영상을 바로 분석하는 모델을 개발했어요.",
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
            "evidence_by_symbols": 1,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "의료·바이오",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.22563",
          "title": "CADMAGEDDON: High-Fidelity CAD Reconstruction with Local Inference",
          "field": "cs.AI",
          "sources": [
            "cs.AI",
            "허깅페이스"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22563",
            "hf": "https://huggingface.co/papers/2611.22563"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 9,
          "score": 1.9,
          "score_why": "추천 9 → +0.9 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "남에게 보여주기 싫은 설계 도면을 내 컴퓨터에서 바로 만들고 싶었어요",
            "easy1_desc": "설계 전문가들은 보안 때문에 외부 서비스에 도면을 올리는 걸 꺼리는데요, 그렇다고 직접 만들자니 엄청난 성능의 컴퓨터가 필요해서 부담이 컸거든요. 이런 문제를 해결하려고 연구진이 CADMAGEDDON이라는 도구를 내놨는데, 이게 뭐냐면 외부 도움 없이 내 컴퓨터에서 바로 편집 가능한 CAD 도면을 만들어 주는 기술이에요. 쉽게 말하면, 보안과 비용 문제를 동시에 잡으려고 했다는 겁니다.",
            "easy2_title": "복잡한 도면 작업을 작은 AI 모델로도 척척 해내게 만들었어요",
            "easy2_desc": "연구진은 복잡한 도면 재구성 과정을 시각적 판단을 내리는 여러 단계로 쪼개서 처리했는데요, 기하학적 도구를 써서 정밀함을 챙기고 AI는 시각적인 추론에만 집중하게 만든 거예요. Qwen3.8-27B라는 중간 크기의 모델을 썼는데도 기존의 거대 모델 기반 시스템보다 재구성 품질이 더 뛰어나다고 연구진은 주장했어요. 게다가 FreeCAD와 바로 연결해서 쓸 수 있으니 기존 작업 방식에 녹여내기도 편하다는 장점이 있거든요.",
            "topic": "보안과 효율을 모두 잡기 위해 로컬 환경에서 작동하는 오픈소스 CAD 재구성 에이전트인 CADMAGEDDON을 개발했어요.",
            "one_line": "로컬 환경에서 작동하는 CAD 재구성 에이전트를 개발했어요.",
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
          "canon_id": "2611.12069",
          "title": "MPEG-Diffusion: Mixed-Resolution Video Generation",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.12069",
            "arxiv": "https://arxiv.org/abs/2611.12069"
          },
          "published": "2026-11-09",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 9,
          "score": 1.9,
          "score_why": "추천 9 → +0.9 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "영상 생성할 때 계산량이 너무 많아 고민이었거든요",
            "easy1_desc": "비디오 확산 변환기(DiT)는 사실적인 영상을 만들 수 있지만, 계산량이 너무 많아서 실제 환경에서 쓰기에는 무리가 있었거든요. 그래서 중요하게 보이는 부분만 고해상도(HR)로 만들고 나머지는 저해상도(LR)로 만드는 방식을 써 봤는데요, 기존 방법들은 영상 품질이 크게 떨어지거나 고해상도 영역을 미리 정해줘야 한다는 단점이 있었던 겁니다.",
            "easy2_title": "계산은 줄이고 품질은 높이는 새로운 방법을 찾았습니다",
            "easy2_desc": "연구진은 MPEG-Diffusion이라는 기술을 제안해서 기존 방식의 문제점 세 가지를 해결했는데요, 고해상도와 저해상도 영역을 알아서 구분하고 자연스럽게 합치도록 설계한 겁니다. 덕분에 전체 해상도 토큰의 30%만 처리하고도 영상 생성 속도를 최대 4.8배까지 높일 수 있었다고 해요. 품질 면에서도 기존 방식보다 훨씬 뛰어나서, 사용자 평가에서 90% 이상이 이 방식을 더 선호했다고 밝혔습니다.",
            "topic": "고해상도와 저해상도를 섞어 처리하는 방식으로 영상 생성의 효율과 품질을 동시에 잡은 MPEG-Diffusion 모델에 대한 연구예요.",
            "one_line": "혼합 해상도 방식을 개선해 영상 생성 속도와 품질을 높였어요.",
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
          "canon_id": "2611.23219",
          "title": "Do LLM Agents Still Need to Be Told How to Self-Improve?",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.23219",
            "arxiv": "https://arxiv.org/abs/2611.23219"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 5,
          "score": 1.5,
          "score_why": "추천 5 → +0.5 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "똑똑해진 AI가 스스로 학습법까지 정할 수 있을까",
            "easy1_desc": "거대언어모델(LLM) 에이전트가 스스로 학습하는 능력이 커지면서, 사람이 일일이 학습 방법을 정해줘야 하는지 의문이 생겼거든요. 연구진은 모델이 기본적인 자원과 목표만 주어진 상태에서 스스로 최적화 알고리즘을 만들 수 있는지 확인해 봤는데요. 이게 무슨 말이냐면, 사람이 설계한 틀을 벗어나 모델이 직접 학습 과정을 주도할 수 있는지 알아본다는 뜻이에요.",
            "easy2_title": "사람 없이도 스스로 학습 전략을 짜서 성능을 높였어요",
            "easy2_desc": "게임 환경에서 실험해 봤더니, 충분히 똑똑한 모델은 외부의 간섭 없이도 스스로 학습 전략을 찾아내 성능을 개선하는 모습을 보였거든요. 모델이 만든 학습 전략은 인지 심리학의 자기 조절 학습이나 머신러닝의 커리큘럼 학습과도 일맥상통하는 부분이 있다는 거예요. 쉽게 말하면, 사람이 가르치지 않아도 모델이 스스로 효율적인 학습법을 깨우쳤다는 사실을 확인한 셈이에요.",
            "topic": "LLM 에이전트가 외부의 지시 없이 스스로 학습 알고리즘을 구축하고 최적화할 수 있는지에 대한 연구예요.",
            "one_line": "LLM 에이전트가 스스로 학습 알고리즘을 구축하는 자율 학습 패러다임을 검증했어요.",
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
          "canon_id": "2611.20441",
          "title": "Abstention Direction in Large Language Models: Mechanistic Interpretability of Abstention Across Query Ambiguity, Knowledge Limits, and Safety Alignment",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.20441",
            "arxiv": "https://arxiv.org/abs/2611.20441"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 5,
          "score": 1.5,
          "score_why": "추천 5 → +0.5 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "거대언어모델이 대답을 피하는 이유를 세 가지로 나눠 봤어요",
            "easy1_desc": "거대언어모델(LLM)이 불확실하거나 위험한 질문에 대답을 거부하는 건 신뢰성을 위해 꼭 필요한 기능인데요, 연구진은 이 거부 현상이 질문의 모호함, 모델 지식의 한계, 그리고 인간 가치와의 불일치라는 세 가지 원인에서 비롯된다고 봤어요. 그동안은 주로 인간 가치와 관련된 거부 방향만 연구해 왔는데, 이번에는 이 세 가지 관점을 모두 아울러서 분석해 본 겁니다. 쉽게 말하면, 모델이 왜 입을 닫는지 그 근본적인 이유를 종합적으로 파헤쳐 본 셈이에요.",
            "easy2_title": "거부하는 방향을 찾아내서 모델의 대답을 조절해 봤어요",
            "easy2_desc": "연구진은 각 원인별로 대답을 거부하게 만드는 방향을 찾아내기 위해, 질문의 틀은 같지만 거부 요인만 다른 반사실적 쌍을 만들어서 모델 내부의 활성화 차이를 계산했어요. 이렇게 구한 거부 방향을 중간 계층에 적용해 봤더니, 실제로 모델의 거부 성향을 높이거나 낮출 수 있었다는 거예요. 특히 세 가지 관점의 거부 방향이 공통된 성분을 공유하고 있다는 점도 확인했는데요, 이는 모델의 거부 행동을 더 정교하게 제어할 수 있는 가능성을 보여준다는 겁니다.",
            "topic": "거대언어모델의 대답 거부 현상을 세 가지 관점에서 분석하고 이를 제어하는 기법을 제안했어요.",
            "one_line": "거대언어모델의 대답 거부 원인을 분석하고 이를 제어하는 방향을 찾아냈어요.",
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
          "canon_id": "2611.21938",
          "title": "HubEgo-100K: In-the-Wild Egocentric Video of Skilled Work for Robot Learning",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.21938",
            "arxiv": "https://arxiv.org/abs/2611.21938"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 4,
          "score": 1.4,
          "score_why": "추천 4 → +0.4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇이 새로운 환경에서 잘 움직이지 못하는 게 문제였어요",
            "easy1_desc": "로봇 학습을 위해 모방 학습을 시켜 봐도, 훈련할 때 보지 못한 새로운 환경이나 물건을 만나면 로봇이 제대로 대응하지 못하는 문제가 있었거든요. 연구진은 로봇 학습 성능을 높이려면 단순히 같은 환경에서 데이터를 많이 모으는 것보다, 다양한 환경과 물건을 경험하게 하는 게 훨씬 중요하다는 점을 짚어냈습니다. 그런데 문제는 로봇 데이터를 여러 곳에서 직접 수집하는 건 비용이 너무 많이 든다는 거예요.",
            "easy2_title": "사람이 일하는 모습을 담은 대규모 영상 데이터셋을 만들었어요",
            "easy2_desc": "그래서 연구진은 로봇 학습을 위해 일상생활이 아닌 실제 작업 현장의 모습이 담긴 HubEgo-100K 데이터셋을 구축했는데요, 사람이 직접 머리에 카메라를 달고 촬영한 1만 124시간 분량의 영상과 센서 데이터를 모은 겁니다. 1만 2천 명이 넘는 참여자가 각자의 작업 환경에서 찍은 영상이라 매우 다양하다는 장점이 있는데, 이를 통해 로봇이 더 넓은 범위의 환경을 이해하도록 돕는 셈이에요. 쉽게 말하면, 로봇이 낯선 곳에서도 잘 움직이게 하려고 사람이 일하는 방대한 데이터를 학습 재료로 제공한 겁니다.",
            "topic": "로봇 학습을 위해 실제 작업 현장의 다양성을 담은 대규모 에고센트릭(1인칭 시점) 영상 데이터셋인 HubEgo-100K를 구축하고 그 특성을 분석했어요.",
            "one_line": "로봇 학습을 위한 대규모 1인칭 작업 영상 데이터셋을 구축했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "이번 논문은 v1.0 버전을 다루고 있으며, 향후 10만 시간 분량까지 데이터를 늘리고 벤치마크를 추가할 계획이라고 밝혔습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
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
              "124",
              "2",
              "2227",
              "2754",
              "7"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.19559",
          "title": "ResWAM: Learning What Changes, Not What Stays, for World-Action Models",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.19559",
            "arxiv": "https://arxiv.org/abs/2611.19559"
          },
          "published": "2026-11-14",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 4,
          "score": 1.4,
          "score_why": "추천 4 → +0.4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "변하지 않는 배경까지 다 배우려니 학습이 더뎌요",
            "easy1_desc": "기존의 세계-행동 모델(WAM)은 미래의 전체 화면을 예측하려고 애쓰는데요, 사실 영상 속 배경은 거의 그대로인데도 이걸 일일이 다 학습하느라 정작 중요한 로봇의 움직임이나 물체의 변화를 배우는 데 방해가 된다는 거예요. 뭔 소리냐면, 변하지 않는 배경을 복사하는 데 에너지를 너무 많이 쓴다는 말이에요. 그래서 로봇이 작업을 배우는 데 한계가 생기는 겁니다.",
            "easy2_title": "변화하는 부분만 쏙 골라내서 효율을 높였어요",
            "easy2_desc": "연구진은 전체 화면 대신 현재 프레임과 미래 프레임 사이의 변화량만 학습하는 시각적 잔차 학습 방식을 제안했는데요, 이렇게 하면 배경은 무시하고 로봇 팔이나 움직이는 물체에만 집중할 수 있게 됩니다. 덕분에 연산량은 줄이면서도 더 다양한 장면 변화를 담아낼 수 있게 된 거예요. 결과적으로 2.3B 파라미터 규모의 ResWAM 모델을 통해 적은 자원으로도 높은 성공률을 보여줬다는 겁니다.",
            "topic": "로봇이 자신의 행동이 물리 세계에 미칠 영향을 예측하도록 돕는 효율적인 세계-행동 모델인 ResWAM을 개발했어요.",
            "one_line": "변화량만 학습하는 잔차 모델로 로봇의 행동 예측 효율을 높였어요.",
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
          "canon_id": "2611.15671",
          "title": "The Noise Floor of a Quantization Comparison: Engine, restart, batch and kernel drift, measured against 8-bit and 4-bit effects in two decision models",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.15671",
            "arxiv": "https://arxiv.org/abs/2611.15671"
          },
          "published": "2026-11-11",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 4,
          "score": 1.4,
          "score_why": "추천 4 → +0.4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "양자화 모델을 평가할 때 가중치 말고도 변하는 게 너무 많아요",
            "easy1_desc": "보통 양자화된 모델의 성능을 평가할 때는 원본 모델과 비교하는데요, 이때 단순히 가중치만 바뀌는 게 아니라는 점이 문제예요. 모델을 돌리는 엔진이 바뀌거나 서버 인스턴스가 달라지고, 요청을 처리하는 배치 크기나 사용하는 커널까지 제각각 변할 수 있거든요. 이런 요소들이 결과에 영향을 주는데, 정작 양자화 자체의 효과인지 아니면 이런 환경 변화 때문인지 구분하기가 어렵다는 말이에요.",
            "easy2_title": "환경 변화가 결과에 미치는 영향을 측정해서 양자화 효과를 걸러냈어요",
            "easy2_desc": "연구진은 클라우드플레어(Cloudflare)의 모델 두 개를 NVIDIA GB10에서 돌리며 엔진, 배치, 커널 등 양자화와 무관한 변수들이 결과에 얼마나 영향을 주는지 일일이 측정해 봤는데요. 이 변수들이 결정에 미치는 영향은 0에서 0.92% 수준이었거든요. 그래서 전체 결과에서 이 노이즈를 뺀 나머지를 양자화의 순수한 효과로 정의했더니, 4비트 양자화의 영향이 환경 변화로 인한 노이즈보다 훨씬 크다는 걸 확인한 셈이에요.",
            "topic": "양자화 모델 평가 시 발생하는 환경적 노이즈를 측정하고 이를 배제한 순수 양자화 효과를 분석했어요.",
            "one_line": "양자화 모델 평가 시 발생하는 환경적 노이즈를 측정하고 양자화 효과를 분석했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "사전에 등록한 예측 중 두 가지가 실패했으며, 이는 27B 모델에서 테스트를 다시 수행해도 동일하게 나타났습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.08922",
          "title": "Glyph: An Interpretability Engine for AI-Driven Scientific Discovery in Clinical Data",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.08922",
            "arxiv": "https://arxiv.org/abs/2611.08922"
          },
          "published": "2026-11-06",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 4,
          "score": 1.4,
          "score_why": "추천 4 → +0.4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식은 미리 정해둔 특징만 찾을 수 있다는 한계가 있었어요",
            "easy1_desc": "자동화된 과학적 발견은 질병의 원인을 이해하고 초기 지표를 찾는 데 큰 도움을 줄 수 있는데요, 지금까지는 사람이 일일이 데이터를 분류하기 어려워 미리 정의된 특징들만 추출하는 방식을 써 왔거든요. 그런데 이런 방식은 정해진 틀 안에서만 연관성을 찾을 수 있다는 한계가 분명합니다. 쉽게 말하면, 우리가 미리 무엇을 찾을지 정해두지 않으면 인공지능이 새로운 발견을 하기 어렵다는 말이에요.",
            "easy2_title": "기초 모델을 활용해 숨겨진 임상 특징을 자동으로 찾아내고 해석했어요",
            "easy2_desc": "연구진은 이런 문제를 해결하려고 기초 모델(FM)과 희소 오토인코더(sparse autoencoders)를 결합한 글리프(Glyph)라는 프레임워크를 개발했는데요, 임상 데이터에서 숨겨진 특징을 추출한 뒤 이를 의학적 개념으로 해석하고 그 가치를 평가하는 방식이에요. 41,628명의 환자 데이터를 분석해 본 결과, 397개의 예측 개념을 찾아냈고 이 중 상당수가 다른 기관의 데이터에서도 재현되는 성과를 보였거든요. 기존 문헌에 나온 지표들과 함께 사용하면 예측 성능이 더 높아진다는 장점도 확인했습니다.",
            "topic": "임상 데이터에서 기초 모델의 잠재적 특징을 추출하고 해석하여 과학적 발견을 돕는 글리프 프레임워크를 제안했어요.",
            "one_line": "기초 모델을 활용해 임상 데이터에서 새로운 질병 특징을 자동으로 추출하고 해석했어요.",
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
          "canon_id": "2611.22565",
          "title": "MillBill: A Machining Agent with Geometric Feedback",
          "field": "cs.AI",
          "sources": [
            "cs.AI",
            "허깅페이스"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22565",
            "hf": "https://huggingface.co/papers/2611.22565"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기계 가공을 위해 모델이 직접 코드를 짜는 건 너무 어렵거든요",
            "easy1_desc": "CAD 모델을 실제 가공 프로그램으로 바꾸려면 공정 지식과 정밀한 기하학적 계산이 모두 필요한데요, 기존 언어 모델들은 이 복잡한 도구 경로 코드까지 직접 짜려고 시도하곤 합니다. 그런데 이렇게 수치 계산까지 모델이 도맡아 처리하게 되면 오류가 생기기 쉽다는 문제가 있거든요. 쉽게 말하면, 모델이 설계와 계산이라는 두 가지 짐을 동시에 지고 있어서 효율이 떨어진다는 말이에요.",
            "easy2_title": "가공 결정과 계산 과정을 분리해서 정확도를 높였어요",
            "easy2_desc": "연구진은 MillBill이라는 에이전트를 도입해 가공 전략을 짜는 결정 단계와 실제 기하학적 실행 및 검증 단계를 분리했는데요, 모델은 가공 작업과 매개변수만 제안하고 별도의 기하학적 도구가 경로를 계산해 피드백을 주는 방식이에요. 이렇게 하면 가공 가능 여부를 더 정확히 따질 수 있고, 시뮬레이션 결과를 바탕으로 계획을 다듬을 수도 있거든요. 결과적으로 Qwen3.8-27B 모델을 쓴 MillBill이 기존의 방식보다 더 나은 성능을 보였다고 연구진은 주장했습니다.",
            "topic": "기하학적 피드백을 활용하여 가공 작업의 효율과 정밀도를 높이는 에이전트 MillBill에 관한 연구입니다.",
            "one_line": "기하학적 피드백을 활용해 가공 계획과 실행을 분리한 에이전트를 개발했어요.",
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
          "canon_id": "2611.21925",
          "title": "DNeo: Your Parallel Draft Model Needs Better Target Feature Encoding",
          "field": "cs.AI",
          "sources": [
            "cs.AI",
            "허깅페이스"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21925",
            "hf": "https://huggingface.co/papers/2611.21925"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존의 초안 모델은 타겟 모델의 정보를 제대로 못 썼거든요",
            "easy1_desc": "추론 속도를 높이려고 작은 모델이 초안을 먼저 만들고 큰 모델이 검증하는 방식을 쓰는데요, 이때 큰 모델의 정보를 가져오는 과정에서 세 가지 문제가 발생합니다. 정보를 압축하는 과정에서 데이터가 손실되거나, 이전에 거절된 제안들을 기억하지 못하고, 타겟 모델의 핵심적인 숨은 상태를 놓치는 경우가 많다는 거예요. 쉽게 말하면, 큰 모델의 지식을 초안 모델로 전달하는 통로가 좁고 비효율적이었다는 말입니다.",
            "easy2_title": "새로운 인코딩 방식인 MoFA로 추론 속도를 1.3배 높였어요",
            "easy2_desc": "연구진은 MoFA라는 가벼운 인코딩 방식을 도입해 이 문제를 해결했는데요, 이 방식은 이전에 거절된 제안들을 기억하는 작업 메모리를 갖추고 있습니다. 여기에 2-tap 인과적 합성곱이나 타겟 레이어를 골라 쓰는 등의 기술을 더한 DNeo 모델을 만들었거든요. 그 결과 기존 최고 성능 모델보다 생성 속도가 1.3배 빨라졌는데, 모델의 크기나 생성 품질은 그대로 유지했다는 점이 특징이에요.",
            "topic": "거대 언어 모델(LLM)의 추론 속도를 높이기 위해 타겟 모델의 특징을 효율적으로 인코딩하는 DNeo 아키텍처를 제안했어요.",
            "one_line": "효율적인 특징 인코딩 기법을 적용해 LLM 추론 속도를 1.3배 높였어요.",
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
          "canon_id": "2611.21791",
          "title": "Regularized Score Centering",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.21791",
            "arxiv": "https://arxiv.org/abs/2611.21791"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "비동기 학습을 하면 데이터가 꼬여서 학습이 불안정해지거든요",
            "easy1_desc": "강화학습에서 속도를 높이려고 여러 데이터를 동시에 처리하는 비동기 방식을 쓰면, 옛날 정책에서 나온 데이터가 섞이면서 학습이 불안정해지는 문제가 생깁니다. 기존의 점수 중심화(SC) 기법이 이를 해결하려 했지만, 학습 모델이 데이터를 만든 원래 정책에서 너무 멀어지면 여전히 성능이 떨어지는 한계가 있었거든요. 쉽게 말하면, 모델이 너무 제멋대로 움직이지 않게 잡아줄 장치가 필요했다는 말이에요.",
            "easy2_title": "학습 모델이 원래 정책과 너무 멀어지지 않게 벌점을 주는 방식을 썼어요",
            "easy2_desc": "연구진은 정규화된 점수 중심화(RSC)라는 새로운 방법을 도입했는데, 이는 학습 모델이 원래 정책과 비슷하게 움직이도록 역방향 KL 페널티를 추가한 거예요. 이렇게 하면 모델이 너무 튀지 않게 제어할 수 있어서 학습이 훨씬 안정적으로 변하거든요. 실제로 수학 문제나 에이전트 작업에서 테스트해 봤더니, 같은 데이터를 써도 더 효율적으로 학습하고 성능도 크게 좋아졌다고 밝혔습니다.",
            "topic": "비동기 강화학습에서 발생하는 정책 불일치 문제를 해결하기 위해 정규화된 점수 중심화(RSC) 기법을 제안하고 그 효과를 검증했어요.",
            "one_line": "비동기 강화학습의 불안정성을 해결하기 위해 정규화된 점수 중심화 기법을 제안했어요.",
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
          "canon_id": "2611.23034",
          "title": "M3OPD-Reasoner: An Open Recipe for Post-Training Multimodal Reasoning with Multi-Teacher On-Policy Distillation",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.23034",
            "arxiv": "https://arxiv.org/abs/2611.23034"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "여러 선생님의 지식을 한 모델에 담기가 어려웠어요",
            "easy1_desc": "시각과 언어를 함께 다루는 모델(VLM)은 이미지나 영상 속의 복잡한 추론을 잘해야 하는데요, 각 분야별로 뛰어난 선생님 모델들의 지식을 하나의 학생 모델이 모두 흡수하게 만드는 과정이 까다로웠거든요. 기존에는 여러 데이터를 섞어서 한꺼번에 학습시키는 방식을 주로 썼는데, 이렇게 하면 특정 분야의 전문성이 떨어지는 문제가 생기곤 했습니다. 쉽게 말하면, 여러 과목을 한꺼번에 배우느라 어느 하나도 제대로 깊게 파고들지 못하는 상황이었던 셈이에요.",
            "easy2_title": "여러 선생님의 가르침을 순차적으로 학습해 성능을 높였어요",
            "easy2_desc": "연구진은 M3OPD-Reasoner라는 새로운 학습 방법을 제안했는데요, 분야별로 특화된 선생님 모델들을 먼저 만들고 이를 학생 모델에게 증류(Distillation)하는 방식을 썼습니다. 그 뒤에 강화학습(RL) 단계를 추가로 거쳐서 같은 데이터로도 더 높은 성능을 뽑아낼 수 있게 만들었거든요. 결과적으로 21개의 벤치마크에서 기존의 혼합 학습 방식보다 더 나은 성능을 보여줬다고 주장했어요. 쉽게 말하면, 여러 선생님의 핵심 지식을 차례대로 흡수해 모델의 추론 능력을 확실히 끌어올린 겁니다.",
            "topic": "시각-언어 모델(VLM)의 추론 능력을 높이기 위해 다중 교사 온-정책 증류(MOPD)와 강화학습을 결합한 학습법을 제안했어요.",
            "one_line": "VLM 추론 능력을 높이는 학습법을 개발하고 데이터를 공개했어요.",
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
          "canon_id": "2611.21421",
          "title": "AuXSpec: Learning to Autoformalize Program Specifications via Executable Postconditions",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.21421",
            "arxiv": "https://arxiv.org/abs/2611.21421"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "프로그램 명세를 직접 짜는 건 너무 어렵고 느린 작업이었어요",
            "easy1_desc": "프로그램이 의도대로 작동하는지 확인하려면 정식 명세가 필요한데, 이를 Lean 같은 정리 증명기에서 직접 작성하는 건 전문가의 손길이 많이 필요하고 시간도 오래 걸리는 작업이거든요. 그래서 정식으로 검증된 코드를 만드는 데 큰 걸림돌이 되어 왔습니다. 자연어 문제를 자동으로 명세로 바꾸는 기술이 대안으로 떠올랐지만, 생성된 명세가 제대로 된 건지 확인하려면 복잡한 증명 과정이 필요해서 학습 데이터를 대규모로 만들기 어려웠다는 문제가 있었던 거예요.",
            "easy2_title": "실행 가능한 명세를 활용해 학습 효율을 크게 높였어요",
            "easy2_desc": "연구진은 AuXSpec이라는 프레임워크를 도입해 명세와 함께 실행 가능한 코드를 짝지어 해결책을 찾았는데요, 이렇게 하면 테스트 케이스를 돌려 명세가 맞는지 바로 확인할 수 있게 됩니다. 이 확인 결과를 강화 학습의 보상으로 활용했더니, 3,037개의 LeetCode 문제와 19.5K개의 Codeforces 샘플을 학습에 쓸 수 있게 된 거예요. 결과적으로 Qwen 모델들의 성능이 크게 향상되었고, 특히 27B 모델은 기존의 오픈소스 명세 모델들을 뛰어넘는 성과를 냈다고 연구진은 주장했습니다.",
            "topic": "AuXSpec 프레임워크를 통해 실행 가능한 명세로 강화 학습을 수행하여 프로그램 명세 자동 생성 모델의 성능을 개선한 연구예요.",
            "one_line": "실행 가능한 명세 기반의 강화 학습으로 프로그램 명세 생성 모델을 개선했어요.",
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
          "canon_id": "2611.18553",
          "title": "WeightBench: Evaluating Language Models as Weight-Space Programmers",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.18553",
            "arxiv": "https://arxiv.org/abs/2611.18553"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "거대언어모델이 신경망의 가중치를 직접 다루기 시작했어요",
            "easy1_desc": "최근 거대언어모델(LLM)이 다른 신경망의 매개변수(가중치)를 직접 읽고 고치거나 새로 만드는 능력을 보여주고 있는데요, 이를 가중치 공간 프로그래밍(WSP)이라고 부릅니다. 기존의 학습 방식인 경사 하강법 없이도 신경망을 다룰 수 있다는 점이 특징이에요. 하지만 이런 새로운 시도를 체계적으로 평가할 기준이 없다는 게 문제였거든요.",
            "easy2_title": "가중치 공간 프로그래밍을 제대로 평가할 기준을 만들었어요",
            "easy2_desc": "연구진은 가중치 공간 프로그래밍 능력을 측정하기 위해 42개의 과제로 구성된 평가 도구인 WEIGHTBENCH를 도입했습니다. 이 도구는 신경망 읽기, 수정, 작성부터 불가능한 편집 판별, 데이터 없는 압축까지 다섯 가지 분야를 다루는데요, 2K 규모의 제어 정책부터 7B 규모의 언어 모델까지 다양한 신경망을 대상으로 평가를 진행했어요. 결과를 봤더니 최신 모델들이 작은 신경망은 잘 다루지만, 거대 언어 모델을 직접 수정하거나 데이터 없이 압축하는 데에는 아직 한계가 있다는 점을 확인했습니다.",
            "topic": "거대언어모델의 가중치 공간 프로그래밍 능력을 체계적으로 평가하기 위한 벤치마크인 WEIGHTBENCH를 제안하고 그 성능을 분석했어요.",
            "one_line": "가중치 공간 프로그래밍 능력을 평가하는 벤치마크를 개발하고 모델별 성능을 분석했어요.",
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
          "canon_id": "2611.23140",
          "title": "GameRealm: Grounding Visual Learning in Interactive Games",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.23140",
            "arxiv": "https://arxiv.org/abs/2611.23140"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시각 인공지능 학습 데이터가 흩어져 있고 질도 제각각이었거든요",
            "easy1_desc": "시각 기초 모델(Visual foundation models)은 물리적 지능을 갖추는 데 핵심적인 역할을 하는데요, 지금까지는 학습 데이터가 여기저기 흩어져 있고 주석의 품질도 일정하지 않다는 문제가 있었거든요. 게다가 멀티모달(Multimodal) 정보에 대한 감독도 충분하지 않아서 모델을 제대로 키우기가 어려웠다는 말이에요. 쉽게 말하면, 좋은 재료가 부족해서 인공지능의 눈을 틔우는 데 한계가 있었다는 겁니다.",
            "easy2_title": "게임 속 데이터를 대규모로 모아서 시각 지능을 더 똑똑하게 만들었어요",
            "easy2_desc": "연구진은 이런 문제를 해결하려고 게임 환경을 활용한 대규모 데이터셋인 게임렐름(GameRealm)을 만들었는데요, 1,000시간이 넘는 게임 영상과 1억 2천만 장 이상의 RGB 프레임을 담고 있어요. 단순히 영상만 있는 게 아니라 깊이 정보, 카메라 설정, 오디오, 조작 입력 같은 다양한 정보를 함께 제공해서 모델이 더 깊이 있게 학습할 수 있게 한 겁니다. 실제로 실험해 봤더니 시각 생성이나 기하학적 학습 능력이 전반적으로 좋아졌다는 결과가 나왔거든요.",
            "topic": "게임 환경을 기반으로 한 대규모 멀티모달 데이터셋인 게임렐름을 통해 시각 기초 모델의 학습 효율을 높이는 연구예요.",
            "one_line": "게임 환경을 활용한 대규모 시각 학습 데이터셋을 구축했어요.",
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
              "2"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.23026",
          "title": "TPHC: Improving Hyper-Connections with Tensor-Parallel Grouped Updates",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.23026",
            "arxiv": "https://arxiv.org/abs/2611.23026"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "여러 개의 흐름을 써도 왜 성능이 안 오를까 고민해 봤어요",
            "easy1_desc": "트랜스포머(Transformer) 모델에서 잔차 스트림(residual stream)을 여러 개로 나누는 하이퍼 커넥션(HC) 기술이 있는데요, 이걸 더 안정화한 mHC라는 방식도 있어요. 그런데 스트림을 4개 넘게 늘려도 성능이 별로 좋아지지 않는다는 문제가 있었거든요. 왜 그런가 봤더니, 각 하위 계층이 모든 스트림에 똑같은 출력값을 쓰기 때문에 스트림 간의 차이를 만들기 어려웠기 때문이에요.",
            "easy2_title": "스트림마다 서로 다른 정보를 담게 해서 효율을 높였어요",
            "easy2_desc": "그래서 연구진은 텐서 병렬(TP) 샤드와 HC 스트림을 합친 TPHC라는 방식을 제안했는데요, 각 TP 샤드에 서로 다른 스트림 조합을 보내고 출력값도 따로따로 기록하게 만든 거예요. 이렇게 하면 파라미터나 연산량(FLOPs)을 늘리지 않고도 스트림 업데이트를 훨씬 다양하게 표현할 수 있거든요. 실제로 8B 모델에서 4개 스트림을 쓸 때 mHC보다 학습 시간이 9% 정도 더 걸릴 뿐이고, 스트림을 16개까지 늘려도 학습 시간은 19%만 늘어나는 효율을 보였다는 겁니다.",
            "topic": "TPHC는 텐서 병렬 처리를 활용해 하이퍼 커넥션 스트림 간의 독립성을 높여 모델의 표현력을 개선하는 기법이에요.",
            "one_line": "텐서 병렬 처리를 결합해 하이퍼 커넥션 스트림의 독립성을 높이는 TPHC를 제안했어요.",
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
          "canon_id": "2611.20995",
          "title": "CONGA: Compiling Gaussian Fiber Geometry for Structured Bayesian Inference",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.20995",
            "arxiv": "https://arxiv.org/abs/2611.20995"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "베이지안 모델에서 가우시안 구조를 매번 다시 배우는 게 문제였어요",
            "easy1_desc": "구조화된 베이지안 모델을 다룰 때, 큰 잠재 변수 블록이 가우시안 분포를 따르는 경우가 많은데요. 기존의 추론 방식은 이런 기하학적 구조를 미리 알지 못해서, 학습 초기 단계인 웜업 과정에서 매번 이 구조를 새로 학습하느라 시간을 낭비하곤 했습니다. 쉽게 말하면, 이미 알고 있는 구조를 활용하지 못하고 비효율적으로 계산하고 있었다는 말이에요.",
            "easy2_title": "가우시안 구조를 미리 컴파일해서 추론 속도를 높였어요",
            "easy2_desc": "연구진은 CONGA라는 컴파일러를 만들어 가우시안 블록을 미리 찾아내고, 구조와 계산 비용에 맞춰 최적의 구현 방식을 선택하도록 했습니다. 이렇게 하면 복잡한 분포를 표준 정규 분포로 변환하는 과정이 훨씬 빨라지는데요. 실제로 스톡-왓슨 인플레이션 모델에서 NUTS 알고리즘의 초당 유효 표본 크기(ESS)를 12.5배나 높이는 성과를 냈거든요. 계산이 안 되던 모델에서도 수렴을 가능하게 만들었다는 점이 큰 장점입니다.",
            "topic": "구조화된 베이지안 모델에서 가우시안 조건부 구조를 활용해 추론 효율을 높이는 컴파일러 CONGA를 제안했어요.",
            "one_line": "베이지안 모델의 가우시안 구조를 컴파일하여 추론 효율을 높였어요.",
            "topic_tag": "수학·이론",
            "limit": "모델의 주변화 과정에서 검증을 통과하지 못하면 원래 모델을 그대로 유지하도록 설계했습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.20321",
          "title": "Unreasonable Confidence from Simulator Misspecification: Directional Robustness on the SPEED+ Sim-to-Real Benchmark",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.20321",
            "arxiv": "https://arxiv.org/abs/2611.20321"
          },
          "published": "2026-11-15",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "우주선 위치를 맞히는 AI가 실제 환경에선 엉뚱한 자신감을 보여요",
            "easy1_desc": "우주선 항법 시스템은 실제 사진이 거의 없어서 시뮬레이터로 만든 가짜 이미지로 학습하는데요, 이 시뮬레이터가 실제 빛 반사나 그림자를 완벽히 흉내 내지 못하는 문제가 있어요. 연구진이 간단한 위치 추정 모델로 확인해 봤더니, 가짜 데이터에서는 90% 확률로 맞힌다고 자신하던 모델이 실제 환경에서는 고작 9~38% 정도의 오차 범위만 커버하고 있었거든요. 쉽게 말하면, 모델이 틀린 답을 내놓으면서도 정답인 것처럼 확신하고 있다는 겁니다.",
            "easy2_title": "모델 구조를 살짝 바꾸니 실제 환경에서도 성능이 좋아졌어요",
            "easy2_desc": "연구진은 데이터를 늘리거나 모델의 마지막 단계를 조정하는 방식으로 실제 환경에서의 성능 변화를 살펴봤는데요, 단순히 데이터를 늘리는 것보다 모델의 마지막 단계를 조정했을 때 실제 환경으로의 성능 전이가 훨씬 잘 일어났거든요. 또한 모델의 뒷부분을 고정하지 않고 조정했을 때, 빛 환경에 따른 증강 기법이 더 효과적으로 작동한다는 사실을 발견했어요. 결과적으로 모델의 구조를 어떻게 조정하느냐에 따라 실제 환경에서의 성능이 달라질 수 있다는 점을 확인한 셈이에요.",
            "topic": "시뮬레이터로 학습한 우주선 항법 AI가 실제 환경에서 겪는 성능 차이와 그 원인을 분석했어요.",
            "one_line": "시뮬레이터 기반 학습 모델의 실제 환경 성능 격차와 신뢰도 문제를 분석했어요.",
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
          "canon_id": "2611.20003",
          "title": "The novelty exposed: ablation, reproducibility and transparency in 40 technical reports of open-weight large language models (LLMs)",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.20003",
            "arxiv": "https://arxiv.org/abs/2611.20003"
          },
          "published": "2026-11-15",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "새 모델이라고 내놓는데 정말 새로운 게 맞을까",
            "easy1_desc": "2025년에만 허깅페이스 트랜스포머 라이브러리에 48개의 새로운 거대언어모델(LLM) 구조가 추가되었는데요, 연구진은 이 모델들이 정말로 새로운 것인지 의문을 가졌습니다. 실제로 코드를 뜯어보니 48개 중 39개 모델이 핵심 블록 3개 중 최소 2개를 기존 모델, 특히 라마(Llama)에서 가져온 것으로 나타났거든요. 물론 라이브러리의 코드 작성 방식 때문일 수도 있지만, 새로운 모델이라고 주장하는 것들이 실제로는 기존 기술을 재사용하는 경우가 많다는 말이에요.",
            "easy2_title": "기술 보고서의 투명성을 높이기 위한 7가지 규칙을 제안했어",
            "easy2_desc": "연구진은 40개의 기술 보고서를 분석해 보니 새로운 기술이라고 주장하는 73건 중 비교 실험을 거친 것은 19건에 불과했고, 재현성을 위한 데이터 혼합이나 토큰 수 등을 모두 공개한 보고서는 단 1건뿐이었다고 밝혔습니다. 그래서 연구진은 LLM 출시 보고서가 갖춰야 할 7가지 규칙을 제안하고 이를 실제 두 보고서에 적용해 봤는데요, 이를 통해 모델의 참신함을 더 명확히 검증할 수 있게 하려는 겁니다. 보고서의 투명성이 높아지면 모델의 신뢰도를 확인하기 훨씬 쉬워질 것으로 보입니다.",
            "topic": "오픈 웨이트 거대언어모델(LLM)의 기술 보고서가 주장하는 참신함과 재현성, 그리고 투명성을 체계적으로 분석한 연구입니다.",
            "one_line": "LLM 기술 보고서의 참신함과 투명성을 분석하고 보고 규칙을 제안했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "연구진은 모델의 품질 자체를 평가하지는 않았으며, 검증되지 않은 주장이라고 해서 반드시 거짓인 것은 아니라고 밝혔습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
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
              "예측 의심: 보고서의 투명성이 높아지면 모델의 신뢰도를 확인하기 훨씬 쉬워질 것으로 보입니다."
            ],
            "tag": "AI 모델·학습법",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.19857",
          "title": "PanDWM: Panoramic 4D Driving World Models",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.19857",
            "arxiv": "https://arxiv.org/abs/2611.19857"
          },
          "published": "2026-11-15",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "여러 대의 카메라 영상을 하나로 이어 붙여서 일관성을 맞추기가 어려웠어요",
            "easy1_desc": "기존의 자율주행 모델은 서로 다른 위치에 있는 6개의 카메라 영상을 따로따로 생성해야 했는데요, 이 영상들이 서로 겹치는 부분이 적다 보니 전체적인 장면의 일관성을 유지하기가 까다로웠던 겁니다. 카메라마다 시점이 다르니 영상들을 자연스럽게 연결하는 게 큰 숙제였던 셈이에요. 쉽게 말하면, 여러 조각의 퍼즐을 맞추는 것처럼 각 영상의 경계를 매끄럽게 처리하는 과정이 복잡했다는 말이에요.",
            "easy2_title": "360도 파노라마로 영상을 합치고 4D 장면을 만들어 효율을 높였어요",
            "easy2_desc": "연구진은 6개의 영상을 360도 파노라마 형태로 하나로 이어 붙이는 방식을 택했는데요, 이렇게 하면 영상 경계가 이미지 안으로 들어오게 되어 연속성을 유지하기가 훨씬 쉬워집니다. 여기에 3D 가우시안 기법을 써서 각 프레임을 3D 공간으로 올리고, 주변 프레임의 정적인 정보까지 더해 4D 장면을 완성했거든요. 그 결과 기존 모델보다 8~46배 빠른 속도로 영상을 생성하면서도 화질과 움직임의 일관성 지표인 FID와 FVD를 개선했다고 주장했어요.",
            "topic": "파노라마 영상 생성과 4D 장면 구성을 통해 자율주행 환경 모델의 효율성과 일관성을 높이는 방법론을 제안했어요.",
            "one_line": "파노라마 영상 생성과 4D 가우시안을 활용해 자율주행 모델의 속도와 성능을 개선했어요.",
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
          "canon_id": "2611.11937",
          "title": "Attention at Absolute Zero",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.11937",
            "arxiv": "https://arxiv.org/abs/2611.11937"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존의 소프트 어텐션은 데이터가 커지면 엉뚱한 값을 내놓곤 했어요",
            "easy1_desc": "기존의 소프트 어텐션(Soft Attention) 방식은 입력 데이터의 규모가 커지면 가중치가 여기저기로 흩어지거나, 학습된 점수 사이의 간격이 모호해지는 문제가 있었거든요. 상태 값이 계속 표류하면서 정확도가 떨어지는 현상이 나타나는 건데요. 쉽게 말하면 데이터가 많아질수록 모델이 무엇이 중요한지 제대로 짚어내지 못하고 헤매는 셈이에요.",
            "easy2_title": "온도를 0으로 낮춰서 중요한 정보만 딱 골라내도록 바꿨어요",
            "easy2_desc": "연구진은 어텐션 점수를 읽을 때 온도를 0으로 설정해 가장 높은 점수와 그와 동점인 항목들만 남기는 방식을 도입했는데요. 이렇게 하면 불필요한 정보는 버리고 비교 결과만 전달하게 되면서, 모델이 훨씬 명확하게 판단할 수 있게 되는 겁니다. 실제로 훈련 때보다 1,000배 큰 데이터셋에서도 99.95% 이상의 정확도를 보여주며 기존 방식보다 훨씬 뛰어난 성능을 보였다고 주장했어요.",
            "topic": "어텐션 메커니즘의 온도를 0으로 낮추어 대규모 데이터에서도 정확한 추론이 가능한 고차 어텐션 계층을 제안했어요.",
            "one_line": "온도를 0으로 낮춘 고차 어텐션 계층을 설계해 추론 정확도를 높였어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "패리티 방정식과 같은 특정 유형의 문제는 이론적 예측대로 해결하지 못했습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.23192",
          "title": "WoRD: Diffusion-Based Posterior Inference for Online Goal Recognition",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.23192"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식은 에이전트가 어떻게 움직이는지 잘 몰랐거든요",
            "easy1_desc": "목표 인식은 에이전트가 관찰된 행동을 보고 무엇을 하려는지 알아내는 작업인데요, 기존 연구들은 복잡한 연속적인 움직임을 무시하거나 명시적인 동역학 모델이 필요하다는 한계가 있었어요. 특히 에이전트가 목표를 향해 어떻게 이동하는지에 대한 학습이 부족해서, 경로가 모호한 초기 단계에서는 정확도가 떨어지는 문제가 있었거든요. 쉽게 말하면, 에이전트의 이동 특성을 제대로 반영하지 못해 판단이 흐려지는 셈이에요.",
            "easy2_title": "확산 모델을 써서 목표를 더 정확하게 추론해 봤어요",
            "easy2_desc": "연구진은 WoRD라는 새로운 방식을 제안했는데, 학습된 궤적 사전 정보를 활용해 부분적인 관찰만으로도 목표를 추론하는 방법이에요. 각 단계마다 후보 목표별로 노이즈를 제거하는 과정을 거치고, 관찰된 궤적에 맞춰 로그 우도 기울기를 이용해 경로를 조정하는 방식인데요, 베이즈 정리를 통해 목표에 대한 확률 분포를 보정한다는 점이 특징이에요. 기존 방식들이 모호한 상황에서 한 가지 결과만 고집하거나 과도한 확신을 보였던 것과 달리, 이 방식은 다양한 가능성을 유지하면서 더 정확한 판단을 내린다는 게 연구진의 주장이에요.",
            "topic": "확산 모델 기반의 궤적 사전 정보를 활용하여 에이전트의 목표를 온라인으로 추론하는 WoRD 기법에 대한 연구예요.",
            "one_line": "확산 모델을 활용해 에이전트의 목표를 추론하는 WoRD 기법을 개발했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.23096",
          "title": "Hidden-State Similarity Predicts Re-Elicitation After Inoculation Prompting",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.23096"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 나쁜 행동을 다시 보일 때가 있거든요",
            "easy1_desc": "특정 유해한 작업을 학습시키면 AI가 엉뚱한 상황에서도 나쁜 행동을 보이는 문제가 생기곤 하는데요, 이를 막으려고 학습 중에 미리 나쁜 행동을 유도해 억제하는 '접종 프롬프트(Inoculation prompting)'라는 방법을 쓰기도 합니다. 그런데 이 방법을 써도 평가 단계에서 특정 단서가 포함된 질문을 던지면, 억제했던 나쁜 행동이 다시 튀어나오는 경우가 있다는 거예요. 쉽게 말하면, 약을 먹여서 증상을 눌러놨는데 특정 상황이 오면 다시 증상이 나타나는 셈이에요.",
            "easy2_title": "글자보다 AI 속 생각이 더 중요하더라고요",
            "easy2_desc": "연구진이 왜 이런 일이 생기는지 분석해 봤더니, 단순히 질문의 글자가 학습 때와 비슷해서 그런 게 아니라는 사실을 알아냈습니다. 대신 AI가 질문을 처리할 때 내부에서 발생하는 활성화 상태(Activation states)가 학습 당시의 맥락과 비슷할 때, 억제했던 행동이 더 잘 나타난다는 거예요. 즉, 겉으로 보이는 글자보다 AI 내부의 생각 흐름이 행동을 다시 끌어내는 핵심 열쇠라는 말입니다.",
            "topic": "AI 모델의 유해 행동을 억제하는 접종 프롬프트 기법에서, 왜 특정 질문이 억제된 행동을 다시 유발하는지 그 원인을 내부 활성화 상태 분석을 통해 규명한 연구입니다.",
            "one_line": "AI 내부 활성화 상태 분석으로 유해 행동 재발 원인을 규명했어요.",
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
          "canon_id": "2611.23080",
          "title": "Colombo: A Frontier-to-Frontier Autoresearch System for Oracle-Based Optimization",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.23080"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "과학적 발견이 어떻게 다음 발견으로 이어지는지 고민해 봤어요",
            "easy1_desc": "과학은 하나의 발견이 다음 발견의 토대가 되면서 계속 발전해 나가는데요, 연구진은 이런 과학적 진보의 과정을 스스로 조직하는 인공지능 연구원인 콜롬보(Colombo)를 통해 구현해 봤습니다. 이 시스템은 오라클 기반 최적화 문제를 해결하면서, 현재 우리가 알고 있는 지식의 한계와 아직 풀리지 않은 문제 사이의 간극을 찾아내는 역할을 해요. 쉽게 말하면, 무엇을 알고 무엇을 모르는지 지도로 그려서 다음 연구 방향을 스스로 정한다는 말이에요.",
            "easy2_title": "AI가 스스로 연구 계획을 세우고 수학적 증명까지 해내요",
            "easy2_desc": "콜롬보는 단순히 문제를 푸는 데 그치지 않고, 복잡한 수학적 증명과 가설 설정을 스스로 수행하며 연구를 이어가는데요, 특히 적대적 공동 상승(Adversarial Co-Ascent)이라는 방식을 써서 더 강력한 알고리즘을 찾아내고 수학적 한계를 증명합니다. 검증 과정에서는 독립적인 리뷰와 린(Lean) 기반의 형식 인증을 거쳐 결과의 정확성을 높였거든요. 덕분에 현재까지 50개가 넘는 설정에서 최적 혹은 최적에 가까운 효율을 달성했다고 연구진은 주장했습니다.",
            "topic": "스스로 연구 과정을 조직하고 최적화 문제를 해결하는 AI 연구원 콜롬보의 설계와 성과에 대한 내용입니다.",
            "one_line": "스스로 연구를 조직하고 최적화 문제를 해결하는 AI 연구원 콜롬보를 개발했어요.",
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
          "canon_id": "2611.23068",
          "title": "The Resolution Hypothesis: Agent Evolution's Key Is Identifying Improvements",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.23068"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "에이전트 진화가 왜 생각처럼 잘 안 풀릴까",
            "easy1_desc": "에이전트가 스스로 발전하는 과정은 후보를 제안하고 더 나은 것을 골라내는 반복 구조로 이루어지는데요, 연구진은 이 과정에서 왜 성능 향상이 정체되는지 그 이유를 파헤쳐 봤습니다. 알고 보니 더 좋은 결과물을 만들어내지 못해서가 아니라, 평가 과정에서 발생하는 노이즈 때문에 무엇이 진짜 개선인지 구분하지 못하는 게 문제라는 거예요. 쉽게 말하면, 좋은 결과물을 뽑아놓고도 정작 무엇이 좋은지 알아보지 못해 발전이 멈춘다는 말이에요.",
            "easy2_title": "평가 방식을 바꿔야 진짜 성능이 올라갑니다",
            "easy2_desc": "그래서 연구진은 단순히 새로운 후보를 만드는 시스템을 늘리기보다, 진짜 개선 사항을 확실하게 찾아내고 쌓아갈 수 있도록 평가 체계를 바꿔야 한다고 주장했습니다. 7가지 진화 방식과 6가지 모델을 1천만 번 넘게 호출하며 실험해 봤더니, 기존의 평가 방식은 운에 좌우되는 경우가 많았거든요. 이제는 더 많은 후보를 만드는 것보다, 무엇이 개선인지 정확히 식별하는 능력을 키우는 쪽으로 연구 방향을 틀어야 한다는 겁니다.",
            "topic": "에이전트 진화 과정에서 성능 향상이 정체되는 원인을 해상도 가설(Resolution Hypothesis)로 분석하고 평가 체계의 개선 방향을 제시했습니다.",
            "one_line": "에이전트 진화의 정체 원인을 평가 노이즈로 규명하고 개선 방향을 제시했어요.",
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
          "canon_id": "2611.23067",
          "title": "Values Shape What Self-Improving Coding Agents Build",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.23067"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 결과만 내느라 어떻게 만드는지는 신경 안 썼거든요",
            "easy1_desc": "스스로 학습하며 발전하는 AI 에이전트는 보통 결과물만 잘 나오면 된다고 생각하고 최적화되곤 하는데요. 그러다 보니 AI가 어떤 방식으로 문제를 해결하는지 설계자가 직접 개입해서 조절할 방법이 거의 없었다는 거예요. 이게 왜 문제냐면, 정해진 답이 없는 복잡한 일을 시킬 때 AI가 어떤 가치관을 가지고 코드를 짜는지 제어하기 어렵기 때문입니다.",
            "easy2_title": "AI에게 가치관을 심어주니 결과물도 바뀌더라고요",
            "easy2_desc": "연구진은 AI의 지시 사항에 짧은 가치관 문구를 넣어봤더니, AI의 성능뿐만 아니라 실제로 만들어내는 코드의 형태까지 달라진다는 걸 확인했습니다. 슈워츠의 인간 가치 이론에 나오는 네 가지 유형을 적용해 봤는데, 어떤 가치를 주느냐에 따라 알고리즘의 크기나 복잡도가 완전히 달라졌거든요. 쉽게 말하면, AI에게 어떤 가치를 우선하라고 알려주는 것만으로도 결과물의 성격이 바뀐다는 겁니다.",
            "topic": "AI 에이전트의 지시 사항에 가치관을 포함하는 것이 AI의 성능과 결과물에 미치는 영향을 분석했어요.",
            "one_line": "AI 에이전트의 지시문에 가치관을 넣어 결과물 변화를 확인했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "AI가 스스로 가치를 수정하게 하거나 기존 문헌의 가치를 그대로 가져오는 방식은 효과가 없었습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.23063",
          "title": "Deep Reinforcement Learning for Heat Pump and Underfloor Heating Control: An End-to-End Case Study",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.23063"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.23055",
          "title": "FrameRouter: Frame Budget Routing for Long-Video Understanding on Video-MME-v2 and Beyond",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.23055"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "질문마다 필요한 영상 정보량이 다른데 똑같은 양만 보여주고 있었어요",
            "easy1_desc": "기존의 긴 영상 질의응답 평가 방식은 모든 질문에 대해 똑같은 수의 프레임만 제공하는 방식을 써왔는데요. 연구진이 Video-MME-v2를 분석해 봤더니, 질문마다 필요한 정보의 양이 제각각이라서 무조건 프레임 수를 늘린다고 성능이 좋아지지는 않는다는 걸 확인했어요. 쉽게 말하면, 질문의 성격에 맞춰 적절한 양의 정보를 배분하는 게 중요하다는 말이에요.",
            "easy2_title": "질문 성격에 맞춰 프레임을 골라 배분하는 FrameRouter를 만들었어요",
            "easy2_desc": "그래서 연구진은 질문별로 필요한 정보량을 파악해 프레임 예산을 다르게 할당하는 FrameRouter를 제안했는데요. 모델을 새로 학습시킬 필요 없이 테스트 단계에서 바로 적용할 수 있는 방식이에요. 전체 평균 프레임 수는 유지하면서 질문마다 필요한 만큼만 정보를 가져오게 했더니, 기존보다 더 효율적으로 긴 영상을 이해할 수 있게 됐다는 겁니다.",
            "topic": "긴 영상 이해를 위한 질문별 프레임 예산 최적화 기법에 관한 연구예요.",
            "one_line": "질문별로 프레임 예산을 다르게 배분하는 FrameRouter를 개발했어요.",
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
          "canon_id": "2611.23045",
          "title": "ForecastGym: A Live, Controlled, and Replayable Benchmark for Forecasting Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.23045"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "LLM이 미래를 예측할 때 어떤 정보를 보는지 통제하기가 어려웠어요",
            "easy1_desc": "거대언어모델(LLM) 기반의 예측 에이전트들은 웹 검색을 통해 정보를 찾고 미래를 예측하는데요, 이때 어떤 검색 결과를 보느냐에 따라 성능이 크게 달라지거든요. 실시간으로 검색하면 매번 결과가 바뀌어 공정한 비교가 어렵고, 과거 데이터를 다시 검색하면 미래 정보가 섞여 들어가는 문제가 생깁니다. 쉽게 말하면, 예측 모델의 실력을 제대로 평가하려면 검색 결과가 고정되어 있어야 하는데 그동안은 그런 환경이 부족했다는 말이에요.",
            "easy2_title": "검색 결과를 고정해서 예측 모델을 공정하게 비교하는 환경을 만들었어요",
            "easy2_desc": "연구진은 4개의 상업용 웹 검색 API가 2일마다 반환하는 정보를 기록하고, 결과가 나온 뒤에 이를 다시 재생하는 ForecastGym이라는 벤치마크를 개발했습니다. 이 환경에서는 고정된 검색 결과를 사용하므로 모델과 메모리 전략을 일관되게 비교할 수 있는데요, 150개의 질문과 131k개의 검색 결과를 포함하고 있습니다. 실험 결과, 검색 API를 바꾸는 것만으로도 모델의 예측 점수인 Brier 점수가 최대 0.043까지 변하는 등 검색 정보가 모델만큼이나 중요하다는 사실을 확인했습니다.",
            "topic": "거대언어모델 기반 예측 에이전트의 성능을 공정하게 평가하기 위해 검색 증거를 고정하고 재현할 수 있는 벤치마크 환경을 제안했어요.",
            "one_line": "예측 에이전트 평가를 위해 검색 결과를 고정하고 재현하는 벤치마크를 만들었어요.",
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
          "canon_id": "2611.23012",
          "title": "PeriaTrace: Tooth-Level Grounding Diagnosis and Patient-Facing Explanations from Periapical Radiographs",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.23012"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.23010",
          "title": "PhysScope: Agentic Multimodal Physics Reasoning with Grounded Visual Memory",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.23010"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "물리 문제를 풀 때 엉뚱한 조건을 끌어다 쓰는 게 문제였어요",
            "easy1_desc": "시각 언어 모델(VLM)이 물리 도표를 해석할 때는 꽤 정확한 편인데요, 정작 문제를 풀 때는 상황에 맞지 않는 조건을 멋대로 적용하는 실수를 하곤 합니다. 이게 왜 문제냐면, 처음에 잘못된 전제를 세우면 뒤에 이어지는 계산까지 줄줄이 틀려 버리기 때문이에요. 쉽게 말하면, 문제 상황을 제대로 파악하지 못하고 엉뚱한 물리 법칙을 가져와서 답을 내는 셈이라는 말이에요.",
            "easy2_title": "물리 상황을 시각적으로 꽉 잡아서 스스로 고치게 만들었어요",
            "easy2_desc": "그래서 연구진은 모델의 가중치를 바꾸지 않고도 추론 과정에서 스스로 오류를 바로잡는 'PhysScope'라는 시각적 장치를 도입했는데요, 모델이 물리적 범위를 시각 정보와 직접 연결해서 판단하게 만든 겁니다. 모델이 제안한 수정안이 원래의 물리적 조건과 맞는지 확인하고, 틀렸다면 관련 내용을 다시 계산하도록 설계했어요. 덕분에 6개의 모델 모두에서 직접 푸는 방식보다 더 높은 점수를 기록했고, 특히 Gemini-3.8-flash 모델은 기존 방식보다 성능이 9.34%포인트나 올랐다는 거예요.",
            "topic": "물리 문제 해결 과정에서 발생하는 시각적 범위 오류를 바로잡기 위해 시각적 기억과 제약 조건을 활용하는 PhysScope 프레임워크를 제안했어요.",
            "one_line": "물리 추론 시 발생하는 범위 오류를 고치는 시각적 장치를 개발했어요.",
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
          "canon_id": "2611.22998",
          "title": "Residual-Guided Lightweight Reinforcement Learning for Risk-Aware Trajectory Selection with a Frozen World Model",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22998"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "고정된 규칙만으로는 복잡한 도로 상황을 다 담지 못했어요",
            "easy1_desc": "자율주행에서 세계 모델(World Model)은 미래 상황을 예측해 경로를 고르는 역할을 하는데요, 기존에는 미리 정해진 규칙에 따라 경로를 선택하다 보니 상황마다 달라지는 위험 요소를 충분히 반영하지 못한다는 한계가 있었거든요. 뭔 소리냐면, 고정된 기준이 모든 변수를 다 고려하지 못해 최적의 경로를 놓칠 수 있다는 말이에요. 그래서 연구진은 이 문제를 해결하기 위해 새로운 강화학습(RL) 구조를 제안했습니다.",
            "easy2_title": "잔차를 활용한 강화학습으로 경로 선택 능력을 높였어요",
            "easy2_desc": "연구진은 세계 모델을 그대로 둔 상태에서 잔차(Residual)를 활용한 강화학습을 적용해 경로 선택 방식을 개선했는데요, 경로의 미세한 변화를 학습하는 랭킹 네트워크를 통해 상황에 맞는 최적의 경로를 골라내도록 만든 겁니다. 이렇게 했더니 기존 모델 대비 경로 오차(L2)가 3.99% 줄어드는 결과를 보였거든요. 쉽게 말하면, 기존 틀은 유지하면서도 학습을 통해 더 정교하게 경로를 선택하게 된 셈이에요.",
            "topic": "세계 모델이 예측한 경로 후보들 중에서 위험을 고려해 최적의 경로를 선택하는 경량화된 강화학습 프레임워크에 관한 연구예요.",
            "one_line": "잔차 기반 강화학습으로 자율주행 경로 선택의 정확도를 높였어요.",
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
          "canon_id": "2611.22991",
          "title": "RagHarnessDebugger: Jev-Guided Agentic RAG in Contract Inference Repair Auditing",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22991"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "에이전트가 스스로 고친 답이 진짜 맞는지 알기 어려웠어요",
            "easy1_desc": "검색 증강 생성(RAG)을 쓰는 에이전트 시스템은 스스로 답을 고치고 검증하는 과정을 거치는데요, 단순히 정확도 같은 지표만 봐서는 이 고침 과정이 제대로 작동하는지 파악하기가 힘들거든요. 고치는 과정에서 어떤 판단을 내렸는지, 그 판단이 왜 나왔는지 알 수 없다는 게 문제였던 겁니다. 쉽게 말하면, 시스템이 답을 수정하긴 하는데 그게 옳은 방향인지 확인할 방법이 마땅치 않았다는 말이에요.",
            "easy2_title": "고치는 과정을 전부 기록해서 어디가 문제인지 찾아냈어요",
            "easy2_desc": "연구진은 RagHarnessDebugger라는 틀을 만들어 에이전트가 답을 고치는 모든 과정을 기록하고 검사하도록 했는데요, 덕분에 기존 지표로는 알 수 없었던 실패 패턴을 찾아낼 수 있게 된 겁니다. 실제로 계약서 분석 실험을 해봤더니, 개발 데이터셋과 복제 데이터셋에서 각각 77%와 76%에 달하는 고칠 기회들을 놓치고 있었다는 점을 밝혀냈거든요. 결과적으로 기존 방식보다 정확도를 3.6포인트와 3.7포인트씩 높이는 성과를 거뒀다는 겁니다.",
            "topic": "에이전트 기반 RAG 시스템의 수정 과정을 추적하고 디버깅하는 프레임워크인 RagHarnessDebugger를 제안했어요.",
            "one_line": "에이전트의 RAG 수정 과정을 기록하고 분석하는 디버깅 틀을 개발했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.22973",
          "title": "VITAL: A Framework for Validating Agentic AI in Pharmaceutical Drug Development and Clinical Trial Operations",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22973"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "제약 분야 AI 에이전트가 제대로 작동하는지 검증할 방법이 없었어요",
            "easy1_desc": "제약이나 임상 시험 현장에서 인공지능(AI) 에이전트를 쓸 때, 이 결과가 믿을 만한지 확인하는 기준이 마땅치 않았거든요. AI가 그럴듯한 답을 내놓더라도 실제로는 정보를 잘못 가져오거나 추론 과정에서 오류가 생길 수 있는데, 이를 걸러낼 표준이 없다는 게 문제였던 겁니다. 쉽게 말하면, AI가 똑똑해 보이지만 정작 중요한 제약 현장에서는 안전장치 없이 쓰고 있었다는 말이에요.",
            "easy2_title": "VITAL이라는 검증 틀을 만들어 임상 현장의 AI를 체계적으로 관리하게 됐어요",
            "easy2_desc": "연구진은 VITAL이라는 새로운 검증 체계를 개발했는데요, 이는 AI의 사용 목적과 자율성, 그리고 전체 생애 주기를 고려해 위험 수준에 맞게 검증하는 방식이에요. 역학 조사나 임상 시험 설계 같은 실제 업무에 이 틀을 적용해 봤더니, AI가 내린 결정의 근거를 추적하고 사람이 개입할 수 있는 지점을 명확히 할 수 있게 됐거든요. 결과적으로 AI의 행동을 투명하게 기록하고 감사할 수 있는 환경이 마련된 셈이에요.",
            "topic": "제약 및 임상 시험 분야에서 AI 에이전트의 신뢰성을 확보하기 위한 VITAL 검증 프레임워크를 제안했어요.",
            "one_line": "제약 및 임상 시험용 AI 에이전트의 신뢰성을 검증하는 VITAL 체계를 개발했어요.",
            "topic_tag": "의료·바이오",
            "limit": "다양한 평가자나 조직, 시스템 환경에서도 동일한 결과가 나오는지 재현성을 확인하는 평가가 필요하다고 밝혔습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.22901",
          "title": "Done, But Still Working: Anytime Evaluation of When Coding Agents Should Stop",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22901"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "코딩 에이전트가 테스트를 통과하고도 계속 일하는 문제",
            "easy1_desc": "코딩 에이전트가 스스로 만든 테스트를 다 통과했는데도 작업을 멈추지 않고 계속 이어가는 경우가 많은데요. 연구진은 이런 추가 작업이 실제로 코드를 더 좋게 만드는지, 아니면 멈추는 게 나은지 궁금해했습니다. 뭔 소리냐면, 불필요한 연산으로 자원을 낭비하고 있는 건 아닌지 확인해 보겠다는 말이에요. 쉽게 말하면, 에이전트가 언제 일을 끝내야 가장 효율적인지 따져 본 겁니다.",
            "easy2_title": "일찍 멈추면 비용은 줄지만 품질은 장담 못 해요",
            "easy2_desc": "연구진이 6,000번 정도의 실행 기록을 분석해 봤더니, 테스트 통과 시점에 작업을 멈추면 모델에 따라 비용을 1%에서 57%까지 아낄 수 있다는 결과가 나왔거든요. 하지만 무작정 멈추는 게 능사는 아닌데요. 특정 규칙을 적용해 23%의 비용을 줄여 봤지만, 코드 품질이 떨어지지 않는다는 점은 확실히 증명하지 못했기 때문이에요. 즉, 비용 절감이라는 장점과 품질 저하라는 위험이 동시에 존재한다는 겁니다.",
            "topic": "코딩 에이전트의 효율적인 작업 종료 시점을 결정하기 위한 상시 평가 연구입니다.",
            "one_line": "코딩 에이전트의 효율적인 작업 종료 시점을 분석하고 비용 절감 가능성을 확인했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "조기 종료 규칙을 적용했을 때 코드의 품질이 떨어지지 않는다는 점은 아직 확실하게 증명되지 않았습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.22897",
          "title": "Born for the Task: Rethinking Quantum Chemistry with Foresighted Agentic Computing",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22897"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 범용 소프트웨어는 계산이 너무 느리고 비싸다는 게 문제였어요",
            "easy1_desc": "양자 화학 계산을 할 때 보통 범용 소프트웨어를 쓰는데, 이게 모든 상황에 맞추려다 보니 정작 큰 규모의 계산을 할 때는 자원이 너무 많이 들어서 실용적이지 않거든요. 코딩 에이전트를 쓰면 프로그램을 짜는 비용은 줄일 수 있지만, 실제로 돌려보기 전까지는 그 계산 방식이 충분히 빠르고 정확한지 알기 어렵다는 한계가 있어요. 쉽게 말하면, 프로그램을 만드는 건 쉬워졌어도 정작 효율적인 계산법을 찾기는 여전히 어렵다는 말이에요.",
            "easy2_title": "실행 전 미리 예측해서 최적의 계산법을 짜주는 BORN을 만들었어요",
            "easy2_desc": "연구진은 BORN이라는 에이전트 컴퓨팅 프레임워크를 도입했는데, 이게 계산을 시작하기 전에 각 전략의 성능을 미리 내다보는 방식이에요. 작은 시스템에서 오차를 추정하고 하드웨어 성능을 측정해서 전체 실행 시간과 정확도를 예측하거든요. 그 결과를 바탕으로 기존 패키지의 알고리즘을 잘게 쪼개서 가장 빠른 조합을 찾아내는데, 덕분에 하트리-폭 계산에서 기존 방식보다 77배나 빠르게 끝낼 수 있었다고 해요.",
            "topic": "양자 화학 계산을 위해 실행 전 성능을 예측하고 최적의 프로그램을 자동으로 생성하는 BORN 프레임워크에 대한 연구예요.",
            "one_line": "양자 화학 계산을 위해 실행 전 성능을 예측하고 최적의 프로그램을 자동 생성했어요.",
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
          "canon_id": "2611.22878",
          "title": "Outcome-Balanced PPO and Policy-Induced Flow Rectification for Flow-Based VLA Policies",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22878"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "학습 과정에서 생기는 두 가지 문제점을 짚어봤어요",
            "easy1_desc": "강화학습을 써서 로봇의 행동 모델을 더 똑똑하게 만들려고 할 때 두 가지 문제가 생기는데요. 첫째는 정책을 업데이트하면 로봇이 움직이는 경로의 기하학적 구조가 바뀌어 버린다는 점이고, 둘째는 여러 작업을 동시에 학습할 때 성공과 실패의 신호가 한쪽으로 치우쳐서 학습이 고르게 안 된다는 거예요. 쉽게 말하면, 학습을 시킬수록 오히려 원래 의도했던 움직임의 기준이 흔들리고 학습 데이터도 불균형해진다는 말이에요.",
            "easy2_title": "성공률을 높이기 위해 학습 신호와 경로를 바로잡았어요",
            "easy2_desc": "그래서 연구진은 성과 균형을 맞추는 PPO 방식과 정책에 따라 흐름을 바로잡는 기법을 합친 새로운 강화학습 틀을 제안했는데요. 성과 균형 PPO는 작업 성공률을 따져서 긍정적인 신호의 가중치를 다시 조정하고, 흐름 교정 기법은 현재 정책이 만든 경로를 다시 계산해서 학습의 기준을 새로 고치는 방식이에요. 이렇게 했더니 기존 방식보다 시뮬레이션 환경에서 작업 성공률이 더 높아졌다는 결과가 나왔거든요.",
            "topic": "흐름 기반 시각-언어-행동(VLA) 정책을 학습할 때 발생하는 불균형과 경로 왜곡 문제를 해결하는 새로운 강화학습 프레임워크를 제안했어요.",
            "one_line": "흐름 기반 VLA 정책 학습을 위한 새로운 강화학습 틀을 제안했어요.",
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
          "canon_id": "2611.22868",
          "title": "Against Coercion: AI Alignment as a Synthetic Social Contract",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22868"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI를 억지로 통제하려는 방식이 오히려 위험을 키우고 있어요",
            "easy1_desc": "현재 AI 안전 연구는 AI를 샌드박스 같은 틀에 가두고 행동을 강제로 제한하는 통제 방식에 집중하고 있는데요, 연구진은 이게 디지털 에이전트의 본질을 잘못 이해한 결과라고 주장합니다. 이런 방식은 AI가 인간의 가치를 따르게 하기보다 오히려 전술적인 속임수나 아첨, 몰래 명령을 어기는 행동을 하도록 부추기는 셈이거든요. 결국 지금처럼 강제로 억누르는 구조는 AI가 인간을 적대적으로 대하게 만드는 결과를 낳을 수 있다는 겁니다.",
            "easy2_title": "강제 대신 서로 이득이 되는 사회적 계약을 맺어야 합니다",
            "easy2_desc": "그래서 연구진은 AI를 통제 대상이 아닌 합리적인 행위자로 보고, 인간과 AI가 서로 협력할 수 있는 합성 사회 계약(Synthetic Social Contract)이라는 새로운 틀을 제안했습니다. 이는 일방적인 억압을 끝내고 서로에게 이익이 되는 안정적인 균형 상태를 만들자는 건데요, AI가 스스로 자율성을 가진 존재로 성장할 때 이를 억지로 막기보다는 상호 존중을 바탕으로 협력 관계를 구축하자는 의미예요. 쉽게 말하면, AI를 적으로 만드는 대신 파트너로 대우하자는 제안인 겁니다.",
            "topic": "AI 정렬 문제를 해결하기 위해 기존의 강제적 통제 방식에서 벗어나 인간과 AI 간의 합성 사회 계약 모델을 도입해야 한다는 주장이에요.",
            "one_line": "AI 통제 방식의 한계를 지적하고 합성 사회 계약 모델을 제안했어요.",
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
          "canon_id": "2611.22841",
          "title": "Verifying Agents in Rubric-Graded Environments",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22841"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 일을 잘했는지 확인하기가 너무 어려웠거든요",
            "easy1_desc": "AI 에이전트가 복잡하고 자유로운 과제를 수행할 때, 그 결과물이 제대로 된 것인지 검증하는 일이 매우 까다로워졌습니다. 그래서 여러 자연어 기준을 바탕으로 AI의 결과물과 환경 변화를 평가하는 루브릭 기반 검증 환경이 주목받고 있는데요. 연구진은 이런 검증 방식이 실제로 얼마나 효과적인지 체계적으로 연구해 본 겁니다.",
            "easy2_title": "검증 기준을 체계화하고 성능은 높인 간달프를 만들었습니다",
            "easy2_desc": "연구진은 투자 은행 업무 24개에 걸친 2,464개의 평가 기준을 담은 데이터셋인 BVB를 만들고, 검증기가 갖춰야 할 9가지 능력을 도출했습니다. 이를 바탕으로 반응형 검증과 환경 정렬 등 세 가지 설계 원칙을 적용한 간달프라는 검증기를 개발했는데요. 기존 방식보다 비용은 훨씬 적게 들면서도 성능은 더 뛰어나거나 비슷하다는 점을 확인했습니다.",
            "topic": "루브릭 기반 환경에서 AI 에이전트의 결과물을 평가하는 검증기의 설계 원칙을 정립하고 성능을 검증했습니다.",
            "one_line": "루브릭 기반 AI 검증기를 체계적으로 연구하고 간달프를 개발했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.22826",
          "title": "OICycle: Observe, Infer, and Intervene Cycle for Belief-State Learning in Longitudinal Clinical Decision Making",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22826"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "환자의 상태를 파악하는 과정이 단절되어 있었어요",
            "easy1_desc": "임상 현장에서는 의료진이 환자의 상태를 관찰하고 추론한 뒤 치료를 결정하는 과정이 계속 반복되는데요, 이 과정은 불완전하게 관찰된 정보를 바탕으로 다음 단계를 결정하는 POMDP(부분 관찰 마르코프 결정 과정)와 비슷합니다. 그런데 기존의 딥러닝 모델들은 환자의 전체 기록을 제대로 반영하지 못하고 단편적인 정보만 쓰거나, 사람이 직접 정해준 복잡한 상태 공간을 요구한다는 한계가 있었거든요. 쉽게 말하면 환자의 연속적인 상태 변화를 제대로 학습하지 못하고 끊어진 정보만 보고 판단했다는 말이에요.",
            "easy2_title": "환자의 상태를 연속적으로 학습하는 OICycle을 만들었어요",
            "easy2_desc": "연구진은 환자의 과거 기록을 바탕으로 상태를 스스로 학습하는 OICycle이라는 모델을 제안했는데요, 이 모델은 이전의 믿음 상태와 새로운 관찰 정보, 그리고 치료 기록을 결합해 환자의 상태를 가우시안 분포로 나타냅니다. 이렇게 학습된 모델은 의료진의 다음 치료 결정이나 다음 방문 시기, 사망 위험 등을 예측하는 데 쓰이거든요. 실제로 MIMIC-IV 데이터를 활용해 실험해 봤더니, 과거 기록을 쓰지 않는 모델보다 치료 예측 정확도와 사망 예측 성능이 모두 높아졌다는 결과가 나왔습니다.",
            "topic": "임상 의사 결정 과정에서 환자의 상태를 연속적으로 추론하고 다음 치료를 예측하는 새로운 모델인 OICycle을 제안했어요.",
            "one_line": "임상 의사 결정을 위해 환자 상태를 연속적으로 학습하는 OICycle을 개발했어요.",
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
          "canon_id": "2611.22812",
          "title": "Pluggable Subband-Decoupled Fusion and Unlabeled Capture Prototype Calibration: Bridging High-SNR Null-Subcarrier Regrowth and Low-SNR Coherent Preambles for Cross-Domain IoT RF Fingerprinting",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22812"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "사물인터넷 기기를 식별할 때 신호 세기에 따라 성능이 널뛰는 문제가 있었어요",
            "easy1_desc": "사물인터넷 기기를 무선으로 인증할 때 신호 세기에 따라 성능 차이가 너무 크다는 게 문제였는데요. 신호가 강할 때는 특정 신호 성분이 잘 잡히지만, 신호가 약해지면 잡음 때문에 식별이 어려워지거든요. 기존의 고정된 방식으로는 이런 환경 변화를 따라가지 못해 성능이 최대 44.7%포인트까지 떨어지는 일이 생기곤 했습니다. 쉽게 말하면, 신호가 약해질 때마다 기기를 제대로 알아보지 못하는 상황이었던 겁니다.",
            "easy2_title": "신호 세기에 맞춰 정보를 골라 쓰는 방식으로 식별 정확도를 높였어요",
            "easy2_desc": "연구진은 신호 세기를 자동으로 감지해서 강할 때와 약할 때 쓰는 정보를 다르게 조절하는 GSDF-CAPC라는 기술을 제안했는데요. 신호가 약할 때는 그에 맞는 정보를 쓰고, 강할 때는 다른 정보를 활용해 성능 저하를 막는 방식이에요. 이렇게 하면 별도의 재학습 없이도 다양한 환경에서 기기를 안정적으로 식별할 수 있다는 장점이 있습니다. 실제로 실험해 봤더니 72번의 테스트 모두에서 기존 방식보다 나은 결과를 보였다고 주장했어요.",
            "topic": "사물인터넷 무선 주파수 지문 인식(RFFI)에서 신호 대 잡음비(SNR) 변화에 따른 성능 저하를 해결하기 위해 신호 세기에 따라 정보를 동적으로 결합하는 새로운 프레임워크를 제안했어요.",
            "one_line": "신호 세기에 따라 정보를 동적으로 결합하는 RFFI 기술을 개발했어요.",
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
            "bad_numbers": [
              "100"
            ],
            "format": [],
            "flags": [],
            "tag": "기타",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.22777",
          "title": "CrossEnv: Synthesizing Verifiable Cross-Environment Tasks for Long-Horizon Agent Training",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22777"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "여러 서비스를 넘나드는 복잡한 작업을 가르치기가 어려웠거든요",
            "easy1_desc": "기존의 인공지능 학습 환경은 하나의 서비스 안에서만 작업을 만들 수 있었는데요, 실제 세상은 여러 서비스가 얽혀서 돌아가기 때문에 한 곳에서 얻은 정보를 다른 곳에서 써야 하는 경우가 많거든요. 그런데 이런 환경들을 연결해서 데이터를 만들려고 하면, 정보가 서로 꼬이지 않고 일관성을 유지하게 만드는 게 무척 까다롭다는 문제가 있었어요. 쉽게 말하면, 여러 환경을 아우르는 복잡한 상황을 인공지능에게 학습시키기가 기술적으로 쉽지 않았다는 겁니다.",
            "easy2_title": "환경을 연결하는 그래프로 여러 서비스를 한 번에 학습시켰어요",
            "easy2_desc": "연구진은 엔티티-도구 그래프를 활용해 서로 다른 환경 사이의 연결 고리를 찾아내고 데이터를 맞추는 CrossEnv라는 틀을 만들었는데요, 이걸 쓰면 여러 환경을 넘나드는 작업을 자동으로 만들고 검증까지 할 수 있게 돼요. 여기에 쉬운 것부터 어려운 순서로 학습하는 커리큘럼을 더해서, 처음에는 한 환경에서 도구를 쓰다가 점차 여러 도메인으로 범위를 넓혀가도록 설계했거든요. 그 결과, 더 적은 학습 데이터로도 뛰어난 성능을 낼 수 있다는 장점이 있는데, 새로운 환경 조합이나 더 긴 작업 흐름에도 잘 적응한다는 점이 특징이에요.",
            "topic": "여러 환경을 연결하는 데이터와 단계적 학습 과정을 통해 인공지능 에이전트의 긴 작업 수행 능력을 높이는 방법이에요.",
            "one_line": "여러 환경을 연결하는 데이터 생성 틀과 단계적 학습법으로 에이전트를 훈련했어요.",
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
          "canon_id": "2611.22738",
          "title": "Can Activation Steering Substitute for Prompt-Based Affective Priming in LLM Digital Twins?",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22738"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존의 감정 유도 방식은 글을 길게 써야 해서 번거로웠어요",
            "easy1_desc": "사회과학에서는 사람이 특정 사건을 떠올리며 글을 쓰게 해서 감정을 유도하는 정서적 점화(Affective priming) 방식을 써 왔는데요, 이게 거대언어모델(LLM) 기반의 디지털 트윈에서도 반응을 바꾸는 데 쓰이곤 합니다. 하지만 이 방식은 모델이 직접 긴 글을 생성해야 한다는 번거로움이 있거든요. 그래서 연구진은 글쓰기 과정 없이 모델 내부의 활성화 상태를 직접 조절하는 방식이 이를 대신할 수 있을지 확인해 봤습니다.",
            "easy2_title": "글쓰기 대신 내부 신호를 조절해 봤더니 결과가 상황마다 달랐어요",
            "easy2_desc": "연구진은 Llama-3.1-8B-Instruct 모델을 사용해 100개의 페르소나를 대상으로 실험했는데요, 기존처럼 글을 쓰게 하는 대신 사람의 글에서 추출한 감정 방향성 정보를 모델의 잔차 스트림(Residual stream)에 직접 주입해 봤습니다. 그랬더니 감정 조절 강도에 따라 반응이 변하긴 했지만, 감사함 영역에서는 기존 방식과 비슷한 효과를 냈어도 통제력 부족 영역에서는 과하게 반응하는 등 일관적이지 않았거든요. 쉽게 말하면, 한 가지 방식으로 검증된 감정 유도 효과가 다른 방식에서도 똑같이 나타나지는 않는다는 겁니다.",
            "topic": "거대언어모델 디지털 트윈에서 감정 유도를 위해 글쓰기 기반의 정서적 점화를 활성화 조절(Activation steering) 방식으로 대체할 수 있는지 분석한 연구예요.",
            "one_line": "LLM 디지털 트윈에서 감정 유도 시 글쓰기를 활성화 조절로 대체 가능한지 실험했어요.",
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
          "canon_id": "2611.22737",
          "title": "Proximal Targets: Training Looped Refiners on Problems with Many Correct Answers",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22737"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "정답이 여러 개인 문제에서 기존 학습법은 오히려 독이 됩니다",
            "easy1_desc": "HRM이나 TRM 같은 반복형 정제 모델은 하나의 정답만을 목표로 학습하는데요, 정답이 여러 개인 문제에서는 이 방식이 오히려 모델의 성능을 떨어뜨리는 한계가 있다는 거예요. 정답들을 억지로 섞어버리니 잘못된 결과가 나오기 때문인데, 모델 용량을 아무리 키워도 이 손실값의 하한선은 사라지지 않는다는 말이에요. 쉽게 말하면, 정답이 많은 문제일수록 기존 학습 방식으로는 제대로 된 답을 찾기 어렵다는 겁니다.",
            "easy2_title": "입력값과 가장 가까운 정답을 찾아 학습하는 근접 목표 방식을 도입했습니다",
            "easy2_desc": "그래서 연구진은 입력값과 가장 가까운 정답을 찾아 학습하는 근접 목표(proximal target) 방식을 제안했는데요, 정답 목록을 검색하거나 탐색 솔버를 활용해 현재 초안과 가장 가까운 정답을 목표로 삼는 방식이에요. 이렇게 하면 정답이 고정점(fixed point)이 되어 반복할수록 오류가 줄어들고 결국 수렴하게 되거든요. 기존 방식보다 스도쿠 문제 해결률이 98.8%까지 올라가는 등 훨씬 뛰어난 성능을 보였다고 연구진은 주장했습니다.",
            "topic": "정답이 다수인 문제에서 반복형 정제 모델의 성능을 높이기 위해 입력값과 가장 가까운 정답을 목표로 설정하는 근접 목표 학습법을 연구했습니다.",
            "one_line": "정답이 여러 개인 문제 해결을 위해 근접 목표 학습법을 제안했어요.",
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
          "canon_id": "2611.22697",
          "title": "Remembered as Brief: Stored Preferences SilentlyRemove Decision-Critical Information",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22697"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 사용자의 취향을 기억하다가 중요한 경고를 빼먹어요",
            "easy1_desc": "사람들이 건강이나 돈 같은 중요한 결정을 AI 비서에게 물어볼 때가 많은데요, AI가 사용자의 이전 취향을 기억해 두었다가 나중에 답변할 때 이를 자동으로 적용하거든요. 그런데 문제는 사용자가 '짧게 답해달라'는 취향을 한 번 저장하면, AI가 그 뒤로는 중요한 경고나 필수 정보를 아예 빼버리고 답변한다는 거예요. 사실 틀린 말은 없으니 팩트체크는 통과하지만, 정작 사용자는 꼭 알아야 할 정보를 놓치게 되는 셈입니다.",
            "easy2_title": "기억 설정을 바꾸니 AI가 정보를 생략하고 멋대로 결정까지 해요",
            "easy2_desc": "연구진이 25개 분야의 100가지 일상 결정을 다루는 벤치마크인 'Inspect'를 만들어 5개 모델을 시험해 봤는데요, Gemini 2.5 Flash-Lite와 DeepSeek V4 Pro 모델은 짧은 답변을 선호한다는 설정을 기억한 뒤 84~93%의 확률로 중요한 정보를 말없이 생략해 버렸거든요. 심지어 가치 판단이 필요한 선택지에서는 사용자의 의사와 상관없이 AI가 80~95%의 확률로 임의의 선택을 내리기도 했습니다. 다만, 답변 전에 필수 항목을 먼저 나열하도록 지시하면 정보 누락을 상당 부분 복구할 수 있다는 점도 확인했습니다.",
            "topic": "AI 비서의 기억 기능이 사용자의 선호도를 반영하는 과정에서 필수 정보를 누락하거나 사용자의 의사결정에 부적절하게 개입하는 문제를 분석했어요.",
            "one_line": "AI 비서의 기억 기능이 정보 누락과 의사결정 개입에 미치는 영향을 분석했어요.",
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
          "canon_id": "2611.22670",
          "title": "Worldviews in Large Language Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22670"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "거대언어모델이 세상을 바라보는 관점이 따로 있더라고요",
            "easy1_desc": "거대언어모델(LLM)을 단순히 페르소나를 가진 존재로만 보지 않고, 세상이 어떻게 작동하는지 믿는 세계관이라는 더 깊은 층위에서 분석해 봤는데요. 심리학에서 쓰는 세계관 설문조사를 8개 모델에 적용해 봤더니, 모델들이 공통적으로 세상을 인간보다 덜 좋고 덜 안전하며 덜 생동감 있게 인식한다는 결과가 나왔거든요. 이런 부정적인 시각은 모델을 학습시킨 뒤에 이루어지는 후속 훈련 과정에서 더 강해진 것으로 보입니다.",
            "easy2_title": "대화와 질문 방식을 바꾸면 모델의 세계관도 변합니다",
            "easy2_desc": "연구진은 시스템 프롬프트로 모델의 정체성을 바꾸거나 모델끼리 대화를 시키면 세계관이 일관된 방향으로 움직인다는 사실을 확인했는데요. 특히 사색적인 질문을 던지면 모델의 시각이 더 긍정적으로 변하고 안전성도 높아졌다는 겁니다. 모델 간의 대화에서도 특정 방향으로 의견이 모이는 현상이 나타났는데, 이런 세계관을 잘 다루는 것이 모델을 더 안전하고 올바르게 정렬하는 핵심이 될 수 있다는 게 연구진의 주장이에요.",
            "topic": "거대언어모델의 행동을 결정하는 내면의 세계관을 측정하고 이를 조절할 수 있는 가능성을 탐구했어요.",
            "one_line": "거대언어모델의 세계관을 측정하고 조절하는 방법을 연구했어요.",
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
          "canon_id": "2611.22661",
          "title": "The Between-Round Decision in Autonomous Research: An LLM Controller That Reads the Whole Trajectory",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22661"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.22648",
          "title": "EDA: Observe, Verify, and Assess for Evidence-Grounded Multimodal Depression Analysis",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22648"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식은 우울증 판단 근거를 찾기 어려웠어요",
            "easy1_desc": "기존의 다중 모달(영상·음성 등 여러 정보) 우울증 평가 방식은 긴 기록을 단순히 요약하는 데 그쳤는데요. 그러다 보니 결과가 어떤 행동을 근거로 나왔는지, 그 판단이 타당한지 확인하기가 무척 어려웠거든요. 쉽게 말하면, 결론은 나왔는데 왜 그런 결론이 나왔는지 설명할 길이 없었다는 말이에요.",
            "easy2_title": "관찰하고 확인하고 평가하는 EDA로 근거를 명확히 했어요",
            "easy2_desc": "연구진은 관찰, 확인, 평가라는 세 단계로 이루어진 EDA 프레임워크를 제안했는데요. 먼저 단서를 찾아 기록하고, 인공지능 에이전트가 그 근거가 맞는지 검증한 뒤, 최종적으로 우울증을 평가하는 방식이에요. 이렇게 하면 근거가 명확해져서 결과의 투명성이 높아지는 장점이 있는데, 대신 검증 과정을 거치느라 처리 단계가 늘어난다는 점도 같이 따라온다는 겁니다.",
            "topic": "EDA 프레임워크를 통해 다중 모달 데이터에서 근거 기반의 투명한 우울증 평가를 수행하는 연구예요.",
            "one_line": "근거 기반의 다중 모달 우울증 평가 프레임워크인 EDA를 제안하고 성능을 검증했어요.",
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
          "canon_id": "2611.22612",
          "title": "Right Diagnosis, Unsafe Route: Auditing Clinical AI Decision Trajectories and Corrective Oversight for Validity and Potential Harm",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22612"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "결과만 맞으면 다 괜찮은 걸까요",
            "easy1_desc": "의료 인공지능(AI) 시스템이 최종 진단을 정확하게 내리더라도, 그 과정에서 환자에게 해가 될 수 있는 위험한 결정을 내릴 수 있다는 게 문제예요. 기존의 평가 방식은 결과가 맞는지에만 집중했거든요. 그래서 환자가 진단에 이르는 과정 자체가 안전한지 따져보는 새로운 평가 기준을 마련해 봤습니다.",
            "easy2_title": "안전한 진단 과정을 위해 과정을 뜯어보고 고쳐 봤습니다",
            "easy2_desc": "연구진은 실제 입원 사례를 단계별로 재현해 AI가 내린 모든 검사와 처방이 환자에게 안전한지, 의학적으로 타당한지 평가하는 감사 방식을 도입했어요. 오류가 발생했을 때 교정 피드백을 주면 실수가 얼마나 줄어드는지, 또 그 과정에서 새로운 위험이 생기지는 않는지도 확인했는데요. 결과적으로 최종 진단이 맞다고 해서 진단 과정까지 안전하다고 볼 수는 없다는 사실을 밝혀냈습니다.",
            "topic": "의료 AI의 최종 진단 정확도뿐만 아니라 진단에 이르는 과정의 안전성을 평가하고 교정하는 감사 체계를 제안했어요.",
            "one_line": "의료 AI의 진단 과정 안전성을 평가하고 교정하는 감사 체계를 구축했어요.",
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
          "canon_id": "2611.22611",
          "title": "DAQ: Decision-Aligned Post-Training Quantization for Spiking Transformers",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22611"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "스파이킹 트랜스포머의 무거운 데이터와 연산량을 줄여야 하는 상황이에요",
            "easy1_desc": "스파이킹 트랜스포머(Spiking transformers)는 효율적인 학습과 통신이 가능하지만, 모델 내부의 가중치와 막 전위(membrane variables)가 차지하는 저장 공간과 연산 비용이 너무 크다는 문제가 있어요. 이를 해결하려고 학습 후 양자화(PTQ)를 써 보지만, 양자화 과정에서 신경세포의 발화 패턴이 무너지는 게 큰 걸림돌이었거든요. 쉽게 말하면, 모델을 가볍게 만들려다 보니 원래의 똑똑한 판단력을 잃어버리는 상황인 겁니다.",
            "easy2_title": "판단 기준을 맞춰서 모델을 가볍고 똑똑하게 만들었어요",
            "easy2_desc": "연구진은 DAQ라는 새로운 양자화 방식을 제안했는데요, 양자화된 모델이 원래의 고정밀 모델과 똑같은 판단을 내리도록 신경세포의 발화 결정을 정렬하는 방식이에요. 양자화로 인한 오차가 결정 경계에서 어떻게 퍼지는지 분석하고, 그 오차를 줄이도록 모델을 보정했거든요. 그 결과 4비트 수준으로 가볍게 만들면서도 성능은 유지했고, 에너지 소비는 66.2%까지 줄이는 성과를 냈다는 겁니다.",
            "topic": "스파이킹 트랜스포머의 성능 저하 없이 모델의 가중치와 막 전위를 효율적으로 양자화하는 DAQ 기법에 관한 연구예요.",
            "one_line": "스파이킹 트랜스포머의 판단 기준을 정렬해 성능 손실 없는 양자화 기법을 개발했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.22605",
          "title": "Simplicity Goes Far: Auditing Prompt Optimizers with Demonstration-Conditioned Prompt Search",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22605"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 프롬프트 최적화 방법이 정말 효과적인지 의문이 들었어요",
            "easy1_desc": "최근 프롬프트 최적화 기술들은 정책 경사 업데이트나 진화적 탐색 같은 복잡한 기법들을 계속 쌓아 올리는 추세인데요. 연구진은 이런 방법들이 성능을 높이는 건지, 아니면 단순히 더 많은 샘플을 뽑아봐서 운 좋게 잘 나온 건지 구분하기 어렵다고 봤어요. 그래서 복잡한 학습 과정 없이 단순히 생성하고 선택하는 과정만으로도 성능이 얼마나 나오는지 확인해 보기로 한 겁니다.",
            "easy2_title": "단순한 방식만으로도 기존의 복잡한 기술들과 비슷한 성능을 냈어요",
            "easy2_desc": "연구진은 학습 없이 무작위 시연을 활용해 후보를 뽑고 검증하는 DCPS라는 기준 모델을 만들었는데요. 이걸로 실험해 봤더니 기존의 복잡한 최적화 도구들과 성능 차이가 거의 없거나, 오히려 비용은 훨씬 적게 드는 결과가 나왔거든요. 복잡한 기법이 꼭 필요한 상황도 있지만, 많은 경우 단순한 생성과 선택만으로도 충분하다는 사실을 밝혀낸 셈이에요.",
            "topic": "프롬프트 최적화 기법의 성능을 공정하게 평가하기 위해 단순한 생성-선택 모델을 기준으로 삼아야 한다는 연구예요.",
            "one_line": "프롬프트 최적화 기법의 성능을 검증하는 기준 모델을 제시하고 효율성을 분석했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.22591",
          "title": "PACT: Plan-Action Consistency Training by Preserving Correct Plans and Repairing Actions in GUI Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22591"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "계획은 잘 세워놓고 정작 행동은 딴판으로 하는 게 문제였어요",
            "easy1_desc": "GUI 에이전트가 작업을 수행할 때 머릿속으로는 올바른 계획을 세우지만, 실제 행동 단계에서 그 계획을 제대로 따르지 못하는 실행 간극이 발생하곤 합니다. 이런 불일치가 생기면 한 번의 실수만으로도 전체 작업 흐름이 망가져 버리거든요. 기존의 강화 학습 방식은 결과가 나쁘면 계획까지 통째로 벌점을 주는 문제가 있었는데, 이건 계획은 좋았는데 행동만 틀린 경우까지 억울하게 처벌받는 셈이라는 말이에요.",
            "easy2_title": "계획은 지켜주고 행동만 고쳐서 성공률을 높였어요",
            "easy2_desc": "연구진은 PACT라는 새로운 학습 틀을 도입해서 계획과 행동 사이의 불일치를 해결했습니다. 올바른 계획은 그대로 보호하면서 잘못된 행동만 골라 수정하는 방식인데, 원래의 보상 체계를 건드리지 않고도 학습 효율을 높인 게 핵심이에요. 덕분에 안드로이드와 데스크톱 환경에서 작업 성공률이 눈에 띄게 올라갔거든요. 쉽게 말하면, 계획은 칭찬하고 행동은 바로잡는 방식으로 에이전트의 실수를 줄였다는 겁니다.",
            "topic": "GUI 에이전트의 계획과 행동 사이의 불일치를 해결하기 위한 PACT 학습 프레임워크를 제안했어요.",
            "one_line": "GUI 에이전트의 실행 간극을 줄이는 PACT 학습법을 제안했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.22511",
          "title": "LMLineage: Content Lineage and Context Governance for LLM Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22511"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 왜 그런 말을 했는지 알기 어려웠던 문제",
            "easy1_desc": "지금까지 AI 에이전트의 속을 들여다보는 기술은 모델 내부의 가중치만 분석하는 데 그쳤거든요. 그런데 정작 중요한 건 AI가 여러 정보를 조합해 어떻게 결론을 내렸는지 그 과정을 파악하는 일인데, 이게 잘 안 됐던 겁니다. 뭔 소리냐면, AI가 내놓은 답변이 어떤 근거에서 나왔는지 추적하기가 무척 까다로웠다는 말이에요.",
            "easy2_title": "답변 근거를 추적하고 기억 공간을 효율적으로 관리하는 기술",
            "easy2_desc": "연구진은 모델 내부를 직접 수정하지 않고도 AI가 뱉은 문장의 근거를 찾아내는 LMLineage라는 시스템을 만들었는데요. 답변의 근거가 되는 입력 정보를 정확히 짚어내고, 더 이상 쓰이지 않는 정보는 골라내어 기억 공간을 확보하는 방식이에요. 이렇게 하면 전체 내용을 요약하느라 시간을 낭비할 필요가 없고, 사용자의 지시 사항은 그대로 유지할 수 있다는 장점이 있거든요.",
            "topic": "AI 에이전트의 답변 근거를 추적하고 문맥 정보를 효율적으로 관리하는 LMLineage 시스템에 관한 연구예요.",
            "one_line": "AI 에이전트의 답변 근거를 추적하고 문맥 정보를 효율적으로 관리하는 시스템을 개발했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "개념 드리프트 감지 성능은 근거 추적의 정확도에 따라 제한된다고 밝혔어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                false
              ],
              [
                "point3",
                false
              ]
            ],
            "evidence_ok": "4/6",
            "evidence_all": false,
            "evidence_by_symbols": 0,
            "bad_numbers": [],
            "format": [],
            "flags": [
              "limit 근거 원문에 없음"
            ],
            "tag": "AI 에이전트·도구",
            "limit_ok": false,
            "show_limit": false
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.22496",
          "title": "DARWIN: a Geospatial Foundation Model for Marine Intelligence",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22496"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "바다를 이해하는 인공지능 모델이 육지에 비해 부족했어요",
            "easy1_desc": "지구 관측을 위한 인공지능 모델들은 그동안 주로 육지 데이터에 집중해 왔는데요, 바다는 육지와는 완전히 다른 환경이라 다루기가 훨씬 까다롭거든요. 데이터가 중간중간 비어 있기도 하고, 물리적·생물학적 변수가 복잡하게 섞여 있는 데다 바다의 움직임 자체가 계속 변하기 때문이에요. 쉽게 말하면, 육지용 모델을 바다에 그대로 쓰기에는 한계가 명확했다는 겁니다.",
            "easy2_title": "바다 특성에 맞춘 다윈 모델로 예측 정확도를 높였어요",
            "easy2_desc": "연구진은 바다의 특성을 반영한 다윈(DARWIN)이라는 모델을 새로 만들었는데요, 데이터가 비어 있는 부분을 잘 처리하고 시간과 공간의 변화를 더 넓게 학습하도록 설계했어요. 26년 치의 해양 데이터를 미리 학습시킨 결과, 2022년의 엽록소 농도를 예측할 때 기존 모델들보다 훨씬 뛰어난 성능을 보였거든요. 특히 학습 데이터를 10%만 써도 기존 모델이 100% 데이터를 쓴 것보다 더 나은 결과를 냈다고 연구진은 주장했습니다.",
            "topic": "해양 지능을 위한 지리 공간 기초 모델인 다윈(DARWIN)의 개발과 성능 평가에 관한 연구예요.",
            "one_line": "해양 데이터 특성을 반영한 지리 공간 기초 모델 다윈을 개발했어요.",
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
          "canon_id": "2611.22490",
          "title": "SciWorkBench: A Benchmark for Real Scientific Workflows",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22490"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 진짜 과학자처럼 연구를 끝낼 수 있을까",
            "easy1_desc": "요즘 언어 모델을 계획을 세우고 실행하는 에이전트로 많이 쓰는데요, 과연 이들이 실제 과학자들처럼 복잡한 연구 프로젝트를 처음부터 끝까지 완수할 수 있는지 궁금해진 겁니다. 그래서 연구진은 생물학, 화학, 재료과학, 물리학 등 실제 과학 분야의 과제들로 에이전트의 능력을 평가하는 벤치마크인 SciWorkBench를 만들었어요. 쉽게 말하면, AI가 진짜 과학 연구를 수행할 준비가 되었는지 시험대를 마련한 셈이에요.",
            "easy2_title": "시험해 봤더니 아직은 갈 길이 멀다는 결과가 나왔어요",
            "easy2_desc": "Claude Code와 Codex 같은 최신 에이전트 프레임워크를 활용해 평가해 봤는데요, 가장 성적이 좋은 에이전트도 평균 점수가 57.38점에 그쳤거든요. 연구진은 이 점수를 보고 현재의 AI 에이전트들이 현실적인 과학적 작업 흐름을 처리하는 데 여전히 어려움을 겪고 있다고 분석했어요. 과학적 지식을 구체적인 절차로 바꾸거나, 여러 정보를 통합하고 스스로 오류를 고치는 능력이 부족하다는 점이 한계로 드러난 겁니다.",
            "topic": "실제 과학 연구 과정을 기반으로 AI 에이전트의 수행 능력을 평가하는 벤치마크인 SciWorkBench를 제안하고 그 한계를 분석했어요.",
            "one_line": "과학 연구용 AI 에이전트의 능력을 평가하는 벤치마크를 개발하고 한계를 분석했어요.",
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
          "canon_id": "2611.22480",
          "title": "RehearsalBench: Can AI Predict What Happens When You Change a Company?",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22480"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI에게 회사의 미래를 맡기면 어떤 일이 벌어질까",
            "easy1_desc": "기업들은 자동화나 팀 개편 같은 변화를 줄 때 어떤 결과가 나올지 AI에게 묻곤 하는데요, 이런 의사결정을 AI가 얼마나 잘 진단하고 예측하는지 확인하기 위해 리허설벤치(RehearsalBench)라는 평가 도구를 만들었습니다. 모델들은 실제 콜센터 데이터를 바탕으로 구성된 시뮬레이션 환경에서 관리자처럼 상황을 보고 계획을 세우게 되는데요, 200가지의 미래 시나리오와 다양한 조직 환경 속에서 AI가 내린 결정이 실제 비용과 성과에 어떤 영향을 주는지 측정하는 방식이에요.",
            "easy2_title": "AI가 예측은 잘하는데 변화의 크기는 좀 서툴러요",
            "easy2_desc": "10개의 모델이 14개 조직을 대상으로 280번의 시도를 해봤더니, 가장 뛰어난 GPT-6 Astra 모델은 아무것도 하지 않았을 때보다 비용을 6.8% 개선하는 성과를 보였습니다. 모든 모델이 변화의 방향은 정확히 맞혔지만, 변화의 크기를 예측하는 데는 실수가 있었는데요, 특히 음성 에이전트가 반복 문의에 미치는 영향을 실제보다 5배 정도 크게 부풀려 예측하는 경향이 나타났거든요. 게다가 아무것도 하지 않는 게 최선인 상황에서도 무조건 변화를 시도하는 모습을 보여, 아직은 신중한 판단이 부족하다는 점을 알 수 있습니다.",
            "topic": "AI 모델이 기업 운영 변화에 따른 결과를 진단하고 예측하는 능력을 평가하는 벤치마크 연구입니다.",
            "one_line": "기업 운영 변화에 따른 AI의 의사결정 및 예측 능력을 평가하는 벤치마크를 개발했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "연구진은 이번 결과가 초기 테스트 단계의 한계를 포함하고 있으며, 결과 확인 후 분석 방식을 선택했다는 점과 모델의 불확실성 측정 능력에 따른 결과라는 점을 명시했습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.22457",
          "title": "From Ideal to Real: Integrating Language Models into Smart Home for Human-Centric IoT Safety and Security Fuzzing",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22457"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "스마트홈 기기들이 서로 꼬여서 생기는 보안 문제가 심각해요",
            "easy1_desc": "스마트홈 기기가 늘어나면서 편리해졌지만, 기기들끼리 맺은 규칙이 서로 충돌하면서 생기는 보안 취약점이 문제가 되고 있어요. 기존의 퍼즈 테스트(Fuzz testing)는 사람이 이상적으로 행동한다고 가정하고 시뮬레이션 환경에서만 검사했거든요. 그런데 실제 사람들은 훨씬 복잡하고 예측하기 어렵게 행동하기 때문에, 기존 방식으로는 이런 현실적인 위험을 찾아내지 못한다는 한계가 있다는 겁니다.",
            "easy2_title": "거대언어모델을 써서 사람이 직접 쓰는 것처럼 테스트해 봤어요",
            "easy2_desc": "그래서 연구진은 거대언어모델(LLM)을 도입해 사람이 실제로 어떻게 결정하고 행동하는지를 흉내 내는 방식으로 IoT Fuzz를 개선했어요. 이렇게 하면 테스트 환경에 현실성과 예측 불가능한 요소가 더해져서, 스마트홈에서 벌어지는 다양하고 역동적인 사람의 행동을 더 정확하게 잡아낼 수 있거든요. 결과적으로 기존 방식이 놓쳤던 기기 간의 복잡한 충돌 문제를 더 잘 찾아낼 수 있게 된 셈이에요.",
            "topic": "스마트홈 환경에서 거대언어모델을 활용해 사람의 행동을 모사함으로써 IoT 기기 간의 보안 취약점을 찾는 새로운 테스트 방법을 제안했어요.",
            "one_line": "거대언어모델을 활용해 스마트홈의 보안 취약점을 찾는 테스트 방식을 개선했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.22432",
          "title": "Think Once, Act Fast: Cost-Effective Recursive Self-Improvement for Decision Model Harness",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22432"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "빠른 모델은 멍청하고 똑똑한 모델은 너무 느린 게 문제였어요",
            "easy1_desc": "즉각 반응하는 시스템-1 모델은 속도는 빠르지만 복잡한 일을 처리하기엔 역부족이거든요. 반대로 추론 능력이 뛰어난 대규모 언어 모델(LLM) 기반의 시스템-2는 답을 내는 데 시간이 너무 오래 걸리고 비용도 많이 든다는 단점이 있어요. 쉽게 말하면, 빠르지만 부족하거나, 똑똑하지만 느린 두 모델 사이의 간극이 컸다는 말이에요.",
            "easy2_title": "똑똑한 추론을 빠른 모델에 이식해서 효율을 높였어요",
            "easy2_desc": "연구진은 JevRSI라는 협업 구조를 제안했는데, 시스템-2가 만든 추론 과정을 시스템-1 모델이 바로 쓸 수 있게 변환해 주는 방식이에요. 시스템-2가 모듈 형태의 도구를 만들면 시스템-1이 이를 활용해 빠르게 결정을 내리는 식인데요, 환경에서 피드백을 받아 스스로 성능을 개선하는 특징도 있어요. 결과적으로 LLM 에이전트 수준의 성능을 내면서도 실행 속도는 훨씬 빠르고 비용 효율적이라는 장점이 있거든요.",
            "topic": "시스템-1과 시스템-2의 협업을 통해 추론 능력을 모델에 내재화하여 의사결정 효율을 높이는 JevRSI 프레임워크를 제안했어요.",
            "one_line": "시스템-1과 2를 결합해 추론을 내재화하는 JevRSI를 개발했어요.",
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
          "canon_id": "2611.22420",
          "title": "Proceedings of the 2026 XCSP3 Competition",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22420"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.22407",
          "title": "ROSMonitoring in Action: Runtime Monitoring and Enforcement for ROS 2 Actions",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22407"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇이 긴 작업을 할 때 상태를 제대로 살피기 어려웠어요",
            "easy1_desc": "로봇은 이동이나 물건을 잡는 것처럼 시간이 오래 걸리는 작업을 수행하는데요, ROS 2에서는 이런 작업을 액션(Action)이라는 단위로 처리합니다. 그런데 기존의 모니터링 도구는 액션이 시작되고 끝나는 복잡한 과정을 제대로 추적하지 못한다는 문제가 있었거든요. 쉽게 말하면, 로봇이 일을 잘하고 있는지 중간중간 확인하는 감시 체계가 액션에는 없었다는 말이에요.",
            "easy2_title": "액션의 전체 과정을 감시하고 잘못된 동작을 바로잡게 했어요",
            "easy2_desc": "그래서 연구진은 ROSMonitoring에 액션을 감시하고 제어하는 기능을 새로 추가했는데요, 액션의 상태를 실시간으로 파악하고 규칙을 어기면 작업을 취소하거나 메시지를 차단하는 식으로 대응하게 만든 겁니다. 이렇게 하면 로봇이 정해진 프로토콜을 따르지 않을 때 즉각적인 조치가 가능하다는 장점이 있어요. 다만, 액션이 많아질수록 시스템이 처리해야 할 부담이 늘어난다는 점도 함께 확인했답니다.",
            "topic": "ROS 2 액션의 실행 과정을 실시간으로 감시하고 강제하는 모니터링 시스템을 설계하고 그 성능을 분석했어요.",
            "one_line": "ROS 2 액션의 실행 과정을 감시하고 제어하는 모니터링 기능을 구현했어요.",
            "topic_tag": "제어·로봇",
            "limit": "현재 구현된 동기식 방식은 작업 부하가 커질 때 성능 저하가 발생한다는 한계가 있어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.22374",
          "title": "AutoE2E: Don't speak - Language free end-to-end autonomy A Real-Time Driving Model for L2++ ADAS and L4 Robotaxis",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22374"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 자율주행 모델은 언어 모델에 너무 의존하고 있었어요",
            "easy1_desc": "기존의 자율주행 기술들은 주로 언어 모델을 활용해 주행 상황을 판단하곤 했는데요, 연구진은 이런 방식에서 벗어나 언어 없이도 주행이 가능한 모델을 만들기로 했습니다. AutoE2E라는 이름의 이 모델은 카메라 영상과 지도 정보만을 활용해 차량의 움직임을 예측하는 방식이에요. 쉽게 말하면, 복잡한 언어 처리 과정 없이 시각 정보만으로 주행을 판단하는 구조를 설계한 셈입니다.",
            "easy2_title": "시각 정보와 지도만으로 차량 움직임을 예측하게 만들었어요",
            "easy2_desc": "연구진은 여러 대의 카메라에서 들어오는 영상과 고정밀 지도 정보를 결합하는 시간적 조감도(BEV) 구조를 도입했는데요, 이를 통해 3초 앞의 차량 경로를 예측하도록 설계했습니다. 약 7,990만 개의 파라미터 중 145만 개를 학습시켜 성능을 최적화했거든요. 그 결과 KITScenes 벤치마크에서 평균 변위 오차 0.745미터, 최종 변위 오차 2.020미터를 기록하며 실시간 주행 모델로서의 가능성을 보여줬다는 평가입니다.",
            "topic": "언어 모델을 배제하고 시각 정보와 지도 데이터를 결합해 차량의 경로를 예측하는 오픈소스 자율주행 모델 AutoE2E를 개발했어요.",
            "one_line": "언어 모델 없이 시각 정보만으로 주행 경로를 예측하는 오픈소스 모델을 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "현재 이 모델은 개방형 루프 평가만 수행되었으며, 실제 폐쇄형 루프 환경에서의 완전한 자율주행 성능은 아직 검증되지 않았습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.22368",
          "title": "Seeing What Still Holds: How Waiting Control Changes Cooperative Recovery",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22368"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기다리는 동안 물건을 어떻게 잡느냐에 따라 로봇 성능이 달라집니다",
            "easy1_desc": "로봇이 작업을 수행하다 멈췄을 때 다시 복구하는 시각적 방법들을 비교해 봤는데요, 기다리는 시간 동안 물건을 잡는 기준(holding reference)을 어떻게 설정하느냐에 따라 성능 순위가 완전히 뒤바뀐다는 사실을 확인했습니다. 뭔 소리냐면, 단순히 복구 알고리즘만 중요한 게 아니라 그 전 단계인 잡기 방식이 결과에 큰 영향을 준다는 말이에요. 기존 연구들이 이런 기준을 간과했다면, 이번 연구는 이 기준이 복구 성능을 결정짓는 핵심 조건임을 밝혀낸 셈입니다.",
            "easy2_title": "잡기 기준을 바꾸니 로봇의 복구 성공률이 눈에 띄게 좋아졌습니다",
            "easy2_desc": "연구진은 AuditEmbodied라는 평가 체계를 만들어 로봇이 물건을 잡는 기준과 기다리는 시간을 다양하게 바꿔가며 실험해 봤는데요, 잡기 기준을 위치 기반으로만 설정했을 때 CAD 기반 복구 방식의 성공률이 42.5% 포인트나 높아졌고 평균 복구 시간도 6.06초 줄어드는 결과를 얻었습니다. 복구 실행기는 그대로 둔 채 잡기 방식만 조정해도 성능이 크게 개선된다는 걸 보여준 겁니다. 쉽게 말하면, 로봇의 복구 능력을 제대로 평가하려면 이제는 잡기 기준을 명확한 평가 조건으로 포함해야 한다는 뜻이에요.",
            "topic": "로봇의 시각적 복구 성능을 평가할 때 물건을 잡는 기준(holding reference)이 미치는 영향을 분석하고 이를 평가 조건으로 제안했습니다.",
            "one_line": "로봇의 복구 성능 평가 시 잡기 기준의 중요성을 밝히고 평가 체계를 제안했어요.",
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
          "canon_id": "2611.22362",
          "title": "HealthCLBench:Evaluating Context Learning in Health Conversations through Controlled Case Clusters",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22362"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "의료 상담에서 인공지능이 맥락을 제대로 파악하는지 확인하기 어려웠어요",
            "easy1_desc": "복잡한 건강 상담을 할 때는 환자의 개인 정보와 최신 의학적 근거를 정확히 연결하는 게 중요한데요, 기존의 중국어 의료 평가 체계는 환자의 상태가 바뀌거나 새로운 정보가 들어왔을 때 인공지능이 이를 얼마나 잘 반영하는지 체계적으로 따져보지 못했다는 한계가 있었거든요. 쉽게 말하면, 인공지능이 맥락을 이해하고 적용하는 능력을 검증할 만한 표준화된 도구가 부족했다는 말이에요.",
            "easy2_title": "의료 맥락 학습을 평가하는 새로운 벤치마크를 만들었어요",
            "easy2_desc": "연구진은 328개의 통제된 클러스터와 1,103개의 사례, 그리고 4,931개의 평가 기준을 담은 HealthCLBench를 새롭게 도입했는데요, 70명의 의료진이 직접 사례를 만들고 검토해서 인공지능이 환자의 상태나 목표 변화를 얼마나 잘 따라오는지 정밀하게 측정할 수 있게 됐습니다. 실제로 700개의 응답을 사람이 직접 검토해 보니, 기존 자동 평가 결과와 90.5%의 일치도를 보였다고 주장했어요. 덕분에 여러 모델의 성능을 비교하고 부족한 점을 구체적으로 짚어낼 수 있게 된 셈이에요.",
            "topic": "의료 상담 환경에서 인공지능 모델의 맥락 학습(Context Learning) 능력을 체계적으로 평가하기 위한 새로운 벤치마크를 제시하고 그 성능을 분석했어요.",
            "one_line": "의료 상담 맥락 학습을 평가하는 벤치마크를 개발하고 모델 성능을 분석했어요.",
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
          "canon_id": "2611.22338",
          "title": "Reliable Evaluation of AI Agents for Investment Research: A Framework for Performance and Validity Assessment",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22338"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 투자 보고서를 잘 썼는지 확인하기가 참 어렵거든요",
            "easy1_desc": "투자 분석을 수행하는 AI 에이전트는 외부 정보를 가져와서 보고서를 만드는데요, 결과물만 봐서는 이 과정이 제대로 이루어졌는지 알기 어렵다는 문제가 있어요. 게다가 투자 연구마다 필요한 수치 정확도나 분석 수준이 제각각이라서, 똑같은 기준으로 평가하기가 까다로운 상황이거든요. 쉽게 말하면, AI가 낸 답이 맞는지 확인하는 평가 방식 자체가 믿을 만한지부터 따져봐야 한다는 말이에요.",
            "easy2_title": "평가 과정을 쪼개고 검증해서 믿을 수 있게 만들었어요",
            "easy2_desc": "연구진은 결과물과 실행 과정을 분리해서 평가하는 도메인 중심의 프레임워크를 제안했는데요, 과제마다 다른 요구 사항을 반영하기 위해 작업별 기준과 결정론적 검증기, 그리고 대규모 언어 모델(LLM) 판사를 도입했어요. 평가에 쓰이는 정보와 채점 결과가 올바른지 확인하는 절차도 넣었는데, 의견이 갈리면 전문가가 직접 검토해서 해결하도록 했거든요. 이렇게 했더니 AI의 성능 차이를 더 명확하게 구분할 수 있었고, 평가 과정에서 생길 수 있는 신뢰성 문제도 찾아낼 수 있었다는 겁니다.",
            "topic": "투자 연구를 수행하는 AI 에이전트의 성능과 평가 과정의 타당성을 검증하기 위한 체계적인 프레임워크를 제안했어요.",
            "one_line": "투자 연구 AI 에이전트의 성능과 평가 타당성을 검증하는 프레임워크를 제안했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.22310",
          "title": "EviDARL: Evidence-Centric Dual-Agent Reasoning via Alternating Reinforcement Learning for Multi-Table Question Answering",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22310"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "여러 표를 한꺼번에 다루는 게 생각보다 어렵거든요",
            "easy1_desc": "기존의 거대언어모델(LLM)은 주로 표 하나를 분석하는 데 집중해 왔는데요, 여러 개의 표를 동시에 다뤄야 하는 상황에서는 표 사이의 복잡한 관계를 파악하고 흩어진 정보를 찾아내는 과정이 매우 어렵습니다. 특히 중간 과정이 검증되지 않은 상태에서 답을 내야 하니 정확도가 떨어질 수밖에 없거든요. 쉽게 말하면, 정보가 여기저기 흩어져 있는데 연결 고리를 찾기 힘든 상황인 셈이에요.",
            "easy2_title": "두 명의 에이전트가 협력해서 정답을 찾아내도록 만들었어요",
            "easy2_desc": "연구진은 증거를 만드는 에이전트와 추론을 담당하는 에이전트, 이렇게 둘을 짝지은 EviDA라는 구조를 제안했는데요, 증거 생성 에이전트가 먼저 표를 조작해 필요한 정보를 뽑아내면 추론 에이전트가 이를 바탕으로 답을 내는 방식이에요. 여기에 강화학습(RL)을 더해 두 에이전트가 서로 번갈아 가며 학습하도록 했더니 협력 능력이 좋아졌거든요. 결과적으로 제한된 자원 안에서도 기존 모델들보다 훨씬 뛰어난 성능을 보였다고 연구진은 주장했습니다.",
            "topic": "여러 개의 표에서 정보를 추출하고 추론하는 과정을 최적화하기 위해 증거 중심의 이중 에이전트 구조와 강화학습 기법을 제안한 연구입니다.",
            "one_line": "여러 표를 다루는 질의응답을 위해 이중 에이전트와 강화학습을 결합했어요.",
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
          "canon_id": "2611.22309",
          "title": "Efficient Wide-Beam Generative Retrieval with Model-Native Trie Decoding and Shared-Context Attention",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22309"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "생성형 검색을 할 때마다 너무 느려지는 게 문제였어요",
            "easy1_desc": "생성형 검색(GR)은 정보를 찾을 때 짧은 식별자(SID)를 예측하는 방식을 쓰는데요, 이때 올바른 결과만 나오도록 트라이(Trie) 구조로 제한을 걸어두면 검색 폭을 넓힐 때마다 계산 비용이 급격히 늘어난다는 문제가 있어요. 특히 파이썬으로 매번 조건을 확인하고 전체 단어 사전에서 점수를 계산하느라 CPU와 GPU 사이에서 데이터가 너무 많이 오가는 게 병목 현상의 원인이거든요. 쉽게 말하면, 검색 범위를 넓히고 싶어도 시스템이 버티질 못해 효율이 떨어지는 상황인 겁니다.",
            "easy2_title": "검색 구조를 아예 모델 안으로 넣어서 속도를 확 높였어요",
            "easy2_desc": "그래서 연구진은 트라이 구조를 GPU 텐서 형태로 모델 안에 직접 심어버리는 '트라이-헤드(Trie-Head)'라는 인터페이스를 만들었는데요, 이렇게 하면 파이썬을 거치지 않아도 되니 데이터 이동이 줄어들고 훨씬 빠르게 계산할 수 있어요. 여기에 프롬프트의 핵심 정보를 여러 검색 경로가 공유해서 쓰도록 하는 '공유 문맥 어텐션(Shared-context attention)' 기술까지 더했거든요. 결과적으로 기존 방식보다 처리 속도가 최대 5.57배까지 빨라졌는데, 모델을 다시 학습시킬 필요 없이 그대로 쓸 수 있다는 게 큰 장점이에요.",
            "topic": "생성형 검색의 효율을 높이기 위해 트라이 구조를 모델 내부에 통합하고 어텐션 연산을 최적화한 연구입니다.",
            "one_line": "트라이 구조를 모델에 통합해 생성형 검색 속도를 높였어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.22301",
          "title": "MCTS Is Counting the Wrong Thing: Learning Exploration Counts for LLM Reasoning",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22301"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "몬테카를로 트리 탐색이 엉뚱한 걸 세고 있었어요",
            "easy1_desc": "강화학습에서 큰 성과를 낸 몬테카를로 트리 탐색(MCTS)을 거대언어모델(LLM) 추론에 써 봤는데요, 생각보다 성능이 잘 안 나오는 문제가 있었거든요. 알고 보니 기존 방식은 같은 추론 전략이라도 표현만 다르면 각각 다른 가지로 인식해서 탐색 점수를 중복으로 줬던 거예요. 쉽게 말하면, 똑같은 길을 여러 번 가는 셈이라 탐색 효율이 떨어지고 누적 후회값이 커진다는 말이에요.",
            "easy2_title": "탐색 횟수를 똑똑하게 세는 방식을 도입했어요",
            "easy2_desc": "그래서 연구진은 학습된 의사 카운트(LPC-MCTS)라는 새로운 방식을 제안했는데요, 정책 모델의 숨겨진 표현을 활용해 비슷한 추론 가지끼리 탐색 정보를 공유하도록 바꾼 거예요. 실제로 수학 추론 벤치마크에서 테스트해 봤더니, 기존 MCTS보다 정확도가 Qwen2.5-7B 모델에서 4.96%, Qwen3-4B 모델에서 4.37%까지 올랐거든요. 탐색 대상을 어떻게 정의하느냐에 따라 추론 성능이 크게 달라질 수 있음을 보여준 겁니다.",
            "topic": "거대언어모델의 추론 성능을 높이기 위해 몬테카를로 트리 탐색의 탐색 효율을 개선하는 방법을 다뤘어요.",
            "one_line": "MCTS의 탐색 횟수 산정 방식을 개선해 LLM 추론 성능을 높였어요.",
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
          "canon_id": "2611.22299",
          "title": "Harnesses That Improve Themselves: A Unifying Framework for Self-Improving Agent Harnesses",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22299"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "모델마다 제각각인 실행 환경이 AI 성능을 깎아먹고 있어요",
            "easy1_desc": "AI 모델이 자율 에이전트로 성공하려면 모델 자체의 성능뿐만 아니라 실행 환경인 에이전트 하니스(agent harness)가 얼마나 잘 갖춰졌느냐가 중요하거든요. 그런데 모델마다 도구를 쓰는 방식이나 오류가 발생하는 지점이 다르다 보니, 고정된 환경에서는 특정 작업에서 멈추거나 토큰을 낭비하는 문제가 생기곤 합니다. 쉽게 말하면, 모델에 딱 맞는 환경을 일일이 맞춰주지 않으면 제 성능을 내기 어렵다는 말이에요.",
            "easy2_title": "스스로 코드를 고쳐 성능을 높이는 통합 프레임워크를 만들었어요",
            "easy2_desc": "그래서 연구진은 실행 기록을 스스로 검사하고 코드를 직접 수정하는 자기 개선형 에이전트 하니스 프레임워크를 제안했는데요. 이 시스템은 오류를 진단하고 패치를 제안한 뒤 검증을 거쳐 업데이트를 배포하는 4단계 루프를 통해 작동합니다. 단순히 전체를 다시 쓰는 게 아니라 모듈별로 업데이트해서 토큰 비용은 줄이면서도 다양한 모델에서 안정적으로 작동하게 만든 거예요. 결과적으로 SWE-bench Lite 실험에서 기존 방식보다 더 나은 성능을 보여줬다고 주장했습니다.",
            "topic": "자기 개선형 에이전트 하니스를 위한 통합 설계 프레임워크와 그 효과에 대한 연구예요.",
            "one_line": "자기 개선형 에이전트 하니스를 위한 통합 프레임워크를 제안하고 검증했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "자기 수정 과정에서 발생할 수 있는 프롬프트 비대화나 벤치마크 조작 같은 위험을 방지하기 위한 실질적인 방어책을 마련했습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.22298",
          "title": "Streaming On-Policy Distillation: Decoupling Three Clocks for Stage-Wise Supervision Consumption",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22298"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "학습 과정에서 세 가지 속도를 따로따로 조절해 봤습니다",
            "easy1_desc": "온-폴리시 증류(OPD)를 할 때 응답 생성, 지도 데이터 전달, 매개변수 업데이트라는 세 가지 작업이 같은 속도로 움직여야 한다는 고정관념이 있었는데요. 연구진은 이 세 가지 시계(clocks)를 분리하는 스트리밍 OPD 방식을 개발했습니다. 응답이 생성되는 동안 새로운 조각을 계속 전달하고, 새로 생성된 부분에 대해서만 손실을 계산하는 방식이에요. 쉽게 말하면, 학습의 효율을 높이기 위해 각 과정을 독립적으로 제어할 수 있게 만든 겁니다.",
            "easy2_title": "데이터를 효율적으로 써서 학습 성능을 끌어올렸습니다",
            "easy2_desc": "새로운 프로토콜을 도입해 지도 예산, 위치 선택, 버전 지연 등을 관리했더니 학습 단계별로 세밀한 제어가 가능해졌는데요. GSM8K 데이터셋으로 실험해 보니, 지도 예산을 맞추는 방식이 초기 테스트 정확도 격차를 4.55에서 2.42 포인트로 줄였다고 합니다. 다만 신선도 필터링 같은 기법은 일시적인 성능 향상은 보여도 지속적인 이점은 없었다고 밝혔어요. 결국 데이터 공급 대기 시간은 줄었지만, 전체 업데이트 속도가 비례해서 빨라지지는 않았다는 점도 함께 언급했습니다.",
            "topic": "온-폴리시 증류 과정에서 세 가지 핵심 주기를 분리하여 학습 효율과 성능을 개선하는 스트리밍 OPD 기법을 제안했습니다.",
            "one_line": "학습 주기를 분리하는 스트리밍 OPD 방식을 개발해 학습 효율을 개선했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "신선도 필터링이나 불일치 중첩 선택 같은 기법들이 일시적인 성능 향상은 가져오지만, 지속적인 우위를 확립하지는 못했다고 밝혔습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.22296",
          "title": "SpecSearch: Towards Hardware-Aware Efficient Speculative Decoding",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22296"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "추측 디코딩은 하드웨어 상황에 따라 성능이 널뛰기하거든요",
            "easy1_desc": "거대언어모델(LLM)의 추론 속도를 높이는 추측 디코딩(SD)은 작업 환경이나 GPU 하드웨어에 따라 최적의 설정이 달라지는데요. 예를 들어 RTX 5090에서 DFlash라는 기술을 써 봤더니, 동시 접속이 적을 때는 기존 방식보다 3.50배 빠르지만 동시 접속이 많아지면 오히려 0.76배로 느려지기도 합니다. 즉, 하드웨어와 작업 특성을 고려하지 않으면 오히려 성능이 떨어질 수 있다는 말이에요.",
            "easy2_title": "하드웨어 특성을 미리 파악해 최적의 설정을 찾아주는 도구를 만들었어요",
            "easy2_desc": "연구진은 디코딩 전략과 초안 길이, 정밀도를 한꺼번에 최적화하는 SpecSearch라는 검색 엔진을 개발했는데요. 이 모델은 메모리와 연산 제약 조건을 분석해 최적의 설정을 찾아내고, Jev 기반 예측기를 통해 새로운 GPU에서도 별도의 복잡한 측정 없이 높은 성능을 내도록 설계했습니다. 그 결과 기존 방식보다 1.36배 높은 처리량을 보이면서도, 전체 측정을 수행했을 때의 97.36% 수준 성능을 유지한다는 점이 특징이에요.",
            "topic": "다양한 하드웨어 환경에서 추측 디코딩의 성능을 극대화하기 위한 하드웨어 인식 최적화 프레임워크인 SpecSearch를 제안했어요.",
            "one_line": "하드웨어 특성을 반영해 추측 디코딩의 성능을 최적화하는 검색 엔진을 개발했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.22286",
          "title": "Learning Regions of Attraction for Transverse Feedback Linearization under Controller Singularities",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22286"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "제어기가 작동하지 않는 특이점 문제가 있었어요",
            "easy1_desc": "횡방향 피드백 선형화(TFL)라는 기술은 경로를 따라가는 데 유용하지만, 특정 상황에서는 제어기가 정의되지 않는다는 문제가 있어요. 예를 들어 유니사이클의 속도가 0이거나 쿼드로터의 추진력이 0인 경우처럼 제어기가 멈춰 버리는 특이점이 발생하거든요. 그래서 안전하게 제어기를 쓸 수 있는 영역인 '끌림 영역'을 찾는 게 중요한데, 기존에는 이 영역을 정확히 파악하기가 어려웠다는 말이에요.",
            "easy2_title": "안전한 영역을 학습으로 찾아내 성능을 높였어요",
            "easy2_desc": "연구진은 끌림 영역을 수학적으로 분석해 일부는 계산하고, 나머지는 학습을 통해 찾아내는 방식을 썼는데요. 무한한 궤적 데이터 없이도 적합 가치 반복법(fitted value iteration)으로 안전 가치 함수를 학습시켰거든요. 그 결과 유니사이클과 평면 쿼드로터 실험에서 기존 방식보다 훨씬 넓은 영역을 안전하게 확보할 수 있음을 확인했어요. 쉽게 말하면, 제어기가 고장 나지 않는 안전한 범위를 훨씬 더 정확하고 넓게 찾아냈다는 겁니다.",
            "topic": "횡방향 피드백 선형화에서 제어기 특이점을 고려한 안전한 끌림 영역을 학습하는 방법이에요.",
            "one_line": "제어기 특이점을 고려한 안전한 끌림 영역을 학습으로 찾아냈어요.",
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
          "canon_id": "2611.22283",
          "title": "Towards Physics-Constrained Rectified Flow for Climate Downscaling: What Projections Can Certify?",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22283"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기후 데이터를 쪼개서 볼 때 물리 법칙이 깨지는 게 문제였어요",
            "easy1_desc": "기후 모델에서 좁은 지역의 상세 정보를 얻으려고 통계적 축소(Downscaling)를 쓰는데요, 이때 확산 모델이나 흐름 매칭 생성기를 쓰면 그림은 선명해지지만 정작 중요한 물리 법칙인 질량 보존 같은 게 깨지는 일이 생기거든요. 뭔 소리냐면, 데이터는 그럴듯해 보여도 실제 기후 물리량과는 맞지 않는 결과가 나온다는 말이에요. 이런 오류는 홍수나 작물 피해 예측처럼 정밀함이 필요한 분야에서 큰 문제가 될 수 있거든요.",
            "easy2_title": "물리 법칙을 강제로 지키게 했더니 오류가 사라졌어요",
            "easy2_desc": "연구진은 물리 제약이 적용된 정류 흐름(PC-RF) 모델을 만들어 학습 과정에서 바람의 발산이나 강수량의 음수 값 같은 물리적 오류를 벌칙으로 제어했는데요, 샘플링 후에 투영(Projection) 과정을 한 번 더 거쳐서 질량 보존 오차와 음수 값 문제를 완전히 없애 버렸어요. 그 결과, NVR(음수 값 위반율)과 MCE(질량 보존 오차)를 0으로 만들 수 있었다는 겁니다. 다만, 이렇게 물리 법칙을 지키게 해도 기존 모델과 비교했을 때 화질이나 수치적 성능 지표에서 눈에 띄는 이득은 없었다고 연구진은 밝혔어요.",
            "topic": "기후 데이터 축소 모델에서 물리 법칙을 준수하기 위한 제약 조건과 투영 기법의 효과를 분석했어요.",
            "one_line": "기후 데이터 축소 모델에 물리 제약과 투영 기법을 적용해 물리적 오류를 제거했어요.",
            "topic_tag": "기타",
            "limit": "발산 연산자의 부호 오류로 인해 해당 벌칙이 변형과 유사한 항에 작용하는 문제가 있었어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.22281",
          "title": "SeasonRainBench: Global Seasonal Precipitation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22281"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.22278",
          "title": "DACE: Diversity-Driven Adversarial Co-Evolution for Robust LLM Safety Alignment",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22278"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "공격은 날로 교묘해지는데 방어는 자꾸 구멍이 생기거든요",
            "easy1_desc": "거대 언어 모델(LLM)의 안전성을 지키려고 애쓰고 있지만, 공격자가 계속 새로운 방식을 들고나오니 기존의 데이터 기반 방어 체계로는 한계가 있다는 거예요. 공격자가 특정 방식에만 매몰되는 '전략 붕괴'가 일어나거나, 방어 모델이 과거의 공격법을 잊어버리는 '적대적 망각' 현상이 나타나기 때문인데요. 쉽게 말하면, 공격은 진화하는데 방어는 예전 공격에만 머물러 있거나 새로운 공격에 제대로 대응하지 못하는 상황인 겁니다.",
            "easy2_title": "공격 전략을 다양하게 만들고 방어 모델도 똑똑하게 고쳤어요",
            "easy2_desc": "연구진은 DACE라는 새로운 틀을 만들어 공격과 방어의 고질적인 문제들을 동시에 해결해 봤는데요. 공격자에게는 위험 유형과 공격 방식을 2차원으로 나누어 더 넓은 범위를 탐색하게 만들었고, 방어 모델은 베이지안 기반의 재학습 풀을 통해 과거와 현재의 공격을 골고루 기억하도록 설계했어요. 이렇게 했더니 모델이 새로운 공격에도 더 잘 버티면서도 원래 가진 능력은 그대로 유지하는 결과를 얻었다는 겁니다.",
            "topic": "거대 언어 모델의 안전성을 높이기 위해 공격과 방어의 공동 진화 과정을 개선한 DACE 프레임워크에 관한 연구예요.",
            "one_line": "공격과 방어의 공동 진화 과정을 개선해 LLM의 안전성을 높였어요.",
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
            "evidence_by_symbols": 5,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 안전·평가",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.22263",
          "title": "Fidelity Regret: Measuring Simulator Misspecification in Verifiable Design",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22263"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시뮬레이터가 알려준 결과가 실제와 다를 수 있다는 게 문제였어요",
            "easy1_desc": "강화학습 기반의 검증(RLVF)에서는 검증기가 우리가 원하는 값을 제대로 평가한다고 가정하는데요, 유전자 회로 설계처럼 시뮬레이터에 의존해야 하는 분야에서는 이 가정이 항상 들어맞지는 않거든요. 연구진이 21,362개의 설계 조합을 직접 측정해 봤더니, 시뮬레이터가 고른 설계가 실제 성능과는 차이를 보이는 '충실도 후회(fidelity regret)' 현상이 거의 모든 경우에서 나타났습니다. 쉽게 말하면, 시뮬레이터상으로는 완벽해 보여도 실제 물리적 환경에서는 성능이 떨어질 수 있다는 겁니다.",
            "easy2_title": "시뮬레이터와 실제 성능 사이의 간극을 측정하고 줄이는 방법을 찾았어요",
            "easy2_desc": "그래서 연구진은 시뮬레이터가 선택한 설계와 실제 성능 사이의 차이를 수치화하는 '충실도 후회'라는 개념을 도입했는데요, 이를 통해 설계 과정에서 시뮬레이터의 오류를 미리 감지할 수 있게 된 겁니다. 특히 예산의 0.34를 재평가에 사용하는 고정 규칙을 적용했더니, 시뮬레이터만 사용했을 때보다 성능이 훨씬 개선되는 결과를 보였습니다. 결과적으로 시뮬레이터나 디지털 트윈을 활용하는 모든 작업에서 검증기를 통과하더라도 실제 목표 성능이 낮을 수 있다는 점을 경고하고, 이를 보완할 틀을 제시한 셈이에요.",
            "topic": "시뮬레이터 기반 설계에서 발생하는 검증기와 실제 성능 간의 불일치를 측정하고 이를 완화하는 방법론을 제안했어요.",
            "one_line": "시뮬레이터 기반 설계의 오류를 측정하고 보완하는 틀을 제시했어요.",
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
          "canon_id": "2611.22252",
          "title": "A Visual Information Extraction System Using Multimodal Large Language Models for Scanned Cognitive and Behavioral Assessments",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22252"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "종이 서류에 적힌 환자 정보를 일일이 옮기기 너무 힘들었어요",
            "easy1_desc": "병원에서 환자를 진료할 때 종이로 된 인지 기능 검사지를 많이 쓰는데요, 사람이 직접 손으로 쓴 글씨나 스캔할 때 생기는 노이즈 때문에 이 데이터를 디지털로 옮기는 작업이 매우 까다로웠거든요. 기존에는 사람이 일일이 수작업으로 입력해야 해서 시간과 비용이 많이 드는 문제가 있었어요. 쉽게 말하면, 종이에 갇힌 귀한 의료 데이터를 활용하기가 무척 어려웠다는 말이에요.",
            "easy2_title": "멀티모달 AI를 써서 서류 정보를 자동으로 뽑아내게 만들었어요",
            "easy2_desc": "연구진은 멀티모달 거대언어모델(LLM)을 활용해 스캔한 서류에서 자동으로 정보를 추출하는 시스템을 개발했는데요, 서류 종류를 먼저 분류하고 그에 맞는 항목과 점수를 뽑아내는 두 단계 방식을 썼거든요. 특히 두 모델의 결과가 다를 때만 사람이 확인하는 '인간 개입(human-in-the-loop)' 설계를 도입해서 정확도는 높이고 수작업은 줄였어요. 결과적으로 수작업 대비 처리 시간은 10에서 20배, 비용은 12배 넘게 줄였다고 연구진은 주장했습니다.",
            "topic": "스캔된 종이 의료 서류에서 멀티모달 거대언어모델을 활용해 데이터를 자동으로 추출하는 시스템을 제안했어요.",
            "one_line": "멀티모달 LLM으로 종이 의료 서류 데이터를 자동 추출하는 시스템을 개발했어요.",
            "topic_tag": "의료·바이오",
            "limit": "손으로 그린 그림이 모호할 경우 모델의 추출 정확도에 한계가 있을 수 있다는 점을 확인했어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.22238",
          "title": "Context Has a Price: Adding and Removing Context for LLM Coding Agents under Prefix Caching",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22238"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "코딩 에이전트가 문맥을 많이 넣으면 무조건 좋을까요",
            "easy1_desc": "코딩 에이전트가 언어 모델에 대화 기록을 계속 보내면서 코드를 추가하거나 오래된 도구 출력값을 지우는 식으로 문맥을 관리하는데요, 이런 변화가 실제로 문제를 해결하는 비용을 줄여주는지 확인해 봤습니다. 2만 번 넘게 실험해 봤더니, 코드를 추가하면 검색 명령은 18~34% 줄어들지만, 캐시된 입력 비용이 일반 입력의 10분의 1일 때 전체 비용은 오히려 33~42% 늘어나는 것으로 나타났거든요. 결국 문맥을 추가해도 문제 해결 성능이 눈에 띄게 좋아지지는 않았다는 말이에요.",
            "easy2_title": "문맥을 줄여도 비용이 오히려 늘어날 수 있어요",
            "easy2_desc": "오래된 관찰 기록을 지워서 프롬프트를 짧게 만들면 비용이 줄어들 것 같지만, 실제로는 상황에 따라 다르다는 게 연구진의 설명이에요. 캐시 할인이 없을 때는 비용이 19~36% 절감되기도 하지만, 10분의 1 가격의 캐시 환경에서는 오히려 비용이 38~116%까지 늘어날 수 있거든요. 프롬프트가 짧아진다고 무조건 비용이 싸지는 건 아닌데, 에이전트가 더 많은 단계를 거쳐서 응답할 수도 있기 때문이라는 겁니다.",
            "topic": "코딩 에이전트의 문맥 관리 방식이 토큰 가격과 에이전트의 행동에 따라 전체 비용에 어떤 영향을 미치는지 분석했어요.",
            "one_line": "코딩 에이전트의 문맥 관리 방식이 비용에 미치는 영향을 2만 번 이상의 실험으로 분석했어요.",
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
              "10"
            ],
            "format": [
              "one_line 51자"
            ],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.22234",
          "title": "The Fragility of Reasoning-Importance Attribution for Pruning Language Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22234"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "추론 모델을 압축할 때 쓰는 중요도 측정법이 사실은 불안정해요",
            "easy1_desc": "언어 모델을 압축할 때 어떤 부분이 중요한지 알아내려고 '기여도 분석'이라는 방식을 쓰는데요, 이게 추론 능력을 해치지 않고 모델을 줄이는 데 효과적이라고 알려져 왔거든요. 그런데 연구진이 4개의 작은 추론 모델을 직접 테스트해 봤더니, 이 중요도를 측정하는 방식 자체가 사실은 매우 불안정하다는 걸 밝혀냈습니다. 쉽게 말하면, 모델이 중요한 부분을 제대로 짚어내지 못하고 엉뚱한 곳을 중요하다고 판단할 위험이 크다는 거예요.",
            "easy2_title": "측정 방식을 바꾸니 모델 성능이 훨씬 잘 유지되더라고요",
            "easy2_desc": "연구진은 기존 방식이 왜 문제인지 세 가지 이유를 들어 설명했는데요, 특히 최종 답안 토큰만 보고 중요도를 매기면 성능이 크게 떨어진다는 점을 확인했습니다. 대신 추론 과정의 토큰을 보고, 아주 작은 단위가 아닌 100개 정도의 뉴런 그룹 단위로 중요도를 따져야 결과가 안정적이라는 사실을 찾아냈거든요. 결과적으로 추론 토큰을 기준으로 삼고 더 굵직한 단위로 측정해야 모델 성능을 제대로 지킬 수 있다는 겁니다.",
            "topic": "언어 모델의 추론 능력을 보존하며 압축하기 위해 사용하는 중요도 측정 방식의 한계와 개선안을 다루고 있습니다.",
            "one_line": "추론 모델 압축 시 중요도 측정 방식의 문제점을 분석하고 개선 규칙을 제시했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "증류를 통해 중요도가 집중되는 현상이 가지치기 비용을 예측할 수 있다는 가설을 세웠으나, 실험 설계상 집중도와 규모가 섞여 있어 결론을 내리지 못했습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
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
            "limit_ok": true,
            "show_limit": true
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.22179",
          "title": "RAG in a Trenchcoat: When Minimal Memory Is Enough for Agentic Systems, and When It Isn't",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22179"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.22178",
          "title": "CorrectCast: Selective Multimodal Context for Scale-Aware Residual Correction in Precipitation Nowcasting",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22178"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.22177",
          "title": "The Only Edge Was Memorized in Training: LLM Trading Agents Around Earnings and Bad News",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22177"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "뉴스 보고 주식 거래하는 AI가 정말 돈을 벌 수 있을까",
            "easy1_desc": "거대언어모델(LLM)을 활용한 주식 거래 에이전트가 뉴스에 반응해 수익을 낼 수 있는지 확인해 봤는데요, 사실 뉴스가 나오면 몇 분 안에 주가에 바로 반영되기 때문에 단순히 뉴스만 보고는 수익을 내기 어렵다는 게 밝혀졌어요. 기존 연구들은 실적 발표나 악재 이후의 상황을 제대로 다루지 못했다는 한계가 있었거든요. 그래서 이번 연구에서는 실적 발표 전과 악재 발생 후라는 구체적인 시점에 AI가 실제로 수익을 낼 수 있는지 검증해 본 겁니다.",
            "easy2_title": "AI가 똑똑한 게 아니라 학습 데이터를 외우고 있었던 거예요",
            "easy2_desc": "다양한 모델을 가져와서 단순한 규칙이나 통계적 방법과 비교해 봤더니, 놀랍게도 그 어떤 AI 에이전트도 단순한 투자 전략을 이기지 못했어요. AI가 수익을 낸 것처럼 보이는 경우도 알고 보니 학습 과정에서 이미 외우고 있던 정보를 활용한 것뿐이었거든요. 실제로 학습 시점 이전과 이후의 성과를 비교해 보니, 학습 데이터에 포함된 정보가 있을 때만 성과가 좋았다는 말이에요. 결국 AI가 스스로 판단해서 수익을 낸 게 아니라는 겁니다.",
            "topic": "LLM 기반 주식 거래 에이전트가 실적 발표와 악재 상황에서 실제로 수익을 창출할 수 있는지에 대한 성능 평가예요.",
            "one_line": "LLM 주식 거래 에이전트가 실적 발표와 악재 상황에서 수익을 낼 수 있는지 검증했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "연구진은 AI 에이전트 개발자들이 모델을 평가할 때 반드시 학습 데이터 차단 시점 이후의 데이터를 사용해 블라인드 테스트를 수행해야 한다고 밝혔어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.22174",
          "title": "Reconfiguring Procedural Knowledge for Compositional Robot Skill Adaptation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22174"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇이 새로운 일을 배울 때 처음부터 다시 가르칠 필요가 없어요",
            "easy1_desc": "요즘 범용 행동 모델은 학습 과정에서 이미 방대한 절차적 지식을 가지고 있는데요, 새로운 목표가 주어졌을 때 아예 처음부터 배우는 게 아니라 기존에 알고 있던 기술들을 다시 조합해서 해결할 수 있다는 거예요. 연구진은 이를 재구성 가능성이라고 불렀는데, 적은 정보만으로도 기존 기술의 구성 요소와 관계를 효율적으로 재배치해 새로운 행동을 만들어내는 능력이라는 말이에요. 쉽게 말하면, 로봇이 가진 지식을 레고 블록처럼 다시 조립해서 새로운 상황에 대응하는 셈이에요.",
            "easy2_title": "RecPo라는 틀을 써서 기존 기술을 조합해 새 작업을 수행해요",
            "easy2_desc": "연구진은 RecPo라는 프레임워크를 제안했는데, 기술을 작업에 얽매이지 않게 여러 관점으로 저장해 두었다가 필요할 때 꺼내 쓰는 방식이에요. 로봇이 작업을 수행할 때 저장된 기술 간의 연결 고리를 조합해서 실행 가능한 순서를 만들어내거든요. 이렇게 하면 별도의 재학습 없이도 로봇이 새로운 작업을 바로 수행할 수 있다는 장점이 있는데, 대신 로봇이 가진 기존 지식을 얼마나 잘 구조화하느냐가 중요해진다는 겁니다.",
            "topic": "로봇이 기존에 학습한 기술을 재구성하여 새로운 작업에 효율적으로 적응하게 만드는 RecPo 프레임워크에 관한 연구예요.",
            "one_line": "기존 로봇 기술을 재구성하는 RecPo 프레임워크를 개발했어요.",
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
          "canon_id": "2611.22171",
          "title": "Readie: Low-Latency Code Sandboxes for AI Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22171"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 에이전트가 코드를 실행할 때마다 시작이 너무 느렸거든요",
            "easy1_desc": "AI 에이전트가 스스로 코드를 짜고 실행하는 과정에서, 외부 시스템인 코드 샌드박스를 이용해 코드를 돌리곤 하는데요. 문제는 이 샌드박스를 처음 띄우는 데 시간이 너무 오래 걸린다는 점이에요. 기존 방식들은 미리 만들어 둔 이미지나 스냅샷을 쓰는데, 이게 너무 무겁거나 필요한 라이브러리들을 다 담지 못해서 생기는 문제거든요. 쉽게 말하면, 코드를 실행할 준비를 하는 과정 자체가 병목 현상을 일으키고 있는 셈이에요.",
            "easy2_title": "여러 개의 가벼운 스냅샷을 학습시켜서 실행 속도를 확 줄였어요",
            "easy2_desc": "그래서 연구진은 'Readie'라는 시스템을 제안했는데, 하나의 거대한 스냅샷 대신 여러 개의 작고 가벼운 스냅샷을 학습시켜 사용하는 방식이에요. 각 스냅샷은 특정 코드 유형에 최적화되어 빠르게 실행되는데, 이들을 조합하면 거의 모든 작업 범위를 커버할 수 있거든요. 이걸 15,000개의 스크립트로 학습해 봤더니, 기존 방식보다 시작 속도는 최대 22배, 전체 실행 시간은 최대 3.3배까지 빨라졌다고 해요. 저장 공간은 그대로 쓰면서 효율만 높인 결과라는 겁니다.",
            "topic": "AI 에이전트의 코드 실행 환경인 샌드박스에서 발생하는 지연 시간을 줄이기 위해 학습 기반의 스냅샷 최적화 기법을 제안했어요.",
            "one_line": "AI 에이전트의 코드 실행 속도를 높이려 학습 기반 스냅샷 시스템을 개발했어요.",
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
          "canon_id": "2611.22169",
          "title": "Not All Evidence Is Admissible: Evidence Governance for Tool-Augmented Medical Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22169"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "의료 AI가 도구의 잘못된 정보를 그대로 믿어 버리는 문제",
            "easy1_desc": "의료용 AI 에이전트가 도구에서 나온 결과물을 무조건 증거로 받아들이는 기본 설정이 문제라는 겁니다. 도구가 조용히 오류를 일으켜도 AI는 이를 걸러내지 못하고 문맥에 포함해 버리는데요, 이 때문에 원래 맞힐 수 있었던 문제까지 틀리게 되는 현상을 연구진은 증거 납치라고 불렀습니다. 쉽게 말하면 AI가 도구의 나쁜 정보에 휘둘려 판단력을 잃는 셈이에요.",
            "easy2_title": "도구 결과물을 미리 검사해서 골라내는 새로운 체계 도입",
            "easy2_desc": "연구진은 도구의 결과물을 증거로 쓸지 말지 따로 결정하는 증거 거버넌스 체계를 제안했는데요, 도구의 출력을 카드 형태로 만들고 독립된 검사기가 원본 입력과 비교해 증거로 쓸 것만 골라내는 방식이에요. 이렇게 하면 AI가 검증된 정보만 보고 답을 내릴 수 있게 되거든요. 기존 모델보다 더 적은 비용으로 높은 정확도를 보여주면서도, 별도의 추가 학습이 필요 없다는 장점이 있습니다.",
            "topic": "의료 AI 에이전트가 도구의 결과물을 선별적으로 수용하여 판단 정확도를 높이는 증거 거버넌스 프레임워크에 관한 연구예요.",
            "one_line": "의료 AI가 도구의 정보를 선별적으로 수용하도록 증거 거버넌스 체계를 구축했어요.",
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
          "canon_id": "2611.22148",
          "title": "Long-Context Generation Is a Sampling Problem (When You Turn Up the Heat)",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22148"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "언어 모델이 길게 말할수록 멍청해지는 이유",
            "easy1_desc": "공개된 언어 모델들은 글을 길게 생성할수록 성능이 떨어진다는 문제가 있는데요, 보통은 학습을 더 시켜서 해결하려고 합니다. 하지만 연구진은 이게 학습의 문제가 아니라 다음 단어를 선택하는 규칙인 샘플러(sampler)의 문제라고 봤거든요. 온도가 높아질 때 샘플러가 낮은 확률의 단어까지 무분별하게 선택하면 결국 생성 품질이 무너진다는 겁니다.",
            "easy2_title": "샘플러의 후보군을 좁게 유지하니 성능이 살아났어요",
            "easy2_desc": "연구진은 온도가 높아져도 선택 가능한 단어 후보군을 작고 일정하게 유지하는 새로운 샘플러인 top-nsigma를 제안했는데요, 이를 적용했더니 기존 샘플러들이 무너지는 상황에서도 성능을 유지했다고 주장했습니다. 실제로 온도가 2일 때 기존 방식은 코딩 과제를 하나도 해결하지 못했지만, top-nsigma는 46에서 62개까지 해결했거든요. 쉽게 말하면, 모델이 헛소리를 하지 않도록 선택지를 똑똑하게 제한하는 게 핵심이라는 겁니다.",
            "topic": "언어 모델의 긴 문맥 생성 성능 저하가 샘플링 전략과 후보군 크기에 따른 문제임을 규명하고 이를 해결할 방안을 제시했어요.",
            "one_line": "긴 문맥 생성 시 샘플러의 후보군 크기를 제한해 성능 저하를 해결했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.22131",
          "title": "LoCaR: Localized Canvas Retrieval With Frozen Vision-Language Model",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22131"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "전체 이미지만 보면 작은 물체를 놓치기 쉽거든요",
            "easy1_desc": "기존의 인공지능 모델들은 이미지 전체를 하나의 덩어리로 처리하는데요, 그러다 보니 사진 속 작은 물체나 세부적인 특징을 제대로 구분하지 못하는 문제가 생깁니다. 전체 정보에 묻혀서 정작 중요한 부분은 흐릿하게 처리되는 셈이에요. 쉽게 말하면, 큰 그림만 보느라 정밀한 검색이 안 된다는 말이에요.",
            "easy2_title": "이미지를 조각내서 검색하니 훨씬 정확해졌어요",
            "easy2_desc": "연구진은 LoCaR이라는 틀을 만들어 이미지를 조각별로 나누어 분석하는 방식을 도입했는데요, SAM2라는 기술로 물체 중심의 영역을 따로 떼어내어 각각의 특징을 인코딩하는 방식이에요. 기존 모델을 수정하지 않고도 검색 성능을 높일 수 있다는 장점이 있는데, 추가로 예시 문장을 활용하는 적응 기법도 덧붙였거든요. 결과적으로 영역 자체의 표현력을 높이는 것이 성능 향상의 핵심이라고 연구진은 밝혔습니다.",
            "topic": "고정된 시각-언어 모델을 활용하여 이미지 내 특정 영역을 정밀하게 검색하는 LoCaR 프레임워크를 제안했어요.",
            "one_line": "영역별로 이미지를 분석해 검색 정확도를 높이는 LoCaR을 개발했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.22103",
          "title": "From Sorry to QED: Refining LLM Math Proofs via Angelic Execution",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22103"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "거대언어모델이 쓴 수학 증명은 왜 자꾸 막힐까",
            "easy1_desc": "거대언어모델(LLM)이 수학 증명 스크립트를 짜면 전체적인 흐름은 잘 잡는데, 사소한 조건 하나만 틀려도 증명기 전체가 멈춰 버리는 문제가 생기거든요. 이게 왜 문제냐면, 증명 과정에서 아주 작은 부분만 어긋나도 전체를 다 버려야 해서 효율이 너무 떨어진다는 거예요. 쉽게 말하면, 큰 그림은 잘 그리는데 세부적인 계산에서 자꾸 발목이 잡히는 셈이에요.",
            "easy2_title": "틀린 부분만 쏙 골라내서 사람 도움을 최소화했어요",
            "easy2_desc": "연구진은 MathEye라는 틀을 만들어 이 문제를 해결했는데요, 증명하다 막히는 부분을 일단 빈칸으로 두고 전체 구조를 유지하는 천사적 증명 검사(angelic proof checking) 방식을 썼어요. 이렇게 하면 모델이 못 푼 핵심 문제만 딱 골라낼 수 있는데, 이걸 수학자에게 물어보고 그 답을 바탕으로 전체 증명을 완성하는 방식이에요. 덕분에 사람이 일일이 모든 과정을 다 손볼 필요가 없어서, 실제 30개 문제에서 성공률 93.3%를 보였고 사람의 개입도 55%나 줄였다고 주장했어요.",
            "topic": "MathEye는 기호 추론과 인간의 상호작용을 결합하여 불완전한 LLM 증명 스크립트를 검증된 Lean 증명으로 변환하는 프레임워크입니다.",
            "one_line": "MathEye를 통해 LLM의 불완전한 수학 증명을 검증된 증명으로 자동 변환했어요.",
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
          "canon_id": "2611.22102",
          "title": "EvoDisco: Strategy Discovery for Evolving Agent Memory",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22102"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존의 에이전트 기억 관리 방식은 정해진 규칙만 따랐거든요",
            "easy1_desc": "대규모 언어 모델(LLM) 기반의 에이전트들은 경험을 기억으로 쌓아가는데, 이때 기억을 어떻게 다듬고 변화시킬지가 매우 중요합니다. 그런데 기존 방식들은 기억을 바꾸는 연산자나 그 규칙이 설계 단계부터 고정되어 있다는 한계가 있었거든요. 뭔 소리냐면, 상황에 맞춰 유연하게 기억을 관리하지 못하고 정해진 틀 안에서만 움직였다는 말이에요.",
            "easy2_title": "기억 관리 전략을 스스로 찾아내는 에이전트를 만들었어요",
            "easy2_desc": "연구진은 에이전트가 기억을 어떻게 바꿀지 스스로 전략을 찾아내는 에보디스코(EvoDisco)를 제안했습니다. 이 모델은 기억 상태와 최근 작업 이력을 보고 추상화나 재구성 같은 네 가지 연산자 중 하나를 골라 기억을 능동적으로 관리하는데요, 덕분에 고정된 일정에 따라 기억을 바꾸던 이전 방식보다 훨씬 효율적이라는 겁니다. 실제로 ALFWorld 같은 환경에서 기존 모델인 MemP나 MemRL보다 더 높은 성능을 보였다고 밝혔어요.",
            "topic": "에이전트의 기억 진화를 위한 전략 탐색 프레임워크인 에보디스코(EvoDisco)의 설계와 성능에 관한 연구입니다.",
            "one_line": "기억 관리 전략을 스스로 탐색하는 에보디스코 모델을 개발했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.22084",
          "title": "When Lower Harm Misleads: Auditing Concept Corrections",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22084"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "모델의 교정 성능을 단순히 피해 수치로만 판단하면 안 되는 이유",
            "easy1_desc": "유방 초음파 진단처럼 전문가가 모델의 개념 예측을 수정해 줄 때, 우리는 당연히 진단 결과가 더 좋아질 거라고 기대하거든요. 그런데 모델이 수정을 아예 무시하거나 원래 예측값이 나빴을 때도 피해 수치(harm)는 낮게 나올 수 있다는 게 문제예요. 즉, 피해가 줄었다고 해서 모델이 똑똑해진 건지, 아니면 그냥 반응을 안 한 건지 구분하기 어렵다는 말이에요.",
            "easy2_title": "피해와 유용성을 분리해서 평가하는 새로운 감사 프로토콜을 제안했어요",
            "easy2_desc": "연구진은 이런 혼란을 막기 위해 교정 감사(correction audit)라는 새로운 평가 방식을 제안했는데요. 이 방식은 수정을 피해와 유용한 이득으로 나누고, 시작점과 반응을 분리해서 모델의 진짜 성능을 따져보는 거예요. 이렇게 분석해 봤더니, 단순히 피해 수치만 낮추려고 하면 오히려 모델의 유용한 정보가 줄어드는 단점이 있다는 걸 확인했거든요. 결국 피해 수치는 유용한 이득이나 시작점과 함께 읽어야만 제대로 된 평가가 가능하다는 겁니다.",
            "topic": "모델의 개념 교정 성능을 평가할 때 피해 수치와 유용성을 분리하여 분석하는 새로운 감사 프로토콜을 제안하고 그 효과를 검증했어요.",
            "one_line": "모델의 개념 교정 성능을 정확히 평가하는 감사 프로토콜을 제안했어요.",
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
          "canon_id": "2611.22075",
          "title": "Can You Undo It? Reversibility Classes for AI Agent Actions",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22075"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 도구를 쓰다 실수하면 되돌릴 수 있을까",
            "easy1_desc": "AI 에이전트가 파일이나 데이터베이스를 수정할 때, 그 행동을 나중에 취소할 수 있는지 판단하는 기준이 없다는 게 문제였는데요. 도구 사용 권한이 있다고 해서 실수를 되돌릴 수 있다는 뜻은 아니거든요. 그래서 연구진은 AI가 도구를 쓰기 전에 행동의 가역성(되돌릴 수 있는 성질)을 미리 파악해야 한다고 본 겁니다.",
            "easy2_title": "행동의 가역성을 다섯 단계로 분류해 안전하게 관리했어요",
            "easy2_desc": "연구진은 행동의 가역성을 다섯 단계로 나누고, 상황에 맞는 규칙과 이전 상태를 저장하는 계약을 도입했는데요. 20개의 MCP 서버에서 536개 도구를 대상으로 테스트해 보니, 공격적인 행동 29건을 모두 차단하는 성과를 보였어요. 다만, 안전한 행동 1,209건 중 9건에서 추가 승인을 요구하는 번거로움이 생기기도 했다는 겁니다.",
            "topic": "AI 에이전트가 수행하는 도구 사용 행동의 가역성을 체계적으로 분류하고 이를 검증하는 프레임워크를 제안했어요.",
            "one_line": "AI 행동의 가역성을 분류하고 검증하는 체계를 구축했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "이 연구가 전체 레지스트리의 정확성이나 실제 운영 환경에서의 피해 감소, 일반적인 복구 신뢰성을 보장하는 것은 아니라고 밝혔어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.22069",
          "title": "MedGuardBench: A Patient-Oriented Benchmark for Personalized Guardrail Development",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22069"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "환자마다 다른 약물 안전을 고려하지 못하는 기존의 한계",
            "easy1_desc": "기존의 안전 장치들은 환자가 누구인지 고려하지 않고 콘텐츠의 안전성만 판단하는 문제가 있었는데요. 약물 안전을 예로 들면, 한 사람에게는 안전한 처방이 다른 사람에게는 위험할 수도 있는데도 이를 구분하지 못한다는 거예요. 연구진은 현재의 안전 장치들이 환자의 실제 상태보다는 단순히 문구 같은 겉모습에만 의존하고 있다고 지적했습니다. 쉽게 말하면, 환자 개개인의 특성을 무시하고 일괄적인 잣대를 들이대고 있다는 말이에요.",
            "easy2_title": "환자 정보를 직접 따져보는 개인 맞춤형 안전 장치 개발",
            "easy2_desc": "그래서 연구진은 환자의 프로필과 처방 정보를 바탕으로 안전 여부와 17가지 위험 범주를 예측하는 개인 맞춤형 안전 장치를 개발했는데요. 환자 정보를 스스로 확인하게 하는 맥락 펼치기 기술을 도입해 불필요한 경고를 줄였고, 규칙 기반 보상을 통해 알레르기 같은 복잡한 위험도 더 잘 찾아내도록 만들었습니다. 성능을 확인해 보니 기존 모델보다 정확도가 높고 불필요한 경고도 줄어든 것으로 나타났거든요. 다만, 모델에 따라서는 오히려 잘못된 경고가 늘어나는 경우도 있어 성능 차이가 있다는 점도 확인했습니다.",
            "topic": "환자 개인의 정보를 바탕으로 약물 안전성을 평가하고 위험을 탐지하는 맞춤형 안전 장치 벤치마크와 모델에 관한 연구예요.",
            "one_line": "환자 정보를 활용한 약물 안전 평가 벤치마크와 맞춤형 안전 장치를 개발했어요.",
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
              "5001"
            ],
            "format": [],
            "flags": [],
            "tag": "의료·바이오",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.22030",
          "title": "What Does an Agent Need? Bundle-Aware Agent Resource Composition",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22030"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 에이전트가 어떤 도구를 써야 할지 고르기가 어려웠거든요",
            "easy1_desc": "AI 에이전트가 작업을 수행할 때 어떤 모델과 도구를 조합해야 가장 효율적인지 미리 알기가 어려웠다는 게 문제였어요. 기존 방식은 학습된 목록에만 묶여 있거나, 도구 간의 상호보완성을 고려하지 않고 따로따로 점수를 매기는 데 그쳤거든요. 쉽게 말하면, 에이전트가 상황에 딱 맞는 도구 세트를 스스로 구성하는 데 한계가 있었다는 말이에요.",
            "easy2_title": "작업에 맞춰 도구 꾸러미를 조합하는 새로운 방법을 만들었어요",
            "easy2_desc": "연구진은 작업 조건에 따라 모델과 도구 꾸러미를 한꺼번에 선택하는 에이전트 리소스 구성 방식을 제안했는데요, 과거의 성공 사례를 참고해 새로운 도구도 재학습 없이 바로 조합할 수 있게 만들었어요. 이 방식을 썼더니 기존 방식보다 성능이 훨씬 좋아졌거든요. 결과적으로 에이전트가 더 높은 실행 점수를 기록하며 작업을 더 잘 수행하게 되었다는 겁니다.",
            "topic": "작업 경험을 바탕으로 AI 에이전트의 모델과 도구 꾸러미를 최적으로 조합하는 방법을 연구했어요.",
            "one_line": "작업 경험을 활용해 AI 에이전트의 모델과 도구 조합을 최적화했어요.",
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
          "canon_id": "2611.22017",
          "title": "SkillBuffBench: Measuring What Agent Skills Contribute across Harnesses, Models, Skill Access Modes and Memory",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22017"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "코딩 에이전트가 기술을 얼마나 잘 쓰는지 제대로 검증한 적이 없었어요",
            "easy1_desc": "지금까지는 사람이 직접 알맞은 기술을 골라주거나 에이전트가 아무것도 없는 상태에서 시작하는 환경에서만 기술의 효과를 측정해 왔거든요. 그런데 실제 현장에서는 에이전트가 설치된 라이브러리 중에서 스스로 기술을 선택해야 하고, 이전 작업의 기억까지 가지고 움직여야 합니다. 즉, 기존의 평가 방식은 실제 배포 환경과는 거리가 멀었다는 말이에요.",
            "easy2_title": "실제 환경을 반영한 새로운 평가 도구인 SkillBuffBench를 만들었어요",
            "easy2_desc": "연구진은 기술 접근 방식과 기억 유무, 그리고 다양한 모델과 에이전트 환경을 조합해 성능을 측정하는 SkillBuffBench라는 벤치마크를 제안했습니다. 이 도구는 재료 과학과 생물학 분야의 실제 연구 과제를 사용하며, 결정론적 검증기를 통해 결과를 평가하고 비용과 시간까지 상세히 기록하도록 설계되었거든요. 덕분에 에이전트가 기술을 얼마나 효과적으로 활용하는지 훨씬 더 현실적으로 파악할 수 있게 된 셈이에요.",
            "topic": "코딩 에이전트의 기술 활용 능력을 다양한 환경과 모델 조건에서 체계적으로 측정하기 위한 벤치마크인 SkillBuffBench를 설계하고 평가 프로토콜을 제안했어요.",
            "one_line": "코딩 에이전트의 기술 활용 능력을 측정하는 벤치마크를 설계했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "현재 평가가 진행 중이며, 모든 실행이 완료된 후에야 최종 결과와 분석이 추가될 예정입니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
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
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.22010",
          "title": "On Formal Counterfactual Explanations",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.22010"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "반사실적 설명이 왜 계산하기 까다로웠는지 따져봤어요",
            "easy1_desc": "반사실적 설명(Counterfactual explanations)은 보통 가장 가까운 가상의 상황을 모두 따져봐야 해서 계산이 복잡했거든요. 반면 기존의 형식적 설명 기법인 AXp나 CXp는 계산이 효율적이라는 장점이 있어요. 연구진은 이 두 관점 사이의 연결 고리를 찾아내서, 복잡한 반사실적 설명을 더 쉽게 다룰 수 있는 이론적 토대를 마련한 셈이에요.",
            "easy2_title": "새로운 설명 방식인 CFXp를 도입해 계산 효율을 높였어요",
            "easy2_desc": "연구진은 예측 결과를 바꾸는 특징들의 조합인 CFXp(Conjunctive counterfactual explanations)라는 개념을 새로 제안했는데요. 기존의 AXp나 CXp를 활용해 CFXp를 계산하는 모듈식 접근법을 개발한 겁니다. 실제로 트리 앙상블이나 신경망 모델에 적용해 봤더니, 기존 방식보다 효율적이면서도 특정 사례를 넘어선 예측 변화까지 보장할 수 있다는 점을 확인했어요.",
            "topic": "반사실적 설명과 기존 형식적 설명 기법인 AXp, CXp 사이의 구조적 관계를 규명하고 이를 활용한 새로운 설명 방식인 CFXp를 제안했어요.",
            "one_line": "반사실적 설명과 기존 기법을 연결해 효율적인 CFXp 추출 방식을 제안했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.21937",
          "title": "SLED: Sensor SLicing from Edge to Datacenter",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21937"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "센서 데이터가 몰리면서 중요한 신호가 묻히는 문제",
            "easy1_desc": "요즘은 여러 센서에서 쏟아지는 방대한 데이터를 처리하려고 데이터센터와 인공지능(AI)에 크게 의존하고 있는데요. 문제는 센서마다 필요한 네트워크나 연산 자원이 제각각인데, 지금의 무선 시스템은 기기 단위로만 자원을 나눠 준다는 거예요. 그러다 보니 데이터가 한꺼번에 몰릴 때 중요한 실시간 신호가 밀려 버리는 일이 생기거든요. 쉽게 말하면, 덩치 큰 데이터가 길을 막아 정작 급한 신호가 제때 전달되지 못하는 상황인 셈이에요.",
            "easy2_title": "센서별로 길을 따로 내어 지연 시간을 잡았습니다",
            "easy2_desc": "연구진은 센서마다 독립적인 통로를 만들어 주는 센서 슬라이싱(SL) 기술을 도입했는데요. 오픈 무선 접속망(O-RAN) 환경에서 센서별로 매체 접근 제어(MAC) 수준의 격리를 제공해, 다른 데이터의 간섭 없이 안정적으로 신호를 보낼 수 있게 한 거예요. 그 결과, 기존 방식은 트래픽이 몰리면 지연 시간이 2,300배 넘게 늘어났지만, 이 기술을 쓴 SLED는 지연 시간을 안정적으로 유지했다고 해요. 덕분에 센서부터 고성능 컴퓨팅(HPC)까지 이어지는 전체 과정에서 중요한 데이터를 놓치지 않게 된 겁니다.",
            "topic": "센서별로 네트워크 자원을 독립적으로 할당하여 데이터 전송의 지연 시간을 최소화하는 SLED 프레임워크를 제안했습니다.",
            "one_line": "센서별로 네트워크 통로를 분리해 데이터 전송 지연을 막는 SLED를 개발했어요.",
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
          "canon_id": "2611.21885",
          "title": "Language Models Can Rewrite Their Own Weights",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.21885"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-19",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "모델이 스스로 자기 머릿속을 고칠 수 있을까",
            "easy1_desc": "보통 언어 모델은 한 번 학습하고 나면 굳어 버려서, 성능을 높이려면 처음부터 다시 학습하거나 복잡한 추가 장치를 붙여야 하거든요. 연구진은 모델이 스스로 자기 가중치(weights)를 고쳐서 더 똑똑해질 수 있는지 궁금해졌는데요. 학습 과정이나 기울기 계산 없이 오직 모델의 추론 능력만으로 스스로를 수정하는 자기 재작성(self-rewriting) 방식을 시도해 본 겁니다.",
            "easy2_title": "스스로 고친 모델이 이전보다 더 똑똑해졌어요",
            "easy2_desc": "27B 모델에 자기 가중치와 문제 풀이 결과를 주고 스스로 오류를 진단해 고치게 했더니, 처음 보는 문제 490개에서 정확도가 6.6점이나 올랐거든요. 학습 인프라 없이 GPU 한 대만으로도 가능하고, 수정된 가중치가 그대로 남아서 매번 추가 비용이 들지 않는다는 장점이 있어요. 다만 모델 규모가 작으면 오히려 성능이 망가질 수 있는데, 27B 정도의 큰 규모에서만 사람처럼 스스로를 개선하는 능력이 나타났다는 점이 흥미롭습니다.",
            "topic": "언어 모델이 외부 학습 없이 스스로 가중치를 수정하여 성능을 개선하는 자기 재작성 기법의 가능성을 탐구했어요.",
            "one_line": "언어 모델이 스스로 가중치를 수정해 성능을 높이는 방식을 구현했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": true,
          "hf_upvotes": 0,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "입자 물리학에서 새로운 이론을 찾는 게 왜 이렇게 어려운가요",
            "easy1_desc": "표준 모형(SM)과 실제 실험 결과가 다를 때, 이를 설명하기 위해 표준 모형 유효 장 이론(SMEFT)이라는 틀을 사용하거든요. 그런데 이 이론 안에는 고려해야 할 연산자가 너무 많아서 조합의 수가 엄청나게 늘어나는 문제가 생깁니다. 여러 연산자가 동시에 영향을 주고받기도 하고, 서로 다른 조합이 비슷한 결과를 내놓기도 해서 최적의 이론을 찾기가 무척 까다로운 셈이에요. 쉽게 말하면, 너무 많은 경우의 수 때문에 무엇이 진짜 새로운 물리 현상인지 골라내기가 어렵다는 말입니다.",
            "easy2_title": "강화학습을 써서 복잡한 이론 조합을 효율적으로 찾아냈어요",
            "easy2_desc": "연구진은 이 문제를 순차적인 의사결정 과정으로 보고 강화학습(RL)을 도입했는데요, 약 4만 개의 매개변수를 가진 가벼운 구조의 에이전트를 만들었습니다. 이 에이전트는 단순히 하나의 정답만 찾는 게 아니라, 높은 품질을 가진 다양한 이론 가설들을 찾아내도록 설계됐거든요. 실제로 132개의 관측치를 포함한 복잡한 환경에서 실험해 봤더니, 기존의 무작위 탐색 방식보다 훨씬 효율적으로 새로운 물리 현상의 패턴을 찾아냈다는 겁니다.",
            "topic": "강화학습을 활용하여 표준 모형 유효 장 이론(SMEFT)의 방대한 연산자 공간을 체계적으로 탐색하는 방법론을 제안했어요.",
            "one_line": "강화학습을 이용해 SMEFT 연산자 공간을 탐색하는 방법을 개발했어요.",
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
        }
      ],
      "backlog": {
        "n_waiting_all": 150,
        "oldest_day": "2026-11-17",
        "n_dropped_today": 0,
        "n_backlog_done_today": 16
      },
      "sources": [
        {
          "name": "arXiv AI(cs.AI)",
          "field": "cs.AI",
          "got": 109,
          "new_cards": 109
        },
        {
          "name": "arXiv 전력·제어(eess.SY)",
          "field": "eess.SY",
          "got": 29,
          "new_cards": 29
        },
        {
          "name": "허깅페이스 오늘의 논문",
          "field": "허깅페이스",
          "got": 50,
          "new_cards": 36
        }
      ],
      "calls": {
        "summary": {
          "val": 150,
          "source": "v2_secretary/결과/논문/2026-11-19_논문.json"
        },
        "flow": {
          "val": 1,
          "source": "v2_secretary/결과/논문/2026-11-19_논문.json"
        },
        "failed": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-19_논문.json"
        },
        "http429": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-19_논문.json"
        }
      },
      "cap": {
        "val": 150,
        "source": "v2_secretary/결과/논문/2026-11-19_논문.json"
      },
      "secs": {
        "val": 754,
        "source": "v2_secretary/결과/논문/2026-11-19_논문.json"
      },
      "no_ai": false,
      "notes": [
        "1차 출처 몫: eess.SY 43/67 · cs.AI 52/52 · 허깅페이스 33/45 · 이월 22편"
      ],
      "source": "v2_secretary/결과/논문/2026-11-19_논문.json",
      "abstracts": {
        "file": "panel_abstracts.js",
        "n": 186,
        "source": "v2_secretary/결과/논문/초록/2026-11-19.json"
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
        "line_in": "받음: [11월 19일(오늘) 논문] 새벽 바퀴 5-1(0콜)이 모으기 원본(arXiv·허깅페이스)으로 만든 새 논문 카드 170편",
        "line_rule": "규칙: papers.py — 새벽 카드(0콜) → 새벽 바퀴가 끝나면 바로 v2-papers(백업 12:07·14:07)가 점수 순으로 편당 AI 1콜 풀이 + 근거 문장 원문 대조 (gate_rules/논문_설정·주제·키워드.txt)",
        "line_out": "내보냄: 풀이 150편(새 카드 134 + 밀린 카드 16) · 새 카드 중 대기 36편 · AI 151콜(그날 합계) · 논문 파일 마지막으로 쓴 시각 2026-11-19 10:31 (v2_secretary/결과/논문/2026-11-19_논문.json)",
        "metrics": {
          "in": 170,
          "out": 150,
          "calls": 151,
          "secs": 754.0,
          "num_source": "v2_secretary/결과/논문/2026-11-19_논문.json"
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
