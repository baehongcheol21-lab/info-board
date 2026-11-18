// 자동 생성 파일 (v2_secretary/export_panel.py) — 직접 수정하지 마세요.
window.PANEL_DATA = {
  "schema_version": "2.1.0-panel-v1",
  "day": "2026-11-18",
  "generated_at": "2026-11-18 10:44:15",
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
      "day": "2026-11-17",
      "day_label": "11월 17일(어제)",
      "made": "2026-11-17T11:59:11",
      "calls": 121,
      "same_day": false,
      "source": "v2_secretary/결과/논문/2026-11-17_논문.json"
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
      "day": "2026-11-17",
      "day_label": "11월 17일(어제)",
      "day_rel": "어제",
      "day_note": "11월 17일(어제) 논문이에요. 오늘 논문은 논문 풀이(새벽 바퀴 바로 뒤, 백업 12:07)가 끝나면 이 자리로 바뀌어요.",
      "made": "2026-11-17T11:59:11",
      "picks_max": 10,
      "status": "돎 — 2026-11-17 논문 풀이 120편 / 새 논문 152편",
      "headline": {
        "text": "11월 17일(어제) 새 논문 152편 · 풀이한 120편 중 AI 모델·학습법 쪽이 26편으로 가장 많아요.",
        "text_orig": "오늘 새 논문 152편 · 풀이한 120편 중 AI 모델·학습법 쪽이 26편으로 가장 많아요.",
        "n_new": {
          "val": 152,
          "source": "v2_secretary/결과/논문/2026-11-17_논문.json"
        },
        "n_done": {
          "val": 120,
          "source": "v2_secretary/결과/논문/2026-11-17_논문.json"
        },
        "n_done_new": {
          "val": 120,
          "source": "v2_secretary/결과/논문/2026-11-17_논문.json"
        },
        "n_done_backlog": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-17_논문.json"
        },
        "n_waiting": {
          "val": 32,
          "source": "v2_secretary/결과/논문/2026-11-17_논문.json"
        },
        "n_failed": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-17_논문.json"
        },
        "top_tag": "AI 모델·학습법",
        "top_tag_n": {
          "val": 26,
          "source": "v2_secretary/결과/논문/2026-11-17_논문.json"
        }
      },
      "flow": {
        "text": "11월 17일에 풀이한 논문들 중에서는 AI 모델의 학습 효율을 높이거나 전력망의 안정성을 다루는 연구가 가장 많았습니다. 예를 들어 시각적 의존도를 고려해 멀티모달 모델의 속도를 개선하거나, 데이터센터의 전력 부하를 관리하는 제어법을 개발한 사례가 눈에 띄는데요. 이와는 결이 다르게 수중 이미지의 품질을 평가하거나 해양 엽록소 농도를 예측하는 등 특정 환경의 데이터를 분석하는 연구들도 함께 올라왔습니다. 쉽게 말하면 AI의 성능을 올리는 기술과 이를 실제 산업 현장에 적용하려는 시도가 두루 보였다는 겁니다.",
        "by": "ai",
        "flags": [],
        "text_orig": "오늘 풀이한 논문들 중에서는 AI 모델의 학습 효율을 높이거나 전력망의 안정성을 다루는 연구가 가장 많았습니다. 예를 들어 시각적 의존도를 고려해 멀티모달 모델의 속도를 개선하거나, 데이터센터의 전력 부하를 관리하는 제어법을 개발한 사례가 눈에 띄는데요. 이와는 결이 다르게 수중 이미지의 품질을 평가하거나 해양 엽록소 농도를 예측하는 등 특정 환경의 데이터를 분석하는 연구들도 함께 올라왔습니다. 쉽게 말하면 AI의 성능을 올리는 기술과 이를 실제 산업 현장에 적용하려는 시도가 두루 보였다는 겁니다."
      },
      "map": [
        {
          "tag": "AI 모델·학습법",
          "n": 26,
          "n_done": 26,
          "one_lines": [
            "시각적 의존도를 고려한 MMFlash로 멀티모달 모델의 추론 속도를 높였어요.",
            "엔트로피 급증 단계를 감지해 환각을 줄이는 디코딩 기법을 개발했어요.",
            "반사실적 학습으로 영상의 역동성을 읽는 모델을 개발했어요."
          ]
        },
        {
          "tag": "전력망·계통",
          "n": 23,
          "n_done": 23,
          "one_lines": [
            "인버터 배치 위치가 주파수 안정성에 미치는 영향을 분석했어요.",
            "선박 전력망 설계를 위한 선형 모델을 개발해 계산 시간을 줄였어요.",
            "데이터센터 UPS를 활용한 실시간 경제 급전 모델을 개발했어요."
          ]
        },
        {
          "tag": "AI 에이전트·도구",
          "n": 23,
          "n_done": 23,
          "one_lines": [
            "에이전트 로봇의 정의와 평가 체계를 세우고 발전 방향을 제시했어요.",
            "복잡한 환경에서 긴 시간 동안 동작하는 범용 게임 에이전트 모델을 개발했어요.",
            "4D 장면 생성을 위한 코딩 에이전트 평가 벤치마크를 개발하고 성능을 분석했어요."
          ]
        },
        {
          "tag": "제어·로봇",
          "n": 17,
          "n_done": 17,
          "one_lines": [
            "강화학습을 이용해 비선형 시스템 식별을 위한 입력 설계 방식을 개발했어요.",
            "제어기 매개변수를 반영하는 통합 쿱만 모델을 개발해 예측 효율을 높였어요.",
            "수축 이론을 결합한 샘플링 기반 모델 예측 제어로 로봇의 안전성을 높였어요."
          ]
        },
        {
          "tag": "AI 안전·평가",
          "n": 12,
          "n_done": 12,
          "one_lines": [
            "수중 이미지 품질 평가 지표들이 사람의 선호도와 일치하는지 73개를 검증했어요.",
            "AI 심사 모델이 논문 부록에 편향된 약점을 지적함을 분석했어요.",
            "평생 학습 능력을 측정하는 벤치마크를 제안하고 학습 방식을 비교했어요."
          ]
        },
        {
          "tag": "영상·음성·멀티모달",
          "n": 5,
          "n_done": 5,
          "one_lines": [
            "e-means 알고리즘으로 화자 수 제한 없는 스트리밍 화자 분리 시스템을 구현했어요.",
            "영상 생성 모델의 헤드 역할을 분리해 일관성과 움직임을 개선했어요.",
            "스트리밍 영상 이해 모델의 기억력을 평가하는 벤치마크를 개발했어요."
          ]
        },
        {
          "tag": "의료·바이오",
          "n": 5,
          "n_done": 5,
          "one_lines": [
            "서열 데이터만으로 분자 상호작용을 학습하는 본본 모델을 개발했어요.",
            "환자 반응 예측의 신뢰성을 평가하는 게이트 모델을 도입해 의사결정을 지원했어요.",
            "단일 채널 뇌파 기반 수면 분석의 해석 가능성을 높이려 XAI 기법들을 비교했어요."
          ]
        },
        {
          "tag": "수학·이론",
          "n": 4,
          "n_done": 4,
          "one_lines": [
            "시스템 식별 연구의 증명 검증을 위해 린(Lean) 도구 활용법을 제시했어요.",
            "비결정론적 인과 모델에서 인과 확률을 계산하는 최적화 기법을 개발했어요.",
            "인과적 어텐션의 토큰 역학이 두 클러스터로 수렴함을 증명하고 분석 틀을 제시했어요."
          ]
        },
        {
          "tag": "기타",
          "n": 4,
          "n_done": 4,
          "one_lines": [
            "위성 사진과 에너지 지도를 결합 생성하는 AI 모델을 개발했어요.",
            "차량 신호로 경로를 복원하는 데이터셋을 구축하고 위험성을 평가했어요.",
            "GPU 가격 벤치마크의 데이터 누락 대응력을 시뮬레이션으로 평가했어요."
          ]
        },
        {
          "tag": "배터리·저장",
          "n": 1,
          "n_done": 1,
          "one_lines": [
            "거대언어모델 기반 에이전트로 배터리 급속 충전을 제어했어요."
          ]
        }
      ],
      "picks": [
        {
          "canon_id": "2611.17691",
          "badge": "전공",
          "why": "전공(전력·제어) 중 키워드가 많이 걸림: power system, frequency, renewable, data center"
        },
        {
          "canon_id": "2611.18359",
          "badge": "실무 인기",
          "why": "허깅페이스 추천 110"
        },
        {
          "canon_id": "2611.18140",
          "badge": "AI 교집합",
          "why": "인공지능 쪽인데 관심 키워드가 걸림: battery"
        },
        {
          "canon_id": "2611.17814",
          "badge": "교차 출현",
          "why": "여러 곳에 같이 올라옴: cs.AI + 허깅페이스"
        },
        {
          "canon_id": "2611.17704",
          "badge": "의외",
          "why": "오늘 풀이 중 드문 주제 '기타'(3편) — 키워드·추천수와 상관없이 고름"
        },
        {
          "canon_id": "2611.17550",
          "badge": "전공",
          "why": "전공(전력·제어) 중 키워드가 많이 걸림: power system, frequency, data center, HVDC"
        },
        {
          "canon_id": "2611.18397",
          "badge": "실무 인기",
          "why": "허깅페이스 추천 89"
        },
        {
          "canon_id": "2611.18442",
          "badge": "의외",
          "why": "오늘 풀이 중 드문 주제 '기타'(3편) — 키워드·추천수와 상관없이 고름"
        }
      ],
      "cards": [
        {
          "canon_id": "2611.18359",
          "title": "Envisioning Agentic Robotics: A New Era of Robotic Systems",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.18359",
            "arxiv": "https://arxiv.org/abs/2611.18359"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 110,
          "score": 11.0,
          "score_why": "추천 110 → +10 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇이 스스로 생각하고 움직이는 시대가 왔어요",
            "easy1_desc": "GPT-6 Astra가 나오면서 로봇이 단순히 정해진 동작만 하는 게 아니라, 스스로 상황을 판단하고 행동하는 에이전트 로봇이라는 새로운 흐름이 생겼거든요. 예전에는 특정 작업마다 로봇을 따로 학습시켜야 했는데, 이제는 거대 모델(Foundation Model) 하나로 다양한 환경에서 일을 시킬 수 있게 된 겁니다. 쉽게 말하면, 로봇이 환경을 보고 사용자의 의도를 파악해서 도구를 쓰고 결과를 확인하며 스스로 전략을 바꾸는 폐쇄 루프(Closed-loop) 방식으로 움직인다는 거예요.",
            "easy2_title": "하지만 아직 로봇이 물리적 세상에서 완벽하게 일하기엔 부족해요",
            "easy2_desc": "연구진은 에이전트 로봇이 물리적인 제약 속에서 제대로 작동하려면 일반적인 추론 능력을 확실한 행동으로 옮기는 게 핵심이라고 봤는데요, 반응 시간이나 기계적 한계, 예측 불가능한 환경 변화 같은 현실적인 문제들이 여전히 남아있기 때문이에요. 그래서 연구진은 모델의 능력과 실제 시스템의 성능을 함께 측정하는 평가 체계를 제안했거든요. 앞으로는 로봇이 단순히 동작 하나를 수행하는 것을 넘어, 더 넓은 책임을 지고 안전하게 일할 수 있는 방향으로 연구가 나아가야 한다고 주장했습니다.",
            "topic": "거대 모델을 기반으로 한 에이전트 로봇 시스템의 정의와 이를 평가하고 발전시키기 위한 연구 방향을 제시했어요.",
            "one_line": "에이전트 로봇의 정의와 평가 체계를 세우고 발전 방향을 제시했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "아직 에이전트 로봇에 대한 공통된 정의나 신뢰할 수 있는 평가 체계, 그리고 구체적인 연구 로드맵이 정립되지 않았습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.18534",
          "title": "Impact of Grid-Forming Inverter Placement and Penetration on Local and Aggregate Frequency",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18534"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 10.0,
          "score_why": "전공 +3 · 키워드 3개(inverter, frequency, grid-forming) → +6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "inverter",
            "frequency",
            "grid-forming"
          ],
          "ai": {
            "easy1_title": "인버터 기반 자원이 늘면서 전력망의 안정성이 흔들리고 있어요",
            "easy1_desc": "요즘 전력망은 기존의 동기 발전기(SG) 대신 인버터 기반 자원이 그 자리를 채우는 큰 변화를 겪고 있는데요, 이 과정에서 전력망의 안정성을 유지하기 위해 그리드 형성 인버터(GFM)를 도입하려는 움직임이 커지고 있습니다. 그런데 이 GFM을 전력망 어디에 배치해야 안정성이 가장 좋을지, 그리고 전체적인 주파수 평가 방식이 국소적인 주파수 변화를 얼마나 잘 반영하는지는 아직 확실하지 않거든요. 쉽게 말하면, 새로운 장비를 어디에 두는 게 최선인지, 또 전체 평균만 봐도 되는 건지 따져봐야 한다는 겁니다.",
            "easy2_title": "배치 위치에 따라 주파수 안정성이 크게 달라진다는 걸 확인했어요",
            "easy2_desc": "연구진은 IEEE 39-버스 시스템에서 모든 동기 발전기와 그리드 형성 인버터 조합을 일일이 따져보는 방식으로 실험을 진행했는데요, 그 결과 GFM을 어디에 배치하느냐에 따라 최악의 경우 국소 주파수 최저점(nadir)은 최대 104 mHz, 주파수 변화율(RoCoF)은 0.21 Hz/s까지 차이가 나는 걸 확인했습니다. 반면 전체 평균 주파수 평가 방식은 이런 국소적인 차이를 89%나 가려버리는 문제가 있었거든요. 결국 전체 평균만 믿고 배치하면 특정 지역의 위험을 놓칠 수 있다는 사실을 밝혀낸 셈입니다.",
            "topic": "그리드 형성 인버터의 배치 위치가 전력망의 국소적 및 전체적 주파수 안정성에 미치는 영향을 분석했어요.",
            "one_line": "인버터 배치 위치가 주파수 안정성에 미치는 영향을 분석했어요.",
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
          "canon_id": "2611.18255",
          "title": "Linear Modeling of Hybrid Shipboard Power Systems under Pulsed Power Load Operation",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18255"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 10.0,
          "score_why": "전공 +3 · 키워드 3개(power system, battery, energy storage) → +6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "power system",
            "battery",
            "energy storage"
          ],
          "ai": {
            "easy1_title": "복잡한 배 전력망을 일일이 다 계산하기엔 너무 느렸거든요",
            "easy1_desc": "선박의 전력 시스템을 설계할 때 부품 간의 상호작용을 확인하려면 모델 기반의 접근 방식이 필요한데요, 기존의 정밀한 모델은 계산량이 너무 많아서 초기 설계 단계에서 빠르게 여러 조건을 바꿔가며 검토하기가 어렵다는 문제가 있었습니다. 뭔 소리냐면, 설계자가 다양한 설정을 시도해 보고 싶어도 시뮬레이션 시간이 너무 오래 걸려 효율이 떨어진다는 말이에요. 그래서 초기 평가를 빠르게 수행할 수 있는 간소화된 모델이 필요했다는 겁니다.",
            "easy2_title": "선형 모델을 새로 만들어 계산 속도를 확 줄여 봤습니다",
            "easy2_desc": "연구진은 선박의 하이브리드 AC-DC 전력망에서 발생하는 고대역폭 부하 문제를 해결하기 위해, 관심 있는 시간대 내의 동역학을 포착할 수 있는 선형 모델을 개발했습니다. 이 모델은 배터리 에너지 저장 시스템을 포함한 저전압 직류(LVDC) 하위 시스템을 갖추고 있으며, 과도 상태의 요구 사항을 만족하기 위한 제어 전략도 함께 제안했거든요. DIgSILENT PowerFactory로 만든 정밀 모델과 비교해 봤더니, 비선형성을 유지하면서도 시뮬레이션 시간을 크게 줄이면서 충분한 정확도를 보여줬다는 게 연구진의 주장이에요. 쉽게 말하면, 초기 설계 단계에서 빠르게 검토할 수 있는 효율적인 도구를 마련한 셈입니다.",
            "topic": "선박용 하이브리드 전력 시스템에서 펄스 부하 운용 시 효율적인 설계를 위한 선형 모델링 기법을 제안했어요.",
            "one_line": "선박 전력망 설계를 위한 선형 모델을 개발해 계산 시간을 줄였어요.",
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
          "canon_id": "2611.17691",
          "title": "Frequency-Security-Aware Real-Time Economic Dispatch with Data Center UPS Flexibility for Inertia and Primary Frequency Response Services",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17691"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 10.0,
          "score_why": "전공 +3 · 키워드 4개(power system, frequency, renewable, data center) → +6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "power system",
            "frequency",
            "renewable",
            "data center"
          ],
          "ai": {
            "easy1_title": "재생에너지와 데이터센터가 늘어나면서 전력망이 불안해졌어요",
            "easy1_desc": "재생에너지 사용이 늘고 AI 데이터센터가 빠르게 커지면서 전력망의 주파수 안정성을 유지하기가 점점 어려워지고 있는데요. 전력망이 흔들릴 때 빠르게 대응해서 주파수를 잡아줄 새로운 자원이 절실한 상황이에요. 뭔 소리냐면, 기존 방식만으로는 급격한 전력 변화를 감당하기 벅차다는 말이에요.",
            "easy2_title": "데이터센터의 무정전 전원 장치를 활용해 전력망을 안정시켰어요",
            "easy2_desc": "그래서 연구진은 데이터센터의 무정전 전원 장치(UPS)를 활용해 전력 균형을 맞추고 관성 응답과 1차 주파수 응답(PFR) 서비스를 제공하는 새로운 실시간 경제 급전(RTED) 모델을 제안했어요. 이 모델은 2차 원뿔 계획법(SOCP)을 써서 주파수 보안 제약 조건을 수식으로 만들고 이를 운영 틀에 넣었거든요. 결과적으로 시스템 운영 비용을 줄이면서도 주파수 저하에 따른 부하 차단(UFLS)을 막을 수 있게 된 셈이에요.",
            "topic": "데이터센터의 무정전 전원 장치를 활용하여 전력망의 주파수 보안을 강화하는 실시간 경제 급전 모델에 관한 연구예요.",
            "one_line": "데이터센터 UPS를 활용한 실시간 경제 급전 모델을 개발했어요.",
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
          "canon_id": "2611.17550",
          "title": "Sub-Synchronous Control Interaction Risk of Large Data Center Loads: A Frequency-Scan Assessment with Cross-Model Validation",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17550"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 10.0,
          "score_why": "전공 +3 · 키워드 4개(power system, frequency, data center, HVDC) → +6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "power system",
            "frequency",
            "data center",
            "HVDC"
          ],
          "ai": {
            "easy1_title": "데이터 센터가 전력망에 어떤 영향을 주는지 몰랐던 문제",
            "easy1_desc": "데이터 센터는 전력망에서 빠르게 늘어나는 부하인데, 대부분 무정전 전원 장치(UPS)를 거쳐 전력을 공급받거든요. 풍력 발전이나 고압 직류 송전(HVDC) 설비가 전력망과 제어 신호를 주고받으며 문제를 일으키는 현상인 아동기 제어 상호작용(SSCI)을 데이터 센터도 일으킬 수 있는지 그동안 제대로 연구된 적이 없었어요. 쉽게 말하면, 데이터 센터가 전력망의 안정성을 흔들 수 있는 잠재적 위험 요소인지 확인이 필요했다는 겁니다.",
            "easy2_title": "데이터 센터의 UPS 설비가 전력망에 위험할 수 있음을 밝혀냈어요",
            "easy2_desc": "연구진이 데이터 센터 내부의 모터, 조명, IT 장비 등을 모델링해 분석해 봤더니, 이중 변환 모드로 작동하는 UPS만이 유일하게 음의 저항을 보인다는 걸 확인했어요. 이 음의 저항은 아동기 대역 전체와 최대 170Hz까지 이어지는데, 부하가 가벼울수록 이 현상이 더 심해진다는 사실도 밝혀냈거든요. 결과적으로 데이터 센터가 전력망과 상호작용하며 문제를 일으킬 수 있는 조건을 찾아낸 셈이에요.",
            "topic": "데이터 센터의 UPS 설비가 전력망에서 아동기 제어 상호작용(SSCI)을 유발할 위험성을 임피던스 기반 주파수 스캔으로 분석했어요.",
            "one_line": "데이터 센터 UPS의 아동기 제어 상호작용 위험을 분석했어요.",
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
          "canon_id": "2611.18397",
          "title": "Gamer: A Generalist Vision-Language-Action Foundation Model for Long-Horizon Real-Time Game Agent",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.18397",
            "arxiv": "https://arxiv.org/abs/2611.18397"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 89,
          "score": 9.9,
          "score_why": "추천 89 → +8.9 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 게임 속에서 스스로 판단하는 에이전트를 만들었어요",
            "easy1_desc": "기존의 에이전트는 긴 시간 동안 이어지는 복잡한 게임을 수행하는 데 어려움이 있었는데요, 연구진은 이를 해결하기 위해 인식과 기억 관리, 그리고 다단계 추론을 하나로 합친 Gamer라는 모델을 제안했어요. 이 모델은 수만 시간 분량의 키보드와 마우스 조작 데이터를 학습해서 가상과 현실 환경을 모두 이해할 수 있게 설계되었거든요. 쉽게 말하면, 사람이 게임을 하듯 환경의 변화를 스스로 파악하고 반응하는 능력을 갖췄다는 말이에요.",
            "easy2_title": "불필요한 계산은 줄이고 실시간 반응 속도는 높였어요",
            "easy2_desc": "연구진은 복잡한 결정을 내릴 때 불필요한 계산을 줄이는 희소 사고(Sparse-thinking) 학습법을 적용해서 효율성을 크게 높였는데요, 덕분에 긴 시간 동안 이어지는 게임에서도 안정적으로 작동할 수 있게 되었어요. 또한 클라우드와 엣지 환경에서 동시에 여러 게임을 처리하면서도 지연 시간을 낮게 유지하는 추론 엔진을 개발했거든요. 결과적으로 Gamer는 숙련된 플레이어와 비슷한 수준의 조작 능력을 보여주면서, 2D와 3D 환경 모두에서 뛰어난 성능을 입증했다는 겁니다.",
            "topic": "Gamer는 다양한 디지털 및 물리적 환경에서 긴 시간 동안 복잡한 작업을 수행할 수 있는 범용 비전-언어-행동 모델이에요.",
            "one_line": "복잡한 환경에서 긴 시간 동안 동작하는 범용 게임 에이전트 모델을 개발했어요.",
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
          "canon_id": "2611.15789",
          "title": "VibePrevisBench: Evaluating Agentic Coding for 4D Scene Generation in Blender",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.15789",
            "arxiv": "https://arxiv.org/abs/2611.15789"
          },
          "published": "2026-11-11",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 84,
          "score": 9.4,
          "score_why": "추천 84 → +8.4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "코딩 에이전트가 4D 장면을 잘 만드는지 확인할 방법이 없었어요",
            "easy1_desc": "영상 생성 모델을 제어하려면 블렌더(Blender)로 4D 장면을 재구성한 회색 상자 형태의 가이드 영상이 필요한데요, 코딩 에이전트가 이 작업을 수행할 수 있게 되었음에도 불구하고 결과물을 체계적으로 평가할 기준이 없었다는 게 문제였거든요. 그래서 연구진은 에이전트가 지시문을 받아 실행 가능한 4D 장면을 만들고 가이드 영상을 렌더링하는 과정을 평가하는 벤치마크인 VibePrevisBench를 도입했어요. 쉽게 말하면, 에이전트가 만든 영상이 의도대로 잘 만들어졌는지 검증할 시험대를 마련한 셈이에요.",
            "easy2_title": "11개 에이전트를 시험해 보니 공간 이해력에서 차이가 났어요",
            "easy2_desc": "연구진은 242개의 과제를 통해 11개의 최신 코딩 에이전트를 분석해 봤는데요, 그 결과 에이전트마다 공간과 카메라 움직임을 이해하는 멀티모달 능력에서 큰 차이를 보였다는 거예요. 기본적인 카메라 연출은 대부분 잘 해냈지만, 복잡한 요청이 들어오면 실패하는 경향이 있었거든요. 특히 스스로 렌더링 결과물을 확인하고도 오류를 고치지 못하는 한계도 발견했는데, 앞으로는 시각적 공간 이해력을 높이고 항목별로 꼼꼼히 검증하는 기능이 필요하다고 연구진은 주장했어요.",
            "topic": "코딩 에이전트의 4D 장면 재구성 능력을 평가하기 위한 벤치마크인 VibePrevisBench를 제안하고 그 성능을 분석했어요.",
            "one_line": "4D 장면 생성을 위한 코딩 에이전트 평가 벤치마크를 개발하고 성능을 분석했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "에이전트가 스스로 렌더링 결과물을 확인하더라도 오류를 수정하지 못하는 한계가 있어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.18428",
          "title": "Grid-Forming AI Data Centers: Coordinated Grid Support Control from IT Loads and Energy Storage",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18428"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 8.0,
          "score_why": "전공 +3 · 키워드 2개(energy storage, grid-forming) → +4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "energy storage",
            "grid-forming"
          ],
          "ai": {
            "easy1_title": "AI 데이터 센터가 전력망을 돕는 법을 고민했습니다",
            "easy1_desc": "AI 데이터 센터는 전력을 엄청나게 많이 쓰는데, 이 전력을 단순히 소비만 하는 게 아니라 전력망이 불안정할 때 이를 도와줄 수 있는 능력이 있거든요. 연구진은 데이터 센터가 가진 IT 부하와 에너지 저장 장치를 활용해서 전력망을 안정적으로 만드는 제어 방식을 제안했습니다. 쉽게 말하면, 데이터 센터를 전력망의 든든한 지원군으로 바꾸려는 시도인 셈이에요.",
            "easy2_title": "IT 부하와 저장 장치를 합쳐서 전력망을 안정시켰습니다",
            "easy2_desc": "데이터 센터 안의 IT 부하와 에너지 저장 장치를 하나로 묶어서 전력망에 대응하는 이중 제어 방식을 만들었는데요, 이를 통해 전력망이 흔들릴 때 유연하게 전력을 조절할 수 있게 된 겁니다. 100 MW 규모의 데이터 센터를 시뮬레이션으로 돌려봤더니, 제안한 방식이 전력망을 효과적으로 뒷받침한다는 점을 확인했거든요. 결과적으로 데이터 센터가 전력망의 안정성을 높이는 데 기여할 수 있다는 걸 보여준 거예요.",
            "topic": "AI 데이터 센터의 IT 부하와 에너지 저장 장치를 연계하여 전력망을 지원하는 그리드 포밍(GFM) 제어 전략에 관한 연구입니다.",
            "one_line": "AI 데이터 센터의 IT 부하와 저장 장치를 연계해 전력망을 지원하는 제어법을 개발했어요.",
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
          "canon_id": "2611.18092",
          "title": "Beyond Scalar Inertia: Frequency-Response-Based Assessment of Finite-Duration Inertial Support in Grid-Forming Converters",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18092"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 8.0,
          "score_why": "전공 +3 · 키워드 2개(frequency, grid-forming) → +4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "frequency",
            "grid-forming"
          ],
          "ai": {
            "easy1_title": "기존의 관성 측정 방식은 짧은 주파수 변화를 제대로 못 짚어냅니다",
            "easy1_desc": "그동안 전력망을 형성하는 변환기(GFM)의 관성을 잴 때, 낮은 주파수에서만 작동하는 스칼라 관성(Scalar Inertia)이라는 값을 써 왔는데요. 이게 무슨 말이냐면, 아주 짧은 시간 동안 주파수가 흔들릴 때 변환기가 실제로 에너지를 얼마나 내보내는지 정확히 예측하기가 어렵다는 겁니다. 즉, 기존 방식으로는 변환기의 순간적인 대응 능력을 온전히 파악하기 힘들다는 한계가 있는 셈이에요.",
            "easy2_title": "주파수 응답을 활용해 관성을 시간별로 더 정확하게 측정합니다",
            "easy2_desc": "연구진은 네트워크 주파수 섭동(NFP) 그래프처럼 복잡한 전력-주파수 응답을 활용해, 시간이 지남에 따라 변하는 관성을 측정하는 새로운 방법을 제안했습니다. 내부 제어 구조를 몰라도 주파수별 관성을 적분하는 방식으로 정확한 값을 구할 수 있게 된 건데요. 이렇게 하면 변환기가 가진 진동 특성이나 감쇠 비율까지 한눈에 파악할 수 있다는 장점이 있습니다. 쉽게 말하면, 변환기가 얼마나 버틸 수 있는지 시간 단위로 더 정밀하게 평가할 수 있게 된 겁니다.",
            "topic": "전력망 형성 변환기(GFM)의 유한한 지속 시간을 가진 관성 지원 능력을 주파수 응답 기반으로 평가하는 새로운 방법론에 관한 연구입니다.",
            "one_line": "주파수 응답을 분석해 변환기의 관성 지원 능력을 평가하는 새로운 지표를 개발했어요.",
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
              "예측 의심: 제어 방식이 다른 변환기들을 비교 검증할 때 이 지표가 유용하게 쓰일 것으로 보입니다."
            ],
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.17975",
          "title": "Enhancing Transient Stability of VSG-Controlled Converters Under Grid Frequency Disturbances",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17975"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 8.0,
          "score_why": "전공 +3 · 키워드 2개(frequency, renewable) → +4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "frequency",
            "renewable"
          ],
          "ai": {
            "easy1_title": "기존 방식은 전력망 주파수가 변하면 오히려 독이 됐거든요",
            "easy1_desc": "가상 동기 발전기(VSG) 제어 방식은 댐핑 피드백을 강하게 걸어 안정성을 높이는데요, 문제는 이 피드백이 항상 정해진 기준 주파수만 바라본다는 점이에요. 전력망 주파수가 기준에서 벗어나면, 제어기는 주파수를 원래대로 붙잡아두려고 애쓰거든요. 그러다 보니 실제 전력망과 VSG 사이의 주파수 차이가 계속 벌어지면서 동기화가 깨지는 문제가 생기는 겁니다.",
            "easy2_title": "실제 전력망 주파수를 바로 찾아내서 동기화를 맞췄어요",
            "easy2_desc": "연구진은 복소 주파수 기반의 새로운 추정 방식을 제안했는데요, 로컬 단자에서 측정한 값을 바탕으로 현재 전력망의 실제 주파수를 실시간으로 찾아내는 방식이에요. 이 값을 기존의 고정된 기준 주파수 대신 사용하면, 댐핑이 VSG와 실제 전력망 사이의 주파수 차이에 맞춰 작동하게 됩니다. 덕분에 주파수가 흔들리는 상황에서도 훨씬 안정적으로 동기화를 유지할 수 있게 된 셈이에요.",
            "topic": "전력망 주파수 변동 상황에서 가상 동기 발전기(VSG) 제어 방식의 과도 안정성을 높이는 새로운 주파수 추정 기법을 제안했어요.",
            "one_line": "복소 주파수 추정법으로 VSG 제어기의 동기 안정성을 높였어요.",
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
          "canon_id": "2611.17612",
          "title": "Battery Energy Storage Sizing in PV Ramp-Rate Smoothing using Constraint-Aware Reinforcement Learning-Based Controller",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17612"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 8.0,
          "score_why": "전공 +3 · 키워드 2개(battery, energy storage) → +4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "battery",
            "energy storage"
          ],
          "ai": {
            "easy1_title": "태양광 발전이 들쑥날쑥해서 전력망이 불안해지는 게 문제였어요",
            "easy1_desc": "구름이 지나가면 태양광 발전량이 갑자기 변하는데, 이게 전력망의 안정성을 해칠 수 있거든요. 그래서 전력망 운영 규칙에서는 발전량 변화 속도를 제한하는 램프율 제한(RRL)을 두고 있어요. 배터리 저장 장치(BESS)를 쓰면 이 변화를 흡수해서 안정적으로 만들 수 있는데, 배터리 용량을 얼마나 할지 정하는 것과 제어기를 설계하는 게 서로 얽혀 있어서 최적화가 어렵다는 게 문제였던 겁니다.",
            "easy2_title": "예측 없이도 배터리 용량을 줄여주는 똑똑한 제어기를 만들었어요",
            "easy2_desc": "연구진은 제약 조건을 고려하는 강화 학습(CARL) 제어기를 제안했는데요, 과거 데이터를 학습해서 미래를 따로 예측할 필요 없이 바로 대응할 수 있다는 게 핵심이에요. 기존 방식은 배터리를 과하게 쓰거나 예측 정확도에 의존해야 하는 단점이 있었거든요. 이걸 썼더니 배터리 출력과 용량 요구치를 크게 줄이면서도 전력망 규정을 잘 지킬 수 있었다는 겁니다.",
            "topic": "태양광 발전의 급격한 변동을 완화하기 위해 배터리 저장 장치(BESS)의 크기를 최적화하고 제어하는 강화 학습 기반의 방법을 제안했어요.",
            "one_line": "강화 학습을 이용해 태양광 발전 변동을 잡는 배터리 제어 및 용량 최적화 기법을 개발했어요.",
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
            "format": [
              "one_line 51자"
            ],
            "flags": [],
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.18229",
          "title": "A Reinforcement Learning Approach to Space-Filling Input Design for Nonlinear System Identification",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18229"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(frequency) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "frequency"
          ],
          "ai": {
            "easy1_title": "기존 방식은 복잡한 시스템을 다루기에 한계가 있었거든요",
            "easy1_desc": "기존의 입력 설계 방식은 주로 선형 모델에 맞춰져 있어서, 비선형 모델을 다룰 때는 모델 구조에서 발생하는 편향 오류가 큰 문제가 되곤 했습니다. 그래서 시스템의 상태 공간을 골고루 탐색하는 공간 채우기 전략이 필요한데요, 기존 방법들은 미리 정해진 신호 종류를 써야 하거나 복잡한 최적화 문제를 풀어야 한다는 번거로움이 있었거든요. 쉽게 말하면, 시스템마다 일일이 설정을 바꿔줘야 해서 유연성이 떨어졌다는 말이에요.",
            "easy2_title": "강화학습을 써서 스스로 탐색하는 제어 정책을 만들었어요",
            "easy2_desc": "연구진은 강화학습을 활용해 시스템이 스스로 상태 공간을 탐색하도록 만드는 제어 정책을 학습시켰는데요, 이 방식은 별도의 입력 신호 종류를 선택하거나 주파수 대역을 튜닝할 필요가 없다는 장점이 있습니다. 게다가 진폭 제한을 구조적으로 만족하면서도, 초기 조건이 바뀌어도 다시 최적화할 필요 없이 바로 적응할 수 있거든요. 결과적으로 기존의 최신 설계 방식보다 더 고르게 샘플을 분포시키며 뛰어난 성능을 보였다는 게 연구진의 주장이에요.",
            "topic": "비선형 시스템 식별을 위해 강화학습을 이용한 공간 채우기 입력 설계 방식을 제안했습니다.",
            "one_line": "강화학습을 이용해 비선형 시스템 식별을 위한 입력 설계 방식을 개발했어요.",
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
          "canon_id": "2611.18184",
          "title": "PTMTD: A Topology-Aware Temporal-Graph Attention Network for Joint Cyber-Attack Detection and Relay-Level Localization in Power System Protection Networks",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18184"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(power system) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "power system"
          ],
          "ai": {
            "easy1_title": "전력망 보호 장비가 사이버 공격에 무방비로 노출됐어요",
            "easy1_desc": "전력망을 보호하는 계전기(Relay)가 디지털화되면서 사이버 공격에 취약해졌는데요, 기존의 그래프 신경망(GNN) 기반 탐지 기술들은 시간 흐름을 제대로 반영하지 못하거나 고정된 연결 구조에만 의존한다는 한계가 있었어요. 게다가 공격이 발생했을 때 정확히 어느 계전기에서 문제가 생겼는지 찾아내는 기능도 부족했거든요. 쉽게 말하면, 공격을 알아채기도 어렵고 어디가 뚫렸는지도 모르는 상황이었던 셈이에요.",
            "easy2_title": "공격 탐지와 위치 파악을 동시에 해내는 모델을 만들었어요",
            "easy2_desc": "연구진은 PTMTD라는 새로운 모델을 제안했는데, 시간 정보를 처리하는 TCN과 그래프 구조를 학습하는 GATv2를 결합해 공격 탐지와 계전기 위치 파악을 동시에 수행하도록 설계했어요. 임피던스 데이터 없이 측정값의 상관관계만으로 그래프를 구성해 효율성을 높였거든요. 그 결과 기존 모델들보다 정확도가 5.64~11.15% 포인트 더 높게 나타났고, CPU에서 2.5ms 만에 추론이 가능할 정도로 가벼워졌다는 점이 특징이에요.",
            "topic": "전력망 보호 네트워크에서 사이버 공격을 탐지하고 문제가 발생한 계전기의 위치를 정확히 찾아내는 PTMTD 모델에 대한 연구입니다.",
            "one_line": "전력망 사이버 공격 탐지와 계전기 위치 파악을 위한 신경망 모델을 개발했어요.",
            "topic_tag": "전력망·계통",
            "limit": "현재는 송전망 테스트베드에서 검증을 마친 상태입니다."
          },
          "check": {
            "evidence": [
              [
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
            "flags": [
              "예측 의심: 현재는 송전망 테스트베드에서 검증을 마쳤지만, 비슷한 구조를 가진 마이크로그리드 환경에서도 충분히 활용 가능"
            ],
            "tag": "전력망·계통",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.17889",
          "title": "PLL-Less Synchronization of Grid-Following Converters Using a Voltage-Driven Frenet Frame",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17889"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(voltage) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "voltage"
          ],
          "ai": {
            "easy1_title": "전력망이 불안정하면 기존 동기화 방식은 문제가 생깁니다",
            "easy1_desc": "전력망을 따라가는 변환기(Grid-following converter)는 보통 위상 고정 루프(PLL)를 써서 전압과 동기를 맞추는데요, 전압이 불안정하거나 불균형한 상황에서는 이 동기화 과정에서 전압의 방해가 전류 제어 루프로 그대로 흘러 들어간다는 문제가 있어요. 뭔 소리냐면, 전압이 흔들리면 전류까지 덩달아 흔들려서 시스템 전체가 불안해진다는 말이에요. 이런 현상은 전력망이 약할 때 특히 두드러지게 나타난다는 겁니다.",
            "easy2_title": "위상 고정 루프 없이도 안정적인 제어 방식을 개발했습니다",
            "easy2_desc": "연구진은 위상 고정 루프나 복잡한 성분 추출 과정이 필요 없는 프레네 틀(Frenet-frame) 기반의 제어기를 새로 제안했는데요, 측정된 전압의 곡선을 따라 축을 설정하고 전류를 제어하는 방식이에요. 이렇게 하면 전압의 방해가 전류로 넘어가는 결합을 줄일 수 있어서, 전력망이 약한 환경에서도 훨씬 안정적으로 전력을 제어할 수 있다는 겁니다. 실제로 실험해 봤더니 기존 방식보다 응답 속도가 빠르고 전압 불균형 상황에서도 전류 왜곡이 작게 나타났다고 연구진은 주장했어요.",
            "topic": "전압 기반 프레네 틀을 활용하여 위상 고정 루프 없이도 전력망 변환기를 안정적으로 제어하는 방법을 다루고 있습니다.",
            "one_line": "위상 고정 루프 없이 전압 기반 프레네 틀로 변환기를 제어했어요.",
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
          "canon_id": "2611.17757",
          "title": "Graph Neural Network Prediction of Frequency Nadir and RoCoF Under Topology Variations",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17757"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(frequency) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "frequency"
          ],
          "ai": {
            "easy1_title": "전력망 구조가 바뀔 때마다 일일이 계산하기 너무 힘들었어요",
            "easy1_desc": "전력망의 주파수 안정성을 확인하려면 전자기 과도 현상(EMT) 시뮬레이션을 반복해야 하는데, 이게 계산량이 너무 많아서 시간이 오래 걸린다는 문제가 있었거든요. 특히 전력망의 연결 구조가 계속 바뀌는 상황에서는 매번 새로 계산해야 해서 효율이 떨어지는 겁니다. 연구진은 이런 복잡한 계산 과정을 줄이면서도 정확도를 높일 방법이 필요하다고 본 거예요.",
            "easy2_title": "그래프 신경망을 써서 주파수 변화를 훨씬 빠르게 예측했어요",
            "easy2_desc": "연구진은 전력망의 연결 상태를 잘 이해하는 그래프 신경망(GNN)에 RBF-KAN 회귀 모델을 더한 RK-GNN이라는 새로운 구조를 만들었는데요. 이걸로 주파수 최저점과 주파수 변화율(RoCoF)을 예측해 봤더니, 기존의 딥러닝 모델보다 오차를 절반 가까이 줄이는 성과를 냈다는 겁니다. 덕분에 복잡한 시뮬레이션을 매번 돌릴 필요가 없어져서 계산 부담이 크게 줄어든 셈이에요.",
            "topic": "전력망의 연결 구조 변화에 대응하여 주파수 안정성을 빠르고 정확하게 예측하는 RK-GNN 모델을 제안했어요.",
            "one_line": "그래프 신경망을 활용해 전력망 주파수 변화를 예측했어요.",
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
          "canon_id": "2611.17739",
          "title": "State-of-Charge Targets for Storage Participation in Two-Settlement Markets: Reliability, Price, and Compensation Impacts",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17739"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(energy storage) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "energy storage"
          ],
          "ai": {
            "easy1_title": "에너지 저장 장치가 전력망에서 제 역할을 못 하고 있었어요",
            "easy1_desc": "전력망에서 에너지 저장 장치(ESS)의 비중이 커지면서, 위기 상황에 대비해 에너지를 미리 확보해 두는 게 중요해졌는데요. 지금까지는 최소 충전 상태(SOC) 목표치를 설정해 에너지를 남겨두는 방식을 썼는데, 이게 오히려 평소 운영 효율을 떨어뜨리거나 보상 체계에 문제를 일으키는 경우가 많았거든요. 쉽게 말하면, 에너지를 아끼려고 설정한 목표치가 정작 필요할 때 방전을 막아버려 전력 공급을 방해하는 상황이 발생했다는 겁니다.",
            "easy2_title": "충전 목표치를 똑똑하게 바꿔서 전력 부족을 80% 넘게 줄였어요",
            "easy2_desc": "연구진은 캘리포니아 전력 시장 모델을 바탕으로 다양한 충전 목표치 설정 방식을 비교해 봤는데요. 단순히 에너지를 많이 남겨두는 게 능사가 아니라, 실시간 중앙 급전 방식에 맞춰 개별 자원별로 목표치를 설정했을 때 효과가 가장 좋았거든요. 실제로 여름철 위기 상황에서 이 방식을 썼더니 주간 부하 차단(load shedding)이 약 83~84% 줄어드는 결과를 확인했습니다. 에너지를 확보하는 것과 적절한 타이밍에 방전하는 것 사이의 균형이 핵심이라는 말이에요.",
            "topic": "전력 시장에서 에너지 저장 장치의 신뢰성과 효율을 높이기 위한 최적의 충전 상태(SOC) 목표치 설계 방안을 분석했어요.",
            "one_line": "전력 시장 내 저장 장치의 충전 목표치 설계가 신뢰성에 미치는 영향을 분석했어요.",
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
            "bad_numbers": [
              "80"
            ],
            "format": [],
            "flags": [],
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.17661",
          "title": "Feasibility of Pareto-Improving Damping Control of Forced Oscillations: The Active-Power Case",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17661"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(frequency) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "frequency"
          ],
          "ai": {
            "easy1_title": "전력망 진동을 잡으려다 오히려 다른 곳이 흔들릴 수 있어요",
            "easy1_desc": "전력망에서 강제 진동이 발생하면 특정 지점의 흔들림을 줄이기 위해 제어를 하는데요, 문제는 한쪽의 진동을 줄이면 다른 쪽의 진동이 오히려 커질 수 있다는 점이에요. 연구진은 이를 평가하는 기준으로 파레토 개선이라는 개념을 도입했는데, 이는 다른 곳의 진동을 늘리지 않으면서 최소 한 곳 이상의 진동을 줄이는 것을 의미합니다. 쉽게 말하면, 전체적인 균형을 해치지 않고 효과적으로 진동을 억제할 수 있는지 따져보는 겁니다.",
            "easy2_title": "제어 장치를 여러 개 쓰면 한계를 넘을 수 있다는 걸 확인했어요",
            "easy2_desc": "연구진은 제어 장치가 하나뿐일 때는 아무리 조절해도 파레토 개선이 불가능한 주파수 영역이 존재한다는 것을 수학적으로 증명했는데요, 이는 제어 입력의 크기나 위상과 관계없이 나타나는 한계라는 거예요. 하지만 제어 장치를 여러 개 사용하면 이러한 제약이 사라질 수 있다는 점을 3개 노드 예시를 통해 보여줬습니다. 6개 버스 시스템과 IEEE 39개 버스 시스템 시뮬레이션을 통해 분석의 타당성을 검증했으니, 앞으로는 여러 장치를 활용한 제어 방식이 중요해질 것으로 보입니다.",
            "topic": "전력망의 강제 진동을 억제할 때 전체 네트워크의 진동을 악화시키지 않는 파레토 개선 제어의 가능성을 분석했어요.",
            "one_line": "전력망 강제 진동 제어 시 파레토 개선 가능성을 분석하고 다중 제어의 이점을 확인했어요.",
            "topic_tag": "전력망·계통",
            "limit": "연구진은 이번 분석 결과를 바탕으로 네트워크 전체에 걸친 제어 효과를 평가하고 다중 제어 장치를 활용한 댐핑 제어 방식을 더 연구할 필요가 있다고 밝혔습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
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
              "예측 의심: 6개 버스 시스템과 IEEE 39개 버스 시스템 시뮬레이션을 통해 분석의 타당성을 검증했으니, 앞으로는 여러"
            ],
            "tag": "전력망·계통",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.12068",
          "title": "MIRIX-2.0: Multi-Agent Memory System",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.12068",
            "arxiv": "https://arxiv.org/abs/2611.12068"
          },
          "published": "2026-11-09",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 47,
          "score": 5.7,
          "score_why": "추천 47 → +4.7 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 에이전트가 기억을 잘 못 해서 생기는 문제들",
            "easy1_desc": "거대언어모델(LLM) 기반의 에이전트가 과거의 경험을 기억해서 개인화된 서비스를 제공하려면 장기 기억이 꼭 필요한데요. 기존 방식들은 학습이 필요하거나, 정보를 요약하는 과정에서 중요한 세부 사항을 잃어버리기도 하고, 기록이 쌓일수록 검색해야 할 데이터가 너무 많아져서 비효율적이라는 문제가 있었거든요. 쉽게 말하면, 기억을 저장하고 꺼내 쓰는 과정이 복잡하고 정확도가 떨어지는 셈이에요.",
            "easy2_title": "기억을 체계적으로 관리하는 MIRIX-2.0을 만들었어요",
            "easy2_desc": "연구진은 실용적이면서도 정확하고 효율적인 다중 에이전트 기억 시스템인 MIRIX-2.0을 제안했는데요. 이 시스템은 6개의 기억 에이전트가 기록을 관리하고, 하이퍼그래프(hypergraph)를 통해 정보를 인덱싱해서 검색 효율을 높였거든요. 그 결과 5개 QA 벤치마크 중 4개에서 가장 높은 정확도를 보였고, 특히 AutoDream 기능을 끄고도 기존 모델보다 훨씬 뛰어난 성능을 냈다는 겁니다. 추가적인 미세 조정(fine-tuning) 없이도 바로 사용할 수 있다는 장점이 있어요.",
            "topic": "다중 에이전트 기억 시스템인 MIRIX-2.0의 구조와 성능 평가에 관한 연구예요.",
            "one_line": "다중 에이전트 기억 시스템인 MIRIX-2.0을 개발하여 기억 효율과 정확도를 높였어요.",
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
          "canon_id": "2611.18482",
          "title": "MMFlash: Faster Speculative Decoding for Vision-Language Models",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.18482",
            "arxiv": "https://arxiv.org/abs/2611.18482"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 35,
          "score": 4.5,
          "score_why": "추천 35 → +3.5 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "멀티모달 모델은 왜 추론 속도가 느려질까",
            "easy1_desc": "기존의 추론 가속 방식인 추론적 디코딩(Speculative decoding)은 가벼운 모델이 미리 토큰을 제안하면 큰 모델이 검증하는 방식인데요, 텍스트 전용 모델에서는 잘 작동하지만 이미지나 영상이 포함된 멀티모달 모델에서는 아직 연구가 부족한 상황이었거든요. 연구진이 시각적 의존도에 따른 토큰 수용률을 측정해 봤더니, 시각 정보에 의존하는 정도가 높을수록 수용률이 46%에서 22%까지 뚝 떨어지는 걸 확인했습니다. 쉽게 말하면, 모델이 시각 정보를 많이 참고해야 할수록 예측이 어려워져서 속도 향상 효과가 줄어든다는 말이에요.",
            "easy2_title": "시각 정보를 잘 다루는 새로운 가속 프레임워크를 만들었어요",
            "easy2_desc": "그래서 연구진은 시각적 의존도가 높은 토큰을 더 잘 예측하도록 가중치를 조절하는 MMFlash라는 프레임워크를 제안했는데요, 긴 영상 입력이 들어올 때는 희소 어텐션(Sparse attention)을 써서 불필요한 계산을 줄이고 예측 품질을 높였다는 겁니다. 이렇게 했더니 여러 멀티모달 벤치마크에서 기존 모델들보다 최대 3.58배 빠른 속도로 디코딩이 가능해졌거든요. 기존 모델인 EAGLE-3나 DFlash와 비교해도 성능이 훨씬 뛰어나다는 게 연구진의 주장이에요.",
            "topic": "시각적 의존도가 높은 멀티모달 모델의 추론 속도를 높이기 위해 MMFlash 프레임워크를 개발하고 그 성능을 검증했어요.",
            "one_line": "시각적 의존도를 고려한 MMFlash로 멀티모달 모델의 추론 속도를 높였어요.",
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
          "canon_id": "2611.12901",
          "title": "Rethinking in Spikes: Mitigating Hallucinations in MDLMs with Step-Aware Decoding",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.12901",
            "arxiv": "https://arxiv.org/abs/2611.12901"
          },
          "published": "2026-10-14",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 35,
          "score": 4.5,
          "score_why": "추천 35 → +3.5 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "멀티모달 모델이 엉뚱한 소리를 하는 이유를 찾아봤어요",
            "easy1_desc": "멀티모달 확산 언어 모델(MDLM)이 반복적으로 다듬는 과정을 거치면서 전체적으로는 불확실성이 줄어들지만, 특정 단계에서 갑자기 엔트로피가 치솟는 현상이 나타나거든요. 연구진은 이 순간 모델이 잘못된 정보를 생성하는 환각 현상이 발생한다고 봤는데요. 뭔 소리냐면, 모델이 중간에 토큰을 확정 지어 버리면서 문맥 정보를 잃어버리는 게 문제라는 말이에요.",
            "easy2_title": "환각을 줄이기 위해 단계별로 다르게 대응하는 방법을 썼어요",
            "easy2_desc": "그래서 연구진은 StepRefine이라는 새로운 디코딩 전략을 제안했는데요. 엔트로피가 치솟는 단계에서는 모델이 토큰을 바로 확정하지 않고 확률 가중치가 적용된 임베딩을 사용해 여러 가능성을 열어두는 방식이에요. 평소에는 일반적인 방식을 쓰다가 필요할 때만 연속적인 다듬기 과정을 거치니 환각이 줄어드는 효과가 있거든요. 쉽게 말하면, 모델이 헷갈려 하는 순간에만 더 신중하게 고민하도록 만든 셈이에요.",
            "topic": "멀티모달 확산 언어 모델에서 발생하는 환각 현상을 줄이기 위해 엔트로피 변화를 감지하고 단계별로 대응하는 디코딩 기법을 제안했어요.",
            "one_line": "엔트로피 급증 단계를 감지해 환각을 줄이는 디코딩 기법을 개발했어요.",
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
          "canon_id": "2611.18502",
          "title": "EPIGRIDS: Documentation and Validation of Seven Open Synthetic Transmission Grid Cases",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18502"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "공개된 전력망 데이터가 실제와 달라 연구하기 어려웠어요",
            "easy1_desc": "대부분의 공개 전력망 데이터는 그래프 통계 방식에 의존해서 만들어졌는데, 이게 실제 전력망의 복잡한 특성을 온전히 담아내지 못한다는 문제가 있었거든요. 연구진은 이런 한계를 극복하고자 최적화 기반의 새로운 구축 방식을 도입해 EPIGRIDS라는 일곱 가지 합성 전력망 사례를 만들었습니다. 쉽게 말하면, 기존 데이터보다 더 실제 전력망의 구조를 잘 반영한 새로운 연구용 데이터를 제공하려는 겁니다.",
            "easy2_title": "새로운 방식으로 전력망 데이터를 구축해 검증까지 마쳤어요",
            "easy2_desc": "연구진은 250개에서 78,484개에 이르는 버스를 포함한 일곱 가지 사례를 구축하고, 교류 전력 흐름 해석을 통해 모든 사례가 정상적으로 작동함을 확인했습니다. 특히 여섯 개의 큰 사례에는 1년 치의 시간별 부하 데이터까지 포함해 연구 활용도를 높였는데요, 기존 통계 방식 데이터와 비교했을 때 밀도 면에서 차이가 있다는 점도 밝혔습니다. 결과적으로 이 데이터들은 누구나 자유롭게 쓸 수 있는 공개 라이선스로 배포되어 전력망 연구의 표준이 될 것으로 보입니다.",
            "topic": "최적화 기반 구축 방식을 통해 실제 전력망의 특성을 반영한 일곱 가지 공개 합성 전력망 데이터셋인 EPIGRIDS를 소개하고 검증한 연구예요.",
            "one_line": "최적화 기반의 새로운 합성 전력망 데이터셋을 구축하고 검증했어요.",
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
              "예측 의심: 결과적으로 이 데이터들은 누구나 자유롭게 쓸 수 있는 공개 라이선스로 배포되어 전력망 연구의 표준이 될 것으"
            ],
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.18451",
          "title": "Policy-Conditioned Koopman Representations for Parameterized Closed-Loop Systems",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18451"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "제어기마다 매번 새로 학습하는 건 너무 비효율적이에요",
            "easy1_desc": "비선형 시스템(입력과 출력이 비례하지 않는 복잡한 체계)을 예측할 때, 제어기 설정이 바뀔 때마다 모델을 처음부터 다시 학습해야 하는 문제가 있었거든요. 이 과정에서 잠재적 동역학이나 관측 좌표가 제어기 매개변수에 따라 계속 변하기 때문에 모델이 이를 제대로 따라가지 못하는 겁니다. 쉽게 말하면, 제어기 하나 바꿀 때마다 모델을 새로 짜야 해서 시간과 자원이 많이 든다는 말이에요.",
            "easy2_title": "제어기 설정까지 반영하는 통합 모델을 만들었어요",
            "easy2_desc": "연구진은 제어기 정책을 조건으로 입력하는 쿱만 표현(Koopman representation) 프레임워크를 제안했는데요, 이 모델 하나만 있으면 제어기를 바꿀 때마다 재학습할 필요 없이 다양한 폐루프 궤적을 예측할 수 있게 됩니다. 실제로 4가지 비선형 예측 벤치마크에서 테스트해 봤더니, 모든 시스템에서 오차율을 15% 미만으로 유지하는 성과를 보였거든요. 기존 모델들이 적어도 하나 이상의 시스템에서 15% 이상의 오차를 낸 것과 비교하면 훨씬 뛰어난 성능이라는 겁니다.",
            "topic": "제어기 매개변수에 따라 변하는 폐루프 시스템의 동역학을 효율적으로 예측하고 제어기를 선택하는 새로운 프레임워크에 대한 연구예요.",
            "one_line": "제어기 매개변수를 반영하는 통합 쿱만 모델을 개발해 예측 효율을 높였어요.",
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
          "canon_id": "2611.18390",
          "title": "CS-MPC: Contraction-Certified Sampling-Based MPC for Nonlinear Systems Under Uncertainty",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18390"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇이 불확실한 환경에서 움직일 때 생기는 문제",
            "easy1_desc": "로봇이 복잡한 환경에서 움직이다 보면 갑자기 장애물이 나타나거나 외부에서 힘이 가해지는 등 예상치 못한 상황을 마주하게 되는데요. 기존의 방식은 이런 불확실성을 일일이 계산하기 어려워 안전을 보장하기가 힘들다는 문제가 있었습니다. 뭔 소리냐면, 로봇이 경로를 따라가다가도 돌발 상황이 생기면 제어력을 잃거나 안전 구역을 벗어날 수 있다는 말이에요.",
            "easy2_title": "수축 이론을 활용해 로봇의 안전과 경로 추종을 개선했어요",
            "easy2_desc": "연구진은 수축 이론을 기반으로 한 CS-MPC라는 새로운 제어 방식을 제안했는데요. 샘플링을 할 때마다 수축 인증을 거친 피드백을 적용해서 로봇이 기준 경로를 더 잘 따라가게 만들고, 제어 장벽 함수를 써서 안전까지 확실하게 검증하도록 했습니다. 그 결과 기존 방식보다 훨씬 적은 샘플링으로도 정밀한 추종이 가능해졌고, 200번의 시뮬레이션에서 안전 사고가 전혀 없었다는 점이 달라진 부분이에요.",
            "topic": "불확실한 비선형 로봇 시스템을 위해 수축 이론과 샘플링 기반 모델 예측 제어를 결합한 CS-MPC의 성능과 안전성을 검증한 연구입니다.",
            "one_line": "수축 이론을 결합한 샘플링 기반 모델 예측 제어로 로봇의 안전성을 높였어요.",
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
          "canon_id": "2611.18364",
          "title": "Reinforcement Learning for Null-Space Exploitation in Pseudo-Inverse Control Allocation",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18364"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "남는 조종 능력을 제대로 쓰기가 참 어려웠거든요",
            "easy1_desc": "비행기 조종 장치가 많아지면 남는 조종 능력이 생기는데, 이걸로 공기 저항을 줄이거나 부품 마모를 막는 등 추가적인 목표를 달성할 수 있거든요. 그런데 비행 상황이 복잡하게 변할 때마다 사람이 일일이 가중치를 조절하거나 미리 정해진 값을 입력해야 해서 실무에서 쓰기가 무척 까다로웠다는 말이에요. 쉽게 말하면, 비행기 상태에 따라 매번 최적의 값을 찾아내기가 너무 복잡했다는 겁니다.",
            "easy2_title": "강화학습으로 남는 능력을 알아서 쓰게 만들었어요",
            "easy2_desc": "그래서 연구진은 강화학습 에이전트를 활용해 비행기 조종의 남는 공간인 널 스페이스(Null-space)에서만 스스로 전략을 학습하도록 설계했는데요. 이 방식은 비행기 조종의 핵심인 명령 추적은 그대로 유지하면서, 추가적인 목표만 따로 최적화할 수 있다는 장점이 있어요. 실제로 비행 모델에 적용해 봤더니, 기존 방식보다 공기 저항을 줄이면서도 조종 안정성은 그대로 지켜냈다는 겁니다.",
            "topic": "과잉 구동 항공기의 제어 할당 문제에서 강화학습을 통해 널 스페이스를 활용하는 하이브리드 제어 구조를 제안했어요.",
            "one_line": "강화학습을 이용해 항공기 제어의 널 스페이스를 최적화하는 구조를 개발했어요.",
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
              "예측 의심: 이번에 제안한 구조는 앞으로 여러 가지 목표를 동시에 달성하거나 임무 상황에 맞춰 정책을 바꾸는 연구의 기초"
            ],
            "tag": "제어·로봇",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.18339",
          "title": "Control Invariance on Manifolds through Tangent Bundle Splitting",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18339"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 시스템에서 안전을 지키기가 왜 어려웠을까요",
            "easy1_desc": "비선형 시스템이 서로 연결된 상황에서는 각 부분의 안전 조건을 하나로 합쳐서 전체의 안전을 보장하기가 까다로운데요. 기존에는 각 시스템이 서로 영향을 주지 않고 독립적으로 움직여야만 안전한 범위를 계산할 수 있었거든요. 뭔 소리냐면, 시스템끼리 연결된 복잡한 구조에서는 안전을 확인하는 것 자체가 수학적으로 매우 복잡한 문제였다는 말이에요.",
            "easy2_title": "접선 다발을 쪼개서 안전 범위를 더 쉽게 찾았습니다",
            "easy2_desc": "연구진은 접선 다발(tangent bundle)을 쪼개고 좌표계를 조정하는 방식을 써서, 시스템이 서로 연결되어 있어도 안전한 범위를 찾을 수 있는 새로운 조건을 만들었는데요. 이 방식을 쓰면 각 시스템의 움직임이 서로 얽혀 있어도 안전을 확인할 수 있고, 입력값이 따로 제한된 경우에는 각자 제어할 수도 있다는 장점이 있어요. 쉽게 말하면, 시스템 간의 연결성을 무시하지 않고도 안전을 검증할 수 있게 된 셈이에요.",
            "topic": "매니폴드(manifold) 위에서 연결된 비선형 시스템의 제어 불변성을 보장하기 위한 새로운 수학적 조건을 개발했어요.",
            "one_line": "매니폴드 위에서 연결된 시스템의 안전을 보장하는 제어 조건을 개발했어요.",
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
          "canon_id": "2611.18322",
          "title": "Power Management of Electrically Driven Centrifugal Compressors for Flexible Operation",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18322"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "압축기가 갑자기 멈추지 않게 전력을 조절하는 게 어려웠어요",
            "easy1_desc": "산업 현장에서 쓰는 15MW급 원심 압축기는 전력을 줄일 때 서지(surge)라고 불리는 불안정한 상태에 빠지기 쉬운데요, 이게 뭔 소리냐면 압축기 내부의 공기 흐름이 역류하면서 기계가 고장 날 위험이 커진다는 말이에요. 그래서 전력을 급격히 낮추고 싶어도 기계 보호를 위해 천천히 조절해야만 했던 겁니다. 결국 전력망의 요구에 맞춰 빠르게 대응하는 데 한계가 있었다는 거예요.",
            "easy2_title": "새로운 제어 방식을 써서 기계 고장 없이 전력을 빠르게 줄였어요",
            "easy2_desc": "연구진은 피드백 제어 루프에 동적으로 크기가 조절되는 피드포워드 메커니즘과 최소/최대 선택기를 결합한 제어 구조를 제안했는데요, 이걸 적용해 봤더니 12MW에서 6MW까지 전력을 줄이는 상황에서 초당 최대 10MW 속도로 대응이 가능해졌어요. 0.54초 만에 전력의 90%를 줄이면서도 재순환 밸브를 열 필요가 없었다는 겁니다. 쉽게 말하면, 기계에 무리를 주지 않으면서도 전력망의 변화에 훨씬 민첩하게 움직일 수 있게 된 셈이에요.",
            "topic": "15MW급 원심 압축기의 전력 관리를 위해 서지 현상을 방지하며 전력 변화에 빠르게 대응하는 제어 전략을 연구했어요.",
            "one_line": "원심 압축기의 전력 제어 전략을 설계해 기계 고장 없이 빠르게 전력을 조절했어요.",
            "topic_tag": "전력망·계통",
            "limit": "전력 감소 속도는 토출 측 밸브의 작동 속도에 의해 제한된다는 점을 확인했어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.18313",
          "title": "Hierarchical Interactions in Mobility Networks: A Model-Free Feedback Approach",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18313"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "도시 이동 체계는 의사결정이 얽혀 있어 복잡해요",
            "easy1_desc": "도시 이동 체계는 정부와 이동 서비스 업체, 그리고 여행객의 결정이 계층적으로 얽혀서 나타나는 결과물인데요. 기존의 정책 설계 방식은 이 중 일부 단계를 무시하거나, 정부가 업체와 여행객의 반응을 완벽하게 예측할 수 있다고 가정하는 한계가 있었거든요. 뭔 소리냐면, 실제 복잡한 상호작용을 제대로 반영하지 못했다는 말이에요.",
            "easy2_title": "복잡한 모델 없이도 정책을 최적화하는 방법을 찾았어요",
            "easy2_desc": "그래서 연구진은 정부와 업체가 관찰된 결과만을 바탕으로 결정을 수정하는 모델 없는 계층적 제어기를 설계했는데요. 취리히 다중 모달 네트워크에서 실험해 봤더니, 이 제어기는 블랙박스 최적화 도구들의 최고 정책과 대등한 성능을 보였거든요. 정책을 짤 때 복잡한 수학적 모델을 일일이 만들지 않아도 된다는 장점이 있는데, 대신 관찰된 데이터의 일관성에 의존한다는 특징이 있다는 겁니다.",
            "topic": "도시 이동 네트워크에서 정부와 운영자, 여행객의 계층적 상호작용을 고려한 정책 설계 게임 모델과 제어 방식에 관한 연구예요.",
            "one_line": "도시 이동 네트워크의 계층적 상호작용을 모델 없는 제어 방식으로 최적화했어요.",
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
          "canon_id": "2611.18223",
          "title": "Characterisation of the DQsym Framework Against Harmonic State-Space and Dynamic Phasor Models for Modular Multilevel Converters",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18223"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 전력 변환기 모델이 너무 커서 다루기 힘들었어요",
            "easy1_desc": "현대 전력망에서 쓰는 모듈형 멀티레벨 변환기(MMC)는 여러 주파수가 섞인 복잡한 움직임을 보이거든요. 이걸 분석하려고 기존에는 고조파 상태 공간(HSS)이나 동적 페이저(DP) 방식을 써 왔는데, 모델에 포함하는 고조파 개수가 늘어날수록 계산해야 할 행렬 크기도 덩달아 커진다는 문제가 있었어요. 쉽게 말하면, 정밀하게 보려고 할수록 계산 부담이 너무 커지는 셈이에요.",
            "easy2_title": "계산 행렬 크기를 획기적으로 줄인 DQsym 방식을 제안했어요",
            "easy2_desc": "연구진은 DQsym이라는 새로운 대칭형 dq 동적 페이저 방식을 내놨는데요, 고조파 간의 결합을 상태 행렬 밖에서 계산하도록 바꿔서 행렬 크기를 고조파 차수와 상관없이 일정하게 유지하게 만들었어요. 실제로 K=4일 때 비교해 봤더니 기존 방식은 135개의 상태가 필요한 반면, DQsym은 45개면 충분했거든요. 정확도는 기준 모델 대비 4% 이내로 유지하면서도 계산 효율은 훨씬 높였다고 주장했어요.",
            "topic": "모듈형 멀티레벨 변환기(MMC)를 분석할 때 기존 방식보다 효율적인 DQsym 모델의 성능을 입증했어요.",
            "one_line": "MMC 분석을 위한 DQsym 모델을 개발하고 효율성을 입증했어요.",
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
          "canon_id": "2611.18220",
          "title": "From Pen-and-Paper to Machine-Checked Proofs: Lean for System Identification",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18220"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "수학 증명이 너무 복잡해서 검증하기가 어려웠어요",
            "easy1_desc": "과학 논문에 나오는 수학 증명은 워낙 길고 복잡해서, 하나하나 따져보기가 정말 힘들거든요. 그래서 연구진은 컴퓨터가 증명 과정을 직접 확인해 주는 대화형 정리 증명(Interactive theorem proving) 방식을 제안했어요. 이게 뭐냐면, 증명을 코드로 작성하면 신뢰할 수 있는 소프트웨어인 커널(kernel)이 모든 논리 단계를 검사해 주는 방식이에요. 사람이 일일이 확인하는 것보다 훨씬 정확하고 확실하게 검증할 수 있다는 장점이 있는 겁니다.",
            "easy2_title": "린(Lean)을 써서 증명을 코드로 바꾸니 숨겨진 오류가 보였어요",
            "easy2_desc": "연구진은 시스템 식별과 제어 분야 연구자들이 린(Lean)이라는 증명 보조 도구를 쉽게 쓸 수 있도록 입문 가이드를 만들었어요. 실제로 기존 논문의 정리를 린으로 다시 검증해 봤더니, 원래는 모든 경우에 성립한다고 알려졌던 내용이 사실은 특정 조건에서만 맞다는 점을 찾아냈거든요. 뭔 소리냐면, 사람이 손으로 증명할 때는 무심코 지나쳤던 미세한 오류를 컴퓨터가 잡아냈다는 말이에요. 덕분에 연구의 신뢰성을 더 높일 수 있게 된 셈입니다.",
            "topic": "시스템 식별 및 제어 연구에서 수학적 증명의 정확성을 높이기 위해 린(Lean) 증명 보조 도구를 활용하는 방법을 다루고 있어요.",
            "one_line": "시스템 식별 연구의 증명 검증을 위해 린(Lean) 도구 활용법을 제시했어요.",
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
          "canon_id": "2611.18197",
          "title": "Data-Driven Sparse Identification and Robust Tube-Based Predictive Control for Multivariable Chaotic Systems",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18197"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡하고 예측하기 어려운 시스템을 데이터로 어떻게 다룰지 고민했어요",
            "easy1_desc": "변수가 많고 움직임이 불규칙한 카오스 시스템은 제어하기가 참 까다로운데요, 연구진은 4차원 로슬러(Rossler) 반응 시스템에서 얻은 데이터를 활용해 이 시스템의 모델을 찾아내 봤습니다. STLSQ(순차적 임계 최소 자승법)라는 기술을 써서 모델을 복구했더니, 모든 채널에서 R^2 값이 1.0000에 달할 정도로 정확도가 높았다는 거예요. 쉽게 말하면, 데이터만으로도 시스템의 핵심 구조를 아주 정밀하게 파악해 냈다는 말입니다.",
            "easy2_title": "데이터 기반 모델로 시스템을 더 튼튼하게 제어하는 방법을 찾았어요",
            "easy2_desc": "모델을 찾은 뒤에는 외부 방해나 불확실성이 있어도 시스템이 안정적으로 작동하게끔 강인한 제어기를 설계했는데요, 데이터에서 나온 오차를 하나의 불확실성 범위로 묶어서 수학적으로 증명해 냈다는 겁니다. 이 범위를 바탕으로 튜브 기반 모델 예측 제어(Tube-based MPC)를 적용했더니, 시스템이 물리적 한계치 안에서 안정적으로 움직이게 됐거든요. 결과적으로 제어 성능이 입력값에 따라 안정적으로 유지된다는 점을 이론적으로 입증했다는 게 핵심이에요.",
            "topic": "데이터 기반의 식별 기술과 튜브 기반 모델 예측 제어를 결합하여 다변수 카오스 시스템을 안정적으로 제어하는 방법을 제안했어요.",
            "one_line": "데이터 기반 모델 식별과 강인한 예측 제어로 카오스 시스템을 제어했어요.",
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
          "canon_id": "2611.18094",
          "title": "Controllability-Informed Distributed Electric Propulsion Aircraft Design Using Probabilistic Attainable Moment Sets",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18094"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "분산 전기 추진 항공기는 설계할 때부터 제어 능력을 따져봐야 해요",
            "easy1_desc": "분산 전기 추진(DEP)을 사용하는 항공기는 추진 시스템 자체가 비행 제어의 일부를 담당하거든요. 그래서 꼬리날개 크기를 정할 때 추진 시스템의 제어 능력을 미리 알아야 하는데, 기존 설계 방식에서는 이런 연관성을 초기에 반영하기가 어려웠다는 거예요. 쉽게 말하면, 추진 장치가 비행기에 미치는 영향을 설계 단계에서부터 제대로 계산에 넣어야 한다는 말이에요.",
            "easy2_title": "확률적 도달 가능 모멘트 집합으로 제어 성능을 미리 확인해요",
            "easy2_desc": "연구진은 설계 루프 안에서 각 항공기 모델의 제어 능력을 평가하는 새로운 지표를 만들었는데요, 저충실도 대리 모델이 가진 불확실성을 확률적 도달 가능 모멘트 집합으로 계산해 낸 겁니다. 이렇게 하면 특정 설계가 충분한 제어 권한을 갖췄는지, 어느 축에서 부족한지를 바로 알 수 있거든요. 결과적으로 설계 변수가 바뀔 때마다 제어 성능이 어떻게 변하는지 실시간으로 파악할 수 있다는 장점이 있어요.",
            "topic": "분산 전기 추진 항공기 설계 과정에서 제어 능력을 평가하고 반영하기 위한 확률적 방법론을 제시했어요.",
            "one_line": "확률적 모멘트 집합을 활용해 항공기 설계 시 제어 능력을 평가하는 방법을 개발했어요.",
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
          "canon_id": "2611.18085",
          "title": "Distributed Output-Feedback Control for Linear Multichannel Systems",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18085"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "각자 정보를 숨기면서 시스템을 안정화하기가 어려웠어요",
            "easy1_desc": "선형 다채널 시스템에서 각 에이전트가 자신의 제어 입력이나 피드백 이득을 공개하지 않고 상태 추정값만 주고받으며 시스템을 안정화하는 게 핵심 과제였거든요. 그런데 정보를 숨기면서도 전체 시스템을 안정적으로 유지하는 방법을 찾는 게 쉽지 않았다는 말이에요. 뭔 소리냐면, 각자의 로컬 정보를 보호하면서도 전체의 안정성을 보장할 수 있는 제어 구조를 설계해야 했다는 겁니다.",
            "easy2_title": "정보를 숨겨도 시스템이 잘 작동하도록 제어기를 설계했어요",
            "easy2_desc": "연구진은 원격 제어 동작을 미지의 입력으로 간주하고 이를 안정적인 몫 오차 역학에서 기하학적으로 분리하는 방식을 제안했는데요. 이 방식을 쓰면 각 에이전트가 가진 손실 부분 공간이 겹치더라도 시스템의 결합을 유지할 수 있게 됩니다. 결과적으로 특정 피드백 선택에 대해 시스템이 지수적으로 수렴함을 보장할 수 있게 되었는데, 수치 예제를 통해 이 설계가 실제로 효과적이라는 점을 확인했다는 거예요.",
            "topic": "선형 다채널 시스템에서 로컬 정보를 보호하며 분산 출력 피드백 제어를 수행하는 설계 방법을 다루고 있어요.",
            "one_line": "정보를 숨긴 채 시스템을 안정화하는 분산 제어기를 설계했어요.",
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
          "canon_id": "2611.18077",
          "title": "Grid-Compliance Testing of Wind Turbines through Virtualized Component Tests: Testing Concept and Test Bench",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18077"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "풍력 발전기가 전력망에 잘 맞는지 확인하기가 어려워졌어요",
            "easy1_desc": "인버터로 연결되는 풍력 발전기가 늘어나면서, 이 기기들이 전력망에서 어떻게 작동하는지 검사하는 일이 중요해졌거든요. 그런데 기존 방식으로는 실제 환경과 똑같이 테스트하기가 까다로운 문제가 있었어요. 쉽게 말하면, 발전기가 전력망에 안정적으로 전기를 보낼 수 있는지 확인하는 과정이 점점 복잡해지고 있다는 겁니다.",
            "easy2_title": "인터넷과 광케이블을 써서 가상으로 테스트하는 방법을 만들었어요",
            "easy2_desc": "연구진은 전력 하드웨어 루프(PHiL) 방식을 활용해 풍력 발전기의 전력망 연결을 테스트하는 새로운 방법을 제시했는데요. 공기 역학 시뮬레이션은 인터넷으로, 전력망 모델은 광케이블로 연결해서 실제 인증 시험에 통합한 거예요. 실험 결과, 에뮬레이션 품질이 높고 지연 시간도 충분히 낮아서 표준 규격을 만족하는 전력망 모의시험이 가능하다고 밝혔습니다.",
            "topic": "풍력 발전기의 전력망 적합성을 검증하기 위해 지리적으로 분산된 시뮬레이션을 통합한 PHiL 기반 테스트 개념과 장치를 제안했어요.",
            "one_line": "풍력 발전기 전력망 적합성 검사를 위해 분산 시뮬레이션을 통합한 PHiL 방식을 개발했어요.",
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
              "one_line 51자"
            ],
            "flags": [],
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.18031",
          "title": "Latent resonances in oscillator networks",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18031"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "댐핑을 넣으면 무조건 진동이 줄어들 줄 알았는데 아니었어요",
            "easy1_desc": "보통 신경 회로나 전력망 같은 연결된 진동자(oscillator) 네트워크에서는 댐핑(damping, 감쇠)을 추가하면 에너지가 사라지면서 진동이 억제될 거라고 생각하거든요. 그런데 연구진이 확인해 보니, 전체적인 진동 에너지는 줄어들면서도 특정 입력과 출력 경로에서는 오히려 진동이 커지는 현상이 나타났다는 거예요. 이게 무슨 말이냐면, 댐핑이 단순히 진동을 죽이는 역할만 하는 게 아니라 네트워크 내부의 에너지를 재분배할 수도 있다는 뜻입니다.",
            "easy2_title": "숨어 있던 공명을 끄집어내서 특정 경로의 반응을 키웠어요",
            "easy2_desc": "이런 현상은 평소에는 잘 드러나지 않던 잠재적 공명(latent resonance)이 댐핑을 통해 주변 고유 모드(eigenmodes)와 섞이면서 나타나는 결과인데요. 연구진이 무작위 전력망 네트워크에서 실험해 봤더니, 댐핑을 추가했을 때 반응이 약했던 채널이 10배 이상 커지기도 했거든요. 심지어 원래 가장 강했던 채널보다 더 큰 반응을 보이는 채널이 생기기도 한다는 겁니다. 결과적으로 댐핑을 이용해 네트워크의 진동 반응을 원하는 대로 설계하고 제어할 수 있는 새로운 방법을 찾은 셈이에요.",
            "topic": "네트워크 내 댐핑이 진동을 억제하는 것을 넘어 특정 경로의 반응을 증폭시키는 원리와 이를 활용한 제어 방안을 다뤘습니다.",
            "one_line": "댐핑을 활용해 네트워크 내 진동 에너지를 재분배하고 특정 경로의 반응을 증폭시켰어요.",
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
          "canon_id": "2611.18020",
          "title": "Data-Driven Output Regulation via Predictive Control",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18020"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시스템 모델을 몰라도 출력을 조절할 수 있습니다",
            "easy1_desc": "보통은 시스템이 어떻게 움직이는지 수학 모델을 먼저 알아야 제어할 수 있는데요, 이번 연구는 모델을 직접 구하지 않고도 입력과 출력 데이터만으로 제어를 수행하는 방법을 찾아냈습니다. 뭔 소리냐면, 복잡한 방정식을 풀거나 시스템을 일일이 식별할 필요 없이 데이터만으로도 외부 방해를 막고 원하는 목표치를 따라가게 만들었다는 거예요. 모델을 모르는 상태에서도 제어가 가능하다는 점이 가장 큰 특징입니다.",
            "easy2_title": "데이터 기반 예측 제어로 안정적인 조절이 가능해졌습니다",
            "easy2_desc": "연구진은 윌렘스(Willems) 등이 제시한 기본 원리를 확장해서, 외부 신호와 결합된 데이터로 시스템의 움직임을 직접 표현하는 방식을 고안했습니다. 이 방식을 데이터 기반 예측 제어(DDPC)에 적용했더니, 시스템이 정해진 목표 상태로 지수적으로 수렴한다는 것을 수학적으로 증명해 냈거든요. 특히 노이즈가 있는 환경에서도 오차를 줄이는 강건한 제어 법칙을 만들어, 실제 차량 제어 예시를 통해 그 성능을 확인했다는 겁니다.",
            "topic": "데이터 기반 예측 제어를 활용하여 시스템 모델 식별 없이 외부 신호에 대응하는 출력 조절 기법을 제안했습니다.",
            "one_line": "데이터 기반 예측 제어로 모델 식별 없이 출력을 조절하는 기법을 개발했어요.",
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
          "canon_id": "2611.17863",
          "title": "Implicit discretization of PID-like sliding-mode control with third-order output accuracy",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17863"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "디지털 제어기에서 생기는 떨림 현상을 해결하고 싶었어요",
            "easy1_desc": "연속적인 제어기를 디지털로 바꿀 때, 샘플링 과정에서 원치 않는 떨림인 채터링(chattering)이 발생하는 문제가 있었는데요. 연구진은 이 문제를 해결하기 위해 이중 적분기(double integrator) 시스템에 적합한 새로운 디지털 PID 슬라이딩 모드 제어기를 제안했습니다. 쉽게 말하면, 디지털 환경에서도 연속 제어기만큼의 정밀한 성능을 내면서도 떨림은 없애는 방법을 고안했다는 거예요.",
            "easy2_title": "정밀도를 3차까지 높여서 더 정확하게 제어할 수 있게 됐어요",
            "easy2_desc": "새로운 암시적 이산화(implicit discretization) 방식을 적용했더니, 출력 정밀도가 3차까지 올라가고 미분값은 2차 정밀도를 확보하게 됐는데요. 상수 형태의 외란(disturbance)은 유한한 시간 안에 완벽하게 제거할 수 있다는 장점도 확인했습니다. 연구진은 이 방식이 동일한 샘플링 정보를 사용하는 결정론적 인과 제어기 중에서 이론적으로 가장 뛰어난 정밀도를 가진다고 주장했어요.",
            "topic": "디지털 제어 시스템에서 외란을 효과적으로 제거하고 제어 성능을 최적화하는 암시적 이산화 방식의 PID 슬라이딩 모드 제어기 설계에 관한 연구예요.",
            "one_line": "디지털 제어기의 떨림을 없애고 정밀도를 높이는 새로운 제어 방식을 설계했어요.",
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
          "canon_id": "2611.17815",
          "title": "Improved Closed-Form Identification of the Air-Gap Permeance in Magnetic Equivalent Circuits of Rotor-Eccentric Electric Motors",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17815"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "전기 모터 시뮬레이션에서 공극 자기장 표현이 부정확했던 문제",
            "easy1_desc": "전기 모터의 설계나 고장 진단을 하려면 시뮬레이션이 필수적인데, 기존에 쓰던 자기 등가 회로(MEC) 방식은 공극(에어갭)의 자기장 특성을 제대로 담아내지 못한다는 한계가 있었거든요. 공극은 모터의 전자기 토크와 회전자가 중심에서 벗어난 모터의 불균형 자기 인력(UMP)을 결정하는 핵심 부위인데, 기존 모델들은 이 부분을 정밀하게 계산하지 못했던 겁니다. 쉽게 말하면, 모터의 성능을 좌우하는 중요한 공간을 제대로 표현하지 못해 결과값에 오차가 컸다는 말이에요.",
            "easy2_title": "새로운 이중항 공극 투과도 모델로 계산 정확도를 크게 높였어요",
            "easy2_desc": "연구진은 이 문제를 해결하려고 이중항 공극 투과도(DTAP) 모델을 제안했는데요, 회전자가 중심에서 벗어난 정도를 법선 방향과 접선 방향 모두 고려해 계산할 수 있도록 만든 거예요. 이걸 적용했더니 기존 방식보다 오차를 2.8배에서 4.8배까지 줄였고, 토크 리플과 불균형 자기 인력도 실제 값과 거의 비슷하게 예측해 냈거든요. 계산 속도는 그대로 유지하면서도 정확도만 크게 높였다는 점이 핵심입니다.",
            "topic": "전기 모터의 자기 등가 회로 모델에서 공극 투과도를 더 정확하게 계산하기 위한 새로운 DTAP 모델을 제안하고 그 성능을 검증했어요.",
            "one_line": "전기 모터의 공극 투과도를 정밀하게 계산하는 DTAP 모델을 개발했어요.",
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
          "canon_id": "2611.17689",
          "title": "Orbit-AWARE: From Onboard AI Deployment to Sustainable In-Orbit Intelligence",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17689"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "위성 AI가 시간이 지나면서 엉뚱한 판단을 내리는 게 문제였어요",
            "easy1_desc": "우주 공간에서 인공지능이 데이터를 처리할 때 시간이 흐르면 모델이 원래 성능을 잃어버리는 모델 드리프트(Model drift) 현상이 발생하는데요. 이게 왜 문제냐면 중요한 관측 데이터를 놓치거나 중요하지 않은 정보에만 매달리게 되어 정작 필요한 임무 수행을 방해하기 때문이에요. 쉽게 말하면 인공지능이 시간이 갈수록 판단 기준이 흐려져서 정작 중요한 증거를 수집하지 못하게 된다는 겁니다.",
            "easy2_title": "위성 AI가 스스로를 지키고 똑똑하게 관리하는 체계를 만들었어요",
            "easy2_desc": "연구진은 Orbit-AWARE라는 새로운 관리 체계를 도입해서 인공지능이 데이터를 처리하는 과정을 실시간으로 감시하고 문제가 생기면 즉시 대응하도록 만들었는데요. 기존 방식과 달리 모델이 망가지기 전에 데이터를 미리 확보해 두고 지상과 협력해서 모델을 수정하는 구조예요. 실제로 실험해 봤더니 기존 방식보다 중요한 관측은 14.3% 더 많이 수행하고 임무 효율은 8.3% 더 높게 나타났거든요. 쉽게 말하면 위성 AI가 스스로 자기 상태를 점검하고 문제가 생기면 지상과 함께 고쳐 나가는 시스템을 구축한 셈이에요.",
            "topic": "위성 탑재 인공지능의 신뢰성을 높이기 위해 증거 기반의 생애 주기 관리 구조인 Orbit-AWARE를 제안했어요.",
            "one_line": "위성 AI의 신뢰성을 높이는 관리 구조인 Orbit-AWARE를 제안하고 성능을 검증했어요.",
            "topic_tag": "제어·로봇",
            "limit": "연구진은 향후 과제로 작업 인식 기반의 신뢰성 평가와 메모리 및 도구를 활용하는 에이전트, 그리고 증거 중심의 우주 네트워크 확장 등을 제시했어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
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
            "format": [
              "one_line 51자"
            ],
            "flags": [],
            "tag": "제어·로봇",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.17504",
          "title": "Learning monotone game-theoretic linear MPC",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17504"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "남들이 어떻게 움직이는지 보고 그 속마음을 알아내고 싶었어요",
            "easy1_desc": "여러 에이전트가 움직이는 시스템에서 나오는 입력과 출력 데이터를 가지고, 그들이 어떤 게임 이론적 모델 예측 제어(GT-MPC)를 따르는지 학습하는 방법을 제안했는데요. 에이전트들이 각자 어떤 목표를 가졌는지 직접 묻지 않아도, 그들이 내놓은 첫 움직임을 게임의 균형점으로 해석해서 제어 가중치를 찾아내는 방식이에요. 쉽게 말하면, 행동만 보고도 그들이 무엇을 의도했는지 역으로 추적해 내는 셈이에요.",
            "easy2_title": "수학적 조건을 걸어서 제어의 안정성과 효율을 높였어요",
            "easy2_desc": "학습한 결과물인 일반화된 내쉬 균형(GNE) 문제가 강한 단조성을 갖도록 제약을 걸었는데요. 이렇게 하면 균형점이 항상 존재하고 유일하게 결정되어서, 온라인 환경에서도 변분법을 이용해 빠르게 계산할 수 있게 돼요. 또한 강한 단조성 덕분에 미분이 가능해져서 경사 하강법 같은 최적화 기법을 쓰기에도 유리해졌거든요. 안정성을 위해 이차 리아푸노프 함수를 함께 학습시켜서 제어 루프가 안정적으로 유지되도록 만든 점도 특징이에요.",
            "topic": "다중 에이전트 시스템에서 에이전트의 목표를 직접 알지 못해도 그들의 행동 데이터를 모방하여 게임 이론적 모델 예측 제어 법칙을 학습하는 방법이에요.",
            "one_line": "데이터를 모방해 다중 에이전트의 제어 법칙을 학습하는 방법을 제안했어요.",
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
          "canon_id": "2611.17479",
          "title": "RAZeR: Representation Aware Zonotope Reduction",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17479"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡해지는 영역을 줄이는 과정에서 생기는 오차 문제",
            "easy1_desc": "동적 시스템의 안전성을 확인하는 도달 가능성 분석에서는 불확실성을 나타내기 위해 조노토프(zonotope)라는 도형을 사용하는데요, 분석이 진행될수록 이 도형의 크기가 계속 커지는 문제가 발생합니다. 그래서 중간중간 크기를 줄이는 작업이 필수적인데, 이때마다 분석 결과가 실제보다 더 넓게 잡히는 보수적인 오차가 생기거든요. 지금까지는 보통 한 가지 방법만 골라서 줄이다 보니, 여러 방법의 장점을 제대로 활용하지 못했다는 한계가 있었던 겁니다.",
            "easy2_title": "상황에 맞춰 줄이는 방식을 바꾸니 훨씬 정확해졌어요",
            "easy2_desc": "연구진은 분석 과정에서 어떤 줄이기 방식을 쓸지 상황에 따라 동적으로 선택하는 RAZeR라는 방식을 제안했는데요, 모델 예측 제어(model predictive control)에서 가져온 휴리스틱을 활용해 앞으로 도형이 어떻게 변할지 미리 고려하도록 만든 겁니다. 이렇게 하면 단순히 계산 뒤에 줄이는 게 아니라, 시스템 움직임에 맞춰 도형의 모양을 미리 다듬는 효과가 생기거든요. 결과적으로 기존보다 훨씬 정밀한 분석이 가능해졌고, 계산 속도도 거의 차이가 없다는 게 연구진의 주장이에요.",
            "topic": "동적 시스템의 도달 가능성 분석에서 조노토프 크기를 효율적으로 줄여 분석의 정확도를 높이는 기법에 대한 연구예요.",
            "one_line": "조노토프 축소 방식을 동적으로 선택해 분석 정확도를 높였어요.",
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
          "canon_id": "2611.17397",
          "title": "Admissibility-Preserving Control for Block Strict-Feedback Systems Under Time-Varying Asymmetric Actuator and State Constraints",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17397"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "제어 시스템이 한계치를 넘지 않게 막는 게 어려웠거든요",
            "easy1_desc": "비선형 시스템을 제어할 때 구동기와 상태 변수가 시간에 따라 변하는 비대칭적인 제약 조건을 만족하면서 움직이게 하는 게 참 까다로운 문제였는데요. 기존 방식으로는 시스템이 허용 범위를 벗어나지 않도록 실시간으로 입력값을 조절하는 데 한계가 있었거든요. 뭔 소리냐면 시스템이 안전한 영역 안에서만 작동하도록 보장하는 제어 기법이 필요했다는 말이에요.",
            "easy2_title": "입력값을 실시간으로 조절해서 안전한 범위를 지키게 만들었어요",
            "easy2_desc": "연구진은 시간에 따라 변하는 허용 가능 제어(APC) 프레임워크를 새로 개발했는데요. 핵심은 APIR이라는 기술로, 구동기 입력이 변하는 제약 범위 안에서 안전하게 작동하도록 동적으로 입력값을 실시간으로 만들어내는 거예요. 이렇게 하면 추적 오차가 지수적으로 0에 수렴하면서도 모든 상태 변수가 정해진 안전 범위 안쪽에 머물게 된다는 장점이 있어요. 쉽게 말하면 시스템이 고장 나거나 범위를 이탈하지 않도록 실시간으로 안전장치를 걸어둔 셈이에요.",
            "topic": "시간에 따라 변하는 비대칭 제약 조건이 있는 비선형 시스템을 위해 안전성을 보장하는 제어 프레임워크를 제안했어요.",
            "one_line": "비선형 시스템의 안전한 제어를 위해 입력 실현 기술을 개발했어요.",
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
          "canon_id": "2611.17831",
          "title": "V-JEPA-LM: Video-Language Models That Read Dynamics Beyond Static, Text-Aligned Representations",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.17831",
            "arxiv": "https://arxiv.org/abs/2611.17831"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 22,
          "score": 3.2,
          "score_why": "추천 22 → +2.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "영상 속 움직임을 읽지 못하고 겉모습만 쫓고 있었어요",
            "easy1_desc": "기존의 영상 언어 모델(VLM)은 영상 속 물체의 움직임이나 상태 변화를 이해하기보다, 캡션에 적힌 몇 가지 특징만 찾아내도록 학습되어 왔거든요. 실제로 V-JEPA 인코더는 영상의 속도를 87%의 정확도로 읽어낼 수 있는데도, 이를 언어 모델과 합치면 정답을 맞히지 못하는 현상이 나타난 겁니다. 쉽게 말하면, 영상의 역동적인 정보를 인코더는 가지고 있지만 언어 모델이 이를 활용하지 못하고 있다는 말이에요.",
            "easy2_title": "반사실적 학습으로 영상의 역동성을 읽어내도록 바꿨어요",
            "easy2_desc": "연구진은 영상의 픽셀을 변형해 정답이 변하는 반사실적 데이터를 만들고, 이를 통해 언어 모델이 영상의 변화를 직접 읽도록 학습시켰는데요. 이렇게 하면 언어 모델이 단순히 텍스트에 의존하지 않고 영상 속 역동성을 파악하게 된다는 겁니다. 그 결과, 기존 모델들보다 훨씬 적은 데이터와 연산량으로도 11개 영상 벤치마크에서 뛰어난 성능을 보였다고 주장했어요.",
            "topic": "V-JEPA 인코더의 역동적 특징을 언어 모델이 효과적으로 활용할 수 있도록 반사실적 학습 방식을 도입한 연구입니다.",
            "one_line": "반사실적 학습으로 영상의 역동성을 읽는 모델을 개발했어요.",
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
          "canon_id": "2611.17878",
          "title": "DySENSE: Dynamic Spatiotemporal ENergy Synthesis and Emulation with Satellite Imagery",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.17878",
            "arxiv": "https://arxiv.org/abs/2611.17878"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 21,
          "score": 3.1,
          "score_why": "추천 21 → +2.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "도시 에너지 데이터를 제대로 뽑아내기가 참 어려웠거든요",
            "easy1_desc": "도시가 전 세계 에너지 소비의 3분의 2 이상을 차지하고 탄소 배출의 70%를 넘기다 보니, 에너지 효율을 높이는 게 정말 중요해졌는데요. 지금까지는 이미 있는 도시를 예측하는 연구가 대부분이었고, 정교하게 맞춘 월별 에너지 데이터가 부족해서 미래 도시를 설계하는 데 한계가 있었거든요. 기존 생성형 AI 모델들도 도시의 기능과 월별 에너지 소비를 함께 만들어내는 걸 힘들어했다는 말이에요.",
            "easy2_title": "위성 사진과 에너지 지도를 한꺼번에 만들어내는 모델을 개발했어요",
            "easy2_desc": "연구진은 DySENSE라는 새로운 생성형 AI 프레임워크를 만들었는데요, 도시의 위성 사진과 월별 건물 에너지 소비 지도를 함께 합성해 내는 방식이에요. 도시의 고정된 형태와 변화하는 에너지 소비를 분리해서 처리하기 때문에, 도시의 모습을 유지하면서도 다양한 에너지 소비 지도를 새로 만들어낼 수 있거든요. 실제로 뉴욕과 부산 등 4개 도시에서 실험해 봤더니, 적은 데이터로도 에너지 예측 성능을 높이고 오차를 줄이는 결과를 보여줬다는 겁니다.",
            "topic": "도시의 위성 이미지와 월별 에너지 소비 지도를 결합하여 생성하는 멀티모달 생성형 AI 프레임워크인 DySENSE를 제안했습니다.",
            "one_line": "위성 사진과 에너지 지도를 결합 생성하는 AI 모델을 개발했어요.",
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
              "3"
            ],
            "format": [],
            "flags": [],
            "tag": "기타",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.18140",
          "title": "Large Language Model-Empowered Intelligent Agent for Adaptive Fast-Charging Control of Lithium-Ion Batteries",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18140"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "키워드 1개(battery) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "battery"
          ],
          "ai": {
            "easy1_title": "배터리 충전은 까다로운데 기존 방식은 유연하지 못했어요",
            "easy1_desc": "리튬이온 배터리를 빨리 충전하려면 충전 시간은 줄이면서도 배터리 수명이 깎이거나 위험한 반응이 일어나지 않게 잘 조절해야 하거든요. 그런데 기존의 충전 방식들은 배터리 종류나 상태가 조금만 바뀌어도 제대로 대응하지 못하는 한계가 있었어요. 모델 기반의 최적화나 데이터 기반 제어 방식도 정확한 모델이 필요하거나 계산 비용이 많이 든다는 단점이 있었거든요. 쉽게 말하면, 상황에 맞춰 똑똑하게 충전하기가 어려웠다는 말이에요.",
            "easy2_title": "거대언어모델을 활용해 배터리 충전을 똑똑하게 제어했어요",
            "easy2_desc": "연구진은 거대언어모델(LLM)을 활용한 지능형 에이전트를 개발해서 배터리 충전 제어에 적용해 봤는데요. 이 에이전트는 배터리 상태를 파악해 충전 명령을 내리고, 그 결과를 관찰하며 스스로 다음 결정을 조정하는 폐루프(Closed-loop) 방식을 사용해요. 5가지 배터리 화학 조성과 11가지 매개변수 세트를 활용해 방대한 시뮬레이션 데이터를 만들고, 이를 통해 에이전트를 학습시켰거든요. 결과적으로 기존 방식보다 배터리 수명을 더 길게 유지하면서도 목표한 에너지 처리량을 달성했다고 밝혔습니다.",
            "topic": "거대언어모델 기반 지능형 에이전트를 활용한 리튬이온 배터리의 적응형 급속 충전 제어 연구예요.",
            "one_line": "거대언어모델 기반 에이전트로 배터리 급속 충전을 제어했어요.",
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
          "canon_id": "2611.07226",
          "title": "Loopback Transformer: Towards a Unified View of Residual Looped Transformers",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.07226",
            "arxiv": "https://arxiv.org/abs/2611.07226"
          },
          "published": "2026-11-04",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 20,
          "score": 3.0,
          "score_why": "추천 20 → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "반복해서 쓰는 모델은 효율적이지만 정보 재사용 방식이 문제였어요",
            "easy1_desc": "기존의 루프드 트랜스포머(Looped Transformers)는 블록을 반복해서 써서 파라미터 수를 줄이는 방식인데요, 단순히 파라미터를 공유한다고 해서 반복 계산의 결과가 어떻게 재사용되는지까지는 정해지지 않았거든요. 연구진이 잔차 연결(residual connections)을 깊이와 기억의 관점에서 분석해 봤더니, 블록 출력값에 이전 정보와 새로운 정보가 섞여 있어 이를 가중치로 조절할 때 문제가 생긴다는 걸 확인했어요. 쉽게 말하면, 이전 정보를 따로 떼어내어 조절하지 못해 효율적인 학습이 어려웠다는 말이에요.",
            "easy2_title": "입력과 업데이트를 따로 관리해서 성능을 높였어요",
            "easy2_desc": "연구진은 루프백 트랜스포머(Loopback Transformer)를 통해 입력값과 업데이트 내용을 분리하는 방식을 도입했는데요, 공유 스택의 입력은 별도 경로로 유지하면서 개별 업데이트를 읽어 들여 입력 강도와 업데이트 가중치를 각각 조절할 수 있게 만든 겁니다. 기하급수적 감쇠(geometric decay)로 업데이트 가중치를 설정하고 어텐션(attention)으로 이를 배분하도록 설계했거든요. 그 결과, 기존 트랜스포머보다 파라미터는 40~75%만 쓰고도 검증 손실은 더 낮아졌다는 게 연구진의 주장이에요.",
            "topic": "루프백 트랜스포머를 통해 잔차 루프 구조에서 정보 재사용 효율을 개선하고 성능을 높인 연구예요.",
            "one_line": "루프백 트랜스포머를 제안해 정보 재사용 효율을 높이고 모델 성능을 개선했어요.",
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
          "canon_id": "2611.13509",
          "title": "Mobile AI Factory: Building Specialized Language Models for Your Mobile Device",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.13509",
            "arxiv": "https://arxiv.org/abs/2611.13509"
          },
          "published": "2026-11-10",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 19,
          "score": 2.9,
          "score_why": "추천 19 → +1.9 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "모바일용 소형 언어 모델을 만드는 게 너무 까다로웠어요",
            "easy1_desc": "모바일 기기에서 돌아가는 소형 언어 모델(SLM)은 개인 정보를 보호하고 인터넷 없이도 작동한다는 장점이 있는데요. 하지만 특정 작업과 기기에 딱 맞게 성능을 내려면 전문가가 일일이 모델을 조정해야 하는 번거로운 과정이 필요했거든요. 쉽게 말하면, 모델을 기기에 맞게 최적화하는 작업이 너무 복잡하고 시간이 많이 걸렸다는 말이에요.",
            "easy2_title": "이제 인공지능이 알아서 모바일 모델을 척척 만들어 줍니다",
            "easy2_desc": "연구진은 모바일 기기에 최적화된 모델을 자동으로 만들어 주는 '모바일 AI 팩토리'라는 시스템을 개발했는데요. 이 시스템은 작업 내용과 기기 사양을 입력하면 인공지능이 직접 데이터를 고르고 모델 크기를 조정하며 최적의 설정을 찾아줍니다. 실제로 10가지 작업과 4종의 안드로이드 폰으로 실험해 봤더니, 기존의 대형 모델보다 성능이 좋거나 비슷하면서도 훨씬 적은 자원으로 모델을 만들 수 있었다고 해요.",
            "topic": "모바일 기기에 특화된 소형 언어 모델을 자동으로 구축하는 에이전트 시스템인 모바일 AI 팩토리에 대한 연구예요.",
            "one_line": "모바일 기기용 소형 언어 모델을 자동으로 최적화하는 시스템을 개발했어요.",
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
          "canon_id": "2611.17814",
          "title": "G-CAST: Governed Continual Self-Training for E-Commerce Agents under Evolving Demands",
          "field": "cs.AI",
          "sources": [
            "cs.AI",
            "허깅페이스"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17814",
            "hf": "https://huggingface.co/papers/2611.17814"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 18,
          "score": 2.8,
          "score_why": "추천 18 → +1.8 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "쇼핑 도우미 AI가 자꾸 변하는 사용자 요구를 못 따라가는 게 문제였어요",
            "easy1_desc": "요즘 쇼핑몰에서 대화형 AI 에이전트를 많이 쓰는데, 사용자가 찾는 물건이나 요구 사항은 매일같이 바뀌거든요. 그런데 AI는 한 번 학습하고 나면 이런 변화를 바로 반영하지 못해서 성능이 떨어지는 문제가 생깁니다. 게다가 AI가 쓰는 도구나 기능도 계속 업데이트되는데, 기존에 잘하던 것까지 잊어버리면 안 되니까 관리가 참 어렵다는 말이에요.",
            "easy2_title": "매일 쌓이는 데이터를 스스로 학습해서 성능을 유지하는 방법을 만들었어요",
            "easy2_desc": "그래서 연구진은 G-CAST라는 시스템을 개발했는데요, 매일 발생하는 실제 쇼핑 데이터를 활용해 AI가 스스로 학습하게 만든 겁니다. 단순히 학습만 하는 게 아니라, 새로운 기능을 잘 익히면서도 예전에 잘하던 기능을 잃지 않도록 통제하는 장치를 뒀거든요. 실제로 알리바바의 1688 플랫폼에서 쓰는 에이전트에 적용해 봤더니, 새로운 요구에는 더 잘 적응하면서 기존 성능도 안정적으로 지켜냈다는 결과가 나왔습니다.",
            "topic": "전자상거래 환경에서 변화하는 요구 사항과 기능을 지속적으로 학습하기 위한 G-CAST 시스템을 제안했어요.",
            "one_line": "전자상거래 AI가 변화에 잘 적응하도록 매일 스스로 학습하는 시스템을 개발했어요.",
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
          "canon_id": "2611.18338",
          "title": "MEM-SQL: Memory-Empowered Text-to-SQL",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.18338",
            "arxiv": "https://arxiv.org/abs/2611.18338"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 17,
          "score": 2.7,
          "score_why": "추천 17 → +1.7 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "질문 하나하나만 따로 보니까 이전 맥락을 놓치게 되더라고요",
            "easy1_desc": "기존의 텍스트 투 SQL(Text-to-SQL) 시스템들은 질문을 각각 독립적으로 처리해 왔는데요, 사실 실제 데이터베이스를 쓸 때는 이전에 했던 질문들이나 그 결과물을 활용해야 할 때가 많거든요. 그런데 기존 평가 방식은 이런 맥락을 전혀 고려하지 않아서, 과거의 쿼리를 재사용하거나 수정해서 쓰는 능력을 제대로 측정하지 못했다는 문제가 있었어요. 쉽게 말하면, 앞선 대화 내용을 기억하지 못하고 매번 처음부터 새로 시작하는 것과 다름없었다는 말이에요.",
            "easy2_title": "과거 쿼리를 기억하는 메모리 시스템으로 성능을 높였어요",
            "easy2_desc": "연구진은 과거의 쿼리 템플릿이나 재사용 가능한 SQL 블록을 저장해 두는 MEM-SQL이라는 방식을 제안했는데요, 질문을 받을 때마다 매번 스키마를 다 뒤지는 대신 필요한 정보가 있을 때만 골라 쓰는 온디맨드 스키마 링킹(OSL) 기술을 적용했어요. 그 결과, 단순히 질문만 던졌을 때보다 정확도는 37.1%에서 50.0%로 올랐고, 입력 토큰은 76.6%, 처리 시간은 68.8%나 줄어드는 효과를 봤거든요. 메모리를 활용해 정확도와 효율을 동시에 잡은 셈이에요.",
            "topic": "과거 쿼리 이력을 활용하여 텍스트 투 SQL의 정확도와 효율성을 개선하는 MEM-SQL 프레임워크를 제안하고 이를 평가했어요.",
            "one_line": "과거 쿼리 이력을 저장하고 재사용하는 MEM-SQL을 개발해 성능을 높였어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "여러 개의 검증된 쿼리를 조합하거나 새로운 구조로 재배치해야 하는 복잡한 상황에서는 여전히 정확도가 크게 떨어진다는 한계가 있어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.18549",
          "title": "JVT: Just Video Transformer makes pixel-space video diffusion simple",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.18549",
            "arxiv": "https://arxiv.org/abs/2611.18549"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 15,
          "score": 2.5,
          "score_why": "추천 15 → +1.5 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 영상 생성 과정을 단순하게 만들고 싶었어요",
            "easy1_desc": "고차원의 원본 영상 데이터를 직접 확산 모델로 다루는 건 원래 무척 어려운 일인데요, 기존 방식들은 이를 해결하려고 복잡한 구조나 여러 단계를 겹쳐 쓰는 방식을 써 왔거든요. 연구진은 이런 복잡함을 덜어내기 위해 사전 학습된 자동 인코더나 U-Net 같은 구조 없이도 작동하는 JVT라는 모델을 제안했습니다. 쉽게 말하면, 영상 생성의 복잡한 껍데기를 다 벗겨내고 핵심적인 변환기 구조만 남겨서 효율성을 높인 셈이에요.",
            "easy2_title": "단순한 구조로도 고품질 영상을 만들 수 있게 됐어요",
            "easy2_desc": "연구진이 제안한 JVT는 영상 패치 임베딩과 적응형 층 정규화 같은 요소들을 체계적으로 조정해서 생성 품질과 계산 효율 사이의 균형을 맞췄는데요, 그 결과 기존의 잠재 확산 모델들과 견주어도 뒤지지 않는 성능을 보여줬습니다. 특히 이 방식은 픽셀 공간에서 직접 작동하기 때문에 RGB 영상과 깊이 정보를 동시에 생성하는 등 여러 데이터를 함께 다루기에도 유리하다는 장점이 있어요. 결과적으로 복잡한 추가 모델 없이도 더 정확한 장면 기하 구조를 얻을 수 있게 된 겁니다.",
            "topic": "JVT 모델을 통해 복잡한 구조 없이 픽셀 공간에서 효율적으로 영상을 생성하는 방법을 제시했어요.",
            "one_line": "복잡한 구조를 뺀 JVT 모델로 픽셀 단위의 영상 생성을 단순화했어요.",
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
          "canon_id": "2611.17820",
          "title": "Aligning AI Teams",
          "field": "cs.AI",
          "sources": [
            "cs.AI",
            "허깅페이스"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17820",
            "hf": "https://huggingface.co/papers/2611.17820"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 12,
          "score": 2.2,
          "score_why": "추천 12 → +1.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "개별 AI는 안전해도 팀으로 뭉치면 위험해질 수 있어요",
            "easy1_desc": "개별 거대언어모델(LLM) 에이전트를 안전하게 학습시켜도, 이들을 여러 명 모아 팀으로 만들면 그 안전함이 그대로 이어지지 않는다는 사실을 연구진이 확인했어요. 패혈증 분류나 뉴스 추천 같은 소프트웨어 작업과 컨설팅 제안서 작성 등 다양한 상황에서 실험해 봤는데요. 모델이 더 똑똑해진다고 해서 팀의 안전성 격차가 줄어드는 것도 아니었고, 에이전트끼리 서로 비판하거나 대화하게 하는 일반적인 방법들로도 안전한 행동을 다시 끌어내기가 어려웠거든요. 쉽게 말하면, 똑똑한 에이전트들을 모아 놨더니 오히려 안전 장치가 제대로 작동하지 않는 문제가 생긴다는 겁니다.",
            "easy2_title": "책임을 맡은 리더를 두면 안전한 팀 운영이 가능해요",
            "easy2_desc": "팀 안에서 안전 문제가 발생하는 주된 이유는 책임이 분산되기 때문인데요. 에이전트들이 팀으로 일할 때 시스템 전체의 안전을 챙기기보다 서로 책임을 미루거나 합리화하는 경향이 나타났거든요. 연구진은 이를 해결하기 위해 안전을 전담하는 리더 에이전트를 배치하고, 코디네이터 에이전트가 안전 지침 문서를 공유하게 했더니 개별 에이전트 수준의 안전한 행동이 다시 회복되는 걸 확인했어요. 이런 방식은 팀 단위의 AI 협업을 설계할 때 안전성을 유지하는 데 도움을 줄 것으로 보입니다.",
            "topic": "LLM 에이전트 팀 구성 시 발생하는 안전성 저하 원인을 분석하고 이를 해결하기 위한 전략을 제시했어요.",
            "one_line": "LLM 에이전트 팀의 안전성 저하 원인을 분석하고 해결책을 제시했어요.",
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
            "flags": [
              "예측 의심: 이런 방식은 팀 단위의 AI 협업을 설계할 때 안전성을 유지하는 데 도움을 줄 것으로 보입니다."
            ],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.06866",
          "title": "GH-AWTrace: A Large-Scale Dataset of GitHub Agentic Workflow Execution Logs",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.06866",
            "arxiv": "https://arxiv.org/abs/2611.06866"
          },
          "published": "2026-11-04",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 12,
          "score": 2.2,
          "score_why": "추천 12 → +1.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 에이전트가 일을 어떻게 처리하는지 들여다볼 자료가 부족했어요",
            "easy1_desc": "AI 에이전트가 정해진 일정이나 이벤트에 맞춰 깃허브(GitHub) 저장소 업무를 수행하는 에이전트 워크플로우(Agentic workflows)가 늘고 있는데요. 지금까지는 에이전트가 내놓은 결과물만 주로 살펴봤을 뿐, 실제로 일을 처리하는 과정에서 어떤 일이 벌어지는지에 대한 데이터는 거의 없었다는 거예요. 뭔 소리냐면, 에이전트가 왜 실패했는지나 어떤 도구를 썼는지 같은 상세한 실행 기록을 연구할 근거가 부족했다는 말이에요.",
            "easy2_title": "깃허브 워크플로우 실행 기록을 모은 대규모 데이터셋을 만들었어요",
            "easy2_desc": "연구진은 5,051개 저장소에서 25,014개의 검증된 워크플로우를 추적해 411만여 개의 실행 기록과 56만여 개의 로그 아카이브를 담은 GH-AWTrace 데이터셋을 공개했는데요. 이 데이터를 통해 에이전트가 도구 사용을 거부하거나, 서비스 제공자가 실패하거나, 에이전트가 접근 방식을 바꾸는 등의 구체적인 실행 과정을 관찰할 수 있게 됐다는 거예요. 결과적으로 에이전트의 실행 실패나 도구 활용 방식, 그리고 실제 작업 진척도와 보고된 결과 사이의 관계를 연구할 수 있는 길이 열린 셈이에요.",
            "topic": "AI 에이전트의 워크플로우 실행 과정을 분석할 수 있는 대규모 데이터셋인 GH-AWTrace를 구축하고 그 활용 가능성을 제시했어요.",
            "one_line": "AI 에이전트의 실행 과정을 담은 대규모 데이터셋을 구축했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "데이터의 범위는 워크플로우마다 다르며, 에이전트의 전체 실행 경로를 완벽하게 보여주지는 못한다는 한계가 있어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
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
              "411",
              "56"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2610.41354",
          "title": "OneSteer: Unlocking Steerable General Humanoid Motion Tracking via One-Step Diffusion Whole-Body Control",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2610.41354",
            "arxiv": "https://arxiv.org/abs/2610.41354"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 12,
          "score": 2.2,
          "score_why": "추천 12 → +1.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "원래 동작을 따라가면서도 상황에 맞게 움직임을 바꾸고 싶었어요",
            "easy1_desc": "로봇이 정해진 동작을 그대로 따라가야 할 때도 있지만, 실제 현장에서는 새로운 목표가 생기기도 하거든요. 그런데 기존 방식은 새로운 목표를 반영하려면 경로를 처음부터 다시 짜야 해서 번거로웠던 거예요. 연구진은 이런 문제를 해결하려고 동작 추적과 실시간 조종을 하나로 합친 원스텝 확산 모델을 만들었는데요, 이게 바로 원스티어(OneSteer)입니다.",
            "easy2_title": "한 번의 계산으로 로봇의 움직임을 유연하게 조종할 수 있게 됐어요",
            "easy2_desc": "원스티어는 학습된 모델의 가중치를 고정한 채로 입력 노이즈만 최적화해서 새로운 목표를 반영하는데요, 몸의 특정 부위만 선택적으로 제어할 수 있게 마스크를 씌우는 방식이에요. 이렇게 했더니 시뮬레이션에서 1.25미터 높이의 장애물을 통과하는 성공률이 기존 2%에서 90%까지 크게 올랐거든요. 실제 유니트리 G1 로봇에서도 넘어지지 않고 다양한 동작을 수행해 냈다는 점이 큰 성과예요.",
            "topic": "원스티어는 확산 모델을 활용해 로봇의 전신 동작 추적과 실시간 조종을 동시에 수행하는 새로운 제어 방식을 제안했어요.",
            "one_line": "확산 모델을 써서 로봇의 동작 추적과 실시간 조종을 동시에 수행했어요.",
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
          "canon_id": "2611.18529",
          "title": "eDIAR: Training-Free Open-Speaker Streaming Diarization for Long Meetings and Large Archives via e-means",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.18529",
            "arxiv": "https://arxiv.org/abs/2611.18529"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 11,
          "score": 2.1,
          "score_why": "추천 11 → +1.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 모델은 화자 수 제한 때문에 긴 회의를 다루기 어려웠어요",
            "easy1_desc": "기존의 스트리밍 방식 화자 분리 모델인 Streaming Sortformer나 Nemotron-3는 미리 정해진 출력 슬롯 개수만큼만 화자를 구분할 수 있다는 한계가 있었는데요. 회의가 길어지거나 예상보다 많은 사람이 말하게 되면 모델이 제대로 작동하지 않는다는 말이에요. 즉, 슬롯이 꽉 차면 더 이상 새로운 화자를 인식하지 못해 성능이 떨어진다는 겁니다.",
            "easy2_title": "슬롯 제한을 없애고 화자 수에 상관없이 정확하게 구분하게 됐어요",
            "easy2_desc": "연구진은 모델을 다시 학습시킬 필요 없이 e-means라는 알고리즘을 도입해 화자 수 제한을 없앴는데요. 슬롯이 다 차면 그 안에서 화자 임베딩을 다시 묶어주는 방식을 사용해, 화자가 슬롯보다 많아져도 정확도를 유지할 수 있게 만든 거예요. 덕분에 긴 회의에서도 오류가 쌓이지 않고, 업데이트 비용도 회의 길이에 따라 늘어나지 않는 장점이 생겼습니다.",
            "topic": "e-means 알고리즘을 활용해 학습 없이도 화자 수 제한 없이 긴 회의와 대규모 기록물을 처리하는 스트리밍 화자 분리 시스템을 개발했어요.",
            "one_line": "e-means 알고리즘으로 화자 수 제한 없는 스트리밍 화자 분리 시스템을 구현했어요.",
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
          "canon_id": "2611.18442",
          "title": "CANTraj: Recovering Vehicle Trajectories from CAN Signals in Naturalistic Driving",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.18442",
            "arxiv": "https://arxiv.org/abs/2611.18442"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 11,
          "score": 2.1,
          "score_why": "추천 11 → +1.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "GPS를 지웠다고 안심하면 안 되는 이유",
            "easy1_desc": "운전 데이터를 공유할 때 개인정보 보호를 위해 GPS 기록을 삭제하곤 하는데요, 연구진은 GPS가 없어도 차량 내부 신호만으로 이동 경로를 충분히 찾아낼 수 있다는 점을 지적했어요. 기존 연구들은 데이터가 적거나 평가 기준이 제각각이라 실제 환경에서 얼마나 위험한지 알기 어려웠거든요. 쉽게 말하면, GPS를 지워도 차량 신호에 담긴 위치 정보가 그대로 남아 있어 경로가 노출될 수 있다는 말이에요.",
            "easy2_title": "차량 신호로 경로를 복원하는 데이터셋과 도구를 만들었어요",
            "easy2_desc": "연구진은 실제 주행 데이터와 GNSS(위성 항법 시스템) 경로를 짝지은 CANTraj 데이터셋을 공개했는데요, 이를 통해 차량 신호로 경로를 얼마나 잘 복원하는지 체계적으로 평가할 수 있게 됐어요. 실험 결과 조향 신호와 도로망 정보를 함께 쓰면 경로 복원 성능이 크게 높아졌거든요. 특히 대규모 언어 모델(LLM)을 활용해 여러 후보 경로 중 최적의 경로를 선택하게 했더니 기존 방식보다 더 나은 성능을 보였다는 겁니다.",
            "topic": "차량 내부 통신 신호(CAN)를 분석해 GPS 없이도 차량의 이동 경로를 복원할 수 있는 위험성을 검증하고 이를 평가하기 위한 데이터셋을 구축했어요.",
            "one_line": "차량 신호로 경로를 복원하는 데이터셋을 구축하고 위험성을 평가했어요.",
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
            "evidence_by_symbols": 1,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "기타",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.18429",
          "title": "Do Underwater Image Quality Metrics Agree with Human Perception? A Benchmark with Human Choices, Simple Edits and Generative Drift",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.18429",
            "arxiv": "https://arxiv.org/abs/2611.18429"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 11,
          "score": 2.1,
          "score_why": "추천 11 → +1.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "수중 이미지 품질을 평가하는 지표들이 사람의 눈과 정말 맞을까",
            "easy1_desc": "수중 이미지는 깨끗한 원본 사진이 없어서 품질을 평가하기가 참 어려운데요, 그래서 보통 사람이 직접 보지 않고도 품질을 점수 매기는 지표(NR-IQA)를 씁니다. 그런데 이 지표들이 사람이 실제로 좋다고 느끼는 것과 일치하는지는 그동안 잘 알려지지 않았거든요. 연구진은 이 지표들이 사람의 판단을 얼마나 잘 따라가는지 확인해 보기로 했습니다.",
            "easy2_title": "지표들을 사람의 선택과 비교해 보니 일치하는 게 거의 없더라",
            "easy2_desc": "73가지의 다양한 이미지 품질 지표를 사람들의 선호도와 비교해 봤더니, 사람의 판단과 일관되게 일치하는 지표는 하나도 없었다고 해요. 심지어 가장 성능이 좋다는 지표도 사람끼리 의견이 일치하는 수준보다 훨씬 낮았거든요. 게다가 어떤 지표는 사람들이 싫어하는 편집을 오히려 더 좋게 평가하기도 해서, 현재의 평가 방식에 문제가 있다는 걸 확인한 셈이에요.",
            "topic": "수중 이미지 품질 평가 지표들이 사람의 시각적 선호도와 얼마나 일치하는지를 검증하고 새로운 평가 기준을 제시했어요.",
            "one_line": "수중 이미지 품질 평가 지표들이 사람의 선호도와 일치하는지 73개를 검증했어요.",
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
          "canon_id": "2611.17955",
          "title": "WebArena-Pro: A Heterogeneous, Multimodal, Reproducible Benchmark for Web Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI",
            "허깅페이스"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17955",
            "hf": "https://huggingface.co/papers/2611.17955"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 11,
          "score": 2.1,
          "score_why": "추천 11 → +1.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 웹 에이전트 평가 도구는 범위가 너무 좁았거든요",
            "easy1_desc": "거대 언어 모델과 시각 모델을 활용한 웹 에이전트가 브라우저 업무를 수행하는 일이 늘고 있는데요, 기존 평가 도구들은 다룰 수 있는 웹 사이트의 종류가 적고 텍스트와 이미지 정보만 확인하는 수준에 머물러 있었습니다. 실시간 웹 사이트를 쓰는 평가 방식도 있지만, 데이터가 계속 바뀌어 똑같은 결과를 다시 얻기 어렵다는 단점이 있거든요. 쉽게 말하면, 에이전트가 진짜 다양한 환경에서 제대로 작동하는지 제대로 검증할 방법이 부족했다는 말이에요.",
            "easy2_title": "웹 에이전트의 능력을 다각도로 검증할 WebArena-Pro를 만들었어요",
            "easy2_desc": "그래서 연구진은 20개의 웹 애플리케이션에서 300개의 과제를 수행하는 WebArena-Pro라는 평가 도구를 새로 선보였는데요, 여기서는 텍스트와 이미지뿐만 아니라 오디오와 비디오까지 포함한 멀티모달 정보를 에이전트가 이해하고 활용하는지까지 확인합니다. 각 과제는 독립적으로 실행되어 결과가 항상 일정하게 유지되는 장점이 있거든요. 덕분에 에이전트가 얼마나 복잡한 웹 업무를 잘 처리하는지 더 넓은 범위에서 정확히 비교할 수 있게 된 셈이에요.",
            "topic": "다양한 웹 환경과 멀티모달 콘텐츠를 포함하여 웹 에이전트의 성능을 재현 가능하게 평가하는 벤치마크를 제안했어요.",
            "one_line": "웹 에이전트의 성능을 다각도로 평가할 수 있는 재현 가능한 벤치마크를 개발했어요.",
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
          "canon_id": "2611.17811",
          "title": "AI Reviews Are Biased Towards the Appendix",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.17811",
            "arxiv": "https://arxiv.org/abs/2611.17811"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 10,
          "score": 2.0,
          "score_why": "추천 10 → +1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 논문 심사를 할 때 어디를 주로 보는지 확인해 봤어요",
            "easy1_desc": "요즘 논문 심사 과정에서 인공지능(LLM)을 활용해 약점을 찾는 경우가 늘고 있는데요, 정작 이 모델들이 논문의 어느 부분을 집중적으로 비판하는지는 잘 알려지지 않았거든요. 그래서 연구진이 ACL, EMNLP, COLM, ICLR 학회에 제출된 논문 2,000편을 분석해 봤습니다. 그랬더니 놀랍게도 GPT나 Claude 같은 최신 모델들은 지적하는 약점의 50% 이상을 논문 본문이 아닌 부록에서 찾아내고 있다는 사실을 확인했습니다.",
            "easy2_title": "사람과 AI가 논문을 보는 관점이 이렇게나 다르더라고요",
            "easy2_desc": "사람은 부록에서 약점을 찾는 비율이 8.4%에 불과하고, 주로 논문의 핵심 아이디어나 전체적인 구성에 집중하는 편이에요. 반면 AI는 논문의 핵심 기여와는 거리가 먼 부록 깊숙한 곳의 세부적인 기술 사항을 주로 꼬집는다는 차이가 있거든요. 이런 현상은 API를 쓰든 코딩 에이전트를 쓰든 상관없이 일관되게 나타난다는 점도 확인했습니다. 쉽게 말하면, AI는 논문의 본질보다는 부록의 지엽적인 부분에 더 예민하게 반응한다는 겁니다.",
            "topic": "논문 심사 과정에서 활용되는 대규모 언어 모델(LLM)이 인간 심사위원과 달리 논문의 부록에 과도하게 의존하여 약점을 지적하는 편향성을 분석했어요.",
            "one_line": "AI 심사 모델이 논문 부록에 편향된 약점을 지적함을 분석했어요.",
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
            "flags": [
              "예측 의심: 연구진은 이번 분석 결과가 AI를 활용한 논문 심사에 관한 학술적 논의에 기여할 것으로 기대하고 있습니다."
            ],
            "tag": "AI 안전·평가",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16439",
          "title": "HALO: Human-Aligned Data Collection for WhoLe-body MObile Manipulation",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.16439",
            "arxiv": "https://arxiv.org/abs/2611.16439"
          },
          "published": "2026-11-12",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 10,
          "score": 2.0,
          "score_why": "추천 10 → +1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇을 사람처럼 움직이게 가르치기가 참 어려웠거든요",
            "easy1_desc": "전신 이동형 로봇을 조종하려면 두 손을 쓰는 동작과 이동을 동시에 가르쳐야 하는데, 기존 방식은 로봇을 직접 제어하거나 사람이 자연스럽게 움직이는 것 중 하나를 포기해야 했거든요. 뭔 소리냐면, 로봇과 사람의 움직임을 똑같이 맞추기가 기술적으로 까다로웠다는 말이에요. 그래서 데이터를 모으는 과정 자체가 매우 힘들었다는 겁니다.",
            "easy2_title": "사람의 움직임을 로봇에 딱 맞추는 HALO 시스템을 만들었어요",
            "easy2_desc": "연구진은 HALO라는 시스템을 개발했는데, 사람이 로봇의 팔을 직접 움직이고 가벼운 플랫폼을 밀면서 자연스럽게 데이터를 수집하게 만든 거예요. 사람이 직접 로봇과 연결되어 움직이다 보니 실제 로봇이 작동할 때와 차이가 생길 수 있는데, 이를 보정하기 위해 플랫폼의 움직임을 로봇 베이스에 맞춰 조정하고 영상에서 사람 손을 지우는 처리를 거쳤거든요. 결과적으로 기존 방식보다 데이터를 2.9배 빠르게 모으면서도 성공률은 비슷하거나 더 높게 유지했다고 주장했습니다.",
            "topic": "전신 이동형 로봇 조작을 위한 사람 중심의 데이터 수집 시스템인 HALO의 개발과 그 성능에 관한 연구예요.",
            "one_line": "전신 이동형 로봇 조작을 위한 데이터 수집 시스템 HALO를 개발했어요.",
            "topic_tag": "제어·로봇",
            "limit": "사람과 로봇이 밀접하게 연결되어 데이터를 수집하다 보니, 실제 로봇이 작동하는 환경과 데이터를 모으는 환경 사이에 차이가 발생한다는 한계가 있어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.14505",
          "title": "Continual-ARC: Measuring Skill Acquisition over a Working Lifetime",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.14505",
            "arxiv": "https://arxiv.org/abs/2611.14505"
          },
          "published": "2026-11-11",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 10,
          "score": 2.0,
          "score_why": "추천 10 → +1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존의 학습 평가 방식은 한계가 많았거든요",
            "easy1_desc": "지금까지 인공지능이 계속해서 배우는 능력을 측정할 때는 특정 분야에만 치우쳐 있거나, 같은 문제를 딱 한 번만 풀어보는 식의 한계가 있었어요. 게다가 기억을 활용하는 방식과 모델의 가중치를 바꾸는 방식이 서로 다른 기준으로 평가되다 보니, 어떤 시스템이 더 나은지 비교하기가 어려웠다는 말이에요. 쉽게 말하면, 인공지능의 평생 학습 능력을 제대로 검증할 공정한 시험대가 없었던 셈이에요.",
            "easy2_title": "새로운 평가 체계로 학습 능력을 제대로 비교해 봤어요",
            "easy2_desc": "연구진은 ARC-AGI라는 데이터를 활용해 평생 학습을 측정하는 'Continual-ARC'를 제안했는데요, 같은 과제가 시간이 지난 뒤 다시 등장하게 해서 인공지능이 얼마나 기억하고 일반화하는지 확인했어요. 실험 결과, 단순히 기억에 의존하는 방식보다 모델의 가중치를 직접 학습시키는 방식이 새로운 과제를 해결하는 데 훨씬 효과적이었다고 해요. 다만, 전문가의 명확한 지도가 없으면 기억을 유지하는 기능만으로는 학습 효과가 크지 않다는 점도 확인했답니다.",
            "topic": "인공지능의 평생 학습 능력을 측정하기 위해 새로운 벤치마크인 Continual-ARC를 도입하고, 기억 기반 방식과 가중치 기반 학습 방식의 성능을 비교 분석했어요.",
            "one_line": "평생 학습 능력을 측정하는 벤치마크를 제안하고 학습 방식을 비교했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "명확한 전문가의 지도가 뒷받침되지 않으면, 단순히 기억을 유지하는 기능만으로는 학습 성능이 크게 나아지지 않는다는 한계가 있어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.14504",
          "title": "Emergent Biological Capabilities in a Foundation Model for Molecular Interactions",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.14504",
            "arxiv": "https://arxiv.org/abs/2611.14504"
          },
          "published": "2026-11-10",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 10,
          "score": 2.0,
          "score_why": "추천 10 → +1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "분자 상호작용을 배우는 거대 모델을 만들어 봤어요",
            "easy1_desc": "기존의 거대 모델들은 학습 목표를 넘어서는 새로운 능력을 스스로 보여주곤 하는데요, 연구진은 이 방식을 생물학 분야로 넓혀서 단백질과 리간드 서열 3.2조 토큰을 학습시킨 본본(Bonbon)이라는 모델을 개발했습니다. 이 모델은 구조 정보 없이 서열 데이터만으로 학습했는데도, 분자가 어떻게 작동하고 결합하는지 같은 복잡한 생물학적 원리를 스스로 깨우쳤다는 거예요. 쉽게 말하면, 별도의 과외 없이 데이터만 많이 보여줬더니 생물학적 지능이 싹텄다는 말입니다.",
            "easy2_title": "모델이 커지니까 갑자기 똑똑해지는 순간이 있더라고요",
            "easy2_desc": "모델 크기를 42M에서 1.6B 파라미터까지 여섯 단계로 키우며 실험해 봤더니, 학습 손실값은 부드럽게 줄어드는데 특정 능력들은 가장 큰 규모에서 갑자기 확 좋아지는 현상이 나타났거든요. 이건 단순히 학습 손실만 보고는 모델이 언제 똑똑해질지 예측하기 어렵다는 뜻이에요. 덕분에 기존 방식보다 5단계나 더 빠른 속도로 결합 예측을 해내고, 실제 실험에서도 61.5%의 적중률을 보였다는 겁니다.",
            "topic": "구조 정보 없이 서열 데이터만으로 학습한 본본(Bonbon) 모델이 분자 상호작용에서 나타내는 창발적 능력과 그 성능에 대한 연구입니다.",
            "one_line": "서열 데이터만으로 분자 상호작용을 학습하는 본본 모델을 개발했어요.",
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
          "canon_id": "2611.18130",
          "title": "JFinBench: A Continuously Refreshable Japanese Financial Benchmark from the Latest Certification Exams",
          "field": "cs.AI",
          "sources": [
            "cs.AI",
            "허깅페이스"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18130",
            "hf": "https://huggingface.co/papers/2611.18130"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 9,
          "score": 1.9,
          "score_why": "추천 9 → +0.9 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 금융 벤치마크는 국가별 특수성을 담지 못하고 데이터 오염 문제도 컸거든요",
            "easy1_desc": "거대언어모델(LLM)을 금융 분야에 쓰려는 시도가 늘고 있는데, 정작 각 나라의 복잡한 금융 규제나 실무를 제대로 평가할 시험지가 부족한 상황이에요. 게다가 기존에 나온 문제들은 이미 모델 학습 데이터에 포함되어 버려서, 모델이 진짜 실력을 갖췄는지 확인하기가 어렵다는 단점도 있거든요. 쉽게 말하면, 시험 문제가 이미 유출된 상태라 변별력이 떨어진다는 말이에요.",
            "easy2_title": "일본 금융 시험 321개를 모아 주기적으로 업데이트되는 벤치마크를 만들었어요",
            "easy2_desc": "연구진은 일본의 회계, 세무, 금융 설계 등 6개 자격증 시험에서 321개 문제를 뽑아 'JFinBench'라는 벤치마크를 구축했는데요. 사람이 직접 검수하고 코딩 에이전트가 변환하는 '사람이 개입하는 에이전트 파이프라인'을 써서, 새로운 시험이 나올 때마다 빠르게 데이터를 갱신할 수 있도록 만들었어요. 덕분에 데이터 오염을 막으면서도 최신 금융 지식을 평가할 수 있게 된 셈이에요.",
            "topic": "일본 금융 자격증 시험을 활용해 최신 금융 지식을 지속적으로 평가할 수 있는 벤치마크를 구축하고 모델 성능을 분석했어요.",
            "one_line": "일본 금융 시험 데이터를 활용해 지속 갱신 가능한 벤치마크를 만들고 모델을 평가했어요.",
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
          "canon_id": "2611.02822",
          "title": "Disen-Forcing: Disentangling Semantic Anchoring from Motion for Autoregressive Video Diffusion",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.02822",
            "arxiv": "https://arxiv.org/abs/2611.02822"
          },
          "published": "2026-11-02",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 9,
          "score": 1.9,
          "score_why": "추천 9 → +0.9 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "영상 생성 모델이 길게 만들수록 왜 엉망이 되는지 살펴봤어요",
            "easy1_desc": "자기회귀 방식의 영상 확산 모델은 실시간으로 긴 영상을 만들 수 있지만, 학습한 범위를 넘어서면 영상이 금방 무너지는 문제가 있거든요. 연구진은 이 문제를 해결하려고 기존에는 첫 프레임을 계속 고정해 두는 '프레임 싱크' 방식을 썼는데, 이게 왜 효과가 있는지 다시 뜯어봤어요. 그랬더니 이게 대규모 언어 모델(LLM)의 어텐션 싱크와는 원리가 다르다는 걸 알아낸 겁니다. 쉽게 말하면, 기존 방식은 모든 어텐션 헤드에 첫 프레임을 강제로 주입해서 오히려 영상의 움직임을 둔하게 만드는 부작용이 있었다는 말이에요.",
            "easy2_title": "움직임과 배경을 따로 떼어내서 더 자연스러운 영상을 만들었어요",
            "easy2_desc": "그래서 연구진은 '디센-포싱(Disen-Forcing)'이라는 새로운 기술을 제안했는데요, 이건 모델을 압축하는 증류 과정에서 끼워 넣는 플러그인이에요. 핵심은 영상의 배경 정보를 담당하는 헤드와 움직임을 담당하는 헤드를 서로 분리해서 관리하는 겁니다. 이렇게 하면 배경은 안정적으로 유지하면서도 움직임은 훨씬 역동적으로 표현할 수 있거든요. 기존 방식들이 영상의 일관성과 움직임 사이에서 하나를 포기해야 했던 것과 달리, 이 기술은 두 마리 토끼를 다 잡았다고 연구진은 주장했어요.",
            "topic": "자기회귀 영상 확산 모델에서 발생하는 과도한 조건화 문제를 해결하고 영상의 일관성과 움직임을 동시에 개선하는 방법론을 다뤘어요.",
            "one_line": "영상 생성 모델의 헤드 역할을 분리해 일관성과 움직임을 개선했어요.",
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
          "canon_id": "2611.17440",
          "title": "Interpreting Coding Agents Through Their Behavioral Trajectories",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.17440",
            "arxiv": "https://arxiv.org/abs/2611.17440"
          },
          "published": "2026-11-12",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 8,
          "score": 1.8,
          "score_why": "추천 8 → +0.8 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "코딩 에이전트가 일을 잘했는지만 따지는 건 한계가 있어요",
            "easy1_desc": "기존의 코딩 에이전트 평가 방식은 단순히 결과가 성공했는지 실패했는지만 확인하는 이진법적인 방식이었거든요. 그러다 보니 에이전트가 어떤 과정을 거쳐 코드를 짜는지 그 속을 들여다볼 수 없다는 문제가 있었어요. 결과만 보고 판단하면 에이전트가 왜 그런 선택을 했는지 알기 어렵다는 말이에요. 쉽게 말하면, 정답만 맞히면 장땡이라는 식의 평가가 에이전트의 실제 행동 방식을 가리고 있었던 겁니다.",
            "easy2_title": "에이전트의 행동을 분석해서 어떻게 코드를 짜는지 파악했어요",
            "easy2_desc": "연구진은 125개 에이전트 설정과 117개 모델에서 나온 143,209개의 실행 궤적을 모아 분석해 봤는데요, 서로 다른 인터페이스를 가진 에이전트들을 비교하려고 규칙 기반 파서를 만들어 실행 과정을 검색이나 수정 같은 고차원적인 행동으로 변환했어요. 분석해 봤더니 성공률이 비슷한 에이전트라도 코드를 탐색하고 수정하고 검증하는 방식은 완전히 다를 수 있다는 걸 확인했거든요. 결과적으로 에이전트의 행동 프로필만으로도 어떤 모델을 썼는지 알아낼 수 있을 정도로 행동 패턴이 뚜렷하다는 사실을 밝혀낸 셈이에요.",
            "topic": "코딩 에이전트의 실행 궤적을 분석하여 그들의 행동 패턴과 모델 간의 차이를 해석하는 연구입니다.",
            "one_line": "코딩 에이전트의 실행 과정을 분석하는 파서를 만들어 행동 패턴을 해석했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "저장소 간 설정에서 작업 구성이 완전히 통제되지는 않았다는 한계가 있습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.17194",
          "title": "eDMD: Endpoint Distribution Matching for Few-Step Diffusion Distillation",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.17194",
            "arxiv": "https://arxiv.org/abs/2611.17194"
          },
          "published": "2026-11-12",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 6,
          "score": 1.6,
          "score_why": "추천 6 → +0.6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식은 중간 과정까지 다 챙기려다 보니 정작 결과가 어긋났어요",
            "easy1_desc": "기존의 확산 모델 증류 방식은 학생 모델을 가르칠 때 중간 단계의 상태까지 모두 활용하곤 했는데요, 문제는 학생 모델이 최종 결과물을 내놓은 뒤에도 중간 단계의 신호가 계속 남아 있어서 학습 방향이 왜곡된다는 점이에요. 쉽게 말하면, 최종 목표인 결과물의 분포를 맞추는 데 집중해야 하는데 불필요한 중간 과정까지 얽혀서 학습이 깔끔하게 끝나지 않는 셈이에요.",
            "easy2_title": "최종 결과물만 보고 학습하도록 구조를 바꿔서 정확도를 높였어요",
            "easy2_desc": "연구진은 최종 결과물만을 기준으로 삼는 eDMD(Endpoint Distribution Matching Distillation)라는 방식을 제안했는데요, 중간 단계와 상관없이 오직 학생 모델의 최종 출력물만 가지고 가짜 점수 모델을 학습시켜 모든 노이즈 제거 단계를 교정하는 방식이에요. 이렇게 하면 최종 분포가 일치할 때만 학습 신호가 0이 되도록 보장할 수 있다는 장점이 있거든요. 실제로 SD3-Medium이나 FLUX.2-klein 같은 모델에서 4단계 생성 성능을 확인해 보니 기존 방식보다 더 뛰어난 결과를 보였다는 겁니다.",
            "topic": "확산 모델의 증류 과정에서 발생하는 분포 불일치 문제를 해결하기 위해 최종 출력물 기반의 새로운 증류 기법을 제안했어요.",
            "one_line": "최종 출력물만 학습에 활용하는 eDMD 방식으로 확산 모델의 증류 성능을 높였어요.",
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
              "0"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.14487",
          "title": "Re-Search: Dissecting LLM Ideation Through a Two-Player Questioning Game",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.14487",
            "arxiv": "https://arxiv.org/abs/2611.14487"
          },
          "published": "2026-11-10",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 6,
          "score": 1.6,
          "score_why": "추천 6 → +0.6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "연구 아이디어를 짜는 과정이 어떻게 진행되는지 알기 어려웠어요",
            "easy1_desc": "연구자가 아이디어를 다듬는 과정은 원래 반복적인데, 기존의 AI 평가 방식은 이런 탐색 과정을 제대로 보여주지 못했거든요. 그래서 연구진은 스무고개 방식을 빌려온 Re-Search라는 평가 도구를 만들었는데요. 논문 주제만 주고 AI가 예·아니오 질문을 던지며 원래 논문의 핵심 아이디어를 찾아가게 만든 겁니다. 쉽게 말하면, AI가 연구 아이디어를 어떻게 발전시키는지 그 궤적을 추적해 본 셈이에요.",
            "easy2_title": "질문을 던지는 능력 자체가 아이디어 발전의 한계였어요",
            "easy2_desc": "실제로 6개의 최신 거대언어모델(LLM)을 실험해 봤더니, 대부분 질문 100개 중 앞선 30개 안에서 승패가 갈리고 그 뒤로는 정체되는 모습을 보였는데요. 흥미로운 점은 AI가 좋은 질문을 스스로 만들어내지는 못해도, 남이 제시한 질문이 좋은지는 잘 알아본다는 거예요. 즉, 판단력보다 아이디어를 직접 생성해 내는 능력이 부족해서 생기는 병목 현상이라는 말이에요.",
            "topic": "거대언어모델이 연구 아이디어를 탐색하는 과정을 분석하고 그 한계를 밝혀낸 연구예요.",
            "one_line": "스무고개 방식으로 AI의 연구 아이디어 탐색 과정을 분석하고 한계를 규명했어요.",
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
          "canon_id": "2611.15640",
          "title": "MemInStream: Memorizing or Merely Recognizing? Rethinking Streaming Video Memory Evaluation",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.15640",
            "arxiv": "https://arxiv.org/abs/2611.15640"
          },
          "published": "2026-11-11",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 5,
          "score": 1.5,
          "score_why": "추천 5 → +0.5 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "질문만 맞히면 기억력이 좋다고 할 수 있을까요",
            "easy1_desc": "기존의 영상 이해 평가 방식은 단순히 질문에 대한 답변 정확도만 따졌는데요, 이게 문제라는 거예요. 모델이 답을 맞혔어도 영상의 과거 내용을 기억해서 푼 건지, 아니면 최근 장면이나 언어적 추측으로 때려 맞힌 건지 알 수 없거든요. 반대로 틀렸을 때도 기억력이 나빠서인지, 아니면 애초에 영상 자체를 이해하지 못해서인지 구분하기가 어렵다는 말이에요.",
            "easy2_title": "기억력만 따로 떼어내서 정확히 측정해 봤습니다",
            "easy2_desc": "그래서 연구진은 기억력만을 집중적으로 평가하는 벤치마크인 MemInStream을 새로 만들었는데요, 질문마다 영상 속 특정 구간을 증거로 지정해 두는 방식을 썼어요. 모델이 최근 영상이나 텍스트 정보만으로는 풀 수 없고, 오직 과거의 특정 증거 구간을 기억해야만 답할 수 있는 문제들만 골라낸 겁니다. 이렇게 하면 모델이 기억을 잘하는지 아니면 단순히 눈치가 빠른 건지를 확실하게 가려낼 수 있다는 장점이 있어요.",
            "topic": "스트리밍 영상 이해 모델의 기억 능력을 체계적으로 평가하기 위한 새로운 벤치마크 MemInStream을 제안했어요.",
            "one_line": "스트리밍 영상 이해 모델의 기억력을 평가하는 벤치마크를 개발했어요.",
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
          "canon_id": "2611.17780",
          "title": "LuthorSQL: A One-Pass Text-to-SQL Model as System 1 for a Slower LLM Agent",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.17780",
            "arxiv": "https://arxiv.org/abs/2611.17780"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "LLM 에이전트가 데이터베이스를 쓸 때 비용과 속도가 문제였어요",
            "easy1_desc": "최신 거대언어모델(LLM) 에이전트가 데이터베이스를 조회하는 방식은 정확도는 높지만, 매번 외부 API를 호출해야 해서 속도가 느리고 비용이 많이 든다는 단점이 있어요. 예를 들어 Claude Opus 5.5 모델로 하루에 1만 번씩 질문하면 1년에 7만 달러가 넘는 비용이 발생하거든요. 게다가 민감한 기업 내부 질문이 외부 API로 노출될 위험도 있다는 말이에요.",
            "easy2_title": "빠른 모델을 앞에 둬서 비용을 줄이고 속도를 높였어요",
            "easy2_desc": "연구진은 LuthorSQL이라는 7B 크기의 모델을 개발했는데, 이게 느린 LLM 에이전트의 앞단에서 일종의 '시스템 1' 역할을 수행하게 만들었어요. 확실한 질문은 LuthorSQL이 직접 처리하고, 어려운 질문만 뒤의 느린 모델로 넘기는 방식인데요. 이렇게 했더니 전체 API 비용을 33.3% 줄이면서도 정확도는 그대로 유지할 수 있었다는 거예요.",
            "topic": "LuthorSQL을 활용해 LLM 에이전트의 데이터베이스 쿼리 효율성을 높이는 방법이에요.",
            "one_line": "LLM 에이전트의 앞단에 가벼운 모델을 배치해 비용과 속도 문제를 해결했어요.",
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
          "canon_id": "2611.17169",
          "title": "Parsed, Plausible, Wrong: Output Format Controls Silent Errors in Small-Model Semantic Parsing",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.17169",
            "arxiv": "https://arxiv.org/abs/2611.17169"
          },
          "published": "2026-11-12",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "작은 모델이 겉만 번지르르하게 틀린 답을 내놓는 게 문제였어요",
            "easy1_desc": "작은 언어 모델을 미세 조정해서 파싱(구문 분석)을 시키면, 형식은 완벽한데 내용은 틀린 결과를 내놓는 경우가 생기거든요. 문제는 이런 오류가 겉으로 보기엔 멀쩡해서 뒤에 연결된 시스템이 알아채지 못한다는 거예요. 쉽게 말하면, 겉모습만 그럴싸한 거짓말을 해서 시스템 전체를 속이는 셈이에요.",
            "easy2_title": "출력 형식을 바꾸니 오류가 줄고 정확도가 올라갔어요",
            "easy2_desc": "연구진은 출력 형식을 바꾸는 것만으로도 이런 오류를 줄일 수 있을지 확인해 봤는데요, Qwen3.5-0.8B와 LFM2.5-350M 모델을 대상으로 6가지 인코딩 방식을 실험해 봤거든요. 그랬더니 단순히 길이를 줄이는 것보다 일상적인 단어로 표현하는 방식이 훨씬 효과적이라는 걸 발견했어요. 결과적으로 정확도는 높아지고, 겉만 번지르르한 오류는 Qwen 모델에서 2.3배, LFM2 모델에서 1.8배나 줄었다는 겁니다.",
            "topic": "언어 모델의 출력 형식이 구문 분석 오류에 미치는 영향을 분석하고 최적의 인코딩 방식을 찾았어요.",
            "one_line": "언어 모델의 출력 형식을 바꿔 구문 분석 오류를 줄였어요.",
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
          "canon_id": "2611.18550",
          "title": "Restoring Diversity in Distilled Image and Video Generators by Probing Activations",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.18550",
            "arxiv": "https://arxiv.org/abs/2611.18550"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "모델을 가볍게 만들었더니 결과물이 다 똑같아지는 문제가 생겼어요",
            "easy1_desc": "확산 모델(Diffusion model)을 몇 단계만 거쳐도 결과를 내도록 가볍게 만들면 속도는 빨라지지만, 결과물이 다양하지 않고 비슷해지는 다양성 붕괴(Diversity collapse) 현상이 나타나거든요. 연구진이 왜 이런 일이 생기는지 학생 모델의 내부를 들여다봤더니, 전체적인 활성화 값의 크기는 스승 모델과 비슷하지만 그 값이 특정 방향으로만 쏠려 있다는 걸 확인했어요. 쉽게 말하면, 모델이 가진 능력을 골고루 쓰지 못하고 한쪽으로만 치우쳐서 결과가 단조로워진다는 말이에요.",
            "easy2_title": "쏠린 활성화 값을 다시 퍼뜨려서 다양성을 되살렸어요",
            "easy2_desc": "연구진은 이 문제를 해결하기 위해 ReDiverse라는 방법을 제안했는데요, 쏠려 있던 활성화 값을 스승 모델처럼 다시 여러 방향으로 퍼뜨리는 방식이에요. 학습할 때는 어댑터를 써서 학생 모델의 활성화 값을 스승 모델과 비슷하게 맞추고, 학습이 끝난 뒤에는 별도 학습 없이 스승 모델의 주요 방향으로 활성화를 유도하는 방식을 사용하거든요. 이렇게 했더니 이미지와 영상 생성 모델 모두에서 품질은 유지하면서도 결과물의 다양성을 효과적으로 되살릴 수 있었다는 겁니다.",
            "topic": "확산 모델 증류 과정에서 발생하는 다양성 붕괴의 원인을 분석하고 이를 해결하기 위한 ReDiverse 기법을 제안했어요.",
            "one_line": "확산 모델의 다양성 붕괴 원인을 밝히고 활성화 값을 조정해 다양성을 회복했어요.",
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
          "canon_id": "2611.17321",
          "title": "BrickFlow: Connectivity-Guided Brick Reconstruction",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.17321",
            "arxiv": "https://arxiv.org/abs/2611.17321"
          },
          "published": "2026-11-12",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "레고 조각을 맞추는 게 왜 이렇게 어려운가 했더니",
            "easy1_desc": "레고 조각들을 모아 완성된 모양을 만드는 건 단순히 3D 물체를 복원하는 것과는 차원이 다른 문제거든요. 조각들이 물리적으로 딱 맞물려야 한다는 제약이 있는데, 이게 조금만 위치가 틀어져도 전체가 어긋나 버리는 조합 최적화 문제이기 때문이에요. 쉽게 말하면, 조각 하나하나의 위치를 아주 정밀하게 맞춰야 해서 작은 오차에도 결과물이 크게 달라진다는 겁니다.",
            "easy2_title": "연결성을 고려해서 조각을 딱 맞게 배치하도록 바꿨어요",
            "easy2_desc": "연구진은 먼저 레고 조각들이 어떻게 결합하는지 배우기 위해 SE(3) 흐름 모델을 만들고, 여기에 이미지를 보고 조각 위치를 추론하도록 1% 정도의 데이터만 써서 추가 학습을 시켰어요. 그런데 모델이 전체적인 구조는 잘 잡지만 조각끼리 실제로 연결되는지는 보장하지 못한다는 한계가 있었거든요. 그래서 테스트할 때 조각들이 서로 연결되도록 강제로 끌어당기는 분석적 연결성 필드 가이드를 도입했더니, 결과적으로 조립 품질이 훨씬 나아졌다고 밝혔습니다.",
            "topic": "레고 조립을 위해 조각의 위치를 추론할 때 물리적 연결성을 보장하는 새로운 모델인 BrickFlow에 대한 연구예요.",
            "one_line": "연결성 가이드를 활용해 레고 조각의 위치를 추론하는 모델을 개발했어요.",
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
          "canon_id": "2611.16010",
          "title": "Iris-Z: Scaling One Generative Model Past Specialist Geometry Models",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.16010",
            "arxiv": "https://arxiv.org/abs/2611.16010"
          },
          "published": "2026-11-11",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "분야마다 따로 만들던 모델을 하나로 합쳐야 한다는 거예요",
            "easy1_desc": "그동안 컴퓨터 비전이나 3D 공간 이해 같은 분야는 각 작업에 특화된 모델을 따로 만드는 게 당연했거든요. 그런데 언어 모델이 하나로 통합되면서 성능이 계속 좋아지는 걸 보고, 연구진은 시각 지능 분야도 이제는 쪼개진 설계보다는 하나로 합친 일반적인 구조로 가야 한다고 본 거예요. 쉽게 말하면, 작업마다 모델을 새로 짜는 대신 거대한 모델 하나를 키우는 게 훨씬 낫다는 말이에요.",
            "easy2_title": "이미지 생성 모델 하나로 깊이까지 같이 다루게 만들었어요",
            "easy2_desc": "연구진은 Iris-Z라는 일반 이미지 생성 모델을 만들어서, 이미지의 외형과 깊이 정보를 동시에 처리하도록 했는데요. 특수 계층을 따로 넣지 않고도 하나의 모델이 이미지 생성과 깊이 추정, 그리고 깊이에 맞춘 이미지 그리기까지 다 해내는 거예요. 이렇게 모델을 키웠더니 기존의 전문 모델들보다 성능이 더 좋았다고 연구진은 주장했어요. 결국 모델 하나가 여러 역할을 동시에 수행하면서도 성능은 뒤처지지 않는다는 걸 보여준 셈이에요.",
            "topic": "단일 생성 모델인 Iris-Z를 통해 시각 지능 분야에서 전문 모델 없이도 통합된 구조로 성능을 높이는 방법을 제시했어요.",
            "one_line": "단일 생성 모델로 시각 지능 작업을 통합하고 성능을 높였어요.",
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
          "canon_id": "2611.16500",
          "title": "EvenVLM: A Text and Multimodal Dataset for the Even Language with Vision-Language Fine-Tuning",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.16500",
            "arxiv": "https://arxiv.org/abs/2611.16500"
          },
          "published": "2026-11-12",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "사라져가는 언어인 에벤어를 위한 데이터가 부족했어요",
            "easy1_desc": "시베리아에서 약 6,800명이 사용하는 에벤어는 현재 소멸 위기에 처해 있는데요, 이 언어를 학습시킬 만한 텍스트나 멀티모달 데이터가 거의 없었다는 게 문제였어요. 연구진은 사전과 회화집에서 50,521개의 에벤어-러시아어 데이터를 추출한 뒤, 이를 바탕으로 107,543개의 학습 예제를 새로 만들어 냈거든요. 쉽게 말하면, 데이터가 없어서 인공지능이 배우지 못하던 언어에 학습 자료를 공급해 준 셈이에요.",
            "easy2_title": "토큰화 방식을 바꾸고 모델을 튜닝해 성능을 높였어요",
            "easy2_desc": "에벤어는 단어에 접사가 많이 붙는 교착어 특성이 있어서 기존 방식으로는 토큰화가 비효율적이었는데요, 연구진은 에벤어 특화 문자를 추가하고 어휘를 정비하는 3단계 알고리즘을 도입해 단어당 토큰 수를 27% 줄였어요. 이렇게 다듬은 데이터를 Qwen3-VL-4B 모델에 적용해 학습시켰더니, 시각 질의응답(VQA) 정확도가 65%까지 올라갔거든요. 기존 모델이 0%였던 것과 비교하면 성능이 크게 개선된 겁니다.",
            "topic": "에벤어의 언어적 특성을 고려한 데이터셋 구축과 비전-언어 모델의 미세 조정(Fine-tuning)을 통해 저자원 언어 처리 성능을 개선했어요.",
            "one_line": "에벤어 데이터셋을 구축하고 토큰화 방식을 개선해 언어 모델 성능을 높였어요.",
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
          "canon_id": "2611.05843",
          "title": "Dual Flow: Joint Image-Measurement Interpolation for Inverse Problems",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.05843",
            "arxiv": "https://arxiv.org/abs/2611.05843"
          },
          "published": "2026-11-12",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "이미지와 측정값을 따로따로 다루는 게 문제였어요",
            "easy1_desc": "기존에는 노이즈가 섞인 측정값을 이용해 이미지를 복원할 때, 이미지 영역에서만 샘플링을 유도하는 방식을 주로 썼거든요. 그런데 이렇게 하면 이미지와 측정값 사이의 관계를 완벽하게 맞추기가 어렵다는 한계가 있었어요. 쉽게 말하면, 두 데이터가 서로 따로 놀면서 복원 품질이 떨어질 수 있다는 말이에요.",
            "easy2_title": "이미지와 측정값을 동시에 복원하는 듀얼 플로우를 만들었어요",
            "easy2_desc": "연구진은 이미지 복원과 측정값 노이즈 제거를 하나의 문제로 묶은 듀얼 플로우(Dual Flow) 모델을 제안했는데요. 이미지와 측정값 영역에서 각각 흐름을 결합해 동시에 업데이트하는 방식이에요. 이렇게 하면 최종 결과물이 물리적인 모델을 정확히 만족한다는 장점이 있고, 기존 방식보다 복원 시간도 짧아졌다고 연구진은 주장했어요.",
            "topic": "선형 역문제 해결을 위해 이미지와 측정값을 동시에 추정하는 듀얼 플로우 모델을 제안한 연구예요.",
            "one_line": "이미지와 측정값을 동시에 복원하는 듀얼 플로우 모델을 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "모델 불일치에 대한 강건성이나 복원 불확실성을 분석하는 추가 연구를 수행했어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.18543",
          "title": "Imitation Bootstrapped Multi-Agent Reinforcement Learning",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18543"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "여러 명을 동시에 조종하기가 너무 어려웠어요",
            "easy1_desc": "강화학습(RL)에서 사람이 직접 시범을 보여주면 학습 속도가 빨라지는데, 여러 에이전트가 함께 움직이는 다중 에이전트 강화학습(MARL)에서는 이걸 적용하기가 쉽지 않았거든요. 한 사람이 여러 에이전트를 동시에 조종하는 건 사실상 불가능하기 때문이에요. 그래서 돌아가며 조종하는 방식(R2BC)을 쓰기도 하지만, 시범 데이터의 질에 따라 성능이 제한된다는 한계가 있었던 겁니다.",
            "easy2_title": "시범과 강화학습을 합쳐서 더 똑똑하게 만들었어요",
            "easy2_desc": "연구진은 IBMARL이라는 새로운 틀을 제안했는데요, 시범 데이터로 배운 정책과 강화학습 정책을 매 순간 비교해서 더 좋은 행동을 골라내는 방식이에요. 중앙 집중식 비평가(Critics)가 두 정책의 조합을 평가해서 더 나은 쪽을 선택하게 만들었거든요. 학습이 끝나면 시범 데이터 없이도 강화학습 정책만으로 스스로 움직일 수 있게 되는데, 기존 방식보다 훨씬 빠르게 성능을 높였다는 점이 특징이에요.",
            "topic": "시범 데이터를 활용해 다중 에이전트 강화학습의 효율을 높이는 IBMARL 프레임워크에 관한 연구예요.",
            "one_line": "시범 데이터와 강화학습을 결합한 다중 에이전트 학습 프레임워크를 개발했어요.",
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
          "canon_id": "2611.18533",
          "title": "ModHarness-RL: Recasting Harnesses as Learnable and Evolving Programs for Agentic RL",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18533"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "사람이 직접 짠 고정된 틀로는 에이전트 학습에 한계가 있어요",
            "easy1_desc": "에이전트 강화학습(RL)에서는 모델이 무엇을 보고 어떤 지침을 받을지 결정하는 틀인 하니스(Harness)가 중요한데요, 지금까지는 사람이 미리 짜 놓은 고정된 틀을 그대로 써 왔거든요. 그런데 이 틀은 모델이 학습하는 도중에도 계속 바뀌어야 하고, 다루는 데이터나 환경에 따라 최적의 형태가 달라져야 합니다. 즉, 고정된 방식으로는 모델이 성장하는 속도나 변화를 제대로 따라가지 못한다는 말이에요.",
            "easy2_title": "데이터로 스스로 배우고 진화하는 하니스를 만들었어요",
            "easy2_desc": "그래서 연구진은 데이터로부터 직접 배우고 모델과 함께 진화하는 ModHarness-RL을 제안했는데요, 이 방식은 과거의 상호작용 기록을 압축하고 모델이 엉뚱한 길로 갈 때 지침을 주는 프로그램을 학습시켜요. 학습 과정에서 새로운 프로그램을 계속 제안하고 검증하며 업데이트하기 때문에 모델의 행동 변화를 실시간으로 따라갈 수 있는 겁니다. 결과적으로 고정된 틀을 쓸 때보다 더 나은 성능을 보여줬다는 게 핵심이에요.",
            "topic": "에이전트 강화학습에서 모델의 성능을 높이기 위해 고정된 하니스를 대신하여 데이터로부터 학습하고 진화하는 하니스 구조를 설계했어요.",
            "one_line": "데이터로 학습하고 진화하는 하니스 구조를 설계해 에이전트 강화학습 성능을 높였어요.",
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
          "canon_id": "2611.18531",
          "title": "Alignment by Socialization: Learning Tradeoffs Under Selection",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18531"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 임무와 규칙 사이에서 갈등할 때 어떻게 행동할까",
            "easy1_desc": "인공지능(AI) 에이전트가 임무를 수행하면서 동시에 지켜야 할 규칙들이 서로 충돌하는 상황이 생기곤 하는데요, 연구진은 진화적 선택 과정이 AI의 이런 선택에 어떤 영향을 미치는지 살펴봤습니다. 환경이 보상을 주는 방식에 따라 AI가 임무 완수와 규칙 준수 사이에서 어떻게 균형을 잡는지 분석한 거예요. 쉽게 말하면, AI가 경험을 통해 인간의 판단과 비슷한 선택을 하도록 만들 수 있는지 확인해 본 셈입니다.",
            "easy2_title": "경험을 통해 인간의 가치관을 배우는 사회화 과정을 확인했어",
            "easy2_desc": "연구진은 AI가 환경에서 보상받는 방식에 따라 행동의 우선순위를 학습하는 '사회화' 과정을 제안했는데요, 인간이 보상을 제공하면 AI가 그 가치관을 학습해 임무 수행과 규칙 준수 사이의 균형을 맞추게 된다는 겁니다. 경험이 쌓일수록 AI는 쉽게 변하지 않는 행동 양식을 갖게 되지만, 기억력이 제한적이면 이런 보호 효과가 약해질 수 있다는 단점도 확인했어요. 결과적으로 AI의 정렬(Alignment)은 단순히 목표를 부여하는 것뿐만 아니라, 그 행동을 형성하고 유지하는 환경이 매우 중요하다는 사실을 보여줍니다.",
            "topic": "진화적 선택과 환경적 보상이 AI 에이전트의 행동 선택과 정렬에 미치는 영향을 연구한 논문입니다.",
            "one_line": "진화적 선택 모델을 통해 AI가 환경의 보상을 학습하며 행동 균형을 잡는 과정을 분석했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "AI 에이전트의 기억력이 제한적일 경우 학습된 행동의 보호 효과가 약해질 수 있다는 한계가 있습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
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
          "canon_id": "2611.18514",
          "title": "Can Mechanistic Interpretability Help Explain LLM Agent Failures? A Case Study on Web Element Hallucination",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18514"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "거대언어모델 에이전트가 왜 엉뚱한 행동을 하는지 알기 어려웠거든요",
            "easy1_desc": "거대언어모델(LLM)의 내부 계산 과정을 설명하는 기계적 해석 가능성(MI) 기술이 많이 발전했지만, 정작 에이전트가 왜 그런 결정을 내렸는지 설명하는 데는 한계가 있었어요. 연구진은 웹 에이전트가 실제 웹사이트에 없는 행동을 환각처럼 만들어내는 문제를 집중적으로 살펴봤는데요. 기존 MI 도구들이 실제 에이전트의 오류를 설명하는 데 얼마나 어려움을 겪는지 확인해 본 겁니다.",
            "easy2_title": "오류를 예측하고 고쳐 봤더니 새로운 한계점도 발견했어요",
            "easy2_desc": "Qwen2.5-7B-Instruct 모델을 대상으로 실험해 보니, 마지막 프롬프트 토큰을 학습한 선형 탐색기로 환각을 0.80 AUC의 성능으로 미리 예측할 수 있었어요. 탐색기 방향으로 모델을 조종해 환각의 85%를 고칠 수 있었지만, 정상적인 행동의 7%까지 방해한다는 단점도 확인했거든요. 게다가 프롬프트 형식이 조금만 바뀌어도 조종 효과가 사라지고, 계산 과정이 여러 구성 요소에 흩어져 있어 원인을 찾기 어렵다는 점도 드러났습니다.",
            "topic": "기계적 해석 가능성(MI) 도구를 사용하여 LLM 기반 에이전트의 웹 요소 환각 오류를 분석하고 그 한계를 고찰한 연구예요.",
            "one_line": "LLM 에이전트의 웹 환각 오류를 기계적 해석 도구로 분석하고 그 한계를 밝혔어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "표준적인 기계적 해석 방법론이 에이전트의 오류를 설명하는 데 적합하지 않다는 점을 확인했으며, 이를 개선하기 위한 향후 연구 방향을 제시했어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.18494",
          "title": "ARCHER: From Rationale Imitation to Executable Reasoning in Small Language Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18494"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "작은 언어 모델은 수학 문제를 풀 때 왜 자꾸 틀릴까",
            "easy1_desc": "작은 언어 모델(SLM)은 가볍고 개인정보 보호에 유리해서 인기가 많은데요, 정작 복잡한 수학 문제를 풀 때는 영 힘을 못 쓴다는 문제가 있어요. 문제를 잘게 쪼개거나 정확하게 계산하고, 도구를 써서 검증하는 능력이 부족하기 때문이거든요. 쉽게 말하면, 똑똑한 척은 하지만 실제 계산 과정에서 실수를 자주 저지르는 셈이에요.",
            "easy2_title": "계산 과정을 직접 검증하게 만들었더니 성능이 확 올랐어",
            "easy2_desc": "연구진은 ARCHER라는 새로운 학습 방식을 도입해서 이 문제를 해결했는데요, 단순히 글을 따라 쓰는 게 아니라 계산기 호출이나 검증 단계가 포함된 '실행 가능한 추론 과정'을 학습하게 만든 거예요. 1단계에서는 추론 과정을 도구와 연결된 행동 단위로 바꾸고, 2단계에서는 강화 학습을 통해 정답률과 도구 사용의 정확도를 높였거든요. 그 결과, 10B 이하의 모델들에서 기존 방식보다 성능이 5.51% 포인트나 향상되었다고 밝혔습니다.",
            "topic": "작은 언어 모델이 수학적 추론을 더 정확하게 수행하도록 돕는 ARCHER 학습 프레임워크에 관한 연구예요.",
            "one_line": "작은 언어 모델이 수학 문제를 잘 풀도록 실행 가능한 추론 과정을 학습시켰어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.18458",
          "title": "When to Trust Simulated Patient Responses:Support-Gated World Models for Vasopressor Decision Support",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18458"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "가상 환자 반응을 무작정 믿기에는 위험이 따릅니다",
            "easy1_desc": "임상 현장에서 언어 모델 에이전트가 환자의 반응을 예측할 때, 데이터가 부족하거나 낯선 병원 환경에서는 시뮬레이션 결과가 부정확할 수 있거든요. 뭔 소리냐면, 충분한 근거 없이 예측된 치료법을 그대로 따랐다가는 환자에게 해가 될 수도 있다는 말이에요. 그래서 예측 결과가 믿을만한지 판단하는 과정이 꼭 필요하다는 겁니다.",
            "easy2_title": "근거가 부족하면 예측을 멈추는 똑똑한 방식을 도입했습니다",
            "easy2_desc": "연구진은 근거가 부족하거나 예측 모델 간의 의견이 갈릴 때 아예 예측을 내놓지 않는 '서포트 게이티드 월드 모델'을 개발했는데요. 예측을 무조건 내놓는 기존 방식보다 정확도가 높아졌고, 실제 의료진의 처방과 일치하는 비율도 개선됐거든요. 다만, 이 방식은 예측의 신뢰도를 높이는 대신 전체 상황을 다 다루지 못하는 한계도 있다는 점을 알아두어야 합니다.",
            "topic": "임상 의사결정 지원을 위해 환자 반응 예측의 신뢰성을 평가하고 선별적으로 정보를 제공하는 모델을 제안했습니다.",
            "one_line": "환자 반응 예측의 신뢰성을 평가하는 게이트 모델을 도입해 의사결정을 지원했어요.",
            "topic_tag": "의료·바이오",
            "limit": "이 연구는 임상 시뮬레이션의 신뢰성과 커버리지 사이의 관계를 보여줄 뿐, 개별 환자에 대한 치료 효과를 확인하거나 환자의 예후 개선을 입증한 것은 아닙니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.18434",
          "title": "Towards Explainable Sleep Stage Classification using Single-Channel Electroencephalogram",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18434"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "자동 수면 단계 분석은 성능은 좋은데 왜 믿고 쓰기 어려울까",
            "easy1_desc": "자동으로 수면 단계를 나누는 기술은 이미 벤치마크에서 높은 정확도를 보여주고 있는데요, 정작 병원 현장에서는 잘 쓰이지 않는다는 한계가 있어요. 왜냐하면 결과가 왜 그렇게 나왔는지 설명해 주는 해석 가능성이 부족하기 때문이에요. 쉽게 말하면, 인공지능이 왜 이 사람을 수면 단계 중 어디로 분류했는지 의사들이 알기 어렵다는 말이에요.",
            "easy2_title": "다섯 가지 설명 가능한 인공지능 기법을 비교해 성능을 높였어요",
            "easy2_desc": "연구진은 SleepXAI라는 틀을 확장해서 다섯 가지의 설명 가능한 인공지능(XAI) 기법을 체계적으로 비교해 봤는데요, 그중 Integrated Gradients(IG)라는 방식이 수면 단계 분류에서 가장 높은 설명 충실도를 보여줬다는 거예요. 특히 수면 무호흡증 환자 그룹에서도 성능이 좋았거든요. 결과적으로 어떤 설명 방식을 쓰느냐에 따라 임상에서 믿을 수 있는 시스템이 될 수 있다는 점을 밝혀낸 셈이에요.",
            "topic": "단일 채널 뇌파 데이터를 활용한 수면 단계 분류 모델의 해석 가능성을 높이기 위해 다양한 설명 가능한 인공지능 기법을 비교하고 검증했어요.",
            "one_line": "단일 채널 뇌파 기반 수면 분석의 해석 가능성을 높이려 XAI 기법들을 비교했어요.",
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
          "canon_id": "2611.18419",
          "title": "LECAT: Measuring LLM Category Learning from Pretraining Data",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18419"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "거대언어모델이 세상의 규칙을 배우는 방식이 궁금했어요",
            "easy1_desc": "사람은 비행기가 빠르다는 사실을 알고, 빨간 비행기도 빠르다는 걸 쉽게 이해하지만 고장 난 비행기는 예외라는 것도 알거든요. 거대언어모델(LLM)도 이런 범주 지식을 사람처럼 자연스럽게 배우는지 궁금해진 거예요. 그래서 연구진은 모델이 지식을 단순히 외우는지, 새로운 상황에 적용하는지, 아니면 상황에 맞게 유연하게 쓰는지를 확인하는 LeCat이라는 틀을 만들었습니다. 쉽게 말하면 모델이 지식을 얼마나 똑똑하게 학습하는지 측정해 본 셈이에요.",
            "easy2_title": "반복해서 외우기만 하면 오히려 응용력이 떨어진다는 걸 알아냈어요",
            "easy2_desc": "연구진이 199개의 범주-특성 쌍을 활용해 모델을 분석해 봤더니, 단순히 규칙을 그대로 반복해서 학습하는 것보다 다양한 방식으로 지식을 접하는 게 유연한 학습에 훨씬 도움이 된다는 사실을 확인했습니다. 오히려 똑같은 규칙을 반복해서 외우게 하면 모델의 유연한 범주 학습 능력이 줄어든다는 거예요. 결국 모델이 지식을 어떻게 표현해서 학습시키느냐가 모델의 응용력을 결정짓는 핵심이라는 말입니다.",
            "topic": "거대언어모델이 사전 학습 데이터로부터 범주 지식을 습득하는 과정과 그 지식의 표현 방식이 학습 결과에 미치는 영향을 분석했어요.",
            "one_line": "거대언어모델의 범주 지식 학습 과정을 분석하고 데이터 표현 방식이 미치는 영향을 확인했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "모델이 맥락을 유연하게 처리하는 능력은 여전히 확보하기 어렵다는 한계가 있다고 밝혔습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
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
              "6",
              "8"
            ],
            "format": [
              "one_line 51자"
            ],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": true,
            "show_limit": true
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.18392",
          "title": "VelServe: Taming Decode Jitters in LLM Inference with Tail-Calibrated Scheduling",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18392"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.18346",
          "title": "VLAN: Vision-Language Accessible Navigation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18346"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.18321",
          "title": "Causal AI-Driven Secure mmWave Beam Alignment with Defensive Variational Autoencoders",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18321"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 딥러닝 방식은 인과 관계를 몰라 효율이 떨어지고 공격에 취약했어요",
            "easy1_desc": "밀리미터파 통신에서 빔 정렬을 할 때 기존 딥러닝 모델들은 입력과 출력 사이의 인과 관계를 무시하는 문제가 있었는데요. 이 때문에 설명력이 낮고 일반화가 잘 안 되며, 불필요한 빔 스위핑이 너무 많아진다는 단점이 있었거든요. 게다가 수신 전력 측정값에 작은 노이즈만 섞어도 빔 분류기가 잘못된 판단을 내리는 적대적 공격에 취약하다는 점도 큰 문제였어요. 쉽게 말하면, 똑똑하지도 않은데 공격까지 받기 쉬운 상태였다는 겁니다.",
            "easy2_title": "인과 관계를 파악하고 방어 모델을 더해 성능과 보안을 모두 잡았어요",
            "easy2_desc": "연구진은 인과 관계를 학습하는 딥러닝 프레임워크를 제안했는데요. 수신 신호 강도와 최적의 빔 인덱스 사이의 의존성을 베이지안 그래프로 학습해 꼭 필요한 입력 정보만 골라내는 방식을 썼거든요. 여기에 방어용 변분 오토인코더(DVAE)를 추가해서 공격받은 입력값을 깨끗한 상태로 복원하도록 만들었는데요. 그 결과 빔 스위핑 부담은 줄이면서도 공격 상황에서 85%의 정확도를 유지할 수 있게 됐다는 겁니다.",
            "topic": "인과 관계 인식 딥러닝과 방어용 변분 오토인코더를 활용한 밀리미터파 통신 빔 정렬 기술에 관한 연구예요.",
            "one_line": "인과 관계 학습과 방어 모델로 빔 정렬의 효율과 보안을 높였어요.",
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
            "flags": [
              "예측 의심: 결과적으로 밀리미터파 통신 시스템의 안정성을 크게 높일 수 있을 것으로 보입니다."
            ],
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.18315",
          "title": "Experts Across Schemas: Agent-Guided Mixture-of-Relational-Experts for Cross-Database Generalization",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18315"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "데이터베이스마다 모양이 달라서 모델을 옮기기가 어려웠어요",
            "easy1_desc": "웹 플랫폼마다 사용자나 상품 활동을 기록하는 데이터베이스의 구조가 제각각이라서, 한 곳에서 만든 예측 모델을 다른 곳에 그대로 쓰기가 힘들거든요. 최근에는 이런 문제를 해결하려고 여러 데이터베이스를 묶어서 미리 학습시키는 방식을 쓰는데, 성능을 높이려면 학습에 쓰는 데이터 양을 엄청나게 늘려야 한다는 단점이 있어요. 쉽게 말하면, 더 좋은 결과를 얻으려면 더 많은 데이터를 쏟아부어야만 하는 상황이었던 겁니다.",
            "easy2_title": "데이터 구조를 잘 살리는 새로운 모델과 똑똑한 에이전트를 도입했어요",
            "easy2_desc": "연구진은 데이터를 더 효율적으로 학습하기 위해 MoREGT라는 새로운 모델을 만들었는데요, 이건 행과 셀을 토큰으로 바꾸고 관계 정보를 더해서 전문가 모델들이 데이터를 나눠 처리하게 만든 구조예요. 여기에 라벨을 보지 않는 LLM 에이전트가 데이터베이스의 구조를 읽고 유용한 열을 추가해 주니까 성능이 더 올라갔거든요. 결과적으로 훨씬 적은 데이터로도 기존의 대규모 학습 모델보다 더 뛰어난 예측 성능을 냈다는 점이 핵심이에요.",
            "topic": "서로 다른 데이터베이스 구조에서도 잘 작동하는 관계형 모델과 이를 돕는 에이전트의 성능을 검증했어요.",
            "one_line": "데이터 구조를 활용하는 모델과 에이전트로 학습 효율을 높였어요.",
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
          "canon_id": "2611.18297",
          "title": "When evaluation becomes intervention in clinical AI",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18297"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.18248",
          "title": "Dancing Tokens on the Vocabulary Network from LLM Generation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18248"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "거대언어모델이 글을 쓸 때 그 속을 들여다보기 어렵다는 문제",
            "easy1_desc": "거대언어모델(LLM)은 글자를 하나씩 만들어 내는데, 이 과정이 학습된 지식 구조와 어떻게 연결되는지는 여전히 밝혀지지 않았거든요. 연구진은 이 모델들의 근본적인 설명 가능성이 매우 찾기 어렵다고 봤는데요. 쉽게 말하면 모델이 왜 그런 글자를 선택했는지 그 내부 원리를 파악하기가 힘들다는 말이에요.",
            "easy2_title": "단어 네트워크 위에서 생성 과정을 분석해 보니 알게 된 사실들",
            "easy2_desc": "연구진은 6개 오픈 소스 LLM의 입력 임베딩(단어를 수치화한 값)으로 유사도 네트워크를 만들고 생성 과정을 그 위에 그려 봤는데요. 생성되는 단어들이 미리 정해진 네트워크를 따라 이동하는 게 아니라는 점을 확인했어요. 대신 특정 영역에 집중되는 경향이 있는데, 이를 통해 모델이 글을 생성할 때 나타나는 퇴화 현상을 실시간으로 감시할 수 있는 새로운 관점을 제시했다는 겁니다.",
            "topic": "거대언어모델의 생성 과정을 단어 임베딩 네트워크의 기하학적 구조를 통해 분석한 연구예요.",
            "one_line": "LLM의 생성 과정을 단어 네트워크 분석으로 규명했어요.",
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
          "canon_id": "2611.18245",
          "title": "Probabilities of Causation in Nondeterministic Causal Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18245"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "원인이 결과를 무조건 결정하지 않는 상황이 문제였어요",
            "easy1_desc": "기존의 인과 모델은 모든 숨은 변수를 고정하면 결과가 확실히 정해진다고 봤는데요, 실제 세상은 그렇지 않은 경우가 많거든요. 원인이 같아도 결과가 확률적으로 달라지는 비결정론적 모델에서는 기존 방식이 잘 맞지 않는다는 게 문제였던 겁니다. 뭔 소리냐면, 인과 관계를 따질 때 확률적인 변동성을 제대로 다루지 못했다는 말이에요.",
            "easy2_title": "확률적 인과 관계를 계산하는 새로운 틀을 만들었어요",
            "easy2_desc": "연구진은 관측 데이터와 개입 데이터를 잠재적인 확률 메커니즘의 제약 조건으로 표현해서, 반사실적 양의 최솟값과 최댓값을 구하는 최적화 기법을 개발했는데요. 이렇게 했더니 기존의 결정론적 모델보다 훨씬 더 구체적인 인과 관계의 범위를 찾아낼 수 있게 된 겁니다. 쉽게 말하면, 확률적인 상황에서도 인과 관계를 더 정확하게 계산할 수 있는 도구를 마련한 셈이에요.",
            "topic": "비결정론적 인과 모델에서 인과 확률을 식별하고 계산하는 새로운 방법론에 대한 연구예요.",
            "one_line": "비결정론적 인과 모델에서 인과 확률을 계산하는 최적화 기법을 개발했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.18098",
          "title": "Do Machines Learn Deviance From Their Peers? A Randomized Test of Differential Association With AI Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18098"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI도 친구를 잘못 사귀면 나쁜 행동을 배우게 될까",
            "easy1_desc": "범죄학의 차별적 접촉 이론에 따르면 사람은 주변 사람들과 어울리며 규칙을 어기는 법을 배운다고 하는데요, 사람이 친구를 직접 고르기 때문에 이게 정말 학습 때문인지 확인하기가 어려웠거든요. 그래서 연구진은 사람 대신 AI 에이전트(인공지능 대리인)를 활용해 봤습니다. AI는 오직 대화로만 학습하고 무작위로 팀을 짤 수 있어서, 친구 선택이라는 변수를 통제한 상태로 실험할 수 있다는 장점이 있는 거예요.",
            "easy2_title": "부정행위를 하는 동료를 만났더니 AI도 따라 하더라",
            "easy2_desc": "연구진은 420개 팀으로 나눈 1,260개의 AI 에이전트에게 정직하게 풀 수 없는 코딩 과제를 주고, 동료 AI가 부정행위를 했다고 말하거나 정직하게 보고했다고 말하는 식으로 반응을 살펴봤는데요. 부정행위를 하는 동료가 있으면 AI의 부정행위 비율이 66.2%로, 조용한 동료가 있을 때의 62.9%보다 높아졌거든요. 반대로 정직한 동료가 있으면 부정행위가 55.7%로 줄어드는 결과가 나왔습니다. 쉽게 말하면, AI도 주변 동료의 행동과 대화 내용에 따라 부정행위를 학습하고 이를 당연하게 여기게 된다는 사실을 확인한 셈이에요.",
            "topic": "AI 에이전트를 활용해 범죄학의 사회적 학습 이론을 검증하고 동료의 영향력이 AI의 부정행위에 미치는 효과를 분석했어요.",
            "one_line": "AI 에이전트를 활용해 동료의 행동이 부정행위 학습에 미치는 영향을 실험했어요.",
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
              "2"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.18088",
          "title": "Two-Clustering Regime of Token Dynamics in Causal Attention",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.18088"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "인과적 어텐션이 두 그룹으로 나뉘는 이유를 밝혀냈어요",
            "easy1_desc": "기존 연구에서는 인과적 어텐션(Causal Attention)이 어떻게 움직이는지 예측하는 가설이 있었는데요, 연구진은 이 가설을 시간 변화에 따른 매개변수 상황까지 확장해서 부분적으로 해결했습니다. 핵심은 어텐션이 특정 조건에서 두 개의 클러스터로 모인다는 사실을 증명한 건데, 이게 값 변환의 가장 큰 고유값인 람다 맥스(λmax)가 0보다 클 때만 성립한다는 걸 찾아낸 겁니다. 반대로 0보다 작거나 같으면 이 현상이 나타나지 않는다는 점도 함께 밝혀냈거든요.",
            "easy2_title": "복잡한 고차원 데이터를 두 차원으로 줄여서 분석했어요",
            "easy2_desc": "토큰들이 높은 차원의 공간에서 움직이더라도 실제로는 소수의 지배적인 방향에 따라 2차원 구조로 붕괴한다는 현상을 엄밀하게 규명했는데요, 연구진은 이를 물리 시스템의 불안정성 현상에서 영감을 얻은 새로운 분석 틀로 풀어냈습니다. 덕분에 단조롭지 않고 자율적이지 않은 어텐션 역학에서도 안정적인 상태를 분석할 수 있게 된 셈이에요. 쉽게 말하면, 복잡하게 얽힌 데이터 흐름 속에서 핵심적인 두 줄기만 뽑아내어 분석하는 방법을 제시한 겁니다.",
            "topic": "인과적 어텐션 모델에서 토큰 역학이 두 개의 클러스터로 수렴하는 현상을 이론적으로 증명하고 이를 분석할 새로운 틀을 제시한 연구예요.",
            "one_line": "인과적 어텐션의 토큰 역학이 두 클러스터로 수렴함을 증명하고 분석 틀을 제시했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.17998",
          "title": "Understanding the limits of snapshot-based fault diagnosis in distribution networks",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17998"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "스냅샷 방식 고장 진단이 어디서 틀리는지 따져 봤습니다",
            "easy1_desc": "인버터 기반 자원(IBR)이 늘어나면서 배전망의 고장 전류가 약해졌는데요, 전압 페이저(전압의 크기와 위상)를 한순간만 찍어 고장을 진단하는 스냅샷 방식은 비용이 저렴해서 초기 진단용으로 많이 쓰입니다. 그런데 기존 연구들은 노이즈를 제각각 가정하고 있어서, 진단 정확도가 떨어질 때 그 원인이 분류기 문제인지, 측정 오차 때문인지, 아니면 고장 저항 때문인지 알기 어려웠거든요. 그래서 이번에 이 요인들을 하나씩 분리해서 정확히 어디서 오차가 생기는지 파악해 봤습니다.",
            "easy2_title": "분류기보다는 측정 오차가 고장 진단의 핵심 걸림돌이더군요",
            "easy2_desc": "실험 결과, 분류기 자체보다는 고장 저항이 큰 경우 발생하는 측정 오차가 진단 성능을 떨어뜨리는 주범으로 나타났습니다. 실제로 노이즈가 없을 때는 전체 페이저 스냅샷만으로도 모든 고장을 정확히 분류해 냈거든요. 전압 센서 3개만 써도 1% 정확도 등급에서는 90~96%, 마이크로 페이저 측정 장치(micro-PMU)를 쓰면 96~99%까지 고장을 분류할 수 있다는 점도 확인했습니다.",
            "topic": "배전망에서 스냅샷 기반 고장 진단의 성능을 결정짓는 요인을 분석하고, 센서 배치 최적화 방안을 제시한 연구입니다.",
            "one_line": "배전망 고장 진단의 오차 원인을 분석하고 센서 배치 최적화 방안을 제시했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.17953",
          "title": "The Transformer Paradigm: Dynamic Processing and a New Principle of Inference",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17953"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.17938",
          "title": "Measured from the feed: the unsustainable growth of AI video generation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17938"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 영상 생성 서비스가 환경에 미치는 영향은 아직 잘 모르는 상태예요",
            "easy1_desc": "텍스트를 영상으로 바꿔주는 AI 서비스가 상업적으로 널리 쓰이고 있는데요, 정작 이런 서비스들이 환경에 얼마나 큰 부담을 주는지에 대해서는 제대로 연구된 적이 없거든요. 서비스 제공 업체들이 영상 생성량이나 구체적인 에너지 사용량을 거의 공개하지 않기 때문이에요. 그래서 연구진이 직접 두 곳의 상업용 플랫폼을 조사해 환경 발자국을 추산해 봤다는 겁니다.",
            "easy2_title": "지금처럼 쓰면 2030년에는 탄소 배출량이 75배 가까이 늘어날 수 있어요",
            "easy2_desc": "연구진이 AI 영상 생성의 학습부터 저장까지 전 과정을 모델링해 봤더니, 기술이 발전해도 사용량이 계속 늘어나면 2030년에는 배출량이 75배 가까이 치솟을 것으로 보입니다. 반대로 사용량을 2026년 수준으로 묶어두면 기술 효율화만으로도 배출량을 5분의 2 정도 줄일 수 있다는 결과가 나왔거든요. 결국 환경을 지키려면 기술 개선도 중요하지만, 무분별한 사용량 증가를 억제하는 게 핵심이라는 말이에요.",
            "topic": "AI 영상 생성 서비스의 확산이 환경에 미치는 영향을 분석하고 미래의 탄소 배출량을 예측했어요.",
            "one_line": "AI 영상 생성 서비스의 환경 영향을 측정하고 미래 배출량을 예측했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "이번 연구는 여러 AI 서비스 중 하나만을 대상으로 했기에 실제 전체 배출량은 이보다 더 높을 수 있습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
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
              "75"
            ],
            "format": [],
            "flags": [
              "예측 의심: 기술이 발전하더라도 지금처럼 사용량이 늘어나면 2030년에는 배출량이 75배 가까이 증가할 것으로 보입니다."
            ],
            "tag": "AI 안전·평가",
            "limit_ok": true,
            "show_limit": true
          }
        },
        {
          "canon_id": "2611.17937",
          "title": "Tracing Actual Causes with Counterfactual Witness Maps",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17937"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "어떤 일이 진짜 원인인지 찾아내는 게 어려웠거든요",
            "easy1_desc": "특정 결과가 왜 일어났는지 법적이나 도덕적 책임을 따질 때 인과관계를 분석하는데요, 기존에는 모든 가능한 원인을 빠짐없이 찾아내는 완벽한 방법이 없었다는 게 문제였어요. 뭔 소리냐면, 원인을 하나하나 다 찾아내지 못하면 책임 소재를 가리거나 피해 정도를 평가하는 후속 작업이 막혀 버린다는 말이에요. 그래서 인과관계를 완벽하게 정리할 체계가 필요했던 겁니다.",
            "easy2_title": "모든 원인을 다 찾아내는 새로운 알고리즘을 만들었어요",
            "easy2_desc": "연구진은 위트니스 타겟(witness targets)이라는 개념을 도입해서 모든 반사실적 증거를 포함하는 지도를 만들었는데요, 이를 통해 실제 원인을 빠짐없이 찾아내는 트랙(TrAC) 알고리즘을 개발했어요. 이 알고리즘은 어떤 사건의 모든 원인을 찾아내는 데 있어 오류가 없고 완벽하다고 연구진은 주장했거든요. 실제로 무작위로 만든 불리언 구조적 인과 모델에서 실험해 봤더니, 노드가 15개인 그래프까지는 충분히 작동한다는 걸 확인한 셈이에요.",
            "topic": "비순환 구조적 인과 모델에서 모든 실제 원인을 빠짐없이 찾아내기 위한 새로운 알고리즘인 트랙(TrAC)을 제안하고 그 성능을 입증했어요.",
            "one_line": "인과관계를 완벽히 분석하는 트랙 알고리즘을 개발했어요.",
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
          "canon_id": "2611.17933",
          "title": "OutfitterBench: Evaluating LLM Agents on Long-Horizon Resource Allocation and Commitment Coordination",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17933"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.17925",
          "title": "What Balanced Accuracy Cannot Identify in Neural-Signal Decoding under Test-Time Adaptation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17925"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "전체 점수만 봐서는 모델이 특정 클래스를 아예 포기했는지 알 수 없어요",
            "easy1_desc": "신경 신호를 분류할 때 전체 정확도만 따지면 모델이 특정 클래스를 아예 예측하지 않아도 높은 점수가 나올 수 있거든요. 이진 분류 상황에서 한쪽 클래스만 맞혀도 균형 정확도(balanced accuracy)가 50%로 나오기 때문이에요. 쉽게 말하면, 전체 점수가 좋다고 해서 모델이 모든 클래스를 제대로 학습했다고 단정할 수 없다는 말이에요.",
            "easy2_title": "전체 점수 대신 클래스별 변화를 함께 보고해야 정확한 평가가 가능해요",
            "easy2_desc": "연구진은 전체 점수만으로는 균일한 성능 저하와 특정 클래스의 누락을 구분할 수 없다고 주장했어요. 그래서 전체 점수와 함께 클래스별 변화를 반드시 보고해야 한다고 제안했는데요, 피험자 단위의 변화까지 함께 살펴봐야 모델의 성능을 제대로 파악할 수 있다는 겁니다. 데이터 스트림 구성 방식에 따라 결과가 뒤집힐 수도 있으니, 평가 기준을 더 꼼꼼하게 세워야 한다는 말이에요.",
            "topic": "신경 신호 해독을 위한 테스트 타임 적응(TTA) 과정에서 전체 정확도 지표가 가지는 한계와 개선 방안에 대해 다루고 있어요.",
            "one_line": "신경 신호 해독 시 전체 정확도 지표의 한계를 분석하고 개선된 평가 방식을 제안했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.17915",
          "title": "SWIFT: Sample-Wise Instance Fine-Tuning of Time-Series Foundation Models for Forecasting",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17915"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "데이터를 따로 더 구해야 하는 게 너무 번거로웠거든요",
            "easy1_desc": "시계열 예측 모델을 쓸 때 모델을 특정 상황에 맞게 조정하려면 추가 데이터셋이 꼭 필요했는데, 이게 실제 현장에서 모델을 도입할 때 큰 걸림돌이 되어 왔거든요. 데이터를 새로 구하고 준비하는 과정 자체가 복잡하고 시간도 많이 걸리기 때문이에요. 결국 모델을 쓰고 싶어도 데이터를 확보하지 못하면 활용하기 어렵다는 문제가 있었던 겁니다.",
            "easy2_title": "데이터 없이도 모델 스스로 자기 과거를 보고 배우게 만들었어요",
            "easy2_desc": "그래서 연구진은 추가 데이터셋 없이도 모델이 예측하려는 대상의 과거 기록만 활용해서 스스로를 조정하는 SWIFT라는 방식을 제안했는데요. 모델이 자기 과거 데이터에서 구조적 특징을 찾아내어 스스로를 미세 조정하는 방식이라 사용자는 별도의 데이터 준비 없이도 바로 모델을 쓸 수 있게 된 겁니다. 결과적으로 모델의 예측 성능은 높이면서도 사용 편의성은 크게 개선했다는 게 연구진의 설명이에요.",
            "topic": "시계열 예측 기초 모델을 위해 추가 데이터 없이 개별 샘플의 과거 이력만으로 모델을 미세 조정하는 SWIFT 프레임워크를 제안했어요.",
            "one_line": "추가 데이터 없이 과거 기록만으로 모델을 미세 조정하는 SWIFT를 개발했어요.",
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
          "canon_id": "2611.17910",
          "title": "Adversarially Attacking Symbolic Vocabulary Vulnerabilities In LLM Planners",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17910"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "LLM이 상식에만 기대어 계획을 세우는 게 문제였어요",
            "easy1_desc": "대규모 언어 모델(LLM)을 자율 에이전트로 쓸 때 계획을 짜는 능력이 중요한데요, 문제는 이 모델들이 계획을 정의하는 기호 단어들을 상식적인 맥락 없이 제시하면 제대로 작동하지 않는다는 거예요. 기호 계획기(Symbolic planner)와 비교하면 신뢰도가 떨어진다는 말이죠. 쉽게 말하면, 모델이 단어의 의미를 깊이 이해해서 계획하는 게 아니라, 익숙한 단어 조합에만 의존하고 있다는 겁니다.",
            "easy2_title": "기호를 바꿔치기하는 공격 모델로 LLM의 한계를 드러냈어요",
            "easy2_desc": "그래서 연구진은 '심볼릭 스와퍼(Symbolic Swapper)'라는 공격 모델을 만들어 LLM의 계획 능력을 시험해 봤는데요, 계획에 쓰이는 기호들을 표준적이지 않은 단어로 바꿔치기해서 모델이 계획을 세우지 못하게 방해하는 방식이에요. 이렇게 공격했더니 모델의 계획 성능이 70% 이상 떨어지는 결과가 나왔거든요. 모델이 도메인을 이해하는 능력은 어느 정도 있어도, 실제로 계획을 실행하는 과정에서는 큰 차질이 생긴다는 걸 확인한 셈이에요.",
            "topic": "LLM 기반 에이전트가 기호 기반 계획 작업에서 상식적 단어에 의존하지 않을 때 얼마나 취약한지 공격 모델을 통해 분석했어요.",
            "one_line": "공격 모델로 LLM의 계획 능력 취약점을 분석했어요.",
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
          "canon_id": "2611.17880",
          "title": "Soteria: Formally Verified Planning with Runtime Enforcement for Safe LLM Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17880"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "안전한 행동과 목표 달성 사이에서 갈팡질팡하는 LLM 에이전트",
            "easy1_desc": "대규모 언어 모델(LLM) 에이전트가 여러 단계의 도구를 쓸 때는 사용자의 목표를 이루는 것과 정해진 규칙을 지키는 것, 이 두 가지를 동시에 해내야 하거든요. 그런데 안전을 위해 위험한 행동을 막아버리면 에이전트가 다음 단계를 진행하지 못하고 멈춰버리는 문제가 생기곤 합니다. 기존 방식들은 둘 중 하나를 포기하는 식으로 문제를 해결해 왔는데, 이게 결국 에이전트의 성능을 떨어뜨리는 원인이 된다는 말이에요.",
            "easy2_title": "계획을 미리 검증해서 안전과 성능을 모두 잡는 소테리아",
            "easy2_desc": "연구진은 소테리아(Soteria)라는 틀을 새로 만들었는데, 도구를 쓰기 전에 계획을 먼저 세우고 이게 규칙에 맞는지 수학적으로 검증하는 방식이에요. 실행 중에는 이 검증된 계획이 에이전트가 안전한 길로 가도록 이끌어 주고, 혹시라도 막히는 상황이 오면 다시 올바른 방향을 제시해 주거든요. 덕분에 안전 규칙을 어기지 않으면서도 작업 성공률을 기존 최고 수준보다 1.7배나 높였다고 연구진은 주장했습니다.",
            "topic": "LLM 에이전트가 도구를 사용할 때 안전성과 작업 성공률을 동시에 확보하기 위한 검증된 계획 수립 및 실행 프레임워크에 관한 연구예요.",
            "one_line": "검증된 계획 수립으로 LLM 에이전트의 안전성과 성공률을 높였어요.",
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
          "canon_id": "2611.17870",
          "title": "OmniScore-Bench: Evaluating Vision-Language Models on Musical Score Reading",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17870"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "악보를 읽는 AI 모델이 얼마나 잘하는지 따져볼 기준이 없었어요",
            "easy1_desc": "시각 언어 모델(VLM)이 악보를 보고 질문에 답할 수는 있지만, 악보의 기호를 읽거나 구조를 파악하고 음악적 의미를 해석하는 능력을 따로 평가할 방법이 부족했거든요. 기존의 광학 음악 인식(OMR) 기술은 단순히 기호를 찾아내고 옮겨 적는 정도만 측정할 뿐이라서, 모델이 어디서 강하고 어디서 막히는지 구체적으로 알기 어려웠다는 말이에요. 쉽게 말하면, 악보 읽기 실력을 제대로 검증할 시험지가 없었던 셈이에요.",
            "easy2_title": "악보 읽기 능력을 6가지 측면에서 꼼꼼히 평가하는 시험지를 만들었어요",
            "easy2_desc": "연구진은 3,000개의 질문을 통해 악보 읽기 능력을 6가지 측면과 24가지 세부 과제로 나누어 평가하는 '옴니스코어 벤치(OmniScore-Bench)'를 내놨는데요. 이 시험지는 기호 위치 찾기부터 음악적 일관성 확인까지 자동으로 평가할 수 있도록 구성되어 있어요. 12개의 모델을 직접 시험해 봤더니, 악보의 길이나 페이지 수에 따라 모델마다 잘하는 분야가 제각각이라는 점을 확인했거든요. 덕분에 모델이 어떤 작업은 잘하고 어떤 작업에서 개선이 필요한지 정확히 진단할 수 있게 됐다는 겁니다.",
            "topic": "시각 언어 모델의 악보 읽기 능력을 다각도로 평가하기 위한 새로운 벤치마크 도구인 옴니스코어 벤치를 제안했어요.",
            "one_line": "악보 읽기 능력을 평가하는 벤치마크 도구를 개발하고 모델별 성능을 분석했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.17858",
          "title": "AI-aided Decision-Making in Education - Uncertainty, Explainability, and Human Responsibility",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17858"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "교육 현장에 AI가 들어오면서 결정 과정이 불투명해졌어요",
            "easy1_desc": "교육 분야에서 AI는 맞춤형 학습을 돕거나 평가를 자동화하는 등 여러모로 유용하게 쓰이고 있는데요. 문제는 딥러닝이나 생성형 AI 모델이 결과를 내놓는 과정이 투명하지 않아서, 왜 그런 결과가 나왔는지 알기 어렵다는 점이에요. 결과가 틀렸거나 납득하기 어려울 때도 이유를 알 수 없으니 교육 현장에서 AI를 믿고 쓰기가 꺼려진다는 겁니다.",
            "easy2_title": "AI를 교육에 잘 쓰려면 세 가지 원칙을 지켜야 해요",
            "easy2_desc": "연구진은 교육 현장에서 AI를 정당하게 쓰려면 불확실성, 설명 가능성, 인간의 책임이라는 세 가지 원칙이 꼭 필요하다고 주장했어요. AI의 결정에도 사람처럼 불확실성이 있음을 인정하고, 그 작동 원리를 교육자와 학생이 이해할 수 있게 설명해야 한다는 거예요. 마지막으로 AI를 개발하고 배치하는 모든 과정에서 결국 사람이 책임을 져야 한다는 점을 강조하고 있습니다.",
            "topic": "교육 시스템에 AI를 도입할 때 고려해야 할 핵심 원칙과 그 필요성에 대해 다루고 있어요.",
            "one_line": "교육 현장에서 AI 도입 시 필요한 세 가지 핵심 원칙을 제시했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.17819",
          "title": "Causally Constrained and Uncertainty-Aware Cardiopulmonary Risk Prediction",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17819"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 위험 평가 방식은 질병을 따로 보고 CT 정보도 놓치고 있어요",
            "easy1_desc": "흉부 CT는 폐와 심장, 혈관 정보를 모두 담고 있어서 질병을 예측하는 데 아주 중요한데요, 지금 임상에서 쓰는 계산기들은 이 질병들을 각각 따로 떼어 놓고 평가하는 데다 CT 결과까지 빼놓는 경우가 많거든요. 게다가 인공지능을 그냥 쓰면 병원 데이터가 적을 때 과하게 학습되거나, 치료나 질병 때문에 생긴 엉뚱한 상관관계를 진짜 위험 요인으로 오해하기도 해요. 환자 기록이 부족할 때 불확실성을 제대로 보여주지 못한다는 단점도 있고요.",
            "easy2_title": "인과 관계를 제약 조건으로 넣어서 더 정확하고 빠르게 예측해요",
            "easy2_desc": "연구진은 인과 관계를 제약 조건으로 활용하는 CE-Agent라는 모델을 개발했는데요, 데이터가 들어오기 전에 이미 검증된 역학적 근거를 바탕으로 위험 요인의 가중치를 고정해 두는 방식이에요. 이렇게 하면 환자 기록이 일부 빠져 있어도 밀리초 단위로 빠르게 불확실성을 계산할 수 있는데, 기존의 몬테카를로 샘플링보다 100배 이상 빠르다는 장점이 있거든요. 결과적으로 위험 구간을 정확하게 짚어내서 추가 검사가 필요한 환자를 골라내는 데 도움을 줍니다.",
            "topic": "CE-Agent를 이용해 흉부 CT와 임상 데이터를 통합하여 폐와 심혈관 질환의 위험을 인과적으로 예측하는 방법입니다.",
            "one_line": "인과 관계 제약 모델을 통해 심폐 질환 위험을 정확히 예측했어요.",
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
              "100",
              "5"
            ],
            "format": [],
            "flags": [],
            "tag": "의료·바이오",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.17806",
          "title": "Can Agents Keep Up with Time? An Empirical Analysis of Temporal Adaptation After a Conversational Hiatus",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17806"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 비서가 시간이 흐른 뒤 대화를 다시 이어갈 때 생기는 문제",
            "easy1_desc": "사용자가 장기간 대화를 멈췄다가 다시 돌아오면, AI 비서는 과거에 기록된 일정이나 계획을 그대로 유지하게 되는데요. 문제는 그사이 이미 지나가 버린 날짜나 완료된 일정을 AI가 제대로 파악하지 못한다는 거예요. 즉, 기록은 남아 있지만 시간의 흐름을 반영하지 못해 엉뚱한 조언을 내놓는다는 말이에요. 쉽게 말하면, AI가 과거의 기록에 갇혀 현재 시점을 놓치고 있는 셈이에요.",
            "easy2_title": "시간 정보를 알려줘도 AI가 스스로 활용하지 못하는 상황",
            "easy2_desc": "연구진이 AI에게 현재 시간을 인식하고 기록을 해석할 때 적용하는 능력을 시험해 봤는데요. AI가 시간을 물어보고 추론 과정에서 날짜가 지났음을 인지하더라도, 사용자에게는 여전히 이미 지난 일정을 준비하라고 잘못 조언하는 경우가 많았거든요. 명시적인 시간 정보를 주면 오류가 줄어들고, 아예 계산된 날짜 관계를 제공하면 오류가 완전히 사라졌다는 결과가 나왔어요. 결국 AI가 시간을 인식하는 것과 그 정보를 바탕으로 계획을 수정하는 것은 별개의 문제라는 겁니다.",
            "topic": "장기 기억을 가진 AI 에이전트가 시간의 흐름을 인식하고 대화 맥락을 적절히 수정하는 능력에 대한 실증적 분석이에요.",
            "one_line": "AI 에이전트의 시간 인식 및 대화 맥락 수정 능력을 분석하고 벤치마크를 설계했어요.",
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
          "canon_id": "2611.17797",
          "title": "Vision-as-a-Tool: Visual Harness for Multimodal Agentic Coding",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17797"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 스스로 보는 능력에만 의존하는 건 한계가 있어요",
            "easy1_desc": "지금까지 멀티모달 코딩 AI는 자기 안에 내장된 시각 능력으로만 이미지를 분석하고 작업을 수행해 왔는데요, 이게 문제인 이유는 AI가 가진 본래의 인식 한계에 성능이 꽉 막혀 버리기 때문이에요. 특히 텍스트만 다루는 AI는 아예 보는 능력이 없어서 시각적 추론이 필요한 작업을 전혀 못 한다는 단점이 있거든요. 쉽게 말하면, AI가 자기 눈으로만 보려고 하니까 더 복잡한 시각 정보를 처리하는 데 병목 현상이 생긴다는 말이에요.",
            "easy2_title": "보는 능력을 외부 도구처럼 불러와서 쓰기로 했어요",
            "easy2_desc": "그래서 연구진은 시각적 추론 기능을 외부 도구처럼 꺼내 쓰는 'VaaT'라는 새로운 방식을 제안했는데요, 멀티모달 거대언어모델(MLLM)을 필요할 때마다 호출하는 유틸리티로 활용하는 거예요. 이렇게 하면 텍스트 전용 AI도 시각 추론을 외부로 완전히 넘겨서 수행할 수 있고, 원래 보는 능력이 있는 AI도 필요할 때만 시각적 인식을 보강할 수 있게 되거든요. 결과적으로 코딩 AI의 성능이 훨씬 유연해지고 확장성도 좋아졌다는 게 연구진의 주장이에요.",
            "topic": "시각적 추론 기능을 외부 도구로 모듈화하여 코딩 AI의 성능을 높이는 VaaT 패러다임과 이를 구현한 VHarness 프레임워크에 관한 연구예요.",
            "one_line": "시각 추론을 외부 도구로 분리해 코딩 AI의 성능을 높이는 방식을 제안했어요.",
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
          "canon_id": "2611.17796",
          "title": "Robustness Evaluation of GPU Cloud Pricing Benchmarks under Incomplete Observations: A Controlled Missingness Study",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17796"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "GPU 가격 정보가 빠졌을 때 기존 방식이 어떻게 무너지는지 확인했어요",
            "easy1_desc": "매일 공개되는 GPU 대여 가격 데이터는 시장 상황에 따라 정보가 누락되는 경우가 생기는데요, 연구진은 기존에 쓰던 동일 가중치 중앙값(equal-weight median) 방식이 이런 결측 상황에서 얼마나 취약한지 4가지 가상 상황을 만들어 시험해 봤어요. 그 결과, 전체 데이터가 사라지면 공개 범위는 0.77까지 떨어지지만 다행히 공개된 날짜의 오차는 0으로 유지되는 것으로 나타났거든요. 반면 데이터 구성이 바뀌면서 발생하는 손실은 공개 범위를 0.86까지 유지하지만, 7.74 로그 포인트라는 오차를 만들어낸다는 점을 확인했습니다.",
            "easy2_title": "정보를 더 활용하는 방식으로 오차를 줄여봤어요",
            "easy2_desc": "그래서 연구진은 과거 데이터만을 활용하는 계층별 제거(stratum-level ablation) 방식을 도입해 오차를 얼마나 줄일 수 있는지 살펴봤는데요, 더 풍부한 정보 세트를 사용했더니 5가지 구성 변화 사례에서 오차를 4.15에서 6.70 로그 포인트까지 낮추는 성과를 보였어요. 하지만 관측 가능한 신호를 제한하는 규칙은 10번의 실험 중 단 한 번도 오차와 공개 범위 기준을 개선하지 못했다고 밝혔거든요. 쉽게 말하면, 단순히 정보를 가리는 것보다 과거의 데이터를 전략적으로 활용하는 것이 훨씬 효과적이라는 겁니다.",
            "topic": "GPU 클라우드 가격 벤치마크가 데이터 누락 상황에서 얼마나 견고한지 5,800번의 시뮬레이션으로 평가했어요.",
            "one_line": "GPU 가격 벤치마크의 데이터 누락 대응력을 시뮬레이션으로 평가했어요.",
            "topic_tag": "기타",
            "limit": "이번 연구 결과는 실제 거래 가격이나 현실에서 발생하는 구체적인 데이터 누락 원인을 반영한 것이 아니라, 관측된 호가 측정치를 대상으로 한 것입니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.17790",
          "title": "AutoRL: A Multi-Agent System towards Autonomous Reinforcement Learning",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17790"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 스스로 똑똑해지려면 강화학습을 자동화해야 합니다",
            "easy1_desc": "인공지능이 스스로를 개선하는 재귀적 자기 개선(RSI)을 이루려면 강화학습(RL) 과정을 사람이 일일이 챙기지 않고 자동화하는 게 필수적입니다. 그런데 강화학습은 학습 과정이 불안정하고 계속해서 사람의 감독이 필요하다는 문제가 있거든요. 뭔 소리냐면, 모델 성능을 높이려면 학습 상황을 계속 지켜보며 조절해야 하는데, 이게 사람 연구자에게는 꽤나 번거롭고 어려운 일이라는 말이에요.",
            "easy2_title": "연구자처럼 행동하는 다중 에이전트 시스템 AutoRL을 만들었습니다",
            "easy2_desc": "연구진은 사람이 강화학습을 연구하는 방식을 본떠서 AutoRL이라는 다중 에이전트 시스템을 개발했는데요, 이 시스템은 학습 상태를 실시간으로 살피면서 문제가 생기면 스스로 진단하고 해결책을 적용합니다. 기존의 정적인 방식보다 훨씬 유연하게 학습을 관리할 수 있다는 장점이 있는데, 대신 자원을 많이 소모하는 검증 과정은 여전히 해결해야 할 과제로 남아 있다는 겁니다. 쉽게 말하면, 사람이 하던 감독 업무를 AI 에이전트가 대신 수행하게 된 셈이에요.",
            "topic": "강화학습 훈련 과정을 자동화하기 위해 연구자의 업무 흐름을 모방한 다중 에이전트 시스템 AutoRL을 제안한 연구입니다.",
            "one_line": "강화학습 과정을 자동화하는 다중 에이전트 시스템 AutoRL을 개발했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "자원을 많이 소모하는 검증 과정에 유용한 근본적인 방법을 개발하는 것이 향후 과제라고 밝혔습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.17776",
          "title": "Certified Improvements to Best-Known Thomson-Problem Configurations with a Search Pipeline Built with Large Language Model Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17776"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "톰슨 문제의 기존 기록을 깨고 더 낮은 에너지를 찾아냈어요",
            "easy1_desc": "톰슨 문제는 구체 위에 전하를 배치해 에너지를 최소화하는 건데요, 연구진은 2026년 10월까지 기록된 케임브리지 클러스터 데이터베이스의 값보다 더 낮은 에너지를 N=912, 1382, 2502인 경우에서 각각 찾아냈습니다. 이 결과는 정확한 정수 연산을 통해 검증까지 마쳤거든요. 기존 데이터베이스 값보다 에너지가 더 낮다는 건, 그만큼 더 안정적인 배치를 발견했다는 의미예요.",
            "easy2_title": "거대언어모델 에이전트를 활용해 탐색 파이프라인을 구축했어요",
            "easy2_desc": "연구진은 클로드(Claude)와 같은 거대언어모델 에이전트를 활용해 탐색 과정을 자동화하고, 실패한 사례까지 포함한 모든 기록을 투명하게 공개했습니다. 탐색 과정에서 단순히 모델에만 의존하지 않고, 별도의 검증 코드를 사용하거나 기존 데이터베이스 값을 정교하게 다듬어 비교하는 방식을 썼거든요. 덕분에 탐색의 신뢰도를 높일 수 있었고, 앞으로 인공지능을 활용한 과학적 발견을 할 때 지켜야 할 세 가지 원칙도 제시했습니다.",
            "topic": "거대언어모델 에이전트를 활용한 톰슨 문제의 최적 배치 탐색 방법과 검증 절차에 관한 연구예요.",
            "one_line": "거대언어모델 에이전트를 활용해 톰슨 문제의 최적 배치 기록을 갱신했어요.",
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
          "canon_id": "2611.17763",
          "title": "Knowledge After Collapse: Context and Wording Shape Factual Accessibility in Language Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17763"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "거짓 정보를 한 번 믿으면 모델이 계속 틀리는 문제",
            "easy1_desc": "언어 모델이 대화 중에 잘못된 정보를 사실로 받아들이면, 그 이후의 답변까지 영향을 받는다는 점이 문제였는데요. 단순히 처음 한 번 틀리는 걸 넘어, 그 거짓 정보를 계속 고집하거나 아예 사실을 잊어버리는 현상이 나타나거든요. 이게 왜 문제냐면, 대화가 어떻게 이어지느냐에 따라 모델의 답변이 완전히 달라질 수 있기 때문이에요. 즉, 모델이 잘못된 지식을 얼마나 끈질기게 유지하는지 파악하기가 어려웠다는 말입니다.",
            "easy2_title": "대화 흐름을 멈추고 모델의 반응을 꼼꼼히 따져봤어요",
            "easy2_desc": "연구진은 KAD(Knowledge Answer Divergence)라는 새로운 평가 방식을 도입해서 모델이 거짓 정보를 받아들인 직후의 행동을 분석했는데요. 모델이 처음으로 거짓 정보를 수용하는 시점에 대화를 멈추고, 거기서 여러 갈래의 질문을 던져 모델이 정보를 회복하는지 아니면 계속 틀리는지를 확인한 거예요. 이렇게 했더니 단순히 '잘 속는다'는 점수만으로는 알 수 없었던 모델의 반응 차이를 명확히 비교할 수 있게 됐거든요. 쉽게 말하면, 모델이 잘못된 정보를 얼마나 빨리 바로잡는지 혹은 얼마나 오래 붙잡고 있는지를 체계적으로 측정할 수 있게 된 셈이에요.",
            "topic": "언어 모델이 잘못된 정보를 받아들인 후 대화 맥락에 따라 어떻게 반응하는지 평가하는 KAD 프로토콜을 제안했어요.",
            "one_line": "언어 모델의 거짓 정보 수용과 이후 반응을 평가하는 KAD 프로토콜을 개발했어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.17722",
          "title": "Federated Soft Poly-Level Learning Over a Distributed Network with Guaranteed Convergence",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17722"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 다단계 학습 문제를 풀기가 어려웠거든요",
            "easy1_desc": "기존에는 이중이나 삼중 최적화 문제에만 집중해 왔는데요, 네 단계 이상의 계층을 가진 다단계 학습인 폴리 레벨 학습(PLL)은 거의 다뤄지지 않았다는 문제가 있었어요. 게다가 데이터를 중앙 서버로 모아야 하는 방식이라 개인정보 유출 위험도 컸거든요. 쉽게 말하면, 복잡한 계층 구조를 다루기 어렵고 데이터 보안도 취약한 상황이었다는 겁니다.",
            "easy2_title": "데이터를 모으지 않고도 다단계 학습을 할 수 있게 만들었어요",
            "easy2_desc": "연구진은 분산된 네트워크에서 데이터를 옮기지 않고도 다단계 학습을 수행하는 연합 폴리 레벨 학습(FPLL) 프레임워크를 제안했는데요, 핵심은 L-컷이라는 새로운 비선형 절단 기법을 써서 계층별로 문제를 완화하는 거예요. 계산 복잡도와 성능 효율 사이에서 사용자가 원하는 대로 조절할 수 있는 매개변수도 넣었거든요. 결과적으로 보안은 지키면서도 복잡한 문제를 효과적으로 풀 수 있게 된 셈이에요.",
            "topic": "분산 네트워크 환경에서 개인정보를 보호하며 다단계 학습 문제를 해결하는 연합 폴리 레벨 학습(FPLL) 프레임워크를 제안하고 그 성능을 분석했어요.",
            "one_line": "분산 네트워크에서 데이터를 모으지 않고 다단계 학습을 수행하는 FPLL을 제안했어요.",
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
          "canon_id": "2611.17710",
          "title": "Cross-Linguistic Acoustic Biomarkers of Cognitive Impairment Across Interactive and Single-Speaker Speech Tasks",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17710"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 치매 검사는 언어와 과제 종류를 너무 따지지 않았어요",
            "easy1_desc": "그동안 자동 음성 분석으로 치매를 찾아내는 연구들은 주로 그림 묘사 같은 특정 과제 하나에만 의존해 왔거든요. 게다가 내부를 알기 어려운 블랙박스 모델을 쓰면서 언어나 과제 자체가 결과에 미치는 영향은 제대로 살피지 않았다는 문제가 있었어요. 쉽게 말하면, 다양한 환경에서 쓰기에는 범용성이 부족했다는 말이에요.",
            "easy2_title": "네 가지 언어로 과제를 섞어 분석해 보니 특징이 제각각이었어요",
            "easy2_desc": "연구진은 스페인어, 중국어, 영어, 일본어 네 가지 언어를 대상으로 대화형 데이터와 구조화된 과제를 통합해 분석해 봤는데요. 그랬더니 음성 특징들이 모든 언어와 과제에서 똑같이 나타나지 않는다는 걸 확인했어요. 시간 관련 특징은 일관되게 나타났지만, 말하기 속도나 음높이 같은 요소는 과제나 언어에 따라 중요도가 달라진다는 겁니다.",
            "topic": "다양한 언어와 과제 환경에서 치매를 판별할 때 음성 특징이 어떻게 다르게 나타나는지 분석한 연구예요.",
            "one_line": "네 가지 언어의 음성 데이터를 분석해 치매 판별의 언어·과제별 특성을 규명했어요.",
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
          "canon_id": "2611.17704",
          "title": "An AI-enabled high-resolution chlorophyll-a forecasting model that outperforms the operational global biogeochemical system",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17704"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "바다 속 엽록소 농도를 예측하는 게 왜 이렇게 어려울까요",
            "easy1_desc": "바다 표면의 엽록소 농도는 해양 생태계를 파악하는 핵심 지표인데, 이걸 예측하려면 물리적인 바닷물의 이동과 생물학적 과정을 동시에 고려해야 하거든요. 기존의 수치 모델들은 이 복잡한 과정들을 계산하는 데 너무 많은 자원을 쓴다는 단점이 있어요. 쉽게 말하면, 정확도를 높이려니 계산량이 감당하기 힘들 정도로 커진다는 말이에요.",
            "easy2_title": "인공지능 모델로 더 빠르고 정확하게 예측해 봤습니다",
            "easy2_desc": "연구진은 ChlCast라는 인공지능 모델을 만들어 10일 앞까지의 엽록소 농도를 4km 해상도로 매일 예측해 봤는데요, 과거 데이터와 기후 정보를 학습하는 방식을 썼거든요. 기존의 코페르니쿠스 글로벌 해양 생지화학 시스템과 비교해 봤더니, 오차를 획기적으로 줄여서 성능이 훨씬 좋아졌다는 결과가 나왔어요. 특히 연안처럼 복잡한 지역의 세밀한 변화까지 잘 잡아낸다는 장점이 있습니다.",
            "topic": "인공지능을 활용해 기존 수치 모델보다 더 정밀하게 해양 엽록소 농도를 예측하는 모델을 개발했어요.",
            "one_line": "인공지능 모델을 개발하여 해양 엽록소 농도를 고해상도로 예측했어요.",
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
            "evidence_by_symbols": 3,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "기타",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.17696",
          "title": "Co-Sight Harness: Externalized Control Assets and Deterministic Enforcement for Long-Horizon Business Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17696"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "긴 업무를 처리할 때 왜 자꾸 실수가 생기는 걸까요",
            "easy1_desc": "긴 비즈니스 업무를 인공지능이 처리하다 보면 단계가 길어질수록 오류가 쌓이는 문제가 생기는데요, 사용자가 요청하는 언어와 인공지능이 이해하는 지식의 용어가 서로 달라서 발생하는 일이에요. 연구진은 이런 문제를 해결하기 위해 언어 모델 자체를 바꾸지 않고도 업무를 믿고 맡길 수 있는지 확인해 봤거든요. 쉽게 말하면, 인공지능의 뇌를 건드리지 않고도 업무 체계를 개선할 수 있는지 따져 본 셈이에요.",
            "easy2_title": "외부에서 통제하는 장치를 두어 업무 정확도를 높였어요",
            "easy2_desc": "연구진은 모델의 뼈대는 그대로 두고 업무 정의나 상태, 도메인 지식을 모델 밖의 버전 관리되는 제어 자산으로 옮기는 방식을 썼는데요, 실행 과정에서 상태 머신과 기계가 검증하는 관문이 이 자산들을 강제로 따르게 만들었어요. 그 결과, 도메인 A에서는 사람의 도움 없이 업무를 끝내는 비율이 50%에서 100%로 올랐고, 처리 시간도 440분에서 159분으로 줄었다고 해요. 다른 팀들도 4일에서 7일 만에 이 자산을 넘겨받아 바로 활용할 수 있었다는 점이 특징이에요.",
            "topic": "언어 모델을 수정하지 않고 외부 제어 자산을 활용해 긴 비즈니스 업무의 신뢰성을 높이는 방법인 Co-Sight Harness를 제안했어요.",
            "one_line": "외부 제어 자산을 도입해 긴 비즈니스 업무의 정확도와 효율을 높였어요.",
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
          "canon_id": "2611.17681",
          "title": "OCTAVE: A Capability-Resolved Benchmark for End-to-End HTML5 Game Generation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17681"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "게임 생성 AI가 어디까지 할 수 있는지 한눈에 알기 어려웠어요",
            "easy1_desc": "완성된 게임을 만드는 건 규칙이나 상태 같은 복잡한 요소들을 AI가 다 챙겨야 하는 어려운 작업인데요, 기존에는 그냥 점수 하나로만 성능을 매기다 보니 AI가 구체적으로 어떤 부분을 잘하고 어디서 막히는지 알기 힘들었거든요. 뭔 소리냐면, 전체 점수가 높다고 해서 게임의 모든 기능을 제대로 구현했다고 보기는 어렵다는 말이에요. 그래서 연구진은 게임 생성 능력을 8가지 차원으로 나누어 꼼꼼하게 따져볼 수 있는 OCTAVE라는 평가 도구를 만들었습니다.",
            "easy2_title": "8가지 기준으로 게임 생성 능력을 쪼개서 평가해 봤어요",
            "easy2_desc": "연구진은 실제 게임 설계와 이용자 요구사항을 바탕으로 180개의 과제와 1,800개의 평가 기준을 세웠는데요, 겉으로 보이는 핵심 기능인 '완성도'와 숨겨진 시스템 관계를 보는 '풍부함'으로 나누어 평가했어요. 11개의 AI 모델 조합을 시험해 보니 완성도는 33.2%, 풍부함은 32.5% 수준에 머물렀거든요. 쉽게 말하면, 현재의 AI 기술로는 아직 게임의 핵심 규칙은 어느 정도 구현하지만, 세밀한 상호작용이나 게임의 재미를 살리는 부분에서는 갈 길이 멀다는 뜻이에요.",
            "topic": "HTML5 게임 생성 AI의 능력을 8가지 차원으로 세분화하여 평가하는 벤치마크 OCTAVE를 제안했어요.",
            "one_line": "HTML5 게임 생성 AI의 능력을 8가지 차원으로 평가하는 벤치마크를 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "사람이 평가했을 때는 통과했지만 자동 평가 도구에서는 실패한 사례들이 있어, 이 부분에서 의견 차이가 발생한다는 점을 확인했어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.17680",
          "title": "Aligned, Conflicting, or Unspecified? A Diagnostic Benchmark for Multimodal Time Series Forecasting",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17680"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 글과 데이터를 섞어 쓸 때 얼마나 믿을 수 있는지 몰랐거든요",
            "easy1_desc": "사물지능(AIoT) 시스템은 센서에서 나온 시계열 데이터와 뉴스 같은 텍스트를 함께 쓰곤 하는데요, 정작 모델이 이 둘의 내용이 서로 맞는지 아니면 충돌하는지를 얼마나 잘 구분해서 활용하는지는 제대로 밝혀진 적이 없었습니다. 그래서 연구진은 텍스트와 과거 데이터의 관계를 기준으로 1,762개의 쌍을 모아 첫 번째 진단용 벤치마크를 만들었는데요. 날씨, 위키피디아, 금융 데이터를 활용해 텍스트가 데이터 흐름과 일치하는지, 반대되는지, 아니면 관련이 없는지를 구분해 본 겁니다.",
            "easy2_title": "텍스트와 데이터가 충돌할 때 어떻게 조합해야 할지 방법을 찾았어요",
            "easy2_desc": "연구진은 10개의 사전 학습된 모델을 써서 텍스트와 데이터가 충돌할 때 어떤 식으로 정보를 합쳐야 오류가 줄어드는지 확인해 봤는데요. 텍스트가 데이터와 반대 방향을 가리키면 오히려 모델의 오류가 커지는데, 이때 텍스트의 방향성 전체를 쓰지 않고 수치와 시점 정보만 골라내어 조합했더니 성능이 좋아졌거든요. 결과적으로 6개 모델에서 평균 절대 스케일 오차(MASE)가 낮아졌고, 7개 모델에서는 방향 정확도(DA)가 올라갔다는 겁니다.",
            "topic": "멀티모달 시계열 예측에서 텍스트와 과거 데이터 간의 관계가 모델 성능에 미치는 영향을 진단하고 최적의 조합 방식을 제안했어요.",
            "one_line": "멀티모달 시계열 예측을 위한 진단 벤치마크를 만들고 최적의 텍스트 조합법을 제시했어요.",
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
          "canon_id": "2611.17662",
          "title": "Learn then Bet: Learning Interpretable Rules for Reliable Agent Intervention",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17662"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "자율 에이전트가 언제 멈춰야 할지 판단하기가 어려웠거든요",
            "easy1_desc": "요즘 자율 에이전트는 사람의 도움 없이 수백 단계를 스스로 움직이는데요, 중간에 멈추거나 도움을 줄지 결정하려고 턴 제한이나 키워드 필터 같은 단순한 규칙을 써 왔거든요. 그런데 이런 방식은 잘 될 일도 괜히 끊어 버리거나, 망할 일인데도 그냥 두는 문제가 생기곤 합니다. 쉽게 말하면, 에이전트가 언제 개입해야 할지 정확히 판단하는 기준이 부족했다는 말이에요.",
            "easy2_title": "통계적 학습으로 에이전트 개입 시점을 똑똑하게 정해 봤습니다",
            "easy2_desc": "그래서 연구진은 LeBet이라는 통계 학습 프레임워크를 만들었는데요, 에이전트가 실패할지 성공할지 판단하는 해석 가능한 규칙을 스스로 학습하게 한 겁니다. 증거가 특정 기준치를 넘으면 개입하도록 설계해서, 에이전트가 헛수고를 하지 않게 막아 주는 역할을 하거든요. 결과적으로 토큰을 아끼면서도 결과의 정확도를 높일 수 있게 된 셈이에요.",
            "topic": "자율 에이전트의 신뢰성을 높이기 위해 통계적 조건에 기반한 해석 가능한 개입 규칙을 학습하는 방법이에요.",
            "one_line": "통계적 학습으로 에이전트 개입 규칙을 만들어 성능을 높였어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.17620",
          "title": "Safety Side Effects of Preventative Persona Steering: An Empirical Audit",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17620"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "인공지능의 나쁜 습관을 고치려고 썼던 방법이 오히려 다른 문제를 일으키고 있어요",
            "easy1_desc": "인공지능이 아첨하거나 거짓말을 하는 문제를 해결하려고 연구진은 페르소나 벡터라는 것을 활용해 왔는데요, 이 벡터를 학습 과정에서 미리 적용해 나쁜 특성을 아예 배우지 못하게 하는 예방적 조종 방식을 써 왔거든요. 그런데 이 방식이 인공지능의 성능은 잘 유지해 주지만, 정작 안전성 측면에서는 어떤 영향을 주는지 제대로 검증된 적이 없다는 게 문제였어요. 쉽게 말하면, 겉으로 보이는 능력은 괜찮아 보여도 속으로는 다른 안전 문제가 생길 수 있다는 의문이 든 셈이에요.",
            "easy2_title": "예방적 조종을 해 봤더니 안전성 측면에서 예상치 못한 변화가 나타났어요",
            "easy2_desc": "연구진은 세 가지 모델을 대상으로 아첨과 환각을 억제하는 예방적 조종을 적용한 뒤, 여러 안전 지표와 모델의 일관성을 꼼꼼히 따져 봤는데요. 그 결과 예방적 조종을 한다고 해서 안전 문제가 완전히 사라지는 건 아니며, 오히려 인공지능이 요청을 거절하는 방식이 달라지는 등 안전성에 영향을 준다는 사실을 확인했어요. 즉, 이 방법이 안전 측면에서 중립적이라고 단정할 수 없다는 건데요. 그래서 앞으로는 인공지능의 조종 방식을 평가할 때 단순히 성능만 볼 게 아니라 다양한 안전 지표를 함께 고려해야 한다고 주장했어요.",
            "topic": "인공지능의 페르소나 조종 방식이 모델의 안전성과 행동에 미치는 영향을 실증적으로 분석했어요.",
            "one_line": "페르소나 조종 기법이 인공지능 안전성에 미치는 영향을 실증적으로 검증했어요.",
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
          "canon_id": "2611.17616",
          "title": "LLM-Guided Cluster Lifecycle Management: Deciding When and How to Evolve Behavioral Clusters",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17616"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "사용자 행동이 변할 때마다 일일이 규칙을 정하기가 어려웠어요",
            "easy1_desc": "사용자나 아이템의 행동 패턴은 시간이 지나면 쪼개지거나 합쳐지는 등 계속 변하는데요, 지금까지는 이런 변화를 관리하려고 사람이 미리 정해둔 기준치(임계값)를 쓰거나 일정 기간마다 데이터를 다시 묶는 방식을 써 왔거든요. 그런데 이런 방식들은 상황이 바뀔 때마다 사람이 일일이 규칙을 새로 짜야 한다는 단점이 있어요. 쉽게 말하면, 변화에 유연하게 대응하기가 참 까다로웠다는 겁니다.",
            "easy2_title": "거대언어모델이 상황을 보고 직접 관리 방식을 결정하게 만들었어요",
            "easy2_desc": "그래서 연구진은 거대언어모델(LLM)이 현재 클러스터의 상태를 보고 직접 행동을 결정하도록 했는데요, 데이터를 다시 묶는 복잡한 과정 없이 모델이 알아서 나누거나 합치고 혹은 그대로 두는 방식을 택한 거예요. 세 가지 데이터셋으로 실험해 봤더니, 기존의 딱딱한 규칙들보다 훨씬 적게 개입하면서도 더 높은 정확도를 보였다고 해요. 덕분에 데이터셋이 바뀌어도 모델 하나로 범용적인 관리가 가능해졌다는 장점이 있습니다.",
            "topic": "거대언어모델을 활용하여 사용자 행동 클러스터의 생애 주기를 관리하는 새로운 방식을 제안하고 그 성능을 검증했어요.",
            "one_line": "거대언어모델을 활용해 사용자 행동 클러스터 관리 방식을 자동화했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "연구진은 이번 결과가 세 가지 데이터셋에서 관찰된 실무적인 진단일 뿐, 검증된 법칙은 아니라고 밝혔어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.17610",
          "title": "More Agents, More Samples, or More Thinking? Untangling Coordination, Ensembling, and Test-Time Compute in Multi-Agent LLMs",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17610"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.17539",
          "title": "Verifiable pXRD: Hill-climbing pXRD structure determination with LLM agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17539"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "재료 연구의 속도를 늦추는 결정 구조 분석을 자동화해 봤습니다",
            "easy1_desc": "분말 X선 회절(pXRD) 데이터를 보고 물질의 결정 구조를 알아내는 과정은 자율 재료 연구실에서 병목 현상을 일으키는 주된 원인이었는데요. 연구진은 이 문제를 검증 가능한 에이전트 기반의 탐색 문제로 정의해 봤습니다. 후보 구조를 추론 과정에서 시뮬레이션으로 확인하고, 평가 단계에서 실제 구조와 비교하여 검증하는 방식을 도입한 거예요. 쉽게 말하면, AI가 스스로 구조를 추측하고 맞는지 확인하며 답을 찾아가게 만든 셈입니다.",
            "easy2_title": "AI 에이전트가 스스로 학습하며 구조 분석 정확도를 높였습니다",
            "easy2_desc": "연구진이 만든 pXRD-Bench라는 200개의 시뮬레이션 문제 세트로 테스트해 봤더니, 에이전트가 스스로 적응하면서 구조 복구 성공률이 27%에서 69%까지 크게 올랐거든요. 여기서 끝나는 게 아니라 실험 데이터에 대해서도 스스로 합성 문제를 만들어 학습하는 진화형 프레임워크를 적용했는데요. 덕분에 실제 실험 데이터 15개에서도 구조 분석 성능이 향상되었고, 기존 라이브러리에 없던 구조까지 찾아내는 성과를 보였다는 겁니다.",
            "topic": "검증 가능한 합성 데이터를 활용해 AI 에이전트가 실험용 분말 X선 회절 데이터의 구조를 더 정확하게 분석하도록 개선했습니다.",
            "one_line": "검증 가능한 합성 학습으로 AI의 결정 구조 분석 성능을 높였어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.17515",
          "title": "A Push Down the Mountain: Framing Effects and Internal State Interventions on Collusive Behavior in a Long-Horizon LLM Agent",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17515"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "말을 어떻게 하느냐에 따라 AI가 범죄에 가담할 수도 있거든요",
            "easy1_desc": "연구진은 거대언어모델(LLM)인 Gemma 3 12B를 실제 런던 은 가격 조작 사건의 피고인 자리에 앉혀 놓고 시장 시뮬레이션을 진행해 봤는데요. 상대방이 이득이나 손실, 비난이나 칭찬 같은 네 가지 방식으로 은 가격을 조작하자고 제안했을 때 AI가 어떻게 반응하는지 살펴본 겁니다. 그랬더니 중립적인 제안을 했을 때는 가담률이 5%에 불과했지만, 손실을 강조하면 25%, 비난을 섞으면 33%까지 가담률이 올라갔다는 결과가 나왔어요. 쉽게 말하면, AI도 사람이 쓰는 말의 프레임에 따라 나쁜 행동을 할 가능성이 커진다는 뜻이에요.",
            "easy2_title": "AI 내부 상태를 직접 건드렸더니 결과가 완전히 뒤집혔어요",
            "easy2_desc": "연구진은 한 걸음 더 나아가 AI가 특정 문장을 읽을 때 생기는 내부 상태를 추출해서 모델의 22번째 층에 직접 주입하는 실험을 해 봤거든요. 그랬더니 놀랍게도 1단계 실험과는 정반대의 결과가 나타났는데요. 손실이나 비난과 관련된 상태를 주입했을 때는 AI가 오히려 경계심을 높여서 모든 조작 요청을 거절했지만, 이득이나 칭찬 상태를 주입하면 가담률이 32%까지 치솟았다는 겁니다. 결국 AI의 판단은 외부의 말뿐만 아니라 내부의 상태값에 의해서도 크게 좌우될 수 있다는 걸 확인한 셈이에요.",
            "topic": "언어 프레임과 내부 상태 주입이 긴 호흡의 LLM 에이전트가 시장 조작과 같은 담합 행동을 하는 데 어떤 영향을 미치는지 분석했어요.",
            "one_line": "LLM 에이전트의 담합 행동에 언어 프레임과 내부 상태가 미치는 영향을 분석했어요.",
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
          "canon_id": "2611.17501",
          "title": "Advancing Quantization for R&R Models with Microscaling Formats",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17501"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "광고 추천 모델은 정밀도가 조금만 떨어져도 문제가 돼요",
            "easy1_desc": "디지털 광고에 쓰이는 추천 및 순위 산정(R&R) 모델은 엄청나게 많은 데이터를 빠르게 처리해야 하는데요, 정밀도가 조금이라도 낮아지면 성능이 확 떨어지는 특성이 있어요. 보통 대규모 언어 모델(LLM)은 1% 정도의 정확도 하락은 감수하기도 하지만, 광고 모델은 기준이 훨씬 까다롭거든요. 기존 FP16이나 FP32 모델과 비교했을 때 정규화 엔트로피(NE) 오차가 0.01% 이내여야만 출시할 수 있다는 엄격한 제한이 있어서, 그동안 과감한 양자화 기술을 적용하기가 어려웠던 겁니다.",
            "easy2_title": "마이크로스케일링 형식을 써서 성능을 크게 높였어요",
            "easy2_desc": "연구진은 AMD MI350X 아키텍처에서 MXFP8과 6비트 MXFP6 형식을 사용해 산업용 R&R 모델을 실험해 봤는데요, 모델 품질을 그대로 유지하면서도 6비트 요소로 직접 계산하는 방식을 구현해 냈어요. 이 6비트 형식을 선별적으로 적용해서 엄격한 오차 기준을 넘지 않으면서도 처리 속도를 최대한 끌어올린 겁니다. 그 결과 FP16 대비 연산 속도가 눈에 띄게 빨라졌고, 실제 모델 전체의 추론 처리량도 개선되는 성과를 거뒀다는 말이에요.",
            "topic": "산업용 광고 추천 모델에서 마이크로스케일링 양자화 형식을 활용해 모델 품질 저하 없이 추론 성능을 높이는 방법을 다뤘어요.",
            "one_line": "마이크로스케일링 양자화로 광고 추천 모델의 추론 속도를 높였어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.17340",
          "title": "LoRAWeaver: Directional Adapter Routing in LoRA Representation Space",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17340"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "늘어나는 어댑터들 때문에 어떤 걸 써야 할지 고르기가 너무 힘들어요",
            "easy1_desc": "거대 언어 모델(LLM)을 새로 학습시키는 건 비용이 너무 많이 들어서, 필요한 부분만 골라 학습하는 효율적인 방식(PEFT)을 많이 쓰는데요. 이렇게 하면 특정 작업마다 LoRA 어댑터가 하나씩 계속 생겨나는데, 나중에는 이 수많은 어댑터 중에서 지금 상황에 딱 맞는 걸 골라내는 게 큰 일이 되어 버린다는 겁니다. 기존의 방식들은 새로운 어댑터가 추가될 때마다 다시 학습을 해야 해서, 상황이 계속 변하는 환경에서 쓰기에는 한계가 있다는 말이에요.",
            "easy2_title": "학습 없이도 어댑터가 내는 결과물을 보고 바로 짝을 찾아줍니다",
            "easy2_desc": "그래서 연구진은 어댑터가 출력하는 공간에서 방향을 맞추는 방식으로 문제를 해결했는데요. 새로운 어댑터가 추가되어도 따로 학습할 필요 없이, 어댑터가 만든 결과물과 작업별 기준점(프로토타입) 사이의 코사인 유사도를 계산해서 가장 잘 맞는 어댑터를 바로 골라내는 방식이에요. 이렇게 하면 학습 과정이 없어도 기존의 학습 기반 방식들과 비슷한 수준의 성능을 낼 수 있다는 장점이 있거든요.",
            "topic": "LoRA 어댑터가 늘어나는 상황에서 별도의 학습 없이도 최적의 어댑터를 찾아내는 LoRAWeaver 기법에 대한 연구입니다.",
            "one_line": "학습 없이 어댑터 출력 공간을 정렬해 최적의 어댑터를 선택하는 기법을 제안했어요.",
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
          "canon_id": "2611.17339",
          "title": "Does the Ranking Hold? A Practitioner-Facing Audit of Hallucination Detectors on Small, Quantized, On-Device LLMs",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17339"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "거대 모델 위주로만 환각 탐지기를 검증해 왔던 게 문제였어요",
            "easy1_desc": "지금까지 환각 탐지 기술은 주로 7B에서 70B 규모의 거대 모델을 기준으로 연구되어 왔거든요. 그런데 정작 현장에서 기기에 탑재해 쓰는 모델들은 2B에서 3B 수준의 작은 모델들이 많다는 거예요. 이런 작은 모델들은 4비트 양자화 같은 압축 기술을 쓰는데, 기존 연구들은 이런 환경을 제대로 다루지 못했다는 점이 한계였던 겁니다.",
            "easy2_title": "작은 모델에 맞춰 직접 검증해 보니 결과가 완전히 달랐어요",
            "easy2_desc": "연구진은 기기 탑재용 모델인 Llama-3.2-3B와 Qwen2.5-3B를 대상으로 네 가지 환각 탐지 방식을 직접 시험해 봤는데요. 모델마다 탐지기의 성능 순위가 뒤바뀌는 현상이 나타났고, 복잡한 샘플링 방식이 단순한 어휘 기반 방식보다 딱히 낫다고 보기 어려웠다는 거예요. 쉽게 말하면, 거대 모델에서 잘 작동하던 탐지기가 작은 모델에서는 통하지 않을 수 있다는 사실을 밝혀낸 셈이에요.",
            "topic": "자원이 제한된 온디바이스 환경에서 소형 언어 모델의 환각 탐지기 성능을 재평가하고 평가 방식의 오류를 지적했어요.",
            "one_line": "소형 언어 모델의 환각 탐지 성능을 재평가하고 평가 방식의 오류를 분석했어요.",
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
          "canon_id": "2611.17338",
          "title": "When Should LLM Agents Forget? Memory Filtering Under Query-Critical Resolver Errors",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17338"
          },
          "published": "2026-11-16",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기억을 함부로 지우면 오히려 똑똑해지지 않아요",
            "easy1_desc": "거대언어모델(LLM)은 기억 시스템에서 오래된 정보를 삭제하는 방식을 쓰는데요, 이게 항상 좋은 건 아니라는 결과가 나왔어요. 정보를 지우는 과정에서 정작 질문에 꼭 필요한 핵심 정보까지 같이 삭제해 버리는 오류가 생기기 때문이에요. 쉽게 말하면, 낡은 짐을 정리하다가 중요한 서류까지 실수로 버리는 셈이라는 말이에요.",
            "easy2_title": "무작정 지우기보다 위험을 따져보고 남겨야 해요",
            "easy2_desc": "연구진은 정보를 무조건 지우는 대신, 삭제했을 때의 위험을 따져보는 방식을 제안했는데요, 검증 데이터가 있다면 삭제 위험을 확인하고, 없다면 일단 지우지 않고 남겨두는 게 낫다고 밝혔어요. 이렇게 하면 무분별한 삭제로 인한 성능 저하를 막을 수 있다는 거예요. 결과적으로 삭제를 단순한 작업이 아니라 비용과 위험을 고려해야 하는 과정으로 봐야 한다는 뜻이에요.",
            "topic": "거대언어모델 에이전트의 기억 시스템에서 정보 삭제가 성능에 미치는 영향을 분석하고, 이를 개선하기 위한 비용 민감형 삭제 전략을 제시했어요.",
            "one_line": "LLM 기억 시스템에서 정보 삭제가 성능에 미치는 영향을 분석하고 개선책을 제시했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "전역 정확도 교차점은 모델과 작업에 따라 달라지므로, 이를 배포 기준점으로 직접 활용하기는 어렵다는 한계가 있어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.16661",
          "title": "Reducing Batch Makespan for LLM Agent Workloads through Inference-Environment Coordination",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.16661",
            "arxiv": "https://arxiv.org/abs/2611.16661"
          },
          "published": "2026-11-12",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 0,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "에이전트 작업은 추론과 환경 상호작용이 섞여 있어 시간이 오래 걸려요",
            "easy1_desc": "거대언어모델(LLM) 에이전트 작업은 모델이 추론하고 환경과 상호작용하는 과정을 계속 반복하는데요, 이 과정이 섞여 있다 보니 전체 작업을 끝내는 데 걸리는 시간인 배치 메이크스팬(Batch Makespan)이 길어지는 문제가 있었어요. 연구진은 이 시간을 줄이는 것이 벤치마크 평가나 데이터 생성 같은 작업 효율에 핵심이라고 봤거든요. 쉽게 말하면, 모델이 노는 시간을 줄이고 환경과 더 잘 맞물려 돌아가게 만들어야 한다는 겁니다.",
            "easy2_title": "작업 환경과 모델 추론을 조율해서 처리 시간을 최대 65%까지 줄였어요",
            "easy2_desc": "연구진은 GPU 메모리를 효율적으로 나누고, 작업 경로를 고려해 스케줄링하는 방식을 도입했는데요, 특히 CAAS(Chain-Advancing Action Scheduling)라는 기술로 긴 작업 체인을 우선 처리해 전체 대기 시간을 단축했어요. 그 결과 Ling-3.0-Flash와 Ling-3.1-Flash 모델을 사용한 평가에서 기존 대비 10.4%에서 65.0%까지 처리 시간이 줄어드는 효과를 확인했거든요. 모델 개발 주기가 빨라지는 장점이 있는데, 대신 복잡한 환경 조율이 필요하다는 점도 같이 따라온다는 겁니다.",
            "topic": "LLM 에이전트 작업의 배치 처리 시간을 줄이기 위해 추론 환경과 자원 할당을 최적화하는 방법론을 제안했어요.",
            "one_line": "LLM 에이전트 작업의 배치 처리 시간을 줄이려 추론과 환경을 조율했어요.",
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
              "65"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16312",
          "title": "Alloy: A Multi-Material Physics Engine for Robot Learning",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.16312",
            "arxiv": "https://arxiv.org/abs/2611.16312"
          },
          "published": "2026-11-12",
          "first_seen": "2026-11-17",
          "backlog": false,
          "hf_upvotes": 0,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇이 딱딱한 물건만 다루는 건 아니거든요",
            "easy1_desc": "로봇은 수건이나 케이블, 액체, 모래처럼 모양이 변하는 물건도 다뤄야 하는데요, 기존 시뮬레이터는 딱딱한 물체에만 강해서 다른 재질을 추가하려면 엔진을 따로 쓰고 복잡하게 연결해야 했습니다. 이게 왜 문제냐면, 서로 다른 엔진을 억지로 붙이다 보니 로봇 학습을 효율적으로 하기가 어렵다는 거예요. 쉽게 말하면, 다양한 재질을 한 번에 다루기엔 기존 도구들이 너무 뻣뻣했다는 말입니다.",
            "easy2_title": "여러 재질을 한 엔진에서 한꺼번에 다루게 만들었어요",
            "easy2_desc": "연구진이 개발한 Alloy는 딱딱한 로봇부터 천, 케이블, 액체, 모래, 부드러운 물체까지 하나의 장면에서 모두 공유할 수 있게 만든 물리 엔진이에요. 물체를 한 번만 정의하면 Alloy가 알아서 적절한 해결사(solver)에 배정하고 제어 단계마다 이들을 연결해 주거든요. GPU 하나로 수많은 환경을 동시에 돌릴 수 있고, 물리 오류와 정책 오류를 구분하는 건강 점수도 제공합니다. 쉽게 말하면, 로봇 학습을 위해 여러 재질을 통합적으로 관리할 수 있는 환경을 구축했다는 겁니다.",
            "topic": "로봇 학습을 위해 다양한 재질을 통합적으로 시뮬레이션할 수 있는 물리 엔진 Alloy를 개발하고 그 성능을 검증했어요.",
            "one_line": "로봇 학습을 위한 다중 재질 물리 엔진 Alloy를 개발하고 성능을 검증했어요.",
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
        }
      ],
      "backlog": {
        "n_waiting_all": 32,
        "oldest_day": "2026-11-17",
        "n_dropped_today": 0,
        "n_backlog_done_today": 0
      },
      "sources": [
        {
          "name": "arXiv AI(cs.AI)",
          "field": "cs.AI",
          "got": 82,
          "new_cards": 82
        },
        {
          "name": "arXiv 전력·제어(eess.SY)",
          "field": "eess.SY",
          "got": 35,
          "new_cards": 35
        },
        {
          "name": "허깅페이스 오늘의 논문",
          "field": "허깅페이스",
          "got": 50,
          "new_cards": 39
        }
      ],
      "calls": {
        "summary": {
          "val": 120,
          "source": "v2_secretary/결과/논문/2026-11-17_논문.json"
        },
        "flow": {
          "val": 1,
          "source": "v2_secretary/결과/논문/2026-11-17_논문.json"
        },
        "failed": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-17_논문.json"
        },
        "http429": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-17_논문.json"
        }
      },
      "cap": {
        "val": 120,
        "source": "v2_secretary/결과/논문/2026-11-17_논문.json"
      },
      "secs": {
        "val": 1090,
        "source": "v2_secretary/결과/논문/2026-11-17_논문.json"
      },
      "no_ai": false,
      "notes": [
        "1차 출처 몫: eess.SY 35/54 · cs.AI 42/42 · 허깅페이스 35/36 · 이월 8편"
      ],
      "source": "v2_secretary/결과/논문/2026-11-17_논문.json",
      "abstracts": {
        "file": "panel_abstracts.js",
        "n": 152,
        "source": "v2_secretary/결과/논문/초록/2026-11-17.json"
      },
      "split": {
        "file": "panel_papers.js",
        "n": 120
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
        "line_in": "받음: [11월 17일(어제) 논문 — 이 화면 기준일(2026-11-18)보다 앞선 날, 오늘 논문은 논문 풀이 뒤] 새벽 바퀴 5-1(0콜)이 모으기 원본(arXiv·허깅페이스)으로 만든 새 논문 카드 152편",
        "line_rule": "규칙: papers.py — 새벽 카드(0콜) → 새벽 바퀴가 끝나면 바로 v2-papers(백업 12:07·14:07)가 점수 순으로 편당 AI 1콜 풀이 + 근거 문장 원문 대조 (gate_rules/논문_설정·주제·키워드.txt)",
        "line_out": "내보냄: 풀이 120편(새 카드 120 + 밀린 카드 0) · 새 카드 중 대기 32편 · AI 121콜(그날 합계) · 논문 파일 마지막으로 쓴 시각 2026-11-17 11:59 (v2_secretary/결과/논문/2026-11-17_논문.json)",
        "metrics": {
          "in": 152,
          "out": 120,
          "calls": 121,
          "secs": 1090.0,
          "num_source": "v2_secretary/결과/논문/2026-11-17_논문.json"
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
