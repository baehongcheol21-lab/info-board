// 자동 생성 파일 (v2_secretary/export_panel.py) — 직접 수정하지 마세요.
window.PANEL_DATA = {
  "schema_version": "2.1.0-panel-v1",
  "day": "2026-11-18",
  "generated_at": "2026-11-18 11:04:47",
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
      "val": 766,
      "source": "v2_secretary/결과/문앞/2026-11-18_문앞교통정리_길별.json"
    },
    "new_total": {
      "val": 639,
      "source": "v2_secretary/결과/문앞/2026-11-18_문앞교통정리_길별.json"
    },
    "old_seen": {
      "val": 127,
      "source": "v2_secretary/결과/문앞/2026-11-18_문앞교통정리_길별.json"
    },
    "seen_ledger_lines": {
      "val": 9262,
      "source": "v2_secretary/data/seen.jsonl"
    },
    "ai_calls_day": {
      "val": 41,
      "source": "v2_secretary/결과/2026-11-18_하루_전체.md"
    },
    "ai_fails_day": {
      "val": 0,
      "source": "v2_secretary/결과/2026-11-18_하루_전체.md"
    },
    "run_secs": {
      "val": 513,
      "source": "v2_secretary/결과/2026-11-18_하루_전체.md"
    },
    "lanes": {
      "거푸집1": {
        "val": 89,
        "source": "v2_secretary/결과/문앞/2026-11-18_문앞교통정리_길별.json"
      },
      "거푸집2": {
        "val": 44,
        "source": "v2_secretary/결과/문앞/2026-11-18_문앞교통정리_길별.json"
      },
      "뉴스": {
        "val": 192,
        "source": "v2_secretary/결과/문앞/2026-11-18_문앞교통정리_길별.json"
      },
      "제외 보관함": {
        "val": 192,
        "source": "v2_secretary/결과/문앞/2026-11-18_문앞교통정리_길별.json"
      },
      "논문T": {
        "val": 75,
        "source": "v2_secretary/결과/문앞/2026-11-18_문앞교통정리_길별.json"
      },
      "모름": {
        "val": 47,
        "source": "v2_secretary/결과/문앞/2026-11-18_문앞교통정리_길별.json"
      }
    },
    "last_auto_run": {
      "day": "2026-11-18",
      "start": "2026-11-18 10:35:42",
      "by": "github",
      "where": "GitHub",
      "mode": "run",
      "end": "2026-11-18 10:44:15",
      "secs": 513,
      "exit": 0,
      "result_md": true,
      "failed_stages": 0,
      "calls": 41,
      "result": "ok"
    },
    "last_auto_run_source": "v2_secretary/data/auto/runs.jsonl",
    "papers": {
      "day": "2026-11-18",
      "day_label": "11월 18일(오늘)",
      "made": "2026-11-18T11:04:47",
      "calls": 151,
      "same_day": true,
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
          "rank_by_count": 1,
          "name": "젠슨 황 엔비디아 CEO 복귀 발언",
          "easy": "엔비디아의 젠슨 황이 사임한 지 닷새 만에 처음으로 공개 석상에서 입을 열었습니다. 이사회에서 요청한다면 언제든 최고경영자로 복귀할 의사가 있다는 뜻을 밝힌 건데요. 갑작스러운 사임 이후 나온 발언이라 시장의 관심이 쏠리고 있습니다.",
          "quote": "젠슨 황 \"이사회 요청 시 엔비디아 CEO 복귀\"…사임 후 첫 공개 발언",
          "member_count": 10,
          "sample_articles": [
            {
              "n": 205,
              "title": "젠슨 황 \"이사회 요청 시 엔비디아 CEO 복귀\"…사임 후 첫 공개 발언 - 디지털데일리",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBGeG9WaERjTlgyS0FyVDVhbTlYUUl4T2VpaDl6Z2NUVmtYZGRkX25yQ0JWdEVmVkFXLUptN0Fza2JoUTNWdFdkSWR4dUY2eGg1Q1IwUS1jMkVabmEtckFDM29SX1U?oc=5"
            },
            {
              "n": 202,
              "title": "‘불륜’ 젠슨 황 “엔비디아 복귀 의사 있다”…사임 후 첫 공개 발언 - 서울신문",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTFBPVDA4YzFiempybzZMamhRcnYyU0NWSnlXei1zT0NST1pKeGw0blR5Ny1mOEpHNER0anN3V3p5ZTZPd0JRX2pyMXl3b095dUZTSUpjeHpDSExpU1JuTXhIZmgtM0pwX0JwX3ZmaG0xdWRjdTJveGtR?oc=5"
            },
            {
              "n": 100,
              "title": "젠슨 황 “이사회 요청하면 엔비디아 최고경영자로 복귀하겠다” - 한겨레",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE94ejVFV25EVFY2RHBFZ0ZJcGNCbnN5bXphTTZuWUVxekZMRERNbUNoOWVQZ1J6RWFoR0wtSDRnYlQ3V3BZRlNhNmFVME4ySDNzY001MEFLLWpxRXpWRHRsQXhCaHh1Y2c2N3ZhZWlkSQ?oc=5"
            },
            {
              "n": 206,
              "title": "젠슨 황 \"이사회가 원하면 CEO 복귀\"…사임 닷새 만 첫 공개발언 - JTBC",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTFBHUVpZc2E4eElIY1RQZHhYOFV4OHI5U3dpSGpsX0N6QWJTWE1jZ0JCeU1aa2F4b1BIRmxYRm1peVZOUUVVR05nV0UwTjdFMFEzV0JoYQ?oc=5"
            },
            {
              "n": 203,
              "title": "젠슨 황 \"이사회가 원하면 CEO로 돌아갈 것\"…사임 후 첫 공개발언 - 머니투데이 - 머니투데이",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMidkFVX3lxTE9hSEVkeUk0OHdkZ1o5VHBlaVllLXZzbkdHRm94dlJod0lEUGJwa0hVVWgtUm16MmJTRGhkUngzTGt1ajhlWVU0Qno4REVySUZkQzFtQ2k5Y1AwTndpeDhCM3F2c0dBZEFxdXlzaGVZR2VCSlBCTkHSAXtBVV95cUxNMC1BR1lhRFRvRExFTU5KU2Jub2paSmZZdDFaQ0hKVDZTT19XZnZIVDJ6UVVoQTdwLVliRmo0a3AtblNCeW9mWlNKVEY1clBSZlY4cG15VE84WWRFaU1NcWdyNFZWUHpRXzlsZFJiSnNveDRGZklTbGxwa1E?oc=5"
            },
            {
              "n": 104,
              "title": "[속보] 엔비디아 이사회 의장 \"젠슨 황 재선임 의사 없어\" - MBC 뉴스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTFBSNGRNaWdGT2pDSjFIaU9XOXBJQXljbjhFaW9TUXRnNFh1YlkxNEVFdy05N0dBM1FDR3lwRG1HTFJ1TVVMVEp6R3BDZVRCNXRSa2ViUDZqWmpkay1CeFd5eWZxcE9oV01mMHNFTXRHUmJ5b1Bz0gF0QVVfeXFMUHZyZk1oQlNaQ3VfQ3YxRjlOLUhDTlhIV3ZMUElIMEp6Rl9mdE13dFhCM3oyMUJRRWc4RTlqa1k2MmlFR19scTA2VFZGX2c2TUEzRzVWY3NHMEhTdEVkLXUyWGoyblZTVjV3MXB0NG1JYmRUUW0?oc=5"
            },
            {
              "n": 204,
              "title": "젠슨 황 \"이사회 요청 시 엔비디아 복귀\"‥사임 후 첫 공개 발언 - MBC 뉴스",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5Vb0NYRjV2dUczRkhMQ0t1WEdwZGtpdDhQMl9XLTFnM1RrdmlBU2lhNmJneXJkQ29BcmZuQmFZQnhFb3NyZFR4SFVaR2tZMWJvVVNLMzdPaFVzSnRaTHlQb3BaUWtVMWNLaWVGdGdaSFhUZzBU0gF0QVVfeXFMUDkyZ2d2OWFjeFF0Y1p3eDlmY0tZcWNoU0NnN1BYWVRadkI0S1NGSGo1am1IcUZTWVNYbkhENVlkb0YxUFp5QkV0blhEaXNadWpkbnBBakdQcnU5UHpyWWl4eG1BSkxRb2FHS2g4Tjl1aHQwSVA?oc=5"
            },
            {
              "n": 207,
              "title": "젠슨 황 “이사회 요청시 엔비디아 CEO로 복귀할 것”…사임 후 첫 공개 발언 - 쿠키뉴스",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE52ODJzbXFSa1h3ZGhfYnlrU3dnb19RMHduaXdLMzh6ZC04U1lnZkw2NFRhR01nWllkZ0FURzUtdnJ2MER6M0k1QUVjWnBrRzl3eUlxeDM5alA1QnNWWGE1c0N4OA?oc=5"
            },
            {
              "n": 106,
              "title": "퇴진 닷새 만에 입 연 젠슨 황 “이사회 요청 있으면 엔비디아 CEO 복귀할 것” - 경향신문",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE51SUJOZWpOc09maTNKZERCM0VRTXZRaWJvSHo3WjNBcHYtS3BrdDl3Y1JCREI2SC0yRllOeXFSQUl3QlBOUEtxYVk1QUx4OUMzQjJJM3JJZ0MtZ9IBX0FVX3lxTE4zYnpPYWk2a096djlSbVRxeWxRb0dTNV9kbVNGMUxtNUdKYVd0Q2lmNWdNc2JqNGpMZldyUm9hVS1FSWszWldDdU80TExCdTNPNTB5eVNoaWNYTzhNMUhJ?oc=5"
            },
            {
              "n": 208,
              "title": "젠슨 황 \"이사회 요청하면 엔비디아 복귀\"…사임 후 첫 발언 - 한국일보",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5JTms2QTl0dFRlUERFNXlSME9BLVpMSXphbEEzOFd0TERYWUNTamY5dlhobDhnWWsxLTQ2dFpoTUJFQjk4WmU2eUZxa1ZxMUJjaDYzZ2tTZktxa1UzSi1hSUF1NEppY0xPY1lXT0dn0gFzQVVfeXFMUDVmYk9TVEZSREZlUGwtLXpDcm5FbzB4YThjeGxmcjB6d2lfWDktQUtnWHZiRXBCUWpYc24zcjRqNFpMRTA2SnlXOHp2eFRZaXViRlVxbjcyNjFvSGthd1JPd2FBTHdhMEYxNW9WWWMyTGpHZw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 2,
          "name": "엔비디아 호실적에 따른 국내 반도체주 반등",
          "easy": "엔비디아가 예상을 뛰어넘는 실적을 발표하자 국내 증시도 즉각 반응했습니다. 삼성전자와 SK하이닉스 등 반도체 관련주가 일제히 급등하며 투자 심리가 살아나는 모습인데요. 특히 SK하이닉스는 장중 9% 넘게 오르며 강한 상승세를 보였습니다.",
          "quote": "[개장시황] 코스피 2.63% 반등…SK하이닉스 5.56% 상승",
          "member_count": 7,
          "sample_articles": [
            {
              "n": 88,
              "title": "[개장시황] 코스피 2.63% 반등…SK하이닉스 5.56% 상승 - 한국경제",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE42Qjl6dUJaQ2pWUUdPcVFZb1lBcmlDYm5jcDVPc1Z4b1hvYVV6QW1wV0N2ZmtWYk8xZzZ6TGU5UF9nS2FYenFFd3p4Ujd4aGx2Q1ptWXNwR0RqUQ?oc=5"
            },
            {
              "n": 81,
              "title": "엔비디아 시간외 반등에 국내 증시도 들썩… HBM·후공정 수혜주 어디? - 핀포인트뉴스",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTE9jNDdpVktDRTVUbm9KcTFRTlRSTVAzaGVvcVphQXV6blU1STFkZVA3azFPU3NsMExlVGZvS3hDR3R1X05yN09qdkJIQzRyMnlkM2laNVA0amd4bEM4cmRSbFZZYm96a2NqWDhqYk9xVlVTUlNvLWNj0gF3QVVfeXFMT2M0N2lWS0NFNVRub0pxMVFOVFJNUDNoZW9xWmFBdXpuVTVJMWRlUDdrMU9Tc2wwTGVUZm9LeENHdHVfTnI3T2p2QkhDNHIyeWQzaVo1UDRqZ3hsQzhyZFJsVllib3prY2pYOGpiT3FWVVNSU28tY2M?oc=5"
            },
            {
              "n": 92,
              "title": "코스피, 2% 반등 출발하며 5천 선 회복‥삼성전자 3%↑·SK하이닉스 5%↑ - MBC 뉴스",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE8zakdhWVM2VTBIZDlOU3kxSUM5VTA3LXZoblVuc0VsV2tCNnQ3U0ZtYVdHZmphQ2oycExzTTV2N2VieHdVVXVHZGlmV3ZzVkJhdmVkRDdXLTJfUUZsNEtwbzY1UkpTaDBnVTVEV0Q1MVNKTzNF0gF0QVVfeXFMT2hHX0ZpNU9xSjJwQ19sWDA2R1RkczM3M1g0UlNxb1ZUX0J6X0VUWTZYTDltX01RYnl4SHpZTzlzNmluY3B5MmxyZ1NBSFJ0UzNnTzhiQW93YWYxbVprX3lFdDU5c0I3LVV5QUhpa2l5WUJEZmU?oc=5"
            },
            {
              "n": 91,
              "title": "[특징주] 삼성전자·SK하이닉스 동반 급등…엔비디아 호실적에 투자심리 회복 - 브릿지경제",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9TNmFCNnI5QWFsNF9uWTdES29mS3R5NTlnaWRaMmZ0RXBFOUozS2w1dWRfSGROQjZKb0NocFFoZHBmQXFadkR2QldHYXJmUTR3ZzZpRm5XbTFmdw?oc=5"
            },
            {
              "n": 27,
              "title": "엔비디아 ’어닝 서프라이즈’에 삼전·닉스 반등 시동…AI 투자 우려 잠재울까",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2180703"
            },
            {
              "n": 87,
              "title": "[특징주] 반도체株 반격 시작…SK하이닉스 110만원 돌파 - 뉴스핌",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE9uZFVtTE4zY2wwV2hZMC1pM2k5b0hLUkNvRnhBSXo4Z0lucEJVcTVkd3lGaWlLNm13OXVrNTRXT0FUMHE1VTZQOERHWWx6TkdMcWZSLUFtenhVdzFu?oc=5"
            },
            {
              "n": 89,
              "title": "[속보] SK하이닉스 프리장 9% 급등 '동적VI' - 뉴데일리 경제",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1HbGxtSzl6Qk1BaTlVZ0V1SGpXS2s1bi1PMnZWR3RpWlhXRXVGSm5Jay1meHVqVVhFWnBuaXlwOWRQd0lqV2JFWlB6V1JFQzV3SEI4RDVoaFJsXzdweFV5eVg5Y08xZ1NBMlZsM3VNWVJkTEpiN3Y5Y2dNMNIBgAFBVV95cUxPbGFQXzJ4NllIVFVZeWNhcnVqNWNKMXhDSzZiN0djT1lKbkJ0WHFVbnJNaVF3M3hjSDVsSFlvbjFPMWRHSVo4ZzRiR3NWdUFYYjQ0cVJxS1hvdl8tUF9rVEtIbzhUX1FMUFRkVmoyZUlPSWZ4MUhMVXVISjFDc3dDbA?oc=5"
            }
          ],
          "flags": [
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 3,
          "name": "경남 SMR 국제 컨퍼런스 개최",
          "easy": "경상남도가 글로벌 소형모듈원전 시장을 선점하기 위해 창원에서 국제 컨퍼런스를 열었습니다. 미국과 에스토니아 등 해외 원전 기업들이 대거 참여해 제조 공급망 협력을 논의했는데요. 경남을 세계적인 SMR 제조 거점으로 키우겠다는 계획입니다.",
          "quote": "경남, 글로벌 SMR 제조·공급망 거점 도약…미국·에스토니아와 협력 확대",
          "member_count": 6,
          "sample_articles": [
            {
              "n": 10,
              "title": "경남, 글로벌 SMR 제조·공급망 거점 도약…미국·에스토니아와 협력 확대",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374912"
            },
            {
              "n": 113,
              "title": "경남SMR 국제 컨퍼런스, 글로벌 SMR 기업들 경남 창원에 집결 - 일렉트릭파워",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFB2VnRELThsbTFqU0RXdFpRLWNCeWdVcTNjSG5UdzZENFBQLUdaakVWdlhITU1PaEQ3TENuYlozUkcyNWNXZVNfX000elJ4aEh1VjRCdUo5WTB1b0NSc1RqMzYtdFE?oc=5"
            },
            {
              "n": 115,
              "title": "경남, 글로벌 SMR 제조거점으로 육성 - 서울경제",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE53WUZlMmFqTDVibjZnT2x0ZnhLSTBjbHAwYmNqOG5NcFAtNlpybFNxQ3hfaEZKSWpOc1gwc3hYcm54aXhXbl9KT2xKWGpaanY0WFHSAVNBVV95cUxOWW5sT3NNQTJuUjd0UThFaTBRNUFjMGtiZW5zYXNJUnhCM0Nxc21BY2NpTUZEc1JQWGNLU3dpeWdaUGpGb3ZxaHdsMUdxNzBCNHhPdw?oc=5"
            },
            {
              "n": 110,
              "title": "국내외 원전기업 창원 집결…경남도 'SMR 국제콘퍼런스' 개최 - CNB뉴스",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE9vM2laS2Fod3NmUmp4UkhBYVg2S08wSW40OTZRR3psdy1TQTREMTBZcEJwZHp0Y1R5bWdKOEhSNzNKX01mRmt1ekx4V2I3S2RBQ0hweWN2ckNxaFlUMVBzZm5oUElQTUEtQ2Yw?oc=5"
            },
            {
              "n": 111,
              "title": "경남 'SMR 국제 콘퍼런스'…전세계 원전 전문가 모인다 - 한국경제",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE15ei1CeHhDZ05pZXhrUFEzNDl6OGExN0VOQmxsdzhwRTl5dVFJM0VzRUhEbGpnNk1zckNZeGVUaGZQaVFucmVUQmF4LXdxWkNkU0ZnSlFaT2c2UQ?oc=5"
            },
            {
              "n": 114,
              "title": "글로벌 SMR 기업 창원 집결…경남, 세계 원전 공급망 공략 - 한국원자력신문",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5NVzlTTGlnYzJ3OWFzMXhrMmRDZmxFaTJqazFoRE5UZk91UWk0MllfZ3c5RGhHRTl0OUJKa1BpTkJDRXctdHVHY2Z0RGlNRjMxS042dXh3eV9IZTF1RHZrSEt5NmlqczDSAWtBVV95cUxNU20xRnZhM1c0dDJrLWdIRUZoUGJ1cnE1bGJ6dXVIeFJWVmJkb1dTMXB6MURQeHRSMUxUa1RxNTBiNjZ5R0NMOHpraUNVS1VIcjdid3FuVHdBM293RDZSY0dPbFRoeXFOczhoRQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 4,
          "name": "한국형 혁신핵융합로 초전도자석 기술 논의",
          "easy": "한국핵융합에너지연구원이 한국형 혁신핵융합로에 들어갈 초전도자석 개발을 위해 산·학·연 전문가들을 모았습니다. 저온과 고온 기술을 아우르는 개발 전략을 논의했는데요. 핵심 부품인 초전도자석의 기술 역량을 결집해 상용화 기반을 다지려는 움직임입니다.",
          "quote": "KFE, 한국형 혁신핵융합로 초전도자석 개발 전략 논의",
          "member_count": 6,
          "sample_articles": [
            {
              "n": 175,
              "title": "KFE, 한국형 혁신핵융합로 초전도자석 개발 전략 논의 - 지디넷코리아",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1UN2dJQl9rcW9Cc19kNzRfRkJzZWZHT1FQSDdOOWpOZnRsSFZuVHBnODlrbUJrWUNOVndYREtBWTMxamFLYUlxRWlnUWNsUVJqTkpEWVRn?oc=5"
            },
            {
              "n": 173,
              "title": "핵융합연, 핵융합 초전도자석 전문가 워크숍 - 충청뉴스",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE9ZWE1OS2tCUG9kakFZcVpMbXI0X2N6RUUwY1RxbmF4aTY3QlV4VWNpb2ZuSkQ4aWVneGJPX1hxdmNPdW5wZ0VaTlRvYWxjaE5HRE9YeGh4SlR1aEx1WFg1Uk5QMERLSmstT1FZ?oc=5"
            },
            {
              "n": 170,
              "title": "韓 '혁신핵융합로 초전도자석' 개발 논의의 장 열려 - 전자신문",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE5XN2dmUTNFRXYzbXR5S2VTeEJhc2MzdDF0SUZqb3pyc202dWlYOUVLY1RpYVFiaDFmVEFkMF9GWFNTVVFTUEdmVHlMdWdnZw?oc=5"
            },
            {
              "n": 177,
              "title": "핵융합연, 한국형 혁신핵융합로 초전도자석 기술개발 산·학·연 머리 맞대 - 중도일보",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBUREVsWTJ0U19taExud2R6RjRCUHcyMGJsYTViUWplY1lFT0pCelJhZU9jd2o0U1lWUjV3dW11YUp5eldCTThvb19aSTNpZEZnTnhRRlFHMmJEZENQMEZjLTFXeUw?oc=5"
            },
            {
              "n": 174,
              "title": "핵융합연, 한국형 핵융합로 초전도자석 기술개발 논의 - 굿모닝충청",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE04bUhkSTBkVm1yc2liWHJjMUpoelF0OUJHSFRGeXlCOU5FR2xoRS1PczByamwzSU1RZml5TmNqbGZJZElYSGVibWx1TVN3ZFMwWWEtdGQ5akdZYTZSempSWDYwUTNzVlQ0RDJ1Vl93QXE3Zw?oc=5"
            },
            {
              "n": 176,
              "title": "핵융합(연), ‘핵융합 초전도자석 전문가 워크숍’ 개최 - 투데이에너지",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE94aUJ0aDdfTnJ3UzdlTm1mRWlTVllyRzVKbG12anpEa1cxUXd2OVFNZnRZcS1EQXdVNkRjRjUtWWwyQ001VjF3cnNxbk95MVRGaGs3a3Z1Vk53QTF3UC1lek0tVnA1RUw0SDVwZmFR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 5,
          "name": "뇌 신호 활용 재활 기술 개발",
          "easy": "병으로 목소리를 잃은 가수가 뇌 신호를 이용해 다시 노래를 부르는 기술이 공개됐습니다. 뇌-컴퓨터 인터페이스를 활용한 것인데요. 관련 시장 규모가 커질 것으로 전망되면서 상용화를 위한 임상 검증과 인프라 구축이 중요한 과제로 떠올랐습니다.",
          "quote": "병으로 목소리 잃은 가수… 뇌 신호로 다시 노래 불러",
          "member_count": 5,
          "sample_articles": [
            {
              "n": 755,
              "title": "병으로 목소리 잃은 가수… 뇌 신호로 다시 노래 불러 - 조선일보",
              "source_name": "'뇌과학 BCI 기술'",
              "link": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNZzc2WnVFLVpQZThfaVhpNTczUFNIMjZRRlhWRjFOeEZIdUtYQ3VVUWxoLV84d2l1eE4yWjloNkxGOHFicUxQWmNUV09IQUlwR3VUeDhFM2VLVmlvVFV1LUE3R1F6UmJyaVh6YlctWGdEZWpXaGsxSTVQOG52MzBhLTkxdw?oc=5"
            },
            {
              "n": 754,
              "title": "루게릭병으로 목소리 잃은 가수, 뇌 신호로 다시 노래했다 - 조선일보",
              "source_name": "'뇌과학 BCI 기술'",
              "link": "https://news.google.com/rss/articles/CBMigwFBVV95cUxQYTYxMEg2OHQ4anhPbExFOGg3R3VteUhvMXhtMDFXcVJOVlQtZmlSZWtVc1pHWXh5ZkFGVktRV1RldGVlZ21aazdCOUk3eVZtRUV5MFpaM05DV1VVSW9meGx6WjhpTkVqN1pibm5seXMwV1hrXzhJVkhBS3RTeW92bjZMWQ?oc=5"
            },
            {
              "n": 758,
              "title": "신경 재활 기기 시장 규모 보고서 2026: 21억 200만 달러 도달 전망, 연평균 성장률 12.5%로 확대｜QYResearch - note",
              "source_name": "'뇌과학 BCI 기술'",
              "link": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFBuVy1wbkRqMWlDanc1UHFRWi1mTGxiNVZDbS1tN1JYM1o4Wm1QajhxRlRyTzhXV0Vma1JRN3RQeEpxSHRuTkpTa3FGZnA4cGJlSi1aZFlfVUtXbV9Hb0JB?oc=5"
            },
            {
              "n": 757,
              "title": "BrainGate2 뇌-컴퓨터 인터페이스, 파일럿 임상 단계에서 확인해야 할 경계선 - 뉴스N연합",
              "source_name": "'뇌과학 BCI 기술'",
              "link": "https://news.google.com/rss/articles/CBMiSkFVX3lxTE1kLVNqTmJfSHk1R1hFZlAzaUZjUGd6VS1COUhiLXlEamFqOXBraWYyUEtKQmhBU1o0UkxDaml3Q21wS2pxT29JWXdB?oc=5"
            },
            {
              "n": 756,
              "title": "침습형 BCI의 상용화 장벽: 임상 증거·수술 인프라·적응증별 검증이 관건 - 뉴스N연합",
              "source_name": "'뇌과학 BCI 기술'",
              "link": "https://news.google.com/rss/articles/CBMiSkFVX3lxTFA1UG40R1BSdWFlR21uTjlZZnJyd2dORFh5TkhwaHEzNEhKOXNZNlktMFI1R0Y2MVlJQk4wckZiTXhaZHJ3bHVUZlFn?oc=5"
            }
          ],
          "flags": [
            "예측 의심: 관련 시장 규모가 커질 것으로 전망되면서 상용화를 위한 임상 검증과 인프라 구축이 중요한 ",
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 6,
          "name": "엔비디아 사상 최대 실적 달성",
          "easy": "젠슨 황이 물러난 뒤에도 엔비디아의 실적은 고공행진을 이어가고 있습니다. 최근 분기 매출이 전년보다 111%나 늘어나며 14분기 연속으로 사상 최대 실적을 갈아치웠는데요. 4분기 전망치도 시장의 예상을 뛰어넘으면서 건재함을 과시했습니다.",
          "quote": "'젠슨 황 없는' 엔비디아 첫 실적 신기록…4분기 전망도 예상상회(종합)",
          "member_count": 4,
          "sample_articles": [
            {
              "n": 107,
              "title": "'젠슨황 없는' 엔비디아 첫 실적 신기록…4분기 전망도 예상상회(종합) - 뉴스1",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1MQ1dwdHdkcDV6T3RRdWJNZnRsd3NBLTVwc0lZZEdZNzhabE0waWtuZHEteU9zVEZWUEdSV0l6Sk1yVHYzTV9oalVjbVhHcjdLR09odjl5N2tXX2dhX2tEaVpuVlo4TUU?oc=5"
            },
            {
              "n": 101,
              "title": "엔비디아, 최근 분기 매출 전년비 111% 증가·컨센 상회(종합) - 연합인포맥스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9DdHdlU0ZheXRzYjNqdkN5WlZCdnVicTFRdTExUTE2WnZiaGI1TnkwYTVsRzBhTWU5S0ZXMnJPelFBbldYVGdHVXpaWWFvdnA3Y1ZDVlJiVDVJMGEtT3hHSm1mSlVKUnZjRFU1cjdVck4?oc=5"
            },
            {
              "n": 102,
              "title": "엔비디아, 젠슨 황 없이 사상 최대 실적 발표... “새 CEO 찾는다” - 매일경제",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFB6aEt5TXdMajRxSjNCN1MzSzRmVkRjR19xQllrYllrOUtuNTBtTXU2SkJTZktzNTA3dnphaUlKWW02NkVzbms2Q1lhRS1qdw?oc=5"
            },
            {
              "n": 105,
              "title": "젠슨 황 없는 엔비디아, 14분기 연속 사상 최대 실적...전년보다 두 배 증가 - 조선일보",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMigwFBVV95cUxOZUZjb1pESGUyN2pYbUpPUWtpNE9sMWhsUnNnaERHMkdzV0RhaHFWVmNTcjFxc0Nucnc5UDByLUh6aWhOUlEyalkwQ1pwQ0NDb1pCanJsMktWU0VSWVM0ZG42VHU2SjVKUWJXa3ZZWDducUN6Ti04em1zQjd1TnN1bWJJUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 7,
          "name": "AI 데이터센터 전력·냉각 시장 공략",
          "easy": "AI 데이터센터가 급증하면서 전력과 냉각 기술이 핵심 시장으로 떠오르고 있습니다. 삼성SDI와 LG에너지솔루션 등 국내 기업들이 북미 시장을 겨냥해 ESS와 UPS 같은 전력 관리 솔루션을 잇달아 선보이고 있는데요. 전력 효율을 높이는 기술 경쟁이 치열해지는 모습입니다.",
          "quote": "AI 데이터센터 전력·냉각 시장 열린다…K기업, 밸류체인 선점 경쟁",
          "member_count": 4,
          "sample_articles": [
            {
              "n": 132,
              "title": "AI 데이터센터 전력·냉각 시장 열린다…K기업, 밸류체인 선점 경쟁 - 더트래커",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE5wV0FGNGpySkdxTlNCQVF2aFktdmdsazFhNVVJUW1rbFI3QU5VeFpyem03ekF4em9IbzhyVG9MODFHMDN5Wk4wRHhDeUg0S3ZNUXgtSm9JNGc?oc=5"
            },
            {
              "n": 135,
              "title": "삼성SDI, 데이터센터 전력 체계 전 구간 겨냥…북미서 ESS·UPS·BBU 배터리 공개 - 마켓잉크",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9ycDhURUlCWUUyOGd0bVVnN1l1ODRDbDc3OENjZVhybUJxSG5KRHBwWEhObDVtRVB5WDZKOUlFaS1WLS1oN2dsaW1BbUVtMTRYa1VOYW10VURIZHpsd24wZ0ZaOVY3U0tWejJTQ0Zrbw?oc=5"
            },
            {
              "n": 138,
              "title": "삼성SDI, AI 데이터센터 전력시장 공략…ESS·UPS·BBU '3각 전략' - 신아일보",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9MWjFVRXlIQnpzcF9SNmk2UFNmUU5vbmY4VUdfb0t4OGtld0hUOVN0cXB5bEVxMzNEWjFfRUl6S0xPd1ZJVlhtU0lOdnIxckFBRFBkckszaHo3d2dGRlRmYnRkU2IwbHQyQ0JDZFVjeFE?oc=5"
            },
            {
              "n": 117,
              "title": "LG엔솔, AI 데이터센터 전력시장 공략…북미 ESS 밸류체인 확장 - 더트래커",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBqR3FqOEFxQkwzVFJXOTFWY0ZmU0JRbHk4cHRoY2tCMnY3RUx6U2FxcjJELWxlTTh6bUVKMHFtY19VZjlJOGFjbWhyR1QybUxuZ1hrQzFZZDU?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 8,
          "name": "트럼프의 희토류 생산 확대 발언",
          "easy": "트럼프가 10개월 안에 미국의 희토류 생산량을 중국 수준으로 따라잡겠다고 공언했습니다. 중국의 자원 통제에 맞서 공급망을 확보하겠다는 의지로 보이는데요. 미·중 회담을 앞두고 나온 발언이라 국제적인 관심이 쏠리고 있습니다.",
          "quote": "트럼프 \"희토류 열달 내 中 따라잡을 것…이란전 해결 가까워져\"",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 198,
              "title": "트럼프 \"희토류 열달 내 中 따라잡을 것…이란전 해결 가까워져\" - 연합뉴스",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5aZ1JLWVRobUtIMDA1WVFLYWtVZGFWU1BvOHpuZVh3bFlLZnl3dE5nVlp4MWg5eVZTRHZOMGtyUjhiLWJoanBadWtVY3E3UENSLWh0VlFfcnUzUnPSAWBBVV95cUxQM21HVWF5dkYwcGM1Tk9FZi01RjZ2dTBmVGNESlhrOW1WU0ZhYXpiNXpEWjdEVVdONUQ4MXNyRURHX1Y4SzF0OHRPbzhSNzJmNnhEdUhfbjlVMHhpZWdfWGo?oc=5"
            },
            {
              "n": 195,
              "title": "트럼프 “10개월내 美 희토류 생산, 中 따라잡을 것” - 뉴시스",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTE5rdHlfMlpDakFmclo0U3FmSjI5dkV5Y0MxZ1BQVk5EeWVYbGZmcHE5UjlpMGFKSy1xd3J6T2Y4TThLQ09xSzJvMTFiWkdTV3VWbW1SMXBqelg3SWR4X0xzZ09kVUJLblV6emxpeHk4akVLYlBRbld6cdIBeEFVX3lxTE5rdHlfMlpDakFmclo0U3FmSjI5dkV5Y0MxZ1BQVk5EeWVYbGZmcHE5UjlpMGFKSy1xd3J6T2Y4TThLQ09xSzJvMTFiWkdTV3VWbW1SMXBqelg3SWR4X0xzZ09kVUJLblV6emxpeHk4akVLYlBRbld6cQ?oc=5"
            },
            {
              "n": 199,
              "title": "트럼프 “10개월 안 희토류 생산 중국 따라잡을 것”…미·중 회담 앞두고 자신감 - 경향신문",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE5pcTFvX1BucElHV01JSEFiX2s1SDd1eC12ODQ0VV81MmtDZXM1YnV2eE5hdVBFVmxyMVBzaXBleW5sNkxCZGNJUmZYdHI5VFlaOGllb2RFcmd5Q3FwWmhV0gFfQVVfeXFMTmlxMW9fUG5wSUdXTUlIQWJfazVIN3V4LXY4NDRVXzUya0NlczVidXZ4TmF1UEVWbHIxUHNpcGV5bmw2TEJkY0lSZlh0cjlUWVo4aWVvZEVyZ3lDcXBaaFU?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 9,
          "name": "키르기스스탄 에너지 정책 협력",
          "easy": "에너지경제연구원이 키르기스스탄의 에너지 정책을 돕기 위한 연구 성과를 공유했습니다. 특히 한국형 스마트계량기를 도입해 전력 요금 체계를 개혁하는 방안을 제시했는데요. 전력 관리 효율을 높여 현지 에너지 문제를 해결하려는 시도입니다.",
          "quote": "에경硏, 키르기스스탄 에너지 정책 연구성과 세미나 개최",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 130,
              "title": "에경硏, 키르기스스탄 에너지 정책 연구성과 세미나 개최 - 에너지타임뉴스",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE14QTBJS1Q4Y3ZjcTlXT1R1ZXhLNlRTVE5zd2hYVFFUVmItZURhd3FTWDZyWUxHNHpsUmpvZy11MkFCVGFfYTluRV9lVVl2RXowMkNHNHJmcFBQUXp1TGxaSEpuZlFaSVlMcVlFUHRIaG5nZ9IBdkFVX3lxTE1MclJBZG1qQjdBY2FIV3pSbUVQTnBmYVlVRDJvSS04czQxeXZZS2NpZDVGWEdha0hfMU5iTDNiVUNBSGRiMzVkdFV1aXR3bEd1Q2ZPdklIaTRVWTdJTUZvN0tNUVVSWU5oV2lnWmZDSmpLX2pIeWc?oc=5"
            },
            {
              "n": 126,
              "title": "에경연, 키르기스스탄 전력관리 개선 지원 성과 - 국토일보",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBsZjBac1R6R1NJRmZ1aTk2WDZxOERMd0w5SS1mZk9OandMUk45TFhCOERpV015YlQyNGZ3WU5Bd0FuRFNhdXEwa0VNVkVBMEttcXRpUG1INjhNNFpNdVFteVJrYkk?oc=5"
            },
            {
              "n": 127,
              "title": "키르기스스탄, \"한국형 스마트계량기로 ‘요금 개혁’ 해법 찾는다\" - 에너지코리아뉴스",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE44UzlWd2x0RUFraEZPT0VoN0ZqU3BzWl9PUm5ENTZBVEtCLXNNSzNuNlc3MlpObnRJUTRIcHNKNHNFNENaaU1sczU4TGpSLXRoMzV4Q1NEUXhWQmFwN1JkUUoyX2c4LU5ZbnFybTBZeEk?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 10,
          "name": "전기공사협회 건축·산업설비 특별위원회 활동",
          "easy": "한국전기공사협회가 건축과 산업설비 분야의 현장 목소리를 정책에 담기 위해 특별위원회를 꾸렸습니다. 그동안 현장에서 겪던 어려움을 제도 개선으로 연결하겠다는 건데요. 내년도 사업 계획에도 이러한 현장 경쟁력 강화 방안을 집중적으로 반영할 예정입니다.",
          "quote": "전기공사협회, 내년 사업 ‘회원 권익·현장 경쟁력’에 집중",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 20,
              "title": "전기공사협회, 내년 사업 ‘회원 권익·현장 경쟁력’에 집중",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374893"
            },
            {
              "n": 14,
              "title": "전기공사협회, 건축·산업설비 특별위 첫발…“현장 목소리 정책에 담는다”",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374903"
            },
            {
              "n": 3,
              "title": "임왕식 전기공사협회 건축·산업설비 특별위원장 “건축·내선 현장의 목소리, 실질적인 제도 개선으로 연결할 것”",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374905"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        }
      ]
    },
    "ch2_numbers": {
      "title": "챕터 2 · 숫자 (거푸집1)",
      "addr": "처리-1",
      "status": "돎 (AI 0콜 · 정규식 추출 + 공식 API 대조)",
      "counts": {
        "gate_in": {
          "val": 89,
          "source": "v2_secretary/결과/문앞/2026-11-18_문앞교통정리_길별.json"
        },
        "dart_day_total": {
          "val": 83,
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        "dart_contracts": {
          "val": 18,
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        "dart_others": {
          "val": 65,
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        "fred_series": {
          "val": 14,
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
          "company": "미래산업",
          "market": "유가",
          "what": "정정신고(보고)",
          "amount_won": "2,706,134,130",
          "pct_of_sales": "5.33",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "중국",
          "period": "2026-06-12~2026-11-25",
          "changes": "5. 계약기간 종료일: 2026-11-25 → 2026-12-05",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117800641",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "SGC E&C",
          "market": "코스닥",
          "what": "군포 대야미 A-2BL 아파트 건설공사 1공구",
          "amount_won": "165,211,727,270",
          "pct_of_sales": "10.85",
          "pct_check": "맞음",
          "counterparty": "한국토지주택공사(LH)",
          "region": "발주처 지정장소",
          "period": "2023-12-08~2029-01-27",
          "changes": "2. 계약내역 확정 계약금액 계약금액 총액(원) 매출액 대비(%): 154,347,885,845 154,347,885,845 10.13% → 165,211,727,270 165,211,727,270 10.85% ; 9. 기타 투자판단에 참고할 사항: 1. 상기 2번의 계약금액은 총 공사도급액(281,303,974,100원) 중 당사 참여분(55%)에 해당하는 금액으로 부가세 제외 수치임. → 1. 상기 2번의 계약금액은 총 공사도급액(301,100,139,100원) 중 당사 참여분(55%)에 해당하는 금액으로 부가세 제외 수치임.",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117900571",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "나우로보틱스",
          "market": "코스닥",
          "what": "부스터 프로 X2 Probe Ass’y 자동화 설비",
          "amount_won": "800,000,000",
          "pct_of_sales": "6.39",
          "pct_check": "맞음",
          "counterparty": "주식회사 에이피알팩토리",
          "region": "상대방 지정장소",
          "period": "2026-05-18~2027-02-18",
          "changes": "5. 계약기간(종료일): 2026-11-18 → 2027-02-18 ; 10. 기타 투자판단에 참고할 사항: - → 2026.11.17.현재 계약 이행률은 40.0% 입니다.",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117900512",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "현대로템",
          "market": "유가",
          "what": "정정신고(보고)",
          "amount_won": "95,409,640,266",
          "pct_of_sales": "3.4",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "이집트",
          "period": "2021-05-31~2027-12-31",
          "changes": "2. 계약내역/계약금액(원): 99,932,800,000 → 95,409,640,266 ; 2. 계약내역/매출액대비(%): 3.6 → 3.4 ; 5. 계약기간 / 종료일: 2027-01-19 → 2027-12-31 ; 7. 계약(수주)일자: 2016-04-22 → 2021-06-24 ; 9. 기타 투자판단과 관련한 중요사항: 1) 상기 계약서 수령인은 로템대아(Rotem-Daea Consortium) 컨소시움이며, 총 계약가 USD 110,000,000 중 컨소시움  → 1) 상기 계약서 수령인은 로템대아(Rotem-Daea Consortium) 컨소시움이며, 총 계약가 USD 110,894,390 중 컨소시움 ",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117800497",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "아센디오",
          "market": "유가",
          "what": "단일판매ㆍ공급계약 체결",
          "amount_won": "929,868,443",
          "pct_of_sales": "15.70",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "해외",
          "period": "2026-11-16~2027-05-15",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117800428",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "코오롱",
          "market": "유가",
          "what": "단일판매ㆍ공급계약 체결",
          "amount_won": "77,685,100,000",
          "pct_of_sales": "2.89",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "충청북도 청주시 흥덕구 송정동 27-15번지 일원",
          "period": "2026-12-21~2028-06-30",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117800384",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "코오롱글로벌",
          "market": "유가",
          "what": "단일판매ㆍ공급계약 체결",
          "amount_won": "77,685,100,000",
          "pct_of_sales": "2.89",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "충청북도 청주시 흥덕구 송정동 27-15번지 일원",
          "period": "2026-12-21~2028-06-30",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117800374",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "싸이버원",
          "market": "코스닥",
          "what": "국가고용전산망 사이버보안관제센터 운영지원 사업",
          "amount_won": "4,111,159,091",
          "pct_of_sales": "12.19",
          "pct_check": "맞음",
          "counterparty": "조달청(수요기관:한국고용정보원)",
          "region": "대한민국",
          "period": "2027-01-01~2029-12-31",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117900368",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "싸이버원",
          "market": "코스닥",
          "what": "2026년 지자체 정보통신기반시설 정보보호 컨설팅",
          "amount_won": "4,165,341,241",
          "pct_of_sales": "8.70",
          "pct_check": "맞음",
          "counterparty": "조달청(수요기관:지역정보개발원)",
          "region": "대한민국",
          "period": "2026-02-13~2026-12-31",
          "changes": "2.계약내역-확정 계약금(원): 4,174,694,017 → 4,165,341,241 ; 2.계약내역-계약금액 총액(원): 4,174,694,017 → 4,165,341,241 ; 2.계약내역- 매출액 대비(%): 8.72 → 8.70 ; 9.기타 투자판단에 참고할 사항: 상기 \"계약금액\"은 부가가치세를 제외한 금액입니다. 총 계약금액 6,683,824,156원 중 당사 비중인 62.46%에 해당하는 금액입니다. → 상기 \"계약금액\"은 부가가치세를 제외한 금액입니다. 총 계약금액 6,674,471,380원 중 당사 비중인 62.41%에 해당하는 금액입니다.",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117900341",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "이지케어텍",
          "market": "코스닥",
          "what": "의료정보시스템 종합관리 위탁운영 용역",
          "amount_won": "24,894,006,090",
          "pct_of_sales": "34.0",
          "pct_check": "맞음",
          "counterparty": "분당서울대학교병원",
          "region": "경기도 성남시",
          "period": "2023-12-01~2027-01-31",
          "changes": "2. 계약내역 - 확정계약금액: 22,663,096,364 → 24,894,006,090 ; 2. 계약내역 - 계약금액 총액(원): 22,663,096,364 → 24,894,006,090 ; 2. 계약내역 - 매출액 대비(%): 30.9 → 34.0 ; 5. 계약기간 - 종료일: 2026-11-30 → 2027-01-31",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117900284",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "에코아이",
          "market": "코스닥",
          "what": "배출권 판매 계약",
          "amount_won": "3,653,120,332",
          "pct_of_sales": "11.8",
          "pct_check": "맞음",
          "counterparty": "LOUIS DREYFUS COMPANY SUISSE SA(LDC)",
          "region": "스위스",
          "period": "2026-11-16~2026-11-30",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117900277",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "수산인더스트리",
          "market": "유가",
          "what": "정정신고(보고)",
          "amount_won": "67,505,355,054",
          "pct_of_sales": "20.79",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "한국수력원자력 한울원자력본부",
          "period": "2024-05-01~2027-04-30",
          "changes": "2. 계약내역(계약금액(원)): 63,741,708,279 → 67,505,355,054 ; 2. 계약내역(매출액대비(%)): 19.63 → 20.79",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117800273",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "제이에스링크",
          "market": "코스닥",
          "what": "정밀분석용 롱리드 기반 시퀀싱 데이터생산",
          "amount_won": "2,238,760,000",
          "pct_of_sales": "11.59",
          "pct_check": "맞음",
          "counterparty": "한국생명공학연구원",
          "region": "대한민국",
          "period": "2026-11-13~2027-06-30",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117900263",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "우진",
          "market": "유가",
          "what": "정정신고(보고)",
          "amount_won": "9,323,397,972",
          "pct_of_sales": "6.63",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "새울 1발, 고리 3발, 한빛 2발, 월성 3발",
          "period": "2026-02-26~2027-03-15",
          "changes": "2. 계약내역 / 계약금액(원): 8,827,223,000 → 9,323,397,972 ; 2. 계약내역 / 매출액대비(%): 6.27 → 6.63",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117800253",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "대아티아이",
          "market": "코스닥",
          "what": "이집트 신호현대화 사업",
          "amount_won": "30,618,787,824",
          "pct_of_sales": "23.14",
          "pct_check": "맞음",
          "counterparty": "이집트철도청(Egyptian National Railways)",
          "region": "이집트",
          "period": "2021-05-31~2027-12-31",
          "changes": "계약금액: 29,524,418,560 → 30,618,787,824 ; 매출액대비 (%): 22.31 → 23.14 ; 계약기간 종료일: 2027-01-23 → 2027-12-31",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117900242",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "한신공영",
          "market": "유가",
          "what": "정정신고(보고)",
          "amount_won": "132,093,437,000",
          "pct_of_sales": "8.5",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "충청남도 아산시 염치읍",
          "period": "2021-08-27~2026-12-31",
          "changes": "2. 계약내역 계약금액(원): 126,205,753,700 → 132,093,437,000 ; 2. 계약내역 매출액대비(%): 8.1 → 8.5 ; 5. 계약기간 종료일: 2026-12-15 → 2026-12-31 ; 9. 기타 투자판단과 관련한 중요사항: 2. 총계약금액은 151,670,704,000원이며, 당사 지분율은 토목공사 83.09%(125,144,519,700원), 전기공사 100%(1 → 2. 총계약금액은 158,294,265,000원이며, 당사 지분율은 토목공사 83.3%(131,032,203,000원), 전기공사 100%(1,",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117800240",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "미래컴퍼니",
          "market": "코스닥",
          "what": "반도체 제조 장비 공급",
          "amount_won": "2,090,000,000",
          "pct_of_sales": "5.11",
          "pct_check": "맞음",
          "counterparty": "삼성전자 주식회사",
          "region": "국내",
          "period": "2026-11-16~2026-12-30",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117900200",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "남광토건",
          "market": "유가",
          "what": "단일판매ㆍ공급계약 체결",
          "amount_won": "31,659,828,699",
          "pct_of_sales": "8.86",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "경기도 수원시, 화성시 일원",
          "period": "2026-11-30~2030-06-28",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117800167",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        }
      ],
      "dart_others": [
        {
          "company": "셀레믹스",
          "market": "코스닥",
          "kind": "최대주주변경을수반하는주식담보제공계약체결",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117900652",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "크라우드웍스",
          "market": "코스닥",
          "kind": "[기재정정]최대주주변경",
          "changes": "3. 지분인수목적 -인수자금 조달방법: 자기자금 : 9,000,997,680 차입금 : - 차입처 : - 차입기간 : - 담보내용 : - → 자기자금 : - 차입금 : 9,000,997,680 차입처 : 심뱅스주식회사 차입기간 : 2026.01.30 - 2027.05.04 담보내용 : ; 6. 기타 투자판단에 참고할 사항: - → - 최대주주는 심뱅스 주식회사로부터 2026.01.30. 및 2026.02.05.자로 총 2회 자금을 대여하였으며, 변제일은 해당 자금을 통해 ",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117900650",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "디에이치엑스컴퍼니",
          "market": "코스닥",
          "kind": "횡령ㆍ배임혐의진행사항",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117900648",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "우진비앤지",
          "market": "코스닥",
          "kind": "주요사항보고서(전환사채권발행결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117000259",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "넥스턴앤롤코리아",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(전환사채권발행결정)",
          "changes": "16. 담보제공에 관한 사항: 주1) → 주2)",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117000260",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "영원무역홀딩스",
          "market": "유가",
          "kind": "유상증자결정(종속회사의주요경영사항)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117800625",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "우진비앤지",
          "market": "코스닥",
          "kind": "주요사항보고서(유상증자결정)",
          "changes": "",
          "numbers": "종류 유상증자 · 목적: 운영(원) 1,500,000,000 · 신주 보통주(주) 600,000 · 1주당 액면가(원) 2,500 · 증자 전 보통주(주) 6,932,982 · 증자 방식 제3자배정증자",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117000256",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "비츠로시스",
          "market": "코스닥",
          "kind": "주요사항보고서(감자결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117000255",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "비츠로시스",
          "market": "코스닥",
          "kind": "주권매매거래정지 (자본감소)",
          "changes": "",
          "numbers": "",
          "body_from": "공시 화면",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117900624",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "이지스밸류플러스리츠",
          "market": "유가",
          "kind": "[기재정정]부동산투자회사자금차입",
          "changes": "1. 차입내역-차입금액(원): 66,000,000,000 → 56,000,000,000 ; 1. 차입내역-자기자본대비(%): 14.7 → 14.5 ; 4.기타 투자판단과 관련한 중요사항: - 대출기관(금액): 삼성증권 주식회사 (350억원), 주식회사 우리투자증권 (200억원), 주식회사 SBI저축은행 (60억원), 유안타저축은행 → - 대출기관(금액): 삼성증권 주식회사 (29,696,969,697원), 주식회사 우리투자증권 (16,969,696,970원), 주식회사 SBI",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117800594",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "벡트로보틱스",
          "market": "코스닥",
          "kind": "[기재정정]최대주주변경을수반하는주식양수도계약체결",
          "changes": "2. 계약 내역 - 양수도 대금의 지급일정 및 지급조건 등에 관한 사항 - 4. 대금지급일정 - ② 2차 거: ※ 2026년 11월 16일 현재 잔금 4,000,000,000원이 지급되지 않았으며, 계약 당사자들은 향후 계약 이행 및 처리방안에 관한 사항 → ※ 2026년 11월 16일 예정된 잔금 4,000,000,000원이 지급되지 않았으며, 2026년 11월 17일 계약 당사자 간 합의에 따라  ; 5. 기타 투자판단에 참고할 사항: 4. 2026년 11월 16일 예정된 2차 거래종결 관련 잔금 4,000,000,000원이 지급되지 않음에 따라, 계약 당사자들은 향후 계약 이 → 4. 2026년 11월 16일 예정된 잔금 4,000,000,000원이 미지급됨에 따라, 계약 당사자들은 2026년 11월 17일 추가 합의를 ",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117900603",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "넥스턴앤롤코리아",
          "market": "코스닥",
          "kind": "[기재정정]최대주주변경을수반하는주식담보제공계약체결",
          "changes": "1. 담보제공자(최대주주) 관련 사항 - 담보권 전부 실행시 소유 주식 수(주): 583,968 → 0 ; 1. 담보제공자(최대주주) 관련 사항 - 담보권 전부 실행시 지분율(%): 3.81 → 0.00 ; 4. 담보제공 내역 누적 담보제공 주식 총수(주): 2,100,000 → 2,683,968 ; 6. 기타 투자판단에 참고할 사항: - → 마. 상기 '4 담보제공 내역 누적 '담보제공 주식 총수(주)'의 변동 내역은 담보제공자의  기존 담보제공 계약과 관련하여 주가 하락등에 따른  ; [개별 담보제공 계약에 관한 사항] 담보제공주식수(주): 2,100,000 → 2,683,968",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117900590",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "스마트레이더시스템",
          "market": "코스닥",
          "kind": "전환사채(해외전환사채포함)발행후만기전사채취득 (제1회차)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117900564",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "한국자산신탁",
          "market": "유가",
          "kind": "[기재정정]소송등의제기ㆍ신청(일정금액이상의청구)",
          "changes": "2. 원고·신청인: 노○○ 외 451명 → 노○○ 외 450명 ; 4. 청구금액: 181,194,991,000 → 180,756,231,000 ; 4. 자기자본대비(%): 16.73 → 16.68 ; 7. 제기ㆍ신청일자: 2026-11-05 → 2026-11-16 ; 8. 확인일자: 2026-11-06 → 2026-11-17 ; 9. 기타 투자판단에 참고할 사항: 2. 최초 소송 제기 당시('24.07.17) 소가(94억원)는 공시해당금원에 미치지 아니하였으나, 청구취지 변경(원고 465명, 소가:192, → 2. 최초 소송 제기 당시('24.07.17) 소가(94억원)는 공시해당금원에 미치지 아니하였으나, 청구취지 변경(원고 465명, 소가:192,",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117800552",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "한국자산신탁",
          "market": "유가",
          "kind": "소송등의제기ㆍ신청(일정금액이상의청구)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117800549",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "육일씨엔에쓰",
          "market": "코스닥",
          "kind": "유상증자결정(종속회사의주요경영사항)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117900523",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "다보링크",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(유상증자결정)",
          "changes": "9. 납입일: 2026년 11월 17일 → 2026년 12월 09일 ; 12. 신주의 상장 예정일: 2026년 12월 04일 → 2026년 12월 23일",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117000201",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "이연제약",
          "market": "유가",
          "kind": "주요사항보고서(자기전환사채만기전취득결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117000188",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "SNT모티브",
          "market": "유가",
          "kind": "[기재정정]타법인주식및출자증권취득결정(자율공시)",
          "changes": "1. 발행회사 - 대표자: 최영섭 → 권오혁 ; 1. 발행회사 - 회사와 관계: - → 최대주주 ; 2. 취득내역 - 취득금액(원): 24,822,930,000 → 18,854,737,500 ; 2. 취득내역 - 자기자본대비(%): 2.4 → 1.85 ; 7. 이사회결의일(결정일): 2026-10-19 → 2026-11-17 ; 9. 기타 투자판단과 관련한 중요사항: 2) 상기 '2. 취득내역'상의 취득금액은 이사회 결의일인 2026년 10월 19일의 한국거래소 최종시세가액 기준으로, 최종취득금액은 시간외대량 → 2) 상기 '2. 취득내역'상의 취득금액은 시간외대량매매 체결일인 2026년 11월 17일 한국거래소 최종시세가액(1주당 3,175원)으로 계산",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117800511",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "블루산업개발",
          "market": "유가",
          "kind": "[기재정정]주요사항보고서(유상증자결정)",
          "changes": "9. 납입일: 2026년 11월 17일 → 2026년 11월 26일 ; 12. 신주의 상장 예정일: 2026년 12월 10일 → 2026년 12월 18일 ; 20. 기타 투자판단에 참고할 사항: - → 주1) 정정 후",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117000192",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "유진엠플러스",
          "market": "기타",
          "kind": "특수관계인으로부터자금차입",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117000203",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "와이지-원",
          "market": "코스닥",
          "kind": "[기재정정]최대주주변경을수반하는주식담보제공계약체결",
          "changes": "1. 담보제공자(최대주주) 관련 사항 - 담보권 전부 실행시 소유 주식 수(주) 지분율(%): 3,321,879 8.93 → 3,171,304 8.53 ; 2. 채무(차입)금액 총액(원): 4,912,000,000 → 5,412,000,000 ; 3. 담보설정금액 총액(원): 8,274,058,186 → 9,141,338,061 ; 4. 담보제공 내역 - 누적 담보제공 주식 총수(주): 1,742,429 → 1,893,004 ; 5. 담보권 설정계약 체결일(당해 건): 2026-11-03 → 2026-11-17 ; [개별 담보제공 계약의 담보권 실행 조건] 순번1. - 담보설정금액(원) - 담보제공주식수(주): 1,382,724,000 186,000 → 2,250,003,875 336,575",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117900487",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "엠젠솔루션",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(전환사채권발행결정)",
          "changes": "9. 전환에 관한 사항中 최저 조정가액(원): 733원 → 1,000원",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117000152",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "영원무역",
          "market": "유가",
          "kind": "유상증자결정(종속회사의주요경영사항)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117800520",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "SNT홀딩스",
          "market": "유가",
          "kind": "[기재정정]타법인주식및출자증권처분결정(자율공시)",
          "changes": "1.발행회사 - 대표자: 최영섭 → 권오혁 ; 1.발행회사 - 회사와의 관계: - → 최대주주의 특수관계인 ; 2.처분내역 - 처분금액(원): 24,822,930,000 → 18,854,737,500 ; 2.처분내역 - 자기자본대비(%): 1.04 → 0.79 ; 6.이사회결의일(결정일): 2026-10-19 → 2026-11-17 ; 1.기타 투자판단과 관련한 중요사항: 2) 상기 '2. 처분내역' 상의 처분금액은 이사회결의일인 2026년 10월 19일의 한국거래소 최종시세가액 기준으로, 최종처분금액은 시간외대량 → 2) 상기 '2. 처분내역' 상의 처분금액은 시간외대량매매 체결일인 2026년 11월 17일의 한국거래소 최종시세가액(1주당 3,175원)으로 ",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117800519",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "엔브이에이치코리아",
          "market": "코스닥",
          "kind": "타인에대한채무보증결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117900513",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "원온",
          "market": "기타",
          "kind": "타법인주식및출자증권취득결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117000194",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "세원정공",
          "market": "유가",
          "kind": "타인에대한담보제공결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117800456",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "KCC건설",
          "market": "코스닥",
          "kind": "타인에대한채무보증결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117900483",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "바이오인프라",
          "market": "코스닥",
          "kind": "합병등종료보고서(합병)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117000172",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "지엔코",
          "market": "코스닥",
          "kind": "특수관계인으로부터자금차입",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117000164",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "파이온엑스",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(전환사채권발행결정)",
          "changes": "23. 기타 투자판단에 참고할 사항: [주1] 정정 전 → [주1] 정정 후",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117000130",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "씨씨에스",
          "market": "코스닥",
          "kind": "소송등의제기ㆍ신청(경영권분쟁소송) (의결권행사금지 가처분)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117900333",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "메타바이오메드",
          "market": "코스닥",
          "kind": "주요사항보고서(자기주식취득결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117000129",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "인포바인",
          "market": "코스닥",
          "kind": "주식소각결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117900376",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "삼성바이오로직스",
          "market": "유가",
          "kind": "유상증자또는주식관련사채등의발행결과(자율공시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117800347",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "애경스페셜티",
          "market": "기타",
          "kind": "특수관계인에대한자금대여",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117000118",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "인지디스플레",
          "market": "코스닥",
          "kind": "타인에대한채무보증결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117900340",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "우진아이엔에스",
          "market": "유가",
          "kind": "주요사항보고서(자기주식취득신탁계약체결결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117000106",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "우진아이엔에스",
          "market": "유가",
          "kind": "주식소각결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261117800326",
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
          "val": 44,
          "source": "v2_secretary/결과/문앞/2026-11-18_문앞교통정리_길별.json"
        },
        "summarized_today": {
          "val": 37,
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        "bad_numbers_today": {
          "val": 1,
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        "fed_speeches_total": {
          "val": 25,
          "source": "v2_secretary/결과/연준연설/"
        }
      },
      "items": [
        {
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "국회미래연구원, “한-유럽 미래전략대화: 경제안보와 AI혁신 협력”주제로 「글로벌 의회외교포럼」 개최 슐테스 스위스 슈퍼컴퓨팅센터 소장, 한국 등과 ‘과학을 위한 AI’ 파운데이션 모델 공동 개발 제언 한-유럽 의원들, 경제안보 협력 위한 의회간 전략소통 강화 필요 공감",
          "easy1_title": "한국과 유럽이 힘을 합쳐 경제 안보와 AI 기술을 지키기로 했어요",
          "easy1_desc": "국회미래연구원이 한국과 유럽의 의원 및 전문가들을 불러 모아 경제 안보와 인공지능(AI) 혁신을 어떻게 함께 이끌어갈지 논의했는데요. 공급망 재편이나 기술 패권 경쟁 같은 문제는 한 나라가 혼자 해결하기 어렵기 때문에, 민주주의 가치를 공유하는 한국과 유럽이 긴밀하게 연대해야 한다는 겁니다. 쉽게 말하면, 서로의 기술과 경험을 나누며 안전한 AI 생태계를 만들고 경제 안보를 튼튼히 하겠다는 계획이에요.",
          "easy2_title": "AI 기술 주권을 위해 한국과 유럽이 공동 연구에 나서기로 했어요",
          "easy2_desc": "AI 경쟁이 단순히 모델 성능을 넘어 반도체나 컴퓨팅 인프라 같은 생태계 전체의 싸움으로 번지고 있는데요. 전문가들은 한국과 유럽이 가진 상호보완적인 강점을 합치면 기술 주권을 확보하는 데 큰 도움이 될 거라고 봤어요. 특히 과학 연구를 위한 AI 모델을 공동 개발하거나 의회 간 실무 그룹을 만들어 정책을 맞추겠다는 계획인데요. 혼자서 모든 걸 다 하려 하기보다 믿을 수 있는 파트너와 협력해 전략적 선택지를 넓히겠다는 겁니다.",
          "topic": "국제질서가 바뀌는 시기에 한국과 유럽이 경제 안보와 AI 혁신을 위해 어떻게 협력할지 논의했어요.",
          "points": [
            "경제 안보와 의회 외교: 경제 안보가 단순히 공급망을 방어하는 수준을 넘어 첨단 기술과 에너지 안보까지 포괄하는 국가 전략으로 커지고 있는데요. 한국과 유럽 의원들은 이런 정책이 무역 장벽이 되지 않도록 의회 간 전략적 소통을 강화해야 한다고 입을 모았어요. 결국 신뢰할 수 있는 파트너끼리 제도적 협력을 넓혀가겠다는 겁니다.",
            "AI 생태계와 기술 주권: AI 경쟁은 이제 반도체와 에너지, 인재까지 아우르는 생태계 싸움이 됐는데요. 전문가들은 기술 주권을 지키는 게 고립을 의미하는 건 아니라고 봤어요. 오히려 한국의 반도체·제조 역량과 유럽의 과학 연구·장비 강점을 결합하면 공동의 경쟁력을 더 키울 수 있다는 겁니다.",
            "과학을 위한 AI 공동 개발: 스위스 슈퍼컴퓨팅센터 소장은 한국과 스위스 등이 함께 과학 연구용 AI 파운데이션 모델을 만들자고 제안했는데요. 미래는 지식 공유에 달려 있으니 개별 국가의 역량을 넘어 글로벌 과학 동맹을 구축해야 한다는 거예요. 국회미래연구원도 이번 논의를 바탕으로 중장기 국가 전략을 세우고 연구 협력을 뒷받침하겠다는 계획입니다."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "point1 근거 원문에 없음",
          "body_chars": "4500",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5315095",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "AI 모델, 개발비 낮추며 미국을 빠르게 추격…고난도 추론과 장시간 자율업무 격차는 여전하고 증류 차단으로 추격 경로 위축 - 국회미래연구원, 「중국 소버린 AI 정책의 성과와 한계」 브리프 발표 -",
          "easy1_title": "중국이 AI 기술을 열심히 따라잡고는 있지만 미국을 넘어서기는 쉽지 않아요",
          "easy1_desc": "중국이 반도체부터 로봇까지 AI의 모든 단계를 스스로 만들려고 애쓰면서 미국을 빠르게 추격하고 있는데요. 그런데 핵심 장비가 부족해서 칩 생산이 어렵고, 그 결과 성능이나 비용 면에서 미국보다 뒤처지는 상황이에요. 쉽게 말하면, 덩치는 키웠지만 미국을 앞지를 만한 결정적인 한 방이 부족하다는 말이에요.",
          "easy2_title": "모든 걸 다 직접 만들려 하기보다 우리에게 꼭 필요한 것부터 챙겨야 해요",
          "easy2_desc": "중국처럼 모든 AI 기술을 나라 안에서 다 해결하려다 보면 비용이 너무 많이 들고 효율도 떨어지거든요. 그래서 핵심적인 기술은 국내에서 확실히 챙기되, 나머지는 외부 공급망을 유연하게 활용하는 전략이 필요하다는 거예요. 국회도 정부가 추진하는 AI 사업들이 실제로 효과가 있을지 꼼꼼하게 따져봐야 한다는 말이에요.",
          "topic": "중국 소버린 AI 정책의 성과와 한계를 분석하고, 한국이 나아가야 할 전략적 방향을 제시했어요.",
          "points": [
            "중국 AI 추격의 한계: 중국은 장비 국산화 등으로 미국을 쫓아가고 있지만, 최첨단 칩 제조 장비가 없어 수율이 낮고 가격은 비싼 편이에요. 게다가 핵심 칩을 엔비디아에 의존하는 상황이라 미국과의 기술 격차를 완전히 좁히지 못하고 있거든요. 쉽게 말하면, 겉모습은 비슷해 보여도 속을 들여다보면 여전히 미국 기술에 발목이 잡혀 있다는 겁니다.",
            "수익으로 이어지지 않는 확산: 중국 AI 모델은 오픈웨이트 방식으로 세계 시장에 많이 퍼져 있지만, 정작 그 성과가 중국 기업의 수익이나 데이터 축적으로 이어지지는 않고 있어요. 모델이 변형되어 쏟아지다 보니 매출은 적고, 보안 문제로 시장 진출까지 막히는 경우가 많거든요. 결국 혁신을 위한 선순환 구조를 만드는 데 한계가 있다는 말이에요.",
            "전략적 소버린 AI 필요성: 중국처럼 모든 계층을 자급하려다가는 막대한 비용만 들고 정작 중요한 기술 개발 여력은 줄어들 수 있어요. 그래서 우리나라는 안보와 산업 구조를 고려해 꼭 필요한 핵심 역량만 국내에 확보해야 한다는 겁니다. 국회도 4.7조 원 규모의 프론티어 AI 사업 같은 예산이 낭비되지 않도록 엄격하게 감독해야 한다고 봤다는 거예요."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "easy1 근거 원문에 없음",
          "body_chars": "6618",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5315091",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "산업부 보도 RSS(POST)",
          "kind": "산업통상부 보도자료",
          "writer": "산업통상부",
          "title": "산업부 장관, 수출 1조 달러 앞두고 수출 최전선인 인천신항 방문",
          "easy1_title": "우리나라가 곧 수출 1조 달러라는 큰 기록을 세우게 됩니다",
          "easy1_desc": "올해 우리나라는 중동전쟁이나 보호무역주의 같은 어려운 상황 속에서도 반도체와 소비재 같은 주력 품목들이 잘 팔리면서 수출이 계속 늘어났는데요. 11월 10일까지 누적 수출액이 9,600억 달러를 넘어서면서 이번 주 안으로 사상 처음으로 1조 달러를 달성할 것으로 보입니다. 쉽게 말하면, 우리 기업과 노동자들이 세계 시장에서 땀 흘려 노력한 결과가 곧 결실을 맺는 셈이에요.",
          "easy2_title": "수출 현장의 목소리를 듣고 어려움을 직접 해결해 주겠다고 합니다",
          "easy2_desc": "김정관 장관은 인천신항을 찾아 수출 최전선에서 고생하는 노동자와 물류 관계자들에게 감사의 인사를 전했는데요. 앞으로도 수출 현장에서 나오는 목소리를 계속 듣고 금융이나 통상 같은 분야에서 겪는 어려움을 적극적으로 풀어주겠다는 계획입니다. 수출이 계속 성장할 수 있게 정부가 뒤에서 든든하게 지원하겠다는 뜻이에요.",
          "topic": "산업통상부 장관이 수출 1조 달러 달성을 앞두고 인천신항 현장을 방문하여 관계자들을 격려하고 수출 지원 의지를 밝힌 내용이에요.",
          "points": [
            "수출 1조 달러 달성 임박: 올해는 중동전쟁이나 주요국의 보호무역주의 강화 같은 대외 여건이 좋지 않았음에도 반도체 등 주력 산업의 경쟁력 덕분에 수출이 증가세를 이어갔는데요. 11월 10일 기준으로 이미 9,600억 달러를 넘어서면서 이번 주 중으로 사상 첫 1조 달러 달성을 앞두고 있는 상황입니다.",
            "인천신항의 중요성 재확인: 인천신항은 중고차나 화장품처럼 우리 중소기업들이 만든 우수한 제품들이 세계 시장으로 나가는 중요한 관문 역할을 하고 있는데요. 김 장관은 우리 수출이 새로운 역사를 쓸 수 있었던 배경에는 보이지 않는 곳에서 묵묵히 역할을 다해준 수많은 분들의 노력이 있었다고 강조했습니다.",
            "수출 현장 지원 강화 계획: 정부는 앞으로도 수출 현장의 목소리를 꾸준히 듣고 물류나 금융, 통상 분야에서 기업들이 겪는 애로사항을 적극적으로 해소하겠다는 계획을 밝혔는데요. 이를 통해 수출 성장세가 계속 이어질 수 있도록 정부 차원의 지원을 아끼지 않겠다는 입장입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 11월 10일까지 누적 수출액이 9,600억 달러를 넘어서면서 이번 주 안으로 사상 처음으로 1조 달러를 달",
          "body_chars": "1464",
          "link": "https://www.motir.go.kr/kor/article/ATCLe0854704d/172418/view",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "산업부 보도 RSS(POST)",
          "kind": "산업통상부 보도자료",
          "writer": "산업통상부",
          "title": "제품안전으로 지키는 오늘, 안심으로 여는 내일",
          "easy1_title": "제품 안전을 지켜서 미래의 안심을 만들자",
          "easy1_desc": "산업통상부 국가기술표준원이 11월 17일 서울 코엑스에서 제품안전의 날 행사를 열었는데요. 제품 안전을 실천하는 게 결국 미래의 안심으로 이어진다는 메시지를 전하기 위해서예요. 정부와 기업, 그리고 국민이 함께 힘을 합쳐서 안전한 사회를 만들어 가자는 의미가 담겨 있거든요. 쉽게 말하면, 오늘 우리가 안전을 챙겨야 나중에 마음 놓고 살 수 있다는 말이에요.",
          "easy2_title": "안전 관리에 힘쓴 사람들에게 상을 주고 격려했어요",
          "easy2_desc": "이번 행사에서는 제품 안전을 위해 노력한 개인과 단체에게 총 74점의 포상을 수여했는데요. 40년간 전선 산업에서 안전 경영을 실천한 진영전선 홍성규 대표가 동탑산업훈장을 받았고, 코웨이 같은 기업도 통합형 안전 관리 체계를 구축한 공로를 인정받았거든요. 이렇게 유공자를 격려해서 국민들의 안전 의식을 높이겠다는 계획이에요. 상을 받은 사람들의 사례를 공유하면서 안전 문화를 더 넓게 퍼뜨리려는 셈이에요.",
          "topic": "제품안전의 날을 맞아 안전 문화 확산의 중요성을 되새기고 AI 시대의 새로운 안전 관리 방안을 논의했어요.",
          "points": [
            "제품안전의 날 포상: 제품 안전 분야에서 공로가 큰 개인과 단체에게 정부 포상을 포함해 총 74점의 상을 줬는데요. 전선 안전을 강화한 진영전선이나 통합 관리 체계를 만든 코웨이 같은 곳들이 대표적이에요. 이런 포상을 통해 안전을 위해 애쓴 사람들을 격려하고 사회 전반에 안전 문화를 퍼뜨리겠다는 겁니다.",
            "AI 시대의 안전 혁신: 행사와 함께 열린 포럼에서는 AI 기술이 퍼지는 상황에서 어떻게 제품 안전을 관리할지 전문가들이 모여 토론했는데요. AI가 적용된 제품이 늘어나는 만큼 소비자들의 신뢰를 얻기 위한 안전 관리 체계가 무엇보다 중요하다고 봤다는 거예요. 소비자 단체와 기업, 학계가 함께 모여 머리를 맞댄 셈이에요.",
            "촘촘한 관리 체계 구축: 산업통상부 관계자는 환경이 급변하는 만큼 소비자를 보호하기 위해 더 촘촘한 시장 관리 체계를 만들겠다고 밝혔는데요. 제품 안전은 무엇과도 바꿀 수 없는 최우선 가치라는 점을 강조했어요. 앞으로 국민 모두가 안심할 수 있는 환경을 만드는 데 집중하겠다는 계획이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "4336",
          "link": "https://www.motir.go.kr/kor/article/ATCLe0854704d/172416/view",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "미국 연방관보(무역·에너지·원자력 기관)",
          "kind": "미국 연방관보 공고",
          "writer": "미국 연방관보",
          "title": "SMR, LLC; Palisades SMR, LLC; Pioneer Units 1 and 2; Receipt of Construction Permit Application",
          "easy1_title": "미시간주에 소형 원전 2기를 짓겠다는 신청서를 받았습니다",
          "easy1_desc": "홀텍 인터내셔널의 자회사인 팰리세이즈 SMR이 미시간주 팰리세이즈 에너지 센터에 SMR-300 원전 2기를 건설하겠다고 신청했는데요, 이게 뭔 소리냐면 소형 모듈 원자로(SMR)를 새로 짓기 위한 허가 절차를 밟고 있다는 말이에요. 이번에 들어온 건 건설 허가 신청서의 두 번째 단계거든요. 연방원자력규제위원회(NRC)는 이 신청서를 접수했다는 사실을 4주 동안 매주 알리기로 했고, 이번이 그중 두 번째 공고라는 겁니다.",
          "easy2_title": "신청서가 제대로 됐는지 지금 꼼꼼히 살펴보고 있습니다",
          "easy2_desc": "신청서에는 원전의 안전성을 분석한 보고서와 규정 예외 요청 등이 포함되어 있는데요, 연방원자력규제위원회 직원들이 현재 이 서류가 심사 요건을 갖췄는지 확인하는 수용 검토를 진행 중이라는 겁니다. 만약 서류가 통과되면 앞으로 일반 시민들이 이 허가 과정에 어떻게 참여할 수 있는지 등을 담은 공고를 추가로 낼 계획인데요, 지금은 절차에 따라 신청서가 들어왔음을 알리는 단계라고 보시면 됩니다.",
          "topic": "팰리세이즈 SMR이 제출한 소형 모듈 원자로 건설 허가 신청서의 접수 현황과 향후 절차에 대한 안내입니다.",
          "points": [
            "건설 허가 신청의 구성: 이번 신청은 단계별로 나뉘어 진행되는데, 작년 12월 31일에 제출된 1단계는 초기 공사 허가를 요청하는 내용이었거든요. 이번에 들어온 2단계는 원전 건설을 완전히 마무리하기 위한 허가를 구하는 내용으로, 안전 분석 보고서와 규정 예외 요청 등이 포함되어 있다는 말이에요.",
            "공개된 정보 확인 방법: 누구나 관련 문서를 확인할 수 있도록 연방규제 웹사이트나 연방원자력규제위원회의 문서 관리 시스템인 아담스(ADAMS)를 통해 공개하고 있는데요, 아담스에서 문서 번호 ML26273A416을 검색하면 이번 신청서의 2단계 내용을 직접 볼 수 있다는 겁니다.",
            "향후 심사 및 참여 절차: 현재 위원회 직원들이 신청서를 검토하고 있는데, 만약 신청서가 정식으로 접수되면 이후 연방관보를 통해 심사 진행 상황과 시민들이 의견을 낼 수 있는 참여 방법을 알릴 계획이라고 밝혔습니다."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "topic 근거 원문에 없음",
          "body_chars": "5867",
          "link": "https://www.federalregister.gov/documents/2026/11/17/2026-23355/smr-llc-palisades-smr-llc-pioneer-units-1-and-2-receipt-of-construction-permit-application",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "한화투자증권",
          "title": "[한화투자증권] 에스엘 펀더멘털 대비 낙폭 과대, 투자 매력도 증가",
          "easy1_title": "3분기 실적은 아쉽지만 앞으로 회복할 일만 남았어요",
          "easy1_desc": "에스엘이 3분기에 19분기 만에 적자로 돌아섰는데요, 재료비가 오르고 환율 때문에 외환 손실이 커진 탓이에요. 하지만 증권사는 고객사가 신차를 많이 내놓으면서 물량 문제가 해결될 것으로 보고 있어요. 쉽게 말하면, 이번 분기는 일시적으로 어려웠지만 매출은 금방 다시 좋아질 거라는 말이에요.",
          "easy2_title": "전기차 부품이 잘 나가고 배당도 챙겨주니 매력 있어요",
          "easy2_desc": "수익성은 나빠졌지만 전동화 부품 매출은 35.3%나 성장하며 견조한 모습을 보였는데요, 앞으로 제어기를 통합하는 기술이 신차에 들어가면 매출은 더 늘어날 것으로 보여요. 게다가 배당성향을 40%로 유지하겠다는 계획이라 주주들에게는 좋은 소식이에요. 쉽게 말하면, 미래 성장 동력도 확실하고 배당까지 챙겨주는 종목이라는 겁니다.",
          "topic": "증권사는 에스엘의 3분기 실적이 부진했음에도 불구하고 전동화 부품의 성장성과 주주환원 정책을 고려해 투자의견을 유지한다고 밝혔어요.",
          "points": [
            "3분기 실적 부진 원인: 3분기 매출액은 시장 기대치에 맞췄지만 영업이익은 기대보다 훨씬 낮게 나왔는데요, 재료비가 오르고 판매보증비가 30억원 정도 늘어난 게 컸어요. 원화 가치가 오르면서 외화 자산에서 손실이 발생한 것도 적자 전환의 이유라고 증권사는 분석했어요.",
            "전동화 부품의 성장세: 램프 사업은 물량 차질이 있었지만 전동화 부품은 2,210억원의 매출을 내며 전년보다 35.3% 성장했어요. 앞으로 제어기를 하나로 합치는 기술이 신차에 적용되면 매출 구성이 좋아질 것으로 증권사는 전망하고 있어요.",
            "주주환원과 목표주가: 증권사는 목표주가를 69,000원으로 낮췄지만 투자의견은 매수를 유지했는데요, 배당성향을 40% 이상으로 유지하겠다는 방침이 투자 매력을 높인다고 봤어요. 하반기에 주주들에게 돌아갈 이익이 기대되는 종목이라는 거예요."
          ],
          "evidence_ok": "4/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 수익성은 나빠졌지만 전동화 부품 매출은 35.3%나 성장하며 견조한 모습을 보였는데요, 앞으로 제어기를 통합; easy2 근거 원문에 없음; topic 근거 원문에 없음",
          "body_chars": "11749",
          "link": "https://m.stock.naver.com/research/company/98346",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "한화투자증권",
          "title": "[한화투자증권] 로보티즈 분기 적자 전환 아쉬우나 실적 성장 전망은 유효",
          "easy1_title": "이번 분기 적자는 아쉽지만 로보티즈의 성장세는 여전합니다",
          "easy1_desc": "로보티즈가 3분기에 영업이익 적자를 기록하며 시장의 기대보다 낮은 성적을 냈는데요. 이건 원자재 가격이 오르고 핵심 인력을 지키기 위해 성과급을 많이 줬기 때문이라는 거예요. 하지만 이런 비용은 회사가 기술력을 유지하기 위해 꼭 필요한 투자였다고 증권사는 봤습니다. 쉽게 말하면, 당장 이익은 줄었어도 미래를 위한 준비는 잘하고 있다는 뜻이에요.",
          "easy2_title": "2027년에는 생산 능력을 두 배로 키워 실적이 크게 뛸 겁니다",
          "easy2_desc": "증권사는 2027년에 로보티즈의 매출과 이익이 크게 늘어날 것으로 전망했는데요. 국내 생산 시설을 늘리고 우즈베키스탄 공장까지 가동해서 연간 생산량을 100만 개까지 키울 계획이기 때문이에요. 생산량이 늘어나면 고정비 부담이 줄어드는 장점이 있는데, 대신 상반기까지는 원자재 가격 같은 외부 요인이 여전히 변수로 남아있다는 점도 함께 봐야 합니다.",
          "topic": "로보티즈의 3분기 실적 부진에도 불구하고, 생산 능력 확대를 통한 2027년의 본격적인 성장 전망은 유효하다는 분석입니다.",
          "points": [
            "3분기 실적 부진 원인: 로보티즈의 3분기 매출은 추정치에 맞았지만 영업이익은 26억 원 적자를 기록하며 시장 기대치를 크게 밑돌았습니다. 이는 원자재 가격이 상승한 데다 핵심 인력을 확보하려고 성과급을 42억 원이나 지급했기 때문이라고 증권사는 분석했습니다.",
            "2027년 생산 능력 확대: 로보티즈는 2027년에 국내 생산 시설과 우즈베키스탄 공장을 합쳐 연간 100만 개 규모의 액추에이터(로봇 관절 구동 장치) 생산 체제를 갖출 계획입니다. 이를 통해 매출액은 1,125억 원까지 성장하고 영업이익도 147억 원으로 흑자 전환할 것으로 증권사는 내다봤습니다.",
            "투자의견 및 목표주가 유지: 증권사는 로보티즈에 대한 투자의견을 매수(Buy)로 유지하고 목표주가도 35만 원을 그대로 유지했습니다. 생산량이 늘어나면 비용 부담에 대한 민감도가 낮아질 것이며, 업종 내에서 투자 매력도가 충분히 높다고 판단했기 때문입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "10476",
          "link": "https://m.stock.naver.com/research/company/98345",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "한화투자증권",
          "title": "[한화투자증권] 코리안리 부진한 투자손익, 양호한 PAA손익",
          "easy1_title": "코리안리가 3분기에 시장 기대보다 높은 실적을 냈어요",
          "easy1_desc": "코리안리의 3분기 당기순이익은 543억 원으로 시장의 기대치보다 6% 더 높게 나왔는데요. 상반기에는 주식 시장이 좋아 이익이 잘 나왔지만, 3분기에는 주식 평가 손실이 생기면서 투자 쪽 성적은 다소 부진했습니다. 대신 보험 본연의 업무에서 나오는 PAA(보험료배분접근법) 손익은 국내 P&C(재산보험)를 중심으로 좋은 흐름을 보였다는 겁니다.",
          "easy2_title": "시장 위험이 커졌다고 봐서 목표 주가를 낮췄습니다",
          "easy2_desc": "증권사는 코리안리의 목표 주가를 기존보다 8% 내린 17,500원으로 조정했는데요. 이는 회사의 미래 실적 전망이 크게 나빠졌다기보다는, 시장 전체의 위험 프리미엄이 높아진 상황을 반영한 결과라는 거예요. 재보험사는 원래 손익이 들쑥날쑥한 편이라, 앞으로 배당을 얼마나 할지는 지켜봐야 한다는 게 증권사의 분석입니다.",
          "topic": "코리안리의 3분기 실적을 분석하고 시장 위험을 반영해 목표 주가를 조정한 내용이에요.",
          "points": [
            "3분기 실적 요약: 코리안리의 3분기 당기순이익은 543억 원으로 전년 동기 대비 27% 감소했지만 시장 기대치는 넘었습니다. 보험 손익은 보험료 경험 조정 때문에 전년보다 줄었지만, PAA 손익은 국내 P&C 부문이 좋아지면서 21% 늘어난 것으로 보입니다.",
            "투자 손익의 부진: 3분기 투자 손익은 26억 원 적자를 기록했는데요. 상반기에는 시장이 좋아 매매와 평가 이익이 컸지만, 3분기에는 FVPL(당기손익-공정가치 측정 금융자산) 평가 손익이 1,210억 원 악화되면서 투자 성과가 나빠진 셈입니다.",
            "목표 주가 하향 조정: 증권사는 시장 위험 프리미엄이 높아진 점을 고려해 목표 주가를 17,500원으로 낮췄습니다. 2027년과 2028년 실적 추정치는 소폭 하향 조정되었지만, 올해 연간으로는 역대 최대 실적을 낼 것으로 증권사는 추정하고 있습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "9754",
          "link": "https://m.stock.naver.com/research/company/98344",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "DS투자증권",
          "title": "[DS투자증권] 한국카본 현재는 어둡지만 미래는 밝다.",
          "easy1_title": "지금 실적은 좀 아쉽지만 앞으로 나아질 일만 남았어요",
          "easy1_desc": "한국카본의 3분기 실적을 살펴봤더니 매출액 1,975억원과 영업이익 326억원을 기록했는데요, 이는 증권사가 예상했던 것보다 낮은 수치예요. 공정 스케줄이 밀리고 환율이 떨어지면서 원자재 가격까지 오른 탓이거든요. 하지만 2025년 이후 수주한 비싼 물량 덕분에 수익성이 어느 정도 지켜졌고, 이번에 밀린 물량도 4분기부터는 정상적으로 매출에 잡힐 예정이라는 겁니다.",
          "easy2_title": "배 만드는 시장은 여전히 뜨겁고 미국 쪽 일감도 기대돼요",
          "easy2_desc": "핵심 사업인 액화천연가스 운반선(LNGC) 시장은 앞으로도 계속 좋을 것으로 보이는데요, 데이터센터가 늘어나면서 관련 설비 수요가 탄탄하기 때문이에요. 특히 북미 지역의 LNG 터미널 투자 결정이 빨라지면 발주가 더 늘어날 가능성도 있거든요. 여기에 한미 조선 협력 프로젝트(MASGA)가 본격화되면 미국 거점을 이미 확보한 한국카본이 직접적인 혜택을 볼 것으로 증권사는 기대하고 있습니다.",
          "topic": "증권사는 한국카본의 단기 실적 부진에도 불구하고, 액화천연가스 운반선 시장의 구조적 호황과 한미 조선 협력 프로젝트를 통한 수혜를 근거로 미래 성장성을 긍정적으로 평가했습니다.",
          "points": [
            "3분기 실적 부진 요인: 매출이 줄어든 건 고객사의 배 만드는 일정이 뒤로 밀렸고, 환율이 떨어지면서 부정적인 효과가 나타났기 때문이에요. 게다가 미국과 이란의 전쟁이 길어지면서 원자재 가격까지 오른 점이 실적에 영향을 줬거든요. 쉽게 말하면 외부 환경이 좋지 않아 예상보다 성적이 낮게 나온 셈이에요.",
            "LNGC 시장의 중장기 전망: 글로벌 액화천연가스 운반선 시장은 앞으로 4년 동안 매년 90~100척 정도의 발주가 나올 것으로 증권사는 내다봤어요. 중국 조선소들의 2030년 인도분 슬롯이 60% 가까이 찼다는 점을 고려하면, 국내 조선사들로 발주가 몰리면서 배 가격이 오를 가능성이 크다는 겁니다.",
            "목표주가 하향과 향후 기대: 조선 업종 전체의 가치가 낮아진 상황을 반영해서 증권사는 한국카본의 목표주가를 31,000원으로 낮췄는데요, 하지만 수주잔고가 다시 쌓이면 기업 가치가 재평가될 여지는 충분하다고 봤어요. 특히 한미 조선 협력 프로젝트가 본격화되면 미국 현지에 거점을 둔 한국카본이 수혜를 입을 것으로 증권사는 기대하고 있습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 핵심 사업인 액화천연가스 운반선(LNGC) 시장은 앞으로도 계속 좋을 것으로 보이는데요, 데이터센터가 늘어나",
          "body_chars": "9756",
          "link": "https://m.stock.naver.com/research/company/98343",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "DS투자증권",
          "title": "[DS투자증권] 동성화인텍 겨울이라 밤이 길어지는 것 뿐",
          "easy1_title": "지금 실적이 조금 주춤한 건 잠깐 지나가는 과정일 뿐이에요",
          "easy1_desc": "동성화인텍의 3분기 실적을 살펴봤더니, 환율이 떨어지고 원자재 가격이 오르면서 수익성이 예전보다 조금 낮아졌거든요. 그런데도 2024년 이후에 계약한 비싼 물량들이 매출에서 차지하는 비중이 늘어나면서, 수익이 깎이는 걸 어느 정도 막아냈다는 말이에요. 쉽게 말하면, 나쁜 환경 속에서도 나름대로 잘 버텨냈다는 겁니다.",
          "easy2_title": "앞으로 배 만들 일은 많으니 수주잔고도 다시 늘어날 거예요",
          "easy2_desc": "증권사는 앞으로 LNG 운반선 시장이 계속 좋을 것으로 봤는데요, 북미 쪽에서 LNG 프로젝트가 많아지면서 배를 새로 만들 수요가 꾸준히 이어질 거라는 전망이에요. 특히 삼성중공업이 만드는 FLNG(부유식 액화천연가스 생산설비)는 보냉재가 훨씬 많이 들어가는 고부가 물량이라, 이쪽 수주가 늘어나면 동성화인텍의 일감도 자연스럽게 늘어날 거라는 겁니다.",
          "topic": "증권사는 동성화인텍이 전방 산업의 호황에 힘입어 수주잔고를 회복할 것으로 보고 투자의견 매수를 유지했어요.",
          "points": [
            "3분기 실적 평가: 동성화인텍의 3분기 매출액은 2,055억원, 영업이익은 243억원을 기록했는데요, 이는 증권사가 예상했던 영업이익 수치보다는 조금 낮은 결과예요. 환율과 원자재 가격이라는 외부 요인이 수익성을 누르는 단점도 있었지만, 고단가 물량 비중이 늘어난 덕분에 실적 방어에는 성공했다고 봤어요.",
            "FLNG 시장의 성장: FLNG는 기존 LNG 운반선보다 보냉재가 1.5배에서 2배 정도 더 많이 들어가는 고부가 제품인데요, 삼성중공업의 수주 파이프라인에 맞춰 동성화인텍의 보냉재 수주 물량도 앞으로 크게 늘어날 것으로 증권사는 전망했어요. 선체 규모가 큰 만큼 보냉재 수요가 가파르게 확대될 거라는 말이에요.",
            "목표주가 하향 조정: 증권사는 조선 업종 전체의 밸류에이션(기업 가치 평가)이 낮아진 상황을 반영해서 동성화인텍의 목표주가를 26,000원으로 낮췄어요. 하지만 LNGC 시장의 호황이 계속될 것으로 보이기 때문에, 신규 수주가 늘어나고 멀티플(기업 가치 배수)이 다시 평가받을 여지는 충분하다고 판단했다는 거예요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "9738",
          "link": "https://m.stock.naver.com/research/company/98342",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "교보증권",
          "title": "[교보증권] BGF리테일 NDR 후기: 수익성 개선 요인의 백화요란",
          "easy1_title": "외국인 손님들이 늘어나면서 수익성도 좋아지고 있어요",
          "easy1_desc": "BGF리테일의 3분기 외국인 매출 성장률이 66.8%를 기록했는데요, 특히 수도권뿐만 아니라 부산 같은 비수도권 지역에서도 매출이 133.3%나 늘어났거든요. 외국인 고객은 담배보다 일반 상품을 더 많이 사는 경향이 있어서, 결과적으로 회사의 상품 구성이 좋아지고 이익률도 올라가는 효과가 나타난다는 겁니다. 쉽게 말하면, 외국인 관광객이 늘어난 덕분에 회사가 더 남는 장사를 하게 된 셈이에요.",
          "easy2_title": "옛날에 투자했던 비용 부담이 줄어들면서 이익이 늘어날 거예요",
          "easy2_desc": "과거에 점포를 많이 늘리면서 투자했던 유형자산들의 감가상각비(자산 가치가 줄어드는 비용) 만료 시점이 다가오고 있는데요, 덕분에 전체적인 비용 부담이 계속 줄어들고 있다는 겁니다. 2027년부터는 이런 비용 감소 효과가 본격적으로 나타나면서 영업레버리지(매출이 늘 때 이익이 더 크게 늘어나는 효과)가 더 커질 것으로 증권사는 봤거든요. 비용은 줄고 이익은 늘어나는 구조가 만들어지고 있다는 말이에요.",
          "topic": "BGF리테일은 상품 구성 개선과 비용 절감을 통해 중장기적인 수익성 향상을 기대하고 있다는 내용이에요.",
          "points": [
            "외국인 매출 확대와 상품 믹스 개선: 외국인 관광객이 늘면서 담배보다 마진이 높은 일반 상품 매출 비중이 커지고 있는데요, 3분기 가공식품 매출 비중은 45.9%로 늘어난 반면 담배 매출 비중은 35.9%로 줄어들었거든요. 이런 상품 구성의 변화가 매출총이익률을 높이는 데 긍정적인 역할을 하고 있다는 겁니다.",
            "감가상각비 감소와 수익성 강화: 부산 물류센터를 새로 가동했음에도 불구하고 전체 감가상각비는 오히려 줄어드는 추세인데요, 과거 대규모 출점 때 투자했던 자산들의 감가상각 기간이 끝나가고 있기 때문이에요. 증권사는 이런 비용 절감 흐름이 2027년부터 본격화되면서 영업이익을 더 끌어올릴 것으로 봤습니다.",
            "점포 전략과 향후 성장 전망: 회사는 기존의 점포 순증 기조를 유지하면서도, 단순히 숫자만 늘리는 게 아니라 수익성이 높은 중대형 점포 위주로 출점하겠다는 계획인데요. 또한 뷰티나 건강기능식품 같은 상품 구색을 늘려 다양한 고객층을 끌어들이겠다는 전략이에요. 증권사는 이런 노력들을 바탕으로 투자의견 BUY와 목표주가 180,000원을 유지했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "8831",
          "link": "https://m.stock.naver.com/research/company/98341",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권] 셀트리온 혼란한 시장 속에 듬직한 회사",
          "easy1_title": "셀트리온이 미국 시장에서 신제품을 앞세워 매출을 늘리고 있어요",
          "easy1_desc": "셀트리온은 2026년 3분기까지 매출 1조 5,755억 원을 기록하며 성장세를 이어가고 있는데요. 특히 미국에서 새로 출시한 5개 제품이 매출을 이끌면서 영업이익률도 좋아지고 있다는 말이에요. 쉽게 말하면, 미국 시장에서 직판 성과가 본격적으로 나타나면서 앞으로도 꾸준한 성장이 기대된다는 겁니다.",
          "easy2_title": "미국 정치 상황이 바이오시밀러 사업에 기회를 주고 있어요",
          "easy2_desc": "미국 중간선거에서 민주당이 주도권을 잡으면서 메디케이드 예산을 늘리거나 의료 복지를 확대하려는 움직임이 커질 것으로 보이거든요. 한정된 예산으로 복지를 늘리려면 가격이 저렴한 바이오시밀러를 쓸 수밖에 없다는 말이에요. 그래서 미국에서 입지를 다지고 있는 셀트리온이 내년에도 시장의 주목을 받을 가능성이 높다는 겁니다.",
          "topic": "하나증권은 셀트리온이 신규 제품의 성과와 미국 정책 변화를 바탕으로 지속적인 성장을 이어갈 것으로 봤습니다.",
          "points": [
            "신규 제품의 매출 기여: 2024년부터 출시한 스테키마, 옴리클로 등 5개 신규 품목이 전체 매출 성장을 이끌고 있는데요. 기존 제품은 성장이 정체된 반면, 신규 제품은 경쟁 강도가 낮아 수익성이 높다는 장점이 있습니다.",
            "미국 시장 직판 체계: 셀트리온은 미국에서 직접 판매하는 구조를 갖추고 PBM사와 계약을 맺으며 상업화 역량을 키워왔는데요. 짐펜트라 같은 제품의 처방량이 늘고 있고, 현지 생산까지 가능해지면 공급 안정성이 더 높아질 것으로 보입니다.",
            "CDMO 사업 본격화: 셀트리온은 미국 브랜치버그 공장을 인수하면서 2026년부터 본격적으로 위탁생산(CDMO) 매출을 올리기 시작했는데요. 2030년까지 송도와 미국 공장을 증설해 생산 능력을 키우겠다는 계획입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 미국 중간선거에서 민주당이 주도권을 잡으면서 메디케이드 예산을 늘리거나 의료 복지를 확대하려는 움직임이 커질; 예측 의심: 짐펜트라 같은 제품의 처방량이 늘고 있고, 현지 생산까지 가능해지면 공급 안정성이 더 높아질 것으로 보입니다; 긴 원문 — 앞 30000자만 읽음(전체 45974자)",
          "body_chars": "45974",
          "link": "https://m.stock.naver.com/research/company/98340",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권] 대한해운 3Q26 Re: 장기 계약 수요가 증가하는 중",
          "easy1_title": "장기 계약을 늘리면서 안정적인 수익을 챙기고 있어요",
          "easy1_desc": "대한해운은 최근 해운 시황이 오르락내리락하면서 불안정해지자, 초장기 계약보다는 3~5년 정도의 장기운송계약을 늘리는 전략을 쓰고 있는데요. 실제로 현대글로비스나 Zhejiang Shipping과 같은 곳들과 새로 계약을 맺으면서 실적을 탄탄하게 다지고 있는 중이에요. 쉽게 말하면, 시황이 좋을 때만 반짝하는 게 아니라 안정적으로 돈을 벌 수 있는 구조를 만들고 있다는 겁니다.",
          "easy2_title": "주가 오를 기회는 주주들에게 돌려주는 돈에 달렸어요",
          "easy2_desc": "증권사는 대한해운이 가진 현금과 안정적인 수익력을 바탕으로 주주환원을 시작한다면 주가가 다시 평가받을 수 있다고 봤는데요. 지금 주가순자산비율(P/B)이 0.2배 수준으로 낮은 편이라, 주주들에게 이익을 나눠주는 정책이 주가를 움직이는 핵심 열쇠가 될 것이라는 판단이에요. 쉽게 말하면, 회사가 돈을 잘 벌고 있는 만큼 주주들에게 얼마나 신경 쓰느냐가 중요하다는 말이에요.",
          "topic": "대한해운의 3분기 실적을 분석하고 앞으로의 사업 방향과 주가 상승 요인을 짚어본 내용이에요.",
          "points": [
            "3분기 실적과 해운 부문 성과: 3분기 매출은 8% 늘었지만 영업이익은 1% 줄어들었는데요. 본업인 해운 부문은 시황이 좋아져서 매출과 이익이 모두 늘었지만, 주택분양 쪽에서 매출과 이익이 줄어든 게 전체 실적에 영향을 줬다는 분석이에요.",
            "장기 계약 중심의 사업 구조: 대한해운은 매출의 70% 이상이 장기운송계약에서 나오기 때문에, 스팟 시황이 좋다고 해서 실적이 갑자기 크게 변하지는 않는 구조예요. 대신 LNG선이나 벌크선 등에서 꾸준히 계약을 이어가며 안정성을 높이고 있다는 겁니다.",
            "2027년 벌크 시황과 투자의견: 증권사는 2027년에도 벌크선 운임이 2026년보다는 낮겠지만 견조하게 유지될 것으로 봤는데요. 이런 상황을 바탕으로 증권사는 대한해운에 대해 투자의견 BUY와 목표주가 2,500원을 그대로 유지한다고 밝혔어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "10024",
          "link": "https://m.stock.naver.com/research/company/98339",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권] 아이에스동서 일회성 비용이 나타난 3분기, 건설 반등 시점 모색",
          "easy1_title": "건설이랑 폐배터리에서 일회성 비용이 나와서 실적이 기대보다 낮았어요",
          "easy1_desc": "아이에스동서의 3분기 실적을 살펴봤더니 시장에서 예상했던 것보다 낮게 나왔거든요. 건설 부문에서는 평가손실이 발생했고, 폐배터리 부문은 메탈 가격과 환율이 떨어지면서 재고자산 평가손실이 반영된 탓이에요. 쉽게 말하면, 일시적인 비용들이 실적의 발목을 잡은 셈이라는 말이에요.",
          "easy2_title": "앞으로 주가가 오를지는 경산 현장 분양률이 얼마나 올라오느냐에 달렸어요",
          "easy2_desc": "증권사는 아이에스동서의 목표주가를 19,000원으로 낮췄는데요, 경산 펜타힐즈 1차의 분양률이 37% 수준에 머물러 있고 2차 분양 일정도 밀릴 것으로 보이기 때문이에요. 결국 주가가 반등하려면 분양률이 올라와야 한다는 건데, 매달 미분양 추이를 확인하면서 매수 시점을 고민할 필요가 있다는 겁니다.",
          "topic": "아이에스동서의 3분기 실적 부진 원인과 향후 주가 반등을 위한 핵심 요인을 분석했어요.",
          "points": [
            "3분기 실적 부진 배경: 건설 부문에서 덕은 현장의 평가손실과 울산 현장의 원가율 인식 문제가 겹쳤고, 폐배터리 부문도 소재 가격 하락으로 손실이 발생했어요. 반면 콘크리트 부문은 정산이익이 반영되면서 좋은 실적을 냈다는 점이 특징이에요.",
            "4분기 실적 전망: 증권사는 4분기 매출액을 2,627억원, 영업이익을 148억원으로 추정했어요. 3분기의 일회성 비용을 제외하고 건설 부문의 매출 인식과 출하량 증가를 반영한 결과라는 거예요.",
            "목표주가 하향과 투자 판단: 경산 펜타힐즈 1차의 낮은 분양률과 2차 분양 일정 지연을 고려해 목표주가를 19,000원으로 낮췄어요. 내년 3월까지 분양률이 얼마나 회복되는지에 따라 향후 매출 추정치가 달라질 수 있다고 봤어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "11710",
          "link": "https://m.stock.naver.com/research/company/98338",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권] 케이엠더블유 호재 늘어나는 국면, 주가 움직일 때가 되었습니다",
          "easy1_title": "케이엠더블유 주가가 움직일 때가 됐다고 봅니다",
          "easy1_desc": "하나증권은 케이엠더블유가 그동안 겪었던 악재들이 3분기 실적 발표를 끝으로 대부분 사라졌다고 분석했는데요. 이제는 앞으로 나올 호재들에 시장의 관심이 쏠릴 시기라는 겁니다. 쉽게 말하면, 주가가 오를 만한 준비가 끝났으니 이제 움직일 때가 됐다는 말이에요.",
          "easy2_title": "미국과 국내의 5G 시장 성장이 기대되는 상황입니다",
          "easy2_desc": "미국 시장은 주파수 문제로 투자가 늦어질 거라는 걱정이 있지만, 과거 사례를 보면 오히려 통신사들의 망 구축이 빨라질 것으로 하나증권은 내다봤는데요. 국내 역시 2027년에 주파수 경매가 열릴 가능성이 커지면서 시장이 커질 것으로 보입니다. 쉽게 말하면, 두 나라 모두 5G 투자가 본격화될 환경이 갖춰지고 있다는 겁니다.",
          "topic": "하나증권은 케이엠더블유에 대해 투자의견 매수를 유지하고 국내 통신장비 업종 내 탑픽(Top Pick)으로 제시했습니다.",
          "points": [
            "미국 시장 투자 지연 우려 해소: 미국 통신사들이 주파수 낙찰을 받으면 수개월 내에 대금을 내야 하고, 사용 기간도 15년으로 제한되어 있습니다. 그래서 하나증권은 2030년 데드라인에 맞춰 통신사들이 조기에 망을 구축하고 상용 서비스를 시작할 것으로 봤습니다.",
            "국내 5G 주파수 추가 할당 가능성: 국내 5G 주파수 폭은 미국이나 중국과 비교하면 절반에도 미치지 못하는 수준입니다. 이런 상황에서 하나증권은 2027년 국내 주파수 경매가 이루어질 가능성이 높으며, 3.7GHz 대역의 300MHz 신규 할당이 필요할 것으로 전망했습니다.",
            "12월 이전 매수 전략 유효: 하나증권은 2026년 12월에 AI 네트워크 정책 발표가 예정되어 있어 주파수 경매 관련 언급이 나올 가능성이 있다고 봤는데요. 시장의 기대감이 아직 낮은 지금이 매수하기에 좋은 시점이라고 평가했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 국내 역시 2027년에 주파수 경매가 열릴 가능성이 커지면서 시장이 커질 것으로 보입니다.",
          "body_chars": "8665",
          "link": "https://m.stock.naver.com/research/company/98337",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "유안타증권",
          "title": "[유안타증권] 대성하이텍 3Q26 영업이익 흑자전환 & 수주잔고 증가 지속",
          "easy1_title": "대성하이텍이 3분기에 드디어 영업이익 흑자로 돌아섰어요",
          "easy1_desc": "대성하이텍의 3분기 실적을 살펴봤더니 매출액이 329.3억 원으로 작년보다 42.6% 늘어났거든요. 영업이익도 0.2억 원을 기록하면서 흑자로 전환했다는 소식이에요. 정밀부품과 스위스턴 자동선반 등 모든 사업부에서 매출이 고르게 성장한 덕분인데, 쉽게 말하면 회사가 돈을 버는 구조로 다시 바뀌었다는 의미예요.",
          "easy2_title": "수주잔고가 계속 늘고 있어서 앞으로가 더 기대되는 상황이에요",
          "easy2_desc": "매출이 늘어난 것과 함께 수주잔고도 3분기 말 기준 793.0억 원으로 2분기보다 개선됐거든요. 이게 왜 중요하냐면, 미리 들어온 주문이 많다는 건 4분기에도 매출이 계속 성장할 가능성이 높다는 뜻이기 때문이에요. 증권사는 이런 흐름이 실적 개선을 이끄는 핵심 동력이 될 것으로 봤다는 거예요.",
          "topic": "대성하이텍의 3분기 실적 개선과 방산, 로봇, 데이터센터 분야에서의 성장 가능성을 분석한 리포트예요.",
          "points": [
            "방산 부문 후속 수주 기대: 루마니아 공장에서 생산이 본격화되고 있고, 기존에 계약했던 해외 방산 업체들의 물량이 2027년에 종료될 예정이거든요. 이런 상황을 고려하면 연말이나 내년 초쯤에 후속 수주가 이어질 것으로 증권사는 기대하고 있어요. 방산은 수주잔고를 늘리고 실적을 개선하는 핵심 축이라는 말이에요.",
            "로봇 시장 진출 가속화: 내년 CES 2027에서 휴머노이드 로봇이 큰 화두가 될 것으로 보이는데, 이에 맞춰 대성하이텍도 로봇핸드에 들어가는 정밀 부품 납품을 추진 중이에요. 테솔로뿐만 아니라 글로벌 기업들과도 협력을 넓히고 있거든요. 이런 로봇 관련 관심이 커지는 게 2027년 기업 가치를 높이는 요인이 될 것으로 증권사는 전망했어요.",
            "데이터센터 냉각장치 부품 공급: 데이터센터 냉각장치에 들어가는 정밀 가공 부품을 납품하고 있는데, 올해 이미 두 차례나 관련 수주를 따냈거든요. 냉각장치에서 누수가 생기면 안 되기 때문에 기술력이 있는 소수 기업만 공급할 수 있다는 장점이 있어요. 그래서 내년에도 꾸준히 수주가 이어질 것으로 증권사는 예상하고 있다는 거예요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 내년 CES 2027에서 휴머노이드 로봇이 큰 화두가 될 것으로 보이는데, 이에 맞춰 대성하이텍도 로봇핸드에",
          "body_chars": "7876",
          "link": "https://m.stock.naver.com/research/company/98336",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "유진투자증권",
          "title": "[유진투자증권] SAMG엔터 올해의 투자들 내년에 하나씩 보여줄게",
          "easy1_title": "올해 투자한 것들 내년부터 하나씩 보여줄게",
          "easy1_desc": "SAMG엔터가 올해 신규 캐릭터 개발이나 사업 확장을 위해 돈을 미리 많이 썼는데요, 그 때문에 이번 3분기 실적은 시장 기대보다 조금 낮게 나왔거든요. 하지만 이건 미래를 위한 투자일 뿐이라 장기적인 성장 방향은 그대로라는 게 증권사 설명이에요. 쉽게 말하면 지금 당장은 비용 때문에 수익성이 아쉽지만, 내년부터는 본격적으로 성과가 나타날 거라는 말이에요.",
          "easy2_title": "해외에서 돈 버는 구조가 점점 좋아지고 있어",
          "easy2_desc": "미국과 중국에서 티니핑 같은 캐릭터 상품 판매가 늘어나고 있는 점이 고무적인데요, 특히 중국에서는 미니소나 산푸 같은 곳과 직납 구조로 계약해서 마진이 훨씬 좋아질 것으로 보입니다. 게다가 메탈카드봇 같은 다른 IP도 러시아를 넘어 대만이나 일본으로 진출을 준비 중이거든요. 쉽게 말하면 해외 매출 비중이 커질수록 수익성도 함께 개선되는 구조로 바뀌고 있다는 겁니다.",
          "topic": "SAMG엔터가 올해 진행한 선제적 투자를 바탕으로 내년부터는 외형 성장과 수익성 개선을 동시에 달성할 것으로 증권사는 전망했습니다.",
          "points": [
            "3분기 실적 부진의 이유: 3분기 매출은 영화 개봉과 해외 매출 확대로 성장했지만, 신규 IP 개발과 사업 확장을 위한 비용이 먼저 나가면서 영업이익은 시장 기대치를 밑돌았는데요. 해외 매출 비중이 높아지면서 원가율이 올라간 점도 수익성에 영향을 줬다고 증권사는 분석했습니다.",
            "목표주가 하향 조정: 증권사는 올해 4분기에도 연구개발 투자가 계속될 것으로 보고 실적 추정치를 낮췄는데요. 이에 따라 목표주가를 기존 35,000원에서 20,000원으로 42.9% 하향 조정했습니다.",
            "글로벌 시장 성과 확대: 미국에서는 2,000여 개 매장에 티니핑 상품이 진출하고, 중국에서는 5,600여 개 매장에서 현지 맞춤형 상품이 판매될 예정인데요. 내년 1분기에는 중국과 일본에서 영화 개봉도 앞두고 있어 글로벌 시장에서의 성과가 기대된다는 게 증권사의 판단입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 미국과 중국에서 티니핑 같은 캐릭터 상품 판매가 늘어나고 있는 점이 고무적인데요, 특히 중국에서는 미니소나 ",
          "body_chars": "9311",
          "link": "https://m.stock.naver.com/research/company/98333",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "유진투자증권",
          "title": "[유진투자증권] 라온시큐어 3Q26 Review: AI 시대, 진정한 보안 솔루션 강자",
          "easy1_title": "라온시큐어가 3분기 영업이익에서 깜짝 실적을 냈어요",
          "easy1_desc": "라온시큐어가 3분기 실적을 발표했는데 매출액은 시장 기대치보다 낮았지만 영업이익은 오히려 60.1%나 웃도는 어닝서프라이즈를 기록했거든요. 매출이 줄어든 건 작년에 종속회사인 인비즈넷 지분을 팔면서 연결 대상에서 빠졌기 때문이에요. 인비즈넷 실적을 빼고 보면 사실상 전년과 비슷한 수준의 매출을 올린 셈이라는 말이에요.",
          "easy2_title": "AI 보안 솔루션과 컨설팅으로 실적 성장을 노리고 있어요",
          "easy2_desc": "증권사는 라온시큐어가 AI 시대에 맞춰 보안 솔루션을 강화하고 있다고 봤는데요. 5대 에이전틱AI 보안 솔루션을 공개하고 양자내성암호 기술을 금융권에 공급하는 등 사업을 넓히고 있거든요. 화이트햇 컨설팅 부문도 7분기 연속 두 자릿수 성장률을 보이며 실적을 이끌고 있다는 점이 긍정적이라고 평가했어요.",
          "topic": "라온시큐어의 3분기 실적을 분석하고 AI 보안 분야에서의 성장 가능성을 살펴본 리포트예요.",
          "points": [
            "3분기 실적 재평가: 매출액은 130억원으로 전년 동기 대비 18.6% 감소했지만 영업이익은 10억원을 기록하며 시장 기대치를 상회했어요. 인비즈넷 지분 매각 효과를 고려하면 매출은 전년 수준을 유지한 것으로 보입니다.",
            "AI 및 양자 보안 사업 확대: 라온시큐어는 5대 에이전틱AI 보안 솔루션을 공개하며 공공과 금융 시장을 공략할 계획이에요. 또한 양자내성암호 솔루션을 금융권에 공급하며 기술력을 입증했고 이를 바탕으로 공공 분야까지 사업을 넓히겠다는 계획입니다.",
            "향후 실적 개선 전망: 증권사는 4분기에 성수기 진입과 함께 매출액과 영업이익이 전년 동기 대비 증가세로 돌아설 것으로 전망했어요. 다양한 비즈니스 모델이 매출 성장에 기여하면서 주가도 상승세로 전환할 수 있을 것으로 기대하고 있다는 겁니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 다양한 비즈니스 모델이 매출 성장에 기여하면서 주가도 상승세로 전환할 수 있을 것으로 기대하고 있다는 겁니다",
          "body_chars": "17231",
          "link": "https://m.stock.naver.com/research/company/98332",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "유진투자증권",
          "title": "[유진투자증권] 액트로 3Q26 Review: 신사업 전장부품 공급 본격화 기대",
          "easy1_title": "기존 사업은 주춤하지만 새로운 전장부품 사업이 시작됐어요",
          "easy1_desc": "액트로의 3분기 실적을 살펴봤더니 매출과 영업이익이 작년보다 줄어든 모습인데요. 주력인 액추에이터 매출이 감소한 데다 자동화 장비 매출까지 줄어든 탓이에요. 다만 3분기부터 전장부품인 TOP Housing Assy 공급이 시작된 건 긍정적인 신호로 보입니다. 쉽게 말하면, 기존 사업은 부진하지만 신사업이 이제 막 첫발을 뗐다는 말이에요.",
          "easy2_title": "4분기부터는 신사업 효과로 실적이 크게 좋아질 것으로 보여요",
          "easy2_desc": "증권사는 4분기부터 전장부품 공급이 본격화되면서 실적이 크게 성장할 것으로 추정했는데요. 영업이익이 작년보다 2,074.2% 늘어날 것으로 보일 만큼 수익성이 좋아질 거라는 이야기예요. 내년에는 로봇부품 사업까지 더해져 매출 성장이 이어질 것으로 봤거든요. 쉽게 말하면, 신사업이 실적 개선을 이끄는 핵심 동력이 될 거라는 겁니다.",
          "topic": "액트로가 기존 액추에이터 중심에서 전장부품과 로봇부품으로 사업 영역을 넓히며 실적 반등을 꾀하고 있다는 내용이에요.",
          "points": [
            "3분기 실적 부진 원인: 매출의 대부분을 차지하는 액추에이터 매출이 작년보다 24.7% 줄어든 게 컸는데요. 반도체 수급 문제와 자동화 장비 매출의 역기저효과까지 겹치면서 전체적인 실적이 감소한 셈이에요.",
            "전장부품 사업의 성장성: 올해 4분기부터 북미 자율주행차 3개 모델에 전장부품을 공급할 계획인데요. 생산 라인을 풀가동하고 내년에는 생산 능력을 2배로 늘릴 예정이라 향후 3년간 연평균 140%의 매출 성장을 기대하고 있다는 겁니다.",
            "로봇 및 검사장비 신사업: 휴머노이드 로봇부품 사업은 내년 1분기에 라인을 구축하고 2분기부터 양산을 시작할 것으로 봤는데요. 여기에 6축 검사장비와 테라헤르츠파 검사장비까지 더해져 신사업 분야의 매출이 커질 것으로 전망했어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 영업이익이 작년보다 2,074.2% 늘어날 것으로 보일 만큼 수익성이 좋아질 거라는 이야기예요.",
          "body_chars": "16297",
          "link": "https://m.stock.naver.com/research/company/98331",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "IBK투자증권",
          "title": "[IBK투자증권] 온코닉테라퓨틱스 R&D 투자 확대에 낮아진 단기 이익 가시성",
          "easy1_title": "신약 개발에 돈을 많이 써서 당장 남는 게 줄었어요",
          "easy1_desc": "온코닉테라퓨틱스가 3분기에 영업손실 43억 원을 기록하며 적자로 돌아섰는데요. 이게 왜 그런지 봤더니, 자큐보 적응증 확대 임상 3상과 신약 후보물질 OCN-501 비임상 연구에 돈을 쏟아부었기 때문이에요. 연구개발비가 전분기보다 60%나 늘어난 101억 원을 기록했거든요. 쉽게 말하면, 미래를 위한 투자가 커지면서 당장의 이익은 줄어든 셈이에요.",
          "easy2_title": "약은 잘 팔리고 있는데 매출로 잡히는 건 좀 늦네요",
          "easy2_desc": "위식도역류질환 치료제인 자큐보의 국내 원외처방액은 288억 원으로 전년 대비 109.6% 늘어날 만큼 잘 나가고 있는데요. 그런데도 매출액은 예상치를 31%나 밑돌았거든요. 제일약품과 동아에스티가 영업과 마케팅을 맡는 구조 때문에 실제 약이 나가는 시점과 매출로 기록되는 시점에 차이가 생기기 때문이에요. 쉽게 말하면, 처방은 잘 되는데 장부상 매출로 들어오는 속도가 따라가지 못하는 상황이라는 겁니다.",
          "topic": "증권사는 온코닉테라퓨틱스의 단기 이익 가시성은 낮아졌지만, 신약 파이프라인의 성과를 주목해야 한다고 봤습니다.",
          "points": [
            "3분기 실적 부진 원인: 3분기 매출액은 170억 원으로 전년 대비 11.4% 줄었고 영업손실은 43억 원을 기록했습니다. 이는 연구개발비가 전분기 대비 60% 증가한 101억 원을 기록한 것이 주요 원인이라고 증권사는 분석했습니다.",
            "4분기 매출 회복 전망: 증권사는 4분기 매출액을 282억 원, 영업이익을 30억 원으로 추정했습니다. 3분기에 벌어졌던 원외처방액과 매출 인식 간의 괴리가 줄어들면서 매출이 회복될 것으로 봤습니다.",
            "신약 파이프라인 가치: 증권사는 목표주가를 15,000원으로 하향 조정했습니다. 하지만 자큐보의 현금창출력을 바탕으로 비만치료제 병용 후보물질인 OCN-501과 항암제 네수파립의 성과가 기대된다고 밝혔습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "9134",
          "link": "https://m.stock.naver.com/research/company/98330",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "신한투자증권",
          "title": "[신한투자증권] 쎄트렉아이 숫자로 설명되는 구간",
          "easy1_title": "원가 부담이 줄어들면서 실적이 다시 좋아지고 있어요",
          "easy1_desc": "올해 상반기에는 충당금 같은 비용이 많이 나가면서 영업적자를 기록했는데요, 3분기에는 매출원가율이 73.4%까지 떨어지면서 원가 구조가 정상화된 것으로 보입니다. 증권사는 이번 3분기 영업이익이 82억원으로 시장 예상치를 39.6% 웃돌았다고 분석했거든요. 일회성으로 반짝하고 끝나는 게 아니라 앞으로도 마진율이 안정적으로 유지될 가능성이 크다고 봤다는 거예요.",
          "easy2_title": "2027년부터는 해외 장비 매출이 본격적으로 늘어날 겁니다",
          "easy2_desc": "지난 2월에 따낸 2,830억원 규모의 해외 위성영상 장비 계약이 2027년부터 본격적으로 실적에 반영될 예정인데요, 공급 기간 9년 중 초기 4년에 매출의 85%가 집중되어 있어서 실적이 크게 뛸 것으로 보입니다. 2027년과 2028년 영업이익을 각각 332억원과 451억원으로 추정하고 있거든요. 쉽게 말하면, 수주한 물량이 매출로 바뀌는 구간에 진입하면서 이익이 가파르게 늘어날 것이라는 계획이에요.",
          "topic": "쎄트렉아이가 원가율을 정상화하고 해외 장비 매출을 바탕으로 본격적인 이익 성장 구간에 진입했다는 분석이에요.",
          "points": [
            "원가율 개선과 실적 회복: 상반기에는 원가 부담으로 영업적자를 냈지만, 3분기에는 원가율이 11.0%p 하락하며 수익성이 좋아졌습니다. 증권사는 이번 실적 개선이 일회성이 아니라 장기적으로 이어질 수 있는 흐름이라고 평가했는데요, 자회사인 SIIS도 누적 영업이익 16억원을 기록하며 힘을 보태고 있습니다.",
            "해외 장비 매출의 본격화: 2,830억원 규모의 해외 장비 계약이 2027년부터 매출로 잡히기 시작하면서 실적 성장을 이끌 것으로 보입니다. 전체 공급 기간 중 초기 4년에 매출의 85%가 집중되는 구조라서, 2028년에 실적이 가장 높게 나올 것으로 증권사는 추정했습니다.",
            "목표주가 유지와 향후 전망: 증권사는 목표주가를 100,000원으로 유지했는데요, 2027년부터 2028년까지 지배순이익이 연평균 82% 증가할 것으로 내다봤기 때문입니다. 다만 연말 감사 과정에서 원가 반영 여부가 변수가 될 수 있고, 4분기 수주잔고는 전분기보다 줄어들 것으로 보이지만 2027년 이후에는 다시 늘어날 것으로 전망했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 지난 2월에 따낸 2,830억원 규모의 해외 위성영상 장비 계약이 2027년부터 본격적으로 실적에 반영될 예; 예측 의심: 2,830억원 규모의 해외 장비 계약이 2027년부터 매출로 잡히기 시작하면서 실적 성장을 이끌 것으로 보입",
          "body_chars": "11844",
          "link": "https://m.stock.naver.com/research/company/98329",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "신한투자증권",
          "title": "[신한투자증권] PS일렉트로닉스 Corp.day 후기: 서버는 증명했고, 본업은 턴",
          "easy1_title": "서버 사업에서 성과를 냈고 본업도 살아나고 있어요",
          "easy1_desc": "PS일렉트로닉스가 AI 서버 분야에서 수주를 따내며 실력을 증명했는데요, 그동안 부진했던 본업인 자동화 장비 쪽도 폴더블폰 관련 수주가 들어오면서 4분기부터는 반등할 것으로 보입니다. 쉽게 말하면, 새로운 먹거리인 서버는 자리를 잡았고 기존 사업은 바닥을 찍고 올라오는 중이라는 말이에요. 증권사는 이런 흐름이 실적 회복으로 이어질 것이라고 봤습니다.",
          "easy2_title": "11월 서버 수주가 실적과 주가에 중요한 열쇠가 될 거예요",
          "easy2_desc": "현재 11월 중으로 AI 서버 추가 수주가 결론 날 예정인데요, 합산 입찰 규모가 최대 6천억원대에 달할 것으로 보입니다. 이 수주가 확정되면 실적 추정치를 높일 수 있는 근거가 되고, 기업 가치를 다시 평가받는 출발점이 될 것이라고 증권사는 분석했습니다. 수주 물량은 27년 초부터 매출에 반영될 예정이라 외형 성장이 더 뚜렷해질 것으로 보입니다.",
          "topic": "PS일렉트로닉스의 AI 서버 수주 성과와 본업의 실적 회복 전망에 대한 분석이에요.",
          "points": [
            "AI 서버 수주와 경쟁력: 국내 대형 고객사들을 대상으로 납품 실적을 쌓아왔고, 11월에 진행 중인 입찰에서도 영업이익률 10% 이상이 확보되는 물량을 선별해 수주하겠다는 계획입니다. 특히 부품 재고를 미리 확보하고 고객이 원하는 신규 장비를 빠르게 테스트해 주는 대응 능력이 다른 업체들과 차별화되는 강점이라고 봤습니다.",
            "본업인 자동화 장비의 반등: 3분기에는 휴대폰 설비 투자 공백으로 매출이 잠시 주춤했는데요, 폴더블폰 관련 장비 수주가 이어지면서 4분기에는 다시 실적이 좋아질 것으로 보입니다. 27년에는 반도체 후공정이나 메인터넌스(유지보수) 쪽으로 사업 영역을 더 넓혀갈 계획이라고 밝혔습니다.",
            "전장 사업의 성장과 확장: 전장(자동차 전기장치) 부문은 3,300억원의 수주 잔고를 확보해 둔 상태인데요, 27년 1월에는 인도 공장에서 생산을 시작하고 5월에는 미국 조지아 공장도 가동할 예정입니다. 마진이 낮은 휴대폰 관련 제조 비중은 줄이고, 전장 중심으로 이익 구조를 바꾸겠다는 계획입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: PS일렉트로닉스가 AI 서버 분야에서 수주를 따내며 실력을 증명했는데요, 그동안 부진했던 본업인 자동화 장비; 예측 의심: 현재 11월 중으로 AI 서버 추가 수주가 결론 날 예정인데요, 합산 입찰 규모가 최대 6천억원대에 달할 것; 예측 의심: 수주 물량은 27년 초부터 매출에 반영될 예정이라 외형 성장이 더 뚜렷해질 것으로 보입니다.; 예측 의심: 3분기에는 휴대폰 설비 투자 공백으로 매출이 잠시 주춤했는데요, 폴더블폰 관련 장비 수주가 이어지면서 4분기",
          "body_chars": "10943",
          "link": "https://m.stock.naver.com/research/company/98328",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "DS투자증권",
          "title": "[DS투자증권]  [Isomorphic Labs] Series C에서 $5bn 자금조달",
          "easy1_title": "구글 자회사 아이소모픽 랩스가 50억 달러를 또 투자받았어요",
          "easy1_desc": "아이소모픽 랩스가 이번에 50억 달러라는 엄청난 규모의 자금을 조달하는 데 성공했는데요, 올해 5월에 21억 달러를 받은 지 겨우 6개월 만에 다시 대규모 투자를 유치한 겁니다. 이번에 모은 돈은 인공지능(AI) 신약 후보물질을 직접 임상시험에 올리고, 이를 위한 연구 시설과 플랫폼을 만드는 데 쓰겠다고 밝혔거든요. 쉽게 말하면, 이제 단순히 기술만 파는 게 아니라 직접 약을 개발하는 제약사로 본격적으로 몸집을 키우겠다는 뜻이에요.",
          "easy2_title": "아직 임상도 안 했는데 기업 가치가 500억 달러나 된대요",
          "easy2_desc": "현재 이 회사의 기업 가치는 약 500억 달러로 평가받고 있는데, 아직 임상시험을 시작하지 않은 전임상 단계의 기업으로서는 매우 이례적인 숫자라고 증권사는 봤어요. 시장에서는 아이소모픽 랩스가 가진 기술이 단순히 약 하나를 만드는 게 아니라, 수많은 후보물질을 빠르게 뽑아낼 수 있는 범용적인 능력이 있다고 기대하는 셈이거든요. 다만 아직 구체적인 효능 데이터는 공개되지 않았다는 점도 함께 참고해야 합니다.",
          "topic": "아이소모픽 랩스가 대규모 자금 조달을 통해 단순한 AI 기술 기업을 넘어 자체적인 신약 개발 역량을 갖춘 제약사로 확장하고 있다는 내용이에요.",
          "points": [
            "대규모 자금 조달과 임상 진입: 이번에 조달한 50억 달러는 AI 중심의 중개 연구와 임상개발 인프라를 구축하고, 자체 AI 플랫폼인 IsoDDE를 고도화하는 데 쓰일 예정이라고 밝혔어요. 증권사는 이를 통해 아이소모픽 랩스가 올해 말 임상시험에 진입할 것이라는 기존 계획이 현실화될 것으로 전망했거든요.",
            "전임상 단계의 높은 기업 가치: 기업 가치가 500억 달러에 달하는 이유는 시장이 이 회사의 기술이 가진 확장성을 높게 평가하기 때문이라고 증권사는 분석했어요. 실제로 종양학이나 자가면역 분야에서 자체 개발 프로그램뿐만 아니라 일라이 릴리, 노바티스 같은 대형 제약사와의 파트너십에서도 긍정적인 결과를 확인했다고 발표했거든요.",
            "글로벌 임상 허브 구축: 아이소모픽 랩스는 단순히 AI 엔진만 제공하는 게 아니라 질병 생물학 모델부터 임상개발 인프라까지 직접 갖추겠다는 계획이에요. 런던은 AI 모델 개발을 맡고, 미국 케임브리지에는 임상 설계와 규제 대응을 담당하는 허브를 세워 직접 신약을 개발하는 제약사로 나아가겠다는 전략으로 보입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "500",
          "check_flags": "",
          "body_chars": "4849",
          "link": "https://m.stock.naver.com/research/industry/47069",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "교보증권",
          "title": "[교보증권]  3Q26 국내 태양광 설치 동향",
          "easy1_title": "올해 3분기 태양광 설치량이 6년 만에 가장 많았어요",
          "easy1_desc": "올해 3분기 국내 태양광 발전설비가 1.30GW 늘어나면서 2020년 2분기 이후 최대치를 기록했거든요. 이게 어느 정도냐면 최근 3년 동안의 3분기 평균 설치량인 0.84~0.90GW를 크게 뛰어넘는 수준이에요. 전년과 비교하면 54.4%나 늘어난 셈인데, 올해 전체 설치 증가분의 73.9%가 3분기에 몰려 있었다고 보면 됩니다.",
          "easy2_title": "호남 대신 충청과 수도권에 태양광이 많이 생기고 있어요",
          "easy2_desc": "원래는 호남 지역에 태양광 설치가 많았는데, 최근에는 전기를 보낼 계통에 여유가 있고 수요처와 가까운 충청이나 수도권으로 설치가 옮겨가는 추세예요. 실제로 충청과 수도권의 비중은 32%에서 47%로 커진 반면, 호남 비중은 27%에서 12%로 줄어들었거든요. 쉽게 말하면 전기를 쓰기 편한 곳 위주로 설치가 늘어나고 있다는 말이에요.",
          "topic": "국내 태양광 설치량이 6년 만에 4GW대를 회복할 것으로 전망됩니다.",
          "points": [
            "3분기 설치량 급증: 3분기 태양광 설치량은 1.30GW로 전년 대비 54.4% 증가하며 6년 만에 분기 최대치를 기록했습니다. 신안 비금과 제주 수망 같은 대형 사업들이 새롭게 반영되면서 설치 규모가 커진 것으로 보입니다.",
            "수요지 중심의 설치 확대: 호남 지역의 계통 접속이 어려워지면서 상대적으로 여유가 있는 충청과 수도권으로 설치가 집중되고 있습니다. 특히 경기도는 85%가 1MW 이하의 소규모 설비로 구성되어 있어 수요지 근처에 설치하는 흐름이 뚜렷합니다.",
            "연간 전망과 향후 과제: 증권사는 올해 연간 설치량이 4.2GW에 달할 것으로 추정했습니다. 2027년부터는 호남 지역의 계통관리변전소 지정이 해제되고 신규 사업 접수가 재개되면서, 이곳의 대기 물량이 얼마나 빠르게 연결되는지가 중요하다고 봤습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 국내 태양광 설치량이 6년 만에 4GW대를 회복할 것으로 전망됩니다.",
          "body_chars": "3511",
          "link": "https://m.stock.naver.com/research/industry/47068",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "교보증권",
          "title": "[교보증권]  2026년 11월 셋째 주 전기전자 Weekly",
          "easy1_title": "AI 수요에 대한 의구심이 커지면서 시장 분위기가 가라앉았어요",
          "easy1_desc": "젠슨 황의 퇴진 소식 이후 인공지능(AI) 수요를 뒷받침하던 구조가 흔들릴 수 있다는 불안감이 시장에 퍼졌거든요. 관련 전망치까지 조정되면서 투자 심리가 전반적으로 위축된 상황이에요. 쉽게 말하면, AI가 이끌던 성장세에 물음표가 붙으면서 시장이 신중해진 셈이에요.",
          "easy2_title": "앞으로는 기술 스펙에 따른 가격 협상력이 핵심이 될 거예요",
          "easy2_desc": "수요가 불확실한 상황에서는 결국 실적을 결정짓는 팩터인 가격이 중요해질 것으로 증권사는 봤는데요. AI 기술이 요구하는 복잡한 스펙 변화를 잘 맞춰주면서 가격 협상력을 얼마나 확보하느냐가 관건이라는 거예요. 결국 기술력으로 가격을 방어하는 기업이 호실적을 이어갈 수 있다는 말이에요.",
          "topic": "전기전자 섹터는 AI 수요에 대한 우려로 주가가 하락세지만, 기술 스펙에 따른 가격 협상력이 실적의 핵심이 될 것으로 증권사는 분석했어요.",
          "points": [
            "AI 수요 기반의 불확실성: 젠슨 황의 퇴진 소식으로 AI 산업의 성장 기반에 대한 의구심이 생기면서 시장의 전망치 조정이 현실화되고 있는데요. 이로 인해 부정적인 투자 심리가 강화되면서 글로벌 전기전자 기업들의 주가도 전반적으로 하락하는 모습이에요.",
            "기판 중소형주의 상대적 강세: 전반적인 섹터 주가는 하락세지만, 메모리 기판의 단가가 추가로 인상된다는 소식에 힘입어 관련 노출도가 높은 국내 기판 중소형주들은 오히려 강세를 보였거든요. 시장이 수요 불확실성 속에서도 가이던스(기업이 발표하는 예상 실적)를 상향하는 등 견조한 전망을 내놓는 기업에는 여전히 강하게 반응하고 있다는 겁니다.",
            "가격 협상력의 중요성: 증권사는 앞으로 AI 기술이 요구하는 스펙 변화에 대응하는 가격 협상력이 실적을 가를 핵심 요소가 될 것으로 봤는데요. 수요가 불확실한 구간일수록 기술적 우위를 바탕으로 가격을 지켜내는 기업이 호실적 분위기를 주도할 것이라는 분석이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "6649",
          "link": "https://m.stock.naver.com/research/industry/47067",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권]  9월 ESS Battery : 북미 누적 +19% 성장",
          "easy1_title": "북미 시장을 중심으로 ESS 배터리 설치가 꾸준히 늘고 있어요",
          "easy1_desc": "9월 글로벌 에너지저장시스템(ESS) 신규 설치량은 전년 대비 80% 늘어난 32.9GWh를 기록했는데요. 2026년 1월부터 9월까지 누적 설치량도 279.3GWh로 전년 같은 기간보다 47% 성장했습니다. 특히 북미 시장은 누적 성장률 19%를 기록하며 안정적인 흐름을 보이고 있다는 말이에요. 쉽게 말하면, 전 세계적으로 ESS 설치가 활발하게 이어지고 있다는 뜻입니다.",
          "easy2_title": "자본이 몰리고 장기 계약이 늘어나는 북미 시장이 주목받고 있어요",
          "easy2_desc": "최근 북미에서는 노르웨이 국부펀드가 ESS 개발 기업의 지분을 인수하는 등 대규모 자본 유입이 시작됐는데요. 삼성SDI와 같은 국내 기업들도 미국 현지 개발사와 대규모 공급 계약을 맺으며 장기적인 물량을 확보하고 있습니다. 이런 움직임은 북미 시장의 수요가 앞으로도 탄탄할 것이라는 신호로 해석된다는 거예요. 쉽게 말하면, 돈과 일감이 동시에 모이고 있다는 말이에요.",
          "topic": "글로벌 ESS 시장의 성장세와 북미 지역을 중심으로 한 국내 배터리 기업의 수주 확대 전망에 대한 분석이에요.",
          "points": [
            "글로벌 ESS 시장의 고성장: 9월 글로벌 ESS 신규 설치량은 32.9GWh로 전년 대비 80%나 증가했는데요. 전력망(Grid) 시장이 전체의 75%를 차지하며 성장을 이끌고 있습니다. 누적 기준으로도 47%의 높은 성장률을 유지하고 있다는 거예요.",
            "북미 시장의 안정적 확대: 북미 지역은 9월 한 달간 5GWh의 ESS가 신규 설치되며 누적 성장률 19%를 기록했습니다. 월간 설치량은 다소 변동이 있지만, 전체적인 누적 흐름은 긍정적이라고 증권사는 봤습니다.",
            "국내 기업의 수주 기회: 북미 시장에서 비중국산 배터리에 대한 수요가 높아지면서 국내 셀 메이커들의 입지가 커지고 있는데요. 현지 생산 거점을 갖춘 기업들이 장기 공급 계약을 잇달아 체결하며 수주가 늘어날 것으로 증권사는 추정했습니다."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "easy1 근거 원문에 없음",
          "body_chars": "9044",
          "link": "https://m.stock.naver.com/research/industry/47066",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "한화투자증권",
          "title": "[한화투자증권]  [ESG] 상장폐지보다 상장 유지가 절세, 저PBR 옥석은 환원 이행",
          "easy1_title": "상장폐지보다 상장 유지가 세금 아끼는 길이에요",
          "easy1_desc": "저PBR(주가순자산비율이 낮은) 기업의 최대주주가 주가를 낮춰 상속세를 줄이려고 상장폐지를 고민할 수도 있는데요. 하지만 상장주식과 달리 상장폐지 후에는 순자산가치의 80%가 평가 하한이 되거든요. 분석해 봤더니 148개사 모두 이 하한이 현재 주가보다 높아서, 오히려 상장폐지가 세금 부담을 키우는 셈이에요. 쉽게 말하면 낮은 주가의 세금 이점은 상장을 유지할 때만 누릴 수 있다는 겁니다.",
          "easy2_title": "공개매수 기대보다 실제 배당과 소각을 확인하세요",
          "easy2_desc": "저PBR 명단에 들었다는 이유만으로 미리 주식을 사들이는 건 전략적으로 좋지 않다고 증권사는 봤는데요. 공개매수 가격이 장부가보다 낮은 경우도 많고, 발표 후 주가 상승분은 이미 발표 전 보유자에게 돌아갔거든요. 대신 2027년 2~3월에 기업들이 실제로 소각이나 배당을 결의하는지 확인하는 게 중요해요. 쉽게 말하면 계획 공시보다 실제 이행 성과를 보고 거래대금이 많은 회사를 담는 게 낫다는 말이에요.",
          "topic": "저PBR 기업의 주주환원 이행 여부가 투자와 세금 평가의 핵심 기준이 될 것으로 증권사는 전망했어요.",
          "points": [
            "상장 유지의 세금 이점: 상장주식은 주가가 낮을수록 상속세 평가액이 낮아지는 이점이 있지만, 상장폐지 후에는 비상장 평가 방식을 적용받게 돼요. 148개사를 분석해 봤더니 비상장 평가 하한이 현재 주가보다 낮게 나오는 곳은 없었거든요. 증권사는 낮은 주가를 이용한 상장폐지가 세금 절감 해법이 되기 어렵다고 봤습니다.",
            "공개매수와 자산가치 반영: 최대주주 측의 공개매수에서 일반주주들은 할증률뿐만 아니라 장부가 대비 가격 수준도 함께 따져봐야 해요. 특히 2026년 12월 9일부터는 주식교환이나 합병 시 자산가치를 반영한 공정한 가액을 산정해야 하거든요. 증권사는 앞으로 자회사 편입 시 낮은 시가만으로 교환 가액을 정하기 어려워질 것으로 봤습니다.",
            "옥석 가리기 전략: 명단 전체를 무작정 사기보다는 2027년 2~3월에 소각과 배당 결의를 실제로 이행하는지 확인하는 과정이 필요해요. 증권사는 거래대금이 많은 상위 회사 위주로 비중을 늘리는 전략을 제시했는데요. 계획 기한이 지나도 결의하지 않는 회사는 투자 대상에서 제외해야 한다고 조언했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "10545",
          "link": "https://m.stock.naver.com/research/industry/47065",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "한화투자증권",
          "title": "[한화투자증권]  [ESG] 의무 보유 지분율 규제: 한쪽에선 조이고 한쪽에선 풀고",
          "easy1_title": "지주회사 체제 안에서 상장할 때 지분율 기준을 높이려고 합니다",
          "easy1_desc": "공정거래위원회는 상장 지주회사의 자회사나 손자회사가 새로 상장할 때 모회사가 가져야 할 지분율을 기존 30%에서 50%로 높이겠다고 밝혔는데요. 이는 대주주가 적은 지분으로도 기업을 마음대로 휘두르는 일을 막고, 복잡한 출자 구조를 투명하게 만들려는 목적이에요. 쉽게 말하면, 상장사라는 이유로 봐주던 특례를 없애서 일반 주주들의 권익을 보호하겠다는 겁니다.",
          "easy2_title": "특정 첨단 산업 분야는 오히려 지분율 규제를 풀어주려 합니다",
          "easy2_desc": "반면 국가첨단전략산업법 개정안 등에서는 반도체 같은 첨단 기술 기업이 공동출자법인을 만들 때, 손자회사가 증손회사 지분을 100% 다 가지지 않고 50%만 가져도 되게끔 규제를 완화하려는 움직임이 있어요. 이는 대규모 투자를 끌어내기 위한 조치인데요. 다만 한쪽에서는 규제를 강화하고 다른 쪽에서는 완화하는 상황이라 정책이 일관되지 않다는 지적도 나오고 있다는 겁니다.",
          "topic": "지주회사 체제 내 의무 보유 지분율을 두고 규제 강화와 완화라는 상반된 입법이 동시에 추진되고 있습니다.",
          "points": [
            "상장 시 지분율 기준 상향: 공정거래위원회는 지주회사 체제 내에서 자회사나 손자회사가 신규 상장할 때 모회사의 의무 지분율을 50%로 높여 중복상장 유인을 줄이겠다고 봤습니다. 이는 총수 일가의 편법적인 지배력 확장을 억제하고 투명한 지배구조를 만들기 위한 계획이에요.",
            "첨단 산업 분야 규제 완화: 국가첨단전략산업법 개정안과 초광역특구법 제정안은 반도체 등 국가첨단전략기술을 가진 기업이 공동출자법인을 세울 때, 손자회사가 증손회사 지분을 50% 이상만 보유해도 되도록 특례를 두겠다고 밝혔습니다. 이는 대규모 투자를 활성화하기 위해 지분율 요건을 낮춰주려는 취지예요.",
            "정책 일관성에 대한 의문: 증권사는 같은 해에 의무 보유 지분율을 두고 서로 다른 방향의 입법이 추진되는 것이 정책의 일관성 측면에서 의문이라고 봤습니다. 특히 대주주의 과도한 지배력이 코리아 디스카운트의 원인 중 하나인 만큼, 규제를 낮추는 방향은 바람직하지 않다고 지적했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "13038",
          "link": "https://m.stock.naver.com/research/industry/47064",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "유안타증권",
          "title": "[유안타증권]  디지털 자산 Daily",
          "easy1_title": "비트코인이 호재에도 힘을 못 쓰는 건 수급 문제 때문이에요",
          "easy1_desc": "엔비디아가 좋은 실적을 발표하고 자사주 매입까지 알리면서 시장 분위기가 좋아질 줄 알았는데요, 정작 비트코인은 6만 5천 달러를 넘지 못하고 오히려 약세를 보였거든요. 이건 인공지능에 대한 투자 심리가 나빠서가 아니라, 비트코인 자체의 수급과 레버리지(빚을 내서 투자하는 것) 문제 때문이라는 말이에요. 쉽게 말하면, 시장 내부의 꼬인 실타래가 아직 풀리지 않았다는 겁니다.",
          "easy2_title": "금리 인상 사이클이 계속되는 한 방향을 잡기는 어려워 보여요",
          "easy2_desc": "증권사는 ETF 유출이 멈추고 금리 인상 확률이 조금 낮아진 점은 매도 압력이 정점을 지났다는 신호일 수도 있다고 봤는데요, 반대로 장기 보유자들이 다시 팔기 시작하고 거래소로 물량이 들어오는 건 여전히 부담스러운 상황이에요. 긍정적인 요인과 매도 압력이 섞여 있어서 방향을 잡기가 어렵다는 건데요, 금리 인상이 계속되는 동안에는 추세를 바꿀 힘이 부족할 것으로 증권사는 판단했어요.",
          "topic": "증권사는 현재 비트코인 시장이 내부 수급 불안과 금리 인상 부담으로 인해 단기적으로는 약세 흐름을 보일 것으로 분석했어요.",
          "points": [
            "레버리지 과열 해소: 선물 시장에서 현물과 가격 차이가 거의 사라졌고, 미결제약정(아직 청산되지 않은 계약)과 강제 청산 규모가 줄어들면서 그동안 쌓였던 과도한 레버리지가 상당 부분 해소됐다고 증권사는 봤어요. 하락장에서 롱 포지션(상승에 베팅)이 대거 정리된 영향이 크다는 거예요.",
            "장기 보유자의 매도: 현물 ETF로 자금이 다시 들어오면서 순유출이 끝난 건 다행이지만, 장기 보유자들이 다시 물량을 팔기 시작하면서 시장에 매도 압력을 더하고 있어요. 거래소로 코인이 계속 들어오는 흐름이 개선되려던 시장 분위기를 다시 누르고 있다는 말이에요.",
            "금리 인상과 변동성: 미국 10년물 국채 금리가 5.12%를 기록하는 등 긴축 부담이 여전한 상황이에요. 증권사는 엔비디아 실적 발표를 앞두고 헤지(위험 회피) 수요가 몰리면서 변동성 지수가 25.5까지 급등했다고 설명했어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "7391",
          "link": "https://m.stock.naver.com/research/industry/47063",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "대신증권",
          "title": "[대신증권]  PCB : 소캠2 = 이익 상향 2027년 주인공!",
          "easy1_title": "소캠2 모듈 만드는 회사들 실적이 내년에 최고치를 찍을 거예요",
          "easy1_desc": "소캠2 모듈을 공급하는 심텍, 코리아써키트, 티엘비 세 곳의 실적을 살펴봤는데요. 2026년 4분기 영업이익이 작년보다 251% 늘어날 것으로 보이고, 2027년에는 매출과 영업이익 모두 역대 최고 실적을 갈아치울 것으로 증권사는 전망했어요. 쉽게 말하면, AI 반도체 시장이 커지면서 이들 기업의 이익도 가파르게 늘어날 거라는 말이에요.",
          "easy2_title": "엔비디아를 넘어 AMD와 퀄컴까지 고객사가 늘어날 수 있어요",
          "easy2_desc": "소캠2 모듈은 엔비디아의 차세대 AI 반도체인 베라루빈에 처음 들어간 서버용 메모리 부품인데요. 앞으로 AMD와 퀄컴도 자체 AI 반도체에 이 모듈을 채택할 가능성이 커지고 있다고 해요. 이렇게 되면 소캠2 생태계가 더 넓어지면서 공급사들의 매출 증가세가 더 뚜렷해질 것으로 증권사는 보고 있습니다.",
          "topic": "AI 반도체 시장의 성장으로 소캠2 모듈 공급업체들의 실적이 2027년까지 크게 성장할 것으로 증권사는 추정했어요.",
          "points": [
            "소캠2 모듈 공급사 실적 호조: 심텍, 코리아써키트, 티엘비 세 기업의 2026년 3분기 영업이익은 1,394억 원으로 작년보다 319% 증가하며 시장 기대치를 크게 웃돌았는데요. 4분기에도 영업이익이 1,668억 원으로 추정되어 다른 PCB 업체들보다 높은 성장세를 보일 것으로 증권사는 내다봤습니다.",
            "생산 능력 확대와 수혜: 이들 3사는 2026년에 메모리 모듈 생산 능력을 늘려 공정의 병목 현상을 해소했는데요. 이를 통해 2027년에는 매출 4.3조 원, 영업이익 6,648억 원을 달성하며 호조가 이어질 것으로 증권사는 추정했습니다.",
            "기업별 성장 전략: 심텍은 LPDDR5용 패키지 생산을 통한 믹스 효과를, 코리아써키트는 메모리 모듈 생산 능력 45% 확대와 고부가 제품 비중 확대를, 티엘비는 서버용 메모리 모듈 중심의 포트폴리오를 통해 각각 최고 실적을 낼 것으로 증권사는 전망했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "24655",
          "link": "https://m.stock.naver.com/research/industry/47062",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "대신증권",
          "title": "[대신증권]  보험주 약세 원인 분석",
          "easy1_title": "보험주가 왜 힘을 못 쓰는지 3가지로 정리해 봤어요",
          "easy1_desc": "3분기 실적 발표 이후 보험주가 계속 떨어지고 있는데요, 그 원인을 3가지로 분석해 봤거든요. 우선 실적이 예상보다 낮은 어닝미스가 있었고, 장기보험에서 이익이 늘어나는 속도가 더딘 데다 주주들에게 얼마나 이익을 돌려줄지 불확실해졌기 때문이에요. 쉽게 말하면, 실적과 주주환원이라는 두 가지 핵심 기대감이 모두 흔들리면서 주가가 7월 수준으로 되돌아간 셈이라는 말이에요.",
          "easy2_title": "보험사들이 실적을 다시 올리려면 무엇이 필요할까요",
          "easy2_desc": "증권사는 보험주가 다시 반등하려면 투자손익이 널뛰는 변동성이 줄어들어야 한다고 봤는데요, 주주환원 정책도 지금보다 더 적극적으로 나서야 한다고 밝혔어요. 장기보험손익은 속도가 느리긴 해도 꾸준히 좋아지고 있거든요. 쉽게 말하면, 불확실한 요소들이 어느 정도 해소되어야 주가도 다시 힘을 받을 수 있다는 겁니다.",
          "topic": "3분기 실적 부진과 주주환원 불확실성으로 인해 약세를 보이는 보험업에 대한 분석이에요.",
          "points": [
            "실적 부진의 원인: 삼성화재와 DB손해보험, 현대해상 3사 모두 3분기 순이익이 시장 예상치를 밑돌았는데요, 특히 현대해상은 어닝쇼크를 기록했어요. 투자손익이 부진한 건 어느 정도 예상했지만, 장기보험손익이 지난 분기보다 크게 줄어든 게 뼈아팠던 겁니다.",
            "손해율 개선의 흐름: 실손보험 청구액이 줄어들면서 위험손해율은 3개 분기 연속으로 떨어지고 있는데요, 3분기 손해보험 3사 평균 위험손해율은 97.7%를 기록했어요. 자동차보험 역시 2개 분기 연속으로 손익이 좋아지고 있는데, 다만 기대했던 것만큼 개선 속도가 빠르지는 않다는 게 단점이에요.",
            "목표주가 하향 조정: 증권사는 보험업에 대한 비중확대 의견은 유지했지만, 메리츠금융지주를 뺀 4개사의 목표주가는 모두 낮췄는데요, 4분기에도 투자손익 변동성이 커질 가능성이 높기 때문이에요. 다만 연말 실적 발표에서 확실한 배당 정책을 내놓는다면 주가가 오를 가능성도 있다고 증권사는 봤어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "20887",
          "link": "https://m.stock.naver.com/research/industry/47061",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "대신증권",
          "title": "[대신증권]  달라진, 달라질 환경",
          "easy1_title": "방산 업체들이 현지에서 직접 만들며 경쟁력을 키우고 있어요",
          "easy1_desc": "국내 방위산업체들이 해외 시장에서 살아남기 위해 현지에 직접 공장을 짓고 생산하는 방식을 택하고 있는데요. 과거처럼 한국에서 만든 무기를 수출하는 것만으로는 가격이나 납기 경쟁력을 유지하기 어려워졌기 때문이에요. 당장은 현지 투자 때문에 현금 흐름이 빠듯할 수 있지만, 2027년부터는 매출이 늘어나면서 다시 회복될 것으로 증권사는 보고 있어요. 쉽게 말하면, 지금은 미래를 위해 돈을 쓰는 시기라는 말이에요.",
          "easy2_title": "미래 전장에서는 위성과 AI를 연결하는 게 핵심이 될 거예요",
          "easy2_desc": "앞으로의 전쟁은 고가의 무기 하나에 의존하기보다 저렴한 무인 체계를 대량으로 운용하는 방식으로 변하고 있는데요. 이를 효과적으로 지휘하려면 우주에 띄운 저궤도 위성으로 전장의 정보를 실시간으로 주고받는 통신망이 필수적이에요. 인공지능(AI)이 방대한 데이터를 분석해 최적의 대응을 찾아내는 기술도 중요해졌고요. 증권사는 이런 변화가 국내 방위산업체들에게 새로운 성장 기회가 될 것으로 전망했어요.",
          "topic": "국내 방위산업체들이 글로벌 시장에서 현지화 전략과 우주·AI 기술을 통해 성장을 이어갈 것으로 증권사는 전망했어요.",
          "points": [
            "현지화 전략의 중요성: 수입국들이 현지 생산을 요구하면서 단순 수출만으로는 시장 진입이 어려워졌는데요. 대신증권은 한화에어로스페이스와 LIG D&A처럼 현지 합작법인(JV)을 통해 생산 체계를 갖춘 기업들이 중장기적으로 주주 가치를 높일 수 있다고 봤어요.",
            "유럽 시장의 기회와 위기: 유럽은 재정난으로 국방 예산 증액에 어려움을 겪고 있지만, 러시아의 위협 때문에 안보 자립은 포기할 수 없는 상황이에요. 증권사는 가격 경쟁력을 갖춘 국내 업체들이 서유럽의 예산 제약과 동유럽의 안보 수요를 파고들어 점유율을 확대할 수 있다고 분석했어요.",
            "우주 기반의 미래 전장: 극초음속 미사일 같은 새로운 위협에 대응하기 위해 저궤도 위성군과 AI 기반의 지휘통제체계가 중요해졌는데요. 증권사는 한국이 초소형 위성 사업 등을 통해 우주 작전 역량을 강화하고 있으며, 이것이 향후 발사체 산업의 성장으로 이어질 것이라고 봤어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "긴 원문 — 앞 30000자만 읽음(전체 76118자)",
          "body_chars": "76118",
          "link": "https://m.stock.naver.com/research/industry/47060",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "유진투자증권",
          "title": "[유진투자증권]  안녕하세요 데일리에요 (로봇/방산/조선)",
          "easy1_title": "로봇과 방산 그리고 조선 분야의 최신 소식을 정리해 드립니다",
          "easy1_desc": "유진투자증권에서 로봇과 방산, 조선 산업의 주요 뉴스를 모아 정리했는데요. 삼성전자가 내년 CES에서 휴머노이드 로봇을 공개한다는 소식부터 방산 업체의 입찰 제한이 풀린 일까지 다양한 이슈가 포함되어 있습니다. 쉽게 말하면, 각 산업별로 어떤 변화가 일어나고 있는지 한눈에 파악할 수 있도록 핵심만 골라 담은 셈이에요.",
          "easy2_title": "기업들의 사업 확장과 법적 불확실성 해소 소식이 눈에 띄네요",
          "easy2_desc": "기업들이 새로운 기술을 도입하거나 사업 영역을 넓히는 움직임이 활발한데요. 특히 LIG D&A는 법원의 결정으로 입찰 참여가 가능해지면서 사업의 불확실성을 덜어냈고, 한화파워는 LNG 운반선을 개조하는 사업에서 성과를 내고 있습니다. 이런 변화들이 각 기업의 사업 경쟁력에 어떤 영향을 줄지 지켜볼 필요가 있다는 겁니다.",
          "topic": "로봇, 방산, 조선 산업의 주요 뉴스 및 기업별 최신 동향을 요약한 리포트입니다.",
          "points": [
            "로봇 산업의 기술 진보: 삼성전자가 CES 2027에서 고성능 모델인 HE와 보급형인 HR로 나누어 휴머노이드 로봇을 공개할 예정입니다. 또한 아틀라스 로봇은 2027년 초부터 반도체 공장에서 현장 테스트를 시작할 계획인데요. 로봇의 활용 범위를 산업 현장까지 넓히려는 시도로 보입니다.",
            "방산 업체의 법적 리스크 완화: 서울행정법원이 LIG D&A의 입찰참가자격 제한 처분에 대한 집행정지 신청을 인용했습니다. 이로써 방사청의 제재 효력이 일시적으로 멈추게 되어 신규 입찰에 정상적으로 참여할 수 있게 되었는데요. 덕분에 관련 사업의 불확실성이 해소되었다고 증권사는 분석했습니다.",
            "조선 및 에너지 인프라 사업 확장: 한화파워가 미국 업체와 손잡고 LNG 운반선을 FSRU(부유식 액화천연가스 저장 재기화 설비)로 개조하는 계약을 체결했습니다. 설계부터 시운전까지 전 과정을 수행하며 관련 사업의 실적을 쌓고 있는데요. 반복적인 수주를 통해 사업 레퍼런스를 확보하고 있다는 점이 핵심입니다."
          ],
          "evidence_ok": "4/6",
          "bad_numbers": "",
          "check_flags": "easy1 근거 원문에 없음; topic 근거 원문에 없음",
          "body_chars": "2127",
          "link": "https://m.stock.naver.com/research/industry/47059",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "IBK투자증권",
          "title": "[IBK투자증권]   [NVIDIA] 27년 3분기 실적 발표",
          "easy1_title": "엔비디아 실적이 시장 기대보다 훨씬 잘 나왔어요",
          "easy1_desc": "엔비디아의 27년 3분기 매출액을 확인해 봤더니 115.8B달러로 작년 같은 기간보다 103%나 늘어났거든요. 이게 시장에서 예상했던 컨센서스인 109.3B달러를 훌쩍 넘긴 수치예요. 주당순이익인 EPS도 2.7달러로 시장 기대치를 웃돌았는데요. 쉽게 말하면 인공지능 관련 수요가 여전히 아주 뜨겁다는 뜻이에요.",
          "easy2_title": "새로운 시스템 생산 때문에 비용은 좀 늘어날 것 같아요",
          "easy2_desc": "엔비디아는 4분기 매출총이익률이 3분기보다 낮아질 것으로 내다봤는데요. 그 이유를 살펴봤더니 베라 루빈 시스템을 처음 생산하면서 비용이 들고 메모리 같은 원자재 가격도 올랐기 때문이라는 거예요. 비용이 늘어나는 건 단점이지만, 그만큼 새로운 시스템 출하가 본격화된다는 장점도 같이 있는 셈이에요.",
          "topic": "엔비디아의 27년 3분기 실적 발표를 통해 확인한 인공지능 시장의 수요와 향후 기술 변화에 대한 분석이에요.",
          "points": [
            "데이터 센터 매출의 성장: 3분기 데이터 센터 매출액은 107.6B달러로 작년보다 110% 증가하며 예상치를 넘어섰어요. 특히 하이퍼스케일 부문이 60.1B달러를 기록하며 성장을 이끌었거든요. 인공지능 클라우드나 기업용 수요도 여전히 강한 상태라는 말이에요.",
            "베라 루빈 시스템의 본격화: 엔비디아는 베라 루빈 NVL72 출하를 시작했는데, 이게 역사상 가장 빠른 양산이라고 해요. 구글이나 마이크로소프트 같은 주요 기업들이 이 시스템을 적용하고 있거든요. 삼성전기도 글로벌 파트너십으로 언급되면서 GPU 시장 진입 가능성이 커졌다고 증권사는 추정했어요.",
            "HBM4와 SOCAMM 시장 확대: 베라 루빈 시스템이 나오면서 HBM4와 SOCAMM 수요가 빠르게 늘어날 것으로 증권사는 봤어요. 26년 4분기에는 국내 메모리 업체들의 HBM4 물량이 HBM3e를 넘어설 것으로 전망했거든요. 관련 모듈 업체들의 실적도 좋아질 것으로 보인다는 거예요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 관련 모듈 업체들의 실적도 좋아질 것으로 보인다는 거예요.",
          "body_chars": "3466",
          "link": "https://m.stock.naver.com/research/industry/47058",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "IBK투자증권",
          "title": "[IBK투자증권]  [IBKS Daily] 인터넷/게임",
          "easy1_title": "인기 게임 GTA 6가 엄청난 사전 예약 실적을 올리고 있어요",
          "easy1_desc": "락스타게임즈의 신작인 GTA 6가 디지털 사전 예약 판매량 1,494만 장을 기록했는데요, 판매 금액으로 따지면 약 2조 원에 달하는 규모라는 거예요. 사흘 만에 281만 장이 늘어날 정도로 인기가 뜨겁다는 말인데, 미국 이용자들의 구매 의향도 역대 최고 수준인 29%를 기록했다고 봤어요. 쉽게 말하면, 출시 전부터 시장의 관심이 굉장히 높다는 겁니다.",
          "easy2_title": "카카오모빌리티가 카카오의 반대에도 미국 상장을 추진하고 있어요",
          "easy2_desc": "카카오모빌리티가 최대주주인 카카오의 반대에도 불구하고 미국 주식예탁증서 상장을 강행하겠다는 계획이에요. 이달 30일에 임시주주총회를 열어 정관 변경안을 처리할 예정인데, 지분 57%를 가진 카카오가 반대하면 부결될 가능성도 있다는 겁니다. 증권사는 2대 주주인 TPG가 카카오를 상대로 국제중재를 신청한 상황에서, 중재 시 유리한 위치를 차지하려는 움직임이라고 분석했어요.",
          "topic": "인터넷 및 게임 업종의 주요 기업 동향과 시장 이슈를 정리한 내용이에요.",
          "points": [
            "GTA 6 흥행 조짐: GTA 6의 사전 예약 판매량이 1,494만 장을 넘어서며 매출 2조 원 규모를 기록할 것으로 추산했어요. 미국 내 구매 의향이 29%로 최고치를 찍었고, 국내에서도 PS5 프로 품귀 현상이 나타나는 등 관심이 높다고 봤습니다.",
            "카카오모빌리티 상장 갈등: 카카오모빌리티가 미국 상장을 위해 정관 변경을 시도하고 있지만, 대주주인 카카오와의 갈등이 깊어지고 있어요. 정관 변경은 특별결의 사항이라 카카오가 반대하면 부결될 수 있다는 점이 핵심이에요.",
            "인터넷 및 게임 업종 현황: 국내외 주요 인터넷 및 게임 기업들의 시가총액과 주가 등락률을 보면 전반적으로 하락세를 보이고 있어요. 증권사는 과거의 자료를 바탕으로 작성했기에 향후 주가 움직임은 과거 패턴과 다를 수 있다고 밝혔습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "4767",
          "link": "https://m.stock.naver.com/research/industry/47057",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "키움증권",
          "title": "[키움증권]  음식료/유통 27년 전망: 자산효과에서 가격효과로",
          "easy1_title": "내년 유통업은 편의점이 유리하고 백화점은 상반기만 반짝할 것 같아요",
          "easy1_desc": "2027년 유통 업종은 구매력과 인바운드, 구조조정이라는 세 가지 변수에 따라 성패가 갈릴 것으로 보이는데요. 내년 초 반도체 업계의 성과급으로 소비가 일시적으로 늘어날 수는 있지만, 금리 인상의 여파가 본격화되면서 2분기부터는 소비 여건이 나빠질 가능성이 높다는 겁니다. 이런 상황에서 백화점보다는 편의점이 상대적으로 방어력이 좋고, 외국인 관광객의 방문지 확산으로 인한 수혜도 기대된다고 봤습니다. 쉽게 말하면, 백화점은 내년 1분기에 소득 효과를 노린 단기 투자만 가능하고, 편의점이 좀 더 유리한 환경이라는 말이에요.",
          "easy2_title": "음식료는 가격 인상과 글로벌 성장에 주주환원까지 더해져 좋아 보입니다",
          "easy2_desc": "음식료 업종은 내년에 비용 부담을 덜어낼 가격 인상이 이어지면서 마진이 회복될 것으로 증권사는 보고 있는데요. 특히 K-라면의 글로벌 성장세가 뚜렷하고, 기업들이 주주환원을 확대하는 움직임까지 더해져 긍정적인 요소가 많다는 겁니다. 삼양식품처럼 이익 성장률이 높은 곳이나 KT&G처럼 주주환원이 안정적인 곳이 주목받을 것으로 보입니다. 쉽게 말하면, 제품 가격을 올려서 이익을 챙기고 해외에서도 잘 팔리는 구조가 만들어지고 있다는 뜻이에요.",
          "topic": "2027년 유통 및 음식료 업종은 소비 여건 변화와 가격 인상 효과에 따라 업종별로 차별화된 흐름을 보일 것으로 증권사는 전망했습니다.",
          "points": [
            "유통 업종의 3대 변수: 증권사는 2027년 유통 업종을 결정지을 핵심 키워드로 구매력과 인바운드, 그리고 구조조정을 꼽았습니다. 반도체 성과급으로 인한 일시적 소비 반등은 있겠지만, 금리 인상 시차 효과로 인해 중반부터는 소비 여건이 약해질 수 있다고 봤습니다. 또한 외국인 관광객이 비수도권으로 퍼지면서 편의점이 백화점보다 인바운드 수혜를 입기 좋은 구조라고 설명했습니다.",
            "할인점 구조조정의 반사수혜: 홈플러스의 점포 구조조정이 내년에도 이어질 것으로 보이는데, 이로 인해 이마트와 롯데마트 같은 경쟁 할인점들이 반사수혜를 입을 것으로 증권사는 추산했습니다. 만약 홈플러스의 휴업 사태가 다시 발생한다면 할인점의 기존점 성장률이 추가로 2.7%p 확대될 수도 있다고 봤습니다. 다만 할인점 업황 개선만으로는 주가 반등에 한계가 있을 수 있다는 점도 언급했습니다.",
            "음식료 업종의 마진 회복: 음식료 업체들은 비용 부담을 상쇄하기 위해 제품 가격 인상을 확대하고 있으며, 내년 초 가공식품의 2차 가격 인상 가능성도 높다고 증권사는 분석했습니다. 이러한 가격 인상과 K-라면의 글로벌 성장이 맞물려 마진 스프레드가 회복될 것으로 기대했습니다. 또한 오리온이나 KT&G처럼 주주환원 정책을 강화하는 기업들이 투자 매력을 높일 것으로 봤습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 삼양식품처럼 이익 성장률이 높은 곳이나 KT&G처럼 주주환원이 안정적인 곳이 주목받을 것으로 보입니다.; 긴 원문 — 앞 30000자만 읽음(전체 142632자)",
          "body_chars": "142632",
          "link": "https://m.stock.naver.com/research/industry/47056",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "키움증권",
          "title": "[키움증권]  엔터/레저 27년 전망: 기대해도 좋을 2027년",
          "easy1_title": "엔터 기업들이 2027년부터는 신인들의 활약으로 이익이 크게 늘어날 거예요",
          "easy1_desc": "2027년에는 엔터 4사의 합산 영업이익이 1조 125억원으로 51.8%나 늘어날 것으로 증권사는 내다봤는데요. 그동안 실적을 이끌던 고연차 아티스트에서 이제 막 데뷔한 저연차 아티스트로 수익을 내는 중심이 옮겨가는 첫해이기 때문이에요. 2024년부터 2026년 사이에 데뷔한 19팀이 공연 규모가 커지는 4년차에 접어들면서 본격적으로 돈을 벌어다 줄 거라는 말이에요. 쉽게 말하면, 신인들이 성장하면서 회사의 이익 구조가 한층 탄탄해진다는 겁니다.",
          "easy2_title": "레저 업종은 외국인 관광객이 늘면서 우려를 씻어내고 성장할 것으로 보여요",
          "easy2_desc": "2027년에는 한국을 찾는 외국인 관광객이 약 2,550만명까지 늘어날 것으로 증권사는 전망했는데요. 원화가 강세라는 점이 걱정거리로 꼽히기도 하지만, 실제 소비액에 미치는 영향은 크지 않다고 봤어요. 카지노는 국내 3사가 이미 기금 상한 15%를 반영해 둔 상태라 조정안이 나오면 반등할 계기가 될 것으로 보이고, 호텔은 5성급 공급이 부족해 가격 상승이 이어질 것으로 예상했어요. 쉽게 말하면, 시장의 우려와 달리 레저 업종은 영업 환경이 나쁘지 않다는 말이에요.",
          "topic": "엔터와 레저 산업의 2027년 전망과 주요 기업들의 성장 전략을 분석한 리포트예요.",
          "points": [
            "엔터 업종의 세대교체: 엔터 4사는 2027년부터 저연차 아티스트들이 공연 규모를 키우는 빅사이클에 진입할 것으로 증권사는 분석했어요. 2021년 이후 데뷔한 IP들의 공연 모객 수가 2027년에는 91% 늘어날 것으로 보이며, 음반 판매량도 3년 만에 1억장을 다시 넘어설 것으로 전망했어요. 뭔 소리냐면, 신인들이 음반뿐만 아니라 공연에서도 확실한 수익원으로 자리 잡는다는 말이에요.",
            "MD를 통한 수익 다변화: 공연 매출 비중이 커지면서 낮아질 수 있는 마진율을 MD(굿즈)와 라이선싱 매출로 보완하고 있어요. 4사의 MD 매출 비중은 2023년 15.3%에서 2028년 24.2%까지 늘어날 것으로 증권사는 예상했는데요. 팝업스토어를 해외에서 활발히 열고 음반과 연계해 판매하는 구조가 자리 잡으면서 수익성이 개선될 것으로 봤어요.",
            "레저 업종의 회복세: 카지노와 호텔 등 레저 기업들은 외국인 입국자 증가와 함께 영업 레버리지 효과를 누릴 것으로 증권사는 봤어요. 특히 카지노는 마카오 시장의 부진과 달리 국내 3사는 12.5%의 성장을 기록 중이며, 호텔은 신규 공급이 부족해 가격 상승이 지속될 것으로 전망했어요. 쉽게 말하면, 규제 변수 없이 본업의 성장이 이어질 환경이라는 거예요."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "긴 원문 — 앞 30000자만 읽음(전체 81831자); topic 근거 원문에 없음",
          "body_chars": "81831",
          "link": "https://m.stock.naver.com/research/industry/47055",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        }
      ],
      "fed_speeches": [
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
        }
      ]
    },
    "ch4_news": {
      "title": "챕터 4 · 뉴스 사건 묶기",
      "addr": "처리-3",
      "status": "돎 (하루 AI 2콜 독립 묶기 대조)",
      "counts": {
        "news_in": {
          "val": 192,
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        "events_out": {
          "val": 10,
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        "single_out": {
          "val": 141,
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        "all_clusters": {
          "val": 151,
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        "bad_numbers": {
          "val": 0,
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        "calls": {
          "val": 2,
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        }
      },
      "events": [
        {
          "rank_by_count": 1,
          "name": "젠슨 황 엔비디아 CEO 복귀 발언",
          "easy": "엔비디아의 젠슨 황이 사임한 지 닷새 만에 처음으로 공개 석상에서 입을 열었습니다. 이사회에서 요청한다면 언제든 최고경영자로 복귀할 의사가 있다는 뜻을 밝힌 건데요. 갑작스러운 사임 이후 나온 발언이라 시장의 관심이 쏠리고 있습니다.",
          "quote": "젠슨 황 \"이사회 요청 시 엔비디아 CEO 복귀\"…사임 후 첫 공개 발언",
          "member_count": 10,
          "sample_articles": [
            {
              "n": 205,
              "title": "젠슨 황 \"이사회 요청 시 엔비디아 CEO 복귀\"…사임 후 첫 공개 발언 - 디지털데일리",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBGeG9WaERjTlgyS0FyVDVhbTlYUUl4T2VpaDl6Z2NUVmtYZGRkX25yQ0JWdEVmVkFXLUptN0Fza2JoUTNWdFdkSWR4dUY2eGg1Q1IwUS1jMkVabmEtckFDM29SX1U?oc=5"
            },
            {
              "n": 202,
              "title": "‘불륜’ 젠슨 황 “엔비디아 복귀 의사 있다”…사임 후 첫 공개 발언 - 서울신문",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTFBPVDA4YzFiempybzZMamhRcnYyU0NWSnlXei1zT0NST1pKeGw0blR5Ny1mOEpHNER0anN3V3p5ZTZPd0JRX2pyMXl3b095dUZTSUpjeHpDSExpU1JuTXhIZmgtM0pwX0JwX3ZmaG0xdWRjdTJveGtR?oc=5"
            },
            {
              "n": 100,
              "title": "젠슨 황 “이사회 요청하면 엔비디아 최고경영자로 복귀하겠다” - 한겨레",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE94ejVFV25EVFY2RHBFZ0ZJcGNCbnN5bXphTTZuWUVxekZMRERNbUNoOWVQZ1J6RWFoR0wtSDRnYlQ3V3BZRlNhNmFVME4ySDNzY001MEFLLWpxRXpWRHRsQXhCaHh1Y2c2N3ZhZWlkSQ?oc=5"
            },
            {
              "n": 206,
              "title": "젠슨 황 \"이사회가 원하면 CEO 복귀\"…사임 닷새 만 첫 공개발언 - JTBC",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTFBHUVpZc2E4eElIY1RQZHhYOFV4OHI5U3dpSGpsX0N6QWJTWE1jZ0JCeU1aa2F4b1BIRmxYRm1peVZOUUVVR05nV0UwTjdFMFEzV0JoYQ?oc=5"
            },
            {
              "n": 203,
              "title": "젠슨 황 \"이사회가 원하면 CEO로 돌아갈 것\"…사임 후 첫 공개발언 - 머니투데이 - 머니투데이",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMidkFVX3lxTE9hSEVkeUk0OHdkZ1o5VHBlaVllLXZzbkdHRm94dlJod0lEUGJwa0hVVWgtUm16MmJTRGhkUngzTGt1ajhlWVU0Qno4REVySUZkQzFtQ2k5Y1AwTndpeDhCM3F2c0dBZEFxdXlzaGVZR2VCSlBCTkHSAXtBVV95cUxNMC1BR1lhRFRvRExFTU5KU2Jub2paSmZZdDFaQ0hKVDZTT19XZnZIVDJ6UVVoQTdwLVliRmo0a3AtblNCeW9mWlNKVEY1clBSZlY4cG15VE84WWRFaU1NcWdyNFZWUHpRXzlsZFJiSnNveDRGZklTbGxwa1E?oc=5"
            },
            {
              "n": 104,
              "title": "[속보] 엔비디아 이사회 의장 \"젠슨 황 재선임 의사 없어\" - MBC 뉴스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTFBSNGRNaWdGT2pDSjFIaU9XOXBJQXljbjhFaW9TUXRnNFh1YlkxNEVFdy05N0dBM1FDR3lwRG1HTFJ1TVVMVEp6R3BDZVRCNXRSa2ViUDZqWmpkay1CeFd5eWZxcE9oV01mMHNFTXRHUmJ5b1Bz0gF0QVVfeXFMUHZyZk1oQlNaQ3VfQ3YxRjlOLUhDTlhIV3ZMUElIMEp6Rl9mdE13dFhCM3oyMUJRRWc4RTlqa1k2MmlFR19scTA2VFZGX2c2TUEzRzVWY3NHMEhTdEVkLXUyWGoyblZTVjV3MXB0NG1JYmRUUW0?oc=5"
            },
            {
              "n": 204,
              "title": "젠슨 황 \"이사회 요청 시 엔비디아 복귀\"‥사임 후 첫 공개 발언 - MBC 뉴스",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5Vb0NYRjV2dUczRkhMQ0t1WEdwZGtpdDhQMl9XLTFnM1RrdmlBU2lhNmJneXJkQ29BcmZuQmFZQnhFb3NyZFR4SFVaR2tZMWJvVVNLMzdPaFVzSnRaTHlQb3BaUWtVMWNLaWVGdGdaSFhUZzBU0gF0QVVfeXFMUDkyZ2d2OWFjeFF0Y1p3eDlmY0tZcWNoU0NnN1BYWVRadkI0S1NGSGo1am1IcUZTWVNYbkhENVlkb0YxUFp5QkV0blhEaXNadWpkbnBBakdQcnU5UHpyWWl4eG1BSkxRb2FHS2g4Tjl1aHQwSVA?oc=5"
            },
            {
              "n": 207,
              "title": "젠슨 황 “이사회 요청시 엔비디아 CEO로 복귀할 것”…사임 후 첫 공개 발언 - 쿠키뉴스",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE52ODJzbXFSa1h3ZGhfYnlrU3dnb19RMHduaXdLMzh6ZC04U1lnZkw2NFRhR01nWllkZ0FURzUtdnJ2MER6M0k1QUVjWnBrRzl3eUlxeDM5alA1QnNWWGE1c0N4OA?oc=5"
            },
            {
              "n": 106,
              "title": "퇴진 닷새 만에 입 연 젠슨 황 “이사회 요청 있으면 엔비디아 CEO 복귀할 것” - 경향신문",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE51SUJOZWpOc09maTNKZERCM0VRTXZRaWJvSHo3WjNBcHYtS3BrdDl3Y1JCREI2SC0yRllOeXFSQUl3QlBOUEtxYVk1QUx4OUMzQjJJM3JJZ0MtZ9IBX0FVX3lxTE4zYnpPYWk2a096djlSbVRxeWxRb0dTNV9kbVNGMUxtNUdKYVd0Q2lmNWdNc2JqNGpMZldyUm9hVS1FSWszWldDdU80TExCdTNPNTB5eVNoaWNYTzhNMUhJ?oc=5"
            },
            {
              "n": 208,
              "title": "젠슨 황 \"이사회 요청하면 엔비디아 복귀\"…사임 후 첫 발언 - 한국일보",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5JTms2QTl0dFRlUERFNXlSME9BLVpMSXphbEEzOFd0TERYWUNTamY5dlhobDhnWWsxLTQ2dFpoTUJFQjk4WmU2eUZxa1ZxMUJjaDYzZ2tTZktxa1UzSi1hSUF1NEppY0xPY1lXT0dn0gFzQVVfeXFMUDVmYk9TVEZSREZlUGwtLXpDcm5FbzB4YThjeGxmcjB6d2lfWDktQUtnWHZiRXBCUWpYc24zcjRqNFpMRTA2SnlXOHp2eFRZaXViRlVxbjcyNjFvSGthd1JPd2FBTHdhMEYxNW9WWWMyTGpHZw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 2,
          "name": "엔비디아 호실적에 따른 국내 반도체주 반등",
          "easy": "엔비디아가 예상을 뛰어넘는 실적을 발표하자 국내 증시도 즉각 반응했습니다. 삼성전자와 SK하이닉스 등 반도체 관련주가 일제히 급등하며 투자 심리가 살아나는 모습인데요. 특히 SK하이닉스는 장중 9% 넘게 오르며 강한 상승세를 보였습니다.",
          "quote": "[개장시황] 코스피 2.63% 반등…SK하이닉스 5.56% 상승",
          "member_count": 7,
          "sample_articles": [
            {
              "n": 88,
              "title": "[개장시황] 코스피 2.63% 반등…SK하이닉스 5.56% 상승 - 한국경제",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE42Qjl6dUJaQ2pWUUdPcVFZb1lBcmlDYm5jcDVPc1Z4b1hvYVV6QW1wV0N2ZmtWYk8xZzZ6TGU5UF9nS2FYenFFd3p4Ujd4aGx2Q1ptWXNwR0RqUQ?oc=5"
            },
            {
              "n": 81,
              "title": "엔비디아 시간외 반등에 국내 증시도 들썩… HBM·후공정 수혜주 어디? - 핀포인트뉴스",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTE9jNDdpVktDRTVUbm9KcTFRTlRSTVAzaGVvcVphQXV6blU1STFkZVA3azFPU3NsMExlVGZvS3hDR3R1X05yN09qdkJIQzRyMnlkM2laNVA0amd4bEM4cmRSbFZZYm96a2NqWDhqYk9xVlVTUlNvLWNj0gF3QVVfeXFMT2M0N2lWS0NFNVRub0pxMVFOVFJNUDNoZW9xWmFBdXpuVTVJMWRlUDdrMU9Tc2wwTGVUZm9LeENHdHVfTnI3T2p2QkhDNHIyeWQzaVo1UDRqZ3hsQzhyZFJsVllib3prY2pYOGpiT3FWVVNSU28tY2M?oc=5"
            },
            {
              "n": 92,
              "title": "코스피, 2% 반등 출발하며 5천 선 회복‥삼성전자 3%↑·SK하이닉스 5%↑ - MBC 뉴스",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE8zakdhWVM2VTBIZDlOU3kxSUM5VTA3LXZoblVuc0VsV2tCNnQ3U0ZtYVdHZmphQ2oycExzTTV2N2VieHdVVXVHZGlmV3ZzVkJhdmVkRDdXLTJfUUZsNEtwbzY1UkpTaDBnVTVEV0Q1MVNKTzNF0gF0QVVfeXFMT2hHX0ZpNU9xSjJwQ19sWDA2R1RkczM3M1g0UlNxb1ZUX0J6X0VUWTZYTDltX01RYnl4SHpZTzlzNmluY3B5MmxyZ1NBSFJ0UzNnTzhiQW93YWYxbVprX3lFdDU5c0I3LVV5QUhpa2l5WUJEZmU?oc=5"
            },
            {
              "n": 91,
              "title": "[특징주] 삼성전자·SK하이닉스 동반 급등…엔비디아 호실적에 투자심리 회복 - 브릿지경제",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9TNmFCNnI5QWFsNF9uWTdES29mS3R5NTlnaWRaMmZ0RXBFOUozS2w1dWRfSGROQjZKb0NocFFoZHBmQXFadkR2QldHYXJmUTR3ZzZpRm5XbTFmdw?oc=5"
            },
            {
              "n": 27,
              "title": "엔비디아 ’어닝 서프라이즈’에 삼전·닉스 반등 시동…AI 투자 우려 잠재울까",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2180703"
            },
            {
              "n": 87,
              "title": "[특징주] 반도체株 반격 시작…SK하이닉스 110만원 돌파 - 뉴스핌",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE9uZFVtTE4zY2wwV2hZMC1pM2k5b0hLUkNvRnhBSXo4Z0lucEJVcTVkd3lGaWlLNm13OXVrNTRXT0FUMHE1VTZQOERHWWx6TkdMcWZSLUFtenhVdzFu?oc=5"
            },
            {
              "n": 89,
              "title": "[속보] SK하이닉스 프리장 9% 급등 '동적VI' - 뉴데일리 경제",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1HbGxtSzl6Qk1BaTlVZ0V1SGpXS2s1bi1PMnZWR3RpWlhXRXVGSm5Jay1meHVqVVhFWnBuaXlwOWRQd0lqV2JFWlB6V1JFQzV3SEI4RDVoaFJsXzdweFV5eVg5Y08xZ1NBMlZsM3VNWVJkTEpiN3Y5Y2dNMNIBgAFBVV95cUxPbGFQXzJ4NllIVFVZeWNhcnVqNWNKMXhDSzZiN0djT1lKbkJ0WHFVbnJNaVF3M3hjSDVsSFlvbjFPMWRHSVo4ZzRiR3NWdUFYYjQ0cVJxS1hvdl8tUF9rVEtIbzhUX1FMUFRkVmoyZUlPSWZ4MUhMVXVISjFDc3dDbA?oc=5"
            }
          ],
          "flags": [
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 3,
          "name": "경남 SMR 국제 컨퍼런스 개최",
          "easy": "경상남도가 글로벌 소형모듈원전 시장을 선점하기 위해 창원에서 국제 컨퍼런스를 열었습니다. 미국과 에스토니아 등 해외 원전 기업들이 대거 참여해 제조 공급망 협력을 논의했는데요. 경남을 세계적인 SMR 제조 거점으로 키우겠다는 계획입니다.",
          "quote": "경남, 글로벌 SMR 제조·공급망 거점 도약…미국·에스토니아와 협력 확대",
          "member_count": 6,
          "sample_articles": [
            {
              "n": 10,
              "title": "경남, 글로벌 SMR 제조·공급망 거점 도약…미국·에스토니아와 협력 확대",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374912"
            },
            {
              "n": 113,
              "title": "경남SMR 국제 컨퍼런스, 글로벌 SMR 기업들 경남 창원에 집결 - 일렉트릭파워",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFB2VnRELThsbTFqU0RXdFpRLWNCeWdVcTNjSG5UdzZENFBQLUdaakVWdlhITU1PaEQ3TENuYlozUkcyNWNXZVNfX000elJ4aEh1VjRCdUo5WTB1b0NSc1RqMzYtdFE?oc=5"
            },
            {
              "n": 115,
              "title": "경남, 글로벌 SMR 제조거점으로 육성 - 서울경제",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE53WUZlMmFqTDVibjZnT2x0ZnhLSTBjbHAwYmNqOG5NcFAtNlpybFNxQ3hfaEZKSWpOc1gwc3hYcm54aXhXbl9KT2xKWGpaanY0WFHSAVNBVV95cUxOWW5sT3NNQTJuUjd0UThFaTBRNUFjMGtiZW5zYXNJUnhCM0Nxc21BY2NpTUZEc1JQWGNLU3dpeWdaUGpGb3ZxaHdsMUdxNzBCNHhPdw?oc=5"
            },
            {
              "n": 110,
              "title": "국내외 원전기업 창원 집결…경남도 'SMR 국제콘퍼런스' 개최 - CNB뉴스",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE9vM2laS2Fod3NmUmp4UkhBYVg2S08wSW40OTZRR3psdy1TQTREMTBZcEJwZHp0Y1R5bWdKOEhSNzNKX01mRmt1ekx4V2I3S2RBQ0hweWN2ckNxaFlUMVBzZm5oUElQTUEtQ2Yw?oc=5"
            },
            {
              "n": 111,
              "title": "경남 'SMR 국제 콘퍼런스'…전세계 원전 전문가 모인다 - 한국경제",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE15ei1CeHhDZ05pZXhrUFEzNDl6OGExN0VOQmxsdzhwRTl5dVFJM0VzRUhEbGpnNk1zckNZeGVUaGZQaVFucmVUQmF4LXdxWkNkU0ZnSlFaT2c2UQ?oc=5"
            },
            {
              "n": 114,
              "title": "글로벌 SMR 기업 창원 집결…경남, 세계 원전 공급망 공략 - 한국원자력신문",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5NVzlTTGlnYzJ3OWFzMXhrMmRDZmxFaTJqazFoRE5UZk91UWk0MllfZ3c5RGhHRTl0OUJKa1BpTkJDRXctdHVHY2Z0RGlNRjMxS042dXh3eV9IZTF1RHZrSEt5NmlqczDSAWtBVV95cUxNU20xRnZhM1c0dDJrLWdIRUZoUGJ1cnE1bGJ6dXVIeFJWVmJkb1dTMXB6MURQeHRSMUxUa1RxNTBiNjZ5R0NMOHpraUNVS1VIcjdid3FuVHdBM293RDZSY0dPbFRoeXFOczhoRQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 4,
          "name": "한국형 혁신핵융합로 초전도자석 기술 논의",
          "easy": "한국핵융합에너지연구원이 한국형 혁신핵융합로에 들어갈 초전도자석 개발을 위해 산·학·연 전문가들을 모았습니다. 저온과 고온 기술을 아우르는 개발 전략을 논의했는데요. 핵심 부품인 초전도자석의 기술 역량을 결집해 상용화 기반을 다지려는 움직임입니다.",
          "quote": "KFE, 한국형 혁신핵융합로 초전도자석 개발 전략 논의",
          "member_count": 6,
          "sample_articles": [
            {
              "n": 175,
              "title": "KFE, 한국형 혁신핵융합로 초전도자석 개발 전략 논의 - 지디넷코리아",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1UN2dJQl9rcW9Cc19kNzRfRkJzZWZHT1FQSDdOOWpOZnRsSFZuVHBnODlrbUJrWUNOVndYREtBWTMxamFLYUlxRWlnUWNsUVJqTkpEWVRn?oc=5"
            },
            {
              "n": 173,
              "title": "핵융합연, 핵융합 초전도자석 전문가 워크숍 - 충청뉴스",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE9ZWE1OS2tCUG9kakFZcVpMbXI0X2N6RUUwY1RxbmF4aTY3QlV4VWNpb2ZuSkQ4aWVneGJPX1hxdmNPdW5wZ0VaTlRvYWxjaE5HRE9YeGh4SlR1aEx1WFg1Uk5QMERLSmstT1FZ?oc=5"
            },
            {
              "n": 170,
              "title": "韓 '혁신핵융합로 초전도자석' 개발 논의의 장 열려 - 전자신문",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE5XN2dmUTNFRXYzbXR5S2VTeEJhc2MzdDF0SUZqb3pyc202dWlYOUVLY1RpYVFiaDFmVEFkMF9GWFNTVVFTUEdmVHlMdWdnZw?oc=5"
            },
            {
              "n": 177,
              "title": "핵융합연, 한국형 혁신핵융합로 초전도자석 기술개발 산·학·연 머리 맞대 - 중도일보",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBUREVsWTJ0U19taExud2R6RjRCUHcyMGJsYTViUWplY1lFT0pCelJhZU9jd2o0U1lWUjV3dW11YUp5eldCTThvb19aSTNpZEZnTnhRRlFHMmJEZENQMEZjLTFXeUw?oc=5"
            },
            {
              "n": 174,
              "title": "핵융합연, 한국형 핵융합로 초전도자석 기술개발 논의 - 굿모닝충청",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE04bUhkSTBkVm1yc2liWHJjMUpoelF0OUJHSFRGeXlCOU5FR2xoRS1PczByamwzSU1RZml5TmNqbGZJZElYSGVibWx1TVN3ZFMwWWEtdGQ5akdZYTZSempSWDYwUTNzVlQ0RDJ1Vl93QXE3Zw?oc=5"
            },
            {
              "n": 176,
              "title": "핵융합(연), ‘핵융합 초전도자석 전문가 워크숍’ 개최 - 투데이에너지",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE94aUJ0aDdfTnJ3UzdlTm1mRWlTVllyRzVKbG12anpEa1cxUXd2OVFNZnRZcS1EQXdVNkRjRjUtWWwyQ001VjF3cnNxbk95MVRGaGs3a3Z1Vk53QTF3UC1lek0tVnA1RUw0SDVwZmFR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 5,
          "name": "뇌 신호 활용 재활 기술 개발",
          "easy": "병으로 목소리를 잃은 가수가 뇌 신호를 이용해 다시 노래를 부르는 기술이 공개됐습니다. 뇌-컴퓨터 인터페이스를 활용한 것인데요. 관련 시장 규모가 커질 것으로 전망되면서 상용화를 위한 임상 검증과 인프라 구축이 중요한 과제로 떠올랐습니다.",
          "quote": "병으로 목소리 잃은 가수… 뇌 신호로 다시 노래 불러",
          "member_count": 5,
          "sample_articles": [
            {
              "n": 755,
              "title": "병으로 목소리 잃은 가수… 뇌 신호로 다시 노래 불러 - 조선일보",
              "source_name": "'뇌과학 BCI 기술'",
              "link": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNZzc2WnVFLVpQZThfaVhpNTczUFNIMjZRRlhWRjFOeEZIdUtYQ3VVUWxoLV84d2l1eE4yWjloNkxGOHFicUxQWmNUV09IQUlwR3VUeDhFM2VLVmlvVFV1LUE3R1F6UmJyaVh6YlctWGdEZWpXaGsxSTVQOG52MzBhLTkxdw?oc=5"
            },
            {
              "n": 754,
              "title": "루게릭병으로 목소리 잃은 가수, 뇌 신호로 다시 노래했다 - 조선일보",
              "source_name": "'뇌과학 BCI 기술'",
              "link": "https://news.google.com/rss/articles/CBMigwFBVV95cUxQYTYxMEg2OHQ4anhPbExFOGg3R3VteUhvMXhtMDFXcVJOVlQtZmlSZWtVc1pHWXh5ZkFGVktRV1RldGVlZ21aazdCOUk3eVZtRUV5MFpaM05DV1VVSW9meGx6WjhpTkVqN1pibm5seXMwV1hrXzhJVkhBS3RTeW92bjZMWQ?oc=5"
            },
            {
              "n": 758,
              "title": "신경 재활 기기 시장 규모 보고서 2026: 21억 200만 달러 도달 전망, 연평균 성장률 12.5%로 확대｜QYResearch - note",
              "source_name": "'뇌과학 BCI 기술'",
              "link": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFBuVy1wbkRqMWlDanc1UHFRWi1mTGxiNVZDbS1tN1JYM1o4Wm1QajhxRlRyTzhXV0Vma1JRN3RQeEpxSHRuTkpTa3FGZnA4cGJlSi1aZFlfVUtXbV9Hb0JB?oc=5"
            },
            {
              "n": 757,
              "title": "BrainGate2 뇌-컴퓨터 인터페이스, 파일럿 임상 단계에서 확인해야 할 경계선 - 뉴스N연합",
              "source_name": "'뇌과학 BCI 기술'",
              "link": "https://news.google.com/rss/articles/CBMiSkFVX3lxTE1kLVNqTmJfSHk1R1hFZlAzaUZjUGd6VS1COUhiLXlEamFqOXBraWYyUEtKQmhBU1o0UkxDaml3Q21wS2pxT29JWXdB?oc=5"
            },
            {
              "n": 756,
              "title": "침습형 BCI의 상용화 장벽: 임상 증거·수술 인프라·적응증별 검증이 관건 - 뉴스N연합",
              "source_name": "'뇌과학 BCI 기술'",
              "link": "https://news.google.com/rss/articles/CBMiSkFVX3lxTFA1UG40R1BSdWFlR21uTjlZZnJyd2dORFh5TkhwaHEzNEhKOXNZNlktMFI1R0Y2MVlJQk4wckZiTXhaZHJ3bHVUZlFn?oc=5"
            }
          ],
          "flags": [
            "예측 의심: 관련 시장 규모가 커질 것으로 전망되면서 상용화를 위한 임상 검증과 인프라 구축이 중요한 ",
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 6,
          "name": "엔비디아 사상 최대 실적 달성",
          "easy": "젠슨 황이 물러난 뒤에도 엔비디아의 실적은 고공행진을 이어가고 있습니다. 최근 분기 매출이 전년보다 111%나 늘어나며 14분기 연속으로 사상 최대 실적을 갈아치웠는데요. 4분기 전망치도 시장의 예상을 뛰어넘으면서 건재함을 과시했습니다.",
          "quote": "'젠슨 황 없는' 엔비디아 첫 실적 신기록…4분기 전망도 예상상회(종합)",
          "member_count": 4,
          "sample_articles": [
            {
              "n": 107,
              "title": "'젠슨황 없는' 엔비디아 첫 실적 신기록…4분기 전망도 예상상회(종합) - 뉴스1",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1MQ1dwdHdkcDV6T3RRdWJNZnRsd3NBLTVwc0lZZEdZNzhabE0waWtuZHEteU9zVEZWUEdSV0l6Sk1yVHYzTV9oalVjbVhHcjdLR09odjl5N2tXX2dhX2tEaVpuVlo4TUU?oc=5"
            },
            {
              "n": 101,
              "title": "엔비디아, 최근 분기 매출 전년비 111% 증가·컨센 상회(종합) - 연합인포맥스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9DdHdlU0ZheXRzYjNqdkN5WlZCdnVicTFRdTExUTE2WnZiaGI1TnkwYTVsRzBhTWU5S0ZXMnJPelFBbldYVGdHVXpaWWFvdnA3Y1ZDVlJiVDVJMGEtT3hHSm1mSlVKUnZjRFU1cjdVck4?oc=5"
            },
            {
              "n": 102,
              "title": "엔비디아, 젠슨 황 없이 사상 최대 실적 발표... “새 CEO 찾는다” - 매일경제",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFB6aEt5TXdMajRxSjNCN1MzSzRmVkRjR19xQllrYllrOUtuNTBtTXU2SkJTZktzNTA3dnphaUlKWW02NkVzbms2Q1lhRS1qdw?oc=5"
            },
            {
              "n": 105,
              "title": "젠슨 황 없는 엔비디아, 14분기 연속 사상 최대 실적...전년보다 두 배 증가 - 조선일보",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMigwFBVV95cUxOZUZjb1pESGUyN2pYbUpPUWtpNE9sMWhsUnNnaERHMkdzV0RhaHFWVmNTcjFxc0Nucnc5UDByLUh6aWhOUlEyalkwQ1pwQ0NDb1pCanJsMktWU0VSWVM0ZG42VHU2SjVKUWJXa3ZZWDducUN6Ti04em1zQjd1TnN1bWJJUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 7,
          "name": "AI 데이터센터 전력·냉각 시장 공략",
          "easy": "AI 데이터센터가 급증하면서 전력과 냉각 기술이 핵심 시장으로 떠오르고 있습니다. 삼성SDI와 LG에너지솔루션 등 국내 기업들이 북미 시장을 겨냥해 ESS와 UPS 같은 전력 관리 솔루션을 잇달아 선보이고 있는데요. 전력 효율을 높이는 기술 경쟁이 치열해지는 모습입니다.",
          "quote": "AI 데이터센터 전력·냉각 시장 열린다…K기업, 밸류체인 선점 경쟁",
          "member_count": 4,
          "sample_articles": [
            {
              "n": 132,
              "title": "AI 데이터센터 전력·냉각 시장 열린다…K기업, 밸류체인 선점 경쟁 - 더트래커",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE5wV0FGNGpySkdxTlNCQVF2aFktdmdsazFhNVVJUW1rbFI3QU5VeFpyem03ekF4em9IbzhyVG9MODFHMDN5Wk4wRHhDeUg0S3ZNUXgtSm9JNGc?oc=5"
            },
            {
              "n": 135,
              "title": "삼성SDI, 데이터센터 전력 체계 전 구간 겨냥…북미서 ESS·UPS·BBU 배터리 공개 - 마켓잉크",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9ycDhURUlCWUUyOGd0bVVnN1l1ODRDbDc3OENjZVhybUJxSG5KRHBwWEhObDVtRVB5WDZKOUlFaS1WLS1oN2dsaW1BbUVtMTRYa1VOYW10VURIZHpsd24wZ0ZaOVY3U0tWejJTQ0Zrbw?oc=5"
            },
            {
              "n": 138,
              "title": "삼성SDI, AI 데이터센터 전력시장 공략…ESS·UPS·BBU '3각 전략' - 신아일보",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9MWjFVRXlIQnpzcF9SNmk2UFNmUU5vbmY4VUdfb0t4OGtld0hUOVN0cXB5bEVxMzNEWjFfRUl6S0xPd1ZJVlhtU0lOdnIxckFBRFBkckszaHo3d2dGRlRmYnRkU2IwbHQyQ0JDZFVjeFE?oc=5"
            },
            {
              "n": 117,
              "title": "LG엔솔, AI 데이터센터 전력시장 공략…북미 ESS 밸류체인 확장 - 더트래커",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBqR3FqOEFxQkwzVFJXOTFWY0ZmU0JRbHk4cHRoY2tCMnY3RUx6U2FxcjJELWxlTTh6bUVKMHFtY19VZjlJOGFjbWhyR1QybUxuZ1hrQzFZZDU?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 8,
          "name": "트럼프의 희토류 생산 확대 발언",
          "easy": "트럼프가 10개월 안에 미국의 희토류 생산량을 중국 수준으로 따라잡겠다고 공언했습니다. 중국의 자원 통제에 맞서 공급망을 확보하겠다는 의지로 보이는데요. 미·중 회담을 앞두고 나온 발언이라 국제적인 관심이 쏠리고 있습니다.",
          "quote": "트럼프 \"희토류 열달 내 中 따라잡을 것…이란전 해결 가까워져\"",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 198,
              "title": "트럼프 \"희토류 열달 내 中 따라잡을 것…이란전 해결 가까워져\" - 연합뉴스",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5aZ1JLWVRobUtIMDA1WVFLYWtVZGFWU1BvOHpuZVh3bFlLZnl3dE5nVlp4MWg5eVZTRHZOMGtyUjhiLWJoanBadWtVY3E3UENSLWh0VlFfcnUzUnPSAWBBVV95cUxQM21HVWF5dkYwcGM1Tk9FZi01RjZ2dTBmVGNESlhrOW1WU0ZhYXpiNXpEWjdEVVdONUQ4MXNyRURHX1Y4SzF0OHRPbzhSNzJmNnhEdUhfbjlVMHhpZWdfWGo?oc=5"
            },
            {
              "n": 195,
              "title": "트럼프 “10개월내 美 희토류 생산, 中 따라잡을 것” - 뉴시스",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTE5rdHlfMlpDakFmclo0U3FmSjI5dkV5Y0MxZ1BQVk5EeWVYbGZmcHE5UjlpMGFKSy1xd3J6T2Y4TThLQ09xSzJvMTFiWkdTV3VWbW1SMXBqelg3SWR4X0xzZ09kVUJLblV6emxpeHk4akVLYlBRbld6cdIBeEFVX3lxTE5rdHlfMlpDakFmclo0U3FmSjI5dkV5Y0MxZ1BQVk5EeWVYbGZmcHE5UjlpMGFKSy1xd3J6T2Y4TThLQ09xSzJvMTFiWkdTV3VWbW1SMXBqelg3SWR4X0xzZ09kVUJLblV6emxpeHk4akVLYlBRbld6cQ?oc=5"
            },
            {
              "n": 199,
              "title": "트럼프 “10개월 안 희토류 생산 중국 따라잡을 것”…미·중 회담 앞두고 자신감 - 경향신문",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE5pcTFvX1BucElHV01JSEFiX2s1SDd1eC12ODQ0VV81MmtDZXM1YnV2eE5hdVBFVmxyMVBzaXBleW5sNkxCZGNJUmZYdHI5VFlaOGllb2RFcmd5Q3FwWmhV0gFfQVVfeXFMTmlxMW9fUG5wSUdXTUlIQWJfazVIN3V4LXY4NDRVXzUya0NlczVidXZ4TmF1UEVWbHIxUHNpcGV5bmw2TEJkY0lSZlh0cjlUWVo4aWVvZEVyZ3lDcXBaaFU?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 9,
          "name": "키르기스스탄 에너지 정책 협력",
          "easy": "에너지경제연구원이 키르기스스탄의 에너지 정책을 돕기 위한 연구 성과를 공유했습니다. 특히 한국형 스마트계량기를 도입해 전력 요금 체계를 개혁하는 방안을 제시했는데요. 전력 관리 효율을 높여 현지 에너지 문제를 해결하려는 시도입니다.",
          "quote": "에경硏, 키르기스스탄 에너지 정책 연구성과 세미나 개최",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 130,
              "title": "에경硏, 키르기스스탄 에너지 정책 연구성과 세미나 개최 - 에너지타임뉴스",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE14QTBJS1Q4Y3ZjcTlXT1R1ZXhLNlRTVE5zd2hYVFFUVmItZURhd3FTWDZyWUxHNHpsUmpvZy11MkFCVGFfYTluRV9lVVl2RXowMkNHNHJmcFBQUXp1TGxaSEpuZlFaSVlMcVlFUHRIaG5nZ9IBdkFVX3lxTE1MclJBZG1qQjdBY2FIV3pSbUVQTnBmYVlVRDJvSS04czQxeXZZS2NpZDVGWEdha0hfMU5iTDNiVUNBSGRiMzVkdFV1aXR3bEd1Q2ZPdklIaTRVWTdJTUZvN0tNUVVSWU5oV2lnWmZDSmpLX2pIeWc?oc=5"
            },
            {
              "n": 126,
              "title": "에경연, 키르기스스탄 전력관리 개선 지원 성과 - 국토일보",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBsZjBac1R6R1NJRmZ1aTk2WDZxOERMd0w5SS1mZk9OandMUk45TFhCOERpV015YlQyNGZ3WU5Bd0FuRFNhdXEwa0VNVkVBMEttcXRpUG1INjhNNFpNdVFteVJrYkk?oc=5"
            },
            {
              "n": 127,
              "title": "키르기스스탄, \"한국형 스마트계량기로 ‘요금 개혁’ 해법 찾는다\" - 에너지코리아뉴스",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE44UzlWd2x0RUFraEZPT0VoN0ZqU3BzWl9PUm5ENTZBVEtCLXNNSzNuNlc3MlpObnRJUTRIcHNKNHNFNENaaU1sczU4TGpSLXRoMzV4Q1NEUXhWQmFwN1JkUUoyX2c4LU5ZbnFybTBZeEk?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 10,
          "name": "전기공사협회 건축·산업설비 특별위원회 활동",
          "easy": "한국전기공사협회가 건축과 산업설비 분야의 현장 목소리를 정책에 담기 위해 특별위원회를 꾸렸습니다. 그동안 현장에서 겪던 어려움을 제도 개선으로 연결하겠다는 건데요. 내년도 사업 계획에도 이러한 현장 경쟁력 강화 방안을 집중적으로 반영할 예정입니다.",
          "quote": "전기공사협회, 내년 사업 ‘회원 권익·현장 경쟁력’에 집중",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 20,
              "title": "전기공사협회, 내년 사업 ‘회원 권익·현장 경쟁력’에 집중",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374893"
            },
            {
              "n": 14,
              "title": "전기공사협회, 건축·산업설비 특별위 첫발…“현장 목소리 정책에 담는다”",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374903"
            },
            {
              "n": 3,
              "title": "임왕식 전기공사협회 건축·산업설비 특별위원장 “건축·내선 현장의 목소리, 실질적인 제도 개선으로 연결할 것”",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374905"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        }
      ],
      "single_articles": [
        {
          "rank_by_count": 11,
          "name": "‘안갯속’ Post-RPS 시장, 해상풍력 개발사 과제와 해법 모색한다",
          "easy": "",
          "quote": "‘안갯속’ Post-RPS 시장, 해상풍력 개발사 과제와 해법 모색한다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1,
              "title": "‘안갯속’ Post-RPS 시장, 해상풍력 개발사 과제와 해법 모색한다",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374908"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 12,
          "name": "“48년간 못 푼 고준위 방폐물 숙제”...2038년 부지선정 가능할까",
          "easy": "",
          "quote": "“48년간 못 푼 고준위 방폐물 숙제”...2038년 부지선정 가능할까",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 2,
              "title": "“48년간 못 푼 고준위 방폐물 숙제”...2038년 부지선정 가능할까",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374906"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 13,
          "name": "KCL-한국남부발전-베트남 IEMM, 한-베 태양광·BIPV 산업 협력에 손 잡아",
          "easy": "",
          "quote": "KCL-한국남부발전-베트남 IEMM, 한-베 태양광·BIPV 산업 협력에 손 잡아",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 4,
              "title": "KCL-한국남부발전-베트남 IEMM, 한-베 태양광·BIPV 산업 협력에 손 잡아",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374920"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 14,
          "name": "KTC, 제10회 체외진단의료기기 산업 활성화를 위한 세미나 개최",
          "easy": "",
          "quote": "KTC, 제10회 체외진단의료기기 산업 활성화를 위한 세미나 개최",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 5,
              "title": "KTC, 제10회 체외진단의료기기 산업 활성화를 위한 세미나 개최",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374919"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 15,
          "name": "엔트리연구원, 한국스마트교통신호장치산업협동조합과 스마트 교통신호장치 산업 발전에 ‘맞손’",
          "easy": "",
          "quote": "엔트리연구원, 한국스마트교통신호장치산업협동조합과 스마트 교통신호장치 산업 발전에 ‘맞손’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 6,
              "title": "엔트리연구원, 한국스마트교통신호장치산업협동조합과 스마트 교통신호장치 산업 발전에 ‘맞손’",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374918"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 16,
          "name": "아이디어 넘어 실전 서비스로…한국앤컴퍼니 AI 해커톤 2라운드",
          "easy": "",
          "quote": "아이디어 넘어 실전 서비스로…한국앤컴퍼니 AI 해커톤 2라운드",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 7,
              "title": "아이디어 넘어 실전 서비스로…한국앤컴퍼니 AI 해커톤 2라운드",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374916"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 17,
          "name": "축제장 막차 놓쳐도 지쿠 있었다…행사장 이용량 최대 7.2배",
          "easy": "",
          "quote": "축제장 막차 놓쳐도 지쿠 있었다…행사장 이용량 최대 7.2배",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 8,
              "title": "축제장 막차 놓쳐도 지쿠 있었다…행사장 이용량 최대 7.2배",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374915"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 18,
          "name": "채비, 충전 서비스 분기 최대 매출…적자 폭 줄이며 수익성 개선",
          "easy": "",
          "quote": "채비, 충전 서비스 분기 최대 매출…적자 폭 줄이며 수익성 개선",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 9,
              "title": "채비, 충전 서비스 분기 최대 매출…적자 폭 줄이며 수익성 개선",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374913"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 19,
          "name": "물체는 그대로인데 색이 바뀐다…기계연, 빛으로 색 바꾸는 스마트 조명 개발",
          "easy": "",
          "quote": "물체는 그대로인데 색이 바뀐다…기계연, 빛으로 색 바꾸는 스마트 조명 개발",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 11,
              "title": "물체는 그대로인데 색이 바뀐다…기계연, 빛으로 색 바꾸는 스마트 조명 개발",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374910"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 20,
          "name": "COP31 합의문 초안 공개…화석연료 퇴출·전기화 놓고 진통 예상",
          "easy": "",
          "quote": "COP31 합의문 초안 공개…화석연료 퇴출·전기화 놓고 진통 예상",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 12,
              "title": "COP31 합의문 초안 공개…화석연료 퇴출·전기화 놓고 진통 예상",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374911"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 21,
          "name": "김성환 기후장관, COP31서 기후목표 실질적 이행 및 국제협력 중요성 강조",
          "easy": "",
          "quote": "김성환 기후장관, COP31서 기후목표 실질적 이행 및 국제협력 중요성 강조",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 13,
              "title": "김성환 기후장관, COP31서 기후목표 실질적 이행 및 국제협력 중요성 강조",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374897"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 22,
          "name": "재생E 확대에 달라지는 전력시장…\"예측·제어·보상체계 정비해야\"",
          "easy": "",
          "quote": "재생E 확대에 달라지는 전력시장…\"예측·제어·보상체계 정비해야\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 15,
              "title": "재생E 확대에 달라지는 전력시장…\"예측·제어·보상체계 정비해야\"",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374904"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 23,
          "name": "전기산업진흥회, LS일렉·HD현대일렉서 스마트팩토리 혁신 전략 공유",
          "easy": "",
          "quote": "전기산업진흥회, LS일렉·HD현대일렉서 스마트팩토리 혁신 전략 공유",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 16,
              "title": "전기산업진흥회, LS일렉·HD현대일렉서 스마트팩토리 혁신 전략 공유",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374902"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 24,
          "name": "LS일렉트릭, 베트남 박닌 제2 생산동 준공… 아세안 전력시장 공략 가속화",
          "easy": "",
          "quote": "LS일렉트릭, 베트남 박닌 제2 생산동 준공… 아세안 전력시장 공략 가속화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 17,
              "title": "LS일렉트릭, 베트남 박닌 제2 생산동 준공… 아세안 전력시장 공략 가속화",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374901"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 25,
          "name": "(WCPEC 2026)움트는 ‘대전형 태양광’ 생태계...제조 역량을 지역 수요로",
          "easy": "",
          "quote": "(WCPEC 2026)움트는 ‘대전형 태양광’ 생태계...제조 역량을 지역 수요로",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 18,
              "title": "(WCPEC 2026)움트는 ‘대전형 태양광’ 생태계...제조 역량을 지역 수요로",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374898"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 26,
          "name": "동서발전, 창업기업 62곳 키운 공로로 중기부 장관상",
          "easy": "",
          "quote": "동서발전, 창업기업 62곳 키운 공로로 중기부 장관상",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 19,
              "title": "동서발전, 창업기업 62곳 키운 공로로 중기부 장관상",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374896"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 27,
          "name": "버릴 뻔한 물건 모아 일자리 지원…한전KPS의 나눔 실천",
          "easy": "",
          "quote": "버릴 뻔한 물건 모아 일자리 지원…한전KPS의 나눔 실천",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 21,
              "title": "버릴 뻔한 물건 모아 일자리 지원…한전KPS의 나눔 실천",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374891"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 28,
          "name": "신성이엔지, ESG 평가 첫 AA등급...1년 새 204계단 상승",
          "easy": "",
          "quote": "신성이엔지, ESG 평가 첫 AA등급...1년 새 204계단 상승",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 22,
              "title": "신성이엔지, ESG 평가 첫 AA등급...1년 새 204계단 상승",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374890"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 29,
          "name": "감사 부담 덜고 업무도 소신껏…한수원, 적극행정 확산",
          "easy": "",
          "quote": "감사 부담 덜고 업무도 소신껏…한수원, 적극행정 확산",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 23,
              "title": "감사 부담 덜고 업무도 소신껏…한수원, 적극행정 확산",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374889"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 30,
          "name": "“수소환원제철에 원전 대부분 쓸 판…해법은 원자로 열”",
          "easy": "",
          "quote": "“수소환원제철에 원전 대부분 쓸 판…해법은 원자로 열”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 24,
              "title": "“수소환원제철에 원전 대부분 쓸 판…해법은 원자로 열”",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374885"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 31,
          "name": "베스타스, 동국S&C와 25년 동행...국내 공급망 협력 넓힌다",
          "easy": "",
          "quote": "베스타스, 동국S&C와 25년 동행...국내 공급망 협력 넓힌다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 25,
              "title": "베스타스, 동국S&C와 25년 동행...국내 공급망 협력 넓힌다",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374887"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 32,
          "name": "BHP·리오틴토 임원진, 철광석 갈등 속 중국 지도부와 회동",
          "easy": "",
          "quote": "BHP·리오틴토 임원진, 철광석 갈등 속 중국 지도부와 회동",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 26,
              "title": "BHP·리오틴토 임원진, 철광석 갈등 속 중국 지도부와 회동",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2180710"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 33,
          "name": "롯데 바이오 승부수 첫 결실…롯데바이오로직스 송도 1공장 준공",
          "easy": "",
          "quote": "롯데 바이오 승부수 첫 결실…롯데바이오로직스 송도 1공장 준공",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 28,
              "title": "롯데 바이오 승부수 첫 결실…롯데바이오로직스 송도 1공장 준공",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2180705"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 34,
          "name": "KB증권 베트남법인 계좌 ’비정상 출금’...\"여러 가능성, 경위 파악\"",
          "easy": "",
          "quote": "KB증권 베트남법인 계좌 ’비정상 출금’...\"여러 가능성, 경위 파악\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 29,
              "title": "KB증권 베트남법인 계좌 ’비정상 출금’...\"여러 가능성, 경위 파악\"",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2180708"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 35,
          "name": "LG전자 ’시스템 아이어닝’, 인간공학디자인상 최고상 수상",
          "easy": "",
          "quote": "LG전자 ’시스템 아이어닝’, 인간공학디자인상 최고상 수상",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 30,
              "title": "LG전자 ’시스템 아이어닝’, 인간공학디자인상 최고상 수상",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2180707"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 36,
          "name": "[삼부토건 정상화 시험대②] 공공입찰 복귀·새 투자자 유치…거래재개 위한 ’3대 개선책’ 제시",
          "easy": "",
          "quote": "[삼부토건 정상화 시험대②] 공공입찰 복귀·새 투자자 유치…거래재개 위한 ’3대 개선책’ 제시",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 31,
              "title": "[삼부토건 정상화 시험대②] 공공입찰 복귀·새 투자자 유치…거래재개 위한 ’3대 개선책’ 제시",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2180704"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 37,
          "name": "BS한양 ’수자인’, 청량리·청라·김포 이어 세종에 2316가구 공급",
          "easy": "",
          "quote": "BS한양 ’수자인’, 청량리·청라·김포 이어 세종에 2316가구 공급",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 32,
              "title": "BS한양 ’수자인’, 청량리·청라·김포 이어 세종에 2316가구 공급",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2180696"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 38,
          "name": "모더나, 고위험 영유아·소아용 코로나19 백신 1000도즈 국내 공급",
          "easy": "",
          "quote": "모더나, 고위험 영유아·소아용 코로나19 백신 1000도즈 국내 공급",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 33,
              "title": "모더나, 고위험 영유아·소아용 코로나19 백신 1000도즈 국내 공급",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2180697"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 39,
          "name": "GC녹십자엠에스, 한타바이러스 신속·분자진단 키트 수출허가",
          "easy": "",
          "quote": "GC녹십자엠에스, 한타바이러스 신속·분자진단 키트 수출허가",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 34,
              "title": "GC녹십자엠에스, 한타바이러스 신속·분자진단 키트 수출허가",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2180702"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 40,
          "name": "\"자산운용사가 해킹 약한 고리 될 수도\"…100여개 운용사 보안 점검",
          "easy": "",
          "quote": "\"자산운용사가 해킹 약한 고리 될 수도\"…100여개 운용사 보안 점검",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 35,
              "title": "\"자산운용사가 해킹 약한 고리 될 수도\"…100여개 운용사 보안 점검",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2180706"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 41,
          "name": "일본 10월 무역적자 축소…수출, 예상치 상회",
          "easy": "",
          "quote": "일본 10월 무역적자 축소…수출, 예상치 상회",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 36,
              "title": "일본 10월 무역적자 축소…수출, 예상치 상회",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-2180662"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 42,
          "name": "영국 2026년 3분기 시간당 노동생산성 2.5% 증가",
          "easy": "",
          "quote": "영국 2026년 3분기 시간당 노동생산성 2.5% 증가",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 37,
              "title": "영국 2026년 3분기 시간당 노동생산성 2.5% 증가",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-2179201"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 43,
          "name": "유로존 인플레이션, 에너지 충격으로 2027년까지 3% 상회 전망",
          "easy": "",
          "quote": "유로존 인플레이션, 에너지 충격으로 2027년까지 3% 상회 전망",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 38,
              "title": "유로존 인플레이션, 에너지 충격으로 2027년까지 3% 상회 전망",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-2179194"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 44,
          "name": "이탈리아 10월 물가상승률 5.5%…에너지 가격 상승에 예상치 상회",
          "easy": "",
          "quote": "이탈리아 10월 물가상승률 5.5%…에너지 가격 상승에 예상치 상회",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 39,
              "title": "이탈리아 10월 물가상승률 5.5%…에너지 가격 상승에 예상치 상회",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-93CH-2179154"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 45,
          "name": "영국 실업률 4.6%로 하락…고용시장 냉각 신호는 여전",
          "easy": "",
          "quote": "영국 실업률 4.6%로 하락…고용시장 냉각 신호는 여전",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 40,
              "title": "영국 실업률 4.6%로 하락…고용시장 냉각 신호는 여전",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-2179001"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 46,
          "name": "Citi, 2027년 브라질 헤알화 달러당 5.50헤알로 약세 전망",
          "easy": "",
          "quote": "Citi, 2027년 브라질 헤알화 달러당 5.50헤알로 약세 전망",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 46,
              "title": "Citi, 2027년 브라질 헤알화 달러당 5.50헤알로 약세 전망",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-93CH-2179375"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 47,
          "name": "파운드화, 5연속 하락 마감 전망…영국 실업률 4.6%로 하락",
          "easy": "",
          "quote": "파운드화, 5연속 하락 마감 전망…영국 실업률 4.6%로 하락",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 47,
              "title": "파운드화, 5연속 하락 마감 전망…영국 실업률 4.6%로 하락",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-2179130"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 48,
          "name": "미 국채 수익률, 한 달 만의 최고치 부근서 숨 고르기",
          "easy": "",
          "quote": "미 국채 수익률, 한 달 만의 최고치 부근서 숨 고르기",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 48,
              "title": "미 국채 수익률, 한 달 만의 최고치 부근서 숨 고르기",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-2179096"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 49,
          "name": "달러, 19개월 만의 최고치 찍고 하락…5거래일 연속 상승 마감 전망",
          "easy": "",
          "quote": "달러, 19개월 만의 최고치 찍고 하락…5거래일 연속 상승 마감 전망",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 49,
              "title": "달러, 19개월 만의 최고치 찍고 하락…5거래일 연속 상승 마감 전망",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-2178767"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 50,
          "name": "태백시, 한국전력공사 태백지사와 ‘청정 스마트 축산 산단’ 조성 업무협약 체결",
          "easy": "",
          "quote": "태백시, 한국전력공사 태백지사와 ‘청정 스마트 축산 산단’ 조성 업무협약 체결",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 56,
              "title": "태백시, 한국전력공사 태백지사와 ‘청정 스마트 축산 산단’ 조성 업무협약 체결 - 영서신문",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE9aUThueTVyTmxRXzdTY1V2YjdPbXZWdExBU1RaOGRSUWg2RXJ4MVVKdGxJNjhlWGdOTE1mZVBDWlZvQ3hhSnJQQzh6YkRHanlIekJtVlVweHk0S0RhTkZIZDVIQUF1MDJLU2lR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 51,
          "name": "한전기술, 협력사 37곳과 AI 품질경영 모색…우수기업 6곳 선정",
          "easy": "",
          "quote": "한전기술, 협력사 37곳과 AI 품질경영 모색…우수기업 6곳 선정",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 57,
              "title": "한전기술, 협력사 37곳과 AI 품질경영 모색…우수기업 6곳 선정 - 경북일보",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9ndUpiMGpyWGxweU83eUQ3WVhNbUxnckJ1MW9SM2liQzJjcWxRTGJYdm0yYm5fTU5wRDhlX0FIOF91MHllZ1FoejRpVk5BVWx6dW4zLTR4WjZWc28xNEZfU19nTGQwUHgyTldJOHZrMA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 52,
          "name": "[에너지 NOW] 한국전력, 한국수력원자력, 한국남동발전",
          "easy": "",
          "quote": "[에너지 NOW] 한국전력, 한국수력원자력, 한국남동발전",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 58,
              "title": "[에너지 NOW] 한국전력, 한국수력원자력, 한국남동발전 - 위키리크스한국",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5BRW1qUW5HWmNsRW0teEp2MFVwTy1oa2F1ZnFycGtJeC1uYVpLZEo0MjJxVkQzbXFGWjBiWkpVeTBUaGZKSmNfbXVKYUNESVNybXNlYWxDeGhJX3VsVXJwNnNhOGpyS2RxcUMyUkd2cms?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 53,
          "name": "한수원, 체코 규제기관과 두코바니 원전 품질관리 첫 점검",
          "easy": "",
          "quote": "한수원, 체코 규제기관과 두코바니 원전 품질관리 첫 점검",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 59,
              "title": "한수원, 체코 규제기관과 두코바니 원전 품질관리 첫 점검 - 일간투데이",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE5oWlBnQm5SMWktazdwOVRiejJ4NFdnbjloZ2RkNmVkYm0zSi1uTjdHeXlvYXZreEU4TUVHUXN3ME9mOVdORXpJUzZhc2VqM0E1QzBBRU9CLUE3ejMxN2dVTV9vdzlVRGJHcEc0?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 54,
          "name": "계룡시, 유관기관 합동 가을철 산불진화 통합훈련 실시",
          "easy": "",
          "quote": "계룡시, 유관기관 합동 가을철 산불진화 통합훈련 실시",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 60,
              "title": "계룡시, 유관기관 합동 가을철 산불진화 통합훈련 실시 - 한국시사경제",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1LcndNRTZzUlhNM2NnSkdQc3ZUWVNaa3lNQ05RTGV4ckJPSC1XRDd2Z29mY2ZCR09FTDZMNTBuT1A5R2ZjRFNibXAzSHNyeUlSV3Q5VWVEclE4eDhmSEZNR1REVS1MUWo5RkE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 55,
          "name": "[주식도락] 푹 꺼진 한국전력 주가…증권가 눈높이도 '뚝'",
          "easy": "",
          "quote": "[주식도락] 푹 꺼진 한국전력 주가…증권가 눈높이도 '뚝'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 61,
              "title": "[주식도락] 푹 꺼진 한국전력 주가…증권가 눈높이도 '뚝' - 뉴스드림",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTFBETmpfT3UtMDlndHkyQTR0Y0pKbDYwZ01pRElHN2NkRXd1X2owdnIwb0l0eFh1RGotMTF2bTJsTGVLVVRyVXktNjBLWl9UREVvYm1HeVZ4cTYtOE1tZUN2VjFBaEdWeGJsejlB0gFuQVVfeXFMTkN3aVhBcDEzVjRNTC0zSFgxYTc1V3lpMGJvUXhCZmNMQ1lrazkzX3JpQ3lfNmUyYlVaNVRCTmFfNTZqdjJTZGpTVXRhVmVMRXA3OXN1b3c1NXF0dU1jeTNJYkVNUXZaTDZ5SGRRX0E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 56,
          "name": "방글라데시 루푸르 원전 첫 송전…350MW 전력망 연결 성공",
          "easy": "",
          "quote": "방글라데시 루푸르 원전 첫 송전…350MW 전력망 연결 성공",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 64,
              "title": "방글라데시 루푸르 원전 첫 송전…350MW 전력망 연결 성공 - 에너지안전신문",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE0xUFpMOS1mWnlna2hPWk9Jcnpfa3doWFdZSFQtTk12ODBvb2VwOXV2SURjalh4TjZzaUNYaEFxN0g2R1JrM2luUkJib1dIUHZXMFlELUFpNHE2U1dqblVZREJJd3g?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 57,
          "name": "[사이테크+] AI 데이터센터 급증에…\"미국 변압기·전력설비 공급난 경고\"",
          "easy": "",
          "quote": "[사이테크+] AI 데이터센터 급증에…\"미국 변압기·전력설비 공급난 경고\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 65,
              "title": "[사이테크+] AI 데이터센터 급증에…\"미국 변압기·전력설비 공급난 경고\" - 연합뉴스",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1zaUkxUEVWSUlzd3ZaOGdQWi1MRnptdEY1bHFSWlB1UGdoZXluUjBsQU45WXQ2dEJ5MkhBaFdZc3hZc3c2ZFFoemp6WEVnRXlrbTlnaUNYcnRfbmlYQXM4ddIBYEFVX3lxTE1zaUkxUEVWSUlzd3ZaOGdQWi1MRnptdEY1bHFSWlB1UGdoZXluUjBsQU45WXQ2dEJ5MkhBaFdZc3hZc3c2ZFFoemp6WEVnRXlrbTlnaUNYcnRfbmlYQXM4dQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 58,
          "name": "용인 반도체 클러스터, 초기 전력망 구축 착착…팹 증설 맞춰 공급 앞당긴다[대한민국 전기국가 2035⑥]",
          "easy": "",
          "quote": "용인 반도체 클러스터, 초기 전력망 구축 착착…팹 증설 맞춰 공급 앞당긴다[대한민국 전기국가 2035⑥]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 66,
              "title": "용인 반도체 클러스터, 초기 전력망 구축 착착…팹 증설 맞춰 공급 앞당긴다[대한민국 전기국가 2035⑥] - 이투데이",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE1zdk1reEJNMFBnV3BjSF9mb3lsUnZuSWtsUm1OWmdDdGgtcGtTWVo4YV8tcms0ZVRna19rYjBLT1lBak82YUwxdVNiUDhDellTMXJpbg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 59,
          "name": "해남군의회·농민단체 “송전선로보다 ‘지산지소’ 전력망 구축이 먼저”",
          "easy": "",
          "quote": "해남군의회·농민단체 “송전선로보다 ‘지산지소’ 전력망 구축이 먼저”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 67,
              "title": "해남군의회·농민단체 “송전선로보다 ‘지산지소’ 전력망 구축이 먼저” - 서울뉴스통신",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE5tX1p3VDg2blVneWRCQklkdm9GdmstYk9vLXlRWWlkQ0NBbDZ6ZTRaU3RPUTAyd3BNdS0yOWZVaDB0T0JfMnJKczV6UVB3V1ZuaTJoa19rX25Qbm1Zc0xHYldZbGdGTktpMF9z?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 60,
          "name": "혜택은 용인, 송전탑·비용은 지방에?…주민 571명 공익감사 청구",
          "easy": "",
          "quote": "혜택은 용인, 송전탑·비용은 지방에?…주민 571명 공익감사 청구",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 68,
              "title": "혜택은 용인, 송전탑·비용은 지방에?…주민 571명 공익감사 청구 - 파인드비",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE1wYlF2bUVxOUtoNTlLS2NxTzRTazUySjVvQW5fRjVhb3M1X3kxazJPc2VHSWdaV2RvQ3g0Y3JGQjNyM3hMVk5qQkdkbGFya01ySTQ2aFpDTUxBUFNuTHdtSEFrN0NHZ9IBakFVX3lxTE1UWXBMQXZyVkwwUUhoRnRCUHpkNThfRjd3Q2ZITjVEZ2ZKTm5nM1BwcDN0VE5qd19pVFFvRktONUw1ZjRfWWgwZjZIZGJtM2hwc3VGSXE3UXpPQjJJUkVXMncyRzB4emRKa1E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 61,
          "name": "폭염 때는 송전망 용량도 줄어… 전력망 설계에 ‘기후리스크’ 반영해야",
          "easy": "",
          "quote": "폭염 때는 송전망 용량도 줄어… 전력망 설계에 ‘기후리스크’ 반영해야",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 69,
              "title": "폭염 때는 송전망 용량도 줄어… 전력망 설계에 ‘기후리스크’ 반영해야 - 에너지경제신문",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9TVmFFdWNYekRDVEVhcnQ3N19rY1NHcW5OTEhHMFk3VjBiTTY3MjM3MWxyVmM2dmtjSGYtb296Z2RyT0JHZEdjNFNzTEdJZ2l1MDB4aWVZZXVBVWM?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 62,
          "name": "나주시, 호남권 반도체 전력망 해법 모색… 배후기지 역할 논의",
          "easy": "",
          "quote": "나주시, 호남권 반도체 전력망 해법 모색… 배후기지 역할 논의",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 70,
              "title": "나주시, 호남권 반도체 전력망 해법 모색… 배후기지 역할 논의 - 천지일보",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBaRXlQNjVFYURrWk55eWF1RUVhdjI2SThsY3ZJOGo4Z3Ztc080ZG5yRnU5Zm51eG1CbXpxVjVwWDlrZU5mNVp2OGJESHdjdkNQR19zV0huVUlXSTZkSUFnZ2dwcHA3NHp0SXc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 63,
          "name": "청정전기 넘치고 저렴해도 송전 못하면 ‘무용지물’",
          "easy": "",
          "quote": "청정전기 넘치고 저렴해도 송전 못하면 ‘무용지물’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 71,
              "title": "청정전기 넘치고 저렴해도 송전 못하면 ‘무용지물’ - 남도일보",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBkQnIxaDJjQXNmTE53Y3VuM01jNy1OYnVRTkI1Vk5ZdHFSV3lNNFRDMG5JRWFONm5jSlZYUnhxZ1VmRHp5YVlQQ3pnSHJBVFJlaXlYTzZkd1MyZFd0UVR2eDA2eU1GWGJ4Q0g2dNIBcEFVX3lxTE9xZUlqVGx1SDdqd05zNmtPNGhXeVFGZWZvN3VuN1VGQ0hwUDc5ckEtS181eXk3NG5LQXh6djY1OVN6RnJlZVVEbWZDazFwemhDRHBUYl9DeTVDRkpuZXY3X3JsTjJDc0VDZ3UzV0d0WlE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 64,
          "name": "전북수출 10개월 연속 증가세",
          "easy": "",
          "quote": "전북수출 10개월 연속 증가세",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 74,
              "title": "전북수출 10개월 연속 증가세 - 전북중앙",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE5ScWJqUWtDNG5IdnYtVDhabnJPTUNvWnZwV0dvVmlNeUR5QUlQUDN3VTJsdWdZS0UyRXllMVAtQXFKLVlfSkxpNkk5NnoyUFVlbE5ZYTI0ZTgweElDbll5b0xLTWhFUExKd2pV0gFrQVVfeXFMTlJxYmpRa0M0bkh2di1UOFpuck9NQ29adnBXR29WaU15RHlBSVBQM3dVMmx1Z1lLRTJFeWUxUC1BcUotWV9KTGk2STk2ejJQVWVsTllhMjRlODB4SUNuWXlvTEtNaEVQTEp3alU?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 65,
          "name": "변압기 이어 차단기·HVDC까지…전력기기 3사, 성장축 다변화",
          "easy": "",
          "quote": "변압기 이어 차단기·HVDC까지…전력기기 3사, 성장축 다변화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 76,
              "title": "변압기 이어 차단기·HVDC까지…전력기기 3사, 성장축 다변화 - 미디어펜",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE8xd25hQkVrbTdvcVRRYk9yRUdqTVd2aHB4VEh0MXpQcXU2X1psN2QyZlBLVHRVT01FQjlxb0otMkZZdEFtRG0zeHpIa2I0aGFYY3FxOHFCR3jSAVhBVV95cUxPMXduYUJFa203b3FUUWJPckVHak1XdmhweFRIdDF6UHF1Nl9abDdkMmZQS1R0VU9NRUI5cW9KLTJGWXRBbURtM3h6SGtiNGhhWGNxcThxQkd4?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 66,
          "name": "효성중공업, SKT AI 데이터센터에 초고압 전력설비 공급",
          "easy": "",
          "quote": "효성중공업, SKT AI 데이터센터에 초고압 전력설비 공급",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 77,
              "title": "효성중공업, SKT AI 데이터센터에 초고압 전력설비 공급 - 디일렉",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTFBVWkRydW56ZXp3Nm1MWTZMcXB4eFFRX3FqOXc2bGVNVTNCcW0yekxLZkt2NjBfWVBrZXFVNGVOZGdLZ2VIZ3U5OUhQM014dnB3YmF1YmVXU0VmYjRZSVpIcGVPZkk4Zw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 67,
          "name": "전력·중공업·금융, 거대한 수혜의 파고와 마주하다",
          "easy": "",
          "quote": "전력·중공업·금융, 거대한 수혜의 파고와 마주하다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 78,
              "title": "전력·중공업·금융, 거대한 수혜의 파고와 마주하다 - 위클리서울",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTFB1MzJ0X0pHM1VydGV1Ty02aWZzSUV6QXE2bTlYamQxOGJ1VHRwV0hHX3gyNHBsa3BDOEV4TGdUUnMySW5ubzZoNG12MjFZcl9acnlDTzRyQnd3YkRJRHJnTDlScUhueVBQWndPRFln?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 68,
          "name": "삼성·SK, ‘AI 특수’ 美 매출 250조 ‘폭증’…中도 120조↑, ‘中 반도체 견제론’ 딜레마",
          "easy": "",
          "quote": "삼성·SK, ‘AI 특수’ 美 매출 250조 ‘폭증’…中도 120조↑, ‘中 반도체 견제론’ 딜레마",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 79,
              "title": "삼성·SK, ‘AI 특수’ 美 매출 250조 ‘폭증’…中도 120조↑, ‘中 반도체 견제론’ 딜레마 - CEO스코어데일리",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5sY0VPTjJJaFZCeEpCaU5tdjBQalpDdFhTZHpPMkZKcUVmMXJrRUxNam00X29DRGRGVG82ZGctZ2VyQ2N4Vng2MTdLbVhHX2dfeF9tdGxBVWJkNW5kWXFJMFpLZU5MTzlnRVE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 69,
          "name": "세미파이브, 차세대 로직칩 개발…\"HBM 없이 AI반도체 제조\"",
          "easy": "",
          "quote": "세미파이브, 차세대 로직칩 개발…\"HBM 없이 AI반도체 제조\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 80,
              "title": "세미파이브, 차세대 로직칩 개발…\"HBM 없이 AI반도체 제조\" - 한국경제",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5DUExxTVlPZ1FxN2RVWVpaNm41LUFCTFhSRUswUVpxTGVjUWNLbTVLbmZVYkE1emtlSDlqcEswLTR3T0JQcV9tUVYxTUVDeXFENXhaQ0kwbXBCZw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 70,
          "name": "삼성전자, 최근의 주가는 저점 다지는 중...AI 반도체 호황 타고 재도약 가능",
          "easy": "",
          "quote": "삼성전자, 최근의 주가는 저점 다지는 중...AI 반도체 호황 타고 재도약 가능",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 82,
              "title": "삼성전자, 최근의 주가는 저점 다지는 중...AI 반도체 호황 타고 재도약 가능 - 증권일보",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE12UTlvMmt1UllVVm5LcERXT0tGaEMzMlpsRVpxM3l0d3BHc05seVNhMk1KRUVadmQxSHF3S25Xd0JmZmRlLTgtZjBkaTNtWXNnS3IwU3U2ZFdPc3dUQ202MQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 71,
          "name": "AI 반도체 ‘열과의 전쟁’…칩부터 데이터센터까지",
          "easy": "",
          "quote": "AI 반도체 ‘열과의 전쟁’…칩부터 데이터센터까지",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 83,
              "title": "AI 반도체 ‘열과의 전쟁’…칩부터 데이터센터까지 - IT조선",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5jWnN0WURhLWJrVl9uN3F6OXBkM0FSXzVPQlVCNUVud3c5QS1HUEdhbHlrSDVlNUMycU0tZHpzSkhHMWk3WGhqNWYxUEItWU9WRFAwS05BMzhZRFJIYVRWM1V2aUVYQ0YzX1F2TlpTSXN5eFRq0gF0QVVfeXFMTmNac3RZRGEtYmtWX243cXo5cGQzQVJfNU9CVUI1RW53dzlBLUdQR2FseWtINWU1QzJxTS1kenNKSEcxaTdYaGo1ZjFQQi1ZT1ZEUDBLTkEzOFlEUkhhVFYzVXZpRVhDRjNfUXZOWlNJc3l4VGo?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 72,
          "name": "[특징주] 세미파이브, HBM 대체할 3D-IC 기술 공개…주가 18%대 급등",
          "easy": "",
          "quote": "[특징주] 세미파이브, HBM 대체할 3D-IC 기술 공개…주가 18%대 급등",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 84,
              "title": "[특징주] 세미파이브, HBM 대체할 3D-IC 기술 공개…주가 18%대 급등 - https://www.moneystorm.kr/",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTFB6cEdvb29mTm05RGl3YnhJWjJEdFM5R2sxTTR3NE5HNFJJMkxUQXBZb2hITFlYZ0NaYUptUmJqS3RGT2pYanpvc2s1MG9ERk5xQnpvX0Z6QzBsZEZpV0hqekdweTN5LWdUakE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 73,
          "name": "[유니테스트] HBM 테스터로 부활 날갯짓",
          "easy": "",
          "quote": "[유니테스트] HBM 테스터로 부활 날갯짓",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 85,
              "title": "[유니테스트] HBM 테스터로 부활 날갯짓 - https://technovalue.com/",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiV0FVX3lxTFAyUVdIVl82czN5OWZXQUVUSnBwTEFENkNXTWlxY1lGR0VLMFkybTNHczZYTWVzZmpwd3NmNzVCa2dKbU00TXFKNldoWjJoVUdYMlVpQ3JONA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 74,
          "name": "삼성전자, 2030년 베트남에 낸드 패키징 추가…국내는 HBM 집중",
          "easy": "",
          "quote": "삼성전자, 2030년 베트남에 낸드 패키징 추가…국내는 HBM 집중",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 86,
              "title": "삼성전자, 2030년 베트남에 낸드 패키징 추가…국내는 HBM 집중 - 한국신용신문",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE0wWkhtN1FqeWVpb2FfaWVxNTl4cDZ1OUR2bUpydjdTX2hsZEZId2luMTBfbEtqc1RPb2JhQjUtSHpXb3dleEdqX1Y4Mi11SFBRbDlkQzlmM0ZRM3ZpVmZwVUJ1MHRmWDdGY0Rj?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 75,
          "name": "SK하이닉스, AI 호황 속 생산시설 확대…안전관리 체계 강화 By EBN",
          "easy": "",
          "quote": "SK하이닉스, AI 호황 속 생산시설 확대…안전관리 체계 강화 By EBN",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 90,
              "title": "SK하이닉스, AI 호황 속 생산시설 확대…안전관리 체계 강화 By EBN - Investing.com 한국어",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE40RS1aTl94SlFCcFBGUjVSTklwNjJORHFpSkFRQmRXcDBNNkVwaVdkZXFhbmZ5RjE1M0pSZ2xUTl90R3dROG1iOWEwa3haM3JmbzlBNHpNeW1BWjRRWUJlRjF4Mmd4aVMzbFJDdzJfNy0?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 76,
          "name": "엔비디아, 메모리 확보에 장기 계약 확대…삼성·SK하이닉스에 호재 - 머니투데이",
          "easy": "",
          "quote": "엔비디아, 메모리 확보에 장기 계약 확대…삼성·SK하이닉스에 호재 - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 93,
              "title": "엔비디아, 메모리 확보에 장기 계약 확대…삼성·SK하이닉스에 호재 - 머니투데이 - 머니투데이",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBRazBhT3ZrMFg4aTZsS0luZnVSTGxEZDA4M2c2U001LWxsbjZaNlpkUlV6ZGFBWXh3amdZVTFaaVhNeVFFUk9JcXB0akkwV3plczFZcnNlTGh2VHNaS3c2UndEYXBjZTDSAWxBVV95cUxPVVNnTGRtMjQ1d0UtdEZDOVBPOFg4dXAxbVNzTkF6azJVaXdxZTlEank4Zi1OczF0RXVScmNEMFUwR1RyTzZtcE9fY1c1RVJua0FjYXJMZ3NhaWhqYmhveU1DU2tpeDUyYTBqdnc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 77,
          "name": "'AI 큰손 잡고 매출처 다변화까지'…SK하닉, 해외서 번 돈 따져보니",
          "easy": "",
          "quote": "'AI 큰손 잡고 매출처 다변화까지'…SK하닉, 해외서 번 돈 따져보니",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 94,
              "title": "'AI 큰손 잡고 매출처 다변화까지'…SK하닉, 해외서 번 돈 따져보니 - 비즈워치",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9OcmhmNHhkOVNfMmF5MmN5d08tU09KY1VnZlo5NnNZYTg0R2k2Qks1Wkhrb3NQNjVlRDl0ZnZnaHptUGVqVTluTTBxQjQ3SnN4WHJVU2FGaUduVWJ1SF94YVJSNTIzNkoySDVuQg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 78,
          "name": "8인치 단계적 철수 삼성 파운드리...韓 팹리스 \"12인치 전환 정책 시급\"",
          "easy": "",
          "quote": "8인치 단계적 철수 삼성 파운드리...韓 팹리스 \"12인치 전환 정책 시급\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 95,
              "title": "8인치 단계적 철수 삼성 파운드리...韓 팹리스 \"12인치 전환 정책 시급\" - 지디넷코리아",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBzakdwU2tscFlibGU1WkU2MWpjS1YyZ01mdVZSc1MxRVZkYmNiTy1pUWg3MjhYWlpNRTVsQzNiNDhhWFc2eU1QTW83aE5RX2lnVkUyOG5n?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 79,
          "name": "[단독] 호남 반도체 공장 ‘南전北닉’으로 결정",
          "easy": "",
          "quote": "[단독] 호남 반도체 공장 ‘南전北닉’으로 결정",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 96,
              "title": "[단독] 호남 반도체 공장 ‘南전北닉’으로 결정 - 조선일보",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMijwFBVV95cUxPZkZ4VUJ5YzNPem5Gb0dET3p5TjBxRHhtMXhFZGZuVV9VcDZqWWVNbmwxU1hUMTM0dWJQQnVRUGRZUDFmU1lzTEtuZnVZbVBJWk9tMmJxMmZ5RkJubV8xbzdMSW5FdW56WU4ydHU5c1MxRUlfWW42RVd1bVNuWHRnVmVsRnNYQXVlbG5JODY2aw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 80,
          "name": "삼성전자·SK하이닉스 날개 단 수출 '1조 달러' 눈앞…반도체 50% 육박",
          "easy": "",
          "quote": "삼성전자·SK하이닉스 날개 단 수출 '1조 달러' 눈앞…반도체 50% 육박",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 97,
              "title": "삼성전자·SK하이닉스 날개 단 수출 '1조 달러' 눈앞…반도체 50% 육박 - 파이낸셜포스트",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE1yV0lrekgtNlVCcjBKa1BQbzlpVmZ2TWRuY2JmRVlPbEN5MkxEUkQwTXIzdmVLT1hQN1NPRVp1QmZJT1R5V1dlZHhzMjdWRjdoM3BLTW80ZFpma2VneWFPTzU1UHVzaE5zQ05pSnNYd3RTRlFn?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 81,
          "name": "삼성전자 ‘큰손’ 의존 커졌다…5大 고객사 비중 24%",
          "easy": "",
          "quote": "삼성전자 ‘큰손’ 의존 커졌다…5大 고객사 비중 24%",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 98,
              "title": "삼성전자 ‘큰손’ 의존 커졌다…5大 고객사 비중 24% - 대한경제",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTFBCRklwVzhLOUZJMDA5UVNQX3Zvc1I3NlhpTHE5ZUpIREJ3Y2xoNktEamUtWDNCdG45WHJHdU1QUmV4NF9uOTFoTTdUbGRwS29yRlhLX1dfUnd2NFJMaklYMnRzM2s1QVBoVjFCNVhBWC14YzA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 82,
          "name": "미래컴퍼니, 삼성전자 반도체 장비 계약…매출 5.11%",
          "easy": "",
          "quote": "미래컴퍼니, 삼성전자 반도체 장비 계약…매출 5.11%",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 99,
              "title": "미래컴퍼니, 삼성전자 반도체 장비 계약…매출 5.11% - 비건뉴스",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE1vZTZ4X3pfLVdXSHlQRWJXa1QxWWdHT25QZmZaR21yakRybkhVdG50aFNEQU1XRzlCTUY4d2VVcU5VdDBvRkdQbmpCc1pDY2dCdWplaWlFN1RDeDBKQTJXZURRS2JKUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 83,
          "name": "[속보] 엔비디아 \"삼성전기와 패키지 기판 공급 계약 새롭게 체결\"",
          "easy": "",
          "quote": "[속보] 엔비디아 \"삼성전기와 패키지 기판 공급 계약 새롭게 체결\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 103,
              "title": "[속보] 엔비디아 \"삼성전기와 패키지 기판 공급 계약 새롭게 체결\" - 한국경제",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFAyU0JLUDJiVDJtaGp4RkpjWXdRcHVWalJHazFONU9KN3MtZVNzbTU1SGlwRVBta2lvdllhcDFaRXdrVEk1bVl1dC1QVnBPM1NHTncweXVaMUtuQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 84,
          "name": "美뉴욕전력청, 신규 원전 사업자 후보 10곳 선정…현대건설·DL이앤씨 협력 SMR 기업 다수 포함 By The Guru",
          "easy": "",
          "quote": "美뉴욕전력청, 신규 원전 사업자 후보 10곳 선정…현대건설·DL이앤씨 협력 SMR 기업 다수 포함 By The Guru",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 108,
              "title": "美뉴욕전력청, 신규 원전 사업자 후보 10곳 선정…현대건설·DL이앤씨 협력 SMR 기업 다수 포함 By The Guru - Investing.com 한국어",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5mVnVSNjllMUxuWDdQN0RYeVNUZHJmWjBRU0lrQUJmNnBCTG9NTUZQN3dqaUQtc0pudGxYaUlQNExnd1VBR0FIY09hZDdnUzMteENwUGZEYkZZdjdIeTNwWk5uS1JYT05xNDRYYzZFYXA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 85,
          "name": "“유럽 SMR 시장, 韓 원전기업에 새로운 기회 열린다”",
          "easy": "",
          "quote": "“유럽 SMR 시장, 韓 원전기업에 새로운 기회 열린다”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 109,
              "title": "“유럽 SMR 시장, 韓 원전기업에 새로운 기회 열린다” - 인사이트N파워",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE00aEswbFNzaUJYeTJPcWEyQ3pmUTEwVDRtejFHR0lDZVNJeFY3MU9QX3RkZG5rREtVS0hQV24zN0E5T3gta0FQSWdrbEFvOUZVWFVTNGFLRTNMUjR5VWJWQmVkVmNYQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 86,
          "name": "경남 원전기업들, 미국·유럽 SMR 시장 진출 속도",
          "easy": "",
          "quote": "경남 원전기업들, 미국·유럽 SMR 시장 진출 속도",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 112,
              "title": "경남 원전기업들, 미국·유럽 SMR 시장 진출 속도 - 매일경제",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiRkFVX3lxTE5HUklTX3ZMZmltLXF0LXlpcHFvcUFVTFFkS0hsQl9GYjZudzIxYjU1SjJwbGU1R0tPMkVxeTctZTVHOVYzZ1E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 87,
          "name": "삼성SDI \"ESS 물량, 2031년까지 확보\" - 머니투데이",
          "easy": "",
          "quote": "삼성SDI \"ESS 물량, 2031년까지 확보\" - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 118,
              "title": "삼성SDI \"ESS 물량, 2031년까지 확보\" - 머니투데이 - 머니투데이",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5RMmU1ZTVoY3U0T3J5d2lzSEd2TWJYd25Nc3VURlVBWi1kcVl3cml5N21XanRtdlFxTzh4WF9KNldiZUNheTEzYWhOSGZIZXFITG5OQlVrcWhGa1dVS3VKNFVKMlpOM0xSMC1oVdIBckFVX3lxTE92SEFMZDRoTXJwN2RTWnJMS29kamNCRnVFci16a1lsYnhkbGxQc1l6bGJtUWY4cGpxeEptSDBENmF5VXNzcC1VcEVvVTg2THZRWFY4QTloenREUjFHLV96SUtWdFFtYWEyUl9SV2ZlRFNYdw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 88,
          "name": "트리나스토리지, BloombergNEF ESS Tier 1 명단 12분기 연속 선정",
          "easy": "",
          "quote": "트리나스토리지, BloombergNEF ESS Tier 1 명단 12분기 연속 선정",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 119,
              "title": "트리나스토리지, BloombergNEF ESS Tier 1 명단 12분기 연속 선정 - 산업일보",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiREFVX3lxTE15WElXVUliTngyS3NyYmpYX2ZFOUpKR1VXUjBERnFIR3kwaFB5eTN2Snh2S3RVM18xZE5SVmoySmRCcXhZ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 89,
          "name": "[전력망에 갇힌 재생e] 전력망 확충만으론 부족…AI·ESS 활용한 수급 조절 해법 부상",
          "easy": "",
          "quote": "[전력망에 갇힌 재생e] 전력망 확충만으론 부족…AI·ESS 활용한 수급 조절 해법 부상",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 120,
              "title": "[전력망에 갇힌 재생e] 전력망 확충만으론 부족…AI·ESS 활용한 수급 조절 해법 부상 - 아주경제",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBHNVJ1ZjI1MUtOSVBkdm9ESTJubTJrRXJKZGJuZndQYTVza0J6SmN4cDEwZnR2aFVxM1B5Q3FiNGp3U3ZUbnJkMTB3LWhBZEJLdjRHeHpjMzDSAVhBVV95cUxQRzVSdWYyNTFLTklQZHZvREkybm0ya0VySmRibmZ3UGE1c2tCekpjeHAxMGZ0dmhVcTNQeUNxYjRqd1N2VG5yZDEwdy1oQWRCS3Y0R3h6YzMw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 90,
          "name": "LG엔솔·삼성SDI, 올해 설비투자 5.7조 '돌파'…\"생산 확대로 ESS 수요 선점\"",
          "easy": "",
          "quote": "LG엔솔·삼성SDI, 올해 설비투자 5.7조 '돌파'…\"생산 확대로 ESS 수요 선점\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 122,
              "title": "LG엔솔·삼성SDI, 올해 설비투자 5.7조 '돌파'…\"생산 확대로 ESS 수요 선점\" - 뉴시스",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTE4yMmh2aE5zSzU0cndzNnlmYjVybFlBWGZzLTlfR3hCLWdvY0VLM044N1Vjc2kwRWdpMGc3SVJ0T0U5TG9oR1JoSGpTVWJKR09mMG1qVXRqMnItVzN0dVVxZE9rbDAzb3VseFZoRU5reHdEakRDRVFOV9IBeEFVX3lxTE4yMmh2aE5zSzU0cndzNnlmYjVybFlBWGZzLTlfR3hCLWdvY0VLM044N1Vjc2kwRWdpMGc3SVJ0T0U5TG9oR1JoSGpTVWJKR09mMG1qVXRqMnItVzN0dVVxZE9rbDAzb3VseFZoRU5reHdEakRDRVFOVw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 91,
          "name": "고양도시관리공사, 국내 최초 공유형 ESS 구축 '2026 한국에너지대상' 수상",
          "easy": "",
          "quote": "고양도시관리공사, 국내 최초 공유형 ESS 구축 '2026 한국에너지대상' 수상",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 123,
              "title": "고양도시관리공사, 국내 최초 공유형 ESS 구축 '2026 한국에너지대상' 수상 - 일간경기",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5ERjhJU1E1OW9FOWtGRXpzX085dFVZX1RJWXFNenNiYUE1eGtfeENoVXRiTkhGS254NlN3RThONXl4RmFTUkZnenpyelM2ZWRyTmk1ZlVjYW9ZR2V6enV5YzB2S1JzSnc1?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 92,
          "name": "[단독] 정부, ‘지역별 전기 도매가 차등화’ 개편 보류...발전사 강력 반발에 제동",
          "easy": "",
          "quote": "[단독] 정부, ‘지역별 전기 도매가 차등화’ 개편 보류...발전사 강력 반발에 제동",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 124,
              "title": "[단독] 정부, ‘지역별 전기 도매가 차등화’ 개편 보류...발전사 강력 반발에 제동 - 매일경제 마켓",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5CeXkzOGk0NnpacmdDUm96emVMeFpXMDd4czRKTDNzWDhVQkp1dFR3OEtYV2RSbWFyNDVmbllJZjc2dGFLWjNkaGx5eHY5NHdEN2c?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 93,
          "name": "[에너지가 지역을 바꾼다]⑥ 똑똑해진 도시, 전기요금도 줄었을까",
          "easy": "",
          "quote": "[에너지가 지역을 바꾼다]⑥ 똑똑해진 도시, 전기요금도 줄었을까",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 125,
              "title": "[에너지가 지역을 바꾼다]⑥ 똑똑해진 도시, 전기요금도 줄었을까 - 에너지신문",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE1CQXdhd19JdmZfejNwTGlXWGVRU0QwNldlYmlQaWNFN2s1STBfMHVQOWhmNTRWQ0VIX042dnhfQzVVYzIzSldxczBTbDBIdlJSZlNjZmJEQTZidG1icnF2UmN1QVU2b1JWQnZWYUFNRHdoQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 94,
          "name": "“수도요금 올리고, 기업엔 더 받아야”…물값 개편론 부상",
          "easy": "",
          "quote": "“수도요금 올리고, 기업엔 더 받아야”…물값 개편론 부상",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 128,
              "title": "“수도요금 올리고, 기업엔 더 받아야”…물값 개편론 부상 - 기후에너지데이터뱅크",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE95SkhtWTN5N1NtY0xOajQ2alhQdUMxNTc2NnBQZ1N0US13NDdsc0NoQ1pLaUEtOFkxeHpUUmpIazFZcGRzUlJ4aVNZZERIbTRPUFBkZ2ZDT2pXZzBnN0E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 95,
          "name": "R]\"산업용 전기요금 낮춰달라\"..현대제철 노·사 한목소리",
          "easy": "",
          "quote": "R]\"산업용 전기요금 낮춰달라\"..현대제철 노·사 한목소리",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 129,
              "title": "R]\"산업용 전기요금 낮춰달라\"..현대제철 노·사 한목소리 - 안동MBC",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1leEhvVzYxN0tpNnVMcWxUMGIxa09aeWtTSXBwaDhZU014eFJHOXV0R2R4b0U2RUNyVGxHS0FiSDVRRjQ2TkNtYng3REJBQWZ5T3JTcjYtTXc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 96,
          "name": "목포시, 착한가격업소 61곳 운영…전기요금 최대 21만원 지원",
          "easy": "",
          "quote": "목포시, 착한가격업소 61곳 운영…전기요금 최대 21만원 지원",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 131,
              "title": "목포시, 착한가격업소 61곳 운영…전기요금 최대 21만원 지원 - 더파워",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMifkFVX3lxTFBzSUZyOEVCWElpVVVuSjlsRGwycmdBaUx0UVNtUmVrWVpwNjdGNDBJVHRhaWNJUmlmMDRCd3d6NGxZVGlqakhlNENMWUxiREdnb3RWNXVrVXVFTGdHUFhpUWtiNF9IeWE3Nm0wM0xocm1BNEg3aDlKTXdTZHI5Zw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 97,
          "name": "美 데이터센터 전력 대란..삼성·SK하이닉스도 ‘먹구름’, 왜?",
          "easy": "",
          "quote": "美 데이터센터 전력 대란..삼성·SK하이닉스도 ‘먹구름’, 왜?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 133,
              "title": "美 데이터센터 전력 대란..삼성·SK하이닉스도 ‘먹구름’, 왜? - 데일리카",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMidkFVX3lxTE1kbmxkdGFfY2E2M2xhLXVPenR6a2x4QVFBWTNZU2Jhcjk5ZUVWY2RuOXN0RDNiWnZwdDJmSkRyWUZxcV9NNlA1NDB5QnRFd01JclU4WV9uTVFhTTFBYTVQeDFvOXVETnY4MzRCNXNfcUFCdGlDN3c?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 98,
          "name": "수십 메가와트 요동치는 AI 데이터센터 전력망, GE 버노바의 제철소 기술이 잡는다",
          "easy": "",
          "quote": "수십 메가와트 요동치는 AI 데이터센터 전력망, GE 버노바의 제철소 기술이 잡는다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 134,
              "title": "수십 메가와트 요동치는 AI 데이터센터 전력망, GE 버노바의 제철소 기술이 잡는다 - https://www.2news.co.kr/",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBEQngyNHpmd2N6bS1NQV9FM2w4Z0dhbzdLM0FsdjUtdGhXenh1RUdheUZiWDd1NURnS2pXMGFoZGFqY2lWekY0aEtWLVhmVi1iZkMzY0tHRGpSbW9Td29xS29PdTFGZ2I0?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 99,
          "name": "나노, 북미 AI 데이터센터용 촉매 생산 확대…내년부터 공급",
          "easy": "",
          "quote": "나노, 북미 AI 데이터센터용 촉매 생산 확대…내년부터 공급",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 136,
              "title": "나노, 북미 AI 데이터센터용 촉매 생산 확대…내년부터 공급 - 헬로티",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFBWNTBsOEhxN1dpcnh0ZmV6cld0NkZ4X09NX3ptbFRZVG50RmtTTEo1M2ZUQ0tweWxEc3FqRmpxV2NMLVM3bFE4RE9NbldnRnBQTFJqeFc5WS04VHMxRmNJ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 100,
          "name": "\"데이터센터 새는 전력 확 잡는다\"…ABB 모터 제어 기술의 변신",
          "easy": "",
          "quote": "\"데이터센터 새는 전력 확 잡는다\"…ABB 모터 제어 기술의 변신",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 137,
              "title": "\"데이터센터 새는 전력 확 잡는다\"…ABB 모터 제어 기술의 변신 - 지디넷코리아",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9qOXMtUk9jWW1LZ1hqZlJCVEJENVVBNTZUTlAwNl9uMU1Fdk9mVzVIUXRtcWRqME5BZjZhOURHZm9FT2pCS0JkT01tbFZhQXh4dmhJbWVR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 101,
          "name": "3배 폭등한 천연가스…유럽이 사고치게 된 이유",
          "easy": "",
          "quote": "3배 폭등한 천연가스…유럽이 사고치게 된 이유",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 139,
              "title": "3배 폭등한 천연가스…유럽이 사고치게 된 이유 - 네이버페이 머니스토리",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE9LT2VkSUtrbVdLVmNlcWFaTUJscEY0MFFQQlJTLVhUdkwzUTZfb09mMnZiYzNVRmtJZkRtYnNhQVJMU2UwMmprdFZaSTM5bl9Kanc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 102,
          "name": "[이슈 : 정치적 변수 맞닥뜨린 알래스카 LNG 사업… 한국의 선택은]",
          "easy": "",
          "quote": "[이슈 : 정치적 변수 맞닥뜨린 알래스카 LNG 사업… 한국의 선택은]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 140,
              "title": "[이슈 : 정치적 변수 맞닥뜨린 알래스카 LNG 사업… 한국의 선택은] - 에너지플랫폼뉴스",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5WODlYellpMXRWMXA4eEU5em15NUU2T1h2X1JKdjdaNkVQOV9JbVZSZmNoTU9mSW1iamI1cTQySmJlS042YjVKOEpYVUZoVzJpZzUtVjdWUlkzc0hRN1lhdkJZMmVQQWRjLXpmamlXcTnSAXBBVV95cUxOVjg5WHpZaTF0VjFwOHhFOXpteTVFNk9Ydl9SSnY3WjZFUDlfSW1WUmZjaE1PZkltYmpiNXE0MkpiZUtONmI1SjhKWFVGaFcyaWc1LVY3VlJZM3NIUTdZYXZCWTJlUEFkYy16ZmppV3E5?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 103,
          "name": "EU, 내년 러시아 LNG 문 닫는다…아시아 LNG 수급 ‘유럽과 화물 경쟁’ 변수",
          "easy": "",
          "quote": "EU, 내년 러시아 LNG 문 닫는다…아시아 LNG 수급 ‘유럽과 화물 경쟁’ 변수",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 141,
              "title": "EU, 내년 러시아 LNG 문 닫는다…아시아 LNG 수급 ‘유럽과 화물 경쟁’ 변수 - 에너지데일리",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE1rMmVwUy1oWVNoaTFBOFFKd3NEYmVGRzJRYV9KYk1IYnB1TmxiYW13cnhEM0hJMkNzSzlfOW5jQ19DNmtfZ3owbEcxbkFMZjBZMVhxSkFuRUNXX2RCdlAzcV8tajFhdnBiQlNFMGVKOUR4Zw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 104,
          "name": "온화한 날씨와 미국 LNG 수출 사상 최고치에 유럽 가스 가격 EUR85/MWh 아래로 - 뉴스 및 통계",
          "easy": "",
          "quote": "온화한 날씨와 미국 LNG 수출 사상 최고치에 유럽 가스 가격 EUR85/MWh 아래로 - 뉴스 및 통계",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 142,
              "title": "온화한 날씨와 미국 LNG 수출 사상 최고치에 유럽 가스 가격 EUR85/MWh 아래로 - 뉴스 및 통계 - IndexBox",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQUHVVaUNYRDlwSUxfOGZTOFBfOHVRR0h3TDhHWGluUUIwRkphb1l5RmJZXzUyRFBSQVVGZ3hMOEU0Vkh5RXN2TmtqZEo3Ty1DeV9BOEhneWdOVUpyRU1YengyUnU4a1JpTnUyRlp4UVlJYXBnaHZGM05WZzJZTmNRXzdhWUliRVlIOG8tNnRaTnU0UllLck1xNjV4ekdpeTBsMGlXQVlTTHZYc0dkblhsZzBibWlYaVBB?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 105,
          "name": "中 LNG 선박, 韓보다 약 2000만달러 싸다…가격·기술력 경쟁 본격화",
          "easy": "",
          "quote": "中 LNG 선박, 韓보다 약 2000만달러 싸다…가격·기술력 경쟁 본격화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 143,
              "title": "中 LNG 선박, 韓보다 약 2000만달러 싸다…가격·기술력 경쟁 본격화 - 이투데이",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE9KcWxBY05jM2RpWHZCbnR1bFlOSnpUZnVPdXZUcDB1UWN2RXNUSzdUQ0tYQmVtRjlrdm1vYU8xOEVXZzhsdFV3dGtFcVU5YnczLUtPZQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 106,
          "name": "미국: LNG 플랜트로의 가스 공급량이 사상 최고치를 기록했습니다.",
          "easy": "",
          "quote": "미국: LNG 플랜트로의 가스 공급량이 사상 최고치를 기록했습니다.",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 145,
              "title": "미국: LNG 플랜트로의 가스 공급량이 사상 최고치를 기록했습니다. - Vietnam.vn",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMigwFBVV95cUxOcW91WnR3VFFldkFxZVFrSHhvMld2QzI3NGFISzF0N1l3ZVJBVEhJNGt4Z0VfZVY4VkRNOVI2RERhR0gyV0RadV80cUJQTWFabkNiRkptQi04NVhpVmVOMHNrcV9oSFVaU0FIX0V6a2Y4cU9kR3U3OGY2T2ZxSkQwa1QwQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 107,
          "name": "[분석] 10월 LNG 수입 404만7천톤…전월比 14.5% 증가",
          "easy": "",
          "quote": "[분석] 10월 LNG 수입 404만7천톤…전월比 14.5% 증가",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 146,
              "title": "[분석] 10월 LNG 수입 404만7천톤…전월比 14.5% 증가 - 투데이에너지",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTFAzWUM3UklUVzR4T2tTUWJsTEpVQV9KR09rSTE1NEFVQllLTTFYcGpTam1tNzVFMjVPOWN6d09ZS3A3alBfbVZOazJrdFhsNjRRYmFPTmhUbG1nb2Y5ekY3RmwyR05uSVFZSmZFZk1B?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 108,
          "name": "[특집 기획 | 국회 외교안보의 대전환 ③] 반도체·배터리·핵심 광물까지…국회 경제안보외교, 글로벌 공급망을 지킬 수 있나",
          "easy": "",
          "quote": "[특집 기획 | 국회 외교안보의 대전환 ③] 반도체·배터리·핵심 광물까지…국회 경제안보외교, 글로벌 공급망을 지킬 수 있나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 147,
              "title": "[특집 기획 | 국회 외교안보의 대전환 ③] 반도체·배터리·핵심 광물까지…국회 경제안보외교, 글로벌 공급망을 지킬 수 있나 - https://www.climatepol.com/",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTFB2a3FjWF9qeUI1ZU5TZDdHQkxwUk9xd285X3RaM0VhRC1TUTF6aXpkdS1jT2NmVldvUG5vVFVnampmZzhtSmNKTDhWNGJ4UENEWFRWdHItNW5SZklaMldULVBpUk1ocnEzRXNybQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 109,
          "name": "수출 1조달러 새역사…미국·독일·중국 이어 네 번째",
          "easy": "",
          "quote": "수출 1조달러 새역사…미국·독일·중국 이어 네 번째",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 148,
              "title": "수출 1조달러 새역사…미국·독일·중국 이어 네 번째 - 에너지경제신문",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9GUWJyNUlWTVl2Y2xXdmFDV0JiUVk3OXhYb0NvdERDUFprVnpsdWkwNFdQR0kzNm1rX2dTLUhnazNaM2wzWFAtYUFoenFnbHlQSFV2ODZTNnB3VnM?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 110,
          "name": "[37th SRE][Issue]1600원 위협하던 환율의 반전…내년에도 ‘반도체의 힘’ 통할까",
          "easy": "",
          "quote": "[37th SRE][Issue]1600원 위협하던 환율의 반전…내년에도 ‘반도체의 힘’ 통할까",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 149,
              "title": "[37th SRE][Issue]1600원 위협하던 환율의 반전…내년에도 ‘반도체의 힘’ 통할까 - 이데일리",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMigAFBVV95cUxPNHZSTHVMdE1mcFlaLXU2MzZkTmdVdjZJRkhNNzdPdllCaU5zYTZEQ21ETzZNdHByRHQ1ekl3QU0wLXlwVTdHV0tOUmEyaW93N3dQUF90aDFIZ245TTEtNng4a05Na0tjS0ZlbnFlQ1BudkktbEFPS2lTS3kzMU9OZg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 111,
          "name": "미중 정상 겉으론 유대감…안으론 무역장벽·기술자원 요새 구축",
          "easy": "",
          "quote": "미중 정상 겉으론 유대감…안으론 무역장벽·기술자원 요새 구축",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 150,
              "title": "미중 정상 겉으론 유대감…안으론 무역장벽·기술자원 요새 구축 - 연합뉴스",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBxYXJoWHQteV9pX1BNUmxJU0VJWlJmbHpFdlJyODZnVFN3R2k3UzNFZmhnRWlEUlRTZ2VFQTB0dmhGV1JmdU1VMHVJb1Z2d19iRjVzeFBIYm4yMkXSAWBBVV95cUxPUXV6c1B3ZEF4QmtjbGFTMS1QbHJYcmlOZ2NjM3huaG14NFd5RGxqbFk3MTE3RkRCdjRTcFZwLVFmX1g2Wlpwa1RPMmlfZjU1TFgxMERraWYyS3ZaR281SEw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 112,
          "name": "[2027 한국 산업 대전망②] 수출은 늘어도 제조업은 흔들린다…중국 추격·미국 압박의 이중고",
          "easy": "",
          "quote": "[2027 한국 산업 대전망②] 수출은 늘어도 제조업은 흔들린다…중국 추격·미국 압박의 이중고",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 151,
              "title": "[2027 한국 산업 대전망②] 수출은 늘어도 제조업은 흔들린다…중국 추격·미국 압박의 이중고 - 뉴시안",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE1FdHVMX3B1cms1dWVJc2I2RVpxa212ZE9RbnVFSUZGcC1MUlExR2FCMmwxOEtwUUM4bXpvYkVZS1IwYllubnBuRUJqUlk0U2IxV3lUdmQ2TEVqN2dZZDM0OHdRTk9PWE1qMlRScA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 113,
          "name": "中기업, 기술 이목 끌어도… 주가 폭락한 까닭?",
          "easy": "",
          "quote": "中기업, 기술 이목 끌어도… 주가 폭락한 까닭?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 152,
              "title": "中기업, 기술 이목 끌어도… 주가 폭락한 까닭? - 조선일보",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPY1J6RHFxOXdHaTQ2OGI5WVdpNGVtUGEtRXVPWTdQVjBJS3dTVVJCMGpKS3FYZTFPUk9nemhfN3pBSVpXbGllRkpvS0JWTkpncGdaT0NDbGxVUWJsVWhtbmQzclcweXVMaFJGaG1US25kdVdXVGl3b2RiWC00eVg0S0NrdFpHQWJiZHRn?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 114,
          "name": "‘관세 강화’ 공언한 트럼프…우리 경제 ‘수출 타격’ 현실화?",
          "easy": "",
          "quote": "‘관세 강화’ 공언한 트럼프…우리 경제 ‘수출 타격’ 현실화?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 153,
              "title": "‘관세 강화’ 공언한 트럼프…우리 경제 ‘수출 타격’ 현실화? - JTBC",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE40NHBfaW1fdnk5SUZKWndVeE5pVGFMQmFFcGk3dnh3MklobUtSclJ4RnR4ZkVuemZiZVB3UVNPTlVlS2hwOTh5VmhCM2t6eTVrV3c?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 115,
          "name": "‘수출 1兆 달러’ 초읽기…반도체가 이끈 새 역사, 산업별 온도차는 여전",
          "easy": "",
          "quote": "‘수출 1兆 달러’ 초읽기…반도체가 이끈 새 역사, 산업별 온도차는 여전",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 154,
              "title": "‘수출 1兆 달러’ 초읽기…반도체가 이끈 새 역사, 산업별 온도차는 여전 - 아시아투데이",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE1FU3lZR0hyLWVDSm1hbk1rdEdSTFBmbmtQYVJ5aVlYdzdzT25ueDBsLXR6Ynp0QUZXRTlDUkM0QjVqTkZGQjZUTVpGRXdaYlBBUkR1czNqaGl4akkwYUlLVE1JQVotTXloSGlsYnNn?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 116,
          "name": "뉴욕 연은 총재 “큰 폭으로 금리 올릴 상황 아니다”…12월 ‘빅스텝’에 선 그어",
          "easy": "",
          "quote": "뉴욕 연은 총재 “큰 폭으로 금리 올릴 상황 아니다”…12월 ‘빅스텝’에 선 그어",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 155,
              "title": "뉴욕 연은 총재 “큰 폭으로 금리 올릴 상황 아니다”…12월 ‘빅스텝’에 선 그어 - 조선일보",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOamd0RDdLdnBMUTFodVRIajBDZ0JMYjNXVXFfaUMyUm8zdzlrZk1jTGU4Mm9hRVc5SzA0YktFbXhPUHJwanhCcWhmSkNoSWVJcDVJeFNYUGoxc2Z1a29LX2ZwMWpzQmJ2UFdjcW5ReFBaekdIaXplOXZLVVlmbTd2dlgyXy05N1I3?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 117,
          "name": "연준 윌리엄스 총재, 인플레이션 대응 위해 추가 금리 인상 필요 By Investing.com",
          "easy": "",
          "quote": "연준 윌리엄스 총재, 인플레이션 대응 위해 추가 금리 인상 필요 By Investing.com",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 156,
              "title": "연준 윌리엄스 총재, 인플레이션 대응 위해 추가 금리 인상 필요 By Investing.com - Investing.com 한국어",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE44SjFvb25GcEg0X2NQSGNTUDllU1gwOF8xY2FGWld4U2pWUW5kZ3NqcG9kM0JYYTk4VzJXaHpaODhsWmpGWkN4YkZPbTh1LWdWRlhYNFltTjR3YTJydjFiVE5STWdlVnhHS2c?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 118,
          "name": "美 채권시장 다시 흔들…월가 \"장기채보다 단기·중기채 유망\"",
          "easy": "",
          "quote": "美 채권시장 다시 흔들…월가 \"장기채보다 단기·중기채 유망\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 157,
              "title": "美 채권시장 다시 흔들…월가 \"장기채보다 단기·중기채 유망\" - KB Think",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE9UcmZxRTdVcFJIM0JWYmhQWmZaVlplZWV5TU9rb2NlQ0I3ZXAtVGtRREd1UGd5cHNQMV90N2hJbnNOeWgtcmtaUV90c2w3aWt2Mnd6QjNJYkJjd2JlQlRFLWJzN0JjX3B2bDB0al9WS0w5Zw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 119,
          "name": "뉴욕 연은 총재 “급격한 금리 인상 불필요”…美 연준 ‘빅스텝’에 제동",
          "easy": "",
          "quote": "뉴욕 연은 총재 “급격한 금리 인상 불필요”…美 연준 ‘빅스텝’에 제동",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 158,
              "title": "뉴욕 연은 총재 “급격한 금리 인상 불필요”…美 연준 ‘빅스텝’에 제동 - 매일경제",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE15dnhWOVBVcU8xcjZtOEpTbk91MWx6VWdEeUxoNGpVMEp2T3NyVmZucXZweDJzQWpuRFpRU2lHLVFUOGU4M1MwcnJxX0VLMWZMN1E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 120,
          "name": "국제 금값 14개월 만에 최저...美 연준 추가 금리 인상 압박",
          "easy": "",
          "quote": "국제 금값 14개월 만에 최저...美 연준 추가 금리 인상 압박",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 159,
              "title": "국제 금값 14개월 만에 최저...美 연준 추가 금리 인상 압박 - www.ebn.co.kr",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5yT3BGZVZiTE9NMDdDV0h6N2loeTBhOUVRcXhWRjlVeHc4XzlHT3BxUXRSYkxCSHpSZ0g2UGVvcVdBSUN3bTVxOXE5RHBaYkZPSEp0eDdLSFhSUjNteEFBcUt6bWRmM1Ff?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 121,
          "name": "미 세인트루이스 연은 총재 \"내년 봄까지 최대 4차례 금리 인상 필요\"",
          "easy": "",
          "quote": "미 세인트루이스 연은 총재 \"내년 봄까지 최대 4차례 금리 인상 필요\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 161,
              "title": "미 세인트루이스 연은 총재 \"내년 봄까지 최대 4차례 금리 인상 필요\" - 뉴스핌",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE55blNQeW9id3RFTEM1Zzdva0p3b2plWDhtWHNLWVBDd1VSb3lIMGtfa1U5emFYUC1wclFHMUVCd0pBeEtnalBEbjVQUG9DT0cwWnpOcmhHeFktczBw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 122,
          "name": "[금리·물가 예측] 10월 CPI 쇼크에 연준 내년 3월 추가 인상 확률 62%",
          "easy": "",
          "quote": "[금리·물가 예측] 10월 CPI 쇼크에 연준 내년 3월 추가 인상 확률 62%",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 162,
              "title": "[금리·물가 예측] 10월 CPI 쇼크에 연준 내년 3월 추가 인상 확률 62% - 코인리더스",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiSkFVX3lxTFByZzBEa0xsQ1Y4Y3BIWVhsYjNCREt2cWtBWjRsYnF0NlB3djZvTDFWX1VmaVg1SnlkaE1KMUswbTczSTJja2FXRTZn?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 123,
          "name": "원화 강세에도 금리 더 올리나…환율 안정 이후 한은 선택은",
          "easy": "",
          "quote": "원화 강세에도 금리 더 올리나…환율 안정 이후 한은 선택은",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 163,
              "title": "원화 강세에도 금리 더 올리나…환율 안정 이후 한은 선택은 - KB Think",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE9hQWNRbUJmZW5sSndpdGtJZWJfMGlfbGpJbm9EaWdRWmFkdGZWcHJrS1c4NHd3SHR2TmNpNzkwMmVncWd6XzNlQW1MYndNYzBNMDY5UHBCYmlxckx1OTZtUVllc0NUVXVfNzF1TDB6SjhCdw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 124,
          "name": "경제지표 좋아지는데 살림살이는 왜… 성장률 3.9%의 역설",
          "easy": "",
          "quote": "경제지표 좋아지는데 살림살이는 왜… 성장률 3.9%의 역설",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 164,
              "title": "경제지표 좋아지는데 살림살이는 왜… 성장률 3.9%의 역설 - 더스쿠프",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5kcEluOGxqaGlJYTFHVlM3VDVYSmVDWVJKYU5yOC14eTRYSGFiZFI1d0F0SE4zVDU4M0k4dnJiZGktQVFRZDczajZpaFBzX2dfaG50QVplZjl3MXNNMklIWWtIS2RnbFllNVRCc2xn?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 125,
          "name": "금리 인상 땐 서울 집값 제동 걸리나…전면 하락보다 지역별 선별 조정",
          "easy": "",
          "quote": "금리 인상 땐 서울 집값 제동 걸리나…전면 하락보다 지역별 선별 조정",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 165,
              "title": "금리 인상 땐 서울 집값 제동 걸리나…전면 하락보다 지역별 선별 조정 - 뉴스핌",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE9xRWF3QS1LbEtBZHY0dlV5Y19fVzhxNjRBRkdIZnp2Zl9xaHJIcHc5U3ZxZjdQb0JhQ3pVNk45bmtka2h4c29WZ3NhdDUzTm9TZjFtdkZIRlQzY183?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 126,
          "name": "‘역머니무브’ 힘 입은 은행 정기예금, 연말까지 연 4% 특판 행렬 지속[머니뭐니]",
          "easy": "",
          "quote": "‘역머니무브’ 힘 입은 은행 정기예금, 연말까지 연 4% 특판 행렬 지속[머니뭐니]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 166,
              "title": "‘역머니무브’ 힘 입은 은행 정기예금, 연말까지 연 4% 특판 행렬 지속[머니뭐니] - 헤럴드경제",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE96TkVpV2pCMGRJU3dseS01cGdVczRkZEVSR01TZGpGY1BvcFZlMnh2TlM0bEZZNXFKU0R1Sk05OUZ5Ul9OZjg0NklDTTVSWVBfZUdmYXBTbw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 127,
          "name": "물가·성장에 11월 금리 인상 무게…증시 조정은 변수",
          "easy": "",
          "quote": "물가·성장에 11월 금리 인상 무게…증시 조정은 변수",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 167,
              "title": "물가·성장에 11월 금리 인상 무게…증시 조정은 변수 - 대한경제",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE9GN0lBTlVlR0g4ODlVdGkxWklYaHhnTEVFd1VvS1l0Y1hPUzdPTElva0l0a3YzVDBUVVpJQ3AxNk02dEtPWVYwQlRkcW1QQWRhamhmVHJEQmgzU0lEWEJIQzI1UC1IY29NNE53U3NvR1JhMjQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 128,
          "name": "기준금리는 누가, 어떻게 정할까: 금융통화위원회 한 장 정리",
          "easy": "",
          "quote": "기준금리는 누가, 어떻게 정할까: 금융통화위원회 한 장 정리",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 168,
              "title": "기준금리는 누가, 어떻게 정할까: 금융통화위원회 한 장 정리 - 네이버 프리미엄콘텐츠",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQX3FLSEJmTlgyM20yQVNSNzRvLUhMOGFFTEE4dEl2enh1WUVXc1dNNWhSUU5zckZHRnFNWFNuQmZaRGtHYk5sZkNnY2lXQzhVcG5FcnJRakdBRmxtYUdrQ1F0Y0xzZVR6eGlQRjQwbzVqUURiNHhBWmJOdTRGTUlUYXBfZlVDTkF4Qi1jTTFqSDRjV3hwV0tjcElOSQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 129,
          "name": "내년까지 기준금리 오른다는데…주담대 변동금리 ‘또 들썩’",
          "easy": "",
          "quote": "내년까지 기준금리 오른다는데…주담대 변동금리 ‘또 들썩’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 169,
              "title": "내년까지 기준금리 오른다는데…주담대 변동금리 ‘또 들썩’ - 에너지경제신문",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE5aSll3U3pmYVNpTmp2OU94Y0JIejJ0RTFCYmFpUDdPVEtWZkRLRlZNbWt6M3AtN05rZXI5T09ZQ3FqVjVvcGVwTFZaTFp4RE4tdlgzREJwY0M3T1k1T3J4TjBtSQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 130,
          "name": "한국형 혁신핵융합로 '초전도자석' 개발 기술역량 결집",
          "easy": "",
          "quote": "한국형 혁신핵융합로 '초전도자석' 개발 기술역량 결집",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 171,
              "title": "한국형 혁신핵융합로 '초전도자석' 개발 기술역량 결집 - 인사이트N파워",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE56d1o3LWIxMG10YkpmNzItNEpHMG54eG83UWJ1ZjVSXzJhbnRsMzBrS1pmYTgxZkppazVwUUM2bEV6RjFuSmtLY1BBZzk1dkJxdE9oWTVad0FSLW5PbjViajM3My1vZw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 131,
          "name": "한국형 핵융합로 ‘초전도자석’ 개발 논의...저온·고온 기술 함께 검토",
          "easy": "",
          "quote": "한국형 핵융합로 ‘초전도자석’ 개발 논의...저온·고온 기술 함께 검토",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 172,
              "title": "한국형 핵융합로 ‘초전도자석’ 개발 논의...저온·고온 기술 함께 검토 - 수소신문",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE9JUTY3M2RvZTB3cTJ5dnctWW5fQlNSRjFfNTFsVTY2NG1feWdKRHpNa29ZNTJBdDBHaEc2ZVA3anhQTXJGanA1VkxZbjZGbU80RWU2VEFVSlpzbURhUjZNREx3OHp2R1lFYjFHejFILXZ6LVBl0gF0QVVfeXFMT0lRNjczZG9lMHdxMnl2dy1Zbl9CU1JGMV81MWxVNjY0bV95Z0pEek1rb1k1MkF0MEdoRzZlUDdqeFBNckZqcDVWTFluNkZtTzRFZTZUQVVKWnNtRGFSNk1ETHc4enZHWUViMUd6MUgtdnotUGU?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 132,
          "name": "특징주, 로보티즈-피지컬 AI/휴머노이드 로봇 테마 상승세에 5.2% ↑",
          "easy": "",
          "quote": "특징주, 로보티즈-피지컬 AI/휴머노이드 로봇 테마 상승세에 5.2% ↑",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 178,
              "title": "특징주, 로보티즈-피지컬 AI/휴머노이드 로봇 테마 상승세에 5.2% ↑ - 매일경제 마켓",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5Sa240d3JGcEIzUk81UWNqT2h2cTlZZVR1V0g0T09OU29SLUhjSG13VTM2QmFDSjFkSFgwTDNBQ3ZxM3hWa3dQS2hVN0Zna2d5Snc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 133,
          "name": "화려한 퍼포먼스 中 휴머노이드 로봇, 현장 사업화까지 곳곳 장애물",
          "easy": "",
          "quote": "화려한 퍼포먼스 中 휴머노이드 로봇, 현장 사업화까지 곳곳 장애물",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 179,
              "title": "화려한 퍼포먼스 中 휴머노이드 로봇, 현장 사업화까지 곳곳 장애물 - 주간동아",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBTczB2VnRhTFU4RkdkZ2M2ZGRNZHJVdTJna1hqM0lSS1EwZjhZbExGMngzY3NHc3oxeHk1M3lWOUhXck9sa29zUEFYQWhGTEZSSHdMMzhBc01aZW5PQWpiTGptTUY3aFdlWXh4bTd3?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 134,
          "name": "'피지컬 AI 휴머노이드' 로브로스, 시리즈B 순항…170억 1차 클로징",
          "easy": "",
          "quote": "'피지컬 AI 휴머노이드' 로브로스, 시리즈B 순항…170억 1차 클로징",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 180,
              "title": "'피지컬 AI 휴머노이드' 로브로스, 시리즈B 순항…170억 1차 클로징 - 연합인포맥스",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTFB4Y0N0YVM5dzFWQ2ZHYkFYZjZKZ2txX0NUbHBPZGJfTzRkbUIyQlF3LU44SlhOS3BfWG0yaG9rbEc2SGV5Zm9ES2JHd1hXQzJESDVDTkNBcVZrR0k1Y01obGluclJDc3R6c2p1amlwdW0?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 135,
          "name": "[더테크 픽] 2026 로보월드, 역대 최대 규모…휴머노이드·제조 AI에 5만 명 몰렸다",
          "easy": "",
          "quote": "[더테크 픽] 2026 로보월드, 역대 최대 규모…휴머노이드·제조 AI에 5만 명 몰렸다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 181,
              "title": "[더테크 픽] 2026 로보월드, 역대 최대 규모…휴머노이드·제조 AI에 5만 명 몰렸다 - 더테크",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE14aWxoV0xLUC1CY3FzYXdTemg2UXpKUHFUeGdITjlpeVhxUkdzT2R6TlBBZTdHS0hidlpYMmRFRmZ6SWhhcmxuZXpGOVAwU0RrTEpqYmtKclFnU19VM1RyTzFtSQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 136,
          "name": "아이엘 휴머노이드 로봇, SBS 창사특집 다큐 '나의 이방인' 출연…AI 도플갱어 구현",
          "easy": "",
          "quote": "아이엘 휴머노이드 로봇, SBS 창사특집 다큐 '나의 이방인' 출연…AI 도플갱어 구현",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 182,
              "title": "아이엘 휴머노이드 로봇, SBS 창사특집 다큐 '나의 이방인' 출연…AI 도플갱어 구현 - 아시아경제",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFBONnRYTmpyUWRHQ0RiX1A0Z1FrMGFSakNBREJLUXFtQXRGRDJHYXY2SVBOSE5LbTcyNGVFR1VoYmJwUXdoT2xLN2xldktPMjlkdDJ1azU4dVdCZjRUS0VUWQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 137,
          "name": "2톤짜리 ‘슈퍼휴머노이드’ 걷기 시작했다…케이엔알시스템, 로봇다리 보행 성공",
          "easy": "",
          "quote": "2톤짜리 ‘슈퍼휴머노이드’ 걷기 시작했다…케이엔알시스템, 로봇다리 보행 성공",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 183,
              "title": "2톤짜리 ‘슈퍼휴머노이드’ 걷기 시작했다…케이엔알시스템, 로봇다리 보행 성공 - 에너지경제신문",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE0wVVY0SHpnbTZSMmhNTHVueDJBWEFqZldVQThsM094V003Y05vcDJJeW9JS2dqaTJ4ZV9mNEdjb0IwcGxydXc4cWhocVEzbWJFbEtWOHpVWllYYVk?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 138,
          "name": "한세실업, '휴머노이드 의류 제작'으로 한국PR대상 최우수상",
          "easy": "",
          "quote": "한세실업, '휴머노이드 의류 제작'으로 한국PR대상 최우수상",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 184,
              "title": "한세실업, '휴머노이드 의류 제작'으로 한국PR대상 최우수상 - 연합뉴스",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1zNkc4MU42TEsxSnRtcVpia2xlT1pXcnVWb0t1dkVHSnAtNGxzcjNUR0tGLWlMOGFQbUJCbDAyT0NkTm9fOGNkTWlkRGkxZE5hZXR0TmJKS1lzd1HSAWBBVV95cUxNcm54NU9WYnljYmRMVkdxemM1bVFlcUNTSlY2LW9CaVlrVFNaTmpBeFB4U3RqMEQxZV9OR3BubHlXLW9McHBiRXdxeFlKdEgyM19xMGRmbGZUWGY1VjNCUzc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 139,
          "name": "현대차그룹 휴머노이드 ’아틀라스’ 반도체 공장서도 실증",
          "easy": "",
          "quote": "현대차그룹 휴머노이드 ’아틀라스’ 반도체 공장서도 실증",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 185,
              "title": "현대차그룹 휴머노이드 ’아틀라스’ 반도체 공장서도 실증 - 연합뉴스TV",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE83ZXpKUzBvVjY1Ynk1blpkQ0tPMzZjd2MwQXR2LW55Z2FpUnY5NThrQVYzR1lPX3lld0hfcFlRSk92c0tKUDJLRmM3b3l1TU1KSVY5ZVRGN0dTdFJLTUtlMWUtVFBtems?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 140,
          "name": "비싼 니켈 줄이고, 성능 높이고···배터리 장수명 원리 규명",
          "easy": "",
          "quote": "비싼 니켈 줄이고, 성능 높이고···배터리 장수명 원리 규명",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 186,
              "title": "비싼 니켈 줄이고, 성능 높이고···배터리 장수명 원리 규명 - 헬로디디",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTFB3eFdYLVNlNzNkVk43MTJDSGh4Y1NObGd0d0VzeF8xWVhVMTAyZ0VyajVHOGliZVVYMmlBRk9UbmxvakhTVW9BQ2R1aHkySURpa25hNlFmUklxSmNPT0JKYVJNZ3NLVDRkR0E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 141,
          "name": "전기차 캐즘에 엇갈린 2차전지 소재 부품주…특화 소재 기업은 '함박웃음'",
          "easy": "",
          "quote": "전기차 캐즘에 엇갈린 2차전지 소재 부품주…특화 소재 기업은 '함박웃음'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 189,
              "title": "전기차 캐즘에 엇갈린 2차전지 소재 부품주…특화 소재 기업은 '함박웃음' - 핀포인트뉴스",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTE95dnRZOERxV1hFckdRNGZRQkFRVjRaNzBUMEJqUEhId21WSml5YXRybkFnSWFaZ254RjJIT1BCODlBWEI1cG9PSHVYaml2ZDRzYkNqN3VGTFlUTk90Z3JHTjBEa29kVUtJOFZuY2w4Y1FUNURmOVRj0gF3QVVfeXFMT3l2dFk4RHFXWEVyR1E0ZlFCQVFWNFo3MFQwQmpQSEh3bVZKaXlhdHJuQWdJYVpnbnhGMkhPUEI4OUFYQjVwb09IdVhqaXZkNHNiQ2o3dUZMWVROT3RnckdOMERrb2RVS0k4Vm5jbDhjUVQ1RGY5VGM?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 142,
          "name": "삼화는 배터리, 노루는 바이오…페인트업계 소재 영토 확장",
          "easy": "",
          "quote": "삼화는 배터리, 노루는 바이오…페인트업계 소재 영토 확장",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 193,
              "title": "삼화는 배터리, 노루는 바이오…페인트업계 소재 영토 확장 - 이투데이",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE1Wb1V2ZjIwLUlnb1ZoSzRpWmw1dVBZc3lBUF9aNkhwR25zVmppblpHUm9jd1RteElWMkVZcTZ3YUp3eWJ3bkotVV9VT1lYbE5VZmdZSg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 143,
          "name": "[오늘의 경제뉴스] 로봇 ‘근육’ 쥔 중국…희토류 통제에 한국 ‘피지컬 AI’ 위기",
          "easy": "",
          "quote": "[오늘의 경제뉴스] 로봇 ‘근육’ 쥔 중국…희토류 통제에 한국 ‘피지컬 AI’ 위기",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 197,
              "title": "[오늘의 경제뉴스] 로봇 ‘근육’ 쥔 중국…희토류 통제에 한국 ‘피지컬 AI’ 위기 - 뉴스버스",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9CeEJsNm5FS0ZZSFJCcmNYY25HX1p4RVZrU29GTzlnVW1PMXFaY0g1VTJDMDVxaHNla2RHcW1KTkFOQzBkMUlXV3dMZmlWWjdkTnF2LWhxQ2JwVEZ3bDJFNGJ2QnpaRWlHbnc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 144,
          "name": "퀀텀엑스, 에베레스트 클라우드와 협력…남아시아 6개국 양자컴퓨팅 시장 진출",
          "easy": "",
          "quote": "퀀텀엑스, 에베레스트 클라우드와 협력…남아시아 6개국 양자컴퓨팅 시장 진출",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 741,
              "title": "퀀텀엑스, 에베레스트 클라우드와 협력…남아시아 6개국 양자컴퓨팅 시장 진출 - 양자신문",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTFAwT2VyMW1UU2Q2T0R4ZGR2UFJZY0RDdmFwakFQWUFfZlJveVdZVjBoanJEUHoxVDFuXzJhRW5NRS1RZDY0Vl84X1VLazRwc0hQZUpYaWU2anI0NXZiUkMwQ3JKblhTUlNuZW9BY1JmOA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 145,
          "name": "퍼듀대, 머신러닝으로 양자 오류 사전 차단…광자 큐비트 불안정성 20배 줄였다",
          "easy": "",
          "quote": "퍼듀대, 머신러닝으로 양자 오류 사전 차단…광자 큐비트 불안정성 20배 줄였다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 742,
              "title": "퍼듀대, 머신러닝으로 양자 오류 사전 차단…광자 큐비트 불안정성 20배 줄였다 - 한국공공정책신문",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMiQ0FVX3lxTFBySlZqR1gtbEZJbENxYnM1UHNYYURxTDY3SkFTTTg4YUU0amNQb0o3YWRmTzNLbFVDaVRtWkxLc2dPNFE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 146,
          "name": "양자암호주 줄줄이 약세…KT·SK텔레콤만 '휘파람'",
          "easy": "",
          "quote": "양자암호주 줄줄이 약세…KT·SK텔레콤만 '휘파람'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 743,
              "title": "양자암호주 줄줄이 약세…KT·SK텔레콤만 '휘파람' - 핀포인트뉴스",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTE5vRHVKdF9ZalNNRjFNellEZ00wMTF6b3JTWFNKeFJMUGVzY3I1Ti1WVTBpYURjTUNCdVpuSWs2eE85RTEtSXF3NkprT1BoTjFhYnZoQ1lsT3JzOEZZMzdzcW92eUotMVhaRmdhRmItVHRMV3lSNHpn0gF3QVVfeXFMTm9EdUp0X1lqU01GMU16WURnTTAxMXpvclNYU0p4UkxQZXNjcjVOLVZVMGlhRGNNQ0J1Wm5JazZ4TzlFMS1JcXc2SmtPUGhOMWFidmhDWWxPcnM4RlkzN3Nxb3Z5Si0xWFpGZ2FGYi1UdExXeVI0emc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 147,
          "name": "AI 다음은 양자컴퓨터…아이온큐 2027년 물량 완판",
          "easy": "",
          "quote": "AI 다음은 양자컴퓨터…아이온큐 2027년 물량 완판",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 744,
              "title": "AI 다음은 양자컴퓨터…아이온큐 2027년 물량 완판 - 엠에스투데이",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE10MkFSWVVIaWJPVS1rQkpSbDJoS2FPM1NJcHUxRjVnOFJyaFktS1FSOE0ta0xXMlctdTJYTlJVZWItWTFySk9KY3VXQjJZb1E3SFEtUlMxYmRhaGQxQTVwSWpKemF6Wk9hZTFJcNIBcEFVX3lxTFBCVnlZOXJmRF9valJSRHlKdWl2cW41eDJDUGI0dFlCS3FWT3IxbUNtaWM2eDJEYjlfOUxHSWduWXp0UXJzVm1XeUR2NmZ5aVFndUdEMm1XZmRMd3FPcExwWC0wM1RGeHIyMUNQcXJsbEY?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 148,
          "name": "독일 퀸트컴퓨팅, 910만 유로 유치…하드웨어 단계 양자 오류 수정으로 상용화 경쟁 진입",
          "easy": "",
          "quote": "독일 퀸트컴퓨팅, 910만 유로 유치…하드웨어 단계 양자 오류 수정으로 상용화 경쟁 진입",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 745,
              "title": "독일 퀸트컴퓨팅, 910만 유로 유치…하드웨어 단계 양자 오류 수정으로 상용화 경쟁 진입 - 유스연합",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE0wdFZwNFZLdHZmNWgwaVRManllRWpyT0RxUVJwT3VYSEhzWlVuQUNxZVBMXzlCbHhVeV9pOVQ4TVpYb3ZIdFJkUGtRUWNZcFhoeFpv?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 149,
          "name": "[COP31] 정부, 'K-GX 세계 확산' 선언…2040 탈석탄 본격화",
          "easy": "",
          "quote": "[COP31] 정부, 'K-GX 세계 확산' 선언…2040 탈석탄 본격화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 759,
              "title": "[COP31] 정부, 'K-GX 세계 확산' 선언…2040 탈석탄 본격화 - 넷제로뉴스",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9jVGVXeC0xZ2l6M3lMSG5ZUmxNX2I2LUxsZzlLSEZYd1RJa01LRW9uNDU4bmNtSDlYenBxZVFiU1RwQnZUSFE1cVQyeXFtam9rWW1MSDA4UXVIM2FMU1dkZFBVbzFkZFVweGhMbUdR0gFuQVVfeXFMT2NUZVd4LTFnaXozeUxIbllSbE1fYjYtTGxnOUtIRlh3VElrTUtFb240NThuY21IOVh6cHFlUWJTVHBCdlRIUTVxVDJ5cW1qb2tZbUxIMDhRdUgzYUxTV2RkUFVvMWRkVXB4aExtR1E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 150,
          "name": "AI 전력 80GW 수요…“2040 탈석탄, 재생·원전 믹스”",
          "easy": "",
          "quote": "AI 전력 80GW 수요…“2040 탈석탄, 재생·원전 믹스”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 760,
              "title": "AI 전력 80GW 수요…“2040 탈석탄, 재생·원전 믹스” - 파인드비",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE83c2pCbGdkV1RJVVkwamFndHlZSzFfQUlVYnVCUVc2RV9hX3YwTWRKOE5IYm1rYWU5NUdPeVNYaEItaWNsVG13VU1WZHJFNFA2MnVmMnkzMEJoVjRPSWlmd015cGRrVWfSAWpBVV95cUxNTjREOGpHTkZPSTYtME5yWjBBMTF1U2lHWW1iTlBTZXlqazFURU9MWHpMcmQ1TmRQVXptYzh3R3drTXU4YXY5SWQtV1FWQTdKcVZJYi0tYW9rTXBlM1NvcmJSZmxJVlJSOERn?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        },
        {
          "rank_by_count": 151,
          "name": "[12차 전기본] 원전 공론화 누리집 개설 이틀째...17일부터 공개토론회 방청객 신청 접수 본격화",
          "easy": "",
          "quote": "[12차 전기본] 원전 공론화 누리집 개설 이틀째...17일부터 공개토론회 방청객 신청 접수 본격화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 761,
              "title": "[12차 전기본] 원전 공론화 누리집 개설 이틀째...17일부터 공개토론회 방청객 신청 접수 본격화 - 산경e뉴스",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE8teGZhOXg1WEJxQ2REQ0g0VGs5VEZuMTBhUEVaWkktN0dOeWUzVV9GYlFEU2UxZzlJZk5SN1l2QzdmMmxmWTNvOUVGV2NTcVpvOXpwRExrb0tvM1JZd29YQ3dlcmhUMVU?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
        }
      ]
    },
    "ch5_papers": {
      "title": "챕터 5 · 논문",
      "addr": "처리-4",
      "kind": "papers",
      "day": "2026-11-18",
      "day_label": "11월 18일(오늘)",
      "day_rel": "오늘",
      "day_note": "11월 18일(오늘) 논문 — 논문 풀이가 끝난 결과예요.",
      "made": "2026-11-18T11:04:47",
      "picks_max": 10,
      "status": "돎 — 2026-11-18 논문 풀이 150편 / 새 논문 248편",
      "headline": {
        "text": "오늘 새 논문 248편 · 풀이한 150편 중 전력망·계통 쪽이 33편으로 가장 많아요.",
        "text_orig": "",
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
        "text": "오늘 풀이한 논문들 중에서는 전력망의 효율을 높이거나 로봇 제어 기술을 다룬 연구가 가장 눈에 띄게 많았습니다. 전력망 분야에서는 데이터 센터의 전압 강하에 대응하거나 전력망의 고장 복구력을 높이는 등 실질적인 운영 최적화에 집중한 모습인데요, 제어 분야에서는 신경망을 활용해 로봇의 안정성을 증명하거나 궤도 랑데부 효율을 높이는 방식이 주를 이뤘습니다. 이와는 조금 다르게 수학적 이론을 바탕으로 인공지능 모델의 정체성 유지 조건을 규명하거나 비선형 시스템을 학습하는 연구들도 함께 올라와 눈길을 끌었습니다.",
        "by": "ai",
        "flags": [
          "말투 딱딱함: 3문장 모두 '-습니다/입니다'로 끊기고 이어 주는 말 없음"
        ]
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
        "line_out": "내보냄: 수집 대상 38곳 (v2_secretary/결과/2026-11-18_하루_전체.md)",
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
        "line_out": "내보냄: 오늘 들어온 글 766건 (v2_secretary/결과/문앞/2026-11-18_문앞교통정리_길별.json)",
        "metrics": {
          "in": 38,
          "out": 766,
          "calls": 0,
          "secs": 41.7,
          "num_source": "v2_secretary/결과/문앞/2026-11-18_문앞교통정리_길별.json"
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
        "line_in": "받음: 들어온 글 766건 (새 글 639 + 이미 본 글 127)",
        "line_rule": "규칙: gate_rules/길_규칙.txt · 관심_키워드.txt · 반키워드.txt (AI 0콜)",
        "line_out": "내보냄: 거푸집1 89 · 거푸집2 44 · 뉴스 192 · 제외 192 · 논문T 75 · 모름 47",
        "metrics": {
          "in": 766,
          "out": 639,
          "calls": 0,
          "secs": 20.3,
          "num_source": "v2_secretary/결과/문앞/2026-11-18_문앞교통정리_길별.json"
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
        "line_in": "받음: 문 앞 제외 규칙에 걸린 글 192건",
        "line_rule": "규칙: exclude.py + gate_rules/되살리기.txt (관심 키워드 든 글 표시)",
        "line_out": "내보냄: 결과/제외보관함/제외보관함.csv (5200행 누적)",
        "metrics": {
          "in": 192,
          "out": 192,
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
        "line_out": "내보냄: 한은 표 35행 · FRED 표 14행 · DART 표 83행(오늘)",
        "metrics": {
          "in": 89,
          "out": 97,
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
        "line_in": "받음: 문 앞 거푸집1 길 89건",
        "line_rule": "규칙: plate1.py 정규식 숫자 추출 + 직전 값 계산·공식 API 대조 (AI 0콜)",
        "line_out": "내보냄: 오늘 DART 표 83건 · 한은 0건 · FRED 14종",
        "metrics": {
          "in": 89,
          "out": 83,
          "calls": 0,
          "secs": 124.7,
          "num_source": "v2_secretary/결과/거푸집1/2026-11-18_거푸집1.md"
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
        "line_in": "받음: 문 앞 거푸집2 길 44건 (보도자료·리포트·연방관보)",
        "line_rule": "규칙: body.py 본문 추출(0콜) → plate2.py 글당 AI 1콜 요약 + 파이썬 원문·숫자 대조 검사",
        "line_out": "내보냄: 오늘 요약 37건 (결과/거푸집2/2026-11-18_거푸집2.md)",
        "metrics": {
          "in": 44,
          "out": 37,
          "calls": 37,
          "secs": 310.7,
          "num_source": "v2_secretary/결과/거푸집2/2026-11-18_거푸집2.md"
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
        "line_in": "받음: 문 앞 뉴스 길 192건",
        "line_rule": "규칙: news.py 하루 AI 2콜(A·B 독립 묶기 대조) + 없는 숫자·중복 검사",
        "line_out": "내보냄: 사건 10개 묶음 (결과/뉴스/2026-11-18_뉴스사건.json)",
        "metrics": {
          "in": 192,
          "out": 10,
          "calls": 2,
          "secs": 9.7,
          "num_source": "v2_secretary/결과/뉴스/2026-11-18_뉴스사건.json"
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
        "line_in": "받음: [11월 18일(오늘) 논문] 새벽 바퀴 5-1(0콜)이 모으기 원본(arXiv·허깅페이스)으로 만든 새 논문 카드 248편",
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
        "line_out": "내보냄: 누적 연설 브리핑 26편 (결과/연준연설/)",
        "metrics": {
          "in": 26,
          "out": 26,
          "calls": 1,
          "secs": 5.1,
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
        "line_out": "내보냄: 결과/2026-11-18_하루_전체.md 외 5종 결과지",
        "metrics": {
          "in": 6,
          "out": 6,
          "calls": 0,
          "secs": 0.1,
          "num_source": "v2_secretary/결과/2026-11-18_하루_전체.md"
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
        "line_in": "받음: 2026-11-18 결과 파일들 + runs.jsonl + calls.jsonl + 구간_주소표.md",
        "line_rule": "규칙: export_panel.py 세기와 옮겨 적기 (새 공식 없음, AI 0콜)",
        "line_out": "내보냄: v2_secretary/결과/화면/panel.json",
        "metrics": {
          "in": 766,
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
          "num_source": "v2_secretary/결과/문앞/2026-11-18_문앞교통정리_길별.json"
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
        "line_out": "내보냄: 실행 기록 12건 (최근: 2026-11-18 ok)",
        "metrics": {
          "in": 1,
          "out": 12,
          "calls": 41,
          "secs": 513.0,
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
