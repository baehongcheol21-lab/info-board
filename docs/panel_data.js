// 자동 생성 파일 (v2_secretary/export_panel.py) — 직접 수정하지 마세요.
window.PANEL_DATA = {
  "schema_version": "2.1.0-panel-v1",
  "day": "2026-11-14",
  "generated_at": "2026-11-14 09:24:52",
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
  "overview": {
    "in_total": {
      "val": 2010,
      "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
    },
    "new_total": {
      "val": 1862,
      "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
    },
    "old_seen": {
      "val": 148,
      "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
    },
    "seen_ledger_lines": {
      "val": 5648,
      "source": "v2_secretary/data/seen.jsonl"
    },
    "ai_calls_day": {
      "val": 0,
      "source": "v2_secretary/결과/2026-11-14_하루_전체.md"
    },
    "ai_fails_day": {
      "val": 0,
      "source": "v2_secretary/결과/2026-11-14_하루_전체.md"
    },
    "run_secs": {
      "val": 0,
      "source": "v2_secretary/결과/2026-11-14_하루_전체.md"
    },
    "lanes": {
      "거푸집1": {
        "val": 119,
        "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
      },
      "거푸집2": {
        "val": 12,
        "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
      },
      "뉴스": {
        "val": 176,
        "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
      },
      "제외 보관함": {
        "val": 1405,
        "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
      },
      "논문T": {
        "val": 75,
        "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
      },
      "모름": {
        "val": 75,
        "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
      }
    },
    "last_auto_run": {
      "day": "2026-11-13",
      "start": "2026-11-13 10:15:41",
      "by": "github",
      "where": "GitHub",
      "mode": "run",
      "end": "2026-11-13 10:25:15",
      "secs": 574,
      "exit": 0,
      "result_md": true,
      "failed_stages": 0,
      "calls": 43,
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
          "name": "삼성전자 반도체 협력사 기술 세미나",
          "easy": "삼성전자 DS부문이 협력사 1000여 명을 대상으로 반도체 기술 세미나를 열고 협업을 강조했습니다. 반도체 신소재 개발 과제를 공유하고 기술 협력을 강화하려는 취지인데요. 엔비디아 리스크로 인한 시장 불확실성 속에서 공급망을 다지고 경쟁력을 확보하려는 움직임으로 보입니다.",
          "quote": "삼성전자, 협력사 1000명과 AI 반도체 기술 공유",
          "member_count": 5,
          "sample_articles": [
            {
              "n": 96,
              "title": "삼성전자, 반도체 신소재 개발 과제 공유…협력사 협업 강조 - 매일일보",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE4xbGtTeEU2QnR1SUNHdWVEUlR3U1VTMEN4TjgzdGhjeWwzbFJ4VzhBYXJWRDdYeVZMNHIzZVlhODFLb1l2eHVXajJhRm56c20xamVIbUtFa29DOXBOT01rWWRaTFo?oc=5"
            },
            {
              "n": 97,
              "title": "삼성전자 DS부문, 협력사 대상 '반도체 테크 세미나' 개최 - 월요신문",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1EWWpnVWJNbzRoWGFwaE84VXYyN05PalNHODhKVHNZazFCZTgyT3hTNFZLWk5fMVRPcTdzMW8wUDdnNmdnMUtzTFBVbGwzQ2JKQ0FsR0lhTU4yUmNldnZzR05nYU1uQVY1a0E?oc=5"
            },
            {
              "n": 99,
              "title": "삼성전자, 반도체 협력사 1000명과 기술협력 세미나 - 스페셜경제",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBfdV9VeHF6U19RUkkwdzdHODhMa3huOHliZmVnanJ5a3FkQkx3a3lUUHdhdFVqSUVCZHJma1EwMUtDa2NJSzdYbXFyODZrakltcmJsT2luUHV5RFpGc3hPejBDXy16R0ZYbC1Obw?oc=5"
            },
            {
              "n": 100,
              "title": "삼성전자, 협력사 1000명과 AI 반도체 기술 공유 - 뉴스핌",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE85ZHlFUDV1SGtWMlFkNWNycTJycEV3YVAwNzFkeFdBbGx1UmtzaDFnRXg2NjhCYU9zN1NDQWxOSlliaXFsZF9WcmVLWFRId1JDdklLaTNmc1ZCZFJY?oc=5"
            },
            {
              "n": 102,
              "title": "삼성전자 DS, 협력사 1000명과 AI 반도체 기술 공유 - 아이뉴스24",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiSEFVX3lxTE1CNVdvRmYwS1hRVmFBZDczY3UxM184UF9SS3Y4VDRyZURmZEQwVzZEU2puZmJXM0ZUQ0kwZlRMRlNIdmZ3OTd1Nw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 2,
          "name": "LG엔솔 버테크 ESS 플랫폼 출시",
          "easy": "LG에너지솔루션의 사내 독립기업인 LG엔솔 버테크가 에너지저장장치(ESS) 운영을 최적화하는 AI 플랫폼 '에어로스 인텔리전스'를 출시했습니다. 배터리 수명과 수익성을 관리하는 소프트웨어 기능을 고도화한 것인데요. 전력망 연계 사업 모델을 강화하려는 전략으로 풀이됩니다.",
          "quote": "LG엔솔 버테크, ESS 운영 최적화 '에어로스 인텔리전스' 출시",
          "member_count": 5,
          "sample_articles": [
            {
              "n": 121,
              "title": "전북자치도, 민간기업과 ESS·전력망 연계 사업모델 발굴 나서 - 장애인문화복지신문",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE5TSTZIV0M3X3dtVnlDZS1WNms0MjVRVTJqV2p3RlhaMVozakZTWkRCQ2JSYXViSjNyWV95R2FaVFVVOUJvQkYxTW9kM0wwVDVqYmVNVlkzSHUyQ2RRUkFldEJZZGc1ZXdwSGJv0gFvQVVfeXFMT0lUc0kwdGl6TU9CWE1BVjZ5SlBxQ1dLb2pRVWlQbnFkVUxpcmZIaDJCQzRWbHlPTDM3Nm51cERtNkw5RTJCSmVLQnJqR3VUNkU0TlJqRjdqeUZSelZoOF9Bd1RPQzZUWExqSVAzQlJR?oc=5"
            },
            {
              "n": 123,
              "title": "LG에너지솔루션 버테크, ESS 운영 최적화 플랫폼 '에어로스 인텔리전스' 출시 - 더구루",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFB2NklPa2FVSFRJN2pQd0RnWGV6bnFDdDR3RGkya1JuRFhYVG5Pam5BMlo5NmJnZkZHSFp4MkswWDlGZ2thLWJaNFF5WEwya3pQN184RVJydGNBb1I5SnBWakxSbw?oc=5"
            },
            {
              "n": 125,
              "title": "LG엔솔 버테크, ESS 운영 SW 고도화…배터리 수명·수익성 관리 - 더트래커",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE96a1M3eGRjVGRTRnhyd1hTS2Q5X1liNkVDUERyX1huaktIQ2UwOTJKb3hJMDBpdUZRU1pNa0pSSHBKdG9GN1JwcUpYQTFXdDFxLWd3Nmd1NDE?oc=5"
            },
            {
              "n": 127,
              "title": "LG엔솔 버테크, ESS 운영 최적화 '에어로스 인텔리전스' 출시 - 뉴스1",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFB3bE8zaVF1YjVTemEtNDhHVGFFVWRRZXo4VnZidFprZG93TGd6TjJkcEZwSkpfcDFxWmgweHMzMXRSVnM0LWEwRWZRTWw3bEEtc0RDMXB2b3I2YmVVd2VIdWcxUjY?oc=5"
            },
            {
              "n": 122,
              "title": "LG에너지솔루션 버테크, ESS 운영·예측 AI 플랫폼 출시 - https://www.2news.co.kr/",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE41bHJJY3Q3dGw1aS1ubWxMcXhLc1lRZGtVMThGVWJxY2JKMEg0M0xDcFVNanluc1cyd2NrcTZacEtGQ1lRVWo5OUpjNUYtR2J1aWxOWG1LODFrSjJXUGVSUW9rbXM2R2xh?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 3,
          "name": "국제 배터리 엑스포 2026 포항 개최",
          "easy": "포항에서 대한민국 이차전지 산업의 현재와 미래를 조망하는 '국제 배터리 엑스포 2026'이 열렸습니다. 소재부터 로봇 기술까지 다양한 배터리 관련 기술이 전시되었는데요. 시민들이 직접 체험할 수 있는 축제 형식으로 진행되어 배터리 산업에 대한 관심을 높이고 있습니다.",
          "quote": "국제 배터리 엑스포 2026 포항 개막",
          "member_count": 4,
          "sample_articles": [
            {
              "n": 182,
              "title": "배터리 기술, 시민 일상 속으로···보고 즐기는 체험축제 - 에너지신문",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE1Pb3hUay1jSVE5dlh1LVVpYkdOb0ctRmtld29DYldnTXNzVzR5ZnNHb3ZSSlJ0bS1QY2tIUFJIQ1ZJV2JqcUZrSHNodUM5czZFLTc0eHpUeXF5c2dIQmFTTmNrV0FQNVQ5Sm13WnV6bmVmZw?oc=5"
            },
            {
              "n": 184,
              "title": "국제 배터리 엑스포 2026 포항 개막 - 영남경제",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9HLVI4WUdWSWtIYnc5d0V6NEZobWpaNEZjTTJvTDM4bm9mWFJlSVlOaXJsbDR1ZVk4SWZWTUFQa1RoeTh1Tzh3QTRNQ1NIMzEycXFEdk8tZWFaOVlPS21aeGtRaGloaU0?oc=5"
            },
            {
              "n": 187,
              "title": "'국제 배터리 엑스포 2026 포항' 화려한 개막… 대한민국 이차전지 산업의 현재와 미래 한눈에 - 글로벌경제신문",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5xbEp6OGVxTjhILTJrUGo3WGZYcUxNSjhtSFI2UG42ZWN5RnFIa2FnNHEtTno0dmtMcnhGNVU2YVhWNFRhN2dnMkwwY1pRSHRpRUduQTZEejhJNlJrTko1NmlPd2RLcFUyNlhRbtIBcEFVX3lxTE02a3EzVkVLV0JmRks4Ui1JUWh2cTNHTWJQeTk1eDJvX2tHRmZpbGxrcHdCUWcwODRqMzBfOW1RWk9yUVZxMXY1ekliRExyd21DbFB3QkZvbTFTQXdpUXpLUllnbnlpUzJoOGNfekVpMGI?oc=5"
            },
            {
              "n": 188,
              "title": "소재부터 로봇까지, 이차전지 미래 기술 포항에 집결 - 서울경제",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1vYXpVNEdsNDRoQ2xOZnR1eV8xdGxac2FyWGdUVS1UNF90RDhlZzZYNlFoNE9mMDZMX1VvQWZpMktrem5CZVhMUnZWSTJReXkxcGfSAVNBVV95cUxNZXI0NF83b1lVem1oRzN5Wi1VZzJlSmxtQXl4X0JRUG1Fc3VZMkRTS2NPeHZzQWtKM1FrdDA3VVdTMlUwY0QxN1BNVVBzeFUxcVRLbw?oc=5"
            }
          ],
          "flags": [
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 4,
          "name": "한전 전력망 입지선정 100호 달성",
          "easy": "한국전력이 전력망 구축을 위한 입지선정 100건을 달성했습니다. 최근 2년간 실적이 2배 이상 증가했는데요. 주민 소통을 강화하고 입지 선정 과정을 투명하게 운영해 전력망 사업에 속도를 내겠다는 계획입니다.",
          "quote": "한전, ‘전력망 입지선정’ 100호 달성…2년간 입지선정 실적 2배 이상 증가",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 70,
              "title": "한전, 전력망 입지선정 100건 돌파…주민 소통 강화에 사업 속도 - 메가경제",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE5Xb25MUHl0WEFrUXBVUDQ0NG11cUEyb0QzVnFwak1idVJCZFF6TzFsWjFxeURNU181dUUtVkc2NWxTaVhWZTk5SkplZWtfZ1U1Z0djVVgzSmNubk5vNzB0RERjbElvclpoYmJCSkExYjJoQdIBckFVX3lxTE5Xb25MUHl0WEFrUXBVUDQ0NG11cUEyb0QzVnFwak1idVJCZFF6TzFsWjFxeURNU181dUUtVkc2NWxTaVhWZTk5SkplZWtfZ1U1Z0djVVgzSmNubk5vNzB0RERjbElvclpoYmJCSkExYjJoQQ?oc=5"
            },
            {
              "n": 71,
              "title": "한전, ‘전력망 입지선정’ 100호 달성…2년간 입지선정 실적 2배 이상 증가 - 부산일보",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTFBTQkd5VWtPdjhibDQ3SlYwcjBXTEVwb3NjRGhURzlITHlOUjVoU2E0QmFBSlRLdUdOVzFvMFRyUnRpMzdLUm5qZWJCWnN4LUpIRmhHQUdxTXFSM0ZadXBSRlhaVTRtVjZtWE5paHItQWR3RFZxbW5GNA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 5,
          "name": "한전KDN 양자컴퓨팅 기술 협력",
          "easy": "한전KDN이 한국퀀텀컴퓨팅과 손잡고 에너지 분야의 양자 보안 및 양자컴퓨팅 기술 협력을 추진합니다. 국가 양자내성암호 전환 정책에 선제적으로 대응하기 위한 것인데요. 양자 기술을 활용해 에너지 신사업을 발굴하고 보안 체계를 강화하겠다는 목표입니다.",
          "quote": "국가 양자내성암호(PQC) 전환 정책 선제 대응… 한전KDN, 한국퀀텀컴퓨팅과 에너지 양자 신사업 발굴 가동",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 1985,
              "title": "한전KDN, 한국퀀텀컴퓨팅과 양자보안·양자컴퓨팅 기술 협력 - 에너지데일리",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE5vRlA4M0NUdk9aeENDZzE2MmppVjJhYzR1Zkx3LXM0bjlHM0UzMkNKNHBsSWthdGo4X3ZEVXVNQl9hdC1GWHdFOVhkTlBoRDViazFnSmtFXzhGZU1IZGZ5WTZsLVo0RzkxYUlpdUM3dzFPQQ?oc=5"
            },
            {
              "n": 1991,
              "title": "국가 양자내성암호(PQC) 전환 정책 선제 대응… 한전KDN, 한국퀀텀컴퓨팅과 에너지 양자 신사업 발굴 가동 - 청년투데이",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9fTzRrR01kQjF1YU1vUHhGWjNJVllFaEN3RVF1ekl5Q1NiOHVXeUQ0aGRqRUZqQTRMTHRqZjlQcG04QVJid3RPdzYzcG8xdG1HVlNDRnJYNF9VZnF4NW9WUlpTT01UNC11Q0E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        }
      ]
    },
    "ch2_numbers": {
      "title": "챕터 2 · 숫자 (거푸집1)",
      "addr": "처리-1",
      "status": "돎 (AI 0콜 · 정규식 추출 + 공식 API 대조)",
      "counts": {
        "gate_in": {
          "val": 119,
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        "dart_day_total": {
          "val": 111,
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        "dart_contracts": {
          "val": 11,
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        "dart_others": {
          "val": 100,
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
      "dart_contracts": [
        {
          "company": "엔젯",
          "market": "코스닥",
          "what": "micro LED 디스플레이 리페어 장비 공급 계약",
          "amount_won": "1,628,990,000",
          "pct_of_sales": "30.09",
          "pct_check": "맞음",
          "counterparty": "AUO Corporation Taoyuan Branch",
          "region": "Taiwan",
          "period": "2026-07-23~2027-03-31",
          "changes": "5. 계약기간: 종료일 : 2026-11-15 → 종료일 : 2027-03-31",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113901904",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "기가레인",
          "market": "코스닥",
          "what": "통신장비 납품의 건",
          "amount_won": "2,495,314,810",
          "pct_of_sales": "6.19",
          "pct_check": "맞음",
          "counterparty": "Paralle Wireless",
          "region": "Colombia",
          "period": "2026-04-17~2026-12-31",
          "changes": "5. 계약기간 - 종료일: 2026-11-15 → 2026-12-31",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113901152",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "코윈로보틱스",
          "market": "코스닥",
          "what": "2차전지 자동화시스템 공급",
          "amount_won": "26,100,000,000",
          "pct_of_sales": "12.98",
          "pct_check": "맞음",
          "counterparty": "국내 배터리사",
          "region": "-",
          "period": "2023-08-02~2026-11-14",
          "changes": "3. 계약상대방: - → 국내 배터리사 ; 9. 공시유보관련내용 유보기한: 2026-11-14 → - ; 10. 기타 투자판단에 참고할 사항: - 계약상대방,판매공급지역에 대한 정보는 기업경영상 비밀보호 사유로 인한 공시유보 사항입니다. - 공시유보기한은 계약기간 종료일이며 계약기간이  → - 코스닥시장 공시규정 제42조 제3항 단서 및 같은 규정 시행세칙 제20조 제3항과 제4항에 따라 계약상대방,판매공급지역에 대한 정보는 기업경",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113901020",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "탑선",
          "market": "코넥스",
          "what": "신안증도 빛과소금 및 증도솔라팜 태양광발전소 공사도급계약",
          "amount_won": "158,724,500,000",
          "pct_of_sales": "144.29",
          "pct_check": "맞음",
          "counterparty": "주식회사 신안증도태양광",
          "region": "전라남도 신안군",
          "period": "2025-06-30~2027-06-30",
          "changes": "2. 계약내역 中 계약금액(원): 160,626,000,000 → 158,724,500,000 ; 2. 계약내역 中 매출액대비(%): 146.02 → 144.29 ; 6. 주요 계약조건: 2) 대금지급조건 : 가. 계약금 20% (25년 7월) 나. 1차 기성금 8.4% (25년 9월) 다. 2차 기성금 10% (26년 05월)  → 2) 대금지급조건 : 가. 계약금 20% (25년 7월) 나. 1차 기성금 8.4% (25년 9월) 다. 2차 기성금 10% (26년 05월) ",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113601056",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "스피어",
          "market": "코스닥",
          "what": "특수합금 공급계약",
          "amount_won": "1,462,732,560",
          "pct_of_sales": "57.19",
          "pct_check": "맞음",
          "counterparty": "미국 글로벌 우주항공 발사업체",
          "region": "해외",
          "period": "2025-04-11~2026-12-15",
          "changes": "5. 계약기간 - 종료일: 2026-11-15 → 2026-12-15 ; 9. 공시유보 관련내용 - 유보기간: 2026-11-15 → 2026-12-15 ; ※ 관련 공시: 2025-04-11 단일판매·공급계약체결 2026-04-28 단일판매·공급계약체결 2026-06-01 단일판매·공급계약체결 2026-06-30  → 2025-04-11 단일판매·공급계약체결 2026-04-28 단일판매·공급계약체결 2026-06-01 단일판매·공급계약체결 2026-06-30 ",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113900916",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "케이피항공산업",
          "market": "코스닥",
          "what": "신규 무인기 사업 조립 치구 제작",
          "amount_won": "2,894,600,000",
          "pct_of_sales": "5.37",
          "pct_check": "맞음",
          "counterparty": "(주)스페이스프로",
          "region": "대한민국",
          "period": "2026-11-13~2026-12-31",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113900774",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "자비스",
          "market": "코스닥",
          "what": "2차전지용 X-ray 검사장비",
          "amount_won": "19,251,665,090",
          "pct_of_sales": "119.77",
          "pct_check": "맞음",
          "counterparty": "Blue Oval SK",
          "region": "해외",
          "period": "2023-01-18~2026-11-15",
          "changes": "3. 계약상대방: 글로벌 2차전지 제조사 → Blue Oval SK ; 9. 공시유보 관련내용 유보기한 유보사유: 2026-11-15 계약상대방의 영업비밀 요청 → - -",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113900680",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "디티앤씨알오",
          "market": "코스닥",
          "what": "2025년 화학물질 유해성시험자료 생산",
          "amount_won": "3,165,241,327",
          "pct_of_sales": "8.8",
          "pct_check": "맞음",
          "counterparty": "인천지방조달청",
          "region": "대한민국",
          "period": "2025-09-05~2026-11-20",
          "changes": "5. 계약기간 - 종료일: 2026-11-13 → 2026-11-20",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113900687",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "아티스트컴퍼니",
          "market": "코스닥",
          "what": "드라마<굿파트너 시즌2> 프로그램 제작위탁 용역",
          "amount_won": "5,834,000,000",
          "pct_of_sales": "12.51",
          "pct_check": "맞음",
          "counterparty": "(주)스튜디오앤뉴",
          "region": "국내외",
          "period": "2026-04-23~2026-11-15",
          "changes": "2. 계약내역- 확정 계약금액: - → 5,834,000,000 ; 2. 계약내역 - 계약금액 총액(원): - → 5,834,000,000 ; 2. 계약내역 - 매출액 대비(%): - → 12.51 ; 9. 공시유보 관련내용 - 유보기한: 2026-11-15 → - ; 9. 공시유보 관련내용 - 유보사유: 계약 상대방의 비밀유지 요청 및 경영상 비밀유지가 필요 → -",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113900396",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "DL",
          "market": "유가",
          "what": "단일판매ㆍ공급계약 체결",
          "amount_won": "406,201,034,435",
          "pct_of_sales": "5.49",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "경기도 수원시 영통구 영통동 963-2번지",
          "period": "-~-",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113800342",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "DL이앤씨",
          "market": "유가",
          "what": "단일판매ㆍ공급계약 체결",
          "amount_won": "406,201,034,435",
          "pct_of_sales": "5.49",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "경기도 수원시 영통구 영통동 963-2번지",
          "period": "-~-",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113800306",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        }
      ],
      "dart_others": [
        {
          "company": "에이프로젠",
          "market": "유가",
          "kind": "주요사항보고서(감자결정)(자회사의 주요경영사항)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113802054",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "앱튼",
          "market": "코스닥",
          "kind": "주요사항보고서(감자결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113001675",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "앱튼",
          "market": "코스닥",
          "kind": "주권매매거래정지 (자본감소)",
          "changes": "",
          "numbers": "",
          "body_from": "공시 화면",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113902051",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "에피소드컴퍼니",
          "market": "코스닥",
          "kind": "최대주주변경",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113901991",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "우성머티리얼스",
          "market": "유가",
          "kind": "[기재정정]주요사항보고서(유상증자결정)",
          "changes": "3. 증자전   발행주식총수 (주): 20,314,983 → 20,491,286 ; 9. 납입일: 2026년 11월 17일 → 2027년 04월 16일 ; 10. 신주의 배당기산일: 2026년 01월 01일 → 2027년 01월 01일 ; 12. 신주의 상장 예정일: 2026년 12월 04일 → 2027년 05월 06일 ; 20. 기타 투자판단에 참고할 사항: 주1) [정정 전] → 주1) [정정 후]",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113001593",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "모아데이타",
          "market": "코스닥",
          "kind": "[기재정정]기타경영사항(자율공시) (제8회 신주인수권부사채(BW) 취득 후 재매각)",
          "changes": "2. 주요내용 [4. 처분내역]: 4) 처분완료일: 2026년 11월 15일 → 4) 처분완료일: 2027년 01월 28일 ; 4. 기타 투자판단에 참고할 사항: 2. 매각결정일 현재 대상사채의 조정된 행사가액은 1,751원입니다. → 2. 매각결정일 현재 대상사채의 조정된 행사가액은 8,755원입니다.",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113901992",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "모아데이타",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(자기전환사채매도결정)",
          "changes": "9. 매도대금 수령(예정)일: 2026년 11월 15일 → 2027년 01월 28일 ; 11. 전환에 관한사항보고일 현재 전환가액(원/주): 1,853 → 9,265 ; 11. 전환에 관한사항주식수: 3,372,908 → 674,581 ; 11. 전환에 관한사항주식총수 대비 비율(%): 8.48 → 8.25 ; 13. 기타 투자판단에 참고할 사항【매수자에 관한 사항】 - 매도결정 전후 6월이내    거래내역 및 계획: 2026.11.15을 인수일로 하는 제8회 신주인수권부사채 50억원(사채권면금액)의 인수 예정자 → 2027.01.28을 인수일로 하는 제8회 신주인수권부사채 50억원(사채권면금액)의 인수 예정자",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113001618",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "삼영이엔씨",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(유상증자결정)",
          "changes": "3. 증자전 발행주식총수 (주): 6,569,206 → 6,569,366",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113001610",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "삼영이엔씨",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(감자결정)",
          "changes": "1. 감자주식의 종류와 수: 보통주식 (주) : 19,715,853 → 보통주식 (주) : 19,715,693 ; 3. 감자전후 자본금: 감자후 (원) : 3,284,603,000 → 감자후 (원) : 3,284,683,000 ; 4. 감자전후 발행주식수: 감자후 (주) : 6,569,206 → 감자후 (주) : 6,569,366",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113001589",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "디아이동일",
          "market": "유가",
          "kind": "주식소각결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113801927",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "유진레저",
          "market": "기타",
          "kind": "특수관계인에대한자금대여",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113001629",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "반도건설",
          "market": "기타",
          "kind": "특수관계인에대한자금대여",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113001590",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "현대사료",
          "market": "코스닥",
          "kind": "소송등의제기ㆍ신청(경영권분쟁소송) (주주명부 열람 및 등사 가처분 신청)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113901749",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "반도종합건설",
          "market": "기타",
          "kind": "특수관계인으로부터자금차입",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113001571",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "다스코",
          "market": "유가",
          "kind": "주요사항보고서(자기신주인수권부사채만기전취득결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113001541",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "에스아이리소스",
          "market": "코스닥",
          "kind": "소송등의판결ㆍ결정 (전환사채발행 무효 확인 등의 소)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113901839",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "고려아연",
          "market": "유가",
          "kind": "소송등의판결ㆍ결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113801840",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "시선AI",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(전환사채권발행결정)",
          "changes": "5. 사채만기일: 2031년 11월 13일 → 2031년 12월 14일 ; 9.전환에 관한 사항-전환청구기간: 시작일 : 2027년 11월 13일종료일 : 2031년 10월 13일 → 시작일 : 2027년 12월 14일종료일 : 2031년 11월 14일 ; 9-1. 옵션에 관한 사항: 주1)참고 → 주2)참고 ; 11. 청약일: 2026년 11월 13일 → 2026년 12월 14일 ; 12. 납입일: 2026년 11월 13일 → 2026년 12월 14일 ; 23. 기타 투자판단에 참고할 사항. - 나. 조기상환청구권(Put Option)에 관한 사항: 주3) 참고 → 주4) 참고 ; 23. 기타 투자판단에 참고할 사항. - 다. 매도청구권(Call Option)에 관한 사항: 주5) 참고 → 주6) 참고 ; 23. 기타 투자판단에 참고할 사항. - [미상환 주권 관련 사채권에 관한 상황]: 주7) 참고 → 주8) 참고",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113001480",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "이지케어텍",
          "market": "코스닥",
          "kind": "주식소각결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113901784",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "엠젠솔루션",
          "market": "코스닥",
          "kind": "전환사채(해외전환사채포함)발행후만기전사채취득",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113901838",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "에피소드컴퍼니",
          "market": "코스닥",
          "kind": "증권발행결과(자율공시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113901831",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "베노티앤알",
          "market": "코스닥",
          "kind": "주권매매거래정지해제 (액면병합 주권 변경상장)",
          "changes": "",
          "numbers": "",
          "body_from": "공시 화면",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113901592",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "에스바이오메딕스",
          "market": "코스닥",
          "kind": "전환사채(해외전환사채포함)발행후만기전사채취득 (제5회차)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113901433",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "셀루메드",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(감자결정)",
          "changes": "1. 감자주식의 종류와 수-보통주: 18,761,339 → 19,000,000 ; 3. 감자전후 자본금- 감자후: 32,232,426,500 → 32,113,096,000 ; 4. 감자전후 발행주식수- 보통주식 감자후: 64,464,853 → 64,226,192 ; 5. 감자비율- 보통주식: 22.54 → 22.83 ; 6. 감자기준일: 2026년 12월 15일 → 2026년 12월 18일 ; 7. 감자방법: - 차등감자 : 최대주주에 대한 차등감자- 당사 최대주주 '티디랜드마크조합1호'가 보유한 주식 28,192,370주 중 18,761,339주를  → - 차등감자 : 최대주주에 대한 차등감자- 당사 최대주주 '티디랜드마크조합1호'가 보유한 주식 28,192,370주 중 19,000,000주를  ; 9. 감자일정:  →  ; 주주총회 예정일: 2026년 11월 27일 → 2026년 11월 30일 ; 매매거래정지예정기간시작일 종료일: 2026년 12월 14일2027년 01월 04일 → 2026년 12월 17일2027년 01월 11일 ; 신주상장예정일: 2027년 01월 05일 → 2027년 01월 12일 ; 12. 이사회결의일(결정일): 2026년 11월 12일 → 2026년 11월 13일 ; 14. 기타 투자판단에 참고할 사항: 1) 상기 감자가 완료되어도 '티디랜드마크조합1호'의 최대주주 지위는 유지됩니다. (감자 완료 후 지분율 (14.6%) → 1) 상기 감자가 완료되어도 '티디랜드마크조합1호'의 최대주주 지위는 유지됩니다. (감자 완료 후 지분율 (14.3%)",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113001192",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "에이팩트",
          "market": "코스닥",
          "kind": "증권발행결과(자율공시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113901730",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "모아라이프플러스",
          "market": "코스닥",
          "kind": "[기재정정]최대주주변경",
          "changes": "1.변경내용 변경전: 최대주주등 : 주식회사 모아데이타 소유주식수(주):700,000 소유비율(%):3.32 → 최대주주등 : 주식회사 모아데이타외 1인 소유주식수(주):850,000 소유비율(%):4.03 ; [세부변경내역]: - → - ; 성명(법인명,조합병,기타단체명): (주)모아데이타 - → (주)모아데이타 윤상호 ; 관계: 변경전 최대주주 - → 변경전 최대주주 변경전 최대주주의 특수관계인 ; 변경전 주식수(주) 지분율(%): 700,000 3.32 → 0 0 ; 변경후 주식수(주) 지분율(%): 150,000 0.71 → 150,000 0.71",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113901454",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "뉴스테이허브제2호위탁관리부동산투자회사",
          "market": "기타",
          "kind": "주요사항보고서(유상증자결정)",
          "changes": "",
          "numbers": "종류 유상증자 · 목적: 타법인 증권 취득(원) 69,072,000,000 · 신주 보통주(주) 690,720 · 1주당 액면가(원) 10,000 · 증자 전 보통주(주) 4,862,982 · 증자 방식 주주배정증자",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113001363",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "금호전기",
          "market": "유가",
          "kind": "[기재정정]주요사항보고서(유상증자결정)",
          "changes": "3. 증자전 발행주식총수 (주): 12,376,016 → 12,725,963 ; 9. 납입일: 2026년 11월 13일 → 2027년 03월 31일 ; 10. 신주의 배당기산일: 2026년 01월 01일 → 2027년 01월 01일 ; 12. 신주의 상장예정일: 2026년 12월 10일 → 2027년 04월 27일 ; 15. 이사회결의일(결정일): 2026년 06월 30일 → 2026년 11월 13일",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113001161",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "현대건설",
          "market": "유가",
          "kind": "타인에대한채무보증결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113801646",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "콜마홀딩스",
          "market": "유가",
          "kind": "연결재무제표기준영업(잠정)실적(공정공시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113801469",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "콜마홀딩스",
          "market": "유가",
          "kind": "영업(잠정)실적(공정공시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113801450",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "모아라이프플러스",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(전환사채권발행결정)",
          "changes": "전환사채발행결정: 전환사채권 발행결정 → 전환사채권 발행결정 철회",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113001253",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "티케이지휴켐스",
          "market": "유가",
          "kind": "연결재무제표기준영업(잠정)실적(공정공시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113801408",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "CSA 코스믹",
          "market": "코스닥",
          "kind": "소송등의판결ㆍ결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113901551",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "동성케미컬",
          "market": "유가",
          "kind": "주식소각결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113801374",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "코퍼스코리아",
          "market": "코스닥",
          "kind": "주권매매거래정지 (상장적격성 실질심사 대상 (사유발생))",
          "changes": "",
          "numbers": "",
          "body_from": "공시 화면",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113901508",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "보로노이",
          "market": "코스닥",
          "kind": "주요사항보고서(전환사채권발행결정)",
          "changes": "",
          "numbers": "종류 전환사채 · 사채 권면총액(원) 52,700,000,000 · 표면이자율(%) 0.0 · 만기이자율(%) 2.0 · 사채 만기일 2031년 11월 23일 · 전환가액(원) 111,510 · 전환 주식 종류 보로노이 주식회사 기명식 보통주 · 전환 주식 수 472,603 · 주식총수 대비(%) 2.48 · 전환청구 시작 2027년 11월 23일 · 전환청구 끝 2031년 10월 23일 · 목적: 운영(원) 52,700,000,000",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113001035",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "파이온엑스",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(유상증자결정)",
          "changes": "1. 신주의 종류와 수: 기타주식 (주) → - ; : 보통주식 (주) → 2,347,417 ; : 기타주식 (주) → - ; : 보통주식 (주) → 1,912,045 ; : 기타주식 (주) → - ; 4. 자금조달의 목적- 운영자금(원): 1,999,999,284 → 1,999,999,070 ; 6. 신주 발행가액: 852 → 1,046 ; 주1) 신주의 종류와 수 등에 관한 주석: [주1] 정정 전 → [주1] 정정 후 ; 주2) 신주 발행가액에 관한 주석: [주2] 정정 전 → [주2] 정정 후 ; 20. 기타 투자판단에 참고할 사항: [주3] 정정 전 → [주3] 정정 후",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113001053",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "아이패밀리에스씨",
          "market": "코스닥",
          "kind": "공개매수결과보고서",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113001117",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "키이스트",
          "market": "코스닥",
          "kind": "[기재정정]영업(잠정)실적(공정공시)",
          "changes": "1. 실적내용 - 매출액: [당해실적] - 당기실적:15,830 - 전기대비 증감율(%):47.6 - 전년동기대비 증감율(%):336.3 [누계실적] - 당기실적:35,0 → [당해실적] - 당기실적:12,720 - 전기대비 증감율(%):18.6 - 전년동기대비 증감율(%):250.6 [누계실적] - 당기실적:31,9 ; 1. 실적내용 - 영업이익: [당해실적] - 당기실적:474 - 전기대비 증감율(%):- - 전기대비 전환여부:흑자전환 - 전년동기대비 증감율(%):- - 전년동기대비 전환 → [당해실적] - 당기실적:-1,390 - 전기대비 증감율(%):-33.7 - 전기대비 전환여부:- - 전년동기대비 증감율(%):-37.4 - 전 ; 1. 실적내용 - 법인세비용차감전계속사업이익: [당해실적] - 당기실적:161 - 전기대비 증감율(%):- - 전기대비 전환여부:흑자전환 - 전년동기대비 증감율(%):- - 전년동기대비 전환 → [당해실적] - 당기실적:-1,703 - 전기대비 증감율(%):1.2 - 전기대비 전환여부:- - 전년동기대비 증감율(%):-52 - 전년동기대 ; 1. 실적내용 - 당기순이익: [당해실적] - 당기실적:172 - 전기대비 증감율(%):- - 전기대비 전환여부:흑자전환 - 전년동기대비 증감율(%):- - 전년동기대비 전환 → [당해실적] - 당기실적:-1,692 - 전기대비 증감율(%):1.7 - 전기대비 전환여부:- - 전년동기대비 증감율(%):-52.3 - 전년동",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261113901139",
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
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        "summarized_today": {
          "val": 9,
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
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "「종자산업 육성사업 평가」 발간",
          "easy1_title": "종자 기업들이 여전히 영세해서 연구 성과가 돈으로 잘 안 이어져요",
          "easy1_desc": "정부가 종자산업을 키우려고 5개년 계획을 세워 지원해 왔는데요, 정작 현장에서는 기업들이 여전히 작고 영세한 상태에 머물러 있다는 거예요. 뭔 소리냐면, 연구개발을 해도 이게 실제 사업화나 수출로 이어지는 고리가 약하다는 말이에요. 2024년 기준으로 매출 5억 원 미만인 소규모 업체가 92.3%나 되는데, 수출보다 수입이 많아 무역수지도 적자인 상황인 겁니다.",
          "easy2_title": "기업 규모에 딱 맞는 맞춤형 지원과 유관기관 협력이 필요합니다",
          "easy2_desc": "앞으로는 단순히 기업 수만 늘리는 게 아니라, 기업마다 연구 역량이 얼마나 되는지 따져서 맞춤형으로 지원해야 한다는 거예요. 또 농림축산식품부나 농촌진흥청처럼 흩어져 있는 기관들이 서로 손발을 맞춰야 연구부터 사업화까지 물 흐르듯 이어질 수 있다는 말이죠. 이렇게 하면 성과가 더 잘 나올 장점이 있는데, 대신 기관 간에 업무를 조율하는 과정이 복잡해질 수도 있다는 겁니다.",
          "topic": "국회예산정책처가 종자산업 육성사업의 성과를 평가하고 실효성을 높이기 위한 개선 방향을 제시했습니다.",
          "points": [
            "맞춤형 지원체계 마련: 국내 종자업체는 늘었지만 정작 품종 개발에 돈을 쓰는 업체나 육종 실적을 가진 곳은 줄어들고 있어요. 그래서 기업의 규모뿐만 아니라 연구 역량과 시장성까지 꼼꼼히 따져서 지원해야 한다는 겁니다.",
            "후속 사업 연계 강화: 과거 골든시드 프로젝트가 목표를 다 채우지 못한 원인을 분석해서 다음 사업에 반영해야 한다고 봤어요. 품종 개발은 시간이 오래 걸리는 만큼 디지털 육종 같은 기술을 현장에 바로 적용할 수 있게 돕겠다는 계획입니다.",
            "민간육종 연구단지 내실화: 전북 김제에 있는 민간육종 연구단지 입주 기업들을 살펴봤더니, 시설 지원은 괜찮지만 기업끼리 협력하는 건 부족하다고 해요. 그래서 앞으로는 공동 연구를 늘리고 수출 지원도 더 챙겨야 한다고 밝혔습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "1556",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5307647",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "「소재·부품·장비 지원사업 평가」 발간",
          "easy1_title": "소부장 지원 정책이 겹치지 않게 역할을 확실히 나눠야 합니다",
          "easy1_desc": "정부가 소재·부품·장비 산업을 돕기 위해 여러 법을 만들고 예산을 쓰고 있는데요. 문제는 공급망 안정화법이나 국가자원안보특별법처럼 관련 법이 늘어나면서 정책 내용이 서로 겹치는 부분이 생겼다는 겁니다. 그래서 국회예산정책처는 법률 간의 역할과 적용 관계를 명확히 정리할 필요가 있다고 밝혔는데요. 쉽게 말하면, 비슷한 일을 하는 정책들이 서로 엉키지 않게 교통정리를 하라는 말이에요.",
          "easy2_title": "기업 지원은 규모만 키울 게 아니라 성과를 꼼꼼히 따져야 합니다",
          "easy2_desc": "으뜸기업이나 특화단지 같은 정책으로 지원을 늘리고 있지만, 정작 성과가 일부에 쏠리거나 관리가 제대로 안 되는 문제가 나타나고 있습니다. 으뜸기업은 상위 3개사가 매출의 85.6%를 차지할 정도로 편차가 크고, 특화단지는 단지 전체의 성과를 파악하기 어렵거든요. 그래서 국회예산정책처는 지원을 계속할지 결정할 때 성과 지표를 토대로 꼼꼼하게 따져봐야 한다고 강조했습니다.",
          "topic": "국회예산정책처가 소재·부품·장비 지원사업의 추진 실태를 분석하고 정책 개선 방안을 제시했습니다.",
          "points": [
            "추진체계 정비: 소재부품장비산업법과 공급망안정화법 등 관련 법률들이 시행되면서 관리 대상이 중첩되는 문제가 발생하고 있습니다. 또한 제2차 소부장 기본계획과 제1차 공급망안정화 기본계획도 재원을 같이 쓰고 있어 역할 구분이 필요하다고 봤습니다.",
            "정책 성과관리 보완: 으뜸기업의 성과가 상위 기업에 집중되거나, 특화단지 관리 체계가 개별 과제 중심으로만 운영되는 한계가 있습니다. 협력모델 역시 관계부처의 지원이 제대로 이행되는지 점검하는 체계가 부족해 이를 보완해야 한다는 계획입니다.",
            "공급망 취약성 대응: 일본에 대한 의존도는 줄었지만 특정 국가에 대한 의존과 기술 격차 축소 등 공급망 취약성은 여전한 상태입니다. 특히 중소기업의 위험관리 수준이 기초 단계에 머물러 있어 기업 규모에 맞는 지원이 필요하다고 밝혔습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "2194",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5307645",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "「국가전략기술 육성 재정사업 평가」 발간",
          "easy1_title": "국가전략기술에 3년 동안 25조 원 넘게 쏟아부었습니다",
          "easy1_desc": "정부가 인공지능이나 반도체 같은 국가전략기술을 키우려고 2024년부터 2026년까지 총 25.8조 원의 연구비를 투입했는데요. 돈을 많이 쓴 만큼 성과가 잘 나오는지 국회예산정책처가 이번에 꼼꼼히 따져 본 겁니다. 쉽게 말하면, 정부가 기술 경쟁에서 이기려고 돈을 엄청나게 쓰고 있는데 이게 제대로 쓰이고 있는지 점검했다는 말이에요.",
          "easy2_title": "돈만 쓸 게 아니라 전략을 짜서 제대로 키워야 합니다",
          "easy2_desc": "조사해 봤더니 R&D 과제와 전략로드맵이 서로 따로 놀고 있고, 특정 분야에만 투자가 쏠려 있다는 문제가 발견됐거든요. 그래서 앞으로는 기술마다 특성에 맞춰 투자 전략을 짜고, 연구 성과가 실제 창업이나 사업화로 이어지도록 환경을 바꿔야 한다고 국회예산정책처는 봤습니다. 쉽게 말하면, 이제는 무작정 돈만 넣지 말고 체계적으로 관리해야 한다는 겁니다.",
          "topic": "국가전략기술 육성을 위한 재정사업의 현황을 평가하고 향후 효율적인 투자와 지원을 위한 개선 방안을 제시했습니다.",
          "points": [
            "R&D 투자 전략 정비: 국가전략기술 R&D 과제와 전략로드맵 사이의 연계가 부족하다는 점을 지적했는데요. 기술 수준이 낮은 분야는 기초 연구를 더 지원하고, 특허 경쟁력이 떨어지는 곳은 핵심 특허를 확보할 수 있게 투자 전략을 다시 짜야 한다고 봤습니다.",
            "사업화 및 투자 환경 개선: 연구 성과가 창업이나 사업화로 이어지도록 기술 이전 환경을 개선해야 한다고 밝혔습니다. 특히 인공지능이나 반도체 같은 특정 분야에만 투자가 집중되는 현상을 보완하고, 정책 금융이나 펀드 지원을 더 넓혀야 한다는 계획입니다.",
            "지역 균형 및 인력 양성: 현재 R&D 투자가 수도권이나 대전에 몰려 있는 문제를 해결해야 한다고 봤는데요. 지역 산업과 연계해 기술 혁신 거점을 만들고, 기업이 실제로 필요로 하는 직무 능력을 갖춘 인재를 키우기 위해 산학 연계 교육을 강화해야 한다고 밝혔습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "3280",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5307644",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "「재난안전사업 관리체계 평가」 발간",
          "easy1_title": "재난안전 예산이 어디에 쓰이는지 더 꼼꼼히 따져봐야 합니다",
          "easy1_desc": "국회예산정책처가 재난안전사업 관리체계를 살펴봤더니, 지금의 분류 방식으로는 예산이 재난의 대비 단계에 쓰이는지 대응 단계에 쓰이는지 구분하기가 어렵다는 거예요. 뭔 소리냐면, 단계별로 돈이 얼마나 필요한지 정확히 알기 힘들다는 말이에요. 그래서 예산 분류를 더 세밀하게 나누고, 빠져 있는 연구개발사업도 다시 포함해서 재난 예산을 효율적으로 써야 한다고 밝혔습니다.",
          "easy2_title": "정부가 예산을 짤 때 사전협의 의견을 더 잘 반영해야 합니다",
          "easy2_desc": "행정안전부가 재난안전사업 예산을 미리 검토해서 의견을 내고 있는데, 정작 정부 예산안을 짤 때는 이 의견이 잘 반영되지 않는다는 문제가 있어요. 실제로 행정안전부가 늘려야 한다고 했던 26개 사업이 오히려 2,147억원이나 줄어든 사례도 있거든요. 쉽게 말하면, 사전협의 제도가 실질적인 힘을 발휘할 수 있도록 예산 편성 과정과의 연결 고리를 더 단단하게 만들어야 한다는 겁니다.",
          "topic": "국회예산정책처는 재난안전사업의 관리체계를 점검하고 예산 편성 및 평가 제도의 실효성을 높이기 위한 개선 방안을 제시했습니다.",
          "points": [
            "사업 분류체계 정비: 현재는 대비와 대응 단계가 예산 분류상 통합되어 있어 성과 파악이 어렵다는 거예요. 뭔 소리냐면, 재난 예산의 효율성을 높이려면 이 단계를 분리하고 연구개발사업도 다시 포함해야 한다는 말이에요. 그래야 재난 위험을 줄이기 위한 투자가 어디에 우선순위를 둬야 할지 명확해지거든요.",
            "성과부진 사업의 개선: 2022년부터 2026년까지 2회 이상 미흡 등급을 받은 사업이 37개나 되는데요, 이 사업들의 부진 원인을 정확히 진단해서 예산 조정이나 사업 재설계 같은 근본적인 대책을 세워야 한다고 봤습니다. 또한 행정안전부와 기획예산처의 평가 결과가 서로 다른 경우도 있어서, 평가 항목과 절차를 하나로 정리할 필요가 있다는 거예요.",
            "행정안전부 지원체계 보강: 재난안전사업의 규모는 커지는데 이를 담당하는 인력은 턱없이 부족한 실정이에요. 2026년 기준으로 단 3명의 직원이 수백 개의 사업을 평가하고 사전협의까지 맡고 있거든요. 그래서 전담 인력을 늘리고 평가 업무를 행정안전부로 일원화해서 전문성을 높여야 한다고 밝혔습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "2010",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5307643",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "산업부 보도 RSS(POST)",
          "kind": "산업통상부 보도자료",
          "writer": "산업통상부",
          "title": "(참고자료)12차 최고가격, 11차 수준으로 동결",
          "easy1_title": "기름값을 지난번과 똑같이 묶어두기로 했습니다",
          "easy1_desc": "산업통상부가 11월 14일부터 4주 동안 적용할 12차 석유 최고가격을 지난 11차와 같은 수준으로 유지하겠다고 발표했습니다. 휘발유는 리터당 1,784원, 경유는 1,773원, 등유는 1,380원으로 동결한 건데요. 국제유가가 조금 내리긴 했지만 여전히 높고 운송비 부담도 크기 때문에, 민생 안정을 위해 가격을 올리지 않기로 결정한 셈입니다.",
          "easy2_title": "최고가격제를 써 보니 물가 잡는 데 효과가 있네요",
          "easy2_desc": "전문기관들이 분석해 보니 최고가격제를 시행한 뒤로 물가와 석유 가격이 안정되는 효과가 나타났다고 합니다. 한국개발연구원(KDI)은 올해 3월부터 10월까지 석유류 가격 상승률이 월평균 약 12%p 낮아졌다고 추정했는데요. 다른 나라들은 기름값 상승 폭이 커지는 동안 우리나라는 최고가격제 덕분에 상승률이 억제되는 성과를 냈다는 평가입니다.",
          "topic": "국제 정세 불안 속에서 민생 안정을 위해 석유 최고가격을 동결하고 그간의 성과를 점검했습니다.",
          "points": [
            "국제 유가와 운송비 상황: 중동 지역의 불안이 계속되면서 국제유가는 6월 말보다는 배럴당 20불 이상 높은 수준을 유지하고 있습니다. 게다가 호르무즈 해협 인근의 선박 피격 사건들로 인해 원유를 실어 나르는 운송비도 이전보다 상당히 비싸진 상황이에요. 이런 대외적인 위험 요소들이 여전하다는 게 정부의 판단입니다.",
            "최고가격제 운영 성과: 산업연구원의 보고서에 따르면 8월과 9월 우리나라 휘발유 가격 상승률은 전년 동월 대비 11.8%와 11.9%로 거의 변함이 없었습니다. 반면 해외 주요 국가들은 상승률이 더 커졌는데요. 최고가격제가 유가 상승을 막아내는 방어막 역할을 했다고 볼 수 있습니다.",
            "향후 운영 계획: 정부는 앞으로도 중동 정세가 불안한 만큼 상황을 꼼꼼하게 지켜보겠다고 밝혔습니다. 최고가격제를 계속 운영하면서 민생 안정을 도모하겠다는 계획인데요. 국내외 상황을 면밀히 모니터링하며 유연하게 대응하겠다는 입장입니다."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "point2 근거 원문에 없음",
          "body_chars": "1457",
          "link": "https://www.motir.go.kr/kor/article/ATCLe0854704d/172406/view",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "산업부 보도 RSS(POST)",
          "kind": "산업통상부 보도자료",
          "writer": "산업통상부",
          "title": "(참고자료)구글社 지도 국외반출 허가 조건이행 결과 협의체 보고",
          "easy1_title": "구글이 우리 지도 데이터를 쓰려면 보안 조건을 지켜야 합니다",
          "easy1_desc": "정부 협의체가 지난 2월 구글에 허가했던 지도 국외 반출 건을 다시 점검해 봤는데요. 구글이 좌표 표시를 없애고 영상 보안 처리를 하는 등, 정부가 내건 보안 조건을 제대로 이행했는지 확인했다는 말이에요. 쉽게 말하면, 구글이 우리 지도를 가져가서 서비스할 때 안보 문제가 생기지 않도록 꼼꼼히 따져 봤다는 겁니다.",
          "easy2_title": "보안 사고가 나면 24시간 안에 바로 대응하기로 했습니다",
          "easy2_desc": "구글은 앞으로 한국 지도 전담관을 두고 24시간 대응 체계를 갖추기로 했는데요. 만약 보안 시설이 노출되는 등 문제가 생기면 정부 요청을 받은 뒤 1영업일 안에 조치를 끝내야 한다는 겁니다. 비상 상황이 생기면 특정 기능을 끄는 등 안보 조치도 즉시 시행하기로 했다는 말이에요.",
          "topic": "정부 협의체가 구글의 지도 국외 반출 허가 조건 이행 결과를 점검하고 향후 관리 계획을 밝혔습니다.",
          "points": [
            "보안 조건 이행 확인: 구글은 대한민국 영토의 경·위도 좌표 표시를 제거하고, 군사·보안 시설은 정부가 보안 처리한 영상을 사용하기로 했습니다. 스트리트뷰 역시 보안 시설 내부와 주변 50m까지 삭제 조치했는데요. 쉽게 말하면, 구글이 우리 지도를 서비스하면서 안보 취약 요인을 실질적으로 줄이도록 만든 셈이에요.",
            "국내법 준수 의무 부과: 이번 조치로 구글은 국내 공간정보 관련 법령을 따라야 할 의무가 생겼습니다. 정부는 구글이 조건을 지키지 않으면 시정명령을 내리거나 허가를 회수할 수 있게 됐는데요. 국내 기업과 똑같은 법적 잣대를 적용할 수 있게 되었다는 점이 핵심입니다.",
            "국내 산업 상생 협력: 구글은 국내 공간정보 산업의 성장을 위해 국내 기업들과 상생 프로그램을 운영하겠다고 밝혔습니다. 정부는 구글과 국내 업계가 기술 협력이나 투자를 원활하게 이어갈 수 있도록 소통 과정을 지원할 계획인데요. 구글의 데이터 활용이 국내 생태계 발전으로 이어지도록 관리하겠다는 겁니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "3303",
          "link": "https://www.motir.go.kr/kor/article/ATCLe0854704d/172405/view",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "한화투자증권",
          "title": "[한화투자증권] 달바글로벌 절제된 성장",
          "easy1_title": "3분기 실적은 시장 기대치에 맞췄지만 매출은 조금 아쉬웠어요",
          "easy1_desc": "달바글로벌의 3분기 영업이익은 334억원으로 시장의 예상치인 컨센서스에 부합했는데요. 다만 매출액은 1,556억원으로 예상보다 낮게 나왔거든요. 계절적으로 비수기인 데다 원화가 강세를 보인 영향이 컸다는 말이에요. 쉽게 말하면, 이익은 잘 챙겼지만 전체 매출 규모는 기대에 못 미쳤다는 겁니다.",
          "easy2_title": "목표주가는 낮췄지만 해외 채널 확장은 계획대로 가고 있어요",
          "easy2_desc": "증권사는 원화 강세를 반영해 매출 추정치를 낮추면서 목표주가를 기존보다 31% 내린 200,000원으로 조정했는데요. 그렇지만 미국 코스트코나 유럽의 로스만 같은 해외 매장 입점은 계획대로 진행되고 있거든요. 앞으로는 새로운 제품인 히어로 SKU를 얼마나 잘 발굴하느냐가 중요해 보입니다. 쉽게 말하면, 주가 눈높이는 낮췄지만 사업은 차근차근 넓혀가는 중이라는 말이에요.",
          "topic": "달바글로벌의 3분기 실적 평가와 향후 성장 전략에 대한 증권사의 분석이에요.",
          "points": [
            "3분기 실적 분석: 3분기 매출은 비수기와 원화 강세로 컨센서스를 밑돌았지만 영업이익은 예상치에 부합했는데요. 국내에서는 세럼 리뉴얼과 선크림 용기 이슈가 정상화되었고 해외에서는 채널 확장이 이어졌다는 겁니다. 마케팅비 효율화로 비용 부담도 줄인 셈이에요.",
            "해외 시장 확장: 미국 코스트코 점포는 225개에서 400개로 늘어났고 2027년에는 전 점포로 확대될 예정인데요. 영국 부츠 입점에 이어 2027년 상반기에는 독일과 체코의 로스만에도 들어갈 계획이거든요. 해외 매출 비중이 이미 전사의 75%를 차지할 정도로 커졌다는 말이에요.",
            "향후 성장 과제: 증권사는 미스트 매출 비중이 낮아지고 있는 점을 언급하며 새로운 히어로 SKU 발굴이 중요하다고 봤는데요. 제품 집중도에 대한 우려를 해소해야 기업 가치인 밸류에이션을 다시 평가받을 수 있다는 겁니다. 계획대로 제품군이 확대된다면 더 유의미한 성장이 가능할 것으로 증권사는 판단했어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "10438",
          "link": "https://m.stock.naver.com/research/company/98185",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "미래에셋증권",
          "title": "[미래에셋증권] HMM 독보적인 원가 경쟁력",
          "easy1_title": "HMM이 남들보다 싸게 배를 사서 원가 경쟁력이 아주 탄탄합니다",
          "easy1_desc": "HMM은 경쟁사보다 한발 앞서서 배를 주문했거든요. 덕분에 같은 크기의 배를 사도 남들보다 매입 원가가 10% 정도 낮다는 말이에요. 배를 직접 소유한 비중도 높아서 고정비 부담이 적은 편인데요, 덕분에 시황이 나빠져도 영업 흑자를 계속 유지할 수 있는 셈이에요.",
          "easy2_title": "벌크선 비중을 늘려서 컨테이너 시황이 흔들려도 수익을 지키겠다는 계획이에요",
          "easy2_desc": "컨테이너선은 시황에 따라 변동이 큰 편인데요, HMM은 벌크선(철광석 등 원자재 운송 선박) 비중을 40%까지 늘려서 수익의 하방을 방어하겠다는 계획이에요. 장기 계약을 통해 안정적인 현금 흐름을 확보하려는 전략인 거죠. 쉽게 말하면, 한쪽이 흔들려도 다른 쪽이 버텨주는 구조를 만들겠다는 겁니다.",
          "topic": "미래에셋증권은 HMM이 독보적인 원가 경쟁력을 바탕으로 실적을 개선하고 있으며, 향후 선대 포트폴리오 다변화를 통해 안정적인 수익을 추구할 것으로 봤습니다.",
          "points": [
            "3분기 실적 호조: HMM의 3분기 영업이익은 1조 3,946억 원으로 시장 기대치를 59%나 웃돌았는데요. 수송량과 운임이 모두 늘어난 데다 매출 원가까지 9.3% 줄어들면서 영업이익률이 33.8%까지 크게 올랐다는 겁니다.",
            "목표주가 상향과 주주환원: 증권사는 실적 전망치를 높이면서 HMM의 목표주가를 기존 26,000원에서 28,000원으로 올렸습니다. 또한 주주환원 정책을 배당성향 30% 이상으로 단순화하면서 주주들에게 돌아갈 몫을 더 분명히 했다는 평가예요.",
            "선대 전략과 네트워크 강화: 앞으로는 컨테이너와 벌크 비중을 6대 4로 맞추고, 자체 소형 피더선(소형 컨테이너선)을 발주해 운영할 계획인데요. 이를 통해 제3자에게 내던 용선료를 아끼고 새로운 항로를 개척해 네트워크 유연성을 높이겠다는 전략입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "15180",
          "link": "https://m.stock.naver.com/research/company/98184",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "신한투자증권",
          "title": "[신한투자증권]  에이피알 vs 달바글로벌 3Q26 실적 비교",
          "easy1_title": "에이피알은 매출을 키우느라 수익이 조금 줄었어요",
          "easy1_desc": "에이피알은 해외에서 인기가 많아지자 공격적으로 매출을 늘리는 전략을 썼거든요. 그런데 매출이 급격히 커지면서 물류비나 광고비 같은 비용도 함께 늘어난 거예요. 덕분에 매출은 많이 올랐지만, 정작 남는 이익은 매출 성장률만큼 따라오지 못했다는 말이에요. 쉽게 말하면, 덩치는 확실히 키웠지만 그 과정에서 비용 부담이 커진 셈입니다.",
          "easy2_title": "달바글로벌은 수익을 지키려고 성장을 잠시 늦췄어요",
          "easy2_desc": "반면 달바글로벌은 물류비 부담이 커지는 상황에서 무리하게 매출을 늘리기보다 수익을 챙기는 쪽을 선택했는데요. 그래서 해외 수요가 괜찮았는데도 매출 성장 속도는 상대적으로 조절한 것으로 보입니다. 이는 수요가 줄어서라기보다 회사가 의도적으로 수익성 방어를 우선순위에 뒀기 때문이라는 거예요. 쉽게 말하면, 내실을 다지기 위해 속도 조절을 했다는 말입니다.",
          "topic": "증권사는 에이피알과 달바글로벌의 3분기 실적 차이가 물류비 부담에 대응하는 사업 전략의 차이에서 비롯되었다고 봤습니다.",
          "points": [
            "물류비 부담과 실적 차이: 같은 물류비 환경에서도 에이피알은 외형 확대를, 달바글로벌은 수익성 방어를 우선순위에 뒀는데요. 그 결과 에이피알은 매출 성장은 컸지만 수익성이 희석되었고, 달바글로벌은 수익성을 지키느라 성장 속도가 둔화되는 차이가 나타났다는 겁니다.",
            "물류 구조 정상화 전망: 증권사는 2027년 1분기부터 유럽 등 주요 시장에서 현지 재고가 쌓이면서 물류 구조가 정상화될 가능성에 주목했는데요. 긴급한 항공 운송 대신 해상 운송 비중이 높아지면 물류비 부담이 줄어들면서 양사 모두 수익성이 개선될 것으로 봤습니다.",
            "밸류에이션과 투자 전략: 증권사는 2027년 실적 기준으로 에이피알과 달바글로벌의 주가수익비율(PER)이 성장 잠재력에 비해 낮은 수준이라고 평가했는데요. 단기적인 물류비 우려가 주가에 과도하게 반영되었을 수 있으니, 물류비가 일시적 비용으로 확인되는 시점을 주가 방향의 분기점으로 보라고 조언했습니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "3466",
          "link": "https://m.stock.naver.com/research/industry/46991",
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
          "val": 176,
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        "events_out": {
          "val": 5,
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        "single_out": {
          "val": 158,
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        "all_clusters": {
          "val": 163,
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        "bad_numbers": {
          "val": 0,
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        "calls": {
          "val": 2,
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        }
      },
      "events": [
        {
          "rank_by_count": 1,
          "name": "삼성전자 반도체 협력사 기술 세미나",
          "easy": "삼성전자 DS부문이 협력사 1000여 명을 대상으로 반도체 기술 세미나를 열고 협업을 강조했습니다. 반도체 신소재 개발 과제를 공유하고 기술 협력을 강화하려는 취지인데요. 엔비디아 리스크로 인한 시장 불확실성 속에서 공급망을 다지고 경쟁력을 확보하려는 움직임으로 보입니다.",
          "quote": "삼성전자, 협력사 1000명과 AI 반도체 기술 공유",
          "member_count": 5,
          "sample_articles": [
            {
              "n": 96,
              "title": "삼성전자, 반도체 신소재 개발 과제 공유…협력사 협업 강조 - 매일일보",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE4xbGtTeEU2QnR1SUNHdWVEUlR3U1VTMEN4TjgzdGhjeWwzbFJ4VzhBYXJWRDdYeVZMNHIzZVlhODFLb1l2eHVXajJhRm56c20xamVIbUtFa29DOXBOT01rWWRaTFo?oc=5"
            },
            {
              "n": 97,
              "title": "삼성전자 DS부문, 협력사 대상 '반도체 테크 세미나' 개최 - 월요신문",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1EWWpnVWJNbzRoWGFwaE84VXYyN05PalNHODhKVHNZazFCZTgyT3hTNFZLWk5fMVRPcTdzMW8wUDdnNmdnMUtzTFBVbGwzQ2JKQ0FsR0lhTU4yUmNldnZzR05nYU1uQVY1a0E?oc=5"
            },
            {
              "n": 99,
              "title": "삼성전자, 반도체 협력사 1000명과 기술협력 세미나 - 스페셜경제",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBfdV9VeHF6U19RUkkwdzdHODhMa3huOHliZmVnanJ5a3FkQkx3a3lUUHdhdFVqSUVCZHJma1EwMUtDa2NJSzdYbXFyODZrakltcmJsT2luUHV5RFpGc3hPejBDXy16R0ZYbC1Obw?oc=5"
            },
            {
              "n": 100,
              "title": "삼성전자, 협력사 1000명과 AI 반도체 기술 공유 - 뉴스핌",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE85ZHlFUDV1SGtWMlFkNWNycTJycEV3YVAwNzFkeFdBbGx1UmtzaDFnRXg2NjhCYU9zN1NDQWxOSlliaXFsZF9WcmVLWFRId1JDdklLaTNmc1ZCZFJY?oc=5"
            },
            {
              "n": 102,
              "title": "삼성전자 DS, 협력사 1000명과 AI 반도체 기술 공유 - 아이뉴스24",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiSEFVX3lxTE1CNVdvRmYwS1hRVmFBZDczY3UxM184UF9SS3Y4VDRyZURmZEQwVzZEU2puZmJXM0ZUQ0kwZlRMRlNIdmZ3OTd1Nw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 2,
          "name": "LG엔솔 버테크 ESS 플랫폼 출시",
          "easy": "LG에너지솔루션의 사내 독립기업인 LG엔솔 버테크가 에너지저장장치(ESS) 운영을 최적화하는 AI 플랫폼 '에어로스 인텔리전스'를 출시했습니다. 배터리 수명과 수익성을 관리하는 소프트웨어 기능을 고도화한 것인데요. 전력망 연계 사업 모델을 강화하려는 전략으로 풀이됩니다.",
          "quote": "LG엔솔 버테크, ESS 운영 최적화 '에어로스 인텔리전스' 출시",
          "member_count": 5,
          "sample_articles": [
            {
              "n": 121,
              "title": "전북자치도, 민간기업과 ESS·전력망 연계 사업모델 발굴 나서 - 장애인문화복지신문",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE5TSTZIV0M3X3dtVnlDZS1WNms0MjVRVTJqV2p3RlhaMVozakZTWkRCQ2JSYXViSjNyWV95R2FaVFVVOUJvQkYxTW9kM0wwVDVqYmVNVlkzSHUyQ2RRUkFldEJZZGc1ZXdwSGJv0gFvQVVfeXFMT0lUc0kwdGl6TU9CWE1BVjZ5SlBxQ1dLb2pRVWlQbnFkVUxpcmZIaDJCQzRWbHlPTDM3Nm51cERtNkw5RTJCSmVLQnJqR3VUNkU0TlJqRjdqeUZSelZoOF9Bd1RPQzZUWExqSVAzQlJR?oc=5"
            },
            {
              "n": 123,
              "title": "LG에너지솔루션 버테크, ESS 운영 최적화 플랫폼 '에어로스 인텔리전스' 출시 - 더구루",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFB2NklPa2FVSFRJN2pQd0RnWGV6bnFDdDR3RGkya1JuRFhYVG5Pam5BMlo5NmJnZkZHSFp4MkswWDlGZ2thLWJaNFF5WEwya3pQN184RVJydGNBb1I5SnBWakxSbw?oc=5"
            },
            {
              "n": 125,
              "title": "LG엔솔 버테크, ESS 운영 SW 고도화…배터리 수명·수익성 관리 - 더트래커",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE96a1M3eGRjVGRTRnhyd1hTS2Q5X1liNkVDUERyX1huaktIQ2UwOTJKb3hJMDBpdUZRU1pNa0pSSHBKdG9GN1JwcUpYQTFXdDFxLWd3Nmd1NDE?oc=5"
            },
            {
              "n": 127,
              "title": "LG엔솔 버테크, ESS 운영 최적화 '에어로스 인텔리전스' 출시 - 뉴스1",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFB3bE8zaVF1YjVTemEtNDhHVGFFVWRRZXo4VnZidFprZG93TGd6TjJkcEZwSkpfcDFxWmgweHMzMXRSVnM0LWEwRWZRTWw3bEEtc0RDMXB2b3I2YmVVd2VIdWcxUjY?oc=5"
            },
            {
              "n": 122,
              "title": "LG에너지솔루션 버테크, ESS 운영·예측 AI 플랫폼 출시 - https://www.2news.co.kr/",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE41bHJJY3Q3dGw1aS1ubWxMcXhLc1lRZGtVMThGVWJxY2JKMEg0M0xDcFVNanluc1cyd2NrcTZacEtGQ1lRVWo5OUpjNUYtR2J1aWxOWG1LODFrSjJXUGVSUW9rbXM2R2xh?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 3,
          "name": "국제 배터리 엑스포 2026 포항 개최",
          "easy": "포항에서 대한민국 이차전지 산업의 현재와 미래를 조망하는 '국제 배터리 엑스포 2026'이 열렸습니다. 소재부터 로봇 기술까지 다양한 배터리 관련 기술이 전시되었는데요. 시민들이 직접 체험할 수 있는 축제 형식으로 진행되어 배터리 산업에 대한 관심을 높이고 있습니다.",
          "quote": "국제 배터리 엑스포 2026 포항 개막",
          "member_count": 4,
          "sample_articles": [
            {
              "n": 182,
              "title": "배터리 기술, 시민 일상 속으로···보고 즐기는 체험축제 - 에너지신문",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE1Pb3hUay1jSVE5dlh1LVVpYkdOb0ctRmtld29DYldnTXNzVzR5ZnNHb3ZSSlJ0bS1QY2tIUFJIQ1ZJV2JqcUZrSHNodUM5czZFLTc0eHpUeXF5c2dIQmFTTmNrV0FQNVQ5Sm13WnV6bmVmZw?oc=5"
            },
            {
              "n": 184,
              "title": "국제 배터리 엑스포 2026 포항 개막 - 영남경제",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9HLVI4WUdWSWtIYnc5d0V6NEZobWpaNEZjTTJvTDM4bm9mWFJlSVlOaXJsbDR1ZVk4SWZWTUFQa1RoeTh1Tzh3QTRNQ1NIMzEycXFEdk8tZWFaOVlPS21aeGtRaGloaU0?oc=5"
            },
            {
              "n": 187,
              "title": "'국제 배터리 엑스포 2026 포항' 화려한 개막… 대한민국 이차전지 산업의 현재와 미래 한눈에 - 글로벌경제신문",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5xbEp6OGVxTjhILTJrUGo3WGZYcUxNSjhtSFI2UG42ZWN5RnFIa2FnNHEtTno0dmtMcnhGNVU2YVhWNFRhN2dnMkwwY1pRSHRpRUduQTZEejhJNlJrTko1NmlPd2RLcFUyNlhRbtIBcEFVX3lxTE02a3EzVkVLV0JmRks4Ui1JUWh2cTNHTWJQeTk1eDJvX2tHRmZpbGxrcHdCUWcwODRqMzBfOW1RWk9yUVZxMXY1ekliRExyd21DbFB3QkZvbTFTQXdpUXpLUllnbnlpUzJoOGNfekVpMGI?oc=5"
            },
            {
              "n": 188,
              "title": "소재부터 로봇까지, 이차전지 미래 기술 포항에 집결 - 서울경제",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1vYXpVNEdsNDRoQ2xOZnR1eV8xdGxac2FyWGdUVS1UNF90RDhlZzZYNlFoNE9mMDZMX1VvQWZpMktrem5CZVhMUnZWSTJReXkxcGfSAVNBVV95cUxNZXI0NF83b1lVem1oRzN5Wi1VZzJlSmxtQXl4X0JRUG1Fc3VZMkRTS2NPeHZzQWtKM1FrdDA3VVdTMlUwY0QxN1BNVVBzeFUxcVRLbw?oc=5"
            }
          ],
          "flags": [
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 4,
          "name": "한전 전력망 입지선정 100호 달성",
          "easy": "한국전력이 전력망 구축을 위한 입지선정 100건을 달성했습니다. 최근 2년간 실적이 2배 이상 증가했는데요. 주민 소통을 강화하고 입지 선정 과정을 투명하게 운영해 전력망 사업에 속도를 내겠다는 계획입니다.",
          "quote": "한전, ‘전력망 입지선정’ 100호 달성…2년간 입지선정 실적 2배 이상 증가",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 70,
              "title": "한전, 전력망 입지선정 100건 돌파…주민 소통 강화에 사업 속도 - 메가경제",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE5Xb25MUHl0WEFrUXBVUDQ0NG11cUEyb0QzVnFwak1idVJCZFF6TzFsWjFxeURNU181dUUtVkc2NWxTaVhWZTk5SkplZWtfZ1U1Z0djVVgzSmNubk5vNzB0RERjbElvclpoYmJCSkExYjJoQdIBckFVX3lxTE5Xb25MUHl0WEFrUXBVUDQ0NG11cUEyb0QzVnFwak1idVJCZFF6TzFsWjFxeURNU181dUUtVkc2NWxTaVhWZTk5SkplZWtfZ1U1Z0djVVgzSmNubk5vNzB0RERjbElvclpoYmJCSkExYjJoQQ?oc=5"
            },
            {
              "n": 71,
              "title": "한전, ‘전력망 입지선정’ 100호 달성…2년간 입지선정 실적 2배 이상 증가 - 부산일보",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTFBTQkd5VWtPdjhibDQ3SlYwcjBXTEVwb3NjRGhURzlITHlOUjVoU2E0QmFBSlRLdUdOVzFvMFRyUnRpMzdLUm5qZWJCWnN4LUpIRmhHQUdxTXFSM0ZadXBSRlhaVTRtVjZtWE5paHItQWR3RFZxbW5GNA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 5,
          "name": "한전KDN 양자컴퓨팅 기술 협력",
          "easy": "한전KDN이 한국퀀텀컴퓨팅과 손잡고 에너지 분야의 양자 보안 및 양자컴퓨팅 기술 협력을 추진합니다. 국가 양자내성암호 전환 정책에 선제적으로 대응하기 위한 것인데요. 양자 기술을 활용해 에너지 신사업을 발굴하고 보안 체계를 강화하겠다는 목표입니다.",
          "quote": "국가 양자내성암호(PQC) 전환 정책 선제 대응… 한전KDN, 한국퀀텀컴퓨팅과 에너지 양자 신사업 발굴 가동",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 1985,
              "title": "한전KDN, 한국퀀텀컴퓨팅과 양자보안·양자컴퓨팅 기술 협력 - 에너지데일리",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE5vRlA4M0NUdk9aeENDZzE2MmppVjJhYzR1Zkx3LXM0bjlHM0UzMkNKNHBsSWthdGo4X3ZEVXVNQl9hdC1GWHdFOVhkTlBoRDViazFnSmtFXzhGZU1IZGZ5WTZsLVo0RzkxYUlpdUM3dzFPQQ?oc=5"
            },
            {
              "n": 1991,
              "title": "국가 양자내성암호(PQC) 전환 정책 선제 대응… 한전KDN, 한국퀀텀컴퓨팅과 에너지 양자 신사업 발굴 가동 - 청년투데이",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9fTzRrR01kQjF1YU1vUHhGWjNJVllFaEN3RVF1ekl5Q1NiOHVXeUQ0aGRqRUZqQTRMTHRqZjlQcG04QVJid3RPdzYzcG8xdG1HVlNDRnJYNF9VZnF4NW9WUlpTT01UNC11Q0E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        }
      ],
      "single_articles": [
        {
          "rank_by_count": 6,
          "name": "'젠슨황 사임' 여파 지속?…하이닉스, 3% 급락…삼전도 0.96%↓(종합)",
          "easy": "",
          "quote": "'젠슨황 사임' 여파 지속?…하이닉스, 3% 급락…삼전도 0.96%↓(종합)",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 93,
              "title": "'젠슨황 사임' 여파 지속?…하이닉스, 3% 급락…삼전도 0.96%↓(종합) - 연합뉴스",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBOLUt0ZG41NC1nb2pMekt2WWxHQzV3NlZjOGltcWlFand5X3lUODB4QkFiY1FXVTlBLUdSdVZHd1Z2cjJmM1hkZGx6cDB4UGpmcTlqeUtJNGI3OWPSAWBBVV95cUxQZ0Z3RFpvNjBsUGxTVExsWUcwbmVzdGI0OEhTNlIwU295U29nWXEzYnBRR1pEVkQ3UWx1WEJCWk90S1ZiQ3NKMmhhTlJPSndtUkQyLVdtQ19OdXRRa3pkZ2s?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "젠슨 황 사임 및 엔비디아 리스크",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 7,
          "name": "\"양손으로 엔비디아 주식 사들인다\"…젠슨 황 충격, 주가 바닥 쳤나 - 머니투데이",
          "easy": "",
          "quote": "\"양손으로 엔비디아 주식 사들인다\"…젠슨 황 충격, 주가 바닥 쳤나 - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 104,
              "title": "\"양손으로 엔비디아 주식 사들인다\"…젠슨 황 충격, 주가 바닥 쳤나 - 머니투데이 - 머니투데이",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE1Wc3laQ1M5WEY5QWVmN29tRWpLM3UxS3pIdUtOVVNYcU5mNzZGSm5YRVE5MEEzMEVrQ0pNQ1oxUTg5Q25tSG5Qd0QtUWhGdTlObjQ2aFp0QnM5SkdJWG1kdWR6aHRoQVRW0gFuQVVfeXFMUEQ5YmdrWDJHc28xR0FmYTZnN1dRdHRNdVpvQjNiU3VLdFR4dncyeUJlMW50MjA3RGt6WDhKZ1JmZm1kUUZ0YlF4TGdHbHhrR1J4bnRQcDV2ajRTVkpLaGRxcnRLSWpCcVYxVUt2WUE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "젠슨 황 사임 및 엔비디아 리스크",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 8,
          "name": "엔비디아, Arm CEO 접촉설에 \"아직 누구와도 공식 연락 안 해\"",
          "easy": "",
          "quote": "엔비디아, Arm CEO 접촉설에 \"아직 누구와도 공식 연락 안 해\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 105,
              "title": "엔비디아, Arm CEO 접촉설에 \"아직 누구와도 공식 연락 안 해\" - MBC 뉴스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE90M1ktT2dRQ1N3bVJwajBYZElkNFQ5dVFSVHhEWjBEU2Z3emNDTmxnMlpPelJJYmlScXVhclViTk53VTRMd2JjU05tSVlmWDdpanhpaHg4OTI2X09xc2NCWmlJYlR0cHpKSjB2VG1GYXhROHlY0gF0QVVfeXFMUGpWaENhWlZCbmFaVWdFSklPNEhwUGlqOFRYUk5lZU1tZVR2LWpoQ05IdXJXdW1aZHFoYkFVdElUMDdFR2tHTFBDbjRhVGNNT1p2bVJXbjlucDVkX0NXeDVYWlpyT1BrZ29wa2xHeUs2dFJDeC0?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "젠슨 황 사임 및 엔비디아 리스크",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 9,
          "name": "‘엔비디아 사단’도 줄폭락…‘충격 못 견딘’ 삼전닉스",
          "easy": "",
          "quote": "‘엔비디아 사단’도 줄폭락…‘충격 못 견딘’ 삼전닉스",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 106,
              "title": "‘엔비디아 사단’도 줄폭락…‘충격 못 견딘’ 삼전닉스 - JTBC",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE9pTzBRZFMtZDVvREdGN2ctTnZYZkFyZ25CcmMzbGVUOHhnaGhvUW1TakNvNnFkaGl5VFZrR00xUVNjRUNhbURyclJwV2lhRmRzRUFtLQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "젠슨 황 사임 및 엔비디아 리스크",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 10,
          "name": "“진짜 보스 돌려달라”…엔비디아 직원들, 젠슨 황 복귀 청원",
          "easy": "",
          "quote": "“진짜 보스 돌려달라”…엔비디아 직원들, 젠슨 황 복귀 청원",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 107,
              "title": "“진짜 보스 돌려달라”…엔비디아 직원들, 젠슨 황 복귀 청원 - 중앙일보",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFA2bHhOaU5lSkN0MjktNUUwWHFfYUlkcWpZOTJpaV9mX0tUR09OVzE5c0p1b0MtSHNJQm9RRmx5Ml9EdTA2aHJ2ajdYRW5iQ2tLOVhESTFB?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "젠슨 황 사임 및 엔비디아 리스크",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 11,
          "name": "엔비디아 폭락에 '줍줍'했는데…\"당장 빠져나와라\" 강력 경고",
          "easy": "",
          "quote": "엔비디아 폭락에 '줍줍'했는데…\"당장 빠져나와라\" 강력 경고",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 108,
              "title": "엔비디아 폭락에 '줍줍'했는데…\"당장 빠져나와라\" 강력 경고 - 한국경제",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9Ja2ZXQ1RTYWdEWnJWVGFoTXdzaG9XbGZEb2pNS2Nkem5DbWFjWVNCZTFqZWt3c1BPOEJ1MFpJb3Jxa0pzdkh6TFNQZW83VFVDRzhwOTlpSUR6UQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "젠슨 황 사임 및 엔비디아 리스크",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 12,
          "name": "엔비디아 “차기 CEO 후보, 누구와도 공식 접촉 안 해”… ‘Arm 하스 접촉설’ 진화",
          "easy": "",
          "quote": "엔비디아 “차기 CEO 후보, 누구와도 공식 접촉 안 해”… ‘Arm 하스 접촉설’ 진화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 109,
              "title": "엔비디아 “차기 CEO 후보, 누구와도 공식 접촉 안 해”… ‘Arm 하스 접촉설’ 진화 - 조선일보",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMigwFBVV95cUxQbHZ2VFRoQ2k2NXMtQUdBTVRzSDlWMDdieC1fRU5CVFl3Q2pDVUJwZUpPUkgwUl9LSGpaSjF5elRRaUYwMGFZZk5ENWN1aWVJUzBnLTF2eWpIZUgyRXR0X2c3TTZhWjRBNFF6X05qU0NGdVowdE1TVmdHOVp3UDdXSXRVcw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "젠슨 황 사임 및 엔비디아 리스크",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 13,
          "name": "[뉴욕마켓워치] 美 물가 경계 속 엔비디아 후폭풍…주식·채권 혼조·달러↑",
          "easy": "",
          "quote": "[뉴욕마켓워치] 美 물가 경계 속 엔비디아 후폭풍…주식·채권 혼조·달러↑",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 110,
              "title": "[뉴욕마켓워치] 美 물가 경계 속 엔비디아 후폭풍…주식·채권 혼조·달러↑ - 연합인포맥스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE05ekFnSXZzbzI5ZGdIRGZhemw2MG5ldzFDNll2NURaT2VKdnM0M1N5dzhBclh0aEF6WlcwMnRHSGh4QVVOa09KVThGRDJZWU1nVTZPc2NScW53clhjUGRnWkZIVnRXN1JRZ3g1SW5sODI?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "젠슨 황 사임 및 엔비디아 리스크",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 14,
          "name": "주가 하락에 ‘줍줍’ 美 개미들…“엔비디아서 당장 나와라” 투자거물 경고, 왜?",
          "easy": "",
          "quote": "주가 하락에 ‘줍줍’ 美 개미들…“엔비디아서 당장 나와라” 투자거물 경고, 왜?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 111,
              "title": "주가 하락에 ‘줍줍’ 美 개미들…“엔비디아서 당장 나와라” 투자거물 경고, 왜? - 매일경제",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5Tbk1nMHlfOTBKTXBYSUVDMlBqNW1abktmVlM2ZnpaUlBvLURpY1NMb0xIdWNzeVh1Zk9oMk1pSS1zXzJQXy1Bb2dyNExDaFJQVGc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "젠슨 황 사임 및 엔비디아 리스크",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 15,
          "name": "미 민주당, ‘젠슨 황 스캔들’에도 대중국 칩 수출 승인한 트럼프 정부 조사",
          "easy": "",
          "quote": "미 민주당, ‘젠슨 황 스캔들’에도 대중국 칩 수출 승인한 트럼프 정부 조사",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 151,
              "title": "미 민주당, ‘젠슨 황 스캔들’에도 대중국 칩 수출 승인한 트럼프 정부 조사 - 경향신문",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFAybnBkdTNXX3dpek53bmo1bGNKSnl3aHhkT2VobDJaTzJ2RXB1aEpxY3V4V1NSSEJ2WXRiNkdlVVB4VEtuYTdHRENCcXoxYjByV0R3STd4cUFhM2hGaUhj0gFfQVVfeXFMUDJucGR1M1dfd2l6TnduajVsY0pKeXdoeGRPZWhsMlpPMnZFcHVoSnFjdXhXU1JIQnZZdGI2R2VVUHhUS25hN0dEQ0JxejFiMHJXRHdJN3hxQWEzaEZpSGM?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "젠슨 황 사임 및 엔비디아 리스크",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 16,
          "name": "젠슨 황·러트닉 美 의회 증언대 선다…'메가스피드·334억 기부' 정조준",
          "easy": "",
          "quote": "젠슨 황·러트닉 美 의회 증언대 선다…'메가스피드·334억 기부' 정조준",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 153,
              "title": "젠슨 황·러트닉 美 의회 증언대 선다…'메가스피드·334억 기부' 정조준 - 뉴스1",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBodlNLbmVZWVYydkNyNDFhT2FZc2QzTnFzVEtiNGZOdUZYLWhqRFozZlcwOGtkSjgzbVRrRlBGYnA3MGZCLUNOTExBVTlTVUtodXJqQ3h0Y18?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "젠슨 황 사임 및 엔비디아 리스크",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 17,
          "name": "젠슨 황 스캔들, 트럼프 정부 조사로…美의회, 반도체 中수출 승인 살핀다",
          "easy": "",
          "quote": "젠슨 황 스캔들, 트럼프 정부 조사로…美의회, 반도체 中수출 승인 살핀다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 154,
              "title": "젠슨 황 스캔들, 트럼프 정부 조사로…美의회, 반도체 中수출 승인 살핀다 - 한국일보",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE91YUxnNWNnR016UGVKQlp1YWdjSE5YN2lvRzFWME9vbU5Pb1hJSThyM1dDQWlWV0I1T0dOajVqejBsY3JrTUxwSkV2ZHFlVVNxNlNiRnVVWnI4OVd1TEg3NTJ3dk9MbTVZdlRudTVwWWlLdmPSAXNBVV95cUxPdWFMZzVjZ0dNelBlSkJadWFnY0hOWDdpb0cxVjBPb21OT29YSUk4cjNXQ0FpVldCNU9HTmo1anowbGNya01McEpFdmRxZVVTcTZTYkZ1VVpyODlXdUxINzUyd3ZPTG01WXZUbnU1cFlpS3Zj?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "젠슨 황 사임 및 엔비디아 리스크",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 18,
          "name": "\"젠슨황 스캔들 후폭풍…강력한 美 대중 수출통제 나설 것\"",
          "easy": "",
          "quote": "\"젠슨황 스캔들 후폭풍…강력한 美 대중 수출통제 나설 것\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 156,
              "title": "\"젠슨황 스캔들 후폭풍…강력한 美 대중 수출통제 나설 것\" - 이데일리",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMigAFBVV95cUxPa0Fic2t6V0Z1Sjh0Y1NHWlJPOXQ3azlid2hRaXR6TWZyV2VieWZIdlpTbHZUM09pWDJoOU9pNThncURuMTdhNEFia2JfaXRhQkRxRGxHa3B5V0llWHhEdXlTdUNLUEU3OXlJQVRVcHI3VUxQM0t6VlVMSU1CQVNxMQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "젠슨 황 사임 및 엔비디아 리스크",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 19,
          "name": "젠슨 황 없는 로봇 생태계…아틀라스 등 휴머노이드 동맹 ‘촉각’",
          "easy": "",
          "quote": "젠슨 황 없는 로봇 생태계…아틀라스 등 휴머노이드 동맹 ‘촉각’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 178,
              "title": "젠슨 황 없는 로봇 생태계…아틀라스 등 휴머노이드 동맹 ‘촉각’ - 뉴스토마토",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5VdlBQSERnOEFCbjhnNUtBeUpvWTEzbFMtZmxxLVRZX1NvbEZpb2FJTkFhSW16ZEkzeFdjRGYySHppVV9uUzlOOVNrX0RxY3VVeDhZa0VhOVZ2Z1MzN3B1Wg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "젠슨 황 사임 및 엔비디아 리스크",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 20,
          "name": "젠슨 황 스캔들, 미중 반도체 전쟁 다시 불붙였다",
          "easy": "",
          "quote": "젠슨 황 스캔들, 미중 반도체 전쟁 다시 불붙였다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 197,
              "title": "젠슨 황 스캔들, 미중 반도체 전쟁 다시 불붙였다 - OBC 뉴스",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBENGtSY1VMZXgzUC0tSDVaWmxDSGg5SmRDQ0hUWjg4XzlXRXBhMFpqX2JheTBGRFZMWkxxSkxxcDk0bDQzZlpzYTBCVVZTNnU4M1Izak55YnRIRXFZeHNEcks4V3JrTzk3T3c?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "젠슨 황 사임 및 엔비디아 리스크",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 21,
          "name": "트럼프, 젠슨 황 사임 직전에…뜻밖의 발언 [지금이뉴스]",
          "easy": "",
          "quote": "트럼프, 젠슨 황 사임 직전에…뜻밖의 발언 [지금이뉴스]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 198,
              "title": "트럼프, 젠슨 황 사임 직전에…뜻밖의 발언 [지금이뉴스] - YTN",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMidkFVX3lxTE90WEFKTE1rMkc0ZjdrZFN1ZE5rSlVibTlqLW5UbkFnd2NsRlRTY0hoRTZETWxCdExGRzlUWW5KT2VoR2ZTWGxob0NuV1cydXQ0eFJUbHlmT3Y4eEU5THVOcVA0WXd5UHVyTXg2NTRKelB1VnNLV3c?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "젠슨 황 사임 및 엔비디아 리스크",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 22,
          "name": "젠슨 황 \"내 총이 너무 강력해\"…성적 농담?, 이재용 회장 포옹한 영상 보니",
          "easy": "",
          "quote": "젠슨 황 \"내 총이 너무 강력해\"…성적 농담?, 이재용 회장 포옹한 영상 보니",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 199,
              "title": "젠슨 황 \"내 총이 너무 강력해\"…성적 농담?, 이재용 회장 포옹한 영상 보니 - JTBC",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1ibkp1OWtnOGRaWlVvV2F0MjVMcXZlb2dteG83YW9lN1Bqb2tjVDB3b1JULWMyR0ZNME80OXpaN0s1a0Q0WnZyQlAtN0lIX051Z0E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "젠슨 황 사임 및 엔비디아 리스크",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 23,
          "name": "중국 AI 업계 ‘젠슨 황 스캔들’ 직격탄…AI칩 사재기에도 나서",
          "easy": "",
          "quote": "중국 AI 업계 ‘젠슨 황 스캔들’ 직격탄…AI칩 사재기에도 나서",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 200,
              "title": "중국 AI 업계 ‘젠슨 황 스캔들’ 직격탄…AI칩 사재기에도 나서 - 경향신문",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5uSjBMM3dTcU5vT1ViWFlkMDdsQXpNaVZaekpqSzl0MWRVMjZoRndxTjlLdWo3blRIcWJfZkZXcW5pYnQ3R1BXMUhsMjRFNjZyM3dtX2F6cFFMUdIBX0FVX3lxTE5rUENSS1BVT0ZNVjFuVWNZbDdPZnlzSEQtczFLN1BVQWZLQTJOZ3Vqbk9iS1lYUjhvc0dWRExJQU5zSVd1UkNnRkR4N3JZOTBUUDgxUHlsQTNWY0xkcFdj?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "젠슨 황 사임 및 엔비디아 리스크",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 24,
          "name": "젠슨 황 사임에 정부 긴급 점검…GPU 공급·협력 유지 총력(종합)",
          "easy": "",
          "quote": "젠슨 황 사임에 정부 긴급 점검…GPU 공급·협력 유지 총력(종합)",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 201,
              "title": "젠슨 황 사임에 정부 긴급 점검…GPU 공급·협력 유지 총력(종합) - 연합뉴스",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5VSmlmWFlpNHZQRF9ONS1IcUZMZ3RfcHI3Wlk0TU9IU2pWVU8tZVdKU3oybXA3YVlGMjhmcDhkSWJVcko3VjE5U0NNZDBsVU5sMktZeXZXXzhWS2_SAWBBVV95cUxQWTFkSzE2TUtIV0Z3U3dxZnplTTRqZVNwWlZ1RXcybnBMelF5V0hfVW1NaHNGc3dvbFAzVDRWSDBPb18tdjAwd2lSXzhjcjJxNHNRd1N1djg3blFYaFczcE4?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "젠슨 황 사임 및 엔비디아 리스크",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 25,
          "name": "전력주 차익실현 매물 쏟아졌다…한국전력 하락 주도",
          "easy": "",
          "quote": "전력주 차익실현 매물 쏟아졌다…한국전력 하락 주도",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 56,
              "title": "전력주 차익실현 매물 쏟아졌다…한국전력 하락 주도 - 핀포인트뉴스",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE5uWU9seUg4U2tGVEhla2NnUmtacGo2ZHBxTzFTa2xJSnFVWTc5Q0hiWGRhaGxJYW9DdzlwR09fRXhYQlh5SHFYS24wMl9ZTE9hb00xRFNmYjYwMll6SV9CTEF2ZGVUMVN6aXNIUEFuM3hIX3fSAXdBVV95cUxQVG83ZWo4VFdlTlFGa2E2OFl1dURkS0F4c3lGcThYSW0tRnV0WWVVblpXSllKcnpmZ09XdHJlZWoyMVlnT2tnVXhoVm13Tm9xWHRTYm53UHNrTmpBTnJmVF9zS0dCZ1NrbmJsdjlFTW1hdy1zdXVOOA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "한국전력 실적 부진과 주가 하락",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 26,
          "name": "한국전력, 3분기 어닝쇼크에 4분기도 먹구름…“유가 하락 반영까지 4~5개월”",
          "easy": "",
          "quote": "한국전력, 3분기 어닝쇼크에 4분기도 먹구름…“유가 하락 반영까지 4~5개월”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 58,
              "title": "한국전력, 3분기 어닝쇼크에 4분기도 먹구름…“유가 하락 반영까지 4~5개월” - 녹색경제신문",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE82cmhvU01VejFwYTVkSkxTQTV5cUlZVWRKM09XUHFuaUExUDJBUklka3lTVGwzMFYyV3lpdVVrVEtzclhoNHpFNjM5X1VJNDlCLV9yWjRrS3VtMkRZNHk4Wkc2TDRPNlJt?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "한국전력 실적 부진과 주가 하락",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 27,
          "name": "한국전력 주가, 오늘 왜 급락하나?",
          "easy": "",
          "quote": "한국전력 주가, 오늘 왜 급락하나?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 59,
              "title": "한국전력 주가, 오늘 왜 급락하나? - Investing.com 한국어",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTE9YLWFxT1UzM2thTHNSMERpWjNQcDRNY2FPOWNLRzZGLXNwTzl2VmhZYkFURUpNQUZjLTRHZU8wMUMzakVKM3k1dEdqc0hYQUNJaVRib2hub28wTGpjRzlIdFJPN0RUQjhTSzhXM0JRQ0tUTG9qcjVZ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "한국전력 실적 부진과 주가 하락",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 28,
          "name": "[특징주] 한국전력, 3분기 영업익 71% 급감 '어닝 쇼크'…9.79% 급락 마감",
          "easy": "",
          "quote": "[특징주] 한국전력, 3분기 영업익 71% 급감 '어닝 쇼크'…9.79% 급락 마감",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 60,
              "title": "[특징주] 한국전력, 3분기 영업익 71% 급감 '어닝 쇼크'…9.79% 급락 마감 - https://www.moneystorm.kr/",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1pbkN6ZXpiXy0xSWJPQWx1TkY4c0RNWDRIT1dRYkQ2UEJpYmFKOXliTlFZVGcwT05OLUwtV3ZvVFFRUjBMRkJxckhqTVQxbWZLakJHeXljZnZRR0hxTk5FVmtCQV9qMTJodWc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "한국전력 실적 부진과 주가 하락",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 29,
          "name": "“4분기 영업적자 가능성까지…한국전력, 실적 불확실성의 터널 언제 벗어나나”",
          "easy": "",
          "quote": "“4분기 영업적자 가능성까지…한국전력, 실적 불확실성의 터널 언제 벗어나나”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 61,
              "title": "“4분기 영업적자 가능성까지…한국전력, 실적 불확실성의 터널 언제 벗어나나” - 뉴스퀘스트",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9aR0toVnY5WnJfM0tFdnpZb0cyRmd4OHd3T09tSk92X1dTWjcxaW9lcGwtVTJqOWcxTTh2NGllaU1VQk9Fazh0VE5feW9JaEI2ZktrcHJXUVN4cEFMendZZHpPVzdqWlRCYkxvaFF4Yw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "한국전력 실적 부진과 주가 하락",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 30,
          "name": "전기요금 그대로인데…한전 영업이익 71% 급감한 이유",
          "easy": "",
          "quote": "전기요금 그대로인데…한전 영업이익 71% 급감한 이유",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 132,
              "title": "전기요금 그대로인데…한전 영업이익 71% 급감한 이유 - 매일경제",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE41TlFjSzU0R3JETWo1dzZtVGUzWGhTeExJTnRBd0FyOHl1bHdFVi1lcUZqVTRRVDdHUWxDWWNRVWhiM05fRmxZbkhEOXRyYW1hbFFSekRB?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "한국전력 실적 부진과 주가 하락",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 31,
          "name": "(논평)한전 재무 부실, 민간발전사 희생...‘전기요금 할인’ 생색은 정부가 내나",
          "easy": "",
          "quote": "(논평)한전 재무 부실, 민간발전사 희생...‘전기요금 할인’ 생색은 정부가 내나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 133,
              "title": "(논평)한전 재무 부실, 민간발전사 희생...‘전기요금 할인’ 생색은 정부가 내나 - 에너지타임뉴스",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTFBQZkxEd3ZSb3dYblhBQm92VjF3LWhfRVlGRVZ0bzBZWGRqY3UwWGVTNGNMN1RTWTJhckNwSWFTazhrb1BYOS1aQW5QSVF3LWZwczZ6bFdtYjJUbVNCcWFfM20tNmZobzdwMzhXS0p3ZU4yQdIBdkFVX3lxTE84ZWs1eG9BNTN0OHRFdmhlRTZDdTR2NG01b0hvdFV1VDVJRlZOUVVDRXdwVDVXZHFiVTdkZmtQLXVkWXZDQWJzdGRqNVg3eTRlcXg0T0pQekVVX19xWGpDazQwUlVWQ3VGTGNxeklaMWVnSzJaaXc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "한국전력 실적 부진과 주가 하락",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 32,
          "name": "비싸게 사서 싸게 파는데…한전은 울고 가스公은 웃었다 |",
          "easy": "",
          "quote": "비싸게 사서 싸게 파는데…한전은 울고 가스公은 웃었다 |",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 145,
              "title": "비싸게 사서 싸게 파는데…한전은 울고 가스公은 웃었다 | - 연합인포맥스",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTFBLa3JYX0hPcWFmVDgyQmVRTk9haVZJRnRibGhESk5mazRNbGN1Uy0yak42QzRDc2ZSbWRHNm1JOFZneWpNVGx4XzJjTlp5SkpVZHhuZVNSWGZpc3Ezei0xcHlLNVdsdWdaMmZpbGxFRjg5c0VT?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "한국전력 실적 부진과 주가 하락",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 33,
          "name": "iM證 한국전력, 유가·LNG 상승으로 부담…목표가 4만원으로 하향",
          "easy": "",
          "quote": "iM證 한국전력, 유가·LNG 상승으로 부담…목표가 4만원으로 하향",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 149,
              "title": "iM證 한국전력, 유가·LNG 상승으로 부담…목표가 4만원으로 하향 - 아주경제",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFB0ZjNJcURPbW9MWkdsYnAxZzRLVzIzQmt5VHlFRDA0blBESVIxSnJYQ21aejlqQkpvdmg2c3lrUTNmY1BXZTFiaEdlUFk4ckhrYXVhN2RsZljSAVhBVV95cUxQdGYzSXFET21vTFpHbGJwMWc0S1cyM0JreVR5RUQwNG5QRElSMUpyWENtWno5akJKb3ZoNnN5a1EzZmNQV2UxYmhHZVBZOHJIa2F1YTdkbGZY?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "한국전력 실적 부진과 주가 하락",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 34,
          "name": "연준 매파 발언에 미 국채금리, 2025년 4월 이후 최대 주간 상승폭",
          "easy": "",
          "quote": "연준 매파 발언에 미 국채금리, 2025년 4월 이후 최대 주간 상승폭",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 49,
              "title": "연준 매파 발언에 미 국채금리, 2025년 4월 이후 최대 주간 상승폭",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-2174696"
            }
          ],
          "flags": [],
          "unlumped_from": "미 연준 금리 인상 전망 및 통화정책",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 35,
          "name": "미 달러, 연준 금리 인상 전망에 9월 이후 최대 주간 상승률",
          "easy": "",
          "quote": "미 달러, 연준 금리 인상 전망에 9월 이후 최대 주간 상승률",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 50,
              "title": "미 달러, 연준 금리 인상 전망에 9월 이후 최대 주간 상승률",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-2174287"
            }
          ],
          "flags": [],
          "unlumped_from": "미 연준 금리 인상 전망 및 통화정책",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 36,
          "name": "BofA \"연준, 다음 달부터 3회 연속 금리 인상\"…1월 전망 추가",
          "easy": "",
          "quote": "BofA \"연준, 다음 달부터 3회 연속 금리 인상\"…1월 전망 추가",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 158,
              "title": "BofA \"연준, 다음 달부터 3회 연속 금리 인상\"…1월 전망 추가 - 연합인포맥스",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5wUGQ3T1lmeDBuT3dOUklaQ0hOUEFxS1dTcUpmMXFFci1EX05QNjlIaUgzQ1ZkNFZpNFN6ZlVVU2ZfMzRYRE1yajc3SElEd1FyNE40anQtbE1vek1LMGNGRTZtQ2xzbG11QUxkdUw4dG0?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "미 연준 금리 인상 전망 및 통화정책",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 37,
          "name": "월가, 연준 금리 인상 전망 줄상향…BofA \"12월에 이어 1월, 3월에도 올린다\"",
          "easy": "",
          "quote": "월가, 연준 금리 인상 전망 줄상향…BofA \"12월에 이어 1월, 3월에도 올린다\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 159,
              "title": "월가, 연준 금리 인상 전망 줄상향…BofA \"12월에 이어 1월, 3월에도 올린다\" - 뉴스핌",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE94QnRVa0JaTWV1SVdEYkRzdTVjWDBWRFhkWGdsVktidlFRN3AzdkJPTFh0UC1NNE41bmhncjY1Y0dneFoxRS1pVGFsYzJ0aENheW1YWHpGRVY1Uk5W?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "미 연준 금리 인상 전망 및 통화정책",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 38,
          "name": "연준 ‘12월 금리 인상’ 베팅에…달러 가치, 지난해 5월 이후 최고｜Global Money Club",
          "easy": "",
          "quote": "연준 ‘12월 금리 인상’ 베팅에…달러 가치, 지난해 5월 이후 최고｜Global Money Club",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 160,
              "title": "연준 ‘12월 금리 인상’ 베팅에…달러 가치, 지난해 5월 이후 최고｜Global Money Club - 중앙일보",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1SRjB3NlVrS0d3WklvbU12ZF9xU2RBTWhyR1FjV3ZlUUhOUkk5TVg3ajR1R1B3TWVWc0tmdHQ3c1VPYVNxOTVQSGVneE0zY3Rrb0Z2RGFrNVF5SmM?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "미 연준 금리 인상 전망 및 통화정책",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 39,
          "name": "뱅크오브아메리카, 연준 내년 1월 금리 인상 전망 추가",
          "easy": "",
          "quote": "뱅크오브아메리카, 연준 내년 1월 금리 인상 전망 추가",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 161,
              "title": "뱅크오브아메리카, 연준 내년 1월 금리 인상 전망 추가 - 블루밍비트",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiUEFVX3lxTFB6RFZ2Mi00VXR3X3U3dEh0VWVYRGJRY0t1WlRYUkNCZWt5U3c3TmVoWkx4YVVpRTkyTUZJOUJIMFd0UGV2dUZCRkljMGlIejVD?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "미 연준 금리 인상 전망 및 통화정책",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 40,
          "name": "美 연준, 2027년부터 금리 결정 회의 연 7회로 축소…수십 년 통화정책 관행 손질",
          "easy": "",
          "quote": "美 연준, 2027년부터 금리 결정 회의 연 7회로 축소…수십 년 통화정책 관행 손질",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 162,
              "title": "美 연준, 2027년부터 금리 결정 회의 연 7회로 축소…수십 년 통화정책 관행 손질 - 글로벌이코노믹",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPbjZ0UDVkeHE2eDctTnVpYlQ3SlZMMkpwUmNuS0owVXZMOU42b2RzTUVnMUxqVHpib1l3eGtOa0RHeEw5YlRqblNQMkNsWXc3QVNkNFNEMHFBelpNQ0hNNnpITDVLZGRHdlBqTEtfSWtieWVHS2pmUWVISl9KdlM1bkxJS3ctVUhn?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "미 연준 금리 인상 전망 및 통화정책",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 41,
          "name": "연준 콜린스 총재, 추가 금리 인상 필요할 수 있다고 밝혀",
          "easy": "",
          "quote": "연준 콜린스 총재, 추가 금리 인상 필요할 수 있다고 밝혀",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 163,
              "title": "연준 콜린스 총재, 추가 금리 인상 필요할 수 있다고 밝혀 - Investing.com 한국어",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5Qcy1udjFXc2ZxNVh0WmliOFdkTHJObkQxeTNPRWZfSUNtaHpuekcwZVhRTUpEam5naG1uVVdudWJGT2dYSTRoTjgyaU9Cb0pBVm1DZHJPZ2xfVmFkbkVpT3BVMC16UHJxN3c?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "미 연준 금리 인상 전망 및 통화정책",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 42,
          "name": "미 연준, 내년 금리 결정 회의 7번으로 줄여",
          "easy": "",
          "quote": "미 연준, 내년 금리 결정 회의 7번으로 줄여",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 164,
              "title": "미 연준, 내년 금리 결정 회의 7번으로 줄여 - 매일경제 마켓",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE0tcEs5YjU0QUU5aEtiWWxfTkdkcEYySmxUa21lWkxnM19BcjRsZnIzbW9HQkdZVTU2Z3Z4OVBPMGtSbDUwZFlXYThMRW1rRWN2OHc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "미 연준 금리 인상 전망 및 통화정책",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 43,
          "name": "‘금리 결정’ FOMC는 7번만 한다… 美 연준, 내년 일정 발표",
          "easy": "",
          "quote": "‘금리 결정’ FOMC는 7번만 한다… 美 연준, 내년 일정 발표",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 165,
              "title": "‘금리 결정’ FOMC는 7번만 한다… 美 연준, 내년 일정 발표 - Chosunbiz",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMingFBVV95cUxPSWdLR0drek85UG54TlhJZjJEMWxSUzR5em1yM25XaXJqazlFaFVTc2diajlpZ0dNbHM2NmRjOEFhSlRJSGlHcWpyR1g4UDJpYzl4Y2NQblhBeVpmYktiQTdJRDJVeFVRWmkwazNqeU4wQ3pRd3Uyd25RZ1ZrTXJXeE9kYWV0R3pYdU5fS05FdklPdEoyRjNQclkwX3NVd9IBsgFBVV95cUxPckRZdUQzWnZfdF84b0poaGtDUkhRZ0dRVGRNeG9aNTBLLU81dlRKN3ZORER3ZUJUejZtb2hSVTRSUG9oeFdfcUQxVGJISGZzQmFsaHJRZFBQRFFtSFpBSEsweE1vWExsdkp"
            }
          ],
          "flags": [],
          "unlumped_from": "미 연준 금리 인상 전망 및 통화정책",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 44,
          "name": "한은 금리 인상에도 국고채·환율 하락 전망",
          "easy": "",
          "quote": "한은 금리 인상에도 국고채·환율 하락 전망",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 166,
              "title": "한은 금리 인상에도 국고채·환율 하락 전망 - 미디어펜",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFA3YURIdk5rOTZjTmtKSXFFbXlxRmNDSmRhYXBqR3BmSmdpcE1QVzliUXlCbU14bGRJVnJBaFloOEsxaWRDVmhta0xnekhBbGZ1VHVCNmt6UnjSAVhBVV95cUxQN2FESHZOazk2Y05rSklxRW15cUZjQ0pkYWFwakdwZkpnaXBNUFc5YlF5Qm1NeGxkSVZyQWhZaDhLMWlkQ1ZobWtMZ3pIQWxmdVR1QjZrelJ4?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "미 연준 금리 인상 전망 및 통화정책",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 45,
          "name": "\"국고채 금리, 연내 저점 찍고 반등…추격 매수 신중해야\"",
          "easy": "",
          "quote": "\"국고채 금리, 연내 저점 찍고 반등…추격 매수 신중해야\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 167,
              "title": "\"국고채 금리, 연내 저점 찍고 반등…추격 매수 신중해야\" - 연합인포맥스",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5TSnJoVndMQWpfdFl6NTV6eUwtM0U4UW9RcDBTelNDVTdXR3N3dWtxOHd1QjhOX1dtU2tXNzZNRE12MHhQOGtTUTVSSEMyaG9rMThwSHNNWlJ5WDB6R2JTMXB6RFpueDgtYlhiTENwSnpYRnc40gF0QVVfeXFMTlNKcmhWd0xBal90WXo1NXp5TC0zRThRb1FwMFN6U0NVN1dHc3d1a3E4d3VCOE5fV21Ta1c3Nk1ETXYweFA4a1NRNVJIQzJob2sxOHBIc01aUnlYMHpHYlMxcHpEWm54OC1iWGJMQ3BKelhGdzg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "미 연준 금리 인상 전망 및 통화정책",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 46,
          "name": "[공동락의 금리산책] 美 중간선거 결과에 따른 금리하락은 '과도'",
          "easy": "",
          "quote": "[공동락의 금리산책] 美 중간선거 결과에 따른 금리하락은 '과도'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 168,
              "title": "[공동락의 금리산책] 美 중간선거 결과에 따른 금리하락은 '과도' - 주간한국",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE8tV01HSFJVSGkxVXp3WlJpQkpnamdMVHlVRFhsUmxSVlJvb09OdkZDeUNQbmNMS3BTYkxiTzNlRGJkUGdEYzRJUnByOWNoOXhsZ0dkVWxNX0cyLXNFNjJHcHQ3aGhqd2lUOC1MTl8zLW9WSHh30gF0QVVfeXFMTy1XTUdIUlVIaTFVendaUmlCSmdqZ0xUeVVEWGxSbFJWUm9vT052RkN5Q1BuY0xLcFNiTGJPM2VEYmRQZ0RjNElScHI5Y2g5eGxnR2RVbE1fRzItc0U2MkdwdDdoaGp3aVQ4LUxOXzMtb1ZIeHc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "미 연준 금리 인상 전망 및 통화정책",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 47,
          "name": "美 '빅스텝' 거론에 한미 금리차 확대 우려…소비 부진에 한은 '딜레마'",
          "easy": "",
          "quote": "美 '빅스텝' 거론에 한미 금리차 확대 우려…소비 부진에 한은 '딜레마'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 169,
              "title": "美 '빅스텝' 거론에 한미 금리차 확대 우려…소비 부진에 한은 '딜레마' - 뉴스1",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE5MR1VUY0JTRWFyZzhGcmRoTndJMnJuaE5uejV4Y0t5VDlJOFl0Y3FEOVB6ZzJheGJseXJlZDRIMEM5WklfUW9DeVlPc05vSWtZUkFkYQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "미 연준 금리 인상 전망 및 통화정책",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 48,
          "name": "‘호미질의 결실’이라더니…美 빅스텝 변수에 韓 경제 고금리 덫",
          "easy": "",
          "quote": "‘호미질의 결실’이라더니…美 빅스텝 변수에 韓 경제 고금리 덫",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 171,
              "title": "‘호미질의 결실’이라더니…美 빅스텝 변수에 韓 경제 고금리 덫 - 펜앤마이크",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBNcWFYa3VCbERSbElucnFNdmVVTk1NZXlreVNPQUJpSEU4enVfbU1mWDRpazU1RVU2OC15ZExybC13dzZMWU5wVGtNOUZhbDdOTDlqblpxTERYTlZZOVNVRWh4THpVd2V3X0dIdjRSONIBb0FVX3lxTFBNcWFYa3VCbERSbElucnFNdmVVTk1NZXlreVNPQUJpSEU4enVfbU1mWDRpazU1RVU2OC15ZExybC13dzZMWU5wVGtNOUZhbDdOTDlqblpxTERYTlZZOVNVRWh4THpVd2V3X0dIdjRSOA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "미 연준 금리 인상 전망 및 통화정책",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 49,
          "name": "11월엔 올린다지만 그다음은…금통위가 주목한 소비의 온도",
          "easy": "",
          "quote": "11월엔 올린다지만 그다음은…금통위가 주목한 소비의 온도",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 173,
              "title": "11월엔 올린다지만 그다음은…금통위가 주목한 소비의 온도 - 연합인포맥스",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9hdmN3R0ZfV2pQZG5SRG1uM0ZkczZyQkdQSmFhR2RDYTNxVkduU0VmU2tBVU5ZNmpLV3NSZUJmSFlmcFdWb2d5VEVVZS1Nb0RQd2pfUS0yWXNMUUNTUTVhS0xJYy1vQUQ2dURxRjExTWw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "미 연준 금리 인상 전망 및 통화정책",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 50,
          "name": "전기철도, AI·에너지 융합으로 철도안전·탄소중립 해법 모색",
          "easy": "",
          "quote": "전기철도, AI·에너지 융합으로 철도안전·탄소중립 해법 모색",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1,
              "title": "전기철도, AI·에너지 융합으로 철도안전·탄소중립 해법 모색",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374741"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 51,
          "name": "“회생전력은 커패시터로, 장시간 백업은 배터리로”…철도 HESS 적용 제안",
          "easy": "",
          "quote": "“회생전력은 커패시터로, 장시간 백업은 배터리로”…철도 HESS 적용 제안",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 2,
              "title": "“회생전력은 커패시터로, 장시간 백업은 배터리로”…철도 HESS 적용 제안",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374739"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 52,
          "name": "검사관리부터 ESS 진단까지…전기안전 혁신 관통하는 키워드 ‘AI’",
          "easy": "",
          "quote": "검사관리부터 ESS 진단까지…전기안전 혁신 관통하는 키워드 ‘AI’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 3,
              "title": "검사관리부터 ESS 진단까지…전기안전 혁신 관통하는 키워드 ‘AI’",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374736"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 53,
          "name": "석유 최고가격제 12차도 동결…휘발유 1784원·경유 1773원",
          "easy": "",
          "quote": "석유 최고가격제 12차도 동결…휘발유 1784원·경유 1773원",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 4,
              "title": "석유 최고가격제 12차도 동결…휘발유 1784원·경유 1773원",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374723"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 54,
          "name": "\"폴리실리콘부터 인버터까지\" OCI파워, 美 RE+서 그룹 태양광 공급망 소개",
          "easy": "",
          "quote": "\"폴리실리콘부터 인버터까지\" OCI파워, 美 RE+서 그룹 태양광 공급망 소개",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 5,
              "title": "\"폴리실리콘부터 인버터까지\" OCI파워, 美 RE+서 그룹 태양광 공급망 소개",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374737"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 55,
          "name": "신성이엔지, 장애인고용 모범기업상 수상...지속 고용·근무환경 개선으로 상생 실천",
          "easy": "",
          "quote": "신성이엔지, 장애인고용 모범기업상 수상...지속 고용·근무환경 개선으로 상생 실천",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 6,
              "title": "신성이엔지, 장애인고용 모범기업상 수상...지속 고용·근무환경 개선으로 상생 실천",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374735"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 56,
          "name": "(KECA 네트워크) 충북도회, 김장 나눔 봉사활동 진행",
          "easy": "",
          "quote": "(KECA 네트워크) 충북도회, 김장 나눔 봉사활동 진행",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 7,
              "title": "(KECA 네트워크) 충북도회, 김장 나눔 봉사활동 진행",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374734"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 57,
          "name": "양승조 전 충남지사, 한국수자원공사 사장 취임…“정부 재생E 목표 부응”",
          "easy": "",
          "quote": "양승조 전 충남지사, 한국수자원공사 사장 취임…“정부 재생E 목표 부응”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 8,
              "title": "양승조 전 충남지사, 한국수자원공사 사장 취임…“정부 재생E 목표 부응”",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374732"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 58,
          "name": "“사람 대신 AI가 잡는다”… 제품안전협회, AI 기반 위해제품 관리 성과 공유",
          "easy": "",
          "quote": "“사람 대신 AI가 잡는다”… 제품안전협회, AI 기반 위해제품 관리 성과 공유",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 9,
              "title": "“사람 대신 AI가 잡는다”… 제품안전협회, AI 기반 위해제품 관리 성과 공유",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374733"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 59,
          "name": "[COP31] 낮엔 탄소감축, 밤엔 원유증산?...“화석연료 놔둔 35×35는 눈속임” 비판 제기",
          "easy": "",
          "quote": "[COP31] 낮엔 탄소감축, 밤엔 원유증산?...“화석연료 놔둔 35×35는 눈속임” 비판 제기",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 10,
              "title": "[COP31] 낮엔 탄소감축, 밤엔 원유증산?...“화석연료 놔둔 35×35는 눈속임” 비판 제기",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374715"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 60,
          "name": "5차 철도망 계획 12월 말 고시…지자체 “우리 노선 담아달라” 한목소리",
          "easy": "",
          "quote": "5차 철도망 계획 12월 말 고시…지자체 “우리 노선 담아달라” 한목소리",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 11,
              "title": "5차 철도망 계획 12월 말 고시…지자체 “우리 노선 담아달라” 한목소리",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374731"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 61,
          "name": "[특별기고]정치의 계산과 기업의 생존, 어느 환경·에너지 공학자의 생각",
          "easy": "",
          "quote": "[특별기고]정치의 계산과 기업의 생존, 어느 환경·에너지 공학자의 생각",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 12,
              "title": "[특별기고]정치의 계산과 기업의 생존, 어느 환경·에너지 공학자의 생각",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374728"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 62,
          "name": "환경공단, 태국서 ‘K-자원순환 기술’ 수출 확대 나선다",
          "easy": "",
          "quote": "환경공단, 태국서 ‘K-자원순환 기술’ 수출 확대 나선다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 13,
              "title": "환경공단, 태국서 ‘K-자원순환 기술’ 수출 확대 나선다",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374729"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 63,
          "name": "기상청, ICAO 항공안전평가 앞두고 막바지 준비 총력",
          "easy": "",
          "quote": "기상청, ICAO 항공안전평가 앞두고 막바지 준비 총력",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 14,
              "title": "기상청, ICAO 항공안전평가 앞두고 막바지 준비 총력",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374727"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 64,
          "name": "환경보전원, 양평 ‘수풀로 양수리’서 AI 로봇 생태해설 시범 운영",
          "easy": "",
          "quote": "환경보전원, 양평 ‘수풀로 양수리’서 AI 로봇 생태해설 시범 운영",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 15,
              "title": "환경보전원, 양평 ‘수풀로 양수리’서 AI 로봇 생태해설 시범 운영",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374726"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 65,
          "name": "국립환경과학원, 심부 지하수 조사 국가표준 2종 제정",
          "easy": "",
          "quote": "국립환경과학원, 심부 지하수 조사 국가표준 2종 제정",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 16,
              "title": "국립환경과학원, 심부 지하수 조사 국가표준 2종 제정",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374725"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 66,
          "name": "구글 지도 국외반출 조건 이행 확인…좌표 노출 막고 보안 강화",
          "easy": "",
          "quote": "구글 지도 국외반출 조건 이행 확인…좌표 노출 막고 보안 강화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 17,
              "title": "구글 지도 국외반출 조건 이행 확인…좌표 노출 막고 보안 강화",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374724"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 67,
          "name": "(부고) 손운락 한국철도신호기술협회 회장 부친상",
          "easy": "",
          "quote": "(부고) 손운락 한국철도신호기술협회 회장 부친상",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 18,
              "title": "(부고) 손운락 한국철도신호기술협회 회장 부친상",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374721"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 68,
          "name": "노동법 피하려 '가짜 3.3'·사업장 쪼개기…노동부, 140곳 기획감독",
          "easy": "",
          "quote": "노동법 피하려 '가짜 3.3'·사업장 쪼개기…노동부, 140곳 기획감독",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 19,
              "title": "노동법 피하려 '가짜 3.3'·사업장 쪼개기…노동부, 140곳 기획감독",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374720"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 69,
          "name": "가스공사, 전국 쪽방촌에 혹한기 물품 4520박스 지원",
          "easy": "",
          "quote": "가스공사, 전국 쪽방촌에 혹한기 물품 4520박스 지원",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 20,
              "title": "가스공사, 전국 쪽방촌에 혹한기 물품 4520박스 지원",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374719"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 70,
          "name": "(KECA 네트워크) 대전시회, 황정아 의원과 김장 나눔 봉사활동 실시",
          "easy": "",
          "quote": "(KECA 네트워크) 대전시회, 황정아 의원과 김장 나눔 봉사활동 실시",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 21,
              "title": "(KECA 네트워크) 대전시회, 황정아 의원과 김장 나눔 봉사활동 실시",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=374717"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 71,
          "name": "마이크로소프트 365 장애, 보험시장 영향 제한적 전망",
          "easy": "",
          "quote": "마이크로소프트 365 장애, 보험시장 영향 제한적 전망",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 26,
              "title": "마이크로소프트 365 장애, 보험시장 영향 제한적 전망",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-93CH-2175852"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 72,
          "name": "Chime Financial, S&P MidCap 400 편입 발표 후 주가 상승",
          "easy": "",
          "quote": "Chime Financial, S&P MidCap 400 편입 발표 후 주가 상승",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 27,
              "title": "Chime Financial, S&P MidCap 400 편입 발표 후 주가 상승",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2175846"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 73,
          "name": "Southwest Airlines 주가, 시간외 거래서 하락한 이유는?",
          "easy": "",
          "quote": "Southwest Airlines 주가, 시간외 거래서 하락한 이유는?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 28,
              "title": "Southwest Airlines 주가, 시간외 거래서 하락한 이유는?",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-93CH-2175835"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 74,
          "name": "델타항공 주가, 시간 외 거래서 하락한 이유는?",
          "easy": "",
          "quote": "델타항공 주가, 시간 외 거래서 하락한 이유는?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 29,
              "title": "델타항공 주가, 시간 외 거래서 하락한 이유는?",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-93CH-2175833"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 75,
          "name": "United Airlines 주가, 왜 하락하나?",
          "easy": "",
          "quote": "United Airlines 주가, 왜 하락하나?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 30,
              "title": "United Airlines 주가, 왜 하락하나?",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-93CH-2175832"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 76,
          "name": "아메리칸항공그룹 주가, 오늘 하락하는 이유는?",
          "easy": "",
          "quote": "아메리칸항공그룹 주가, 오늘 하락하는 이유는?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 31,
              "title": "아메리칸항공그룹 주가, 오늘 하락하는 이유는?",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-93CH-2175831"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 77,
          "name": "[글로벌 식탁의 진짜 주인] ②재주는 한국이, 돈은 외국이…K푸드의 불편한 진실",
          "easy": "",
          "quote": "[글로벌 식탁의 진짜 주인] ②재주는 한국이, 돈은 외국이…K푸드의 불편한 진실",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 32,
              "title": "[글로벌 식탁의 진짜 주인] ②재주는 한국이, 돈은 외국이…K푸드의 불편한 진실",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2175819"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 78,
          "name": "[EBN 칼럼] 달러/원 환율 추가 하락에 대한 고민",
          "easy": "",
          "quote": "[EBN 칼럼] 달러/원 환율 추가 하락에 대한 고민",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 33,
              "title": "[EBN 칼럼] 달러/원 환율 추가 하락에 대한 고민",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2175818"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 79,
          "name": "연준 “AI 위험, 금융 안정 최대 우려 요인”",
          "easy": "",
          "quote": "연준 “AI 위험, 금융 안정 최대 우려 요인”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 34,
              "title": "연준 “AI 위험, 금융 안정 최대 우려 요인”",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-93CH-2175778"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 80,
          "name": "Celestica 주가, 오늘 하락하는 이유는?",
          "easy": "",
          "quote": "Celestica 주가, 오늘 하락하는 이유는?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 35,
              "title": "Celestica 주가, 오늘 하락하는 이유는?",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-93CH-2175769"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 81,
          "name": "미국 10월 생산자물가 전년 대비 6.5% 상승…2022년 11월 이후 최대",
          "easy": "",
          "quote": "미국 10월 생산자물가 전년 대비 6.5% 상승…2022년 11월 이후 최대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 36,
              "title": "미국 10월 생산자물가 전년 대비 6.5% 상승…2022년 11월 이후 최대",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-2175244"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 82,
          "name": "스페인 10월 소비자물가 상승률 4.9%로 전월과 동일",
          "easy": "",
          "quote": "스페인 10월 소비자물가 상승률 4.9%로 전월과 동일",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 37,
              "title": "스페인 10월 소비자물가 상승률 4.9%로 전월과 동일",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-93CH-2174672"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 83,
          "name": "독일 10월 도매물가, 전년 대비 8.8% 상승",
          "easy": "",
          "quote": "독일 10월 도매물가, 전년 대비 8.8% 상승",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 38,
              "title": "독일 10월 도매물가, 전년 대비 8.8% 상승",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-93CH-2174637"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 84,
          "name": "프랑스 2026년 10월 소비자물가 전월 대비 0.4% 상승",
          "easy": "",
          "quote": "프랑스 2026년 10월 소비자물가 전월 대비 0.4% 상승",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 39,
              "title": "프랑스 2026년 10월 소비자물가 전월 대비 0.4% 상승",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-93CH-2174626"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 85,
          "name": "핀란드 10월 물가상승률 3.1%로 상승",
          "easy": "",
          "quote": "핀란드 10월 물가상승률 3.1%로 상승",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 40,
              "title": "핀란드 10월 물가상승률 3.1%로 상승",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-93CH-2174511"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 86,
          "name": "칠레 페소화, 구리값 하락·미국 금리 전망에 19개월 만에 최저",
          "easy": "",
          "quote": "칠레 페소화, 구리값 하락·미국 금리 전망에 19개월 만에 최저",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 46,
              "title": "칠레 페소화, 구리값 하락·미국 금리 전망에 19개월 만에 최저",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-93CH-2175713"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 87,
          "name": "캐나다 달러, 미국 생산자 물가 강세에 1개월 저점 근처 유지",
          "easy": "",
          "quote": "캐나다 달러, 미국 생산자 물가 강세에 1개월 저점 근처 유지",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 47,
              "title": "캐나다 달러, 미국 생산자 물가 강세에 1개월 저점 근처 유지",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-2175454"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 88,
          "name": "파운드화 안정세, 매파적 연준이 달러 강세 유지",
          "easy": "",
          "quote": "파운드화 안정세, 매파적 연준이 달러 강세 유지",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 48,
              "title": "파운드화 안정세, 매파적 연준이 달러 강세 유지",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-2174710"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 89,
          "name": "일본 엔화, 달러당 160엔 재시험…일본 당국 개입 경고",
          "easy": "",
          "quote": "일본 엔화, 달러당 160엔 재시험…일본 당국 개입 경고",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 51,
              "title": "일본 엔화, 달러당 160엔 재시험…일본 당국 개입 경고",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-2174255"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 90,
          "name": "지역별 요금제 논란, 전기요금 왜곡이 낳은 민낯 [기후에너지환경 단상]",
          "easy": "",
          "quote": "지역별 요금제 논란, 전기요금 왜곡이 낳은 민낯 [기후에너지환경 단상]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 57,
              "title": "지역별 요금제 논란, 전기요금 왜곡이 낳은 민낯 [기후에너지환경 단상] - 에너지경제신문",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE5qSk5CbVl4UDZURk9lNHNySFlQT3Q3MkIzUHJuUTBSeFBMeUt0TWVuTXZWVEQweHlJRV9mTGpmbzBMT0NEQWMxZXpfRTAyLVlTbW95MEZaWEhMMzlLZFA4X2d6QQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 91,
          "name": "한국전력, AI 감사 지원 시스템으로 ‘AI 코리아 대상' 수상",
          "easy": "",
          "quote": "한국전력, AI 감사 지원 시스템으로 ‘AI 코리아 대상' 수상",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 62,
              "title": "한국전력, AI 감사 지원 시스템으로 ‘AI 코리아 대상' 수상 - 팍스경제TV",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9JU1J1WlY4dDdubUFHeWlYNmRPZVRMaEl1U0pqY1IzLXJUWkdtZmpkZ2xKZjVWckRDQTM3Y1BIVEV6TGk4NHdUMHNtMUdBbGFsSzByeWZBeUk3RG12YmVVdjUzaHBSa1hz?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 92,
          "name": "한국전력공사, AI 코리아 대상 사회적 책임 부문 대상",
          "easy": "",
          "quote": "한국전력공사, AI 코리아 대상 사회적 책임 부문 대상",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 63,
              "title": "한국전력공사, AI 코리아 대상 사회적 책임 부문 대상 - 글로벌뉴스통신GNA",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE9nS2VzUGNfTFM3cENRcDd0Ylk1dkwxR19tZmE3eFN1UlN5RUU3b1FxY0VEMkJNYURjbWRxVE96US1ZcVE1VEVUR3pwU0trdWFYTWJBOXJvQmNIRTh0WXVxMVJNQWhOU1FETDMyeFdJeWdvMS1F?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 93,
          "name": "반도체 공장 들어서는데 전력망은 언제…용인·호남권 공급 비상[전력 확보 전쟁①]",
          "easy": "",
          "quote": "반도체 공장 들어서는데 전력망은 언제…용인·호남권 공급 비상[전력 확보 전쟁①]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 64,
              "title": "반도체 공장 들어서는데 전력망은 언제…용인·호남권 공급 비상[전력 확보 전쟁①] - 뉴시스",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTE1taE1SbHdVT0FzNGVaWmV6YUotbENwLWNRSjFYeDhJVTZvTFNoM0hBakVzamlxWnBDSDZ4c1l6cC0wNjFicGRHM0NZdS1zYThmeVowRlJqUjI2M3dleTJYaG9MLVZWSzB5UDY1ZmdKUXdzWkpsQzJHLdIBeEFVX3lxTE1taE1SbHdVT0FzNGVaWmV6YUotbENwLWNRSjFYeDhJVTZvTFNoM0hBakVzamlxWnBDSDZ4c1l6cC0wNjFicGRHM0NZdS1zYThmeVowRlJqUjI2M3dleTJYaG9MLVZWSzB5UDY1ZmdKUXdzWkpsQzJHLQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 94,
          "name": "극한 기상에도 멈추지 않는 전력망 비결은? 이탈리아 테르나, 파르마 송전선에 첨단 센서 시스템 도입",
          "easy": "",
          "quote": "극한 기상에도 멈추지 않는 전력망 비결은? 이탈리아 테르나, 파르마 송전선에 첨단 센서 시스템 도입",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 65,
              "title": "극한 기상에도 멈추지 않는 전력망 비결은? 이탈리아 테르나, 파르마 송전선에 첨단 센서 시스템 도입 - https://www.2news.co.kr/",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9mWFc3d1hfS2hjYmV4dHNvX1NyS2VSazVTUmQ5RkZmeVlXQW13QXhGdzUyQi05TWhENXV1UGFUNE9seW5Rd0s3OU9iUXdsSFJTWXpucmxrS2diV25Dd3hMTi0wUW50RmhO?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 95,
          "name": "마을 옆 송전선로가 '연금'이 된다고? 한전의 파격 상생안",
          "easy": "",
          "quote": "마을 옆 송전선로가 '연금'이 된다고? 한전의 파격 상생안",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 66,
              "title": "마을 옆 송전선로가 '연금'이 된다고? 한전의 파격 상생안 - 에너지안전신문",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBXTXVZQlFuU0lUdXZTZTN2TjdkUTM0U0l2RmtFVzFmSXo2cUxvRWVJcGxPZ1hveHhleVhiaG1vY1hkYnVCOFVkckgwLXA1YUsxYUpmY1JrdmsyY3NzN0RNN2xfa08?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 96,
          "name": "최근 2년來 연평균 1116c-km씩 송전선로 증가",
          "easy": "",
          "quote": "최근 2년來 연평균 1116c-km씩 송전선로 증가",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 69,
              "title": "최근 2년來 연평균 1116c-km씩 송전선로 증가 - 이투뉴스",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5Ta2hKYk1PX3dWOGhvMzJ0U2FfcFpPTURaTHJUdzYzVk9VY1poU0RWM1hzX2I1TmVHVURjMGlKSS03d1JGUU5mWnlzTXVnXzBPUV9jM3pzVGxvQndpSmJoM3U0bmVGdG5q0gFrQVVfeXFMTV9jenlnWi1uX3JZRWdKZUl4VDdoU0YyQ3ZiZ0dnNGJrbWtjQWMyejZMUE82c3F6SnBIZ0NncnlLSjBJVTYySmpuTjRCS1UxcGR0VkZKdXdkRk8wRkRmZUpUaERzdHdhMnl3V0E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 97,
          "name": "고압 전력용 변압기 시장 2035년 전망: 재생에너지 통합과 전력망 개보수가 성장 견인 - 뉴스 및 통계",
          "easy": "",
          "quote": "고압 전력용 변압기 시장 2035년 전망: 재생에너지 통합과 전력망 개보수가 성장 견인 - 뉴스 및 통계",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 72,
              "title": "고압 전력용 변압기 시장 2035년 전망: 재생에너지 통합과 전력망 개보수가 성장 견인 - 뉴스 및 통계 - IndexBox",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxPT1VXZW8yQTNra1A2QWo2ZUdpa1Q3ckpZQUYyM0ZRX1hnb21WMlJjLXgzTUhBb1pZRTVCMGZQUTQydm4yZ3BNYl9kRnZidXJ4OFJnOUt2Uld4dzZWUjRBRVMtcnZ4UFRtR1cyTVo0aHJhbFh0eGpzTW03TXFMYzRrd0FEZ1o0QlRkS1pzOUpyOHNLMU5nbXdiajdDSURfci1jT2hTYU1yQWpzTHdHeUUxTnFSdEo0aXVOZy1RUFpKWVQ2dGZwbHo0ZDJ1OFVtX2lWYVhnVGdEcVlRM210SzJScWZn?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 98,
          "name": "반도체·AI 호황에 수출물량 43.9% 급증…역대 최대 증가폭",
          "easy": "",
          "quote": "반도체·AI 호황에 수출물량 43.9% 급증…역대 최대 증가폭",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 78,
              "title": "반도체·AI 호황에 수출물량 43.9% 급증…역대 최대 증가폭 - 아주경제",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFB0WkVzaGVpUzhGR0NlUXV0VW0tbHNIQ2tGWkdfMVR4Q3A2VTBVZ2dia1FEVTVIeE1kazV3WlVDaTBtY3dJM1ZqWTN5UXhNM25pMEZkYkJYbDnSAVhBVV95cUxQdFpFc2hlaVM4RkdDZVF1dFVtLWxzSENrRlpHXzFUeENwNlUwVWdnYmtRRFU1SHhNZGs1d1pVQ2kwbWN3STNWalkzeVF4TTNuaTBGZGJCWGw5?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 99,
          "name": "젠슨 황 퇴진에 새판 짜는 엔비디아…삼전·닉스 HBM 공급전 변수",
          "easy": "",
          "quote": "젠슨 황 퇴진에 새판 짜는 엔비디아…삼전·닉스 HBM 공급전 변수",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 80,
              "title": "젠슨 황 퇴진에 새판 짜는 엔비디아…삼전·닉스 HBM 공급전 변수 - 뉴시스",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFBVRkVodG03emxfTHFUUnBRUTFvT3Q1cU13S0ZnNFpMNU4xc01kbk9mNk5XdU1iMTRlWkxpdFdLMkpSMjdROEdudzg5VHM5TTQwZ2lWeWJYVHl4aGZGUllCedIBeEFVX3lxTE92MmVLSVdXNzdoal9feEVXMVlZeWhaejBYTllsSTk4dnFoRC13ZGJxMXRTYW9XeG1neVhlX0lHQjV1X0J0X3hRT2RUdnJOQjhOTHFUVy1OeDVjSi1fbGhnRTZ0SlJLQ1FMUDFoVkFBZ2lMbG5DMU9PNg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 100,
          "name": "“HBM은 밀수, 장비는 회사째 인수”…중국의 차세대 HBM 승부수",
          "easy": "",
          "quote": "“HBM은 밀수, 장비는 회사째 인수”…중국의 차세대 HBM 승부수",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 81,
              "title": "“HBM은 밀수, 장비는 회사째 인수”…중국의 차세대 HBM 승부수 - 중앙일보",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5RZlZHdTF1SDN0bl9ZLWMzcmJESHdhbEZYM2NSQWhPR1B2RDljZEdJbUZWcG81aFloNjBTdk4xenNmWVdZT3dJYzlibndJeWpfLWtRQ1RR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 101,
          "name": "엔비디아 위기, 삼성·SK엔 기회…HBM 공급망 재편 촉각",
          "easy": "",
          "quote": "엔비디아 위기, 삼성·SK엔 기회…HBM 공급망 재편 촉각",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 83,
              "title": "엔비디아 위기, 삼성·SK엔 기회…HBM 공급망 재편 촉각 - 뉴스핌",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE40LVRjX3FHVDNWN1FtOWFSTUNPSG50U1RkSXBHeFl1bmFxT2t4YXhwVU0yRHdfTkFFYjBSVDFJS2hQelpKM0VCdGJjdnprWFRFakwwWnduZjMxU0Vk?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 102,
          "name": "충청에 '반도체 심장' HBM 거점 … 삼성, 첨단 패키징 승부 건다",
          "easy": "",
          "quote": "충청에 '반도체 심장' HBM 거점 … 삼성, 첨단 패키징 승부 건다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 84,
              "title": "충청에 '반도체 심장' HBM 거점 … 삼성, 첨단 패키징 승부 건다 - 매일경제",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBDbVpJUEtRSVJrWW5vR1dRWHBXcnBJZm1kajZGaXVUQzNNaGk3cE1MR1M5U2JnVkRVSDdyNXd6Sm1MNDl5OEFLYllscDBsRzlDdTdwbURR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 103,
          "name": "메모리업계, HBM 하이브리드 본딩 검토…어플라이드 장비 사업 확대",
          "easy": "",
          "quote": "메모리업계, HBM 하이브리드 본딩 검토…어플라이드 장비 사업 확대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 85,
              "title": "메모리업계, HBM 하이브리드 본딩 검토…어플라이드 장비 사업 확대 - 아이티데일리",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBCblpScGJVRDVUczdVZHg4T1lwZWYySmZSVkNRWmVOeVNVb3BDWXNtNmlzajBydURzWjgwSmUyenJtUkhRUU5vdjh4QVhna0tLbndtYkxRbkNtci1JZGxhc0RheFhBSTh2?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 104,
          "name": "[AI제국의 위기 ③] 젠슨 황 퇴장에 HBM 경쟁 새 국면···삼성 반격·SK 수성",
          "easy": "",
          "quote": "[AI제국의 위기 ③] 젠슨 황 퇴장에 HBM 경쟁 새 국면···삼성 반격·SK 수성",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 86,
              "title": "[AI제국의 위기 ③] 젠슨 황 퇴장에 HBM 경쟁 새 국면···삼성 반격·SK 수성 - 서울파이낸스",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5nNUtFODRweFNPMEFQQ2NtWWJCd3Y4bWU1M29qTjFCRGEtWlNyckNxVl9xS0RzTmg3MFI3NFdYWk00MmhIRWY5a2NiQUpMU3BtV2s1NEZoVGlLYzVnQUQzNnZLb2k5RURhX2c?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 105,
          "name": "\"HBM 없는 AI 추론…열 빼기 쉬운 적층 구조가 해법\"",
          "easy": "",
          "quote": "\"HBM 없는 AI 추론…열 빼기 쉬운 적층 구조가 해법\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 87,
              "title": "\"HBM 없는 AI 추론…열 빼기 쉬운 적층 구조가 해법\" - 한국경제",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5nalF1NnM5b25laFAzeF9menVwaXV4bjh2UFVGT09zQmczcWt0N2pybnBfOWpZZ3RkU3gxZmppd0xJXzV1QlRJeWxyT0xWMGxXbmFrbG1TTk1QZw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 106,
          "name": "SK하이닉스 주가, 오늘 왜 하락하나?",
          "easy": "",
          "quote": "SK하이닉스 주가, 오늘 왜 하락하나?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 88,
              "title": "SK하이닉스 주가, 오늘 왜 하락하나? - Investing.com 한국어",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTFBULXdLS0RXQXhzOWNYaHB4aGp1ejJlWDlsVVZYbDh0dlZkRnBiRHNRQTR0S1Y3QS1mTk5yVUZsazNsd3dWWHF3ejV4WmhOVzRIYTdDQjhfTi1hdWxZbEpFTExXNHM4Ym5VUVlTeWFXRVNEM0hpMlZr?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 107,
          "name": "MSCI 11월 정기 리뷰… SK하이닉스, ADR 반영에 비중 '쑥' - 머니투데이",
          "easy": "",
          "quote": "MSCI 11월 정기 리뷰… SK하이닉스, ADR 반영에 비중 '쑥' - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 89,
              "title": "MSCI 11월 정기 리뷰… SK하이닉스, ADR 반영에 비중 '쑥' - 머니투데이 - 머니투데이",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5taHpqOHJrMXZVX1ozYVplRUsteXJOTEgweWtiMmtFYWY5akJRb2tMZXpNXzBhVWlLdlJZcEFkako4ZE8tOXllNS1wX1JRY2xCV04yeFVrWXdGTDVMcjVsQVhGb3N5VFNhOFUxUXF30gFuQVVfeXFMTm1oemo4cmsxdlVfWjNhWmVFSy15ck5MSDB5a2Iya0VhZjlqQlFva0xlek1fMGFVaUt2UllwQWRqSjhkTy05eWU1LXBfUlFjbEJXTjJ4VWtZd0ZMNUxyNWxBWEZvc3lUU2E4VTFRcXc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 108,
          "name": "[N2 포커스] 외국인 SK하이닉스 팔고 NAVER 샀다…기관·개인은 반도체 매수",
          "easy": "",
          "quote": "[N2 포커스] 외국인 SK하이닉스 팔고 NAVER 샀다…기관·개인은 반도체 매수",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 90,
              "title": "[N2 포커스] 외국인 SK하이닉스 팔고 NAVER 샀다…기관·개인은 반도체 매수 - 뉴스투데이",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiXkFVX3lxTFBMWTM3REFuME42MUt0YVBjemdnOG1sd0ZTeWRKV25MV2lya0lYQXJSMV9WQ1ZXU3I5eGpBZWstdjJDLV96TE0wWTlXaUUzc0Q3YzZkYWdEd1VTdmdaaUE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 109,
          "name": "반도체주 불확실성 확대⋯ 외국인, SK하이닉스 4700억 매도",
          "easy": "",
          "quote": "반도체주 불확실성 확대⋯ 외국인, SK하이닉스 4700억 매도",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 92,
              "title": "반도체주 불확실성 확대⋯ 외국인, SK하이닉스 4700억 매도 - 국민일보",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFB3aFpkX1RNYksya3d0bkFmSzBUaHpmNWpaeXlHRF9kVUd1X1hSX3dOMDNuanRBb0VfY2UxN2xRMWY1dW1xdjhjcTBwSlhMNWxaZUFSWExGc1E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 110,
          "name": "퀄리타스반도체, SK하이닉스 공급 IP 규모 확대...총 39억",
          "easy": "",
          "quote": "퀄리타스반도체, SK하이닉스 공급 IP 규모 확대...총 39억",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 94,
              "title": "퀄리타스반도체, SK하이닉스 공급 IP 규모 확대...총 39억 - 디일렉",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE0tQzVTMGVjMlRPTDVSZ1RQTkRmNzlmSzl1RDY3WUxTU1pEVFVrTEdSYnRBUGtvN3c0LS1TbnZhaTFGb3BRaXFYUi1PLVgtbGt1NXVSUWFBVUFKZ29wZnRzWjZpUGhxZw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 111,
          "name": "[ETF 시황] AI 소부장 웃고 SK하이닉스 레버리지 울고…수익률 희비",
          "easy": "",
          "quote": "[ETF 시황] AI 소부장 웃고 SK하이닉스 레버리지 울고…수익률 희비",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 95,
              "title": "[ETF 시황] AI 소부장 웃고 SK하이닉스 레버리지 울고…수익률 희비 - 뉴스핌",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE9yQ0hUT3QyUzRPLUhwSzJJTGZCQTZDc0tKVnlnQkJKcGx5U0c2Z051a0k3d2ZuSkpjVWJadFpLVy1DakstUEhPbW11QWJ3ODlMcjFaQjlIcVg3aHpP?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 112,
          "name": "'엔비디아 리스크'에 미소짓는 삼성전자? AMD·브로드컴 'AI 동맹 확장' 빛 보나",
          "easy": "",
          "quote": "'엔비디아 리스크'에 미소짓는 삼성전자? AMD·브로드컴 'AI 동맹 확장' 빛 보나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 98,
              "title": "'엔비디아 리스크'에 미소짓는 삼성전자? AMD·브로드컴 'AI 동맹 확장' 빛 보나 - 오피니언뉴스",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE1SSi1pTnk2c0pIZFE2dGE0cTNqZnBFUGxBQi1YREV2UGNBOTVCV2gyZHA2by1YX2p1MjdQQUVPbFZKWTZtMk1rUjJoSkFGdDh1VHlOR2VLa2dxTlRwUnMtLWRtR0s2cFNTbS1raloxV1cwQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 113,
          "name": "물·전기 끌어와도 \"지을 사람이 없어\"...반도체 공장 건설 '비상' - 머니투데이",
          "easy": "",
          "quote": "물·전기 끌어와도 \"지을 사람이 없어\"...반도체 공장 건설 '비상' - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 101,
              "title": "물·전기 끌어와도 \"지을 사람이 없어\"...반도체 공장 건설 '비상' - 머니투데이 - 머니투데이",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1YVmlvaFVvOFRQRTNuSjJSLTlqZXBRYzNPN2Rnb0xldm50Mm9VcmVfRmtyR2hCMGxrTnhkZXFPU1UzRUhQMjhZTS14bTlfdFRqVlNfVWxaVFNPcG9RajJSaHYzV1BON1lfU2fSAW9BVV95cUxNSDZhRnlhcWpiYzFzbnRyUzRweTM0WkcwWXAxNzVhcVZIQ3p5TEtkc1BQQTljRl9YWlI4NnR2UzlmSmVIWFpILTZRZUFnU1lzY1JDWDVCNkVxdEYxYUc1eXphWWRNX09hTVhobjFTdDQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 114,
          "name": "韓·佛 원전동맹 새 장···SMR부터 핵연료까지 손잡는다",
          "easy": "",
          "quote": "韓·佛 원전동맹 새 장···SMR부터 핵연료까지 손잡는다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 112,
              "title": "韓·佛 원전동맹 새 장···SMR부터 핵연료까지 손잡는다 - 서울파이낸스",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBNTFRIMkx4MVdtdERueTNOdFZabFJWSjhZSnpXcjRLellfVlNrQXAwOEtiTFF2dkVEU0swZzh6R0h5d2xTcHBqYjEtd2s4UUFfMklhOVMxZ256OGM0TnE5SU4tTVFjUlJTTVE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 115,
          "name": "[심층분석] 삼성물산, SMR·전력망까지…해외 에너지 인프라 확장",
          "easy": "",
          "quote": "[심층분석] 삼성물산, SMR·전력망까지…해외 에너지 인프라 확장",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 113,
              "title": "[심층분석] 삼성물산, SMR·전력망까지…해외 에너지 인프라 확장 - 굿모닝경제",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5tMFhOS2tENmVDZVlGV3dCXzlzemlfUDBZN0w0cGRObGVqM25xOUp5YzhNU0RMOVp1cndhMVFJdThEOVNOZFRLOXpxRjJCWVlzSXFQcnpybl9RemNmaXNMSmtwQ1ZrczJzaGhuaQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 116,
          "name": "“설계 넘어 양산 전쟁으로”… 중국 SMR 벤처 20곳 돌파",
          "easy": "",
          "quote": "“설계 넘어 양산 전쟁으로”… 중국 SMR 벤처 20곳 돌파",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 114,
              "title": "“설계 넘어 양산 전쟁으로”… 중국 SMR 벤처 20곳 돌파 - 에너지안전신문",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9GMUVpVzdfNVZ1cTVPVWRfZlVKaTcyQW5BWWFoaWEtZXRtdzI1MndNS043MDRDZWE3YXF0MG9nVDd5QVVvMDZSTzN2ekR5U19KR0Q4WnBlSk8zb0h5R0tUeGxYX0M?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 117,
          "name": "캐나다 첫 SMR, 7조원 예산 초과·2030년 가동 무산...원전 소형화, 경제성 시험대",
          "easy": "",
          "quote": "캐나다 첫 SMR, 7조원 예산 초과·2030년 가동 무산...원전 소형화, 경제성 시험대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 116,
              "title": "캐나다 첫 SMR, 7조원 예산 초과·2030년 가동 무산...원전 소형화, 경제성 시험대 - 임팩트온",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBpVm1lWHh2THNOOThMNE1tWWFIazlNa1JJMTdSdDdyNFJtMGF5T1VGdDhpNVpnTXpGNkdXaXRoaG8wd3lwUEllanZnX21XeU85RzM0UDdmYTFpdFVUYU9nSEhTYUtlektSNUE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 118,
          "name": "[기업탐방] 태웅, “신규 원자력 관련 수주와 매출이 더욱 확대될 수 있도록 고객사별 공급 품목을 늘리고 있으며, 장기적으로는 풍력 중심의 기존 사업구조에서 원자력, 고부가가치로”",
          "easy": "",
          "quote": "[기업탐방] 태웅, “신규 원자력 관련 수주와 매출이 더욱 확대될 수 있도록 고객사별 공급 품목을 늘리고 있으며, 장기적으로는 풍력 중심의 기존 사업구조에서 원자력, 고부가가치로”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 118,
              "title": "[기업탐방] 태웅, “신규 원자력 관련 수주와 매출이 더욱 확대될 수 있도록 고객사별 공급 품목을 늘리고 있으며, 장기적으로는 풍력 중심의 기존 사업구조에서 원자력, 고부가가치로” - 네이버 프리미엄콘텐츠",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTE13SldEZ1FFRlVYVFpfMXdEOHhOT1VNaGl3NWVldmZOT0RKWjgxcW45SDRqeGZDYm5ZTE0yUy1WR0E4aVFRZDl0QzlEUUg5ZW9IWnp6WnNJMjJPX0NxcndReWNuMGlsQ2htVm9fTW9Wd1NSVHB1MlJScw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 119,
          "name": "비츠로시스, 가동원전 부품 국산화…MRO시장 정조준",
          "easy": "",
          "quote": "비츠로시스, 가동원전 부품 국산화…MRO시장 정조준",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 119,
              "title": "비츠로시스, 가동원전 부품 국산화…MRO시장 정조준 - 마켓인",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1TWjNpTkE1cENmM0FrN28yZmExb2pteFVOU2hLQWdmb1VqMll3OWlIdS1Zb185SEpZQTBQWG95YlY3SnNIM18tVWpiZk1MZXUxWGRpS1N1Y2tVcjB0YTFndW9wR0ZRUkRMa3U4WU1sU2pMakE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 120,
          "name": "제주에너지공사, 남는 재생전력은 수소로…수전해·ESS 통합 실증 착수",
          "easy": "",
          "quote": "제주에너지공사, 남는 재생전력은 수소로…수전해·ESS 통합 실증 착수",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 120,
              "title": "제주에너지공사, 남는 재생전력은 수소로…수전해·ESS 통합 실증 착수 - 에너지데일리",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE5xVS1xdFJLR0NDc2RmYkNzSTJtQXJGM2Raa3RoZW9wbFBOcWp1TmVaSVJtOUY4Y3NFMVA3TnRRX2N5NE51UjZxZ2tmdnBhZ05SY1IwVHRlb3N6alNLUzFtc2g0WTFWcmRmTWJvT0U1MVhsZw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 121,
          "name": "전북, 재생에너지 확대 발목 잡는 전력망 해법 모색",
          "easy": "",
          "quote": "전북, 재생에너지 확대 발목 잡는 전력망 해법 모색",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 124,
              "title": "전북, 재생에너지 확대 발목 잡는 전력망 해법 모색 - 뉴스프리존",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE56NDdraWxTWFhidnV4WV82aW5GVlVNNkkxQUFaUGJOWUNac2pqYzR2N19VdnNKbnUyZGpzWHhYaFY1RDVRN3BiQ2kyT0tiSkpnckxsU0pfRG45SHhIWnZpR0hXbWdSTmNPNEM2d0NGazNOZ1XSAXdBVV95cUxNR3JiWElkeU96a2luUUVES0RKdnhMYWRwcnRsR0wwc01ycmpqMXBSN1I4bzU1NF81dy02UlhfeklfdUpQc1IzcTVQdjhudTZXbFR4TENpekVzM2dQVVVQS2pGY3V2c3o2b2pvdGphS0xkRVkteDZsMA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 122,
          "name": "中 저가공세 맞서는 배터리3社…美 EV 라인 ESS로 전환해 '돌파구'",
          "easy": "",
          "quote": "中 저가공세 맞서는 배터리3社…美 EV 라인 ESS로 전환해 '돌파구'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 126,
              "title": "中 저가공세 맞서는 배터리3社…美 EV 라인 ESS로 전환해 '돌파구' - 뉴스톱",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTFB3LTRQWGt2NnhfZ1p6VGcxWldVT2lrcEdIMFRpbTU5LVRoTU5OVFBoRXJkQ0hRLWhwLVVzNlNuRDVYRXl2RmQteFEwMjFYZXlZQ2xSZDVWUVcwamp0RXlMWmdBX3daU0RleV9hdTMxdw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 123,
          "name": "[산업X파일] ‘데이터센터 전기료’ 올리자니 기업 반발, 내리자니 국민 부담… 한국도 ‘줄타기’",
          "easy": "",
          "quote": "[산업X파일] ‘데이터센터 전기료’ 올리자니 기업 반발, 내리자니 국민 부담… 한국도 ‘줄타기’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 128,
              "title": "[산업X파일] ‘데이터센터 전기료’ 올리자니 기업 반발, 내리자니 국민 부담… 한국도 ‘줄타기’ - 조선일보",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMijgFBVV95cUxQNTVHMGJjZnlUcnE4anJSdDJfMFB6UWNDWXEwT1lpN09BYmJTNmdqMWpuMncxSVc5czh0Mm9vRW9XUXBsa3VDd05vZTk3ZEVJZmtCOFZPOF9DTHgyVDB6Sm15WjlNd2ZLRk0tZEtaUHZ1UjJtSmlBaVZXWmFRZWhSZnFMWlZGQTh3ODFkQkhR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 124,
          "name": "전기요금 0원 시대가 열린다? 영국 EDF가 내놓은 블랙프라이데이 태양광·히트펌프 파격 혜택",
          "easy": "",
          "quote": "전기요금 0원 시대가 열린다? 영국 EDF가 내놓은 블랙프라이데이 태양광·히트펌프 파격 혜택",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 129,
              "title": "전기요금 0원 시대가 열린다? 영국 EDF가 내놓은 블랙프라이데이 태양광·히트펌프 파격 혜택 - https://www.2news.co.kr/",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBUZm5FZ05nTVVmcGstSk5vRXpvLThRNHp3QXo4WkFOSzhCb21Gd0J5OUdSQi1PNERHVDBEY2xLaW9JSVdpU0dXM1diUkxEOEQxV0UzRUt0ajFDRGppYjctN1dEY1A2Slln?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 125,
          "name": "발전공기업 통합·한전 지주회사 전환 추진…전기요금·전력시장도 개편",
          "easy": "",
          "quote": "발전공기업 통합·한전 지주회사 전환 추진…전기요금·전력시장도 개편",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 130,
              "title": "발전공기업 통합·한전 지주회사 전환 추진…전기요금·전력시장도 개편 - 에너지데일리",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTFBnY2kzemFDVV80Ym5SWkcyb3I5VF9ybngwbFhERjhvcFJhOVE0V3ZRZHBaY25GajJSTW9DVXN2TTF0WDdLY2lpY2dDdk9YTnR3bDNsZlVnQi13SVlydGo5dGZLMlBTbUZGYTZ4WkJzUnZQUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 126,
          "name": "[기고] ‘지역별 전기요금 차등제’ 이제는 국회가 답해야 합니다",
          "easy": "",
          "quote": "[기고] ‘지역별 전기요금 차등제’ 이제는 국회가 답해야 합니다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 131,
              "title": "[기고] ‘지역별 전기요금 차등제’ 이제는 국회가 답해야 합니다 - 광양뉴스",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBSdG00Q2oxeXFXV2xsYjVIR2JTYjd0c2plNkx1QUQ2cllBa1lEY2dtYU54Szk5OUZxZENLSG5OUnNTclpnbXdNN3lIUW14LUFJb3AxX1BlQVNQcmV4dzBPZ2pDbXhiejdS?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 127,
          "name": "요금 인상만으론 부족하다…한국전력 주가 반등의 선결 조건은?",
          "easy": "",
          "quote": "요금 인상만으론 부족하다…한국전력 주가 반등의 선결 조건은?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 134,
              "title": "요금 인상만으론 부족하다…한국전력 주가 반등의 선결 조건은? - 핀포인트뉴스",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTFB2Uy1ySU55WVRmR0hJN2VMcEMtOVhMcC1rMnk3ZlZNSFZXUkdYeG43WWV6TWRLUy1uYjBlalZILUJfNTV3N01rRFFZY21kXzRTekZfUGtVbW5kNjMzeWF6SVg2N056N2Uwbkt5OEQtVnZyS0ZpeTVv0gF3QVVfeXFMUHZTLXJJTnlZVGZHSEk3ZUxwQy05WExwLWsyeTdmVk1IVldSR1h4bjdZZXpNZEtTLW5iMGVqVkgtQl81NXc3TWtEUVljbWRfNFN6Rl9Qa1VtbmQ2MzN5YXpJWDY3Tno3ZTBuS3k4RC1WdnJLRml5NW8?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 128,
          "name": "[GAM]앤스로픽 1조달러 돈잔치 ② 데이터센터 건설·전력·냉각 기대주는",
          "easy": "",
          "quote": "[GAM]앤스로픽 1조달러 돈잔치 ② 데이터센터 건설·전력·냉각 기대주는",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 135,
              "title": "[GAM]앤스로픽 1조달러 돈잔치 ② 데이터센터 건설·전력·냉각 기대주는 - 뉴스핌",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE1SZWhSdFlCUmdOSVRpSWM5UHR1RmNmVV9nOVhCT0hOYk1KUU15T0JCcl9wUllVRzNsTEF6bGZLTWRzbkNucE5UOFFtVXlRZjhENHVGS0tlMF9COERI?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 129,
          "name": "데이터센터, 지역 분산과 재생에너지 의무화를",
          "easy": "",
          "quote": "데이터센터, 지역 분산과 재생에너지 의무화를",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 136,
              "title": "데이터센터, 지역 분산과 재생에너지 의무화를 - 단비뉴스",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE5kWEFaTkowVFByUXZONURTdDJZWEk2UWVJTUduOS1jeE5idmJVcXB4SjFOWkJJRmpvMFE2WkRWZGtoNzFfbkRzQlAzOTIzNUUxWXpWcUI2Y0JLelZFRmV5SF9DaDZDaGp2NGxN?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 130,
          "name": "AI 데이터센터 탄소배출 ‘깜깜이’…빅테크, 전력 쓰고 책임 숨기나",
          "easy": "",
          "quote": "AI 데이터센터 탄소배출 ‘깜깜이’…빅테크, 전력 쓰고 책임 숨기나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 137,
              "title": "AI 데이터센터 탄소배출 ‘깜깜이’…빅테크, 전력 쓰고 책임 숨기나 - ESG경제",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5CTXl3Yy1xTTRPbzB6WEhEVnVhVFJPb1h5eFJVenVHN2FhQVVUa2xRTVdoUElXSWtzcVAzVTFoMDFCQ3ZsbUdJbGFkLWtQbEtoalJ0bkFfZnpZOV9DOXpMLTRxMFVHS3Q2dlQwQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 131,
          "name": "스페이스X, 美애리조나에도 67조원 들여 데이터센터 건설 계획",
          "easy": "",
          "quote": "스페이스X, 美애리조나에도 67조원 들여 데이터센터 건설 계획",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 138,
              "title": "스페이스X, 美애리조나에도 67조원 들여 데이터센터 건설 계획 - 연합뉴스",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1EZm1wbzF6TnZvSlRnSUtDVndtbU5nWDd6Y0xQRXM4clVQdWZvdDljWTNLQW5QS09FWFV1aEh1RUsxTlRFNWR6UVA1S01NNmpuQnFsVTFUb1FZeVXSAWBBVV95cUxNcEJoaEdWanhkZUxiTUpMM1JZOGZsUGtmeEVUT3gwZVpSRDM1RzlkR1hBR1dqejNxRjBxRGNXeExocHN4bGVocHRUaGpiU3pJQ1VHZy1EQlBmYkpXOXlRMkw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 132,
          "name": "랙당 1MW 전력 시대, 전력 변환과 아키텍처의 근본적 전환이 필요하다 - https://www.autoelectronics.co.kr/",
          "easy": "",
          "quote": "랙당 1MW 전력 시대, 전력 변환과 아키텍처의 근본적 전환이 필요하다 - https://www.autoelectronics.co.kr/",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 139,
              "title": "랙당 1MW 전력 시대, 전력 변환과 아키텍처의 근본적 전환이 필요하다 - https://www.autoelectronics.co.kr/",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE54WWhpQlgzcHpEZ3BsZnRzbXZXNk41NGZBSnJ2aWxWRFc5dGdfYml6c3UzdWRjZkoyMDhObWlIdWNhajVsQ1ZLU3RZUkFpbDZBRUxqaHNtNVJKX3Ayb0hYTTIxT1ZScDZ4SG04YjJvRFEyZHVl?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 133,
          "name": "엘리스그룹, B300 모듈형 AI 데이터센터 가동…PUE 1.1 이하 목표",
          "easy": "",
          "quote": "엘리스그룹, B300 모듈형 AI 데이터센터 가동…PUE 1.1 이하 목표",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 140,
              "title": "엘리스그룹, B300 모듈형 AI 데이터센터 가동…PUE 1.1 이하 목표 - 테크월드",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9lTi11Vnp1M1BYNlgzYUVwZThfRjhtdWNMVklfRWduT2ZOVG83MmVWOFczYUlIX0x4R0hvTm5Eam1LUFZlRXdWN0NLeFV0WTE5cVlmN0hjTGp0WURKalNFaDhvY2RNLUIx?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 134,
          "name": "현대엔지니어링, 미래 에너지 융합해 ‘친환경 데이터센터’ 구상한다",
          "easy": "",
          "quote": "현대엔지니어링, 미래 에너지 융합해 ‘친환경 데이터센터’ 구상한다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 141,
              "title": "현대엔지니어링, 미래 에너지 융합해 ‘친환경 데이터센터’ 구상한다 - 투데이신문",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1LLVZDcTJCVVVZMkpZTDVnb0d0bkdHVFJidlhSZTg3WXNOV3NYcVU4TldMQWEyRGF1SktmZDdnQVdTOWRSUnQ2VXA1NFBiWS16bmFMVHRsSE4wWEE1bXNzTGs4dV9sSjdndXh3em82Z9IBb0FVX3lxTE1LLVZDcTJCVVVZMkpZTDVnb0d0bkdHVFJidlhSZTg3WXNOV3NYcVU4TldMQWEyRGF1SktmZDdnQVdTOWRSUnQ2VXA1NFBiWS16bmFMVHRsSE4wWEE1bXNzTGs4dV9sSjdndXh3em82Zw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 135,
          "name": "골드만삭스, 페르시아만 LNG 공급 차질로 TTF 가스 가격 상승 전망",
          "easy": "",
          "quote": "골드만삭스, 페르시아만 LNG 공급 차질로 TTF 가스 가격 상승 전망",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 142,
              "title": "골드만삭스, 페르시아만 LNG 공급 차질로 TTF 가스 가격 상승 전망 - Investing.com 한국어",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMidkFVX3lxTFBBMEd5cVNhdlpQTi1rYldiLWlKZDNDUGpGTG9Zb2JWc1dReWREUDB5NU5jYV9rZzRaUlM0cXpLUDFld09kb3AzWUo3MnNZN19PMUZtRW5EYTc2aElPNDJXWTdmZ0VrdTR6QUd5SkVYR1FPV2RMdlE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 136,
          "name": "흔들리는 글로벌 LNG 시장… 한국의 대응 전략은",
          "easy": "",
          "quote": "흔들리는 글로벌 LNG 시장… 한국의 대응 전략은",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 143,
              "title": "흔들리는 글로벌 LNG 시장… 한국의 대응 전략은 - 에너지플랫폼뉴스",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE52MHFzQmFOZVdTTUtUWkR2OXV0UE5kNVp4MWFZTU8xUEs2a0pwZEZteWVMUlRWNzFiMS1IQXVzSllVeUdtNDZtUE9SWU1oU1MzeGt3ZFF0OGw5T3BZQWNCbFhMLVZtRXdpRm1qRdIBcEFVX3lxTE9nV1pGZ292TTZWMnNEOS0tX0F6ZGtnWVQ0ZmVUZ2lzMzYxWjgzU0Y5S0VGRDF2QU9zamxPVGVDempsWVpJN0ZnUWVhbVBVbW9PWTg2ZFM0STZ4Y0o4QlhiMWljRGtjRlZUVTB6VHJqbDc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 137,
          "name": "JKM 뛰자 한국가스공사 실적도 날았다…배당 확대 기대 커지나",
          "easy": "",
          "quote": "JKM 뛰자 한국가스공사 실적도 날았다…배당 확대 기대 커지나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 144,
              "title": "JKM 뛰자 한국가스공사 실적도 날았다…배당 확대 기대 커지나 - 핀포인트뉴스",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTFBKZk9TaDNvQjduSm5pdGJEV2QyTHJ3ZlBTbG4wT0hfUUNmOElhREhpU1lZVUVxVVE2TldXNHRXSzBEOGZLV0lQUHBFbjluX0VrRVFNbkV2TF9mUXA2clN3TmQyRnZsbzBkUDBhSWlqdzlEM2VfR1ZR0gF3QVVfeXFMUEpmT1NoM29CN25Kbml0YkRXZDJMcndmUFNsbjBPSF9RQ2Y4SWFESGlTWVlVRXFVUTZOV1c0dFdLMEQ4ZktXSVBQcEVuOW5fRWtFUU1uRXZMX2ZRcDZyU3dOZDJGdmxvMGRQMGFJaWp3OUQzZV9HVlE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 138,
          "name": "피치, 아태지역 가스공급업체 수익성 악화 전망",
          "easy": "",
          "quote": "피치, 아태지역 가스공급업체 수익성 악화 전망",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 148,
              "title": "피치, 아태지역 가스공급업체 수익성 악화 전망 - 투데이에너지",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5vRGZpdXM1MW1yNkdRdDJlUFhVSmk3a3VyaF81d3g1NjVFUFRpV0ZmOTRxVkd3YzdlTzFFOEhQWmRhX3AyUzJOMF8yNV9ZLXg0a0ZDMmg4c1RpcHdYb1VuNjVIWlRoNWFLQXFKcA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 139,
          "name": "한국, 중국 수입시장 6개월째 1위…미국선 9→6위",
          "easy": "",
          "quote": "한국, 중국 수입시장 6개월째 1위…미국선 9→6위",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 150,
              "title": "한국, 중국 수입시장 6개월째 1위…미국선 9→6위 - 연합뉴스",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9RTTBGODMyR1NINUFJQWxxVE5BTTZLRGV1Wmw1SnhEVUhESDJoNXZPcXFZblJFT085VUNYX1VNZ3VqamxXMTQzamFYd09DaDRmWF9QbWdCY3ZxMUwxTHg5RtIBYEFVX3lxTE9RTTBGODMyR1NINUFJQWxxVE5BTTZLRGV1Wmw1SnhEVUhESDJoNXZPcXFZblJFT085VUNYX1VNZ3VqamxXMTQzamFYd09DaDRmWF9QbWdCY3ZxMUwxTHg5Rg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 140,
          "name": "[사이언스영상] 로봇도 롤러스케이트를? 바퀴로 달리는 휴머노이드",
          "easy": "",
          "quote": "[사이언스영상] 로봇도 롤러스케이트를? 바퀴로 달리는 휴머노이드",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 174,
              "title": "[사이언스영상] 로봇도 롤러스케이트를? 바퀴로 달리는 휴머노이드 - DongA Science",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE5mU3NzR09ZTlFtWTRiZzhiemZ6U1pfUlJONElBQmN2MHpTbWJDU2loWUtFRDRFYkVnNXY3LUtFbUV3M2xkQWNBUjhSNWZjLTloZktJUw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 141,
          "name": "[로봇 온사이트] 휴머노이드 시대, 유럽의 자리는",
          "easy": "",
          "quote": "[로봇 온사이트] 휴머노이드 시대, 유럽의 자리는",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 175,
              "title": "[로봇 온사이트] 휴머노이드 시대, 유럽의 자리는 - 더구루",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE1HSlFZa19kOF9DLWlnU08wNTFuS2h3QXNSaFZuYkhnMnVPc25CV29FQ2I4MXBKSWRhWUIwVm1zeF85UWlXYUZBeUlqM21pcFdQaXRGQjdyQWxGUUhpZ0E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 142,
          "name": "MSCI 한국 스몰캡에 5개 종목 신규 편입···AI·로봇·원전株 두각",
          "easy": "",
          "quote": "MSCI 한국 스몰캡에 5개 종목 신규 편입···AI·로봇·원전株 두각",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 176,
              "title": "MSCI 한국 스몰캡에 5개 종목 신규 편입···AI·로봇·원전株 두각 - 시사저널e",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE5vTDc2VmFuT09MclhQazFvdU9zX2RMS0xHOTNHUGh3c3lsaXVRU0VybmJZRXd5dGlFMF9iUjQ5bWtvYmdIeDRoTFFXU0NBS1hFUEdoMENtMzRoYlpEVXlETnVjVHJHSjM2R29BcS10X3ljUdIBdkFVX3lxTE1fbkVBRjltcDJWZ1pXQU1aX2xseUNLbUpGRmVjcVI5b2FpZFZVVXVYSVZ4d1ZSNGVHRHNsdGFiTmhuZlJmczVKX1NDdEREYU5uQm9oMXQ3cWFCSDBkY19QU2w4c05iUnpHZjliSHNRUXRCbXZaamc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 143,
          "name": "울산 남구, 中상하이 '휴머노이드 로봇 실증기지' 찾았다",
          "easy": "",
          "quote": "울산 남구, 中상하이 '휴머노이드 로봇 실증기지' 찾았다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 177,
              "title": "울산 남구, 中상하이 '휴머노이드 로봇 실증기지' 찾았다 - 뉴시스",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTFBOYXY1ZHd2WU9JaElibGhYM0lidDJIT1FoeE1QLS1WN08yMWZGQ0pxbXl6bVJzZG53S1gyWVVCRXZ3cC1POFIyMG5INUVoNFhvM2hzQUZMR09EOWw3eU9fdTI1Q2VnV3owN25uR0FuUTNHNzBsT2Q5edIBeEFVX3lxTFBOYXY1ZHd2WU9JaElibGhYM0lidDJIT1FoeE1QLS1WN08yMWZGQ0pxbXl6bVJzZG53S1gyWVVCRXZ3cC1POFIyMG5INUVoNFhvM2hzQUZMR09EOWw3eU9fdTI1Q2VnV3owN25uR0FuUTNHNzBsT2Q5eQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 144,
          "name": "엑스와이지-KAIST,휴머노이드 기반 인간–로봇 상호작용 공동 연구 협약 체결",
          "easy": "",
          "quote": "엑스와이지-KAIST,휴머노이드 기반 인간–로봇 상호작용 공동 연구 협약 체결",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 179,
              "title": "엑스와이지-KAIST,휴머노이드 기반 인간–로봇 상호작용 공동 연구 협약 체결 - 로봇신문",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9QUWdWempzejdaVWxhUUVCVmk1ZUI3RGs3MXB1WlF0ZkJwcnFEME9vekxQMjhEbzlOUXdjNjhxblJqaWc4NTZGZ2VPRnlUTjZ0aEhMbFRkWDNMUkFxMG9GT0dRVVVXbDR0M3FFUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 145,
          "name": "中 광군제, '200만원 휴머노이드' 판매 두 배 이상 급증 - 머니투데이",
          "easy": "",
          "quote": "中 광군제, '200만원 휴머노이드' 판매 두 배 이상 급증 - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 180,
              "title": "中 광군제, '200만원 휴머노이드' 판매 두 배 이상 급증 - 머니투데이 - 머니투데이",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBqUm5VeVYySno2dXNXcUNxaGMwbnhtTGRnZ19raGY1TllmdWJLbHJheUoxblQtUURPVl9RaTN5dEgtZl80QndRQ1hmdkowYkFRVGtHcFp2SGxOWWtiTGZXbzdGZXZyZlM1TmNmZ0Rn0gFuQVVfeXFMUGpSblV5VjJKejZ1c1dxQ3FoYzBueG1MZGdnX2toZjVOWWZ1YktscmF5SjFuVC1RRE9WX1FpM3l0SC1mXzRCd1FDWGZ2SjBiQVFUa0dwWnZIbE5Za2JMZldvN0ZldnJmUzVOY2ZnRGc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 146,
          "name": "JP모건 “미국 휴머노이드 2030년 40만대”…한국 로보티즈 주목",
          "easy": "",
          "quote": "JP모건 “미국 휴머노이드 2030년 40만대”…한국 로보티즈 주목",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 181,
              "title": "JP모건 “미국 휴머노이드 2030년 40만대”…한국 로보티즈 주목 - 이데일리",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMigAFBVV95cUxQWEl4ZnRyZ3U0dk01NGUybmxKSXduT0t4bmEzTUk1X2NMbDZieWl6YVBLRmFWejI3Ujg3WjQzM096ZGhGbG5JWGlpUlJrTU5jWHJKWnFYUlRrRTdyMkVDRm9pcFE4dlBuS1lqUHJOLS1nbUduVTVJMEE4YzZ5bzhZbg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 147,
          "name": "2차전지 연구실·소재공장 찾아 독일 날아간 경남정보대 학생들",
          "easy": "",
          "quote": "2차전지 연구실·소재공장 찾아 독일 날아간 경남정보대 학생들",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 183,
              "title": "2차전지 연구실·소재공장 찾아 독일 날아간 경남정보대 학생들 - 아시아경제",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9ocjBJdGlHSTh5a1Rwa0Q1eExJYkg2a1o1QzRXclZxTUFRSjZkUDlGQWZOUFdVQXNzckhrRklPQXBMQ3JXLTEwQXBrTzc3X3BXaUdCdGRncXNPV2RIeGNYUw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 148,
          "name": "에이비알, '2026 지식재산(IP) 금융 우수사례 기업' 선정 - 머니투데이",
          "easy": "",
          "quote": "에이비알, '2026 지식재산(IP) 금융 우수사례 기업' 선정 - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 185,
              "title": "에이비알, '2026 지식재산(IP) 금융 우수사례 기업' 선정 - 머니투데이 - 머니투데이",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE1DTlRYY0t0RXNkNDhXWEN5RVE0YnFuRXE5TDVwYm14NWZlLVNnT3Z2dHNhTnVEb25CV0FtWkZ0R1NSX3Q1TzRZVk1BMWJWQWRUa2lVZEJtQW1ROTZBeEdfMTF3UlpZQUxLY3NMMlItY0VGd9IBckFVX3lxTE1DTlRYY0t0RXNkNDhXWEN5RVE0YnFuRXE5TDVwYm14NWZlLVNnT3Z2dHNhTnVEb25CV0FtWkZ0R1NSX3Q1TzRZVk1BMWJWQWRUa2lVZEJtQW1ROTZBeEdfMTF3UlpZQUxLY3NMMlItY0VGdw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 149,
          "name": "자체 제작 배터리로 RC카 구동...인하대 미니카 경진대회",
          "easy": "",
          "quote": "자체 제작 배터리로 RC카 구동...인하대 미니카 경진대회",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 189,
              "title": "자체 제작 배터리로 RC카 구동...인하대 미니카 경진대회 - 한국경제",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1MNi16Nnhla1lpNFJZcHRtMlg2c3dqNmlSVWpfN1NaMUF6b0hZYkplaUxwd1BnMFlaLWEtN0ZpajBYNm03MDFxS0lDQUtZZEpZaXFBWkR1SDkxQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 150,
          "name": "Quantinuum·일본 이화학연구소, 양자·AI 슈퍼컴퓨팅 협력 확대…오류 허용형 양자컴퓨터 개발 추진",
          "easy": "",
          "quote": "Quantinuum·일본 이화학연구소, 양자·AI 슈퍼컴퓨팅 협력 확대…오류 허용형 양자컴퓨터 개발 추진",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1984,
              "title": "Quantinuum·일본 이화학연구소, 양자·AI 슈퍼컴퓨팅 협력 확대…오류 허용형 양자컴퓨터 개발 추진 - 양자신문",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9ReXczRTlldXhsZHFLQ21QNmpmYXNZbE40NElvVUtaR3ptdm1zSE9zZzhqcloybHo4S0xLdzR3Q3J0ZDVkTHJ2TElhWWVrYWtRcWpwTElHWXNYQzlfd2I0VmlBSmVkU0FDWFpGQUhKWQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 151,
          "name": "퀀티넘, 양자컴퓨팅 기술 우위 주목...투자의견 '매수'-BTIG",
          "easy": "",
          "quote": "퀀티넘, 양자컴퓨팅 기술 우위 주목...투자의견 '매수'-BTIG",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1986,
              "title": "퀀티넘, 양자컴퓨팅 기술 우위 주목...투자의견 '매수'-BTIG - 이데일리",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMigAFBVV95cUxOV01pd3A3N3RhcVNjSVQtZTNlQ2x2OE8tUmRPdUpyRHhieEU2bUVSVjl4dUhWRUU0VmI3TkpGZUt6WldVakU4VWo1cnh1WVlQSHZyblowaWVQLVFaaEpMbjlOeUl0OHB5OFNRbkp5WVRhRS1qWmx3OUtyUkc2S1ZycA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 152,
          "name": "양자 QX 스케일업 밸리 3년…큐노바 수출·오큐티와 쿼드 161억 투자 유치",
          "easy": "",
          "quote": "양자 QX 스케일업 밸리 3년…큐노바 수출·오큐티와 쿼드 161억 투자 유치",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1987,
              "title": "양자 QX 스케일업 밸리 3년…큐노바 수출·오큐티와 쿼드 161억 투자 유치 - 스타트업엔(StartupN)",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5aY3l5T1NQUGsyMXZabTBjVExuVHgxTnZHdGFzRUoxZG12X2lCUVhMUk4weW10WnZSYTNrRWpMcUE5S1o1RTF0T04yTGdBRnJJZThTcTBieUJHaU1XNFJKUVAwSlVYZXFDRDBKUtIBbEFVX3lxTE5aY3l5T1NQUGsyMXZabTBjVExuVHgxTnZHdGFzRUoxZG12X2lCUVhMUk4weW10WnZSYTNrRWpMcUE5S1o1RTF0T04yTGdBRnJJZThTcTBieUJHaU1XNFJKUVAwSlVYZXFDRDBKUg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 153,
          "name": "Q-CTRL, 2억9000만 달러 투자 유치…양자 소프트웨어 유니콘 기업 등극",
          "easy": "",
          "quote": "Q-CTRL, 2억9000만 달러 투자 유치…양자 소프트웨어 유니콘 기업 등극",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1988,
              "title": "Q-CTRL, 2억9000만 달러 투자 유치…양자 소프트웨어 유니콘 기업 등극 - 양자신문",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE91cUVMTmpsMzVNVUtFWjdOcS1wOVRKNFF1VWVRMVgyMk1jbGtEVkRBTXRuM2RVbTByaF9nN3hKb2FEeC1iZVpvalNpNDZwSnhCNFNwdDdhTUM2OGg5ODRCM0hyc3kySTY0OVk3dm8wYw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 154,
          "name": "IonQ, 카라소프트와 전략적 제휴…미국 공공부문 양자 기술 공급 확대",
          "easy": "",
          "quote": "IonQ, 카라소프트와 전략적 제휴…미국 공공부문 양자 기술 공급 확대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1989,
              "title": "IonQ, 카라소프트와 전략적 제휴…미국 공공부문 양자 기술 공급 확대 - 양자신문",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBTb1hMWUtqTGExNVI2bUVYdjBBLVdiOFRQWWx0TXBvdVRTV18yeTIwM3Rqek0zNmFRaXNPZV9pTkI0ejg4MlZ6eGhLSFR0cFRjQWFRa0g5bHZHMmJZamItTldQYlRpZTFHR2VsY1lzVQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 155,
          "name": "이노폴리스벤처협회, ‘2026 양자전환 네트워킹 포럼’ 개최",
          "easy": "",
          "quote": "이노폴리스벤처협회, ‘2026 양자전환 네트워킹 포럼’ 개최",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1990,
              "title": "이노폴리스벤처협회, ‘2026 양자전환 네트워킹 포럼’ 개최 - IT조선",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE9LNFpTTUhPSjV3dXF0QTJzYXhaNVBEd1lkdmp2dHd1YWlGLUtSekRoWmtNaTdqTEZvTVZWVUtGZ0ZPNzNnOHZGbUhKUXl4SlIxUzhsTi1VOFlNa0tsOWFZRE81S240Q3lvOGxIbDQ2T2gtSVB20gF0QVVfeXFMT0s0WlNNSE9KNXd1cXRBMnNheFo1UER3WWR2anZ0d3VhaUYtS1J6RGhaa01pN2pMRm9NVlZVS0ZnRk83M2c4dkZtSEpReXhKUjFTOGxOLVU4WU1rS2w5YVlETzVLbjRDeW84bEhsNDZPaC1JUHY?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 156,
          "name": "[BIO톡]지씨씨엘, 차세대 정밀 면역분석 장비 도입 外 대한뉴팜·지투지바이오",
          "easy": "",
          "quote": "[BIO톡]지씨씨엘, 차세대 정밀 면역분석 장비 도입 外 대한뉴팜·지투지바이오",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1993,
              "title": "[BIO톡]지씨씨엘, 차세대 정밀 면역분석 장비 도입 外 대한뉴팜·지투지바이오 - 글로벌경제신문",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9LMDFjV0JNY1FBWlB2UVo5bEFQSkpScGpoYlFPVmhIVVZjUHd4VTVnM0xBZHRkSU93Y1JNNWpxQTRnZ0hPdElPcWxlQkpPbkZJbUwzSVlCS2tkem12Z0FGNllydTZ6TmpNOVlVOVJlM0nSAXBBVV95cUxPSzAxY1dCTWNRQVpQdlFaOWxBUEpKUnBqaGJRT1ZoSFVWY1B3eFU1ZzNMQWR0ZElPd2NSTTVqcUE0Z2dIT3RJT3FsZUJKT25GSW1MM0lZQktrZHptdmdBRjZZcnU2ek5qTTlZVTlSZTNJ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 157,
          "name": "대웅제약, 장 점막 재생 신약 임상 진입…염증성 장질환 공략",
          "easy": "",
          "quote": "대웅제약, 장 점막 재생 신약 임상 진입…염증성 장질환 공략",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1999,
              "title": "대웅제약, 장 점막 재생 신약 임상 진입…염증성 장질환 공략 - 스트레이트뉴스",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE8yT252WHJ1NDltdUlfQTBRLUtrWHhYQ1VpaEFLR1ZJaDQtOE4tRVBPYk9ZZHgzdzhOTk5GR2JqZW00NnBFZmRWNXY4ZXdpbUZwRWtDYVVTa1FIQlNaQUJDRXY5dUt1eXFNMjdYVEJLU25qeEnSAXdBVV95cUxQQ2U5d0lLYldLdlVQT0hBLVRDSXNDdE1iTklfdUV3cUg0VVNOVnY2WFctSVBpcE9mRlJvRjFvVkpONjV5dnlvNzJweGIxY0ZpenpQcDZDbEhoSzVqRDRwT09kcXk5NXBLVFZPTkI0R2FUZ1JSUFhScw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 158,
          "name": "K문샷으로 존재감 높인 '뇌컴퓨터인터페이스'…\"기초·임상·공학 잇는 연결고리가 관건\"",
          "easy": "",
          "quote": "K문샷으로 존재감 높인 '뇌컴퓨터인터페이스'…\"기초·임상·공학 잇는 연결고리가 관건\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 2000,
              "title": "K문샷으로 존재감 높인 '뇌컴퓨터인터페이스'…\"기초·임상·공학 잇는 연결고리가 관건\" - DongA Science",
              "source_name": "'뇌과학 BCI 기술'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE9kR3RhU0hnMVFSNEhkaE1wZ0ZrZHIyR0hGSnBNSzV1NWZ4R0JvSjVhX1VLVEdrX21odWNEdTA2M1pCVUF1MUlncGJvZmdNS3Q4Rzd4Xw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 159,
          "name": "“머리에 쓰기만 하면 끝”…뇌파 자동 측정 ‘스마트헬멧’ 나왔다",
          "easy": "",
          "quote": "“머리에 쓰기만 하면 끝”…뇌파 자동 측정 ‘스마트헬멧’ 나왔다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 2001,
              "title": "“머리에 쓰기만 하면 끝”…뇌파 자동 측정 ‘스마트헬멧’ 나왔다 - 헤럴드경제",
              "source_name": "'뇌과학 BCI 기술'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFB1QW5DT05tVU8yUzd5UURSMl92LUhrUnVJQ1JYWWduR1F5d2diVjZxUm1FNHRKWi1McGsydG1FLXg4XzNZSEFTb0VSSmRLMGlBYUg2MS1R?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 160,
          "name": "쓰기만 하면 뇌파 측정해 작업자 피로도 분석하는 헬멧",
          "easy": "",
          "quote": "쓰기만 하면 뇌파 측정해 작업자 피로도 분석하는 헬멧",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 2002,
              "title": "쓰기만 하면 뇌파 측정해 작업자 피로도 분석하는 헬멧 - DongA Science",
              "source_name": "'뇌과학 BCI 기술'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE1nUEFPVWFCU3k1TUVEWTFWVVF4VnpPTS1Id2RGb3RyRmpBRkNTN00ya21kdHB5WUF4aHo4VzJsNTNNZ3lmb0paNExzM3dmbTJfUWRkTA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 161,
          "name": "정부 재생에너지 정책 \"빨간불, 빨간불\"",
          "easy": "",
          "quote": "정부 재생에너지 정책 \"빨간불, 빨간불\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 2003,
              "title": "정부 재생에너지 정책 \"빨간불, 빨간불\" - 뉴스펭귄",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE55Uzc2ZG01WVBHVnlibnpaeUJzNTNKek1LR2R4MUJzd2Z2enZyMlFoNVp5T081eHBJeTNIVEVMUklTSGstdDl4SXdxOWt1bDJvN3NISVVHQi1LdGxQLUtNenJRV0NWZzFMd1FobjFB0gFyQVVfeXFMUDVsVlUzUm55QUtkTEJtUGJXSW5PRXVkdkRWdVdqRmhnbjNiSFM4dTE1RjhPSEQ1UUdqV0ZvLUxWTzFGUTFmcEY2N2RKSFpKOUZBeTZic0dCbkVnLURPZ2xhT0dRQUlRY1oxdHhWcENUZmdR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 162,
          "name": "재생에너지 100GW 목표 ‘빨간불’… 기후솔루션, ‘재생에너지 100GW 신호등’ 공개",
          "easy": "",
          "quote": "재생에너지 100GW 목표 ‘빨간불’… 기후솔루션, ‘재생에너지 100GW 신호등’ 공개",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 2006,
              "title": "재생에너지 100GW 목표 ‘빨간불’… 기후솔루션, ‘재생에너지 100GW 신호등’ 공개 - 인더스트리뉴스",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE1RSzJMMUdWY0xRdHRJQUwyQmpweXZkMnZyQUt1ZHlXd2tWYWlrOHhteGx5VlVOWGlTNm5qMjB0TTRQcEg5VW9NcWp5SHRaMEU4YVE5eTFTc2xGQUZoNU9wLTVaQlhxMXpjWEhycXFtd3kwZw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        },
        {
          "rank_by_count": 163,
          "name": "‘기후악당’ 낙인 찍힌 한국, COP31에서도 되풀이 되나",
          "easy": "",
          "quote": "‘기후악당’ 낙인 찍힌 한국, COP31에서도 되풀이 되나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 2009,
              "title": "‘기후악당’ 낙인 찍힌 한국, COP31에서도 되풀이 되나 - 데일리한국",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTFA3MkxMSDVnLUhuU3VPQ1I3X2xBLUE2a3NsQ1dGUGp2NXgxU3ROVVRVVlRMUkRnVE1ZeDVlRFNTY0ZIenh5dlY4TWtRaGFhaUphNkJyaTdwNG54RkpURW5DdU1VeWFqWXpBeVJjTXZnVdIBc0FVX3lxTE9jZlhVV3dwZUY5UVFXVjZ5MGYwRGhyUUFpZnQyZ2J4TnhLbXFGb2ItMG1VVVFJQ2ZGMFllYWNBVzNxQl9wc0JxR3FHbjRRcGFfN1B5Z3pfemVIaU5jVkxFaExZcXU2cXpXVG5tdWFOeUg2ZmM?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        }
      ]
    },
    "ch5_papers": {
      "title": "챕터 5 · 논문 (보관함)",
      "addr": "처리-4",
      "status": "아직 없음 (하루 약 75편 보관만 · 초록 풀이 구현 전)",
      "note": "처리-4(논문 초록 풀이)는 설계만 확정되고 아직 코드는 0줄입니다. 오늘 문 앞에서 분류된 논문 원본 제목 목록만 그대로 보여줍니다.",
      "count": {
        "val": 75,
        "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
      },
      "papers": [
        {
          "title": "Zugwise: Domain-Aware Game Reconstruction for Digitizing Handwritten Chess Scoresheets",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14544",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "Cleaning an Agent's History Hurts When the World Still Holds the Error",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14654",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "Together Compiler: Continual Compilation for AI Inference",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14681",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "When Should Semantic Priors Enter Partially-Identified Causal Discovery?",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14736",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "SynthCorp: A Platform for Creating Benchmarks for Data Agents",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14765",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "Rational Use of Time for Social Coordination in Humans and AI",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14766",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "Leaderboard Hacking: Preference-Based Model Evaluations are Vulnerable to Manipulation",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14769",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "Robust Task-Aware State Estimation from Pre-trained Perception",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14781",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "When Is Proof-Step Verification Worth Its Cost? Operating Requirements of Certify-or-Decline Verification for Open-Weight Mathematical Reasoning",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14794",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "GenPFN: An In-Context Tabular Foundation Model Approach for Augmenting Small Datasets in Engineering",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14804",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "AutoAssumption: Searching over Assumptions Discovers ML-Systems Algorithms",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14844",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "Open Challenges and Opportunities in Human-Agent Systems",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14846",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "Effective Teacher Support for Reasoning Distillation",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14850",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "Can an AI Agent Be Epistemically Akratic? Higher-Order Evidence & the Limits of Self-Correction",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14889",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "MuEdit: An efficient multi-task editing method towards inter-domain knowledge conflicts",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14910",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "Edge-Native Multimodal RAG: Hardware-Aware Quantization and Architectural Optimization for Consumer GPUs",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14924",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "Provably Optimal HBT Legalization in Seconds: Certified Optima Reveal Where the Headroom Really Lies",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14928",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "Emergent Vision-Shaped Thinking in Text-Only Reasoning through Multimodal Training",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14942",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "RSI-PDEbench: A Benchmark for Self-Improving Agents in PDE Solving",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14949",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "Termination Lag: Coding Agents Solve Early but Stop Late",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14960",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "Early Signals, Strong Decisions: Prefix-Guided Sampling for Parallel Test-Time Scaling",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14965",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "Same Task, Different Statement: When and How Reformulation Helps LLM Problem Solving",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14997",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "EvoX: Rethinking the Agent Harness as a Runtime Policy",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.15006",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "Science Prediction Universe",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.15049",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "Advancing Weighted Partial MaxSAT Solving via Differentiable GPU Guidance",
          "source_name": "arXiv AI(cs.AI)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.15091",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "Learning of LPV Models With Linear Fractional Representations: Initialization, Optimization, and Conditioning",
          "source_name": "arXiv 전력·제어(eess.SY)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14668",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "A Three-Stage Unsupervised Online Physics-Informed Neural Network for Microgrid Optimal Power Flow",
          "source_name": "arXiv 전력·제어(eess.SY)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14716",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "U.S. Data Center Growth Through 2030: A Critical Review of Grid Adequacy and Transmission Expansion Planning",
          "source_name": "arXiv 전력·제어(eess.SY)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14759",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "An Inductively Assisted N :1 Switched-Capacitor Ladder Converter",
          "source_name": "arXiv 전력·제어(eess.SY)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14778",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        },
        {
          "title": "AgentiGrid: Agentic AI for Steady State and Transient Studies",
          "source_name": "arXiv 전력·제어(eess.SY)",
          "published": "",
          "link": "https://arxiv.org/abs/2611.14854",
          "addr": "처리-4",
          "source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
        }
      ]
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
        "line_out": "내보냄: 수집 대상 38곳 (v2_secretary/결과/2026-11-14_하루_전체.md)",
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
        "line_out": "내보냄: 오늘 들어온 글 2010건 (v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json)",
        "metrics": {
          "in": 38,
          "out": 2010,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
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
        "line_in": "받음: 들어온 글 2010건 (새 글 1862 + 이미 본 글 148)",
        "line_rule": "규칙: gate_rules/길_규칙.txt · 관심_키워드.txt · 반키워드.txt (AI 0콜)",
        "line_out": "내보냄: 거푸집1 119 · 거푸집2 12 · 뉴스 176 · 제외 1405 · 논문T 75 · 모름 75",
        "metrics": {
          "in": 2010,
          "out": 1862,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
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
        "line_in": "받음: 문 앞 제외 규칙에 걸린 글 1405건",
        "line_rule": "규칙: exclude.py + gate_rules/되살리기.txt (관심 키워드 든 글 표시)",
        "line_out": "내보냄: 결과/제외보관함/제외보관함.csv (2805행 누적)",
        "metrics": {
          "in": 1405,
          "out": 1405,
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
        "line_out": "내보냄: 한은 표 35행 · FRED 표 11행 · DART 표 111행(오늘)",
        "metrics": {
          "in": 119,
          "out": 122,
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
        "line_in": "받음: 문 앞 거푸집1 길 119건",
        "line_rule": "규칙: plate1.py 정규식 숫자 추출 + 직전 값 계산·공식 API 대조 (AI 0콜)",
        "line_out": "내보냄: 오늘 DART 표 111건 · 한은 0건 · FRED 11종",
        "metrics": {
          "in": 119,
          "out": 111,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/결과/거푸집1/2026-11-14_거푸집1.md"
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
        "line_out": "내보냄: 오늘 요약 9건 (결과/거푸집2/2026-11-14_거푸집2.md)",
        "metrics": {
          "in": 12,
          "out": 9,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/결과/거푸집2/2026-11-14_거푸집2.md"
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
        "line_out": "내보냄: 사건 5개 묶음 (결과/뉴스/2026-11-14_뉴스사건.json)",
        "metrics": {
          "in": 176,
          "out": 5,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        }
      },
      {
        "addr": "처리-4",
        "group": "처리",
        "name": "논문 풀이",
        "files": "`papers.py` · 규칙 `gate_rules/논문_설정.txt`·`논문_주제.txt`·`논문_키워드.txt` → `결과/논문/`",
        "status": "**만듦·바퀴에 붙임(PC만, 깃허브 올리기 확인 대기)** — 새벽 `run_day` 5-1 단계(0콜 카드) + 낮 `v2-papers.yml`(풀이) (11-14 세션 나) · 그 전 (11-14 세션 가: 복사본 시험 통과 — 0콜 5일·AI 40콜 근거 일치 95.8%·97.5%·배선 6/6. 11-14 아침 손봄: 초록 날짜별 파일·출처 분야 상한·브리핑 10자리·`--from-cards`·`--revive`. 다음 = 세션 나: 새벽 바퀴엔 `--no-ai`만, AI 풀이는 새 예약 `v2-papers.yml` 낮 12~15시, 지시서 루트 `다음세션_처리4_논문.md`)",
        "status_kind": "separate",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 문 앞 논문T 길 75편",
        "line_rule": "규칙: 설계 확정(초록 풀이 + 상위 몇 편 본문), 정식 코드는 아직 없음(보관만)",
        "line_out": "내보냄: 문 앞 목록에 75편 보관 (v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json)",
        "metrics": {
          "in": 75,
          "out": 0,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
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
        "line_out": "내보냄: 결과/2026-11-14_하루_전체.md 외 5종 결과지",
        "metrics": {
          "in": 6,
          "out": 6,
          "calls": 0,
          "secs": 0.1,
          "num_source": "v2_secretary/결과/2026-11-14_하루_전체.md"
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
        "line_in": "받음: 2026-11-14 결과 파일들 + runs.jsonl + calls.jsonl + 구간_주소표.md",
        "line_rule": "규칙: export_panel.py 세기와 옮겨 적기 (새 공식 없음, AI 0콜)",
        "line_out": "내보냄: v2_secretary/결과/화면/panel.json",
        "metrics": {
          "in": 2010,
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
          "num_source": "v2_secretary/결과/문앞/2026-11-14_문앞교통정리_길별.json"
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
        "line_out": "내보냄: 실행 기록 7건 (최근: 2026-11-13 ok)",
        "metrics": {
          "in": 1,
          "out": 7,
          "calls": 43,
          "secs": 574.0,
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
