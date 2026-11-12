// 자동 생성 파일 (v2_secretary/export_panel.py) — 직접 수정하지 마세요.
window.PANEL_DATA = {
  "schema_version": "2.1.0-panel-v1",
  "day": "2026-11-12",
  "generated_at": "2026-11-12 15:02:51",
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
  "overview": {
    "in_total": {
      "val": 914,
      "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
    },
    "new_total": {
      "val": 818,
      "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
    },
    "old_seen": {
      "val": 96,
      "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
    },
    "seen_ledger_lines": {
      "val": 2680,
      "source": "v2_secretary/data/seen.jsonl"
    },
    "ai_calls_day": {
      "val": 0,
      "source": "v2_secretary/결과/2026-11-12_하루_전체.md"
    },
    "ai_fails_day": {
      "val": 0,
      "source": "v2_secretary/결과/2026-11-12_하루_전체.md"
    },
    "run_secs": {
      "val": 0,
      "source": "v2_secretary/결과/2026-11-12_하루_전체.md"
    },
    "lanes": {
      "거푸집1": {
        "val": 127,
        "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
      },
      "거푸집2": {
        "val": 64,
        "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
      },
      "뉴스": {
        "val": 176,
        "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
      },
      "제외 보관함": {
        "val": 361,
        "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
      },
      "논문T": {
        "val": 25,
        "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
      },
      "모름": {
        "val": 65,
        "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
      }
    },
    "last_auto_run": {
      "day": "2026-11-11",
      "start": "2026-11-11 05:30:01",
      "by": "scheduler",
      "where": "PC",
      "mode": "run",
      "end": "2026-11-11 05:45:48",
      "secs": 947,
      "exit": 0,
      "result_md": true,
      "failed_stages": 0,
      "calls": 56,
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
          "name": "젠슨 황 엔비디아 CEO 스캔들 및 해임 논란",
          "easy": "엔비디아의 젠슨 황 CEO가 사내 임원들과 부적절한 관계를 맺었다는 의혹이 제기됐습니다. 이로 인해 엔비디아 이사회가 황 CEO의 해임을 준비하고 있다는 소식이 전해지면서 시장에 큰 파장이 일고 있는데요. 일각에서는 그가 스페이스X로 이직할 가능성까지 거론되는 등 거취를 둘러싼 불확실성이 커진 상황입니다.",
          "quote": "젠슨 황, 사내 불륜도 걸렸다... \"엔비디아 이사회서 해임 준비\"",
          "member_count": 15,
          "sample_articles": [
            {
              "n": 108,
              "title": "[속보] NYT \"젠슨 황, 엔비디아 여성 임원과도 불륜 관계\" - 연합뉴스TV",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBsM1FYd05XRERmN1NWMGFGYkExcl9WTWJMd1NBY0E0SnIzVm1Hc3JHQzJqS3dOQ0Y0SXJNWVZQT0ZCNnRFcjRFcEg1UWo3OFpWREo3TVlfcDRVX0tYMGIxalM5OGVZUHc?oc=5"
            },
            {
              "n": 196,
              "title": "트럼프 감싸도 못 막는 '젠슨 황' 스캔들…공화당도 조사 압박 - 머니투데이 - 머니투데이",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE8xMUh5Z0o2R3JXeEg5amhIeUR4NGJJeVAzRjRXSHpsaEJyTnY1TXNqWFo0Z1huLXpvcENUVkNyLXJXWEpFeDhsSEdYdG1LU201ZDNQMzItSEhpWDFMQUtpTEFNMDRYSE1FRDJLZ2NR0gFuQVVfeXFMTzExSHlnSjZHcld4SDlqaEh5RHg0Ykl5UDNGNFdIemxoQnJOdjVNc2pYWjRnWG4tem9wQ1RWQ3ItcldYSkV4OGxIR1h0bUtTbTVkM1AzMi1ISGlYMUxBS2lMQU0wNFhITUVEMktnY1E?oc=5"
            },
            {
              "n": 197,
              "title": "젠슨황, ‘불륜’ 또 터졌다…NYT “엔비디아 임원과 혼외관계” - 헤럴드경제",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1GN2ppMlh0WE5ScWFDMy0xdXVZU3IySnNfdllPRVdKSVAxVUpWVjI3R3JxeTJWUVBjUjJwZTliaUdnR21jUjRrVE44TGZlUUhsaUdRM0ZB?oc=5"
            },
            {
              "n": 104,
              "title": "젠슨 황, 사내 불륜도 걸렸다... \"엔비디아 이사회서 해임 준비\" - 조선일보",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMigwFBVV95cUxPSW9IRTc3bFNXVk1aUUxpM3gxd1ppeXExd1B1dGc1Wk1vTDQtNTlNcW50OTNyQ09YdDBJVGlqRm9WUlhhdmROcVotQTktYTdpRUViclR2bFpadVNUeG5FUkFsTU1PZ1pUSW5CRHdOd2l0TlhnR3BvdzVrWUVMcXhnNkc1SQ?oc=5"
            },
            {
              "n": 30,
              "title": "[젠슨 황 리스크] 직속 임원과 혼외관계 의혹…엔비디아 이사회 해임 논의",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2171867"
            },
            {
              "n": 107,
              "title": "“엔비디아 이사회, 젠슨 황 해임 준비…이르면 오늘 회의” - 경향신문",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE53Q0FfcnVMRlNlcGxOZHFoT0p1U0JKTHNBV0tFbUh4MUlJNjVwOVFCM1h5dnYzNExXWV9DX0h1emltWnRvcXFYd0J0cE1PS2lxT19xY3g3d0ZxZ9IBX0FVX3lxTE5tOTlFNFNDdVozVlRaa0RqcF9TSjVYNG5VbUh0TXU3S19Lck9MZ01rWjhubWZJVy1MOVNjNjNoaHhLRDdHRl9qdFBURkZMWjRVVF9jQUp5cEQxWmJ4Sk5V?oc=5"
            },
            {
              "n": 195,
              "title": "젠슨황 물러나나…\"딸 승계도 원치 않아\" - 연합뉴스 한민족센터",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE1EUWhvU29hVVJJNEhEcjJzdWtYU3huS0FXalVOeWlOTXNEdEtqcWUyUVpCSE13T25ZMEtJZFdUeVRfZzlKc2k0Q25abWlFN2xBR0t4TEVIVkNWVk0xOWN3cWNtaHZPWlVnOWQ4SlZiVUh2bFpv?oc=5"
            },
            {
              "n": 105,
              "title": "[속보] \"엔비디아 이사회, 젠슨황 해임 준비…이르면 오늘 회의\" - 연합뉴스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE90VlpFQ1dMVTNHRkIya2tUY3FRdDdBZGNfbExFcWoxTklidTczY1d6MXdRVVQ3SHllakFJZ0ZyN01ETnJfVjFqZldYV2xuNm1KeEU4ZU51cENSQTg?oc=5"
            },
            {
              "n": 106,
              "title": "\"엔비디아 이사회, 젠슨 황 해임 준비\"…시간외 주가 8% 급락 - 한국경제",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE84TF9NTHdPdkJlYmlVSGRfLVBYYzkzQzR4aEM0V0xGTXdhS0dESW92Uk42S3pBQjZuODJNRkdfVEwtem5OQWFFNEdMdmthMHl3VHp3Rzc4akF2UQ?oc=5"
            },
            {
              "n": 103,
              "title": "이사회 젠슨 황 해임 착수…“사내 유부녀 부사장과도 불륜” - 중앙일보",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1rMWE2YmVHNWxPcjVvanAwWlVQTi02ajRKaGNpXzZBa2dKenREV0ItRWVvczlZUC14Zm9WNVJ3SzFqSnZfeTdHbi01MjNyWEI4VHVkbDhn?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 2,
          "name": "삼성전자 충청권 HBM 생산 거점 투자",
          "easy": "삼성전자가 충청권에 46조 원 규모의 대규모 투자를 단행하며 최첨단 HBM 생산 거점을 구축하기로 했습니다. 이재용 회장은 온양 캠퍼스를 AI 반도체의 심장으로 키우겠다는 의지를 밝혔는데요. 이번 투자로 반도체 기판 증설과 함께 차세대 메모리 시장에서의 경쟁력을 강화할 것으로 보입니다.",
          "quote": "이재용, 충청권 메가 착공식서 \"최첨단 HBM 거점될 것\"(종합) |",
          "member_count": 8,
          "sample_articles": [
            {
              "n": 86,
              "title": "李대통령·이재용 '충청 반도체 굴기' 시동…46조원 HBM 거점 '첫삽' - 스트레이트뉴스",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE96RHVKYkpQTlRxRk1GWnF6QjNFMHRYSW1WZlVUc0ZhRTU2R0ZScklXX1pjRXhCS3JKQ2NMandCZ3h1Y1JYU091NFZqaW8zSE1sUExsZ194TUtfRlRqWnNuNUI3QlAwbW0tSTNZUWh4NnlLQTjSAXdBVV95cUxPbXU4dUdzeFJSLXRTUUhxVjVUZnBrSjJqVWUtbzZKa3hKS1dobllKeTBXODBiNmR3WVJRS0R6VHdxUnc3dlphN0Z3NVJDOWhYTkowaldKSmxQYU5iekQ5XzlVTUJrRGdYVlV5aFFBcmp6a2lNano0NA?oc=5"
            },
            {
              "n": 83,
              "title": "이재용, 충청권 메가 착공식서 \"최첨단 HBM 거점될 것\"(종합) | - 연합인포맥스",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5WMnRHTEZUS2lDYlAwWTVPUi05R1RWSVh2TGJIQVF1WmR3MHU2c3hKeURRMkFkV2h0NWRRS3R2TWw1SDVKa292NWt6S3RGZUVKRDZ5Nk5mcVl1Wkc1bXdSYnR6OGlmRWxLc1RyX1R6dUoxNHN0?oc=5"
            },
            {
              "n": 81,
              "title": "이재용 \"온양, AI 반도체 심장 HBM 거점으로 탈바꿈\" - 뉴스핌",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTFA2cGd6YllhbGs1WDJGWU9jSlVvcFkzZ1Z3cnhBOUNTWlp6RVAwd1Vwd29YWUFrbzVnZFZzSmk4MER1MDRQLWVhVGFpNU9JbVNISkstN1NhTUJ4M3lF?oc=5"
            },
            {
              "n": 85,
              "title": "삼성 온양캠퍼스, 최첨단 HBM 거점으로…이재용 \"또 한번 도약\" - 매일경제 마켓",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5vcTFtRjBfRTNkUVFKNXZxV2NTeXNPdGJYblNyTlN5VW5mUC0tZlVNNF94aXhxS3ltRTBVOGdNY1NkeHpkZ3VlZTR3QVNxa2l5ZVE?oc=5"
            },
            {
              "n": 84,
              "title": "삼성전자, 아산 온양캠퍼스에 46조 원 투자…HBM 생산거점 육성 - BBS불교방송",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE52TDZqaUJFN1RaS2hIQzRMNHBlX2JITVlGeVE4T3pEamlHVURhTVMyZkI1amg1OFdSMW5DQVBiZjBod3k4ZWFFalJOYWltOTRyV2JBQzZDZFN1OVdvY29YQlFjOGs0ZFNJLUYw?oc=5"
            },
            {
              "n": 80,
              "title": "삼성, 충청권 144조 투자 본격화…HBM·OLED·반도체 기판 증설 - 디일렉",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE1lZ0hkTlhnVUZBSHU2ekZjZFJqQldDVEJqbWxVUVRDMEtrQTFCTk5BUG5ERkZuNWwwVVV1RlF1UFdERUZQbE9xY2tNOTVpaWxROUdESXc3cTlnZ1ZZYzNQbnItWDhZZw?oc=5"
            },
            {
              "n": 99,
              "title": "이재용 “온양, 삼성전자 최첨단 HBM 생산기지로 육성” - 주간한국",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5nM3R6cFBtdTRJMmM5UzdtQXVqbmhhLXZvZHp4RHNybmJocXFaNnhYZ0VzTUpBeExtWmFKel9CZ3JGQ2Nxa3UwYTlDQTF5QUdLckQzeVRWTE55bFJzaEU3djRnTmtoLXJrdmQwdE9vZXHSAXRBVV95cUxNQ1N3WVBZbEtUWktjaDYtWWNqZ2drMDNUSkg3YkpLNkRWZUNKa2Racm4zWWI2SElUWUZXcldzb1dlOWphaHRiRDZwZWhkbFBCbjVNdlBUSTVjRFJ1RFNtYUpsYW1OVG1RQUstbkNvWUhHMTcyRA?oc=5"
            },
            {
              "n": 82,
              "title": "이재용 \"AI 반도체 심장 만들겠다\"…삼성전자, 온양에 HBM 5개 라인 구축 - www.ebn.co.kr",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9MT0NFdkN2VnpSX29QSHNobUFwSjZIdERyZ3drOVBaTEt1Mk02dGRiNFp3S0x6TU1COTRLZE1aQTdrZGhnRWpiWkxCOFo4OU15XzFEeTdza21nbndrSFVfb0RFTzlHY1N3?oc=5"
            }
          ],
          "flags": [
            "예측 의심: 이번 투자로 반도체 기판 증설과 함께 차세대 메모리 시장에서의 경쟁력을 강화할 것으로 보입"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 3,
          "name": "중국 희토류 수출 통제와 공급망 영향",
          "easy": "중국이 희토류 수출 통제 조치를 내년 1월까지 연장하면서 글로벌 공급망에 차질이 빚어지고 있습니다. 이로 인해 이트륨 등 주요 희토류 가격이 급등하고 있는데요. 일본과 유럽 등은 공급망 자립에 난항을 겪으며 한국 등 다른 국가로부터 수입을 늘리는 등 대응에 나서고 있습니다.",
          "quote": "중국, 희토류 수출통제 유예 내년 1월까지 연장…EU 공급망 자립 '난항'",
          "member_count": 8,
          "sample_articles": [
            {
              "n": 190,
              "title": "[원자재] 중국 10월 희토류 수출 2.7% 증가, 누적 감소폭은 8.7%로 축소 - 버핏연구소",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFBNS2RDUkN1WGxtSDVMT1UwcXVsM3d6clU4NHV0NjVtV0xIZkRPOHljZ3E0eGZRVWI3NTduOUNtNFZaVFRWY2V4anRiWHpZZ1lGOUotSEdUczNjYnpGNDdUdmRB?oc=5"
            },
            {
              "n": 185,
              "title": "\"中수출통제로 희토류 이트륨 가격 1년새 9배로↑…日, 韓등서 수입 늘려\" - 뉴시스",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFAtSG5GUkZWNE1wTFZhckJUYi1RU1BiTVJicWJ3ZkxEME9QM2RkUHV3a2F5MTFmWGhlXzgtWXRQYmpDd21ER2pmb0QybEp0c0ZiX3NuYklyRks4S3F0MXNIRNIBeEFVX3lxTE5jcjhEMll6alRtTWxsVXZibFNoWFRSejZ5UlgybVhUeFlWTnVrWGp6RFpLdS1Mc2k5UjIxdFpUTEZtNXhkX1Y5SHI2bzR1cWdoOFhCZGY3UklkYkNFaDB5M0FVRmp0dDhXUDEzWXJBZWhMYWtnUGJfZg?oc=5"
            },
            {
              "n": 183,
              "title": "\"1년 새 9배 폭등, 수입량 70% 급감\"… 中 수출통제에 희토류 '이트륨' 쇼크 - 글로벌이코노믹",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNZTZxSTlSemRtNXJrc2xvR21SWnY1X2xUSWwxZkJ4WGMwQzctLVMtcjEzajQtRmRQSmhFQ1lYRFRjWWtyVUdMOXpDOFI1OEh0YzBBSlVRVkNkM0l3Sk0tOFRYcHhOckZIZDV3VGtBUFU1eGhjeVJlSEVINmd5ZFNYd181U1BtUTkz?oc=5"
            },
            {
              "n": 186,
              "title": "중국, 희토류 수출통제 유예 내년 1월까지 연장…EU 공급망 자립 '난항' - 헬로티",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE1EMUZMNnNvT1ZySlpNTVJ5OExaQkRSTmZWc1UySEgxeVFPcTluU0gwd1l3S2hoQWZLR21MOWhycnVzVUx2cHhqeS1JalplbzVheER5cU1YVFZlUUh1bmNj?oc=5"
            },
            {
              "n": 189,
              "title": "희토류 공급난 심화…中 수출통제에 유럽 가격 최대 125배 폭등 - 더구루",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1ZTmdZNG9hX1MybklHZDV1Q1BNek9wd2J5VWpDYmduX2hoc3czUFNyUll3X3pXVGhaT1ItMlBwT0VZd3VKTV9BY19SSFA1dzVBREhXZE5BaUF2OFBXdDFMeA?oc=5"
            },
            {
              "n": 184,
              "title": "중국, 10월 희토류 수출량 전월 대비 2.7% 증가 - CNews",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTE02YkVVQnE5Y18tZnpCcDQ5MFVrMmczTE1ZYVZET2xreFExOFlBVlloOFRBWnFkeFp5RDNGRV9pOV9iMi1aSTJpLVk0OVo0VVU5LVJUbVNjbjlCRGRZdmM0bGRGQTJ6MDgyT1dZVUR6VXBEdl8tYnhz?oc=5"
            },
            {
              "n": 187,
              "title": "中, 대미 24% 추가관세·희토류 통제강화 유예 2개월 연장(종합) - 국민기자뉴스",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5WZlJUTnZCOGhYOHhJUkc2QVhWRDRpTEFHMms2d1Vfd3BfM2dHejZIM2VhWk5nX1YtNTVIbjNiVDVudmt5N3k5RE5rLWo4YUlsX3RQNTRqbEg2ZkE2RHk4UWZvWS1EXzTSAWdBVV95cUxOVmZSVE52QjhoWDh4SVJHNkFYVkQ0aUxBRzJrNndVX3dwXzNnR3o2SDNlYVpOZ19WLTU1SG4zYlQ1bnZreTd5OUROay1qOGFJbF90UDU0amxINmZBNkR5OFFmb1ktRF80?oc=5"
            },
            {
              "n": 188,
              "title": "'中 때문에 초비상' 다급한 日…한국에도 SOS 쳤다 [도쿄나우] - 한국경제",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1BRGptWE4yZHNuUk1INW1ESjZnbEZ1aGxBOUJoR24wUTFMemdfSWlCdnhxUGpiY0VzSk1xSUo2eTVFV3o4ZFNJNF9hTVBqQkJXTHRCbThNYVM5QQ?oc=5"
            }
          ],
          "flags": [
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 4,
          "name": "데이터센터 전력 공급 및 비용 부담 논란",
          "easy": "AI 데이터센터가 급증하면서 전력 부족 문제가 심각해지고 있습니다. 미국에서는 데이터센터에 전력망 비용을 부담시키는 방안이 추진되고 있는데요. 마이크로소프트 등 기업들은 주민들에게 비용을 전가하지 않겠다고 밝혔지만, 전력망 확충을 둘러싼 갈등은 여전히 계속되고 있습니다.",
          "quote": "MS, 데이터센터 전력 자체 조달 추진...“지역 주민에 비용 전가 않겠다”",
          "member_count": 7,
          "sample_articles": [
            {
              "n": 128,
              "title": "데이터센터 반대 여론, 핵심은 결국 전력 문제 - MIT 테크놀로지 리뷰",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMipwJBVV95cUxPVV9uVldTV0RIZElqRFk2RFZlQ3NHRWpXdU9pT1FqRTk4eWFnSkk2T1ZEclVHb3A0Rnk2QkZOaEtTYm9FREpBVk9rQWxkbUZuYXRxZnF4d2ZhSTMwRm9wRnAxdGxFc2lnVnA1Ni0zWE54bDVnenhYTVBZc2ZlcF9OZi1GdFFoRDU2OW9RWWU4MWhEVWU1UDdJX0Z1eTFjUHRSTFZ5S3hvRW5TUlpUMThmeHlhQnlBYUl0UkNwU0ljUWJ6WjNtZmdjZ1pJR2pBd2hEbkVhbC1mMmpidVJjcDNOemdqc0ZyMHJIMVBrN0VGOHN6V1AxUldRVVZJV1FwbmlMMUc2Z2E2aU1PSnF"
            },
            {
              "n": 124,
              "title": "美 데이터센터 전력 부족에…항공기 엔진 재활용 시장 급성장 - 한국경제",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5Lamg1eWdEU0hrclFmTmpoUlg2bjJmTDhhSy1hamxkWmtSTnQ5M0psNklicTlydVFSc2tuQlo3ektNQzROXzFfYlJHUnh3eWNHeS1qLU42NG1GZw?oc=5"
            },
            {
              "n": 122,
              "title": "석탄발전소에 ‘인공호흡기’…탈석탄 늦추는 AI 데이터센터 - 에너지경제신문",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE1rVzJtWGJ4Rk9kSWFWckhDMnlkS3cwQlBiVFdJeUVFZl95UkRncDVNSVQ3MktLVzR5RnhrZFJnaFFqUXY5RU5obDR2ZktxY2ljVXktc0tGSjVEWTRZTWc?oc=5"
            },
            {
              "n": 127,
              "title": "MS, 데이터센터 전력 자체 조달 추진...“지역 주민에 비용 전가 않겠다” - M이코노미뉴스",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBtdzB6ZlpCR3libW9tc0xzejBOTnJUZ2ZCZnBZTWdEYWg0UWRjVWpTT2RacWJ4SXZ2N0c3SVdad29QWWstRW10N2t4UE8yamFmdkwyOThoSXpGOFF6Y0Jub056alhzbEU?oc=5"
            },
            {
              "n": 66,
              "title": "美 데이터센터에 전력망 비용 부담 추진…인허가 개편안 내주 표결 - 이데일리",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMigAFBVV95cUxOUDdNT0MtUGNRRkV3Z0NzVHVYQnNDeVI2SjVkaEFWYk5iYXJfRlJxcGhFakVTTkdyT0R6YWNXSGZYT20tc0hjdVo2MHJoZUxUQ2xjRzhrT0hsMW52U1F4QUhYOGJ4SXBLTzRXRVVzNUcyYkxzTHlCV2ZNT1o5YnU5Nw?oc=5"
            },
            {
              "n": 123,
              "title": "美텍사스 전력당국, 비상사태 전 데이터센터 전력 감축 의무화 추진 - 더구루",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFBUZk14TExzMXA2MDU1dWU3d1VZY1Exdngxcm43X1Y1UHN3NEs1YnNMYnkwNlRpM0kySm9wMlVaTkI5ajVtdmdpeVZPdVBEWnRpOHI3dVRlUmxUVk5ldlhRTVltYw?oc=5"
            },
            {
              "n": 129,
              "title": "MS \"데이터센터 전력비용, 주민 전가 없다\" - 연합뉴스",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBwRndfbURIV1M5TFpiYmRkakZ3RmtWZGM5X2hkWEFZUGJ0WG12Q0ZXX3pScFR2dUhyMjB5cjlNWHZ2R3d3Sy1xOC1JTFVzZXgwMm4wOFJqeGNSeVXSAWBBVV95cUxQRjZrcUJTYXBmdkp5MGI2OVR4em5IelduWHh1OGNzMGxmQlkzYUJzazJ5Nnp0bnhvQUpCblFXS2t0dG0xZFVJcHlmVUUwT2xsUW55Rm9tUF9DNHRzY2tOSzA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 5,
          "name": "한전 BIXPO 2026 개최 및 성과",
          "easy": "한국전력이 주최한 'BIXPO 2026'이 에너지 혁신 기술을 선보이며 막을 내렸습니다. 이번 행사에서 한전은 185만 달러 규모의 수출 계약과 업무협약을 체결하며 에너지 신기술의 사업화 가능성을 확인했는데요. 김동철 사장도 현장을 찾아 건식 바이오가스 시스템 등을 직접 살피며 기술 경쟁력을 강조했습니다.",
          "quote": "한전, ‘BIXPO 2026’ 폐막…185만 달러 규모 수출계약·MOU",
          "member_count": 5,
          "sample_articles": [
            {
              "n": 56,
              "title": "한국전력 '빅스포 2026' 폐막…25억원 규모 수출계약·MOU - 매일경제 마켓",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE00U0FXUVBqLUVpTWVYWFlJak1YUFhacFFRMnU3R01xU0FjeExfZXlpdGZLeTBsLUNsdG5LbWRPZ2tWZlBRQ0dmTzRkNUNyQnZrOGc?oc=5"
            },
            {
              "n": 57,
              "title": "한전, ‘BIXPO 2026’ 폐막… 에너지 혁신 기술, 투자와 사업화로 결실 맺었다 - 에너지데일리",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE5Ia29PMk9GWElrd2xkYmRZcTIyYlowVVRuOEJCS2VuMGp1U3NUaUhJY1YzeGhZeEU2dnRZOUQ2cU1FUU94cXlGWFBsSEw3c2lrRmtaaFAtYU5yTmJLRS1YWHQ5ZG9OYmhBM0huUkJaTV9ndw?oc=5"
            },
            {
              "n": 63,
              "title": "한전, ‘BIXPO 2026’ 폐막…185만 달러 규모 수출계약·MOU - 지디넷코리아",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5NNDZOWklJN0RfX3FqY1NzaUFnUGc3ODI3dEQwX2NJeGgwWm4tVzhnczBDWGEyajdBbUhuYlFnM2M5RlFVc2Y1Q2VQYmQ5cC1NaGtCV1ln?oc=5"
            },
            {
              "n": 71,
              "title": "한전 BIXPO 2026, 185만 달러 수출 성과…AI 전력망·에너지 신기술 사업화 본격화 - 에너지안전신문",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9NeHVYRDNWRkFJdFhrVFQ5cWFrMERFQWg0anF6MVg4SFE4Z011LUh4S3MwQnJGRms2aVBIMUh5ZXd0d3d6V3JSUWZ4Sk44d0JJdlZSRVVUdzdKN0M5d1FaX2VPd2Q?oc=5"
            },
            {
              "n": 62,
              "title": "김동철 한전 사장, BIXPO 그리네플 부스 찾아 건식 바이오가스 시스템 'ADOS' 살펴 - 전자신문",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE0xWl9hYXQ5YUhnZXlQakJrZlo3dXlOdm5pdDdGbVVST2UwczBWTEN1MDhreXRMNGZVU2lIajJJanJlcl9vdjhmWlJ5OFVzQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 6,
          "name": "미국 SMR 건설 허가와 국내 기업 수혜",
          "easy": "미국 엑스에너지가 텍사스주에 소형모듈원전(SMR) 건설 허가를 받으면서 관련 사업이 본격화되고 있습니다. 이에 따라 두산에너빌리티와 DL이앤씨 등 국내 기업들의 기자재 수주와 건설 참여 기회가 확대될 것이라는 전망이 나옵니다. 다만 실제 착공까지는 여러 변수가 남아있다는 분석도 있습니다.",
          "quote": "[단독] 美엑스에너지, 텍사스 SMR 건설 허가 받아...두산에너빌리티·DL이앤씨 수혜 본격화",
          "member_count": 4,
          "sample_articles": [
            {
              "n": 115,
              "title": "'DL이앤씨·두산 협력사' 엑스에너지 미국 SMR 건설 승인, \"실제 착공 여부는 미지수\" - 비즈니스포스트",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTFBJOVh0YTlVNWZfZjRJZmtiQ0FFaDkwc19Cc1BGOHdpc0hZMGxDWHpQbTRnaS0yVjJmNXJsVldhWFh6Snk0R2NZdDlMRlo4X09GX3VNRlpNcnRtM0RaYV9VZ1NfeFplM1JuVXpPLWpWaEpWSmM?oc=5"
            },
            {
              "n": 112,
              "title": "[단독] 美엑스에너지, 텍사스 SMR 건설 허가 받아...두산에너빌·DL이앤씨 수혜 본격화 - 더구루",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE0tZ09MeWdvLWFpdzY4UXdVUkZoRXhIMnJpUS0tRUNvdWdSUUNWeXYtQnY2cC13N0hSM2g0NVpDeGlDanFSWVQ1TWFnWTJzNEJzWFRRek43UV9lbTNLOGFxOU1vUQ?oc=5"
            },
            {
              "n": 109,
              "title": "미국 SMR 건설 허가에 커진 기회…두산에너빌리티, 제조 역량 수주로 잇나 - 이지경제",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBYb1RhMllZQi1GbmEyNnZTcGF5MzFHT0hucUo1OTByMTNLMjh5bjZvbDUxa1BxbmU0N0NHbHM5QzJGTF85MC1ndE5DMzVZdTJWTGRVNjkyTVQ2aG55d1hzRFo3R3hVektLRG5iRVl3?oc=5"
            },
            {
              "n": 111,
              "title": "美 SMR 건설 본격화…K-원전 기자재 수혜 전망은? - 이코리아",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5PTzN0OGJuWmxFTHVyLWsyQ2ZzVFktVUlycC1LSmxkX1p1UEt3U1RWZGRvODNqNjNTaW85MS15ZG9KSVJ6T1hpZVU1LUhseEtvM0oxVzNMaHNLZERocU9pUC1kWFZCTDJNa2Z3ajVwYw?oc=5"
            }
          ],
          "flags": [
            "대표 제목 인용이 원문과 다름"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 7,
          "name": "홈플러스 센텀시티점 단전 위기",
          "easy": "홈플러스 센텀시티점이 전기요금을 장기간 체납하면서 단전 위기에 처했습니다. 한국전력 부산울산본부는 입점 업체들의 영업 피해를 최소화하기 위해 전력 공급 유지 방안을 논의하고 있는데요. 반복되는 체납 문제로 인해 입점 상인들의 불안감이 커지고 있습니다.",
          "quote": "홈플러스 센텀시티점 단전 위기...한전부울본부, 입점업체 전기공급 대책 논의",
          "member_count": 4,
          "sample_articles": [
            {
              "n": 59,
              "title": "홈플러스 센텀시티점 단전 위기...한전부울본부, 입점업체 전기공급 대책 논의 - 전기신문",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5nak90TWRLZDFDV1hyVVhFdHl3eEpQZ0hkU0R4RHJqSUxTcWNYbzhrVWxNQXU2bzEyS3l3NGV4cEUxbE5CbHdxUWpmdk9ydVhsaE5vWW81bHdyNkU4cW1xbEM3dFJtQWhmaWJ6Zm4yOWvSAXBBVV95cUxOZ2pPdE1kS2QxQ1dYclVYRXR5d3hKUGdIZFNEeERyaklMU3FjWG84a1VsTUF1Nm8xMkt5dzRleHBFMWxOQmx3cVFqZnZPcnVYbGhOb1lvNWx3cjZFOHFtcWxDN3RSbUFoZmliemZuMjlr?oc=5"
            },
            {
              "n": 20,
              "title": "홈플러스 센텀시티점 단전 위기...한전부울본부, 입점업체 전기공급 대책 논의",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374679"
            },
            {
              "n": 58,
              "title": "한전 부울본부, 홈플러스 센텀시티점 전력 공급 유지 방안 모색 - 뉴스핌",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTFBacXA0aG5tWHIzcWx3VXFDekhab0pTcm5ibWVnSHNuM05OX3pWVFU3QnB3dWk0QnpjV1pBa3lxalppUDZsNVk5ZFhFTVBHcWNkbklIS0JvOXNrMDZH?oc=5"
            },
            {
              "n": 121,
              "title": "“홈플러스, 영업점도 전기세 반복 체납”…커지는 단전 위기 - 헤럴드경제",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5SNjBETFJZV2pYV2lfV2pVNGJkYURNc0V3azMycGFNVE5VUHlMN0FDVWgxdWo5N2VTYzY3OEwwRWFERHVuaFBxeERYZ2JxVnpqb2s1LXRR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 8,
          "name": "LS MnM 배터리 소재 공장 준공",
          "easy": "LS MnM이 창립 90주년을 맞아 배터리 소재 공장을 준공했습니다. 전기차 50만 대 분량의 배터리 소재를 생산할 수 있는 규모인데요. 이번 공장 준공을 통해 LS MnM은 단순 제련 기업을 넘어 핵심 소재 기업으로 도약하겠다는 비전을 선포했습니다.",
          "quote": "LS MnM, 전기차 50만대분 배터리소재 공장 준공…‘제련 넘어 핵심소재로’",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 177,
              "title": "구동휘 배터리 공장 준공…LS MnM 상장 시험대 - 자본시장뉴스",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1nQUNPdG90VlZtMm1aWGxnVlNKNmd6LWdvX0NCRnBaWVpJS0dtc1JsSHZEYUJMYWRoTGFacW9kakJkV0FTRnRvYnlGLWpkZG5pcG44UV90VkNFYjg3TWFfdlExai1lc00?oc=5"
            },
            {
              "n": 182,
              "title": "LS MnM, 전기차 50만대분 배터리소재 공장 준공…‘제련 넘어 핵심소재로’ - 에너지경제신문",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE1wYS1oTTExYWJKWVE5SkotQWJ2QldqN2gybFIxYzFYYnJ4T00xaEhsT3NIUUN6VE5fbTVpRTdCd3JEa1IzampLa0tEV0d3Rzd6aEp4VXlYYXo1dGItTGtsTFZ3?oc=5"
            },
            {
              "n": 180,
              "title": "LS MnM, 창립 90주년 맞아 새 비전 선포…배터리소재 온산공장 준공 - Daily NTN",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBxMER0LTdZT1liU2JNaV90TkdLWGtDZUh0Z203MVhNYkZ0NldXcGVhdzNHa3Z5NXU4YW9QQTctelJnbXZmaXBJc1d5WGduWTAtNm5tVFVFNzNhYUYyU0MwcFpjMGFxdVpjT3c?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 9,
          "name": "모듈러주택 특별법 분리발주 예외 논란",
          "easy": "정부가 모듈러주택 공급을 늘리기 위해 전기공사 분리발주 의무를 완화하는 특별법을 추진하고 있습니다. 하지만 전기공사업계는 안전과 품질을 이유로 강하게 반발하고 있는데요. 공기 단축이라는 효율성보다 전기 안전이 우선이라는 목소리가 높습니다.",
          "quote": "“주택공급 속도보다 전기안전 우선”…모듈러 특별법 분리발주 예외 논란",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 7,
              "title": "[모듈러 특별법 쟁점] “공기 단축은 공법의 효과”…분리발주 예외 실효성 논란",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374662"
            },
            {
              "n": 8,
              "title": "“주택공급 속도보다 전기안전 우선”…모듈러 특별법 분리발주 예외 논란",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374661"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        }
      ]
    },
    "ch2_numbers": {
      "title": "챕터 2 · 숫자 (거푸집1)",
      "addr": "처리-1",
      "status": "돎 (AI 0콜 · 정규식 추출 + 공식 API 대조)",
      "counts": {
        "gate_in": {
          "val": 127,
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        "dart_day_total": {
          "val": 123,
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        "dart_contracts": {
          "val": 11,
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        "dart_others": {
          "val": 112,
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        "fred_series": {
          "val": 9,
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        "bok_rows_total": {
          "val": 25,
          "source": "v2_secretary/결과/거푸집1/한은_지표표.csv"
        },
        "bok_rows_day": {
          "val": 0,
          "source": "v2_secretary/결과/거푸집1/한은_지표표.csv"
        }
      },
      "dart_contracts": [
        {
          "company": "후성",
          "market": "유가",
          "what": "단일판매ㆍ공급계약 체결",
          "amount_won": "71,194,900,000",
          "pct_of_sales": "15.10",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "해외",
          "period": "2027-01-01~2031-12-31",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111800752",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "원익홀딩스",
          "market": "코스닥",
          "what": "반도체용 특수가스 공급을 위한",
          "amount_won": "-",
          "pct_of_sales": "-",
          "pct_check": "",
          "counterparty": "린데코리아 주식회사",
          "region": "국내",
          "period": "2025-12-17~2028-08-31",
          "changes": "2. 계약내역 확정계약금액 조건부계약금액 계약금액 총액(원) 최근 매출액(원) 매출액 대비(%): 296,300,000,000 - 296,300,000,000 645,472,610,486 45.90 → - - - 622,991,604,240 - ; 3. 계약상대방 - 최근 매출액(원): 1,166,036,729,254 → 1,141,839,307,259 ; 5. 계약기간 - 종료일: 2028-04-30 → 2028-08-31 ; 6. 주요 계약조건 - 대금지급 조건 등: - 선급금(1차) : 400억원(VAT별도) 계약체결일로부터 14일 이내 선급금(2차) : 450억원(VAT별도) 계약체결일로부터 60일 이내  → - 선급금(1차) : 400억원(VAT별도) 계약체결일로부터 14일 이내 선급금(2차) : 450억원(VAT별도) 계약체결일로부터 60일 이내  ; 9. 공시유보 관련내용 - 유보기한 - 유보사유: - - → 2028-08-31 경영상 비밀유지 ; 10. 기타 투자판단에 참고할 사항: - 상기 2.계약내역의 최근 매출액은 2024년도말 연결재무제표 기준입니다. - 상기 2.계약내역의 계약금액은 부가세 별도 금액입니다. - 상기 → - 상기 2.계약내역의 최근 매출액은 2025년도말 연결재무제표 기준입니다. - 상기 2.계약내역의 계약금액은 계약상대방의 요청으로 공시유보하였 ; ※ 관련공시: - → 2025-12-17",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900738",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "HJ중공업",
          "market": "유가",
          "what": "정정신고(보고)",
          "amount_won": "60,071,110,637",
          "pct_of_sales": "3.36",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "울산광역시 남구 용잠로 623(한국동서발전 울산발전본부)",
          "period": "2024-02-15~2027-05-29",
          "changes": "5. 계약기간 종료일: - → 2027-05-29 ; 9. 기타투자판단과 관련한 중요사항: 1. 공사개요 - 위   치 : 울산광역시 남구 용잠로 623(한국동서발전 울산발전본부) - 주요공사 : 울산 기력 4,5,6호기 각종 기계설비 → 1. 공사개요 - 위   치 : 울산광역시 남구 용잠로 623(한국동서발전 울산발전본부) - 주요공사 : 울산 기력 4,5,6호기 각종 기계설비",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111800599",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "빅텍",
          "market": "코스닥",
          "what": "잠수함용 전자전장비(BLQ-100K)",
          "amount_won": "38,724,000,000",
          "pct_of_sales": "70.49",
          "pct_check": "맞음",
          "counterparty": "방위사업청",
          "region": "대한민국",
          "period": "2024-12-19~2028-12-10",
          "changes": "6. 주요 계약조건 -대금지급 조건 등: - 연도별 부기금액 2024년 6,000,000,000원 2025년 8,000,000,000원 2026년 5,000,000,000원 2027년  → - 연도별 부기금액 2024년 6,000,000,000원 2025년 8,000,000,000원 2026년 6,000,000,000원 2027년 ",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900574",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "동부건설",
          "market": "유가",
          "what": "단일판매ㆍ공급계약 체결",
          "amount_won": "163,963,636,364",
          "pct_of_sales": "9.32",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "전남광주통합특별시 함평군 신광면 및 손불면 일원",
          "period": "2027-09-01~2031-04-12",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111800499",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "서전기전",
          "market": "코스닥",
          "what": "세운4구역 도시환경정비사업",
          "amount_won": "5,510,805,000",
          "pct_of_sales": "9.61",
          "pct_check": "맞음",
          "counterparty": "(주)미동이엔씨",
          "region": "서울특별시 종로구",
          "period": "2019-12-20~2028-12-31",
          "changes": "5.계약기간 종료일: 2026-12-31 → 2028-12-31",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900438",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "브리지텍",
          "market": "코스닥",
          "what": "비씨카드 콜센터 상담시스템 재구축 사업",
          "amount_won": "5,259,000,000",
          "pct_of_sales": "10.6",
          "pct_check": "맞음",
          "counterparty": "주식회사 케이티",
          "region": "대한민국",
          "period": "2026-11-12~2027-07-31",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900409",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "GS건설",
          "market": "유가",
          "what": "정정신고(보고)",
          "amount_won": "597,585,597,931",
          "pct_of_sales": "4.86",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "대전 서구 도마동 85-19번지",
          "period": "-~-",
          "changes": "2. 계약내역 중 계약금액(원): 478,149,942,067 → 597,585,597,931 ; 2. 계약내역 중 매출액대비(%): 3.89 → 4.86 ; 9. 기타 투자판단과 관련한 중요사항: 1) 상기 2항의 계약금액은 총 7,969억원 중 당사분 60%에 해당하는 금액이며 VAT 별도임 3) 상기 5항의 계약기간은 공사착수일로부터  → 1) 상기 2항의 계약금액은 총 9,959.8억원 중 당사분 60%에 해당하는 금액이며 VAT 별도임 3) 상기 5항의 계약기간은 공사착수일로부",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111800268",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "지투파워",
          "market": "코스닥",
          "what": "[대구율하 스마트그린 국가시범산업단지]에너지저장장치(ESS)납품 및 설치",
          "amount_won": "4,293,000,000",
          "pct_of_sales": "7.75",
          "pct_check": "맞음",
          "counterparty": "브이젠 주식회사",
          "region": "국내",
          "period": "2025-10-27~2027-12-31",
          "changes": "5. 계약기간: 2025.10.27~2027.03.31 → 2025.10.27~2027.12.31 ; 6. 주요 계약조건 -대금지급 조건 등: 납품일정에 따른 대금지급 (계약금 18억, 중도금 18억, 잔금 6.9억) → 납품일정에 따른 대금  지급 기한 기재(중도금 및 잔금) -계약금(25.10.31지급) *금액:1,980,000,000원 -1차 중도금 *금액:",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900262",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "금호건설",
          "market": "유가",
          "what": "단일판매ㆍ공급계약 체결",
          "amount_won": "327,927,272,727",
          "pct_of_sales": "16.25",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "전남광주통합특별시 함평군 신광면 및 손불면 일원",
          "period": "2027-09-01~2031-04-12",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111800204",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "동원개발",
          "market": "코스닥",
          "what": "벡스코 제3전시장 건립사업",
          "amount_won": "35,073,000,000",
          "pct_of_sales": "9.05",
          "pct_check": "맞음",
          "counterparty": "부산광역시 건설본부",
          "region": "부산광역시 해운대구",
          "period": "2026-12-21~2031-02-04",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900157",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        }
      ],
      "dart_others": [
        {
          "company": "샘표",
          "market": "유가",
          "kind": "정정명령부과( 2026.10.30. 제출 주요사항보고서(회사합병 결정) )",
          "changes": "",
          "numbers": "",
          "body_from": "공시 화면",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111100028",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "샘표식품",
          "market": "유가",
          "kind": "정정신고서제출요구( 2026.11.02. 제출 증권신고서(합병) )",
          "changes": "",
          "numbers": "",
          "body_from": "공시 화면",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111100027",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "광진실업",
          "market": "코스닥",
          "kind": "[첨부추가]최대주주변경",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900906",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "광진실업",
          "market": "코스닥",
          "kind": "최대주주변경을수반하는주식담보제공계약해제ㆍ취소등",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900907",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "우리넷",
          "market": "코스닥",
          "kind": "[기재정정]소송등의제기ㆍ신청(일정금액이상의청구)",
          "changes": "3. 청구내용: 1. 피고들은 공동하여 원고에게 12,533,686,401원 및 이에 대하여 이 사건 소장부본 송달일까지는 연 5%의, 그 다음날부터 다 갚는  → 1. 피고들은 원고에게 12,533,686,401원 및 이에 대하여 이 사건 소장부본 송달일까지는 연 5%의, 그 다음날부터 다 갚는 날까지는  ; 9. 기타 투자판단에 참고할 사항: 1. 본 건은 2023.06.23 최초 소장 접수 당시 원고의 청구금액은 1,763,982,679원 중 당사 개별청구 금액은 455,038,81 → 1. 본 건은 2023.06.23 최초 소장 접수 당시 원고의 청구금액은 공동(연대)하여, 1,763,982,679원이였으며, 원고의 청구취지 ",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900902",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "키움증권",
          "market": "유가",
          "kind": "[기재정정]연결재무제표기준영업(잠정)실적(공정공시)",
          "changes": "1.연결실적내용 (26.3Q) (당기실적): - → - ; ①법인세비용차감전계속사업이익 (당해실적): ①392,569 → ①308,756 ; ②법인세비용차감전계속사업이익 (누적실적): ②1,843,743 → ②1,759,930 ; ③당기순이익 (당해실적): ③238,571 → ③177,807 ; ④당기순이익 (누적실적): ④1,396,537 → ④1,335,773 ; ⑤지배기업소유주지분순이익 (당해실적): ⑤238,615 → ⑤177,850 ; ⑥지배기업소유주지분순이익 (누적실적): ⑥1,395,050 → ⑥1,334,286 ; 1.연결실적내용 (26.3Q) (전기대비 증감율 (%)): - → - ; ①법인세비용차감전계속사업이익 (당해실적): ①-50.23 → ①-60.86 ; ②당기순이익 (당해실적): ②-64.95 → ②-73.87 ; ③지배기업소유주지분순이익(당해실적): ③-64.91 → ③-73.85 ; 1.연결실적내용 (26.3Q) (전년대비 증감율 (%)): - → -",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111800831",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "신테카바이오",
          "market": "코스닥",
          "kind": "[첨부정정]주요사항보고서(자기전환사채만기전취득결정)",
          "changes": "계약서 등 증빙서류: 1.신테카바이오_신청서 2.이사회의사록(20260914) 3.입금증 → 1.신테카바이오_신청서 2.이사회의사록(20260914) 3.입금증 4.잔고증명서",
          "numbers": "",
          "body_from": "공시 화면",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111000449",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "소프트센",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(유상증자결정)",
          "changes": "4.자금조달의 목적: 타법인 증권 취득자금(원)2,200,000,000 → 채무상환자금(원)2,200,000,000(상환액 : 4,800,000,000) ; 【제3자배정 근거, 목적 등】: 제3자배정 증자의 목적타법인 증권 취득자금 → 제3자배정 증자의 목적채무상환자금 ; 【제3자배정 조달자금  의 구체적 사용목적】: 2027.05.31 → 2.0 ; 자금용도: 증권 발행회사의사업내용(양수영업 주요내용) → 취득가격산정근거** ; 타법인 증권 취득자금: 미정 → 미정 ; 종목*: 만기일 → 이자율 ; 제11회차 전환사채(만기전 사채취득): 2027.05.31 → 2.0",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111000445",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "핑거",
          "market": "코스닥",
          "kind": "[기재정정]타법인주식및출자증권취득결정(종속회사의주요경영사항)",
          "changes": "2. 취득내역 - 취득주식수(주): 38,228,360 → 32,494,106 ; 2. 취득내역 - 취득금액(원): 27,162,161,611 → 23,087,837,369 ; 2. 취득내역 - 지배회사의 연결자산총액대비(%): 40.21 → 34.17 ; 3. 취득후 소유주식수 및 지분비율 - 소유주식수(주): 38,228,360 → 32,494,106 ; 3. 취득후 소유주식수 및 지분비율 - 지분비율(%): 100 → 85.00 ; 10. 기타 투자판단에 참고할 사항: 1. 신고일 이전 1년간 동 발행회사(S&G Holdings Limited)에 대한 취득 누계금액 : 해당사항없음 2. 본건 취득대금은 취득대상 → 1. 신고일 이전 1년간 동 발행회사(S&G Holdings Limited)에 대한 취득 누계금액 : 해당사항없음 2. 상기 '2. 취득내역' ",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900828",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "에이전트AI",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(전환사채권발행결정)",
          "changes": "5. 사채만기일: 2029년 11월 12일 → 2029년 12월 10일 ; 7. 원금상환방법: 본 사채의 원금에 대하여는 만기일인 2029년 11월 12일에 전자등록금액의 113.2251%를 일시 상환한다. 단, 상환기일이 은행 영업일이  → 본 사채의 원금에 대하여는 만기일인 2029년 12월 10일에 전자등록금액의 113.2251%를 일시 상환한다. 단, 상환기일이 은행 영업일이  ; 9. 전환에 관한 사항 - 전환청구기간: 시작일 : 2027년 11월 12일종료일 : 2029년 10월 12일 → 시작일 : 2027년 12월 10일종료일 : 2029년 11월 10일 ; 11. 청약일: 2026년 11월 12일 → 2026년 12월 10일 ; 12. 납입일: 2026년 11월 12일 → 2026년 12월 10일 ; 22. 기타 투자판단에 참고할 사항: [주1 정정 전] → [주1 정정 후] ; 【사채발행 대상 법인 또는 단체가 권리 행사로 주주가 되는 경우】: [주2 정정 전] → [주2 정정 후] ; 【미상환 주권 관련 사채권에 관한 사항】: [주3 정정 전] → [주3 정정 후]",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111000409",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "한울소재과학",
          "market": "코스닥",
          "kind": "소송등의제기ㆍ신청(일정금액이상의청구)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900818",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "큐에이드",
          "market": "코스닥",
          "kind": "주권매매거래정지기간변경 (개선기간 부여)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900814",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "자이글",
          "market": "코스닥",
          "kind": "주권매매거래정지기간변경 (개선기간 부여)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900810",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "모아라이프플러스",
          "market": "코스닥",
          "kind": "[기재정정]최대주주변경을수반하는주식담보제공계약체결",
          "changes": "1.담보제공자(최대주주)관련사항 -공시일현재: 소유주식수 : 1,508,590 지분율(%) :6.93 → 소유주식수 : 700,000 지분율(%) :3.21 ; 4.담보제공내역 누적담보제공 주식 총수(주): 1,508,590 → 700,000 ; [개변담보제공 계약에 관한 사항 ] 순번2.(주)상상인저축은행 -담보제공주식수(주): 386,456 → 0 ; [개변담보제공 계약에 관한 사항 ] 순번3.(주)상상인저축은행 -담보제공주식수(주): 922,134 → 500,000",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900796",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "엠텍비젼",
          "market": "기타",
          "kind": "주요사항보고서(유상증자결정)",
          "changes": "",
          "numbers": "종류 유상증자 · 목적: 운영(원) 1,500,032,385 · 신주 보통주(주) 305,817 · 1주당 액면가(원) 500 · 증자 전 보통주(주) 1,933,145 · 증자 방식 주주배정증자",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111000434",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "비나텍",
          "market": "코스닥",
          "kind": "[기재정정]타법인주식및출자증권취득결정",
          "changes": "[타법인 주식 및 출자증권 취득결정]-1.발행회사-대표이사: 최병문 → 최윤석 ; [상대방에 관한 사항]-1.인적사항-최대주주ㆍ대표이사ㆍ대표집행임원 현황 및 재무상황 등(상대방이 법인인 경우: 최병문 → 최윤석",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900786",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "대호특수강",
          "market": "코스닥",
          "kind": "주권매매거래정지 (주식의 병합, 분할 등 전자등록 변경, 말소)",
          "changes": "",
          "numbers": "",
          "body_from": "공시 화면",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900747",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "엠투엔",
          "market": "코스닥",
          "kind": "[기재정정]최대주주변경을수반하는주식담보제공계약체결",
          "changes": "5. 담보권 설정계약 체결일(당해 건): 2026-11-06 → 2026-11-11 ; 개별 담보제공 계약에 관한 사항] 순번 5. NH투자증권 담보제공기간 시작일 종료일 계약체결일: 2026-05-15 2026-11-11 2026-05-15 → 2026-11-11 2026-12-11 2026-11-11",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900638",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "KB스타리츠",
          "market": "유가",
          "kind": "부동산투자회사자금차입",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111800679",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "한국전자인증",
          "market": "코스닥",
          "kind": "주요사항보고서(자기주식취득신탁계약해지결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111000380",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "광동제약",
          "market": "유가",
          "kind": "연결재무제표기준영업(잠정)실적(공정공시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111800697",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "KB금융",
          "market": "유가",
          "kind": "[기재정정]연결재무제표기준영업(잠정)실적(공정공시)(자회사의 주요경영사항)",
          "changes": "1.연결실적내용 (당기실적 2026.7.1~2026.9.30): - → - ; ①법인세비용차감전계속사업이익(당해실적): ①1,549,031 → ①1,732,626 ; ②법인세비용차감전계속사업이익(누계실적): ②4,575,832 → ②4,759,427 ; ③당기순이익(당해실적): ③1,340,604 → ③1,524,199 ; ④당기순이익(누계실적): ④3,564,846 → ④3,748,441 ; ⑤지배기업소유주지분순이익(당해실적): ⑤1,350,858 → ⑤1,534,453 ; ⑥지배기업소유주지분순이익(누계실적): ⑥3,576,260 → ⑥3,759,855 ; 1.연결실적내용 (전기대비 증감율(%)): - → - ; ①법인세비용차감전계속사업이익(당해실적): ①2.65 → ①14.81 ; ②당기순이익(당해실적): ②19.27 → ②35.60 ; ③지배기업소유주지분순이익(당해실적): ③20.14 → ③36.47 ; 1.연결실적내용 (전년동기대비 증감율(%)): - → -",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111800696",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "LF",
          "market": "유가",
          "kind": "타법인주식및출자증권처분결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111800716",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "삼성FN리츠",
          "market": "유가",
          "kind": "유상증자또는주식관련사채등의발행결과(자율공시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111800673",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "파크시스템스",
          "market": "코스닥",
          "kind": "주요사항보고서(자기주식처분결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111000357",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "삼양컴텍",
          "market": "코스닥",
          "kind": "현금ㆍ현물배당결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900663",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "LF",
          "market": "유가",
          "kind": "감자결정(자율공시)(종속회사의주요경영사항)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111800695",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "한울앤제주",
          "market": "코스닥",
          "kind": "유상증자또는주식관련사채등의청약결과(자율공시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900654",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "삼보산업",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(유상증자결정)",
          "changes": "9. 납입일: 2026년 11월 19일 → 2026년 12월 15일 ; 12. 신주의 상장 예정일: 2026년 12월 03일 → 2026년 12월 30일",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111000346",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "케이쓰리아이",
          "market": "코스닥",
          "kind": "[기재정정]최대주주변경을수반하는주식양수도계약체결",
          "changes": "2. 계약 내역 -양수도 대금의 지급일정 및 지급조건 등에 관한 사항: 4. 매매대금 지급일정 1) 계약금 (10%): 2,100,000,000원(2026년 09월 23일) 2) 잔금지급기일 (90%) : 18,90 → 4. 매매대금 지급일정 1) 1차 계약금 (10%): 2,100,000,000원(2026년 09월 23일) 2) 2차 계약금(5%): 1,050 ; 3. 변경예정 최대주주 -변경 예정일자: 2026-11-26 → 2026-12-15 ; 5. 기타 투자판단에 참고할 사항: 1. 상기 양수도 대상 주식수 2,916,667주 및 지분율 39.96%~ → 1. 상기 양수도 대상 주식수 2,916,667주 및 지분율 38.96%~",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900649",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "하이퍼코퍼레이션",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(유상증자결정)",
          "changes": "9. 납입일: 2026년 11월 11일 → 2026년 11월 30일 ; 12. 신주의 상장예정일: 2026년 12월 02일 → 2026년 12월 21일 ; 20. 기타투자판단에 참고할 사항 2) 주금의 납입일 맟 납입처  (1) 납입일: 2026년 11월 11일 → 2026년 11월 30일",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111000328",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "위메이드맥스",
          "market": "코스닥",
          "kind": "주식소각결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900616",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "위메이드맥스",
          "market": "코스닥",
          "kind": "연결재무제표기준영업(잠정)실적(공정공시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900593",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "실리콘투",
          "market": "코스닥",
          "kind": "연결재무제표기준영업(잠정)실적(공정공시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900551",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "가비아",
          "market": "코스닥",
          "kind": "연결재무제표기준영업(잠정)실적(공정공시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900511",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "가비아",
          "market": "코스닥",
          "kind": "영업(잠정)실적(공정공시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111900509",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "오리온",
          "market": "유가",
          "kind": "연결재무제표기준영업(잠정)실적(공정공시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111800588",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "KTis",
          "market": "유가",
          "kind": "영업(잠정)실적(공정공시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111800568",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "한화손해보험",
          "market": "유가",
          "kind": "영업(잠정)실적(공정공시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111800554",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "KB금융",
          "market": "유가",
          "kind": "[기재정정]연결재무제표기준영업(잠정)실적(공정공시)",
          "changes": "1.연결실적내용 (당기실적 2026.7.1~2026.9.30): - → - ; ①법인세비용차감전계속사업이익(당해실적): ①2,349,191 → ①2,200,608 ; ②법인세비용차감전계속사업이익(누계실적): ②7,713,089 → ②7,564,506 ; ③당기순이익(당해실적): ③1,913,172 → ③1,764,589 ; ④당기순이익(누계실적): ④5,840,149 → ④5,691,566 ; ⑤지배기업소유주지분순이익(당해실적): ⑤1,907,460 → ⑤1,758,877 ; ⑥지배기업소유주지분순이익(누계실적): ⑥5,792,050 → ⑥5,643,467 ; 1. 연결실적내용 (전기대비 증감율(%)): - → - ; ①법인세비용차감전계속사업이익(당해실적): ①-14.04 → ①-19.47 ; ②당기순이익(당해실적): ②-4.84 → ②-12.23 ; ③지배기업소유주지분순이익(당해실적): ③-4.25 → ③-11.71 ; 1.연결실적내용 (전년동기대비 증감율(%)): - → -",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261111800559",
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
          "val": 64,
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        "summarized_today": {
          "val": 64,
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        "bad_numbers_today": {
          "val": 4,
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        "fed_speeches_total": {
          "val": 20,
          "source": "v2_secretary/결과/연준연설/"
        }
      },
      "items": [
        {
          "source_name": "한국은행 보도자료 RSS",
          "kind": "한국은행 보도자료",
          "writer": "한국은행",
          "title": "2026년 10월 이후 국제금융&middot;외환시장 동향",
          "easy1_title": "AI 투자에 대한 걱정 때문에 세계 금융시장이 움츠러들었어요",
          "easy1_desc": "국제금융시장에서는 AI 투자가 계속될 수 있을지 의심하는 목소리가 나오면서 위험한 투자를 피하려는 현상이 이어지고 있는데요. 이 때문에 주요 나라들의 국채 금리는 내려갔고, 주식 시장은 AI와 얼마나 관련이 있느냐에 따라 나라별로 다른 모습을 보였습니다. 미 달러화는 강세를 보였는데, 쉽게 말하면 투자자들이 안전한 자산으로 몰리면서 시장 분위기가 다소 가라앉은 셈이에요.",
          "easy2_title": "국내에서는 달러 환율이 내려갔고 외국인 자금은 계속 빠져나가고 있어요",
          "easy2_desc": "국내 외환시장 상황을 살펴보면 원/달러 환율은 하락하는 모습을 보였는데요. 외국인들이 국내 증권에 투자한 자금은 계속해서 순유출되고 있는 상황이에요. 다만 국내 은행들이 밖에서 돈을 빌려오는 여건은 대체로 괜찮은 흐름을 보이고 있다고 한국은행은 밝혔습니다.",
          "topic": "2026년 10월 이후 국제금융 및 외환시장의 주요 흐름과 변화를 정리한 내용입니다.",
          "points": [
            "국제 금융시장 동향: 주요 선진국의 10년물 국채 금리는 전반적으로 하락세를 보였습니다. 주식 시장의 경우 미국과 일본은 AI 투자와 관련된 규제나 둔화 우려로 인해 하락했는데요. 반면 영국이나 독일 같은 유럽 시장은 기업 실적이 좋게 나오면서 상승하는 등 국가별로 차별화된 양상을 보였다고 한국은행은 분석했습니다.",
            "원화 환율 및 외환 거래: 10월 중 원/달러 환율은 수출하는 기업들이 달러를 많이 팔면서 하락하는 모습을 보였습니다. 하지만 미 달러화 지수가 오르고 AI로 돈을 벌 수 있을지 걱정하는 시선들이 환율이 더 떨어지는 것을 막았는데요. 은행 간 외환 거래 규모는 전월보다 1.3억 달러 늘어난 554.2억 달러로 집계되었습니다.",
            "외국인 증권투자자금: 외국인 투자자들의 자금 흐름을 보면 주식과 채권이 서로 다른 방향으로 움직였습니다. 주식 자금은 AI 투자에 대한 걱정으로 투자 심리가 얼어붙으면서 순유출이 더 커졌는데요. 반면 채권 자금은 세계국채지수(WGBI)를 따라 들어오는 자금과 차익거래 유인이 생기면서 순유입으로 돌아섰다고 밝혔습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "10638",
          "link": "https://www.bok.or.kr/portal/bbs/B0000502/view.do?nttId=11066524&menuNo=200690",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "한국은행 보도자료 RSS",
          "kind": "한국은행 보도자료",
          "writer": "한국은행",
          "title": "[보도자료] 한국은행, 2026년 지급결제제도 컨퍼런스 개최",
          "easy1_title": "디지털 금융 시대에 맞춰 결제 시스템을 더 안전하고 빠르게 바꾸려고 합니다",
          "easy1_desc": "한국은행이 2026년 지급결제제도 컨퍼런스를 열고 디지털 금융 환경에서 결제 인프라를 어떻게 개선할지 논의했는데요. 자산토큰화나 국가 간 지급 서비스처럼 빠르게 변하는 환경에 맞춰 중앙은행의 결제 시스템이 어떤 역할을 해야 할지 고민하는 자리였어요. 쉽게 말하면, 기술이 바뀌어도 결제는 안전하고 확실하게 이루어지도록 시스템을 고도화하겠다는 계획입니다.",
          "easy2_title": "해외의 성공적인 결제 혁신 사례를 통해 우리도 배울 점을 찾았습니다",
          "easy2_desc": "이번 행사에서는 영란은행의 자산토큰화 결제, 넥서스 프로젝트를 통한 국가 간 지급 개선, 브라질의 신속지급시스템인 픽스(Pix) 사례가 공유됐는데요. 각국이 어떤 기술을 쓰고 어떤 규제를 적용하는지 살펴보면서 우리 금융 시스템에 적용할 점을 찾으려는 거예요. 다른 나라의 경험을 참고해 우리 결제 환경을 더 효율적으로 만들겠다는 의도로 보입니다.",
          "topic": "한국은행이 디지털 금융 시대의 지급결제 인프라 혁신과 정책 과제를 주제로 2026년 지급결제제도 컨퍼런스를 개최했습니다.",
          "points": [
            "자산토큰화와 결제 혁신: 영란은행은 토큰화된 자산 거래를 효율적으로 처리하기 위해 중앙은행 결제시스템과 외부 플랫폼을 연계하는 동기화 결제 방식을 추진하고 있는데요. 2028년 실사용을 목표로 시범 운영 중이며, 이를 통해 결제리스크를 제거하는 기술을 개발하고 있다는 점이 핵심이에요.",
            "국가 간 지급 서비스 개선: 넥서스 프로젝트는 아세안 국가들이 각자의 신속지급시스템을 공통 플랫폼에 연결해 국가 간 송금의 속도와 효율을 높이려는 시도인데요. 2027년 가동을 목표로 수수료 절감과 처리 속도 개선을 추진하고 있다는 게 특징입니다.",
            "브라질의 신속지급시스템 픽스(Pix): 브라질의 픽스는 2020년 도입 이후 브라질 성인의 95% 이상이 이용할 정도로 대표적인 지급수단이 됐는데요. 민간의 참여를 유도해 규모의 경제를 달성하고, 간편한 결제 방식과 무료 정책을 통해 성공적으로 안착했다는 평가를 받습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "긴 원문 — 앞 30000자만 읽음(전체 30573자)",
          "body_chars": "30573",
          "link": "https://www.bok.or.kr/portal/bbs/B0000502/view.do?nttId=11066453&menuNo=200690",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "한국은행 보도자료 RSS",
          "kind": "한국은행 보도자료",
          "writer": "한국은행",
          "title": "[보도자료] 치앙마이 이니셔티브 다자화(CMIM) 개정 협정문 발효",
          "easy1_title": "갑작스러운 위기 때 돈을 빌려주는 제도를 더 쉽게 고쳤어요",
          "easy1_desc": "ASEAN+3 회원국들이 함께 만든 금융 안전망인 치앙마이 이니셔티브 다자화(CMIM)의 규칙을 이번에 새로 바꿨는데요. 핵심은 자연재해나 팬데믹처럼 예상치 못한 충격이 왔을 때 빠르게 자금을 지원하는 신속금융프로그램(RFF)을 새로 넣은 겁니다. 복잡한 조건 없이도 돈을 빌릴 수 있게 해서 위기 대응 능력을 키우겠다는 계획이에요.",
          "easy2_title": "달러가 아닌 다른 돈으로도 지원받을 수 있게 됐어요",
          "easy2_desc": "이번 개정으로 돈을 빌릴 때 선택할 수 있는 통화의 폭도 넓어졌는데요. 한국과 중국, 일본 같은 공여국은 총 공여 한도의 50%까지 달러가 아닌 엔화나 위안화 같은 자유교환성 통화로도 빌려줄 수 있게 된 겁니다. 위기 상황에서 달러가 부족해도 다른 통화로 숨통을 틔울 수 있다는 장점이 있거든요.",
          "topic": "치앙마이 이니셔티브 다자화(CMIM)의 개정 협정문이 발효되면서 위기 시 단기 유동성 지원 기능이 강화되었습니다.",
          "points": [
            "신속금융프로그램(RFF) 신설: 자연재해나 팬데믹 같은 일시적인 외부 충격이 발생했을 때, 사전이나 사후에 까다로운 조건을 따지지 않고 소규모 단기 자금을 지원하는 제도를 새로 만들었습니다. 위기가 닥쳤을 때 신속하게 대응하기 위한 장치라는 말이에요.",
            "통화 선택 범위 확대: 기존에는 주로 달러화 위주로 지원이 이루어졌지만, 이제는 엔화나 위안화 같은 비달러화 자유교환성 통화로도 지원이 가능해졌습니다. 한국과 중국, 일본이 공여 한도의 절반까지는 비달러화로 빌려줄 수 있게 된 셈이에요.",
            "협정문 발효 과정: 지난 2025년 5월 회의에서 승인된 개정안이 13개 회원국 27개 기관의 서명을 거쳐 2026년 11월 11일부터 공식적으로 효력을 갖게 되었습니다. 일부 국가의 내부 승인 절차가 조금 늦어지면서 발효 시점이 조정된 것이라는 설명이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "2025",
          "check_flags": "",
          "body_chars": "2706",
          "link": "https://www.bok.or.kr/portal/bbs/B0000502/view.do?nttId=11066443&menuNo=200690",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "이태원 참사 4주기, 특조위 조사권한 적극 활용해 진상규명 실효성 높여야",
          "easy1_title": "이태원 참사 진상규명을 위해 특조위 권한을 더 적극적으로 써야 합니다",
          "easy1_desc": "이태원 참사가 일어난 지 4년이 지났는데도 진상규명이나 피해자 지원 같은 후속 조치는 여전히 진행 중이라고 해요. 국회입법조사처는 특별조사위원회(특조위)가 대통령기록물이나 경찰 수사기록 같은 핵심 자료를 확보하는 데 어려움을 겪고 있다고 봤는데요. 남은 조사 기간 동안 자료제출 요구와 동행명령 같은 법률상 권한을 더 적극적으로 활용해야 한다는 겁니다.",
          "easy2_title": "특조위 인력과 예산을 채우고 피해자 지원 기간도 다시 살펴봐야 합니다",
          "easy2_desc": "조사 기간은 2027년 9월 16일까지 늘어났지만, 정작 특조위 정원 105명 중 실제 일하는 사람은 70명뿐이라 인력이 부족한 상황이에요. 예산도 2027년도 정부 예산안에 반영되지 않았고 사업비 집행률도 낮은 편이거든요. 피해자 의료지원금도 기간이 정해져 있는데, 장기적인 후유증을 고려해서 지원 기간을 늘릴지 검토해야 한다는 게 보고서의 의견이에요.",
          "topic": "국회입법조사처는 이태원 참사 4주기를 맞아 진상규명과 피해자 지원을 위한 후속 조치의 현주소를 분석하고 개선 방안을 제시했습니다.",
          "points": [
            "특조위 조사 실효성 강화: 특조위가 중간조사에서 보고 체계나 현장 대응 문제를 제기했지만, 책임소재를 밝히려면 추가 조사가 필요하다고 봤어요. 그래서 남은 기간 동안 청문회를 더 열고 법률상 권한을 적절히 써서 핵심 자료를 확보해야 한다는 겁니다.",
            "피해자 지원 제도 보완: 현재 의료나 심리 지원이 시행되고는 있지만 배상 절차가 구체적이지 않다는 단점이 있어요. 피해자들의 장기 후유증을 생각하면 의료지원금 지급 기간을 늘리는 방안을 검토해야 한다고 밝혔습니다.",
            "유가족 요구사항 이행 점검: 유가족 건의사항 47건 중 절반이 넘는 27건은 완료됐지만, 진상규명이나 특별법 개정 분야는 아직 추진 중인 과제가 많거든요. 보고서는 앞으로 유가족 요구가 실제로 잘 이행되는지 기관별로 계속 점검해야 한다고 제언했어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "2232",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5303956",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "「기후보험의 재정적 이슈와 시사점」 발간",
          "easy1_title": "기후재난이 잦아지면서 기후보험의 역할이 중요해졌어요",
          "easy1_desc": "최근 기후재난이 빈번해지면서 기후보험의 보장 범위를 넓히려는 움직임이 있는데요, 국회예산정책처가 기후보험의 운영 사례와 재정적 문제를 짚어보는 보고서를 냈거든요. 이게 무슨 말이냐면, 보험이 기후 위기에 대응하는 중요한 수단이 되었지만 그만큼 재정적으로 지속할 수 있을지 고민이 필요하다는 뜻이에요. 쉽게 말하면, 기후보험이 제 역할을 하려면 돈을 어떻게 관리할지가 핵심이라는 겁니다.",
          "easy2_title": "보험이 계속 유지되려면 재정 관리와 취약계층 지원이 필요해요",
          "easy2_desc": "해외 사례를 살펴보니 보험금을 지급할 돈이 부족해지거나 대규모로 빚을 내는 등 재정적인 문제가 나타나고 있다고 해요. 그래서 보고서는 보험 제도와 재해 예방을 서로 연결하고, 재보험을 활용하거나 위험 수준에 맞춰 보험료를 정해야 한다고 밝혔는데요. 취약계층이 보험에 더 많이 가입할 수 있게 돕는 것도 중요한 과제라는 겁니다.",
          "topic": "국회예산정책처가 기후보험의 국내외 운영 현황을 분석하고 재정적 지속가능성과 취약계층 지원을 위한 방안을 제시했어요.",
          "points": [
            "국내 기후보험 운영 현황: 국회는 2026년 8월 26일에 기후위기 적응 및 회복력 강화에 관한 법률을 의결했는데요. 현재 국내에서는 풍수해보험과 농어업재해보험이 재산과 농작물 피해를 보장하고 있고, 경기도와 제주도에서는 건강이나 소득 피해를 보장하는 기후보험을 운영 중이라는 겁니다.",
            "해외 사례의 재정적 이슈: 미국이나 프랑스, 스위스 같은 나라들도 기후보험을 운영하고 있는데, 운영 과정에서 재정적인 어려움을 겪기도 한다고 해요. 보험금을 지급할 준비금이 다 떨어지거나, 보험금을 마련하려고 큰돈을 빌려야 하는 상황이 생기는 건데요. 이게 보험 제도를 지속하는 데 걸림돌이 될 수 있다는 말이에요.",
            "재정 지속가능성 확보 방안: 보고서는 보험 제도를 재해 예방과 연결하고 재보험을 활용하는 등 재정 안정성을 높이는 방안을 제시했는데요. 위험 수준에 따라 보험료를 적정하게 산정하고, 기후 위기에 취약한 계층이 보험 혜택을 더 많이 받을 수 있도록 지원해야 한다고 강조했어요. 결국 재정적 지속가능성과 사회적 지원이라는 두 마리 토끼를 잡아야 한다는 겁니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "8",
          "check_flags": "",
          "body_chars": "793",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5303952",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "물산업 지원체계 통합 개편, 기업 부담 줄이고 인증 독립성&middot;산업계 참여 보장해야",
          "easy1_title": "물산업 지원 기관을 합칠 때는 기업이 겪을 불편부터 먼저 따져봐야 합니다",
          "easy1_desc": "정부가 한국물기술인증원과 한국물산업협의회를 합쳐서 한국물산업진흥원을 만들겠다는 계획을 세웠는데요. 국회입법조사처는 무작정 합치기보다는 기존 기관들의 기능을 어떻게 조정하고 연결해야 기업들이 서류를 중복으로 내거나 지원을 못 받는 일이 줄어들지 먼저 비교해 봐야 한다고 봤습니다. 쉽게 말하면, 통합 자체가 목적이 아니라 기업의 부담을 실제로 얼마나 덜어줄 수 있는지가 핵심이라는 말이에요.",
          "easy2_title": "제품 개발을 도와준 곳이 인증까지 하면 공정성에 문제가 생길 수 있어요",
          "easy2_desc": "제품 개발을 지원한 부서가 나중에 그 제품의 인증 여부까지 결정하게 되면, 성과를 높이려는 욕심 때문에 심사가 제대로 안 될 수도 있다는 우려가 있는데요. 그래서 국회입법조사처는 제품을 만든 사람과 인증을 결정하는 사람을 확실히 떼어놓아야 한다고 강조했습니다. 인증의 객관성을 지키면서도 기존에 심사 중이던 건들이 끊기지 않게 하는 게 중요하다는 겁니다.",
          "topic": "물산업 지원체계를 효율적으로 개편하기 위해 고려해야 할 쟁점과 입법 과제를 정리한 내용이에요.",
          "points": [
            "인증의 독립성 확보: 시험과 인증을 한곳에서 하면 중복 제출은 줄어들지만, 시험 결과가 인증 심사에 영향을 줄 위험이 있습니다. 그래서 제품 개발을 지원한 부서와는 독립적으로 인증 여부를 결정할 수 있는 구조를 만들어야 한다고 봤습니다.",
            "협의회 통합과 참여권: 한국물산업협의회는 기업들이 해외 시장 정보를 나누고 협력 상대를 찾는 중요한 역할을 해왔는데요. 만약 진흥원으로 통합하게 된다면, 회원들이 공동 사업의 방향을 정하는 권한을 어떻게 보장할지가 중요한 과제라고 밝혔습니다.",
            "해외 협력의 연속성: 사업을 이관하는 과정에서 담당 인력이나 재원이 제대로 옮겨가지 않으면, 해외 현지에서 진행하던 실증이나 상담이 끊길 수 있습니다. 그래서 사업을 넘길 때 인력과 재원을 확실히 챙겨서 해외 협력이 계속 이어지게 해야 한다고 강조했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "2627",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5303947",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "국회입법조사처&middot;한국정당학회&middot;한국선거학회, &lsquo;국회의원 선거제도와 정당공천&rsquo; 주제 공동세미나 개최",
          "easy1_title": "준연동형 비례대표제 때문에 생긴 위성정당 문제를 이제는 고쳐야 합니다",
          "easy1_desc": "2020년부터 준연동형 비례대표제를 도입했는데, 실제로는 위성정당이 계속 나타나면서 제도를 만든 원래 취지가 사라졌거든요. 그래서 다음 선거에서는 이 제도를 그대로 둘지, 아니면 예전처럼 병립형으로 돌아갈지 고민이 많다는 겁니다. 쉽게 말하면, 제도가 현실과 맞지 않아서 다시 손을 봐야 하는 상황이라는 말이에요.",
          "easy2_title": "선거제도 개편은 현실적인 틀 안에서 논의를 시작해야 합니다",
          "easy2_desc": "이관후 국회입법조사처장은 선거가 1년 반밖에 남지 않은 만큼, 이상적인 이론만 따지기보다 실현 가능한 대안을 찾아야 한다고 밝혔는데요. 비례대표 의석을 늘리고 권역별로 나누는 등 구체적인 조합을 검토해야 한다는 겁니다. 서두르다 보면 나중에 시간에 쫓겨 최악의 선택을 할 수도 있다는 단점이 있는데, 미리 합의를 준비하면 더 나은 결과를 낼 수 있다는 장점도 있거든요.",
          "topic": "제23대 국회의원선거를 앞두고 선거제도와 정당공천의 개혁 방안을 모색하기 위한 공동세미나가 개최됩니다.",
          "points": [
            "선거제도 개편의 반성: 이관후 처장은 과거 선거법 개정 과정에서 현실적인 어려움보다는 제도에 대한 낙관이 지나치게 컸다고 지적했는데요. 전문가들이 이론적으로 이상적인 제도만 추구하느라 정치행위자들의 실제 행동을 세심하게 살피지 못했다는 겁니다. 쉽게 말하면, 현실 감각이 부족한 채로 제도만 바꾸면 모든 게 해결될 거라 믿었던 셈이에요.",
            "권역별 비례대표제 도입 제안: 이관후 처장은 소선거구제와 비례대표제를 섞는 병립형 조합에 권역별 비례대표제를 더하는 방안을 구체적으로 제안했는데요. 비례대표 의석을 50석까지 늘리고, 수도권과 비수도권의 배분을 4대 6 정도로 조정하자는 겁니다. 이렇게 하면 지역주의를 완화하고 다양성을 확보할 수 있을 것으로 보입니다.",
            "정당공천의 공정성 강화: 선거제도뿐만 아니라 정당의 후보자 공천 절차와 기준을 정비하는 일도 중요하다고 밝혔는데요. 황남주 교수가 정치인들을 대상으로 공천 과정에 대한 인식을 조사하고, 이를 6가지 절차적 공정성 기준에 따라 분석한 결과를 발표할 예정입니다. 공천의 투명성을 높여야 선거 때마다 반복되는 논란을 줄일 수 있다는 겁니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 이렇게 하면 지역주의를 완화하고 다양성을 확보할 수 있을 것으로 보입니다.",
          "body_chars": "6189",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5303941",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "국제통화기금(IMF)과 2026년 연례협의 실시",
          "easy1_title": "국회예산정책처가 국제통화기금과 만나 한국 경제를 점검했어요",
          "easy1_desc": "국회예산정책처가 국제통화기금(IMF) 연례협의단과 만나 한국의 경제 상황을 전반적으로 훑어보는 자리를 가졌는데요. 이 협의는 회원국의 거시경제와 외환, 금융 상황을 살피기 위해 매년 한 번씩 열리는 정기적인 행사라는 말이에요. 이번에는 한국의 인공지능(AI) 지원 정책과 재정 운용 방향을 두고 양 기관이 깊이 있는 대화를 나눴다고 합니다.",
          "easy2_title": "인공지능 지원과 재정 건전성을 높이는 방안을 함께 고민했어요",
          "easy2_desc": "회의에서는 정부가 연구개발에만 너무 집중하고 기업의 AI 도입 지원은 부족하다는 점을 짚어보고, 이를 어떻게 개선할지 논의했는데요. 재정 분야에서는 2027년도 예산안과 재정준칙 도입 같은 굵직한 현안을 다뤘다는 겁니다. 특히 미래대응기금을 어떻게 운영해야 재정 위험을 줄일 수 있을지, 국회의 심의가 왜 필요한지를 두고 의견을 나눴다는 게 핵심이에요.",
          "topic": "국회예산정책처와 국제통화기금(IMF)이 한국의 경제 현안과 재정 운용 방향을 논의한 내용이에요.",
          "points": [
            "AI 지원 정책 개선: 정부의 지원이 연구개발에만 쏠려 있고 기업들이 AI를 실제로 도입하고 확산하는 데는 힘이 부족하다는 분석을 공유했는데요. 지원의 효과를 높이고 성과를 어떻게 관리할지 개선 방안을 함께 고민했다는 겁니다.",
            "재정 운용과 미래대응기금: 2027년도 예산안과 중기 국가재정운용계획을 살피면서 재정준칙 도입과 재정건전성 확보 방안을 논의했는데요. 특히 미래대응기금의 투자 기능과 초과세수를 어떻게 다룰지, 국회의 사전 심의가 왜 필요한지 의견을 주고받았다는 말이에요.",
            "재정 위험 완화 강조: 회의를 마무리하며 코린 들레샤 IMF 한국 미션단장은 미래대응기금의 운영 기준을 명확히 세워야 한다고 강조했는데요. 그래야 재정 위험을 줄일 수 있다는 판단이며, 앞으로도 주요 경제 현안에 대해 계속 소통하기를 기대했다고 밝혔습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "825",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5300272",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "남인순 국회부의장, 노인 살해&middot;상해치사범의 노인복지시설 취업 막는 &lsquo;노인복지법 개정안&rsquo; 대표발의",
          "easy1_title": "노인을 해친 범죄자가 요양시설에 취업하는 일을 막으려 합니다",
          "easy1_desc": "지난해 80대 어르신을 숨지게 한 요양보호사가 상해치사죄로 징역 4년을 받았는데도, 현행법상 취업 제한 대상이 아니라서 다시 일할 수 있는 문제가 있었거든요. 이게 무슨 말이냐면, 노인을 폭행한 사람은 취업이 안 되는데 정작 더 큰 죄를 지은 사람은 법망을 빠져나가는 입법 공백이 있다는 겁니다. 그래서 남인순 의원이 이런 중대범죄자를 노인복지시설에서 배제하는 법안을 냈습니다.",
          "easy2_title": "노인학대관련범죄의 범위를 넓혀서 보호 체계를 촘촘히 하겠다는 겁니다",
          "easy2_desc": "지금까지는 살인이나 특수상해 같은 중대범죄가 노인학대관련범죄에 포함되지 않아서 취업 제한을 걸 수 없었는데요. 이번 개정안을 통해 살인죄와 상해치사죄, 인신매매 등 노인의 생명을 위협하는 범죄들을 취업 제한 대상에 새로 넣기로 했습니다. 이렇게 하면 돌봄 현장에서 위험 인물을 걸러낼 수 있다는 장점이 있는데, 대신 돌봄 인력의 자격 검증 기준이 더 까다로워지는 셈이에요.",
          "topic": "남인순 의원이 노인 관련 중대범죄자의 노인복지시설 취업을 제한하는 노인복지법 개정안을 대표발의했습니다.",
          "points": [
            "입법 공백 확인: 현행법은 노인학대관련범죄를 저지른 사람의 취업을 최대 10년까지 막고 있지만, 살인이나 상해치사 같은 중대범죄는 이 범위에 빠져 있었습니다. 뭔 소리냐면, 노인의 생명을 해친 사람이 다시 돌봄 현장으로 돌아올 수 있는 구멍이 있었다는 말이에요.",
            "개정안의 주요 내용: 이번 개정안은 살인죄와 특수상해죄, 폭행치사상죄, 유기등 치사상죄를 비롯해 인신매매 관련 범죄까지 노인학대관련범죄의 범위에 추가했습니다. 어르신의 안전을 직접적으로 위협하는 범죄 전력자를 돌봄 현장에서 원천 차단하겠다는 계획이에요.",
            "입법의 기대 효과: 남인순 의원은 초고령사회로 돌봄 수요가 늘어나는 만큼, 이번 개정을 통해 어르신과 가족이 안심할 수 있는 보호체계를 만들겠다고 밝혔습니다. 총 11명의 의원이 공동발의에 참여해 힘을 보탰다는 점도 눈에 띕니다."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "point1 근거 원문에 없음",
          "body_chars": "1354",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5300266",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "법사위 법안1소위, 소관 고유법안 심사 및 의결",
          "easy1_title": "빚 갚을 때 거짓말하면 빚 탕감 안 해주고 벌금도 물립니다",
          "easy1_desc": "채무자 회생 및 파산에 관한 법률 개정안을 살펴봤더니, 파산할 때 설명해야 할 의무를 어기면 빚을 탕감해 주는 면책을 안 해 주기로 했거든요. 게다가 설명 의무를 지키지 않은 사람에게는 1천만원 이하의 과태료를 물리겠다는 겁니다. 다만, 거짓으로 설명한 사람은 지금처럼 형사처벌을 받게 되는데요. 쉽게 말하면, 파산 과정에서 정직하지 않게 행동하면 더 엄격한 책임을 묻겠다는 말이에요.",
          "easy2_title": "수사 권한을 가진 사람들을 늘리고 수용자 돈 관리도 꼼꼼히 합니다",
          "easy2_desc": "사법경찰관리의 직무를 수행할 자와 그 직무범위에 관한 법률 개정안을 통해 국민건강보험공단 임직원이나 어선원안전감독관 등에게 사법경찰권을 새로 주기로 했는데요. 수사 범위도 관세 범죄와 관련된 사기나 횡령 등으로 넓혔다는 겁니다. 또한 수용자의 보관금(영치금)이 원래 목적과 다르게 쓰이지 않도록 관리 기준을 법으로 정하겠다는 계획인데요. 수사 인력은 늘리고 수용자 돈은 더 철저히 관리하겠다는 뜻입니다.",
          "topic": "국회 법제사법위원회 법안심사제1소위원회가 채무자 회생법과 사법경찰직무법 개정안을 의결하고 형의 집행법 개정안을 심사했습니다.",
          "points": [
            "채무자 회생법 개정: 파산 절차에서 설명 의무를 위반하면 면책을 불허가하고 1천만원 이하의 과태료를 부과하는 내용을 담았습니다. 거짓 설명을 한 경우에는 기존처럼 형사처벌을 유지한다는 점이 특징이에요. 정직한 파산 절차를 유도하려는 의도로 보입니다.",
            "사법경찰권 확대: 국민건강보험공단 임직원과 어선원안전감독관 등에게 사법경찰권을 부여하고 수사 범위를 넓혔습니다. 세관이나 과학기술정보통신부 등의 특별사법경찰관리가 다룰 수 있는 범죄 유형도 추가했는데요. 수사 현장의 전문성을 높이려는 조치로 보입니다.",
            "수용자 보관금 관리 강화: 수용자의 보관금(영치금)이 원래 목적과 다르게 쓰이는 것을 막기 위해 법적 근거를 마련하겠다는 계획입니다. 보관금 한도를 정하고 정당한 목적 외의 사용이나 외부 송금을 제한하는 내용인데요. 다음 소위에서 대안을 계속 논의하기로 했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "1155",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5300264",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "내년 시행 앞둔 지역필수의료법, 현재의 공공보건의료지원단 체제로는 안정적 지원 어려워",
          "easy1_title": "내년 지역필수의료법 시행인데 지금 지원 체계로는 부족합니다",
          "easy1_desc": "2027년 3월부터 지역필수의료법이 시행되면 각 시·도가 직접 의료 계획을 세워야 하는데요. 지금까지 지역 보건의료를 돕던 공공보건의료지원단이 이 역할을 맡아야 하는데, 인력과 재정이 불안정해서 제대로 지원하기 어렵다는 겁니다. 쉽게 말하면, 새로운 법에 맞춰 지역 의료를 챙겨야 하는데 정작 돕는 조직의 체력은 약한 상태라는 말이에요.",
          "easy2_title": "새로 생길 센터와 기존 조직이 겹치지 않게 정리해야 합니다",
          "easy2_desc": "앞으로 필수의료지원센터가 새로 들어올 텐데, 기존에 있던 공공보건의료지원단과 역할이 겹치면 효율이 떨어질 수 있거든요. 그래서 기존 조직을 우선 활용하거나, 따로 설치하더라도 두 조직이 어떻게 협력할지 명확히 정해야 한다는 겁니다. 중복을 줄여서 정책 지원의 효율을 높이겠다는 계획이에요.",
          "topic": "지역필수의료법 시행에 대비해 공공보건의료지원단의 역할을 재정립하고 운영 기반을 강화해야 한다는 내용입니다.",
          "points": [
            "공공보건의료지원단의 한계: 현재 16개 시·도에서 운영 중인 지원단은 서울을 뺀 15곳이 비정규직 위주로 돌아가고 있습니다. 3년마다 재위탁을 받아야 하고 국비 지원도 개소당 연 1억 5천만 원 수준에 머물러 있어 운영이 불안정하다는 거예요.",
            "조직 간 기능 중복 우려: 필수의료지원센터가 새로 생기면 기존 지원단과 업무가 겹쳐 인력이나 예산이 흩어질 수 있습니다. 그래서 기존 조직을 활용하는 방안을 먼저 검토하고, 별도로 설치하더라도 두 조직의 협력 관계를 확실히 해야 한다고 봤습니다.",
            "제도적·재정적 기반 강화: 지원단이 전문 조직으로 거듭나려면 법을 고쳐서 역할을 더 넓혀야 한다는 겁니다. 장기 위탁을 통해 전문 인력을 정규직으로 채용하고, 늘어난 업무에 맞춰 국고 지원 규모도 현실적으로 늘려야 한다는 계획이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "2547",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5300255",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "[보도참고자료] 조정식 국회의장 관훈클럽 토론회 기조연설",
          "easy1_title": "국민주권 개헌으로 4만 달러 시대에 맞는 새 헌법을 만들겠습니다",
          "easy1_desc": "1987년의 낡은 헌법으로는 지금의 4만 달러 시대를 이끌기엔 부족하다고 봤는데요. 그래서 2027년까지 국민주권 개헌안을 마련해 22대 국회 안에서 10차 개헌을 끝내겠다는 계획이에요. 국민의 기본권을 넓히고 지방분권을 담아 시대 변화를 반영하겠다는 건데, 여야 합의가 가능한 의제부터 차근차근 풀어나가겠다는 겁니다.",
          "easy2_title": "국민이 체감할 수 있는 실효성 있는 민생 입법을 추진하겠습니다",
          "easy2_desc": "법을 만들어도 시행이나 집행 과정에서 늦어지면 국민이 변화를 느끼기 어렵거든요. 그래서 앞으로는 돌봄이나 교육 같은 기본사회를 보장하고 미래 먹거리인 첨단산업 입법에 속도를 내겠다는 계획이에요. 서류 작업보다 실질적인 효능감을 높이는 게 장점인데, 국회 운영을 공정하게 해서 국민의 신뢰를 되찾겠다는 겁니다.",
          "topic": "국회의장이 국민의 신뢰를 회복하기 위해 개헌과 민생 입법을 중심으로 국회를 운영하겠다는 비전을 밝혔습니다.",
          "points": [
            "국민주권 개헌 추진: 국민의 뜻을 모으기 위해 의장 직속 헌법개정자문위원회를 만들고 국민참여플랫폼을 운영할 계획이에요. 다만 현직 대통령의 연임은 논의 대상이 아니라는 점을 분명히 했는데요. 여야 합의가 높은 의제부터 순서대로 논의를 이어가겠다는 겁니다.",
            "민생효능국회 실현: 국민이 삶의 변화를 바로 느낄 수 있도록 실효성 있는 입법에 집중하겠다는 거예요. 특히 AI와 반도체 같은 미래 산업의 입법 시기를 놓치지 않겠다고 밝혔는데요. 세종의사당 건립을 통해 국가균형발전도 함께 챙기겠다는 계획입니다.",
            "품격 있는 정치 문화: 상대를 제압하는 정치가 아니라 대화와 소통으로 풀어내는 품격 있는 정치를 만들겠다고 강조했어요. 혐오의 언어 대신 정책과 대안으로 경쟁하는 문화를 만들겠다는 건데요. 국회의장으로서 국회를 공정하게 운영해 국민의 신뢰를 회복하겠다는 의지입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "3897",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5300254",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "국회입법조사처, 제15차 의회조사기구 국제세미나 개최&hellip;&#39;AI시대 입법기관 대응 모색&#39;",
          "easy1_title": "AI 시대에 맞춰 세계 의회들이 머리를 맞대기로 했습니다",
          "easy1_desc": "국회입법조사처가 10일부터 12일까지 사흘간 제15차 의회조사기구 국제세미나를 열었는데요. 미국과 유럽의회조사처를 포함해 총 23개국에서 38명이 모여 AI 기술로 빠르게 변하는 사회에 의회가 어떻게 대응할지 논의하는 자리예요. 쉽게 말하면, AI라는 새로운 숙제를 풀기 위해 세계 각국이 경험과 지혜를 나누기로 한 셈입니다.",
          "easy2_title": "이제는 의회조사기구들이 상설 협의체를 만들어 함께 움직입니다",
          "easy2_desc": "이번 세미나에서는 의회조사기구 협의체(CBPRS)가 공식적으로 출범하며 발족식도 함께 열렸는데요. 총 16개 국가가 참여하고 그중 14개 국가가 공동서명을 마쳤거든요. 앞으로는 국제적인 현안에 대해 일회성 교류를 넘어 안정적이고 지속적으로 함께 대응하겠다는 계획이에요.",
          "topic": "AI 시대의 변화에 대응하기 위해 세계 23개국 의회조사기구가 모여 협력 방안을 논의하고 상설 협의체를 출범했습니다.",
          "points": [
            "국제 세미나 개최: 2010년부터 시작된 이 세미나는 각국 의회조사기구 간의 연구 경험을 공유하고 협력 네트워크를 만들기 위해 열려 왔는데요. 올해는 15번째를 맞아 23개국 대표단이 참석해 AI 시대의 입법과 정책, 그리고 의회조사서비스에서의 AI 활용을 주제로 토론을 진행합니다.",
            "의회조사기구 협의체 출범: 이번에 새로 발족한 의회조사기구 협의체는 각국 의회 간의 교류를 한 단계 더 발전시키려는 목적을 가지고 있는데요. 이를 통해 국제적인 현안에 대해 각국 의회가 공동으로 연구하고 대응하는 새로운 출발점이 될 것으로 보입니다.",
            "글로벌 공동 대응의 필요성: 남인순 국회부의장은 AI가 국경 없이 전 세계로 퍼지고 있기 때문에 어느 한 나라의 의회만으로는 이를 다스리기 어렵다고 강조했는데요. 이번에 출범한 상설 협의체가 세계 의회의 공동 연구실 역할을 해주기를 기대한다는 뜻을 밝혔습니다."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 이를 통해 국제적인 현안에 대해 각국 의회가 공동으로 연구하고 대응하는 새로운 출발점이 될 것으로 보입니다.; point2 근거 원문에 없음",
          "body_chars": "1742",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5300251",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "그린란드 방위협정에 북극 안보화 가속 &hellip;범정부 조정체계 마련 시급",
          "easy1_title": "그린란드 방위협정으로 북극에서 군사적 긴장이 높아지고 있어요",
          "easy1_desc": "미국과 덴마크, 그린란드가 지난 2026년 9월 22일에 새로운 방위협정을 맺었는데요. 이게 뭔 소리냐면, 미군이 그린란드에 기지를 더 늘리고 군사적으로 움직일 수 있는 권한을 크게 가져갔다는 말이에요. 북극 자원이나 항로를 두고 각 나라의 경쟁이 더 치열해질 거라는 전망이 나오고 있습니다. 쉽게 말하면, 평화롭던 북극이 이제는 군사적 안보가 중요한 지역으로 바뀌고 있다는 겁니다.",
          "easy2_title": "우리나라도 이제 과학과 경제를 넘어 안보까지 챙겨야 합니다",
          "easy2_desc": "우리나라는 그동안 북극에서 과학 연구나 경제 활동에 집중해 왔는데요. 그런데 북극이 군사적으로 변하면서 기존 방식으로는 한계가 있다는 지적이 나왔거든요. 이제는 국방부까지 포함해서 정부가 힘을 합쳐 북극 전략을 다시 짜야 한다는 겁니다. 서방 국가들과 협력을 넓혀서 자원이나 항로 문제에 대응하겠다는 계획이에요.",
          "topic": "북극의 안보화가 빨라지는 상황에서 우리나라의 북극 정책을 어떻게 바꿔야 할지 분석한 내용이에요.",
          "points": [
            "그린란드 방위협정의 핵심: 미국은 이번 협정으로 피투픽 우주기지를 현대화하고 새로운 방위구역을 만들 수 있게 됐는데요. NATO(북대서양조약기구)에 속하지 않은 나라들이 그린란드의 핵심 시설이나 자원에 손대지 못하게 막는 내용도 포함돼 있습니다. 미국이 본토 방위를 최우선으로 삼는 전략을 반영한 결과라는 평가예요.",
            "우리나라 정책의 한계: 우리나라는 2013년부터 북극이사회 옵서버로 활동하며 북극항로 개척에 힘써 왔는데요. 하지만 지금은 과학과 경제에만 치우쳐 있어서, 북극권 국가들이 군비를 늘리는 안보 상황에 대응하기 어렵다는 거예요. 특히 자원 협력도 방위협정 때문에 제도적 장벽에 부딪힐 수 있다는 점이 큰 고민거리입니다.",
            "향후 대응 과제: 국회입법조사처는 해양수산부와 외교부뿐만 아니라 국방부도 참여하는 범정부 조정 체계를 만들자고 제안했는데요. IP4(인도-태평양 파트너 4개국)로서 NATO와 맺은 관계를 활용해 서방의 북극 투자에 참여하고, 북동항로 외에 북서항로 활용도 검토해야 한다는 겁니다. 기업의 쇄빙선 수주 실적을 발판 삼아 안보 협력망에 들어가는 것도 방법이라고 봤습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "2200",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5300248",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "AI 사용 제한&middot;사람 검토 전환 기준 마련, 대응 주관기관과 관계 기관의 공동 대응 절차 확립, 자동화 여부와 관계없는 재검토 요청권 보장 등 3대 정책 방향 제시 - 국회미래연구원, 「AI 내재화와 디지털 서비스 탄력성」 브리프 발표 -",
          "easy1_title": "AI가 잘못된 판단을 계속 내릴 때를 대비한 기준이 필요합니다",
          "easy1_desc": "AI가 업무에 깊숙이 들어오면서 서비스는 멈추지 않는데 잘못된 판단만 반복되는 새로운 위험이 생겼거든요. 지금까지는 서비스가 아예 멈추는 장애에만 대비해 왔는데, 이제는 AI가 내린 잘못된 결정을 찾아내고 바로잡는 과정까지 대응 체계를 넓혀야 한다는 거예요. 쉽게 말하면, 시스템이 정상적으로 돌아가더라도 그 안에서 쌓이는 오류를 걸러낼 안전장치를 마련하자는 말입니다.",
          "easy2_title": "흩어진 대응 체계를 하나로 묶어 끝까지 책임져야 합니다",
          "easy2_desc": "우리나라도 AI 관련 제도는 있지만, 부처마다 따로 놀고 있어서 문제가 생겨도 누가 끝까지 책임지고 해결하는지 불분명한 상황이에요. 그래서 대응 주관기관을 정하고 관계 기관이 함께 움직이는 절차를 만들어야 한다고 봤는데요. 이용자가 문제를 제기하면 실제 교정과 피해 회복까지 확실하게 이어지도록 제도 사이의 연결 고리를 단단히 하겠다는 계획입니다.",
          "topic": "국회미래연구원은 AI 내재화로 인한 오류를 발견하고 피해를 회복하기 위해 제도 간 연결과 대응 체계 마련이 필요하다고 밝혔습니다.",
          "points": [
            "AI 사용 제한 및 사람 검토 기준: 어느 정도의 오류가 확인되면 AI 사용을 멈추거나 사람이 직접 검토하도록 바꾸는 기준을 세워야 한다고 봤습니다. 중요한 업무가 끊기지 않게 하는 방법과 이미 피해를 본 처리를 어떻게 재검토할지도 기준에 담아야 한다는 거예요. 대응 능력이 부족한 사업자에게는 전문적인 지원도 함께 제공하겠다는 계획입니다.",
            "공동 대응 절차 확립: 사고가 났을 때 누가 주관해서 대응하고 조치가 끝났는지 확인하는 절차를 분명히 해야 한다는 겁니다. 특히 같은 AI 모델을 쓰는 여러 서비스에서 문제가 동시에 터질 수 있거든요. 이때 기관끼리 정보를 공유하고 함께 대응하는 경로를 미리 만들어야 한다고 강조했습니다.",
            "이용자의 재검토 요청권 보장: AI가 내린 판단이 국민의 권리나 안전에 영향을 준다면, 자동화 여부와 상관없이 이용자가 재검토를 요청할 수 있어야 한다는 거예요. 담당자가 근거를 따져보고 결과를 바꿀 수 있게 하고, 오류가 확인되면 같은 피해를 본 다른 이용자까지 찾아내 바로잡아야 한다고 밝혔습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "2501",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5300243",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "데이터로 보는 생활인구 - 국회도서관, 『Data &amp; Law』 (2026-14호, 통권 제52호) 발간",
          "easy1_title": "주민등록 인구보다 지역에 머무는 사람이 훨씬 많아요",
          "easy1_desc": "생활인구라는 건 주민등록인구와 등록외국인에 더해, 한 달에 한 번 이상 지역을 찾아 3시간 넘게 머문 사람까지 합친 개념이에요. 2025년 10월 기준으로 보면 등록인구는 485만 명 수준인데, 체류인구는 그보다 6.2배나 많은 2,998만 명에 달했거든요. 쉽게 말하면, 주소지는 다른 곳에 있어도 실제로는 지역 경제를 움직이는 외부 방문객이 훨씬 많다는 뜻이에요.",
          "easy2_title": "인구 줄어드는 지역에 사람을 불러 모으려고 세금 혜택을 줍니다",
          "easy2_desc": "인구감소지역에 사람들이 더 많이 오게 하려고 2026년부터는 공시가격 9억 원 이하 주택을 추가로 사면 세금을 깎아주는 제도를 시행하고 있어요. 종합부동산세나 양도소득세를 계산할 때 1주택자로 봐주는 건데요, 이렇게 하면 세금 부담은 줄어드는 장점이 있지만, 지방의 미분양 주택 문제를 해결하려는 목적도 같이 담겨 있다는 겁니다.",
          "topic": "국회도서관이 인구감소지역의 활성화를 위해 생활인구 개념을 분석하고 관련 정책을 정리한 보고서를 발간했습니다.",
          "points": [
            "생활인구의 정의와 규모: 생활인구는 주민등록인구와 외국인뿐만 아니라 일정 시간 이상 지역에 머무는 체류인구까지 포함하는 개념이에요. 실제로 인구감소지역에서 체류인구는 등록인구의 3.6배에서 5.8배 사이를 꾸준히 유지하고 있거든요. 등록인구만 따질 때보다 지역의 실제 활동 인구가 훨씬 크다는 걸 보여주는 셈이에요.",
            "지방 활성화를 위한 정책 지원: 정부는 생활인구를 늘리기 위해 지방교부세 산정 방식에 생활인구를 10% 반영하기 시작했는데요, 그 결과 강원도와 전라남도가 각각 339.3억 원과 338.1억 원을 배정받았다고 밝혔어요. 지역에 머무는 사람이 많을수록 더 많은 예산을 지원받을 수 있는 구조로 바뀐 겁니다.",
            "지자체의 조례 제정 현황: 행정안전부는 각 지방자치단체가 생활인구 활성화 정책을 스스로 추진하도록 조례 제정을 독려하고 있는데요, 아직은 전체 인구감소지역 92곳 중 22곳만 관련 조례를 만들었다고 해요. 비율로 따지면 23.9%에 불과해서 앞으로 더 많은 지자체의 참여가 필요하다고 본 겁니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "1947",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5300239",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "초호황의 성과, 청년과 서민에게는 오지 않았다",
          "easy1_title": "경제는 초호황이라는데 청년과 서민의 삶은 더 팍팍해졌습니다",
          "easy1_desc": "정혜경 의원이 경제부처 예산안을 뜯어봤더니, 전체 경제 지표는 좋아졌는데 그 성과가 청년이나 서민에게는 전혀 닿지 않고 있다는 거예요. 20대 자산 격차는 19배까지 벌어졌고, 청년 고용률은 오히려 떨어졌거든요. 쉽게 말하면, 성장의 열매가 위로만 쏠리고 아래쪽은 점점 더 밀려나는 구조라는 말이에요.",
          "easy2_title": "청년 일자리와 공공임대 예산을 꼼꼼히 다시 살펴야 합니다",
          "easy2_desc": "정 의원은 정부가 청년 고용과 공공임대 예산을 늘렸다고 발표했지만, 실제 내용을 보면 꼭 필요한 지원은 줄었다고 지적했는데요. 기존 사업을 깎아서 새 사업에 돈을 쏟아붓는 식이라 정작 도움이 필요한 사람들은 소외되고 있다는 겁니다. 그래서 정 의원은 청년 크레딧 제도 도입과 공공임대 물량 복원을 예산 심사에서 요구하겠다는 계획이에요.",
          "topic": "정혜경 의원은 경제 성장의 성과가 사회 양극화를 해소하는 방향으로 쓰여야 하며, 이를 위해 청년 고용과 공공임대 예산을 바로잡아야 한다고 주장했습니다.",
          "points": [
            "숫자로 본 양극화 실태: 20대 소득 상위 20%와 하위 20%의 자산 격차는 19배까지 벌어졌고, 66세 이상 노인 빈곤율은 OECD 평균의 2.7배에 달합니다. 일자리 상황도 좋지 않은데, 올해 청년 고용률은 1.1%p 떨어졌고 비정규직은 3년 사이 54.9만명이나 늘어났거든요. 결국 불평등이 심해지면 장기적으로 생산성까지 떨어진다는 게 정 의원의 분석이에요.",
            "청년 고용 예산의 문제점: 정부가 청년 예산을 늘렸다고 하지만, 기존 사업을 깎고 새 이름표를 단 사업에만 돈을 집중시킨 결과라는 거예요. 특히 저임금 노동자를 돕는 두루누리 사업 예산은 2,269억원이나 줄어들었거든요. 정 의원은 첫 직장을 구하지 못한 청년에게 구직급여를 주는 청년 크레딧 제도를 대안으로 제시했습니다.",
            "공공임대 예산의 착시 현상: 공공임대 예산 총액은 40.3% 늘었지만, 정작 취약계층을 위한 기존 공공임대 예산은 4.6% 느는 데 그쳤습니다. 오히려 입주 대기자가 9만 3천명이나 되는데도 공급 물량은 줄어들고 리모델링 예산까지 깎였거든요. 정 의원은 기준조차 없는 보편형 임대에 6조원을 쓰기보다, 줄어든 통합공공임대 물량을 먼저 복원해야 한다고 강조했어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "3205",
          "link": "https://www.nanet.go.kr/lowcontent/assamblybodo/selectAssamblyBodoDetail.do?searchSeq=200169&searchNoSeq=20261111200169",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "산업부 보도 RSS(POST)",
          "kind": "산업통상부 보도자료",
          "writer": "산업통상부",
          "title": "K-온디바이스 AI반도체, ‘상생’으로 속도낸다",
          "easy1_title": "국산 AI 반도체 10종을 2030년까지 함께 만들기로 했습니다",
          "easy1_desc": "산업통상부가 자동차와 가전, 로봇 등에 들어갈 국산 온디바이스 AI 반도체 10종을 2030년까지 개발하겠다는 로드맵을 발표했습니다. 단순히 설계만 하는 게 아니라, 실제 제품에 넣을 수 있는 모듈과 소프트웨어까지 한꺼번에 개발하는 프로젝트인데요. 가전용 AI 칩은 원래 계획보다 1년 이상 앞당겨서 만들기로 했다는 점이 눈에 띕니다. 쉽게 말하면, 우리 기업들이 힘을 합쳐서 AI 반도체 생태계를 빠르게 키우겠다는 겁니다.",
          "easy2_title": "기업들이 서로 돕는 상생 협력 체계를 만들기로 했습니다",
          "easy2_desc": "반도체 개발 과정에서 수요 기업과 파운드리, IP 기업이 각자 역할을 나눠서 서로 돕기로 했는데요. 수요 기업은 단순히 물건을 사는 게 아니라 개발 단계부터 참여하고, 파운드리는 시제품 제작을 우선적으로 배정해 주기로 했습니다. IP 기업도 비용 부담을 줄여주는 방식을 택했거든요. 이렇게 하면 개발이 늦어지는 병목 현상을 막을 수 있다는 장점이 있습니다.",
          "topic": "산업통상부가 K-온디바이스 AI 반도체 프로젝트의 로드맵을 확정하고, 생태계 내 기업 간 상생 협력 방안을 제시했습니다.",
          "points": [
            "민관 합동 컨트롤타워 출범: 사업을 총괄하기 위해 산업부 차관과 민간 전문가가 공동 위원장을 맡는 전략위원회를 만들었습니다. 이 위원회는 매년 개발 계획을 심의하고 추진 상황을 점검하는 역할을 하는데요. 개발하다가 문제가 생기거나 기업들 사이에서 의견이 갈릴 때 빠르게 조율해서 사업이 멈추지 않게 하겠다는 계획입니다.",
            "수요 기업의 혁신 구매자 역할: 수요 기업은 이제 만들어진 제품을 사기만 하는 게 아니라, 개발 초기부터 참여하는 혁신 구매자가 되기로 했습니다. 필요한 기술 사양을 미리 공유하고, 직접 테스트할 수 있는 환경을 제공해서 국산 반도체가 실제 제품에 들어갈 수 있도록 돕는다는 겁니다.",
            "파운드리와 IP 기업의 지원: 삼성전자 파운드리는 2027년에 시제품 제작 수요를 미리 파악해서 공정 배정을 우선적으로 반영하기로 했습니다. 팹리스 기업들이 가장 힘들어하던 IP 비용 문제도 IP 기업들이 대금 지불을 유연하게 바꾸거나 패키지를 제공하는 방식으로 부담을 덜어주기로 했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "2786",
          "link": "https://www.motir.go.kr/kor/article/ATCLe0854704d/172399/view",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "산업부 보도 RSS(POST)",
          "kind": "산업통상부 보도자료",
          "writer": "산업통상부",
          "title": "유럽연합 탄소국경조정제도(CBAM) 국내 첫 검증기관 인정",
          "easy1_title": "유럽 수출할 때 탄소 배출량 검증을 이제 국내에서 받을 수 있습니다",
          "easy1_desc": "유럽연합(EU)으로 물건을 보낼 때 탄소 배출량을 검증받아야 하는데요, 그동안은 국내에 인정받은 기관이 없어서 기업들이 애를 먹었거든요. 그런데 이번에 한국표준협회가 국내 최초로 유럽연합의 인정을 받게 되면서 상황이 달라졌습니다. 쉽게 말하면, 이제 해외 기관을 찾지 않고도 국내에서 바로 검증을 마칠 수 있게 된 셈이에요.",
          "easy2_title": "우리 기업의 비용 부담은 줄고 생산 정보는 더 안전하게 지킵니다",
          "easy2_desc": "국내 기관을 이용하면 해외 심사원을 부를 때 드는 체류비 같은 부대비용을 아낄 수 있는데요, 기업 입장에서 가장 큰 장점은 민감한 생산 정보를 해외에 넘기지 않아도 된다는 겁니다. 정보 유출 걱정을 덜 수 있다는 건데, 검증 과정에서 생기는 혼선도 국내 산업 현장을 잘 아는 기관이라 줄어들 것으로 보입니다.",
          "topic": "유럽연합 탄소국경조정제도(CBAM) 대응을 위해 국내 검증기관이 처음으로 유럽연합의 인정을 받은 성과와 정부의 지원 계획이에요.",
          "points": [
            "국내 1호 검증기관 탄생: 산업통상부와 기후에너지환경부가 협력해서 한국표준협회가 이탈리아 국가인정기구로부터 국내 최초로 유럽연합 탄소국경조정제도 검증기관 인정을 받도록 이끌어 냈는데요. 정부가 기술전문가를 심사에 참여시키고 역량 강화 교육을 운영하는 등 다방면으로 지원한 결과라고 밝혔습니다.",
            "검증 미비 시 발생하는 비용 문제: 유럽연합으로 수출하는 기업은 탄소 배출량을 보고해야 하는데, 검증을 받지 못하면 실제보다 높게 설정된 기본값이 적용되거든요. 이렇게 되면 기업이 내야 할 비용이 커지게 되는데, 국내에서 검증을 받으면 이런 과다 산정 문제를 피할 수 있다는 겁니다.",
            "향후 추가 지원 계획: 정부는 현재 심사 중인 2곳의 검증기관도 조속히 인정을 받을 수 있도록 지원을 이어가겠다는 계획인데요. 기업들이 실질적인 대응 능력을 갖추도록 전용 상담창구와 교육 과정을 운영하고, 유럽연합과도 계속 협의해 나가겠다고 밝혔습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 정보 유출 걱정을 덜 수 있다는 건데, 검증 과정에서 생기는 혼선도 국내 산업 현장을 잘 아는 기관이라 줄어",
          "body_chars": "2306",
          "link": "https://www.motir.go.kr/kor/article/ATCLe0854704d/172398/view",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "산업부 보도 RSS(POST)",
          "kind": "산업통상부 보도자료",
          "writer": "산업통상부",
          "title": "CPTPP 협정, 알기 쉽게 설명해 드립니다",
          "easy1_title": "CPTPP 협정을 쉽게 알려주는 세미나를 열었습니다",
          "easy1_desc": "산업통상부가 한국국제경제법학회와 함께 포괄적·점진적 환태평양경제동반자협정(CPTPP)을 주제로 릴레이 세미나를 시작했습니다. 11일부터 내년 1월 6일까지 총 8회에 걸쳐 국제법 전문가들이 협정 내용을 알기 쉽게 설명해 주는 자리거든요. 뭔 소리냐면, 복잡한 통상 협정의 내용을 분야별로 나누어 전문가가 직접 풀어 준다는 말이에요. 관심 있는 분들은 온·오프라인으로 참여할 수 있다는 겁니다.",
          "easy2_title": "앞으로도 통상 협정을 이해하기 쉽게 설명할 계획입니다",
          "easy2_desc": "이번 세미나는 CPTPP에 대한 정보를 제공하고 이해도를 높이기 위해 마련된 것인데요, 1회차에서는 총칙과 분쟁해결 등을 다뤘고 앞으로 디지털 무역이나 상품 시장접근 같은 세부 주제를 이어갈 예정입니다. 산업부는 이번 행사뿐만 아니라 앞으로도 통상 협정의 주요 내용을 국민이 알기 쉽게 설명하는 자리를 계속 만들겠다는 계획이에요. 정보를 얻기 어려웠던 분들에게는 협정을 파악할 좋은 기회가 될 것으로 보입니다.",
          "topic": "산업통상부가 CPTPP 협정에 대한 이해를 돕기 위해 전문가와 함께하는 릴레이 세미나를 개최했습니다.",
          "points": [
            "릴레이 세미나 운영: 11일부터 내년 1월 6일까지 매주 수요일마다 총 8회에 걸쳐 세미나가 진행됩니다. 12월 23일을 제외하고 매주 열리며, 온·오프라인 방식을 병행해서 운영한다는 거예요. 누구나 사전 신청을 통해 참여할 수 있는 구조입니다.",
            "회차별 주제 구성: 첫 번째 세미나에서는 협정의 총칙과 분쟁해결, 예외 규정을 다뤘는데요, 이후 회차에서는 디지털 무역, 노동, 환경, 상품 시장접근, 국영기업, 서비스 및 투자 등 협정의 전반적인 내용을 주제별로 상세히 다룰 계획입니다. 전문가 강의 뒤에는 참석자와 질의응답을 나누는 시간도 갖거든요.",
            "참여 방법 확인: 세미나에 참여하고 싶은 분들은 정부 자유무역협정 홈페이지나 법무법인 광장 홈페이지에서 세부 일정과 신청 방법을 확인할 수 있습니다. 온라인과 오프라인을 병행하므로 본인에게 편한 방식을 선택하면 된다는 거예요. 전문가들의 설명을 직접 들을 수 있는 기회라 업계 관계자나 학계 전문가들이 많이 찾을 것으로 보입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "12 23",
          "check_flags": "예측 의심: 정보를 얻기 어려웠던 분들에게는 협정을 파악할 좋은 기회가 될 것으로 보입니다.",
          "body_chars": "1579",
          "link": "https://www.motir.go.kr/kor/article/ATCLe0854704d/172397/view",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "산업부 보도 RSS(POST)",
          "kind": "산업통상부 보도자료",
          "writer": "산업통상부",
          "title": "K섬유패션의 미래를 향한 도전, 제40회 섬유의 날 개최",
          "easy1_title": "섬유패션산업의 40주년을 기념하고 유공자들에게 상을 드렸습니다",
          "easy1_desc": "산업통상부와 한국섬유산업연합회가 11.11(수) 서울 대치동 섬유센터에서 제40회 섬유의날 기념식을 열었는데요. 섬유패션산업이 단일업종 최초로 수출 100억불을 달성했던 1987년을 기리기 위해 매년 열리는 행사거든요. 이날은 섬유패션산업 발전에 기여한 유공자 47명에게 정부포상을 수여하며 그간의 헌신을 기리는 뜻깊은 시간을 가졌습니다.",
          "easy2_title": "첨단산업의 뿌리인 섬유패션산업을 정부가 적극적으로 돕겠습니다",
          "easy2_desc": "산업통상부 이민우 산업성장실장은 섬유패션산업이 자동차나 방산 같은 첨단산업의 경쟁력을 결정짓는 중요한 뿌리라고 강조했는데요. 어려운 상황에서도 고군분투하는 업계를 격려하며 정부가 동반자로서 적극 지원하겠다는 의지를 밝혔습니다. 구체적으로는 첨단산업용 섬유를 육성하고 국내 제조기반을 강화해 공급망을 안정시키며 글로벌 진출을 돕겠다는 계획이에요.",
          "topic": "제40회 섬유의 날을 맞아 섬유패션산업의 성과를 기념하고 향후 산업 육성을 위한 정부의 지원 의지를 밝힌 행사입니다.",
          "points": [
            "섬유의 날 기념식 개최: 섬유패션산업이 수출 100억불을 처음 달성한 1987년을 기념해 매년 열리는 행사인데요. 올해는 40주년을 맞아 한복패션쇼와 미디어 공연으로 시작해 유공자 47명에게 정부포상을 수여했습니다.",
            "산업 유공자 포상: 약 40년간 친환경 니트 직물 제조에 힘쓴 ㈜세왕섬유 최재락 회장이 금탑산업훈장을 받았는데요. 33년간 친환경 소재 개발을 이끈 ㈜영원무역 박재용 사장도 은탑산업훈장을 수상하며 산업 발전에 기여한 공로를 인정받았습니다.",
            "정부의 산업 지원 방향: 정부는 섬유패션산업이 첨단산업의 뿌리라고 보고 육성 의지를 다졌는데요. 첨단산업용 섬유를 키우고 국내 제조기반을 강화해 공급망을 안정시키며, K섬유패션의 글로벌 진출을 확대하는 세 가지 방향으로 지원하겠다는 계획입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "2061",
          "link": "https://www.motir.go.kr/kor/article/ATCLe0854704d/172396/view",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "산업부 보도 RSS(POST)",
          "kind": "산업통상부 보도자료",
          "writer": "산업통상부",
          "title": "빛고을 광주, 제조AX 혁신의 빛을 밝히다",
          "easy1_title": "제조업에 인공지능을 입히는 게 이제는 생존 전략이 됐습니다",
          "easy1_desc": "산업통상부에서 제조 현장에 인공지능(AI)을 접목하는 제조AX(제조업 AI 대전환)를 추진하고 있는데요, 이게 단순히 기술을 도입하는 수준을 넘어서 기업들이 살아남기 위해 반드시 해야 하는 필수 전략이 됐다는 말이에요. 실제로 AI 팩토리 우수사례 38개를 분석해 봤더니 생산성은 30.1% 높아지고 불량률은 15.5% 줄어드는 성과가 나타났거든요. 쉽게 말하면, AI를 공장에 들여서 일하는 방식을 완전히 바꾸고 있다는 겁니다.",
          "easy2_title": "지역 기업들이 AI를 쉽게 도입하도록 직접 찾아가서 돕고 있습니다",
          "easy2_desc": "많은 지역 중소기업들이 AI를 쓰고 싶어도 어디서부터 시작할지 몰라 어려워하는데요, 그래서 산업통상부가 전국을 돌며 지역 확산 컨퍼런스를 열고 있는 겁니다. 현장에서 전문가들이 1대1로 상담을 해 주면서 기업 상황에 맞는 AI 도입 방안을 알려주고 있거든요. 상담을 통해 기업들은 자기 공정의 문제점을 진단받고, 필요한 기술을 가진 AI 기업과 연결될 수 있다는 장점이 있습니다.",
          "topic": "산업통상부가 전남광주통합특별시에서 제조AX 확산을 위한 컨퍼런스를 열고 ’27년 핵심 정책을 알렸습니다.",
          "points": [
            "제조AX 성과 확산: 산업통상부는 자동차와 조선 산업이 모여 있는 전남광주 지역의 특성을 살려 AI 도입 성과를 퍼뜨리겠다고 밝혔습니다. 한 기업에서 성공한 AI 공정 사례를 비슷한 공정을 쓰는 다른 기업들이 보고 따라 하기 좋기 때문인데요, 이를 통해 지역 전체의 제조 경쟁력을 높이겠다는 계획입니다.",
            "AI 로봇 공공보급: 정부는 ’27년부터 AI 로봇 공공보급 사업을 시작해 초기 시장을 만들겠다고 밝혔습니다. 아직 상용화 단계가 아닌 AI 로봇을 정부가 먼저 1,700여 대 구매해서 성능을 개선하고 데이터를 쌓겠다는 건데요, 단순한 지출이 아니라 국내 로봇 생태계를 키우기 위한 투자라고 봤다는 거예요.",
            "1대1 맞춤형 상담: 컨퍼런스 현장에서는 30여 개 기업이 참여해 AI 전문가들에게 1대1 상담을 받았습니다. 기업들은 현재 자기 공정의 상태를 진단받고 앞으로 어떻게 AI를 도입할지 구체적인 조언을 들었는데요, 필요하다면 우수한 성과를 낸 AI 공급 기업과 연결까지 해 주고 있다는 겁니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "3571",
          "link": "https://www.motir.go.kr/kor/article/ATCLe0854704d/172395/view",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "산업부 보도 RSS(POST)",
          "kind": "산업통상부 보도자료",
          "writer": "산업통상부",
          "title": "(참고자료)산업부 장관, 中 상무부와 한중 정상회담 후속조치 이행점검",
          "easy1_title": "한중 정상회담에서 약속한 경제 협력을 꼼꼼히 챙기고 있습니다",
          "easy1_desc": "김정관 산업통상부 장관이 중국 상하이에서 왕원타오 상무부 부장을 만나 한중 정상회담 이후의 경제 협력 상황을 점검했습니다. 두 장관은 양국 간의 우호적인 분위기가 실물경제 협력으로 잘 이어지고 있다고 평가했는데요. 쉽게 말하면 정상회담에서 나온 이야기들이 실제로 잘 진행되고 있는지 확인하고 속도를 높이기로 한 셈입니다.",
          "easy2_title": "우리 기업들의 중국 소비재 시장 진출을 적극적으로 돕고 있습니다",
          "easy2_desc": "김 장관은 제9회 중국 국제수입박람회에 직접 방문해 우리 기업들을 격려했는데요. 이번 박람회에는 우리 기업 200여 개 사가 참가했고, 한국기업관에는 전년보다 두 배 늘어난 80여 개 사가 모여 화장품과 식품 등을 선보입니다. 소비재 수출 기회를 늘리겠다는 계획인데, 기업 입장에서는 마케팅 효과를 높일 수 있다는 장점이 있습니다.",
          "topic": "산업통상부가 한중 정상회담의 후속 조치를 점검하고 우리 기업의 중국 시장 진출을 지원하는 내용입니다.",
          "points": [
            "FTA 서비스·투자 협상 가속화: 2018년부터 이어져 온 한중 FTA 서비스와 투자 후속 협상이 올해 1월 정상회담을 계기로 속도를 내고 있습니다. 올해만 5차례 공식 협상을 진행하며 진전을 보였는데요. 양측은 조속한 타결을 위해 함께 노력하기로 했다는 겁니다.",
            "지방경제 활성화 협력 강화: 중국 새만금 투자조사단 파견이나 한국과 중국 지방정부 간의 교류회 같은 올해의 성과를 바탕으로 협력을 넓히기로 했습니다. 한중 산업단지를 중심으로 지방 경제를 더 활발하게 만들겠다는 계획인데요. 내년 초에는 장관급인 한중 상무협력대화를 열어 협력 사항을 종합적으로 점검할 예정입니다.",
            "소비재 수출 확대를 위한 박람회 지원: 제9회 중국 국제수입박람회에 장관급 인사가 참석한 것은 이번이 처음입니다. 한국기업관에 참가한 기업이 전년 대비 약 두 배 늘어난 80여 개 사에 달하는데요. 라이브 커머스나 시식 행사 같은 마케팅을 통해 중국 소비자들에게 우리 제품을 알리는 데 힘쓰고 있습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "1404",
          "link": "https://www.motir.go.kr/kor/article/ATCLe0854704d/172394/view",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "미국 연방관보(무역·에너지·원자력 기관)",
          "kind": "미국 연방관보 공고",
          "writer": "미국 연방관보",
          "title": "Long Mott Energy, LLC; Long Mott Generating Station; Construction Permit",
          "easy1_title": "텍사스에 원자력 발전소를 지어도 좋다고 허가했습니다",
          "easy1_desc": "미국 원자력규제위원회(NRC)가 롱 모트 에너지(LME)라는 회사에 텍사스주 캘훈 카운티에 원자력 발전 시설을 건설할 수 있는 허가증을 내줬거든요. 이 허가는 2026년 11월 9일부터 바로 효력이 생기는 건데요. 쉽게 말하면, 이제 해당 지역에서 발전소 건설을 시작할 수 있는 법적 권한을 얻었다는 뜻이에요.",
          "easy2_title": "안전과 환경 기준을 모두 통과했는지 꼼꼼히 따져봤습니다",
          "easy2_desc": "위원회가 허가를 내주기 전에 원자력법에 따른 안전 기준과 환경 보호 규정을 제대로 지켰는지 철저하게 검토했는데요. 건설 과정에서 생길 수 있는 안전 문제나 주변 환경에 미칠 영향까지 모두 확인했다는 거예요. 결과적으로 회사가 시설을 지을 기술적, 재정적 능력을 갖췄다고 판단했다는 말이에요.",
          "topic": "미국 원자력규제위원회가 롱 모트 에너지의 발전소 건설 허가증 발급 사실을 공고한 내용입니다.",
          "points": [
            "건설 허가 발급: 위원회는 2026년 11월 9일자로 롱 모트 에너지에 건설 허가증인 CPAR-3를 발급했다고 밝혔습니다. 이 허가는 즉시 효력이 발생하며, 텍사스주 캘훈 카운티에 원자로 시설을 건설할 수 있도록 승인하는 내용이에요.",
            "안전 및 환경 검증: 위원회는 원자력법과 환경 보호 규정에 따라 해당 시설이 공공의 건강과 안전에 위험을 주지 않는지 평가했는데요. 건설이 완료될 때까지 안전 관련 질문들이 만족스럽게 해결될 것이며, 회사가 시설을 운영할 자격이 있다고 봤다는 거예요.",
            "관련 문서 공개: 위원회는 이번 결정의 근거가 되는 안전 평가서와 환경 평가서를 작성해 공개했는데요. 관심 있는 사람은 위원회의 문서 관리 시스템인 ADAMS를 통해 관련 서류들을 직접 찾아볼 수 있다는 겁니다."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "easy2 근거 원문에 없음",
          "body_chars": "7076",
          "link": "https://www.federalregister.gov/documents/2026/11/12/2026-23029/long-mott-energy-llc-long-mott-generating-station-construction-permit",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "DS투자증권",
          "title": "[DS투자증권] 삼양식품 확장되는 불닭 Wave",
          "easy1_title": "삼양식품이 베트남에 새 공장을 지어서 생산 능력을 키우기로 했어요",
          "easy1_desc": "삼양식품이 베트남에 생산 법인과 공장을 세우겠다는 계획을 발표했는데요, 총 2,186억 원을 들여서 2029년 1월 31일까지 완공할 예정이라고 해요. 이 공장은 동남아와 유럽으로 나가는 제품을 주로 맡게 될 텐데, 생산 거점이 늘어나면 원가를 줄이고 시장 점유율도 높일 수 있다는 장점이 있거든요. 쉽게 말하면, 불닭볶음면의 인기가 계속되니 해외에서 직접 만들어 더 많이 팔겠다는 전략인 셈이에요.",
          "easy2_title": "공장이 계속 늘어나면서 2029년에는 생산량이 훨씬 많아질 거예요",
          "easy2_desc": "삼양식품은 2022년 밀양 1공장을 시작으로 2025년 밀양 2공장, 2027년 중국 공장, 그리고 2029년 베트남 공장까지 2년 간격으로 생산 시설을 꾸준히 늘려왔는데요, 이렇게 되면 전체 생산 능력(CAPA)이 2026년 28억 개에서 2029년에는 최대 50.6억 개까지 늘어날 것으로 보여요. 생산량이 늘어나는 만큼 글로벌 시장에서 불닭볶음면을 더 많이 침투시킬 수 있다는 기대가 큰데요, 대신 공장을 짓는 데 들어가는 초기 비용 부담은 감수해야 한다는 점도 함께 고려해야 한다는 겁니다.",
          "topic": "삼양식품이 해외 생산 거점을 확대하며 글로벌 시장에서의 성장세를 이어갈 것으로 증권사는 전망했어요.",
          "points": [
            "생산 거점 확대와 효과: 삼양식품은 베트남 공장 설립을 통해 동남아와 유럽 수출을 강화하겠다는 계획인데요, 현지에서 직접 생산하면 원가를 아낄 수 있고 영업 레버리지 효과도 누릴 수 있다고 봤어요. 또한 각 판매 법인과 연계해서 시장 침투율을 높이는 데도 도움이 될 것으로 보입니다.",
            "2027년 실적 성장 전망: 증권사는 삼양식품의 2027년 연결 매출액을 3.7조 원, 영업이익을 8,724억 원으로 추정했는데요, 환율이 떨어지는 상황에서도 중국 공장 가동과 미주·유럽 수출 증가로 판매량이 늘어날 것이라고 봤어요. 특히 고단가 지역 매출이 늘어나면서 전체적인 외형 성장이 나타날 것으로 보입니다.",
            "중국 공장 가동의 영향: 2027년 상반기부터 중국 공장 가동률이 올라가면 초기 고정비 부담이 점차 줄어들 것으로 증권사는 분석했는데요, 현지의 낮은 인건비와 물류비 절감 효과도 실적에 긍정적일 것으로 봤어요. 이를 통해 수익성이 개선되면서 주가 반등도 가능할 것으로 전망했다는 겁니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 삼양식품은 2022년 밀양 1공장을 시작으로 2025년 밀양 2공장, 2027년 중국 공장, 그리고 2029; 예측 의심: 또한 각 판매 법인과 연계해서 시장 침투율을 높이는 데도 도움이 될 것으로 보입니다.; 예측 의심: 특히 고단가 지역 매출이 늘어나면서 전체적인 외형 성장이 나타날 것으로 보입니다.",
          "body_chars": "10921",
          "link": "https://m.stock.naver.com/research/company/98119",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "교보증권",
          "title": "[교보증권] NC 27년 매출에 대한 공격적 가이던스 제시",
          "easy1_title": "엔씨소프트가 2027년 매출 목표를 아주 높게 잡았어요",
          "easy1_desc": "엔씨소프트가 이번 실적 발표에서 2027년 매출 가이던스(기업이 제시하는 예상 실적)를 3.2조원에서 3.4조원 사이로 제시했는데요. 기존에 예상하던 수치보다 훨씬 공격적인 목표를 내놓은 셈이에요. 증권사는 이 목표가 신작 출시와 사업 확장 계획을 바탕으로 나왔다고 봤거든요. 쉽게 말하면, 회사가 앞으로 더 큰 성장을 자신하고 있다는 말이에요.",
          "easy2_title": "3분기 실적은 시장의 기대보다 더 잘 나왔네요",
          "easy2_desc": "엔씨소프트의 3분기 영업이익은 1,196억원으로 시장에서 예상했던 컨센서스(시장 평균 전망치)인 1,068억원을 넘어섰거든요. 아이온2 매출은 안정화되는 추세이고, 리니지 클래식도 견조한 성적을 유지했기 때문이에요. 마케팅 비용을 효율적으로 쓴 것도 이익이 잘 나온 이유 중 하나라고 증권사는 분석했어요.",
          "topic": "엔씨소프트의 3분기 실적 평가와 2027년 매출 목표 상향에 대한 분석이에요.",
          "points": [
            "3분기 실적 호조: 3분기 매출은 6,865억원으로 작년보다 90.7% 늘었고 영업이익은 1,196억원으로 흑자 전환에 성공했거든요. 기존 모바일 게임 라인업은 자연스럽게 매출이 줄었지만, 캐주얼 게임 부문에서 광고 수익이 잘 나오면서 전체 실적을 뒷받침한 셈이에요.",
            "공격적인 매출 목표: 회사가 제시한 2027년 매출 목표는 3.2조원에서 3.4조원 수준인데요. 증권사는 이 수치가 회사의 신작 출시와 캐주얼 사업 확장 전략을 반영한 것이라고 봤어요. 다만 증권사가 추정한 수치보다는 조금 더 높은 편이라 실제 달성 여부가 중요해 보입니다.",
            "투자의견과 목표주가: 증권사는 엔씨소프트에 대해 투자의견 Buy(매수)를 유지하고 목표주가도 375,000원으로 그대로 두었거든요. 앞으로 캐주얼 사업 부문을 확장하고 신작 게임을 출시하면서 매출을 더 끌어올릴 수 있다는 기대감이 반영된 것으로 보입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "10999",
          "link": "https://m.stock.naver.com/research/company/98118",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "교보증권",
          "title": "[교보증권] 코스맥스 1등 매출이 60% 성장하는 업황, 왜 의심하지?",
          "easy1_title": "코스맥스가 보여준 60% 성장은 화장품 시장이 진짜 좋다는 증거예요",
          "easy1_desc": "코스맥스의 3분기 실적을 살펴봤더니 한국 법인 매출이 작년보다 61%나 늘어났거든요. 추석이나 여름휴가처럼 영업일수가 적은 시기였는데도 이런 성과를 낸 건데, 이게 뭔 소리냐면 화장품 업황이 구조적으로 아주 빠르게 성장하고 있다는 말이에요. 쉽게 말하면, 1등 업체가 이 정도로 성장하고 있으니 지금의 호황을 의심할 필요가 없다는 겁니다.",
          "easy2_title": "지금 주가는 실적에 비해 너무 낮아서 사두기 좋은 시점이에요",
          "easy2_desc": "증권사는 코스맥스의 현재 주가가 12개월 예상 실적을 기준으로 했을 때 주가수익비율(PER)이 11배 수준이라고 봤는데요. 이게 왜 중요하냐면 기업이 버는 돈에 비해 주가가 현저히 낮게 평가되어 있다는 뜻이거든요. 그래서 증권사는 지금을 적극적으로 매수할 기회라고 판단했다는 겁니다.",
          "topic": "코스맥스의 3분기 실적을 통해 확인한 K-뷰티 업황의 구조적 성장과 향후 투자 의견에 대한 분석이에요.",
          "points": [
            "3분기 실적 호조: 코스맥스의 3분기 연결 매출액은 8,758억원, 영업이익은 833억원으로 시장 기대치를 7% 웃돌았는데요. 한국과 미국 법인 모두 기존에 세웠던 목표치를 크게 뛰어넘는 실적을 기록했다는 겁니다.",
            "수익성 개선 요인: 한국 법인의 수익성이 작년보다 2.0%p 개선된 건 영업 레버리지 효과와 제품 믹스 개선, 그리고 수익성을 높이려는 노력 덕분이라고 봤는데요. 여기에 대손상각비 54억원이 환입된 점도 실적에 긍정적인 영향을 줬다는 겁니다.",
            "증설을 통한 수요 대응: 현재 코스맥스의 가동률은 80% 후반으로 사실상 풀캐파(최대 생산 능력) 상태인데요. 급증하는 수요에 대응하기 위해 평택 1공장 증설을 진행 중이며, 올해 말에는 생산 능력이 작년보다 10% 늘어날 것으로 증권사는 전망했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "11301",
          "link": "https://m.stock.naver.com/research/company/98117",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "교보증권",
          "title": "[교보증권] 이마트 3Q26 Review: 본업 체력은 확인",
          "easy1_title": "이마트 본업은 잘하고 있는데 자회사들이 발목을 잡았네요",
          "easy1_desc": "이마트의 3분기 실적을 뜯어봤더니 본업인 할인점과 트레이더스 등은 매출이 늘고 영업이익도 좋아지면서 체력이 튼튼해진 게 확인됐거든요. 그런데 전체 성적표는 시장의 기대치보다 낮게 나왔는데, 그게 스타벅스와 신세계건설 같은 자회사들이 부진했기 때문이라는 말이에요. 쉽게 말하면 본업은 잘하는데 다른 곳에서 손실이 커서 전체 이익을 깎아 먹은 셈이에요.",
          "easy2_title": "목표주가는 낮췄지만 본업의 성장세는 계속될 것으로 봤어요",
          "easy2_desc": "증권사는 이마트의 목표주가를 90,000원으로 낮췄는데, 이건 실적 추정치를 하향 조정했기 때문이라는 거예요. 하지만 4분기에도 경쟁사 점포가 문을 닫으면서 생기는 반사 이익이나 쓱데이 행사 같은 호재가 있어서 본업의 매출은 계속 늘어날 것으로 봤거든요. 다만 스타벅스의 매출 회복이나 신세계건설의 미분양 문제가 해결되는지가 앞으로 주가에 중요한 변수가 될 것이라고 밝혔습니다.",
          "topic": "이마트의 3분기 실적을 분석하고 앞으로의 본업 성장 가능성과 자회사 부진에 따른 영향을 평가했어요.",
          "points": [
            "본업의 실적 개선: 이마트 별도 부문의 총매출액은 5조 1,040억원으로 전년 동기 대비 11.1% 늘어났거든요. 할인점과 트레이더스, 에브리데이 등 모든 사업부에서 객수가 늘어나면서 영업 레버리지 효과가 나타난 덕분이라고 봤습니다.",
            "자회사들의 부진: 스타벅스는 서머 e-프리퀀시 행사가 없어서 매출이 16.2% 줄었고 영업적자 453억원을 기록했거든요. 신세계건설도 미분양 사업장을 할인해서 분양하는 과정에서 대손 충당금을 쌓느라 영업적자가 989억원으로 더 커졌다고 밝혔습니다.",
            "향후 주가 변수: 증권사는 4분기에도 본업의 성장세는 이어질 것으로 봤지만, 스타벅스의 윈터 e-프리퀀시 행사 결과와 신세계건설의 실적이 정상화되는지가 중요하다고 강조했거든요. 이 두 가지가 해결되어야 주가에도 긍정적인 영향을 줄 것으로 보입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 이 두 가지가 해결되어야 주가에도 긍정적인 영향을 줄 것으로 보입니다.",
          "body_chars": "14418",
          "link": "https://m.stock.naver.com/research/company/98116",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "교보증권",
          "title": "[교보증권] 롯데웰푸드 좋아진 내용에 그대로인 밸류는 저평가",
          "easy1_title": "롯데웰푸드 실적은 좋아졌는데 주가는 그대로라 저평가 상태예요",
          "easy1_desc": "롯데웰푸드의 3분기 영업이익이 작년보다 30%나 늘어난 899억 원을 기록하며 시장의 기대에 부합했는데요. 국내에서는 원부자재 비용이 상반기보다 3배 넘게 뛰는 어려움도 있었지만, 구조적인 개선 활동으로 실적을 잘 방어해 냈거든요. 해외에서는 가격 인상과 코코아 가격 하락이 맞물리며 수익성이 크게 좋아진 셈이에요. 쉽게 말하면 회사는 내실을 다지며 성장하고 있는데 주가는 그만큼 오르지 못했다는 말이에요.",
          "easy2_title": "해외 시장에서 잘나가고 있고 추가 가격 인상도 고민 중이에요",
          "easy2_desc": "해외 사업은 인도 빙과 공장 가동과 건과 라인 증설 효과가 더해지면서 매출이 16% 늘어나는 등 견조한 흐름을 보이고 있는데요. 가격을 올렸는데도 판매량이 줄지 않고 잘 유지되고 있다는 점이 눈에 띄는 대목이에요. 증권사는 해외에서 4분기부터 내년 1분기 사이에 추가적인 가격 인상을 검토하고 있다고 밝혔거든요. 해외 실적이 탄탄하게 받쳐주고 있다는 게 장점인데, 국내 원부자재 부담이 여전히 크다는 점은 함께 고려해야 할 부분이에요.",
          "topic": "롯데웰푸드의 3분기 실적을 분석하고 현재 주가가 기업 가치 대비 저평가되어 있다고 평가했어요.",
          "points": [
            "국내외 실적 차이: 국내 실적은 원부자재 비용 부담이 상반기보다 3배 이상 늘어난 탓에 수익성이 기대치를 밑돌았는데요. 반면 해외는 가격 인상과 코코아 투입가 하락 덕분에 수익성이 증권사의 추정치를 웃돌았거든요. 쉽게 말하면 국내의 비용 부담을 해외의 성장이 상쇄하고 있는 구조라는 말이에요.",
            "해외 시장의 성장세: 인도에서는 빙과 신공장 가동과 건과 라인 증설 효과가 나타나면서 매출이 각각 23%와 22%씩 늘어났는데요. 특히 새로 증설한 라인은 가동 초기임에도 가동률이 100%를 넘어서는 모습을 보였거든요. 카자흐스탄과 러시아에서도 견조한 흐름이 이어지고 있다는 점이 특징이에요.",
            "밸류에이션 매력: 증권사는 롯데웰푸드의 현재 주가가 2027년 예상 실적 기준으로 7배 수준에 머물러 있다고 봤는데요. 과거 5년 동안 평균 9.9배의 주가수익비율(PER)을 기록했던 것과 비교하면 기업의 변화에 비해 주가가 낮게 평가되어 있다는 거예요. 그래서 투자의견을 매수로 유지하고 목표주가도 175,000원으로 그대로 두기로 했어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "10952",
          "link": "https://m.stock.naver.com/research/company/98115",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "교보증권",
          "title": "[교보증권] 삼양식품 베트남 신공장 증설 공시 코멘트",
          "easy1_title": "삼양식품이 베트남에 새 공장을 지어서 생산 능력을 키우기로 했어요",
          "easy1_desc": "삼양식품이 베트남 투언타잉에 약 2,186억원을 들여 새로운 생산 공장을 짓기로 발표했는데요. 공장이 완성되어 8개 생산 라인을 모두 갖추게 되면, 전체 생산 능력(CAPA)이 지금보다 28% 정도 늘어날 것으로 보입니다. 이렇게 되면 매출 규모도 1조원까지 커질 수 있다고 증권사는 추정했거든요. 쉽게 말하면, 해외에 거점을 하나 더 만들어 물량을 더 많이 뽑아내겠다는 전략인 셈이에요.",
          "easy2_title": "과거 중국 공장 증설 때처럼 주가에도 긍정적인 변화가 있을지 주목돼요",
          "easy2_desc": "과거 삼양식품이 중국 공장 증설을 발표했을 때, 중장기적인 성장 기대감이 커지면서 주가가 크게 올랐던 적이 있거든요. 지금도 밀양 2공장 가동 이후 물량 성장이 정체될까 봐 걱정하는 시선이 있지만, 이번 베트남 증설이 다시 성장의 발판이 될 수 있다고 증권사는 봤습니다. 현재 주가는 12개월 선행 주가수익비율(P/E)이 13배 수준으로, 우려를 충분히 반영해 매력적인 상태라는 분석이에요.",
          "topic": "삼양식품의 베트남 신공장 증설이 회사의 생산 능력 확대와 기업 가치 평가에 미칠 영향에 대한 분석이에요.",
          "points": [
            "베트남 신공장 투자 계획: 삼양식품은 베트남 현지 법인에 약 1,313억원을 출자해 지분 100%를 확보하고, 총 2,186억원을 투자해 공장을 건설할 계획이라고 밝혔습니다. 베트남은 한국보다 노무비가 최대 25% 수준으로 낮아 운영비 부담이 적고, 유럽과 동남아 시장을 모두 공략하기에 지리적으로 유리하다는 장점이 있거든요.",
            "생산 능력 확대 효과: 신공장에 8개 생산 라인을 모두 구축하면 중국 공장과 비슷한 수준인 11억식의 생산 능력을 확보할 수 있을 것으로 증권사는 보고 있습니다. 라인 수에 따라 기존 대비 생산 능력이 6개 라인일 때는 21%, 8개 라인일 때는 28%까지 늘어날 전망이에요.",
            "밸류에이션 매력과 성장 기대: 증권사는 현재 삼양식품의 12개월 선행 주가수익비율이 13배로 밸류에이션(기업 가치 평가) 매력이 높다고 평가했습니다. 밀양 2공장 가동 이후 물량 성장이 둔화될 것이라는 우려가 있지만, 이번 베트남 증설이 중장기적인 성장 가시성을 높여줄 것으로 기대하고 있어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 공장이 완성되어 8개 생산 라인을 모두 갖추게 되면, 전체 생산 능력(CAPA)이 지금보다 28% 정도 늘어",
          "body_chars": "3372",
          "link": "https://m.stock.naver.com/research/company/98114",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "IBK투자증권",
          "title": "[IBK투자증권] 코스맥스 3Q26 Review: 계절성 사라진 역대급 실적",
          "easy1_title": "코스맥스가 계절을 타지 않고 역대급 실적을 냈습니다",
          "easy1_desc": "코스맥스가 3분기에 매출 8,758억 원과 영업이익 833억 원을 기록하며 시장의 기대치를 크게 뛰어넘는 성적을 거뒀는데요. 원래 화장품 업계는 계절에 따라 실적 변화가 큰 편인데, 이번에는 그런 계절적 비수기 영향 없이 실적이 아주 좋았다는 말이에요. 국내 법인에서 고마진 제품이 잘 팔리고 해외에서도 주문이 늘어난 덕분인데, 쉽게 말하면 국내외에서 모두 장사를 아주 잘했다는 겁니다.",
          "easy2_title": "앞으로 더 잘 나갈 것 같아서 목표주가를 확 올렸습니다",
          "easy2_desc": "증권사는 코스맥스의 투자의견을 매수로 유지하면서 목표주가를 기존 250,000원에서 390,000원으로 56% 높여 잡았는데요. 내년에도 생산 능력을 키워 수주가 늘어날 것으로 보이고, 특히 고기능성 화장품 비중이 커지면서 수익성도 더 좋아질 것으로 예상하기 때문이에요. 목표주가를 높인 건 그만큼 회사의 성장 가능성을 높게 평가한다는 뜻인데, 대신 담당자의 전망이 실제 결과와는 다를 수 있다는 점도 알아두어야 합니다.",
          "topic": "코스맥스의 3분기 실적이 시장의 예상을 크게 웃돌았으며, 이에 따라 증권사는 향후 성장성을 반영해 목표주가를 상향 조정했습니다.",
          "points": [
            "국내 법인의 성장세: 국내 법인은 주요 고객사의 온라인 프로모션과 해외 유통망 확대로 매출과 영업이익이 크게 늘었습니다. 특히 에센스나 미스트처럼 마진이 높은 제품이 잘 팔리면서 수익성도 함께 개선됐다는 분석이에요. 뭔 소리냐면, 많이 팔기도 했지만 비싼 제품 위주로 팔아서 남는 돈도 많아졌다는 말입니다.",
            "해외 법인의 실적 차별화: 해외 법인은 지역별로 성과가 조금씩 달랐는데요. 미국 법인은 인디 브랜드의 주문이 급증하며 매출이 88.2% 성장하고 적자 폭도 크게 줄어든 반면, 중국 법인은 매출은 늘었지만 여전히 순손실을 기록하며 적자가 이어졌다는 거예요. 쉽게 말하면 미국은 잘 나가고 있지만 중국은 아직 회복 중인 셈입니다.",
            "목표주가 상향 근거: 증권사는 2027년 실적 추정치를 높이면서 목표주가 산출 기준이 되는 배수(Target PER)를 기존 18.5배에서 21.23배로 올렸습니다. 내년 생산 능력 확대와 K뷰티 시장 확장이 실적에 긍정적일 것으로 봤기 때문인데요. 고기능성 제품 비중이 늘어나는 것도 수익성을 높이는 요인이라고 설명했습니다."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "easy2 근거 원문에 없음",
          "body_chars": "11934",
          "link": "https://m.stock.naver.com/research/company/98113",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권] 이마트 3Q26 Re: 커지는 계열사 불확실성",
          "easy1_title": "본사는 잘나가는데 계열사 때문에 실적이 깎였어요",
          "easy1_desc": "이마트 본사 자체는 할인점과 트레이더스 같은 주요 사업이 고루 성장하면서 영업이익이 1,660억원으로 턴어라운드에 성공했거든요. 그런데 스타벅스코리아와 신세계건설에서 큰 영업손실이 발생하면서 전체 실적을 갉아먹은 셈이에요. 쉽게 말하면 본업은 튼튼한데 가족 회사들의 부진이 발목을 잡고 있는 상황이라는 말이에요.",
          "easy2_title": "계열사 불확실성이 커서 목표주가를 낮췄어요",
          "easy2_desc": "신세계건설의 영업손실 규모를 가늠하기 어렵고 계열사 실적에 대한 불확실성이 여전히 크다고 봤거든요. 그래서 증권사는 이마트의 목표주가를 기존 8.2만원에서 7만원으로 내리기로 했습니다. 계열사 문제가 해결될 때까지는 보수적으로 접근하는 게 좋겠다는 의견이에요.",
          "topic": "이마트의 3분기 실적이 계열사 부진으로 인해 시장 기대치를 크게 밑돌면서 향후 실적 불확실성이 커졌다는 분석이에요.",
          "points": [
            "본사 실적 턴어라운드: 할인점과 트레이더스, 전문점 등 본사 사업부문은 매출이 각각 10%, 17%, 8%씩 성장하며 실적 회복세를 보였습니다. 별도 기준 영업이익은 1,660억원으로 전년 대비 46% 증가하며 좋은 흐름을 이어갔거든요.",
            "계열사 실적 부진: 하지만 스타벅스코리아가 453억원의 영업손실을 냈고, 신세계건설은 부산 및 구리갈매 할인 분양 대손충당금 영향으로 989억원의 영업손실을 기록했습니다. 이 계열사들의 손실이 전체 연결 실적을 끌어내린 주요 원인으로 작용했다는 거예요.",
            "향후 실적 전망: 증권사는 신세계건설의 연간 영업손실 규모를 전년 수준인 1,900억원 정도로 가정하는 것이 합리적이라고 봤습니다. 4분기 연결 순매출은 전년 대비 2% 감소하고 영업이익은 481억원으로 흑자 전환할 것으로 추정하고 있어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "13605",
          "link": "https://m.stock.naver.com/research/company/98112",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권] 네오위즈 2027년 신작 정보 공개 예정",
          "easy1_title": "올해는 신작을 준비하는 기다림의 시간입니다",
          "easy1_desc": "네오위즈는 2026년 영업수익 4,262억원과 영업이익 371억원을 기록할 것으로 보이는데요, 올해는 연초부터 예고된 대로 신작을 준비하며 기다리는 시기라는 말이에요. 신작 개발이 본격화되면서 외주 비용이 늘어난 영향도 있는데, 이런 비용은 2027년과 2028년에 걸쳐 점차 증가할 것으로 증권사는 봤습니다. 쉽게 말하면 지금은 당장의 실적보다는 다음을 위한 준비를 하는 단계인 셈이에요.",
          "easy2_title": "2027년부터는 새로운 게임들의 정보가 공개됩니다",
          "easy2_desc": "2027년부터는 퍼블리싱 라인업인 울프아이 스튜디오와 자카자네 스튜디오의 신작, 그리고 자체 개발 중인 라이프 시뮬레이션 프로젝트 CF의 정보가 공개될 예정인데요, 증권사는 울프아이 스튜디오 신작의 2027년 하반기 출시를 예상하고 있습니다. 이미 팬덤을 확보한 P의 거짓 차기작에 대한 정보도 2027년에 공개될 것으로 기대하고 있거든요. 정보가 공개되면 이후 판매량에 대한 추정과 주가 변동이 나타날 것으로 증권사는 전망했습니다.",
          "topic": "네오위즈가 신작 개발을 통해 2027년 이후 리레이팅(기업 가치 재평가)을 기대하고 있다는 분석입니다.",
          "points": [
            "3분기 실적 컨센서스 부합: 네오위즈의 3분기 영업수익은 1,105억원, 영업이익은 96억원으로 시장의 기대치인 컨센서스에 부합했는데요, PC와 콘솔 부문에서는 P의 거짓 닌텐도 스위치2 버전 출시와 셰이프 오브 드림즈 판매로 전분기 대비 반등에 성공했습니다. 모바일 부문도 브라운더스트2의 콜라보 매출과 8월 출시한 킹덤2가 더해지며 전분기 대비 성장했다는 분석입니다.",
            "신작 라인업과 P의 거짓 성과: P의 거짓은 DLC(다운로드 가능한 콘텐츠)를 포함해 누적 판매량 500만장을 달성한 것으로 추정되는데요, 네오위즈는 내러티브를 중심으로 시리즈 1과 DLC, 그리고 차기작으로 이어지는 이상적인 과정을 밟고 있습니다. 현재 PC와 콘솔을 중심으로 IP(지식재산권)화할 수 있는 라인업을 다수 보유하고 있다는 점은 높은 멀티플을 받을 수 있는 요건이라고 증권사는 판단했습니다.",
            "투자의견 유지 및 목표주가 하향: 증권사는 네오위즈에 대해 투자의견 Buy를 유지했지만, 목표주가는 26,000원으로 하향 조정했는데요, 이는 국내 게임 섹터가 소외되면서 전반적인 멀티플이 하락한 영향을 이겨내지 못했기 때문입니다. 신작 라인업을 준비하는 시기라 전년 대비 역성장이 불가피했다는 점도 반영된 결과라고 증권사는 설명했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 네오위즈는 2026년 영업수익 4,262억원과 영업이익 371억원을 기록할 것으로 보이는데요, 올해는 연초부; 예측 의심: 이미 팬덤을 확보한 P의 거짓 차기작에 대한 정보도 2027년에 공개될 것으로 기대하고 있거든요.",
          "body_chars": "10086",
          "link": "https://m.stock.naver.com/research/company/98111",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권] NC 호라이즌, 기다릴게",
          "easy1_title": "3분기 영업이익은 예상보다 잘 나왔는데 매출은 조금 아쉬웠어요",
          "easy1_desc": "NC가 3분기에 영업이익 1,196억원을 기록하면서 시장의 기대치를 넘어섰는데요, 매출은 예상보다 조금 부진했지만 비용을 효율적으로 쓴 덕분이라는 거예요. PC 부문의 리니지 클래식은 일매출 18억원 수준을 유지하며 안정적인 모습을 보였거든요. 반면 모바일 부문은 경쟁작들이 많이 나오면서 매출이 계속 줄어드는 추세라는 말이에요.",
          "easy2_title": "이제는 아이온2를 넘어설 새로운 대작 게임이 필요한 시점이에요",
          "easy2_desc": "증권사는 NC가 올해 리니지 클래식이나 아이온2 이상의 성과를 내야 확실한 성장을 기대할 수 있다고 봤는데요, 아이온2 글로벌의 매출 추정치를 낮춘 것도 스팀 트래픽 감소와 한국 및 대만에서의 매출 하락을 반영한 결과라는 거예요. 그래서 시장은 아이온2 다음으로 나올 대작인 호라이즌 스틸 프론티어즈를 기다리고 있는 셈이에요. 신작들이 성과를 내야 기존 게임들의 하락세를 메울 수 있다는 말입니다.",
          "topic": "NC의 3분기 실적을 평가하고 향후 신작을 통한 성장 가능성을 분석한 내용이에요.",
          "points": [
            "3분기 실적과 비용 효율화: NC는 3분기에 영업이익 1,196억원을 기록하며 컨센서스를 상회했는데, 이는 매출 부진에도 불구하고 마케팅비 등 영업비용을 효율적으로 집행했기 때문이에요. PC 부문은 리니지 클래식이 안정적인 흐름을 보였지만, 모바일 부문은 경쟁작 출시 영향으로 매출이 감소세를 보이고 있거든요.",
            "신작 성과와 성장 전략: 증권사는 NC가 성장 곡선을 뚜렷하게 만들기 위해서는 올해 리니지 클래식과 아이온2 이상의 성과를 내는 신작들이 필요하다고 봤어요. 특히 2027년에 출시될 아스트라에 오라티오와 호라이즌 스틸 프론티어즈의 성과가 중요하다고 판단했거든요. 나머지 신작들은 정보가 부족해 추정치에서 제외했다는 겁니다.",
            "투자의견과 향후 전망: 증권사는 NC에 대해 투자의견 Buy를 유지했지만 목표주가는 320,000원으로 하향 조정했어요. 다만 게임 산업 내에서 Top Pick 지위는 유지했는데요, 신작 출시 전까지는 안정적인 실적과 M&A 및 주주환원 기대감이 주가를 방어할 것으로 봤다는 거예요. 쉽게 말하면 방어주로서의 역할도 충분히 할 수 있다는 말입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "11760",
          "link": "https://m.stock.naver.com/research/company/98110",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권] JYP Ent. 재차 확인된 스트레이키즈의 높은 서구권 팬덤",
          "easy1_title": "스트레이키즈의 서구권 인기가 실적을 든든하게 받쳐주고 있어요",
          "easy1_desc": "스트레이키즈가 서구권에서 큰 인기를 끌면서 회사 실적에 큰 보탬이 되고 있다는 분석이에요. 실제로 3분기 매출과 영업이익이 시장 예상치를 뛰어넘었는데요, 스트레이키즈의 앨범 판매와 콘서트 모객이 아주 좋았기 때문이에요. 덕분에 증권사는 2027년 예상 실적을 반영해 목표주가를 55,000원으로 올렸다는 겁니다.",
          "easy2_title": "이제는 신인 그룹이 얼마나 잘해줄지가 관건이에요",
          "easy2_desc": "기존 아티스트들의 군 입대나 재계약 이슈 때문에 앞으로의 성장이 제한적일 수 있다는 우려도 있는데요, 그래서 내년에 데뷔할 신인 그룹들의 성과가 아주 중요해졌다는 거예요. 1월에 4인조 남자 그룹인 오브더블루가 데뷔를 앞두고 있는데, 이들이 흥행에 성공한다면 회사에 대한 평가도 다시 해볼 수 있다는 입장이에요. 쉽게 말하면, 새로운 얼굴들이 얼마나 빨리 자리를 잡느냐가 핵심이라는 말이에요.",
          "topic": "JYP Ent.의 현재 실적 상황과 향후 성장을 위한 신인 그룹 데뷔의 중요성을 분석했어요.",
          "points": [
            "3분기 실적 호조: 3분기 매출액은 2,675억 원, 영업이익은 480억 원을 기록하며 시장의 기대치를 넘어서는 성적을 냈어요. 스트레이키즈의 앨범 판매와 콘서트, 그리고 남미 페스티벌 출연료 수익이 크게 기여한 덕분이에요. 다만 영업외적으로는 원화 강세 때문에 외화환산손실이 반영되면서 순이익은 다소 부진했다는 점도 함께 봐야 해요.",
            "아티스트 활동과 성장 제약: 스트레이키즈의 월드 투어 규모는 커지고 있지만, 멤버의 군 입대와 트와이스의 일부 멤버 재계약 무산으로 인해 장기적인 성장 동력은 다소 제한적인 상황이에요. 2~3년에 한 번 완전체 활동을 한다고 가정하면, 지금 당장은 새로운 성장 모멘텀이 필요한 시기라는 겁니다.",
            "신인 그룹 데뷔의 중요성: 이런 상황을 타개하기 위해 내년 1월 11일에 신인 남자 그룹 오브더블루가 데뷔할 예정이에요. 내년 상반기에는 4대 기획사 모두 남자 그룹을 내놓을 것으로 보여 경쟁이 치열하겠지만, 그만큼 흥행 모멘텀을 확인할 수 있는 좋은 기회라고 증권사는 봤어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "9941",
          "link": "https://m.stock.naver.com/research/company/98109",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권] 코오롱인더 유가 안정화 이후 성장성 부각될 것",
          "easy1_title": "원재료 값은 올랐는데 제품 값은 못 올려서 실적이 좀 줄었어요",
          "easy1_desc": "코오롱인더의 3분기 영업이익을 확인해 봤더니 402억원으로 시장 기대치보다 18% 낮게 나왔는데요. 이게 왜 그런 거냐면 원재료 가격은 급등했는데 제품 가격에 반영되는 건 뒤로 밀리는 역래깅 효과 때문이라는 거예요. 쉽게 말하면 물건을 만드는 비용은 비싸졌는데 정작 파는 가격은 그만큼 못 올린 셈이에요.",
          "easy2_title": "유가만 안정되면 다시 성장할 힘이 충분하다고 봐요",
          "easy2_desc": "증권사는 코오롱인더의 목표주가를 6만원으로 낮췄지만 매수 의견은 그대로 유지했는데요. 유가가 안정되는 2027년부터는 필름 출하량이 늘고 공장 가동이 본격화되면서 실적이 좋아질 것으로 봤기 때문이에요. 당장은 실적 조정이 있을 수도 있다는 단점도 있지만, 회사의 근본적인 체력은 개선되고 있다는 장점도 있거든요.",
          "topic": "코오롱인더의 3분기 실적을 분석하고 앞으로의 성장 가능성을 전망한 리포트예요.",
          "points": [
            "3분기 실적 부진의 이유: 3분기 영업이익이 기대보다 낮았던 건 화학과 산업자재 등 거의 모든 사업부에서 이익이 줄었기 때문인데요. 원재료 가격이 오르는 속도를 제품 가격이 따라가지 못하는 역래깅 효과가 크게 작용했다는 말이에요.",
            "4분기 실적 전망: 4분기 영업이익은 385억원 정도로 전분기와 비슷한 수준이 될 것으로 증권사는 추정했는데요. 패션 부문에서 흑자가 나겠지만 화학과 산업자재 쪽에서 여전히 원가 부담이 이어지면서 전체 이익을 깎아먹을 것으로 봤기 때문이에요.",
            "2027년 이후의 성장 동력: 증권사는 2027년 유가가 안정되면 회사가 가진 여러 성장 카드가 빛을 발할 것으로 봤는데요. 필름 생산이 늘어나고 김천 2공장이 완전히 돌아가면서 이익에 기여할 것이라는 분석이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "12483",
          "link": "https://m.stock.naver.com/research/company/98108",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권] 동원산업 3Q26 Re: 원양 및 국내 가공 부진",
          "easy1_title": "참치 가격이 오르면서 식품 사업 쪽 비용 부담이 커졌어요",
          "easy1_desc": "3분기 실적을 살펴봤더니 동원산업의 매출과 영업이익이 증권사 추정치보다 낮게 나왔거든요. 참치 가격이 톤당 1,950불까지 오르면서 동원F&B의 원가 부담이 커진 게 가장 큰 이유예요. 어획량까지 줄어들면서 별도 실적도 부진했는데요, 쉽게 말하면 참치캔을 만드는 데 드는 비용은 늘었는데 정작 잡은 참치는 적어서 수익성이 나빠진 셈이에요.",
          "easy2_title": "미국 사업과 건설 부문이 전체 실적을 겨우 지탱했어요",
          "easy2_desc": "식품 쪽 부진에도 불구하고 전체 연결 손익은 전년 수준을 유지했는데요, 스타키스트와 건설 부문에서 이익이 늘어난 덕분이에요. 스타키스트는 미국에서 가격을 미리 올리고 판촉을 효율적으로 바꾼 게 효과를 봤거든요. 건설 부문도 원가 관리를 잘해서 수익성이 좋아졌는데요, 다른 사업부의 부진을 이 두 곳이 메워준 셈이에요.",
          "topic": "동원산업의 3분기 실적은 식품 부문의 원가 부담으로 부진했으나, 해외 및 건설 부문의 선전으로 연결 손익은 전년 수준을 유지했다고 증권사는 분석했어요.",
          "points": [
            "식품 부문의 실적 쇼크: 동원F&B는 참치캔 원가 부담이 200억원 정도 늘어나면서 영업이익이 전년보다 86.9%나 줄어드는 실적 쇼크를 겪었어요. 원가가 오르면서 선물세트 가격 경쟁력까지 떨어져 판매가 부진했던 것으로 증권사는 판단했어요.",
            "스타키스트와 건설의 선방: 스타키스트는 환율 효과를 빼고 봐도 선제적으로 가격을 올린 전략이 주효해서 이익이 170억원 늘어났어요. 건설 부문도 철저한 원가 관리 덕분에 손익이 전년보다 89억원 개선되는 성과를 냈어요.",
            "주가 반등을 위한 과제: 현재 주가는 밸류에이션 부담이 적은 수준이지만, 주가가 추세적으로 오르려면 모멘텀이 필요하다고 증권사는 봤어요. 주주환원을 늘리거나 해외 사업을 넓히는 방안이 구체적으로 나와야 한다고 증권사는 설명했어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "10077",
          "link": "https://m.stock.naver.com/research/company/98107",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권] 티에프이 SoCAMM and beyond",
          "easy1_title": "주요 고객사에 부품 공급을 늘리면서 실적이 크게 좋아졌어요",
          "easy1_desc": "티에프이가 2026년 3분기에 매출 542억 원과 영업이익 150억 원을 기록하며 가파른 성장세를 보였는데요. 이는 주요 고객사로 나가는 SoCAMM(테스트 부품) 공급이 늘어난 덕분이에요. 상반기에 나갔던 성과급 같은 일회성 비용이 사라진 효과도 컸거든요. 쉽게 말하면, 핵심 제품이 잘 팔리면서 수익성이 눈에 띄게 개선된 셈이에요.",
          "easy2_title": "해외 고객사를 새로 확보하고 판가도 올려서 내년이 더 기대돼요",
          "easy2_desc": "증권사는 티에프이가 2027년에 매출 2,748억 원과 영업이익 781억 원을 낼 것으로 전망했는데요. 테스트 소켓(반도체 검사 부품) 가격을 올리고 해외 고객사를 새로 확보한 효과가 본격적으로 나타날 것이라는 분석이에요. 해외 사업장을 늘려 대응하겠다는 계획도 세웠거든요. 다만, 담당자의 판단이나 시장 상황에 따라 실적은 달라질 수 있다는 점도 같이 봐야 합니다.",
          "topic": "티에프이의 SoCAMM 공급 확대와 고객사 다변화에 따른 구조적 실적 성장 전망이에요.",
          "points": [
            "3분기 실적 개선: 2026년 3분기 매출은 작년 같은 기간보다 99% 늘어난 542억 원을 기록했어요. 영업이익은 150억 원으로 211%나 급증했는데요. SoCAMM 공급이 늘어난 것과 더불어 일반 DRAM 테스트 부품 수요도 꾸준히 이어지고 있다는 점이 긍정적이에요.",
            "해외 사업 확장 및 판가 인상: 증권사는 티에프이가 글로벌 빅테크 고객사의 1차 벤더(공급업체) 등록을 마쳤다고 봤어요. 원재료 가격 상승분을 반영해 테스트 소켓 가격을 올린 효과도 2026년 말부터 실적에 반영될 예정이에요. 2027년 하반기에는 해외 후공정 팹(공장) 증설에 맞춰 사업장 임대로 대응하겠다는 계획도 가지고 있어요.",
            "목표주가 상향 조정: 하나증권은 티에프이의 2027년 영업이익 추정치를 기존보다 43% 높여 잡았는데요. 이에 따라 목표주가를 11만 원으로 상향 제시했어요. 테스트 공정이 복잡해지면서 소켓 수요가 늘고 있고, 신공장 가동까지 더해져 구조적인 성장이 이어질 것으로 판단했기 때문이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "10380",
          "link": "https://m.stock.naver.com/research/company/98106",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권] 롯데에너지머티리얼즈 매출 YoY 증가 본격화",
          "easy1_title": "공장 새로 돌리느라 돈이 많이 나가서 실적이 좀 아쉬워요",
          "easy1_desc": "롯데에너지머티리얼즈가 3분기에 매출은 2,897억 원으로 꽤 늘었지만, 영업손실은 213억 원을 기록하며 9개 분기 연속 적자를 이어갔는데요. 이게 왜 그러냐면 말레이시아 5공장처럼 새로 가동을 시작한 공장에서 초기 비용과 감가상각비가 60억 원 넘게 발생했기 때문이에요. 쉽게 말하면, 미래를 위해 공장을 열심히 늘리는 과정에서 당장의 비용 부담이 커진 셈이라는 말이에요.",
          "easy2_title": "내년에는 물량도 늘고 가격도 올라서 흑자로 돌아설 것 같아요",
          "easy2_desc": "증권사는 2027년이 되면 ESS(에너지저장장치) 물량이 늘어나고 가공비도 오르면서 전사적으로 흑자전환이 가능할 것으로 봤는데요. 북미 시장에서 비중국계 업체가 드물다는 점이 큰 기회인데, 원통형 배터리 물량도 2026년 1,300톤에서 7,000톤 이상으로 크게 늘어날 전망이기 때문이에요. 적자가 계속되는 건 아쉽지만, 9개월 내에 흑자로 돌아설 가능성이 높다는 점을 긍정적으로 평가한 거예요.",
          "topic": "롯데에너지머티리얼즈의 3분기 실적을 분석하고 앞으로의 흑자전환 가능성을 전망한 리포트예요.",
          "points": [
            "3분기 실적 리뷰: 매출은 전년 동기 대비 102% 늘어난 2,897억 원을 기록했지만, 영업손실은 213억 원으로 적자가 지속됐는데요. 신규 공장 가동에 따른 초기 비용이 반영된 결과예요. 다만 자회사 에코월 지분을 팔면서 생긴 처분이익 1,111억 원 덕분에 순이익은 697억 원으로 흑자전환에 성공했다는 점은 눈여겨볼 만해요.",
            "4분기 실적 전망: 4분기에도 매출은 2,697억 원으로 전 분기보다 줄어들고, 영업손실은 427억 원으로 적자 폭이 더 커질 것으로 증권사는 예상했는데요. 환율이 떨어지면서 원화로 계산한 판매 가격이 낮아진 영향이 커요. 여기에 말레이시아 6공장을 새로 돌리면서 발생하는 일회성 비용 35억 원까지 더해지기 때문이에요.",
            "2027년 흑자전환 기대: 증권사는 2027년 3분기에 전사 흑자전환이 가능할 것으로 봤는데요. 북미 ESS 시장에서 전지박 수요가 늘고, AI 데이터센터용 회로박의 고부가 제품 비중이 60%까지 확대되면서 수익성이 개선될 것이라는 분석이에요. 이런 점들을 고려해 증권사는 목표주가 69,000원을 그대로 유지했어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "10851",
          "link": "https://m.stock.naver.com/research/company/98105",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권] 실리콘투 3Q26 Re: 환율 불확실성 해소 필요",
          "easy1_title": "환율 때문에 실적이 기대보다 낮게 나왔어요",
          "easy1_desc": "실리콘투가 3분기에 매출은 잘 나왔는데 영업이익은 시장 기대치에 못 미치는 성적표를 받았거든요. 그 이유를 따져봤더니 환율이 떨어진 영향이 컸다는 말이에요. 매출총이익률이 28.7%로 뚝 떨어진 데다 인건비와 운반비 같은 비용까지 늘어난 셈이에요. 쉽게 말하면, 외형은 커졌지만 환율이라는 복병 때문에 수익성이 나빠진 겁니다.",
          "easy2_title": "주가는 바닥이니 환율 불확실성만 풀리면 괜찮을 거예요",
          "easy2_desc": "증권사는 실리콘투의 목표주가를 4만원으로 낮췄지만, 지금 주가는 환율 영향을 고려해도 너무 많이 떨어진 상태라고 봤어요. 유럽과 미국은 물론 중남미와 일본으로 시장을 넓히고 있고, 메이저 유통업체 입점도 빨라서 산업 내 지위는 여전하다는 거예요. 환율 문제가 해결되면 주가 회복이 클 것으로 보인다는 말이에요. 쉽게 말하면, 지금은 저점 매수를 고민해 볼 만한 시기라는 겁니다.",
          "topic": "실리콘투의 3분기 실적 부진 원인과 향후 성장 가능성에 대한 증권사의 분석이에요.",
          "points": [
            "실적 부진의 원인: 매출은 유럽과 북미를 중심으로 잘 나왔지만 환율 하락이 수익성에 큰 타격을 줬거든요. 인건비가 70%나 늘었고 운반비 부담도 118% 증가한 데다 일회성 비용까지 반영됐다는 말이에요. 뭔 소리냐면, 매출은 늘었어도 비용이 더 크게 늘면서 이익률이 깎였다는 거예요.",
            "긍정적인 성장 지표: 재고자산이 19% 줄어든 건 유럽에서 물건이 잘 팔리고 있다는 신호로 보입니다. 톱10 브랜드 비중은 줄었지만 센텔리안24 같은 중소형 브랜드가 새로 들어오고 있는 건 긍정적이라는 거예요. 신규 법인 설립으로 관세 부담을 줄이고 일본 메이저 총판과 손잡는 등 지역 보폭을 넓히고 있거든요.",
            "향후 전망과 목표주가: 증권사는 4분기에도 매출은 견조할 것으로 보지만 환율 변동성이 완화되어야 이익률 회복이 가능하다고 봤어요. 실적 추정치를 조정하면서 목표주가를 5.2만원에서 4만원으로 내렸거든요. 하지만 한국 화장품 수출의 선봉장이라는 지위는 변함이 없다는 게 증권사의 판단이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 환율 문제가 해결되면 주가 회복이 클 것으로 보인다는 말이에요.",
          "body_chars": "11947",
          "link": "https://m.stock.naver.com/research/company/98104",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권] 코스맥스 3Q26 Re: 1등 기업의 화려한 성적표",
          "easy1_title": "코스맥스가 시장 기대를 뛰어넘는 엄청난 성적을 냈어요",
          "easy1_desc": "코스맥스가 3분기에 매출 8,758억원과 영업이익 833억원을 기록하며 시장 기대치를 훌쩍 넘겼는데요. 국내 본사는 물론 중국과 미국 법인까지 고루 성장하며 실적 개선을 이끌었다는 평가예요. 특히 국내 본사는 분기 매출 6천억원을 처음으로 돌파했는데, 이는 계절성을 타지 않고 꾸준히 잘 팔렸다는 뜻이거든요. 쉽게 말하면, 1등 기업다운 화려한 성적표를 받아든 셈이에요.",
          "easy2_title": "공장이 꽉 찼는데 증설까지 해서 앞으로가 더 기대돼요",
          "easy2_desc": "국내 공장 가동률이 85%를 넘어서 사실상 풀가동 상태였는데, 평택 1공장 증설이 일부 마무리되면서 생산에 숨통이 트였다고 해요. 덕분에 연말에는 국내 생산 능력이 11억개까지 늘어날 전망인데요. 주문은 계속 밀려드는데 생산 여력까지 확보했으니, 앞으로 실적 개선이 더 탄력을 받을 수도 있다는 겁니다.",
          "topic": "코스맥스가 글로벌 1위 화장품 제조자개발생산(ODM) 업체로서 실적 성장과 수익성 개선을 동시에 이뤄내고 있다는 분석이에요.",
          "points": [
            "글로벌 시장의 고른 성장: 국내 본사 매출이 61% 늘어난 것을 비롯해 미국 법인 매출도 88% 성장하며 실적을 견인했는데요. 동남아 법인 역시 실적 턴어라운드(실적 개선)를 이어가며 글로벌 전역에서 고른 성과를 냈다는 평가예요.",
            "수익성 개선과 생산 효율화: 고마진 기초 화장품 비중이 늘어나면서 수익성이 크게 좋아졌는데요. 증권사는 코스맥스가 생산 부족 문제를 미리 파악하고 초과근무와 아웃소싱을 적절히 활용해 경쟁사보다 더 나은 성과를 냈다고 봤어요.",
            "목표주가 상향과 밸류에이션 재평가: 증권사는 실적 추정치를 높이면서 목표주가를 42만원으로 올렸는데요. 현재 주가는 12개월 선행 주가수익비율(PER) 11.2배 수준인데, 앞으로 20배 이상으로 가치가 다시 평가받는 국면이 올 것으로 예상했어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "12923",
          "link": "https://m.stock.naver.com/research/company/98103",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "한화투자증권",
          "title": "[한화투자증권] 한화손해보험 가장 가파른 CSM 성장세",
          "easy1_title": "한화손해보험의 보험 수익성과 CSM 성장세가 돋보입니다",
          "easy1_desc": "한화손해보험의 3분기 실적을 살펴봤더니, 영업이익은 기대보다 낮았지만 보험 수익성과 CSM(보험계약마진) 성장세는 긍정적이라고 봤어요. CSM은 보험사가 미래에 얻을 이익을 미리 계산해 둔 지표인데, 상장사 중 가장 빠르게 늘고 있다는 말이에요. 쉽게 말하면, 당장의 영업이익은 조금 아쉬워도 미래의 수익 기반은 탄탄하게 다져지고 있다는 겁니다.",
          "easy2_title": "배당을 다시 시작하려면 제도적인 변화가 필요합니다",
          "easy2_desc": "한화손해보험은 이번 분기에 미처분잉여금이 줄어들면서 해약준비금을 쌓는 데 부족한 상황이 됐는데요, 이 때문에 배당을 다시 하려면 관련 제도가 완화되어야 한다고 증권사는 분석했어요. 배당 재개라는 목표를 이루기 위해선 제도 개선이 필수적이라는 말이에요. 회사가 수익을 내고는 있지만, 배당을 위해선 넘어야 할 문턱이 있다는 겁니다.",
          "topic": "한화손해보험은 보험 수익성 개선과 가파른 CSM 성장세를 바탕으로 업종 내에서 우수한 실적을 보이고 있습니다.",
          "points": [
            "3분기 실적 평가: 한화손해보험의 3분기 당기순이익은 961억 원으로 시장 기대치에 부합했지만, 영업이익은 8% 밑돌았다고 봤어요. 투자손익이 예상보다 100억 원 더 큰 적자를 낸 탓인데, 보험손익은 1,321억 원으로 크게 늘어 수익성이 좋아진 점은 긍정적이라는 겁니다.",
            "CSM 성장과 전망: 상장사 중 가장 가파른 CSM 성장세를 보이고 있어 CSM 상각익이 늘어나는 강점이 있다고 분석했어요. 연말에 감독당국의 가이드라인 반영으로 조정이 예상되지만, 증권사는 연간 15%의 CSM 증가율을 달성할 수 있을 것으로 내다봤습니다.",
            "향후 이익 추정 상향: 보험금 절감 효과가 예상대로 나타나고 있고 CSM 성장 우위가 계속되고 있어, 2027년 이익 추정치를 3% 올렸다고 밝혔어요. 업종 개선의 수혜를 크게 입을 것으로 보이며, 현재 주가 대비 상승 여력이 높다는 점을 들어 top pick(최선호주) 의견을 유지했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 업종 개선의 수혜를 크게 입을 것으로 보이며, 현재 주가 대비 상승 여력이 높다는 점을 들어 top pick",
          "body_chars": "9495",
          "link": "https://m.stock.naver.com/research/company/98102",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "한화투자증권",
          "title": "[한화투자증권] 실리콘투 환율 노이즈에 가려진 외형 성장",
          "easy1_title": "환율 때문에 실적이 좀 깎였지만 회사는 잘 크고 있어요",
          "easy1_desc": "실리콘투의 3분기 영업이익을 확인해 봤더니 696억 원으로 증권사가 예상했던 820억 원보다 낮게 나왔는데요. 이건 환율이 갑자기 크게 변하면서 매출총이익률이 3.3%p 낮아진 탓이거든요. 하지만 환율 영향을 빼고 보면 매출액은 예상치에 딱 맞았고, 유럽이나 북미 같은 곳에서 계속 잘 팔리고 있다는 말이에요. 쉽게 말하면 환율이라는 일시적인 문제 때문에 숫자가 조금 안 좋아 보일 뿐, 회사의 성장세는 여전하다는 겁니다.",
          "easy2_title": "목표주가는 낮췄지만 앞으로의 성장 가능성은 여전하다고 봐요",
          "easy2_desc": "증권사는 실리콘투의 목표주가를 기존 55,000원에서 46,000원으로 15% 낮췄는데요. 최근 주가가 떨어지면서 비슷한 업종의 주가 수준도 같이 내려간 걸 반영한 결과예요. 하지만 유럽과 CIS(독립국가연합)에서 매출이 크게 늘고 있고, 북미와 중남미에서도 새로운 시장을 잘 개척하고 있다고 봤거든요. 그래서 회사가 가진 경쟁력에 비해 현재 주가는 너무 낮게 평가받고 있다는 게 증권사의 분석이에요.",
          "topic": "실리콘투의 3분기 실적을 분석하고 환율 변동과 지역별 성장세를 바탕으로 향후 전망을 다루고 있어요.",
          "points": [
            "3분기 실적과 환율 영향: 3분기 매출액은 4,244억 원으로 작년보다 41.7% 늘었지만, 영업이익은 컨센서스(시장 예상치)를 밑돌았는데요. 환율 변동으로 인한 손실이 컸기 때문이에요. 다만 이 손실의 68% 정도는 실제로 돈이 나간 게 아니라 장부상으로만 계산된 환산손실이라는 점을 알아야 합니다.",
            "글로벌 지역별 매출 성장: 환율이 좋지 않았음에도 유럽과 CIS 지역은 50% 넘는 고성장을 이어갔는데요. 북미 지역도 새로운 채널들이 늘어나면서 2분기에 이어 성장세가 계속되고 있어요. 특히 중남미 매출은 작년보다 123.3%나 늘어나며 새로운 성장 동력이 됐다는 점이 눈에 띕니다.",
            "4분기 전망과 재고 상황: 증권사는 4분기 매출액을 4,299억 원으로 추정하고 있는데요. 해외에 물류 인프라를 넓히느라 비용이 좀 들겠지만, 환율 변동성이 줄어들면서 이익률은 전분기보다 나아질 것으로 봤어요. 재고 자산도 3,649억 원으로 전분기보다 19% 줄어들어 재고 부담도 한결 가벼워진 상태입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "10025",
          "link": "https://m.stock.naver.com/research/company/98101",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "한화투자증권",
          "title": "[한화투자증권] 코스맥스 의심할 필요 없지",
          "easy1_title": "코스맥스는 3분기에도 시장 기대치를 뛰어넘는 실적을 냈어요",
          "easy1_desc": "코스맥스의 2026년 3분기 연결 영업이익은 833억원으로, 시장에서 예상했던 780억원을 훌쩍 넘겼는데요. 한국 법인은 화장품 수출 호조에 힘입어 영업이익이 677억원을 기록했고, 중국과 미국 법인도 매출이 각각 26.4%, 88.2% 늘어나는 성과를 보였거든요. 쉽게 말하면, 국내외 모든 생산 거점에서 고르게 성장하며 수익성을 챙긴 셈이에요.",
          "easy2_title": "앞으로도 한국 화장품 수출의 승자독식은 계속될 것으로 보입니다",
          "easy2_desc": "증권사는 코스맥스가 R&D와 생산 인프라 같은 경쟁력을 갖추고 있어서, 한국 화장품 수출의 성과가 코스맥스로 집중되는 현상이 가속화되고 있다고 봤는데요. 4분기에도 한국 법인 매출이 5,719억원으로 크게 늘어날 것으로 전망했거든요. 이런 성장세가 이어지면 주가도 한 단계 더 올라갈 가능성이 있다는 게 증권사의 판단이에요.",
          "topic": "코스맥스의 실적 성장세가 한국을 넘어 해외 주요 생산 거점까지 확산되고 있다는 점을 긍정적으로 평가했어요.",
          "points": [
            "3분기 실적 호조: 한국 법인의 매출이 6,161억원으로 60.7% 늘어난 덕분에 전체 영업이익이 833억원을 기록했는데요. 중국은 신제품 출시와 신규 고객 유입으로 매출이 26.4% 증가했고, 미국도 인디 브랜드와의 협업 덕분에 88.2% 성장했거든요. 쉽게 말하면, 전 지역에서 고른 성장을 보여준 겁니다.",
            "4분기 성장 지속 전망: 증권사는 4분기 연결 매출액이 8,779억원, 영업이익은 728억원을 기록할 것으로 내다봤는데요. 특히 한국 법인의 매출 성장률이 화장품 수출 증가율보다 19%p 더 높을 정도로 경쟁력이 강하다고 봤거든요. 성장이 멈추지 않고 계속될 것이라는 분석이에요.",
            "해외 법인의 확장성: 2027년에는 연결 매출액이 3조 8,820억원까지 늘어날 것으로 증권사는 추정했는데요. 미국 법인의 영업이익률 목표를 한 자릿수 후반으로 잡을 만큼 해외 성장세도 뚜렷하다고 봤거든요. 한국의 경쟁력이 해외에서도 그대로 통하고 있다는 뜻이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "11957",
          "link": "https://m.stock.naver.com/research/company/98100",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "DS투자증권",
          "title": "[DS투자증권]  중희토 규제가 촉발할 고감속 전환",
          "easy1_title": "미국이 중국산 자석을 막으니 로봇 설계도 바뀝니다",
          "easy1_desc": "미국이 국방 조달에서 중국산 자석 사용을 제한하면서 휴머노이드 로봇 설계에도 비상이 걸렸는데요. 기존의 저감속 방식은 모터 발열 때문에 중희토류 자석이 꼭 필요한데, 중국의 수출 규제로 조달이 어려워졌거든요. 그래서 증권사는 로봇 제조사들이 모터 발열을 줄일 수 있는 고감속 방식으로 설계를 바꿀 수밖에 없다고 봤습니다. 쉽게 말하면, 자석 구하기가 힘드니 아예 자석을 덜 쓰는 구조로 로봇을 다시 짜고 있다는 겁니다.",
          "easy2_title": "국내 부품사들이 새로운 기회를 잡을 것으로 보입니다",
          "easy2_desc": "이런 설계 변화는 국내 로봇 부품 업체들에게는 오히려 기회가 될 것으로 보이는데요. 고감속 방식으로 전환하면 유성 기어 같은 부품 수요가 크게 늘어나는데, 국내 업체들은 이미 이 분야의 공급망을 잘 갖추고 있거든요. 특히 초소형 기어나 센서 분야에서 가격 경쟁력을 확보한 국내 기업들이 비중국 시장 점유율을 높일 수 있다고 증권사는 분석했습니다. 다만, 실제 수주로 이어지려면 글로벌 고객사의 양산 검증을 통과해야 한다는 점도 함께 언급했습니다.",
          "topic": "미국의 대중국 자석 규제가 휴머노이드 로봇의 설계 변화를 이끌고 있으며, 이에 따른 국내 부품사의 수혜 가능성을 분석했습니다.",
          "points": [
            "다리 관절의 고감속 전환: 중희토류 자석 조달이 어려워지면서 서방 로봇 제조사들은 다리 관절을 고감속 방식으로 바꾸고 있는데요. 고감속 관절은 모터 발열이 적어 중희토류 자석을 쓰지 않아도 되기 때문입니다. 증권사는 2030년까지 비중국 고감속 유성 수요가 연평균 160% 성장할 것으로 추정했습니다.",
            "핸드 구동 방식의 변화: 로봇 손(핸드)은 전완 텐던 방식에서 직결 구동 방식으로 이동하고 있습니다. 직결 방식은 정비성이 좋고 소형화에 유리해 고감속을 주로 채택하는데요. 이 과정에서 필요한 초소형 기어와 센서 수요가 늘어날 것으로 보입니다.",
            "국내 공급망의 구조적 수혜: 증권사는 로보티즈와 한국피아이엠을 최선호주로 제시했습니다. 로보티즈는 유성 관절과 직결 핸드 액추에이터를 모두 공급하며, 한국피아이엠은 초소형 기어 공급 부족의 수혜를 입을 것으로 봤습니다. 다만 모멘텀은 12월 국방수권법 조정과 CES 2027 전후의 양산 사양 공개에 달려 있다고 밝혔습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 이런 설계 변화는 국내 로봇 부품 업체들에게는 오히려 기회가 될 것으로 보이는데요.; 예측 의심: 이 과정에서 필요한 초소형 기어와 센서 수요가 늘어날 것으로 보입니다.; 긴 원문 — 앞 30000자만 읽음(전체 88837자)",
          "body_chars": "88837",
          "link": "https://m.stock.naver.com/research/industry/46980",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권]  미국 토큰주식 시장 업데이트",
          "easy1_title": "미국 토큰증권 시장에서 제3자 발행을 두고 기업들이 반대하고 있어요",
          "easy1_desc": "미국 증권거래위원회(SEC)가 토큰증권 거래를 한시적으로 허용했는데, 정작 기업들은 제3자가 자기들 주식을 마음대로 토큰화하는 것에 반대하고 나섰거든요. 기존 주식과 똑같은 권리를 보장하는 모델을 추진하다 보니, 발행 기업의 동의가 꼭 필요하다는 목소리가 커진 겁니다. 쉽게 말하면, 내 주식을 남이 멋대로 토큰으로 만들어 거래하는 건 싫다는 기업들의 반발이 거세진 셈이에요.",
          "easy2_title": "기존 거래소들은 전통 증권과 토큰증권을 함께 굴리려 합니다",
          "easy2_desc": "뉴욕증권거래소(NYSE)나 나스닥(NASDAQ) 같은 기존 거래소들은 전통적인 주식 시장의 틀 안에서 토큰증권을 함께 거래할 수 있는 시스템을 만들고 있어요. 예탁결제기관인 DTCC도 증권을 토큰으로 바꾸는 서비스를 시작했는데요, 이렇게 하면 전통 증권과 토큰증권 사이의 전환이 쉬워져서 시장이 더 커질 것으로 증권사는 보고 있습니다. 쉽게 말하면, 새로운 기술을 도입하되 기존 금융 시스템의 안정성을 그대로 가져가겠다는 전략인 겁니다.",
          "topic": "미국 토큰증권 시장이 제도화되는 과정에서 나타나는 기업들의 이견과 기존 금융기관들의 인프라 구축 현황을 정리했어요.",
          "points": [
            "제3자 토큰화와 기업의 반발: NYSE와 OKX가 추진하는 토큰주식 플랫폼에서 대상 기업 62개 중 56개가 반대 의사를 밝혔는데요. 기존 주식과 동일한 의결권 등을 보장하는 모델이다 보니, 발행 기업의 사전 동의가 반드시 필요하다는 의견이 힘을 얻고 있습니다.",
            "거래소별 토큰화 인프라 구축: NYSE는 블록체인 기반의 결제 인프라를 결합한 디지털 거래 플랫폼을 준비 중이고, 나스닥은 주주권을 유지하는 NET 모델을 개발하고 있어요. 두 거래소 모두 기존 주식과 토큰주식을 같은 주문장에서 거래할 수 있도록 규정을 정비하고 있습니다.",
            "DTCC의 토큰화 서비스 본격화: 예탁결제기관인 DTCC는 증권을 토큰으로 전환하는 서비스를 출시해 금융기관들과 이용 계약을 맺었어요. 이 서비스는 전통 증권과 토큰증권 간의 상호 전환을 지원하며, 향후 유동성 연계가 원활해지면 시장의 문제점들도 일부 완화될 것으로 증권사는 전망했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "3995",
          "link": "https://m.stock.naver.com/research/industry/46979",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권]  안에서 못 버는 중국차, 밖으로 나간다",
          "easy1_title": "중국 안에서 차가 안 팔리니 밖으로 눈을 돌리고 있어요",
          "easy1_desc": "중국 자동차 시장이 7개월 연속으로 20% 넘게 줄어들면서 내수 시장이 아주 힘든 상황이에요. 내연기관차는 물론이고 신에너지차까지 수요가 줄어들면서 산업 전체의 수익성도 크게 떨어졌거든요. 그래서 중국 자동차 업체들은 가동률을 유지하고 이익을 내기 위해 해외 수출을 계속 늘리고 있는 중입니다. 쉽게 말하면, 안에서 못 버는 돈을 밖에서 채우려는 전략인 셈이에요.",
          "easy2_title": "수출을 늘리면서 해외 시장 점유율도 빠르게 오르고 있어요",
          "easy2_desc": "중국산 신에너지차의 해외 시장 점유율은 2025년 15.8%에서 2026년 9월 27.8%까지 급등했는데요. 특히 11월에는 유럽연합(EU)의 하이브리드 수입 쿼터 규제 전에 물량을 밀어내려는 수출이 급증할 것으로 보입니다. 또한 중국 업체들은 동남아나 유럽 등에 현지 공장을 지어 생산 거점도 넓히고 있거든요. 수출이 가동률과 이익을 동시에 떠받치는 구조가 되었다는 말이에요.",
          "topic": "중국 자동차 시장의 내수 부진과 이를 타개하기 위한 수출 확대 전략에 대한 분석이에요.",
          "points": [
            "중국 내수 시장의 침체: 중국 자동차 소매판매는 10월 기준으로 작년보다 27% 줄어들며 7개월째 20%대 감소세를 보이고 있어요. 내연기관차의 부진이 특히 심각한데, 이는 고유가와 정책적인 보조금 축소 등이 겹친 결과라고 봤습니다. 소비심리가 회복되기 전까지는 이런 낮은 수요가 계속될 것으로 전망했어요.",
            "수출 중심의 수익 구조 변화: 내수가 죽으니 수출이 그 자리를 대신하고 있는데요. 10월 신에너지차 수출은 작년보다 145%나 늘었고, 이제 신에너지차 도매 판매 3대 중 1대는 수출 물량이에요. 수출이 공장 가동률과 기업의 이익률을 모두 지탱하는 핵심 동력이 되었다는 분석입니다.",
            "현대차·기아에 미치는 영향: 현대차와 기아의 10월 중국 판매량도 작년보다 44% 줄어들며 부진한 모습이에요. 하지만 이미 중국 시장에서 차지하는 비중이 매우 낮기 때문에 전체 주가에 미치는 영향은 미미하다고 봤습니다. 앞으로는 중국 밖의 시장에서 경형·소형 전기차 경쟁력을 증명하는 것이 중요하다고 평가했어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 특히 11월에는 유럽연합(EU)의 하이브리드 수입 쿼터 규제 전에 물량을 밀어내려는 수출이 급증할 것으로 보; 긴 원문 — 앞 30000자만 읽음(전체 40702자)",
          "body_chars": "40702",
          "link": "https://m.stock.naver.com/research/industry/46978",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권]  AI 수요대비 부족한 공급 능력",
          "easy1_title": "반도체 만드는 공장이 2027년부터 늘어나요",
          "easy1_desc": "삼성전자와 SK하이닉스 같은 주요 기업들이 2027년에 새로운 공장을 열고 생산 시설을 늘릴 계획이에요. 공장을 짓는 건 2027년부터 시작하지만, 실제로 반도체가 만들어져서 시장에 나오는 건 2028년 이후가 될 것으로 봤어요. 그래서 지금 투자를 시작해도 당장 공급이 확 늘어나는 건 아니라는 말이에요.",
          "easy2_title": "AI 데이터센터 수요가 공급보다 훨씬 많아요",
          "easy2_desc": "AI를 돌리는 데이터센터가 2027년까지 엄청나게 늘어날 예정인데, 이걸 다 채우기에는 GPU 같은 반도체 공급이 부족한 상황이에요. 엔비디아나 AMD 같은 회사들이 열심히 만들고 있지만, 고객들이 원하는 만큼의 데이터센터를 다 짓기에는 역부족이라고 봤거든요. 그래서 구글의 TPU 같은 다른 반도체들이 이 부족한 부분을 얼마나 채워줄지가 중요한 변수가 될 거라는 겁니다.",
          "topic": "AI 데이터센터 수요가 급증하면서 반도체 공급이 부족한 상황이 이어지고 있고, 이에 따라 반도체 업체들은 생산 능력을 키우고 차세대 공정 기술을 도입하고 있어요.",
          "points": [
            "글로벌 반도체 생산 능력 확대: 삼성전자와 SK하이닉스 등 주요 메모리 업체들이 2027년 신규 공장 가동을 목표로 생산 능력을 키우고 있어요. 다만 장비 반입과 셋업에 시간이 걸리기 때문에 실제 공급이 늘어나는 건 2028년 이후가 될 것으로 봤습니다.",
            "AI 데이터센터 수요와 공급 불균형: 2027년 데이터센터 수요는 27GW 수준으로 전망되는데, 엔비디아와 AMD의 GPU 생산 능력만으로는 이를 다 감당하기 어렵다고 봤어요. 그래서 구글의 TPU와 같은 주문형 반도체(ASIC)가 데이터센터 구축의 중요한 변수가 될 것으로 봤다는 거예요.",
            "차세대 공정 전환과 장비 업체 수혜: 반도체 미세화 한계를 극복하기 위해 3D DRAM이나 고단화 낸드 같은 차세대 공정으로 전환이 빨라지고 있어요. 이런 기술 변화는 관련 장비와 소재 업체들에게 중장기적인 성장 기회가 될 것으로 봤습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "긴 원문 — 앞 30000자만 읽음(전체 126414자)",
          "body_chars": "126414",
          "link": "https://m.stock.naver.com/research/industry/46977",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권]  호재가 많아지는 국면",
          "easy1_title": "스페이스X가 통신 시장에 뛰어들면서 장비 업체들에 기회가 생겼어요",
          "easy1_desc": "스페이스X가 퀄컴과 손잡고 5G 망을 구축하기로 했는데요, 기존 통신사들이 망 임대를 거절하자 직접 지상망 투자에 나선 겁니다. 이게 왜 중요하냐면, 스페이스X가 2027년 4월 주파수 경매에 참여하고 시장에 본격적으로 진출하면 국내 통신장비 업체들에 큰 호재가 될 수 있기 때문이에요. 중국 부품을 쓰지 않는 상황에서 대안이 마땅치 않은 글로벌 시장 특성상, 국내 업체들이 삼성전자나 에릭슨을 통해 스페이스X 공급망에 들어갈 가능성이 충분하다고 봤거든요.",
          "easy2_title": "금리가 내려가면서 통신주 투자 매력이 다시 커지고 있어요",
          "easy2_desc": "국고채 5년 금리가 9월 4.2%에서 11월 3.8%로 떨어지면서 통신주에 긍정적인 환경이 만들어졌는데요, 금리가 낮아지면 배당 수익을 기대하는 투자자들의 매수세가 들어오기 쉬워지거든요. 현재는 기대 배당 수익률 5% 수준에서 접근하지만, 2027년에는 3% 수준에서도 매수가 들어올 것으로 증권사는 예상했어요. 연말 이후 장기적인 이익 성장에 대한 신뢰가 쌓이고 금리 하락까지 겹치면서 통신사들의 시가총액이 늘어날 거라는 기대감이 높아진 셈이에요.",
          "topic": "스페이스X의 통신 시장 진출과 금리 하락이라는 두 가지 호재가 통신 서비스 및 장비 업종에 긍정적인 영향을 미치고 있다는 분석입니다.",
          "points": [
            "스페이스X의 지상망 진출: 스페이스X가 퀄컴과 협력해 5G 망 구축에 나선 건 초저지연과 저전력 기술이 필수적인 피지컬 AI 산업을 겨냥한 행보인데요, 기존 통신사와의 협력이 어려워지자 직접 주파수 경매에 참여하며 독자적인 지상망 확보에 속도를 내고 있다는 분석이에요.",
            "국내 통신장비 업체 수혜: 글로벌 시장에서 중국 장비를 배제하는 흐름이 이어지면서 국내 무선 통신장비 업체들의 기술력과 시장 점유율이 부각되고 있는데요, 증권사는 삼성전자나 에릭슨을 통한 스페이스X 공급망 진입 가능성을 높게 보며 관련 업체들에 대한 매수를 추천했어요.",
            "통신주 투자 전략: 통신 3사 중에서는 SKT를 최선호 종목으로 꼽았는데, 배당 정상화와 AI 데이터센터 가치가 주가 상승을 이끌 것으로 봤기 때문이에요. 통신장비주는 3분기 실적보다는 2027년 이후의 실적과 주파수 경매 이슈에 집중하며 비중을 확대하는 전략이 유효하다고 증권사는 조언했어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "19605",
          "link": "https://m.stock.naver.com/research/industry/46976",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "한화투자증권",
          "title": "[한화투자증권]  2027년 주요국 국방예산 점검과 방산업종 투자전략",
          "easy1_title": "국방 예산은 좀 불확실해도 군비 확장 흐름은 그대로예요",
          "easy1_desc": "미국이나 프랑스처럼 나라마다 사정이 달라 2027년 국방 예산이 얼마나 늘어날지는 아직 확실하지 않은 상황이에요. 하지만 미·중 간의 경쟁이 계속되는 한 군비 지출을 늘리는 큰 흐름은 변함없다고 증권사는 봤거든요. 쉽게 말하면, 당장 내년 예산 규모는 바뀔 수 있어도 전 세계가 국방비를 늘리는 구조적인 방향은 유지된다는 말이에요.",
          "easy2_title": "지금은 신규 수주 성과가 나올 때까지 기다리는 전략이 필요해요",
          "easy2_desc": "최근 방산 업종 주가가 약세를 보이는 건 국방 예산 증액 폭이 기대보다 작을 수 있다는 걱정 때문인데요. 증권사는 한국 방산 기업들이 추세적으로 다시 오르려면 새로운 수주를 따내는 게 가장 중요하다고 봤어요. 그래서 당장은 성과가 가시화될 때까지 기다릴 수 있는 기업에 집중하는 전략이 유효하다는 겁니다.",
          "topic": "2027년 주요국 국방 예산 편성 현황을 살펴보고, 이에 따른 방산 업종의 투자 전략을 분석한 내용이에요.",
          "points": [
            "국방 예산의 불확실성: 미국은 의회 권력 구조가 바뀌고 프랑스는 재정 상태가 나빠지면서 국방 예산 증액 규모가 줄어들 가능성이 있다고 증권사는 분석했어요. 하지만 전반적으로는 전년 대비 두 자릿수 증액을 추진하는 등 군비 지출 확대 기조는 여전하다고 봤거든요.",
            "지역별 방산 업종 주가 조정 원인: 유럽은 수주잔고는 많지만 생산능력이 부족해 실적이 기대에 못 미쳤고, 한국은 실적 성장세가 둔화하면서 유럽 경쟁사보다 부족한 수주잔고가 주가에 부담이 됐다고 증권사는 설명했어요. 미국 역시 높은 매출 규모에도 생산능력 부족과 수주잔고 제한이 부담으로 작용하고 있다는 거예요.",
            "투자 유망 기업 선정 기준: 증권사는 2027년에 이익이 늘어날 것으로 보이면서 밸류에이션(기업 가치 평가)이 과거 하단 수준이거나, 충분한 수주잔고를 가진 기업에 주목하라고 조언했어요. 구체적으로 한화에어로스페이스, 한국항공우주, LIG디펜스앤에어로스페이스를 언급하며 이들 기업의 실적 성장 전망치를 제시했거든요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "3915",
          "link": "https://m.stock.naver.com/research/industry/46975",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "한화투자증권",
          "title": "[한화투자증권]  10월 여수신: 조달 구조 개선은 아직 요원",
          "easy1_title": "은행들이 돈을 빌려주는 구조가 아직은 튼튼하지 않아요",
          "easy1_desc": "은행이 자금을 조달하는 구조를 살펴봤더니, 여전히 개선이 필요한 상태라고 증권사는 봤는데요. 은행이 돈을 빌려주는 여신보다 돈을 모으는 수신이 더 빠르게 늘어나야 안정적인데, 지금은 비용이 많이 드는 방식으로 돈을 모으고 있다는 거예요. 쉽게 말하면, 은행이 돈을 굴릴 준비가 아직은 덜 됐다는 말이에요.",
          "easy2_title": "기업 대출은 늘고 있지만 이자 마진은 지켜봐야 해요",
          "easy2_desc": "기업 대출은 법인을 중심으로 꾸준히 늘고 있는데, 은행의 이자 마진이 좋아지려면 조달 구조가 먼저 바뀌어야 한다고 증권사는 분석했어요. 환율 하락으로 자본 여력이 생기면 기업 대출 경쟁이 다시 치열해질 수도 있다는 건데요. 그래서 앞으로 은행들이 스프레드, 즉 대출과 예금의 금리 차이를 어떻게 관리할지 주목해야 한다는 겁니다.",
          "topic": "2026년 10월 예금은행의 여수신 동향을 분석하고 은행의 조달 구조와 대출 성장 흐름을 점검했어요.",
          "points": [
            "기업 및 가계 대출 동향: 기업 대출은 법인 중소기업과 대기업을 중심으로 꾸준히 늘고 있는데요. 가계 대출의 경우 주택 대출이 4월 이후 매달 3~4조원씩 늘며 회복세를 보이고 있고, 일반 대출도 전월보다 1.7조원 증가했다고 증권사는 설명했어요.",
            "수신 조달 구조의 변화: 은행의 총수신은 정기예금과 은행채를 중심으로 늘어났는데, 비용이 적게 드는 저원가성 수신 비중은 35.9%로 전년 같은 달보다 2%p 줄어들었어요. 은행채 비중은 2019년 초 이후 가장 커졌는데, 이는 조달 비용이 늘어나는 구조라는 거예요.",
            "향후 이자 마진 개선 과제: 은행의 이자 마진이 좋아지려면 조달 구조 개선과 환율 하락에 따른 기업 대출 경쟁 여부를 살펴봐야 한다고 증권사는 강조했어요. 현재는 조달 구조가 개선되지 않은 상황이라, 앞으로 대출과 예금 금리 차이인 스프레드에 관심이 쏠릴 것으로 봤다는 거예요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "4928",
          "link": "https://m.stock.naver.com/research/industry/46974",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "유안타증권",
          "title": "[유안타증권]  디지털 자산 Daily",
          "easy1_title": "비트코인이 7만 4천 달러에서 더 떨어지지 않고 버티고 있어요",
          "easy1_desc": "비트코인이 7만 4천 달러 부근에서 횡보하며 하방 안정세를 보이고 있는데요, 강제 매도 압력이 눈에 띄게 줄어든 덕분이에요. 실제로 24시간 청산 규모가 5천만 달러대로 급감했고, ETF 유출 속도도 사흘 전 4억 달러에서 3,900만 달러로 크게 줄어들었거든요. 쉽게 말하면, 급락을 부추기던 매도세는 어느 정도 소진된 셈이라는 말이에요.",
          "easy2_title": "주식 시장은 잘 나가는데 비트코인만 혼자 소외된 상황이에요",
          "easy2_desc": "요즘 엔비디아 같은 AI 관련주가 급반등하며 증시가 회복하고 있는데, 비트코인은 이 흐름에 올라타지 못하고 있어요. 증시와 따로 노는 디커플링 현상이 뚜렷한 건데, 매크로 환경까지 12월 금리 인상 가능성과 달러 강세로 우호적이지 않거든요. 쉽게 말하면, 시장 전체의 온기가 비트코인까지는 닿지 않고 있다는 뜻이에요.",
          "topic": "증권사는 비트코인이 단기적으로는 하방 압력을 받지만, 중장기적으로는 중립 및 강세 흐름을 유지할 것으로 분석했습니다.",
          "points": [
            "매도 압력 완화: 증권사는 비트코인의 강제 매도 압력이 뚜렷하게 둔화했다고 봤는데요, 24시간 청산 규모가 7일 평균의 0.38배 수준으로 한산해졌기 때문이에요. ETF 유출 속도 또한 급격히 줄어들면서 매도세가 소진되는 조짐이 나타나고 있다는 분석이에요.",
            "증시와의 디커플링: 증권사는 AI 관련주가 반등하며 나스닥이 회복하는 와중에도 비트코인은 200일 이동평균선을 시험하는 등 소외된 모습을 보였다고 지적했어요. 이러한 증시와의 디커플링은 크립토 시장 고유의 약세를 다시 한번 확인시켜 준다는 설명이에요.",
            "우호적이지 않은 매크로 환경: 증권사는 현재 매크로 여건이 비트코인에 우호적이지 않다고 봤는데요, 12월 금리 인상이 확실시되고 달러가 강세를 보이는 상황이기 때문이에요. 금 가격도 4천 달러를 밑돌고 있어 금리 완화나 약달러의 혜택을 기대하기 어려운 환경이라는 분석이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "7216",
          "link": "https://m.stock.naver.com/research/industry/46973",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "유안타증권",
          "title": "[유안타증권]  외국인 카지노 3사 10월 Monthly",
          "easy1_title": "국내 외국인 카지노 3사는 10월에도 실적 성장을 이어갔어요",
          "easy1_desc": "10월 국내 외국인 카지노 3사의 합산 드롭액(고객이 칩으로 바꾼 금액)은 1조 2,984억 원으로 전년 대비 6.1% 늘었고, 순매출은 1,739억 원으로 14.8% 증가했거든요. 반면 마카오 카지노 매출은 4개월 만에 가장 큰 폭으로 줄어들며 대조적인 모습을 보였는데요. 중국인 VIP 고객들의 베팅 심리가 위축된 탓인데, 이들의 센티먼트(투자 심리)가 회복되려면 시간이 좀 더 걸릴 것으로 증권사는 봤다는 거예요.",
          "easy2_title": "외국인 관광객이 늘면서 레저 업종에 우호적인 환경이 계속될 거예요",
          "easy2_desc": "9월 전체 외국인 관광객은 206만 명으로 전년 대비 21.1% 늘어나는 등 견조한 성장세가 이어지고 있는데요. 정부는 연내 외국인 관광객 2,300만 명 달성을 목표로 하고 있고, 2027년 관광 예산도 역대 최대 규모인 1조 7,581억 원으로 편성했거든요. 환율 하락에 따른 인바운드(외국인의 국내 여행) 성장 둔화 우려가 있긴 하지만, 정부의 적극적인 육성 의지를 보면 레저 업종의 영업환경은 앞으로도 좋을 것으로 증권사는 전망했어요.",
          "topic": "10월 외국인 카지노 3사의 실적 현황과 향후 레저 업종의 영업환경을 분석한 내용이에요.",
          "points": [
            "롯데관광개발의 역대급 실적: 롯데관광개발은 10월 드롭액 3,661억 원, 순매출 625억 원을 기록하며 역대 최대치를 경신했는데요. 8~9월 부진했던 홀드율이 회복되고 인당 드롭액도 553만 원으로 반등한 덕분이에요. 제주 직항 노선 신규 개설과 마카오 노선 증편이 예정되어 있어 방문객 증가세는 계속될 것으로 증권사는 기대했어요.",
            "파라다이스와 GKL의 고객 구성 변화: 파라다이스는 중국인 VIP 드롭액이 줄어들며 전체 드롭액이 소폭 하락했으나, 일본 및 기타 지역 고객이 이를 메우고 있는데요. GKL 역시 전체 방문객 수는 줄었지만 인당 드롭액이 성장하며 실적을 방어했어요. 특히 파라다이스는 중국인 VIP 비중이 15% 수준으로 낮아지고 있어, 향후 성장은 일본과 기타 지역 고객이 주도할 것으로 증권사는 봤어요.",
            "정부의 관광객 유치 목표 달성 가시화: 2026년 10월 27일 기준으로 누적 외국인 관광객은 1,894만 명을 돌파하며 이미 2025년 연간 수치를 넘어섰는데요. 정부는 연내 2,300만 명 달성을 눈앞에 두고 있으며, 2028년까지 3,000만 명을 조기 달성하겠다는 목표를 세웠어요. 이를 위해 관광 예산을 대폭 증액하는 등 적극적인 지원을 이어가겠다는 계획이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "2984",
          "check_flags": "",
          "body_chars": "23736",
          "link": "https://m.stock.naver.com/research/industry/46972",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "유안타증권",
          "title": "[유안타증권]  베트남 신공장 투자 관련 Comment",
          "easy1_title": "삼양식품이 베트남에 새 공장을 지어 생산 능력을 키우기로 했어요",
          "easy1_desc": "삼양식품이 베트남 신공장 건설에 2,186억원을 투자하기로 결정했는데요. 2029년 1월 준공을 목표로 총 8개 생산라인을 갖춘 공장을 지을 계획이에요. 이렇게 되면 글로벌 생산 능력(CAPA)이 약 39억식까지 늘어날 것으로 보입니다. 쉽게 말하면, 해외 생산 거점을 늘려 더 많은 제품을 만들 준비를 하는 셈이에요.",
          "easy2_title": "공장이 늘어나면 매출도 커지고 기업 가치도 다시 평가받을 수 있어요",
          "easy2_desc": "베트남 공장이 가동되면 유럽과 아세안 시장을 공략하는 수출 기지 역할을 하게 되는데요. 생산과 물류 비용을 아끼면서 매출 성장과 수익성 개선을 동시에 기대할 수 있다는 겁니다. 증권사는 이런 성장세가 2030년 이후까지 이어질 수 있어 현재 주가 수준이 매력적이라고 봤어요. 결국 기업의 미래 가치가 다시 평가받을 근거가 된다는 말이에요.",
          "topic": "삼양식품의 베트남 신공장 투자 결정이 향후 글로벌 생산 능력과 기업 성장에 미칠 영향에 대해 분석했어요.",
          "points": [
            "글로벌 생산 능력 확대: 삼양식품은 베트남 신공장에 총 8개 생산라인을 구축할 예정인데요. 2029년 초기 라인 가동을 시작으로 최종적으로는 글로벌 생산 능력을 최대 약 49억식까지 늘리겠다는 계획이에요. 이는 2026년과 비교하면 약 2배 가까이 증가하는 규모입니다.",
            "수출 경쟁력 강화: 베트남 공장은 유럽과 아세안 시장을 겨냥한 핵심 수출 거점으로 활용될 예정인데요. 한국보다 낮은 제조 원가와 물류 및 관세 혜택을 누릴 수 있다는 장점이 있어요. 또한 미국이나 유럽에 공장을 짓는 것보다 건설 기간을 줄이고 운영 비용도 아낄 수 있어 효율적이라고 증권사는 판단했어요.",
            "성장 동력 확보와 밸류에이션: 이번 투자는 2027년 중국 공장 증설 이후 나타날 수 있는 성장 둔화 걱정을 덜어주는 역할을 하는데요. 2029년부터 베트남 공장이 새로운 성장 동력이 되어 중장기 매출을 끌어올릴 것으로 보입니다. 증권사는 이러한 성장 지속성을 바탕으로 삼양식품의 투자의견을 BUY로 유지했어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 이렇게 되면 글로벌 생산 능력(CAPA)이 약 39억식까지 늘어날 것으로 보입니다.; 예측 의심: 2029년부터 베트남 공장이 새로운 성장 동력이 되어 중장기 매출을 끌어올릴 것으로 보입니다.",
          "body_chars": "3787",
          "link": "https://m.stock.naver.com/research/industry/46971",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "유안타증권",
          "title": "[유안타증권]  상선 시장에 드리운 암운, 그 너머의 빛",
          "easy1_title": "조선업 주가 조정은 방산 기대감이 줄어든 탓이에요",
          "easy1_desc": "올해 조선업종 주가가 떨어진 건 배를 만드는 본업이 나빠져서라기보다, 한미 해양방산 협력(MASGA)으로 주가가 오를 거라는 기대가 너무 컸다가 정상화되는 과정에서 생긴 일이라고 봤어요. 예전에는 방산 사업의 미래 가치를 상선 사업의 이익에 얹어서 평가했는데, 기대가 줄어드니 주가도 같이 내려온 셈이에요. 쉽게 말하면, 방산이라는 꿈을 걷어내고 나니 주가가 제자리를 찾아가는 중이라는 말이에요.",
          "easy2_title": "상선 시장은 중국의 공급 확대 때문에 보수적으로 봐야 해요",
          "easy2_desc": "중국 조선업체들이 생산 능력을 계속 키우면서 글로벌 상선 시장에서 공급자로서의 입지가 아주 강해졌거든요. 국내 조선사들이 고수익 선종에서 질적 우위를 지켜왔지만, 이제는 중국이 그 영역까지 점유율을 넓히고 있어서 상선 본업만으로 주가가 크게 오르기는 어려운 환경이라고 분석했어요. 그래서 상선 부문은 앞으로의 수익성 개선세가 둔화될 것으로 보고 보수적인 전망을 유지한다는 거예요.",
          "topic": "조선업종의 주가 조정을 바라보는 관점을 재정립하고, 상선과 방산 및 신사업의 가치를 구분하여 향후 투자 기회를 점검했어요.",
          "points": [
            "상선 시장의 경쟁 격화: 중국 조선업체들이 생산 능력을 지속적으로 확장하면서 글로벌 신조 수요를 흡수하고 있어요. 이 때문에 국내 조선업체들이 누리던 가격 결정력이 약해졌고, 고수익 선종에서도 중국의 시장 잠식이 진행되고 있다고 봤어요.",
            "방산 협력의 현실적 재평가: 한미 해양방산 협력 사업은 여전히 유효한 기회지만, 초기 기대와 달리 구체적인 성과가 늦어지면서 기대치가 조정되었어요. 이제는 국내 건조뿐만 아니라 미국 현지 건조 등 다양한 시나리오를 고려해 사업 가치를 18조 원으로 다시 산정했어요.",
            "신사업 AIDC의 성장 잠재력: 상선과 다른 전방산업 수요에 기반한 AIDC(인공지능 데이터센터) 관련 사업은 새로운 투자 기회라고 봤어요. 기존 조선 기술을 활용하면서도 성장 산업의 밸류에이션을 적용할 수 있어, 이익 기여도가 높은 종목을 중심으로 선호 의견을 제시했어요."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "긴 원문 — 앞 30000자만 읽음(전체 62072자); topic 근거 원문에 없음",
          "body_chars": "62072",
          "link": "https://m.stock.naver.com/research/industry/46970",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "유안타증권",
          "title": "[유안타증권]  [엔터 2027 전망: 바닥 다지고 반등하는 해]",
          "easy1_title": "엔터주가 작년에 많이 떨어졌는데 이제 바닥 찍고 올라갈 일만 남았어요",
          "easy1_desc": "2026년 엔터 4사는 주가가 37%에서 56%까지 크게 떨어지면서 시장 평균보다도 부진했는데요. 그동안 성장을 이끌던 영업이익이 한 자릿수 초반으로 둔화되면서 투자자들이 기대하던 프리미엄이 사라졌기 때문이에요. 하지만 이제는 낮아진 눈높이가 주가에 충분히 반영됐다고 보는데요. 증권사는 2027년부터는 이익이 다시 늘어나는 상승 사이클이 시작될 것으로 보고 있습니다.",
          "easy2_title": "데뷔한 지 얼마 안 된 가수들이 회사의 실적을 확 끌어올릴 거예요",
          "easy2_desc": "2027년에는 데뷔 3~4년 차인 가수들이 투자 회수 국면에 진입하고, 5~6년 차인 가수들은 재계약 전 수익을 가장 많이 내는 구간에 들어서거든요. 이른바 저연차 IP(지식재산권)들이 공연과 앨범으로 돈을 잘 벌어들이면서 회사 전체의 이익을 높일 거라는 말이에요. 신인 가수들을 키우는 비용도 예전보다 효율적으로 관리하고 있어서, 이익이 더 탄탄해질 것으로 보입니다.",
          "topic": "2027년 엔터테인먼트 산업은 저연차 아티스트의 수익화와 마진 개선을 통해 실적 반등을 이룰 것으로 전망됩니다.",
          "points": [
            "엔터 섹터의 바닥 통과: 2026년에는 성장률 둔화와 수급 쏠림으로 주가가 크게 하락했지만, 이제는 이익 회복이 기대되는 시점이에요. 증권사는 2027년 엔터 4사의 합산 영업이익이 9,162억원으로 전년 대비 32.6% 늘어날 것으로 봤거든요. 특히 하이브를 제외한 3사도 2026년의 감익을 끝내고 증익으로 돌아설 것으로 추정했습니다.",
            "저연차 IP의 수익 기여: 데뷔 3년 차부터 재계약 이전까지가 이익 기여가 가장 큰 구간인데, 2027년은 이 구간에 진입하는 가수들이 많아지는 해예요. 하이브와 SM은 이미 르세라핌, 라이즈 등 저연차 가수들이 공연 규모를 키우며 성장을 이끌고 있거든요. 반면 JYP와 YG는 고연차 가수들의 공백을 신인으로 메워야 해서 실적 변동성이 클 수 있다고 봤습니다.",
            "주가 회복 흐름 전망: 주가는 2027년 1분기에 바닥을 다진 뒤 분기별로 점차 회복할 것으로 보입니다. 2분기부터는 저연차 가수들의 투어와 신보 발매, 신인 데뷔가 이어지면서 주가 수준이 높아질 거라는 말이에요. 증권사는 수급이 타이트한 구간에서는 SM을, 회복이 본격화되는 중기 구간에서는 하이브를 최선호주로 꼽았습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 신인 가수들을 키우는 비용도 예전보다 효율적으로 관리하고 있어서, 이익이 더 탄탄해질 것으로 보입니다.; 예측 의심: 2027년 엔터테인먼트 산업은 저연차 아티스트의 수익화와 마진 개선을 통해 실적 반등을 이룰 것으로 전망됩니; 예측 의심: 주가는 2027년 1분기에 바닥을 다진 뒤 분기별로 점차 회복할 것으로 보입니다.; 긴 원문 — 앞 30000자만 읽음(전체 49919자)",
          "body_chars": "49919",
          "link": "https://m.stock.naver.com/research/industry/46969",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "대신증권",
          "title": "[대신증권]  블루웨이브와 AIDC 규제: 공급은 지속, 속도는 조절",
          "easy1_title": "미국 데이터센터는 짓기는 계속 짓는데 속도는 좀 늦춰질 거예요",
          "easy1_desc": "미국 중간선거 이후 민주당으로 주지사가 바뀐 5개 주에서 데이터센터 규제가 강화되면서 공급이 아예 멈추는 건 아니라고 봤는데요. 대신 개발 비용이 늘어나고 가동 시점이 늦어지는 방향으로 갈 것으로 보입니다. 쉽게 말하면, 데이터센터를 짓겠다는 계획은 그대로지만 실제로 돌아가기까지 걸리는 시간은 더 길어질 거라는 말이에요.",
          "easy2_title": "이미 지어지고 있는 곳은 괜찮지만 새로 시작할 곳은 꼼꼼히 따져봐야 해요",
          "easy2_desc": "5개 주의 공사 중 물량은 계획 물량의 13% 수준이라 단기 공급은 계획대로 이어질 것으로 보입니다. 다만 아직 착공 전인 계획 물량은 2027년 상반기 주별 결정에 따라 조정될 가능성이 큰데요. 전력과 인허가를 이미 확보한 운영 시설의 가치가 앞으로 더 부각될 것으로 증권사는 보고 있습니다.",
          "topic": "미국 중간선거 이후 데이터센터 규제 강화가 공급 규모와 시점에 미칠 영향에 대해 분석했어요.",
          "points": [
            "민주당 전환 5개 주의 규제 강화: 미국 데이터센터 개발 계획의 49%가 주지사가 민주당으로 바뀐 5개 주에 집중되어 있는데요. 이 지역들에서 신규 승인 조건이 까다로워지고 세제 혜택이 줄어들면서 공급 위축 우려가 나오고 있다는 겁니다.",
            "규제 배경과 기존 정책: 전기요금 상승 부담과 지역 주민들의 건설 반대가 커지면서 선거 전부터 규제가 이어져 왔는데요. 비용 부담, 승인 제한, 입지 제한이라는 세 가지 갈래로 신규 개발을 제약하고 있다는 말이에요.",
            "APAC 시장의 선별적 수혜: 미국 공급이 늦어지면 아시아태평양(APAC) 지역이 대안이 될 수도 있는데요. 다만 전력 확보가 빠르고 개발 물량을 갖춘 조호르나 방콕 같은 일부 시장에 수혜가 집중될 것으로 증권사는 내다봤습니다."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 대신 개발 비용이 늘어나고 가동 시점이 늦어지는 방향으로 갈 것으로 보입니다.; point2 근거 원문에 없음",
          "body_chars": "21851",
          "link": "https://m.stock.naver.com/research/industry/46968",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "유진투자증권",
          "title": "[유진투자증권]  이미 많은 것이 반영된 주가",
          "easy1_title": "반도체 시장이 나빠질 거라는 걱정이 이미 주가에 다 녹아 있어요",
          "easy1_desc": "메모리 반도체 업황이 나빠질 수 있다는 불안감이 시장에 퍼져 있는데요, 증권사는 실현 가능성이 낮은 극단적인 상황까지 가정해서 분석해 봤거든요. 그랬더니 삼성전자와 SK하이닉스의 주가가 이미 그런 나쁜 시나리오를 상당 부분 반영하고 있다는 결론이 나왔습니다. 쉽게 말하면, 지금 주가는 이미 최악의 상황까지 고려한 수준이라 더 떨어질 가능성보다 오를 가능성이 크다는 말이에요.",
          "easy2_title": "스마트폰 수요는 줄었지만 북미 기업들이 물량을 다 받아내고 있어요",
          "easy2_desc": "현재 스마트폰이나 PC 같은 일반 소비 시장은 수요가 부진해서 메모리 구매력이 약해진 상태인데요, 다행히 북미의 데이터센터 기업들이 메모리 공급을 충분히 흡수하고 있는 상황입니다. 증권사는 AI 투자가 속도 조절에 들어가더라도 이런 수요가 버텨줄 것으로 봤는데요, 오히려 지금의 우려가 과도하게 반영된 주가를 비중 확대의 기회로 활용하라고 조언했습니다.",
          "topic": "반도체 업황에 대한 시장의 우려가 과도하며, 현재 주가는 극단적인 시나리오까지 이미 반영하고 있다는 분석입니다.",
          "points": [
            "최악의 시나리오 가정: 증권사는 2018년처럼 메모리 가격이 급락하는 다운사이클이 2027년부터 다시 나타난다고 가정해 봤는데요, 이 경우 DRAM과 NAND 가격이 크게 하락하고 영업이익률도 각각 70%와 50% 수준으로 낮아질 것으로 추정했습니다. 하지만 이는 과거의 사례를 대입한 극단적인 상황이라는 점을 강조했습니다.",
            "수요 조정과 북미의 역할: 스마트폰과 PC 시장은 수익성 악화로 메모리 구매가 줄고 있고 중국 서버 시장도 구축이 지연되고 있는데요, 반면 북미의 클라우드 서비스 제공 업체(CSP)들은 공급 충족률이 낮아 시장에서 조정된 물량을 모두 흡수하고 있다고 봤습니다.",
            "향후 업황 전망: 증권사는 2028년부터 AI 연구소들이 메모리를 직접 구매하는 비중이 늘어나면서 메모리 부족 현상이 길어지고 업황 강세가 이어질 것으로 전망했습니다. 따라서 지금의 주가는 우려가 과도하게 반영된 상태라 비중을 늘리는 기회로 삼는 것이 좋겠다고 밝혔습니다."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "point1 근거 원문에 없음",
          "body_chars": "14563",
          "link": "https://m.stock.naver.com/research/industry/46967",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "SK증권",
          "title": "[SK증권]  되돌림",
          "easy1_title": "AI 인프라 투자에 대한 걱정이 줄어들고 있어요",
          "easy1_desc": "그동안 시장에서는 고금리 때문에 AI(인공지능) 관련 기업들의 자금 조달이 어려워질까 봐 걱정이 많았는데요. 그런데 코어위브라는 회사의 실적을 확인해 봤더니, 조달 금리는 낮아지고 임대 가격은 오르는 등 상황이 좋아지고 있다는 게 드러났거든요. 쉽게 말하면, AI 산업이 돈을 못 벌까 봐 걱정하던 분위기가 조금씩 바뀌고 있다는 말이에요.",
          "easy2_title": "메모리 반도체 주문을 줄이는 현상은 나타나지 않았어요",
          "easy2_desc": "반도체 시장이 나빠지려면 보통 주문을 취소하는 오더컷이 먼저 나타나야 하는데요. 과거 사례를 보면 주가가 고점을 찍고 3개월 뒤에 오더컷이 발생했었는데, 이번에는 6월 이후로도 그런 움직임이 전혀 없거든요. 오히려 장기 공급 계약인 LTA가 더 길어지고 있어서, 지금의 공급 부족 구조는 쉽게 바뀌지 않을 것으로 보입니다.",
          "topic": "AI 인프라 투자에 대한 우려가 해소되면서 메모리 반도체 실적에 대한 신뢰도가 높아지고 있다는 분석이에요.",
          "points": [
            "코어위브의 우려 완화: 코어위브의 실적 발표를 통해 자금 조달 금리가 낮아지고 수주잔고와 매출이 늘어나는 모습이 확인됐거든요. 가격도 계속 오르고 있어서, 자금이 부족해 사업이 멈출 거라는 걱정은 크게 줄어든 셈이에요.",
            "오더컷 없는 견고한 수요: 과거에는 주가 고점 이후 오더컷이 발생하며 다운턴이 시작됐지만, 지금은 오히려 장기 공급 계약인 LTA가 5년으로 늘어나는 추세예요. 일부 병목 현상이 있는 곳에서 속도 조절이 있을 수는 있어도, 전체적인 공급 부족 구조를 흔들지는 못할 것으로 봤어요.",
            "메모리 밸류에이션 기회: 삼성전자와 SK하이닉스의 주가수익비율(P/E)이 역사적 저점 아래로 내려가 있는 상황인데요. HBM3e와 4의 가격 인상과 모바일 DRAM 가격 정상화를 고려하면 실적 전망은 여전히 탄탄하다고 증권사는 분석했어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 오히려 장기 공급 계약인 LTA가 더 길어지고 있어서, 지금의 공급 부족 구조는 쉽게 바뀌지 않을 것으로 보",
          "body_chars": "4795",
          "link": "https://m.stock.naver.com/research/industry/46966",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "신한투자증권",
          "title": "[신한투자증권]  버티는 힘(내수)과 뻗는 힘(수출)의 합",
          "easy1_title": "화장품은 외국인 덕에 버티고 의류는 내수 부진으로 힘겨워요",
          "easy1_desc": "내국인 소비는 주식 하락과 금리 인상으로 지갑이 닫히면서 둔화되는 모습인데요, 화장품은 방한 외국인들이 올리브영이나 약국에서 제품을 많이 사주면서 내수 성장을 이끌고 있어요. 반면 의류는 내국인 소비가 줄어든 자리를 외국인 관광객이 일부 채우며 방어하고는 있지만, 화장품만큼의 성장세를 기대하기는 어려운 상황이에요. 쉽게 말하면 화장품은 외국인 수요로 커지고 의류는 겨우 버티는 셈이에요.",
          "easy2_title": "화장품은 수출이 성장을 이끌고 의류는 물량 중심의 성장이 예상돼요",
          "easy2_desc": "2027년에는 화장품 기업들이 미국과 유럽 등 해외 시장에서 수출을 크게 늘리며 두 자릿수 매출 성장을 이어갈 것으로 증권사는 보고 있는데요, 의류는 브랜드사의 해외 출점이 옵션으로 남아있긴 하지만 기본적으로는 물량 중심의 성장에 그칠 것으로 보여요. 수출 성과가 기업의 매출 차이를 만드는 핵심인 셈이에요. 쉽게 말하면 화장품은 뻗어 나가는 힘이 강하고 의류는 상대적으로 성장이 제한적이라는 겁니다.",
          "topic": "2027년 화장품과 의류 산업은 내수 시장의 부진을 외국인 수요로 방어하고, 수출 성과에 따라 기업별 성장 격차가 벌어질 것으로 전망됩니다.",
          "points": [
            "내수 시장의 변화와 외국인 수요: 국내 소비는 부의 효과 소멸과 이자 부담 증가로 둔화되고 있지만, 방한 외국인 관광객은 1~9월 1,711만명으로 늘어 내수 소비를 견인하고 있어요. 특히 외국인들은 면세점 대신 올리브영과 약국에서 더마 화장품을 주로 구매하며 화장품 내수 성장에 기여하고 있다는 분석이에요.",
            "수출 중심의 화장품 성장세: 화장품 수출은 1~10월 103.0억달러를 기록하며 이미 지난해 연간 실적을 넘어섰고, 유럽과 미국 시장에서의 점유율도 빠르게 확대되고 있어요. 증권사는 한국 제조 기술이 서구권에서 인정받는 흐름이 지속되면서 화장품 제조사들의 성장성과 수익성이 높을 것으로 추정했어요.",
            "의류 산업의 성장 둔화와 수익성: 의류 브랜드와 OEM 기업들은 내수 소비 둔화와 환율 영향으로 인해 2027년 매출 성장률이 한 자릿수 초반에 머물 것으로 예상돼요. 증권사는 특히 환율 변동과 물류비 상승이 수익성에 영향을 줄 수 있어, 이를 어떻게 방어하느냐가 주가 방향성을 결정할 것으로 봤어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 2027년 화장품과 의류 산업은 내수 시장의 부진을 외국인 수요로 방어하고, 수출 성과에 따라 기업별 성장 ; 예측 의심: 의류 브랜드와 OEM 기업들은 내수 소비 둔화와 환율 영향으로 인해 2027년 매출 성장률이 한 자릿수 초반; 긴 원문 — 앞 30000자만 읽음(전체 52231자)",
          "body_chars": "52231",
          "link": "https://m.stock.naver.com/research/industry/46965",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "유진투자증권",
          "title": "[유진투자증권]  2027 연간전망: 반등 가능한!",
          "easy1_title": "엔터 업종은 이제 고연차보다 저연차 아티스트가 핵심입니다",
          "easy1_desc": "그동안 엔터주는 고연차 아티스트의 활동에 따라 실적이 크게 흔들렸는데요, 이제는 데뷔 2~3년 차인 저연차 아티스트들이 월드투어를 돌며 빠르게 수익을 내고 있다는 말이에요. 내년에는 모든 기획사가 신인 보이그룹을 데뷔시킬 예정이라 팬덤 경쟁이 치열해지면서 앨범과 공연 매출이 다시 살아날 것으로 보입니다. 쉽게 말하면, 고연차 아티스트가 벌어다 준 시간 동안 저연차 아티스트가 성장해 실적 공백을 메우는 구조가 완성된 셈이에요.",
          "easy2_title": "미디어와 레저 업종도 불확실성이 걷히면 반등할 수 있습니다",
          "easy2_desc": "미디어는 4년 만에 TV 광고가 반등하기 시작했는데요, 제작비 효율화와 글로벌 성과가 더해지면서 실적 개선을 기대하고 있습니다. 레저 업종인 카지노는 마카오의 부진과 세금 이슈 때문에 주가가 눌려 있지만, 인바운드 수요는 여전히 견고한 편이에요. 이르면 연말에 관광기금 관련 법안이 나오면서 불확실성이 해소되면 주가도 강하게 반등할 가능성이 있다는 겁니다.",
          "topic": "엔터, 레저, 미디어 업종의 현재 상황을 점검하고 2027년의 반등 가능성을 분석했습니다.",
          "points": [
            "엔터 업종의 구조적 성장: 고연차 아티스트의 활동 여부에 따라 실적 변동성이 컸던 과거와 달리, 이제는 저연차 아티스트의 수익화 속도가 빨라지면서 구조적인 성장세를 이어가고 있습니다. 특히 내년에는 신인 보이그룹 데뷔가 줄을 이으면서 앨범과 공연, MD(굿즈) 매출의 선순환이 기대되는 상황이에요.",
            "레저 업종의 반등 모멘텀: 마카오 카지노의 부진과 세금 이슈로 주가가 눌려 있지만, 국내 외인 카지노는 인바운드 수요가 견고하게 유지되고 있습니다. 증권사는 관광진흥기금 관련 불확실성이 연말에 해소된다면, 눌려 있던 주가가 강한 반등 모멘텀을 맞이할 것으로 봤습니다.",
            "미디어 업종의 턴어라운드: 4년 동안 이어진 TV 광고 불황이 3분기부터 반등하기 시작하면서 업황 회복의 신호탄을 쐈습니다. 제작사들은 제작비 효율화를 통해 수익성을 높이고 있으며, 내년에는 편성 정상화와 함께 판매 매출이 확대되면서 실적 턴어라운드가 가능할 것으로 추정했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 내년에는 모든 기획사가 신인 보이그룹을 데뷔시킬 예정이라 팬덤 경쟁이 치열해지면서 앨범과 공연 매출이 다시 ; 긴 원문 — 앞 30000자만 읽음(전체 74973자)",
          "body_chars": "74973",
          "link": "https://m.stock.naver.com/research/industry/46964",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "유진투자증권",
          "title": "[유진투자증권]  안녕하세요 데일리에요 (로봇/방산/조선)",
          "easy1_title": "로봇과 방산 그리고 조선 분야의 최신 소식을 정리했어요",
          "easy1_desc": "유진투자증권에서 11월 11일 기준으로 로봇과 방산, 조선 산업의 주요 뉴스들을 모아 봤는데요. 삼현의 국책과제 선정이나 한화에어로스페이스의 수주 소식처럼 각 분야에서 눈에 띄는 움직임들을 정리한 거예요. 쉽게 말하면, 투자자들이 관심을 가질 만한 산업별 핵심 이슈를 한눈에 보기 좋게 요약한 셈입니다.",
          "easy2_title": "산업별로 주요 기업들의 계약과 정책 변화를 확인해 봤어요",
          "easy2_desc": "원익로보틱스의 투자 계약이나 KF-21 수출 계약 시점의 변화 같은 구체적인 기업 이슈들을 살펴봤는데요. 미국이 중국 조선업에 대한 제재를 유예하거나 미 해군이 해외 건조를 검토하는 등 정책적인 변화도 함께 담겨 있어요. 이런 내용들이 각 산업의 흐름을 파악하는 데 도움이 될 것으로 보입니다.",
          "topic": "로봇과 방산, 조선 산업의 주요 기업 동향과 정책 변화를 정리한 리포트입니다.",
          "points": [
            "로봇 산업의 투자와 개발: 원익로보틱스가 3,500억원의 국민성장펀드 투자 계약을 확정하며 핸드 양산시설 구축에 나섰다는 소식이에요. 삼현은 2029년까지 휴머노이드 액추에이터를 개발하는 국책과제 주관기관으로 선정되기도 했는데요. 다만 원익로보틱스는 6년 내 기업공개(IPO)에 실패하면 주식매수 의무가 발생한다는 조건이 있다는 점도 확인됩니다.",
            "방산 분야의 수주와 협력: 한화에어로스페이스의 L-SAM 수주가 가시화되고 있고, 천궁-2 계약도 정상 궤도에 올랐다고 증권사는 전했어요. 반면 한국항공우주(KAI)의 KF-21 수출 계약은 2027년으로 넘어갈 가능성이 커졌는데요. 계약 시점은 미뤄지고 있지만, 지상과 해상 등 협력 범위는 계속 확대되고 있다는 점이 특징입니다.",
            "조선업의 정책 검토와 제재: 미 해군이 한국과 일본 등에서 군함을 건조하는 방안을 검토 중이며 11월 12일이 공식 제출 시한이라고 해요. 또한 미국은 중국의 조선업을 겨냥한 무역법 301조 조치를 2027년 1월 10일까지 2개월 추가 유예하기로 했는데요. 이런 정책적 결정들이 앞으로 조선업계에 어떤 영향을 줄지 지켜봐야 할 것으로 보입니다."
          ],
          "evidence_ok": "4/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 이런 내용들이 각 산업의 흐름을 파악하는 데 도움이 될 것으로 보입니다.; 예측 의심: 이런 정책적 결정들이 앞으로 조선업계에 어떤 영향을 줄지 지켜봐야 할 것으로 보입니다.; easy1 근거 원문에 없음; topic 근거 원문에 없음",
          "body_chars": "2127",
          "link": "https://m.stock.naver.com/research/industry/46963",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "SK증권",
          "title": "[SK증권]  10 월 여수신 동향 – 조달 포트폴리오 악화는 ing 형",
          "easy1_title": "은행들이 돈 빌려줄 곳은 많은데 정작 돈 구하기는 힘든 상황이에요",
          "easy1_desc": "은행이 기업에 빌려준 대출은 계속 늘고 있는데, 정작 은행이 자금을 모으는 방식은 예금이나 은행채(은행이 발행하는 채권)에만 쏠려 있거든요. 이게 무슨 말이냐면 은행이 돈을 굴릴 곳은 많지만, 정작 돈을 조달하는 구조는 점점 나빠지고 있다는 뜻이에요. 그래서 은행 입장에서는 자금 조달 구조를 어떻게 개선하느냐가 아주 중요한 과제가 된 셈입니다.",
          "easy2_title": "만기가 돌아오는 빚을 갚으려고 미리 돈을 끌어모으고 있어요",
          "easy2_desc": "4분기에 정기예금과 은행채 만기가 한꺼번에 돌아오다 보니, 은행들이 미리 자금을 확보하느라 수신이 크게 늘어난 건데요. 11월에도 26.5조 원 정도의 은행채 만기가 기다리고 있어서 당분간은 돈을 빌려오는 비용 부담이 계속될 것으로 보입니다. 쉽게 말하면, 돌아오는 빚을 막기 위해 은행들이 지금 열심히 현금을 쌓아두고 있다는 겁니다.",
          "topic": "은행의 대출은 대기업을 중심으로 꾸준히 늘고 있지만, 만기 도래에 따른 자금 조달 부담으로 인해 수익성 개선이 쉽지 않은 상황이에요.",
          "points": [
            "대기업 중심의 대출 성장: 10월 은행 대출은 전년 대비 4.6% 늘어난 2,656조 원을 기록했는데요. 특히 대기업 대출이 15.7%나 증가하며 전체적인 대출 성장을 이끌고 있는 모습입니다.",
            "수신 증가와 조달 구조 악화: 은행 수신은 2,652조 원으로 최근 10년 사이 10월 기준 가장 큰 폭으로 늘어났습니다. 정기예금과 은행채를 통해 자금을 확보하고 있는데, 이는 조달 포트폴리오가 악화되고 있다는 신호로 해석됩니다.",
            "수익성 개선의 어려움: 은행채 만기가 계속 돌아오면서 조달 비용 부담이 당분간 이어질 것으로 보입니다. 증권사는 이런 이유로 3분기에 하락한 은행의 순이자마진(NIM)이 4분기에 눈에 띄게 좋아지기는 어려울 것이라고 봤습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 11월에도 26.5조 원 정도의 은행채 만기가 기다리고 있어서 당분간은 돈을 빌려오는 비용 부담이 계속될 것; 예측 의심: 은행채 만기가 계속 돌아오면서 조달 비용 부담이 당분간 이어질 것으로 보입니다.",
          "body_chars": "3526",
          "link": "https://m.stock.naver.com/research/industry/46962",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "SK증권",
          "title": "[SK증권]  은행/증권 국고채 PD 담합 과징금 관련 Comment",
          "easy1_title": "국고채 입찰 담합으로 15개 금융사가 1조 6,265억 원을 내게 됐어요",
          "easy1_desc": "공정거래위원회가 2020년 1월부터 2023년 6월까지 국고채 입찰 과정에서 담합을 한 15개 금융사에 과징금을 부과했는데요. 원래 심사 때 거론되던 금액보다는 줄어들었지만, 총 1조 6,265억 원이라는 큰 금액이 결정된 겁니다. 쉽게 말하면, 입찰 과정에서 정보를 주고받거나 담합을 한 대가를 치르게 된 셈이에요.",
          "easy2_title": "증권사 실적에 부담이 커졌고 앞으로 소송 결과도 지켜봐야 해요",
          "easy2_desc": "이번 과징금은 대부분 4분기 실적에 반영될 예정이라 증권사들의 부담이 커진 상황인데요. KB증권이나 키움증권처럼 이미 3분기에 반영한 곳도 있지만, NH투자증권이나 미래에셋증권 등은 4분기 실적에 타격이 있을 것으로 보입니다. 다만 행정소송을 진행할 경우 결과에 따라 과징금을 일부 돌려받을 가능성도 남아 있다는 점을 알아두어야 합니다.",
          "topic": "국고채 전문딜러(PD)들의 담합 행위에 대해 공정거래위원회가 15개 금융사에 과징금을 부과하면서 발생한 재무적 영향에 대한 분석이에요.",
          "points": [
            "담합의 배경과 규모: 국고채 전문딜러(PD)들이 2020년 1월부터 2023년 6월까지 입찰에 참여하면서 정보를 주고받거나 담합을 한 사실이 드러났는데요. 전체 담합 규모는 76조 2,000억 원에 달하며, 이로 인해 10개 증권사와 5개 은행이 과징금 부과 대상이 된 겁니다.",
            "금융지주와 증권사의 영향 차이: 과징금으로 인한 재무적 부담은 금융지주보다 증권사가 더 클 것으로 보이는데요. 금융지주는 우리금융지주처럼 영향이 없거나 신한지주처럼 타격이 제한적인 경우가 많지만, 증권사는 이익 규모가 작을 경우 적자까지 예상되는 등 부담이 상대적으로 높다는 분석이에요.",
            "실적 반영과 향후 변수: KB증권과 키움증권은 이미 3분기 실적에 과징금을 반영했지만, 대부분의 증권사는 4분기 실적에 이를 반영할 예정이라 실적 악화가 불가피해 보입니다. 다만 증권사들이 행정소송을 진행할 경우 향후 결과에 따라 과징금 일부를 환입받을 가능성도 존재한다고 SK증권은 봤습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: KB증권이나 키움증권처럼 이미 3분기에 반영한 곳도 있지만, NH투자증권이나 미래에셋증권 등은 4분기 실적에",
          "body_chars": "2073",
          "link": "https://m.stock.naver.com/research/industry/46961",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        }
      ],
      "fed_speeches": [
        {
          "file": "2026-10-01_연설_Waller_waller20261001a.md",
          "title": "[연설] 2026-10-01 · Governor Christopher J. Waller",
          "summary_lines": [
            "\"연준의 경제 데이터 플랫폼인 FRED는 모두를 위한 공공재입니다\"",
            "\"인공지능 시대에 맞춰 FRED도 새로운 연결 방식을 도입합니다\""
          ],
          "addr": "처리-6",
          "source": "v2_secretary/결과/연준연설/2026-10-01_연설_Waller_waller20261001a.md"
        },
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
        }
      ]
    },
    "ch4_news": {
      "title": "챕터 4 · 뉴스 사건 묶기",
      "addr": "처리-3",
      "status": "돎 (하루 AI 2콜 독립 묶기 대조)",
      "counts": {
        "news_in": {
          "val": 176,
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        "events_out": {
          "val": 9,
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        "single_out": {
          "val": 120,
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        "all_clusters": {
          "val": 129,
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        "bad_numbers": {
          "val": 0,
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        "calls": {
          "val": 2,
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        }
      },
      "events": [
        {
          "rank_by_count": 1,
          "name": "젠슨 황 엔비디아 CEO 스캔들 및 해임 논란",
          "easy": "엔비디아의 젠슨 황 CEO가 사내 임원들과 부적절한 관계를 맺었다는 의혹이 제기됐습니다. 이로 인해 엔비디아 이사회가 황 CEO의 해임을 준비하고 있다는 소식이 전해지면서 시장에 큰 파장이 일고 있는데요. 일각에서는 그가 스페이스X로 이직할 가능성까지 거론되는 등 거취를 둘러싼 불확실성이 커진 상황입니다.",
          "quote": "젠슨 황, 사내 불륜도 걸렸다... \"엔비디아 이사회서 해임 준비\"",
          "member_count": 15,
          "sample_articles": [
            {
              "n": 108,
              "title": "[속보] NYT \"젠슨 황, 엔비디아 여성 임원과도 불륜 관계\" - 연합뉴스TV",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBsM1FYd05XRERmN1NWMGFGYkExcl9WTWJMd1NBY0E0SnIzVm1Hc3JHQzJqS3dOQ0Y0SXJNWVZQT0ZCNnRFcjRFcEg1UWo3OFpWREo3TVlfcDRVX0tYMGIxalM5OGVZUHc?oc=5"
            },
            {
              "n": 196,
              "title": "트럼프 감싸도 못 막는 '젠슨 황' 스캔들…공화당도 조사 압박 - 머니투데이 - 머니투데이",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE8xMUh5Z0o2R3JXeEg5amhIeUR4NGJJeVAzRjRXSHpsaEJyTnY1TXNqWFo0Z1huLXpvcENUVkNyLXJXWEpFeDhsSEdYdG1LU201ZDNQMzItSEhpWDFMQUtpTEFNMDRYSE1FRDJLZ2NR0gFuQVVfeXFMTzExSHlnSjZHcld4SDlqaEh5RHg0Ykl5UDNGNFdIemxoQnJOdjVNc2pYWjRnWG4tem9wQ1RWQ3ItcldYSkV4OGxIR1h0bUtTbTVkM1AzMi1ISGlYMUxBS2lMQU0wNFhITUVEMktnY1E?oc=5"
            },
            {
              "n": 197,
              "title": "젠슨황, ‘불륜’ 또 터졌다…NYT “엔비디아 임원과 혼외관계” - 헤럴드경제",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1GN2ppMlh0WE5ScWFDMy0xdXVZU3IySnNfdllPRVdKSVAxVUpWVjI3R3JxeTJWUVBjUjJwZTliaUdnR21jUjRrVE44TGZlUUhsaUdRM0ZB?oc=5"
            },
            {
              "n": 104,
              "title": "젠슨 황, 사내 불륜도 걸렸다... \"엔비디아 이사회서 해임 준비\" - 조선일보",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMigwFBVV95cUxPSW9IRTc3bFNXVk1aUUxpM3gxd1ppeXExd1B1dGc1Wk1vTDQtNTlNcW50OTNyQ09YdDBJVGlqRm9WUlhhdmROcVotQTktYTdpRUViclR2bFpadVNUeG5FUkFsTU1PZ1pUSW5CRHdOd2l0TlhnR3BvdzVrWUVMcXhnNkc1SQ?oc=5"
            },
            {
              "n": 30,
              "title": "[젠슨 황 리스크] 직속 임원과 혼외관계 의혹…엔비디아 이사회 해임 논의",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2171867"
            },
            {
              "n": 107,
              "title": "“엔비디아 이사회, 젠슨 황 해임 준비…이르면 오늘 회의” - 경향신문",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE53Q0FfcnVMRlNlcGxOZHFoT0p1U0JKTHNBV0tFbUh4MUlJNjVwOVFCM1h5dnYzNExXWV9DX0h1emltWnRvcXFYd0J0cE1PS2lxT19xY3g3d0ZxZ9IBX0FVX3lxTE5tOTlFNFNDdVozVlRaa0RqcF9TSjVYNG5VbUh0TXU3S19Lck9MZ01rWjhubWZJVy1MOVNjNjNoaHhLRDdHRl9qdFBURkZMWjRVVF9jQUp5cEQxWmJ4Sk5V?oc=5"
            },
            {
              "n": 195,
              "title": "젠슨황 물러나나…\"딸 승계도 원치 않아\" - 연합뉴스 한민족센터",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE1EUWhvU29hVVJJNEhEcjJzdWtYU3huS0FXalVOeWlOTXNEdEtqcWUyUVpCSE13T25ZMEtJZFdUeVRfZzlKc2k0Q25abWlFN2xBR0t4TEVIVkNWVk0xOWN3cWNtaHZPWlVnOWQ4SlZiVUh2bFpv?oc=5"
            },
            {
              "n": 105,
              "title": "[속보] \"엔비디아 이사회, 젠슨황 해임 준비…이르면 오늘 회의\" - 연합뉴스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE90VlpFQ1dMVTNHRkIya2tUY3FRdDdBZGNfbExFcWoxTklidTczY1d6MXdRVVQ3SHllakFJZ0ZyN01ETnJfVjFqZldYV2xuNm1KeEU4ZU51cENSQTg?oc=5"
            },
            {
              "n": 106,
              "title": "\"엔비디아 이사회, 젠슨 황 해임 준비\"…시간외 주가 8% 급락 - 한국경제",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE84TF9NTHdPdkJlYmlVSGRfLVBYYzkzQzR4aEM0V0xGTXdhS0dESW92Uk42S3pBQjZuODJNRkdfVEwtem5OQWFFNEdMdmthMHl3VHp3Rzc4akF2UQ?oc=5"
            },
            {
              "n": 103,
              "title": "이사회 젠슨 황 해임 착수…“사내 유부녀 부사장과도 불륜” - 중앙일보",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1rMWE2YmVHNWxPcjVvanAwWlVQTi02ajRKaGNpXzZBa2dKenREV0ItRWVvczlZUC14Zm9WNVJ3SzFqSnZfeTdHbi01MjNyWEI4VHVkbDhn?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 2,
          "name": "삼성전자 충청권 HBM 생산 거점 투자",
          "easy": "삼성전자가 충청권에 46조 원 규모의 대규모 투자를 단행하며 최첨단 HBM 생산 거점을 구축하기로 했습니다. 이재용 회장은 온양 캠퍼스를 AI 반도체의 심장으로 키우겠다는 의지를 밝혔는데요. 이번 투자로 반도체 기판 증설과 함께 차세대 메모리 시장에서의 경쟁력을 강화할 것으로 보입니다.",
          "quote": "이재용, 충청권 메가 착공식서 \"최첨단 HBM 거점될 것\"(종합) |",
          "member_count": 8,
          "sample_articles": [
            {
              "n": 86,
              "title": "李대통령·이재용 '충청 반도체 굴기' 시동…46조원 HBM 거점 '첫삽' - 스트레이트뉴스",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE96RHVKYkpQTlRxRk1GWnF6QjNFMHRYSW1WZlVUc0ZhRTU2R0ZScklXX1pjRXhCS3JKQ2NMandCZ3h1Y1JYU091NFZqaW8zSE1sUExsZ194TUtfRlRqWnNuNUI3QlAwbW0tSTNZUWh4NnlLQTjSAXdBVV95cUxPbXU4dUdzeFJSLXRTUUhxVjVUZnBrSjJqVWUtbzZKa3hKS1dobllKeTBXODBiNmR3WVJRS0R6VHdxUnc3dlphN0Z3NVJDOWhYTkowaldKSmxQYU5iekQ5XzlVTUJrRGdYVlV5aFFBcmp6a2lNano0NA?oc=5"
            },
            {
              "n": 83,
              "title": "이재용, 충청권 메가 착공식서 \"최첨단 HBM 거점될 것\"(종합) | - 연합인포맥스",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5WMnRHTEZUS2lDYlAwWTVPUi05R1RWSVh2TGJIQVF1WmR3MHU2c3hKeURRMkFkV2h0NWRRS3R2TWw1SDVKa292NWt6S3RGZUVKRDZ5Nk5mcVl1Wkc1bXdSYnR6OGlmRWxLc1RyX1R6dUoxNHN0?oc=5"
            },
            {
              "n": 81,
              "title": "이재용 \"온양, AI 반도체 심장 HBM 거점으로 탈바꿈\" - 뉴스핌",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTFA2cGd6YllhbGs1WDJGWU9jSlVvcFkzZ1Z3cnhBOUNTWlp6RVAwd1Vwd29YWUFrbzVnZFZzSmk4MER1MDRQLWVhVGFpNU9JbVNISkstN1NhTUJ4M3lF?oc=5"
            },
            {
              "n": 85,
              "title": "삼성 온양캠퍼스, 최첨단 HBM 거점으로…이재용 \"또 한번 도약\" - 매일경제 마켓",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5vcTFtRjBfRTNkUVFKNXZxV2NTeXNPdGJYblNyTlN5VW5mUC0tZlVNNF94aXhxS3ltRTBVOGdNY1NkeHpkZ3VlZTR3QVNxa2l5ZVE?oc=5"
            },
            {
              "n": 84,
              "title": "삼성전자, 아산 온양캠퍼스에 46조 원 투자…HBM 생산거점 육성 - BBS불교방송",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE52TDZqaUJFN1RaS2hIQzRMNHBlX2JITVlGeVE4T3pEamlHVURhTVMyZkI1amg1OFdSMW5DQVBiZjBod3k4ZWFFalJOYWltOTRyV2JBQzZDZFN1OVdvY29YQlFjOGs0ZFNJLUYw?oc=5"
            },
            {
              "n": 80,
              "title": "삼성, 충청권 144조 투자 본격화…HBM·OLED·반도체 기판 증설 - 디일렉",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE1lZ0hkTlhnVUZBSHU2ekZjZFJqQldDVEJqbWxVUVRDMEtrQTFCTk5BUG5ERkZuNWwwVVV1RlF1UFdERUZQbE9xY2tNOTVpaWxROUdESXc3cTlnZ1ZZYzNQbnItWDhZZw?oc=5"
            },
            {
              "n": 99,
              "title": "이재용 “온양, 삼성전자 최첨단 HBM 생산기지로 육성” - 주간한국",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5nM3R6cFBtdTRJMmM5UzdtQXVqbmhhLXZvZHp4RHNybmJocXFaNnhYZ0VzTUpBeExtWmFKel9CZ3JGQ2Nxa3UwYTlDQTF5QUdLckQzeVRWTE55bFJzaEU3djRnTmtoLXJrdmQwdE9vZXHSAXRBVV95cUxNQ1N3WVBZbEtUWktjaDYtWWNqZ2drMDNUSkg3YkpLNkRWZUNKa2Racm4zWWI2SElUWUZXcldzb1dlOWphaHRiRDZwZWhkbFBCbjVNdlBUSTVjRFJ1RFNtYUpsYW1OVG1RQUstbkNvWUhHMTcyRA?oc=5"
            },
            {
              "n": 82,
              "title": "이재용 \"AI 반도체 심장 만들겠다\"…삼성전자, 온양에 HBM 5개 라인 구축 - www.ebn.co.kr",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9MT0NFdkN2VnpSX29QSHNobUFwSjZIdERyZ3drOVBaTEt1Mk02dGRiNFp3S0x6TU1COTRLZE1aQTdrZGhnRWpiWkxCOFo4OU15XzFEeTdza21nbndrSFVfb0RFTzlHY1N3?oc=5"
            }
          ],
          "flags": [
            "예측 의심: 이번 투자로 반도체 기판 증설과 함께 차세대 메모리 시장에서의 경쟁력을 강화할 것으로 보입"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 3,
          "name": "중국 희토류 수출 통제와 공급망 영향",
          "easy": "중국이 희토류 수출 통제 조치를 내년 1월까지 연장하면서 글로벌 공급망에 차질이 빚어지고 있습니다. 이로 인해 이트륨 등 주요 희토류 가격이 급등하고 있는데요. 일본과 유럽 등은 공급망 자립에 난항을 겪으며 한국 등 다른 국가로부터 수입을 늘리는 등 대응에 나서고 있습니다.",
          "quote": "중국, 희토류 수출통제 유예 내년 1월까지 연장…EU 공급망 자립 '난항'",
          "member_count": 8,
          "sample_articles": [
            {
              "n": 190,
              "title": "[원자재] 중국 10월 희토류 수출 2.7% 증가, 누적 감소폭은 8.7%로 축소 - 버핏연구소",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFBNS2RDUkN1WGxtSDVMT1UwcXVsM3d6clU4NHV0NjVtV0xIZkRPOHljZ3E0eGZRVWI3NTduOUNtNFZaVFRWY2V4anRiWHpZZ1lGOUotSEdUczNjYnpGNDdUdmRB?oc=5"
            },
            {
              "n": 185,
              "title": "\"中수출통제로 희토류 이트륨 가격 1년새 9배로↑…日, 韓등서 수입 늘려\" - 뉴시스",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFAtSG5GUkZWNE1wTFZhckJUYi1RU1BiTVJicWJ3ZkxEME9QM2RkUHV3a2F5MTFmWGhlXzgtWXRQYmpDd21ER2pmb0QybEp0c0ZiX3NuYklyRks4S3F0MXNIRNIBeEFVX3lxTE5jcjhEMll6alRtTWxsVXZibFNoWFRSejZ5UlgybVhUeFlWTnVrWGp6RFpLdS1Mc2k5UjIxdFpUTEZtNXhkX1Y5SHI2bzR1cWdoOFhCZGY3UklkYkNFaDB5M0FVRmp0dDhXUDEzWXJBZWhMYWtnUGJfZg?oc=5"
            },
            {
              "n": 183,
              "title": "\"1년 새 9배 폭등, 수입량 70% 급감\"… 中 수출통제에 희토류 '이트륨' 쇼크 - 글로벌이코노믹",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNZTZxSTlSemRtNXJrc2xvR21SWnY1X2xUSWwxZkJ4WGMwQzctLVMtcjEzajQtRmRQSmhFQ1lYRFRjWWtyVUdMOXpDOFI1OEh0YzBBSlVRVkNkM0l3Sk0tOFRYcHhOckZIZDV3VGtBUFU1eGhjeVJlSEVINmd5ZFNYd181U1BtUTkz?oc=5"
            },
            {
              "n": 186,
              "title": "중국, 희토류 수출통제 유예 내년 1월까지 연장…EU 공급망 자립 '난항' - 헬로티",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE1EMUZMNnNvT1ZySlpNTVJ5OExaQkRSTmZWc1UySEgxeVFPcTluU0gwd1l3S2hoQWZLR21MOWhycnVzVUx2cHhqeS1JalplbzVheER5cU1YVFZlUUh1bmNj?oc=5"
            },
            {
              "n": 189,
              "title": "희토류 공급난 심화…中 수출통제에 유럽 가격 최대 125배 폭등 - 더구루",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1ZTmdZNG9hX1MybklHZDV1Q1BNek9wd2J5VWpDYmduX2hoc3czUFNyUll3X3pXVGhaT1ItMlBwT0VZd3VKTV9BY19SSFA1dzVBREhXZE5BaUF2OFBXdDFMeA?oc=5"
            },
            {
              "n": 184,
              "title": "중국, 10월 희토류 수출량 전월 대비 2.7% 증가 - CNews",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTE02YkVVQnE5Y18tZnpCcDQ5MFVrMmczTE1ZYVZET2xreFExOFlBVlloOFRBWnFkeFp5RDNGRV9pOV9iMi1aSTJpLVk0OVo0VVU5LVJUbVNjbjlCRGRZdmM0bGRGQTJ6MDgyT1dZVUR6VXBEdl8tYnhz?oc=5"
            },
            {
              "n": 187,
              "title": "中, 대미 24% 추가관세·희토류 통제강화 유예 2개월 연장(종합) - 국민기자뉴스",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5WZlJUTnZCOGhYOHhJUkc2QVhWRDRpTEFHMms2d1Vfd3BfM2dHejZIM2VhWk5nX1YtNTVIbjNiVDVudmt5N3k5RE5rLWo4YUlsX3RQNTRqbEg2ZkE2RHk4UWZvWS1EXzTSAWdBVV95cUxOVmZSVE52QjhoWDh4SVJHNkFYVkQ0aUxBRzJrNndVX3dwXzNnR3o2SDNlYVpOZ19WLTU1SG4zYlQ1bnZreTd5OUROay1qOGFJbF90UDU0amxINmZBNkR5OFFmb1ktRF80?oc=5"
            },
            {
              "n": 188,
              "title": "'中 때문에 초비상' 다급한 日…한국에도 SOS 쳤다 [도쿄나우] - 한국경제",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1BRGptWE4yZHNuUk1INW1ESjZnbEZ1aGxBOUJoR24wUTFMemdfSWlCdnhxUGpiY0VzSk1xSUo2eTVFV3o4ZFNJNF9hTVBqQkJXTHRCbThNYVM5QQ?oc=5"
            }
          ],
          "flags": [
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 4,
          "name": "데이터센터 전력 공급 및 비용 부담 논란",
          "easy": "AI 데이터센터가 급증하면서 전력 부족 문제가 심각해지고 있습니다. 미국에서는 데이터센터에 전력망 비용을 부담시키는 방안이 추진되고 있는데요. 마이크로소프트 등 기업들은 주민들에게 비용을 전가하지 않겠다고 밝혔지만, 전력망 확충을 둘러싼 갈등은 여전히 계속되고 있습니다.",
          "quote": "MS, 데이터센터 전력 자체 조달 추진...“지역 주민에 비용 전가 않겠다”",
          "member_count": 7,
          "sample_articles": [
            {
              "n": 128,
              "title": "데이터센터 반대 여론, 핵심은 결국 전력 문제 - MIT 테크놀로지 리뷰",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMipwJBVV95cUxPVV9uVldTV0RIZElqRFk2RFZlQ3NHRWpXdU9pT1FqRTk4eWFnSkk2T1ZEclVHb3A0Rnk2QkZOaEtTYm9FREpBVk9rQWxkbUZuYXRxZnF4d2ZhSTMwRm9wRnAxdGxFc2lnVnA1Ni0zWE54bDVnenhYTVBZc2ZlcF9OZi1GdFFoRDU2OW9RWWU4MWhEVWU1UDdJX0Z1eTFjUHRSTFZ5S3hvRW5TUlpUMThmeHlhQnlBYUl0UkNwU0ljUWJ6WjNtZmdjZ1pJR2pBd2hEbkVhbC1mMmpidVJjcDNOemdqc0ZyMHJIMVBrN0VGOHN6V1AxUldRVVZJV1FwbmlMMUc2Z2E2aU1PSnF"
            },
            {
              "n": 124,
              "title": "美 데이터센터 전력 부족에…항공기 엔진 재활용 시장 급성장 - 한국경제",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5Lamg1eWdEU0hrclFmTmpoUlg2bjJmTDhhSy1hamxkWmtSTnQ5M0psNklicTlydVFSc2tuQlo3ektNQzROXzFfYlJHUnh3eWNHeS1qLU42NG1GZw?oc=5"
            },
            {
              "n": 122,
              "title": "석탄발전소에 ‘인공호흡기’…탈석탄 늦추는 AI 데이터센터 - 에너지경제신문",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE1rVzJtWGJ4Rk9kSWFWckhDMnlkS3cwQlBiVFdJeUVFZl95UkRncDVNSVQ3MktLVzR5RnhrZFJnaFFqUXY5RU5obDR2ZktxY2ljVXktc0tGSjVEWTRZTWc?oc=5"
            },
            {
              "n": 127,
              "title": "MS, 데이터센터 전력 자체 조달 추진...“지역 주민에 비용 전가 않겠다” - M이코노미뉴스",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBtdzB6ZlpCR3libW9tc0xzejBOTnJUZ2ZCZnBZTWdEYWg0UWRjVWpTT2RacWJ4SXZ2N0c3SVdad29QWWstRW10N2t4UE8yamFmdkwyOThoSXpGOFF6Y0Jub056alhzbEU?oc=5"
            },
            {
              "n": 66,
              "title": "美 데이터센터에 전력망 비용 부담 추진…인허가 개편안 내주 표결 - 이데일리",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMigAFBVV95cUxOUDdNT0MtUGNRRkV3Z0NzVHVYQnNDeVI2SjVkaEFWYk5iYXJfRlJxcGhFakVTTkdyT0R6YWNXSGZYT20tc0hjdVo2MHJoZUxUQ2xjRzhrT0hsMW52U1F4QUhYOGJ4SXBLTzRXRVVzNUcyYkxzTHlCV2ZNT1o5YnU5Nw?oc=5"
            },
            {
              "n": 123,
              "title": "美텍사스 전력당국, 비상사태 전 데이터센터 전력 감축 의무화 추진 - 더구루",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFBUZk14TExzMXA2MDU1dWU3d1VZY1Exdngxcm43X1Y1UHN3NEs1YnNMYnkwNlRpM0kySm9wMlVaTkI5ajVtdmdpeVZPdVBEWnRpOHI3dVRlUmxUVk5ldlhRTVltYw?oc=5"
            },
            {
              "n": 129,
              "title": "MS \"데이터센터 전력비용, 주민 전가 없다\" - 연합뉴스",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBwRndfbURIV1M5TFpiYmRkakZ3RmtWZGM5X2hkWEFZUGJ0WG12Q0ZXX3pScFR2dUhyMjB5cjlNWHZ2R3d3Sy1xOC1JTFVzZXgwMm4wOFJqeGNSeVXSAWBBVV95cUxQRjZrcUJTYXBmdkp5MGI2OVR4em5IelduWHh1OGNzMGxmQlkzYUJzazJ5Nnp0bnhvQUpCblFXS2t0dG0xZFVJcHlmVUUwT2xsUW55Rm9tUF9DNHRzY2tOSzA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 5,
          "name": "한전 BIXPO 2026 개최 및 성과",
          "easy": "한국전력이 주최한 'BIXPO 2026'이 에너지 혁신 기술을 선보이며 막을 내렸습니다. 이번 행사에서 한전은 185만 달러 규모의 수출 계약과 업무협약을 체결하며 에너지 신기술의 사업화 가능성을 확인했는데요. 김동철 사장도 현장을 찾아 건식 바이오가스 시스템 등을 직접 살피며 기술 경쟁력을 강조했습니다.",
          "quote": "한전, ‘BIXPO 2026’ 폐막…185만 달러 규모 수출계약·MOU",
          "member_count": 5,
          "sample_articles": [
            {
              "n": 56,
              "title": "한국전력 '빅스포 2026' 폐막…25억원 규모 수출계약·MOU - 매일경제 마켓",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE00U0FXUVBqLUVpTWVYWFlJak1YUFhacFFRMnU3R01xU0FjeExfZXlpdGZLeTBsLUNsdG5LbWRPZ2tWZlBRQ0dmTzRkNUNyQnZrOGc?oc=5"
            },
            {
              "n": 57,
              "title": "한전, ‘BIXPO 2026’ 폐막… 에너지 혁신 기술, 투자와 사업화로 결실 맺었다 - 에너지데일리",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE5Ia29PMk9GWElrd2xkYmRZcTIyYlowVVRuOEJCS2VuMGp1U3NUaUhJY1YzeGhZeEU2dnRZOUQ2cU1FUU94cXlGWFBsSEw3c2lrRmtaaFAtYU5yTmJLRS1YWHQ5ZG9OYmhBM0huUkJaTV9ndw?oc=5"
            },
            {
              "n": 63,
              "title": "한전, ‘BIXPO 2026’ 폐막…185만 달러 규모 수출계약·MOU - 지디넷코리아",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5NNDZOWklJN0RfX3FqY1NzaUFnUGc3ODI3dEQwX2NJeGgwWm4tVzhnczBDWGEyajdBbUhuYlFnM2M5RlFVc2Y1Q2VQYmQ5cC1NaGtCV1ln?oc=5"
            },
            {
              "n": 71,
              "title": "한전 BIXPO 2026, 185만 달러 수출 성과…AI 전력망·에너지 신기술 사업화 본격화 - 에너지안전신문",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9NeHVYRDNWRkFJdFhrVFQ5cWFrMERFQWg0anF6MVg4SFE4Z011LUh4S3MwQnJGRms2aVBIMUh5ZXd0d3d6V3JSUWZ4Sk44d0JJdlZSRVVUdzdKN0M5d1FaX2VPd2Q?oc=5"
            },
            {
              "n": 62,
              "title": "김동철 한전 사장, BIXPO 그리네플 부스 찾아 건식 바이오가스 시스템 'ADOS' 살펴 - 전자신문",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE0xWl9hYXQ5YUhnZXlQakJrZlo3dXlOdm5pdDdGbVVST2UwczBWTEN1MDhreXRMNGZVU2lIajJJanJlcl9vdjhmWlJ5OFVzQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 6,
          "name": "미국 SMR 건설 허가와 국내 기업 수혜",
          "easy": "미국 엑스에너지가 텍사스주에 소형모듈원전(SMR) 건설 허가를 받으면서 관련 사업이 본격화되고 있습니다. 이에 따라 두산에너빌리티와 DL이앤씨 등 국내 기업들의 기자재 수주와 건설 참여 기회가 확대될 것이라는 전망이 나옵니다. 다만 실제 착공까지는 여러 변수가 남아있다는 분석도 있습니다.",
          "quote": "[단독] 美엑스에너지, 텍사스 SMR 건설 허가 받아...두산에너빌리티·DL이앤씨 수혜 본격화",
          "member_count": 4,
          "sample_articles": [
            {
              "n": 115,
              "title": "'DL이앤씨·두산 협력사' 엑스에너지 미국 SMR 건설 승인, \"실제 착공 여부는 미지수\" - 비즈니스포스트",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTFBJOVh0YTlVNWZfZjRJZmtiQ0FFaDkwc19Cc1BGOHdpc0hZMGxDWHpQbTRnaS0yVjJmNXJsVldhWFh6Snk0R2NZdDlMRlo4X09GX3VNRlpNcnRtM0RaYV9VZ1NfeFplM1JuVXpPLWpWaEpWSmM?oc=5"
            },
            {
              "n": 112,
              "title": "[단독] 美엑스에너지, 텍사스 SMR 건설 허가 받아...두산에너빌·DL이앤씨 수혜 본격화 - 더구루",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE0tZ09MeWdvLWFpdzY4UXdVUkZoRXhIMnJpUS0tRUNvdWdSUUNWeXYtQnY2cC13N0hSM2g0NVpDeGlDanFSWVQ1TWFnWTJzNEJzWFRRek43UV9lbTNLOGFxOU1vUQ?oc=5"
            },
            {
              "n": 109,
              "title": "미국 SMR 건설 허가에 커진 기회…두산에너빌리티, 제조 역량 수주로 잇나 - 이지경제",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBYb1RhMllZQi1GbmEyNnZTcGF5MzFHT0hucUo1OTByMTNLMjh5bjZvbDUxa1BxbmU0N0NHbHM5QzJGTF85MC1ndE5DMzVZdTJWTGRVNjkyTVQ2aG55d1hzRFo3R3hVektLRG5iRVl3?oc=5"
            },
            {
              "n": 111,
              "title": "美 SMR 건설 본격화…K-원전 기자재 수혜 전망은? - 이코리아",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5PTzN0OGJuWmxFTHVyLWsyQ2ZzVFktVUlycC1LSmxkX1p1UEt3U1RWZGRvODNqNjNTaW85MS15ZG9KSVJ6T1hpZVU1LUhseEtvM0oxVzNMaHNLZERocU9pUC1kWFZCTDJNa2Z3ajVwYw?oc=5"
            }
          ],
          "flags": [
            "대표 제목 인용이 원문과 다름"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 7,
          "name": "홈플러스 센텀시티점 단전 위기",
          "easy": "홈플러스 센텀시티점이 전기요금을 장기간 체납하면서 단전 위기에 처했습니다. 한국전력 부산울산본부는 입점 업체들의 영업 피해를 최소화하기 위해 전력 공급 유지 방안을 논의하고 있는데요. 반복되는 체납 문제로 인해 입점 상인들의 불안감이 커지고 있습니다.",
          "quote": "홈플러스 센텀시티점 단전 위기...한전부울본부, 입점업체 전기공급 대책 논의",
          "member_count": 4,
          "sample_articles": [
            {
              "n": 59,
              "title": "홈플러스 센텀시티점 단전 위기...한전부울본부, 입점업체 전기공급 대책 논의 - 전기신문",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5nak90TWRLZDFDV1hyVVhFdHl3eEpQZ0hkU0R4RHJqSUxTcWNYbzhrVWxNQXU2bzEyS3l3NGV4cEUxbE5CbHdxUWpmdk9ydVhsaE5vWW81bHdyNkU4cW1xbEM3dFJtQWhmaWJ6Zm4yOWvSAXBBVV95cUxOZ2pPdE1kS2QxQ1dYclVYRXR5d3hKUGdIZFNEeERyaklMU3FjWG84a1VsTUF1Nm8xMkt5dzRleHBFMWxOQmx3cVFqZnZPcnVYbGhOb1lvNWx3cjZFOHFtcWxDN3RSbUFoZmliemZuMjlr?oc=5"
            },
            {
              "n": 20,
              "title": "홈플러스 센텀시티점 단전 위기...한전부울본부, 입점업체 전기공급 대책 논의",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374679"
            },
            {
              "n": 58,
              "title": "한전 부울본부, 홈플러스 센텀시티점 전력 공급 유지 방안 모색 - 뉴스핌",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTFBacXA0aG5tWHIzcWx3VXFDekhab0pTcm5ibWVnSHNuM05OX3pWVFU3QnB3dWk0QnpjV1pBa3lxalppUDZsNVk5ZFhFTVBHcWNkbklIS0JvOXNrMDZH?oc=5"
            },
            {
              "n": 121,
              "title": "“홈플러스, 영업점도 전기세 반복 체납”…커지는 단전 위기 - 헤럴드경제",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5SNjBETFJZV2pYV2lfV2pVNGJkYURNc0V3azMycGFNVE5VUHlMN0FDVWgxdWo5N2VTYzY3OEwwRWFERHVuaFBxeERYZ2JxVnpqb2s1LXRR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 8,
          "name": "LS MnM 배터리 소재 공장 준공",
          "easy": "LS MnM이 창립 90주년을 맞아 배터리 소재 공장을 준공했습니다. 전기차 50만 대 분량의 배터리 소재를 생산할 수 있는 규모인데요. 이번 공장 준공을 통해 LS MnM은 단순 제련 기업을 넘어 핵심 소재 기업으로 도약하겠다는 비전을 선포했습니다.",
          "quote": "LS MnM, 전기차 50만대분 배터리소재 공장 준공…‘제련 넘어 핵심소재로’",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 177,
              "title": "구동휘 배터리 공장 준공…LS MnM 상장 시험대 - 자본시장뉴스",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1nQUNPdG90VlZtMm1aWGxnVlNKNmd6LWdvX0NCRnBaWVpJS0dtc1JsSHZEYUJMYWRoTGFacW9kakJkV0FTRnRvYnlGLWpkZG5pcG44UV90VkNFYjg3TWFfdlExai1lc00?oc=5"
            },
            {
              "n": 182,
              "title": "LS MnM, 전기차 50만대분 배터리소재 공장 준공…‘제련 넘어 핵심소재로’ - 에너지경제신문",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE1wYS1oTTExYWJKWVE5SkotQWJ2QldqN2gybFIxYzFYYnJ4T00xaEhsT3NIUUN6VE5fbTVpRTdCd3JEa1IzampLa0tEV0d3Rzd6aEp4VXlYYXo1dGItTGtsTFZ3?oc=5"
            },
            {
              "n": 180,
              "title": "LS MnM, 창립 90주년 맞아 새 비전 선포…배터리소재 온산공장 준공 - Daily NTN",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBxMER0LTdZT1liU2JNaV90TkdLWGtDZUh0Z203MVhNYkZ0NldXcGVhdzNHa3Z5NXU4YW9QQTctelJnbXZmaXBJc1d5WGduWTAtNm5tVFVFNzNhYUYyU0MwcFpjMGFxdVpjT3c?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 9,
          "name": "모듈러주택 특별법 분리발주 예외 논란",
          "easy": "정부가 모듈러주택 공급을 늘리기 위해 전기공사 분리발주 의무를 완화하는 특별법을 추진하고 있습니다. 하지만 전기공사업계는 안전과 품질을 이유로 강하게 반발하고 있는데요. 공기 단축이라는 효율성보다 전기 안전이 우선이라는 목소리가 높습니다.",
          "quote": "“주택공급 속도보다 전기안전 우선”…모듈러 특별법 분리발주 예외 논란",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 7,
              "title": "[모듈러 특별법 쟁점] “공기 단축은 공법의 효과”…분리발주 예외 실효성 논란",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374662"
            },
            {
              "n": 8,
              "title": "“주택공급 속도보다 전기안전 우선”…모듈러 특별법 분리발주 예외 논란",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374661"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        }
      ],
      "single_articles": [
        {
          "rank_by_count": 10,
          "name": "파운드화 하락, 美 CPI 호조·연준 금리인상 기대에 달러 강세",
          "easy": "",
          "quote": "파운드화 하락, 美 CPI 호조·연준 금리인상 기대에 달러 강세",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 51,
              "title": "파운드화 하락, 美 CPI 호조·연준 금리인상 기대에 달러 강세",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-2170273"
            }
          ],
          "flags": [],
          "unlumped_from": "미국 연준 금리 인상 전망과 빅스텝 논란",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 11,
          "name": "50bp 금리 인상? 워시가 이끄는 연준은 소통에 문제가 있다",
          "easy": "",
          "quote": "50bp 금리 인상? 워시가 이끄는 연준은 소통에 문제가 있다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 153,
              "title": "50bp 금리 인상? 워시가 이끄는 연준은 소통에 문제가 있다 - TradingView",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTE5LdHZwY0RTbF8wcXdXU0FTcEg4UDN1MmY5bTE1emU1ZDR1Rkhpem1oS2NDSEQzNjNfZkwtQ1lqRnJpWUgxNHI3R0hBRlp3NkUwaFJnd29sMEJYcGVFck9CbXIxNHNKQUxnTzJkMlhwTUs3WTVHNTlN?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "미국 연준 금리 인상 전망과 빅스텝 논란",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 12,
          "name": "\"12월 금리 50bp 인상도 고려\"…美연준 인사들 잇단 '빅스텝' 거론 - 머니투데이",
          "easy": "",
          "quote": "\"12월 금리 50bp 인상도 고려\"…美연준 인사들 잇단 '빅스텝' 거론 - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 147,
              "title": "\"12월 금리 50bp 인상도 고려\"…美연준 인사들 잇단 '빅스텝' 거론 - 머니투데이 - 머니투데이",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE1ScGVGSVdrZE9oYW5ZWm5KaEp0cnBUNmtZTjE5MWZQaGxWOVFnVkdTQkFxYlpvZV9id1VwNUFSNnRQaUZwM3NRNlB0RE5qdldLU3loY0p4YnBZOHhqMjFOaDRpb3h3V1p20gFuQVVfeXFMT0RTV0VVMHVyak0xZk9PaXpRX0h2V1dKU3Z4VEpfS1pndEdlb3dObjBKN2Y3enF1TUhYZmJvZUM4NXNETnpvZ21HTjMxX2RKcEllSVgzaW1PZXQ4OUc2UnFZM0RQMkpQZ2F0c3ZXUXc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "미국 연준 금리 인상 전망과 빅스텝 논란",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 13,
          "name": "미 연준, 기준 금리 ‘빅스텝’ 가능성…소비자 물가는 상승",
          "easy": "",
          "quote": "미 연준, 기준 금리 ‘빅스텝’ 가능성…소비자 물가는 상승",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 149,
              "title": "미 연준, 기준 금리 ‘빅스텝’ 가능성…소비자 물가는 상승 - KBS 뉴스",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBPcFo0NjFNS2NpRXVQeTVHcEpFSFNTWDJURnRRZzNYbkpUR1dxXzkwWVNta2tMbXJkWkNvdlVEeGhLdENsT0N1R2Y1Z0JPR1oxR1dwc05CMlJKMGM?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "미국 연준 금리 인상 전망과 빅스텝 논란",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 14,
          "name": "미국 인플레이션 심화, 골드만삭스 연준 금리 전망 변경",
          "easy": "",
          "quote": "미국 인플레이션 심화, 골드만삭스 연준 금리 전망 변경",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 150,
              "title": "미국 인플레이션 심화, 골드만삭스 연준 금리 전망 변경 - IDNFinancials",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMi6AJBVV95cUxNQlBLTFBCMVR0ZWdUdEVGbzVLN2daNU9PN2FpcTRyaUJqemFjcmhFMmtrVDBzZkEtTmdpYWE3ZkJseVZoS29SYUQxMzNlU0ctcEFqYTd2eEZ5Wl93bW41RFVFY3lhMnMxWlFZYnhxT3dkYU9DX0V1Q21fYnFrUXl3cXN1NUxjLUVuUExneGk4WTQyUmZpblpWbFdEaDZjXzUyWEswNVpvSDdLTV9wOFRFZGp6S0RNWnJpZHpyUjdfS3UtZ3NOdTBGQ0h5RzF0WGFQaG5yRlNHckVqVEFBRGRnUEVJTHo3TDZPV084MGpsRG42eHB1bl82LWNMNDBOdi05TVNFenptaEdRLXR"
            }
          ],
          "flags": [],
          "unlumped_from": "미국 연준 금리 인상 전망과 빅스텝 논란",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 15,
          "name": "BofA \"연준, 12월 후 1월도 인상\"…골드만삭스 \"1월 말고 3월\"",
          "easy": "",
          "quote": "BofA \"연준, 12월 후 1월도 인상\"…골드만삭스 \"1월 말고 3월\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 151,
              "title": "BofA \"연준, 12월 후 1월도 인상\"…골드만삭스 \"1월 말고 3월\" - KB Think",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE5iTnlaV0FTOGNZWnBDc01tTWxUaG9QdkpQZE9EYUEzNlh1ZTN4ME9ZZ2JabHJmUlJkamxhSXZXR0ZERDRXbzVGTnBHbTlwVlFSTTFvRWRVMWFQcVBPM0tQSWlodU1SYWNkSzJXMXRERm53UQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "미국 연준 금리 인상 전망과 빅스텝 논란",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 16,
          "name": "\"대출이자 또 오르나\"… 美 물가 0.4% 뛰자 '빅스텝' 거론, 26일 한은 금리가 분수령",
          "easy": "",
          "quote": "\"대출이자 또 오르나\"… 美 물가 0.4% 뛰자 '빅스텝' 거론, 26일 한은 금리가 분수령",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 158,
              "title": "\"대출이자 또 오르나\"… 美 물가 0.4% 뛰자 '빅스텝' 거론, 26일 한은 금리가 분수령 - 경제시그널",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTFBfaEQ4UDl6TG04cC1pNjA2ZlJBeVEtclFkdXlhaG1RTjVSYkdLWXl3NkJVXy1DcURGcjc0T2NKS0JhZGFCV1RXRFQ1TGZLSnpBQzh0MlhuVWxveHdwQVNrQWpSRXRzaVZWa29oNWg3UEhvcWs?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "미국 연준 금리 인상 전망과 빅스텝 논란",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 17,
          "name": "\"최종 3.50% 이상 오를지도\"…美 '빅스텝' 부상에 한은 긴축 고삐 조이나 - 머니투데이",
          "easy": "",
          "quote": "\"최종 3.50% 이상 오를지도\"…美 '빅스텝' 부상에 한은 긴축 고삐 조이나 - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 155,
              "title": "\"최종 3.50% 이상 오를지도\"…美 '빅스텝' 부상에 한은 긴축 고삐 조이나 - 머니투데이 - 머니투데이",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE5od28wSHI0TmhIRmJPZ2t0ajlxZXBYVGxFVnVVb2h3M2hqa3FtcGxPRXdObVkzQXI0VG03azVrUXptWjR0WlRHTHNGWTl0azNsN3hHZENCY0twU1pYTkczUmpfYzNvR2ZaOGRF0gFwQVVfeXFMTnNxc3hENEUzNUpVd2M2Z0V3R1JvNnNfS2R5aDRibi03Sjl6ZU9iU29kWkVheHVwcy1LWXJ6RFZLcHU4V2ZXT2xGT24zaXEtbHRoLW52Y0xqdUlRVWdKX09TOW9tMHc0ZzY0M0hDS2o2Wg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "미국 연준 금리 인상 전망과 빅스텝 논란",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 18,
          "name": "美연준, '빅스텝'이냐 '연속 인상'이냐…긴축 속도 논쟁 가열",
          "easy": "",
          "quote": "美연준, '빅스텝'이냐 '연속 인상'이냐…긴축 속도 논쟁 가열",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 152,
              "title": "美연준, '빅스텝'이냐 '연속 인상'이냐…긴축 속도 논쟁 가열 - 연합뉴스",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE0waU1FdTFJckN4b0NLRjYwY3hHSnlCUFBFd0poRWVnNU5BaWtqX25xS2p3S2ZyVElyUTQ3Sk1Zc242UVZkQjR5QkJ1a2d6Z2gwWVlvN0lYeXR1Nm_SAWBBVV95cUxPS1E4XzY5d0d1dm9SMXp2enpsVEJZQmRxNGZ1NWlOSHIwWWdYNHJSbGMzakJBNFVpcHQzZTNpX2I5aDFmNG5oS3hSS3N2ZUFlMm5GSURYbmpfSTJnUnZGd1A?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "미국 연준 금리 인상 전망과 빅스텝 논란",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 19,
          "name": "\"12월 연준 금리 동결 가능성 배제하지 않아야\" |",
          "easy": "",
          "quote": "\"12월 연준 금리 동결 가능성 배제하지 않아야\" |",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 146,
              "title": "\"12월 연준 금리 동결 가능성 배제하지 않아야\" | - 연합인포맥스",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5tNjNkZjJOaWM5UEhJeEszWWxuQ0NqbmNyM3RBeWZnbDZ3elVxNmlEZUVpYUh3R0lITGJ3dmI0czM0Z3Etb0VkSV9mN3BxYzVZMWFLZVlXUl9vUWRXNW9IU2NBd3JSYXhBLXA1ZFVpZkNQLXRU?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "미국 연준 금리 인상 전망과 빅스텝 논란",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 20,
          "name": "미국 물가 급등·연준 매파 발언에 글로벌 채권시장 흔들…50bp 인상 우려",
          "easy": "",
          "quote": "미국 물가 급등·연준 매파 발언에 글로벌 채권시장 흔들…50bp 인상 우려",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 52,
              "title": "미국 물가 급등·연준 매파 발언에 글로벌 채권시장 흔들…50bp 인상 우려",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-2170266"
            }
          ],
          "flags": [],
          "unlumped_from": "미국 연준 금리 인상 전망과 빅스텝 논란",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 21,
          "name": "달러, 美 물가 상승·연준 금리 인상 전망에 강세…엔화 6주 만의 최저치 근접",
          "easy": "",
          "quote": "달러, 美 물가 상승·연준 금리 인상 전망에 강세…엔화 6주 만의 최저치 근접",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 53,
              "title": "달러, 美 물가 상승·연준 금리 인상 전망에 강세…엔화 6주 만의 최저치 근접",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-2169923"
            }
          ],
          "flags": [],
          "unlumped_from": "미국 연준 금리 인상 전망과 빅스텝 논란",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 22,
          "name": "“기후행동 실천하면 포인트·금리우대”…민관 금융협력 체계 구축",
          "easy": "",
          "quote": "“기후행동 실천하면 포인트·금리우대”…민관 금융협력 체계 구축",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1,
              "title": "“기후행동 실천하면 포인트·금리우대”…민관 금융협력 체계 구축",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374702"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 23,
          "name": "무보·코트라·우리은행, 소부장 공급망 안정화 위해 맞손",
          "easy": "",
          "quote": "무보·코트라·우리은행, 소부장 공급망 안정화 위해 맞손",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 2,
              "title": "무보·코트라·우리은행, 소부장 공급망 안정화 위해 맞손",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374699"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 24,
          "name": "기계설비건설공제조합, ‘혁신으로 여는 100년 미래’ 선포…창립 30주년 기념식",
          "easy": "",
          "quote": "기계설비건설공제조합, ‘혁신으로 여는 100년 미래’ 선포…창립 30주년 기념식",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 3,
              "title": "기계설비건설공제조합, ‘혁신으로 여는 100년 미래’ 선포…창립 30주년 기념식",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374698"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 25,
          "name": "겨울도 안 왔는데 한낮 SMP 183원…전력시장 ‘살얼음판’",
          "easy": "",
          "quote": "겨울도 안 왔는데 한낮 SMP 183원…전력시장 ‘살얼음판’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 4,
              "title": "겨울도 안 왔는데 한낮 SMP 183원…전력시장 ‘살얼음판’",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374673"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 26,
          "name": "수십만 가구 난방해도 LNG는 소매…집단E ‘100MW 족쇄’",
          "easy": "",
          "quote": "수십만 가구 난방해도 LNG는 소매…집단E ‘100MW 족쇄’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 5,
              "title": "수십만 가구 난방해도 LNG는 소매…집단E ‘100MW 족쇄’",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374689"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 27,
          "name": "한난, ESG 평가서 상장공기업 최고 ‘A등급’…7년 연속 달성",
          "easy": "",
          "quote": "한난, ESG 평가서 상장공기업 최고 ‘A등급’…7년 연속 달성",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 6,
              "title": "한난, ESG 평가서 상장공기업 최고 ‘A등급’…7년 연속 달성",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374696"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 28,
          "name": "국산 온디바이스 AI반도체 10종 개발…민관 컨트롤타워 출범",
          "easy": "",
          "quote": "국산 온디바이스 AI반도체 10종 개발…민관 컨트롤타워 출범",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 9,
              "title": "국산 온디바이스 AI반도체 10종 개발…민관 컨트롤타워 출범",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374692"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 29,
          "name": "하늘 모빌리티 잰걸음...UAM 인증·교통관리, 드론 국산화·실전검증",
          "easy": "",
          "quote": "하늘 모빌리티 잰걸음...UAM 인증·교통관리, 드론 국산화·실전검증",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 10,
              "title": "하늘 모빌리티 잰걸음...UAM 인증·교통관리, 드론 국산화·실전검증",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374614"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 30,
          "name": "(2026 한국국제승강기엑스포) 승강기안전주간 기념식서 유공자 포상",
          "easy": "",
          "quote": "(2026 한국국제승강기엑스포) 승강기안전주간 기념식서 유공자 포상",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 11,
              "title": "(2026 한국국제승강기엑스포) 승강기안전주간 기념식서 유공자 포상",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374674"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 31,
          "name": "[COP31] 사상 첫 ‘전기화 35%’ 목표 제시…현장에선 “전력망·요금 개편이 먼저”",
          "easy": "",
          "quote": "[COP31] 사상 첫 ‘전기화 35%’ 목표 제시…현장에선 “전력망·요금 개편이 먼저”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 12,
              "title": "[COP31] 사상 첫 ‘전기화 35%’ 목표 제시…현장에선 “전력망·요금 개편이 먼저”",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374672"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 32,
          "name": "정비 접근성이 곧 브랜드 경쟁력...불 뿜는 상용차 ‘정비 경쟁’",
          "easy": "",
          "quote": "정비 접근성이 곧 브랜드 경쟁력...불 뿜는 상용차 ‘정비 경쟁’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 13,
              "title": "정비 접근성이 곧 브랜드 경쟁력...불 뿜는 상용차 ‘정비 경쟁’",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374654"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 33,
          "name": "GTX-A, ITA 어워즈 대형 프로젝트 부문 금상…국내 첫 수상",
          "easy": "",
          "quote": "GTX-A, ITA 어워즈 대형 프로젝트 부문 금상…국내 첫 수상",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 14,
              "title": "GTX-A, ITA 어워즈 대형 프로젝트 부문 금상…국내 첫 수상",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374688"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 34,
          "name": "(파워인터뷰) 임익순 대한전선 에너지부문장 “동해안~동서울 HVDC 수주는 글로벌 영토 확장 디딤돌”",
          "easy": "",
          "quote": "(파워인터뷰) 임익순 대한전선 에너지부문장 “동해안~동서울 HVDC 수주는 글로벌 영토 확장 디딤돌”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 15,
              "title": "(파워인터뷰) 임익순 대한전선 에너지부문장 “동해안~동서울 HVDC 수주는 글로벌 영토 확장 디딤돌”",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374684"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 35,
          "name": "현대로템, ESG 통합평가 3년 연속 A+…지속가능경영 성과 인정",
          "easy": "",
          "quote": "현대로템, ESG 통합평가 3년 연속 A+…지속가능경영 성과 인정",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 16,
              "title": "현대로템, ESG 통합평가 3년 연속 A+…지속가능경영 성과 인정",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374686"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 36,
          "name": "LH, 광명시흥·용인 반도체 사업에 2조원 추가 투자",
          "easy": "",
          "quote": "LH, 광명시흥·용인 반도체 사업에 2조원 추가 투자",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 17,
              "title": "LH, 광명시흥·용인 반도체 사업에 2조원 추가 투자",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374685"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 37,
          "name": "한·일 철도연구기관, 철도 국제표준 공동 대응 강화",
          "easy": "",
          "quote": "한·일 철도연구기관, 철도 국제표준 공동 대응 강화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 18,
              "title": "한·일 철도연구기관, 철도 국제표준 공동 대응 강화",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374683"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 38,
          "name": "[KECA 네트워크] 경기도회 산악회, 낙찰기원제 및 11월 정기산행",
          "easy": "",
          "quote": "[KECA 네트워크] 경기도회 산악회, 낙찰기원제 및 11월 정기산행",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 19,
              "title": "[KECA 네트워크] 경기도회 산악회, 낙찰기원제 및 11월 정기산행",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374680"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 39,
          "name": "박영도 동의대 교수, 제27대 대한용접·접합학회장 선출",
          "easy": "",
          "quote": "박영도 동의대 교수, 제27대 대한용접·접합학회장 선출",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 21,
              "title": "박영도 동의대 교수, 제27대 대한용접·접합학회장 선출",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374593"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 40,
          "name": "(특별기고)수소산업 육성을 위해 인천시와 영흥발전소의 역할",
          "easy": "",
          "quote": "(특별기고)수소산업 육성을 위해 인천시와 영흥발전소의 역할",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 22,
              "title": "(특별기고)수소산업 육성을 위해 인천시와 영흥발전소의 역할",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374637"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 41,
          "name": "회원사와 접점 넓히는 전기산업진흥회, 차세대 리더와 소통·상생 채널 구축",
          "easy": "",
          "quote": "회원사와 접점 넓히는 전기산업진흥회, 차세대 리더와 소통·상생 채널 구축",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 23,
              "title": "회원사와 접점 넓히는 전기산업진흥회, 차세대 리더와 소통·상생 채널 구축",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374678"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 42,
          "name": "한전산업, 태안사업처서 노사 합동 푸드트럭 행사 개최",
          "easy": "",
          "quote": "한전산업, 태안사업처서 노사 합동 푸드트럭 행사 개최",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 24,
              "title": "한전산업, 태안사업처서 노사 합동 푸드트럭 행사 개최",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374677"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 43,
          "name": "전력거래소, 동신대 최고위과정 교육생 대상 전력산업 현장교육",
          "easy": "",
          "quote": "전력거래소, 동신대 최고위과정 교육생 대상 전력산업 현장교육",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 25,
              "title": "전력거래소, 동신대 최고위과정 교육생 대상 전력산업 현장교육",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374676"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 44,
          "name": "국산 ’항암 유도미사일’ 실전배치 초읽기…CAR-T 시장 판도 변화 주목",
          "easy": "",
          "quote": "국산 ’항암 유도미사일’ 실전배치 초읽기…CAR-T 시장 판도 변화 주목",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 26,
              "title": "국산 ’항암 유도미사일’ 실전배치 초읽기…CAR-T 시장 판도 변화 주목",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2171853"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 45,
          "name": "스페이스X에 웃고 우는 미래에셋…리딩 증권사 독주 제동",
          "easy": "",
          "quote": "스페이스X에 웃고 우는 미래에셋…리딩 증권사 독주 제동",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 27,
              "title": "스페이스X에 웃고 우는 미래에셋…리딩 증권사 독주 제동",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2171864"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 46,
          "name": "HM그룹, 뉴욕 맨해튼에 1800억 투자…김한모 회장 \"해외 개발사업 확대\"",
          "easy": "",
          "quote": "HM그룹, 뉴욕 맨해튼에 1800억 투자…김한모 회장 \"해외 개발사업 확대\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 28,
              "title": "HM그룹, 뉴욕 맨해튼에 1800억 투자…김한모 회장 \"해외 개발사업 확대\"",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2171863"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 47,
          "name": "[현장] 딥엑스 \"엔비디아 생태계 끌어안는다\"…내달 美 본사 찾아 ’접점 확대’",
          "easy": "",
          "quote": "[현장] 딥엑스 \"엔비디아 생태계 끌어안는다\"…내달 美 본사 찾아 ’접점 확대’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 29,
              "title": "[현장] 딥엑스 \"엔비디아 생태계 끌어안는다\"…내달 美 본사 찾아 ’접점 확대’",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2171866"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 48,
          "name": "[현장] 삼성 CSR의 진화…임직원 10만8000명 움직인 ’나눔 선순환’",
          "easy": "",
          "quote": "[현장] 삼성 CSR의 진화…임직원 10만8000명 움직인 ’나눔 선순환’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 31,
              "title": "[현장] 삼성 CSR의 진화…임직원 10만8000명 움직인 ’나눔 선순환’",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2171865"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 49,
          "name": "대웅제약, ’장 점막 재생’ 신약 임상 1상…기술도입 계약 이후 6개월 만",
          "easy": "",
          "quote": "대웅제약, ’장 점막 재생’ 신약 임상 1상…기술도입 계약 이후 6개월 만",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 32,
              "title": "대웅제약, ’장 점막 재생’ 신약 임상 1상…기술도입 계약 이후 6개월 만",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2171854"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 50,
          "name": "코웨이, 동반성장지수 2년 연속 ’우수’…협력사 지원 성과",
          "easy": "",
          "quote": "코웨이, 동반성장지수 2년 연속 ’우수’…협력사 지원 성과",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 33,
              "title": "코웨이, 동반성장지수 2년 연속 ’우수’…협력사 지원 성과",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2171862"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 51,
          "name": "셀트리온, 코센틱스 바이오시밀러 ’비세큐마’ 호주 품목허가 신청",
          "easy": "",
          "quote": "셀트리온, 코센틱스 바이오시밀러 ’비세큐마’ 호주 품목허가 신청",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 34,
              "title": "셀트리온, 코센틱스 바이오시밀러 ’비세큐마’ 호주 품목허가 신청",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2171852"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 52,
          "name": "[현장] \"코인 법인시장, 투자 허용 넘어 금융 활용까지\"",
          "easy": "",
          "quote": "[현장] \"코인 법인시장, 투자 허용 넘어 금융 활용까지\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 35,
              "title": "[현장] \"코인 법인시장, 투자 허용 넘어 금융 활용까지\"",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2171855"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 53,
          "name": "일본 PPI 인플레이션, 10월 예상치 크게 웃돌아",
          "easy": "",
          "quote": "일본 PPI 인플레이션, 10월 예상치 크게 웃돌아",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 36,
              "title": "일본 PPI 인플레이션, 10월 예상치 크게 웃돌아",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-2171678"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 54,
          "name": "이탈리아 9월 산업생산, 전월 대비 1.2% 증가",
          "easy": "",
          "quote": "이탈리아 9월 산업생산, 전월 대비 1.2% 증가",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 37,
              "title": "이탈리아 9월 산업생산, 전월 대비 1.2% 증가",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-93CH-2170279"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 55,
          "name": "독일 10월 인플레이션, 예상대로 2.8%로 둔화…근원물가 2.1%",
          "easy": "",
          "quote": "독일 10월 인플레이션, 예상대로 2.8%로 둔화…근원물가 2.1%",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 38,
              "title": "독일 10월 인플레이션, 예상대로 2.8%로 둔화…근원물가 2.1%",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-2170192"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 56,
          "name": "MSCI 지수 강등 우려에 인도네시아 루피아화 사상 최저",
          "easy": "",
          "quote": "MSCI 지수 강등 우려에 인도네시아 루피아화 사상 최저",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 46,
              "title": "MSCI 지수 강등 우려에 인도네시아 루피아화 사상 최저",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-2171786"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 57,
          "name": "아시아 외환, 달러 19개월 최고치에 약세 지속…엔화 160엔 근접",
          "easy": "",
          "quote": "아시아 외환, 달러 19개월 최고치에 약세 지속…엔화 160엔 근접",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 47,
              "title": "아시아 외환, 달러 19개월 최고치에 약세 지속…엔화 160엔 근접",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-2171758"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 58,
          "name": "뱅크오브아메리카: 개인투자자 엔화 매도 늘지만 해외 자금 유입이 상쇄",
          "easy": "",
          "quote": "뱅크오브아메리카: 개인투자자 엔화 매도 늘지만 해외 자금 유입이 상쇄",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 48,
              "title": "뱅크오브아메리카: 개인투자자 엔화 매도 늘지만 해외 자금 유입이 상쇄",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-93CH-2170755"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 59,
          "name": "자금 유입에 INR/USD 6개월 만에 최고치",
          "easy": "",
          "quote": "자금 유입에 INR/USD 6개월 만에 최고치",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 49,
              "title": "자금 유입에 INR/USD 6개월 만에 최고치",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-93CH-2170469"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 60,
          "name": "Citi “일본 증시 추가 조정 땐 엔화 강세 가능성”",
          "easy": "",
          "quote": "Citi “일본 증시 추가 조정 땐 엔화 강세 가능성”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 50,
              "title": "Citi “일본 증시 추가 조정 땐 엔화 강세 가능성”",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-93CH-2170408"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 61,
          "name": "[인터뷰] 김명룡 전태협 회장 “지역별요금제 수도권 부담, 왜 지방 태양광 사업자에 전가하나”",
          "easy": "",
          "quote": "[인터뷰] 김명룡 전태협 회장 “지역별요금제 수도권 부담, 왜 지방 태양광 사업자에 전가하나”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 60,
              "title": "[인터뷰] 김명룡 전태협 회장 “지역별요금제 수도권 부담, 왜 지방 태양광 사업자에 전가하나” - 기후에너지데이터뱅크",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiXkFVX3lxTFBmTDktMVcxdkl0M09saVh3M3QzZXRTOEFQYU5JWXFzNmRBTEpUa2JvNkN6MWtwWEhIT2R2VE5sWTlwQU1oQ01ISEQzM05mTDRmUnFScUhhV0tnTjJhZHc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 62,
          "name": "한국전력공사와 중부건설본부, 예산사랑장학회에 1000만원 장학금 기탁",
          "easy": "",
          "quote": "한국전력공사와 중부건설본부, 예산사랑장학회에 1000만원 장학금 기탁",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 61,
              "title": "한국전력공사와 중부건설본부, 예산사랑장학회에 1000만원 장학금 기탁 - 국토매일",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiREFVX3lxTE13aURXdWlBekRRRXM1WXZXQlp2Y3NEWmZaOFZuS1J5Mzd1U01BSThCVEt0c1lQSWJNM2xlTzlyNGNyZGFP?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 63,
          "name": "[현장] “AI 강국의 조건은 전력망”…송전탑 갈등, 주민 소득과 결정권으로 풀 수 있나",
          "easy": "",
          "quote": "[현장] “AI 강국의 조건은 전력망”…송전탑 갈등, 주민 소득과 결정권으로 풀 수 있나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 64,
              "title": "[현장] “AI 강국의 조건은 전력망”…송전탑 갈등, 주민 소득과 결정권으로 풀 수 있나 - 테크42",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiogJBVV95cUxPMmh3WEdGUngwYldobUl2LWs4MDMyN3lubEFDeFhHeDRHQzVaZTJvTVJITlNBZXA3TUZ3UndIT1QzVzVLemZVRjJMS3gwejktQlB4WmRrMEZjUS1yZDJSNG0yY1VVU1RDeTNQMXR0R2szZEFKY2ZhNllHdHZ1U3pwVGs1YWRsVXJfSHFLU0JWa2lWZk93SWEtdlIyb2Y1TVVTNldQQXNNTUc2RkR2U1NxM3Frb21tbHdLejJXUEpPM1hlVnNvTUFHamxxUUZRb1l5a3NncWdieEJWM0dLZldvWW8yTUYxY0VkSEp4a09leXByNDVyQmRTSzVBSWlLd2tfazZVazJiamxvTGF"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 64,
          "name": "한전, 의령 송전선로 건설사업 대의 천곡, 송전탑 증설 반대 집회",
          "easy": "",
          "quote": "한전, 의령 송전선로 건설사업 대의 천곡, 송전탑 증설 반대 집회",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 65,
              "title": "한전, 의령 송전선로 건설사업 대의 천곡, 송전탑 증설 반대 집회 - 의령신문",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE9ELUdjM3NYMkwxSXdDS2kxOFhjMXU5bWJqVmpheG1Xek9wYTBMeWtCci0tUmo1cVNXVFl6aGVOYzc5U01WSXRnVHdBTWZvdU13TE9B?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 65,
          "name": "호남 반도체 전력망 내년 1월 착공…전력공급 인프라 구축 속도",
          "easy": "",
          "quote": "호남 반도체 전력망 내년 1월 착공…전력공급 인프라 구축 속도",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 68,
              "title": "호남 반도체 전력망 내년 1월 착공…전력공급 인프라 구축 속도 - 전자신문",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE54VzVRTlpDU1pHWnJlZTVOOUtPZk4xME1iUURLNndHTUcybm01b3JnOExXRjltS0JDOVFHRjlRdDU2LXFULTBaRXdpM3ZIUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 66,
          "name": "충청권 관통하는 국가 전력망 27개 사업…한전, 송전탑 갈등 해소할 실질적 대책 내놔야",
          "easy": "",
          "quote": "충청권 관통하는 국가 전력망 27개 사업…한전, 송전탑 갈등 해소할 실질적 대책 내놔야",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 70,
              "title": "충청권 관통하는 국가 전력망 27개 사업…한전, 송전탑 갈등 해소할 실질적 대책 내놔야 - 뉴스홈(newshome)",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9MSkJfLWFFVzNScTZncGttamprSVNZVmNLWDdiTkZmSzdwMkFWdGtnTzdVNWZEVkhnZ2JCeTJHZ211c1ItVW5zZE41Q0k1RDN2QW90aUlPWXdhdWxwOHFBYnV3U3FCcFJneElkNUZn?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 67,
          "name": "[모닝 리포트] \"일진전기, 북미 변압기 호황에 중전기 영업익 급증…성장 지속\"",
          "easy": "",
          "quote": "[모닝 리포트] \"일진전기, 북미 변압기 호황에 중전기 영업익 급증…성장 지속\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 72,
              "title": "[모닝 리포트] \"일진전기, 북미 변압기 호황에 중전기 영업익 급증…성장 지속\" - 뉴스핌",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE1YWVNjQ2lrdE5mbnBCVVhuYmY4M2FnRU1wUkdTUHJFSjl3TnV2ZUVSSFRKZHZlWHdWOWdiOVFNeGlfSk5OTldWTzdTaTBNY200Q0hTaEhjQnJDeUpT?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 68,
          "name": "국제전기, 오세진 신임 대표이사 선임… \"데이터 기반 북미 전력망 공략\" - 머니투데이",
          "easy": "",
          "quote": "국제전기, 오세진 신임 대표이사 선임… \"데이터 기반 북미 전력망 공략\" - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 73,
              "title": "국제전기, 오세진 신임 대표이사 선임… \"데이터 기반 북미 전력망 공략\" - 머니투데이 - 머니투데이",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE53M3hxZ1lWNWdHRWtCM2RsUnVmckI2U3dXa2JaOEZEZUJZVG1jOGtNc2ZqUzZYci1yUHhkdFhHbFdMQmFiMkFvaTY4VFhIRHNzSmlPMXp5Sl9uU2xPdGxhd25BWkN3WHlfcjFJRtIBckFVX3lxTE9fZWEwOFA4SXJpdmFlcW81ZGRyR2JjQmphR2o4RHhXeENacmZ5b3ZXYnAyMTYwUGxMcFhrdEhDUU52SHI4Q0U2ZkdGdjlRVi0tWDhpdnBtbTRPTE0wdjNYbjh4dHNJYkYwbW16c1d4aWNRdw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 69,
          "name": "변압기 검사 로봇 시장 2035년 전망: 노후 전력 인프라와 예측 정비 수요가 성장 견인 - 뉴스 및 통계",
          "easy": "",
          "quote": "변압기 검사 로봇 시장 2035년 전망: 노후 전력 인프라와 예측 정비 수요가 성장 견인 - 뉴스 및 통계",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 74,
              "title": "변압기 검사 로봇 시장 2035년 전망: 노후 전력 인프라와 예측 정비 수요가 성장 견인 - 뉴스 및 통계 - IndexBox",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMi7AFBVV95cUxOVFhiSzZNZm1PVHRxb1ZtZFFwcTE4TDZiVDJkb3JKM1hVdFFLeUZobFUzTjNpU0J4V3Nya3dKa3VIdkdxNmMzdlN0T1BaaGc4aXo0X25YQUJBaWJySU14RXN0VXRHWWhxQnN4R2g3UE1WcjJkZ2g1QS1JNjExenY1eU5MMDlVdG0xQzduVVlBUmc2X2xJUWU4VXRsaDlsamdGY2JmZkV3eVpkUm1RWVAxbEpqZEJEUmhsTGY5UzhzNHRXc3NTWm1SeEFyLXNBc3N3Tmp4REZZRW9ONkdGazgxNThHWFVoSjZ0SXg1dQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 70,
          "name": "패밀리 비즈니스 부문, 기술경영 50년 … 전력설비 글로벌 시장 열어",
          "easy": "",
          "quote": "패밀리 비즈니스 부문, 기술경영 50년 … 전력설비 글로벌 시장 열어",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 75,
              "title": "패밀리 비즈니스 부문, 기술경영 50년 … 전력설비 글로벌 시장 열어 - 매일경제 마켓",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBZOGU5YjhHbFhqWTd5SnJWTFZYZk50cVVzOWlyYXlfX2tQZ0hTdWR3dDg1VlNmRVAtM1FyRmlBS2dudEdWNWFhbFNmT1N6VDZNWEE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 71,
          "name": "일진전기, 올 3Q 서프라이즈급 실적 달성...글로벌 호황에 수주고도 ‘탄탄’",
          "easy": "",
          "quote": "일진전기, 올 3Q 서프라이즈급 실적 달성...글로벌 호황에 수주고도 ‘탄탄’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 76,
              "title": "일진전기, 올 3Q 서프라이즈급 실적 달성...글로벌 호황에 수주고도 ‘탄탄’ - 전기신문",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1ISDd0WVNGYVhBVUhEQ1J0X2pIRXBwMkRaWUVab3RGeGpqd0IxQ1lsT1NRU3J4VGxheU1HTElSalNrN19hM3UtNXRfTXRrVWpFQmI5V3p2bWFZeV9ITTV3SUVub2tyVlpXWUxmMVFmWXTSAXBBVV95cUxNSEg3dFlTRmFYQVVIRENSdF9qSEVwcDJEWllFWm90RnhqandCMUNZbE9TUVNyeFRsYXlNR0xJUmpTazdfYTN1LTV0X010a1VqRUJiOVd6dm1hWXlfSE01d0lFbm9rclZaV1lMZjFRZll0?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 72,
          "name": "전력 수퍼사이클 올라탄 일진전기 3분기 영업이익 98% 폭증",
          "easy": "",
          "quote": "전력 수퍼사이클 올라탄 일진전기 3분기 영업이익 98% 폭증",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 78,
              "title": "전력 수퍼사이클 올라탄 일진전기 3분기 영업이익 98% 폭증 - CNews",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTE51VXA5RmpBMG0yTHZTQ0c3eHZEYkJlTVhuMVhQX0tieGxvTE81dDU0MXYxWk1HUGIxVkExRllSREdwQVdnMVBHY2NvT3BLVmJsV0FoOW1wdnhMSU4xOEdrUmhWVHlmNlB3S0xFRzhpOXQ2Z0l4bHpN?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 73,
          "name": "공정 바꾸고 HBM 품고…삼성, 파운드리 세대교체",
          "easy": "",
          "quote": "공정 바꾸고 HBM 품고…삼성, 파운드리 세대교체",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 87,
              "title": "공정 바꾸고 HBM 품고…삼성, 파운드리 세대교체 - 블로터",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBpS253YkdmOWJtQnE0S1hkbjF2cXhhZVVZbm9pNnc0MmxUQ0pyLUR6Zy1pXy1OOUxDQkRqSnY3SllvaXZ4RHM3dWZBNG9QNEtHZEM5VXo4ZzUyZFpTSWRQNXNaS0pkQ01s0gFsQVVfeXFMT3dhTzJnaTk0WEotYjRWMkZMWEJSUjI0QnhJQXpDTktzY0FIb3FFQ0xKVTY0NHhTM0RYeE9oVkFtS1BNNy1aaGdqQmRnTHdZZXc1WDREaFpWcWFMMVliQzRxdHU5OFh3Z2ZaM3hT?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 74,
          "name": "SK하이닉스: 100조 원 벌고, 100조 원 주주환원해요",
          "easy": "",
          "quote": "SK하이닉스: 100조 원 벌고, 100조 원 주주환원해요",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 88,
              "title": "SK하이닉스: 100조 원 벌고, 100조 원 주주환원해요 - 네이버페이 머니스토리",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1SajEwTjlfQ0lkOE9QN0xGNlVLZ1MzckNPU1RLRTM0M0Y0dWlFbTMydWFQVHpnOUljcUNnN2tuRzhNakljcHZtMTZzQTVLZXRlcVd1TWtOU2M?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 75,
          "name": "SK하이닉스, 메모리 장벽 해결책으로 '거대 메모리 풀' 제안 |",
          "easy": "",
          "quote": "SK하이닉스, 메모리 장벽 해결책으로 '거대 메모리 풀' 제안 |",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 89,
              "title": "SK하이닉스, 메모리 장벽 해결책으로 '거대 메모리 풀' 제안 | - 연합인포맥스",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE1iZDVGYnpXaE1KS3JWXzZvSmFBYTZrbzNmV3Zrdm4zbmVTaXRGcHRHOG5uaFQ4eUkzTmV1V3BvMWZ5NTNVSUNTU296Z1dLS3NfUGQ5MHplcUtiQTJndENBSDZiaXdBSFJnRjNVdkJnNmx1VHNk?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 76,
          "name": "가스안전공사, SK하이닉스 청주공장 점검…동절기 가스사고 예방",
          "easy": "",
          "quote": "가스안전공사, SK하이닉스 청주공장 점검…동절기 가스사고 예방",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 91,
              "title": "가스안전공사, SK하이닉스 청주공장 점검…동절기 가스사고 예방 - 에너지데일리",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTFAxNk8zak9XWDNsTzgxVFRyRXQwOGZqYXBlaGpPOFFkNWs0SzBHb08wU1FDdFNBdmFIb08wZ0gySDEybnZNMGs3WkV6THhqaVh4d213YVVaSkxqUk9iOEMxc3FBYTJLc1hBSU1KWHhnQ092UQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 77,
          "name": "SK하이닉스, 인텔과 AI 에이전트용 '메모리랙' 구조 협력",
          "easy": "",
          "quote": "SK하이닉스, 인텔과 AI 에이전트용 '메모리랙' 구조 협력",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 92,
              "title": "SK하이닉스, 인텔과 AI 에이전트용 '메모리랙' 구조 협력 - 뉴스핌",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE5SVW5STGFvcFdFOVlYT1E4Z2JzS1JMOVhhT1RWTGRXQ0pyWm91ZU9HV0Yxa3lnRUhCQ19oc0tUOWRHdFpYUndsQkYyWEIzbzYzd1d1NVRROUx6TXA5?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 78,
          "name": "가스안전공사, SK하이닉스 반도체 생산시설 가스안전점검",
          "easy": "",
          "quote": "가스안전공사, SK하이닉스 반도체 생산시설 가스안전점검",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 93,
              "title": "가스안전공사, SK하이닉스 반도체 생산시설 가스안전점검 - 에너지신문",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5aQ2g1S3pyTVVwY1RtdHBGcXp1WHZHWjU4X0tzdWZfU1F3T0RHTEN0UmhPakFXYzlYN2ZpR2xiUzNoM1RLa1NreDVpbG9hVU84b3NvWVBNdnk1bzlJcDUxVnVPbnI3OWZlYXhrRUpBS2k?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 79,
          "name": "SK하이닉스 재무 버팀목으로…그룹 곳곳에 ’현금 낙수효과’ By EBN",
          "easy": "",
          "quote": "SK하이닉스 재무 버팀목으로…그룹 곳곳에 ’현금 낙수효과’ By EBN",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 94,
              "title": "SK하이닉스 재무 버팀목으로…그룹 곳곳에 ’현금 낙수효과’ By EBN - Investing.com 한국어",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9rdmwzbWxFRTNxQUd0a19SVUNKVlpaSHliUVJkRDlQNHNDdEdQaEtlS0dMRE84eXp1TUNJZTM5ekFFcDM3ZUVLR05xSGphdVFjNFctWXdrWlo3SVBVdDVmT1VDNnZhWmNCZWV2UkkxUkM?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 80,
          "name": "[특징주] 삼성전자·SK하이닉스, 코어위브 자금 우려 완화.. '상승세'",
          "easy": "",
          "quote": "[특징주] 삼성전자·SK하이닉스, 코어위브 자금 우려 완화.. '상승세'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 95,
              "title": "[특징주] 삼성전자·SK하이닉스, 코어위브 자금 우려 완화.. '상승세' - 글로벌이코노믹",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNaEdVRjFkQ3JQY1cxTG42Z0lBQnlNNHViSXhJbHJ1dm03TlIyV2FwVmJHMW9XeU41VEN0N3UxZGJTWEV4bDlFbmhMekRZOTBJbnRXckpHSkRXM2JsbEY4VV9MMzFUdWhodmtwcERzYThEY1hmSzNnS2VmYkROMkNFQUFnemEyX3M?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 81,
          "name": "평택시, 삼성전자 반도체 방류수 환경관리 대책 논의",
          "easy": "",
          "quote": "평택시, 삼성전자 반도체 방류수 환경관리 대책 논의",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 96,
              "title": "평택시, 삼성전자 반도체 방류수 환경관리 대책 논의 - 메트로신문",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE93VFBHZ3hxVm1ya3JYeWVvMlFTcEpvZ0syMjRGZzJoOEhVM1JjV1dqc2xPRDNhZ1RQdUZyU2Y5T1BMT1ZtTlVNcHNTV0Zub1lqSnQyeXVjMkphWUFEOEhVdg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 82,
          "name": "삼성전자 ‘정기 인사’ 눈앞…반도체 호황 속 복잡해진 셈법",
          "easy": "",
          "quote": "삼성전자 ‘정기 인사’ 눈앞…반도체 호황 속 복잡해진 셈법",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 97,
              "title": "삼성전자 ‘정기 인사’ 눈앞…반도체 호황 속 복잡해진 셈법 - 아시아타임즈",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiXkFVX3lxTFA3V25RYmk2cXRHV0FnQXA1NkIyM1FiM3hNNTk1ZHdaTE1IN0twUFVsaVBNeU5jUDRZNlVyQnBFc1VRTXZ6OFVRcUdqcTV4ZmxsZE0wUlViR0JfT3pyYkE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 83,
          "name": "하이퍼엑셀 \"삼성 파운드리도 SK 메모리도 구하기 어렵다\"",
          "easy": "",
          "quote": "하이퍼엑셀 \"삼성 파운드리도 SK 메모리도 구하기 어렵다\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 98,
              "title": "하이퍼엑셀 \"삼성 파운드리도 SK 메모리도 구하기 어렵다\" - 디일렉",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTFBQR1dweGZTR2RVamZTQ0FkOHRmSWpGeDVUdmZWeFJEOHlnVkJJLVoyUXRHU1BDeUlxTW0wWG5HMmdwRDlRMUZydUx5eDFzV2ZIaDdvYTF0ZkVXZ3gyTU5sNnlRMTk2QQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 84,
          "name": "정부 8천억 투입해 국산 'AI 반도체' 10종 개발한다, 삼성전자 파운드리와 협력",
          "easy": "",
          "quote": "정부 8천억 투입해 국산 'AI 반도체' 10종 개발한다, 삼성전자 파운드리와 협력",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 100,
              "title": "정부 8천억 투입해 국산 'AI 반도체' 10종 개발한다, 삼성전자 파운드리와 협력 - 비즈니스포스트",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE5OOXZsMDhiTm9QVEo2UTMyZ0RuVHZKdE9GMU8yLUJpaDZVSlNidjNscWYzUzhrQWxTSFlCQmZCTmlZTFJkZnBtQk1NMFVkR1VRNVFBUENwWmVQWlRMVlVoajRPWTJqOXJCT3BVaEJhbTZVVWs?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 85,
          "name": "“앨리스 황, 엔비디아칩 24만장 중국 밀반입…최소 10조원 규모”",
          "easy": "",
          "quote": "“앨리스 황, 엔비디아칩 24만장 중국 밀반입…최소 10조원 규모”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 101,
              "title": "“앨리스 황, 엔비디아칩 24만장 중국 밀반입…최소 10조원 규모” - 한겨레",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNSFF6bXZ4MFk3SzVzU09FREF6UWhaOENKQXF4S2tvU0xraFQ1dVVfWjJwTFp1WHVqRXpZMkZfTmZKT0xYUmZyNU1JYmtEaDVLcEdLNXZtcDlXQkVaSXExd1ZXOHNhc3JoRDk1Z3RIMTdfcjVZeEVLM0YxcVBGOFVuVUZR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 86,
          "name": "네옴 넘어 원전·AI로…‘K-건설’ 미래 ‘에너지 플랫폼’",
          "easy": "",
          "quote": "네옴 넘어 원전·AI로…‘K-건설’ 미래 ‘에너지 플랫폼’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 110,
              "title": "네옴 넘어 원전·AI로…‘K-건설’ 미래 ‘에너지 플랫폼’ - 파이낸셜포스트",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE90eThOd0R5TXk0MEVMejZPd2NIYVoxc0xLVG9HOF9vZ0RmUXIzSE5EQV90M3BQbUgwa1Bmc2h2MFRkaC1tMzh1bVYtN19ESkY1UERXTUh3dVdOa3lNcmZKYkpUQkZwN2wzNDB4d3U0SkJHaHRj?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 87,
          "name": "[두산에너빌리티의 2막②] 기술에 베팅한 두산…가스터빈에서 원전까지",
          "easy": "",
          "quote": "[두산에너빌리티의 2막②] 기술에 베팅한 두산…가스터빈에서 원전까지",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 113,
              "title": "[두산에너빌리티의 2막②] 기술에 베팅한 두산…가스터빈에서 원전까지 - 뷰어스",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE94OEE5dDRoa2RmVXM5aUlDRm9hQS1zNzdvTnlnLTF2WUNXN2FKT05xZFk5SUd2Q3RrMUVIZHN0Z1Jybm1ZalhHRS1CX1B0OGFsTWJWc3ZXNm4?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 88,
          "name": "두산에너빌리티, 동반성장지수 3년 연속 ′최우수′…890억 펀드로 협력사 지원",
          "easy": "",
          "quote": "두산에너빌리티, 동반성장지수 3년 연속 ′최우수′…890억 펀드로 협력사 지원",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 116,
              "title": "두산에너빌리티, 동반성장지수 3년 연속 ′최우수′…890억 펀드로 협력사 지원 - 메가경제",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE5pUG5XdGlLbkYzNkh6NGxGcW9TWnpoWkROYU55NERHXzJLTmJGTUtVQ2JoZXFQVTdsUzMyeGJBLVM1TFZJSXVlZnB0dmNRSTZNY1B2aEFMTDRZbFZJUDlIU1ZITU5lZGNpU2RIZFNocnZwUdIBckFVX3lxTE5pUG5XdGlLbkYzNkh6NGxGcW9TWnpoWkROYU55NERHXzJLTmJGTUtVQ2JoZXFQVTdsUzMyeGJBLVM1TFZJSXVlZnB0dmNRSTZNY1B2aEFMTDRZbFZJUDlIU1ZITU5lZGNpU2RIZFNocnZwUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 89,
          "name": "영국 EDF, 실시간 전기요금·무료 전력 시간대 알려주는 스마트 디스플레이 무상 출시",
          "easy": "",
          "quote": "영국 EDF, 실시간 전기요금·무료 전력 시간대 알려주는 스마트 디스플레이 무상 출시",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 117,
              "title": "영국 EDF, 실시간 전기요금·무료 전력 시간대 알려주는 스마트 디스플레이 무상 출시 - https://www.2news.co.kr/",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5jQWlCQXZsekxkWWRKZjdtaTVLVVh1THZ0cFNfelF5VUtuWFpOVHhNYWs1a3dyME5PQklDZ29rLWNENkM4X2pQOWd2MDZjT244UmIwQk9QcllPVlVFVTA0ZEVJY01sMVI5?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 90,
          "name": "[단독] ‘지방전기료 할인’ 정면충돌…1502억 절감 vs 부담 떠넘기기",
          "easy": "",
          "quote": "[단독] ‘지방전기료 할인’ 정면충돌…1502억 절감 vs 부담 떠넘기기",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 118,
              "title": "[단독] ‘지방전기료 할인’ 정면충돌…1502억 절감 vs 부담 떠넘기기 - 매일경제 마켓",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5ENmhxemhocTBjTUREWlVOeEJlaVJ5VUpJMkliUlJpcUNRbko1WHNNU3R3Q3h0YnlsNkVTTXF2Y0tUTlhIV2ctVlhnck1Vb1JDVVE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 91,
          "name": "‘가구당 월 8,000원 절감’ LH, 태양광 잉여전력 요금상계거래 시행",
          "easy": "",
          "quote": "‘가구당 월 8,000원 절감’ LH, 태양광 잉여전력 요금상계거래 시행",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 119,
              "title": "‘가구당 월 8,000원 절감’ LH, 태양광 잉여전력 요금상계거래 시행 - 솔라투데이",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9peGVfN0EtRlo0MWxDdndzSGtVNFkxU1lVTUo4dVpDM2lnWDdFXzR2N2djS2NUMGRtV3pxcVJMemh1aGU2bVpaSW5TOVBmR2VzSUllaE9DRlpWclZIV3dxN2ZmdzFJVFJKY1ZQazJES0o?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 92,
          "name": "지방 산단 전기료 낮추려다 열 요금 오를 판… LMP에 입주기업도 반발",
          "easy": "",
          "quote": "지방 산단 전기료 낮추려다 열 요금 오를 판… LMP에 입주기업도 반발",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 120,
              "title": "지방 산단 전기료 낮추려다 열 요금 오를 판… LMP에 입주기업도 반발 - Chosunbiz",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMihAFBVV95cUxNWEdKU3FFSG5IUmhUd3F4b3F4ak12ZGRBZ0RKclM4RGIzUmRwbGRwdEozaUtzYmpVNVo3cExBMWdMLXlvYkdPQV9xNTRqelhuZ0xMaUNiOXZmVVMzSF9FTUlYM2p3bm5mNGMwMmx0OFh5WWNsNU8xZ1FwaXVsN0QwamF4X3DSAZgBQVVfeXFMTzJfbTFhQWNLblltaXpJOXhzX1B3MS1ZWkdyVkx2bWJmdlp3WG5mQnA2S0dmZUUwQkt5OXBPQWJfcjlMVEM4ajNHaFlTZVBBRmJXa1BqM2Q2d09KR1IyaXdlaE9QUWlXdEYzWHlxUXFOSHFHdG1SbzBMclhnNzRDYW5ZWmd"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 93,
          "name": "'AI 전력 수혜' 블룸 에너지 13% 폭등…데이터센터 전력주 동반 강세",
          "easy": "",
          "quote": "'AI 전력 수혜' 블룸 에너지 13% 폭등…데이터센터 전력주 동반 강세",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 125,
              "title": "'AI 전력 수혜' 블룸 에너지 13% 폭등…데이터센터 전력주 동반 강세 - 글로벌이코노믹",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQT1RYaUowVXYtMFFnZkpHNDRUODNseUZ1RHBBUFFDdXZoYy1udnctUWNVanR0SDZzUFY0WmdQZEczNUFzd3J1SWxzQmFqTWx3aUsyaHQ4ZE1qdDBLdG5MSjFqWW5Bc0hkbUktanBKZDdfNURmeWNqZmV4cVVGa0tPY1Z2UVpqMFg5?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 94,
          "name": "같은 전기 써도 한국이 더 뿜는다… 세계 전력지도에 AI 데이터센터 96곳 찍혔다",
          "easy": "",
          "quote": "같은 전기 써도 한국이 더 뿜는다… 세계 전력지도에 AI 데이터센터 96곳 찍혔다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 126,
              "title": "같은 전기 써도 한국이 더 뿜는다… 세계 전력지도에 AI 데이터센터 96곳 찍혔다 - 에너지안전신문",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5jb2ducE1jcWpvWFgtbUFYTWdRVEE0STB3UVJBZ18wbjVHWjdpVEgxTTk1ZHYxZWU4dUR1NE5hZGNFNkR1anhDaDlTR1NvMTBWNGdERkNZaXhRWDkxNU1vQ0lqay0?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 95,
          "name": "수십만 가구 난방해도 LNG는 소매…집단E ‘100MW 족쇄’",
          "easy": "",
          "quote": "수십만 가구 난방해도 LNG는 소매…집단E ‘100MW 족쇄’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 130,
              "title": "수십만 가구 난방해도 LNG는 소매…집단E ‘100MW 족쇄’ - 전기신문",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1XVDRWYUhaMUw4dW5sOTFQNzA3NkRkY19raUo4VURJYjJXTEZkSUxaZm5EeGtZb0dpWExCNy1IZERJd1l2cS1TTGpfUzBoelkxWWYtSHByRE9iTDVsNlhhbnJRWTkyb0R0WWR4Q2p2Wm7SAXBBVV95cUxNV1Q0VmFIWjFMOHVubDkxUDcwNzZEZGNfa2lKOFVESWIyV0xGZElMWmZuRHhrWW9HaVhMQjctSGRESXdZdnEtU0xqX1MwaHpZMVlmLUhwckRPYkw1bDZYYW5yUVk5Mm9EdFlkeENqdlpu?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 96,
          "name": "\"우크라이나 악몽 막는다\"… 日·유럽 전력 선물, 호르무즈 봉쇄에 ‘4년 만에 최고치’",
          "easy": "",
          "quote": "\"우크라이나 악몽 막는다\"… 日·유럽 전력 선물, 호르무즈 봉쇄에 ‘4년 만에 최고치’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 131,
              "title": "\"우크라이나 악몽 막는다\"… 日·유럽 전력 선물, 호르무즈 봉쇄에 ‘4년 만에 최고치’ - 글로벌이코노믹",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQRTlfTDNjVjZSRWxBYkY3bTR1TFR2aXA5QjV1NV9ITVZzb1ladEtrcHlqY3FZUWhVV2lBRm9oeUpuVkNUamNWRkMxY0lqZGtFakJHbktHQ3lJVXI3amJ2U0R6c1d3T1djOGR2UXBHSHBWM3A1cjY2LS1Ub3FHUVRBSWcwUlVwek1F?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 97,
          "name": "중동발 LNG 공급 충격… 국내 수급체계 재정비 필요성 대두",
          "easy": "",
          "quote": "중동발 LNG 공급 충격… 국내 수급체계 재정비 필요성 대두",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 133,
              "title": "중동발 LNG 공급 충격… 국내 수급체계 재정비 필요성 대두 - 에너지플랫폼뉴스",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5OVTFINmQ3Si1kTGVEWTRfY2dTVmlaNVJVRmEtR1dwbGowa1FIT0lZM2NmMURVbDhMOUduUDJRcWM3UEdIcXdwTkEtTzYxd1RBZEU2S3dHdzVzajQ5RlgzZFpfaF90c3FvX3lBLdIBcEFVX3lxTFBSRVdBR0dyR2Z3UWY1akdnZXVvOTNGbEp6SmYxaTdtUGtxMjhkcXhEOGs0Rmd6WnJsd2lHZmpvV1JfSHF3ekdhLXhCUDZxaUhiUFZ0a3g1WVRFa0dpcVljYUxEdndUSTRnN3ZPSkZjOEE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 98,
          "name": "[사설] 에너지 포퓰리즘, 재정·시장 망친다 - 머니투데이",
          "easy": "",
          "quote": "[사설] 에너지 포퓰리즘, 재정·시장 망친다 - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 134,
              "title": "[사설] 에너지 포퓰리즘, 재정·시장 망친다 - 머니투데이 - 머니투데이",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9pY1RlUzkwNXpnbl9jZG5YcXdDWVRBN2xhdGlVRFF2SU9Wc21SMGRTbFVCUU5KVXhIamZtVVFHNlNGQ1U0Ynl5YkNPanlBVzVYaGtBeXk2a1phb0dHd3JyYzRCZVRkc0MycWlKQnI3Zk7SAXBBVV95cUxPaWNUZVM5MDV6Z25fY2RuWHF3Q1lUQTdsYXRpVURRdklPVnNtUjBkU2xVQlFOSlV4SGpmbVVRRzZTRkNVNGJ5eWJDT2p5QVc1WGhrQXl5NmtaYW9HR3dycmM0QmVUZHNDMnFpSkJyN2ZO?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 99,
          "name": "리스타드 에너지: 얇아진 가스 완충재에 겨울 노출… LNG MMBtu당 30달러 상회 전망 - 뉴스 및 통계",
          "easy": "",
          "quote": "리스타드 에너지: 얇아진 가스 완충재에 겨울 노출… LNG MMBtu당 30달러 상회 전망 - 뉴스 및 통계",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 135,
              "title": "리스타드 에너지: 얇아진 가스 완충재에 겨울 노출… LNG MMBtu당 30달러 상회 전망 - 뉴스 및 통계 - IndexBox",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxPTWhvZmh6clAxbGRKNlJybEc4SkdnRlN6MGNJbWRNTVI5bjh6aVRlVjEyZ0RUbGNoZllGNGdRMlBMQVk0NzNXSGNGWXdOVVd2ZUNIYzZvRjU5NUluaWVMWnk4VDdfNEZhdjhIRHN0WnppLWhnNjJ1MnpsUVFkNUxKRkZ2Z3JzaTRnaG9hU3FXNkRVQUpoRXE0S2x4bmtheXRCRGZJOWtnUFNkUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 100,
          "name": "중동 전쟁이 호출한 석탄수요…발전 비중, 3년 만에 원전 앞서 |",
          "easy": "",
          "quote": "중동 전쟁이 호출한 석탄수요…발전 비중, 3년 만에 원전 앞서 |",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 136,
              "title": "중동 전쟁이 호출한 석탄수요…발전 비중, 3년 만에 원전 앞서 | - 연합인포맥스",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5CZGt0cnpRWjh4VkVSRWd6Q3pkLU00VDlCYWk1TWZBeW1Md1JrMm5ERXBaQ3Z4RjBaNTBCYVBoMlRRVXJMcEUxX25MRU9GUmdnSXlhUjlWR0ZWY3VYWThEd29wMldxVGx3RVZYYlMtT1E5VUNH?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 101,
          "name": "[분석] 가스노조 “가스·석유공사 통합보다 LNG 구매 일원화가 에너지안보 해법”",
          "easy": "",
          "quote": "[분석] 가스노조 “가스·석유공사 통합보다 LNG 구매 일원화가 에너지안보 해법”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 137,
              "title": "[분석] 가스노조 “가스·석유공사 통합보다 LNG 구매 일원화가 에너지안보 해법” - 에너지데일리",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE05OXM0d3NYWWx4WlZxR2FPVWMwTXVsMzVkN3ozQ3N3bjhwQklsN2xxUGJfUFNXUWxVVEpWUW1GQXR6UzdDa2tMRnlKOERSandiOGVDS05wLU9USGh2SFgzQUNxMzdIdEhmWUp0WmdQOV9Rdw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 102,
          "name": "‘독주’ 한국 반도체, 1986년 일본처럼?…“경제안보 리스크 자극” 우려",
          "easy": "",
          "quote": "‘독주’ 한국 반도체, 1986년 일본처럼?…“경제안보 리스크 자극” 우려",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 138,
              "title": "‘독주’ 한국 반도체, 1986년 일본처럼?…“경제안보 리스크 자극” 우려 - 한겨레",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE5GTW1lb1Z4cVVyaE5lZ1NIU3RQQTM2cWlhbWZoblZiMnc0TEdiRWhjOUhJaWJWZVpvODhOWm5FQWRJUzZHSzZNZDJjUENyTDdydTZlY2k1ZnI4ZnNlYXFRT1dqUW03YnQxMEpHZ2NpUWNNdw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 103,
          "name": "[美 블루웨이브 시험대] ③ 반도체가 벌어줄 세금…584조 세수의 불안한 미래",
          "easy": "",
          "quote": "[美 블루웨이브 시험대] ③ 반도체가 벌어줄 세금…584조 세수의 불안한 미래",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 139,
              "title": "[美 블루웨이브 시험대] ③ 반도체가 벌어줄 세금…584조 세수의 불안한 미래 - 뉴스핌",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE1HakZpNmw2WUVoWHVFdzdoSDlwZVduSnRTWmdQa3kxVGlteHZnRkhFVEp4WFNDU0o3c1hIU1FSYjlnZHBZMktrV2dPT2E1OWhRMzRHSlR4Mzd5WEZu?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 104,
          "name": "美 민주당 의회 장악에도 통상 압박 그대로…K반도체·자동차 '이중고'",
          "easy": "",
          "quote": "美 민주당 의회 장악에도 통상 압박 그대로…K반도체·자동차 '이중고'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 140,
              "title": "美 민주당 의회 장악에도 통상 압박 그대로…K반도체·자동차 '이중고' - 스트레이트뉴스",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTE5EMkxJUXdUTkhPZXNxcWgwOTVSSlN4RGtKR3NrV0V0RnBQU3hNQ0dBUDZKQVVLSHFqQzBUbDExckFQLUEtaFlOY3JTbVJYaHY3aHhyR0phNXBPUjljUGk2QjhLVjVDdkRYdFRLbl9yaTZiVEhCTEZR0gF3QVVfeXFMTkQyTElRd1ROSE9lc3FxaDA5NVJKU3hEa0pHc2tXRXRGcFBTeE1DR0FQNkpBVUtIcWpDMFRsMTFyQVAtQS1oWU5jclNtUlhodjdoeHJHSmE1cE9SOWNQaTZCOEtWNUN2RFh0VEtuX3JpNmJUSEJMRlE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 105,
          "name": "[시사천국] 트럼프 참패 그 후…미국 정치와 한국 경제의 역학관계",
          "easy": "",
          "quote": "[시사천국] 트럼프 참패 그 후…미국 정치와 한국 경제의 역학관계",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 141,
              "title": "[시사천국] 트럼프 참패 그 후…미국 정치와 한국 경제의 역학관계 - cpbc News",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiUEFVX3lxTFBQOHd0NkdBRUZOQjltaG16eFZHOXBpeTVrb3hDMnNEalpiaXFkUmV0RUlETjk5VUJCS211SWpjWFNocW9TeVA4UE9NZWJHcklq?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 106,
          "name": "[경제포커스] 트럼프 힘 빠진다는데…한국 경제는 웃어도 될까",
          "easy": "",
          "quote": "[경제포커스] 트럼프 힘 빠진다는데…한국 경제는 웃어도 될까",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 142,
              "title": "[경제포커스] 트럼프 힘 빠진다는데…한국 경제는 웃어도 될까 - 시사캐스트",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBLdEFCRFJoOTZnTjJvZmtPWkdDZ1hjRGhLWGRzT3lnUmU3NnVIMkp6b0lTMEpsTzJYTGVpbzhnR1VsNzkwSmpwM1h6Z19tSERKcjdKb29zVFpmcHJFazIzcVBIZEIyN0k5?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 107,
          "name": "\"美 중간선거 이후에도 통상 압박 지속…관세·투자·입법 대응해야\"",
          "easy": "",
          "quote": "\"美 중간선거 이후에도 통상 압박 지속…관세·투자·입법 대응해야\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 144,
              "title": "\"美 중간선거 이후에도 통상 압박 지속…관세·투자·입법 대응해야\" - 매일일보",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBWaC1BcWpQOW9DdC02UXVRQ1ZJNGpaczF4Umx2eng4b1NZMHNpWGRPd1VLX3NqU2VmMHNWQlNINTdUNnlxR2xNSnpDdDQzRG10LU9ON2lKYnNNMDctQkhTZHlYLTA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 108,
          "name": "[인더리포트] 미국 ‘블루웨이브’에 한국 산업계 희비…반도체·전력기기·배터리 향방은",
          "easy": "",
          "quote": "[인더리포트] 미국 ‘블루웨이브’에 한국 산업계 희비…반도체·전력기기·배터리 향방은",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 145,
              "title": "[인더리포트] 미국 ‘블루웨이브’에 한국 산업계 희비…반도체·전력기기·배터리 향방은 - 인더뉴스",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE44ZDJ3WG5pcUR1WWVOeUFRLV9HMHZxMDJTVXpveWhDT3dMbDlOc1BwSmdkakZYLVM4T1VId0xmekRYcTRPcW1fZ0RLd25DUHJWel9TZFkxU1oyZEFmQmtZ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 109,
          "name": "결국 “빅스텝”까지 거론됐다…금리 급등 신호탄일까",
          "easy": "",
          "quote": "결국 “빅스텝”까지 거론됐다…금리 급등 신호탄일까",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 148,
              "title": "결국 “빅스텝”까지 거론됐다…금리 급등 신호탄일까 - 더스쿠프",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE1nMXpZM1VkZlNtNm1qSXZsQXFqYkJZUEFWZGhnNnlPbjZvLU9IOG51b0hIZ0taeGQ1SUE0Wlp4azRBS0JldkhtT1I3c2NTWTR5eHJ5UHEyNENYUFNROU81MVJsZW9YUFlXMnplMllB?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 110,
          "name": "이미 긴축적이라고?…한은 FCI 판단에 기준금리 경로 달라질까 |",
          "easy": "",
          "quote": "이미 긴축적이라고?…한은 FCI 판단에 기준금리 경로 달라질까 |",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 154,
              "title": "이미 긴축적이라고?…한은 FCI 판단에 기준금리 경로 달라질까 | - 연합인포맥스",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5FNjRhZmk3dmMyVG4tTlNJZEtodGZPZTA5MFdLS3psYVlQTlE1LUNyRFNvZXRpVW9uUHZFS0xQSkR4ZlcwZFAzeEZWRVpTcF93LWFRZGIzamNmU2h5X0QyTHZfLVd0MHFnSk4wbWRzMllLQXdi?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 111,
          "name": "금통위원 과반, 추가 금리인상 필요성 언급…10월 기준금리는 3.00% 동결 - https://www.thedailyeconomy.kr/",
          "easy": "",
          "quote": "금통위원 과반, 추가 금리인상 필요성 언급…10월 기준금리는 3.00% 동결 - https://www.thedailyeconomy.kr/",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 156,
              "title": "금통위원 과반, 추가 금리인상 필요성 언급…10월 기준금리는 3.00% 동결 - https://www.thedailyeconomy.kr/",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9oYi1QZFJhQ3hwMXZac3EtWnBvV0FhZ2Roc0NFQTVuTkxEUUVERG5Kc0tFSUdlaDVncUVuSWxkZHk3NXRhUEpKUXNyQXJ6SHl3bXRJTnhQd2FyWlYyQ1ZvS2J2aUtiMDZIR0FBSzU3S1Y?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 112,
          "name": "[현승윤 칼럼] 한은, 기준금리 인상에 신중할 때",
          "easy": "",
          "quote": "[현승윤 칼럼] 한은, 기준금리 인상에 신중할 때",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 157,
              "title": "[현승윤 칼럼] 한은, 기준금리 인상에 신중할 때 - 한국경제",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9nUjZicVVEVm9ubmgxV1NCeTg1OGdjaUtoSDd1cC1sNU1ZZXBFNHdOcjkzV3NwdV9EU21WcW5id25ZdnZoZ1UtcVBGeDRWUWtIRXB4LThNSUtIZw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 113,
          "name": "금리 동결한 금통위원들 \"연속 금리인상 효과 점검\"",
          "easy": "",
          "quote": "금리 동결한 금통위원들 \"연속 금리인상 효과 점검\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 159,
              "title": "금리 동결한 금통위원들 \"연속 금리인상 효과 점검\" - 연합뉴스",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9BS0N2YjlibmdBZnk0NkJoRzU4eFZpUWdCOURNRVNaNV9IakIyTkZfQXI4N194aUpNUXBfWVNGdU96bkhwUmxyWS1NU0JrQ3cwRkZvVy1fSTdUdGPSAWBBVV95cUxNY3o5UWpab1o5cktnSTRDb0pBR0RqeG53QnRrRWxYWTlBcGpLR1pJTHFnaDJLWEZVVmpCMWtscWZ3NW9sSVV0WkFmZ0FpYkhoajZMeFhpTjRha1dydmoydlc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 114,
          "name": "슈퍼매틱스, 상용 초전도 와이어 개발 겨냥한 AI 구축…차세대 소재 발굴 나선다",
          "easy": "",
          "quote": "슈퍼매틱스, 상용 초전도 와이어 개발 겨냥한 AI 구축…차세대 소재 발굴 나선다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 161,
              "title": "슈퍼매틱스, 상용 초전도 와이어 개발 겨냥한 AI 구축…차세대 소재 발굴 나선다 - 스타트업엔(StartupN)",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFB3SWZ5RnR0aUN2dExpRTE2T3RnMzYzUFJnY21SMWhZXzltclJCSVhZZFdaN2luNmRYV2Z6emRiSzRJMFlCaHh6aW5YdTF5SDZTQ2U1dFViNmp2TnFDOUkxM2hZaFN0Tlp20gFsQVVfeXFMUElSNmdTM0VKeVlwanpFd3g0bjFpSUlSLUhEVXVONXhRNjBOY2tVYlBvaThwRWl2NDNJY2FLYWZ0YVpPNjFPbUhJVXpYRkNLa0h0bV9sVFRIQkFwU1Q1OW1wcUg5Y2JUX2R3akRs?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 115,
          "name": "핵융합ㆍ해양용 용융염원자로 예타 통과…‘1조8000억원 R&D’ 본격 추진",
          "easy": "",
          "quote": "핵융합ㆍ해양용 용융염원자로 예타 통과…‘1조8000억원 R&D’ 본격 추진",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 163,
              "title": "핵융합ㆍ해양용 용융염원자로 예타 통과…‘1조8000억원 R&D’ 본격 추진 - 인사이트N파워",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE9qS3l4SFp3X1h0bnJxb0hOc3o5RlhtbjZsa3NxbDZWRWdmamktcnBrLTJINXdrWXY3YWR1Z3ZUV0RXYWxJWEpIWHN4TDBPUlY0UVRJN0tRX2pUS3Z3YlJhQUpsZlZ0Zw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 116,
          "name": "SMR부터 우주항공까지…정부, 7대 첨단산업 키운다",
          "easy": "",
          "quote": "SMR부터 우주항공까지…정부, 7대 첨단산업 키운다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 166,
              "title": "SMR부터 우주항공까지…정부, 7대 첨단산업 키운다 - 헤럴드경제",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFB5VzJiOWJ1OVpKcE5XS21GRW52bnVSa0xoMVFOSHFpRzAtTUJxN2x0YWZBclExeUNETVpwWG9ZUEloOUQzRU9KOVQ0Y1p3RUNPZVgwRDl3?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 117,
          "name": "中 편의점, 휴머노이드 로봇 6대 투입…결과는?",
          "easy": "",
          "quote": "中 편의점, 휴머노이드 로봇 6대 투입…결과는?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 167,
              "title": "中 편의점, 휴머노이드 로봇 6대 투입…결과는? - 지디넷코리아",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5jNlVCbk1IdXhDUjVMaHFqTk9jd3I1TW0ybXRCVUpZS2Q1Y3VKMEJ4Z1k3eXFoUEVUNUdndDl4ZlJpVUR1QlRTYVEyY0Z5cjRFYzQxd193?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 118,
          "name": "구미시, 반도체·전자 넘어 휴머노이드로…중국 로봇산업 심장부 공략",
          "easy": "",
          "quote": "구미시, 반도체·전자 넘어 휴머노이드로…중국 로봇산업 심장부 공략",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 168,
              "title": "구미시, 반도체·전자 넘어 휴머노이드로…중국 로봇산업 심장부 공략 - 에너지경제신문",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9XN3JpYmhyOXMybHlZLVpIb0xqYnhDLVB3dm5OUGdIUUQyOTIzX3JMWHlFd3VLNktIS1pRUnROMXBIUHZTa3MzSlhzQVhiZWpTeElwQ3d1eXlTQ00?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 119,
          "name": "\"왼손을 뻗으면 왼손을 뻗네…로봇 싸움기술, 사람 실력에 달렸다?",
          "easy": "",
          "quote": "\"왼손을 뻗으면 왼손을 뻗네…로봇 싸움기술, 사람 실력에 달렸다?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 169,
              "title": "\"왼손을 뻗으면 왼손을 뻗네…로봇 싸움기술, 사람 실력에 달렸다? - 전자신문",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE9Bem9EWDJOa25TUHRlYk9OTEdPTE9WdXduaTh4ZzU0M29nSkxGamU2aWEwX3N0bkViNzRVRVZKR0tKeUpqWEZaX3pKNHluZw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 120,
          "name": "YYForce의 휴머노이드 로봇 및 VLA 훈련 과정, 공영방송인 미디어콥 ‘미팅 AI’ 프로그램에서 집중 조명",
          "easy": "",
          "quote": "YYForce의 휴머노이드 로봇 및 VLA 훈련 과정, 공영방송인 미디어콥 ‘미팅 AI’ 프로그램에서 집중 조명",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 170,
              "title": "YYForce의 휴머노이드 로봇 및 VLA 훈련 과정, 공영방송인 미디어콥 ‘미팅 AI’ 프로그램에서 집중 조명 - https://www.koreasprint.com/",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5GaWNObHcwc0l1M050LU5qZ084bXZJSFFOYVVCYzBiLW03SWpfcTBzTzZzZ3R2aHN2MVVYeWxnOG1NNkltbWpiRHFkR0wxcHdfcUZEdnBHbjZDdk5FNmlRb0tHVlo3UUpvWEtiNjB3?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 121,
          "name": "12일 오전장 테마 동향… 로봇·엔터주 강세, 비만약 약세",
          "easy": "",
          "quote": "12일 오전장 테마 동향… 로봇·엔터주 강세, 비만약 약세",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 171,
              "title": "12일 오전장 테마 동향… 로봇·엔터주 강세, 비만약 약세 - 인포스탁데일리",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMidkFVX3lxTFB3MkZxc212RVg0YkJacjEtVzRvd3dJSFFEQTZQSUtwV0Y2WFMwci1NbXJOZnZGb2tYenM4VmlaY0M5NEVsUHdLNzRabjJyc0locUdMcS0tM0tNS3Uta1VWYXZjWVM3ek1TSjJNVzJzTUlBRWJRY2c?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 122,
          "name": "\"삼현, 휴머노이드 관절 액추에이터 양산 단계 진입\" - CMIR",
          "easy": "",
          "quote": "\"삼현, 휴머노이드 관절 액추에이터 양산 단계 진입\" - CMIR",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 172,
              "title": "\"삼현, 휴머노이드 관절 액추에이터 양산 단계 진입\" - CMIR - 뉴스핌",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTFBfSk1yd2ZFR05rYUV4bEFIV3hQMUl5ZjRlNE0wbkRWU0VSYTdGcWVzYzczXzRlWkFxQ1R5M05vY3VzOVpuYWQtdlc5NHBpX29udWNISUh3N2ZIMUpk?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 123,
          "name": "하이젠알앤엠, 가반하중 40kg급 휴머노이드용 관절 액추에이터 6종 개발",
          "easy": "",
          "quote": "하이젠알앤엠, 가반하중 40kg급 휴머노이드용 관절 액추에이터 6종 개발",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 173,
              "title": "하이젠알앤엠, 가반하중 40kg급 휴머노이드용 관절 액추에이터 6종 개발 - 더스탁(The Stock)",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1nWC00NGJYYXd5MGhpeElvZmVFQ1owX3FkNGRCeGFkMGpyaXk3akJpVzk3ZVdlOFdpS2hWejdVMnFudEdEUWsxTDViLXpjdzFZYUlNUFY3dV9sOWtraWxCcFRBeV9SZXdLTHc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 124,
          "name": "발 대신 바퀴 단 보스턴다이나믹스 휴머노이드 로봇 ‘아틀라스’..360도 공중 회전 점프까지 성공!",
          "easy": "",
          "quote": "발 대신 바퀴 단 보스턴다이나믹스 휴머노이드 로봇 ‘아틀라스’..360도 공중 회전 점프까지 성공!",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 174,
              "title": "발 대신 바퀴 단 보스턴다이나믹스 휴머노이드 로봇 ‘아틀라스’..360도 공중 회전 점프까지 성공! - 데일리카",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMidkFVX3lxTFAwd0ZQZmNpRnpXY21ra1YwdDBTTFpMX1JveGNhVVBrNjN3cTA3OEhjOG9YeDVocU9MX0dtT3ZUQTVVeTR3NVc4T0ZZMHlEa0dnaFRWT09yNkFZQTFBUUwxVl9lZnJnRkI5MDJpVC1sVFczSllsR3c?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 125,
          "name": "[단독] '5700억 베팅 '코스모신소재, 인도 JV 통해 LFP 배터리 소재 생산 거점 구축",
          "easy": "",
          "quote": "[단독] '5700억 베팅 '코스모신소재, 인도 JV 통해 LFP 배터리 소재 생산 거점 구축",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 175,
              "title": "[단독] '5700억 베팅 '코스모신소재, 인도 JV 통해 LFP 배터리 소재 생산 거점 구축 - 더구루",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE9jbXprVm9TSmM5TzVRWk5lT1FVUlhMd0owRVBESmd3eTVNSWl0UFlhSUdjc1hleExKZF81TEluTVN4QnJabTFKOXkwWnNUSk9UUUl0aXgyX0RYX2xCcXc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 126,
          "name": "\"중국회사 아닌 척\"…미국 규제에 간판 바꿔다는 배터리 기업들",
          "easy": "",
          "quote": "\"중국회사 아닌 척\"…미국 규제에 간판 바꿔다는 배터리 기업들",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 176,
              "title": "\"중국회사 아닌 척\"…미국 규제에 간판 바꿔다는 배터리 기업들 - 디일렉",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE9hMXVGTW5oYmRkWWdwNU5QMjJUSkZUS1BsMXBYTXM1OC1MUlA0YURieXdpSXNSLWhSNnZvc1l6b19ubG0xc3h2Y25tTHZPM2E3MUFrQmFXcUtma2VDbDh4dTNBRUdfdw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 127,
          "name": "코스모신소재, 印에 6500억 규모 LFP 배터리 소재 공장 짓는다",
          "easy": "",
          "quote": "코스모신소재, 印에 6500억 규모 LFP 배터리 소재 공장 짓는다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 178,
              "title": "코스모신소재, 印에 6500억 규모 LFP 배터리 소재 공장 짓는다 - 한국신용신문",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE1tWVh4WGlVT3RFNk1QLWhZdTBwQVVmS0FVaHNxTW56b1NTZG80VTB4Sm5lVDNjSFdPdnhiSi1FQjRENHFmYlBxcGlJQ283VklCd0oyUUdwSGtsU3lndDNJX2NnZ0VBWW1IVk5R?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 128,
          "name": "中, 배터리 소재 수출금지 일단 유예…'탈중국' 마지막 과제는 음극재",
          "easy": "",
          "quote": "中, 배터리 소재 수출금지 일단 유예…'탈중국' 마지막 과제는 음극재",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 179,
              "title": "中, 배터리 소재 수출금지 일단 유예…'탈중국' 마지막 과제는 음극재 - 글로벌이코노믹",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMihgFBVV95cUxPWTlSeGlRQ2ZwUmpZWGpjUnN2NDBHVnU1OGJnNDVpaExFYnNGdkZ3a3VSYXpnLWo5LUpia29tWnNIclJDa3B6OFk5TWpKOWwycjhxbXJ6UXdxNjQycDBENFJBeFVta2VLWHpTTXR0dldreHNDY241ZEVhQ2lRV01rSEZHQnR2UQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        },
        {
          "rank_by_count": 129,
          "name": "트럼프 \"공격 그만\" 발언에...이란, 첨단 무기 들어찬 ‘지하 미사일 도시’ 공개하며 도발",
          "easy": "",
          "quote": "트럼프 \"공격 그만\" 발언에...이란, 첨단 무기 들어찬 ‘지하 미사일 도시’ 공개하며 도발",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 194,
              "title": "트럼프 \"공격 그만\" 발언에...이란, 첨단 무기 들어찬 ‘지하 미사일 도시’ 공개하며 도발 - JTBC",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTFBOOUFSU19Zb0hBeUVJcEJ5NEt1dmJNWVNjU2hJejI1ZjgxN2hsT0V0RjVJZUJ6UWY4Wnd1M2lnZTF6QXdHYTBHR2Vyd2I4Y2I0MHF5Mw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
        }
      ]
    },
    "ch5_papers": {
      "title": "챕터 5 · 논문 (보관함)",
      "addr": "처리-4",
      "status": "아직 없음 (하루 약 75편 보관만 · 초록 풀이 구현 전)",
      "note": "처리-4(논문 초록 풀이)는 설계만 확정되고 아직 코드는 0줄입니다. 오늘 문 앞에서 분류된 논문 원본 제목 목록만 그대로 보여줍니다.",
      "count": {
        "val": 25,
        "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
      },
      "papers": [
        {
          "title": "Ensemble Routing for Prompt-Adaptive Cost-Aware LLM Inference",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.10193",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        {
          "title": "Incentivizing Self-Learning in Large Language Models via Reinforcement Learning",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2610.39671",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        {
          "title": "GTAGym: Real AAA Game Tasks Environment for Evaluation and Reinforcement Learning",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.13028",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        {
          "title": "LO-World: Unified BEV Latent Modeling for Joint 4D Occupancy and LiDAR Forecasting",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.11912",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        {
          "title": "One Table, Many Queries: Benchmarking Generalist Tabular Models Across Generation, Imputation, and Prediction",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.13001",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        {
          "title": "Visual Similarity in Adult Word Extension and Artificial Word Learning",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.14116",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        {
          "title": "Prompt2Echo (P2Echo): Text-Prompted Multi-View Echocardiography Segmentation with One Model",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.13425",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        {
          "title": "Test-Time Scaling for Diffusion Language Models with Frequency-Aware Remasking",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.10486",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        {
          "title": "Embodied First Exam",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.12177",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        {
          "title": "LEASH: Stay Safe in Agentic Robotics",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.14115",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        {
          "title": "PhyRubric: Rubric-Grounded Diagnostic Evaluation of Physical Commonsense in Text-to-Video Generation",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.13576",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        {
          "title": "DyCraft: An Agentic System for Long-Horizon 4D Scene Generation",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2610.40754",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        {
          "title": "From Tool State to Scientific Action: Auditing Decision Provenance in Biomedical Research Agents",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.01527",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        {
          "title": "TorchCurves: Differentiable Parametric Curves",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.14516",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        {
          "title": "The Surprising Effectiveness of Deleting Weights in LLM Post-Training",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.10866",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        {
          "title": "Micius-Flash: Lightweight Agentic Intelligence for Engineering",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.10015",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        {
          "title": "MACaQ: Fast, Model Agnostic Calibrated Quantization for Low-Precision Weights and Activations",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.10649",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        {
          "title": "Blind Variation, Selective Retention: Improving Creative Idea Generation in AI Scientists",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.12184",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        {
          "title": "Are Causal Neuron Circuits Unique and Transferable?",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.13885",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        {
          "title": "Sable: A Small-Field Sumcheck Argument for Bit-Exact Inference of Large Language Models",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.14083",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        {
          "title": "Don't Just Trust Your Memory: Evidence-Linked Memory Reduces Memory-Induced Degradation in LLM Agents",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.14320",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        {
          "title": "Lipschitz-Controlled Flow Matching for Robust Image Restoration",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.13995",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        {
          "title": "FINCOSMOS: An Open-World Evaluation Paradigm for Agents in Finance",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.07464",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        {
          "title": "WaveGen: Truly End-to-End Waveform Generation via Internal Spectral Trajectory Learning",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.12527",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        },
        {
          "title": "EarthRecord: From Pixels to Land Change with Multimodal Agents over Four Decades of Satellite Imagery",
          "source_name": "허깅페이스 오늘의 논문",
          "published": "",
          "link": "https://huggingface.co/papers/2611.12934",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
        }
      ]
    }
  },
  "machine_map": {
    "total_sections": 31,
    "counts_by_kind": {
      "run": 15,
      "separate": 9,
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
        "line_out": "내보냄: 수집 대상 38곳 (v2_secretary/결과/2026-11-12_하루_전체.md)",
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
        "line_out": "내보냄: 오늘 들어온 글 914건 (v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json)",
        "metrics": {
          "in": 38,
          "out": 914,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
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
        "line_in": "받음: 들어온 글 914건 (새 글 818 + 이미 본 글 96)",
        "line_rule": "규칙: gate_rules/길_규칙.txt · 관심_키워드.txt · 반키워드.txt (AI 0콜)",
        "line_out": "내보냄: 거푸집1 127 · 거푸집2 64 · 뉴스 176 · 제외 361 · 논문T 25 · 모름 65",
        "metrics": {
          "in": 914,
          "out": 818,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
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
        "line_in": "받음: 문 앞 제외 규칙에 걸린 글 361건",
        "line_rule": "규칙: exclude.py + gate_rules/되살리기.txt (관심 키워드 든 글 표시)",
        "line_out": "내보냄: 결과/제외보관함/제외보관함.csv (786행 누적)",
        "metrics": {
          "in": 361,
          "out": 361,
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
        "line_out": "내보냄: 한은 표 25행 · FRED 표 9행 · DART 표 123행(오늘)",
        "metrics": {
          "in": 127,
          "out": 132,
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
        "line_in": "받음: 문 앞 거푸집1 길 127건",
        "line_rule": "규칙: plate1.py 정규식 숫자 추출 + 직전 값 계산·공식 API 대조 (AI 0콜)",
        "line_out": "내보냄: 오늘 DART 표 123건 · 한은 0건 · FRED 9종",
        "metrics": {
          "in": 127,
          "out": 123,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/결과/거푸집1/2026-11-12_거푸집1.md"
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
        "line_in": "받음: 문 앞 거푸집2 길 64건 (보도자료·리포트·연방관보)",
        "line_rule": "규칙: body.py 본문 추출(0콜) → plate2.py 글당 AI 1콜 요약 + 파이썬 원문·숫자 대조 검사",
        "line_out": "내보냄: 오늘 요약 64건 (결과/거푸집2/2026-11-12_거푸집2.md)",
        "metrics": {
          "in": 64,
          "out": 64,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/결과/거푸집2/2026-11-12_거푸집2.md"
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
        "line_in": "받음: 문 앞 뉴스 길 176건",
        "line_rule": "규칙: news.py 하루 AI 2콜(A·B 독립 묶기 대조) + 없는 숫자·중복 검사",
        "line_out": "내보냄: 사건 9개 묶음 (결과/뉴스/2026-11-12_뉴스사건.json)",
        "metrics": {
          "in": 176,
          "out": 9,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/결과/뉴스/2026-11-12_뉴스사건.json"
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
        "line_in": "받음: 문 앞 논문T 길 25편",
        "line_rule": "규칙: 설계 확정(초록 풀이 + 상위 몇 편 본문), 정식 코드는 아직 없음(보관만)",
        "line_out": "내보냄: 문 앞 목록에 25편 보관 (v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json)",
        "metrics": {
          "in": 25,
          "out": 0,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
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
        "line_out": "내보냄: 누적 연설 브리핑 21편 (결과/연준연설/)",
        "metrics": {
          "in": 21,
          "out": 21,
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
        "line_out": "내보냄: 결과/2026-11-12_하루_전체.md 외 5종 결과지",
        "metrics": {
          "in": 6,
          "out": 6,
          "calls": 0,
          "secs": 0.1,
          "num_source": "v2_secretary/결과/2026-11-12_하루_전체.md"
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
        "line_in": "받음: 2026-11-12 결과 파일들 + runs.jsonl + calls.jsonl + 구간_주소표.md",
        "line_rule": "규칙: export_panel.py 세기와 옮겨 적기 (새 공식 없음, AI 0콜)",
        "line_out": "내보냄: v2_secretary/결과/화면/panel.json",
        "metrics": {
          "in": 914,
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
          "num_source": "v2_secretary/결과/문앞/2026-11-12_문앞교통정리_길별.json"
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
        "line_out": "내보냄: 실행 기록 4건 (최근: 2026-11-11 ok)",
        "metrics": {
          "in": 1,
          "out": 4,
          "calls": 56,
          "secs": 947.0,
          "num_source": "v2_secretary/data/auto/runs.jsonl"
        }
      },
      {
        "addr": "운영-2",
        "group": "운영",
        "name": "깃허브 주고받기",
        "files": "`cloud_sync.py` · `v2_cloud/`",
        "status": "만들어 둠 (지금 꺼짐)",
        "status_kind": "separate",
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
