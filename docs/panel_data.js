// 자동 생성 파일 (v2_secretary/export_panel.py) — 직접 수정하지 마세요.
window.PANEL_DATA = {
  "schema_version": "2.1.0-panel-v1",
  "day": "2026-11-13",
  "generated_at": "2026-11-13 10:25:15",
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
  "overview": {
    "in_total": {
      "val": 1199,
      "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
    },
    "new_total": {
      "val": 1042,
      "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
    },
    "old_seen": {
      "val": 157,
      "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
    },
    "seen_ledger_lines": {
      "val": 3786,
      "source": "v2_secretary/data/seen.jsonl"
    },
    "ai_calls_day": {
      "val": 0,
      "source": "v2_secretary/결과/2026-11-13_하루_전체.md"
    },
    "ai_fails_day": {
      "val": 0,
      "source": "v2_secretary/결과/2026-11-13_하루_전체.md"
    },
    "run_secs": {
      "val": 0,
      "source": "v2_secretary/결과/2026-11-13_하루_전체.md"
    },
    "lanes": {
      "거푸집1": {
        "val": 162,
        "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
      },
      "거푸집2": {
        "val": 43,
        "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
      },
      "뉴스": {
        "val": 159,
        "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
      },
      "제외 보관함": {
        "val": 614,
        "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
      },
      "논문T": {
        "val": 15,
        "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
      },
      "모름": {
        "val": 49,
        "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
      }
    },
    "last_auto_run": {
      "day": "2026-11-12",
      "start": "2026-11-12 15:36:41",
      "by": "github",
      "where": "GitHub",
      "mode": "run",
      "end": "2026-11-12 15:37:52",
      "secs": 71,
      "exit": 0,
      "result_md": true,
      "failed_stages": 0,
      "calls": 4,
      "result": "ok"
    },
    "last_auto_run_source": "v2_secretary/data/auto/runs.jsonl"
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
          "name": "젠슨 황 엔비디아 CEO 사임 및 스캔들",
          "easy": "엔비디아를 33년간 이끌어 온 젠슨 황 CEO가 불륜 의혹 등 여러 스캔들에 휘말리며 결국 사임했습니다. 갑작스러운 수장 교체로 인해 엔비디아 주가는 폭락했고, 임시 CEO로 콜렛 크레스 CFO가 선임되었는데요. 시장에서는 이번 사태가 엔비디아의 지배구조와 향후 AI 반도체 패권에 어떤 영향을 미칠지 주목하고 있습니다.",
          "quote": "젠슨 황 엔비디아 CEO 사임‥33년 만 불명예 퇴진",
          "member_count": 17,
          "sample_articles": [
            {
              "n": 105,
              "title": "젠슨 황 엔비디아 CEO 사임‥33년 만 불명예 퇴진 - MBC 뉴스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiekFVX3lxTFBPYUtRUndQd1EtY3JkZm9OTjJ6V3FmSXU1M0RDblVpMzZoY2p5WFVqU1FDYlVZMDRhaWU1ZWtlR0VSdnB4WnExVXpYMDJBUE5QMlNib0NQSkNaNnBpYUJzYXpod3N6NjVwOEg0NUl6bS0tSV9uRHczTnZR0gF6QVVfeXFMTU0wWFhzcHFXWTZQY2l3RGlndVJ6QklzQ3NUTjdfSVZNOWJDWVhLRjVkRm9TZGwwRkhBQm85dER6VWlpX2VWanBmTk5lSm1VVjJ6MVRndEZXbUpJUkNpUnN1cXNEYXl0aGQ1V3k0WHVHZ3R1aWNYMC1yaUE?oc=5"
            },
            {
              "n": 107,
              "title": "'AI 황제' 몰락에 추락하는 엔비디아...한때 시총 4조 달러 붕괴 - YTN",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBCZ2JWa1VKR2Fwc1VwSGtQTlBRQTdnMHYxRjhEaUhxYzc1Sm01STYwQWtjYnliNkJOYzhvSFdKOG10UFluUHFxcWxQSUxEY0J5M0pYaDRSOXNqMExNM2kwZkJzUFo3ZDQzNlVQbGttZw?oc=5"
            },
            {
              "n": 201,
              "title": "미중정상 APEC 담판에 '젠슨황 스캔들' 그림자…복잡해진 셈법 - 연합뉴스",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1tZEtyME9DcFZWaUlhdWVLQk1rdk5IczFxX3FHQ2lId0Z3bWdUWWVHMk9pc2FsdXg4bnZuVGQ1Yy12RnBXcnBYUGhFWkZGSGlXWmo3dWRzQ3J6RUx6WkszYdIBYEFVX3lxTE1tZEtyME9DcFZWaUlhdWVLQk1rdk5IczFxX3FHQ2lId0Z3bWdUWWVHMk9pc2FsdXg4bnZuVGQ1Yy12RnBXcnBYUGhFWkZGSGlXWmo3dWRzQ3J6RUx6WkszYQ?oc=5"
            },
            {
              "n": 206,
              "title": "젠슨 황, 美 규제 이후 '친중 발언' 6배 급증…불륜 여파로 재조명 - 뉴시스",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTE51X2w0ajhhZk5mUmQ2Q0dYNExCNXNFTEJoeVNuanlFbHEzNkFjWHBjWVRfUS14UWU1X1Z6Nk95bmc3ZUtIZ3BMTjRBRExqbDBZWGVLOUUyZWVqNUZ2Y3oxMnZuU1VtSDFFV0ZUdC1UOVBMYmZ1ZmhtY9IBeEFVX3lxTE51X2w0ajhhZk5mUmQ2Q0dYNExCNXNFTEJoeVNuanlFbHEzNkFjWHBjWVRfUS14UWU1X1Z6Nk95bmc3ZUtIZ3BMTjRBRExqbDBZWGVLOUUyZWVqNUZ2Y3oxMnZuU1VtSDFFV0ZUdC1UOVBMYmZ1ZmhtYw?oc=5"
            },
            {
              "n": 209,
              "title": "젠슨 황, 엔비디아 CEO 사퇴… 임시 CEO에 크레스 CFO - 한국일보",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1JWFpZU3c5MjdicS0yU05EQkZ6RGlIRXFtNkJ0WTF1b1ZvXzJIQ3E2N3JyVW9tNjJlNXgzamlxbkdULTdaSEJncWpKb1lyNm16ZWNSbE5Hb2RuRmZmNGcxUEpvbmdST1U2U2hMWlhlb1c4TknSAXNBVV95cUxNSVhaWVN3OTI3YnEtMlNOREJGekRpSEVxbTZCdFkxdW9Wb18ySENxNjdyclVvbTYyZTV4M2ppcW5HVC03WkhCZ3FqSm9ZcjZtemVjUmxOR29kbkZmZjRnMVBKb25nUk9VNlNoTFpYZW9XOE5J?oc=5"
            },
            {
              "n": 205,
              "title": "젠슨 황 사퇴로 \"영입한다면 영광\" 머스크 발언 재조명 - 데일리안",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMimAJBVV95cUxOek1sY21WNTFmRUpMSnFtc3RzcTlzVjdzVWMwT2prX24zdWlscWVBYmFYVGwzMmxHTmkxbV8yWHFrcmwzc0VLUjFYRXNFUHEzY1ItYVU0dC1qX2FHelU4UU5keHdjRHp4WXZpLXJ3SlRvRWFvSDJpTkI1VVlrZER2clRrS1BPa0NlZDVnVlNYYlM3eVBsTzh2QkdBVDhsd1l5N3ltOS1DM1dxd3p6MmNkR0l6OGhLTGYxV3dTS3ZBMWJLa1FWNXROTnVtbDQxTlRyOHM4LVYwOVBsRlVCUHZkUmlmVGZUcXlqZ0t1bG9OVS1xaWpxMDdLbE8yN2F3YjF5Q25jb3NwUmN1Y04"
            },
            {
              "n": 108,
              "title": "젠슨 황 ‘엔비디아 33년 천하’… 무너지는 데 단 4일 걸렸다 - 조선일보",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNc1hURE9OTHpJQ3ZkRUFjQUctU0hTYnhoTlV4M1BBaWdzU2Y0UnYwVXZlOWczNk80RFNzZW8wZ05KV2tjT1d6QURlOHF3VEF2bG9OVXA0blhVaDFFZkFrMmliLXZSMTJLN01ieklTbFgzNC05YVZ0VTNUbDZxWkVfMDRWNA?oc=5"
            },
            {
              "n": 30,
              "title": "[젠슨황 퇴진] 33년 제왕체제 막 내렸다…지배구조-180조 지분 ’안갯속’",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2174043"
            },
            {
              "n": 106,
              "title": "‘젠슨 황 후임’ 엔비디아 임시 CEO 콜렛 크레스는 누구? - 한겨레",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNdVlWU3RjWEJ5V2JfbWQxYlVwNGZDS1lBUFZ2ZkR0TnBjWHloeVAwMFZMS3h0REhZWmJVaV81dUhIcU1NTTYtRjcxUkJDMTRfS0MwLVZVMnJ3SlEzTkNHVHZVWUxnczJ6Mmg3MklPZWl0MGJlbjR0X1VKendIVTV4MHFn?oc=5"
            },
            {
              "n": 104,
              "title": "젠슨 황 결국 퇴진, 임시 CEO “힘든 시기”…엔비디아 주가 폭락 - KBS 뉴스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFA2LVNTeTF0SmZVcS1ZeWpLV3NvWnMtQ3J6Znp0clhOOG1IeU5HQ2o2Z0VnN28tTngwYi11SEw3U3dEYzBBdWlHUC01SElBeHd3Q2NZTVctX0VIRG8?oc=5"
            }
          ],
          "flags": [
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 2,
          "name": "한국전력 3분기 실적 부진 및 주가 급락",
          "easy": "한국전력의 3분기 영업이익이 전년 대비 70% 넘게 급감하며 어닝 쇼크를 기록했습니다. 중동 전쟁 여파로 발전 연료비와 전력 구입비가 크게 늘어난 탓인데요. 실적 부진 소식에 한국전력 주가는 장중 9%대까지 하락하며 연중 최저치를 기록했습니다.",
          "quote": "한국전력, 장 초반 10% 급락…유가급등에 3Q 어닝쇼크 - 머니투데이",
          "member_count": 14,
          "sample_articles": [
            {
              "n": 63,
              "title": "한국전력, 장 초반 10% 급락…유가급등에 3Q 어닝쇼크 - 머니투데이 - 머니투데이",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE14cjRBd2hHV0p5N002Q0dYdWQtbTMzdzQwWWx4ZG00ZmRPOXZNNTlYSFppeDByanI5Nl9TVG9LNEV0a1dxNWlCRlQyYjFCbzR4SWNTa0F6NkoxdFZxYXBHaWdrXzgwbUk10gFuQVVfeXFMTUFqUno4UFF0eEUtRlQ5cE5hYmRUU1RQelY3MlplQUEyLTFUTC1lLXlyYzJsVEU0bFltOWtLVWlxcXk5cVNLQVhVakJRMy1uMHp3SnNlcFl6d2hrQ0loTlpYaWp5OEE3Nmx0bWdFa0E?oc=5"
            },
            {
              "n": 56,
              "title": "[특징주] 한국전력, 3분기 실적 부진에 9%대 급락 - Chosunbiz",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNM19MaUJqM042LV9RbDl5RGZueldMdlpuNVQxLVdiTUVGX1NjVGVoMjcxdzZ0bkFKSjByYXo4ZGdDX2hoOXBwVUtZVGVFSnpqRjJ3bktLbDdkU1o4Vm9fd2pLbmhrVDd4V2FNMWFPYUlKaDdPbWhxbktvTVNiekY0N1J3QU1HakZt0gGcAUFVX3lxTE5CUDh3a2J1V2NHNVEzMXFQZWJjYmtCTnJXR19Qb2NkWl9RWkIyNS1YTFpKS3RpNXk4Wi1PUjdGdndhNmFoRFZGUXduZTd3NkhHdWs3RDJVd1VzcmhBTzFnekVBQ2hwNUNxRl9laDU0cjJVLS1xZGU4ODhaeFZRQW9"
            },
            {
              "n": 133,
              "title": "한전 3분기 영업익 70.9% 급감…김동철 “전기요금 인상 필요” - 주간한국",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTFAzWk5PTXpFZWJHQnpSMmRTOVoyTnBwT2VJQzF1T1U3UzEzc0h6eXVlTGdoam5iUWV3NUZrcVRFWndUTTduSmVkdHhfdVo1bWFsSUhOMF94a0ZMcExWVXJISXpYenlfb2d0T0pFWnJMMGNXZXZG0gF0QVVfeXFMUDNaTk9NekVlYkdCelIyZFM5WjJOcHBPZUlDMXVPVTdTMTNzSHp5dWVMZ2hqbmJRZXc1RmtxVEVad1RNN25KZWR0eF91WjVtYWxJSE4wX3hrRkxwTFZVckhJelh6eV9vZ3RPSkVackwwY1dldkY?oc=5"
            },
            {
              "n": 131,
              "title": "한국전력, 비용 부담에 실적 부진···전기요금·원전 확대 주목 - 뉴스웨이",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5kS2h0NFFKMEQ5UERlcUlBbU5WYS1FYUNqRy1mZHRWS2I0TTdyZkFNWDVFNGlJb05kRkNIWVlpY0E3VFlJc1FDa0xSSGNQazdSTXFWSGVDLS1LNzE4NVl3R0Q3UWpTYTNnMFE?oc=5"
            },
            {
              "n": 58,
              "title": "[특징주] 한국전력, 3분기 어닝 쇼크에 장초반 9%대 하락 - 매일경제 마켓",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1pVDhEMXZaTU0zOERnZWh4VUkxM0VLdi05UkZHdVdubm9lWFVkZzVWcUlQby15NTNFeTlGMmN1U1FlS3ZlYVFtWGpjanlNcjdJdUE?oc=5"
            },
            {
              "n": 135,
              "title": "한전, 3분기 영업익 70% 급감… 전기요금 인상 압박 커지나 - 한겨레",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE85R25Ud0Q0X0xMTVA5dHlGYm9EQ1pTODNMQmhVbHRXbUZpOUZENUdseURPSHVNcjdMN2U5ZkpDaUVqWWpGV1N4azJHaGFlNm5GYldITURhWl9FTUx3NnNmSHFubXY2WHpjaUY3cA?oc=5"
            },
            {
              "n": 59,
              "title": "[특징주] 한국전력 9% 급락…실적 쇼크에 '연중 최저치' 기록 - 뉴스핌",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE0taTNCRHMxZlZzUXpfNVd6bVNPLVl1QTlLMmo3VjczSlFVcUVzOWwycU1EeFo2QVFQZlR2OHF5U0QyaG5vTFR1Z2xwS3pfelBteTB1WkhvVF9ZY25B?oc=5"
            },
            {
              "n": 61,
              "title": "[특징주] 한국전력, 3분기 영업이익 급감…주가 9%↓ - 뉴스드림",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTFBKZ0dCUUYzcEw4SFlDcDMtZEhfYW5mcEVjUjYwamJ3ZDhPdTIwQkNkRjA5V0Y2MWpGX0k5T2lYVWw1TF9ob2FjVmNvd3YwelI4MjlteklSZzA1TjViRW9hVkw1Ql9GdTFaeG0w0gFuQVVfeXFMTXY5emlUbGp3dEloNVJNQS1zVUx2RjRMcHV1VFRlMV9OY0kwbGhHelI5UnpkX2k1elFlYjJCZnl5NjItV1J0bmZVbmx1azJySGpaMk1sNm5ZS29fWjdMbmRtOXlLRzJRTThaUjFHdnc?oc=5"
            },
            {
              "n": 147,
              "title": "한국전력 3분기 영업이익 1.6조원, 전년 대비 71% 감소…\"중동전쟁 영향\" - 머니투데이 - 머니투데이",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5QUUs1dWJOZjVGRmlxX2g5N3NjRlYtWHcyT2UtSHFQa05PNklycFNiV1pSQUQ1YkQyUmtIYWRHY1ZiZV94VUItU1RDOG0zWHpseEk2dnUzSUhtZ1Q3aEFCdThmZmx6cDQzem1YR0MwRVPSAXBBVV95cUxOUFFLNXViTmY1RkZpcV9oOTdzY0ZWLVh3Mk9lLUhxUGtOTzZJcnBTYldaUkFENWJEMlJrSGFkR2NWYmVfeFVCLVNUQzhtM1h6bHhJNnZ1M0lIbWdUN2hBQnU4ZmZsenA0M3ptWEdDMEVT?oc=5"
            },
            {
              "n": 134,
              "title": "[특징주] 한국전력, 3분기 실적 부진에 9%대 급락 - 브릿지경제",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFA1UTY0SzhSenRYTnNtUE1UazNCUlZSck10TFJSbjB3NmJhVUlFZzJIYmM4alBrMktPXzdJa3dZakVsdzRmRUtoeEgwUlkza21FTm9PMjNuWHJuZw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 3,
          "name": "한전 전력망 입지선정 100건 달성",
          "easy": "한국전력이 전력망 건설을 위한 입지선정 100건을 돌파했습니다. 주민들과의 소통을 강화한 덕분에 최근 2년간 입지선정 실적이 이전보다 2배 이상 빨라졌는데요. 전력망 확충 속도가 붙으면서 안정적인 전력 공급 기반을 마련했다는 평가가 나옵니다.",
          "quote": "한전, 전력망 입지선정 100건 돌파…주민소통으로 건설 속도 높여",
          "member_count": 6,
          "sample_articles": [
            {
              "n": 64,
              "title": "한전, 전력망 입지선정 100건 돌파…주민소통으로 건설 속도 높여 - 뉴스핌",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE1TVk5BeUVqTVVsQWJlUzlrYXlKZlBGcFliSG12NkpITDExSTk3a29OSnVEWTgzcVNOeG94anJOS3Y0M0Z1Z0pZU1k3TkFHaF9FcTlXTlNXRmFScExW?oc=5"
            },
            {
              "n": 66,
              "title": "한전, ‘전력망 입지선정’ 100호 달성…2년간 입지선정 실적 2배 이상 증가 - 부산일보",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE9wWkhqS3FzTmxuaDBScFloN2hCVHpDeVRaVE9wSk95blF2WWxwcmw2cWFFYUszQXF6cEFEcjk2enZHVGRlOFlmTFRzb1FoQzE4LWRxU3NNdDdBTmFlcUtIcm1IZWJFN0VqT0ktRVFmbzRiajN6?oc=5"
            },
            {
              "n": 62,
              "title": "한국전력, 전력망 짓는 속도 2배 빨라졌다···입지선정 100건 달성 - 팍스경제TV",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1NT3NHWkVsUkdqdXhTZWhxWmVyXzFwUkJXQWVWR2VSSHFRS28tTVh4MXhDZldGeHVIRmRfUEt2c0RDbUZvdWJLeEhXRmRHTWFDWDVsbkI4Wksybm9ndnQyLTRlS0wzdTg?oc=5"
            },
            {
              "n": 69,
              "title": "한전, 주민과 함께 이룬 전력망 입지선정 100호 달성 - www.ynyonhapnews.com",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5scWM1elhfLXRwaUwtUDFRR25sd0RUZFMtME05TGs5dENWMFdFV0xLRkdzbXk5X05aRndJUVBWNEgtV2pJdWswQm1CT1R4NWw0cVRaeWhybmR6S2w4eml5eEIxaG1VVjk0T1VWb1M0QQ?oc=5"
            },
            {
              "n": 65,
              "title": "한전, 전력망 입지선정 100건 돌파…최근 2년 연평균 실적 2배↑ - 서울경제TV",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1NYWRveFRMbzRpWHBybG9DY0RUamhUN3p5MDdSVkFMZGRWcm5FQXE0bFRLUXF5VldraUFjXzNuNHZ5MEFHdk53dGVqYnFxYms5dXBTMC03TE9OR2N6S3h3ZGpXa2k?oc=5"
            },
            {
              "n": 67,
              "title": "한전, 전력망 입지선정 100호 달성…2년 새 실적 2배 - 이투데이",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE1JM1VLaGxSSl9jTW1qVms5czlpbGc5UmVrN1NUeGlDOGhBNk1WQTlXWG5QY3dMZXkwQmVvNWZlM1Y2VER3T1g5Z0R1bnpyQ254R0NDTQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 4,
          "name": "삼성전자 협력사 대상 반도체 기술 공유",
          "easy": "삼성전자가 협력사 1000여 곳을 초청해 차세대 반도체 기술 세미나를 열었습니다. AI 반도체 시장에서 메모리 중심의 기술 혁신을 이루기 위해 협력사들과 역량을 결집하겠다는 취지인데요. 반도체 진보 없이는 AI 발전도 불가능하다는 판단 아래 상생 경영을 강화하는 모습입니다.",
          "quote": "삼성전자, 협력사 1000명과 AI 반도체 기술 공유",
          "member_count": 6,
          "sample_articles": [
            {
              "n": 98,
              "title": "\"반도체 진보 없인 AI 발전도 불가능\"…삼성전자, 협력사와 기술 공유 - 아시아경제",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE05N1lGSUZQdHRRN2VBQm1RQUpGUTRsbjV0VFhKX0syQTUybkZJNk1DcXZzWjFuak41LUloQVJvTWFpcDQtamM4dkU5Q0g3Sl8yZ0tXdFJKamNoZUpzRGtzSQ?oc=5"
            },
            {
              "n": 83,
              "title": "HBM 다음 기술은…삼성, 협력사 1000명과 AI 반도체 미래 논의 - 이데일리",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNazRxUVJjZUJVS2p1all5eG9RQXVFY29LRkdIbWR3a2RudlNzcE9BWXFydVVXRlB3OV9xaWo5ZXA1MjRBR0VWSUtsWnZYUzl6V3Z5SGFqNm53ZmlQUmlEaExkS3FBbE5LeEFqLU1fWkVrOUJKeXlvSnB3MzdjUkJ4MQ?oc=5"
            },
            {
              "n": 102,
              "title": "삼성전자, 협력사 1000명과 AI 반도체 기술 공유 - 파이낸셜뉴스",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFAtSmI0Zkh6Mkw2emU5dllObVFpOGFVOXlwemNkTk5pR1RUVDVralVuWldGbS10S2R3UzVBSEJ3Nkw3OXp4S3pEWUZlRHNtT3k0bjNodnFIRmgzQQ?oc=5"
            },
            {
              "n": 101,
              "title": "삼성전자, 협력사 1000명과 AI 반도체 기술 공유…“메모리 중심 재편” - 이투데이",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE1fcThBSEZNWnZZZWdOa1Q2YUp0NmkxbGd0Xzl1alc5MUdtblJMaE12SmFwZnJRQVJlNHBtNXRqU05ubWplWU1zaGItbHNiVWg2Z0xZeQ?oc=5"
            },
            {
              "n": 100,
              "title": "삼성전자, 협력사 초청 '반도체 테크 세미나' 개최 - 매일경제 마켓",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5hU012UFpBMmV4a2xMU0dpYk1oWTdOV2ExRTVPaUNUd0huVWJ2Q0w2ZVRWeWhaaGdOOWpjMExFcXNJaGdOeEtkZmdRcTVqRDBRZ3c?oc=5"
            },
            {
              "n": 97,
              "title": "삼성전자 DS부문, 협력사 1000명과 차세대 반도체 기술 공유 - 뉴스1",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9wbTJpcnVmSm4tQjBhVTZtSnVXODFWSUJHa2tUWXJJYjFyemtRMmxzM1h4Qk1WaHlJVmtyd1IyQU9qMjdfNjd1X2JLMVZ4OEVxYVpfbDB4WTdqeVpmaXZuVHc2R1E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 5,
          "name": "美 의회의 엔비디아 中 수출 승인 조사",
          "easy": "미국 의회가 엔비디아의 중국 반도체 수출 승인 과정을 정조준해 조사에 착수했습니다. 트럼프 정부의 러트닉 상무장관이 이 과정에서 어떤 역할을 했는지 들여다보고 있는 건데요. 일각에서는 이번 조사가 미·중 반도체 수출 통제 정책의 실패를 확인하려는 움직임이라는 분석도 나옵니다.",
          "quote": "美의회, 엔비디아 中수출 승인 조사…러트닉 정조준",
          "member_count": 5,
          "sample_articles": [
            {
              "n": 157,
              "title": "美의회, 엔비디아 中수출 승인 조사…러트닉 정조준 - 경북매일",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1tYWMwS2VYR1pUcEhtbTR0dG9qek1XUl9HSG1ZbXVqbFNhTFo0LUxmVVE3NXowdTRRYkNkQ2Y2bGFJc3RieEx6SWlMeFV2VFVKdk5NZmUxTjJaUQ?oc=5"
            },
            {
              "n": 159,
              "title": "美민주, 트럼프 '엔비디아 中수출승인' 조사…러트닉 먼저 조준 - 연합뉴스",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5rakszU0FBOWs1Ym0zcmJkYjJId29Wc19jUlU3Y2ZCNEVTektMTWpLUXJIelBfWWlCZXU4bHM1WkJKWmtzZ2NFUFNCb2JXMzhjQXhrWVVYQ0NmZTM4aVV6bdIBYEFVX3lxTE5rakszU0FBOWs1Ym0zcmJkYjJId29Wc19jUlU3Y2ZCNEVTektMTWpLUXJIelBfWWlCZXU4bHM1WkJKWmtzZ2NFUFNCb2JXMzhjQXhrWVVYQ0NmZTM4aVV6bQ?oc=5"
            },
            {
              "n": 152,
              "title": "美민주, 트럼프 '엔비디아 中수출승인' 조사…러트닉 먼저 조준(종합) - 연합뉴스",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5ncldGcVRUQmxpOXlIbEFYeDBLNmhIOEQ5YWswNmlWaWRTcUxsOWNzTzRDMjdqMGdqa0I0cVBpSGFTSVV3Mm1nNFVTNHRfRTFfeC1qME5xSVk3OVN3OU1vUNIBYEFVX3lxTE5ncldGcVRUQmxpOXlIbEFYeDBLNmhIOEQ5YWswNmlWaWRTcUxsOWNzTzRDMjdqMGdqa0I0cVBpSGFTSVV3Mm1nNFVTNHRfRTFfeC1qME5xSVk3OVN3OU1vUA?oc=5"
            },
            {
              "n": 155,
              "title": "\"백악관, '대중 반도체 수출통제 실패' 러트닉 상무 거취 논의중\" - 뉴시스",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTE1SQ3g5bk00VGYtZnNHbUlwckNCb0FjSmV5Rk96SDRQQTR3U0s5YVpPcnFkZWZzbVM0US15M0Q1UV9wRU5DYmNsSmt0end0YVFmNGlVdVZzQTFrYndwSDJUSFVkSmo3eG1XVm9GeE0wMC0wWWJ3VHVoMdIBeEFVX3lxTE1SQ3g5bk00VGYtZnNHbUlwckNCb0FjSmV5Rk96SDRQQTR3U0s5YVpPcnFkZWZzbVM0US15M0Q1UV9wRU5DYmNsSmt0end0YVFmNGlVdVZzQTFrYndwSDJUSFVkSmo3eG1XVm9GeE0wMC0wWWJ3VHVoMQ?oc=5"
            },
            {
              "n": 153,
              "title": "젠슨 황 스캔들, 트럼프 정부 조사로…美의회, 반도체 中수출 승인 살핀다 - 한국일보",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9peVR0S0oxUlJjbm1PNzhGVnQ4NDNZV0Z4QWs5WGJLa2E1NkM5Ym9ldEo4WUdSaXd1UGZBWWszNUUwZzRTck1veXI0ZkdjZ2M1aHlGSy04T19VTHFicFNrVmhsVXZvbFBFSTVzWmN30gFzQVVfeXFMT3VhTGc1Y2dHTXpQZUpCWnVhZ2NITlg3aW9HMVYwT29tTk9vWElJOHIzV0NBaVZXQjVPR05qNWp6MGxjcmtNTHBKRXZkcWVVU3E2U2JGdVVacjg5V3VMSDc1Mnd2T0xtNVl2VG51NXBZaUt2Yw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 6,
          "name": "美 연준의 2027년 금리 결정 횟수 축소",
          "easy": "미국 연방준비제도가 2027년부터 기준금리 결정 회의인 FOMC 횟수를 기존 8번에서 7번으로 줄이기로 했습니다. 10월 회의는 표결 대신 통화정책 전략을 논의하는 시간으로 활용하겠다는 건데요. 시장에서는 이를 두고 연준이 긴축 기조를 유지하려는 것인지 해석이 분분합니다.",
          "quote": "美 연준, 내년 기준금리 결정 8번서 7번으로…10월엔 전략만 논의",
          "member_count": 5,
          "sample_articles": [
            {
              "n": 161,
              "title": "美 연준, 내년 기준금리 결정 8번서 7번으로…10월엔 전략만 논의 - 조선일보",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNbi1QS0I1NnF5TXNiY1RFZEo5enRSb0hKX1I1TmxnZEJvSVUxY0RkT3ZXanhqOU9lWXVzQndOU3dxNlBJSElDQ0ZxX0ZUNjBQQXVBb3VLUks2WHhXdHFNU3plTUpTV0RRQ3FsMmJ6RngzRkJPNjhCeWNhYnk0M0JuWUdCdEdGaDNX?oc=5"
            },
            {
              "n": 163,
              "title": "美연준, 내년 '금리 결정' FOMC는 7번만…10월엔 전략 논의 집중 - 연합뉴스",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5VSEFvcTlyZHlUeGZiQUR6SmdlTk1JZFpxSE1tdWsyY2kweldQM181WkZoWWN5NlpzYTlJZkJ6aWRNVEpJN2lkT09lSTAxNFlncE1STHNZd0duZ3fSAWBBVV95cUxQUGhyTWtLMVM5Z2p5TS1RaWdMRVF6UXR4NVpsbk5EakxiRU9zNkFqcGhuaDhQZGN0UUw2WDhxVDNLWHA1Tlh1Sl8tUkM3MWk3UFF0NEdhNjFvWTVkRDZ2MEc?oc=5"
            },
            {
              "n": 167,
              "title": "美 연준, 2027년 금리 결정 7차례로…10월 표결 생략 - 파이낸셜뉴스",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5yNms5SUI4bE5fLVpBcGZrcy16R2NZYUN5NGVDYnVjc3h3RXU0Y1lNRzBlMmdXclVDZkRLdHd6SDdpNkJmT1RDc0FOY1dqVjJjNXpWRmdCZzRpZw?oc=5"
            },
            {
              "n": 166,
              "title": "美 연준, 2027년 기준금리 결정 FOMC 7번으로 축소…10월은 통화정책 전략 논의 집중 - 파이낸스스코프",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBQVFc3WDA3RzBYNzh2YjhGQjZRLUFfV3lodTZETDdaLVZEMjJWb2pMMEZlUExYQjllR2h5OHc3NlhYVXFvNHhrbm1MUjA5X3k0U09GRDlvMjlhckcwbG10OFhVVHZLN0pxZGc?oc=5"
            },
            {
              "n": 164,
              "title": "미 연준, 2027년 금리 결정 7번만…10월 회의는 '전략 토론' - 뉴스핌",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE8wckZMejZqUEFkOExnUDF5al9BcWxlVUNGQ1RFSWY1U25GbEtlVk9iek53bnktZURNcTc5TmVUbE5zaGIxYWl3eVFzckdkRG9NTWJnVkd0anZjcVU2?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        }
      ]
    },
    "ch2_numbers": {
      "title": "챕터 2 · 숫자 (거푸집1)",
      "addr": "처리-1",
      "status": "돎 (AI 0콜 · 정규식 추출 + 공식 API 대조)",
      "counts": {
        "gate_in": {
          "val": 162,
          "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
        },
        "dart_day_total": {
          "val": 159,
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        "dart_contracts": {
          "val": 22,
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        "dart_others": {
          "val": 137,
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        "fred_series": {
          "val": 10,
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        "bok_rows_total": {
          "val": 33,
          "source": "v2_secretary/결과/거푸집1/한은_지표표.csv"
        },
        "bok_rows_day": {
          "val": 0,
          "source": "v2_secretary/결과/거푸집1/한은_지표표.csv"
        }
      },
      "dart_contracts": [
        {
          "company": "금호건설",
          "market": "유가",
          "what": "단일판매ㆍ공급계약 체결",
          "amount_won": "372,000,000,000",
          "pct_of_sales": "18.43",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "인천광역시 연수구 송도동 162-1",
          "period": "2026-11-12~2028-12-31",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112801117",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "삼일기업공사",
          "market": "코스닥",
          "what": "프라다 플래그쉽 스토어 신축공사 (건축, 토목, 기계설비, 경관조명, 조경공사)",
          "amount_won": "53,109,000,000",
          "pct_of_sales": "67.53",
          "pct_check": "맞음",
          "counterparty": "프라다코리아(유)",
          "region": "서울특별시 강남구",
          "period": "2025-01-02~2027-03-11",
          "changes": "5. 계약기간      시작일 종료일: 2025-01-02 2026-11-30 → 2025-01-02 2027-03-11",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112901033",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "나우로보틱스",
          "market": "코스닥",
          "what": "USA NQ6a HEV Holder Assy 조립설비 제작",
          "amount_won": "2,365,900,000",
          "pct_of_sales": "18.89",
          "pct_check": "맞음",
          "counterparty": "브이피케이 주식회사",
          "region": "상대방 지정장소(미국)",
          "period": "2026-09-07~2027-10-27",
          "changes": "5. 계약기간(종료일): 2026-11-15 → 2027-10-27 ; 10. 기타 투자판단에 참고할 사항: - → 2026.11.12.현재 계약 이행률은 30.0% 입니다.",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112900972",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "퀄리타스반도체",
          "market": "코스닥",
          "what": "반도체 설계자산(IP) 라이선스 계약",
          "amount_won": "3,921,995,880",
          "pct_of_sales": "64.56",
          "pct_check": "맞음",
          "counterparty": "에스케이하이닉스 주식회사",
          "region": "대한민국",
          "period": "2026-03-17~2027-03-16",
          "changes": "2. 확정 계약금액: 2,423,520,000 → 3,921,995,880 ; 2. 계약금액 총액(원): 2,423,520,000 → 3,921,995,880 ; 2. 매출액 대비(%): 39.90 → 64.56 ; 6. 대금지급 조건 등: - 1차 대금(USD 648,000) : \"본 계약” 체결 후 “라이센서”가 “라이센시”에게 세금계산서를 청구 발행한 날로부터 30일 - 2차  → - 1차 대금(USD 648,000) : \"기본 계약” 체결 후 “라이센서”가 “라이센시”에게 세금계산서를 청구 발행한 날로부터 30일 - 2차 ; 10.기타 투자판단 참고사항: - 상기 2. 계약내역의 확정 계약금액은 USD 1,620,000이며, 2026년 3월 17일 최초 매매기준율(USD/KRW 1,496.00원) → - 상기 2. 계약내역의 확정 계약금액은 USD 2,621,655으로, 최초 계약일 (2026년 3월 17일) 기준 최초 매매기준율(USD/KR",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112900830",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "금양그린파워",
          "market": "코스닥",
          "what": "새울 3/4호기 주설비공사 (노출전선관 및 케이블설치공사 2공구 후속)",
          "amount_won": "62,806,897,000",
          "pct_of_sales": "27.24",
          "pct_check": "맞음",
          "counterparty": "삼성물산주식회사",
          "region": "울산광역시 울주군 서생면 신암리 일원",
          "period": "2023-10-25~2026-12-31",
          "changes": "2. 계약내역 - 확정 계약금액(원): 61,574,440,000 → 62,806,897,000 ; 2. 계약내역 - 계약금액(원: 61,574,440,000 → 62,806,897,000 ; 2. 계약내역 - 매출액대비(%): 26.70 → 27.24",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112900751",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "강원에너지",
          "market": "코스닥",
          "what": "(광양 양극재 5단계) 수세설비",
          "amount_won": "23,769,000,000",
          "pct_of_sales": "33.3",
          "pct_check": "맞음",
          "counterparty": "(주)포스코퓨처엠",
          "region": "경상북도 포항시",
          "period": "2024-02-06~2026-11-30",
          "changes": "2. 계약내역 확정 계약금액 계약금액 총액(원) 매출액 대비(%): 23,487,000,000 23,487,000,000 32.9 → 23,769,000,000 23,769,000,000 33.3",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112900760",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "아시아나IDT",
          "market": "유가",
          "what": "정정신고(보고)",
          "amount_won": "17,402,000,000",
          "pct_of_sales": "9.24",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "인천국제공항",
          "period": "2024-04-09~2027-04-09",
          "changes": "2. 계약내역: - → - ; 계약금액(원): 17,402,000,000 → 19,723,207,933 ; 매출액대비(%): 9.24 → 10.47 ; 6. 주요 계약조건: - → - ; 계약금·선급금 유무: - → 무 ; 대금지급 조건 등: - → 청구일로부터 5일이내 지급 ; 9. 기타 투자판단과 관련한 중요사항: - 상기계약금액은 총 계약금액 24,860,000,000원 중 당사지분(70%) 해당금액으로 부가가치세 포함 금액입니다. - 상기 최근 매출액은 → - 상기 계약금액은 총 계약금액 25,091,325,399원 중 당사지분 해당금액으로 부가가치세 포함 금액입니다. - 2024-04-09~202",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112800713",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "스피어",
          "market": "코스닥",
          "what": "특수합금 공급계약",
          "amount_won": "16,670,996,245",
          "pct_of_sales": "17.43",
          "pct_check": "맞음",
          "counterparty": "미국 글로벌 우주항공 발사업체",
          "region": "해외",
          "period": "2026-11-12~2028-02-14",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112900694",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "금화피에스시",
          "market": "코스닥",
          "what": "기계배관설치공사(subcon-8)",
          "amount_won": "76,647,000,000",
          "pct_of_sales": "22.70",
          "pct_check": "맞음",
          "counterparty": "현대건설주식회사",
          "region": "울산 울주군 온산읍 온산로 147 산 44번지 일원",
          "period": "2024-10-07~2027-02-28",
          "changes": "2. 계약내역 - 확정 계약금액 - 계약금액 총액(원) - 매출액 대비(%): 73,104,000,000 73,104,000,000 21.65 → 76,647,000,000 76,647,000,000 22.70",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112900671",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "솔디펜스",
          "market": "코스닥",
          "what": "전술다련장 회로카드조립체",
          "amount_won": "3,097,600,000",
          "pct_of_sales": "14.24",
          "pct_check": "맞음",
          "counterparty": "한화에어로스페이스(주)",
          "region": "국내",
          "period": "2025-07-04~2027-05-10",
          "changes": "5. 계약기간 - 종료일: 2027-02-10 → 2027-05-10",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112900642",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "HD한국조선해양",
          "market": "유가",
          "what": "정정신고(보고)",
          "amount_won": "317,300,000,000",
          "pct_of_sales": "3.51",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "오세아니아",
          "period": "2024-01-05~2026-11-12",
          "changes": "5. 계약기간 - 종료일: 2027-03-31 → 2026-11-12 ; 6.주요 계약조건 - 계약금·선급금 유무: - → 유 ; 6.주요 계약조건 - 대금지급 조건 등: - → 공사진척에 따른 수금",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112800674",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "HD현대중공업",
          "market": "유가",
          "what": "정정신고(보고)",
          "amount_won": "317,300,000,000",
          "pct_of_sales": "3.51",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "오세아니아",
          "period": "2024-01-05~2026-11-12",
          "changes": "5. 계약기간 - 종료일: 2027-03-31 → 2026-11-12 ; 6.주요 계약조건 - 계약금·선급금 유무: - → 유 ; 6.주요 계약조건 - 대금지급 조건 등: - → 공사진척에 따른 수금",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112800662",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "에스아이리소스",
          "market": "코스닥",
          "what": "단일판매ㆍ공급계약해지",
          "amount_won": "",
          "pct_of_sales": "21.02",
          "pct_check": "",
          "counterparty": "한국중부발전(주)",
          "region": "",
          "period": "2026-05-01~2026-12-15",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112900619",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "테스",
          "market": "코스닥",
          "what": "반도체 제조장비",
          "amount_won": "48,080,000,000",
          "pct_of_sales": "13.69",
          "pct_check": "맞음",
          "counterparty": "SK하이닉스",
          "region": "대한민국",
          "period": "2026-11-11~2027-10-04",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112900396",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "남화토건",
          "market": "코스닥",
          "what": "23-U-정수시설 이전 시설공사(5010)",
          "amount_won": "14,807,324,720",
          "pct_of_sales": "16.31",
          "pct_check": "맞음",
          "counterparty": "국군중앙계약관",
          "region": "경남 진해시 일대",
          "period": "2023-12-28~2026-12-15",
          "changes": "2.계약내역/계약금액 총액(원): 14,088,989,720 → 14,807,324,720 ; 2.계약내역/매출액 대비(%): 15.52 → 16.31",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112900401",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "우원개발",
          "market": "코스닥",
          "what": "도봉산-옥정 광역철도 2공구 건설공사",
          "amount_won": "65,315,000,000",
          "pct_of_sales": "22.50",
          "pct_check": "맞음",
          "counterparty": "(주)한화",
          "region": "경기도 의정부시 산단로76번길 93",
          "period": "2020-07-27~2027-12-31",
          "changes": "2. 계약내역 계약금액(원) 2. 계약내역 매출액대비(%): 63,253,000,000 21.79 → 65,315,000,000 22.50",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112900374",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "한신공영",
          "market": "유가",
          "what": "정정신고(보고)",
          "amount_won": "91,386,766,900",
          "pct_of_sales": "7.5",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "세종특별시 연서면 월하리 일원",
          "period": "2021-12-31~2027-12-30",
          "changes": "2. 계약내역 계약금액(원): 89,574,200,100 → 91,386,766,900 ; 2. 계약내역 매출액대비(%): 7.3 → 7.5 ; 9. 기타 투자판단과 관련한 중요사항: 3. 총공사금액은 99,526,889,000원이며 당사 지분은 90%(89,574,200,100원)입니다. → 3. 총공사금액은 101,005,124,000원이며 당사 지분은 91,386,766,900원입니다.",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112800313",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "프레스티지바이오로직스",
          "market": "코스닥",
          "what": "상업용 원료의약품 위탁생산 계약",
          "amount_won": "15,495,476,868",
          "pct_of_sales": "58.11",
          "pct_check": "맞음",
          "counterparty": "-",
          "region": "-",
          "period": "2026-11-12~2027-12-31",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112900312",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "한울소재과학",
          "market": "코스닥",
          "what": "2026년 재난안전통신망 A·B사업구역 구축(PTN)",
          "amount_won": "3,555,135,144",
          "pct_of_sales": "26.46",
          "pct_check": "맞음",
          "counterparty": "(주)케이티",
          "region": "대한민국",
          "period": "2026-11-11~2027-11-30",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112900272",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "미래컴퍼니",
          "market": "코스닥",
          "what": "반도체 제조 장비 공급",
          "amount_won": "4,800,000,000",
          "pct_of_sales": "11.74",
          "pct_check": "맞음",
          "counterparty": "삼성전자 주식회사",
          "region": "국내",
          "period": "2026-11-11~2027-12-30",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112900177",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "AP위성",
          "market": "코스닥",
          "what": "차세대 위성통신 스마트폰(ThurayaTwo) 2종 개발 및 공급",
          "amount_won": "14,729,123,304",
          "pct_of_sales": "30",
          "pct_check": "계산 30.81%",
          "counterparty": "STAR SATELLITE COMMUNICATIONS COMPANY-PJSC",
          "region": "UAE",
          "period": "2026-11-11~2033-04-08",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112900140",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "대한조선",
          "market": "유가",
          "what": "단일판매ㆍ공급계약 체결",
          "amount_won": "249,800,000,000",
          "pct_of_sales": "20.34",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "오세아니아 지역",
          "period": "2026-11-11~2030-06-28",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112800130",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        }
      ],
      "dart_others": [
        {
          "company": "케이디켐",
          "market": "코스닥",
          "kind": "주권매매거래정지해제 (우회상장 미해당)",
          "changes": "",
          "numbers": "",
          "body_from": "공시 화면",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112901212",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "모아데이타",
          "market": "코스닥",
          "kind": "최대주주변경을수반하는주식담보제공계약체결",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112901188",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "모아데이타",
          "market": "코스닥",
          "kind": "최대주주변경을수반하는주식담보제공계약해제ㆍ취소등",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112901186",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "모아데이타",
          "market": "코스닥",
          "kind": "주권매매거래정지 (상장적격성 실질심사 대상 (사유발생))",
          "changes": "",
          "numbers": "",
          "body_from": "공시 화면",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112901189",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "모아데이타",
          "market": "코스닥",
          "kind": "최대주주변경",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112901187",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "씨씨에스",
          "market": "코스닥",
          "kind": "[기재정정]경영권변경등에관한계약체결",
          "changes": "4. 기타 투자판단에 참고할 사항: - 상기[ 2. 주요 계약 내용]의 양수도 대금은 최초 주식 이전과 대금지급 조건에 따른 것이며, 추가적인 주식 양수도에 관한 계약이 별도 체결 → - 상기[ 2. 주요 계약 내용]의 양수도 대금은 최초 주식 이전과 대금지급 조건에 따른 것입니다. - 2026.11.12. '갑1'은 '을'과 ; [경영권 양수인(법인인 경우)에 관한 사항] 5. 법인의 최대주주명 - 보유지분율(%): (주)에임브릿지파트너스 34.43 → (주)백파홀딩스 42.62",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112901183",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "씨씨에스",
          "market": "코스닥",
          "kind": "최대주주변경을수반하는주식양수도계약체결",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112901182",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "모아라이프플러스",
          "market": "코스닥",
          "kind": "최대주주변경을수반하는주식담보제공계약해제ㆍ취소등",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112901181",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "디와이디",
          "market": "코스닥",
          "kind": "소송등의제기ㆍ신청(일정금액이상의청구) (회생담보권자표 기재 무효확인)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112901166",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "모아라이프플러스",
          "market": "코스닥",
          "kind": "주권매매거래정지기간변경",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112901143",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "유니슨",
          "market": "코스닥",
          "kind": "주요사항보고서(자기전환사채만기전취득결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112000721",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "에피소드컴퍼니",
          "market": "코스닥",
          "kind": "유상증자또는주식관련사채등의청약결과(자율공시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112901162",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "에코글로우",
          "market": "코스닥",
          "kind": "경영권변경등에관한계약체결",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112901125",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "이지스밸류플러스리츠",
          "market": "유가",
          "kind": "[기재정정]부동산투자회사자금차입",
          "changes": "1. 차입내역-차입금액(원): 55,000,000,000 → 44,000,000,000 ; 2. 자기자본대비(%): 14.5 → 11.6 ; 4. 기타 투자판단과 관련한 중요사항: 3) 차입조건 - 약정금액: 금 오백오십억원(￦55,000,000,000) → 3) 차입조건 - 약정금액: 금 사백사십억원(￦44,000,000,000) ; 4. 기타 투자판단과 관련한 중요사항: 3) 차입조건 - 담보: 이지스일반사모부동산투자신탁97호 수익증권, 이지스일반사모부동산투자신탁248호 수익증권 (채권최고액: 대출 약정금액의 1 → 3) 차입조건 - 담보: 이지스일반사모부동산투자신탁97호 수익증권, 이지스일반사모부동산투자신탁248호 수익증권 (채권최고액: 대출 약정금액의 1",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112801118",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "NICE",
          "market": "유가",
          "kind": "주식소각결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112801041",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "바이브컴퍼니",
          "market": "코스닥",
          "kind": "주요사항보고서(유상증자결정)",
          "changes": "",
          "numbers": "종류 유상증자 · 목적: 타법인 증권 취득(원) 2,989,999,012 · 신주 보통주(주) 2,346,938 · 1주당 액면가(원) 500 · 증자 전 보통주(주) 13,154,712 · 증자 방식 제3자배정증자",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112000665",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "케이디켐",
          "market": "코스닥",
          "kind": "주요사항보고서(회사합병결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112000698",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "케이디켐",
          "market": "코스닥",
          "kind": "주권매매거래정지 (우회상장여부 및 요건충족확인)",
          "changes": "",
          "numbers": "",
          "body_from": "공시 화면",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112901113",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "바이브컴퍼니",
          "market": "코스닥",
          "kind": "경영권변경등에관한계약체결",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112900980",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "포스뱅크",
          "market": "코스닥",
          "kind": "연결재무제표기준영업(잠정)실적(공정공시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112901066",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "이지스밸류플러스리츠",
          "market": "유가",
          "kind": "타법인주식및출자증권처분결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112801079",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "옵트론텍",
          "market": "코스닥",
          "kind": "타인에대한채무보증결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112901065",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "시너지이노베이션",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(타법인주식및출자증권양도결정)",
          "changes": "5. 양도예정일자: 2026년 11월 12일 → - ; 7. 거래대금지급: 1) 거래대금 수령방법 : 현금2) 대금지급시기가. 계약금 : 3,200,000,000원(2025년 8월 6일)나. 추가 계약금 : 3,000, → 1) 거래대금 수령방법 : 현금2) 대금지급시기가. 계약금 : 3,200,000,000원(2025년 8월 6일)나. 추가 계약금 : 3,000, ; 13. 기타 투자판단과 관련한 중요사항: 10) 당사는 본 거래의 잔금 지급 지연 등과 관련하여 매수인 측의 요청 및 당사자 간 합의에 따라 2026년 09월 30일 자로 거래 종결 기 → 10) 당사는 2026년 9월 30일 체결한 추가계약에 따라 잔금 지급기한을 2026년 11월 12일로 변경하였으나, 동 기한까지 매수인 측의 ",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112000674",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "핑거",
          "market": "코스닥",
          "kind": "증권발행결과(자율공시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112901108",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "미래에셋증권",
          "market": "유가",
          "kind": "[기재정정]연결재무제표기준영업(잠정)실적(공정공시)",
          "changes": "매출액: 전년동기실적_당해실적 ('25.7.1~'25.9.30) :8,071,919 전년동기대비 증감율(%) :-7.1 → 전년동기실적_당해실적 ('25.7.1~'25.9.30) :6,672,431 전년동기대비 증감율(%) :12.4 ; 영업이익: 전년동기실적_당해실적 ('25.7.1~'25.9.30) :1,622,284 → 전년동기실적_당해실적 ('25.7.1~'25.9.30) :222,796 ; 법인세비용차감전계속사업이익: 전년동기실적_당해실적 ('25.7.1~'25.9.30) :1,846,685 → 전년동기실적_당해실적 ('25.7.1~'25.9.30) :447,197",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112801045",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "금호타이어",
          "market": "유가",
          "kind": "타인에대한채무보증결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112801086",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "프로티나",
          "market": "코스닥",
          "kind": "증권발행결과(자율공시) (제3자배정 유상증자-전환우선주)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112901049",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "한울반도체",
          "market": "코스닥",
          "kind": "[기재정정]최대주주변경을수반하는주식담보제공계약체결",
          "changes": "[개별 담보제공 계약에 관한 사항] 순번 1 담보제공기간 종료일 계약체결일: 2026-11-12 2026-08-12 → 2026-12-14 2026-11-12",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112901072",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "디에스케이",
          "market": "코스닥",
          "kind": "[기재정정]최대주주변경을수반하는주식양수도계약체결",
          "changes": "양수도 대금의 지급일정 및 지급조건 등에 관한 사항 5. 매매대금 지급일정: 4) [잔금] 66,646,364,000원 (2026.11.12, 15시) → 4) [잔금] 66,646,364,000원 (미정) ; 6. 거래종결일: 본 계약 및 2026년 9월 30일 체결된 일정 수정계약서에 따라, 거래종결일 및 거래종결을 위한 임시주주총회 개최일은 2026년 11월 30일 → 본 계약 및 수정계약서에 따라 매수인 및 주식양수인은 2026년 11월 12일 15시까지 잔금을 지급하여야 합니다. 그러나 2026년 11월 1",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112901040",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "프로티나",
          "market": "코스닥",
          "kind": "증권발행결과(자율공시) (제1회차 CB)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112901053",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "파버나인",
          "market": "코스닥",
          "kind": "[기재정정]최대주주변경을수반하는주식담보제공계약체결",
          "changes": "- 담보권 전부 실행시 소유주식수(주) 지분율(%) - 담보제공내역 담보제공주식총수 - 개별담보제공계약 채권: 779,242 6.88 2,239,540 리드코프 360,540 522,000 2026-05-12~2026-11-12 → 658,432 5.81 2,360,350 리드코프 390,540 612,810 2026-05-12~2027-05-12",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112901039",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "아이텍",
          "market": "코스닥",
          "kind": "주요사항보고서(자기전환사채매도결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112000634",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "티와이홀딩스",
          "market": "유가",
          "kind": "[기재정정]타인에대한채무보증결정(자회사의 주요경영사항)",
          "changes": "2. 채권자: 광주은행, 대구은행 → 광주은행, 아이엠뱅크(구.대구은행) ; 4. 채무보증기간 - 시작일 - 종료일: 2023-08-22 2027-05-30 → 2023-08-22 2030-08-29 ; 5. 채무보증 총 잔액(원): 10,274,438,126,854 → 4,320,483,966,854 ; 7. 기타 투자판단과 관련한 주요사항: - 본 공시는 2024.05.30에 체결된 기업개선계획 이행을 위한 약정(MOU)에 따라, 체결일로부터 3년간 금융채권의 행사가 유예되는 건임. → - - 상기 '5. 채무보증 총 잔액'은 아래와 같이 구성됨. ① PF대출보증 : 29,122 억원 (미사용한도 7,888억원) ② 중도금대출보",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112800973",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "하나마이크론",
          "market": "코스닥",
          "kind": "타인에대한채무보증결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112900988",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "두산퓨얼셀",
          "market": "유가",
          "kind": "유상증자또는주식관련사채등의발행결과(자율공시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112800996",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "미래반도체",
          "market": "코스닥",
          "kind": "단기차입금증가결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112900992",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "인피니트헬스케어",
          "market": "코스닥",
          "kind": "소송등의판결ㆍ결정 ((경영권분쟁소송)정관효력 정지 등 가처분-취하)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112900925",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "태영건설",
          "market": "유가",
          "kind": "[기재정정]타인에대한채무보증결정",
          "changes": "2. 채권자: 광주은행, 대구은행 → 광주은행, 아이엠뱅크(구.대구은행) ; 4. 채무보증기간 - 시작일 - 종료일: 2023-08-22 2027-05-30 → 2023-08-22 2030-08-29 ; 5. 채무보증 총 잔액(원): 10,274,438,126,854 → 4,320,483,966,854 ; 7. 기타 투자판단과 관련한 주요사항: - 본 공시는 2024.05.30에 체결된 기업개선계획 이행을 위한 약정(MOU)에 따라, 체결일로부터 3년간 금융채권의 행사가 유예되는 건임. → - - 상기 '5. 채무보증 총 잔액'은 아래와 같이 구성됨. ① PF대출보증 : 29,122 억원 (미사용한도 7,888억원) ② 중도금대출보",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112800944",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "고스트스튜디오",
          "market": "코스닥",
          "kind": "연결재무제표기준영업(잠정)실적(공정공시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112900923",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "씨씨에스",
          "market": "코스닥",
          "kind": "소송등의판결ㆍ결정 (주주총회개최금지 가처분)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261112900914",
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
          "val": 43,
          "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
        },
        "summarized_today": {
          "val": 38,
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        "bad_numbers_today": {
          "val": 0,
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        "fed_speeches_total": {
          "val": 21,
          "source": "v2_secretary/결과/연준연설/"
        }
      },
      "items": [
        {
          "source_name": "연준 통화정책 RSS",
          "kind": "연준 공식 발표",
          "writer": "미국 연준",
          "title": "Federal Reserve announces revised tentative schedule of Federal Open Market Committee meetings in 2027",
          "easy1_title": "내년 연방공개시장위원회 회의 일정을 새로 정했어요",
          "easy1_desc": "연준이 2027년에 열릴 연방공개시장위원회(FOMC) 회의 일정을 다시 조정해서 발표했는데요. 이 회의는 미국 경제의 돈줄을 조절하는 통화 정책을 결정하는 아주 중요한 자리거든요. 총 8번의 정기 회의가 예정되어 있는데, 각 회의의 둘째 날에 정책 결정 내용을 공개할 계획이라는 말이에요.",
          "easy2_title": "10월 회의는 평소와 다르게 정책 전략만 깊게 논의할 거예요",
          "easy2_desc": "대부분의 회의는 통화 정책을 다루지만, 10월 26일부터 27일까지 열리는 회의는 조금 특별하게 운영할 계획이라고 밝혔어요. 이날은 구체적인 금리 결정보다는 통화 정책의 큰 방향과 전략을 논의하는 데에만 집중하겠다는 거예요. 다른 회의와 달리 정책 결정을 발표하지 않는다는 점이 가장 큰 차이점이라고 볼 수 있습니다.",
          "topic": "2027년 연방공개시장위원회(FOMC)의 정기 회의 일정과 운영 계획을 알리는 내용입니다.",
          "points": [
            "2027년 회의 일정 확정: 연준은 2027년 1월부터 11월까지 총 8번의 회의를 화요일과 수요일에 걸쳐 진행할 계획이에요. 2028년 1월 회의 일정까지 미리 잡아두었는데, 모든 회의는 이틀 동안 이어지는 구조입니다.",
            "통화 정책 결정 방식: 회의가 열리는 이틀 중 마지막 날에 그동안 논의한 통화 정책의 결과를 대중에게 공개하는 것이 연준의 관례인데요. 10월 회의를 제외한 모든 정기 회의에서 이 같은 방식으로 정책 결정을 발표하겠다는 겁니다.",
            "특별 회의의 목적: 10월 26일부터 27일까지 열리는 회의는 정책 결정보다는 통화 정책의 전반적인 전략을 검토하는 시간으로 활용할 예정이에요. 쉽게 말하면, 당장의 금리 결정보다는 장기적인 정책의 틀을 고민하는 자리라는 말입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "945",
          "link": "https://www.federalreserve.gov/newsevents/pressreleases/monetary20261112a.htm",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "국회 외교통일위원회, 2027년도 예산안 및 기금운용계획안, 법률안 등 상정",
          "easy1_title": "국회 외교통일위원회가 내년도 예산과 주요 법안을 심사하기 시작했어요",
          "easy1_desc": "국회 외교통일위원회가 11월 12일 전체회의를 열고 2027년도 예산안과 기금운용계획안, 그리고 여러 법률안을 상정했습니다. 이게 뭔 소리냐면, 정부가 내년에 외교부나 통일부 같은 곳에서 돈을 어떻게 쓸지 계획한 것을 국회가 꼼꼼히 따져보겠다는 말이에요. 앞으로 소위원회를 거쳐서 구체적인 심사가 이어질 예정입니다.",
          "easy2_title": "안보 상황을 직접 살피고 한미 의회 간의 협력도 챙기기로 했어요",
          "easy2_desc": "송석준 위원장은 남북 긴장 상황을 점검하기 위해 12월 백령도와 내년 1월 비무장지대(DMZ)를 방문하겠다는 계획을 밝혔습니다. 또한 미국 중간선거에서 당선된 한국계 의원들에게 축하 서한을 보내 한미 의회 간의 관계를 단단히 하겠다는 건데요. 대통령 전용기 개인정보 노출 사고에 대한 대책 마련도 함께 요구했습니다.",
          "topic": "국회 외교통일위원회가 2027년도 예산안과 주요 외교·안보 현안을 논의하고 향후 심사 일정을 확정했습니다.",
          "points": [
            "예산 및 법안 심사 일정: 상정된 예산안은 11월 17일부터 18일까지 예산·결산·기금심사 소위원회에서 심사한 뒤 19일에 전체회의에서 의결할 예정입니다. 법률안과 동의안 등은 11월 24일 법안심사소위에서 다룰 계획이라는 거예요.",
            "주요 외교·안보 현안 질의: 회의에서는 미국 중간선거 이후의 한미관계나 북미대화 전망을 비롯해 북한의 가상자산 탈취 의혹 같은 민감한 주제들이 논의되었습니다. 주미대사관 감찰 문제나 대통령 전용기 정보 노출 사고에 대한 질의도 이어졌거든요.",
            "안보 점검 및 의회 외교: 송석준 위원장은 안보 상황을 직접 확인하기 위해 백령도와 비무장지대 방문을 추진한다고 밝혔습니다. 아울러 미국 내 한국계 의원들과의 협력을 강화하고 부처 간의 긴밀한 협의를 당부하는 등 외교적 행보를 강조했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "1182",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5303958",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "돈 없어도 실력으로 변호사 되는 사다리, 다시 놓겠다… ‘사법시험 부활법’「변호사시험법 일부개정법률안」대표발의",
          "easy1_title": "돈 없어도 실력으로 변호사 되는 사다리를 다시 놓으려 합니다",
          "easy1_desc": "현재 법조인이 되는 길은 로스쿨 하나뿐인데, 등록금과 생활비가 1억 원이 넘게 들거든요. 그러다 보니 2025년 1학기 로스쿨 재학생 10명 중 7명이 고소득층으로 추정되는 상황이에요. 최혁진 의원은 이런 구조가 부모의 경제력을 대물림하는 현대판 음서제와 다름없다고 봤습니다. 그래서 누구나 실력만 있으면 법조인에 도전할 수 있도록 예비시험을 신설하겠다는 계획이에요.",
          "easy2_title": "로스쿨과 예비시험을 함께 운영해 기회의 문을 넓히겠습니다",
          "easy2_desc": "이번 개정안은 로스쿨을 없애는 게 아니라, 로스쿨과 예비시험이라는 두 가지 경로를 병행하겠다는 거예요. 예비시험에 합격하면 로스쿨을 졸업하지 않아도 변호사시험을 볼 수 있게 되는데요. 로스쿨 재학생이나 졸업자는 예비시험을 볼 수 없게 해서 두 제도가 각자의 역할을 하도록 설계했다는 겁니다. 돈이 없어도 실력과 땀만으로 법조인이 될 수 있는 길을 만들겠다는 의지예요.",
          "topic": "최혁진 의원이 로스쿨을 거치지 않고도 변호사시험에 응시할 수 있는 예비시험 제도를 도입하는 사법시험 부활법을 대표발의했습니다.",
          "points": [
            "로스쿨의 경제적 진입장벽: 로스쿨은 3년 등록금만 5천만 원이 넘고 생활비까지 합치면 1억 원이 넘는 비용이 듭니다. 이 때문에 기초생활수급자나 차상위계층의 비율은 5.2%에 불과한 실정이에요. 경제적 여건이 법조인 자격 취득에 큰 영향을 미치고 있다는 겁니다.",
            "변호사 예비시험 신설: 법무부장관이 매년 1회 예비시험을 실시해 합격자에게 변호사시험 응시자격을 주겠다는 계획입니다. 대학뿐만 아니라 방송통신대나 학점은행제 등에서 일정 학점 이상의 법학과목을 이수하면 누구나 응시할 수 있게 문턱을 낮췄어요. 실력 검증을 통해 로스쿨 외의 새로운 진입 경로를 열겠다는 겁니다.",
            "제도 간의 엄격한 이원화: 로스쿨 재학생이나 졸업자는 예비시험에 응시할 수 없도록 법으로 막아 두었습니다. 이는 예비시험이 로스쿨의 우회로로 활용되는 것을 방지하기 위해서인데요. 두 제도가 서로 겹치지 않고 각자의 역할을 하며 나란히 운영되도록 설계했다는 점이 특징이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "2361",
          "link": "https://www.nanet.go.kr/lowcontent/assamblybodo/selectAssamblyBodoDetail.do?searchSeq=200228&searchNoSeq=20261112200228",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "국회·정부·산업계 “K-FDE 예산 확보” 한목소리… 임문영 “K-FDE로 숙련공 경험과 청년 AI 잇는다”",
          "easy1_title": "청년의 AI 기술과 숙련공의 경험을 하나로 묶어 현장을 바꿉니다",
          "easy1_desc": "한국형 현장배치 엔지니어인 K-FDE는 기업 현장에 직접 들어가 AI 기술로 문제를 해결하는 사람들을 말합니다. 임문영 의원은 숙련된 기술자의 노하우와 청년의 AI 역량을 합치면 제조업의 인공지능 전환이 빨라질 것으로 봤는데요. 쉽게 말하면, 현장을 잘 아는 베테랑과 새로운 기술을 가진 청년이 함께 일하며 시너지를 내겠다는 겁니다.",
          "easy2_title": "K-FDE가 자리 잡도록 국회와 정부가 예산 지원에 나섭니다",
          "easy2_desc": "토론회에 참석한 산업통상부와 중소벤처기업부는 K-FDE 사업의 필요성에 공감하며 정책적으로 돕겠다는 뜻을 밝혔습니다. 임문영 의원은 이 사업이 실질적인 성과를 내려면 이번 국회 예산심사에서 관련 예산이 반드시 반영되어야 한다고 강조했는데요. 정부와 국회가 한목소리를 내는 만큼, 앞으로 제조업 현장에 AI를 도입하는 사업이 더 탄력을 받을 것으로 보입니다.",
          "topic": "제조업의 인공지능 전환을 위해 청년 인재와 숙련공을 연결하는 한국형 현장배치 엔지니어(K-FDE) 생태계를 구축하려는 논의입니다.",
          "points": [
            "K-FDE의 역할과 필요성: FDE는 기업 현장에 직접 투입되어 문제를 진단하고 AI 기술을 공정에 적용하는 엔지니어를 말합니다. 임문영 의원은 AI 장비보다 중요한 것이 사람이라며, 숙련공의 경험과 청년의 AI 역량이 결합해야 제조업의 디지털 전환이 가능하다고 강조했습니다.",
            "산업 생태계 조성의 중요성: 전문가들은 단순히 인재를 양성하는 것에서 끝나서는 안 된다고 지적했습니다. 이들이 일하고 성장할 수 있는 국내 AI 기업을 함께 키워야 한다는 것인데요. 그래야만 현장의 기술과 노하우가 기업에 계속 쌓이는 선순환 구조가 만들어진다는 겁니다.",
            "성과 중심의 지원 체계: 중소기업이 AI를 도입할 때 느끼는 부담을 줄여주기 위해 성과 중심의 지원이 필요하다는 의견도 나왔습니다. 실제 업무와 공정이 얼마나 개선되었는지를 기준으로 평가하고, 지역 기반의 인력을 육성해 성공 경험을 산업 전반으로 넓혀가야 한다는 계획입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 정부와 국회가 한목소리를 내는 만큼, 앞으로 제조업 현장에 AI를 도입하는 사업이 더 탄력을 받을 것으로 보",
          "body_chars": "2597",
          "link": "https://www.nanet.go.kr/lowcontent/assamblybodo/selectAssamblyBodoDetail.do?searchSeq=200227&searchNoSeq=20261112200227",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "산업부 보도 RSS(POST)",
          "kind": "산업통상부 보도자료",
          "writer": "산업통상부",
          "title": "통상교섭본부장, 민관 원팀으로 EU 고위급 통상외교 총력전",
          "easy1_title": "유럽의회 의원들을 직접 만나 우리 기업의 어려움을 알리고 왔습니다",
          "easy1_desc": "박정성 통상교섭본부장이 벨기에에 가서 유럽의회 의원 24명을 연쇄 면담했는데요. 유럽의 산업가속화법(IAA)이 만들어지는 과정에서 우리 기업이 차별받지 않게 해달라고 직접 요청한 겁니다. 우리 기업들이 유럽의 투자와 고용에 기여하고 있다는 점을 강조하며, 신뢰할 수 있는 파트너로 인정해 달라는 뜻을 전달한 셈이에요.",
          "easy2_title": "민관이 힘을 합쳐 유럽의 통상 현안에 대응하겠다는 계획입니다",
          "easy2_desc": "이번 방문은 자동차와 배터리 등 주요 업계 관계자들이 함께 참여한 첫 민관합동 현지 아웃리치였는데요. 유럽 집행위와도 만나 하이브리드차 세이프가드(긴급수입제한조치) 조사나 탄소국경조정제도(CBAM) 같은 현안을 논의했습니다. 앞으로도 민관합동 TF를 중심으로 우리 기업의 입장이 입법에 반영되도록 계속 소통하겠다는 계획이에요.",
          "topic": "박정성 통상교섭본부장이 유럽을 방문하여 EU의 산업가속화법 등 주요 통상 현안에 대해 우리 측 입장을 전달하고 협력을 논의했습니다.",
          "points": [
            "유럽의회 대상 민관합동 아웃리치: 박 본부장과 주요 업계 관계자들이 유럽의회 의원 24명을 만나 우리 기업의 기여도를 설명했습니다. 특히 공공조달에서 신뢰 파트너로 인정해 달라고 요청했는데요. 한국산 철강과 원전 기자재가 유럽의 산업과 에너지 안보에 도움을 주고 있다는 점을 강조한 겁니다.",
            "EU 집행위와 주요 통상현안 협의: EU 통상·경제안보 담당 집행위원과 만나 하이브리드차 세이프가드 조사에 대해 객관적인 조사를 요구했습니다. 만약 쿼터(수입 물량 제한)를 도입하더라도 우리 업계의 수출 영향을 최소화해 달라고 당부했는데요. 탄소국경조정제도와 관련해서도 우리 검증기관을 신속하게 인정해 달라고 요청한 상태입니다.",
            "한-EU 경쟁력 파트너십 강화: 한-EU FTA 발효 15주년을 맞아 양측 기업인들이 참여하는 네트워킹 리셉션을 열었습니다. 박 본부장은 지난 15년간 교역이 상호호혜적으로 성장해 왔음을 강조했는데요. 보호무역주의보다는 혁신적인 협력을 통해 경쟁력을 높이는 것이 산업가속화법이 지향해야 할 목적이라고 밝혔습니다."
          ],
          "evidence_ok": "4/6",
          "bad_numbers": "",
          "check_flags": "easy2 근거 원문에 없음; point3 근거 원문에 없음",
          "body_chars": "3624",
          "link": "https://www.motir.go.kr/kor/article/ATCLe0854704d/172404/view",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "산업부 보도 RSS(POST)",
          "kind": "산업통상부 보도자료",
          "writer": "산업통상부",
          "title": "정부, WTO에서 우리 수출기업 발목 잡는 해외 기술규제 대응 나서",
          "easy1_title": "해외에서 우리 기업을 막는 기술 규제 문제를 WTO에서 따져 봤습니다",
          "easy1_desc": "산업통상부와 식품의약품안전처가 2026년 제3차 세계무역기구 무역기술장벽(WTO TBT) 위원회에 참석했는데요. 배터리나 반도체 같은 우리 주력 상품이 해외의 까다로운 규제 때문에 수출길이 막히지 않도록 다자 및 양자 협상을 벌인 겁니다. 쉽게 말하면, 우리 기업의 발목을 잡는 해외의 기술 장벽을 허물기 위해 정부가 직접 나선 셈이에요.",
          "easy2_title": "각국이 자국 산업을 보호하려고 만든 규제들이 우리에겐 큰 부담이거든요",
          "easy2_desc": "최근 세계 여러 나라가 자국 산업을 키우려고 기술 규제를 방패처럼 활용하는 사례가 늘고 있는데요. 유럽연합의 배터리 규정이나 중국의 의료기기 감독관리조례 같은 것들이 우리 기업에는 새로운 수출 부담으로 작용하고 있다는 말이에요. 정부는 이런 규제들이 우리 기업에 미칠 영향을 파악해서 적극적으로 대응하겠다는 계획입니다.",
          "topic": "정부가 해외의 무역기술장벽(TBT) 문제를 해결하기 위해 WTO 위원회에서 다각도로 협상을 진행했다는 내용입니다.",
          "points": [
            "특정무역현안 제기: 정부는 유럽연합의 배터리 재활용 규정이나 중국의 의료기기 조례처럼 우리 수출에 타격을 줄 수 있는 규제들을 특정무역현안으로 공식 제기했습니다. 인도네시아의 오디오·비디오 제품 인증 규제에 대해서도 다른 나라들과 힘을 합쳐 우리 업계의 우려를 전달했거든요. 규제 장벽을 낮추려는 정부의 의지가 담긴 조치로 보입니다.",
            "양자 협의를 통한 애로 해소: 다자간 회의뿐만 아니라 인도의 자동차 생산자 책임 규정 개정안처럼 개별 국가의 규제에 대해서도 따로 협의를 진행했습니다. 우리 기업이 겪는 부담을 직접 전달하고 이를 어떻게 풀어나갈지 논의한 건데요. 일대일로 만나서 실질적인 해소 방안을 찾으려 했다는 점이 특징입니다.",
            "정부의 지원과 업계 협력: 김규성 국가기술표준원장은 앞으로도 해외 기술 규제로 인한 기업들의 어려움을 해결하기 위해 정부가 계속 노력하겠다고 밝혔습니다. 그러면서 기업들도 정부가 운영하는 TBT 협의 채널을 적극적으로 활용해 달라고 당부했는데요. 정부의 지원을 받으면서 기업이 현장의 목소리를 더 많이 내야 한다는 뜻으로 보입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "1110",
          "link": "https://www.motir.go.kr/kor/article/ATCLe0854704d/172403/view",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "산업부 보도 RSS(POST)",
          "kind": "산업통상부 보도자료",
          "writer": "산업통상부",
          "title": "(설명자료)산업기술 유출 방지를 위해 관계기관은 긴밀히 협력하고 있습니다",
          "easy1_title": "기술 유출 막으려고 여러 부처가 손잡고 일하고 있어요",
          "easy1_desc": "기술 유출 대응 체계가 국정원이나 경찰청 등으로 흩어져 있어서 따로 논다는 지적이 있었는데요, 정부는 이미 범부처 기술유출 합동 대응단 같은 조직을 운영하며 긴밀하게 협력하고 있다고 밝혔어요. 반도체 같은 핵심 기술을 지키기 위해 예방부터 수사까지 정보를 공유하고 있다는 말이에요. 쉽게 말하면, 부처들이 각자 움직이는 게 아니라 범정부 차원에서 한 몸처럼 대응하고 있다는 겁니다.",
          "easy2_title": "앞으로는 법도 고치고 더 촘촘하게 기술을 지킬 계획이에요",
          "easy2_desc": "정부는 핵심 기술이 빠져나가는 걸 국가 경제에 큰 위협이라고 보고, 앞으로 대응 역량을 더 높이겠다는 계획을 밝혔는데요. 산업기술보호법 같은 관련 법을 개정하고, 제6차 산업기술보호 종합계획(’27-’29)을 세워 현장 중심의 보호를 강화하겠다는 거예요. 정책이 정교해지는 장점이 있는데, 대신 기관 간의 공조가 얼마나 실질적으로 작동하느냐가 관건이라는 점도 같이 따라온다는 겁니다.",
          "topic": "산업기술 유출을 막기 위해 정부 부처들이 어떻게 협력하고 대응하고 있는지에 대한 설명이에요.",
          "points": [
            "부처별 역할과 협력: 산업부는 산업기술보호법을 통해 관리 기준을 제시하고, 국정원은 해외 유출 첩보를 수집하며, 경찰청과 중대범죄수사청 등은 직접 수사를 맡고 있어요. 각 기관이 전담 인력을 늘리고 상시로 정보를 나누며 빈틈없이 공조하고 있다는 말이에요. 뭔 소리냐면, 각자의 전문 분야에서 역할을 수행하면서도 수사 정보는 서로 연결해 대응한다는 뜻이에요.",
            "합동 대응 체계 운영: 기술 유출을 막기 위해 범부처 기술유출 합동 대응단이나 국가방첩전략회의 같은 협의체를 운영하고 있다고 밝혔는데요. 핵심 기술의 유출 동향을 공유하고 이를 정책에 바로 반영하는 구조예요. 쉽게 말하면, 현장의 상황을 정부 정책에 빠르게 녹여내려는 시도라는 겁니다.",
            "향후 대응 계획: 정부는 앞으로 합동 대응단을 정례적으로 열어 공조를 더 강화하겠다고 밝혔어요. 또한 법 개정을 통해 대응 역량을 높이고, 제6차 산업기술보호 종합계획(’27-’29)을 수립해 현장 중심의 보호를 이어가겠다는 계획이에요. 기술 안보를 위해 정부가 지속적으로 제도를 정비하겠다는 의지로 보입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "1471",
          "link": "https://www.motir.go.kr/kor/article/ATCLe0854704d/172402/view",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "산업부 보도 RSS(POST)",
          "kind": "산업통상부 보도자료",
          "writer": "산업통상부",
          "title": "산업부, 장관 주재 「팀코리아 체코 원전사업 추진현황 점검회의」 개최",
          "easy1_title": "체코 원전 사업이 차질 없이 진행되도록 팀코리아가 뭉쳤습니다",
          "easy1_desc": "산업통상부 김정관 장관이 팀코리아 공기업들과 함께 체코 두코바니 원전 사업의 진행 상황을 꼼꼼히 점검했는데요. 핵심은 2027년 4월 건설허가 신청과 2029년 11월 착공이라는 목표를 제때 달성하는 겁니다. 이를 위해 정부가 직접 관리와 지원을 강화하고, 참여 기업들은 서로 협력해서 한국 원전의 신뢰도를 높이겠다는 계획이에요. 쉽게 말하면, 사업의 연속성을 확보하기 위해 정부와 기업이 한 팀으로 움직이겠다는 말입니다.",
          "easy2_title": "시공사 교체 과정에서도 사업이 멈추지 않게 챙기겠습니다",
          "easy2_desc": "시공사 교체라는 변수가 생겼지만, 한국수력원자력은 2027년 7월까지 새로운 시공사를 뽑겠다는 구체적인 계획을 세웠는데요. 그전까지는 한수원이 직접 업무를 챙기거나 필요한 부분은 별도 계약을 맺어 공백을 없애겠다는 겁니다. 이렇게 하면 사업이 중단되지 않는다는 장점이 있지만, 대신 한수원의 업무 부담이 일시적으로 늘어날 수도 있다는 점도 같이 고려하고 있는 셈이에요.",
          "topic": "산업통상부가 팀코리아와 함께 체코 원전 사업의 주요 일정을 차질 없이 이행하기 위한 관리 체계를 점검하고 협력 방안을 논의했습니다.",
          "points": [
            "팀코리아 비상관리체제: 산업통상부는 11월부터 장관과 차관이 직접 주재하는 비상관리체제를 가동하고 있는데요. 이는 체코 원전 사업의 중요 마일스톤을 적기에 이행하기 위해 팀코리아 참여 기업들의 추진 현황을 면밀히 확인하려는 목적입니다.",
            "신규 시공사 선정 계획: 한수원은 2027년 7월까지 신규 시공사를 선정하기 위해 종합심사 낙찰제를 적용할 계획인데요. 이는 공사 수행 능력과 투명성을 확보하기 위함이며, 한전기술과 전담 TF를 구성해 신속하게 절차를 진행하겠다는 겁니다.",
            "정부의 외교적 지원: 정부는 체코 정부와 장관급 협의체와 국장급 주간회의 등 다양한 소통 채널을 가동하겠다고 밝혔는데요. 이를 통해 사업 추진에 필요한 협조 사항을 전달하고, 체코 측과의 신뢰를 지켜나가며 사업이 정상적으로 추진되도록 돕겠다는 계획입니다."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "easy2 근거 원문에 없음",
          "body_chars": "2818",
          "link": "https://www.motir.go.kr/kor/article/ATCLe0854704d/172401/view",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "교보증권",
          "title": "[교보증권] 클래시스 3Q26 Review: 내년을 바라보자",
          "easy1_title": "클래시스 실적이 기대보다 낮게 나왔지만 내년을 봐야 해요",
          "easy1_desc": "3분기 매출액은 830억 원으로 작년과 비슷했고 영업이익은 271억 원으로 시장의 기대치보다 낮게 나왔거든요. 국내에서 주력 제품인 슈링크와 볼뉴머 매출이 부진했고 신제품 판매도 아직은 더딘 상황이에요. 하지만 4분기부터는 마케팅 캠페인을 본격적으로 시작할 계획이라 매출 회복을 기대해 볼 수 있다는 겁니다.",
          "easy2_title": "중국과 미국 시장 진출로 장기적인 성장을 노리고 있어요",
          "easy2_desc": "지금은 실적이 주춤하는 구간이지만 중국에서 볼뉴머 인허가를 연내에 받는 것을 목표로 하고 있고 미국에서도 MPT 제품 출시를 준비 중이에요. 2027년에는 성능을 높인 업그레이드 장비도 나올 예정이라 장기적으로는 성장할 수 있는 발판이 마련되어 있다고 봤거든요. 당장의 마진율보다는 매출이 다시 살아나는지를 지켜보는 게 중요해요.",
          "topic": "클래시스의 3분기 실적을 분석하고 앞으로의 성장 가능성을 점검했어요.",
          "points": [
            "3분기 실적 부진: 3분기 영업이익은 271억 원으로 작년보다 28.2% 줄어들며 시장의 예상치를 밑돌았는데요. 국내 주력 제품의 매출이 줄어든 데다 신제품 마케팅 비용까지 겹치면서 수익성이 낮아진 셈이에요.",
            "마케팅 비용 증가와 매출 회복: 4분기에는 국내와 브라질 시장에서 마케팅 비용이 약 30억 원 정도 더 들어갈 것으로 증권사는 보고 있어요. 지금은 기존 제품의 성장세가 둔화된 상태라 비용보다는 매출이 얼마나 회복되는지에 집중해야 한다는 판단이에요.",
            "해외 시장 진출과 신제품 계획: 중국에서 볼뉴머 인허가를 연내에 마치고 대리점 재고를 출고할 계획이며 내년 초에는 울트라포머 허가도 기대하고 있어요. 미국 시장에서도 MPT 출시를 준비하고 있어 새로운 시장과 제품군을 넓히는 시기가 될 것으로 보입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 미국 시장에서도 MPT 출시를 준비하고 있어 새로운 시장과 제품군을 넓히는 시기가 될 것으로 보입니다.",
          "body_chars": "9726",
          "link": "https://m.stock.naver.com/research/company/98183",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "DS투자증권",
          "title": "[DS투자증권] 한국전력 피할 수 없는 선택지",
          "easy1_title": "한국전력은 지금 비용은 늘어나는데 요금 올릴 기미가 안 보여요",
          "easy1_desc": "한국전력의 상황을 살펴봤더니, 구조적으로 들어가는 비용은 계속 늘어나고 있거든요. 그런데 정작 전기 요금을 올리겠다는 신호는 전혀 없는 상태라는 말이에요. 회사는 연료비조정단가 상한을 조정할 가능성도 낮다고 밝혔는데요, 쉽게 말하면 비용 부담을 전기 요금으로 넘기지 못하는 구조가 굳어졌다는 겁니다.",
          "easy2_title": "실적도 예상보다 훨씬 낮게 나와서 목표주가를 낮췄어요",
          "easy2_desc": "증권사는 한국전력의 3분기 영업이익이 1.64조 원을 기록하며 시장의 기대치를 크게 밑돌았다고 봤는데요, 이게 어닝쇼크라는 겁니다. 비용 부담이 판매 가격으로 전이되지 않는 구조가 확인된 셈이라, 증권사는 목표주가를 기존 33,000원에서 31,000원으로 하향 조정했다고 밝혔습니다.",
          "topic": "한국전력은 비용 부담이 판매 가격으로 이어지지 않는 구조적 한계로 인해 실적 부진이 이어질 것으로 증권사는 전망했어요.",
          "points": [
            "실적 부진과 어닝쇼크: 한국전력의 3분기 매출액은 26.9조 원으로 전년 대비 2.6% 줄었고, 영업이익은 1.64조 원으로 70.9%나 급감했거든요. 이는 시장 컨센서스보다 32% 낮은 수치인데요, 증권사는 이를 두고 어닝쇼크라고 평가했습니다.",
            "비용 증가의 원인: 영업이익이 줄어든 건 월성1호기 복구충당부채 재산정과 온실가스 배출원가 같은 기타영업비용이 0.70조 원 늘어난 영향이 컸거든요. 여기에 중동 사태로 석유화학 업황이 나빠지면서 산업용 전력 판매량까지 감소한 점도 실적에 악영향을 줬다는 분석이에요.",
            "투자의견 중립 유지: 증권사는 원인자 부담 제도화나 독립적인 비용 회수 결정, 사채 한도 해소 같은 확실한 변화가 보일 때까지는 투자의견을 중립으로 유지하겠다고 밝혔거든요. 즉, 지금 당장 투자를 권하기보다는 회사의 구조적 문제가 해결되는지 지켜보겠다는 입장인 셈이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "13289",
          "link": "https://m.stock.naver.com/research/company/98182",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권] 달바글로벌 3Q26 Re: 견조한 실적, 주가는 바닥",
          "easy1_title": "달바글로벌이 3분기에 시장 기대만큼 잘해냈어요",
          "easy1_desc": "3분기 매출과 영업이익을 확인해 봤더니, 시장에서 예상했던 수준에 딱 맞춰서 양호한 성적을 거뒀거든요. 환율이 떨어지는 악재가 있었는데도 일본과 러시아를 포함한 여러 지역에서 매출이 고르게 늘어난 덕분이에요. 쉽게 말하면, 어려운 환경에서도 글로벌 시장에서 탄탄하게 성장하고 있다는 뜻이에요.",
          "easy2_title": "목표주가는 낮췄지만 지금 주가는 바닥이라고 봐요",
          "easy2_desc": "증권사는 환율 하락에 따른 매출 감소와 보수적인 수익성 전망을 반영해서 목표주가를 18.5만원으로 내렸는데요. 그렇지만 회사가 성장성과 수익성 관리를 모두 잘하고 있다는 점은 여전히 긍정적이라고 평가했어요. 그래서 지금의 주가는 충분히 바닥을 다진 상태라고 보고 앞으로 견조한 상승세를 예상한다는 거예요.",
          "topic": "달바글로벌의 3분기 실적을 평가하고 향후 성수기 모멘텀과 목표주가 조정 배경을 분석했어요.",
          "points": [
            "3분기 실적과 성장 요인: 환율이 내려갔음에도 불구하고 일본과 러시아 등 전 지역에서 매출이 늘어난 덕분에 영업이익이 101%나 증가했어요. 해외 오프라인 점포가 10,000개까지 늘어나면서 B2C와 B2B 매출이 모두 고르게 성장한 결과예요. 광고비와 판관비 비중이 줄어들면서 영업이익률도 21.5%까지 올라갔거든요.",
            "4분기 성수기 기대감: 4분기는 달바글로벌의 주력 제품인 미스트와 크림이 잘 팔리는 성수기인데요. 주요 지역 매출이 50% 내외로 늘어날 것으로 보이고, 특히 북미와 유럽에서 연말 행사 효과를 기대하고 있어요. 내년 1분기에는 코스트코 물량도 예정되어 있고, 중국 현지 법인을 세워 사업을 직접 챙길 계획이라고 해요.",
            "목표주가 하향 조정: 증권사는 환율 하락으로 인한 매출 감소가 불가피하다고 보고 실적 추정치를 낮췄는데요. 업종 전체의 밸류에이션 하락까지 고려해서 목표주가를 18.5만원으로 조정했어요. 하지만 경영진이 수익성 관리에 힘쓰고 있는 점은 높게 평가하며, 중장기적으로는 주가가 오를 것으로 내다봤어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 주요 지역 매출이 50% 내외로 늘어날 것으로 보이고, 특히 북미와 유럽에서 연말 행사 효과를 기대하고 있어",
          "body_chars": "12243",
          "link": "https://m.stock.naver.com/research/company/98181",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "한화투자증권",
          "title": "[한화투자증권] 한화 3Q26 Review : 한화생명 배당 재개 가능성에 주목",
          "easy1_title": "한화생명이 다시 배당을 시작할 수 있을지 지켜봐야 합니다",
          "easy1_desc": "한화의 3분기 실적을 살펴봤더니 건설과 글로벌 부문이 부진해서 영업이익이 작년보다 71% 줄어든 3,683억 원을 기록했거든요. 그런데 증권사는 한화생명의 배당 재개 가능성에 주목하고 있는데요. 금융당국이 해약환급준비금 제도를 완화해 주면 배당할 수 있는 이익이 생겨서 배당을 다시 시작할 수 있을 것으로 봤다는 거예요.",
          "easy2_title": "분할과 자회사 투자로 늘어난 빚은 앞으로 줄어들 것으로 보입니다",
          "easy2_desc": "인적분할과 자회사 유상증자에 참여하면서 3분기 말 기준으로 한화의 별도 순차입금이 5.1조 원까지 늘어났는데요. 하지만 3분기 이후에는 이라크 BNCP 미수금 1.1억 불을 받고 비핵심 자산을 1,000억 원어치 팔아서 현금이 들어올 예정이라 빚이 줄어들 것으로 증권사는 전망했어요. 쉽게 말하면, 지금은 빚이 좀 많지만 곧 현금이 들어와서 상황이 나아질 거라는 말이에요.",
          "topic": "한화의 3분기 실적을 점검하고 한화생명의 배당 재개 가능성과 향후 재무 개선 전망을 다루고 있습니다.",
          "points": [
            "3분기 실적 부진: 건설 부문은 대형 사업장 준공으로 매출과 영업이익이 각각 43%, 81% 줄었고, 글로벌 부문도 암모니아 가격이 오르면서 원가 부담이 커져 영업이익이 92% 감소했어요. 자회사인 한화에어로스페이스도 지상방산 매출이 줄어들면서 전체적으로 실적이 좋지 않았다는 겁니다.",
            "한화생명 배당 재개 기대: 현재 한화는 한화에어로스페이스에서 주로 배당 수익을 얻고 있는데요. 한화솔루션은 실적 부진으로 25년에 배당을 못 했고 한화생명도 24년부터 배당을 멈춘 상태인데, 금융당국의 제도 완화 여부에 따라 한화생명의 배당 재개 가능성이 열려 있다고 봤습니다.",
            "목표주가 하향 조정: 증권사는 인적분할과 상장 자회사의 가치가 하락한 점을 반영해서 한화의 목표주가를 기존보다 낮은 10.5만 원으로 제시했어요. 다만 투자의견은 매수를 뜻하는 BUY를 그대로 유지했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "11487",
          "link": "https://m.stock.naver.com/research/company/98180",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권] 한국가스공사 JKM 강세로 실적과 미수금 동반 증가",
          "easy1_title": "가스 가격이 오르니까 실적도 같이 좋아졌어요",
          "easy1_desc": "국제 가스 가격이 오르면서 한국가스공사의 판매 가격도 함께 올라 이익이 커진 건데요. 특히 해외 사업장인 호주와 캐나다 쪽에서 가스 가격 상승에 따른 수익 개선 효과가 크게 나타났거든요. 덕분에 3분기 영업이익이 5,878억 원으로 작년보다 51.1%나 늘어난 셈이에요.",
          "easy2_title": "미수금은 여전하지만 주가에는 큰 영향이 없다고 봐요",
          "easy2_desc": "가스공사가 받을 돈인 미수금은 당분간 줄어들기 어렵고 배당을 늘리기도 쉽지 않은 상황이에요. 하지만 미수금이 늘어난 이유가 에너지 가격 상승 때문인데, 이게 오히려 회사의 영업이익에는 긍정적인 영향을 주거든요. 그래서 미수금 문제가 주가에 주는 영향은 중립적이라고 증권사는 판단했어요.",
          "topic": "한국가스공사가 에너지 가격 강세에 힘입어 실적 성장을 이어가고 있다는 분석이에요.",
          "points": [
            "3분기 영업이익 급증: 3분기 매출액은 7조 원으로 작년보다 17.8% 늘었고 영업이익은 5,878억 원을 기록했어요. 천연가스 도입 가격이 오르면서 판매량 감소분을 충분히 만회한 결과라고 증권사는 분석했거든요.",
            "해외 사업의 수익성 개선: 호주와 캐나다 등 해외 자산들의 판매 가격이 아시아 LNG 가격과 연동되어 있는데요. 하반기부터 가격이 오르면서 수익성이 크게 좋아졌고, 4분기에도 이익 성장이 이어질 것으로 증권사는 전망했어요.",
            "에너지 가격 상승과 방어주 역할: 가스 가격이 오르면 미수금은 늘어날 수 있지만, 전사 영업이익에는 오히려 도움이 된다는 거예요. 주가 변동성이 낮고 배당 수익도 기대할 수 있어서 에너지 가격이 높은 기간에는 투자처로 활용할 수 있다고 증권사는 봤어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "10416",
          "link": "https://m.stock.naver.com/research/company/98179",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권] 한국전력 아빠 찬스",
          "easy1_title": "한국전력 실적이 시장 기대보다 낮게 나왔어요",
          "easy1_desc": "3분기 영업이익이 1.6조 원으로 작년보다 70.9%나 줄어들면서 시장의 예상치를 밑돌았는데요. 원자력 발전소 해체 비용이 늘어난 데다 온실가스 배출 관련 규제 비용까지 커지면서 부담이 된 셈이에요. 전기요금 인하와 산업용 전력 수요가 줄어든 것도 매출이 둔화한 원인으로 보입니다.",
          "easy2_title": "발전사들보다는 한국전력이 그나마 유리한 상황이에요",
          "easy2_desc": "전력 시장 규제가 발전 사업자에게 불리하게 돌아갈 때 한국전력은 상대적으로 보호받는 위치에 있거든요. 민간 발전사들과 리스크를 나누면서 비용을 조절할 수 있는 여력이 있기 때문이에요. 원자재 가격이 떨어지면 실적이 좋아질 가능성도 있다는 게 증권사의 분석입니다.",
          "topic": "하나증권은 한국전력의 3분기 실적 부진에도 불구하고, 시장 내에서의 상대적인 우위와 비용 절감 가능성을 근거로 투자의견 매수를 유지한다고 밝혔습니다.",
          "points": [
            "3분기 실적 부진 원인: 매출액은 26.9조 원으로 전년 대비 2.6% 감소했는데, 이는 전기요금 인하와 산업용 전력 수요가 줄어든 영향이 큽니다. 영업이익 또한 원자재 가격 상승과 원자력 발전소 이용률 하락으로 인해 70.9%나 급감했습니다.",
            "전력 시장 규제와 비용: 2027년에 도입될 산업용 지역 전기요금제는 한국전력의 매출을 낮추는 요인이 될 것으로 보입니다. 다만 송전망 투자 지연 상황에서도 민간 발전사와의 리스크 공유를 통해 비용 상승을 억제하려는 움직임을 보이고 있습니다.",
            "향후 기대 요인: 중동 분쟁이 끝나면 LNG(액화천연가스) 현물 가격이 하락할 수 있어 원가 절감에 도움이 될 것으로 증권사는 보고 있습니다. 현재는 규제 환경이 중립 이하이지만 원자재 가격이 안정되면 실적 개선을 기대할 수 있다는 분석입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 2027년에 도입될 산업용 지역 전기요금제는 한국전력의 매출을 낮추는 요인이 될 것으로 보입니다.",
          "body_chars": "11303",
          "link": "https://m.stock.naver.com/research/company/98178",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "한화투자증권",
          "title": "[한화투자증권] LG 3Q26 Review : 나도 AI, 자회사도 AI",
          "easy1_title": "LG가 자체 AI 모델을 키우면서 자회사들도 AI로 돈을 벌고 있어요",
          "easy1_desc": "LG는 11월에 자체 개발한 AI 모델인 K-Exaone 2.5를 공개했는데요, 이전 버전보다 성능이 70%나 좋아졌다고 해요. 단순히 기술만 개발하는 게 아니라, 이 모델을 다른 기업에 파는 판매 사업도 시작했다는 겁니다. 앞으로 이 AI 모델이 얼마나 수익을 내느냐에 따라 LG라는 회사의 가치가 다시 평가받을 수 있다고 증권사는 봤어요.",
          "easy2_title": "자회사들도 AI 기술을 활용해서 수주를 늘리고 사업을 확장 중이에요",
          "easy2_desc": "LG전자와 LG에너지솔루션 같은 자회사들도 AI 관련 사업에서 성과를 내고 있는데요, LG전자는 냉각 솔루션 수주가 3조 원에 달하고 LG에너지솔루션은 에너지 저장 장치인 BESS의 출하를 늘리고 있어요. LG유플러스는 AI 데이터센터인 AIDC 준공을 서두르고 있고, LG CNS도 AI 전환 사업으로 수혜를 입고 있다는 겁니다. 자회사들이 각자의 영역에서 AI를 활용해 실질적인 이익을 만들어 내고 있는 셈이에요.",
          "topic": "LG의 3분기 실적을 검토하고 자체 AI 모델 개발과 자회사들의 AI 사업 확장에 따른 성장 가능성을 분석했어요.",
          "points": [
            "3분기 실적과 별도법인 성과: LG의 3분기 연결 영업이익은 3,277억 원으로 작년보다 22% 줄었는데요, 별도법인은 브랜드 로열티와 자회사 배당 수익이 늘어난 덕분에 영업이익이 23% 증가했어요. 광화문 빌딩을 팔면서 임대 수익은 줄었지만, 자회사들의 실적이 뒷받침해 준 결과라는 겁니다.",
            "자체 AI 모델의 성능 개선: LG AI연구원이 내놓은 K-Exaone 2.5는 8월에 공개했던 2.0 버전보다 성능이 70% 개선되었다고 해요. 중국의 프론티어 모델과 비교해도 뒤지지 않는 점수를 기록했는데요, 이제는 AI 모델을 직접 판매하는 사업까지 시작했다는 점이 눈에 띕니다.",
            "투자의견과 목표주가 조정: 증권사는 LG에 대해 투자의견은 매수를 유지했지만, 목표주가는 12.5만 원으로 낮췄어요. 이는 LG가 가진 주요 상장 자회사들의 가치가 하락한 것을 반영한 결과라고 증권사는 설명했습니다."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "point3 근거 원문에 없음",
          "body_chars": "10763",
          "link": "https://m.stock.naver.com/research/company/98177",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권] NAVER AI 수요를 믿는다면 흔들릴 필요 없다",
          "easy1_title": "본업이 좀 주춤해도 AI 성장세는 확실하거든요",
          "easy1_desc": "네이버의 3분기 실적을 살펴봤더니 광고와 커머스 같은 본업의 성과가 기대보다 낮게 나왔는데요. 인프라 투자와 마케팅 비용이 늘어난 영향도 컸거든요. 하지만 증권사는 이런 단기적인 부진에 흔들릴 필요가 없다고 봤습니다. AI 수요가 여전히 탄탄하기 때문이라는 거예요.",
          "easy2_title": "2027년부터는 AI 서비스가 본격적으로 돈을 벌어올 거예요",
          "easy2_desc": "네이버는 연내에 새로운 AI 에이전트 앱을 내놓고 2027년부터는 본격적으로 시장을 공략할 계획인데요. 북미 기업과 2조원 규모의 장기 계약을 맺은 AI 팩토리 매출도 이때부터 본격화될 것으로 보입니다. AI 데이터센터를 이미 확보해 둔 덕분에 수요 증가에 따른 혜택을 누릴 수 있는 구조를 갖췄다는 말이에요.",
          "topic": "네이버의 3분기 실적 부진에도 불구하고 AI 사업의 성장 가능성을 높게 평가하며 투자의견을 유지했어요.",
          "points": [
            "3분기 실적 부진의 원인: 네이버의 3분기 영업이익은 4,513억원으로 시장의 기대치를 밑돌았는데요. 광고와 커머스 등 본업의 성과가 예상보다 부진했던 탓이에요. 게다가 데이터센터 상면 오픈과 마케팅 비용이 늘어나면서 영업비용이 크게 증가한 영향도 컸거든요.",
            "AI 사업의 확장 전략: 네이버는 연내에 검색과 커머스 기능을 API(응용 프로그램 인터페이스)로 연결한 AI 에이전트 앱을 출시할 예정인데요. 또한 북미 AI 추론 기업과 2조원 규모의 장기 계약을 체결한 AI 팩토리 사업도 본격화할 계획이에요. 이미 200MW 이상의 AI 데이터센터 공간을 확보해 둔 상태라 수요 증가에 따른 수혜가 기대된다는 겁니다.",
            "목표주가 하향과 향후 전망: 증권사는 본업에 대한 추정을 보수적으로 바꾸면서 목표주가를 340,000원으로 내렸는데요. 하지만 AI 사업에 대한 긍정적인 관점은 그대로 유지한다고 밝혔어요. 11월 18일 예정된 공정위의 기업결합 심의 결과에 따라 디지털자산 사업 진출이 가시화되면 추가적인 상승 요인이 될 것으로 봤습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 북미 기업과 2조원 규모의 장기 계약을 맺은 AI 팩토리 매출도 이때부터 본격화될 것으로 보입니다.",
          "body_chars": "12777",
          "link": "https://m.stock.naver.com/research/company/98176",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권] HMM 3Q26 Re: 험난한 시장에서도 잘 견뎌요",
          "easy1_title": "HMM이 어려운 시장 환경 속에서도 아주 좋은 실적을 냈어요",
          "easy1_desc": "HMM의 3분기 영업이익이 1조 3,946억 원을 기록하며 시장의 예상치를 크게 뛰어넘는 성적을 거뒀는데요. 이게 왜 가능했나 봤더니 원화 가치가 오르고 비용이 2분기에 몰아서 반영되면서 3분기 이익이 상대적으로 크게 늘어난 것처럼 보이는 효과가 있었기 때문이에요. 컨테이너선 운송량도 8% 늘고 운임도 55%나 오르면서 실적을 든든하게 받쳐준 셈입니다.",
          "easy2_title": "앞으로는 벌크선 비중을 늘려서 더 안정적으로 운영할 계획이에요",
          "easy2_desc": "HMM은 앞으로 2030년까지 벌크선(건화물선) 비중을 40%까지 높여서 실적의 안정성을 키우겠다는 계획을 밝혔는데요. 컨테이너선 시황이 흔들려도 벌크선 사업이 수익을 잘 지켜줄 거라는 계산이 깔려 있는 거예요. 주주들에게는 당기순이익의 30% 이상을 배당이나 자사주 매입으로 돌려주겠다는 방침도 함께 내놨습니다.",
          "topic": "HMM의 3분기 실적 분석과 향후 사업 전략 및 전망에 대한 하나증권의 평가입니다.",
          "points": [
            "3분기 실적 서프라이즈: HMM은 3분기에 매출 4조 1,270억 원과 영업이익 1조 3,946억 원을 기록하며 시장의 기대를 크게 넘어섰습니다. 비용이 2분기에 집중적으로 반영된 점과 원화 절상 효과가 겹치면서 3분기 증익이 강하게 나타난 것으로 증권사는 해석했습니다.",
            "향후 시황과 수에즈 운하 변수: 4분기에도 성수기 효과가 이어지면서 물동량은 양호할 것으로 증권사는 예상했습니다. 다만 최근 선사들이 수에즈 운하로 다시 다니기 시작하면서 공급이 8% 이상 늘어날 가능성이 있어 운임지수 추이를 주의 깊게 지켜봐야 한다고 봤습니다.",
            "사업 구조 개편과 주주환원: HMM은 벌크선 사업 비중을 2028년까지 50% 수준으로 끌어올려 실적 안정성을 높이겠다는 계획입니다. 또한 당기순이익의 30% 이상을 주주환원 재원으로 활용할 예정이며, 이를 바탕으로 증권사는 투자의견을 BUY로 상향했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "11802",
          "link": "https://m.stock.naver.com/research/company/98175",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권] LG 3분기는 컨센서스 대비 영업이익 다소 큰폭 하회",
          "easy1_title": "LG 3분기 실적이 기대보다 좀 아쉽게 나왔어요",
          "easy1_desc": "LG의 3분기 매출은 2.0조원으로 작년보다 2.2% 늘었지만, 영업이익은 3,276억원으로 21.8%나 줄어들었거든요. 전자계열사와 LG화학의 실적이 전반적으로 부진했던 게 큰 이유예요. 증권사는 주요 계열사들의 지분 가치가 떨어지면서 전체적인 순자산가치(NAV)가 감소했다고 봤어요. 그래서 목표주가도 125,000원으로 낮춰 잡았다는 겁니다.",
          "easy2_title": "현금은 넉넉하니 배당은 계속 챙겨줄 것 같아요",
          "easy2_desc": "별도 손익의 핵심인 상표권과 배당 수익이 꾸준히 늘고 있어서 현금 흐름은 괜찮은 편이에요. 3분기 말 기준으로 잉여현금이 1.2조원 정도 쌓여 있어서 주주들에게 돌려줄 여력은 충분하다고 봤거든요. 기존의 배당 정책을 유지하면서 연간 주당 배당금은 지금 수준을 지키거나 조금씩 올릴 것으로 증권사는 전망했어요.",
          "topic": "LG의 3분기 실적 부진 원인과 향후 AI 전략 및 주주환원 정책에 대한 분석이에요.",
          "points": [
            "주요 계열사 실적 부진: LG전자는 수익성이 개선됐지만 LG이노텍은 환율 급락으로 영업이익이 53.4%나 줄었고, LG화학도 원재료비 부담 때문에 이익이 17.4% 감소했어요. 반면 LG CNS는 AI 데이터센터 수요 덕분에 이익이 15.0% 늘어나는 모습을 보였거든요. 쉽게 말하면 전자와 화학 쪽의 부진이 전체 실적을 끌어내린 셈이에요.",
            "AI 중심의 미래 로드맵: 그룹 차원에서 AI와 바이오, 클린테크 분야에 투자를 집중하고 있는데, 특히 AI 데이터센터(AIDC)를 핵심으로 보고 있어요. 계열사 간의 기술 협력을 통해 수익을 내겠다는 전략인데요. 외부 매출은 아직 5% 미만으로 적지만 4분기부터는 점차 늘어날 것으로 증권사는 기대하고 있어요.",
            "주주환원 정책 유지: 별도 순이익의 60%를 배당 하한선으로 잡는 기존 정책을 그대로 이어가겠다는 계획이에요. 3분기에도 주당 1,000원의 중간배당을 지급했거든요. 앞으로도 투자 지출은 제한적일 것으로 보여서 주주들에게 돌아가는 배당금은 안정적일 것으로 증권사는 보고 있어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "11015",
          "link": "https://m.stock.naver.com/research/company/98174",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "한화투자증권",
          "title": "[한화투자증권] 삼성화재 예상 수준의 실적",
          "easy1_title": "삼성화재 실적은 우리가 예상했던 수준 그대로 나왔어요",
          "easy1_desc": "삼성화재의 3분기 실적을 확인해 봤더니, 증권사가 미리 추정했던 수치와 거의 비슷하게 나왔거든요. 금융 업종 전체가 자산 시장이 좋지 않아서 영향을 받았는데, 삼성화재는 그중에서도 실적 변동성이 가장 낮은 편이었다는 말이에요. 쉽게 말하면, 시장 상황이 안 좋은데도 나름대로 잘 버텼다는 겁니다.",
          "easy2_title": "주가 상승 여력이 생겨서 투자의견을 매수로 올렸어요",
          "easy2_desc": "목표주가는 700,000원으로 그대로 유지하기로 했는데요, 최근 주가가 떨어지면서 오히려 투자자가 얻을 수 있는 상승 여력이 커졌거든요. 그래서 증권사는 투자의견을 기존 보유에서 매수로 상향 조정했다는 말이에요. 다만 배당을 어떻게 할지에 대한 구체적인 정책이 아직 안 나온 건 조금 아쉬운 부분이라는 겁니다.",
          "topic": "삼성화재의 3분기 실적을 평가하고 투자의견을 상향 조정한 이유에 대한 분석이에요.",
          "points": [
            "보험과 투자 손익 분석: 보험 손익은 자동차 보험 수익이 좋아지면서 전체적으로 늘어났는데요, 반대로 투자 손익은 자산 시장이 부진해서 작년보다 23% 줄어들었다는 거예요. 뭔 소리냐면, 보험 영업은 잘했는데 투자 쪽에서 평가 손실이 발생했다는 말이에요.",
            "상대적으로 안정적인 자산 방어: 금융 업종 전체가 자산 시장 부진으로 이익이 줄어드는 상황이었거든요. 그런데 삼성화재는 다른 보험사들과 비교했을 때 이익이 오르내리는 변동성이 가장 낮았다고 증권사는 분석했어요.",
            "주주환원 정책의 아쉬움: 삼성화재에 투자하는 사람들은 대규모 배당을 기대하는 경우가 많은데요, 정작 회사가 주주에게 어떻게 이익을 돌려줄지 구체적인 정책을 내놓는 게 늦어지고 있다는 점은 아쉬운 부분이라고 증권사는 봤어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "9870",
          "link": "https://m.stock.naver.com/research/company/98173",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권] 엘앤에프 재고평가손실로 적자전환, 출하는 견조",
          "easy1_title": "재고 때문에 손해를 봐서 적자로 돌아섰어요",
          "easy1_desc": "엘앤에프의 3분기 실적을 살펴봤더니 매출은 8,744억 원을 기록했는데 영업손실이 265억 원이나 발생하면서 적자로 돌아섰거든요. 이게 왜 그런가 봤더니 재고평가손실 426억 원과 환율 하락에 따른 손실 220억 원이 한꺼번에 반영된 탓이에요. 쉽게 말하면 물건은 잘 팔고 있는데 장부상 가치가 떨어지면서 손실이 크게 잡힌 셈이라는 말이에요.",
          "easy2_title": "앞으로 출하는 늘겠지만 당분간 적자는 피하기 어려워요",
          "easy2_desc": "4분기에도 테슬라와 리비안 같은 고객사의 판매가 늘면서 출하량은 4% 정도 증가할 것으로 보이는데요, 문제는 원재료 가격이 떨어지면서 제품 가격도 같이 내려가고 있다는 거예요. 여기에 환율까지 하락하면서 출하가 늘어나는 효과를 다 깎아먹고 있거든요. 그래서 증권사는 4분기에도 적자가 이어질 수밖에 없다고 봤다는 거예요.",
          "topic": "엘앤에프의 3분기 실적 리뷰와 향후 출하량 증가에 따른 실적 전망에 대한 내용이에요.",
          "points": [
            "3분기 실적 부진의 이유: 3분기 매출은 전 분기 대비 1% 줄어든 8,744억 원을 기록했고 영업손실은 265억 원으로 나타났는데요, 이는 재고평가손실과 환율 하락 영향이 컸기 때문이에요. 다만 이런 일회성 손실을 빼고 계산해 보면 4개 분기 연속으로 흑자를 유지하고 있다는 점도 함께 봐야 해요.",
            "4분기 출하량과 실적 전망: 4분기에는 테슬라와 리비안의 판매가 늘면서 NCM(니켈·코발트·망간) 양극재 출하량이 4% 정도 늘어날 것으로 보이는데요, 하지만 원재료 가격 하락으로 제품 가격이 낮아지고 환율까지 하락하면서 매출이 크게 늘기는 어렵다고 증권사는 분석했어요.",
            "2027년 이후 성장 전략: 증권사는 2027년부터 리비안 신차 판매가 늘면서 46파이(지름 46mm 원통형 배터리) 향 NCM95 공급이 크게 늘어날 것으로 봤는데요, LFP(리튬인산철) 양극재 역시 북미 ESS(에너지저장장치) 수요가 커지면서 2028년에는 생산 능력을 꽉 채워 출하할 수 있을 것으로 전망했어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 4분기에도 테슬라와 리비안 같은 고객사의 판매가 늘면서 출하량은 4% 정도 증가할 것으로 보이는데요, 문제는",
          "body_chars": "11319",
          "link": "https://m.stock.naver.com/research/company/98172",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "한화투자증권",
          "title": "[한화투자증권] DB손해보험 주요 투자포인트인 보험 수익성 개선을 재확인",
          "easy1_title": "보험 수익성 개선은 여전히 탄탄하다는 걸 확인했어요",
          "easy1_desc": "DB손해보험이 3분기에 시장 기대치보다 낮은 실적을 냈는데요, 그건 자산 시장이 흔들리면서 매매나 평가에서 손실이 났기 때문이에요. 하지만 보험 본연의 수익성은 오히려 좋아진 게 확인됐거든요. 쉽게 말하면, 겉으로 보이는 숫자는 조금 아쉽지만 보험 장사는 잘하고 있다는 말이에요.",
          "easy2_title": "준비금 부담을 덜어내면서 배당 기대감이 커졌어요",
          "easy2_desc": "회사가 쌓아둬야 하는 돈인 준비금 부담이 줄어들면서, 주주들에게 나눠줄 배당에 대한 기대감이 높아졌는데요. 준비금 부담이 줄면 그만큼 여유 자금이 생기는 셈이거든요. 그래서 증권사는 이 부분을 긍정적으로 평가하고 있어요.",
          "topic": "DB손해보험의 3분기 실적을 분석하고 보험 수익성 개선이라는 핵심 투자 포인트를 재확인했어요.",
          "points": [
            "3분기 실적 부진의 원인: DB손해보험의 3분기 순이익은 3,324억원으로 작년보다 13% 늘었지만, 시장 기대치보다는 7% 낮게 나왔어요. 보험 쪽 손익은 좋았는데, 자산 매매와 평가에서 예상보다 700억원의 손실이 더 크게 나타난 게 원인이에요.",
            "보험 손익의 호조: 보험 손익은 3,306억원으로 작년보다 224%나 크게 늘었는데요. 보험금 예실차(예상 보험금과 실제 보험금의 차이)와 자동차 보험 수익성이 예상보다 좋았기 때문이에요. 작년에 자동차 보험 수익이 나빴던 기저효과도 한몫했고요.",
            "긍정적인 투자 판단: 증권사는 발생보험금이 예상보다 적었고 해약준비금도 줄어든 점을 긍정적으로 봤어요. 포테그라 인수 과정에서 발생한 일회성 비용을 제외하면 보험 수익성 개선은 확실하다는 거예요. 그래서 DB손해보험을 업종 내에서 가장 추천하는 종목으로 유지했어요."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "topic 근거 원문에 없음",
          "body_chars": "10589",
          "link": "https://m.stock.naver.com/research/company/98171",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "SK증권",
          "title": "[SK증권] NAVER 성장 잠재력은 확인, 수익성은 숙제",
          "easy1_title": "네이버가 인공지능 데이터 센터 사업에서 돈 벌 가능성을 확인했어요",
          "easy1_desc": "네이버가 북미 AI 기업과 20MW 규모의 GPU(그래픽 처리 장치) 공급 계약을 맺으면서 인공지능 데이터 센터(AIDC) 사업의 수익성을 구체화했는데요. 5년간 2조 원 규모의 계약을 통해 앞으로 매출이 얼마나 늘어날지 가늠할 수 있는 기준이 생긴 셈이에요. 쉽게 말하면, 대규모 외형 성장을 위한 발판을 마련했다는 겁니다.",
          "easy2_title": "기존 사업 비용 부담이 커서 목표 주가는 낮췄습니다",
          "easy2_desc": "신규 사업은 기대되지만, 오프라인 단말기 보급이나 배송 경쟁력 강화 같은 기존 사업에 들어가는 비용이 만만치 않거든요. 이익이 본격적으로 나기까지 시간이 좀 걸릴 것으로 보여서, 증권사는 실적 추정치를 조정하고 목표 주가를 26만 원으로 하향했습니다. 성장 잠재력은 여전하지만 당장의 수익성 개선이 숙제라는 말이에요.",
          "topic": "네이버의 인공지능 데이터 센터 사업은 성장 잠재력이 크지만, 기존 사업의 비용 부담으로 인해 단기적인 수익성 개선이 필요하다는 분석이에요.",
          "points": [
            "AIDC 사업의 매출 가시성: 북미 기업과 20MW 규모의 계약을 맺으면서 2028년 말까지 200MW를 가동할 경우 연 매출이 4조 원까지 늘어날 잠재력이 생겼는데요. 다만 대규모 GPU 투자비가 수익성의 핵심 변수라서, 장비 조달 조건을 잘 맞춰 원가를 줄이는 게 중요하다고 봤습니다.",
            "3분기 실적과 비용 증가: 3분기 영업이익은 4,513억 원으로 시장 기대치보다 낮게 나왔는데요. 파트너비와 인프라비, 마케팅비가 각각 18.8%, 29.1%, 32.3%씩 늘어나면서 영업이익률이 13.0%로 떨어졌기 때문이에요.",
            "목표 주가 조정: 기존 사업의 비용 부담이 계속되고 있어 이익률 개선이 쉽지 않다고 판단했는데요. 이에 따라 증권사는 실적 추정치를 낮추고 목표 주가를 기존보다 낮은 26만 원으로 제시했습니다."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "topic 근거 원문에 없음",
          "body_chars": "10685",
          "link": "https://m.stock.naver.com/research/company/98170",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "한화투자증권",
          "title": "[한화투자증권] 한화생명 비연속적 요인에 의한 적자",
          "easy1_title": "환율이랑 변액보험 때문에 이번 분기 실적이 깎였어요",
          "easy1_desc": "한화생명이 3분기에 2,174억 원의 순손실을 내면서 적자로 돌아섰는데요. 이게 왜 그런지 봤더니 환율 변동으로 인한 손실과 변액보험 헤지(위험 회피) 손실이 크게 반영됐기 때문이에요. 이런 손실은 매번 일어나는 게 아니라 일시적인 요인이라는 말이에요. 쉽게 말하면, 본업인 보험 사업은 괜찮은데 외부 변수 때문에 잠시 성적이 나빠진 셈이에요.",
          "easy2_title": "본업인 보험 실적은 오히려 좋아지고 있어요",
          "easy2_desc": "일시적인 손실은 있었지만, 보험 본연의 수익을 나타내는 보험손익이나 미래 수익원인 CSM(보험계약마진)은 오히려 예상보다 좋게 나왔거든요. 보험금 예실차(예상 보험금과 실제 지급액의 차이)가 개선되면서 실적 정상화에 대한 기대감을 높여주고 있다는 거예요. 일시적 요인만 걷어내면 내실은 단단해지고 있다는 장점이 있는데, 대신 단기적인 실적 부진은 피할 수 없었다는 점도 같이 봐야 합니다.",
          "topic": "한화생명이 3분기 대규모 적자를 기록했으나, 이는 일시적인 요인에 의한 것이며 보험 본업의 지표는 양호하다고 증권사는 분석했습니다.",
          "points": [
            "3분기 적자 전환의 원인: 3분기 순손실 2,174억 원으로 적자 전환한 주된 이유는 투자 손실이 예상보다 컸기 때문이에요. 구체적으로는 해외 자산 환 손실 1,836억 원과 변액 헤지 손실 2,467억 원이 반영된 결과라는 거예요. 환과 헤지 손실을 제외하면 다른 보험사들과 비슷한 수준의 변동성을 보였다고 증권사는 봤습니다.",
            "보험 본업의 성장세: 투자 손실과 달리 보험손익은 998억 원으로 흑자 전환에 성공했는데요. 보험금 예실차가 개선된 덕분인데, 여기에 신계약이 늘면서 CSM 잔액도 전 분기 대비 6% 증가한 점이 긍정적이라고 증권사는 평가했어요. 쉽게 말하면, 보험을 파는 본업은 오히려 더 잘하고 있다는 말이에요.",
            "목표주가 하향 조정: 증권사는 이번 실적 부진을 반영해서 올해 실적 추정치를 31% 낮췄는데요. 이에 따라 목표주가도 기존 6,100원에서 5,300원으로 13% 하향 조정하기로 했습니다. 다만 상승 여력은 충분하다고 판단해서 투자의견은 Buy를 유지한다는 계획이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "10067",
          "link": "https://m.stock.naver.com/research/company/98169",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "유안타증권",
          "title": "[유안타증권] 한국전력 높아진 원가 부담, 회복에는 시간이 필요",
          "easy1_title": "한국전력의 비용 부담이 커져서 실적이 생각보다 안 나왔어요",
          "easy1_desc": "한국전력의 3분기 영업이익을 확인해 봤더니 1조 6,442억원으로 증권사가 예상했던 것보다 12.3% 낮게 나왔거든요. 전기를 팔아서 번 돈은 줄었는데, 전기를 만드는 데 들어가는 연료비와 구입전력비는 오히려 늘어난 게 원인이에요. 쉽게 말하면, 물건을 팔아도 남는 게 별로 없는 상황이 된 셈이에요.",
          "easy2_title": "당분간은 원가 부담이 계속될 거라 회복에는 시간이 좀 걸릴 겁니다",
          "easy2_desc": "4분기에도 연료비나 전력 구입비 같은 원가 부담이 여전할 것으로 보여서 수익성이 바로 좋아지기는 어렵다는 게 증권사의 판단이에요. 전기요금은 그대로인데 만드는 비용만 오르고 있거든요. 2027년이 되어야 발전 환경이 나아지면서 이익이 회복될 것으로 보이지만, 지금의 높은 비용 부담을 단기간에 해결하기는 힘들다는 말이에요.",
          "topic": "한국전력의 실적 부진 원인과 향후 수익성 회복 전망에 대한 증권사의 분석이에요.",
          "points": [
            "3분기 실적 부진 원인: 전력 판매량과 단가가 모두 줄어든 상황에서 연료비와 구입전력비가 각각 25.1%, 11.4%씩 늘어났거든요. 여기에 월성 1호기 해체충당부채 재산정과 온실가스 배출원가까지 더해지면서 비용 부담이 커졌다고 증권사는 분석했어요.",
            "목표주가 하향 조정: 증권사는 한국전력의 목표주가를 기존 47,000원에서 43,000원으로 낮췄는데요. 최근 주가 조정과 단기적인 실적 불확실성을 반영해서 기존보다 10% 할인된 수치를 적용한 결과예요.",
            "중장기 성장 가능성: 단기 실적은 더디지만 AI와 반도체 산업이 커지면서 전력 수요가 늘어나는 점은 긍정적이라고 봤어요. 다만 대규모 설비투자로 인한 차입 부담이 계속되고 있어서, 전기요금 정상화가 기업가치를 다시 평가받는 핵심이 될 것으로 전망했어요."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 2027년이 되어야 발전 환경이 나아지면서 이익이 회복될 것으로 보이지만, 지금의 높은 비용 부담을 단기간에; topic 근거 원문에 없음",
          "body_chars": "14078",
          "link": "https://m.stock.naver.com/research/company/98168",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "유안타증권",
          "title": "[유안타증권] 더블유게임즈 4분기 실적 회복과 DDI 완전 자회사화 기대",
          "easy1_title": "4분기에는 실적이 다시 좋아질 것으로 보고 있어요",
          "easy1_desc": "더블유게임즈의 3분기 영업이익은 시장 기대치보다 6% 낮게 나왔는데요. 하지만 4분기에는 연말 성수기 효과와 함께 직접 결제 방식인 DTC 비중이 늘어나면서 플랫폼 수수료가 줄어들 것으로 증권사는 보고 있습니다. 쉽게 말하면, 비용은 줄고 매출은 늘어나는 구조가 만들어지고 있다는 말이에요.",
          "easy2_title": "자회사 지분을 다 사들여서 이익을 더 키우겠다는 계획이에요",
          "easy2_desc": "더블유게임즈는 더블다운인터랙티브의 남은 지분 32.95%를 약 3,500억원을 들여서 모두 사들이겠다고 밝혔는데요. 이렇게 완전 자회사로 만들면 지배주주순이익이 연간 600억원 정도 늘어날 것으로 증권사는 추정했습니다. 중복 상장 문제도 풀리고 그룹의 현금 활용도 자유로워지는 장점이 있거든요.",
          "topic": "더블유게임즈의 4분기 실적 회복 전망과 더블다운인터랙티브 완전 자회사화에 따른 기업가치 개선 기대감이에요.",
          "points": [
            "3분기 실적과 비용 효율화: 3분기 영업이익은 635억원으로 시장 기대치를 밑돌았지만, 직접 결제 비중이 53.6%까지 올라가면서 플랫폼 수수료를 303억원으로 줄이는 성과를 냈습니다. 수익성이 검증된 게임 위주로 마케팅을 조정하면서 월간 이익률도 10% 중반대로 회복했다는 거예요.",
            "4분기 실적 개선 전망: 증권사는 4분기 매출액 2,045억원, 영업이익 699억원을 기록할 것으로 전망했습니다. 연말 성수기 효과와 더불어 플랫폼 수수료 절감 효과가 이어지고, 아이게이밍 부문도 역대 최대 매출을 기록하며 성장세를 보일 것으로 봤다는 거예요.",
            "완전 자회사화와 주주환원: 2027년 초까지 더블다운인터랙티브를 완전 자회사로 만드는 작업을 추진 중인데요. 이를 통해 지배주주순이익이 늘어나는 것은 물론, 앞으로 신규 주주환원 정책이 구체화되면 기업가치가 더 좋아질 것으로 증권사는 기대하고 있습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "10014",
          "link": "https://m.stock.naver.com/research/company/98167",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "유안타증권",
          "title": "[유안타증권] 지니언스 더 이상 늦을 수 없는 보안투자",
          "easy1_title": "금융권 해킹이 잇따르면서 보안 투자가 더는 미룰 수 없는 과제가 됐어요",
          "easy1_desc": "최근 신한은행과 KB국민은행 등 금융권에서 고객 정보가 유출되는 해킹 사고가 계속 발생하고 있는데요. 이런 일들이 단순히 한 기업의 문제를 넘어 금융권 전반의 보안 수준을 높여야 한다는 신호로 보입니다. 금융당국도 이를 심각하게 받아들여 보안 점검을 강화하고 예산을 늘리도록 유도하고 있거든요. 쉽게 말하면, 해킹 사고가 잦아지니 기업들이 보안에 돈을 쓸 수밖에 없는 상황이 됐다는 말이에요.",
          "easy2_title": "정부의 보안 규제 강화로 보안 기업들의 사업 기회가 커질 것으로 보여요",
          "easy2_desc": "정부가 공공부문과 금융권의 사이버 보안 책임성을 강화하겠다고 나섰는데요. 정보보호 공시 의무 대상을 모든 상장사로 넓히고, 보안 실태평가 대상 기관도 2028년까지 2,160개로 대폭 늘리겠다는 계획이에요. 이렇게 되면 보안 기업들은 공공과 민간 양쪽에서 사업 기회를 얻게 되는 셈인데요. 보안 수요가 늘어나는 장점이 있지만, 그만큼 더 높은 수준의 기술과 대응 능력이 요구된다는 점도 같이 따라온다는 겁니다.",
          "topic": "금융권 해킹 사태와 정부의 보안 강화 정책으로 인해 사이버 보안 기업인 지니언스의 성장세가 지속될 것으로 증권사는 전망했어요.",
          "points": [
            "금융권 해킹 확산: 은행권에서 시작된 해킹 사고가 증권사와 자산운용사, 가상자산 거래소까지 금융회사 전반으로 퍼지고 있는 상황이에요. 특히 AI를 활용한 공격이 늘어나면서 기존의 보안 체계로는 막기 어렵다는 불안감이 커지고 있거든요. 증권사는 이런 상황이 보안 기업들에 대한 관심으로 이어질 것으로 봤습니다.",
            "정부의 보안 책임 강화: 정부는 공공부문 사이버 보안 실태평가 대상을 대폭 확대하고, 정보 유출 사고 발생 시 징계 기준을 높이는 등 책임성을 강화하겠다는 방침이에요. 보안 업무를 기피하던 분위기를 바꾸고, 노후화된 시스템을 교체하도록 유도하겠다는 계획인데요. 보안 투자가 선택이 아닌 필수가 되도록 환경을 조성하고 있는 셈이에요.",
            "지니언스의 실적 성장: 지니언스는 3분기 매출액 137.8억 원, 영업이익 37.8억 원을 기록하며 분기 사상 최대 매출을 달성했는데요. 공공기관과 국방, 병원 등 다양한 분야에서 보안 솔루션 수요가 늘고 있기 때문이에요. 증권사는 4분기 성수기 효과와 금융권의 보안 투자 확대로 인해 2027년에도 실적 개선세가 이어질 것으로 추정했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "12609",
          "link": "https://m.stock.naver.com/research/company/98166",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "SK증권",
          "title": "[SK증권] 한국전력 피할 수 없는 연료단가 상승",
          "easy1_title": "중동 전쟁 때문에 연료비가 너무 많이 올랐어요",
          "easy1_desc": "한국전력의 3분기 실적을 살펴봤더니 영업이익이 1조 6,442억 원으로 작년보다 70.9%나 줄어들었거든요. 이게 왜 그런가 봤더니 중동 전쟁 이후 에너지 가격이 오르면서 연료비와 전력구입비 부담이 커졌기 때문이에요. 쉽게 말하면, 전기를 만드는 데 드는 비용이 너무 많이 들어서 수익성이 나빠졌다는 말이에요.",
          "easy2_title": "지정학적 불확실성이 커서 목표주가를 낮췄습니다",
          "easy2_desc": "미국 중간선거 이후 전쟁이 끝날 거라는 기대가 나오기도 했는데요, 증권사는 아직 협상이 타결될 거라고 판단하기엔 이르다고 봤어요. 전쟁이 길어지면서 불확실성이 여전하기 때문에 한국전력의 목표주가를 30,000원으로 하향 조정했거든요. 앞으로는 전력망 투자에 필요한 돈을 어떻게 마련할지 지켜봐야 한다는 겁니다.",
          "topic": "한국전력은 중동 전쟁으로 인한 연료비 부담과 전력망 투자 계획에 따른 재무적 불확실성을 겪고 있습니다.",
          "points": [
            "3분기 실적 악화: 한국전력의 3분기 매출액은 26조 8,518억 원으로 작년보다 2.6% 줄었고 영업이익은 1조 6,442억 원을 기록했는데요. 이는 시장 기대치인 2.4조 원을 31.5%나 밑도는 수준이에요. 전력판매량도 제조업 부진으로 인해 1.9% 감소한 148.7TWh에 그쳤거든요.",
            "전력도매가격 상승세: 증권사는 유가 상승이 LNG 도입단가를 높여서 전력도매가격(SMP)에 부담을 주고 있다고 봤어요. 미국 중간선거 이후 종전 기대가 있지만, 실제 협상 타결까지는 시간이 걸릴 것으로 판단한 건데요. 그래서 유가 방향성이 실적 반등의 핵심 변수라고 설명했어요.",
            "전력수급기본계획과 투자 부담: 제12차 전력수급기본계획에서는 AI와 반도체 클러스터의 전력 수요를 얼마나 잡을지가 쟁점인데요. 증권사는 투자 계획이 확정되면 한국전력의 전력망 투자 규모도 결정될 것으로 봤어요. 다만 수익성이 약화된 상태라 투자에 따른 이자 부담과 전기요금 인상 여부를 계속 확인해야 한다고 밝혔습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "9345",
          "link": "https://m.stock.naver.com/research/company/98165",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "SK증권",
          "title": "[SK증권] 삼성전기 NDR 후기: \"가격 저항이 없다 & 기판 탑 2 도약”",
          "easy1_title": "삼성전기가 만드는 부품은 지금 없어서 못 팔 정도예요",
          "easy1_desc": "삼성전기의 MLCC(적층세라믹콘덴서) 공장이 3분기부터 쉴 틈 없이 돌아가고 있는데요, 재고도 역대 가장 적은 수준이라 사실상 물건이 모자란 상황이에요. 고객사들이 가격을 깎아달라고 하기보다 물량을 먼저 확보하겠다고 나설 정도라 가격을 올리는 데도 큰 저항이 없다는 거예요. 그래서 올해 블렌디드 ASP(평균판매단가)가 20~30% 오를 것으로 보이고, 내년 1분기부터는 본격적으로 가격 인상이 시작될 예정이에요.",
          "easy2_title": "기판 사업은 선수금까지 받으며 탄탄하게 키우고 있어요",
          "easy2_desc": "기판 사업은 올해부터 3년간 약 10조 원을 투자해서 생산 능력을 지금의 두 배로 늘리겠다는 계획인데요, 28년부터 32년까지 이어지는 5년 장기 계약을 이미 주요 고객사들과 끝내 놓은 상태예요. 특히 고객사로부터 선수금을 미리 받아서 투자 안정성을 확보했다는 점이 눈에 띄는데요, 계약서만 믿는 게 아니라 실제 현금을 먼저 챙기는 구조라 훨씬 안전하다는 평가예요.",
          "topic": "삼성전기가 MLCC와 기판 사업의 경쟁력을 바탕으로 글로벌 탑2 기업으로 도약하고 있다는 분석이에요.",
          "points": [
            "MLCC 가격 인상 본격화: MLCC는 3분기부터 풀가동 중이며 재고가 역대 최저 수준이라 가격 결정력이 높다고 봤는데요, 올해 믹스 효과로 20~30%의 ASP 상승이 예상되며 내년 1분기부터는 동일 제품의 일괄 인상이 시작될 것으로 전망했어요.",
            "기판 사업의 투자 안정성: 기판은 5년 장기 계약과 선수금 수취를 통해 투자 안정성을 확보했다고 밝혔는데요, 10조 원 규모의 대규모 투자를 통해 생산 능력을 두 배로 늘리고 있으며, 이는 후발 주자들이 쉽게 따라올 수 없는 경쟁력이라고 평가했어요.",
            "데이터센터 수요 확대: IT 기기 부품 수요가 부진한 상황을 AI 관련 수요가 메워주고 있다고 분석했는데요, 데이터센터용 부품 비중이 26년 20% 중반에서 27년에는 40~50%까지 늘어날 것으로 증권사는 내다봤어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 그래서 올해 블렌디드 ASP(평균판매단가)가 20~30% 오를 것으로 보이고, 내년 1분기부터는 본격적으로 ",
          "body_chars": "4025",
          "link": "https://m.stock.naver.com/research/company/98164",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권]  유틸리티 Weekly: 11월 일별 SMP 상승 확인",
          "easy1_title": "11월 들어 전력 도매가격이 꽤 올랐어요",
          "easy1_desc": "최근 일별 전력 도매가격(SMP)이 평일 기준 kWh당 150원대까지 올라갔거든요. 지난 10월 월평균 가격이 110.02원이었던 걸 생각하면 꽤 급격하게 조정된 셈이에요. 전력 수요나 공급 능력은 크게 변하지 않았는데 가격만 뛴 거라, 증권사는 규제 같은 다른 요인이 작용했을 가능성이 있다고 봤어요.",
          "easy2_title": "유럽의 가스 수급 불안이 내년까지 이어질 수도 있어요",
          "easy2_desc": "유럽은 가스 재고가 낮은 상태로 겨울을 맞이했는데, 만약 이번 겨울이 춥거나 호르무즈 해협 봉쇄가 계속되면 내년 3월 말에는 저장량이 가동 용량의 10% 밑으로 떨어질 수 있다고 해요. 이렇게 되면 봄철 재고가 부족해져서 가스를 확보하려는 경쟁이 2027년까지 길어질 수 있다는 전망이에요. 쉽게 말하면 유럽의 가스 수급 상황이 당분간은 불안할 수 있다는 말이에요.",
          "topic": "11월 전력 도매가격 상승과 글로벌 에너지 수급 상황에 대한 분석이에요.",
          "points": [
            "SMP 상승 원인 분석: 11월 들어 SMP가 150원대까지 급등했는데, 전력 수요나 공급 능력에는 큰 변화가 없었거든요. 연료비 단가도 10월보다 2% 정도만 올라서 유의미한 수준은 아니라고 봤어요. 그래서 증권사는 규제 등 다른 요인이 영향을 미쳤을 것으로 추정했어요.",
            "유럽의 가스 수급 불안: 유럽은 가스 재고가 낮은 채로 겨울을 시작해서, 추운 날씨가 이어지면 내년 3월 말에는 저장량이 가동 용량의 10% 미만으로 줄어들 수 있다고 봤어요. 이 경우 LNG 확보 경쟁이 2027년까지 이어질 수도 있다는 거예요. 아시아 역시 저장 시설이 부족해 겨울 기온에 따라 수급이 크게 흔들릴 수 있다고 설명했어요.",
            "지역별 한계가격제(LMP) 도입 우려: 정부가 추진하는 LMP 도입은 발전사업자 입장에서 수익이 줄어들 수 있어 부정적이라고 봤어요. 입지에 따른 가격 신호를 준다는 취지는 좋지만, 기존 발전소까지 일괄 적용되면 이해관계자들의 반발이 클 수 있다는 거예요. 증권사는 정부의 시행 의지가 있다면 도입될 것으로 보이지만, 시장의 신뢰가 훼손되면 공기업만으로 수요를 감당해야 하는 상황이 올 수도 있다고 지적했어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "15231",
          "link": "https://m.stock.naver.com/research/industry/46990",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권]  저평가의 끝자락에 선 철강: 수입 규제 확대와 원가 하락이 겹",
          "easy1_title": "중국 철강은 여전히 넘쳐나지만 원가 부담은 줄어들 것 같아요",
          "easy1_desc": "2027년 글로벌 철강 시장은 중국이 물건을 너무 많이 만드는 공급 과잉 문제가 계속될 것으로 보입니다. 하지만 철광석 같은 원재료 가격이 떨어지면서 철강사들의 비용 부담은 줄어들 거라는 분석이에요. 쉽게 말하면, 물건은 여전히 많지만 만드는 데 드는 돈은 적어지니 수익성이 나아질 가능성이 있다는 말입니다.",
          "easy2_title": "수입 규제를 꼼꼼하게 해서 국내 철강사들 힘을 실어줄 겁니다",
          "easy2_desc": "국내 철강 시장은 중국산 철강재에 대한 반덤핑 규제를 계속 넓히고 있는데요, 이렇게 하면 싼값에 들어오는 수입산이 줄어들게 됩니다. 그러면 국내 업체들이 가격을 결정할 때 더 유리한 위치에 설 수 있게 되는 거예요. 결과적으로 수입 규제와 원가 절감이 맞물려 국내 철강사들의 실적이 개선될 것으로 증권사는 봤습니다.",
          "topic": "글로벌 철강 시장의 공급 과잉과 수입 규제 속에서 국내 철강사들의 수익성 개선 가능성을 분석했습니다.",
          "points": [
            "글로벌 철강 시장의 지역별 차별화: 중국은 부동산과 인프라 투자 부진으로 수요가 줄어들고 있지만, 미국과 유럽은 수입 규제를 강화하면서 가격이 상대적으로 강세를 보이고 있습니다. 이런 흐름 때문에 글로벌 철강 시장은 지역별로 가격 차이가 크게 나타나고 있다는 거예요.",
            "국내 수입 규제 강화와 가격 협상력: 한국은 중국산 후판, 열연강판에 이어 도금강판과 특수강봉강까지 반덤핑 관세를 부과하며 규제를 넓히고 있습니다. 저가 수입산이 줄어들면서 국내 업체들이 가격 협상력을 높일 수 있는 환경이 만들어지고 있다는 말이에요.",
            "주요 철강사 실적 개선 전망: POSCO홀딩스, 세아베스틸지주, 동국제강은 수입 규제와 원가 절감 효과를 동시에 누릴 것으로 증권사는 추정했습니다. 특히 환율 하락과 전기요금 인하 가능성까지 더해져 실적이 계단식으로 좋아질 것이라고 봤습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 2027년 글로벌 철강 시장은 중국이 물건을 너무 많이 만드는 공급 과잉 문제가 계속될 것으로 보입니다.; 긴 원문 — 앞 30000자만 읽음(전체 119335자)",
          "body_chars": "119335",
          "link": "https://m.stock.naver.com/research/industry/46989",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권]  2027년의 무대는 국내다!",
          "easy1_title": "2027년 건설업은 국내 시장이 주인공이 될 겁니다",
          "easy1_desc": "하나증권은 2027년 건설업의 핵심 무대가 국내가 될 것으로 봤는데요, 데이터센터와 공공주택 같은 비주택 부문에서 수주가 늘어날 것으로 보이기 때문이에요. 특히 반도체 공장 발주가 이어지면서 실적이 좋아질 것으로 전망했거든요. 쉽게 말하면, 해외보다 국내의 특정 분야에서 일감이 크게 늘어날 거라는 말이에요.",
          "easy2_title": "부동산 가격은 내년에도 오름세를 이어갈 것으로 보입니다",
          "easy2_desc": "부동산 시장은 수요가 공급보다 많은 상태가 계속되면서 매매가와 전세가가 모두 오를 것으로 전망했는데요, 특히 전세가 상승폭이 매매가보다 더 클 것으로 봤어요. 정부의 재정 지출과 반도체 성과급으로 시중에 돈이 풀리면서 주거비를 밀어 올리는 힘이 강해질 거라는 겁니다. 쉽게 말하면, 집을 구하려는 사람은 많은데 물량은 부족해서 가격이 계속 오를 거라는 말이에요.",
          "topic": "하나증권은 2027년 건설업의 실적 성장을 전망하며, 국내 비주택 부문과 공공주택 수주를 중심으로 투자 전략을 제시했습니다.",
          "points": [
            "국내 건설업의 실적 성장: 건설업은 2027년 실적의 시대가 될 것으로 봤는데요, 특히 데이터센터와 반도체 공장 같은 비주택 부문에서 수주가 크게 늘어날 것으로 전망했어요. 삼성전자 평택 공장 재개와 데이터센터 발주가 실적을 뒷받침할 것으로 봤다는 거예요.",
            "부동산 시장의 초과 수요: 2027년에도 수요가 공급보다 많은 초과 수요 시장이 나타날 것으로 전망했는데요, 입주 물량이 필요한 수준보다 부족하기 때문이에요. 정부의 재정 확대와 반도체 성과급 유입이 주거비 상승을 이끄는 힘이 될 것으로 봤습니다.",
            "투자 전략 및 종목 추천: 상반기에는 데이터센터와 공공주택 관련 종목에 주목할 것을 추천했는데요, GS건설과 계룡건설을 Top Pick으로 꼽았어요. 하반기에는 민간주택 종목으로 전략을 옮기는 것이 좋다고 봤습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "긴 원문 — 앞 30000자만 읽음(전체 98739자)",
          "body_chars": "98739",
          "link": "https://m.stock.naver.com/research/industry/46988",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권]  환율이 가져간 이익, 로봇과 자율주행이 돌려줄 가치",
          "easy1_title": "환율 효과가 줄어들면서 자동차 이익도 당분간은 주춤할 겁니다",
          "easy1_desc": "그동안 현대차와 기아의 실적을 든든하게 받쳐 줬던 환율 효과가 이제는 반대로 작용하고 있거든요. 원화 가치가 오르면서 수출로 벌어들이는 돈이 줄어드는 셈인데, 특히 2027년 상반기에 이 영향이 집중될 것으로 보입니다. 그래서 증권사는 2027년 합산 영업이익이 18조원으로 전년 대비 3% 줄어들 것이라고 봤습니다.",
          "easy2_title": "로봇과 자율주행 기술이 회사의 새로운 성장 동력이 될 거예요",
          "easy2_desc": "단순히 차를 파는 것을 넘어 로봇과 자율주행 기술이 실질적인 성과를 내기 시작했다는 점에 주목해야 합니다. 2028년 양산을 목표로 기술이 쌓이고 있는데, 주가는 2027년부터 이런 성장 가치를 미리 반영할 것으로 보입니다. 특히 부품사들은 수주와 양산 투자로 성과를 숫자로 보여 줄 수 있어 재평가 근거가 더 확실하다는 평가예요.",
          "topic": "현대차그룹의 2027년 실적 전망과 로봇 및 자율주행을 통한 기업 가치 재평가에 대한 분석이에요.",
          "points": [
            "2027년 완성차 실적 전망: 2027년에는 신차 효과와 생산 정상화로 합산 판매량이 757만대까지 늘어날 것으로 보입니다. 다만 환율 하락과 원자재 가격 상승이 겹치면서 영업이익은 3년 연속 줄어들 가능성이 크다고 증권사는 분석했습니다.",
            "로봇과 자율주행의 실체화: 2028년 양산을 앞두고 2027년에는 로봇 공장 착공과 자율주행 실증 확대 등 구체적인 이정표가 이어질 예정입니다. 증권사는 이러한 성장 가치가 주가에 반영되면서 기업 가치가 다시 평가받을 것으로 봤습니다.",
            "중국발 경쟁과 대응 전략: 중국 완성차 업체들이 수출과 현지 생산을 늘리며 전 세계적으로 경쟁이 심해지고 있습니다. 이에 대응해 현대차그룹은 신차를 통한 물량 회복과 친환경차 원가 구조 개선을 핵심 과제로 삼고 있다는 설명입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 원화 가치가 오르면서 수출로 벌어들이는 돈이 줄어드는 셈인데, 특히 2027년 상반기에 이 영향이 집중될 것; 예측 의심: 2028년 양산을 목표로 기술이 쌓이고 있는데, 주가는 2027년부터 이런 성장 가치를 미리 반영할 것으로 ; 예측 의심: 2027년에는 신차 효과와 생산 정상화로 합산 판매량이 757만대까지 늘어날 것으로 보입니다.; 긴 원문 — 앞 30000자만 읽음(전체 116802자)",
          "body_chars": "116802",
          "link": "https://m.stock.naver.com/research/industry/46987",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "한화투자증권",
          "title": "[한화투자증권]  [ESG] 현금 2조 장금상선, 한진 7%가 뜻하는 것",
          "easy1_title": "장금상선이 한진 지분을 7% 넘게 사들인 이유가 궁금합니다",
          "easy1_desc": "장금상선이 최근 5주 동안 한진 주식을 꾸준히 사서 지분율이 7.34%까지 올랐는데요, 이 회사는 한진의 평택항 터미널 사업 파트너이자 최대 고객이기도 합니다. 그런데 장금상선은 이번 매수 목적을 단순투자라고 밝혔거든요. 순이익이 6,637억 원에 달하는 장금상선 입장에서 한진 주식을 사는 데 쓴 61억 원은 큰돈이 아니지만, 시장에서는 이 지분 거래가 한진의 지배구조를 바꿀 변수가 될지 주목하고 있다는 겁니다.",
          "easy2_title": "한진 주가가 오를 기회는 실적이 아니라 지배구조에 있습니다",
          "easy2_desc": "한진의 주가는 주당순자산의 0.23배 수준으로 낮은 편인데, 이는 영업이익보다 금융원가가 더 커서 발생하는 이자 부담 때문이라고 증권사는 분석했습니다. 그래서 단순히 실적만 보고 매수하기엔 근거가 부족하다는 건데요, 대신 전략적 매수자인 장금상선의 지분 확대나 2대 주주인 사모펀드의 회수 수요 같은 지배구조 변화가 생기면 주가 할인이 줄어들 가능성이 있다고 봤습니다. 쉽게 말하면, 회사의 본업보다는 지분 거래 이벤트가 주가에 더 큰 영향을 줄 거라는 말이에요.",
          "topic": "한진의 지배구조 변화 가능성과 그에 따른 투자 전략에 대한 분석입니다.",
          "points": [
            "장금상선의 지분 확대: 장금상선은 10월 30일 기준으로 한진 지분을 7.34%까지 확보했습니다. 증권사는 장금상선이 한진의 주요 사업 파트너이지만, 현재까지는 경영 참여가 아닌 단순투자 목적으로 보고했다고 설명했습니다.",
            "경영권 변수와 한계: 최대주주 측의 지분율은 31.9%로, 장금상선과 HYK 사모펀드의 지분을 합쳐도 17.8%에 불과해 격차가 큽니다. 증권사는 장금상선의 자금력은 충분하지만, 경영권에 영향을 주려면 보유 목적을 경영참가로 바꿔야 하는 등 절차적 제약이 있다고 봤습니다.",
            "이벤트 투자 전략: 증권사는 한진의 낮은 주가순자산비율(PBR)이 이자 부담 때문이라고 지적하며, 12월 2일 전환 주식 상장 등으로 주가가 1.6만 원대까지 밀릴 때 소규모로 나눠 담는 이벤트 투자가 적절하다고 조언했습니다. 이는 실적 개선보다는 지분 거래를 통한 할인 해소를 기대하는 전략이라는 겁니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "8282",
          "link": "https://m.stock.naver.com/research/industry/46986",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "한화투자증권",
          "title": "[한화투자증권]  [ESG] 결속은 나의 무기: 주주제안 지분율 요건에 미달해도, 연대하면 된다",
          "easy1_title": "혼자서는 힘든 주주제안, 뜻 맞는 사람들과 힘을 합치면 됩니다",
          "easy1_desc": "상장회사가 덩치가 크면 주주제안을 하려고 해도 필요한 지분율을 혼자 채우기가 참 어렵거든요. 그런데 상법에서는 뜻을 같이하는 다른 주주들과 지분을 합치거나 권리를 위임받아 요건을 채울 수 있게 해 뒀습니다. 혼자서는 부족한 지분이라도 연대하면 주주제안을 할 수 있다는 말이에요. 쉽게 말하면, 주주들이 뭉쳐서 목소리를 낼 수 있는 길을 열어 둔 셈입니다.",
          "easy2_title": "주주제안이 당장 통과되지 않아도 기업을 자극하는 효과가 있습니다",
          "easy2_desc": "주주들이 연합해서 제안을 해도 대주주 측 지분이 워낙 크면 안건이 부결되는 경우가 많은데요. 하지만 증권사는 이런 시도 자체가 기업의 저평가 상태를 시장에 알리거나 주주환원을 늘리도록 자극하는 계기가 된다고 봤습니다. 결과가 바로 나오지 않더라도 기업에 변화를 요구하는 과정 자체가 의미가 있다는 겁니다. 쉽게 말하면, 당장의 승패보다 기업을 움직이게 만드는 힘에 주목해야 한다는 말이에요.",
          "topic": "상법상 주주제안권의 행사 요건과 주주 연대를 통한 주주제안의 의미를 설명하고 있습니다.",
          "points": [
            "주주제안권 행사 요건: 상장회사는 자본금 규모에 따라 0.5%에서 1% 이상의 지분을 6개월 이상 보유해야 주주제안이 가능합니다. 다만 3% 이상의 지분을 가지고 있다면 보유 기간과 상관없이 주주제안을 할 수 있다고 증권사는 설명했습니다.",
            "연대를 통한 요건 충족: 대규모 상장사는 지분 확보에 큰 자금이 들어 단독으로 요건을 채우기 어렵습니다. 그래서 상법은 주주들이 연대하여 지분을 합치거나 의결권을 위임받아 주주제안권을 행사할 수 있도록 근거를 마련해 두었습니다.",
            "삼성물산 사례와 시사점: 2024년 삼성물산 주주총회에서 5개 주주 연합이 1.46%의 지분으로 주주제안을 했으나 부결되었습니다. 증권사는 비록 부결되었더라도 이런 연대 움직임이 기업의 주주환원 확대를 자극하는 계기가 될 수 있다고 분석했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "4447",
          "link": "https://m.stock.naver.com/research/industry/46985",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "유진투자증권",
          "title": "[유진투자증권]  스타십 15차, 사상 첫 완전 회수 도전",
          "easy1_title": "이번 스타십 15차 비행의 핵심은 로켓을 통째로 다시 가져오는 거예요",
          "easy1_desc": "스페이스X가 텍사스에서 스타십 15차 비행을 쏘아 올리는데요, 이번에는 1단 부스터뿐만 아니라 2단 우주선까지 모두 회수하는 사상 첫 완전 회수에 도전한다고 해요. 1단은 발사탑의 젓가락 팔로 잡고, 2단은 궤도 비행을 마친 뒤에 다시 가져오는 방식인 거예요. 성공한다면 궤도 로켓의 1단과 2단이 모두 온전히 돌아오는 역사상 첫 사례가 된다는 겁니다.",
          "easy2_title": "로켓을 버리지 않고 다시 써야 우주 사업의 경제성이 살아납니다",
          "easy2_desc": "스페이스X가 로켓을 계속 회수하려는 이유는 이게 바로 스타십 경제성의 전제 조건이기 때문인데요, 로켓을 버리지 않고 다시 쓰게 되면 발사 단가를 획기적으로 낮출 수 있거든요. 현재 킬로그램당 3,000달러 수준인 발사 비용을 장기적으로는 100달러 이하까지 낮추겠다는 계획이에요. 비용이 줄어들면 스타링크 위성 배치나 달 착륙 같은 거대한 로드맵을 훨씬 수월하게 추진할 수 있다는 장점이 있는 겁니다.",
          "topic": "스페이스X가 스타십 15차 시험 비행을 통해 궤도 발사체의 완전 회수 기술을 검증하려 합니다.",
          "points": [
            "사상 첫 완전 회수 도전: 이번 15차 비행에서는 1단 슈퍼헤비 부스터를 발사탑의 젓가락 팔로 잡고, 2단 스타십은 궤도 비행 후 회수하는 방식을 시도하는데요. 2단 스타십은 고도 약 275km에서 지구를 14바퀴 돌며 스타링크 V3 위성 26기를 배치할 예정이에요. 다만 2단 회수는 시스템이 모두 정상일 때만 시도하며, 이상이 생기면 안전을 위해 해역에 착수시키도록 설계했다고 합니다.",
            "발사 준비 및 기술적 난관: 최종 준비 단계에서 1단 부스터는 발사장 복귀를 위한 스퀴즈 테스트를 마쳤고, 상단부도 엔진 6기의 정적 연소를 완료했는데요. 부스터 캐치는 이전 세대에서 세 번 성공한 적이 있지만, 상단부 캐치는 이번이 처음이라 훨씬 어려운 기동이 요구된다고 증권사는 분석했어요. 궤도 재진입 후 발사장까지 되돌아와야 하는 고난도 기술이라는 말이에요.",
            "경제성 확보를 위한 로드맵: 스페이스X는 스타링크 군집 위성이나 아르테미스 달 착륙 같은 계획을 모두 로켓 회수와 재비행을 기반으로 설계했는데요. 완전 재사용이 정착되면 스타십 V3의 저궤도 수송 능력은 100톤 이상으로 팰컨9보다 6배나 커지게 됩니다. 증권사는 이를 통해 현재 킬로그램당 3,000달러 수준인 발사 단가를 수백 달러대, 장기적으로는 100달러 이하까지 낮출 것으로 추정했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "5380",
          "link": "https://m.stock.naver.com/research/industry/46984",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "iM증권",
          "title": "[iM증권]  MLCC와 PCB, 센티먼트와 펀더멘털",
          "easy1_title": "부품이 부족해서 물건 만들기는 힘든데 주문은 계속 밀려 있어요",
          "easy1_desc": "대만 전자 부품 시장을 살펴봤더니 생산 속도는 예전보다 느려졌는데, 정작 물건을 받는 데 걸리는 시간인 납기는 여전히 길게 유지되고 있거든요. 이게 무슨 말이냐면 부품이 모자란 상황이 아직 해결되지 않았다는 뜻이에요. 그래서 주요 부품 업체들은 앞으로 몇 년 치 물량을 미리 계약하는 방식으로 대응하고 있다는 겁니다.",
          "easy2_title": "지금은 걱정할 때가 아니라 오히려 기회라고 봅니다",
          "easy2_desc": "요즘 데이터센터 건설이 늦어질까 봐 걱정하는 목소리가 많은데요, 증권사는 부품 업황의 기초 체력은 여전히 튼튼하다고 봤어요. 오히려 이런 우려 때문에 주가가 눌려 있는 지금이 나중에 가치가 다시 오를 때 유리한 상황이라는 겁니다. 쉽게 말하면 시장의 분위기보다는 실제 실적이 더 중요하다는 말이에요.",
          "topic": "전기전자 업종의 부품 수급 상황과 향후 업황에 대한 증권사의 분석입니다.",
          "points": [
            "MLCC 공급 부족 심화: MLCC(적층세라믹콘덴서)는 2029년까지 공급이 부족할 것으로 증권사는 전망했어요. 특히 고용량 제품을 중심으로 공급 여력이 줄어들고 있고, 유통 채널 대신 직거래 물량을 늘리는 추세라 물량 확보가 더 어려워질 것으로 보입니다.",
            "기판 조달의 어려움과 생산 부담: ABF 기판은 조달 리드타임이 56주를 넘어서며 수급 균형기보다 4배 이상 길어졌어요. 내년에는 서버 CPU 출하량이 40% 이상 늘어날 예정인데, 기판이 더 크고 복잡해지면서 생산 부담은 산술적으로 2배가 될 것으로 증권사는 추정했습니다.",
            "삼성전기 등 주요 업체 선호: 증권사는 삼성전기, 심텍, 대덕전자를 선호한다고 밝혔는데요. 특히 삼성전기는 제품 로드맵이 확립되어 있고, 공급 부족이 심화되는 상황에서 다른 고객의 수요로 물량을 재분배할 수 있어 영향이 제한적일 것으로 봤습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 특히 고용량 제품을 중심으로 공급 여력이 줄어들고 있고, 유통 채널 대신 직거래 물량을 늘리는 추세라 물량 ",
          "body_chars": "9832",
          "link": "https://m.stock.naver.com/research/industry/46983",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "유진투자증권",
          "title": "[유진투자증권]  안녕하세요 데일리에요 (로봇/방산/조선)",
          "easy1_title": "로봇 산업은 당장 대량 보급보다는 기술 검증이 먼저라고 봤어요",
          "easy1_desc": "중국 기업들이 휴머노이드 로봇을 도입하려는 움직임은 있지만, 실제 대규모 도입 시점은 1년 정도 늦춰지는 모습이에요. 로봇이 작업을 얼마나 잘 수행하는지, 가격은 10만위안 이하인지 같은 현실적인 문제들이 걸려 있기 때문인데요. 그래서 2027년은 로봇이 쏟아져 나오기보다는 소규모로 시험해 보고 옥석을 가리는 해가 될 것으로 봤다는 거예요.",
          "easy2_title": "조선업에서 중국의 추격이 무섭게 빨라지고 있다는 소식이에요",
          "easy2_desc": "10월 글로벌 대형 LNG운반선 발주 물량 7척 중에서 중국이 5척을 가져가면서 한국을 처음으로 앞질렀는데요. 올해 1월부터 10월까지 누적 수주량은 한국이 44척으로 57.9%, 중국이 32척으로 42.1%를 차지하고 있어요. 작년까지만 해도 중국의 점유율이 8% 수준이었는데, 올해 42%까지 급상승했다는 점이 눈에 띄는 대목이에요.",
          "topic": "유진투자증권은 로봇, 방산, 조선 산업의 주요 뉴스 흐름과 시장 상황을 정리했어요.",
          "points": [
            "로봇 산업의 도입 지연: 중국 기업들의 휴머노이드 로봇 도입 의향은 여전히 높지만, 실제 대규모 도입 시점은 약 1년 늦춰지고 있다고 봤어요. 기술적 신뢰성이나 가격 경쟁력 같은 핵심 병목 현상 때문인데요. 그래서 2027년은 대량 보급보다는 소규모 시험 운영과 옥석 가리기가 본격화될 것으로 봤다는 거예요.",
            "폴란드향 방산 물량 인도: 2026년 폴란드에 인도되는 마지막 K2 전차와 K9 자주포 물량이 도착하고 있다고 밝혔는데요. 올해 K2는 58대, K9은 약 24대가 인도된 것으로 추정했어요. 2027년에는 남은 K2GF 58대와 K9PL 122문이 인도되는 흐름을 주목해야 한다고 봤다는 거예요.",
            "조선업 수주 경쟁 심화: 10월 글로벌 대형 LNG운반선 발주 시장에서 중국이 한국을 월간 기준으로 처음 추월했다고 분석했어요. 1월부터 10월까지 누적으로는 한국이 57.9%, 중국이 42.1%를 기록 중인데요. 중국의 점유율이 작년 연간 약 8%에서 올해 42%까지 급상승한 상황이라고 봤다는 거예요."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "topic 근거 원문에 없음",
          "body_chars": "2254",
          "link": "https://m.stock.naver.com/research/industry/46982",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "IBK투자증권",
          "title": "[IBK투자증권]  [IBKS Daily] 인터넷/게임",
          "easy1_title": "네이버가 물류 인프라에 1조 원을 쏟아붓기로 했어요",
          "easy1_desc": "네이버가 다음 달 물류 전문 자회사를 세우고 2030년까지 1조 원을 투자하겠다는 계획을 밝혔는데요. 물류센터는 직접 사지 않고 빌리는 대신, 재고를 어디에 둘지나 배송을 어떻게 효율적으로 할지 같은 시스템에 집중하겠다는 거예요. 이렇게 하면 처음 들어가는 돈을 줄일 수 있다는 장점이 있는데, 대신 물류 인프라를 직접 갖춰 나가는 셈이라 쿠팡과의 경쟁이 더 치열해질 것으로 보입니다.",
          "easy2_title": "크래프톤의 게임이 국제 어워드에서 상을 받았어요",
          "easy2_desc": "크래프톤의 스튜디오인 언노운 월즈가 만든 서브노티카 2가 골든 조이스틱 어워드 2026에서 최고의 얼리 액세스 게임 부문을 수상했다는 소식이에요. 이 게임은 외계 바다에서 살아남는 내용인데, 지난 5월에 미리 해보기 버전으로 나온 뒤 22일 만에 500만 장이나 팔릴 정도로 인기가 많았거든요. 게임의 흥행 성적을 인정받은 셈이라 앞으로의 성과도 주목받고 있다는 말이에요.",
          "topic": "인터넷 및 게임 업종의 주요 기업 동향과 네이버의 물류 투자, 크래프톤의 게임 수상 소식을 정리했어요.",
          "points": [
            "네이버의 물류 전략: 네이버는 물류 자회사를 통해 2030년까지 1조 원을 투자할 계획인데요. 부동산을 직접 사기보다는 쇼핑 데이터를 활용한 수요 예측과 배송 최적화에 힘쓰겠다는 거예요. 초기 비용을 아낄 수 있는 방식이라 효율적인 투자가 될 것으로 보입니다.",
            "크래프톤 게임 성과: 크래프톤의 서브노티카 2가 골든 조이스틱 어워드 2026에서 상을 받으며 게임성을 입증했어요. 5월 출시 이후 22일 만에 500만 장이 팔릴 정도로 인기를 끌었거든요. 외계 해양을 배경으로 한 생존 게임이라는 점이 이용자들에게 큰 관심을 받은 것으로 보입니다.",
            "인터넷 및 게임 업종 현황: 증권사가 정리한 자료를 보면 국내외 주요 인터넷과 게임 기업들의 주가와 실적 지표가 나와 있는데요. 전반적으로 업종 지수의 변화와 기업별 주가 흐름을 한눈에 확인할 수 있도록 구성되어 있습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 이렇게 하면 처음 들어가는 돈을 줄일 수 있다는 장점이 있는데, 대신 물류 인프라를 직접 갖춰 나가는 셈이라; 예측 의심: 초기 비용을 아낄 수 있는 방식이라 효율적인 투자가 될 것으로 보입니다.",
          "body_chars": "4601",
          "link": "https://m.stock.naver.com/research/industry/46981",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        }
      ],
      "fed_speeches": [
        {
          "file": "2026-10-06_연설_Bowman_bowman20261006a.md",
          "title": "[연설] 2026-10-06 · Vice Chair for Supervision Michelle W. Bowman",
          "summary_lines": [
            "\"은행 규제를 시대에 맞게 뜯어고치고 있어요\"",
            "\"누가 책임지는지 확실히 해서 감독을 강화할게요\""
          ],
          "addr": "처리-6",
          "source": "v2_secretary/결과/연준연설/2026-10-06_연설_Bowman_bowman20261006a.md"
        },
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
        }
      ]
    },
    "ch4_news": {
      "title": "챕터 4 · 뉴스 사건 묶기",
      "addr": "처리-3",
      "status": "돎 (하루 AI 2콜 독립 묶기 대조)",
      "counts": {
        "news_in": {
          "val": 159,
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        "events_out": {
          "val": 6,
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        "single_out": {
          "val": 106,
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        "all_clusters": {
          "val": 112,
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        "bad_numbers": {
          "val": 0,
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        "calls": {
          "val": 2,
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        }
      },
      "events": [
        {
          "rank_by_count": 1,
          "name": "젠슨 황 엔비디아 CEO 사임 및 스캔들",
          "easy": "엔비디아를 33년간 이끌어 온 젠슨 황 CEO가 불륜 의혹 등 여러 스캔들에 휘말리며 결국 사임했습니다. 갑작스러운 수장 교체로 인해 엔비디아 주가는 폭락했고, 임시 CEO로 콜렛 크레스 CFO가 선임되었는데요. 시장에서는 이번 사태가 엔비디아의 지배구조와 향후 AI 반도체 패권에 어떤 영향을 미칠지 주목하고 있습니다.",
          "quote": "젠슨 황 엔비디아 CEO 사임‥33년 만 불명예 퇴진",
          "member_count": 17,
          "sample_articles": [
            {
              "n": 105,
              "title": "젠슨 황 엔비디아 CEO 사임‥33년 만 불명예 퇴진 - MBC 뉴스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiekFVX3lxTFBPYUtRUndQd1EtY3JkZm9OTjJ6V3FmSXU1M0RDblVpMzZoY2p5WFVqU1FDYlVZMDRhaWU1ZWtlR0VSdnB4WnExVXpYMDJBUE5QMlNib0NQSkNaNnBpYUJzYXpod3N6NjVwOEg0NUl6bS0tSV9uRHczTnZR0gF6QVVfeXFMTU0wWFhzcHFXWTZQY2l3RGlndVJ6QklzQ3NUTjdfSVZNOWJDWVhLRjVkRm9TZGwwRkhBQm85dER6VWlpX2VWanBmTk5lSm1VVjJ6MVRndEZXbUpJUkNpUnN1cXNEYXl0aGQ1V3k0WHVHZ3R1aWNYMC1yaUE?oc=5"
            },
            {
              "n": 107,
              "title": "'AI 황제' 몰락에 추락하는 엔비디아...한때 시총 4조 달러 붕괴 - YTN",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBCZ2JWa1VKR2Fwc1VwSGtQTlBRQTdnMHYxRjhEaUhxYzc1Sm01STYwQWtjYnliNkJOYzhvSFdKOG10UFluUHFxcWxQSUxEY0J5M0pYaDRSOXNqMExNM2kwZkJzUFo3ZDQzNlVQbGttZw?oc=5"
            },
            {
              "n": 201,
              "title": "미중정상 APEC 담판에 '젠슨황 스캔들' 그림자…복잡해진 셈법 - 연합뉴스",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1tZEtyME9DcFZWaUlhdWVLQk1rdk5IczFxX3FHQ2lId0Z3bWdUWWVHMk9pc2FsdXg4bnZuVGQ1Yy12RnBXcnBYUGhFWkZGSGlXWmo3dWRzQ3J6RUx6WkszYdIBYEFVX3lxTE1tZEtyME9DcFZWaUlhdWVLQk1rdk5IczFxX3FHQ2lId0Z3bWdUWWVHMk9pc2FsdXg4bnZuVGQ1Yy12RnBXcnBYUGhFWkZGSGlXWmo3dWRzQ3J6RUx6WkszYQ?oc=5"
            },
            {
              "n": 206,
              "title": "젠슨 황, 美 규제 이후 '친중 발언' 6배 급증…불륜 여파로 재조명 - 뉴시스",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTE51X2w0ajhhZk5mUmQ2Q0dYNExCNXNFTEJoeVNuanlFbHEzNkFjWHBjWVRfUS14UWU1X1Z6Nk95bmc3ZUtIZ3BMTjRBRExqbDBZWGVLOUUyZWVqNUZ2Y3oxMnZuU1VtSDFFV0ZUdC1UOVBMYmZ1ZmhtY9IBeEFVX3lxTE51X2w0ajhhZk5mUmQ2Q0dYNExCNXNFTEJoeVNuanlFbHEzNkFjWHBjWVRfUS14UWU1X1Z6Nk95bmc3ZUtIZ3BMTjRBRExqbDBZWGVLOUUyZWVqNUZ2Y3oxMnZuU1VtSDFFV0ZUdC1UOVBMYmZ1ZmhtYw?oc=5"
            },
            {
              "n": 209,
              "title": "젠슨 황, 엔비디아 CEO 사퇴… 임시 CEO에 크레스 CFO - 한국일보",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1JWFpZU3c5MjdicS0yU05EQkZ6RGlIRXFtNkJ0WTF1b1ZvXzJIQ3E2N3JyVW9tNjJlNXgzamlxbkdULTdaSEJncWpKb1lyNm16ZWNSbE5Hb2RuRmZmNGcxUEpvbmdST1U2U2hMWlhlb1c4TknSAXNBVV95cUxNSVhaWVN3OTI3YnEtMlNOREJGekRpSEVxbTZCdFkxdW9Wb18ySENxNjdyclVvbTYyZTV4M2ppcW5HVC03WkhCZ3FqSm9ZcjZtemVjUmxOR29kbkZmZjRnMVBKb25nUk9VNlNoTFpYZW9XOE5J?oc=5"
            },
            {
              "n": 205,
              "title": "젠슨 황 사퇴로 \"영입한다면 영광\" 머스크 발언 재조명 - 데일리안",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMimAJBVV95cUxOek1sY21WNTFmRUpMSnFtc3RzcTlzVjdzVWMwT2prX24zdWlscWVBYmFYVGwzMmxHTmkxbV8yWHFrcmwzc0VLUjFYRXNFUHEzY1ItYVU0dC1qX2FHelU4UU5keHdjRHp4WXZpLXJ3SlRvRWFvSDJpTkI1VVlrZER2clRrS1BPa0NlZDVnVlNYYlM3eVBsTzh2QkdBVDhsd1l5N3ltOS1DM1dxd3p6MmNkR0l6OGhLTGYxV3dTS3ZBMWJLa1FWNXROTnVtbDQxTlRyOHM4LVYwOVBsRlVCUHZkUmlmVGZUcXlqZ0t1bG9OVS1xaWpxMDdLbE8yN2F3YjF5Q25jb3NwUmN1Y04"
            },
            {
              "n": 108,
              "title": "젠슨 황 ‘엔비디아 33년 천하’… 무너지는 데 단 4일 걸렸다 - 조선일보",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNc1hURE9OTHpJQ3ZkRUFjQUctU0hTYnhoTlV4M1BBaWdzU2Y0UnYwVXZlOWczNk80RFNzZW8wZ05KV2tjT1d6QURlOHF3VEF2bG9OVXA0blhVaDFFZkFrMmliLXZSMTJLN01ieklTbFgzNC05YVZ0VTNUbDZxWkVfMDRWNA?oc=5"
            },
            {
              "n": 30,
              "title": "[젠슨황 퇴진] 33년 제왕체제 막 내렸다…지배구조-180조 지분 ’안갯속’",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2174043"
            },
            {
              "n": 106,
              "title": "‘젠슨 황 후임’ 엔비디아 임시 CEO 콜렛 크레스는 누구? - 한겨레",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNdVlWU3RjWEJ5V2JfbWQxYlVwNGZDS1lBUFZ2ZkR0TnBjWHloeVAwMFZMS3h0REhZWmJVaV81dUhIcU1NTTYtRjcxUkJDMTRfS0MwLVZVMnJ3SlEzTkNHVHZVWUxnczJ6Mmg3MklPZWl0MGJlbjR0X1VKendIVTV4MHFn?oc=5"
            },
            {
              "n": 104,
              "title": "젠슨 황 결국 퇴진, 임시 CEO “힘든 시기”…엔비디아 주가 폭락 - KBS 뉴스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFA2LVNTeTF0SmZVcS1ZeWpLV3NvWnMtQ3J6Znp0clhOOG1IeU5HQ2o2Z0VnN28tTngwYi11SEw3U3dEYzBBdWlHUC01SElBeHd3Q2NZTVctX0VIRG8?oc=5"
            }
          ],
          "flags": [
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 2,
          "name": "한국전력 3분기 실적 부진 및 주가 급락",
          "easy": "한국전력의 3분기 영업이익이 전년 대비 70% 넘게 급감하며 어닝 쇼크를 기록했습니다. 중동 전쟁 여파로 발전 연료비와 전력 구입비가 크게 늘어난 탓인데요. 실적 부진 소식에 한국전력 주가는 장중 9%대까지 하락하며 연중 최저치를 기록했습니다.",
          "quote": "한국전력, 장 초반 10% 급락…유가급등에 3Q 어닝쇼크 - 머니투데이",
          "member_count": 14,
          "sample_articles": [
            {
              "n": 63,
              "title": "한국전력, 장 초반 10% 급락…유가급등에 3Q 어닝쇼크 - 머니투데이 - 머니투데이",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE14cjRBd2hHV0p5N002Q0dYdWQtbTMzdzQwWWx4ZG00ZmRPOXZNNTlYSFppeDByanI5Nl9TVG9LNEV0a1dxNWlCRlQyYjFCbzR4SWNTa0F6NkoxdFZxYXBHaWdrXzgwbUk10gFuQVVfeXFMTUFqUno4UFF0eEUtRlQ5cE5hYmRUU1RQelY3MlplQUEyLTFUTC1lLXlyYzJsVEU0bFltOWtLVWlxcXk5cVNLQVhVakJRMy1uMHp3SnNlcFl6d2hrQ0loTlpYaWp5OEE3Nmx0bWdFa0E?oc=5"
            },
            {
              "n": 56,
              "title": "[특징주] 한국전력, 3분기 실적 부진에 9%대 급락 - Chosunbiz",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNM19MaUJqM042LV9RbDl5RGZueldMdlpuNVQxLVdiTUVGX1NjVGVoMjcxdzZ0bkFKSjByYXo4ZGdDX2hoOXBwVUtZVGVFSnpqRjJ3bktLbDdkU1o4Vm9fd2pLbmhrVDd4V2FNMWFPYUlKaDdPbWhxbktvTVNiekY0N1J3QU1HakZt0gGcAUFVX3lxTE5CUDh3a2J1V2NHNVEzMXFQZWJjYmtCTnJXR19Qb2NkWl9RWkIyNS1YTFpKS3RpNXk4Wi1PUjdGdndhNmFoRFZGUXduZTd3NkhHdWs3RDJVd1VzcmhBTzFnekVBQ2hwNUNxRl9laDU0cjJVLS1xZGU4ODhaeFZRQW9"
            },
            {
              "n": 133,
              "title": "한전 3분기 영업익 70.9% 급감…김동철 “전기요금 인상 필요” - 주간한국",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTFAzWk5PTXpFZWJHQnpSMmRTOVoyTnBwT2VJQzF1T1U3UzEzc0h6eXVlTGdoam5iUWV3NUZrcVRFWndUTTduSmVkdHhfdVo1bWFsSUhOMF94a0ZMcExWVXJISXpYenlfb2d0T0pFWnJMMGNXZXZG0gF0QVVfeXFMUDNaTk9NekVlYkdCelIyZFM5WjJOcHBPZUlDMXVPVTdTMTNzSHp5dWVMZ2hqbmJRZXc1RmtxVEVad1RNN25KZWR0eF91WjVtYWxJSE4wX3hrRkxwTFZVckhJelh6eV9vZ3RPSkVackwwY1dldkY?oc=5"
            },
            {
              "n": 131,
              "title": "한국전력, 비용 부담에 실적 부진···전기요금·원전 확대 주목 - 뉴스웨이",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5kS2h0NFFKMEQ5UERlcUlBbU5WYS1FYUNqRy1mZHRWS2I0TTdyZkFNWDVFNGlJb05kRkNIWVlpY0E3VFlJc1FDa0xSSGNQazdSTXFWSGVDLS1LNzE4NVl3R0Q3UWpTYTNnMFE?oc=5"
            },
            {
              "n": 58,
              "title": "[특징주] 한국전력, 3분기 어닝 쇼크에 장초반 9%대 하락 - 매일경제 마켓",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1pVDhEMXZaTU0zOERnZWh4VUkxM0VLdi05UkZHdVdubm9lWFVkZzVWcUlQby15NTNFeTlGMmN1U1FlS3ZlYVFtWGpjanlNcjdJdUE?oc=5"
            },
            {
              "n": 135,
              "title": "한전, 3분기 영업익 70% 급감… 전기요금 인상 압박 커지나 - 한겨레",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE85R25Ud0Q0X0xMTVA5dHlGYm9EQ1pTODNMQmhVbHRXbUZpOUZENUdseURPSHVNcjdMN2U5ZkpDaUVqWWpGV1N4azJHaGFlNm5GYldITURhWl9FTUx3NnNmSHFubXY2WHpjaUY3cA?oc=5"
            },
            {
              "n": 59,
              "title": "[특징주] 한국전력 9% 급락…실적 쇼크에 '연중 최저치' 기록 - 뉴스핌",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE0taTNCRHMxZlZzUXpfNVd6bVNPLVl1QTlLMmo3VjczSlFVcUVzOWwycU1EeFo2QVFQZlR2OHF5U0QyaG5vTFR1Z2xwS3pfelBteTB1WkhvVF9ZY25B?oc=5"
            },
            {
              "n": 61,
              "title": "[특징주] 한국전력, 3분기 영업이익 급감…주가 9%↓ - 뉴스드림",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTFBKZ0dCUUYzcEw4SFlDcDMtZEhfYW5mcEVjUjYwamJ3ZDhPdTIwQkNkRjA5V0Y2MWpGX0k5T2lYVWw1TF9ob2FjVmNvd3YwelI4MjlteklSZzA1TjViRW9hVkw1Ql9GdTFaeG0w0gFuQVVfeXFMTXY5emlUbGp3dEloNVJNQS1zVUx2RjRMcHV1VFRlMV9OY0kwbGhHelI5UnpkX2k1elFlYjJCZnl5NjItV1J0bmZVbmx1azJySGpaMk1sNm5ZS29fWjdMbmRtOXlLRzJRTThaUjFHdnc?oc=5"
            },
            {
              "n": 147,
              "title": "한국전력 3분기 영업이익 1.6조원, 전년 대비 71% 감소…\"중동전쟁 영향\" - 머니투데이 - 머니투데이",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5QUUs1dWJOZjVGRmlxX2g5N3NjRlYtWHcyT2UtSHFQa05PNklycFNiV1pSQUQ1YkQyUmtIYWRHY1ZiZV94VUItU1RDOG0zWHpseEk2dnUzSUhtZ1Q3aEFCdThmZmx6cDQzem1YR0MwRVPSAXBBVV95cUxOUFFLNXViTmY1RkZpcV9oOTdzY0ZWLVh3Mk9lLUhxUGtOTzZJcnBTYldaUkFENWJEMlJrSGFkR2NWYmVfeFVCLVNUQzhtM1h6bHhJNnZ1M0lIbWdUN2hBQnU4ZmZsenA0M3ptWEdDMEVT?oc=5"
            },
            {
              "n": 134,
              "title": "[특징주] 한국전력, 3분기 실적 부진에 9%대 급락 - 브릿지경제",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFA1UTY0SzhSenRYTnNtUE1UazNCUlZSck10TFJSbjB3NmJhVUlFZzJIYmM4alBrMktPXzdJa3dZakVsdzRmRUtoeEgwUlkza21FTm9PMjNuWHJuZw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 3,
          "name": "한전 전력망 입지선정 100건 달성",
          "easy": "한국전력이 전력망 건설을 위한 입지선정 100건을 돌파했습니다. 주민들과의 소통을 강화한 덕분에 최근 2년간 입지선정 실적이 이전보다 2배 이상 빨라졌는데요. 전력망 확충 속도가 붙으면서 안정적인 전력 공급 기반을 마련했다는 평가가 나옵니다.",
          "quote": "한전, 전력망 입지선정 100건 돌파…주민소통으로 건설 속도 높여",
          "member_count": 6,
          "sample_articles": [
            {
              "n": 64,
              "title": "한전, 전력망 입지선정 100건 돌파…주민소통으로 건설 속도 높여 - 뉴스핌",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE1TVk5BeUVqTVVsQWJlUzlrYXlKZlBGcFliSG12NkpITDExSTk3a29OSnVEWTgzcVNOeG94anJOS3Y0M0Z1Z0pZU1k3TkFHaF9FcTlXTlNXRmFScExW?oc=5"
            },
            {
              "n": 66,
              "title": "한전, ‘전력망 입지선정’ 100호 달성…2년간 입지선정 실적 2배 이상 증가 - 부산일보",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE9wWkhqS3FzTmxuaDBScFloN2hCVHpDeVRaVE9wSk95blF2WWxwcmw2cWFFYUszQXF6cEFEcjk2enZHVGRlOFlmTFRzb1FoQzE4LWRxU3NNdDdBTmFlcUtIcm1IZWJFN0VqT0ktRVFmbzRiajN6?oc=5"
            },
            {
              "n": 62,
              "title": "한국전력, 전력망 짓는 속도 2배 빨라졌다···입지선정 100건 달성 - 팍스경제TV",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1NT3NHWkVsUkdqdXhTZWhxWmVyXzFwUkJXQWVWR2VSSHFRS28tTVh4MXhDZldGeHVIRmRfUEt2c0RDbUZvdWJLeEhXRmRHTWFDWDVsbkI4Wksybm9ndnQyLTRlS0wzdTg?oc=5"
            },
            {
              "n": 69,
              "title": "한전, 주민과 함께 이룬 전력망 입지선정 100호 달성 - www.ynyonhapnews.com",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5scWM1elhfLXRwaUwtUDFRR25sd0RUZFMtME05TGs5dENWMFdFV0xLRkdzbXk5X05aRndJUVBWNEgtV2pJdWswQm1CT1R4NWw0cVRaeWhybmR6S2w4eml5eEIxaG1VVjk0T1VWb1M0QQ?oc=5"
            },
            {
              "n": 65,
              "title": "한전, 전력망 입지선정 100건 돌파…최근 2년 연평균 실적 2배↑ - 서울경제TV",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1NYWRveFRMbzRpWHBybG9DY0RUamhUN3p5MDdSVkFMZGRWcm5FQXE0bFRLUXF5VldraUFjXzNuNHZ5MEFHdk53dGVqYnFxYms5dXBTMC03TE9OR2N6S3h3ZGpXa2k?oc=5"
            },
            {
              "n": 67,
              "title": "한전, 전력망 입지선정 100호 달성…2년 새 실적 2배 - 이투데이",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE1JM1VLaGxSSl9jTW1qVms5czlpbGc5UmVrN1NUeGlDOGhBNk1WQTlXWG5QY3dMZXkwQmVvNWZlM1Y2VER3T1g5Z0R1bnpyQ254R0NDTQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 4,
          "name": "삼성전자 협력사 대상 반도체 기술 공유",
          "easy": "삼성전자가 협력사 1000여 곳을 초청해 차세대 반도체 기술 세미나를 열었습니다. AI 반도체 시장에서 메모리 중심의 기술 혁신을 이루기 위해 협력사들과 역량을 결집하겠다는 취지인데요. 반도체 진보 없이는 AI 발전도 불가능하다는 판단 아래 상생 경영을 강화하는 모습입니다.",
          "quote": "삼성전자, 협력사 1000명과 AI 반도체 기술 공유",
          "member_count": 6,
          "sample_articles": [
            {
              "n": 98,
              "title": "\"반도체 진보 없인 AI 발전도 불가능\"…삼성전자, 협력사와 기술 공유 - 아시아경제",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE05N1lGSUZQdHRRN2VBQm1RQUpGUTRsbjV0VFhKX0syQTUybkZJNk1DcXZzWjFuak41LUloQVJvTWFpcDQtamM4dkU5Q0g3Sl8yZ0tXdFJKamNoZUpzRGtzSQ?oc=5"
            },
            {
              "n": 83,
              "title": "HBM 다음 기술은…삼성, 협력사 1000명과 AI 반도체 미래 논의 - 이데일리",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNazRxUVJjZUJVS2p1all5eG9RQXVFY29LRkdIbWR3a2RudlNzcE9BWXFydVVXRlB3OV9xaWo5ZXA1MjRBR0VWSUtsWnZYUzl6V3Z5SGFqNm53ZmlQUmlEaExkS3FBbE5LeEFqLU1fWkVrOUJKeXlvSnB3MzdjUkJ4MQ?oc=5"
            },
            {
              "n": 102,
              "title": "삼성전자, 협력사 1000명과 AI 반도체 기술 공유 - 파이낸셜뉴스",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFAtSmI0Zkh6Mkw2emU5dllObVFpOGFVOXlwemNkTk5pR1RUVDVralVuWldGbS10S2R3UzVBSEJ3Nkw3OXp4S3pEWUZlRHNtT3k0bjNodnFIRmgzQQ?oc=5"
            },
            {
              "n": 101,
              "title": "삼성전자, 협력사 1000명과 AI 반도체 기술 공유…“메모리 중심 재편” - 이투데이",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE1fcThBSEZNWnZZZWdOa1Q2YUp0NmkxbGd0Xzl1alc5MUdtblJMaE12SmFwZnJRQVJlNHBtNXRqU05ubWplWU1zaGItbHNiVWg2Z0xZeQ?oc=5"
            },
            {
              "n": 100,
              "title": "삼성전자, 협력사 초청 '반도체 테크 세미나' 개최 - 매일경제 마켓",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5hU012UFpBMmV4a2xMU0dpYk1oWTdOV2ExRTVPaUNUd0huVWJ2Q0w2ZVRWeWhaaGdOOWpjMExFcXNJaGdOeEtkZmdRcTVqRDBRZ3c?oc=5"
            },
            {
              "n": 97,
              "title": "삼성전자 DS부문, 협력사 1000명과 차세대 반도체 기술 공유 - 뉴스1",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9wbTJpcnVmSm4tQjBhVTZtSnVXODFWSUJHa2tUWXJJYjFyemtRMmxzM1h4Qk1WaHlJVmtyd1IyQU9qMjdfNjd1X2JLMVZ4OEVxYVpfbDB4WTdqeVpmaXZuVHc2R1E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 5,
          "name": "美 의회의 엔비디아 中 수출 승인 조사",
          "easy": "미국 의회가 엔비디아의 중국 반도체 수출 승인 과정을 정조준해 조사에 착수했습니다. 트럼프 정부의 러트닉 상무장관이 이 과정에서 어떤 역할을 했는지 들여다보고 있는 건데요. 일각에서는 이번 조사가 미·중 반도체 수출 통제 정책의 실패를 확인하려는 움직임이라는 분석도 나옵니다.",
          "quote": "美의회, 엔비디아 中수출 승인 조사…러트닉 정조준",
          "member_count": 5,
          "sample_articles": [
            {
              "n": 157,
              "title": "美의회, 엔비디아 中수출 승인 조사…러트닉 정조준 - 경북매일",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1tYWMwS2VYR1pUcEhtbTR0dG9qek1XUl9HSG1ZbXVqbFNhTFo0LUxmVVE3NXowdTRRYkNkQ2Y2bGFJc3RieEx6SWlMeFV2VFVKdk5NZmUxTjJaUQ?oc=5"
            },
            {
              "n": 159,
              "title": "美민주, 트럼프 '엔비디아 中수출승인' 조사…러트닉 먼저 조준 - 연합뉴스",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5rakszU0FBOWs1Ym0zcmJkYjJId29Wc19jUlU3Y2ZCNEVTektMTWpLUXJIelBfWWlCZXU4bHM1WkJKWmtzZ2NFUFNCb2JXMzhjQXhrWVVYQ0NmZTM4aVV6bdIBYEFVX3lxTE5rakszU0FBOWs1Ym0zcmJkYjJId29Wc19jUlU3Y2ZCNEVTektMTWpLUXJIelBfWWlCZXU4bHM1WkJKWmtzZ2NFUFNCb2JXMzhjQXhrWVVYQ0NmZTM4aVV6bQ?oc=5"
            },
            {
              "n": 152,
              "title": "美민주, 트럼프 '엔비디아 中수출승인' 조사…러트닉 먼저 조준(종합) - 연합뉴스",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5ncldGcVRUQmxpOXlIbEFYeDBLNmhIOEQ5YWswNmlWaWRTcUxsOWNzTzRDMjdqMGdqa0I0cVBpSGFTSVV3Mm1nNFVTNHRfRTFfeC1qME5xSVk3OVN3OU1vUNIBYEFVX3lxTE5ncldGcVRUQmxpOXlIbEFYeDBLNmhIOEQ5YWswNmlWaWRTcUxsOWNzTzRDMjdqMGdqa0I0cVBpSGFTSVV3Mm1nNFVTNHRfRTFfeC1qME5xSVk3OVN3OU1vUA?oc=5"
            },
            {
              "n": 155,
              "title": "\"백악관, '대중 반도체 수출통제 실패' 러트닉 상무 거취 논의중\" - 뉴시스",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTE1SQ3g5bk00VGYtZnNHbUlwckNCb0FjSmV5Rk96SDRQQTR3U0s5YVpPcnFkZWZzbVM0US15M0Q1UV9wRU5DYmNsSmt0end0YVFmNGlVdVZzQTFrYndwSDJUSFVkSmo3eG1XVm9GeE0wMC0wWWJ3VHVoMdIBeEFVX3lxTE1SQ3g5bk00VGYtZnNHbUlwckNCb0FjSmV5Rk96SDRQQTR3U0s5YVpPcnFkZWZzbVM0US15M0Q1UV9wRU5DYmNsSmt0end0YVFmNGlVdVZzQTFrYndwSDJUSFVkSmo3eG1XVm9GeE0wMC0wWWJ3VHVoMQ?oc=5"
            },
            {
              "n": 153,
              "title": "젠슨 황 스캔들, 트럼프 정부 조사로…美의회, 반도체 中수출 승인 살핀다 - 한국일보",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9peVR0S0oxUlJjbm1PNzhGVnQ4NDNZV0Z4QWs5WGJLa2E1NkM5Ym9ldEo4WUdSaXd1UGZBWWszNUUwZzRTck1veXI0ZkdjZ2M1aHlGSy04T19VTHFicFNrVmhsVXZvbFBFSTVzWmN30gFzQVVfeXFMT3VhTGc1Y2dHTXpQZUpCWnVhZ2NITlg3aW9HMVYwT29tTk9vWElJOHIzV0NBaVZXQjVPR05qNWp6MGxjcmtNTHBKRXZkcWVVU3E2U2JGdVVacjg5V3VMSDc1Mnd2T0xtNVl2VG51NXBZaUt2Yw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 6,
          "name": "美 연준의 2027년 금리 결정 횟수 축소",
          "easy": "미국 연방준비제도가 2027년부터 기준금리 결정 회의인 FOMC 횟수를 기존 8번에서 7번으로 줄이기로 했습니다. 10월 회의는 표결 대신 통화정책 전략을 논의하는 시간으로 활용하겠다는 건데요. 시장에서는 이를 두고 연준이 긴축 기조를 유지하려는 것인지 해석이 분분합니다.",
          "quote": "美 연준, 내년 기준금리 결정 8번서 7번으로…10월엔 전략만 논의",
          "member_count": 5,
          "sample_articles": [
            {
              "n": 161,
              "title": "美 연준, 내년 기준금리 결정 8번서 7번으로…10월엔 전략만 논의 - 조선일보",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNbi1QS0I1NnF5TXNiY1RFZEo5enRSb0hKX1I1TmxnZEJvSVUxY0RkT3ZXanhqOU9lWXVzQndOU3dxNlBJSElDQ0ZxX0ZUNjBQQXVBb3VLUks2WHhXdHFNU3plTUpTV0RRQ3FsMmJ6RngzRkJPNjhCeWNhYnk0M0JuWUdCdEdGaDNX?oc=5"
            },
            {
              "n": 163,
              "title": "美연준, 내년 '금리 결정' FOMC는 7번만…10월엔 전략 논의 집중 - 연합뉴스",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5VSEFvcTlyZHlUeGZiQUR6SmdlTk1JZFpxSE1tdWsyY2kweldQM181WkZoWWN5NlpzYTlJZkJ6aWRNVEpJN2lkT09lSTAxNFlncE1STHNZd0duZ3fSAWBBVV95cUxQUGhyTWtLMVM5Z2p5TS1RaWdMRVF6UXR4NVpsbk5EakxiRU9zNkFqcGhuaDhQZGN0UUw2WDhxVDNLWHA1Tlh1Sl8tUkM3MWk3UFF0NEdhNjFvWTVkRDZ2MEc?oc=5"
            },
            {
              "n": 167,
              "title": "美 연준, 2027년 금리 결정 7차례로…10월 표결 생략 - 파이낸셜뉴스",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5yNms5SUI4bE5fLVpBcGZrcy16R2NZYUN5NGVDYnVjc3h3RXU0Y1lNRzBlMmdXclVDZkRLdHd6SDdpNkJmT1RDc0FOY1dqVjJjNXpWRmdCZzRpZw?oc=5"
            },
            {
              "n": 166,
              "title": "美 연준, 2027년 기준금리 결정 FOMC 7번으로 축소…10월은 통화정책 전략 논의 집중 - 파이낸스스코프",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBQVFc3WDA3RzBYNzh2YjhGQjZRLUFfV3lodTZETDdaLVZEMjJWb2pMMEZlUExYQjllR2h5OHc3NlhYVXFvNHhrbm1MUjA5X3k0U09GRDlvMjlhckcwbG10OFhVVHZLN0pxZGc?oc=5"
            },
            {
              "n": 164,
              "title": "미 연준, 2027년 금리 결정 7번만…10월 회의는 '전략 토론' - 뉴스핌",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE8wckZMejZqUEFkOExnUDF5al9BcWxlVUNGQ1RFSWY1U25GbEtlVk9iek53bnktZURNcTc5TmVUbE5zaGIxYWl3eVFzckdkRG9NTWJnVkd0anZjcVU2?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        }
      ],
      "single_articles": [
        {
          "rank_by_count": 7,
          "name": "효성중공업 사무기술직 노조, 13일부터 파업 예고",
          "easy": "",
          "quote": "효성중공업 사무기술직 노조, 13일부터 파업 예고",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1,
              "title": "효성중공업 사무기술직 노조, 13일부터 파업 예고",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374716"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 8,
          "name": "(2026 한국국제승강기엑스포) ‘AI로 진화하는 K-승강기…모바일 호출부터 자율점검까지 가능’",
          "easy": "",
          "quote": "(2026 한국국제승강기엑스포) ‘AI로 진화하는 K-승강기…모바일 호출부터 자율점검까지 가능’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 2,
              "title": "(2026 한국국제승강기엑스포) ‘AI로 진화하는 K-승강기…모바일 호출부터 자율점검까지 가능’",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374675"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 9,
          "name": "전기공사협회 안전기술원 신임 원장에 박지현 전 전기안전공사 사장",
          "easy": "",
          "quote": "전기공사협회 안전기술원 신임 원장에 박지현 전 전기안전공사 사장",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 3,
              "title": "전기공사협회 안전기술원 신임 원장에 박지현 전 전기안전공사 사장",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374646"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 10,
          "name": "(기자의 눈) 가업상속공제, 누구를 위한 기준인가",
          "easy": "",
          "quote": "(기자의 눈) 가업상속공제, 누구를 위한 기준인가",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 4,
              "title": "(기자의 눈) 가업상속공제, 누구를 위한 기준인가",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374670"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 11,
          "name": "(월요객석)배전망 ESS, 전력망 공간에서 시간을 사는 법",
          "easy": "",
          "quote": "(월요객석)배전망 ESS, 전력망 공간에서 시간을 사는 법",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 5,
              "title": "(월요객석)배전망 ESS, 전력망 공간에서 시간을 사는 법",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374681"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 12,
          "name": "주택공급 패러다임 변화, 전기공사업계 제도 변화에 대응해야",
          "easy": "",
          "quote": "주택공급 패러다임 변화, 전기공사업계 제도 변화에 대응해야",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 6,
              "title": "주택공급 패러다임 변화, 전기공사업계 제도 변화에 대응해야",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374703"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 13,
          "name": "(인사) 기후에너지환경부",
          "easy": "",
          "quote": "(인사) 기후에너지환경부",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 7,
              "title": "(인사) 기후에너지환경부",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374714"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 14,
          "name": "[김경식의 해외르포] 해외 전력시장의 변화 ENEL을 가다",
          "easy": "",
          "quote": "[김경식의 해외르포] 해외 전력시장의 변화 ENEL을 가다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 8,
              "title": "[김경식의 해외르포] 해외 전력시장의 변화 ENEL을 가다",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374617"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 15,
          "name": "(요즘책방) 에너지 전쟁 : 태양광 新삼국지",
          "easy": "",
          "quote": "(요즘책방) 에너지 전쟁 : 태양광 新삼국지",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 9,
              "title": "(요즘책방) 에너지 전쟁 : 태양광 新삼국지",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374713"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 16,
          "name": "윤제림 시인, 제28회 백석문학상 수상…‘스물다섯살을 반성함’ 선정",
          "easy": "",
          "quote": "윤제림 시인, 제28회 백석문학상 수상…‘스물다섯살을 반성함’ 선정",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 10,
              "title": "윤제림 시인, 제28회 백석문학상 수상…‘스물다섯살을 반성함’ 선정",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374712"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 17,
          "name": "엔라이튼, 기술성평가 A·BBB등급 획득...코스닥 상장 추진 본궤도",
          "easy": "",
          "quote": "엔라이튼, 기술성평가 A·BBB등급 획득...코스닥 상장 추진 본궤도",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 11,
              "title": "엔라이튼, 기술성평가 A·BBB등급 획득...코스닥 상장 추진 본궤도",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374711"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 18,
          "name": "“지역과 함께 성장” 해송해상풍력발전, 신안 대둔도 바다 정화 활동",
          "easy": "",
          "quote": "“지역과 함께 성장” 해송해상풍력발전, 신안 대둔도 바다 정화 활동",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 12,
              "title": "“지역과 함께 성장” 해송해상풍력발전, 신안 대둔도 바다 정화 활동",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374710"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 19,
          "name": "에너닷, AI 발전량 예측 오차율 3%대...전력중개 경쟁력 강화",
          "easy": "",
          "quote": "에너닷, AI 발전량 예측 오차율 3%대...전력중개 경쟁력 강화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 13,
              "title": "에너닷, AI 발전량 예측 오차율 3%대...전력중개 경쟁력 강화",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374709"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 20,
          "name": "국가철도공단, 인천전철변전소 신설 주민설명회 개최",
          "easy": "",
          "quote": "국가철도공단, 인천전철변전소 신설 주민설명회 개최",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 14,
              "title": "국가철도공단, 인천전철변전소 신설 주민설명회 개최",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374708"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 21,
          "name": "환경공단, 한강 상류 수질오염사고 대응 강화…지역 어촌계와 맞손",
          "easy": "",
          "quote": "환경공단, 한강 상류 수질오염사고 대응 강화…지역 어촌계와 맞손",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 15,
              "title": "환경공단, 한강 상류 수질오염사고 대응 강화…지역 어촌계와 맞손",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374707"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 22,
          "name": "전력전자·전력계통 석학들이 서울에 모인 이유는?",
          "easy": "",
          "quote": "전력전자·전력계통 석학들이 서울에 모인 이유는?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 16,
              "title": "전력전자·전력계통 석학들이 서울에 모인 이유는?",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374706"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 23,
          "name": "Modine Manufacturing 주가, 시간외 거래서 왜 급등했나?",
          "easy": "",
          "quote": "Modine Manufacturing 주가, 시간외 거래서 왜 급등했나?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 26,
              "title": "Modine Manufacturing 주가, 시간외 거래서 왜 급등했나?",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-93CH-2174088"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 24,
          "name": "삼성전자 주가, 오늘 급등한 이유는?",
          "easy": "",
          "quote": "삼성전자 주가, 오늘 급등한 이유는?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 27,
              "title": "삼성전자 주가, 오늘 급등한 이유는?",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-93CH-2174087"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 25,
          "name": "코스피, 美 증시 약세에도 장 초반 외국인 ’사자’에 2%대 상승",
          "easy": "",
          "quote": "코스피, 美 증시 약세에도 장 초반 외국인 ’사자’에 2%대 상승",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 28,
              "title": "코스피, 美 증시 약세에도 장 초반 외국인 ’사자’에 2%대 상승",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2174078"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 26,
          "name": "삼성, 데이터센터 냉각 기업 Modine 인수 협상 중 - 블룸버그",
          "easy": "",
          "quote": "삼성, 데이터센터 냉각 기업 Modine 인수 협상 중 - 블룸버그",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 29,
              "title": "삼성, 데이터센터 냉각 기업 Modine 인수 협상 중 - 블룸버그",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2174059"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 27,
          "name": "라메디텍, 英·아일랜드 독점 유통계약 2건…글로벌 성장페달 가속",
          "easy": "",
          "quote": "라메디텍, 英·아일랜드 독점 유통계약 2건…글로벌 성장페달 가속",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 31,
              "title": "라메디텍, 英·아일랜드 독점 유통계약 2건…글로벌 성장페달 가속",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2174042"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 28,
          "name": "[젠슨황 퇴진] 다올證 \"업황보다 로드맵이 변수\"",
          "easy": "",
          "quote": "[젠슨황 퇴진] 다올證 \"업황보다 로드맵이 변수\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 32,
              "title": "[젠슨황 퇴진] 다올證 \"업황보다 로드맵이 변수\"",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2174041"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 29,
          "name": "한국·캐나다, ’40조’ 튀르키예 원전 수주전 막판 총력",
          "easy": "",
          "quote": "한국·캐나다, ’40조’ 튀르키예 원전 수주전 막판 총력",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 33,
              "title": "한국·캐나다, ’40조’ 튀르키예 원전 수주전 막판 총력",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2174040"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 30,
          "name": "엔비디아 CEO 사임 충격에도 미국 주식 선물 반등",
          "easy": "",
          "quote": "엔비디아 CEO 사임 충격에도 미국 주식 선물 반등",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 34,
              "title": "엔비디아 CEO 사임 충격에도 미국 주식 선물 반등",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2174046"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 31,
          "name": "정부, WTO서 해외 기술규제 대응…’배터리·반도체’ 수출 애로 해소 추진",
          "easy": "",
          "quote": "정부, WTO서 해외 기술규제 대응…’배터리·반도체’ 수출 애로 해소 추진",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 35,
              "title": "정부, WTO서 해외 기술규제 대응…’배터리·반도체’ 수출 애로 해소 추진",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2174034"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 32,
          "name": "루마니아 10월 소비자물가 상승률 6.9%로 확대",
          "easy": "",
          "quote": "루마니아 10월 소비자물가 상승률 6.9%로 확대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 36,
              "title": "루마니아 10월 소비자물가 상승률 6.9%로 확대",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-93CH-2172418"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 33,
          "name": "스웨덴 2026년 10월 물가상승률 0.9%로 둔화",
          "easy": "",
          "quote": "스웨덴 2026년 10월 물가상승률 0.9%로 둔화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 37,
              "title": "스웨덴 2026년 10월 물가상승률 0.9%로 둔화",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-93CH-2172035"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 34,
          "name": "영국 3분기 GDP 0.7% 증가…건설업 부진을 기업 서비스업이 상쇄",
          "easy": "",
          "quote": "영국 3분기 GDP 0.7% 증가…건설업 부진을 기업 서비스업이 상쇄",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 38,
              "title": "영국 3분기 GDP 0.7% 증가…건설업 부진을 기업 서비스업이 상쇄",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-2171984"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 35,
          "name": "달러, 드디어 박스권 돌파 준비됐나? BCA의 분석",
          "easy": "",
          "quote": "달러, 드디어 박스권 돌파 준비됐나? BCA의 분석",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 46,
              "title": "달러, 드디어 박스권 돌파 준비됐나? BCA의 분석",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-2173029"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 36,
          "name": "파운드화, 매파적 연준 발언에 하락…영국 GDP 0.7% 성장에도 약세",
          "easy": "",
          "quote": "파운드화, 매파적 연준 발언에 하락…영국 GDP 0.7% 성장에도 약세",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 47,
              "title": "파운드화, 매파적 연준 발언에 하락…영국 GDP 0.7% 성장에도 약세",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-2172222"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 37,
          "name": "미 국채 수익률, 2주 만의 최고 수준 근처서 횡보…연준 발언 주목",
          "easy": "",
          "quote": "미 국채 수익률, 2주 만의 최고 수준 근처서 횡보…연준 발언 주목",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 48,
              "title": "미 국채 수익률, 2주 만의 최고 수준 근처서 횡보…연준 발언 주목",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-2172160"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 38,
          "name": "70년 된 스코틀랜드 송전망의 화려한 부활… SSEN 트랜스미션, 슬로이-윈디힐 송전선로 개보수 및 가압 완료",
          "easy": "",
          "quote": "70년 된 스코틀랜드 송전망의 화려한 부활… SSEN 트랜스미션, 슬로이-윈디힐 송전선로 개보수 및 가압 완료",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 68,
              "title": "70년 된 스코틀랜드 송전망의 화려한 부활… SSEN 트랜스미션, 슬로이-윈디힐 송전선로 개보수 및 가압 완료 - https://www.2news.co.kr/",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE43TkJ5SEV6aU10c3k4UDBHVVhiTnMxZTFzTFFuN01DSFZIUERMOWVWVkZteU03ZFpPY29YV1hhRnN4bk9yVFZ4bE1pb2syanV6VTNRRi1KYUdiZm5zR0V5SXNEZ2xXUUJZ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 39,
          "name": "수출물량 증가율 ‘역대 최고’…소득교역조건 상승률도 74.6% 최대",
          "easy": "",
          "quote": "수출물량 증가율 ‘역대 최고’…소득교역조건 상승률도 74.6% 최대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 72,
              "title": "수출물량 증가율 ‘역대 최고’…소득교역조건 상승률도 74.6% 최대 - 조세일보",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE1CVXRJd0xva0NsUEJTYXhYZjc4MnBkMzVvYlJnLW0taWlBRFo1aHhyX2lGQlp6QU9GZnI2RVJNekJ0Ry1Ia1owMExBbjZTanlicDFwTXhlTTI0R25ic2tSWDFlZ0RIOHBmcnNieEF3Q1pBM1A2?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 40,
          "name": "반도체·AI 인프라 수출 호황…수출물량 증가율 43.9% '역대 최대' - 머니투데이",
          "easy": "",
          "quote": "반도체·AI 인프라 수출 호황…수출물량 증가율 43.9% '역대 최대' - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 73,
              "title": "반도체·AI 인프라 수출 호황…수출물량 증가율 43.9% '역대 최대' - 머니투데이 - 머니투데이",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE95VDNOVVdJZFhzT3p3YkJmSjNXTGtVdm9jR2piMVNiSlUxc0FuLVBJTzRxeU5YMW1PNVZmR2JueGY5LUVaS3FBZ2RSMlZYNXJTSFdEWklGN2FTTTBacXJKWl9XT3JSekZ3Tzh1MHdLNjLSAXBBVV95cUxPeVQzTlVXSWRYc096d2JCZkozV0xrVXZvY0dqYjFTYkpVMXNBbi1QSU80cXlOWDFtTzVWZkdibnhmOS1FWktxQWdkUjJWWDVyU0hXRFpJRjdhU00wWnFySlpfV09yUnpGd084dTB3SzYy?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 41,
          "name": "단권 변압기 시장 2035년 전망: 전력망 개선과 재생에너지가 성장 견인 - 뉴스 및 통계",
          "easy": "",
          "quote": "단권 변압기 시장 2035년 전망: 전력망 개선과 재생에너지가 성장 견인 - 뉴스 및 통계",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 74,
              "title": "단권 변압기 시장 2035년 전망: 전력망 개선과 재생에너지가 성장 견인 - 뉴스 및 통계 - IndexBox",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMizAFBVV95cUxQQkNMZ21KM25vN21LTjA3MF82QmpCZ21LVXIzQ1hGM3JNbVk0cFg3T2VEWTNUdHdFdWRueXFYNVgzVDB6b19sQngxb2lZSXBqb1RzbmxxVXo3a3R0Z0x6M25McEpOS0d5TnZVWWNxU1ozekEycFJibzE5Q2VNUGtqLUd2Q040N2RoOWM5LVgyR3loMk9WQ2liNlNicWNEa0J0VnR4MnlJNEhHRDBpalBrWnFlSUFQVkZfSzctZzBrcFpqRzZhVklPcmhoWXo?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 42,
          "name": "반도체 가격 뛰고 물량도 급증…수출 구매력 역대 최대폭 개선",
          "easy": "",
          "quote": "반도체 가격 뛰고 물량도 급증…수출 구매력 역대 최대폭 개선",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 75,
              "title": "반도체 가격 뛰고 물량도 급증…수출 구매력 역대 최대폭 개선 - 이데일리",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMigAFBVV95cUxOSWxwYVJMYmlfTW1WM3luTlFubXFSVnVVSC1FR191U3ZCWURuVGFTMTVvLTdIeFU4X2o3OGtrT2lFbFhhR1Jkd1g3RmR4dWYwUDB5X3NrWDFWd1BoN2RSRWh2MkdOSnI0Wnoyb05PTzQtTEZkOXBYUnRsazZpU0NULQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 43,
          "name": "전기장비주 중장기 성장 기대…수주 잔고와 수익성이 관건",
          "easy": "",
          "quote": "전기장비주 중장기 성장 기대…수주 잔고와 수익성이 관건",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 76,
              "title": "전기장비주 중장기 성장 기대…수주 잔고와 수익성이 관건 - 핀포인트뉴스",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTE5pUFQ5Rmx6dTZZR2lQMGIxa2lvLXFZcXBrdThveEthYU5McmN3NDVpMVEySEllcFo2MjJGaW9yOER4cmtLR2pEZDg1bHhoUDJjcERydVJpZVpjV21ncWM2LU9NVEdkUElKQjgwLXVZM2pPdk9xRXJV0gF3QVVfeXFMTmlQVDlGbHp1NllHaVAwYjFraW8tcVlxcGt1OG94S2FhTkxyY3c0NWkxUTJISWVwWjYyMkZpb3I4RHhya0tHakRkODVseGhQMmNwRHJ1UmllWmNXbWdxYzYtT01UR2RQSUpCODAtdVkzak92T3FFclU?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 44,
          "name": "\"반도체가 다 했다\"… 수출 1조달러 눈앞, 반도체 331% 급증이 내 지갑에 남기는 '이것'",
          "easy": "",
          "quote": "\"반도체가 다 했다\"… 수출 1조달러 눈앞, 반도체 331% 급증이 내 지갑에 남기는 '이것'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 77,
              "title": "\"반도체가 다 했다\"… 수출 1조달러 눈앞, 반도체 331% 급증이 내 지갑에 남기는 '이것' - 경제시그널",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTFBfdVJCYW51aGJlS29fRW83Wmd2cS0tMkRQZ1RCNnlUakJ2aGpSd2lBVkQ3SlZNOXd6SlExMFlKZ2U4X25sQkdJN2hfVUNkMzlqSWd1SkZ0d0ZSM1RyVVBfYkJaTXpOT3cybEdkN3FJZHlBZTg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 45,
          "name": "주형 수지 변압기 시장 2035년 전망: 전력망 개선과 재생에너지가 성장 견인 - 뉴스 및 통계",
          "easy": "",
          "quote": "주형 수지 변압기 시장 2035년 전망: 전력망 개선과 재생에너지가 성장 견인 - 뉴스 및 통계",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 79,
              "title": "주형 수지 변압기 시장 2035년 전망: 전력망 개선과 재생에너지가 성장 견인 - 뉴스 및 통계 - IndexBox",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxPQVBiUHk1RXgxUGl4OUdLTVdLLV9pbzRwc0NOYU9vS09ZOGtVckdsc2RBMVV2YU44SnBvN0xuV1BzZlM0UjZ0VVVVLW9YT2RMdkVPdWdnblg3OGtrR2NXR3p0TUxCS2M3aU1IQXBlX19MRVRMd2lHZVdZbnRaRXUwem0xdjJHMzd2d1JaQXFPbUdXUmp5QWlkcjRyek42aEVTUmdGUnBDRzZDalF6Y0FOaVI5b3ZvZW9UMTJWeG9NeXFzelZhaS0tc25KZkdOOWRy?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 46,
          "name": "【데일리 ESG 정책 브리핑】AI 반도체 8002억원 개발·삼성전자 HBM 공장 착공·건설 하도급대금 184억원 증액",
          "easy": "",
          "quote": "【데일리 ESG 정책 브리핑】AI 반도체 8002억원 개발·삼성전자 HBM 공장 착공·건설 하도급대금 184억원 증액",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 81,
              "title": "【데일리 ESG 정책 브리핑】AI 반도체 8002억원 개발·삼성전자 HBM 공장 착공·건설 하도급대금 184억원 증액 - 임팩트온",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBVNWZNV2FXeW9IX1ViREpZb3l6cHM0UWZzeDRSekZ5NVdjUnBSWnZVM3hYN3hmQjdwcHVncWEtOHpYX0g4Ylp3TzYwSWZzTUhZbjRJSG5zWE42LXlZdVp1RHlpU2ZsR3h1N1E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 47,
          "name": "[기획-에이텍솔루션 신공장 준공]12인치 웨이퍼 재생 기술 고도화…HBM 핵심 공정까지 사업 확대",
          "easy": "",
          "quote": "[기획-에이텍솔루션 신공장 준공]12인치 웨이퍼 재생 기술 고도화…HBM 핵심 공정까지 사업 확대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 82,
              "title": "[기획-에이텍솔루션 신공장 준공]12인치 웨이퍼 재생 기술 고도화…HBM 핵심 공정까지 사업 확대 - 전자신문",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE5zc2ZfVDFtbHkyYkthWE5uaUpnRHJzRnVLNEpqZlZFMkpJdUNtRm1VZV9sck5WU2NzOXRxNWVZNTZUTnFEYnpKdFRLWktSQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 48,
          "name": "이재용, 온양캠퍼스 HBM 거점 전환 선언… 삼성전자 46조 투자",
          "easy": "",
          "quote": "이재용, 온양캠퍼스 HBM 거점 전환 선언… 삼성전자 46조 투자",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 84,
              "title": "이재용, 온양캠퍼스 HBM 거점 전환 선언… 삼성전자 46조 투자 - Korea IT Times",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9hMkhZY1M0c1FpcUt4aHkwTDg5X205Uk51MDZQVHcxMFNyb3JMTmxUNDJiMGlMcFBoZUdacW5NRlZJZkRrSzRHVjhwcmxtVWwwLWtMeG5oLU9IaTlvMFVlSGVZVllodjhqMVNxT0xNa3c?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 49,
          "name": "[포스트 젠슨 황] 엔비디아 성장세 이어질까...국내 반도체 공급망도 주목",
          "easy": "",
          "quote": "[포스트 젠슨 황] 엔비디아 성장세 이어질까...국내 반도체 공급망도 주목",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 85,
              "title": "[포스트 젠슨 황] 엔비디아 성장세 이어질까...국내 반도체 공급망도 주목 - 지디넷코리아",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9pQmoyTGFRWk9ybzJzeldSZG1Ib2xfVmNhNFppMzhmQlVKRDJyQXFzQ0RTVGU1b2kxUnNKcEpFRUdxbzk2dy1WX0xsLURYd0JPS2N2ODdB?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 50,
          "name": "‘HBM 80%’ 쥔 삼전닉스 파워…젠슨 황 스캔들 끄떡없다?",
          "easy": "",
          "quote": "‘HBM 80%’ 쥔 삼전닉스 파워…젠슨 황 스캔들 끄떡없다?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 87,
              "title": "‘HBM 80%’ 쥔 삼전닉스 파워…젠슨 황 스캔들 끄떡없다? - JTBC",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTFBvaFBVN1lOdmljQnNGU3ZpQnp6blBSTDlPZmF5WE1IYk4yWTNKRHFwbXh6M3lXTVd5Wi1SRXhfdExjZzN0NWNUTExJRk9TSU9GejIyeQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 51,
          "name": "SK하이닉스 미국 상장(SKHY) 주가 전망 2026: 목표주가 $260.64, 본주 대비 프리미엄의 의미",
          "easy": "",
          "quote": "SK하이닉스 미국 상장(SKHY) 주가 전망 2026: 목표주가 $260.64, 본주 대비 프리미엄의 의미",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 90,
              "title": "SK하이닉스 미국 상장(SKHY) 주가 전망 2026: 목표주가 $260.64, 본주 대비 프리미엄의 의미 - Mitrade",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMijwFBVV95cUxOdGc4VW4yZXRWWllhSVhHcmtIdTBhdk9wNXNVa1pXcFkwZjVPZ2pHNFdQTkRPTmUwZjg4bUtzU2RJc05INUgzaW10TEJ2d3VObDY4eVpOdXQyT2laZk5STjdBb05KVFkwNTUwdTZBQnlYRXJOWm5qa0NDUW5TRVB3SUhZQkxwQlMyMGRTMGhqQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 52,
          "name": "[특징주] 삼성전자·SK하이닉스, AMD·브로드컴 등 반사수혜 '강세'",
          "easy": "",
          "quote": "[특징주] 삼성전자·SK하이닉스, AMD·브로드컴 등 반사수혜 '강세'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 91,
              "title": "[특징주] 삼성전자·SK하이닉스, AMD·브로드컴 등 반사수혜 '강세' - 글로벌이코노믹",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPTGlOdzljdVV5ZkJaZWg3bUVVTWlnamZ4YWY5ZUtNNkQ3T0Y5MkhQRGJ2V2hLMU1NaHNac3d2QUF2RmpJUnVDZC1kTDEwWWdva09MRTAwdUw2QUNwSGM1dXE2Z2pJRDVQNGk2ay1rRjVJZnZnWWpSTXMzQ1UtWmxhUzYtdmsxaWJx?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 53,
          "name": "코스피, 반도체 강세에 5480선 상승 출발…삼성전자·SK하이닉스 3~4%대↑",
          "easy": "",
          "quote": "코스피, 반도체 강세에 5480선 상승 출발…삼성전자·SK하이닉스 3~4%대↑",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 92,
              "title": "코스피, 반도체 강세에 5480선 상승 출발…삼성전자·SK하이닉스 3~4%대↑ - 오피니언뉴스",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE1GVEswenZBQ3V2Z2RlVzBrLVc0bVJzWlZ4Mi1pRE55QW1PMm5ULXFOUjdSMy1Xd3VHQ2ZmYXEyRXlXb0dwMWU4SVR1OTEyNEg2WDRCS3dVdVRORmdnV2p1QTNlSXJTU3plRnJvVjdRbGo3QQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 54,
          "name": "특징주, 삼성전기-S7(삼성전자/SK하이닉스 등) 테마 상승세에 5.08% ↑",
          "easy": "",
          "quote": "특징주, 삼성전기-S7(삼성전자/SK하이닉스 등) 테마 상승세에 5.08% ↑",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 93,
              "title": "특징주, 삼성전기-S7(삼성전자/SK하이닉스 등) 테마 상승세에 5.08% ↑ - 매일경제 마켓",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE9tdHBaZ2dhRXRMbkJ1SzVpNGs1bWJ5QUdUZHRxcVpGQ2Z0cTEwMS1odzU5NXh3Qm5NUk9sLURtRGlfVnl3WFNxa29OWlVtWFhQTmc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 55,
          "name": "삼성전자·SK하이닉스, 저가 매수세 유입에 장 초반 동반 상승 - 머니투데이",
          "easy": "",
          "quote": "삼성전자·SK하이닉스, 저가 매수세 유입에 장 초반 동반 상승 - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 95,
              "title": "삼성전자·SK하이닉스, 저가 매수세 유입에 장 초반 동반 상승 - 머니투데이 - 머니투데이",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMidkFVX3lxTE1UcWpYOTgxeVZrMzdjLURhTEJhMTdNMjdrVHpDUGZSSEpDT0dkRDNVenhkYXp6V1BXYkZlRkRjNGdDTW1HbkVHd0ZYQVI2Tlg5Z2pNbDh2TUpUSTVHNmhkdjY3MjFKMU84aWdBMHNPbDNhVlJKMVHSAXtBVV95cUxORFJudmVCb3FydDhFMUU1ZnBid29vZ3p4QU1aOE1HcEZoRWRVQktnVXlVNHhYV0xBaWszRDU2b0JveVVFb3FyN0pEb2l5OE5UZERySnFpS1BCNHVjelFFMWk0aFloS0VmZkF6MThJWnRxN3Z5cUVzajZCZms?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 56,
          "name": "\"삼성전자 69만원\"…목표주가 더 높인 반도체 애널리스트의 근거는?",
          "easy": "",
          "quote": "\"삼성전자 69만원\"…목표주가 더 높인 반도체 애널리스트의 근거는?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 96,
              "title": "\"삼성전자 69만원\"…목표주가 더 높인 반도체 애널리스트의 근거는? - 한국경제",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1udENLUDAyVDJBQ25UcDVIMmFEMC0wejRlV0EwZy1ET1dERHhHMVZXRmplZlJoQmJEMmlIQjVfNWlSeFpycWJGa0hxdzhNV3FhUktTcmplVDZQQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 57,
          "name": "[상생경영] 지현기 삼성전자 부사장 \"AI 혁신 핵심은 반도체…협력사 역량 강화 약속\"",
          "easy": "",
          "quote": "[상생경영] 지현기 삼성전자 부사장 \"AI 혁신 핵심은 반도체…협력사 역량 강화 약속\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 99,
              "title": "[상생경영] 지현기 삼성전자 부사장 \"AI 혁신 핵심은 반도체…협력사 역량 강화 약속\" - 파이낸셜포스트",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE1RSDVBQ0lldEhiZWpqMV9yb3Q0TzlQMXBQOWd4czJuRzV3ZXd3TkQwRHJuZExjZUwtUmkzX3h4aklDWkQ1WEdzYzA4MXFfMWM2T2NsX3B6OGsteDVkREZXdU03WmZnbTBxamdOb1Zwc1YxRkdU?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 58,
          "name": "'반도체 기술 中유출' 前삼성전자 부장 징역 6년4개월 확정",
          "easy": "",
          "quote": "'반도체 기술 中유출' 前삼성전자 부장 징역 6년4개월 확정",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 103,
              "title": "'반도체 기술 中유출' 前삼성전자 부장 징역 6년4개월 확정 - 뉴시스",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTE15THlvTXlXdzk0aDVPTWJtazZUYjQ5UjhWdk1JcVNZWEUyQVlTamtKeXpfWWpBZWlpNll1LV9CMzVXekdSSml4bGNVMWFKQnVuYmpBVnlkazJYNkVSMmRRdndoc1QxVTE4LWhJR3NKY3NHX0lfaWxtaNIBeEFVX3lxTE15THlvTXlXdzk0aDVPTWJtazZUYjQ5UjhWdk1JcVNZWEUyQVlTamtKeXpfWWpBZWlpNll1LV9CMzVXekdSSml4bGNVMWFKQnVuYmpBVnlkazJYNkVSMmRRdndoc1QxVTE4LWhJR3NKY3NHX0lfaWxtaA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 59,
          "name": "[단독] 미국 제재 대상 ‘지난 슈퍼컴퓨팅센터’, 올해도 엔비디아 AI 제품 구매 – RFA 자유아시아방송",
          "easy": "",
          "quote": "[단독] 미국 제재 대상 ‘지난 슈퍼컴퓨팅센터’, 올해도 엔비디아 AI 제품 구매 – RFA 자유아시아방송",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 111,
              "title": "[단독] 미국 제재 대상 ‘지난 슈퍼컴퓨팅센터’, 올해도 엔비디아 AI 제품 구매 – RFA 자유아시아방송 - Radio Free Asia",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMijwFBVV95cUxPYkVQV1pOMC1mQnFNUzFCWjFSZHBjRGtJOExVZGdWMGRfUlk3SndTX1J4ZFE5SjdRLV9mNUJZNkZ1aURlTENvSGFXTzFfSy1mRHEwemd1Y2FFeGdqS3ZEcklKTVJkV3EtdENqTkVuM1hoMWNvUlc4NW0wRmdVdkdlcjd1VnB2Ym1pUTRGbzQ1RQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 60,
          "name": "\"20여 개 스타트업 총출동\"… 中, 민간 'SMR' 상용화 굴기로 美 패권 정조준",
          "easy": "",
          "quote": "\"20여 개 스타트업 총출동\"… 中, 민간 'SMR' 상용화 굴기로 美 패권 정조준",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 112,
              "title": "\"20여 개 스타트업 총출동\"… 中, 민간 'SMR' 상용화 굴기로 美 패권 정조준 - 글로벌이코노믹",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNQ1lhbE5jSGJRWDllUzRZMkpIRVlHWnpCeDJwYnp1NEJ5bXlydV9xdjNwbXFuX2VyVmR1OHlWNHp0VkhseTA5Q29wX3lFQWwwdlZsR3F1QkNVY2cwc2Q1OEcweW1fcGJUUGpHbFAzbXlBRGNNSnMtd2hzUXZtekg2alR5MlliT3B1?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 61,
          "name": "DL이앤씨, SMR 사업 경쟁력 강화…원전 강자로 도약 노린다",
          "easy": "",
          "quote": "DL이앤씨, SMR 사업 경쟁력 강화…원전 강자로 도약 노린다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 113,
              "title": "DL이앤씨, SMR 사업 경쟁력 강화…원전 강자로 도약 노린다 - 투데이신문",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE5Lam81RFZJcHB0Z2JybVY1aTBlb3NHdmFHRzFKOXJNUEYyTG9LeEtxU2lkS2o2OGVUSDhjTW12Qzk5djg0aUd5eHVERjFtNmJnVXFJMy16NFExY2Nnd3FLaG9pVTdfYzhIdm9F0gFvQVVfeXFMTzY5dFVCNVBVMkRYdkVHcUwtWmxSQlRGeTRObTUyVFFHUld0QXluQUQ3V3RZRjFDVEoyNkhDbXRpV25ZWTZsMXZ6X1F6UGhLeE8yUzg0c0dKbHRZeVpqU3RWX2RtcncycE1sUy1CMVY0?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 62,
          "name": "[산업이슈] 협력사가 강해야 글로벌 수주도 강하다...두산에너빌리티의 상생 전략",
          "easy": "",
          "quote": "[산업이슈] 협력사가 강해야 글로벌 수주도 강하다...두산에너빌리티의 상생 전략",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 114,
              "title": "[산업이슈] 협력사가 강해야 글로벌 수주도 강하다...두산에너빌리티의 상생 전략 - 산경e뉴스",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBJeDVQZlpaM0NfNmdfekMtRnpUTXM3R0t2enRQN3lackpYem5TYVp1SWtka2hhdHFVOU9MYmhwRS1Ec2dSTlY3dmhub0NDUGFlejZjbWcxUFhEb0lMbktONzZZM1g4MEk?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 63,
          "name": "LG에너지솔루션 버테크, ESS 운영 최적화 플랫폼 '에어로스 인텔리전스' 출시",
          "easy": "",
          "quote": "LG에너지솔루션 버테크, ESS 운영 최적화 플랫폼 '에어로스 인텔리전스' 출시",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 120,
              "title": "LG에너지솔루션 버테크, ESS 운영 최적화 플랫폼 '에어로스 인텔리전스' 출시 - 더구루",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE4yWEJMMkgwdGpPNjBXVnpaenRNUDU3c1lIN1J3ejk1MjluWWFGX2o5VWQ1Q0kwNllqMHMwOGZycXBDTlVXRmRWNEFpOUVSbnFQQlJuOXFqUmU4WkV2SUZkNQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 64,
          "name": "[에너지 백문백답] ESS(Energy Storage System, 에너지저장장치)란? - 전기를 어떻게 저장하고, 왜 지금 주목받을까? 저장 원리부터 활용처까지",
          "easy": "",
          "quote": "[에너지 백문백답] ESS(Energy Storage System, 에너지저장장치)란? - 전기를 어떻게 저장하고, 왜 지금 주목받을까? 저장 원리부터 활용처까지",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 121,
              "title": "[에너지 백문백답] ESS(Energy Storage System, 에너지저장장치)란? - 전기를 어떻게 저장하고, 왜 지금 주목받을까? 저장 원리부터 활용처까지 - ASK Inno",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE9OZFNaay04UUxNb3pnUDhSQ3JfNGl5c1RCWlowQ3lnRUpLbGt4U1FPcklackhtc3hpeEJweTlfMDN0SVZValRrejhubw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 65,
          "name": "재생에너지 급증 속 전력망 안정화 해법 제시… 트리나 스토리지·TUV 라인란드, 그리드 포밍 ESS 백서 발간",
          "easy": "",
          "quote": "재생에너지 급증 속 전력망 안정화 해법 제시… 트리나 스토리지·TUV 라인란드, 그리드 포밍 ESS 백서 발간",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 122,
              "title": "재생에너지 급증 속 전력망 안정화 해법 제시… 트리나 스토리지·TUV 라인란드, 그리드 포밍 ESS 백서 발간 - https://www.2news.co.kr/",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5Pb2NvSW9JLXR0QjdaNl8wT011YUFpdG9QMHhmMWF0dmlOOHhZMjloYnh1MklpTTZ1OXkyOVpKYmd3VmoxZHpGQXRqRnl0UF9KeFpjSlFVV3NhWlBOYTEyeGRkR3MtdGhO?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 66,
          "name": "태양광 발전 막던 `전력망 부족`… 정부, ESS로 햇빛소득마을 지원",
          "easy": "",
          "quote": "태양광 발전 막던 `전력망 부족`… 정부, ESS로 햇빛소득마을 지원",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 124,
              "title": "태양광 발전 막던 `전력망 부족`… 정부, ESS로 햇빛소득마을 지원 - 에너지프로슈머",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiTEFVX3lxTE10aTVIUWZyTWc3cTh2c1FTcXdUaDZoU1c0UEZheUlKMm10WXNGemc3cDNpdDFQSWVuMFpTcnZ5UkRNUEd6cF9TMGs3Z1M?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 67,
          "name": "[칼럼] 재생에너지 확대의 완성은 ESS 보급이 아닌 `안전`이다",
          "easy": "",
          "quote": "[칼럼] 재생에너지 확대의 완성은 ESS 보급이 아닌 `안전`이다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 125,
              "title": "[칼럼] 재생에너지 확대의 완성은 ESS 보급이 아닌 `안전`이다 - 케이에스피뉴스",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiREFVX3lxTFB0cGdJcG5FVl8ycE42UmFRcDd3dEx0MktEVWhxUnU3enJfTllsYko3YmF2aVQwajJ4Q2UydEp1bHc5VmJX?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 68,
          "name": "[2026 에너지포럼] 반도체·AI 메가프로젝트에 ESS 수요 커진다…삼성SDI, 국내외 ESS 수주 확대 주목",
          "easy": "",
          "quote": "[2026 에너지포럼] 반도체·AI 메가프로젝트에 ESS 수요 커진다…삼성SDI, 국내외 ESS 수주 확대 주목",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 126,
              "title": "[2026 에너지포럼] 반도체·AI 메가프로젝트에 ESS 수요 커진다…삼성SDI, 국내외 ESS 수주 확대 주목 - 메트로신문",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFA3VkdaN3V3UkNmWUtnZWpoRmk2all6cVo1VjZNV2VuWVVNQjlLZkRTVjc1RVZjWmxtRlF6N1U1NkdXR3hvOGp6VVpTZXQ5M25DX1kxYUZkZnRZcUhvYzZwMA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 69,
          "name": "신한자산운용, 아일랜드 ESS 사업 금융 파트너로 참여",
          "easy": "",
          "quote": "신한자산운용, 아일랜드 ESS 사업 금융 파트너로 참여",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 127,
              "title": "신한자산운용, 아일랜드 ESS 사업 금융 파트너로 참여 - 라이센스뉴스",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTFA0SUtXNEttd3dXNnByXzdFUTU0UmlUR1dHdS1YdXNhRmxYSVlSbms0aUR4bF9saTB0WUp0VkZacWF4a05DSWcwR3ZpTUJNYldZb3hCVnlZM0l0WTJWZUdvYUQ5OGZxaWZQSFBv?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 70,
          "name": "“원전도 재생에너지 인증서에 1조 원”…전기요금 부담 줄일 수 있을까",
          "easy": "",
          "quote": "“원전도 재생에너지 인증서에 1조 원”…전기요금 부담 줄일 수 있을까",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 128,
              "title": "“원전도 재생에너지 인증서에 1조 원”…전기요금 부담 줄일 수 있을까 - 동아일보",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMidkFVX3lxTE1hYXJOLWhYdmhGamplUDVCb0VvY0FFR25ON3pxNGRlZ1UxWDVMYVpGVWRvbHdHRGZLbTBoX1JfaG9zUXFnMXI4dklKbWlEUGhOOXB1SVExa1B2amRnQ3g1LXNPU25rZVF4OTloWHVEd0pFSTlOSkHSAWZBVV95cUxNcWJaY0FrNVRveEtzemU0dkU3dmdvbFNVRm1hSEEtdHJUMzFJelh3MWt5VU5VR0hqanVaRzNxZERKM2djVmVENDVQcmJUdnptT21RT3pUc2thR1BmNEtQWUV1Mzg3TFE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 71,
          "name": "영국·EU 에너지 정책 밀착 시 전기요금 인하와 에너지 안보 동시에 잡는다",
          "easy": "",
          "quote": "영국·EU 에너지 정책 밀착 시 전기요금 인하와 에너지 안보 동시에 잡는다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 129,
              "title": "영국·EU 에너지 정책 밀착 시 전기요금 인하와 에너지 안보 동시에 잡는다 - https://www.2news.co.kr/",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBlQ0JZaURaajZGamgzcXBtWTFNZjFieGxDRW9Vc2V3SmliekFkcDRWTHE5b1Rkd2NGOUdDZEpiN1JBNHBoUzJtdUhoMHJZbW1SNGlabnJfbGIxWUhYUVY5T3FkajJCTGN1?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 72,
          "name": "산업용 전기요금 차등화…반도체 공급망 수도권 밖 이전 급물살 타나",
          "easy": "",
          "quote": "산업용 전기요금 차등화…반도체 공급망 수도권 밖 이전 급물살 타나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 130,
              "title": "산업용 전기요금 차등화…반도체 공급망 수도권 밖 이전 급물살 타나 - 디지털투데이",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE5QalFpekRRWDRGTTBGeWtVcXhLVXV0bzItUV9TakdrV2NSdzRGeXctUURyM0Q5b0l5SVY2RWVPNGJ6blZUazlrWnJuQUE5bmxJVXRBY0ZUM0oxZHN1Nnk0d0x2ejB1MDZUQjdWQUV6TkJKbkk?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 73,
          "name": "글로벌 AI 데이터센터 시장에 ’K-엔진’이 뜬다",
          "easy": "",
          "quote": "글로벌 AI 데이터센터 시장에 ’K-엔진’이 뜬다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 136,
              "title": "글로벌 AI 데이터센터 시장에 ’K-엔진’이 뜬다 - 대한경제",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE9BRFhpbGZNdVN6LS1Ja1hpN0ROaEFXa3lZRFpIeDdZb0lVWEJvcjhXaFYtUm5iaHFmeHBlWHpGUGZzbUtKd0dwenZUNV9RM1ItX1ZUUk5Vb25MQXItMWNldWlQaEdTUUw4Zk8xUFYzelRMV3BF?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 74,
          "name": "CDP, 빅테크 환경공시의 허점 지적...AI 데이터센터 탄소배출 정보공개 기준 논의",
          "easy": "",
          "quote": "CDP, 빅테크 환경공시의 허점 지적...AI 데이터센터 탄소배출 정보공개 기준 논의",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 137,
              "title": "CDP, 빅테크 환경공시의 허점 지적...AI 데이터센터 탄소배출 정보공개 기준 논의 - 임팩트온",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBhTElhU2lKVTlHVEdKVGcxTFNyb2pGSVRqRjAySm5Cd052RGxQLTRVSTJOUmpMSHpqTUc3WFhUdGRFNjc1cEU2NVJDRXdNYjlkWm84OExFTWhMZjV0aEVfX1I4Q0NGcTByQVE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 75,
          "name": "식지 않는 인공지능 데이터센터 열풍, 미국 전력 수요 3년 연속 신기록",
          "easy": "",
          "quote": "식지 않는 인공지능 데이터센터 열풍, 미국 전력 수요 3년 연속 신기록",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 138,
              "title": "식지 않는 인공지능 데이터센터 열풍, 미국 전력 수요 3년 연속 신기록 - 글로벌이코노믹",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQZXNxN0d5dkZ1aHFTMXh3cnVqMHpUZjl0RWlGaHM2TzhxRmRXaWJucC1FakM5UHZzVFB1aUsyekYzSG1iN19rTUY3Vm54NllTSnU0XzhfbkN6ekxuXzhOTVdNSXNGQkR0em9OYjZUaVRYQXhGc1VHMGtydWxRZDFuU0Q5OV9kN0pm?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 76,
          "name": "친트코리아, 글로벌 데이터센터 전시회 ‘DCWA 2026’ 참가",
          "easy": "",
          "quote": "친트코리아, 글로벌 데이터센터 전시회 ‘DCWA 2026’ 참가",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 139,
              "title": "친트코리아, 글로벌 데이터센터 전시회 ‘DCWA 2026’ 참가 - 솔라투데이",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5Kbm1odmhHT1N2c1gyZTQ0N09RZGdOT2tfXzRkSlBxMW5ETFFoVTRVbU9aSVFLa0E2NjJadnBpT0NCT2xISG5oWFU0STRWNXMyd0ZIS1dGN2tIQ3JmdS1TQnhDYzVqTkI5aEJnczB2TlA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 77,
          "name": "‘인천 패싱’ 부천 데이터센터 특고압··· “한전, 무책임 전기팔이”",
          "easy": "",
          "quote": "‘인천 패싱’ 부천 데이터센터 특고압··· “한전, 무책임 전기팔이”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 140,
              "title": "‘인천 패싱’ 부천 데이터센터 특고압··· “한전, 무책임 전기팔이” - 인천투데이",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5FSmdyN0ZOelBCYUkxdmhPZE1iYzc1RVItVlFvZzhBM3ZDQ0xfUm9GYURjSzNibGVkWGN3YW1qX0ZNUmxOVnRTRDRxZzFENUM0QUlPcWVyV3UxRHpCSm10WXdPX0haYm1PQ0Fib1Bxa2w?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 78,
          "name": "‘AI 데이터센터 유치전’ 벌이던 동남아, 입지 제한하고 물·전력 규제 죄기 시작",
          "easy": "",
          "quote": "‘AI 데이터센터 유치전’ 벌이던 동남아, 입지 제한하고 물·전력 규제 죄기 시작",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 141,
              "title": "‘AI 데이터센터 유치전’ 벌이던 동남아, 입지 제한하고 물·전력 규제 죄기 시작 - 아시아투데이",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBBLW9hbTRIMC1CaGxwNUpLMG1WMEpkN0VzWk1sWDZoalhtU1A4dlRobmVoNXY4MnZFOVRJSDl4eEZnUmFBVHJ6RXF5RXN2ZlZOYWVRSGxXV3NvQzdVNmMwYVFFLWFiUzh5N1hXX0JR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 79,
          "name": "신성이엔지, 데이터센터코리아서 냉각 솔루션 소개",
          "easy": "",
          "quote": "신성이엔지, 데이터센터코리아서 냉각 솔루션 소개",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 142,
              "title": "신성이엔지, 데이터센터코리아서 냉각 솔루션 소개 - 디일렉",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE5IZ3AzbmNtdXRaUDNHZ1RseC1RZ1ZaaXlnR05qR1ZTd3VTLTR3ZFktMHkxRVA2Uk5qakFIb3VtV3dRdVpBN09jWHFVT2RfRUZQODJTOEtJQWVVc1RERm1HWlAwbnQtZw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 80,
          "name": "[논현광장-장영근의 우주 속으로] ‘우주 데이터센터’ 실현을 위한 조건들",
          "easy": "",
          "quote": "[논현광장-장영근의 우주 속으로] ‘우주 데이터센터’ 실현을 위한 조건들",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 143,
              "title": "[논현광장-장영근의 우주 속으로] ‘우주 데이터센터’ 실현을 위한 조건들 - 이투데이",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE93ZjZBT290dnZxOFhlaHdjajhTMTJVZU9PVWNycWsxS3JZcVczbXYxeXg1MHh1aVdFVDh4NlBlMFlHRGh2eGxJZEd5aTluaHhGTUNjMQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 81,
          "name": "IEA, 올해 글로벌 LNG공급량 전년 대비 3% 감소",
          "easy": "",
          "quote": "IEA, 올해 글로벌 LNG공급량 전년 대비 3% 감소",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 144,
              "title": "IEA, 올해 글로벌 LNG공급량 전년 대비 3% 감소 - 가스신문",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE14Qi1ZNHJtbW9TbmphYlIyLWREcW1kLVR2NmNxWWZtU0hmdWJtaWUtWDA3Yk9tSDJHNXBHOGpnZ2Y0ZlJ0WlktQkdUeHFtemcwbDlVWFFoMUVpNnJtOGJ4SlV3dUg5a0tIZHlHcnN30gFuQVVfeXFMTXhCLVk0cm1tb1NuamFiUjItZERxbWQtVHY2Y3FZZm1TSGZ1Ym1pZS1YMDdiT21IMkc1cEc4amdnZjRmUnRaWS1CR1R4cW16ZzBsOVVYUWgxRWk2cm04YnhKVXd1SDlrS0hkeUdyc3c?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 82,
          "name": "[에너지] 베트남, 2026년 LNG 발전 상한가 kWh당 3,453.72동 확정… 전년 대비 126동↑",
          "easy": "",
          "quote": "[에너지] 베트남, 2026년 LNG 발전 상한가 kWh당 3,453.72동 확정… 전년 대비 126동↑",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 148,
              "title": "[에너지] 베트남, 2026년 LNG 발전 상한가 kWh당 3,453.72동 확정… 전년 대비 126동↑ - 굿모닝베트남미디어",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9kcldqMHhuRWVXMXdIUUhNS3p4NVlqUEllMlBUcUZzYi1OOURaMS12UWd4ei1CV3pGc2ZDR1lMdUxqTXhKX3lxWml2NWQ4Y3VZNWM0eGtiUFpZVEhfbW50NmpEMUl6WGtjcDN6WTRZWi0?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 83,
          "name": "2026년 LNG 발전 가격 상한선을 인상하여 최고 가격을 3,453 VND/kWh 이상으로 설정합니다.",
          "easy": "",
          "quote": "2026년 LNG 발전 가격 상한선을 인상하여 최고 가격을 3,453 VND/kWh 이상으로 설정합니다.",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 149,
              "title": "2026년 LNG 발전 가격 상한선을 인상하여 최고 가격을 3,453 VND/kWh 이상으로 설정합니다. - Vietnam.vn",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNWDg0TmFZQVJqdTNxZmUwbFlHWHpuSHVpM3o0bk1HaE96ZkRlcUQwMXBHMS05WWRIeGh3aHpMRnVnalJWalo3LTF5REJSX2U3LWNsc2VUODZLc2pTVFhMRHFDS1M0WmNsN2ZNS0U3NzNiOEctTzBLR0RYTHo2aUJCdl9iSGVkem50MGhBQ3hTRDZKc2I3WUVuU3pKMTBnY0dndkE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 84,
          "name": "[美 블루웨이브 시험대] ④ 820조 예산 짰지만 美 변수는 그대로…한국 경제 방어막 시험대",
          "easy": "",
          "quote": "[美 블루웨이브 시험대] ④ 820조 예산 짰지만 美 변수는 그대로…한국 경제 방어막 시험대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 154,
              "title": "[美 블루웨이브 시험대] ④ 820조 예산 짰지만 美 변수는 그대로…한국 경제 방어막 시험대 - 뉴스핌",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTFBuTHVYTE9teko1Sk90RndOak1TbW1qdjJPSXZXdmQ3TkRmMWVVaTFnRFEyQ2c3Q1lmdXB2N2UwSENzdGlyZVNfdEhCVmtWZ0M1dmVRcjZLWm9ScVJR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 85,
          "name": "\"전투 경험 풍부한 연준, 매파가 주도권 잡고 금리 3번 올릴 것\"",
          "easy": "",
          "quote": "\"전투 경험 풍부한 연준, 매파가 주도권 잡고 금리 3번 올릴 것\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 160,
              "title": "\"전투 경험 풍부한 연준, 매파가 주도권 잡고 금리 3번 올릴 것\" - 연합인포맥스",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBkTTlqWWw1Z1VKeHJwYWVIRlBMQzgtRk1sYW1lYm4xdWp6MG1CVFJyRUNXQW96eHBwWk1wRHdQSEpOVGZtYjA5aEZoM3N0ZUhueFBHQzE0N1JCWlo1czMya1VzNnBHMlVidl8ydzFMT0vSAXRBVV95cUxNSDBUOVg0N1JnUGw0eHp6R2FfUWlWeVhFNEVkeWxNWDF5dTJKeDZfUm1FX1FPLTU1Q0hDdFB3Z0VpdjJDNUZuY2ZLbkphSHlwWVBJQ0NKM0VSTVBTWUF5QWVJM2hJUmxYSTkteHl3aGtmakl2UA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 86,
          "name": "美 국채 10년물 금리 5.109% 급등…유가 상승·연준 추가 인상 전망",
          "easy": "",
          "quote": "美 국채 10년물 금리 5.109% 급등…유가 상승·연준 추가 인상 전망",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 162,
              "title": "美 국채 10년물 금리 5.109% 급등…유가 상승·연준 추가 인상 전망 - 뉴스1",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5xb2dScXVCS09nMjNpM1NjdTZKemZlRlJ5eThQejFzV000OEpYUXRTb25Ed1NDeU54aV9pOUluSXBhbDY5dnM3cDFVWWFCaG9XWnFkMEdxTGdfYVVjLWZZSUh5VFcxYVU?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 87,
          "name": "美 국채 2년물 금리 4.765%…연준 긴축 전망에 상승",
          "easy": "",
          "quote": "美 국채 2년물 금리 4.765%…연준 긴축 전망에 상승",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 165,
              "title": "美 국채 2년물 금리 4.765%…연준 긴축 전망에 상승 - 글로벌이코노믹",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQYlU5bU8zYVVDQUp1R2ducVJMM2s2QnZLbnVoMVFJakdOZFEyZFp3UDdacjE0UVpjOW5kRGFTZjFtRUF6RThPVUQwOXNvX21oVFRKZm55b2UtTnFaTXd6VVFzakw5bkhKdnVUTFhPRi1YT2lWdkEydEt0b2tiQmN2eXZKRlNJTlVx?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 88,
          "name": "COP31 전기화 약속의 토대…정부 재생에너지 목표 이행 점검 '재생에너지 100GW신호등' 공개",
          "easy": "",
          "quote": "COP31 전기화 약속의 토대…정부 재생에너지 목표 이행 점검 '재생에너지 100GW신호등' 공개",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1192,
              "title": "COP31 전기화 약속의 토대…정부 재생에너지 목표 이행 점검 '재생에너지 100GW신호등' 공개 - 기후에너지경제",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBQMUJPN0ZISUdpb252eW01Tk9KNkFUazNpUWp1dnlDNkNvYnZxc0gtb2NzSFR1SkxLVHduMF95VVE1LU95S1VkMldEUUlRd0g5dk1tSDJjZDVTVThnVGNTRDFhQUc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 89,
          "name": "\"美 중립금리 높아진다\"..금리인상 가속화 근거 되나",
          "easy": "",
          "quote": "\"美 중립금리 높아진다\"..금리인상 가속화 근거 되나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 169,
              "title": "\"美 중립금리 높아진다\"..금리인상 가속화 근거 되나 - 마켓인",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTFBZbm5kWjJJdExuUFg2RTc2TlZpbXVBQ20wdHFncmxzSmdHY3U5WW5OWjl6aWxYVk13Y05yWjJrVldxSm5UNnRncU05WDVZZHdDblJWY2lpd3NQRUY0WTBGRTNad1B1S2hjZjFRVS1jaEE4b0E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 90,
          "name": "국내 기후단체 '재생에너지 100GW' 목표 추적 웹페이지 공개, 현재 달성률은 매우 낮아",
          "easy": "",
          "quote": "국내 기후단체 '재생에너지 100GW' 목표 추적 웹페이지 공개, 현재 달성률은 매우 낮아",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1194,
              "title": "국내 기후단체 '재생에너지 100GW' 목표 추적 웹페이지 공개, 현재 달성률은 매우 낮아 - 비즈니스포스트",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE81a2ZTREpwR0FfbFA3QVJmLWFkRjR6RFZWRmU5OE1mclFlMnhpbXR1WVJCcjBydXVfS0tVYTZQVUZ5YzRLNDNyYS1PSzZMZ2s3Q25UYVFuUWRfVU5vb1g3Y0wzdGtHaVY2UTlaZTdPRmZoVzQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 91,
          "name": "세르비아 중앙은행, 기준금리 6%로 인상",
          "easy": "",
          "quote": "세르비아 중앙은행, 기준금리 6%로 인상",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 172,
              "title": "세르비아 중앙은행, 기준금리 6%로 인상 - Investing.com 한국어",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5tbUNRVm50Zk1yLU1scHZxd01JQ1hOVVdGaEdFNG1xekpjYVROSFliN1JrMlJiWHZsNmNTd2tya1FETFVzYjUzQXByU3lkbFUxQ24taXp5Sy1xY0NEODZhMnR2QmZJcXV3NzdRYjZTVzA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 92,
          "name": "미국 연준 12월 기준금리 인상 전망: '빅스텝' 가능성과 한국 경제 영향 정리 💸",
          "easy": "",
          "quote": "미국 연준 12월 기준금리 인상 전망: '빅스텝' 가능성과 한국 경제 영향 정리 💸",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 173,
              "title": "미국 연준 12월 기준금리 인상 전망: '빅스텝' 가능성과 한국 경제 영향 정리 💸 - 뉴닉",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE5JUEJmVVJsa0V4d1NoSkpvYzVZYXJzeTVpdmJ1VU9JZmVzNTg2RzRxTlYxNG1kZGtMdlozSW9jUHNvTEhVLVVoRGNmTXd6RkE4cEdB?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 93,
          "name": "美 고물가에 빅스텝 거론…한은, 11월 금리 추가 인상 초읽기",
          "easy": "",
          "quote": "美 고물가에 빅스텝 거론…한은, 11월 금리 추가 인상 초읽기",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 174,
              "title": "美 고물가에 빅스텝 거론…한은, 11월 금리 추가 인상 초읽기 - 뉴스핌",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE5Ld09RWjMxc05VQVRyYzhVSWZPUW1kdkUtcjRDVDZJX0tTQzRWaF9mRjhzRDVxOWRFbm05ZEU3dFJoeklvaTljRXUtVk9iVWZ3QUI2U0JqRHQ3Q1Y3?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 94,
          "name": "30조 달러 투자자들 “메가프로젝트, 재생에너지로 돌려야”",
          "easy": "",
          "quote": "30조 달러 투자자들 “메가프로젝트, 재생에너지로 돌려야”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1197,
              "title": "30조 달러 투자자들 “메가프로젝트, 재생에너지로 돌려야” - 뉴스펭귄",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE1lbU9TOUtHUVE4YXBjOERkSkQ1VGhHUkV3aUlva3BLN29kcEMyaDltbVJiSkt4QjV6SXU2UUg0dTY1elVpRU9rbnNjWHF5N3c5dVozLVp6LWR4d3RZYndYbW9nRDZpejZBQlNyQTRn0gFyQVVfeXFMTTFUTXlNcFE0RFFoRnB4UUxWdlJ4Y0s0ajd2V2d2NjNwaUJYVUJQaGdhTUF4cVpIeVZCRVdPTF8yT1JzN09HeEhHU2Q4Q0NlSjRXczdBRWZ5RmxRN05SSkQwZzUxbk12MUlDY3JnYWNGeVZR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 95,
          "name": "동서발전, 여수에 친환경 LNG 복합발전소 구축⋯호남 전력망 안정·에너지 전환 가속",
          "easy": "",
          "quote": "동서발전, 여수에 친환경 LNG 복합발전소 구축⋯호남 전력망 안정·에너지 전환 가속",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1199,
              "title": "동서발전, 여수에 친환경 LNG 복합발전소 구축⋯호남 전력망 안정·에너지 전환 가속 - 이투데이",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTFBad2d3U0daLWZjcFc0NFpPYW1kWGR5YXl5Q0ppa0k1dHdIRWV2aUtQeU9yMW44WjNEdUdOQlVwcUZ4NGJZcU9nUnQwZkFwTXJMckFqeA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 96,
          "name": "엑스와이지-KAIST, 휴머노이드 로봇 상호작용 기술 고도화 ‘공조’",
          "easy": "",
          "quote": "엑스와이지-KAIST, 휴머노이드 로봇 상호작용 기술 고도화 ‘공조’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 180,
              "title": "엑스와이지-KAIST, 휴머노이드 로봇 상호작용 기술 고도화 ‘공조’ - 테크월드",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9WTGEycUF2Ui0xaGxEY3hRUmlpMTlCZlNZQkdxRlc3UnhmcGJYdFA2SXBoZzFnYkZoZ0VRZWhfZXh6SXFKZzNfREp5cElBQm92LVROeWgxUF9BaHZ1Umw1X0puSUZKMXNv?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 97,
          "name": "KISTEP \"한국 휴머노이드 경쟁력, 하드웨어 넘어 AI·데이터 생태계로 확장해야\"",
          "easy": "",
          "quote": "KISTEP \"한국 휴머노이드 경쟁력, 하드웨어 넘어 AI·데이터 생태계로 확장해야\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 181,
              "title": "KISTEP \"한국 휴머노이드 경쟁력, 하드웨어 넘어 AI·데이터 생태계로 확장해야\" - 로봇신문",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTFA4akJJb3ZUdU1lREtPank3UVpPS0Jxc2M3VHJhLVc1MG81NVNHMmVrRHpCLUE4dmZ3NE5iQnJVS09tdDA1dUkwaGdWaTl4THlRRVc4M1RnclBrN1Q3cDRicF9xRHZ2UVRDZENHcQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 98,
          "name": "[단독] 딥엑스, 中 애지봇 뚫었다…현대위아에도 NPU 공급",
          "easy": "",
          "quote": "[단독] 딥엑스, 中 애지봇 뚫었다…현대위아에도 NPU 공급",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 182,
              "title": "[단독] 딥엑스, 中 애지봇 뚫었다…현대위아에도 NPU 공급 - www.ebn.co.kr",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE1EbHpqMWpmcUQ4dnAtTjVxNVZZNUJSU1VzbW1iTjdSOWZoSUdwaEpjUm1xeHN6dFU0bC16N1VkcXYyRl9ZcGtFbVEweWZFb0ZwRTY3YlNLcExaelE3Q25ZT2tiS1FEOHdO?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 99,
          "name": "에스비비테크, 3분기 누적 매출 전년 비 86.1% 증가…휴머노이드 감속기 성장이 견인",
          "easy": "",
          "quote": "에스비비테크, 3분기 누적 매출 전년 비 86.1% 증가…휴머노이드 감속기 성장이 견인",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 183,
              "title": "에스비비테크, 3분기 누적 매출 전년 비 86.1% 증가…휴머노이드 감속기 성장이 견인 - 파이낸스스코프",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBlOFhaS21zTG9nSWkxTUVySk1EQ2QzMlQzWFVPYjFucjZNUEJwWmM3YjNSdUNhNXZEaFZUQnlyY2xYNEsxR2VDQnM5SlU5WUZ1UkFpTjlNUTdZbkI3Q1NuTnBsZW0ydmQ5alE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 100,
          "name": "에스비비테크, 휴머노이드 감속기 공급 확대...\"3분기 누적 매출 86% 성장\"",
          "easy": "",
          "quote": "에스비비테크, 휴머노이드 감속기 공급 확대...\"3분기 누적 매출 86% 성장\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 184,
              "title": "에스비비테크, 휴머노이드 감속기 공급 확대...\"3분기 누적 매출 86% 성장\" - 팍스경제TV",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9ZaF8xNEd1TUphSzMyYXpvMGVNYktGc2YxQmF1eHZULVRxZ2FwVG1rWGU4LU92cjB4d1hyTnFIZDdRemViWGhlUXVQWVktcEotMlFheS04d1FhRnVwMVhuYlNiU1RsX1E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 101,
          "name": "GXO, Apptronik과 휴머노이드 로봇 시험 확대",
          "easy": "",
          "quote": "GXO, Apptronik과 휴머노이드 로봇 시험 확대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 185,
              "title": "GXO, Apptronik과 휴머노이드 로봇 시험 확대 - Investing.com 한국어",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5BT0Jfd29pUmJqZENma0ZzT2toWUFhMm11aExYajZTZjljTDgzWGJmUEV0a0dKMnJlSmtjUVNNWW8tREk4VTM1VFVfRm91UEZDa29UZ0pYUU1iMHpLazJjcm52eFhsd013RmxhMklDTHI?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 102,
          "name": "센서·액추에이터·휴머노이드 이차전지, 선도산업으로 키운다",
          "easy": "",
          "quote": "센서·액추에이터·휴머노이드 이차전지, 선도산업으로 키운다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 187,
              "title": "센서·액추에이터·휴머노이드 이차전지, 선도산업으로 키운다 - 경북신문",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9VWERrME1fZUVLN1VBOWEySEQ4VVYxNUlINVU5R3dxYk1RdWQxeGh5YlF5b251YnJZVnBZU09Kd2ZpSTA5c19UZEJBTXQ0RFZzM2lqb0JBX18?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 103,
          "name": "보릿고개 지나는 K-배터리 소재… `2028년 유럽` 바라보는 이유",
          "easy": "",
          "quote": "보릿고개 지나는 K-배터리 소재… `2028년 유럽` 바라보는 이유",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 188,
              "title": "보릿고개 지나는 K-배터리 소재… `2028년 유럽` 바라보는 이유 - 디지털데일리",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE80bUQtY3NCMVJobDBGcFVOLTVielhuZDFYUGdvNzdoY2J6dFBJMVBpSW5YbDRBVUNIT1VmMWRyV0N6UG5SdkV6a202MUZlUmlzLTNFcEpHRWcwUFJJRFBKbFVCY3I?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 104,
          "name": "LS MnM, 창립 90주년 맞아 새 비전 선포",
          "easy": "",
          "quote": "LS MnM, 창립 90주년 맞아 새 비전 선포",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 189,
              "title": "LS MnM, 창립 90주년 맞아 새 비전 선포 - 더칼럼니스트",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE5GQW1PUHZjcVY4NFY3TmczTFhfeWZYdlhwVHI2SkJoVWRKUW9EakgybUlXNVFRSndDNTRsRmgwbnB6SUg0NC1EOXRiSFRhazBUYkNn?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 105,
          "name": "인하대, 학생들이 직접 만든 배터리로 RC카 구동",
          "easy": "",
          "quote": "인하대, 학생들이 직접 만든 배터리로 RC카 구동",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 191,
              "title": "인하대, 학생들이 직접 만든 배터리로 RC카 구동 - 경기뉴스원",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFA2ZGtHRDljUHdSeGp2ZlJHcm1CSzZUNENpUEpFcXh4R2s4dzNSVWw2aWNzNjhrSHdDS1BvWVpnY1VnM21wdGJfQm4wNUJRelJINFlMWVR0WUxHdUxFMHIzR2tCOA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 106,
          "name": "솔루스첨단소재, 동박 사업 확대에 매출 1255억…전년비 83% ↑",
          "easy": "",
          "quote": "솔루스첨단소재, 동박 사업 확대에 매출 1255억…전년비 83% ↑",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 192,
              "title": "솔루스첨단소재, 동박 사업 확대에 매출 1255억…전년비 83% ↑ - 디일렉",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE5WZjVzLTdpM2FtU2JsLS1MN0o0UldCY1BIaVFYTmRXUGVXb3ZUcER4LTFGWWd5Rml4ZTFnN0NmeTVSSVNYa1VOV2ltWnpCd1NIRXBDQ2JUZi1hV3VVb2JxeDdwN3piQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 107,
          "name": "‘배터리 선도도시 포항 국제컨퍼런스 2026’ 18일 열려",
          "easy": "",
          "quote": "‘배터리 선도도시 포항 국제컨퍼런스 2026’ 18일 열려",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 193,
              "title": "‘배터리 선도도시 포항 국제컨퍼런스 2026’ 18일 열려 - 경북신문",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBhX1V1aWp1ajQ4dnNTbWJ0RC1Nbzlxd3BMaFBkRmcyQzZud2ZKVjFmN0Z0bF9ncHpHTWRqX2M3R0I2YVhzNHFMbUJiY2tjbXg3SW9pZzExaFI?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 108,
          "name": "LS그룹, 배터리 소재로 미래 승부수…구자은 회장 \"새로운 성장 이끌 것\"",
          "easy": "",
          "quote": "LS그룹, 배터리 소재로 미래 승부수…구자은 회장 \"새로운 성장 이끌 것\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 194,
              "title": "LS그룹, 배터리 소재로 미래 승부수…구자은 회장 \"새로운 성장 이끌 것\" - 전국뉴스",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1LT2xhTFJzU0REMmVOd0ZGUmtIMHVONHhiUnhMYnk5cVFsOXJMYVl3N3RJcm1wb1FteEw3eVJVR051bmFvOXMzMFR6eFQxdngzaHBfY0RHTjM2d25YaFdlYy0wLTIzbVRGQ1RDY3ZISTM?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 109,
          "name": "중국 희토류 수출통제에 일본 이트륨 가격 64배 폭등",
          "easy": "",
          "quote": "중국 희토류 수출통제에 일본 이트륨 가격 64배 폭등",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 196,
              "title": "중국 희토류 수출통제에 일본 이트륨 가격 64배 폭등 - 서울경제",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiU0FVX3lxTFBGMVY2QWRUc3lXRHJ0c3p1Skh3UzZYWXp4YlJiWFoyU3B6TlNZUFBwMGZvQVRKQVM0WXIxMFpFdzNHT296TEx6Q2I5V2lJQzd2c0FZ0gFTQVVfeXFMUEYxVjZBZFRzeVdEcnRzenVKSHdTNlhZenhiUmJYWjJTcHpOU1lQUHAwZm9BVEpBUzRZcjEwWkV3M0dPb3pMTHpDYjlXaUlDN3ZzQVk?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 110,
          "name": "젠슨 황 스캔들, 미 ‘AI칩’ vs 중 ‘희토류’ 전쟁 도화선 되나 – RFA 자유아시아방송",
          "easy": "",
          "quote": "젠슨 황 스캔들, 미 ‘AI칩’ vs 중 ‘희토류’ 전쟁 도화선 되나 – RFA 자유아시아방송",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 199,
              "title": "젠슨 황 스캔들, 미 ‘AI칩’ vs 중 ‘희토류’ 전쟁 도화선 되나 – RFA 자유아시아방송 - Radio Free Asia",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNYThkRDRKUnMzb2RhSTlTUXFCdjUxVFJEZ19zbjBNMVkyWHgtbC1adzY3ZU1vbGNkZUhPc2t2Y2RVUVlSMlhwWklnX2hneGNYUzlJeVBPbFA0S0E1Y3JaM2xrZ19OYzdtQ1R4RjQzaGk2LTU0c1U2SnRVcEowQnIzZE5B?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 111,
          "name": "중국, 10월 희토류 수출량 전월 대비 2.7% 증가",
          "easy": "",
          "quote": "중국, 10월 희토류 수출량 전월 대비 2.7% 증가",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 202,
              "title": "중국, 10월 희토류 수출량 전월 대비 2.7% 증가 - CNews",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTFB0MnBDdXdYRUlteFlJQ21SR1VISEpfVFgyaldVaDFpNlpzWU90YktDN0ZvVUxXZGliVmpIQWpyVU1QeXRYWERYaXh1LTB6b2VlbndMVVZXQWJnXzJrWUdxSEc1dzl6Zk1Wa1ZBcUd5QllSQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        },
        {
          "rank_by_count": 112,
          "name": "DS투자증권 \"중국 희토류 규제에 휴머노이드 관절 설계 바뀐다…고감속 기술 부상\"",
          "easy": "",
          "quote": "DS투자증권 \"중국 희토류 규제에 휴머노이드 관절 설계 바뀐다…고감속 기술 부상\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 203,
              "title": "DS투자증권 \"중국 희토류 규제에 휴머노이드 관절 설계 바뀐다…고감속 기술 부상\" - 핀포인트뉴스",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1sMy1qYXhpU2lSQkVZSUlqa0RhR2dsaEtYNWttLWQ5dnNyX29ZQ1lxV0hjNFZUaGs1UW5yeS14SXkweHB5anRDNlQ5Z3RiSmtXZW5jUU9sYmxkZXpPcjZoSHJtZ3lMUTZzaDlFaHFWU2VvUk0?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        }
      ]
    },
    "ch5_papers": {
      "title": "챕터 5 · 논문 (보관함)",
      "addr": "처리-4",
      "status": "아직 없음 (하루 약 75편 보관만 · 초록 풀이 구현 전)",
      "note": "처리-4(논문 초록 풀이)는 설계만 확정되고 아직 코드는 0줄입니다. 오늘 문 앞에서 분류된 논문 원본 제목 목록만 그대로 보여줍니다.",
      "count": {
        "val": 15,
        "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
      },
      "papers": [
        {
          "title": "Subliminal Learning in Vision-Language Models",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.08538",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
        },
        {
          "title": "Probing Transformer Representations Layer by Layer, Module by Module",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.11531",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
        },
        {
          "title": "ScrapeBench: Evaluating Legal Compliance of AI Agents in Website Scraping",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.11306",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
        },
        {
          "title": "FAME-QP: A GPU-Accelerated Quadratic-Programming Solver for Real-Time Model Predictive Control",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.13766",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
        },
        {
          "title": "Evolving Infra: Agent-Adaptive LLM Serving at Scale",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.12304",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
        },
        {
          "title": "CARTBench: Rubric-Based Evaluation of Shopping Advice for Complex and Ambiguous Requests with Timelines",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.05862",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
        },
        {
          "title": "Where Does Alignment Emerge and What Does It Mean? A Closer Look at the Platonic Representation Hypothesis",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.12869",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
        },
        {
          "title": "Precision on Demand: Escalating Weight Bits at Uncertain Decoding Steps in a Small Local Model",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.14418",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
        },
        {
          "title": "Bits or permutations? Spending a fixed inference budget on weight precision or on option-order averaging in small local language models",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.14413",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
        },
        {
          "title": "PolyRoute: A Twelve-Language and Code-Mixed Benchmark for Typed-Decision Routing, with Baselines and a Leaderboard",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.13843",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
        },
        {
          "title": "SteerDistill: Quantizing LLM Agents via Closed-Loop Teacher Steering",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.13410",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
        },
        {
          "title": "Mixed Signals: Weight-Space Programming for EEG and ECG",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.13758",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
        },
        {
          "title": "Module-Aware Optimization for Graph Neural Networks",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.08379",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
        },
        {
          "title": "Read Less, Solve More: Token-Efficient Sparse Reading of External Content for AI Agents",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2608.22237",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
        },
        {
          "title": "Interactive Visual Gym: Evaluating Visual Interaction Models with Simulated Users in Interactive Worlds",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.08286",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
        }
      ]
    }
  },
  "machine_map": {
    "total_sections": 31,
    "counts_by_kind": {
      "run": 16,
      "separate": 8,
      "none": 7
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
        "line_out": "내보냄: 수집 대상 38곳 (v2_secretary/결과/2026-11-13_하루_전체.md)",
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
        "line_out": "내보냄: 오늘 들어온 글 1199건 (v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json)",
        "metrics": {
          "in": 38,
          "out": 1199,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
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
        "line_in": "받음: 들어온 글 1199건 (새 글 1042 + 이미 본 글 157)",
        "line_rule": "규칙: gate_rules/길_규칙.txt · 관심_키워드.txt · 반키워드.txt (AI 0콜)",
        "line_out": "내보냄: 거푸집1 162 · 거푸집2 43 · 뉴스 159 · 제외 614 · 논문T 15 · 모름 49",
        "metrics": {
          "in": 1199,
          "out": 1042,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
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
        "line_in": "받음: 문 앞 제외 규칙에 걸린 글 614건",
        "line_rule": "규칙: exclude.py + gate_rules/되살리기.txt (관심 키워드 든 글 표시)",
        "line_out": "내보냄: 결과/제외보관함/제외보관함.csv (1400행 누적)",
        "metrics": {
          "in": 614,
          "out": 614,
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
        "line_out": "내보냄: 한은 표 33행 · FRED 표 10행 · DART 표 159행(오늘)",
        "metrics": {
          "in": 162,
          "out": 169,
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
        "line_in": "받음: 문 앞 거푸집1 길 162건",
        "line_rule": "규칙: plate1.py 정규식 숫자 추출 + 직전 값 계산·공식 API 대조 (AI 0콜)",
        "line_out": "내보냄: 오늘 DART 표 159건 · 한은 0건 · FRED 10종",
        "metrics": {
          "in": 162,
          "out": 159,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/결과/거푸집1/2026-11-13_거푸집1.md"
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
        "line_in": "받음: 문 앞 거푸집2 길 43건 (보도자료·리포트·연방관보)",
        "line_rule": "규칙: body.py 본문 추출(0콜) → plate2.py 글당 AI 1콜 요약 + 파이썬 원문·숫자 대조 검사",
        "line_out": "내보냄: 오늘 요약 38건 (결과/거푸집2/2026-11-13_거푸집2.md)",
        "metrics": {
          "in": 43,
          "out": 38,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/결과/거푸집2/2026-11-13_거푸집2.md"
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
        "line_in": "받음: 문 앞 뉴스 길 159건",
        "line_rule": "규칙: news.py 하루 AI 2콜(A·B 독립 묶기 대조) + 없는 숫자·중복 검사",
        "line_out": "내보냄: 사건 6개 묶음 (결과/뉴스/2026-11-13_뉴스사건.json)",
        "metrics": {
          "in": 159,
          "out": 6,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/결과/뉴스/2026-11-13_뉴스사건.json"
        }
      },
      {
        "addr": "처리-4",
        "group": "처리",
        "name": "논문",
        "files": "—",
        "status": "없음 (하루 약 74편 보관만)",
        "status_kind": "none",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 문 앞 논문T 길 15편",
        "line_rule": "규칙: 설계 확정(초록 풀이 + 상위 몇 편 본문), 정식 코드는 아직 없음(보관만)",
        "line_out": "내보냄: 문 앞 목록에 15편 보관 (v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json)",
        "metrics": {
          "in": 15,
          "out": 0,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
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
        "line_out": "내보냄: 누적 연설 브리핑 22편 (결과/연준연설/)",
        "metrics": {
          "in": 22,
          "out": 22,
          "calls": 0,
          "secs": 0.0,
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
          "in": 6,
          "out": 6,
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
        "line_out": "내보냄: 결과/2026-11-13_하루_전체.md 외 5종 결과지",
        "metrics": {
          "in": 6,
          "out": 6,
          "calls": 0,
          "secs": 0.1,
          "num_source": "v2_secretary/결과/2026-11-13_하루_전체.md"
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
        "line_in": "받음: 2026-11-13 결과 파일들 + runs.jsonl + calls.jsonl + 구간_주소표.md",
        "line_rule": "규칙: export_panel.py 세기와 옮겨 적기 (새 공식 없음, AI 0콜)",
        "line_out": "내보냄: v2_secretary/결과/화면/panel.json",
        "metrics": {
          "in": 1199,
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
          "num_source": "v2_secretary/결과/문앞/2026-11-13_문앞교통정리_길별.json"
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
        "line_out": "내보냄: 실행 기록 6건 (최근: 2026-11-12 ok)",
        "metrics": {
          "in": 1,
          "out": 6,
          "calls": 4,
          "secs": 71.0,
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
        "from": "인풋-3",
        "to": "처리-4",
        "active": false
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
