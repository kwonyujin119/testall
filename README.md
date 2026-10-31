# 작업 모음 (testall)

GitHub에서 작업한 페이지들을 **미리보기 + 링크** 카드로 한 화면에 모은 PWA입니다.
폰 홈 화면에 앱처럼 설치해 두고 바로 찾아 들어갈 수 있습니다.

- 주소: https://kwonyujin119.github.io/testall/
- 카드 목록: `data.js` (제목·설명·주소·태그). 새 리포는 GitHub API에서 자동으로 추가됩니다.
- 미리보기: GitHub Pages가 있는 리포는 실제 화면을 축소해 보여 주고, 없는 리포는 GitHub 소셜 카드 이미지를 보여 줍니다.
- 설치: 안드로이드·PC 크롬은 상단 **앱 설치** 버튼, 아이폰은 Safari 공유 → **홈 화면에 추가**.

## 파일

| 파일 | 역할 |
|---|---|
| `index.html` | 화면·동작 전부 (CSS·JS 포함) |
| `data.js` | 카드 데이터 |
| `manifest.webmanifest`, `sw.js`, `icons/` | PWA 설치·오프라인 |
| `.github/workflows/pages.yml` | main 푸시 시 GitHub Pages 배포 |
