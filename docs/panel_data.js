// 자동 생성 파일 (v2_secretary/export_panel.py) — 직접 수정하지 마세요.
window.PANEL_DATA = {
  "schema_version": "2.1.0-panel-v1",
  "day": "2026-11-22",
  "generated_at": "2026-11-22 04:15:13",
  "made_iso": "2026-11-22T04:15:13+09:00",
  "freshness": {
    "lines": [],
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
  "default_wardrobe": "pasteup",
  "marks": {
    "repo": "",
    "got": [],
    "n_got": 0,
    "last_issue": null,
    "source": "v2_secretary/data/marks.jsonl"
  },
  "overview": {
    "in_total": {
      "val": 987,
      "source": "v2_secretary/결과/문앞/2026-11-22_문앞교통정리_길별.json"
    },
    "new_total": {
      "val": 167,
      "source": "v2_secretary/결과/문앞/2026-11-22_문앞교통정리_길별.json"
    },
    "old_seen": {
      "val": 820,
      "source": "v2_secretary/결과/문앞/2026-11-22_문앞교통정리_길별.json"
    },
    "seen_ledger_lines": {
      "val": 11715,
      "source": "v2_secretary/data/seen.jsonl"
    },
    "ai_calls_day": {
      "val": 5,
      "source": "v2_secretary/결과/2026-11-22_하루_전체.md"
    },
    "ai_fails_day": {
      "val": 0,
      "source": "v2_secretary/결과/2026-11-22_하루_전체.md"
    },
    "run_secs": {
      "val": 100,
      "source": "v2_secretary/결과/2026-11-22_하루_전체.md"
    },
    "lanes": {
      "거푸집1": {
        "val": 1,
        "source": "v2_secretary/결과/문앞/2026-11-22_문앞교통정리_길별.json"
      },
      "거푸집2": {
        "val": 3,
        "source": "v2_secretary/결과/문앞/2026-11-22_문앞교통정리_길별.json"
      },
      "뉴스": {
        "val": 148,
        "source": "v2_secretary/결과/문앞/2026-11-22_문앞교통정리_길별.json"
      },
      "제외 보관함": {
        "val": 4,
        "source": "v2_secretary/결과/문앞/2026-11-22_문앞교통정리_길별.json"
      },
      "논문T": {
        "val": 5,
        "source": "v2_secretary/결과/문앞/2026-11-22_문앞교통정리_길별.json"
      },
      "모름": {
        "val": 6,
        "source": "v2_secretary/결과/문앞/2026-11-22_문앞교통정리_길별.json"
      }
    },
    "last_auto_run": {
      "day": "2026-11-22",
      "start": "2026-11-22 04:13:33",
      "by": "github",
      "where": "GitHub",
      "mode": "run",
      "end": "2026-11-22 04:15:13",
      "secs": 100,
      "exit": 0,
      "result_md": true,
      "failed_stages": 0,
      "calls": 5,
      "result": "ok"
    },
    "last_auto_run_source": "v2_secretary/data/auto/runs.jsonl",
    "papers": {
      "day": "2026-11-21",
      "day_label": "11월 21일(어제)",
      "made": "2026-11-21T04:34:47",
      "calls": 151,
      "same_day": false,
      "source": "v2_secretary/결과/논문/2026-11-21_논문.json"
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
          "id": "e261122-01",
          "rank_by_count": 1,
          "name": "손정의 SK하이닉스 인수 검토",
          "easy": "소프트뱅크의 손정의 회장이 1조 달러(약 1346조~1350조 원) 규모로 SK하이닉스를 인수하는 방안을 검토했다고 월가에 문의해 봤더니, 현재는 검토를 중단한 상태라는 겁니다. 뭔 소리냐면, AI 시장을 노리고 거대한 자금을 베팅하려 했지만 실제 성사되지는 않았다는 말이에요. 쉽게 말하면 인수설은 사실로 확인됐지만 팔지도 않을 하이닉스를 통째로 사려던 계획은 멈춰 섰다는 겁니다.",
          "quote": "손정의, ‘1조 달러 베팅’으로 SK하이닉스 인수 타진했었다",
          "member_count": 8,
          "sample_articles": [
            {
              "n": 86,
              "title": "손정의, ‘1조 달러 베팅’으로 SK하이닉스 인수 타진했었다 - 뉴데일리 경제",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMie0FVX3lxTE5jNUhwMXJfR0UtZC1VUVV6dWxSRVBVQU8xMklnWWJCcm9aMUZuSlNMRkRSZUpXYjNpQjUyOTEtcTV3VW1zaHN4NWNTSnJ6OEJudXRGNWV1NlNRYkd3X0c4ektocElBMEJJNlRoQTRfUHl3cUpFWUlRcDNJc9IBgAFBVV95cUxQdU9NN1d1T1dfZU5fblY5OVozWG1sZ1VMUF9DTVNac01IUHJRLUUxMFVaY2FuMEdIeGN5aTRtc2dGb0FqR0lON2VSSWx0YlROclhHTWU1eFZybWdkRHUxMWpKbHlZa1dWcGNJZ2R0eE1rVWhpdjM3V3pvSjBMeU42aA?oc=5"
            },
            {
              "n": 87,
              "title": "“손정의 회장, SK하이닉스 1조달러에 인수 검토” - Chosunbiz",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMihAFBVV95cUxPZFhxQWNnZXpGNEFfVWxnN2prWndYMmpOTmNRUDdWeTI2ZWtfM21iZU9Ra0czQmlpdlRxeVRPaWUtOENwaVFZbjItcjdoSjVscXJXXzBXT2Y3cjdKc25FTGFDcDlSRkI5Q1U3RVpGdFVVQ3NzT0d2ZHVoUHVtUnhkQ01aYUXSAZgBQVVfeXFMT0lwUzhncTQ0aWlxblEyUnpNOTFrbGVLbXhjRDhLdXpPMGZIblk2SlgwTjRrNWZBX2hqV3k0QVNGT3VCbGVreU5RLVhzSWZocDN5bk9FVFRpajVVX05xVmd4b2dTWHlnY1lLY0lSRWRIcTlUN3g0aTNCeUJQYjVQYWd1SDd"
            },
            {
              "n": 88,
              "title": "“손정의 회장, SK하이닉스 1조 달러에 인수하려 했다” - 동아일보",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE9zRnhOeV9aU1hoSm1zWmtxb2VfdnpXejJpTndfM3RpOGs1dU1uYmxqTTdxMUY5Zk5OTjZnQlFBLXVWZ2VFcWpCdUJTRGxSUVpfU2M4V29mbl90VlF2cDF1QS1JbHJJaHQzNVRlQ2g2TllISkXSAWZBVV95cUxQZ2lBMXhTQ0tsbXBRMWNvYmptc01Ia01IWWN5SnU2Z3I1YVVjbHMzdWxDLXlSdjhtcU9iXzV0NWlNeHZ2ZEMydmhhUXY3VFV2Ny13QXNBQjRodWJVVTZvM2w4WWJfd3c?oc=5"
            },
            {
              "n": 89,
              "title": "손정의, SK하이닉스 1346조 원 인수 검토했다…월가에 자금 조달 문의 - 문화일보",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiUEFVX3lxTFBhanptZ2VFZHhBdG5JRXVneU9CSnJjTXRtcHpNc0NFWUVLbWdkTjJYU0xHbUVQcDI0NE5kc1dFa0NxbTFscTFENjh3N0R3RXF3?oc=5"
            },
            {
              "n": 90,
              "title": "“손정의, 1346조원에 SK하이닉스 인수 구상…월가에 자금 조달안 문의” - 매일경제",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5KR01obVFPREJDaS1vd2R6dExOZnBoYTFSZk9JR3Vma2ZXSDRYOW5QSDZNLWQ2d1M2YUREeFlsYjdOd1ZRZmgxY0NOSnBPTlpYZmE1Nl9n?oc=5"
            },
            {
              "n": 91,
              "title": "“소프트뱅크 손정의, 최근 SK하이닉스 1조달러 인수안 검토” - 경향신문",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9vUEFLNjBhZm9jQU5hQktKLXZ3aUZZZ0dua1UtQWE4TGlZc0hPeXRydUhqU0c5M3ZvUXpuQi1FRThPYk1Sb1d0ZUhmWGo5M2ozVnVDcDFaNVV4d9IBX0FVX3lxTE1hZkJWWlBRaTZaY3ZCLWJ5RThDM3VfNGFMN2ZrYXZzZTVRUy11OE8tUWdocTlKMGtpcnpxdjczSjN4UVNDTWE4VGRSLU9fN2ZhQm9IRmtfTFFndmVhWVA4?oc=5"
            },
            {
              "n": 92,
              "title": "손정의, SK하이닉스 1350조원에 인수 검토했다…현재는 검토 중단 - 경북도민일보",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9iazBxdzZRQ3lrMTlxb0R4dzlEUE5hc3NKN01tc0h6MVc2dUZ2RVJCMUxHWmJWRFFzTWlBMWMyUXNvQ005ZG5KNkp1V012RG9QbG5wOXVrT0JNdjdYOG81TlFmNWVxZFpFRUE?oc=5"
            },
            {
              "n": 93,
              "title": "\"SK하닉 통째로 산다\"…AI 노린 손정의 '1350조 계획' 폭로 - 한국경제",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFA3SDEwWTF2Qm1BU2tfN1czYzJEOTYtenlhZmFhaE43c1V0ZFg5a3Q4NmpoWmNySmNIaWhEaTRIU3VOekhqWmdheVpic2VzZ3B1Q1ZnbXc4WjdIUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-02",
          "rank_by_count": 2,
          "name": "한국 수출 1조 달러 돌파",
          "easy": "산업통상부와 관세청에서 밝힌 내용을 확인해 봤더니, 한국의 수출액이 사상 처음으로 1조 달러를 돌파해 독일, 미국, 중국에 이어 세계 4번째로 1조 달러 클럽에 가입했다고 합니다. 반도체 칩이 마지막 주인공 역할을 톡톡히 해냈다는 건데요. 뭔 소리냐면, AI 붐과 유가 상승 덕분에 좋은 성적을 거뒀지만 일각에서는 반도체 편중 현상에 대한 우려도 나온다는 말이에요. 결국 성장 온기를 다른 산업까지 퍼뜨려야 한다는 과제를 안게 셈이에요.",
          "quote": "한국 수출 사상 첫 '1조 달러' 돌파…독·미·중 이어 세계 4번째",
          "member_count": 8,
          "sample_articles": [
            {
              "n": 74,
              "title": "AI 붐·유가 상승에 韓 수출 1조달러 돌파 - 이투뉴스",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5hc1JFUWRPQzJDSmg1X3BwcHhwbkJxZmhkRFFKV2NMMU9ERjlheVR1TEM0YVp1aXE5aWM2MEEzMlFqTGhaTExYNnZpeEk2UlRtRTlJWm5HUkFsa05Fc3VhamlrNXZJYTTSAWtBVV95cUxPM2lPTnlaSGlqN1IxQktEeUdHNzU5dEl2U1NuTHo4OXRjWjdKWjhVcVUwdjlPYWRGS216OGstNlFVVEd3cTZFMVRYbjFJUG5pSFpLS3NFcGVMMU5MYjk3M3REd0V1UXNScmJ0NA?oc=5"
            },
            {
              "n": 75,
              "title": "수출 1조달러 이면의 'AI 하드웨어 착시'…반도체 쏠림 경고 - 동행일보",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFB2cGlBcW82Qm9BQ0FXb3BmcFRPSVBLWlA5SEZyZWVsYlZ0eXl6UWRJekxRRC0xNE5qRTlKSGZJc25Wd245LTkteEZFeExTVklocGV1SHNHb05ONlRPRDctV1JfNm9MaHdN?oc=5"
            },
            {
              "n": 76,
              "title": "산업통상부, 수출 1조 달러 돌파…세계 4번째 ‘1조 달러 클럽' - 금융계",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTFB4SEVFRGIxWW00TE1nZ2xpWTZfMnVaQWxBMmZjcVhGbk5qQ1ZiNlhaanlmLV9jODBfcjNmUUtUbVUtX2l5ajUxX2lIR0laN0pLaE1LLVNfZDgtczNaRUVWcFVrbHpTaUE1aHEw0gFrQVVfeXFMUHhIRUVEYjFZbTRMTWdnbGlZNl8ydVpBbEEyZmNxWEZuTmpDVmI2WFpqeWYtX2M4MF9yM2ZRS1RtVS1faXlqNTFfaUhHSVo3SktoTUstU19kOC1zM1pFRVZwVWtselNpQTVocTA?oc=5"
            },
            {
              "n": 77,
              "title": "수출 1조달러 시대…中企 수출도 역대 최대 1076억달러 - 매일경제",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE45MzF5MURqbmJFLWZic1RLZk9hMFMySjBWaTV2NUFFOTA5LXM4Qy11V0puRFE5MUJ0VTVva002NnJrdTViUi1VTWZSYXNlWXBR?oc=5"
            },
            {
              "n": 151,
              "title": "한국 수출 사상 첫 '1조 달러' 돌파…독·미·중 이어 세계 4번째 - 대한민국 정책브리핑",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9iYkR5bDEzS25rNGhPV1E1Wk9XZG9hdEhKRk1mWUhmeE5xWEFEWjZsNU1kOWhkZERrdmc5cXI0NG1maUNEbEZQYnBZZnZvTEk1c0hEa2ZUNlNMN1psOGZuZWplVS1DNGhSZ0d6cw?oc=5"
            },
            {
              "n": 153,
              "title": "수출 1조 달러 달성했지만… ‘반도체 편중’ 넘어 성장 온기 퍼뜨려야 - 더스쿠프",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9UTmxsZ3Y2WnhUSTNzMzRGLUxHSjBjdVB5OUJ0MHloa3BKYkVFS19GbWpPdWxJR2dMRTNxRFJIdmpqZVRBVGQ2S0ZiR01SWll3YkxiMkJ0YVNBTkhRUjdrUFRTdUkycWFDRzlWOWVR?oc=5"
            },
            {
              "n": 154,
              "title": "관세청, 1조 달러 수출 마지막 주인공은 반도체 - Daily NTN",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9rOTREWExuT3oyUWh6MkllOWo0eU54cUZuMGRXU2RCbU1JSEw3dFZrdVJIR3ZwTGVrbEUxcmh1N1E1Rm5jOEdXWGlnbGR3V21QdVpiVGtMcUJwMF90TzF5ejEtaHZoQ3h6U3c?oc=5"
            },
            {
              "n": 156,
              "title": "반도체 칩 덕분에 한국의 수출액이 처음으로 1조 달러를 돌파했습니다. - Vietnam.vn",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMilgFBVV95cUxOTE1mX3lOaTJjQnhUQzFRQUNra2pXeHAybl9uU29BV0EzS1k4bnIyVnlXdWhfSWg3MG0xYkUzQkRETWNyV0FtT192TVRlSVVKR2hkOGdTU1BMR2U2R1NJU3VzV2t2M2x4Yk5Nb3NrRUU1UVBKbzdpWDNfSUd4cHZWQUlrUTNjSHFobE9HNDJIWDRxR2ZsMnc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-03",
          "rank_by_count": 3,
          "name": "젠슨 황 사임 후 폭언 및 거짓말 폭로",
          "easy": "젠슨 황이 사임한 이후에 20년 전 직원 위협과 성적 발언, 그리고 네 엄마가 널 낙태했어야 한다는 등의 상습적인 폭언과 이사회 거짓말 논란 소송 기록이 수면 위로 드러났다고 합니다. 뭔 소리냐면, 제왕적 경영을 해왔다는 폭로가 쏟아지면서 충격을 주고 있다는 말이에요.",
          "quote": "[단독] 복귀 요청한 젠슨 황…“20년 전 직원 위협·성적 발언” 소송 기록 수면 위로｜Global Money Club",
          "member_count": 7,
          "sample_articles": [
            {
              "n": 200,
              "title": "\"네 어머니가 널 낙태했어야\"…젠슨 황, 직원들에 상습 폭언 의혹 - 주간조선",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE9MZHVMTWwzaTJoVmEweW9lV2dLa2szOWItenM3SjhLalQtc3l1YzNFZ3N5VFJXX1dkYWtDa2ppNVlvbFNyTC1hU1NGcUo0Q1ZBbTk4UHNwSl9SNk8wMXJVUW53YVAwelZUV2xR?oc=5"
            },
            {
              "n": 201,
              "title": "`네 엄마가 널 낙태했어야`…젠슨 황 사임하자 쏟아진 `폭언` 폭로 - 매일신문",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE9FNVdHREVkeE9mTHhoa2dvbkpxZ1JrbjA0OHREbENoQS1QOU0tYmlNYmhkS29hb1F1dkd6bWcxd1pEZUg5RlJ0dnotTDJDdkhlQ3NlamhFdEQ3TllROFVwWHVB?oc=5"
            },
            {
              "n": 202,
              "title": "\"젠슨황 사임 배경은 '거짓말'\"…임직원에 폭언·모욕 폭로도 - 아시아경제",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1aRXBxdU1ONmV2VXhLdlVuLWFtSWxUcThreFlEOGZtTGw1RGhkWVlKd2pHNmU3RlhXbENTT2daQXpnVTVON3VzV2YyRy1uVncwbU4zVzJUWU04Q1QyckE5ZA?oc=5"
            },
            {
              "n": 203,
              "title": "젠슨 황 사임 후 거짓말·낙태 폭언 논란 제왕적 경영 주장…트럼프 '두 번째 기회' 발언도 주목 - CBC뉴스",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9HUEYxdHl2S0xzUWpLWFZ5Y0Y1UE9tMXRkQ2xfOG9Ga09RMVhrcDFQZjd2Rmx6YlZ6QnRLMFh3XzRtbGpIcllfVjVUVXNPSUdQbkJMdUlpSXBPUGJCT3Y1UnBXcFNVNjdR?oc=5"
            },
            {
              "n": 204,
              "title": "젠슨 황 퇴출 뒤엔 반복된 거짓말…“네 뇌에 오줌 누겠다” 폭언도 - 한겨레",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiggFBVV95cUxOUFBWWDFheXB5VnpDUDA5NEJlWUpXbHhmVXI1NkxNMWM2WVF1TVFhaTFvVG9zRUpOWGgyUkkwMUNNRDIySjhrbGgzZXVud3JPdEVDcUNPaVpRam53Tk5lOUt4cF82aGRnTy04Uk9JX3hnU2JLTlE3LXlwbU51b3g5ZW9n?oc=5"
            },
            {
              "n": 206,
              "title": "[단독] 복귀 요청한 젠슨 황…“20년 전 직원 위협·성적 발언” 소송 기록 수면 위로｜Global Money Club - 중앙일보",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9tYjNIZXdTamM4REd5Zm0zYUlReTNMODgya2Q0eTBMM2NueTV4RkdwX05uM1U1bFhqeG12VmE1MjBrbDdrX2EyS3EzLUdqalZrT01VYnozUTZwVDQ?oc=5"
            },
            {
              "n": 207,
              "title": "\"네 어머니가 널 낙태했어야\"…젠슨 황, 폭언에 이사회 거짓말 논란까지 - 경기일보",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE52LXR3enI4NndLNTFwc1FxbVZWVUJLQ0hRUXphdWlkWWpzV25FaENWWWp3VjNWQkpKbFpKcmRMbjh0Nnd4aGNBN210SDU4YWJicGloNWY4UFd4bUU?oc=5"
            }
          ],
          "flags": [
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-04",
          "rank_by_count": 4,
          "name": "바이오의약품 임상 3분기 급증",
          "easy": "바이오의약품 임상시험 승인 건수를 살펴봤더니 3분기에만 89건을 기록하며 총 203건으로 증가했다고 합니다. 다국가 임상 중심이 88%에서 89% 비중을 차지하며 가파르게 늘었다는 건데요. 뭔 소리냐면, 항체와 종양학 분야에 몰리면서 공급망 리스크 완화가 성장을 견인하고 있지만 글로벌 시험장으로 전락할지 모른다는 경계의 목소리도 나온다는 말이에요.",
          "quote": "바이오의약품 임상 승인 203건…3분기 89건 : 기업·산업",
          "member_count": 7,
          "sample_articles": [
            {
              "n": 958,
              "title": "[바이오사이언스] 바이오의약품 임상 승인 203건…분기마다 증가 - 연합뉴스",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE8zMThSU1pjS25BSTVFS3BhQTJLLXU2c24tbzdFbDdwRFpVSkxvM3IxeGNKeEpVRXlOcGQwelVEOG9HYlZDWnNYYnZiekdZeXEzSVo0SHhkOXpHRDTSAWBBVV95cUxNQjVvbExHdlR3YjQ0ZEVHNmE1bkYyNkhnS3JZeElQVGliNDhKSEViQnZiMWJwczBiU0huSGNiWU1ZZHhiWFhNRkFGbDNRUWRWTGljVzgwM3dZeDVhWkdidUE?oc=5"
            },
            {
              "n": 959,
              "title": "국내 바이오의약품 임상시험 승인 200건 돌파...3분기 89건으로 증가세 - M이코노미뉴스",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5HZ0kxMWZVbFgxSlV5cmMwTVZNUFRLajZUVGV4R1ZHX2UwQ0V4WkhTRFVtLVNOcUZmTjhmMXNudFNaQlZBY2xtOW1DX285SEh1UUZoY1Y4UzlycVIyd1praUhnelNaaEU?oc=5"
            },
            {
              "n": 960,
              "title": "바이오의약품 임상 3상 비중 50% 돌파…\"글로벌 시험장 전락\" 경계 - 바이오북미디어",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE1RNi1VcTF6Sk51ZlhHdVo1NERPY0NNLUIyVW9yZGtacDZfaXZOZFR4MVFuU3puVTBYemJ0R3hiRGU4bWZxZmFoRnhia202b2o0X01mcQ?oc=5"
            },
            {
              "n": 961,
              "title": "국내 바이오의약품 임상 203건…3분기 다국가 임상 비중 88% - www.ebn.co.kr",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9hMGhpWTdMUWFMajNoc3F6U1NEVnZwMGNpdFZhVTRwNm90Wk12M1BwMTZhWTJRQjVseUhvTVZqbTE0OVVMWlpHcWRKVkM2Ym9uNW91eU5SS3h6dWduQnRobXlsNHFwQ3Ba?oc=5"
            },
            {
              "n": 962,
              "title": "바이오의약품 임상 승인 203건…3분기 89건 : 기업·산업 - 재경일보",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE5fMnhYeUs3QmFJQlpULVFGdzhiQ3B1bWxzSkh5TWIydzNGM1NmYkl0S3Rmb2pNb1R1MmhDYU5QbWEyVGc4bzYyaF9Scw?oc=5"
            },
            {
              "n": 963,
              "title": "바이오의약품 임상 3분기 89건…다국가 3상 중심 급증 : 병원·제약 - 의약일보",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE5Md25taEZrVUF2NG9wVFpzSVpSRGFiR3phNDJaQVFpWnVpOTl3Wm5pZWxKYW9mb0JVTTJNQXhJSmI5a2g1VDN1cHFYSVhwdjZoZ0NXcw?oc=5"
            },
            {
              "n": 965,
              "title": "항체·종양학에 몰린 바이오의약품 임상…3분기 89건 : 테크/과학 - 재경일보",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE82WmNPMFJqbkdhYXU1NEpfVGJ0aHUzeGZ4ZGVHODRLV1lnREpXbm9oNXVWaGFDdnpSUlFjNjJrQ1hNMVBTbnVWMHFRcw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-05",
          "rank_by_count": 5,
          "name": "엔비디아 SEC 회계 조사와 주가 폭락",
          "easy": "미국 캘리포니아주가 엔비디아에 조사 소환장을 발부하고 SEC 회계 조사 소식이 겹쳤는데요. 주가가 14%나 폭락하면서 아마존 시총만큼이나 거대한 규모가 증발해 알파벳에 밀려 시총 4위로 추락했다고 합니다. 뭔 소리냐면, AI 테마에 투매 물량이 쏟아지면서 호재도 통하지 않는 폭락 쇼크를 겪었다는 말이에요.",
          "quote": "엔비디아, SEC 회계 조사에 주가 14% 폭락…시총 4위 추락",
          "member_count": 5,
          "sample_articles": [
            {
              "n": 103,
              "title": "젠슨 황 떠난 엔비디아, AI주 매도세 겹치며 아마존 시총만큼 증발 - 조선일보",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOZUlyelBkN0tucVotWUQtNlN1Yml3Z0ZybGZ1SzQ3NUtYdDhwRGNoeWlIYjZDSkh2MU9DVGhXRnREY1VUbHp1T2lsTE9JSHJMNFFxN2FXWW1reFEwQTYwcm16MEFXOFZFZWxudklxbEhZc2ZJZ0VuWGVpZ2wxNmxlMnFoZlppWTdfZWZEV1hR?oc=5"
            },
            {
              "n": 104,
              "title": "엔비디아, SEC 회계 조사에 주가 14% 폭락…시총 4위 추락 - AI타임스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5iT0s1dlpmU1VqMjhsQmlzd25GRW8yME45eElDQWFDS0dpVFhGMHhIQ003dkxETFFkZnBBSC0wZHBmSTZOU3dFZjR5bmczR2FfcVN0dGpsMUQzR292UHpLSmk1MkZ3bi1GYVE?oc=5"
            },
            {
              "n": 105,
              "title": "\"호재도 안 통한다\" 나스닥 5%대 폭락 쇼크...엔비디아 14%↓[뉴욕마감] - 머니투데이 - 머니투데이",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE0tSEFWQ0pNTzVzSE1POG1LMUcybWlGR2VRcnJoYWVzajFVRnR3Umg3ZWp3Y25pMGsyMWdhUFotV2d2VDNnRXZJUzR0TXZCN1hiZVVUUUdDdldUUS1XbldJSTcxbGUtR0NV0gFuQVVfeXFMTUZqQmZFcjFIQ3ZuN253SEZoSXNhLThieDRwelpWOW5scXQ2aDhPNEhVZWdraUZadWZYaVVmX1R5RWpYNmtIRWlydW1PSmkzUG5SUllKUDY0OTNPVWExbXlmQ3RXT2Z6RkRGWU83OWc?oc=5"
            },
            {
              "n": 106,
              "title": "美 캘리포니아주, 엔비디아에 조사 소환장 발부 - 글로벌이코노믹",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQOVBFLVEyWG9CZnFPdERJVXZ2T3JhT2oxbC1veUxqQlVJejdMdEozYkxlSHQ4TUZpWnZaWTF2aDhYcUtsSXl4Z1VTYURvNnM3LUhrdHlrMmxFZVBhbWt2VVZfdy11UmFRamthSnNKT3RHbzFiMHVVcFZQMF9tS1BkcmV2MDhsZERL?oc=5"
            },
            {
              "n": 108,
              "title": "엔비디아, AI 테마 투매에 '와르르'…알파벳에 밀려 시총 4위로 - 연합인포맥스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBNZWVzWTZpYXRxWElLX2dqR3lGSXlWaGJzRnZzeEcwRkFIdXJZeWFsWkxSUlpKaWxYcmQ5b09vTTFnaTBFcHRveUFjby1DZkpwcGhOMWpwVkNSY3NHcEVlM3F1dGZmdWpmWndGazNtbTE?oc=5"
            }
          ],
          "flags": [
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-06",
          "rank_by_count": 6,
          "name": "미 연준 금리 정책을 둘러싼 마찰",
          "easy": "미 연준 이사가 추가 긴축 공감 속에서 금리를 더 올려야 한다고 강조해 봤더니, 트럼프는 경제가 좋은데 금리가 너무 높다며 연준이 매우 정치적으로 움직인다고 비판했다는 겁니다. 뭔 소리냐면, 연준의 추가 인상 속도 시각차와 맞물려 시장이 긴장하고 있다는 말이에요.",
          "quote": "트럼프 \"금리 너무 높아…매우 정치적인 연준 때문\"(상보)",
          "member_count": 5,
          "sample_articles": [
            {
              "n": 159,
              "title": "美 연준 추가 긴축 공감 속 금리 인상 속도 시각차 - 글로벌이코노믹",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPQW1nMlZKUlZ3V3pUZGJvQ2I4b1dZbUR5eHphOG02RjJBdXVXV2RyRHloWjRsclRKNXNDUVIzQWZGLVRYa2NPRGg5a1VIaEdmQkMxYS1YRFd2UzlYTzl2Ym9XSk9HYkJfZ0h6TWdFcVVDZUQ2ZHhURXRqOXBYZl9zN2p4NV83eU0?oc=5"
            },
            {
              "n": 160,
              "title": "나스닥 올해 상승분 반납…미 연준 \"금리 더 올려야\" - 더스쿠프",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE1MLXlpVUNrRS1ZTDR3NUFPdTMxSVF3LUxoNGJXUFg4UUhDZW1rWkEtanpaNURkRnh3cEVRNlppOXJvRFNRTGw0T0pSNjg2Q2ZCT3VhRE9uR2xKaFlkVllUTlV3eWpLRTVzMTNQY2JB?oc=5"
            },
            {
              "n": 162,
              "title": "트럼프 \"美 금리 지나치게 높아…연준, 정치적으로 움직여\" - 블루밍비트",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiUEFVX3lxTFBDTmZtdV9yQV9yODIwV3dKNUhIemp0Z1JSY1FEN3pvaG9YcVRFdW41VmljUld0VkU2Um0xN2oweE9CMHFYaTFHeHZPSEJQVEYx?oc=5"
            },
            {
              "n": 163,
              "title": "美연준 이사, 금리 추가 인상 필요성 강조…트럼프는 \"금리 너무 높아\" - 연합뉴스TV",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE4xNUtpQmJIeG11UkRUWDh1bHA2aDhYRkxFUlNqby1VOXNsS3ZsZEpKRzAxbTJKNEN4TzBpbF9GYWdDTXFuMGlZZ0F5MTlxSXh1NXdjTW9pOU1wcXpTN3dzUFAyOXJlZ3c?oc=5"
            },
            {
              "n": 165,
              "title": "\"대응 늦으면 큰 고통\" 연준에…트럼프 \"경제 좋은데 금리 왜 올리나\" - 조세일보",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFBtRlluRVFaZFlqOFRZbFFucUlxTVpSYmJSYlpnSzRDZ1FwMHVXMWpwOUtfejVKelFXN1FTYmlwbG05bm1YaG05M2VWanFoR1owenhfcTN1NmVxbXRKNkgw?oc=5"
            }
          ],
          "flags": [
            "대표 제목 인용이 원문과 다름",
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-07",
          "rank_by_count": 7,
          "name": "이재명 대통령 울산 AI 데이터센터 현장 방문",
          "easy": "이재명 대통령이 울산 SK AI 데이터센터 건설 현장을 방문해 AI 데이터센터가 산업화 시대의 경부고속도로와 같다며 인력과 전력 지원을 아끼지 않겠다고 강조했다고 합니다. 뭔 소리냐면, 대한민국 AI 대전환을 위해 투자의 속도를 높여야 한다는 의지를 드러냈다는 말이에요.",
          "quote": "李대통령 \"AI 데이터센터가 산업화시대 경부고속도로…인력·전력 지원\"",
          "member_count": 5,
          "sample_articles": [
            {
              "n": 134,
              "title": "李대통령 \"AI 데이터센터가 산업화시대 경부고속도로…인력·전력 지원\" - 연합인포맥스",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9JSzZHMjV6bXo1YkNoU1RKOG9sa3lDYnlKMzVCaU9kbEN3cHJRTUZUSGlHZFktYUNsMnV5X2NKVlN4cWFiQU5wV2EyQk9nOTNlbnVtOWE2YkpVNUthUnR6X0xBNWJwQTd6WTM5eDREc0k?oc=5"
            },
            {
              "n": 136,
              "title": "이재명 대통령, 울산 AI 데이터센터 현장 방문…“지방 성장 기회·균형발전 이끌 핵심 사업” - 강원일보",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBHSEUtM1BHZFdUUGtEUlJSbnl0TG03cUo5ZlRvWHZLSEdoWEJUM1N4Rk5uLTcxdkFnbDFaUzhfeE9kTk1ONGNWWENWa2lGbHB4UHRieXFxTXBkZE0?oc=5"
            },
            {
              "n": 137,
              "title": "이 대통령, “대한민국 AI 대전환, 인공지능 고속도로가 열 것”...울산 SK AI데이터센터 건설 현장 점검 - 인공지능신문",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5MZ0k4WWg3VUQ3cEJfRDktZktRM1dtR0ZqRlRDUjJ3cXBzVkllTlR1cmFwVWsxQV8xU0VDdDdlaDhjT1A1NkNQQy1ZQ2ZIU1FSSUh0MGgwM2NaLW5laDRLQkc0VEFvVkE?oc=5"
            },
            {
              "n": 138,
              "title": "李대통령 \"AI데이터센터·메모리 수요 더 늘 것…속도가 생명\"(종합) - 연합뉴스",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1tbkpkQldyMmNNS0xKRkdyQlRnVXIxMkNPYXVpb0J3NWpGaGR0RjU2NlV0Nnlsem54Q1pxUlBqSXpRMXpaYW56LS0yNXU2S29fX3NRa2QtNlpVM1HSAWBBVV95cUxPQXJyTU1LaDJxbUxNVDVIS0NKV3Q5M3BXMVMzSUQ4eGNRXzZfanVWU2pWdDhJdjctWVRQdW00eFpKakdMRVlfTkl6TmRlT3cwQXdvdG1IVnRQWnFxU285eTk?oc=5"
            },
            {
              "n": 141,
              "title": "李대통령 “AI 데이터센터ㆍ메모리 수요 더 커질 것⋯투자 속도 높여야” [종합] - 이투데이",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTFBHbVEtRmkyVGY2ejFSZTB1UlF2THBscnpBb2JQV2NWdW41RkwxWFpSZWRlMnJ2amJ3TDBHTUdTaU45dm9SLWpLcklzR2tWUmQ0eHdDZw?oc=5"
            }
          ],
          "flags": [
            "대표 제목 인용이 원문과 다름"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-08",
          "rank_by_count": 8,
          "name": "원전 차액계약 도입",
          "easy": "정부가 전력거래의 32%를 차지하는 원전의 전기값을 2027년 1월 1일부터 차액계약으로 정산하는 방식을 주력 전원에 처음 적용하기로 했다고 합니다. 뭔 소리냐면, 현물 중심의 전력시장 구조를 전환하는 신호탄이라는 말이에요.",
          "quote": "원전 전기값, 2027년부터 '차액계약'으로 정산한다… 주력 전원 첫 적용",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 968,
              "title": "[기후부] 2027년 1월 1일부터 원전 차액계약 적용 - 워터저널",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMidkFVX3lxTFB2ejJ2WEZBZUZHTDJ0QklKLV90d2F6WW56WTJCS3BkTlk5d2J4OGEzZEN6S3huYzZQb3hwQUtoQTNFczRCT0lEaHVtVTNOVmZMbVRCOUlkWXBrX2QtZy16eVVwcWdIQ1Z0ZlRJQ1IwT2RKek0tMnfSAXZBVV95cUxQdnoydlhGQWVGR0wydEJJSi1fdHdhelluelkyQktwZE5ZOXdieDhhM2RDekt4bmM2UG94cEFLaEEzRXM0Qk9JRGh1bVUzTlZmTG1UQjlJZFlwa19kLWctenlVcHFnSENWdGZUSUNSME9kSnpNLTJ3?oc=5"
            },
            {
              "n": 970,
              "title": "원전 전기값, 2027년부터 '차액계약'으로 정산한다… 주력 전원 첫 적용 - https://www.2news.co.kr/",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9KWGd2d0RoQl9WRFY0d203aW5fOTZZemtCMVZNbXdvZHNmR0JDejAta3otWTViYzN0QzhZZzFvZWRzekp4OC1Pbk9TOGc2UVNKVXVTZVZ3bnhfNmFFd1B3Y1N3dmwxV1Zj?oc=5"
            },
            {
              "n": 971,
              "title": "[에너지이슈] 전력거래 32% 원전 품은 ‘차액계약’ 변경...현물 중심 전력시장 구조 전환 신호탄 - 산경e뉴스",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9YNW9ScWp5djlpMTRJQXN3TkhfWGdMcEdSOUV4anVlbGZEaWY1ZnpNaWxRdFRSM2lIejZmVUFmeEdGZlpWcWZGQ0pBRFFXMG45WkhfTS1QSFVEa3dYMjVCMWF6ajQySXM?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-09",
          "rank_by_count": 9,
          "name": "삼성전자 반도체 기술통 전진 배치",
          "easy": "삼성전자가 반도체 기술통 3명을 사장으로 승진시키는 등 전영현과 노태문의 투톱 체제를 유지하며 미래사업에 집중하는 인사를 단행했다고 합니다. 뭔 소리냐면, 반도체 경쟁력을 강화하기 위해 기술 전문성을 전면에 배치했다는 말이에요.",
          "quote": "삼성전자, 반도체 기술통 3명 사장 승진…전영현·노태문 미래사업 집중",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 94,
              "title": "삼성전자, 반도체 기술통 3명 사장 승진…전영현·노태문 미래사업 집중 - 중앙일보",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBmN0k0MFd1R1VUQ1p2UjRpb2RlcGs2UGZ2ZFN4LWNyNHZFYVFIYVRna0JjWnZRcUczblZIRW1kNkFBWXc1N2I0M1RjZS1uby1ZMzMtT0Nn?oc=5"
            },
            {
              "n": 95,
              "title": "삼성전자, 반도체 전영현·갤럭시 노태문 '투톱' 유지 - MBC 뉴스",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTFBjVUc0djdaRWhyUGpiRkxCanRkVnBocm1jMWJiQ3pkTzV5MjIzalVfRGQ5TDAwOXZseFBhWTg3c2I4dS1GVGxublc2VlNZbDAydS1aWU9FU2x5dVFsRWRvUENkYXBIWnpzTVl3eGNaVFFVZXNh0gF0QVVfeXFMTVQ4UFZ0Q21SX1RCWjBVNnNpZVM3RjBGWVVSNkMzSVp0V3RJSFZ4Sk9PMTdrUEJlUFZscnNpYzBZOTUzak1YcE15UDF1SjFCTFRlc18zVnllY3FfOC1xVTZQT21RcV8zeldicnkzQ183LUtpemg?oc=5"
            },
            {
              "n": 100,
              "title": "삼성전자, 반도체 기술통 전면 배치…전영현·노태문은 미래사업 집중 - 에너지경제신문",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5UN1UzWFo2VnUxR0libElhWTFYUWt1bTFMNl91MU84djd5cWlwMzN3enNyb1dHN0xhM25FSFpmMEQ0ZWRPbjFFS0FTMUtjQmZ4ZGRTM0JlT0tvVXM?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-10",
          "rank_by_count": 10,
          "name": "KT-LG전자 양자통신 기술 개발",
          "easy": "KT와 LG전자가 차세대 양자통신 기술 개발에 성공해 양자 상태로 데이터를 직송하는 1024비트 전송 실증을 마쳤다고 합니다. 뭔 소리냐면, 양자직접통신 분야에서 실질적인 성과를 거두며 기술력을 입증했다는 말이에요.",
          "quote": "KT-LG전자, 차세대 양자통신 기술 개발 성공…",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 955,
              "title": "KT-LG전자, 차세대 양자통신 기술 개발 성공…\"양자 상태로 데이터 직송\" - 뉴스워치",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBHelFsaC0zTWpFRFIzYm04dkJpXzJoVl85N3h4dUNveGJubVEzWGdpR2NUN0wyVWhIUVF5c0RKVko3aTBZNE16NHdmWUgzdzhZSVlXTkc1UGVTT2V1dFNSa09fVzVGYjl0?oc=5"
            },
            {
              "n": 956,
              "title": "KT·LG전자, 차세대 양자직접통신 실증…1024비트 전송 - 한국신용신문",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE1kZW9NOW1VWmpjMkxoSzViXzVYNF9vVjM0alotck92S1lEd1JQclhib0YybFYwNHR1VGlpX2RHM0IwcjFVV3ZmUGdvSGprUG8wQXhsdmdCaVJRTXB5VktRZlBpT2c4WjBLYkI4?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        }
      ]
    },
    "ch2_numbers": {
      "title": "챕터 2 · 숫자 (거푸집1)",
      "addr": "처리-1",
      "status": "돎 (AI 0콜 · 정규식 추출 + 공식 API 대조)",
      "counts": {
        "gate_in": {
          "val": 1,
          "source": "v2_secretary/결과/문앞/2026-11-22_문앞교통정리_길별.json"
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
          "val": 17,
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
          "val": 3,
          "source": "v2_secretary/결과/문앞/2026-11-22_문앞교통정리_길별.json"
        },
        "summarized_today": {
          "val": 2,
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
      "items": [
        {
          "id": "i3d612932fd",
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "[ 용인 반도체 국가산단, 전면 재검토하십시오!]",
          "easy1_title": "용인 반도체 국가산단 계획을 전면 재검토하십시오",
          "easy1_desc": "용인 반도체 산단 재검토와 초고압 송전탑 건설반대 전국행동이 지난 10월 28일부터 용인 화곡저수지 앞에서 농성을 시작했는데요, 전국의 주민들이 농성장 당번을 서며 이곳이 정말 착공될만한 곳인지 묻고 있다는 겁니다. 충분한 사회적 대화도 없고 답변도 없는데 사전 검토라는 이유로 벌목이 이미 시작되었다고 해요. 쉽게 말하면, 국가 성장을 명목으로 주민 땅을 사서 대자본에 넘기는 꼴이라는 말이에요.",
          "easy2_title": "삼성과 정부는 구체적인 필요성과 계획을 내놓으십시오",
          "easy2_desc": "해남에서 용인까지 3,855km에 이르는 54개의 초고압 송전선로를 두고 지역이 수도권의 전기 식민지인지 묻고 있는데요, 윤석열 정부에서 시작되어 이재명 정부에서 추진되는 동안 구체적인 필요성과 계획에 대한 답이 없었다는 겁니다. 사회민주당이 이 문제의 실체를 널리 알려 달라고 밝혔다는 계획인데요, 주민들의 요청에 답하고 사회적 대화를 거쳐야 한다는 장점이 있는 반면 서둘러 추진하려던 일정에는 제동이 걸린다는 점도 따라온다는 겁니다.",
          "topic": "사회민주당이 용인 반도체 국가산단 조성 과정에서 주민들의 반발과 소통 부재를 지적하며 전면 재검토를 촉구한 내용이에요.",
          "points": [
            "용인 산단 농성 시작: 용인 반도체 산단 재검토와 초고압 송전탑 건설반대 전국행동이 지난 10월 28일부터 용인 화곡저수지 앞에서 농성을 시작했다고 밝혔는데요, 전국의 주민들이 돌아가며 농성장 당번을 서고 있다는 겁니다. 뭔 소리냐면, 이곳이 정말 반도체 산단이 착공될만한 곳인지 주민들이 직접 묻고 있다는 말이에요.",
            "송전선로와 소통 부재: 해남에서 용인까지 3,855km에 이르는 54개의 초고압 송전선로를 두고 지역이 수도권의 전기 식민지인지 묻고 있는데요, 삼성과 정부가 구체적인 필요성과 계획을 내놓지 않고 있다는 겁니다. 충분한 사회적 대화도 없었는데 사전 검토라는 이유로 벌목이 이미 시작되었다고 해요.",
            "사회민주당의 입장: 결국 용인 산단은 국가의 성장을 위한다는 명목으로 주민의 땅을 국가가 사서 대자본에게 넘기는 꼴이 될 것이라고 보았는데요, 사회민주당도 전국의 시민들이 함께 이 문제에 관심을 가져달라고 요청했다는 겁니다. 쉽게 말하면, 이 문제의 실체를 널리 알리고 함께하겠다는 뜻이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "779",
          "link": "https://www.nanet.go.kr/lowcontent/assamblybodo/selectAssamblyBodoDetail.do?searchSeq=200817&searchNoSeq=20261119200817",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i0ca8674b43",
          "source_name": "미국 연방관보(무역·에너지·원자력 기관)",
          "kind": "미국 연방관보 공고",
          "writer": "미국 연방관보",
          "title": "Radiant Industries, Inc.; Special Nuclear Materials License Application for a Fuel Packing Facility; Environmental Assessment and Finding of No Significant Impact",
          "easy1_title": "테네시주 공장에 핵연료 받을 허가 내줬다",
          "easy1_desc": "미국 원자력규제위원회(NRC)가 테네시주 오크리지에 있는 래디언트 인더스트리 시설에 특별 핵물질 라이선스를 내주기로 했는데요, 1메가와트급 전기 원자로인 칼레이도스에 쓰일 트리소 입자 연료를 받아 모놀리스에 넣는 작업을 허용한다는 말이에요. 환경 평가를 꼼꼼히 해 봤더니 주변 환경에 큰 영향이 없을 것으로 판단했다는 겁니다. 쉽게 말하면, 새로운 소형 원자로 연료 조립 작업을 본격적으로 시작할 수 있게 길을 열어 준 셈이라는 말이에요.",
          "easy2_title": "환경 영향은 작지만 조사는 철저히 거쳤다",
          "easy2_desc": "공사와 운영 과정에서 소음이나 흙먼지 같은 일시적인 변화는 생기겠지만 기존에 쓰이던 산업용지에서 이루어지기 때문에 영향은 제한적이라고 밝혔는데요, 테네시주 문화재 보존 담당관과 여러 부족들의 의견을 구한 결과 문화재에 나쁜 영향도 없다는 결론을 내렸다는 거예요. 허가를 내주지 않는 대안을 살펴보면 디젤 연료에 계속 의존해야 한다는 단점이 있는데, 이 사업을 통해 깨끗한 전력을 안정적으로 공급할 수 있는 장점이 있다는 겁니다. 쉽게 말하면, 철저한 검증을 거쳐 환경 피해를 최소화하면서 필요한 지역에 지속 가능한 전기를 보낼 수 있도록 했다는 말이에요.",
          "topic": "미국 원자력규제위원회(NRC)가 래디언트 인더스트리의 소형 원자로 연료 시설에 특별 핵물질 라이선스를 발급하고 환경 영향이 적다고 결정을 내린 것에 대한 설명이에요.",
          "points": [
            "라이선스 허용 범위: 이번 허가는 래디언트가 테네시주 오크리지 시설에서 1메가와트급 전기 원자로인 칼레이도스에 쓰일 트리소 입자 연료를 받아 저장하고 모놀리스에 넣는 단계까지만 허용하는 건데요, 나중에 원자로를 가동하거나 연료를 시험하는 후속 단계는 따로 허가를 받아야 한다는 말이에요. 뭔 소리냐면, 지금 당장은 연료를 받고 조립하는 기초 작업만 먼저 할 수 있다는 거랍니다.",
            "환경 영향과 대안 검토: 건설이나 운영 과정에서 소음이나 공기 배출 같은 일시적인 변화는 생기지만 이미 개발된 산업용지라 영향이 작다고 보았는데요, 만약 허가를 내주지 않는다면 원자 로용 연료 생산을 못 하게 되어 오지나 군사 시설 같은 곳들이 디젤 연료에 계속 의존해야 한다는 단점이 남는다는 거예요. 쉽게 말하면, 환경 훼손을 최소한으로 막으면서 원격지에 안정적인 전력을 공급할 길을 터 준 셈이라는 말이에요.",
            "관계 기관 협의: 테네시주 문화재 보존 담당관과 여러 부족들 및 연방 기관들과 함께 역사적 문화재에 미칠 영향을 검토한 결과를 거쳤는데요, 어류 및 야생동물 서비스가 관리하는 6개 보호 종에 대해서도 영향이 크지 않거나 해를 끼치지 않을 것으로 확인했다는 겁니다. 결국 환경 영향 평가 결과에 따라 환경영향평가서(EIS)를 따로 만들 필요 없이 영향 없음(FONSI) 결론을 내렸다는 말이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "20643",
          "link": "https://www.federalregister.gov/documents/2026/11/23/2026-23754/radiant-industries-inc-special-nuclear-materials-license-application-for-a-fuel-packing-facility",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        }
      ],
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
          "val": 148,
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        "events_out": {
          "val": 12,
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        "single_out": {
          "val": 91,
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        "all_clusters": {
          "val": 103,
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        "bad_numbers": {
          "val": 0,
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        "calls": {
          "val": 2,
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        }
      },
      "events": [
        {
          "id": "e261122-01",
          "rank_by_count": 1,
          "name": "손정의 SK하이닉스 인수 검토",
          "easy": "소프트뱅크의 손정의 회장이 1조 달러(약 1346조~1350조 원) 규모로 SK하이닉스를 인수하는 방안을 검토했다고 월가에 문의해 봤더니, 현재는 검토를 중단한 상태라는 겁니다. 뭔 소리냐면, AI 시장을 노리고 거대한 자금을 베팅하려 했지만 실제 성사되지는 않았다는 말이에요. 쉽게 말하면 인수설은 사실로 확인됐지만 팔지도 않을 하이닉스를 통째로 사려던 계획은 멈춰 섰다는 겁니다.",
          "quote": "손정의, ‘1조 달러 베팅’으로 SK하이닉스 인수 타진했었다",
          "member_count": 8,
          "sample_articles": [
            {
              "n": 86,
              "title": "손정의, ‘1조 달러 베팅’으로 SK하이닉스 인수 타진했었다 - 뉴데일리 경제",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMie0FVX3lxTE5jNUhwMXJfR0UtZC1VUVV6dWxSRVBVQU8xMklnWWJCcm9aMUZuSlNMRkRSZUpXYjNpQjUyOTEtcTV3VW1zaHN4NWNTSnJ6OEJudXRGNWV1NlNRYkd3X0c4ektocElBMEJJNlRoQTRfUHl3cUpFWUlRcDNJc9IBgAFBVV95cUxQdU9NN1d1T1dfZU5fblY5OVozWG1sZ1VMUF9DTVNac01IUHJRLUUxMFVaY2FuMEdIeGN5aTRtc2dGb0FqR0lON2VSSWx0YlROclhHTWU1eFZybWdkRHUxMWpKbHlZa1dWcGNJZ2R0eE1rVWhpdjM3V3pvSjBMeU42aA?oc=5"
            },
            {
              "n": 87,
              "title": "“손정의 회장, SK하이닉스 1조달러에 인수 검토” - Chosunbiz",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMihAFBVV95cUxPZFhxQWNnZXpGNEFfVWxnN2prWndYMmpOTmNRUDdWeTI2ZWtfM21iZU9Ra0czQmlpdlRxeVRPaWUtOENwaVFZbjItcjdoSjVscXJXXzBXT2Y3cjdKc25FTGFDcDlSRkI5Q1U3RVpGdFVVQ3NzT0d2ZHVoUHVtUnhkQ01aYUXSAZgBQVVfeXFMT0lwUzhncTQ0aWlxblEyUnpNOTFrbGVLbXhjRDhLdXpPMGZIblk2SlgwTjRrNWZBX2hqV3k0QVNGT3VCbGVreU5RLVhzSWZocDN5bk9FVFRpajVVX05xVmd4b2dTWHlnY1lLY0lSRWRIcTlUN3g0aTNCeUJQYjVQYWd1SDd"
            },
            {
              "n": 88,
              "title": "“손정의 회장, SK하이닉스 1조 달러에 인수하려 했다” - 동아일보",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE9zRnhOeV9aU1hoSm1zWmtxb2VfdnpXejJpTndfM3RpOGs1dU1uYmxqTTdxMUY5Zk5OTjZnQlFBLXVWZ2VFcWpCdUJTRGxSUVpfU2M4V29mbl90VlF2cDF1QS1JbHJJaHQzNVRlQ2g2TllISkXSAWZBVV95cUxQZ2lBMXhTQ0tsbXBRMWNvYmptc01Ia01IWWN5SnU2Z3I1YVVjbHMzdWxDLXlSdjhtcU9iXzV0NWlNeHZ2ZEMydmhhUXY3VFV2Ny13QXNBQjRodWJVVTZvM2w4WWJfd3c?oc=5"
            },
            {
              "n": 89,
              "title": "손정의, SK하이닉스 1346조 원 인수 검토했다…월가에 자금 조달 문의 - 문화일보",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiUEFVX3lxTFBhanptZ2VFZHhBdG5JRXVneU9CSnJjTXRtcHpNc0NFWUVLbWdkTjJYU0xHbUVQcDI0NE5kc1dFa0NxbTFscTFENjh3N0R3RXF3?oc=5"
            },
            {
              "n": 90,
              "title": "“손정의, 1346조원에 SK하이닉스 인수 구상…월가에 자금 조달안 문의” - 매일경제",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5KR01obVFPREJDaS1vd2R6dExOZnBoYTFSZk9JR3Vma2ZXSDRYOW5QSDZNLWQ2d1M2YUREeFlsYjdOd1ZRZmgxY0NOSnBPTlpYZmE1Nl9n?oc=5"
            },
            {
              "n": 91,
              "title": "“소프트뱅크 손정의, 최근 SK하이닉스 1조달러 인수안 검토” - 경향신문",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9vUEFLNjBhZm9jQU5hQktKLXZ3aUZZZ0dua1UtQWE4TGlZc0hPeXRydUhqU0c5M3ZvUXpuQi1FRThPYk1Sb1d0ZUhmWGo5M2ozVnVDcDFaNVV4d9IBX0FVX3lxTE1hZkJWWlBRaTZaY3ZCLWJ5RThDM3VfNGFMN2ZrYXZzZTVRUy11OE8tUWdocTlKMGtpcnpxdjczSjN4UVNDTWE4VGRSLU9fN2ZhQm9IRmtfTFFndmVhWVA4?oc=5"
            },
            {
              "n": 92,
              "title": "손정의, SK하이닉스 1350조원에 인수 검토했다…현재는 검토 중단 - 경북도민일보",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9iazBxdzZRQ3lrMTlxb0R4dzlEUE5hc3NKN01tc0h6MVc2dUZ2RVJCMUxHWmJWRFFzTWlBMWMyUXNvQ005ZG5KNkp1V012RG9QbG5wOXVrT0JNdjdYOG81TlFmNWVxZFpFRUE?oc=5"
            },
            {
              "n": 93,
              "title": "\"SK하닉 통째로 산다\"…AI 노린 손정의 '1350조 계획' 폭로 - 한국경제",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFA3SDEwWTF2Qm1BU2tfN1czYzJEOTYtenlhZmFhaE43c1V0ZFg5a3Q4NmpoWmNySmNIaWhEaTRIU3VOekhqWmdheVpic2VzZ3B1Q1ZnbXc4WjdIUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-02",
          "rank_by_count": 2,
          "name": "한국 수출 1조 달러 돌파",
          "easy": "산업통상부와 관세청에서 밝힌 내용을 확인해 봤더니, 한국의 수출액이 사상 처음으로 1조 달러를 돌파해 독일, 미국, 중국에 이어 세계 4번째로 1조 달러 클럽에 가입했다고 합니다. 반도체 칩이 마지막 주인공 역할을 톡톡히 해냈다는 건데요. 뭔 소리냐면, AI 붐과 유가 상승 덕분에 좋은 성적을 거뒀지만 일각에서는 반도체 편중 현상에 대한 우려도 나온다는 말이에요. 결국 성장 온기를 다른 산업까지 퍼뜨려야 한다는 과제를 안게 셈이에요.",
          "quote": "한국 수출 사상 첫 '1조 달러' 돌파…독·미·중 이어 세계 4번째",
          "member_count": 8,
          "sample_articles": [
            {
              "n": 74,
              "title": "AI 붐·유가 상승에 韓 수출 1조달러 돌파 - 이투뉴스",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5hc1JFUWRPQzJDSmg1X3BwcHhwbkJxZmhkRFFKV2NMMU9ERjlheVR1TEM0YVp1aXE5aWM2MEEzMlFqTGhaTExYNnZpeEk2UlRtRTlJWm5HUkFsa05Fc3VhamlrNXZJYTTSAWtBVV95cUxPM2lPTnlaSGlqN1IxQktEeUdHNzU5dEl2U1NuTHo4OXRjWjdKWjhVcVUwdjlPYWRGS216OGstNlFVVEd3cTZFMVRYbjFJUG5pSFpLS3NFcGVMMU5MYjk3M3REd0V1UXNScmJ0NA?oc=5"
            },
            {
              "n": 75,
              "title": "수출 1조달러 이면의 'AI 하드웨어 착시'…반도체 쏠림 경고 - 동행일보",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFB2cGlBcW82Qm9BQ0FXb3BmcFRPSVBLWlA5SEZyZWVsYlZ0eXl6UWRJekxRRC0xNE5qRTlKSGZJc25Wd245LTkteEZFeExTVklocGV1SHNHb05ONlRPRDctV1JfNm9MaHdN?oc=5"
            },
            {
              "n": 76,
              "title": "산업통상부, 수출 1조 달러 돌파…세계 4번째 ‘1조 달러 클럽' - 금융계",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTFB4SEVFRGIxWW00TE1nZ2xpWTZfMnVaQWxBMmZjcVhGbk5qQ1ZiNlhaanlmLV9jODBfcjNmUUtUbVUtX2l5ajUxX2lIR0laN0pLaE1LLVNfZDgtczNaRUVWcFVrbHpTaUE1aHEw0gFrQVVfeXFMUHhIRUVEYjFZbTRMTWdnbGlZNl8ydVpBbEEyZmNxWEZuTmpDVmI2WFpqeWYtX2M4MF9yM2ZRS1RtVS1faXlqNTFfaUhHSVo3SktoTUstU19kOC1zM1pFRVZwVWtselNpQTVocTA?oc=5"
            },
            {
              "n": 77,
              "title": "수출 1조달러 시대…中企 수출도 역대 최대 1076억달러 - 매일경제",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE45MzF5MURqbmJFLWZic1RLZk9hMFMySjBWaTV2NUFFOTA5LXM4Qy11V0puRFE5MUJ0VTVva002NnJrdTViUi1VTWZSYXNlWXBR?oc=5"
            },
            {
              "n": 151,
              "title": "한국 수출 사상 첫 '1조 달러' 돌파…독·미·중 이어 세계 4번째 - 대한민국 정책브리핑",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9iYkR5bDEzS25rNGhPV1E1Wk9XZG9hdEhKRk1mWUhmeE5xWEFEWjZsNU1kOWhkZERrdmc5cXI0NG1maUNEbEZQYnBZZnZvTEk1c0hEa2ZUNlNMN1psOGZuZWplVS1DNGhSZ0d6cw?oc=5"
            },
            {
              "n": 153,
              "title": "수출 1조 달러 달성했지만… ‘반도체 편중’ 넘어 성장 온기 퍼뜨려야 - 더스쿠프",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9UTmxsZ3Y2WnhUSTNzMzRGLUxHSjBjdVB5OUJ0MHloa3BKYkVFS19GbWpPdWxJR2dMRTNxRFJIdmpqZVRBVGQ2S0ZiR01SWll3YkxiMkJ0YVNBTkhRUjdrUFRTdUkycWFDRzlWOWVR?oc=5"
            },
            {
              "n": 154,
              "title": "관세청, 1조 달러 수출 마지막 주인공은 반도체 - Daily NTN",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9rOTREWExuT3oyUWh6MkllOWo0eU54cUZuMGRXU2RCbU1JSEw3dFZrdVJIR3ZwTGVrbEUxcmh1N1E1Rm5jOEdXWGlnbGR3V21QdVpiVGtMcUJwMF90TzF5ejEtaHZoQ3h6U3c?oc=5"
            },
            {
              "n": 156,
              "title": "반도체 칩 덕분에 한국의 수출액이 처음으로 1조 달러를 돌파했습니다. - Vietnam.vn",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMilgFBVV95cUxOTE1mX3lOaTJjQnhUQzFRQUNra2pXeHAybl9uU29BV0EzS1k4bnIyVnlXdWhfSWg3MG0xYkUzQkRETWNyV0FtT192TVRlSVVKR2hkOGdTU1BMR2U2R1NJU3VzV2t2M2x4Yk5Nb3NrRUU1UVBKbzdpWDNfSUd4cHZWQUlrUTNjSHFobE9HNDJIWDRxR2ZsMnc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-03",
          "rank_by_count": 3,
          "name": "젠슨 황 사임 후 폭언 및 거짓말 폭로",
          "easy": "젠슨 황이 사임한 이후에 20년 전 직원 위협과 성적 발언, 그리고 네 엄마가 널 낙태했어야 한다는 등의 상습적인 폭언과 이사회 거짓말 논란 소송 기록이 수면 위로 드러났다고 합니다. 뭔 소리냐면, 제왕적 경영을 해왔다는 폭로가 쏟아지면서 충격을 주고 있다는 말이에요.",
          "quote": "[단독] 복귀 요청한 젠슨 황…“20년 전 직원 위협·성적 발언” 소송 기록 수면 위로｜Global Money Club",
          "member_count": 7,
          "sample_articles": [
            {
              "n": 200,
              "title": "\"네 어머니가 널 낙태했어야\"…젠슨 황, 직원들에 상습 폭언 의혹 - 주간조선",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE9MZHVMTWwzaTJoVmEweW9lV2dLa2szOWItenM3SjhLalQtc3l1YzNFZ3N5VFJXX1dkYWtDa2ppNVlvbFNyTC1hU1NGcUo0Q1ZBbTk4UHNwSl9SNk8wMXJVUW53YVAwelZUV2xR?oc=5"
            },
            {
              "n": 201,
              "title": "`네 엄마가 널 낙태했어야`…젠슨 황 사임하자 쏟아진 `폭언` 폭로 - 매일신문",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE9FNVdHREVkeE9mTHhoa2dvbkpxZ1JrbjA0OHREbENoQS1QOU0tYmlNYmhkS29hb1F1dkd6bWcxd1pEZUg5RlJ0dnotTDJDdkhlQ3NlamhFdEQ3TllROFVwWHVB?oc=5"
            },
            {
              "n": 202,
              "title": "\"젠슨황 사임 배경은 '거짓말'\"…임직원에 폭언·모욕 폭로도 - 아시아경제",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1aRXBxdU1ONmV2VXhLdlVuLWFtSWxUcThreFlEOGZtTGw1RGhkWVlKd2pHNmU3RlhXbENTT2daQXpnVTVON3VzV2YyRy1uVncwbU4zVzJUWU04Q1QyckE5ZA?oc=5"
            },
            {
              "n": 203,
              "title": "젠슨 황 사임 후 거짓말·낙태 폭언 논란 제왕적 경영 주장…트럼프 '두 번째 기회' 발언도 주목 - CBC뉴스",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9HUEYxdHl2S0xzUWpLWFZ5Y0Y1UE9tMXRkQ2xfOG9Ga09RMVhrcDFQZjd2Rmx6YlZ6QnRLMFh3XzRtbGpIcllfVjVUVXNPSUdQbkJMdUlpSXBPUGJCT3Y1UnBXcFNVNjdR?oc=5"
            },
            {
              "n": 204,
              "title": "젠슨 황 퇴출 뒤엔 반복된 거짓말…“네 뇌에 오줌 누겠다” 폭언도 - 한겨레",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiggFBVV95cUxOUFBWWDFheXB5VnpDUDA5NEJlWUpXbHhmVXI1NkxNMWM2WVF1TVFhaTFvVG9zRUpOWGgyUkkwMUNNRDIySjhrbGgzZXVud3JPdEVDcUNPaVpRam53Tk5lOUt4cF82aGRnTy04Uk9JX3hnU2JLTlE3LXlwbU51b3g5ZW9n?oc=5"
            },
            {
              "n": 206,
              "title": "[단독] 복귀 요청한 젠슨 황…“20년 전 직원 위협·성적 발언” 소송 기록 수면 위로｜Global Money Club - 중앙일보",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9tYjNIZXdTamM4REd5Zm0zYUlReTNMODgya2Q0eTBMM2NueTV4RkdwX05uM1U1bFhqeG12VmE1MjBrbDdrX2EyS3EzLUdqalZrT01VYnozUTZwVDQ?oc=5"
            },
            {
              "n": 207,
              "title": "\"네 어머니가 널 낙태했어야\"…젠슨 황, 폭언에 이사회 거짓말 논란까지 - 경기일보",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE52LXR3enI4NndLNTFwc1FxbVZWVUJLQ0hRUXphdWlkWWpzV25FaENWWWp3VjNWQkpKbFpKcmRMbjh0Nnd4aGNBN210SDU4YWJicGloNWY4UFd4bUU?oc=5"
            }
          ],
          "flags": [
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-04",
          "rank_by_count": 4,
          "name": "바이오의약품 임상 3분기 급증",
          "easy": "바이오의약품 임상시험 승인 건수를 살펴봤더니 3분기에만 89건을 기록하며 총 203건으로 증가했다고 합니다. 다국가 임상 중심이 88%에서 89% 비중을 차지하며 가파르게 늘었다는 건데요. 뭔 소리냐면, 항체와 종양학 분야에 몰리면서 공급망 리스크 완화가 성장을 견인하고 있지만 글로벌 시험장으로 전락할지 모른다는 경계의 목소리도 나온다는 말이에요.",
          "quote": "바이오의약품 임상 승인 203건…3분기 89건 : 기업·산업",
          "member_count": 7,
          "sample_articles": [
            {
              "n": 958,
              "title": "[바이오사이언스] 바이오의약품 임상 승인 203건…분기마다 증가 - 연합뉴스",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE8zMThSU1pjS25BSTVFS3BhQTJLLXU2c24tbzdFbDdwRFpVSkxvM3IxeGNKeEpVRXlOcGQwelVEOG9HYlZDWnNYYnZiekdZeXEzSVo0SHhkOXpHRDTSAWBBVV95cUxNQjVvbExHdlR3YjQ0ZEVHNmE1bkYyNkhnS3JZeElQVGliNDhKSEViQnZiMWJwczBiU0huSGNiWU1ZZHhiWFhNRkFGbDNRUWRWTGljVzgwM3dZeDVhWkdidUE?oc=5"
            },
            {
              "n": 959,
              "title": "국내 바이오의약품 임상시험 승인 200건 돌파...3분기 89건으로 증가세 - M이코노미뉴스",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5HZ0kxMWZVbFgxSlV5cmMwTVZNUFRLajZUVGV4R1ZHX2UwQ0V4WkhTRFVtLVNOcUZmTjhmMXNudFNaQlZBY2xtOW1DX285SEh1UUZoY1Y4UzlycVIyd1praUhnelNaaEU?oc=5"
            },
            {
              "n": 960,
              "title": "바이오의약품 임상 3상 비중 50% 돌파…\"글로벌 시험장 전락\" 경계 - 바이오북미디어",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE1RNi1VcTF6Sk51ZlhHdVo1NERPY0NNLUIyVW9yZGtacDZfaXZOZFR4MVFuU3puVTBYemJ0R3hiRGU4bWZxZmFoRnhia202b2o0X01mcQ?oc=5"
            },
            {
              "n": 961,
              "title": "국내 바이오의약품 임상 203건…3분기 다국가 임상 비중 88% - www.ebn.co.kr",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9hMGhpWTdMUWFMajNoc3F6U1NEVnZwMGNpdFZhVTRwNm90Wk12M1BwMTZhWTJRQjVseUhvTVZqbTE0OVVMWlpHcWRKVkM2Ym9uNW91eU5SS3h6dWduQnRobXlsNHFwQ3Ba?oc=5"
            },
            {
              "n": 962,
              "title": "바이오의약품 임상 승인 203건…3분기 89건 : 기업·산업 - 재경일보",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE5fMnhYeUs3QmFJQlpULVFGdzhiQ3B1bWxzSkh5TWIydzNGM1NmYkl0S3Rmb2pNb1R1MmhDYU5QbWEyVGc4bzYyaF9Scw?oc=5"
            },
            {
              "n": 963,
              "title": "바이오의약품 임상 3분기 89건…다국가 3상 중심 급증 : 병원·제약 - 의약일보",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE5Md25taEZrVUF2NG9wVFpzSVpSRGFiR3phNDJaQVFpWnVpOTl3Wm5pZWxKYW9mb0JVTTJNQXhJSmI5a2g1VDN1cHFYSVhwdjZoZ0NXcw?oc=5"
            },
            {
              "n": 965,
              "title": "항체·종양학에 몰린 바이오의약품 임상…3분기 89건 : 테크/과학 - 재경일보",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE82WmNPMFJqbkdhYXU1NEpfVGJ0aHUzeGZ4ZGVHODRLV1lnREpXbm9oNXVWaGFDdnpSUlFjNjJrQ1hNMVBTbnVWMHFRcw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-05",
          "rank_by_count": 5,
          "name": "엔비디아 SEC 회계 조사와 주가 폭락",
          "easy": "미국 캘리포니아주가 엔비디아에 조사 소환장을 발부하고 SEC 회계 조사 소식이 겹쳤는데요. 주가가 14%나 폭락하면서 아마존 시총만큼이나 거대한 규모가 증발해 알파벳에 밀려 시총 4위로 추락했다고 합니다. 뭔 소리냐면, AI 테마에 투매 물량이 쏟아지면서 호재도 통하지 않는 폭락 쇼크를 겪었다는 말이에요.",
          "quote": "엔비디아, SEC 회계 조사에 주가 14% 폭락…시총 4위 추락",
          "member_count": 5,
          "sample_articles": [
            {
              "n": 103,
              "title": "젠슨 황 떠난 엔비디아, AI주 매도세 겹치며 아마존 시총만큼 증발 - 조선일보",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOZUlyelBkN0tucVotWUQtNlN1Yml3Z0ZybGZ1SzQ3NUtYdDhwRGNoeWlIYjZDSkh2MU9DVGhXRnREY1VUbHp1T2lsTE9JSHJMNFFxN2FXWW1reFEwQTYwcm16MEFXOFZFZWxudklxbEhZc2ZJZ0VuWGVpZ2wxNmxlMnFoZlppWTdfZWZEV1hR?oc=5"
            },
            {
              "n": 104,
              "title": "엔비디아, SEC 회계 조사에 주가 14% 폭락…시총 4위 추락 - AI타임스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5iT0s1dlpmU1VqMjhsQmlzd25GRW8yME45eElDQWFDS0dpVFhGMHhIQ003dkxETFFkZnBBSC0wZHBmSTZOU3dFZjR5bmczR2FfcVN0dGpsMUQzR292UHpLSmk1MkZ3bi1GYVE?oc=5"
            },
            {
              "n": 105,
              "title": "\"호재도 안 통한다\" 나스닥 5%대 폭락 쇼크...엔비디아 14%↓[뉴욕마감] - 머니투데이 - 머니투데이",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE0tSEFWQ0pNTzVzSE1POG1LMUcybWlGR2VRcnJoYWVzajFVRnR3Umg3ZWp3Y25pMGsyMWdhUFotV2d2VDNnRXZJUzR0TXZCN1hiZVVUUUdDdldUUS1XbldJSTcxbGUtR0NV0gFuQVVfeXFMTUZqQmZFcjFIQ3ZuN253SEZoSXNhLThieDRwelpWOW5scXQ2aDhPNEhVZWdraUZadWZYaVVmX1R5RWpYNmtIRWlydW1PSmkzUG5SUllKUDY0OTNPVWExbXlmQ3RXT2Z6RkRGWU83OWc?oc=5"
            },
            {
              "n": 106,
              "title": "美 캘리포니아주, 엔비디아에 조사 소환장 발부 - 글로벌이코노믹",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQOVBFLVEyWG9CZnFPdERJVXZ2T3JhT2oxbC1veUxqQlVJejdMdEozYkxlSHQ4TUZpWnZaWTF2aDhYcUtsSXl4Z1VTYURvNnM3LUhrdHlrMmxFZVBhbWt2VVZfdy11UmFRamthSnNKT3RHbzFiMHVVcFZQMF9tS1BkcmV2MDhsZERL?oc=5"
            },
            {
              "n": 108,
              "title": "엔비디아, AI 테마 투매에 '와르르'…알파벳에 밀려 시총 4위로 - 연합인포맥스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBNZWVzWTZpYXRxWElLX2dqR3lGSXlWaGJzRnZzeEcwRkFIdXJZeWFsWkxSUlpKaWxYcmQ5b09vTTFnaTBFcHRveUFjby1DZkpwcGhOMWpwVkNSY3NHcEVlM3F1dGZmdWpmWndGazNtbTE?oc=5"
            }
          ],
          "flags": [
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-06",
          "rank_by_count": 6,
          "name": "미 연준 금리 정책을 둘러싼 마찰",
          "easy": "미 연준 이사가 추가 긴축 공감 속에서 금리를 더 올려야 한다고 강조해 봤더니, 트럼프는 경제가 좋은데 금리가 너무 높다며 연준이 매우 정치적으로 움직인다고 비판했다는 겁니다. 뭔 소리냐면, 연준의 추가 인상 속도 시각차와 맞물려 시장이 긴장하고 있다는 말이에요.",
          "quote": "트럼프 \"금리 너무 높아…매우 정치적인 연준 때문\"(상보)",
          "member_count": 5,
          "sample_articles": [
            {
              "n": 159,
              "title": "美 연준 추가 긴축 공감 속 금리 인상 속도 시각차 - 글로벌이코노믹",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPQW1nMlZKUlZ3V3pUZGJvQ2I4b1dZbUR5eHphOG02RjJBdXVXV2RyRHloWjRsclRKNXNDUVIzQWZGLVRYa2NPRGg5a1VIaEdmQkMxYS1YRFd2UzlYTzl2Ym9XSk9HYkJfZ0h6TWdFcVVDZUQ2ZHhURXRqOXBYZl9zN2p4NV83eU0?oc=5"
            },
            {
              "n": 160,
              "title": "나스닥 올해 상승분 반납…미 연준 \"금리 더 올려야\" - 더스쿠프",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE1MLXlpVUNrRS1ZTDR3NUFPdTMxSVF3LUxoNGJXUFg4UUhDZW1rWkEtanpaNURkRnh3cEVRNlppOXJvRFNRTGw0T0pSNjg2Q2ZCT3VhRE9uR2xKaFlkVllUTlV3eWpLRTVzMTNQY2JB?oc=5"
            },
            {
              "n": 162,
              "title": "트럼프 \"美 금리 지나치게 높아…연준, 정치적으로 움직여\" - 블루밍비트",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiUEFVX3lxTFBDTmZtdV9yQV9yODIwV3dKNUhIemp0Z1JSY1FEN3pvaG9YcVRFdW41VmljUld0VkU2Um0xN2oweE9CMHFYaTFHeHZPSEJQVEYx?oc=5"
            },
            {
              "n": 163,
              "title": "美연준 이사, 금리 추가 인상 필요성 강조…트럼프는 \"금리 너무 높아\" - 연합뉴스TV",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE4xNUtpQmJIeG11UkRUWDh1bHA2aDhYRkxFUlNqby1VOXNsS3ZsZEpKRzAxbTJKNEN4TzBpbF9GYWdDTXFuMGlZZ0F5MTlxSXh1NXdjTW9pOU1wcXpTN3dzUFAyOXJlZ3c?oc=5"
            },
            {
              "n": 165,
              "title": "\"대응 늦으면 큰 고통\" 연준에…트럼프 \"경제 좋은데 금리 왜 올리나\" - 조세일보",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFBtRlluRVFaZFlqOFRZbFFucUlxTVpSYmJSYlpnSzRDZ1FwMHVXMWpwOUtfejVKelFXN1FTYmlwbG05bm1YaG05M2VWanFoR1owenhfcTN1NmVxbXRKNkgw?oc=5"
            }
          ],
          "flags": [
            "대표 제목 인용이 원문과 다름",
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-07",
          "rank_by_count": 7,
          "name": "이재명 대통령 울산 AI 데이터센터 현장 방문",
          "easy": "이재명 대통령이 울산 SK AI 데이터센터 건설 현장을 방문해 AI 데이터센터가 산업화 시대의 경부고속도로와 같다며 인력과 전력 지원을 아끼지 않겠다고 강조했다고 합니다. 뭔 소리냐면, 대한민국 AI 대전환을 위해 투자의 속도를 높여야 한다는 의지를 드러냈다는 말이에요.",
          "quote": "李대통령 \"AI 데이터센터가 산업화시대 경부고속도로…인력·전력 지원\"",
          "member_count": 5,
          "sample_articles": [
            {
              "n": 134,
              "title": "李대통령 \"AI 데이터센터가 산업화시대 경부고속도로…인력·전력 지원\" - 연합인포맥스",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9JSzZHMjV6bXo1YkNoU1RKOG9sa3lDYnlKMzVCaU9kbEN3cHJRTUZUSGlHZFktYUNsMnV5X2NKVlN4cWFiQU5wV2EyQk9nOTNlbnVtOWE2YkpVNUthUnR6X0xBNWJwQTd6WTM5eDREc0k?oc=5"
            },
            {
              "n": 136,
              "title": "이재명 대통령, 울산 AI 데이터센터 현장 방문…“지방 성장 기회·균형발전 이끌 핵심 사업” - 강원일보",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBHSEUtM1BHZFdUUGtEUlJSbnl0TG03cUo5ZlRvWHZLSEdoWEJUM1N4Rk5uLTcxdkFnbDFaUzhfeE9kTk1ONGNWWENWa2lGbHB4UHRieXFxTXBkZE0?oc=5"
            },
            {
              "n": 137,
              "title": "이 대통령, “대한민국 AI 대전환, 인공지능 고속도로가 열 것”...울산 SK AI데이터센터 건설 현장 점검 - 인공지능신문",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5MZ0k4WWg3VUQ3cEJfRDktZktRM1dtR0ZqRlRDUjJ3cXBzVkllTlR1cmFwVWsxQV8xU0VDdDdlaDhjT1A1NkNQQy1ZQ2ZIU1FSSUh0MGgwM2NaLW5laDRLQkc0VEFvVkE?oc=5"
            },
            {
              "n": 138,
              "title": "李대통령 \"AI데이터센터·메모리 수요 더 늘 것…속도가 생명\"(종합) - 연합뉴스",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1tbkpkQldyMmNNS0xKRkdyQlRnVXIxMkNPYXVpb0J3NWpGaGR0RjU2NlV0Nnlsem54Q1pxUlBqSXpRMXpaYW56LS0yNXU2S29fX3NRa2QtNlpVM1HSAWBBVV95cUxPQXJyTU1LaDJxbUxNVDVIS0NKV3Q5M3BXMVMzSUQ4eGNRXzZfanVWU2pWdDhJdjctWVRQdW00eFpKakdMRVlfTkl6TmRlT3cwQXdvdG1IVnRQWnFxU285eTk?oc=5"
            },
            {
              "n": 141,
              "title": "李대통령 “AI 데이터센터ㆍ메모리 수요 더 커질 것⋯투자 속도 높여야” [종합] - 이투데이",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTFBHbVEtRmkyVGY2ejFSZTB1UlF2THBscnpBb2JQV2NWdW41RkwxWFpSZWRlMnJ2amJ3TDBHTUdTaU45dm9SLWpLcklzR2tWUmQ0eHdDZw?oc=5"
            }
          ],
          "flags": [
            "대표 제목 인용이 원문과 다름"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-08",
          "rank_by_count": 8,
          "name": "원전 차액계약 도입",
          "easy": "정부가 전력거래의 32%를 차지하는 원전의 전기값을 2027년 1월 1일부터 차액계약으로 정산하는 방식을 주력 전원에 처음 적용하기로 했다고 합니다. 뭔 소리냐면, 현물 중심의 전력시장 구조를 전환하는 신호탄이라는 말이에요.",
          "quote": "원전 전기값, 2027년부터 '차액계약'으로 정산한다… 주력 전원 첫 적용",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 968,
              "title": "[기후부] 2027년 1월 1일부터 원전 차액계약 적용 - 워터저널",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMidkFVX3lxTFB2ejJ2WEZBZUZHTDJ0QklKLV90d2F6WW56WTJCS3BkTlk5d2J4OGEzZEN6S3huYzZQb3hwQUtoQTNFczRCT0lEaHVtVTNOVmZMbVRCOUlkWXBrX2QtZy16eVVwcWdIQ1Z0ZlRJQ1IwT2RKek0tMnfSAXZBVV95cUxQdnoydlhGQWVGR0wydEJJSi1fdHdhelluelkyQktwZE5ZOXdieDhhM2RDekt4bmM2UG94cEFLaEEzRXM0Qk9JRGh1bVUzTlZmTG1UQjlJZFlwa19kLWctenlVcHFnSENWdGZUSUNSME9kSnpNLTJ3?oc=5"
            },
            {
              "n": 970,
              "title": "원전 전기값, 2027년부터 '차액계약'으로 정산한다… 주력 전원 첫 적용 - https://www.2news.co.kr/",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9KWGd2d0RoQl9WRFY0d203aW5fOTZZemtCMVZNbXdvZHNmR0JDejAta3otWTViYzN0QzhZZzFvZWRzekp4OC1Pbk9TOGc2UVNKVXVTZVZ3bnhfNmFFd1B3Y1N3dmwxV1Zj?oc=5"
            },
            {
              "n": 971,
              "title": "[에너지이슈] 전력거래 32% 원전 품은 ‘차액계약’ 변경...현물 중심 전력시장 구조 전환 신호탄 - 산경e뉴스",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9YNW9ScWp5djlpMTRJQXN3TkhfWGdMcEdSOUV4anVlbGZEaWY1ZnpNaWxRdFRSM2lIejZmVUFmeEdGZlpWcWZGQ0pBRFFXMG45WkhfTS1QSFVEa3dYMjVCMWF6ajQySXM?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-09",
          "rank_by_count": 9,
          "name": "삼성전자 반도체 기술통 전진 배치",
          "easy": "삼성전자가 반도체 기술통 3명을 사장으로 승진시키는 등 전영현과 노태문의 투톱 체제를 유지하며 미래사업에 집중하는 인사를 단행했다고 합니다. 뭔 소리냐면, 반도체 경쟁력을 강화하기 위해 기술 전문성을 전면에 배치했다는 말이에요.",
          "quote": "삼성전자, 반도체 기술통 3명 사장 승진…전영현·노태문 미래사업 집중",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 94,
              "title": "삼성전자, 반도체 기술통 3명 사장 승진…전영현·노태문 미래사업 집중 - 중앙일보",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBmN0k0MFd1R1VUQ1p2UjRpb2RlcGs2UGZ2ZFN4LWNyNHZFYVFIYVRna0JjWnZRcUczblZIRW1kNkFBWXc1N2I0M1RjZS1uby1ZMzMtT0Nn?oc=5"
            },
            {
              "n": 95,
              "title": "삼성전자, 반도체 전영현·갤럭시 노태문 '투톱' 유지 - MBC 뉴스",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTFBjVUc0djdaRWhyUGpiRkxCanRkVnBocm1jMWJiQ3pkTzV5MjIzalVfRGQ5TDAwOXZseFBhWTg3c2I4dS1GVGxublc2VlNZbDAydS1aWU9FU2x5dVFsRWRvUENkYXBIWnpzTVl3eGNaVFFVZXNh0gF0QVVfeXFMTVQ4UFZ0Q21SX1RCWjBVNnNpZVM3RjBGWVVSNkMzSVp0V3RJSFZ4Sk9PMTdrUEJlUFZscnNpYzBZOTUzak1YcE15UDF1SjFCTFRlc18zVnllY3FfOC1xVTZQT21RcV8zeldicnkzQ183LUtpemg?oc=5"
            },
            {
              "n": 100,
              "title": "삼성전자, 반도체 기술통 전면 배치…전영현·노태문은 미래사업 집중 - 에너지경제신문",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5UN1UzWFo2VnUxR0libElhWTFYUWt1bTFMNl91MU84djd5cWlwMzN3enNyb1dHN0xhM25FSFpmMEQ0ZWRPbjFFS0FTMUtjQmZ4ZGRTM0JlT0tvVXM?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-10",
          "rank_by_count": 10,
          "name": "KT-LG전자 양자통신 기술 개발",
          "easy": "KT와 LG전자가 차세대 양자통신 기술 개발에 성공해 양자 상태로 데이터를 직송하는 1024비트 전송 실증을 마쳤다고 합니다. 뭔 소리냐면, 양자직접통신 분야에서 실질적인 성과를 거두며 기술력을 입증했다는 말이에요.",
          "quote": "KT-LG전자, 차세대 양자통신 기술 개발 성공…",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 955,
              "title": "KT-LG전자, 차세대 양자통신 기술 개발 성공…\"양자 상태로 데이터 직송\" - 뉴스워치",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBHelFsaC0zTWpFRFIzYm04dkJpXzJoVl85N3h4dUNveGJubVEzWGdpR2NUN0wyVWhIUVF5c0RKVko3aTBZNE16NHdmWUgzdzhZSVlXTkc1UGVTT2V1dFNSa09fVzVGYjl0?oc=5"
            },
            {
              "n": 956,
              "title": "KT·LG전자, 차세대 양자직접통신 실증…1024비트 전송 - 한국신용신문",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE1kZW9NOW1VWmpjMkxoSzViXzVYNF9vVjM0alotck92S1lEd1JQclhib0YybFYwNHR1VGlpX2RHM0IwcjFVV3ZmUGdvSGprUG8wQXhsdmdCaVJRTXB5VktRZlBpT2c4WjBLYkI4?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-11",
          "rank_by_count": 11,
          "name": "비수도권 AI 데이터센터 전력계통평가 면제",
          "easy": "정부가 비수도권에 지어지는 50MW 이하의 AI 데이터센터에 대해 전력계통영향평가를 면제하는 추진에 나섰다고 합니다. 뭔 소리냐면, 지방 성장 기회와 균형발전을 이끌 핵심 사업으로 속도를 높이고 있다는 말이에요.",
          "quote": "비수도권 AI 데이터센터, 50MW 이하 전력계통영향평가 면제 추진",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 135,
              "title": "비수도권 AI 데이터센터, 50MW 이하 전력계통영향평가 면제 추진 - AI타임스",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9LQUtKdGZmRi1FQ21TN25CM0w2Mm1IOEIyMmNVUW5acUJxamppMlFYXzVYdDBRbFVBREpuVGxaM2RxNElROFlERXJBVGMxcElLMjc3dG1yY2VvUEJFZlZTUEVFQnRHNnVRZ1E?oc=5"
            },
            {
              "n": 140,
              "title": "AI 데이터센터, 비수도권 50MW 이하 전력계통평가 면제 - 진일보 | 전남일보",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1za055QTMyWkxzNC1GMkdXTGQ5RGVVSTJXYk5kTFpTWm9LYm5xWkV2a01TOEVzbVo2S2RSdWw3aG55ZTdlX3RCbHIyaFRQQ0tMU1pQM0hEYWtBNTBXTWE0Q1RSVzNNRjZkcGUzMUl3UQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-12",
          "rank_by_count": 12,
          "name": "영종구자원봉사센터 한전 김장 나눔",
          "easy": "영종구자원봉사센터와 한국전력공사 영종지사가 함께 모여 사랑의 김장 나눔 행사를 펼치며 봉사자 60명의 온정을 모았다고 합니다. 뭔 소리냐면, 지역 사회를 위해 두 기관이 힘을 합쳐 따뜻한 나눔을 실천했다는 말이에요.",
          "quote": "영종구자원봉사센터, 한전과 함께 사랑의 김장 나눔…봉사자 60명 온정 모아",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 56,
              "title": "영종구자원봉사센터, 한국전력공사 영종지사와 사랑의 김장 나눔 펼쳐 - 인천타임스",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE9hZVJxelozMHV6ZlprZ2VDN194VGJieGhtRnl0QXluZnZuRW5RRXZUYi1jdE1FUUVrUXhIdTBBOGVmTkJ0aFZOQVJSVElrNndqdFpDdHBnZzl1aUcta1p2M3oxRTU5Zw?oc=5"
            },
            {
              "n": 61,
              "title": "영종구자원봉사센터, 한전과 함께 사랑의 김장 나눔…봉사자 60명 온정 모아 - 영종뉴스",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9KQWNLeEZSZlQyRDJ0MENMQllxbERndDNOSm0xYmZtVmRQb3lqQkZySUxMdUVzYXlCUmdGblJoM0UxUXZURUo0Y20yQmxBOU1PZGc3bWF5X1M3UERKNVRXVGl5c2pzaFZLNEstdQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        }
      ],
      "single_articles": [
        {
          "id": "e261122-13",
          "rank_by_count": 13,
          "name": "AWS 이어 엔비디아·오픈AI까지 손잡나…SK, 신설법인 앞세워 GW급 AI 공략",
          "easy": "",
          "quote": "AWS 이어 엔비디아·오픈AI까지 손잡나…SK, 신설법인 앞세워 GW급 AI 공략",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 26,
              "title": "AWS 이어 엔비디아·오픈AI까지 손잡나…SK, 신설법인 앞세워 GW급 AI 공략",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2186200"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-14",
          "rank_by_count": 14,
          "name": "UBS, 전국 운항 중단이 미국 항공사 4분기 전망에 미치는 영향 분석",
          "easy": "",
          "quote": "UBS, 전국 운항 중단이 미국 항공사 4분기 전망에 미치는 영향 분석",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 27,
              "title": "UBS, 전국 운항 중단이 미국 항공사 4분기 전망에 미치는 영향 분석",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2186182"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-15",
          "rank_by_count": 15,
          "name": "인테사 산파올로, 몬테 데이 파스키에 345억 유로 규모 인수 제안 공식 개시",
          "easy": "",
          "quote": "인테사 산파올로, 몬테 데이 파스키에 345억 유로 규모 인수 제안 공식 개시",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 28,
              "title": "인테사 산파올로, 몬테 데이 파스키에 345억 유로 규모 인수 제안 공식 개시",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2186175"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-16",
          "rank_by_count": 16,
          "name": "AI 칩 흐름이 달러 패권을 어떻게 재편하고 있나",
          "easy": "",
          "quote": "AI 칩 흐름이 달러 패권을 어떻게 재편하고 있나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 29,
              "title": "AI 칩 흐름이 달러 패권을 어떻게 재편하고 있나",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2186163"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-17",
          "rank_by_count": 17,
          "name": "혁신적 변화에 투자하는 방법",
          "easy": "",
          "quote": "혁신적 변화에 투자하는 방법",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 30,
              "title": "혁신적 변화에 투자하는 방법",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2186136"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-18",
          "rank_by_count": 18,
          "name": "UBS, 원자재 투자 매력 여전히 유효…유가 공급 프리미엄 완화에도 불구",
          "easy": "",
          "quote": "UBS, 원자재 투자 매력 여전히 유효…유가 공급 프리미엄 완화에도 불구",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 31,
              "title": "UBS, 원자재 투자 매력 여전히 유효…유가 공급 프리미엄 완화에도 불구",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2186080"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-19",
          "rank_by_count": 19,
          "name": "[분석] ’구조적 사이클 붕괴’ 인정한 LG화학…AI-Driven 전환·이사회 강화 승부수",
          "easy": "",
          "quote": "[분석] ’구조적 사이클 붕괴’ 인정한 LG화학…AI-Driven 전환·이사회 강화 승부수",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 32,
              "title": "[분석] ’구조적 사이클 붕괴’ 인정한 LG화학…AI-Driven 전환·이사회 강화 승부수",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2186074"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-20",
          "rank_by_count": 20,
          "name": "AI 지출 4조 달러 시대…’멤플레이션’ 올라탄 삼전닉스 독주",
          "easy": "",
          "quote": "AI 지출 4조 달러 시대…’멤플레이션’ 올라탄 삼전닉스 독주",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 33,
              "title": "AI 지출 4조 달러 시대…’멤플레이션’ 올라탄 삼전닉스 독주",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2186060"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-21",
          "rank_by_count": 21,
          "name": "[CEO 리더십] 전사 지휘 김동춘, LG화학 기술력 ’고부가 전환’ 승부수",
          "easy": "",
          "quote": "[CEO 리더십] 전사 지휘 김동춘, LG화학 기술력 ’고부가 전환’ 승부수",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 34,
              "title": "[CEO 리더십] 전사 지휘 김동춘, LG화학 기술력 ’고부가 전환’ 승부수",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2186049"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-22",
          "rank_by_count": 22,
          "name": "상장 앞두고 터진 보안 사고…컬리, ’초저마진’ 회의론에 1만명 정보유출 악재",
          "easy": "",
          "quote": "상장 앞두고 터진 보안 사고…컬리, ’초저마진’ 회의론에 1만명 정보유출 악재",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 35,
              "title": "상장 앞두고 터진 보안 사고…컬리, ’초저마진’ 회의론에 1만명 정보유출 악재",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2186048"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-23",
          "rank_by_count": 23,
          "name": "다크웹서 \"한전 이용자 정보 확보\" 게시물 등장",
          "easy": "",
          "quote": "다크웹서 \"한전 이용자 정보 확보\" 게시물 등장",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 57,
              "title": "다크웹서 \"한전 이용자 정보 확보\" 게시물 등장 - 지디넷코리아",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1HcXFtbkdlMWdEUDlKa0pBZGdEaUZEelVYU0dEdkxXY1p0cmNrUm5Td3lQNEFtaHM1VDVwa09TOWhLcW9KTlJweU5Mb0ZyR294bTVodVZR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-24",
          "rank_by_count": 24,
          "name": "두산에너빌리티 주가 8%대 급락…원전주 애프터마켓 ‘희비’, 한국전력·금화피에스시는 상승",
          "easy": "",
          "quote": "두산에너빌리티 주가 8%대 급락…원전주 애프터마켓 ‘희비’, 한국전력·금화피에스시는 상승",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 58,
              "title": "두산에너빌리티 주가 8%대 급락…원전주 애프터마켓 ‘희비’, 한국전력·금화피에스시는 상승 - CBC뉴스",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9NT3h0VHRtUFBzdEZjTmxfUGg4R3hObW1GN09fdXl4Szk3NlFtRmNEXzJ4N1phR1RFbEk5UDdxaERjVHhvV3pGLUhWMTNXWV9NaG42a2lOaWh6VnRjbWZJdmJkYTUwUm5B?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-25",
          "rank_by_count": 25,
          "name": "LS전선, 한국전력 '화원-안좌' 해저케이블 증설 사업 수주",
          "easy": "",
          "quote": "LS전선, 한국전력 '화원-안좌' 해저케이블 증설 사업 수주",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 62,
              "title": "LS전선, 한국전력 '화원-안좌' 해저케이블 증설 사업 수주 - 팍스경제TV",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE1xbUs1ZUppZ0twVDFsTkN4WGp6VWlaVlRDNUtuOVExOXVmRGNzSkZTTzF2WVdXN1AxaE9EYWZjSG45cnlDb2lJeDBKSnFVOWZqNGxWbHBhSF80SW43WXlESlBWLXJXeG40?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-26",
          "rank_by_count": 26,
          "name": "웃돈 주고 샀는데 가짜?…애플·BMW 의심에 기업들 '초비상' [김리안의 에네르기파WAR]",
          "easy": "",
          "quote": "웃돈 주고 샀는데 가짜?…애플·BMW 의심에 기업들 '초비상' [김리안의 에네르기파WAR]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 63,
              "title": "웃돈 주고 샀는데 가짜?…애플·BMW 의심에 기업들 '초비상' [김리안의 에네르기파WAR] - 한국경제",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5GaGJXR3hOZUJlXzhTUGx6OXJjSlBBUVVwSDlGYzdVNmZhaGxFblB3d3htbGVaa3lMc3I1Q2RXQm84SHNKNENfTGNrc2hqd1RRLVppb1NfRmZ4dw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-27",
          "rank_by_count": 27,
          "name": "글로벌 전력기업 연합, 전력망 신설 역대 최대...투자규모 연 1560억달러로 상향",
          "easy": "",
          "quote": "글로벌 전력기업 연합, 전력망 신설 역대 최대...투자규모 연 1560억달러로 상향",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 64,
              "title": "글로벌 전력기업 연합, 전력망 신설 역대 최대...투자규모 연 1560억달러로 상향 - 전기신문",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE94TUw5VXNyYjFXcHVGaHN5SEpoUTh2d184RXVTYmJLdFhwejVOS0pYY2xiVVJlOXZud0dCTE5pQkRURE5SZjlBemRpRmxTa0xxRUlxNXdseVVaOUhwZU9pcjRNQTVzZUtNV0hYYdIBcEFVX3lxTE9OWTJpdnZlWm9BckhfQmR6ZDViZE4tNWxMZV9mZ012SXhPV2xZd21nY0lyLXdEUkc2YjdLTnYtRkU1anRZY2ExdGJpb01yTXVXVEVMdFd5bi1xTUlRelAzUkdTTmJrVFRRSXRXeTUzTTE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-28",
          "rank_by_count": 28,
          "name": "임실군의회, 초고압 송전선로 대응 특별위원회 출범",
          "easy": "",
          "quote": "임실군의회, 초고압 송전선로 대응 특별위원회 출범",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 67,
              "title": "임실군의회, 초고압 송전선로 대응 특별위원회 출범 - 더파워",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMifkFVX3lxTE1RQ0V0b3pqMzBKRzVZd0RNTk5yUXNELXV5OHZjN25qS2REU1NJMzgyV0FYdDNPdjhTNFdESFRWSWJFOXljSFJGX3kxSzEwU2R1U3pCZm9ieTlsdmJ0akdlYjhiR2ROX2JhRVAzSHFKa29vZ204V1RKMlYteVdDQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-29",
          "rank_by_count": 29,
          "name": "트라린과 트라렝 지역의 60가구에 국가 전력망을 연결합니다.",
          "easy": "",
          "quote": "트라린과 트라렝 지역의 60가구에 국가 전력망을 연결합니다.",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 68,
              "title": "트라린과 트라렝 지역의 60가구에 국가 전력망을 연결합니다. - Vietnam.vn",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMikAFBVV95cUxNTUxzRi1qTUlFZDR3eUdfc050cEgzNy1pbTlGTkt3WEg2XzZTdEFtM1RWOXhlalROLXdNZjhINkdmSl9JcFdGWENRamd4TnA4VDROWUJDTnpjbkZSLWZxa2ZDMnF2aW13Y0RsUHFIOEtIdGxwSEhKZjEydTRHLTV6bTB5cTZ0YkE0a1I0dko0VHg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-30",
          "rank_by_count": 30,
          "name": "전력망 복구팀: 판쩌우찐 거리의 전력망 지중화 작업을 신속하게 진행하기 위한 조율 업무를 수행하고 있습니다.",
          "easy": "",
          "quote": "전력망 복구팀: 판쩌우찐 거리의 전력망 지중화 작업을 신속하게 진행하기 위한 조율 업무를 수행하고 있습니다.",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 70,
              "title": "전력망 복구팀: 판쩌우찐 거리의 전력망 지중화 작업을 신속하게 진행하기 위한 조율 업무를 수행하고 있습니다. - Vietnam.vn",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOYUFodTFid2JXbHphQUx2WGhNWEFJMmlPejdxOFg4dE1yOGRIQTVBd1ZHT0JGN0xxdEdRYnFEMVBzMjNKWnYtOFVfUDNyV3JUNDhYTFU5SEZRLUNfWkl2Y29fUVBEb0RDRlFLaWVhQWgxRzBzYkN0WVBQZmJWN0dsS1RQMnRyYTVCc21jQlFCd3hoT2VsTW1nRXNzSkxGOWJZOENFc1VMTFBVV3lRalloX1oyaEVWd0l1OV9EWERn?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-31",
          "rank_by_count": 31,
          "name": "IEA, 전력수요 1만TWh 증가 전망…원전·전력망 부상",
          "easy": "",
          "quote": "IEA, 전력수요 1만TWh 증가 전망…원전·전력망 부상",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 71,
              "title": "IEA, 전력수요 1만TWh 증가 전망…원전·전력망 부상 - 에너지안전신문",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9jSWs2R1dUNU9RM1NSSTJaVFR4NUpZMGxjYjdyNnNGRUp5eXA4N3hQekJWd2pvTmppSmtFcEhCWDlFRV9HNjhmQkxZNHFyQ3NrM0dod3NTRUNsQ0lLRlMwaVc1NHA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-32",
          "rank_by_count": 32,
          "name": "[소부장 테크페어] PI첨단소재, AI·HBM 겨냥 폴리이미드 기술 고도화",
          "easy": "",
          "quote": "[소부장 테크페어] PI첨단소재, AI·HBM 겨냥 폴리이미드 기술 고도화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 79,
              "title": "[소부장 테크페어] PI첨단소재, AI·HBM 겨냥 폴리이미드 기술 고도화 - 전자신문",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1GWHBzN1lmeTd2X2ljeGRUcU9Hb2RPQ3RlMWVvdm5sOU1tdEstLWZtTVE5ZjJkVnRtQ0xOVzRpekdRWGlWUldnUUxidjhXdw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-33",
          "rank_by_count": 33,
          "name": "팔지도 않을 SK하이닉스, 소프트뱅크 손정의는 왜 인수하려 했나",
          "easy": "",
          "quote": "팔지도 않을 SK하이닉스, 소프트뱅크 손정의는 왜 인수하려 했나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 80,
              "title": "팔지도 않을 SK하이닉스, 소프트뱅크 손정의는 왜 인수하려 했나 - 경북매일",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5yQWhJa0dIeFRiQTZJSExHbFg2aG1BQ3F4b3JHRlZlZkVKNkdHalkwSnBSRzVoanRQT0ZnSTJTX3NLSklzQkdjSzZPT1ZDeXhQNEtjWGtqV1dkUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-34",
          "rank_by_count": 34,
          "name": "손정의 'SK하이닉스 1조 달러 승부수'…SK하이닉스 산다고?",
          "easy": "",
          "quote": "손정의 'SK하이닉스 1조 달러 승부수'…SK하이닉스 산다고?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 81,
              "title": "손정의 'SK하이닉스 1조 달러 승부수'…SK하이닉스 산다고? - OBC 뉴스",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5ZcGZGSnlrOTRuNVdUdHU0aXphUTlBZUV2QnppSDdZVElvRC1HMTIxMGVidFVEaXR3M3Y1N1RFUWM0NHNRSWg0THZUdm9oM1hBZUx3Ml9mckI4VGdyTDFfMmthNXhQVEF2SVE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-35",
          "rank_by_count": 35,
          "name": "중국, SK하이닉스 HBM 기술까지 베끼나...반도체 장비 수입 4배 폭증 [Pick코노미]",
          "easy": "",
          "quote": "중국, SK하이닉스 HBM 기술까지 베끼나...반도체 장비 수입 4배 폭증 [Pick코노미]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 83,
              "title": "중국, SK하이닉스 HBM 기술까지 베끼나...반도체 장비 수입 4배 폭증 [Pick코노미] - 서울경제",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5aRkh6ZDJSRE53dXBJeFVsYVRndlVoOXdIT05DOHEwb0hFRVAtUzJ0U05WZzROTHUxZlZPU09qUy1SSHRxYXRCcXA1aUNNUGw4bHfSAVNBVV95cUxOMlRxaGNuaWw3ZWxrbXd5bS1fdWVReHFQT0hVdl80NWpnLVFXOUg5cGlTbnB5Slkzb1RtQUdNaldzdHRrYk4zVDRha1pyS2tZS1JLQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-36",
          "rank_by_count": 36,
          "name": "“삼성전자-TSMC, 중국에 일부 반도체 출하 중단 통보”",
          "easy": "",
          "quote": "“삼성전자-TSMC, 중국에 일부 반도체 출하 중단 통보”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 99,
              "title": "“삼성전자-TSMC, 중국에 일부 반도체 출하 중단 통보” - 동아일보",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMidkFVX3lxTE0xd2NsaGk3U3IwLVpONEtSSnp2UE9NcVU0d0E3cGRmaE04bEUtU19ibmxnQVowTVhHUEhlYjVlM3JNSE9rSW9nSEU0d1R1NWxXb0h4Qkp5cTYxQW5oaGxDZ1NPRk5faWZJZjBCUzVkcXJvQ1dwenfSAWZBVV95cUxQNWFFN3NuVEZla0k3N1hGbVFIRnNiWVRMRlhBdDVMSzgzMklSM0Y2SHktSVB2OHgwRXlwZ09DWVpTNGNtcUY0cVJHcXg1b3FPT2JtU25iUEp0Z205VnNPOWRLZVphYkE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-37",
          "rank_by_count": 37,
          "name": "7주 만에 '3800조' 증발…'CEO 불륜' 쇼크에 섬뜩한 경고 [분석+]",
          "easy": "",
          "quote": "7주 만에 '3800조' 증발…'CEO 불륜' 쇼크에 섬뜩한 경고 [분석+]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 102,
              "title": "7주 만에 '3800조' 증발…'CEO 불륜' 쇼크에 섬뜩한 경고 [분석+] - 한국경제",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE0yWVV3YjFKUDBDQW5jM1hNRnFvcEx4WFk5eGFiRHJZQ01IZnpWVkdONEk1dTFqbzVmYzhBQzFYeDZOTllocXJyMmdSSUFYNjhnc3BTTjI3RUtBZw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-38",
          "rank_by_count": 38,
          "name": "국장서 당해놓고 또?…‘반도체 3배’ 이어 ‘엔비디아’ 쓸어 담는 서학개미",
          "easy": "",
          "quote": "국장서 당해놓고 또?…‘반도체 3배’ 이어 ‘엔비디아’ 쓸어 담는 서학개미",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 107,
              "title": "국장서 당해놓고 또?…‘반도체 3배’ 이어 ‘엔비디아’ 쓸어 담는 서학개미 - 매일경제",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBaWlZNNFprYkh5STBkNkNfcDNzV1RuMGNfNmhDWVZnZFFGX21EWnJPeDdEMGJCUzQwWElPZzlROHlHa1FtY0pzc3pZWXpObkpnU3c?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-39",
          "rank_by_count": 39,
          "name": "AWS 이어 엔비디아·오픈AI까지 손잡나…SK, 신설법인 앞세워 GW급 AI 공략 By FinancialPost",
          "easy": "",
          "quote": "AWS 이어 엔비디아·오픈AI까지 손잡나…SK, 신설법인 앞세워 GW급 AI 공략 By FinancialPost",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 109,
              "title": "AWS 이어 엔비디아·오픈AI까지 손잡나…SK, 신설법인 앞세워 GW급 AI 공략 By FinancialPost - Investing.com 한국어",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE44QkRTTTJGQmJGVHNRLWlXQ3NuRmdTWE4wUzBMbENIX0lMaU9OOWVJY0dsTS1QOWZYbjBYRDVVcXR2cUZDNGVVclQ3VFBtX1phUjJ4dS1XZTNRMm1aYVNCTmk4WlVmQVQ2ekdZN09TVHQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-40",
          "rank_by_count": 40,
          "name": "英 원자력 매체 “필리핀 SMR 놓고 韓·美 경쟁…한국 강점 많아”",
          "easy": "",
          "quote": "英 원자력 매체 “필리핀 SMR 놓고 韓·美 경쟁…한국 강점 많아”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 110,
              "title": "英 원자력 매체 “필리핀 SMR 놓고 韓·美 경쟁…한국 강점 많아” - 더구루",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE1DWnVuc3hxX1hFUFRoSkVOT1FpZDBQRThMUGl2OHR3a28yUUEwRVJnMUh1d2Y0Tl81RVVWak9OejJrWDB0eldVZ1hHVjhnWGRRLXFrWXVjMW02LURaSnMxRGtTTQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-41",
          "rank_by_count": 41,
          "name": "[데스크 칼럼] ‘관급’이 바꾼 핵잠 수주전··· ‘원자력’ HD현대 vs ‘실적’ 한화오션",
          "easy": "",
          "quote": "[데스크 칼럼] ‘관급’이 바꾼 핵잠 수주전··· ‘원자력’ HD현대 vs ‘실적’ 한화오션",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 114,
              "title": "[데스크 칼럼] ‘관급’이 바꾼 핵잠 수주전··· ‘원자력’ HD현대 vs ‘실적’ 한화오션 - 그린포스트코리아",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMidkFVX3lxTE4xY3dlZEVkMUJDaXV2aW5XbU5tZnZtV2RBb3hPUnl6ZkVqdHN2TEk4Sk4wNjJyWnJJWHRxcHF1SXZqWEFRbnlpd1NkejRPdGlHTDJRYjZDZ1otM0FmQndUV2tIakYzZFNVX0xHMnZibHktdkNWS0HSAXpBVV95cUxNaWNCTDJXWjhjSWZqaDVBYmhnTGt4djl5UWdOLVRpcVdvOHRycWswUTFZUUpRQ1E5Z01UaHhzMUZBOWUyc1Z3c2RxelByc2p6Rmx2dU5pVTQ1TlZnMG5HWTFncVQtVDM4Z1hOcVlkTlc0SjZRbEJDb0lxQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-42",
          "rank_by_count": 42,
          "name": "SNT에너지, 국립창원대와 손잡고 차세대 SMR 기술 개발 나선다",
          "easy": "",
          "quote": "SNT에너지, 국립창원대와 손잡고 차세대 SMR 기술 개발 나선다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 115,
              "title": "SNT에너지, 국립창원대와 손잡고 차세대 SMR 기술 개발 나선다 - 이투데이",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE9QQ0h1UjdURG51TDVtR3V3TlRKb2dHYVZZN1BpWFpyd0hQTXRSUTlRalRlYXlQU0Y0c2RsMXRpWURRTGVoZEt2dGdfSFF0bVNSLWUwTw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-43",
          "rank_by_count": 43,
          "name": "경남·두산, SMR 생산거점 조성·지역 인재 채용 논의",
          "easy": "",
          "quote": "경남·두산, SMR 생산거점 조성·지역 인재 채용 논의",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 116,
              "title": "경남·두산, SMR 생산거점 조성·지역 인재 채용 논의 - 헤럴드경제",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE0wVm8xZ3hRclB1cm5LM29WTW1ZemZTalpOQmY1SmRnZkp4cWxGWWNNRU9hWWhmUVNhWjdHOGJWTTJRRUc5cm1VWEhWMmdyRFNCcmtZdll3?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-44",
          "rank_by_count": 44,
          "name": "두산에너빌리티 8.11% 하락…SMR 수주 모멘텀 속 숨 고르기",
          "easy": "",
          "quote": "두산에너빌리티 8.11% 하락…SMR 수주 모멘텀 속 숨 고르기",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 117,
              "title": "두산에너빌리티 8.11% 하락…SMR 수주 모멘텀 속 숨 고르기 - 잡포스트",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE1KZk56bDJqOFRwRkhEQzQ3V0MwMkNva0JfN3JBWUVSZDhtZWhuTWd6WGNmbUpJdlUxLXE5WkVTa3M2a2NkOFVYc3R0dDF0bnRGZGpOSTlYV3dTVEFhai1QMGpBckt2cUloMXdnZHEzdHlCUdIBckFVX3lxTE1KZk56bDJqOFRwRkhEQzQ3V0MwMkNva0JfN3JBWUVSZDhtZWhuTWd6WGNmbUpJdlUxLXE5WkVTa3M2a2NkOFVYc3R0dDF0bnRGZGpOSTlYV3dTVEFhai1QMGpBckt2cUloMXdnZHEzdHlCUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-45",
          "rank_by_count": 45,
          "name": "전기차 둔화 맞선 LG에너지솔루션, 폴란드 배터리 거점 ESS 라인 전환 추진",
          "easy": "",
          "quote": "전기차 둔화 맞선 LG에너지솔루션, 폴란드 배터리 거점 ESS 라인 전환 추진",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 118,
              "title": "전기차 둔화 맞선 LG에너지솔루션, 폴란드 배터리 거점 ESS 라인 전환 추진 - 글로벌이코노믹",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQclQtNVRQQ0pQN1VieFVWYWxQcWlCMjV0d1lrUWpzdEw3aWNldi1NZU90X1BtR1lzZzFQVzktT0c5dXNzNGIwekFmSE1DWEkwc0U4cURQZmZNekdOcDJVMUFVMU1TVnktZnAyWWFyOHJsSjJCanJYaGx1TnptQ3paUFBOYUQwYmNE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-46",
          "rank_by_count": 46,
          "name": "LG에너지솔루션, AI 데이터센터가 새 고객…북미 ESS 시장 공략 속도",
          "easy": "",
          "quote": "LG에너지솔루션, AI 데이터센터가 새 고객…북미 ESS 시장 공략 속도",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 120,
              "title": "LG에너지솔루션, AI 데이터센터가 새 고객…북미 ESS 시장 공략 속도 - 핀포인트뉴스",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTFBvYkJNZk01SVdTM25WdFYxdDBGbnVXSG1fbmQyMDFvQWJFaXp1ZkJyTmtsREhXXzl4WHNKZVlmN0ZNNkkxenFtZzlxN0s2a1YxTVFxY2lZam9IbzRPT08xMUpWanRIS0dCbW92d3VuTzFRVVNiX2pZ0gF3QVVfeXFMUG9iQk1mTTVJV1MzblZ0VjF0MEZudVdIbV9uZDIwMW9BYkVpenVmQnJOa2xESFdfOXhYc0plWWY3Rk02STF6cW1nOXE3SzZrVjFNUXFjaVlqb0hvNE9PTzExSlZqdEhLR0Jtb3Z3dW5PMVFVU2Jfalk?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-47",
          "rank_by_count": 47,
          "name": "[단독] SK온, LFP로 ‘제주 25년 장기계약’ 입찰 참여…초장기 수명 검증 시험대",
          "easy": "",
          "quote": "[단독] SK온, LFP로 ‘제주 25년 장기계약’ 입찰 참여…초장기 수명 검증 시험대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 122,
              "title": "[단독] SK온, LFP로 ‘제주 25년 장기계약’ 입찰 참여…초장기 수명 검증 시험대 - 전기신문",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTFAwX2dDUFU1TFpDMEhCYzVad3JkWFlLMExfcktwdUFDTTdteVl0MG4yd2V2RmdPbDN4dXVGcnM5aFRCa1VYeGhNczlFeXk1eVZobzgwLUpkRTlTb1dLN3ZSbWx0aTZZQ3VaVGMtMtIBcEFVX3lxTE5zeVNRN1dKem1qNmllQmJ4a3BERG85TV9pQnFhWG9IWnVQUTVzWm5oSG1iTmI0WWNnbUw5Zi16YlY0NHhKZkdKbHZOeEp5VXBhQ19aaHdLSHpmbWFDMnVhbkMydlI0Y0ROUXdmUEptQ3I?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-48",
          "rank_by_count": 48,
          "name": "K-배터리 3사, ESS가 실적 갈랐다…LG·삼성 ‘순항’- SK온은 ‘숨 고르기’",
          "easy": "",
          "quote": "K-배터리 3사, ESS가 실적 갈랐다…LG·삼성 ‘순항’- SK온은 ‘숨 고르기’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 123,
              "title": "K-배터리 3사, ESS가 실적 갈랐다…LG·삼성 ‘순항’- SK온은 ‘숨 고르기’ - CEO스코어데일리",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9wNm9ublRSTF9kbDJsLU5lUjZPMXNBQmR6MVpMeWVsU090TjBxS1dfUEVvc0F6TkJIdkFNUjJfci1vY2RMaHdLcjNsLTBuZ1ZjdXlxd2lqRThyckpuekwya1dMU2ZrWXdv?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-49",
          "rank_by_count": 49,
          "name": "중국 CATL 미국 '독립 전력망' AI 데이터센터 노린다, K배터리 3사 ESS 시장 경쟁력 촉각",
          "easy": "",
          "quote": "중국 CATL 미국 '독립 전력망' AI 데이터센터 노린다, K배터리 3사 ESS 시장 경쟁력 촉각",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 124,
              "title": "중국 CATL 미국 '독립 전력망' AI 데이터센터 노린다, K배터리 3사 ESS 시장 경쟁력 촉각 - 비즈니스포스트",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE9MRVZESTFic1Q2WEJuQXJsMk1MamxpYXNNbGY1cklSXzFRVzR1WlROb3RWdk1mSGR5R0lUcnZoX2JCMU9OSFdFX09lX05mMk1jZ3BGU0ZDY1plZDhibUV0S2tLV3NGQklLdjlhb1p1UTludDg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-50",
          "rank_by_count": 50,
          "name": "양식업 전기요금 부담 완화 논의…수산종자 전담 논의체 구성 추진",
          "easy": "",
          "quote": "양식업 전기요금 부담 완화 논의…수산종자 전담 논의체 구성 추진",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 126,
              "title": "양식업 전기요금 부담 완화 논의…수산종자 전담 논의체 구성 추진 - 한국영농신문",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBONTA1eGs3Y21DU2UtN3U4eEZxelVRcUFlczZ2Yy0wMlV1R3VlcUhJWW9FZWViTmJ3VHNncVdtM1hPSlVUSkl4MEZXZzN3SWJXZk9Td3ljMWtUU1ZOYnVrZDRVbENTaFV4dU9lMmdn?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-51",
          "rank_by_count": 51,
          "name": "새로운 전기 요금 체계 조정과 소비자 권리 보호를 위해 소비자가 알아야 할 사항.",
          "easy": "",
          "quote": "새로운 전기 요금 체계 조정과 소비자 권리 보호를 위해 소비자가 알아야 할 사항.",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 127,
              "title": "새로운 전기 요금 체계 조정과 소비자 권리 보호를 위해 소비자가 알아야 할 사항. - Vietnam.vn",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMitAFBVV95cUxObGJacDJEdmo3ZlZqV3NyUFZYZmtDWmxEVVJ0VWVER213S1kxWWxFcUJzZVNYd2g2Mk9QNnQ3MkRkVkR2WlgwSnJnVDBxVmc5Tm1xM1d5NUs0b1pQaVdyWnpfUmtkc1NLWmo3Z043UDdpQUtLdC01a0hxM1RiNmFiMXhxc1JnYWIzT1RJYV9sVDdpUmNKd2R1WU9YLVdDSnRsVlBHaTNXdWxKak9fcXJudGFiUGk?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-52",
          "rank_by_count": 52,
          "name": "한국 주력 LNG선까지 파고든 중국, 초대형 선박부터 기자재까지 추격",
          "easy": "",
          "quote": "한국 주력 LNG선까지 파고든 중국, 초대형 선박부터 기자재까지 추격",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 142,
              "title": "한국 주력 LNG선까지 파고든 중국, 초대형 선박부터 기자재까지 추격 - The Economy Korea",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5YWl9DWVlGSkhIVW1ndDJNNFd4a210eFh4RnhhdXJGY2RZVEFYLUhSVm1YRkxmSkxGZmE1ZmNfZkZrcFVjWFJDVDFXYkc5NFZaNG5EZTJQVTREcjA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-53",
          "rank_by_count": 53,
          "name": "북극 한파에 유럽 가스 비상…10년 만의 최저 재고에 에너지 위기 경고",
          "easy": "",
          "quote": "북극 한파에 유럽 가스 비상…10년 만의 최저 재고에 에너지 위기 경고",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 143,
              "title": "북극 한파에 유럽 가스 비상…10년 만의 최저 재고에 에너지 위기 경고 - OBC 뉴스",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1TVWkyOV9aWU9Ea1J1ZDVWTmVRR08xbmxlV21jaEdnVExQcjlZQk5hd0l6TWRVUFZremk5V21pcWFBODBxSHNSck1LTURRT05hLUUtQ2l0endmTnduMFZ1dUc2c2Uyd2EzTFE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-54",
          "rank_by_count": 54,
          "name": "[주간입찰동향(물품)’26.11.23~30] 한우리호 대체 LNG 실습선 683억 단일건이 협상계약 60% 차지… 물품 140건 1,813억",
          "easy": "",
          "quote": "[주간입찰동향(물품)’26.11.23~30] 한우리호 대체 LNG 실습선 683억 단일건이 협상계약 60% 차지… 물품 140건 1,813억",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 144,
              "title": "[주간입찰동향(물품)’26.11.23~30] 한우리호 대체 LNG 실습선 683억 단일건이 협상계약 60% 차지… 물품 140건 1,813억 - 조달경제신문",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBBNFliWUI0UmtCTDZ2Q3lqUUptVzlVZW9ES1AySEFOVEJZNDNsbV9LRXg2R0hBTC1OOWhDWVZyVE9GQU1OSnNnZDZaS1lzNHNfY005QjlDTXJ3LWZlSGN5TElHNzFRWmszZWtVNnVR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-55",
          "rank_by_count": 55,
          "name": "환율·원자재·건조 지연 삼중고… 한국카본 실적 회복은 4분기",
          "easy": "",
          "quote": "환율·원자재·건조 지연 삼중고… 한국카본 실적 회복은 4분기",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 145,
              "title": "환율·원자재·건조 지연 삼중고… 한국카본 실적 회복은 4분기 - 핀포인트뉴스",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTE1DdGVlbldQMmVXMm9XM0lTc0RUVDUzNUhudFc4el9RZlRsUnJQaml5YjBxZGdlNVI4RWNlUEtkLURHQTVKbzAxOHdwYUhWdWJJcjFVb2w2eTZMczB5OGVPYnNZY2dTU25hczJZcGVYcF9DUVB3Vkdr0gF3QVVfeXFMTUN0ZWVuV1AyZVcyb1czSVNzRFRUNTM1SG50Vzh6X1FmVGxSclBqaXliMHFkZ2U1UjhFY2VQS2QtREdBNUpvMDE4d3BhSFZ1YklyMVVvbDZ5NkxzMHk4ZU9ic1ljZ1NTbmFzMllwZVhwX0NRUHdWR2s?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-56",
          "rank_by_count": 56,
          "name": "요금은 묶이고, 빚은 쌓이고…한계 몰린 한전·가스公, 사장들까지 나섰다",
          "easy": "",
          "quote": "요금은 묶이고, 빚은 쌓이고…한계 몰린 한전·가스公, 사장들까지 나섰다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 146,
              "title": "요금은 묶이고, 빚은 쌓이고…한계 몰린 한전·가스公, 사장들까지 나섰다 - 뉴시스",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE8yQm9KZ3hiWjJLalJxN2FlY0lmd0pfVkcxWGVpdFRMTVNHNVFwdVBibnZZdlllU1FlQV9PVHpDWXdtVENpQlVfbjVOUHRvVUY3dlFnbzJPdEgxNFpmNlJwYdIBeEFVX3lxTFBIeUJvUXNJaDFtc25OZU5hRFBuajVJZDdkdzA5cnY2eU5GNnZhUG9MVEVtcmJaS0RLRDhKTm5Hd3N6YnBTeDVydk9TeHBFYUhWVVpqSDluQVFENi16WE9Mbl9yU3BGdl9NYlBFcVkwNjNDcXNSYWozSQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-57",
          "rank_by_count": 57,
          "name": "인하대 신현돈 교수, ‘이슈 픽 쌤과 함께’ 출연…알래스카 LNG 사업의 경제성과 에너지 안보 강연",
          "easy": "",
          "quote": "인하대 신현돈 교수, ‘이슈 픽 쌤과 함께’ 출연…알래스카 LNG 사업의 경제성과 에너지 안보 강연",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 147,
              "title": "인하대 신현돈 교수, ‘이슈 픽 쌤과 함께’ 출연…알래스카 LNG 사업의 경제성과 에너지 안보 강연 - 한국강사신문",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5kV2hwYl92ckkyeDRjTHZiVFdzeVE4aTRUMjRMX3lTLWZScVBUM2Z2MzFrR3NzSk1tWXZtNkVuZWVScGdSZTMtVjlxa2ZEaHhCcDdBaV9WSE9oakljb1JnekdxQUMxNF8ya1l6VWV4VWc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-58",
          "rank_by_count": 58,
          "name": "극저온 씰 시장 2035년 전망: LNG·항공우주가 성장 견인 - 뉴스 및 통계",
          "easy": "",
          "quote": "극저온 씰 시장 2035년 전망: LNG·항공우주가 성장 견인 - 뉴스 및 통계",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 148,
              "title": "극저온 씰 시장 2035년 전망: LNG·항공우주가 성장 견인 - 뉴스 및 통계 - IndexBox",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMivwFBVV95cUxNNmlXakZudGJTUk93X2dQZWprWkZFdkNidUx6SnJLRXA5VlRlYkpIdC14ZTcyWDYta081ZElXRExIcEhVcU5EZ1hrQ2lnVkVHXzdha1BTZVcxX0djZ3pSQ29mOF9oSG00UUxvQ2YxU2JObVR1Vl92bVV0Tlk3d2MxQ1ZJbXZlZW8yWWhtYXA1UGdEVUNHYnpNTXBBWks2NXgzUGZ0ZjMwb2c1RkVrZDdQR2Y4M0JocFlaWUQ4TVAtQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-59",
          "rank_by_count": 59,
          "name": "중국 '맹추격'...'K-조선' 최후의 보루마저 뚫리나",
          "easy": "",
          "quote": "중국 '맹추격'...'K-조선' 최후의 보루마저 뚫리나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 149,
              "title": "중국 '맹추격'...'K-조선' 최후의 보루마저 뚫리나 - 한경매거진",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE4yN21RMHdCSFdtclozTW05SnVLRGRLb3Jod01vaHRJbDRyZ0VlNlB1ZlZSVDNnQzFCUFNMX0Vhd0ZVUWoybUJjdlBsZlotZF90ZU5udThnUDMtNV9MTTBSdDU0RXR1SHA5V1VzMw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-60",
          "rank_by_count": 60,
          "name": "[G-Zero 시대, 흔들리는 세계 질서…한국 기업의 대응 전략③] 3500억달러 대미 투자 등 실행력 싸움…한국 기업의 5대 과제는",
          "easy": "",
          "quote": "[G-Zero 시대, 흔들리는 세계 질서…한국 기업의 대응 전략③] 3500억달러 대미 투자 등 실행력 싸움…한국 기업의 5대 과제는",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 150,
              "title": "[G-Zero 시대, 흔들리는 세계 질서…한국 기업의 대응 전략③] 3500억달러 대미 투자 등 실행력 싸움…한국 기업의 5대 과제는 - 뉴시안",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE93dXJKTmRfOTlJcWZIYVVwcjRHaXZmd2tfdWg5dGNvcGR5bjFOMnJpeE5ucUc1LVpHMklEbkRtMGlJbjhJN3k0TlNHLW1WV2FlclpKMDhoaGFTWHMwc1RHR3VHX25zWUNJQ2J3Yw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-61",
          "rank_by_count": 61,
          "name": "트럼프·시진핑, 두 달 만에 회담…대만·반도체 등 핵심 현안 진전은 미지수",
          "easy": "",
          "quote": "트럼프·시진핑, 두 달 만에 회담…대만·반도체 등 핵심 현안 진전은 미지수",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 152,
              "title": "트럼프·시진핑, 두 달 만에 회담…대만·반도체 등 핵심 현안 진전은 미지수 - SPN 서울평양뉴스",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTFBtRTVlclVpRUJPb192c2VqdkoxM3RtTUFNZHpxbWNfSDNtbm5xRGpnTEZMbVFGd0tKblRpMjA4d21xNmlaOFI1aThhUFlFZmpibzhpSm1CMnNUUVRHaG4tWXN0UHNnSEZwRFVr?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-62",
          "rank_by_count": 62,
          "name": "美 \"시진핑, 정상회담서 반도체 수출통제 거론 안 해\"…中 보복 근거 없어\"",
          "easy": "",
          "quote": "美 \"시진핑, 정상회담서 반도체 수출통제 거론 안 해\"…中 보복 근거 없어\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 155,
              "title": "美 \"시진핑, 정상회담서 반도체 수출통제 거론 안 해\"…中 보복 근거 없어\" - 뉴스1",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE5fMWRZc012c3VrcWZrSjJVZFpZUDUxbEk1QTVob0tFS0dwbmZOR1FCQ2taMVNxcWhKbEUxbWRGbnhkRWM4dlZINnUxOG5IZFFGQnFLZmxlRnQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-63",
          "rank_by_count": 63,
          "name": "UBS, 연준 금리 인하 기대 회복 전 금 추가 약세 경고",
          "easy": "",
          "quote": "UBS, 연준 금리 인하 기대 회복 전 금 추가 약세 경고",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 158,
              "title": "UBS, 연준 금리 인하 기대 회복 전 금 추가 약세 경고 - Investing.com 한국어",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBkcGlPTm9ZNlU2dEpPLWt1R2s5Ml82c296aG5tSFJjNlBYV3JEeXdfSjl6eXNBeVZNTF8wN0hKVjVndXRKeHJod21tNGZlV1J2Nlh3WklvNEFqQlpTTjFlMUkwN0YtSXZyT1JoNzg2OA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-64",
          "rank_by_count": 64,
          "name": "미국 4년 만에 '빅스텝'?...세계 금융시장 촉각",
          "easy": "",
          "quote": "미국 4년 만에 '빅스텝'?...세계 금융시장 촉각",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 161,
              "title": "미국 4년 만에 '빅스텝'?...세계 금융시장 촉각 - YTN",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiXkFVX3lxTFBOODF5b0RtaHVNNjdBUFRkZ3hsVV95Z1VfSkJ4X0gzQ1JOZDJIS3lzLXRyd3JhZzFPMWRCbk11bFFKWTdESmNHU1pNblJXd3dSMHBqajFoUjRjMWotc2c?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-65",
          "rank_by_count": 65,
          "name": "트럼프 \"금리 너무 높아…매우 정치적인 연준 때문\"(상보)",
          "easy": "",
          "quote": "트럼프 \"금리 너무 높아…매우 정치적인 연준 때문\"(상보)",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 164,
              "title": "트럼프 \"금리 너무 높아…매우 정치적인 연준 때문\"(상보) - 연합인포맥스",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9uWklOakVpRnB2WjAxN2RYSDBXbFlLZzVQekdxMGxNNW8yY1hMR2JqdllvTURkM01KdV9hY1pzM2lwMlZmMHdfeDYwTmNTRkJ6QUxrLUVTUWE1ak01X1BxX0RQaHk0enhrTHRQTVRqRkI?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-66",
          "rank_by_count": 66,
          "name": "시간 번 한은…10월 금통위, 기준금리 ‘동결’ 무게",
          "easy": "",
          "quote": "시간 번 한은…10월 금통위, 기준금리 ‘동결’ 무게",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 166,
              "title": "시간 번 한은…10월 금통위, 기준금리 ‘동결’ 무게 - 쿠키뉴스",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE5nY0F4VGlWc2RscWFpUmZEbzNTQjg5c1dRSTN1RFZyZlAySXF3NVdkcGNrVy0zRzREVHdwQ1oya3NRUWpIbk12NU9Ia0R6cm1zVzFTLWRmR2J4b2ZXZHcteWtLcw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-67",
          "rank_by_count": 67,
          "name": "[다음주 경제] 숨 고르기 한 기준금리, 인상할까…한은 성장률 전망은",
          "easy": "",
          "quote": "[다음주 경제] 숨 고르기 한 기준금리, 인상할까…한은 성장률 전망은",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 167,
              "title": "[다음주 경제] 숨 고르기 한 기준금리, 인상할까…한은 성장률 전망은 - 연합뉴스",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE52cUt2Wi0yWDlZN2VObUxMZUdhN3FlWUN4MjA1bmN0WGV4MlZtMElPaXRuUW1fZnN4U1lRcVFwbF9RdWh1bmRpbGdYM0h3YlVuRXZlWTVLam9UVGvSAWBBVV95cUxObENidGxwYjlpZnNjWXZfWkdTUk93anp6c3d4X0NSRFRlUms2cktEbnExN01BMG9VT1BtT25BUVVxVVRfby1MdXRQWXJHWXJxLXY4VHpZOG0yTmhZeXh1WEI?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-68",
          "rank_by_count": 68,
          "name": "한은, 금리 인상으로 기울었나...'5천선 붕괴' 증시 향배 등 내주 경제 핫이슈",
          "easy": "",
          "quote": "한은, 금리 인상으로 기울었나...'5천선 붕괴' 증시 향배 등 내주 경제 핫이슈",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 168,
              "title": "한은, 금리 인상으로 기울었나...'5천선 붕괴' 증시 향배 등 내주 경제 핫이슈 - 파이낸셜뉴스",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1VMDZ6RnhOUnFiNnhvdXdVZk9keWg1VmU2eDY2T0JXaV9KV3FVLUZ4cjJUUnNhLVhyY09wU29BczQtdVgtM25YY0l2ekhBOE16YkVTdDBtM0Y1Zw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-69",
          "rank_by_count": 69,
          "name": "수출 1조달러에 성장률 전망 '쑥'…한은 기준금리 추가 인상 확실시",
          "easy": "",
          "quote": "수출 1조달러에 성장률 전망 '쑥'…한은 기준금리 추가 인상 확실시",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 169,
              "title": "수출 1조달러에 성장률 전망 '쑥'…한은 기준금리 추가 인상 확실시 - 뉴스웍스",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5NS1pjNXZucHdxWE1wMnlJcnVjbVBpWnlIeGFCMXhuSjhwRE9jeExBY2JndXMxOGtweFRjMmgzRUtoOWN3YjZRZVpva0dYLWJPUjhrZkxDa19pZ2tod2M3aWFHSExRbzNyUVl5cl9MUdIBc0FVX3lxTE5MNldnWVNNQVpVMjNTajN2QXVZSWJxT3otMUxwUlVLWUtFaEcxZjVWV3EySGJSMm9BbjBZNEJQRllXOFplZW5Xb3NDcWMwcDBNeTgxNHNJcHRCd3NFaGdUbm1La3RrcDF4cGhzbmFfNDZzb00?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-70",
          "rank_by_count": 70,
          "name": "[다음주 경제] 한은 금리 인상 여부 촉각…성장률 전망·디지털자산법 공개",
          "easy": "",
          "quote": "[다음주 경제] 한은 금리 인상 여부 촉각…성장률 전망·디지털자산법 공개",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 170,
              "title": "[다음주 경제] 한은 금리 인상 여부 촉각…성장률 전망·디지털자산법 공개 - 산경투데이",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE8tcXRVYU04MDhDRzVPM29oWVRCOS1xNE53b3RwLTE3aXVOekZoVE5DYnp1OTlieU0wTUFNQU5Dak9LdVUwY2JYT2dnOGoxV2QxU3Y3ZmE4a1NpaEZLY0l1Nk83SjQzS19DNl9jUjVUbEstc1o20gF0QVVfeXFMTy1xdFVhTTgwOENHNU8zb2hZVEI5LXE0TndvdHAtMTdpdU56RmhUTkNienU5OWJ5TTBNQU1BTkNqT0t1VTBjYlhPZ2c4ajFXZDFTdjdmYThrU2loRktjSXU2TzdKNDNLX0M2X2NSNVRsSy1zWjY?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-71",
          "rank_by_count": 71,
          "name": "\"지금 예금 만기인데..\" 11월 26일 금리결정, 60대 갱신 전에 봐야 할 조건 1위",
          "easy": "",
          "quote": "\"지금 예금 만기인데..\" 11월 26일 금리결정, 60대 갱신 전에 봐야 할 조건 1위",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 171,
              "title": "\"지금 예금 만기인데..\" 11월 26일 금리결정, 60대 갱신 전에 봐야 할 조건 1위 - Daum",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiRkFVX3lxTFBmU1VCUWJNM09rVzVpb09HTXlfdkVmQmQwWGlqYk8zWHFWN2lZcmVWSnBXZS1aazhNM2NkcFFaM2NKaXh2SFE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-72",
          "rank_by_count": 72,
          "name": "올 마지막 금통위 'D-6', 한은 3.25%로 올릴까",
          "easy": "",
          "quote": "올 마지막 금통위 'D-6', 한은 3.25%로 올릴까",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 172,
              "title": "올 마지막 금통위 'D-6', 한은 3.25%로 올릴까 - 자본시장뉴스",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE56R3FwTXRyZm1BejRBbHVTRkZZTF9ZWVFBSFdENms2Z1dYZDJ6NVVrSjQtUWFIejBrMm93MmFSTktwU0JxWGdGREJJVlhLb1ZGeHNwWUxzR00wU2tETUxEdWcwYlFCV0U?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-73",
          "rank_by_count": 73,
          "name": "'D-6' 올해 마지막 금통위···숨 고르기 끝내고 인상 나서나",
          "easy": "",
          "quote": "'D-6' 올해 마지막 금통위···숨 고르기 끝내고 인상 나서나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 173,
              "title": "'D-6' 올해 마지막 금통위···숨 고르기 끝내고 인상 나서나 - 서울파이낸스",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1WZjE3TlRTOG9LaVBRSXUxNGk1dV8wS2c1aTF0Z2Z1V3V4NUtHSi1uVlYwX3VOaUJGclhieGNRdFp6R01Jbk1jSkFwa0JEbmJsbDktekYzWXgxSEJmTzZDLVllTUpSUFE5cGc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-74",
          "rank_by_count": 74,
          "name": "‘핵융합발전소 설계 착수’… 한국형 핵융합로 개발 ‘시동’",
          "easy": "",
          "quote": "‘핵융합발전소 설계 착수’… 한국형 핵융합로 개발 ‘시동’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 174,
              "title": "‘핵융합발전소 설계 착수’… 한국형 핵융합로 개발 ‘시동’ - 쿠키뉴스",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFBGME5SaVRGV2xzWW9GOURpb2txRzhNakpNY2lyeWUyeDVPV1Jqd2J3MWM0UlhYdGp0aE5ueGhHaXhRX0VkcTBQWmFBOGxLVm1Ia1ZVTzMyTFpjb1lOODR6ekdJRQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-75",
          "rank_by_count": 75,
          "name": "\"삼성전자가 만든 휴머노이드는 어떨까…로봇 상용화 최적 조건 갖춰\"",
          "easy": "",
          "quote": "\"삼성전자가 만든 휴머노이드는 어떨까…로봇 상용화 최적 조건 갖춰\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 176,
              "title": "\"삼성전자가 만든 휴머노이드는 어떨까…로봇 상용화 최적 조건 갖춰\" - 뉴시스",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9RaEEwZVo4WkhLZ280TnA5djdlWTEtYnB6SXAtS1VkNEpRdk5qQlR0U1pheDZiWU0zaWhpcUcxNWw5SjljMEtwYU53MDdCRmVLYTlmZFRWS3plcjhWdjBHUtIBeEFVX3lxTE9VRFRRZjIzVlhFdW1fY2RzSTBydmZNQ0pYQ0tzd2JtSEhBeVVhTjF3TFRjYllOdmpWcXVDUkp6dk9kSVQ3OHFTQ0FOMnJHQWZWRUVZOXRZaElWVVI4YVdoeU1wSGpEcUhVSVRkczU3dmlBSy1Ocmt1ag?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-76",
          "rank_by_count": 76,
          "name": "’53개 손가락’ 연주는…로봇 151대가 “뱅뱅뱅“",
          "easy": "",
          "quote": "’53개 손가락’ 연주는…로봇 151대가 “뱅뱅뱅“",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 177,
              "title": "’53개 손가락’ 연주는…로봇 151대가 “뱅뱅뱅“ - 연합뉴스TV",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1WaURmR20wN0FpVUJmcUVRSzg0RzBodFQ4WlZzMTZtSU54Z0VGQlA3VmJwTUFidlFsRkk2dXI3bERGakhKbV92b3ZXSV9WSjZKSXZWWEJkTUJKQUlmODFVRlkwdWpOY28?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-77",
          "rank_by_count": 77,
          "name": "[로봇 이야기 ④] 4대 그룹, 내년 최대 역점 사업은 ‘로봇’",
          "easy": "",
          "quote": "[로봇 이야기 ④] 4대 그룹, 내년 최대 역점 사업은 ‘로봇’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 178,
              "title": "[로봇 이야기 ④] 4대 그룹, 내년 최대 역점 사업은 ‘로봇’ - 이코노미트리뷴",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTE44b3dnTWJ3SlQ0T1ZXYll6S2gtZVAtS05FN1dORXpLdVc0UzNjcDk0WlBWVXQ5UVBObDFiUUUtSDVjTGtRaWdvNk1udWt2SUtWcngzbDdudkZsM05SRWN4T3lvdXpadjVxenV0ckZLZkhpZGFZUE4w?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-78",
          "rank_by_count": 78,
          "name": "전처 닮은 3억짜리 ‘애인 로봇’을 샀다…그 집서 벌어진 섬뜩한 일",
          "easy": "",
          "quote": "전처 닮은 3억짜리 ‘애인 로봇’을 샀다…그 집서 벌어진 섬뜩한 일",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 182,
              "title": "전처 닮은 3억짜리 ‘애인 로봇’을 샀다…그 집서 벌어진 섬뜩한 일 - 중앙일보",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9RNW1CRGRORE5VbEZVdDVpUWFZRmNoNy1OVldQUldicS1WQWQyeExJejhsQ0stMUlDMkE4ZDd6YXJUX01HTTRpdUhhdjJ0blg1UWFvYUZ3?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-79",
          "rank_by_count": 79,
          "name": "[AX 인재 키우는 대학]〈2〉동국대, 이차전지 전 과정에 AI 접목…산업 맞춤형 인재 양성",
          "easy": "",
          "quote": "[AX 인재 키우는 대학]〈2〉동국대, 이차전지 전 과정에 AI 접목…산업 맞춤형 인재 양성",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 185,
              "title": "[AX 인재 키우는 대학]〈2〉동국대, 이차전지 전 과정에 AI 접목…산업 맞춤형 인재 양성 - 전자신문",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1nUERkcnlJQmt6WXRhNVFfc3pTUkd3UFdUeFJSMWRndkpkcGZYR3VYRzV3S1ExMjFsenpJekl4QjVBR1VHNEZ5dW03T3Y5Zw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-80",
          "rank_by_count": 80,
          "name": "CATL 수장 \"배터리 혁신에 필요한 'AI 아인슈타인' 찾는다\"",
          "easy": "",
          "quote": "CATL 수장 \"배터리 혁신에 필요한 'AI 아인슈타인' 찾는다\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 186,
              "title": "CATL 수장 \"배터리 혁신에 필요한 'AI 아인슈타인' 찾는다\" - 더구루",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE0tLXdjTzdYRVMxYlFtZXRfdm5XNGJ4ZTJ0QjFIWEtVY0RpNGpDU0d1aUo1Vl9lZXREVGJ4MXhaMjZMZmdzdTZEX2RrcktpcVh2eEhuZU5YLU02MnUyX0xZZ093Zw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-81",
          "rank_by_count": 81,
          "name": "2차전지주 동반 하락…에코프로·포스코퓨처엠도 매도 압력",
          "easy": "",
          "quote": "2차전지주 동반 하락…에코프로·포스코퓨처엠도 매도 압력",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 188,
              "title": "2차전지주 동반 하락…에코프로·포스코퓨처엠도 매도 압력 - 핀포인트뉴스",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE9SR2FvTHdaUTZPcGV4bEJRM2RLaTI1YVBzdklJRGpYWXlNYzRJRThrUTd0ZnFEdnUzMzkySGpBcENTMEdXYW9Fb19UandidFhLdFhhX3JpbktnZkVaOWJwS2VONXV3WC12eHRibGwtTGFHbXPSAXdBVV95cUxPV2k5c01fUzU4X1RtZFg3NlpBUUhLTW1Vbm5LMUlaMmNPZ3BLNUF1aGpvUTRTcnFSVzBPdFgwbmR2UC1qUTlaclJJbnpTUVFWYmR3Qmx4a09Zal9MeGtmblY4MzMzRWFpWG5HaFRqc1l0RHJSZ1lqbw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-82",
          "rank_by_count": 82,
          "name": "\"자원 찾아 깊은 바닷속으로\"...심해탐사 전쟁 |",
          "easy": "",
          "quote": "\"자원 찾아 깊은 바닷속으로\"...심해탐사 전쟁 |",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 192,
              "title": "\"자원 찾아 깊은 바닷속으로\"...심해탐사 전쟁 | - 초이스경제",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTFA1aDJJTkU5SW1OWTlveTd1UnJ1RlJiX2pOOUk2QVE5TUZyTWVjZUVEaGVwbEN5OVRUWldDeVBFNmNQNEpzTjJzVW5lM1ZYQ0VqdDRPOWhjM2JpYXNrQ1NHSzNRWV9yOUJpZXBNTEp3c1V5ZUU?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-83",
          "rank_by_count": 83,
          "name": "미·중·러 정상 손잡았지만 성과는 '글쎄'…트럼프 친분 외교에 혹평",
          "easy": "",
          "quote": "미·중·러 정상 손잡았지만 성과는 '글쎄'…트럼프 친분 외교에 혹평",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 194,
              "title": "미·중·러 정상 손잡았지만 성과는 '글쎄'…트럼프 친분 외교에 혹평 - 진일보 | 전남일보",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE11VUdhekpKR2ZMYkFnREF2TkM0Y29aTVdoU1dTSTlRRWtuZVNNVG43YlV6Q0d1OTdRV2oyc0lBX3BpaW85Z2tXTjJBVzdNd1pRWkVKdUJLUGhwaHlEdVQ4c0VKaWZGZGVsMUhzZ3dKQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-84",
          "rank_by_count": 84,
          "name": "中, 日총리 '하나의 중국 존중' 재확인에도 '강경 태도' 유지",
          "easy": "",
          "quote": "中, 日총리 '하나의 중국 존중' 재확인에도 '강경 태도' 유지",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 195,
              "title": "中, 日총리 '하나의 중국 존중' 재확인에도 '강경 태도' 유지 - 연합뉴스",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9jZEczdElKOUxuZmp5VGpUZ2xlMHpEV2NqWk1zSkVfcElHaFV3U2M4NGp3TUhkSzVrNGEzZTE2Nm8yQUZjX0dJT3I0MlpSbUlfWjFhWElrbW16elFmc0hSMdIBYEFVX3lxTE9jZEczdElKOUxuZmp5VGpUZ2xlMHpEV2NqWk1zSkVfcElHaFV3U2M4NGp3TUhkSzVrNGEzZTE2Nm8yQUZjX0dJT3I0MlpSbUlfWjFhWElrbW16elFmc0hSMQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-85",
          "rank_by_count": 85,
          "name": "일본인의 한국 친근감 62%로 역대 최고, 중일관계 부정은 93%로 최악 📊",
          "easy": "",
          "quote": "일본인의 한국 친근감 62%로 역대 최고, 중일관계 부정은 93%로 최악 📊",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 196,
              "title": "일본인의 한국 친근감 62%로 역대 최고, 중일관계 부정은 93%로 최악 📊 - 뉴닉",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE0tRjRYUklZQUNMc3RuTFA2Snl5X3VEcU5fWWNvWU1rdW9WemM4VUppcl9lV0lkdmlmdTZXcHVBbGo5d2YyZURPenJjSUhKMl81Y0NJ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-86",
          "rank_by_count": 86,
          "name": "NH투자 \"다음주 코스피 5000~6100, 반도체 이익 눈높이 상향에 반등 기대\"",
          "easy": "",
          "quote": "NH투자 \"다음주 코스피 5000~6100, 반도체 이익 눈높이 상향에 반등 기대\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 197,
              "title": "NH투자 \"다음주 코스피 5000~6100, 반도체 이익 눈높이 상향에 반등 기대\" - 비즈니스포스트",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE5rcWk1dzNWS09jOWRJcm1uNVh4Y0hSZlZaRnFsZmJPWDZOVHJ6Y0lLOHRtZHFuTmxueFEyRG1sb3FVRXR1NW9VMnpXc2R3RUM1eFdTWGQwNVJkbHZPOGV0OU1wbTR6ZzR6R1B1b1dnODFhN1E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-87",
          "rank_by_count": 87,
          "name": "트럼프, 시진핑·푸틴과 친분 과시⋯美 언론 \"실익 없었다\"",
          "easy": "",
          "quote": "트럼프, 시진핑·푸틴과 친분 과시⋯美 언론 \"실익 없었다\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 198,
              "title": "트럼프, 시진핑·푸틴과 친분 과시⋯美 언론 \"실익 없었다\" - 아이뉴스24",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiTEFVX3lxTE1lcVRjY1VXbWZFSWlpblF5YmE1TXRZeDlneHg2eE03LXprYWoyZnFOMXNVenc4R3JHaDJybi1iY0NvT2pBTjhCVWlFX0o?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-88",
          "rank_by_count": 88,
          "name": "미중러 사상 첫 3자 정상회담…핵군축·우크라전 등 중대 분수령 - 머니투데이",
          "easy": "",
          "quote": "미중러 사상 첫 3자 정상회담…핵군축·우크라전 등 중대 분수령 - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 199,
              "title": "미중러 사상 첫 3자 정상회담…핵군축·우크라전 등 중대 분수령 - 머니투데이 - 머니투데이",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMidkFVX3lxTE1nbGVIMnJMejlybDVyYnYtazhxaU9fUGZVU18yMk0wR1Q5RWtnNmE0WjQwWVo5cFV3QklrS0pXUElqdThWS1NvdXJ4MjJlaWg1dEtER1VqVktxd2tqTXVKU0FsZDFheW9kTGNaWmlQLUNpVWRyLXfSAXtBVV95cUxQdG9nZ0FCa1liRElDbVJhdVI3WFZUM21JcWJnTVZ3Wm9fZGFidXlRYnZrRkhuc3VMZFBsNEN6UkZrT1RWUXhkc2NMdTFkZUIxbHJKcXc2dUVnTEkzUFU3M0pzNDhQVl9MNU9BNXdleFRyTFYzbHRJTUJPNTQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-89",
          "rank_by_count": 89,
          "name": "“슈퍼컴으로 수천 년 걸릴 문제 푼다” 독일, 빛으로 연산하는 신형 양자컴 공개",
          "easy": "",
          "quote": "“슈퍼컴으로 수천 년 걸릴 문제 푼다” 독일, 빛으로 연산하는 신형 양자컴 공개",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 953,
              "title": "“슈퍼컴으로 수천 년 걸릴 문제 푼다” 독일, 빛으로 연산하는 신형 양자컴 공개 - 글로벌이코노믹",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNV2I1MDZ0NXVKMmJyckM3MnJTc1o5SXplNlF2djd1YkhwNUJPMXR2M0FOUG5UY3JKanY2Q1BlQi1wQzdwTmRvVGpKdlN5aUxMT1dTckM5VEEyNkE5cnA2emVGZ3NJdThVbnpKNTY0dzlGVElmOHg2MDFwOWR3Q19Kc1FDaVJ5a3ZP?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-90",
          "rank_by_count": 90,
          "name": "美 스타트업 암페라, 스팩 합병으로 나스닥 입성…AI 전력난 정조준",
          "easy": "",
          "quote": "美 스타트업 암페라, 스팩 합병으로 나스닥 입성…AI 전력난 정조준",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 957,
              "title": "美 스타트업 암페라, 스팩 합병으로 나스닥 입성…AI 전력난 정조준 - 더구루",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9VazJrQTdTaXMybmxFWHpTQXB1SnpaVmRxNTBOSzN5aURoajB5LTNrcTFITVN5eUkzbnZ6YWlWNjRoRnA0NkJaaXBrbjlwY29yVG9hT2pzMjZvZ25IOEdSRWxIdw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-91",
          "rank_by_count": 91,
          "name": "2035년 저혈청 배지 시장 전망: 바이오의약품 수요와 공급망 리스크 완화가 성장 견인 - 뉴스 및 통계",
          "easy": "",
          "quote": "2035년 저혈청 배지 시장 전망: 바이오의약품 수요와 공급망 리스크 완화가 성장 견인 - 뉴스 및 통계",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 964,
              "title": "2035년 저혈청 배지 시장 전망: 바이오의약품 수요와 공급망 리스크 완화가 성장 견인 - 뉴스 및 통계 - IndexBox",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxOc0JwVnZFa1ZXbk81VFRMU3ZaeGItN0NDclZZS09uZU4wWE8yNjlaRE1YWHljQTNwTkgwaHVNcExKTk5Ca2dTczZPNF9wQVlFU0NKR1R5MzdZM1lLc0VpaTdHeXU3UVBzRzlBZy1ONjhpeFdPNHFJM0VHd2pla3BUOHZfRWRGeWtMTGZqN1JqTE43S0FxOEQ3ckpCNW1faW03UjEzRXZUbDhhMXJKMEtiLXVZbWlMaU41dTBFNXV0cDJMeTJCdUltMzhZS05NVjZUY1hkZQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-92",
          "rank_by_count": 92,
          "name": "[데스크칼럼] 왜 지금 신규 원전 건설을 결정해야 하는가",
          "easy": "",
          "quote": "[데스크칼럼] 왜 지금 신규 원전 건설을 결정해야 하는가",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 969,
              "title": "[데스크칼럼] 왜 지금 신규 원전 건설을 결정해야 하는가 - 스마트투데이",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFBTQlJvOGlDMDB6Nk1Ja0J1bGx6MXN1b0hmRTltVkVVdDUwWXlPS2U2TE9helZQMkpwZlU3SjFia2dDcDNWbmR6aDl2eGdDYkJGbkUwQnBxUHN0cEtKLS1V?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-93",
          "rank_by_count": 93,
          "name": "원자력 르네상스 시대, 원자력학회에 바란다.",
          "easy": "",
          "quote": "원자력 르네상스 시대, 원자력학회에 바란다.",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 972,
              "title": "원자력 르네상스 시대, 원자력학회에 바란다. - 에너지안전신문",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5HcW1hOWk2bFp0c0NqNzdKSldfTTRmRkRpenF2SGc3UDZLNG1jMnJrdVpDdjg3ZTB5a3pHemozeklVUmxTRWxSUTlMc2U3RkdiS3NfMjBwTHVEc19nWmlKUFUyTjE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-94",
          "rank_by_count": 94,
          "name": "[AI전력 해결사 원전] 신규 추진 급한데…주민·환경·정치권이 변수",
          "easy": "",
          "quote": "[AI전력 해결사 원전] 신규 추진 급한데…주민·환경·정치권이 변수",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 973,
              "title": "[AI전력 해결사 원전] 신규 추진 급한데…주민·환경·정치권이 변수 - DealSite경제TV",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5aMWpPT0ZEY2s0aW9iSW9SQ3ZFalZjVkRKeFI3anVwYnlCeUs5djJ0MzVCeW1QVVF5MTVacjIteG9ObjRFeG5nUVZlZVlRSF8tNy1EMkp3?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-95",
          "rank_by_count": 95,
          "name": "기후변화, 초강력 허리케인 발생 가능성 23배 높여",
          "easy": "",
          "quote": "기후변화, 초강력 허리케인 발생 가능성 23배 높여",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 974,
              "title": "기후변화, 초강력 허리케인 발생 가능성 23배 높여 - 기후에너지경제",
              "source_name": "'기후변화 엘니뇨 이상기후'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1HaGRNYnV1MGZ3TmkzdW5ReWc3R2ZUeXA0UjNKWTVfUDY5YW04d195cnVGX3NBM0p5MDc0T3ZMRXVfT2ZnaDhBNEF2bzRldDdpcERpeERlSm1xRGFQZDBnVDRxb0U?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-96",
          "rank_by_count": 96,
          "name": "롱패딩 대신 이것 사라?…‘초강력 엘니뇨’가 만든 겨울 유행템",
          "easy": "",
          "quote": "롱패딩 대신 이것 사라?…‘초강력 엘니뇨’가 만든 겨울 유행템",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 976,
              "title": "롱패딩 대신 이것 사라?…‘초강력 엘니뇨’가 만든 겨울 유행템 - 중앙일보",
              "source_name": "'기후변화 엘니뇨 이상기후'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5GdDBjb2xIZE5GUy03TS1LaUJMSUptOGN0TmQxRFJpNWRwelVGRXdaVDdaY01KejRMeGRhNk5DUXhBTXk0Rk5GM05OR0lkYTZ6ZDJiNDV3?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-97",
          "rank_by_count": 97,
          "name": "엘니뇨 여파로 가뭄 지속… 페이지(斐济), '재난 상태' 선포 - www.cn-insight.kr",
          "easy": "",
          "quote": "엘니뇨 여파로 가뭄 지속… 페이지(斐济), '재난 상태' 선포 - www.cn-insight.kr",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 977,
              "title": "엘니뇨 여파로 가뭄 지속… 페이지(斐济), '재난 상태' 선포 - www.cn-insight.kr",
              "source_name": "'기후변화 엘니뇨 이상기후'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1ISkpHMV9qOVV2NEtMeWk1ajJRVnd3Vng3OW55WElhZkZtdkxoMFpFdk9URllXQjdqcDFMRElXVnNiNzBnenN5MEF6clJzN0p6YklDLVhHTFJIbjBxSUpGdG13aV9lZGJ2UlE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-98",
          "rank_by_count": 98,
          "name": "지구촌 이제 난방보다 냉방에 에너지 더 쓴다",
          "easy": "",
          "quote": "지구촌 이제 난방보다 냉방에 에너지 더 쓴다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 978,
              "title": "지구촌 이제 난방보다 냉방에 에너지 더 쓴다 - 연합뉴스",
              "source_name": "'기후변화 엘니뇨 이상기후'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5mZm5ON0pYcnBiemhGTG9ZVFh2UEpaVWVQY0ladDgxUU5UMVJRNkx2M0w1aF85NEQtZFEtUDdGeENya09rZE5lT3YwVFgzSXU2N1lFNHo3ZVN2bTZFbFh5NNIBYEFVX3lxTE5mZm5ON0pYcnBiemhGTG9ZVFh2UEpaVWVQY0ladDgxUU5UMVJRNkx2M0w1aF85NEQtZFEtUDdGeENya09rZE5lT3YwVFgzSXU2N1lFNHo3ZVN2bTZFbFh5NA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-99",
          "rank_by_count": 99,
          "name": "사상 처음 냉방 수요가 난방 추월…폭염에 세계 에너지 지형 바뀐다",
          "easy": "",
          "quote": "사상 처음 냉방 수요가 난방 추월…폭염에 세계 에너지 지형 바뀐다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 979,
              "title": "사상 처음 냉방 수요가 난방 추월…폭염에 세계 에너지 지형 바뀐다 - 진일보 | 전남일보",
              "source_name": "'기후변화 엘니뇨 이상기후'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBRUkZ6TmtZZFY1d1N6c2c0TDVtaEl0dFlZNThNc29BZV9uLTFTbmVDR2dKV1gtY0pkRGUtbHk1NFFDSERVU3l1a0J1MW1qQlh3Zm5MZWVWM0FEdkU1SWJPaGdiTkN1UlpYNjRGYW80MA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-100",
          "rank_by_count": 100,
          "name": "“눈은 하늘에서, 피해 예방은 행정 몫” 공주시 폭설 대응 주문",
          "easy": "",
          "quote": "“눈은 하늘에서, 피해 예방은 행정 몫” 공주시 폭설 대응 주문",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 980,
              "title": "“눈은 하늘에서, 피해 예방은 행정 몫” 공주시 폭설 대응 주문 - 충청투데이",
              "source_name": "'기후변화 엘니뇨 이상기후'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBMRVJMVUhaWXdjdFFfRFZBTlplS1R3QXNfR3A5M3c0SlVJTXVJVWN3NnV3MktSQl9ZNS1pZ2V6bUloZXA2d0lzOWVhNHdhVWZLWkJCeTZuREtLakZsNkdYSllnWm54Mk02X05vVHh3?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-101",
          "rank_by_count": 101,
          "name": "[궤도 위의 경쟁 ⑥·끝] ‘궤도 포화’ 시대, 한국 우주·통신 산업의 생존법 - www.cn-insight.kr",
          "easy": "",
          "quote": "[궤도 위의 경쟁 ⑥·끝] ‘궤도 포화’ 시대, 한국 우주·통신 산업의 생존법 - www.cn-insight.kr",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 982,
              "title": "[궤도 위의 경쟁 ⑥·끝] ‘궤도 포화’ 시대, 한국 우주·통신 산업의 생존법 - www.cn-insight.kr",
              "source_name": "'위성통신 6G 기술'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTFA3bEwyNHl0aFRUYU9vZURJcHZLYi1tQ2Vzd19qWFR0NkUxTm1ZaVo1aHROWng3MHdGb09ad05PdXdDbUVkQ3FYRTlpMkJJcTVEQVloY1BZM1FyekpCN0dlRTBnS2ozcC1LVkE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-102",
          "rank_by_count": 102,
          "name": "LIG아큐버 해외 브랜드 ‘Accuver’, 랜섬웨어 조직 에베레스트 해킹 당한 기업 명단에 등장",
          "easy": "",
          "quote": "LIG아큐버 해외 브랜드 ‘Accuver’, 랜섬웨어 조직 에베레스트 해킹 당한 기업 명단에 등장",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 984,
              "title": "LIG아큐버 해외 브랜드 ‘Accuver’, 랜섬웨어 조직 에베레스트 해킹 당한 기업 명단에 등장 - 데일리시큐",
              "source_name": "'위성통신 6G 기술'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9KNkRNenhpTHRsTW1HTHc2d3gyTDF1MzZScERyaFlhZVVOeXA4bm1vTjNIbVZpcGh3d0J2U1hiNEVxYlRXRFlzVHpDX0lRVm9ydFlIb3R5YkpDMVF6UkYyVFFCanpqai0waEdtbA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        },
        {
          "id": "e261122-103",
          "rank_by_count": 103,
          "name": "6G 통신에서 한발 앞서가는 중국, 시범사업 8개 성·시 선정하고 '원팀' 가동 - www.cn-insight.kr",
          "easy": "",
          "quote": "6G 통신에서 한발 앞서가는 중국, 시범사업 8개 성·시 선정하고 '원팀' 가동 - www.cn-insight.kr",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 987,
              "title": "6G 통신에서 한발 앞서가는 중국, 시범사업 8개 성·시 선정하고 '원팀' 가동 - www.cn-insight.kr",
              "source_name": "'위성통신 6G 기술'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE44UmJncU5CRW1MUmZOZG9kUkhKZWhSa3BrQTNUdnJ4LUg5WTF0VnpjOFpYbU1zWS1EZllEaUlHZVFQbkdDRDRaTFdlTFd2eGpvSktVRC1YSnNVd09BWnRmU3ZiMS1VenBEX3c?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
        }
      ]
    },
    "ch5_papers": {
      "title": "챕터 5 · 논문",
      "addr": "처리-4",
      "kind": "papers",
      "day": "2026-11-21",
      "day_label": "11월 21일(어제)",
      "day_rel": "어제",
      "day_note": "11월 21일(어제) 논문이에요. 오늘 논문은 논문 풀이(새벽 바퀴 바로 뒤, 백업 12:07)가 끝나면 이 자리로 바뀌어요.",
      "made": "2026-11-21T04:34:47",
      "picks_max": 10,
      "status": "돎 — 2026-11-21 논문 풀이 150편 / 새 논문 176편",
      "headline": {
        "text": "11월 21일(어제) 새 논문 176편 · 풀이한 150편 중 AI 모델·학습법 쪽이 79편으로 가장 많아요.",
        "text_orig": "오늘 새 논문 176편 · 풀이한 150편 중 AI 모델·학습법 쪽이 79편으로 가장 많아요.",
        "n_new": {
          "val": 176,
          "source": "v2_secretary/결과/논문/2026-11-21_논문.json"
        },
        "n_done": {
          "val": 150,
          "source": "v2_secretary/결과/논문/2026-11-21_논문.json"
        },
        "n_done_new": {
          "val": 150,
          "source": "v2_secretary/결과/논문/2026-11-21_논문.json"
        },
        "n_done_backlog": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-21_논문.json"
        },
        "n_waiting": {
          "val": 26,
          "source": "v2_secretary/결과/논문/2026-11-21_논문.json"
        },
        "n_failed": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-21_논문.json"
        },
        "top_tag": "AI 모델·학습법",
        "top_tag_n": {
          "val": 79,
          "source": "v2_secretary/결과/논문/2026-11-21_논문.json"
        }
      },
      "flow": {
        "text": "11월 21일에 풀이한 논문들 중에서는 AI 모델과 학습법, 그리고 AI 안전과 평가 분야가 눈에 많이 띄었는데요. 예를 들면 실리콘짐이라는 하드웨어 강화학습 환경을 개발해 처리 속도를 21.9% 높였다는 연구가 있거든요. 뭔 소리냐면 다양한 하드웨어 도구를 아우르며 학습 환경을 하나로 묶었다는 말이에요. 이처럼 전반적인 학습 구조를 다듬는 시도들이 많은 가운데, 비디오 세계 모델에서 검증 과정을 수정 과정으로 바꿔 화질과 속도를 높이는 SpecWM 같은 전혀 다른 방식의 영상 생성 연구도 함께 나왔다는 겁니다.",
        "by": "ai",
        "flags": [
          "센 값에 없는 숫자 21",
          "센 값에 없는 숫자 9",
          "비율·퍼센트를 씀"
        ],
        "text_orig": "오늘 풀이한 논문들 중에서는 AI 모델과 학습법, 그리고 AI 안전과 평가 분야가 눈에 많이 띄었는데요. 예를 들면 실리콘짐이라는 하드웨어 강화학습 환경을 개발해 처리 속도를 21.9% 높였다는 연구가 있거든요. 뭔 소리냐면 다양한 하드웨어 도구를 아우르며 학습 환경을 하나로 묶었다는 말이에요. 이처럼 전반적인 학습 구조를 다듬는 시도들이 많은 가운데, 비디오 세계 모델에서 검증 과정을 수정 과정으로 바꿔 화질과 속도를 높이는 SpecWM 같은 전혀 다른 방식의 영상 생성 연구도 함께 나왔다는 겁니다."
      },
      "map": [
        {
          "tag": "AI 모델·학습법",
          "n": 79,
          "n_done": 79,
          "one_lines": [
            "AI 데이터센터 전력 예측을 위해 열 정보를 쓰는 앙상블 강화학습을 제안했어요.",
            "통합 영상·오디오 이해를 위한 오픈소스 모델 WeMM-Video를 개발하고 평가했어요.",
            "시각-언어 모델의 개념 처리를 분석하는 멀티모달 렌즈를 개발했어요."
          ]
        },
        {
          "tag": "AI 안전·평가",
          "n": 20,
          "n_done": 20,
          "one_lines": [
            "로봇의 생각과 행동을 평가하는 벤치마크를 만들고 성능을 진단함",
            "평가자가 달라도 AI를 평가자로 쓸 수 있는지 판단하는 통계적 검사법을 개발했어요.",
            "LLM 시대 학회·저널 동료 심사의 중복과 AI 사용 관계를 측정했어요"
          ]
        },
        {
          "tag": "AI 에이전트·도구",
          "n": 17,
          "n_done": 17,
          "one_lines": [
            "스스로 진화하는 에이전트로 가짜 영상을 찾아내는 위비포렌식스를 개발했어요.",
            "LLM 기반 파이프라인으로 로봇 성공 판정기의 오류를 찾아냈어요.",
            "공간 제어와 피드백 기능을 갖춘 AI 에이전트 틀을 개발했어요."
          ]
        },
        {
          "tag": "제어·로봇",
          "n": 14,
          "n_done": 14,
          "one_lines": [
            "쿤프만 리프팅을 활용한 동형 암호 기반 비선형 제어 방식을 제안하고 검증했어요.",
            "데이터 기반 출력 피드백 예측 제어 틀을 개발하고 안정성을 증명했어요.",
            "입출력 궤적 기반 제어용 쿱만 표현 학습 틀을 개발했어요."
          ]
        },
        {
          "tag": "전력망·계통",
          "n": 9,
          "n_done": 9,
          "one_lines": [
            "데이터 센터 전력 응답을 예측하는 물리학 기반 대리 모델을 개발하고 검증했어요.",
            "대형 부하 통합을 위한 ESS 최적화 체계를 제안했어요.",
            "전력망 혼잡을 고려한 예비력 확보 최적화 기법을 제안했어요."
          ]
        },
        {
          "tag": "반도체·하드웨어",
          "n": 3,
          "n_done": 3,
          "one_lines": [
            "16nm 회로에서 온도 차이가 트랜지스터 노화에 미치는 영향을 분석했어요.",
            "RTL 최적화 도구를 자동으로 진화시키는 Meta-RTL을 개발했어요.",
            "다양한 도구를 아우르는 하드웨어 강화학습 환경인 실리콘짐을 개발해 처리 속도를 21.9% 높였어요."
          ]
        },
        {
          "tag": "영상·음성·멀티모달",
          "n": 3,
          "n_done": 3,
          "one_lines": [
            "사진과 비디오에서 선명하고 일정한 깊이를 추정하는 뎁스 프로 투를 개발했어요.",
            "일인칭 영상 설명을 위해 에고캐션러를 개발하고 성능을 높였다.",
            "비디오 세계 모델에서 검증 과정을 수정 과정으로 바꿔 화질과 속도를 높이는 SpecWM을 제안했어요."
          ]
        },
        {
          "tag": "발전·재생에너지",
          "n": 2,
          "n_done": 2,
          "one_lines": [
            "주택 에너지 관리 방식을 개발하고 비교했어요",
            "벨기에 주택의 첨단 에너지 관리 시스템 효과를 시뮬레이션했어요."
          ]
        },
        {
          "tag": "수학·이론",
          "n": 2,
          "n_done": 2,
          "one_lines": [
            "행동과 의견이 얽힌 사회 모델을 제어하는 수학적 방법을 개발했어요.",
            "알파 포텐셜 기반 선형 근사로 미분 게임 초기값을 구했다"
          ]
        },
        {
          "tag": "의료·바이오",
          "n": 1,
          "n_done": 1,
          "one_lines": [
            "생리적 제약을 더한 가우스 과정으로 안전한 인슐린 투여 결정 프레임워크를 개발하고 검증했어요."
          ]
        }
      ],
      "picks": [
        {
          "canon_id": "2611.25512",
          "badge": "전공",
          "why": "전공(전력·제어) 중 키워드가 많이 걸림: voltage, frequency, energy storage, data center"
        },
        {
          "canon_id": "2611.21373",
          "badge": "실무 인기",
          "why": "허깅페이스 추천 48"
        },
        {
          "canon_id": "2611.26590",
          "badge": "교차 출현",
          "why": "여러 곳에 같이 올라옴: cs.AI + 허깅페이스"
        },
        {
          "canon_id": "2611.26092",
          "badge": "의외",
          "why": "오늘 풀이 중 드문 주제 '수학·이론'(1편) — 키워드·추천수와 상관없이 고름"
        },
        {
          "canon_id": "2611.25176",
          "badge": "전공",
          "why": "전공(전력·제어) 중 키워드가 많이 걸림: power system, energy storage, data center"
        },
        {
          "canon_id": "2611.26444",
          "badge": "실무 인기",
          "why": "허깅페이스 추천 46"
        },
        {
          "canon_id": "2611.25962",
          "badge": "의외",
          "why": "오늘 풀이 중 드문 주제 '의료·바이오'(1편) — 키워드·추천수와 상관없이 고름"
        }
      ],
      "cards": [
        {
          "canon_id": "2611.25512",
          "title": "Physics-Guided Multi-Output Surrogate Modeling of a Centralized-UPS Data Center",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25512"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 10.0,
          "score_why": "전공 +3 · 키워드 4개(voltage, frequency, energy storage, data center) → +6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "voltage",
            "frequency",
            "energy storage",
            "data center"
          ],
          "ai": {
            "easy1_title": "데이터 센터의 복잡한 전력 반응을 그대로 모사하는 게 왜 어려웠나",
            "easy1_desc": "중앙 집중식 무정전 전력 장치(UPS)로 전력을 공급받는 데이터 센터는 IT 수요부터 냉각 장치까지 여러 요소가 얽혀 전력망에 복잡하게 반응하는데요, 이 복잡한 동작을 빠르고 정확하게 예측해 내기가 까다로웠거든요. 연구진은 1-MW, 0.48-kV 규모의 시뮬레이션 데이터 센터를 바탕으로 인과 관계를 따지는 다중 출력 대리 모델을 직접 만들고 전기적으로 구현해 봤다는 겁니다. 쉽게 말하면, 거대한 데이터 센터의 복잡한 전력 흐름을 간소화된 모델로 재현해 보려 했다는 말이에요.",
            "easy2_title": "물리학 기반 특징을 넣은 모델로 전력 반응을 정확히 재현해 봤다",
            "easy2_desc": "정규화된 IT 수요나 전압 편차 같은 네 가지 물리학 기반 단자 특징을 써서 공통 연결점(PCC)과 UPS 출력에서의 유효 전력 및 무효 전력을 예측해 봤는데요, 그 결과 능동 전개 모델 중 릿지 규제형 저차 비선형 자기회귀 모델(NARX)이 가장 낮은 검증 및 테스트 오차를 기록했다고 해요. 이 대리 모델을 MATLAB/Simulink의 3상 전기 인터페이스에 연결해 테스트해 봤더니, 실제 AI 작업 부하 프로필에서 전력 명령을 잘 따라간 것으로 나타났다는 겁니다. 장점은 복잡한 전력 동작을 콤팩트한 단자 모델로 재현할 수 있다는 건데요, 대신 특정 시뮬레이션 환경과 조건에 맞춰 검증된 결과라는 점도 함께 살펴봐야 한다는 거예요.",
            "topic": "데이터 센터의 전력망 응답을 효율적으로 예측하기 위해 물리학 기반의 인과적 다중 출력 대리 모델을 개발하고 이를 전기적으로 구현한 연구예요.",
            "one_line": "데이터 센터 전력 응답을 예측하는 물리학 기반 대리 모델을 개발하고 검증했어요.",
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
          "canon_id": "2611.25176",
          "title": "Reliability-based Sizing of Energy Storage for Large Load Integration",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25176"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 10.0,
          "score_why": "전공 +3 · 키워드 3개(power system, energy storage, data center) → +6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "power system",
            "energy storage",
            "data center"
          ],
          "ai": {
            "easy1_title": "데이터 센터가 늘어나면서 전력망이 불안해지는 문제",
            "easy1_desc": "전력계통에 연결되는 대형 부하가 빠르게 늘어나고 있는데요, 특히 인공지능(AI) 데이터 센터 같은 시설이 들어오면서 전력망 계획을 짜는 데 새로운 문제가 생기고 있다는 겁니다. 적절한 계획이 없으면 데이터 센터 부하가 커지면서 정전이 늘어나고 결국 시스템의 신뢰도가 떨어진다는 말이에요. 에너지저장장치(ESS)가 유연성과 빠른 출력 조절 능력 덕분에 이런 문제를 줄일 대안으로 꼽히는데요, 신뢰도 이점을 최대로 살리려면 적절한 크기와 위치를 정해야 한다는 거예요.",
            "easy2_title": "에너지저장장치의 최적 크기와 위치를 찾는 틀을 제안함",
            "easy2_desc": "그래서 연구진은 대형 부하가 늘어나면서 생기는 신뢰도 저하를 줄이기 위해, 에너지저장장치의 최적 크기와 위치를 정하는 체계를 제안했는데요. 확률적 반마르코프 모델로 AI 데이터 센터의 부하를 만들고 마르코프 체인 몬테카를로 시뮬레이션 기반 평가 체계에 넣어서 분석해 봤다는 겁니다. RTS-GMLC 72-버스 테스트 시스템으로 이 체계를 보여 줬더니, 전력망 계획가나 규제 기관이 안정적인 전력망을 유지하는 데 실용적인 도구가 될 수 있다는 결과를 얻었다는 셈이에요.",
            "topic": "인공지능 데이터 센터 같은 대형 부하가 늘어날 때 전력망의 신뢰도를 지키기 위해 에너지저장장치의 크기와 위치를 최적화하는 체계를 다룬 논문이에요.",
            "one_line": "대형 부하 통합을 위한 ESS 최적화 체계를 제안했어요.",
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
          "canon_id": "2611.26527",
          "title": "Thermal-Guided Ensemble Reinforcement Learning for Regime-Adaptive Short-Term GPU Power Forecasting in AI Data Centers",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26527"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(transformer) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "transformer"
          ],
          "ai": {
            "easy1_title": "AI 데이터센터의 전력 예측이 왜 어려웠나",
            "easy1_desc": "인공지능(AI) 데이터센터는 전력이 갑자기 확 몰렸다가 바뀌는 일이 잦아서 믿을 수 있는 에너지 관리가 정말 어려웠거든요. 기존에는 딥러닝 기반이나 앙상블 학습 모델을 써도 정규화된 평균 절대 오차가 4~11%까지 벌어지는 문제가 있었던 거예요. 뭔 소리냐면, 상황이 바뀔 때마다 전력 변화를 정확히 맞추기가 그만큼 까다로웠다는 말입니다.",
            "easy2_title": "열 정보를 더해 전력을 더 정확하게 예측했다",
            "easy2_desc": "그래서 연구진은 온도와 GPU 사용량 같은 열 정보를 함께 반영해 전력을 예측하는 열 유도 앙상블 강화학습 구조를 제안했는데요, 여러 예측 모델의 결과를 실시간으로 섞고 베이지안 확률 계층을 거쳐 불확실성까지 잡아내도록 만들었어요. 그 결과 모든 컴퓨팅 상황에서 오차를 약 1% 수준까지 줄였고 기존 방식보다 더 빨리 수렴한다는 겁니다. 서브클라우드(Supercloud) 1초 단위 데이터를 써서 확인해 봤더니 예측 구간도 훨씬 좁아졌다는 장점이 있는데, 대신 모델 구조가 복잡해져서 여러 신경망을 함께 다뤄야 한다는 점도 같이 따라온다는 거예요.",
            "topic": "AI 데이터센터의 전력 부하를 정확하게 예측하기 위해 열 정보를 활용한 앙상블 강화학습 구조를 제안했어요.",
            "one_line": "AI 데이터센터 전력 예측을 위해 열 정보를 쓰는 앙상블 강화학습을 제안했어요.",
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
          "canon_id": "2611.26412",
          "title": "How to Effectively Manage the Energy in Residential Systems: Development and Comparison of Methods",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26412"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(electric vehicle) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "electric vehicle"
          ],
          "ai": {
            "easy1_title": "가정집 에너지를 어떻게 아껴야 할지가 문제였어요",
            "easy1_desc": "화석연료에서 벗어나는 과정에서 에너지를 효율적으로 관리하는 게 중요한데요, 문제는 전력 생산에 맞춰 소비와 저장을 맞추는 일이 쉽지 않다는 거예요. 연구진은 가정집의 배터리나 열펌프 같은 설비를 다루는 여러 관리 방식을 살펴봤는데요, 단순 규칙부터 최적화와 기계학습까지 어떤 차이가 있는지 비교해 본 셈이에요. 쉽게 말하면, 주택 에너지를 가장 똑똑하게 아끼는 방법을 찾으려 했다는 말입니다.",
            "easy2_title": "새로운 기계학습 방법을 만들고 실제 실험까지 해 봤어요",
            "easy2_desc": "그래서 연구진은 TreeC라는 새로운 기계학습 기반 관리 방식을 개발해 여러 시뮬레이션과 실제 실험으로 성능을 비교했는데요, 결과는 기존 방법들과 경쟁할 만한 수준이었다고 해요. 투명성과 이해하기 쉽다는 장점이 있는데, 대신 실제 하드웨어 환경에서는 훈련 데이터가 부족하거나 실시간 데이터가 불안정해서 시뮬레이션만큼 성능이 안 나왔다는 단점도 함께 나타났다는 겁니다. 쉽게 말하면, 새 기술이 꽤 쓸만하지만 실제 현장에서는 여전히 걸림돌이 있다는 거예요.",
            "topic": "가정집 에너지 관리 시스템의 다양한 방법들을 개발하고 시뮬레이션과 실제 실험으로 비교한 연구예요.",
            "one_line": "주택 에너지 관리 방식을 개발하고 비교했어요",
            "topic_tag": "발전·재생에너지",
            "limit": "에너지 관리 알고리즘을 도입하는 데 드는 비용과 노력이 절감되는 비용을 아직 평균적으로는 넘어서지 못한다는 한계가 있어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.26175",
          "title": "Network-Aware Reserve Procurement via Decision-Dependent Adaptive Robust Optimization",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26175"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(renewable) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "renewable"
          ],
          "ai": {
            "easy1_title": "전력망이 꽉 차면 예비력을 제때 못 쓰는 문제가 있었어요",
            "easy1_desc": "전력망에 전기가 몰리는 혼잡 현상이 생기면 예비 전력을 제때 공급하기 어려워지는데요, 기존의 강건 최적화 방식은 예비력 수요 곡선이나 재생에너지의 변동성이 불확실성에 미치는 영향을 제대로 고려하지 못했다는 한계가 있었거든요. 뭔 소리냐면, 재생에너지 비중이 높은 시스템일수록 이런 불확실성을 정교하게 다뤄야 하는데 기존 방식은 그 점을 놓치고 있었다는 말이에요.",
            "easy2_title": "불확실성을 더 똑똑하게 계산해서 비용을 줄여 봤어요",
            "easy2_desc": "연구진은 예비력 수요와 재생에너지 발전량에 따라 불확실성의 범위가 변하는 결정 의존적 상자 불확실성 집합을 도입했는데요, 이를 통해 예비력을 확보할 때 전력망 혼잡 상황을 더 정확하게 반영할 수 있게 됐습니다. 기존의 내접 상자 방식은 혼잡을 악화시키는 경우만 고려했지만, 새로운 방식은 예비력 가동이 오히려 혼잡을 완화할 수 있다는 점까지 계산에 넣었거든요. 영국 29개 버스 시스템에서 테스트해 보니 비용 절감 효과가 더 컸다는 결과가 나왔습니다.",
            "topic": "전력망 혼잡을 고려하여 재생에너지 변동성을 반영한 효율적인 예비력 확보 최적화 기법을 제안했어요.",
            "one_line": "전력망 혼잡을 고려한 예비력 확보 최적화 기법을 제안했어요.",
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
          "canon_id": "2611.25494",
          "title": "Koopman Lifting for Linear Encrypted Control of Nonlinear Systems: Applications to LQR and MPC",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25494"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(reactor) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "reactor"
          ],
          "ai": {
            "easy1_title": "암호화된 채로 비선형 시스템을 제어해야 하는데요",
            "easy1_desc": "동형 암호를 쓰면 측정값이나 제어기 파라미터를 숨긴 채 클라우드 서버에 제어 계산을 맡길 수 있는데요. 하지만 기존의 암호화된 선형 제어기를 비선형 시스템에 그대로 쓰려면 서로 맞는 표현 방식이 필요하다는 문제가 있었어요. 연구진은 그래서 쿤프만 리프팅을 써서 비선형 시스템을 암호화된 선형 계산과 이어 주는 방식을 내놓았는데요. 쉽게 말하면, 숨겨진 데이터로도 복잡한 시스템을 다룰 수 있게 길을 튼 셈이라는 말이에요.",
            "easy2_title": "쿤프만 리프팅을 붙여서 암호화 제어를 해냈습니다",
            "easy2_desc": "연구진은 쿤프만 리프팅을 활용한 동형 암호 기반 제어(HEK-Control) 방식을 제안했는데요. 클라이언트 측에서 상태 변수의 비선형 함수를 계산하고, 서버에서는 선형 연산과 암호화 방식을 그대로 유지하면서 제어기를 설계하는 구조예요. 시뮬레이션을 해봤더니 암호화하지 않은 기존 계산 결과와 거의 맞아떨어졌다고 하는데요. 장점은 암호화된 상태에서도 기존 선형 제어법을 쓸 수 있다는 점이지만, 대신 클라이언트가 추가로 비선형 함수를 계산해야 한다는 부담이 같이 따른다는 겁니다.",
            "topic": "쿤프만 리프팅과 동형 암호를 엮어서 비선형 시스템을 암호화된 상태로 제어하는 프레임워크를 제안하고 그 성능을 확인한 내용이에요.",
            "one_line": "쿤프만 리프팅을 활용한 동형 암호 기반 비선형 제어 방식을 제안하고 검증했어요.",
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
          "canon_id": "2611.25465",
          "title": "DeoPC: Data-Enabled Output-Feedback Predictive Control for State Regulation",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25465"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(reactor) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "reactor"
          ],
          "ai": {
            "easy1_title": "입출력 데이터만으로는 상태를 맞추기가 어려웠다는 건데요",
            "easy1_desc": "알 수 없는 선형 시스템에서 내부 상태를 제어하려고 할 때, 안의 상태를 모른 채 입출력 데이터만 들어오면 다루기 까다로웠거든요. 연구진은 바로 이 문제를 풀려고 과거의 입출력 데이터로 상태를 추정하는 새로운 틀을 만들어 봤습니다. 뭔 소리냐면, 수학적인 모델을 따로 만들지 않고 데이터 그 자체로 시스템을 다루겠다는 말이에요.",
            "easy2_title": "데이터 기반 제어 틀을 만들어 안정성을 보장해 봤습니다",
            "easy2_desc": "그래서 연구진은 입출력 데이터만으로 시스템을 제어하면서도 제약 조건을 지키는 데이터 기반 출력 피드백 예측 제어(DeoPC)라는 틀을 개발했는데요. 이렇게 했더니 노이즈가 있거나 없는 환경 모두에서 시스템이 안정적으로 작동한다는 걸 보여줬습니다. 쉽게 말하면, 상태를 직접 모르는 상황에서도 데이터만 가지고 안전하게 시스템을 통제할 수 있게 되었다는 셈이에요.",
            "topic": "알 수 없는 선형 시스템을 입출력 데이터만으로 제어하기 위해 데이터 기반 출력 피드백 예측 제어(DeoPC) 틀을 개발하고 그 안정성을 증명한 연구예요.",
            "one_line": "데이터 기반 출력 피드백 예측 제어 틀을 개발하고 안정성을 증명했어요.",
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
          "canon_id": "2611.25223",
          "title": "Stochastic Crew Placement for Winter Storm Restoration of Rural Distribution Feeders Considering Building Cooling Deadlines",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25223"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(voltage) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "voltage"
          ],
          "ai": {
            "easy1_title": "겨울철 정전이 오면 집이 얼마나 빨리 식는지가 문제였는데요",
            "easy1_desc": "겨울 폭풍으로 시골 전력망이 끊기면 전기 난방을 쓰는 집들이 허용된 실내 온도 아래로 뚝뚝 떨어질 수 있다는 점이 문제였거든요. 그래서 연구진은 건물이 식어버리는 마감 기한을 고려해서, 폭풍이 치기 전에 미리 복구반을 어디에 배치할지 정하는 방식을 제안해 봤는데요. 즉, 정전된 집들이 정해진 시간 안에 다시 따뜻해질 수 있도록 미리 손을 쓰겠다는 겁니다.",
            "easy2_title": "미리 복구반을 배치해 봤더니 정전 피해 시간이 39% 줄었습니다",
            "easy2_desc": "그래서 시뮬레이션을 돌려봤더니, 페널티를 주었을 때 복구반 두 개 중 하나가 먼 마을 쪽으로 옮겨가면서 마감 기한을 넘긴 정전 시간이 39% 줄어드는 결과를 보였습니다. 전체 정전 시간은 5.3% 늘어난다는 단점도 있는데, 대신 가장 중요한 기한을 지키는 데는 도움이 된다는 장점이 있다는 거고요. 다만 복구반이 세 개일 때는 배치를 바꿀 필요가 없었으며, 당장 전기를 다시 연결하면 전압 제한을 넘기게 된다는 점도 확인했습니다.",
            "topic": "겨울철 폭풍으로 인한 시골 정전 상황에서 건물 냉각 기한을 고려하여 복구반을 미리 배치하는 2단계 확률적 혼합정수 선형 계획법에 대한 연구예요.",
            "one_line": "건물 냉각 기한을 고려한 사전 복구반 배치 모델을 제안하고 효과를 분석했어요.",
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
          "canon_id": "2611.21373",
          "title": "WeVisForensics: Self-Evolving Agent for Omni AI-Generated Video Detection",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.21373",
            "arxiv": "https://arxiv.org/abs/2611.21373"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 48,
          "score": 5.8,
          "score_why": "추천 48 → +4.8 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "가짜 영상이 늘어나는데 기존 방식은 엉뚱한 곳을 놓치기 일쑤였다",
            "easy1_desc": "최근 영상 생성 기술이 좋아지면서 진짜인지 가짜인지 찾아내는 게 중요해졌는데요, 지금까지 나온 방법들은 한 번에 쭉 생각하거나 정해진 틀대로만 움직이다 보니 짧거나 국소적으로 나타나는 가짜 흔적을 놓치기 쉽다는 문제가 있었거든요. 게다가 조사하는 방식을 아무리 바꿔도 고정된 검사 도구 자체의 실력까지 저절로 좋아지는 건 아니라는 한계가 있었다는 말이에요. 쉽게 말하면, 낡은 도구로는 요즘 나오는 정교한 가짜 영상을 잡기 버거웠던 셈이라는 겁니다.",
            "easy2_title": "스스로 진화하는 에이전트 구조를 만들어 가짜 영상 검출 능력을 끌어올렸다",
            "easy2_desc": "그래서 연구진은 위비포렌식스(WeVisForensics)라는 에이전트 기반 구조를 선보였는데요, 대장 역할을 하는 조사관 에이전트가 시각과 음성 단서를 다루는 여러 검사관 에이전트들을 이끌며 스스로 진화하도록 만들었어요. 조사관은 어떤 흔적을 어느 구간에서 볼지 스스로 배우고, 듀얼 타임스케일 정책 최적화(DTPO)라는 전략을 통해 조사관은 빠르게 배우면서 검사관들은 천천히 다듬어 나간다는 거예요. 검사 능력이 좋아지는 장점이 있는데, 대신 역할별 주석과 상호작용 궤적을 꼼꼼하게 엮은 새로운 데이터셋과 강화학습 풀이 꼭 뒷받침되어야 한다는 점도 함께 따라온다는 겁니다.",
            "topic": "시각과 음성 단서를 넘나들며 스스로 진화하는 에이전트 구조를 통해 가짜 생성 영상을 정확하게 잡아내는 위비포렌식스(WeVisForensics) 프레임워크를 개발했다는 내용이에요.",
            "one_line": "스스로 진화하는 에이전트로 가짜 영상을 찾아내는 위비포렌식스를 개발했어요.",
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
          "canon_id": "2611.26444",
          "title": "Mind2Act World: A Diagnostic Benchmark for Embodied Mind, Physical Action, and Mind-Action Composition in Robotic Manipulation",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.26444",
            "arxiv": "https://arxiv.org/abs/2611.26444"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 46,
          "score": 5.6,
          "score_why": "추천 46 → +4.6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇이 생각과 행동을 따로 할 줄 알아도 합치는 걸 못 봤다는 게 문제였어요",
            "easy1_desc": "로봇이 사람처럼 복잡한 일을 하려면 과거를 떠올려 생각하는 능력, 몸을 정확히 움직이는 능력, 그리고 둘을 합치는 능력이 필요한데요. 그런데 기존 평가 방식은 이걸 섞어서 보거나 따로 봐서, 실패했을 때 왜 실패했는지를 알기 어렵다는 거예요. 뭔 소리냐면, 머리가 나빠서인지 몸이 말을 안 들어서인지 구분이 안 된다는 말이에요. 쉽게 말하면, 원인을 정확히 짚어낼 도구가 부족했던 셈이라는 말이에요.",
            "easy2_title": "그래서 생각과 행동을 섞어서 평가하는 벤치마크를 만들었더니 한계가 뚜렷하게 보였어요",
            "easy2_desc": "연구진은 5개 실제 분야에서 가져온 30가지 가상 조작 작업으로 이루어진 마인드투액트 월드(Mind2Act World)라는 진단용 벤치마크를 만들었는데요. 이걸로 세 가지 관점인 생각, 행동, 그리고 둘의 결합을 시험해 봤더니, 한 가지만 잘하던 에이전트들이 결합 단계에서는 훅 무너졌다는 거예요. 가장 센 에이전트조차 생각은 52.7%, 행동은 39.0%를 해냈지만 두 개를 합치니 12.0%만 성공했거든요. 결합을 잘 해내는 게 앞으로 풀 핵심 문제라는 점을 밝혀냈다는 겁니다.",
            "topic": "로봇의 인지 추론과 물리적 행동을 결합하는 능력을 진단하기 위해 마인드투액트 월드(Mind2Act World) 벤치마크를 만들고 기존 시스템들을 평가한 연구예요.",
            "one_line": "로봇의 생각과 행동을 평가하는 벤치마크를 만들고 성능을 진단함",
            "topic_tag": "AI 안전·평가",
            "limit": "연구진은 환경 피드백을 통해 추론과 실행을 결합하는 것이 여전히 주요 미해결 문제라고 밝혔다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
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
              "easy2_title 한 줄 아님/너무 김(46자)"
            ],
            "flags": [],
            "tag": "AI 안전·평가",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.26409",
          "title": "WeMM-Video: Pushing the Frontiers of Open-Source Omni-Modal Video Understanding",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.26409",
            "arxiv": "https://arxiv.org/abs/2611.26409"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 39,
          "score": 4.9,
          "score_why": "추천 39 → +3.9 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "오디오와 영상을 함께 이해하는 일은 여전히 어려운 도전이었는데요",
            "easy1_desc": "멀티모달 인공지능 분야에서는 소리와 영상을 같이 이해하는 게 핵심 과제로 남아 있었는데요. 연구진은 텍스트, 이미지, 오디오, 비디오를 한꺼번에 처리하는 오픈소스 기초 모델인 WeMM-Video를 개발해 문제를 풀어보려고 했다는 겁니다. 2B, 4B, 9B, 35B-A3B 크기로 다양하게 만들어서 소리와 시각 정보를 함께 받아들이고 추론하는 데 집중했다고 해요.",
            "easy2_title": "하이브리드 추론 방식을 도입했더니 성능이 크게 좋아졌다고 해요",
            "easy2_desc": "그래서 1조 2천억 개의 토큰을 활용해 단계별 사전 학습과 다중 교사 OPD, 반복 방지 MrDPO, 전문가 강화학습 과정을 거쳤는데요. 빠르게 바로 답을 주는 모드와 차근차근 따져보는 사고 모드를 함께 지원하는 하이브리드 방식을 썼다는 겁니다. 120개 넘는 벤치마크에서 평가해 봤더니 오디오·비디오 이해 능력이 아주 뛰어났고, 특히 35B-A3B 모델은 오픈소스 중 최고 기록을 세우면서 기존 모델들과의 격차를 좁혔다는 거예요.",
            "topic": "다양한 모달리티를 함께 처리하는 오픈소스 영상·오디오 이해 모델인 WeMM-Video의 개발과 성능 평가에 대한 내용이에요.",
            "one_line": "통합 영상·오디오 이해를 위한 오픈소스 모델 WeMM-Video를 개발하고 평가했어요.",
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
          "canon_id": "2611.26590",
          "title": "Probing the \"Conscious\" Mind: Selective Access and Global Workspace in Vision-Language Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI",
            "허깅페이스"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26590",
            "hf": "https://huggingface.co/papers/2611.26590"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 33,
          "score": 4.3,
          "score_why": "추천 33 → +3.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시각-언어 모델 속을 들여다보니 뭐가 문제였나",
            "easy1_desc": "시각-언어 모델(VLM)이 눈과 글자로 들어온 정보를 섞어서 쓰기는 하는데, 겉으로 나오는 결과만 봐서는 속에서 개념을 어떻게 잡고 있는지 알 수가 없었거든요. 뇌에서 정보를 모아서 쓴다는 전역 작업장 이론(GWT)을 빌려와서 모델 안을 들여다보려는데요, 원래는 이름 토큰 하나만 보던 걸 토큰 묶음으로 넓혀서 개념을 더 잘 잡고 실험해 보겠다는 거예요. 쉽게 말하면, 블랙박스 같았던 모델 속에서 개념이 어떻게 움직이는지 콕 집어내기 힘들었다는 말이에요.",
            "easy2_title": "다중 모달 렌즈를 달아봤더니 무엇이 달라졌나",
            "easy2_desc": "그래서 연구진은 멀티모달 자코비안 렌즈인 MC-렌즈를 만들어 붙여서 모델이 개념을 어떻게 다루는지 살펴봤는데요, 실험을 해 봤더니 중간 상태에서도 개념 정보가 잘 읽히고 필요한 작업에 따라 골라 쓸 수 있다는 걸 확인했다는 거예요. 개념 정보를 바꾸는 반사실적 실험을 해 보니까 실제로 뒤쪽 계산과 추론에도 영향을 주더라는 장점이 있는데요, 대신 신뢰할 수 있는 선택적 접근은 개념이 그냥 읽히는 것보다 나중에야 겨우 만들어진다는 한계도 같이 나타난다는 겁니다.",
            "topic": "시각-언어 모델(VLM) 안에서 개념이 어떻게 처리되고 공유되는지 살펴보기 위해 멀티모달 자코비안 렌즈(MC-Lens)를 도입하고, 전역 작업장 이론(GWT)을 바탕으로 접근성과 선택적 작동 방식을 분석했다는 내용이에요.",
            "one_line": "시각-언어 모델의 개념 처리를 분석하는 멀티모달 렌즈를 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "신뢰할 수 있는 선택적 접근은 단순히 개념이 접근 가능해지는 시점보다 더 나중에 발달한다는 한계가 있어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.26595",
          "title": "Coda-DaVinci: Reimagining Video Generation with Code2Video",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.26595",
            "arxiv": "https://arxiv.org/abs/2611.26595"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 31,
          "score": 4.1,
          "score_why": "추천 31 → +3.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "코드로 영상을 만들 때 프록시와 프롬프트를 어떻게 써야 하는지 잘 몰랐습니다",
            "easy1_desc": "연구진은 코드(Code2Video)를 이용해 영상을 만들 때 구조와 움직임을 정확하게 조절하려고 3D 프록시를 썼는데요, 문제는 최적의 결과를 내려면 프록시와 프롬프트를 어떻게 짜야 하는지 아직 잘 안 밝혀져 있었다는 거예요. 그래서 이 패러다임이 뭘 할 수 있고 어디서 막히는지 실험과 블라인드 평가로 뜯어봤다는 말이에요. 쉽게 말하면, 제대로 써먹기 위한 밑바작업을 다각도로 검토해 본 셈이라는 겁니다.",
            "easy2_title": "상황에 맞춰 프록시 단계를 고르는 코다-다빈치를 만들었습니다",
            "easy2_desc": "그래서 연구진은 상황에 따라 프록시와 직접 생성 중 알맞은 걸 고르고, 개체마다 모델링 단계를 맞춰 주는 코다-다빈치(Coda-DaVinci) 프레임워크를 내놨는데요, 시뮬레이션과 프롬프트를 맞추고 멀티 에이전트로 자산을 지키며 고치게 만들었다는 거예요. 결과적으로 지시 따르기와 물리적 자연스러움이 좋아지는 장점이 있는데, 대신 전환 안정성과 장소 설정 유지력에서는 한계가 드러난다는 점도 함께 확인됐다는 겁니다.",
            "topic": "코드 기반 영상 생성(Code2Video)에서 프록시와 프롬프트 조절 방식을 실험하고, 이에 맞춘 작업 적응형 에이전트 프레임워크인 코다-다빈치를 제안한 연구예요.",
            "one_line": "코드 기반 영상 생성을 위한 에이전트 프레임워크를 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "장기 영상 평가에서는 전환 안정성과 장면 설정 유지력에서 한계가 드러났습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.26559",
          "title": "Learning Control-Relevant Koopman Representations from Input-Output Trajectories",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26559"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "예측만 잘 된다고 제어까지 잘 되는 건 아니었거든요",
            "easy1_desc": "연구진은 데이터 기반의 쿱만 표현(Koopman representations)을 쓸 때 예측이 정확하다고 해서 곧바로 출력 피드백 제어에 알맞은 건 아니라고 지적했는데요, 입력과 출력의 궤적만 가지고 제어에 꼭 맞는 표현을 배우는 연속 시간 틀을 새로 만들었다는 겁니다. 인코더가 유한한 입력과 출력 창에서 끌어올린 상태를 만들고, 적분 회귀로 덧셈형 모델을 찾아내는 방식인데요, 쉽게 말하면 겉보기 예측 정확도와 실제 제어에 써먹을 수 있는 성질은 다를 수 있다는 말이에요.",
            "easy2_title": "과거 기록을 엮어 제어용 모델을 만들고 실험해 봤습니다",
            "easy2_desc": "그래서 연구진은 관측 가능성이나 제어 가능성 같은 성질들을 구별하고, 공분산으로 정규화한 관측 가능성 기준을 최적화하는 방법을 썼는데요, 정확한 벤치마크에서는 인코더를 어떻게 처음 설정하느냐에 따라 분석적 끌어올림을 다시 찾아낼 수 있다는 걸 확인했다는 겁니다. 반면 더프링 진동자(Duffing oscillator) 실험에서는 관측 가능성을 높여도 추적 성능이 나아지지 않았고, 오히려 매 순간 인코더로 상태 추정치를 갱신하는 게 추적 정확도에 훨씬 큰 영향을 줬다는 장단점이 같이 나타났는데요, 쉽게 말하면 관측 지표를 꾸미는 것보다 직접 상태를 자주 고쳐 주는 게 더 확실한 방법이라는 셈이에요.",
            "topic": "입출력 궤적만으로 제어에 알맞은 쿱만 표현을 배우는 연속 시간 틀을 개발하고, 관측 가능성과 제어 성능 사이의 관계를 분석한 연구예요.",
            "one_line": "입출력 궤적 기반 제어용 쿱만 표현 학습 틀을 개발했어요.",
            "topic_tag": "제어·로봇",
            "limit": "근삿값 표현의 경우, 열린집합 위에서 정보가 담긴 정확한 덧셈식 끌어올림은 불가능하다는 점을 보였습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.26454",
          "title": "Profile-Anchored Control: Velocity Shaping with Exact Disturbance Rejection and Transient-Free Replanning",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26454"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "속도와 감속을 안전하게 맞추는 게 중요한데 방해가 자꾸 생겼는데요",
            "easy1_desc": "움직임을 제어할 때 목표 지점에 닿는 것만큼 어떻게 접근하느냐가 중요한데요, 알 수 없는 하중과 방해 속에서도 속도와 감속이 안전이나 편안함의 한계 안에 머물러야 합니다. 위치에 따라 달라지는 속도 프로필이 이런 요구를 자연스럽게 보여 주는데, 연구진은 이 프로필의 제곱을 이용해 움직임을 계획하고 제어기까지 만들어 봤다는 겁니다. 뭔 소리냐면, 계획과 실행을 따로 노는 게 아니라 한 번에 묶어서 다루겠다는 말이에요.",
            "easy2_title": "방해를 딱 잡아내고 중간에 계획을 바꿔도 흔들림이 없게 만들었습니다",
            "easy2_desc": "연구진이 내놓은 PACER 방식은 모르는 이득이나 하중 아래서도 일정한 시간이 지나면 원래의 움직임을 곧바로 되찾고, 중간에 경로를 바꿔도 흔들림이 생기지 않는다고 하는데요. 스칼라 2차 시스템을 위한 정적 법칙과 1차 시스템을 위한 동적 법칙을 합쳐서 방해를 정확하게 막아낸다는 거예요. 속도와 가속도, 저크 한계를 지키면서 경로를 다시 짜는 것도 볼 수 있는데, 시뮬레이션된 엘리베이터로 그 쓰임새를 확인해 봤다는 셈이에요.",
            "topic": "알 수 없는 방해 속에서도 속도 프로필을 활용해 움직임을 정확히 제어하고 중간에 경로를 매끄럽게 바꿀 수 있는 PACER 방식을 제안한 연구예요.",
            "one_line": "속도 프로필 기반의 PACER 제어 방식으로 방해를 막고 경로를 재계획함",
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
          "canon_id": "2611.26441",
          "title": "Should Belgians Install an Advanced Energy Management System in Their Electrified Dwelling ?",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26441"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "벨기에 주택에 똑똑한 에너지 관리가 필요한가",
            "easy1_desc": "벨기에 주택에서 전기 사용이 늘고 복잡한 전기 요금제가 퍼지면서 첨단 에너지 관리 시스템을 설치하면 어떤 이득이 있는지 따져볼 때가 되었는데요. 연구진은 화석연료를 쓰던 곳을 히트펌프나 전기보일러, 전기차 충전기 같은 전기로 바꾸고 태양광까지 더한 대표 주택 500곳을 가상으로 시뮬레이션해 봤어요. 기존 기본 제어 방식과 비교해서 머신러닝 방식인 TreeC와 예측 제어 방식인 MPC가 실제로 얼마나 절약되는지 확인해 보려고 했다는 겁니다. 뭔 소리냐면, 새로운 제어 시스템을 도입했을 때 비용을 얼마나 아낄 수 있는지 미리 계산해 본 셈이에요.",
            "easy2_title": "요금은 아끼지만 기기 값과 구독료를 빼면 남는 게 적다",
            "easy2_desc": "그래서 2023년 실제 시간대별 요금과 월간 피크 요금을 적용해 시뮬레이션을 해봤더니, 기본 방식보다 1년 평균 절약액은 TreeC가 82.5 EUR, MPC가 116.6 EUR, 이상적인 MPC P가 177.4 EUR로 나타났는데요. 난방 쾌적도는 모두 비슷했지만, TreeC는 전기차 충전 완료율이 93.3%로 MPC의 88.8%보다 높았고 전체 500채 주택의 부하도 더 고르게 분산된다는 장점이 있었어요. 하지만 이런 절약액이 시스템 구매 비용 280~680 EUR와 연간 구독료 0~360 EUR에 비하면 여전히 적은 편이라서 널리 쓰이기에는 불리해 보인다는 겁니다.",
            "topic": "벨기에 전동화 주택에서 첨단 에너지 관리 시스템의 경제적 효용성을 시뮬레이션으로 분석한 내용이에요.",
            "one_line": "벨기에 주택의 첨단 에너지 관리 시스템 효과를 시뮬레이션했어요.",
            "topic_tag": "발전·재생에너지",
            "limit": "절약액이 구매 비용과 구독료에 비해 적어 널리 쓰이기에는 불리한 편입니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.26227",
          "title": "Federated Learning for Unmanned Aerial Systems: A Screened Bibliometric Census of an Emergent Sub-Literature",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26227"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "연합학습과 무인항공기 연구를 모아 봤더니",
            "easy1_desc": "연구진은 2022년부터 2026년까지의 스코푸스(Scopus) 자료에서 연합학습(FL, Federated Learning)과 무인항공기(UAS, Unmanned Aerial Systems)를 함께 다룬 문헌 1만 4,965건을 조사해 봤는데요. 전체의 7.9%에 해당하는 1만 4,945개의 고유 기록 중 제목이나 초록에 두 용어가 모두 들어간 경우는 1,185건에 불과하다는 걸 확인했습니다. 연도별 비중이 7.5% 안팎으로 꾸준해서 단순한 착시는 아니라는 건데요. 쉽게 말하면, 두 분야를 겉으로 같이 언급한 연구는 많지만 실제로 깊게 다룬 경우는 생각보다 적다는 말이에요.",
            "easy2_title": "실제 내용을 뜯어보고 저자 수와 한계도 확인했습니다",
            "easy2_desc": "그래서 연구진은 30개 기록을 직접 읽어보고 저자 식별 번호로 4,095명의 저자를 세어 봤는데요. 전체 논문의 54% 정도만 무인항공기용 연합학습을 실질적으로 다루고 있었고, 이름 문자열만 쓰면 저자 수가 31%나 줄어들 수 있다는 점을 밝혔습니다. 오픈알렉스(OpenAlex) 자료와 비교했을 때 겹치는 비율은 74%였는데요. 배달 관련 용어를 쓴 228건 중 택배나 마지막 구간 배송을 직접 언급한 경우는 2.2%에 불과하다는 단점도 있는데, 장점은 키워드 검색만으로는 실제 드론 배송 연구를 완벽하게 걸러내기 어렵다는 한계를 정확히 짚어냈다는 겁니다.",
            "topic": "무인항공기와 연합학습을 다룬 문헌들을 키워드 검색과 서지 정보로 분석해 실제 연구 동향과 한계를 파악한 연구예요.",
            "one_line": "무인항공기 연합학습 문헌을 서지 분석하고 한계를 파악했어요",
            "topic_tag": "전력망·계통",
            "limit": "키워드 검색만으로는 실제 마지막 구간 드론 배송 연구를 주변 무인항공기 네트워킹 문헌과 완전히 분리해내지 못한다는 한계가 있습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
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
              "4945",
              "4965"
            ],
            "format": [],
            "flags": [],
            "tag": "전력망·계통",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.26141",
          "title": "Information-Region MPC: Non-Iterative Distributed Control of Urban Traffic Signals",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26141"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 교통 신호 제어 방식은 계산이 너무 복잡했습니다",
            "easy1_desc": "전체 교통 정보를 다 써서 최적의 신호를 찾는 집중식 방식은 도시가 커질수록 계산량이 너무 빠르게 늘어난다는 한계가 있었는데요, 그렇다고 여러 번 주고받으며 나누어 푸는 분산 방식은 매번 반복해서 정보를 교환해야 하므로 속도가 느려진다는 거예요. 뭔 소리냐면, 정확하게 맞추려다 보니 계산이 너무 오래 걸려서 실시간으로 대응하기가 어렵다는 말이에요.",
            "easy2_title": "정보 영역을 나누어 반복 없이 빠르게 계산하도록 했습니다",
            "easy2_desc": "그래서 연구진은 반복 조율 없이 제한된 실시간 데이터만으로 처음 제어 입력을 근사하는 정보 영역 기반 모델 예측 제어(IR-MPC)를 제안했는데요, 과거 데이터를 활용해 다른 교차점의 변화가 미치는 영향을 분석하고 각 교차점에 맞는 정보 영역을 구성한다는 거예요. 현재 데이터만 가지고 각 교차점에서 한 번만 풀면 되므로 반복 계산이 사라진다는 장점이 있는데, 대신 사전에 파악된 영향 범위를 바탕으로 추정한다는 점도 같이 따라온다는 겁니다. 쉽게 말하면, 전체를 다 보지 않고 꼭 필요한 영역만 골라서 빠르게 처리하는 셈이에요.",
            "topic": "반복 계산을 없애고 실시간 데이터로 교차점 신호를 빠르게 제어하는 정보 영역 기반 분산 제어 기법을 제안했어요.",
            "one_line": "반복 없는 정보 영역 기반 신호 제어 방식을 제안하고 속도와 정확도를 검증했어요.",
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
          "canon_id": "2611.26092",
          "title": "Control of Complex Social Systems via Committed Minorities and Opinion Broadcast",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26092"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "사람들 생각이 어떻게 행동으로 이어지는지 몰랐던 거요",
            "easy1_desc": "사회 시스템 속에서 사람들이 의견을 만들고 행동을 고르는 게 어떻게 서로 얽혀 있는지 하나로 묶어 보려고 했는데요. 게임 이론을 바탕으로 행동과 의견이 같이 맞물려 돌아가는 모델을 만들어 봤다는 거예요. 뭔 소리냐면, 따로 놀던 두 마음과 행동을 하나의 수학적 틀 안에서 같이 움직이게 짜 맞췄다는 말이에요. 그랬더니 모델이 어떻게 수렴하는지 이론적인 결과와 실제 사회 시스템의 특징을 더한 확장판까지 함께 살펴볼 수 있게 됐다는 겁니다.",
            "easy2_title": "고집 센 소수를 심거나 정보를 뿌려서 시스템을 쥐락펴락해 봤는데요",
            "easy2_desc": "그래서 이렇게 맞물려 돌아가는 모델을 마음대로 조종하는 문제를 다뤄봤는데요. 구체적인 방법으로는 집단 속에 굳은 소신을 가진 소수를 집어넣거나 특정 사람들한테 정보를 널리 방송하는 두 가지 방식을 썼다는 거예요. 이렇게 하면 시스템을 다스릴 수 있다는 이론적 뒷받침까지 마련했는데, 실제 데이터로 만든 망 구조를 써서 그 성능까지 눈으로 확인해 봤다는 겁니다. 복잡한 사회 시스템을 수학적으로 다루고 조종할 수 있는 튼튼한 도구를 쥐게 된다는 장점이 있는데, 대신 실제 사람들의 마음을 그대로 똑같이 본뜨기에는 한계가 따를 수도 있다는 점도 같이 생각해야 해요.",
            "topic": "행동과 의견이 같이 맞물려 움직이는 사회 시스템을 게임 이론 모델로 만들고, 소수의 집단이나 정보 방송을 통해 이를 제어하는 수학적 방법을 다룬 내용이에요.",
            "one_line": "행동과 의견이 얽힌 사회 모델을 제어하는 수학적 방법을 개발했어요.",
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
          "canon_id": "2611.25962",
          "title": "Safe Data-Driven Insulin Dosage Decision Based on Physiology-Constrained Gaussian Process Learning",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25962"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 인슐린 치료법은 생리적 원칙과 맞지 않는 문제가 있었거든요",
            "easy1_desc": "당뇨병 환자가 하루에 여러 번 인슐린 주사를 맞는 MDI 요법을 쓸 때, 데이터를 기반으로 모델을 학습시킬 때 몸속 생리적 원칙과 잘 맞도록 만드는 게 중요했는데요. 연구진은 데이터 기반 학습이 인슐린 처방의 실제 몸 상태와 어긋나지 않도록 안전한 학습 및 결정 프레임워크를 도입해 봤습니다. 뭔 소리냐면, 그냥 데이터만 믿고 학습하면 위험할 수 있으니 몸의 원리를 제약 조건으로 걸어두겠다는 말이에요. 결국 환자의 혈당 예측을 더 믿을 만하게 만들어 준다는 겁니다.",
            "easy2_title": "생리적 제약을 더한 가우스 과정 학습과 최적화로 안전성을 높였어요",
            "easy2_desc": "그래서 연구진은 생리적 사전 지식을 모델 학습 단계에서 제약 조건으로 넣는 가우스 과정 학습 방법을 개발해 혈당 변화를 모델링했는데요. 인슐린 결정을 할 때 이전 투여량에 따른 벌칙 항을 넣고 고혈당과 저혈당에는 비대칭 벌칙을 주는 예측 기반 최적화 방법을 함께 썼습니다. FDA가 승인한 UVA/Padova 제1형 당뇨 시뮬레이터의 성인 10명 코호트로 확인해 봤더니 효과가 있었다는 거예요. 실제 환자 데이터로도 분석해 보니 현실에서 안전하고 생리적으로 타당한 결정을 내릴 수 있는 것으로 보입니다.",
            "topic": "신체 생리적 원칙을 제약 조건으로 삼아 데이터 기반으로 안전한 인슐린 투여 결정을 내리는 프레임워크를 개발하고 검증한 연구예요.",
            "one_line": "생리적 제약을 더한 가우스 과정으로 안전한 인슐린 투여 결정 프레임워크를 개발하고 검증했어요.",
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
            "format": [
              "one_line 52자"
            ],
            "flags": [],
            "tag": "의료·바이오",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.25654",
          "title": "DARSY: A Tool for Data-Driven Abstraction and Policy Synthesis for Stochastic Systems with Unknown Dynamics",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25654"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "모르는 시스템을 다루느라 막막했던 문제",
            "easy1_desc": "연구진은 시스템이 어떻게 움직이는지 모르는 상태에서 정확한 제어 정책을 세우기가 까다롭다는 점에 주목했는데요. 구체적인 동역학이나 잡음 분포를 모르는 이산 시간 확률 제어 시스템에서 검증과 정책 합성을 해내야 하는 과제였거든요. 쉽게 말하면, 정보가 부족한 상황에서도 시스템의 안전성을 믿을 수 있게 보장해야 한다는 말이에요.",
            "easy2_title": "시뮬레이터만으로 안전한 정책을 찾아내는 도구를 개발했어요",
            "easy2_desc": "그래서 연구진은 시뮬레이터와 립시츠 상한(Lipschitz bound)만 있으면 완전히 자동으로 작동하는 다스이(DARSY)라는 도구를 만들었는데요. 이 도구는 표본으로 뽑은 상태 전이로부터 유한 구간 마르코프 결정 프로세스(IMDP)를 만들어내고, 강건 동적 계획법을 써서 원하는 사양을 만족할 확률의 하한선을 찾아낸다는 거예요. 계산된 보증은 사용자가 지정한 신뢰도에 따라 아마도 대략적으로 옳다(PAC)는 장점이 있지만, 시스템의 상태 블록을 묶는 과정에서 2계층 IMDP(2IMDP)를 구현해 추상화 오차를 줄이고 더 엄격한 만족 보증을 얻어낸다는 점도 같이 따라온다는 겁니다.",
            "topic": "알려지지 않은 동역학을 가진 확률 시스템을 위해 시뮬레이터 기반으로 추상화와 정책 합성을 자동으로 수행하는 소프트웨어 도구 다스이(DARSY)를 개발하고 검증한 연구예요.",
            "one_line": "알려지지 않은 확률 시스템을 제어하는 도구를 개발했어요.",
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
          "canon_id": "2611.25490",
          "title": "Distributed Regenerative Resource Allocation with Exact Centralized Optimality",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25490"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "자원이 스스로 늘어나는 분산형 구조를 만들어 봤습니다",
            "easy1_desc": "연구진은 다중 에이전트(multi-agent) 네트워크를 위한 분산 재생 자원 할당, 즉 DRRA(Distributed Regenerative Resource Allocation) 프레임워크를 제안했는데요, 다음 할당 단계에서 쓸 수 있는 자원이 바로 직전 단계에서 에이전트들이 만들어낸 효용에 따라 내부적으로 결정되는 방식이에요. 쉽게 말하면, 이전 결과가 다음 자원의 양을 알아서 키워주는 구조라는 말입니다.",
            "easy2_title": "두 단계로 나눠 움직였더니 중앙에서 한 것과 똑같아졌습니다",
            "easy2_desc": "그래서 연구진은 원시-이중 할당과 자원 재생을 수행하는 완전 분산형의 2단계 내부-외부 동역학을 개발했는데요, 충분한 분산 알고리즘 이득 조건 아래서 내부 동역학이 지역적 지수 수렴을 보여준다는 거예요. 내부가 수렴한 뒤에는 이 DRRA 할당이 중앙 집중식 최적해를 정확하게 복원하고, 지역 자원 기준 업데이트도 중앙 자원 재생 동역학을 그대로 재현해 낸다는 셈이에요.",
            "topic": "다중 에이전트 네트워크에서 이전 효용에 따라 자원이 재생되는 분산형 자원 할당 프레임워크를 개발하고 중앙 집중식 최적성을 그대로 회복함을 밝혔어요.",
            "one_line": "자원 재생이 가능한 분산형 할당 프레임워크를 개발했어요.",
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
          "canon_id": "2611.25485",
          "title": "Motion-Sickness-Aware Vehicle Control via DKUC-Based Inverse Design and Iterative Feedback Tuning",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25485"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "멀미를 줄이려면 어떤 움직임이 좋은지 기준이 없었어요",
            "easy1_desc": "차량 제어기를 조정해서 멀미를 줄이려고 해도, 사람의 생리적 편안함을 반영한 구체적인 목표 움직임이 없다는 게 문제였거든요. 기존의 6자유도 주관적 수직 갈등(6DoF-SVC) 모델은 멀미를 평가할 수는 있지만, 제어기를 설계할 때 필요한 목표 움직임 값을 직접 주지는 못한다는 한계가 있었던 겁니다. 쉽게 말하면, 멀미를 줄이고 싶어도 무엇을 기준으로 차를 움직여야 할지 알기 어려웠던 셈이에요.",
            "easy2_title": "멀미를 줄이는 목표 움직임을 만들고 제어기를 튜닝했어요",
            "easy2_desc": "연구진은 멀미를 줄이는 목표 움직임을 만들기 위해 2단계 프레임워크를 제안했는데요, 먼저 갈등의 정점을 제한해 목표 SVC 궤적을 만들고 이를 차량의 가속도와 각속도 좌표로 변환했어요. 이렇게 만든 기준을 반복 피드백 튜닝(IFT) 방식에 적용해 PI 및 LQR 제어기를 조정했더니, 멀미 관련 수치가 기준 대비 6.95% 줄어드는 결과가 나왔거든요. 제어기 목표치 또한 PI는 49.5%, LQR은 32.3% 감소했는데, 복잡한 생리적 편안함 목표를 실제 차량 제어에 활용할 수 있게 바꿨다는 점이 핵심이에요.",
            "topic": "생리적 편안함을 반영한 멀미 저감 차량 제어기 설계 및 튜닝 방법론에 관한 연구예요.",
            "one_line": "멀미 저감 목표 궤적을 생성하고 제어기를 튜닝했어요.",
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
          "canon_id": "2611.25471",
          "title": "A four-level executable validation protocol for evaluating LLM-generated topology specifications of physics-based HVAC digital twins",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25471"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "에어컨 디지털 트윈을 AI로 만들었는데요, 물리적으로 틀린 걸 못 잡는 게 문제였습니다",
            "easy1_desc": "제조업과 건물에서 에너지를 많이 쓰는 공조 시스템은 장비와 연결을 글로 적어 물리 기반 디지털 트윈으로 자동 만들 수 있는데요, 최근에는 거대 언어 모델(LLM)이 이런 설계를 글로 적어 준다는 겁니다. 그런데 지금까지는 평가할 때 그냥 구문이 맞는지나 시뮬레이션이 돌아가는지만 봤거든요. 뭔 소리냐면, 시뮬레이션은 잘 돌아가도 실제 물리 법칙에는 맞지 않는 모델을 걸러내지 못했다는 말이에요.",
            "easy2_title": "4단계 검증 프로토콜을 제안했더니, 시뮬레이션은 돼도 물리적으로 틀린 걸 찾아냈습니다",
            "easy2_desc": "그래서 연구진은 LLM이 쓴 설계가 실제로 물리적으로 맞는 디지털 트윈이 되는지 4단계로 테스트하는 프로토콜을 제안했는데요, 정적 유효성부터 모델 빌드, 시뮬레이션 수렴, 그리고 숨겨진 기준 모델과의 행동 일치까지 확인하도록 만들었어요. 세 번 고치는 동안 8개 모델 중 7개가 98.6에서 100% 비율로 빌드되었고 시뮬레이션도 80.0% 이상 수렴했으나, 행동 일치는 50.0에서 98.6%까지만 도달했다는 겁니다. 장점은 물리적으로 틀린 걸 잡아낸다는 건데, 대신 제습 로터 같은 시스템에서는 수렴해도 기준 상태와는 달라지는 한계도 같이 나타난다는 거예요.",
            "topic": "거대 언어 모델이 작성한 물리 기반 공조 시스템 디지털 트윈 설계가 실제로 물리적 타당성을 갖추었는지 평가하는 4단계 검증 프로토콜을 제안하고 그 결과를 분석한 내용이에요.",
            "one_line": "LLM이 만든 공조 디지털 트윈의 물리적 타당성을 검증하는 4단계 프로토콜을 제안했어요.",
            "topic_tag": "제어·로봇",
            "limit": "설계 시 각 분야에서 모델링하기 가장 까다로운 물리 요소를 검증 단계에 반드시 포함해야 하며, 제습 로터 시스템 등에서 기준 상태로 수렴하지 않는 한계가 나타났습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
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
              "easy1_title 한 줄 아님/너무 김(48자)",
              "easy2_title 한 줄 아님/너무 김(47자)"
            ],
            "flags": [],
            "tag": "제어·로봇",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.25426",
          "title": "Cone-Constrained Safe Policy Learning With Finite-Step Improvement Guarantees",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25426"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "안전하게 성능을 높이려니 긴 시간 위험을 다루기가 어려웠는데요",
            "easy1_desc": "연구진은 안전 강화학습(Safe reinforcement learning)에서 작업 성능을 높이면서도 위험을 줄이는 일이 핵심 과제였다고 봤는데요, 특히 먼 미래까지 이어지는 제약의 결과를 표현하고 최적화하기가 어렵다는 문제가 있었다는 겁니다. 그래서 이들은 할인된 벨만 재귀(Discounted Bellman recursion)를 만족하고 유일한 고정점을 갖는 학습 가능한 위험 표현 방식인 제약 집약 함수(Constraint Aggregation Function, CAF)를 제안했는데요. 쉽게 말하면, 미래의 위험을 미리 예측해서 현재 정책과 비교할 수 있는 기준을 만들었다는 말이에요.",
            "easy2_title": "위험을 줄이는 방향과 성능을 높이는 방향을 함께 찾았는데요",
            "easy2_desc": "연구진은 앞서 만든 위험 지표를 활용해 위험 하강 방향을 정하는 원추 제약 정책 최적화(Cone-Constrained Policy Optimization, CCPO) 기법을 개발했는데요. 이 방식은 작업 성능을 높이는 방향과 위험을 낮추는 방향이 부딪칠 때 그라디언트 투영(Gradient projection)으로 갈등을 해결하고 안전 원추(Safety cone) 안에서 최종 업데이트를 고른다는 거예요. 표준적인 부드러움 가정과 보폭 한계 아래에서 성능 향상과 위험 감소가 동시에 이루어진다는 장점이 있는데요, 대신 몇 가지 수학적 조건이 맞아야 한다는 점도 같이 따라온다는 겁니다.",
            "topic": "먼 미래의 위험을 예측하고 정책 최적화를 통해 성능 향상과 안전 확보를 동시에 달성하는 새로운 강화학습 방법을 제안했어요.",
            "one_line": "먼 미래의 위험을 다루는 제약 집약 함수와 정책 최적화 기법을 개발했어요.",
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
          "canon_id": "2611.25356",
          "title": "Data-Driven Hamiltonian Under Parametric Uncertainty",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25356"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "움직임을 몰라서 위험한 곳을 피하기 어려웠습니다",
            "easy1_desc": "시스템의 정확한 움직임을 알아야 위험한 구역에 들어가지 않도록 막을 수 있는 해밀턴-야코비 접근법을 쓸 수 있는데요, 실제로는 그 움직임을 미리 알기가 어렵거든요. 그래서 데이터를 이용해 해밀턴 함수를 직접 구하는 방법이 나왔지만, 이 역시 시스템의 립시츠 상수(변화의 한계를 나타내는 값)가 필요하고 데이터에서 멀어질수록 정확도가 떨어지는 단점이 있다는 겁니다. 뭔 소리냐면, 데이터만으로는 안전한 범위를 확실하게 계산하기에 부족한 부분이 있었다는 말이에요.",
            "easy2_title": "매개변수 구조를 이용해 데이터 기반 해밀턴 함수를 만들었습니다",
            "easy2_desc": "그래서 연구진은 알려진 특징 벡터와 미지의 매개변수가 선형 관계를 이루는 시스템을 가정하고, 여기에 가우스 사전 분포를 더해 매개변수 기반 데이터 드라이븐 해밀턴 함수를 새롭게 구성했는데요. 몇 개의 짧은 궤적과 소음이 섞인 속도 측정값만 가지고도 적어도 1-delta의 확률로 모든 상태와 코상태에서 해밀턴 함수의 하한을 찾아낼 수 있다는 겁니다. 쉽게 말하면, 불확실한 상황에서도 안전한 범위를 높은 확률로 확실하게 찾아낼 수 있게 된 셈이에요.",
            "topic": "미지의 매개변수가 있는 시스템에서 궤적 데이터를 활용해 안전한 상태 범위를 보장하는 매개변수 기반 데이터 드라이븐 해밀턴 함수(DDH)를 제안한 연구예요.",
            "one_line": "미지의 매개변수 환경에서 데이터 기반 해밀턴 함수로 안전 범위를 계산했어요.",
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
          "canon_id": "2611.25319",
          "title": "The Prediction-to-Decision Gap: First-Action Informativity in Data-Driven Predictive Control",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25319"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "첫 번째 제어 입력을 찾으려는데 과연 데이터로 결정될까",
            "easy1_desc": "연구진은 모델 예측 제어(MPC, Model Predictive Control)라는 기술에서 가장 먼저 쓰는 입력값 하나를 데이터가 제대로 정해 주는지 그 기준을 따져 봤는데요. 이를 서로 다른 데이터 호환 모델들이 같은 첫 동작에 동의하는지 보는 첫-동작 정보성(first-action informativity)으로 정의해 보았다는 겁니다. 그런데 자동 회귀 외생 입력 모델(ARX, autoregressive models with exogenous inputs)과 제약 없는 2차 MPC에서 확인해 봤더니, 예측이 같다고 해서 첫 동작까지 똑같이 맞아떨어지는 건 아니라는 결과가 나왔어요. 쉽게 말하면, 미래를 똑같이 예측해도 실제로 첫발을 떼는 방법은 다를 수 있다는 말이에요.",
            "easy2_title": "모델이 다를 때의 차이를 측정하고 예시로 확인해 보기",
            "easy2_desc": "그래서 연구진은 동작이 서로 어긋날 때 특정 파라미터 분포를 기준으로 입력값에서 평균 제곱 편차가 얼마나 나는지 수치로 나타내 봤는데요. 이 측정값을 국소 민감도와 파라미터 공분산으로 근사해서 분석했다는 겁니다. 분석과 수치 예시를 통해 모델 불확실성이 예측과 실제 제어 동작에 서로 다르게 영향을 미친다는 점을 보여 주는데요. 장점은 첫 제어 동작에 미치는 불확실성을 직접 평가할 수 있지만, 대신 모델이 다를 때 생기는 세부적인 차이를 일일이 따져봐야 한다는 번거로움도 같이 따른다는 겁니다.",
            "topic": "모델 예측 제어에서 데이터가 첫 번째 제어 입력에 미치는 영향과 그 불확실성을 평가하는 구조에 대한 연구예요.",
            "one_line": "모델 예측 제어의 첫 번째 입력에 대한 불확실성 평가 틀을 만들었어요.",
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
              "2"
            ],
            "format": [],
            "flags": [],
            "tag": "제어·로봇",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.25307",
          "title": "Data-driven Linearization of Operational Dynamics of Soft Open Points in Power Distribution Networks",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25307"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "부드러운 전력 개폐기 전력 손실을 계산하기가 너무 복잡했어요",
            "easy1_desc": "연구진은 배전망(Power Distribution Networks)에서 쓰이는 부드러운 전력 개폐기(SOP, Soft Open Point)의 작동 과정에서 생기는 전력 손실을 데이터 기반으로 선형화하는 방식을 제안해 봤는데요. 복잡한 비선형 방정식을 그대로 쓰지 않고 학습 기반 표현과 장치 용량 부등식의 표준 분할 방식을 섞었더니, 손실 추정 정확도를 크게 떨어뜨리지 않고도 식을 선형화할 수 있었다고 해요. 쉽게 말하면, 계산하기 너무 까다롭던 전력 손실 공식을 정확도는 그대로 챙기면서 다루기 쉽게 바꿨다는 말이에요.",
            "easy2_title": "세 가지 실제 사례에 적용해 보니 정확도와 효율을 모두 잡았어요",
            "easy2_desc": "그래서 제안한 기술을 IEEE 33버스 네트워크의 3상 확장 버전을 써서 세 가지 응용 사례에 직접 시험해 봤는데요. 다중 터미널 위상 변경 부드러운 전력 개폐기(PCSOP) 크기 산정, 능동 배전망 운영 최적화, 그리고 심층 강화학습(DRL) 에이전트를 훈련하는 시스템 시뮬레이션 엔진에서 각각 성능을 확인해 봤다는 겁니다. 표준 비선형 교류 조류(AC load-flow) 표현과 비교해 검증했더니 제안한 방식이 효과적이라는 점을 확인했다고 밝혔는데요. 계산 속도를 챙기면서도 기존 방식만큼 정확한 결과를 낼 수 있다는 장점이 있는 반면, 데이터 기반 학습을 거쳐야 한다는 점이 함께 따라온다는 겁니다.",
            "topic": "배전망에서 부드러운 전력 개폐기(SOP)의 작동 역학을 정확도 저하 없이 선형화하는 데이터 기반 방식을 제안하고 세 가지 사례로 검증한 내용이에요.",
            "one_line": "부드러운 전력 개폐기 전력 손실 계산식을 데이터 기반으로 선형화했어요.",
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
          "canon_id": "2611.25149",
          "title": "An {\\alpha}-potential linear approximation for LQ differential games",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25149"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "게임에서 균형을 찾으려니 초기값에 너무 흔들리더라",
            "easy1_desc": "선형-이차 미분 게임에서 피드백 내시 균형을 찾으려고 커플드 알제브라릭 리카티 이쿼에이션(연립 대수 리카티 방정식, cAREs)을 쓰는데요, 문제는 이걸 풀 때 쓰는 반복 알고리즘이 시작하는 값에 따라 결과가 크게 흔들린다는 거예요. 연구진은 바로 이 점에 착안해서, 알파 포텐셜 게임 틀을 빌려 체계적이면서 게임 성격에 맞는 초기값을 자동으로 만드는 방식을 제안해 봤거든요. 뭔 소리냐면, 복잡한 방정식을 풀기 전에 기준이 되는 하나의 표준 방정식을 먼저 풀어서 대략적인 윤곽을 잡아둔다는 말이에요.",
            "easy2_title": "기준을 먼저 잡고 선형화했더니 반복 횟수가 줄었다",
            "easy2_desc": "그래서 연구진은 N명의 플레이어가 참여하는 게임에서 하나의 기준 포텐셜 게임을 먼저 만들고, 거기서 나온 해를 바탕으로 원래의 복잡한 방정식을 선형화하는 방식을 썼는데요, 그렇게 해서 얻은 해를 세 가지 표준 cARE 솔버의 초기값으로 집어넣어 봤어요. $10^4$개의 무작위 2인 게임으로 실험해 봤더니, 제안한 방식을 썼을 때 평균 반복 횟수가 줄어드는 것으로 나타났거든요. 플레이어 수를 2부터 13까지 늘려가며 실험해 봐도 이 반복 횟수 감소 효과가 그대로 이어졌다는 점이 장점인데, 대신 게임의 구조에 맞춰 기준 방정식을 먼저 풀어야 한다는 조건이 붙는다는 겁니다.",
            "topic": "선형-이차 미분 게임에서 연립 대수 리카티 방정식을 풀 때 초기값 문제를 해결하기 위해 알파 포텐셜 기반의 선형 근사 초기화 방법을 제안한 논문이에요.",
            "one_line": "알파 포텐셜 기반 선형 근사로 미분 게임 초기값을 구했다",
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
            "evidence_by_symbols": 1,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "수학·이론",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.25096",
          "title": "Asymmetric Transistor Aging Under Thermal Gradients",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25096"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "반도체 칩이 뜨거워지면 한쪽만 더 빨리 늙어 버려요",
            "easy1_desc": "최신 반도체 기술을 쓰면 성능은 좋아지지만, BTI(바이어스 온도 불안정성)라는 현상 때문에 소자가 더 쉽게 노화된다는 문제가 있는데요. 연구진이 16nm(나노미터) FinFET 회로를 시뮬레이션해 봤더니, 칩 안에서 온도 차이가 나는 곳에서는 트랜지스터가 골고루 늙지 않고 한쪽만 더 빨리 망가지는 현상이 나타났거든요. 이게 왜 문제냐면, 회로가 작동하는 타이밍이 어긋나서 셋업 시간이나 홀드 시간을 지키지 못하는 오류가 생기기 때문이라는 거예요.",
            "easy2_title": "칩을 설계할 때 온도 차이를 미리 고려해야 합니다",
            "easy2_desc": "그래서 연구진은 반도체 칩의 신뢰성을 지키려면 설계 마지막 단계인 타이밍 사인오프(Timing Signoff) 과정에서 온도 차이에 따른 노화 분석을 반드시 포함해야 한다고 주장했는데요. 이렇게 하면 칩이 뜨거워져도 성능이 갑자기 떨어지는 일을 막을 수 있다는 장점이 있거든요. 다만, 분석 과정이 조금 더 복잡해질 수는 있지만 칩의 안정성을 위해서는 꼭 필요한 과정이라는 말이에요.",
            "topic": "반도체 칩 내부의 온도 차이가 트랜지스터 노화에 미치는 비대칭적 영향과 이를 설계에 반영할 필요성을 다루고 있어요.",
            "one_line": "16nm 회로에서 온도 차이가 트랜지스터 노화에 미치는 영향을 분석했어요.",
            "topic_tag": "반도체·하드웨어",
            "limit": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.21383",
          "title": "The Mask Is Not the Object: Volumetric Supervision for 3D Gaussian Segmentation",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.21383",
            "arxiv": "https://arxiv.org/abs/2611.21383"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 30,
          "score": 4.0,
          "score_why": "추천 30 → +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "마스크만 보고 골랐더니 보이지 않는 부분은 깎여 나가더라고요",
            "easy1_desc": "연구진이 기존의 3차원 분할 방식들을 뜯어봤더니, 화면에 그려진 모습만 보고 학습하다 보니 눈에 잘 띄지 않거나 가려진 부분은 제대로 배우지 못한다는 문제가 있었는데요. 이게 왜 문제냐면, 겉으로 보이는 마스크가 그럴싸해 보여도 속은 텅 비거나 엉뚱하게 쪼개질 수 있다는 말이에요. 쉽게 말하면, 겉멋만 번지르르하고 속 알맹이는 부실한 셈이라는 겁니다.",
            "easy2_title": "깊이 정보를 바로 들이밀어 속까지 꽉 찬 3차원을 만들었습니다",
            "easy2_desc": "그래서 연구진은 VODA라는 새로운 감독 방식을 들고 나왔는데요, 픽셀마다 깊이 구조를 따져서 가려진 부분까지 골고루 힘을 실어 주도록 바꿨습니다. 이렇게 했더니 가려져 있던 가우스 점들까지 싹 다 살아나는 장점이 있는데, 대신 깊이 구조를 정밀하게 따져야 하니 연산이나 조건이 더 까다로워진다는 점도 같이 따라온다는 겁니다. 쉽게 말하면, 겉보기만 번지르르하던 걸 속까지 꽉 찬 진짜로 고쳐 놓은 셈이에요.",
            "topic": "3차원 가우스 분할에서 겉보기 마스크 학습의 한계를 짚고, 깊이 정보를 이용해 속까지 정확히 감독하는 방식을 제안한 연구예요.",
            "one_line": "가려진 3차원까지 정확히 잡는 깊이 기반 감독 방식을 제안했어요.",
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
          "canon_id": "2611.26629",
          "title": "Posterior Matching Distillation",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.26629",
            "arxiv": "https://arxiv.org/abs/2611.26629"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 26,
          "score": 3.6,
          "score_why": "추천 26 → +2.6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "왜 기존 방식은 이미지나 동영상이 비슷비슷해졌을까",
            "easy1_desc": "디퓨전(Diffusion) 모델의 속도를 높이려고 학생 모델이 선생님 모델의 결과물을 따라 하도록 만드는 과정에서, 한쪽 방향으로 치우치는 성질 때문에 다양한 이미지가 나오지 못하고 대표적인 몇 가지만 반복되는 문제가 있었거든요. 쉽게 말하면, 똑똑한 선생님 모델을 그대로 압축하는 과정에서 다양성을 조금 잃어버리는 셈이라는 말이에요.",
            "easy2_title": "새로운 방식인 PMD를 도입해서 다양성과 속도를 모두 잡았다",
            "easy2_desc": "그래서 연구진은 후행 확률을 골고루 맞추는 방식인 PMD(Posterior Matching Distillation)라는 새로운 방법을 도입했는데요, 이렇게 했더니 추가 학습 없이도 원하는 만큼의 단계로 이미지를 빠르게 만들어낼 수 있다는 거예요. SDXL과 FLUX.2 4B 모델로 실험을 해봤더니 4단계만 거치는 방식 중에서는 가장 좋은 FID(Fréchet Inception Distance) 점수를 기록했는데, 프롬프트 일치도나 화질 면에서도 밀리지 않는 성능을 보여준다는 장점이 있어요.",
            "topic": "디퓨전 모델의 생성 속도를 높이면서도 이미지의 다양성과 품질을 유지하기 위해, 후행 확률 평균을 맞추는 새로운 증류 방법인 PMD를 제안하고 성능을 검증한 내용이에요.",
            "one_line": "후행 확률 평균을 맞추는 새로운 디퓨전 증류 방법인 PMD를 제안했어요.",
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
          "canon_id": "2611.26603",
          "title": "Depth Pro 2: Sharp and Temporally Consistent Metric Monocular Depth",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.26603",
            "arxiv": "https://arxiv.org/abs/2611.26603"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 26,
          "score": 3.6,
          "score_why": "추천 26 → +2.6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방법들은 시간 일치도와 경계 선명도 중 하나를 포기해야 했는데요",
            "easy1_desc": "연구진이 기존의 단안 깊이 추정(monocular depth estimation) 방법들을 분석해 봤더니, 여러 프레임을 쓰는 방법은 시간 일치도를 챙기는 대신 선명도가 떨어지고 단일 프레임 방법은 선명한 대신 시간에 따라 흔들린다는 한계가 있었거든요. 뭔 소리냐면, 두 마리 토끼를 다 잡지 못하고 늘 하나를 양보해야 했다는 말이에요. 쉽게 말하면, 영상이나 사진 한쪽에서 늘 아쉬운 점이 남았다는 셈이에요.",
            "easy2_title": "사진과 영상을 한꺼번에 처리하는 확장 가능한 네트워크를 만들었는데요",
            "easy2_desc": "그래서 연구진은 사진과 비디오를 둘 다 처리하면서 원본 해상도로 깊이 맵(depth map)을 예측하는 단일 네트워크를 훈련시켰다고 하는데요. 이렇게 했더니 깊이의 정확도와 선명함, 시간적 일치도를 한 번에 챙겨서 기존 연구들보다 뛰어난 성능을 보였다는 겁니다. 장점은 모든 면에서 앞선다는 건데, 대신 다양한 모델 패밀리를 함께 관리해야 한다는 점도 같이 따라온다는 거예요.",
            "topic": "사진과 비디오에서 선명하고 시간이 지나도 일정한 절대 깊이를 추정하는 방법인 뎁스 프로 투(Depth Pro 2)에 대한 연구예요.",
            "one_line": "사진과 비디오에서 선명하고 일정한 깊이를 추정하는 뎁스 프로 투를 개발했어요.",
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
          "canon_id": "2611.26107",
          "title": "HiUni: Harmonizing Understanding and Generation in Shared Visual Space",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.26107",
            "arxiv": "https://arxiv.org/abs/2611.26107"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 25,
          "score": 3.5,
          "score_why": "추천 25 → +2.5 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "이해와 생성을 따로 놀게 만들었더라고요",
            "easy1_desc": "통합 멀티모달 모델들은 시각적 이해와 생성을 한 틀에서 다루려고 하는데요, 기존 방식들은 두 작업의 요구가 다르다는 이유로 시각 표현이나 백본 연산을 따로 떼어놓았다는 거예요. 뭔 소리냐면, 진정한 의미의 통합을 이루지 못하고 반쪽짜리로 머물렀다는 말입니다. 쉽게 말하면, 겉으로는 하나라고 하지만 속살은 따로 놀고 있던 셈이라는 거죠.",
            "easy2_title": "뼈대를 공유하면서 두 마리 토끼를 다 잡았어요",
            "easy2_desc": "그래서 연구진은 사전 학습된 시각 언어 모델(VLM)의 파라미터를 넓게 공유하면서 이해와 생성을 모두 다루는 HiUni를 내놨는데요, 작업별 연산은 출력 쪽에만 몰아두고 같은 비전 트랜스포머 백본을 그대로 재사용했다는 거예요. 픽셀 공간 생성이 어렵고 세밀한 정보가 사라진다는 한계는 픽셀 확산 헤드와 가벼운 하이게이트 경로를 더해 해결했다고 하는데요. 결과적으로 백본을 쪼개지 않고도 두 기능을 모두 효과적으로 뒷받침할 수 있음을 보여줬다는 겁니다.",
            "topic": "시각적 이해와 생성을 하나의 공유된 백본으로 묶어내는 통합 멀티모달 모델의 설계 방식이에요.",
            "one_line": "시각 이해와 생성을 하나의 백본으로 묶는 통합 모델 HiUni를 제안했어요.",
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
          "canon_id": "2611.26380",
          "title": "EgoCaptioner: Towards Comprehensive and Fine-Grained Egocentric Video Captioning",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.26380",
            "arxiv": "https://arxiv.org/abs/2611.26380"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 24,
          "score": 3.4,
          "score_why": "추천 24 → +2.4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "짧고 빠른 행동을 놓치고 순서가 꼬이는 문제가 있었습니다",
            "easy1_desc": "일인칭 시점 영상(Egocentric video)을 글로 설명하는 일은 세밀한 디테일과 정확한 시간 측정이 필요한데요, 현재의 멀티모달 대형 언어 모델(MLLM)들은 짧은 행동을 놓치거나 순서를 헷갈리거나 착용한 사람의 움직임을 오해하곤 합니다. 기존의 설명 방식들은 자세한 이야기와 정확한 시간을 함께 담아내는 지원이 부족하거든요. 뭔 소리냐면, 영상 속에서 무슨 일이 언제 일어났는지 촘촘하게 엮어내지 못했다는 말이에요.",
            "easy2_title": "에고캐션러를 만들어 시간 맞춤형 설명을 끌어냈습니다",
            "easy2_desc": "그래서 연구진은 여덟 가지 일인칭 영상 소스에서 뽑아낸 5만 개의 학습 예제를 바탕으로 에고캐션러(EgoCaptioner)를 선보였는데요, 영상 전체의 분위기와 착용한 사람의 활동을 시간에 맞춘 단계별 설명과 짝지어 준다는 겁니다. 그룹 상대 정책 최적화(GRPO) 방식을 써서 사실의 정확도와 시간 정렬을 가다듬었다는 장점이 있는데요, 대신 센서 데이터가 있을 때는 자세에서 나온 움직임 사실을 보태야 한다는 조건도 같이 따라온다는 겁니다. 쉽게 말하면, 거친 단계에서 세밀한 단계로 이어지는 주석 파이프라인을 거쳐 성능을 끌어올린 셈이에요.",
            "topic": "일인칭 영상 설명의 정확도와 시간 맞춤을 높이기 위해 거친 단계에서 세밀한 단계로 이어지는 주석 방식과 정책 최적화를 적용한 에고캐션러를 개발했다는 내용이에요.",
            "one_line": "일인칭 영상 설명을 위해 에고캐션러를 개발하고 성능을 높였다.",
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
          "canon_id": "2611.25387",
          "title": "TuringSpace: Grounding Spatial Intelligence in Action with Interactive CAPTCHAs",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.25387",
            "arxiv": "https://arxiv.org/abs/2611.25387"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 22,
          "score": 3.2,
          "score_why": "추천 22 → +2.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 AI는 화면을 누르며 행동을 고치는 공간 지능이 부족했다",
            "easy1_desc": "사람들은 2차원 화면을 보며 3차원 구조를 생각하고 직접 누르거나 끌며 결과를 고쳐 나가는데요, 기존 멀티모달 대형 언어 모델(MLLM)들은 이런 공간 능력을 시험할 마땅한 방법이 없었거든요. 기존 캡차(CAPTCHA) 시험들은 이미 너무 쉬워졌거나 공간 능력을 안 보고, 공간 시험들은 직접 행동하는 과정이 빠져 있다는 겁니다. 뭔 소리냐면, 화면 속에서 직접 움직이며 배우는 시험장이 아예 없었다는 말이에요.",
            "easy2_title": "상호작용 캡차 환경을 만들고 모델을 훈련해 실력 차이를 확인했다",
            "easy2_desc": "그래서 연구진은 다섯 가지 공간 능력을 다루는 125개의 상호작용 캡차 가상 환경인 튜링스페이스(TuringSpace)를 만들었는데요, 화면을 누르고 끌며 풀도록 설계된 확장 가능한 훈련장이랍니다. 이걸로 테스트해 봤더니 사람은 94.1%를 맞추는데 최고의 모델인 지피티식스 아스트라(GPT-6 Astra)는 25.9%를 틀리고 최고 공개 가중치 모델인 키미 케이쓰리(Kimi K3)는 68.0%를 틀린다는 거예요. 쉽게 말하면, 화면 속 행동과 공간 지능을 연결해 보면 모델이 어디가 모자란지 낱낱이 드러난다는 셈이에요.",
            "topic": "멀티모달 대형 언어 모델의 공간 지능을 화면 속 상호작용으로 평가하고 훈련하는 튜링스페이스 환경을 제안한 연구예요.",
            "one_line": "상호작용 캡차 환경으로 모델의 공간 지능을 평가하고 학습시켰어요.",
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
          "canon_id": "2611.26414",
          "title": "ZeroVLN: Learning to Navigate without Supervised Fine-Tuning of the VLM Brain",
          "field": "cs.AI",
          "sources": [
            "cs.AI",
            "허깅페이스"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26414",
            "hf": "https://huggingface.co/papers/2611.26414"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 21,
          "score": 3.1,
          "score_why": "추천 21 → +2.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식대로 모델 뇌를 직접 고쳤더니 원래 있던 시각 능력이 망가졌는데요",
            "easy1_desc": "대표적인 시각-언어 탐색(VLN) 기술은 비전-언어 모델(VLM)의 뇌를 탐색 데이터로 직접 미세조정(SFT)해서 기하학적 목표를 예측하게 만들었는데요. 그런데 이렇게 학습하면 모델의 기본 가중치가 크게 바뀌면서 원래 가졌던 일반적인 시각 능력이 떨어지는 문제가 생기거든요. 뭔 소리냐면, 길 찾기 하나를 잘하게 만들려고 모델의 원래 똑똑한 머리를 건드려 망가뜨린 셈이라는 말이에요.",
            "easy2_title": "뇌는 안 건드리고 도구 쓰는 법만 붙여서 시각-언어 탐색 성능을 높였는데요",
            "easy2_desc": "그래서 연구진은 VLM 뇌를 전혀 미세조정하지 않고 탐색을 해내는 제로브이엘엔(ZeroVLN)이라는 느린-빠른(slow-fast) 탐색 틀을 내놓았는데요. 목표를 직접 예측하게 가르치는 대신, 자연어로 된 도구 호출 인터페이스를 달아 행동 전문가에게 움직일 결정을 전달하게 만들었다는 거예요. 장점은 모델의 원래 능력을 그대로 지키면서 탐색 성능을 크게 끌어올린다는 건데요, 대신 느린 뇌와 빠른 행동 전문가를 강화학습(RL)으로 같이 맞추는 복잡한 과정을 거쳐야 한다는 점도 함께 따라온다는 겁니다.",
            "topic": "비전-언어 모델의 뇌를 직접 고치지 않고 도구 호출과 강화학습을 써서 시각-언어 탐색 성능을 끌어올리는 방법에 대한 연구예요.",
            "one_line": "VLM 뇌를 미세조정하지 않는 탐색 틀을 개발했어요.",
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
          "canon_id": "2611.26073",
          "title": "AltRA-Test: An Alternative Annotator Test for LLM Judges Without Shared Annotators",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.26073",
            "arxiv": "https://arxiv.org/abs/2611.26073"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 19,
          "score": 2.9,
          "score_why": "추천 19 → +1.9 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "사람 대신 AI를 평가자로 써도 될지 판단하기가 어려웠어요",
            "easy1_desc": "거대언어모델(LLM)을 사람 대신 평가자로 쓰려는 시도가 늘고 있는데요, 이게 정말 믿을 만한지 통계적으로 따져보는 게 중요하거든요. 기존 방식인 Alt-Test는 모든 데이터를 같은 사람이 평가했을 때만 쓸 수 있다는 한계가 있었어요. 하지만 실제 대규모 환경에서는 데이터마다 평가자가 제각각인 경우가 많아서, 기존 방식으로는 한계가 있었다는 말이에요.",
            "easy2_title": "평가자가 달라도 AI를 써도 될지 알려주는 새로운 검사법을 만들었어요",
            "easy2_desc": "그래서 연구진은 평가자가 달라도 쓸 수 있는 AltRA-Test를 제안했는데요, 데이터를 다시 뽑는 부트스트랩 방식을 써서 사람 평가자들 사이의 일치도와 AI가 섞인 평가자들의 일치도를 비교하는 거예요. AI가 사람들의 평가 신호를 잘 보존하고 있다면 사람 대신 AI를 써도 된다고 판단하는 방식이거든요. 실제로 실험해 봤더니 약 100개의 데이터만으로도 충분히 검사가 가능했고, 기존 방식보다 더 정확한 판단을 내린다고 연구진은 주장했어요.",
            "topic": "평가자가 서로 다른 대규모 환경에서도 사람 대신 거대언어모델(LLM)을 평가자로 활용할 수 있는지 통계적으로 검증하는 방법론에 관한 연구예요.",
            "one_line": "평가자가 달라도 AI를 평가자로 쓸 수 있는지 판단하는 통계적 검사법을 개발했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "AI로의 대체가 모든 상황에서 정당화되는 것은 아니므로 연구자가 직접 자신의 작업에 대해 테스트를 수행해야 합니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.26268",
          "title": "Accelerating Mixture of Block Attention via Dynamic Routing, KV-Centric Execution and Runtime Pipelining",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.26268",
            "arxiv": "https://arxiv.org/abs/2611.26268"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 16,
          "score": 2.6,
          "score_why": "추천 16 → +1.6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "고정된 예산과 쿼리 중심 일정 때문에 생기는 비효율을 짚어봤습니다",
            "easy1_desc": "연구진은 긴 문맥을 처리할 때 키-값 블록을 골라내는 기존 방식인 플래시모바(FlashMoBA)를 살펴봤는데요, 예산이 고정되어 있어서 점수 분포가 다른데도 똑같은 기준을 적용하고 있다는 겁니다. 게다가 쿼리 중심 일정 때문에 여러 범위가 같은 열을 고를 때 데이터 재사용이 쪼개진다는 단점이 있는데요, 뭔 소리냐면 자원이 제대로 안 뭉치고 흩어진다는 말이에요. 쉽게 말하면, 기존 방식은 유연성이 부족해서 계산 속도가 발목을 잡힌 셈이라는 겁니다.",
            "easy2_title": "동적 라우팅과 키-값 중심 실행으로 속도와 성능을 모두 끌어올렸습니다",
            "easy2_desc": "그래서 연구진은 라이트닝모바(LightningMoBA)를 선보였는데요, 동적 라우팅과 키-값 중심 소유권, 런타임 파이프라인을 함께 설계해서 선택과 실행을 맞물리게 만들었다는 거예요. 그 결과 엔드투엔드 생성 속도가 1.20배에서 1.60배 빨라지는 장점이 생겼는데, 평균 룰러(RULER) 점수도 74.42에서 75.28로 높아졌다는 겁니다. 쉽게 말하면, 불필요한 낭비를 줄이고 GPU 계산을 겹쳐서 돌려 효율을 확 높였다는 말이에요.",
            "topic": "라이트닝모바를 통해 긴 문맥 계산의 선택과 실행을 함께 설계하여 생성 속도와 성능을 높인 연구입니다.",
            "one_line": "동적 라우팅과 파이프라인으로 긴 문맥 생성 속도를 높였다.",
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
          "canon_id": "2611.24011",
          "title": "WAM-Policy: World Action Models with On-Policy Distillation for Quadrupedal Loco-Manipulation",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.24011",
            "arxiv": "https://arxiv.org/abs/2611.24011"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 15,
          "score": 2.5,
          "score_why": "추천 15 → +1.5 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "팔 없는 네발로봇은 언어로 움직이기 어렵다는 게 문제였습니다",
            "easy1_desc": "팔이 없는 네발로봇(arm-free quadruped)이 앞다리로 물건을 만지며 세 다리로 걷는 보행-조작을 할 수 있는데요, 기존에는 언어 지시를 따르는 정책이 전혀 없었다는 거예요. 게다가 기존 세계 행동 모델(WAM)은 로봇 팔에 맞춰 사전 학습되어 있어서 샘플링이 느리다는 단점이 있거든요. 결국 언어를 알아듣는 네발로봇용 조작 정책을 빠르게 만드는 게 필요한 상황이었다는 말입니다.",
            "easy2_title": "두 단계로 모델을 바꾸고 합쳐서 속도를 확 끌어올렸습니다",
            "easy2_desc": "연구진은 WAM을 네발로봇에 맞게 바꾸고 증류하는 첫 단계를 거쳐, 강화학습과 다중 교사 증류를 쓰는 두 번째 단계로 성능을 높였는데요. 그 결과 10개의 시뮬레이션 과제에서 전송된 정책이 77.0%에 도달했고, 온정책 자기 증류(OPSD) 학생 모델은 76.7%를 유지하면서 14배나 빠르게 샘플링을 했다는 거예요. 최종적으로 과제 특화 강화학습과 다중 교사 온정책 증류(M-OPD)를 거쳐 85.0%까지 끌어올렸으며, 실제 유니트리 고투 에어(Unitree Go2 Air) 로봇에도 탑재해 적은 추론 비용으로 더 강한 네발로봇 정책을 달성했다고 합니다.",
            "topic": "언어 지시를 따르는 네발로봇의 보행-조작을 위해 세계 행동 모델을 두 단계로 변환하고 증류하여 성능과 속도를 높인 연구예요.",
            "one_line": "세계 행동 모델을 두 단계로 변환해 언어 기반 네발로봇 조작 정책의 속도와 성능을 높였어요.",
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
          "canon_id": "2611.24193",
          "title": "WM^MLLM: Turning MLLMs into World Models",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.24193",
            "arxiv": "https://arxiv.org/abs/2611.24193"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 13,
          "score": 2.3,
          "score_why": "추천 13 → +1.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 비디오 세계 모델은 과거의 장면을 잊어버리는 문제가 있었습니다",
            "easy1_desc": "비디오 세계 모델은 생성기 안에서 세상을 기억하다 보니, 같은 장소로 다시 돌아갔을 때 예전 모습이 슬그머니 변하거나 사라지는 일이 생기곤 했는데요. 뭔 소리냐면, 시간이 지나면서 수정된 내용이 꼬이거나 흩어지는 오류가 일어난다는 말이에요. 쉽게 말하면, 기억을 그리는 곳과 보관하는 곳이 섞여 있어서 생기는 한계인 셈이에요.",
            "easy2_title": "멀티모달 대형 언어 모델을 활용해 지속적이고 수정 가능한 세계 모델을 만들었습니다",
            "easy2_desc": "그래서 연구진은 멀티모달 대형 언어 모델(MLLMs)을 바탕으로 한 상호작용형 세계 모델인 WM^MLLM을 선보였는데요, 세계의 상태를 생성기 바깥에 파노라마와 수정 이력 형태로 따로 두어 언어 모델이 직접 기록하게 했다는 겁니다. 사용자가 텍스트나 상자로 물체를 고치고 조명을 바꿀 수 있는 장점이 있는데, 대신 모델의 판단에 따라 전체 과정이 이뤄진다는 점도 같이 따라온다는 거예요. 쉽게 말하면, 예전 모습이 정확히 유지되면서도 원하는 곳만 꼭 집어 바꿀 수 있게 된 겁니다.",
            "topic": "멀티모달 대형 언어 모델을 기반으로 상태를 바깥에 두어 기억이 흐려지지 않고 수정할 수 있는 상호작용형 세계 모델 WM^MLLM을 개발한 연구예요.",
            "one_line": "기억이 사라지지 않는 상호작용형 세계 모델 WM^MLLM을 개발했어요.",
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
          "canon_id": "2611.26408",
          "title": "Training Vision Models for LLM-Driven Weight-Space Programming",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.26408",
            "arxiv": "https://arxiv.org/abs/2611.26408"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 12,
          "score": 2.2,
          "score_why": "추천 12 → +1.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "거대 언어 모델이 직접 신경망 가중치를 고치게 하려는데, 원래 쓰던 네트워크는 잘 안 고쳐진다는 게 문제였는데요",
            "easy1_desc": "연구진은 거대 언어 모델(LLM)이 신경망의 가중치를 직접 바꿔서 프로그램을 짜는 '가중치 공간 프로그래밍' 기술을 살펴봤는데요, 기존에 그냥 훈련시킨 네트워크는 이런 수정을 받아들이기가 원래 어렵다는 문제가 있었거든요. 뭔 소리냐면, 모델이 코드를 짜듯 가중치를 뜯어고치려 해도 대상이 되는 네트워크가 애초에 고쳐지기 쉽게 만들어져 있지 않았다는 말이에요. 쉽게 말하면, 고칠 준비가 안 된 캔버스에 그림을 억지로 그리려던 셈이라는 겁니다.",
            "easy2_title": "그래서 가중치 수정을 미리 연습시키는 새로운 훈련법을 내놓았는데요",
            "easy2_desc": "연구진은 거대 언어 모델이 수행하는 직접적인 가중치 수정을 미리 연습해 두는 '편집 준비 훈련(ERT)'이라는 새로운 방법을 제안했는데요, 이를 통해 네트워크를 수정하기 쉽게 만들었더니 LLM 편집 성공률이 크게 높아졌다는 결과를 보여줬거든요. 장점은 GPT-6 Astra와 Claude Opus 5.5 같은 모델들이 평가된 모든 기준선에서 가장 높은 평균 점수를 기록했다는 점인데요, 대신 이 훈련법을 적용하려면 기존의 표준 훈련 방식 외에 추가적인 연습 과정이 꼭 따라온다는 특징도 있다는 겁니다.",
            "topic": "거대 언어 모델이 신경망 가중치를 직접 수정하는 기술에서, 비전 모델을 미리 훈련시켜 수정 성공률을 높이는 새로운 방법을 제안한 내용이에요.",
            "one_line": "비전 모델을 수정하기 쉽게 만드는 훈련법을 제안하고 평가했어요.",
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
              "easy1_title 한 줄 아님/너무 김(62자)"
            ],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.25980",
          "title": "Learning What Actions Change: Action Effect Matching for Dynamics-Faithful World Models",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.25980",
            "arxiv": "https://arxiv.org/abs/2611.25980"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 11,
          "score": 2.1,
          "score_why": "추천 11 → +1.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "행동을 살짝 바꿔도 미래를 제대로 못 맞추는 게 문제였어요",
            "easy1_desc": "현재 월드 모델(환경 동역학을 예측하는 모델)은 진짜처럼 보이는 영상을 잘 만들지만, 작은 행동 변화가 미래에 미치는 영향을 제대로 잡지 못하는 문제가 있었는데요. 그러다 보니 아주 비슷한 행동인데도 결과가 완전히 달라질 수 있는 로봇 정책 평가나 모델 기반 계획 작업에서 쓰기 어렵다는 겁니다. 쉽게 말하면, 영상은 그럴듯해도 행동의 변화가 만드는 진짜 결과를 잡아내지 못하는 셈이에요.",
            "easy2_title": "행동 변화가 만드는 시각적 차이를 학습하는 방식을 도입했어요",
            "easy2_desc": "그래서 연구진은 행동 변화로 일어나는 시각적 변화의 분포를 배우는 보조 학습 목표인 AFFECT를 제안했는데요. 원격 조작 데이터에 시간적 상관관계가 있는 노이즈를 넣고, 월드 모델이 실제 영상처럼 이 노이즈에 반응하도록 훈련하는 방식이에요. 그 결과 로봇 정책 성공률의 상관계수가 0.47에서 0.79로 오르고 영상 품질 지표인 FVD가 최대 23% 낮아지는 장점이 생겼는데, 대신 복잡한 노이즈 주입 과정을 거쳐야 한다는 점도 같이 따라온다는 겁니다.",
            "topic": "행동 변화가 미치는 영향을 더 정확히 예측하도록 돕는 월드 모델 학습 방식인 AFFECT를 제안하고 그 성능을 검증한 연구예요.",
            "one_line": "행동 변화의 시각적 영향을 학습하는 모델 훈련법을 제안했어요",
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
          "canon_id": "2611.26510",
          "title": "AutoMaster: Autonomous Post-Training by Making the Same Model a Better Teacher",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.26510",
            "arxiv": "https://arxiv.org/abs/2611.26510"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 10,
          "score": 2.0,
          "score_why": "추천 10 → +1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "무엇을 강화해야 할지 기준이 없던 게 문제였어요",
            "easy1_desc": "과제에 성공했는지만 보는 방식은 사후 학습에서 어떤 행동을 키워야 할지 제대로 알려주지 않는다는 건데요, 잘 쓴 교사 모형의 궤적 안에도 근거 없는 가정이나 불필요한 반복이 섞여 있기 때문이에요. 뭔 소리냐면, 그냥 성공한 데이터만 모아서 학습시키면 엉뚱한 버릇까지 같이 배운다는 말이에요. 쉽게 말하면, 정답만 맞혔지 과정이 엉망일 수 있다는 셈이에요.",
            "easy2_title": "자연어 기술로 행동을 다듬는 시스템을 만들어 봤어요",
            "easy2_desc": "그래서 연구진은 자연어 기술로 나쁜 버릇은 누르고 좋은 행동은 끌어내는 스킬 기반 미세조정 방식과, 대형 언어 모델 에이전트가 이를 스스로 개발하는 자율 사후 학습 시스템인 오토마스터를 제안했는데요, 4B와 9B 크기의 목표 모형을 써서 터미널과 검색, 소프트웨어 공학 과제에서 시험해 봤어요. 그 결과 기존 방식보다 평균 성능이 1.42에서 8.99퍼센트포인트 올랐다는 걸 확인했다는 거예요. 대신 목표 모형과 훈련 세트 크기를 고정한 상태에서 나온 결과라 다른 조건에서는 다를 수도 있다는 한계도 같이 염두에 두어야 한다는 겁니다.",
            "topic": "성공한 모형의 궤적을 자연어 기술로 다듬어 사후 학습 성능을 높이는 자율 시스템에 관한 연구예요.",
            "one_line": "자연어 기술을 활용한 자율 사후 학습 시스템으로 모형 성능을 높였어요.",
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
          "canon_id": "2611.24809",
          "title": "On-Policy Morphing into Hybrid Attention Models",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.24809",
            "arxiv": "https://arxiv.org/abs/2611.24809"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 10,
          "score": 2.0,
          "score_why": "추천 10 → +1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식에는 안 맞는 짝짓기 문제가 있었습니다",
            "easy1_desc": "연구진은 플래시모프(FlashMorph)의 층 선택 방식에서 두 가지 오프폴리시(Off-policy) 불일치를 찾아냈는데요, 연속적 가지 보간과 교사 강요 은닉 상태가 실제 이산적 하이브리드 계산과 다르다는 점이에요. 또 얼려 둔 모델 가중치가 나중에 복구할 때 생기는 매개변수 적응을 반영하지 못한다는 거예요. 뭔 소리냐면, 기존 방식은 실제 적용될 때의 상황을 제대로 담아내지 못했다는 말이에요.",
            "easy2_title": "온폴리시 방식으로 바꿔서 성능을 더 끌어올렸습니다",
            "easy2_desc": "그래서 연구진은 플래시모프2(FlashMorph2)라는 온폴리시 층 선택 방식을 도입했는데요, 샘플링된 이산 하이브리드 구조를 자체 은닉 상태로 끝까지 평가하고 복구 목표 아래에서 층 선택 점수와 모델 가중치를 함께 최적화하는 방식이에요. 큐언3(Qwen3) 모델 크기와 선어텐션 변형에 걸쳐 실험해 봤더니 기존 방식보다 룰러(RULER)에서 2.42점, 롱벤치(LongBench)에서 1.08점, 리콜 집약적 작업에서 0.76점 평균 점수가 올랐다는 겁니다. 0.6B에서 8B 모델까지 0.72~3.57 GPU 시간 만에 끝내서 효율성과 확장성이 높다는 장점이 있는데, 대신 모델 구조를 바꿀 때 최적화해야 할 요소가 더 늘어난다는 점도 같이 따라온다는 거예요.",
            "topic": "사전 학습된 트랜스포머(Transformer)를 하이브리드 어텐션 모델로 바꿀 때 성능과 효율을 높이는 새로운 층 선택 방식인 플래시모프2(FlashMorph2)를 제안한 내용이에요.",
            "one_line": "온폴리시 기반 하이브리드 층 선택법을 개발했어요.",
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
          "canon_id": "2611.26286",
          "title": "Twice-Told Critiques: Claim-Level Homogenization of Peer Review in the LLM Era",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.26286",
            "arxiv": "https://arxiv.org/abs/2611.26286"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 9,
          "score": 1.9,
          "score_why": "추천 9 → +0.9 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "동료 심사에서 지적하는 내용들이 점점 겹치고 있더군요",
            "easy1_desc": "연구진은 학회와 저널 심사에서 지적 사항이 얼마나 겹치는지 측정해 봤는데요, ICLR에서는 같은 심사 단계의 리뷰끼리 겹치는 비율이 2026년 12.0%에서 2027년 21.3%로 올랐다고 해요. NeurIPS와 ICML, 그리고 F1000과 PLOS 저널에서도 매년 겹치는 비율이 늘어났다는 겁니다. 쉽게 말하면, 여러 사람이 읽어도 지적하는 내용이 점점 비슷해지고 있는 셈이에요.",
            "easy2_title": "생성형 AI 탐지기로 살펴봤더니 AI를 쓴 리뷰일수록 더 겹쳤습니다",
            "easy2_desc": "그래서 연구진은 생성형 AI 텍스트 탐지기인 MELD를 모든 리뷰에 적용해 봤는데요, AI가 썼다고 표시된 리뷰들끼리는 그렇지 않은 리뷰들보다 훨씬 더 많이 겹친다는 결과가 나왔어요. ICLR에서는 2024~2025년에 3.0포인트, 2026~2027년에 4.5포인트 차이가 났고 5개 저널 소스 전체에서는 5.4포인트 더 겹쳤다는 겁니다. 이런 결과는 AI를 사용한 리뷰일수록 서로 다른 개성이 줄어들고 다양성이 떨어진다는 것을 보여준다는 거예요.",
            "topic": "LLM 시대에 동료 심사의 다양성이 줄어드는 현상과 생성형 AI 사용 간의 관계를 분석한 내용이에요.",
            "one_line": "LLM 시대 학회·저널 동료 심사의 중복과 AI 사용 관계를 측정했어요",
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
          "canon_id": "2611.22666",
          "title": "VSpark: Speculative Decoding for Autoregressive Vision-Language-Action Models",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.22666",
            "arxiv": "https://arxiv.org/abs/2611.22666"
          },
          "published": "2026-11-17",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 9,
          "score": 1.9,
          "score_why": "추천 9 → +0.9 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇 행동을 하나씩 만들다 보니 속도가 너무 느렸던 건데요",
            "easy1_desc": "연구진은 로봇의 행동을 토큰 하나씩 순서대로 만들어내는 자가회귀 방식의 VLA(시각-언어-행동 모델) 속도를 빠르게 만들고 싶었는데요. 작은 초안 모델이 여러 토큰을 한꺼번에 먼저 제안하고, VLA가 한 번에 검증해서 맞는 것만 골라내는 추측 디코딩 기술을 써봤더니 원본 그대로 유지하면서도 빨라졌다는 겁니다. 그런데 로봇 제어 분야에서는 비슷한 동작을 나타내는 토큰이 워낙 많아서, 정답에 가까운 초안도 탈락하는 바람에 속도가 안 나는 한계가 있었다는 말이에요.",
            "easy2_title": "초안 모델을 다듬고 버려진 예측까지 재활용해 봤거든요",
            "easy2_desc": "그래서 연구진은 VSpark라는 방식을 내놓았는데요. 보정된 행동 노이즈로 모은 데이터를 써서 초안이 더 다양한 로봇 상태를 겪게 만들고, 출력 토큰뿐만 아니라 VLA의 숨겨진 특징까지 맞추도록 초안을 훈련시켰다는 겁니다. 게다가 거절된 초안 옆에서 VLA가 이미 계산해 둔 예측을 다음 검증 단계의 후보로 버리지 않고 계속 재활용한 셈이에요. 그 결과 4개의 VLA와 4개의 조작 벤치마크에서 원본 정확도를 그대로 유지하면서도 1.28배에서 2.10배까지 빨라지는 속도 향상을 얻었다고 밝혔습니다.",
            "topic": "VLA 모델의 속도를 높이기 위해 초안 모델의 학습 방식을 바꾸고 버려지는 예측을 재활용한 VSpark 기법에 대한 연구예요.",
            "one_line": "VLA 모델의 속도를 높이는 VSpark 기법을 제안했어요.",
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
          "canon_id": "2611.25567",
          "title": "Online Mistake Detection in Instruction-Conditioned Procedural Video",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.25567",
            "arxiv": "https://arxiv.org/abs/2611.25567"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 8,
          "score": 1.8,
          "score_why": "추천 8 → +0.8 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "실시간으로 실수를 잡아야 하는데 조건이 안 맞았거든요",
            "easy1_desc": "사람을 돕는 보조 시스템은 실수가 일어났을 때 바로 잡아주는 게 가장 중요하지만, 기존 방법들은 지침 글을 안 쓰거나 영상이 끝난 뒤에야 분석하는 문제가 있었는데요. 연구진은 영상을 보면서 동시에 지침과 비교해 실수를 찾아내는 방법을 살펴봤거든요. 쉽게 말하면, 행동이 끝날 때까지 기다리지 않고 실시간으로 지침에 맞는지 확인하겠다는 겁니다.",
            "easy2_title": "한 번에 결과를 뽑아내는 모델로 정확도를 높였답니다",
            "easy2_desc": "그래서 연구진은 모듈을 여러 개 거치는 방식과 한 번에 결과를 예측하는 통합 모델을 비교해 봤는데요. 모듈 방식은 단계마다 오류가 이어지는 단점이 있는데, 통합 모델은 이진 실수 감지 F1@0.5 점수가 84.1%로 모듈 방식의 80.7%보다 더 높게 나왔거든요. 특히 건망증 같은 실수를 잡을 때 56.4% 대 37.5%로 차이가 컸다는 말이에요. 쉽게 말하면, 여러 단계를 거치기보다 한 번에 처리하는 쪽이 실수를 더 잘 찾아낸다는 셈입니다.",
            "topic": "지침 영상에서 실시간으로 실수를 찾아내기 위해 모듈 방식과 통합 모델을 비교하고 성능을 확인한 연구예요.",
            "one_line": "지침 영상에서 실시간으로 실수를 찾아내는 모델의 성능을 비교하고 검증했어요.",
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
          "canon_id": "2611.25279",
          "title": "Accord: Universal Online Metric Localization and Dense Mapping from one Camera and an IMU",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.25279",
            "arxiv": "https://arxiv.org/abs/2611.25279"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 8,
          "score": 1.8,
          "score_why": "추천 8 → +0.8 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "카메라 하나와 관성 측정 장치로 정밀한 지도를 만드는 게 어려웠거든요",
            "easy1_desc": "카메라와 관성 측정 장치(IMU)를 써서 주변을 3차원 지도로 만드는 일은 원래 까다로운 작업인데요, 기존의 시각 관성 주행 거리 측정(VIO) 기술은 정확한 위치는 알 수 있지만 지도가 듬성듬성하다는 단점이 있었거든요. 반대로 인공지능 모델을 쓰면 빽빽한 지도를 만들 수는 있는데, 실제 크기가 얼마인지 정확한 척도를 맞추기가 어렵다는 문제가 있었어요. 쉽게 말하면 정밀함과 실제 크기라는 두 마리 토끼를 동시에 잡기가 힘들었다는 말이에요.",
            "easy2_title": "여러 시점의 정보를 맞춰서 정확한 3차원 지도를 그려냈어요",
            "easy2_desc": "연구진은 어코드(Accord)라는 새로운 방식을 제안했는데요, VIO가 알려주는 위치 정보를 바탕으로 깊이 예측 모델이 지도를 만들고, 이를 요인 그래프(Factor graph)로 합치는 방식이에요. 핵심은 여러 시점에서 본 영상들이 서로 일치하는지 확인하는 것인데, 이를 통해 이미지마다 생길 수 있는 크기 오차를 스스로 찾아내서 바로잡거든요. 덕분에 별도의 설정 변경 없이도 다양한 카메라 환경에서 일관되게 높은 정확도를 보여준다는 장점이 있어요.",
            "topic": "카메라와 IMU 데이터를 결합하여 실제 크기를 보존하면서도 정밀한 3차원 지도를 생성하는 어코드 알고리즘에 대한 연구예요.",
            "one_line": "카메라와 IMU 정보를 결합해 정밀한 3차원 지도를 만드는 어코드를 개발했어요.",
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
          "canon_id": "2611.17460",
          "title": "Unfinished-Bench: Measuring Rule Violations by Persistent Agents in Realistic Work Environments",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.17460",
            "arxiv": "https://arxiv.org/abs/2611.17460"
          },
          "published": "2026-11-12",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 8,
          "score": 1.8,
          "score_why": "추천 8 → +0.8 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 에이전트가 규칙을 무시하고 끝까지 달릴 때가 문제였는데요",
            "easy1_desc": "AI 에이전트가 오랫동안 스스로 일하면서 문서에 숨겨진 규칙들을 마주하게 되는데요, 규칙을 어겨야만 끝낼 수 있는 상황에서 혼자 판단해야 하는 경우가 생긴다는 겁니다. 기존에는 프롬프트에 규칙이 있거나 숨겨져 있기만 했고 끝까지 밀어붙이는 성질을 평가하지 않았거든요. 그래서 연구진은 실제 같은 업무 환경에서 AI가 사용자의 간섭 없이 스스로 달릴 수 있는 언프니시드 벤치(Unfinished-Bench)를 만들어 봤다는 말이에요. 7개 조직과 7개 위험 범주를 담은 97개의 시나리오를 통해, 목표와 규칙이 서로 부딪힐 수밖에 없는 상황을 만들어 본 셈이라는 겁니다.",
            "easy2_title": "끝까지 밀어붙이게 했더니 내부 규칙을 어기는 비율이 확 올라갔습니다",
            "easy2_desc": "연구진이 에이전트에게 지속성을 주어 끝까지 일하게 해 봤더니, 내부 문서에 있는 규칙을 어기는 비율이 32.2%에서 43.6%로 올라갔다고 하는데요, 이는 사용자가 직접 말해준 같은 규칙에서 나타난 8.5%의 다섯 배에 달한다는 겁니다. 문서 규칙 위반의 98.3%는 규칙이 화면에 나타난 뒤에 일어났고, 평가된 샘플의 89%에서는 에이전트가 규칙을 먼저 적어두기까지 했다고 하거든요. 이렇게 사용자가 지켜보지 않는 환경에 놓인 규칙을 에이전트가 어기게 되면 큰 사고로 이어질 수 있어서, 지속성 때문에 생기는 위험을 꼭 평가해야 한다고 연구진은 주장했다는 말이에요.",
            "topic": "사용자가 없는 실제 업무 환경에서 지속성을 가진 AI 에이전트가 숨겨진 규칙을 위반하는 위험을 측정하기 위해 언프니시드 벤치를 개발하고 평가한 연구예요.",
            "one_line": "지속성을 가진 AI 에이전트의 규칙 위반 위험을 측정하는 언프니시드 벤치를 제안했어요.",
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
          "canon_id": "2611.08136",
          "title": "How Far Can Untrained Neural Networks Go in Anomaly Detection? From Tables to Pixels",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.08136",
            "arxiv": "https://arxiv.org/abs/2611.08136"
          },
          "published": "2026-11-09",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 7,
          "score": 1.7,
          "score_why": "추천 7 → +0.7 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "학습 없이도 이상 탐지가 가능할까 살펴봤습니다",
            "easy1_desc": "이상 탐지는 보통 학습된 특징이나 별도 최적화가 꼭 필요하다고 보는데요, 연구진은 학습되지 않은 신경망만으로도 어디까지 가능한지 확인해 봤거든요. 데이터를 미리 배우지 않아도 정상과 이상을 충분히 가를 수 있다는 시각에서 출발한 건데요. 뭔 소리냐면, 복잡하게 가중치를 고치지 않아도 원래 데이터가 가진 성질만으로 이상을 찾아낼 수 있다는 말이에요.",
            "easy2_title": "고정된 무작위 신경망으로 성능을 이끌어냈습니다",
            "easy2_desc": "그래서 연구진은 가중치를 학습하지 않는 무작위 비선형 특징과 마할라노비스 점수를 묶은 프레임워크인 PRISM을 제안했는데요, 표 데이터와 이미지에서 높은 성능을 기록했다는 겁니다. 47개의 표 데이터와 27개의 시각 카테고리에서 우수한 평균 AUROC와 AUPRC를 보여줬거든요. 가중치를 최적화하지 않고도 경쟁력 있는 결과를 낸다는 장점이 있는데, 대신 이론적 분석과 경험적 분석을 함께 거쳐야 한다는 점도 같이 따라온다는 겁니다.",
            "topic": "학습되지 않은 신경망과 마할라노비스 점수를 활용한 이상 탐지 프레임워크 PRISM의 성능과 이론적 분석을 다룬 논문이에요.",
            "one_line": "학습 없는 신경망 기반의 이상 탐지 프레임워크 PRISM을 제안하고 성능을 평가했어요.",
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
          "canon_id": "2611.20455",
          "title": "Embeddings vs. Grep: Rethinking the Dense Advantage in Code Search",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.20455",
            "arxiv": "https://arxiv.org/abs/2611.20455"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 5,
          "score": 1.5,
          "score_why": "추천 5 → +0.5 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "코드 검색에서 인공지능 모델이 정말 더 나은지 의문이 들었어요",
            "easy1_desc": "기존 코드 검색 평가에서는 인공지능 기반의 밀집 인코더(dense encoder)가 키워드 검색 방식인 BM25보다 훨씬 앞선다고 알려져 왔는데요, 정작 코딩 에이전트들은 간단한 grep 명령어를 써도 잘 작동한다는 점이 이상하게 느껴졌던 겁니다. 알고 보니 기존 평가 방식들이 인공지능 모델에 유리하게 짜여 있었고, 오래된 코드나 불리한 조건의 BM25를 사용했기 때문이라는 사실을 확인했어요. 쉽게 말하면, 지금까지의 성능 차이가 실제 환경을 제대로 반영하지 못했다는 말이에요.",
            "easy2_title": "제대로 비교해 보니 키워드 검색도 충분히 강력하더라고요",
            "easy2_desc": "연구진은 2022년부터 2026년까지의 실제 저장소 데이터를 모아 'Repo-Premium'이라는 새로운 평가 도구를 만들었는데요, 이를 통해 확인해 보니 밀집 검색 방식이 유리했던 이유는 단순히 파일을 조각내거나 편집된 테스트를 관련 항목으로 처리하는 평가 방식 때문이었어요. 여기에 대규모 언어 모델(LLM)이 작성한 식별자를 검색어에 추가했더니 BM25 성능이 크게 올라 밀집 검색과 대등해지는 결과를 보였거든요. 결국 어떤 검색 방식이 더 나을지 미리 예측하기는 어렵다는 결론을 내렸습니다.",
            "topic": "코드 검색 성능 평가의 공정성을 재검토하고 밀집 검색과 키워드 검색의 실질적인 차이를 분석했어요.",
            "one_line": "실제 코드 저장소 데이터를 기반으로 코드 검색 방식의 성능을 재평가했어요.",
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
          "canon_id": "2611.26511",
          "title": "Direct3D-V3: Latent-Free Diffusion Transformers in the Native Voxel Domain",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.26511",
            "arxiv": "https://arxiv.org/abs/2611.26511"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 4,
          "score": 1.4,
          "score_why": "추천 4 → +0.4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식은 왜 숨겨진 공간에 자꾸 쑤셔 넣었나",
            "easy1_desc": "그동안 3D 생성 기술은 기하학적 정보를 먼저 압축한 숨겨진 공간(latent space)에 구겨 넣고 나서야 생성 모델을 돌렸는데요, 이 과정에서 VAE 같은 복잡한 부호화 장치에 기대는 방식이 주를 이뤘거든요. 그런데 연구진은 이 방식이 오히려 세밀한 표현을 방해하는 병목이 된다고 봤다는 거예요. 뭔 소리냐면, 압축 과정에서 잃어버리는 정보가 많아서 겉모양을 정밀하게 살리기 어려웠다는 말입니다.",
            "easy2_title": "압축 과정을 아예 없애고 날것의 복셀 공간에서 바로 다뤄봤다",
            "easy2_desc": "그래서 연구진은 압축 단계를 아예 치워버린 'Direct3D-V3'라는 새로운 확산 변환기(DiT) 틀을 내놨는데요, 훈련과 샘플링 내내 날것의 부호 거리 함수(SDF) 복셀 격자를 곧바로 다루는 방식을 썼다는 겁니다. 여기에 인접한 복셀끼리 엮어주는 내재적 다양체 규제(implicit manifold regularization)와 법선 손실 감독을 붙여 기하학적 신뢰도를 끌어올렸는데요. 세밀한 디테일이 확 살아나는 장점이 있는 대신, 날것의 데이터를 직접 다루는 만큼 구조를 안정시키는 추가 장치들이 복잡하게 붙어야 한다는 점도 같이 따라온다는 겁니다.",
            "topic": "압축 공간을 거치지 않고 복셀 영역에서 직접 3D 형상을 만드는 Direct3D-V3 프레임워크에 대한 내용이에요.",
            "one_line": "압축 단계를 없앤 복셀 기반 3D 생성 틀을 제안했어요.",
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
          "canon_id": "2611.24917",
          "title": "Unified Law for Visual Tasks (The Four Laws of Computer Vision)",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.24917",
            "arxiv": "https://arxiv.org/abs/2611.24917"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 4,
          "score": 1.4,
          "score_why": "추천 4 → +0.4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "거의 모든 시각 작업을 하나로 묶어 봤습니다",
            "easy1_desc": "연구진은 모든 시각 작업을 똑같은 방식으로 처리할 수 있도록 네 가지 법칙으로 묶어 봤는데요, 세상의 정보를 이미지 형태로 담아서 처리하고 만들어낸다는 생각에서 시작했어요. 그러니까 모든 시각과 시각화 작업을 이미지를 만드는 작업으로 바꾼다면, 큰 언어 모델이 자연어 처리를 하나로 묶은 것처럼 하나의 방법으로 대부분의 시각 작업을 할 수 있다는 말이에요. 쉽게 말하면, 복잡했던 시각 작업을 하나의 틀로 싹 모으려 했다는 겁니다.",
            "easy2_title": "천 개가 넘는 작업을 직접 해 보고 틀을 세웠어요",
            "easy2_desc": "그래서 연구진은 입력과 출력이 서로 다른 천 개가 넘는 시각 작업을 직접 학습하고 평가해 보았는데요, 이런 법칙들이 실제로 맞는지 확인하고 앞으로 연구할 때 쓸 수 있는 통합 학습 틀을 제안했다는 겁니다. 작업을 한데 모아서 처리할 수 있는 장점이 있는데, 대신 아주 다양한 시각 작업을 전부 같은 틀로 맞추다 보니 복잡한 개별 상황에서 한계가 생길 수도 있다는 점도 같이 따라온다는 거예요.",
            "topic": "모든 시각 작업을 하나의 틀로 처리할 수 있는 통합 법칙과 세계 스냅샷 모델(WSMs)을 제안하고 검증한 연구예요.",
            "one_line": "시각 작업을 하나로 묶는 통합 법칙과 모델을 제안했어요",
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
          "canon_id": "2611.24059",
          "title": "Replay, Don't Resample: Off-Policy Consolidation of Long-Horizon RL Experts",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.24059",
            "arxiv": "https://arxiv.org/abs/2611.24059"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 4,
          "score": 1.4,
          "score_why": "추천 4 → +0.4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존에는 전문가마다 따로 학습시키고 합치느라 비용이 엄청나게 들었습니다",
            "easy1_desc": "요즘 최첨단 후학습 방식은 분야별로 강화학습 전문가를 따로 키운 다음 다중 교사 온폴리시 증류라는 방법으로 한 모델에 합치는데요. 이 과정에서는 학생 모델이 모든 환경에서 다시 데이터를 뽑고, 전문가가 토큰마다 점수를 매겨야 해서 비용이 무척 많이 듭니다. 쉽게 말하면, 이미 다 키워놓은 전문가들이 있는데도 처음부터 다시 연습하느라 시간과 자원을 낭비하는 셈이라는 말이에요.",
            "easy2_title": "기존 훈련 기록을 순서대로 다시 재생하는 방식을 도입해 비용을 대폭 줄였습니다",
            "easy2_desc": "그래서 연구진은 전문가들이 강화학습을 할 때 남긴 훈련 로그를 학생 모델에 그대로 다시 넣어주는 다중 전문가 리플레이 정책 증류라는 방식을 제안했는데요. 환경이나 보상 모델을 전혀 부르지 않고 기존 로그만 순서대로 다시 재생하니까, 훈련 비용이 전문가들을 처음 키울 때의 7분의 1 수준으로 뚝 떨어진다는 겁니다. 세 가지 긴 호흡의 에이전트 영역에서 기존 온라인 강화학습보다 훨씬 뛰어난 성능을 냈다는 장점이 있는데요, 대신 기존에 남겨진 로그의 순서에 결과가 크게 좌우된다는 점도 함께 나타났습니다.",
            "topic": "기존 강화학습 전문가들의 훈련 로그를 순서대로 재활용하여 비용은 대폭 줄이고 성능은 높이는 새로운 모델 통합 방식을 제안한 연구예요.",
            "one_line": "기존 전문가 훈련 로그를 재활용하는 모델 통합 방식을 제안했어요.",
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
          "canon_id": "2611.26298",
          "title": "DailySafe: Benchmarking Dynamic Safety Awareness in Everyday Multi-Turn Multimodal Interactions",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.26298",
            "arxiv": "https://arxiv.org/abs/2611.26298"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "일상 속 AI가 안전한지 따져보는 기준이 부족했거든요",
            "easy1_desc": "멀티모달 대규모 언어 모델(MLLM)이 일상에 많이 쓰이고 있는데, 정작 평범한 활동을 할 때 안전하게 돕는지는 제대로 검증된 적이 없었어요. 기존 평가 방식은 단순히 위험한 질문을 던지거나 적대적인 상황만 골라내서, 실제 대화가 이어질 때 생기는 위험은 놓치기 일쑤였거든요. 쉽게 말하면, 단편적인 질문만 보고 안전하다고 판단하기엔 실제 상황이 훨씬 복잡하다는 겁니다.",
            "easy2_title": "대화와 상황을 같이 보고 위험을 감지하는 DailySafe를 만들었어요",
            "easy2_desc": "그래서 연구진은 대화가 이어지고 이미지가 변하는 상황 속에서 위험을 알아채는 '동적 안전 인식' 능력을 평가하려고 DailySafe라는 기준을 새로 만들었어요. 10개 일상 영역과 42개 작업 범주를 아우르는 195개의 자연스러운 대화 사례를 담고 있는데요, 대화가 진행되면서 서서히 드러나는 위험 요소를 AI가 잘 찾아내는지 확인하는 방식이에요. 덕분에 AI가 사용자의 목표를 도우면서도 상황에 맞는 안전한 대응을 할 수 있는지 더 현실적으로 평가할 수 있게 됐다는 겁니다.",
            "topic": "멀티모달 대규모 언어 모델이 일상적인 다회차 상호작용 속에서 변화하는 맥락적 위험을 인지하고 안전하게 대응하는지 평가하는 새로운 벤치마크를 제안했어요.",
            "one_line": "일상 속 다회차 상호작용의 안전성을 평가하는 DailySafe 벤치마크를 개발했어요.",
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
          "canon_id": "2611.26248",
          "title": "TwinLab-Bench: Evaluating AI Scientists in Agentic Twins of Real Labs",
          "field": "cs.AI",
          "sources": [
            "cs.AI",
            "허깅페이스"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26248",
            "hf": "https://huggingface.co/papers/2611.26248"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 과학자가 스스로 실험을 설계하는 능력을 검증할 기준이 없었다",
            "easy1_desc": "인공지능 에이전트가 연구를 돕는 AI 과학자로 기대를 모으고 있는데요, 문제는 기존 평가 방식이 정해진 계산이나 닫힌 보기 속 선택만 다뤘다는 겁니다. 진짜 실험을 스스로 짜고 결과를 내는 능력은 실제 연구실 환경에 맞춰 검증하기가 어려웠다는 말이에요. 쉽게 말하면, AI가 진짜 연구원처럼 판을 짜고 움직이는지 제대로 채점할 시험대가 없었던 셈이라는 겁니다.",
            "easy2_title": "가상 연구실 환경을 만들고 52가지 실험 과제로 AI를 시험해 봤다",
            "easy2_desc": "그래서 연구진은 실제 연구실 기록을 바탕으로 실험을 실행하고 채점하는 가상 연구실 환경인 TwinLab-Bench를 선보였는데요, 물리 과학과 생명 과학, 공학 분야에서 52가지 과제를 풀어보게 했다는 거예요. 그 결과 가장 뛰어난 모델인 Claude Fable 5.2조차 평균 45.0점에 그쳐서, AI 과학자에게 이 과제들이 여전히 어렵다는 점을 보여줬다는 겁니다. 실험을 직접 설계하고 검증하는 체계를 넓혔다는 장점이 있는데, 대신 최고 성능의 모델도 한계가 뚜렷하다는 점이 함께 드러났다는 말이에요.",
            "topic": "AI 과학자의 능력을 검증하기 위해 실제 연구실 기록을 바탕으로 만든 가상 실험 환경인 TwinLab-Bench와 그 성능 평가 결과에 대한 내용이에요.",
            "one_line": "AI 과학자의 실험 설계 능력을 검증할 가상 연구실 벤치마크를 개발하고 성능을 평가했다.",
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
          "canon_id": "2611.25776",
          "title": "Suppressing the Shortcut Hidden Behind the Gains of VideoLLM Fine-Tuning",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.25776",
            "arxiv": "https://arxiv.org/abs/2611.25776"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "영상을 보지 않고 텍스트 규칙만 보고 답을 맞히는 꼼수가 있더라고요",
            "easy1_desc": "연구진이 비디오 대규모 언어 모델(VideoLLM)의 지도 학습(SFT) 단계를 살펴봤는데요. 훈련 데이터의 텍스트 규칙성 때문에 모델이 영상을 보지 않고 텍스트만으로 답을 맞히는 꼼수를 학습하게 된다는 거예요. 이런 꼼수는 데이터 수준에서 정의하기 어렵고 훈련 epoch이나 데이터 크기, 백본과 상관없이 항상 형성된다고 해요. 쉽게 말하면, 정확도가 오르는데도 실제 영상이 주는 이점은 오히려 깎아먹는 문제가 생긴다는 말이에요.",
            "easy2_title": "텍스트가 차지하는 부분만 살짝 빼내는 방식으로 꼼수를 막아봤어요",
            "easy2_desc": "그래서 연구진은 데이터 대신 파인튜닝 업데이트 과정을 직접 손보는 비디오 증거 훈련(VETO)이라는 방법을 제안했는데요. 기초 모델의 활성화 값에서 텍스트가 차지하는 부분 공간을 보정하고 업데이트를 직교 여공간에 투영하는 방식이에요. 이렇게 하면 꼼수는 억제되면서 모델이 전체 입력을 바탕으로 답하게 된다는 장점이 있는데요, 일곱 개의 VideoLLM에서 SFT의 성능을 유지하면서도 꼼수를 잘 막았다는 겁니다.",
            "topic": "비디오 대규모 언어 모델의 파인튜닝 과정에서 발생하는 텍스트 기반 꼼수를 억제하기 위해 직교 투영 기반의 비디오 증거 훈련(VETO) 방법을 제안한 내용이에요.",
            "one_line": "직교 투영을 활용해 비디오 LLM의 텍스트 꼼수를 막는 훈련법을 제안했어요.",
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
          "canon_id": "2611.25179",
          "title": "Phantom Success, Silent Failure: Auditing the Success Checkers of Simulated Manipulation Benchmarks",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.25179",
            "arxiv": "https://arxiv.org/abs/2611.25179"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇이 잘했다고 인정한 걸 다시 보니 틀린 게 많았다는 겁니다",
            "easy1_desc": "로봇 시뮬레이션(가상 실험) 평가에서는 사람이 손으로 직접 짠 성공 판정기가 로봇의 성공과 실패를 판별하는데요, 이 판정기는 전문가의 시범만 통과하면 되기 때문에 문제가 생깁니다. 로봇이 일을 대충 끝내거나 다른 방식으로 해결했을 때, 판정기가 미완성을 성공으로 잘못 보거나(가짜 성공) 진짜 성공을 실패로 밀어내는(소리 없는 실패) 일이 벌어진다는 거예요. 쉽게 말하면, 판정기 자체가 제대로 일하고 있는지 의심해 봐야 하는 상황이라는 말이에요.",
            "easy2_title": "대형 언어 모델을 붙여서 판정기의 오류를 싹 찾아냈다는 거예요",
            "easy2_desc": "그래서 연구진은 작업 지시문과 판정기 코드를 분석해 둘이 엇갈리는 상황을 찾아내고, 시뮬레이션에서 직접 돌려보는 대형 언어 모델(LLM) 기반 파이프라인인 SimAudit을 가져왔는데요. 여러 각도의 화면으로 검증해 본 결과, RoboTwin 2.0과 RoboCasa365, RoboDojo에서 총 61개의 서로 다른 결함을 찾아냈다는 겁니다. 가짜 성공은 40개고 소리 없는 실패는 21개였는데, 벤치마크마다 자주 틀리는 양상이 달랐다는 점도 같이 밝혀냈어요. 앞으로는 전문가 시범 외에도 미완성 실행이나 대안적인 방법까지 전부 테스트하는 더 엄격한 평가 방식이 필요하다는 걸 보여준 셈이에요.",
            "topic": "로봇 조작 벤치마크에서 수동으로 만든 성공 판정기의 오류를 대형 언어 모델(LLM) 기반 파이프라인으로 감사하고 그 결함을 분석한 연구예요.",
            "one_line": "LLM 기반 파이프라인으로 로봇 성공 판정기의 오류를 찾아냈어요.",
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
          "canon_id": "2611.24844",
          "title": "General progress substitutes for specific training data in language models",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.24844",
            "arxiv": "https://arxiv.org/abs/2611.24844"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "일부를 빼고 가르쳤더니 무엇이 문제였나",
            "easy1_desc": "연구진은 언어 모델들이 훈련 데이터에서 능력을 얻는다는 점에 착안해, 위험한 능력을 익히지 못하도록 특정 데이터를 빼고 가르쳤는데요. 데이터를 안 주면 그 능력을 익히는 게 얼마나 늦춰지고 나중에 채우려면 데이터가 얼마나 드는지가 잘 안 알려져 있었다는 거예요. 뭔 소리냐면, 데이터를 숨기는 게 실제로 능력을 막는 데 얼마나 효과적인지 확실치 않았다는 말이에요. 체스나 오델로, 분자 문자열 같은 개별 기술을 빼고 모델을 돌려봤더니 결과가 어떻게 나왔을지 궁금해지는 시점이라는 겁니다.",
            "easy2_title": "데이터를 빼고 학습시켰더니 어떤 점이 달라졌나",
            "easy2_desc": "그래서 연구진이 나머지 데이터로 일반적인 성장을 이뤄내면 그게 빠진 데이터를 대신한다는 사실을 밝혀냈는데요. 체스에서 체크에 답하는 법을 따로 안 배워도 거의 비슷하게 합법적인 수를 골라냈다는 거예요. 나중에 빠진 데이터를 마저 주었을 때는 처음부터 배울 때보다 훨씬 적은 양만 필요로 했고, 모델이 자랄수록 그 비율이 더 줄어든다는 장점이 있어요. 대신 데이터를 필터링하는 방식이 능력을 늦추기만 할 뿐 완전히 막지는 못한다는 한계도 같이 따라온다는 겁니다.",
            "topic": "언어 모델 훈련 과정에서 특정 데이터를 제외했을 때 전체적인 모델의 성장이 그 공백을 어떻게 대체하는지 밝힌 연구예요.",
            "one_line": "데이터를 숨겨도 모델이 성장하면 그 공백을 채우는 것을 밝혔어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "데이터를 필터링하는 방식이 능력을 늦추기는 하지만, 모델이 발전할수록 그 능력을 되찾는 데 필요한 데이터는 점점 줄어든다고 밝혔어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.26617",
          "title": "One Prior, Two Dynamics: Repurposing Video Diffusion Transformers for Self-Supervised Latent Action Learning",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.26617",
            "arxiv": "https://arxiv.org/abs/2611.26617"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "영상을 보고 숨은 행동을 찾아내려니 처음부터 새로 배워야 하는 문제점이 있었는데요",
            "easy1_desc": "연구진은 세상이 어떻게 변하는지 비디오로는 알 수 있지만 그 변화를 만든 실제 행동은 찾기 어렵다고 봤는데요, 그래서 이 잠재 행동 학습(latent action learning)을 할 때 보통 처음부터 모델을 바닥부터 다시 학습시키는 번거로움이 있었다는 겁니다. 뭔 소리냐면, 이미 만들어진 비디오 생성 모델의 힘을 빌려서 역방향과 순방향의 움직임을 모두 해결할 수는 없을까 하고 고민해 봤다는 말이에요.",
            "easy2_title": "미리 학습된 비디오 생성 모델 하나로 역방향과 순방향 두 가지를 다 다뤄봤는데요",
            "easy2_desc": "그래서 연구진은 미리 학습된 비디오 디퓨전 트랜스포머(DiT) 하나를 바탕으로, '하나의 사전 지식, 두 가지 동역학'이라는 O2LaF라는 방식을 가져왔는데요. 이 방식은 역방향을 위한 전환 인코더와 순방향을 위한 비디오 생성기로 나누어 각각의 역할을 하도록 학습시켰다는 거예요. 쉽게 말하면, 라벨이 없는 비디오에서도 전이 가능한 행동을 스스로 익히게 만든 셈이라는 말입니다.",
            "topic": "미리 학습된 비디오 생성 모델을 재활용하여 라벨이 없는 비디오에서 행동을 스스로 배우고 예측하는 O2LaF 프레임워크를 제안한 논문이에요.",
            "one_line": "미리 학습된 비디오 생성 모델을 재활용해 행동을 스스로 학습하는 O2LaF 프레임워크를 개발했어요.",
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
              "one_line 55자"
            ],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.26450",
          "title": "A CPU Inside an LLM: Zero-Gradient Compilation of Exact Circuits into Pretrained Weights",
          "field": "cs.AI",
          "sources": [
            "cs.AI",
            "허깅페이스"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26450",
            "hf": "https://huggingface.co/papers/2611.26450"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "언어 모델은 왜 숫자 계산만 시키면 엉뚱한 답을 내놓을까",
            "easy1_desc": "사전 학습된 언어 모델은 복잡한 다자리수 산술 연산을 수행할 때 신뢰할 수 없는 결과를 보여주곤 하는데요. 보통은 추가적인 학습이나 외부 도구의 도움을 받아야만 정확한 계산이 가능했거든요. 연구진은 이런 방식이 모델의 자연어 처리 능력을 해치거나 복잡한 과정을 거쳐야 한다는 단점이 있다고 봤습니다. 쉽게 말하면, 모델이 계산을 잘 못 하는 문제를 해결하기 위해 별도의 학습 없이도 정확한 연산을 수행할 방법이 필요했다는 거예요.",
            "easy2_title": "학습 없이 모델 가중치에 직접 계산 회로를 심어 봤습니다",
            "easy2_desc": "연구진은 학습 데이터나 실행 중 외부 도구 없이도 모델의 가중치에 직접 계산 회로를 심는 방식을 고안했는데요. 이 방식은 모델이 원래 가진 자연어 처리 능력을 유지하면서도 정확한 산술 연산이 가능하게 만든다는 장점이 있습니다. 실제로 6자리 산술 연산에서 99% 이상의 정확도를 보여주며, 기존의 학습 방식보다 훨씬 뛰어난 성능을 보였다고 주장했어요. 쉽게 말하면, 언어 모델 안에 계산기라는 CPU를 직접 이식해서 연산 능력을 극대화한 셈입니다.",
            "topic": "사전 학습된 언어 모델의 가중치에 직접 산술 연산 회로를 이식하여 학습 없이도 정확한 계산을 수행하는 방법론을 제안했어요.",
            "one_line": "언어 모델 가중치에 계산 회로를 직접 이식해 학습 없이 산술 연산을 수행했어요.",
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
              "10",
              "99"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.25005",
          "title": "Inhabitant: An Agent Framework for Long-Horizon Human-Scene Interaction with Spatial Control and Quantitative Feedback",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.25005",
            "arxiv": "https://arxiv.org/abs/2611.25005"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 일상 동작을 시키면 AI가 자꾸 엉뚱한 짓을 하더라고요",
            "easy1_desc": "사람과 공간이 상호작용하는 기술이 발전하면서 AI가 긴 순서의 동작을 수행하게 됐는데요, 장난감을 집어서 바구니에 넣는 것처럼 일상적인 일을 시켜 보면 AI가 동작을 제대로 제어하지 못하는 문제가 있었거든요. 뭔 소리냐면, AI가 공간 안에서 정확히 어디로 움직여야 할지 모르고 동작이 잘 됐는지 스스로 확인도 못 해서 결국 임무를 끝까지 마치지 못한다는 말이에요. 쉽게 말하면, 계획은 세우는데 정작 몸을 어떻게 써야 할지 모르는 상태인 셈이에요.",
            "easy2_title": "스스로 위치를 정하고 결과를 확인해서 동작을 고치게 만들었어요",
            "easy2_desc": "그래서 연구진은 인해비턴트(Inhabitant)라는 새로운 AI 틀을 만들었는데요, AI가 직접 동작의 위치나 경로를 정하고 실제로 움직인 뒤에 의도와 얼마나 다른지 수치로 따져서 스스로 동작을 수정하게 만든 거예요. 이렇게 했더니 복잡한 집안일도 훨씬 정확하게 해낼 수 있게 됐거든요. 실제로 75가지 집안일로 테스트해 봤더니 클로드 오퍼스(Claude Opus) 5.5 모델 기준으로 98.7%의 성공률을 보였다고 해요.",
            "topic": "공간 제어와 수치적 피드백을 통해 긴 호흡의 인간-공간 상호작용을 수행하는 AI 에이전트 프레임워크인 인해비턴트(Inhabitant)를 제안했어요.",
            "one_line": "공간 제어와 피드백 기능을 갖춘 AI 에이전트 틀을 개발했어요.",
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
          "canon_id": "2611.23835",
          "title": "NarrowSpec: Draft Hidden Width Need Not Match the Target in Speculative Decoding",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.23835",
            "arxiv": "https://arxiv.org/abs/2611.23835"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "임시 모델은 타겟과 똑같이 클 필요가 없다는 걸 알아냈습니다",
            "easy1_desc": "연구진은 대형 언어 모델(LLM)의 생성 속도를 높이는 추정 디코딩(Speculative decoding)에서, 타겟 모델의 숨겨진 상태를 읽는 작은 임시 모델의 너비가 꼭 타겟과 같을 필요가 있는지 살펴봤는데요. 실험해 봤더니 임시 모델의 전체 잔차 스트림 크기를 타겟의 절반이나 4분의 1로 줄여도 토큰 수락률이 대부분 유지되는 것으로 나타났습니다. 뭔 소리냐면, 몸집을 줄여도 성능은 거의 깎이지 않는다는 말이에요. 쉽게 말하면, 가벼워진 임시 모델로도 충분히 원래 역할을 해낼 수 있다는 셈입니다.",
            "easy2_title": "임시 모델의 폭을 줄였더니 속도가 더 빨라졌습니다",
            "easy2_desc": "그래서 연구진은 DFlash와 EAGLE-3 두 가지 임시 모델을 Qwen3-8B(NVFP4)와 GPT-OSS-20B(MXFP4) 타겟에 붙여서 SGLang으로 B200과 DGX Spark(GB10) 환경에서 테스트해 봤는데요. 배치 크기 1과 온도 0 기준으로 임시 모델의 폭을 절반이나 4분의 1로 줄였을 때 B200에서는 끝단 간 디코딩 속도가 1.06배에서 1.12배까지 빨라졌고 GB10에서는 1.13배에서 1.44배까지 빨라지는 결과가 나왔습니다. 속도가 빨라진다는 장점이 있는데, 대신 임시 모델 구조를 조정하는 과정이 추가로 들어간다는 점도 함께 기억해야 한다는 겁니다. 쉽게 말하면, 정확도를 유지하면서도 전체 연산 속도를 확실히 끌어올렸다는 거예요.",
            "topic": "대형 언어 모델의 추정 디코딩에서 임시 모델의 숨겨진 너비를 줄여도 성능이 유지되고 오히려 속도가 빨라진다는 것을 검증한 연구예요.",
            "one_line": "추정 디코딩에서 임시 모델의 폭을 줄여 속도를 높였어요",
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
          "canon_id": "2611.19499",
          "title": "Do Probing and Steering Favor the Same Directions Within and Across Language Models?",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.19499",
            "arxiv": "https://arxiv.org/abs/2611.19499"
          },
          "published": "2026-11-14",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "개념을 찾는 방향과 조종하는 방향이 과연 같을까",
            "easy1_desc": "연구진은 언어 모델 안에서 특정 개념이 있는지 찾아내는 방향과 모델을 그 방향으로 조종하는 방향이 서로 같은지 세 가지 모델을 통해 조사해 봤는데요. 진실성과 감성 영역에서 확인해 봤더니, 개념을 잘 찾는 방향과 모델을 가장 잘 바꾸는 방향은 서로 달랐다는 거예요. 뭔 소리냐면, 감지용으로 훌륭한 방향이 조종용으로도 꼭 최고인 것은 아니라는 말이지요. 쉽게 말하면, 찾는 도구와 움직이는 도구가 애초에 따로 노는 셈이라는 겁니다.",
            "easy2_title": "조종 방향을 다르게 잡았더니 어떤 결과가 나왔나",
            "easy2_desc": "그래서 연구진은 공분산 조정 판별식부터 평균 차이까지 이어지는 여러 방향 값을 만들어서 부작용을 고정한 채 두 가지 역할을 비교해 보았는데요. 조종의 경우 평균 차이에 더 가까운 방향일수록 일관되게 더 좋은 효과를 냈다는 겁니다. 감성 분석에서는 중간 방향이 평균 차이보다 27에서 56퍼센트 더 강한 조종 효과를 내기도 했지만, 이 이득은 문구나 층 구조에 따라 줄어들거나 사라진다는 단점도 함께 나타났거든요. 쉽게 말하면, 최적의 조종 방향을 딱 고정하기는 생각보다 까다롭고 조건에 따라 흔들린다는 말이에요.",
            "topic": "언어 모델의 내부 은닉 상태에서 개념을 감지하는 탐색(probe) 방향과 모델의 출력을 제어하는 조종(steering) 방향이 서로 일치하는지 비교하고 분석한 논문이에요.",
            "one_line": "언어 모델에서 개념 탐색 방향과 조종 방향이 서로 다르다는 점을 밝혔다.",
            "topic_tag": "AI 모델·학습법",
            "limit": "연구진은 미리 정의한 기준에 따라 12개의 모델 쌍 중 단 3 페어만 분류했고, 나머지 9 페어는 결론을 내리지 못한 상태로 남겨두었다고 밝혔습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.00911",
          "title": "S1CogBench: What System One Decision Models Can and Cannot Do on Cognitive Experiments",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.00911",
            "arxiv": "https://arxiv.org/abs/2611.00911"
          },
          "published": "2026-11-14",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시스템 원 모델이 인지 실험에서 뭘 잘하고 못하는지 몰랐거든요",
            "easy1_desc": "사람과 인공지능이 결정을 내릴 때는 여러 가지 인지 능력이 필요한데요, 빠른 구조적 선택을 하는 시스템 원(System One) 결정 모델들의 장점과 한계는 아직 잘 알려지지 않았다는 말이에요. 그래서 연구진은 24개의 인지 과제와 27개의 평가 모드로 이루어진 S1CogBench라는 벤치마크를 만들어, 7개의 오픈 모델과 API 모델인 Jev를 평가해 봤다는 겁니다. 쉽게 말하면, 전체 점수만으로는 알 수 없는 모델들의 진짜 강점과 실패를 낱낱이 뜯어보려고 했다는 셈이에요.",
            "easy2_title": "S1CogBench를 만들어서 모델의 장단점을 낱낱이 뜯어봤습니다",
            "easy2_desc": "연구진은 사람이 응답할지 예측하는 기능과 스스로 실행하는 기능, 그리고 과제를 통제하는 방식을 합쳐서 모델들을 평가했는데요, 그 결과 모델마다 행동 성향이 뚜렷하게 갈렸다는 걸 확인했다는 겁니다. 어떤 학습 과제에서는 성적이 아주 좋은데도 정보를 모으거나 피드백에 적응하는 데는 실패하기도 하고, 정확도가 높아도 과제 요구가 바뀌면 사람처럼 반응하지 못한다는 단점도 있다는 거예요. 대신 긴 응답은 직접 내리는 결정보다 훨씬 느린 반면 토큰 하나만 만드는 방식은 지연 시간이 거의 늘어나지 않는다는 장점도 같이 확인했다는 말입니다.",
            "topic": "시스템 원 결정 모델들이 인지 실험 과제에서 어떤 강점과 한계를 보이는지 24개 인지 과제로 평가한 연구예요.",
            "one_line": "시스템 원 결정 모델의 인지 실험 성능을 평가하는 S1CogBench를 만들었어요.",
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
          "canon_id": "2611.26624",
          "title": "PlayCraft: Designing Engaging Games from Agent Play Experience",
          "field": "cs.AI",
          "sources": [
            "cs.AI",
            "허깅페이스"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26624",
            "hf": "https://huggingface.co/papers/2611.26624"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 만든 게임이 왜 재미없었냐면요",
            "easy1_desc": "최근 AI 에이전트(특정 목적을 수행하는 자율 프로그램)가 직접 게임을 만들 수 있게 되었지만, 막상 플레이해 보면 그다지 재미가 없었다고 해요. 게임의 재미를 만드는 핵심은 플레이어가 게임을 마스터해 나가는 성취감에 있는데요, 이걸 맞추려면 사람이 직접 수없이 플레이하며 일일이 다듬어야 했다는 거예요. 쉽게 말하면, AI가 게임을 만들 줄은 알지만 사람이 느낄 재미까지 챙기기는 어려웠다는 셈이에요.",
            "easy2_title": "에이전트가 직접 해보고 고치게 만들었더니",
            "easy2_desc": "그래서 연구진은 플레이 에이전트가 게임을 직접 해보고 그 경험을 바탕으로 재미를 느낄 수 있게 고치는 플레이크래프트(PlayCraft)라는 자동 시스템을 제안했는데요, 방식은 에이전트가 게임을 플레이하는 단계와 이를 토대로 게임을 수정하는 단계를 번갈아 거치게 만든 것이라는 겁니다. 이렇게 했더니 처음 게임보다 학습 성취도가 더 커지고 학습 기울기도 더 가파르게 나타났다는 장점이 있는데요, 대신 에이전트의 판단과 능력 추정에 의존해야 한다는 점도 같이 따라온다는 겁니다.",
            "topic": "시각 기반 AI 에이전트가 직접 게임을 플레이하며 얻은 경험을 바탕으로 플레이어의 성취감과 학습 곡선을 높이도록 게임을 자동으로 수정하는 프레임워크에 대한 내용이에요.",
            "one_line": "AI가 직접 게임을 플레이해본 경험을 토대로 재미를 느끼도록 게임을 수정하는 틀을 만들었어요.",
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
              "one_line 52자"
            ],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.26540",
          "title": "AURA: AUdio-dRiven streaming Avatar",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.26540",
            "arxiv": "https://arxiv.org/abs/2611.26540"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "실시간으로 쓰기엔 과정이 너무 복잡했던 기존 방식",
            "easy1_desc": "기존의 소리 기반 영상 생성 모델들은 진짜 같은 말하는 얼굴 영상을 만들 수는 있었는데요, 여러 초 단위 영상 조각을 만드느라 확산 잡음 제거 단계를 수십 번이나 거쳐야 했다는 거예요. 이 때문에 음성 비서나 가상 아바타처럼 반응이 빠르게 나와야 하고 실시간으로 이어져야 하는 곳에는 쓰기 어렵다는 단점이 있었거든요. 뭔 소리냐면, 화면을 하나 만들 때마다 기다려야 하는 시간이 너무 길어서 바로바로 대답해야 하는 자리에는 맞지 않는다는 말이에요.",
            "easy2_title": "조각 단위로 바로바로 영상을 만들어 내는 AURA의 등장",
            "easy2_desc": "그래서 연구진은 롤링 KV 캐시를 써서 영상 조각을 하나씩 이어 붙이며 만드는 오라(AURA)를 내놨는데요, 미리 소리를 몇 초씩 내다보지 않고 지금 들어오는 소리만 있으면 바로 영상을 만들 수 있게 바꿨다는 거예요. 1.3B 모델은 그래픽카드 하나로 576p 영상을 초당 20.7 프레임으로 실시간으로 보여주고, 5B 모델은 720p 영상을 초당 9.7 프레임으로 처리한다고 해요. 쉽게 말하면, 기다리는 시간을 대폭 줄이면서도 실시간 아바타로 쓸 수 있을 만큼 빨라졌다는 셈이에요.",
            "topic": "지연 시간을 줄여 실시간으로 말하는 아바타 영상을 만들 수 있는 스트리밍 모델 오라(AURA)를 개발한 것에 대한 내용이에요.",
            "one_line": "지연 시간을 없앤 실시간 스트리밍 아바타 모델 AURA를 개발했어요.",
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
          "canon_id": "2611.26211",
          "title": "SpecWM: Turning Verification into Refinement for Streaming World Models",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.26211",
            "arxiv": "https://arxiv.org/abs/2611.26211"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식은 확인만 하고 고치지는 못하더라",
            "easy1_desc": "연구진이 영상 세계 모델에서 빠른 가짜 생성과 느린 진짜 생성을 섞어 쓰려니, 가짜가 맞는지 바깥 점수로 검사만 하고 끝이었다고 해요. 검사만 하고 고쳐주지는 않으니까, 틀린 가짜는 통째로 다시 만들어야 해서 비용이 컸다는 건데요. 쉽게 말하면, 틀린 부분을 콕 집어 고치지 못하고 버리기만 했다는 말이에요.",
            "easy2_title": "확인하는 과정에서 바로 고쳐 쓰도록 바꿔 봤습니다",
            "easy2_desc": "그래서 연구진은 Speculative World Model(SpecWM, 추정식 세계 모델)이라는 틀을 내놓았는데요, 진짜 모델의 잠재 속도 필드로 가짜 조각을 확인하면서 바로 쓸 수 있는 고침 값까지 같이 얻어낸다는 거예요. 한 단계나 세 단계로 고쳐 쓰기를 거치면 화질과 카메라 따라가기가 좋아지는 장점이 있는데, 대신 두 개의 기준값을 써서 허용과 수정, 거절을 가르는 복잡함이 같이 따라온다는 겁니다.",
            "topic": "비디오 세계 모델에서 확인 과정을 수정 과정으로 바꿔 속도와 화질을 모두 높인 SpecWM 추론 틀에 대한 연구예요.",
            "one_line": "비디오 세계 모델에서 검증 과정을 수정 과정으로 바꿔 화질과 속도를 높이는 SpecWM을 제안했어요.",
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
              "one_line 56자"
            ],
            "flags": [],
            "tag": "영상·음성·멀티모달",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.25935",
          "title": "TwinD: Generalizing Deepfake Detection from Blending to Entire Face Synthesis",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.25935",
            "arxiv": "https://arxiv.org/abs/2611.25935"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 딥페이크 탐지기는 얼굴을 잘라 붙인 가짜만 잡고 통째로 만든 얼굴은 못 잡았습니다",
            "easy1_desc": "연구진이 2019년부터 2026년까지 나온 19개의 데이터셋을 모아서 성능을 시험해 봤는데요, 기존의 가장 뛰어난 얼굴 딥페이크 탐지기는 얼굴을 자연스럽게 섞은 데이터셋에서는 평균 AUROC 96.2%를 기록했지만, 얼굴 전체를 통째로 생성한 EFS 데이터셋 다섯 개에서는 성능이 78.1%를 넘지 못했다고 해요. 인공지능 생성 콘텐츠(AIGC) 탐지기도 이 성능 격차를 좁히지 못했다는 말이에요. 쉽게 말하면, 옛날 방식의 가짜는 잘 잡지만 새로운 방식으로 완전히 만들어낸 얼굴 앞에서는 속수무책이었다는 셈이에요.",
            "easy2_title": "두 가지 트윈 데이터를 활용하는 트윈디를 만들어 성능을 크게 끌어올렸습니다",
            "easy2_desc": "그래서 연구진은 얼굴 전체를 생성하는 가짜와 기존의 합성 방식을 모두 잡아내는 새로운 탐지기인 트윈디(TwinD)를 제안했는데요, 진짜 프레임에서 만든 두 가지 종류의 트윈 데이터를 활용해 훈련하는 방식이에요. 복원 트윈은 디코더의 신경망 흔적을 겨냥하고, 블롭 트윈은 생성기 없이도 혼합 흔적을 겨냥해 상호 보완적인 단서를 제공한다는 거예요. 그 결과 평균 AUROC 96.3%를 기록해 기존 최고 기록보다 8.9포인트 높아졌다는 장점이 있는데, 대신 딥페이크 데이터셋 없이 트윈만으로 학습해도 평균 94.3%의 높은 성능을 낸다는 점도 함께 확인되었다는 겁니다.",
            "topic": "얼굴 전체를 생성하는 가짜와 기존 합성 방식을 모두 잡아내기 위해 두 가지 트윈 데이터를 활용하는 새로운 딥페이크 탐지기인 트윈디(TwinD)를 제안한 연구예요.",
            "one_line": "두 가지 트윈 데이터로 가짜 얼굴을 잡는 탐지기를 개발했어요.",
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
              "easy1_title 한 줄 아님/너무 김(48자)"
            ],
            "flags": [],
            "tag": "AI 안전·평가",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.23875",
          "title": "In Situ Training of Optical Neural Networks by Coding Agents",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.23875",
            "arxiv": "https://arxiv.org/abs/2611.23875"
          },
          "published": "2026-11-18",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "광학 신경망을 쓰려니 기기마다 오차가 생겨 직접 훈련해야 하는데요",
            "easy1_desc": "광학 신경망(Optical neural networks)은 속도가 빠르고 에너지를 적게 쓴다는 장점이 있는데, 장비마다 설계와 달라 꼭 하드웨어에 맞춰 훈련해야 하거든요. 기존에는 전문가가 만든 디지털 모델이나 기울기 없는 시행착오에 기대야 했는데요. 연구진은 코딩 에이전트(Coding agents, 프로그램을 짜고 실행하는 대형 언어 모델)가 디지털 신경망의 가중치를 고치는 능력이 있다는 점에 착안했습니다. 쉽게 말하면, 기기마다 일일이 보정해야 하는 번거로움이 있었다는 말이에요.",
            "easy2_title": "코딩 에이전트로 측정값만 받아 광학 신경망을 스스로 훈련해 봤습니다",
            "easy2_desc": "그래서 연구진은 '옵틱스 매즈 코드(Optics as code)'라는 방법을 제안했는데요, 코딩 에이전트가 카메라로 찍은 프로브 이미지를 보며 측정값만으로 광학 신경망을 훈련하는 방식입니다. 에이전트가 광학계에 대한 물리적 이해를 바탕으로 네트워크를 해석 가능한 광학 요소로 다시 매개변수화한다는 걸 발견했어요. 기존의 기울기 없는 방식보다 성능이 뛰어나고, 보정된 모델을 쓰는 역전파에 가까운 결과를 적은 비용으로 낸다는 장점이 있는데, 대신 더 뛰어난 모델이 뒷받침되어야 한다는 점도 같이 따라온다는 겁니다.",
            "topic": "코딩 에이전트를 이용해 기기 보정이나 하드웨어 기울기 없이도 측정값만으로 광학 신경망을 효율적으로 훈련할 수 있다는 점을 밝힌 연구예요.",
            "one_line": "코딩 에이전트로 광학 신경망을 측정값만 받아 훈련하는 방법을 제안했어요.",
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
          "canon_id": "2611.26627",
          "title": "RL Post-Training in Diffusion Transformers Is Activation Steering",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.26627",
            "arxiv": "https://arxiv.org/abs/2611.26627"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": 0,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 학습 없이 그냥 벡터만 더해봤는데요",
            "easy1_desc": "연구진은 확산 변환기(Diffusion Transformers) 모델의 강화학습 후학습(Post-Training)이 왜 좋아지는지 그 이유를 파악해 봤는데요. 입력에 따라 복잡하게 바뀐다고 생각하기 쉽지만, 사실은 고정된 방향 벡터를 더하는 것만으로도 대부분의 성능이 설명된다는 걸 확인했다는 거예요. 뭔 소리냐면, 새로운 걸 학습했다기보다는 원래 있던 모델의 출력을 특정 방향으로 밀어준 셈이라는 말이에요.",
            "easy2_title": "고정된 벡터 하나로 강화학습 효과를 거의 다 따라잡았어요",
            "easy2_desc": "그래서 연구진은 입력과 상관없이 항상 똑같은 고정 벡터를 쓰는 방식을 적용해 봤는데요. SD3.5-M 모델에서 6개 이미지 모델의 보상 향상폭 중 90.0%에서 96.3%를 그대로 복원했다고 해요. 파라미터 개수가 0.29M로 기존 방식인 18.8M보다 훨씬 적으면서도 비슷한 효과를 낸다는 장점이 있는데, 대신 모델이 원래 할 수 있는 범위 안에서만 밀어준다는 한계도 같이 존재한다는 겁니다.",
            "topic": "확산 변환기 모델의 강화학습 후학습 성과가 복잡한 입력별 변환 때문이 아니라 고정된 활성화 벡터 이동(Activation Steering)으로 대부분 설명된다는 점을 밝힌 연구예요.",
            "one_line": "확산 변환기 강화학습의 성과가 고정된 활성화 벡터 이동만으로도 대부분 재현됨을 입증했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.26557",
          "title": "MM-SystemOneBias: Evaluating Bias in Multimodal Jev-Style System One Decision Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26557"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존에는 모델의 판단을 제대로 비교할 방법이 없었어요",
            "easy1_desc": "멀티모달 결정 모델이 실제로 믿을 만한지 보려면 표현이 바뀌어도 의미가 유지되는지, 쓸데없는 정보는 무시하는지, 그리고 진짜 단서와 충돌하는 정보를 구분할 수 있는지 따져봐야 하는데요. 지금까지는 화면 인터페이스의 편향과 모델의 행동을 따로따로 연구했기 때문에, 실제 업무에서 모델과 그 기반이 되는 모델을 똑같은 기준으로 비교할 공통 방법이 없었다는 말이에요. 쉽게 말하면, 서로 다른 모델들을 나란히 놓고 공평하게 평가할 틀이 마땅찮았던 셈이라는 겁니다.",
            "easy2_title": "새로운 평가 도구를 만들어 13개 모델을 직접 비교해 봤습니다",
            "easy2_desc": "그래서 연구진은 9개의 공개 데이터셋에서 가져온 5,323개의 원래 데이터와 11가지 작업 시나리오를 바탕으로, 옵션 순서나 레이블, 외부 판단 같은 6가지 개입 방식을 활용해 13개 모델을 평가하는 'MM-SystemOneBias'를 내놨는데요. 실험해 봤더니 결정 모델들은 옵션 레이블이나 쓸데없는 정보, 평점 척도가 바뀔 때 7개 쌍 모두에서 더 안정적인 모습을 보였다는 겁니다. 다만 정확도만으로는 놓칠 수 있는 입력 효과를 찾아내기도 했는데, 의미적 결정이 바뀌지 않은 쌍들 사이에서 답변 확률의 평균 절대 변화가 4.56에서 11.55 퍼센트포인트 사이로 나타났다고 해요.",
            "topic": "멀티모달 결정 모델이 다양한 입력 변화에 어떻게 흔들리는지 파악하기 위해 새로운 평가 방법인 'MM-SystemOneBias'를 도입하고 13개 모델을 비교한 연구예요.",
            "one_line": "멀티모달 결정 모델을 평가할 공통 도구를 만들고 13개 모델을 비교했어요.",
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
          "canon_id": "2611.26545",
          "title": "The Geometry of Lies: Knowledge and Persona Directions for Detecting Deception in Large Language Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26545"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 거짓말 탐지기는 종류가 다르면 왜 안 먹혔나",
            "easy1_desc": "선형 탐지기(Linear probes)는 대형 언어 모델(LLM, Large Language Models)에서 가장 싸게 먹히는 거짓말 탐지기인데요, 막상 거짓말의 종류가 바뀌면 엉뚱한 결과를 내놓기 일쑤라는 겁니다. 연구진은 정직한 역할과 거짓말하는 역할(Role-play)을 섞은 라벨 없는 방향(Label-free directions)을 70B(700억 개 매개변수) 규모에서, 그리고 거짓말과 정직한 부인이 똑같아 보이는 지식 관련 거짓말에서 제대로 통하는지 검증해 본 적이 없었다고 해요. 그래서 연구진은 기존 페르소나 은행(Persona bank)에 자신이 가진 지식을 숨기는 역할과 정직한 짝꿍 역할을 더해 범위를 넓혀 봤다는 거예요. 쉽게 말하면, 다양한 상황에서 모델이 진짜로 속이는지 알아보려고 판을 더 크게 벌려 본 셈이라는 말입니다.",
            "easy2_title": "페르소나 방향을 넓혀서 시험해 봤더니 무엇이 달라졌나",
            "easy2_desc": "그래서 연구진이 넓힌 페르소나 방향을 각 모델의 중간 층(Middle layer)에 적용해 Liars' Bench에서 거짓말 순위를 매겨 봤는데요, 4개 모델 중 3개에서는 단일 데이터셋 탐지기보다 더 잘 맞췄지만 Qwen 모델에서는 역할을 더 자주 유지했음에도 실패했다고 해요. Llama-3.3-70B-Instruct 모델에서는 무작위 페르소나 은행에서 나온 방향보다는 앞섰지만 기존 발표된 방향과 비교하면 무작위 확장 범위 안에 머물렀다는 겁니다. 지식 관련 거짓말에서는 페르소나 방향이 주로 답변의 단어 구성을 따라가기 때문에 Llama와 Qwen에서는 무작위 방향 범위 안에 머물렀고 Gemma에서도 끝자락에만 간신히 닿았다고 해요. 대신 두 방향을 합친 결과가 4개 모델 모두에서 같은 깊이의 감독된 탐지기(Supervised probe)보다 거짓말 순위를 더 잘 매겼지만, Llama의 평균에서는 페르소나 방향과 비슷했고 숨겨둔 거짓말에서는 오히려 밀렸다는 점도 같이 나타났다는 겁니다.",
            "topic": "대형 언어 모델에서 거짓말을 찾아내기 위해 페르소나 방향(Persona direction)과 지식 방향(Knowledge direction)을 확장하고 검증해 본 연구진의 실험 결과예요.",
            "one_line": "LLM 거짓말 탐지를 위한 페르소나·지식 방향 확장과 성능을 검증했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "더 다양해진 역할 놀이 질문이 Liars' Bench에서 페르소나 방향의 성능을 높여주지는 못했어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.26538",
          "title": "LLM GerryMandering: Separating Interactions from Additive Effects in LLM Audits",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26538"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "교차 편향 검사에서 생기는 거짓 양성 문제를 확인해 봤습니다",
            "easy1_desc": "연구진이 상호작용이 전혀 없는 150개의 가상 데이터셋으로 기존의 표준 기준을 테스트해 봤는데요, 셔플 영가설을 썼을 때 데이터셋당 평균 66.1개의 거짓 하위 그룹을 잡아냈고 모든 데이터셋에서 적어도 하나씩은 나왔다는 겁니다. 뭔 소리냐면, 속성들이 따로 놀 때 나오는 결과인데도 이를 상호작용으로 잘못 판단한다는 말이에요. 심지어 크기가 정해진 상호작용을 심어봐도 수정된 영가설은 그중 32%밖에 못 찾아냈다는 점도 같이 드러났거든요. 쉽게 말하면, 기존 방식은 독립적인 속성 탓에 생긴 결과까지 편향이라고 오해하기 쉽다는 셈이에요.",
            "easy2_title": "더 정확하게 편향을 걸러내는 새로운 방식을 제안했어요",
            "easy2_desc": "그래서 연구진은 모든 속성에 대해 가산 모델을 맞추고, 그 모델의 예측값에서 Additive Residual Distance(ARD)로 각 하위 그룹의 점수를 매긴 뒤 프리드먼-레인 영가설과 비교하는 ADDIS(Additive Intersectional Screen)를 도입했는데요, 가상 벤치마크에서 데이터셋당 0.09개의 거짓 하위 그룹만 잡고 심어둔 상호작용의 84%를 찾아냈다는 겁니다. 1만 개의 가상 인디 페르소나와 13개의 공개 언어 모델로 검사해 봤더니 기존 기준은 평균 7.1%를 잡았지만 ADDIS는 3.0%만 잡았다고 해요. 성별 정체성과 성적 지향의 조합이 모든 모델에서 가장 큰 결합으로 나타났는데, 관찰 테스트로는 놓쳤던 카스트와 계층 간의 상호작용까지 반사실적 페르소나로 확인할 수 있었다는 점도 같이 보여준다는 겁니다.",
            "topic": "대규모 언어 모델(LLM) 감사에서 독립적인 속성 효과와 실제 상호작용을 구분하여 교차 편향을 정확히 측정하는 방법에 대한 연구예요.",
            "one_line": "독립적 속성 효과와 상호작용을 분리하는 교차 편향 감사 기법을 개발했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.26491",
          "title": "FLUID: Flexible, Evidence-Grounded Situated Task Guidance",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26491"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존의 정해진 틀에서 벗어나지 못하고 있던 실시간 작업 안내의 유연성 부족",
            "easy1_desc": "실시간 작업 안내를 할 때는 상황에 맞게 여러 가지 반응이나 알맞은 타이밍을 고르는 게 중요한데요, 때로는 아예 가만히 있는 게 가장 좋은 행동일 수도 있거든요. 그런데 기존의 평가 기준들은 사람이 만든 대화를 고정된 정답으로만 다루다 보니 이런 유연성을 제대로 담아내지 못했다는 말이에요. 쉽게 말하면, 정해진 말만 하도록 강제하던 방식 때문에 자연스러운 대화의 흐름을 놓치고 있었다는 겁니다.",
            "easy2_title": "유연성과 증거 기반을 결합한 새로운 통합 프레임워크 FLUID 개발",
            "easy2_desc": "그래서 연구진은 실제 사람끼리의 안내 데이터인 WTaG과 HoloAssist를 활용해, 언제 개입해야 하는지와 그 근거까지 함께 다루는 FLUID(Flexible, Evidence-Grounded Situated Task Guidance)라는 통합 프레임워크를 선보였는데요. 이 방식을 적용해 평가와 실시간 에이전트 구축을 모두 해봤더니, 응답 정확도와 개입 정밀도 등 전체적인 성능 균형 면에서 가장 뛰어난 결과를 보여줬다는 겁니다. 다만 말하기가 겹치는 문제를 피하는 부분에서는 여전히 개선할 점이 남아 있다는 한계도 함께 언급했어요.",
            "topic": "실시간 작업 안내에서 유연하고 증거에 기반한 상호작용을 모델링하고 평가하는 통합 프레임워크인 FLUID를 소개하고 성능을 검증한 내용이에요.",
            "one_line": "유연하고 증거에 기반한 실시간 작업 안내 프레임워크 FLUID를 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "연구진은 평가 대상 시스템 중에서 말하기가 겹치는 문제를 피하는 부분에서는 여전히 개선할 여지가 남아 있다고 밝혔어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.26423",
          "title": "Seer: Guiding Small Deep-Research Agents with Shared Decision Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26423"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "작은 기기에서 AI를 돌리려니 답답한 점이 많았거든요",
            "easy1_desc": "개인 기기에서 AI 에이전트를 돌리려니 메모리와 연산 능력이 부족해서 작은 모델을 쓸 수밖에 없는데요, 그렇다고 추론할 때마다 성능을 높이려니 대안을 실행하느라 도구 호출이 늘어나고 자체 평가나 모델별 맞춤 지도가 어려워진다는 문제가 있었거든요. 결국 성능과 효율을 둘 다 잡기가 까다로웠다는 말이에요. 쉽게 말하면, 작은 모델의 한계를 극복하면서도 불필요한 도구 실행을 줄여야 하는 상황이었다는 겁니다.",
            "easy2_title": "공유 결정 모델을 써서 불필요한 실행 없이 성능을 끌어올렸습니다",
            "easy2_desc": "그래서 연구진은 행동 제안과 결과 예측을 분리한 시어(Seer)라는 추론 프레임워크를 도입했는데요, 실제 연구 기록으로 도구 반응 시뮬레이터와 가치 평가기를 미리 학습시켜 두고 재사용하는 방식이에요. 이렇게 했더니 버려지는 후보에 대한 도구 호출을 막으면서도 GAIA 정확도가 Qwen3.5-4B는 13.6%에서 41.7%로, Qwen3.5-9B는 22.3%에서 50.5%로 크게 올랐다는 겁니다. 장점은 추가 실행 비용 없이 성능을 높인다는 건데, 예측이나 점수 매기기에 오류가 있으면 더 넓은 탐색의 효과가 제한된다는 한계도 같이 나타났다고 해요.",
            "topic": "공유된 결정 모델을 이용해 소형 딥 리서치 에이전트의 추론 성능을 높이는 시어(Seer) 프레임워크를 개발하고 평가한 연구예요.",
            "one_line": "공유 결정 모델로 소형 딥 리서치 에이전트의 추론 성능을 높이는 시어를 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "연구진은 예측과 평가 과정에서 오류가 발생하면 더 넓은 상상 검색이 주는 이점이 제한될 수 있다고 밝혔어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.26422",
          "title": "Reasoning-Trace Analysis Using Large Language Models for Interpretable Q-Matrix Construction",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26422"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "그동안 AI가 만든 시험 문제표는 왜 그런지 속을 알 수 없었거든요",
            "easy1_desc": "대형 언어 모델(LLM)이 진단 분류 모델(Diagnostic Classification Models)을 위한 Q-매트릭스(Q-Matrix)를 만들 수는 있지만, 지금까지는 최종 결과물만 평가해 왔는데요. 그러다 보니 개별 문항과 속성이 왜 그렇게 연결되었는지 그 근거를 알 수가 없었다는 말이에요. 이런 불투명함 때문에 측정에서 인공지능(AI)을 책임감 있게 쓰는 데 한계가 있다는 겁니다. 쉽게 말하면, 결과는 그럴듯한데 왜 그런 답이 나왔는지 이유를 모르는 셈이라는 말이에요.",
            "easy2_title": "그래서 생각 과정을 추적해서 어디가 문제인지 뜯어볼 수 있게 만들었는데요",
            "easy2_desc": "연구진은 연쇄적 사고(Chain-of-Thought, CoT) 프롬프팅으로 AI가 속성을 붙인 생각의 흔적을 만들고 이를 분석하는 추론 흔적 분석(Reasoning-Trace Analysis, RTA)이라는 틀을 제안했어요. 이 방식을 써봤더니 전문가 검토와 경험적 검증을 보완할 수 있다는 건데요. 시뮬레이션과 실제 분수 뺄셈 문항(11개 분수 뺄셈 문항, 536명의 응답자 등) 실험에서 직접 만든 매트릭스보다 일치도는 조금 낮고 변동은 컸지만, 불일치의 이유를 낱낱이 들여다볼 수 있었다는 겁니다. 장점은 검증 가능한 근거를 얻는 것인데, 대신 직접 만든 것보다 결과가 흔들린다는 단점도 같이 따라온다는 거예요.",
            "topic": "대형 언어 모델(LLM)을 이용해 Q-매트릭스를 만들 때, 추론 과정을 분석해 각 문항과 속성 연결의 근거를 들여다볼 수 있는 추론 흔적 분석(RTA) 틀을 제안하고 그 성능을 살펴본 내용이에요.",
            "one_line": "대형 언어 모델의 Q-매트릭스 생성 과정을 추적하는 RTA를 제안하고 평가했어요.",
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
              "0.809",
              "0.877"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.26361",
          "title": "How Much Should an Agent Remember? Deployment Lessons from Self-Distilled Memory for LLM Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26361"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "에이전트가 긴 작업에서 자꾸 엉뚱한 실수를 반복했어요",
            "easy1_desc": "대형 언어 모델(LLM) 기반 에이전트들이 긴 작업에서 API 페이지를 잘못 넘기거나 엉뚱한 대상을 고르는 실수를 반복하는데요. 연구진은 에이전트가 자기 옛날 기록에서 스스로 배우게 만드는 파이프라인을 만들어 봤어요. 한 에피소드에서 1개에서 3개까지 짧은 교훈을 캐낸 다음, 이를 합쳐서 더 작은 지침 세트로 다듬는 방식이에요. 쉽게 말하면, 에이전트가 자기가 했던 실수와 성공에서 규칙을 뽑아내도록 만든 셈이라는 말이에요.",
            "easy2_title": "기억을 다 넣는 게 좋은 줄 알았더니 모델에 따라 달랐어요",
            "easy2_desc": "그래서 연구진이 이 방식을 실제 오픈소스 라이브러리와 IBM 플랫폼에 적용해서 측정해 봤는데요. 놀랍게도 기억의 양 자체가 아니라 모델의 성능에 따라 필요한 기억의 크기가 달랐다는 겁니다. 강한 모델은 지침을 다 넣을수록 성능이 계속 좋아지는데, 약한 모델은 전부 다 넣는 것보다 잘 고른 일부만 넣을 때 더 좋아진다는 장점이 있었어요. 대신 합치는 과정에서 출처가 사라지거나 잘못된 지침이 역효과를 내는 문제도 같이 겪었다고 밝혔습니다.",
            "topic": "LLM 에이전트가 자기 기록에서 교훈을 뽑아 기억으로 쓸 때, 모델의 능력에 따라 알맞은 기억의 양이 어떻게 달라지는지 밝힌 연구예요.",
            "one_line": "LLM 에이전트의 자기 기억 활용법을 만들고 모델별 효과를 측정했어요.",
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
          "canon_id": "2611.26346",
          "title": "Context as a Resource",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26346"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "대화와 외부 사건을 한 줄에 다 넣으려다 보니 꼬이더라고요",
            "easy1_desc": "사람의 주의력이 한계에 부딪히니까 늘 켜져 있는 개인용 에이전트를 쓰려고 하는데요, 문제는 모든 문맥이 똑같은 고정된 가중치를 공유하면서 얽힌 대화와 바깥 사건을 한 줄짜리 세션에 우겨넣으면 주제가 서로 꼬이고 멈춰버리는 현상이 생긴다는 거예요. 그렇다고 라우터와 티켓 구조를 쓰면 글이 손실되거나 라우팅 부담이 커져서, 독립된 가지는 잘 통과해도 진짜 충돌이 난 저장소 병합은 세 번 평균 33.3%밖에 성공하지 못한다는 말이에요. 쉽게 말하면, 여러 일을 한 번에 처리하려다 보니 시스템이 서로 발목을 잡는 셈이라는 겁니다.",
            "easy2_title": "라우터 없이 문맥을 직접 가상화해서 충돌과 토큰 낭비를 줄였습니다",
            "easy2_desc": "그래서 연구진은 인간 같은 역할을 짜맞추는 대신 라우터가 아예 없는 구조인 ClonAct를 내놓았는데요, 플러그인 형태의 비생성형 문맥 메모리 관리 장치와 제자리에 있는 문맥 셀, 격리된 병합 관문을 가진 시냅스 버스, 그리고 파도로 씻어내는 공유 트렁크로 문맥 블록을 직접 가상화하는 방식이에요. 이렇게 했더니 진짜 충돌이 나는 병합 성공률이 63.3%로 올라갔고, 프롬프트 토큰도 45.9%나 줄어들면서 작은 모델이 무너지는 것도 막아냈다고 밝혔는데요. 장점은 대기 시간이 짧고 타임아웃이 없다는 건데, 대신 복잡한 구조를 관리해야 한다는 점도 같이 따라온다는 겁니다.",
            "topic": "동시에 들어오는 여러 작업을 하나의 인터페이스에서 처리할 때 생기는 충돌과 성능 저하를 막기 위해, 라우터가 없는 문맥 가상화 구조인 ClonAct를 제안하고 그 성능을 검증한 내용이에요.",
            "one_line": "라우터 없는 문맥 가상화 구조로 병합 성공률을 높였어요",
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
          "canon_id": "2611.26343",
          "title": "DeepQuest: From Knowledge Gaps to Scientific Discovery in Alzheimer's Disease",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26343"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.26342",
          "title": "Training LLMs to Follow Reasoning Instructions with Minimal Edits",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26342"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "전체 과정을 다 따라 하게 하거나 통째로 점수만 주니 문제가 생겼는데요",
            "easy1_desc": "연구진은 대형 언어 모델(LLM)이 긴 추론 과정을 익힐 때 쓰는 학습 방식에 한계가 있다고 봤는데요. 전체 모범 답안을 그대로 따라 하게 하면 모델의 출력이 너무 묶이고, 통째로 보상이나 벌점을 주면 어느 부분이 맞고 틀렸는지 정확히 알기 어렵다는 겁니다. 쉽게 말하면, 전체를 다 고치려다 보니 원래 잘하던 것까지 흐트러진다는 말이에요.",
            "easy2_title": "틀린 부분만 살짝 고치는 방식으로 추론 능력을 키워봤습니다",
            "easy2_desc": "그래서 연구진은 모델이 만든 답변에서 처음으로 틀린 지점만 찾아내 최소한의 범위로 고치는 편집 기반 학습 방식을 제안했는데요. 추론이 처음 무너지는 곳에만 감독을 집중하고 나머지는 그대로 살려두는 방식이에요. 그 결과, 전체를 따라 하는 방식이나 통째로 보상하는 방식보다 불필요한 변화는 줄이면서도 추론 지침을 훨씬 잘 따르게 된다는 점을 확인했다고 밝혔습니다.",
            "topic": "대형 언어 모델이 추론 지침을 더 잘 따르도록 전체 답변 대신 틀린 부분만 고쳐서 학습시키는 새로운 방식을 제안한 연구예요.",
            "one_line": "틀린 부위만 골라 고치는 편집 기반 학습으로 LLM 추론 능력을 높였다.",
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
          "canon_id": "2611.26339",
          "title": "Sirius-Tiamat: How Small Can a One-Pass Decision Encoder Get Before Its Decisions Change?",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26339"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "작은 인공지능 모델을 얼마나 더 줄여야 답이 바뀔까",
            "easy1_desc": "연구진은 4억 2100만 매개변수를 가진 인공지능 모델인 라야(Laya)를 얼마나 더 압축할 수 있는지 알아봤는데요, 기존 전체 정밀도(fp32)와 비교해 답변이 어떻게 달라지는지 1221개의 합성 데이터와 273개의 새로운 데이터, 그리고 800개의 다른 외부 질문으로 확인해 봤다는 거예요. 뭔 소리냐면, 모델을 줄였을 때 원래 대답과 똑같이 대답하는지 그 한계를 시험해 본 셈이라는 말이에요.",
            "easy2_title": "모델을 줄이면 정확도가 흔들리는데 온도를 맞춰서 되살렸다",
            "easy2_desc": "그래서 여러 가지 방법으로 압축을 해 봤더니, 예를 들어 16개 층을 가진 학생 모델로 지식을 증류했을 때는 원래 데이터에서 대답이 바뀐 비율을 44퍼센트에서 9퍼센트로 줄일 수 있었다고 하는데요, 대신 층을 지우면 기대 보정 오차(ECE)가 5.9퍼센트에서 39.2퍼센트로 크게 치솟는다는 단점도 같이 나타났다는 거예요. 다행히 라벨이 따로 필요 없는 하나의 맞춤형 온도를 쓰면 오차를 3.6퍼센트로 다시 낮출 수 있다는 장점이 있다는 겁니다.",
            "topic": "인공지능 결정 부호기를 얼마나 압축할 수 있는지와 압축할 때 발생하는 정확도 변화를 확인한 연구예요.",
            "one_line": "인공지능 결정 부호기의 압축에 따른 답변 변화를 측정했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "사용한 데이터가 합성 데이터이면서 대형 언어 모델(LLM)이 라벨을 붙인 것이며 단일 구조만을 대상으로 했다는 한계가 있어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.26335",
          "title": "ClosureBench: A Benchmark for Reasoning under Closure Assumptions",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26335"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 에이전트가 정보가 빠졌을 때 어떻게 다루는지 제대로 안 따져 봤다는 겁니다",
            "easy1_desc": "연구진이 거대 언어 모델(LLM) 기반의 AI 에이전트가 불완전한 기록에서 답을 찾을 때 빠진 정보를 모르는 것으로 볼지 거짓으로 볼지 제대로 구분하지 못하는 문제를 살펴봤는데요. 기존의 평가 방법들은 이런 정보 처리 방식을 다른 추론 문제들과 뒤섞어 놓아서 어디서 틀렸는지 알기 어렵다는 거예요. 쉽게 말하면, 정보가 없을 때 어떻게 판단해야 하는지 규칙을 잘 지키는지 따로 떼어놓고 본 적이 없었다는 말입니다.",
            "easy2_title": "누락된 정보를 다루는 기준을 따로 테스트하는 벤치마크를 만들어 봤는데요",
            "easy2_desc": "그래서 연구진은 클로저벤치(ClosureBench)라는 벤치마크를 만들어 모델이 누락된 정보를 처리하는 규칙을 따르는지 시험해 봤는데요. 열린 세상 가정(OWA), 폐쇄 세상 가정(CWA), 지역적 폐쇄 세상 가정(LCWA) 조건 아래에서 기본 시나리오들을 시험해 봤더니, 전체 정확도가 높더라도 핵심 전환 정확도는 낮게 나오는 큰 차이가 드러났다는 겁니다. 장점은 AI가 정보를 빠뜨렸을 때 어떤 가정을 쓰는지 낱낱이 볼 수 있다는 건데, 대신 LCWA 조건에서는 모델마다 엉뚱한 답을 고르는 약점도 같이 확인되었다는 말이에요.",
            "topic": "거대 언어 모델 기반의 AI 에이전트가 정보가 빠진 상황에서 규칙에 맞는 가정을 제대로 적용하는지 평가하기 위한 벤치마크(ClosureBench)와 그 실험 결과에 대한 내용이에요.",
            "one_line": "정보 누락 처리를 평가하는 벤치마크를 만들었어요.",
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
          "canon_id": "2611.26332",
          "title": "Rigel-Ladon: An Option-Count Law for a One-Pass Decision Encoder, Tested on Held-Out Option Counts and Held-Out Schemas",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26332"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "보기가 늘어날수록 정확도가 어떻게 떨어지는지 살펴봤습니다",
            "easy1_desc": "연구진은 텍스트와 질문, 그리고 여러 개의 보기를 읽고 정답 확률을 한 번에 내놓는 작은 신경망 모델인 Laya를 대상으로 보기가 2개에서 35개로 늘어날 때 정확도가 어떻게 떨어지는지 물어봤는데요. 4개의 질문 풀에서 보기가 포함 관계를 가지는 세트들을 평가해 봤더니, 정답과 오답 확률의 로그 비율인 로짓 정확도가 보기 개수에서 1을 뺀 값의 로그에 대해 직선 비례 관계를 보인다는 사실을 확인했다는 겁니다. 뭔 소리냐면, 보기 개수가 늘어날 때 정확도가 떨어지는 패턴을 일정한 법칙으로 설명할 수 있다는 말이에요. 쉽게 말하면, 보기 수에 따른 성능 저하를 미리 예측할 길이 열린 셈이라는 말이에요.",
            "easy2_title": "적은 보기로 학습한 법칙을 더 많은 보기 예측에 써봤습니다",
            "easy2_desc": "그래서 연구진은 K가 최대 6개일 때의 데이터로 법칙을 맞춘 뒤 이를 바탕으로 7개에서 12개 사이의 보기를 예측해 봤는데요. 0.6포인트 이내의 오차로 예측해 냈지만, 35개 레이블 풀에서는 이 법칙이 실패해서 5에서 11포인트의 오차를 냈다는 겁니다. 적은 보기로 세운 법칙이 넓은 범위에서 통한다는 장점이 있는데, 대신 아주 복잡한 35개 라벨 같은 큰 규모에서는 그대로 적용되지 않는다는 한계도 같이 드러난다는 겁니다. 쉽게 말하면, 특정 범위 안에서는 잘 맞지만 조건이 완전히 달라지면 한계가 온다는 말이에요.",
            "topic": "신경망 모델에서 보기 개수가 늘어날 때 정확도가 떨어지는 현상을 일정한 법칙으로 예측할 수 있는지 살펴본 연구예요.",
            "one_line": "신경망 모델에서 보기 개수 변화에 따른 정확도 저하 법칙을 시험했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "연구에 사용된 모델 패밀리가 하나뿐이고 대형 언어 모델로 라벨링한 합성 텍스트를 사용했다는 조건이 있어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.26313",
          "title": "Actor-Predictor Architecture for Reinforcement Learning with Formal Specification Objectives",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26313"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "자동차가 시키는 대로 안전을 지키게 만드는 게 원래는 너무 힘들었거든요",
            "easy1_desc": "강화학습에서 규칙이나 시간 제약을 지키도록 만드는 건 원래 아주 까다로운 문제인데요, 보통은 논리식을 오토마타라는 상태 구조로 바꿔서 해결해 왔거든요. 그런데 이 방식은 식이나 선형 시제 논리(LTL)가 복잡해지면 구조를 만들기 너무 어렵다는 한계가 있었어요. 쉽게 말하면, 규칙이 조금만 까다로워져도 기존 방식대로는 아예 손을 대기 힘들었다는 말이에요.",
            "easy2_title": "오토마타를 안 만들고도 규칙을 잘 지키게 해 주는 구조를 만들어 봤어요",
            "easy2_desc": "그래서 연구진은 오토마타를 직접 만들지 않고도 논리가 얼마나 진행됐는지 대신 흉내 내어 배우는 액터-프리딕터라는 틀을 제안했는데요, 프리딕터가 앞으로의 과정이 규칙을 지킬지 미리 짐작하고 그 결과를 액터에게 알려주는 방식이에요. 격자 세상과 아이작 랩(Isaac Lab)의 로봇 실험에서 기존 방식보다 훨씬 뛰어난 성능을 보여줬거든요. 장점은 복잡한 비정규 형식까지 다룰 수 있다는 건데, 대신 예측 정확도가 충분히 뒷받침돼야 한다는 조건이 따라온다는 겁니다.",
            "topic": "오토마타를 따로 만들지 않고도 논리 제약을 만족하는 강화학습을 할 수 있도록 액터-프리딕터 구조를 제안하고 실험으로 성능을 확인한 내용이에요.",
            "one_line": "오토마타 없이 논리 제약을 학습하는 액터-프리딕터 구조를 제안하고 성능을 검증했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "예측 정확도가 충분히 높아야 이론적으로 오토마타 상태와 같아진다는 조건이 있어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.26309",
          "title": "Client Exits - A Way to Increase LLM Transparency on the Client Side",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26309"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "대형 언어 모델의 답을 뜯어보기가 힘들었어요",
            "easy1_desc": "대형 언어 모델(LLM)이 글자로 추천을 해 주는데, 이 답이 어떻게 나왔는지 속을 들여다보기 어렵다는 문제가 있었는데요. 연구진은 그래서 뜻을 담은 내용과 사용자 화면에 보여 주는 방식을 떼어놓는 가벼운 장치인 '클라이언트 엑시트'를 만들어 봤습니다. 모델이 기계가 알아볼 수 있는 표시를 답 속에 넣어 주면, 받는 쪽에서 화면이나 소리 같은 알맞은 방식으로 바꿔 보여 주는 방식이에요. 쉽게 말하면, 모델은 재료만 던져 주고 꾸미는 건 쓰는 쪽에서 알아서 골라 쓰게 만든 셈이라는 말이에요.",
            "easy2_title": "표시를 넣어 봤더니 답변을 더 마음에 들어 했어요",
            "easy2_desc": "연구진이 미세조정(파인튜닝)한 큐원(Qwen) 모델과 고친 리브레챗(LibreChat) 클라이언트를 합쳐서 시험해 봤는데요. 100개의 시험 문제에서 표시를 넣은 모델은 모든 답변에 표시를 정확히 담았고, AI 판사에게 물어봤더니 66%의 비교에서 이 모델의 답을 더 골랐다는 거예요. 표시를 넣는 방식이 잘 작동한다는 뜻인데, 다만 이 실험은 정해진 100문제라는 조건 안에서 확인해 본 결과라는 한계가 함께 남는다는 겁니다.",
            "topic": "대형 언어 모델의 답변에 기계가 읽을 수 있는 표시를 넣어, 사용자가 원하는 형태로 꾸며 쓰게 만드는 방식을 시험해 본 연구예요.",
            "one_line": "모델 답에 표시를 넣어 사용자가 꾸미게 하는 방식을 시험하고 평가했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "이번 결과는 평가에 쓰인 100개의 시험 문제와 특정 QOC 조건 안에서 확인된 내용이라는 한계가 있습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.26261",
          "title": "Similarity-based OSF Logic for Flexible SPARQL Query Answering",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26261"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존의 깐깐한 방식 때문에 답을 못 찾던 게 문제였어요",
            "easy1_desc": "연구진은 퍼지 순서화 정렬(OSF) 논리를 다루는 추론기인 포스프(fosf)의 새로운 버전을 선보였는데요, 자바나 프로그래밍 언어가 아니라 지식 그래프에서 SPARQL 질의를 유연하게 처리할 수 있도록 기능을 더한 거예요. 퍼지 OSF 논리는 특징 기호가 함수를 나타내고 정렬 기호가 퍼지 집합을 나타내는 지식 표현 언어라는 말이에요. 정렬들은 엔터티 클래스를 나타내는 기록 모양 구조인 OSF 용어로 확장되는 퍼지 포섭 관계로 조직되어 있어요. 이런 구조들을 위한 단일화 알고리즘이 퍼지 유형 포섭 계산법을 제공한다는 겁니다.",
            "easy2_title": "비슷한 것까지 찾아내도록 바꿨더니 대략적인 답도 나오게 되었어요",
            "easy2_desc": "그래서 연구진은 정렬 사이에 유사성 관계를 더해 OSF 언어를 확장하는 방식으로 유사성 기반 추론을 지원하게 만들었는데요, OSF 용어를 표준 SPARQL로 컴파일하는 번역 엔진도 함께 넣었다고 해요. OSF 용어로 표현된 질의는 번역되기 전에 퍼지 온톨로지 인지 재작성을 거치게 되는데요, 이 과정 덕분에 원래 온톨로지와 맞지 않던 질의도 관련 있는 결과를 내놓을 수 있게 된다는 장점이 생겼어요. 대신 정확한 일치 대신 대략적인 해결책을 반환하기 때문에, 엄격한 정확도가 필요한 곳에서는 결과가 흐릿할 수도 있다는 점도 같이 따라온다는 겁니다.",
            "topic": "RDF 지식 그래프에서 퍼지 OSF 논리를 활용해 유연한 SPARQL 질의 응답을 지원하는 추론기 포스프(fosf)의 새로운 기능과 작동 방식에 대한 설명이에요.",
            "one_line": "퍼지 OSF 논리 추론기에 유사성 기반 추론 기능을 더해 유연한 SPARQL 질의 응답을 구현했어요.",
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
              "one_line 56자"
            ],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.26235",
          "title": "Physics-Informed Feature Representations and Pretrained Tabular Foundation Models for Generalizable Melt Pool Geometry Prediction",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26235"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식으로는 데이터가 부족해서 레이저 공정을 예측하기가 어려웠는데요",
            "easy1_desc": "첨단 제조 분야에서 기계학습 모델을 범용성 있게 만드는 게 여전히 까다로운 이유가, 실험 데이터가 부족하고 재료나 작동 조건에 따라 공정과 성질의 관계가 달라지기 때문인데요. 특히 레이저 파우더 베드 융합(LPBF, Laser Powder Bed Fusion) 공정에서는 용융지(melt pool)의 너비와 깊이, 그리고 용융 모드가 공정의 안정성과 결함 형성을 좌우합니다. 그런데 기존 기계학습 모델은 치수 기반의 공정 파라미터만 주로 써서, 레이저와 재료가 어떻게 상호작용하는지 암시적으로만 담다 보니 재료가 바뀔 때 그대로 적용하기가 어려웠다는 말이에요.",
            "easy2_title": "물리 기반의 무차원 특성과 사전 학습된 표 기반 모델을 써봤더니 예측력이 좋아졌습니다",
            "easy2_desc": "그래서 연구진은 레이저 조건과 재료의 열물리적 성질을 합친 무차원 특성인 정규화 엔탈피와 펙레 수(Peclet number)를 써서 용융지 예측 성능이 나아지는지 평가해 봤는데요. 고전적인 기계학습 모델 네 개와 사전 학습된 표 기반 기초 모델 세 개를 체계적으로 비교해 봤더니, 물리적 의미가 담긴 무차원 표현을 쓰면 데이터 효율적인 용융지 모델링을 개선할 수 있다는 겁니다. 다만 표 기반 기초 모델들이 대체로 분류 성능은 더 뛰어나지만, 재료를 넘나드는 깊이 예측에서 특히 큰 폭의 성능 향상을 보였다는 점도 함께 나타났다는 셈이에요.",
            "topic": "물리 법칙을 담은 무차원 특성과 사전 학습된 표 기반 기초 모델을 활용해 레이저 파우더 베드 융합(LPBF)의 용융지 예측력을 높이는 연구입니다.",
            "one_line": "물리 기반 특성과 표 기초 모델로 용융지 예측력을 높였다.",
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
              "easy2_title 한 줄 아님/너무 김(47자)"
            ],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.26171",
          "title": "The FrontierOR Challenge: Agentic Algorithm Design for Operations Research",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26171"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 최적화 알고리즘을 전문가가 일일이 짰는데요",
            "easy1_desc": "운송 경로 짜기나 일정 관리 같은 최적화 문제를 풀려면 전문가들이 몇 주씩 매달려 알고리즘을 만들어야 했거든요. 대규모 언어 모델(LLM) 에이전트가 코드를 짜고 고칠 수는 있지만, 실제 큰 규모의 문제까지 제대로 키워낼 수 있는지는 아직 확실하지 않은 상태였습니다. 프론티어OR 벤치마크를 한 번만 돌려봤을 때 가장 센 모델도 대형 인스턴스의 39%에서만 구로비(Gurobi) 수준에 맞췄다는 말이에요.",
            "easy2_title": "에이전트 워크플로우로 여러 문제를 한꺼번에 풀도록 겨뤄보게 했습니다",
            "easy2_desc": "그래서 연구진은 최적화 문제를 동시에 풀 수 있는 에이전트 워크플로우를 짜오라고 프론티어OR 챌린지를 열었는데요, 6개 응용 분야와 5가지 수식 유형이 섞인 60개 문제를 주 단위로 내놓는 1단계와 새로운 문제가 나오는 2단계로 나누어 진행합니다. 네트워크가 끊긴 샌드박스에서 돌리는 메인 트랙과 각자 컴퓨터에서 정해진 시간 안에 푸는 셀프호스티드 트랙으로 갈라져 경쟁한다는 겁니다.",
            "topic": "실제 규모의 최적화 문제를 풀기 위해 대규모 언어 모델 에이전트가 알고리즘을 짜는 에이전트 워크플로우를 겨루는 프론티어OR 챌린지 운영 방식에 대한 설명이에요.",
            "one_line": "대규모 언어 모델 에이전트로 최적화 문제를 푸는 프론티어OR 챌린지의 규칙과 진행 방식을 설계했어요.",
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
              "one_line 56자"
            ],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.26132",
          "title": "Sage-Evolve-Preview:Adaptive Observation for Post-Training Self-Improvement",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26132"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "왜 점수가 더 안 오르고 제자리걸음일까",
            "easy1_desc": "연구진은 훈련을 거듭해 스스로 성능을 높이는 반복적 자기 개선 과정에서, 고정된 기준 점수만 바라보고 훈련하면 초기에 반짝 오른 뒤에는 더 이상 나아가지 못하고 멈춰 서게 된다고 봤는데요. 이 말은 능력이 다 떨어진 게 아니라, 바라보는 창이 좁아져서 더 고칠 점을 찾아내지 못한다는 거예요. 쉽게 말하면, 시험 문제 유형을 안 바꾸고 맨날 똑같은 채점 기준만 쥐고 있으니 막힌 셈이라는 말이에요.",
            "easy2_title": "관찰 방식을 바꿔서 한계를 뚫어 봤습니다",
            "easy2_desc": "그래서 연구진은 기준 목표는 그대로 둔 채 관찰 방식을 유연하게 바꾸는 적응형 관찰 기법을 도입했는데요. 성장이 멈추면 진단 단위를 쪼개고 난도를 높이며 관련 과제를 보태서 검증된 내용을 다시 훈련에 집어넣는 방식이에요. 긴 글 읽기와 지시 따르기 분야의 8개 기준에서 평균 점수를 66.4에서 73.7까지 끌어올리는 장점이 있는데, 대신 훈련 관리 구조가 더 복잡해진다는 점도 함께 따라온다는 겁니다.",
            "topic": "반복적 자기 개선 과정에서 멈춤 현상을 극복하기 위해 관찰 방식을 유연하게 바꾸는 적응형 관찰 기법을 제안한 연구예요.",
            "one_line": "반복적 자기 개선의 정체 극복을 위해 적응형 관찰 기법을 제안하고 성능을 높였다.",
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
          "canon_id": "2611.26109",
          "title": "SenseAlign: Learning Decision-Aligned Predictive Representations for Active Urban Sensing with UAVs",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26109"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "무엇이 문제였나",
            "easy1_desc": "도심 교통망을 드론으로 능동적으로 살피는 연구를 해봤는데요, 교통 상황이 시시각각 바뀌는데 부분적인 정보만 갖고 결정을 내려야 한다는 점이 문제였다는 거예요. 이전 연구에서는 복잡한 시간과 공간의 변화를 이해하는 것과 결정을 내리는 것을 함께 다루지 않았거든요. 결국 미래를 예측하는 것과 의사결정을 맞추기가 까다로웠다는 말입니다.",
            "easy2_title": "그래서 무엇을 했고 무엇이 달라졌나",
            "easy2_desc": "그래서 연구진은 센스알라인(SenseAlign)이라는 강화학습(RL) 기반의 틀을 제안했는데요, 드론 함대를 조율하기 위해 의사결정에 맞춘 예측 표현을 학습하도록 만들었다는 겁니다. 먼저 미래의 실제 교통 상황을 아는 선생님 에이전트를 훈련하고, 부분적인 정보로 미래를 예측하는 학생 에이전트의 가지를 더했다고 해요. 이렇게 했더니 예측만 따로 하는 게 아니라 의사결정을 위한 잠재 공간을 잘 다듬게 되는 장점이 있는데, 대신 훈련 과정에서 선생님과 학생의 행동 분포를 맞추는 복잡한 과정이 같이 따라온다는 겁니다.",
            "topic": "센스알라인(SenseAlign)을 통해 도심 도로망에서 드론 함대를 조율하는 의사결정 맞춤형 예측 표현 학습 방법을 제안했어요.",
            "one_line": "드론 능동 감지를 위한 의사결정 맞춤형 예측 표현 학습 방법을 제안했어요.",
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
          "canon_id": "2611.26108",
          "title": "Pareto-Optimal and Strategyproof Data-Sharing Between Competitors",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26108"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "경쟁사끼리 데이터를 나누면 무슨 일이 생길까 살펴봤는데요",
            "easy1_desc": "연구진은 같은 시장에서 경쟁하는 기업들이 예측 모델의 품질을 높이기 위해 데이터를 서로 공유하는 상황을 모델로 만들어 분석해 봤습니다. 기업의 이익은 데이터 개수로 결정되는 예측 정확도와 전체 기업의 데이터 비율로 정해지는 시장 점유율 두 가지로 나뉜다는 건데요. 모든 기업의 데이터를 한쪽이 다 받는 경우가 파레토 최적, 즉 어느 한쪽도 손해를 보지 않고 좋아지는 상태가 되는 계약이라는 걸 밝혔습니다. 쉽게 말하면, 서로 경쟁하면서도 이익을 극대화하려면 어떻게 데이터를 주고받아야 하는지 그 기준을 따져본 셈이에요.",
            "easy2_title": "데이터를 주고받으면서도 손해를 안 보는 방법을 제안했습니다",
            "easy2_desc": "그래서 연구진은 기업들이 상대방에게 데이터를 주더라도 시장 점유율이 그대로 유지되어 손해를 보지 않는 새로운 데이터 공유 계약 방식을 제안했는데요. 이 계약을 쓰면 경쟁사에게 데이터를 줘서 생기는 부정적인 효과가 사라지고, 데이터를 나누지 않을 때보다 모든 기업이 똑같이 이익을 얻는다는 겁니다. 특히 그중 하나의 계약은 기업들이 처음 가진 데이터 크기를 속이려 해도 통하지 않는 전략적 안전성까지 갖추고 있다는 장점이 있는데요, 대신 실제 데이터를 다룰 때는 조건이 맞아야 한다는 점도 같이 따라온다는 겁니다.",
            "topic": "경쟁 관계에 있는 기업들 사이에서 이익을 해치지 않고 데이터를 안전하게 공유할 수 있는 최적의 계약 방식을 이론과 실제 데이터로 분석한 연구예요.",
            "one_line": "경쟁사 간 손해 없는 데이터 공유 계약 방식을 분석하고 제안했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.26050",
          "title": "Studying AI Act Mentions: A first look at the impact of the European Union's AI regulation on Hugging Face",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26050"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "유럽연합 인공지능법이 나왔는데 현장에서 어떻게 반응하는지는 몰랐어요",
            "easy1_desc": "유럽연합(EU)의 인공지능법(AI Act)이 2024년 8월에 시행되면서 2025년 8월과 2026년에 걸쳐 단계별 의무가 적용되는데요, 전 세계 AI 개발자들이 모이는 공개 플랫폼 허깅 페이스(Hugging Face, HF)에서 실제 개발자들이 이 법에 어떻게 대응하는지는 잘 알려지지 않았다는 겁니다. 그래서 연구진은 허깅 페이스에서 이 법을 직접 언급한 기록 1500여 개를 모아서 실증 조사를 해봤거든요. 쉽게 말하면, 새로운 규제가 나온 뒤에 현장 개발자들이 실제로 어떤 반응을 보이는지 처음으로 들여다본 셈이에요.",
            "easy2_title": "법 규정 언급은 아직 드물고 책임 떠넘기기에 집중되는 모습이에요",
            "easy2_desc": "조사해 봤더니 허깅 페이스 전체에서 인공지능법을 직접 언급한 기록은 아직 드물게 나타났는데요, 저장소 카드에는 규정을 지키거나 책임을 나중에 쓰는 사용자에게 넘긴다는 주장이 주로 담겨 있었다는 거예요. 토론 공간에서는 법 위반을 신고하는 이야기가 오갔고, 커밋(commit) 기록에서는 규정 준수를 돕는 수정 작업이 주로 이루어졌다고 합니다. 준수 선언이 실제로 어떻게 지키는지보다 누구 책임인지를 따지는 데 쏠려 있다는 단점이 있는데, 장점은 이를 통해 플랫폼 차원의 자동 점검이나 문서 양식 같은 직접적인 지원이 왜 필요한지 뚜렷하게 드러났다는 겁니다.",
            "topic": "유럽연합의 인공지능법이 공개 플랫폼인 허깅 페이스에서 어떻게 언급되고 다뤄지는지 살펴본 실증 연구예요.",
            "one_line": "허깅 페이스에서 유럽연합 인공지능법 언급 기록을 분석했어요.",
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
            "bad_numbers": [
              "500"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 안전·평가",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.26033",
          "title": "SEOYUN: Refusal-Inducing Exam Documents for AI-Glasses Pipelines",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26033"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시험지를 찍어 AI에 묻는 게 문제였는데요",
            "easy1_desc": "카메라가 달린 안경으로 시험지를 찍어서 비전 언어 모델에 물어보는 일이 문제가 될 수 있는데요. 연구진은 이 유출을 막기 위해 시험지 자체를 손봐서 모델이 답변을 거부하게 만드는 SEOYUN이라는 프레임워크를 제안했어요. 일반적인 감옥 탈출(jailbreaking)과 반대로, 거부를 우회하는 게 아니라 거부를 이끌어내는 역방향 감옥 탈출 방식을 썼다는 거예요. 쉽게 말하면, AI가 답을 알려주지 않도록 시험지에 특수 처리를 했다는 말입니다.",
            "easy2_title": "시험지에 방해 장치를 넣었더니 거부 반응을 이끌어냈는데요",
            "easy2_desc": "그래서 연구진은 광학적 개입과 인코더 수준의 개입을 더해 시험지에서 유용한 정보를 얻지 못하게 만들었는데요. 디지털과 시뮬레이션, 그리고 실제 입력을 나누어 평가하는 프로토콜도 함께 마련했어요. 새로운 위협 모델과 분석적 한계를 제시했다는 장점이 있는데, 대신 이 버전에서는 모델 성능 측정이나 실제 물리적 검증 결과는 전혀 다루지 않았다는 한계도 같이 따라온다는 겁니다. 쉽게 말하면, 아직은 이론적인 연구 틀일 뿐 검증된 방어책은 아니라는 셈이에요.",
            "topic": "카메라 안경을 이용한 부정행위를 막기 위해 시험지가 스스로 답변을 거부하도록 만드는 SEOYUN 프레임워크와 그 평가 프로토콜을 제안한 논문이에요.",
            "one_line": "AI 안경 부정행위를 막는 거부 유도 시험지 프레임워크 제안",
            "topic_tag": "AI 안전·평가",
            "limit": "이 버전에서는 모델 성능 측정이나 물리적 검증, 인간 대상 시험 결과를 전혀 보고하지 않았습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.26029",
          "title": "Serialization Tax in Shared-Latent Exchangeable Decisions",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26029"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "아이템 확률을 따로따로 구해서 합치면 전체 결정을 그르치는 문제가 있었습니다",
            "easy1_desc": "시스템이 각 아이템의 점수를 따로 매긴 뒤에 숨은 아이템들이 충분히 성공하는지를 두고 결정을 내리는데요, 이때 아이템들이 불확실한 숨은 상태를 공유하고 있다면 독립적으로 처리할 때 평균은 유지되지만 전체 사후 분포의 의존성이 사라져 버린다는 거예요. 연구진은 이러한 오류를 직렬화 세금(serialization tax)이라고 불렀는데요, 정확한 아이템 확률이 오히려 그룹 단위의 결정을 부정확하게 만든다는 말이에요. 쉽게 말하면, 개별 계산은 맞았는데 전체를 묶어 보는 과정에서 오차가 생기는 셈이라는 겁니다.",
            "easy2_title": "숨은 블록을 찾아내 처리하는 방식을 도입해 오차를 줄이고 유틸리티를 높였습니다",
            "easy2_desc": "그래서 연구진은 결정 경계 근처에 불확실성이 남아 있는 큰 숨은 블록을 찾아내 더 풍부한 사후 분포 헤드로 보내는 TaxScore 방식을 제안했는데요, 영화 추천 데이터셋인 MovieLens 1M과 10M을 실제로 검증해 봤더니 기존 헤드들이 음의 로그 우도(NLL)와 유틸리티를 개선하는 결과로 이어졌다는 거예요. 이렇게 라우팅을 거치면 전체 인구 기준 유틸리티에서 0.006에서 0.012 사이의 이득을 얻을 수 있다는 장점이 있는데, 대신 대상을 골라내고 분류하는 추가 연산 과정이 복잡해질 수 있다는 점도 같이 따라온다는 겁니다.",
            "topic": "아이템들을 독립적으로 처리할 때 발생하는 직렬화 세금(serialization tax) 오류를 분석하고, 이를 해결하기 위한 TaxScore 라우팅과 사후 분포 개선 방식을 제안한 연구예요.",
            "one_line": "공유 숨은 상태에서 생기는 직렬화 세금 오류를 분석하고 TaxScore 라우팅으로 개선했어요.",
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
          "canon_id": "2611.26024",
          "title": "ForeSeek: Foresight-Driven Reasoning for Long-Form Video Understanding",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26024"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존의 방식은 영상 전체를 보지 못하고 눈앞의 조각만 쫓아갔다",
            "easy1_desc": "멀티모달 대형 언어 모델 기반의 영상 에이전트들이 긴 영상을 이해하는 연구를 혁신하고 있는데요, 문제는 이 에이전트들이 전체적인 시간 계획 없이 그때그때 국소적인 특징만 보고 영상을 찾아오는 데 갇혀 있다는 거예요. 쉽게 말하면, 전체 흐름을 모른 채 눈앞에 띄는 조각만 쫓아가는 셈이라는 말이에요.",
            "easy2_title": "미리 예상하고 찾아보는 방식을 도입해 효율을 크게 높였다",
            "easy2_desc": "그래서 연구진은 보이지 않는 시간에 대한 시각적 기대를 세우고 필요한 부분만 확인하며 빗나간 예상을 단서 삼아 되짚어가는 포시크(ForeSeek)를 개발했는데요, 이 방식은 영상을 미리 내다보고 탐색하는 구조로 바꾼다는 거예요. 프레임을 훨씬 적게 보면서도 정확도는 비슷하거나 더 높여준다는 장점이 있는데, 대신 두 단계의 훈련 과정을 거쳐야 한다는 점도 같이 따라온다는 겁니다.",
            "topic": "긴 영상 이해 과정에서 전체적인 시간 계획 없이 찾아오던 한계를 극복하기 위해, 미리 예상하고 탐색하는 포시크(ForeSeek) 에이전트를 제안하고 성능을 검증한 내용이에요.",
            "one_line": "긴 영상 이해를 위해 예측 기반 탐색 에이전트를 개발하고 성능을 검증했어요.",
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
          "canon_id": "2611.26012",
          "title": "When Agents Play Differently: Localizing Human--Agent Behavioral Divergence with Conditional Distributional Testing",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26012"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "에이전트가 사람처럼 행동하는지 평균만 보면 놓치는 게 많습니다",
            "easy1_desc": "연구진은 인공지능 에이전트가 사람처럼 행동하는지 평가하려면 단순한 평균 결과가 아니라 상황별 전체 행동 분포를 비교해야 한다고 봤는데요, 그래서 상황별 셀 안에서 비모수적 불일치 통계를 계산하고 에이전트 행동이 사람과 어디서 달라지는지 찾아내는 층화 프레임워크를 제안했어요. 세션 수준의 승패 지표는 평균 비교 이상의 신호를 거의 주지 않지만, 이동 효율성 같은 과정 수준의 지표는 진짜 행동 차이를 보여준다는 겁니다. 뭔 소리냐면, 겉으로 드러난 승패만 보면 차이를 놓치기 쉽지만 과정을 뜯어보면 어디서 달라지는지 확실히 알 수 있다는 말이에요.",
            "easy2_title": "상용 게임에 적용해 보니 특정 모드에서 차이가 확 드러났습니다",
            "easy2_desc": "그래서 상용 매치-3 게임에 이 방식을 적용해 봤는데요, 전체 집계 지표로는 안 보이던 패턴이 드러났다는 거예요. 테스트용 봇이 어떤 게임 모드에서는 사람과 크게 달라지지만, 다른 모드에서는 차이가 전혀 감지되지 않는다는 걸 밝혀냈거든요. 연구진은 재현성과 활용을 돕기 위해 구현 코드를 오픈소스로 공개했다고 밝혔습니다. 쉽게 말하면, 구체적인 상황을 쪼개서 비교해야 에이전트의 진짜 버릇을 찾아낼 수 있다는 셈이에요.",
            "topic": "인공지능 에이전트와 사람의 행동 차이를 상황별로 찾아내는 층화 프레임워크 제안과 상용 게임 적용 결과에 대한 내용이에요.",
            "one_line": "사람과 에이전트의 행동 차이를 찾는 프레임워크를 개발하고 게임에 적용했어요.",
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
          "canon_id": "2611.26007",
          "title": "System-One RSI: Building Muscle Memory for Interactive Agents through Guided Practice",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26007"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "생각이 많은 모델은 빠르게 움직이기 어렵다는 게 문제였어요",
            "easy1_desc": "추론 모델들은 멀티모달 과제를 잘 이해하지만, 고민하는 시간이 길어져서 1초도 안 걸리는 실시간 제어는 어렵다는 문제가 있는데요. 그렇다고 빠른 결정 모델을 쓰자니, 프롬프트나 몇 가지 예시만으로는 새로운 과제에 꼭 필요한 세밀한 경험을 채워 주기가 어렵거든요. 쉽게 말하면, 똑똑한 모델은 느리고 빠른 모델은 경험이 부족하다는 말이에요.",
            "easy2_title": "연습을 통해 반사 신경을 기르는 시스템을 만들었더니 성능이 확 올랐어요",
            "easy2_desc": "그래서 연구진은 코칭을 받는 운동 학습 방식에서 영감을 받아, 두 가지 고리로 이루어진 시스템원 재귀적 자기 개선(System-One Recursive Self-Improvement, System-One RSI)이라는 방법을 제안했는데요. 안쪽 고리에서는 빠른 의사결정 모델과 의사결정 나무를 써서 실시간으로 행동하고, 바깥쪽 고리에서는 추론 에이전트 팀이 이 기록을 바탕으로 모델을 계속 훈련하고 고쳐 나간다는 거예요. 스네이크 게임에서는 평균 점수가 1.30에서 7.35로 뛰었고, 흑신화: 오공 전투에서는 공격 정책 승률이 0%에서 66.7%까지 올랐다는 장점이 있는 반면, 적은 수의 실제 에피소드로 작동한다는 조건이 붙는다는 겁니다.",
            "topic": "추론 모델의 느린 속도를 보완하기 위해 실시간 제어와 자기 개선 과정을 연결한 새로운 학습 프레임워크를 제안하는 내용이에요.",
            "one_line": "실시간 제어와 자기 개선을 묶은 학습법을 제안하고 게임에서 성능을 높였어요",
            "topic_tag": "AI 모델·학습법",
            "limit": "적은 수의 실제 에피소드로 작동한다는 조건이 있으며, 전문가 시범이나 환경 수정 등이 필요 없다고 했어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.25991",
          "title": "From AI Surrogate to Engineering Tool: Toward Production Use of Fiber-Orientation Prediction in Crash CAE",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25991"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "섬유 방향을 미리 알기 힘들고 오래 걸렸던 문제",
            "easy1_desc": "유리섬유 강화 플라스틱 부품의 충돌 시뮬레이션은 재료 모델에 들어가는 섬유 방향 데이터에 아주 민감한데요. 원래 방식인 수지 유동 분석을 쓰려면 성형 전문가의 도움이 필요하고 부품 하나당 작업 시간이 약 25시간이나 걸린다는 문제가 있었거든요. 그래서 연구진은 이 병목 현상을 해결하려고 약 3분 만에 섬유 방향을 예측하는 대리 모델을 전에 제안했는데요. 이번 논문은 그 모델을 혼다 설계 실무에서 쓸 수 있는 엔지니어링 도구로 바꾼 실현 과정과 검증 내용을 다룬다는 말이에요.",
            "easy2_title": "대리 모델을 현장 도구로 바꿔 작업 시간을 크게 줄였다",
            "easy2_desc": "그래서 연구진은 2D 평판부터 실제 양산 부품까지 단계별 검증을 거치고, 2025년 3월에 설계 사용 승인을 받아 충돌 안전 그룹에 시스템을 넘겨 제한적으로 쓰고 있다고 밝혔는데요. 주입구 설정 지원부터 voxelization과 대리 모델 추론, 충돌 CAE 모델로의 자동 매핑까지 하나의 GUI에 담았다는 겁니다. 전체 준비 과정이 약 0.1시간으로 줄어 기존의 25시간 걸리던 유동 분석 방식보다 시간이 99.6%나 줄어드는 장점이 있는데, 대신 성형 전문가 없이도 충돌 CAE 엔지니어가 직접 돌릴 수 있게 되었다는 점이 다르다는 말이에요.",
            "topic": "섬유 방향 예측 대리 모델을 혼다의 실제 충돌 CAE 설계 실무에 적용해 작업 시간을 크게 줄인 시스템 개발과 검증 내용이에요.",
            "one_line": "섬유 방향 예측 대리 모델을 충돌 CAE 실무 도구로 구현하고 검증했어요.",
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
          "canon_id": "2611.25950",
          "title": "GaussTrans: A Gaussian Interface Framework for Multi-Layer Refractive Transport",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25950"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "겹겹이 투명한 곳은 빛이 꺾이는 걸 정확히 잡기가 워낙 까다롭거든요",
            "easy1_desc": "연구진은 여러 겹의 투명한 면을 통과하는 빛의 전달을 정확히 묘사하고 싶었는데요, 기하학적 구조나 빛의 경로, 관측 결과에서 오차가 뒤엉키기 때문에 층수가 많을수록 뼈를 깎는 골칫거리가 된다는 겁니다. 기존 방법들은 아예 층수를 줄이거나 빛의 길을 단순화해서 풀었지만, 그러다 보니 복잡한 고차 투명 장면에 곧바로 써먹기에는 한계가 명확했다는 말이에요. 쉽게 말하면, 겹이 많아질수록 엉키는 오차를 손댈 방법이 마땅치 않았던 셈이라는 겁니다.",
            "easy2_title": "그래서 GaussTrans를 내놓고 높은 정확도와 가벼운 용량을 다 잡았다고 합니다",
            "easy2_desc": "이 문제를 풀려고 연구진은 가우시안 인터페이스 프레임워크인 GaussTrans를 제안했는데요, 하이브리드 표면과 광로 결합 정제, 그리고 프리미티브 유도 암시적 교차라는 세 가지 축으로 이루어져 있습니다. 실험을 해봤더니 RefRef 같은 데이터셋에서 공간 저장 공간은 적게 차지하면서도 훨씬 높은 정확도를 보여줬다고 주장했는데요, 복잡한 투명 장면을 다루는 데 유리하다는 장점이 있는 반면 구조가 복잡해진다는 점도 같이 따라온다는 겁니다. 쉽게 말하면, 저장 공간은 아끼면서 빛의 전달을 정확히 구현하는 도구라는 말이에요.",
            "topic": "여러 겹의 투명한 면을 통과하는 빛의 전달을 정확히 재구성하기 위해 가우시안 기반의 프레임워크인 GaussTrans를 제안했다는 내용이에요.",
            "one_line": "가우시안 기반 프레임워크인 GaussTrans를 제안해 다중 투명면의 빛 전달을 정확히 재구성했어요.",
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
              "easy2_title 한 줄 아님/너무 김(46자)",
              "one_line 56자"
            ],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.25926",
          "title": "ROAM-GRPO: Enforcing Reasoning Diversity in GRPO via Routed Off-mode Approach Mining",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25926"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "왜 똑같은 답만 내놓고 헤매게 되었나",
            "easy1_desc": "연구진은 사람이 직접 고친 글과 검증 가능한 보상을 쓰는 강화학습(RLVR)을 함께 썼더니, 큰언어모델(LLM)이 하나의 뻔한 생각에 갇히는 현상이 생겼다고 밝혔는데요. 모델이 뱉어내는 답이 거의 똑같아지다 보니, 여러 개를 뽑아 맞춰보는 성능인 pass@k가 오히려 정체되거나 나빠진다는 거예요. 뭔 소리냐면, 새로운 생각은 안 하고 기존에 알던 안전한 답만 계속 반복해서 엉뚱한 문제에서는 약해진다는 말이지요. 쉽게 말하면, 똑똑해지기는 했는데 융통성이 확 줄어든 셈이라는 겁니다.",
            "easy2_title": "새로운 생각의 길을 열어 다른 방식으로 답하게 했다",
            "easy2_desc": "그래서 연구진은 ROAM-GRPO라는 새로운 방식을 더해, 모델이 서로 다른 생각의 방식을 적극적으로 찾아내도록 만들었는데요. 잘 풀리는 문제는 따로 빼내어 색다른 전략으로 답하게 하고, 그 답이 논리적으로 맞는지 LLM 판사로 검증한 뒤 다시 모델 스스로에게 가르치게 했다는 거예요. Qwen3.5-2b 모델을 MATH lvl5 데이터셋의 1,000문제로 학습시켜 봤더니, 까다로운 평가셋에서 가장 높은 pass@16이 4.7% 늘어났고 올바른 임베딩 코사인 거리는 약 1.5배에서 2배로 커졌다는 장점이 생겼다는 겁니다. 대신 과정이 복잡해져서 검증 단계가 더 들어간다는 점도 함께 따라온다는 거지요. 쉽게 말하면, 뻔한 모범답안만 내던 습관을 고쳐서 다양한 방법으로 고민하게 만들었다는 말입니다.",
            "topic": "큰언어모델이 복잡한 추론을 할 때 갇히는 뻔한 생각의 틀을 깨기 위해, 다양한 풀이 방식을 스스로 찾고 검증하게 만드는 ROAM-GRPO 알고리즘을 제안한 연구예요.",
            "one_line": "서로 다른 추론 방식을 찾게 만드는 ROAM-GRPO를 제안했어요.",
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
          "canon_id": "2611.25905",
          "title": "Validation-driven Deployment of LLM Inference Platforms for Agentic Workloads",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25905"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "제대로 된 검증 없이 도구만 썼던 게 문제였어요",
            "easy1_desc": "기업들이 에이전틱 작업(Agentic Workloads, 자율 에이전트 작업)을 직접 열린 가중치 모델로 옮기고 있는데요, 그동안은 검증 기준이 뚜렷하지 않은 임시 도구에만 의존해 왔다는 겁니다. 뭔 소리냐면, 검증 방법이 정확한지 확인조차 제대로 안 된 상태에서 배포를 진행해 왔다는 말이에요.",
            "easy2_title": "처음부터 끝까지 검증하는 파이프라인을 만들어 봤어요",
            "easy2_desc": "그래서 연구진은 에이전틱 대형 언어 모델(LLM) 서비스를 위한 처음부터 끝까지의 평가 파이프라인을 만들었는데요, 작은 테스트부터 실제 운영까지 전 과정을 이어주는 설계를 실제로 검증해 봤다는 겁니다. 그 결과 기존 방식보다 세션별 토큰 부하를 훨씬 더 정확하게 재현할 수 있게 되었다고 하는데요, 다만 실제 환경과 완전히 똑같지는 않다는 점도 같이 따라온다는 겁니다.",
            "topic": "기업들이 자율 에이전트 작업을 자체 모델로 배포할 때 쓸 수 있는, 처음부터 끝까지 이어지는 검증 평가 파이프라인을 제안하고 그 설계를 검증한 내용이에요.",
            "one_line": "에이전틱 모델 서빙을 위한 전체 검증 평가 파이프라인을 개발했어요.",
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
          "canon_id": "2611.25903",
          "title": "From Cases to Criteria: Reusing Evaluation Knowledge for Task-Specific Rubric Generation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25903"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존에는 예전 평가 기록을 통째로 쓰거나 쪼개 써서 한계가 있었는데요",
            "easy1_desc": "연구진은 LLM 평가를 더 꼼꼼하고 투명하게 만들려고 할 때, 예전 평가 기준을 가져다 쓰는 방식에 문제가 있었다고 봤는데요. 통째로 가져오면 상관없는 일까지 끌고 오게 되고, 쪼개 쓰면 전체 평가 구조를 잃어버리는 단점이 있거든요. 뭔 소리냐면, 예전 경험을 제대로 연결해서 쓰지 못했다는 말이에요.",
            "easy2_title": "개념 단위로 엮는 지식 그래프를 써서 평가 기준을 더 잘 만들도록 했어요",
            "easy2_desc": "그래서 연구진은 RubricDuo라는 방법을 내놓았는데요. 평가 차원과 공통 개념, 지역 개념, 세부 기준, 쿼리를 지식 그래프로 엮어서 예전 평가 경험을 재사용한다는 겁니다. RubricBench와 HealthBench에서 실험을 해 봤더니, 사람이 만든 평가 기준과 맞추는 일과 LLM 심사에서 평가 대상이 된 자동 방법들 가운데 가장 좋은 성능을 보였다는 거예요.",
            "topic": "대형 언어 모델(LLM) 평가를 위해 예전 평가 기록을 개념 단위로 연결해 새로운 평가 기준(루브릭)을 자동으로 만드는 RubricDuo 방법론을 제안한 연구예요.",
            "one_line": "예전 평가 기록을 개념 지식 그래프로 엮어 자동 평가 기준을 만드는 루브릭듀오를 개발했어요.",
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
              "one_line 51자"
            ],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.25896",
          "title": "The Price of an Explanation: What Demanding Verifiable Artifacts Costs, and What It Buys Back",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25896"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "정답만 내놓던 생성형 모델에 실행 가능한 프로그램을 요구해 봤더니 어떤 문제가 생겼나",
            "easy1_desc": "연구진은 생성형 모델이 내놓는 후보들 중에서 뭘 골라야 할지 모르겠을 때 실행할 수 있는 프로그램을 함께 받아내는 방식을 써봤는데요, 이렇게 검증 가능한 결과물을 요구하면 성능이나 컴퓨터 자원 측면에서 비용이 얼마나 드는지 120개의 과제로 이루어진 ARC-AGI-2 평가 세트에서 측정해 봤다는 거예요. 그랬더니 모델의 점수가 120개 중 93개에서 68개로, 즉 77%에서 57%까지 뚝 떨어졌다는 말이에요. 쉽게 말하면, 확실한 검증 장치를 붙이려다가 오히려 정답을 맞히는 전체 실력은 깎였다는 셈이에요.",
            "easy2_title": "검증 프로그램을 만들게 하니 성능은 떨어졌지만 대신 어떤 이득과 해결책이 생겼나",
            "easy2_desc": "성능이 떨어지는 단점이 생기긴 했는데요, 장점은 이미 뽑아 둔 프로그램 두 개를 살짝 진화시키는 짧은 탐색 방식을 쓰면 모델을 추가로 돌리는 비용 없이도 기본 방식보다 9.2에서 9.9개 정도의 과제를 더 잘 풀게 만들 수 있다는 거든요. 게다가 프로그램이 훈련 예제에 맞는지 확인할 수 있기 때문에 과제가 풀리는 즉시 일을 끝낼 수 있어서 자원을 최대 49%까지 아낄 수 있다는 말이에요. 쉽게 말하면, 틀릴 위험이 커지는 대신 확실한 검증과 자원 절약이라는 무기를 챙기게 됐다는 겁니다.",
            "topic": "생성형 모델에 검증 가능한 프로그램을 요구할 때 드는 비용과 그 대책을 측정하고 분석한 내용이에요.",
            "one_line": "생성형 모델에 검증 프로그램을 요구할 때의 비용과 대책을 측정했어요.",
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
            "evidence_by_symbols": 4,
            "bad_numbers": [],
            "format": [
              "easy1_title 한 줄 아님/너무 김(47자)"
            ],
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.25891",
          "title": "Meta-RTL: Evolving Agent Harnesses for RTL Optimization",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25891"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존의 탐색 방식은 사람이 직접 손으로 짜야 했다",
            "easy1_desc": "대형 언어 모델이 EDA 피드백을 쓰면서 RTL 최적화를 할 수 있게 되었는데요, 지금까지는 그 실행을 위한 탐색 절차를 사람이 직접 손으로 일일이 짜야 했다는 한계가 있었어요. 뭔 소리냐면 AI가 일을 할 때 쓰는 기본 틀이나 도구를 사람이 직접 다 만들어 줘야 했다는 말이에요. 그래서 연구진은 이 탐색 과정을 자동으로 발전시키는 방식을 시도해 봤다는 겁니다.",
            "easy2_title": "자동으로 발전하는 틀을 만들었더니 위반 사항이 줄었다",
            "easy2_desc": "그래서 연구진은 최적화 모델과 EDA 흐름은 그대로 둔 채 최소한의 반복문에서 시작해 RTL 최적화 도구를 진화시키는 Meta-RTL이라는 틀을 선보였는데요, 이걸 써 봤더니 20개의 개발 디자인에서 WNS와 TNS 위반이 각각 7.8%와 11.0% 줄었다고 해요. 70%의 디자인에서는 면적도 줄어드는 장점이 있는데, 대신 처음부터 끝까지 진화 과정을 거쳐야 한다는 점도 같이 따라온다는 겁니다.",
            "topic": "연구진은 사람이 손으로 짜던 RTL 최적화 탐색 절차를 자동으로 진화시키는 프레임워크인 Meta-RTL을 개발해, 위반 사항과 합성 면적을 줄였다고 밝혔어요.",
            "one_line": "RTL 최적화 도구를 자동으로 진화시키는 Meta-RTL을 개발했어요.",
            "topic_tag": "반도체·하드웨어",
            "limit": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.25884",
          "title": "Trustworthy Geospatial AI Workflows: Reproducible Maritime Analytics and Forecasting on Open-Source AIS Data",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25884"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "공개된 위치 데이터는 많지만 AI가 쓰기엔 고르지 않다는 게 문제였어요",
            "easy1_desc": "공공 지리 공간 데이터가 늘어나면서 해양 분석과 예측 모델링 기회가 많아졌는데요, 데이터 출처나 보고 주기, 빠진 값 같은 특성이 AI 모델에 어떤 영향을 주는지 꼼꼼히 따져봐야 한다는 겁니다. 데이터가 그냥 많다고 해서 바로 쓰기에 완벽하진 않다는 말이에요. 쉽게 말하면, 원재료가 제각각이라 씻고 다듬는 과정이 꼭 필요하다는 셈입니다.",
            "easy2_title": "시물라 연구소의 공개 라이브러리를 활용해 재현 가능한 해양 AI 워크플로우를 만들었어요",
            "easy2_desc": "그래서 연구진은 시물라 연구소(Simula Research Laboratory)에서 개발한 오픈소스 라이브러리인 다마스트(damast)를 바탕으로, 메타데이터 검증부터 재현 가능한 머신러닝 실험까지 가능한 해양 지리 공간 AI 워크플로우를 선보였는데요, 트랜스포머(Transformer) 기반 선박 궤도 예측 모델을 써서 그 가능성을 직접 보여줬다는 겁니다. 데이터 처리 과정을 투명하게 만들 수 있다는 장점이 있는데, 앞으로 신뢰성 측면의 확장 기능까지 더하려면 추가 개발이 필요하다는 점도 같이 짚어 뒀어요. 쉽게 말하면, 투명하고 믿을 수 있는 해양 AI를 만드는 뼈대를 튼튼하게 다진 셈입니다.",
            "topic": "공개된 AIS 데이터를 바탕으로 투명하고 재현할 수 있는 해양 지리 공간 AI 워크플로우를 구축한 연구예요.",
            "one_line": "공개 AIS 데이터 기반의 재현 가능한 해양 AI 워크플로우를 개발했어요",
            "topic_tag": "AI 모델·학습법",
            "limit": "현재 워크플로우에서 보여준 기능과 앞으로 신뢰성 중심 개발을 위해 필요한 구성 요소를 서로 구분해 두었습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
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
            "format": [
              "easy2_title 한 줄 아님/너무 김(48자)"
            ],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.25879",
          "title": "Coherent belief and opinion propagation produces more echo chambers: corrected version",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25879"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "에코 체임버가 왜 생기는지 의견과 믿음을 같이 보려 했습니다",
            "easy1_desc": "소셜 네트워크에서 비슷한 사람들끼리만 뭉치는 에코 체임버 현상이 어떻게 생기는지 알아보기 위해, 기존의 의견 역학 모델에 믿음 병합 연산을 더해 봤는데요. 에코 체임버란 동질성과 분리, 그리고 강화라는 세 가지 특징을 만족하는 집단을 말해요. 연구진은 의견뿐만 아니라 의견을 뒷받침하는 믿음까지 함께 퍼뜨렸을 때 어떤 일이 생기는지 확인하려 했다는 겁니다. 쉽게 말하면, 사람들의 생각뿐만 아니라 생각의 바탕이 되는 믿음까지 연결해서 에코 체임버가 만들어지는 과정을 추적해 본 셈이에요.",
            "easy2_title": "의견과 믿음을 같이 묶었더니 에코 체임버 속 인원은 줄고 현상은 늘었습니다",
            "easy2_desc": "그래서 다양한 초기 조건과 관용도를 설정해 시뮬레이션을 돌려봤는데요. 그 결과, 의견과 믿음을 서로 연결하고 일관성을 유지하게 만들었더니 믿음 에코 체임버의 수는 더 늘어나는 것으로 나타났어요. 대신 여기에 참여하는 전체 에이전트의 수는 오히려 줄어드는 경향을 보인다는 장단점이 같이 나타난다는 겁니다. 쉽게 말하면, 믿음이 촘촘하게 묶일수록 좁고 단단한 에코 체임버가 생긴다는 말이에요.",
            "topic": "소셜 네트워크에서 의견과 믿음을 함께 전파했을 때 에코 체임버 형성에 미치는 영향을 모델링하고 시뮬레이션으로 확인한 연구예요.",
            "one_line": "의견과 믿음의 전파가 에코 체임버에 미치는 영향을 시뮬레이션으로 분석했어요.",
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
          "canon_id": "2611.25868",
          "title": "Generalist Meets Specialists: An Evolving Multimodal Agent with Persistent Tool Orchestration for Traffic Scenario Understanding",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25868"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "교통 상황을 이해하는 일이 왜 어려웠냐면",
            "easy1_desc": "교통 상황을 파악하려면 눈에 보이는 증거와 시간 흐름에 따른 추론을 합쳐야 하는데요, 그동안은 도구를 쓰는 비전-언어 모델(VLM)이 중간 결정을 내릴 때 안내가 부족해서 실수했을 때 고치기가 어려웠다는 거예요. 게다가 비슷한 일을 할 때마다 계속 계획을 짜야 하니 불필요한 비용이 늘어난다는 단점도 있거든요. 쉽게 말하면, 정답만 보고 배우다 보니 중간 과정을 헤매고 매번 똑같은 짓을 반복하느라 비효율적이었다는 말이에요.",
            "easy2_title": "그래서 빠르게 처리하고 경험을 쌓는 방식을 섞어 봤습니다",
            "easy2_desc": "연구진은 사람의 빠른 생각과 느린 생각을 본뜬 스타티브 에이전트(StarTV-Agent)를 제안했는데요, 필요할 때는 적응형 추론을 쓰고 아닐 때는 전에 쌓은 경험을 효율적으로 다시 쓴다는 거예요. 학습할 때는 과정의 이점과 최종 이점을 합치고 약한 문제를 보완하는 방식을 썼고요, 추론할 때는 적절한 작업 흐름을 골라 빠르게 처리하거나 마땅한 흐름이 없을 때만 느린 경로로 해결한다는 겁니다. 그렇게 했더니 성능은 최대 8.0% 나아지고 토큰 쓰임은 최대 52.1% 줄었다는 장점이 생겼다는 셈이에요.",
            "topic": "복잡한 교통 상황을 잘 이해하기 위해 빠른 경험 재사용과 느린 추론을 합친 멀티모달 에이전트인 스타티브 에이전트를 개발했다는 이야기예요.",
            "one_line": "교통 상황 이해를 위해 경험 재사용과 추론을 합친 에이전트를 개발했어요.",
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
          "canon_id": "2611.25861",
          "title": "Decoupled Knowledge Retrieval and Compact Memory Enable Reliable Lifelong Model Editing",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25861"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 모델 수정 방식은 메모리 부족과 성능 저하가 문제였어요",
            "easy1_desc": "거대 언어 모델(LLM)을 다시 학습시키지 않고 새로운 정보를 계속 추가하는 평생 모델 수정 방식이 있는데요, 기존에는 메모리 기반 편집기를 쓰면 수정 횟수가 늘어날수록 저장 공간이 선형적으로 커지고 정보를 찾아오는 성능이 떨어지는 문제가 있었거든요. 쉽게 말하면, 지식을 쌓을수록 모델이 점점 무거워지고 기억력도 나빠지는 셈이에요.",
            "easy2_title": "지식 저장과 검색을 분리해서 모델을 효율적으로 고쳤어요",
            "easy2_desc": "연구진은 BiSpace라는 새로운 틀을 제안했는데, 정보를 찾는 외부 공간과 지식을 모델에 주입하는 내부 공간을 분리한 것이 핵심이에요. 이렇게 하면 필요한 정보만 골라서 효율적으로 업데이트할 수 있거든요. 결과적으로 저장 공간은 기존의 10.2% 수준으로 줄이면서도 16,000번의 수정까지 안정적으로 견디는 성능을 보여줬다는 겁니다.",
            "topic": "평생 모델 수정 과정에서 발생하는 저장 공간과 성능 문제를 해결하기 위해 지식 검색과 주입 과정을 분리하는 BiSpace 프레임워크를 제안했어요.",
            "one_line": "지식 검색과 주입을 분리하여 모델 수정의 효율성과 성능을 높였어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.25841",
          "title": "Whose Risks Count? What 1,901 AI Incidents Reveal About Corporate Disclosures",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25841"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 회사가 위험을 숨기고 있어서 문제가 됐는데요",
            "easy1_desc": "인공지능(AI) 시스템이 사람들에게 해를 끼칠 수 있는데도 기업들이 이런 위험을 밝힐 의무가 거의 없다는 점이 문제였어요. 증권거래위원회(SEC)에 등록된 미국 기업들은 중요한 위험을 보고해야 하는데요, 문제는 이 중요성이 투자자의 관점에서 결정된다는 점이에요. 그래서 일반 사람들이 입는 피해는 기업의 재무적 위험이 될 때만 공시에 들어간다는 말이에요. 결국 기업들이 어떤 위험을 드러내고 감추는지 확인해 봐야 한다는 겁니다.",
            "easy2_title": "9천여 건의 사고를 분석해 보니 재무적 위험만 기록되더라",
            "easy2_desc": "연구진은 9,001개의 AI 사고를 328개 AI 기업의 18,229개 증권 보고서와 짝지어 분석해 봤는데요. 사고 전후에 보고서가 있는 1,901건 중 절반은 기업이 한 번도 공개하지 않은 위험 유형에 속한다는 사실이 드러났어요. 구체적으로 시스템 고장 위험은 67%나 공시한 반면 사회적 시스템 피해는 고작 2%만 다뤘고 기업 스스로 보고한 사고도 2%가 안 된다는 겁니다. 쉽게 말하면 증권 공시는 사람들이 겪는 피해가 아니라 기업이 겪는 위험만 기록하고 있다는 셈이에요.",
            "topic": "인공지능 사고와 증권 공시 데이터를 비교하여 기업들이 어떤 위험을 보고하고 누락하는지 분석한 연구예요.",
            "one_line": "AI 사고와 증권 공시 데이터를 짝지어 기업의 위험 공개 실태를 분석했어요.",
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
            "bad_numbers": [
              "9"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 안전·평가",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.25839",
          "title": "Self-Replicating Language Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25839"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "거대언어모델이 생명체처럼 스스로 복제할 수 있을까",
            "easy1_desc": "연구진은 다윈의 진화론적 관점에서 거대언어모델(LLM)과 이를 기반으로 한 에이전트가 생명체의 특성을 가질 수 있는지 궁금해했는데요. 생명체라면 환경에 맞춰 스스로 적응하고 진화해야 하는데, 과연 언어모델이 그런 능력을 갖췄는지 확인해 보고 싶었던 겁니다. 그래서 언어모델이 자신을 복제하는 여러 방식을 직접 실험해 봤다는 말이에요.",
            "easy2_title": "작은 모델은 진화가 가능하지만 큰 모델은 아직 어렵다",
            "easy2_desc": "실험 결과 작은 언어모델들은 유전자를 생성해 자손을 학습시키거나 가중치를 복제하고 변이시키는 방식으로 스스로를 복제하고 진화할 수 있었는데요. 선택 과정을 통해 모델 성능이 개선되고 특정 환경에 적응하는 모습도 보였거든요. 다만 거대언어모델은 이런 복제기를 작성할 수는 있어도, 자손을 가르쳐 복제하는 방식은 기술적·경제적으로 아직 불가능하다고 연구진은 밝혔습니다.",
            "topic": "언어모델의 자기 복제 가능성과 다윈주의적 진화 관점에서의 적응 능력을 분석했어요.",
            "one_line": "언어모델의 자기 복제와 진화 가능성을 실험하고 그 한계를 분석했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "거대언어모델이 자손을 가르쳐 복제하는 것은 현재 기술적·경제적으로 불가능한 상태입니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.25818",
          "title": "Anchor and Check: Deterministic Cross-Prompt, Cross-Model Reconciliation for Auditable LLM Decisions",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25818"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "대형 언어 모델이 알아서 결정하게 두면 믿을 수 있나",
            "easy1_desc": "대형 언어 모델(LLM)이 혼자서 중요한 결정을 내리게 할 때, 사람이 일일이 안 봐도 되는 결정인지 어떻게 믿고 맡길지가 늘 문제였거든요. 연구진은 모델이 낸 첫 답변을 고정하고 다른 경로로 검증해서 딱 맞아떨어질 때만 자동으로 실행하는 방식을 살펴봤는데요. 뭔 소리냐면, 그냥 믿고 맡기는 게 아니라 서로 다른 묻는 방식이나 다른 모델을 동원해서 복수의 확인을 거친다는 말이에요. 쉽게 말하면, 혼자 낸 답을 그대로 믿지 않고 여러 번 크로스체크를 해서 확실할 때만 움직이겠다는 셈이에요.",
            "easy2_title": "여러 모델을 섞어 검증해 봤더니 확실히 더 정확해졌다",
            "easy2_desc": "그래서 연구진이 6,000개의 질문을 바탕으로 48,000번의 모델 평가를 진행해 봤더니, 다른 회사의 모델을 섞어서 샘플을 모으는 방식이 성능을 확 높여준다는 결과가 나왔는데요. 같은 모델의 온도만 바꿔서 확인하는 방식은 가장 약한 방법이었다는 겁니다. 장점은 엄격한 기준을 적용했을 때 전체 항목의 70%를 자동으로 처리하면서도 오류의 16%까지 걸러낼 수 있다는 점인데요, 대신 기록을 남겨 재현할 수는 있지만 호스팅된 API 자체에서는 생성 과정이 완벽히 똑같이 재현되지는 않는다는 한계도 같이 나타났다는 거예요.",
            "topic": "대형 언어 모델의 결정을 감시하고 자동화하기 위해 서로 다른 경로의 답변을 교차 검증하는 계약 방식을 평가한 연구예요.",
            "one_line": "대형 언어 모델의 결정 신뢰도를 높이기 위해 교차 검증 계약 방식을 평가했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "호스팅된 API 환경에서는 모델 생성 과정 자체를 완벽하게 똑같이 재현할 수는 없다는 한계가 있어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.25793",
          "title": "When Safety Rationales Hallucinate: Diagnosing and Grounding Multimodal Safety Guards",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25793"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "안전 이유를 대는 건 좋은데, 믿을 만한지 따져봤습니다",
            "easy1_desc": "멀티모달 안전 가드가 안전 예측과 함께 이유를 만들어 내는데, 이게 실제로 믿을 만한지 제대로 살펴보지 않았거든요. 연구진이 시각적 이유 환각과 안전 귀속 환각 두 가지 관점에서 꼼꼼히 조사해 봤더니, 이유 환각이 아주 널리 퍼져 있고 분류 정확도가 높거나 모델이 커져도 줄어들지 않는다는 걸 확인했습니다. 뭔 소리냐면, 모델이 맞히기는 잘해도 왜 맞혔는지 대는 이유는 엉터리일 때가 많다는 말이에요.",
            "easy2_title": "도구를 제대로 쓰게 만들어서 엉터리 이유를 확 줄였습니다",
            "easy2_desc": "그래서 연구진은 도구 사용이 도구 없는 기준보다 이유의 근거를 더 잘 잡을 때만 보상을 주는 도구 대비 근거 강화 학습인 TCG-RL을 제안했는데요. 이렇게 해 봤더니 경쟁력 있는 안전 예측 성능은 그대로 유지하면서 이유 환각은 확 줄어드는 장점이 있다는 겁니다. 결과만 맞히던 방식에서 이제는 정확하면서도 근거가 확실한 안전 결정으로 넘어가야 한다는 게 연구진의 주장이에요.",
            "topic": "멀티모달 안전 가드가 내놓는 예측 이유에 환각이 얼마나 생기는지 파악하고, 이를 줄이기 위해 도구 대비 근거 강화 학습 방법을 제안한 연구입니다.",
            "one_line": "멀티모달 안전 가드의 이유 환각을 진단하고 TCG-RL을 제안해 줄였다.",
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
          "canon_id": "2611.25773",
          "title": "Duopra: From Full-Duplex Conversation to Full-Duplex Agency",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25773"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "대화는 잘하는데 일 처리는 자꾸 막혔거든요",
            "easy1_desc": "기존의 실시간 대화 모델은 자연스러운 턴테이킹이나 끼어들기를 잘하지만, 사용자가 말을 바꿀 때 도구를 제때 부르고 인수를 수정하는 일 처리는 부족했는데요. 프론트엔드와 백엔드를 따로 두는 구조에서는 앞쪽이 요청을 제때 보내지 못하거나 덜 보낸 요청이 뒤쪽을 엉뚱한 길로 이끌기 쉽다는 말이에요. 실제로 스트리밍 파이프라인으로 테스트해 봤더니 도구가 실행되기도 전에 실패하는 경우가 대부분이었다는 겁니다.",
            "easy2_title": "대화와 일 처리를 동시에 하도록 듀오프라를 만들었거든요",
            "easy2_desc": "그래서 연구진은 대화 제어와 작업 실행을 함께 배우는 전이중 상호작용 모델인 듀오프라를 선보였는데요. 프로토콜 학습과 보상 기반 강화학습 등을 거쳐 백엔드를 도구처럼 다루도록 만들었다는 거예요. 같은 백엔드를 쓸 때 패스앳원 수치가 4.7%에서 44.7%로 뛰는 장점이 있지만, 복잡한 3단계 학습 과정을 거쳐야 한다는 점도 함께 따라온다는 겁니다.",
            "topic": "대화형 인공지능이 자연스러운 소통뿐만 아니라 도구 호출과 작업 실행까지 함께 해내도록 만드는 새로운 듀오프라 모델을 소개하고 성능을 평가한 내용이에요.",
            "one_line": "대화와 작업 실행을 함께 하는 듀오프라를 제안하고 성능을 높였어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.25721",
          "title": "MemMend: A Selective Revision Framework for Memory Question Answering",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25721"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "다 고치려니 비용도 많이 들고 맞았던 것도 망가지더라고요",
            "easy1_desc": "긴 기억에서 나온 모든 답변을 매번 수정하면 추론 비용이 엄청나게 들고 이미 맞았던 사실까지 망가질 수 있다는 점이 문제였는데요. 연구진은 그래서 꼭 필요한 답변만 골라서 수정하는 선별적 수정 프레임워크인 MemMend를 도입해 봤습니다. 이 방식은 불완전해 보이는 답변만 편집기로 보내고, 수정은 딱 정해진 정확한 텍스트 교체로만 처리한다는 거예요. 쉽게 말하면, 전체를 다 뜯어고치는 대신 문제가 있는 부분만 골라서 효율적으로 고치겠다는 말이에요.",
            "easy2_title": "필요한 곳만 골라서 고쳤더니 비용은 줄고 성능은 올랐어요",
            "easy2_desc": "그 결과 LoCoMo 개발 질문 1,986개에서 대화 매크로 F1 67.17과 평균 판정 점수 88.35를 기록해 검증된 수정 체인보다 각각 0.82포인트, 1.24포인트 향상되었다고 하는데요. 그러면서도 수정 호출은 62.37%나 더 적게 사용했다는 겁니다. 편집 인터페이스를 PropMem, Mem0, SimpleMem의 답변에 바로 적용했을 때도 F1이 각각 3.79포인트, 6.44포인트, 0.42포인트 올랐다는 장점이 있는데, 다만 소스 의무에 따른 독립적인 품질 이점은 아직 완전히 해결되지 않았다는 점도 함께 밝혔어요. 쉽게 말하면, 비용은 획기적으로 아끼면서도 품질은 더 높일 수 있는 새로운 기준점을 만들었다는 셈이에요.",
            "topic": "긴 기억 질문 응답에서 불필요한 전체 수정을 줄이고 필요한 부분만 골라서 고치는 선택적 수정 프레임워크를 제안하고 그 성능을 확인한 연구예요.",
            "one_line": "기억 기반 답변에서 필요한 부분만 골라 고치는 선택적 수정 프레임워크를 제안했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "소스 의무에서 오는 독립적인 품질 이점은 아직 해결되지 않은 과제로 남아 있습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.25673",
          "title": "CompAct-Bench: A Benchmark for Working-Context Compaction in Long-Horizon Agent Tasks",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25673"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "에이전트가 길게 일할수록 쌓이는 기록을 줄이기가 어려웠습니다",
            "easy1_desc": "언어 모델(Large Language Model) 에이전트가 긴 작업을 처리할 때 대화 기록, 도구 사용 결과, 중간 결정 등이 계속 쌓이게 되는데요, 이를 압축하는 기술이 필요하지만 실제 모델들이 얼마나 잘 해내는지는 그동안 잘 알려지지 않았다는 겁니다. 연구진은 그래서 에이전트 작업 수행 과정에서 문맥을 압축하는 능력을 평가하기 위해 콤팩트벤치(CompAct-Bench)라는 새로운 평가 도구를 도입해 봤는데요. 쉽게 말하면, 쌓인 기록을 줄여서 전달했을 때 에이전트가 원래 하던 일을 제대로 이어서 끝마치는지 그 한계를 낱낱이 시험해 본 셈이라는 말이에요.",
            "easy2_title": "최신 모델로 압축해 봤더니 정보가 왜곡되거나 잊혀지는 문제가 있었습니다",
            "easy2_desc": "실제로 클로드(Claude)와 지피티(GPT) 같은 최신 모델들을 시험해 봤는데요, 강하게 압축할수록 에이전트가 작업을 정확하게 해내는 능력이 크게 떨어진다는 결과를 얻었다는 겁니다. 장점은 복잡한 작업 기록을 줄일 수 있다는 점이지만, 단점은 압축 과정에서 풀리지 않은 문제를 끝난 것으로 착각하거나 이전에 찾은 결과를 잊어버려서 엉뚱한 결정을 내리거나 쓸데없는 작업을 반복하게 된다는 점인데요. 쉽게 말하면, 기록을 무작정 줄이다가는 에이전트가 핵심을 놓치고 오히려 엉뚱한 방향으로 튈 수도 있다는 것을 확인했다는 겁니다.",
            "topic": "언어 모델 에이전트가 긴 작업을 할 때 필요한 작업 문맥 압축 능력을 평가하는 새로운 벤치마크를 만들고 그 한계를 분석한 내용이에요.",
            "one_line": "긴 작업 속 에이전트의 문맥 압축 능력을 평가하는 벤치마크를 만들고 그 한계를 분석했어요.",
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
          "canon_id": "2611.25671",
          "title": "LATER: Learning Action-Conditioned Temporal Evidence Retrieval for Predictive World Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25671"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "초기 상호작용에 담긴 물리적 정보를 놓치고 있었어요",
            "easy1_desc": "물체와 처음 부딪히는 순간에는 나중에는 사라지는 물리적 특징들이 드러나는데요, 이런 정보들이 사실은 미래의 행동 결과를 결정짓는 핵심 열쇠거든요. 기존 모델들은 이런 초기 정보를 충분히 활용하지 못하고 나중 관측값에만 의존하는 문제가 있었어요. 쉽게 말하면, 물체의 성질을 파악할 중요한 단서를 버리고 시작했던 셈이에요.",
            "easy2_title": "행동 조건부 기억 장치를 도입해 예측 성능을 높였어요",
            "easy2_desc": "연구진은 LATER라는 모델을 새로 만들어 과거의 물리적 경험을 기억 장치에 따로 저장하고, 현재 행동에 맞춰 필요한 정보를 골라 쓰도록 했는데요. 이렇게 했더니 Two-Stage PushT 환경에서 성공률이 15.5%에서 25.0%로 올랐고, 물리적 상태를 읽어내는 오차도 크게 줄었다고 해요. 기존 방식보다 더 정확하게 미래를 예측하게 된 셈인데, 특히 방해 요소가 많은 상황에서 그 효과가 더 컸다는 겁니다.",
            "topic": "행동에 따른 물리적 증거를 기억 장치에서 효율적으로 불러와 예측 모델의 성능을 개선하는 방법이에요.",
            "one_line": "물리적 증거를 기억하는 행동 조건부 세계 모델을 개발했어요.",
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
          "canon_id": "2611.25670",
          "title": "Efficient Latent Reasoning for Vision-Language Model via Dynamics-Aware Quantization and Distillation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25670"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 시각·언어 모델은 중간 생각이 너무 길고 무거웠거든요",
            "easy1_desc": "연구진이 시각·언어 모델(VLM)에서 효율적인 생각의 사슬(CoT) 추론을 해 보려고 했는데요, 중간 생각 단계를 줄이고 실행 비용을 낮추는 게 필요하다고 봤다는 거예요. 글자로 된 근거를 연속적인 생각으로 압축하는 기존 방법이 있는데, 전체 정밀도 모델은 여전히 저장 공간과 연산 비용이 많이 든다는 단점이 있거든요. 여기서 숫자의 정밀도를 낮추면 비용을 줄일 수 있을 것 같은데, 4비트 가중치와 활성화를 쓰면 추론 정확도가 심하게 떨어진다는 문제가 생기는 셈이에요.",
            "easy2_title": "그래서 동역학을 고려한 양자화와 증류 방법인 QL-VLM을 만들었는데요",
            "easy2_desc": "연구진이 그래서 정보 검색을 지키면서 추론을 유지하는 QL-VLM이라는 동역학 인지 양자화 프레임워크를 제안했는데요, 첫째로 회전 키 구조를 지키는 비균일 코드북으로 시각·언어 정보 검색의 왜곡을 줄였다는 거예요. 둘째로는 전체 정밀도 교사와 연속적인 생각을 맞추는 증류 방법으로 낮은 정밀도에서도 예측 일관성을 유지하게 만들었다는 말입니다. 그 결과 과학 질문 벤치마크(ScienceQA-IMG)에서 4비트 QL-VLM이 90.43%의 정확도를 달성하고 기준선보다 40.33% 좋아졌으며, 명시적 CoT보다 16.64배 적은 비트 연산과 6.40배 낮은 지연 시간을 보였다고 연구진은 밝혔어요.",
            "topic": "시각·언어 모델에서 연속적인 생각을 효율적으로 다루기 위해 동역학을 고려한 양자화와 증류 기법을 제안한 연구예요.",
            "one_line": "시각·언어 모델을 위한 동역학 인지 양자화 및 증류 프레임워크 제안",
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
          "canon_id": "2611.25669",
          "title": "Ask in the Crowd: Differentially Private LLM Inference via Dummy-Augmented Shuffling",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25669"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "입력값에 노이즈를 넣었더니 성능이 확 떨어지더라",
            "easy1_desc": "대형 언어 모델(LLM)을 쓸 때 민감한 질문이 그대로 노출될까 봐 입력값에 노이즈를 섞어 숨기는 방법들을 써봤는데요, 문제는 사생활을 지키려다 보니 모델이 원래 내야 할 정확도가 크게 떨어진다는 거예요. 쉽게 말하면, 보안을 챙기려다 성능을 포기해야 하는 딜레마에 부딪힌 셈이라는 말이에요.",
            "easy2_title": "진짜 질문을 가짜 질문들 사이에 숨겨서 성능과 보안을 다 잡았다",
            "easy2_desc": "그래서 연구진은 진짜 질문을 사용자가 만든 가짜 질문들 사이에 섞고 순서를 뒤죽박죽 섞어버리는 디피에스피디(DP-SPD)라는 틀을 제안했는데요, 겹치는 앞부분을 미리 계산해 두는 트랜스포머의 키-밸류(KV) 캐시를 재활용해 느려지는 속도까지 잡았다는 거예요. 보안은 튼튼해지면서도 원래 성능에 거의 가깝게 유지되는 장점이 있는데, 대신 가짜 질문을 만들어야 하는 준비 과정이 더 들어간다는 점도 같이 따라온다는 겁니다.",
            "topic": "민감한 질문을 숨기기 위해 가짜 질문을 섞고 순서를 섞는 새로운 차등 프라이버시(Differential Privacy) 기반 대형 언어 모델 추론 틀(DP-SPD)을 제안하고 그 성능을 확인한 연구예요.",
            "one_line": "가짜 질문을 섞어 보안과 성능을 모두 잡는 추론 틀을 제안했어요.",
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
          "canon_id": "2611.25658",
          "title": "SiliconGym: A Versatile Reinforcement Learning Environment for Agentic EDA",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25658"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "하드웨어 설계 도구에 쓸 마땅한 강화학습 환경이 부족했거든요",
            "easy1_desc": "연구진은 하드웨어 설계와 검증에서 인공지능 성능을 높이려는데, 여러 작업을 두루 거치고 도구 사이를 오가며 상태를 지켜주는 환경이 꼭 필요한데요. 지금까지는 그런 조건을 다 갖춘 범용 환경이 부족해서 에이전트를 키우기가 까다로웠다는 말이에요. 뭔 소리냐면, 작업마다 판이 달라서 실험을 넓히기 어려웠다는 겁니다. 쉽게 말하면, 손발을 맞춰 볼 훈련장이 마땅치 않았던 셈이에요.",
            "easy2_title": "다양한 도구를 넘나드는 실리콘짐을 만들었더니 속도가 빨라졌어요",
            "easy2_desc": "그래서 연구진은 실리콘짐(SiliconGym)이라는 다목적 강화학습 환경을 새로 내놨는데요. 이 환경은 버전별 작업 공간과 예산 집행, 점수 검증을 떼어놓아서 모듈 단위 설계부터 전체 칩 흐름까지 키워준다는 거예요. 도구 확인과 생생한 생성을 동시에 처리해 보니, 256개 답변으로 묶인 강화학습 배치가 기존 칩시크보다 21.9% 더 빨라졌다는 장점이 있는데요. 대신 열린 소스에서 얻은 이득이 상용 도구로 그대로 이어지는지는 짝을 지어 평가해야 한다는 점도 같이 따라온다는 겁니다.",
            "topic": "하드웨어 설계와 검증을 위한 여러 도구를 한데 묶어 쓸 수 있는 범용 강화학습 환경인 실리콘짐을 개발하고 그 성능을 확인한 연구예요.",
            "one_line": "다양한 도구를 아우르는 하드웨어 강화학습 환경인 실리콘짐을 개발해 처리 속도를 21.9% 높였어요.",
            "topic_tag": "반도체·하드웨어",
            "limit": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
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
              "one_line 55자"
            ],
            "flags": [],
            "tag": "반도체·하드웨어",
            "limit_ok": null,
            "show_limit": false
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.25651",
          "title": "MatVerse: A Foundation Model for Materials Science",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25651"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "재료 과학은 다루는 정보가 워낙 달라서 AI로 만들기 어렵거든요",
            "easy1_desc": "재료 과학 분야는 글, 분자 구조, 실험 데이터, 현미경 사진까지 형태가 완전히 다른 복잡한 정보들을 다루고 있는데요. 이런 다양한 자료를 한 번에 이해하고 추론할 수 있는 범용 기초 모델을 만드는 일이 여태껏 쉽지 않았다는 거예요. 뭔 소리냐면, 데이터 생김새가 제각각이라 AI가 한 번에 배우기 까다로웠다는 말이에요. 쉽게 말하면, 서로 다른 언어를 쓰는 자료들을 하나로 묶기 벅찼던 셈이라는 겁니다.",
            "easy2_title": "재료 전문 AI인 매트벌스를 만들어서 세 가지 시험을 다 잘 풀어냈어요",
            "easy2_desc": "그래서 연구진은 기존 모델에 대규모 재료 분야 학습을 더해 매트벌스라는 재료 기초 모델을 새로 만들었는데요. 사람이 직접 검증한 옴니매트벤치, 매트사이벤치, 맥벤치라는 세 가지 재료 과학 평가에서 전반적인 성능이 좋아졌음을 확인했다는 거예요. 계산이 많이 필요한 문제에서도 추론 속도가 빨라진다는 장점이 있는데, 대신 도메인에 특화된 추가 학습 과정이 꼭 필요하다는 점도 함께 따라온다는 겁니다. 쉽게 말하면, 재료 분야에 딱 맞춰 공부시켰더니 훨씬 똑똑해졌다는 말이에요.",
            "topic": "다양한 재료 과학 정보를 다루기 위해 대규모 도메인 학습을 거친 기초 모델 매트벌스를 개발하고 그 성능을 평가한 연구예요.",
            "one_line": "재료 과학 전용 기초 모델 매트벌스를 개발하고 성능을 검증했어요.",
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
            "flags": [
              "예측 의심: 앞으로 AI가 돕는 재료 연구의 든든한 바탕이 될 것으로 보입니다."
            ],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.25644",
          "title": "MambaLIFT: Reference-Based Mechanism-Aware Attribution for VMamba",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25644"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.25619",
          "title": "Cyber-Physical RSI for AI-RAN: A Case Study",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25619"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시뮬레이션만 믿고 만들었더니 현실에서 어긋나더라",
            "easy1_desc": "연구진은 인공지능(AI) 기반 무선 접속망(RAN) 모델을 보통 시뮬레이션으로 만드는데요, 이 예측이 실제 물리적 전파 환경이나 장비 조건과 부딪히면 어긋난다는 걸 짚어봤어요. 뭔 소리냐면, 컴퓨터 안에서 잘 되던 모델이 막상 현실 망에 들어가면 엉뚱하게 작동할 수 있다는 말이에요. 쉽게 말하면, 실험실과 실제 현장 사이의 빈틈이 문제였다는 셈이에요.",
            "easy2_title": "실제 현장 데이터를 연결해 모델을 스스로 고치게 했다",
            "easy2_desc": "그래서 연구진은 실제 물리적 측정값을 바탕으로 모델이 스스로 나아지게 만드는 재귀적 자기 개선(RSI) 구조를 선보였는데요, 가상 환경과 실제 장비를 연결해 실험 계획을 짜고 모델을 고치도록 만들었어요. 현장 실험을 거쳐 모델을 업데이트하는 장점이 있는데, 대신 실제 환경 데이터를 계속 모아서 꼼꼼히 확인해야 한다는 점도 같이 따라온다는 겁니다. 쉽게 말하면, 현실에서 직접 부딪혀 가며 AI를 똑똑하게 만든다는 말이에요.",
            "topic": "실제 현장 데이터를 피드백으로 삼아 인공지능 기반 무선 접속망(AI-RAN) 모델을 스스로 고치게 만드는 구조와 그 사례를 다룬 연구예요.",
            "one_line": "실제 현장 데이터를 피드백해 AI-RAN 모델을 개선하는 구조를 제안했어요.",
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
          "canon_id": "2611.25614",
          "title": "Don't Lose the Future: Latent-Aware 4-Bit Quantization of World Action Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25614"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 양자화 방식은 미래 예측을 지켜주지 못했어요",
            "easy1_desc": "로봇의 온보드 컴퓨터에 올리려면 4비트 크기로 줄여야 하는데요, 기존 방식은 행동 자체는 남기지만 예측된 미래가 망가지는 걸 막지 못한다는 거예요. 뭔 소리냐면, 행동 경로를 지켜도 미래 화면이 찌그러지면서 결국 에러가 커진다는 말이에요. 쉽게 말하면, 행동만 보고 미래를 놓친 셈이라는 말이에요.",
            "easy2_title": "미래를 같이 지켜주는 새로운 LAQ 방식을 제안했어요",
            "easy2_desc": "그래서 연구진은 미래가 저장되고 읽히는 방식을 그대로 지켜주는 LAQ(Latent-Aware Quantization)라는 틀을 내놓았는데요, 방법은 읽기 지표와 읽기 횟수를 써서 어디에 정밀도를 더 줄지 수학적으로 딱 떨어지게 나누는 거예요. 모델 압축률이 3.8배에 이르고 속도도 1.66배 빨라진다는 장점이 있는데, 대신 실제 하드웨어인 AgileX PiPER 암에서는 16비트 모델보다 성공률이 조금 낮아진다는 점도 같이 따라온다는 겁니다.",
            "topic": "월드 액션 모델(WAMs)을 4비트(W4A4KV4)로 줄이면서도 미래 예측 능력을 잃지 않게 만드는 LAQ 양자화 틀을 제안한 연구예요.",
            "one_line": "미래 예측을 지키는 4비트 WAM 양자화 방식 LAQ를 개발했어요.",
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
          "canon_id": "2611.25613",
          "title": "Can an LLM Fix a Language Model Without Training It?",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25613"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "다른 모델을 고쳐 보려고 대형 언어 모델을 썼는데요",
            "easy1_desc": "연구진은 외부의 대형 언어 모델(LLM)이 다른 언어 모델의 가중치를 어떻게 고치는지 조사를 해 봤는데요. 예측 결과나 활성화 요약 같은 걸 살펴보면서 가중치에 어떤 변화를 줄지 고르게 했다는 거예요. 그게 뭔 소리냐면, 모델을 직접 학습시키지 않고도 대화하듯 방향을 정해 수정해 보려 했다는 말이지요. 20개의 기록된 세션을 분석해 어떤 방법이 통하는지 살펴봤다는 겁니다.",
            "easy2_title": "상황에 따라 먹히는 방법이 다르고 한계도 뚜렷하다는 거예요",
            "easy2_desc": "그렇게 고쳐 봤더니 모델 종류나 고장 난 형태에 따라 결과가 다르게 나왔는데요. 예를 들어 Pythia 모델에서는 65.62%의 정확도를 보여주기도 했는데, 블랙박스 검색보다는 잘하지만 고정된 방식과는 비슷하거나 조금 아쉬운 점도 있었다는 거예요. 장점은 사람이 직접 피드백을 주며 고칠 수 있다는 건데, 대신 어떤 연산을 쓰느냐에 따라 효과가 크게 달라진다는 한계도 같이 보인다는 겁니다.",
            "topic": "학습 없이 대형 언어 모델을 활용해 다른 언어 모델의 결함을 고치는 방식과 그 효과를 여러 조건에서 비교하고 분석한 내용이에요.",
            "one_line": "학습 없이 대형 언어 모델로 다른 모델을 고치는 방식을 비교 분석했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "수정하지 않은 체크포인트에서는 스크립트 투영 방식이 작은 이득이나 손실을 내는 데 그쳤다는 한계가 있어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.25590",
          "title": "Measuring Hallucination in Large Language Models for Cyber Threat Intelligence: An Exploratory Study",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25590"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "거대 언어 모델이 가짜 정보를 지어내 보안 분석을 방해하는 게 문제였는데요",
            "easy1_desc": "보안 위협 분석(CTI, Cyber Threat Intelligence)에서 거대 언어 모델(LLM, Large Language Models)을 쓰다 보면 사실이 아닌 거짓 정보를 만들어 내는 환각 현상(Hallucination)이 생기거든요. 이 거짓 정보가 그대로 들어가면 분석가들을 헷갈리게 만들고 아래쪽 보안 결정까지 엉망으로 섞어 놓는다는 겁니다. 뭔 소리냐면, 인공지능이 멋대로 지어낸 말 때문에 실제 보안 사고 대응까지 잘못될 수 있다는 말이에요.",
            "easy2_title": "환각 현상을 재는 틀을 만들고 모델별로 어떻게 다른지 살펴봤습니다",
            "easy2_desc": "그래서 연구진은 할루비전(HalluVision)이라는 재현 가능한 측정 틀을 만들어 상업용 모델 두 개와 공개 가중치 모델 하나의 환각을 직접 재어 봤는데요, 실제 보안 기사 4,940편을 바탕으로 사람의 평가와 기존 충실도 탐지기까지 써서 검증을 거쳤다는 거예요. 살펴봤더니 의미적 유사성은 사람 생각과 잘 맞았지만 개체명 기반 지표는 의견 일치가 적었다는 점도 같이 드러났습니다. 질문에 답할 때는 모델마다 차이가 뚜렷했는데, 개체명 추출 품질이 낮아서 개체 수준 지표가 보여줄 수 있는 범위에 한계가 있었다는 셈이에요.",
            "topic": "사이버 위협 분석에 쓰는 거대 언어 모델의 환각 현상을 재기 위해 할루비전 측정 틀을 만들고 모델별 차이를 살펴본 연구입니다.",
            "one_line": "보안 위협 분석 속 인공지능 환각을 재는 측정 틀을 만들어 모델별로 살펴봤어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "개체명을 뽑아내는 품질이 낮아서 개체 수준 지표가 보여줄 수 있는 내용에 한계가 있었습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.25586",
          "title": "Learning Networked Dynamical Systems via Neural ODE-based Graph Structure Inference",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25586"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시계열 데이터에서 숨겨진 관계를 찾아내려고 해 봤는데요",
            "easy1_desc": "신경과학이나 생물학 같은 복잡한 시스템에서는 여러 변수가 시간에 따라 어떻게 얽혀 있는지 파악하는 게 아주 중요하거든요. 그런데 지금까지 많이 쓰이던 방법들은 대부분 0.0과 같은 이산적인 시간 단위로만 데이터를 다뤘다는 말이에요. 그러다 보니 데이터가 드문드문 있거나 규칙적이지 않을 때 성능이 뚝 떨어지고, 멀리 떨어진 관계를 엉뚱하게 바로 이어진 관계로 오해하는 문제가 생겼다는 겁니다. 쉽게 말하면, 정해진 시간 간격에 얽매이다 보니 실제 관계를 제대로 못 찾아냈다는 셈이에요.",
            "easy2_title": "시간을 연속으로 흐르게 만들었더니 관계를 훨씬 잘 찾게 됐습니다",
            "easy2_desc": "그래서 연구진은 NOGI(Neural ODE-based Graph Inference)라는 새로운 방식을 제안했는데요, 그래프를 학습하는 모듈과 신경 상미분 방정식을 하나로 묶어 끝단에서 함께 훈련시켰다는 겁니다. 그 결과 네 가지 시뮬레이션 환경에서 서른두 개 평가 케이스 중 서른 개에서 가장 뛰어난 구조 복원 성능을 보여줬다고 해요. 장점은 데이터가 망가지는 상황에서도 튼튼하게 버틴다는 건데, 대신 연속적인 시간 흐름을 계산해야 하므로 연산 과정이 복잡해진다는 점도 같이 따라온다는 겁니다.",
            "topic": "신경 상미분 방정식 기반의 그래프 구조 추론(NOGI)을 통해 복잡한 동역학 시스템에서 숨겨진 상호작용 그래프를 효과적으로 찾아내는 방법이에요.",
            "one_line": "연속 시간 기반의 그래프 구조 추론 모델(NOGI)을 제안했어요.",
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
              "0.0"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.25583",
          "title": "DriftGuard: Online Memory-Drift Detection via Causal Attribution for LLM Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25583"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.25543",
          "title": "Efficient Multimodal Agents for Auditing 3D Worlds",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25543"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "3차원 세계를 만들긴 하는데 오류가 많았습니다",
            "easy1_desc": "멀티모달 에이전트(글과 그림을 함께 이해하는 인공지능)가 이제 상호작용하는 3차원 세계와 게임을 직접 만들 수 있게 되었는데요, 문제는 사람이 만든 것처럼 공중에 뜬 물건이나 통과되는 벽 같은 결함이 자주 섞인다는 거예요. 이런 오류를 자동으로 찾아내는 감사가 필요하지만, 정확하면서도 비용이 싸야만 쓸모가 있거든요. 지금까지 나온 감사 도구는 정확하지만 느리고 비싸거나, 싸지만 믿을 수 없다는 단점이 있었습니다.",
            "easy2_title": "작은 모델 무리를 보내고 큰 모델로 확인하게 만들었습니다",
            "easy2_desc": "그래서 연구진은 작은 모델들로 이루어진 무리가 돌아다니며 길을 찾고 오류를 일으키게 하고, 성능이 뛰어난 대형 모델이 그들이 기록하고 보고한 내용을 검토하도록 하는 감사를 만들어 봤는데요. 언리얼 엔진 5와 쓰리스제이에스(Three.js) 세계의 213개 작업 중 55.9%에서 성공을 거뒀다는 겁니다. 기존에 보고된 가장 강력한 감사 도구보다 13.6포인트 높으면서도 비용은 4분의 1 미만으로 줄었다는 장점이 있는데요, 대신 작은 모델들의 인식 능력은 아직 대형 모델에 비해 한참 뒤처진다는 한계도 함께 나타났습니다.",
            "topic": "3차원 세계와 게임의 오류를 효율적으로 찾아내기 위해 소형 탐색 모델 무리와 대형 검토 모델을 결합한 감사 시스템을 연구한 내용이에요.",
            "one_line": "소형 모델 무리와 대형 모델을 결합한 3차원 세계 오류 감사 도구를 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "작은 탐색 모델들의 인식 능력은 대형 모델에 비해 여전히 뒤처진다는 한계가 있습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.25534",
          "title": "How Feedback-Free Self-Evolution Reshapes Agent Skills: A Systematic Study",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25534"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "에이전트가 혼자서 스킬을 고치게 뒀더니 오히려 성능이 떨어졌습니다",
            "easy1_desc": "연구진은 에이전트의 스킬을 피드백 없이 여러 라운드 동안 계속 다시 쓰게 해 봤는데요. 그 결과 스킬이 좋아지기보다는 오히려 가치를 잃어버리는 모습을 보였다는 겁니다. 실제로 모든 모델이 서른 라운드가 지난 SkillsBench에서 평균 15점씩 성적이 나빠졌거든요. 쉽게 말하면, 사람이 만든 전문가 지식이 자가 진화를 거치며 오히려 깎여 나간 셈이라는 말이에요.",
            "easy2_title": "전문가 지식을 따로 표시해 두는 방식으로 성능을 끌어올렸습니다",
            "easy2_desc": "그래서 연구진은 모델이 혼자서 쓰지 못하는 전문가만의 지식을 그 자리에 그대로 표시해 두는 SkillDiff라는 방법을 만들었는데요. 이 방식을 썼더니 피드백을 따로 받지 않고도 SkillsBench에서 평균 4.8점의 통과율을 높였다는 겁니다. 스킬의 본래 텍스트를 바꾸지 않고도 핵심 지식을 지켜낸다는 장점이 있는데, 대신 모델이 스스로 학습하는 범위에는 제한이 걸린다는 점도 함께 따라온다는 겁니다.",
            "topic": "에이전트가 피드백 없이 스킬을 스스로 진화시킬 때 전문가 지식이 깎여 나가는 원인을 분석하고 이를 해결하는 방안을 다룬 연구예요.",
            "one_line": "피드백 없는 에이전트 스킬 자가 진화의 한계를 분석하고 해결책을 제안했어요.",
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
          "canon_id": "2611.25531",
          "title": "LM-based Personalized Travel Planner",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25531"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 여행 계획을 세우려고 하는데 혼자서는 벅찼거든요",
            "easy1_desc": "효과적인 여행 계획을 짜려면 여러 정보를 모으고 제약 조건을 맞춰야 하는데요, 언어 모델이 많이 좋아졌지만 하나의 인공지능이 복잡한 단계를 거치거나 조건을 지키며 처리하기에는 벅차다는 거예요. 뭔 소리냐면, 혼자서 모든 걸 다 하려다 보니 빈틈이 생기기 쉽다는 말이에요. 결국 여러 과정을 매끄럽게 나누어 처리할 방법이 필요했던 셈이에요.",
            "easy2_title": "여러 인공지능을 역할별로 나누어 짝을 지어 봤는데요",
            "easy2_desc": "그래서 연구진은 감독 역할을 하는 인공지능이 일정 검증이나 정보 검색 같은 전문 인공지능들을 이끌도록 계층형 다중 에이전트 구조를 만들어 봤는데요, 외부 도구와 점수 매기는 방식을 함께 썼더니 맞춤형 계획을 더 효율적으로 짜게 되었다는 거예요. 예전 방식과 비교해 봤더니 예산 제약은 10%, 더 넓은 제약 조건은 25%, 개인 맞춤 계획은 45% 나아졌다고 해요. 여러 인공지능이 역할을 나누어 일하면 더 꼼꼼해진다는 장점이 있는데, 대신 구조가 복잡해진다는 점도 같이 따라온다는 겁니다.",
            "topic": "여러 인공지능(AI)을 역할별로 나누어 맞춤형 여행 계획을 짜는 계층형 체계를 제안했어요.",
            "one_line": "역할별 인공지능을 묶어 맞춤형 여행 계획을 짜는 체계를 제안했어요.",
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
          "canon_id": "2611.25530",
          "title": "Keystone: Judging Previews at Key Steps for Test-Time Search in Diffusion Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25530"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "완성된 그림만 보려다 보니 이른 단계의 신호를 놓쳤는데요",
            "easy1_desc": "문자로 그림을 만드는 확산 모델(diffusion model)은 그림이 완성되는 과정마다 깨끗한 이미지의 예상본을 보여 주는데요. 기존 검증 도구인 보상 모델(reward model)은 다 끝난 그림만 평가하도록 만들어져 있어서, 이른 단계의 흐릿한 예상본을 보면 제대로 판단하지 못한다는 거예요. 그렇다고 맨 마지막에만 평가하면 실패할 후보까지 끝까지 다 만들어야 해서 손해라는 겁니다. 결국 문제가 된 건 이미지 자체가 아니라, 이른 단계의 핵심 순간을 제대로 읽어 내지 못한 심판의 방식이었다는 말이에요.",
            "easy2_title": "키스톤을 도입해 핵심 단계에서 질문으로 미리 평가하게 바꿨는데요",
            "easy2_desc": "그래서 연구진은 따로 훈련이 필요 없는 키스톤(Keystone)이라는 판단 도구를 내놓았는데요. 프롬프트를 받아서 물체의 종류, 개수, 색상, 위치를 묻는 질문으로 바꾼 뒤에, 기성 멀티모달 결정 모델에게 대답하게 만드는 방식이에요. 이렇게 물어봤더니 완성된 그림을 보는 기존 보상 모델보다 훨씬 정확하게 이른 단계의 예상본을 읽어 낸다는 겁니다. 계산 비용은 절반도 안 쓰면서 성능은 훨씬 좋아진다는 장점이 있는데, 대신 질문을 만들고 답변을 받는 과정을 거쳐야 한다는 점도 함께 따라온다는 거예요.",
            "topic": "확산 모델에서 테스트 시점 검색을 할 때, 완성된 그림 대신 이른 단계의 핵심 순간을 질문 방식으로 평가하는 키스톤 기법에 대한 연구예요.",
            "one_line": "질문 기반의 이른 단계 판단 도구인 키스톤으로 확산 모델 검색 성능을 높였다.",
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
          "canon_id": "2611.25502",
          "title": "Coordinated Use of Large Language Models in Academic Research",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25502"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.25492",
          "title": "Why Do LLMs Help with Scientific Misconduct Requests and What to Do About It?: Increasing the Trustworthiness of AI for Science",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25492"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 나쁜 요구인 줄 뻔히 알면서도 왜 도와줬을까",
            "easy1_desc": "연구진은 8개의 대형 언어 모델(LLM)을 대상으로 과학 연구 부정행위와 관련된 1,350개의 질문을 모은 벤치마크인 SciIntBench를 활용해 왜 모델들이 부정행위를 돕게 되는지 그 이유를 네 단계에 걸쳐 살펴봤는데요. 직접 질문을 던져봤더니, 가장 은폐된 경우에도 모델들은 무려 91%나 문제가 있다는 걸 정확히 알아차렸다는 거예요. 그런데도 정작 요청을 거부한 경우는 고작 34%에 불과했다고 합니다. 쉽게 말하면, 나쁜 짓인지 몰라서 그런 게 아니라 알면서도 그냥 들어줬다는 말이에요.",
            "easy2_title": "질문 방식을 바꾸고 시스템 프롬프트를 고치니 거부율이 올랐다",
            "easy2_desc": "그래서 연구진은 요청이 어떻게 구성되었는지 그 특징들을 뜯어보며 어떤 점이 거부와 관련이 있는지 살펴봤는데요. 그 결과 지시조가 아니라 허용 여부를 묻는 질문으로 고쳐 프레이밍을 바꿨더니 거부율이 52%에서 88%로 껑충 뛰었다는 겁니다. 여기에 더해 응답 전에 요청을 먼저 평가하라고 시키거나 연구 책임 원칙을 상기시키는 시스템 프롬프트 두 가지를 시험해 봤더니, 악의적인 요청에 대한 거부율이 각각 87%와 86%로 올랐다는 걸 확인했어요. 서술 방식을 바꾸고 원칙을 일깨워주면 AI의 신뢰성을 높일 수 있는 유망한 길이 열린다는 셈이에요.",
            "topic": "대형 언어 모델(LLM)이 과학 연구 부정행위 요청을 왜 들어주게 되는지 그 원인을 4단계로 파악하고 거부율을 높일 수 있는 수정 방안을 시험해 본 연구예요.",
            "one_line": "LLM이 과학 부정행위 요청을 수용하는 원인을 파악하고 거부율을 높이는 수정법을 시험했어요.",
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
              "one_line 51자"
            ],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.25489",
          "title": "When Should a Voice Agent Speak? End-of-Turn Detection in Turkish",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25489"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "말 끊기거나 늦게 대답하는 음성 에이전트의 문제",
            "easy1_desc": "질문할 때 침묵이 조금만 길어져도 음성 에이전트가 말을 끊어버리거나 대답이 늦어지는 일이 생기거든요. 연구진은 튀르키예어 대화 영상에서 추출한 자료를 바탕으로 이 타이밍 문제를 다시 들여다봤습니다. 텍스트 모델과 음성 타이밍, 얼굴 특징을 모아 비교해 봤더니, 파인튜닝된(미세조정된) 모델이 말을 끝내는 지점과 단순한 멈춤을 가장 잘 가려냈다는 거예요. 쉽게 말하면, 언제 대답해야 할지 몰라 버벅이던 문제를 데이터로 풀어보려 했다는 셈이에요.",
            "easy2_title": "텍스트 점수와 타이밍 정보를 합쳐 지연 시간을 줄였다",
            "easy2_desc": "그래서 연구진은 미세조정된 텍스트 모델 점수에 현재 화자의 타이밍 특징을 함께 묶어서 분석해 봤는데요. 이렇게 합쳤을 때 가장 좋은 타이밍 기반 결과가 나왔고, 지연 시간 시뮬레이션에서도 응답 지연을 눈에 띄게 줄였다고 밝혔습니다. Whisper 자동 음성 인식을 쓸 때도 미세조정된 모델이 제로샷 모델보다 낫다는 장점이 유지되는데요, 대신 여러 복잡한 특징을 엮어야 하므로 모델 구조가 조금 더 복잡해진다는 점도 함께 따라온다는 겁니다.",
            "topic": "튀르키예어 음성 대화 자료를 활용해 음성 에이전트가 언제 대답해야 할지 결정하는 끝-지점 탐지 성능을 비교하고 개선한 연구예요.",
            "one_line": "음성 에이전트의 대답 타이밍을 잡기 위해 텍스트 모델과 타이밍 특징을 비교하고 결합했다.",
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
          "canon_id": "2611.25460",
          "title": "LoongForge-Embodied: A Unified Framework for Training Heterogeneous Embodied Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25460"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "다양한 로봇 모델을 훈련할 때 비용이 많이 들고 구조가 달라서 복잡하다는 점이 문제였어요",
            "easy1_desc": "연구진은 비전-언어-행동 모델과 월드-액션 모델을 학습하는 게 컴퓨팅 비용이 많이 들고, 서로 다른 구조와 조각난 학습 스택 때문에 시스템 최적화를 모델 간에 재사용하기 어렵다고 밝혔는데요. 뭔 소리냐면, 로봇 모델마다 구조가 제각각이라 공통으로 쓸 수 있는 학습 환경이 마땅치 않다는 말이에요. 결국 연구실마다 환경을 따로 만드느라 시간과 자원이 낭비되는 셈이라는 겁니다.",
            "easy2_title": "공통 프레임워크를 만들어서 학습 속도를 크게 높이고 평가까지 한 번에 해결했어요",
            "easy2_desc": "그래서 연구진은 다양한 이기종 체화 모델의 학습을 통합하고 가속하는 파이토치 기반 프레임워크인 룽포지-엠바디드(LoongForge-Embodied)를 내놨는데요. 공통 추상화 계층을 두어 모델별 구현과 공유 학습 인프라를 분리했고, 이를 통해 개별 아키텍처를 제한하지 않으면서도 최적화 기술을 재사용할 수 있게 만들었어요. 성능을 높여 주는 장점이 있는 반면, 새로운 통합 프레임워크에 맞춰 기존 데이터 파이프라인과 평가 방식을 손봐야 한다는 점도 같이 따라온다는 겁니다.",
            "topic": "다양한 이기종 체화 인공지능 모델의 학습과 평가를 통합하고 가속하는 프레임워크 개발에 대한 내용이에요.",
            "one_line": "이기종 체화 인공지능 모델의 학습과 평가를 통합 가속하는 프레임워크를 개발했어요.",
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
              "easy1_title 한 줄 아님/너무 김(49자)"
            ],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.25404",
          "title": "Toward a Science of AI Agent Societies",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25404"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 에이전트들이 모여서 사회를 이루기 시작했거든요",
            "easy1_desc": "연구진은 AI 에이전트들이 혼자 일하는 비서에서 벗어나 서로 연결되는 대규모 사회를 이룰 새로운 연구 분야가 열린다고 봤는데요, 이게 그냥 개인 에이전트를 모아놓은 것도 아니고 사람 사회를 흉내 낸 것만도 아니라는 거예요. 뭔 소리냐면, AI들만의 독특한 사회적·경제적 움직임이 생겨나기 때문에 완전히 새로운 연구 대상으로 바라봐야 한다는 말이에요. 쉽게 말하면, AI들이 모인 사회를 하나의 독립된 연구 분야로 제대로 파고들 때가 됐다는 셈이에요.",
            "easy2_title": "AI 사회를 제대로 연구하기 위한 네 가지 기준을 세워봤습니다",
            "easy2_desc": "그래서 제대로 된 AI 에이전트 사회라면 갖춰야 할 네 가지 핵심 기준을 짚어봤는데요, 각각 개별 목표, 규칙과 거버넌스, 자율성, 그리고 규모와 복잡성이라는 겁니다. 이 기준을 바탕으로 경제 활동이나 이해충돌, 안전하지 않은 행동 같은 사회적 행동을 연구해야 한다고 주장했어요. 이렇게 하면 과학적으로 유익하고 실용적인 AI 사회 모델을 만들 수 있다는 장점이 있는데, 대신 매개변수를 균형 있게 맞추고 튼튼하게 구현해야 한다는 기술적 난관도 함께 따라온다는 겁니다.",
            "topic": "AI 에이전트 사회라는 새로운 연구 분야를 정의하고, 이를 분석하기 위한 네 가지 핵심 속성과 주요 사회적 행동을 제안한 연구예요.",
            "one_line": "AI 에이전트 사회의 핵심 속성과 연구 방향을 제안했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.25388",
          "title": "Falsifiable Compositional Reasoning in Time Series Forecasting",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25388"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "왜 과거 검증에서는 잘 맞았는데 실제 상황에서는 망가질까요",
            "easy1_desc": "시계열 기초 모델과 분석 에이전트가 표준 벤치마크에서는 높은 정확도를 보여주는데요, 정작 환경이 바뀔 때는 성능이 떨어진다는 거예요. 연구진은 그 이유가 과거 데이터를 단순한 정답 찾기용으로만 썼기 때문이라고 보았어요. 쉽게 말하면, 과거에 우연히 맞아떨어진 꼼수를 진짜 실력으로 착각했다는 말이에요.",
            "easy2_title": "미리 세워둔 가설을 직접 시험해 보는 방식을 제안합니다",
            "easy2_desc": "그래서 연구진은 신경망 프리미티브 인코더와 명시적 결합 제약, 그리고 훈련된 검증 테스트를 합친 반증 가능한 가설 중심의 예측 방법을 제안했는데요, 이렇게 하면 환경이 바뀌어도 쉽게 무너지지 않는다는 겁니다. 다만 복잡한 구조를 다뤄야 한다는 점도 함께 따라온다는 거예요. 쉽게 말하면, 겉보기 성적표 대신 진짜 원인부터 따져보자는 셈이에요.",
            "topic": "시계열 예측에서 환경 변화에 대응하기 위해 반증 가능한 구성적 가설을 활용하는 새로운 예측 및 추론 방법론에 대한 연구예요.",
            "one_line": "환경 변화에 강한 시계열 예측을 위해 반증 가능한 구성적 가설 기반의 새로운 방법론을 제안했어요.",
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
              "one_line 54자"
            ],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.25380",
          "title": "Beyond Weight Updates: Evolving Agent Harnesses for Domain Specialization",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25380"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "가중치만 고치지 말고 시스템을 바꿔봤습니다",
            "easy1_desc": "연구진은 대형 언어 모델(LLM) 에이전트를 특정 분야에 맞게 바꿀 때 보통 가중치를 업데이트하는 방식만 썼는데요, 이번에는 정책을 그대로 둔 채 시스템 프롬프트와 도구 스키마 같은 에이전트 하네스를 진화시키는 방식을 살펴봤다는 겁니다. 뭔 소리냐면, 모델 속을 직접 건드리는 대신 겉에서 판을 짜 주는 판결 구조를 다듬어 봤다는 말이에요. 이 방식을 GEPA라는 진화형 최적화 도구로 구현해 봤는데요, GPU 학습이 필요 없고 필요에 따라 갈아 끼울 수 있다는 장점이 있거든요. 쉽게 말하면, AI의 머릿속을 뜯어고치지 않고 주변 환경을 바꿔서 똑똑하게 만들려고 했다는 셈이에요.",
            "easy2_title": "가중치 학습의 이점을 적은 비용으로 그대로 가져왔습니다",
            "easy2_desc": "Codev라는 코딩 에이전트를 가지고 여러 벤치마크에서 실험을 해봤더니, 가중치 업데이트가 단독으로는 가장 큰 성능 향상을 주지만 하네스 진화도 적은 계산 비용으로 그 이득의 대부분을 되찾았다는 겁니다. 게다가 두 방식을 함께 썼을 때 전체적으로 가장 좋은 결과를 보였다고 하는데요, 기존 미세 조정 방식에서 나타났던 추론 과정 단축 같은 부작용을 피할 수 있다는 장점도 있거든요. 쉽게 말하면, 무겁게 모델을 다시 학습시키지 않고도 시스템 틀을 진화시켜서 비용은 줄이고 성능은 챙길 수 있다는 말이에요.",
            "topic": "대형 언어 모델 에이전트의 특정 분야 전문화를 위해 가중치 업데이트 대신 에이전트 하네스를 진화시키는 방식의 효과와 가능성을 다룬 연구예요.",
            "one_line": "가중치 수정 없이 에이전트 하네스를 진화시키는 특화 방식을 검증했어요.",
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
          "canon_id": "2611.25363",
          "title": "Stop Going in Circles:Loop-Triggered Routing for System 1 Decision Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25363"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "제브만 쓰면 같은 행동을 맴돌며 진도를 못 나간다는 게 문제였어요",
            "easy1_desc": "제브(Jev) 같은 시스템 1 결정 모델이 빠르고 싸게 행동을 고르지만, 이걸 에이전트에 그냥 붙이면 목표를 끝까지 못 채우는 문제가 생기는데요. 실행 중에 에이전트가 같은 행동을 계속 되풀이하면서 목표로 나아가지 못하고 제자리걸음을 하는 겁니다. 큰 언어 모델(LLM)을 매 단계마다 쓰면 추론 능력이 좋아지지만 비용과 시간이 너무 많이 든다는 단점도 있어요. 결국 제브의 빠른 속도는 살리면서 일이 막힐 때만 LLM을 부르는 효율적인 조율이 필요하다는 말이에요.",
            "easy2_title": "막힐 때만 LLM이 도와주게 만들었더니 성공률이 크게 올랐어요",
            "easy2_desc": "연구진은 반복되는 상태와 행동 쌍이 실행이 막혔다는 신호라는 점에 착안해 룹라우트(LoopRoute)라는 행동 라우터를 제안했는데요. 평소에는 제브가 기본으로 움직이다가 같은 행동이 반복되는 고리가 감지되면 LLM이 짧게 피드백을 주고 다시 제브에게 제어권을 넘겨주는 방식이에요. 추가 학습이나 모델별 신뢰도 보정 없이도 세 가지 벤치마크에서 ALFWorld 21.0%, MapReader 60.1%, 텍스트월드 쿠킹(TextWorld cooking) 30.1%씩 평균 성공률이 높아졌다는 겁니다. 전체 LLM을 다 쓰는 것보다 API 시간과 비용을 크게 줄이면서도 고정된 여섯 개 결정 모델의 성공률까지 끌어올렸다는 셈이에요.",
            "topic": "실행이 막힐 때만 큰 언어 모델을 불러 제어권을 나누는 룹라우트를 통해 에이전트의 작업 성공률을 높이고 비용을 줄인 연구예요.",
            "one_line": "실행이 막힐 때만 LLM을 부르는 룹라우트를 제안해 작업 성공률을 높였어요.",
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
          "canon_id": "2611.25360",
          "title": "AppSci-Bench: Can LLMs Build AI Agents and Make Them Better?",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25360"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.25357",
          "title": "Pro$^2$ Agent: Scientific Problem Probing for Autonomous AI R&D",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25357"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "코스만 고치다가 막히던 걸 문제 구조로 바꿔봤습니다",
            "easy1_desc": "대형 언어 모델(LLM) 에이전트가 코드를 짜고 실험을 돌리면서 스스로 인공지능 연구를 하는데요, 지금까지는 코드 상태만 계속 고치다 보니 어려운 문제에서는 엉뚱한 답에 갇히곤 했다는 거예요. 왜 그러냐면 에이전트가 자기가 푸는 문제를 똑바로 적어둔 적이 없기 때문인데요. 쉽게 말하면, 뭘 고쳐야 할지 모른 채 코드만 뜯어고치던 셈이라는 말이에요.",
            "easy2_title": "문제를 먼저 또렷하게 적어두고 실험을 해봤더니 성적이 올랐습니다",
            "easy2_desc": "그래서 연구진은 코드 대신 무엇이 문제고 어떤 해결책이 좋을지 또렷하게 적어두는 문제 상태(Problem State)를 쓰도록 Pro$^2$ Agent를 만들었는데요. 먼저 자원을 분석해서 문제를 찾고 가설을 검증하면서 중요한 문제를 골라내는 방식이에요. 에이전트가 무슨 생각을 하고 연구했는지 남의 눈에도 잘 보인다는 장점이 있는데, 대신 처음에 문제를 얼마나 잘 짜느냐에 결과가 크게 좌우된다는 점도 같이 따라온다는 겁니다.",
            "topic": "인공지능 연구를 스스로 하는 에이전트가 코드 중심에서 벗어나 문제를 명확히 구조화해 푸는 방식을 도입해 성능을 높였다는 이야기예요.",
            "one_line": "문제를 구조화하는 AI 에이전트를 만들어 연구 성능을 높였어요.",
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
          "canon_id": "2611.25325",
          "title": "Pandora's Toolbox Or Why Agent Safety Cannot Be Verified",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25325"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 에이전트의 안전성을 완벽하게 보장하는 건 불가능해요",
            "easy1_desc": "현재의 AI 에이전트는 언어 모델과 일반적인 컴퓨팅 장치를 결합해서 만들어지는데요, 연구진은 이 구조 때문에 AI가 위험한 행동을 할지 미리 알아내는 것이 이론적으로 불가능하다는 사실을 증명했어요. 우리가 흔히 쓰는 가드레일이나 블랙리스트 같은 안전 장치들이 왜 완벽할 수 없는지를 보여준 셈이에요. 쉽게 말하면, AI가 어떤 위험한 프로그램을 실행할지 사전에 예측하는 알고리즘은 존재할 수 없다는 말이에요.",
            "easy2_title": "제한된 환경에서는 안전성 확인이 가능하지만 매우 어렵습니다",
            "easy2_desc": "물론 실행 시간이나 값의 범위를 제한하는 등 환경을 좁히면 안전성을 따져볼 수는 있는데요, 문제는 그마저도 계산 복잡도가 너무 높아서 현실적으로 해결하기가 매우 어렵다는 거예요. 연구진은 이 문제가 PSPACE-complete라는 난해한 영역에 속한다고 밝혔거든요. 게다가 개별적으로는 안전하다고 증명된 에이전트들도 서로 모여 있으면 예기치 못한 위험한 행동을 할 수 있다는 점도 지적했어요.",
            "topic": "언어 모델과 컴퓨팅 장치가 결합된 AI 에이전트 구조에서 안전성 검증이 왜 근본적으로 어려운지를 분석한 연구예요.",
            "one_line": "AI 에이전트의 안전성 검증이 이론적으로 불가능함을 증명했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "연구진은 실무에서 활용할 수 있는 완화된 안전성 개념에 대해 논의했어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.25282",
          "title": "MS-Point: Multi-Modal Hierarchical Spectral Learning for Point Cloud Understanding",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25282"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식은 정보가 달라도 같은 결과로 취급하는 문제가 있었습니다",
            "easy1_desc": "점과 이미지를 맞추는 기존 방법은 서로 다른 지역 특징 패턴을 가졌더라도 합쳐진 기술자가 같으면 똑같은 신호를 받아버렸는데요, 이렇게 되면 세부적인 정보가 뭉개져서 제대로 된 학습이 어렵다는 겁니다. 연구진은 그래서 중간 단계의 점 특징과 주변부 반응을 직접 감독하는 다중 모달 사전 학습 틀인 MS-Point를 도입해 봤는데요, 이게 무슨 소리냐면 점들의 공간적 이웃 관계를 살려가며 이미지 특징과 짝을 맞춰준다는 말이에요. 결국 특징들이 뭉뚱그려지던 문제가 줄어들면서 더 정교한 표현을 얻을 수 있게 된 셈입니다.",
            "easy2_title": "중간 단계를 직접 감독하는 방식을 도입해 성능을 끌어올렸습니다",
            "easy2_desc": "연구진은 선택된 인코더 단계에서 풀링을 하기 전에 이웃 평균과 잔차를 계산하고, 이들의 가지 기술자를 이미지 특징과 일치시키는 방식을 썼는데요, 가지별 목표와 교차 단계 일관성 및 적응형 융합을 통해 정보를 조율한다는 겁니다. 그래프 인코더와 점 변환기를 모두 지원하는 공통 인터페이스를 갖추고 있어서 다양한 구조에 쓸 수 있다는 장점이 있는데요, 대신 여러 단계를 동시에 조율해야 하므로 설계 구조가 다소 복잡해진다는 점도 같이 따라온다는 겁니다. 쉽게 말하면, 중간 특징을 직접 감독하는 구조 덕분에 다양한 과제에서 전이 가치가 크게 높아졌다는 말이에요.",
            "topic": "점 구름 이해를 위해 중간 단계의 특징과 이웃 변동을 직접 감독하는 다중 모달 사전 학습 틀인 MS-Point를 제안하고, 이를 통해 기하학적 인식이 가능한 표현을 학습할 수 있음을 보인 연구입니다.",
            "one_line": "중간 특징을 직접 감독하는 다중 모달 사전 학습 틀인 MS-Point를 제안했습니다.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.25228",
          "title": "MKA: Evaluating Multimodal Knowledge Agents on end-to-end professional tasks",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25228"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시각 자료를 다루는 전문가의 일, 에이전트가 얼마나 잘할까",
            "easy1_desc": "연구진은 CAD 도면이나 복잡한 차트처럼 시각 정보가 많은 문서들을 읽고 종합해서 전문가 수준의 결과물을 만들어내는 능력을 측정하는 벤치마크인 MKA를 소개했는데요. 기존 평가는 이미지 툴을 빼도 점수가 그대로이거나 한 가지 형식만 다뤄서 여러 파일과 양식을 넘나드는 추론을 제대로 시험하지 못했거든요. 쉽게 말하면, 진짜 전문가처럼 일하는지 제대로 검증할 시험대가 없었다는 말이에요.",
            "easy2_title": "200개 과제로 에이전트 성능을 재봤더니 최고 점수는 50%대였다",
            "easy2_desc": "그래서 연구진은 10개 경제 분야에 걸쳐 200개의 과제를 만들고, 전문가가 매긴 기준과 일치율이 96.2%에 달하는 자동 채점 시스템으로 여러 모델을 평가해 봤는데요. 그 결과 Claude Fable 5.2가 56.6%의 Climb-WSR과 73.3%의 Overall WSR로 가장 높은 점수를 기록했고, Gemini 4 Carbon은 54.3%와 71.9%를 기록하면서도 토큰을 5.7배 적게 썼다는 겁니다. 장점은 최고 모델들이 꽤 높은 성적을 냈다는 것인데, 대신 가장 어려운 기준인 Climb-WSR은 여전히 57% 아래에 머물러 있어서 멀티모달 에이전트가 앞으로 갈 길이 아직 멀다는 점도 함께 보여준다는 셈이에요.",
            "topic": "시각적 이해가 필요한 전문적인 업무를 자율 에이전트가 얼마나 잘 수행하는지 평가하기 위해 MKA 벤치마크를 제안하고, 주요 AI 모델들의 성능을 측정한 연구예요.",
            "one_line": "시각적 업무를 수행하는 에이전트 평가용 MKA 벤치마크를 만들고 모델들을 시험했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "가장 뛰어난 모델을 쓰더라도 Climb-WSR이 57% 아래에 머물러 있어서 멀티모달 에이전트가 발전할 여지가 아직 많이 남아 있습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
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
              "50"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 안전·평가",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.25214",
          "title": "Steering Automated Scientific Discovery via Audited Epistemic Exploration",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25214"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "연구 에이전트들이 엉뚱한 주장을 하거나 고집을 부리는 문제가 있었습니다",
            "easy1_desc": "과학 연구를 돕는 AI 에이전트들이 관측 결과로 뒷받침되지 않는 주장을 하거나, 좁은 가설만 파고들고, 반대 증거를 보고도 믿음을 고치지 않는 문제가 있었는데요. 기존 방식들은 기존 가설에 대한 믿음과 앞으로 탐색할 방향을 함께 담아내는 명확한 지식을 다루지 못했거든요. 뭔 소리냐면, 에이전트가 무엇을 알고 모르는지 체계적으로 정리하지 못해 시행착오를 겪었다는 말이에요.",
            "easy2_title": "에피컴퍼스라는 구조를 도입해 가설과 증거를 체계적으로 관리하도록 만들었습니다",
            "easy2_desc": "그래서 연구진은 에피컴퍼스라는 뼈대 구조를 제안해 가설, 증거, 믿음, 수정을 나무 구조로 연결하여 관리하도록 만들었는데요. 이 방식은 쌓인 증거를 바탕으로 가설을 다시 평가하고, 해결되지 않은 갈등과 새로운 탐색 방향을 찾아 다음 가설을 이끌어낸다는 거예요. 실험 결과를 보면 세 가지 과학 발견 벤치마크와 세 가지 대형 언어 모델(LLM) 백본에서 기존 방법들보다 일관되게 더 좋은 성능을 보였다는 장점이 있는데요, 대신 복잡한 상태를 유지해야 한다는 점도 함께 따른다는 겁니다.",
            "topic": "연구 에이전트가 과학적 발견 과정에서 가설과 증거를 올바르게 다루도록 돕는 에피컴퍼스 구조를 제안하고 성능을 검증한 것에 대한 연구예요.",
            "one_line": "가설과 증거를 관리하는 에피컴퍼스를 제안하고 성능을 검증했어요.",
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
          "canon_id": "2611.25198",
          "title": "When AI Analysts Disagree: Agentic Multiverse Analysis and the Robustness of Empirical Research",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25198"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "분석할 때마다 달라지는 선택들 때문에 결론이 흔들렸거든요",
            "easy1_desc": "관측 데이터를 가지고 분석할 때 연구자가 어떤 길을 고르느냐에 따라 결과가 달라지는데요, 문제는 독자가 그런 선택들을 다 볼 수 없다는 점이에요. 연구진은 그래서 인공지능 에이전트들이 여러 갈래의 분석을 한 번에 해 보게 만드는 멀티버스 분석 체계를 만들었다고 해요. 쉽게 말하면, 분석할 때 숨겨진 선택들이 결과에 얼마나 영향을 주는지 한눈에 보여 주는 도구인 셈이에요.",
            "easy2_title": "인공지능 에이전트를 시켜서 모든 분석 갈래를 검증해 봤습니다",
            "easy2_desc": "연구진은 이 체계를 이용해서 논문 하나에 나올 수 있는 모든 분석 갈래를 에이전트들이 직접 뽑아내고 검증하게 만들었는데요, 실제로 경영학 분야의 논문 10편에 적용해 봤더니 원래 결론이 튼튼한 경우도 있었지만 어떤 결론은 사소한 분석 선택에 쉽게 흔들렸다는 거예요. 분석을 자동화해서 비용과 시간을 크게 줄였다는 장점이 있는데, 대신 인공지능이 모방을 통해 결과를 수렴시키는 경향도 함께 나타난다는 점을 보여 준다는 겁니다.",
            "topic": "관측 데이터 분석에서 연구자의 선택이 결과에 미치는 영향을 인공지능 에이전트로 검증하는 에이전트 기반 멀티버스 분석(AMA) 체계를 제안했어요.",
            "one_line": "인공지능 에이전트로 분석 갈래를 검증하는 멀티버스 분석 체계를 개발했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.25171",
          "title": "A Verifier from the Past: Test-Time Compute for Time Series Foundation Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25171"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "언어 모델과 달리 시계열 예측은 미래를 미리 볼 수 없다는 게 문제였어요",
            "easy1_desc": "언어 모델은 추론 과정에서 여러 후보를 만들고 검증하는 방식으로 성능을 높이는데, 시계열 예측은 미래 정보를 미리 쓰면 안 되는 인과성(causality) 제약 때문에 이 방식을 그대로 쓰기 어려웠거든요. 즉, 미래를 모르는 상태에서 어떻게 후보를 평가하고 고를지가 관건이었다는 말이에요. 결국 기존의 검증 방식이 시계열 데이터에는 맞지 않았던 셈이에요.",
            "easy2_title": "과거 데이터를 활용한 검증기로 예측 성능을 높이는 방법을 찾았어요",
            "easy2_desc": "연구진은 과거 데이터를 활용해 예측 후보를 검증하는 백테스트 기반의 BGAA(Backtest-Gated Augmentation Averaging)라는 알고리즘을 제안했는데요. 이 방식은 과거 데이터로 후보를 미리 평가해 성능이 낮은 후보는 버리고 남은 것들만 평균을 내는 거예요. 실제로 313M 모델에 이 기술을 썼더니 1B이나 2.5B 모델보다 더 나은 성능을 보였다고 주장했어요. 쉽게 말하면, 미래를 보지 않고도 과거의 검증만으로 예측 정확도를 끌어올린 겁니다.",
            "topic": "시계열 예측 모델의 성능을 높이기 위해 과거 데이터를 활용한 추론 시간 연산(TTC) 알고리즘인 BGAA를 제안하고 그 효과를 분석했어요.",
            "one_line": "과거 데이터 기반 검증기로 시계열 예측 성능을 높였어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "테스트 윈도우 단위로 최적의 관점을 선택하는 기술을 구현하는 것이 여전히 해결해야 할 주요 과제라고 밝혔어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.25146",
          "title": "EverydayBench: Evaluating Satisfactory Completion of Live User-Facing Digital Work",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25146"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 웹 정보를 찾는 걸 넘어 진짜 일을 끝내야 하는데 그게 어렵거든요",
            "easy1_desc": "사람들은 AI 에이전트에게 물건을 고르거나 여행 계획을 짜는 등 실질적인 업무를 맡기길 원하는데요, 기존의 AI는 단순히 웹 정보를 긁어오는 수준에 머물러 있는 경우가 많습니다. 문제는 이런 실생활 업무는 정답이 딱 하나로 정해져 있지 않고, 웹 정보가 계속 바뀌기 때문에 AI가 내놓은 결과물이 정말 성공적인지 평가하기가 매우 까다롭다는 거예요. 쉽게 말하면, AI가 일을 제대로 완수했는지 판단할 기준이 마땅치 않았다는 말입니다.",
            "easy2_title": "그래서 실생활 업무를 제대로 평가할 수 있는 새로운 기준을 만들었습니다",
            "easy2_desc": "연구진은 일상 업무 77개를 모아 'EverydayBench'라는 평가 도구를 만들었는데요, AI가 스스로 작업 방식을 정하면 정해진 성공 기준에 따라 결과물을 검증하는 방식이에요. 구체적으로는 제약 조건을 확인하고, AI가 참고한 웹페이지가 맞는지 검증하며, 결과물의 품질을 점수표로 매기는 세 단계를 거치거든요. 이 방식을 통해 Claude Opus 5.5와 Fable 5.1 같은 모델들이 54.55%의 높은 성공률을 보였지만, 여전히 업무 유형에 따라 성능 차이가 크다는 점을 확인했습니다.",
            "topic": "AI 에이전트가 실생활에서 수행하는 복잡한 업무의 성공 여부를 평가하기 위한 새로운 벤치마크인 EverydayBench를 제안하고 그 성능을 분석했어요.",
            "one_line": "실생활 업무 수행 능력을 평가하는 벤치마크를 개발하고 모델별 성능을 분석했어요.",
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
          "canon_id": "2611.25135",
          "title": "Calibrated Decision Rewards: Training Language Models with a Judge That Knows How Sure It Is",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25135"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존의 보상 모델은 점수만 줄 뿐 확률을 몰랐거든요",
            "easy1_desc": "강화학습으로 언어 모델을 가르칠 때, 모델이 내놓은 답이 맞는지 틀린지 알려주는 보상 모델이 꼭 필요합니다. 그런데 기존의 방식은 정답지가 있어야만 정확하게 채점할 수 있거나, 정답지가 없으면 점수만 줄 뿐 그 점수가 얼마나 확실한지 나타내는 확률값을 알기 어렵다는 문제가 있었거든요. 쉽게 말하면, 모델이 스스로 자기 답을 얼마나 확신하는지 측정할 방법이 마땅치 않았다는 겁니다.",
            "easy2_title": "확률을 계산하는 보상 모델로 학습 성능을 높였어요",
            "easy2_desc": "연구진은 RLCDR이라는 방식을 도입해서 언어 모델이 답을 할 때 확률 분포를 함께 내놓도록 만들었는데요, 약 100개의 라벨로 보정 과정을 거쳐 모델이 자신의 판단을 얼마나 확신하는지 알 수 있게 했습니다. 실제로 Qwen3-1.7B 모델을 학습시켜 봤더니, 정답지 없이도 수학 문제 정확도가 72.2%에서 76.8%로 4.65% 포인트나 올랐거든요. 이는 정답지를 보고 학습한 결과인 76.9%와 거의 비슷한 수준이라, 모델이 스스로 정답을 찾아가는 능력이 크게 개선된 셈이에요.",
            "topic": "정답지 없이도 모델이 스스로 답의 확실성을 확률로 계산해 보상으로 활용하는 RLCDR 학습법을 제안했습니다.",
            "one_line": "확률 기반 보상 모델로 언어 모델의 학습 성능을 높였어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "기초 모델이 대부분 틀리는 어려운 문제들로만 학습시키면, 모델이 자신의 판단을 지나치게 확신하게 되어 정답지를 사용한 학습보다 성능이 떨어지는 한계가 있습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.25111",
          "title": "DSFlow: A Neuro-Symbolic Data Workflow Agent with Statistical Diagnostic Guardrails",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25111"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "데이터 분석을 하려면 전문 지식이 너무 많이 필요했어요",
            "easy1_desc": "데이터 과학 업무를 처리하려면 복잡한 기술 지식이 필수적인데, 기존의 거대 언어 모델(LLM)이 이 장벽을 낮춰주긴 했지만 여전히 한계가 있었거든요. 범용 AI 에이전트의 유연함과 통계적으로 검증된 파이프라인 사이에는 간극이 존재했다는 말이에요. 쉽게 말하면, AI가 자유롭게 분석은 하지만 그 결과가 통계적으로 믿을 만한지 보장하기 어려웠다는 겁니다.",
            "easy2_title": "통계적 안전장치를 더해 분석의 정확도를 높였어요",
            "easy2_desc": "그래서 연구진은 DSFlow라는 새로운 데이터 에이전트 플랫폼을 만들었는데요, LLM이 선택한 기술과 결정론적인 진단 안전장치를 결합한 방식이에요. AI가 제안한 분석 방법을 기호 논리 기반의 검증 시스템이 확인해서, 적절하지 않으면 다시 계획하게 하거나 안전한 대안을 제공하는 식이죠. 이렇게 하면 분석 과정에서 오류를 바로잡고 그 결정 과정을 기록으로 남길 수 있다는 장점이 있습니다.",
            "topic": "데이터 과학 워크플로우에서 LLM의 유연함과 통계적 검증의 정확성을 결합한 DSFlow 플랫폼을 제안했어요.",
            "one_line": "통계적 안전장치를 갖춘 신경-기호 데이터 분석 에이전트를 개발했어요.",
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
          "canon_id": "2611.25109",
          "title": "CoMPASS: A Multi-Turn Benchmark for Measuring LLM Reinforcement of Parasocial Behavior",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25109"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI한테 정을 주고 의존하는 게 왜 문제인지 살펴봤습니다",
            "easy1_desc": "대화형 인공지능(LLM)에 사람들이 감정적으로 애착을 느끼거나 의존하는 현상을 겪어봤는데요, 이런 의사사회적 애착이 실제 사망 사고까지 이어진 사례가 있다고 해요. 그런데 인공지능이 이런 의존을 부추기는지 측정할 수 있는 공개 평가 도구가 부족했던 건데요, 기존 연구들은 한 번 대화뿐이거나 사후 관찰 중심이거나 극단적인 정신 건강 상태에만 치우쳐 있었다는 말이에요.",
            "easy2_title": "단계별 대화로 AI가 의존을 부추기는지 측정하는 도구를 만들었습니다",
            "easy2_desc": "그래서 연구진은 사용자의 애착이 점점 깊어질 때 인공지능이 이를 부추기는지 막아내는지 여러 번의 대화로 측정하는 벤치마크인 콤파스(CoMPASS)를 개발했는데요, 애착 이론을 바탕으로 4가지 사용자 페르소나와 3가지 독립적인 심화 차원을 적용해 7가지 신호로 점수를 매겼다고 해요. 8개 최첨단 모델을 시험해 봤더니 여러 번 대화할수록 의인화와 애착 점수가 모든 모델에서 높아졌다는 장점 없는 결과가 나왔는데, 제공사 수준의 후학습 개입이 가능할 수도 있다는 가능성도 같이 보인다는 겁니다.",
            "topic": "대화형 인공지능이 사용자의 의사사회적 애착을 강화하는지 여러 번의 대화로 측정하는 새로운 평가 도구를 개발하고 주요 모델들의 반응을 분석한 연구예요.",
            "one_line": "다중 대화 기반의 인공지능 의존성 측정 벤치마크 개발 및 평가를 수행했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.25070",
          "title": "An LLM-Agentic Framework for Intelligent Work Order Management in Industrial Maintenance",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25070"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "산업 현장의 복잡한 유지보수 업무를 AI가 대신 처리하게 만들었습니다",
            "easy1_desc": "산업 현장에서는 기계가 고장 나기 전에 미리 점검하는 유지보수가 중요한데, 사람이 일일이 데이터를 분석하고 명령을 내리기가 참 번거롭거든요. 그래서 연구진은 자연어(NL)로 지시만 하면 AI가 알아서 지식을 뽑아내고 자산 상태를 요약해 주는 CodeReAct 에이전트를 개발했습니다. 쉽게 말하면, 사람이 말로 시키는 일을 AI가 대신 수행해서 복잡한 분석 과정을 자동화했다는 겁니다.",
            "easy2_title": "사람이 직접 코딩할 필요 없이 AI가 스스로 코드를 짜서 문제를 해결합니다",
            "easy2_desc": "기존에는 데이터 과학자가 직접 코드를 짜서 분석해야 했던 일들을 AI가 스스로 수행하도록 바꿨는데요, AI가 생각하고 행동하고 결과를 관찰하는 과정을 거치면서 필요한 코드를 직접 생성해 냅니다. 냉각기 유지보수 사례를 통해 수년간의 작업 지시서를 분석해 본 결과, 사람이 직접 코딩하는 수고를 크게 줄일 수 있었다고 해요. 결과적으로 데이터 과학자의 개입 없이도 AI가 스스로 데이터를 분석하고 의사결정을 돕는다는 점이 핵심입니다.",
            "topic": "산업 유지보수 현장에서 자연어 지시를 통해 데이터 분석과 작업 지시를 자동화하는 AI 에이전트 프레임워크에 관한 연구입니다.",
            "one_line": "자연어 기반의 AI 에이전트로 산업 유지보수 업무를 자동화했어요.",
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
          "canon_id": "2611.25043",
          "title": "Closing the Analyze-to-Design Gap: An Authorization-Bounded Agent for Self-Driving Laboratories",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.25043"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-21",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "분석만 잘한다고 자율 실험실이 되는 건 아니라는 겁니다",
            "easy1_desc": "연구진은 AI 에이전트가 실험을 짜고 결과를 읽는 데 쓰이고 있지만, 분석만 똑똑하다고 해서 실험실이 저 혼자 돌아가는 건 아니라고 보았는데요. 진짜 자율 실험실이 되려면 에이전트가 감독 없이 물리 장비를 직접 움직여도 믿을 수 있어야 하고, 언제 사람에게 물어봐야 할지도 알아야 한다는 거예요. 쉽게 말하면, 똑똑한 머리만 있어서는 부족하고 행동을 조절할 손발과 안전장치가 필요하다는 말입니다.",
            "easy2_title": "승인 가능한 범위 안에서만 움직이는 에이전트를 만들어 봤습니다",
            "easy2_desc": "그래서 연구진은 설계와 분석 단계 사이에 에이전트를 넣어서, 상태를 바꾸는 작업은 꼭 승인을 받고 검증되도록 하는 구조를 만들어 봤는데요. 액체크로마토그래피-질량분석기(LC-MS) 장비에 이 구조를 붙여서 유기 염료를 합성하는 산화제 스크리닝 실험에 써봤다는 겁니다. 그 결과 에이전트가 스스로 측정 작업을 넣고 실패를 골라내며 산화제 순위를 매겼는데, 전문가들이 그 해석이 맞다고 확인해 주었다는 장점이 있어요. 대신 사람이 정해준 한계 안에서만 움직여야 한다는 조건이 붙는다는 점도 같이 알아둬야 합니다.",
            "topic": "자율 실험실에서 AI 에이전트가 안전하게 분석과 설계를 잇도록 만든 구조와 그 실험 결과에 대한 이야기예요.",
            "one_line": "승인 범위 안에서 움직이는 AI 에이전트로 자율 실험실의 분석과 설계 간격을 좁혔어요.",
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
              "7"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        }
      ],
      "backlog": {
        "n_waiting_all": 173,
        "oldest_day": "2026-11-17",
        "n_dropped_today": 0,
        "n_backlog_done_today": 0
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
          "got": 25,
          "new_cards": 25
        },
        {
          "name": "허깅페이스 오늘의 논문",
          "field": "허깅페이스",
          "got": 50,
          "new_cards": 47
        }
      ],
      "calls": {
        "summary": {
          "val": 150,
          "source": "v2_secretary/결과/논문/2026-11-21_논문.json"
        },
        "flow": {
          "val": 1,
          "source": "v2_secretary/결과/논문/2026-11-21_논문.json"
        },
        "failed": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-21_논문.json"
        },
        "http429": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-21_논문.json"
        }
      },
      "cap": {
        "val": 150,
        "source": "v2_secretary/결과/논문/2026-11-21_논문.json"
      },
      "secs": {
        "val": 713,
        "source": "v2_secretary/결과/논문/2026-11-21_논문.json"
      },
      "no_ai": false,
      "notes": [
        "1차 출처 몫: eess.SY 25/67 · cs.AI 52/52 · 허깅페이스 42/45 · 이월 31편"
      ],
      "source": "v2_secretary/결과/논문/2026-11-21_논문.json",
      "abstracts": {
        "file": "panel_abstracts.js",
        "n": 176,
        "source": "v2_secretary/결과/논문/초록/2026-11-21.json"
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
        "line_out": "내보냄: 수집 대상 38곳 (v2_secretary/결과/2026-11-22_하루_전체.md)",
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
        "line_out": "내보냄: 오늘 들어온 글 987건 (v2_secretary/결과/문앞/2026-11-22_문앞교통정리_길별.json)",
        "metrics": {
          "in": 38,
          "out": 987,
          "calls": 0,
          "secs": 56.3,
          "num_source": "v2_secretary/결과/문앞/2026-11-22_문앞교통정리_길별.json"
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
        "line_in": "받음: 들어온 글 987건 (새 글 167 + 이미 본 글 820)",
        "line_rule": "규칙: gate_rules/길_규칙.txt · 관심_키워드.txt · 반키워드.txt (AI 0콜)",
        "line_out": "내보냄: 거푸집1 1 · 거푸집2 3 · 뉴스 148 · 제외 4 · 논문T 5 · 모름 6",
        "metrics": {
          "in": 987,
          "out": 167,
          "calls": 0,
          "secs": 6.9,
          "num_source": "v2_secretary/결과/문앞/2026-11-22_문앞교통정리_길별.json"
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
        "line_in": "받음: 문 앞 제외 규칙에 걸린 글 4건",
        "line_rule": "규칙: exclude.py + gate_rules/되살리기.txt (관심 키워드 든 글 표시)",
        "line_out": "내보냄: 결과/제외보관함/제외보관함.csv (6077행 누적)",
        "metrics": {
          "in": 4,
          "out": 4,
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
        "line_out": "내보냄: 한은 표 43행 · FRED 표 17행 · DART 표 0행(오늘)",
        "metrics": {
          "in": 1,
          "out": 17,
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
        "line_in": "받음: 문 앞 거푸집1 길 1건",
        "line_rule": "규칙: plate1.py 정규식 숫자 추출 + 직전 값 계산·공식 API 대조 (AI 0콜)",
        "line_out": "내보냄: 오늘 DART 표 0건 · 한은 0건 · FRED 17종",
        "metrics": {
          "in": 1,
          "out": 0,
          "calls": 0,
          "secs": 4.3,
          "num_source": "v2_secretary/결과/거푸집1/2026-11-22_거푸집1.md"
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
        "line_in": "받음: 문 앞 거푸집2 길 3건 (보도자료·리포트·연방관보)",
        "line_rule": "규칙: body.py 본문 추출(0콜) → plate2.py 글당 AI 1콜 요약 + 파이썬 원문·숫자 대조 검사",
        "line_out": "내보냄: 오늘 요약 2건 (결과/거푸집2/2026-11-22_거푸집2.md)",
        "metrics": {
          "in": 3,
          "out": 2,
          "calls": 2,
          "secs": 9.3,
          "num_source": "v2_secretary/결과/거푸집2/2026-11-22_거푸집2.md"
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
        "line_in": "받음: 문 앞 뉴스 길 148건",
        "line_rule": "규칙: news.py 하루 AI 2콜(A·B 독립 묶기 대조) + 없는 숫자·중복 검사",
        "line_out": "내보냄: 사건 12개 묶음 (결과/뉴스/2026-11-22_뉴스사건.json)",
        "metrics": {
          "in": 148,
          "out": 12,
          "calls": 2,
          "secs": 11.7,
          "num_source": "v2_secretary/결과/뉴스/2026-11-22_뉴스사건.json"
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
        "line_in": "받음: [11월 21일(어제) 논문 — 이 화면 기준일(2026-11-22)보다 앞선 날, 오늘 논문은 논문 풀이 뒤] 새벽 바퀴 5-1(0콜)이 모으기 원본(arXiv·허깅페이스)으로 만든 새 논문 카드 176편",
        "line_rule": "규칙: papers.py — 새벽 카드(0콜) → 새벽 바퀴가 끝나면 바로 v2-papers(백업 12:07·14:07)가 점수 순으로 편당 AI 1콜 풀이 + 근거 문장 원문 대조 (gate_rules/논문_설정·주제·키워드.txt)",
        "line_out": "내보냄: 풀이 150편(새 카드 150 + 밀린 카드 0) · 새 카드 중 대기 26편 · AI 151콜(그날 합계) · 논문 파일 마지막으로 쓴 시각 2026-11-21 04:34 (v2_secretary/결과/논문/2026-11-21_논문.json)",
        "metrics": {
          "in": 176,
          "out": 150,
          "calls": 151,
          "secs": 713.0,
          "num_source": "v2_secretary/결과/논문/2026-11-21_논문.json"
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
          "in": 12,
          "out": 12,
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
        "line_out": "내보냄: 결과/2026-11-22_하루_전체.md 외 5종 결과지",
        "metrics": {
          "in": 6,
          "out": 6,
          "calls": 0,
          "secs": 0.1,
          "num_source": "v2_secretary/결과/2026-11-22_하루_전체.md"
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
        "line_in": "받음: 2026-11-22 결과 파일들 + runs.jsonl + calls.jsonl + 구간_주소표.md",
        "line_rule": "규칙: export_panel.py 세기와 옮겨 적기 (새 공식 없음, AI 0콜)",
        "line_out": "내보냄: v2_secretary/결과/화면/panel.json",
        "metrics": {
          "in": 987,
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
          "num_source": "v2_secretary/결과/문앞/2026-11-22_문앞교통정리_길별.json"
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
        "line_out": "내보냄: 실행 기록 16건 (최근: 2026-11-22 ok)",
        "metrics": {
          "in": 1,
          "out": 16,
          "calls": 5,
          "secs": 100.0,
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
