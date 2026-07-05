# info-board — 아이폰용 정보 브리핑 (공개 페이지)

private 저장소(info-dashboard)의 **결과 숫자만** 공개하는 정적 페이지.
GitHub Actions가 매시간 자동 갱신 → GitHub Pages로 서빙 → 아이폰 사파리에서
**공유 → 홈 화면에 추가** 하면 앱처럼 사용.

- 페이지 주소: https://baehongcheol21-lab.github.io/info-board/
- 공개되는 것: 시장 시세 숫자, 전기신문 헤드라인 (전부 원래 공개된 정보)
- 공개 안 되는 것: API 키(Actions Secrets), 수집엔진 코드, AI 해석, 개인 메모
- 수정: 지표 목록은 publish.py의 INDICATORS 리스트
