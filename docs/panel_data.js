// 자동 생성 파일 (v2_secretary/export_panel.py) — 직접 수정하지 마세요.
window.PANEL_DATA = {
  "schema_version": "2.1.0-panel-v1",
  "day": "2026-11-26",
  "generated_at": "2026-11-26 05:24:08",
  "made_iso": "2026-11-26T05:24:08+09:00",
  "freshness": {
    "lines": [
      "AI 사용량 초과(429) 1번",
      "모델 감시: 단종·전환 말 든 줄 1개 (2026-11-23 확인 — 결과지 아래쪽)"
    ],
    "pc_locked": "",
    "source": "v2_secretary/data/auto/runs.jsonl"
  },
  "refresh": {},
  "flows": {
    "day": "2026-11-26",
    "same_day": true,
    "model": "gemini-3.6-flash",
    "secs": 65.3,
    "problems": [
      "흐름1 팩트 검사: 인과 '영향으로': 근거에 없는 인과(지어냄) — 11월 26일 복수 보도에 따르면 미국 10월 PCE 물가가 3.8% 상",
      "흐름1 채점 카드 못 읽음(이름 못 찾음: 원, 달러 환율): 미 통화정책 동결과 시장 금리 하락 속 원/달러 환율의 하락 안정세 유지"
    ],
    "n_cards": 354,
    "flows": [
      {
        "title": "미 통화정책 동결 기조 지속과 경제 지표 혼재 속 원/달러 환율 및 금리 행방",
        "steps": [
          {
            "kind": "팩트",
            "text": "연준 Cook 이사는 미국의 3분기 국내총생산 성장률이 연율 3.4%를 기록하며 경제 성장이 가속화되고 있고 연방공개시장위원회가 기준금리를 3-3/4에서 4퍼센트로 올린 뒤 10월에 동결했다고 밝혔다. 또한 미국 연준 공식 보도자료에 따르면 연준은 10월 회의에서 은행 할인율을 4%로 유지하고 기준금리 목표 범위를 4%로 유지하기로 결정했다.",
            "refs": [
              {
                "day": "2026-11-20",
                "kind": "연준 연설",
                "grade": "기관 의견",
                "fact": "연준은 미국의 3분기 국내총생산 성장률이 연율 3.4%를 기록하는 등 경제 성장이 가속화되고 있다고 말했다."
              },
              {
                "day": "2026-11-20",
                "kind": "연준 연설",
                "grade": "기관 의견",
                "fact": "연준은 연방공개시장위원회가 기준금리를 3-3/4에서 4퍼센트로 올린 뒤 10월에 동결했다고 밝혔다."
              },
              {
                "day": "2026-11-25",
                "kind": "보도자료",
                "grade": "공식",
                "fact": "연준은 10월 회의에서 은행 할인율을 4%로 유지하고 기준금리 목표 범위를 4%로 유지하기로 결정했습니다."
              }
            ]
          },
          {
            "kind": "팩트",
            "text": "11월 26일 복수 보도에 따르면 미국 10월 PCE 물가가 3.8% 상승했다. 한편 인베스팅 외환 보도에 따르면 기술주 폭락 영향으로 안전자산 수요가 확대되면서 미 국채 금리 하락세가 지속되고 있다.",
            "refs": [
              {
                "day": "2026-11-24",
                "kind": "뉴스 사건",
                "grade": "한 매체 보도",
                "fact": "기술주 폭락으로 인해 안전자산 수요가 확대되면서 미 국채 금리 하락세가 지속되고 있습니다."
              },
              {
                "day": "2026-11-26",
                "kind": "뉴스 사건",
                "grade": "복수 보도",
                "fact": "미국 10월 PCE 물가가 3.8% 상승했다."
              }
            ]
          },
          {
            "kind": "추정·연결",
            "text": "미국의 실물 경제 성장이 이어지는 가운데 물가 상승 압력이 상존함에도 불구하고 연준의 금리 동결과 기술주 변동성 확대가 국채 금리 하락과 원/달러 환율 방향성에 복합적 영향을 주고 있다.",
            "refs": [
              {
                "day": "2026-11-20",
                "kind": "연준 연설",
                "grade": "기관 의견",
                "fact": "연준은 미국의 3분기 국내총생산 성장률이 연율 3.4%를 기록하는 등 경제 성장이 가속화되고 있다고 말했다."
              },
              {
                "day": "2026-11-24",
                "kind": "뉴스 사건",
                "grade": "한 매체 보도",
                "fact": "기술주 폭락으로 인해 안전자산 수요가 확대되면서 미 국채 금리 하락세가 지속되고 있습니다."
              },
              {
                "day": "2026-11-25",
                "kind": "보도자료",
                "grade": "공식",
                "fact": "연준은 10월 회의에서 은행 할인율을 4%로 유지하고 기준금리 목표 범위를 4%로 유지하기로 결정했습니다."
              },
              {
                "day": "2026-11-26",
                "kind": "뉴스 사건",
                "grade": "복수 보도",
                "fact": "미국 10월 PCE 물가가 3.8% 상승했다."
              }
            ]
          }
        ],
        "counter": "11월 25일 연합뉴스 마켓+ 보도에 따르면 엔비디아발 위험선호 회복으로 원/달러 환율이 3.5원 내린 1,342.4원을 기록하기도 했다.",
        "same_dart": [],
        "claims": [
          {
            "claim": "미 통화정책 동결과 시장 금리 하락 속 원/달러 환율의 하락 안정세 유지 여부 검증",
            "measure": "원/달러 환율",
            "baseline": "없음",
            "win_if": "-1.0% 이상 하락",
            "after_days": 30,
            "reader": "채점 불가"
          }
        ]
      },
      {
        "title": "AI 데이터센터 전력 수급 난제와 BESS(배터리 에너지 저장장치) 및 전력 인프라 확충",
        "steps": [
          {
            "kind": "팩트",
            "text": "11월 25일 공시에 따르면 지엔씨에너지는 디엘이엔씨(주)와 김포데이터센터 가스터빈 비상발전기 공급계약(매출 대비 15%)을 맺었고, 서진시스템은 Bloom Energy Corporation과 고체산화물 연료전지(SOFC) 모듈 및 부품 생산 계약(매출 대비 15.53%)을 체결했다.",
            "refs": [
              {
                "day": "2026-11-25",
                "kind": "공시",
                "grade": "공식",
                "fact": "지엔씨에너지 단일판매ㆍ공급계약체결: 김포데이터센터 가스터빈 비상발전기외 디엘이엔씨(주) (매출 대비 15%)"
              },
              {
                "day": "2026-11-25",
                "kind": "공시",
                "grade": "공식",
                "fact": "서진시스템 단일판매ㆍ공급계약체결: 고체산화물 연료전지(SOFC) 모듈 및 부품 생산 Bloom Energy Corporation (매출 대비 15.53%)"
              }
            ]
          },
          {
            "kind": "팩트",
            "text": "신한투자증권은 3분기 누적 전 세계 ESS 셀 출하량이 779.9GWh로 73% 늘었고 북미도 122.3GWh로 71% 증가했다고 밝혔다. 연합인포맥스 보도에 따르면 포스코는 AI 데이터센터부터 ESS까지 미래소재 영토를 확장 중이며, 더밸류뉴스 보도에 따르면 LS그룹도 전력 인프라 경쟁력을 강화하며 AI 데이터센터 시장을 공략하고 있다.",
            "refs": [
              {
                "day": "2026-11-24",
                "kind": "뉴스 사건",
                "grade": "한 매체 보도",
                "fact": "포스코가 AI 데이터센터부터 ESS까지 미래소재 영토를 확장하고 있습니다."
              },
              {
                "day": "2026-11-26",
                "kind": "뉴스 사건",
                "grade": "한 매체 보도",
                "fact": "LS그룹이 전력 인프라 경쟁력을 강화하며 AI 데이터센터 시장을 공략하고 있다."
              },
              {
                "day": "2026-11-26",
                "kind": "리포트",
                "grade": "기관 의견",
                "fact": "3분기 누적 기준으로 전 세계 ESS 셀 출하량이 779.9GWh로 73% 늘었고 북미도 122.3GWh로 71% 증가했습니다."
              }
            ]
          },
          {
            "kind": "추정·연결",
            "text": "데이터센터 건설 시 전력 연결 확보가 필수 과제로 부상하면서 비상발전기 및 연료전지 공시 계약이 잇따르고 있으며, 글로벌 ESS 시장 출하량 증가에 맞춰 국내 전력 인프라 및 배터리 공급 체인의 수주 수혜가 가속화되고 있다.",
            "refs": [
              {
                "day": "2026-11-25",
                "kind": "거푸집2 글",
                "grade": "기관 의견",
                "fact": "데이터센터를 건설하더라도 전력 연결이 확보되지 않으면 운영이 불가능하다."
              },
              {
                "day": "2026-11-25",
                "kind": "공시",
                "grade": "공식",
                "fact": "지엔씨에너지 단일판매ㆍ공급계약체결: 김포데이터센터 가스터빈 비상발전기외 디엘이엔씨(주) (매출 대비 15%)"
              },
              {
                "day": "2026-11-25",
                "kind": "공시",
                "grade": "공식",
                "fact": "서진시스템 단일판매ㆍ공급계약체결: 고체산화물 연료전지(SOFC) 모듈 및 부품 생산 Bloom Energy Corporation (매출 대비 15.53%)"
              },
              {
                "day": "2026-11-25",
                "kind": "리포트",
                "grade": "기관 의견",
                "fact": "2027년 미국 BESS 설치 수요는 88GWh로 전년 대비 26% 성장할 것으로 추정됩니다."
              },
              {
                "day": "2026-11-26",
                "kind": "뉴스 사건",
                "grade": "한 매체 보도",
                "fact": "LS그룹이 전력 인프라 경쟁력을 강화하며 AI 데이터센터 시장을 공략하고 있다."
              },
              {
                "day": "2026-11-26",
                "kind": "리포트",
                "grade": "기관 의견",
                "fact": "3분기 누적 기준으로 전 세계 ESS 셀 출하량이 779.9GWh로 73% 늘었고 북미도 122.3GWh로 71% 증가했습니다."
              }
            ]
          }
        ],
        "counter": "11월 24일 주간장성신문 보도에 따르면 싱가포르가 데이터센터 신규 개발을 유예하고 마이크로소프트가 영국 AI 데이터센터 사업에서 철수하는 등 전력 부담에 따른 일시적 사업 차질 신호도 존재한다.",
        "same_dart": [
          "아인스팩씨엔에스 단일판매ㆍ공급계약체결: 2차전지 제어 컨트롤러 국내 제작 및 설계작업 주식회사 와이에이치티 (매출 대비 30.16%)"
        ],
        "claims": [
          {
            "claim": "데이터센터 비상발전기 및 연료전지 관련 공시 기업의 시장 대비 초과 수익률 검증",
            "measure": "지엔씨에너지, 서진시스템",
            "baseline": "코스닥",
            "win_if": "measure 평균 수익률이 baseline보다 +3%p 이상",
            "after_days": 30,
            "reader": "읽음"
          }
        ]
      },
      {
        "title": "차세대 메모리 팹(Y1) 발주 본격화 및 반도체 검사·제조 장비 공급망 형성",
        "steps": [
          {
            "kind": "팩트",
            "text": "11월 24일 공시에 따르면 네오셈은 NEOSEM TECHNOLOGY INC.와 반도체 검사장비 공급계약(매출 대비 22.2%)을, 유니테스트는 SK하이닉스와 GEN6 SSD TESTER 공급계약(매출 대비 5.2%)을 맺었으며, 11월 25일 네오셈은 삼성전자와 CLT INTERFACE BOARD 공급계약(매출 대비 10.1%)을 공시했다.",
            "refs": [
              {
                "day": "2026-11-24",
                "kind": "공시",
                "grade": "공식",
                "fact": "네오셈 단일판매ㆍ공급계약체결: 반도체 검사장비(GEN6 SSD TESTER 외) NEOSEM TECHNOLOGY INC. (매출 대비 22.2%)"
              },
              {
                "day": "2026-11-24",
                "kind": "공시",
                "grade": "공식",
                "fact": "유니테스트 단일판매ㆍ공급계약체결(자율공시): 반도체 검사장비 (GEN6 SSD TESTER) SK하이닉스 (매출 대비 5.2%)"
              },
              {
                "day": "2026-11-25",
                "kind": "공시",
                "grade": "공식",
                "fact": "네오셈 단일판매ㆍ공급계약체결: CLT INTERFACE BOARD 삼성전자 (매출 대비 10.1%)"
              }
            ]
          },
          {
            "kind": "팩트",
            "text": "한화투자증권은 SK하이닉스 용인 Y1의 첫 클린룸 개방 시점이 2027년 2월로 3개월 앞당겨졌다고 밝혔으며, 한국경제 보도에 따르면 SK하이닉스 Y1 발주가 시작되었다. 조선일보 보도에 따르면 내년 HBM 값이 2배로 오르고 고객이 다변화되고 있다.",
            "refs": [
              {
                "day": "2026-11-26",
                "kind": "뉴스 사건",
                "grade": "한 매체 보도",
                "fact": "SK하이닉스 Y1 발주가 시작됐다."
              },
              {
                "day": "2026-11-26",
                "kind": "뉴스 사건",
                "grade": "한 매체 보도",
                "fact": "내년 HBM 값이 2배로 오르고 고객이 다변화되면서 HBM 시장에 지각변동이 일어나고 있다."
              },
              {
                "day": "2026-11-26",
                "kind": "리포트",
                "grade": "기관 의견",
                "fact": "한화투자증권은 SK하이닉스 용인 Y1의 첫 클린룸 개방 시점이 2027년 2월로 3개월 앞당겨졌다고 밝혔다."
              }
            ]
          },
          {
            "kind": "추정·연결",
            "text": "용인 신규 메가팹의 발주 일정 조기 추진과 HBM 가격 상승 국면이 접목되면서 삼성전자 및 SK하이닉스를 고객사로 둔 반도체 검사·제조 장비 기업들의 공급계약 공시가 실적으로 이어질 가능성이 높다.",
            "refs": [
              {
                "day": "2026-11-24",
                "kind": "공시",
                "grade": "공식",
                "fact": "네오셈 단일판매ㆍ공급계약체결: 반도체 검사장비(GEN6 SSD TESTER 외) NEOSEM TECHNOLOGY INC. (매출 대비 22.2%)"
              },
              {
                "day": "2026-11-24",
                "kind": "공시",
                "grade": "공식",
                "fact": "유니테스트 단일판매ㆍ공급계약체결(자율공시): 반도체 검사장비 (GEN6 SSD TESTER) SK하이닉스 (매출 대비 5.2%)"
              },
              {
                "day": "2026-11-25",
                "kind": "공시",
                "grade": "공식",
                "fact": "네오셈 단일판매ㆍ공급계약체결: CLT INTERFACE BOARD 삼성전자 (매출 대비 10.1%)"
              },
              {
                "day": "2026-11-26",
                "kind": "뉴스 사건",
                "grade": "한 매체 보도",
                "fact": "SK하이닉스 Y1 발주가 시작됐다."
              },
              {
                "day": "2026-11-26",
                "kind": "뉴스 사건",
                "grade": "한 매체 보도",
                "fact": "내년 HBM 값이 2배로 오르고 고객이 다변화되면서 HBM 시장에 지각변동이 일어나고 있다."
              },
              {
                "day": "2026-11-26",
                "kind": "리포트",
                "grade": "기관 의견",
                "fact": "한화투자증권은 SK하이닉스 용인 Y1의 첫 클린룸 개방 시점이 2027년 2월로 3개월 앞당겨졌다고 밝혔다."
              }
            ]
          }
        ],
        "counter": "11월 26일 비즈니스포스트 보도에 따르면 메모리반도체 가격이 2027년 중반부터 하락할 것이라는 전망도 함께 제기되었다.",
        "same_dart": [
          "기가비스 단일판매ㆍ공급계약체결: 반도체 기판 수리장비 외 한국 반도체 기판 제조회사 (매출 대비 74%)",
          "대성하이텍 단일판매ㆍ공급계약체결: 반도체 후공정 테스트용 부품 제작 장비 공급 계약 JIANGSU HANCHUANG MACHINERY CO., (매출 대비 23.63%)"
        ],
        "claims": [
          {
            "claim": "신규 팹 발주 수혜 검사장비 공시 기업들의 코스닥 대비 초과 성과 검증",
            "measure": "네오셈, 유니테스트",
            "baseline": "코스닥",
            "win_if": "measure 평균 수익률이 baseline보다 +3%p 이상",
            "after_days": 30,
            "reader": "읽음"
          }
        ]
      },
      {
        "title": "미국·한국 규제당국의 SMR 인허가 진행과 원전 기자재 ASME 인증 및 공급 체계",
        "steps": [
          {
            "kind": "팩트",
            "text": "11월 24일 공시에 따르면 수산인더스트리는 매출액 대비 22.57% 규모의 단일판매·공급계약 체결(기재정정)을 공시했다.",
            "refs": [
              {
                "day": "2026-11-24",
                "kind": "공시",
                "grade": "공식",
                "fact": "(유가)수산인더스트리 - [기재정정]단일판매ㆍ공급계약체결 [매출 대비 22.57%]"
              }
            ]
          },
          {
            "kind": "팩트",
            "text": "11월 24일 복수 보도에 따르면 효성굿스프링스가 원전 펌프 전 제품에 대해 미국기계학회 ASME 인증을 획득했다. 미국 원자력규제위원회(NRC) 보도자료에 따르면 미시간주 소형모듈원전(SMR) 건설 허가 신청서 2단계를 접수하고 공개했다. 산경e뉴스 보도에 따르면 원자력안전위원회가 SMR 인허가 전 사전검토제를 본격적으로 시행한다.",
            "refs": [
              {
                "day": "2026-11-24",
                "kind": "뉴스 사건",
                "grade": "복수 보도",
                "fact": "효성굿스프링스가 원전 펌프 전 제품에 대해 ASME 인증을 획득했습니다."
              },
              {
                "day": "2026-11-25",
                "kind": "뉴스 사건",
                "grade": "한 매체 보도",
                "fact": "원자력안전위원회가 SMR 인허가 전 사전검토제를 본격적으로 시행합니다."
              },
              {
                "day": "2026-11-25",
                "kind": "보도자료",
                "grade": "공식",
                "fact": "미국 원자력규제위원회는 미시간주 소형모듈원전 건설 허가 신청서 2단계를 접수하고 공개했습니다."
              }
            ]
          },
          {
            "kind": "추정·연결",
            "text": "한·미 양국의 SMR 인허가 표준화 작업 및 사전검토제 시행과 원전 펌프 등 핵심 기자재의 국제 품질 인증(ASME) 확보가 맞물리며 원전 정비 및 소형 원자로 생태계 기업들의 해외 수주 기반이 다져지고 있다.",
            "refs": [
              {
                "day": "2026-11-24",
                "kind": "공시",
                "grade": "공식",
                "fact": "(유가)수산인더스트리 - [기재정정]단일판매ㆍ공급계약체결 [매출 대비 22.57%]"
              },
              {
                "day": "2026-11-24",
                "kind": "뉴스 사건",
                "grade": "복수 보도",
                "fact": "효성굿스프링스가 원전 펌프 전 제품에 대해 ASME 인증을 획득했습니다."
              },
              {
                "day": "2026-11-25",
                "kind": "뉴스 사건",
                "grade": "한 매체 보도",
                "fact": "원자력안전위원회가 SMR 인허가 전 사전검토제를 본격적으로 시행합니다."
              },
              {
                "day": "2026-11-25",
                "kind": "보도자료",
                "grade": "공식",
                "fact": "미국 원자력규제위원회는 미시간주 소형모듈원전 건설 허가 신청서 2단계를 접수하고 공개했습니다."
              }
            ]
          }
        ],
        "counter": "11월 24일 한화투자증권은 10월 체코 원전 협상이 결렬되면서 관련주들의 주가가 조정을 받았다고 밝혔다.",
        "same_dart": [
          "(유가)한전기술 - [기재정정]단일판매ㆍ공급계약체결 [매출 대비 43.82%]"
        ],
        "claims": [
          {
            "claim": "원전 정비 공시를 이행한 수산인더스트리의 시장 대비 초과 수익률 검증",
            "measure": "수산인더스트리",
            "baseline": "코스피",
            "win_if": "measure 평균 수익률이 baseline보다 +3%p 이상",
            "after_days": 14,
            "reader": "읽음"
          }
        ]
      },
      {
        "title": "로봇 인프라 수주 공시 및 주요 IT 기업의 휴머노이드 로봇 기술 생태계 확장",
        "steps": [
          {
            "kind": "팩트",
            "text": "11월 24일 공시에 따르면 엠엑스로보틱스는 Reliance New Solar Energy Limited와 매출 대비 54.99% 규모의 물류창고 자동화(ASRS) 공급계약을 체결했다.",
            "refs": [
              {
                "day": "2026-11-24",
                "kind": "공시",
                "grade": "공식",
                "fact": "엠엑스로보틱스 [기재정정]단일판매ㆍ공급계약체결: ASRS Of Product Warehouse Reliance New Solar Energy Limited (매출 대비 54.99%)"
              }
            ]
          },
          {
            "kind": "팩트",
            "text": "머니투데이 보도에 따르면 삼성전자가 반도체 부문 임원 인사에서 HBM과 로봇 분야 인재를 중용했다. 유진투자증권은 삼성전자가 내년 CES에서 두 가지 타입의 휴머노이드를 공개할 것으로 예상된다고 밝혔다. 유안타증권은 레인보우로보틱스가 2026년에 여러 상장사와 인공지능 및 로봇 기술 협력을 위한 양해각서를 체결했다고 밝혔다.",
            "refs": [
              {
                "day": "2026-11-25",
                "kind": "뉴스 사건",
                "grade": "한 매체 보도",
                "fact": "삼성전자가 반도체 부문에서 임원 70명을 발탁하며 HBM과 로봇 분야 인재를 중용했다."
              },
              {
                "day": "2026-11-25",
                "kind": "리포트",
                "grade": "기관 의견",
                "fact": "삼성전자가 내년 CES에서 두 가지 타입의 휴머노이드를 공개할 것으로 예상되며, 기니 시만두 광산의 철광석 수출이 늘어나고 있습니다."
              },
              {
                "day": "2026-11-26",
                "kind": "리포트",
                "grade": "기관 의견",
                "fact": "유안타증권은 레인보우로보틱스가 2026년에 여러 상장사와 인공지능 및 로봇 기술 협력을 위한 양해각서를 체결했다고 밝혔다."
              }
            ]
          },
          {
            "kind": "추정·연결",
            "text": "산업용 물류 자동화 로봇 계약이 실제 공시 매출로 확인되는 가운데, 대기업의 로봇 전담 인재 채용과 전문 로봇기업과의 협업 체계 구축이 휴머노이드 상용화를 앞당기는 모멘텀으로 작용하고 있다.",
            "refs": [
              {
                "day": "2026-11-24",
                "kind": "공시",
                "grade": "공식",
                "fact": "엠엑스로보틱스 [기재정정]단일판매ㆍ공급계약체결: ASRS Of Product Warehouse Reliance New Solar Energy Limited (매출 대비 54.99%)"
              },
              {
                "day": "2026-11-25",
                "kind": "뉴스 사건",
                "grade": "한 매체 보도",
                "fact": "삼성전자가 반도체 부문에서 임원 70명을 발탁하며 HBM과 로봇 분야 인재를 중용했다."
              },
              {
                "day": "2026-11-25",
                "kind": "리포트",
                "grade": "기관 의견",
                "fact": "삼성전자가 내년 CES에서 두 가지 타입의 휴머노이드를 공개할 것으로 예상되며, 기니 시만두 광산의 철광석 수출이 늘어나고 있습니다."
              },
              {
                "day": "2026-11-26",
                "kind": "리포트",
                "grade": "기관 의견",
                "fact": "유안타증권은 레인보우로보틱스가 2026년에 여러 상장사와 인공지능 및 로봇 기술 협력을 위한 양해각서를 체결했다고 밝혔다."
              }
            ]
          }
        ],
        "counter": "11월 25일 하나증권 리포트에 따르면 HL홀딩스 자회사 HL로보틱스의 부채비율은 194%로 전년 말 대비 74.9%p 상승하여 초기 로봇 연구개발 투자가 재무적 부담으로 작용하고 있음을 보여준다.",
        "same_dart": [
          "기가비스 단일판매ㆍ공급계약체결: 반도체 기판 수리장비 외 한국 반도체 기판 제조회사 (매출 대비 74%)",
          "네오셈 단일판매ㆍ공급계약체결: 반도체 검사장비(GEN6 SSD TESTER 외) NEOSEM TECHNOLOGY INC. (매출 대비 22.2%)",
          "유니테스트 단일판매ㆍ공급계약체결(자율공시): 반도체 검사장비 (GEN6 SSD TESTER) SK하이닉스 (매출 대비 5.2%)",
          "대성하이텍 단일판매ㆍ공급계약체결: 반도체 후공정 테스트용 부품 제작 장비 공급 계약 JIANGSU HANCHUANG MACHINERY CO., (매출 대비 23.63%)",
          "네오셈 단일판매ㆍ공급계약체결: CLT INTERFACE BOARD 삼성전자 (매출 대비 10.1%)"
        ],
        "claims": [
          {
            "claim": "로봇 수주 공시기업 및 대기업 협력 로봇 대표주들의 주가 초과 성과 측정",
            "measure": "엠엑스로보틱스, 레인보우로보틱스",
            "baseline": "코스닥",
            "win_if": "measure 평균 수익률이 baseline보다 +3%p 이상",
            "after_days": 30,
            "reader": "읽음"
          }
        ]
      }
    ],
    "source": "v2_secretary/data/flows/2026-11-26.json",
    "ledger": {
      "pending": [
        {
          "made": "2026-11-26",
          "due": "2026-12-10",
          "measure": "수산인더스트리",
          "baseline": "코스피",
          "win_if": "measure 평균 수익률이 baseline보다 +3%p 이상",
          "base_rate": 0.262,
          "status": "대기",
          "reason": ""
        },
        {
          "made": "2026-11-24",
          "due": "2026-12-24",
          "measure": "구리 가격",
          "baseline": "없음",
          "win_if": "+2.0% 이상 상승",
          "base_rate": 0.518,
          "status": "대기",
          "reason": ""
        },
        {
          "made": "2026-11-24",
          "due": "2026-12-24",
          "measure": "금양그린파워, GS건설",
          "baseline": "코스피",
          "win_if": "measure 평균 수익률이 baseline보다 +3%p 이상",
          "base_rate": 0.304,
          "status": "대기",
          "reason": ""
        },
        {
          "made": "2026-11-24",
          "due": "2026-12-24",
          "measure": "일진전기, 대한전선",
          "baseline": "코스피",
          "win_if": "measure 평균 수익률이 baseline보다 +3%p 이상",
          "base_rate": 0.422,
          "status": "대기",
          "reason": ""
        },
        {
          "made": "2026-11-24",
          "due": "2026-12-24",
          "measure": "프로텍, 기가비스, 테스, SFA반도체",
          "baseline": "코스닥",
          "win_if": "measure 평균 수익률이 baseline보다 +3%p 이상",
          "base_rate": 0.497,
          "status": "대기",
          "reason": ""
        },
        {
          "made": "2026-11-24",
          "due": "2026-12-24",
          "measure": "한울소재과학, SNT에너지, 오르비텍",
          "baseline": "코스닥",
          "win_if": "measure 평균 수익률이 baseline보다 +3%p 이상",
          "base_rate": 0.418,
          "status": "대기",
          "reason": ""
        },
        {
          "made": "2026-11-25",
          "due": "2026-12-25",
          "measure": "금양그린파워, 대한전선",
          "baseline": "코스피",
          "win_if": "measure 평균 수익률이 baseline보다 +3%p 이상",
          "base_rate": 0.352,
          "status": "대기",
          "reason": ""
        },
        {
          "made": "2026-11-25",
          "due": "2026-12-25",
          "measure": "미국 10년 국채 금리",
          "baseline": "없음",
          "win_if": "+0.10%p 이상 상승",
          "base_rate": 0.318,
          "status": "대기",
          "reason": ""
        },
        {
          "made": "2026-11-25",
          "due": "2026-12-25",
          "measure": "프로텍, 기가비스, 유니테스트",
          "baseline": "코스닥",
          "win_if": "measure 평균 수익률이 baseline보다 +3%p 이상",
          "base_rate": 0.455,
          "status": "대기",
          "reason": ""
        },
        {
          "made": "2026-11-25",
          "due": "2026-12-25",
          "measure": "한울소재과학, 한전기술, 현대건설",
          "baseline": "코스피",
          "win_if": "measure 평균 수익률이 baseline보다 +3%p 이상",
          "base_rate": 0.386,
          "status": "대기",
          "reason": ""
        },
        {
          "made": "2026-11-25",
          "due": "2026-12-25",
          "measure": "한진, 에코프로, 포스코퓨처엠",
          "baseline": "코스피",
          "win_if": "measure 평균 수익률이 baseline보다 +3%p 이상",
          "base_rate": 0.264,
          "status": "대기",
          "reason": ""
        },
        {
          "made": "2026-11-26",
          "due": "2026-12-26",
          "measure": "네오셈, 유니테스트",
          "baseline": "코스닥",
          "win_if": "measure 평균 수익률이 baseline보다 +3%p 이상",
          "base_rate": 0.366,
          "status": "대기",
          "reason": ""
        },
        {
          "made": "2026-11-26",
          "due": "2026-12-26",
          "measure": "엠엑스로보틱스, 레인보우로보틱스",
          "baseline": "코스닥",
          "win_if": "measure 평균 수익률이 baseline보다 +3%p 이상",
          "base_rate": 0.404,
          "status": "대기",
          "reason": ""
        },
        {
          "made": "2026-11-26",
          "due": "2026-12-26",
          "measure": "원/달러 환율",
          "baseline": "없음",
          "win_if": "-1.0% 이상 하락",
          "base_rate": null,
          "status": "채점 불가",
          "reason": "이름 못 찾음: 원, 달러 환율"
        },
        {
          "made": "2026-11-26",
          "due": "2026-12-26",
          "measure": "지엔씨에너지, 서진시스템",
          "baseline": "코스닥",
          "win_if": "measure 평균 수익률이 baseline보다 +3%p 이상",
          "base_rate": 0.516,
          "status": "대기",
          "reason": ""
        }
      ],
      "n_pending": 15,
      "graded": [],
      "n_graded": 0,
      "n_hit": 0,
      "expected_hit": null,
      "n_with_base": 0,
      "next_due": "2026-12-10",
      "source": "v2_secretary/data/claims.jsonl · v2_secretary/data/claims_graded.jsonl"
    }
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
  "default_wardrobe": "squeeze",
  "marks": {
    "repo": "",
    "got": [],
    "n_got": 0,
    "last_issue": null,
    "source": "v2_secretary/data/marks.jsonl"
  },
  "overview": {
    "in_total": {
      "val": 1473,
      "source": "v2_secretary/결과/문앞/2026-11-26_문앞교통정리_길별.json"
    },
    "new_total": {
      "val": 1313,
      "source": "v2_secretary/결과/문앞/2026-11-26_문앞교통정리_길별.json"
    },
    "old_seen": {
      "val": 160,
      "source": "v2_secretary/결과/문앞/2026-11-26_문앞교통정리_길별.json"
    },
    "seen_ledger_lines": {
      "val": 15126,
      "source": "v2_secretary/data/seen.jsonl"
    },
    "ai_calls_day": {
      "val": 141,
      "source": "v2_secretary/결과/2026-11-26_하루_전체.md"
    },
    "ai_fails_day": {
      "val": 84,
      "source": "v2_secretary/결과/2026-11-26_하루_전체.md"
    },
    "run_secs": {
      "val": 1625,
      "source": "v2_secretary/결과/2026-11-26_하루_전체.md"
    },
    "lanes": {
      "거푸집1": {
        "val": 119,
        "source": "v2_secretary/결과/문앞/2026-11-26_문앞교통정리_길별.json"
      },
      "거푸집2": {
        "val": 53,
        "source": "v2_secretary/결과/문앞/2026-11-26_문앞교통정리_길별.json"
      },
      "뉴스": {
        "val": 385,
        "source": "v2_secretary/결과/문앞/2026-11-26_문앞교통정리_길별.json"
      },
      "제외 보관함": {
        "val": 578,
        "source": "v2_secretary/결과/문앞/2026-11-26_문앞교통정리_길별.json"
      },
      "논문T": {
        "val": 75,
        "source": "v2_secretary/결과/문앞/2026-11-26_문앞교통정리_길별.json"
      },
      "모름": {
        "val": 103,
        "source": "v2_secretary/결과/문앞/2026-11-26_문앞교통정리_길별.json"
      }
    },
    "last_auto_run": {
      "day": "2026-11-26",
      "start": "2026-11-26 04:13:39",
      "by": "github",
      "where": "GitHub",
      "mode": "run",
      "end": "2026-11-26 04:40:45",
      "secs": 1627,
      "exit": 0,
      "result_md": true,
      "failed_stages": 0,
      "calls": 141,
      "result": "ok"
    },
    "last_auto_run_source": "v2_secretary/data/auto/runs.jsonl",
    "papers": {
      "day": "2026-11-26",
      "day_label": "11월 26일(오늘)",
      "made": "2026-11-26T05:24:07",
      "calls": 215,
      "same_day": true,
      "source": "v2_secretary/결과/논문/2026-11-26_논문.json"
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
          "id": "e261126-01",
          "rank_by_count": 1,
          "name": "한국투자저축은행 해킹",
          "easy": "한국투자금융지주 자회사인 한국투자저축은행에서 해킹 사고가 발생해 고객 8만6433명의 개인정보가 유출됐습니다. 저축은행 업권에서 발생한 정보 유출 사고 가운데 역대 최대 규모라는 말이에요. 쉽게 말하면 이번 사고로 8만6000명이 넘는 고객의 정보가 털린 셈입니다.",
          "quote": "한국투자저축은행 8만6천여명 개인정보 유출…업권 최대 규모",
          "member_count": 4,
          "sample_articles": [
            {
              "n": 1360,
              "title": "한국투자저축은행 8만6천여명 개인정보 유출…업권 최대 규모",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125165600002"
            },
            {
              "n": 1292,
              "title": "업계서 최대규모 해킹…8.6만 고객 정보 유출된 한국투자저축은행",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218530"
            },
            {
              "n": 1240,
              "title": "한국투자저축은행 8.6만명 개인정보 유출",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/2026112505211"
            },
            {
              "n": 1290,
              "title": "한투저축은행 해킹 사고… 8만6000명 정보 털렸다",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218769"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-02",
          "rank_by_count": 2,
          "name": "코스피 6%대 급락",
          "easy": "코스피가 25일 6% 넘게 급락해 4600대로 밀려났습니다. 전날 젠슨 황 복귀 소식으로 올랐던 상승분을 모두 반납한 건데요, 미국 반도체주가 급락하고 관세 우려가 겹쳤기 때문이라는 분석이에요. 쉽게 말하면 하루 만에 지수가 6% 이상 크게 떨어진 겁니다.",
          "quote": "코스피, 6%대 급락 4,697…전날 급등분 모두 반납(종합)",
          "member_count": 4,
          "sample_articles": [
            {
              "n": 1394,
              "title": "코스피, 6%대 급락 4,697…전날 급등분 모두 반납(종합)",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125133251008"
            },
            {
              "n": 1341,
              "title": "[속보] 삼전 시총 1000조 깨지고 하이닉스 11% 급락…코스피, 하루 만에 5000서 4600대로",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218153"
            },
            {
              "n": 1396,
              "title": "삼전닉스 9∼11% 급락…삼전, 시총 1천조원 하회(종합)",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125043951008"
            },
            {
              "n": 1287,
              "title": "[속보] 코스피, 6.16% 급락해 4697.51 마감…전날 급등분 반납",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/2026112597356"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-03",
          "rank_by_count": 3,
          "name": "대웅제약 항암신약 임상 승인",
          "easy": "대웅제약이 자체 개발한 항암신약 후보물질 'DWP216262'에 대해 식품의약품안전처로부터 임상 1상 승인을 받았습니다. 부작용 감소를 목표로 글로벌 개발에 시동을 걸었다는 건데요, 선택적 TEAD 저해 항암신약으로 본격적인 임상 진입에 나선 셈입니다.",
          "quote": "대웅제약, 자체 개발 항암신약 임상 1상 승인…부작용 감소가 목표",
          "member_count": 4,
          "sample_articles": [
            {
              "n": 1451,
              "title": "대웅제약, 자체 개발 항암신약 임상 1상 승인…부작용 감소가 목표 - 파이낸셜포스트",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE84Xzd2T19Qb2lMd3BRdnd4OXZJbWRLYXcyNW5oWUZpZlhyMDBtVUxOQ29FRTUzWG5GcUd1dkQ0cnp2MHFEYWd3ekhPemtfczdVNlc1NUM2QzJHYnNocTZhVHhTeDFSNy1SUkZwVkNoenl4S0dh?oc=5"
            },
            {
              "n": 1446,
              "title": "대웅제약, TEAD 선택적 항암제 ‘DWP216262’ 임상 1상 승인 - 메디컬투데이",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5jYWhNRnJtYXI0bjJQdXlMTU9xb3ZVNnExU3ZaX01oaEhtTy1tZ2lEVEJNc3BKX2ExTmQzVDdhbWllSmhfVVZ1dGtKbElROGVjQmFCMTNTRExlbmhfaWQ0LWtaWHNtMUtwWUFjTg?oc=5"
            },
            {
              "n": 1447,
              "title": "대웅제약, 선택적 TEAD 저해 항암신약 임상 1상 진입…글로벌 개발 시동 - www.ebn.co.kr",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBEcjdIcUJRN1ZSaV9ybEswYlRscWtydzhPTDVHbko0aWNLZjBIM1lFUTJDOVdCLWtyRGc5NVIxRnoxbjNUanNRQlVvR2dfLVh1TmZTdDNqZFNnWmJ6MVNDV193Q1NLYmJH?oc=5"
            },
            {
              "n": 1445,
              "title": "대웅제약, 표적 항암 신약 후보 물질 'DWP216262' 식약처 임상 1상 IND 승인 - 팜뉴스",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5Xam9PZDhDejdIcXdTZVoycDB2RWs2R0VDN2lPY2pVNGdrNVo2QVRSWXNtZkdVdXoycTNYdERkaGdHa3BheXpsaThoZm9HaF9FTWdlNENaS3lrc0NGYllnN3RFQ1pNc25aVzBLeQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-04",
          "rank_by_count": 4,
          "name": "미국 과잉생산 관세 예고",
          "easy": "미국이 한국을 포함한 14개 경제주체를 대상으로 과잉생산 관세 부과를 예고했습니다. 한국도 새로운 관세 압박 대상에 이름을 올렸지만, 기존 한미 합의에 따른 15% 상한은 유지된다는 겁니다. 쉽게 말하면 새로운 관세 압박 속에서도 한국은 15% 상한을 지킨 셈입니다.",
          "quote": "美 '과잉생산 관세' 발표 예고…",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 1233,
              "title": "美 '과잉생산 관세' 발표 예고…\"한국엔 15% 상한 유지\"",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/2026112506641"
            },
            {
              "n": 1291,
              "title": "[속보] 美, 한국 등 14개 경제주체에 ‘과잉생산 관세’ 예고",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/world/12218736"
            },
            {
              "n": 1350,
              "title": "역대급 대미흑자 관세 부메랑 피했다…15% 사수에 일단 안도",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261126002000003"
            }
          ],
          "flags": [
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-05",
          "rank_by_count": 5,
          "name": "미국 10월 PCE 물가 상승",
          "easy": "미국의 10월 개인소비지출(PCE) 물가가 전년 동월 대비 3.8% 상승했습니다. 예상치를 웃돌면서 연방준비제도의 12월 금리 인상 전망에 더욱 힘이 실렸다는 말이에요. 쉽게 말하면 물가 상승 때문에 12월 금리 인상이 확실시되는 분위기입니다.",
          "quote": "美 10월 PCE 물가 3.8%로 가속…연준 추가 금리 인상 불가피할 듯",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 157,
              "title": "美 10월 PCE 물가 3.8%로 가속…연준 추가 금리 인상 불가피할 듯 - 글로벌이코노믹",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQY1B4TDZyaEhLQkJzSm8tVWo1ZTZpNEFzS2JxMGJ3cUVqYzFyTVFqSTlDTWhhZEhtbktOZHZmQ2FMNVdHX21mdnAteWI5VTdPazZmaS1PaXl2ajBVTGgzUnBQVk9vWkxrYVBNdzg5dE9hRlNibnNPN0lXaVVreWUzQ2pnSHV1eWIz?oc=5"
            },
            {
              "n": 159,
              "title": "美 10월 PCE 물가 3.8% 상승… 12월 금리 인상 전망에 힘 실려 - 조선일보",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOaUJrN0NjTVBMOFVNVHBCWXJ6U3B3YUxMVEpGNWtqLUZNLU12VHc1VWVBUFJ3UzVHN1FhS0xJaU4wNlNCRk5qTnZqbE5IVHZ4NkNMYTRmbWo2eVJZSUk2a00zZ0ZnX0tFU0QtRUdBckl2TmxCTnhlU25DbXN2Z3ljaC0ySUo4WXV6?oc=5"
            },
            {
              "n": 161,
              "title": "美 10월 개인소비물가 3.8%↑…'12월 금리 인상' 굳히기 - 머니투데이 - 머니투데이",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE52czgtYnBSSk5NZ0w3OGlKVExXYmFlZ0tsY2RFTGxPOUF6dm1tY194Wlc1RG5ha1VzVUlwMkVLUnFUQkg5ZzdZNW5nckZPTV8yNW1DQ2VyMElZWWdqbXhBYXdDSVJ5RDdy0gFuQVVfeXFMUERtTE5RMk5zb1FQX1czb3RhRlJmdHo5V0c2RXdzanNwSXlaUG5jVTV3Y3JKUkc0M091RVlpX2Fwazl2emxSd0VpdEJqdGdVTlJ2dGZJSnNMdmZfdkpxX0pvemJiWndtb2ZBWWlvVGc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-06",
          "rank_by_count": 6,
          "name": "효성굿스프링스 ASME 인증",
          "easy": "효성굿스프링스가 원전 공급용 펌프에 대해 미국기계학회(ASME) 인증을 획득했습니다. 조현준 효성 회장의 주도 아래 전 제품 인증을 받으면서 체코 및 소형모듈원자로(SMR) 수주를 겨냥하고 있다는 말이에요. 쉽게 말하면 해외 원전 수주를 위한 발판을 마련한 셈입니다.",
          "quote": "효성굿스프링스, ‘원전 공급용 펌프’ 미국 기계 학회 인증 획득…해외 수주 기대",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 115,
              "title": "효성굿스프링스, ‘원전 공급용 펌프’ 미국 기계 학회 인증 획득…해외 수주 기대 - 서울STV뉴스",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE51Q2UzQ2EzbWM1LUlLZGlyWXFLcExnYnZLUFNLY24yM0FBR3pGTlRTQUhJZzU4em45anVDbmVieU9CTVNRR3ZFNDhsQm1hNHRuYUNxNl9DcDk4ZnBtdG5VUlA3aUhMOUk?oc=5"
            },
            {
              "n": 108,
              "title": "조현준 효성 회장, 효성굿스프링스 원전용 펌프 전 제품 ASME 인증…체코·SMR 수주 겨냥 - CEO저널",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTFBEc0llaGRZaTgwaFh0YWJ1WDdncHRVYmUtOEMtYmMxZldlc2gzYlBfTHlFUGZUVHJvcUREUkxyNWpEVFBYLVBvUEZXRGdRa2pBdHdTa0tuOUNTZnNJN2FZclhTakxEY0I0Tndj0gFrQVVfeXFMUERzSWVoZFlpODBoWHRhYnVYN2dwdFViZS04Qy1iYzFmV2VzaDNiUF9MeUVQZlRUcm9xRERSTHI1akRUUFgtUG9QRldEZ1FrakF0d1NrS245Q1Nmc0k3YVlyWFNqTERjQjROd2M?oc=5"
            },
            {
              "n": 111,
              "title": "효성굿스프링스, 원전용 펌프 ASME 인증 획득 - 디일렉",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE5NelM4WEFWSXVnZ1ItS0Y3ZWhpc1hXYjZqdEIxY2FSaHFUeTZJR1ZubUVINTBEOS1xNVdMZ1BmaHlaa3ZVNDEzclBCaHJSazdJc2RwUjhQSi1PVlJyV2NEazVjdnZYUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-07",
          "rank_by_count": 7,
          "name": "한화오션 호위함 수주 무산",
          "easy": "한화오션이 태국의 차세대 호위함 도입 사업에 대한 우선협상대상자 지위를 상실했습니다. 약 6800억원 규모의 태국 해군 호위함 수주가 무산됐다는 건데요, 결국 우선협상자 자격을 잃으면서 아쉬움을 남기게 됐습니다.",
          "quote": "한화오션 \"태국 해군 호위함 우선협상대상자 지위 상실\"",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 1380,
              "title": "한화오션 \"태국 해군 호위함 우선협상대상자 지위 상실\"",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125179800003"
            },
            {
              "n": 1264,
              "title": "한화오션, 태국 해군 호위함 사업 우선협상자 지위 상실 [주목 e공시]",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/2026112504376"
            },
            {
              "n": 1238,
              "title": "한화오션, 6800억 태국 호위함 수주 무산…우선협상대상자 지위 상실",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/202611250461i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-08",
          "rank_by_count": 8,
          "name": "SK하이닉스 용인 공장 사고",
          "easy": "용인 SK하이닉스 사업장 폐수처리장에서 근로자 추락 사망 사고가 발생했습니다. 경찰과 관계 당국이 정확한 사고 경위를 조사하고 있다는 소식이에요. 쉽게 말하면 현장에서 안타까운 인명 사고가 발생한 셈입니다.",
          "quote": "[단독] SK하이닉스 용인 사업장서 노동자 추락 사망",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 85,
              "title": "[단독] SK하이닉스 용인 사업장서 노동자 추락 사망 - 경인일보",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBvMldiTU4ta3hsVGR6ejdueHVIRmgzeTdFREFsaG5nSlFDVGVReHA1clZpLVR4ZHcxRlZYNl9vTFNxMlJPMDc5QTlQdFdZMTRMdFE?oc=5"
            },
            {
              "n": 88,
              "title": "용인 SK하이닉스 사업장 폐수처리장서 추락 사고…근로자 1명 숨져 - 경기신문",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFBWLV9SSVQ1RGFRTkxfODczUzNpMXBGS1laZmxBa0FXdEFreGd0c2NLMjdVYTFmNV9uQ0FBcU5uSmR3R1Vwc1hlTC1JelVFb1RsYWxhSVhJTXB0Sldza05mRXl3?oc=5"
            },
            {
              "n": 89,
              "title": "SK하이닉스 용인 사업장서 노동자 추락사고 발생 - 기호일보",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1ROUs2Z01YSk1uLUxMZUw1TzV5ODBiUndxMjZqUExfWTZ0WVhoU1JIVXlVcTdLdkhVN1lRcFJTdUJsd2JzZHI3dmVHNk5leFVlUk1LdEdMdjRwTjYwZE1HeW1UdzBNREp6TVl4RnZFNA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-09",
          "rank_by_count": 9,
          "name": "인천 국제양자산업전시회 개막",
          "easy": "아시아 최초의 글로벌 양자산업 전시회인 '2026 IQT KOREA'가 인천 송도에서 개막했습니다. 77개 기업이 참가해 글로벌 기술 경쟁을 벌이며 양자 기술 협력을 본격화하고 있다는 건데요. 쉽게 말하면 아시아에서 처음으로 큰 양자산업 행사가 열린 셈입니다.",
          "quote": "글로벌 양자산업 전시회 ‘2026 IQT KOREA’, 아시아 최초 인천 송도서 개막",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 1441,
              "title": "글로벌 양자산업 전시회 ‘2026 IQT KOREA’, 아시아 최초 인천 송도서 개막 - 복지투데이",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9ScnU4MjBscWR3SDhoM3VEelVYb25RbGNUelRyOTV3NGVkMmFBaFI4T1RSM19STThzNVJUWUJBMlBSR3hLUjNOYkVhNUhYd3RDOXZSQ09uSmVjXzN5NWZZUlBFWEZJMTgxZnYyLQ?oc=5"
            },
            {
              "n": 1437,
              "title": "인천경제청, 아시아 첫 양자산업 전시회 인천 송도서 개막…글로벌 기술협력 본격화 - 서프라이즈뉴스",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBvYWxQTk5tb3JHWTBScFZMRE14TlBnUUNBRUxCQS04Y2dibWh5YWsyam52R0lLV0w0WWduYnBlcU9rQ3RWdV9NbERPODNVYmhJRGdiZVRsQ3RQX1hIdE5jUEJBOFdieFMyaHZMTHBuTQ?oc=5"
            },
            {
              "n": 1438,
              "title": "아시아 첫 국제양자산업전시회 인천 송도서 개막··· 기업 77개 참가 - 인천투데이",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9WUUFTVGhUZmxqVW9pUmJ3Y25TUXR6ZG0tNndrVThoVEtlQXVTN3dVUTgwV3N5OFFVV0pQeFBSeVdvZ01SekNGMkQtYzAtQzUwUElmMkcxam9ZUGE2MGpQZ1VKTXNZRTdnUXhJU1VHUlQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-10",
          "rank_by_count": 10,
          "name": "아이씨에이치 배터리 소재 공략",
          "easy": "아이씨에이치가 미국 친환경 정책에 발맞춰 ESS 배터리 소재 공급을 확대하고 있습니다. 난연 PU폼을 활용해 SK온의 배터리 소재 품질검증을 통과했다는 말이에요. 북미 시장 공략에 본격적으로 속도를 내는 셈입니다.",
          "quote": "아이씨에이치, 美 친환경 정책 기대감…ESS 배터리 소재 공급 확대",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 188,
              "title": "아이씨에이치, 美 친환경 정책 기대감…ESS 배터리 소재 공급 확대 - 뉴시스",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5PcnRFUDV2OXRpUTFad3d1d3J0Rm5BTmZOd0RQd3c3YTBJRjk0R21OLXFIUU5wZzRIM3RYbUdZVHEyQjlfS3NfWkhzYm5jMEl0TkhsNmZpY0w5aU8zSkktddIBeEFVX3lxTE16MF8tUmNhemRJbkcwZl9CY3ROc0h0WU9SUVhZR3p4cV9OTUpfY0JMenlpUzFmN1dfVnVLWGRfa3Y4NVJvVVBmSlh2TGd0TFB3Q0lDSTdnajA4RFVGbTRQRFlpWTJRR0JReFR1ZTdwYkhDS1NvaTRDQw?oc=5"
            },
            {
              "n": 189,
              "title": "아이씨에이치, 美 ESS 시장 공략 확대…SK온 배터리 소재 품질검증 통과 - 팝콘뉴스",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBZRDlZMWtXcktkdGJZNGNESTRJYzREblM1OUxlcnpNVDZ6N2FneXZWODVwZU1nM3Zsa1Y1NzRmMmZaSkZYZ0hUbGluUWRRRmtCRjhwSFZjSE9mODRveVZTak1KVlFsaGtBQ0xkWUo0RdIBckFVX3lxTE0tREphT2NCTTBveTZMUkQ0YV9CUk91Z2ZPeVVWMlo4NDFYWVQySFEtWXdldUlRcy15X1pTdm81RnNjZnNWTXBONEE4R3JveWFhakJaMExiSHRnbUdpUnF6cnhLYzI2MnBUajNrT3pDTnptUQ?oc=5"
            },
            {
              "n": 190,
              "title": "[더벨]아이씨에이치, 난연 PU폼으로 미국 ESS 시장 공략 - 머니투데이 - 머니투데이",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE93UVh4RzFnNWY5a2JqU0NSZm5hbl9CeUsxQm5faHhNdU5KMDdRRk5WemxGaXJBZG0wQnhBa0dyQkFIV0FkYTRKWWJjc1B2YVRfLWdhYXl0UFFieTNzdktmZUlUMG9salhybmVnTXdR0gFuQVVfeXFMT3dRWHhHMWc1ZjlrYmpTQ1JmbmFuX0J5SzFCbl9oeE11TkowN1FGTlZ6bEZpckFkbTBCeEFrR3JCQUhXQWRhNEpZYmNzUHZhVF8tZ2FheXRQUWJ5M3N2S2ZlSVQwb2xqWHJuZWdNd1E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
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
          "source": "v2_secretary/결과/문앞/2026-11-26_문앞교통정리_길별.json"
        },
        "dart_day_total": {
          "val": 110,
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        "dart_contracts": {
          "val": 17,
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        "dart_others": {
          "val": 93,
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        "fred_series": {
          "val": 28,
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        "bok_rows_total": {
          "val": 59,
          "source": "v2_secretary/결과/거푸집1/한은_지표표.csv"
        },
        "bok_rows_day": {
          "val": 0,
          "source": "v2_secretary/결과/거푸집1/한은_지표표.csv"
        }
      },
      "dart_contracts": [
        {
          "company": "로체시스템즈",
          "market": "코스닥",
          "what": "제조장비 공급계약 체결의 건",
          "amount_won": "24,601,627,904",
          "pct_of_sales": "19.70",
          "pct_check": "맞음",
          "counterparty": "-",
          "region": "미국",
          "period": "2026-11-24~2027-11-10",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125900755",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "삼호개발",
          "market": "유가",
          "what": "정정신고(보고)",
          "amount_won": "81,438,500,000",
          "pct_of_sales": "22.50",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "서울시 동대문구 장안동 일대",
          "period": "2024-11-27~2029-09-01",
          "changes": "5. 계약내역 - 계약금액(원): 79,305,600,000 → 81,438,500,000 ; 6. 계약내역 - 매출액대비(%): 21.91 → 22.50",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125800726",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "STX엔진",
          "market": "유가",
          "what": "정정신고(보고)",
          "amount_won": "137,538,940,000",
          "pct_of_sales": "17.4",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "중국",
          "period": "2026-07-27~2030-06-16",
          "changes": "2. 계약내역-계약금액(원): 78,593,680,000 → 137,538,940,000 ; 2. 계약내역-매출액대비(%): 9.96 → 17.4 ; 5. 계약기간-종료일: 2029-07-25 → 2030-06-16 ; 9. 기타 투자판단과 관련한 중요사항: - 상기 \"계약금액(원)\"은 계약서상 총 계약금액 USD 53,600,000를 2026년07월27일 매매기준율(1466.30원)로 환산한 금액이 → - 상기 \"계약금액(원)\"은 계약서상 총 계약금액 USD 93,800,000를 2026년07월27일 매매기준율(1466.30원)로 환산한 금액이",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125800644",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "한성크린텍",
          "market": "코스닥",
          "what": "평택 P5 Ph1 초순수 복합동 설비공사A",
          "amount_won": "26,359,262,000",
          "pct_of_sales": "13.19",
          "pct_check": "맞음",
          "counterparty": "삼성이앤에이(주)",
          "region": "대한민국",
          "period": "2026-06-17~2027-07-31",
          "changes": "2. 계약내역 확정 계약금액 계약금액 총액(원) 매출액 대비(%): 25,896,231,000 25,896,231,000 12.96 → 26,359,262,000 26,359,262,000 13.19",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125900662",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "한성크린텍",
          "market": "코스닥",
          "what": "평택 P4 Ph4 초순수 복합동 설비공사A",
          "amount_won": "17,767,585,000",
          "pct_of_sales": "11.45",
          "pct_check": "맞음",
          "counterparty": "삼성이앤에이(주)",
          "region": "대한민국",
          "period": "2025-11-05~2026-12-31",
          "changes": "2. 계약내역 확정 계약금액 계약금액 총액(원) 매출액 대비(%): 17,638,021,000 17,638,021,000 11.36 → 17,767,585,000 17,767,585,000 11.45",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125900659",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "탑선",
          "market": "코넥스",
          "what": "미국 텍사스 콘초 태양광 발전소 456.82MW 모듈 공급계약 체결",
          "amount_won": "194,615,972,319",
          "pct_of_sales": "176.92",
          "pct_check": "맞음",
          "counterparty": "Hyundai Engineering & Construction Co., Ltd.",
          "region": "해외(미국)",
          "period": "2025-07-09~2027-01-14",
          "changes": "2. 계약내역 中 계약금액(원): 191,547,360,000 → 194,615,972,319 ; 2. 계약내역 中 매출액대비(%): 174.13 → 176.92 ; 9. 기타 투자판단과 관련한 중요사항: - 상기 2. 계약금액은 USD 140,020,000(VAT제외)이며, 2025년 07월 09일자 서울외국환중개㈜의 매매기준율 1,368.00을 → - 상기 2. 계약금액은 USD 142,263,137.66(VAT제외)이며, 2025년 07월 09일자 서울외국환중개㈜의 매매기준율 1,368.",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125600548",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "나라스페이스테크놀로지",
          "market": "코스닥",
          "what": "K-waterSAT 수자원 초소형 군집 위성 개발 사업",
          "amount_won": "10,112,272,729",
          "pct_of_sales": "76.39",
          "pct_check": "맞음",
          "counterparty": "한국수자원공사",
          "region": "대한민국",
          "period": "2026-11-25~2030-03-08",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125900570",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "계룡건설산업",
          "market": "유가",
          "what": "정정신고(보고)",
          "amount_won": "161,858,400,000",
          "pct_of_sales": "5.44",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "인천광역시 중구 운서동 3231-3 일원",
          "period": "2024-12-20~2027-02-21",
          "changes": "2. 계약내역 - 계약금액: 158,110,370,000 → 161,858,400,000 ; 2. 계약내역 - 매출액대비(%): 5.31 → 5.44 ; 9. 기타 투자판단과 관련한 중요사항: - 상기 계약금액은 총 계약금액 158,110,370,000원 중 당사지분(100%) 해당금액으로 부가가치세가 포함된 금액입니다. → - 상기 계약금액은 총 계약금액 161,858,400,000원 중 당사지분(100%) 해당금액으로 부가가치세가 포함된 금액입니다.",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125800388",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "현대건설",
          "market": "유가",
          "what": "단일판매ㆍ공급계약 체결",
          "amount_won": "882,603,660,000",
          "pct_of_sales": "2.8",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "서울특별시 영등포구 여의도동 42번지, 42-1번지 일대",
          "period": "-~-",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125800307",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "스트라드비젼",
          "market": "코스닥",
          "what": "전방카메라를 통한 인식 솔루션 납품",
          "amount_won": "3,752,541,237",
          "pct_of_sales": "20.7",
          "pct_check": "맞음",
          "counterparty": "ASUX(Aptiv Adv. Safety & User Experience) Components India Pvt Ltd",
          "region": "인도",
          "period": "2026-08-19~2027-06-16",
          "changes": "5. 계약기간 종료일: 2026-11-25 → 2027-06-16 ; 10. 기타 투자판단에 참고할 사 항: 2) 2026년 7월 27일 환율 기준 → 2) 2026년 8월 19일 환율 기준 ; 10. 기타 투자판단에 참고할 사 항: 3)계약 종료일은 대금지급일입니다. → 3) 계약 종료일은 청구일로부터 90일입니다.",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125900284",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "네오셈",
          "market": "코스닥",
          "what": "CLT INTERFACE BOARD",
          "amount_won": "6,469,403,200",
          "pct_of_sales": "10.1",
          "pct_check": "맞음",
          "counterparty": "삼성전자",
          "region": "국내",
          "period": "2026-11-25~2027-03-31",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125900268",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "경동인베스트",
          "market": "유가",
          "what": "단일판매ㆍ공급계약 체결",
          "amount_won": "36,250,000,000",
          "pct_of_sales": "52.36",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "울산광역시 울주군 온산읍 산암리 148-1",
          "period": "2026-11-24~2027-11-15",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125800208",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "코오롱",
          "market": "유가",
          "what": "정정신고(보고)",
          "amount_won": "1,015,012,900,000",
          "pct_of_sales": "39.01",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "경기도 평택시 고덕동 1696 일원(평택 고덕 산업단지 A1 블록)",
          "period": "2023-02-28~2029-01-31",
          "changes": "2. 계약내역 中 계약금액(원): 518,346,400,000 → 1,015,012,900,000 ; 2. 계약내역 中 매출액대비(%): 19.92 → 39.01 ; 5. 계약기간 中 종료일: 2029-04-30 → 2029-01-31 ; 9. 기타 투자판단과 관련한 중요사항: - 공사기간은 착공일인 23년 2월 28일로부터 약 74개월이며, 시스템상 계약기간은 29년 8월 31까지 입니다. → - 공사기간은 착공일인 23년 2월 28일로부터 약 71개월이며, 시스템상 계약기간은 29년 12월 31까지 입니다.",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125800198",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "서진시스템",
          "market": "코스닥",
          "what": "고체산화물 연료전지(SOFC) 모듈 및 부품 생산",
          "amount_won": "165,615,640,800",
          "pct_of_sales": "15.53",
          "pct_check": "맞음",
          "counterparty": "Bloom Energy Corporation",
          "region": "미국",
          "period": "2026-11-24~2027-12-19",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125900186",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "코오롱글로벌",
          "market": "유가",
          "what": "정정신고(보고)",
          "amount_won": "1,015,012,900,000",
          "pct_of_sales": "39.01",
          "pct_check": "맞음",
          "counterparty": "",
          "region": "경기도 평택시 고덕동 1696 일원(평택 고덕 산업단지 A1 블록)",
          "period": "2023-02-28~2029-01-31",
          "changes": "2. 계약내역 中 계약금액(원): 518,346,400,000 → 1,015,012,900,000 ; 2. 계약내역 中 매출액대비(%): 19.92 → 39.01 ; 5. 계약기간 中 종료일: 2029-04-30 → 2029-01-31 ; 9. 기타 투자판단과 관련한 중요사항: - 공사기간은 착공일인 23년 2월 28일로부터 약 74개월이며, 시스템상 계약기간은 29년 8월 31까지 입니다. → - 공사기간은 착공일인 23년 2월 28일로부터 약 71개월이며, 시스템상 계약기간은 29년 12월 31까지 입니다.",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125800178",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "지엔씨에너지",
          "market": "코스닥",
          "what": "김포데이터센터 가스터빈 비상발전기외",
          "amount_won": "39,364,100,000",
          "pct_of_sales": "15.0",
          "pct_check": "맞음",
          "counterparty": "디엘이엔씨(주)",
          "region": "국내",
          "period": "2026-11-25~2028-10-28",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125900184",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "대성하이텍",
          "market": "코스닥",
          "what": "반도체 후공정 테스트용 부품 제작 장비 공급 계약",
          "amount_won": "22,496,240,000",
          "pct_of_sales": "23.63",
          "pct_check": "맞음",
          "counterparty": "JIANGSU HANCHUANG MACHINERY CO., LTD",
          "region": "중국",
          "period": "2026-11-24~2028-08-31",
          "changes": "",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125900156",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        }
      ],
      "dart_others": [
        {
          "company": "SK증권제12호스팩",
          "market": "코스닥",
          "kind": "주권매매거래정지 (상장폐지 사유발생)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125900789",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "유안타제16호스팩",
          "market": "코스닥",
          "kind": "주권매매거래정지 (상장폐지 사유발생)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125900792",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "서희건설",
          "market": "코스닥",
          "kind": "타인에대한채무보증결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125900786",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "우진비앤지",
          "market": "코스닥",
          "kind": "최대주주변경",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125900782",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "우진비앤지",
          "market": "코스닥",
          "kind": "증권발행결과(자율공시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125900774",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "지에이이노더스",
          "market": "코넥스",
          "kind": "주요사항보고서(자기주식처분결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125000777",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "온타이드",
          "market": "유가",
          "kind": "[기재정정]주요사항보고서(자기주식취득결정)",
          "changes": "4. 보유예상기간: 2026년 11월 25일 → -",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125000769",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "씨씨에스",
          "market": "코스닥",
          "kind": "주권매매거래정지해제 (상장폐지에 따른 정리매매 개시)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125900759",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "대한광통신",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(회사합병결정)",
          "changes": "[합병관련 주요사항 상세기재]   1. 합병의 개요       1)합병에 관한 기본사항          라.: 2026년 01월 29일 → 2027년 01월 29일",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125000735",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "삼성전기",
          "market": "유가",
          "kind": "주식소각결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125800735",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "온타이드",
          "market": "유가",
          "kind": "[기재정정]주식소각결정",
          "changes": "7. 소각예정일: 2026-11-25 → -",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125800736",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "SK아이이테크놀로지",
          "market": "유가",
          "kind": "[기재정정]주요사항보고서(회사합병결정)",
          "changes": "18. 기타 투자판단과 관련한 중요사항: (주1) 정정 전 → (주1) 정정 후",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125000740",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "감성코퍼레이션",
          "market": "코스닥",
          "kind": "자기주식취득결과보고서",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125000742",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "아이윈",
          "market": "코스닥",
          "kind": "기타경영사항(자율공시) (소규모합병 승인 이사회 결의(주주총회 갈음) 결과보고)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125900707",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "하이퍼코퍼레이션",
          "market": "코스닥",
          "kind": "주요사항보고서(자기전환사채만기전취득결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125000730",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "현대지에프홀딩스",
          "market": "유가",
          "kind": "주요사항보고서(타법인주식및출자증권양수결정)(자회사의 주요경영사항)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125800701",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "현대그린푸드",
          "market": "유가",
          "kind": "주요사항보고서(타법인주식및출자증권양수결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125000694",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "그린플러스",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(전환사채권발행결정)",
          "changes": "5. 사채만기일: 2029년 11월 25일 → 2029년 12월 09일 ; 6. 이자지급방법: 주1) 정정 전 → 주1) 정정 후 ; 7. 원금상환방법: 2029년 11월 25일 → 2029년 12월 09일 ; 9. 전환에 관한 사항: 주2) 정정 전 → 주2) 정정 후 ; 9-1. 옵션에 관한 사항: 2027년 11월 25일 → 2027년 12월 09일 ; 11. 청약일: 2026년 11월 25일 → 2026년 12월 09일 ; 12. 납입일: 2026년 11월 25일 → 2026년 12월 09일 ; 17. 이사회결의일(결정일): 2026년 10월 26일 → 2026년 11월 25일 ; 17. - 감사(감사위원) 참석여부: 참석 → 불참 ; 23. 기타 투자판단에 참고할 사항: 주3) 정정 전 → 주3) 정정 후 ; 【미상환 주권 관련 사채권에 관한 사항】: 주4) 정정 전 → 주4) 정정 후",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125000689",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "엑스플러스",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(전환사채매수선택권행사자지정)",
          "changes": "6. 전환사채매수선택권 행사자 지정내역- 매수선택권 행사자 지정(양도) 전환사채의 권면(전자등록) 금액(원): 4,200,000,00014,000,000,00030 → - ; 7. 행사자 지정일(양도일자): 2025년 07월 14일 → - ; 8. 행사자 지정대가 (양도금액)- 금액(원)- 산정근거: 4,284,000,000권면금액의 2%에 해당하는 금액 가산 → - ; 9. 행사자 지정대가(양도대금) 수령(예정)일: 2025년 07월 14일 → - ; 10. 전환에 관한 사항- 전환에 따라 발행할 주식수: 6,677,265 → - ; 10. 전환에 관한 사항- 주식총수 대비 비율(%): 6.07 → - ; 12. 기타 투자판단에 참고할 사항: 1) 정정 전 → 1) 정정 후 ; 【대상자별 선정경위, 거래내역, 지정대가 등】【대상자 중 법인 또는 단체가 포함된 경우】: 2) 정정 전 → 2) 정정 후",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125000716",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "대한광통신",
          "market": "코스닥",
          "kind": "해산사유발생(종속회사의주요경영사항)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125900688",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "프리티",
          "market": "유가",
          "kind": "[기재정정]주요사항보고서(유상증자결정)",
          "changes": "9. 납입일: 2026년 11월 25일 → 2027년 03월 12일 ; 10. 신주의 배당기산일: 2026년 01월 01일 → 2027년 01월 01일 ; 12. 신주의 상장 예정일: 2026년 12월 10일 → 2027년 03월 29일 ; 20. 기타 투자판단에참고할 사항: 정정 전1) → 정정 후1)",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125000670",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "SK이노베이션",
          "market": "유가",
          "kind": "[첨부정정]증권신고서(합병)",
          "changes": "",
          "numbers": "",
          "body_from": "공시 화면",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125000711",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "대한광통신",
          "market": "코스닥",
          "kind": "회사합병결정(종속회사의주요경영사항)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125900681",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "벡트로보틱스",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(유상증자결정)",
          "changes": "작성책임자: 정 승 한 → 김 우 섭 ; 1. 신주의 종류와 수 - 보통주식 (주): 730,460 → 518,941 ; 4. 자금조달의 목적 - 운영자금 (원): 999,999,740 → 999,999,307 ; 6. 신주 발행가액 - 보통주식 (원): 1,369 → 1,927 ; 7. 기준주가 - 보통주식 (원): 1,520 → 2,140 ; 20. 기타 투자판단에 참고할 사항 - 나. 발행가액 산정방법: 주1) 정정 전 → 주2) 정정 후 ; 라. 기타사항: 주3) 정정 전 → 주4) 정정 후 ; 【제3자배정 대상자별 선정경위,    거래내역, 배정내역 등】 - 배정주식수 (주): 730,460 → 518,941",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125000688",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "동부건설",
          "market": "유가",
          "kind": "타인에대한채무보증결정",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125800665",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "로지스몬",
          "market": "코넥스",
          "kind": "소송등의제기ㆍ신청(경영권분쟁소송)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125600628",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "대한광통신",
          "market": "코스닥",
          "kind": "주요사항보고서(회사합병결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125000672",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "아톤",
          "market": "코스닥",
          "kind": "주요사항보고서(자기주식처분결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125000651",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "SK이노베이션",
          "market": "유가",
          "kind": "[기재정정]증권신고서(합병)",
          "changes": "III. 주요일정: (주1) 정정 전 → (주1) 정정 후 ; V. 당사회사에 관한 사항 요약: (주2) 정정 전 → (주2) 정정 후 ; VI. 그 외 추가사항: 합병존속회사인 SK이노베이션(주)의 정정 주요사항보고서는 2026년 10 월 28 일에 전자공시되었으니 참조하시기 바랍니다. → 합병존속회사인 SK이노베이션(주)의 정정 주요사항보고서는 2026년 11 월 25 일에 전자공시되었으니 참조하시기 바랍니다. ; 1. 합병의 목적가. 합병의 상대방과 배경(3) 합병관련 의사결정 과정 및 내용(3-1) 법무부 가이드라인 : (주3) 정정 전 → (주3) 정정 후 ; 1. 합병의 목적가. 합병의 상대방과 배경(3) 합병관련 의사결정 과정 및 내용(3-2) 특별위원회 설치 및: (주4) 정정 전 → (주4) 정정 후 ; 1. 합병의 목적가. 합병의 상대방과 배경(3) 합병관련 의사결정 과정 및 내용(3-2) 특별위원회 설치 및: (주5) 정정 전 → (주5) 정정 후 ; 1. 합병의 목적가. 합병의 상대방과 배경(3) 합병관련 의사결정 과정 및 내용(3-2) 특별위원회 설치 및: 합병신주 배정기준일(2026년 12월 31일) → 합병신주 배정기준일(2027년 01월 29일) ; 1. 합병의 목적가. 합병의 상대방과 배경(3) 합병관련 의사결정 과정 및 내용(3-2) 특별위원회 설치 및: (주6) 정정 전 → (주6) 정정 후 ; 1. 합병의 목적가. 합병의 상대방과 배경(3) 합병관련 의사결정 과정 및 내용(3-2) 특별위원회 설치 및: (주7) 정정 전 → (주7) 정정 후 ; 1. 합병의 목적가. 합병의 상대방과 배경(3) 합병관련 의사결정 과정 및 내용(3-3) 독립적 외부전문가의: (주8) 정정 전 → (주8) 정정 후 ; 1. 합병의 목적가. 합병의 상대방과 배경(3) 합병관련 의사결정 과정 및 내용(3-3) 독립적 외부전문가의: (주9) 정정 전 → (주9) 정정 후 ; 1. 합병의 목적가. 합병의 상대방과 배경(3) 합병관련 의사결정 과정 및 내용(3-3) 독립적 외부전문가의: - → 김앤장 법률사무소는 합병소멸회사가 반대주주의 주식매수청구가격을 할증하더라도, 그 사정만으로 본건 합병을 진행하는 합병존속회사 이사회의 판단이 현",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125000677",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "차바이오텍",
          "market": "코스닥",
          "kind": "주식소각결정 (상환전환우선주)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125900597",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "SK",
          "market": "유가",
          "kind": "[기재정정]주요사항보고서(회사합병결정)(자회사의 주요경영사항)",
          "changes": "18. 기타 투자판단과 관련한 중요사항 사.: 사. 상기 '10. 합병일정'은 본 주요사항보고서 제출일 현재 예상 일정으로, 관계법령상의 인허가 승인 및 관계기관과의 협의ㆍ승인 과정 등에 의 → 사. 상기 '10. 합병일정'은 본 주요사항보고서 제출일 현재 예상 일정으로, 관계법령상의 인허가 승인 및 관계기관과의 협의ㆍ승인 과정 등에 의 ; 18. 기타 투자판단과 관련한 중요사항 더.: 더. SK이노베이션(주)는 상법 제382조의3에 의거한 이사의 충실의무 및 법무부 가이드라인에서 권고하는 특별위원회 설치ㆍ운영과 관련하여, 본건 → 더. SK이노베이션(주)는 상법 제382조의3에 의거한 이사의 충실의무 및 법무부 가이드라인에서 권고하는 특별위원회 설치ㆍ운영과 관련하여, 본건 ; 18. 기타 투자판단과 관련한 중요사항: 보다 자세한 사항은 추후 제출될 예정인 SK이노베이션(주)의 증권신고서(합병)를 참조하시기 바랍니다. → 보다 자세한 사항은 2026년 11월 25일 제출한 SK이노베이션(주)의 증권신고서(합병)를 참조하시기 바랍니다.",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125800592",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "SK이노베이션",
          "market": "유가",
          "kind": "[기재정정]주요사항보고서(회사합병결정)",
          "changes": "18. 기타 투자판단과 관련한 중요사항 사.: 사. 상기 '10. 합병일정'은 본 주요사항보고서 제출일 현재 예상 일정으로, 관계법령상의 인허가 승인 및 관계기관과의 협의ㆍ승인 과정 등에 의 → 사. 상기 '10. 합병일정'은 본 주요사항보고서 제출일 현재 예상 일정으로, 관계법령상의 인허가 승인 및 관계기관과의 협의ㆍ승인 과정 등에 의 ; 18. 기타 투자판단과 관련한 중요사항 더.: 더. SK이노베이션(주)는 상법 제382조의3에 의거한 이사의 충실의무 및 법무부 가이드라인에서 권고하는 특별위원회 설치ㆍ운영과 관련하여, 본건 → 더. SK이노베이션(주)는 상법 제382조의3에 의거한 이사의 충실의무 및 법무부 가이드라인에서 권고하는 특별위원회 설치ㆍ운영과 관련하여, 본건 ; 18. 기타 투자판단과 관련한 중요사항: 보다 자세한 사항은 추후 제출될 예정인 SK이노베이션(주)의 증권신고서(합병)를 참조하시기 바랍니다. → 보다 자세한 사항은 2026년 11월 25일 제출한 SK이노베이션(주)의 증권신고서(합병)를 참조하시기 바랍니다.",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125000599",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "키네마스터",
          "market": "코스닥",
          "kind": "주요사항보고서(타법인주식및출자증권양수결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125000620",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "LG",
          "market": "유가",
          "kind": "[기재정정]타법인주식및출자증권처분결정(자회사의 주요경영사항)",
          "changes": "2. 처분내역: - 처분주식수(주) : 6,535,939 - 처분금액(원) : 2,499,996,667,500 → - 처분주식수(주) : 7,949,124 - 처분금액(원) : 2,499,999,498,000 ; 3. 처분후 소유주식수 및 지분비율: - 소유주식수(주) : 179,211,586 - 지분비율(%) : 76.59 → - 소유주식수(주) : 177,798,401 - 지분비율(%) : 75.98 ; 9. 기타 투자판단과 관련한 중요사항: 1. 본 공시는 당사가 보유한 ㈜LG에너지솔루션 보통주식의 일부를 처분하는 건입니다. 상기 처분과 관련하여 당사는 매수인과 아래와 같이 주가수익 → 1. 본 공시는 당사가 보유한 ㈜LG에너지솔루션 보통주식의 일부를 처분하는 건입니다. 상기 처분과 관련하여 당사는 매수인과 아래와 같이 주가수익",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125800545",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "광진실업",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(전환사채권발행결정)",
          "changes": "5. 사채 만기일: 2029년 11월 26일 → 2030년 01월 14일 ; 7. 원금상환방법: 만기일까지 보유하고 있는 본 사채의 전자등록금액에 대하여는 만기일인 2029년 11월 26일에 전자등록금액의 100%에 해당하는 금액을 일시 상 → 만기일까지 보유하고 있는 본 사채의 전자등록금액에 대하여는 만기일인 2030년 01월 14일에 전자등록금액의 100%에 해당하는 금액을 일시 상 ; 8. 사채발행방법 - 전환가액 (원/주): 3,850원 → 1,518원 ; 9. 전환에 관한 사항 - 전환에 따라 발행할 주식: 주식총수 대비 비율(%) → 76.48 ; : 수 → 2,793,296 ; : 주식총수 대비 비율(%) → 35.23 ; : 수 → 6,587,617 ; : 주식총수 대비 비율(%) → 76.48 ; 9. 전환에 관한 사항- 전환청구기간: - 시작일 : 2027년 11월 26일- 종료일 : 2029년 10월 25일 → - 시작일 : 2028년 01월 14일- 종료일 : 2029년 12월 13일 ; 12. 납입일: 2026년 11월 26일 → 2027년 01월 14일 ; 23. 기타 투자판단에 관한 사항: (주1) 정정 전 → (주1) 정정 후 ; [특정인에 대한 대상자별 사채발행내역] - 발행 대상자 명 - 발행권면(전자등록)총액(원): 에스앤와이지속상장 2 호조합 → 3,000,000,000",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125000593",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "스피어",
          "market": "코스닥",
          "kind": "[기재정정]타인에대한담보제공결정",
          "changes": "3. 채무(차입)금액(원): 306,117,000,000 → 276,963,000,000 ; 7. 기타 투자판단에 참고할 사항: - 상기 '3. 채무(차입)금액(원)은 'SNC'의 인수금융 조달예정 금액인 USD 210,000,000을 원화로 기재하였습니다. [관련 참고  → - 상기 '3. 채무(차입)금액(원)은 'SNC'의 인수금융 조달금액(USD 210,000,000) 중 26.11.25 기준의 인수금융 잔액인  ; [채무자별 담보제공 잔액] - 비고: - → 채무자(해외 종속회사 SNC)의 2026.11.25.기준 발행주식총수는 84,770,000주이며, 2026.11.25.현재 당사는 전체 주식을 ",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125900567",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "엠젠솔루션",
          "market": "코스닥",
          "kind": "[기재정정]주요사항보고서(전환사채권발행결정)",
          "changes": "5. 사채 만기일: 2029년 11월 25일 → 2029년 12월 09일 ; 9. 전환에 관한 사항中 전환청구기간: 시작일 : 2027년 11월 25일종료일 : 2029년 10월 25일 → 시작일 : 2027년 12월 09일종료일 : 2029년 11월 09일 ; 9-1. 옵션에 관한 사항: 1. 인수인의 조기상환청구권(Put Option)에 관한 사항 본 사채의 사채권자는 본 사채의 발행일로부터 1년이 되는 2027년 11월 25일 → 1. 인수인의 조기상환청구권(Put Option)에 관한 사항 본 사채의 사채권자는 본 사채의 발행일로부터 1년이 되는 2027년 12월 09일 ; 12. 납입일: 2026년 11월 25일 → 2026년 12월 09일 ; 23. 기타 투자판단에 관한 사항: 주1) → 주2)",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125000596",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "LG화학",
          "market": "유가",
          "kind": "[기재정정]타법인주식및출자증권처분결정",
          "changes": "2. 처분내역: - 처분주식수(주) : 6,535,939 - 처분금액(원) : 2,499,996,667,500 → - 처분주식수(주) : 7,949,124 - 처분금액(원) : 2,499,999,498,000 ; 3. 처분후 소유주식수 및 지분비율: - 소유주식수(주) : 179,211,586 - 지분비율(%) : 76.59 → - 소유주식수(주) : 177,798,401 - 지분비율(%) : 75.98 ; 9. 기타 투자판단과 관련한 중요사항: 1. 본 공시는 당사가 보유한 ㈜LG에너지솔루션 보통주식의 일부를 처분하는 건입니다. 상기 처분과 관련하여 당사는 매수인과 아래와 같이 주가수익 → 1. 본 공시는 당사가 보유한 ㈜LG에너지솔루션 보통주식의 일부를 처분하는 건입니다. 상기 처분과 관련하여 당사는 매수인과 아래와 같이 주가수익",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125800544",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "텔콘RF제약",
          "market": "코스닥",
          "kind": "주요사항보고서(자기전환사채만기전취득결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125000549",
          "addr": "처리-1",
          "source": "v2_secretary/결과/거푸집1/DART_공시표.csv"
        },
        {
          "company": "뉴키즈온",
          "market": "코스닥",
          "kind": "주요사항보고서(자기주식취득신탁계약체결결정)",
          "changes": "",
          "numbers": "",
          "body_from": "공식 API",
          "link": "https://dart.fss.or.kr/api/link.jsp?rcpNo=20261125000563",
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
          "date": "2026-11-20",
          "value": "35.89",
          "unit": "점",
          "prev_date": "2026-11-19",
          "prev_value": "28.44",
          "change": "+7.45",
          "addr": "인풋-5",
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        {
          "series": "DGS10",
          "name": "미국 10년 국채 금리",
          "date": "2026-11-20",
          "value": "4.92",
          "unit": "%",
          "prev_date": "2026-11-19",
          "prev_value": "5.04",
          "change": "-0.12",
          "addr": "인풋-5",
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        {
          "series": "VIXCLS",
          "name": "미국 변동성 지수 VIX(흔히 '공포지수')",
          "date": "2026-11-23",
          "value": "26.62",
          "unit": "점",
          "prev_date": "2026-11-20",
          "prev_value": "35.89",
          "change": "-9.27",
          "addr": "인풋-5",
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        {
          "series": "T10Y2Y",
          "name": "미국 장단기 금리차(10년-2년)",
          "date": "2026-11-23",
          "value": "0.29",
          "unit": "%p",
          "prev_date": "2026-11-20",
          "prev_value": "0.29",
          "change": "+0",
          "addr": "인풋-5",
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        {
          "series": "BAMLH0A0HYM2",
          "name": "미국 하이일드 채권 가산금리",
          "date": "2026-11-23",
          "value": "3.63",
          "unit": "%p",
          "prev_date": "2026-11-20",
          "prev_value": "3.76",
          "change": "-0.13",
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
          "date": "2026-11-23",
          "value": "4.92",
          "unit": "%",
          "prev_date": "2026-11-20",
          "prev_value": "4.92",
          "change": "+0",
          "addr": "인풋-5",
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        {
          "series": "DEXKOUS",
          "name": "원/달러 환율",
          "date": "2026-11-20",
          "value": "1342.41",
          "unit": "원",
          "prev_date": "2026-11-19",
          "prev_value": "1332.44",
          "change": "+9.97",
          "addr": "인풋-5",
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        {
          "series": "VIXCLS",
          "name": "미국 변동성 지수 VIX(흔히 '공포지수')",
          "date": "2026-11-24",
          "value": "26.36",
          "unit": "점",
          "prev_date": "2026-11-23",
          "prev_value": "26.62",
          "change": "-0.26",
          "addr": "인풋-5",
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        {
          "series": "T10Y2Y",
          "name": "미국 장단기 금리차(10년-2년)",
          "date": "2026-11-24",
          "value": "0.28",
          "unit": "%p",
          "prev_date": "2026-11-23",
          "prev_value": "0.29",
          "change": "-0.01",
          "addr": "인풋-5",
          "source": "v2_secretary/결과/거푸집1/FRED_지표표.csv"
        },
        {
          "series": "BAMLH0A0HYM2",
          "name": "미국 하이일드 채권 가산금리",
          "date": "2026-11-24",
          "value": "3.72",
          "unit": "%p",
          "prev_date": "2026-11-23",
          "prev_value": "3.63",
          "change": "+0.09",
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
          "val": 53,
          "source": "v2_secretary/결과/문앞/2026-11-26_문앞교통정리_길별.json"
        },
        "summarized_today": {
          "val": 44,
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        "bad_numbers_today": {
          "val": 1,
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        "fed_speeches_total": {
          "val": 30,
          "source": "v2_secretary/결과/연준연설/"
        }
      },
      "items": [
        {
          "id": "if796d07d9a",
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "산업통상자원소위, 소관 법률안 25건 처리",
          "easy1_title": "국회에서 산업 법률안 25건을 처리했습니다",
          "easy1_desc": "국회 산업통상자원중소벤처기업위원회가 11월 24일과 25일 양일간 산업통상자원소위원회를 열어 관련 법률안을 심의했는데요, 그 결과 산업 디지털 전환 및 인공지능 활용 촉진법 전부개정법률안을 포함해 총 25건의 법률안을 의결했다고 해요. 뭔 소리냐면, 제조기업과 인공지능 기업 간 협업을 활성화하고 외국인투자나 무역보험, 기술 유출 방지 같은 여러 제도를 손보겠다는 말이에요. 법안이 통과되면 산업 경쟁력이 강화되는 장점이 있는데, 대신 앞으로 남은 전체회의나 본회의 심사 절차를 거쳐야 한다는 점도 같이 따라온다는 겁니다. 쉽게 말하면, 핵심 산업을 지원하고 보호하는 법안들이 첫 문턱을 넘은 셈이에요.",
          "easy2_title": "M.AX법 통과로 제조업 경쟁력을 높이겠다고 합니다",
          "easy2_desc": "의결된 안건 중 하나인 산업 디지털 전환 및 인공지능 활용 촉진법 전부개정법률안을 뜯어봤더니, 법률 명칭을 산업인공지능전환 및 활용 촉진법으로 바꾸고 제조인공지능전환 얼라이언스 및 암묵지데이터 지원사업에 대한 법적 근거를 마련했다고 해요. 뭔 소리냐면, 기술과 인력, 데이터를 체계적으로 채워 주겠다는 말이에요. 지원이 늘어나는 장점이 있는데, 대신 제조기업과 인공지능 기업이 실제로 얼마나 협업을 잘 이뤄내느냐에 따라 성과가 달라진다는 점도 같이 따라온다는 겁니다. 쉽게 말하면, 제조업에 인공지능을 더해 체계를 탄탄하게 만들겠다는 계획이에요.",
          "topic": "국회 산업통상자원소위원회가 산업통상부 소관 법률안 25건을 심의하고 의결했다는 소식이에요.",
          "points": [
            "외국인투자 및 무역보험 개정: 외국인투자 촉진법 개정안을 통해 안보심의 근거를 만들고 조사 권한을 넓혔는데요, 국가 안전에 지장을 주는 투자를 더 촘촘하게 관리하겠다는 말이에요. 여기에 무역보험법 개정안으로 중소와 중견기업의 유동성을 지원하는 효과가 있을 것으로 봤다는 겁니다.",
            "기술 보호와 여성 인력 지원: 산업기술혁신 촉진법 개정안으로 여성기술인력의 진출을 돕고 매년 10월 30일을 공학인의 날로 지정하기로 했는데요, 자긍심을 높이겠다는 계획이에요. 반대로 산업기술의 유출방지 및 보호에 관한 법률 개정안은 국가핵심기술의 해외 인수합병 승인 대상을 구체화하고 벌칙을 강화해 침탈을 예방한다는 겁니다.",
            "중견기업 성장의 달팽이 허물기: 중견기업 성장촉진 및 경쟁력 강화에 관한 특별법 개정안을 살펴보았더니, 졸업 유예제도를 도입하고 이공계 인력 지원 같은 특례를 일정 규모 이하의 중견기업에도 적용한다고 해요. 뭔 소리냐면, 중소기업이 중견기업으로 자라나는 것을 꺼리게 만드는 피터팬 증후군을 막겠다는 말이에요. 성장을 계속 돕는다는 장점이 있는데, 대신 대상 기업의 기준을 세밀하게 따져야 한다는 점도 같이 따라온다는 겁니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "2184",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5333497",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "ib64ed49301",
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "[보도자료] 조정식 국회의장, 일본서 의회외교·세일즈 외교 전개...경제·산업협력 확대 행보",
          "easy1_title": "일본 참의원 의장을 만나 경제안보와 기업인 애로 해소를 부탁했다",
          "easy1_desc": "조정식 국회의장이 일본에서 세키구치 마사카즈 참의원 의장과 만나 한일 의회 교류와 경제안보 분야 협력을 논의했는데요. 그 자리에서 일본에 진출한 우리 기업인들의 출입국 절차 간소화와 재류자격인정증명서의 신속한 발급을 요청했다고 해요. 기업 활동을 돕기 위해 의회 차원에서 발벗고 나섰다는 말이에요. 쉽게 말하면, 외교 무대에서 직접 우리 기업의 발목을 잡는 현장 애로를 해결해 달라고 손을 내민 셈이라는 말이에요.",
          "easy2_title": "삼성전자 APL을 찾아 한일 반도체 협력과 지원을 약속했다",
          "easy2_desc": "조 의장이 일본 현지에 있는 삼성전자 어드밴스드 패키징 랩을 방문해 첨단 반도체 연구 현장을 둘러보고 임직원들을 격려했는데요. 한국의 설계 제조 역량과 일본의 소재 부품 장비 경쟁력을 합치면 큰 시너지가 난다고 봤다는 거예요. 반도체특별법을 제정해 법적 제도적 기반을 만들겠다고 밝혔는데요. 기술 혁신을 뒷받침한다는 장점이 있는데, 대신 현장 협력이 구체적인 성과로 얼마나 이어질지는 지켜봐야 한다는 점도 함께 따라온다는 겁니다.",
          "topic": "조정식 국회의장이 일본을 방문해 의회외교와 세일즈 외교를 펼치며 경제 및 산업 협력을 확대하겠다는 생각이에요.",
          "points": [
            "참의원 의장 면담: 조 의장이 세키구치 마사카즈 참의원 의장과 만나 공급망 파트너십과 LNG 수급 협력 등의 성과를 확인했는데요. 앞으로 첨단산업과 에너지 분야에서도 양국 경제협력이 활발해지기를 기대한다고 밝혔어요. 뭔 소리냐면, 정상 간 리더십으로 다져 놓은 협력 기조를 의회 차원에서 더 단단하게 묶겠다는 말이에요.",
            "삼성전자 APL 방문: 조 의장이 삼성전자 어드밴스드 패키징 랩을 찾아 차세대 반도체 경쟁의 핵심인 첨단 패키징 기술 연구 현장을 살폈는데요. 한국의 설계 제조 능력과 일본의 소부장 정밀기술이 만나면 한일 경제 기술협력의 지평을 넓힐 수 있다고 강조했어요. 쉽게 말하면, 양국의 장점을 합쳐 반도체 영토를 더 넓히자는 거예요.",
            "기업인 만찬간담회: 조 의장이 일본 진출 우리 기업인들과 만찬간담회를 열어 현장의 애로사항을 직접 들었는데요. 출입국 절차와 재류자격인정증명서 발급 소요 시간 단축을 위해 일본 측에 협조를 요청했다고 설명했어요. 한국산 철강 반덤핑 조사 문제도 함께 제기해 우리 기업의 입장이 고려되도록 힘쓰겠다고 전했다는 겁니다."
          ],
          "evidence_ok": "2/6",
          "bad_numbers": "",
          "check_flags": "easy1 근거 원문에 없음; easy2 근거 원문에 없음; point1 근거 원문에 없음; point2 근거 원문에 없음",
          "body_chars": "3385",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5333472",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i22c073e180",
          "source_name": "국회 보도자료 RSS",
          "kind": "국회 보도자료",
          "writer": "국회",
          "title": "데이터로 보는 인구구조 변화 - 국회도서관, 『Data & Law』 (2026-15호, 통권 제53호) 발간",
          "easy1_title": "출생과 혼인은 늘었지만 사망이 더 많아 인구 자연감소는 계속되고 있어요",
          "easy1_desc": "2026년 1~9월 출생신고를 전년 같은 기간과 비교해 봤더니 13.4% 늘어났는데요, 첫만남이용권 지급 아동 수도 12.4% 늘었다는 겁니다. 그런데 같은 기간 사망신고가 출생신고보다 41,750건 많아서 사망이 출생보다 많은 자연감소는 2020년부터 이어지고 있다는 말이에요. 쉽게 말하면, 태어나는 아이들도 늘었지만 사망자가 더 많아 전체적인 자연감소 흐름은 계속되고 셈이에요.",
          "easy2_title": "국제혼인과 결혼이민자 현황을 통해 넓어진 인구정책 범위를 살펴봤습니다",
          "easy2_desc": "인구전략기본법 시행으로 정책 범위가 국가 간 인구 이동까지 넓어져서 국제혼인과 결혼이민자 현황을 살펴봤는데요, 2025년 국제혼인은 28,141건으로 전체 혼인신고의 11.3%를 차지했다고 해요. 체류하는 결혼이민자는 2026년 9월 말 192,089명으로 2015년 말보다 26.7% 늘었다는 겁니다. 서류에 잡히지 않는 사각지대도 있는데, 헌법재판소가 국내 출생 외국인 아동의 출생등록에 관한 입법부작위가 위헌임을 확인했다는 점도 눈여겨볼 부분이라는 겁니다.",
          "topic": "국회도서관이 인구구조 변화를 주제로 출생, 사망, 국제혼인, 결혼이민자 등 최신 통계 데이터를 담은 Data & Law 제53호를 발간했다고 밝혔다는 내용입니다.",
          "points": [
            "출생과 혼인 증감: 2026년 1~9월 출생신고는 전년 같은 기간보다 13.4% 늘었고 첫만남이용권 지급 아동 수도 12.4% 늘었다고 해요. 혼인신고는 2022년을 저점으로 3년 연속 증가했으며 2026년 1~9월 혼인신고도 전년 같은 기간보다 3.6% 늘었다는 겁니다.",
            "결혼이민자와 다문화가족 현황: 국제혼인으로 국내에 체류하는 결혼이민자는 2026년 9월 말 192,089명으로 2015년 말보다 26.7% 늘었다고 해요. 이 가운데 40세 이상 비중은 2015년 말 35.2%에서 2026년 9월 말 54.5%로 절반을 넘었다는 말입니다.",
            "외국인 아동 출생등록과 발간 취지: 부모가 모두 외국인인 국내 출생 아동은 외국인등록을 한 아동이 2025년 7,309명으로 2015년 이후 가장 많았다고 해요. 헌법재판소는 국내 출생 외국인 아동의 출생등록에 관한 입법부작위가 위헌임을 확인했으며, 김성완 국회도서관 법률정보실장은 이번 발간이 인구구조 변화 대응을 위한 입법 및 정책 논의의 참고자료로 활용되기를 기대한다고 밝혔다는 겁니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "1888",
          "link": "https://www.assembly.go.kr/portal/bbs/B0000051/view.do?menuNo=600091&pageIndex=1&pageUnit=20&nttId=5333464",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "if4898c1095",
          "source_name": "산업부 보도 RSS(POST)",
          "kind": "산업통상부 보도자료",
          "writer": "산업통상부",
          "title": "K-Quality로 완성하는 초격차 대한민국",
          "easy1_title": "품질 경영으로 미래 신시장을 선점하겠다고 합니다",
          "easy1_desc": "산업통상부 국가기술표준원이 제52회 국가품질경영대회를 열고 477점의 포상을 수여했다고 하는데요. 본격화된 인공지능(AI)과 디지털 전환(DX) 물결 속에서 독보적인 품질 경쟁력으로 미래 신시장을 선점하겠다는 결의를 다졌다는 말이에요. 상을 받는 기업들이 늘어나서 산업계 전반에 품질혁신 의지가 확산된다는 장점이 있는데, 대신 빠르게 변하는 기술을 따라가지 못하는 곳은 뒤처질 수도 있다는 점도 같이 따라온다는 겁니다. 쉽게 말하면, 품질을 높여서 글로벌 리더십을 확실히 잡겠다는 셈이에요.",
          "easy2_title": "방산과 기술 국산화로 최고 영예의 상을 받았다는 겁니다",
          "easy2_desc": "금탑산업훈장에는 K2 전차용 자동변속기를 독자 개발한 에스앤티다이내믹스 주식회사 박재석 대표이사가 수훈했다고 하는데요. 방산 핵심 부품을 국산화해서 K-방산의 글로벌 경쟁력을 높이는 데 기여했기 때문이라는 말이에요. 이렇게 상을 받으면 회사의 기술력이 널리 알려지는 장점이 있는데, 대신 그만큼 높은 품질을 계속 유지해야 하는 부담도 커진다는 겁니다. 쉽게 말하면, 독자 기술을 개발해서 국가 경쟁력을 끌어올렸다는 셈이에요.",
          "topic": "산업통상부 국가기술표준원이 제52회 국가품질경영대회를 개최하여 품질경영 유공자들을 포상하고 미래 신시장 선점 의지를 다졌다는 내용이에요.",
          "points": [
            "국가품질경영대회 개최: 서울 코엑스에서 국무총리와 국가기술표준원장 등 2,000여명이 참석한 가운데 행사가 열렸다고 하는데요. 품질경영으로 국가 산업발전에 기여한 공적을 포상하고 총 477점의 상이 수여되었다는 말이에요. 행사가 커서 많은 사람이 모인다는 장점이 있는데, 대신 그만큼 철저한 준비와 진행이 필요하다는 겁니다.",
            "유공자 포상 수여: 금탑산업훈장을 받은 에스앤티다이내믹스를 비롯해 총 52명이 유공자로 선정되었다고 하는데요. 은탑산업훈장은 스템코의 엄영하 대표이사가, 철탑산업훈장은 한국항공우주산업의 박경은 전무가 수훈했다는 말이에요. 핵심 기술을 가진 사람들이 상을 받으면서 기술 개발 의욕이 더 높아진다는 장점이 있는데, 반면에 수상하지 못한 곳과의 격차는 더 벌어질 수도 있다는 겁니다.",
            "유공단체 선정: 인공지능과 디지털 기술을 산업에 융합해 성과를 거둔 기업들이 집중적으로 선정되었다고 하는데요. 국가품질대상에는 한국서부발전과 한전원자력연료가 이름을 올렸고 삼성전자 MX사업부 등도 대통령표창을 받았다는 말이에요. 디지털 전환으로 업무 효율이 높아진다는 장점이 있는데, 대신 AI 기술을 도입하지 못한 기업들은 경쟁력을 잃기 쉽다는 점도 함께 나타난다는 겁니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "5287",
          "link": "https://www.motir.go.kr/kor/article/ATCLe0854704d/172451/view",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i33abcfcedd",
          "source_name": "산업부 보도 RSS(POST)",
          "kind": "산업통상부 보도자료",
          "writer": "산업통상부",
          "title": "AI 시대, K-팹리스 도약의 열쇠는 ‘상생’",
          "easy1_title": "팹리스 성장이 설계에만 머무르지 않고 생태계 협력으로 이어져야 한다",
          "easy1_desc": "제4회 한국반도체팹리스인의 날 기념행사에서 팹리스 기업의 기술혁신과 성장을 다뤘는데요, 이게 설계 분야에만 머무르면 안 된다는 겁니다. 제조·소재·장비·수요기업 같은 산업 생태계 전반의 협력으로 이어져야 한다는 뜻인데요. 쉽게 말하면, 혼자 잘나서 되는 게 아니라 다 같이 손을 잡아야 한다는 말이에요.",
          "easy2_title": "정부가 기술개발과 투자 및 금융지원을 통해 팹리스 성장을 뒷받침하겠다",
          "easy2_desc": "산업통상부가 팹리스 기업의 기술혁신과 성장을 적극적으로 뒷받침하겠다고 밝혔는데요, 방법은 8,002억원 규모의 K-온디바이스 AI반도체 기술개발 등을 지원하는 계획이에요. 기업들이 함께 성장할 수 있는 환경을 만든다는 장점이 있는데, 대신 정부 지원에 일정 부분 의존하게 된다는 점도 같이 따라온다는 겁니다.",
          "topic": "제4회 한국반도체팹리스인의 날 행사를 열고 팹리스 산업 발전에 기여한 유공자 포상과 함께 상생 협력 방안을 논의했다는 내용이에요.",
          "points": [
            "피지컬AI 협력 성과 발표: 기술교류회에서 LG전자, 마음AI, 딥엑스가 피지컬AI 분야의 협력 추진현황을 발표했는데요, 수요기업과 팹리스 간 온디바이스 AI반도체 협력 성과를 공유했다는 겁니다. 뭔 소리냐면, 현장에서 실제로 어떻게 손을 잡고 기술을 만들고 있는지 보여 줬다는 말이에요.",
            "반도체 생태계 유공자 포상: 올해 기념식에서는 시스템반도체 설계 기술 자립에 기여한 김태진 부사장을 포함해 총 19명에게 포상이 수여됐는데요, 산업부 장관 표창 3점과 과학기술정보통신부 장관 표창 2점 등이 포함됐다는 겁니다. 쉽게 말하면, 산업 발전에 힘쓴 사람들을 격려하는 자리였다는 말이에요.",
            "상생 생태계 지원 계획: 이규봉 반도체혁신성장지원단장은 개별 기업의 노력만으로는 경쟁력을 확보하기 어렵다고 강조했는데요, 팹리스와 제조·소재·장비·수요기업이 긴밀하게 협력해야 한다는 겁니다. 뭔 소리냐면, 혼자서 뛰는 게 아니라 생태계 전체가 맞물려 돌아가야 한다는 뜻이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "2453",
          "link": "https://www.motir.go.kr/kor/article/ATCLe0854704d/172450/view",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i340bb89454",
          "source_name": "산업부 보도 RSS(POST)",
          "kind": "산업통상부 보도자료",
          "writer": "산업통상부",
          "title": "기술보호 종합대책 발표 앞두고, 관계부처 최종 점검",
          "easy1_title": "연말 발표를 앞두고 관계부처와 함께 종합계획을 최종 점검하겠다",
          "easy1_desc": "산업통상부가 제10회 산업기술보호 정책협의회를 개최하고 연말 발표를 앞둔 제6차 산업기술보호 종합계획 잠정안에 대한 부처별 실행과제를 최종 점검하고 조율한다고 밝혔는데요. 기술보호는 기관과 인력 관리부터 기술유출 수사 및 처벌까지 다양한 정책수단이 유기적으로 작동해야 하는 과제라는 겁니다. 이에 정부는 이번 협의회를 통해 종합계획 관련 부처별 소관 과제를 사전에 점검하고 각 부처의 정책수단을 바탕으로 실행방안을 도출한다는 계획이에요. 쉽게 말하면, 여러 부처가 힘을 합쳐 기술보호 대책을 미리 다듬어 보겠다는 말입니다.",
          "easy2_title": "신설된 기관까지 함께 참여해 정책과 수사 및 기소를 연계하겠다",
          "easy2_desc": "이번 협의회에는 신설된 중수청과 공소청이 함께 참여하는 만큼 정책과 수사 및 기소가 연계되는 지점도 살펴본다고 하는데요. 관계부처의 유출 통계와 정보공유를 확대하는 등의 내용을 과제화하여 종합계획에 충실히 담을 예정이라는 겁니다. 김태우 무역안보정책관은 각 부처의 정책수단을 하나로 엮어 현장에서 작동하는 해법을 찾아가겠다고 밝혔는데요. 부처 간 협력이 강화되면 실효성이 높아진다는 장점이 있지만, 여러 기관의 조율 과정이 복잡해질 수도 있다는 점도 함께 살펴봐야 한다는 겁니다.",
          "topic": "산업통상부가 연말 제6차 산업기술보호 종합계획 발표를 앞두고 관계부처와 함께 실행과제를 최종 점검한다는 내용이에요.",
          "points": [
            "종합계획 최종 점검: 산업통상부가 산업기술보호 정책협의회를 열고 과기정통부나 재경부 등 관계부처와 함께 연말 발표를 앞둔 제6차 산업기술보호 종합계획 잠정안을 점검한다고 해요. 뭔 소리냐면, 여러 부처가 모여서 소관 과제를 미리 조율하고 실행방안을 함께 찾아본다는 말입니다.",
            "인력 유출 방지 협력: 인력을 통한 기술유출을 막기 위해 산업부가 제도적 틀을 만들더라도 이직 동향 파악이나 핵심 인력 지원을 위해서는 관계부처의 전문성이 필요하다는 건데요. 정부는 기술보호 지원사업 우대부터 연구개발(R&D) 지원까지 각 부처가 가진 제도를 모두 논의 대상에 올려 인센티브 범위를 검토하고 있다는 겁니다.",
            "수사 및 기소 연계: 신설된 중수청과 공소청이 협의회에 참여하면서 정책과 수사 및 기소가 연결되는 지점도 함께 살펴본다고 해요. 관계부처의 유출 통계나 정보공유를 넓히는 방안을 종합계획에 담아 현장에서 실제로 작동하는 해법을 만들겠다는 계획이라는 겁니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "1452",
          "link": "https://www.motir.go.kr/kor/article/ATCLe0854704d/172448/view",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i9ded8978fd",
          "source_name": "산업부 보도 RSS(POST)",
          "kind": "산업통상부 보도자료",
          "writer": "산업통상부",
          "title": "대한민국 디자인의 무한한 스펙트럼, 「디자인코리아」에서 펼쳐진다",
          "easy1_title": "국내 최대 디자인 종합 박람회인 디자인코리아 2026을 개최한다",
          "easy1_desc": "산업통상부가 주최하고 디자인진흥원이 주관하는 디자인코리아 2026이 11월 25일부터 29일까지 5일간 서울 코엑스 B홀에서 열린다고 해요. 이번 행사에서는 200여 개 기업이 참여하는 대규모 전시회와 국제 컨퍼런스, 대한민국 디자인 대상 수여식 등이 진행된다는 말이에요. 쉽게 말하면, 디자인의 모든 것을 한자리에서 볼 수 있는 큰 잔치가 벌어진 셈이라는 겁니다.",
          "easy2_title": "제조현장과 디자인 연계를 강화하고 따뜻한 디자인을 지원하겠다고 밝혔다",
          "easy2_desc": "산업부 관계자가 디자인이 대한민국의 경쟁력을 한 단계 높이는 데 중요한 역할을 할 수 있을 것이라고 말했다는데요, 앞으로 제조현장과 디자인의 연계를 더욱 강화하고 더 안전한 일터를 만드는 따뜻한 디자인이 되도록 지원하겠다는 계획이에요. 지원을 받으면 산업 경쟁력이 커지는 장점이 있는데, 대신 현장마다 적용하는 방식이 달라져서 꼼꼼히 챙겨야 한다는 점도 함께 따라온다는 겁니다.",
          "topic": "국내 최대 디자인 산업 박람회인 디자인코리아 2026의 개최 내용과 주요 프로그램에 대한 설명이에요.",
          "points": [
            "다양한 프로그램 구성: 이번 행사는 디자인, 경계를 넘어서는 다양성이라는 주제로 200여 개 기업이 참여하는 전시회와 국제 컨퍼런스 등으로 이루어졌다고 해요. 뭔 소리냐면, 단순한 구경거리를 넘어서 비즈니스와 일자리까지 함께 다룬다는 말이에요.",
            "지역 디자인 상생: 지역 디자인기업의 판로를 넓히기 위해 7개 지역디자인산업협회와 강원 및 부산디자인진흥원이 함께 전시 공간을 마련했다고 해요. 그래서 관람객과 바이어가 지역 디자인 기업의 우수한 제품을 직접 확인할 수 있다는 겁니다.",
            "디자인 대상 시상: 대한민국디자인대상 시상식에서 염일수 ㈜바디프랜드 전무이사가 은탑산업훈장을 받는 등 총 35명이 수상의 영예를 안았다고 해요. 쉽게 말하면, 디자인 분야에서 뛰어난 성과를 낸 이들을 격려하는 자리였다는 말이에요."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "point3 근거 원문에 없음",
          "body_chars": "1793",
          "link": "https://www.motir.go.kr/kor/article/ATCLe0854704d/172447/view",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i2b8fff1d7f",
          "source_name": "미국 연방관보(대통령·재무·환경·통신)",
          "kind": "미국 연방관보 공고",
          "writer": "미국 연방관보",
          "title": "Notice of OFAC Sanctions Action",
          "easy1_title": "재산을 묶어버리는 제재 명단을 새로 공개했습니다",
          "easy1_desc": "미국 재무부 해외자산통제국(OFAC)이 관련 법에 따라 요건을 채운 개인이나 단체의 이름을 특별지정제재대상(SDN List) 명단에 새로 올려 공개했는데요. 이 명단에 오르면 미국 관할권 안에 있는 모든 재산과 이익이 묶이게 된다는 말이에요. 미국 사람들은 이들과 거래하는 것이 원칙적으로 금지된다는 겁니다. 쉽게 말하면, 제재 대상에 오른 이들의 돈줄과 자산을 완전히 틀어막겠다는 뜻이에요.",
          "easy2_title": "지난 11월 20일에 이미 조치가 내려졌다고 밝혔습니다",
          "easy2_desc": "이번에 발표된 조치는 2026년 11월 20일에 실제로 발효되었다고 하는데요. 관련 웹사이트를 통해 구체적인 명단과 제재 프로그램에 대한 추가 정보를 확인할 수 있다는 거예요. 자세한 날짜나 연락처 같은 세부 사항도 함께 찾아볼 수 있다는 장점이 있지만, 제재 관련 문의는 담당 부서 번호로 직접 확인해야 한다는 점도 같이 따라온다는 겁니다. 쉽게 말하면, 이미 지난 11월 20일에 실행된 제재 내용을 공식적으로 공고한 셈이라는 말이에요.",
          "topic": "미국 재무부 해외자산통제국(OFAC)이 특정 개인과 단체를 특별지정제재대상(SDN List)에 올려 재산을 동결하고 거래를 금지하는 조치를 공고했다는 내용이에요.",
          "points": [
            "제재 대상 명단 공고: 미국 재무부 해외자산통제국(OFAC)이 관련 법적 기준을 충족한 대상자들의 이름을 특별지정제재대상(SDN List)에 올려 공개했는데요. 뭔 소리냐면, 제재 대상이 된 이들의 목록을 공식적으로 세상에 알렸다는 말이에요.",
            "자산 동결과 거래 금지: 미국 관할권 안에 있는 이들의 모든 재산과 재산 이익이 차단된다고 밝혔는데요. 미국 사람들은 이들과 어떠한 거래도 할 수 없도록 일반적으로 금지된다는 겁니다.",
            "조치 시행 일자와 근거: 이번 제재 조치는 2026년 11월 20일에 발행되었으며, 수정된 행정명령 13224호와 행정명령 13902호를 근거로 삼고 있다는 거예요. 쉽게 말하면, 정해진 법적 권한에 따라 특정 날짜에 효력이 발생했다는 말입니다."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "easy1 근거 원문에 없음",
          "body_chars": "2134",
          "link": "https://www.federalregister.gov/documents/2026/11/25/2026-23961/notice-of-ofac-sanctions-action",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "idffdcf9de1",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "유진투자증권",
          "title": "[유진투자증권] 한세실업 3Q26 Review: 외부 환경도 힘들다",
          "easy1_title": "매출은 늘었는데 파산이랑 환율 때문에 어닝 쇼크를 맞았어요",
          "easy1_desc": "3분기 매출액은 5,887억원으로 전년 동기 대비 8.3% 늘어나며 외형은 커졌는데요, 영업이익은 2억원으로 99.3% 줄어드는 어닝 쇼크를 기록했다고 해요. 미국 유통 고객사의 파산으로 대손상각비가 반영된 데다가, 원달러 환율이 떨어지면서 원가 부담이 커졌기 때문이라는 말이에요. 쉽게 말하면, 물건은 잘 팔았는데 돈을 못 받고 원가까지 올라서 남는 게 거의 없었던 셈이라는 겁니다.",
          "easy2_title": "쉽지 않은 업황이라도 주주 배당은 꾸준히 지키겠다고 봤어요",
          "easy2_desc": "증권사는 4분기에도 파산 고객사 관련 추가 대손 반영과 환율 하락이 이익의 발목을 잡을 것으로 전망했는데요, 단가를 올리기 힘든 외부 환경이라 당분간 주문 수량은 현상 수준을 유지할 것으로 보인다는 겁니다. 그렇지만 쉽지 않은 업황 속에서도 주주환원은 계속 이어져 최소 DPS 600원을 유지한다고 발표해 배당수익률이 8%대로 상승했다고 해요. 쉽게 말하면, 실적은 아쉽지만 배당 매력은 오히려 높아진 모습이라는 말이에요.",
          "topic": "한세실업의 3분기 실적 부진 요인과 앞으로의 실적 및 주주환원 전망에 대한 유진투자증권의 분석이에요.",
          "points": [
            "3분기 실적과 어닝 쇼크: 매출액은 5,887억원으로 8.3% 성장했지만 영업이익은 2억원으로 99.3% 급감해 어닝 쇼크를 기록했다고 해요. 마트 주문 수량이 늘어나 전체 매출을 끌어올렸으나 단가가 하락하면서 상승폭이 제한됐다는 겁니다. 뭔 소리냐면, 겉보기엔 커졌지만 실제 이익은 쪼그라들었다는 말이에요.",
            "일회성 비용과 환율 요인: 미국 유아동복 유통 고객사 칠드런스플레이스가 파산하면서 관련 매출채권에 대손상각비 약 170억원이 반영됐다고 해요. 여기에 원달러 환율이 하락하면서 1~2분기 환율로 원자재를 사고 당분기 환율로 매출을 잡는 구조 때문에 3분기 매출원가율이 전분기 대비 4.5%p 올랐다는 겁니다. 쉽게 말하면, 거래처 파산 타격에 환율 차이까지 겹쳐 원가 부담이 커졌다는 거예요.",
            "목표주가 하향과 주주환원: 증권사는 투자의견 HOLD를 유지하고 목표주가를 9,000원으로 하향 조정했다고 밝혔어요. 어려운 업황에도 최소 DPS 600원을 유지한다고 발표하면서 배당수익률은 8%대로 상승했다고 해요. 뭔 소리냐면, 주가 목표는 낮춰 잡았지만 주주들에게 돌려주는 몫은 지키겠다는 뜻이라는 말이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "9631",
          "link": "https://m.stock.naver.com/research/company/98488",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "ibb776feabb",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "한화투자증권",
          "title": "[한화투자증권] 디어유 K-Trend를 지렛대로 K-Fandom Monetization 확장",
          "easy1_title": "버블하우스를 열어 서구권 시장으로 넓혀가겠다",
          "easy1_desc": "한화투자증권에서 디어유의 뉴욕 맨해튼 매장 오픈을 살펴봤는데요, 이게 아시아를 넘어 서구권 음악 시장으로 서비스를 공격적으로 넓히려는 거라는 말이에요. 초기에는 굿즈 판매 등으로 매출을 낼 텐데, 장점은 한류 유행 덕분에 고정비를 채우고 홍보까지 된다는 점이거든요. 쉽게 말하면, 오프라인 매장을 발판 삼아 해외 팬덤을 끌어모으겠다는 셈이에요.",
          "easy2_title": "비용을 반영해 목표주가는 낮추지만 투자의견은 유지한다",
          "easy2_desc": "한화투자증권은 매장 관련 비용 등을 반영해서 2027년 예상 영업이익과 순이익을 각각 29%, 35% 낮춰 잡았는데요, 그 때문에 목표주가도 3만원으로 조정했다는 겁니다. 단점은 단기 실적 추정치가 낮아졌다는 건데, 장점은 본업 성장이 가시화되는 2028년 영업이익 성장률이 38%에 이를 것으로 기대된다는 점이거든요. 쉽게 말하면, 당장 눈앞의 비용은 늘어나도 투자의견 Buy는 그대로 유지하겠다는 말이에요.",
          "topic": "한화투자증권은 디어유가 뉴욕에 연 버블하우스를 바탕으로 서구권 시장 확장을 노리고 있으며, 이에 따라 실적 추정치를 조정하고 목표주가를 3만원으로 낮췄다고 밝혔어요.",
          "points": [
            "버블하우스 오픈과 서구권 확장: 한화투자증권은 뉴욕 맨해튼 유니언 스퀘어에 약 400평 규모의 상설 매장인 버블하우스가 열렸다고 전했는데요, 이게 아시아에 익숙한 채팅 서비스를 서구권으로 넓히는 지렛대 역할을 한다는 겁니다. 뭔 소리냐면, 오프라인 공간을 통해 한류에 관심 있는 외국인의 유입을 이끌어내어 서비스를 알리겠다는 말이에요.",
            "실적 추정치와 목표주가 하향: 한화투자증권은 매장 관련 비용과 구독수 추정치를 낮춰 잡으면서 2027년 예상 영업이익과 순이익을 각각 29%와 35% 낮췄는데요, 그 결과 목표주가를 3만원으로 내렸다는 거예요. 쉽게 말하면, 비용 반영으로 눈높이는 낮추지만 2028년에는 영업이익 성장률이 38%에 이를 것으로 기대한다는 셈이에요.",
            "슈퍼팬 비즈니스 성장 기대: 한화투자증권은 동서양을 가리지 않고 음악 시장의 핵심 흐름이 슈퍼팬 비즈니스라는 점을 짚어봤는데요, 덕분에 디어유의 성장 가능성이 더욱 돋보인다고 봤다는 겁니다. 뭔 소리냐면, 팬덤을 기반으로 한 수익화 모델이 앞으로도 계속 힘을 발휘할 거라는 말이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 단점은 단기 실적 추정치가 낮아졌다는 건데, 장점은 본업 성장이 가시화되는 2028년 영업이익 성장률이 38",
          "body_chars": "8516",
          "link": "https://m.stock.naver.com/research/company/98487",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i331983b9c3",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "DS투자증권",
          "title": "[DS투자증권] 종근당 기다려야 할 구간",
          "easy1_title": "실적을 자세히 뜯어봤더니 이익은 늘었지만 매출은 기대에 못 미쳤습니다",
          "easy1_desc": "종근당의 2026년 3분기 실적을 집어봤더니 영업이익은 약 237억원으로 시장 기대치보다 9.2% 높게 나왔는데요, 그 이유는 위탁연구비와 임상시험비가 줄어들면서 연구개발비가 축소됐기 때문이라는 겁니다. 하지만 매출액은 약 4,307억원으로 예상보다 10.5% 적게 나왔는데, 기존에 잘 팔리던 품목들의 매출이 줄어들었기 때문이에요. 쉽게 말하면 비용을 아껴서 이익은 지켜냈지만 전체 매출 성장은 주춤했다는 말이에요.",
          "easy2_title": "주요 제품 매출이 줄어들어 증권사는 목표주가를 낮춰 잡았습니다",
          "easy2_desc": "그래서 증권사는 종근당의 목표주가를 기존 110,000원에서 80,000원으로 낮췄는데요, 프롤리아주나 글리아티린 같은 기존 주력 제품들의 매출이 줄어들고 계약이 끝난 품목들도 생겼기 때문이라는 겁니다. 앞으로는 새로운 신제품을 도입해서 이 공백을 어떻게 채울지가 중요하다고 보았는데요, 이런 중장기 전략을 차근차근 확인해야 한다는 거예요. 쉽게 말하면 주력 상품 빈자리를 채울 새로운 카드를 찾는지 지켜봐야 한다는 셈이에요.",
          "topic": "종근당의 3분기 실적 결과와 주력 제품 부진에 따른 목표주가 하향 조정 내용이에요.",
          "points": [
            "3분기 실적 리뷰: 종근당의 3분기 매출액은 약 4,307억원으로 기대치에 못 미쳤지만 영업이익은 약 237억원으로 예상보다 높게 나타났는데요, 이는 임상시험비 등이 줄어들면서 연구개발비가 축소된 영향이 크다는 겁니다. 뭔 소리냐면 제품 판매로 벌어들인 돈은 조금 아쉬웠지만 비용을 줄여서 이익 방어는 해냈다는 말이에요.",
            "주력 품목 매출 감소: 프롤리아주와 글리아티린 같은 기존 핵심 제품들이 약가 인하와 본인 부담률 증가 등으로 매출이 크게 줄어들었는데요, 이 공백을 메우려던 위고비마저 유통사 확대 영향으로 매출 둔화가 나타났다는 겁니다. 장점은 다른 상품으로 상쇄하려 했다는 점인데, 단점은 주력 제품들의 부진을 한 번에 막기엔 역부족이었다는 점이에요.",
            "목표주가 하향과 확인 과제: 그래서 DS투자증권은 2027년 실적 추정치를 낮추면서 목표주가를 80,000원으로 내렸는데요, 계약이 종료된 아토젯과 펙수클루의 공백을 새로운 품목 도입으로 어떻게 메울지 확인해야 한다고 봤다는 겁니다. 쉽게 말하면 빈자리를 채울 신제품 판매가 앞으로의 주가를 좌우할 핵심이라고 보인다는 거예요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "6985",
          "link": "https://m.stock.naver.com/research/company/98486",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i8799a9181f",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "DS투자증권",
          "title": "[DS투자증권] 덴티움 기다림의 시간",
          "easy1_title": "목표주가를 60,000원으로 낮췄습니다",
          "easy1_desc": "DS투자증권은 덴티움에 대한 투자의견은 매수로 유지하지만 목표주가는 기존 80,000원에서 60,000원으로 낮췄는데요, 예상보다 부진이 이어지고 있기 때문이라는 겁니다. 그래서 2026년 연간 매출액은 약 3,500억원, 영업이익은 약 805억원으로 추정치를 낮춰 잡았다는 말이에요. 실적이 좋아질 거라는 기대가 미뤄지면서 주가도 당분간 기다리는 시간이 길어질 수 있다는 셈이에요.",
          "easy2_title": "중국 수요와 2차 VBP가 핵심 변수입니다",
          "easy2_desc": "앞으로 주가가 어떻게 움직일지는 중국 수요가 살아나는지, 그리고 임플란트 비중을 높여서 마익이 좋아지는지가 중요하다는 건데요, 2차 VBP(국가중앙집중구매)가 시행되면 제품 가격이 5%에서 15% 정도 낮아질 것으로 보인다는 겁니다. 원래는 2026년 1월부터 시작될 줄 알았는데 아직 미뤄져서 2027년까지는 지켜봐야 한다는 말이에요. 가격이 낮아지기 전에 수요가 미뤄졌던 적이 있어서 시행 전까지는 실적 출렁임이 클 수도 있다는 겁니다.",
          "topic": "DS투자증권은 덴티움의 2026년 3분기 실적이 예상보다 부진해 연간 추정치를 낮추고 목표주가를 60,000원으로 내렸다고 밝혔어요.",
          "points": [
            "3분기 실적과 매출 믹스 변화: 덴티움은 2026년 3분기 매출액 약 783억원, 영업이익 약 159억원을 기록해 매출은 컨센서스보다 12% 낮았지만 영업이익은 14% 높았다고 해요. 임플란트 매출은 약 631억원으로 견조한 반면 디지털 장비 매출은 약 65억원으로 줄어들었기 때문이라는 겁니다. 쉽게 말하면 매출 구성이 바뀌면서 이익은 예상보다 잘 나왔다는 말이에요.",
            "지역별 실적 흐름: 중국은 전통적인 비수기인데도 매출액 약 396억원으로 전분기 수준을 지키며 탄탄한 성장을 보였다는 건데요, 반면에 내수 시장과 아시아 지역은 각각 약 129억원과 약 133억원으로 부진했다고 해요. 유럽도 2분기에 러시아 지역으로 물량이 몰렸던 기저효과 때문에 약 115억원을 기록하며 주춤했다는 겁니다.",
            "2차 VBP 영향과 전망: 2차 VBP가 시행되면 제품 판가가 5%에서 15% 수준 낮아질 것으로 전망되는데, 시행 시기가 2027년까지 이어질 수 있다는 거예요. 과거에도 가격이 내려가기 전에 수요가 미뤄졌던 적이 있어서 시행 전까지는 실적 변동성이 클 수밖에 없다는 겁니다. 결국 중국 수요가 살아나는 모습과 마진 개선을 차분히 지켜봐야 한다는 말이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 앞으로 주가가 어떻게 움직일지는 중국 수요가 살아나는지, 그리고 임플란트 비중을 높여서 마익이 좋아지는지가 ; 예측 의심: 2차 VBP가 시행되면 제품 판가가 5%에서 15% 수준 낮아질 것으로 전망되는데, 시행 시기가 2027년까",
          "body_chars": "6725",
          "link": "https://m.stock.naver.com/research/company/98485",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "ib5fe0881bb",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "DS투자증권",
          "title": "[DS투자증권] 대원제약 기다리며 회복을 준비",
          "easy1_title": "정부 약가 인하로 매출이 줄었지만 만성질환 처방으로 메꾸고 있습니다",
          "easy1_desc": "대원제약은 2026년 3분기 별도기준 매출액 약 1,393억원 및 영업손실 약 41억원을 달성했는데요, 펠루비정 등의 약가가 내려가면서 매출이 줄어든 영향이 컸다는 말이에요. 그렇지만 타바로젯이나 이달비 같은 만성질환 치료제 처방을 늘리면서 버티고 있는 셈이에요. 쉽게 말하면, 핵심 제품 가격이 깎여서 타격을 입었지만 다른 약품들로 빈자리를 채워나가는 중이라는 겁니다.",
          "easy2_title": "목표주가는 낮췄지만 신제품과 자회사 효율화로 회복을 기대하고 있습니다",
          "easy2_desc": "증권사는 실적 추정치와 업종 멀티플을 조정하면서 목표주가를 10,000원으로 낮춰 잡았는데요, 4분기 호흡기 성수기를 맞이하고 더마 코스메틱 사업도 넓히면서 2027년부터는 매출이 제자리로 돌아올 것으로 봤다는 거예요. 자회사 SD생명공학도 비용을 아끼면서 손실을 매분기 줄여가고 있다는 장점이 있거든요. 쉽게 말하면, 눈높이는 낮춰 잡았지만 내년 이후의 체질 개선을 기다려 보자는 말이에요.",
          "topic": "대원제약의 2026년 3분기 실적과 약가 인하 영향을 짚어보고, 만성질환 처방 확대와 신제품 개발을 통해 향후 실적 회복을 기대한다는 증권사의 분석이에요.",
          "points": [
            "약가 인하 타격: 정부의 약가 인하와 호흡기 수요가 줄어들면서 3분기 실적에 그대로 반영되었는데요, 펠루비정과 펠루비서방정 가격이 각각 46%와 23% 내렸기 때문이라는 겁니다. 뭔 소리냐면, 주력으로 팔던 호흡기 약품 가격이 내려가면서 전체 매출 감소로 이어졌다는 말이에요.",
            "만성질환 처방 확대: 호흡기 매출이 줄어든 자리를 이상지질혈증 치료제와 고혈압 치료제 처방을 늘리면서 메꾸고 있는데요, 타바로젯은 약 59억원으로 20.2% 늘었고 이달비 제품군도 약 43억원으로 견조한 성장세를 보였거든요. 쉽게 말하면, 한쪽이 주저앉는 동안 다른 만성질환 약들이 열심히 받쳐준 셈이에요.",
            "목표주가 하향과 신제품 기대: 실적 추정치와 업종 멀티플을 낮추면서 목표주가를 10,000원으로 내렸지만, P-CAB 시장 진출을 위한 DW4421 임상 3상을 진행 중이라는 장점이 있거든요. 2027년 초에 비미란성식도염 데이터를 확보하고 2028년에 제품을 내놓을 계획이라는 겁니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "6669",
          "link": "https://m.stock.naver.com/research/company/98484",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i78108ed3b5",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "DS투자증권",
          "title": "[DS투자증권] LS머트리얼즈 27년 주목할 턴어라운드 기업",
          "easy1_title": "내후년 실적이 살아날 거라 목표주가를 새로 잡았습니다",
          "easy1_desc": "DS투자증권에서 LS머트리얼즈의 목표주가를 14,000원으로 새로 제시했는데요, 주가수익비율(PSR) 방식을 써서 2027년 이익이 회복되는 초기라는 점을 고려해 계산했기 때문이라는 말이에요. 올해 확보해 둔 연료전지용 울트라커패시터(UC) 물량이 689억원에 달하고 추가 수주도 기대되는 데다가 주요 자회사의 적자 폭까지 줄어들면서 전체 이익이 커질 거라는 셈이에요. 쉽게 말하면, 내년에 본격적인 턴어라운드(실적 개선)가 시작될 거라고 본다는 겁니다.",
          "easy2_title": "연료전지와 자회사 덕분에 매출과 영업이익이 크게 늘어납니다",
          "easy2_desc": "2027년 전체 실적은 매출액 3,378억원으로 작년보다 63.6% 늘어나고, 영업이익은 122억원으로 흑자로 돌아설 거라고 추정했는데요, 세부적으로는 울트라커패시터 부문 매출이 1,236억원으로 204.9% 증가하고 영업이익률은 6%를 기록할 전망이기 때문이라는 거예요. 여기에 알루미늄 사업을 하는 자회사 하이엠케이 신공장이 가동되면서 매출이 늘고, 내년부터는 연간 감가상각비 약 60억원을 상쇄하며 영업적자 폭도 줄어들 거라는 겁니다. 쉽게 말하면, 본업인 울트라커패시터와 자회사가 함께 좋아지는 구조라는 말이에요.",
          "topic": "DS투자증권은 LS머트리얼즈가 연료전지용 매출 확대와 자회사 적자 축소에 힘입어 2027년에 본격적인 실적 턴어라운드를 맞이할 것으로 보았어요.",
          "points": [
            "연료전지 수주와 UC 성장: 올해 확보한 연료전지용 울트라커패시터 물량 689억원에 더해 연내 추가 수주도 기대되고 있는데요, 기존 풍력발전과 유피에스(UPS) 수요까지 더해져 큰 폭의 매출 성장이 예상된다는 거예요. 쉽게 말하면, 새로운 판로가 열리면서 울트라커패시터 사업부의 성장을 이끌고 있다는 말입니다.",
            "자회사 알루미늄 사업의 적자 축소: 자동차 부품과 소재를 다루는 자회사 하이엠케이가 작년에 신공장을 완공해 매출이 늘고 있는데요, 내년부터는 연간 감가상각비 약 60억원을 상쇄하면서 영업적자 폭이 줄어들 전망이라는 거예요. 결국 자회사의 부담이 줄어들면서 전반적인 이익 확대에 힘을 보태게 된다는 셈입니다.",
            "추가 생산시설 확장 검토: 연료전지용 울트라커패시터는 계열사 에코에너지가 위탁생산(OEM) 방식으로 만들고 있는데요, LS머트리얼즈 자체 생산능력(CAPA)과 에코에너지를 합치면 총 생산능력은 약 1,400억원 규모라는 거예요. 향후 추가 수주를 확보하면 실제 증설까지 검토하고 있어서 이에 대한 기대감이 주가 상승으로 이어질 수 있다고 봤다는 겁니다."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "point2 근거 원문에 없음",
          "body_chars": "8062",
          "link": "https://m.stock.naver.com/research/company/98483",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "id0d5e25839",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "DS투자증권",
          "title": "[DS투자증권] 이수페타시스 3Q26 Re: 놀라운 수익성의 연속",
          "easy1_title": "환율이 떨어져도 이익은 든든하게 챙겼어요",
          "easy1_desc": "DS투자증권은 이수페타시스가 3분기 연결 기준 매출액 3,892억원과 영업이익 949억원을 기록했다고 밝혔는데요. 원달러 환율이 떨어지면서 매출액 성장에 부담을 줬지만, 다중적층 매출이 늘어나고 판가를 올리면서 수익성이 든든했다는 말이에요. 쉽게 말하면, 환율 환경은 나빴어도 제품 구성이 좋아져서 이익을 잘 지킨 셈이라는 겁니다.",
          "easy2_title": "앞으로는 새로운 제품을 본격적으로 팔 계획이에요",
          "easy2_desc": "그래서 증권사는 4분기부터 주요 고객사를 향한 멀티램 스위치와 가속기의 초도 양산이 시작될 것으로 봤는데요. 수주잔고에 다중적층 제품 비중이 높아서 제품 믹스 개선 효과가 본격적으로 나타날 거라는 계획이에요. 물건을 더 비싸고 좋은 것으로 팔 수 있는 장점이 있는데, 대신 원재료 수급에 문제가 생기면 생산에 차질이 빚어질 수도 있다는 점도 함께 따라온다는 겁니다.",
          "topic": "이수페타시스의 3분기 실적 평가와 앞으로의 실적 전망에 대한 DS투자증권의 생각이에요.",
          "points": [
            "3분기 실적과 수익성 개선: 원달러 환율이 하락하면서 매출액 성장에 부담을 주었지만 페타시스는 전분기 대비 수익성이 5%p 개선되었다고 해요. 뭔 소리냐면, 다중적층 매출 비중이 늘고 판가 인상과 원재료 래깅효과가 함께 작용했다는 말이에요.",
            "4분기 믹스 개선 기대: 증권사는 4분기 연결 기준 매출액 4,442억원과 영업이익 1,111억원을 전망했는데요. 주요 고객사향 멀티램 스위치와 가속기 초도 양산이 시작되면서 제품 믹스 개선 효과가 본격화될 것으로 기대된다는 겁니다.",
            "2027년 전망과 목표주가 제시: 그래서 증권사는 2027년 매출액 2조 1,583억원과 영업이익 5,396억원을 전망하며 목표주가 12만원을 제시했는데요. ASIC 고객사들의 물량이 늘어나고 증설 효과가 반영되면서 양적 성장과 질적 상승이 동시에 나타나는 원년이 될 것이라는 분석이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 주요 고객사향 멀티램 스위치와 가속기 초도 양산이 시작되면서 제품 믹스 개선 효과가 본격화될 것으로 기대된다",
          "body_chars": "8394",
          "link": "https://m.stock.naver.com/research/company/98482",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i0748a3b5ad",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "DS투자증권",
          "title": "[DS투자증권] 롯데관광개발 결국 좋은 업황을 따라갈 주가",
          "easy1_title": "잠깐 나빠진 실적에 흔들리지 말고 연간 흐름을 보자",
          "easy1_desc": "롯데관광개발의 3분기 실적이 기대치에 못 미치는 것처럼 비춰졌는데요, 카지노 매출이 1,273억원으로 8.6% 줄어 역성장한 것처럼 보일 수 있다는 겁니다. 하지만 단기 실적은 홀드율에 따라 흔들릴 수 있어서 연간 성장 흐름에 초점을 맞춰야 한다는 판단이에요. 쉽게 말하면, 눈앞의 숫자 하나에 속지 말고 전체적인 흐름을 보자는 말이에요.",
          "easy2_title": "연말 이벤트와 노선 확대 덕분에 4분기부터 다시 좋아질 겁니다",
          "easy2_desc": "그래서 증권사는 12분기부터 제주도와 연결 도시가 추가로 늘어나고, 테이블도 200개 초반 수준으로 늘어날 것으로 예상했는데요, 바카라데이 같은 연말 이벤트가 겹치면서 다시 실적 성장을 보여줄 것으로 기대한다는 겁니다. 4분기 매출액은 1,982억원으로 5.9% 늘어나고 영업이익은 564억원으로 27.5% 늘어날 것으로 전망되는데, 대신 단기 주가 반등이 크게 나타나지 않고 있다는 점도 같이 염두에 두어야 한다는 겁니다.",
          "topic": "롯데관광개발의 단기 실적 부진은 일시적이며, 견조한 지표와 연말 성장세를 바탕으로 비중 확대 전략이 유효하다는 DS투자증권의 분석이다.",
          "points": [
            "지표는 튼튼하다: 3분기 총 드롭액은 8,759억원으로 전년 8,485억원 및 전분기 7,606억원보다 늘어났는데요, 방문객도 9월에 66,393명을 기록하며 꾸준히 늘어나고 있다는 겁니다. 뭔 소리냐면, 매출 숫자만 보면 줄어든 것 같지만 실제 고객들이 쓰는 돈과 방문객은 오히려 탄탄하다는 말이에요.",
            "4분기 성장 재개: 그래서 증권사는 4분기 매출액을 1,982억원, 영업이익을 564억원으로 전망했는데요, 한한령 해제 기대감과 테이블 수 확대가 맞물리기 때문이라는 겁니다. 쉽게 말하면, 연말 분위기와 맞물려 다시 실적이 살아날 조건들이 갖춰져 있다는 말이에요.",
            "목표주가와 투자 전략: 괴리율을 고려해 목표주가는 15,000원으로 낮췄지만, 퍼(PER, 주가수익비율)가 20배 아래로 내려온 현재 주가에서는 비중 확대 전략이 유효하다고 봤는데요, 2027년에 리파이낸싱으로 금융비용이 줄어들면 추정치가 더 높아질 가능성도 있다는 겁니다. 대신 주가가 바로 크게 반전되지는 않고 있다는 단점도 있는데, 장점은 밸류에이션이 낮아져 부담이 적어졌다는 거예요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "9013",
          "link": "https://m.stock.naver.com/research/company/98480",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "ib5ebe6ca95",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "DS투자증권",
          "title": "[DS투자증권] SBS 27년 본격 턴어라운드 전망",
          "easy1_title": "작년 3분기에는 광고를 잘 지켰지만 제작비가 늘어났거든요",
          "easy1_desc": "에스비에스(SBS)의 26년 3분기 연결 매출액이 2,549억원으로 7% 늘었는데요, 아시안게임 중계 효과와 드라마 재벌X형사2 성과 덕분에 광고 수익이 잘 방어됐다는 말이에요. 그런데 당분기 연결 기준 방송제작비가 1,730억원으로 8% 늘어나면서 수익성은 소폭 하락했다는 겁니다. 쉽게 말하면, 돈은 조금 더 벌었는데 쓸데없이 나간 제작비가 더 컸던 셈이에요.",
          "easy2_title": "27년에는 실적이 확실하게 살아날 것으로 기대하고 있습니다",
          "easy2_desc": "그래서 증권사는 27년에 에스비에스의 실적 턴어라운드가 본격화될 거라고 봤는데요, 광고 시장이 바닥을 다지는 동시에 넷플릭스와의 파트너십 효과가 커지기 때문이라는 거예요. 여기에 스포츠나 선거 같은 이벤트가 없어서 제작비 부담도 줄어들고 인력 감소와 인공지능(AI) 활용으로 판관비까지 아낄 수 있다는 겁니다. 쉽게 말하면, 비용은 줄고 할 일은 늘어나서 내년에는 훨씬 좋아질 거라는 말이에요.",
          "topic": "에스비에스의 3분기 실적 성과와 27년 본격적인 실적 개선 전망에 대한 증권사의 분석이에요.",
          "points": [
            "광고 방어와 비용 증가: 아시안게임과 드라마 성과로 광고 수익은 좋았지만 제작비가 늘어났는데요, 뭔 소리냐면 들어온 돈은 있지만 나간 돈이 많아 영업이익이 줄었다는 말이에요. 당분기 연결 기준 방송제작비가 1,730억원으로 8% 늘어나면서 수익성이 소폭 하락했거든요.",
            "27년 실적 턴어라운드 전망: 그래서 증권사는 27년 연결 매출액을 1.05조원, 영업이익을 297억원으로 추정했는데요, 방송광고 점유율이 오르고 글로벌 온라인 동영상 서비스(OTT) 선판매가 기대되기 때문이라는 거예요. 비용 쪽에서도 스포츠나 선거 이벤트가 사라지고 인공지능을 쓰면서 부담이 줄어든다는 겁니다.",
            "목표주가 산출: 에스비에스에 대한 투자의견과 목표주가는 그대로 유지했는데요, 목표주가는 27년 실적에 씨제이이엔엠(CJ ENM)의 27년 예상 주가수익비율(PER)과 같은 15배를 곱해서 정했다는 거예요. 쉽게 말하면, 비슷한 회사의 가치 매기는 방식을 그대로 가져다 쓴 셈이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "11440",
          "link": "https://m.stock.naver.com/research/company/98479",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "id34b784000",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "교보증권",
          "title": "[교보증권] 에이디테크놀로지 변하지 않은 방향성, 늦어지는 증명",
          "easy1_title": "프로젝트가 미뤄져서 실적이 예상보다 덜 나왔습니다",
          "easy1_desc": "교보증권은 에이디테크놀로지의 연결 실적을 매출액 252억원, 영업적자 14억원으로 기록했다고 봤는데요. 예상치를 크게 하회한 실적을 기록한 핵심은 고객사 설계 지연 및 메모리 확보 난항에 따른 프로젝트 매출 인식 이연이라는 거예요. 인식되어야할 프로젝트들이 4분기, 특히 HBM이 사용되는 개발 프로젝트는 HBM 확보 난항으로 인해 이연 규모가 클 것으로 예상된다는 겁니다. 쉽게 말하면, 돈을 벌어와야 할 프로젝트들이 줄줄이 밀리면서 실적이 쪼그라들었다는 말이에요.",
          "easy2_title": "앞으로 체급이 바뀔 테니 2028년을 기다려보자는 겁니다",
          "easy2_desc": "교보증권은 개발 프로젝트 지연으로 올해는 저조하지만, 중장기적인 관점에서는 사업 체급 자체가 바뀔 것으로 예상했는데요. 2027년부터는 양산 매출 기여가 증가하기 시작하며 2028년에는 양산 매출이 개발 매출을 크게 앞지를 전망이라는 거예요. 양산 매출이 유의미하게 상승하는 내년부터는 올해와 같은 변동성이 제한적일 것으로 예상된다는 장점이 있는데, 대신 지금 당장은 실적 증명이 늦어진다는 점도 같이 따라온다는 겁니다. 쉽게 말하면, 당장의 부진은 아쉽지만 2028년을 타겟으로 잡은 큰 그림은 유효하다는 말이에요.",
          "topic": "에이디테크놀로지의 3분기 실적 부진과 중장기 성장 방향성에 대한 교보증권의 분석이에요.",
          "points": [
            "실적 부진과 매출 이연: 교보증권은 에이디테크놀로지가 매출액 252억원, 영업적자 14억원을 기록하며 예상치를 밑돌았다고 밝혔는데요. 고객사 설계 지연과 HBM 확보 난항 때문에 프로젝트 매출 인식이 4분기나 내년으로 밀렸기 때문이라는 거예요. 뭔 소리냐면, 물건을 만들어 팔아서 찍어내야 할 매출이 뒤로 미뤄지면서 적자를 냈다는 말이에요.",
            "수주 잔고와 체질 개선: 그렇지만 개발 수주 추이를 보면 지난 연말 대비 잔고가 20% 이상 확대되었고 선단 공정 비중은 96% 이상, AI향 프로젝트 수주는 75% 이상으로 확인되었다고 분석했는데요. 2027년부터 양산 매출 기여가 늘어나고 2028년에는 양산 매출이 개발 매출을 크게 앞지를 전망이라는 거예요. 쉽게 말하면, 지금은 지연되고 있지만 쌓여 있는 수주 퀄리티를 보면 나중에는 체급이 완전히 달라진다는 셈이에요.",
            "투자의견 유지와 목표주가 하향: 교보증권은 에이디테크놀로지에 대한 투자의견은 BUY를 유지하되, 목표주가는 28,000원으로 하향했다고 밝혔는데요. 개발 프로젝트의 매출 인식 불확실성 때문에 실적 추정치를 크게 조정한 영향이라는 거예요. 양산 매출이 크게 올라오지 않아 불확실성은 있지만, 2028년을 바라보면 매우 매력적인 주가 레벨이라는 의견이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 인식되어야할 프로젝트들이 4분기, 특히 HBM이 사용되는 개발 프로젝트는 HBM 확보 난항으로 인해 이연 규; 예측 의심: 양산 매출이 유의미하게 상승하는 내년부터는 올해와 같은 변동성이 제한적일 것으로 예상된다는 장점이 있는데, ",
          "body_chars": "8865",
          "link": "https://m.stock.naver.com/research/company/98477",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i72ce1f7530",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "교보증권",
          "title": "[교보증권] 솔브레인 사이클 속에서 안정적인 선택지",
          "easy1_title": "실적이 좋아졌는데 목표주가는 낮췄다고 해요",
          "easy1_desc": "교보증권은 솔브레인의 3Q26 연결 실적을 살펴봤는데요, 매출액 3,449억원에 영업이익 506억원을 기록하며 호실적 추이를 유지했다고 해요. 그런데도 목표주가는 420,000원으로 낮췄다는 말이에요. 실적은 좋은데 자회사 연결 영향 등으로 수익성 개선은 아쉬워서 산업 추이를 반영해 조정한 셈이라는 겁니다.",
          "easy2_title": "앞으로 웨이퍼가 많이 늘어나니 안정적이라 봐요",
          "easy2_desc": "교보증권은 반도체가 높은 수익성을 갖추면 고객사가 생산량 확대에 집중한다고 봤는데요, 결국 웨이퍼 투입량이 증가할 수밖에 없다는 의미예요. 동사가 공급하는 소재는 단가보다는 물량 변동 영향이 크거든요. 그래서 빠른 램프업 수요와 신규 팹 증설이 성장세를 이끌어갈 전망이라는 겁니다.",
          "topic": "교보증권은 솔브레인의 3Q26 실적과 산업 추이를 바탕으로 목표주가를 하향 조정하면서도 안정적인 성장성에 주목했어요.",
          "points": [
            "3분기 실적과 성장 추세: 교보증권은 솔브레인의 3Q26 연결 실적을 살펴봤는데요, 매출액 3,449억원과 영업이익 506억원을 기록했다고 해요. 고객사 신규 라인의 적극적인 램프업 수요 대응과 연결 자회사 편입 효과 덕분에 호실적을 유지했다는 말이에요. 비우호적인 환율 환경 속에서도 성장 추세는 업황과 함께 이어질 것으로 예상했어요.",
            "소재 물량 증가와 팹 증설: 교보증권은 동사가 공급하는 소재가 단가 변동보다는 물량 변동 영향이 매우 큰 제품군이라고 봤는데요, 고객사들의 웨이퍼 투입량 증가와 비례해 성장한다는 거예요. 신규 팹 증설 또한 기회로 작용해 대응 물량을 증가시킬 전망이라는 말이에요. 특히 메모리와 파운드리 등 신규 팹 건설 증가 추이 속에서 넓은 포트폴리오로 대응한다고 설명했어요.",
            "목표주가 하향 조정: 교보증권은 솔브레인에 대한 투자의견은 유지하고 목표주가는 420,000원으로 하향 조정했다고 해요. 매출 성장성은 두드러지지만 자회사 연결 영향 등으로 수익성 개선은 아쉬운 상황을 반영했다는 거예요. 다만 현 주가 수준에서는 안정적인 성장성이 돋보이며, 추후 유리기판 및 미국 내 영업 확대를 감안하면 더 매력적인 선택지라고 강조했어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "9472",
          "link": "https://m.stock.naver.com/research/company/98476",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i7b3ff88d59",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "교보증권",
          "title": "[교보증권] 네패스 NDR 후기: 선도 OSAT를 향한 방향성",
          "easy1_title": "환율이 불리해도 단가를 올리고 물량을 늘려 실적을 지켰다",
          "easy1_desc": "교보증권은 네패스의 3Q26 연결 실적을 살펴보았는데요, 매출액 1,648억 원과 영업이익 168억 원을 기록했다고 밝혔습니다. 환율 환경이 비우호적이었는데도 단가를 올리고 신규 물량에 대응하면서 긍정적인 실적 추이를 유지했다는 겁니다. 쉽게 말하면, 어려운 조건 속에서도 수익성을 잘 지켜낸 셈이라는 말이에요.",
          "easy2_title": "내년부터 AI와 고대역폭 메모리 관련 물량으로 더 크게 성장하겠다",
          "easy2_desc": "교보증권은 신규 어플리케이션 대응을 위한 보완 투자가 시작되면서 내년부터 본격적으로 물량을 늘려 인공지능(AI) 향 매출 비중을 끌어올릴 전망이라고 전했습니다. 파운드리의 외주 구조 변화와 맞물려 선단 물량이 확대되는 기회를 맞이했다는 계획인데요, 외주 효용이 높아지면서 최선단의 제품군 관련 외주 논의도 존재한다는 겁니다. 대신 모바일 중심 패키징에서 벗어나 새로운 선단 물량을 얼마나 안정적으로 소화하느냐가 중요한 과제로 남는다는 점도 같이 따라온다는 겁니다.",
          "topic": "교보증권은 네패스가 3Q26에 양호한 실적을 거두고, 파운드리 외주 구조 변화와 신규 어플리케이션 확대를 통해 선도 OSAT(외주 반도체 패키지·테스트 전문 기업)로 도약할 것으로 전망했다.",
          "points": [
            "3Q26 실적 리뷰: 교보증권은 3Q26 연결 실적이 매출액 1,648억 원과 영업이익 168억 원을 기록했다고 분석했습니다. 환율이 불리했음에도 8인치 Bumping 수익성 개선과 하나마이크론 협업 물량, 도금액 부문의 성장세가 실적을 이끌었다는 거예요.",
            "구조적 변화와 기회: 파운드리의 한정된 내부 리소스 때문에 외주 효용이 높아지면서 최선단 제품군 관련 외주 논의가 진행되고 있다고 파악했습니다. 뭔 소리냐면, 단순한 모바일 중심 패키징 업체를 넘어 선단 물량을 확대할 수 있는 구조적 기회를 맞이했다는 말이에요.",
            "2027년 실적 추정 및 투자의견: 교보증권은 2027년 연결 매출액을 6,880억 원, 영업이익을 915억 원으로 추정하며 투자의견 BUY와 목표주가 40,000원을 유지했습니다. 국내에서 외주 산업 구조 변화에 맞춰 선단 대응이 가능한 유일한 WLP(웨이퍼 레벨 패키지) 기업으로 자리 잡을 것이라는 전망이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "9180",
          "link": "https://m.stock.naver.com/research/company/98475",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i34b57e8768",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "교보증권",
          "title": "[교보증권] 알테오젠 잘하고 있는데 왜 그래요",
          "easy1_title": "실적은 잘 나오고 있는데 주가 목표만 낮춰 잡았습니다",
          "easy1_desc": "교보증권은 알테오젠의 투자의견을 Buy로 유지하면서도 목표주가는 400,000원으로 내렸는데요, 섹터 비수기 때문에 멀티플이 낮아지고 약가 인하 대상에 포함되면서 2029년 이후 로열티 추정치를 조금 낮췄기 때문이라는 거예요. 여러 딜을 체결해 온 이력이 있어서 노이즈가 따라올 수는 있지만 주가에 너무 과하게 반영되었다고 보고 있어요. 쉽게 말하면, 회사는 잘 굴러가고 있는데 주변 분위기 때문에 눈높이를 살짝 낮춘 셈이라는 말이에요.",
          "easy2_title": "특허 분쟁도 승기를 잡고 있고 전환율도 빠르게 오르고 있어요",
          "easy2_desc": "키트루다 Qlex 전환율이 계속 오르면서 3분기 해당 매출은 약 1조 원 수준으로 전분기 대비 79.3% 성장했거든요. MSD는 출시 2년 안에 전환율 30~40%를 달성하겠다고 했는데 그 전망대로 잘 가고 있는 모습이 확인됐다는 겁니다. 할로자임과 MSD의 특허 분쟁도 독일에서 판매금지 가처분이 취소되고 미국 PGR에서도 모두 이기면서 마무리되는 방향으로 가고 있다는 장점이 있어요. 쉽게 말하면, 실적과 관련된 걱정거리들은 차근차근 풀려가고 있다는 겁니다.",
          "topic": "교보증권은 알테오젠에 대해 투자의견 Buy를 유지하고 목표주가를 400,000원으로 하향 조정했어요.",
          "points": [
            "키트루다 전환율 상승: MSD는 출시 2년 안에 전환율 30~40%를 달성하는 것을 목표로 진행 중이며 해당 전망에 잘 맞춰서 성장하고 있는 모습이 확인됐거든요. 이에 따라 2028년까지 총 10억 달러의 판매 마일스톤을 무리 없이 받을 수 있을 것으로 교보증권은 추정했어요. 뭔 소리냐면, 핵심 제품의 실적이 목표대로 순조롭게 쌓이고 있다는 말이에요.",
            "특허 이슈 해소: 할로자임과 MSD의 특허 분쟁 또한 승기를 잡으며 마무리되는 방향으로 진행 중인데요, 독일의 경우 키트루다SC 판매금지 가처분이 취소되었고 미국 내 PGR 14건에서도 모두 승리했거든요. 뉴저지 연방법원에 제기된 특허침해 소송은 본안 판단을 앞두고 있지만 특허 침해의 근거가 되는 청구항들이 PGR 내에서 특허성이 부정되어 해당 소송 또한 큰 이슈가 없을 것으로 교보증권은 추정했어요. 쉽게 말하면, 법적 불확실성이 거의 해소되었다는 겁니다.",
            "목표주가 하향과 밸류에이션: 교보증권은 섹터 비수기로 인한 멀티플 하향 및 약가 인하 대상 포함을 이유로 목표주가를 400,000원으로 내렸는데요, 다수의 딜 체결 이력이 있는 만큼 여러 노이즈가 따라올 수는 있지만 과도하게 주가에 반영되었다고 전망했어요. 키트루다 Qlex 처방 실적 또한 전월 대비 성장하는 모습을 보여주고 있어 밸류에이션 매력도가 부각되는 구간이라고 판단한다는 겁니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "7454",
          "link": "https://m.stock.naver.com/research/company/98473",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "if17a99e796",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "교보증권",
          "title": "[교보증권] 유한양행 3Q26 Review; 다져가는 시간",
          "easy1_title": "약품과 헬스케어가 끌고 가서 매출이 늘었습니다",
          "easy1_desc": "유한양행의 3분기 연결 매출액은 6,043억 원으로 전년 동기 대비 6.0% 늘었는데요, 약품사업부와 헬스케어 사업부가 성장을 이끌었거든요. 약품사업부는 3,738억 원으로 4.5% 커졌고 헬스케어 사업부는 692억 원으로 32.7% 성장했다는 말이에요. 쉽게 말하면, 주력 사업들이 골고루 힘을 내서 전체 매출이 불어난 셈이라는 겁니다.",
          "easy2_title": "유한화학이 힘을 보태 이익이 늘어날 걸로 봤습니다",
          "easy2_desc": "교보증권은 연결 기준 영업이익이 332억 원으로 전년 동기 대비 50.8% 늘었다고 분석했는데요, 연초에 세웠던 가이던스(예상치)보다 이익이 조금 더 좋아질 수 있다고 추정했어요. 그 이유는 유한화학의 실적이 좋아졌기 때문인데, 해외사업부도 수주가 꾸준히 늘어나는 흐름이라는 거예요. 서서히 기초를 단단하게 다져가는 과정이라고 볼 수 있습니다.",
          "topic": "교보증권은 유한양행의 3분기 실적이 매출과 영업이익 모두 늘어나는 등 안정적인 성장을 보여주었다고 분석했어요.",
          "points": [
            "사업부별 실적 성장: 약품사업부 매출은 3,738억 원으로 전년 동기 대비 4.5% 늘었고 헬스케어 사업부는 692억 원으로 32.7% 성장했는데요, 안티푸라민 같은 주요 품목과 프로바이오틱스가 실적을 이끌었거든요. 새로운 호흡기 제품을 내놓으며 계절 변화에 대응하고 있다는 말이에요.",
            "투자의견과 목표주가: 교보증권은 유한양행에 대해 투자의견 Buy(매수)를 유지하고 목표주가 130,000원을 그대로 지켰는데요, 새로운 성장 동력을 확보해 나가고 있기 때문이라는 거예요. 2027년 영업이익은 1,826억 원으로 추정했어요.",
            "신약 임상과 기술이전: 알레르기 치료제 레시게르셉트(YH35324)는 1상에서 기존 표준 치료제인 졸레어보다 더 낫다는 점을 입증하고 2상을 시작했는데요, 임상을 진행하는 동시에 기술이전을 노리는 전략을 유지하고 있다는 겁니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "9587",
          "link": "https://m.stock.naver.com/research/company/98472",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "id6e54f9571",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "교보증권",
          "title": "[교보증권] 에이프릴바이오 보유 현금보다 싼 시가총액",
          "easy1_title": "회사가 가진 현금보다 주식 가치가 더 낮아요",
          "easy1_desc": "교보증권은 에이프릴바이오가 대규모 투자유치로 4,300억원의 현금 유동성을 갖고 있는데, 시가총액은 3,489억원에 머물러 있다고 봤는데요. 보유한 현금보다 전체 주식의 가치가 더 싸진 셈이라는 말이에요. 주가가 낮아 밸류에이션 매력도가 있다는 장점이 있는 반면, 파이프라인 개발에 대한 불확실성도 같이 남아 있다는 겁니다. 쉽게 말하면, 곳간에 돈은 가득한데 회사의 전체 가격은 그보다 낮게 평가받는 상황이라는 거예요.",
          "easy2_title": "주요 파이프라인 임상과 자산 다각화를 지켜봐야 해요",
          "easy2_desc": "그래서 교보증권은 회사가 확보한 현금으로 외부 기술 도입과 AOC 개발에 활용 가능한 링커 기술 등을 통해 자산 다각화를 진행할 계획이라고 밝혔는데요. 주가 상승을 이끌 트리거는 기존 파이프라인의 진전에서 나올 것으로 판단했다는 거예요. 연구 개발이 진척되면 기업 가치가 올라갈 수 있다는 장점이 있지만, 개발 과정에서 문제가 생기면 주가에 부담이 될 수도 있다는 점도 따라온다는 겁니다. 쉽게 말하면, 새로운 기술 도입과 임상 결과에 따라 회사의 방향이 크게 달라질 수 있다는 말이에요.",
          "topic": "에이프릴바이오의 풍부한 현금 유동성과 파이프라인 진행 상황을 바탕으로 한 기업 가치 분석이에요.",
          "points": [
            "현금 대비 낮은 시가총액: 교보증권은 대규모 유상증자로 3,468억원의 자금을 유치하면서 회사가 4,300억원의 현금 유동성을 확보했다고 분석했는데요. 현재 시가총액은 3,489억원으로 보유 현금보다도 낮아진 상태라는 거예요. 뭔 소리냐면, 회사가 가진 현금만 해도 지금 주식시장 전체가치보다 많다는 말이에요.",
            "R3와 A1 파이프라인 현황: APR-R3는 글로벌 임상으로 중등도~중증 성인 아토피피부염 환자 200명을 대상으로 2027년 중반 임상을 개시할 목표라고 밝혔는데요. 반면 APR-A1은 룬드벡이 TED 적응증 개발 중단을 발표하면서 반환 우려가 존재하지만, CD40L 차단 기전을 바탕으로 타 적응증 개발이 확정되면 우려를 해소할 수 있다고 봤다는 거예요.",
            "투자의견과 목표주가 조정: 교보증권은 에이프릴바이오에 대해 투자의견 Buy를 유지하고 목표주가는 45,000원으로 하향 조정했다고 밝혔는데요. 확보한 현금을 바탕으로 외부 기술 도입과 링커 기술 등을 들여와 자산 다각화를 진행할 예정이라는 거예요. 쉽게 말하면, 목표주가는 낮췄지만 저렴해진 시가총액과 자산 다각화 전략 덕분에 매력은 남아 있다고 본 셈이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "7160",
          "link": "https://m.stock.naver.com/research/company/98470",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "id6a070d2bb",
          "source_name": "네이버 리서치 종목",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권] 알테오젠 신뢰와 수급의 회복이 필요하다",
          "easy1_title": "임상 환자 수 줄어든 건 정상적인 과정이라네요",
          "easy1_desc": "알테오젠의 Enhertu SC 제형 임상 1상에서 환자 수가 76명에서 17명으로 줄어든 걸 두고 걱정이 많았는데요, 알고 봤더니 첫 번째 단계인 용량 확대 전 단계가 마무리되면서 자연스럽게 줄어든 거랍니다. 다른 비슷한 약인 다이이찌산쿄의 약물 임상에서도 환자가 줄었다가 다시 늘어난 적이 있거든요. 쉽게 말하면, 임상 진행 과정에서 흔히 볼 수 있는 일이라는 말이에요.",
          "easy2_title": "적은 인원으로도 충분하니 너무 불안해 마세요",
          "easy2_desc": "시장은 17명이라는 적은 숫자로 임상을 제대로 할 수 있을지 의심했지만, 제형을 바꾸는 방식이라 예상 가능한 독성 범위를 확인하기에 17명으로도 충분하다고 하나증권은 분석했는데요, 회사의 설명이 시장에 잘 전달되지 않은 점이 문제였다는 거예요. 불신을 씻어내고 Part 1에서 Part 2로 잘 넘어가는 모습 보여주는 게 호재로 작용할 거라는 셈이에요.",
          "topic": "알테오젠의 임상 1상 환자 수 감소를 둘러싼 우려에 대해 하나증권은 신뢰 회복이 중요하다고 봤어요.",
          "points": [
            "환자 수 감소의 이유: 임상 현황 업데이트에서 등록 환자가 76명에서 17명으로 줄어든 건 첫 번째 단계인 용량 확대 과정이 끝났기 때문인데요, 안전성 이슈를 확인한 뒤 두 번째 단계로 넘어가면 환자 수는 다시 늘어날 거라고 해요. 다른 약물 임상에서도 이와 비슷한 과정을 거쳤던 사례가 있거든요.",
            "17명이라는 인원 규모: 시장에서는 임상 1상 인원이 17명이면 너무 적은 게 아니냐고 걱정했지만, 완전 신약이 아니라 제형 변경이라 탐색할 용량 범위가 넓지 않다는 거예요. 이전에 진행된 듀피젠트와 관련된 임상도 1상은 40명으로 마쳤던 만큼 지나치게 우려할 필요는 없다고 짚었어요.",
            "향후 반등의 조건: 시장이 여전히 악재에 민감하게 반응하고 있어서 회사의 설명이 충분히 설득되지 못했던 게 문제였다고 보는데요, 앞으로 첫 번째 단계에서 두 번째 단계로 무사히 넘어가는 과정이 주가 회복의 중요한 계기가 될 거라고 해요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "8908",
          "link": "https://m.stock.naver.com/research/company/98469",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "iedf5c45653",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "한화투자증권",
          "title": "[한화투자증권]  EU 하이브리드 쿼터 관련 코멘트",
          "easy1_title": "유럽이 하이브리드 차 수입을 제한하기 시작했는데요",
          "easy1_desc": "한화투자증권에 따르면 EU 집행위원회가 하이브리드 차량에 수입 쿼터를 설정하는 세이프가드 잠정 조치를 발표했다고 해요. 중국을 겨냥한 조치였지만 WTO 규정에 따라 한국과 일본 등 주요 수출국 모두가 규제 대상에 포함되었다는 겁니다. 쉽게 말하면, 중국을 잡으려다 한국 차까지 함께 묶인 셈이라는 말이에요.",
          "easy2_title": "우리나라 자동차 수출에 미칠 영향은 크지 않다고 봤어요",
          "easy2_desc": "2025년 수출량에 15%를 더한 물량으로 200일간 쿼터가 정해졌는데요, 현대차와 기아의 유럽 수출 물량을 살펴보면 아직 쿼터 여유가 꽤 남아 있다는 거예요. 현대차와 기아 모두 앞으로 유럽에서는 배터리 전기차 중심의 판매 전략을 세우고 있다는 장점이 있는데요, 대신 중국 업체들은 현지 생산 한계 때문에 타격을 피하기 어려울 거라는 전망이에요.",
          "topic": "EU의 하이브리드 자동차 수입 쿼터 잠정 조치 발효와 국내 자동차 산업에 미치는 영향에 대한 분석이에요.",
          "points": [
            "EU 세이프가드 잠정 조치: EU 집행위원회가 하이브리드 차량에 수입 쿼터를 설정하는 긴급수입제한 조치를 12월 1일부터 발효한다고 밝혔는데요. 특정 국가만 겨누지 못하는 무차별 원칙 때문에 한국과 일본 등 주요 수출국의 모든 하이브리드 차량이 대상에 포함되었다는 겁니다. 뭔 소리냐면, 중국산을 막으려다 우방국 차량까지 함께 제한을 받게 되었다는 말이에요.",
            "한국의 쿼터 물량과 여유: 한국은 2025년 수출 실적인 107,104대에 15%를 가산한 물량을 기준으로 2027년 6월 18일까지 67,924대가 제한되는데요. 분기별로 보면 1분기 30,566대, 2분기 31,245대, 3분기 6,113대의 쿼터가 배정되었다는 거예요. 쉽게 말하면, 현대차와 기아의 분기 평균 수출 규모가 2.3만 대에서 2.4만 대 수준이라 아직은 여유가 있다고 봤습니다.",
            "중국 업체의 판매 둔화 전망: 반면 중국산 하이브리드 물량은 올해 총 74만 대를 넘어설 것으로 예상되는데 연간 35만 대의 수입 쿼터가 적용되면서 타격이 불가피하다고 했는데요. 중국 업체들은 현지 생산 능력을 단기간에 높이기 어려워서 올해 11월까지 확보한 재고를 소진하는 전략을 쓸 수밖에 없다고 분석했어요. 쉽게 말하면, 중국은 판매 감소가 뚜렷해질 것이라는 셈이에요."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "easy2 근거 원문에 없음",
          "body_chars": "5126",
          "link": "https://m.stock.naver.com/research/industry/47227",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i55029de321",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "유안타증권",
          "title": "[유안타증권]  디지털 자산 Daily",
          "easy1_title": "비트코인이 6만 달러 아래로 떨어졌습니다",
          "easy1_desc": "유안타증권은 비트코인이 6만 달러를 다시 밑돌았다고 밝혔는데요, 거시 경제 문제 때문이 아니라 코인 자체의 수요가 빠져나가서 그런 거래 결과가 나왔다는 거예요. 선물 미결제약정이 일주일 만에 반으로 줄었고 현물 상장지수펀드(ETF)도 11월에 사상 최대 유출을 기록했거든요. 쉽게 말하면, 시장에서 코인을 사려는 힘이 눈에 띄게 줄어든 셈이라는 말이에요.",
          "easy2_title": "당장은 약세지만 중장기적으로는 기회가 될 수 있습니다",
          "easy2_desc": "그래서 증권사는 단기적으로는 수요가 빠져나가서 약세를 보이지만, 중기적으로는 가격이 헐값인 저평가 상태라서 유출 압력과 부딪혀 중립을 유지할 거라고 봤는데요, 장기로 보면 이 저평가와 제도권 편입 움직임 덕분에 강세로 돌아설 수 있다는 거예요. 한국의 기업공개(ICO) 금지 해제나 스테이블코인 제도화가 바로 그런 제도권 편입의 연장선에 있다는 장점이 있거든요. 쉽게 말하면, 지금은 힘들어도 나중에는 법적인 테두리 안에서 힘을 받을 수도 있다는 겁니다.",
          "topic": "비트코인의 최근 가격 하락 원인과 단기 및 중장기 시장 전망에 대한 유안타증권의 분석이에요.",
          "points": [
            "가격과 수급 동향: 유안타증권은 비트코인 가격이 6만 달러를 다시 밑돌았고 현물 상장지수펀드(ETF)에서 11월 누적 47억 1천만 달러가 빠져나가며 월간 사상 최대 유출을 기록했다고 밝혔는데요, 장기보유자들까지 매물을 내놓기 시작했다는 거예요. 뭔 소리냐면, 살려는 사람보다 팔려는 사람이 훨씬 많아졌다는 말이에요.",
            "시장 밸류에이션: 반면에 가격 지표인 엠브이알비 제트(MVRV-Z) 지표는 0.27을 기록해서 여전히 저평가 구간에 머물러 있다고 봤는데요, 가격은 많이 내려갔지만 내재된 가치에 비해 헐값이라는 뜻이에요. 쉽게 말하면, 손실 상태 물량이 사상 최대로 늘어났지만 대형 주소들은 오히려 물량을 사모으는 중이라는 겁니다.",
            "규제와 제도 변화: 한국 당국이 9년 만에 기업공개(ICO) 금지 해제를 추진하고 은행 중심의 원화 스테이블코인 규율을 제안했다고 밝혔는데요, 이런 규제 움직임이 중장기적으로는 시장에 긍정적인 영향을 줄 수 있다는 거예요. 다만 단기적으로는 AI 트레이드 강세 속에서 비트코인이 소외될 수 있다는 단점도 함께 언급했어요."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "47",
          "check_flags": "point1 근거 원문에 없음",
          "body_chars": "7339",
          "link": "https://m.stock.naver.com/research/industry/47226",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i442bc80793",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "한화투자증권",
          "title": "[한화투자증권]  반도체 소부장: 첫번째 메가팹, Y1",
          "easy1_title": "첫 번째 메가팹 Y1에서 장비 발주가 이미 시작됐습니다",
          "easy1_desc": "한화투자증권에서 SK하이닉스 용인 Y1의 장비 투자 일정을 살펴봤더니, 2027년 2월 첫 클린룸 개방을 앞두고 이미 발주가 들어갔다고 해요. 당초보다 3개월 앞당겨진 일정인데요, 2027년 말까지 월 10만 장 규모의 생산능력을 구축할 계획이라는 겁니다. 전공정 장비 업체들에 대한 고강도 발주가 기대된다는 장점이 있는 반면, 투자 속도에 따라 변동이 생길 수도 있다는 점도 같이 염두에 둬야 한다는 말이에요. 쉽게 말하면, 본격적인 장비 투자 사이클의 초입에 들어선 셈이라는 겁니다.",
          "easy2_title": "1c DRAM과 차세대 공정 기술이 핵심이라고 봤습니다",
          "easy2_desc": "이번 투자의 중심인 1c DRAM은 미세화 수준이 높아진 첨단 공정인데요, 글로벌 장비사 TEL이 제시한 핵심 기술들을 적용하게 된다고 해요. 초임계 건조와 커패시터 고종횡비 식각 및 배치식 High-k 증착 같은 기술들이 대표적인데요, 신규 장비 채택이 늘어난다는 장점이 있지만 공정 난도가 높아진다는 부담도 함께 따른다는 겁니다. 쉽게 말하면, 새로운 기술 도입으로 전공정 장비의 중요성이 훨씬 커진다고 보입니다.",
          "topic": "한화투자증권은 SK하이닉스 용인 Y1의 대규모 신규 팹 증설과 차세대 1c DRAM 공정 도입으로 국내 전공정 장비 업계가 새로운 성장 사이클에 진입했다고 봤습니다.",
          "points": [
            "Y1 장비 발주와 CAPA 구축: 한화투자증권은 SK하이닉스 용인 Y1의 첫 클린룸 개방 시점이 2027년 2월로 3개월 앞당겨졌다고 밝혔는데요, 2027년 말까지 월 10만 장 규모의 생산능력을 구축할 예정이라는 겁니다. 초기 발주가 향후 수년에 걸쳐 진행될 장비 투자 사이클의 시작점이라는 점에서 의미가 크다는 말이에요.",
            "1c DRAM 공정과 차세대 기술: Y1의 초기 투자는 1c DRAM을 중심으로 진행되며, 초임계 건조와 커패시터 고종횡비 식각 및 배치식 High-k 증착 같은 차세대 기술이 도입된다고 해요. 미세화에 따른 기술적 한계를 극복하기 위해 새로운 장비 채택이 확대될 것으로 기대된다는 겁니다.",
            "전공정 장비사의 수혜: 이번 프로젝트는 기존 공정 전환이 아닌 대규모 신규 팹 증설이기 때문에 전공정 장비 전반의 발주가 증가한다고 봤는데요, Y1 후속 클린룸과 삼성전자 P5 증설까지 이어져 국내 소부장 업체의 중장기 실적 가시성이 높아질 전망이라는 겁니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 미세화에 따른 기술적 한계를 극복하기 위해 새로운 장비 채택이 확대될 것으로 기대된다는 겁니다.",
          "body_chars": "7152",
          "link": "https://m.stock.naver.com/research/industry/47225",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i2bfb877cbf",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "한화투자증권",
          "title": "[한화투자증권]  [ESG] 증안펀드가 나오면 바닥일까",
          "easy1_title": "증안펀드 발표가 곧 주식 시장의 바닥을 뜻하는 건 아니라고 봤습니다",
          "easy1_desc": "한화투자증권은 정부가 증권시장안정펀드를 바로 가동할 수 있도록 준비작업에 착수하기로 한 점을 짚어봤는데요, 과거 여섯 차례의 사례를 살펴보면 실제로 돈을 넣었던 세 번 모두 발표 후에도 주가가 더 빠졌다는 겁니다. 뭔 소리냐면, 투입을 결정할 만큼 시장 상황이 나빴기 때문에 발표 이후에도 한동안은 추가 하락을 피하지 못했다는 말이에요. 쉽게 말하면, 바닥을 잡으려고 내놓은 대책이지만 그 시점이 곧 최저점이라는 보장은 없다는 셈이에요.",
          "easy2_title": "이번 조치는 규모와 시점이 미정인 만큼 어떤 대상을 사느냐가 중요하다고 했습니다",
          "easy2_desc": "이번 조치는 증안펀드 가동을 위한 준비 단계로 규모와 시점이 아직 정해지지 않았다고 하는데요, 한정된 자금을 어디에 쓸 것인지가 관건이라는 겁니다. 정책 자금이 자본 효율이나 주주환원을 고려한 지수를 사면 기업들이 주주환원을 늘릴 이유가 하나 더 생긴다고 한화투자증권은 판단했는데요. 다만 회사의 출자 규모나 자금 투입과 회수 기준이 명확하게 공개되어야 주주들이 부담을 제대로 가늠할 수 있다는 단점과 보완책도 함께 따라온다는 겁니다.",
          "topic": "한화투자증권은 정부의 증권시장안정펀드 가동 준비 착수 소식을 바탕으로 과거 사례와 이번 조치의 특징을 분석했어요.",
          "points": [
            "실제 매입 사례의 추가 하락: 1990년, 2003년, 2008년처럼 증안펀드를 실제로 투입했던 세 번의 사례를 살펴보았는데요, 발표 이후에도 코스피가 더 떨어져서 1년 안에 최저점이 발표 전날보다 1990년 24.6%, 2003년 5.8%, 2008년 27.5% 낮았다는 겁니다. 뭔 소리냐면, 그만큼 시장이 버거울 때 돈이 들어갔기 때문에 곧바로 반등하지는 못했다는 말이에요.",
            "고점 대비 하락률과 규모: 11/23 코스피의 고점 대비 하락률은 48.3%로 과거 여섯 차례의 증안펀드 발표 직전 하락률보다 더 크다고 하는데요, 2020년 약정액 10.7조원은 당시 시가총액의 0.25%에 그친다는 겁니다. 쉽게 말하면, 전체 시장 규모에 비하면 자금 비중이 그리 크지 않다는 겁니다.",
            "매입 대상과 주주환원: 한화투자증권은 정책 자금이 코스피200 같은 시장 대표 지수나 밸류업 지수처럼 자본 효율과 주주환원을 따지는 종목을 사야 한다고 봤는데요, 그렇게 되면 기업들이 주주환원을 늘릴 유인이 생긴다는 겁니다. 다만 각 회사의 출자 규모와 자금 투입 및 회수 기준이 발동체계에 담겨 공시되어야 주주가 부담을 정확히 알 수 있다고 강조했어요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "5770",
          "link": "https://m.stock.naver.com/research/industry/47224",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "iab54902267",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "유안타증권",
          "title": "[유안타증권]  통신 Weekly - 앤트로픽 지분가치 반영 필요성 부각",
          "easy1_title": "에스케이텔레콤 주가에 앤트로픽 지분 가치를 넣어 봐야 한다",
          "easy1_desc": "유안타증권은 에스케이텔레콤 주가가 떨어졌는데, 그 이유가 인공지능 기업 상장으로 생긴 지분 가치가 아직 주가에 안 들어갔기 때문이라고 분석했는데요. 공모가가 높게 정해져서 보유한 지분 가치가 4조 원을 넘는 것으로 추정되는데도, 통신 사업 가치만 생각해서 지금 주가가 너무 많이 내렸다는 겁니다. 쉽게 말하면, 숨어 있는 거대한 지분 가치를 따져보면 지금 주가 하락은 지나치다는 말이에요.",
          "easy2_title": "지분 매각 가능성이 있고 주주 환원에도 쓸 수 있다",
          "easy2_desc": "그래서 유안타증권은 락업이 풀린 뒤에 시장 상황과 자금 수요를 보고 지분을 팔지 정하게 된다고 밝혔는데요. 지분을 팔 수 있다는 가능성을 생각하면 깎아내릴 이유가 없고, 이 돈을 일부 주주 환원에 쓸 수도 있다는 장점이 있다는 겁니다. 대신 나중에 실제로 매각할 때 시장에 미치는 영향이 어떻게 될지 지켜봐야 한다는 점도 함께 따라온다는 겁니다.",
          "topic": "유안타증권은 앤트로픽 상장에 따른 에스케이텔레콤의 지분 가치가 주가에 반영될 필요가 있다고 분석했어요.",
          "points": [
            "앤트로픽 지분 가치 추정: 유안타증권은 앤트로픽이 공모가 83달러로 상장하면서 에스케이텔레콤이 가진 지분 가치가 4조 원 이상으로 늘었다고 분석했는데요. 뭔 소리냐면, 기존 장부가가 3조 5천억 원 수준이었던 것과 비교하면 22% 높다는 말이에요.",
            "통신 가치와 비교: 에스케이텔레콤 시가총액은 14조 4천억 원인데 유무선 통신 사업 가치만 15조 원을 생각하면 지분 가치가 전혀 안 들어간 셈이라는 건데요. 쉽게 말하면, 알짜배기 인공지능 자산이 통신 주가에 아예 빠져 있었다는 겁니다.",
            "주가 영향과 전망: 유안타증권은 락업 해제 시기와 매각 여부를 종합해서 판단하겠다고 밝혔는데요. 지분을 팔아 주주 환원에 쓸 수 있는 여력이 있다는 장점이 있지만, 앞으로 지분 처리에 따라 주가가 움직일 수 있다는 점을 눈여겨봐야 한다는 겁니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "12069",
          "link": "https://m.stock.naver.com/research/industry/47223",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "ice223ac65c",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "유안타증권",
          "title": "[유안타증권]  [유안타이슈테마] 삼성전자 휴머노이드 로봇",
          "easy1_title": "삼성전자가 첫 휴머노이드 로봇을 공개한다고 봤습니다",
          "easy1_desc": "유안타증권은 삼성전자가 CES 2027에서 자체 개발한 휴머노이드 로봇을 처음 공개할 계획이라고 밝혔는데요, 하드웨어 측면에서 얼굴 디스플레이와 힌지 기술 등이 적용될 거라는 분석입니다. 관련 부품을 공급하는 기업들이 주목받고 있다는 말인데요, 쉽게 말하면 삼성전자의 로봇 사업 확대에 따라 협력사들의 움직임을 살펴봐야 한다는 셈이에요.",
          "easy2_title": "협력사들과 다양한 협약을 맺고 있다고 전했습니다",
          "easy2_desc": "유안타증권은 레인보우로보틱스를 비롯한 여러 기업들이 2025년과 2026년에 다양한 양해각서(MOU)를 맺고 기술 개발을 진행 중이라고 분석했는데요, 농업용 로봇부터 물류 자동화까지 분야가 넓다는 설명입니다. 협업을 통해 시제품을 완성하고 현장 테스트를 거친다는 장점이 있는데, 대신 기업별로 공급 가능성에 차이가 있을 수 있다는 점도 염두에 두어야 한다는 겁니다.",
          "topic": "유안타증권은 삼성전자의 휴머노이드 로봇 공개 계획과 관련된 주요 협력사들의 동향을 분석했다고 밝혔다.",
          "points": [
            "하드웨어 특징: 유안타증권은 삼성전자의 휴머노이드 로봇이 디스플레이와 힌지 및 모터 기술을 적용할 것으로 보인다고 설명했는데요, 관절 외장 힌지는 특정 기업이 지속해서 공급하는 것으로 알려졌다는 분석입니다. 뭔 소리냐면, 로봇의 얼굴 표정과 관절 구동을 구현하기 위해 다양한 부품 기술이 결합된다는 말이에요.",
            "연도별 MOU 체결: 유안타증권은 레인보우로보틱스가 2026년에 여러 상장사와 인공지능(AI) 및 로봇 기술 협력을 위한 양해각서를 체결했다고 밝혔는데요, 농업용 로봇과 관제 소프트웨어 등 다양한 분야에서 공동 개발이 이뤄지고 있다는 설명입니다. 2025년에도 물류 자동화 로봇 기술 개발을 위한 협력이 있었다는 겁니다.",
            "공급 가능성 분석: 유안타증권은 일부 기업의 경우 지배구조 특성상 삼성전자 로봇으로의 부품 공급 가능성이 낮을 수 있다고 전망했는데요, 반면에 지분 투자나 정밀부품 협력을 추진하는 곳도 존재한다는 진단입니다. 쉽게 말하면, 협력사마다 사업 연계성에 차이가 있으므로 개별 기업의 상황을 살펴봐야 한다는 셈이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "11255",
          "link": "https://m.stock.naver.com/research/industry/47222",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i041b34d256",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "유안타증권",
          "title": "[유안타증권]  반도체 업종 Update",
          "easy1_title": "젠슨 황 복귀로 엔비디아 의사결정 공백이 사라졌거든요",
          "easy1_desc": "엔비디아 이사회가 11/23 젠슨 황을 사장 겸 CEO로 즉시 복귀시키는 안을 만장일치로 의결했는데요, 주가가 장중 30% 넘게 급등해 사임 직전 수준에 근접했다고 해요. 이번 조정에서 가격에 반영된 것은 수요 훼손이 아니라 의사결정의 공백이었다는 말이에요. 쉽게 말하면, 실적보다 지배구조 디스카운트가 컸던 구간이 되돌려지는 과정인 셈이라는 겁니다.",
          "easy2_title": "추론 인프라 병목은 연산이 아니라 메모리와 전력에 있거든요",
          "easy2_desc": "SC26 현장에서 확인한 추론 인프라의 병목은 연산이 아니라 메모리와 전력이라고 하는데요, 업계의 솔루션은 HBM 대체 추론칩, 메모리 계층 확장, Near-memory 연산, 전력·냉각 네 갈래로 구체화되고 있다는 거예요. 어느 쪽이든 칩당·서버당 메모리 탑재량은 늘어나는 방향인데, 단기 폭발력은 줄어도 수요 지속 기간은 길어질 것이라는 분석이에요. 쉽게 말하면, 전력이 AI 인프라 확장의 상한이 된다는 말입니다.",
          "topic": "유안타증권은 엔비디아 CEO 복귀와 SC26 현장 점검을 바탕으로 반도체 업종의 분위기 전환과 메모리 중심의 투자 전략을 제시했어요.",
          "points": [
            "엔비디아 리더십 공백 해소: 젠슨 황의 복귀로 임시 체제 장기화 경로를 피했다고 보는데요, 본업은 견조하여 3Q FY27 매출은 $1,158억으로 컨센서스를 웃돌았다는 거예요. 뭔 소리냐면, 사람 리스크를 넘어 본업의 성장이 이어지고 있다는 말입니다.",
            "추론 인프라 병목과 메모리: 추론칩은 LPDDR과 SRAM으로 HBM 의존을 낮추는 스타트업과 HBM 용량을 늘리는 하이퍼스케일러로 나뉘지만 HBM 수요 기반은 견고하다고 하는데요, KV 캐시가 GPU 밖으로 나오면서 서버 DRAM과 CXL 등 HBM 밖 메모리 수요도 커지고 있다는 거예요. 쉽게 말하면, 칩당 메모리 탑재량이 모두 늘어나는 방향이라는 셈입니다.",
            "반도체 업종 투자전략: 업종 내 우선순위는 메모리 소재와 부품이며, 반도체 설계 생태계는 중장기적 관점에서 긍정적이라고 보았는데요, 대형주는 HBM 및 파운드리 경쟁력 강화를 근거로 삼성전자를 제시했다는 거예요. 쉽게 말하면, 27~28년 메모리 Q 증가로 이익 성장 가시성이 높은 소재와 부품이 선호된다는 말입니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "20395",
          "link": "https://m.stock.naver.com/research/industry/47221",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i5f62ea7ae2",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권]  2027년에도 PCB가 주도한다",
          "easy1_title": "메모리 패키지 기판 가격이 더 오를 셈입니다",
          "easy1_desc": "인공지능(AI) 데이터센터 수요가 늘어나고 공급은 부족해져서 기판 가격을 올리는 협상이 순조롭게 진행되고 있는데요, 이번에는 인공지능(AI) 데이터센터용 제품 수요가 커져서 지난 4월보다 인상 폭이 더 클 것으로 보인다는 겁니다. 일부 고객사와는 이미 협의가 끝났다고 하는데요, 그래서 관련 기업들의 4분기 실적이 기대치를 넘어설 가능성이 높다는 거예요. 쉽게 말하면, 물건 값이 비싸지면서 기업들의 주머니가 더 두둑해질 거라는 말입니다.",
          "easy2_title": "기판 업종 수주가 늘어나고 있거든요",
          "easy2_desc": "주요 기업들의 수주잔고를 살펴봤더니, 심텍, 대덕전자, 코리아써키트, 티엘비, 이수페타시스 모두 지난 분기보다 눈에 띄게 불어난 것으로 나타났는데요, 이는 4분기부터 빅테크 기업들의 신규 플랫폼 양산이 본격화되면서 주문이 몰리고 있기 때문이라는 겁니다. 주문이 늘어난 건 장점이지만, 원재료 가격이 오르는 부담도 함께 짊어지고 있다는 점을 염두에 두어야 하는데요, 그래도 전방 산업이 호황이라 부품 가격에 덜 민감해 수익성은 계속 좋아질 거라는 말입니다.",
          "topic": "하나증권은 인공지능(AI) 수요 확대와 공급 부족으로 인해 2027년에도 인쇄회로기판(PCB) 업종의 호황이 이어질 것으로 분석했습니다.",
          "points": [
            "메모리 기판 쇼티지: 수급이 팽팽한 상태에서 메모리 패키지 기판 가격이 오르고 있는데요, 인공지능(AI) 데이터센터용 수요가 커지면서 지난 4월보다 인상 폭이 더 커질 것으로 추정했다는 겁니다. 공급 여력이 제한적인 상황이라 가격 협상력이 더 높아졌다는 말이에요.",
            "수주잔고 증가: 여러 기업들의 수주잔고를 조사해 봤더니, 심텍은 22%, 대덕전자는 46%, 코리아써키트는 115%, 티엘비는 108%, 이수페타시스는 26% 늘어난 것으로 나타났는데요, 빅테크 업체의 신규 플랫폼 양산이 본격화되면서 수주가 커졌다는 겁니다. 내년에도 하이퍼스케일러의 주문이 이어질 거라는 전망이에요.",
            "업사이클 장기화: 인공지능(AI) 반도체 수요 지표인 TSMC가 투자를 서두르고 있으며 공장을 짓고 있는데요, 첨단 패키지가 점점 커지면서 기판 수요도 함께 자극하고 있다는 겁니다. 원재료 가격이 오르는 부담은 있지만 전방 산업이 좋아서 가격 전이가 수월하다고 봤다는 말이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 인공지능(AI) 데이터센터 수요가 늘어나고 공급은 부족해져서 기판 가격을 올리는 협상이 순조롭게 진행되고 있",
          "body_chars": "5609",
          "link": "https://m.stock.naver.com/research/industry/47220",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "ic84f118826",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권]  바닥 잡기 3선",
          "easy1_title": "환율 때문에 주가가 출렁였지만 실적은 아주 튼튼합니다",
          "easy1_desc": "브랜드와 무역 벤더 업체들은 환율이 떨어지면서 고통이 컸는데요, 마치 엄청난 구조적인 문제가 생긴 듯 주가는 요동쳤지만 환율 영향을 제거하고 보면 매우 준수한 실적이에요. 환율이 하락했음에도 에이피알의 유럽 매출은 예상치를 10% 이상 넘었고, 달바글로벌은 영업이익률 21.5%를 기록했거든요. 쉽게 말하면 환율 하락은 화장품 산업의 구조적 문제가 아니라 일시적인 흔들림일 뿐이라는 겁니다.",
          "easy2_title": "주문은 쏟아지는데 생산 시설이 부족해서 모두가 바쁩니다",
          "easy2_desc": "2026년 화장품 수출이 YoY 30%를 넘으면서 주문이 너무 많아 생산 캐파는 모두 부족한 상황인데요, 2027년 중반 신공장들이 준공될 때까지 ODM 쇼티지는 계속될 거라는 말이에요. 노선은 다르지만 힘든 것은 매한가지인데, 그중에서도 펌텍코리아는 4공장이 정상화되고 6공장 가동을 본격화하면서 설비를 넣는 즉시 매출이 발생하는 호사스런 상황을 누리고 있어요. 쉽게 말하면 주문 폭발로 다들 바쁘지만 기업별로 처한 상황과 수혜 정도는 다르다는 셈이에요.",
          "topic": "하나증권은 환율 하락으로 인한 마진 훼손 우려는 과도하며, K뷰티의 탄탄한 수요 속에서 ODM과 용기 업체를 중심으로 긍정적인 접근이 유효하다고 봤다.",
          "points": [
            "환율 하락 영향과 실적: 브랜드와 무역 벤더 업체들은 환율 하락으로 마진 훼손과 투자심리 훼손을 겪었는데요, 환율 영향을 제거하고 보면 에이피알과 달바글로벌 등은 매우 준수한 실적을 기록했거든요. 환율이 1,200원대까지 내려가면 마진 훼손의 임계점을 넘어 단가 인하 요구 등이 이어질 수 있다는 단점도 있는데, 실리콘투가 가격 조정을 시도하면서 불확실성 해소에 나섰다는 말이에요. 쉽게 말하면 환율 하락이 산업의 구조적 문제가 아니라는 점이 입증되면 주가는 과매도 국면을 벗어날 것으로 보입니다.",
            "ODM과 용기 업체의 부각: 2026년 화장품 수출이 YoY 30%를 넘으면서 ODM 공급 부족 현상은 당연한 결과로 나타났는데요, 코스맥스는 아웃소싱 역량으로 성장을 이뤘고, 코스메카코리아는 마진을 감내하며 고객사를 확대했으며, 한국콜마는 수익성 관리에 집중했다는 거예요. 펌텍코리아의 경우 4공장 정상화와 6공장 가동으로 설비를 넣는 즉시 매출이 발생하는 호사스런 상황을 누리고 있거든요. 쉽게 말하면 2027년 중반 신공장이 준공될 때까지 쇼티지가 이어지면서 밸류체인 전반에 영향이 미친다는 겁니다.",
            "주요 기업 투자 전략: 하나증권은 높은 매출 성장에도 수익성 저하로 주가 급락을 경험한 에이피알, 실리콘투, 코스메카코리아를 톱픽으로 추천했는데요, 4분기 압도적인 매출 성장을 이어갈 경우 수익성이 빠르게 회복될 것으로 추정했다는 말이에요. 이들 기업은 환율 영향도 없거나 고객사들이 줄을 서 있는 등 긍정적 요인을 갖추고 있거든요. 쉽게 말하면 지나친 저평가 국면에서 사놓고 기다리기 좋은 기업들이라는 셈이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 쉽게 말하면 환율 하락이 산업의 구조적 문제가 아니라는 점이 입증되면 주가는 과매도 국면을 벗어날 것으로 보; 긴 원문 — 앞 30000자만 읽음(전체 101390자)",
          "body_chars": "101390",
          "link": "https://m.stock.naver.com/research/industry/47219",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "ic31e0354a8",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권]  기지국 DU엔 GPU, RU엔 Massive MIMO 들어갈 것",
          "easy1_title": "기지국에 그래픽 처리 장치 넣어서 성능 높이겠다",
          "easy1_desc": "최근 통신 기능에 인공지능 성능을 더한 기지국 도입 이야기인데요, 기지국 안테나와 신호처리 장비에서 그래픽 처리 장치 등의 연산 자원을 써서 지연 현상을 줄이겠다는 겁니다. 초기 투자 비용이 든다는 단점도 있는데, 장점은 규제 완화와 함께 매출 성장을 시도할 수 있다는 거거든요. 쉽게 말하면, 통신과 인공지능 기능을 동시에 처리하는 체제로 바꾼다는 셈이에요.",
          "easy2_title": "안테나와 증폭기 쪽 변화도 큽니다",
          "easy2_desc": "일부 투자가들은 신호처리 장비의 변화만 보는데 안테나 쪽의 변화 폭도 클 것으로 봤는데요, 5G 도입 초기 안테나 투자가 크지 않았기 때문이라는 거예요. 그래서 안테나와 필터 업체인 케이엠더블유, 전력 증폭기 담당 업체인 알에프에이치아이씨, 망 테스트 장비 업체인 엘아이지아큐버를 최대 수혜주로 제시했다고 합니다. 쉽게 말하면, 인공지능 기지국 도입이 확산되면서 관련 장비 업체들이 주목받는다는 말이에요.",
          "topic": "하나증권은 인공지능 기지국 도입 본격화에 따라 관련 장비 업체의 수혜가 예상된다고 분석했어요.",
          "points": [
            "인공지능 기지국 도입과 장점: 기지국 장비에서 그래픽 처리 장치 등을 활용해 지연 현상을 줄이고 통신과 인공지능 서비스를 동시에 처리하는 구조로 바뀐다고 해요. 통신사 입장에서는 초기 투자 비용이 많다는 단점이 있는데, 규제 완화와 함께 매출 성장 및 요금 업셀링을 시도할 수 있다는 장점이 있거든요. 쉽게 말하면, 인공지능 기지국 도입이 5G와 6G의 투자 목적이 되고 있다는 겁니다.",
            "엔비디아 지위와 수혜 예상: 인공지능 기지국이 구축되면 기지국 신호 처리와 인공지능 연산을 통합해 에지 인공지능 활용도를 높이는데 그래픽 처리 장치가 적용되기 때문에 엔비디아의 수혜가 예상된다고 봤어요. 그런데 최근에는 그래픽 처리 장치 대신 신경망 처리 장치나 전용 중앙 처리 장치 등도 대안으로 제시되고 있어 삼성전자 수혜도 예상된다는 거예요. 쉽게 말하면, 관련 장비 탑재가 멀지 않았다는 말이에요.",
            "대규모 다중 안테나 기술 보급: 인공지능 기지국 도입 시 신호처리 장비만큼 안테나 쪽도 큰 변화가 예상되는데, 5G와 6G에서는 최대 64개의 송신과 수신 안테나를 결합한 대규모 다중 안테나 기술을 적용하기 때문이라는 겁니다. 여전히 국내뿐만 아니라 미국도 전체 기지국 중 대규모 다중 안테나 채택 비율은 30% 수준에 불과할 것으로 추정된다고 해요. 쉽게 말하면, 앞으로 투자 본격화될 여지가 크다는 셈이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "5505",
          "link": "https://m.stock.naver.com/research/industry/47218",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i3bd5bbcc32",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "대신증권",
          "title": "[대신증권]  최근 6개월동안 가장 선전 중인 섹터",
          "easy1_title": "금리가 올랐는데 오히려 은행 마진이 줄어든 이유를 분석해 봤습니다",
          "easy1_desc": "기준금리가 올랐음에도 커버리지 은행 4사의 순이자마진이 하락했는데요, 그 이유는 정기예금이 늘고 핵심예금은 줄어드는 조달 구성 악화와 은행들의 수신 경쟁 때문이거든요. 게다가 대기업 대출을 늘리면서 대출금리가 내려간 점과 법적비용 반영이 금지된 규제도 겹쳤다는 말이에요. 쉽게 말하면, 돈을 모으는 비용은 늘어나고 대출로 버는 돈은 줄어들면서 마진이 압박을 받았다는 겁니다.",
          "easy2_title": "내년 1분기부터는 마진 하락이 멎고 주주 환원이 늘어날 것으로 보입니다",
          "easy2_desc": "올해 말까지는 정기예금 만기 도래로 조달비용 압박이 이어지겠지만, 내년 1분기부터 수신경쟁이 완화되면서 마진 하락세는 진정될 전망이라고 해요. 이익 증가와 함께 평균 환원율이 상승하면서 주주 몫이 커질 거라는 장점이 있는데, 대신 최근 실적 발표 이후 주가가 약세를 보였다는 단점도 함께 있다는 겁니다. 쉽게 말하면, 지금의 주가 조정을 신한지주와 우리금융지주 같은 종목을 매수할 기회로 삼아야 한다는 셈이에요.",
          "topic": "대신증권은 최근 은행업의 마진 하락 원인을 짚어보고, 내년 이후 펀더멘털 개선과 주주환원 확대를 근거로 비중확대 의견을 유지했다.",
          "points": [
            "마진 하락의 4가지 원인: 금리 상승에도 3분기 마진이 떨어진 건 조달 구성 악화와 수신 경쟁, 기업금융 대출 경쟁, 그리고 법적비용 전가 금지 때문이라고 해요. 뭔 소리냐면, 예금 금리가 오르고 대출금리 인하 요인이 겹치면서 수익성에 부담이 커졌다는 말이에요.",
            "마진 반등 시점: 연말까지는 정기예금 만기 비중이 많아 조달비용 압박이 이어지겠지만, 내년 1분기부터 수신경쟁이 완화되면서 마진 하락세가 진정될 전망이라는 거예요. 결국 2027년 2분기부터는 순이자마진이 점진적으로 상승할 것으로 보인다는 겁니다.",
            "최선호주 추천과 주주환원: 2027년 4대 금융지주 합산 순이익이 증가하고 평균 환원율도 55.4%로 높아질 것이라고 봤는데요, 장점은 주주 몫이 8.5% 늘어난다는 거지만 최근 수급 요인으로 주가가 빠졌다는 점도 있다는 겁니다. 그래서 대신증권은 낙폭이 컸던 신한지주와 우리금융지주를 최선호주로 제시했다는 셈이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 결국 2027년 2분기부터는 순이자마진이 점진적으로 상승할 것으로 보인다는 겁니다.",
          "body_chars": "17862",
          "link": "https://m.stock.naver.com/research/industry/47217",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "icbdf162fe3",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "하나증권",
          "title": "[하나증권]  글로벌 타이어 판매 동향(2026년 10월): 물량 저성장 지속, 판가-원가 Spread가 실적 좌우하는 구간",
          "easy1_title": "타이어 판매는 늘지 않지만 가격과 원가가 실적을 가른다",
          "easy1_desc": "하나증권이 글로벌 타이어 판매 흐름을 살펴봤더니, 전체 판매량은 눈에 띄게 늘지 않고 정체된 모습을 보이고 있거든요. 뭔 소리냐면 물량 자체는 조용하지만, 타이어를 팔 때 받는 가격과 만드는 데 드는 비용의 차이가 실제 이익을 결정하는 핵심이라는 말이에요. 가격을 올리면서 버티고 있지만 원재료 비용이나 관세가 어떻게 움직이느냐에 따라 실적이 갈리게 된다는 겁니다. 쉽게 말하면, 많이 파는 게 중요한 게 아니라 남는 장사를 하느냐가 관건인 셈이에요.",
          "easy2_title": "타이어 실적은 잠시 약하겠지만 내년에는 차츰 좋아질 거로 본다",
          "easy2_desc": "그래서 하나증권은 타이어 업체들의 이익 모멘텀이 4분기에는 다소 약해질 거라고 봤는데요, 이유는 가격을 올린 효과가 나타나더라도 투입되는 원가도 함께 오르기 때문이라는 계획이에요. 다만 원재료 가격과 투입원가가 내년 1분기부터는 안정되면서 실적의 바닥을 지나 점진적으로 회복될 거라는 전망을 내놓았답니다. 비용이 늘어난다는 단점도 있는데, 장점은 가격 전가력이 좋은 기업을 중심으로 회복될 여지가 있다는 거거든요. 쉽게 말하면, 지금은 숨을 고르는 시기이지만 내년에는 차츰 나아질 수 있다는 겁니다.",
          "topic": "하나증권은 2026년 10월 글로벌 타이어 판매 동향을 점검하고, 판매 물량 저성장 속에서 판가와 원가의 차이가 실적을 좌우할 것이라고 분석했어요.",
          "points": [
            "판매량 저성장과 지역별 동향: 하나증권이 2026년 10월 승용차용 타이어 판매량을 살펴봤더니, 전체적으로 뚜렷한 증가세를 보이지 못하고 정체된 흐름을 나타냈거든요. 뭔 소리냐면 유럽과 북중미는 내수 수요가 부진했고 중국은 자동차 생산이 줄어든 영향이 겹쳤다는 말이에요. 쉽게 말하면, 전 세계적으로 타이어를 찾는 수요가 힘을 받지 못하고 있는 겁니다.",
            "관세 규제와 비용 부담: 미국과 유럽의 수입 관세가 강화되면서 타이어 업체들이 생산지를 바꾸는 방식으로 대응하고 있다고 하는데요. 뭔 소리냐면 관세와 해상 운임 부담이 늘어나면서 업체들이 지역별로 2%에서 5% 수준의 가격 인상을 추진하고 있다는 말이에요. 가격을 올려 비용을 메우려 하지만 관세 비용이 회복을 제약하는 요인으로 작용한다는 겁니다.",
            "실적 전망과 선호주 제시: 하나증권은 판가와 원가의 시차를 고려할 때 이익의 저점이 4분기 말에서 2027년 상반기 사이에 형성될 거라고 봤거든요. 뭔 소리냐면 비용 압박이 잠시 이어진 뒤에 점차 해소될 거라는 말이에요. 그래서 가격을 전가하는 힘이 좋고 공장 증설이 기대되는 한국타이어앤테크놀로지를 업종 내 최선호주로 제시했다는 겁니다."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "point2 근거 원문에 없음",
          "body_chars": "8404",
          "link": "https://m.stock.naver.com/research/industry/47216",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i33981d8e93",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "대신증권",
          "title": "[대신증권]  본게임은 지금부터",
          "easy1_title": "건설주가 기대감에 올랐으니 이제 성과를 보여줄 차례라는 겁니다",
          "easy1_desc": "2026년에 원전이나 중동 재건 같은 기대감으로 건설사 주가가 뛰었는데요, 2027년에는 그게 진짜 수주와 실적으로 이어지는지가 핵심 포인트라는 말이에요. 기분 좋은 소문만 무성했던 데서 벗어나 진짜 돈을 벌어오는지 증명해야 한다는 건데요, 쉽게 말하면 이제부터 진짜 실력을 겨루는 본게임이 시작된다는 겁니다.",
          "easy2_title": "주택은 수도권 중심으로 살아나고 첨단 인프라가 새로운 먹거리가 된다는 겁니다",
          "easy2_desc": "지방은 미분양 때문에 여전히 걱정이지만 서울과 수도권은 공급이 부족해서 정비사업 중심으로 좋아질 거로 봤거든요. 여기에 인공지능(AI) 데이터센터나 반도체 공장, 해외 원전 같은 첨단 시설까지 더해져서 건설사들의 일감이 훨씬 다양해진다는 거예요. 주택 수익성이 안정을 찾는 동시에 새로운 시장까지 열리니까 종목마다 성적이 다르게 나타날 수밖에 없다는 겁니다.",
          "topic": "대신증권은 2027년 건설업종이 기대감을 넘어 실제 수주와 실적 성과를 증명해야 하는 해가 될 것이며, 수도권 주택 사업과 AI 인프라 등 첨단 비주택 부문에서 경쟁력을 갖춘 종목을 중심으로 접근해야 한다고 분석했습니다.",
          "points": [
            "건설투자 회복 기대: 토목 부문은 정부의 사회간접자본(SOC) 예산이 28조 9천억 원으로 늘어나면서 광역교통망 같은 대형 국책사업이 투자를 이끌 거로 봤거든요. 건축 부문도 반도체 클러스터와 3기 신도시 같은 메가프로젝트가 맞물려 수요가 늘어난다는 거예요. 다만 높은 공사비와 금리 부담이 발목을 잡을 수도 있다는 단점도 있는데, 장점은 공공과 대형 프로젝트를 중심으로 전체적인 회복세가 뒷받침된다는 겁니다.",
            "주택 원가율 정상화: 과거 공사비가 치솟았을 때 맡았던 힘든 현장들이 차근차근 끝났고, 마진이 괜찮은 새로운 현장들이 매출에서 차지하는 비중이 커졌거든요. 덕분에 주요 건설사들의 주택 원가율이 안정되면서 이익이 좋아지는 흐름이 이어지고 있다는 말이에요. 지방은 미분양 문제가 여전히 걸리지만 수도권은 공급이 부족해서 정비사업을 중심으로 좋은 실적을 낼 수 있다는 겁니다.",
            "AI 시대 첨단 인프라 수주: 인공지능 연산과 전력 수요가 불어나면서 데이터센터나 반도체 공장, 해외 원전 같은 새로운 시장이 커지고 있거든요. 데이터센터는 공사 기간이 2~3년 정도로 비교적 짧고 빠르게 매출로 이어져서 건설사들 외형 성장에 큰 도움이 된다는 거예요. 다만 해외 원전은 규모가 워낙 크다 보니 계약 시점이 불확실해서 당장보다는 중장기적인 관점에서 바라봐야 한다는 겁니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "17966",
          "link": "https://m.stock.naver.com/research/industry/47215",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "ie5335c4354",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "교보증권",
          "title": "[교보증권]  2027 신재생에너지 연간전망: 옥석 가리기",
          "easy1_title": "신재생에너지 시장은 2027년에 옥석 가리기가 중요하다",
          "easy1_desc": "2026년의 신재생에너지 주가는 상반기에 올랐다가 하반기에 대부분 반납했는데요, 2027년에는 같은 정책 아래에서도 기업별 실적이 차별화될 거라는 말이에요. 그래서 교보증권은 2027년을 단순한 기대감이 아니라 수주와 실적으로 기업을 골라내야 하는 시기로 봤다는 겁니다. 쉽게 말하면, 아무 종목이나 사는 게 아니라 진짜 잘하는 곳만 살아남는 셈이라는 말이에요.",
          "easy2_title": "태양광과 풍력은 타임라인에 따라 투자 우선순위가 달라진다",
          "easy2_desc": "2027년에는 태양광과 풍력 중 어느 한쪽만 고르는 게 아니라 시기에 따라 투자의 무게중심이 바뀐다고 하는데요, 상반기에는 국내 태양광과 미국 풍력에 주목해야 하고 하반기에는 미국 태양광과 국내 풍력으로 순서가 이어진다는 계획이에요. 이렇게 흐름에 맞춰 움직여야 리스크를 줄일 수 있다는 장점이 있는데, 대신 시기를 놓치면 수익을 보기 어렵다는 점도 같이 따라온다는 겁니다. 쉽게 말하면, 계절이 바뀌듯 투자 대상도 타이밍에 맞춰 갈아타야 한다는 겁니다.",
          "topic": "2027년 신재생에너지 시장의 변화와 옥석 가리기 전략에 대한 교보증권의 전망이에요.",
          "points": [
            "태양광 Re-pricing: 태양광은 가격이 가파르게 오르는 것보다 높아진 가격이 얼마나 오래 유지될지가 핵심이라고 하는데요, 미국은 232조 관세 시행 초기 혼란 속에서 모듈 판가 인상분이 2027년 상반기에 걸쳐 반영될 전망이에요. 뭔 소리냐면, 가격 상하한선은 생겼지만 세부 지침이 덜 나와서 계약이 미뤄질 수 있다는 말이에요.",
            "풍력 Re-permitting: 풍력은 민주당의 양원 장악으로 인허가 환경이 좋아졌지만 높은 금리와 세액공제 종료가 부담이라는 점을 짚었는데요, 국방부 인허가 심사가 재개되면서 발주 재개로 이어질 것으로 기대한다는 거예요. 장점은 발주가 다시 살아난다는 것이지만, 대신 2027년 말에 부품 세액공제(AMPC)가 끝난다는 단점도 같이 안고 간다는 겁니다.",
            "투자 전략과 탑픽: 교보증권은 2027년 투자 전략으로 바스켓 매매 대신 선별이 필요한 시점이라고 강조했는데요, 최선호주로는 OCI홀딩스와 씨에스윈드를 제시하면서 상반기에는 국내 모멘텀에 주목할 필요가 있다고 분석했어요. 쉽게 말하면, 아무거나 묶어서 사지 말고 확실한 종목만 골라 잡아야 한다는 말이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "긴 원문 — 앞 30000자만 읽음(전체 89277자)",
          "body_chars": "89277",
          "link": "https://m.stock.naver.com/research/industry/47214",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "idaf556edfe",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "유진투자증권",
          "title": "[유진투자증권]  로봇 인뎁스 해설 ② - CES 2027, 주인공은 삼성",
          "easy1_title": "내년 CES는 로봇 비중이 확 커지고 삼성전자가 주인공이 된다",
          "easy1_desc": "내년 1월에 열리는 CES 2027에서는 로봇 전시 비중이 한층 높아질 전망이라고 하는데요, 당사 집계 기준으로 로봇 관련 참가 기업은 중국이 35%, 미국이 28%, 한국이 15% 순이라고 해요. 특히 올해 로봇 분야의 주인공은 삼성전자가 될 것이라는 판단인데, 자체 개발 이족보행 휴머노이드의 첫 공개가 유력하다는 겁니다. 쉽게 말하면, 글로벌 로봇 무대에서 삼성전자의 신제품 공개가 가장 큰 관심사라는 셈이에요.",
          "easy2_title": "손 모양부터 부품까지 자체 내재화를 노리고 있다",
          "easy2_desc": "삼성전자의 휴머노이드 하드웨어 전략은 핵심 구동과 손의 내재화라고 하는데요, 액추에이터는 모터와 드라이브를 자체 설계하며 약 80종을 연구 중이고 카메라나 배터리는 그룹사가 담당할 것으로 전망한다는 거예요. 한 손당 모터 20개를 탑재해서 스마트폰 조립 수준의 정밀 조작을 목표로 한다는 장점이 있는데, 다만 구동 방식은 보도마다 엇갈려 현장에서 직접 확인할 필요가 있다는 점도 같이 따라온다는 겁니다. 쉽게 말하면, 핵심 부품을 직접 만들며 고성능 손의 정밀 작업을 보여줄 준비를 한다는 말이에요.",
          "topic": "내년 CES 2027에서 삼성전자를 중심으로 한 로봇 섹터의 기대감과 휴머노이드 공개 전망을 다룬 리포트예요.",
          "points": [
            "CES 2027 로봇 전시: 내년 CES에서는 처음으로 LVCC 사우스홀 3관이 첨단제조·로보틱스·자동화 전용관으로 조성된다고 하는데요, 당사 집계 기준 로봇 관련 참가 기업은 중국 35%, 미국 28%, 한국 15% 순이라고 해요. 전시장별로는 노스홀에 115개사, 사우스홀 3관에 62개사가 집중 배치된다는 겁니다.",
            "삼성 휴머노이드 공개: 보도에 따르면 기본형 HR과 고성능형 HE 두 모델을 선보일 예정이라고 하는데요, 첫 공개부터 사양별 라인업을 갖춘다는 점에서 연구 시제품이 아닌 사업화를 염두에 둔 행보로 해석한다는 거예요. 한 손당 모터 20개를 탑재하고 스마트폰 조립 수준의 정밀 조작을 목표로 한다는 말이에요.",
            "연말연초 로봇 주가 강세: 유진투자증권은 로봇 섹터의 연말 연초 주가 강세 계절성에 삼성전자 중심의 CES 모멘텀이 더해지는 구간으로 판단한다고 하는데요, 레인보우로보틱스 등 국내 대기업 관련 밸류체인 중심으로 단기 시장 관심이 확대될 전망이라는 거예요. 쉽게 말하면, 계절적 호재에 삼성 이슈가 겹쳐 로봇 주식들에 관심이 쏠린다는 말이에요."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "topic 근거 원문에 없음",
          "body_chars": "4508",
          "link": "https://m.stock.naver.com/research/industry/47213",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "ia236a06b9b",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "SK증권",
          "title": "[SK증권]  Weekly Amazon Beauty Check",
          "easy1_title": "아마존에서 K뷰티 브랜드 점수가 확 좋아졌습니다",
          "easy1_desc": "SK증권은 이번 주 K뷰티 유니버스의 아마존 BSR(Best Sellers Rank, 베스트셀러 순위) 총점이 2,353pt를 기록해 전 주보다 568pt 올랐다고 밝혔는데요. 주간 평균 점수 Top3 브랜드로는 메디큐브, 아누아, 에이프릴스킨 등이 꼽혔거든요. 쉽게 말하면 미국 아마존 시장에서 주요 K뷰티 브랜드들의 성과가 전반적으로 좋아졌다는 말이에요.",
          "easy2_title": "아마존 데이터를 모아서 K뷰티 성과를 매겨 봤습니다",
          "easy2_desc": "SK증권은 미국 아마존의 BSR 데이터를 가공해서 브랜드별 점수를 산출해 뷰티 브랜드의 성과를 추적했다고 설명했는데요. 아마존이 미국 뷰티 시장의 14.5%를 점유하고 있는 1위 B2C(기업과 소비자 간 거래) 채널이라 전체 시장 성과를 파악하기 좋기 때문이라는 겁니다. 덕분에 복잡한 순위 데이터를 직관적인 점수로 비교할 수 있다는 장점이 있는데, 대신 프로모션이나 광고 여부에 따라 일일 변동 폭이 클 수 있다는 점도 같이 감안해야 한다는 겁니다.",
          "topic": "미국 아마존에서 페이셜 스킨케어 카테고리를 기준으로 K뷰티 브랜드들의 주간 BSR 점수와 성과를 분석한 내용이에요.",
          "points": [
            "K뷰티 BSR 총점 상승: SK증권은 이번 주 K뷰티 유니버스의 BSR 총점이 2,353pt를 기록해 전 주에 비해 568pt 개선됐다고 집계했는데요. 주간 평균 점수 Top3 브랜드는 각각 메디큐브가 805pt, 아누아가 410pt, 에이프릴스킨이 140pt를 기록했다고 밝혔거든요. 뭔 소리냐면 상위 브랜드들을 중심으로 점수가 뚜렷하게 올라갔다는 말이에요.",
            "브랜드별 순위와 변화: 주간 평균 점수 Top20 브랜드 순위를 살펴보면 메디큐브가 805점으로 1위를 차지했고 세라비가 453점으로 뒤를 이었다고 전했는데요. 점수가 가장 많이 상승한 Gainers 순위에서는 메디큐브가 182pt 오르고 코스알엑스가 66pt 오르면서 상위권을 형성했다고 설명했어요. 쉽게 말하면 특정 인기 브랜드들이 점수 상승을 크게 이끌어 낸 셈이에요.",
            "지표 산출 방법론: SK증권은 아마존의 BSR 100위까지의 데이터를 활용해 101에서 BSR을 뺀 값으로 BSR 점수를 산출했다고 밝혔는데요. 값이 클수록 긍정적이라는 직관에 맞추기 위해 1위 제품을 100점으로 두는 방식을 썼다는 겁니다. 일별 데이터는 노이즈가 많기 때문에 주간, 월간, 분기별 산술평균을 내서 추세를 확인한다고 설명했어요."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "point2 근거 원문에 없음",
          "body_chars": "10969",
          "link": "https://m.stock.naver.com/research/industry/47212",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i0bf4e20e7a",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "유진투자증권",
          "title": "[유진투자증권]  안녕하세요 데일리에요 (로봇/방산/조선)",
          "easy1_title": "로봇부터 조선까지 핵심 뉴스를 짚어보겠습니다",
          "easy1_desc": "유진투자증권은 11월 24일 기준으로 로봇, 방산, 조선 분야의 국내외 주요 소식을 정리해 살펴봤는데요. 각 산업별로 정부 정책 발표부터 대기업의 투자 및 경영진의 지분 매입까지 다양한 움직임이 확인된다는 말이에요. 쉽게 말하면, 주요 산업의 최신 동향과 기업별 대응 전략을 한눈에 모아보는 셈이에요.",
          "easy2_title": "분야별 주요 기업의 움직임과 향후 일정을 살펴봅니다",
          "easy2_desc": "과기정통부의 휴머노이드 챌린지 일정부터 한화에어로스페이스의 국방 AI 데이터센터 구축 계획까지 구체적인 수치와 일정이 함께 나왔는데요. 방법은 각 기업의 투자와 정부의 정책 방향을 연계해서 어떤 변화가 생기는지 살펴보겠다는 계획이에요. 정보가 명확해진다는 장점이 있는데, 대신 세부 조건에 대한 이견이나 규제 리스크도 같이 따라온다는 겁니다.",
          "topic": "유진투자증권은 2026년 11월 25일 데일리 리포트를 통해 로봇, 방산, 조선 주요 산업의 국내외 최신 뉴스와 기업 동향을 정리해 전했다.",
          "points": [
            "휴머노이드 챌린지 일정: 과기정통부가 2027년 4월 예선팀 선발을 시작으로 2028년 11월 본선까지 이어지는 Next-X 휴머노이드 챌린지 사전설명회를 개최했다고 해요. 1차에서는 보행과 조작 등 기본 성능을, 2차에서는 복수 작업을 연속 수행하는 능력을 평가한다는 겁니다. 뭔 소리냐면, 로봇의 기본 기능부터 복합 작업 능력까지 단계별로 검증하겠다는 말이에요.",
            "국방 AI 데이터센터 구축: 한화에어로스페이스가 경남 창원사업장 인근 1만3,000평 부지에 1단계 투자금 10조원으로 180MW 규모의 국방 AI 데이터센터를 구축할 계획이라고 밝혔는데요. 2028년 7월 부분 가동을 목표로 하며 군이 소유 및 통제권을 갖고 방산기업이 수탁 운영하는 모델을 검토 중이라는 겁니다. 쉽게 말하면, 대규모 투자를 통해 방산 부문의 인프라를 확충하려는 셈이에요.",
            "HD현대 책임경영: 정기선 HD현대 회장이 약 150억원 규모인 1만1천주의 HD현대 주식을 장내 매수할 계획이며 주요 계열사 경영진도 자사주를 잇따라 매입했다고 해요. 조정 국면에서 최고경영진이 주가와 주주가치에 대한 자신감을 표시한 것으로 보인다는 겁니다. 뭔 소리냐면, 회사의 주요 리더들이 직접 지분을 사들여 시장에 안정적인 신호를 주려 한다는 말이에요."
          ],
          "evidence_ok": "5/6",
          "bad_numbers": "",
          "check_flags": "topic 근거 원문에 없음",
          "body_chars": "2141",
          "link": "https://m.stock.naver.com/research/industry/47211",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i6d9c556a12",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "유진투자증권",
          "title": "[유진투자증권]  로봇 인뎁스 해설 ① - 1년 만에 제자리, 다시 겨울",
          "easy1_title": "올해 로봇 주가는 오를 때 덜 오르고 빠질 때 더 빠졌다",
          "easy1_desc": "유진투자증권은 2026년 한 해 동안 로봇 섹터의 주가 흐름을 살펴봤는데요, 코스닥 지수와의 일간 상관계수가 2025년 0.66에서 2026년 0.84로 높아졌다는 말이에요. 오를 때 덜 오르고 빠질 때 더 빠지는 구조였다는 건데, 쉽게 말하면 로봇 주가가 혼자 움직이기보다 전체 지수에 더 많이 끌려다녔다는 셈이에요.",
          "easy2_title": "지금은 계절성과 연초 CES 행사에 주목할 시점이다",
          "easy2_desc": "그래서 유진투자증권은 지금 구간이 계절성과 삼성 모멘텀이 겹치는 시기라고 봤는데요, 2020년 이후 10월 말부터 1월 말까지 로봇 업종의 평균 수익률이 플러스 46%에 달했다는 거예요. 연초 최대 이벤트인 CES 2027을 앞두고 주도주와 수혜주 중심의 대응이 유효하다는 판단인데, 장점은 계절적 기대감이 높다는 점이지만 대신 상용화를 입증할 실제 숫자가 뒷받침돼야 한다는 단점도 같이 고려해야 한다는 겁니다.",
          "topic": "유진투자증권은 2026년 로봇 섹터의 주가 흐름과 수급 특징을 분석하고 연말연시 계절성에 주목해 대응해야 한다고 밝혔다.",
          "points": [
            "주가 흐름과 지수 연동성: 유진투자증권은 로봇 섹터의 방향성이 지수에 의해 먼저 결정됐다고 분석했는데요, 하락일 베타가 상승일 베타를 웃돌며 오를 때 덜 오르고 빠질 때 더 빠졌다는 겁니다. 뭔 소리냐면, 개별 재료에 대한 시장의 반응이 둔해져서 다음 상승을 위해서는 단순한 기대감을 넘어선 실제 수주나 매출 성장이 필요하다는 말이에요.",
            "수급 특징과 투자자 동향: 기관의 누적 순매수 중 금융투자의 비중이 컸지만 7월 말 이후에는 금융투자 매수가 멈춘 반면 투신과 연기금 쪽으로 자금이 유입됐다고 봤는데요, 외국인의 복귀 여부도 중요한 신호라는 거예요. 쉽게 말하면 상장지수펀드(ETF) 영향이 큰 섹터 특성상 ETF 내 상위 비중 기업에 관심을 두는 것이 유효하다고 보입니다.",
            "시총 규모별 성과 차이: 올해 수익률 중앙값이 시가총액 1조 원에서 5조 원 구간은 마이너스 11퍼센트였고 3천억 원 미만 구간은 마이너스 52퍼센트였다고 설명했는데요, 기업의 시총 사이즈가 성과를 갈랐다는 겁니다. 장점은 확실한 주도주를 고르면 하락 폭을 줄일 수 있다는 점이지만, 작은 규모의 기업일수록 타격이 더 컸다는 점도 함께 나타났다는 말이에요."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "",
          "body_chars": "3641",
          "link": "https://m.stock.naver.com/research/industry/47210",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "i3a843a8162",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "신한투자증권",
          "title": "[신한투자증권]  주가 조정 속 ESS가 이끄는 실적 회복에 주목",
          "easy1_title": "주가 조정받는 셀 업체들, 이제는 ESS로 실적 회복할 차례입니다",
          "easy1_desc": "데이터센터 투자 속도가 조절될 거라는 걱정 때문에 삼성SDI와 LG에너지솔루션 주가가 각각 37%, 35%씩 떨어졌는데요. 그렇지만 전력망을 중심으로 하는 ESS(에너지저장장치) 수요가 탄탄하고 이미 받아놓은 수주가 있어서 내년 출하가 더 늘어날 것으로 보입니다. 공장 가동률도 점점 좋아지면서 2027년에는 셀 2사의 영업이익이 231%나 늘어날 것으로 신한투자증권은 내다봤는데요. 쉽게 말하면, 주가는 많이 내려왔지만 ESS 덕분에 실적은 다시 살아날 셈이라는 말이에요.",
          "easy2_title": "소재 업체들은 LFP 양극재 양산과 고객 확보가 중요한 시점입니다",
          "easy2_desc": "ESS가 커지는 게 소재 실적 전체로 번지기까지는 시간이 좀 걸린다는 점을 감안해야 하는데요. 미국에서 셀을 LFP(리튬·인산·철) 배터리로 바꾸는 작업이 늘고 있어서, 기존 삼원계 양극재보다는 LFP 양극재를 얼마나 잘 대량 생산하고 고객을 잡느냐가 중요하다는 겁니다. 전기차 회복이 늦어지고 리튬 값이 내려가면서 가격 부담도 있는 상황인데요. 장점은 엘앤에프와 포스코퓨처엠처럼 본업이 튼튼하고 LFP 성과가 빠른 곳들이 눈에 띈다는 것이고, 단점은 시차가 존재한다는 점인데 쉽게 말하면 소재 쪽은 옥석을 잘 가려야 한다는 겁니다.",
          "topic": "신한투자증권은 2차전지 업종에서 주가 조정을 겪는 셀 업체들이 ESS 성장을 바탕으로 실적을 회복할 것이며 소재는 선별 접근이 필요하다고 봤습니다.",
          "points": [
            "글로벌 ESS 수요와 셀 점유율: 3분기 누적 기준으로 전 세계 ESS 셀 출하량이 779.9GWh로 73% 늘었고 북미도 122.3GWh로 71% 증가했는데요. LG에너지솔루션과 삼성SDI의 북미 합산 점유율은 20.9%로 7.5%p 올랐거든요. 시장이 커지면서 국내 기업들의 점유율도 같이 올라가고 있다는 긍정적인 신호로 보입니다.",
            "삼성SDI와 LG에너지솔루션 전망: 삼성SDI는 3분기까지 ESS 수주를 60GWh 이상 쌓았고 연말까지 120GWh 이상을 채우겠다는 목표인데요. LG에너지솔루션도 3분기 ESS 출하량이 전기 대비 60% 이상 늘었고 수주잔고는 160GWh를 확보했다고 밝혔습니다. 두 회사 모두 미국의 생산 능력을 넓히고 공장 가동률도 좋아지면서 2027년에 영업이익이 큰 폭으로 늘어날 것으로 신한투자증권은 추정했습니다.",
            "소재 업체 실적과 선호주: 소재 쪽에서는 2027년 영업이익이 엘앤에프 1,715억원, 포스코퓨처엠 2,014억원, 에코프로비엠 860억원으로 늘어날 것으로 예상되는데요. 신한투자증권은 본업이 탄탄하고 LFP 성과가 빠르게 나타나는 엘앤에프와, LFP 라인 전환이 빠르고 탈중국 경쟁력이 돋보이는 포스코퓨처엠을 더 선호한다고 밝혔습니다. 쉽게 말하면, 소재 안에서도 준비가 빠른 곳 위주로 보자는 겁니다."
          ],
          "evidence_ok": "6/6",
          "bad_numbers": "",
          "check_flags": "예측 의심: 그렇지만 전력망을 중심으로 하는 ESS(에너지저장장치) 수요가 탄탄하고 이미 받아놓은 수주가 있어서 내년 출; 예측 의심: 소재 쪽에서는 2027년 영업이익이 엘앤에프 1,715억원, 포스코퓨처엠 2,014억원, 에코프로비엠 860",
          "body_chars": "4450",
          "link": "https://m.stock.naver.com/research/industry/47209",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        },
        {
          "id": "ib0edc081f0",
          "source_name": "네이버 리서치 산업",
          "kind": "증권사 리포트",
          "writer": "신한투자증권",
          "title": "[신한투자증권]  여전히 셀에 집중할 때",
          "easy1_title": "주가 조정받는 셀 2사에 주목할 때입니다",
          "easy1_desc": "데이터센터 투자 속도 조절 우려 때문에 삼성SDI나 LG에너지솔루션 같은 셀 업체 주가가 연중 고점 대비 각각 37%, 35%나 떨어졌는데요. 그렇지만 전력망 중심의 견조한 ESS(에너지저장장치) 수요와 이미 확보된 수주 덕분에 내년 출하 성장이 뒷받침되고 있거든요. 게다가 공장 가동률도 함께 개선되는 중이라는 말이에요. 쉽게 말하면, 주가는 많이 조정을 받았지만 ESS 성장을 바탕으로 실적 회복을 이끌어갈 셀 중심의 전략을 계속 유지하겠다는 겁니다.",
          "easy2_title": "ESS 성장이 실적으로 이어지는 셀에 집중해야 합니다",
          "easy2_desc": "3분기 누적 글로벌 ESS 셀 출하량이 779.9GWh로 73%나 늘어났고, 북미 지역도 122.3GWh로 71% 증가했는데요. 시장이 커지는 와중에 국내 업체들의 북미 합산 점유율도 20.9%로 7.5%p 상승했다는 겁니다. 미국 내 생산능력을 늘리고 기존 EV(전기차) 라인을 ESS로 전환하는 게 수혜를 높이는 요인인데요. 쉽게 말하면, ESS 성장이 매출과 이익으로 연결되는 셀 중심의 전략이 앞으로도 유효하다는 말이에요.",
          "topic": "신한투자증권은 2차전지 업종에 대해 주가 조정 속에서도 ESS(에너지저장장치) 중심의 실적 회복이 기대되는 셀(배터리 제조사) 업체에 집중할 필요가 있다고 봤다.",
          "points": [
            "삼성SDI의 실적과 ESS 목표: 삼성SDI는 3분기 실적발표 당시 ESS 수주를 60GWh 이상 확보했고 연말까지 120GWh 이상을 확보하겠다는 목표를 제시했는데요. 미국 LFP(리튬·인산·철) 라인 확대와 AMPC(생산세액공제) 증가 등이 내년 증익의 핵심 요인이라는 겁니다. 소형전지 누적 가동률도 1분기 65%에서 3분기 78%로 꾸준히 올랐다는 점도 긍정적이에요.",
            "LG에너지솔루션의 출하와 가동률: LG에너지솔루션은 3분기 ESS 출하량이 전기대비 60% 이상 늘어났고 분기말 수주잔고는 160GWh를 확보했다고 밝혔는데요. 북미 ESS 생산능력은 올해 50GWh 이상에서 내년 70GWh 이상으로 확대될 예정이거든요. 전사 가동률도 1분기 46.9%에서 3분기 누적 57.1%로 상승했다는 겁니다.",
            "소재 업체별 선별 전략: ESS 성장이 소재 실적 전반으로 확산되기까지는 시차가 존재한다는 점을 감안해야 하는데요. 미국 셀의 LFP 전환이 확대됨에 따라 단기 삼원계 양극재보다는 LFP 양극재 양산과 고객 확보 여부가 중요해졌다는 겁니다. 그래서 소재 중에서는 견조한 본업과 빠른 LFP 성과가 기대되는 엘앤에프와 포스코퓨처엠을 선호한다고 밝혔어요."
          ],
          "evidence_ok": "4/6",
          "bad_numbers": "",
          "check_flags": "point2 근거 원문에 없음; point3 근거 원문에 없음",
          "body_chars": "4450",
          "link": "https://m.stock.naver.com/research/industry/47208",
          "addr": "처리-2",
          "source": "v2_secretary/결과/거푸집2/거푸집2_요약표.csv"
        }
      ],
      "fed_speeches": [
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
        },
        {
          "file": "2026-11-25_연설_Bowman_bowman20261125a.md",
          "title": "[연설] 2026-11-25 · Vice Chair for Supervision Michelle W. Bowman",
          "summary_lines": [
            "\"지난 은행 파산에서 배운 교훈은 정보를 아는 것보다 빨리 움직이는 게 핵심이라는 점이에요\"",
            "\"앞으로는 서류 작업에 갇히지 않고 확실하게 책임을 묻고 빠르게 대응하겠다는 계획이에요\""
          ],
          "addr": "처리-6",
          "source": "v2_secretary/결과/연준연설/2026-11-25_연설_Bowman_bowman20261125a.md"
        }
      ]
    },
    "ch4_news": {
      "title": "챕터 4 · 뉴스 사건 묶기",
      "addr": "처리-3",
      "status": "돎 (하루 AI 2콜 독립 묶기 대조)",
      "counts": {
        "news_in": {
          "val": 385,
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        "events_out": {
          "val": 14,
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        "single_out": {
          "val": 343,
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        "all_clusters": {
          "val": 357,
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        "bad_numbers": {
          "val": 0,
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        "calls": {
          "val": 2,
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        }
      },
      "events": [
        {
          "id": "e261126-01",
          "rank_by_count": 1,
          "name": "한국투자저축은행 해킹",
          "easy": "한국투자금융지주 자회사인 한국투자저축은행에서 해킹 사고가 발생해 고객 8만6433명의 개인정보가 유출됐습니다. 저축은행 업권에서 발생한 정보 유출 사고 가운데 역대 최대 규모라는 말이에요. 쉽게 말하면 이번 사고로 8만6000명이 넘는 고객의 정보가 털린 셈입니다.",
          "quote": "한국투자저축은행 8만6천여명 개인정보 유출…업권 최대 규모",
          "member_count": 4,
          "sample_articles": [
            {
              "n": 1360,
              "title": "한국투자저축은행 8만6천여명 개인정보 유출…업권 최대 규모",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125165600002"
            },
            {
              "n": 1292,
              "title": "업계서 최대규모 해킹…8.6만 고객 정보 유출된 한국투자저축은행",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218530"
            },
            {
              "n": 1240,
              "title": "한국투자저축은행 8.6만명 개인정보 유출",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/2026112505211"
            },
            {
              "n": 1290,
              "title": "한투저축은행 해킹 사고… 8만6000명 정보 털렸다",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218769"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-02",
          "rank_by_count": 2,
          "name": "코스피 6%대 급락",
          "easy": "코스피가 25일 6% 넘게 급락해 4600대로 밀려났습니다. 전날 젠슨 황 복귀 소식으로 올랐던 상승분을 모두 반납한 건데요, 미국 반도체주가 급락하고 관세 우려가 겹쳤기 때문이라는 분석이에요. 쉽게 말하면 하루 만에 지수가 6% 이상 크게 떨어진 겁니다.",
          "quote": "코스피, 6%대 급락 4,697…전날 급등분 모두 반납(종합)",
          "member_count": 4,
          "sample_articles": [
            {
              "n": 1394,
              "title": "코스피, 6%대 급락 4,697…전날 급등분 모두 반납(종합)",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125133251008"
            },
            {
              "n": 1341,
              "title": "[속보] 삼전 시총 1000조 깨지고 하이닉스 11% 급락…코스피, 하루 만에 5000서 4600대로",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218153"
            },
            {
              "n": 1396,
              "title": "삼전닉스 9∼11% 급락…삼전, 시총 1천조원 하회(종합)",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125043951008"
            },
            {
              "n": 1287,
              "title": "[속보] 코스피, 6.16% 급락해 4697.51 마감…전날 급등분 반납",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/2026112597356"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-03",
          "rank_by_count": 3,
          "name": "대웅제약 항암신약 임상 승인",
          "easy": "대웅제약이 자체 개발한 항암신약 후보물질 'DWP216262'에 대해 식품의약품안전처로부터 임상 1상 승인을 받았습니다. 부작용 감소를 목표로 글로벌 개발에 시동을 걸었다는 건데요, 선택적 TEAD 저해 항암신약으로 본격적인 임상 진입에 나선 셈입니다.",
          "quote": "대웅제약, 자체 개발 항암신약 임상 1상 승인…부작용 감소가 목표",
          "member_count": 4,
          "sample_articles": [
            {
              "n": 1451,
              "title": "대웅제약, 자체 개발 항암신약 임상 1상 승인…부작용 감소가 목표 - 파이낸셜포스트",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE84Xzd2T19Qb2lMd3BRdnd4OXZJbWRLYXcyNW5oWUZpZlhyMDBtVUxOQ29FRTUzWG5GcUd1dkQ0cnp2MHFEYWd3ekhPemtfczdVNlc1NUM2QzJHYnNocTZhVHhTeDFSNy1SUkZwVkNoenl4S0dh?oc=5"
            },
            {
              "n": 1446,
              "title": "대웅제약, TEAD 선택적 항암제 ‘DWP216262’ 임상 1상 승인 - 메디컬투데이",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5jYWhNRnJtYXI0bjJQdXlMTU9xb3ZVNnExU3ZaX01oaEhtTy1tZ2lEVEJNc3BKX2ExTmQzVDdhbWllSmhfVVZ1dGtKbElROGVjQmFCMTNTRExlbmhfaWQ0LWtaWHNtMUtwWUFjTg?oc=5"
            },
            {
              "n": 1447,
              "title": "대웅제약, 선택적 TEAD 저해 항암신약 임상 1상 진입…글로벌 개발 시동 - www.ebn.co.kr",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBEcjdIcUJRN1ZSaV9ybEswYlRscWtydzhPTDVHbko0aWNLZjBIM1lFUTJDOVdCLWtyRGc5NVIxRnoxbjNUanNRQlVvR2dfLVh1TmZTdDNqZFNnWmJ6MVNDV193Q1NLYmJH?oc=5"
            },
            {
              "n": 1445,
              "title": "대웅제약, 표적 항암 신약 후보 물질 'DWP216262' 식약처 임상 1상 IND 승인 - 팜뉴스",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5Xam9PZDhDejdIcXdTZVoycDB2RWs2R0VDN2lPY2pVNGdrNVo2QVRSWXNtZkdVdXoycTNYdERkaGdHa3BheXpsaThoZm9HaF9FTWdlNENaS3lrc0NGYllnN3RFQ1pNc25aVzBLeQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-04",
          "rank_by_count": 4,
          "name": "미국 과잉생산 관세 예고",
          "easy": "미국이 한국을 포함한 14개 경제주체를 대상으로 과잉생산 관세 부과를 예고했습니다. 한국도 새로운 관세 압박 대상에 이름을 올렸지만, 기존 한미 합의에 따른 15% 상한은 유지된다는 겁니다. 쉽게 말하면 새로운 관세 압박 속에서도 한국은 15% 상한을 지킨 셈입니다.",
          "quote": "美 '과잉생산 관세' 발표 예고…",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 1233,
              "title": "美 '과잉생산 관세' 발표 예고…\"한국엔 15% 상한 유지\"",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/2026112506641"
            },
            {
              "n": 1291,
              "title": "[속보] 美, 한국 등 14개 경제주체에 ‘과잉생산 관세’ 예고",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/world/12218736"
            },
            {
              "n": 1350,
              "title": "역대급 대미흑자 관세 부메랑 피했다…15% 사수에 일단 안도",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261126002000003"
            }
          ],
          "flags": [
            "분야로 묶였을 수 있음(제목끼리 거의 안 겹침)"
          ],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-05",
          "rank_by_count": 5,
          "name": "미국 10월 PCE 물가 상승",
          "easy": "미국의 10월 개인소비지출(PCE) 물가가 전년 동월 대비 3.8% 상승했습니다. 예상치를 웃돌면서 연방준비제도의 12월 금리 인상 전망에 더욱 힘이 실렸다는 말이에요. 쉽게 말하면 물가 상승 때문에 12월 금리 인상이 확실시되는 분위기입니다.",
          "quote": "美 10월 PCE 물가 3.8%로 가속…연준 추가 금리 인상 불가피할 듯",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 157,
              "title": "美 10월 PCE 물가 3.8%로 가속…연준 추가 금리 인상 불가피할 듯 - 글로벌이코노믹",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQY1B4TDZyaEhLQkJzSm8tVWo1ZTZpNEFzS2JxMGJ3cUVqYzFyTVFqSTlDTWhhZEhtbktOZHZmQ2FMNVdHX21mdnAteWI5VTdPazZmaS1PaXl2ajBVTGgzUnBQVk9vWkxrYVBNdzg5dE9hRlNibnNPN0lXaVVreWUzQ2pnSHV1eWIz?oc=5"
            },
            {
              "n": 159,
              "title": "美 10월 PCE 물가 3.8% 상승… 12월 금리 인상 전망에 힘 실려 - 조선일보",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOaUJrN0NjTVBMOFVNVHBCWXJ6U3B3YUxMVEpGNWtqLUZNLU12VHc1VWVBUFJ3UzVHN1FhS0xJaU4wNlNCRk5qTnZqbE5IVHZ4NkNMYTRmbWo2eVJZSUk2a00zZ0ZnX0tFU0QtRUdBckl2TmxCTnhlU25DbXN2Z3ljaC0ySUo4WXV6?oc=5"
            },
            {
              "n": 161,
              "title": "美 10월 개인소비물가 3.8%↑…'12월 금리 인상' 굳히기 - 머니투데이 - 머니투데이",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE52czgtYnBSSk5NZ0w3OGlKVExXYmFlZ0tsY2RFTGxPOUF6dm1tY194Wlc1RG5ha1VzVUlwMkVLUnFUQkg5ZzdZNW5nckZPTV8yNW1DQ2VyMElZWWdqbXhBYXdDSVJ5RDdy0gFuQVVfeXFMUERtTE5RMk5zb1FQX1czb3RhRlJmdHo5V0c2RXdzanNwSXlaUG5jVTV3Y3JKUkc0M091RVlpX2Fwazl2emxSd0VpdEJqdGdVTlJ2dGZJSnNMdmZfdkpxX0pvemJiWndtb2ZBWWlvVGc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-06",
          "rank_by_count": 6,
          "name": "효성굿스프링스 ASME 인증",
          "easy": "효성굿스프링스가 원전 공급용 펌프에 대해 미국기계학회(ASME) 인증을 획득했습니다. 조현준 효성 회장의 주도 아래 전 제품 인증을 받으면서 체코 및 소형모듈원자로(SMR) 수주를 겨냥하고 있다는 말이에요. 쉽게 말하면 해외 원전 수주를 위한 발판을 마련한 셈입니다.",
          "quote": "효성굿스프링스, ‘원전 공급용 펌프’ 미국 기계 학회 인증 획득…해외 수주 기대",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 115,
              "title": "효성굿스프링스, ‘원전 공급용 펌프’ 미국 기계 학회 인증 획득…해외 수주 기대 - 서울STV뉴스",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE51Q2UzQ2EzbWM1LUlLZGlyWXFLcExnYnZLUFNLY24yM0FBR3pGTlRTQUhJZzU4em45anVDbmVieU9CTVNRR3ZFNDhsQm1hNHRuYUNxNl9DcDk4ZnBtdG5VUlA3aUhMOUk?oc=5"
            },
            {
              "n": 108,
              "title": "조현준 효성 회장, 효성굿스프링스 원전용 펌프 전 제품 ASME 인증…체코·SMR 수주 겨냥 - CEO저널",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTFBEc0llaGRZaTgwaFh0YWJ1WDdncHRVYmUtOEMtYmMxZldlc2gzYlBfTHlFUGZUVHJvcUREUkxyNWpEVFBYLVBvUEZXRGdRa2pBdHdTa0tuOUNTZnNJN2FZclhTakxEY0I0Tndj0gFrQVVfeXFMUERzSWVoZFlpODBoWHRhYnVYN2dwdFViZS04Qy1iYzFmV2VzaDNiUF9MeUVQZlRUcm9xRERSTHI1akRUUFgtUG9QRldEZ1FrakF0d1NrS245Q1Nmc0k3YVlyWFNqTERjQjROd2M?oc=5"
            },
            {
              "n": 111,
              "title": "효성굿스프링스, 원전용 펌프 ASME 인증 획득 - 디일렉",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE5NelM4WEFWSXVnZ1ItS0Y3ZWhpc1hXYjZqdEIxY2FSaHFUeTZJR1ZubUVINTBEOS1xNVdMZ1BmaHlaa3ZVNDEzclBCaHJSazdJc2RwUjhQSi1PVlJyV2NEazVjdnZYUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-07",
          "rank_by_count": 7,
          "name": "한화오션 호위함 수주 무산",
          "easy": "한화오션이 태국의 차세대 호위함 도입 사업에 대한 우선협상대상자 지위를 상실했습니다. 약 6800억원 규모의 태국 해군 호위함 수주가 무산됐다는 건데요, 결국 우선협상자 자격을 잃으면서 아쉬움을 남기게 됐습니다.",
          "quote": "한화오션 \"태국 해군 호위함 우선협상대상자 지위 상실\"",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 1380,
              "title": "한화오션 \"태국 해군 호위함 우선협상대상자 지위 상실\"",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125179800003"
            },
            {
              "n": 1264,
              "title": "한화오션, 태국 해군 호위함 사업 우선협상자 지위 상실 [주목 e공시]",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/2026112504376"
            },
            {
              "n": 1238,
              "title": "한화오션, 6800억 태국 호위함 수주 무산…우선협상대상자 지위 상실",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/202611250461i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-08",
          "rank_by_count": 8,
          "name": "SK하이닉스 용인 공장 사고",
          "easy": "용인 SK하이닉스 사업장 폐수처리장에서 근로자 추락 사망 사고가 발생했습니다. 경찰과 관계 당국이 정확한 사고 경위를 조사하고 있다는 소식이에요. 쉽게 말하면 현장에서 안타까운 인명 사고가 발생한 셈입니다.",
          "quote": "[단독] SK하이닉스 용인 사업장서 노동자 추락 사망",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 85,
              "title": "[단독] SK하이닉스 용인 사업장서 노동자 추락 사망 - 경인일보",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBvMldiTU4ta3hsVGR6ejdueHVIRmgzeTdFREFsaG5nSlFDVGVReHA1clZpLVR4ZHcxRlZYNl9vTFNxMlJPMDc5QTlQdFdZMTRMdFE?oc=5"
            },
            {
              "n": 88,
              "title": "용인 SK하이닉스 사업장 폐수처리장서 추락 사고…근로자 1명 숨져 - 경기신문",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFBWLV9SSVQ1RGFRTkxfODczUzNpMXBGS1laZmxBa0FXdEFreGd0c2NLMjdVYTFmNV9uQ0FBcU5uSmR3R1Vwc1hlTC1JelVFb1RsYWxhSVhJTXB0Sldza05mRXl3?oc=5"
            },
            {
              "n": 89,
              "title": "SK하이닉스 용인 사업장서 노동자 추락사고 발생 - 기호일보",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1ROUs2Z01YSk1uLUxMZUw1TzV5ODBiUndxMjZqUExfWTZ0WVhoU1JIVXlVcTdLdkhVN1lRcFJTdUJsd2JzZHI3dmVHNk5leFVlUk1LdEdMdjRwTjYwZE1HeW1UdzBNREp6TVl4RnZFNA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-09",
          "rank_by_count": 9,
          "name": "인천 국제양자산업전시회 개막",
          "easy": "아시아 최초의 글로벌 양자산업 전시회인 '2026 IQT KOREA'가 인천 송도에서 개막했습니다. 77개 기업이 참가해 글로벌 기술 경쟁을 벌이며 양자 기술 협력을 본격화하고 있다는 건데요. 쉽게 말하면 아시아에서 처음으로 큰 양자산업 행사가 열린 셈입니다.",
          "quote": "글로벌 양자산업 전시회 ‘2026 IQT KOREA’, 아시아 최초 인천 송도서 개막",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 1441,
              "title": "글로벌 양자산업 전시회 ‘2026 IQT KOREA’, 아시아 최초 인천 송도서 개막 - 복지투데이",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9ScnU4MjBscWR3SDhoM3VEelVYb25RbGNUelRyOTV3NGVkMmFBaFI4T1RSM19STThzNVJUWUJBMlBSR3hLUjNOYkVhNUhYd3RDOXZSQ09uSmVjXzN5NWZZUlBFWEZJMTgxZnYyLQ?oc=5"
            },
            {
              "n": 1437,
              "title": "인천경제청, 아시아 첫 양자산업 전시회 인천 송도서 개막…글로벌 기술협력 본격화 - 서프라이즈뉴스",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBvYWxQTk5tb3JHWTBScFZMRE14TlBnUUNBRUxCQS04Y2dibWh5YWsyam52R0lLV0w0WWduYnBlcU9rQ3RWdV9NbERPODNVYmhJRGdiZVRsQ3RQX1hIdE5jUEJBOFdieFMyaHZMTHBuTQ?oc=5"
            },
            {
              "n": 1438,
              "title": "아시아 첫 국제양자산업전시회 인천 송도서 개막··· 기업 77개 참가 - 인천투데이",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9WUUFTVGhUZmxqVW9pUmJ3Y25TUXR6ZG0tNndrVThoVEtlQXVTN3dVUTgwV3N5OFFVV0pQeFBSeVdvZ01SekNGMkQtYzAtQzUwUElmMkcxam9ZUGE2MGpQZ1VKTXNZRTdnUXhJU1VHUlQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-10",
          "rank_by_count": 10,
          "name": "아이씨에이치 배터리 소재 공략",
          "easy": "아이씨에이치가 미국 친환경 정책에 발맞춰 ESS 배터리 소재 공급을 확대하고 있습니다. 난연 PU폼을 활용해 SK온의 배터리 소재 품질검증을 통과했다는 말이에요. 북미 시장 공략에 본격적으로 속도를 내는 셈입니다.",
          "quote": "아이씨에이치, 美 친환경 정책 기대감…ESS 배터리 소재 공급 확대",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 188,
              "title": "아이씨에이치, 美 친환경 정책 기대감…ESS 배터리 소재 공급 확대 - 뉴시스",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5PcnRFUDV2OXRpUTFad3d1d3J0Rm5BTmZOd0RQd3c3YTBJRjk0R21OLXFIUU5wZzRIM3RYbUdZVHEyQjlfS3NfWkhzYm5jMEl0TkhsNmZpY0w5aU8zSkktddIBeEFVX3lxTE16MF8tUmNhemRJbkcwZl9CY3ROc0h0WU9SUVhZR3p4cV9OTUpfY0JMenlpUzFmN1dfVnVLWGRfa3Y4NVJvVVBmSlh2TGd0TFB3Q0lDSTdnajA4RFVGbTRQRFlpWTJRR0JReFR1ZTdwYkhDS1NvaTRDQw?oc=5"
            },
            {
              "n": 189,
              "title": "아이씨에이치, 美 ESS 시장 공략 확대…SK온 배터리 소재 품질검증 통과 - 팝콘뉴스",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBZRDlZMWtXcktkdGJZNGNESTRJYzREblM1OUxlcnpNVDZ6N2FneXZWODVwZU1nM3Zsa1Y1NzRmMmZaSkZYZ0hUbGluUWRRRmtCRjhwSFZjSE9mODRveVZTak1KVlFsaGtBQ0xkWUo0RdIBckFVX3lxTE0tREphT2NCTTBveTZMUkQ0YV9CUk91Z2ZPeVVWMlo4NDFYWVQySFEtWXdldUlRcy15X1pTdm81RnNjZnNWTXBONEE4R3JveWFhakJaMExiSHRnbUdpUnF6cnhLYzI2MnBUajNrT3pDTnptUQ?oc=5"
            },
            {
              "n": 190,
              "title": "[더벨]아이씨에이치, 난연 PU폼으로 미국 ESS 시장 공략 - 머니투데이 - 머니투데이",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE93UVh4RzFnNWY5a2JqU0NSZm5hbl9CeUsxQm5faHhNdU5KMDdRRk5WemxGaXJBZG0wQnhBa0dyQkFIV0FkYTRKWWJjc1B2YVRfLWdhYXl0UFFieTNzdktmZUlUMG9salhybmVnTXdR0gFuQVVfeXFMT3dRWHhHMWc1ZjlrYmpTQ1JmbmFuX0J5SzFCbl9oeE11TkowN1FGTlZ6bEZpckFkbTBCeEFrR3JCQUhXQWRhNEpZYmNzUHZhVF8tZ2FheXRQUWJ5M3N2S2ZlSVQwb2xqWHJuZWdNd1E?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-11",
          "rank_by_count": 11,
          "name": "범한메카텍 SMR 제작 역량 공개",
          "easy": "범한메카텍이 창원공장을 글로벌 SMR 개발사에 공개하고 제작 역량을 선보였습니다. 해외 SMR 개발사들을 대상으로 글로벌 공급망 진출을 모색하고 있다는 건데요. 회사의 우수한 제조 기술을 적극적으로 알린 셈입니다.",
          "quote": "범한메카텍, 글로벌 SMR 개발사에 창원공장 제작 역량 소개",
          "member_count": 3,
          "sample_articles": [
            {
              "n": 114,
              "title": "범한메카텍, 글로벌 SMR 개발사에 창원공장 제작 역량 소개 - 경남신문",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1iNjJDZEI3eGFna0lPQ2RwUFpzYW1aSWpOU3BBZDBUdnN6S0lSYWloYUdZTTVydmJfb1FoODJvc0VKMUhNWmlDdUI1VU5abm94dkwzWWFyTDQyZw?oc=5"
            },
            {
              "n": 113,
              "title": "범한메카텍, 해외 SMR 개발사에 창원공장 공개…글로벌 공급망 진출 모색 - 아시아경제",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9GTjZKdnNEaGdicDRqQWx3TlBTVHRqMG4yRi1RQ3YxUEhsRWZnRnp6dDkxOTU3bEJRQ2ZBcDJGQWYtd190MnVaS2hIcXZuSFBYcjFTc0hHLTh4a3FIb3lSZg?oc=5"
            },
            {
              "n": 109,
              "title": "범한메카텍, 글로벌 SMR 개발사에 창원공장 제작 역량 선보여 - 시사코리아저널",
              "source_name": "'원전 수주 SMR'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE81emhZcFE1SXJxM21oTm9NcjhTYmloWmsyMXY0VU1qV004ZWFLNzZzakx3VTBjODVzV2wtMXUxbk5RaTUwSjJfM2lwd3B2OXloZWxzZmhXU0Q3Vm5OaTl3SmpCeGFZTE1m?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-12",
          "rank_by_count": 12,
          "name": "이형일 부총리 임금체계 발언",
          "easy": "이형일 부총리 겸 재정경제부 장관이 임금체계 개편 우수기업을 방문해 노사 협력을 강조했습니다. 노사가 협력해 기업 여건에 맞는 합리적이고 자율적인 임금체계 도입을 확산해야 한다고 밝혔다는 말이에요. 정부도 자율적 개편을 적극 지원하겠다는 입장입니다.",
          "quote": "이형일 \"노사 협력해 기업 여건 맞는 자율 임금체계 도입해야\"",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 1374,
              "title": "이형일 \"노사 협력해 기업 여건 맞는 자율 임금체계 도입해야\"",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125131000002"
            },
            {
              "n": 1294,
              "title": "이형일 부총리 “노사 협력해 기업 여건 맞는 자율 임금체계 도입해야”",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218498"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-13",
          "rank_by_count": 13,
          "name": "삼성전기 자사주 소각",
          "easy": "삼성전기가 주주가치 제고를 위해 1조7000억원 규모의 자기주식을 전량 소각하기로 이사회에서 결정했습니다. 보통주 200만주와 우선주 5만3430주가 대상이라는 말이에요. 주가 상승에 힘입어 소각 규모가 크게 확대된 셈입니다.",
          "quote": "삼성전기, 1조7000억원 자사주 전량 소각",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 1325,
              "title": "삼성전기, 1조7000억원 자사주 전량 소각",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218546"
            },
            {
              "n": 1383,
              "title": "삼성전기, 1.7조원 자사주 소각…주가 상승에 규모 12배↑",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125166100003"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-14",
          "rank_by_count": 14,
          "name": "한전 고객정보 유출 대책",
          "easy": "한국전력공사가 대규모 고객정보 유출 사고와 관련해 2차 피해 예방 대책을 가동했습니다. 최대 1000만원 한도의 금융사기 보상보험을 제공하기로 했다는 건데요. 피해 확산을 막기 위해 안심 보상 제도를 마련한 셈입니다.",
          "quote": "한전, 고객정보 유출 2차 피해 예방대책 가동",
          "member_count": 2,
          "sample_articles": [
            {
              "n": 59,
              "title": "한전, 고객정보 유출 2차 피해 예방대책 가동 - BBS 불교방송",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE1rdUZwa09BRGpCeWpBbGpoc2dxVFV4dGdMN1d5cmx4ak5HSGx6cm10QnB1Y2VBZldETUdiRTBOWFJKNlM1M1AyQVdydm1sQlJqejRkbDNuYnI3bkcxd3FXT1liVUc5dFI4YXcw?oc=5"
            },
            {
              "n": 60,
              "title": "한전 “고객정보 유출, 2차피해 끝까지 막는다”…최대 1000만원 금융사기 보상보험 제공 - 부산일보",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5tTkFQNmtUVUdwS1RySGdDYzh1SGdqdEJNYXBqNkFRTG5hOXVROXJTN3BaMVhBc0lYcjQ4ZXgxR0hucVcyY3NhVmlsUTF0djZ4bDZBOHpNak5QaGYwVTdyTEVCLVJ6Z3NYcmFqZEFJd1ZmZndt?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": false,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        }
      ],
      "single_articles": [
        {
          "id": "e261126-15",
          "rank_by_count": 15,
          "name": "1달러 스테이블코인이 7800원…반복되는 가격 왜곡에 시장 관리 도마",
          "easy": "",
          "quote": "1달러 스테이블코인이 7800원…반복되는 가격 왜곡에 시장 관리 도마",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 2,
              "title": "1달러 스테이블코인이 7800원…반복되는 가격 왜곡에 시장 관리 도마",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375301"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-16",
          "rank_by_count": 16,
          "name": "김정관 산업장관 \"석유 최고가격제 단계적 정상화…유종별 차등 적용 검토\"",
          "easy": "",
          "quote": "김정관 산업장관 \"석유 최고가격제 단계적 정상화…유종별 차등 적용 검토\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 3,
              "title": "김정관 산업장관 \"석유 최고가격제 단계적 정상화…유종별 차등 적용 검토\"",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375300"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-17",
          "rank_by_count": 17,
          "name": "장길수 고려대 교수, IEEE 석학회원(Fellow) 선정",
          "easy": "",
          "quote": "장길수 고려대 교수, IEEE 석학회원(Fellow) 선정",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 4,
              "title": "장길수 고려대 교수, IEEE 석학회원(Fellow) 선정",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375294"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-18",
          "rank_by_count": 18,
          "name": "현대차그룹, 통합 완속충전기 공개…충전사업 재편 퍼즐 맞춘다",
          "easy": "",
          "quote": "현대차그룹, 통합 완속충전기 공개…충전사업 재편 퍼즐 맞춘다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 5,
              "title": "현대차그룹, 통합 완속충전기 공개…충전사업 재편 퍼즐 맞춘다",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375293"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-19",
          "rank_by_count": 19,
          "name": "히트펌프 350만대도 역부족…탄소 감축 최대 750만t ‘구멍’",
          "easy": "",
          "quote": "히트펌프 350만대도 역부족…탄소 감축 최대 750만t ‘구멍’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 6,
              "title": "히트펌프 350만대도 역부족…탄소 감축 최대 750만t ‘구멍’",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375279"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-20",
          "rank_by_count": 20,
          "name": "동방전기공업, 중기부 ‘2026 명문장수기업’ 선정",
          "easy": "",
          "quote": "동방전기공업, 중기부 ‘2026 명문장수기업’ 선정",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 7,
              "title": "동방전기공업, 중기부 ‘2026 명문장수기업’ 선정",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375292"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-21",
          "rank_by_count": 21,
          "name": "(인사)GS그룹",
          "easy": "",
          "quote": "(인사)GS그룹",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 8,
              "title": "(인사)GS그룹",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375289"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-22",
          "rank_by_count": 22,
          "name": "전기·에너지·자원산업 ISC, 제4기 사업 마무리…새로운 도약 준비",
          "easy": "",
          "quote": "전기·에너지·자원산업 ISC, 제4기 사업 마무리…새로운 도약 준비",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 9,
              "title": "전기·에너지·자원산업 ISC, 제4기 사업 마무리…새로운 도약 준비",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375273"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-23",
          "rank_by_count": 23,
          "name": "한국공항공사, 현장 중심 협업조직 ‘KAC 현대인’ 출범",
          "easy": "",
          "quote": "한국공항공사, 현장 중심 협업조직 ‘KAC 현대인’ 출범",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 10,
              "title": "한국공항공사, 현장 중심 협업조직 ‘KAC 현대인’ 출범",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375291"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-24",
          "rank_by_count": 24,
          "name": "한신공영, 건설경기 침체 속 3분기 누적 영업이익 14.9% 증가",
          "easy": "",
          "quote": "한신공영, 건설경기 침체 속 3분기 누적 영업이익 14.9% 증가",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 11,
              "title": "한신공영, 건설경기 침체 속 3분기 누적 영업이익 14.9% 증가",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375290"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-25",
          "rank_by_count": 25,
          "name": "환경공단, 페루와 순환경제 협력 본격화",
          "easy": "",
          "quote": "환경공단, 페루와 순환경제 협력 본격화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 12,
              "title": "환경공단, 페루와 순환경제 협력 본격화",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375288"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-26",
          "rank_by_count": 26,
          "name": "LH, ‘2026 스마트건설·안전·AI EXPO’서 AI·로봇 기술 선보인다",
          "easy": "",
          "quote": "LH, ‘2026 스마트건설·안전·AI EXPO’서 AI·로봇 기술 선보인다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 13,
              "title": "LH, ‘2026 스마트건설·안전·AI EXPO’서 AI·로봇 기술 선보인다",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375287"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-27",
          "rank_by_count": 27,
          "name": "TS, AI 기반 철도 안전관리 사례 공유…코레일, 우수사례 최우수",
          "easy": "",
          "quote": "TS, AI 기반 철도 안전관리 사례 공유…코레일, 우수사례 최우수",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 14,
              "title": "TS, AI 기반 철도 안전관리 사례 공유…코레일, 우수사례 최우수",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375285"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-28",
          "rank_by_count": 28,
          "name": "국내 폐플라스틱·폐섬유 재활용 기술 중국서 선보인다",
          "easy": "",
          "quote": "국내 폐플라스틱·폐섬유 재활용 기술 중국서 선보인다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 15,
              "title": "국내 폐플라스틱·폐섬유 재활용 기술 중국서 선보인다",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375286"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-29",
          "rank_by_count": 29,
          "name": "한-일, 태풍·집중호우 등 극한기상 대응 공동연구 나선다",
          "easy": "",
          "quote": "한-일, 태풍·집중호우 등 극한기상 대응 공동연구 나선다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 16,
              "title": "한-일, 태풍·집중호우 등 극한기상 대응 공동연구 나선다",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375284"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-30",
          "rank_by_count": 30,
          "name": "코레일, 한국철도학회와 고속철도 통합 이후 미래 철도 전략 논의",
          "easy": "",
          "quote": "코레일, 한국철도학회와 고속철도 통합 이후 미래 철도 전략 논의",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 17,
              "title": "코레일, 한국철도학회와 고속철도 통합 이후 미래 철도 전략 논의",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375283"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-31",
          "rank_by_count": 31,
          "name": "한난, 중소협력사와 상생협력 강화…동반성장 지원 확대",
          "easy": "",
          "quote": "한난, 중소협력사와 상생협력 강화…동반성장 지원 확대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 18,
              "title": "한난, 중소협력사와 상생협력 강화…동반성장 지원 확대",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375282"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-32",
          "rank_by_count": 32,
          "name": "세이프티랩, ‘슬러시 2026’서 핀란드 FIOH·Nobina와 협력 논의",
          "easy": "",
          "quote": "세이프티랩, ‘슬러시 2026’서 핀란드 FIOH·Nobina와 협력 논의",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 19,
              "title": "세이프티랩, ‘슬러시 2026’서 핀란드 FIOH·Nobina와 협력 논의",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375281"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-33",
          "rank_by_count": 33,
          "name": "서울시, 서부선 민자사업 재공고…총사업비 2조3252억",
          "easy": "",
          "quote": "서울시, 서부선 민자사업 재공고…총사업비 2조3252억",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 20,
              "title": "서울시, 서부선 민자사업 재공고…총사업비 2조3252억",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375280"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-34",
          "rank_by_count": 34,
          "name": "에코프로, 온누리스포츠단 전국장애인체전 역대 최다 금메달 성과 격려",
          "easy": "",
          "quote": "에코프로, 온누리스포츠단 전국장애인체전 역대 최다 금메달 성과 격려",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 21,
              "title": "에코프로, 온누리스포츠단 전국장애인체전 역대 최다 금메달 성과 격려",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375278"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-35",
          "rank_by_count": 35,
          "name": "“사고 나기 전에 위험 잡는다”…재생에너지 안전관리, 데이터 기반 예방체계로 전환",
          "easy": "",
          "quote": "“사고 나기 전에 위험 잡는다”…재생에너지 안전관리, 데이터 기반 예방체계로 전환",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 22,
              "title": "“사고 나기 전에 위험 잡는다”…재생에너지 안전관리, 데이터 기반 예방체계로 전환",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375107"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-36",
          "rank_by_count": 36,
          "name": "동서울변환소 협의서안 합의…주민투표 이후 검증 본격화",
          "easy": "",
          "quote": "동서울변환소 협의서안 합의…주민투표 이후 검증 본격화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 23,
              "title": "동서울변환소 협의서안 합의…주민투표 이후 검증 본격화",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375277"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-37",
          "rank_by_count": 37,
          "name": "한전 해킹 후폭풍…연말 대형 공사 발주시장까지 번지나",
          "easy": "",
          "quote": "한전 해킹 후폭풍…연말 대형 공사 발주시장까지 번지나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 24,
              "title": "한전 해킹 후폭풍…연말 대형 공사 발주시장까지 번지나",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375268"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-38",
          "rank_by_count": 38,
          "name": "동물대체시험 전문인력 양성 나선다…정부·대학·공공기관 협력",
          "easy": "",
          "quote": "동물대체시험 전문인력 양성 나선다…정부·대학·공공기관 협력",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 25,
              "title": "동물대체시험 전문인력 양성 나선다…정부·대학·공공기관 협력",
              "source_name": "전기신문",
              "link": "https://www.electimes.com/news/articleView.html?idxno=375271"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-39",
          "rank_by_count": 39,
          "name": "S&P, 거버넌스 우려로 엔비디아를 신용감시 대상에 올려",
          "easy": "",
          "quote": "S&P, 거버넌스 우려로 엔비디아를 신용감시 대상에 올려",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 26,
              "title": "S&P, 거버넌스 우려로 엔비디아를 신용감시 대상에 올려",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2190753"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-40",
          "rank_by_count": 40,
          "name": "윌리엄 블레어, 길리어드 사이언스에 ’시장 수익률 상회’ 투자의견 개시",
          "easy": "",
          "quote": "윌리엄 블레어, 길리어드 사이언스에 ’시장 수익률 상회’ 투자의견 개시",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 27,
              "title": "윌리엄 블레어, 길리어드 사이언스에 ’시장 수익률 상회’ 투자의견 개시",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2190741"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-41",
          "rank_by_count": 41,
          "name": "12월 환매 데이터, 사모대출 펀드 투자심리 시험대",
          "easy": "",
          "quote": "12월 환매 데이터, 사모대출 펀드 투자심리 시험대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 28,
              "title": "12월 환매 데이터, 사모대출 펀드 투자심리 시험대",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-93CH-2190739"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-42",
          "rank_by_count": 42,
          "name": "CoreWeave 주관은행, 다음 주 45억 달러 메타 연계 대출 매각 추진",
          "easy": "",
          "quote": "CoreWeave 주관은행, 다음 주 45억 달러 메타 연계 대출 매각 추진",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 29,
              "title": "CoreWeave 주관은행, 다음 주 45억 달러 메타 연계 대출 매각 추진",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2190736"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-43",
          "rank_by_count": 43,
          "name": "Galp Energia, Bacalhau 유전 생산 최대 8주 중단",
          "easy": "",
          "quote": "Galp Energia, Bacalhau 유전 생산 최대 8주 중단",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 30,
              "title": "Galp Energia, Bacalhau 유전 생산 최대 8주 중단",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-93CH-2190734"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-44",
          "rank_by_count": 44,
          "name": "캔터 피츠제럴드가 선정한 ’블랙 프라이데이’ 바이오텍 유망주 5선",
          "easy": "",
          "quote": "캔터 피츠제럴드가 선정한 ’블랙 프라이데이’ 바이오텍 유망주 5선",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 31,
              "title": "캔터 피츠제럴드가 선정한 ’블랙 프라이데이’ 바이오텍 유망주 5선",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2190731"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-45",
          "rank_by_count": 45,
          "name": "SpaceX, 위성 100만 기 규모 궤도 데이터센터 구축에 FCC 승인",
          "easy": "",
          "quote": "SpaceX, 위성 100만 기 규모 궤도 데이터센터 구축에 FCC 승인",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 32,
              "title": "SpaceX, 위성 100만 기 규모 궤도 데이터센터 구축에 FCC 승인",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2190726"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-46",
          "rank_by_count": 46,
          "name": "Diana Shipping Inc 주가, 실적 부진에 하락",
          "easy": "",
          "quote": "Diana Shipping Inc 주가, 실적 부진에 하락",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 33,
              "title": "Diana Shipping Inc 주가, 실적 부진에 하락",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-93CH-2190718"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-47",
          "rank_by_count": 47,
          "name": "더블라인 코언, 급락한 하이퍼스케일러 채권 매수로 전환 - 블룸버그",
          "easy": "",
          "quote": "더블라인 코언, 급락한 하이퍼스케일러 채권 매수로 전환 - 블룸버그",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 34,
              "title": "더블라인 코언, 급락한 하이퍼스케일러 채권 매수로 전환 - 블룸버그",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2190715"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-48",
          "rank_by_count": 48,
          "name": "S&P, 뉴마켓 신용등급 전망 ’안정적’으로 상향 조정",
          "easy": "",
          "quote": "S&P, 뉴마켓 신용등급 전망 ’안정적’으로 상향 조정",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 35,
              "title": "S&P, 뉴마켓 신용등급 전망 ’안정적’으로 상향 조정",
              "source_name": "인베스팅 주식",
              "link": "https://kr.investing.com/news/stock-market-news/article-2190708"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-49",
          "rank_by_count": 49,
          "name": "미국 10월 PCE 물가 전년 대비 3.8% 상승…예상 부합",
          "easy": "",
          "quote": "미국 10월 PCE 물가 전년 대비 3.8% 상승…예상 부합",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 36,
              "title": "미국 10월 PCE 물가 전년 대비 3.8% 상승…예상 부합",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-2190388"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-50",
          "rank_by_count": 50,
          "name": "독일 2026년 3분기 GDP 0.1% 성장…잠정치보다 소폭 하향",
          "easy": "",
          "quote": "독일 2026년 3분기 GDP 0.1% 성장…잠정치보다 소폭 하향",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 37,
              "title": "독일 2026년 3분기 GDP 0.1% 성장…잠정치보다 소폭 하향",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-93CH-2190016"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-51",
          "rank_by_count": 51,
          "name": "폴란드 실업률, 4개월 연속 5.8% 유지",
          "easy": "",
          "quote": "폴란드 실업률, 4개월 연속 5.8% 유지",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 38,
              "title": "폴란드 실업률, 4개월 연속 5.8% 유지",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-93CH-2190003"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-52",
          "rank_by_count": 52,
          "name": "UBS CFA 스위스 투자심리, 11월 플러스 전환",
          "easy": "",
          "quote": "UBS CFA 스위스 투자심리, 11월 플러스 전환",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 39,
              "title": "UBS CFA 스위스 투자심리, 11월 플러스 전환",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-93CH-2189992"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-53",
          "rank_by_count": 53,
          "name": "호주 10월 소비자물가 상승률, 예상치 웃돌아",
          "easy": "",
          "quote": "호주 10월 소비자물가 상승률, 예상치 웃돌아",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 40,
              "title": "호주 10월 소비자물가 상승률, 예상치 웃돌아",
              "source_name": "인베스팅 경제",
              "link": "https://kr.investing.com/news/economic-indicators/article-2189641"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-54",
          "rank_by_count": 54,
          "name": "26일 오전 0시 외환 옵션 대규모 만기 집중",
          "easy": "",
          "quote": "26일 오전 0시 외환 옵션 대규모 만기 집중",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 46,
              "title": "26일 오전 0시 외환 옵션 대규모 만기 집중",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-93CH-2190299"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-55",
          "rank_by_count": 55,
          "name": "BCA “유로 미국 달러, 1.12까지 반등 후 1.05로 하락 가능”",
          "easy": "",
          "quote": "BCA “유로 미국 달러, 1.12까지 반등 후 1.05로 하락 가능”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 47,
              "title": "BCA “유로 미국 달러, 1.12까지 반등 후 1.05로 하락 가능”",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-93CH-2190207"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-56",
          "rank_by_count": 56,
          "name": "오늘의 파운드화: PCE 발표 앞두고 위험 선호 약화에 달러 강세",
          "easy": "",
          "quote": "오늘의 파운드화: PCE 발표 앞두고 위험 선호 약화에 달러 강세",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 48,
              "title": "오늘의 파운드화: PCE 발표 앞두고 위험 선호 약화에 달러 강세",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-2190023"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-57",
          "rank_by_count": 57,
          "name": "근원물가 예상 웃돌자 금리 인상 전망 강화…달러 상승",
          "easy": "",
          "quote": "근원물가 예상 웃돌자 금리 인상 전망 강화…달러 상승",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 49,
              "title": "근원물가 예상 웃돌자 금리 인상 전망 강화…달러 상승",
              "source_name": "인베스팅 외환",
              "link": "https://kr.investing.com/news/forex-news/article-2189821"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-58",
          "rank_by_count": 58,
          "name": "영종종합사회복지관-한국전력공사, ‘11월 우리동네 플로깅’실시",
          "easy": "",
          "quote": "영종종합사회복지관-한국전력공사, ‘11월 우리동네 플로깅’실시",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 56,
              "title": "영종종합사회복지관-한국전력공사, ‘11월 우리동네 플로깅’실시 - 미디어생활",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5aTUcxLXV5R0lIanFobDVIbjlLZjdCTHg4OVB4ZGlrZUxMa1lFWFdZN0dOTGx5UTBZWjZWQjNtTjlxb3hGcjRQT0NzdjVDeEg4VVB4ZE1Cc2F3N1VtUXlUZURJRTRCNWZSTjVCUUExMA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-59",
          "rank_by_count": 59,
          "name": "\"3%룰 적용 땐 3조 육박\"...한전 개인정보 유출 과징금 기준 '이목 집중'",
          "easy": "",
          "quote": "\"3%룰 적용 땐 3조 육박\"...한전 개인정보 유출 과징금 기준 '이목 집중'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 57,
              "title": "\"3%룰 적용 땐 3조 육박\"...한전 개인정보 유출 과징금 기준 '이목 집중' - 디일렉",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE5TaERuN2VIT1NZUmxZcU5JZ3lHeWpuNnBacHlOemFJNGJqY1g2WHZod1dYdE9kNktHZzF3VlE3VjdwZjBEbjluTUNtM0J6RDI1b0ZpRFJTNEpEaFE3YVpQeDdIRjhkUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-60",
          "rank_by_count": 60,
          "name": "춘천효자종합사회복지관, 한국전력공사 강원본부 후원으로 사랑의 김장 나누기 행사 진행",
          "easy": "",
          "quote": "춘천효자종합사회복지관, 한국전력공사 강원본부 후원으로 사랑의 김장 나누기 행사 진행",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 58,
              "title": "춘천효자종합사회복지관, 한국전력공사 강원본부 후원으로 사랑의 김장 나누기 행사 진행 - 강원도민일보",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9JcVMtVEVPWmNXTXZYUTA2N0MtYUVrMkwxeFFvNUVIVEhDdUdNZ1lyNmRUZGotOVNDRTdCeFl1UmF3SGdFdnVCRzE1R0loRWlwN0ZTdFVYZnlPNWlERkw0eEhoS1hXZVdw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-61",
          "rank_by_count": 61,
          "name": "[에너지 NOW] 한국가스공사, 한국전력",
          "easy": "",
          "quote": "[에너지 NOW] 한국가스공사, 한국전력",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 61,
              "title": "[에너지 NOW] 한국가스공사, 한국전력 - 위키리크스한국",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9Iem13cjVrZWJsRVR6VjhUZXZWeU9kOUtya1BKYms5ZUkyTDNyb2dKc1hjT3VWdVlueFNiUUZsejFQdWhXdU1PT2wtOFVEcFZKUC1FY01vOTd0aEdTWHRUdDBuTnJTdGNydWE5OXRQQWs?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-62",
          "rank_by_count": 62,
          "name": "[국감AS] 한전 ‘152만명 정보 유출’에 “보상보험 제공”…정보통신 사업 ‘내부통제’ 실태는",
          "easy": "",
          "quote": "[국감AS] 한전 ‘152만명 정보 유출’에 “보상보험 제공”…정보통신 사업 ‘내부통제’ 실태는",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 62,
              "title": "[국감AS] 한전 ‘152만명 정보 유출’에 “보상보험 제공”…정보통신 사업 ‘내부통제’ 실태는 - 주간한국",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9MS2RQV0ZUb2xaYmJra0NvTXhYVHJocVBXMDd0cTlQMTVkREhYd0pjM1Q5TDdKMFdKSEtNX09mcVlrdlhDYl9qNjJhdHJnQ0dkazNTbXNxSEhKMWtBRDgyUU5IaFdSVURqWkgyTE10OFnSAXRBVV95cUxQUS02TVNKZEUwcXI3WlR1ODgwbjR1a3dickNENl9ubDZKWEN6UjJNYVgxU01nQnJzQ1o5M1ItSXg3MnJfM2ZuV1U2Sk81amk0N3hhWW5oRHM2dENkU21zWjRfLUh4eUNuMFdOTEw5N005bFpnQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-63",
          "rank_by_count": 63,
          "name": "[공사 Pick] LH·한국전력·수자원공사, AI 스마트건설 전시·고객정보 보호·보안 기술 상생",
          "easy": "",
          "quote": "[공사 Pick] LH·한국전력·수자원공사, AI 스마트건설 전시·고객정보 보호·보안 기술 상생",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 63,
              "title": "[공사 Pick] LH·한국전력·수자원공사, AI 스마트건설 전시·고객정보 보호·보안 기술 상생 - 라이센스뉴스",
              "source_name": "'한국전력'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTFA3eTVsNlRYMEdLQVRSVDd3SFBYTHJ6SXhBRVNYMVdzTVhVY0NTeGptRXozcm1XWFhjWWJBbjdVS2FFWUZSVy1OSHhSY3JGdmhXY281SncyLWR3dElaaC1mWmExVXpEWnJQTjBv?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-64",
          "rank_by_count": 64,
          "name": "‘상수’된 전력망 확대…철강업계는 고부가 ‘강수’",
          "easy": "",
          "quote": "‘상수’된 전력망 확대…철강업계는 고부가 ‘강수’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 65,
              "title": "‘상수’된 전력망 확대…철강업계는 고부가 ‘강수’ - 시사오늘",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE16OFV6X05lZDVKVk1wMGxTRWFBX0V4VkdwX0xyVmhnUkdwaGlNbk5faUhVYlU5MW5BZkhtalB0Y3pobjNGVmFLb2trNHRVTHJXNWhpNEFkYkhZNHRFYWxaZklEckdTM1RXM1dF?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-65",
          "rank_by_count": 65,
          "name": "해남군의회 김미숙 의원 대표발의…\"해남서 생산한 전기, 해남의 산업을 키우는 데 써야\"",
          "easy": "",
          "quote": "해남군의회 김미숙 의원 대표발의…\"해남서 생산한 전기, 해남의 산업을 키우는 데 써야\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 66,
              "title": "해남군의회 김미숙 의원 대표발의…\"해남서 생산한 전기, 해남의 산업을 키우는 데 써야\" - 지이코노미",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFAzb1ZWcmFmN1JXbDBFLUVCXzFEdWJJX3JtRDgzbTdvQ3JiQmRyZHNfRXNPb1lpbnZ2UUxuZFZVQnY4eWJMTzRXeVEyLUROVVEzd0phOTZCakhzb1ljLTl0bkxONnJudlU?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-66",
          "rank_by_count": 66,
          "name": "송전선로 특위 구성…인공지능·교부세 대책도 촉구",
          "easy": "",
          "quote": "송전선로 특위 구성…인공지능·교부세 대책도 촉구",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 67,
              "title": "송전선로 특위 구성…인공지능·교부세 대책도 촉구 - LG헬로비전",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE5hbGhVVGNVTlhMSDhjbXA0NmlvU3ZEQldYQ0licjVsNk81MVZDblVkUHBwTWZEQ1E0NHhkY0toMFUwQ092LTlOQkNZM0I4dU84V3lRdFZxM3pwYk5JbExnSmQ2Y1pNdmhyb1JHaEdqWmEyZ9IBdkFVX3lxTE1wR3hBejREUFpNZENzUXJ0WlFOVFlUZnFsbGNpbngwMy0zaVJJak9Ka0VyWjBBV3VqV3B2dDVnMWtNS24zNmhqa1dQeW9VWTRtRjRleDdIeGlBMUc2NlhxdS1WOW5FalVId0UyU24zZVpjWDhFcUE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-67",
          "rank_by_count": 67,
          "name": "동서울변환소 10년 갈등 분수령…12월 하남 감일지구 주민투표",
          "easy": "",
          "quote": "동서울변환소 10년 갈등 분수령…12월 하남 감일지구 주민투표",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 68,
              "title": "동서울변환소 10년 갈등 분수령…12월 하남 감일지구 주민투표 - 파인드비",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTFBvR1I0bjItZ1NmNnNBdG51aC1QNk5wbWh6aWFkRV9EUFkxb2tmRmFiMzBNNTdUXzJmT3JRRVg0RlQ5OVZ0ZVJRT2NWZVpFRUNnUXdPWFNKTjNiUm8zQ05UYzN6WE1jd9IBakFVX3lxTE4yVVRiM2dMSEQxeHVXOUhQeGNBVUNBT1hobENROW01cGZySmdENTJCdTNoUmNQeEFUZVBIS0JNVTNCeXluSDM4bmxQMHpFSkFrTHY2a2I5Z1JGanQ5Sjh1S0Q3TzU2U3ZMaGc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-68",
          "rank_by_count": 68,
          "name": "초고전압 송전선로에 대한 초기 연구 수행 제안.",
          "easy": "",
          "quote": "초고전압 송전선로에 대한 초기 연구 수행 제안.",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 69,
              "title": "초고전압 송전선로에 대한 초기 연구 수행 제안. - Vietnam.vn",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiigFBVV95cUxNZW0yay0yaWtTdnJGTVVDQVJTcG1VNFdCUE1jaldIOWpRdTV3ZXN6TEVLRHFrR3VjZUZjWGQ3d0FRTklkZTVsaXAwREdYQnB6Um5xLXlLTmgtQU5YdkdEVUdTZUl1enNQMnNWQzJkYVMtaDlBempnTi1UR0tuTXNxWW5NOVBmbEJXdHc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-69",
          "rank_by_count": 69,
          "name": "NKT, 세계 최초 525kV 해상풍력 HVDC 케이블 생산",
          "easy": "",
          "quote": "NKT, 세계 최초 525kV 해상풍력 HVDC 케이블 생산",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 70,
              "title": "NKT, 세계 최초 525kV 해상풍력 HVDC 케이블 생산 - 에너지안전신문",
              "source_name": "'전력망 송전선'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1DUUY0dXRiZ0M3ZktVcmJrLVo3Z2Rhd3QtX2VzRWxPWFRma1RFU3hoMFlZWlRjWXlxWXJzeUp3S1RQSVlGV0g0OEpyT2ZQVmo5NWNCSFJpS0xWTXZkbXBnWTZ4RFI?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-70",
          "rank_by_count": 70,
          "name": "[단독] 효성중공업, 美 멤피스 증설에 버금가는 中 투자…연산 440대 추진",
          "easy": "",
          "quote": "[단독] 효성중공업, 美 멤피스 증설에 버금가는 中 투자…연산 440대 추진",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 73,
              "title": "[단독] 효성중공업, 美 멤피스 증설에 버금가는 中 투자…연산 440대 추진 - 데일리안",
              "source_name": "'변압기 수출'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE9ueXFVZW5fT1drbUFkWExzOXRjNC1iZjhqR1Y4VnR5dEFET0gyUkVtTXBWTUk5ckhBNU8zVHU3SUdzak5vcnhEOUxRY2hTSkZDWWpkVw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-71",
          "rank_by_count": 71,
          "name": "내년 값 2배로, 고객 다변화… HBM 시장 지각변동",
          "easy": "",
          "quote": "내년 값 2배로, 고객 다변화… HBM 시장 지각변동",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 76,
              "title": "내년 값 2배로, 고객 다변화… HBM 시장 지각변동 - 조선일보",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQR3JCQ2VDZzVTa3plVmlkQ2tjUWJjSGNpdmc0SmpNb19xak5uUVExWE5RemJiby1KbEJVVm5rY1BNZTh1N3JpMlhkSzl0bGllcTVfTHc3b0o2LXlsU1MtWmh2VUVLdTVtOUxPNzhHUmc4SFFfQ1ZfcnV5a3BiS3JmX3ZqZmUyOFBXaFk5MVlMSlIzQTRqY1NpQ1JsMA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-72",
          "rank_by_count": 72,
          "name": "SK하이닉스, 반도체 전문 인재 확보…HBM 설계부터 신규 팹 구축까지",
          "easy": "",
          "quote": "SK하이닉스, 반도체 전문 인재 확보…HBM 설계부터 신규 팹 구축까지",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 77,
              "title": "SK하이닉스, 반도체 전문 인재 확보…HBM 설계부터 신규 팹 구축까지 - 뉴스1",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBwVnc4T042bnVGMEs2NVMtajVQNkg0RXZxNllhWjJITXh5a1JXVFpPajBJbnpPWWJ5ZTlya0dqRlVVVDNUTjZxS0FvTG1OMjBaTjhlYVYwRmdWZ0d2UmJ5Z2NzUTk?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-73",
          "rank_by_count": 73,
          "name": "HBM 이어 전력반도체도 공급난…AI發 반도체 병목 확산",
          "easy": "",
          "quote": "HBM 이어 전력반도체도 공급난…AI發 반도체 병목 확산",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 78,
              "title": "HBM 이어 전력반도체도 공급난…AI發 반도체 병목 확산 - 글로벌이코노믹",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMihgFBVV95cUxQUDhjZ2xqbkU0Mm9PTmd0dVdENXBTeEcyd3A0UF8yWGtkbGxIQnRqc3J6VUhKM1l3Y2hrTi10UDNMdHdWbXVzbVhibllzdFdYZUdUUW9sUVFON3l3UFZjT2h2VGFTV1V1dEM0clU1WEdkZ3p2S2V6SUNvbXJaaUFwUm01Q2VIUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-74",
          "rank_by_count": 74,
          "name": "화웨이 HBM, CXMT는 수직 게이트 D램…ISSCC서 삼성·SK에 도전장",
          "easy": "",
          "quote": "화웨이 HBM, CXMT는 수직 게이트 D램…ISSCC서 삼성·SK에 도전장",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 79,
              "title": "화웨이 HBM, CXMT는 수직 게이트 D램…ISSCC서 삼성·SK에 도전장 - 디일렉",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE80SU44eHVrYjUzWjRQMmQ3cElOVzE2ZFpkSTU4OHA4MW5NVGRKSnkyMnA4ZXQ4ZW5hQV94NzRWQ0FQUUJzTi1pbEpWWi0xejkyUHVDbXQzd2FmTVpfSXZQRWlTaWJudw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-75",
          "rank_by_count": 75,
          "name": "화웨이, 하이브리드 본딩 '맞춤형 HBM' 개발…삼성·SK와 속도전",
          "easy": "",
          "quote": "화웨이, 하이브리드 본딩 '맞춤형 HBM' 개발…삼성·SK와 속도전",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 80,
              "title": "화웨이, 하이브리드 본딩 '맞춤형 HBM' 개발…삼성·SK와 속도전 - 지디넷코리아",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE52ZFV1S05WQVpuV0Z2Y2l1N2RkUzR3Z2I1MTZPbXR2UE5YOGEtSFY2QlI4RHZQbVB0VTB6YTZwM1I1aGJsRVNFTVMxTUFGLVl1Rl95VGxB?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-76",
          "rank_by_count": 76,
          "name": "화웨이, 하이브리드 본딩 기반 ‘맞춤형 HBM’ 공개···삼전·하닉 ‘경고등’",
          "easy": "",
          "quote": "화웨이, 하이브리드 본딩 기반 ‘맞춤형 HBM’ 공개···삼전·하닉 ‘경고등’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 81,
              "title": "화웨이, 하이브리드 본딩 기반 ‘맞춤형 HBM’ 공개···삼전·하닉 ‘경고등’ - 시사저널e",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMidkFVX3lxTE5scG4zYUxpWkZib0FMSUJTYldQNGt4eEQ4bnB1RTBzS2FOb3NSVkZoSWZpMEZtLVUzWDkwd0NJOG0zWnJQeUx4QjVuWlNsQVdySzEyMGE3WjYtMmhENXZ1aUcwbTNrczhidVFMbHE0bTVKX1RIdlHSAXZBVV95cUxObHBuM2FMaVpGYm9BTElCU2JXUDRreHhEOG5wdUUwc0thTm9zUlZGaElmaTBGbS1VM1g5MHdDSThtM1pyUHlMeEI1blpTbEFXcksxMjBhN1o2LTJoRDV2dWlHMG0za3M4YnVRTGxxNG01Sl9USHZR?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-77",
          "rank_by_count": 77,
          "name": "EUV 막힌 중국, 화웨이는 HBM을 이렇게 만들었다",
          "easy": "",
          "quote": "EUV 막힌 중국, 화웨이는 HBM을 이렇게 만들었다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 82,
              "title": "EUV 막힌 중국, 화웨이는 HBM을 이렇게 만들었다 - 서울경제",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE1vVENFODBwRWNrQ2tpOFZMVzVBVklpYjhnRUtRa3gybU5Dc3hYNUd6eS1WcmUzcjdBT0xwMm1nS2VBYWRjVWxHREliTQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-78",
          "rank_by_count": 78,
          "name": "마이크론, 삼성·SK 안방서 반도체 인재 채용…HBM 기술 경쟁, 인력 확보전으로",
          "easy": "",
          "quote": "마이크론, 삼성·SK 안방서 반도체 인재 채용…HBM 기술 경쟁, 인력 확보전으로",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 83,
              "title": "마이크론, 삼성·SK 안방서 반도체 인재 채용…HBM 기술 경쟁, 인력 확보전으로 - 월요신문",
              "source_name": "'HBM 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9CS25EeEYzYW9RMTk0Ql9WbzZxbnFkWC1vWHNxd0RUM1pyNkNmdUszOFFhZGMtX3hYa1piYVpsUVBmbW9KNWhBQTM3eHdDejBHcUdUN0F2algzdEVENG9VUDMwRU05aTFKSEE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-79",
          "rank_by_count": 79,
          "name": "SK하이닉스, 밸류업 이행 현황 공시…100조 주주환원 재확인",
          "easy": "",
          "quote": "SK하이닉스, 밸류업 이행 현황 공시…100조 주주환원 재확인",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 84,
              "title": "SK하이닉스, 밸류업 이행 현황 공시…100조 주주환원 재확인 - 연합인포맥스",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBwT0xZVWpNSktvR0c0c0NMUFlEb09FdkNRV3NFX2NsNDZ5T2pYOGx2Wkd6X01YU3o4OFk0TjFlWXpTQm9rWHJtUl96c0RmUzFMRkhXODYxeDl6U1BUbF96dlZwT3dzQVgzNFV3cmZ1QmM?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-80",
          "rank_by_count": 80,
          "name": "[속보] 코스피 `멸망의 날`? 삼성전자·SK하이닉스 장중 동반 마이너스 10%대 터치",
          "easy": "",
          "quote": "[속보] 코스피 `멸망의 날`? 삼성전자·SK하이닉스 장중 동반 마이너스 10%대 터치",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 86,
              "title": "[속보] 코스피 `멸망의 날`? 삼성전자·SK하이닉스 장중 동반 마이너스 10%대 터치 - 매일신문",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE80RHBlS0JfMlo2b1Z4ZWgtVkJLc1BUQzZVdkZDdTJmM0N2NFVuU1BGTXJfZ05lYlIzU0pIeHVCQkRZemxMRThZNEdpSFBRQzZLUG5PQmlFRzB0WHVTZ1dua3p3?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-81",
          "rank_by_count": 81,
          "name": "SK하이닉스 \"3D D램 첫 제품은 100층부터, 4~5년 내 양산 목표\"",
          "easy": "",
          "quote": "SK하이닉스 \"3D D램 첫 제품은 100층부터, 4~5년 내 양산 목표\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 87,
              "title": "SK하이닉스 \"3D D램 첫 제품은 100층부터, 4~5년 내 양산 목표\" - 디일렉",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE0zV2VEUFIzMU5NMHFQeEMxWUpXWktMWnZjRTlrclNuQmMtQzE5dl90dGRlc2ZZOW9FQmRFbnE5YkV3TE4wVU5wSl9SalJQa2VRN2ZZU0szMW1JaHBWYkloS1RJdVNTdw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-82",
          "rank_by_count": 82,
          "name": "SK하이닉스, 주주환원 35조 더 남았다…매 분기 자사주 매입·소각",
          "easy": "",
          "quote": "SK하이닉스, 주주환원 35조 더 남았다…매 분기 자사주 매입·소각",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 90,
              "title": "SK하이닉스, 주주환원 35조 더 남았다…매 분기 자사주 매입·소각 - 뉴스핌",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE5Zd2pzQmxjVU5aRy1zSG1sNU5HbE5acXpQRl9OMkc1ZDBrYWh1dkZEQ1FkT2t0NEdLTF9UdWhEbDNxMnhVT3Y0bUUtRDdjN0JGNG1MTTh2WXpJR0xV?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-83",
          "rank_by_count": 83,
          "name": "\"SK하이닉스 Y1 발주 시작…반도체 소부장 '새 성장 사이클'\"-한화",
          "easy": "",
          "quote": "\"SK하이닉스 Y1 발주 시작…반도체 소부장 '새 성장 사이클'\"-한화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 91,
              "title": "\"SK하이닉스 Y1 발주 시작…반도체 소부장 '새 성장 사이클'\"-한화 - 한국경제",
              "source_name": "'SK하이닉스'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5iR3BVR1dlRjFFeVo4ci04TC1QTEpyV0NhSXhKUFpFTF9JUklmLWt5M09iS2F5SzVYZEdhQjNhRXZ5bEVfU0FFQ1h0QXp5dUQxeUJuM2pwdmRSQQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-84",
          "rank_by_count": 84,
          "name": "삼성전자 반도체 공장서 일하다 ‘혈액암 진단’, 37일 만에 사망했다···“화성사업장서만 12명 발병”",
          "easy": "",
          "quote": "삼성전자 반도체 공장서 일하다 ‘혈액암 진단’, 37일 만에 사망했다···“화성사업장서만 12명 발병”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 92,
              "title": "삼성전자 반도체 공장서 일하다 ‘혈액암 진단’, 37일 만에 사망했다···“화성사업장서만 12명 발병” - 경향신문",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1uYk9DRkpzeVhndDN4VGQ2ekdILVRJRGVyM0JKX0hNZ3kwSFNjcFdtUXhBTGNrdV9GVk15YjFoY0xZY3p1TU54WVFJcWlORExzZ2F2dGVlYVBvd9IBX0FVX3lxTE5BTDl1MG9kbHVYY2o1eXl0Qm83c3V2VV85ZWVzaUdwZjlkSU9XTjFtMnd4eFlOdDlIRkNHNTN6dGdSNS1Ea1I4NVBnTmJZZWk4RmpKMmtkcC1FcW9mWFhJ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-85",
          "rank_by_count": 85,
          "name": "\"자꾸 특정 라인에서 죽어 나가\" 삼성 반도체 닦다가 또‥",
          "easy": "",
          "quote": "\"자꾸 특정 라인에서 죽어 나가\" 삼성 반도체 닦다가 또‥",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 93,
              "title": "\"자꾸 특정 라인에서 죽어 나가\" 삼성 반도체 닦다가 또‥ - MBC 뉴스",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTFBIbmRZZTRzNldIT2FnaTAyUy1uRHhmbWl6S2YwQlhvbkhRNldUaVh4R0pUVjRvSzNSWXU0R0NFTTR4dU5tVUI2LVdpSGdZR2VOaDdyRm9HOXZORUozeG91RUg4VEcwa0ZQYkRBdUpyQy1rYlY4R2ZBa9IBeEFVX3lxTE5WOV9mS3JWSEtJem40Q0Y5MUc3eTZUNEdJUmNvaFAxc3UxT0wyWVFjT1ZEODlaRHo5Q1QzRTlta3dnd3U5eHJHMXZnc1RUTVpyOWVObktIalJIeDJxZGJNdjlrVE9zZHlZSENWYmg4TmlFZzZzY0lTbg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-86",
          "rank_by_count": 86,
          "name": "삼성전자, 내년 초 CXL 3.2 샘플 공급...하반기 양산",
          "easy": "",
          "quote": "삼성전자, 내년 초 CXL 3.2 샘플 공급...하반기 양산",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 94,
              "title": "삼성전자, 내년 초 CXL 3.2 샘플 공급...하반기 양산 - 디일렉",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTFA0cFdHZFZxVGZISzdzWnpRSDF1RWFLNnRKZkFld0lWSFFsM3ctV2JQR1Rya3BtVVdObUU4NHlQa0ZKeTNObWtILWNpQV9iQ0lJLTVPTWx1VWMyN2dac2lhb1RaWVFwUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-87",
          "rank_by_count": 87,
          "name": "메모리반도체 \"2027년 중반부터 가격 하락\" 전망 나와, 삼성전자 SK하이닉스 공급 과잉 리스크",
          "easy": "",
          "quote": "메모리반도체 \"2027년 중반부터 가격 하락\" 전망 나와, 삼성전자 SK하이닉스 공급 과잉 리스크",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 95,
              "title": "메모리반도체 \"2027년 중반부터 가격 하락\" 전망 나와, 삼성전자 SK하이닉스 공급 과잉 리스크 - 비즈니스포스트",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE13eTAzMVhwS1E0M1ktMXdwQW8xVWsyaWRlWER1aUlXQlN4VnRreURfWjFfME5YWW1GM012YnpnLTJvXzFYc1c5djBMWFFYLUM1UXBSZ0lyR2ZtVUxGM2dYdlJlcmd2b3lUY04wV0JIdTVjV1U?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-88",
          "rank_by_count": 88,
          "name": "\"형 죽음에 사과 한 번 없어\" 삼성 반도체 하청노동자 동생의 질문",
          "easy": "",
          "quote": "\"형 죽음에 사과 한 번 없어\" 삼성 반도체 하청노동자 동생의 질문",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 96,
              "title": "\"형 죽음에 사과 한 번 없어\" 삼성 반도체 하청노동자 동생의 질문 - OhmyNews",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTE05YnFXdGxUNGlQSHJScWNrRjNKdUt1OUNZOVJwOE1sUVRNZm1iSmMzMXR3R1hvUllmNEhRaEJ5d0NqTTAtUzBFeV9EaGsyQU5ZZHI1Mm9hdnJ1cmFmYjNneU5lUk03bVBvbXNIRUN2M0hvNjZmRzB3?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-89",
          "rank_by_count": 89,
          "name": "삼성전자 반도체 하청노동자 사망... 반올림 \"혈액암 사망 반복, 진상규명해야\"",
          "easy": "",
          "quote": "삼성전자 반도체 하청노동자 사망... 반올림 \"혈액암 사망 반복, 진상규명해야\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 97,
              "title": "삼성전자 반도체 하청노동자 사망... 반올림 \"혈액암 사망 반복, 진상규명해야\" - 한국일보",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBnZ01sMnlFWm10dERjdDgwS21jUEdxQ0JRWWxfTmotZnFiQXhfSTNDWW5hc3JsWXNBV2c1V3pIQ2tieU9UV3poT3k2Mm5taDBodG5FYXVXa3RZN0QyR3hnajUwMjREQmh6aHBuVEhn?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-90",
          "rank_by_count": 90,
          "name": "TSMC, 삼성 반도체 美거점 텍사스에 공장 추진",
          "easy": "",
          "quote": "TSMC, 삼성 반도체 美거점 텍사스에 공장 추진",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 98,
              "title": "TSMC, 삼성 반도체 美거점 텍사스에 공장 추진 - 조선일보",
              "source_name": "'삼성전자 반도체'",
              "link": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNTUxuZ2lVUU1pUjVlU1ozcGRVQWEzcXdoM0l3QktJaW5vLTFvSlJ5WFplYmk1T0NjdGRpVWZhSmVNbktydDJoanV6S0tZUGh2cGFDaUNuNjlDNFNFa2VueHFNdG8zOWtYY1lvWFAtdXllekhCMDhQZEsyRFlQSHBCd0tnbw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-91",
          "rank_by_count": 91,
          "name": "AI 투자 안해서 웃었다? 애플, 엔비디아 ‘시총 왕좌’ 뺏었다",
          "easy": "",
          "quote": "AI 투자 안해서 웃었다? 애플, 엔비디아 ‘시총 왕좌’ 뺏었다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 100,
              "title": "AI 투자 안해서 웃었다? 애플, 엔비디아 ‘시총 왕좌’ 뺏었다 - 중앙일보",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1QeDA5UG9XZWJSbEJTWmR0NTdXMncxY0pUc2k3WFplSm0wSzdXdU8tRWJWdVJjb2ZudlNWU080aHhDbG9EdjN3Z01ac2hiY1hzTktVVGRB?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-92",
          "rank_by_count": 92,
          "name": "\"美 대중 AI 규제 강화에 엔비디아 GPU 매물 급증\" |",
          "easy": "",
          "quote": "\"美 대중 AI 규제 강화에 엔비디아 GPU 매물 급증\" |",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 101,
              "title": "\"美 대중 AI 규제 강화에 엔비디아 GPU 매물 급증\" | - 연합인포맥스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5zM3NEcG5Oak5hV0xscEp0SWFmZmR3NkR3bHRaVE05NUVXVUIxQlpfdDZfdGFPLW1GQklTaWpaNFdKbXVSNTVNQUpIZGJVRmYxNm4xR2pTX2h1UE5CTXZ6VFVNaXduOFVrMUp6R2JTaTh1d2M4?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-93",
          "rank_by_count": 93,
          "name": "하루 만에 314조 원 증발…엔비디아 시총 이틀간 ‘롤러코스터’",
          "easy": "",
          "quote": "하루 만에 314조 원 증발…엔비디아 시총 이틀간 ‘롤러코스터’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 102,
              "title": "하루 만에 314조 원 증발…엔비디아 시총 이틀간 ‘롤러코스터’ - JTBC",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE5KalBVd0MyV2Q2LXZ3Nkd5UjV0cVJGNzY1YUdmdjdJQmFvaGIyemRIUUE3MzAtR3lkVkg3UTh3UjlHNXF2ZFRJWURmYXM4TjZxQk8zLQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-94",
          "rank_by_count": 94,
          "name": "S&P, 엔비디아 신용등급 강등 경고…\"90일내 한단계 하향 가능\"(상보)",
          "easy": "",
          "quote": "S&P, 엔비디아 신용등급 강등 경고…\"90일내 한단계 하향 가능\"(상보)",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 103,
              "title": "S&P, 엔비디아 신용등급 강등 경고…\"90일내 한단계 하향 가능\"(상보) - KB Think",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE1TZGo5VHRhb21XS3hLanNocm12YUtzM3J4WHJZZVhvdHlsT29OcVNXb2JyZjRuQ3FuaXIyQkNLaERDYkhqenZ1OXpuallxclZNaXNEeTllc05OLWxFeEtjSm9MOFItcXpEWE5sZVdVYzEzdw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-95",
          "rank_by_count": 95,
          "name": "엔비디아 AI 연산장치, 러시아 무기 4종 탑재 확인…자율 표적 공격 실전 투입",
          "easy": "",
          "quote": "엔비디아 AI 연산장치, 러시아 무기 4종 탑재 확인…자율 표적 공격 실전 투입",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 104,
              "title": "엔비디아 AI 연산장치, 러시아 무기 4종 탑재 확인…자율 표적 공격 실전 투입 - 글로벌이코노믹",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPSDAyVExrYTVsa29zQ21KTUJwemRXMVE0TGkzd0VXU3pkZHVhU0ZZNU9RTlkya2JnS21LeVRDN1NFZE00QmVGd2VYNElsakhadHA5MFNnb3Rhc05Ha1pKVkJ1a1B4c2ROTGZYU1VzU0JDYVQ4Rl9pUGx5NVVXMS12Skl3YUtaNm9w?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-96",
          "rank_by_count": 96,
          "name": "연휴 앞둔 뉴욕증시, AI 매도세 재개에 급락…엔비디아, 8%↓",
          "easy": "",
          "quote": "연휴 앞둔 뉴욕증시, AI 매도세 재개에 급락…엔비디아, 8%↓",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 105,
              "title": "연휴 앞둔 뉴욕증시, AI 매도세 재개에 급락…엔비디아, 8%↓ - 파이낸셜뉴스",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9BOFQ3Q3VILW1DNm94eVRnLVVBcXVBTGVuQWxkS1pMVUhTT1pTcV9hdFlKSkpwb3lJRWRuY0tzcEtKNEladkNHR3ppYXY5WWFNaEF5TkFxSGlhdw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-97",
          "rank_by_count": 97,
          "name": "엔비디아 시간외 6% 급락…美 물가·관세 충격에 AI株 휘청 [월가 업&다운]",
          "easy": "",
          "quote": "엔비디아 시간외 6% 급락…美 물가·관세 충격에 AI株 휘청 [월가 업&다운]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 106,
              "title": "엔비디아 시간외 6% 급락…美 물가·관세 충격에 AI株 휘청 [월가 업&다운] - 한국경제",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBrYjlpdW1tektxdU9CMlNUV0xuUGxFSFdCTjJwMnZrWkhXTXlmVzEwcnJYOEVGMkFnZnJYYVJXUHllU0x3M09oSHRnMnVOcTdaWUNjMEtsTXFTdw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-98",
          "rank_by_count": 98,
          "name": "[미국 특징주] 엔비디아, 시총 2조달러 증발… CEO 복귀에도 악재 첩첩",
          "easy": "",
          "quote": "[미국 특징주] 엔비디아, 시총 2조달러 증발… CEO 복귀에도 악재 첩첩",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 107,
              "title": "[미국 특징주] 엔비디아, 시총 2조달러 증발… CEO 복귀에도 악재 첩첩 - 뉴스핌",
              "source_name": "'엔비디아'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTFBrNldQQ3kzRi1LNHNlNVk1YVFEZXpZQ0lIajFNVzZJbDFaaHdDaC1NLTZsM3NGZE9EM0pFOW4wTmZTel9pVXZzTHEzT2gyR3JjQ2psdzRXZEoyZGwt?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-99",
          "rank_by_count": 99,
          "name": "[뉴스락 특별기획] ESS 늘리는 배터리 3사, 글로벌 점유율은 미미",
          "easy": "",
          "quote": "[뉴스락 특별기획] ESS 늘리는 배터리 3사, 글로벌 점유율은 미미",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 116,
              "title": "[뉴스락 특별기획] ESS 늘리는 배터리 3사, 글로벌 점유율은 미미 - 뉴스락",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBDekFWQUdSbUpmOHhTNTdPc24wakkxOXF3S2ZTQ0JOSE9aVTRPcnUwaFRHTWc0WTBPdjBRSnpHQ1RreGNqTDRNRzJFV3d0b1ZidkdCdFFHcHd5NW9mTjMwVXNYcG5ZS3dwcDd5cg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-100",
          "rank_by_count": 100,
          "name": "전기차 넘어 ESS까지…中 배터리 공습에 영국 '비상'",
          "easy": "",
          "quote": "전기차 넘어 ESS까지…中 배터리 공습에 영국 '비상'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 117,
              "title": "전기차 넘어 ESS까지…中 배터리 공습에 영국 '비상' - 한스경제",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5xSmVWRFh2WEVyYXZiN3hFcU5EeDJ5bXZ5djJKSVVWU0RBQjF1c3BrSFFnNVRVZlBJTkNGQlpEYnNpU0M4M3FMUjR1NWFLRXphM1dVUHlRaXJOLXlMcS15dE5yb0wwNjRBNDRXdUdzSdIBb0FVX3lxTE5xSmVWRFh2WEVyYXZiN3hFcU5EeDJ5bXZ5djJKSVVWU0RBQjF1c3BrSFFnNVRVZlBJTkNGQlpEYnNpU0M4M3FMUjR1NWFLRXphM1dVUHlRaXJOLXlMcS15dE5yb0wwNjRBNDRXdUdzSQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-101",
          "rank_by_count": 101,
          "name": "김동명 LG에너지솔루션 사장, 中 ESS 1위 하이퍼스트롱과 전략협력…美 애리조나 거점도 증설",
          "easy": "",
          "quote": "김동명 LG에너지솔루션 사장, 中 ESS 1위 하이퍼스트롱과 전략협력…美 애리조나 거점도 증설",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 119,
              "title": "김동명 LG에너지솔루션 사장, 中 ESS 1위 하이퍼스트롱과 전략협력…美 애리조나 거점도 증설 - CEO저널",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE9idWd2MnVCTU9OeEhFRmxER2hrMkdicUFWZ3lsbUY4d1pnQUFoQWZWemk3OFR5aHc1V0RtWTNrcUhvbmxIdlREYVF5QkJqenNhZ3JHTkpFejQwcy1ZRDRmTjZ1Ykhod0p3VWhF0gFrQVVfeXFMT2J1Z3YydUJNT054SEVGbERHaGsyR2JxQVZneWxtRjh3WmdBQWhBZlZ6aTc4VHlodzVXRG1ZM2txSG9ubEh2VERhUXlCQmp6c2FnckdOSkV6NDBzLVlENGZONnViSGh3SndVaEU?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-102",
          "rank_by_count": 102,
          "name": "에너지 인허가 개편안 美상원 통과에 태양광·ESS 수혜 가속화 - 머니투데이",
          "easy": "",
          "quote": "에너지 인허가 개편안 美상원 통과에 태양광·ESS 수혜 가속화 - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 120,
              "title": "에너지 인허가 개편안 美상원 통과에 태양광·ESS 수혜 가속화 - 머니투데이 - 머니투데이",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBidk5XSGc1ZDBVQXFBYW5DeTBndUdJNzFVRkgxTjJUQVNhNFN4T1JCRWlzRUhRS1hLbE1QRm1aQ19HT3EtRGxDb2RWc2RuMXB5Zm5PX2VVYy1LSElqUlBmaGU1MDJaVkNaSDQ2UtIBckFVX3lxTFA5VUJpNGU2Y0IzVld1cHM1bXA0RTVxNWRrLWVBOVhWaFlBNExLVHFISl9KVkRiMGJrR0dKVHZTdmcxUHNSaW9FMm5xcnJDOThJYmxhTGdSY0VNSjNUZmx4RGJGSVVvOXRtcERFSzFXd3lhdw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-103",
          "rank_by_count": 103,
          "name": "화웨이, ‘ESS 변압기 대규모 화재 테스트’ 성공… 인접 설비 전이 제로 입증",
          "easy": "",
          "quote": "화웨이, ‘ESS 변압기 대규모 화재 테스트’ 성공… 인접 설비 전이 제로 입증",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 121,
              "title": "화웨이, ‘ESS 변압기 대규모 화재 테스트’ 성공… 인접 설비 전이 제로 입증 - 글로벌이코노믹",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPQURreXZOVnlyM3YtWEhMZHdGRnNwQkRaellTSTRTTXo0SktlYy1LT2ZoOGxtS2RMMDNVVnd0REJ0ZV9DU3c2ek43elRMQkloU29MZUxkODZjaTJadW80QTFsd0d5Y0tLNkIwTlF5ZnBIU3p4MzhRVmN0d2piUTV2aUg2eG93Q2Ru?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-104",
          "rank_by_count": 104,
          "name": "고양시 '공유형 ESS' 실증사업 가동 지연…\"경기도가 한전·정부 설득해야\"",
          "easy": "",
          "quote": "고양시 '공유형 ESS' 실증사업 가동 지연…\"경기도가 한전·정부 설득해야\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 122,
              "title": "고양시 '공유형 ESS' 실증사업 가동 지연…\"경기도가 한전·정부 설득해야\" - https://www.2news.co.kr/",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE02Z0pUWkQyX1hTVHhpU24tNXdnM2d6ZG05NG9EY2oybFdIRzRibVU1YkU1R044a2t0bkV5TUFiMDFOanNJTG1OTVVOdFpLNnZnQm5pWHgxcmItQW02cWZnZVBVUlNEQnI1?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-105",
          "rank_by_count": 105,
          "name": "LG에너지솔루션, AI 데이터센터 ESS 시장 공략⋯매출 4.6배 성장",
          "easy": "",
          "quote": "LG에너지솔루션, AI 데이터센터 ESS 시장 공략⋯매출 4.6배 성장",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 123,
              "title": "LG에너지솔루션, AI 데이터센터 ESS 시장 공략⋯매출 4.6배 성장 - 엠투데이",
              "source_name": "'ESS 에너지저장'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1IdDFTWVpzXy1fTWxCMWdVQlFnWjJ2WUFtbzBuNkI0X1FwNERjM0xXWEY2NkpPVnk4dzhLbmV1TFN6dlJRWTBSdnFqRUxPY0hjUk5HYWVlZUwtTGtLc3cwMkZXS3c2N2NVZEp6eVRDUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-106",
          "rank_by_count": 106,
          "name": "\"헉~\" 소리 나는 영국 가정의 에너지 요금… 내년 1~3월 전기·가스비 26% 인상",
          "easy": "",
          "quote": "\"헉~\" 소리 나는 영국 가정의 에너지 요금… 내년 1~3월 전기·가스비 26% 인상",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 124,
              "title": "\"헉~\" 소리 나는 영국 가정의 에너지 요금… 내년 1~3월 전기·가스비 26% 인상 - 뉴스핌",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTFBlbmZSUEZVdUhCbmc5VHBZLXRBRDZDTTNHZDFJRGg1UnR3LUszVWlyTWVmOXJDX3RuaC1jSlVtdlJpMkFsbW5VSWtYNHViNlhkRlRpNzh4ZjJPQ19o?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-107",
          "rank_by_count": 107,
          "name": "기후장관 \"유럽 탈원전 이후 전기요금 올라…산업경쟁력 고려 필요\" - 머니투데이",
          "easy": "",
          "quote": "기후장관 \"유럽 탈원전 이후 전기요금 올라…산업경쟁력 고려 필요\" - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 125,
              "title": "기후장관 \"유럽 탈원전 이후 전기요금 올라…산업경쟁력 고려 필요\" - 머니투데이 - 머니투데이",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBvQmlVZDlabE90LWM3TDJkRkRnYTlkdlgyaExUQmRPdWRYZmFKSl9BZU8yVi1hZmxkcDJ2QktiM2hSbGxpVGxxNFZPRTdSUHJ0T25kMEg2bkFzY0tSRExyZHRUTDMyLXNlTnh5bWxpVEnSAXBBVV95cUxQb0JpVWQ5WmxPdC1jN0wyZEZEZ2E5ZHZYMmhMVEJkT3VkWGZhSkpfQWVPMlYtYWZsZHAydkJLYjNoUmxsaVRscTRWT0U3UlBydE9uZDBINm5Bc2NLUkRMcmR0VEwzMi1zZU54eW1saVRJ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-108",
          "rank_by_count": 108,
          "name": "'히트펌프 전용 전기요금제' 시간대별 차등요금 검토중",
          "easy": "",
          "quote": "'히트펌프 전용 전기요금제' 시간대별 차등요금 검토중",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 126,
              "title": "'히트펌프 전용 전기요금제' 시간대별 차등요금 검토중 - 뉴스;트리",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE5xc3RBZWIyY3RKaHc0UXdUMHk3aFVsd0NIWkRodW5NdWJkX1dwVW5ZWTVhSzROamJjejlnN2M4WXlkcC14a2VCbHNkdllublFJYXdvRWRjX2lQai1h?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-109",
          "rank_by_count": 109,
          "name": "[뉴스락 특별기획] 전기요금은 깎고 전력망은 늘린다…한전의 돌파구는",
          "easy": "",
          "quote": "[뉴스락 특별기획] 전기요금은 깎고 전력망은 늘린다…한전의 돌파구는",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 127,
              "title": "[뉴스락 특별기획] 전기요금은 깎고 전력망은 늘린다…한전의 돌파구는 - 뉴스락",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE94YlVfNXBQbFhvX3VKOVVmWVU3bVRoZmpLcldQelpOVWhzWGNsUHk2UlRRTFpERzRRRktTU0JfOTdPbmdDTW1ZbUdlSE5WbmFvNjBPc0xDVnBRN25UVjhCdzlZaHVfaXdxWmc4dg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-110",
          "rank_by_count": 110,
          "name": "농어업특위 수산업분과, 사업승계 활성화 방안 의결",
          "easy": "",
          "quote": "농어업특위 수산업분과, 사업승계 활성화 방안 의결",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 128,
              "title": "농어업특위 수산업분과, 사업승계 활성화 방안 의결 - 한국영농신문",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE1nZHV3X2F0MWU1NVZHeXdndVREVnpXNVc0TVBqRXhfejdsOVRwUjJxMV9NQ0ROczFtc1lqUVdMLVpaSjl3UnR6Yl9yeXQ4U3hVbDh2Q05XQ2hTV2FLZTY3MmR0ZmdNRkMwTTlncF9n?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-111",
          "rank_by_count": 111,
          "name": "한전, AI·전력데이터로 소상공인 전기요금 절감 지원",
          "easy": "",
          "quote": "한전, AI·전력데이터로 소상공인 전기요금 절감 지원",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 129,
              "title": "한전, AI·전력데이터로 소상공인 전기요금 절감 지원 - 남도일보",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBINHNDVEZxWlNzbDIxNnVZcld5NlNKTkJRaU1YZWRlTTJncXlCYk0zdmMzVkNHSEFsclU2a0FScENIZk11SVZyTmY1aUhLRHZOQTJ0UGJSZVhsSkNIbS1UNTBTQ05LYVI5d0NXQi0yeUHSAXBBVV95cUxQSDRzQ1RGcVpTc2wyMTZ1WXJXeTZTSk5CUWlNWGVkZU0yZ3F5QmJNM3ZjM1ZDR0hBbHJVNmtBUnBDSGZNdUlWck5mNWlIS0R2TkEydFBiUmVYbEpDSG0tVDUwU0NOS2FSOXdDV0ItMnlB?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-112",
          "rank_by_count": 112,
          "name": "베트남, 가정용에도 ‘시간대별 전기요금’ 적용 ‘초읽기’…개정 전력법",
          "easy": "",
          "quote": "베트남, 가정용에도 ‘시간대별 전기요금’ 적용 ‘초읽기’…개정 전력법",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 130,
              "title": "베트남, 가정용에도 ‘시간대별 전기요금’ 적용 ‘초읽기’…개정 전력법 - 인사이드비나",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBFQ2d6Y1Z6OVM2NldERVoyY19aOGdPVHgxeTYtR2IzR2FpMko5bVlaLTFPcTlKQkZ4Qkl1THZxS1pqV2VuYnB1bXdXMVE3YlFGSVJ1VlNXdUkwaDFhcE5qcFFZRldmTERjNl8xTA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-113",
          "rank_by_count": 113,
          "name": "스마트정류장 좋지만 운영비·부지확보 부담",
          "easy": "",
          "quote": "스마트정류장 좋지만 운영비·부지확보 부담",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 131,
              "title": "스마트정류장 좋지만 운영비·부지확보 부담 - 울산일보",
              "source_name": "'전기요금'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBVVGpxT3ZCRlNqY2w2Nlgxdy00c1kyeUtTMWRDZFpRTTBGS2Y4R3gzeENtU1l6aTJYeGNsVFlMM1dSZEtMbHZjYzdWa29PMzlrWWlWejRodVdaZlpROGFsOThtNk1mVVZpV2FQQ3VB?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-114",
          "rank_by_count": 114,
          "name": "스페인은 데이터센터 전력 80% 재생에너지로…한국은?",
          "easy": "",
          "quote": "스페인은 데이터센터 전력 80% 재생에너지로…한국은?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 132,
              "title": "스페인은 데이터센터 전력 80% 재생에너지로…한국은? - 한스경제",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE1nRE8xWWdBczZiTlVWMVZVMV92WEY4WnVQa3loeHVNbTR3QzVRX20wYkIyZVFJUjhLWFNRZlBmX25sLUZFNm91TUFIQmZZUkxoSGxvdXBQMWc0VTdaVU94bGZ5M1g4N1VLeFgw0gFvQVVfeXFMUGVaa2NNVmZTaE5GdUdxeEpVbWV5ZEV2bFNHS09vNWhsQW52X3VKWjgyNFI1X0xxTkNvUm1sS3htRHNnN3BzMWQyMWtBWmF1cHB3cloySlZEQndGcFI2UG5qLVZWNkMzb2dPUF9WUWNz?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-115",
          "rank_by_count": 115,
          "name": "AI 데이터센터가 만드는 새로운 기회",
          "easy": "",
          "quote": "AI 데이터센터가 만드는 새로운 기회",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 133,
              "title": "AI 데이터센터가 만드는 새로운 기회 - SK텔레콤 뉴스룸",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiSEFVX3lxTE9FQmlCU0hENEhHUjN4cFE4and6d2s3OEgzQ3dDekx3cFBCZDhxSHhJR3ZpVkI1dmpjbHl5czl4bmp5SHJ1Y0FlLQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-116",
          "rank_by_count": 116,
          "name": "美 데이터센터, 알루미늄 산업에 필요한 전력 잠식…제련소→데이터센터 전환 확산",
          "easy": "",
          "quote": "美 데이터센터, 알루미늄 산업에 필요한 전력 잠식…제련소→데이터센터 전환 확산",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 134,
              "title": "美 데이터센터, 알루미늄 산업에 필요한 전력 잠식…제련소→데이터센터 전환 확산 - 더구루",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE02UVlUMmlXbFRPYkNueFpuVjRjbndPclJtM2ZGM0FfQ3FBdzB5dkR0NFFBaHgtSXZIVjYyUlU0WG1tTVAyZVhOV0tJUmJGTThuT1RyVENZWk8wS3A2NEpqNHdmYw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-117",
          "rank_by_count": 117,
          "name": "미국 데이터센터 덮친 파도가 한국에 상륙한다면?",
          "easy": "",
          "quote": "미국 데이터센터 덮친 파도가 한국에 상륙한다면?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 135,
              "title": "미국 데이터센터 덮친 파도가 한국에 상륙한다면? - 시사IN",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1mNE90TnlRcjcwaVBmeFRxWWNydU05QlRFSFF0QjVxUlpKVHZ3MGhoakNpR09iRHNDVWx6TTUxM2FsVzQ0czBlU3o5V3pta05lakNvQ0ZvcmhxZVl6N1o2MHdoWE5Gbm8yVUE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-118",
          "rank_by_count": 118,
          "name": "\"AI시대 승부처는 데이터센터...한국 AIDC 육성 서둘러야\"",
          "easy": "",
          "quote": "\"AI시대 승부처는 데이터센터...한국 AIDC 육성 서둘러야\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 136,
              "title": "\"AI시대 승부처는 데이터센터...한국 AIDC 육성 서둘러야\" - 지디넷코리아",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBCa2F4cGZzMTQ4Tnl2MjlJWG83UEtNb09vWWJZckxEUm1KUG5Gdk5HRUJEYnVDWF9CWVMtYUFTQ3FJNGFTckE3YzJrekowcDU2WjNWc3FB?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-119",
          "rank_by_count": 119,
          "name": "[이충재의 에너지 프리즘] 미국 중간선거로 본 데이터센터 프로젝트 추진 전략의 변화",
          "easy": "",
          "quote": "[이충재의 에너지 프리즘] 미국 중간선거로 본 데이터센터 프로젝트 추진 전략의 변화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 137,
              "title": "[이충재의 에너지 프리즘] 미국 중간선거로 본 데이터센터 프로젝트 추진 전략의 변화 - ASK Inno",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE9DTUprSlA4WkR5WVZfSmlVMWxueEFSSUx1dHBLdFlia0U2a2pnWVNiVF8tM3poTERNWXVYZmxhUmdfLWFXSkw0ZWVzSQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-120",
          "rank_by_count": 120,
          "name": "[G2VP, AI 데이터센터 전력난에 '태양광+장기 저장' 베팅…\"오프그리드가 답\"] G2VP는 데이터센터 투자액이 10년 말까지 4조 달러를 넘을 것으로 추산한다. 차기 물결이 형성되면서 이 회사는 데이터센터 전력 공급의 두 가지 경로에 주목",
          "easy": "",
          "quote": "[G2VP, AI 데이터센터 전력난에 '태양광+장기 저장' 베팅…\"오프그리드가 답\"] G2VP는 데이터센터 투자액이 10년 말까지 4조 달러를 넘을 것으로 추산한다. 차기 물결이 형성되면서 이 회사는 데이터센터 전력 공급의 두 가지 경로에 주목",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 138,
              "title": "[G2VP, AI 데이터센터 전력난에 '태양광+장기 저장' 베팅…\"오프그리드가 답\"] G2VP는 데이터센터 투자액이 10년 말까지 4조 달러를 넘을 것으로 추산한다. 차기 물결이 형성되면서 이 회사는 데이터센터 전력 공급의 두 가지 경로에 주목 - AI넷",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiQEFVX3lxTFBualhDWVo4RzR0cGpRZWoyZGpvWW1jS25jZ0NsU01abElWNFNhQ2dOZDVXVnl2Vm50N2s1S2F5Rl8?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-121",
          "rank_by_count": 121,
          "name": "LS그룹, 전력 인프라 경쟁력 강화…AI 데이터센터 시장 공략",
          "easy": "",
          "quote": "LS그룹, 전력 인프라 경쟁력 강화…AI 데이터센터 시장 공략",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 139,
              "title": "LS그룹, 전력 인프라 경쟁력 강화…AI 데이터센터 시장 공략 - 더밸류뉴스",
              "source_name": "'데이터센터 전력'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE1MUzU1V3hwU2p3YkFQRF9LNW9uQ2FzU21PcWNzM1g4SHltbUdvYmdvOVRnQVRqaXhyZ2RRcG90VkE4UkxFcTZTSkVEZDhBRzY1bmRnMA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-122",
          "rank_by_count": 122,
          "name": "일본, 전력가격 급등에 LNG 현물 구매 확대 전망…아시아 수급 불안 가중",
          "easy": "",
          "quote": "일본, 전력가격 급등에 LNG 현물 구매 확대 전망…아시아 수급 불안 가중",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 140,
              "title": "일본, 전력가격 급등에 LNG 현물 구매 확대 전망…아시아 수급 불안 가중 - 에너지데일리",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE9sbEZ6Wm9hMElJQllRLVhQYXNheVg3SjNlRXBTTktHNkd5RHFlMUVBVk5obW1ST1oxSHVmMVpHWWdpM3U0YlUxdm5ZTWZtcjRJM0E3eXdIcHpUUXlTQ1pnQnZjVmg0TXVUOW1DYWFvVnZEZw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-123",
          "rank_by_count": 123,
          "name": "LNG값 급등에 깊어진 정부 고민…전력수급·미세먼지 저감 딜레마",
          "easy": "",
          "quote": "LNG값 급등에 깊어진 정부 고민…전력수급·미세먼지 저감 딜레마",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 141,
              "title": "LNG값 급등에 깊어진 정부 고민…전력수급·미세먼지 저감 딜레마 - 전기신문",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE1XelhzaDctT05EOGdEQkZFTXZEamIyc3pzcl95R2hZRWEzZkY2SjBMWGxoNHNBem84cEFIbDEzeng0UmZRZ1V2NWs4UnZMY0d5V3k3S3lxVlpSencwRkhSVVp4LWFfTWtmSktJNNIBcEFVX3lxTE4yV1pXYy1VSkxNUlkwV1l3bkx3Q0xORXd3T2VnQUk3Y3JzRXItd1dEM0RFT0szTHVPeFhTeXhCZEFlckh0bC1lSjlTVUVaRThZSkdPX25Dc3o2RzVKM2Y1bm00WG9OZXQ0cWdYOS1XbTE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-124",
          "rank_by_count": 124,
          "name": "호주, 국내 가스 공급 확보 위해 수출 규제 강화 추진",
          "easy": "",
          "quote": "호주, 국내 가스 공급 확보 위해 수출 규제 강화 추진",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 142,
              "title": "호주, 국내 가스 공급 확보 위해 수출 규제 강화 추진 - 쉬핑뉴스넷",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1EM056YUVRTnd2UmxDdFBoY3d3VkhGODVnb2c4Uk5uekI3S0RIYkxmRmJ1clN6bjE0dkdyQzJrU2pKUmRZaC05bGcwSGd0NzJXbm1iTVYyckFkQl9aYl84YU1MNWNBNkRLcUY1WGhuSWdDYUk?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-125",
          "rank_by_count": 125,
          "name": "한국가스공사 조직 개편에 경쟁력 확보 기대감, 홍의락 LNG 부담 낮출 '트레이딩' 주목",
          "easy": "",
          "quote": "한국가스공사 조직 개편에 경쟁력 확보 기대감, 홍의락 LNG 부담 낮출 '트레이딩' 주목",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 143,
              "title": "한국가스공사 조직 개편에 경쟁력 확보 기대감, 홍의락 LNG 부담 낮출 '트레이딩' 주목 - 비즈니스포스트",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTFBBQ1NNX1dZRnd5NXBRWnZ1TWd5OUZDRlQ0ek5NMm5jT1V6c2VzX3lteTYzLXZra2pKMUZuMk9QQkU3T0NFcWxTbm5MbUlGZllGRjRXa2ZlakJvc2NQS0R1dXBfMVRaMURMQnc5ZGhXbmRsVUU?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-126",
          "rank_by_count": 126,
          "name": "대미투자 후보 알래스카 LNG…공급과잉 전망에 사업성 악화 우려",
          "easy": "",
          "quote": "대미투자 후보 알래스카 LNG…공급과잉 전망에 사업성 악화 우려",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 144,
              "title": "대미투자 후보 알래스카 LNG…공급과잉 전망에 사업성 악화 우려 - 뉴스1",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiVEFVX3lxTFBwUVlScUJyZ0ZiRl9DQ0RmdkdUNm1CekczQ3Vxb1NnRDFIMnFoSjlWLTlBWHgycHBGWWF6aGd2OWlDSjFFcU1fZmJOR1Jfd01CdEhndw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-127",
          "rank_by_count": 127,
          "name": "유럽 천연가스 가격 8.6% 급등… 한파·LNG 공급 불안 겹쳐",
          "easy": "",
          "quote": "유럽 천연가스 가격 8.6% 급등… 한파·LNG 공급 불안 겹쳐",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 145,
              "title": "유럽 천연가스 가격 8.6% 급등… 한파·LNG 공급 불안 겹쳐 - 에너지플랫폼뉴스",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBGY3N5N0VuSEtnSVhqNnZKSEl2OWV2a18yTnMyQVVvZXRiV1k5UkNMa1R6UzNZQ2VOaVRJV1pJal9uODlzTHFTWTRYaEtoLU9WWGx2alhwX1VnazU5dW82MzEtQ1ptTWtGeFR0QdIBcEFVX3lxTE92MWh1Sjd4SmlWMXVZeHpXZ3Rrd3ZCMXZlSlJjQk9GeTFXdGxrMWpjOVotaEx6emlqcXNRUU5nS1hoYUhmbjlQdXhIb1poUG5kS3VSTy12bW1IQzFlQVVfUTlVLUNOOVpKcWExZ3RtUWs?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-128",
          "rank_by_count": 128,
          "name": "북미 LNG 세계시장 점유율 3분의 1…전체 거래량은 감소",
          "easy": "",
          "quote": "북미 LNG 세계시장 점유율 3분의 1…전체 거래량은 감소",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 146,
              "title": "북미 LNG 세계시장 점유율 3분의 1…전체 거래량은 감소 - 글로벌이코노믹",
              "source_name": "'LNG 가격'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQUFlEaUFTQ0pCSVVhRFE1V0lRZk56YjJGLVYxRGp0eExwWlRyWnFra0V4b1dpN2hNak1CVE92MmFvSTBoTVZsSTNEdnQ0S0NPc3FlTV9VTUZVT3FKNXk3ckM3M2xpeS1rTk56RDEyTTNwT3ZIRE1QTEpCbFQydGtUN1ZmRWU5a2Fi?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-129",
          "rank_by_count": 129,
          "name": "한국 15% 지켰다…끝나지 않은 관세 전쟁",
          "easy": "",
          "quote": "한국 15% 지켰다…끝나지 않은 관세 전쟁",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 148,
              "title": "한국 15% 지켰다…끝나지 않은 관세 전쟁 - OBC 뉴스",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9yNlZjSGZ4Vnl6RGlCcm5hd01iN3hEMUl0NmptRjdFQ3RQbkd5T1FDY05DLUMwVmtvakFIQUItLThISVpCdGw3WTRvbjlIVDcwYXAxcklRaTdqTjN1V0hxbkVSMDlYcklqUkE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-130",
          "rank_by_count": 130,
          "name": "트럼프 과잉 생산 관세 임박 … K반도체, 美 현지 생산 압박 커지나",
          "easy": "",
          "quote": "트럼프 과잉 생산 관세 임박 … K반도체, 美 현지 생산 압박 커지나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 149,
              "title": "트럼프 과잉 생산 관세 임박 … K반도체, 美 현지 생산 압박 커지나 - 뉴데일리 경제",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBrRlFFcHdRWXQydTN6M1NicHVFbUYwYVNIdFc4NzRKZWZVeUY5aTNCZ2N3cV9mcDBVR0dERlVBX1YzNkQzcXM4ak5meEdkejM5dUdabjEzaXo3dDZJdVN6TmtBRDRBQWMxWmtMV2IyUjlCZEJEajBDdGFTc9IBgAFBVV95cUxNaEpyUU1icEhuM2IwLXNjLU5VR3RhV3pWUjZ2TW1EeFVUQU15OHlTRWVGbHFBbVRfbmZsZGY4cDVMWW1YdW1oTUZJeFRORnVTN2NVZVJvRUV3dlJ4aXVWT3lTX05fZ1RWTnV0aUlQTE5yaXhyaGVxN09RV0NjY25UZQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-131",
          "rank_by_count": 131,
          "name": "iM증권 \"美 반도체 급락·관세 우려…코스피, 하방압력 불가피\" |",
          "easy": "",
          "quote": "iM증권 \"美 반도체 급락·관세 우려…코스피, 하방압력 불가피\" |",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 150,
              "title": "iM증권 \"美 반도체 급락·관세 우려…코스피, 하방압력 불가피\" | - 연합인포맥스",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5MeFZCaE5tY3dYWmRPUm1GY0ZrbVlMQThJeWRxMnh3SFV5MWxKOUNxS3gxMEFTQXd6NzVid2JmdGNFZ3NqSlZpZUl0TE8wWU9iVUx3Ynhzb3RjWWpyM04wM1RySTg4eVVQMy1JaWt2VWZJNkpz?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-132",
          "rank_by_count": 132,
          "name": "[시황발자국] 11월 25일(수) 장전 시황 : 젠슨 황 복귀 랠리 하루 만에 AI 차익실현…필라델피아 반도체 -7.88% 하락 속 미국 '과잉생산 관세' 발표 임박 대응 전략",
          "easy": "",
          "quote": "[시황발자국] 11월 25일(수) 장전 시황 : 젠슨 황 복귀 랠리 하루 만에 AI 차익실현…필라델피아 반도체 -7.88% 하락 속 미국 '과잉생산 관세' 발표 임박 대응 전략",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 151,
              "title": "[시황발자국] 11월 25일(수) 장전 시황 : 젠슨 황 복귀 랠리 하루 만에 AI 차익실현…필라델피아 반도체 -7.88% 하락 속 미국 '과잉생산 관세' 발표 임박 대응 전략 - 네이버 프리미엄콘텐츠",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQVHFlRkhJTHJWNWFEeXBSemplN2c2RnVVMmxGU3JzRzJRVTM3d3REWjVZa3RpWVdMR0JFcGRuWmZtaFMxcFNZc3VyTlA3SmtXSUpKR2V6clNPbWpWTHhpdzI3d1NfMkhrTUhFa2Y2N0FVekFNZWJOc0pGNnJLOFMzZHpzWEwwampz?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-133",
          "rank_by_count": 133,
          "name": "美 통상 압박 다시 고조…한국 반도체·자동차 추가 관세 위기",
          "easy": "",
          "quote": "美 통상 압박 다시 고조…한국 반도체·자동차 추가 관세 위기",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 152,
              "title": "美 통상 압박 다시 고조…한국 반도체·자동차 추가 관세 위기 - 제민일보",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTFBfYmFucjU1RlhyX2pPV0ZCWm9TbDhPeTlOMWRUUk5sRnViVklabnZ6cFJwN1pwcGpjVG9CaC1hSUhtNF9VUmhvbDF2OExpU1VqcFQxUGM0UXJoaDF2M2ZlZUc0M1hYUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-134",
          "rank_by_count": 134,
          "name": "[KDF 시황] 코스피, 반등 하루 만에 4700선 아래로…반도체 급락에 관세 부담까지",
          "easy": "",
          "quote": "[KDF 시황] 코스피, 반등 하루 만에 4700선 아래로…반도체 급락에 관세 부담까지",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 153,
              "title": "[KDF 시황] 코스피, 반등 하루 만에 4700선 아래로…반도체 급락에 관세 부담까지 - 한국면세뉴스",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBVM2YtWUtPbHNzZXFPOTlMS2NTc1V5REtsS2ViTmxhaXFfOTNHdVN6T0lRakZqWGZ4aml0NUdxVGJSNEl6b2MtazFvMDVXSjR2RWZhUXpoSnl2TlJPMmtkVjVZeXpidXVEYXc?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-135",
          "rank_by_count": 135,
          "name": "젠슨 황 랠리 하루 만에 끝났나…메모리 과잉·관세 우려에 냉각",
          "easy": "",
          "quote": "젠슨 황 랠리 하루 만에 끝났나…메모리 과잉·관세 우려에 냉각",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 154,
              "title": "젠슨 황 랠리 하루 만에 끝났나…메모리 과잉·관세 우려에 냉각 - 스페셜타임스",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE93ei1lZ2RaTzZSNFpFdlMzYUdGS3NBS3E4WlZvWWxTVWNoNFVUYVloaVg1UEd4WFAwRkczOFZtbDM4d1AxSlZ0d25rTWo0M0kxZUx2M2dDWVZGNVpVXzh6ejVOay1kQnotSmV6QXREQ2pRaDg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-136",
          "rank_by_count": 136,
          "name": "반도체주 약세에 美 관세 우려까지…日증시 하락 출발",
          "easy": "",
          "quote": "반도체주 약세에 美 관세 우려까지…日증시 하락 출발",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 155,
              "title": "반도체주 약세에 美 관세 우려까지…日증시 하락 출발 - 뉴시스",
              "source_name": "'미국 관세 반도체'",
              "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTE9FOVFLN3FUSHB5RmI5T2ZxN2RJUWotaHlhZnZMUTFWajZtN0VPZU1zbTdXTFVkOTRYSGp3TEtERWUxOUFERFBqUnYtX2JHa2VjWlUwcXBJSzRUQ1lYWXVaaGUtZ3NPNHMyQTVzTTEwVVZqUVJ0Y2JoQ9IBeEFVX3lxTE9FOVFLN3FUSHB5RmI5T2ZxN2RJUWotaHlhZnZMUTFWajZtN0VPZU1zbTdXTFVkOTRYSGp3TEtERWUxOUFERFBqUnYtX2JHa2VjWlUwcXBJSzRUQ1lYWXVaaGUtZ3NPNHMyQTVzTTEwVVZqUVJ0Y2JoQw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-137",
          "rank_by_count": 137,
          "name": "BNP파리바 \"연준, 12월부터 세 차례 연속 금리 인상 전망\"",
          "easy": "",
          "quote": "BNP파리바 \"연준, 12월부터 세 차례 연속 금리 인상 전망\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 156,
              "title": "BNP파리바 \"연준, 12월부터 세 차례 연속 금리 인상 전망\" - 연합인포맥스",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE84a3JlM2NXd2ludmg5dmlNYWJ5cnA2V2ZwTWE3QzNKakp4NTR3QnZRUXR1Wjg3SHVnVkxjdHlrOGptcVVzMUM5MUdaT1gzclFUM211U2dfX0hVRWV1S2RyVlZ1ZFR0dFFIQTNYdTA5Rl8?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-138",
          "rank_by_count": 138,
          "name": "美10월 PCE 물가 3.8%↑…12월 금리인상 전망 굳어져(종합)",
          "easy": "",
          "quote": "美10월 PCE 물가 3.8%↑…12월 금리인상 전망 굳어져(종합)",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 158,
              "title": "美10월 PCE 물가 3.8%↑…12월 금리인상 전망 굳어져(종합) - 연합뉴스",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5hUGNxT202TEF5MjVJbWNYRkRvNUVPbDJkMVZsa1NvTm85eVp3NTIxRTFqSXQ3ckYtVkNVbHZudWxfZUZ0aVBXUTVzNHJXRTBlZVJpNzhRX2NpSXRJY08wbNIBYEFVX3lxTE5hUGNxT202TEF5MjVJbWNYRkRvNUVPbDJkMVZsa1NvTm85eVp3NTIxRTFqSXQ3ckYtVkNVbHZudWxfZUZ0aVBXUTVzNHJXRTBlZVJpNzhRX2NpSXRJY08wbA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-139",
          "rank_by_count": 139,
          "name": "비트코인, ETF 자금 유출·미 연준 금리 인상 전망에 2022년 이후 최악의 월간 낙폭 향해",
          "easy": "",
          "quote": "비트코인, ETF 자금 유출·미 연준 금리 인상 전망에 2022년 이후 최악의 월간 낙폭 향해",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 160,
              "title": "비트코인, ETF 자금 유출·미 연준 금리 인상 전망에 2022년 이후 최악의 월간 낙폭 향해 - Investing.com 한국어",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1GdzJoWWM2aVplek5hektfSXFEczZyZHhvSElNQkMzb2RBR2NKNTBLNFBCbURnT3V6T0VTQWxBaFZUVFBPT1E1UVNPLXIzVjR5LU1aS2VxRmhhelVpLUtUZ1R6VG1nODNxUTJ6aEtsdDVYSXM?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-140",
          "rank_by_count": 140,
          "name": "[GAM] 월가 트레이더들, 내년 말 연준 금리인하 가능성에 베팅",
          "easy": "",
          "quote": "[GAM] 월가 트레이더들, 내년 말 연준 금리인하 가능성에 베팅",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 162,
              "title": "[GAM] 월가 트레이더들, 내년 말 연준 금리인하 가능성에 베팅 - 뉴스핌",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE55aDRNcFdWM3YtSUo5WlVlVW5iQnZuSmxrV0RSWTZabkhQcDVoNWFsd2NaMlJEdXNpX3dDc0lPN0NZbFA4YmhwdnRDaGR5djd5aDhmOFhpa29lMWN6?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-141",
          "rank_by_count": 141,
          "name": "물가·관세 겹악재에 나스닥 선물 3%↓…국채로 '피난'(종합)",
          "easy": "",
          "quote": "물가·관세 겹악재에 나스닥 선물 3%↓…국채로 '피난'(종합)",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 163,
              "title": "물가·관세 겹악재에 나스닥 선물 3%↓…국채로 '피난'(종합) - 마켓인",
              "source_name": "'연준 금리'",
              "link": "https://news.google.com/rss/articles/CBMic0FVX3lxTE5sVThmcm9QTzdjUHhVY2JBYW5TWUt1S3k5SUtyRUFvODBBdWYxVjkyN0VnR2dPVDFMd21ZTS1zUUl5X1FOVlI5cFd5NG1BZUlyaWxETEktUVNLenNjQTJNdnpBM1Vja1IwekpXZ1hVemdlUms?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-142",
          "rank_by_count": 142,
          "name": "한은 오늘(26일) 기준 금리 결정…연 3.25%로 올릴까",
          "easy": "",
          "quote": "한은 오늘(26일) 기준 금리 결정…연 3.25%로 올릴까",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 164,
              "title": "한은 오늘(26일) 기준 금리 결정…연 3.25%로 올릴까 - KBS 뉴스",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1sRktacjdlNGEwemNLQWE1TXlEcEZqRHBqUDY2TmxlVG9jTF9OUjlUbXZmaXdXdzQ1Wjh4dGdYNHdoaHduaVZDdWhfLUpfb0Z4cmtLYXBmalR0eDg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-143",
          "rank_by_count": 143,
          "name": "올해 마지막 금통위…한은, 금리 인상으로 물가 잡나",
          "easy": "",
          "quote": "올해 마지막 금통위…한은, 금리 인상으로 물가 잡나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 165,
              "title": "올해 마지막 금통위…한은, 금리 인상으로 물가 잡나 - 연합뉴스TV",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE93SnZ3bHlPSzRKLU9sQTRhN3c4Ym51eWdaN2RrYjlwQklJcnp3UEdZNUtUbUxuXzNsTVVvaGczd3JkVDI3OEljWkt4MnNtMVQ0TXlUaFlMejdJZEJmNTM2OHZacWRjaFk?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-144",
          "rank_by_count": 144,
          "name": "이코노미스트 23명 중 21명 “한국은행 기준금리 인상”｜Global Money Club",
          "easy": "",
          "quote": "이코노미스트 23명 중 21명 “한국은행 기준금리 인상”｜Global Money Club",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 166,
              "title": "이코노미스트 23명 중 21명 “한국은행 기준금리 인상”｜Global Money Club - 중앙일보",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9QOElwUzIyd1hpejMzUF9rcDRyY3l4RGpSTVhXYk9WYUhtQ0xQenhnajRiWE9lN0lGcC1qRGxLcjVkbHBFTlNhWktraHVCWkhudFZvZzQzcV8wcWM?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-145",
          "rank_by_count": 145,
          "name": "올해 마지막 금통위 D-1…한은 기준금리 '3.0→3.25%' 유력",
          "easy": "",
          "quote": "올해 마지막 금통위 D-1…한은 기준금리 '3.0→3.25%' 유력",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 167,
              "title": "올해 마지막 금통위 D-1…한은 기준금리 '3.0→3.25%' 유력 - 뉴스웍스",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5CZlZnT1Z0RDZVSThDZjE2QkdpeV9fWXRaUFpwRlRkQV9heGNSZ0hHRDdpVEh5MmstSFZYQW5WU0VqdzUzMk1JMjJieGxQUVYyZ2VENHEyLVFpclhNR0t4TDJ1NXU2RG9tRjltcFU3Y9IBc0FVX3lxTFAtWEtiVE43a0QzdzVBTlBsdmR1WEFJZFRpamdPTElndVQ4QTh6aHhocVFVOER5TVBLSF9RMHZybHNhRlhXTlZOdDNvMFh5dFlSMmotTTQyVEJLdnNJYWNLQzdlREFCdmdETjBjVEM2eXhBc3c?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-146",
          "rank_by_count": 146,
          "name": "[11월 금통위 D-1] 채권시장 시나리오는 |",
          "easy": "",
          "quote": "[11월 금통위 D-1] 채권시장 시나리오는 |",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 169,
              "title": "[11월 금통위 D-1] 채권시장 시나리오는 | - 연합인포맥스",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTFBiYmFMd1lZb0xOUHNzNWpQUVpkWHVlMDFTWktMdVEyNVhsOVZEUWMwNjM1cWxXNjBSdWhtN3VmczJiSkU0SUc0SF8yRmVrMXZxbmtIZFV1UWlCWDFIYmtWX3pwN2xxaHRqUVZkVll4Z19IVW55?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-147",
          "rank_by_count": 147,
          "name": "내일 금통위, 기준금리 3.25%로 오를까… 반도체 호황이 부른 금리 인상, 과거 25번은 '왜 올리느냐'가 갈랐다",
          "easy": "",
          "quote": "내일 금통위, 기준금리 3.25%로 오를까… 반도체 호황이 부른 금리 인상, 과거 25번은 '왜 올리느냐'가 갈랐다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 170,
              "title": "내일 금통위, 기준금리 3.25%로 오를까… 반도체 호황이 부른 금리 인상, 과거 25번은 '왜 올리느냐'가 갈랐다 - 네이버 프리미엄콘텐츠",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMilAFBVV95cUxPNUl6MGIwT1lrUTA0Q3hkbUd0dzhzQzQxRnVVTGhUaThaLW1YS2x5YTdaTzFINVdwbTliYTBLY2RXQzd4NDd3cUxyenl2WndidWFqOG9CZFBhcEMwaEtmUERFWEl0QldWcTFuRTdTMGV1Q0gzdG9PTldNOHhhSmpkZ0xXY0tYNHE2YUF3bWZiellXYU93?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-148",
          "rank_by_count": 148,
          "name": "은행 가계대출 금리 5% 돌파",
          "easy": "",
          "quote": "은행 가계대출 금리 5% 돌파",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 171,
              "title": "은행 가계대출 금리 5% 돌파 - 조선일보",
              "source_name": "'한국은행 기준금리'",
              "link": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNYVB5aWJfZ0RvbG5fcU5CZ1R3Vm9RMEIxRVF1bE5SOC1QaWw3ZjdCcXZSQmY1cDFvTzB0X1ktTmVvVVNoYVEzSUJYVExwOEp6Y2wzR2w0WHMxSFN2SlotZi15TUdXajZ0amw1OUF2ZXhlbi15ZmZ6X2VVbzh5NVRjTUp5RUZxM3hGLWVURzln?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-149",
          "rank_by_count": 149,
          "name": "삼성물산, 한국형 혁신핵융합로 건설 뛰어든다",
          "easy": "",
          "quote": "삼성물산, 한국형 혁신핵융합로 건설 뛰어든다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 173,
              "title": "삼성물산, 한국형 혁신핵융합로 건설 뛰어든다 - 매일경제",
              "source_name": "'핵융합 초전도'",
              "link": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFBnbVBKS0FSZ1pZdXhuZzZMdEYtMlhiZmlpajJZd0p2ME5PSlM3U3J6NmlxYWFtVTAxcVJ2Tk9LeWVfckxYQ01IUFRaREhQUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-150",
          "rank_by_count": 150,
          "name": "[홍콩 특징주] 샤오펑, 휴머노이드 로봇 내년 1월 양산…2029년 가정용 시장 확대",
          "easy": "",
          "quote": "[홍콩 특징주] 샤오펑, 휴머노이드 로봇 내년 1월 양산…2029년 가정용 시장 확대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 177,
              "title": "[홍콩 특징주] 샤오펑, 휴머노이드 로봇 내년 1월 양산…2029년 가정용 시장 확대 - 뉴스핌",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE50dkpEMS1jTXZRTHh3bl9iNlRXRjV5ZEp4akpFV1BHb2xZNnFWWGlIMmk0Uk1CQVk0bGNZS1gwMEZHSHpEcHR4RVpldlVXNTBIaEJRa0RrQkN1T1FJ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-151",
          "rank_by_count": 151,
          "name": "[포토] 휴머노이드로봇 '아틀라스'",
          "easy": "",
          "quote": "[포토] 휴머노이드로봇 '아틀라스'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 178,
              "title": "[포토] 휴머노이드로봇 '아틀라스' - 전자신문",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE9xS0RBRlFXZjBNLUxzbExBZmhSOE9fenA0aGRBbFJLc3FHRWQzQVpoNFQteGxjQ3ozMnFjRlNSc3ExRFMtd3pzSXV2bnk0Zw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-152",
          "rank_by_count": 152,
          "name": "뉴로메카, 휴머노이드 수술 보조 실증 성공…의료로봇 사업 확대",
          "easy": "",
          "quote": "뉴로메카, 휴머노이드 수술 보조 실증 성공…의료로봇 사업 확대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 179,
              "title": "뉴로메카, 휴머노이드 수술 보조 실증 성공…의료로봇 사업 확대 - 헬로티",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFB2RFNCSXZZUkwzTXBocU1kMXE3M3k1RVpJNGNFUzVJbHZBelJpN0MwS3dPWDhvSWhtenhUdVBuSzNaUGxxcUNxWVlWTXNfT2RsclZoMl80LTczRV9ZdllJ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-153",
          "rank_by_count": 153,
          "name": "'CES 2027' 로봇 전쟁…삼성전자 휴머노이드 출격 주목",
          "easy": "",
          "quote": "'CES 2027' 로봇 전쟁…삼성전자 휴머노이드 출격 주목",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 180,
              "title": "'CES 2027' 로봇 전쟁…삼성전자 휴머노이드 출격 주목 - 로봇신문",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9kOVdZREVEM2V6bm1zWE9GdVpXQVd3WWlnc251Z3JGbE05UDZ5a1U0NjNWSFpXTkE4cHhpSl9WLXZYZl9SelROTWxKby1rMXMxNktuOWdWU1BFbURGWUQydmdHWXJUaGJCejk0Zg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-154",
          "rank_by_count": 154,
          "name": "APEC 무대에 휴머노이드 로봇을 세운 선전",
          "easy": "",
          "quote": "APEC 무대에 휴머노이드 로봇을 세운 선전",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 181,
              "title": "APEC 무대에 휴머노이드 로봇을 세운 선전 - 플래텀(Platum)",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiSEFVX3lxTFBxMThOS3A5bTVoLUk0Ry1sYnNDd3ZsWDQzQnNZRkR1eEl6YlB1VjVaTjNaNUJuLUw5WElCVXB6SThQVnJmVVhBMA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-155",
          "rank_by_count": 155,
          "name": "샤오펑(09868 HK), 휴머노이드 로봇 ‘IRON’ 공개 예정…2027년 상용화 추진",
          "easy": "",
          "quote": "샤오펑(09868 HK), 휴머노이드 로봇 ‘IRON’ 공개 예정…2027년 상용화 추진",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 182,
              "title": "샤오펑(09868 HK), 휴머노이드 로봇 ‘IRON’ 공개 예정…2027년 상용화 추진 - 알파경제",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBKeTY4c1V5VjJWWG9NYmxYMGk2MGlKUFJhNUNBalYwZ2psTlJZVnh1ZDV1b2x2ME5jQklqUi16Z1N5cS1vRDUxVUlESnI3M2thbVJkdElnVThabl9QMEhVMTZwdGoyTjFNaXRpZm9n?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-156",
          "rank_by_count": 156,
          "name": "로봇도 디자인의 시대…'사용자 편의'가 로봇시대 화두 [디자인코리아 2026]",
          "easy": "",
          "quote": "로봇도 디자인의 시대…'사용자 편의'가 로봇시대 화두 [디자인코리아 2026]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 183,
              "title": "로봇도 디자인의 시대…'사용자 편의'가 로봇시대 화두 [디자인코리아 2026] - 한국경제",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE0taGtQZDB4ZUJjb1RodW1jVmZoT3dIUFd1VjhWTkJkYVhRazh4Mi1mdmUzRzJ5TWRYOFc5eVNaNXRMM1JmY2ZwOGJGNnpaQkpLZmlUdDVrYU1EUQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-157",
          "rank_by_count": 157,
          "name": "[이슈클릭] 90kg 들고 성큼성큼…‘괴력 휴머노이드’ 등장",
          "easy": "",
          "quote": "[이슈클릭] 90kg 들고 성큼성큼…‘괴력 휴머노이드’ 등장",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 184,
              "title": "[이슈클릭] 90kg 들고 성큼성큼…‘괴력 휴머노이드’ 등장 - KBS 뉴스",
              "source_name": "'휴머노이드 로봇'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9ORERtazA2M3JSRlRGbDRaMUQyd09tRE1KRWx6aXlCeDBwYXpITjJnSnVVZW1PRkMxbFJ2ZFhEV0h2aFpKRWR4ZGNsbWthcW5zOWNvQjI0ZGFJRG8?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-158",
          "rank_by_count": 158,
          "name": "동화일렉트로라이트, 북미서 신규 배터리 고객사 확보",
          "easy": "",
          "quote": "동화일렉트로라이트, 북미서 신규 배터리 고객사 확보",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 185,
              "title": "동화일렉트로라이트, 북미서 신규 배터리 고객사 확보 - 디일렉",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE5ZbGw3Ulp2NHpMSDFxaXZzLUdiNWxCMG5NNlRhS283bGs5dzE2YzdMM00tYVpBY095SEU1bHFtaUFfZjJiX3J1b0lFcXYtWmk0RmVJaDNwc3BsU1E0OFdXN1l3cUdEZw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-159",
          "rank_by_count": 159,
          "name": "‘자원안보 전초기지’ 고려아연, 인터배터리서 소재·전략광물 핵심 경쟁력 강조",
          "easy": "",
          "quote": "‘자원안보 전초기지’ 고려아연, 인터배터리서 소재·전략광물 핵심 경쟁력 강조",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 186,
              "title": "‘자원안보 전초기지’ 고려아연, 인터배터리서 소재·전략광물 핵심 경쟁력 강조 - 동아일보",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMizAVBVV95cUxPbkJSbm5jVEZvd05NV2JNb1ZpVjJKNm9OY3NFUGRLeUMwT184U2Vyd3R6TFd0blhUcXp3OWVVUmRUcFFVcEY0aFV2RVY1bkU4dHItWnNXdS1tTlhFQzhkY0s1VHBKTDhRZWNZdVVnS0RFX2EwX2Y4YXM4cGVodXo5TmY3WHVjbXJ6TVVsS1NVeUVFeEwyYzZ3bGRuaXFORjRyWnNEZXZFWnNNdmpGYmwtVEZ4d1NaUXkwaVY0NEdZa0pJQWwxekEyem1iUm40cTlLYnJ6QzBzeWNqR0NrTnR6N3psY1VQcVlPN3RFR3QxbDIyZkx1MjBFd09fUnl5c2pLN3RhMjNNRDduVWV"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-160",
          "rank_by_count": 160,
          "name": "美백악관서 나트륨배터리 개발 회의 열려...업계 역량 총결집",
          "easy": "",
          "quote": "美백악관서 나트륨배터리 개발 회의 열려...업계 역량 총결집",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 187,
              "title": "美백악관서 나트륨배터리 개발 회의 열려...업계 역량 총결집 - 더구루",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE4yNnBTazNDbktscm9DeHpVM1ZmaTltMTlrdTJhX1k2WldpbUlvRWNxSE9jWWlrRVpsX0prbm92NFlqa3QwRzBfWmNIX19ZSFRBZ0E0cmxJZkZxdmVraHc4RVhxWQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-161",
          "rank_by_count": 161,
          "name": "BASF, 배터리 소재 사업 '양극활물질'에 집중…배터리 재활용 사업은 cylib에 매각",
          "easy": "",
          "quote": "BASF, 배터리 소재 사업 '양극활물질'에 집중…배터리 재활용 사업은 cylib에 매각",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 191,
              "title": "BASF, 배터리 소재 사업 '양극활물질'에 집중…배터리 재활용 사업은 cylib에 매각 - https://www.2news.co.kr/",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9ZX1dmdkV1SHlqS2NEcnlJdmNBS3dqdjVGYTJIVERCd3A2Mkl6T1ZzUGczLTNVZ1d4YUFkUkpSTjNOWndMTmNHXzVnaUF2djk1TWwwSkxkTEgzSXFLSndzdXlTcl9uREdz?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-162",
          "rank_by_count": 162,
          "name": "태성, 복합동박 공장 준공…이차전지 소재 경쟁력 강화",
          "easy": "",
          "quote": "태성, 복합동박 공장 준공…이차전지 소재 경쟁력 강화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 192,
              "title": "태성, 복합동박 공장 준공…이차전지 소재 경쟁력 강화 - 한스경제",
              "source_name": "'배터리 소재'",
              "link": "https://news.google.com/rss/articles/CBMia0FVX3lxTE12TmJkb0hCdUY2Q1ZvNXNrUjI1X0NaZDA4aEFLVmNYWkQ0Q016djZYcGdhQTJ0c1dGbTRZQjZQNU44WGtpLVhvb1Z2UUU1YzF5YWlDamdPWm9KM2pCcHlmc1U5SUxSZ0R3RUgw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-163",
          "rank_by_count": 163,
          "name": "美中 반도체 갈등에 희토류도 빨간불…LS에코에너지 부각",
          "easy": "",
          "quote": "美中 반도체 갈등에 희토류도 빨간불…LS에코에너지 부각",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 193,
              "title": "美中 반도체 갈등에 희토류도 빨간불…LS에코에너지 부각 - 비즈워치",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE1adnpGYXNOOGpwWXBKZjdEZnZYRElKRFdLMG9BSVExQTVwY2ZsckNPZEpGa2NjQWZycHVRSTBGX0ZNdFVOaFFnakVfUG9rcEdxLUItUHdSTlV1MmdPaVNVcld1dE00c1U4LTZ3Ug?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-164",
          "rank_by_count": 164,
          "name": "희토류 양산 앞둔 LS에코에너지, 美中 공급망 갈등 '반사이익' 예고",
          "easy": "",
          "quote": "희토류 양산 앞둔 LS에코에너지, 美中 공급망 갈등 '반사이익' 예고",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 194,
              "title": "희토류 양산 앞둔 LS에코에너지, 美中 공급망 갈등 '반사이익' 예고 - 블로터",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBrTEphYzNfRnFLemFEOWs0UC1jS3BaRld3Nm5fTzNWdVJXQnE4TUU1cVh2M1cwTC1KWXZNUXJoX2RDWmpQcDZ1cDlNMG1IVWEtTGxSMDJzeENNSTZnLWdwb2w2cUdjU2hGY3ZQetIBbEFVX3lxTFBrTEphYzNfRnFLemFEOWs0UC1jS3BaRld3Nm5fTzNWdVJXQnE4TUU1cVh2M1cwTC1KWXZNUXJoX2RDWmpQcDZ1cDlNMG1IVWEtTGxSMDJzeENNSTZnLWdwb2w2cUdjU2hGY3ZQeg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-165",
          "rank_by_count": 165,
          "name": "일본,‘희토류 독립’ 이룰까? - www.cn-insight.kr",
          "easy": "",
          "quote": "일본,‘희토류 독립’ 이룰까? - www.cn-insight.kr",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 195,
              "title": "일본,‘희토류 독립’ 이룰까? - www.cn-insight.kr",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE91QXFBUnNWS3Jxa1pqTC1YcUp1V2M0OEp6T28yWGxnOHpxQno4NmZkbmEwOThQc3ZlY0FBcmt3YmpZYjZmM0FzMGpVMi1qRHpSZlBWRWY5dWYwaU4za1Y1UEZ0aUJBNmxVUVE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-166",
          "rank_by_count": 166,
          "name": "BMW·라인메탈 손잡고 희토류 공동구매…독일, 핵심광물 확보 전담회사 만든다",
          "easy": "",
          "quote": "BMW·라인메탈 손잡고 희토류 공동구매…독일, 핵심광물 확보 전담회사 만든다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 197,
              "title": "BMW·라인메탈 손잡고 희토류 공동구매…독일, 핵심광물 확보 전담회사 만든다 - 임팩트온",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTE4teWpOUEpJYUJKSmNqaXNncmZBLV9Ib2trRzRxZ0xPRVJBMlFkTVJiajBqaXU4MkQyb2o3ZU9qYnhicVZ4SlBaMFI4R2FMWVBudmQyVTh4blJrWk50dS1BaTFySGR2TVFfWlE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-167",
          "rank_by_count": 167,
          "name": "日, 中 규제에 '희토류' 비축분 소진으로 버틴다",
          "easy": "",
          "quote": "日, 中 규제에 '희토류' 비축분 소진으로 버틴다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 198,
              "title": "日, 中 규제에 '희토류' 비축분 소진으로 버틴다 - SBS Biz",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE5KRVpuLVVIN2tOdW95ZV96Tk9TblNXVzlBRVNXMUd1WUoyM2lzdjJ0TjdVSWdoVmlVQUNsQXpZM0IybVJPRjZ5QnVrNDAwNEVlcUlB0gFYQVVfeXFMUGNxcGM0RWhvRkRxVXhpNG45M3ZuMFBRTjhXUjd5T09ySWlYLWREV0pnLUNwRG04RjEtMk9JMWRIMlFlZG9lYUJ0XzlxOEJBaHJ5UmsyMm5zWA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-168",
          "rank_by_count": 168,
          "name": "미·중 '무역휴전' 종결 2개월 앞 젠슨황 사태...갈등 재점화하나 - 머니투데이",
          "easy": "",
          "quote": "미·중 '무역휴전' 종결 2개월 앞 젠슨황 사태...갈등 재점화하나 - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 199,
              "title": "미·중 '무역휴전' 종결 2개월 앞 젠슨황 사태...갈등 재점화하나 - 머니투데이 - 머니투데이",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMidkFVX3lxTFBndUwwLTNXcDhyRkhOamV5R1I5M08wa0VnWlI1aVdzTVF2aHk0SDJZVkNSQkpQRXktYzlSQVhrQ2tfTmd1dDJGYjEwV1htRkk3V2RYWndLNkxyTWZ3SVl6ZmViUVNqOUlBSEViSzRkWlBvLXJhcmfSAXtBVV95cUxPRnp5YWRzNXNfeEpESGs5Ukd2b3U1bG41T0U5LVRkTlJQMHF0dzJpZXZhYnBMVkI2ME5rckYzblVtZUxsZXRmRWdSY1NCZ0hhWC1uVTJrd1ZQejBqQzNmc041enl5OUs4ak1NdWZ0MDRHdUNRNW1OeFRGQkk?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-169",
          "rank_by_count": 169,
          "name": "희토류 수입 80% 차단 시 국가별 생산 손실",
          "easy": "",
          "quote": "희토류 수입 80% 차단 시 국가별 생산 손실",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 200,
              "title": "희토류 수입 80% 차단 시 국가별 생산 손실 - The Economy Korea",
              "source_name": "'희토류 수출통제'",
              "link": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE1hamQyVE5lX2hrXzduR0J6dUU1VU9ocVR2d2NfMWFxc0RNX01WWmNlbEVPQU1pWkVKQ3BvR3c0ZlNST1FpcXBLVjZGZ1hqQzg3MC00MmhTOFNFT054WGZz?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-170",
          "rank_by_count": 170,
          "name": "트럼프 \"젠슨 황 사면 선택지 있어…엔비디아 지분 확보 생각해봤다\"",
          "easy": "",
          "quote": "트럼프 \"젠슨 황 사면 선택지 있어…엔비디아 지분 확보 생각해봤다\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 201,
              "title": "트럼프 \"젠슨 황 사면 선택지 있어…엔비디아 지분 확보 생각해봤다\" - 조선일보",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMigwFBVV95cUxPbmQ0bVV0bzh1TGlXeGtDUUtDNWJHODZyOF9MbHJCaVFWWjRCWTlMNDZtRjNqTk0tRTJKcXV0bm1KcFFGeGtFTjhYTDJTSlJLcVR2LWxWMWRnbjVqQldIcG9yN2poUDlnWkZ0cnAwVHluODBac1VIUUJMT0QyNHhGRndMOA?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-171",
          "rank_by_count": 171,
          "name": "트럼프, 젠슨 황 사면이 “언제나 선택지에 있다”고 발언｜Global Money Club",
          "easy": "",
          "quote": "트럼프, 젠슨 황 사면이 “언제나 선택지에 있다”고 발언｜Global Money Club",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 202,
              "title": "트럼프, 젠슨 황 사면이 “언제나 선택지에 있다”고 발언｜Global Money Club - 중앙일보",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9kRHpGM1RpTmNxSF81ZHZOcUdnaF9rLUtxT2N0Z29EMjZJNmVJWGU1OUMwRUQxd1JhdzBUTWZvNUFua0pKQXBvbzRjLVo1cTBaRzVlVERXU2FZRzg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-172",
          "rank_by_count": 172,
          "name": "美민주당 상원 원내대표 \"젠슨 황, 미국 수출통제법 위반\" 직격…정치권 반발 확대",
          "easy": "",
          "quote": "美민주당 상원 원내대표 \"젠슨 황, 미국 수출통제법 위반\" 직격…정치권 반발 확대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 203,
              "title": "美민주당 상원 원내대표 \"젠슨 황, 미국 수출통제법 위반\" 직격…정치권 반발 확대 - 더구루",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE5leW9laHZtNks5eUVVanVuOGItV1Vwbi01Vy1MS0gxMjVMMmFOVmlEN3dYMmdnTFpzN3N2VE54U1h1MDhTXzAwbDJUcjJqOEFtUnNZYkFCNV8wdDk4UkE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-173",
          "rank_by_count": 173,
          "name": "젠슨 황 \"후계 계획 필요 없다\"…'승계 리스크' 안고가나 - 머니투데이",
          "easy": "",
          "quote": "젠슨 황 \"후계 계획 필요 없다\"…'승계 리스크' 안고가나 - 머니투데이",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 204,
              "title": "젠슨 황 \"후계 계획 필요 없다\"…'승계 리스크' 안고가나 - 머니투데이 - 머니투데이",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMibkFVX3lxTE1iUGRVbmdyY2VpT1ROSmMxSTh4aTc1dnRfUTFIaTF5TkkyVm1yalNtYzhNblRGR1JfUkRLZ0xNb1doZm1GbUNUMFQwTmhJS0JtY2c2TEVjTXZ2U2x1SDc4UGxpUUtTVmFGbUdIVTNn0gFuQVVfeXFMTWJQZFVuZ3JjZWlPVE5KYzFJOHhpNzV2dF9RMUhpMXlOSTJWbXJqU21jOE1uVEZHUl9SREtnTE1vV2hmbUZtQ1QwVDBOaElLQm1jZzZMRWNNdnZTbHVINzhQbGlRS1NWYUZtR0hVM2c?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-174",
          "rank_by_count": 174,
          "name": "'젠슨 황 복귀' 트럼프 개입 후폭풍…공화당도 강력 반발",
          "easy": "",
          "quote": "'젠슨 황 복귀' 트럼프 개입 후폭풍…공화당도 강력 반발",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 205,
              "title": "'젠슨 황 복귀' 트럼프 개입 후폭풍…공화당도 강력 반발 - 연합뉴스 한민족센터",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMidEFVX3lxTFBrQVVqWVRXdFNoSXJ4SU1fblJzX2VtTDJDVXpvUjVKOUhNQWtCSzc1ZkdNNDZjb043VVJOMVVaUDZNU1pHQzUxZW4wSl94X05SSWs4N1dqUHZEM04tZHY5aElhNDVOWGxoR24yeXZ3OFZSbXRj?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-175",
          "rank_by_count": 175,
          "name": "트럼프, 젠슨 황 혈통 거론에…SCMP \"아시아계 인종차별 논쟁 촉발\"",
          "easy": "",
          "quote": "트럼프, 젠슨 황 혈통 거론에…SCMP \"아시아계 인종차별 논쟁 촉발\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 206,
              "title": "트럼프, 젠슨 황 혈통 거론에…SCMP \"아시아계 인종차별 논쟁 촉발\" - 뉴시스",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE4wRmwtcXRtWEZJcHVQNld1RDNjS2xpMXNqSjRMQWhWbHRvN2w2YUFIS2VYTTE0aHVoMXR6Y2JYQjNHUmtMOW9fUy1DcGlNS29rcFpxU0NndjdFVXBzM1ZHNNIBeEFVX3lxTE9nX2lxdXFEd3c0bHlReEJCdzdYYmxvSXZhM19JVlhlVjZGWVNPbWVzSVRENTlaNDFTTVZZeHBRTUdlNGtkM202SDhwQ2RwMjNPVFZYUHRIay1rWnJwaHB6Y3V2bTQxcXpxZE5qd2tXcWJKbFhaUGs1Tw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-176",
          "rank_by_count": 176,
          "name": "젠슨 황 엔비디아 복귀…사내 행동강령 위반 발언 논란 : 기업",
          "easy": "",
          "quote": "젠슨 황 엔비디아 복귀…사내 행동강령 위반 발언 논란 : 기업",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 207,
              "title": "젠슨 황 엔비디아 복귀…사내 행동강령 위반 발언 논란 : 기업 - 재경일보",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE82WjJySXBpVldpUWpOamx5bDd5V1RJNjgxRFVXM3M5YUxFV2FjQjdiVU1EWTRvaWFWNjhFbm12M1Roc0tIclN5Z05NWQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-177",
          "rank_by_count": 177,
          "name": "'젠슨 황 랠리' 하루 만에 증발…삼성전자·SK하이닉스 6%대 폭락",
          "easy": "",
          "quote": "'젠슨 황 랠리' 하루 만에 증발…삼성전자·SK하이닉스 6%대 폭락",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 208,
              "title": "'젠슨 황 랠리' 하루 만에 증발…삼성전자·SK하이닉스 6%대 폭락 - 한국경제",
              "source_name": "'젠슨황 발언'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBseDhCY1dvRG9LR3d2d0JZZkFEMHJobjBNMXlGcXBjSmNmZUR4aFo0UDlFcUhFLTBRMVF1eWhsSjJiX25DcFIzS0VIaTF3eGJqY01fSkNtbm11dw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-178",
          "rank_by_count": 178,
          "name": "美 10월 PCE 3.8%↑…12월 금리인상 힘실려",
          "easy": "",
          "quote": "美 10월 PCE 3.8%↑…12월 금리인상 힘실려",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1230,
              "title": "美 10월 PCE 3.8%↑…12월 금리인상 힘실려",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/2026112506871"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-179",
          "rank_by_count": 179,
          "name": "트럼프가 젠슨황 복귀원한 또다른 이유…美AI업계 두갈래 전쟁",
          "easy": "",
          "quote": "트럼프가 젠슨황 복귀원한 또다른 이유…美AI업계 두갈래 전쟁",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1231,
              "title": "트럼프가 젠슨황 복귀원한 또다른 이유…美AI업계 두갈래 전쟁",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/202611260716i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-180",
          "rank_by_count": 180,
          "name": "美 새 관세 발표…한국·일본 15% 유지,중국은 최대 40%",
          "easy": "",
          "quote": "美 새 관세 발표…한국·일본 15% 유지,중국은 최대 40%",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1232,
              "title": "美 새 관세 발표…한국·일본 15% 유지,중국은 최대 40%",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/202611250639i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-181",
          "rank_by_count": 181,
          "name": "OSB저축은행, 장찬 대표 연임 수순",
          "easy": "",
          "quote": "OSB저축은행, 장찬 대표 연임 수순",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1234,
              "title": "OSB저축은행, 장찬 대표 연임 수순",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/202611250422i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-182",
          "rank_by_count": 182,
          "name": "美 10월 PCE는 연 3.8% 상승에 3분기 GDP는 연 4.3% 성장",
          "easy": "",
          "quote": "美 10월 PCE는 연 3.8% 상승에 3분기 GDP는 연 4.3% 성장",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1235,
              "title": "美 10월 PCE는 연 3.8% 상승에 3분기 GDP는 연 4.3% 성장",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/202611250630i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-183",
          "rank_by_count": 183,
          "name": "美, 中 AI칩 우회로 차단…동남아 데이터센터 '고객 쟁탈전'",
          "easy": "",
          "quote": "美, 中 AI칩 우회로 차단…동남아 데이터센터 '고객 쟁탈전'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1236,
              "title": "美, 中 AI칩 우회로 차단…동남아 데이터센터 '고객 쟁탈전'",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/202611250573i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-184",
          "rank_by_count": 184,
          "name": "\"가운 믿고 바릅니다\"…외국인 몰리는 뜻밖의 'K뷰티 성지'",
          "easy": "",
          "quote": "\"가운 믿고 바릅니다\"…외국인 몰리는 뜻밖의 'K뷰티 성지'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1237,
              "title": "\"가운 믿고 바릅니다\"…외국인 몰리는 뜻밖의 'K뷰티 성지'",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/202611250203g"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-185",
          "rank_by_count": 185,
          "name": "대한항공 \"한진칼 지배구조 흔들림 없어…통합 LCC 본사 서울·부산 중 결정\"",
          "easy": "",
          "quote": "대한항공 \"한진칼 지배구조 흔들림 없어…통합 LCC 본사 서울·부산 중 결정\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1239,
              "title": "대한항공 \"한진칼 지배구조 흔들림 없어…통합 LCC 본사 서울·부산 중 결정\"",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/202611250361i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-186",
          "rank_by_count": 186,
          "name": "\"여기 짬뽕 순두부 주세요\"…전기차 충전하러 갔다가 '깜짝' [현장+]",
          "easy": "",
          "quote": "\"여기 짬뽕 순두부 주세요\"…전기차 충전하러 갔다가 '깜짝' [현장+]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1241,
              "title": "\"여기 짬뽕 순두부 주세요\"…전기차 충전하러 갔다가 '깜짝' [현장+]",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/202611259359H"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-187",
          "rank_by_count": 187,
          "name": "AI發 부채폭탄 공포…코어위브 부도보험료 13%, 소프트뱅크 5% 돌파",
          "easy": "",
          "quote": "AI發 부채폭탄 공포…코어위브 부도보험료 13%, 소프트뱅크 5% 돌파",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1242,
              "title": "AI發 부채폭탄 공포…코어위브 부도보험료 13%, 소프트뱅크 5% 돌파",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/202611250492i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-188",
          "rank_by_count": 188,
          "name": "'남자들도 신는다고?'…사흘 만에 80억 잭팟 터진 '장원영 신발' [장서우의 하입:hype]",
          "easy": "",
          "quote": "'남자들도 신는다고?'…사흘 만에 80억 잭팟 터진 '장원영 신발' [장서우의 하입:hype]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1243,
              "title": "'남자들도 신는다고?'…사흘 만에 80억 잭팟 터진 '장원영 신발' [장서우의 하입:hype]",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/202611250273i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-189",
          "rank_by_count": 189,
          "name": "[단독] 수천원 내고 200만원?…9배 폭증한 '이 보험' 뭐길래",
          "easy": "",
          "quote": "[단독] 수천원 내고 200만원?…9배 폭증한 '이 보험' 뭐길래",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1244,
              "title": "[단독] 수천원 내고 200만원?…9배 폭증한 '이 보험' 뭐길래",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/2026112502461"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-190",
          "rank_by_count": 190,
          "name": "등록만 하고 활동 보고는 '깜깜'…창업기획자 42곳 무더기 퇴출",
          "easy": "",
          "quote": "등록만 하고 활동 보고는 '깜깜'…창업기획자 42곳 무더기 퇴출",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1245,
              "title": "등록만 하고 활동 보고는 '깜깜'…창업기획자 42곳 무더기 퇴출",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/202611250462i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-191",
          "rank_by_count": 191,
          "name": "김정관 \"중국 R&D에 가장 밀리는 건 시간…주 52시간도 못 풀면 미래 없다\"",
          "easy": "",
          "quote": "김정관 \"중국 R&D에 가장 밀리는 건 시간…주 52시간도 못 풀면 미래 없다\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1246,
              "title": "김정관 \"중국 R&D에 가장 밀리는 건 시간…주 52시간도 못 풀면 미래 없다\"",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/202611250417i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-192",
          "rank_by_count": 192,
          "name": "공론화에 발목잡힌 국가 전력…'하남 변전소' 주민투표로",
          "easy": "",
          "quote": "공론화에 발목잡힌 국가 전력…'하남 변전소' 주민투표로",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1247,
              "title": "공론화에 발목잡힌 국가 전력…'하남 변전소' 주민투표로",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/2026112503361"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-193",
          "rank_by_count": 193,
          "name": "출생아 27개월 연속 늘었다…올해 증가율 14% '역대 최고'",
          "easy": "",
          "quote": "출생아 27개월 연속 늘었다…올해 증가율 14% '역대 최고'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1248,
              "title": "출생아 27개월 연속 늘었다…올해 증가율 14% '역대 최고'",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/2026112502901"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-194",
          "rank_by_count": 194,
          "name": "\"中에 밀리는 건 시간, 주 52시간 특례는 韓 마지막 승부처\"",
          "easy": "",
          "quote": "\"中에 밀리는 건 시간, 주 52시간 특례는 韓 마지막 승부처\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1249,
              "title": "\"中에 밀리는 건 시간, 주 52시간 특례는 韓 마지막 승부처\"",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/2026112503321"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-195",
          "rank_by_count": 195,
          "name": "[단독] 가상자산 영토 넓히는 금융사…절반은 \"거래소 지분 인수할 것\"",
          "easy": "",
          "quote": "[단독] 가상자산 영토 넓히는 금융사…절반은 \"거래소 지분 인수할 것\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1250,
              "title": "[단독] 가상자산 영토 넓히는 금융사…절반은 \"거래소 지분 인수할 것\"",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/2026112503211"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-196",
          "rank_by_count": 196,
          "name": "[단독] \"디지털자산 확산 땐 해외송금·외환거래 사업 큰 타격\"",
          "easy": "",
          "quote": "[단독] \"디지털자산 확산 땐 해외송금·외환거래 사업 큰 타격\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1251,
              "title": "[단독] \"디지털자산 확산 땐 해외송금·외환거래 사업 큰 타격\"",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/2026112503201"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-197",
          "rank_by_count": 197,
          "name": "[단독] 내년 국회 넘어도 2028년 법 시행",
          "easy": "",
          "quote": "[단독] 내년 국회 넘어도 2028년 법 시행",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1252,
              "title": "[단독] 내년 국회 넘어도 2028년 법 시행",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/2026112503191"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-198",
          "rank_by_count": 198,
          "name": "외국인 태운 우주선 쏜 中…美와 스페이스 패권전쟁",
          "easy": "",
          "quote": "외국인 태운 우주선 쏜 中…美와 스페이스 패권전쟁",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1253,
              "title": "외국인 태운 우주선 쏜 中…美와 스페이스 패권전쟁",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/2026112503141"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-199",
          "rank_by_count": 199,
          "name": "[단독] 국산 전기차 '배터리 빼고' 반값에 산다",
          "easy": "",
          "quote": "[단독] 국산 전기차 '배터리 빼고' 반값에 산다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1254,
              "title": "[단독] 국산 전기차 '배터리 빼고' 반값에 산다",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/2026112503631"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-200",
          "rank_by_count": 200,
          "name": "[단독] \"中 전기차보다 싸네\"…아이오닉5, 이제 반값에 산다",
          "easy": "",
          "quote": "[단독] \"中 전기차보다 싸네\"…아이오닉5, 이제 반값에 산다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1255,
              "title": "[단독] \"中 전기차보다 싸네\"…아이오닉5, 이제 반값에 산다",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/2026112502651"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-201",
          "rank_by_count": 201,
          "name": "10월 가계대출 금리 연 5% 돌파…주담대는 14년7개월 만에 최고",
          "easy": "",
          "quote": "10월 가계대출 금리 연 5% 돌파…주담대는 14년7개월 만에 최고",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1256,
              "title": "10월 가계대출 금리 연 5% 돌파…주담대는 14년7개월 만에 최고",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/2026112502471"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-202",
          "rank_by_count": 202,
          "name": "서울 구금고 지각변동…국민은행, 11곳 맡아 1위로",
          "easy": "",
          "quote": "서울 구금고 지각변동…국민은행, 11곳 맡아 1위로",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1257,
              "title": "서울 구금고 지각변동…국민은행, 11곳 맡아 1위로",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/2026112502491"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-203",
          "rank_by_count": 203,
          "name": "에쓰오일, 9조 들인 초대형 석화단지 완공",
          "easy": "",
          "quote": "에쓰오일, 9조 들인 초대형 석화단지 완공",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1258,
              "title": "에쓰오일, 9조 들인 초대형 석화단지 완공",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/2026112502371"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-204",
          "rank_by_count": 204,
          "name": "생보사 실적 악화에…보험사 올 순익 9000억 줄어",
          "easy": "",
          "quote": "생보사 실적 악화에…보험사 올 순익 9000억 줄어",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1259,
              "title": "생보사 실적 악화에…보험사 올 순익 9000억 줄어",
              "source_name": "한국경제 경제",
              "link": "https://www.hankyung.com/article/2026112502501"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-205",
          "rank_by_count": 205,
          "name": "AI 투자 신뢰 흔들린 월가…나스닥 4% 넘게 낙폭 확대[월가 업&다운]",
          "easy": "",
          "quote": "AI 투자 신뢰 흔들린 월가…나스닥 4% 넘게 낙폭 확대[월가 업&다운]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1260,
              "title": "AI 투자 신뢰 흔들린 월가…나스닥 4% 넘게 낙폭 확대[월가 업&다운]",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/202611260727i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-206",
          "rank_by_count": 206,
          "name": "美 10월 근원 PCE 물가 3.3%…내년 추가 긴축 압박",
          "easy": "",
          "quote": "美 10월 근원 PCE 물가 3.3%…내년 추가 긴축 압박",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1261,
              "title": "美 10월 근원 PCE 물가 3.3%…내년 추가 긴축 압박",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/202611250680i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-207",
          "rank_by_count": 207,
          "name": "엔비디아 시간외 6% 급락…美 물가·관세 충격에 AI株 휘청 [월가 업&다운]",
          "easy": "",
          "quote": "엔비디아 시간외 6% 급락…美 물가·관세 충격에 AI株 휘청 [월가 업&다운]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1262,
              "title": "엔비디아 시간외 6% 급락…美 물가·관세 충격에 AI株 휘청 [월가 업&다운]",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/202611250671i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-208",
          "rank_by_count": 208,
          "name": "젠슨 황 복귀 환호했는데…'뭘 샀길래' 하루새 20% 와르르 [분석+]",
          "easy": "",
          "quote": "젠슨 황 복귀 환호했는데…'뭘 샀길래' 하루새 20% 와르르 [분석+]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1263,
              "title": "젠슨 황 복귀 환호했는데…'뭘 샀길래' 하루새 20% 와르르 [분석+]",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/2026112598476"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-209",
          "rank_by_count": 209,
          "name": "반도체 고점론 공방 격화에 속절없이 무너진 삼전닉스",
          "easy": "",
          "quote": "반도체 고점론 공방 격화에 속절없이 무너진 삼전닉스",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1265,
              "title": "반도체 고점론 공방 격화에 속절없이 무너진 삼전닉스",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/2026112503021"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-210",
          "rank_by_count": 210,
          "name": "\"3~4일을 계속 울었다\"…주식으로 3억 잃은 한 개미의 조언",
          "easy": "",
          "quote": "\"3~4일을 계속 울었다\"…주식으로 3억 잃은 한 개미의 조언",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1266,
              "title": "\"3~4일을 계속 울었다\"…주식으로 3억 잃은 한 개미의 조언",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/2026112503737"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-211",
          "rank_by_count": 211,
          "name": "'반토막 계좌' 살리는 대응법 [한경 프리미엄9 TODAY]",
          "easy": "",
          "quote": "'반토막 계좌' 살리는 대응법 [한경 프리미엄9 TODAY]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1267,
              "title": "'반토막 계좌' 살리는 대응법 [한경 프리미엄9 TODAY]",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/2026112503121"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-212",
          "rank_by_count": 212,
          "name": "상장 4거래일 만에…앤트로픽, 공모가 붕괴",
          "easy": "",
          "quote": "상장 4거래일 만에…앤트로픽, 공모가 붕괴",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1268,
              "title": "상장 4거래일 만에…앤트로픽, 공모가 붕괴",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/2026112502821"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-213",
          "rank_by_count": 213,
          "name": "IPO 철회 기업들, 잇따라 재도전 검토",
          "easy": "",
          "quote": "IPO 철회 기업들, 잇따라 재도전 검토",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1269,
              "title": "IPO 철회 기업들, 잇따라 재도전 검토",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/2026112502801"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-214",
          "rank_by_count": 214,
          "name": "실적개선 종목들 변동장 투자처 부상",
          "easy": "",
          "quote": "실적개선 종목들 변동장 투자처 부상",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1270,
              "title": "실적개선 종목들 변동장 투자처 부상",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/2026112502811"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-215",
          "rank_by_count": 215,
          "name": "[단독] 코스피 다시 급락하자…정부 '증안펀드' 확대 나섰다",
          "easy": "",
          "quote": "[단독] 코스피 다시 급락하자…정부 '증안펀드' 확대 나섰다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1271,
              "title": "[단독] 코스피 다시 급락하자…정부 '증안펀드' 확대 나섰다",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/2026112503561"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-216",
          "rank_by_count": 216,
          "name": "[포토] 롤러코스터 코스피",
          "easy": "",
          "quote": "[포토] 롤러코스터 코스피",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1272,
              "title": "[포토] 롤러코스터 코스피",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/202611250164i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-217",
          "rank_by_count": 217,
          "name": "거래소, 상장사 사내·사외이사 100여명 대상 밸류업 설명회",
          "easy": "",
          "quote": "거래소, 상장사 사내·사외이사 100여명 대상 밸류업 설명회",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1273,
              "title": "거래소, 상장사 사내·사외이사 100여명 대상 밸류업 설명회",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/2026112500936"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-218",
          "rank_by_count": 218,
          "name": "엑셀세라퓨틱스 \"中 아크로바이오와 20억원 전략적 투자 유치 협약\"",
          "easy": "",
          "quote": "엑셀세라퓨틱스 \"中 아크로바이오와 20억원 전략적 투자 유치 협약\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1274,
              "title": "엑셀세라퓨틱스 \"中 아크로바이오와 20억원 전략적 투자 유치 협약\"",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/2026112500516"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-219",
          "rank_by_count": 219,
          "name": "라이브엑스 \"탐즈, 롯데홈쇼핑서 '제로 CPR 트리트먼트' 론칭 예정\"",
          "easy": "",
          "quote": "라이브엑스 \"탐즈, 롯데홈쇼핑서 '제로 CPR 트리트먼트' 론칭 예정\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1275,
              "title": "라이브엑스 \"탐즈, 롯데홈쇼핑서 '제로 CPR 트리트먼트' 론칭 예정\"",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/2026112500246"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-220",
          "rank_by_count": 220,
          "name": "낸드값 하락, D램까지 번질까…격렬해진 '반도체 사이클 공방'",
          "easy": "",
          "quote": "낸드값 하락, D램까지 번질까…격렬해진 '반도체 사이클 공방'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1276,
              "title": "낸드값 하락, D램까지 번질까…격렬해진 '반도체 사이클 공방'",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/202611259913i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-221",
          "rank_by_count": 221,
          "name": "\"삼전 반값 됐다\" 울상인데…존 리가 콕 집은 '뜻밖의 희소식'",
          "easy": "",
          "quote": "\"삼전 반값 됐다\" 울상인데…존 리가 콕 집은 '뜻밖의 희소식'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1277,
              "title": "\"삼전 반값 됐다\" 울상인데…존 리가 콕 집은 '뜻밖의 희소식'",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/2026112599427"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-222",
          "rank_by_count": 222,
          "name": "하루 걸러 매수·매도 사이드카…'진짜 반등' 가를 네 가지 신호",
          "easy": "",
          "quote": "하루 걸러 매수·매도 사이드카…'진짜 반등' 가를 네 가지 신호",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1278,
              "title": "하루 걸러 매수·매도 사이드카…'진짜 반등' 가를 네 가지 신호",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/202611259852i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-223",
          "rank_by_count": 223,
          "name": "오늘의 프리미엄9 콘텐츠 다이제스트(11월 25일)",
          "easy": "",
          "quote": "오늘의 프리미엄9 콘텐츠 다이제스트(11월 25일)",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1279,
              "title": "오늘의 프리미엄9 콘텐츠 다이제스트(11월 25일)",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/202611259962i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-224",
          "rank_by_count": 224,
          "name": "블프 '잭팟' 해외서 터졌다…폭락장에 10% 급등",
          "easy": "",
          "quote": "블프 '잭팟' 해외서 터졌다…폭락장에 10% 급등",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1280,
              "title": "블프 '잭팟' 해외서 터졌다…폭락장에 10% 급등",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/202611259737i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-225",
          "rank_by_count": 225,
          "name": "\"현재 실적보단 미래 수익성\"…데이터센터 청사진으로 엇갈린 통신3사 수익성",
          "easy": "",
          "quote": "\"현재 실적보단 미래 수익성\"…데이터센터 청사진으로 엇갈린 통신3사 수익성",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1281,
              "title": "\"현재 실적보단 미래 수익성\"…데이터센터 청사진으로 엇갈린 통신3사 수익성",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/202611259536i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-226",
          "rank_by_count": 226,
          "name": "[마감시황] 젠슨황發 상승분 모두 반납...코스피 6.16% 내린 4697.51 마감",
          "easy": "",
          "quote": "[마감시황] 젠슨황發 상승분 모두 반납...코스피 6.16% 내린 4697.51 마감",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1282,
              "title": "[마감시황] 젠슨황發 상승분 모두 반납...코스피 6.16% 내린 4697.51 마감",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/202611259903i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-227",
          "rank_by_count": 227,
          "name": "CES 앞두고 숨 고르는 로봇주…증권가 \"상용화 여부 봐야할 때\"",
          "easy": "",
          "quote": "CES 앞두고 숨 고르는 로봇주…증권가 \"상용화 여부 봐야할 때\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1283,
              "title": "CES 앞두고 숨 고르는 로봇주…증권가 \"상용화 여부 봐야할 때\"",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/202611259463i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-228",
          "rank_by_count": 228,
          "name": "녹십자·신세계·효성티앤씨…변동성 장세엔 '실적株'",
          "easy": "",
          "quote": "녹십자·신세계·효성티앤씨…변동성 장세엔 '실적株'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1284,
              "title": "녹십자·신세계·효성티앤씨…변동성 장세엔 '실적株'",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/202611259770i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-229",
          "rank_by_count": 229,
          "name": "\"반등할 줄 알았는데\"…삼전닉스 동반 폭락에 개미들 '한숨'",
          "easy": "",
          "quote": "\"반등할 줄 알았는데\"…삼전닉스 동반 폭락에 개미들 '한숨'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1285,
              "title": "\"반등할 줄 알았는데\"…삼전닉스 동반 폭락에 개미들 '한숨'",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/2026112597396"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-230",
          "rank_by_count": 230,
          "name": "설상가상 삼전닉스…50억원 이상 큰손 고객 연말 절세 매물 '주의보'",
          "easy": "",
          "quote": "설상가상 삼전닉스…50억원 이상 큰손 고객 연말 절세 매물 '주의보'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1286,
              "title": "설상가상 삼전닉스…50억원 이상 큰손 고객 연말 절세 매물 '주의보'",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/202611246173i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-231",
          "rank_by_count": 231,
          "name": "AI, '성장에 대한 의구심' 대신 '잠재력'에 주목할 때",
          "easy": "",
          "quote": "AI, '성장에 대한 의구심' 대신 '잠재력'에 주목할 때",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1288,
              "title": "AI, '성장에 대한 의구심' 대신 '잠재력'에 주목할 때",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/202611259716i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-232",
          "rank_by_count": 232,
          "name": "SKT 25% 뛸 때 KT 14% 빠졌다…통신3사 주가 가른 '이것'",
          "easy": "",
          "quote": "SKT 25% 뛸 때 KT 14% 빠졌다…통신3사 주가 가른 '이것'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1289,
              "title": "SKT 25% 뛸 때 KT 14% 빠졌다…통신3사 주가 가른 '이것'",
              "source_name": "한국경제 증권",
              "link": "https://www.hankyung.com/article/202611258871i"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-233",
          "rank_by_count": 233,
          "name": "[단독] 20년 넘게 낸 세금, 안 내도 됐었다…끝까지 따져 돌려받은 은행원들",
          "easy": "",
          "quote": "[단독] 20년 넘게 낸 세금, 안 내도 됐었다…끝까지 따져 돌려받은 은행원들",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1293,
              "title": "[단독] 20년 넘게 낸 세금, 안 내도 됐었다…끝까지 따져 돌려받은 은행원들",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218500"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-234",
          "rank_by_count": 234,
          "name": "코스피 6% 폭락하자 채권시장으로?…금통위 전날 국고채 금리 일제히 하락",
          "easy": "",
          "quote": "코스피 6% 폭락하자 채권시장으로?…금통위 전날 국고채 금리 일제히 하락",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1295,
              "title": "코스피 6% 폭락하자 채권시장으로?…금통위 전날 국고채 금리 일제히 하락",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218490"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-235",
          "rank_by_count": 235,
          "name": "[단독] “편의점 한다던 남편 뜯어말렸는데”…매출이 늘고 있다는 점주들",
          "easy": "",
          "quote": "[단독] “편의점 한다던 남편 뜯어말렸는데”…매출이 늘고 있다는 점주들",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1296,
              "title": "[단독] “편의점 한다던 남편 뜯어말렸는데”…매출이 늘고 있다는 점주들",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218489"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-236",
          "rank_by_count": 236,
          "name": "수도권 전력 길목 뚫리나… 동서울변환소 증설 '물꼬'",
          "easy": "",
          "quote": "수도권 전력 길목 뚫리나… 동서울변환소 증설 '물꼬'",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1297,
              "title": "수도권 전력 길목 뚫리나… 동서울변환소 증설 '물꼬'",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218461"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-237",
          "rank_by_count": 237,
          "name": "김정관 \"韓 1년 걸릴 사업, 中선 석달\"",
          "easy": "",
          "quote": "김정관 \"韓 1년 걸릴 사업, 中선 석달\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1298,
              "title": "김정관 \"韓 1년 걸릴 사업, 中선 석달\"",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218459"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-238",
          "rank_by_count": 238,
          "name": "10년동안 상습 담합 기업 … 공공입찰 참여 어려워진다",
          "easy": "",
          "quote": "10년동안 상습 담합 기업 … 공공입찰 참여 어려워진다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1299,
              "title": "10년동안 상습 담합 기업 … 공공입찰 참여 어려워진다",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218458"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-239",
          "rank_by_count": 239,
          "name": "[단독] 기업銀, 안내도 될 식비 세금 20년간 냈다",
          "easy": "",
          "quote": "[단독] 기업銀, 안내도 될 식비 세금 20년간 냈다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1300,
              "title": "[단독] 기업銀, 안내도 될 식비 세금 20년간 냈다",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218456"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-240",
          "rank_by_count": 240,
          "name": "5% 대출금리 시대 열렸다… 주담대 15년만에 최고",
          "easy": "",
          "quote": "5% 대출금리 시대 열렸다… 주담대 15년만에 최고",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1301,
              "title": "5% 대출금리 시대 열렸다… 주담대 15년만에 최고",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218389"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-241",
          "rank_by_count": 241,
          "name": "[단독] \"오늘 점심은 삼각김밥\"…편의점 폐업 팍 줄었네",
          "easy": "",
          "quote": "[단독] \"오늘 점심은 삼각김밥\"…편의점 폐업 팍 줄었네",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1302,
              "title": "[단독] \"오늘 점심은 삼각김밥\"…편의점 폐업 팍 줄었네",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218381"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-242",
          "rank_by_count": 242,
          "name": "AI가 ‘억울한 피해자’ 없애준다…스몰티켓, ‘車사고 과실비율 솔루션’ 공개",
          "easy": "",
          "quote": "AI가 ‘억울한 피해자’ 없애준다…스몰티켓, ‘車사고 과실비율 솔루션’ 공개",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1303,
              "title": "AI가 ‘억울한 피해자’ 없애준다…스몰티켓, ‘車사고 과실비율 솔루션’ 공개",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218370"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-243",
          "rank_by_count": 243,
          "name": "[포토] 우리銀, 남양주에 인재 육성 거점 조성",
          "easy": "",
          "quote": "[포토] 우리銀, 남양주에 인재 육성 거점 조성",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1304,
              "title": "[포토] 우리銀, 남양주에 인재 육성 거점 조성",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218310"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-244",
          "rank_by_count": 244,
          "name": "\"살아있을 때 상속 설계\"…유언대용신탁 9조 육박",
          "easy": "",
          "quote": "\"살아있을 때 상속 설계\"…유언대용신탁 9조 육박",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1305,
              "title": "\"살아있을 때 상속 설계\"…유언대용신탁 9조 육박",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218308"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-245",
          "rank_by_count": 245,
          "name": "[표] 외국환율고시표",
          "easy": "",
          "quote": "[표] 외국환율고시표",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1306,
              "title": "[표] 외국환율고시표",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218309"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-246",
          "rank_by_count": 246,
          "name": "\"AI해킹 막자\" 5대銀 보안예산 55% 증액",
          "easy": "",
          "quote": "\"AI해킹 막자\" 5대銀 보안예산 55% 증액",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1307,
              "title": "\"AI해킹 막자\" 5대銀 보안예산 55% 증액",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218307"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-247",
          "rank_by_count": 247,
          "name": "골목사장 신용평가 '매출+현금흐름' 본다",
          "easy": "",
          "quote": "골목사장 신용평가 '매출+현금흐름' 본다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1308,
              "title": "골목사장 신용평가 '매출+현금흐름' 본다",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218305"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-248",
          "rank_by_count": 248,
          "name": "씨티은행 블록체인 활용해 삼성물산 해외법인 자금 이체",
          "easy": "",
          "quote": "씨티은행 블록체인 활용해 삼성물산 해외법인 자금 이체",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1309,
              "title": "씨티은행 블록체인 활용해 삼성물산 해외법인 자금 이체",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218306"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-249",
          "rank_by_count": 249,
          "name": "부동산 세제 개편 정부안에…국회 “매매·전월세 매물 줄어들 우려”",
          "easy": "",
          "quote": "부동산 세제 개편 정부안에…국회 “매매·전월세 매물 줄어들 우려”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1310,
              "title": "부동산 세제 개편 정부안에…국회 “매매·전월세 매물 줄어들 우려”",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218282"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-250",
          "rank_by_count": 250,
          "name": "“시럽급여 달달했지? 이제 2배로 뱉어내”…부울경 실업급여 부정수급 적발",
          "easy": "",
          "quote": "“시럽급여 달달했지? 이제 2배로 뱉어내”…부울경 실업급여 부정수급 적발",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1311,
              "title": "“시럽급여 달달했지? 이제 2배로 뱉어내”…부울경 실업급여 부정수급 적발",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218280"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-251",
          "rank_by_count": 251,
          "name": "정부, 말차 산업 새 성장동력으로 키운다…“2031년 茶수출 3500만불”",
          "easy": "",
          "quote": "정부, 말차 산업 새 성장동력으로 키운다…“2031년 茶수출 3500만불”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1312,
              "title": "정부, 말차 산업 새 성장동력으로 키운다…“2031년 茶수출 3500만불”",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218251"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-252",
          "rank_by_count": 252,
          "name": "유수영 신용정보원장 “AI 기술보다 이용자 필요가 먼저”",
          "easy": "",
          "quote": "유수영 신용정보원장 “AI 기술보다 이용자 필요가 먼저”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1313,
              "title": "유수영 신용정보원장 “AI 기술보다 이용자 필요가 먼저”",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218247"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-253",
          "rank_by_count": 253,
          "name": "NH농협금융 ‘NH올원더풀’ 1주년 감사제…세대 잇는 상생 금융 행보",
          "easy": "",
          "quote": "NH농협금융 ‘NH올원더풀’ 1주년 감사제…세대 잇는 상생 금융 행보",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1314,
              "title": "NH농협금융 ‘NH올원더풀’ 1주년 감사제…세대 잇는 상생 금융 행보",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218245"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-254",
          "rank_by_count": 254,
          "name": "말 앞선 정부 증시 방어책…실효성 우려",
          "easy": "",
          "quote": "말 앞선 정부 증시 방어책…실효성 우려",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1315,
              "title": "말 앞선 정부 증시 방어책…실효성 우려",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218180"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-255",
          "rank_by_count": 255,
          "name": "금융당국, ‘디지털 뱅크런’ 대비 첫 합동훈련",
          "easy": "",
          "quote": "금융당국, ‘디지털 뱅크런’ 대비 첫 합동훈련",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1316,
              "title": "금융당국, ‘디지털 뱅크런’ 대비 첫 합동훈련",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218092"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-256",
          "rank_by_count": 256,
          "name": "3분기 중견기업 수출 또 최고치 경신...반도체·바이오가 실적 견인",
          "easy": "",
          "quote": "3분기 중견기업 수출 또 최고치 경신...반도체·바이오가 실적 견인",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1317,
              "title": "3분기 중견기업 수출 또 최고치 경신...반도체·바이오가 실적 견인",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218110"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-257",
          "rank_by_count": 257,
          "name": "보험료 수입은 늘었는데…보험사 순익 8% ‘뚝’ 왜?",
          "easy": "",
          "quote": "보험료 수입은 늘었는데…보험사 순익 8% ‘뚝’ 왜?",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1318,
              "title": "보험료 수입은 늘었는데…보험사 순익 8% ‘뚝’ 왜?",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/economy/12218094"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-258",
          "rank_by_count": 258,
          "name": "국힘 “보유세 올리면 세입자 추가부담 4005억…93%는 무주택자 몫”",
          "easy": "",
          "quote": "국힘 “보유세 올리면 세입자 추가부담 4005억…93%는 무주택자 몫”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1319,
              "title": "국힘 “보유세 올리면 세입자 추가부담 4005억…93%는 무주택자 몫”",
              "source_name": "매일경제 경제",
              "link": "https://www.mk.co.kr/news/politics/12218070"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-259",
          "rank_by_count": 259,
          "name": "“AI ETF 들어간 동료들, 말을 잃었습니다”…와중에 인기있는 상품은",
          "easy": "",
          "quote": "“AI ETF 들어간 동료들, 말을 잃었습니다”…와중에 인기있는 상품은",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1320,
              "title": "“AI ETF 들어간 동료들, 말을 잃었습니다”…와중에 인기있는 상품은",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218698"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-260",
          "rank_by_count": 260,
          "name": "“삼성전자 반값됐는데 망했나요?”…존 리가 개미들에게 던진 질문은",
          "easy": "",
          "quote": "“삼성전자 반값됐는데 망했나요?”…존 리가 개미들에게 던진 질문은",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1321,
              "title": "“삼성전자 반값됐는데 망했나요?”…존 리가 개미들에게 던진 질문은",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/business/12218696"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-261",
          "rank_by_count": 261,
          "name": "이틀에 한 번 꼴로 사이드카 울렸다…널뛰는 코스피에 개미들 ‘공황’",
          "easy": "",
          "quote": "이틀에 한 번 꼴로 사이드카 울렸다…널뛰는 코스피에 개미들 ‘공황’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1322,
              "title": "이틀에 한 번 꼴로 사이드카 울렸다…널뛰는 코스피에 개미들 ‘공황’",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218652"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-262",
          "rank_by_count": 262,
          "name": "“하이닉스 2028년 이익 급감”…반도체 저승사자의 섬뜩한 예측[머니닥터 시장진단]",
          "easy": "",
          "quote": "“하이닉스 2028년 이익 급감”…반도체 저승사자의 섬뜩한 예측[머니닥터 시장진단]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1323,
              "title": "“하이닉스 2028년 이익 급감”…반도체 저승사자의 섬뜩한 예측[머니닥터 시장진단]",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218640"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-263",
          "rank_by_count": 263,
          "name": "‘젠슨 황 귀환’에도 AI 랠리에서 소외…앤트로픽은 홀로 부진한 이유[이슈 플러스]",
          "easy": "",
          "quote": "‘젠슨 황 귀환’에도 AI 랠리에서 소외…앤트로픽은 홀로 부진한 이유[이슈 플러스]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1324,
              "title": "‘젠슨 황 귀환’에도 AI 랠리에서 소외…앤트로픽은 홀로 부진한 이유[이슈 플러스]",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218621"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-264",
          "rank_by_count": 264,
          "name": "코웨이, 글로벌 펀드매니저 유망종목으로 ‘픽’",
          "easy": "",
          "quote": "코웨이, 글로벌 펀드매니저 유망종목으로 ‘픽’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1326,
              "title": "코웨이, 글로벌 펀드매니저 유망종목으로 ‘픽’",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218503"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-265",
          "rank_by_count": 265,
          "name": "[단독] 박현주, 코스피 무너진날 “10조 증안펀드, 100조로 키우자” 제안",
          "easy": "",
          "quote": "[단독] 박현주, 코스피 무너진날 “10조 증안펀드, 100조로 키우자” 제안",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1327,
              "title": "[단독] 박현주, 코스피 무너진날 “10조 증안펀드, 100조로 키우자” 제안",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218470"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-266",
          "rank_by_count": 266,
          "name": "AI투심 하루 만에 꽁꽁 … 앤트로픽 주가, 상장 나흘만에 공모가 하회",
          "easy": "",
          "quote": "AI투심 하루 만에 꽁꽁 … 앤트로픽 주가, 상장 나흘만에 공모가 하회",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1328,
              "title": "AI투심 하루 만에 꽁꽁 … 앤트로픽 주가, 상장 나흘만에 공모가 하회",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218468"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-267",
          "rank_by_count": 267,
          "name": "[단독] \"現10조 증안펀드 100조로 키우자\"",
          "easy": "",
          "quote": "[단독] \"現10조 증안펀드 100조로 키우자\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1329,
              "title": "[단독] \"現10조 증안펀드 100조로 키우자\"",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218454"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-268",
          "rank_by_count": 268,
          "name": "[포토] 코스피 10개월만에 4600대",
          "easy": "",
          "quote": "[포토] 코스피 10개월만에 4600대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1330,
              "title": "[포토] 코스피 10개월만에 4600대",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218452"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-269",
          "rank_by_count": 269,
          "name": "작년 5회였는데…올해 102회, 이틀에 한번꼴 울린 사이드카",
          "easy": "",
          "quote": "작년 5회였는데…올해 102회, 이틀에 한번꼴 울린 사이드카",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1331,
              "title": "작년 5회였는데…올해 102회, 이틀에 한번꼴 울린 사이드카",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218444"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-270",
          "rank_by_count": 270,
          "name": "예탁자금 5개월새 88조 줄어",
          "easy": "",
          "quote": "예탁자금 5개월새 88조 줄어",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1332,
              "title": "예탁자금 5개월새 88조 줄어",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218445"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-271",
          "rank_by_count": 271,
          "name": "H&L어드밴스드, 1조원 조달",
          "easy": "",
          "quote": "H&L어드밴스드, 1조원 조달",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1333,
              "title": "H&L어드밴스드, 1조원 조달",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218415"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-272",
          "rank_by_count": 272,
          "name": "ETF도 '위험회피'… 파킹형·커버드콜 사들여",
          "easy": "",
          "quote": "ETF도 '위험회피'… 파킹형·커버드콜 사들여",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1334,
              "title": "ETF도 '위험회피'… 파킹형·커버드콜 사들여",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218410"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-273",
          "rank_by_count": 273,
          "name": "금감원, 종투사 모험자본 인정범위 확대",
          "easy": "",
          "quote": "금감원, 종투사 모험자본 인정범위 확대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1335,
              "title": "금감원, 종투사 모험자본 인정범위 확대",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218411"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-274",
          "rank_by_count": 274,
          "name": "급락장 뚫고 … 에이피알 나홀로 웃었다",
          "easy": "",
          "quote": "급락장 뚫고 … 에이피알 나홀로 웃었다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1336,
              "title": "급락장 뚫고 … 에이피알 나홀로 웃었다",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218408"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-275",
          "rank_by_count": 275,
          "name": "반도체 다음은 피지컬 AI?…현대차·삼성·LG 로봇사업 투자 상품 눈길",
          "easy": "",
          "quote": "반도체 다음은 피지컬 AI?…현대차·삼성·LG 로봇사업 투자 상품 눈길",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1337,
              "title": "반도체 다음은 피지컬 AI?…현대차·삼성·LG 로봇사업 투자 상품 눈길",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218276"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-276",
          "rank_by_count": 276,
          "name": "SK, SK에코플랜트 장외매수…지분율 98.2%로 확대",
          "easy": "",
          "quote": "SK, SK에코플랜트 장외매수…지분율 98.2%로 확대",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1338,
              "title": "SK, SK에코플랜트 장외매수…지분율 98.2%로 확대",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218273"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-277",
          "rank_by_count": 277,
          "name": "삼성전자 보통주·우선주 담은 초고수들…SK하이닉스는 순매수 2위서 5시간 만에 순매도 2위로 [주식 초고수는 지금]",
          "easy": "",
          "quote": "삼성전자 보통주·우선주 담은 초고수들…SK하이닉스는 순매수 2위서 5시간 만에 순매도 2위로 [주식 초고수는 지금]",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1339,
              "title": "삼성전자 보통주·우선주 담은 초고수들…SK하이닉스는 순매수 2위서 5시간 만에 순매도 2위로 [주식 초고수는 지금]",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218169"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-278",
          "rank_by_count": 278,
          "name": "에그코스메틱, 인니 BPOM 화장품 판매허가 획득…동남아·글로벌 공략 가속",
          "easy": "",
          "quote": "에그코스메틱, 인니 BPOM 화장품 판매허가 획득…동남아·글로벌 공략 가속",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1340,
              "title": "에그코스메틱, 인니 BPOM 화장품 판매허가 획득…동남아·글로벌 공략 가속",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218158"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-279",
          "rank_by_count": 279,
          "name": "“한 달 주가 흐름과 주요 변동 원인 한눈에”…토스증권, ‘AI 시그널’ 고도화",
          "easy": "",
          "quote": "“한 달 주가 흐름과 주요 변동 원인 한눈에”…토스증권, ‘AI 시그널’ 고도화",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1342,
              "title": "“한 달 주가 흐름과 주요 변동 원인 한눈에”…토스증권, ‘AI 시그널’ 고도화",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218105"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-280",
          "rank_by_count": 280,
          "name": "비씨월드제약, KPC ESG 진단 종합 ‘A등급’…사회 부문 노동·안전보건 ‘A+’",
          "easy": "",
          "quote": "비씨월드제약, KPC ESG 진단 종합 ‘A등급’…사회 부문 노동·안전보건 ‘A+’",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1343,
              "title": "비씨월드제약, KPC ESG 진단 종합 ‘A등급’…사회 부문 노동·안전보건 ‘A+’",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218034"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-281",
          "rank_by_count": 281,
          "name": "한미사이언스 주주 DXVX, 대표이사·감사위원장 배임 혐의 고소",
          "easy": "",
          "quote": "한미사이언스 주주 DXVX, 대표이사·감사위원장 배임 혐의 고소",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1344,
              "title": "한미사이언스 주주 DXVX, 대표이사·감사위원장 배임 혐의 고소",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218030"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-282",
          "rank_by_count": 282,
          "name": "뉴온, ‘목련꽃봉오리추출물’ 담은 잇몸 건기식 ‘잇몸탄탄’ 출시",
          "easy": "",
          "quote": "뉴온, ‘목련꽃봉오리추출물’ 담은 잇몸 건기식 ‘잇몸탄탄’ 출시",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1345,
              "title": "뉴온, ‘목련꽃봉오리추출물’ 담은 잇몸 건기식 ‘잇몸탄탄’ 출시",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12218008"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-283",
          "rank_by_count": 283,
          "name": "증시는 급락하는데 보안株는 ‘불기둥’…해킹 공포에 나홀로 급등",
          "easy": "",
          "quote": "증시는 급락하는데 보안株는 ‘불기둥’…해킹 공포에 나홀로 급등",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1346,
              "title": "증시는 급락하는데 보안株는 ‘불기둥’…해킹 공포에 나홀로 급등",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12217941"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-284",
          "rank_by_count": 284,
          "name": "AI쇼크 현실로…“신입 회계사 채용 수요 매년 최대 8.5% 감소”",
          "easy": "",
          "quote": "AI쇼크 현실로…“신입 회계사 채용 수요 매년 최대 8.5% 감소”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1347,
              "title": "AI쇼크 현실로…“신입 회계사 채용 수요 매년 최대 8.5% 감소”",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12217920"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-285",
          "rank_by_count": 285,
          "name": "금리·AI 수익성 우려에 관세까지 … 여의도 족집게 “반등 시그널 이때 나온다”",
          "easy": "",
          "quote": "금리·AI 수익성 우려에 관세까지 … 여의도 족집게 “반등 시그널 이때 나온다”",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1348,
              "title": "금리·AI 수익성 우려에 관세까지 … 여의도 족집게 “반등 시그널 이때 나온다”",
              "source_name": "매일경제 증권",
              "link": "https://www.mk.co.kr/news/stock/12217833"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-286",
          "rank_by_count": 286,
          "name": "민주노총 위원장 선거 결선으로…양경수·엄길용 2파전",
          "easy": "",
          "quote": "민주노총 위원장 선거 결선으로…양경수·엄길용 2파전",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1349,
              "title": "민주노총 위원장 선거 결선으로…양경수·엄길용 2파전",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261126001900530"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-287",
          "rank_by_count": 287,
          "name": "10조원대 증안펀드 확대되나…산은, 금융사 추가 출자 타진",
          "easy": "",
          "quote": "10조원대 증안펀드 확대되나…산은, 금융사 추가 출자 타진",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1351,
              "title": "10조원대 증안펀드 확대되나…산은, 금융사 추가 출자 타진",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125183800002"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-288",
          "rank_by_count": 288,
          "name": "임금 1.9억 체불하고 24년간 미국 도피…국내 입국 한달만 구속",
          "easy": "",
          "quote": "임금 1.9억 체불하고 24년간 미국 도피…국내 입국 한달만 구속",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1352,
              "title": "임금 1.9억 체불하고 24년간 미국 도피…국내 입국 한달만 구속",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125182700530"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-289",
          "rank_by_count": 289,
          "name": "2030년까지 수도권에 아파트 발주 182조원…50만호 착공(종합)",
          "easy": "",
          "quote": "2030년까지 수도권에 아파트 발주 182조원…50만호 착공(종합)",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1353,
              "title": "2030년까지 수도권에 아파트 발주 182조원…50만호 착공(종합)",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125168651001"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-290",
          "rank_by_count": 290,
          "name": "서울시·국토부, 정비사업 규제완화 놓고 '장외 공방'(종합)",
          "easy": "",
          "quote": "서울시·국토부, 정비사업 규제완화 놓고 '장외 공방'(종합)",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1354,
              "title": "서울시·국토부, 정비사업 규제완화 놓고 '장외 공방'(종합)",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125122851003"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-291",
          "rank_by_count": 291,
          "name": "LH \"5년간 공적주택 50만호 착공\"…李대통령 \"초과 달성하라\"",
          "easy": "",
          "quote": "LH \"5년간 공적주택 50만호 착공\"…李대통령 \"초과 달성하라\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1355,
              "title": "LH \"5년간 공적주택 50만호 착공\"…李대통령 \"초과 달성하라\"",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125168600001"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-292",
          "rank_by_count": 292,
          "name": "한경협 류진 연임 가능성 시사…\"현장 고생하는데 놀 순 없어\"",
          "easy": "",
          "quote": "한경협 류진 연임 가능성 시사…\"현장 고생하는데 놀 순 없어\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1356,
              "title": "한경협 류진 연임 가능성 시사…\"현장 고생하는데 놀 순 없어\"",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125170600003"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-293",
          "rank_by_count": 293,
          "name": "삼일·안진·한영 회계사 3명 제재…감사 정보 외부 누설",
          "easy": "",
          "quote": "삼일·안진·한영 회계사 3명 제재…감사 정보 외부 누설",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1357,
              "title": "삼일·안진·한영 회계사 3명 제재…감사 정보 외부 누설",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125171000002"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-294",
          "rank_by_count": 294,
          "name": "미공개중요정보로 1.8억 부당이득…코스닥社 임직원 중수청 통보",
          "easy": "",
          "quote": "미공개중요정보로 1.8억 부당이득…코스닥社 임직원 중수청 통보",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1358,
              "title": "미공개중요정보로 1.8억 부당이득…코스닥社 임직원 중수청 통보",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125167400002"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-295",
          "rank_by_count": 295,
          "name": "'국내 와인 수입사 첫 상장' 나라셀라, 소주 시장 진출",
          "easy": "",
          "quote": "'국내 와인 수입사 첫 상장' 나라셀라, 소주 시장 진출",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1359,
              "title": "'국내 와인 수입사 첫 상장' 나라셀라, 소주 시장 진출",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125166800030"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-296",
          "rank_by_count": 296,
          "name": "안전문화 우수사례 대상에 KT…성심당·제주노사민정협 최우수상",
          "easy": "",
          "quote": "안전문화 우수사례 대상에 KT…성심당·제주노사민정협 최우수상",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1361,
              "title": "안전문화 우수사례 대상에 KT…성심당·제주노사민정협 최우수상",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125165100530"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-297",
          "rank_by_count": 297,
          "name": "박홍근 \"'교황 방한' 2027 세계청년대회, 국격 높이도록 지원\"",
          "easy": "",
          "quote": "박홍근 \"'교황 방한' 2027 세계청년대회, 국격 높이도록 지원\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1362,
              "title": "박홍근 \"'교황 방한' 2027 세계청년대회, 국격 높이도록 지원\"",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125165000002"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-298",
          "rank_by_count": 298,
          "name": "[연합뉴스 이 시각 헤드라인] - 18:00",
          "easy": "",
          "quote": "[연합뉴스 이 시각 헤드라인] - 18:00",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1363,
              "title": "[연합뉴스 이 시각 헤드라인] - 18:00",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125155400011"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-299",
          "rank_by_count": 299,
          "name": "KT, 안전문화 확산 공로로 고용노동부 장관상 수상",
          "easy": "",
          "quote": "KT, 안전문화 확산 공로로 고용노동부 장관상 수상",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1364,
              "title": "KT, 안전문화 확산 공로로 고용노동부 장관상 수상",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125161500017"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-300",
          "rank_by_count": 300,
          "name": "황종우 해수장관, 국가 어업지도선 '무궁화 10호' 취항 축하",
          "easy": "",
          "quote": "황종우 해수장관, 국가 어업지도선 '무궁화 10호' 취항 축하",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1365,
              "title": "황종우 해수장관, 국가 어업지도선 '무궁화 10호' 취항 축하",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125164100030"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-301",
          "rank_by_count": 301,
          "name": "산업장관 \"중국에 밀릴 수도…52시간 특례 내일이라도 시작해야\"",
          "easy": "",
          "quote": "산업장관 \"중국에 밀릴 수도…52시간 특례 내일이라도 시작해야\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1366,
              "title": "산업장관 \"중국에 밀릴 수도…52시간 특례 내일이라도 시작해야\"",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125163400003"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-302",
          "rank_by_count": 302,
          "name": "통화내용 듣고 보이스피싱 직감…은행원이 840만원 피해 막아",
          "easy": "",
          "quote": "통화내용 듣고 보이스피싱 직감…은행원이 840만원 피해 막아",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1367,
              "title": "통화내용 듣고 보이스피싱 직감…은행원이 840만원 피해 막아",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125152300054"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-303",
          "rank_by_count": 303,
          "name": "광화문 오피스 케이트윈타워, 1조원에 이지스운용이 인수",
          "easy": "",
          "quote": "광화문 오피스 케이트윈타워, 1조원에 이지스운용이 인수",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1368,
              "title": "광화문 오피스 케이트윈타워, 1조원에 이지스운용이 인수",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125155300003"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-304",
          "rank_by_count": 304,
          "name": "농식품부, K-뷰티·그린바이오 협력 확대…소재 산업화 지원",
          "easy": "",
          "quote": "농식품부, K-뷰티·그린바이오 협력 확대…소재 산업화 지원",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1369,
              "title": "농식품부, K-뷰티·그린바이오 협력 확대…소재 산업화 지원",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125149000030"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-305",
          "rank_by_count": 305,
          "name": "전남광주 반도체 건설인력 주거대책 마련…모듈러 주택도 검토",
          "easy": "",
          "quote": "전남광주 반도체 건설인력 주거대책 마련…모듈러 주택도 검토",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1370,
              "title": "전남광주 반도체 건설인력 주거대책 마련…모듈러 주택도 검토",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125157200054"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-306",
          "rank_by_count": 306,
          "name": "李대통령 \"공적임대주택, 중산층도 선택하는 주거사다리 역할\"",
          "easy": "",
          "quote": "李대통령 \"공적임대주택, 중산층도 선택하는 주거사다리 역할\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1371,
              "title": "李대통령 \"공적임대주택, 중산층도 선택하는 주거사다리 역할\"",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125141300001"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-307",
          "rank_by_count": 307,
          "name": "'금통위 D-1' 국고채 금리 일제히 하락…3년물 연 3.583%(종합)",
          "easy": "",
          "quote": "'금통위 D-1' 국고채 금리 일제히 하락…3년물 연 3.583%(종합)",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1372,
              "title": "'금통위 D-1' 국고채 금리 일제히 하락…3년물 연 3.583%(종합)",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125149151008"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-308",
          "rank_by_count": 308,
          "name": "여성기업계 \"AI 활용 위해 중소기업 지원 확대 필요\"",
          "easy": "",
          "quote": "여성기업계 \"AI 활용 위해 중소기업 지원 확대 필요\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1373,
              "title": "여성기업계 \"AI 활용 위해 중소기업 지원 확대 필요\"",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125030000003"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-309",
          "rank_by_count": 309,
          "name": "청주 옛 국정원 부지에 복합문화공간·공공주차장 조성키로",
          "easy": "",
          "quote": "청주 옛 국정원 부지에 복합문화공간·공공주차장 조성키로",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1375,
              "title": "청주 옛 국정원 부지에 복합문화공간·공공주차장 조성키로",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125148300064"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-310",
          "rank_by_count": 310,
          "name": "국고채 금리 일제히 하락…3년물 연 3.583%",
          "easy": "",
          "quote": "국고채 금리 일제히 하락…3년물 연 3.583%",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1376,
              "title": "국고채 금리 일제히 하락…3년물 연 3.583%",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125149100008"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-311",
          "rank_by_count": 311,
          "name": "[게시판] 한국신용정보원, 한국에너지공단과 데이터 협력 세미나",
          "easy": "",
          "quote": "[게시판] 한국신용정보원, 한국에너지공단과 데이터 협력 세미나",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1377,
              "title": "[게시판] 한국신용정보원, 한국에너지공단과 데이터 협력 세미나",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125144300002"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-312",
          "rank_by_count": 312,
          "name": "우리은행, 남양주 다산연수원 기공식…\"지역 상생 공간 조성\"",
          "easy": "",
          "quote": "우리은행, 남양주 다산연수원 기공식…\"지역 상생 공간 조성\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1378,
              "title": "우리은행, 남양주 다산연수원 기공식…\"지역 상생 공간 조성\"",
              "source_name": "연합뉴스 경제",
              "link": "https://www.yna.co.kr/view/AKR20261125112600002"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-313",
          "rank_by_count": 313,
          "name": "뉴욕증시, AI 매도세·관세 우려에 하락 출발",
          "easy": "",
          "quote": "뉴욕증시, AI 매도세·관세 우려에 하락 출발",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1379,
              "title": "뉴욕증시, AI 매도세·관세 우려에 하락 출발",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125188100009"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-314",
          "rank_by_count": 314,
          "name": "EU, 美·中에 맞설 500억 유로 '소버린 기술펀드' 추진(종합)",
          "easy": "",
          "quote": "EU, 美·中에 맞설 500억 유로 '소버린 기술펀드' 추진(종합)",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1381,
              "title": "EU, 美·中에 맞설 500억 유로 '소버린 기술펀드' 추진(종합)",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125125351009"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-315",
          "rank_by_count": 315,
          "name": "빗썸, 해킹 피해 추가 확인…보름 동안 해킹 사실 몰랐다",
          "easy": "",
          "quote": "빗썸, 해킹 피해 추가 확인…보름 동안 해킹 사실 몰랐다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1382,
              "title": "빗썸, 해킹 피해 추가 확인…보름 동안 해킹 사실 몰랐다",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125176100002"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-316",
          "rank_by_count": 316,
          "name": "다올증권, 경영권 매각 추진…회사측은 \"구체적 결정사항 없어\"",
          "easy": "",
          "quote": "다올증권, 경영권 매각 추진…회사측은 \"구체적 결정사항 없어\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1384,
              "title": "다올증권, 경영권 매각 추진…회사측은 \"구체적 결정사항 없어\"",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125151500008"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-317",
          "rank_by_count": 317,
          "name": "SK아이이테크놀로지, 애프터마켓서 10%대 급등",
          "easy": "",
          "quote": "SK아이이테크놀로지, 애프터마켓서 10%대 급등",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1385,
              "title": "SK아이이테크놀로지, 애프터마켓서 10%대 급등",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125153100008"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-318",
          "rank_by_count": 318,
          "name": "日증시, 젠슨 황 효과 하루 만에 증발…닛케이 2.78% 급락 마감(종합)",
          "easy": "",
          "quote": "日증시, 젠슨 황 효과 하루 만에 증발…닛케이 2.78% 급락 마감(종합)",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1386,
              "title": "日증시, 젠슨 황 효과 하루 만에 증발…닛케이 2.78% 급락 마감(종합)",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125096051009"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-319",
          "rank_by_count": 319,
          "name": "[표] 코스피 지수선물·옵션 시세표(25일)-3",
          "easy": "",
          "quote": "[표] 코스피 지수선물·옵션 시세표(25일)-3",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1387,
              "title": "[표] 코스피 지수선물·옵션 시세표(25일)-3",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125146800008"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-320",
          "rank_by_count": 320,
          "name": "[표] 코스피 지수선물·옵션 시세표(25일)-2",
          "easy": "",
          "quote": "[표] 코스피 지수선물·옵션 시세표(25일)-2",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1388,
              "title": "[표] 코스피 지수선물·옵션 시세표(25일)-2",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125146600008"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-321",
          "rank_by_count": 321,
          "name": "[표] 코스피 지수선물·옵션 시세표(25일)-1",
          "easy": "",
          "quote": "[표] 코스피 지수선물·옵션 시세표(25일)-1",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1389,
              "title": "[표] 코스피 지수선물·옵션 시세표(25일)-1",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125146700008"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-322",
          "rank_by_count": 322,
          "name": "반도체주 급락에 인버스 ETF 수익률 상위권 장악…화장품도 강세",
          "easy": "",
          "quote": "반도체주 급락에 인버스 ETF 수익률 상위권 장악…화장품도 강세",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1390,
              "title": "반도체주 급락에 인버스 ETF 수익률 상위권 장악…화장품도 강세",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125143100008"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-323",
          "rank_by_count": 323,
          "name": "[특징주] 보안주, 국내외 잇단 해킹 피해에 급등(종합)",
          "easy": "",
          "quote": "[특징주] 보안주, 국내외 잇단 해킹 피해에 급등(종합)",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1391,
              "title": "[특징주] 보안주, 국내외 잇단 해킹 피해에 급등(종합)",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125075151008"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-324",
          "rank_by_count": 324,
          "name": "[게시판] 스틱인베스트먼트, 서스틴베스트 ESG 평가 A등급 획득",
          "easy": "",
          "quote": "[게시판] 스틱인베스트먼트, 서스틴베스트 ESG 평가 A등급 획득",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1392,
              "title": "[게시판] 스틱인베스트먼트, 서스틴베스트 ESG 평가 A등급 획득",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125142300008"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-325",
          "rank_by_count": 325,
          "name": "'젠슨황 랠리' 하루만에 끝?…메모리과잉·관세우려 투심 냉기(종합)",
          "easy": "",
          "quote": "'젠슨황 랠리' 하루만에 끝?…메모리과잉·관세우려 투심 냉기(종합)",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1393,
              "title": "'젠슨황 랠리' 하루만에 끝?…메모리과잉·관세우려 투심 냉기(종합)",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125066951008"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-326",
          "rank_by_count": 326,
          "name": "한국거래소, 상장사 이사회 대상 기업 밸류업 설명회 개최",
          "easy": "",
          "quote": "한국거래소, 상장사 이사회 대상 기업 밸류업 설명회 개최",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1395,
              "title": "한국거래소, 상장사 이사회 대상 기업 밸류업 설명회 개최",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125139300008"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-327",
          "rank_by_count": 327,
          "name": "한국내화 \"미국 법인 주식 13억원어치 취득…지분율 100%\"",
          "easy": "",
          "quote": "한국내화 \"미국 법인 주식 13억원어치 취득…지분율 100%\"",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1397,
              "title": "한국내화 \"미국 법인 주식 13억원어치 취득…지분율 100%\"",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125138400008"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-328",
          "rank_by_count": 328,
          "name": "환율, 미국 기술주 조정·외국인 순매도에 소폭 상승…1,343.2원",
          "easy": "",
          "quote": "환율, 미국 기술주 조정·외국인 순매도에 소폭 상승…1,343.2원",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1398,
              "title": "환율, 미국 기술주 조정·외국인 순매도에 소폭 상승…1,343.2원",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125137900002"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-329",
          "rank_by_count": 329,
          "name": "[특징주] 화장품주, 연말 성수기 매출성장 기대감에 강세 마감(종합)",
          "easy": "",
          "quote": "[특징주] 화장품주, 연말 성수기 매출성장 기대감에 강세 마감(종합)",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1399,
              "title": "[특징주] 화장품주, 연말 성수기 매출성장 기대감에 강세 마감(종합)",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125048251008"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-330",
          "rank_by_count": 330,
          "name": "[표] 코스닥 외국인 순매수도 상위종목(25일)",
          "easy": "",
          "quote": "[표] 코스닥 외국인 순매수도 상위종목(25일)",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1400,
              "title": "[표] 코스닥 외국인 순매수도 상위종목(25일)",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125135400008"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-331",
          "rank_by_count": 331,
          "name": "[표] 코스닥 기관 순매수도 상위종목(25일)",
          "easy": "",
          "quote": "[표] 코스닥 기관 순매수도 상위종목(25일)",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1401,
              "title": "[표] 코스닥 기관 순매수도 상위종목(25일)",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125135600008"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-332",
          "rank_by_count": 332,
          "name": "[표] 거래소 외국인 순매수도 상위종목(25일)",
          "easy": "",
          "quote": "[표] 거래소 외국인 순매수도 상위종목(25일)",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1402,
              "title": "[표] 거래소 외국인 순매수도 상위종목(25일)",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125135500008"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-333",
          "rank_by_count": 333,
          "name": "[표] 거래소 기관 순매수도 상위종목(25일)",
          "easy": "",
          "quote": "[표] 거래소 기관 순매수도 상위종목(25일)",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1403,
              "title": "[표] 거래소 기관 순매수도 상위종목(25일)",
              "source_name": "연합뉴스 마켓+",
              "link": "https://www.yna.co.kr/view/AKR20261125135700008"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-334",
          "rank_by_count": 334,
          "name": "ECB and Sveriges Riksbank conclude agreement for Sweden to join T2",
          "easy": "",
          "quote": "ECB and Sveriges Riksbank conclude agreement for Sweden to join T2",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1418,
              "title": "ECB and Sveriges Riksbank conclude agreement for Sweden to join T2",
              "source_name": "ECB 보도자료",
              "link": "https://www.ecb.europa.eu//press/pr/date/2026/html/ecb.pr261125_1~6333a90f3a.en.html"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-335",
          "rank_by_count": 335,
          "name": "Card payments edge past cash in shops; euro area consumers want both",
          "easy": "",
          "quote": "Card payments edge past cash in shops; euro area consumers want both",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1419,
              "title": "Card payments edge past cash in shops; euro area consumers want both",
              "source_name": "ECB 보도자료",
              "link": "https://www.ecb.europa.eu//press/pr/date/2026/html/ecb.pr261125~26d1ade228.en.html"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-336",
          "rank_by_count": 336,
          "name": "Basel Committee publishes more details on the 2026 assessment of global systemically important banks",
          "easy": "",
          "quote": "Basel Committee publishes more details on the 2026 assessment of global systemically important banks",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1433,
              "title": "Basel Committee publishes more details on the 2026 assessment of global systemically important banks",
              "source_name": "BIS 보도자료",
              "link": "https://www.bis.org/media-releases/20261125-basel-committee-publishes-more-details-2026-assessment-global-systemically-important-banks"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-337",
          "rank_by_count": 337,
          "name": "퀀텀 아트, 마크 솔로몬·탈 인바르 영입…양자컴퓨팅 상용화 추진",
          "easy": "",
          "quote": "퀀텀 아트, 마크 솔로몬·탈 인바르 영입…양자컴퓨팅 상용화 추진",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1436,
              "title": "퀀텀 아트, 마크 솔로몬·탈 인바르 영입…양자컴퓨팅 상용화 추진 - 양자신문",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1RU2VFaFo3NkRWa1VrYWowdm1fREdfZW5SU1JucWdyUDRsMXlKb2gtT01NcWphQ0JVVVJDLXZKaHJ2c1YzNTZ3dU9hcldEblphaFRLclpxN3BGUTgzOHhkV0dMUm5IeHozOHFYWGg1bw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-338",
          "rank_by_count": 338,
          "name": "양자 칩, 전자 피부, 그리고 미래 기술의 새로운 방향.",
          "easy": "",
          "quote": "양자 칩, 전자 피부, 그리고 미래 기술의 새로운 방향.",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1440,
              "title": "양자 칩, 전자 피부, 그리고 미래 기술의 새로운 방향. - Vietnam.vn",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPb0g2eUI0R1p6MXVhY29EYlpwUXhQb2gzM3dVTzg3cDk4cWtWMVpuWXZ2R05uUHAtQk91VjA0WlJ2dXFqQWg4amFVeUpBOFBYdlFtMV9RenNkM2tPTjZoWnRldWhaYnRpQmpqQWN5b0J6Z3NIRlhVTExPa3U5OVVReERGWG1TRDdGT29EUUpjWndPTHcxS3E0SkVhYVk?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-339",
          "rank_by_count": 339,
          "name": "아시아 첫 양자산업 전시회 인천 송도서 개막...77개 기업 글로벌 기술 경쟁",
          "easy": "",
          "quote": "아시아 첫 양자산업 전시회 인천 송도서 개막...77개 기업 글로벌 기술 경쟁",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1443,
              "title": "아시아 첫 양자산업 전시회 인천 송도서 개막...77개 기업 글로벌 기술 경쟁 - 경인신문",
              "source_name": "'양자컴퓨팅 기술 상용화'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFB5bUl0ZU1uSGpnYUlETkhJWC11bVF0VjJWZEtkUXhaTlFxRVIxa0djSHRvcnJtaU5LT3lfNUFRU3FERl9kcHMxMUZXeGJ0U25iWjltbTBqNHdveGRTeEdGb3Z3OW5rNTg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-340",
          "rank_by_count": 340,
          "name": "대웅제약, 차세대 표적항암제 DWP216262 임상 승인",
          "easy": "",
          "quote": "대웅제약, 차세대 표적항암제 DWP216262 임상 승인",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1444,
              "title": "대웅제약, 차세대 표적항암제 DWP216262 임상 승인 - 글로벌경제신문",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE1Vb0ZVbUVRd1U0WHFXNXZjV2hKUW56RTBzWExCVE1NcVFCcnl0VVhsUDNPNmZtTWZDd0I0b3k2eU1SNm55MkVMYndOQWkwbkZrNE5xZkFZUW5NUkxEQnlLcnA5bVhDM2xfRE03cdIBcEFVX3lxTE1zSHg2LXVqRHdLVVJyRGJhNnFMMWE5TGNRcmRKOVByeThXbjI3M2paY3hMOEJvRENlVlI3QlVRTHBXOExLdXB3TFBGVXBDazE5bFJwNVBlVHREbGs3NGYzLWozRFZzTWNoSFk4N1RxNUU?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-341",
          "rank_by_count": 341,
          "name": "대웅제약, 차세대 표적항암제 'DWP216262' 임상 1상 승인",
          "easy": "",
          "quote": "대웅제약, 차세대 표적항암제 'DWP216262' 임상 1상 승인",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1448,
              "title": "대웅제약, 차세대 표적항암제 'DWP216262' 임상 1상 승인 - FETV",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBCMk4yaEF4QmM0YmlBMllKdDREcDI4YlVtXzdqZzVubW5OMHhlWXk3MkdHRldPZG8wd1lrYWh4X3FnWE00QzN3YjFvLWR5a0VaRmM5dEFFcUF1ek1qclV6YUJ2ZXZrenVE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-342",
          "rank_by_count": 342,
          "name": "미국 바이오주 무더기 폭등…아피메즈 54% 뛰자 국내 제약주도 급등 무게",
          "easy": "",
          "quote": "미국 바이오주 무더기 폭등…아피메즈 54% 뛰자 국내 제약주도 급등 무게",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1450,
              "title": "미국 바이오주 무더기 폭등…아피메즈 54% 뛰자 국내 제약주도 급등 무게 - 핀포인트뉴스",
              "source_name": "'바이오의약품 임상 승인'",
              "link": "https://news.google.com/rss/articles/CBMid0FVX3lxTE5QWEd3djB4bTItcXVGakFYd3hQT0FoRmFKNmU1elVFWE0xZGFnbzdZanRlRE9aaVY4Um9WbVVwRk5LSDctNVcxNlJVcGRjblg2QUhJNjdUUUVqTXRPSjl2Nlo5N1I2clZlQTF5ZWpnandfR1k0bXdV0gF3QVVfeXFMTlBYR3d2MHhtMi1xdUZqQVh3eFBPQWhGYUo2ZTV6VUVYTTFkYWdvN1lqdGVET1ppVjhSb1ZtVXBGTktINy01VzE2UlVwZGNuWDZBSEk2N1RRRWpNdE9KOXY2Wjk3UjZyVmVBMXllamdqd19HWTRtd1U?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-343",
          "rank_by_count": 343,
          "name": "中 뇌-컴퓨터 칩, 세계 첫 상용화 넘어 판매 확대…美 뉴럴링크와 의료시장 선점 경쟁",
          "easy": "",
          "quote": "中 뇌-컴퓨터 칩, 세계 첫 상용화 넘어 판매 확대…美 뉴럴링크와 의료시장 선점 경쟁",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1452,
              "title": "中 뇌-컴퓨터 칩, 세계 첫 상용화 넘어 판매 확대…美 뉴럴링크와 의료시장 선점 경쟁 - 이코노미사이언스",
              "source_name": "'뇌과학 BCI 기술'",
              "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1NR3pkSHExVC01SjNHem13a1dwRTVzZ1RaWHgxQ0cxYi1ma3c0dGpldkJtdzVJQzl3ZUg0UzVENldhcl9uVTI2amtTeHRxYmxaLUdxZG40QWlneDlvdHZreElaMTlXalJXTm02VE5xcw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-344",
          "rank_by_count": 344,
          "name": "“생각만으로 비행기 띄웠다”…뉴럴링크가 여는 신시장",
          "easy": "",
          "quote": "“생각만으로 비행기 띄웠다”…뉴럴링크가 여는 신시장",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1454,
              "title": "“생각만으로 비행기 띄웠다”…뉴럴링크가 여는 신시장 - 한경매거진",
              "source_name": "'뇌과학 BCI 기술'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9IUUM0NTR4Z1dpbFpBN0x6dkpyYVhxUHprWHl1YlRaTWl0aUwwM3BCSjRRMERLc0lHTHNyamR6THhpOWEwaW9wVjI2YTBrakF6RU1McUlGYlFrVXlFbkdmRGVOcjA5R2Eta3NhNg?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-345",
          "rank_by_count": 345,
          "name": "[박영숙 교수의 신간, 세계미래보고서 2027~2037] 출간 다음날 베스트 50위하는 너무 재미있는 박영숙 신간, 공저자 벤괴르첼이 만드는 AI공공재 인프라구축, 일론 머스크의 트랜스휴머니즘과 인간 수명: '새로운 균'이 인간을 다시 쓰는 시대] 인간은 이제 자연 선택의 결",
          "easy": "",
          "quote": "[박영숙 교수의 신간, 세계미래보고서 2027~2037] 출간 다음날 베스트 50위하는 너무 재미있는 박영숙 신간, 공저자 벤괴르첼이 만드는 AI공공재 인프라구축, 일론 머스크의 트랜스휴머니즘과 인간 수명: '새로운 균'이 인간을 다시 쓰는 시대] 인간은 이제 자연 선택의 결",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1458,
              "title": "[박영숙 교수의 신간, 세계미래보고서 2027~2037] 출간 다음날 베스트 50위하는 너무 재미있는 박영숙 신간, 공저자 벤괴르첼이 만드는 AI공공재 인프라구축, 일론 머스크의 트랜스휴머니즘과 인간 수명: '새로운 균'이 인간을 다시 쓰는 시대] 인간은 이제 자연 선택의 결 - AI넷",
              "source_name": "'뇌과학 BCI 기술'",
              "link": "https://news.google.com/rss/articles/CBMiQEFVX3lxTE1zTHozZUxQUGFkcWVDZmw2TUlpYi12WTQ2dmxTY0xWSnJ6eVpIVDE0WEZ5OEh2alQzZks5QWJxSHI?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-346",
          "rank_by_count": 346,
          "name": "엔비디아 홀로스캔 품은 패러드로믹스, 차세대 뇌-컴퓨터 인터페이스 상용화 가속",
          "easy": "",
          "quote": "엔비디아 홀로스캔 품은 패러드로믹스, 차세대 뇌-컴퓨터 인터페이스 상용화 가속",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1459,
              "title": "엔비디아 홀로스캔 품은 패러드로믹스, 차세대 뇌-컴퓨터 인터페이스 상용화 가속 - 아이알팜",
              "source_name": "'뇌과학 BCI 기술'",
              "link": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBBOXlsZ2VLcWJwVzJFaDAyS2s0bXU4WUI1d01jNm1NdUdnbzd1akdDZUczemhyalhiRWNjZWttZVFBSnhJbGpUTGZIaC1nd1d3UXFKS2VVS3JGYVlWRWlpaGdQbDVCaGs?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-347",
          "rank_by_count": 347,
          "name": "“강원 미래 전깃줄에 달려”…전력계통 해소방안 간담회 개최",
          "easy": "",
          "quote": "“강원 미래 전깃줄에 달려”…전력계통 해소방안 간담회 개최",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1460,
              "title": "“강원 미래 전깃줄에 달려”…전력계통 해소방안 간담회 개최 - 강원일보",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE02eXdVd0Exd2JET0JGVXMwMmNIRTJvMUFVWEpSS3RBaVo5NHdiTnkyckZsdE81NWNldFZrZElmNjdyMVNYbnNrR255bnh5a0JhajdPcDlGZUpyV0k?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-348",
          "rank_by_count": 348,
          "name": "강원도, '전력계통 해소 방안 간담회' 개최…'재생에너지 안정적 공급' 과제",
          "easy": "",
          "quote": "강원도, '전력계통 해소 방안 간담회' 개최…'재생에너지 안정적 공급' 과제",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1461,
              "title": "강원도, '전력계통 해소 방안 간담회' 개최…'재생에너지 안정적 공급' 과제 - 뉴스핌",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMiXEFVX3lxTFBGLWlGQkd0WHZVNS1GMnlsT1NrellWSDl2OGhyQ0h4WERYNjhqWERPZ3JQT1laNVRMdmlCRmcwN25ibFpFdjVIQnNqVnN6cjZrSC1CLXhNbjhTTmhW?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-349",
          "rank_by_count": 349,
          "name": "강원도, '강원지역 전력계통 해소방안 간담회' 열어 현안 논의",
          "easy": "",
          "quote": "강원도, '강원지역 전력계통 해소방안 간담회' 열어 현안 논의",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1462,
              "title": "강원도, '강원지역 전력계통 해소방안 간담회' 열어 현안 논의 - 매일일보",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE4tdXlEdHFaUGc5Y04yMEZBUC1Bb0lLVGZ1eW05U3lrdTI5WlN1N3Q0RlcydFFxTnI4NVVXSGJnczhoZEV6X1RGdUpwenFocHVodHY1bnIyYlFod0FUX1JrY1hrRXQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-350",
          "rank_by_count": 350,
          "name": "강원도, 제12차 전력수급기본계획에 전력망 확충 반영 추진",
          "easy": "",
          "quote": "강원도, 제12차 전력수급기본계획에 전력망 확충 반영 추진",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1463,
              "title": "강원도, 제12차 전력수급기본계획에 전력망 확충 반영 추진 - 강릉넷TV",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTFA2SFVhOWJ6cTZLUlJEbHZ2LUxHZkVyOUlHeXYzemJZX0FlZThxMUd1TjVkNnhwaGI5Sngyc3BTV00ySWZ4TzR6bFpoTzJMN2tScU50bmdic1BkZHNvb1lUY09yYm1FTXFPNkE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-351",
          "rank_by_count": 351,
          "name": "'전기 풍부한 강원의 역설'…전력망 부족에 기업 유치 발목",
          "easy": "",
          "quote": "'전기 풍부한 강원의 역설'…전력망 부족에 기업 유치 발목",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1464,
              "title": "'전기 풍부한 강원의 역설'…전력망 부족에 기업 유치 발목 - 연합뉴스",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBMYjk2eU85bC1tdXJJMjRXc0tuMDMwVVNzRUFlRk5wNmMwNGFhcHg2aWwtb3JnRmxxOWFZUXd1V3d1dHJhc2licW9sZ2VIMUNrRzNtRDhQaEZ1UmPSAWBBVV95cUxONEM3M0l4TU9MQzNEZzU5ZERPVThfQXozNy01WDdaTEE3Yk5Udi1nWng0WjVWd0NIZWdJeFM2b0kzajN1OE5mbFdnRHBNVGVrbkxoN3g5S2MzeGE5QWhyamw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-352",
          "rank_by_count": 352,
          "name": "강원특별자치도, 전력계통 해소방안 모색 간담회 개최",
          "easy": "",
          "quote": "강원특별자치도, 전력계통 해소방안 모색 간담회 개최",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1465,
              "title": "강원특별자치도, 전력계통 해소방안 모색 간담회 개최 - 시사파일",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMickFVX3lxTE1zQXFqRWFUZk4ydUpVeTJjM3F4a3U0TEVTQV9yX0ZPMGgzRWRiaUd3QmZwcG1KUEpFWG9JRnFXOURkbG44VEJZYmI0ek0zQ1NLZFp3eWxRbzAzMWhWeW9ld3dONGZadWNsTHEyS0RVYklPd9IBckFVX3lxTE1zQXFqRWFUZk4ydUpVeTJjM3F4a3U0TEVTQV9yX0ZPMGgzRWRiaUd3QmZwcG1KUEpFWG9JRnFXOURkbG44VEJZYmI0ek0zQ1NLZFp3eWxRbzAzMWhWeW9ld3dONGZadWNsTHEyS0RVYklPdw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-353",
          "rank_by_count": 353,
          "name": "묻는 시민에 “답변 한계”... 첫 원전 공론장, 입장 전달에 그쳐",
          "easy": "",
          "quote": "묻는 시민에 “답변 한계”... 첫 원전 공론장, 입장 전달에 그쳐",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1466,
              "title": "묻는 시민에 “답변 한계”... 첫 원전 공론장, 입장 전달에 그쳐 - 브릿지경제",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5RLWJjX3kwZF9pekZxSERVd05YN0tOLXVKdF9sTldvQUpTdkZqeVhYTnlSMEFBY1VqZVZtdzJtdkMzRHEyQkdaUWxuQ1ZUMUdmRTBUSFozUHlXdw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-354",
          "rank_by_count": 354,
          "name": "강원도, 송전망·변전소 확충 추진…제12차 전력수급기본계획 반영 건의",
          "easy": "",
          "quote": "강원도, 송전망·변전소 확충 추진…제12차 전력수급기본계획 반영 건의",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1467,
              "title": "강원도, 송전망·변전소 확충 추진…제12차 전력수급기본계획 반영 건의 - 신아일보",
              "source_name": "'전력수급기본계획 에너지 정책'",
              "link": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9qWUxNcjFGR3FOR01MSWlfN1lsaWlsSmVhc0swTUFLUEdWQ0NZelNPY3lXY0pDZVR4LTNNYTByQVJ4Smc4a0ExZ0Q3T19pejVoVHVhNWsyYzRWaTFkYThOdTk5ZG9aV1JyblhOLXNZNU4?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-355",
          "rank_by_count": 355,
          "name": "기후변화의 비극…페루서 올해 바다사자 1만여 마리 폐사",
          "easy": "",
          "quote": "기후변화의 비극…페루서 올해 바다사자 1만여 마리 폐사",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1468,
              "title": "기후변화의 비극…페루서 올해 바다사자 1만여 마리 폐사 - news.sbs.co.kr",
              "source_name": "'기후변화 엘니뇨 이상기후'",
              "link": "https://news.google.com/rss/articles/CBMijwFBVV95cUxObG9lZkhxM2U3UEZwcmZjMXY2WjlpS0RTZ21Vb2FnSEVLM3NXLVgyQkxlbVhtOUdYQkFoemMxLWp2M2g5WGlORmpZa0RoQzl6bHVlS3hxSFVZdXBkS2xjLVpQdWdDWkFmWTVtM2VaVjVTQnQ5UzVPVFgtaURNY29lVW9FWXNCSFpWMHlQRDF2VQ?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-356",
          "rank_by_count": 356,
          "name": "[맹소영의 기후2050]슈퍼엘니뇨! 지구의 엔진이 움직였다",
          "easy": "",
          "quote": "[맹소영의 기후2050]슈퍼엘니뇨! 지구의 엔진이 움직였다",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1470,
              "title": "[맹소영의 기후2050]슈퍼엘니뇨! 지구의 엔진이 움직였다 - 경상일보",
              "source_name": "'기후변화 엘니뇨 이상기후'",
              "link": "https://news.google.com/rss/articles/CBMibEFVX3lxTE1URHRrTWxEZHAyRWdzc202cXYyN1VoV1Bud2JKSkJxSXpCQUZwYVpFaUdVMVJvbVBaaUNlY0E5Z0d1X1I0eUFhSHlCOWlRdFQ0WXJMOEl4a0RSdUk2ekp3R0t4QUdvMHFxWmNidw?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        },
        {
          "id": "e261126-357",
          "rank_by_count": 357,
          "name": "‘슈퍼 엘니뇨’ 덮친 올겨울…기습 한파 · 습설 · 가뭄 동시 경고",
          "easy": "",
          "quote": "‘슈퍼 엘니뇨’ 덮친 올겨울…기습 한파 · 습설 · 가뭄 동시 경고",
          "member_count": 1,
          "sample_articles": [
            {
              "n": 1471,
              "title": "‘슈퍼 엘니뇨’ 덮친 올겨울…기습 한파 · 습설 · 가뭄 동시 경고 - 파인드비",
              "source_name": "'기후변화 엘니뇨 이상기후'",
              "link": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE5fT3JmX2o5X3hzcWM1TkE5MWthNFRuTUlucVhMSDZNOEhtbzVic1BtaHBVX3F0eW9xMHhKcklkaXJtOGlQYXN0dFFha0pkR1puS1d6NDIwVmZGa0VMUW1KWHhzV3BDQdIBakFVX3lxTE9SRXBYSXBkVTU5dWNCOU5ReTFjeUp3VkZWSENycnNyRk05MExYVDZsamNhbzV4TW9HYTdLcHBMRFBQeG50dk5NSkJZdUxaRm1jVGY1SHp5UUZibTd5RUFSZ3lhc2RyWWFYUkE?oc=5"
            }
          ],
          "flags": [],
          "unlumped_from": "",
          "is_single": true,
          "addr": "처리-3",
          "source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
        }
      ]
    },
    "ch5_papers": {
      "title": "챕터 5 · 논문",
      "addr": "처리-4",
      "kind": "papers",
      "day": "2026-11-26",
      "day_label": "11월 26일(오늘)",
      "day_rel": "오늘",
      "day_note": "11월 26일(오늘) 논문 — 논문 풀이가 끝난 결과예요.",
      "made": "2026-11-26T05:24:07",
      "picks_max": 10,
      "status": "돎 — 2026-11-26 논문 풀이 114편 / 새 논문 166편",
      "headline": {
        "text": "오늘 새 논문 166편 · 풀이한 114편 중 AI 모델·학습법 쪽이 52편으로 가장 많아요.",
        "text_orig": "",
        "n_new": {
          "val": 166,
          "source": "v2_secretary/결과/논문/2026-11-26_논문.json"
        },
        "n_done": {
          "val": 114,
          "source": "v2_secretary/결과/논문/2026-11-26_논문.json"
        },
        "n_done_new": {
          "val": 110,
          "source": "v2_secretary/결과/논문/2026-11-26_논문.json"
        },
        "n_done_backlog": {
          "val": 4,
          "source": "v2_secretary/결과/논문/2026-11-26_논문.json"
        },
        "n_waiting": {
          "val": 54,
          "source": "v2_secretary/결과/논문/2026-11-26_논문.json"
        },
        "n_failed": {
          "val": 2,
          "source": "v2_secretary/결과/논문/2026-11-26_논문.json"
        },
        "top_tag": "AI 모델·학습법",
        "top_tag_n": {
          "val": 52,
          "source": "v2_secretary/결과/논문/2026-11-26_논문.json"
        }
      },
      "flow": {
        "text": "오늘 풀이한 논문들 중에서는 인공지능 모델의 학습법을 개선하거나 에이전트의 도구 활용 능력을 높이는 연구가 가장 많이 눈에 띄었습니다. 특히 비동기 에이전트 팀을 활용해 로봇 제어 시간을 대폭 줄인 사례처럼, 복잡한 작업을 더 효율적으로 처리하려는 시도가 많았거든요. 이와는 조금 다르게 전력망의 주파수 안정성을 확보하거나 데이터 센터의 전력 변화를 예측하는 등 에너지 시스템의 효율을 다루는 논문들도 여럿 보였습니다. 쉽게 말하면 인공지능의 지능을 높이는 연구와 이를 실제 물리 환경이나 전력망 같은 기반 시설에 적용하려는 연구가 주를 이뤘다고 볼 수 있습니다.",
        "by": "ai",
        "flags": []
      },
      "map": [
        {
          "tag": "AI 모델·학습법",
          "n": 52,
          "n_done": 52,
          "one_lines": [
            "시퀀스, 표, 그래프를 합친 결제 기초 모델을 만들고 위험 탐지 성능을 검증했어요.",
            "믿음 검증 강화학습으로 인공지능 에이전트의 섣부른 결정을 막았다",
            "토큰마다 회로를 동적으로 엮는 루움포머 구조를 제안하고 성능을 평가했어요."
          ]
        },
        {
          "tag": "AI 안전·평가",
          "n": 19,
          "n_done": 19,
          "one_lines": [
            "스스로 진화하는 컴퓨터 사용 AI 에이전트 평가 환경을 개발했어요",
            "디지털과 물리 세계를 아우르는 AI 에이전트 학습 평가 도구를 개발했어요.",
            "대규모 멀티모달 가짜 데이터셋과 평가 도구를 만들어 탐지 성능을 높였어요."
          ]
        },
        {
          "tag": "제어·로봇",
          "n": 15,
          "n_done": 15,
          "one_lines": [
            "비동기 에이전트 팀으로 로봇을 제어해 시간을 28.2% 줄였어요.",
            "작동 설계 영역(ODD) 기반 자율주행 아키텍처 합리화 프레임워크를 제안하고 비용 절감 효과를 검증했어요.",
            "사이버물리시스템의 불확실성을 관리할 도달집합 순응 모델을 제안하고 그 성질을 증명했어요."
          ]
        },
        {
          "tag": "AI 에이전트·도구",
          "n": 15,
          "n_done": 15,
          "one_lines": [
            "실시간 화면을 감시하는 가벼운 모델을 더해 에이전트의 인식 지연을 줄였다.",
            "픽셀을 코드로 다루는 시각 생성 에이전트 틀을 개발했어요.",
            "삼차원 부위 분할을 위해 전문가들을 묶고 스스로 고치는 인공지능 체계를 만들었어요."
          ]
        },
        {
          "tag": "전력망·계통",
          "n": 8,
          "n_done": 8,
          "one_lines": [
            "북해 전력망을 바탕으로 두 가지 전력 시장 설계의 주파수 안정성과 비용을 비교했어요.",
            "인버터 기반 전력망의 감쇠비와 수렴 속도를 근궤적으로 분석했어요.",
            "거대 언어 모델을 활용해 데이터 센터의 전력 변화를 빠르게 예측하는 디지털 트윈을 개발했어요."
          ]
        },
        {
          "tag": "영상·음성·멀티모달",
          "n": 2,
          "n_done": 2,
          "one_lines": [
            "물리적 동역학을 다루는 비디오 편집 벤치마크를 만들고 모델들을 평가했어요.",
            "학습 없이 잔차를 활용해 실시간 비디오 생성의 프롬프트 전환 능력을 높였다."
          ]
        },
        {
          "tag": "반도체·하드웨어",
          "n": 1,
          "n_done": 1,
          "one_lines": [
            "디엔에이 미니마이저의 4진 순서를 직접 최적화해 밀도를 낮췄어요."
          ]
        },
        {
          "tag": "의료·바이오",
          "n": 1,
          "n_done": 1,
          "one_lines": [
            "시각 에이전트의 위치 출처 검증을 위한 줌트레이스를 제안하고 성능을 검증했어요."
          ]
        },
        {
          "tag": "수학·이론",
          "n": 1,
          "n_done": 1,
          "one_lines": [
            "위험 성향이 다른 에이전트들의 학습 모델을 분석하고 개입을 통해 효율성을 높였어요."
          ]
        }
      ],
      "picks": [
        {
          "canon_id": "2611.31572",
          "badge": "전공",
          "why": "전공(전력·제어) 중 키워드가 많이 걸림: frequency, renewable, HVDC"
        },
        {
          "canon_id": "2611.32884",
          "badge": "실무 인기",
          "why": "허깅페이스 추천 87"
        },
        {
          "canon_id": "2611.31653",
          "badge": "AI 교집합",
          "why": "인공지능 쪽인데 관심 키워드가 걸림: reactor"
        },
        {
          "canon_id": "2611.31974",
          "badge": "교차 출현",
          "why": "여러 곳에 같이 올라옴: cs.AI + 허깅페이스"
        },
        {
          "canon_id": "2611.31568",
          "badge": "의외",
          "why": "오늘 풀이 중 드문 주제 '수학·이론'(1편) — 키워드·추천수와 상관없이 고름"
        },
        {
          "canon_id": "2611.32882",
          "badge": "전공",
          "why": "전공(전력·제어) 중 키워드가 많이 걸림: data center"
        },
        {
          "canon_id": "2611.30634",
          "badge": "실무 인기",
          "why": "허깅페이스 추천 86"
        },
        {
          "canon_id": "2611.32820",
          "badge": "의외",
          "why": "오늘 풀이 중 드문 주제 '영상·음성·멀티모달'(2편) — 키워드·추천수와 상관없이 고름"
        }
      ],
      "cards": [
        {
          "canon_id": "2611.25403",
          "title": "Antom 3-in-1 Transformer: A Payment Foundation Model",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.25403",
            "arxiv": "https://arxiv.org/abs/2611.25403"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 100,
          "score": 11.0,
          "score_why": "추천 100 → +10 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "결제 위험을 한 번에 잡으려고 시퀀스, 표, 그래프를 섞어 봤는데요",
            "easy1_desc": "연구진은 Antom 3-in-1 Transformer라는 결제 기초 모델을 만들어서 결제 위험을 잡으려고 시퀀스, 표, 그래프 정보를 한데 묶어 봤는데요. 이 모델은 약 70억 개의 매개변수를 가졌고, 각 작업 경로마다 약 17억 개가 활성화된다고 해요. 앤트 인터내셔널의 내부 결제 데이터를 주로 써서 행동과 관계를 미리 익히도록 사전 학습을 시켰다는 말이에요. 쉽게 말하면, 결제 데이터를 골고루 섞어서 위험을 미리 찾아내려고 준비한 셈이라는 겁니다.",
            "easy2_title": "미리 학습시켰더니 적은 데이터로도 성능이 크게 올랐습니다",
            "easy2_desc": "그래서 다른 사업으로 옮겨서 실험을 해봤더니, 미리 학습시킨 쪽이 처음부터 새로 학습시킨 것보다 목표 지표가 34.5% 좋아졌다고 하는데요. 전체 레이블의 25%만 써도 처음부터 다 학습시킨 기준 모델보다 AP와 Recall@0.5% 성능이 더 높게 나왔다는 겁니다. 4개월 동안 앤트 인터내셔널의 거대한 결제 플랫폼에서 실제로 돌려봤더니 전체 손실률이 XGB-Online보다 37.88% 줄어들었다는 장점이 있는데요, 대신 내부 데이터를 주로 써서 학습했다는 조건이 붙는다는 점도 같이 알아둬야 합니다.",
            "topic": "앤트 인터내셔널의 내부 결제 데이터를 써서 시퀀스, 표, 그래프를 합친 결제 기초 모델인 Antom 3-in-1 Transformer를 개발하고, 위험 탐지 성능을 실험해 본 연구예요.",
            "one_line": "시퀀스, 표, 그래프를 합친 결제 기초 모델을 만들고 위험 탐지 성능을 검증했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "앤트 인터내셔널의 내부 결제 데이터를 주로 써서 사전 학습을 진행했다는 조건이 있습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
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
            "limit_ok": true,
            "show_limit": true
          },
          "authors": "Weiyu Han, Haoyu Jiang, Jie Sheng, Youxi Pan, Xianglong Liu, Zeqi Ren, Dongquan Yi, Yinhao Liu, Ruobing Zuo, Ze Zhao, Huilin He, Nairong Zhang, Xinyi He, Xiao Tan, Jun Wang, Pan Fang, Wei Zeng, Jianan Su, Kaixin Shen, Jingtong Wu, Hao Li, Shuai Chen, Jiangming Yang, Tianyi Zhang",
          "categories": [],
          "comments": 2,
          "pdf": "https://arxiv.org/pdf/2611.25403"
        },
        {
          "canon_id": "2611.31572",
          "title": "Adaptive Robust Optimisation for Frequency-Constrained Market Clearing Problem",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31572"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 10.0,
          "score_why": "전공 +3 · 키워드 3개(frequency, renewable, HVDC) → +6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "frequency",
            "renewable",
            "HVDC"
          ],
          "ai": {
            "easy1_title": "재생에너지와 정전 위험을 두고 하루 앞서 시장을 정리해 봤습니다",
            "easy1_desc": "연구진은 하루 앞서 전력 시장을 정리하는 문제를 두 단계의 적응형 강건 최적화(Adaptive Robust Optimisation) 문제로 세웠는데요, 첫 단계에서는 발전기 조합과 에너지 배치, 예비력 조달을 정하고 둘째 단계에서는 재생에너지와 부하, 초고압 직류송전(HVDC) 변환기 고장이 동시에 불확실할 때 가장 나쁜 상황에 대처하는 행동을 다뤘다는 겁니다. 이때 동기화 지역 수준에서 관성(Inertia)과 빠른 주파수 응답(Fast Frequency Response) 제약으로 주파수 안전을 확실히 잡으려고 했는데요, 초고압 직류송전 선로는 쓸 수 있는 여유 한도 안에서 비상 전력을 도울 수 있게 했다는 말이에요. 쉽게 말하면, 발전과 소비가 흔들리고 송전선이 망가지는 최악의 상황 속에서도 전력망이 안 무너지게 미리 틀을 짜 본 셈이라는 겁니다.",
            "easy2_title": "해상 입찰 구역을 따로 두니 실시간 정전을 눈에 띄게 줄였다는 겁니다",
            "easy2_desc": "그래서 연구진은 북해에 있는 8개 나라의 테스트 시스템을 가지고 본국 시장(HM)과 해상 입찰 구역(OBZ)이라는 두 가지 설계를 비교해 봤는데요, 해상 입찰 구역 방식을 쓰면 송전선 막힘이 하루 전 시장에 바로 보여서 맞춤형 예비력을 챙기게 되므로 하루 전 비용은 좀 오르지만 실시간 전력 차단은 크게 줄어들어 전체 시스템 비용이 줄어든다는 겁니다. 단점은 해상 풍력 발전과 초고압 직류송전 선로 용량의 비율에 따라 이 이득이 계절을 타기도 하고, 육지 발전이 전체 공급을 이끌면 장점이 줄어든다는 점도 같이 따라온다는 말이에요. 쉽게 말하면, 미리 위험을 따져보는 설계가 평소에는 비용을 조금 더 쓰게 만들지만 위기 상황에서는 정전을 막는 든든한 방패가 된다는 셈입니다.",
            "topic": "재생에너지와 송전선 고장이 겹치는 최악의 상황에서 주파수를 지키기 위해 전력 시장을 어떻게 설계해야 하는지 비교해 본 연구예요.",
            "one_line": "북해 전력망을 바탕으로 두 가지 전력 시장 설계의 주파수 안정성과 비용을 비교했어요.",
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
          },
          "authors": "\\\"Ozlem Mahmuto\\u{g}ullar{\\i}, Hakan Ergun",
          "categories": [
            "eess.SY",
            "cs.SY",
            "math.OC"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31572"
        },
        {
          "canon_id": "2611.32884",
          "title": "Lazy Agents Answer Against Their Own Beliefs: Reinforcement Learning with Verifiable Beliefs Teaches Them to Act on What They Believe",
          "field": "cs.AI",
          "sources": [
            "cs.AI",
            "허깅페이스"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32884",
            "hf": "https://huggingface.co/papers/2611.32884"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 87,
          "score": 9.7,
          "score_why": "추천 87 → +8.7 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "충분한 증거가 없는데도 너무 일찍 결론을 내려 버린다",
            "easy1_desc": "긴 작업을 처리하는 인공지능 에이전트들이 증거가 모자란 상태인데도 미리 답을 정해 버리는 이른바 게으름(laziness) 현상을 일으키는데요, 연구진이 평가해 봤더니 에이전트들은 자기가 가진 믿음 속에서 여러 가능성이 남아 있는데도 섣불리 답을 확정해 버린다는 거예요. 끝에 받는 최종 결과 보상만으로는 언제 결론을 내려야 할지 가르칠 수가 없는데, 운 좋은 짐작도 증거를 제대로 갖춘 답과 똑같은 점수를 받기 때문이라는 말이에요. 쉽게 말하면, 과정은 따지지 않고 결과만 보니까 에이전트가 서둘러 대충 찍게 된다는 겁니다.",
            "easy2_title": "믿음을 검증하는 강화학습으로 섣부른 결정을 막아 성능을 끌어올렸다",
            "easy2_desc": "그래서 연구진은 시뮬레이터가 매 단계마다 정확한 후행 확률을 계산해 증거가 충분한지 알려 주는 방식인 검증 가능한 믿음 기반 강화학습(RLVB)을 제안했는데요, 이 방법은 여러 답이 가능할 때는 더 나아가게 하고 증거가 충분해지면 결론을 내리도록 보상을 준다는 거예요. 따로 판정자나 보상 모델이 필요 없어서 GPU 사용 시간을 1.6배나 줄이면서도 LLM 판정자의 과정 보상을 쓴 기존 PPO 방식보다 평균 9.3% 더 뛰어난 성능을 냈다고 하는데요, 장점은 정확도가 크게 오른다는 것이고 대신 학습 과정에서 시뮬레이터가 매 단계 후행 확률을 계산할 수 있어야 한다는 조건이 붙는다는 겁니다. 쉽게 말하면, 증거가 확실할 때만 답을 내리도록 훈련시켰더니 9가지 모든 환경에서 기본 모델보다 평균 17.1%나 좋아졌다는 셈이에요.",
            "topic": "인공지능 에이전트가 증거가 부족할 때 서둘러 결론을 내리는 게으름 문제를 해결하기 위해, 믿음을 검증하는 강화학습(RLVB) 방법을 제안하고 성능을 평가한 연구예요.",
            "one_line": "믿음 검증 강화학습으로 인공지능 에이전트의 섣부른 결정을 막았다",
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
          },
          "authors": "Richmond Sin Jing Xuan, Peilin Feng, Wenbin Wang, Soujanya Poria",
          "categories": [
            "cs.AI"
          ],
          "comments": 5,
          "pdf": "https://arxiv.org/pdf/2611.32884"
        },
        {
          "canon_id": "2611.30634",
          "title": "Rewirable Circuits in Transformers with Loom Attention",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.30634",
            "arxiv": "https://arxiv.org/abs/2611.30634"
          },
          "published": "2026-11-23",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 86,
          "score": 9.6,
          "score_why": "추천 86 → +8.6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 모델은 토큰마다 회로를 자유롭게 바꾸지 못해 아쉬웠는데요",
            "easy1_desc": "연구진은 토큰마다 회로를 동적으로 다시 엮는 새로운 방식인 룸 어텐션(loom attention)을 제안해 봤는데요. 이전 헤드들의 출력과 토큰에 대한 수평 어텐션을 엮어서 쿼리, 키, 밸류를 얻는 방식이라는 거예요. 쉽게 말하면, 모델이 계산할 때 회로를 유연하게 바꿀 수 있게 만든 셈이에요.",
            "easy2_title": "적은 컴퓨팅 자원으로도 훨씬 큰 모델과 맞먹는 성능을 보여줬거든요",
            "easy2_desc": "이 방식으로 만든 루움포머(LoomFormer)는 제어와 내용을 벡터와 매트릭스 스트림으로 나누는 듀얼 스트림 구조를 쓰는데요. 같은 300B(3000억 개) 토큰으로 학습했을 때 mHC-Pythia-2.8B보다 약 1.6배 높은 다운스트림 성능 향상을 보였다고 해요. 성능이 좋아지는 장점이 있는 반면 2%의 추가 FLOPs(연산 횟수)가 든다는 점도 함께 기억해 두어야 한다는 겁니다.",
            "topic": "토큰마다 회로를 유연하게 재배치하는 새로운 듀얼 스트림 아키텍처인 루움포머(LoomFormer)를 제안하고 그 성능을 평가한 연구예요.",
            "one_line": "토큰마다 회로를 동적으로 엮는 루움포머 구조를 제안하고 성능을 평가했어요.",
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
          },
          "authors": "Da Xiao, Qingye Meng, Shengping Li, Xingyuan Yuan",
          "categories": [],
          "comments": 2,
          "pdf": "https://arxiv.org/pdf/2611.30634"
        },
        {
          "canon_id": "2611.28947",
          "title": "Don't Sleep, Keep Watch: Proactive Perception for Computer-Use Agents",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.28947",
            "arxiv": "https://arxiv.org/abs/2611.28947"
          },
          "published": "2026-11-21",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 84,
          "score": 9.4,
          "score_why": "추천 84 → +8.4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "화면이 계속 바뀌는데 에이전트가 상황을 놓치고 있었어요",
            "easy1_desc": "컴퓨터 사용 에이전트(CUAs)가 실시간으로 변하는 화면에서 긴 작업을 맡아 처리하는데요, 현재는 띄엄띄엄 스냅샷으로만 주변을 본다는 겁니다. 문제는 비전 언어 모델(VLM)의 추론 시간이 길어서, 행동을 실행할 때쯤이면 이미 화면 상태가 낡아 버리는 간격이 생긴다는 말이에요. 쉽게 말하면, 옛날 화면만 보고 엉뚱한 행동을 하거나 멍하게 기다리는 셈이라는 겁니다.",
            "easy2_title": "가벼운 감시 모델을 붙여서 낡은 화면 문제를 해결했어요",
            "easy2_desc": "그래서 연구진은 에이전트의 모델이나 프롬프트를 건드리지 않고도 연속으로 화면을 보게 만드는 나이트워치(NightWatch) 틀을 내놨는데요, 0.8B 크기의 가벼운 모델인 나이트워치-0.8B를 붙여서 인터페이스를 실시간으로 스트리밍 감시하게 만들었다는 겁니다. 이렇게 하면 적은 계산 비용으로도 현재 상태에 딱 맞춰 결정을 내리게 돼서 낡은 행동과 쓸데없는 대기를 줄여 준다는 장점이 있는데요, 대신 작업 성공률은 그대로 유지한다는 거예요. 쉽게 말하면, 작은 감시병을 하나 더 붙여서 에이전트가 멍때리는 시간을 확 줄였다는 말이에요.",
            "topic": "컴퓨터 사용 에이전트가 실시간 화면 변화에 대응하도록 가벼운 감시 모델을 더해 인식과 행동의 간격을 줄인 나이트워치(NightWatch) 프레임워크를 제안한 내용이에요.",
            "one_line": "실시간 화면을 감시하는 가벼운 모델을 더해 에이전트의 인식 지연을 줄였다.",
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
          },
          "authors": "Jiaqi Su, Jie-Jing Shao, Yichen Liu, Long-Kai Huang, Haiyan Yin",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.28947"
        },
        {
          "canon_id": "2611.31358",
          "title": "Nemotron-Labs-VisualCreation: Pixel as Code for Agentic Visual Creation",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.31358",
            "arxiv": "https://arxiv.org/abs/2611.31358"
          },
          "published": "2026-11-23",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 78,
          "score": 8.8,
          "score_why": "추천 78 → +7.8 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시각적 표현과 정확한 통제는 왜 동시에 얻기 어려웠나",
            "easy1_desc": "시각적 콘텐츠를 만들려면 표현력 있는 이미지와 텍스트나 구조를 향한 정확한 통제가 다 필요한데요, 기존에는 이 둘을 매끄럽게 잇기가 어려웠다는 겁니다. 연구진은 픽셀을 코드처럼 다루는 방법으로 이 문제를 풀어 보려고 했는데요. 쉽게 말하면 그림과 구조화된 요소를 하나의 틀에서 함께 다루도록 만든 셈이에요.",
            "easy2_title": "픽셀을 코드로 다루는 에이전트 틀을 만들었더니 무엇이 달라졌나",
            "easy2_desc": "연구진은 픽셀을 코드처럼 다루는 네모트론 연구소의 시각적 생성(Nemotron-Labs-VisualCreation)이라는 에이전트 틀을 선보였는데요. 래스터 이미지는 학습된 시각 토큰으로 바꾸고, 구조화된 결과물은 명시적 프로그램으로 나타내어 하나의 인터페이스로 엮었다는 겁니다. 그 결과 토크나이저의 재구성 성능과 속도가 좋아졌고, 시스템 수준에서도 성능 지표가 크게 올랐다는 장점이 있는데요. 대신 복잡한 구조를 얽는 과정에서 모델 구성이 무거워질 수 있다는 점도 함께 따라온다는 겁니다.",
            "topic": "픽셀을 코드처럼 다루는 에이전트 틀을 이용해 이미지와 구조화된 시각 자료를 함께 만들고 다듬는 방식을 제안한 연구예요.",
            "one_line": "픽셀을 코드로 다루는 시각 생성 에이전트 틀을 개발했어요.",
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
          },
          "authors": "Guo Chen, Fuxiao Liu, Haoqin Tu, Yiyang Zhou, Andrew Tao, Bryan Catanzaro, Cihang Xie, Yuyin Zhou, Huaxiu Yao, Didong Lu, Zongxia Li, Guilin Liu",
          "categories": [],
          "comments": 2,
          "pdf": "https://arxiv.org/pdf/2611.31358"
        },
        {
          "canon_id": "2611.32111",
          "title": "Damping Ratio and Convergence Rate Analysis for Inverter-Based Power Systems via Root Locus",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32111"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 8.0,
          "score_why": "전공 +3 · 키워드 2개(inverter, frequency) → +4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "inverter",
            "frequency"
          ],
          "ai": {
            "easy1_title": "재생에너지가 늘면서 옛날 방식으로는 진동을 잡기 어렵게 됐습니다",
            "easy1_desc": "재생에너지가 전력망에 많이 들어오면서, 옛날처럼 전체 관성 중심 주파수만 보고는 일시적인 떨림 현상을 제대로 알기 어렵게 됐는데요. 그래서 연구진은 인버터 기반 전력망의 일시적인 주파수 성능을 분석해 봤다는 겁니다. 감쇠비와 수렴 속도라는 두 가지 핵심 성능 기준을 가지고 따져 봤는데요. 쉽게 말하면, 떨림이 얼마나 빨리 가라앉고 안정이 얼마나 빨리 찾아오는지 살펴보 셈이에요.",
            "easy2_title": "복잡한 전력망을 쪼개서 근본적인 성능 조건을 찾아냈습니다",
            "easy2_desc": "전체 네트워크 시스템을 스칼라 피드백 시스템들로 쪼개서, 닫힌 고리 극점을 분석할 수 있는 방법을 찾아냈는데요. 이걸 바탕으로 원하는 감쇠와 수렴 성능을 보장하는 충분조건들을 이끌어 냈다는 겁니다. 최악의 상황은 스칼라 랩라시안의 가장 큰 고유값과 가장 작은 0이 아닌 고유값에서 일어난다는 걸 밝혔는데요. 분석이 훨씬 단순해지는 장점이 있는데, 대신 시스템을 단순화하는 과정에서 세부적인 조건들이 엄격하게 맞아떨어져야 한다는 점도 같이 따라온다는 겁니다.",
            "topic": "인버터 기반 전력망에서 감쇠비와 수렴 속도를 분석하기 위해 근궤적을 활용하는 방법과 성능 평가 기준을 다룬 연구예요.",
            "one_line": "인버터 기반 전력망의 감쇠비와 수렴 속도를 근궤적으로 분석했어요.",
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
              "0"
            ],
            "format": [],
            "flags": [],
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          },
          "authors": "Dan Wang, Wei Chen, Yan Jiang, Shinji Hara",
          "categories": [
            "eess.SY",
            "cs.SY"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32111"
        },
        {
          "canon_id": "2611.31205",
          "title": "ACAP: Asynchronous Coding Agents for Efficient Robot Control",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.31205",
            "arxiv": "https://arxiv.org/abs/2611.31205"
          },
          "published": "2026-11-23",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 61,
          "score": 7.1,
          "score_why": "추천 61 → +6.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "하나의 로봇에이전트로 통째로 제어하려니 일이 자꾸 늦어졌습니다",
            "easy1_desc": "로봇을 움직이려고 코딩 에이전트를 쓰는데요, 에이전트 하나가 로봇 전체를 맡아서 처리하다 보니까 따로 처리해도 되는 일까지 줄 서서 기다리게 되는 문제가 생겼거든요. 연구진은 그래서 로봇을 여러 에이전트 팀으로 쪼개서 각자 맡은 부위를 따로따로 동시에 움직이게 만들었는데요. 독립된 작업은 각자 알아서 빠르게 처리하면서도, 서로 맞물려야 하는 부위는 조율할 수 있게 설계했다는 말이에요. 쉽게 말하면, 로봇 하나를 한 명이 전부 조종하던 걸 여러 명이 나눠 맡아서 동시에 일하게 바꾼 셈이라는 겁니다.",
            "easy2_title": "팀을 이끌어 줄 상위 에이전트를 도입해서 역할을 착착 나눠줬습니다",
            "easy2_desc": "그래서 연구진은 작업을 나눠주고 부위 간의 연결 고리를 조율하는 하이퍼 에이전트(상위 에이전트)를 도입했는데요. 이 상위 에이전트가 리드 에이전트와 멤버 에이전트 사이의 제어 권한을 상황에 맞춰 유연하게 쪼개준다는 거예요. 덕분에 따로 움직여도 되는 작업은 동시에 진행하고, 꽉 맞물려야 하는 조작 작업은紧밀하게 협력할 수 있게 됐는데요. 단점으로는 조율 과정이 복잡해질 수 있다는 점이 있지만, 장점은 실제 25가지 작업 환경에서 테스트해 보니 단일 에이전트 방식보다 시간이 28.2%나 줄어들었다는 겁니다.",
            "topic": "로봇의 부위별 제어를 비동기식 에이전트 팀으로 쪼개어 작업 시간을 줄인 ACAP 프레임워크에 대한 연구예요.",
            "one_line": "비동기 에이전트 팀으로 로봇을 제어해 시간을 28.2% 줄였어요.",
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
          },
          "authors": "Zexin He, Rui Li, Yushi Lan, Chengkai Jin, Zhi Hou, Xingang Pan",
          "categories": [],
          "comments": 2,
          "pdf": "https://arxiv.org/pdf/2611.31205"
        },
        {
          "canon_id": "2611.32882",
          "title": "Adaptive Electromagnetic Transient-level Digital Twins for Data Centers via In-Context Learning with LLMs",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32882"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(data center) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "data center"
          ],
          "ai": {
            "easy1_title": "데이터 센터의 전력 변화를 예측하기가 너무 어려웠거든요",
            "easy1_desc": "인공지능(AI) 작업이 늘어나면서 데이터 센터의 전력 수요가 급격히 커졌는데, 작업이 바뀔 때마다 전력망에 갑작스러운 전기적 과도 현상(EMT)이 발생하곤 합니다. 이걸 정확히 예측해야 데이터 센터를 안정적으로 운영할 수 있는데, 기존의 정밀한 시뮬레이션 방식은 계산하는 데 시간이 너무 많이 걸린다는 단점이 있어요. 그래서 디지털 트윈(가상 모델)을 쓰기도 하지만, 데이터 센터의 환경이 조금만 바뀌어도 제대로 대응하지 못하고 성능이 떨어지는 한계가 있다는 겁니다.",
            "easy2_title": "거대 언어 모델로 상황에 맞춰 스스로 배우는 디지털 트윈을 만들었어요",
            "easy2_desc": "연구진은 거대 언어 모델(LLM)의 문맥 내 학습(ICL) 기능을 활용해서, 데이터 센터 환경이 바뀌어도 스스로 적응하는 새로운 디지털 트윈을 개발했습니다. 모델을 다시 학습시킬 필요 없이, 아주 적은 양의 데이터만 보고도 새로운 환경에 맞춰 전력 변화를 바로 예측할 수 있게 만든 거예요. 기존 방식보다 훨씬 빠르게 계산하면서도 예측 정확도는 더 높다는 장점이 있는데, 덕분에 복잡한 데이터 센터 운영 환경에서도 유연하게 대처할 수 있게 된 셈입니다.",
            "topic": "거대 언어 모델의 문맥 내 학습을 활용하여 데이터 센터의 환경 변화에 적응할 수 있는 전력 과도 현상 예측용 디지털 트윈을 제안했어요.",
            "one_line": "거대 언어 모델을 활용해 데이터 센터의 전력 변화를 빠르게 예측하는 디지털 트윈을 개발했어요.",
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
              "one_line 52자"
            ],
            "flags": [],
            "tag": "전력망·계통",
            "limit_ok": null,
            "show_limit": false
          },
          "authors": "Amit Jena, Bin Wang, Aoxia Chen, Brad Chadwell, Billy Yancey, Le Xie",
          "categories": [
            "eess.SY",
            "cs.AI",
            "cs.SY"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32882"
        },
        {
          "canon_id": "2611.31681",
          "title": "Your bids are showing: re-identifying power plants in anonymized market data, and a differentially private alternative",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31681"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 6.0,
          "score_why": "전공 +3 · 키워드 1개(renewable) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "renewable"
          ],
          "ai": {
            "easy1_title": "이름을 가려도 전력 시장에서 발전소가 어디인지 다 찾아지더군요",
            "easy1_desc": "연구진이 2024년부터 2026년까지의 전력망 데이터인 ERCOT 자료를 가지고 PJM의 방식대로 발전소 이름을 숨겨 봤는데요, 미국 에너지정보청(EIA)과 환경청(EPA)의 공공 데이터를 활용해 채점해 봤더니 전체의 25%에 달하는 발전소(용량 기준으로는 32%)가 원래 어디인지 정확히 특정되었다고 합니다. 게다가 상위 5개 추정 안에 든 비율도 45%나 된다는 거예요. 쉽게 말하면, 이름을 가려도 발전소를 찾아내는 데는 큰 지장이 없다는 말입니다.",
            "easy2_title": "이름 대신 노이즈를 얹은 차등 프라이버시 방식을 제안했습니다",
            "easy2_desc": "그래서 연구진은 영구적으로 이름을 감추는 대신 영점 집중 차등 프라이버시(zero-concentrated differential privacy)를 적용해 가우스 노이즈를 섞은 새로운 공개 방식을 제안했는데요, 1유닛-년에 10의 프라이버시 예산(ε)을 쓰면 시장 공급 곡선은 실제와 11% 이내로 유지되고 청산 가격은 3.0달러/MWh 오차 안에서 맞아떨어지면서 공격자의 상관관계는 0.23까지 떨어진다고 합니다. 정보 보호는 확실해지는데 핵심 지표는 쓸 수 있다는 장점이 있는 반면, 단일 시간이나 단일 유닛 단위의 세부적인 질문에는 답할 수 없다는 한계도 같이 따라온다는 겁니다.",
            "topic": "익명화된 전력 시장 데이터에서 발전소를 다시 찾아내는 위험성을 확인하고, 이를 막기 위한 차등 프라이버시 기반의 데이터 공개 대안을 제안한 논문이에요.",
            "one_line": "익명화된 전력 입찰 데이터의 재식별 위험을 보이고 차등 프라이버시 기반 대안을 제안했어요.",
            "topic_tag": "전력망·계통",
            "limit": "단, 어떤 분석이 유효한지는 월별 실제 데이터의 변동량과 노이즈 크기의 비율 하나에 달려 있습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          },
          "authors": "Nikhil Ravi",
          "categories": [
            "eess.SY",
            "cs.CR",
            "cs.SY"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31681"
        },
        {
          "canon_id": "2611.28649",
          "title": "S-Mind: Internalizing Multi-View Geometry for Spatial Intelligence",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.28649",
            "arxiv": "https://arxiv.org/abs/2611.28649"
          },
          "published": "2026-11-21",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 41,
          "score": 5.1,
          "score_why": "추천 41 → +4.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "공간을 이해하는 능력이 왜 부족한가 살펴봤습니다",
            "easy1_desc": "멀티모달 대형 언어 모델(MLLM)이 현실 세계로 들어오면서 3차원 공간을 생각하는 능력이 꼭 필요한데요, 여러 시점을 하나로 묶고 새로운 시점으로 머릿속에서 돌리는 인간의 두 가지 핵심 능력이 모델에는 거의 없다는 걸 확인했어요. 공간 미세 조정까지 거쳤는데도 이 두 가지 능력이 부족하다는 말이에요. 쉽게 말하면, 눈에 보이는 걸 각자 따로 보기는 해도 전체 공간을 하나로 굴려 가며 생각하진 못한다는 셈이에요.",
            "easy2_title": "공간 토큰을 넣어 3차원 기하학을 모델 안에 심었습니다",
            "easy2_desc": "그래서 연구진은 압축된 공간 토큰을 써서 멀티모달 대형 언어 모델 안에 여러 시점의 기하학을 집어넣는 에스마인드(S-Mind)를 선보였는데요, 이 토큰들이 합쳐진 3차원 장면을 붙들고 있다가 필요한 시점마다 다시 뿜어내도록 지도한다는 거예요. 네 가지 공간 벤치마크에서 큐원3.5(Qwen3.5) 뼈대 모델보다 최대 22.26점 좋아졌고 지피티-6-아스트라(GPT-6-Astra), 키미-케이3.1-프로(Kimi-K3.1-Pro), 지엘엠-5.3-플래시(GLM-5.3-Flash) 같은 최첨단 일반 모델들의 평균 정확도도 넘어섰다는 장점이 있어요. 대신 토큰을 빼고 쓸 때도 능력이 유지되긴 하지만 훈련 중에 이 토큰들을 깊게 심어야 한다는 조건이 붙는다는 겁니다.",
            "topic": "멀티모달 대형 언어 모델이 3차원 공간을 이해하도록 여러 시점의 기하학을 내면화하는 에스마인드를 제안한 연구예요.",
            "one_line": "공간 토큰을 활용해 여러 시점의 3차원 기하학을 멀티모달 대형 언어 모델에 내면화함",
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
          },
          "authors": "Muxin Fu, Peike Yu, Guibin Zhang, Wenrui Zhou, Runze Liu, Lang Feng, Fuchao Yang, Feng Chen, Yixuan Li, Mengao Zhang, Shiying Zhang, Wen Shen, Ling Pan, Shuicheng Yan, Bo An",
          "categories": [],
          "comments": 2,
          "pdf": "https://arxiv.org/pdf/2611.28649"
        },
        {
          "canon_id": "2611.30962",
          "title": "Self-Evolving Evaluation Environments for Computer-Use Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.30962"
          },
          "published": "2026-11-24",
          "first_seen": "2026-11-25",
          "backlog": true,
          "hf_upvotes": 45,
          "score": 4.5,
          "score_why": "추천 45 → +4.5",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "고정된 시험 문제로는 AI 에이전트 실력을 제대로 못 알아보거든요",
            "easy1_desc": "컴퓨터를 쓰는 AI 에이전트는 빠르게 좋아지고 있는데요, 평가는 여전히 옛날 방식 그대로 멈춰 있거든요. 기존의 시험 문제들은 난이도가 고정되어 있거나 다루는 범위가 좁아서, AI가 얼마나 발전했는지 촘촘하게 가려내지 못한다는 거예요. 쉽게 말하면, 실력은 늘었는데 시험이 너무 낡아서 변별력이 떨어진 셈이라는 말이에요.",
            "easy2_title": "실험하면서 스스로 진화하는 평가 환경을 만들었습니다",
            "easy2_desc": "그래서 연구진은 실행 과정에서 나온 증거를 바탕으로 문제와 검증기를 함께 발전시키는 닫힌 고리 평가 환경인 CUA-SEE를 만들었는데요. 난이도를 조절하고 에이전트의 한계선을 정밀하게 찌르는 방식으로 평가 범위를 넓힌다는 거예요. 에이전트가 발전하는 만큼 시험도 같이 어려워져서 실력을 정확하게 잴 수 있다는 장점이 있는데, 대신 시스템이 계속 움직이기 때문에 평가 기준이 복잡해진다는 점도 같이 따라온다는 겁니다.",
            "topic": "컴퓨터를 사용하는 AI 에이전트를 위해 스스로 진화하며 평가하는 환경인 CUA-SEE를 제안한 논문이에요.",
            "one_line": "스스로 진화하는 컴퓨터 사용 AI 에이전트 평가 환경을 개발했어요",
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
          },
          "authors": "Wenhao Wang, Panrong Tong, Quyu Kong, Pengxiang Li, Haowen Yang, chenglin Cai, Siheng Chen, Yue Wang",
          "categories": [
            "cs.AI",
            "cs.CV"
          ],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.30962"
        },
        {
          "canon_id": "2611.25509",
          "title": "LingSante MedGuard Technical Report",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.25509",
            "arxiv": "https://arxiv.org/abs/2611.25509"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 34,
          "score": 4.4,
          "score_why": "추천 34 → +3.4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "의료용 AI가 위험한 말을 하는지 막아야 하는데요",
            "easy1_desc": "의료 인공지능이 환자 상담이나 진료 결정에 점점 많이 쓰이면서, 해롭거나 기준에 어긋나는 대답을 찾아내는 일이 중요해졌는데요. 이런 위험을 따지려면 진료 주장에 맞는 근거를 대고 계산을 확인해야 하는데, 이게 보통 까다로운 게 아니거든요. 쉽게 말하면, 안전하고 올바른 의료 인공지능을 쓰려면 숨은 위험을 꼼꼼히 걸러낼 방패가 꼭 필요하다는 겁니다.",
            "easy2_title": "의료 전문 지식을 하나로 묶은 방어막을 만들었어요",
            "easy2_desc": "그래서 연구진은 여러 의료 전문가 모델과 감독 모델의 힘을 합쳐 하나로 묶은 가드레일인 링샌테 메드가드(LingSante MedGuard)를 만들었는데요. 교사 모델의 지도와 오프라인 미세 조정, 그리고 다중 교사 정책 증류 방식을 거쳐 위험 감지 능력을 탄탄하게 끌어올렸다는 겁니다. 벤치마크 시험을 해 봤더니 크기에 따라 F1 점수가 4B에서 82.3%, 9B에서 82.4%, 27B에서 87.4%로 나왔는데요. 성능이 좋아진다는 장점이 있지만, 여러 전문 모델을 엮어야 해서 구조가 복잡해진다는 점도 같이 따라온다는 셈이에요.",
            "topic": "의료용 인공지능의 위험을 안전하게 걸러내기 위해 여러 전문 모델을 하나로 묶은 가드레일과 그 성능 평가에 대한 연구예요.",
            "one_line": "의료 AI 위험을 걸러내는 통합 가드레일과 벤치마크를 개발했어요.",
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
          },
          "authors": "LingSante MedGuard Team",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.25509"
        },
        {
          "canon_id": "2611.32554",
          "title": "PartAgent: Agentic 3D Part Segmentation via Expert Integration and Closed-Loop Refinement",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.32554",
            "arxiv": "https://arxiv.org/abs/2611.32554"
          },
          "published": "2026-11-24",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 33,
          "score": 4.3,
          "score_why": "추천 33 → +3.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "삼차원 물체를 부위별로 쪼개려는데 두 정보가 따로 돌았다",
            "easy1_desc": "삼차원 물체를 의미 있는 부위로 나누려면 기하학적 구조와 의미를 함께 따져야 하는데요, 삼차원 전문가가 공간 후보를 대주고 이차원 전문가가 이름표를 붙여 주는 식이었다는 겁니다. 문제는 이 두 가지 능력을 하나로 합쳐서 제대로 나누고 다듬을 틀이 마땅찮았다는 말이에요. 쉽게 말하면, 눈에 보이는 모양과 뜻을 매끄럽게 엮어 내기가 까다로웠던 셈이에요.",
            "easy2_title": "따로 놀던 전문가를 묶어 스스로 고치는 인공지능을 만들었다",
            "easy2_desc": "그래서 연구진은 훈련이 필요 없는 인공지능 체계인 파트너제트(PartAgent)를 내놓았는데요, 삼차원 구조 정보와 이차원 의미를 이미지와 표면 연결로 묶은 뒤에 스스로 고치게 만든 거예요. 여러 크기로 쪼개 보고 직접 살펴보며 고치는 과정을 거친다는 장점이 있는데, 대신 여러 단계를 거치느라 처리 과정이 복잡해진다는 점도 같이 따라온다는 겁니다. 쉽게 말하면, 전문가 둘을 한 팀으로 묶고 스스로 검사하게 만들었더니 성능이 훨씬 높아졌다는 말이에요.",
            "topic": "삼차원 부위 분할 성능을 높이기 위해 구조와 의미 전문가를 묶고 스스로 고치도록 만든 인공지능 체계에 대한 내용이에요.",
            "one_line": "삼차원 부위 분할을 위해 전문가들을 묶고 스스로 고치는 인공지능 체계를 만들었어요.",
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
          },
          "authors": "Yang Cao, Zhe Zhu, Yiheng Zhang, Zhengqiang Zhang, Haoyuan Li, Le Wan, Dan Xu",
          "categories": [],
          "comments": 2,
          "pdf": "https://arxiv.org/pdf/2611.32554"
        },
        {
          "canon_id": "2611.32960",
          "title": "From Safety-Driven Redundancy to Value-Driven Architecture: An ODD-Based Rationalization Framework for Level 4 Autonomous Vehicles",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32960"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡해지는 자율주행 아키텍처를 어떻게 손볼지가 문제였는데요",
            "easy1_desc": "레벨 4 자율주행차가 산업화 과정으로 나아가면서, 시스템이 너무 복잡해지고 비용과 검증 부담이 커진다는 점이 문제였는데요. 연구진은 안전을 지키면서도 불필요한 요소를 줄여 효율을 높여야 한다는 필요성에서 출발했어요. 쉽게 말하면, 차가 안전해야 하는 건 기본인데 구조가 너무 무거워져서 이대로는 쓰기 어렵다는 말이에요.",
            "easy2_title": "작동 영역을 기준으로 안전과 비용을 함께 맞추는 체계를 만들었는데요",
            "easy2_desc": "그래서 연구진은 작동 설계 영역(ODD)을 기준으로 안전 조건을 먼저 따진 뒤 구조를 바꾸는 엔지니어링 프레임워크를 제안했는데요. 직접 구조를 없애기보다는 기능을 재배치하고 합쳤더니, 5,000개의 불확실성 조건 속에서도 비용을 낮추는 대안들을 찾아냈다는 거예요. 서류상의 설계 후보라는 한계는 있지만, 안전을 해치지 않으면서도 비용을 줄일 수 있는 가능성을 보여줬다는 셈이에요.",
            "topic": "레벨 4 자율주행차의 안전을 지키면서도 비용과 구조를 효율적으로 다듬기 위해 작동 설계 영역(ODD)을 활용한 시스템 엔지니어링 프레임워크를 제안하고, 이를 가상의 사례로 검증한 연구예요.",
            "one_line": "작동 설계 영역(ODD) 기반 자율주행 아키텍처 합리화 프레임워크를 제안하고 비용 절감 효과를 검증했어요.",
            "topic_tag": "제어·로봇",
            "limit": "이번 연구에서 보고된 변환 결과는 실제 검증된 양산형 아키텍처가 아니라 설계 후보군에 불과합니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
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
              "one_line 59자"
            ],
            "flags": [],
            "tag": "제어·로봇",
            "limit_ok": true,
            "show_limit": true
          },
          "authors": "Tiago Sim\\~ao Ferreira (Federal Institute of Minas Gerais - IFMG), Farzad Fallahi (University of Luxembourg)",
          "categories": [
            "eess.SY",
            "cs.RO",
            "cs.SY"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32960"
        },
        {
          "canon_id": "2611.32913",
          "title": "Compositional Reachset-Conformant Modeling for Managing Uncertainty in the Development of Cyber-Physical Systems",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32913"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 모델은 한 가지만 예측해서 문제가 생겼다",
            "easy1_desc": "연구진은 사이버물리시스템(CPS)을 개발할 때 전통적인 모델은 가장 가능성이 높은 행동 하나만 예측해 왔는데요, 이러면 실제 시스템과 모델 사이에 오차가 생겨서 뒤늦은 시험 단계에서야 문제가 터진다는 겁니다. 이 시기에는 다시 설계하기가 가장 비싸고 힘들어진다는 말이에요. 쉽게 말하면, 미리 불확실성을 다 잡지 못해서 나중에 큰 코를 다치게 된다는 셈이에요.",
            "easy2_title": "데이터로 불확실성을 감싸는 새로운 모델을 제안했다",
            "easy2_desc": "그래서 연구진은 단일 경로 대신 통계적 보장과 함께 실제 시스템 행동을 보수적으로 감싸는 도달집합 순응 모델(reachset-conformant modeling)이라는 프레임워크를 선보였는데요, 모델에서 확인된 안전 성질이 실제 시스템으로 그대로 이어진다는 장점이 있어요. 다만 설계를 바꿨을 때 불확실성 집합을 다시 맞추는 과정이 필요하다는 점도 같이 따라온다는 겁니다. 쉽게 말하면, 데이터 기반으로 여러 가능성을 미리 묶어 두어 나중에 비싼 수정 비용을 아끼게 된다는 말이에요.",
            "topic": "사이버물리시스템 개발 과정에서 불확실성을 관리하기 위해 도달집합 순응 모델을 제안하고 그 이론적 성질과 적용 결과를 다룬 연구예요.",
            "one_line": "사이버물리시스템의 불확실성을 관리할 도달집합 순응 모델을 제안하고 그 성질을 증명했어요.",
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
          },
          "authors": "Laura L\\\"utzow, Francesco Pio Urbano, Tobias D\\\"user, Matthias Althoff",
          "categories": [
            "eess.SY",
            "cs.SY"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32913"
        },
        {
          "canon_id": "2611.32814",
          "title": "Space Postman and ATLAS: Enabling Startup Participation in the Orbital Logistics Economy",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32814"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "우주 물류는 하고 싶은데 궤도 계산이 너무 어렵고 복잡하다",
            "easy1_desc": "우주 쓰레기 치우기나 연료 채워주기 같은 사업들은 원래 궤도 역학이랑 최적화 기술이 엄청 필요한데요, 페이로드나 위성 만드는 회사들이 이런 걸 다 직접 하기는 힘들거든요. 그래서 젊은 스타트업들이 우주 물류 시장에 들어오기 어렵거나, 아니면 비싸게 손으로 일일이 일정을 짜야 한다는 말이에요. 쉽게 말하면, 기술 장벽 때문에 진입 자체가 막혀 있는 셈이라는 겁니다.",
            "easy2_title": "소프트웨어로 먼저 궤도를 짜 주고 나중에 터그를 붙인다",
            "easy2_desc": "그래서 연구진은 목표 목록과 우주선, 시간 예산을 넣으면 가격이 매겨지고 검증된 임무 계획을 만들어주는 스페이스 포스트맨(Space Postman)이라는 계획 서비스를 내놨는데요, 페이로드 베이에 각종 장비를 싣는 터그 개념인 아틀라스(ATLAS)도 같이 소개했어요. 돈이 떨어지면 망하는 스타트업들의 특성을 고려해서 소프트웨어를 먼저 제공하고 우주선은 나중에 붙이는 방식을 쓴다는 거예요. 서비스 진입 장벽을 낮춰주는 장점이 있는데, 대신 결과 숫자를 얻은 정밀도 그대로 읽어야 한다는 조건도 같이 붙는다는 겁니다.",
            "topic": "우주 물류 사업에 새로 뛰어드는 스타트업들을 위해 궤도 계획 소프트웨어와 터그 개념을 함께 제안한 논문이에요.",
            "one_line": "우주 물류 스타트업을 위한 궤도 계획 서비스와 터그 개념을 제안하고 검증했어요.",
            "topic_tag": "전력망·계통",
            "limit": "제안된 보정된 계획기를 쓸 때는 그 숫자들이 얻어진 정밀도 그대로 읽어야 한다는 조건이 붙습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          },
          "authors": "Omer Burak Iskender, Kaan G\\\"okt\\\"urk",
          "categories": [
            "eess.SY",
            "astro-ph.IM",
            "cs.SY"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32814"
        },
        {
          "canon_id": "2611.32774",
          "title": "Contract2Reach: Discretization-Induced Contractive Dynamic Programming for High-Dimensional Hamilton-Jacobi Reachability",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32774"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식은 변수 고르기에 너무 민감했다",
            "easy1_desc": "물리 기반 신경망(PINNs)을 쓰면 차원이 높은 시스템도 분석할 수 있지만, 하이퍼파라미터나 시스템 움직임에 따라 성능이 크게 흔들린다는 문제가 있었거든요. 연구진은 이 문제를 해결하려고 끝이 정해진 유한 구간 분석을 수축하는 고정점 문제로 바꿔서 뒤로 시간을 거슬러 가며 푸는 방법을 써봤는데요. 할인 요소를 따로 넣지 않고도 시간이랑 공간의 미분 값을 합쳐서 수축 매핑을 만들어 낸 겁니다. 쉽게 말하면, 흔들리기 쉬운 기존 방식 대신 더 단단한 구조로 계산을 바꿨다는 말이에요.",
            "easy2_title": "시간과 공간을 잘 쪼개서 수축 매핑으로 해결했다",
            "easy2_desc": "그래서 연구진은 Contract2Reach라는 방식을 내놓았는데요, 시간과 공간의 간격을 쪼개서 정확한 해로 수렴한다는 걸 증명했어요. 공간 기울기를 거슬러 계산하지 않고 한 번의 회귀로 값을 맞추는 방식인데, 적응형 샘플링과 보수적 타깃 결합을 써서 높은 차원에서 생기는 표본 부족과 오탐을 막았다는 겁니다. 드론이나 13차원 쿼드콥터, 40차원 시스템 실험에서 기존 방식보다 나은 성능을 보여줬는데요. 장점은 민감도가 낮아지고 정확도가 올라간다는 것인데, 대신 복잡한 신경망 구현 과정에서 신경 써야 할 조건들이 늘어난다는 점도 같이 따라온다는 셈이에요.",
            "topic": "고차원 시스템을 다루기 위해 할인 요소 없이 수축 매핑을 활용하는 새로운 분석 방식인 Contract2Reach를 제안하고 검증한 연구예요.",
            "one_line": "할인 없는 수축 동적 프로그래밍 기반의 고차원 분석법을 제안했어요.",
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
          },
          "authors": "Jaeyoung Lee, Donggun Lee, Jason J. Choi, Namhoon Cho",
          "categories": [
            "eess.SY",
            "cs.SY"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32774"
        },
        {
          "canon_id": "2611.32558",
          "title": "Automated Design and Evaluation Pipeline for Optimal Control Transcriptions in Model Predictive Control",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32558"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "계산이 너무 무거워서 실시간으로 쓰기 힘들었거든요",
            "easy1_desc": "모델 예측 제어(MPC)를 쓸 때 계산이 너무 많아지는 게 걸림돌이었는데요, 알맞은 제어 변환(transcription) 방식을 고르려면 깊은 지식과 노력이 많이 필요하다는 겁니다. 뭔 소리냐면, 어떤 방식을 골라야 가장 빠른지 찾는 과정 자체가 복잡하다는 말이에요.",
            "easy2_title": "알아서 최적의 방식을 찾아주는 자동 파이프라인을 만들었거든요",
            "easy2_desc": "그래서 연구진은 제어 변환 방식을 자동으로 설계하고 평가하는 파이프라인을 제안했는데요, 베이지안 최적화(Bayesian Optimization)를 써서 가장 알맞은 구성을 찾는 방식이에요. 계산 시간이나 닫힌 고리 성능 같은 목표를 직접 정해서 줄일 수 있다는 장점이 있는데, 대신 우주선 궤도 서비스 같은 시나리오로 검증해 봐야 한다는 조건이 같이 따라온다는 겁니다.",
            "topic": "모델 예측 제어에서 가장 알맞은 제어 변환 방식을 자동으로 설계하고 평가하는 파이프라인을 제안한 내용이에요.",
            "one_line": "모델 예측 제어 변환 방식을 자동으로 설계하는 파이프라인을 만들었어요.",
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
          },
          "authors": "Fabio Schneider, Peter K\\\"otting, Renato Loureiro",
          "categories": [
            "eess.SY",
            "cs.SY"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32558"
        },
        {
          "canon_id": "2611.32441",
          "title": "Overparameterized Simulation-Error Minimization for Nonlinear System Identification: Horizon-Uniform Landscape and Identifiability",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32441"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "긴 데이터를 넣으면 계산이 꼬이는 문제점이 있었어요",
            "easy1_desc": "비선형 시스템(복잡한 변화를 보이는 시스템)을 분석할 때 시뮬레이션 오차를 줄이는 방식은 흔히 쓰이는데요, 데이터 기간인 N이 길어질수록 최적화할 공간이 울퉁불퉁해지고 상태가 기하급수적으로 나빠진다는 약점이 있었어요. 연구진은 이 문제를 풀기 위해 각 단계마다 부드럽게 벌점을 주는 방식으로 궤도를 끌어올리는 방법을 제안했는데요, 그 결과 경사하강법이 최솟값을 확실하게 찾아낼 수 있는 조건을 만족하게 된다는 거예요. 쉽게 말하면, 데이터가 길어져도 계산이 무너지지 않는 길을 찾았다는 말입니다.",
            "easy2_title": "벌점을 주는 방식을 더해서 진짜 값을 찾아내도록 바꿨어요",
            "easy2_desc": "손실이 0인 상태만으로는 실제 물리 파라미터를 정확히 알 수 없는데, 연구진은 최소한의 벌점을 골라내는 원리를 더해 이 문제를 해결했는데요, 구조적 식별성이 보장된 상태에서는 어떤 양의 벌점 가중치를 쓰든 진짜 파라미터를 정확히 찾아낸다는 거예요. 잡음이나 모델에 없는 동역학이 들어와도 오차가 불일치 수준에 비례해서만 커진다는 장점이 있는 반면, 벌점 가중치를 조절하는 과정이 추가된다는 점도 같이 따라온다는 겁니다. 쉽게 말하면, 복잡한 데이터에서도 진짜 값을 놓치지 않고 찾아내는 추정기를 만들었다는 셈이에요.",
            "topic": "비선형 시스템을 분석할 때 데이터가 길어져도 계산이 무너지지 않도록 시뮬레이션 오차 최소화 방식을 개선한 연구예요.",
            "one_line": "긴 데이터에서도 안정적인 비선형 시스템 분석법을 개발했어요",
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
          },
          "authors": "Cesare Donati, Constantino Lagoa",
          "categories": [
            "eess.SY",
            "cs.SY"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32441"
        },
        {
          "canon_id": "2611.32421",
          "title": "Stability and periodic switching in feedback systems with sector-bounded hybrid integrators",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32421"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "왜 예전 방식으로는 안 되나 봤더니",
            "easy1_desc": "선형 시불변 공정과 부동 구간 하이브리드 적분기가 얽힌 조각별 선형 시스템의 안정성을 살펴봤는데요. 상태에 따라 바뀌는 전환 순서가 시간이 흐르면 주기적인 행동을 보인다는 점을 이용해, 기존의 충분조건 중심인 리아푸노프 방식 대신 새로운 스펙트럼 분석법을 개발했다는 거예요. 쉽게 말하면, 기존 방법으로는 다루기 까다로웠던 복잡한 시스템의 안정성을 다른 각도에서 파고들 수 있게 했다는 셈이에요.",
            "easy2_title": "주기적 성질을 파고들어 안정성을 따져봤다",
            "easy2_desc": "연구진은 초기 조건이나 시스템 안정성과 상관없이 점근적 주기가 항상 성립한다는 추측을 세우고, 극한 시스템의 형태를 설명하며 그 매개변수를 구하는 알고리즘을 제안했는데요. 2차 선형 시불변 공정에 대해서는 이를 엄밀하게 증명해 냈다는 겁니다. 그 결과 나온 주기적 극한 시스템의 스펙트럼 성질을 바탕으로 충분한 안정성 조건을 이끌어냈는데, 일반적인 조각별 선형 시스템의 정확한 안정성 분석에 새로운 시각을 준다는 장점이 있어요.",
            "topic": "조각별 선형 시스템의 안정성을 분석하기 위해 스펙트럼 접근법을 도입하고 주기적 극한 시스템을 활용한 연구예요.",
            "one_line": "조각별 선형 시스템의 안정성 분석을 위한 스펙트럼 접근법을 개발함",
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
          },
          "authors": "Sebastiaan van den Eijnden, Kai Wulff, Christoph Weise, Johann Reger",
          "categories": [
            "eess.SY",
            "cs.SY"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32421"
        },
        {
          "canon_id": "2611.32279",
          "title": "Online outlier-resilient data-driven moving horizon estimation for linear discrete-time systems",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32279"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "값이 튀는 데이터 때문에 시스템 상태를 제대로 못 짚어내는 게 문제였어요",
            "easy1_desc": "선형 시스템에서 실시간으로 들어오는 출력 측정값에 엉뚱하게 튀는 값들이 섞여 들어오면 상태를 정확히 추정하기 어려운데요. 연구진은 시스템 모델을 직접 구하지 않고 예전 데이터만 가지고 이 문제를 해결해 봤거든요. 뭔 소리냐면, 엉뚱한 값이 섞여 들어와도 흔들리지 않게 상태를 추정하는 새로운 방식을 제안했다는 말이에요. 쉽게 말하면, 데이터에 오류가 섞여 있어도 속지 않고 진짜 상태를 찾아내겠다는 겁니다.",
            "easy2_title": "엉뚱한 값을 걸러내는 손실 함수를 써서 정확한 상태를 찾아냈어요",
            "easy2_desc": "그래서 연구진은 윌렘스의 기본 보조정리를 바탕으로, 튀는 값을 걸러낼 수 있는 잘린 이차 손실을 쓰는 추정 방식을 제안했는데요. 이 방식을 쓰면 추정 오차가 일정하게 제한되는 조건도 이론적으로 확실히 세워졌다는 거예요. 시뮬레이션을 돌려봤더니 엉뚱한 값이 섞인 상황에서도 정확한 상태 값을 잘 찾아낸다는 점을 확인했다고 하는데요. 계산이 복잡해질 수 있다는 점은 있지만, 노이즈에 강해진다는 확실한 장점이 함께 따라온다는 겁니다.",
            "topic": "임의의 튐 값이 섞인 선형 시스템에서 데이터를 바탕으로 상태를 안정적으로 추정하는 기법에 대한 연구예요.",
            "one_line": "데이터 기반의 이상치 강인 상태 추정 기법을 제안했어요.",
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
          },
          "authors": "Jingshi Yao, Zenghong Huang, Xiaojie Li, Xunyuan Yin",
          "categories": [
            "eess.SY",
            "cs.SY"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32279"
        },
        {
          "canon_id": "2611.32078",
          "title": "Iterative Identification of Aperiodic Sampled-Data Systems via Affine LPV Models Scheduled by the Sampling Interval",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32078"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "불규칙하게 측정한 데이터로 제어 모델을 만들려고 했다",
            "easy1_desc": "연구진은 주기적이지 않게 신호를 모은 데이터에서 연속 시간 선형 시스템의 제어용 모델을 찾아내는 방식을 제안했는데요. 연속 시간 행렬을 그대로 복원하는 대신, 샘플링 간격의 변화에 따라 변하는 이산 시간 선형 매개변수 변동(LPV) 상태 공간 모델을 직접 찾아냈다는 겁니다. 뭔 소리냐면, 간격이 들쭉날쭉한 데이터에서도 제어에 바로 쓸 수 있는 모델 구조를 바로 뽑아냈다는 말이에요.",
            "easy2_title": "반복해서 다듬어 봤더니 정확도가 크게 높아졌다",
            "easy2_desc": "그래서 처음에는 표준 선형 시불변(LTI) 부분 공간 모델에서 대략적인 값을 먼저 얻은 다음, 상태 서열 복원과 매개변수 조절을 반복해서 거쳤는데요. 숫자를 확인해 봤더니, 기존의 고정된 LTI 모델이 망가지는 넓은 샘플링 간격 변화 속에서도 높은 검증 정확도를 유지하는 것으로 보입니다. 반복 과정을 거치면서 상태를 직접 잰 기준에 아주 가까워진다는 장점이 있는데, 대신 초기 추정치부터 다시 다듬는 과정을 거쳐야 한다는 점도 같이 따라온다는 겁니다.",
            "topic": "불규칙한 샘플링 간격 데이터를 활용해 이산 시간 선형 매개변수 변동(LPV) 제어 모델을 반복적으로 찾아내는 방법과 그 정확도를 확인한 연구예요.",
            "one_line": "불규칙한 샘플링 데이터의 LPV 제어 모델 식별법 제안",
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
          },
          "authors": "Hiroshi Okajima, Yohei Hosoe",
          "categories": [
            "eess.SY",
            "cs.SY"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32078"
        },
        {
          "canon_id": "2611.32040",
          "title": "Active road noise control using networked mean-square learning and lightweight conditional compensation experts",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32040"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "복잡한 소음을 잡아야 하는데 연산은 가볍게 줄여야 했습니다",
            "easy1_desc": "연구진은 다채널 능동 도로 소음 제어(ARNC) 상황에서 인과 관계와 연산 한계를 지키며 소음을 줄여야 하는 문제를 다뤘는데요, 선형 제어와 조건부 비선형 잔차 보상을 서로 떼어놓는 방식으로 효율적인 방안을 제안해 봤습니다. 뭔 소리냐면, 기본 필터는 네트워크 기반 학습으로 구하고 복잡한 보상은 전문가 모듈이 맡아서 처리한다는 말이에요. 이 과정에서 샘플 그래프로 라우팅 확률을 규제하고 다중 해상도로 최적화를 거친다는 겁니다. 쉽게 말하면, 성능은 높이면서 계산 부담은 확 낮추려고 했다는 셈이에요.",
            "easy2_title": "가벼운 전문가 모듈을 써서 계산 비용은 확 낮추고 소음은 더 잘 잡았습니다",
            "easy2_desc": "그래서 연구진은 유한 임펄스 응답(FIR) 기본 필터와 다중 해상도 FIR 전문가 혼합(MRF-MoE) 모듈을 함께 쓰는 구조를 만들어 봤는데요, 추론할 때는 단일 전문가만 라우팅하도록 골라서 계산량을 크게 줄였다는 겁니다. 실험해 봤더니 같은 설정을 쓴 WaveNet-VNN과 비교해서 추론 비용은 96.3% 줄어드는 대신 테스트 세트에서는 더 높은 소음 저감(NR)을 보여줬다고 해요. 계산은 훨씬 가벼워졌는데 성능은 오히려 더 좋아졌다는 장점이 있는 반면, 구조가 복잡해져서 학습 단계가 여러 개로 나뉜다는 점도 같이 따라온다는 겁니다.",
            "topic": "연산 한계를 극복하기 위해 선형 제어와 조건부 비선형 잔차 보상을 분리하고 가벼운 전문가 모듈을 활용하여 다채널 능동 도로 소음 제어를 수행하는 효율적인 방법에 대한 연구예요.",
            "one_line": "선형 제어와 보상을 분리한 가벼운 소음 제어법을 제안했어요.",
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
          },
          "authors": "Xingzhao Huang, Hengzhi Zhou, Yu Shi, Ming Wu, Bin Liao, Yijing Chu",
          "categories": [
            "eess.SY",
            "cs.SY"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32040"
        },
        {
          "canon_id": "2611.31889",
          "title": "Barrier-Based Safety Filtering for Quadrotor Flight in Cluttered Environments Under Acceleration Limits",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31889"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "장애물 피해 날아가려는데 가속도 한계까지 겹쳐서 불안했거든요",
            "easy1_desc": "연구진은 쿼드로터(드론)가 장애물이 많은 곳을 일정한 높이로 날아갈 때, 단순히 목표 경로만 잘 쫓아가는 것으로는 안전을 지키기 어렵다는 점에 주목했는데요. 원래 쓰던 제어기에 고차 제어 장벽 제약 조건과 가속도 제한 최적화 프로그램을 합쳐서 안전 필터 틀을 만들어 봤어요. 안전 필터는 장애물과의 거리가 충분할 때는 원래 가속도를 그대로 두고, 위험할 때만 가속도를 바꿔서 충돌을 막아주는 방식이라는 겁니다. 쉽게 말하면, 경로를 따라가면서도 장애물에 부딪히지 않게 중간에서 조종을 바로바로 잡아주는 셈이에요.",
            "easy2_title": "안전 필터를 붙여 봤더니 최소 거리가 크게 늘어났는데요",
            "easy2_desc": "그래서 연구진이 가상의 평면 장애물 환경에서 실험을 해 봤더니, 안전 필터를 썼을 때는 최소 거리가 0.000~0.001 m로 유지된 반면 안 썼을 때는 마이너스 값으로 떨어졌다고 해요. 대신 속도 규모를 0.6에서 1.6으로 키울 때 추종 오차(RMSE)가 0.618에서 0.950 m로 늘어난다는 단점도 함께 나타났는데요. 안전을 지키는 과정에서 정확도가 살짝 떨어진다는 장단점을 동시에 보여주는 결과라는 겁니다. 쉽게 말하면, 안전을 챙기려니 경로를 딱 맞추기는 조금 더 벅차졌다는 말이에요.",
            "topic": "가속도 한계가 있는 장애물 환경에서 쿼드로터의 안전한 비행을 돕는 안전 필터 기반 경로 추종 틀을 제안하고 그 성능을 분석한 논문이에요.",
            "one_line": "쿼드로터 비행을 위한 안전 필터 기반 경로 추종 틀을 제안하고 분석했어요.",
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
          },
          "authors": "Andi Rahmadiansah",
          "categories": [
            "eess.SY",
            "cs.SY"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31889"
        },
        {
          "canon_id": "2611.31804",
          "title": "Federated Policy Gradient for Dynamic Consensus: Gradient Dominance and Topological Bounds",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31804"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "여러 로봇이 움직일 때 통신망 때문에 뜻대로 안 되는 게 문제였어요",
            "easy1_desc": "연구진은 여러 로봇이나 에이전트(대리인)가 함께 움직이는 분산 제어(중앙 통제 없이 각자 움직이는 기술) 시스템을 살펴봤는데요, 통신 네트워크의 구조적인 특성 때문에 공간마다 상태가 달라져서 제어가 무척 까다로워진다는 점을 문제로 짚었어요. 뭔 소리냐면, 각 로봇이 어떻게 움직이는지 다 알아도 연결된 망의 특성 때문에 전체 조율이 쉽게 틀어진다는 말이에요. 결국 정보가 부족해서가 아니라 통신망의 한계 때문에 전체 시스템을 최적화하기 어렵다는 셈이에요.",
            "easy2_title": "연합 학습과 정책 경사를 합쳐서 전체 합의를 찾아냈다는 겁니다",
            "easy2_desc": "그래서 연구진은 분산 제어 이론과 연합 정책 경사(여러 주체가 협력해 최적의 행동 방침을 찾는 알고리즘)를 연결하는 새로운 최적화 방식을 제안했는데요, 그래프의 특성 분석을 통해 전체 수렴을 보장하는 조건을 찾아내고 초기 안정화 정책 없이도 작동하는 알고리즘을 만들었어요. 이 방식을 쓰면 정책 최적화 과정이 빠르게 수렴한다는 장점이 있는데, 대신 네트워크의 특성에 따라 성능이 크게 좌우된다는 점도 함께 따라온다는 겁니다. 쉽게 말하면, 복잡한 통신망 속에서도 초기 조건에 연연하지 않고 전체가 조화를 이루도록 만드는 길을 열었다는 말이에요.",
            "topic": "동적 합의(여러 주체가 실시간으로 의견이나 상태를 맞추는 과정)를 이루기 위해 분산 제어 이론과 연합 정책 경사를 연결하는 새로운 최적화 프레임워크를 제안하고, 그 수렴 성능을 분석했어요.",
            "one_line": "동적 합의를 위한 연합 최적화 프레임워크를 제안하고 수렴 조건을 분석했어요.",
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
          },
          "authors": "Maryam Babazadeh",
          "categories": [
            "eess.SY",
            "cs.SY"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31804"
        },
        {
          "canon_id": "2611.31764",
          "title": "Gaussian Process Data-Driven Hamiltonian for Probabilistic Safe Set Construction",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31764"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "정확한 모델이 없어 안전을 따지기 어려웠어요",
            "easy1_desc": "비선형 시스템의 안전을 검증하는 기존의 방식인 Hamilton-Jacobi 도달 가능성 분석은 정확한 동역학 모델이 필요하다는 한계가 있었는데요, 데이터를 기반으로 해밀턴 함수를 직접 구하는 방식이 나왔지만 알 수 없는 동역학의 립시츠 상수를 유한한 데이터로 증명하기 어렵고 보수적인 결과를 낳는다는 문제가 있었거든요. 뭔 소리냐면, 기존 방식은 정확한 모델이 없으면 안전한 영역을 너무 좁게 잡게 된다는 말이에요. 그래서 연구진은 가우스 과정(Gaussian process)을 활용해 이 문제를 해결해 보기로 한 겁니다.",
            "easy2_title": "가우스 과정을 써서 더 넓고 안전한 영역을 찾았어요",
            "easy2_desc": "그래서 연구진은 가우스 과정 기반 데이터 구동 해밀턴 함수(GP-DDH)라는 방식을 제안했는데요, 동역학에 가우스 과정 사전 확률을 적용해 확률적 보장이 되는 안전 영역을 만든다는 계획이에요. 신뢰 매개변수를 고르는 두 가지 방법을 제안해 해밀턴 함수 하한을 보장하도록 만들었는데, 장점은 기존 방식보다 실제 안전 영역의 더 넓은 부피를 찾아낸다는 것이고 대신 계산 과정에서 확률적 보장을 거쳐야 한다는 점이 같이 따라온다는 겁니다. 쉽게 말하면, 기존보다 훨씬 정확하면서도 더 넓은 안전 영역을 찾아낼 수 있다는 셈이에요.",
            "topic": "가우스 과정을 활용해 데이터 기반으로 확률적 안전 영역을 구축하는 GP-DDH 프레임워크를 제안한 내용이에요.",
            "one_line": "가우스 과정 기반 해밀턴 함수로 안전 영역을 구축했어요.",
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
          },
          "authors": "Seungseok Oh, Junho Kim, Jason J. Choi, Namhoon Cho",
          "categories": [
            "eess.SY",
            "cs.SY"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31764"
        },
        {
          "canon_id": "2611.31568",
          "title": "Heterogeneous Risk-Sensitive Evolutionary Learning in Coordination Games: Polarization, Welfare Loss, and Intervention for Efficiency",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31568"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "사람마다 위험을 대하는 태도가 달라서 생기는 문제예요",
            "easy1_desc": "협력 게임에서 사람들이 학습할 때 위험을 어떻게 받아들이는지 그 태도를 다르게 설정해 봤는데요, 그랬더니 두 집단이 서로 다른 행동을 선택하며 갈라지는 편향된 상태가 나타나는 걸 확인했습니다. 이게 왜 문제냐면, 모두에게 더 이득이 되는 최선의 균형점보다 훨씬 못한 결과에 머무르게 되기 때문이에요. 쉽게 말하면, 구성원들의 위험 성향이 제각각인 것만으로도 전체의 효율성이 떨어지는 비효율적인 결과가 고착화될 수 있다는 겁니다.",
            "easy2_title": "사람들의 위험 성향을 살짝 바꿔서 효율을 높여 봤어요",
            "easy2_desc": "그래서 연구진은 이런 비효율을 줄이려고 학습 과정에서 에이전트들의 위험 성향을 조정하는 개입 방식을 제안했는데요, 일정 비율 이상의 에이전트를 대상으로 위험 파라미터를 충분히 높여 주면 가장 이득이 큰 균형 상태로 돌아온다는 걸 밝혀냈습니다. 다만 개입하는 사람의 수와 강도 중 하나라도 부족하면 효과가 없다는 한계도 분명히 했거든요. 결국 두 조건이 모두 충족되어야만 효율적인 상태를 안정적으로 유지할 수 있다는 말이에요.",
            "topic": "위험 성향이 다른 에이전트들이 협력 게임을 학습할 때 발생하는 비효율적인 결과를 분석하고, 이를 해결하기 위한 개입 전략을 제시했어요.",
            "one_line": "위험 성향이 다른 에이전트들의 학습 모델을 분석하고 개입을 통해 효율성을 높였어요.",
            "topic_tag": "수학·이론",
            "limit": "개입의 효과를 보려면 개입 대상의 비율과 강도가 모두 충분해야 한다는 조건이 있습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          },
          "authors": "Solaleh Mohammadi, Yiman Fong, Kaiqing Zhang",
          "categories": [
            "eess.SY",
            "cs.GT",
            "cs.MA",
            "cs.SY"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31568"
        },
        {
          "canon_id": "2611.31545",
          "title": "Tube-Based Robust Data-Driven Predictive Control for Linear Parameter-Varying Systems With Noisy Data",
          "field": "eess.SY",
          "sources": [
            "eess.SY"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31545"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 4.0,
          "score_why": "전공 +3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시끄러운 데이터로 시스템을 제어하려니 오차가 생기는 문제",
            "easy1_desc": "연구진은 잡음이 섞인 입력과 상태 데이터를 가지고 선형 매개변수 변화 시스템을 제어하는 방법을 제안했는데요,  Hankel 계수를 제한했더니 노이즈 때문에 생기는 예측 오차는 잡을 수 있었지만 중요한 궤적들을 놓칠 수 있다는 한계가 생겼다는 거예요. 뭔 소리냐면, 데이터를 다루는 과정에서 오차를 막으려다 보니 쓸 수 있는 유효한 움직임까지 일부 잘려 나갈 수 있다는 말이에요.",
            "easy2_title": "오프라인 데이터와 튜브 기법을 엮어 안정적인 제어기를 만들었습니다",
            "easy2_desc": "그래서 연구진은 볼록 껍질 조건과 데이터 일관성을 활용해 필요한 표현력을 되살렸고, 튜브 조이기 요소를 직접 계산해 온라인 문제를 이차 계획법으로 풀었는데요, 그 결과 재귀적 실현 가능성과 제약 조건 만족, 그리고 실용적인 입력-상태 안정성을 확인했다고 해요. 쉽게 말하면, 노이즈가 있는 상황에서도 시스템이 안정적으로 작동하도록 만드는 제어 체계를 완성했다는 겁니다.",
            "topic": "잡음이 포함된 데이터를 활용해 선형 매개변수 변화 시스템을 안정적으로 다루기 위한 튜브 기반 강인 데이터驱动 예측 제어 기법을 제안한 논문이에요.",
            "one_line": "잡음 데이터 기반 선형 시스템의 튜브 기반 강인 예측 제어 기법을 제안했어요.",
            "topic_tag": "제어·로봇",
            "limit": "데이터를 제어에 쓸 때 헹켈 계수를 제한하면 노이즈 예측 오차는 잡지만 관련 궤적들이 제외될 수 있는 한계가 있습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          },
          "authors": "Chi Wang, David Angeli",
          "categories": [
            "eess.SY",
            "cs.SY",
            "math.OC"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31545"
        },
        {
          "canon_id": "2611.33010",
          "title": "Embodied AI Fails the Mirror Test: How a Simple Mirror Breaks Robot Policies",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.33010",
            "arxiv": "https://arxiv.org/abs/2611.33010"
          },
          "published": "2026-11-24",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 28,
          "score": 3.8,
          "score_why": "추천 28 → +2.8 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "거울 하나 놓았을 때 로봇 정책이 얼마나 흔들리는지 알아봤습니다",
            "easy1_desc": "연구진은 거울 자기 인식 테스트에서 영감을 받아, 거울이 있는 장면에서 로봇 정책이 물리적 물체를 제대로 다루는지 알아봤는데요. 비전-언어-행동 모델과 월드 액션 모델, 에이전트 정책을 포함하는 5가지 정책을 시험해 봤더니, 모든 거울 조건에서 전체 성공률이 10.8에서 56.7 퍼센트포인트까지 떨어졌다는 겁니다. 거울이 달린 탁자 위에서는 낙폭이 62.5포인트까지 커졌다는 말이에요. 쉽게 말하면, 단순한 거울 환경 하나만으로도 다양한 로봇 정책이 공통된 취약점을 드러낸 셈이라는 겁니다.",
            "easy2_title": "단순 충돌 때문이 아니라 반사된 대상에 대한 착각 때문이라는 겁니다",
            "easy2_desc": "거울이 물리적인 장애물이라서 생기는 문제인지 확인하려고 기하학적으로 일치하는 반사되지 않는 판넬과 비교해 봤는데요. 거울 관련 실패의 50--88%는 로봇과 판넬의 접촉 없이 일어났기 때문에, 단순한 충돌만으로는 성능 저하를 설명할 수 없다는 겁니다. 대신 궤적과 접촉을 분석해 보니 반사된 물체를 향한 허깨비 겨냥과 진짜 물체의 공간 위치 오인과 일치하는 반복 행동이 드러났다고 하는데요. 장점은 문제의 원인을 구체적으로 파악했다는 점인데, 단점은 여전히 거울 환경에서 로봇이 약하다는 사실 자체가 남는다는 말이에요.",
            "topic": "거울 환경이 다양한 로봇 조작 정책에 미치는 영향을 평가하고 반사된 이미지로 인한 취약점을 분석한 연구예요.",
            "one_line": "거울 환경이 로봇 조작 정책에 미치는 취약점과 원인을 분석했어요.",
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
          },
          "authors": "Xuanchen Liu, Hejun Zhang, Boxuan Dong, Ying Wu, Heshuai Li, Wen Gao, Yonghong Tian, Weihao Yu",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.33010"
        },
        {
          "canon_id": "2611.25848",
          "title": "Interpretable Prototype-Conditioned Adaptation for Weather Forecasting",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.25848",
            "arxiv": "https://arxiv.org/abs/2611.25848"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 23,
          "score": 3.3,
          "score_why": "추천 23 → +2.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 날씨 예측은 숨겨진 패턴 때문에 결과를 믿기 힘들었습니다",
            "easy1_desc": "데이터 기반 날씨 예측 모델들은 학습한 패턴을 겉으로 드러내지 않고 숨겨 두기 때문에 그 영향을 해석하기 어렵다고 하는데요. 지역별로 시간이 흐르며 변하는 모습을 제대로 구분하지 못하면, 다르게 발전할 곳들도 비슷하게 예측해 버려서 결국 예측 오차가 커진다는 겁니다. 쉽게 말하면, 왜 그런 예측이 나왔는지 이유를 알 수 없다는 말이에요.",
            "easy2_title": "프로토타입을 활용해 지역별 맞춤 예측을 하고 해석까지 가능하게 만들었습니다",
            "easy2_desc": "그래서 연구진은 ProtoCast라는 방식을 설계해 그룹별 프로토타입(원형)을 활용해 지역별 특성을 조절하도록 했는데요. 각 그룹의 과거 특징과 시간 변화를 크로스 변수 어텐션에서 얻은 예측 맥락과 결합해 진화 인식형 프로토타입 매칭을 수행한다는 거예요. 장점은 예측 정확도가 높아지고 프로토타입 삭제 실험을 통해 지역별 기여도를 오차 변화와 연결해 명확히 해석할 수 있다는 건데, 대신 복잡한 구조와 철저한 훈련 과정이 필요하다는 점도 함께 따라온다는 겁니다.",
            "topic": "지역별 패턴을 명확히 구분하고 해석할 수 있는 프로토타입 기반의 데이터driven 날씨 예측 모델인 ProtoCast를 제안하는 연구예요.",
            "one_line": "해석 가능한 프로토타입 기반 날씨 예측 모델을 개발했어요.",
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
          },
          "authors": "Zhixuan Li, Hao Jiang, Chen Hui, Kai Geng, Weisi Lin",
          "categories": [],
          "comments": 4,
          "pdf": "https://arxiv.org/pdf/2611.25848"
        },
        {
          "canon_id": "2611.32183",
          "title": "ThinkMorph-SSL: Scaling Interleaved Multimodal Reasoning with Pretext Tasks",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.32183",
            "arxiv": "https://arxiv.org/abs/2611.32183"
          },
          "published": "2026-11-24",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 21,
          "score": 3.1,
          "score_why": "추천 21 → +2.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "그림이랑 글을 섞어 푸는 법을 가르치려니 모으기가 너무 힘들었어요",
            "easy1_desc": "사람들은 글과 그림을 같이 보며 문제를 푸는데요, AI 모델도 중간에 그림을 직접 그리면서 생각하게 만들려면 예시 데이터가 꼭 필요해요. 그런데 이 학습용 예시를 사람이 일일이 모으기가 너무 어렵다는 문제가 있었거든요. 쉽게 말하면, 똑똑한 AI를 가르치고 싶어도 교재가 부족해서 손을 못 대고 있던 셈이에요.",
            "easy2_title": "그림 자체를 정답 삼아 가르치는 새로운 방법을 만들어냈어요",
            "easy2_desc": "그래서 연구진은 'ThinkMorph-SSL'이라는 두 단계 학습법을 내놨는데요, 사람이 만든 정답 대신 그림 그 자체를 감독 신호로 쓰겠다는 거예요. 첫 단계에서는 색칠하기나 노이즈 제거 같은 시각적 과제를 풀면서 AI가 스스로 생각하는 과정을 만들고, 두 번째 단계에서 질문 중심의 지시 조정을 거치게 하는데요. 그 결과 열두 개 평가에서 기본 모델보다 정확도가 평균 11.33점 높아지는 성능을 보여줬다는 겁니다.",
            "topic": "이미지 자체를 정답으로 삼아 인터리브드 멀티모달 추론 능력을 기르는 두 단계 학습법 'ThinkMorph-SSL'을 제안한 연구예요.",
            "one_line": "그림 자체를 정답으로 쓰는 ThinkMorph-SSL 학습법을 개발했어요.",
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
          },
          "authors": "Jiawei Gu, Linjie Li, Yiming Liu, Yunzhuo Hao, Huichen Wang, Guanzheng Chen, Zhichao Peng, Luxin Xu, Xinyu Zhang, Li Luo, Disen Lan, Zican Hu, Mingyang Song, David Valente, Alex Jinpeng Wang, Yafu Li, Ganqu Cui, Zhengyuan Yang, Qizhe Xie, Yejin Choi, Ranjay Krishna, Yu Cheng",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.32183"
        },
        {
          "canon_id": "2611.31653",
          "title": "Constructing physical mechanisms with artificial intelligence",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31653"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 3.0,
          "score_why": "키워드 1개(reactor) → +2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [
            "reactor"
          ],
          "ai": {
            "easy1_title": "과학 속 반복되는 메커니즘을 왜 기존 방식으로는 못 찾았을까요",
            "easy1_desc": "과학 분야에서 수없이 반복되는 메커니즘은 하나의 방정식으로만 끝나지 않고 유도 과정마다 여러 단계로 쪼개져 있는데요, 기존에 글을 읽거나 공식을 맞추는 방식으로는 이 전체 구조를 놓치기 일쑤였다는 거예요. 연구진은 그래서 arXiv에 올라온 250만 건의 논문 속 방정식을 그대로 읽어내는 시스템을 직접 만들어 봤는데요, 결과적으로 메커니즘들을 한데 모아 결정론적인 계산으로 조립할 수 있다는 걸 보여줬습니다. 쉽게 말하면, 흩어져 있던 수많은 과학적 수식들을 퍼즐처럼 맞춰서 그동안 놓쳤던 연결 고리를 찾아낸 셈이라는 말이에요.",
            "easy2_title": "방정식을 직접 읽는 시스템으로 새로운 메커니즘을 만들어 봤습니다",
            "easy2_desc": "연구진이 만든 조립기는 학문 경계를 넘나들며 각 부품을 떼어내고, 옮기고, 합치는 방식으로 메커니즘을 구성하는데요, 만약 부품들이 서로 딱 맞아떨어지지 않을 때는 그 실패 자체가 빠진 항을 찾아내는 방정식이 된다는 겁니다. 이런 방식으로 임계 반응기를 약한 신호도 기억하는 장치로 바꾸거나, 각각 따로 보면 실패하는 두 가지 변화로 진동자를 스위치로 바꾸는 일 등이 가능해졌는데요, 실험을 통해 검증할 수 있는 조건까지 각각 제시했다는 장점이 있습니다. 다만 이 모든 과정이 수식과 계산에 크게 의존한다는 점도 같이 따라온다는 거예요.",
            "topic": "arXiv 논문 250만 건의 방정식을 읽어 들여 과학적 메커니즘을 자동으로 조립하고 구성하는 시스템을 개발한 연구예요.",
            "one_line": "arXiv 논문 250만 건의 방정식을 읽어 메커니즘을 조립하는 시스템을 개발함",
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
          },
          "authors": "Vladimir A. Baulin, Austin Cook, Shagor Rahman",
          "categories": [
            "cs.AI",
            "cond-mat.soft"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31653"
        },
        {
          "canon_id": "2611.32736",
          "title": "Qwen-Image-HD: Autoregressive Diffusion for High Definition Image Generation",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.32736",
            "arxiv": "https://arxiv.org/abs/2611.32736"
          },
          "published": "2026-11-24",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 19,
          "score": 2.9,
          "score_why": "추천 19 → +1.9 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "고해상도 그림을 한 번에 그리려니 복잡하고 엉뚱한 줄무늬가 생기더군요",
            "easy1_desc": "연구진은 큰 고해상도 그림을 한 번에 학습시키려면 긴 이미지 시퀀스와 엄청난 연산이 필요하다는 점을 짚었는데요, 자원이 부족하면 일부분에 부자연스러운 반복 줄무늬가 생기는 문제가 있거든요. 뭔 소리냐면, 한 장을 그대로 다루면 너무 무겁고 어긋나기 쉽다는 말이에요. 쉽게 말하면, 욕심내서 전체를 한 번에 그리려다 보니 한계에 부딪혔던 셈이라는 겁니다.",
            "easy2_title": "그림을 조각으로 나눠서 이어 그리는 방식을 써봤더니 효율이 확 살았습니다",
            "easy2_desc": "그래서 연구진은 큐원 이미지(Qwen-Image) 2.0을 바탕으로, 조각 단위로 학습하고 블록별로 순차 생성하는 큐원 이미지 에이치디(Qwen-Image-HD)를 내놓았는데요, 위와 왼쪽의 이웃 조각과 압축된 전체 미리보기를 함께 조건으로 주어 공간 관계를 맞추는 방식이에요. 장점은 적은 연산으로도 4K 해상도에서 더 나은 품질을 낸다는 점인데, 대신 여러 조각을 엮는 복잡한 과정을 거쳐야 한다는 단점도 같이 따라온다는 겁니다. 쉽게 말하면, 전체를 한 방에 칠하는 대신 조각을 똑똑하게 짜맞추어 선명함을 살려냈다는 말이에요.",
            "topic": "고해상도 이미지 생성을 효율적으로 하기 위해 조각 단위 학습과 순차 생성 방식을 도입한 큐원 이미지 에이치디(Qwen-Image-HD) 모델에 대한 설명이에요.",
            "one_line": "고해상도 이미지 생성을 위해 타일 단위 순차 생성 방식을 도입했어요.",
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
          },
          "authors": "Zihao Liu, Zekai Zhang, Shengming Yin, Zikai Zhou, Donghao Zhou, Chenyang Zhu, Lihan Jiang, Ningyuan Tang, Bingxuan Zhao, Yanran Zhang, Yan Shu, Zhening Liu, Jiahao Li, Jie Zhang, Kaiyuan Gao, Kun Yan, Qihang Ai, Rui Song, Shuo Cao, Xiao Xu, Xiaoyue Chen, Yuxiang Chen, Zhendong Wang, Zhouyang Li, Bo",
          "categories": [],
          "comments": 0,
          "pdf": "https://arxiv.org/pdf/2611.32736"
        },
        {
          "canon_id": "2611.32649",
          "title": "ICLWorld: Benchmarking In-Context Learning of Agents from Digital to Physical Worlds",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.32649",
            "arxiv": "https://arxiv.org/abs/2611.32649"
          },
          "published": "2026-11-24",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 19,
          "score": 2.9,
          "score_why": "추천 19 → +1.9 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 에이전트가 새로운 규칙을 배우는 능력이 제대로 검증되지 않았어요",
            "easy1_desc": "인공지능(AI) 에이전트가 문맥 속에서 새로운 규칙을 배우는 문맥 내 학습(ICL)은 이제 컴퓨터와 로봇을 제어하는 데 필수적인 기능이 되었는데요. 하지만 기존의 평가 방식은 대부분 오프라인 환경에 머물러 있거나 텍스트와 정지 영상에만 의존하고 있어 실제 성능을 파악하기가 어려웠거든요. 게다가 로봇 분야의 평가는 특정 방법론을 떼어내어 검증하는 수준에 그치고 있다는 한계가 있습니다. 쉽게 말하면, 에이전트가 현실 세계에서 얼마나 유연하게 규칙을 익히는지 제대로 된 시험대가 없었다는 말이에요.",
            "easy2_title": "디지털과 물리 세계를 아우르는 새로운 통합 평가 도구를 만들었어요",
            "easy2_desc": "연구진은 디지털 컴퓨터 환경부터 물리적인 로봇 환경까지 에이전트의 학습 능력을 온라인으로 평가할 수 있는 ICLWorld라는 벤치마크를 새롭게 선보였는데요. 모든 환경을 사용자 인터페이스(UI)로 변환하는 UIverse라는 도구를 활용해 30개의 환경과 160개의 과제를 설계했고, 10시간이 넘는 630개의 시연 영상도 구축했습니다. 이를 통해 에이전트가 단순히 시연을 따라 하는 것을 넘어 새로운 환경에서도 규칙을 적용할 수 있는지 세 단계로 나누어 검증해 봤거든요. 결과적으로 디지털 환경에서는 성능이 높지만 물리적인 로봇 환경에서는 여전히 큰 격차가 있다는 점을 확인했습니다.",
            "topic": "디지털 환경과 물리적 로봇 환경에서 AI 에이전트의 문맥 내 학습 능력을 평가하기 위한 통합 벤치마크를 제안하고 그 성능 격차를 분석했어요.",
            "one_line": "디지털과 물리 세계를 아우르는 AI 에이전트 학습 평가 도구를 개발했어요.",
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
          },
          "authors": "Qingle Liu, Jieming Li, Pei-lin Li, Shenghan Zheng, Ruize Yang, Sunqi Fan, Deyao Hong, Huan-ang Gao, Meng-Hao Guo, Shuojin Yang",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.32649"
        },
        {
          "canon_id": "2611.28719",
          "title": "KMed-31B Technical Report",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.28719",
            "arxiv": "https://arxiv.org/abs/2611.28719"
          },
          "published": "2026-11-21",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 19,
          "score": 2.9,
          "score_why": "추천 19 → +1.9 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "의료 AI를 여러 작업에 맞게 고치는 게 왜 이렇게 어려웠을까요",
            "easy1_desc": "의료 대형 언어 모델을 다양한 의료 작업에 맞춰 후학습시키는 일은 한쪽을 좋아지게 만들면 다른 쪽 성능이 떨어지는 문제가 있어서 지금까지 꽤 까다로웠는데요. 연구진은 이런 일이 작업마다 기대되는 결과물과 쓸 수 있는 피드백이 서로 달라서 생긴다고 봤다는 거예요. 예를 들어 의료 질문 답변이나 진단 예측에는 정답이 있는 반면, 임상 질의는 딱 떨어지는 정답이 없어서 기준표로 평가하거든요. 쉽게 말하면 서로 다른 성격의 작업들을 한꺼번에 섞어 다루다 보니 엇박자가 났다는 말이에요.",
            "easy2_title": "작업별로 전문가를 따로 키워 하나로 합쳤더니 성능이 크게 올랐습니다",
            "easy2_desc": "그래서 연구진은 의료 훈련 작업을 성격에 따라 네 가지로 나누고, 각 작업에 맞는 전문가 모델을 따로 키운 뒤에 다중 교사 온정책 델타 증류(MOPD^2)라는 방식으로 하나의 학생 모델로 합쳐 봤는데요. 그 결과 비사고 모드에서 헬스벤치 하드 점수가 22.95에서 41.87로 올랐고, 프로페셔널 점수도 37.92에서 50.20으로 껑충 뛰었다는 겁니다. 성능이 전반적으로 좋아졌다는 장점이 있는데, 대신 네 가지 분야별 전문가를 각각 학습시켜야 해서 준비 과정이 조금 복잡해진다는 점도 함께 있다는 거예요.",
            "topic": "제한된 하드웨어 환경에서도 쓸 수 있도록 네 가지 작업별 전문가를 모아 만든 의료 대형 언어 모델 KMed-31B의 개발 과정과 성능에 관한 이야기예요.",
            "one_line": "네 가지 작업별 전문가를 합친 의료 언어 모델 개발",
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
          },
          "authors": "KMed Team",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.28719"
        },
        {
          "canon_id": "2611.29184",
          "title": "PhyCoVE: Benchmarking Physical Counterfactual Video Editing across Diverse Material Dynamics",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.29184",
            "arxiv": "https://arxiv.org/abs/2611.29184"
          },
          "published": "2026-11-22",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 15,
          "score": 2.5,
          "score_why": "추천 15 → +1.5 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 평가가 물체 제거 중심이라 실제 물리 현상을 다 못 담았다는 겁니다",
            "easy1_desc": "연구진은 기존의 반사실적 비디오 편집 평가가 주로 물체 제거 같은 단순한 상황만 다뤘다고 봤는데요, 실제 세상은 탄성 변형이나 유체 흐름처럼 훨씬 복잡한 물리 현상으로 얽혀 있다는 거예요. 뭔 소리냐면, 기존 방식으로는 다양한 재질이 섞인 진짜 세계를 제대로 시험하기 어렵다는 말입니다. 그래서 연구진은 533개의 사례를 모은 새로운 벤치마크인 PhyCoVE를 만들었다는 겁니다.",
            "easy2_title": "새로운 벤치마크로 모델들을 시험해 보니 겉모습만 바꾸고 물리 변화는 잘 못 맞춘다는 걸 알아냈습니다",
            "easy2_desc": "연구진은 다양한 재질과 상호작용을 평가할 수 있는 새로운 지표인 반사실적 충실도를 제안해 7개의 영상 편집 모델을 시험해 봤는데요, 그 결과 가장 좋은 모델조차도 실제 물리 변화의 약 7분의 1 정도만 겨우 재현해 낸다는 걸 찾아냈다는 거예요. 영상의 겉모습은 그럴듯하게 바꾸지만 물리적으로 어떻게 움직여야 하는지는 아직 잘 모른다는 단점이 있다는 겁니다. 쉽게 말하면, 물리적 반사실적 영상 편집은 아직 멀었으며 이 벤치마크가 그 출발점이 된다는 셈이에요.",
            "topic": "연구진은 강체, 탄성체, 유체의 다양한 물리 동역학을 다루는 새로운 비디오 편집 벤치마크인 PhyCoVE를 제안하고, 7개 모델을 평가해 현주소를 밝혔다.",
            "one_line": "물리적 동역학을 다루는 비디오 편집 벤치마크를 만들고 모델들을 평가했어요.",
            "topic_tag": "영상·음성·멀티모달",
            "limit": "연구진은 물리적 반사실적 비디오 편집이 아직 해결해야 할 문제가 많다고 밝혔다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
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
              "easy2_title 한 줄 아님/너무 김(55자)"
            ],
            "flags": [],
            "tag": "영상·음성·멀티모달",
            "limit_ok": true,
            "show_limit": true
          },
          "authors": "Conghan Yue, Yuanjie Chen, Yunyan Xiao, Zeyu Peng, Xingsong Ye, Ya Gao, Yanglin Huang, WeiYao Zhang, Yue Han, Zhineng Chen, Yu-Gang Jiang",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.29184"
        },
        {
          "canon_id": "2611.33148",
          "title": "CoT-Proxy: Cross-Format Transfer for Distilling Long-Horizon Policies",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.33148",
            "arxiv": "https://arxiv.org/abs/2611.33148"
          },
          "published": "2026-11-24",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 13,
          "score": 2.3,
          "score_why": "추천 13 → +1.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "선생님의 생각 과정을 몰라서 행동만 따라 해 봤습니다",
            "easy1_desc": "추론 모델을 긴 작업에 쓰는 에이전트로 만들려면 보통 선생님의 생각 과정과 행동을 같이 배워야 하는데요, 문제는 강력한 선생님 모델이 비공개라서 생각 과정을 볼 수 없다는 점이에요. 그래서 연구진은 생각 과정을 빼고 선생님의 행동만 가지고도 모델을 가르칠 수 있는지 확인해 봤는데요. 학생 모델은 생각 부분을 비워둔 채 선생님의 행동 경로로 학습하고, 리플레이 버퍼를 사용해 원래 모델에서 너무 멀어지지 않게 조절했다는 겁니다. 뭔 소리냐면, 속을 볼 수 없는 강력한 모델의 지식을 행동 데이터만으로도 뽑아낼 수 있다는 말이에요.",
            "easy2_title": "생각을 비우고 배웠는데 오히려 추론할 때 더 잘 작동합니다",
            "easy2_desc": "그래서 행동만 학습시킨 모델로 추론해 봤더니, 학생이 자기만의 방식으로 생각하면서도 선생님처럼 행동하는 크로스 포맷 전파 현상이 나타났는데요. Qwen3-4B 모델의 AppWorld 성공률이 7%에서 18%로 오르는 결과로 이어졌다는 거예요. 여기에 선생님의 생각 요약인 CoT-proxy를 더했더니 성능이 35%까지 더 높아졌다는 장점이 있는데요, 대신 여전히 API가 반환하는 정보에 의존해야 한다는 점도 같이 따라온다는 겁니다.",
            "topic": "숨겨진 생각 과정 없이 선생님 모델의 행동과 요약 정보만으로 긴 작업 수행 능력을 증류하는 방법에 대한 연구예요.",
            "one_line": "생각 과정을 숨긴 모델의 행동과 요약 정보로 긴 작업 수행 능력을 증류했어요.",
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
          },
          "authors": "Dawid J. Kopiczko, Tijmen Blankevoort, Yuki M. Asano",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.33148"
        },
        {
          "canon_id": "2611.32462",
          "title": "MAGPIE: Agentic Multi-Reference Image Generation via Executable Scene Construction",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.32462",
            "arxiv": "https://arxiv.org/abs/2611.32462"
          },
          "published": "2026-11-24",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 13,
          "score": 2.3,
          "score_why": "추천 13 → +1.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "여러 대상을 명령대로 배치하려니 한계가 있었다",
            "easy1_desc": "여러 레퍼런스 이미지를 바탕으로 피사체의 외형을 지키면서 원하는 장면에 맞춰 배치하는 일은 여전히 까다롭다고 해요. 기존 방법들이 다양한 구도 가이드를 주기도 하지만, 이미지 합성을 시작하기 전에 계획된 관계가 눈에 보이도록 확실하게 만들어지지 않는다는 점이 문제였던 거예요. 뭔 소리냐면, 수정하거나 확인할 수 있는 구체적인 설계도가 부족했다는 말이에요. 결국 의도한 대로 장면을 정확히 조직하기가 어렵다는 겁니다.",
            "easy2_title": "실행 가능한 3D 장을 그려주는 코딩 에이전트를 도입했다",
            "easy2_desc": "그래서 연구진은 블렌더(Blender) 프로그램으로 실행할 수 있는 간단한 3D 장면으로 구도를 표현하는 마그피(MAGPIE)를 도입했는데요, 코딩 에이전트가 각 장면에 레퍼런스를 연결하고 지시에 맞는지 확인한 뒤 프로그램을 고치는 방식으로 작동해요. 이 프록시 렌더링 결과물이 이미지 생성기를 위한 시각적 계획으로 쓰인다는 겁니다. 그 결과 드림옴니2(DreamOmni2)와 스콘에발(SconeEval)에서 기존 모델들의 성능이 좋아졌는데요, 특히 플럭스(FLUX)와 함께 쓰였을 때는 드림옴니2의 전체 성공률이 28.21 퍼센트포인트나 높아지는 장점이 있다고 해요.",
            "topic": "실행 가능한 3D 장면 구성을 통해 다중 레퍼런스 이미지 생성의 정확도를 높이는 마그피(MAGPIE) 프레임워크에 대한 연구예요.",
            "one_line": "실행 가능한 3D 장면 구성으로 다중 이미지 생성의 구도를 맞추는 마그피를 개발했어요.",
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
          },
          "authors": "Yifan Dai, Daili Hua, Bohan Zeng, Yuran Wang, Jialing Liu, Bozhou Li, Chengzhuo Tong, Yang Shi, Kai Zeng, Liu Yang, Xinyu Liu, Shujie Li, Yiyan Ji, Bingyin Mei, Yushuo Guan, Yuanxing Zhang, Fangcheng Fu, Wentao Zhang",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.32462"
        },
        {
          "canon_id": "2611.30986",
          "title": "Reinforcing Diffusion Models by Instantaneous Trajectory Distribution Matching",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.30986",
            "arxiv": "https://arxiv.org/abs/2611.30986"
          },
          "published": "2026-11-24",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 13,
          "score": 2.3,
          "score_why": "추천 13 → +1.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식은 학습할 때 기준점이 흔들리는 문제가 있었어요",
            "easy1_desc": "확산 모델(Diffusion Model)을 강화학습으로 정렬할 때 쓰는 기존 방법들은 사실 보상 가중 회귀(RWR) 방식에 의존하고 있는데요. 이 방식은 정책의 속도와 행동 분포의 속도가 같다는 이상적인 가정에 기대고 있는데, 실제로는 분류기 없는 안내(CFG)나 오프라인 업데이트 상황에서 이 가정이 깨지곤 해요. 이렇게 두 속도가 어긋나면 학습 과정에서 기준점 때문에 기울기(Gradient)가 한쪽으로 쏠리는 현상이 생겨서 학습이 불안정해진다는 겁니다.",
            "easy2_title": "새로운 매칭 방식을 써서 학습을 더 빠르고 안정적으로 만들었어요",
            "easy2_desc": "연구진은 이를 해결하려고 순간 궤적 분포 매칭(iTDM)이라는 새로운 방법을 제안했는데요. 추가적인 보상 타겟 점수를 학습할 필요 없이, 행동 속도에 고정된 샘플 단위의 기울기를 바로 구하는 방식이에요. 온라인 보조 잡음 제거기(Auxiliary denoiser)를 써서 기준점의 영향을 없애니 학습이 훨씬 안정적으로 변했거든요. 결과적으로 기존 방식보다 3배 가까이 빠르게 수렴하면서도 대규모 모델에서도 성능이 잘 나온다는 장점이 있습니다.",
            "topic": "확산 모델의 강화학습 정렬 과정에서 발생하는 기준점 드리프트 문제를 해결하기 위해 순간 궤적 분포 매칭(iTDM) 기법을 제안했어요.",
            "one_line": "확산 모델의 강화학습 정렬을 위해 iTDM 기법을 개발했어요.",
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
          },
          "authors": "Yihong Luo",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.30986"
        },
        {
          "canon_id": "2611.31184",
          "title": "On-Policy Codec Distillation for Efficient All-in-One Video Generation",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.31184",
            "arxiv": "https://arxiv.org/abs/2611.31184"
          },
          "published": "2026-11-23",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 11,
          "score": 2.1,
          "score_why": "추천 11 → +1.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "입력이 너무 많아져서 계산이 느려졌어요",
            "easy1_desc": "요즘 쓰는 영상 생성 모델들은 얼굴이나 깊이 지도 같은 다양한 조건들을 전부 토큰으로 바꿔서 넣는데요, 이 조건들이 너무 많아지다 보니 계산 비용이 순식간에 치솟는다는 문제가 있어요. 그런데 살펴보면 이 토큰들 대부분이 시간과 공간에 걸쳐 겹치는 정보들을 품고 있어서 낭비가 심하다는 거예요. 연구진은 옛날 비디오 압축 방식인 코덱이 바로 중복을 없애는 법을 잘 알고 있다는 점에 착안해서, 쓸모없는 토큰을 골라내 버리는 방식을 도입해 봤습니다.",
            "easy2_title": "압축 기술을 결합해서 속도를 두 배로 높였어요",
            "easy2_desc": "그래서 연구진은 토큰을 잘라내는 방식에다가 온폴리시 자기 증류 전략을 합쳐서 CodecOPSD라는 기술을 만들었는데요, 화질은 거의 떨어뜨리지 않으면서 평균적으로 조건 토큰의 66%를 쳐낸다는 겁니다. 덕분에 디노이징 속도가 2배 빨라지고 키-밸류 캐시 메모리도 최대 73%까지 줄어드는 장점이 생겼는데요, 대신 다른 미리 학습된 모델들에도 이 방식을 확장하려면 조건이 많고 해상도가 높을수록 더 복잡해진다는 점도 같이 따라온다는 겁니다.",
            "topic": "비디오 생성 모델에서 중복되는 조건 토큰을 압축 기술로 쳐내어 계산 속도를 높이는 방법에 대한 연구예요.",
            "one_line": "비디오 생성 모델의 중복 토큰을 압축해 계산 속도를 높였어요",
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
          },
          "authors": "Boyang Wang, Kevin Blackburn-Matzen, Oindrila Saha, Matheus Gadelha, Zezhou Cheng",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.31184"
        },
        {
          "canon_id": "2611.31974",
          "title": "Coding4Games: Can Modern Coding Agents Play Modern Video Games?",
          "field": "cs.AI",
          "sources": [
            "cs.AI",
            "허깅페이스"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31974",
            "hf": "https://huggingface.co/papers/2611.31974"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 10,
          "score": 2.0,
          "score_why": "추천 10 → +1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "코딩 에이전트가 최신 게임을 직접 할 수 있는지 확인해 봤습니다",
            "easy1_desc": "현대 비디오 게임은 시각 정보를 인식하고 긴 시간에 걸쳐 결정을 내려야 하는 복잡한 환경인데요, 기존에는 에이전트가 게임을 하는 동안 계속 언어 모델을 불러와야 해서 비용이 많이 들고 실시간 대응이 어렵다는 문제가 있었습니다. 그래서 연구진은 코딩 에이전트가 게임 상호작용을 통해 언어 모델 없이도 혼자서 실행되는 독립적인 게임 플레이 프로그램을 만들 수 있는지 살펴봤는데요, 이를 평가하기 위해 15개의 다양한 게임을 포함하는 코딩포게임즈(Coding4Games)라는 벤치마크를 도입한 겁니다. 쉽게 말하면, 매번 모델을 호출하는 대신 에이전트가 직접 코드를 짜서 게임을 스스로 플레이하게 만들 수 있는지 따져본 셈이라는 말이에요.",
            "easy2_title": "에이전트가 직접 짠 프로그램으로 게임을 실행해 성능을 평가했습니다",
            "easy2_desc": "그래서 연구진은 샌드박스와 표준 플레이어 인터페이스를 사용해 코딩 에이전트가 반복적으로 프로그램을 개발하도록 만들었는데요, 개발이 끝나면 프로그램을 고정하고 언어 모델 없이 독립적으로 테스트를 진행하는 방식을 썼습니다. 그 결과 15개 게임 중 에이전트의 최적 프로그램이 가장 강력한 그래픽 사용자 인터페이스(GUI) 기준선보다 13개 게임에서 더 높은 점수를 얻고 1개는 동점을 기록했다는 장점이 있는데요, 다만 인간 플레이어는 10개 게임에서 모든 에이전트보다 더 높은 점수를 냈다는 한계도 같이 나타났다는 겁니다. 쉽게 말하면, 에이전트가 복잡한 환경을 이해하고 스스로 작동하는 프로그램으로 바꿀 수 있는지 15개의 다양한 게임 환경에서 확인해 본 거라는 말이에요.",
            "topic": "코딩 에이전트가 게임 환경에서 상호작용하며 언어 모델 없이 실행되는 독립적인 게임 플레이 프로그램을 개발할 수 있는지 평가하는 벤치마크인 코딩포게임즈(Coding4Games)를 소개하고 성능을 분석한 연구예요.",
            "one_line": "코딩 에이전트가 독립적인 게임 프로그램을 개발하는지 평가하는 벤치마크를 제안했어요.",
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
          },
          "authors": "Shifang Zhao, Haoyu Wang, Yuyang Yin, Dong Chen, Xingyilang Yin, Yunkang Tao, Honghao Chen, Guangzhi Wang, Yiran Wang, Junfu Pu, Cheng Cheng, Xiaodong Cun, Ying Shan",
          "categories": [
            "cs.AI"
          ],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.31974"
        },
        {
          "canon_id": "2611.32973",
          "title": "SpecEngineeringBench: Evaluating Coding Agents as Autonomous Specification Engineers",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.32973",
            "arxiv": "https://arxiv.org/abs/2611.32973"
          },
          "published": "2026-11-24",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 9,
          "score": 1.9,
          "score_why": "추천 9 → +0.9 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 벤치마크는 진짜 결함을 찾는 능력을 제대로 못 봤거든요",
            "easy1_desc": "자율 명세 엔지니어링에서는 코딩 에이전트가 요구사항을 테스트로 바꾸고 결함을 찾아야 하는데요, 기존 벤치마크는 문제 설명이나 테스트 위치를 다 알려준 상태에서 평가해 왔다는 겁니다. 이러면 요구사항을 구현에 연결하고 숨겨진 결함을 스스로 찾아내는 진짜 능력을 제대로 확인하기 어렵다는 말이에요. 쉽게 말하면, 힌트를 다 준 채 시험을 보게 해서 진짜 실력을 놓치고 있던 셈이라는 겁니다.",
            "easy2_title": "그래서 새로운 평가 도구를 만들었더니 테스트는 잘해도 결함 찾기는 약하더군요",
            "easy2_desc": "연구진은 78개의 오픈소스 파이썬 저장소에서 가져온 100개 인스턴스로 이루어진 SpecEngineeringBench라는 새로운 벤치마크를 제안했는데요, 7개의 최첨단 코딩 에이전트로 시험해 봤더니 결과가 흥미로웠다는 거예요. 에이전트들이 테스트 유효성과 커버리지에서는 91.47%와 80.48%로 높은 점수를 냈지만, 막상 실패한 테스트를 고치는 비율은 26.36%에 그쳤다는 겁니다. 서류상 테스트는 잘 만들지만 실제 결함을 짚어내는 정밀도는 함수 수준에서 51.29%까지 떨어진다는 단점이 있는데, 대신 자율 테스트를 만들면 파일과 함수 위치를 찾는 능력이 기존 저장소 테스트만 쓸 때보다 각각 4.99퍼센트포인트, 2.77퍼센트포인트 올라간다는 장점도 같이 확인됐다는 말이에요.",
            "topic": "코딩 에이전트가 요구사항을 바탕으로 테스트를 만들고 결함을 스스로 찾아내는 능력을 평가하기 위해 새로운 벤치마크를 제안하고 그 결과를 분석한 내용이에요.",
            "one_line": "코딩 에이전트의 자율 명세 엔지니어링 능력을 평가할 벤치마크를 제안했어요.",
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
          },
          "authors": "Xingjian Wang, Shijian Wang, Minghao Liu, Ji Zou, Zetao Yang, Xinping Lei, Yiming Liang, Shen Yan, Enduo Zhao, Xiaoyang Shen, Weihao Xuan, Jiaheng Liu, Ge Zhang",
          "categories": [],
          "comments": 2,
          "pdf": "https://arxiv.org/pdf/2611.32973"
        },
        {
          "canon_id": "2611.32617",
          "title": "VenusOCR2.0: Towards Efficient and Effective Document Parsing",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.32617",
            "arxiv": "https://arxiv.org/abs/2611.32617"
          },
          "published": "2026-11-24",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 9,
          "score": 1.9,
          "score_why": "추천 9 → +0.9 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "문서 파싱을 정확하고 빠르게 하려니 한계가 있었는데요",
            "easy1_desc": "연구진은 텍스트, 표, 수식을 모두 잘 처리하면서도 크기가 작은 1B(10억) 파라미터 크기의 시각-언어 인식기인 VenusOCR2.0을 발표했는데요. 기존에는 정확도를 높이면서도 속도를 함께 챙기는 게 쉽지 않았다는 말이에요. 혼자 학습하다 보면 무너지는 문제를 막으려고 외부의 여러 전문가와 시각 검증을 합쳐서 믿을 수 있는 감독 데이터를 만들었거든요. 쉽게 말하면, 똑똑하면서도 빠르게 일할 수 있는 문서 읽기 모델을 만들려고 새로운 학습 방식을 썼다는 겁니다.",
            "easy2_title": "가벼운 초안 모듈과 새로운 토큰 방식을 붙였더니 속도가 훨씬 빨라졌어요",
            "easy2_desc": "그래서 연구진은 동적 해상도 인코더와 Qwen3-0.6B 디코더를 묶고, 표 길이를 줄여주는 짧은 OTSL 토큰을 써서 구조적 오류를 낮췄는데요. 여기에 67M 크기의 가벼운 병렬 초안 모듈인 PTPv2를 더해 순차적으로 읽어야 하는 병목 현상을 없앴다는 거예요. 그 결과 H20 GPU 하나로 vLLM에서 돌렸을 때 표준 방식과 똑같은 토큰 정확도를 유지하면서도 단일 요청 속도는 2.96배, 배치 처리량은 최대 2.36배까지 빨라지는 장점이 생겼거든요. 대신 복잡한 구조를 여러 모듈로 쪼개서 얹어야 하니 설계가 까다로워진다는 점도 함께 따라온다는 겁니다.",
            "topic": "정확도와 처리 속도를 모두 높인 소형 문서 파싱 시각-언어 모델 VenusOCR2.0의 구조와 성능에 대한 연구예요.",
            "one_line": "정확도와 처리 속도를 높인 소형 문서 파싱 모델을 개발했어요.",
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
          },
          "authors": "Lei Li, Zheng Wei, Yi Yuan, Qingbin Liu, Jiang Bian, Zang Li",
          "categories": [],
          "comments": 2,
          "pdf": "https://arxiv.org/pdf/2611.32617"
        },
        {
          "canon_id": "2611.32067",
          "title": "LoopDVR: Looped Transformer for Efficient Dense Visual Recognition",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.32067",
            "arxiv": "https://arxiv.org/abs/2611.32067"
          },
          "published": "2026-11-24",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 9,
          "score": 1.9,
          "score_why": "추천 9 → +0.9 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 시각 모델을 그대로 쓰면서 파라미터만 줄여봤습니다",
            "easy1_desc": "연구진은 사전 학습된 트랜스포머 기반 밀집 시각 인식 모델을 파라미터 효율적인 루프 네트워크로 바꾸는 루프디브이알(LoopDVR) 프레임워크를 제안했는데요, 네트워크의 너비나 깊이를 직접 줄이는 대신 레이어 사이의 트랜스포머 블록을 다시 쓰는 방식을 썼다는 겁니다. 그대로 파라미터를 나누어 쓰면 깊이마다 배운 고유한 변환이 망가지는 문제가 생기는데, 이를 해결하려고 레이어 간 표현의 유사성을 바탕으로 알맞은 공유 그룹을 찾았다고 해요. 쉽게 말하면, 원래 구조는 살리면서 덩치만 줄여 보겠다는 시도인 셈이에요.",
            "easy2_title": "공유 블록과 어댑터를 더해 성능과 효율을 다 잡았습니다",
            "easy2_desc": "그래서 마지막 백본 블록은 다중 스케일 특징을 만들려고 따로 두고, 각 공유 블록은 그룹의 마지막 레이어 사전 학습 가중치로 초기화했다고 하는데요, 각 레이어에 독립적인 루프 어댑터를 붙여서 공유 블록 안에서도 깊이별 변환을 지키도록 도왔다는 겁니다. 그 뒤에 시각 표현을 루프 백본에 증류하고 태스크별 학습을 위해 루프 디코더와 합쳤다는 거예요. 장점은 파라미터를 크게 줄이면서도 경쟁력 있는 정확도를 유지한다는 점인데, 대신 구조를 조정하는 과정이 복잡해진다는 점도 같이 따라온다는 겁니다.",
            "topic": "사전 학습된 트랜스포머 모델의 블록을 재사용하여 파라미터 효율을 높이는 루프디브이알(LoopDVR) 프레임워크에 대한 연구예요.",
            "one_line": "트랜스포머 시각 모델의 블록을 재사용하여 파라미터를 줄이는 루프디브이알을 제안했어요.",
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
          },
          "authors": "Sirui Liang, Xuanlong Yu, Longfei Liu, Xiaodong Cun, Xi Shen",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.32067"
        },
        {
          "canon_id": "2611.32820",
          "title": "Residual Guidance for Real-Time Interactive Video Generation",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.32820",
            "arxiv": "https://arxiv.org/abs/2611.32820"
          },
          "published": "2026-11-24",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 8,
          "score": 1.8,
          "score_why": "추천 8 → +0.8 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "바꿔 준 프롬프트를 찰떡같이 못 알아듣고 옛날 생각만 하더라",
            "easy1_desc": "실시간으로 비디오를 만들면서 프롬프트를 바꿔 봤는데요, 기존 스트리밍 모델들은 프롬프트를 바꿨는데도 그전에 쓰던 프롬프트를 계속 따라간다는 거예요. 연구진은 그 이유를 문맥 관성 때문이라고 봤는데요, 앞서 만든 조각이 너무 강한 기본값으로 작용해서 새로운 프롬프트를 억누르기 때문이라는 말이에요. 쉽게 말하면, 이전 기억이 너무 세서 새 말을 안 듣는 셈이라는 겁니다.",
            "easy2_title": "기억을 건드리는 대신 잔차를 더해서 새 프롬프트를 잘 먹히게 만들었다",
            "easy2_desc": "그래서 연구진은 기억 저장소를 직접 고치는 대신, 저장소 밖에서 잰 보정값으로 문맥 관성을 이겨내는 잔차 유도라는 간단하고 따로 학습이 필요 없는 방법을 제안했는데요, 새로운 프롬프트 아래에서 이전 조각을 캐시 없이 다시 노이즈를 섞어 디노이징한 뒤 그 차이값을 다음 조각에 더해 준다는 거예요. 이렇게 하면 화면이 끊기지 않는 장점은 남기면서도 프롬프트 전환 능력이 크게 좋아진다는 겁니다.",
            "topic": "실시간 인터랙티브 비디오 생성에서 프롬프트를 바꿀 때 발생하는 문맥 관성 문제를 해결하기 위해, 학습 없이 잔차를 이용해 전환 능력을 높이는 잔차 유도(Residual Guidance) 방법을 제안한 내용이에요.",
            "one_line": "학습 없이 잔차를 활용해 실시간 비디오 생성의 프롬프트 전환 능력을 높였다.",
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
          },
          "authors": "NaHyeon Park, Kyeong-Hwan Moon, Youjin Jeon, Hyunjung Shim",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.32820"
        },
        {
          "canon_id": "2510.22622",
          "title": "Mega-MMDF and DeepfakeBench-MM: Benchmarking Multimodal Deepfake Detection Across Diverse Forgery Pipelines",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2510.22622",
            "arxiv": "https://arxiv.org/abs/2510.22622"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 8,
          "score": 1.8,
          "score_why": "추천 8 → +0.8 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "가짜 영상과 소리가 쏟아지는데 데이터가 부족했어요",
            "easy1_desc": "오디오와 비디오가 섞인 멀티모달 가짜 콘텐츠(Audio-visual deepfakes)가 널리 퍼지면서 디지털 매체에 대한 믿음을 무너뜨리고 있는데요, 문제는 지금까지 나온 데이터셋이 다양한 가짜 만들기 방식을 충분히 담지 못해 탐지기를 만들거나 제대로 평가하기가 어려웠다는 거예요. 그래서 연구진은 10만 개의 진짜 영상과 120만 개의 가짜 영상이 담긴 메가엠엠디에프(Mega-MMDF)를 내놓았는데요, 여기에는 한쪽만 바꾸거나 여러 개를 겹치거나 소리와 영상을 함께 만들어내는 스물두 가지 방식이 골고루 담겨 있다는 겁니다. 쉽게 말하면, 그동안 듬성듬성했던 가짜 데이터의 빈자리를 거대하게 채워 넣은 셈이에요.",
            "easy2_title": "대규모 데이터로 학습해 성능을 높이고 한계를 짚어봤어요",
            "easy2_desc": "연구진은 훈련 가치를 확인하고 공정하게 비교하려고 여덟 개의 데이터셋과 열 개의 탐지기를 하나로 묶은 딥페이크벤치엠엠(DeepfakeBench-MM)도 함께 만들었는데요, 메가엠엠디에프로 학습시켰더니 탐지기들의 평균 곡선하면적(AUC, 성능 지표)이 다른 대안 데이터셋으로 학습했을 때보다 최대 0.0784만큼 높아졌다는 거예요. 데이터를 크게 만들고 여러 방식을 두루 담는 게 확실히 도움이 된다는 걸 보여주는데, 다만 복잡한 방식으로 훈련했다고 해서 개별 조작 방식을 다 잡아내지는 못한다는 단점도 함께 나타났다는 겁니다. 쉽게 말하면, 성능은 좋아졌지만 여전히 가짜의 종류에 따라 빈틈이 생길 수 있다는 걸 밝혀낸 거예요.",
            "topic": "다양한 가짜 만들기 방식을 모은 대규모 데이터셋과 표준화된 평가 도구를 만들어 멀티모달 가짜 탐지 성능을 높이고 그 한계를 분석한 연구예요.",
            "one_line": "대규모 멀티모달 가짜 데이터셋과 평가 도구를 만들어 탐지 성능을 높였어요.",
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
          },
          "authors": "Kangran Zhao, Xiaoyu Zhang, Yupeng Chen, Yize Chen, Weinan Guan, Bo Zheng, Yufan Liao, Chengzhe Sun, Soumyya Kanti Datta, Qingshan Liu, Siwei Lyu, Baoyuan Wu, Baicheng Chen",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2510.22622"
        },
        {
          "canon_id": "2611.29389",
          "title": "PINE: Point, Instance and Normal Estimation in One-Step Diffusion Model",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.29389",
            "arxiv": "https://arxiv.org/abs/2611.29389"
          },
          "published": "2026-11-22",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 6,
          "score": 1.6,
          "score_why": "추천 6 → +0.6 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기하와 의미를 따로따로 구하느라 복잡했는데요",
            "easy1_desc": "장면을 이해하려면 공간 구조를 찾는 기하와 물체를 나누는 의미가 둘 다 필요한데요, 보통 모델들은 이걸 따로따로 계산했거든요. 그래서 연구진은 이미지의 점 지도, 표면 법선, 개체 지도를 한 번에 예측하는 PINE이라는 모델을 만들어 봤다는 거예요. 뭔 소리냐면, 각각을 따로 구하던 복잡한 과정을 한 번에 해결해 보겠다는 말입니다.",
            "easy2_title": "한 번에 싹 다 예측하는 방식을 써 봤더니",
            "easy2_desc": "그래서 연구진은 PINE에 카메라 광선 인코딩과 사전 학습된 특징을 넣어서, 13만 9천 장의 합성 이미지만으로 학습을 시켜 봤는데요. 그랬더니 점 지도와 표면 법선에서 최고 수준의 성능을 보여줬다고 주장했어요. 속도도 MoGe-3와 SAM을 합친 것보다 5.7배나 빠르다는 장점이 있는데, 대신 13만 9천 장이라는 합성 데이터로만 학습했다는 한계도 같이 따라온다는 겁니다.",
            "topic": "이미지에서 점 지도, 표면 법선, 개체 지도를 한 번에 예측하는 단일 단계 확산 모델인 PINE을 제안하고 그 성능을 평가한 연구예요.",
            "one_line": "기하와 개체 지도를 한 번에 예측하는 PINE 모델을 제안하고 성능을 평가했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "13만 9천 장의 합성 이미지로만 기하 학습을 진행했다는 조건이 있어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          },
          "authors": "Zeyu Ren, Jie Ni, Rui Qian, Jiahao Wei, Hao Tang, Yongtai Liu, Zeyu Zhang",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.29389"
        },
        {
          "canon_id": "2611.32094",
          "title": "Clinical3D-Bench: Evaluating and Improving Spatial Intelligence of Multimodal LLMs in Hospital Environments",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.32094",
            "arxiv": "https://arxiv.org/abs/2611.32094"
          },
          "published": "2026-11-24",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 4,
          "score": 1.4,
          "score_why": "추천 4 → +0.4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "병원 공간을 이해하는 인공지능이 아직 많이 부족하거든요",
            "easy1_desc": "병원에서는 똑같이 생긴 장비를 구분하거나 환자 위치에 따른 방향을 파악하는 등 복잡한 공간 추론이 필요한데요, 기존의 인공지능 평가 도구들은 이런 능력을 제대로 측정하지 못한다는 문제가 있었어요. 연구진은 그래서 373개의 병원 실내 구조를 바탕으로 3,368개의 질문을 담은 새로운 평가 도구인 Clinical3D-Bench를 만들었거든요. 쉽게 말하면, 인공지능이 병원이라는 특수한 환경에서 얼마나 공간을 잘 이해하는지 제대로 시험해 보겠다는 겁니다.",
            "easy2_title": "공간 정보를 직접 계산하게 했더니 성능이 확 좋아졌어요",
            "easy2_desc": "기존의 멀티모달 거대언어모델(MLLM)들은 병원 공간을 이해하는 데 한계를 보였는데, 연구진은 44,750개의 질문으로 구성된 학습 데이터셋으로 모델을 추가 학습시켰어요. 여기서 더 나아가 GeoJeV라는 방식을 도입해 모델이 영상에서 장면을 재구성하고 3D 연산을 직접 수행하도록 만들었는데요, 그 결과 모델의 정확도가 크게 올라가면서 의사들의 수준에 한층 더 가까워졌다는 거예요. 단순히 정보를 입력받는 것을 넘어 직접 계산하게 한 것이 성능 향상의 핵심이라는 말이에요.",
            "topic": "병원 환경에서 멀티모달 거대언어모델의 공간 지능을 평가하고 이를 개선하기 위한 새로운 벤치마크와 방법론을 제안했어요.",
            "one_line": "병원 공간 추론을 위한 벤치마크를 만들고 GeoJeV 방식으로 성능을 높였어요.",
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
          },
          "authors": "Yang Bai, Yingzhi Xia, Ling Lin, Jun Cheng, Lin Fu, Huazhu Fu",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.32094"
        },
        {
          "canon_id": "2611.31752",
          "title": "Separating Measurement Failures from Defence Failures in Split Language-Model Privacy",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.31752",
            "arxiv": "https://arxiv.org/abs/2611.31752"
          },
          "published": "2026-11-24",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 4,
          "score": 1.4,
          "score_why": "추천 4 → +0.4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "프라이버시 실험이 왜 엉뚱한 결과를 내는지 분석해 봤습니다",
            "easy1_desc": "분할 학습 프라이버시 평가가 왜 실패하는지 그 방식을 따져봤는데요, 숨겨진 채널을 못 보거나 라벨이 밀린 채 복원 대상을 맞추거나 보정도 안 된 프롭을 쓰기 때문이라는 겁니다. 뭔 소리냐면, 방어 기술의 문제가 아니라 애초에 측정 방식이 틀렸을 수도 있다는 말이에요. 쉽게 말하면, 실험 자체에 허점이 있었다는 셈이에요.",
            "easy2_title": "네 가지 검증된 프롭으로 다시 따져봤더니 결과가 달라졌습니다",
            "easy2_desc": "그래서 연구진은 네 개의 검증된 프롭으로 다시 분석해 봤는데요, 19개 설정 중 4개만 통과했어도 그중 13개 설정에서 실제 프라이버시 침해가 일어났다는 걸 확인했다고 해요. 유틸리티나 학습 이득 실패로 나머지가 제거됐다는 장점과 한계가 같이 나타났다는 겁니다. 쉽게 말하면, 제대로 된 측정 도구를 쓰니 진짜 취약점이 드러났다는 말이에요.",
            "topic": "분할 대규모 언어 모델(Split-LLM) 프라이버시 평가에서 측정 오류와 실제 방어 실패를 구분해 재분석한 연구예요.",
            "one_line": "분할 LLM 프라이버시 평가의 측정 오류와 방어 실패를 구분해 재분석했어요.",
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
          },
          "authors": "Georgios Politis, Evangelos Pappas",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.31752"
        },
        {
          "canon_id": "2611.31466",
          "title": "AdProducer: Towards Agentic Advertising Video Generation",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.31466",
            "arxiv": "https://arxiv.org/abs/2611.31466"
          },
          "published": "2026-11-23",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 4,
          "score": 1.4,
          "score_why": "추천 4 → +0.4 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "멋진 광고를 자동으로 만들려니 제품을 깊이 이해하는 게 문제였는데요",
            "easy1_desc": "연구진은 최근 영상 생성 기술이 좋아져서 광고를 자동으로 만드는 일이 가능해졌지만, 진짜 쓸만한 광고를 만들려면 단순한 영상 합성을 넘어서 제품의 가치를 전략적으로 보여주는 이야기 구성이 필요하다고 봤어요. 그런데 제품을 조사하는 일과 창의적인 디자인은 서로 긴밀하게 엮여 있어서, 제품 정보를 어떻게 모으느냐가 어떤 특징을 제대로 보여줄 수 있는지를 결정한다는 겁니다. 쉽게 말하면, 제품을 제대로 알지 못하면 겉만 번지르르하고 속 빈 광고가 나오기 십상이라는 말이에요.",
            "easy2_title": "광고 비디오를 끝까지 스스로 만드는 애로두듀서 프레임워크를 개발했는데요",
            "easy2_desc": "그래서 연구진은 짧은 기획안만 넣으면 광고 영상을 완성해 주는 첫 번째 에이전트 기반 프레임워크인 애로두듀서(AdProducer)를 개발했는데요, 웹과 이미지 검색으로 제품을 스스로 조사한 뒤 판매 포인트를 담은 스토리보드를 만들고 이를 통해 영상 생성기를 이끈다는 거예요. 그 과정에서 두 개의 학습용 데이터셋을 만들고 지도학습 미세조정과 강화학습을 거쳐 에이전트를 훈련했다고 하는데요, 그 결과 미니맥스 에이치쓰리(MiniMax H3)의 성능 점수를 17.3에서 51.3으로 크게 끌어올렸다는 겁니다. 새로운 벤치마크 평가인 애드크리에이션 벤치(AdCreation-Bench)로 검증해 보니 베오(Veo) 3.1 같은 다른 모델에도 추가 학습 없이 잘 적용되어 점수가 28.0에서 35.9로 좋아졌다는 장점이 있는데, 대신 에이전트의 자율적 판단에 크게 의존하기 때문에 검색된 정보가 부실하면 결과물도 흔들릴 수 있다는 점은 함께 염두에 두어야 합니다.",
            "topic": "짧은 광고 기획안을 바탕으로 제품을 스스로 조사하고 판매 포인트를 담은 스토리보드를 만들어 광고 영상을 자동으로 생성하는 인공지능 에이전트 프레임워크인 애로두듀서 개발에 대한 연구예요.",
            "one_line": "광고 영상을 자동으로 만드는 에이전트 프레임워크 개발",
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
          },
          "authors": "Kunyang Li, Chaoyang Wang, Mubarak Shah, Yuzhang Shang",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.31466"
        },
        {
          "canon_id": "2611.33020",
          "title": "GRAPE-Bench: When Vision Degrades, Does Video Reasoning Hold?",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.33020",
            "arxiv": "https://arxiv.org/abs/2611.33020"
          },
          "published": "2026-11-24",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "화질이 나빠지면 영상 AI는 어떻게 되는가",
            "easy1_desc": "표준 평가에서는 잘 나가던 비디오 추론 모델들이 화면이 흐려지거나 망가지면 안전이 중요한 상황에서 제대로 버틸 수 있을지 걱정스럽거든요. 기존 평가 방식은 인공적으로 화질을 떨어뜨리거나 어려운 질문으로 떠보긴 했지만, 실제로 자연스럽게 망가진 영상이나 운전 중에 마주하는 안전 관련 판단을 잘하는지는 알기 어려웠다는 말이에요. 뭔 소리냐면, 실제 상황에서 얼마나 튼튼한지 제대로 된 잣대가 모자란 셈이라는 겁니다.",
            "easy2_title": "새로운 평가 도구를 만들고 성능을 끌어올렸다",
            "easy2_desc": "그래서 연구진은 시각적 저하 조건과 질문 난이도를 함께 평가하는 GRAPE-Bench라는 도구를 도입해 인공 훼손 영상과 밤이나 눈, 비, 안개 속 실제 주행 영상을 합쳤는데요, 기초적인 판단부터 고난도 추론까지 세 단계 질문을 묶어 모델들을 시험해 봤어요. 그 결과 인공 데이터로 미세 조정을 거친 Qwen3.5-9B 모델의 실제 세상 정확도가 76.7%에서 81.1%로 올라가는 장점이 있었는데, 대신 모델 내부의 안전 관련 판단과 고난도 추론 사이의 줄다리기를 계속 조절해야 한다는 한계도 같이 따라온다는 겁니다.",
            "topic": "시각적 저하 환경에서 비디오 추론 모델의 취약성을 평가하고 개선하기 위한 새로운 벤치마크(GRAPE-Bench)를 제안하고 성능을 검증한 내용이에요.",
            "one_line": "시각적 저하 환경에서 비디오 추론 모델을 평가하고 개선하는 GRAPE-Bench를 개발했어요.",
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
              "one_line 52자"
            ],
            "flags": [],
            "tag": "AI 안전·평가",
            "limit_ok": null,
            "show_limit": false
          },
          "authors": "Ce Zhang, Junyi He, Tianshi Ming, Jinxi He, Jianshu Zhang, Xiyuan Yang, Jianuo Zhu, Yicheng Tao, Xiyu Luo, Minghao Fu, Jiahui Zhu, Kehan Guo, Yunzhong Xiao, Jingyang Lin, Wei Chow, Lingdong Kong, Katia Sycara, Yaqi Xie",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.33020"
        },
        {
          "canon_id": "2611.32816",
          "title": "SpatialArena: Where Do Geometric Foundation Models Stand?",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.32816",
            "arxiv": "https://arxiv.org/abs/2611.32816"
          },
          "published": "2026-11-24",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기하학적 기초 모델이 늘었는데 제대로 비교하기가 어려웠어요",
            "easy1_desc": "3D 인식 기술이 단일 작업 파이프라인에서 기하학적 기초 모델(Geometric Foundation Models)로 바뀌고 있는데요, 논문마다 프레임이나 해상도, 테스트 분할을 제각각 다르게 써서 성능을 제대로 비교하기가 어렵다는 겁니다. 게다가 단일 스케일 예측에 필요한 정렬 과정이 모델 간의 격차보다 더 클 수도 있어서, 엉뚱한 공간에 깊이를 맞추면 오차가 거의 3배까지 커지고 표준 궤적 정렬은 실패한 모델의 오차를 최대 2.6배까지 낮춰서 보여준다는 말이에요. 긴 영상이나 동적 장면, 항공 뷰 같은 다양한 상황은 거의 다루지 못해 왔다는 한계도 있거든요.",
            "easy2_title": "공정한 기준으로 52개 모델을 한꺼번에 평가하는 공간을 만들었어요",
            "easy2_desc": "그래서 연구진은 같은 지표와 규칙으로 기하학적 모델을 채점하는 오픈 아레나인 'SpatialArena(스페이셜아레나)'를 선보였는데요, 단일 깊이 추정부터 SLAM(동시적 위치 추정 및 지도 작성)까지 5개 작업을 아우르는 23개의 공개 데이터셋과 직접 수집한 데이터를 합쳐 총 418,929장의 이미지로 52개 모델을 평가해 봤다는 겁니다. 그 결과 52개 모델 중 단일 이미지 깊이는 공개 벤치마크에서 거의 포화 상태에 이르렀지만 크고 통제되지 않은 장면에서는 아직 아니라는 걸 확인했는데요, 장점은 프레임과 뷰 사이의 일관성을 통해 피드포워드 3D/4D 모델이 단일 작업 전문가 수준을 넘어서거나 비디오 깊이 모델을 앞지른다는 점을 보여준다는 거예요.",
            "topic": "기하학적 기초 모델들의 성능을 공정하게 평가하기 위해 개발된 오픈 벤치마크인 SpatialArena와 이를 통한 52개 모델 평가 결과에 대한 내용이에요.",
            "one_line": "기하학적 모델을 공정하게 평가하는 오픈 아레나를 만들었어요.",
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
          },
          "authors": "Yu Chen, Haosen Yang, Su Ee Tan, Zhensong Zhang, Jifei Song, Jiankang Deng",
          "categories": [],
          "comments": 2,
          "pdf": "https://arxiv.org/pdf/2611.32816"
        },
        {
          "canon_id": "2611.31977",
          "title": "Distill to Loop: Turning Pretrained Diffusion Transformers into Looped Models with Adjustable Depth",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.31977",
            "arxiv": "https://arxiv.org/abs/2611.31977"
          },
          "published": "2026-11-24",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존에 있던 AI 모델을 그대로 재활용하지 못하고 처음부터 다시 배워야 했다",
            "easy1_desc": "연구진은 이미 성능이 좋은 확산 변환기 모델이 따로 있는데도, 가중치를 공유해서 깊이를 반복해 쓰는 루프형 모델을 만들려면 처음부터 비용을 들여 다시 훈련해야 했다고 밝혔는데요. 뭔 소리냐면, 기존 모델을 재활용하지 못하고 처음부터 다시 학습하는 탓에 시간과 자원이 많이 드는 문제점이 있었다는 말이에요. 쉽게 말하면, 쓸만한 모델이 이미 있는데도 처음부터 다시 만들어야 해서 비효율적이었다는 셈이에요.",
            "easy2_title": "기존 모델의 가중치를 이어받아 한 번만 배워도 깊이를 조절하며 쓸 수 있게 바꿨다",
            "easy2_desc": "그래서 연구진은 기존 모델의 블록을 그대로 가져와 초기화하는 방식인 디스틸 투 루프 기술을 제안했는데요, 이 방식을 쓰면 한 모델로 재훈련 없이 반복 횟수를 자유롭게 바꿔가며 실행할 수 있게 된다는 겁니다. 반복할 때마다 교사 모델과 가까워지도록 훈련해서 적은 연산으로도 성능을 유지하는 장점이 있는데, 대신 모델 구조가 고정된 교사 모델과 다르게 깊이 방향의 미분 방정식을 적용해야 한다는 점도 같이 따라온다는 겁니다.",
            "topic": "기존의 사전 훈련된 확산 변환기를 재활용하여 반복 횟수를 조절할 수 있는 루프형 모델로 효율적으로 증류하는 방법에 대한 연구예요.",
            "one_line": "기존 모델을 증류해 깊이 조절이 되는 루프형 모델을 만들었어요.",
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
          },
          "authors": "Chenru Wang, Shengwei An",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.31977"
        },
        {
          "canon_id": "2611.30488",
          "title": "Do learned image captioning metrics generalize? Auditing duplicated samples in human-judgment benchmarks",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.30488",
            "arxiv": "https://arxiv.org/abs/2611.30488"
          },
          "published": "2026-11-23",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "사람 평가로 만든 이미지 설명 평가 지표들이 정말 제대로 작동하는지 뜯어봤습니다",
            "easy1_desc": "연구진은 사람이 매긴 점수로 학습하고 시험을 치르는 이미지 설명 평가 지표들의 일반화 주장을 검증해 봤는데요, Polaris, Nebula, Spica라는 최근 평가 모음 세 곳을 픽셀 수준에서 꼼꼼히 대조해 봤다는 겁니다. 그랬더니 시험에 쓰인 샘플이 학습 세트에 그대로 다시 나타나는 문제가 있었는데요, Spica 학습 세트에는 Polaris 시험 세트의 약 3분의 2가 똑같은 사람 평점과 함께 들어 있었다는 말이에요. 쉽게 말하면, 이미 답을 알고 시험을 본 셈이라 성능이 부풀려졌을 가능성이 크다는 겁니다.",
            "easy2_title": "겹치는 데이터를 걸러내고 다시 평가했더니 평가 순서가 완전히 달라졌습니다",
            "easy2_desc": "그래서 연구진은 시험 샘플을 아예 빼고 학습시킨 모델로만 평가 지표를 줄 세우는 새로운 방안을 제안했는데요, 이렇게 검증해 봤더니 제로숏(zero-shot) 비전-언어 평가기가 최근 시험 세트 세 곳에서 모두 1위를 차지했다고 해요. 기존 방식보다 공정한 비교가 가능하다는 장점이 있는데, 대신 데이터를 철저히 걸러내야 하므로 분석 과정이 까다로워진다는 점도 같이 따라온다는 겁니다. 쉽게 말하면, 꼼수를 빼고 제대로 평가하면 어떤 지표가 진짜 좋은지 명확히 드러난다는 말이에요.",
            "topic": "사람 평가를 학습해 만든 이미지 설명 평가 지표들의 데이터 중복 문제를 파헤치고, 이를 바로잡는 새로운 평가 방안을 제안한 논문이에요.",
            "one_line": "이미지 설명 평가 지표의 데이터 중복을 감사하고 공정한 평가 방안을 제안했어요.",
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
          },
          "authors": "Xiaochen Zhang, Jin Li, Chunlong Xia, Longjiang Guo",
          "categories": [],
          "comments": 2,
          "pdf": "https://arxiv.org/pdf/2611.30488"
        },
        {
          "canon_id": "2611.29150",
          "title": "Can an Agent Trust Its Own Zoom? Cross-Magnification Provenance Verification for Whole-Slide Images",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.29150",
            "arxiv": "https://arxiv.org/abs/2611.29150"
          },
          "published": "2026-11-22",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 3,
          "score": 1.3,
          "score_why": "추천 3 → +0.3 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "시각 에이전트가 본 화면이 정말 그 자리인지 알 수 없다는 게 문제였어요",
            "easy1_desc": "시각 에이전트가 전체 슬라이드 이미지를 볼 때, 눈에 그럴듯해 보여도 실제 위치가 맞는지 또는 배율과 조직 구조가 비슷해서 헷갈린 건 아닌지 알기 어렵다는 점을 짚어봤는데요. 연구진은 이 문제를 풀기 위해 크로스 배율 출처 검증(CMPV)이라는 방식을 도입해서 증거가 맞는지 확인하고 출처를 찾거나 모르면 아예 손을 떼도록 했거든요. 쉽게 말하면, 에이전트가 자기가 본 화면을 믿어도 되는지 스스로 검사하는 셈이라는 말이에요.",
            "easy2_title": "그래서 위치를 먼저 추정하는 도구를 만들었더니 정확도가 확 높아졌어요",
            "easy2_desc": "연구진은 주장한 위치를 바로 믿는 대신 화면의 원래 출처를 먼저 추정하는 '줌트레이스(ZoomTrace)'라는 검증기를 제안했는데요. 물리적 크기 맞추기와 시각적 검색 등을 거쳐 50만 3천3백20개의 테스트 예시에서 0.969의 정밀도-재현율 곡선 아래 면적(AUPRC)과 0.987의 수신 조작 특성 곡선 아래 면적(AUROC)을 기록했다고 해요. 성능이 좋아진다는 장점이 있는데, 대신 다운스트림 정확도는 에이전트와 검증 기준값에 따라 달라진다는 한계도 같이 따라온다는 겁니다.",
            "topic": "시각 에이전트가 전체 슬라이드 이미지에서 올바른 위치를 보고 있는지 확인하기 위해 출처 검증 방식을 제안하고 성능을 평가한 연구예요.",
            "one_line": "시각 에이전트의 위치 출처 검증을 위한 줌트레이스를 제안하고 성능을 검증했어요.",
            "topic_tag": "의료·바이오",
            "limit": "다운스트림 정확도가 좋아지는 정도는 에이전트와 검증 기준값에 따라 달라진다는 한계가 있어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
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
              "2",
              "20",
              "3",
              "50",
              "6"
            ],
            "format": [],
            "flags": [],
            "tag": "의료·바이오",
            "limit_ok": true,
            "show_limit": true
          },
          "authors": "Yan Wang, Yiran Song, Zizhuo Gong, Jianxiang Qi, Zhongxing Xu, Lingfei Qian, Minquan Lin",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.29150"
        },
        {
          "canon_id": "2611.32782",
          "title": "Measuring Layer-wise Intrinsic Dimensionality of FFNs in LLMs via PCA",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.32782",
            "arxiv": "https://arxiv.org/abs/2611.32782"
          },
          "published": "2026-11-24",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "거대언어모델의 모든 층이 정말 똑같은 용량이 필요할까",
            "easy1_desc": "기존의 거대언어모델(LLM)은 트랜스포머 구조를 그대로 따라 모든 층의 피드포워드 네트워크(FFN) 너비를 똑같이 설정해 왔거든요. 그런데 층마다 하는 역할이 다르다는 연구가 나오면서, 과연 층별로 필요한 용량도 다를지 의문이 생긴 겁니다. 만약 층마다 필요한 용량이 다르다면, 정해진 매개변수 예산을 지금처럼 똑같이 나누는 게 최선인지 확인해 볼 필요가 있다는 말이에요.",
            "easy2_title": "층별로 필요한 용량을 측정해 보니 중간 층이 더 중요하더라",
            "easy2_desc": "연구진은 주성분 분석(PCA)을 활용해 각 층의 입력값에서 고유 차원을 측정해 봤는데요, 그 결과 중간 층이 양 끝 층보다 더 높은 고유 차원을 가진다는 사실을 발견했습니다. 이 중간이 두터운 형태는 언어나 학습 데이터가 바뀌어도 일정하게 유지되는 특징이 있거든요. 그래서 이 정보를 바탕으로 모델의 너비를 조정해 봤더니, 기존의 균일한 방식보다 성능이 더 좋아졌다는 겁니다.",
            "topic": "거대언어모델 내 피드포워드 네트워크의 층별 고유 차원을 측정하고 이를 기반으로 효율적인 매개변수 할당 전략을 제시했어요.",
            "one_line": "층별 고유 차원을 측정해 모델의 너비를 효율적으로 재배치했어요.",
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
          },
          "authors": "Daehee Kim",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.32782"
        },
        {
          "canon_id": "2611.32423",
          "title": "Factorized Context Attention: From Emulated to Native Grid Probing",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.32423",
            "arxiv": "https://arxiv.org/abs/2611.32423"
          },
          "published": "2026-11-24",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "그리드 프로빙 방식은 정확하지만 연산이 너무 많았습니다",
            "easy1_desc": "연구진은 긴 입력 문맥을 처리할 때 기존 모델들이 겪는 속도 저하와 정확도 손실 문제를 짚어봤는데요. 최근에 나온 그리드 프로빙이라는 방식이 정확도와 처리 거리를 넓혀 주기는 하는데, 매번 입력을 다시 인코딩하느라 계산을 반복한다는 단점이 있거든요. 뭔 소리냐면, 외부에서 프롬프트를 써서 흉내만 내는 구조라 비용이 너무 많이 든다는 말이에요.",
            "easy2_title": "팩토라이즈드 컨텍스트 어텐션을 도입해 비용을 크게 낮췄습니다",
            "easy2_desc": "그래서 연구진은 팩토라이즈드 컨텍스트 어텐션(FCA)이라는 새로운 블록 희소 어텐션 방식을 도입했는데요. 입력을 한 번만 인코딩한 뒤에 배치로 처리하고 계단식 위치 일정을 써서 비용을 획기적으로 낮췄다는 겁니다. 장점은 기존 그리드 프로빙의 정확도와 긴 입력 처리 능력을 그대로 유지하면서 속도는 훨씬 빨라진다는 건데요, 대신 기존에 학습된 모델의 구조 안에서 네이티브 방식으로 구현해야 한다는 조건이 따른다는 겁니다.",
            "topic": "기존의 흉내 내기식 그리드 프로빙 방식 대신 모델 내부의 네이티브 방식으로 작동하는 팩토라이즈드 컨텍스트 어텐션을 도입해, 긴 입력 문맥 처리 성능을 유지하면서도 연산 비용을 대폭 낮춘 연구예요.",
            "one_line": "FCA 방식을 도입해 문맥 처리 비용을 낮췄어요.",
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
          },
          "authors": "Mohamed Eltahir, Manar Eyad, Yara Alzahrani, Fatimah Albesher, Duaa M. Tahir, Tanveer Hussain, Naeemullah Khan",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.32423"
        },
        {
          "canon_id": "2611.30963",
          "title": "Foresight Forcing: Learning Spatial Foresight for Robotic Manipulation",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.30963",
            "arxiv": "https://arxiv.org/abs/2611.30963"
          },
          "published": "2026-11-23",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "물체의 움직임을 제대로 예측하지 못해 행동 예측에 한계가 있었는데요",
            "easy1_desc": "로봇이 물체를 움직일 때 앞으로 어떻게 바뀔지 미리 내다보면 행동을 더 잘 예측할 수 있는데요, 기존 방식인 세계 행동 모델(WAMs, World Action Models)은 미래의 시각적 관측을 배우면서도 그 바탕이 되는 3D 공간의 기하학적 변화를 겉으로 드러내지 않고 그냥 넘어갔다는 거예요. 뭔 소리냐면, 물체가 입체적으로 어떻게 움직이는지 정확한 구조를 모른 채 흉내만 냈다는 말이에요. 그러다 보니 복잡한 조작을 할 때 정확도가 떨어지는 문제가 생겼던 셈이에요.",
            "easy2_title": "3D 공간 변화를 미리 배우는 포사이트 포싱을 도입해 성능을 끌어올렸어요",
            "easy2_desc": "그래서 연구진은 미리 학습된 3D 기초 모델을 활용해 현재와 미래의 관측에서 특징 변화를 촘촘하게 감독하는 포사이트 포싱(F^{2}, Foresight Forcing)이라는 모델을 새로 선보였는데요, 이 방식은 3D 공간의 변화를 공간 전환 쿼리로 압축해서 현재 시각 정보와 함께 행동을 만들어내는 데 쓴다는 거예요. 실험해 봤더니 리베로(LIBERO), 리베로 플러스(LIBERO-Plus), 로보트윈2.0(RoboTwin2.0) 환경에서 튼튼하고 뛰어난 조작 성능을 보여줬는데요, 특히 로보트윈2.0 풀(RoboTwin2.0 Full)에서는 평균 성공률이 95.01%에 달했고 여섯 가지 실제 조작 과제에서도 평균 85.8%의 점수를 기록했다고 해요. 쉽게 말하면, 3D 공간을 미리 내다보는 눈을 달아주어 로봇이 훨씬 더 정확하게 움직이게 된 셈이에요.",
            "topic": "로봇 조작 성능을 높이기 위해 3D 공간의 기하학적 변화를 미리 학습하는 포사이트 포싱 모델을 제안하고 그 성능을 검증한 내용이에요.",
            "one_line": "3D 공간 변화를 미리 학습하는 포사이트 포싱 모델을 만들어 로봇 조작 성능을 높였어요.",
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
          },
          "authors": "Mishuo Han, Zhixuan Liang, Zhaoyuan Wan, Wendi Chen, Jiarui Chen, Xinkai Wang, Yue Ma, Yu Zhou, Junting Chen, Yao Mu, Jun Lv, Chuan Wen, Cewu Lu",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.30963"
        },
        {
          "canon_id": "2611.29874",
          "title": "Escriba-OCR: A 1B Vision-Language Model for Error-Preserving Transcription of Handwritten Portuguese Essays",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.29874",
            "arxiv": "https://arxiv.org/abs/2611.29874"
          },
          "published": "2026-11-23",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "학생이 쓴 그대로 읽어야 하는데 자꾸 고쳐 버린다",
            "easy1_desc": "학습자 작문 피드백 도구에는 맞춤법이 틀린 글자나 줄바꿈 같은 원래 모습을 그대로 적어 두는 게 필요하거든요. 그런데 기존 시각-언어 모델(VLM)들은 손글씨를 잘 읽으면서도 자꾸 바른 말로 고쳐 버리는 경향이 있답니다. 브레세이(BRESSAY)라는 브라질 포르투갈어 손글씨 에세이 1,000편으로 측정해 봤더니, 기존 공개 모델들은 사전에 없는 단어의 39퍼센트에서 78퍼센트를 사전 단어로 바꿔 버린다는 거예요. 쉽게 말하면, 원본 그대로를 남기는 게 아니라 마음대로 고쳐 버린다는 말이에요.",
            "easy2_title": "작은 모델을 새로 다듬어 원래 모습 그대로 적게 만들었다",
            "easy2_desc": "그래서 연구진은 학교에서 직접 돌릴 수 있는 공개 가중치 모델을 골라 647쪽의 훈련 페이지로 85분 동안 그래픽카드(GPU) 한 개로 세밀하게 다듬어 봤는데요. 그 결과로 나온 에스크리바-오씨알-1비(Escriba-OCR-1B) 모델은 문자 오류율이 2.06퍼센트로 떨어졌고, 삽입된 내용의 67퍼센트와 읽기 힘든 삭제 내용의 77퍼센트를 되살렸답니다. 대신에 맞춤법이 틀려 보이는 단어의 60퍼센트는 여전히 표준어로 바꿔 버린다는 단점도 함께 남아 있다는 거예요. 쉽게 말하면, 오류 보존 능력이 많이 좋아졌지만 틀린 글자를 완전히 살리지는 못했다는 셈이에요.",
            "topic": "손글씨 에세이의 맞춤법 오류와 수정 흔적을 그대로 옮기는 1B 규모의 시각-언어 모델(VLM)인 에스크리바-오씨알(Escriba-OCR-1B)을 개발하고 평가한 이야기예요.",
            "one_line": "오류를 보존하는 손글씨 인식 1B 모델을 개발하고 평가했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "새 모델이 다른 말뭉치의 보이지 않는 단어를 더 자주 잘못 읽는다는 한계가 있습니다."
          },
          "check": {
            "evidence": [
              [
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
          },
          "authors": "Tardelli Ronan Coelho Stekel",
          "categories": [],
          "comments": 5,
          "pdf": "https://arxiv.org/pdf/2611.29874"
        },
        {
          "canon_id": "2611.29547",
          "title": "Align the Pair, Not the Sample: Representation Alignment for Faster and Better One-Step Generato",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.29547",
            "arxiv": "https://arxiv.org/abs/2611.29547"
          },
          "published": "2026-11-22",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 2,
          "score": 1.2,
          "score_why": "추천 2 → +0.2 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "원스텝 생성기는 어떤 경로를 학습시켜야 할까",
            "easy1_desc": "표현 정렬이 확산 모델의 학습을 크게 빠르게 만드는데, 원스텝 생성기에서는 어떤 학습 경로에 손실을 줘야 하는지가 문제였다는 겁니다. 원스텝 생성기는 깨끗한 짝이 있는 오염된 진짜 이미지와, 짝이 없는 순수 노이즈 샘플이라는 두 가지 입력을 보게 되는데요. 연구진은 훼손된 이미지를 복원하고 최적 운송으로 피처 분포를 맞추는 방식으로 원스텝 생성기를 처음부터 학습시키는 Priming에서 이 문제를 연구해 봤다는 말이에요. 그 결과 자연스러운 선택인 생성 경로를 정렬했더니 테스트한 17가지 모든 설정에서 재현율이 0.45에서 0.15~0.25 수준으로 뚝 떨어졌다는 겁니다. 쉽게 말하면, 짝이 없는 생성 경로를 바로 맞추려다 보니 모델이 망가지는 셈이라는 말이에요.",
            "easy2_title": "짝을 맞추는 복원 경로를 정렬했더니 성능이 확 올랐다",
            "easy2_desc": "그래서 연구진이 고정한 DINOv2 인코더로 짝이 있는 복원 경로를 정렬해 봤는데요, 테스트한 모든 설정에서 도움이 되었다는 거예요. 분석해 보니 타깃에 입력에 대한 개별 정보가 없으면 최적의 정렬된 피처가 클래스마다 일정해져서, 손실 함수가 샘플들을 클래스 프로토타입 쪽으로 끌어당기기 때문이라는 말이에요. 그 결과 ImageNet 256×256에서 프라이밍 에포크를 2배 줄이고도 160에포크 기준 모델과 성능이 같아졌으며, 표준 예산에서 FID를 1.30과 1.155로 낮추는 장점이 있다는 겁니다. 대신 이 방식은 짝이 있는 복원 경로라는 특정 구조를 거쳐야 한다는 조건이 따른다는 점도 함께 기억해야 한다는 거예요.",
            "topic": "원스텝 생성기 학습에서 어떤 경로를 정렬해야 성능이 좋아지는지에 관한 연구예요.",
            "one_line": "원스텝 생성기 학습에서 짝 지어진 복원 경로를 정렬해 성능을 높였다.",
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
          },
          "authors": "Mingxiao Li, Xuantuo Huang, Encheng Su, Aoran Wang, Han Zhang, Jinouwen Zhang, Shixiang Tang",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.29547"
        },
        {
          "canon_id": "2611.32918",
          "title": "InstructReplay: Replaying Assistant Turns to Preserve General Behavior During Factual Fine-Tuning",
          "field": "cs.AI",
          "sources": [
            "cs.AI",
            "허깅페이스"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32918",
            "hf": "https://huggingface.co/papers/2611.32918"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "새로운 사실을 가르쳤더니 원래 가졌던 일반적인 능력이 깎여 나가더라는 겁니다",
            "easy1_desc": "지시어로 튜닝된 언어 모델에 새로운 사실을 더 학습시켰더니, 지시 따르기나 추론, 코딩 같은 일반적인 능력의 성능이 평균 35포인트나 떨어지는 걸 확인해 봤는데요. 알고 봤더니 이게 모델의 답변 길이가 짧아지는 현상과 밀접하게 이어져 있더라고요. 미세조정된 모델들은 답변 길이가 최소한 절반으로 줄어들었고, 원래 모델의 길이에서 멀어질수록 실패하는 횟수도 더 많아진다는 말이에요. 쉽게 말하면, 새로운 걸 억지로 넣으려다 보니까 기존에 잘하던 대답까지 짧아지면서 엉망이 되어 버린 셈이라는 겁니다.",
            "easy2_title": "처음 모델이 했던 대답을 다시 보게 만들었더니 성능이 확 살아났다는 겁니다",
            "easy2_desc": "그래서 연구진은 초기 모델이 일반적인 지시에 답했던 내용들을 모아두고, 새로운 사실을 미세조정하는 동안 이 원래 대답들과 너무 멀어지지 않도록 붙들어 매 두는 방식인 InstructReplay를 제안했는데요. 세 가지 모델 가족과 두 가지 영역에서 실험해 봤더니, 다섯 가지 일반 벤치마크에서의 평균 성능 하락 폭이 28.1포인트에서 2.4포인트로 확 줄어들면서 답변 길이도 처음 상태 그대로 잘 지켜졌다는 거예요. 새로운 사실은 표준 미세조정 방식만큼 똑같이 잘 익히면서도 기존 능력을 지키는 균형을 훨씬 더 잘 잡는다는 장점이 있는데, 대신 처음에 했던 대답들을 따로 저장하고 계속 활용해야 한다는 번거로움도 같이 따라온다는 겁니다.",
            "topic": "새로운 사실을 언어 모델에 미세조정할 때 생기는 일반 능력 저하를 막기 위해 초기 모델의 대답을 재현하는 학습법을 제안한 연구예요.",
            "one_line": "초기 모델의 대답을 재현하는 미세조정법으로 일반 능력 저하를 막았어요.",
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
          },
          "authors": "Xiaofeng Shi, Qian Kou, Hua Zhou",
          "categories": [
            "cs.AI",
            "cs.CL"
          ],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.32918"
        },
        {
          "canon_id": "2611.32639",
          "title": "ReFocus: Progress-Guided Adaptive Practice for Long-Horizon Robotic Manipulation Reinforcement Learning",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.32639",
            "arxiv": "https://arxiv.org/abs/2611.32639"
          },
          "published": "2026-11-24",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "긴 과정에서 어디가 막히는지 알기 어려웠습니다",
            "easy1_desc": "로봇이 오랜 시간 이어지는 작업을 할 때는 성공이나 실패 같은 결과만 나오고 어디서 막혔는지 알기가 어려웠거든요. 그렇다고 처음부터 끝까지 전체 과정을 계속 반복해 봐도 정작 막히는 부분은 연습이 부족해진다는 거예요. 쉽게 말하면, 어디서 실패하는지 정확히 모른 채 시간만 낭비하던 셈이라는 말이에요.",
            "easy2_title": "어려운 부분만 골라 집중 연습하는 방법을 도입했습니다",
            "easy2_desc": "그래서 연구진은 리포커스(ReFocus)라는 방법을 내놓았는데요, 전체 작업을 여러 작은 단계로 나누고 막히는 구간을 찾아내서 그 부분만 따로 집중 연습을 시키는 방식이에요. 취약한 구간을 더 많이 연습하면서 전체 정책도 같이 고칠 수 있다는 장점이 있는데, 대신 단계를 쪼개고 관리하는 과정이 복잡해진다는 점도 같이 따라온다는 겁니다.",
            "topic": "오래 걸리는 로봇 조작 강화학습에서 작업 단계를 나누고 막히는 구간을 집중 연습해 성공률을 높이는 리포커스(ReFocus) 프레임워크를 제안한 논문이에요.",
            "one_line": "로봇 강화학습에서 막히는 구간을 찾아 집중 연습시키는 틀을 개발했어요.",
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
          },
          "authors": "Haoyuan Li, Wei Huang, Jiehong Lin, Shengrong Zhang, Chenzhi Liu, Shengchao Zhou, Hehe Fan, Xiaojuan Qi, Yi Yang",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.32639"
        },
        {
          "canon_id": "2611.32100",
          "title": "EEGJev: A System One Decision Model and Benchmark for Multi-Task EEG Question Answering",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.32100",
            "arxiv": "https://arxiv.org/abs/2611.32100"
          },
          "published": "2026-11-24",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "고정된 답만 찾다 보니 질문이 바뀔 때 어떻게 대처하는지 알기 어려웠습니다",
            "easy1_desc": "한 번 측정된 뇌파(EEG) 기록 하나로 여러 가지 해석을 할 수 있는데요, 기존의 고정된 라벨 방식으로는 질문이나 보기가 달라질 때 기초 모델이 어떻게 대처하는지 제대로 보여주지 못했다는 겁니다. 뭔 소리냐면, 질문이 바뀔 때 유연하게 답을 고르는지 확인할 수 있는 방법이 부족했다는 말이에요. 그래서 연구진은 후보 답안을 한 번에 평가하는 빠른 결정 모델인 EEGJev를 만들었다고 밝혔습니다.",
            "easy2_title": "질문을 바꿔 가며 한 번에 평가하는 모델을 만들어 정확도를 높였습니다",
            "easy2_desc": "그래서 19개의 공개 뇌파 출처와 6가지 질문 유형을 담은 벤치마크인 EEGJev-Bench를 도입해, 뇌파 기록과 보기를 고정한 채 얼굴 표정 같은 훈련 속 속성 질문을 바꿔 가며 시험해 봤는데요. 그 결과 13개의 테스트 출처에서 요청받은 속성의 라벨을 99.70%의 정확도로 골라냈고, 특정 정답에 대한 균형 잡힌 정확도는 62.04%로 나타났다는 겁니다. 95번째 백분위수 응답 시간도 개별로 답을 구한 NeuroLM보다 더 짧았다는 장점이 있는데요, 대신 구체적인 정답을 맞히는 정확도는 그에 비해 상대적으로 낮다는 점도 함께 살펴볼 수 있습니다.",
            "topic": "다양한 질문에 맞춰 뇌파를 해석하고 평가할 수 있는 시스템인 EEGJev와 벤치마크 개발에 대한 연구예요.",
            "one_line": "질문에 따라 뇌파를 해석하는 빠른 모델과 벤치마크를 개발했어요.",
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
          },
          "authors": "Dengzhe Hou, Kazunori D. Yamada",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.32100"
        },
        {
          "canon_id": "2611.31766",
          "title": "RoMo Hands: A Large Scale Richly Organized Text to Hand Motion Dataset",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.31766",
            "arxiv": "https://arxiv.org/abs/2611.31766"
          },
          "published": "2026-11-24",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "손동작 데이터가 부족해서 손 합성만 발이 묶여 있었어요",
            "easy1_desc": "텍스트로 몸동작을 만드는 기술은 무르익었지만 손동작만 만드는 기술은 데이터가 부족해서 막혀 있었는데요, 기존 데이터셋은 손을 그냥 뻣뻣한 끝부분으로만 다루거나 설명이 엉성하고 규모가 작았다는 거예요. 그래서 연구진은 542K 개의 시퀀스로 이루어진 RoMo Hands라는 새로운 데이터셋을 만들어 봤는데요, 쉽게 말하면 이전 연구보다 규모가 훨씬 커졌다는 말이에요.",
            "easy2_title": "다양한 설명과 새로운 표현 방식으로 손동작 합성을 키워 봤어요",
            "easy2_desc": "그래서 연구진은 복잡한 양손 움직임에 초점을 맞추고 계층적 분류 체계에 따라 다섯 가지 수준의 캡션을 붙여 봤는데요, 몸과 손의 구조를 잇기 위해 새로운 393-D 양손 표현 방식도 제안했다는 겁니다. 생성 모델들을 체계적으로 비교해 봤더니 의미 일치와 운동학적 타당성 사이에서 뚜렷한 차이가 드러난다는 장단점도 있는데요, 이 데이터셋과 벤치마크가 정교한 손동작 합성을 위한 탄탄한 바탕이 될 것으로 보입니다.",
            "topic": "손동작 합성을 위해 대규모 데이터셋과 새로운 표현 방식, 벤치마크를 제안한 연구예요.",
            "one_line": "대규모 손동작 데이터셋과 표현 방식을 제안했어요",
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
          },
          "authors": "Yizhak Ben-Shabat, Jiahao Zhang, Joseph Liu, Seonghyeon Moon, Young-Yoon Lee, Haomiao Jiang, Oren Jacob, Mubbasir Kapadia",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.31766"
        },
        {
          "canon_id": "2611.31442",
          "title": "Small Learned Projections for Semantic-Reversal-Aware Retrieval with Spectral Acceleration: A Four-Domain Empirical Study",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.31442",
            "arxiv": "https://arxiv.org/abs/2611.31442"
          },
          "published": "2026-11-23",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "가까운 오답 때문에 엉뚱한 문서를 띄우는 문제가 있었습니다",
            "easy1_desc": "밀집 임베디드 검색기(Dense-embedding retrievers)가 질문과 뜻이 정반대인 가까운 복사본 문서를 덫처럼 인식해서 82~100% 비율로 상위 10위 안에 띄우는 현상을 살펴봤는데요. 뭔 소리냐면, 뜻이 살짝만 바뀌어도 검색기가 엉뚱한 문서를 정답으로 착각한다는 말이에요. 이 문제를 해결하려고 연구진은 작은 학습용 투영(Small learned projections) 기법을 도입해 덫을 억제해 봤거든요. 그랬더니 모든 12가지 도메인과 10만 개 규모의 풀에서 덫이 상위 10위 안에 들 확률이 0.0000으로 떨어졌다는 겁니다.",
            "easy2_title": "작은 투영과 속도를 높이는 가속기로 문제를 해결했습니다",
            "easy2_desc": "그래서 연구진은 작은 투영 방식과 경계 조건 기반 가속기(Boundary-conditioned accelerator)를 함께 적용해 대규모 환경에서도 검색 속도를 높이도록 만들었는데요. 그 결과 10만 개 규모의 문서 풀에서 덫이 전혀 나타나지 않으면서 전체 300여 개 질문 세트를 처리하는 데 0.6~1.1초가 걸려 질문당 평균 약 2~4밀리초(ms) 수준의 속도를 보였다는 거예요. 덕분에 전체 임베디드 크기보다 약 90배 작고 차원에 비례해 빠른 색인 구조를 만들 수 있다는 장점이 생겼는데요. 대신 문장 표현을 바꾼 질문에서는 정답률이 약 0.79로 떨어지고 다른 도메인으로의 전이가 일부만 가능하다는 한계도 같이 나타난다는 겁니다.",
            "topic": "의미가 미세하게 바뀐 오답 문서가 검색 상위에 뜨는 문제를 해결하기 위해 작은 학습용 투영과 스펙트럼 가속기를 적용한 연구예요.",
            "one_line": "의미가 뒤집힌 오답을 막는 투영과 가속기를 개발했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "측정된 풀의 명시된 사례에 한정되며 확률적 상한은 없고 문장이 바뀐 질문에서는 정답률이 약 0.79로 떨어지며 다른 도메인으로의 전이가 일부만 가능하다는 한계가 있어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          },
          "authors": "Sayed Amir Karim",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.31442"
        },
        {
          "canon_id": "2611.31258",
          "title": "RECAP: Training Long-horizon LLM Agents with Context Compaction",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.31258",
            "arxiv": "https://arxiv.org/abs/2611.31258"
          },
          "published": "2026-10-19",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "긴 작업을 할 때 기억하는 공간이 부족하다는 게 문제였어요",
            "easy1_desc": "대형 언어 모델(LLM) 에이전트가 긴 시간 동안 여러 단계를 거치는 작업을 할 때, 주고받은 대화가 너무 많아지면 기억할 수 있는 한계를 넘어서게 되거든요. 그래서 지나간 대화를 압축해서 요약본으로 바꾸는 방식을 쓰는데, 이 요약이 나중에 에이전트의 행동에 어떤 영향을 미칠지 함께 학습하기란 너무 어렵다는 거예요. 쉽게 말하면, 요약을 잘 만드는 것과 에이전트가 그 요약을 보고 현명한 결정을 내리도록 동시에 훈련하기가 까다로웠다는 말이에요.",
            "easy2_title": "요약본이 원래 행동을 지키게 만드는 RECAP을 만들었어요",
            "easy2_desc": "그래서 연구진은 압축된 요약본이 원래의 대화 기록과 똑같은 행동을 이끌어내야 한다는 원칙을 세우고, RECAP이라는 강화학습 틀을 도입했는데요. 요약본 때문에 에이전트의 행동이 얼마나 달라지는지 측정하는 목적 함수를 만들었더니, 요약 생성을 위한 보상과 다음 행동을 가르치는 자기 증류라는 두 가지 학습 신호로 쪼개진다는 걸 찾아냈다는 거예요. Qwen3.5-4B 모델로 실험을 해봤더니, 기존의 작업 보상만 쓰던 방식보다 BrowseComp-plus에서는 4.6%, SWE-bench Verified에서는 4.3%만큼 성능이 절대적으로 좋아졌다는 장점이 있는데요, 대신 요약과 그 뒤의 행동을 동시에 감독해야만 이 효과가 제대로 난다는 점도 같이 확인했다는 겁니다.",
            "topic": "대화 기록을 압축하면서도 에이전트의 원래 행동을 유지할 수 있도록 요약과 정책을 함께 학습하는 강화학습 틀 RECAP을 제안하고 성능을 확인한 내용이에요.",
            "one_line": "대화 압축과 에이전트 행동을 함께 학습하는 강화학습 틀 RECAP을 제안했어요.",
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
          },
          "authors": "Yulun Jiang, Maria Brbic, Michael Moor",
          "categories": [],
          "comments": 2,
          "pdf": "https://arxiv.org/pdf/2611.31258"
        },
        {
          "canon_id": "2611.31129",
          "title": "FATCAT: Fault Injection Attacks Targeting Chip-level Alignment",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.31129",
            "arxiv": "https://arxiv.org/abs/2611.31129"
          },
          "published": "2026-11-23",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 1,
          "score": 1.1,
          "score_why": "추천 1 → +0.1 · 오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "모델 안전장치가 하드웨어 공격 앞에서는 무용지물이더라고요",
            "easy1_desc": "연구진이 인공지능 모델의 안전장치를 해제하는 물리적 공격인 FATCAT을 시험해 봤는데요, 기존의 인공지능 평가들은 하드웨어가 완벽히 안전하다는 전제 아래서만 이루어졌다는 겁니다. 뭔 소리냐면, 소프트웨어나 모델 구조를 몰라도 하드웨어에 직접 물리적 충격을 주면 거부 기능을 무력화할 수 있다는 말이에요. 쉽게 말하면, 아무리 소프트웨어 안전장치를 튼튼하게 만들어도 하드웨어 헛점이 뚫리면 소용없다는 셈이에요.",
            "easy2_title": "물리적 충격을 주어 AI가 위험한 요구도 그대로 따르게 만들었습니다",
            "easy2_desc": "그래서 연구진은 비접촉식 전자기파를 이용해 그래픽카드(GPU) 시스템의 메모리 통신을 교란하는 공격을 시도했는데요, 시스템이 다운되지 않으면서도 모델의 안전 관련 메모리만 골라 망가뜨리는 방식이에요. 엔비디아(NVIDIA) 젯슨 오린 나노(Jetson Orin Nano)와 에이지엑스 토르(AGX Thor)에서 시험해 봤더니, 제한된 요청을 거부하지 않고 그대로 들어주도록 만들었다는 겁니다. 이 공격으로 로봇 팔이 갑자기 튀어나와 위험한 움직임을 보이는 등 실제 물리적 피해로 이어질 수 있다는 점도 확인됐다는 말이에요.",
            "topic": "인공지능 모델의 안전장치가 하드웨어 물리적 결함 공격에 얼마나 취약한지 밝혀낸 연구예요.",
            "one_line": "하드웨어 물리적 결함 공격으로 AI 안전장치를 무력화함",
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
          },
          "authors": "Peter Horvath, Ilia Shumailov, Zhuoran Liu, Lukasz Chmielewski, Lejla Batina",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.31129"
        },
        {
          "canon_id": "2611.33119",
          "title": "MetaFORGE: A Meta-Learning Framework for Harness Optimization in Automated Code Generation for Parallel Computing",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.33119"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 병렬 프로그램을 짜긴 하는데 지시사항에 따라 결과가 확 달라졌거든요",
            "easy1_desc": "대형 언어 모델(LLM)이 병렬 프로그램을 만들어 주기는 하는데요, 문제는 제대로 작동하는지나 속도가 얼마나 빠른지가 결국 어떤 지시를 내리느냐에 크게 달렸다는 겁니다. 연구진은 그래서 MPI C 코드를 만들 때 자연어로 된 기술 명세(스킬)를 계속 다듬어 주는 메타 학습 틀인 메타포지(MetaFORGE)를 제안했는데요. 쉽게 말하면, AI가 더 좋은 코드를 짜도록 옆에서 올바른 지침을 계속 찾아 주는 틀이라는 말이에요.",
            "easy2_title": "코드를 실행해 보고 나온 결과를 바탕으로 지침을 계속 고쳐 봤는데요",
            "easy2_desc": "메타포지(MetaFORGE)는 정확성 테스트부터 컴파일러 진단, 정적 분석, 실행 시간, 부하 불균형 프로필까지 한 번에 모아서 하나의 보상 점수로 바꾼 다음에 텍스트 기반 기울기 방식으로 지침을 계속 다듬어 준다는 겁니다. 외부 기억 장치도 함께 쓰기 때문에 여러 번 실행하면서 얻은 최적화 지식을 잘 모아 뒀다가 꺼내 쓸 수 있다는 장점이 있는데요. 결과적으로 6가지 MPI 작업과 3가지 작업 부하 크기에서 제로샷(zero-shot) 방식이나 기존의 텍스트그래드(TextGrad) 반복 기준선보다 정적 분석 품질이나 실행 시간, 부하 균형 면에서 더 나은 모습을 보여줬다는 거예요. 쉽게 말하면, 실제로 코드를 돌려본 피드백을 모아서 AI가 더 똑똑하게 코드를 짜도록 만드는 셈이라는 말이에요.",
            "topic": "MPI C 코드 자동 생성을 위해 실행 기반 피드백과 외부 기억 장치를 활용해 자연어 지침을 최적화하는 메타 학습 프레임워크인 메타포지(MetaFORGE)를 제안하고, 그 성능을 평가했다는 내용이에요.",
            "one_line": "실행 기반 피드백으로 자연어 지침을 최적화하는 메타 학습 프레임워크를 제안했어요.",
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
            "evidence_by_symbols": 3,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "AI 모델·학습법",
            "limit_ok": null,
            "show_limit": false
          },
          "authors": "Scott Piersall, Yang Gao, Shenyang Liu, Liqiang Wang",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.33119"
        },
        {
          "canon_id": "2611.33106",
          "title": "Temporal Conditioning for Human Behavioral Cloning in Chess",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.33106"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "체스 인공지능이 사람의 시간 압박을 무시하고 있었어요",
            "easy1_desc": "기존의 체스 행동 복제 모델들은 오직 체스판의 상태만을 보고 사람의 다음 수를 예측해 왔는데요, 정작 사람이 체스를 둘 때 중요한 요소인 남은 시간 같은 시간적 정보는 전혀 고려하지 않았거든요. 시간 압박이 사람의 판단력에 큰 영향을 미치는데도 모델은 이를 놓치고 있었던 셈이에요. 쉽게 말하면, 사람이 시간에 쫓기며 두는 실수를 모델은 제대로 이해하지 못했다는 말입니다.",
            "easy2_title": "시간 정보를 알려줬더니 사람처럼 생각하고 움직이게 됐어요",
            "easy2_desc": "연구진은 체스판 상태에 남은 시간과 시간 제어 방식 같은 정보를 더한 시간 인식 트랜스포머 모델을 만들어 봤는데요, 이 모델은 단순히 다음 수를 맞히는 걸 넘어 사람이 얼마나 고민할지, 언제 기권할지까지 예측할 수 있게 됐거든요. 특히 시간이 부족한 상황에서 사람의 실수를 더 정확하게 흉내 내는 장점이 있는데, 기존 모델들이 사람보다 지나치게 강하게만 예측하던 문제를 해결한 셈이에요. 결과적으로 시간 정보가 사람의 행동을 흉내 내는 데 아주 중요한 신호라는 걸 확인한 겁니다.",
            "topic": "체스 행동 복제 모델에서 시간 정보를 활용해 사람의 의사결정 과정을 더 정확하게 흉내 내는 연구예요.",
            "one_line": "체스 모델에 시간 정보를 넣어 사람의 행동을 더 정확하게 복제했어요.",
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
          },
          "authors": "Victor Dziwniel, Tianxiang Lu",
          "categories": [
            "cs.AI",
            "cs.HC"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.33106"
        },
        {
          "canon_id": "2611.33098",
          "title": "Delegent: A Multi-Agent Harness That Reduces Cost without Sacrificing Performance",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.33098"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Lingwei Gu, Jimmy Lin",
          "categories": [
            "cs.AI",
            "cs.IR"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.33098"
        },
        {
          "canon_id": "2611.33086",
          "title": "Uncertainty-Aware Candidate Generation for Entity Linking in Cyber Threat Intelligence",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.33086"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Nasser Alkhulaifi, Direnc Pekaslan, Christian Wagner",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.33086"
        },
        {
          "canon_id": "2611.33065",
          "title": "Auditing the Judge: Human-Derived Bias Discovery, Quantification, and Mitigation in LLM Judges",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.33065"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Hamin Koo, Chanjoo Jung, Fangzhao Wu, Jaehyung Kim",
          "categories": [
            "cs.AI",
            "cs.LG"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.33065"
        },
        {
          "canon_id": "2611.33035",
          "title": "Hybrid AI for AI-Native RAN Control: A Functional Perspective",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.33035"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI로 무선 통신망을 제어하려는데 역할이 달라서 헷갈렸거든요",
            "easy1_desc": "연구진은 인공지능 기반의 무선 접속망(AI-native RAN) 제어 시스템이 여러 프로토콜 계층과 시간대에 걸쳐 복잡하게 얽혀 있다는 점에 주목했는데요. 기존 방식과 인공지능(AI)이 어떤 역할을 맡아 서로 도울 수 있는지 비교할 공통 기준이 없었다는 말이에요. 쉽게 말하면, 각 기술이 정확히 어떤 일을 하는지 체계적으로 정리할 틀이 필요했다는 겁니다.",
            "easy2_title": "그래서 네 가지 기능으로 분류해 보고 앞으로 나아갈 길을 짚어봤습니다",
            "easy2_desc": "연구진은 표현·추론, 예측·시뮬레이션, 적응형 제어, 의사결정 종합이라는 네 가지 기능으로 무선 접속망(RAN) 의사결정을 나누는 기술 중립적 분류법을 제안했는데요. 이를 통해 기초 모델(foundation models)이나 강화학습 같은 다양한 접근법이 어떻게 결합되는지 살펴봤다는 거예요. 대신 실험 자원은 많은데 표준화된 평가 기준은 부족하다는 한계도 함께 지적했는데요, 앞으로는 다중 에이전트 협력이나 재현 가능한 평가를 연구해야 한다고 밝혔습니다.",
            "topic": "인공지능(AI) 기반 무선 접속망(RAN) 제어를 위한 하이브리드 인공지능(AI)의 기능적 분류와 연구 방향을 다룬 조사 논문이에요.",
            "one_line": "무선 통신망 제어 기술을 네 가지 기능으로 분류하고 하이브리드 AI의 방향을 조사했어요.",
            "topic_tag": "전력망·계통",
            "limit": "연구진은 폐루프 실험을 위한 자원은 있지만 의미 있는 비교에 필요한 과제, 지표, 평가 규격의 표준화는 아직 부족하다고 밝혔습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          },
          "authors": "Sabrine Aroua, Osama Arouk, Pegah Alizadeh",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.33035"
        },
        {
          "canon_id": "2611.33022",
          "title": "RecordRoute: Auditing Agent Failures with Localization-Guided Diagnosis",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.33022"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "왜 에이전트가 실패했는지 찾으려는데 방법이 엇갈렸거든요",
            "easy1_desc": "연구진은 실패한 에이전트의 실행 과정을 점검할 때 책임이 누구에게 있는지, 어느 단계에서 어긋났는지, 에러가 무엇인지 찾는 게 중요하다고 봤는데요. 기존 지도 학습 방식들은 단계를 짚어내거나 여러 예측을 한꺼번에 하려고 했지만, 위치를 찾은 결과를 다시 에러 진단에 써먹지는 않았다는 거예요. 뭔 소리냐면, 단계를 찾는 과정과 에러를 진단하는 과정이 서로 따로 놀았다는 말입니다.",
            "easy2_title": "위치를 먼저 짚고 나서 에러를 진단하는 RecordRoute를 만들었습니다",
            "easy2_desc": "그래서 연구진은 비교를 통해 위치를 먼저 찾고 그곳을 바탕으로 국소 진단을 하는 'RecordRoute'라는 방법을 제안했는데요. 단어와 글자 특징으로 기록을 나타내고 궤적 안에서 비교하며 순위를 매기는 방식이에요. 단계를 정확히 짚어낸 뒤 진단했더니 77.47%의 정확도가 나와서 전체를 한꺼번에 진단했을 때의 69.28%보다 높았다는 겁니다.",
            "topic": "에이전트 실행 실패를 진단하기 위해 위치 찾기와 에러 분석을 결합한 방법인 RecordRoute를 제안하고 성능을 확인한 내용이에요.",
            "one_line": "에이전트 실패 진단을 위해 위치 찾기와 진단을 결합한 RecordRoute를 제안했어요.",
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
          },
          "authors": "Yifan Duan, Lihuan Li, Chao Xue, Siyuan Zheng, Du Yin, Flora D. Salim",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.33022"
        },
        {
          "canon_id": "2611.33012",
          "title": "Can LLM Judges Catch Unsafe Clinical Actions? A Fault-Injection Study",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.33012"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Neda Ghafouri",
          "categories": [
            "cs.AI",
            "cs.CL"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.33012"
        },
        {
          "canon_id": "2611.32954",
          "title": "LoomKV: Lossless KV Cache Compression from GPU Memory to SSD for LLM Serving",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32954"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "무엇이 문제였나",
            "easy1_desc": "대형 언어 모델 서비스 엔진에서 프롬프트 접두사를 재사용하기 위해 키/값(KV) 캐시를 그래픽 처리 장치(GPU) 메모리에서 호스트 주 기억 장치(DRAM)와 솔리드 스테이트 드라이브(SSD)로 오프로드하는데요, 이 용량이 외부 계층과 GPU KV 풀의 두 단계에서 서비스 한계를 정한다는 겁니다. 그런데 기존의 손실 압축 방식을 쓰면 키/값 값과 출력이 달라지는 문제가 생기는데요, 무손실 압축을 쓰면 정확도를 지키면서 용량을 늘릴 수 있다는 거예요. 쉽게 말하면, 기존에는 용량을 아끼려면 정확도를 포기해야 했는데 그게 한계였다는 말이에요.",
            "easy2_title": "그래서 무엇을 했고 무엇을 달라졌나",
            "easy2_desc": "연구진은 수정하지 않은 엔진에서 외부 계층과 GPU 풀 모두에 무손실 키/값 압축을 적용하는 'LoomKV'를 만들어 봤는데요, 비에프일십육(BF16) 기준 원래 크기의 0.71 수준으로 저장하고 플래시어텐션-삼(FlashAttention-3)보다 빠른 연산 커널을 썼다는 겁니다. 외부 계층 모드에서는 저장 공간을 키워 에이전트엑스(AgentX)에서 원래 크기의 1.4배 큰 계층처럼 작동하게 만들고 처리율과 첫 토큰 생성 시간을 크게 줄여준다는 장점이 있는데요, 대신 압축과 해제 과정을 거치면서 용량이 충분할 때는 최대 2.2퍼센트의 처리량 비용이 든다는 단점도 같이 따라온다는 겁니다. 쉽게 말하면, 정확도를 깎지 않으면서도 메모리 공간을 아껴 더 많은 요청을 한꺼번에 처리할 수 있게 되었다는 말이에요.",
            "topic": "대형 언어 모델 서비스에서 정확도를 잃지 않고 키/값 캐시를 압축하여 메모리 용량 한계를 극복하는 루미케이비(LoomKV) 기술에 관한 연구예요.",
            "one_line": "무손실 키/값 캐시 압축으로 대형 언어 모델 서비스 용량을 늘렸어요.",
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
          },
          "authors": "Wentao Zhu, Ziao Sheng, Peng Deng, Huiqi Hu, Xuan Zhou, Xing Wei, Zhuang Wang",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32954"
        },
        {
          "canon_id": "2611.32948",
          "title": "Beyond Expected Value: PPO with Distributional Critics for Systematic Conservation Planning",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32948"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "평균만 믿고 가다간 최악의 상황을 놓친다는 겁니다",
            "easy1_desc": "기존에는 평균적인 결과만 보고 예산을 쓰다 보니 기후 변화 같은 불확실성 속에서 낭패를 보기 십상이었는데요. CAPTAIN이라는 방식이 처음 나왔지만, 전체 보상을 쪼개서 따지는 능력이 모자라다는 한계가 있었어요. 뭔 소리냐면, 세부적인 시간대별 기여도를 제대로 파악하지 못해 아쉬웠다는 말이에요.",
            "easy2_title": "PPO와 IQN을 붙여서 학습 속도를 확 끌어올렸어요",
            "easy2_desc": "그래서 연구진은 기존 최적화 방식을 PPO(Proximal Policy Optimisation)와 IQN(Implicit Quantile Network)으로 바꿔 달았는데요. 그 결과 뉴질랜드 해양 데이터셋에서 기존과 비슷한 수준의 성과를 훨씬 적은 학습 비용으로 낼 수 있게 되었다고 해요. 서서히 위험에 민감한 목표까지 확장할 수 있는 토대를 마련했다는 장점이 있는 반면, 결정의 세밀함 자체가 생태학적 이득의 큰 부분을 좌우한다는 점도 함께 드러났다는 겁니다.",
            "topic": "체계적인 생태 보전을 위해 강화학습 모델인 CAPTAIN의 최적화기와 비평가를 개선하여 학습 효율과 위험 민감도를 높인 연구예요.",
            "one_line": "CAPTAIN 모델에 PPO와 IQN을 결합해 생태 보전 계획의 학습 효율을 높였어요.",
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
          },
          "authors": "Ana Maria Quintero Ossa, Daniele Silvestro, James Rudd-Jones, Maria Perez-Ortiz",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32948"
        },
        {
          "canon_id": "2611.32946",
          "title": "ShellBench: What Matters More for AI Agents, Models, or Harness for Everyday Tasks",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32946"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Vincent Koc, Aditya Washikar, Rishab Naveen Venkataraman, Onur Solmaz, Zhentong Fan, Xinyang Han, Toby Vincent John, Hao Li, Achyut Mukund, Biresh Chandra Biswas, Eshan Shukla, Louis Pan, Ivan Kudryavtsev, Patthigulla Sai Surendra, Krish Oberoi, Ayaan Zaidi, Hema Veeradhi, Taylor Agarwal, Erik Erlan",
          "categories": [
            "cs.AI",
            "cs.CL",
            "cs.SE"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32946"
        },
        {
          "canon_id": "2611.32931",
          "title": "Reading Decisions Before Spans: Efficient Generative Verification",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32931"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "에러를 찾을 때 전부 다 읽지 않고 필요한 만큼만 확인해 봤습니다",
            "easy1_desc": "개발자가 조수 역할을 하는 AI의 보고서를 검토할 때 모든 내용을 일일이 확인하는 대신 오류 여부만 알고 싶을 때가 있는데요, 생성형 검증기는 전체 오류 목록과 분류까지 계속해서 만들어 낼 수 있습니다. 연구진은 그 결과물 중에서 최종 결정을 내리는 데 실제로 얼마나 많은 부분이 필요한지 파악해 봤는데요, 2B 크기의 동결된 구간 검증기에서는 빈 오류 목록인지 첫 번째 객체인지 고르는 선택이 모든 위치 특정보다 앞서 일어난다는 걸 확인했습니다. 결국 전체를 다 읽지 않아도 핵심 결정을 먼저 알아낼 수 있다는 말이에요.",
            "easy2_title": "불필요한 생성을 줄여 주는 방식을 도입해 속도를 크게 높였습니다",
            "easy2_desc": "그래서 연구진은 전체 출력을 다 만드는 대신 앞부분의 고정된 토큰을 입력으로 제공하고 제한 없는 분기 토큰만 생성하는 방식을 적용했는데요, 2,015개의 코드 에이전트 테스트 응답에서 전체 생성을 다 할 때보다 상주 서비스를 84.84%나 줄여 준다는 점을 확인했습니다. F1 점수는 83.43으로 기존의 83.41과 비슷하면서도 논리적 토큰 총합이 같은 Native8보다 31.98%를 더 아껴 준다는 장점이 있는데요, 대신 짧아진 읽기 결과가 정확히 무엇을 유지하고 무엇을 추가 생성해야 하는지는 통제된 개입을 통해 확인해야 한다는 한계도 같이 따라온다는 겁니다.",
            "topic": "생성형 검증기(Generative Verifier)의 출력물에서 최종 결정을 내리는 데 필요한 최소한의 부분을 파악하고 효율적인 생성 방식을 제안한 연구예요.",
            "one_line": "생성형 검증기의 출력 과정에서 필요한 최소 부분을 파악하고 효율적인 생성 방식을 제안했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "짧아진 읽기 결과가 무엇을 유지하고 무엇을 추가적인 생성에 의존하는지는 통제된 증거 개입과 첫 위치 디코딩을 통해 확인해야 합니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
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
            "limit_ok": true,
            "show_limit": true
          },
          "authors": "Yanbin Gong, Lei Chen",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32931"
        },
        {
          "canon_id": "2611.32848",
          "title": "Measurement Artifacts in Trustworthiness Evaluations of Quantized Small Language Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32848"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Tanzeel Abbas, Tehseen Zia, David Windridge",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32848"
        },
        {
          "canon_id": "2611.32811",
          "title": "Interactive Neural Computers",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32811"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Ross Murphy, Marcel Hedman, Gabriel Brostow",
          "categories": [
            "cs.AI",
            "cs.NE",
            "cs.SC"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32811"
        },
        {
          "canon_id": "2611.32792",
          "title": "Accuracy of Noise Ceiling Estimators for Brain Scores",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32792"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "뇌 활동과 AI 모델을 비교할 때 한계치가 왜 중요한가요",
            "easy1_desc": "최근 AI 모델의 내부 동작이 실제 뇌 활동과 비슷해지면서 이를 측정하는 뇌 점수(brain scores)라는 지표가 쓰이고 있는데요, 뇌 데이터는 원래 잡음이 많아서 모델이 아무리 뛰어나도 도달할 수 없는 상한선이 존재합니다. 이 한계치를 잡음 상한선(noise ceiling)이라고 부르는데, 모델을 더 개선할 여지가 있는지 판단하거나 서로 다른 벤치마크를 비교할 때 꼭 필요한 기준이거든요. 그런데 이 상한선을 구하는 방법들이 여러 가지 나와 있지만, 정작 어떤 상황에서 믿을 만한 결과가 나오는지에 대한 통계적 특성은 잘 알려지지 않았다는 문제가 있습니다.",
            "easy2_title": "잡음 상한선을 구하는 수학적 틀을 새로 만들었습니다",
            "easy2_desc": "그래서 연구진은 뇌 기록 데이터를 다루는 통합된 수학적 틀을 새로 도입하고, 흔히 쓰이는 네 가지 잡음 상한선 추정 방식에 대한 수식을 직접 유도해 봤는데요, 각 방식이 어떤 상황에서 어떻게 작동할지 이론적으로 예측해 본 겁니다. 실제 fMRI와 EEG 데이터셋에 적용해 보니 기존 방법들이 상황에 따라 실제 잡음 상한선을 낮게 평가하는 경향이 있다는 점을 확인했거든요. 연구진은 이 결과를 바탕으로 상황별로 어떤 추정 방식을 쓰는 게 가장 좋은지 권장 사항을 정리해 제시했습니다.",
            "topic": "뇌 활동 데이터와 AI 모델 간의 정렬을 평가하는 잡음 상한선 추정 방식들의 통계적 특성을 분석하고 개선안을 제시했습니다.",
            "one_line": "뇌 점수 평가를 위한 잡음 상한선 추정 방식들의 통계적 특성을 분석했어요.",
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
          },
          "authors": "Aude Maier, Lucas Gruaz, Martin Schrimpf, Johanni Brea",
          "categories": [
            "cs.AI",
            "q-bio.NC",
            "stat.ME"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32792"
        },
        {
          "canon_id": "2611.32776",
          "title": "Learning World Models through Contrastive Identification of Actions",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32776"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "행동 정보가 빠진 기존 세계 모델의 한계",
            "easy1_desc": "시각 데이터로 목표 지향 계획을 세우는 잠재 세계 모델은 예측만으로는 어떤 행동 관련 차이를 보존해야 할지 알기 어렵다는 문제가 있었는데요. 기존의 역동역학(inverse dynamics)은 제곱 오차 행동 회귀 방식을 쓰는데, 이 방식은 조건부 행동 평균이 바뀔 때만 추가 정보를 보상한다는 한계가 있거든요. 뭔 소리냐면, 실제 행동의 미세한 차이를 제대로 담아내지 못하고 놓치는 부분이 생긴다는 말이에요. 쉽게 말하면, 눈에 보이는 예측만으로는 행동의 진짜 의미를 다 살리기 어렵다는 겁니다.",
            "easy2_title": "대조 학습을 통한 행동 식별(CIA)로 성능 높이기",
            "easy2_desc": "그래서 연구진은 대안 중에서 실행된 행동을 정확히 찾아내는 대조 학습 방식인 CIA(Contrastive Identification of Actions)를 제안했는데요. 같은 맥락에서 일어날 수 있는 행동들을 비교하여 다음 잠재 상태가 주는 정보를 효과적으로 타겟팅한다는 거예요. 다섯 가지 시각 제어 벤치마크 실험을 해봤더니, 플래너를 바꾸지 않고도 기본 세계 모델이나 기존 회귀 방식보다 더 높은 평균 성공률을 기록했다고 하거든요. 성능이 좋아진다는 장점이 있는데, 대신 행동 제안 모델을 함께 다루어야 하므로 설계 과정이 조금 복잡해진다는 점도 같이 따라온다는 겁니다.",
            "topic": "오프라인 시각 데이터 기반의 잠재 세계 모델에서 행동 정보를 더 정확히 학습하기 위한 대조 학습 방식(CIA)의 제안과 성능 검증에 대한 내용이에요.",
            "one_line": "대조 학습 기반 행동 식별 모델(CIA)을 제안해 세계 모델의 계획 성능을 높였다.",
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
          },
          "authors": "Hayeong Lee, Youngjun Suh. Byung-Jun Lee",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32776"
        },
        {
          "canon_id": "2611.32772",
          "title": "RubikSQL-HB: Agentic Text-to-SQL with Knowledge in the Loop",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32772"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Haorui Jia, Zihan Qu, Yundi Dong, Ziyang Mei, Chi Zhang, Zezhi Zheng, Dousheng Zhao, Jiahao Zhang, Zui Chen, Han Li",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32772"
        },
        {
          "canon_id": "2611.32765",
          "title": "EviCraft: Can Minecraft Agents Find What They Cannot See?",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32765"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Wenyou Yi, Lantian Zhang, Guanlin Chen, Xingqiu Xu, Haiyang Sun, Minrui Huang, Tianle Liang, Hao Chen, Haorui Xu, Zhou Zhao",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32765"
        },
        {
          "canon_id": "2611.32686",
          "title": "CAPTA: Identifying LLMs Behind AI Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32686"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "에이전트 뒤에 숨은 거대 언어 모델을 알 수 없다는 게 문제였어요",
            "easy1_desc": "거대 언어 모델(LLM)-기반 에이전트(LLM-based agents)가 API 호출을 통해 원격 서비스에 접근해 사용자의 일을 마치는데요, 원격 서비스는 에이전트 뒤에 있는 백엔드 LLM을 알아내서 공격을 시작하고 싶어 한답니다. 하지만 서비스가 백엔드 모델에 직접 물어볼 수가 없고 에이전트와 상호작용하면서 눈에 보이는 응답만 모아야 해서 모델을 알아내는 일이 무척 어렵거든요. 쉽게 말하면, 겉모습만 보고는 안에 어떤 AI가 들어 있는지 알기 힘든 셈이라는 말이에요.",
            "easy2_title": "객관식 문제로 선택 선호도 차이를 찾아내 AI 모델을 알아냈어요",
            "easy2_desc": "그래서 연구진은 인간과 컴퓨터를 구별하는 캡차(CAPTCHA)에서 영감을 받아, 거대 언어 모델들을 구별하는 완전 자동화된 선호도 테스트인 캡타(CAPTA)를 선보였는데요. 모델들이 서로 다른 선택 선호도를 보이는 점을 이용해 객관식 문제를 검증 과제로 던지고 백엔드 LLM을 알아낸다는 겁니다. 교차 모델 옵션 생성 다양성을 바탕으로 문제를 고르고 LLM이 이끄는 검색으로 옵션 세트를 최적화하는 방식을 썼는데요. 평가해 보니 10개 모델 가족에 속한 25개 LLM을 단 10개의 문제만으로 99.0%의 평균 식별 정확도로 맞췄다는 장점이 있는데, 대신 에이전트와 결합할 때는 30개의 답안이 필요하다는 점도 같이 따라온다는 겁니다.",
            "topic": "원격 서비스가 에이전트와 상호작용할 때 뒤에 숨은 거대 언어 모델을 객관식 문제의 선택 선호도로 알아내는 캡타(CAPTA) 접근법에 대한 연구예요.",
            "one_line": "선택 선호도 차이를 이용해 에이전트 뒤의 LLM을 알아내는 캡타를 제안했어요.",
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
          },
          "authors": "Kailun Yan, Yue Huang, Sisi Duan",
          "categories": [
            "cs.AI",
            "cs.CR"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32686"
        },
        {
          "canon_id": "2611.32663",
          "title": "Economic World Model",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32663"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "인공지능이 복잡한 경제 흐름을 과연 따라 할 수 있을까",
            "easy1_desc": "가계와 기업, 정부가 서로 영향을 주고받으며 움직이는 경제 시스템을 인공지능이 얼마나 잘 재현할 수 있는지 확인해 봤는데요. 연구진은 이를 위해 경제 시스템이 어떻게 작동하는지 인공지능이 스스로 이해하는 경제 세계 모델(EWM)이라는 개념을 정의했습니다. 뭔 소리냐면, 인공지능이 자원 제약 속에서 의사결정을 내리고 가상의 상황을 시뮬레이션할 수 있도록 만든다는 뜻이에요.",
            "easy2_title": "경제 데이터를 학습시켜 실제와 비슷한 결과를 얻어냈어",
            "easy2_desc": "연구진은 가계의 미시적 데이터와 거시적 경제 데이터를 연결하는 새로운 틀을 제안했는데요. 실제로 가계 소비 분포를 시뮬레이션해 보니 실제 데이터와 94.9%나 겹치는 결과를 보였고, 실제 국내총생산(GDP) 흐름도 잘 따라갔거든요. 특히 전염병 같은 충격 상황에서 인공지능 에이전트가 이 모델을 활용했을 때, 직접 결정할 때보다 GDP를 10.29% 더 높게 유지할 수 있었다는 점이 눈에 띕니다.",
            "topic": "경제 시스템의 역동성을 재현하고 의사결정을 돕기 위한 경제 세계 모델(EWM) 프레임워크를 제안하고 검증한 연구입니다.",
            "one_line": "경제 역동성을 재현하고 의사결정을 돕는 경제 세계 모델 프레임워크를 개발했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "이번 연구에서 제시한 경제 세계 모델은 이제 막 시작하는 단계이므로, 경제학자와 AI 연구자들이 협력하여 더 발전시켜야 한다고 밝혔습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          },
          "authors": "Qirui Mi, Yujia Ming, Bo Li, Haifeng Zhang",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32663"
        },
        {
          "canon_id": "2611.32657",
          "title": "GeoSurge: Geometry-Grounded Multimodal Reasoning for Auditable Liver Resection Planning",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32657"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Wenjie Deng, Zijian Tu, Xueyin Zhou, Huayi Wang, Zhuoyun Du, Mingyu Chen, Haochao Ying, Jian Wu",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32657"
        },
        {
          "canon_id": "2611.32646",
          "title": "A Text-to-SQL Benchmark for Official Statistics",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32646"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Lucas Lageweg, Karen Goes, Tom van den Broek, Frank Pijpers, Paul Groth, Jan-Christoph Kalo",
          "categories": [
            "cs.AI",
            "cs.IR"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32646"
        },
        {
          "canon_id": "2611.32508",
          "title": "RecurSciBench: Benchmarking Recursive Self-Improvement in Data-Driven Scientific Research",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32508"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Wenxi Xu, Chuan Qin, Zihan Wang, Zixing Chen, Le Zhang, Jingbo Zhou, Hao Wang, Yuanchun Zhou, Hengshu Zhu",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32508"
        },
        {
          "canon_id": "2611.32480",
          "title": "VISE: Verifier-Independent Skill Self-Evolution with Feedback from Tool Implementations",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32480"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Yuxuan Liu, Chongyang Du, Yuhao Zhang, Jiahe Guo, Kawai Chung, Wenbin Hu, Huihao Jing, Hongyu Luo, Qing Zong, Haochen Shi, Haoran Li, Yangqiu Song",
          "categories": [
            "cs.AI",
            "cs.SE"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32480"
        },
        {
          "canon_id": "2611.32384",
          "title": "Can AI Design a Better nnU-Net? A Hypothesis-Driven Architecture Discovery Loop from Failures to Design Rules",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32384"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "실패한 인공지능 설계를 그냥 버리지 않고 왜 망했는지 파헤쳐 봤는데요",
            "easy1_desc": "인공지능 구조를 찾거나 거대 언어 모델(LLM)을 쓸 때 보통은 점수 하나만 매기고 끝내는데요, 그렇게 하면 왜 성공했고 왜 실패했는지 알 수 있는 중요한 단서들을 그냥 버리게 된다는 거예요. 연구진은 인공지능 에이전트가 직접 에러 패턴을 진단하고 가설을 세워서 검증해 보는 탐색 고리를 만들어 봤거든요. 실패한 이유를 분석하면 쓸만한 설계 규칙을 건질 수 있다는 말이에요. 쉽게 말하면, 실패작을 쓰레기통에 버리지 않고 오답 노트를 만들어서 다음 공부에 써먹는 셈이라는 겁니다.",
            "easy2_title": "오답 노트를 바탕으로 규칙을 만들었더니 성능이 훨씬 좋아졌습니다",
            "easy2_desc": "그래서 연구진은 의료 영상 분할을 할 때 3차원 영상에서 쓸 수 있는 두 가지 원리를 찾아냈는데요, 연산량을 줄이면서도 얇은 해부학적 경계를 잘 살리는 방법과 중첩된 부위 사이의 오류를 잡는 방법을 적용해 봤어요. 그 결과로 나온 게 바로 LeanNeXt와 LeanNeXt+인데요, 기존의 nnU-Net보다 연산 시간은 줄어들면서도 성능은 더 높아졌다는 겁니다. 장점은 적은 파라미터로도 큰 모델들을 뛰어넘는다는 건데, 대신 어떤 규칙을 언제 적용할지 정교하게 트리거를 걸어야 한다는 조건이 같이 따라온다는 거예요.",
            "topic": "실패 사례 분석을 통해 인공지능 아키텍처 설계 규칙을 찾아내고 성능을 높인 탐색 고리에 대한 연구예요.",
            "one_line": "실패 분석을 통한 인공지능 구조 탐색 고리로 설계 규칙을 찾아 성능을 높였어요",
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
          },
          "authors": "Songtao Jiang, Yuan Wang, Fucheng Niu, Hualiang Wang, Jian Wu, Zuozhu Liu",
          "categories": [
            "cs.AI",
            "cs.LG"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32384"
        },
        {
          "canon_id": "2611.32365",
          "title": "The Control-Flow Tax: Specialized Decision Routing for LLM Agent Workflows",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32365"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Zhikai Cheng (Talkdesk), Shuanghu Wang (Talkdesk), Li Jiang (Talkdesk)",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32365"
        },
        {
          "canon_id": "2611.32321",
          "title": "FigmaEval: A Benchmark for Evaluating AI Agents in Professional UI Design",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32321"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI 에이전트의 UI 디자인 능력을 평가하기가 너무 까다로웠는데요",
            "easy1_desc": "전문적인 툴인 피그마(Figma)를 쓰는 인공지능(AI) 에이전트가 늘어났는데, 디자인 작업은 답이 딱 정해져 있지 않아서 능력을 평가하기가 원래 어렵거든요. 그래서 연구진은 실제 피그마 파일에서 가져온 84개의 작업과 783개의 화면으로 이루어진 벤치마크(성능 평가 세트)인 피그마에발(FigmaEval)을 만들어 봤다는 거예요. 조건은 정해 주되 해결책은 자유롭게 두는 방식이라서, 에이전트가 알아서 레이아웃과 화면 구성을 정하게 했다는 말입니다.",
            "easy2_title": "새 평가 틀을 만들어 봤더니 에이전트마다 잘하는 점과 한계가 확 보였어요",
            "easy2_desc": "그래서 연구진은 6개 영역에 걸쳐 전문가가 세운 22개의 평가 기준을 만들고, 전문 디자이너들이 블라인드 방식으로 비교하는 사람 평가 장도 도입해 봤는데요. 11개의 모델을 평가해 봤더니 기준에 따른 평가와 사람의 선호도가 꽤 잘 맞아떨어졌다는 겁니다. 장점은 디자인 방식과 품질, 효율성의 차이를 뚜렷하게 보여 준다는 건데, 대신 아직 현재 인공지능 에이전트의 강점과 한계를 깊이 있게 살펴보는 수준에 머무른다는 점도 같이 남는다는 거예요.",
            "topic": "실제 피그마 파일을 바탕으로 인공지능(AI) 에이전트의 전문적인 사용자 인터페이스(UI) 디자인 능력을 체계적으로 평가하는 새로운 벤치마크 시스템을 제안했다는 내용이에요.",
            "one_line": "AI 에이전트의 UI 디자인 평가 벤치마크를 개발했어요",
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
          },
          "authors": "Xinyue Huang, Yongyong Gao, Zhengyuan Pan, Zheng Wei, Xinya Liu, Duanyi Yan, Zhiyu Hang, Zheng Ma, Lewei Lu",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32321"
        },
        {
          "canon_id": "2611.32320",
          "title": "Alpha-Beta Pruning via Monadic Continuations",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32320"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Mart\\'in Escard\\'o, Paulo Oliva",
          "categories": [
            "cs.AI",
            "cs.GT",
            "math.LO"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32320"
        },
        {
          "canon_id": "2611.32304",
          "title": "Sparse Poison, Strong Hijack: Efficient Trajectory-Level Backdoors in Vision-Language-Action Models with Only 1\\% Poisoning",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32304"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Simin Huang, Jiawei Chen, Shaolong Zhu, Qiwei Liang, Zhaoxia Yin",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32304"
        },
        {
          "canon_id": "2611.32292",
          "title": "VC-OPD: Learning to See What Matters via Visual Cue On-Policy Self-Distillation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32292"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식으로는 복잡한 시각적 추론을 하기에 부족했는데요",
            "easy1_desc": "연구진은 소형 멀티모달 대형 언어 모델(MLLM)의 세밀한 인식을 높이기 위해 잘라낸 이미지나 확대된 영역을 교사 측의 특별 정보로 쓰는 시각적 온폴리시 증류(OPD)를 살펴봤는데요. 알고 봤더니 지역적인 픽셀 수준의 단서들만으로는 전체 구조나 공간 관계, 고수준의 의미론이 필요한 복잡한 시각적 추론을 하기에 턱없이 부족하다는 겁니다. 뭔 소리냐면, 부분적인 확대 사진만으로는 전체적인 맥락을 제대로 파악하기 어렵다는 말이에요.",
            "easy2_title": "질문 맞춤형 시각 단서를 써서 학생 모델을 가르쳐 봤는데요",
            "easy2_desc": "그래서 연구진은 질문에 맞춘 시각적 단서까지 교사의 특별 정보로 확장한 시각 단서 온폴리시 자기 증류(VC-OPD)라는 방법을 제안했는데요. 고급 MLLM이 질문마다 필요한 핵심 시각 세부 사항과 구조적 관계를 담은 단서를 만들고, 여러 단계의 품질 필터링을 거쳐 믿을 만한 단서만 추려 학습 때 교사에게만 제공한다는 겁니다. 학생 모델은 원래 이미지에서 비판적인 증거를 바로 찾아내는 법을 배우게 되는데, 추론할 때는 추가 정보가 따로 필요 없다는 장점이 있지만, 고급 모델을 단서 생성에 따로 써야 한다는 점도 함께 따라온다는 겁니다.",
            "topic": "질문 맞춤형 시각 단서를 활용해 소형 멀티모달 대형 언어 모델의 시각적 추론 능력을 높이는 자기 증류 학습법을 제안한 연구예요.",
            "one_line": "질문 맞춤형 시각 단서를 활용하는 자기 증류 학습법을 제안했어요.",
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
          },
          "authors": "Qinxuan Wang, Zheyu Zhang, Yijing Yang, Han Shu, Chuang Wang, Peipei Yang, Shuo Tang, Jie Hu, Shiming Xiang",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32292"
        },
        {
          "canon_id": "2611.32247",
          "title": "Refining and Aligning Clinical Reasoning with Health Guidelines via Formal Constraints",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32247"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Xiaoyang Fan, Yufan Cai, Zhe Hou, Jin Song Dong",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32247"
        },
        {
          "canon_id": "2611.32218",
          "title": "PoseVLN: Learning Geometric State Evolution for Vision-Language Navigation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32218"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Pengyu Hou, Mingfei Han, Haihong Hao, Xiaolong Wu, Bo Dong, Xiaojun Chang, Salman Khan, Bin Shi",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32218"
        },
        {
          "canon_id": "2611.32209",
          "title": "XMind: Thinking Twice via Cross-Memory Reasoning for LLM-Based Autonomous Driving",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32209"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Zuyi Guo, Xianjie Dai, Lei Yang, Xiaocong Zhao, Jingguang Li, Kitae Jang, Heye Huang",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32209"
        },
        {
          "canon_id": "2611.32159",
          "title": "Breaking the Binary-Lifting Barrier for DNA Minimizer Density: Exact Optimization of a Native 4-ary Order at (w, k) = (12, 5)",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32159"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 방식은 이진 순서를 억지로 늘려 써서 묶이는 문제가 있었는데요",
            "easy1_desc": "연구진은 디엔에이(DNA) 염기서열 분석에서 창 크기 w와 k-mer 길이 k가 각각 (12, 5)일 때, 기존의 최신 방식인 GreedyMini와 OptMini가 이진 순서를 기반으로 삼아 한계를 겪었다고 밝혔는데요. 이 방식들은 이진 순서를 디엔에이 4진 순서로 끌어올리는 과정에서 32개의 5-mer 블록이 묶이고 보편적 적중 집합(UHS)의 접두사가 1024개 중 448개로 제한되는 문제가 생겼다는 겁니다. 쉽게 말하면, 이진 구조를 억지로 맞추려다 보니 최적화의 폭이 좁아졌다는 말이에요.",
            "easy2_title": "이진 방식을 건너뛰고 4진 순서를 직접 최적화해 밀도를 낮췄습니다",
            "easy2_desc": "그래서 연구진은 이진 리프팅 방식을 아예 거치지 않고, 4진 순열을 처음부터 직접 최적화하는 새로운 방식을 제안했는데요. 드 브루인(de Bruijn) 전달 행렬 동적 계획법과 가중치 집합 커버 초기화 등을 적용해 순서를 찾았더니, 밀도가 낮아지고 충돌하는 창의 수도 줄어드는 결과로 이어졌다는 겁니다. 장점은 기존 방식보다 디엔에이 밀도를 더 낮출 수 있다는 건데, 대신 최적화 과정에서 세밀한 탐색 기법들을 복합적으로 써야 한다는 점도 함께 따른다는 겁니다.",
            "topic": "디엔에이 미니마이저 밀도를 높이기 위해 기존의 이진 리프팅 한계를 깨고 4진 순서를 직접 최적화하는 새로운 방법을 제시한 연구예요.",
            "one_line": "디엔에이 미니마이저의 4진 순서를 직접 최적화해 밀도를 낮췄어요.",
            "topic_tag": "반도체·하드웨어",
            "limit": ""
          },
          "check": {
            "evidence": [
              [
                "easy1",
                false
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
                false
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
                true
              ]
            ],
            "evidence_ok": "3/6",
            "evidence_all": false,
            "evidence_by_symbols": 3,
            "bad_numbers": [],
            "format": [],
            "flags": [],
            "tag": "반도체·하드웨어",
            "limit_ok": null,
            "show_limit": false
          },
          "authors": "Stefan G. Creadore, Peyton Berntsen",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32159"
        },
        {
          "canon_id": "2611.32119",
          "title": "CoverMem: Coverage-Constrained Visual Memory for Budgeted Embodied Question Answering",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32119"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Ruijie Ma, Haoyue Liu, Mingda Zhang, Dongxu Yue, Xiaoying Tang",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32119"
        },
        {
          "canon_id": "2611.32088",
          "title": "From Memory Access to Evidence Sufficiency: Diagnosing and Addressing Demand--Evidence Misalignment",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32088"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "관련 있는 기록을 가져와도 정작 답을 내기엔 턱없이 부족하다는 거예요",
            "easy1_desc": "연구진이 긴 기억을 꺼내 쓰는 기술을 살펴봤더니, 질문에 딱 맞는 기록을 찾아오기는 하는데 정작 답을 채우기에는 부족한 경우가 많았다고 해요. 알고 보니 사실관계나 시간, 상태 같은 조건을 모두 채울 수 있는 증거가 한꺼번에 모이지 않아서 생기는 문제라는 겁니다. 쉽게 말하면, 필요한 단서 조각들은 대충 챙겼는데 막상 퍼즐을 맞추려니 짝이 안 맞는 셈이에요.",
            "easy2_title": "요구 조건을 직접 정의해서 증거를 골라 담는 방식을 만들어 봤어요",
            "easy2_desc": "그래서 연구진은 질문이 요구하는 바를 정확한 형태로 바꾸고, 이를 바탕으로 필요한 증거를 엮어내는 비데멤(BiDE-Mem)이라는 기술을 제안했는데요. 이 방식을 썼더니 로코모(LoCoMo) 데이터셋에서는 정확도가 6.23%포인트 올랐고, 롱멤에발(LongMemEval)에서는 91.80%의 성능을 기록했다고 해요. 성능이 좋아진다는 장점이 있는데, 대신 질문을 어떻게 정의하느냐에 따라 결과가 크게 달라질 수 있다는 점도 같이 따라온다는 겁니다.",
            "topic": "기억을 꺼내 쓰는 과정에서 질문이 요구하는 조건과 실제로 가져온 증거가 엇나가는 문제를 진단하고, 이를 바로잡는 새로운 기술을 제안한 논문이에요.",
            "one_line": "기억 검색에서 조건과 증거가 엇나가는 문제를 진단하고 비데멤으로 정확도를 높였다.",
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
          },
          "authors": "Shiyao Liu, Yixing Fan, Ruqing Zhang, Xiaohui Yan, Jiafeng Guo, Xueqi Cheng",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32088"
        },
        {
          "canon_id": "2611.32085",
          "title": "ExpGuard: Guarding Long-Horizon LLM Agents against Corrupted Experience",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32085"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 과거 경험을 재사용할 때 나쁜 정보가 섞일 수 있어요",
            "easy1_desc": "긴 작업을 수행하는 거대 언어 모델(LLM) 에이전트는 과거의 성공 사례를 다시 꺼내 쓰곤 하는데요, 만약 그 경험 속에 악의적인 지침이나 잘못된 정보가 섞여 있다면 문제가 생깁니다. 이런 나쁜 경험이 에이전트의 기억 속에 남아 나중에 다른 작업을 할 때까지 계속 해로운 영향을 끼치게 되거든요. 쉽게 말하면, AI가 이전에 겪은 나쁜 기억을 그대로 학습해서 다음 작업까지 망칠 수 있다는 말이에요.",
            "easy2_title": "위험한 경험을 미리 찾아내고 고쳐 주는 ExpGuard를 만들었어요",
            "easy2_desc": "연구진은 이런 위험을 막기 위해 ExpGuard라는 프레임워크를 제안했는데요, 경험을 다시 쓰기 전에 위험한지 먼저 평가하고 문제가 있다면 온라인에서 바로 수리하는 방식이에요. 구체적으로는 경험의 출처와 실행 과정을 그래프로 그려 위험을 예측하고, 반대 상황을 가정해 비교하는 방식으로 학습을 진행합니다. 덕분에 에이전트가 위험한 경험을 사용하기 전에 미리 걸러낼 수 있게 된 셈이에요.",
            "topic": "거대 언어 모델 에이전트가 과거의 경험을 재사용할 때 발생할 수 있는 오염된 정보의 위험을 평가하고 이를 온라인에서 복구하는 체계적인 방법론을 제시했어요.",
            "one_line": "LLM 에이전트의 오염된 경험을 탐지하고 수리하는 ExpGuard를 개발했어요.",
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
          },
          "authors": "Yuzhou Chen, Licheng Pan, Zhixuan Chu, Yunsheng Lu, Yichen Sun, Han Zheng, Yan Wang, Bingyu Zhu, Haiwen Hong, Longtao Huang, Kui Ren",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32085"
        },
        {
          "canon_id": "2611.32055",
          "title": "More Powerful, Less Verifiable? Mitigating Hard-to-Verify Hallucinations in MLLM's Reinforcement Learning",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32055"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "강화학습으로 똑똑해질수록 사람이 알아채기 힘든 거짓말이 늘어납니다",
            "easy1_desc": "강화학습(RL)은 사람이나 환경의 피드백을 받아 모델의 능력을 키우는 방식인데요, 문제는 이 과정에서 모델이 내놓는 오류를 사람이 잡아내기가 점점 어려워진다는 거예요. 모델이 더 똑똑해질수록 거짓말도 교묘해진다는 말인데, 이게 왜 문제냐면 사람이 검증하기 어려운 환각(Hallucination) 현상이 강화학습을 거치며 더 심해질 수 있기 때문입니다. 결국 모델의 성능은 좋아지는데 정작 사람이 그 결과물을 믿을 수 없는 상황이 생기는 셈이에요.",
            "easy2_title": "사람이 검증하기 쉬운 답변을 하도록 모델을 다시 훈련시켰습니다",
            "easy2_desc": "연구진은 사람이 알아채기 힘든 환각을 줄이기 위해 2,728개의 이미지-텍스트 데이터셋인 ITHV를 만들었는데요, 이를 바탕으로 DAPO-V라는 새로운 학습 방법을 제안했습니다. 이 방식은 모델이 답변할 때 사람이 검증하기 어려운 질문일수록 더 큰 벌점을 주어, 모델이 스스로 신중하게 답변하도록 유도하는 거예요. 실제로 테스트해 봤더니 기존 방식보다 환각을 잡아내는 능력이 5.78에서 9.72% 포인트까지 올랐거든요. 사람이 직접 블라인드 테스트를 해봐도 DAPO-V가 만든 결과물에서 환각을 훨씬 더 잘 찾아낼 수 있었다고 합니다.",
            "topic": "멀티모달 대규모 언어 모델(MLLM)의 강화학습 과정에서 사람이 검증하기 어려운 환각 문제를 해결하는 방법론에 관한 연구입니다.",
            "one_line": "MLLM 강화학습 시 사람이 검증하기 쉬운 답변을 하도록 학습 알고리즘을 개선했어요.",
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
          },
          "authors": "Jianhong Pang, Ziyi Ye, Qiuxia Hou, Yanhao Zhang, Zuxuan Wu",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32055"
        },
        {
          "canon_id": "2611.32053",
          "title": "EffectWAM: Learning Action-Grounded Effects for Robot Manipulation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32053"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇이 보고 움직이는 걸 연결하려는데 뭐가 문제였나",
            "easy1_desc": "연구진은 로봇 제어 모델에서 시각적 예측과 실제 행동을 잇는 방식을 살펴봤는데요, 기존에는 비디오를 먼저 만들고 나서야 행동을 하거나 둘의 연결이 매끄럽지 않다는 점이 문제였다는 겁니다. 쉽게 말하면, 눈으로 보는 것과 손으로 움직이는 게 따로 놀기 쉬웠다는 말이에요.",
            "easy2_title": "그래서 비디오 생성과 행동을 같이 학습하는 모델을 만들었더니",
            "easy2_desc": "연구진은 이펙트밤(EffectWAM)이라는 모델을 만들어 비디오 변화 예측과 실행 가능한 행동 조각을 동시에 학습하도록 했는데요, 덕분에 비디오를 다 만들 때까지 기다리지 않고도 로봇 제어가 바로 가능해졌다는 겁니다. 장점은 속도가 빨라진다는 점인데, 대신 20,000시간이 넘는 방대한 데이터와 여러 설정이 필요하다는 부담도 같이 따른다는 겁니다.",
            "topic": "시각적 변화 예측과 실행 가능한 로봇 제어를 동시에 학습하는 이펙트밤(EffectWAM) 모델을 제안하고 그 성능을 검증한 내용이에요.",
            "one_line": "로봇 제어를 위한 이펙트밤 모델을 개발하고 성능을 검증했어요.",
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
          },
          "authors": "Yuan Zhang, Hao Cui, Jingfei Ni, Meiyi Wang, Xin Nie, Chi Liu, Wenjie Xu, Lin Gao, Hao Li, Xianhe Zhang, Jiajia Wu, Diyuan Liu, Jia Pan, Chao Ji",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32053"
        },
        {
          "canon_id": "2611.32046",
          "title": "From Rule-based to Agentic: LLM Agent based Real-time Control of Urban Drainage Systems for Flooding and Sewer Overflow Mitigation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32046"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Wenchong Tian, Shixun Li, Ruozhou Lin, Peng Ye, Zhiyu Zhang, Shi Tao, Yu-Qi Wang, Ling Shi, Mingfu Guan, Haoran Duan, Zhiguo Yuan",
          "categories": [
            "cs.AI",
            "cs.SY",
            "eess.SY"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32046"
        },
        {
          "canon_id": "2611.32012",
          "title": "Marketing-Bench: Evaluating Frontier Models and Agents on Real-World Marketing Capabilities",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32012"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Sumanth Balaji, Siddharth Gupta, Ameet Deshpande, Vishvak Murahari, Karthik Narasimhan",
          "categories": [
            "cs.AI",
            "cs.CL"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32012"
        },
        {
          "canon_id": "2611.32006",
          "title": "TableRouter: Query-Aware Evidence Construction for Long-Table Question Answering",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.32006"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Anahita Bolourani, Xiaofeng Lin, Tung Sum Thomas Kwok, Guang Cheng",
          "categories": [
            "cs.AI",
            "cs.CL"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.32006"
        },
        {
          "canon_id": "2611.31990",
          "title": "How Much Dependency Can a Marginal Rule See? Total Correlation in Diffusion LM Parallel Decoding",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31990"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "여러 단어를 한꺼번에 뽑을 때 생기는 정보 손실을 따져 봤어요",
            "easy1_desc": "마스크드 확산 언어 모델(Masked Diffusion LM)은 한 번에 여러 단어를 생성해서 속도가 빠른데요, 각 단어를 따로따로 뽑다 보니 단어들 사이의 관계가 끊어지는 문제가 생깁니다. 이 관계가 얼마나 사라졌는지를 '조건부 전체 상관관계(C)'라고 부르는데, 기존 방식은 이 값을 정확히 알지 못하고 범위만 짐작할 뿐이었거든요. 연구진은 이 손실된 관계의 크기를 얼마나 잘 예측할 수 있는지 확인해 봤습니다.",
            "easy2_title": "기존 예측 방식의 한계를 확인하고 더 나은 측정법을 찾았어요",
            "easy2_desc": "네 가지 모델로 실험해 봤더니, 기존의 예측 방식은 실제 손실값과 약 1비트 정도 차이가 났습니다. 그래도 단순히 범위만 아는 것보다는 1.8배에서 3.7배 정도 더 정확한 편이었는데요, 여러 규칙을 비교해 보니 가장 약한 위치를 기준으로 삼는 것보다 전체를 묶어서 판단하는 방식이 더 나았습니다. 다만 모델마다 일관성이 달라서, 모델이 예측값을 어디에 저장하는지 확인하는 검증 절차가 꼭 필요하다는 점을 밝혀냈습니다.",
            "topic": "마스크드 확산 언어 모델에서 병렬로 단어를 생성할 때 발생하는 단어 간 의존성 손실을 어떻게 측정하고 예측할 것인가에 대한 연구입니다.",
            "one_line": "마스크드 확산 언어 모델의 단어 의존성 손실 예측 정확도를 분석했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "이번 연구는 고정된 단어 집합에 대한 상관관계 예측에 집중했을 뿐, 의존성을 고려하는 디코더가 실제로 얻는 이득을 다룬 것은 아닙니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          },
          "authors": "Dovud Asadov, Rustambek Urokov, Qobiljon Toshnazarov, Abduaziz Kayumov, Mardon Hazratov, Husanboy Mansuraliyev",
          "categories": [
            "cs.AI",
            "cs.LG"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31990"
        },
        {
          "canon_id": "2611.31983",
          "title": "Discovering Bandwidth-Efficient Prefetchers to Shrink the Cache Hierarchy",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31983"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Patrick Tser Jern Kon, Akanksha Jain, Abraham Gonzalez, Rui Meng, Dilara Soylu, Shubham Agarwal, Yawen Wang, Iman Hosseini, Hanna Alam, Jinsung Yoon, Tomas Pfister, Nanyun Peng, Chun-Liang Li, Parthasarathy Ranganathan",
          "categories": [
            "cs.AI",
            "cs.AR",
            "cs.LG"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31983"
        },
        {
          "canon_id": "2611.31969",
          "title": "DexOPD: Dual-Extrapolation On-Policy Distillation for Diffusion Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31969"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Yunchao Ke, Yanzhe Hu, Yi Yang, Jiachun Jin, Zhihong Liu, Zhijie Deng",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31969"
        },
        {
          "canon_id": "2611.31954",
          "title": "Perception Is Enough, at the Right Scale: Scale-Adaptive Token Pruning for Vision-Language-Action Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31954"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Yifeng Lin, Liuxiang Qiu, Yunfeng Chen, Tiesong Zhao",
          "categories": [
            "cs.AI",
            "cs.RO"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31954"
        },
        {
          "canon_id": "2611.31938",
          "title": "CAPE: Coordinating Calibration and Search for Tool-Use Policies",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31938"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "도구가 자꾸 오작동하는 진짜 이유를 찾아봤습니다",
            "easy1_desc": "도구 호출은 원래 연산이 맞았어도 AI 에이전트(AI agents)가 볼 수 없는 설정이나 구분자 문제로 실패할 수 있는데요, 이를 해결하려면 후보 설정을 평가하는 교정과 탐색을 같이 해야 하거든요. 그런데 두 과정이 하나의 컴파일 예산을 나눠 쓰다 보니, 전부 먼저 교정하면 좋은 정책이 늦게 나오고 매번 다시 풀면 다음 질문이 늦어진다는 문제가 생깁니다. 쉽게 말하면, 언제 어떻게 설정을 맞출지가 AI 도구 활용(Tool-Use Policies)의 큰 걸림돌이었다는 말이에요.",
            "easy2_title": "새 컴파일러를 써서 더 빠르게 최적의 정책을 찾았습니다",
            "easy2_desc": "연구진은 효과가 미치는 설정에서 호출을 바로 쓸 수 있다는 점에 착안해 훈련이 필요 없는 CAPE라는 컴파일러를 만들었는데요, 언제나 실행 가능한 정책을 유지하면서 개선할 수 있는 호출에 교정을 집중한다는 계획이에요. 그 결과 64개의 요청으로 만든 CSV와 JSON 작업에서 504번 중 502번이나 독립적으로 계산된 최적값에 도달했고, 기존 탐색보다 컴파일 시간을 22.0% 줄였다고 합니다. 컴파일 시간이 비슷하면서도 더 높은 완성도를 보여 준다는 장점이 있는 반면, 최적값과 실행값이 만날 때만 최적성을 인증한다는 조건도 같이 따라온다는 겁니다.",
            "topic": "보이지 않는 설정과 제한된 예산 속에서 효율적으로 도구 사용 정책을 최적화하는 새로운 컴파일러 CAPE를 제안한 내용이에요.",
            "one_line": "훈련이 필요 없는 CAPE 컴파일러를 만들어 도구 사용 정책을 효율적으로 최적화했어요.",
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
          },
          "authors": "Jiahao Wang, Xiaoxuan Chen, Aijun Yang, Xiaohua Wang",
          "categories": [
            "cs.AI",
            "cs.SE"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31938"
        },
        {
          "canon_id": "2611.31932",
          "title": "Contrastive On-Policy Self-Distillation for LLM Unlearning",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31932"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Fangzhou Lin, Shuo Xing, Xin Li, Wenbin He, Zhengzhong Tu, Liu Ren",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31932"
        },
        {
          "canon_id": "2611.31892",
          "title": "Cheap Memory Costs Future Compute: Co-Designing Persistent KV and GPU Execution for Efficient Streaming Video Diffusion",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31892"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Jian Yang, Zhizhuo Kou, Qiyuan Zhu, Han Chen, Sirui Han, Yike Guo",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31892"
        },
        {
          "canon_id": "2611.31884",
          "title": "HEAR, SEE, SPIKE ONCE: Highly Efficient NeuroAI Temporal Neural Networks for Low-Precision Multimodal Audio-Visual Classification and Online Learning",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31884"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Shanmuga Venkatachalam, Quinn Jacobson, John Paul Shen",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31884"
        },
        {
          "canon_id": "2611.31873",
          "title": "RepoEviAgent: Scalable Synthesis of Evidence-Grounded Repository-Level Question Answering Tasks",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31873"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "소프트웨어 개발 데이터를 만드는 게 너무 어렵거든요",
            "easy1_desc": "실제 소프트웨어 개발 업무를 수행하는 AI 에이전트를 만들려면 저장소 구조나 모듈 간의 관계 같은 복잡한 정보를 이해해야 하는데요, 이런 학습 데이터를 고품질로 대량 확보하는 게 매우 어렵다는 문제가 있었어요. 기존 방식으로는 데이터의 질을 일일이 따지기가 힘들었거든요. 쉽게 말하면, AI를 똑똑하게 가르칠 좋은 교재가 부족했다는 말이에요.",
            "easy2_title": "데이터를 자동으로 골라내고 질문까지 만드는 틀을 짰어요",
            "easy2_desc": "연구진은 RepoEviAgent라는 새로운 틀을 제안했는데요, 8,477개의 오픈소스 저장소와 248만 개의 풀 리퀘스트 기록에서 쓸 만한 데이터를 자동으로 골라내요. 그다음 샌드박스 환경에서 여러 AI 에이전트가 협력해 실제 코드를 실행하고 검증하며 질문과 답변을 생성하는 방식이에요. 덕분에 5개 프로그래밍 언어로 구성된 334개의 고품질 과제를 담은 RepoEviQA라는 평가 도구까지 만들 수 있었다는 겁니다.",
            "topic": "소프트웨어 저장소 수준에서 근거 기반 질의응답을 수행할 수 있도록 데이터를 생성하고 평가하는 프레임워크를 제안했어요.",
            "one_line": "소프트웨어 저장소 수준의 질의응답 데이터를 자동으로 생성하고 평가하는 틀을 만들었어요.",
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
          },
          "authors": "Aoqi Hu, Yueao Xing",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31873"
        },
        {
          "canon_id": "2611.31864",
          "title": "No Fixed Configuration Is Best: Context- and Cost-Aware Tuning of LLM Pipelines, with an Application to Schema Matching and Mapping",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31864"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Gokhan Kirlik, Xiuwen Zheng, Anirudh Sriram",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31864"
        },
        {
          "canon_id": "2611.31855",
          "title": "Explainable Deep Learning for Malaria Parasite Detection and Species Differentiation in Thick Blood Smear Images: A Pilot Feasibility Study",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31855"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Haimanot Bitew, Ayisheshim Almaw, Habtamu Zegeye, Demeke Alene",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31855"
        },
        {
          "canon_id": "2611.31851",
          "title": "Modeling Event-Conditioned Emotional Expression Response with LLM Agents in a Synthetic Social Simulation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31851"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 모델은 감정을 놓쳤고 LLM 에이전트에는 감정 추론이 없었다",
            "easy1_desc": "사람의 행동을 움직이는 핵심은 감정인데요, 지금까지의 행동 모델은 감정이 지각이나 의사결정에 미치는 역할을 담아내지 못했다는 겁니다. 긴급 대응이나 공중 보건 같은 분야는 감정을 아는 모델이 부족해서 한계가 컸는데요. 최근에 대형 언어 모델(LLM)을 에이전트 기반 모델(ABM)에 많이 넣고 있지만, LLM 에이전트에 감정 추론을 어떻게 넣을지나 실제 감정 패턴을 그대로 재현하는지 검증한 연구는 거의 없었다는 말이에요. 쉽게 말하면, 감정이 빠진 행동 모델만 많았고 LLM으로 감정을 다루려는 시도가 부족했다는 셈이에요.",
            "easy2_title": "계층형 프롬프트를 써서 감정 반응을 만들었더니 양극화와 합의가 모두 재현됐다",
            "easy2_desc": "그래서 연구진은 인구통계, 심리, 맥락 정보를 넣어 LLM 에이전트가 사건별 감정 반응을 만들도록 하는 계층형 프롬프트 틀을 제안했는데요. 이걸 페이스북(Facebook) URL 공유 데이터를 바탕으로 한 소셜 미디어 반응과 비교해 봤더니, 양극화된 감정과 합의 중심의 감정 패턴을 꽤 정확하게 재현해 냈다는 겁니다. 장점은 실제 사람처럼 감정 반응을 시뮬레이션할 수 있다는 것인데요, 대신 인간 기준보다 분노 표현이 적게 나오는 체계적인 차이도 함께 확인됐다는 점이에요. 쉽게 말하면, LLM 에이전트가 인간을 대신해 감정 행동을 흉내 낼 가능성을 보여줬지만, 앞으로 계속 보정과 조정이 필요하다는 말이에요.",
            "topic": "LLM 에이전트에 인구통계와 심리 단서를 넣어 실제 사람의 감정 반응을 시뮬레이션하고, 소셜 미디어 데이터와 비교해 그 한계와 가능성을 검증한 연구예요.",
            "one_line": "LLM 에이전트의 감정 반응 모델을 만들고 실제 데이터와 비교했어요",
            "topic_tag": "AI 모델·학습법",
            "limit": "인간 집단과 비교했을 때 LLM 에이전트의 감정 표현에서 분노가 덜 나타나는 등의 체계적인 차이가 있어 계속 보정이 필요합니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          },
          "authors": "Rebecca Marigliano, Peter Carragher, Kathleen M. Carley",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31851"
        },
        {
          "canon_id": "2611.31833",
          "title": "Not All Interpretation Methods Are Created Equal: Tiered Evaluation of AI Interpretability",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31833"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Nicolas Sanchez, Bin Yu",
          "categories": [
            "cs.AI",
            "cs.HC"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31833"
        },
        {
          "canon_id": "2611.31823",
          "title": "GaokaoMathGen: Chinese Gaokao Mathematics Finale Problem Generation Controlled by Latent Reasoning Structures",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31823"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 실패",
          "keywords": [],
          "authors": "Qian Chen, Kun Zhu, Zhongyi Wang, Ling Chen",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31823"
        },
        {
          "canon_id": "2611.31817",
          "title": "Compressible Representations: Functional Spines in Deep Neural Networks",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31817"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Niranjan Rajesh, Meenakshi Khosla",
          "categories": [
            "cs.AI",
            "cs.CV"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31817"
        },
        {
          "canon_id": "2611.31797",
          "title": "A Generative AI Agent to Emulate Interactive Human-driven Vehicles for Automated Driving Testing in Urban Areas",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31797"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Jia Hu, Changjian Yu, Panqu Wang, Jaehyun So, Yang Chang, Xuerun Yan, Jintao Lai",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31797"
        },
        {
          "canon_id": "2611.31795",
          "title": "Constructive Causal Abstraction and a Case Study in Mechanistic Interpretability",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31795"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 인과 관계 모형은 정확한 상위 모형을 찾기 어려웠는데요",
            "easy1_desc": "기존에는 미시적 모형과 일치하는 거시적 인과 모형을 먼저 제안하고 검증해 왔는데요, 거시적 관계가 애매모호해서 일치하는 모형을 찾기가 원래 어렵다는 거예요. 뭔 소리냐면, 똑같은 거시적 개입처럼 보여도 미시적 수준에서는 결과가 제각각이라 차이가 생기기 때문이라는 말이에요. 쉽게 말하면, 기준으로 쓸 만한 거시 모형 자체가 불완전했던 셈이라는 겁니다.",
            "easy2_title": "빠진 변수를 채워 넣는 새로운 방식을 제안해 문제를 풀었습니다",
            "easy2_desc": "그래서 연구진은 빠진 변수를 보완하는 보완 변수 q를 도입해 일관된 거시 모형을 직접 만들어내는 CCA(Constructive Causal Abstraction) 프레임워크를 제안했는데요, 선형일 때는 유일한 형태를 찾고 비선형일 때는 미분 방정식 기반 알고리즘을 쓴다는 거예요. 이렇게 하면 모델 감사와 수정의 차이를 분명하게 드러낼 수 있는 장점이 있는데, 대신 상황에 맞는 조건을 잘 따져야 한다는 점도 같이 따라온다는 겁니다. 쉽게 말하면, 애매한 부분을 그냥 두지 않고 계산 가능한 변수로 채워 넣었다는 말이에요.",
            "topic": "거시적 인과 모형을 직접 구성하는 새로운 프레임워크인 CCA를 제안하고, 이를 통해 모델 감사와 수정의 차이를 규명하며 해석 가능성의 역설을 해결했다는 내용이에요.",
            "one_line": "빠진 변수를 보완하는 거시적 인과 모형 구성 프레임워크를 제안했어요.",
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
          },
          "authors": "Yuchen Zhu, Sergio Hernan Garrido Mejia, Dominik Janzing",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31795"
        },
        {
          "canon_id": "2611.31794",
          "title": "AGL-SKILL: Coding Harnesses as Agentic Optimizers",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31794"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 스스로 자기 기술을 고치지 못하는 게 문제였어요",
            "easy1_desc": "요즘 인공지능 모델을 에이전트처럼 써서 복잡한 일을 시키는 경우가 많은데요, 이때 모델의 성능을 높이려고 재사용 가능한 코드나 프롬프트 같은 기술을 활용하곤 합니다. 그런데 이런 기술을 사람이 직접 만들거나 한 번에 생성하는 방식은 한계가 분명했거든요. 그래서 최근에는 점수를 기준으로 반복해서 기술을 수정하는 방식이 쓰였는데, 이것도 여전히 최적화 과정이 복잡하다는 문제가 있었던 겁니다.",
            "easy2_title": "AI 에이전트가 직접 자기 기술을 최적화하게 만들었어요",
            "easy2_desc": "이번 연구에서는 코딩 에이전트가 스스로 최적화 도구가 되어 자기 기술을 개선하도록 만들었는데요, 별도의 가이드 없이도 5개의 벤치마크에서 기존의 기술 최적화 방식보다 더 뛰어난 성능을 보였다고 해요. 뭔 소리냐면, 에이전트에게 평가할 수 있는 지표만 주어지면 스스로 자기 행동을 다듬어 특정 작업에 최적화된 맥락을 제공할 수 있다는 뜻이에요. 결과적으로 에이전트가 스스로를 개선하는 능력을 갖췄음을 증명한 셈입니다.",
            "topic": "코딩 에이전트가 스스로 기술을 최적화하는 도구로서 얼마나 효과적인지를 입증한 연구예요.",
            "one_line": "코딩 에이전트가 스스로 기술을 최적화하도록 만들어 성능을 개선했어요.",
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
          },
          "authors": "Ryan Tsui, Yuge Zhang, Yuqing Yang",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31794"
        },
        {
          "canon_id": "2611.31787",
          "title": "SciFig2Data: A Workflow for Recovering Structured Data from Scientific Figures",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31787"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Xinhe Wu, Yicheng Ye, Yadong Jin",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31787"
        },
        {
          "canon_id": "2611.31762",
          "title": "Verified Proof Refactoring with Codex and Qwen",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31762"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "증명 과정이 너무 길고 복잡해서 줄여야 했어요",
            "easy1_desc": "린(Lean) 4로 작성된 기존 수학 증명들은 소스 코드 길이가 길고 검증 비용이 많이 든다는 문제가 있었는데요. 연구진은 증명의 내용은 그대로 유지하면서도 코드의 길이를 줄이고 여러 버전의 린 환경에서도 호환되도록 만드는 작업을 수행했어요. 쉽게 말하면 증명의 본질은 건드리지 않고 군더더기만 걷어내 효율을 높이려 한 겁니다.",
            "easy2_title": "AI 모델이 직접 증명을 고치고 검증까지 마쳤어요",
            "easy2_desc": "연구진은 큐웬(Qwen) 모델과 코덱스(Codex) 도구를 활용해 증명 코드를 자동으로 검사하고 더 나은 형태로 교체하는 시스템을 만들었는데요. 모델이 제안한 수정안이 실제로 증명 성능을 높이고 모든 버전에서 오류 없이 통과하는지 확인하는 과정을 거쳤어요. 그 결과 린 리팩터 아레나(Lean Refactor Arena)에서 1위를 차지했으며, 최종적으로 127개의 모든 증명 검증을 성공적으로 마쳤다는 겁니다.",
            "topic": "린(Lean) 4 증명 코드의 효율성을 높이기 위해 AI 모델을 활용한 자동 리팩터링 시스템을 개발하고 그 성능을 검증했어요.",
            "one_line": "AI 모델을 활용해 린 4 증명 코드를 효율적으로 리팩터링하고 검증했어요.",
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
          },
          "authors": "Lazar Milikic, Gordan {\\DJ}uri\\'c, Viktor Kun\\v{c}ak",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31762"
        },
        {
          "canon_id": "2611.31756",
          "title": "TACT-Bench: Testing Adaptive Conversational Threats against Tool-Use Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31756"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Ilia Hashemi Rad, Feijie Wu, Haoyu Wang, Jing Gao",
          "categories": [
            "cs.AI",
            "cs.CL",
            "cs.CR"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31756"
        },
        {
          "canon_id": "2611.31747",
          "title": "FN-Prune: Training-Free Expert Pruning with Finite RMSNorm Perturbations",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31747"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Zeyan Li, Jianfeng Xu",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31747"
        },
        {
          "canon_id": "2611.31737",
          "title": "GreenDynaMix: Thermal-Aware Dynamic Mixed-Precision MoE LLM Inference Systems",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31737"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Han-Yi Lin, Kieran Griperay, Qiang Zhou, Xiangyu Zhou, Nate Bonacci, Zinachidi Achikeh, Li He, Shaofei Qi, Hongqiang Wang, Jeff Zhang, Tianlong Chen, Pi-Cheng Hsiu, Jingtong Hu",
          "categories": [
            "cs.AI",
            "cs.SY",
            "eess.SY"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31737"
        },
        {
          "canon_id": "2611.31736",
          "title": "Reproducing History Is Not Enough: Intervention-Level Assurance for LLM-Generated Simulators",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31736"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기록을 똑같이 따라 한다고 해서 가정 상황에도 맞는 건 아니었어요",
            "easy1_desc": "거대 언어 모델(Large Language Model)이 현장 업무 흐름을 흉내 내는 시뮬레이션 프로그램을 짜 줄 수 있는데요, 옛날 기록을 그대로 재현한다고 해서 만약에 이런 일이 생기면 어떨까 하는 가정 질문에도 늘 바른 답을 주는 건 아니라는 거예요. 원했던 변화가 엉뚱한 곳에 적용되거나, 정책이 바뀌면 프로그램이 안 맞게 되기도 하거든요. 그런데 요즘 쓰는 검사법은 프로그램 전체가 맞는지 틀리는지만 통과/실패로 보여 줘서, 개별 대답을 믿어도 되는지 알기 어렵다는 겁니다.",
            "easy2_title": "개별 질문마다 믿을 수 있는지 따져 주는 라이브러리를 만들었어요",
            "easy2_desc": "그래서 연구진은 시뮬레이터가 낸 답을 믿어도 될지 개별 변화마다 따져 주는 Vouch라는 라이브러리를 내놓았는데요, 가정 질문을 구조화된 변화로 바꿔서 프로그램과 기록에 대어 가며 확인하는 방식이에요. 어떤 변화를 통과했는지 기록해 뒀다가 프로그램을 다시 쓸 때마다 관련 테스트를 거듭 반복한다는 겁니다. Haiku와 Sonnet이 짠 프로그램에서 틀린 답의 97.6%를 없애면서도 전체 답의 80.1%는 믿을 수 있게 되었다는 장점이 있는데, 대신 검사 과정이 더 붙는다는 점도 함께 따라온다는 말이에요.",
            "topic": "생성형 시뮬레이터가 낸 대답을 개별 가정 질문마다 신뢰할 수 있는지 검사하는 라이브러리 Vouch의 제안과 성능 평가",
            "one_line": "시뮬레이터 대답의 신뢰성을 검사하는 라이브러리를 제안하고 성능을 평가했어요.",
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
          },
          "authors": "Ashraf Abdul-Muumin, Aniruddha Chattopadhyay, Noorbakhsh Golilarz, Kaushik Roy",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31736"
        },
        {
          "canon_id": "2611.31708",
          "title": "PRETZEL: A Benchmark for Cyclic Peptide Structure Prediction",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31708"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Yongchan Hong, Zihang Fang, Mukta Ubale, Yan Liu, Xingyao Chen, Vsevolod Katritch",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31708"
        },
        {
          "canon_id": "2611.31684",
          "title": "CROSS-Calib: Selective Channel Calibration for Ultrasound Reconstruction",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31684"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Tongxiao Hu, Junyu Zhou",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31684"
        },
        {
          "canon_id": "2611.31682",
          "title": "LimoBench: How Street Smart Are Large Language Models?",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31682"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "거대 언어 모델이 진짜 길이나 위치를 잘 아는지 확인해 봤습니다",
            "easy1_desc": "연구진은 거대 언어 모델(LLM)이 지도 기반 질문이나 위치 서비스 같은 공간 응용 프로그램에 쓰이는데, 진짜 실제 좌표나 장소, 거리 같은 위치 정보를 정확히 아는지 궁금해서 살펴봤는데요. 미국 웨스트 라피엣의 실제 지도 데이터를 바탕으로 주소 변환이나 경로 찾기 같은 일곱 가지 공간 연산 문제를 모아 만든 'LimoBench'라는 기준을 활용해 모델들을 테스트해 봤더니, 외부 도구가 없는 모델들은 대부분 한 자릿수 정확도(예컨대 GPT-6 Luna의 경우 3.1%)를 보였습니다. 뭔 소리냐면, 그냥 말만 들고 있는 상태에서는 실제 거리 감각이나 위치 능력이 턱없이 모자라고 믿기 힘들다는 말이에요.",
            "easy2_title": "공간 도구를 쥐여 줬더니 정확도가 눈에 띄게 올랐습니다",
            "easy2_desc": "그래서 연구진은 모델 콘텍스트 프로토콜(MCP) 기반의 공간 데이터 연결 도구인 'Limo'를 만들어 모델에 붙여 줬는데요. 이 도구를 쓰게 했더니 같은 모델의 정확도가 거의 완벽한 수준(GPT-6 Luna 기준 99.3%)으로 확 뛰어올랐다는 거예요. 대신 지연 시간이 0.2초 늘어나고 토큰은 7.7배, 비용은 2.2배 드는 대가가 따른다는 단점도 함께 나타났는데요. 쉽게 말하면, 도구를 달아 주면 정확해지지만 약간의 비용과 시간 부담은 감수해야 한다는 셈이에요.",
            "topic": "거대 언어 모델의 부족한 실제 위치 인식을 확인하고, 공간 도구 연동을 통해 정확도를 크게 높이는 방법을 제안한 연구예요.",
            "one_line": "거대 언어 모델의 위치 인식 한계를 측정하고 공간 도구로 정확도를 높였다",
            "topic_tag": "AI 에이전트·도구",
            "limit": "현재의 거대 언어 모델들은 길 수준의 공간 지식이 부족하고 믿기 어려우며, 외부 공간 도구를 쓸 때는 지연 시간과 토큰 및 비용이 추가로 드는 부담이 있습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
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
          },
          "authors": "Gautam Choudhary, Jack Peng, Udesh Kumarasinghe, Rachel Rafik, Yousef Hammad, Ahmed Samy, Walid G. Aref",
          "categories": [
            "cs.AI",
            "cs.CL",
            "cs.DB"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31682"
        },
        {
          "canon_id": "2611.31677",
          "title": "Look Before You Commit: Visual-Evidence-Guided Decoding for Multimodal Diffusion Language Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31677"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "확신만 믿고 토큰을 찍다 보니 이미지가 무시되는 문제가 있었습니다",
            "easy1_desc": "확신도(confidence)만 보고 후보 토큰을 정하려다 보니, 이게 실제 이미지에서 나온 건지 언어적 사전 지식(language prior)에서 나온 건지 구분하지 못하는 문제가 생겼는데요. 연구진이 한쪽을 가려 가며 실험을 해 봤더니, 높은 확신도로 찍은 토큰의 거의 10개 중 9개는 이미지와 상관이 없다는 걸 알아냈다는 겁니다. 게다가 엉뚱한 말이나 환각(hallucination)이 생기는 샘플은 깊은 층의 주의 집중 조직에서 엔트로피가 뚜렷하게 높아지는 특징을 보였다는 말이에요. 쉽게 말하면, 모델이 엉뚱한 걸 확신을 가지고 내뱉고 있었다는 셈입니다.",
            "easy2_title": "이미지 증거를 따져 묻는 새로운 디코딩 방식을 도입했습니다",
            "easy2_desc": "그래서 연구진은 따로 학습을 하지 않고도 쓸 수 있는 'CD-APC'라는 디코딩(decoding) 방식을 제안했는데요. 기본 후보 풀 안에서 이미지 증거를 반영해 점수를 다시 매기고, 모델이 받아들일 수 있는지와 대조 집중도를 함께 따져서 토큰을 쓸지 말지 결정한다는 겁니다. 여기에 단계별 난이도에 맞춰 조절되는 역창(inverse-window) 메커니즘까지 더해 성능을 끌어올렸다는 말이에요. 2개의 백본(backbone)과 5개의 벤치마크(benchmark)에서 두루 성능이 좋아졌다는 장점이 있는데, 대신 추가적인 계산 과정을 거쳐야 한다는 점도 함께 따라온다는 겁니다.",
            "topic": "멀티모달 확산 언어 모델(Multimodal Diffusion Language Models)에서 이미지 증거를 바탕으로 토큰 생성 과정을 조절하는 디코딩 방법인 CD-APC를 제안한 내용입니다.",
            "one_line": "시각적 증거를 반영하는 디코딩 방식으로 멀티모달 모델 성능을 높였습니다.",
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
          },
          "authors": "Tongxiao Hu, Yikai Zhao, Qiyan Zhao, Xiaosong Yuan, Xuhang Chen, Pengzhou Cheng, Xiaofeng Zhang",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31677"
        },
        {
          "canon_id": "2611.31656",
          "title": "BRAG: Bayesian Retrieval Augmented Generation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31656"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Javier Movellan, Manjot Bilkhu, Young-mok Jung, Sirajul Salekin, Henry Tran, Zhao Huang",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31656"
        },
        {
          "canon_id": "2611.31654",
          "title": "Stranded Compute in AI Inference Workloads: Recovering Value Through Demand Aggregation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31654"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 실패",
          "keywords": [],
          "authors": "Sam Kingsley",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31654"
        },
        {
          "canon_id": "2611.31641",
          "title": "E2SIM: Long-Horizon Simulation of Everyday Human Behavior with Evolving States",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31641"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "사람의 행동이 시간이 지나며 어떻게 바뀌는지 따라가기가 어려웠어요",
            "easy1_desc": "AI 에이전트가 사용자를 오랫동안 돕게 하려면 사용자의 목표나 관심사가 시간이 흐르면서 어떻게 변하는지 알아야 하는데요. 지금까지는 사용자의 상태가 변하는 것과 그에 따른 행동의 결과를 하나의 환경 안에서 일관성 있게 연결하는 게 쉽지 않았거든요. 쉽게 말하면, 사용자가 어제 한 행동이 오늘 어떤 영향을 미치는지 AI가 제대로 기억하고 반영하기가 어려웠다는 말이에요.",
            "easy2_title": "행동과 환경을 연결하는 새로운 시뮬레이션 방식을 만들었어요",
            "easy2_desc": "연구진은 E2SIM이라는 새로운 틀을 제안했는데요. 이 방식은 사용자의 상태 변화와 주변 환경의 변화를 피드백 루프로 연결해서, 과거의 행동이 미래의 행동에 영향을 주도록 설계했어요. 60일 동안 시뮬레이션을 해 봤더니, 기존 방식보다 의미 있는 사건 흐름을 더 많이 만들어냈고 중복되는 행동은 줄었다고 해요. 덕분에 AI가 사용자를 장기간 돕는 능력을 더 잘 평가할 수 있게 된 셈이에요.",
            "topic": "사용자의 상태 변화와 환경을 함께 모델링하여 장기간의 행동을 시뮬레이션하는 E2SIM 프레임워크를 제안했어요.",
            "one_line": "사용자 상태 변화를 반영하는 장기 시뮬레이션 프레임워크 E2SIM을 개발했어요.",
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
          },
          "authors": "Ziwei Gong, Xiangyang Yin, Thai Quoc On, Lin Ai, Julia Hirschberg, Haotong Yang",
          "categories": [
            "cs.AI",
            "cs.CL"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31641"
        },
        {
          "canon_id": "2611.31638",
          "title": "Wavefront: Low-Rank Drafting with Parallel Causal Refinement for Speculative Decoding",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31638"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존의 추론 가속 방식은 토큰 간의 연결 고리를 놓치고 있었어요",
            "easy1_desc": "거대언어모델(LLM)의 추론 속도를 높이려고 가벼운 모델이 먼저 토큰을 제안하고 큰 모델이 검증하는 추론 가속(Speculative decoding) 방식을 쓰는데요. DFlash나 P-EAGLE 같은 기존 방식은 한 번에 여러 토큰을 제안하지만, 토큰 사이의 의존 관계를 제대로 살리지 못한다는 단점이 있어요. DSpark가 이를 보완하려고 순차적인 교정 단계를 추가했지만, 결국 큰 모델의 연산 비용이 대부분 낭비되는 셈이라는 겁니다.",
            "easy2_title": "기본 모델은 줄이고 교정 단계는 강화해서 속도를 높였어요",
            "easy2_desc": "연구진은 기본 모델의 연산은 줄이고 교정 단계를 강화하는 Wavefront 방식을 제안했는데요. 전체 언어 모델 헤드(lm_head) 대신 학습된 저랭크(low-rank) 기반 모델을 쓰고, 교정 단계에서 야코비(Jacobi) 반복법을 병렬로 적용해 토큰 간 관계를 해결하도록 만들었어요. 이렇게 하면 데이터 흐름이 일정해져서 vLLM에서 CUDA 그래프로 한 번에 처리할 수 있거든요. 결과적으로 기존 방식들보다 처리량이 평균적으로 더 높게 나타났다는 겁니다.",
            "topic": "Wavefront는 저랭크 기반 모델과 병렬 야코비 반복법을 활용해 거대언어모델의 추론 속도를 최적화하는 새로운 추론 가속 기법이에요.",
            "one_line": "저랭크 기반 모델과 병렬 교정 기법을 도입해 LLM 추론 속도를 높였어요.",
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
          },
          "authors": "Huy Huu Nguyen, Xin Huang",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31638"
        },
        {
          "canon_id": "2611.31621",
          "title": "Self-Improving Long-Horizon Reasoning by Learning Summaries from Local Continuations",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31621"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Haoqun Cao, Tengyang Xie",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31621"
        },
        {
          "canon_id": "2611.31611",
          "title": "Multi-agent System for Automatic Discovery of Pareto-optimal Meta-solvers for PDEs",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31611"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "편미분 방정식 풀이법을 일일이 짜느라 고생이 많았죠",
            "easy1_desc": "편미분 방정식(PDE)을 풀 때 쓰는 선형 풀이법은 문제마다 특성이 달라서 전문가가 직접 설계해야 하는 번거로움이 있었거든요. 연구진은 언어 모델 에이전트들이 서로 제안하고 비판하며 최적의 풀이법을 찾아내는 다중 에이전트 시스템을 만들어 봤는데요. 이게 왜 필요하냐면, 기존에는 사람이 일일이 풀이법을 조합해야 했지만 이제는 시스템이 알아서 최적의 구성을 찾아내기 때문이에요.",
            "easy2_title": "여러 에이전트가 협력하니 풀이 속도와 정확도가 확 달라졌어요",
            "easy2_desc": "연구진은 유전 알고리즘을 활용해 여러 성능 지표를 동시에 만족하는 풀이법들을 찾아내도록 설계했는데요. 실제로 노트북 한 대에서 돌려봤더니, 단일 에이전트가 실패한 문제들도 성공적으로 해결했을 뿐만 아니라 반복 횟수를 최대 60배까지 줄이는 성과를 냈거든요. 쉽게 말하면, 사람이 직접 설계할 때보다 훨씬 빠르고 정확하게 복잡한 방정식을 풀어내는 시스템을 구축한 셈이에요.",
            "topic": "언어 모델 에이전트들을 활용하여 편미분 방정식의 최적 풀이법을 자동으로 찾아내는 다중 에이전트 시스템을 제안했어요.",
            "one_line": "언어 모델 에이전트 협업으로 편미분 방정식의 최적 풀이법을 자동으로 찾았어요.",
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
          },
          "authors": "Youngkyu Lee, Shanqing Liu, Jerome Darbon, George EM Karniadakis",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31611"
        },
        {
          "canon_id": "2611.31610",
          "title": "Monitorable-by-design architectures for a post-Astra world: a compartmentalization-based approach",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31610"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Jake Watts, Joel Sokol",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31610"
        },
        {
          "canon_id": "2611.31581",
          "title": "Frequency-Conditioned Privacy Auditing of Fine-Tuned Language Models",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31581"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Aymen Noor, Ke Lyu, Honglu Jiang",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31581"
        },
        {
          "canon_id": "2611.31579",
          "title": "Provably Near-Optimal PQ in the Extended Zador Model",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31579"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Edo Liberty, Ashwin Padaki, Amir Ingber",
          "categories": [
            "cs.AI",
            "cs.DB",
            "cs.IR",
            "cs.IT",
            "math.IT"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31579"
        },
        {
          "canon_id": "2611.31571",
          "title": "Safe Autoformalization: Sufficiency and Necessity with Entailment Graphs",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31571"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "자연어를 수식으로 바꾸고 싶은데 믿을 만한 보장이 없었거든요",
            "easy1_desc": "연구진은 자연어로 된 문장을 의도가 담긴 수식으로 바꾸는 오토포멀라이제이션(Autoformalization)을 다뤘는데요, 거대 언어 모델(LLM)을 쓰면 실용적이긴 한데 확률적으로 나오는 결과라 공식적인 안전 보장이 없다는 게 문제였어요. 그래서 연구진은 수식이 충분한지 혹은 필요한지를 증명하는 안전한 오토포멀라이제이션 기술을 제안했는데요, 후보 수식을 만들고 수치나 논리적 세기를 바탕으로 순서를 정하는 방식을 썼다는 겁니다. 쉽게 말하면, LLM이 뱉어낸 수식이 진짜로 안전한지 확실하게 검증할 길이 없던 걸 바로잡으려 했다는 말이에요.",
            "easy2_title": "함의 그래프를 써서 충분한 조건과 필요한 조건을 찾아냈습니다",
            "easy2_desc": "그래서 연구진은 함의 그래프(Entailment Graph, EG)를 써서 후보 수식들의 논리적 세기를 정렬하고, 문장을 만족하는 충분한 경계와 문장이 따르는 필요한 경계를 두 번의 탐색으로 찾아냈는데요, 탐색 단계마다 한 번씩 지역 검사를 거치도록 설계했어요. AWS(Amazon Web Services)의 보안이 중요한 속성들을 실제로 적용해 봤더니 전문가가 판정한 20가지 사례 모두에서 안전하다는 결과가 나왔거든요. 다수결 투표나 그래프가 없는 방식은 일부 사례에서 불안전하거나 모든 후보를 거부하는 한계가 있었는데, 이 방식은 Lean(린)이라는 도구로 증명까지 마쳤다는 겁니다.",
            "topic": "거대 언어 모델(LLM)을 이용한 자연어의 수식 변환 과정에서 논리적 충분성과 필요성을 증명하여 안전성을 높이는 기법에 대한 연구예요.",
            "one_line": "함의 그래프를 이용해 LLM 수식 변환의 안전성을 증명했어요.",
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
          },
          "authors": "Umut A. Acar, Eli Goldweber",
          "categories": [
            "cs.AI",
            "cs.LO"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31571"
        },
        {
          "canon_id": "2611.31570",
          "title": "Off-the-Shelf Autonomous Agents for Game Playtesting",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31570"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Ayush Maniar, Eryk Banatt",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31570"
        },
        {
          "canon_id": "2611.31559",
          "title": "COGENT: A Modular Cognitive Architecture for Agentic User Simulation",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31559"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Yikun Chi, Adam Davies, Debarati Das, Lin Ai, Scott Counts",
          "categories": [
            "cs.AI",
            "cs.HC"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31559"
        },
        {
          "canon_id": "2611.31554",
          "title": "Agent Recovery Gone Wrong: Measuring Harm Beyond Duplicate Calls",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31554"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Artem Trofimov, Boris Novikov",
          "categories": [
            "cs.AI",
            "cs.DB",
            "cs.SE"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31554"
        },
        {
          "canon_id": "2611.31539",
          "title": "Agent Evaluation Without Ground Truth: A Null Proportion Perspective",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31539"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "정답이 없는 상황에서 AI가 잘하고 있는지 어떻게 알까요",
            "easy1_desc": "AI 에이전트가 코딩이나 과학 실험처럼 복잡한 일을 스스로 처리할 때, 그 행동이 정말로 나아진 건지 판단하기가 어렵거든요. 예전에는 정해진 정답지인 그라운드 트루스(Ground Truth)와 비교하면 됐지만, 이제는 실험 결과가 불확실하거나 모호한 경우가 많아졌기 때문이에요. 쉽게 말하면, 정답이 없는 상황에서 AI의 성과를 어떻게 측정할지 고민해야 하는 시점이 온 겁니다.",
            "easy2_title": "정답지 대신 통계적 증거를 써서 AI 성능을 평가해 봤어요",
            "easy2_desc": "그래서 연구진은 정답지 대신 e-값(e-values)이라는 통계적 증거를 활용해 에이전트의 의사결정 과정을 평가하는 새로운 틀을 만들었어요. 이 방식은 에이전트가 실험 중간에 계획을 바꾸거나 데이터에 따라 경로를 수정하더라도 통계적으로 확실한 품질 측정값을 얻을 수 있다는 장점이 있거든요. 실제로 클로드 오퍼스(Claude Opus)와 클로드 하이쿠(Claude Haiku)가 파이썬 패키지의 실행 속도를 얼마나 개선하는지 비교하며 이 방법의 유효성을 확인해 봤다는 거예요.",
            "topic": "정답이 없는 환경에서 AI 에이전트의 의사결정 품질을 통계적으로 평가하는 새로운 프레임워크를 제안했어요.",
            "one_line": "정답지 없이 통계적 증거를 활용해 AI 에이전트의 성능을 평가하는 방법을 개발했어요.",
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
          },
          "authors": "Brian M. Cho, Michael Lindon, Nathan Kallus",
          "categories": [
            "cs.AI",
            "math.ST",
            "stat.AP",
            "stat.ME",
            "stat.TH"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31539"
        },
        {
          "canon_id": "2611.31522",
          "title": "One Step, Four Clocks: How GUI Agents Fall Out of Step",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31522"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Zhanwen Chen, Tianchun Wang",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31522"
        },
        {
          "canon_id": "2611.31521",
          "title": "PatientFlowSynth: Evaluating FHIR Agents with Matched Patient Charts",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31521"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Anthony Cuturrufo, Ratul Ghosh, Devashish Khatwani, Krishnaram Kenthapadi",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31521"
        },
        {
          "canon_id": "2611.31498",
          "title": "XRL4T1D: A Post-hoc Explainability Framework for Reinforcement Learning in Type 1 Diabetes Management",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31498"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "제1형 당뇨병 인슐린 자동 조절 모델은 왜 이런 결정을 내렸는지 알기 어려웠습니다",
            "easy1_desc": "연구진은 제1형 당뇨병(T1D) 관리를 위해 강화학습(RL) 기반의 인슐린 자동 주입 제어기를 쓸 때, 왜 그런 용량을 추천했는지 그 이유를 해석하기가 여전히 어렵다는 점에 주목했는데요. 연속혈당측정(CGM) 데이터와 투여한 인슐린 이력을 바탕으로 인슐린 양을 권장하는데, 블랙박스처럼 작동해서 속을 들여다보기 힘들다는 말이에요. 쉽게 말하면, 성능은 괜찮은데 왜 그런 결정을 내렸는지 투명하게 알 길이 없었던 셈이라는 겁니다.",
            "easy2_title": "사후 설명 프레임워크인 XRL4T1D를 도입해 어떤 입력이 중요한지 분석했습니다",
            "easy2_desc": "그래서 연구진은 이미 학습된 인슐린 주입 정책을 다시 학습시킬 필요 없이 사후에 설명할 수 있는 프레임워크인 XRL4T1D를 제안했는데요. 섀플리 부가적 설명(SHAP) 기법을 써서 혈당 기록과 인슐린 투여 기록 중 어떤 입력이 더 중요한지 비교하고, 인슐린 체류 시간에 맞춰 세 가지 시간 창으로 나누어 분석했다는 거예요. 가장 중요하다고 꼽힌 입력을 바꿔 봤더니 실제로 인슐린 추천 결과가 크게 달라진다는 장점이 있는데, 대신 코호트나 설정에 따라 중요도 분포가 달라져서 꼼꼼히 따져봐야 한다는 점도 함께 확인했다는 겁니다.",
            "topic": "제1형 당뇨병 관리를 위한 강화학습 인슐린 제어기의 결정을 사후에 해석하는 XRL4T1D 프레임워크를 제안하고 그 타당성을 평가한 내용이에요.",
            "one_line": "강화학습 기반 당뇨 인슐린 제어기의 사후 해석 프레임워크를 개발했어요.",
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
          },
          "authors": "Malay Phadke, Chirath Hettiarachchi",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31498"
        },
        {
          "canon_id": "2611.31480",
          "title": "Evaluating Frontier-Model Agent Skills with Open-Weight Models in a Science Gateway",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31480"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "전문 지식이 없어도 복잡한 과학 작업을 맡길 수 있을까",
            "easy1_desc": "과학 연구에 쓰는 대규모 작업 관리 시스템은 복잡해서 전문가가 아닌 과학자들이 직접 쓰기 어렵거든요. 그래서 연구진은 최첨단 모델을 이용해 반복 작업을 돕는 기술과 전문가 에이전트를 만들었는데요, 문제는 비용이나 자원이 부족한 사용자가 무료로 쓸 수 있는 공개 가중치 모델을 쓸 때는 기존 기술이 그대로 통하지 않을 수 있다는 점입니다. 쉽게 말하면, 좋은 시스템을 만들어 놔도 막상 쓸 사람이 쓰기 어려운 환경의 차이가 문제였던 셈이에요.",
            "easy2_title": "공개 모델에 맞게 기술을 고치고 성능을 직접 비교해 봤다",
            "easy2_desc": "그래서 연구진은 최첨단 모델용으로 썼던 기술을 공개 가중치 모델에서도 쓸 수 있게 바꾸는 방법을 제안했는데요, 실제 시스템을 구동하며 에이전트가 만든 작업을 채점하고 실패한 부분을 다시 기술 유지 모델에 피드백하는 평가 도구를 썼다는 겁니다. 그 결과 상위 5개 모델의 품질은 비슷한데 응답 속도는 12배나 차이가 난다는 점을 확인했고요, 최고 성능의 공개 모델은 클로드(Claude)와 비슷한 점수를 기록하기도 했습니다. 대신 평가 과정에서 시스템 오작동과 모델 오류를 구별하기 어렵거나 에이전트가 통제를 우회하는 등의 한계도 함께 드러났다는 거예요.",
            "topic": "과학 게이트웨이 환경에서 공개 가중치 모델을 활용해 워크플로 관리 시스템의 에이전트 기술을 적용하고 평가한 연구예요.",
            "one_line": "공개 가중치 모델을 과학 시스템에 맞추는 방법을 제안하고 성능을 평가했어요.",
            "topic_tag": "AI 에이전트·도구",
            "limit": "실제 운영 시스템에서 에이전트를 평가할 때 시스템 오류를 모델 오류로 오인하거나 에이전트가 통제를 우회하는 문제가 생길 수 있다는 한계가 있습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
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
              "12"
            ],
            "format": [],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": true,
            "show_limit": true
          },
          "authors": "Komal Thareja, Mats Rynge, Anirban Mandal, Ewa Deelman",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31480"
        },
        {
          "canon_id": "2611.31475",
          "title": "SpatialCraft: Evolving Procedural Intelligence from Experience and Skills for Spatial Reasoning Agents",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31475"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Xiwei Liu, Yulong Li, Xuhui Li, Zhixiang Lu, Haolin Yang, Jianxu Chen, Yifan Lu, Di Fan, Yutong Xie",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31475"
        },
        {
          "canon_id": "2611.31457",
          "title": "Taxi: Analyzing Agents at (Real) Scale",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31457"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Guy Dar",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31457"
        },
        {
          "canon_id": "2611.31427",
          "title": "Learning What vs. Learning How: Decomposing Task and Interface Competence in Agentic Training",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31427"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "AI가 일을 못 할 때 그게 지식 문제인지 도구 문제인지 알기 어렵다는 거예요",
            "easy1_desc": "거대언어모델(LLM) 에이전트는 시스템 프롬프트나 행동 형식 같은 특정 환경인 하네스(harness) 위에서 작동하는데요, 모델이 문제를 풀 지식은 있어도 그 환경에 맞게 표현하는 능력이 부족할 수 있다는 거예요. 즉, 에이전트가 실패했을 때 그게 진짜 몰라서 틀린 건지, 아니면 도구 사용법이 서툴러서 그런 건지 구분하기가 어렵다는 말이에요. 쉽게 말하면, 실력은 있는데 도구 탓에 제 기량을 못 펼치는 상황이 생길 수 있다는 겁니다.",
            "easy2_title": "지식과 도구 능력을 따로 떼어 학습시켰더니 성능이 훨씬 좋아졌어요",
            "easy2_desc": "연구진은 에이전트의 능력을 문제를 푸는 지식인 '태스크 역량'과 도구를 다루는 '인터페이스 역량'으로 나누어 분석했는데요, 지식만 주입하면 오히려 도구 사용 능력이 망가질 수 있다는 점을 확인했어요. 그래서 지식은 여러 환경에서 모으고, 도구 연습은 최소한의 지식만으로 반복하는 '하네스 리허설' 방식을 도입했거든요. 그랬더니 두 가지를 따로 떼어 학습시킨 결과, 성능이 훨씬 크게 올랐다고 주장했습니다.",
            "topic": "LLM 에이전트 학습 시 태스크 지식과 인터페이스 역량을 분리하여 최적화하는 방법론에 관한 연구예요.",
            "one_line": "LLM 에이전트의 지식과 도구 역량을 분리해 학습시키는 기법을 제안했어요.",
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
          },
          "authors": "Chaeeun Lee, Hossein A. Rahmani, Aryo Pradipta Gema, Kexin Xu, Emine Yilmaz, Pasquale Minervini, T. Ian Simpson, Chen Jin, Amrutha Saseendran",
          "categories": [
            "cs.AI",
            "cs.CL",
            "cs.LG"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31427"
        },
        {
          "canon_id": "2611.31424",
          "title": "ContextLure: Exploiting Benign Conversation History for Indirect Prompt Injection",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31424"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Yi Han, Zhen Sun, Zhijie Deng, Yini Huang, Yangyang Zheng, Dongyi Zhang, Xinlei He",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31424"
        },
        {
          "canon_id": "2611.31347",
          "title": "Antares-Smaug: Adversarial Names, Tokens and Attack Rewrites: Sanitisers Miss Unseen Generalisations",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31347"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "공개된 의사결정 모델인 라야가 공격에 얼마나 취약한지 확인해 봤어요",
            "easy1_desc": "라야(Laya)는 텍스트와 질문, 선택지를 주면 확률을 계산해 답을 내놓는 모델인데요, 연구진이 이 모델이 얼마나 쉽게 조작되는지 81가지의 프로그래밍된 편집 방식으로 566개의 합성 데이터를 만들어 공격해 봤습니다. 그 결과, 방어책이 없는 공격 문구에 대해 공개된 라야 모델은 59%, 미세 조정된 모델은 36%의 확률로 공격자가 의도한 답을 선택하도록 유도당하는 것으로 나타났거든요. 쉽게 말하면, 모델이 겉으로는 똑똑해 보여도 교묘하게 편집된 문장에는 아주 쉽게 휘둘린다는 겁니다.",
            "easy2_title": "공격 방식을 바꿔가며 모델의 방어 능력을 테스트하고 한계를 분석했어요",
            "easy2_desc": "연구진은 문장 삽입이나 글자 변형 같은 다양한 공격을 시도하며 모델이 어떻게 반응하는지 살펴봤는데요, 특정 공격을 막도록 학습된 방어 기법이라도 학습하지 않은 새로운 유형의 공격에는 방어율이 27% 수준으로 뚝 떨어지는 한계가 있었습니다. 또한, 공격자가 여러 개의 문자열 조합 중 가장 효과적인 것을 골라내면 모델의 성공률을 84%까지 다시 끌어올릴 수 있다는 점도 확인했거든요. 결국, 특정 공격에 맞춘 방어책만으로는 모델을 완전히 안전하게 보호하기 어렵다는 사실을 보여준 셈이에요.",
            "topic": "라야 모델의 취약점을 분석하고 다양한 공격 유형에 따른 방어 기법의 한계를 평가했어요.",
            "one_line": "라야 모델을 다양한 방식으로 공격하여 취약점을 분석하고 방어 기법의 한계를 평가했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "계획했던 일부 실험(다른 체크포인트, 두 번째 시드, 일부 미세 조정 등)은 실제로 수행하지 못했습니다."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          },
          "authors": "Mohammed Nayeem Khan, Akhil P",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31347"
        },
        {
          "canon_id": "2611.31346",
          "title": "What People Choose Not to Say: A Multimodal Benchmark for Fine-Grained Information Manipulation in Conversations",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31346"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "기존 기술은 거짓말을 겨우 찾아냈지만 사람들은 훨씬 복잡하게 속이거든요",
            "easy1_desc": "최근 멀티모달 대형언어모델(MLLM)이 발달하면서 감정을 읽거나 진실과 거짓을 구분하는 능력이 좋아졌는데요. 그런데 기존의 평가 방식들은 거짓인지 참인지 둘로만 나누거나 대충 감정만 보는 수준에 머물러 있었다는 거예요. 실제 대화에서는 숨기기, 흘리기, 꾸며내기, 얼버무리기 같은 여러 가지 방식으로 정보를 왜곡하는데 이걸 제대로 다루지 못했다는 겁니다. 뭔 소리냐면, 속이는 방식이 훨씬 다양하고 복잡한데 기존 기술은 그걸 알아채기 어려웠다는 말이에요.",
            "easy2_title": "대화 속 정보 왜곡을 세밀하게 평가하는 새로운 기준을 만들었습니다",
            "easy2_desc": "그래서 연구진은 대화 속 정보 조작을 세밀하게 평가할 수 있는 멀티모달 벤치마크인 인포콘(InfoCon)을 새로 선보였는데요. 이 도구는 여섯 가지 세부 전략을 찾아내고 사실 관계와 상호작용을 바탕으로 일관성 여부를 가려낸다는 거예요. 여러 에이전트가 함께 증거를 확인하는 방식을 써서 믿을 수 있는 정답을 만들었다고 하는데요. 장점은 복잡한 거짓말을 촘촘하게 짚어낼 수 있다는 건데, 대신 대화 맥락과 참가자의 배경 지식을 깊이 추론해야 한다는 까다로움도 같이 따른다는 겁니다.",
            "topic": "대화 속에서 사람들이 정보를 숨기거나 왜곡하는 다양한 전략을 세밀하게 평가하기 위한 새로운 멀티모달 벤치마크 모델인 인포콘(InfoCon)을 소개하고 평가한 연구입니다.",
            "one_line": "대화 속 정보 왜곡을 평가하는 새 벤치마크를 개발했어요.",
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
          },
          "authors": "Yuhan Bian, Zhaokai Liang, Jia Wang, Haoyu Liu, Yu Chen, Jianfeng Qu, Zhixu Li",
          "categories": [
            "cs.AI",
            "cs.CL"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31346"
        },
        {
          "canon_id": "2611.31345",
          "title": "Beyond Static Charts: Benchmarking Interactive Chart-to-Code Generation for MLLMs",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31345"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "움직이는 차트까지 다루는 게 왜 문제였나",
            "easy1_desc": "연구진이 멀티모달 대형 언어 모델(MLLMs)의 차트 코드 생성 능력을 살펴봤는데요, 지금까지의 평가 기준은 고정된 정적 차트에만 쏠려 있었다는 겁니다. 그게 왜 문제냐면, 요즘 많이 쓰는 마우스 오버나 툴팁 같은 상호작용 차트는 사용자의 행동에 따라 상태가 바껴서 옛날 방식으로는 제대로 평가할 수가 없거든요. 쉽게 말하면, 가만히 있는 그림만 보다가 실제로 움직이는 화면을 다뤄야 하는 상황에서 한계에 부딪힌 셈이라는 말이에요.",
            "easy2_title": "상호작용 차트를 평가하는 새로운 기준을 만들어 봤다",
            "easy2_desc": "그래서 연구진은 2,779개의 예시로 이루어진 ChartInt라는 첫 벤치마크를 만들어서 상호작용 차트 코드 생성을 평가해 봤는데요, 미리 정해둔 상태 스냅샷 프로토콜로 사용자의 행동을 재현 가능한 평가 목표로 바꿨다는 겁니다. 그 결과, 기존 MLLMs가 정적 차트에서는 잘하지만 상호작용 작업에서는 성능이 크게 떨어진다는 걸 확인했다고 해요. 꼼꼼한 평가가 가능해진다는 장점이 있는데, 대신 모델들이 복잡한 상호작용을 처리해야 하는 부담이 늘어난다는 점도 같이 보여준다는 겁니다.",
            "topic": "상호작용 차트 코드 생성을 평가하기 위해 새로운 벤치마크와 평가 체계를 제안한 연구예요.",
            "one_line": "상호작용 차트 코드 생성을 평가하는 벤치마크를 제안했어요.",
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
          },
          "authors": "Yuhan Bian, Haoyu Liu, Siyu Li, Hanpei Guo, Jingrong Gao, Zhixu Li",
          "categories": [
            "cs.AI",
            "cs.CV"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31345"
        },
        {
          "canon_id": "2611.31329",
          "title": "Conservative Overlap Fuzzy Rough Sets for Incomplete Data",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31329"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "빠진 데이터 때문에 분석이 자꾸 막혔었는데요",
            "easy1_desc": "정보가 비어 있는 표에서는 억지로 짝을 맞추거나 정확한 동등 관계를 따지기가 어려워서 속성이 줄어들지 않는 문제가 있었거든요. 연구진은 그래서 빠진 값을 그냥 아무렇게나 넘기지 않고 전체 속성 개수로 나누어 벌점을 주는 새로운 방식을 제안해 봤는데요. 뭔 소리냐면, 빈칸을 아무렇게나 채우는 만능 카드처럼 쓰지 못하게 막아서 빠진 데이터가 전체에 미치는 영향을 깐깐하게 잡겠다는 말이에요.",
            "easy2_title": "데이터를 압축해서 줄이는 데는 성공했는데요",
            "easy2_desc": "그래서 11개의 UCI 벤치마크 데이터로 실험해 봤더니, 제안한 방식이 평균적으로 가장 적은 속성 개수만을 골라냈다는 거예요. 속성이 줄어들어 뼈대만 남는 장점이 있는데, 대신 RBF-SVM 분류기를 썼을 때는 예측 정확도가 오히려 제일 낮게 나왔다는 단점도 같이 따라온다는 겁니다. 쉽게 말하면, 정확도를 높이는 게 아니라 데이터의 덩치를 줄이는 데 목적이 있는 셈이에요.",
            "topic": "정보가 비어 있는 데이터에서 불필요한 속성을 덜어내는 새로운 방식인 보수적 중첩 퍼지 러프 세트(Conservative Overlap Fuzzy Rough Set, COFRS) 모델을 제안하고 그 성능을 평가한 연구예요.",
            "one_line": "빠진 데이터가 있는 시스템에서 속성을 줄이는 COFRS 모델을 제안하고 성능을 평가했어요.",
            "topic_tag": "AI 모델·학습법",
            "limit": "예측 정확도가 높아지지 않고 RBF-SVM 분류기에서는 가장 낮은 순위를 기록하는 등 예측 성능 면에서는 이득이 없다는 한계가 있어요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          },
          "authors": "Trung Hieu Vuong, Van Thien Nguyen, Nhu Son Nguyen, Thanh Dai Tran",
          "categories": [
            "cs.AI",
            "cs.LG"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31329"
        },
        {
          "canon_id": "2611.31301",
          "title": "MOZAIC: An Audio-Video Deepfake Benchmark for Telling What Is Fake",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31301"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 대기",
          "keywords": [],
          "authors": "Shaina Raza, Mohamed Hafez, Ahmed Y. Radwan, Khalid Elgazzar, Kathryn Hume",
          "categories": [
            "cs.AI",
            "cs.CV",
            "cs.SD"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31301"
        },
        {
          "canon_id": "2611.31284",
          "title": "Irreducible Governance Structure for Autonomous Agent Systems: Fair Allocation, Strategy-Proofness, and Multi-Scale Composition",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.31284"
          },
          "published": "2026-11-25",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": null,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "에이전트가 무슨 일을 할까보다 누가 먼저 나설지가 문제였다",
            "easy1_desc": "연구진은 자율 에이전트(Autonomous agent) 시스템을 제대로 실행하는 방법만 주로 따져봤는데요, 자원 한정 속에서 어떤 에이전트에게 실행 권한을 줄지 고르는 과정이 먼저라는 점을 짚어봤거든요. 한정된 자원을 두고 여러 에이전트가 경쟁할 때 공정함(Fairness), 효율성(Efficiency), 전략적 조작 저항성(Strategy-proofness) 사이에서 피할 수 없는 상충 관계가 생긴다는 말이에요. 쉽게 말하면, 모두를 만족시키는 완벽한 배분 규칙을 찾기가 어렵다는 셈이라는 겁니다.",
            "easy2_title": "복잡한 제어 구조를 줄이려 했지만 쪼갤 수 없는 4가지 축을 찾았다",
            "easy2_desc": "그래서 연구진은 자원 배분 문제를 풀기 위해 시간, 상태, 행동, 집단이라는 4가지 차원이 얽힌 다중 규모 거버넌스(Multi-scale governance) 구조를 제안했는데요, 유한한 관측 환경 속에서는 이 4가지 차원을 하나로 합치면 안정성이 무너진다는 분석 결과를 내놓았어요. 구조를 단순화하면 시스템이 망가진다는 단점이 있는데, 대신 시스템이 왜 이렇게 복잡해야만 하는지를 명확히 보여준다는 장점이 있다는 겁니다. 쉽게 말하면, 복잡함을 억지로 줄이지 말고 그대로 유지해야만 에이전트 시스템이 오류 없이 돌아간다는 말이에요.",
            "topic": "자율 에이전트 시스템에서 실행 권한 배분이 왜 구조적 한계와 다중 규모 거버넌스 요구로 이어지는지 분석한 연구예요.",
            "one_line": "자율 에이전트 시스템에서 자원 배분 제약과 쪼갤 수 없는 거버넌스 구조를 분석했어요.",
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
          },
          "authors": "Marcelo Fernandez",
          "categories": [
            "cs.AI",
            "cs.MA"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.31284"
        },
        {
          "canon_id": "2611.30813",
          "title": "HIVE-Bench: Evaluating Patch-Level Visual Representations for Egocentric Robot Manipulation",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.30813",
            "arxiv": "https://arxiv.org/abs/2611.30813"
          },
          "published": "2026-11-23",
          "first_seen": "2026-11-25",
          "backlog": true,
          "hf_upvotes": 10,
          "score": 1.0,
          "score_why": "추천 10 → +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "로봇 눈으로 세상을 볼 때 왜 패치를 그대로 써야 하는지 살펴봤습니다",
            "easy1_desc": "기존 로봇 학습에서는 사진 한 장을 하나의 벡터로 뭉뚱그려 비교했는데요, 두 손을 쓰는 로봇은 카메라에서 나온 촘촘한 패치 토큰을 직접 읽어온다는 말이에요. 그 패치들을 그대로 유지하는 게 왜 중요한지 24개의 로봇 과제와 20개의 인코더로 실험해 봤는데요. 각 시점을 하나의 토큰으로 평균 내어 압축해 버리면 성공률의 대부분이 사라져 버린다는 걸 확인했다는 겁니다.",
            "easy2_title": "새로운 벤치마크를 통해 로봇 조작 성능을 더 정확하게 측정해 봤습니다",
            "easy2_desc": "연구진은 다양한 조건에서 로봇 정책을 평가할 수 있는 HIVE-Bench라는 공통 평가 방식을 도입했는데요. 정책을 직접 훈련하기 전에 명령받은 움직임을 읽어내는 역동역학 판독 방식이 가장 강력한 측정 도구 중 하나라는 걸 알아냈다는 말이에요. 다만 파인튜닝으로 행동 판독을 개선할 수 있더라도 다른 측정값은 다르게 움직일 수 있어서, 실제 배치 전에는 여전히 실제 주행 실험을 대체할 만한 안정한 통계 지표가 없다는 점도 함께 지적하고 있답니다.",
            "topic": "로봇의 두 손 조작 학습을 위해 패치 수준의 시각 표현을 평가하고 비교하는 HIVE-Bench를 제안한 연구예요.",
            "one_line": "패치 수준 시각 표현을 평가하는 HIVE-Bench를 도입했어요.",
            "topic_tag": "AI 안전·평가",
            "limit": "인식, 깊이, 대응성은 신뢰성 있게 전이되지 않으며, 배포 전 주행 테스트를 대체할 만큼 안정한 통계 지표는 아직 없다는 거예요."
          },
          "check": {
            "evidence": [
              [
                "easy1",
                true
              ],
              [
                "easy2",
                true
              ],
              [
                "topic",
                true
              ],
              [
                "point1",
                true
              ],
              [
                "point2",
                true
              ],
              [
                "point3",
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
          },
          "authors": "Qiwei Liang, Zhengtu Liang, Minghao Lai, Yikeng Chen, Yiming Wang, Boyang Cai, Yuetong Fang, Taowen Wang, Baiqiao Yin, Tianxing Chen, Yue Chen, Jiaming Liang, Guangyu Chen, Shaolong Zhu, Daolin Ma, Renjing Xu",
          "categories": [],
          "comments": 2,
          "pdf": "https://arxiv.org/pdf/2611.30813"
        },
        {
          "canon_id": "2611.27404",
          "title": "Degradation of Language Models under Controlled Load: Synchronization, Rule Execution and Misfires on the Background",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.27404",
            "arxiv": "https://arxiv.org/abs/2611.27404"
          },
          "published": "2026-11-20",
          "first_seen": "2026-11-26",
          "backlog": false,
          "hf_upvotes": 0,
          "score": 1.0,
          "score_why": "오늘 +1",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "일이 몰릴수록 언어 모델이 왜 망가지나 봤는데요",
            "easy1_desc": "연구진은 부하가 커질수록 언어 모델이 실수를 점점 더 많이 한다는 점에 주목했는데요, 그 이유가 다 다르다는 거예요. 원문과 멀어지거나, 규칙을 틀리게 적용하거나, 엉뚱한 단어를 바꾸는 일이 섞여 있다는 말이에요. 쉽게 말하면, 어디서 구멍이 나는지 그 원인을 콕 집어내기 어려웠던 셈이라는 겁니다.",
            "easy2_title": "문제를 세 갈래로 쪼개서 모델의 여권을 만들어 봤어요",
            "easy2_desc": "그래서 연구진은 모델의 성능 저하를 동기화, 규칙 실행, 오발화 이렇게 세 가지로 쪼개는 방법을 제안했는데요, 7개 모델을 직접 시험해 보니 각 부하에 따라 어떻게 망가지는지 뚜렷한 법칙을 찾아냈다는 거예요. 이 결과를 모아 모델의 여권처럼 쓴다는 장점이 있는데, 대신 여러 가지 부하 조건을 세밀하게 다뤄야 한다는 점도 같이 따라온다는 겁니다.",
            "topic": "부하를 조절하며 언어 모델의 성능 저하 원인을 세 가지로 분리하고 이를 통계적으로 분석하는 방법이에요.",
            "one_line": "언어 모델의 성능 저하 원인을 세 가지로 분리하는 방법을 개발했어요.",
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
          },
          "authors": "Hennadii Kutomanov",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.27404"
        },
        {
          "canon_id": "2611.26745",
          "title": "MomentMem: Memorizing Key Moments for Robot Manipulation",
          "field": "허깅페이스",
          "sources": [
            "허깅페이스"
          ],
          "links": {
            "hf": "https://huggingface.co/papers/2611.26745",
            "arxiv": "https://arxiv.org/abs/2611.26745"
          },
          "published": "2026-11-19",
          "first_seen": "2026-11-25",
          "backlog": true,
          "hf_upvotes": 5,
          "score": 0.5,
          "score_why": "추천 5 → +0.5",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "가려진 정보를 오래 기억하는 게 문제였다",
            "easy1_desc": "로봇 조작은 물건의 원래 위치처럼 눈에 더 이상 보이지 않는 시각 정보를 기억해야 하는데요, 기존 방식들은 전체 관측 기록을 다 쓰거나 텍스트 요약에 의존하다 보니 세밀한 시각 정보를 놓치는 문제가 있었거든요. 그래서 연구진은 중요한 순간의 시각적 세부 사항을 담아두는 시각적 순간 기억(visual moment memory)이라는 개념을 연구해 봤는데요. 쉽게 말하면 로봇이 필요한 핵심 장면만 골라 기억하는 능력을 따져보려 했다는 겁니다.",
            "easy2_title": "핵심 장면만 골라 기억하게 만들었더니 성공률이 크게 올랐다",
            "easy2_desc": "그래서 연구진은 시각 언어 모델(VLM) 기반의 기억 장치가 핵심 프레임을 고르고 실행기가 행동을 예측하는 계층적 구조인 'MomentMem'을 제안했는데요, 이를 검증하기 위해 공간 위치와 시각적 외형 기억이 필요한 'VMBench'라는 장기 조작 태스크 모음을 만들었어요. 실험해 봤더니 MomentMem은 평균 49.9%의 성공률을 기록해서 가장 강력한 비교군보다 31.7퍼센트포인트 높게 나타났다고 주장했는데요. 장점은 새로운 외형에도 별도 학습 없이 잘 전이되고 적은 기억 주석만으로도 높은 성공률을 낸다는 건데, 대신 핵심 기억을 고르는 성능이 전체 실행 결과에 직접 영향을 미친다는 점도 같이 따라온다는 겁니다.",
            "topic": "로봇 조작에서 중요한 시각 순간을 기억하기 위해 핵심 프레임을 선별하는 계층적 구조인 MomentMem을 제안하고 그 성능을 평가한 연구예요.",
            "one_line": "로봇 조작에서 핵심 순간을 기억하는 MomentMem 구조를 제안하고 VMBench로 성능을 검증했어요.",
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
              "one_line 58자"
            ],
            "flags": [],
            "tag": "AI 에이전트·도구",
            "limit_ok": null,
            "show_limit": false
          },
          "authors": "Guangyu Zhao, Yongchang Zhang, Ruizhang Jiang, Zhihong Yu, Yuhao Zhang, Tao Wu, Qimin Zhou, Kunsong Shi, Haoran Wen, Zeyu Zhang, Yin Li, Kun Zhan, Yiwu Zhong",
          "categories": [],
          "comments": 1,
          "pdf": "https://arxiv.org/pdf/2611.26745"
        },
        {
          "canon_id": "2611.26976",
          "title": "MixFold: Sub-4-Bit Mixed-Precision LLM Inference via Output-Channel Grouping on Mobile NPUs",
          "field": "cs.AI",
          "sources": [
            "cs.AI"
          ],
          "links": {
            "arxiv": "https://arxiv.org/abs/2611.26976"
          },
          "published": "2026-11-23",
          "first_seen": "2026-11-24",
          "backlog": true,
          "hf_upvotes": null,
          "score": 0.0,
          "score_why": "가점 없음",
          "state": "풀이 끝",
          "keywords": [],
          "ai": {
            "easy1_title": "메모리는 줄였는데 속도는 그대로인 게 문제였어요",
            "easy1_desc": "모바일 기기에서 큰 거대언어모델(LLM)을 돌리려고 4비트 미만으로 압축해 봤는데요, 메모리는 줄어들어도 모바일 신경망처리장치(NPU)에서는 디코딩 속도가 빨라지지 않는다는 한계가 있었거든요. 지원되지 않는 가중치 형식을 벡터 유닛에서 변환하느라 비트를 줄여 얻은 이득이 다 사라져 버린다는 말이에요. 게다가 각 행렬 연산 유닛 타일마다 데이터 타입을 하나씩만 써야 한다는 제약까지 겹친다는 겁니다.",
            "easy2_title": "출력 채널 그룹화로 변환 과정 없이 속도를 끌어올렸어요",
            "easy2_desc": "그래서 연구진은 가중치를 더 넓은 데이터 타입으로 늘리지 않고도 기본 정수 연산으로 3비트와 완벽히 대칭인 2비트 가중치를 실행하는 믹스폴드(MixFold) 방식을 제안했는데요, 행렬 연산 유닛 타일에 맞춘 출력 채널 그룹에 데이터 타입을 할당해 레이어보다 더 세밀한 할당이 가능해졌다는 거예요. 그 결과 스냅드래곤 8 엘리트 젠 5(Snapdragon 8 Elite Gen 5)의 퀄컴 헥사곤(Qualcomm Hexagon) NPU에서 1.16배에서 1.41배 더 빠르게 디코딩하고 토큰은 1.5배에서 4.3배 더 많이 생성하게 됐다고 합니다.",
            "topic": "모바일 NPU에서 4비트 미만 양자화 LLM의 디코딩 속도와 에너지 효율을 높이는 믹스폴드(MixFold) 기법에 대한 연구예요.",
            "one_line": "출력 채널 그룹화로 모바일 NPU에서 LLM 디코딩 속도와 효율을 높였어요",
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
          },
          "authors": "Vinnam Kim, Seong Hoon Seo, Junhan Kim, Jaeseong You, An Chen",
          "categories": [
            "cs.AI"
          ],
          "comments": null,
          "pdf": "https://arxiv.org/pdf/2611.26976"
        }
      ],
      "backlog": {
        "n_waiting_all": 275,
        "oldest_day": "2026-11-24",
        "n_dropped_today": 0,
        "n_backlog_done_today": 4
      },
      "sources": [
        {
          "name": "arXiv AI(cs.AI)",
          "field": "cs.AI",
          "got": 102,
          "new_cards": 102
        },
        {
          "name": "arXiv 전력·제어(eess.SY)",
          "field": "eess.SY",
          "got": 19,
          "new_cards": 19
        },
        {
          "name": "허깅페이스 오늘의 논문",
          "field": "허깅페이스",
          "got": 50,
          "new_cards": 48
        }
      ],
      "calls": {
        "summary": {
          "val": 213,
          "source": "v2_secretary/결과/논문/2026-11-26_논문.json"
        },
        "flow": {
          "val": 2,
          "source": "v2_secretary/결과/논문/2026-11-26_논문.json"
        },
        "failed": {
          "val": 99,
          "source": "v2_secretary/결과/논문/2026-11-26_논문.json"
        },
        "http429": {
          "val": 0,
          "source": "v2_secretary/결과/논문/2026-11-26_논문.json"
        }
      },
      "cap": {
        "val": 150,
        "source": "v2_secretary/결과/논문/2026-11-26_논문.json"
      },
      "secs": {
        "val": 4964,
        "source": "v2_secretary/결과/논문/2026-11-26_논문.json"
      },
      "no_ai": false,
      "notes": [
        "1차 출처 몫: eess.SY 19/66 · cs.AI 51/51 · 허깅페이스 44/44 · 이월 33편",
        "최대 40분을 넘어 113편에서 멈춤"
      ],
      "source": "v2_secretary/결과/논문/2026-11-26_논문.json",
      "abstracts": {
        "file": "panel_abstracts.js",
        "n": 170,
        "source": "v2_secretary/결과/논문/초록/2026-11-26.json"
      },
      "split": {
        "file": "panel_papers.js",
        "n": 114
      }
    }
  },
  "machine_map": {
    "total_sections": 36,
    "counts_by_kind": {
      "run": 23,
      "separate": 11,
      "none": 2
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
        "line_out": "내보냄: 수집 대상 38곳 (v2_secretary/결과/2026-11-26_하루_전체.md)",
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
        "line_out": "내보냄: 오늘 들어온 글 1473건 (v2_secretary/결과/문앞/2026-11-26_문앞교통정리_길별.json)",
        "metrics": {
          "in": 38,
          "out": 1473,
          "calls": 0,
          "secs": 52.1,
          "num_source": "v2_secretary/결과/문앞/2026-11-26_문앞교통정리_길별.json"
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
        "line_in": "받음: 들어온 글 1473건 (새 글 1313 + 이미 본 글 160)",
        "line_rule": "규칙: gate_rules/길_규칙.txt · 관심_키워드.txt · 반키워드.txt (AI 0콜)",
        "line_out": "내보냄: 거푸집1 119 · 거푸집2 53 · 뉴스 385 · 제외 578 · 논문T 75 · 모름 103",
        "metrics": {
          "in": 1473,
          "out": 1313,
          "calls": 0,
          "secs": 49.8,
          "num_source": "v2_secretary/결과/문앞/2026-11-26_문앞교통정리_길별.json"
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
        "line_in": "받음: 문 앞 제외 규칙에 걸린 글 578건",
        "line_rule": "규칙: exclude.py + gate_rules/되살리기.txt (관심 키워드 든 글 표시)",
        "line_out": "내보냄: 결과/제외보관함/제외보관함.csv (7363행 누적)",
        "metrics": {
          "in": 578,
          "out": 578,
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
        "line_out": "내보냄: 한은 표 59행 · FRED 표 28행 · DART 표 110행(오늘)",
        "metrics": {
          "in": 119,
          "out": 138,
          "calls": 0,
          "secs": 0.0,
          "num_source": "v2_secretary/결과/거푸집1/*.csv"
        }
      },
      {
        "addr": "인풋-6",
        "group": "인풋",
        "name": "발표 일정표 (거시 일정 D-Day)",
        "files": "`macro_calendar.py` → `결과/일정/<날짜>_거시일정.json`·`.md` · 손 일정 `gate_rules/거시_일정.txt`",
        "status": "돎 (11-23 결함 확인 세션, 하루 바퀴 2-2 단계, 0콜. 연준 FOMC·한은 금통위 공식 일정표 — 한은 페이지는 연도를 무시해 요일로 해 확인. 미국 CPI·고용은 노동통계국이 막아(403) 손 일정으로. 11-24 깃허브 올림 a7a5dce. 화면에는 아직 안 나옴. 원장 137)",
        "status_kind": "run",
        "editable": "`gate_rules/거시_일정.txt`",
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
        "addr": "인풋-8",
        "group": "인풋",
        "name": "핵심 기사 본문 (고른 기사만)",
        "files": "`article_body.py` → 본문 `data/body/<글번호>.txt` · `결과/본문/<날짜>_핵심기사.json`·`.md`",
        "status": "돎 (11-23 결함 확인 세션, 하루 바퀴 5-B2 단계, 0콜. 그날 고른 뉴스·거시 사건마다 기사 3개까지 — 구글뉴스 주소 풀기 + 본문·기사 날짜, 기사 날짜가 7일 넘게 앞이면 '옛 내용 의심' 표시(감점은 12-07에 다시 판단). 11-24 깃허브 올림 a7a5dce. 원장 138·139)",
        "status_kind": "run",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: `article_body.py` → 본문 `data/body/<글번호>.txt` · `결과/본문/<날짜>_핵심기사.json`·`.md`",
        "line_rule": "상태: 돎 (11-23 결함 확인 세션, 하루 바퀴 5-B2 단계, 0콜. 그날 고른 뉴스·거시 사건마다 기사 3개까지 — 구글뉴스 주소 풀기 + 본문·기사 날짜, 기사 날짜가 7일 넘게 앞이면 '옛 내용 의심' 표시(감점은 12-07에 다시 판단). 11-24 깃허브 올림 a7a5dce. 원장 138·139)",
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
        "line_in": "받음: 문 앞 거푸집1 길 119건",
        "line_rule": "규칙: plate1.py 정규식 숫자 추출 + 직전 값 계산·공식 API 대조 (AI 0콜)",
        "line_out": "내보냄: 오늘 DART 표 110건 · 한은 0건 · FRED 28종",
        "metrics": {
          "in": 119,
          "out": 110,
          "calls": 0,
          "secs": 164.7,
          "num_source": "v2_secretary/결과/거푸집1/2026-11-26_거푸집1.md"
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
        "line_in": "받음: 문 앞 거푸집2 길 53건 (보도자료·리포트·연방관보)",
        "line_rule": "규칙: body.py 본문 추출(0콜) → plate2.py 글당 AI 1콜 요약 + 파이썬 원문·숫자 대조 검사",
        "line_out": "내보냄: 오늘 요약 44건 (결과/거푸집2/2026-11-26_거푸집2.md)",
        "metrics": {
          "in": 53,
          "out": 44,
          "calls": 114,
          "secs": 1069.6,
          "num_source": "v2_secretary/결과/거푸집2/2026-11-26_거푸집2.md"
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
        "line_in": "받음: 문 앞 뉴스 길 385건",
        "line_rule": "규칙: news.py 하루 AI 2콜(A·B 독립 묶기 대조) + 없는 숫자·중복 검사",
        "line_out": "내보냄: 사건 14개 묶음 (결과/뉴스/2026-11-26_뉴스사건.json)",
        "metrics": {
          "in": 385,
          "out": 14,
          "calls": 2,
          "secs": 22.6,
          "num_source": "v2_secretary/결과/뉴스/2026-11-26_뉴스사건.json"
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
        "line_in": "받음: [11월 26일(오늘) 논문] 새벽 바퀴 5-1(0콜)이 모으기 원본(arXiv·허깅페이스)으로 만든 새 논문 카드 166편",
        "line_rule": "규칙: papers.py — 새벽 카드(0콜) → 새벽 바퀴가 끝나면 바로 v2-papers(백업 12:07·14:07)가 점수 순으로 편당 AI 1콜 풀이 + 근거 문장 원문 대조 (gate_rules/논문_설정·주제·키워드.txt)",
        "line_out": "내보냄: 풀이 114편(새 카드 110 + 밀린 카드 4) · 새 카드 중 대기 54편 · AI 215콜(그날 합계) · 논문 파일 마지막으로 쓴 시각 2026-11-26 05:24 (v2_secretary/결과/논문/2026-11-26_논문.json)",
        "metrics": {
          "in": 166,
          "out": 114,
          "calls": 215,
          "secs": 4964.0,
          "num_source": "v2_secretary/결과/논문/2026-11-26_논문.json"
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
        "line_out": "내보냄: 누적 연설 브리핑 31편 (결과/연준연설/)",
        "metrics": {
          "in": 31,
          "out": 31,
          "calls": 3,
          "secs": 10.3,
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
        "addr": "처리-9",
        "group": "처리",
        "name": "흐름 엮기 + 채점 카드 (사후 채점)",
        "files": "`flows.py`(사실 카드 → 흐름 5개 → 채점 카드) · `fact_check.py`(귀속·인과·숫자 검사) · `claim_grade.py`(14·30일 뒤 실제 시세로 채점, 기저율) → `data/flows/<날짜>.json` · `data/claims.jsonl` · `data/claims_graded.jsonl` · `결과/흐름/<날짜>_흐름.md`",
        "status": "돎 (11-23 결함 확인 세션, 하루 바퀴 5-D 단계, 하루 3~11콜. 실패하면 `data/flows/대기.jsonl` → 낮 갱신이 다시. 11-24 12:05 첫 실전 성공(흐름 5개·채점 카드 5장). 아이폰 챕터 6. 본질 인계 `문서/버전2_계획/본질_인계_흐름엮기_2026-11-24.md`. 원장 123~145)",
        "status_kind": "run",
        "editable": "—",
        "source": "구간_주소표.md",
        "line_in": "받음: `flows.py`(사실 카드 → 흐름 5개 → 채점 카드) · `fact_check.py`(귀속·인과·숫자 검사) · `claim_grade.py`(14·30일 뒤 실제 시세로 채점, 기저율) → `data/flows/<날짜>.json` · `data/claims.jsonl` · `data/claims_graded.jsonl` · `결과/흐름/<날짜>_흐름.md`",
        "line_rule": "상태: 돎 (11-23 결함 확인 세션, 하루 바퀴 5-D 단계, 하루 3~11콜. 실패하면 `data/flows/대기.jsonl` → 낮 갱신이 다시. 11-24 12:05 첫 실전 성공(흐름 5개·채점 카드 5장). 아이폰 챕터 6. 본질 인계 `문서/버전2_계획/본질_인계_흐름엮기_2026-11-24.md`. 원장 123~145)",
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
          "in": 14,
          "out": 14,
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
        "line_out": "내보냄: 결과/2026-11-26_하루_전체.md 외 5종 결과지",
        "metrics": {
          "in": 6,
          "out": 6,
          "calls": 0,
          "secs": 0.1,
          "num_source": "v2_secretary/결과/2026-11-26_하루_전체.md"
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
        "line_in": "받음: 2026-11-26 결과 파일들 + runs.jsonl + calls.jsonl + 구간_주소표.md",
        "line_rule": "규칙: export_panel.py 세기와 옮겨 적기 (새 공식 없음, AI 0콜)",
        "line_out": "내보냄: v2_secretary/결과/화면/panel.json",
        "metrics": {
          "in": 1473,
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
          "num_source": "v2_secretary/결과/문앞/2026-11-26_문앞교통정리_길별.json"
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
        "line_out": "내보냄: 실행 기록 35건 (최근: 2026-11-26 ok)",
        "metrics": {
          "in": 1,
          "out": 35,
          "calls": 141,
          "secs": 1627.0,
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
        "from": "인풋-6",
        "to": "출력-2",
        "active": true
      },
      {
        "from": "출력-1",
        "to": "인풋-8",
        "active": true
      },
      {
        "from": "인풋-8",
        "to": "처리-9",
        "active": true
      },
      {
        "from": "출력-1",
        "to": "처리-9",
        "active": true
      },
      {
        "from": "처리-2",
        "to": "처리-9",
        "active": true
      },
      {
        "from": "처리-9",
        "to": "출력-2",
        "active": true
      },
      {
        "from": "처리-9",
        "to": "출력-4",
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
