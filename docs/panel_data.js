// 자동 생성 파일 (v2_secretary/export_panel.py) — 직접 수정하지 마세요.
window.PANEL_DATA = {
  "schema_version": "2.1.0-panel-v1",
  "day": "2026-11-14",
  "generated_at": "2026-11-14 18:11:59",
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
      "val": 13,
      "source": "v2_secretary/결과/2026-11-14_하루_전체.md"
    },
    "ai_fails_day": {
      "val": 0,
      "source": "v2_secretary/결과/2026-11-14_하루_전체.md"
    },
    "run_secs": {
      "val": 324,
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
      "day": "2026-11-14",
      "start": "2026-11-14 09:19:28",
      "by": "github",
      "where": "GitHub",
      "mode": "run",
      "end": "2026-11-14 09:24:52",
      "secs": 324,
      "exit": 0,
      "result_md": true,
      "failed_stages": 0,
      "calls": 13,
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
      "title": "챕터 5 · 논문",
      "addr": "처리-4",
      "kind": "papers",
      "day": "2026-11-14",
      "status": "돎 — 2026-11-14 논문 풀이 60편 / 새 논문 223편",
      "headline": {
        "text": "오늘 새 논문 223편 · 풀이한 60편 중 전력망·계통 쪽이 29편으로 가장 많아요.",
        "n_new": {
          "val": 223,
          "source": "v2_secretary/결과/논문/2026-11-14_논문.json"
        },
        "n_done": {
          "val": 60,
          "source": "v2_secretary/결과/논문/2026-11-14_논문.json"
        },
        "n_waiting": {
          "val": 163,
          "source": "v2_secretary/결과/논문/2026-11-14_논문.json"
        },
        "n_failed": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-14_논문.json"
        },
        "top_tag": "전력망·계통",
        "top_tag_n": {
          "val": 29,
          "source": "v2_secretary/결과/논문/2026-11-14_논문.json"
        }
      },
      "flow": {
        "text": "오늘 풀이한 논문들 중에서는 전력망과 계통 운영을 다룬 연구가 가장 많았고, 제어 및 로봇 공학 관련 주제도 눈에 띄게 많았습니다. 전력망 분야에서는 데이터 센터의 전력 공급 안정성을 높이거나 전력망 회복력을 평가하는 연구가 주를 이뤘는데, 예를 들어 전력망의 다차원적 회복력을 평가하는 GRID-MRI 지표를 제안한 논문이 있거든요. 제어 분야에서는 드론이나 미사일처럼 움직이는 물체의 경로를 최적화하거나, 날개 고장 같은 돌발 상황에서도 안정성을 확보하는 기법들이 다뤄졌습니다. 이와는 조금 다르게 수학적 이론을 활용해 분산형 양자 네트워크에서 선형 방정식의 해를 구하는 알고리즘을 개발한 논문도 눈에 띄었습니다.",
        "by": "ai",
        "flags": []
      },
      "map": [
        {
          "tag": "전력망·계통",
          "n": 29,
          "n_done": 29,
          "one_lines": [
            "유선과 무선 충전기를 통합 제어하는 새로운 변조 전략을 개발했어요.",
            "전력망 변동성을 분석하는 모드별 참여 계수를 제안했어요.",
            "AI 데이터 센터의 전압 강하 대응을 위해 보상 장치들의 효과를 시뮬레이션했어요."
          ]
        },
        {
          "tag": "제어·로봇",
          "n": 20,
          "n_done": 20,
          "one_lines": [
            "데이터 효율적인 샘플링으로 비선형 제어를 실시간 구현했어요.",
            "쿱만 연산자와 딥러닝을 결합해 비선형 시스템의 공분산 제어 기법을 개발했어요.",
            "목표 지점 중력 보상으로 제어 복잡도를 낮추는 기법을 제안했어요."
          ]
        },
        {
          "tag": "AI 모델·학습법",
          "n": 7,
          "n_done": 7,
          "one_lines": [
            "카메라 영상과 조감도를 함께 생성해 주행 환경을 시뮬레이션했어요.",
            "교과서 구조를 살린 수학 학습 데이터셋을 만들어 모델의 추론 능력을 높였어요.",
            "언어 모델의 물리 지식을 활용해 영상 모델의 자기 개선 시스템을 개발했어요."
          ]
        },
        {
          "tag": "AI 안전·평가",
          "n": 1,
          "n_done": 1,
          "one_lines": [
            "시스템 원 모델의 능력과 신뢰도를 평가하는 SO-Arena를 개발했어요."
          ]
        },
        {
          "tag": "의료·바이오",
          "n": 1,
          "n_done": 1,
          "one_lines": [
            "CT 기도 영상을 수정 가능한 기하학적 구조로 변환하는 체계를 개발했어요."
          ]
        },
        {
          "tag": "수학·이론",
          "n": 1,
          "n_done": 1,
          "one_lines": [
            "분산형 양자 네트워크 흐름을 설계하여 선형 방정식의 해를 구하는 알고리즘을 개발했어요."
          ]
        },
        {
          "tag": "기타",
          "n": 1,
          "n_done": 1,
          "one_lines": [
            "시뮬레이션 보정 전이 학습으로 SAW 공진기 성능 예측 오차를 줄였어요."
          ]
        }
      ],
      "picks": [
        {
          "canon_id": "2611.15903",
          "badge": "전공",
          "why": "전공(전력·제어) 중 키워드가 많이 걸림: microgrid, voltage, battery, energy storage, data center"
        },
        {
          "canon_id": "2611.14815",
          "badge": "실무 인기",
          "why": "허깅페이스 추천 46"
        },
        {
          "canon_id": "2611.17098",
          "badge": "AI 교집합",
          "why": "인공지능 쪽인데 관심 키워드가 걸림: battery, data center"
        },
        {
          "canon_id": "2611.15140",
          "badge": "의외",
          "why": "오늘 풀이 중 드문 주제 '기타'(1편) — 키워드·추천수와 상관없이 고름"
        },
        {
          "canon_id": "2611.15712",
          "badge": "전공",
          "why": "전공(전력·제어) 중 키워드가 많이 걸림: power system, battery, energy storage, data center"
        },
        {
          "canon_id": "2610.40394",
          "badge": "실무 인기",
          "why": "허깅페이스 추천 44"
        },
        {
          "canon_id": "2611.16808",
          "badge": "의외",
          "why": "오늘 풀이 중 드문 주제 '수학·이론'(1편) — 키워드·추천수와 상관없이 고름"
        }
      ],
      "cards": [
        {
          "canon_id": "2611.16950",
          "title": "A Modulation Strategy for Bidirectional Integrated Onboard and Wireless EV Charging",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16950"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 10.0,
          "score_why": "전공 +3 · 키워드 3개(voltage, transformer, electric vehicle) → +6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "voltage",
            "transformer",
            "electric vehicle"
          ],
          "ai": {
            "easy1_title": "전기차 충전 장치를 하나로 합치려니 제어 방법이 마땅치 않았어요",
            "easy1_desc": "전기차의 유선 충전기(OBC)와 무선 충전기(WC)는 전력을 변환하는 부품을 공유하면 비용을 줄일 수 있는데요, 기존에 제안된 이중 활성 브리지(DAB) 기반의 통합 구조는 유선과 무선 모드를 오가며 작동하게 만드는 구체적인 제어 방식이 아직 알려지지 않았던 겁니다. 뭔 소리냐면, 하드웨어는 합쳤는데 정작 어떻게 신호를 줘야 할지 몰라 제대로 쓰지 못했다는 말이에요. 그래서 이 통합 구조를 실제로 돌릴 수 있는 새로운 제어 전략이 필요했던 상황입니다.",
            "easy1_evidence": "A previously proposed dual active bridge (DAB)-based OBC/WC shares the rectification stage between the OBC and WC; however, the modulation required to realize its wireless operation has not yet been reported.",
            "easy2_title": "유선과 무선 모드를 따로따로 제어하는 새로운 방식을 찾아냈어요",
            "easy2_desc": "연구진은 차동 모드와 공통 모드라는 두 가지 방식을 활용해 유선과 무선 충전을 각각 제어하는 전략을 내놓았는데요, 유선 모드일 때는 무선 경로에 전압이 생기지 않게 하고, 반대로 무선 모드일 때는 유선 경로에 전압이 생기지 않게 설계한 겁니다. 이렇게 하면 추가적인 접촉기 없이도 양방향 충전이 가능해지거든요. 시뮬레이션 결과 ±7.4 kW 환경에서 전력 추적과 독립적인 충전 작동이 잘 이루어지는 것을 확인했다는 겁니다.",
            "easy2_evidence": "This paper details a modulation strategy that enables the operation of the integrated OBC/WC topology.",
            "topic": "전기차의 유선 및 무선 통합 충전 시스템을 위한 새로운 양방향 변조 전략에 관한 연구예요.",
            "topic_evidence": "This paper details a modulation strategy that enables the operation of the integrated OBC/WC topology.",
            "points": [
              {
                "subtitle": "차동 및 공통 모드 제어",
                "desc": "유선 충전 시에는 차동 모드 전압을 생성하고 무선 충전 시에는 공통 모드 전압을 생성하도록 설계했어요. 각 모드에서 사용하지 않는 경로에는 전압이 발생하지 않도록 하여 상호 간섭을 막는 방식이에요.",
                "evidence": "Differential-mode operation is used for the OBC, and common-mode operation is used for the WC."
              },
              {
                "subtitle": "추가 부품 없는 양방향 충전",
                "desc": "기존의 DAB 위상 편이 전력 제어 방식을 그대로 유지하면서도 추가적인 접촉기 없이 양방향 전력 전송이 가능하게 만들었어요. 덕분에 하드웨어 구성을 단순하게 유지하면서도 유선과 무선 충전 기능을 모두 수행할 수 있는 겁니다.",
                "evidence": "The method preserves conventional DAB phase-shift power control and enables bidirectional power transfer in wired and wireless charging modes without additional contactors."
              },
              {
                "subtitle": "시뮬레이션 검증",
                "desc": "PLECS 소프트웨어를 이용한 오프라인 시뮬레이션과 PLECS RT Box 및 TI 마이크로컨트롤러를 활용한 하드웨어 루프 시뮬레이션을 통해 성능을 확인했어요. ±7.4 kW 출력에서 전력 추적과 충전기 간의 독립적인 작동이 잘 됨을 입증했다는 거예요.",
                "evidence": "Offline PLECS simulations demonstrate power tracking and decoupled charger operation at ±7.4 kW."
              }
            ],
            "one_line": "유선과 무선 충전기를 통합 제어하는 새로운 변조 전략을 개발했어요.",
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
          "canon_id": "2611.16892",
          "title": "Mode-in-Variance Participation Factors under Stochastic Excitation",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16892"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 10.0,
          "score_why": "전공 +3 · 키워드 3개(power system, voltage, frequency) → +6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "power system",
            "voltage",
            "frequency"
          ],
          "ai": {
            "easy1_title": "전력망이 흔들릴 때 어떤 모드가 범인인지 알기 어려웠어요",
            "easy1_desc": "전력망은 끊임없이 외부 자극을 받는데, 이때 전압이나 주파수가 왜 변하는지 정확히 짚어내기가 쉽지 않았거든요. 연구진은 시스템의 상태 변수를 모드별로 쪼개서 분석해 봤는데요. 각 모드가 전체 변동성에 얼마나 기여하는지 계산해 보니, 개별 모드와 모드 간의 상호작용이 어떻게 영향을 주는지 명확히 알 수 있게 됐다는 겁니다.",
            "easy1_evidence": "This paper investigates how the dynamic modes of a power system contribute to the stationary variance of its variables under continuous stochastic excitation.",
            "easy2_title": "모드별 기여도를 계산해서 전력망 제어의 길을 찾았어요",
            "easy2_desc": "연구진은 이번에 '모드 내 분산 참여 계수(PFs)'라는 새로운 지표를 제안했는데요. 이걸 활용하면 전력망의 주파수나 전압 변동을 일으키는 핵심 모드를 바로 찾아낼 수 있거든요. 어떤 모드를 제어해야 변동성을 줄일 수 있는지 구체적인 방향을 제시해 준다는 장점이 있는데, 복잡한 전력망에서 제어 효율을 높이는 데 큰 도움이 될 것으로 보입니다.",
            "easy2_evidence": "The proposed PFs can be used to identify modes governing the variability of important system quantities such as frequency and voltage, quantify the effect of modal interactions, and reveal control dynamics that can be targeted to reduce their stochastic variability.",
            "topic": "전력망의 동적 모드가 시스템 변수의 변동성에 미치는 영향을 분석하고 이를 제어하기 위한 참여 계수를 제안했어요.",
            "topic_evidence": "Using a modal decomposition of the covariance matrix, the variance of each state or algebraic variable can be resolved into components associated with individual modal responses and their interactions.",
            "points": [
              {
                "subtitle": "공분산 행렬의 모드 분해",
                "desc": "시스템의 공분산 행렬을 모드별로 분해해서 변수의 분산을 각 모드의 반응과 그 상호작용으로 나누어 분석했어요. 뭔 소리냐면, 전체 흔들림을 개별 모드와 모드 간의 관계로 쪼개서 살펴봤다는 말이에요.",
                "evidence": "Using a modal decomposition of the covariance matrix, the variance of each state or algebraic variable can be resolved into components associated with individual modal responses and their interactions."
              },
              {
                "subtitle": "모드 내 분산 참여 계수 정의",
                "desc": "분산의 구성 요소를 모드 내 분산과 모드 간 공분산으로 구분하고, 이를 정규화한 값을 모드 내 분산 참여 계수(PFs)라고 이름 붙였어요. 이 계수를 통해 어떤 모드가 시스템의 변동을 주도하는지 정량적으로 파악할 수 있다는 겁니다.",
                "evidence": "These components are shown to correspond to within-mode variance and cross-modal covariance, respectively, and the corresponding normalized contributions are termed mode-in-variance participation factors (PFs)."
              },
              {
                "subtitle": "전력망 시스템 검증",
                "desc": "연구진은 이 방법을 쿤더(Kundur) 2지역 시스템과 IEEE 39-버스 시스템에 적용해 봤는데요. 실제 전력망에서 주파수와 전압의 변동을 제어하기 위해 어떤 모드를 공략해야 하는지 효과적으로 보여줬다고 주장했어요.",
                "evidence": "These capabilities are demonstrated through case studies based on the Kundur two-area and IEEE 39-bus systems."
              }
            ],
            "one_line": "전력망 변동성을 분석하는 모드별 참여 계수를 제안했어요.",
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
            "flags": [
              "예측 의심: 어떤 모드를 제어해야 변동성을 줄일 수 있는지 구체적인 방향을 제시해 준다는 장점이 있는데, 복잡한 전력망에"
            ],
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16569",
          "title": "Can STATCOM and UPS-Based Voltage Support Mitigate Fault-Induced Reductions in AI Data Center Grid Power Draw?",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16569"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 10.0,
          "score_why": "전공 +3 · 키워드 3개(power system, voltage, data center) → +6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "power system",
            "voltage",
            "data center"
          ],
          "ai": {
            "easy1_title": "AI 데이터 센터가 전력망을 흔드는 문제",
            "easy1_desc": "요즘 AI 데이터 센터가 급격히 늘어나면서 전력망에 큰 부담을 주고 있는데요, 전압이 잠깐 떨어지는 사고가 나면 이 센터들이 전력을 급격히 줄여버리는 문제가 생깁니다. 이런 변화가 기기의 허용 범위를 넘어서면 전력망 전체가 불안해질 수 있거든요. 쉽게 말하면, 전력망이 흔들릴 때 데이터 센터가 오히려 짐이 되어 계통 전체를 위험하게 만들 수 있다는 말이에요.",
            "easy1_evidence": "These large electronic loads are interfaced through power electronic devices and can sharply reduce grid power intake during fault-induced voltage sags.",
            "easy2_title": "전압 보상 장치로 전력 공급을 지켜봤습니다",
            "easy2_desc": "연구진은 전압 보상 장치인 STATCOM과 무정전 전원 장치(UPS)를 활용해 이 문제를 해결해 보려고 했는데요, 1GW 규모의 데이터 센터를 IEEE 9-버스 시스템에 연결해 시뮬레이션을 돌려봤습니다. STATCOM은 가벼운 사고에서 전력 유지를 잘 돕고, UPS는 전압이 크게 떨어질 때 유효 전력을 줄여 반응 전력을 확보하는 방식으로 작동하거든요. 두 장치를 함께 쓰면 보조 부하를 지키는 데 효과적이지만, 아주 심각한 전압 강하 상황에서는 여전히 전력 수요가 크게 줄어든다는 한계도 확인했습니다.",
            "easy2_evidence": "This paper compares the individual and combined effectiveness of STATCOM and UPS-based voltage support in mitigating fault-induced reductions in grid power intake through electromagnetic transient simulations of a 1 GW AIDC connected to an IEEE nine-bus system.",
            "topic": "AI 데이터 센터의 전압 강하 대응을 위해 STATCOM과 UPS 기반의 전압 지원 효과를 분석했습니다.",
            "topic_evidence": "This paper compares the individual and combined effectiveness of STATCOM and UPS-based voltage support in mitigating fault-induced reductions in grid power intake through electromagnetic transient simulations of a 1 GW AIDC connected to an IEEE nine-bus system.",
            "points": [
              {
                "subtitle": "STATCOM의 역할",
                "desc": "STATCOM은 전압이 살짝 떨어지는 가벼운 사고에서 데이터 센터의 전력 유입을 더 잘 유지해 주는 것으로 나타났습니다. 전력망의 안정성을 지키는 데 있어 초기 대응 능력이 좋다는 의미예요.",
                "evidence": "Simulation results show that STATCOM support better preserves short-term intake in milder tested faults, whereas UPS coordination maintains rectifier operation under deeper sags by reducing active intake to reserve reactive current capacity."
              },
              {
                "subtitle": "UPS의 전략적 활용",
                "desc": "UPS는 전압이 크게 떨어지는 상황에서 유효 전력 소비를 줄여 반응 전력을 공급할 여유를 만드는 방식으로 작동합니다. 덕분에 전압이 낮아져도 정류기가 멈추지 않고 계속 작동할 수 있게 돕는 겁니다.",
                "evidence": "Simulation results show that STATCOM support better preserves short-term intake in milder tested faults, whereas UPS coordination maintains rectifier operation under deeper sags by reducing active intake to reserve reactive current capacity."
              },
              {
                "subtitle": "통합 지원의 한계",
                "desc": "두 장치를 함께 사용하면 보조 부하를 유지하고 회복하는 데 도움을 주지만, 전압 강하가 아주 심각할 때는 여전히 전력 수요가 크게 줄어드는 현상을 막지 못했습니다. 즉, 보상 장치만으로는 극단적인 상황까지 모두 해결하기는 어렵다는 거예요.",
                "evidence": "However, severe tested sags still cause substantial grid-demand reductions even with combined support."
              }
            ],
            "one_line": "AI 데이터 센터의 전압 강하 대응을 위해 보상 장치들의 효과를 시뮬레이션했어요.",
            "topic_tag": "전력망·계통",
            "limit": "아주 심각한 전압 강하 상황에서는 보상 장치를 결합하더라도 전력 수요가 크게 줄어드는 문제가 여전히 남아 있습니다.",
            "limit_evidence": "However, severe tested sags still cause substantial grid-demand reductions even with combined support."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.16230",
          "title": "DER Aggregators in Wholesale Electricity Markets: A Hybrid Mean-Field Framework with Endogenous Price Feedback",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16230"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 10.0,
          "score_why": "전공 +3 · 키워드 3개(power grid, power system, energy storage) → +6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "power grid",
            "power system",
            "energy storage"
          ],
          "ai": {
            "easy1_title": "분산 에너지 자원이 늘어나면서 시장 참여 방식이 복잡해졌어요",
            "easy1_desc": "태양광 패널이나 에너지 저장 장치 같은 분산 에너지 자원(DER)이 많아지면서, 전력망 가장자리에서 일어나는 변화가 커지고 있는데요. 이런 작은 자원들을 모아서 관리하는 DER 통합 사업자(Aggregator)의 역할이 중요해졌거든요. 그런데 기존 방식은 시장 가격을 외부에서 정해진 값으로만 봐서, 사업자들의 행동이 가격에 미치는 영향을 제대로 반영하지 못한다는 한계가 있었던 겁니다.",
            "easy1_evidence": "The rapid growth of distributed energy resources (DERs), including rooftop solar and energy storage, is transforming the grid edge, where customer-side assets increasingly interact with the broader power grid.",
            "easy2_title": "사업자들의 행동과 시장 가격을 함께 고려하는 새로운 모델을 만들었어요",
            "easy2_desc": "연구진은 평균장 제어(MFC)와 평균장 게임(MFG)을 합친 새로운 틀을 제안했는데요. 사업자들의 집단적인 행동이 전력 가격을 어떻게 바꾸는지 그 피드백을 모델에 담았다는 게 핵심이에요. 강화 학습을 써서 변수가 많은 시장 상황에서도 최적의 입찰 전략을 스스로 배우게 했거든요. 그 결과, 가격 변동성은 줄고 시장 효율성은 높아졌다는 걸 오아후 섬 전력망 사례로 확인했다는 겁니다.",
            "easy2_evidence": "This paper presents a hybrid Mean-Field Control (MFC) and Mean-Field Game (MFG) framework for integrating DER aggregators into wholesale electricity markets.",
            "topic": "분산 에너지 자원 통합 사업자를 도매 전력 시장에 효과적으로 참여시키기 위한 평균장 기반의 새로운 제어 및 게임 이론 프레임워크를 제안했어요.",
            "topic_evidence": "This paper presents a hybrid Mean-Field Control (MFC) and Mean-Field Game (MFG) framework for integrating DER aggregators into wholesale electricity markets.",
            "points": [
              {
                "subtitle": "가격 피드백 반영 모델",
                "desc": "기존 방식은 시장 가격을 외부 요인으로만 봤지만, 이번 모델은 사업자들의 집단적인 행동이 다시 시장 가격에 영향을 주는 피드백 구조를 담았어요. 뭔 소리냐면, 사업자가 전력을 얼마나 사고파느냐에 따라 가격이 변하는 상호작용을 수학적으로 풀어냈다는 말이에요.",
                "evidence": "Unlike traditional approaches that treat market prices as exogenous, our model captures the feedback between aggregators' collective actions and electricity prices."
              },
              {
                "subtitle": "강화 학습을 통한 전략 최적화",
                "desc": "시장에는 예측하기 어려운 변수가 많은데, 연구진은 강화 학습을 도입해서 사업자들이 역동적인 시장 환경에 맞춰 최적의 입찰 전략을 스스로 학습하게 만들었어요. 덕분에 복잡한 상황에서도 유연하게 대응할 수 있는 구조가 된 셈이에요.",
                "evidence": "To account for various uncertainties, we incorporate reinforcement learning, which allows aggregators to learn optimal bidding strategies in dynamic market conditions."
              },
              {
                "subtitle": "시장 효율성 및 안정성 개선",
                "desc": "오아후 섬 전력망을 대상으로 검증해 봤더니, 제안한 방식이 가격 변동성을 줄이고 시장 효율성을 높이는 것으로 나타났어요. 분산 에너지 자원을 도매 시장에 통합할 때 확장 가능하고 분산된 해결책을 제시했다는 점에서 의미가 있다고 연구진은 주장했어요.",
                "evidence": "Results show that our approach reduces price volatility and improves market efficiency, offering a scalable and decentralized solution for DER integration in wholesale markets."
              }
            ],
            "one_line": "평균장 이론과 강화 학습을 결합해 분산 에너지 사업자의 시장 참여 모델을 개발했어요.",
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
          "canon_id": "2611.15903",
          "title": "Impact of Grid-Interactive Data Center Microgrids on Grid Reliability",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15903"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 10.0,
          "score_why": "전공 +3 · 키워드 5개(microgrid, voltage, battery, energy storage, data center) → +6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "microgrid",
            "voltage",
            "battery",
            "energy storage",
            "data center"
          ],
          "ai": {
            "easy1_title": "데이터 센터가 전력망에 부담을 주는 게 문제였어요",
            "easy1_desc": "기존 데이터 센터는 전력을 받기만 하는 수동적인 부하로 작동해 왔는데요, 규모가 워낙 크고 전력 사용량이 갑자기 변하는 특성 때문에 전력망 운영에 큰 어려움을 줍니다. 게다가 비상용 백업 자원만 갖추고 있어 유연성이 부족하다는 한계도 있거든요. 쉽게 말하면, 전력망 입장에서는 언제 튈지 모르는 거대한 전력 소비자가 하나 있는 셈이라는 겁니다.",
            "easy1_evidence": "Traditional data centers, operating as passive loads with standby backup resources, present significant challenges for grid integration due to their scale, rapid load fluctuations, and limited operational flexibility.",
            "easy2_title": "데이터 센터를 전력망과 소통하게 바꿔서 안정성을 높였어요",
            "easy2_desc": "연구진은 데이터 센터에 배터리 저장 장치와 자체 발전 시설, 그리고 지능형 마이크로그리드 제어기를 넣어 전력망과 상호작용하도록 만들었는데요, 이렇게 하면 데이터 센터가 스스로 전력망을 돕는 능동적인 역할을 하게 됩니다. 실제로 시뮬레이션을 해 봤더니 전력망의 최대 수요를 줄이고 전압 안정성과 시스템 신뢰도를 높이는 효과가 나타났거든요. 특히 데이터 센터와 전력망의 전력 사용량이 동시에 몰릴 때 그 효과가 더 크다는 점을 확인했다는 겁니다.",
            "easy2_evidence": "Results reveal that grid-interactive microgrids can substantially reduce peak grid demand, improve voltage stability, and improve system reliability especially when data center and system load peaks coincide.",
            "topic": "데이터 센터를 전력망과 상호작용하는 마이크로그리드로 전환했을 때 전력망 안정성에 미치는 영향을 분석했어요.",
            "topic_evidence": "This article investigates the transformative potential of grid-interactive data center microgrids, which integrate battery energy storage, on-site generation, and intelligent microgrid controllers to actively support both facility and grid operations.",
            "points": [
              {
                "subtitle": "시뮬레이션 환경 구축",
                "desc": "기존의 수동적인 데이터 센터 구조와 새롭게 제안한 상호작용형 마이크로그리드 구조를 비교할 수 있는 시뮬레이션 틀을 만들었습니다. 이를 통해 다양한 정상 상태와 비상 상황에서 전력망이 어떻게 반응하는지 살펴봤다는 거예요.",
                "evidence": "The proposed simulation framework enables the study comparing conventional and grid-interactive architectures under a range of steady-state and contingency scenarios."
              },
              {
                "subtitle": "전력망 안정성 개선 효과",
                "desc": "데이터 센터가 전력망과 소통하게 되면 전력망의 최대 부하를 줄이고 전압을 안정적으로 유지할 수 있습니다. 특히 데이터 센터의 전력 수요와 전체 전력망의 부하가 겹치는 시점에 시스템 신뢰도가 크게 향상되는 것으로 나타났거든요.",
                "evidence": "Results reveal that grid-interactive microgrids can substantially reduce peak grid demand, improve voltage stability, and improve system reliability especially when data center and system load peaks coincide."
              },
              {
                "subtitle": "자원 관리의 중요성",
                "desc": "연구진은 대규모 데이터 센터 부하를 전력망에 효율적으로 통합하려면 자원을 조율해서 관리하는 것이 무엇보다 중요하다고 주장했습니다. 이번 연구가 데이터 센터가 전력망 전체에 미치는 영향을 평가하는 실질적인 방법을 제시했다는 점에서도 의미가 있습니다.",
                "evidence": "The findings highlight the critical role of coordinated resource management in enabling the reliable and efficient integration of large data center loads, and provide a practical methodology for assessing their system-level impacts."
              }
            ],
            "one_line": "데이터 센터를 마이크로그리드로 바꿔 전력망 안정성을 높이는 방법을 분석했어요.",
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
          "canon_id": "2611.15712",
          "title": "Scalable Reference Electrical Architectures for Modern Data Centers",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15712"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 10.0,
          "score_why": "전공 +3 · 키워드 4개(power system, battery, energy storage, data center) → +6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "power system",
            "battery",
            "energy storage",
            "data center"
          ],
          "ai": {
            "easy1_title": "데이터 센터가 커지면서 전력망 연결이 복잡해졌어요",
            "easy1_desc": "클라우드와 인공지능(AI) 기술이 빠르게 퍼지면서 데이터 센터의 전력 수요가 수십 메가와트에서 기가와트 단위까지 엄청나게 늘어났거든요. 이렇게 전기를 많이 쓰게 되니 전력망에 연결하거나 시스템을 계획하는 과정에서 큰 어려움이 생겼다는 말이에요. 쉽게 말하면, 데이터 센터 규모가 너무 커져서 기존 방식으로는 전력 공급을 감당하기가 벅차다는 겁니다.",
            "easy1_evidence": "The rapid growth of cloud computing, artificial intelligence (AI), and high-performance computing is driving the deployment of data centers with electrical demands ranging from tens of megawatts to multi-gigawatt campuses, creating significant challenges for utility interconnection and power system planning.",
            "easy2_title": "표준화된 설계 방식을 도입해 전력 계획을 쉽게 만들었어요",
            "easy2_desc": "연구진은 데이터 센터 종류에 상관없이 쓸 수 있는 표준화된 전기 설계 구조를 제안했는데요, 전력 모듈인 파워 포드(Power POD)를 중심으로 고압부터 저압까지의 배전과 비상 발전기, 배터리 저장 장치(BESS)를 하나로 묶은 방식이에요. 이렇게 하면 용량을 늘릴 때도 일관된 구조를 유지할 수 있어서 전력망 연결이나 장비 수요 예측이 훨씬 쉬워진다는 장점이 있거든요. 결과적으로 데이터 센터가 전력망에 미치는 영향을 누구나 객관적으로 평가할 수 있는 기준을 마련한 셈이에요.",
            "easy2_evidence": "The proposed framework integrates modular Power PODs, hierarchical HV/MV/LV distribution, standby generation, uninterruptible power supplies (UPS), battery energy storage systems (BESS), and scalable utility interfaces into a unified planning methodology.",
            "topic": "데이터 센터의 전력 수요 증가에 대응하기 위한 확장 가능한 표준 전기 설계 구조를 제안했어요.",
            "topic_evidence": "This paper presents scalable, vendor-neutral reference electrical architectures for colocation, hyperscale, and AI data centers.",
            "points": [
              {
                "subtitle": "통합 전력 계획 방법론",
                "desc": "파워 포드와 배전 시스템, 비상 전원 장치 등을 하나로 통합하여 데이터 센터의 전력 계획을 체계적으로 세울 수 있게 했어요. 이는 특정 업체에 종속되지 않는 범용적인 설계 구조를 지향한다는 의미예요.",
                "evidence": "The proposed framework integrates modular Power PODs, hierarchical HV/MV/LV distribution, standby generation, uninterruptible power supplies (UPS), battery energy storage systems (BESS), and scalable utility interfaces into a unified planning methodology."
              },
              {
                "subtitle": "파워 포드 구성의 표준화",
                "desc": "용량 확장을 체계적으로 지원하기 위해 세 가지 대표적인 파워 포드 구성을 개발했어요. 이를 통해 데이터 센터를 확장하더라도 전기적 구조와 장비 크기를 일정하게 유지할 수 있게 했거든요.",
                "evidence": "Three representative Power POD configurations are developed to support systematic capacity expansion while maintaining consistent electrical topology and equipment sizing."
              },
              {
                "subtitle": "전력망 영향 평가의 기준 마련",
                "desc": "제안한 구조를 활용하면 전력망 연결 연구나 송전 계획 수립이 훨씬 수월해진다고 연구진은 주장했어요. 대규모 데이터 센터가 미래 전력망에 어떤 영향을 줄지 평가할 수 있는 공개된 벤치마크를 제공하는 셈이에요.",
                "evidence": "The proposed architectures facilitate utility interconnection studies, equipment demand forecasting, transmission planning, and grid infrastructure assessment, providing an open and reproducible benchmark for evaluating the impacts of large-scale data center deployment on future power systems."
              }
            ],
            "one_line": "데이터 센터 전력 설계를 위한 표준화된 구조와 계획 방법론을 개발했어요.",
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
          "canon_id": "2611.15466",
          "title": "Quantitative Stability Region Estimation of Grid-Forming Inverters with Current Limiting via a State-Dependent Switched Energy Function",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15466"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 10.0,
          "score_why": "전공 +3 · 키워드 3개(inverter, renewable, grid-forming) → +6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "inverter",
            "renewable",
            "grid-forming"
          ],
          "ai": {
            "easy1_title": "전력망을 만드는 인버터가 전류 제한 때문에 불안정해지는 문제",
            "easy1_desc": "재생 에너지가 늘어나면서 전력망을 만드는 인버터(GFM)가 핵심 부품으로 떠오르고 있는데요, 이 장치는 동기 발전기와 달리 과전류를 견디는 힘이 약해서 전류 제한 기능이 꼭 필요합니다. 그런데 큰 사고가 나면 정상 모드와 전류 제한 모드를 왔다 갔다 하게 되는데, 이 과정에서 동기화가 복잡해져서 기존 방식으로는 안정성을 분석하기가 어려웠다는 거예요. 쉽게 말하면, 전류를 제한하느라 모드가 바뀌는 상황을 기존 이론이 제대로 따라가지 못했다는 말입니다.",
            "easy1_evidence": "This can lead to switching between normal and current-limited operating modes under large disturbances, complicating synchronization dynamics and posing a longstanding challenge to existing transient-stability analysis methods.",
            "easy2_title": "상태에 따라 바뀌는 에너지 함수로 안정성을 더 정확히 계산했어요",
            "easy2_desc": "연구진은 상태에 따라 바뀌는 에너지 함수(SdS) 이론을 제안해서 전류 제한이 걸린 인버터의 안정성을 분석해 봤는데요, 각 모드별로 에너지 함수를 만들고 모드가 바뀌는 지점에서 이를 매끄럽게 이어 붙이는 방식을 썼습니다. 이렇게 하면 전류 제한이 언제 켜지고 꺼질지 미리 정하지 않아도 전체 안정 영역을 한 번에 계산할 수 있다는 장점이 있거든요. 덕분에 기존 방식보다 더 넓고 정확하게 안정성을 평가할 수 있게 된 셈이에요.",
            "easy2_evidence": "In this paper, a state-dependent switched (SdS) energy function theory is proposed for transient-stability analysis of GFM inverters with current limiting, whose dynamics can be abstracted as SdS nonlinear systems.",
            "topic": "전류 제한 기능이 있는 전력망 형성 인버터의 과도 안정성을 분석하기 위해 상태 의존적 스위칭 에너지 함수 이론을 제안하고 검증한 연구입니다.",
            "topic_evidence": "In this paper, a state-dependent switched (SdS) energy function theory is proposed for transient-stability analysis of GFM inverters with current limiting, whose dynamics can be abstracted as SdS nonlinear systems.",
            "points": [
              {
                "subtitle": "연속적인 에너지 함수 구축",
                "desc": "각 운전 모드마다 지역적인 에너지 함수를 만들고, 모드가 전환되는 경계면에서 이를 연속적으로 연결했습니다. 이렇게 하면 전류 제한 동작을 미리 가정하지 않고도 전체 안정 영역을 추정할 수 있다는 특징이 있어요.",
                "evidence": "Regional energy functions are constructed for individual operating modes and continuously matched at switching interfaces, yielding a continuous piecewise energy function."
              },
              {
                "subtitle": "감쇠 에너지 반영을 통한 정밀도 향상",
                "desc": "감쇠 에너지를 포함하는 기술을 이 분석 틀에 확장해서 적용해 봤는데요, 이를 통해 시스템의 감쇠 효과를 더 잘 포착할 수 있게 되었습니다. 결과적으로 안정 영역 추정치의 보수성을 줄여서 더 정확한 평가가 가능해졌다는 거예요.",
                "evidence": "Techniques for incorporating damping energy are extended to the proposed framework to capture damping effects and further reduce the conservatism of the ROA estimates."
              },
              {
                "subtitle": "실제 인버터 실험을 통한 검증",
                "desc": "연구진은 제안한 방법론이 다양한 제어 루프와 전류 제한 전략을 가진 인버터에도 적용될 수 있음을 확인했습니다. 실제 물리적 인버터를 이용한 실험을 통해 전력망 사고 상황에서 이 분석법이 유효하다는 것을 입증했거든요.",
                "evidence": "Experiments on a physical GFM inverter under various grid contingencies validate the proposed quantitative transient stability assessment."
              }
            ],
            "one_line": "상태 의존적 에너지 함수로 인버터 안정성을 분석했어요.",
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
          "canon_id": "2611.15777",
          "title": "SO-Arena: Benchmarking the Capability Spectrum and Reliability of System One Models",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.15777",
            "arxiv": "https://arxiv.org/abs/2611.15777"
          },
          "published": "2026-11-11",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": 74,
          "score": 8.4,
          "score_why": "추천 74 → +7.4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시스템 원 모델이 얼마나 똑똑하고 믿을 만한지 따져봤습니다",
            "easy1_desc": "시스템 원(System One) 모델은 긴 글을 생성하지 않고도 빠르게 의사결정을 내릴 수 있다는 장점이 있는데요, 정작 이 모델들이 얼마나 다양한 능력을 갖췄고 또 얼마나 믿을 수 있는지는 기존 평가 방식으로는 알기 어려웠거든요. 그래서 연구진은 11개 분야와 5개 능력군에 걸쳐 모델의 성능과 신뢰도를 꼼꼼히 측정하는 SO-Arena라는 평가 도구를 만들었습니다. 쉽게 말하면, 모델이 단순히 정답을 맞히는 걸 넘어 실제 상황에서 얼마나 일관되게 판단하는지 확인해 본 셈이에요.",
            "easy1_evidence": "Existing evaluations often provide limited insight into the breadth of model capabilities and the reliability of their decisions.",
            "easy2_title": "성능이 좋다고 해서 무조건 믿을 수 있는 건 아니더라고요",
            "easy2_desc": "21개 모델을 대상으로 SO-Arena를 통해 평가해 봤더니, 모델의 규모를 키우거나 추론 능력을 더한다고 해서 모든 분야에서 성능이 좋아지는 건 아니라는 사실을 확인했습니다. 특히 놀라운 점은 전체 성능이 가장 뛰어난 모델이라도 신뢰도 순위는 7위에 그쳤다는 건데요, 이는 높은 정확도가 반드시 신뢰할 수 있는 의사결정으로 이어지지는 않는다는 뜻이에요. 그래서 연구진은 모델의 성능과 신뢰도를 별개의 지표로 보고 함께 평가해야 한다고 주장했습니다.",
            "easy2_evidence": "More importantly, strong overall performance does not necessarily imply reliable decision-making: the best-performing System One model ranks only seventh in reliability.",
            "topic": "시스템 원 모델의 능력 범위와 의사결정 신뢰도를 체계적으로 평가하기 위한 SO-Arena 벤치마크를 제안했습니다.",
            "topic_evidence": "We introduce SO-Arena, a benchmark characterizing the capability spectrum and decision reliability of System One models across 11 domains and five capability families.",
            "points": [
              {
                "subtitle": "다각적인 능력 평가",
                "desc": "SO-Arena는 신뢰할 수 있는 자료를 바탕으로 근거 중심의 평가를 수행하고, 도메인별 난이도 기준을 적용해 세밀하게 능력을 측정합니다. 또한 모델이 샌드박스 환경에서 직접 행동을 수행하며 상호작용하는 현실적인 평가 방식도 도입했습니다.",
                "evidence": "For the capability spectrum, SO-Arena offers evidence-grounded evaluation through reliable sources and manual verification of reference labels against model-visible inputs; fine-grained capability assessment through domain-specific difficulty criteria; and realistic interactive evaluation, where models iteratively execute actions in sandboxes."
              },
              {
                "subtitle": "의사결정 신뢰도 측정",
                "desc": "단순히 정답률만 보는 게 아니라, 선택지가 바뀌어도 판단이 흔들리지 않는지 확인하는 안정성 평가와 올바른 선택지가 없을 때 이를 제대로 인식하는지 확인하는 평가를 진행했습니다. 이를 통해 모델이 얼마나 믿을 수 있는 결정을 내리는지 검증한 겁니다.",
                "evidence": "Beyond accuracy, SO-Arena assesses decision reliability through two complementary measures: decision stability under controlled option-set changes and missing-answer recognition when no valid option is available."
              },
              {
                "subtitle": "성능과 신뢰도의 불일치 확인",
                "desc": "21개 모델을 평가한 결과, 모델의 규모를 키우는 것이 분야마다 다른 효과를 낸다는 점을 확인했습니다. 무엇보다 성능이 우수한 모델이 신뢰도까지 높지는 않다는 점을 밝혀내며, 두 지표를 보완적인 차원으로 함께 고려해야 한다고 강조했습니다.",
                "evidence": "Evaluations across 21 models reveal that the benefits of scaling and additional reasoning vary substantially across domains."
              }
            ],
            "one_line": "시스템 원 모델의 능력과 신뢰도를 평가하는 SO-Arena를 개발했어요.",
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
            "bad_numbers": [
              "7"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 안전·평가",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16699",
          "title": "Energy system device sizing under closed-loop operation with imperfect forecasts",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16699"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 8.0,
          "score_why": "전공 +3 · 키워드 2개(battery, renewable) → +4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "battery",
            "renewable"
          ],
          "ai": {
            "easy1_title": "예측이 틀릴 걸 미리 알면 장비 크기도 달라져야 해요",
            "easy1_desc": "기존에는 재생에너지 장비를 설계할 때 미래를 완벽하게 안다고 가정하고 계획을 세웠거든요. 그런데 실제로는 날씨나 수요 예측이 계속 바뀌고 틀릴 수밖에 없다는 게 문제예요. 이렇게 불완전한 예측을 무시하고 설계하면 결국 장비 크기가 최적이 아닌 상태로 고정된다는 말이에요. 쉽게 말하면, 현실과 동떨어진 계획 때문에 돈을 낭비할 수 있다는 겁니다.",
            "easy1_evidence": "Conventional energy systems planning practices assume unlimited foresight in a single-level formulation, potentially leading to long-term investment in suboptimal device sizes.",
            "easy2_title": "예측 오차를 반영해서 장비 투자 비중을 다시 짰어요",
            "easy2_desc": "연구진은 예측이 변하는 상황을 반영하려고 장비 크기를 정하는 상위 단계와 운영을 담당하는 하위 단계를 나누어 푸는 방식을 썼는데요, 역전파 모델 예측 제어(BP-MPC)라는 방법을 적용해 봤어요. 그랬더니 예측 오차가 커질수록 배터리보다는 태양광 발전이나 열 저장 장치에 투자하는 게 비용을 아끼는 데 더 유리하다는 결과가 나왔거든요. 예측이 틀려도 시스템이 잘 버티도록 장비 구성을 바꾼 셈이에요.",
            "easy2_evidence": "The resulting designs achieve these savings by progressively shifting investment from battery storage to solar generation and thermal storage, which buffers forecast mismatches.",
            "topic": "불완전한 예측 환경에서 재생에너지 시스템의 장비 크기를 최적으로 설계하는 방법론에 관한 연구예요.",
            "topic_evidence": "Accounting for realistic operation corresponds to a bi-level problem: the upper level selects device sizes, while the lower level contains closed-loop operation under evolving forecasts.",
            "points": [
              {
                "subtitle": "이중 단계 최적화 문제",
                "desc": "장비 크기를 결정하는 상위 단계와, 변하는 예측치에 맞춰 운영하는 하위 단계를 결합한 이중 구조로 문제를 정의했어요. 뭔 소리냐면, 설계와 운영을 따로 보지 않고 하나로 묶어서 풀어야 진짜 최적의 크기를 찾을 수 있다는 말이에요.",
                "evidence": "Accounting for realistic operation corresponds to a bi-level problem: the upper level selects device sizes, while the lower level contains closed-loop operation under evolving forecasts."
              },
              {
                "subtitle": "역전파 모델 예측 제어 적용",
                "desc": "연구진은 이 문제를 풀기 위해 역전파 모델 예측 제어(BP-MPC)라는 기울기 기반의 방법을 사용했어요. 하위 단계의 제어기로는 결정론적 모델 예측 제어를 활용해서 예측이 바뀔 때마다 시스템이 어떻게 대응하는지 계산해 본 겁니다.",
                "evidence": "We solve this problem using backpropagation MPC (BP-MPC), a gradient-based method, with a deterministic MPC as the lower-level controller."
              },
              {
                "subtitle": "장비 투자 전략의 변화",
                "desc": "태양광, 배터리, 열 펌프 등이 포함된 시스템에서 실험해 보니, 예측 오차가 커질수록 배터리 비중을 줄이고 태양광과 열 저장 장치를 늘리는 게 비용 절감에 효과적이었어요. 예측이 틀려도 열 저장 장치가 완충 작용을 해주기 때문이라는 거예요.",
                "evidence": "In a case study of an energy system comprising photovoltaics, a battery, a heat pump, and thermal storage with uncertain weather and energy demands, accounting for closed-loop operation yields higher average cost savings as forecast error increases."
              }
            ],
            "one_line": "예측 오차를 반영한 재생에너지 시스템의 최적 장비 설계법을 제안했어요.",
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
          "canon_id": "2611.15706",
          "title": "Quantifying the Cost of Restoring AC Feasibility for Approximate Optimal Power Flow Solutions",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15706"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 8.0,
          "score_why": "전공 +3 · 키워드 2개(power system, voltage) → +4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "power system",
            "voltage"
          ],
          "ai": {
            "easy1_title": "전력망 운영할 때 쓰는 간소화된 계산법이 사실은 문제가 많거든요",
            "easy1_desc": "전력망을 운영할 때는 계산이 복잡한 AC 최적 전력 흐름 문제 대신 DC 최적 전력 흐름 같은 간소화된 방식을 주로 쓰는데요. 이런 방식들은 전력 손실이나 전압 변화 같은 핵심 요소를 무시하기 때문에, 계산 결과가 실제 전력망에서는 작동하지 않는다는 문제가 있어요. 그래서 현장에서는 결과를 억지로 끼워 맞추는 조정 과정을 거치는데, 이 과정에서 얼마나 비용이 드는지 정확히 알기 어려웠다는 겁니다.",
            "easy1_evidence": "Because these approximations neglect or relax parts of the AC power flow equations, their solutions must be adjusted before dispatch; for example, the DC optimal power flow, which neglects transmission losses, reactive power, and voltage magnitude variations, is known to produce solutions that are always infeasible.",
            "easy2_title": "조정 비용을 직접 계산해 봤더니 AC 방식을 바로 쓰는 게 유리하더라고요",
            "easy2_desc": "연구진은 어떤 근사치라도 실제 AC 전력망에서 작동하게 만드는 최소 비용을 계산하는 새로운 방법을 제안했는데요. 이 방법으로 DC 방식과 여러 볼록 완화 기법들을 비교해 봤더니, DC 방식은 전체 발전 용량의 15.6%를 조정해야 하고 비용도 1.10% 늘어난다는 사실을 확인했어요. 반면 AC 최적 전력 흐름을 직접 사용하면 이런 왜곡을 피할 수 있어 훨씬 효율적이라는 게 연구진의 주장이에요.",
            "easy2_evidence": "This paper proposes a method that quantifies, for any approximate solution, the minimum cost of the adjustments that restore AC feasibility, which is a lower bound on the cost of the heuristic adjustments used in practice.",
            "topic": "전력망 운영에서 근사치를 사용할 때 발생하는 AC 실행 가능성 복구 비용을 정량화하고 그 효율성을 분석했어요.",
            "topic_evidence": "This paper proposes a method that quantifies, for any approximate solution, the minimum cost of the adjustments that restore AC feasibility, which is a lower bound on the cost of the heuristic adjustments used in practice.",
            "points": [
              {
                "subtitle": "실행 가능성 복구 비용 정량화",
                "desc": "근사치를 사용해 얻은 해가 실제 AC 전력망에서 작동하도록 수정할 때 드는 최소 비용을 계산하는 기법을 개발했어요. 이는 현장에서 관행적으로 사용하는 휴리스틱 조정 비용의 하한선을 제시한다는 의미가 있어요.",
                "evidence": "This paper proposes a method that quantifies, for any approximate solution, the minimum cost of the adjustments that restore AC feasibility, which is a lower bound on the cost of the heuristic adjustments used in practice."
              },
              {
                "subtitle": "다양한 근사 모델 비교 분석",
                "desc": "DC 최적 전력 흐름, 이차 원뿔 및 이차 볼록 완화, 그리고 느슨한 허용 오차를 적용한 AC 최적 전력 흐름 모델을 대상으로 실험했어요. 각각의 모델이 실제 AC 실행 가능성을 확보하기 위해 얼마나 많은 발전기 조정과 비용 증가를 유발하는지 수치로 확인했거든요.",
                "evidence": "We apply it to the DC optimal power flow, the second-order cone and quadratic convex relaxations, and the AC optimal power flow solved to a loose relative tolerance of $10^{-4}$ instead of $10^{-8}$."
              },
              {
                "subtitle": "AC 최적 전력 흐름 운영의 가치",
                "desc": "실험 결과 DC 방식은 발전 용량의 15.6%를 조정하고 비용이 1.10% 증가하는 반면, 느슨한 허용 오차의 AC 방식은 6.1% 조정에 비용 증가율은 0.42%에 그쳤어요. 연구진은 근사치로 인한 왜곡을 피하기 위해 시장 운영 시 AC 최적 전력 흐름을 직접 사용하는 것이 중요하다고 주장했어요.",
                "evidence": "These results indicate significant value in operating markets directly on the AC optimal power flow, which avoids the distortion of the dispatch and prices caused by heuristic feasibility restoration."
              }
            ],
            "one_line": "전력망 운영 시 근사치 사용에 따른 AC 실행 가능성 복구 비용을 정량화했어요.",
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
          "canon_id": "2611.15364",
          "title": "Planning-Stage Assessment of Battery-Supported Regional Islanding: A South Australian Case Study",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15364"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 8.0,
          "score_why": "전공 +3 · 키워드 2개(battery, renewable) → +4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "battery",
            "renewable"
          ],
          "ai": {
            "easy1_title": "재생에너지가 늘어나면서 전력망이 끊길까 봐 걱정이에요",
            "easy1_desc": "재생에너지 비중이 높아지면 지역 간 전력을 주고받는 통로가 끊겼을 때 전력망이 아주 취약해질 수 있거든요. 연구진은 이런 상황에서 전력 공급이 얼마나 불안정해지는지 미리 확인해 볼 필요가 있다고 봤습니다. 쉽게 말하면, 큰 사고가 났을 때 우리 동네 전기가 얼마나 버틸 수 있는지 미리 점검해 보자는 겁니다.",
            "easy1_evidence": "Power systems with high shares of renewable generation may face increased operational vulnerability under regional islanding caused by the loss of major inter-area transmission interfaces.",
            "easy2_title": "배터리를 활용해서 전력망이 끊겨도 버티는 법을 연구했어요",
            "easy2_desc": "연구진은 호주 전력 시장(NEM)을 모델로 삼아 배터리 저장 장치가 있을 때 지역이 고립되는 상황을 24시간 동안 시뮬레이션해 봤는데요. 배터리가 전력을 어떻게 다시 공급하는지, 그리고 시스템이 얼마나 관성을 유지하는지 수치로 따져 본 겁니다. 이렇게 하면 전력망이 끊기는 비상 상황에서도 얼마나 전기를 공급할 수 있는지 정확히 알 수 있다는 장점이 있습니다.",
            "easy2_evidence": "This paper presents a planning-stage transmission-level assessment of regional islanding with battery storage, using a South Australian case study based on a synthetic representation of the Australian National Electricity Market (NEM).",
            "topic": "배터리 저장 장치를 활용해 지역 전력망이 고립되는 상황을 대비하는 계획 단계의 평가 방법을 제시했어요.",
            "topic_evidence": "This paper presents a planning-stage transmission-level assessment of regional islanding with battery storage, using a South Australian case study based on a synthetic representation of the Australian National Electricity Market (NEM).",
            "points": [
              {
                "subtitle": "고립 상황 시뮬레이션",
                "desc": "호주 전력 시장을 본뜬 모델을 사용해서 지역 전력망이 완전히 고립되는 상황을 24시간 동안 가정해 봤습니다. 정상적으로 연결된 상태와 비교해서 전력망이 얼마나 위험해지는지 확인하는 과정이에요.",
                "evidence": "An interconnected planning baseline is compared with a stress test scenario involving complete regional-islanding over a 24-hour chronological horizon."
              },
              {
                "subtitle": "전력 부족 지표 산출",
                "desc": "고립된 지역에서 전력이 얼마나 부족한지 구체적인 지표로 계산해 냈는데요. 최대 전력 부족량과 총 에너지 부족량, 그리고 전력 공급이 중단된 시간까지 꼼꼼하게 따져 본 겁니다.",
                "evidence": "The framework quantifies peak unserved power, total unserved energy, and the duration of unserved demand, while characterising battery redispatch and the synchronous inertia accessible to the subsystem."
              },
              {
                "subtitle": "배터리 역할 분석",
                "desc": "이런 비상 상황에서 배터리가 전력을 재분배하는 방식과 시스템이 유지해야 할 동기 관성을 함께 분석했습니다. 배터리가 고립된 지역의 전력 안정성을 지키는 데 어떤 기여를 하는지 파악한 셈이에요.",
                "evidence": "The framework quantifies peak unserved power, total unserved energy, and the duration of unserved demand, while characterising battery redispatch and the synchronous inertia accessible to the subsystem."
              }
            ],
            "one_line": "배터리를 활용한 지역 전력망 고립 대비 평가 체계를 구축했어요.",
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
          "canon_id": "2611.15181",
          "title": "Towards Efficient Edge AI for Power Flow in Renewable-Rich Grids with Volt/VAR Control",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15181"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 8.0,
          "score_why": "전공 +3 · 키워드 2개(power grid, voltage) → +4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "power grid",
            "voltage"
          ],
          "ai": {
            "easy1_title": "재생에너지 발전소가 전압을 어떻게 조절하는지 AI가 잘 모르고 있었어요",
            "easy1_desc": "전력망을 분석하는 기존 AI 모델들은 풍력이나 태양광 발전소가 전압에 따라 무효 전력을 조절하는 특성을 제대로 반영하지 못하는 문제가 있었거든요. 발전소를 단순히 전력을 소비하는 부하로만 취급하다 보니 실제 물리적인 전압 조절 동작을 놓치게 되는 겁니다. 쉽게 말하면, 발전소의 핵심 기능인 전압 제어 능력을 AI가 제대로 학습하지 못하고 있었다는 말이에요.",
            "easy1_evidence": "Compared with a physics-informed baseline that represents the parks as negative load, the Q(V) bus lowers the voltage-magnitude RMSE 2.3-fold, reduces the power-balance mismatch at the parks from 25 to 0.66 MVA, and raises the F1 score for voltage-band violations from 0.40 to 0.76.",
            "easy2_title": "물리 법칙을 반영한 새로운 버스 타입을 도입해 정확도를 높였어요",
            "easy2_desc": "연구진은 GridFM GraphKit에 Q(V) 버스라는 새로운 방식을 도입해서 발전소의 전압 제어 특성을 물리적으로 계산하도록 만들었는데요, 이를 통해 전압 오차를 줄이고 전력 균형을 훨씬 정확하게 맞출 수 있게 됐습니다. 또한 큰 모델을 작은 모델로 압축하는 증류 기법을 써서 엔비디아 젯슨 오린 나노 같은 엣지 장치에서도 빠르게 계산할 수 있게 만들었거든요. 결과적으로 12.2ms 만에 계산을 끝내서 실시간 감시가 가능해졌다는 점이 큰 장점이에요.",
            "easy2_evidence": "With output distillation, the 12-step student reaches 1.4 times the teacher's error and, for edge inference on an NVIDIA Jetson Orin Nano (15 W), solves an hourly scenario in 12.2 ms, within the 20 ms synchrophasor interval.",
            "topic": "재생에너지가 많은 전력망에서 전압 제어 특성을 정확히 반영하는 효율적인 엣지 AI 모델을 개발했어요.",
            "topic_evidence": "This research examines whether grid foundation models, fast neural network models for power-flow analysis, can represent this behaviour.",
            "points": [
              {
                "subtitle": "Q(V) 버스 도입",
                "desc": "발전소의 전압 제어 특성을 반영하기 위해 물리 디코더가 포함된 Q(V) 버스 타입을 새로 만들었습니다. 매 보정 단계마다 예측된 전압에서 무효 전력 주입량을 계산하도록 설계한 건데요, 덕분에 기존 방식보다 전압 크기 오차를 2.3배 줄이는 성과를 냈습니다.",
                "evidence": "We introduce the Q(V) bus, a new bus type for the open-source GridFM GraphKit, whose physics decoder evaluates the reactive injection from the plant characteristic at the predicted voltage in every correction step."
              },
              {
                "subtitle": "모델 압축과 엣지 추론",
                "desc": "2천만 개의 파라미터를 가진 큰 모델을 60만 개와 130만 개의 파라미터를 가진 작은 학생 모델로 압축했습니다. 이때 평탄한 초기화 방식을 써서 모델이 잘못된 저전압 상태로 빠지는 걸 막았거든요. 덕분에 15W 전력을 쓰는 엣지 장치에서도 실시간 전력망 감시가 가능해진 겁니다.",
                "evidence": "For edge monitoring, we distil the trained $2.0\times10^{7}$-parameter model into students of $6\times10^{5}$ and $1.3\times10^{6}$ parameters; a flat-start initialisation prevents their collapse into an incorrect low-voltage state in which the characteristic saturates."
              },
              {
                "subtitle": "성능 검증",
                "desc": "IEEE 118-버스 시스템을 수정한 환경에서 7882개의 운영 데이터를 사용해 모델을 검증했습니다. 그 결과 전력 불균형 오차를 25MVA에서 0.66MVA로 크게 줄였고, 전압 위반 탐지 성능도 0.40에서 0.76으로 높였다고 연구진은 밝혔습니다.",
                "evidence": "Training data comprise 7882 hourly operating points of a modified IEEE 118-bus system, matched to Energinet DK1/DK2 measurements and solved with pandapower."
              }
            ],
            "one_line": "물리 법칙을 반영한 Q(V) 버스를 도입해 전력망 엣지 AI의 정확도와 속도를 높였어요.",
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
            "evidence_by_symbols": 1,
            "bad_numbers": [
              "130",
              "60"
            ],
            "format": [],
            "flags": [],
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.15171",
          "title": "Quantum Computing in Power Systems:Current Landscape and Future Roadmap with AI",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15171"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 8.0,
          "score_why": "전공 +3 · 키워드 2개(power system, renewable) → +4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "power system",
            "renewable"
          ],
          "ai": {
            "easy1_title": "복잡해진 전력망 계산이 기존 방식으로는 한계에 부딪혔어요",
            "easy1_desc": "요즘 전력망은 재생에너지 비중이 커지고 전력 전자 기기를 많이 쓰면서 구조가 훨씬 복잡해졌는데요. 그러다 보니 시스템을 분석하고 계산하는 데 드는 시간이 너무 길어져서 실시간으로 대응하기가 어려워졌다는 겁니다. 쉽게 말하면, 지금 쓰는 컴퓨터 방식으로는 늘어난 계산량을 제때 처리하지 못해 효율이 떨어진다는 말이에요.",
            "easy1_evidence": "This leads to a dramatic increase in computational complexity, which, in turn, compromises solution efficiency and fails to satisfy the real time demands of system analysis.",
            "easy2_title": "양자 컴퓨팅과 인공지능을 더해 새로운 해결책을 찾고 있어요",
            "easy2_desc": "그래서 연구진은 양자 중첩이나 얽힘 같은 양자 역학의 특성을 활용해 전력망 문제를 해결할 새로운 방법을 제시했는데요. 단순히 양자 컴퓨팅을 도입하는 데 그치지 않고 인공지능과 결합해 전력망을 더 똑똑하게 진화시키는 로드맵까지 그려본 겁니다. 양자 기술이 가진 잠재력을 전력망 분석과 최적화에 어떻게 쓸 수 있을지 그 가능성을 확인한 셈이에요.",
            "easy2_evidence": "Recently, quantum computing techniques, attributed to their unique physical properties, such as superposition and entanglement, hold the potential to offer new solutions for power systems.",
            "topic": "전력망 시스템의 복잡성을 해결하기 위한 양자 컴퓨팅과 인공지능 기술의 활용 현황 및 발전 방향을 다루고 있어요.",
            "topic_evidence": "To this end, this paper not only provides a comprehensive landscape of quantum computing in power systems, but also investigates its roadmap with AI enabled evolution.",
            "points": [
              {
                "subtitle": "양자 컴퓨팅 기초와 활용",
                "desc": "양자 컴퓨팅의 핵심 개념을 먼저 설명하고, 이를 전력망 시뮬레이션과 최적화 문제에 어떻게 적용할 수 있을지 여러 접근 방식을 검토했어요. 기존 방식의 한계를 넘어서기 위해 양자 기술을 어떤 관점에서 바라봐야 하는지 정리한 겁니다.",
                "evidence": "This paper begins with an introduction to the fundamental concepts of quantum computing, followed by a review of several approaches to power system simulation and optimization."
              },
              {
                "subtitle": "양자 인공지능의 융합",
                "desc": "전력망 분야에서 양자 컴퓨팅과 인공지능이 만났을 때 어떤 시너지가 날 수 있을지 그 진화 과정을 자세히 살펴봤는데요. 양자 기술이 인공지능을 만나 전력망 운영을 어떻게 더 효율적으로 바꿀 수 있을지 그 잠재력을 탐구한 거예요.",
                "evidence": "Subsequently, we further investigate the potential quantum AI-enabled evolution in power systems."
              },
              {
                "subtitle": "기술 플랫폼과 향후 과제",
                "desc": "현재 개발 중인 양자 소프트웨어와 하드웨어 플랫폼의 수준을 짚어보고, 앞으로 연구가 나아가야 할 방향을 정리했어요. 기술적인 도전 과제와 미래의 가능성을 종합적으로 분석한 결과라고 볼 수 있습니다.",
                "evidence": "Finally, this paper synthesizes the prevailing challenges and prospects for future research directions."
              }
            ],
            "one_line": "전력망 문제 해결을 위한 양자 컴퓨팅과 AI의 활용 현황을 분석했어요.",
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
          "canon_id": "2611.14716",
          "title": "A Three-Stage Unsupervised Online Physics-Informed Neural Network for Microgrid Optimal Power Flow",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14716"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 8.0,
          "score_why": "전공 +3 · 키워드 2개(microgrid, renewable) → +4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "microgrid",
            "renewable"
          ],
          "ai": {
            "easy1_title": "기존 방식은 계산이 너무 느리고 상황이 바뀌면 다시 학습해야 했어요",
            "easy1_desc": "전력망에서 발전기 배치를 최적화하려면 경제성과 운영 조건을 모두 따져야 하는데요, 기존의 최적화 기법은 계산량이 너무 많아서 실시간으로 쓰기엔 무리가 있었거든요. 게다가 신경망을 써도 새로운 환경이 닥치면 처음부터 다시 학습해야 하는 번거로움이 있었어요. 쉽게 말하면, 상황 변화에 유연하게 대응하지 못하고 계산 속도도 느렸다는 말이에요.",
            "easy1_evidence": "Conventional optimization techniques can be computationally expensive, limiting their applicability in real-time environments, and neural networks often require offline retraining under new operating conditions.",
            "easy2_title": "물리 법칙을 넣은 신경망으로 실시간 최적화를 해냈어요",
            "easy2_desc": "연구진은 물리 기반 신경망(PINN)을 세 단계로 나누어 실시간으로 작동하게 만들었는데요, 이걸 써 봤더니 기존의 fmincon 기반 최적화보다 운영 비용을 43,665달러나 줄일 수 있었다고 해요. 무엇보다 부하나 재생에너지 발전량이 실시간으로 변해도 스스로 매개변수를 바꿔가며 적응한다는 게 큰 장점이에요. 결과적으로 계산 효율과 적응력을 동시에 잡았다는 뜻이에요.",
            "easy2_evidence": "This paper proposes a three-stage unsupervised online physics-informed neural network (PINN) framework for optimal power flow (OPF).",
            "topic": "마이크로그리드 환경에서 실시간으로 최적의 전력 흐름을 계산하기 위해 물리 기반 신경망을 활용하는 방법을 제안했어요.",
            "topic_evidence": "This paper proposes a three-stage unsupervised online physics-informed neural network (PINN) framework for optimal power flow (OPF).",
            "points": [
              {
                "subtitle": "3단계 물리 기반 신경망 설계",
                "desc": "연구진은 물리 법칙을 신경망 학습에 반영하는 PINN 구조를 3단계로 나누어 설계했는데요, 이를 통해 전력망의 제약 조건을 지키면서도 최적의 발전기 배치를 찾아내도록 했어요. 뭔 소리냐면, 데이터만 학습하는 게 아니라 전력 시스템의 물리적 규칙을 함께 고려했다는 말이에요.",
                "evidence": "This paper proposes a three-stage unsupervised online physics-informed neural network (PINN) framework for optimal power flow (OPF)."
              },
              {
                "subtitle": "운영 비용 절감 효과",
                "desc": "제안한 프레임워크를 시뮬레이션으로 검증해 봤더니, 기존의 fmincon 기반 최적화 기법보다 운영 비용을 43,665달러 더 낮출 수 있었다고 해요. 같은 운영 조건에서 더 경제적인 결과를 냈다는 점에서 성능이 우수하다고 주장했어요.",
                "evidence": "Simulation results demonstrate that the proposed framework satisfies load demand and system constraints while achieving a $43,665 lower operating cost than fmincon-based optimization under the same operating conditions."
              },
              {
                "subtitle": "실시간 적응 능력",
                "desc": "이 모델은 부하 수요나 재생에너지 발전량이 실시간으로 변해도 그에 맞춰 매개변수를 스스로 조정할 수 있는데요, 별도의 재학습 없이도 실시간 환경 변화에 대응한다는 점이 특징이에요. 쉽게 말하면, 환경이 바뀌어도 멈추지 않고 계속 최적의 값을 찾아간다는 겁니다.",
                "evidence": "The training process analysis further demonstrate the framework's ability to adapt its parameters online to variations in load demand and renewable generation in real time."
              }
            ],
            "one_line": "물리 기반 신경망을 활용해 실시간 전력 흐름 최적화 프레임워크를 개발했어요.",
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
          "canon_id": "2611.17005",
          "title": "An Integrated Architecture for Data-Efficient Real-Time Neural Imitation of Nonlinear Time-Optimal Model Predictive Control",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17005"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(frequency) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "frequency"
          ],
          "ai": {
            "easy1_title": "복잡한 제어 계산이 너무 느려서 실시간으로 쓰기 어려웠어요",
            "easy1_desc": "비선형 시간 최적 모델 예측 제어(TOMPC)는 성능은 좋지만 계산량이 너무 많아서 빠르게 움직이는 시스템에 바로 적용하기가 힘들거든요. 기존에는 신경망으로 이 제어 방식을 흉내 내려고 했지만, 대부분 단순한 비용 함수를 쓰거나 시뮬레이션 환경에만 머물러 있었다는 한계가 있었어요. 쉽게 말하면, 실제 환경에서 복잡한 제어를 실시간으로 돌리기에는 데이터 효율이나 성능 면에서 부족했다는 말이에요.",
            "easy1_evidence": "Nonlinear time-optimal model predictive control (TOMPC) enables highly performant control of constrained systems, but its computational cost prohibits real-time use on fast dynamical systems.",
            "easy2_title": "똑똑한 샘플링으로 데이터는 줄이고 제어 속도는 확 높였어요",
            "easy2_desc": "연구진은 제어 정책이 최적 경로에서 벗어날 때만 전문가에게 물어보는 '자기 정보 기반 샘플링(SIFS)' 방식을 도입했는데요, 덕분에 기존보다 3분의 1 수준의 시간과 절반 미만의 데이터만으로도 학습이 가능해졌어요. 이렇게 만든 제어기는 전문가의 성능을 그대로 따라가면서도 제어 주기를 기존 1.4Hz에서 1kHz까지 끌어올렸거든요. 실제 푸루타 진자(Furuta pendulum) 실험에서도 전문가 수준의 제어 성능을 보여줬다는 겁니다.",
            "easy2_evidence": "SIFS matches standard dataset aggregation performance in roughly one-third of the training time and with less than half the training data.",
            "topic": "복잡한 비선형 시간 최적 제어를 효율적으로 학습하고 실시간으로 구현하기 위한 통합 신경망 제어 구조를 제안했어요.",
            "topic_evidence": "We present (i) \\emph{self-informed sampling (SIFS)}, a data-efficient expert-sampling strategy that uses a learned time-to-go to query the expert only where the policy deviates from time-optimal behavior, (ii) a complete training and control architecture that jointly addresses dataset correlation, suboptimal expert labels, covariate shift, constraint satisfaction and model mismatch, and (iii) real-world validation on a Furuta pendulum.",
            "points": [
              {
                "subtitle": "데이터 효율적인 자기 정보 기반 샘플링",
                "desc": "학습 과정에서 남은 시간을 예측하는 모델을 활용해, 제어기가 최적 경로에서 벗어나는 지점만 골라 전문가 데이터를 수집했어요. 불필요한 데이터 생성을 막아 학습 효율을 크게 높인 셈이에요.",
                "evidence": "We present (i) \\emph{self-informed sampling (SIFS)}, a data-efficient expert-sampling strategy that uses a learned time-to-go to query the expert only where the policy deviates from time-optimal behavior"
              },
              {
                "subtitle": "통합 학습 및 제어 아키텍처",
                "desc": "데이터셋의 상관관계나 전문가 라벨의 불완전함, 모델 불일치 같은 문제들을 한꺼번에 다루는 통합 구조를 설계했어요. 제약 조건을 만족하면서도 안정적인 제어가 가능하도록 만든 거예요.",
                "evidence": "(ii) a complete training and control architecture that jointly addresses dataset correlation, suboptimal expert labels, covariate shift, constraint satisfaction and model mismatch"
              },
              {
                "subtitle": "실제 하드웨어 성능 검증",
                "desc": "푸루타 진자 장치에 적용해 본 결과, 제어 주기를 1.4Hz에서 1kHz로 크게 높였어요. 전문가 수준의 제어 성능을 유지하면서도 실시간 제어가 가능함을 입증한 겁니다.",
                "evidence": "The resulting controller matches the region of attraction of the expert TOMPC while raising the control frequency from 1.4~Hz to 1~kHz."
              }
            ],
            "one_line": "데이터 효율적인 샘플링으로 비선형 제어를 실시간 구현했어요.",
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
          "canon_id": "2611.16926",
          "title": "Improved Single-Input Space Vector for DC-Biased Sinusoidal Current Control in Battery Cyclers",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16926"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(battery) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "battery"
          ],
          "ai": {
            "easy1_title": "배터리 수명 연구를 위해 전류를 정밀하게 제어해야 했어요",
            "easy1_desc": "리튬 이온 배터리의 노화 과정을 연구하려면 직류와 교류가 섞인 전류를 배터리에 흘려보내야 하는데요, 기존 방식으로는 이런 복합적인 전류를 정확하게 따라가며 제어하기가 까다로웠거든요. 특히 전류의 파형이 겹치면서 생기는 리플(전류의 떨림)이 배터리 성능에 어떤 영향을 주는지 파악하는 게 중요했는데, 이를 구현할 제어 기술이 부족했던 셈이에요.",
            "easy1_evidence": "The cycler is controlled to output a dc-biased sinusoidal current, enabling investigation of second-harmonic ripple effects on lithium-ion cell aging.",
            "easy2_title": "새로운 제어 방식을 도입해 전류 추적 성능을 높였어요",
            "easy2_desc": "연구진은 단일 입력 공간 벡터(SISV) 개념을 개선해서 직류와 정현파 성분을 동시에 추적할 수 있는 새로운 방식을 제안했는데요, 임피던스 각 보상법을 써서 직류 추적을 방해하지 않고도 제어 축을 분리해 낸 겁니다. 덕분에 기존의 비례-적분-공진(PIR) 제어 방식과 비교했을 때 전류 제어 성능을 더 효과적으로 평가할 수 있게 됐거든요. 쉽게 말하면, 배터리 충방전기에서 직류와 교류 전류를 모두 정밀하게 다룰 수 있는 새로운 도구를 마련한 셈이에요.",
            "easy2_evidence": "A modified SISV generation scheme is introduced to track current references containing both dc and sinusoidal components, and an impedance-angle compensation method is proposed to decouple the d and q control axes without disturbing dc tracking.",
            "topic": "배터리 충방전기에서 직류와 정현파 전류 성분을 효과적으로 제어하기 위한 개선된 단일 입력 공간 벡터(SISV) 제어 기법을 제안했어요.",
            "topic_evidence": "This paper presents improvements to the single-input space vector (SISV) concept for current control in a battery cycler based on a two-phase interleaved buck converter.",
            "points": [
              {
                "subtitle": "SISV 제어 개선",
                "desc": "2상 인터리브드 벅 컨버터 기반의 배터리 충방전기를 위해 SISV 제어 방식을 수정했는데요, 직류와 정현파 성분을 모두 포함하는 전류 기준을 정확히 따라가도록 개선한 겁니다.",
                "evidence": "A modified SISV generation scheme is introduced to track current references containing both dc and sinusoidal components, and an impedance-angle compensation method is proposed to decouple the d and q control axes without disturbing dc tracking."
              },
              {
                "subtitle": "dq 위상 평면 시각화",
                "desc": "제어기의 과도 응답 성능을 평가하기 위해 dq 위상 평면 시각화 기법을 도입했는데요, 이를 통해 SISV와 PIR 제어 방식의 성능을 직관적으로 비교하고 제어기 튜닝을 최적화할 수 있게 됐습니다.",
                "evidence": "A dq phase-portrait visualization method is also introduced to evaluate transient performance for both SISV and proportional-integral-resonant (PIR) control methods."
              },
              {
                "subtitle": "제어 성능 검증",
                "desc": "시뮬레이션과 실험을 통해 제안한 방식이 PIR 제어의 대안으로 충분히 활용 가능하다는 점을 확인했는데요, 연구진은 이번 개선안이 직류와 정현파 전류를 동시에 제어해야 하는 배터리 충방전기 개발에 기여할 것으로 봤습니다.",
                "evidence": "The results demonstrate the feasibility of SISV-based current control as an alternative to PIR control for battery-cycler applications."
              }
            ],
            "one_line": "배터리 충방전기의 전류 제어 성능을 높이는 개선된 SISV 방식을 제안했어요.",
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
          "canon_id": "2611.16888",
          "title": "A New Analytical Method and Interpretation of Loss-of-Load Counts",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16888"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(frequency) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "frequency"
          ],
          "ai": {
            "easy1_title": "전력 부족을 측정하는 지표들이 사실은 서로 다른 걸 가리키고 있었어요",
            "easy1_desc": "전력망에서 전력 부족을 나타내는 지표인 LOLE(전력 부족 기대치)와 LOLF(전력 부족 빈도)를 비교해 봤는데요. LOLE는 전력 부족이 일어나는 횟수나 기간, 심각한 정도를 제대로 측정하지 못한다는 사실을 확인했습니다. 뭔 소리냐면, 우리가 흔히 쓰는 LOLE 지표만으로는 실제로 전력이 몇 번이나 끊기는지 알기 어렵다는 말이에요. 그래서 이 두 지표가 서로 다른 정보를 담고 있다는 점을 분명히 했습니다.",
            "easy1_evidence": "We show why LOLE generally does not measure distinct-event frequency, mean event duration, or shortage magnitude.",
            "easy2_title": "전력 부족 빈도를 더 정확하게 계산하는 새로운 분석법을 만들었어요",
            "easy2_desc": "그래서 연구진은 전력 부족 빈도와 지속 시간을 함께 계산할 수 있는 새로운 분석 공식을 유도해 냈는데요. 기존처럼 부하(전력 수요)를 억지로 나누지 않고도, 실제 전력 사용 패턴을 그대로 활용해서 계산할 수 있게 만든 겁니다. IEEE RTS 24-bus 데이터를 써서 확인해 봤더니, 기존 방식보다 훨씬 정확하게 전력 부족 빈도를 계산할 수 있다는 장점이 있거든요. 쉽게 말하면, 기존 방식에서 생기던 계산 오차를 줄여서 더 정밀한 전력망 관리가 가능해진 셈이에요.",
            "easy2_evidence": "Numerical comparisons demonstrate the accuracy advantage of the proposed analytical calculation over the conventional analytical implementations, quantifying the LOLF errors incurred by load discretization.",
            "topic": "전력 부족 기대치(LOLE)와 전력 부족 빈도(LOLF)의 관계를 규명하고, 이를 더 정확하게 계산할 수 있는 새로운 분석 모델을 제안했어요.",
            "topic_evidence": "This paper establishes the relationship between loss-of-load expectation (LOLE) and loss-of-load frequency (LOLF).",
            "points": [
              {
                "subtitle": "지표 간의 관계 규명",
                "desc": "LOLE가 전력 부족 사건의 빈도나 기간을 대변하지 못한다는 점을 밝히고, 일일 최대 부하를 기준으로 LOLE를 어떻게 해석해야 하는지 그 조건을 찾아냈습니다. 이는 기존의 LOLE와 LOLF를 명확히 구분해야 한다는 근거가 됩니다.",
                "evidence": "We identify conditions under which peak-based LOLE admits a frequency interpretation as the expected count of deficient daily peaks per horizon and distinguish this quantity from LOLF."
              },
              {
                "subtitle": "새로운 분석 공식 유도",
                "desc": "발전 확률과 빈도 모델을 시간 순서대로 변하는 부하 데이터와 결합한 새로운 분석 공식을 만들었습니다. 이 방식은 별도의 부하 모델을 만들거나 부하 크기를 임의로 나누지 않아도 된다는 특징이 있어요.",
                "evidence": "We also derive an analytical formulation for frequency-and-duration indices that combines a convolution-derived generation probability-and-frequency model with chronological load changes."
              },
              {
                "subtitle": "계산 정확도 검증",
                "desc": "IEEE RTS 24-bus 데이터를 활용해 실험한 결과, 같은 LOLE 값이라도 실제 사건 빈도와 지속 시간은 다를 수 있음을 확인했습니다. 연구진은 제안한 방식이 기존 방식보다 계산 오차를 줄여 더 정확한 결과를 낸다고 주장했습니다.",
                "evidence": "Studies using generation and load data from the 24-bus IEEE RTS reveal different event frequencies and mean event durations at identical peak-based LOLE, motivating their separate assessment."
              }
            ],
            "one_line": "전력 부족 지표 간의 관계를 밝히고 더 정확한 빈도 계산법을 개발했어요.",
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
          "canon_id": "2611.16095",
          "title": "Data-center growth impacts household electricity costs more through wholesale prices than through grid reinforcement",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16095"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(power system) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "power system"
          ],
          "ai": {
            "easy1_title": "데이터 센터가 늘어나면 전기 요금은 어떻게 변할까",
            "easy1_desc": "데이터 센터가 급격히 늘어나면서 가정용 전기 요금에 어떤 영향을 줄지 걱정하는 목소리가 큰데요, 연구진은 텍사스에 들어설 371개 데이터 센터 프로젝트가 2030년까지 38.9 GW 규모로 커질 때 전기 요금이 얼마나 오를지 분석해 봤습니다. 전력망 확장과 도매 시장 가격, 송전 비용 등을 모두 연결해서 계산해 본 건데요, 데이터 센터가 늘어나는 게 우리 집 전기 요금에 직접적으로 어떤 부담을 주는지 그 경로를 파악해 보려는 시도예요.",
            "easy1_evidence": "Rapid data-center expansion is raising concerns about electricity affordability, yet how the costs of serving these large new loads reach residential customers remains poorly understood.",
            "easy2_title": "요금 상승의 주범은 송전망 건설비가 아니라 도매 전기 가격이었어",
            "easy2_desc": "분석 결과 데이터 센터 수요를 감당할 때 가정용 전기 요금은 1.64 cents/kWh만큼 오를 것으로 보입니다. 이 중 68%는 도매 전기 가격이 올라서 생기는 비용이고, 나머지 32%만이 송전망을 보강하는 데 드는 비용이라는 거예요. 쉽게 말하면 송전망을 새로 깔아서 요금이 오르는 것보다, 데이터 센터가 전기를 많이 써서 도매 시장의 전기 가격 자체가 비싸지는 게 가계 부담의 핵심이라는 말입니다.",
            "easy2_evidence": "We find that accommodating this demand increases modeled residential electricity costs in one representative case by 1.64 cents/kWh, with 68% arising from higher wholesale electricity prices and 32% from regulated transmission charges.",
            "topic": "데이터 센터 확장이 가정용 전기 요금에 미치는 영향을 전력 시장과 송전 비용 관점에서 분석한 연구예요.",
            "topic_evidence": "Here, we quantify the potential impact of 371 announced Texas data-center projects, totaling 38.9 GW by 2030, on residential electricity costs by linking power system expansion, wholesale electricity markets, transmission reinforcement, and retail cost allocation.",
            "points": [
              {
                "subtitle": "요금 상승의 주요 원인 분석",
                "desc": "데이터 센터 증가로 인한 요금 상승분의 대부분은 도매 전력 가격의 상승에서 비롯된다고 연구진은 주장했습니다. 송전망 보강 비용보다 전력 시장의 가격 변동이 가계에 더 큰 영향을 준다는 겁니다.",
                "evidence": "These findings reveal that the residential cost burden of data-center growth is driven primarily by wholesale electricity price increases, rather than direct transmission investment costs, and depends critically on generation siting, infrastructure planning, and cost allocation."
              },
              {
                "subtitle": "발전소 위치에 따른 요금 변화",
                "desc": "데이터 센터 근처에 새로운 가스 발전소를 짓도록 허용하면 가정용 전기 요금 상승 폭이 0.92 cents/kWh로 줄어든다는 결과가 나왔습니다. 발전소 위치가 전력망 운영과 요금 결정에 중요한 변수라는 점을 보여주는 대목이에요.",
                "evidence": "Allowing new gas generation near data centers reduces the 2023 residential cost increase to 0.92 cents/kWh, whereas excluding data centers from the transmission cost-sharing base raises it to 1.87 cents/kWh."
              },
              {
                "subtitle": "비용 분담 방식의 영향",
                "desc": "데이터 센터를 송전 비용 분담 대상에서 제외할 경우 요금 상승 폭은 1.87 cents/kWh까지 커질 수 있다고 봤습니다. 결국 요금 부담은 인프라 계획과 비용을 어떻게 나누느냐에 따라 크게 달라진다는 겁니다.",
                "evidence": "Allowing new gas generation near data centers reduces the 2023 residential cost increase to 0.92 cents/kWh, whereas excluding data centers from the transmission cost-sharing base raises it to 1.87 cents/kWh."
              }
            ],
            "one_line": "데이터 센터 확장이 가정용 전기 요금에 미치는 영향을 전력 시장 모델로 분석했어요.",
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
            "flags": [
              "예측 의심: 분석 결과 데이터 센터 수요를 감당할 때 가정용 전기 요금은 1.64 cents/kWh만큼 오를 것으로 보입"
            ],
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.15742",
          "title": "Adaptive Model Predictive Control for Damping IBR-Induced SSOs",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15742"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(power system) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "power system"
          ],
          "ai": {
            "easy1_title": "인버터 기반 자원이 일으키는 전력망 진동을 막기 어렵더라고요",
            "easy1_desc": "태양광이나 풍력 같은 인버터 기반 자원(IBR)이 늘어나면서 전력망에 원치 않는 진동인 동기 이하 진동(SSO)이 생기는 문제가 있는데요. 기존의 모델 예측 제어(MPC) 방식은 정해진 환경에서만 잘 작동하도록 설계되어 있어서, 전력망의 운전 상황이 조금만 바뀌어도 성능이 떨어지는 한계가 있었거든요. 쉽게 말하면 고정된 설정값만 믿고 있다가 변하는 환경에 제대로 대응하지 못하는 셈이에요.",
            "easy1_evidence": "Unlike traditional model predictive controller designed considering the nominal plant that may not perform well in other conditions, we use plants that alter with changing operating point.",
            "easy2_title": "상황에 맞춰 스스로 모델을 바꾸는 제어 방식을 도입했어요",
            "easy2_desc": "그래서 연구진은 전력망 상황이 변할 때마다 모델을 스스로 수정하는 적응형 모델 예측 제어 방식을 제안했는데요. 가변 망각 인자를 쓴 재귀 최소 자승법(RLS)으로 시스템의 움직임을 파악해서, 과거 데이터의 편향은 줄이고 현재 상태를 정확히 반영하도록 했거든요. 이렇게 하면 인버터의 전류 제한을 지키면서도 진동을 효과적으로 억제할 수 있는데, 모델 정보를 알기 어려운 상황에서도 쓸 수 있다는 장점이 있어요.",
            "easy2_evidence": "We propose an adaptive model predictive control (MPC) approach to damp sub-synchronous oscillations (SSOs) induced by grid-following (GFL) inverter-based resources (IBRs).",
            "topic": "인버터 기반 자원으로 인해 발생하는 동기 이하 진동을 억제하기 위해 운전 상황 변화를 실시간으로 반영하는 적응형 모델 예측 제어 기법을 제안했어요.",
            "topic_evidence": "We propose an adaptive model predictive control (MPC) approach to damp sub-synchronous oscillations (SSOs) induced by grid-following (GFL) inverter-based resources (IBRs).",
            "points": [
              {
                "subtitle": "가변 망각 인자를 이용한 시스템 식별",
                "desc": "시스템의 동적 특성을 파악하기 위해 가변 망각 인자를 적용한 재귀 최소 자승법을 사용했어요. 이를 통해 과거의 데이터가 현재의 식별 결과에 미치는 영향을 조절하고, 큰 과도 상태의 이상치로 인해 생기는 편향을 피할 수 있다는 게 연구진의 설명이에요.",
                "evidence": "To capture the plant dynamics, we use recursive least squares (RLS) based system identification with variable forgetting factor."
              },
              {
                "subtitle": "주기적인 모델 업데이트와 제어 제약",
                "desc": "실제 전력망에서는 운전점이 천천히 변하기 때문에 매 샘플링 순간마다 모델을 바꾸지 않고 정해진 시간 간격마다 주기적으로 업데이트하도록 설계했어요. 또한 모델 예측 제어의 특성을 살려 제어 입력에 직접 제약을 걸어 인버터의 전류 제한치를 넘지 않도록 했거든요.",
                "evidence": "We propose to update the model inside the MPC optimization problem periodically after a predetermined time interval instead of each sampling instant since the operating point changes slowly in a practical power system."
              },
              {
                "subtitle": "성능 검증 결과",
                "desc": "연구진은 수정된 IEEE 4기기 시스템과 68버스 시스템에서 이 방식을 시험해 봤는데요. 기존의 모델 예측 제어 방식과 비교했을 때 시스템 식별의 정확도가 높고 진동 억제 성능도 더 뛰어나다는 점을 확인했다고 주장했어요.",
                "evidence": "We show the accuracy of the system identification and the superior performance of the proposed controller on the modified IEEE $4$-machine system and the modified IEEE $68$-bus system as compared with the traditional MPC."
              }
            ],
            "one_line": "적응형 모델 예측 제어로 전력망의 진동을 억제했어요.",
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
          "canon_id": "2611.15704",
          "title": "Assessing Data Center Hosting Capacity Considering Electromagnetic Transient Dynamics",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15704"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(data center) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "data center"
          ],
          "ai": {
            "easy1_title": "기존에는 정해진 상태만 보고 데이터센터 수용 능력을 따져봤다는 건데요",
            "easy1_desc": "연구진은 데이터센터의 수용 능력을 평소 상태의 최적화 계산으로만 평가해 왔다고 지적했는데요, 이 방식은 실제 데이터센터와 전력망이 시간에 따라 어떻게 흔들리는지 동적 반응을 전혀 검증하지 못한다는 단점이 있거든요. 뭔 소리냐면, 평소에는 문제없어 보여도 막상 전력망에 충격이 오면 시스템이 버틸 수 있는지 알 수 없다는 말이에요. 쉽게 말하면, 겉보기 수치만 믿고 실제 버팀목은 확인하지 않은 셈이라는 겁니다.",
            "easy1_evidence": "Hosting capacity is commonly assessed with steady-state optimization, which leaves the dynamic response of the data center and the grid at the resulting operating point untested.",
            "easy2_title": "그래서 전자기 과도현상까지 함께 시뮬레이션해 세 가지 한계 용량을 구했습니다",
            "easy2_desc": "그래서 연구진은 단위 약정(UC) 모델과 전자기 과도현상(EMT) 시뮬레이션을 합쳐서 새로운 평가 방법을 시도했는데요, 그 결과 최적화 기반 정상상태 용량, 사고 전 동적 용량, 그리고 사고 후 동적 용량까지 세 가지 중첩된 용량 기준을 얻었다고 밝혔어요. 최적화 용량보다 동적 용량들이 훨씬 낮게 나왔고, 가장 심각한 사고 상황에서는 수용 능력이 정상상태보다 약 30% 낮아진다는 결과를 보여주거든요. 서류상 수치만 보지 말고 사고 뒤의 동적 용량을 기준으로 연결 위치를 비교해야 한다는 게 연구진의 주장입니다.",
            "easy2_evidence": "Three nested capacities are obtained: the optimization-based steady-state capacity, the dynamic pre-outage capacity, and the post-outage dynamic capacity, each bounded by the previous one.",
            "topic": "전자기 과도현상 동역학을 함께 고려하여 데이터센터의 전력망 수용 능력을 평가하는 새로운 방법이에요.",
            "topic_evidence": "This paper assesses candidate data center capacities by coupling a unit commitment (UC) model with electromagnetic transient (EMT) simulation.",
            "points": [
              {
                "subtitle": "단위 약정과 전자기 과도현상 결합",
                "desc": "연구진은 단위 약정(UC) 모델로 경제적 급전을 정하고, 그 운영 점에서 전자기 과도현상(EMT) 시뮬레이션을 돌려 발전기 동기 탈락 같은 사고 상황을 테스트해 봤는데요. 뭔 소리냐면, 데이터센터 후보 용량마다 전력망이 실제로 안정적으로 가라앉는지 일일이 확인해 봤다는 말이에요.",
                "evidence": "During the capacity search, the UC model determines the economic dispatch for each tested data center capacity, and the resulting operating points are tested for settling with the generators committed online by the UC model and after a selected synchronous generator outage."
              },
              {
                "subtitle": "세 단계의 수용 능력 도출",
                "desc": "그렇게 해서 최적화 기반 정상상태 용량과 사고 전 동적 용량, 사고 후 동적 용량이라는 세 가지 중첩된 용량을 찾아냈는데요, 각각 앞 단계의 범위 안에 묶인다는 특징이 있거든요. 쉽게 말하면, 단계가 엄격해질수록 수용할 수 있는 용량이 더 좁혀진다는 겁니다.",
                "evidence": "Three nested capacities are obtained: the optimization-based steady-state capacity, the dynamic pre-outage capacity, and the post-outage dynamic capacity, each bounded by the previous one."
              },
              {
                "subtitle": "사고 후 동적 용량 기준 적용 제안",
                "desc": "테스트 결과 동적 용량들은 기존 최적화 용량보다 훨씬 낮게 나왔고, 가장 심각한 사고 사례에서는 약 30% 낮은 용량을 보였다고 밝혔어요. 따라서 연결 위치를 비교할 때는 사고 후 동적 용량을 기준으로 삼아야 한다는 게 연구진의 결론입니다.",
                "evidence": "In the most severe outage case at each candidate bus, the capacity is about 30% below the steady-state capacity."
              }
            ],
            "one_line": "전자기 과도현상 동역학을 결합해 데이터센터 수용 능력을 평가하는 새 방법을 제안함",
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
          "canon_id": "2611.15363",
          "title": "Agreement Is Not Assurance: Evidence-Independent Safety Gates for Agentic AI in DER-Rich Distribution Grids",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15363"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(voltage) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "voltage"
          ],
          "ai": {
            "easy1_title": "AI 에이전트가 같은 잘못된 정보를 보면 안전 장치도 속아 넘어갑니다",
            "easy1_desc": "거대언어모델(LLM) 에이전트가 전력망을 제어할 때, 에이전트와 안전 장치가 똑같이 오염된 측정값을 참고하면 위험한 명령도 통과될 수 있다는 거예요. 전압 제한이 있는 분산형 에너지 자원(DER)을 제어할 때 이런 공유된 증거 오류가 발생하는데요, 공격자가 데이터를 살짝 조작하면 기존의 감시 시스템은 이를 정상으로 착각하게 됩니다. 쉽게 말하면, 에이전트와 감시자가 같은 거짓말을 믿게 되어 안전 장치가 제 기능을 못 하는 셈이에요.",
            "easy1_evidence": "Physics-based safety gates for large language model (LLM) agents can approve unsafe actions when the agent and gate rely on the same corrupted measurements or network records.",
            "easy2_title": "독립적인 증거를 확인하는 방식으로 안전성을 높였습니다",
            "easy2_desc": "연구진은 증거 독립적 검증(EIV)이라는 방식을 제안했는데, 이는 기존의 측정값에만 의존하지 않고 지능형 검침 인프라(AMI)의 전압 수치와 물리적인 탐침을 직접 활용하는 방식이에요. IEEE 123-bus 테스트베드에서 실험해 보니, 기존 방식은 위험한 요청의 95%를 승인했지만 EIV는 3.1%로 대폭 줄였다고 합니다. 다만 안전한 요청 중 22%를 거부하는 단점도 있는데, 이는 검증기 자체의 정확도를 높여야 하는 과제가 남았음을 보여줍니다.",
            "easy2_evidence": "We propose evidence-independent verification (EIV), which combines advanced metering infrastructure (AMI) voltage readings, measurement selection based on predicted voltage rise, and bounded physical probes.",
            "topic": "분산형 에너지 자원(DER)이 많은 배전망에서 LLM 에이전트의 안전한 제어를 위한 증거 독립적 검증 기법을 연구했어요.",
            "topic_evidence": "We formulate this shared-evidence failure for voltage-constrained distributed energy resource (DER) export decisions and analyze how nearly critical DER telemetry can bias state estimation while evading residual-based bad-data detection.",
            "points": [
              {
                "subtitle": "공유 증거 실패 분석",
                "desc": "에이전트와 안전 장치가 동일한 원격 측정 데이터에 의존할 경우, 데이터 조작 공격에 취약해진다는 점을 확인했어요. 공격자가 데이터를 미세하게 조정하면 기존의 잔차 기반 오류 탐지 시스템을 회피할 수 있다는 겁니다.",
                "evidence": "We formulate this shared-evidence failure for voltage-constrained distributed energy resource (DER) export decisions and analyze how nearly critical DER telemetry can bias state estimation while evading residual-based bad-data detection."
              },
              {
                "subtitle": "증거 독립적 검증(EIV) 도입",
                "desc": "AMI 전압 측정값과 물리적 탐침을 결합하여 에이전트의 판단을 독립적으로 검증하는 EIV를 제안했어요. 실험 결과 기존 AC-twin 방식보다 위험한 요청 승인율을 95%에서 3.1%까지 낮추는 성과를 보였습니다.",
                "evidence": "For telemetry attacks targeting the nominal gate, an AC-twin gate with bad-data detection approved 95% of unsafe requests, compared with 3.1% for EIV; EIV rejected 22% of safe clean requests."
              },
              {
                "subtitle": "에이전트의 도구 활용과 한계",
                "desc": "LLM 에이전트에게 EIV를 도구로 제공했더니 93~100%의 에피소드에서 자발적으로 사용했어요. 하지만 강제 사용 시에도 위반 사례가 완전히 사라지지는 않았는데, 이는 검증기 자체의 오류가 여전히 존재하기 때문이라고 연구진은 분석했습니다.",
                "evidence": "When offered the EIV checker as a tool, they used it in 93-100% of episodes; mandatory use did not reduce observed violations, which primarily reflected checker errors."
              }
            ],
            "one_line": "LLM 에이전트의 전력망 제어 안전성을 높이는 독립적 검증 기법을 개발했어요.",
            "topic_tag": "전력망·계통",
            "limit": "검증기 자체가 가진 오류로 인해 안전한 요청을 거부하거나 위반을 완전히 막지 못하는 한계가 있습니다.",
            "limit_evidence": "These results distinguish enforcement of verification from reliability of the verifier itself."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.15240",
          "title": "Unifying Heterogeneous Dissipativity for Distributed Power-System Stability Analysis",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15240"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(power system) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "power system"
          ],
          "ai": {
            "easy1_title": "복잡한 전력망을 하나로 묶어 분석하기가 어려웠거든요",
            "easy1_desc": "현대 전력망은 여러 종류의 장치가 섞여 있어 복잡한데요, 기존에는 이 장치들의 에너지 특성을 하나하나 따로 설명하다 보니 분석이 지나치게 보수적이고 효율이 떨어지는 문제가 있었어요. 뭔 소리냐면, 각 장치의 특성을 뭉뚱그려 표현하다 보니 실제보다 더 위험하게 보거나 계산이 비효율적이었다는 말이에요. 그래서 전체 시스템을 안정적으로 평가하는 데 한계가 있었다는 겁니다.",
            "easy1_evidence": "Compositional dissipativity is attractive for large-scale interconnected systems, but its application to modern heterogeneous power systems is limited by conservative descriptions of nodal dissipativity and inefficient distributed implementation.",
            "easy2_title": "에너지 흐름을 통합해서 분석하는 새로운 방식을 만들었어요",
            "easy2_desc": "연구진은 전압과 전류의 물리적 특성을 일차 동적 리프팅이라는 방식으로 통합해, 주파수에 따라 변하는 에너지 흐름을 더 정확하게 잡아내도록 했는데요. 이렇게 하면 서로 다른 장치들도 하나의 틀 안에서 분석할 수 있게 되거든요. 결과적으로는 분석의 보수성을 줄여 더 정밀한 안정성 평가가 가능해졌고, 병렬 처리를 통해 계산 속도와 확장성까지 개선했다는 겁니다.",
            "easy2_evidence": "This paper introduces a common first-order dynamic lifting of the physical voltage-current port, providing an enriched dissipativity representation that captures complementary frequency-dependent energy behavior while preserving network composability.",
            "topic": "서로 다른 장치로 구성된 현대 전력망의 안정성을 효율적으로 분석하기 위해 통합된 에너지 소산 표현법과 분산형 인증 기법을 제안했어요.",
            "topic_evidence": "The resulting representation accommodates heterogeneous power system buses within a unified dissipativity description and enables less conservative compositional stability analysis.",
            "points": [
              {
                "subtitle": "동적 리프팅을 통한 통합",
                "desc": "전압과 전류 포트를 일차 동적 리프팅으로 변환해 주파수별 에너지 특성을 포착했는데요. 이를 통해 서로 다른 장치들을 하나의 통합된 소산 표현으로 다룰 수 있게 됐다는 거예요.",
                "evidence": "This paper introduces a common first-order dynamic lifting of the physical voltage-current port, providing an enriched dissipativity representation that captures complementary frequency-dependent energy behavior while preserving network composability."
              },
              {
                "subtitle": "NCME 방법론 개발",
                "desc": "연구진은 이중 유도 열 생성 기법을 사용해 네트워크의 핵심 소산 방향을 찾아냈는데요. 이를 바탕으로 시스템의 병목 구간을 집중적으로 해결하는 네트워크 임계 마진 교환(NCME) 방식을 개발했어요.",
                "evidence": "This leads to a distributed Network-Critical Margin Exchange (NCME) method with early stability certification."
              },
              {
                "subtitle": "성능 검증",
                "desc": "실제 사례를 통해 분석의 보수성이 크게 줄어든 것을 확인했는데요. 계산 효율성과 통신 확장성 면에서도 기존 방식보다 개선된 결과를 보였다고 연구진은 주장했어요.",
                "evidence": "Case studies demonstrate substantially reduced conservatism of the dynamic-port formulation and improved computational and communication scalability of NCME for heterogeneous power systems."
              }
            ],
            "one_line": "통합 에너지 분석법으로 전력망 안정성을 효율적으로 평가했어요.",
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
          "canon_id": "2611.15140",
          "title": "Low-Data OOD Prediction of SAW Resonators with Simulation-Compensated Transfer Learning",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15140"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(frequency) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "frequency"
          ],
          "ai": {
            "easy1_title": "만들기 전 성능 예측이 왜 이렇게 어려운가",
            "easy1_desc": "표면 탄성파(SAW) 공진기는 무선 통신 기기의 핵심 부품인데, 실제 제품을 만들어 측정하기 전에는 성능을 예측하기가 참 어렵거든요. 직접 만든 소량의 데이터만으로는 새로운 설계 영역을 제대로 설명하지 못하는 문제가 있고, 그렇다고 시뮬레이션(FEM)을 쓰자니 실제 측정값과 체계적인 오차가 발생한다는 단점이 있어요. 쉽게 말하면, 데이터는 부족하고 시뮬레이션은 정확도가 떨어져서 설계 단계에서 성능을 가늠하기가 힘들다는 말이에요.",
            "easy1_evidence": "However, models trained on limited fabricated devices generalize poorly to unmeasured design regions because of process-induced variations, while finite-element method (FEM) simulations, although inexpensive, exhibit systematic offsets from measurements.",
            "easy2_title": "시뮬레이션과 실제 데이터를 섞어 성능을 높였다",
            "easy2_desc": "연구진은 시뮬레이션 데이터를 물리적 기준점으로 삼고, 이를 실제 측정값에 맞춰 보정하는 전이 학습(Transfer Learning) 프레임워크를 개발했는데요. 4,236개의 실제 측정 데이터와 816개의 시뮬레이션 설정을 활용해 다양한 환경에서 성능을 예측해 봤더니, 기존 방식보다 예측 오차를 평균 83.54%까지 줄이는 성과를 냈거든요. 덕분에 실제 제품을 만들기 전에 더 정확하게 성능을 예측할 수 있게 된 셈이에요.",
            "easy2_evidence": "The proposed framework reduces OOD prediction error by 83.54% on average (up to 97.57%) relative to the Measurement-only baseline, with the best strategy selected per case, and raises the pooled R2 of frequency prediction to 1.000, offering an economically scalable route toward physics-guided, fabrication-aware machine learning for microelectromechanical-system (MEMS) acoustic-device design.",
            "topic": "물리 기반 시뮬레이션과 실제 측정 데이터를 결합하여 SAW 공진기의 성능 예측 정확도를 높이는 전이 학습 프레임워크를 제안했어요.",
            "topic_evidence": "To predict device performance before physical prototyping, this work presents a simulation-compensated transfer-learning framework that uses computationally efficient 2.5-D FEM simulations as physics-based anchors and learns their calibration to the measurement domain.",
            "points": [
              {
                "subtitle": "전이 학습 프레임워크 도입",
                "desc": "2.5차원 유한요소법(FEM) 시뮬레이션을 물리적 닻으로 활용해 실제 측정값과의 차이를 학습하도록 설계했어요. 시뮬레이션의 효율성과 실제 측정의 정확성을 모두 챙기려는 시도인 셈이에요.",
                "evidence": "To predict device performance before physical prototyping, this work presents a simulation-compensated transfer-learning framework that uses computationally efficient 2.5-D FEM simulations as physics-based anchors and learns their calibration to the measurement domain."
              },
              {
                "subtitle": "데이터 기반 성능 검증",
                "desc": "리튬 탄탈레이트(LiTaO3) 기반의 SAW 공진기 측정 데이터와 시뮬레이션 설정을 조합해 7가지의 분포 외(OOD) 프로토콜에서 성능을 벤치마킹했는데요. 주파수, 기하학적 구조, 재료 변화 등 다양한 상황에서 모델의 일반화 능력을 확인해 본 겁니다.",
                "evidence": "Using 4,236 measured lithium tantalate (LiTaO3) SAW resonators and 816 unique simulated configurations, five transfer strategies are systematically benchmarked under seven out-of-distribution (OOD) protocols spanning frequency, geometry, and material shifts."
              },
              {
                "subtitle": "예측 오차 대폭 개선",
                "desc": "연구진은 이 프레임워크가 측정 데이터만 사용한 기존 방식보다 예측 오차를 평균 83.54% 줄였으며, 최대 97.57%까지 개선했다고 주장했어요. 주파수 예측의 결정계수(R2)도 1.000까지 끌어올려 설계 효율성을 크게 높였다고 보고 있습니다.",
                "evidence": "The proposed framework reduces OOD prediction error by 83.54% on average (up to 97.57%) relative to the Measurement-only baseline, with the best strategy selected per case, and raises the pooled R2 of frequency prediction to 1.000, offering an economically scalable route toward physics-guided, fabrication-aware machine learning for microelectromechanical-system (MEMS) acoustic-device design."
              }
            ],
            "one_line": "시뮬레이션 보정 전이 학습으로 SAW 공진기 성능 예측 오차를 줄였어요.",
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
          "canon_id": "2611.15012",
          "title": "TDMOpt: LLM-Driven Cross-layer Dispatch for Transmission-Distribution-Microgrid Systems",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15012"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(renewable) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "renewable"
          ],
          "ai": {
            "easy1_title": "전력망마다 제각각인 운영 방식 때문에 모델을 고르기가 너무 복잡했어요",
            "easy1_desc": "송전망과 배전망, 그리고 마이크로그리드(소규모 전력망)를 하나로 묶어 운영하면 재생에너지를 훨씬 효율적으로 쓸 수 있는데요. 문제는 이 망들이 가진 자원이나 운영 조건이 전부 다르다는 점이에요. 그래서 물리적으로 정확하면서도 계산하기 쉬운 모델을 선택하는 게 매우 까다로운 작업이거든요. 쉽게 말하면, 각기 다른 환경에 딱 맞는 모델을 매번 일일이 찾아내기가 너무 복잡했다는 말이에요.",
            "easy1_evidence": "However, heterogeneous resources, cross-layer coupling, and varying operating requirements complicate the selection of models and coordination schemes that are both physically adequate and computationally tractable.",
            "easy2_title": "거대언어모델을 써서 상황에 딱 맞는 모델을 스스로 조합하게 만들었어요",
            "easy2_desc": "연구진은 TDMOpt라는 인공지능 에이전트 기반 프레임워크를 제안했는데요. 고정된 모델을 쓰는 대신, 거대언어모델(LLM)이 물리적 지식과 부품 정보를 바탕으로 현재 상황에 가장 적합한 모델 조합을 스스로 선택하게 한 거예요. 선택된 모델은 교류 전력 흐름 검증을 거쳐 물리적 한계를 지키는지 확인하고, 만약 문제가 있으면 피드백을 받아 다시 수정하는 과정까지 포함했거든요. 결과적으로 다양한 운영 조건에서도 타당한 전력 배분 해법을 자동으로 찾아낼 수 있게 된 셈이에요.",
            "easy2_evidence": "This paper proposes TDMOpt, a LLM-driven multi-agent framework that replaces fixed modeling configurations with adaptive model composition.",
            "topic": "거대언어모델을 활용해 송전·배전·마이크로그리드 시스템 간의 복잡한 운영 모델을 자동으로 구성하고 최적화하는 프레임워크에 관한 연구예요.",
            "topic_evidence": "This paper proposes TDMOpt, a LLM-driven multi-agent framework that replaces fixed modeling configurations with adaptive model composition.",
            "points": [
              {
                "subtitle": "계층적 구성 요소 라이브러리",
                "desc": "전력망 운영에 필요한 네트워크, 자원, 목적 함수, 제약 조건 등을 실행 가능한 부품 형태로 미리 준비해 둔 라이브러리를 활용해요. 인공지능 에이전트가 이 부품들을 조합해 특정 상황에 맞는 모델을 구성하는 방식이에요.",
                "evidence": "A layered component library provides executable network, resource, objective, constraint, and coordination models."
              },
              {
                "subtitle": "물리적 타당성 검증 및 피드백",
                "desc": "단순화된 모델로 계산한 결과가 실제 물리적 네트워크 한계를 넘지 않는지 확인하기 위해 독립적인 교류 전력 흐름 검증을 수행해요. 만약 타당하지 않다고 판단되면 수치적 피드백을 통해 모델 구성을 다시 수정하는 과정을 거치거든요.",
                "evidence": "The model compositions undergo independent AC power flow validation, since feasibility in a simplified formulation does not ensure compliance with physical network limits."
              },
              {
                "subtitle": "다양한 시스템 환경에서의 적응성",
                "desc": "여러 규모의 시스템에서 실험해 본 결과, 이 프레임워크는 운영 조건이나 계산 예산에 따라 모델 조합을 유연하게 바꿀 수 있었어요. 연구진은 이를 통해 다양한 상황에서도 검증된 전력 배분 해법을 얻을 수 있음을 입증했다고 주장했어요.",
                "evidence": "Case studies on different scale systems illustrate the framework's ability to adapt model combinations and obtain validated dispatch solutions through targeted refinement under varying operating conditions."
              }
            ],
            "one_line": "거대언어모델을 활용해 전력망 운영 모델을 자동으로 구성하고 최적화했어요.",
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
          "canon_id": "2611.14890",
          "title": "Beyond Yes or No: Grading Observability of Power System Dynamic States with Symbolic Coefficients",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14890"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(power system) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "power system"
          ],
          "ai": {
            "easy1_title": "기존 방식은 관측 가능 여부만 알려줄 뿐 얼마나 잘 보이는지는 몰랐거든요",
            "easy1_desc": "기존의 그래프 기반 관측성 분석은 몇 초 만에 결과를 내놓는다는 장점이 있지만, 시스템이 관측 가능한지 아닌지 딱 두 가지만 대답할 수 있다는 한계가 있었어요. 이게 무슨 말이냐면, 주어진 측정값들이 상태를 재구성하는 데 얼마나 충분한지 그 정도를 알 수 없다는 거예요. 그래서 단순히 예 아니오를 넘어선 구체적인 정보가 필요했던 상황이었던 겁니다.",
            "easy1_evidence": "Graph-based observability analysis runs in seconds where Lie-derivative tests take hours, but it answers only one question: is the system observable or not.",
            "easy2_title": "기호 계수를 도입해서 관측 가능한 정도를 점수로 매겨 봤어요",
            "easy2_desc": "연구진은 상태 공간 방정식의 기호 야코비안을 활용해 기호 관측성 계수를 계산하는 새로운 방식을 제안했는데요, 이 계수는 행렬식의 변화를 추적해서 시스템이 얼마나 잘 관측되는지를 0에서 1 사이의 값으로 나타내 줍니다. 실제로 9버스 시스템에 적용해 보니 측정 장치인 PMU가 늘어날수록 계수 값이 0.0952에서 0.2857까지 커지는 것을 확인했거든요. 덕분에 기존보다 더 세밀하게 측정 세트를 평가할 수 있게 되었지만, PMU의 정확한 위치를 구분하려면 여전히 시스템의 수치적 매개변수가 필요하다는 점은 남아 있다는 겁니다.",
            "easy2_evidence": "This paper extends the graph-based approach with symbolic observability coefficients computed from a symbolic Jacobian of the state-space equations, in which every dependency is classified as constant, nonlinear polynomial, or rational.",
            "topic": "기호 계수를 활용해 전력 계통의 동적 상태 관측 가능성을 정량적으로 평가하는 새로운 분석 기법을 제안했어요.",
            "topic_evidence": "This paper extends the graph-based approach with symbolic observability coefficients computed from a symbolic Jacobian of the state-space equations, in which every dependency is classified as constant, nonlinear polynomial, or rational.",
            "points": [
              {
                "subtitle": "기호 관측성 계수 정의",
                "desc": "상태 공간 방정식의 의존성을 상수, 비선형 다항식, 유리수로 분류하여 기호 야코비안을 계산하고 이를 통해 관측성 계수를 도출했어요. 이 계수는 리 미분 방식의 해석적 관측성 행렬식과 동일한 경향을 보이도록 설계되었거든요.",
                "evidence": "This paper extends the graph-based approach with symbolic observability coefficients computed from a symbolic Jacobian of the state-space equations, in which every dependency is classified as constant, nonlinear polynomial, or rational."
              },
              {
                "subtitle": "계수와 관측성 상관관계",
                "desc": "계수 값이 0이면 행렬식이 사라져 관측이 불가능하고, 0과 1 사이면 상태에 따라 달라지며, 1이면 0이 아닌 상수가 되어 관측이 잘 된다는 것을 의미해요. 즉, 계수가 관측의 질을 나타내는 지표로 기능한다는 겁니다.",
                "evidence": "We show that the coefficient tracks the analytical observability determinant of the Lie-derivative approach: it is zero when the determinant vanishes, lies strictly between zero and one when the determinant depends on the state, and equals one when the determinant is a nonzero constant."
              },
              {
                "subtitle": "성능 검증 및 결과",
                "desc": "9버스 시스템에서 PMU 개수가 늘어남에 따라 계수가 0.0952에서 0.2857로 증가함을 보였고, 전체 분석은 5초 이내에 완료되었어요. 다만 같은 수의 PMU를 배치해도 측정 위치에 따라 상태 추정 정확도는 달라질 수 있다고 밝혔습니다.",
                "evidence": "On the nine-bus system, the coefficient grows from 0.0952 with one PMU to 0.1905 with two and 0.2857 with three, and the whole analysis runs in under five seconds."
              }
            ],
            "one_line": "기호 계수를 도입해 전력 계통의 관측 가능성을 정량적으로 평가했어요.",
            "topic_tag": "전력망·계통",
            "limit": "PMU의 위치를 정확히 구분하기 위해서는 여전히 시스템의 수치적 매개변수가 필요합니다.",
            "limit_evidence": "The symbolic coefficient therefore grades measurement sets beyond identifying root strongly connected components, while telling PMU locations apart still requires the numerical parameters of the system."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.14854",
          "title": "AgentiGrid: Agentic AI for Steady State and Transient Studies",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14854"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(inverter) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "inverter"
          ],
          "ai": {
            "easy1_title": "전력망 연구가 복잡해지면서 사람이 일일이 분석하기 어려워졌어요",
            "easy1_desc": "전 세계적으로 전력 수요가 늘고 인버터 기반의 재생에너지 자원이 많아지면서, 전력망이 어떻게 움직이는지 분석하는 동적 연구의 중요성이 커지고 있는데요. 이런 연구는 자원을 많이 쓰고 복잡해서 사람이 직접 다 하기에는 한계가 있거든요. 그래서 연구진은 인공지능(AI)의 능력을 빌려 이런 과정을 자동화하는 방법을 고민하게 된 겁니다.",
            "easy1_evidence": "As power systems worldwide struggle to meet in- creasing loads or higher penetration of inverter based resources, dynamic studies become of increasing importance.",
            "easy2_title": "AI 에이전트가 알아서 전력망 시뮬레이션을 수행하도록 만들었어요",
            "easy2_desc": "연구진은 1만 개의 버스(전력망 연결 지점)로 구성된 대규모 시스템에서 페이저 영역(전력망의 전압과 전류를 복소수로 표현하는 방식) 연구를 수행할 수 있는 에이전트 기반 AI를 개발했는데요. 이 AI는 스스로 고장 상황을 만들고 부하를 추가하며 시스템에 가해지는 스트레스를 테스트하는 일련의 과정을 자동으로 처리합니다. 네 가지 다른 소프트웨어 환경에서 검증해 봤더니, 사람이 직접 분석한 결과와도 일치하는 모습을 보였다는 거예요.",
            "easy2_evidence": "This study provides a proof of concept agentic AI capable of parallel or sequential execution of phasor domain studies for a 10,000 bus system.",
            "topic": "대규모 전력망의 안정성과 과도 상태를 연구하기 위해 AI 에이전트를 활용하는 개념 증명 연구예요.",
            "topic_evidence": "This study provides a proof of concept agentic AI capable of parallel or sequential execution of phasor domain studies for a 10,000 bus system.",
            "points": [
              {
                "subtitle": "AI 에이전트의 자동화",
                "desc": "연구진은 인공지능의 자동화 능력을 활용해 자원 소모가 큰 전력망 연구를 효율적으로 수행하고자 했는데요. 병렬 컴퓨팅 기술과 결합하여 이전에는 불가능했던 규모의 과도 상태 및 안정성 연구를 가능하게 했습니다.",
                "evidence": "The rise of artificial intelligence (AI) capabilities allows to automate some of these resource intensive studies."
              },
              {
                "subtitle": "1만 버스 시스템 테스트",
                "desc": "개발한 AI 에이전트는 1만 개의 버스가 연결된 복잡한 시스템에서 페이저 영역 시뮬레이션을 순차적 혹은 병렬로 실행할 수 있는데요. 먼저 3상 대칭 고장 시뮬레이션을 수행한 뒤, 특정 버스에 부하를 추가하고 고장을 적용하여 시스템의 반응을 확인하는 방식으로 작동합니다.",
                "evidence": "The agent first executes a standalone simulation of a three phase symmetric fault and then executes a series of actions, by first adding a large load to a bus and then applying the fault to the same bus to stress the system."
              },
              {
                "subtitle": "결과 일관성 검증",
                "desc": "연구진은 이 AI 에이전트가 내놓은 시뮬레이션 결과가 네 가지 서로 다른 벤더(소프트웨어 공급사) 환경에서도 일관되게 나타나는지 확인했는데요. 사람이 직접 수행한 분석 결과와 비교했을 때도 일치하는 결과를 보였다고 밝혔습니다.",
                "evidence": "The results of the agentic simulation are consistent with human counterfactual across four vendor backends."
              }
            ],
            "one_line": "AI 에이전트를 활용해 대규모 전력망 시뮬레이션을 자동화했어요.",
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
          "canon_id": "2611.14759",
          "title": "U.S. Data Center Growth Through 2030: A Critical Review of Grid Adequacy and Transmission Expansion Planning",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14759"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(data center) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "data center"
          ],
          "ai": {
            "easy1_title": "데이터 센터가 너무 빨리 늘어나서 전력망이 버틸지 걱정이에요",
            "easy1_desc": "미국에서 대형 데이터 센터가 급격히 늘어나면서 전력 공급이 충분할지, 그리고 전력망 연결을 검토할 때 쓰는 부하 모델이 적절한지 의문이 제기되고 있는데요. 단순히 전체 발전 용량만 봐서는 전력 공급 능력을 확신할 수 없거든요. 지역별 상황이나 송전망의 한계, 프로젝트 일정 같은 변수가 워낙 많기 때문이라는 말이에요. 쉽게 말하면, 전체 숫자가 넉넉해 보여도 실제로는 전력이 부족할 수 있다는 겁니다.",
            "easy1_evidence": "The growth of large data centers raises questions about both supply adequacy and the suitability of load representations used in connection studies.",
            "easy2_title": "데이터 센터의 특성을 반영해서 전력망 계획을 다시 짜야 합니다",
            "easy2_desc": "연구진은 데이터 센터가 고장 상황에서 백업 전원으로 급격히 전환했다가 나중에 복구되는 특성을 보인다는 점을 지적했는데요. 기존의 전력망 계획 방식에는 이런 데이터 센터만의 동적 모델이 제대로 반영되지 않았다는 거예요. 그래서 이런 특성을 기술적 검토와 경제적 비교에 포함해야 한다고 주장했어요. 그래야만 송전망을 어떻게 확장하고 어디에 투자할지 정확히 결정할 수 있다는 뜻이에요.",
            "easy2_evidence": "The review identifies the need to establish whether fault response and recovery change feasible connection capacity, required reinforcement, or the preferred transmission investment.",
            "topic": "2030년까지 미국 데이터 센터 증가에 따른 전력망 적정성과 송전망 확장 계획을 검토한 연구입니다.",
            "topic_evidence": "This paper critically reviews the U.S. demand, generation, and transmission outlook through 2030 and examines the implications for transmission expansion planning (TEP).",
            "points": [
              {
                "subtitle": "전력 수요 예측의 복잡성",
                "desc": "공개된 예측 자료들을 비교해 보면 연간 평균 수요와 최대 수요, 그리고 실제 전력망 연결 용량 사이에 차이가 있다는 점을 알 수 있는데요. 단순히 국가 전체의 발전 용량만 합산해서는 안정적인 전력 공급이 가능한지 판단할 수 없다는 겁니다.",
                "evidence": "Comparison of public forecasts highlights distinctions among annual average demand, peak demand, and grid connection capacity."
              },
              {
                "subtitle": "데이터 센터의 고장 대응 특성",
                "desc": "최근 전력망 사고 사례를 보면 데이터 센터는 고장이 발생했을 때 백업 전원으로 대규모 부하를 즉시 옮기는 특성을 보였는데요. 이후 전력 수요가 지연되거나 조정되면서 복구되는 과정이 나타나는데, 이런 행동 양식을 기존 계획 체계에 적절히 반영해야 한다고 연구진은 봤습니다.",
                "evidence": "Recent grid events and published dynamic studies demonstrate that faults can trigger substantial data-center transfers to backup supply, followed by delayed or coordinated demand recovery."
              },
              {
                "subtitle": "기술적 검토 모델의 통합 필요성",
                "desc": "현재 검토된 문헌들을 살펴보면 검증된 데이터 센터의 동적 모델을 송전망 확장 대안을 비교하는 기술적 심사에 통합하는 사례가 부족한 실정인데요. 데이터 센터의 고장 대응과 복구 특성이 실제 연결 용량이나 필요한 송전망 보강에 어떤 영향을 미치는지 명확히 파악해야 한다고 강조했습니다.",
                "evidence": "The selected literature reveals limited integration of validated data-center dynamic models into the technical screening and economic comparison of expansion alternatives."
              }
            ],
            "one_line": "데이터 센터 증가에 따른 전력망 적정성과 송전망 확장 계획을 검토했어요.",
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
          "canon_id": "2611.14815",
          "title": "BirdDreams: Joint Perspective and BEV Video Generation for a Plausible, Reactive Driving World Model",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.14815",
            "arxiv": "https://arxiv.org/abs/2611.14815"
          },
          "published": "2026-11-10",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": 46,
          "score": 5.6,
          "score_why": "추천 46 → +4.6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "주변 차들의 움직임을 예측하는 게 너무 어려웠거든요",
            "easy1_desc": "자율주행 환경을 시뮬레이션할 때 주변 차량의 움직임은 외형과 섞여 있거나 가려지는 경우가 많아 예측하기가 까다로운데요. 기존 연구들은 미리 정해진 차량 경로 정보를 입력값으로 넣어줘야만 주변 상황을 생성할 수 있었다는 한계가 있었거든요. 쉽게 말하면, 미래의 경로를 미리 알려주지 않으면 주변 차들이 어떻게 움직일지 제대로 그려내지 못했다는 말이에요.",
            "easy1_evidence": "Learning vehicle motion from perspective video alone is challenging because motion is entangled with appearance and vehicles can be occluded.",
            "easy2_title": "위에서 내려다보는 시점과 카메라 시점을 같이 그려내 봤어요",
            "easy2_desc": "연구진은 BirdDreams라는 모델을 만들어 카메라 시점의 영상과 위에서 내려다보는 조감도(BEV) 영상을 동시에 생성하도록 했는데요. 조감도는 차량의 위치와 움직임을 단순한 형태로 보여줘서 가려짐 문제를 줄이고, 카메라 영상은 신호등 같은 세부 정보를 담아내도록 한 거예요. 이렇게 두 영상을 함께 생성하니 별도의 지도나 차량 상태 정보 없이도 훨씬 자연스러운 주행 상황을 만들어낼 수 있게 됐다는 겁니다.",
            "easy2_evidence": "We introduce BirdDreams, an autoregressive driving world model that jointly generates perspective video and a schematic bird's-eye-view (BEV) video, making scene layout part of the predicted future.",
            "topic": "BirdDreams는 카메라 영상과 조감도 영상을 동시에 생성하여 더 현실적이고 반응적인 주행 환경을 시뮬레이션하는 세계 모델이에요.",
            "topic_evidence": "We introduce BirdDreams, an autoregressive driving world model that jointly generates perspective video and a schematic bird's-eye-view (BEV) video, making scene layout part of the predicted future.",
            "points": [
              {
                "subtitle": "두 영상의 상호 보완",
                "desc": "조감도는 차량의 위치와 움직임을 고정된 척도로 보여주어 가려짐을 줄이고, 카메라 영상은 조감도에서 빠진 신호등이나 물체의 외형 같은 세부 정보를 보존합니다. 두 영상 생성 모델 사이에 공동 주의(Joint attention) 기법을 적용해 각 영상이 서로의 생성 과정에 도움을 주도록 설계했어요.",
                "evidence": "Joint attention between two video diffusion transformers, one per stream, lets each stream inform the other during generation."
              },
              {
                "subtitle": "기하학적 제어 방식",
                "desc": "예측된 조감도 영상을 활용해 자율주행 차량의 움직임을 제어하는 기하학적 인터페이스를 만들었는데요. 입력된 경로에 따라 조감도 프레임을 회전하거나 이동시켜, 자율주행 차량만 움직였을 때 장면이 어떻게 변할지 보여주는 조건으로 활용하는 겁니다.",
                "evidence": "The predicted BEV also provides a geometric interface for ego control: we translate and rotate its latest frame along an input ego trajectory and use the resulting frames as a soft condition that shows how the scene would appear to move if only the ego vehicle moved."
              },
              {
                "subtitle": "성능 검증 결과",
                "desc": "PhysicalAI-AV와 nuScenes 데이터셋에서 실험해 본 결과, 기존 모델들보다 입력된 경로를 더 정확하게 따르고 자율주행 차량의 움직임도 훨씬 자연스럽게 생성했다고 연구진은 주장했어요. 사람들의 평가에서도 카메라 영상만 사용하는 기존 방식보다 주변 차량의 행동을 더 현실적으로 묘사한다는 점이 확인됐거든요.",
                "evidence": "Human evaluation shows that BirdDreams outperforms a perspective-only baseline in generating realistic surrounding-vehicle behavior."
              }
            ],
            "one_line": "카메라 영상과 조감도를 함께 생성해 주행 환경을 시뮬레이션했어요.",
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
          "canon_id": "2610.40394",
          "title": "Scaling Mathematical Proof Supervision from Structured Textbooks",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2610.40394",
            "arxiv": "https://arxiv.org/abs/2610.40394"
          },
          "published": "2026-10-29",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": 44,
          "score": 5.4,
          "score_why": "추천 44 → +4.4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "수학 문제를 그냥 나열만 해서는 모델이 깊게 배우지 못해요",
            "easy1_desc": "지금까지 언어 모델을 가르칠 때는 수학 문제를 단순히 문제와 답으로만 쪼개서 학습시켰는데요, 이렇게 하면 교과서가 가진 체계적인 흐름이나 증명 과정의 연결 고리가 다 사라진다는 문제가 있어요. 뭔 소리냐면, 지식의 뼈대 없이 단편적인 정보만 주입하는 셈이라 모델이 수학적 논리를 깊이 있게 깨우치기 어렵다는 말이에요. 그래서 연구진은 교과서의 구조를 그대로 살리는 방식이 필요하다고 본 겁니다.",
            "easy1_evidence": "Mathematical supervision for language models is typically flattened into isolated problem-solution pairs, discarding the curricular organization and evidential structure of the original sources.",
            "easy2_title": "교과서 구조를 그대로 살려 학습시켰더니 수학 실력이 껑충 뛰었어요",
            "easy2_desc": "연구진은 대학 수준 수학 교과서 2,118권을 활용해 38만 개의 구조화된 학습 데이터를 만든 TOME-Math를 제안했는데요, 이 데이터는 단원 순서와 증명 관계를 그대로 유지하고 있어요. 이걸로 모델을 학습시켜 봤더니, 기존 방식보다 평가 점수가 16.7% 포인트나 올랐고 다른 공개 데이터셋보다도 더 나은 성능을 보였다고 해요. 쉽게 말하면, 수학의 체계를 따라 공부한 모델이 문제 해결 능력도 훨씬 좋아졌다는 겁니다.",
            "easy2_evidence": "At full scale, fine-tuning on TOME-Math raises the unweighted mean score across our held-out evaluations and established public benchmarks by 16.7 percentage points over the base model, while exceeding all three public instruction-data baselines evaluated in aggregate.",
            "topic": "수학 교과서의 구조적 정보를 활용한 언어 모델의 수학적 추론 능력 향상에 관한 연구예요.",
            "topic_evidence": "Our findings highlight structured textbooks as both a scalable source of mathematical supervision and an empirical framework for studying the impact of data organization on mathematical reasoning.",
            "points": [
              {
                "subtitle": "TOME-Math 데이터셋 구축",
                "desc": "대학 수학 교과서 2,118권을 분석해서 증명 과정과 단원 간의 의존성을 보존한 38만 개의 학습 기록을 만들었어요. 단순히 문제만 모은 게 아니라 교과서의 체계적인 구성을 그대로 데이터에 담아낸 겁니다.",
                "evidence": "We introduce TOME-Math (Textbook-Oriented Mathematical Evidence), a large-scale corpus that converts 2,118 textbooks spanning the core areas of university-level mathematics subjects into approximately 380K structured proof-supervision records while preserving chapter order, proposition-proof links, dependency references, and source provenance."
              },
              {
                "subtitle": "커리큘럼 학습과 확장성 검증",
                "desc": "이 구조화된 정보를 활용해 여러 수학 분야를 아우르는 커리큘럼 학습을 시도했고, 학습 데이터의 양과 범위가 늘어남에 따라 모델이 어떻게 변하는지 그 패턴을 확인했어요. 데이터의 조직 방식이 수학적 추론에 어떤 영향을 주는지 체계적으로 분석한 셈이에요.",
                "evidence": "Leveraging these structural signals, we explore curriculum learning across multiple mathematical subjects and characterize scaling patterns with supervision volume and source breadth."
              },
              {
                "subtitle": "성능 향상 효과 확인",
                "desc": "TOME-Math로 모델을 미세 조정(Fine-tuning)했더니, 기존 모델 대비 평가 점수가 16.7% 포인트 상승하는 결과를 얻었어요. 연구진은 구조화된 교과서가 수학적 학습을 위한 확장 가능한 원천이자 효과적인 학습 틀이 될 수 있다고 주장했습니다.",
                "evidence": "At full scale, fine-tuning on TOME-Math raises the unweighted mean score across our held-out evaluations and established public benchmarks by 16.7 percentage points over the base model, while exceeding all three public instruction-data baselines evaluated in aggregate."
              }
            ],
            "one_line": "교과서 구조를 살린 수학 학습 데이터셋을 만들어 모델의 추론 능력을 높였어요.",
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
          "canon_id": "2611.16748",
          "title": "PhysLoop: Harnessing LLMs' Physics Awareness for Self-Improving Video Generation Models",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.16748",
            "arxiv": "https://arxiv.org/abs/2611.16748"
          },
          "published": "2026-11-12",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": 42,
          "score": 5.2,
          "score_why": "추천 42 → +4.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "영상 모델이 물리 법칙을 자꾸 어기는 게 문제였어요",
            "easy1_desc": "기존 영상 생성 모델들은 눈으로 보기에는 그럴듯한 영상을 만들지만, 실제 세상의 물리 법칙이나 인과 관계를 제대로 따르지 못하는 한계가 있었거든요. 이런 물리적 지식을 학습시키려면 정교한 데이터가 필요한데, 품질을 판단하거나 올바른 수정본을 만드는 과정이 매우 까다로웠다는 거예요. 거대 언어 모델(LLM)이 물리 지식을 가지고는 있지만, 이를 영상 모델의 학습 과정에 직접 활용해 가이드하는 데는 어려움이 많았다는 말입니다.",
            "easy1_evidence": "Video generation models produce visually realistic videos but still struggle with physical dynamics and causal consistency.",
            "easy2_title": "언어 모델의 물리 지식을 빌려 영상을 스스로 고치게 만들었어요",
            "easy2_desc": "연구진은 PhysLoop이라는 새로운 시스템을 도입해 영상 모델이 스스로 물리적으로 올바른 영상을 만들도록 개선했는데요, 거대 언어 모델이 영상 생성부터 선택, 수정 단계까지 전 과정에 개입해 물리적 지식을 주입하는 방식이에요. 이렇게 하면 사람이 일일이 개입하지 않아도 모델이 스스로 오류를 찾아 고치는 재귀적 자기 개선이 가능해진다는 겁니다. 결과적으로 물리적 일관성을 갖춘 10만 개의 영상 데이터와 평가 도구까지 함께 공개했다는 점이 핵심이에요.",
            "easy2_evidence": "We present PhysLoop, a unified harness designed to support physically grounded self-improvement in video generation models.",
            "topic": "거대 언어 모델의 물리적 지식을 활용해 영상 생성 모델의 물리적 일관성을 높이고 스스로 개선하도록 돕는 프레임워크인 PhysLoop에 대한 연구예요.",
            "topic_evidence": "We present PhysLoop, a unified harness designed to support physically grounded self-improvement in video generation models.",
            "points": [
              {
                "subtitle": "물리 지식의 증류와 활용",
                "desc": "거대 언어 모델이 가진 물리적 지식을 영상 생성 모델에 주입하는 과정을 거치는데요, 영상 생성과 선택, 그리고 수정 단계 전반에 걸쳐 언어 모델이 물리적 제약을 가하는 방식이에요. 뭔 소리냐면, 언어 모델이 영상 속 물리적 오류를 감지하고 이를 바로잡는 가이드 역할을 한다는 말입니다.",
                "evidence": "The harness guides and constrains LLMs throughout video generation, selection, and correction, distilling their physical knowledge into physically consistent videos."
              },
              {
                "subtitle": "재귀적 자기 개선의 구현",
                "desc": "PhysLoop은 모델이 스스로 실패 사례를 식별하고 수정함으로써 사람의 개입을 최소화하면서도 모델 성능을 높이는 재귀적 자기 개선(RSI)을 가능하게 했는데요, 이는 영상 생성 모델이 스스로 학습 데이터를 정제하고 발전시킬 수 있는 중요한 이정표라고 연구진은 주장했어요.",
                "evidence": "By identifying and correcting failures, PhysLoop marks a key milestone toward recursive self-improvement (RSI) in video generation models with limited human intervention."
              },
              {
                "subtitle": "데이터셋 및 도구 공개",
                "desc": "연구진은 실내외 환경을 아우르는 10만 개의 영상 데이터와 함께 생성 도구, 그리고 PhysLoop-Gen 및 PhysLoop-Repair라는 두 가지 평가 데이터셋을 공개했는데요, 이를 통해 제어 가능한 영상 생성과 국소적 수정 능력을 검증하고 외부 Physics-IQ Verified 벤치마크로 물리적 행동을 평가했다고 밝혔습니다.",
                "evidence": "We release 100K videos spanning diverse, realistic indoor and outdoor scenes, along with generation tools and two evaluation datasets: PhysLoop-Gen and PhysLoop-Repair."
              }
            ],
            "one_line": "언어 모델의 물리 지식을 활용해 영상 모델의 자기 개선 시스템을 개발했어요.",
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
          "canon_id": "2611.17098",
          "title": "Speed-to-Power Dominates Energy Costs for AI Data Centers: Technoeconomic Analysis of Powering AI in the Continental United States",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17098"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 5.0,
          "score_why": "키워드 2개(battery, data center) → +4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "battery",
            "data center"
          ],
          "ai": {
            "easy1_title": "AI 데이터 센터를 빨리 짓는 게 전기료보다 훨씬 중요합니다",
            "easy1_desc": "AI 수요가 폭발하면서 데이터 센터를 대규모로 빠르게 지어야 하는 상황인데요, 전력을 공급하는 방식에 따라 건설 기간이 달라지다 보니 단순히 전기료만 따져서는 안 된다는 거예요. 연구진은 건설 속도에 따른 기회비용까지 포함해서 진짜 비용을 계산해 봤거든요. 그랬더니 전력 단가가 조금 낮더라도 짓는 데 오래 걸리면 결국 손해라는 결과가 나왔습니다.",
            "easy1_evidence": "For AI infrastructure, deployment speed rather than unit energy cost determines the economically preferred path to power.",
            "easy2_title": "직류 연결 방식이 에너지 비용을 18%까지 줄여줍니다",
            "easy2_desc": "연구진은 미국 전역을 대상으로 태양광과 배터리, 천연가스 등 다양한 전력 공급 방식을 비교해 봤는데요, 특히 직류(DC) 연결 방식이 교류(AC) 방식보다 인버터를 줄여 효율을 높인다는 점을 확인했어요. 실제로 직류 방식을 쓰면 전체 에너지 비용을 평균 18%까지 낮출 수 있다는 겁니다. 덕분에 건설 속도까지 고려하면 미국 내 85% 지역에서 직류 연결 마이크로그리드가 가장 경제적인 선택지로 나타났습니다.",
            "easy2_evidence": "We find DC coupling reduces lifetime energy costs by 18% ($0.09/ kWh) on average versus AC counterparts by eliminating inverters and improving efficiency.",
            "topic": "AI 데이터 센터의 전력 공급 방식을 기술경제적 관점에서 분석하여 건설 속도와 에너지 비용의 상관관계를 규명했습니다.",
            "topic_evidence": "We compare grid-connected and off-grid data center energy infrastructure (AC- and DC-coupled solar-plus-storage, islanded natural gas, and grid interconnection) across the continental U.S.",
            "points": [
              {
                "subtitle": "속도 조정 에너지 비용 모델",
                "desc": "건설 기간이 서로 다른 전력 공급 방식을 물리적으로 일관된 기준에서 비교하기 위해 속도 조정 에너지 비용이라는 개념을 도입했습니다. 뭔 소리냐면, 데이터 센터를 빨리 지어서 얻는 컴퓨팅 수익을 비용 계산에 반영했다는 말이에요.",
                "evidence": "Our central contribution is a speed-adjusted cost of energy that values the compute unlocked by faster construction, making options with different deployment timelines directly comparable on one physically consistent basis."
              },
              {
                "subtitle": "직류 연결의 경제적 이점",
                "desc": "직류 연결 방식은 인버터를 제거하여 전력 변환 효율을 높임으로써 교류 방식 대비 생애 주기 에너지 비용을 평균 18% 절감합니다. 이는 데이터 센터 운영 효율을 높이는 핵심적인 기술적 개선으로 보입니다.",
                "evidence": "We find DC coupling reduces lifetime energy costs by 18% ($0.09/ kWh) on average versus AC counterparts by eliminating inverters and improving efficiency."
              },
              {
                "subtitle": "배치 속도의 중요성 입증",
                "desc": "분석 결과, 건설 속도를 고려했을 때 직류 연결 마이크로그리드가 미국 내 85% 지역에서 가장 저렴한 선택지로 나타났습니다. 천연가스 공급 속도가 빨라지더라도 55% 지역에서 여전히 직류 연결이 경제적으로 우위에 있다는 점을 확인했습니다.",
                "evidence": "Though rarely cheapest on unadjusted energy cost, DC-coupled microgrids' faster deployment makes them the lowest-cost modeled option in 85% of U.S. locations once foregone compute is valued, or 55% under accelerated natural gas timelines."
              }
            ],
            "one_line": "AI 데이터 센터의 전력 공급 방식을 비교하고 건설 속도의 경제적 가치를 분석했어요.",
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
          "canon_id": "2611.13004",
          "title": "G-STAR: Group-Scaled Token Capacity for Deeply Compressed Autoregressive Generation",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.13004",
            "arxiv": "https://arxiv.org/abs/2611.13004"
          },
          "published": "2026-11-08",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": 40,
          "score": 5.0,
          "score_why": "추천 40 → +4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "이미지 생성 속도와 품질 사이에서 고민이 많았거든요",
            "easy1_desc": "이산 자기회귀 모델(Discrete autoregressive models)은 이미지를 만드는 데 쓰이는데, 긴 토큰을 쓰면 품질은 좋지만 속도가 느려지고, 반대로 압축을 세게 하면 속도는 빨라지지만 표현력이 떨어지는 문제가 있었어요. 연구진은 이 두 가지 사이에서 균형을 맞추는 게 핵심이라고 봤는데요. 쉽게 말하면, 품질을 챙기려니 너무 느리고, 빨리 만들려니 그림이 뭉개지는 딜레마에 빠져 있었다는 겁니다.",
            "easy1_evidence": "However, they face a fundamental trade-off: long token sequences preserve representation quality but slow generation, while aggressive spatial compression reduces representation capacity.",
            "easy2_title": "그룹 크기를 조절해서 압축 효율을 확 높였어요",
            "easy2_desc": "연구진은 제품 양자화(Product quantization) 원리를 활용해 공간 압축 비율에 맞춰 그룹 크기를 제곱으로 늘리는 GSTAR라는 방식을 제안했어요. 이렇게 하면 32배에서 최대 64배까지 압축해도 이미지 품질이 잘 유지되거든요. 여기에 병렬 계산과 가벼운 모델링을 합친 반자기회귀 디코더(Semi-autoregressive decoder)를 써서 속도까지 잡았다는 겁니다.",
            "easy2_evidence": "Building on this principle, we propose GSTAR, a spatial--group co-scaling framework that enables 32x and even effective 64x compression while preserving strong reconstruction, understanding, and generation performance.",
            "topic": "공간 압축과 그룹 크기를 함께 조절하는 GSTAR 방식을 통해 고품질 이미지 생성을 유지하면서도 생성 속도를 획기적으로 개선했어요.",
            "topic_evidence": "Together, these results show that highly compressed discrete representations can enable high-quality autoregressive generation at low latency.",
            "points": [
              {
                "subtitle": "GSTAR의 핵심 원리",
                "desc": "연구진은 고정된 정보량 안에서 공간 압축 비율이 커질수록 그룹 크기를 제곱으로 키워야 한다는 원리를 찾아냈어요. 이를 통해 정보 손실을 최소화하면서도 높은 압축률을 달성할 수 있었다고 주장했거든요.",
                "evidence": "Based on product quantization, we show that, under a fixed nominal information budget, group size should scale quadratically with the per-axis spatial compression factor."
              },
              {
                "subtitle": "반자기회귀 디코더 설계",
                "desc": "그룹이 커지면 그룹 내 데이터 간의 의존성이 생겨서 계산이 복잡해지는데요. 이를 해결하기 위해 병렬로 특징을 계산하고 가볍게 인과 관계를 모델링하는 디코더를 도입해서 추론 속도와 품질을 모두 챙겼다는 겁니다.",
                "evidence": "Since larger groups introduce intra-group dependencies that must be modeled efficiently, we analyze their impact on inference latency and generation quality and introduce a semi-autoregressive decoder that combines parallel feature computation with lightweight causal modeling."
              },
              {
                "subtitle": "성능 및 속도 검증",
                "desc": "다섯 가지 텍스트-이미지 벤치마크에서 기존 모델들과 경쟁할 만한 성능을 보여줬는데요. 특히 1024x1024 해상도에서 NVIDIA H200 한 대를 써서 이미지 한 장을 2.5초 만에 생성하며 기존보다 20배 빠른 속도를 기록했어요.",
                "evidence": "At 1024x1024 resolution, our model delivers a 20x speedup over prior discrete autoregressive models, generating each image in 2.5 seconds on a single NVIDIA H200."
              }
            ],
            "one_line": "GSTAR 방식을 제안해 이미지 생성 속도와 품질을 동시에 개선했어요.",
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
          "canon_id": "2611.15131",
          "title": "Duo: A Reciprocal World Model for Full-Duplex Interaction",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.15131",
            "arxiv": "https://arxiv.org/abs/2611.15131"
          },
          "published": "2026-11-11",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": 35,
          "score": 4.5,
          "score_why": "추천 35 → +3.5 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 모델은 세상의 겉모습만 흉내 내고 있었어요",
            "easy1_desc": "기존의 세계 모델들은 물리적인 환경을 시뮬레이션하는 데만 집중해 왔는데요, 정작 중요한 추론이나 의사결정 같은 지능적인 부분은 모델 밖에서 따로 조종해야 하는 외부 요소로 취급했다는 거예요. 연구진은 이런 방식이 지능과 물리적 현실을 분리해 버린다고 봤는데요, 진짜 세상과 상호작용하려면 이 두 가지가 모델 안에 함께 녹아 있어야 한다고 판단한 겁니다. 쉽게 말하면, 껍데기만 그럴듯하게 만드는 게 아니라 생각하고 행동하는 능력까지 모델의 본질로 삼아야 한다는 말이에요.",
            "easy1_evidence": "Existing world models largely focus on simulating the latter, leaving reasoning and decision-making as external controls rather than intrinsic parts of the world itself.",
            "easy2_title": "생각과 행동을 하나로 묶어 실시간 대화가 가능해졌어요",
            "easy2_desc": "연구진은 의도를 파악하는 'Intent'와 시청각적 행동을 만드는 'Realization'이라는 두 가지 핵심 능력을 하나로 합친 Duo v1을 개발했는데요, 덕분에 사용자와 끊김 없이 실시간으로 대화하고 반응하는 전이중(full-duplex) 상호작용이 가능해졌어요. 단순히 명령을 이해하는 수준을 넘어, 스스로 판단하고 행동을 생성하는 구조를 갖춘 셈인데요, 마우스나 키보드 없이도 가상 환경을 바꾸거나 게임을 즐기는 등 훨씬 자연스러운 소통이 가능해졌다는 겁니다.",
            "easy2_evidence": "In RWM, we identify two equally fundamental capabilities: Intent, which provides the cognition underlying world interactions, and Realization, which generates coherent audio-visual behavior.",
            "topic": "지능과 물리적 현실을 통합하여 실시간 상호작용을 구현하는 상호적 세계 모델(RWM)에 대한 연구예요.",
            "topic_evidence": "In this report, we introduce the Reciprocal World Model (RWM) and present Duo v1, a full-duplex world model that continuously perceives audiovisual inputs while responding to users in real time.",
            "points": [
              {
                "subtitle": "상호작용을 위한 모델 설계",
                "desc": "기존 확산 모델처럼 단순히 지시를 이해하는 데 그치지 않고, 자기회귀(autoregressive) 모델링을 활용해 연속적인 상호작용 추론과 참여 결정을 내리도록 설계했어요. 뭔 소리냐면, 모델이 상황을 계속 지켜보면서 스스로 언제 어떻게 반응할지 결정한다는 말이에요.",
                "evidence": "Leveraging autoregressive modeling for continuous interaction reasoning and participation decisions, rather than restricting it to instruction understanding for diffusion models."
              },
              {
                "subtitle": "시간 축 동기화와 인과 관계 제어",
                "desc": "의도와 행동을 통합된 시간 축에서 동기화하고, 모듈별 주의 마스크(attention masks)를 사용해 인과 관계를 엄격히 통제했어요. 미래의 정보를 미리 보지 못하게 차단하면서도, 현재의 입력에 맞춰 일관된 반응을 생성하도록 만든 겁니다.",
                "evidence": "Constructing chunk-specific conditions and synchronize tokens across Intent and Realization on a unified timeline."
              },
              {
                "subtitle": "이중 롤아웃 증류를 통한 성능 안정화",
                "desc": "학습 과정에서 발생하는 데이터 분포의 변화를 줄이기 위해 이중 롤아웃 증류(dual rollout distillation) 방식을 도입했어요. 스스로 생성한 의도 토큰과 합성된 시청각 기록을 함께 학습시켜 모델의 성능을 안정적으로 유지했다는 겁니다.",
                "evidence": "Mitigating distribution shift in both modules through dual rollout distillation, training on autoregressively generated Intent tokens and synthesized audiovisual histories from Realization."
              }
            ],
            "one_line": "지능과 현실을 통합한 세계 모델을 개발해 실시간 상호작용을 구현했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "이번에 공개한 Duo v1은 첫 번째 단계일 뿐이며, 다음 버전을 곧 선보일 예정이에요.",
            "limit_evidence": "The release of Duo v1 makes our first step, with the next version coming soon."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
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
          "canon_id": "2611.13410",
          "title": "SteerDistill: Quantizing LLM Agents via Closed-Loop Teacher Steering",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.13410",
            "arxiv": "https://arxiv.org/abs/2611.13410"
          },
          "published": "2026-11-10",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": 35,
          "score": 4.5,
          "score_why": "추천 35 → +3.5 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "거대언어모델 에이전트의 양자화가 성능을 떨어뜨리는 문제",
            "easy1_desc": "거대언어모델(LLM) 에이전트의 추론 비용을 줄이려고 비트 수를 낮추는 양자화를 쓰는데, 이게 성능 저하를 일으키는 경우가 많거든요. 실패한 사례를 자세히 뜯어봤더니, 양자화된 모델이 작업의 핵심 요구 사항이나 주변 환경 조건을 제대로 파악하지 못하는 겁니다. 결과적으로 성공적인 고정밀 모델의 행동 경로에서 벗어난 엉뚱한 행동을 하게 된다는 말이에요.",
            "easy1_evidence": "Low-bit quantization reduces the inference cost of LLM agents but can compromise task success.",
            "easy2_title": "교사 모델이 직접 가르쳐서 성능을 끌어올리는 SteerDistill",
            "easy2_desc": "그래서 연구진은 SteerDistill이라는 새로운 방법을 제안했는데요, 고정밀 교사 모델이 학생 모델의 실패한 응답을 바로잡아 주고 그 피드백을 반복적으로 개선하는 방식이에요. 이렇게 교사가 실시간으로 행동을 교정해 주면 학생 모델은 올바른 행동을 학습하게 되거든요. 나중에는 교사 도움 없이도 스스로 추론할 수 있게 되는데, 기존 방식보다 훨씬 효율적이라는 겁니다.",
            "easy2_evidence": "We introduce SteerDistill, a quantization-aware distillation method in which a full-precision teacher guides the student to revise failed responses and iteratively refines its guidance using feedback from student execution.",
            "topic": "양자화된 거대언어모델 에이전트의 성능 저하를 막기 위해 교사 모델이 피드백을 제공하는 SteerDistill 학습법을 제안했어요.",
            "topic_evidence": "We introduce SteerDistill, a quantization-aware distillation method in which a full-precision teacher guides the student to revise failed responses and iteratively refines its guidance using feedback from student execution.",
            "points": [
              {
                "subtitle": "폐루프 교사 조향",
                "desc": "교사 모델이 학생 모델의 실행 결과를 보고 실패한 응답을 수정하도록 안내하는 폐루프(Closed-loop) 방식을 썼어요. 학생이 틀린 지점을 교사가 직접 짚어주며 행동을 교정하는 셈이에요.",
                "evidence": "This closed-loop teacher steering produces locally verified behavioral corrections."
              },
              {
                "subtitle": "학습 효율화",
                "desc": "교정된 응답을 학생 모델이 스스로 학습하게 해서 나중에는 도움 없이도 추론할 수 있게 만들었어요. 교사 모델의 지도를 내재화하는 과정이라고 보면 됩니다.",
                "evidence": "We internalize these corrections by training the student without guidance to match the steered student's predictions at corrected turns and the full-precision teacher's at other turns, enabling unassisted inference."
              },
              {
                "subtitle": "성능 검증",
                "desc": "다섯 가지 벤치마크와 세 가지 모델로 실험했더니, W4A16 설정에서 기존 최고 성능 모델보다 평균 점수가 1.67~2.18점 높게 나왔어요. 특히 τ^2-Bench에서는 QeRL보다 성공률이 1.84%포인트 높으면서도 학습에 필요한 GPU 시간은 67%나 줄였다고 연구진은 주장했습니다.",
                "evidence": "On τ^2-Bench, it outperforms QeRL by 1.84 percentage points in success rate using 67% fewer training GPU hours and produces shorter successful trajectories than the quantized baselines."
              }
            ],
            "one_line": "교사 모델의 피드백을 활용해 양자화된 에이전트의 성능을 높이는 학습법을 개발했어요.",
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
          "canon_id": "2611.17301",
          "title": "DiSKO: Distribution Steering for Nonlinear Systems using the Koopman Operator",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17301"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 비선형 시스템을 다루기가 참 어려웠거든요",
            "easy1_desc": "데이터 기반으로 확률적이고 비선형적인 시스템의 공분산(변수 간의 관계)을 제어하는 건 원래 까다로운 문제였는데요. 기존에는 시스템이 어떻게 움직일지 예측하기가 쉽지 않았거든요. 연구진은 쿱만 연산자(Koopman operator) 이론을 써서 이런 비선형 움직임을 선형적인 형태로 바꿔서 다루기로 했습니다. 쉽게 말하면 복잡한 곡선을 직선처럼 다룰 수 있게 변환해서 제어하기 편하게 만든 셈이에요.",
            "easy1_evidence": "This paper studies the problem of data-driven covariance steering for stochastic, nonlinear dynamical systems.",
            "easy2_title": "딥러닝으로 모델을 직접 학습시켜서 제어 성능을 높였어요",
            "easy2_desc": "연구진은 딥러닝(DNN)을 활용해 쿱만 관측값과 선형 모델의 매개변수를 동시에 학습시키는 방식을 제안했는데요. 사람이 직접 관측값의 기준을 정할 필요가 없어졌고, 변환된 공간의 차원도 줄어들어 효율적이라는 장점이 있어요. 학습 과정에서 안정성 같은 좋은 특성도 함께 챙길 수 있거든요. 수치 시뮬레이션을 해 봤더니 제안한 방식이 효과적으로 작동했다는 사실을 확인했다는 겁니다.",
            "easy2_evidence": "Furthermore, we leverage a deep neural network (DNN) to simultaneously learn the Koopman observables and the linear model parameters, thus eliminating the need for manual observables basis selection while also reducing the dimensionality of the lifted representation.",
            "topic": "데이터 기반의 쿱만 연산자를 활용해 비선형 시스템의 공분산을 강건하게 제어하는 프레임워크를 제안했어요.",
            "topic_evidence": "We utilize Koopman operator theory to learn, directly from data, an approximate linear representation of the nonlinear dynamics in a lifted space of observable functions of the state.",
            "points": [
              {
                "subtitle": "선형 모델로의 변환",
                "desc": "비선형 시스템을 쿱만 연산자를 이용해 관측 가능한 함수들의 공간에서 선형적인 표현으로 바꿨습니다. 이 덕분에 복잡한 비선형 시스템을 선형 제어 알고리즘으로 다룰 수 있게 된 거예요.",
                "evidence": "We utilize Koopman operator theory to learn, directly from data, an approximate linear representation of the nonlinear dynamics in a lifted space of observable functions of the state."
              },
              {
                "subtitle": "분포 강건 제어 설계",
                "desc": "학습된 모델의 오차나 외란 분포의 모호함을 고려해서 문제를 분포 강건 공분산 제어 문제로 정의했습니다. 모델이 완벽하지 않아도 안정적으로 제어할 수 있도록 설계했다는 말이에요.",
                "evidence": "To account for approximation errors in the learned dynamics and the ambiguity in the disturbance distribution induced in the lifted space, we formulate the problem as a distributionally robust covariance steering problem."
              },
              {
                "subtitle": "딥러닝 기반 최적화",
                "desc": "딥러닝을 써서 관측값과 모델 매개변수를 한꺼번에 학습시켰는데요. 사람이 일일이 관측 기준을 정할 필요가 없고 차원도 줄어들어 효율적이며, 학습 중에 시스템 안정성까지 확보할 수 있다는 장점이 있습니다.",
                "evidence": "Furthermore, we leverage a deep neural network (DNN) to simultaneously learn the Koopman observables and the linear model parameters, thus eliminating the need for manual observables basis selection while also reducing the dimensionality of the lifted representation."
              }
            ],
            "one_line": "쿱만 연산자와 딥러닝을 결합해 비선형 시스템의 공분산 제어 기법을 개발했어요.",
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
          "canon_id": "2611.17173",
          "title": "Generalized Gated Recurrent Neural Networks for Nonlinear System Identification",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17173"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "LSTM과 GRU 중 하나만 고르느라 고민이 많았거든요",
            "easy1_desc": "비선형 시스템을 알아낼 때 LSTM과 GRU라는 두 가지 순환 신경망(RNN)을 주로 쓰는데, 지금까지는 둘 중 하나만 선택해서 써야 했거든요. 그런데 연구진이 실험해 보니 어느 한쪽이 항상 더 낫다고 말하기 어렵다는 걸 확인했어요. 즉, 어떤 시스템에는 LSTM이 맞고 어떤 시스템에는 GRU가 맞는데, 딱 잘라 말하기가 힘들다는 게 문제였던 겁니다.",
            "easy1_evidence": "Long Short-Term Memory (LSTM) and Gated Recurrent Unit (GRU) networks are the two most widely adopted recurrent neural networks for black-box nonlinear system identification, yet they are invariably treated as mutually exclusive structural choices.",
            "easy2_title": "두 방식을 하나로 합쳐서 최적의 구조를 스스로 찾게 했어요",
            "easy2_desc": "그래서 연구진은 두 구조의 특징을 모두 담은 일반화된 게이트 순환 신경망(GGRNN)을 만들었는데요, 두 방식 사이를 연속적으로 변형하는 호모토피 기법을 써서 하나의 통합된 구조로 합친 거예요. 각 유닛이 학습 과정에서 스스로 최적의 위치를 찾아가게 했더니, 기존의 LSTM이나 GRU만으로는 표현하지 못했던 새로운 게이트 동작을 만들어낼 수 있게 됐거든요. 결과적으로 위너-해머스타인이나 나노 드론 같은 벤치마크 실험에서 기존 방식보다 더 정확한 시뮬레이션 결과를 보여줬다는 겁니다.",
            "easy2_evidence": "To move toward a general framework that inherits the properties of both networks, we introduce the Generalized Gated Recurrent Neural Network (GGRNN), a unified architecture that embeds the exact GRU and LSTM network dynamics through homotopies between their respective gating mechanisms.",
            "topic": "비선형 시스템 식별을 위해 LSTM과 GRU의 게이팅 메커니즘을 통합한 일반화된 게이트 순환 신경망(GGRNN)을 제안하고 그 성능을 검증했어요.",
            "topic_evidence": "To move toward a general framework that inherits the properties of both networks, we introduce the Generalized Gated Recurrent Neural Network (GGRNN), a unified architecture that embeds the exact GRU and LSTM network dynamics through homotopies between their respective gating mechanisms.",
            "points": [
              {
                "subtitle": "호모토피 기반 통합 구조",
                "desc": "연구진은 호모토피 매개변수를 사용해 LSTM과 GRU의 게이팅 메커니즘을 연속적으로 변형하고 결합했어요. 이를 통해 두 구조의 장점을 모두 활용할 수 있는 통합된 아키텍처를 설계한 겁니다.",
                "evidence": "Each homotopy continuously deforms one mechanism into the other, with a vector of homotopy parameters blending the contribution of the GRU and LSTM counterparts."
              },
              {
                "subtitle": "2단계 학습 방법론",
                "desc": "학습은 두 단계로 나누어 진행하는데요, 1단계에서는 LSTM과 GRU 양쪽 끝단 구조의 매개변수를 병렬로 함께 학습시키고, 2단계에서는 네트워크 매개변수를 고정한 채 호모토피 매개변수만 최적화하는 방식이에요.",
                "evidence": "We pair the GGRNN with a two-stage training methodology: in Stage 1 we co-train all shared and network-specific parameters in parallel at the GRU and LSTM endpoint architectures, while in Stage 2 we freeze the network parameters and optimize only the homotopy parameters."
              },
              {
                "subtitle": "성능 검증 결과",
                "desc": "위너-해머스타인과 나노 드론 벤치마크에서 실험해 봤더니, 대부분의 출력 그룹에서 기존의 공동 학습된 LSTM 및 GRU보다 시뮬레이션 정확도가 높았어요. 거의 모든 비교 대상인 블랙박스 기준 모델보다도 뛰어난 성능을 보였다고 연구진은 주장했습니다.",
                "evidence": "Experiments on the Wiener-Hammerstein and Nano-Drone benchmarks show improved simulation accuracy over the co-trained GRU and LSTM networks on most output groups, and over the reference black-box baselines in nearly all comparisons."
              }
            ],
            "one_line": "LSTM과 GRU를 통합한 GGRNN을 제안하고 성능을 검증했어요.",
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
          "canon_id": "2611.17095",
          "title": "Total Energy Shaping of Underactuated Systems via Gravity Compensation at the Desired Equilibrium",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17095"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "제어할 때마다 중력을 계산하는 게 너무 복잡했어요",
            "easy1_desc": "기존의 제어 방식은 시스템이 움직이는 내내 실시간으로 중력 영향을 계산해야 했거든요. 이게 계산량이 많아져서 실제 기계를 제어할 때 부담이 컸던 겁니다. 연구진은 이런 방식이 왜 비효율적인지 지적하면서, 실시간 계산 없이도 안정성을 확보할 방법을 고민해 본 거예요.",
            "easy1_evidence": "This paper investigates total energy shaping of underactuated mechanical systems with gravity compensation evaluated at the desired equilibrium instead of throughout the online closed-loop operation.",
            "easy2_title": "목표 지점에서만 중력을 고려해 계산을 단순하게 바꿨어요",
            "easy2_desc": "연구진은 시스템이 도달하려는 목표 지점(평형점)에서만 중력을 보상하도록 제어 방식을 바꿨는데요, 이렇게 하면 실시간으로 복잡한 중력 계산을 할 필요가 없어진다는 장점이 있어요. 대신 제어기를 설계할 때 중력 모델을 미리 알고 있어야 한다는 조건이 붙지만, 전체적인 제어 과정은 훨씬 간결해진 셈이에요. 쉽게 말하면, 매번 계산하던 걸 미리 한 번만 계산해서 효율을 높인 겁니다.",
            "easy2_evidence": "The proposed control law avoids online evaluation of the configuration-dependent gravity term; offline controller synthesis and verification can still require knowledge of the gravity model.",
            "topic": "목표 평형점에서 중력을 보상하는 방식으로 저작동 기계 시스템의 에너지 성형 제어 성능을 높이는 연구예요.",
            "topic_evidence": "This paper investigates total energy shaping of underactuated mechanical systems with gravity compensation evaluated at the desired equilibrium instead of throughout the online closed-loop operation.",
            "points": [
              {
                "subtitle": "IDA-PBC 기반 안정성 확보",
                "desc": "상호연결 및 감쇠 할당 수동성 기반 제어(IDA-PBC) 틀 안에서 시스템의 안정성을 증명했어요. 벡터 장의 적분 가능성과 확장된 위치 에너지의 양의 정부호를 조건으로 내세워 국소 점근적 안정성을 확보한 겁니다.",
                "evidence": "Within the interconnection and damping assignment passivity-based control (IDA-PBC) framework, sufficient conditions for local asymptotic stability are established in terms of integrability of a vector field and positive definiteness of an augmented potential energy."
              },
              {
                "subtitle": "위치 에너지 매칭 재구성",
                "desc": "위치 에너지 매칭 문제를 다시 정의해서 계산을 더 쉽게 만들었어요. 기존의 복잡한 비동차 편미분 방정식을 동차 방정식으로 바꾸고 새로운 설계 항을 추가해서 문제를 푸는 방식을 제안한 거예요.",
                "evidence": "The approach is also combined with a reformulation of potential energy matching that replaces a nonhomogeneous partial differential equation with a homogeneous one and introduces an additional design term."
              },
              {
                "subtitle": "TORA 시스템 적용 사례",
                "desc": "TORA(회전 진동기) 시스템과 2자유도 시스템을 예로 들어 이 제어 방식이 어떻게 작동하는지 보여줬어요. 매칭 조건과 적분 가능성 요구 사항을 어떻게 해결할 수 있는지 구체적인 분석을 통해 증명한 셈이에요.",
                "evidence": "Analytic constructions for the TORA system and a class of two-degree-of-freedom systems illustrate how the matching and integrability requirements can be addressed."
              }
            ],
            "one_line": "목표 지점 중력 보상으로 제어 복잡도를 낮추는 기법을 제안했어요.",
            "topic_tag": "제어·로봇",
            "limit": "제어기를 미리 설계하고 검증하는 과정에서는 여전히 중력 모델에 대한 정보가 필요하다는 한계가 있어요.",
            "limit_evidence": "offline controller synthesis and verification can still require knowledge of the gravity model."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.17094",
          "title": "GRID-MRI: Resilience Assessment of Power Systems under Coordinated Cyber-Physical Attacks",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17094"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식으로는 복합적인 공격을 제대로 막아내지 못합니다",
            "easy1_desc": "요즘 전력망은 인버터 기반 자원이 늘고 사이버와 물리적 요소가 복잡하게 얽혀 있는데요, 기존의 회복력 평가 방식은 이런 요소들을 따로따로 떼어 놓고 봐서 문제가 생깁니다. 뭔 소리냐면, 여러 공격이 동시에 들어오는 상황에서 나타나는 비선형적인 파급 효과나 외부 환경 요인을 제대로 반영하지 못한다는 말이에요. 쉽게 말하면, 개별적인 위험은 잘 잡아내도 복합적으로 얽힌 진짜 위험은 놓치기 쉽다는 겁니다.",
            "easy1_evidence": "Existing approaches often evaluate resilience dimensions independently, overlooking the non-additive effects of coordinated disruptions and the influence of exogenous stressors.",
            "easy2_title": "복합적인 위험을 한 번에 평가하는 새로운 지표를 만들었습니다",
            "easy2_desc": "그래서 연구진은 물리적, 사이버, 운영적 성능 저하를 통합해서 평가하는 GRID-MRI라는 지표를 제안했는데요, 이 지표는 공격 간의 상호작용은 물론 기후나 경제 규제 같은 외부 요인까지 고려합니다. 실제로 IEEE 39-bus 시스템에 적용해 봤더니, 개별 공격은 견뎌내더라도 공격들이 조율되면 시스템이 붕괴할 수 있다는 점을 확인했거든요. 결과적으로 기존의 단순 합산 방식보다 훨씬 정밀하게 위험을 측정할 수 있게 된 셈이에요.",
            "easy2_evidence": "To address this gap, this paper proposes a Grid Multidimensional Resilience Index (GRID-MRI) that integrates endogenous disruption severity, coordination effects, and climatic and economic-regulatory conditions.",
            "topic": "전력망의 사이버-물리적 복합 공격에 대응하기 위해 다차원적인 회복력 평가 지표를 제안하고 그 효과를 검증했습니다.",
            "topic_evidence": "This paper proposes a Grid Multidimensional Resilience Index (GRID-MRI) that integrates endogenous disruption severity, coordination effects, and climatic and economic-regulatory conditions.",
            "points": [
              {
                "subtitle": "GRID-MRI 지표 개발",
                "desc": "연구진은 시스템의 물리적, 사이버, 운영적 성능 저하를 하나로 묶어 평가하는 GRID-MRI를 개발했습니다. 여기에 기후와 경제적 규제 같은 외부 스트레스 요인까지 시나리오별로 반영할 수 있도록 설계했거든요.",
                "evidence": "The framework quantifies physical, cyber, and operational degradation, identifies interaction effects through counterfactual (i.e., what-if), simulations of individual and coordinated attacks, and incorporates exogenous stressors as scenario-dependent scaling factors."
              },
              {
                "subtitle": "복합 공격 시뮬레이션",
                "desc": "2025년 12월 폴란드 사이버 공격 사례를 참고하여 IEEE 39-bus 시스템에서 세 단계의 공격 시나리오를 실험했습니다. 그 결과, 개별적으로는 시스템이 안정적이어도 공격이 조율되면 결국 시스템이 붕괴한다는 사실을 밝혀냈습니다.",
                "evidence": "Its application to a modified IEEE 39-bus system under three escalating cyber-physical attack scenarios, informed by the December 2025 Polish cyberattack incident, reveals that coordinated attacks induce system collapse despite stable individual and additive responses."
              },
              {
                "subtitle": "기존 평가 방식의 한계 입증",
                "desc": "실험 결과, 복합 공격 시 회복력 손실은 단순 합산 추정치보다 3.72배에서 4.09배까지 더 크게 나타났습니다. GRID-MRI 지표값 역시 0.062에서 1.188로, 외부 스트레스가 더해지면 6.081까지 치솟아 기존 방식의 한계를 명확히 보여줬다는 주장입니다.",
                "evidence": "The corresponding resilience losses are 3.72 and 4.09 times their additive estimates, while GRID-MRI increases from 0.062 to 1.188 and reaches 6.081 under additional exogenous stress."
              }
            ],
            "one_line": "전력망의 다차원적 회복력을 평가하는 GRID-MRI 지표를 제안했어요.",
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
          "canon_id": "2611.17046",
          "title": "Robust Control Design for LTI Systems with Sampling-Time Jitter",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17046"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "샘플링 시간이 일정하지 않아서 제어기가 제대로 작동하지 않았어요",
            "easy1_desc": "제어 시스템에서 샘플링 시간(데이터를 읽어 들이는 간격)이 불규칙하게 흔들리는 지터(Jitter) 현상이 생기면, 시스템이 시간에 따라 변하는 성질을 갖게 되거든요. 기존의 선형 시불변(LTI) 제어 설계 방식은 이런 변화를 직접 다루지 못한다는 한계가 있었어요. 쉽게 말하면, 샘플링 간격이 일정할 때만 잘 작동하던 기존 방식이 지터 때문에 무용지물이 된 셈이에요.",
            "easy1_evidence": "Sampling-time jitter makes a sampled-data control loop time-varying, so standard LTI robust-control synthesis does not apply directly.",
            "easy2_title": "지터를 불확실성으로 보고 강건한 제어기를 설계했어요",
            "easy2_desc": "연구진은 샘플링 지터를 불확실한 요소로 보고, 이를 포함한 시스템을 강건 제어 문제로 다시 정의했는데요. 지터가 포함된 모델을 고정된 부분과 시간에 따라 변하는 불확실성 블록으로 쪼개서, 기존의 강건 제어 도구를 그대로 쓸 수 있게 만든 거예요. 이렇게 설계했더니 지터가 있어도 시스템이 안정적으로 유지되는 성능을 얻을 수 있었다고 합니다.",
            "easy2_evidence": "This paper reformulates dynamic output feedback design under bounded, unmeasured sample-to-sample jitter as a robust-control problem.",
            "topic": "샘플링 지터가 존재하는 선형 시스템에서 강건 제어기를 설계하는 새로운 방법을 제안했어요.",
            "topic_evidence": "This paper reformulates dynamic output feedback design under bounded, unmeasured sample-to-sample jitter as a robust-control problem.",
            "points": [
              {
                "subtitle": "시스템 모델 재구성",
                "desc": "지터가 있는 시스템을 명목상의 시불변 플랜트와 메모리가 없는 시간 가변 불확실성 블록으로 분해했어요. 이 블록이 메모리가 없다는 점을 이용해서, 복잡한 시간 가변 루프의 안정성 조건을 표준적인 행렬 노름 경계 테스트로 단순화했거든요.",
                "evidence": "The exact zero-order-hold model is decomposed into a nominal time-invariant plant and a memoryless, time-varying uncertainty block with a norm bound representing the sampling-time jitter."
              },
              {
                "subtitle": "강건 제어 설계 목표",
                "desc": "분해한 모델을 일반화된 플랜트에 포함해 두 가지 목표를 달성하고자 했는데요. 구조화된 H-inf 합성으로 명목 성능을 최적화하면서 안정성을 확보하거나, 뮤(mu) 합성으로 강건한 성능을 보장하는 방식이에요.",
                "evidence": "Embedding the decomposition into a generalized plant with performance channels serves two synthesis objectives with standard robust-control tools: Robust stability with optimized nominal performance through structured H-inf synthesis, and robust performance through mu synthesis with constant scalings."
              },
              {
                "subtitle": "수치 예제를 통한 검증",
                "desc": "실제 예제를 통해 확인해 보니, 기존 H-inf 제어기는 지터 때문에 시스템이 불안정해질 수 있었거든요. 반면 제안한 강건 설계 방식은 모두 안정성을 유지했고, 특히 강건 성능 설계 방식이 지터에 덜 민감하게 반응한다는 점을 확인했습니다.",
                "evidence": "A numerical example shows that jitter can destabilize a control loop with a nominal H-inf controller, whereas both robust designs remain stable and the robust-performance design is less sensitive to jitter at the cost of nominal performance."
              }
            ],
            "one_line": "샘플링 지터가 있는 시스템을 강건 제어 문제로 재정의하여 안정성을 확보했어요.",
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
          "canon_id": "2611.17034",
          "title": "Control-Gibbs Distribution: Sampling for Optimal Control and Diverse Actions",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17034"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 제어 방식은 딱 하나의 정답만 찾으려 했어요",
            "easy1_desc": "보통 최적 제어라고 하면 가장 효율적인 입력값 하나만을 골라내는 방식을 써 왔거든요. 그런데 이런 방식은 정해진 답만 찾다 보니 다양한 가능성을 놓치거나 복잡한 상황에 유연하게 대처하기가 어렵다는 한계가 있어요. 쉽게 말하면, 최선의 길 하나만 고집하다가 다른 좋은 선택지들을 아예 배제해 버리는 셈이라는 말이에요.",
            "easy1_evidence": "While conventional optimal control selects an optimal input sequence, probabilistic control assigns probability mass over all possible inputs and exploits a distribution of control sequences.",
            "easy2_title": "확률을 활용해 여러 제어 경로를 한꺼번에 찾았어요",
            "easy2_desc": "연구진은 제어 깁스 분포(Control-Gibbs distribution)라는 모델을 통해 여러 제어 경로를 확률적으로 다루는 방법을 제시했는데요. 이 모델은 최적 제어 목표를 에너지 함수로 삼아 다양한 제어 시퀀스를 샘플링할 수 있게 해 줍니다. 덕분에 결정론적인 최적 제어 문제를 풀면서도 동시에 여러 가지 다양한 해결책을 얻을 수 있다는 장점이 있어요. 쉽게 말하면, 하나만 고르는 게 아니라 확률 분포를 이용해 여러 대안을 동시에 확보하는 방식이라는 겁니다.",
            "easy2_evidence": "The guarantees show the dual benefits of sampling the control-Gibbs distribution: obtaining diverse control solutions and solving the deterministic optimal control problem.",
            "topic": "제어 깁스 분포를 중심으로 다양한 확률적 제어 프레임워크를 통합하고 이를 샘플링하는 이론적 근거를 마련했어요.",
            "topic_evidence": "This provides a model-central perspective to unify these probabilistic control frameworks.",
            "points": [
              {
                "subtitle": "제어 깁스 분포의 통합적 역할",
                "desc": "연구진은 최대 엔트로피 제어나 제어-추론 프레임워크 등 기존의 여러 확률적 제어 방식들이 사실은 제어 깁스 분포라는 하나의 모델로 설명될 수 있다고 주장했어요. 이 모델을 중심에 두면 흩어져 있던 제어 이론들을 체계적으로 통합해서 바라볼 수 있다는 거예요.",
                "evidence": "We point out its fundamental role in various probabilistic control frameworks, e.g., maximum entropy control, control-as-inference framework, model predictive path integral control, and energy-based models for control."
              },
              {
                "subtitle": "동적 계획법의 확장과 샘플링",
                "desc": "폐루프 제어 분포를 계산하기 위해 동적 계획법을 어떻게 확장할 수 있는지 검토했는데요. 특히 제어 깁스 분포를 샘플링하기 위해 투영 랑주뱅 샘플링(Projected Langevin sampling) 방식을 도입하고 이에 대한 비점근적 보증을 마련했어요.",
                "evidence": "To sample the control-Gibbs distribution, we consider projected Langevin sampling and develop non-asymptotic guarantees."
              },
              {
                "subtitle": "로봇 팔 궤적 생성 예시",
                "desc": "이론의 실효성을 확인하기 위해 로봇 팔이 움직이는 궤적을 샘플링하는 수치적 예시를 제시했어요. 이를 통해 제어 깁스 분포를 활용하면 다양한 움직임을 생성하는 동시에 최적 제어 문제까지 해결할 수 있음을 보여준 거예요.",
                "evidence": "We provide a numerical example where diverse arm trajectories are sampled from a control-Gibbs distribution."
              }
            ],
            "one_line": "제어 깁스 분포를 활용해 확률적 제어 프레임워크를 통합하고 샘플링 기법을 개발했어요.",
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
          "canon_id": "2611.16980",
          "title": "CT-RespGeomLib: Deterministic reconstruction of CT airway masks into editable,port-matched lumen geometry",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16980"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "환자 기도를 모델링할 때 모양을 바꾸기가 어려웠어요",
            "easy1_desc": "환자마다 다른 기도 모양을 컴퓨터로 구현하려면 정확한 경계면이 필요한데요, 기존 방식으로는 기도를 단순히 마스크 형태로만 다루다 보니 나중에 병변을 인위적으로 수정하기가 무척 까다로웠거든요. 뭔 소리냐면, 기도 모양을 조금만 바꾸고 싶어도 처음부터 다시 세그멘테이션(분할) 작업을 해야 했다는 말이에요. 연구진은 이런 번거로움을 해결하고자 기도를 수정 가능한 단위로 나누어 다루는 새로운 방식을 고민했습니다.",
            "easy1_evidence": "Patient-specific airway modelling requires geometrically consistent lumen surfaces with identifiable boundaries and support for controlled anatomical modifications.",
            "easy2_title": "기도를 블록처럼 조립해서 쉽게 수정할 수 있게 만들었어요",
            "easy2_desc": "연구진은 CT 마스크를 파이프와 분기점 블록으로 나누어 조립하는 CT-RespGeomLib라는 체계를 개발했는데요, 이 방식을 쓰면 기도의 특정 부위를 좁히거나 넓히는 수정 작업을 다시 세그멘테이션할 필요 없이 바로 할 수 있게 됩니다. 실제로 42개의 기도 데이터를 시험해 봤더니, 원래 모양과 거의 일치하면서도 병변을 25%에서 75%까지 조절하는 등 정교한 모델링이 가능했다는 거예요. 쉽게 말하면, 기도를 레고 블록처럼 다룰 수 있게 되어 연구나 치료 계획을 세우기가 훨씬 편해졌다는 뜻입니다.",
            "easy2_evidence": "The parametric representation further enables localised modelling of airway stenosis and dilation without re-segmentation.",
            "topic": "CT 영상을 기반으로 기도를 수정 가능한 기하학적 구조로 변환하는 결정론적 프레임워크를 제안했어요.",
            "topic_evidence": "We present CT-RespGeomLib, a deterministic framework that converts CT airway masks into two complementary representations: an editable assembly of semantically labelled pipe and junction blocks connected through canonical shared ports, and a fused lumen surface reconstructed from tapered implicit primitives with validated port-to-boundary loop correspondence.",
            "points": [
              {
                "subtitle": "기도의 이중 표현 방식",
                "desc": "연구진은 기도를 의미 있는 파이프와 분기점 블록으로 조립하고, 동시에 이를 융합한 루멘 표면으로 재구성하는 방식을 택했습니다. 이 두 가지 표현은 서로 보완하며 기도의 경계면을 명확하게 유지해 줍니다.",
                "evidence": "We present CT-RespGeomLib, a deterministic framework that converts CT airway masks into two complementary representations: an editable assembly of semantically labelled pipe and junction blocks connected through canonical shared ports, and a fused lumen surface reconstructed from tapered implicit primitives with validated port-to-boundary loop correspondence."
              },
              {
                "subtitle": "정밀도 및 성능 평가",
                "desc": "ATM22와 AeroPath 데이터셋의 42개 사례를 평가한 결과, 37개에서 성공적으로 재구성이 이루어졌습니다. 매칭된 포트 간의 거리는 중앙값이 0.123 mm로 나타났고, 반지름의 일치도를 나타내는 R제곱 값은 0.976으로 매우 높게 확인되었습니다.",
                "evidence": "Evaluated on 42 reference airway masks from ATM22 (15 cases) and AeroPath (27 cases), the framework produced 37 topologically accepted reconstructions, with a median port-to-loop distance of 0.123 mm across 2174 matched ports."
              },
              {
                "subtitle": "병변 모델링 및 활용",
                "desc": "연구진은 기관과 주기관지 부위에 25~75%의 협착과 50%의 확장을 적용해 병변 모델링을 수행했습니다. 이렇게 만든 모델은 볼륨 메싱과 OpenFOAM 시뮬레이션에 바로 활용할 수 있어 실제 공학적 분석에 유용하다고 주장했습니다.",
                "evidence": "Downstream applicability was demonstrated through volume meshing and an OpenFOAM simulation with individually prescribed model-based resistance conditions at 62 outlets."
              }
            ],
            "one_line": "CT 기도 영상을 수정 가능한 기하학적 구조로 변환하는 체계를 개발했어요.",
            "topic_tag": "의료·바이오",
            "limit": "수치 해석을 위한 메싱 작업을 하려면 추가적인 표면 다듬기 과정이 필요할 수 있습니다.",
            "limit_evidence": "Although additional surface preparation may be required for numerical meshing, CT-RespGeomLib provides a reproducible framework for CT-derived airway reconstruction, quantitative boundary validation and controlled geometric pathology modelling."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          "canon_id": "2611.16951",
          "title": "Survivability Guarantees for Delayed Serial Supply Chains under Demand Shocks",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16951"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "수요가 폭발할 때 공급망이 얼마나 버틸지 알 수 없었어요",
            "easy1_desc": "기존의 공급망 제어 방식은 수요가 일정할 때만 안정적으로 돌아가도록 설계되어 있는데요, 정작 수요가 생산 능력을 넘어서는 충격이 왔을 때 얼마나 버틸 수 있는지에 대한 보장은 없었거든요. 뭔 소리냐면, 재고가 바닥나기 전까지 시스템이 정상적으로 작동할 시간을 미리 계산할 방법이 마땅치 않았다는 말이에요. 그래서 갑작스러운 수요 급증 상황에서 공급망이 언제 무너질지 예측하기 어려웠던 겁니다.",
            "easy1_evidence": "Existing control methods ensure indefinite constraint satisfaction under bounded demand, but provide no guarantees on how long a supply chain can withstand a shock in which demand goes beyond production capacity.",
            "easy2_title": "재고를 똑똑하게 쌓아서 버티는 시간을 보장하게 됐어요",
            "easy2_desc": "이번 연구에서는 운송 지연과 흐름 제한이 있는 직렬 공급망을 대상으로, 수요 충격이 와도 일정 시간 동안은 공급이 끊기지 않도록 하는 재고 조건을 찾아냈는데요, 이 조건을 바탕으로 비용을 최소화하면서도 목표한 시간을 버틸 수 있는 재고량을 계산해 낸 거예요. 평소에는 재고를 쌓아두고 충격이 오면 이를 꺼내 쓰는 이중 모드 제어기를 제안했거든요. 쉽게 말하면, 공급망이 버틸 수 있는 최소한의 시간을 수학적으로 보장하고 이를 유지하기 위한 최적의 재고 전략을 마련한 셈이에요.",
            "easy2_evidence": "Under a specified flow policy, we derive necessary and sufficient conditions on the inventory distribution that guarantee a prescribed lower bound on the exit time from the set where demand is served.",
            "topic": "수요 충격이 발생하는 직렬 공급망에서 시스템이 정상 작동을 유지할 수 있는 생존 시간을 보장하는 제어 전략에 대한 연구예요.",
            "topic_evidence": "We address this gap for a serial supply chain with transportation delays and flow constraints.",
            "points": [
              {
                "subtitle": "생존 시간 보장 조건 도출",
                "desc": "공급망 내의 재고 분포가 수요 충격을 얼마나 견딜 수 있는지 결정하는 필요충분조건을 수학적으로 유도했는데요, 이를 통해 수요가 생산 능력을 초과하더라도 시스템이 특정 시간 동안은 정상적으로 작동함을 보장할 수 있게 됐습니다.",
                "evidence": "Under a specified flow policy, we derive necessary and sufficient conditions on the inventory distribution that guarantee a prescribed lower bound on the exit time from the set where demand is served."
              },
              {
                "subtitle": "비용 최적화 및 재고 전략",
                "desc": "유도한 조건을 활용해서 재고 유지 비용을 최소화하는 목표치를 계산해 냈는데요, 이차 계획법(Quadratic program)을 사용하여 비용 효율성을 높이면서도 필요한 생존 시간을 확보하는 최적의 재고 수준을 찾아낸 겁니다.",
                "evidence": "We use these conditions to compute inventory targets that minimize holding costs via a quadratic program."
              },
              {
                "subtitle": "이중 모드 제어기 제안",
                "desc": "평상시에는 재고를 축적하고 수요 충격이 발생하면 이를 소진하는 방식의 이중 모드 제어기를 제안했는데요, 시뮬레이션을 통해 이 접근 방식이 실제로 공급망의 회복력을 높이는 데 효과적임을 확인했습니다.",
                "evidence": "Then, we propose a two-mode controller that builds reserves under ordinary demand and depletes them during the shock."
              }
            ],
            "one_line": "수요 충격 시 공급망의 생존 시간을 보장하는 재고 제어 전략을 개발했어요.",
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
          "canon_id": "2611.16866",
          "title": "Adjacent Heat Transfer Effects Can Bias Savings Estimates When Controlling Only Part of a Multi-Zone Building",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16866"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "건물 일부만 제어하면 에너지 절감 효과가 부풀려져요",
            "easy1_desc": "건물 전체가 아니라 특정 구역만 냉난방을 조절하고 절감량을 계산하면, 실제보다 효과가 크게 나타나는 문제가 발생하는데요. 그 이유는 제어하지 않는 옆 구역에서 열을 끌어다 쓰는데, 그 비용은 옆 구역 장비가 부담하기 때문에 계산에서 빠지기 때문이에요. 쉽게 말하면, 옆집 열을 몰래 가져다 쓰고는 우리 집만 에너지를 아꼈다고 착각하는 셈이라는 말이에요.",
            "easy1_evidence": "A recent theorem showed that this practice overestimates whole-building savings, because heat drawn from the neighboring zones is paid for by their equipment and is not counted.",
            "easy2_title": "열 전달 공식을 써서 실제 절감량을 정확히 찾아냈어요",
            "easy2_desc": "연구진은 인디애나주 웨스트 라피엣에 있는 2층 집을 90일 동안 시뮬레이션해서, 열 전달 이론을 적용해 실제 절감량을 정확히 복구해 봤는데요. 열 전도율 비율을 이용해 오차 범위를 미리 예측할 수 있음을 확인했고, 요금제나 난방 방식이 바뀌어도 이론이 잘 들어맞는다는 걸 증명했어요. 다만 시간대별 요금제에서는 열을 저장했다 쓰는 방식 때문에 오차 범위가 다소 느슨하게 나타난다는 점도 같이 확인했다는 겁니다.",
            "easy2_evidence": "The exact correction from the theorem recovers the true savings in every case, and the full theorem, evaluated from the controlled zone's temperatures, the prices, and the building parameters, reproduces the measured relative error in every case.",
            "topic": "건물 내 일부 구역만 제어할 때 발생하는 열 전달 효과가 에너지 절감 추정치에 미치는 영향을 분석하고 이를 보정하는 방법을 다뤘어요.",
            "topic_evidence": "Adjacent Heat Transfer Effects Can Bias Savings Estimates When Controlling Only Part of a Multi-Zone Building",
            "points": [
              {
                "subtitle": "열 전달 오차의 원인 분석",
                "desc": "제어 구역과 비제어 구역 사이의 열 전도율이 높을수록, 그리고 온도 차이가 크거나 옆 구역의 난방 비용이 비쌀수록 절감량 계산 오차가 커진다는 걸 밝혀냈는데요. 이 오차는 결국 옆 구역에서 넘어오는 열을 제대로 계산하지 않아서 생기는 문제라는 겁니다.",
                "evidence": "The error grows with the thermal conductance between the controlled and uncontrolled zones, with how much colder the controlled zones run over the test, and with the price of the heat their neighbors supply."
              },
              {
                "subtitle": "시뮬레이션 환경 구축",
                "desc": "웨스트 라피엣의 2층 주택을 대상으로 90일간 난방 시즌을 시뮬레이션했는데요. 1층은 모델 예측 제어(MPC)를, 2층은 설정 온도 제어를 적용했고 전기 요금제와 난방 설비 조합을 네 가지로 나누어 실험을 진행했어요.",
                "evidence": "A two-story house with one thermal zone per floor is simulated over a 90-day heating season in West Lafayette, Indiana, with receding-horizon model predictive control on the first floor and setpoint control on the second, under four combinations of electricity tariff (time-of-use or flat) and heating plant (heat pump or electric resistance)."
              },
              {
                "subtitle": "이론적 보정의 정확성 검증",
                "desc": "연구진이 제시한 이론적 보정값은 모든 경우에서 실제 절감량을 정확히 복구해 냈는데요. 특히 고정 요금제에서는 오차 범위가 3% 이내로 매우 촘촘하게 맞았지만, 시간대별 요금제에서는 부하 이동 방식 때문에 오차 범위가 다소 느슨하게 나타났다고 주장했어요.",
                "evidence": "The conductance ratio bounds that error from above in all four cases, tightly under a flat tariff, within 3%, and loosely under a time-of-use tariff, where most of the controller's savings come from shifting load through the thermal mass rather than from lowering the temperature."
              }
            ],
            "one_line": "건물 일부 구역 제어 시 발생하는 열 전달 오차를 이론으로 보정했어요.",
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
          "canon_id": "2611.16808",
          "title": "Quantum Network Flows That Solve Linear Equations",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16808"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "분산된 양자 네트워크로 선형 방정식을 풀어 봤습니다",
            "easy1_desc": "각 노드에 저장된 행 데이터를 바탕으로 선형 방정식을 푸는 분산형 양자 네트워크 흐름을 개발했는데요. 노드마다 방정식을 강제로 맞추는 펌핑 과정을 거치고, 이웃한 레지스터끼리는 스왑(swap)을 통해 정보를 주고받는 방식이에요. 이렇게 하면 노드들이 가진 정보가 서로 합의를 이루면서 전체적으로 하나의 해를 찾아가는 구조가 만들어진다는 겁니다.",
            "easy1_evidence": "We develop a distributed quantum network flow for solving linear equations from locally stored row data.",
            "easy2_title": "방정식의 종류에 따라 해를 찾는 방법이 달라집니다",
            "easy2_desc": "방정식의 해가 일관성 있게 존재하면 노드 상태들이 지수적으로 수렴해 하나의 해로 모이게 되는데요. 만약 해가 없는 불일치 방정식이라도 열의 계수가 충분하면, 스케일링을 조절해 최소제곱법으로 해를 찾아낼 수 있다는 거예요. 이 과정에서 그래프의 연결 상태와 데이터 배치에 따라 성능이 달라지는데, 전체 스왑 속도 예산 안에서 최적화가 가능하다는 점도 확인했습니다.",
            "easy2_evidence": "For inconsistent equations of full column rank, scaled encoding and readout recover the least-squares solution through successive large-gain and small-scale limits.",
            "topic": "분산된 양자 네트워크 흐름을 활용하여 선형 방정식을 해결하는 알고리즘과 그 수렴 특성을 분석했습니다.",
            "topic_evidence": "We develop a distributed quantum network flow for solving linear equations from locally stored row data.",
            "points": [
              {
                "subtitle": "양자 네트워크 흐름 설계",
                "desc": "각 노드에서 로컬 제약 조건을 강제하는 펌핑과 이웃 노드 간의 스왑 상호작용을 결합한 흐름을 설계했습니다. 이 방식은 노드들의 상태가 전체적으로 일관된 해를 향해 수렴하도록 유도하는 역할을 합니다.",
                "evidence": "Local pumping enforces each node's equation constraint, while neighboring registers interact through swaps."
              },
              {
                "subtitle": "수렴 특성 및 최적화",
                "desc": "일관된 방정식의 경우 스왑 이득에 따라 수렴 속도가 결정되는데, 이는 그래프의 구조와 행 배치에 영향을 받습니다. 연구진은 이를 라플라시안 의사역행렬로 분석하여 주어진 스왑 속도 예산 내에서 최적의 성능을 내도록 설계할 수 있다고 주장했습니다.",
                "evidence": "Its leading finite-gain correction couples graph topology and row placement through the Laplacian pseudoinverse, enabling semidefinite optimization of edge rates under a fixed total swap-rate budget."
              },
              {
                "subtitle": "알고리즘 검증 및 비교",
                "desc": "가역 시스템에서는 기존의 HHL 알고리즘과 유사한 소산형 구조를 사용하여 해의 인코딩 방식과 수렴 속도를 비교했습니다. 연구진은 수치 예제를 통해 이러한 이론적 결과들이 실제로 잘 작동함을 입증했습니다.",
                "evidence": "Numerical examples are provided to validate the presented results."
              }
            ],
            "one_line": "분산형 양자 네트워크 흐름을 설계하여 선형 방정식의 해를 구하는 알고리즘을 개발했어요.",
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
          "canon_id": "2611.16806",
          "title": "FlatSeek: LLM-Driven Symbolic Discovery of Flat Outputs via Backward Data Generation",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16806"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 비선형 시스템에서 평탄 출력을 찾는 게 너무 어려웠어요",
            "easy1_desc": "비선형 시스템(입력과 출력이 비례하지 않는 복잡한 체계)을 제어할 때 평탄 출력(시스템 상태를 쉽게 제어하게 해주는 변수)을 찾으면 효율적인 계획과 제어가 가능해지거든요. 그런데 지금까지는 이를 찾아낼 일반적인 방법이나 학습에 쓸 데이터가 부족해서 연구자들이 직접 찾아내기가 매우 힘들었습니다. 쉽게 말하면, 시스템의 핵심을 꿰뚫는 변수를 찾는 과정 자체가 막막했다는 말이에요.",
            "easy1_evidence": "Differential flatness enables efficient planning and control, but discovering explicit flat outputs for general nonlinear systems remains difficult due to the lack of general methods and supervised data.",
            "easy2_title": "거꾸로 데이터를 만들고 거대언어모델을 학습시켜 해결했어요",
            "easy2_desc": "연구진은 평탄함의 정의를 거꾸로 뒤집어 시스템과 평탄 출력의 쌍을 만들어내는 FlatSeek라는 프레임워크를 제안했는데요. 이렇게 만든 데이터를 바탕으로 거대언어모델(LLM)을 미세 조정했더니, 처음 보는 시스템에서도 기호 형태의 평탄 출력 후보를 스스로 제안할 수 있게 된 겁니다. 기존의 기호 방식이나 학습되지 않은 모델보다 성공률이 높고, 기존 문헌에 없던 새로운 평탄 출력까지 찾아냈다는 점에서 의미가 있어요.",
            "easy2_evidence": "We propose FlatSeek, a framework combining backward data generation with task-specific large language model (LLM) training.",
            "topic": "거대언어모델을 활용해 비선형 시스템의 평탄 출력을 자동으로 찾아내는 새로운 방법론에 대한 연구입니다.",
            "topic_evidence": "We propose FlatSeek, a framework combining backward data generation with task-specific large language model (LLM) training.",
            "points": [
              {
                "subtitle": "역방향 데이터 생성",
                "desc": "평탄함의 정의를 역으로 활용하여 시스템과 그에 맞는 평탄 출력 쌍을 생성했습니다. 이는 학습에 필요한 데이터가 부족했던 문제를 해결하기 위한 핵심적인 단계라고 볼 수 있어요.",
                "evidence": "By reversing the defining reconstruction of flatness, we generate system-flat-output pairs with known certificates, then fine-tune an LLM to propose symbolic flat-output candidates for unseen dynamics."
              },
              {
                "subtitle": "LLM 기반의 기호 탐색",
                "desc": "생성된 데이터를 통해 거대언어모델을 미세 조정하여, 새로운 시스템이 주어졌을 때 그에 적합한 기호 형태의 평탄 출력을 제안하도록 만들었습니다. 모델이 기존의 방식보다 더 효과적으로 해답을 찾아낸다는 점이 특징이에요.",
                "evidence": "By reversing the defining reconstruction of flatness, we generate system-flat-output pairs with known certificates, then fine-tune an LLM to propose symbolic flat-output candidates for unseen dynamics."
              },
              {
                "subtitle": "성능 검증 및 새로운 발견",
                "desc": "기존의 기호 방식이나 학습되지 않은 모델과 비교했을 때, FlatSeek가 평탄 출력 탐색 성공률 면에서 더 뛰어난 성능을 보였다고 연구진은 주장했어요. 심지어 기존 문헌에는 보고되지 않았던 새로운 형태의 평탄 출력까지 발견해 냈거든요.",
                "evidence": "On literature and synthetic benchmarks, FlatSeek outperforms both the traditional symbolic methods and the untuned reference models in flat-output discovery success, and uncovers alternative symbolic flat outputs not reported in the literature."
              }
            ],
            "one_line": "LLM과 역방향 데이터 생성을 결합해 비선형 시스템의 평탄 출력을 찾았어요.",
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
          "canon_id": "2611.16796",
          "title": "Structure-Preserving Learning for Nonlinear Nonholonomic Dynamics",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16796"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "데이터 기반 모델이 물리 법칙을 무시하는 문제",
            "easy1_desc": "기계 시스템의 움직임을 데이터로 학습시킬 때, 비선형 비홀로노믹(nonholonomic) 제약 조건이 걸려 있으면 문제가 생기곤 합니다. 데이터만 보고 학습한 모델이 실제 물리적인 제약 조건을 지키지 못해서, 엉뚱한 예측을 내놓는 경우가 많거든요. 뭔 소리냐면, 수학적으로는 그럴듯해 보여도 실제 기계가 움직일 수 없는 경로를 결과로 내놓는다는 말이에요. 이런 불일치는 시스템의 신뢰도를 떨어뜨리는 원인이 됩니다.",
            "easy1_evidence": "Learning the dynamics of mechanical systems subject to nonlinear nonholonomic constraints is challenging, as data-driven models may violate the underlying physical constraints, leading to inconsistent predictions.",
            "easy2_title": "물리 구조를 학습 과정에 직접 심어서 해결했어요",
            "easy2_desc": "연구진은 라그랑주-달랑베르-체타예프(Lagrange-d'Alembert-Chetaev) 방정식을 활용해 제약 조건을 반드시 지키도록 하는 새로운 학습 틀을 만들었습니다. 가우시안 프로세스(Gaussian process)라는 학습 방식에 기하학적 구조를 직접 넣어서, 모델이 어떤 예측을 하더라도 가속도 제약 조건을 정확히 만족하게 만든 거예요. 덕분에 데이터에 오류가 섞여 있어도 물리적으로 타당한 결과만 내놓는다는 장점이 있습니다. 쉽게 말하면, 학습 모델이 물리 법칙이라는 울타리를 절대 벗어나지 못하게 설계한 셈이에요.",
            "easy2_evidence": "Embedding this geometric structure directly into a Gaussian process prior ensures that both prior and posterior dynamics satisfy the acceleration constraints exactly.",
            "topic": "비선형 비홀로노믹 제약이 있는 기계 시스템의 동역학을 물리적 구조를 보존하며 학습하는 방법론에 대한 연구입니다.",
            "topic_evidence": "To address this problem, we develop a constraint-preserving learning framework based on the Lagrange-d'Alembert-Chetaev equations and tangency to the constraint submanifold, which together define an affine space of admissible accelerations.",
            "points": [
              {
                "subtitle": "기하학적 제약 구조 설계",
                "desc": "운동 에너지 메트릭과 무어-펜로즈 의사역행렬(Moore-Penrose pseudoinverse)을 사용해 메트릭 프로젝터와 체타예프 보정 값을 구했습니다. 이를 통해 허용 가능한 가속도의 아핀 공간(affine space)을 정의하고, 물리적 제약 조건을 수학적으로 명확히 구현했습니다.",
                "evidence": "Using the kinetic-energy metric and the Moore-Penrose pseudoinverse, we construct a metric projector and the corresponding Chetaev correction."
              },
              {
                "subtitle": "가우시안 프로세스 기반 학습",
                "desc": "제안한 기하학적 구조를 가우시안 프로세스 사전 분포에 직접 포함시켰습니다. 이렇게 하면 학습 전후의 동역학 모델이 가속도 제약 조건을 완벽하게 준수하게 되며, 재생 커널 힐베르트 공간(RKHS) 내에서의 특성도 규명했습니다.",
                "evidence": "Embedding this geometric structure directly into a Gaussian process prior ensures that both prior and posterior dynamics satisfy the acceleration constraints exactly."
              },
              {
                "subtitle": "시스템 성능 검증",
                "desc": "최대 50개의 에이전트로 구성된 3차원 방향성 무리 이동 시스템에서 실험을 진행했습니다. 그 결과 제약 조건을 정확히 보존할 뿐만 아니라, 제약 조건과 맞지 않는 관측 데이터가 들어와도 모델이 안정적으로 작동함을 확인했습니다.",
                "evidence": "Numerical experiments on a three-dimensional directional flocking system with up to 50 agents demonstrate exact constraint preservation and robustness to constraint-incompatible observations."
              }
            ],
            "one_line": "물리적 제약 조건을 보존하는 기계 시스템 학습 프레임워크를 개발했어요.",
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
          "canon_id": "2611.16707",
          "title": "Velocity-Free Funnel Control of Euler-Lagrange Systems: An Artificial-Delay Approach",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16707"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "속도 측정 없이도 시스템을 제어하고 싶었어요",
            "easy1_desc": "기존의 깔때기 제어(Funnel control)는 오차가 정해진 범위를 벗어나지 않게 하려고 피드백 이득을 계속 키우는 방식을 썼는데요, 이 과정에서 정확한 제어를 위해 반드시 속도 측정값이 필요했다는 문제가 있었어요. 그런데 기계 시스템에서 속도 센서가 없거나 고장 나는 경우도 많거든요. 연구진은 속도 정보 없이 위치 정보만으로도 똑같이 오차를 범위 안에 가둘 수 있는지 확인해 보고 싶었던 겁니다.",
            "easy1_evidence": "Classical funnel control keeps the tracking error within a prescribed, time-varying envelope by increasing the feedback gain as the error approaches the boundary.",
            "easy2_title": "지연 시간을 활용해 속도 정보의 빈자리를 채웠어요",
            "easy2_desc": "연구진은 속도 값 대신 위치 오차를 일정 시간만큼 지연시켜 계산한 차분 몫을 사용했는데요, 이렇게 하면 시스템 모델이나 관측기 없이도 제어가 가능해진다는 장점이 있어요. 다만 지연된 신호를 쓰면 오차가 경계에 다다를 때 이득이 무한히 커지는 상황과 충돌할 수 있는데, 연구진은 지연 시간과 상관없이 이득의 상한선을 미리 계산해 이 문제를 해결했거든요. 결과적으로 속도 센서가 없어도 기존 방식만큼 정확하게 추적할 수 있고, 양자화된 위치 측정 환경에서는 토크도 훨씬 적게 든다는 게 확인됐습니다.",
            "easy2_evidence": "The proposed controller replaces the velocity error with a difference quotient of the position error over a fixed delay, while preserving the classical unbounded gain.",
            "topic": "오일러-라그랑주 시스템에서 속도 측정 없이 위치 정보만으로 깔때기 제어를 수행하는 인공 지연 기반 제어 기법을 제안했어요.",
            "topic_evidence": "We show that it can be retained for fully actuated Euler--Lagrange systems using only position measurements.",
            "points": [
              {
                "subtitle": "인공 지연 기반 제어 설계",
                "desc": "속도 측정값 대신 위치 오차를 고정된 시간만큼 지연시켜 얻은 차분 몫을 제어기에 적용했어요. 이 방식은 별도의 시스템 모델이나 관측기, 필터 상태를 요구하지 않아 구조가 단순하다는 특징이 있어요.",
                "evidence": "The proposed controller replaces the velocity error with a difference quotient of the position error over a fixed delay, while preserving the classical unbounded gain."
              },
              {
                "subtitle": "이득 상한선과 지연 임계값 도출",
                "desc": "지연된 피드백을 사용할 때 발생하는 이득의 무한 증가 문제를 해결하기 위해 폐루프 궤적 내에서 이득의 상한선을 미리 계산했어요. 이를 통해 시스템이 깔때기 범위 내에서 안정적으로 유지되는 지연 시간의 임계값을 찾아냈거든요.",
                "evidence": "We resolve this by establishing an a priori bound on the gain along closed-loop trajectories, independent of the delay."
              },
              {
                "subtitle": "제어 성능 및 효율성 검증",
                "desc": "시뮬레이션 결과, 속도 정보를 모두 사용하는 기존 방식과 대등한 추적 정확도를 보여줬어요. 특히 위치 측정값이 양자화된 상황에서는 기존의 미분 없는 제어기보다 토크 소모량이 훨씬 적다는 점이 확인됐습니다.",
                "evidence": "With quantized position measurements, the controller also requires substantially less torque than an existing derivative-free funnel controller."
              }
            ],
            "one_line": "지연된 위치 정보를 활용해 속도 센서 없이도 오일러-라그랑주 시스템을 제어했어요.",
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
          "canon_id": "2611.16537",
          "title": "Incremental Model Predictive Control for Reference Tracking of Nonlinear Anesthesia Dynamics",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16537"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "마취제 조절이 왜 어려운지 살펴봤더니",
            "easy1_desc": "마취제 반응은 선형적인 움직임 뒤에 비선형적인 출력이 붙는 위너 모델(Wiener models)로 설명되는데요, 이 비선형성 때문에 시스템이 안정적으로 유지되는지 이론적으로 보장하기가 까다롭다는 문제가 있습니다. 마취제는 제어할 때 지켜야 할 조건이 많아서 모델 예측 제어(MPC)를 주로 쓰는데, 기존 방식으로는 이런 복잡한 비선형 구조를 다루기가 쉽지 않았던 겁니다. 쉽게 말하면, 마취 깊이를 일정하게 유지하는 수학적 계산이 복잡해서 정확도가 떨어질 수 있다는 말이에요.",
            "easy1_evidence": "This nonlinear output complicates the derivation of theoretical guarantees on closed-loop stability and convergence.",
            "easy2_title": "계산 방식을 바꿔서 마취제 조절을 훨씬 정확하게 만들었어요",
            "easy2_desc": "그래서 연구진은 비선형 출력 구조를 활용해 제어 문제를 선형적인 틀 안에서 다시 풀 수 있도록 증분형 모델 예측 제어(Incremental MPC) 방식을 제안했는데요, 이 방식은 모델에 불확실성이 있어도 정확하지 않을 수 있는 정상 상태나 입력값을 직접 계산하지 않아도 된다는 장점이 있습니다. 1000명의 가상 환자를 대상으로 시뮬레이션을 해 봤더니, 기존 방식보다 목표치에 더 정확하게 도달하면서도 외부 방해 요인을 잘 걸러내는 결과를 보였거든요. 쉽게 말하면, 복잡한 계산 과정을 단순화해서 마취제 제어의 정확도를 높였다는 겁니다.",
            "easy2_evidence": "In this paper, we propose an incremental MPC formulation for tracking a desired reference.",
            "topic": "비선형적인 마취제 반응을 효과적으로 제어하기 위해 증분형 모델 예측 제어(Incremental MPC)를 설계하고 그 성능을 검증했어요.",
            "topic_evidence": "In this paper, we propose an incremental MPC formulation for tracking a desired reference.",
            "points": [
              {
                "subtitle": "비선형성 극복을 위한 재구성",
                "desc": "마취제 반응의 비선형 출력 구조를 활용해서 제어 문제를 선형적인 틀로 재구성했습니다. 이렇게 하면 기존의 복잡한 비선형성 문제를 다루기가 훨씬 수월해진다는 거예요.",
                "evidence": "The proposed approach exploits the structure of the nonlinear output equation to reformulate the control problem within a linear framework."
              },
              {
                "subtitle": "증분형 모델을 통한 계산 효율화",
                "desc": "정상 상태나 입력값을 직접 계산하지 않는 증분형 모델을 사용했는데요, 모델 자체에 불확실성이 있더라도 계산 오류를 줄일 수 있다는 장점이 있습니다.",
                "evidence": "An incremental model is then employed to avoid the explicit computation of steady states and inputs, which may be inaccurate in the presence of model uncertainties."
              },
              {
                "subtitle": "시뮬레이션을 통한 성능 검증",
                "desc": "1000명의 가상 환자를 대상으로 기존의 모델 예측 제어 방식과 비교해 봤습니다. 그 결과, 목표치를 더 잘 따라가면서도 외부 방해를 효과적으로 차단하는 성능을 확인했습니다.",
                "evidence": "Results show improved steady-state reference tracking while maintaining satisfactory disturbance rejection."
              }
            ],
            "one_line": "증분형 모델 예측 제어로 마취제 제어의 정확도를 높였어요.",
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
          "canon_id": "2611.16524",
          "title": "A Joint LLM and Optimization Agent Solution for Drone Scheduling in Victim Search Missions",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16524"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "드론으로 사람을 찾을 때 상황이 계속 바뀌어서 어려웠거든요",
            "easy1_desc": "야생에서 조난자를 찾는 일은 시간이 정말 중요한데, 드론을 띄워 수색하려니 문제가 좀 있었어요. 조난자가 계속 움직이기도 하고, 드론이 사람을 제대로 찾았는지 결과도 불확실하거든요. 게다가 임무 정보와 현장 상황 같은 비정형 데이터를 한꺼번에 고려해서 결정을 내려야 하니 드론을 효율적으로 배치하기가 까다로웠다는 말이에요.",
            "easy1_evidence": "Drones enable rapid area search, but scheduling them is challenging because victims may continue moving, detection results are uncertain, and effective decisions must combine structured mission information with unstructured contextual clues and domain knowledge.",
            "easy2_title": "거대언어모델과 최적화 도구를 합쳐서 똑똑하게 드론을 배치했어요",
            "easy2_desc": "그래서 연구진은 지상 통제소에서 드론 여러 대를 조율하는 에이전트 시스템을 만들었는데요, 거대언어모델(LLM)이 어디를 수색할지 추론하고 최적화 도구가 드론의 에너지 제한 안에서 경로를 짜는 방식을 썼어요. 이렇게 했더니 기존의 LLM을 쓰지 않는 방식들은 임무를 완수하지 못했는데, 이 시스템은 계속해서 임무를 성공시켰다는 거예요. LLM만 단독으로 쓸 때보다 훨씬 믿을 만한 결과가 나왔다는 점이 핵심입니다.",
            "easy2_evidence": "In each cycle, the agent applies a scheduling policy that combines a large language model (LLM) for reasoning about where to search with an optimizer for determining how to dispatch the drones under energy constraints.",
            "topic": "조난자 수색 임무를 위해 거대언어모델과 최적화 알고리즘을 결합한 드론 스케줄링 시스템을 제안했어요.",
            "topic_evidence": "To address this, we propose an agent-aided drone scheduling system.",
            "points": [
              {
                "subtitle": "에이전트 기반 수색 시스템",
                "desc": "지상 통제소에 에이전트를 배치해서 여러 대의 드론을 연속적인 수색 주기에 맞춰 조율하도록 설계했어요. 뭔 소리냐면, 드론이 각 단계마다 효율적으로 움직이게끔 중앙에서 관리한다는 말이에요.",
                "evidence": "The system employs an agent at the ground control station (GCS) to coordinate multiple drones over successive search cycles."
              },
              {
                "subtitle": "LLM과 최적화의 결합",
                "desc": "거대언어모델이 수색 구역을 추론하고, 최적화 도구가 드론의 배터리 같은 에너지 제약을 고려해 실제 경로를 결정하게 했어요. 두 기술의 장점을 합쳐서 상황 판단과 실행력을 동시에 높인 셈이에요.",
                "evidence": "In each cycle, the agent applies a scheduling policy that combines a large language model (LLM) for reasoning about where to search with an optimizer for determining how to dispatch the drones under energy constraints."
              },
              {
                "subtitle": "수색 성능 검증",
                "desc": "시뮬레이션 결과, 제안한 시스템은 모든 수색 임무를 완수했다고 밝혔는데요, LLM을 쓰지 않는 6가지 비교 대상들은 임무를 하나도 성공하지 못했고 LLM만 쓴 방식은 신뢰도가 낮았다는 겁니다.",
                "evidence": "Simulation results show that the proposed system consistently completes the victim-search mission, whereas none of the six non-LLM baselines does so and direct LLM scheduling is considerably less reliable."
              }
            ],
            "one_line": "거대언어모델과 최적화 도구를 결합해 드론 수색 시스템을 개발했어요.",
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
          "canon_id": "2611.16389",
          "title": "On Energy-Based Modelling for Fluidic Excitable Neurons",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16389"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "공기압 장치를 신경세포처럼 다루기가 어려웠어요",
            "easy1_desc": "소프트 로봇 분야에서 공기압을 이용한 흥분성 장치를 활용하려는 시도가 늘고 있는데요, 기존의 신경세포 모델인 호지킨-헉슬리(Hodgkin-Huxley) 방식을 그대로 가져와 쓰기에는 공기압이라는 물리적 특성과 잘 맞지 않는 문제가 있었거든요. 그래서 연구진은 이 장치들을 어떻게 모델링할지 고민해 왔다는 말이에요. 쉽게 말하면, 생물학적 신경세포의 원리를 공기압 장치에 적용할 수 있는 공통된 언어가 부족했던 셈이에요.",
            "easy1_evidence": "Motivated by the potential of pneumatic excitable devices in soft robotics, this paper develops an energy-based, domain-agnostic equivalent of the Hodgkin-Huxley modelling framework using bond graph theory.",
            "easy2_title": "에너지 기반 모델로 공기압 신경세포를 설계했어요",
            "easy2_desc": "연구진은 본드 그래프(bond graph) 이론을 활용해서 에너지 관점에서 신경세포를 설명하는 새로운 모델을 만들었는데요, 이 모델을 사용하면 공기압 장치를 신경세포처럼 동작하게 설계할 수 있게 됩니다. 실제로 이 방식을 써서 리듬감 있는 움직임을 만드는 핵심 부품인 반중추 발진기(half-center oscillator)를 설계해 봤거든요. 결과적으로 공기압 장치를 신경세포처럼 제어할 수 있는 구체적인 설계 가이드라인을 마련했다는 겁니다.",
            "easy2_evidence": "The proposed model is used to guide the design of a pneumatic excitable neuron.",
            "topic": "본드 그래프 이론을 활용해 공기압 흥분성 장치를 신경세포처럼 모델링하고 이를 반중추 발진기 설계에 적용한 연구예요.",
            "topic_evidence": "Motivated by the potential of pneumatic excitable devices in soft robotics, this paper develops an energy-based, domain-agnostic equivalent of the Hodgkin-Huxley modelling framework using bond graph theory.",
            "points": [
              {
                "subtitle": "에너지 기반 모델링 개발",
                "desc": "연구진은 본드 그래프 이론을 도입해 호지킨-헉슬리 모델을 에너지 기반의 영역 독립적 형태로 재구성했습니다. 이는 물리적 장치의 에너지 흐름을 신경세포의 흥분성 모델과 연결하려는 시도라는 말이에요.",
                "evidence": "Motivated by the potential of pneumatic excitable devices in soft robotics, this paper develops an energy-based, domain-agnostic equivalent of the Hodgkin-Huxley modelling framework using bond graph theory."
              },
              {
                "subtitle": "공기압 신경세포 설계 가이드",
                "desc": "개발한 모델을 활용해 실제 공기압 기반의 신경세포를 어떻게 설계할지 구체적인 방향을 제시했습니다. 모델이 장치의 동작을 예측하게 함으로써 설계의 효율성을 높였다는 겁니다.",
                "evidence": "The proposed model is used to guide the design of a pneumatic excitable neuron."
              },
              {
                "subtitle": "반중추 발진기 구현",
                "desc": "신경세포의 리듬감 있는 행동을 구현하기 위한 핵심 요소인 반중추 발진기를 설계하여 제안한 접근 방식의 가능성을 입증했습니다. 이는 소프트 로봇의 제어 능력을 향상하는 데 기여할 것으로 보입니다.",
                "evidence": "The potential of this approach is illustrated through the design of a pneumatic half-center oscillator, an essential building block for rhythmic neuromorphic behaviours."
              }
            ],
            "one_line": "본드 그래프 이론으로 공기압 신경세포 모델을 개발하고 발진기를 설계했어요.",
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
            "flags": [
              "예측 의심: 이는 소프트 로봇의 제어 능력을 향상하는 데 기여할 것으로 보입니다."
            ],
            "tag": "제어·로봇",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.16222",
          "title": "GridForge: A Tractable Network-Flow Method for Constructing Open, Continental-Scale Synthetic Power Grids",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16222"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "실제 전력망 데이터는 보안 때문에 구하기가 너무 어려워요",
            "easy1_desc": "전력망 연구를 하려면 실제 전력망 모델이 필요한데, 보안 문제로 인해 공개된 데이터를 찾기가 매우 어렵거든요. 그렇다고 연구자가 직접 대규모 전력망을 만들자니, 연결 가능한 후보 선로가 기하급수적으로 늘어나서 계산이 너무 복잡해진다는 문제가 있어요. 그래서 기존 방식들은 계산을 쉽게 하려고 후보 선로를 미리 잘라내고 시작하는 경우가 많다는 겁니다.",
            "easy1_evidence": "Security restrictions keep models of the real grid out of open research and machine-learning datasets, and optimization-based construction is hard at scale: the number of candidate lines grows combinatorially, so electrically faithful methods prune the candidates in advance.",
            "easy2_title": "복잡한 계산 없이도 대규모 가상 전력망을 뚝딱 만들어 봤어요",
            "easy2_desc": "연구진은 그리드포지(GridForge)라는 새로운 방식을 제안했는데요, 모든 버스 쌍을 후보로 두면서도 가버(Garver)의 네트워크 흐름 선형 계획법을 써서 계산 복잡도를 낮췄어요. 그 뒤에 직류(DC) 전력 흐름 방식으로 선로 크기를 조정했더니, 실제 전력망과 유사한 특성을 가진 대규모 네트워크를 만들 수 있었다는 거예요. 결과적으로 전력 손실도 크게 줄어들었는데, 이 모델들은 누구나 자유롭게 가져다 쓸 수 있다는 장점이 있어요.",
            "easy2_evidence": "This paper presents GridForge, which keeps every bus pair within physical length limits as a candidate, selects lines with Garver's length-weighted network-flow linear program instead of binary decisions, and resizes them with a sequential direct-current (DC) power flow.",
            "topic": "대규모 가상 전력망을 효율적으로 구축하기 위해 네트워크 흐름 최적화 기법을 활용한 그리드포지(GridForge)를 제안했어요.",
            "topic_evidence": "The goal of this paper is to construct open, continental-scale synthetic transmission grids with an optimization method that stays tractable.",
            "points": [
              {
                "subtitle": "그리드포지(GridForge)의 구축 방식",
                "desc": "모든 버스 쌍을 후보로 유지하면서 이진 결정 대신 네트워크 흐름 선형 계획법을 적용해 계산 효율성을 높였어요. 이후 순차적인 직류 전력 흐름을 통해 선로 크기를 최적화하는 과정을 거쳤다는 겁니다.",
                "evidence": "This paper presents GridForge, which keeps every bus pair within physical length limits as a candidate, selects lines with Garver's length-weighted network-flow linear program instead of binary decisions, and resizes them with a sequential direct-current (DC) power flow."
              },
              {
                "subtitle": "실제 전력망과의 유사성 검증",
                "desc": "미국 동부와 서부 전력망과 비교해 봤더니, 노드 차수 분포가 실제 전력망과 거의 유사한 로그 선형성을 보였어요. 결정 계수(R²)가 0.92에서 0.98 사이로 나타나 실제 전력망의 0.971, 0.981과 매우 흡사한 수준이었다는 거예요.",
                "evidence": "Their node-degree distributions are nearly as strongly log-linear as those of the real Eastern and Western Interconnections ($R^2$ of 0.92 to 0.98 against 0.971 and 0.981), although the areas under the fitted lines differ from the real ones by 39.9% on average."
              },
              {
                "subtitle": "전력 손실 감소 및 성능 결과",
                "desc": "중서부와 테네시 계곡 지역 모델에서 크기 조정을 거친 결과, 직류 전력 흐름 손실이 각각 5.89%에서 4.14%, 14.55%에서 7.05%로 줄어들었어요. 최적 전력 흐름 손실 또한 눈에 띄게 감소했는데, 이는 제안한 방식이 효율적인 전력망 구성에 효과적임을 보여준다는 겁니다.",
                "evidence": "On the upper Midwest and Tennessee Valley footprints, resizing lowers the DC power-flow loss from 5.89% to 4.14% and from 14.55% to 7.05%, and the DC optimal power-flow loss from 4.03% to 2.02% and from 5.54% to 2.47%."
              }
            ],
            "one_line": "네트워크 흐름 최적화 기법으로 대규모 가상 전력망을 구축했어요.",
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
          "canon_id": "2611.15953",
          "title": "Cooperative Learning of Shared Latent Dynamics for Distributed Online Optimization",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15953"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "에이전트들이 모여서 숨은 규칙을 같이 찾지 못하던 문제가 있었는데요",
            "easy1_desc": "네트워크로 연결된 여러 에이전트들이 각자의 비용을 줄이는 결정을 해야 하는데요, 문제는 그 비용 속에 직접 재기 힘든 확률적 변수들이 숨어 있고 게다가 그 변수들이 에이전트들끼리 공유하지만 아직 모르는 선형 규칙으로 계속 움직인다는 점이에요. 에이전트들은 잡음이 섞인 기울기 측정값을 겨우 몇 개만 받아 가면서 움직이는 최솟값을 계속 쫓아가야 하는 상황이었거든요. 쉽게 말하면, 각자 안개 속을 걷는 것처럼 정확한 규칙을 모른 채로 흩어져서 최적의 자리를 찾아야만 했다는 말이에요.",
            "easy1_evidence": "We study networked agents that must agree on a decision minimizing the sum of their local costs, where each cost contains unmeasurable stochastic parameters that evolve with linear but unknown dynamics shared by all agents.",
            "easy2_title": "기울기 창으로 변수를 복원하고 힘을 합쳐 학습했더니 에이전트가 늘수록 오차가 줄어든다는 걸 확인했어요",
            "easy2_desc": "그래서 연구진은 기울기 창을 모아서 숨은 파라미터를 복원하고, 네트워크 전체에서 도구 변수 모멘트 행렬을 서로 평균 내어 공통 규칙을 협력해서 학습하는 방식을 가져왔는데요, 예측된 기울기로 기울기 추적을 하며 최솟값을 쫓아가도록 설계했어요. 모든 에이전트의 학습 오차와 추적 오차에 대한 상한선을 구했더니, 에이전트 숫자가 늘어날수록 학습 오차가 줄어들고 그 덕분에 추적 오차까지 함께 줄어든다는 것을 보여줬답니다. 두 가지 사례 연구로 이 방식을 직접 증명해 보이기도 했는데요, 여럿이 모여 정보를 나눌수록 성능이 좋아지는 장점이 있는 반면 네트워크 통신 과정이 꼭 필요하다는 점도 같이 따라온다는 겁니다.",
            "easy2_evidence": "Our scheme reconstructs the parameters from windows of gradients, learns the shared dynamics cooperatively by averaging instrumental-variable moment matrices over the network, and tracks the minimizer by gradient tracking on forecast gradients.",
            "topic": "모르는 공통 변수가 얽힌 분산 온라인 최적화 문제에서, 네트워크 에이전트들이 협력적 학습으로 오차를 줄이고 최솟값을 추적하는 방식을 다룬 연구예요.",
            "topic_evidence": "We study networked agents that must agree on a decision minimizing the sum of their local costs, where each cost contains unmeasurable stochastic parameters that evolve with linear but unknown dynamics shared by all agents.",
            "points": [
              {
                "subtitle": "숨은 파라미터 복원과 협력 학습 방식",
                "desc": "에이전트들이 기울기 측정값 창을 써서 숨은 파라미터를 다시 만들어내고, 도구 변수 모멘트 행렬을 네트워크 전체에서 평균 내는 방식으로 공통 동역학을 함께 학습하는데요. 뭔 소리냐면, 혼자서는 알기 힘든 숨은 규칙을 이웃들과 정보를 섞어가며 채워간다는 말이에요.",
                "evidence": "Our scheme reconstructs the parameters from windows of gradients, learns the shared dynamics cooperatively by averaging instrumental-variable moment matrices over the network, and tracks the minimizer by gradient tracking on forecast gradients."
              },
              {
                "subtitle": "예측 기울기를 이용한 최솟값 추적",
                "desc": "앞서 학습한 공통 규칙과 예측된 기울기를 바탕으로 기울기 추적을 수행해서 움직이는 최솟값을 계속 따라가도록 만들었는데요. 이 과정을 거치면 시시각각 변하는 환경 속에서도 최적의 결정을 놓치지 않고 붙잡을 수 있게 된다는 겁니다.",
                "evidence": "Our scheme reconstructs the parameters from windows of gradients, learns the shared dynamics cooperatively by averaging instrumental-variable moment matrices over the network, and tracks the minimizer by gradient tracking on forecast gradients."
              },
              {
                "subtitle": "에이전트 수 증가에 따른 오차 감소 증명",
                "desc": "모든 에이전트가 학습하고 추적할 때 생기는 오차의 상한선을 수식으로 묶어 밝혔는데요, 연구진은 에이전트의 숫자가 많아질수록 학습 오차가 줄어들고 결과적으로 추적 오차까지 함께 줄어든다는 점을 두 가지 사례 연구로 보여줬어요. 쉽게 말하면, 같이 움직이는 동료가 늘어날수록 전체적인 정확도가 높아진다는 셈이에요.",
                "evidence": "We bound the error of every agent in learning the dynamics and in tracking the minimizer, and show that the learning error, and through it the tracking error, decreases with the number of agents."
              }
            ],
            "one_line": "네트워크 에이전트들의 협력적 학습으로 분산 최적화 오차를 줄였다.",
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
            "format": [
              "easy2_title 한 줄 아님/너무 김(56자)"
            ],
            "flags": [],
            "tag": "제어·로봇",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.15934",
          "title": "Model Predictive Control on Analogue Hardware: A Dual-flow Approach",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15934"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "디지털 제어 방식은 너무 느리고 복잡하다는 문제가 있었어요",
            "easy1_desc": "현재 모델 예측 제어(MPC)는 대부분 디지털 방식으로 구현되는데요, 정밀하고 유연하다는 장점은 있지만 초저지연 성능이 필요한 곳에서는 한계가 있다는 거예요. 특히 안전이 중요한 분야에서는 하드웨어 인증 문제까지 겹치면서 사용하기가 까다롭거든요. 쉽게 말하면, 디지털 방식은 너무 느려서 실시간으로 빠르게 반응해야 하는 시스템에는 적합하지 않다는 말이에요.",
            "easy1_evidence": "Current Model Predictive Control (MPC) implementations are predominantly digital and, despite offering high precision and flexibility, often face challenges with ultra-low latency and hardware certification for safety-critical applications.",
            "easy2_title": "아날로그 하드웨어에서 직접 계산하는 새로운 방식을 제안했어요",
            "easy2_desc": "연구진은 신경 상미분 방정식(Neural ODE)을 활용해 이중 공간(Dual space)에서 최적화 문제를 푸는 새로운 방식을 제시했는데요, 이 방식은 아날로그 하드웨어에서 직접 작동하는 이중 흐름(Dual-flow) 역학을 사용해요. 계산된 평형점을 비선형 변환을 통해 원래의 주 공간(Primal space)으로 되돌려 해를 구하는 방식인데, 이를 통해 기존보다 훨씬 빠르게 제어 문제를 해결할 수 있게 된 겁니다. 선형 시스템뿐만 아니라 비선형 MPC까지 적용 범위를 넓혔다는 점도 큰 특징이에요.",
            "easy2_evidence": "We present an approach for solving the Quadratic Program (QP) of MPC using a continuous-time neural ordinary differential equation in the dual space.",
            "topic": "아날로그 하드웨어에서 모델 예측 제어(MPC)를 수행하기 위한 이중 흐름 기반의 최적화 접근법을 다루고 있어요.",
            "topic_evidence": "We present an approach for solving the Quadratic Program (QP) of MPC using a continuous-time neural ordinary differential equation in the dual space.",
            "points": [
              {
                "subtitle": "이중 공간 최적화",
                "desc": "이차 계획법(QP) 문제를 풀기 위해 신경 상미분 방정식을 이중 공간에서 활용했는데요, 이 방정식의 평형점을 찾아 비선형 변환을 거치면 원래 문제의 해를 얻을 수 있다는 거예요.",
                "evidence": "We obtain the solution to these QPs by mapping the differential equation's equilibrium point back to the primal space via a nonlinear transformation."
              },
              {
                "subtitle": "아날로그 하드웨어 구현",
                "desc": "제안한 이중 흐름 역학은 아날로그 하드웨어에서 직접 작동하도록 설계되었거든요. 연구진은 'The Analog Thing'이라는 아날로그 컴퓨터를 사용해 선형 MPC를 실제로 구현하며 이 방식이 잘 작동함을 입증했어요.",
                "evidence": "We validate this approach by demonstrating the hardware implementation of linear MPC on \"The Analog Thing\" analogue computer."
              },
              {
                "subtitle": "비선형 시스템으로 확장",
                "desc": "선형 시스템에만 머물지 않고 연속적인 선형화(Successive linearisation) 기법을 도입해 비선형 MPC까지 범위를 넓혔는데요, 이를 통해 더 다양한 복잡한 시스템에도 이 방식을 적용할 수 있게 됐다는 겁니다.",
                "evidence": "Finally, we extend the framework to nonlinear MPC with successive linearisation, broadening the applicability beyond linear systems."
              }
            ],
            "one_line": "아날로그 하드웨어에서 작동하는 이중 흐름 기반의 모델 예측 제어 방식을 개발했어요.",
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
          "canon_id": "2611.15923",
          "title": "Reinforcement Learning for Target Jerk Estimation in Interceptor Homing Phase",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15923"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "요격 미사일이 목표물의 급격한 움직임을 예측하기 어려웠던 문제",
            "easy1_desc": "요격 미사일이 고고도에서 빠르게 움직이는 목표물을 정확히 맞추려면 목표물의 가속도가 어떻게 변하는지 알아야 하는데요, 기존 방식인 칼만 필터(UKF)나 다중 모델(IMM) 필터는 목표물의 움직임을 미리 정해진 규칙으로만 추측하다 보니 복잡한 기동에 대응하기가 어려웠던 겁니다. 쉽게 말하면, 목표물이 갑자기 방향을 틀 때 미사일이 그 변화를 따라가지 못해 명중률이 떨어지는 문제가 있었다는 말이에요.",
            "easy1_evidence": "As benchmarks, we tuned both a standard UKF and an interacting multiple model (IMM) filter, where the IMM uses a different constant jerk assumption for each model.",
            "easy2_title": "강화 학습을 써서 목표물의 움직임을 더 똑똑하게 추측하도록 바꿨어요",
            "easy2_desc": "연구진은 강화 메타 학습(meta-RL)을 활용해 목표물의 가속도 변화율인 저크(jerk)를 추정하는 정책을 만들었는데요, 이 정책을 기존 칼만 필터에 결합했더니 미사일이 목표물의 움직임을 훨씬 더 잘 예측하게 된 겁니다. 실제로 6자유도 시뮬레이션에서 테스트해 보니 목표물을 맞추는 비율이 크게 높아졌거든요. 처음 보는 새로운 기동을 하는 목표물에도 잘 대응하는 걸 보면, 학습한 내용을 새로운 상황에도 잘 적용한다는 장점이 있는 셈이에요.",
            "easy2_evidence": "The augmented UKF demonstrates significant improvement in target interception rate, with more challenging maneuvers giving the largest performance differential.",
            "topic": "강화 메타 학습을 이용해 요격 미사일의 목표물 추적 성능을 높이는 방법이에요.",
            "topic_evidence": "We demonstrate the use of reinforcement meta-learning (meta-RL) to optimize a target jerk estimation policy, which is then used as the target acceleration rate of change in the propagation model of an unscented Kalman filter (UKF).",
            "points": [
              {
                "subtitle": "강화 메타 학습 기반 정책 설계",
                "desc": "연구진은 고고도에서 요격 미사일이 목표물을 맞추는 상황을 시뮬레이션하며 강화 메타 학습으로 목표물의 저크를 추정하는 정책을 학습시켰습니다. 이 정책은 목표물의 가속도 변화를 더 정밀하게 파악하도록 설계된 거예요.",
                "evidence": "The policy is learned through simulated engagements of a terminal phase high-altitude endoatmospheric interception of a highly maneuverable target, with a hit-to-kill accuracy requirement."
              },
              {
                "subtitle": "성능 비교 및 검증",
                "desc": "기존의 칼만 필터와 다중 모델 필터를 벤치마크로 삼아 6자유도 시뮬레이션 환경에서 성능을 비교해 봤는데요, 연구진은 제안한 방식이 목표물 요격률을 크게 높였다고 주장했습니다. 특히 목표물이 복잡하게 움직일수록 성능 차이가 더 뚜렷하게 나타났다는 겁니다.",
                "evidence": "The benchmarks and the proposed augmented UKF with the target jerk policy are tested in a 6-DOF simulation environment, which has sufficient fidelity to capture most factors relevant to guidance, navigation, and flight control."
              },
              {
                "subtitle": "일반화 성능 확인",
                "desc": "학습 과정에서 보지 못했던 새로운 기동이나 초기 상태의 불확실성이 큰 상황에서도 이 정책이 잘 작동하는지 확인해 봤는데요, 결과적으로 강화 메타 학습 정책이 새로운 조건에서도 충분히 잘 일반화된다는 점을 확인했다는 거예요.",
                "evidence": "The meta-RL jerk policy is then tested on an expanded engagement scenario, with increased initial state estimate uncertainty and novel target maneuvers, demonstrating that the meta-RL policy generalizes well to conditions not seen during optimization."
              }
            ],
            "one_line": "강화 학습으로 요격 미사일의 목표물 추적 정책을 최적화했어요.",
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
          "canon_id": "2611.15787",
          "title": "Quasi-Static Fault-Tolerant Feedback Control of a Quadrotor Carrying a Slung Payload under Rotor Failure",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15787"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "드론 날개 하나가 고장 나도 짐을 옮길 수 있을까",
            "easy1_desc": "쿼드콥터(날개 4개 달린 드론)가 짐을 매달고 가다가 날개 하나가 완전히 멈추는 상황을 가정해 봤는데요, 보통은 이걸 외부 충격으로 보고 막으려 하지만 이번에는 아예 고장 난 상태를 기준으로 제어 방식을 새로 짰다는 거예요. 뭔 소리냐면, 고장 난 상태에서도 드론이 짐을 안정적으로 옮길 수 있도록 수학적인 모델을 다시 설계했다는 말이에요. 고장 난 상황을 피하는 게 아니라, 그 상태를 받아들이고 움직이게 만든 셈이에요.",
            "easy1_evidence": "We propose a fault-tolerant control (FTC) design for the case of a complete single-rotor failure, i.e., only three functioning propellers.",
            "easy2_title": "시간에 쫓기지 않고 경로를 따라가는 제어법을 만들었어요",
            "easy2_desc": "기존에는 정해진 시간에 맞춰 위치를 찍어야 했다면, 이번에는 짐의 위치가 공간상의 경로에 잘 붙어 따라가도록 만드는 데 집중했는데요, 이렇게 하면 드론이 경로 위를 움직이는 동안에도 짐의 위치가 안정적으로 유지된다는 장점이 있어요. 고장 난 상황에서도 드론의 몸체 회전 속도가 일정하게 유지되도록 설계했거든요. 쉽게 말하면, 시간에 구애받지 않고 경로를 따라가면서도 짐을 안전하게 옮길 수 있게 된 겁니다.",
            "easy2_evidence": "The controller achieves local exponential convergence of the payload position to a geometric path in space, rather than tracking a timed reference trajectory.",
            "topic": "날개 하나가 고장 난 쿼드콥터가 매달린 짐을 안정적으로 운송하기 위한 비선형 제어 법칙을 제안했어요.",
            "topic_evidence": "This paper presents a nonlinear control law for a slung payload system (SPS) consisting of a quadrotor unmanned aerial vehicle (UAV) carrying a slung payload.",
            "points": [
              {
                "subtitle": "고장 상태를 반영한 제어 설계",
                "desc": "날개 3개만 남은 고장 상황을 외부 방해 요소로 처리하지 않고, 고장 난 시스템 자체를 제어 가능한 형태로 모델링해서 직접적인 피드백 법칙을 설계했어요. 뭔 소리냐면, 고장 난 역학 관계를 수식으로 풀어내어 그 상태에 맞는 제어기를 만들었다는 말이에요.",
                "evidence": "Rather, we model the faulty SPS in control-affine form and design a quasi-static feedback law directly for the faulty dynamics."
              },
              {
                "subtitle": "경로 추종과 제어 불변성",
                "desc": "짐의 위치가 공간상의 경로로 수렴하도록 만들고, 경로를 따라가는 상태가 유지되도록 제어 불변성을 확보했어요. 덕분에 드론은 경로 위에서 자유롭게 움직이면서도 짐의 위치를 경로상에 안정적으로 붙잡아 둘 수 있게 된 겁니다.",
                "evidence": "Moreover, the transverse dynamics are exponentially stable, and the path-following manifold is rendered controlled invariant by feedback."
              },
              {
                "subtitle": "시뮬레이션을 통한 검증",
                "desc": "제안한 제어 방식이 실제로 작동하는지 확인하기 위해 좌표계를 활용한 모델로 수치 시뮬레이션을 진행했어요. 연구진은 이를 통해 고장 난 상황에서도 드론이 안정적으로 짐을 옮길 수 있음을 보여줬다고 밝혔습니다.",
                "evidence": "To validate the control design, numerical simulations apply the controller derived from the faulty SPS model in coordinates to the coordinate-free SPS model."
              }
            ],
            "one_line": "날개 하나가 고장 난 드론이 짐을 옮길 수 있도록 새로운 제어 법칙을 만들었어요.",
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
            "bad_numbers": [
              "4"
            ],
            "format": [],
            "flags": [],
            "tag": "제어·로봇",
            "limit_ok": null,
            "show_limit": false
          }
        },
        {
          "canon_id": "2611.15776",
          "title": "Robust Safe Control Under Uncertainty: Estimation, Contraction, and Regret Bounds",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15776"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "불확실한 상황에서 안전을 지키려니 성능이 떨어지는 문제",
            "easy1_desc": "시스템을 제어할 때 외부 방해 요소가 있으면 안전을 보장하기 위해 제어 장치인 제어 장벽 함수(CBF)에 여유 공간을 둬야 하는데요, 이 여유 공간 때문에 원래 의도했던 제어 입력값이 바뀌면서 전체적인 시스템 성능이 낮아지는 문제가 생깁니다. 뭔 소리냐면, 안전을 챙기려다 보니 정작 시스템이 원래 하려던 동작을 제대로 못 하게 된다는 말이에요. 이런 성능 저하를 피하면서도 안전을 지키는 게 이번 연구의 핵심 과제인 셈입니다.",
            "easy1_evidence": "Disturbance uncertainty requires safety filters based on control barrier functions (CBFs) to leave a robustness margin, which can alter the nominal control input and degrade closed-loop performance.",
            "easy2_title": "방해 요소를 관찰하고 안전 조건을 새로 설계해 성능 손실을 줄였어요",
            "easy2_desc": "연구진은 방해 요소를 관찰하는 장치를 만들고 두 가지 안전 조건을 설계했는데요, 첫 번째는 추정 오차의 시간에 따른 범위를 활용하고, 두 번째는 방해 요소의 변화가 일정할 때 고정된 여유 공간을 사용하는 방식입니다. 이렇게 하면 방해 요소가 있더라도 시스템이 안전하게 움직이면서도 성능 손실을 줄일 수 있다는 거예요. 쉽게 말하면, 방해 요소를 더 똑똑하게 파악해서 안전과 성능 사이의 균형을 맞췄다는 말입니다.",
            "easy2_evidence": "We develop a causal disturbance observer and construct two robust barrier conditions.",
            "topic": "불확실한 환경에서 비선형 시스템의 안전 제어를 위해 방해 요소 관찰기와 제어 장벽 함수를 결합하여 성능 손실을 분석하고 제어 성능을 보장하는 방법을 다룹니다.",
            "topic_evidence": "This paper studies safety and the resulting performance loss for discrete-time nonlinear systems with additive disturbances and polytopic input constraints.",
            "points": [
              {
                "subtitle": "방해 요소 관찰기와 안전 조건 설계",
                "desc": "방해 요소를 실시간으로 파악하는 관찰기를 개발하고, 이를 바탕으로 두 가지 강건한 안전 조건을 제시했습니다. 첫 번째는 추정 오차를 시간에 따라 조절하고, 두 번째는 초기 오차 조건을 명확히 하여 안전을 보장하는 방식이에요. 뭔 소리냐면, 상황에 맞춰 안전을 지키는 기준을 유연하게 바꿨다는 말입니다.",
                "evidence": "We develop a causal disturbance observer and construct two robust barrier conditions."
              },
              {
                "subtitle": "성능 손실 분석 및 수렴 조건 도출",
                "desc": "이상적인 제어기인 오라클 필터와 비교하여 입력값이 얼마나 달라지는지 그 범위를 계산했습니다. 또한 시스템이 안정적으로 수렴하기 위한 충분 조건을 유도했는데요, 여기에는 상태에 따른 동작이나 예상치 못한 방해 요소, 입력 제한까지 모두 고려했습니다.",
                "evidence": "We bound their input deviations from an oracle filter with access to the current disturbance and derive sufficient conditions for uniform contraction of the oracle closed loop."
              },
              {
                "subtitle": "동적 후회 한계치 산출",
                "desc": "관찰기의 수렴 속도와 방해 요소의 변화, 그리고 안전을 위한 여유 공간이 시스템 성능에 미치는 영향을 정량화했습니다. 이를 통해 유한한 시간 동안 발생하는 성능 손실인 동적 후회 한계치를 도출했는데요, 방해 요소 변화가 일정 수준 이하로 유지되면 성능 손실도 제한적임을 확인했습니다.",
                "evidence": "Combining the sensitivity and contraction estimates gives finite-time dynamic regret bounds that quantify the effects of observer convergence, disturbance variation, and robustness margins."
              }
            ],
            "one_line": "방해 요소가 있는 시스템의 안전 제어 성능 손실을 분석하고 이를 개선할 방법을 제시했어요.",
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
          "canon_id": "2611.15690",
          "title": "Transversal Passivity and Equilibrium Forces in Formation Control",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15690"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "거리를 유지하며 대형을 만드는 게 왜 어려운가",
            "easy1_desc": "로봇이나 에이전트들이 서로 일정한 거리를 유지하면서 대형을 갖추는 건 복잡한 제어 문제인데요, 이때 단순히 위치만 맞추는 게 아니라 연결된 선들 사이에 적절한 힘이 균형을 이루도록 해야 하거든요. 그런데 기존 방식으로는 대형을 유지하면서도 내부적으로 힘의 균형을 맞추는 게 쉽지 않았다는 말이에요. 쉽게 말하면, 대형을 만드는 목표와 힘의 균형이라는 두 가지 조건을 동시에 만족시키기가 까다로웠다는 겁니다.",
            "easy1_evidence": "We consider controller synthesis for distance-constrained formations, aiming to stabilize the target formation manifold while sustaining admissible equilibrium edge forces.",
            "easy2_title": "횡단 수동성이라는 개념으로 대형 제어를 해결했다",
            "easy2_desc": "연구진은 횡단 수동성(transversal passivity)이라는 새로운 개념을 도입해서 대형의 모양과 거리, 그리고 내부 힘의 균형을 하나의 목표로 묶어 설계했는데요, 이를 통해 제어기를 만들고 시스템이 안정적으로 작동하도록 구현했어요. 이렇게 하면 시스템이 목표한 대형으로 잘 수렴한다는 것을 수학적으로 증명할 수 있다는 장점이 있거든요. 결과적으로 시뮬레이션을 통해 제어기가 의도한 대로 잘 작동함을 확인했다는 겁니다.",
            "easy2_evidence": "Through a compatibility analysis across the interconnection, we establish a closed-loop dissipation margin in terms of the controller parameters and prove local convergence of all agent and controller ports to their target manifolds.",
            "topic": "거리 제약이 있는 대형 제어에서 횡단 수동성을 활용해 안정적인 대형 유지와 힘의 균형을 달성하는 제어기 설계 방법이에요.",
            "topic_evidence": "The synthesis task is thereby reformulated as the joint design of a transversally passive edge controller and its output-target subspace.",
            "points": [
              {
                "subtitle": "횡단 수동성 도입",
                "desc": "연구진은 횡단 수동성이라는 개념을 써서 대형의 모양과 거리, 그리고 내부 힘의 균형을 제어기의 목표로 정의했는데요, 이는 복잡한 제어 문제를 체계적으로 풀기 위한 핵심적인 접근 방식이에요.",
                "evidence": "Using the newly introduced notion of transversal passivity, we encode the target formation shape, the prescribed edge lengths, and a subspace of internally balanced edge forces as the port target manifolds of the agents and the edge controller."
              },
              {
                "subtitle": "동적 제어기 설계",
                "desc": "이 개념을 바탕으로 출력 엄격 횡단 수동 시스템을 구현하는 일반적인 방법을 제안하고, 이를 구체화해서 허용 가능한 평형 힘을 유지하는 동적 제어기를 만들어 냈거든요.",
                "evidence": "We then propose a general constructive realization of output-strictly transversally passive systems and specialize it to derive a dynamic edge controller that sustains admissible equilibrium edge forces."
              },
              {
                "subtitle": "안정성 증명 및 검증",
                "desc": "상호 연결된 시스템의 호환성을 분석해서 제어기 매개변수에 따른 폐루프 소산 마진을 확립했고, 모든 에이전트와 제어기가 목표한 상태로 수렴함을 증명했어요. 마지막으로 수치 시뮬레이션을 통해 이 결과가 실제로 잘 작동함을 보여줬다는 겁니다.",
                "evidence": "Numerical simulations validate the results."
              }
            ],
            "one_line": "횡단 수동성 개념을 도입해 거리 제약 대형 제어기를 설계했어요.",
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
          "canon_id": "2611.15629",
          "title": "Decentralised model predictive control of recurrent neural network models",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15629"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡하게 얽힌 시스템을 제어하기가 어려웠어요",
            "easy1_desc": "입력값이 서로 연결된 순환 신경망(RNN) 모델로 표현되는 시스템은 제어하기가 까다로운데요, 각 부분이 서로 영향을 주고받기 때문이에요. 이런 복잡한 시스템을 한꺼번에 다루려니 계산이 너무 많아지거나 제어가 잘 안 되는 문제가 있었거든요. 쉽게 말하면, 전체를 한 번에 보려다 보니 효율이 떨어지고 안정성을 확보하기가 힘들었다는 말이에요.",
            "easy1_evidence": "This work proposes a decentralised nonlinear model predictive control algorithm for systems described by input-coupled recurrent neural network models.",
            "easy2_title": "부분별로 나누어 제어하니 안정성이 좋아졌어요",
            "easy2_desc": "그래서 연구진은 시스템을 잘게 나누어 각자 제어하는 분산형 비선형 모델 예측 제어 알고리즘을 제안했는데요, 각 부분의 연결성을 고려하면서도 안정성을 유지하도록 설계한 것이 핵심이에요. 이렇게 하면 시스템이 원하는 상태로 부드럽게 수렴하면서도 입력과 출력의 제한 조건을 잘 지킬 수 있거든요. 시뮬레이션을 해 봤더니 성능이 잘 나오는 것으로 확인됐다는 겁니다.",
            "easy2_evidence": "The resulting control scheme guarantees asymptotic convergence to a desired equilibrium while satisfying input and output constraints.",
            "topic": "입력값이 서로 연결된 순환 신경망 모델을 위한 분산형 비선형 모델 예측 제어 기법을 제안했어요.",
            "topic_evidence": "This work proposes a decentralised nonlinear model predictive control algorithm for systems described by input-coupled recurrent neural network models.",
            "points": [
              {
                "subtitle": "분산형 제어 알고리즘 제안",
                "desc": "입력값이 서로 얽혀 있는 순환 신경망 모델을 제어하기 위해, 전체를 하나로 보지 않고 나누어 제어하는 방식을 도입했어요. 각 부분의 제어기를 따로 설계해서 전체 시스템의 복잡도를 낮추려는 시도예요.",
                "evidence": "This work proposes a decentralised nonlinear model predictive control algorithm for systems described by input-coupled recurrent neural network models."
              },
              {
                "subtitle": "안정성 확보를 위한 설계",
                "desc": "각 부분 사이의 연결성 때문에 생기는 불안정함을 막기 위해 폐루프 점진적 입력-상태 안정성(closed-loop incremental input-to-state stability) 개념을 활용했어요. 덕분에 시스템이 외부 영향에도 흔들리지 않고 안정적으로 작동할 수 있게 된 거예요.",
                "evidence": "The proposed approach exploits closed-loop incremental input-to-state stability to design the local controllers and provide robustness to subsystem couplings."
              },
              {
                "subtitle": "제약 조건 준수와 수렴 성능",
                "desc": "제안한 제어 방식은 시스템이 원하는 평형 상태로 안정적으로 수렴하도록 보장하는데요, 동시에 입력과 출력에 걸린 제한 조건들도 모두 만족시킨다는 점이 특징이에요. 시뮬레이션 결과로 그 성능을 입증했다고 연구진은 밝혔습니다.",
                "evidence": "The resulting control scheme guarantees asymptotic convergence to a desired equilibrium while satisfying input and output constraints."
              }
            ],
            "one_line": "순환 신경망 모델을 위한 분산형 비선형 모델 예측 제어 기법을 제안했어요.",
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
          "canon_id": "2611.15500",
          "title": "Adaptive Robust Output Regulation of Uncertain Linear Time-Varying Systems",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15500"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시스템의 불확실성을 어떻게 다룰 것인가",
            "easy1_desc": "연구진은 시스템의 상태를 제어할 때 식별되지 않은 상수 매개변수가 포함된 선형 시변 시스템을 다뤘는데요. 시스템의 이상적인 입력을 찾기 위해 비모닉 미분 관계식이라는 도구를 활용했습니다. 이 방식은 시스템의 계수로부터 직접 관계식을 유도해 내는 구조거든요. 뭔 소리냐면, 시스템이 시간에 따라 변하거나 주기적인 특성을 가질 때도 안정적으로 제어할 수 있는 조건을 찾아냈다는 말이에요.",
            "easy1_evidence": "This paper studies adaptive robust output regulation of linear time-varying systems with unknown constant parameters in both the plant and exosystem.",
            "easy2_title": "복잡한 조건 없이도 정밀한 제어가 가능해졌습니다",
            "easy2_desc": "연구진은 안정적인 필터와 매개변수화된 판독기를 결합해 적응형 제어기를 설계했는데요. 이 제어기는 지속적인 자극이나 매개변수 수렴이라는 까다로운 조건 없이도 정확한 출력을 유지할 수 있습니다. 근사 조건을 만족하는 계수군에서는 제어기의 정밀도를 원하는 수준까지 높일 수 있다는 장점이 있거든요. 쉽게 말하면, 기존 방식보다 더 넓은 범위의 불확실한 시스템을 정밀하게 제어할 수 있게 된 셈이에요.",
            "easy2_evidence": "Neither persistent excitation nor parameter convergence is required.",
            "topic": "불확실한 선형 시변 시스템을 위한 적응형 강인 출력 조절 제어 프레임워크를 제안했습니다.",
            "topic_evidence": "Overall, the framework includes earlier constructions based on finite separation of the ideal input or monic linear differential relations with finitely separable coefficients, and achieves exact robust regulation for a broader class of uncertain systems.",
            "points": [
              {
                "subtitle": "비모닉 미분 관계식 도출",
                "desc": "이상적인 입력을 구하기 위해 비모닉 미분 관계식을 사용했습니다. 일반적인 시변 시스템과 주기적 시스템에서 이 관계식이 존재하기 위한 충분조건을 유도하고 시스템 계수를 통해 이를 구성했거든요.",
                "evidence": "For general time-varying and periodic systems, we derive sufficient conditions for the existence of nonmonic differential relations and construct them from the original system coefficients."
              },
              {
                "subtitle": "적응형 제어기 설계",
                "desc": "안정적인 필터와 매개변수화된 판독기를 활용해 제어기를 만들었습니다. 필터와 판독기가 적절한 조건을 갖추면 유한하게 분리 가능한 계수에 대해 정확한 출력 조절을 수행할 수 있다는 거예요.",
                "evidence": "Based on these relations, an adaptive controller is constructed using stable filters and a parameterized readout."
              },
              {
                "subtitle": "실용적 조절 성능 검증",
                "desc": "근사 조건을 세밀하게 조정하여 원하는 수준의 조절 정확도를 달성했습니다. 연구진은 두 가지 수치 예제를 통해 제안한 제어기가 기존 방식보다 더 넓은 범위의 시스템에서 강인한 성능을 보인다고 주장했습니다.",
                "evidence": "Two numerical examples illustrate the regulation performance of the proposed controller."
              }
            ],
            "one_line": "불확실한 선형 시변 시스템을 정밀하게 제어하는 적응형 강인 제어기를 설계했어요.",
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
          "canon_id": "2611.15498",
          "title": "Estimation-Aware Control on Quadrotor State Manifolds via Anisotropic Covariance Filtering",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15498"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "센서가 흔들리면 드론이 엉뚱한 곳으로 움직이는 문제",
            "easy1_desc": "기존의 드론 비행 제어 장치는 센서에서 들어오는 정보가 항상 정확하다고 믿고 작동합니다. 그런데 센서 성능이 일시적으로 떨어지거나 위치를 제대로 파악하지 못하는 상황이 생기면, 제어 장치는 이 불확실한 정보를 실제 비행 오차로 착각하게 되거든요. 그 결과 드론이 필요 이상으로 과하게 움직이거나 엉뚱한 방향으로 보정하려는 문제가 발생한다는 겁니다.",
            "easy1_evidence": "During transient sensing degradation or partial unobservability, state estimation uncertainty is frequently misinterpreted as physical tracking error, triggering aggressive and parasitic corrective inputs.",
            "easy2_title": "센서의 자신감을 제어에 반영해 더 안정적으로 날게 했어요",
            "easy2_desc": "연구진은 센서가 자기 정보를 얼마나 확신하는지 그 정도를 제어 과정에 직접 반영하는 새로운 방식을 제안했습니다. 센서가 불확실하다고 판단하는 방향으로는 드론이 과하게 반응하지 않도록 제어 강도를 자동으로 조절하는 방식인데요. 이렇게 하면 센서 오류를 실제 오차로 오해해서 생기는 불필요한 움직임을 막을 수 있고, 결과적으로 비행 성능이 훨씬 좋아진다는 겁니다.",
            "easy2_evidence": "By mapping the posterior error covariance $\\mathbf{P}_{k\\mid k}$ into an uncertainty-dependent modulation operator, the EA mechanism dynamically scales feedback authority, performing anisotropic attenuation along weakly observed state directions to prevent false error corrections.",
            "topic": "센서의 불확실성을 제어기에 직접 반영하여 드론의 비행 안정성을 높이는 추정 인지(EA) 제어 프레임워크에 관한 연구예요.",
            "topic_evidence": "To mitigate this vulnerability, we propose a generalized Estimation-Aware (EA) control framework that directly incorporates real-time estimator confidence into control execution.",
            "points": [
              {
                "subtitle": "추정 인지 제어 방식",
                "desc": "센서의 오차 공분산(데이터의 불확실성 정도)을 제어기에 입력하는 변조 연산자로 변환해서 사용합니다. 뭔 소리냐면, 센서가 정보를 얼마나 믿을 수 있는지 계산해서 그만큼만 제어에 반영한다는 말이에요.",
                "evidence": "By mapping the posterior error covariance $\\mathbf{P}_{k\\mid k}$ into an uncertainty-dependent modulation operator, the EA mechanism dynamically scales feedback authority, performing anisotropic attenuation along weakly observed state directions to prevent false error corrections."
              },
              {
                "subtitle": "비행 성능 검증",
                "desc": "총 6가지의 서로 다른 제어 방식에 이 기술을 적용해 성능을 확인해 봤는데요. 모든 기준 모델에서 기존보다 성능이 크게 향상되었다고 연구진은 주장했습니다.",
                "evidence": "Validated across six distinct control paradigms, the proposed approach demonstrates substantial performance gains across all baselines."
              },
              {
                "subtitle": "실제 비행 개선 효과",
                "desc": "특히 증분 비선형 동적 역전(INDI) 구조에 이 방식을 넣고 초속 10m의 빠른 속도로 날려 봤더니, 추적 오차는 24.34%, 추정 오차는 33.24%까지 줄어들었다고 합니다.",
                "evidence": "In particular, when integrated into an Incremental Nonlinear Dynamic Inversion (INDI) architecture, the EA mechanism reduces tracking and estimation errors by 24.34% and 33.24%, respectively, at a high flight speed of 10 m/s."
              }
            ],
            "one_line": "센서 불확실성을 고려한 드론 제어 기술을 개발해 비행 오차를 줄였어요.",
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 29,
          "score": 3.9,
          "score_why": "추천 29 → +2.9 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
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
          "backlog": false,
          "hf_upvotes": 29,
          "score": 3.9,
          "score_why": "추천 29 → +2.9 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 26,
          "score": 3.6,
          "score_why": "추천 26 → +2.6 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 25,
          "score": 3.5,
          "score_why": "추천 25 → +2.5 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 21,
          "score": 3.1,
          "score_why": "추천 21 → +2.1 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 19,
          "score": 2.9,
          "score_why": "추천 19 → +1.9 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 14,
          "score": 2.4,
          "score_why": "추천 14 → +1.4 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 13,
          "score": 2.3,
          "score_why": "추천 13 → +1.3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 12,
          "score": 2.2,
          "score_why": "추천 12 → +1.2 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 12,
          "score": 2.2,
          "score_why": "추천 12 → +1.2 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 12,
          "score": 2.2,
          "score_why": "추천 12 → +1.2 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 8,
          "score": 1.8,
          "score_why": "추천 8 → +0.8 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 6,
          "score": 1.6,
          "score_why": "추천 6 → +0.6 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 6,
          "score": 1.6,
          "score_why": "추천 6 → +0.6 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 6,
          "score": 1.6,
          "score_why": "추천 6 → +0.6 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 5,
          "score": 1.5,
          "score_why": "추천 5 → +0.5 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 4,
          "score": 1.4,
          "score_why": "추천 4 → +0.4 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 4,
          "score": 1.4,
          "score_why": "추천 4 → +0.4 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 4,
          "score": 1.4,
          "score_why": "추천 4 → +0.4 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 4,
          "score": 1.4,
          "score_why": "추천 4 → +0.4 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.17316",
          "title": "CoReMem: Cost-Internalizing Memory for Successive Coding Tasks with Prospective Valuation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17316"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.17309",
          "title": "Classical Energies Learn to Reason 1,000x Faster than Looped Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17309"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.17267",
          "title": "LiveGeo: Benchmarking Geographic Agents in Continuously Evolving Worlds",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17267"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.17241",
          "title": "Ballad: Bandit-Based LLM Routing for Automated Heuristic Discovery",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17241"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.17186",
          "title": "Cortex-FL: Agent-Mediated Collaboration for Federated Learning",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17186"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.17031",
          "title": "Your Vision Foundation Model Is Secretly an EEG Foundation Model",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.17031"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16991",
          "title": "AnalogLayoutWorld: An Open Benchmark for Agentic Analog Layout Design",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16991"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16986",
          "title": "Primer: An AI Framework for Instructor-Centered Educational Simulation Creation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16986"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16981",
          "title": "Compiling Known Rules into Compact Neural Agents: Weight-Space Programming on Unseen Games",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16981"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16937",
          "title": "S1-Evo: Experience-Guided Evidence Competition Attacks on Typed System-1 Decision Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16937"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16913",
          "title": "CADET: Construction of PCB Routing Instances with Executable Demonstrations",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16913"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16831",
          "title": "A Modular Framework for ESG Prediction through Domain-Specific Language Modeling and Graph Learning",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16831"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16744",
          "title": "Scale-Induced Semantic Shift in Visual Prompt Injection Against VLMs and Web Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16744"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16722",
          "title": "Mind the Accuracy-Approval Gap: How Users Evaluate Sycophantic AI in Everyday Tasks",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16722"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16694",
          "title": "When Expert Disagreement Hurts: Prestige and Selectivity in LLM Decision Revision",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16694"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16666",
          "title": "Natural Gradient Learning in Predictive Coding through Lateral Circuits",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16666"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16647",
          "title": "InertiaMPDD: Multimodal Personalized Depression Detection via Emotional Inertia-Inspired Dynamics Modeling",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16647"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16628",
          "title": "Safety as a Budget: Calibrating the Control Channel of Constrained GRPO for Vision-Language Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16628"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16621",
          "title": "Studies on Sign Language Retrieval in Low-Resource Dictionary Settings",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16621"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16609",
          "title": "A Dual-Branch Graph and Convolutional Network for Interpretable Movement EEG Classification",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16609"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16590",
          "title": "AstroMemBench: A Benchmark for Memory Systems in Embodied Spacecraft Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16590"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16586",
          "title": "Large Language Models as Digital Twins: a Distribution-Aware Questionnaire-Based Evaluation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16586"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16526",
          "title": "Lost in Delegation: Studying the Effectiveness of Task Orchestration in Generative Search",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16526"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16502",
          "title": "SignRot: LLM Quantization with Massive Outlier-Aware Sign-Adjusted Rotation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16502"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16499",
          "title": "Recalibrating a Typed-Decision Model in an Afternoon: A Hands-On Recipe for Laya's Confidence Scores",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16499"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16498",
          "title": "How many LLM-labelled rows does a decision encoder need, and how wrong can the labels be?",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16498"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16492",
          "title": "Time and Space: A Dual-Axis, Evidence-Grounded Context Substrate for Personal Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16492"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16485",
          "title": "Contain, Conform, Compare (Extended Version): A Red-Teamed Evaluation Kit for Small Coding Agents and the Full Record of Its Experiments",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16485"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16478",
          "title": "One Model, Two Precisions: Does Disagreement Between Quantized Copies Tell You When a Small Model Is Wrong?",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16478"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16455",
          "title": "Rational Alignments of Superintelligences via Debates",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16455"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16445",
          "title": "FPSRG: Heterogeneous User Simulation First-Person Post-Training and Multidimensional Semantic Response Grids",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16445"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16414",
          "title": "Small Language Models for Inference-Capability Routing: Effects of Model Capacity and Prompt Optimization on Downstream Quality and Efficiency",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16414"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16378",
          "title": "Evidence-Governed Adoption of Self-Generated Updates in Autonomous AI Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16378"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16356",
          "title": "DIAGNO: Diagonal Spherical Neural Operators for Heterogeneous Earth Dynamics Modeling",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16356"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16335",
          "title": "From More to Better: Causal Inference and Digital Experimentation in the Age of AI",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16335"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16300",
          "title": "SAGE-QA: Semantic-Aware, Grounded Evaluation for Closed-Context Question Answering on SQuAD 2.0",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16300"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16267",
          "title": "Causals: An Open Knowledge Graph for Research on Causal Reasoning",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16267"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16211",
          "title": "One Fuzzer, Many Reasoners: Adaptive Neuro-Symbolic Fuzzing with Reliability-Calibrated and Context-Gated Guidance",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16211"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.16206",
          "title": "Turning Multi-Agent Communication into Token-Level Credit with On Policy Self Distillation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.16206"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.15885",
          "title": "Reward-Driven Collider Physics Challenges for Self-Improving Agentic AI via Reinforcement Learning",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15885"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.15838",
          "title": "Before AI Agents Negotiate for Us: A Competitive Tournament of Rule-Based, Search, Optimization, Learned, and Language-Model Negotiators Under Scarcity",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15838"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.15835",
          "title": "Controlling the Probability of Unknown Unknowns in Pre-Deployment Testing of AI Systems",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15835"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.15729",
          "title": "DISCERN: Preserve at Write, Resolve at Read for Persistent LLM-Agent Memory",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15729"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.15600",
          "title": "MemCredit: From Relevance to Utility for Decision-Time Memory in Long-Horizon Web Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15600"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.15592",
          "title": "Small Heads, Strong Decisions: A Controlled Study of Typed-Decision Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15592"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.15585",
          "title": "Marginal-Preserving Coupled Diffusion Composition for Long-Horizon Planning",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15585"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.15475",
          "title": "Loyalty Capture: Reporting Relationships and Structural Sycophancy in Frontier AI Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15475"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.15460",
          "title": "Read and Ignore: What Self-Directed LLM Agents Do in Public Service Scenarios",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15460"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.15276",
          "title": "Verify by Doing: Co-Evolving Agent Execution and Evaluation without External Feedback",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15276"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.15225",
          "title": "Can MLLMs Reason over Surround-View Driving Videos? A Multi-View Autonomous Driving QA Benchmark",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15225"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.15215",
          "title": "AFTER: A World Model with Adaptive Fast--Slow Timescales for Error-Driven Retention",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15215"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.15189",
          "title": "WordInferBench: Can Agents Infer How to Edit from Word Document Context?",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15189"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.15178",
          "title": "HyperSkill: Training-Free Omnimodal GRPO via Hypergraph-Indexed Skill-Library Evolution",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15178"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.15109",
          "title": "Expanding the Decision Space of Pretrained Models through Structured Re-Decoding",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15109"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.15097",
          "title": "GuardianAgentFlow: Multi-Agent Coordination for Web Privacy Protection",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15097"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 0,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.15049",
          "title": "Science Prediction Universe",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15049"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.15006",
          "title": "EvoX: Rethinking the Agent Harness as a Runtime Policy",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.15006"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.14997",
          "title": "Same Task, Different Statement: When and How Reformulation Helps LLM Problem Solving",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14997"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.14960",
          "title": "Termination Lag: Coding Agents Solve Early but Stop Late",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14960"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.14949",
          "title": "RSI-PDEbench: A Benchmark for Self-Improving Agents in PDE Solving",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14949"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.14942",
          "title": "Emergent Vision-Shaped Thinking in Text-Only Reasoning through Multimodal Training",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14942"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.14928",
          "title": "Provably Optimal HBT Legalization in Seconds: Certified Optima Reveal Where the Headroom Really Lies",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14928"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.14924",
          "title": "Edge-Native Multimodal RAG: Hardware-Aware Quantization and Architectural Optimization for Consumer GPUs",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14924"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.14889",
          "title": "Can an AI Agent Be Epistemically Akratic? Higher-Order Evidence & the Limits of Self-Correction",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14889"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.14850",
          "title": "Effective Teacher Support for Reasoning Distillation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14850"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.14846",
          "title": "Open Challenges and Opportunities in Human-Agent Systems",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14846"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.14844",
          "title": "AutoAssumption: Searching over Assumptions Discovers ML-Systems Algorithms",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14844"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.14804",
          "title": "GenPFN: An In-Context Tabular Foundation Model Approach for Augmenting Small Datasets in Engineering",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14804"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.14781",
          "title": "Robust Task-Aware State Estimation from Pre-trained Perception",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14781"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.14769",
          "title": "Leaderboard Hacking: Preference-Based Model Evaluations are Vulnerable to Manipulation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14769"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.14766",
          "title": "Rational Use of Time for Social Coordination in Humans and AI",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14766"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.14765",
          "title": "SynthCorp: A Platform for Creating Benchmarks for Data Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14765"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.14736",
          "title": "When Should Semantic Priors Enter Partially-Identified Causal Discovery?",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14736"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.14681",
          "title": "Together Compiler: Continual Compilation for AI Inference",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14681"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        },
        {
          "canon_id": "2611.14654",
          "title": "Cleaning an Agent's History Hurts When the World Still Holds the Error",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.14654"
          },
          "published": "2026-11-13",
          "first_seen": "2026-11-14",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
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
          "backlog": false,
          "hf_upvotes": 0,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": []
        }
      ],
      "backlog": {
        "n_waiting_all": 163,
        "oldest_day": "2026-11-14",
        "n_dropped_today": 0,
        "n_backlog_done_today": 0
      },
      "sources": [
        {
          "name": "arXiv AI(cs.AI)",
          "field": "cs.AI",
          "got": 113,
          "new_cards": 113
        },
        {
          "name": "arXiv 전력·제어(eess.SY)",
          "field": "eess.SY",
          "got": 63,
          "new_cards": 63
        },
        {
          "name": "허깅페이스 오늘의 논문",
          "field": "허깅페이스",
          "got": 50,
          "new_cards": 50
        }
      ],
      "calls": {
        "summary": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-14_논문.json"
        },
        "flow": {
          "val": 1,
          "source": "v2_secretary/결과/논문/2026-11-14_논문.json"
        },
        "failed": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-14_논문.json"
        },
        "http429": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-14_논문.json"
        }
      },
      "cap": {
        "val": 60,
        "source": "v2_secretary/결과/논문/2026-11-14_논문.json"
      },
      "secs": {
        "val": 6,
        "source": "v2_secretary/결과/논문/2026-11-14_논문.json"
      },
      "no_ai": false,
      "notes": [],
      "source": "v2_secretary/결과/논문/2026-11-14_논문.json",
      "abstracts": {
        "file": "panel_abstracts.js",
        "n": 223,
        "source": "v2_secretary/결과/논문/초록/2026-11-14.json"
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
          "secs": 53.6,
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
          "secs": 6.5,
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
        "line_out": "내보냄: 결과/제외보관함/제외보관함.csv (2807행 누적)",
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
          "secs": 143.6,
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
          "calls": 9,
          "secs": 107.2,
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
          "calls": 2,
          "secs": 8.3,
          "num_source": "v2_secretary/결과/뉴스/2026-11-14_뉴스사건.json"
        }
      },
      {
        "addr": "처리-4",
        "group": "처리",
        "name": "논문 풀이",
        "files": "`papers.py` · 규칙 `gate_rules/논문_설정.txt`·`논문_주제.txt`·`논문_키워드.txt` → `결과/논문/`",
        "status": "**돎 — 11-14 깃허브 손 실행 60편 성공(낮 예약은 아직 한 번도 제때 안 시작). 11-14 세션 다: 화면 챕터 5 '논문' 탭 + v2-papers 화면 보내기 — PC에서 만듦·복사본 시험 통과, 깃허브 올리기 대기** · 새벽 `run_day` 5-1 단계(0콜 카드) + 낮 `v2-papers.yml`(풀이) (11-14 세션 나) · 그 전 (11-14 세션 가: 복사본 시험 통과 — 0콜 5일·AI 40콜 근거 일치 95.8%·97.5%·배선 6/6. 11-14 아침 손봄: 초록 날짜별 파일·출처 분야 상한·브리핑 10자리·`--from-cards`·`--revive`. 다음 = 세션 나: 새벽 바퀴엔 `--no-ai`만, AI 풀이는 새 예약 `v2-papers.yml` 낮 12~15시, 지시서 루트 `다음세션_처리4_논문.md`)",
        "status_kind": "separate",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: 모으기 원본(arXiv·허깅페이스)에서 2026-11-14 새 논문 카드 223편 (새벽 바퀴 5-1, 0콜)",
        "line_rule": "규칙: papers.py — 점수 순 줄 세우기 → 낮 v2-papers가 편당 AI 1콜 풀이 + 근거 문장 원문 대조 (gate_rules/논문_설정·주제·키워드.txt)",
        "line_out": "내보냄: 풀이 60편 · 대기 163편 (v2_secretary/결과/논문/2026-11-14_논문.json)",
        "metrics": {
          "in": 223,
          "out": 60,
          "calls": 1,
          "secs": 6.0,
          "num_source": "v2_secretary/결과/논문/2026-11-14_논문.json"
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
        "line_out": "내보냄: 실행 기록 8건 (최근: 2026-11-14 ok)",
        "metrics": {
          "in": 1,
          "out": 8,
          "calls": 13,
          "secs": 324.0,
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
