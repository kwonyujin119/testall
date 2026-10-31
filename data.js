// 작업 목록 — 여기만 고치면 카드가 바뀝니다.
// 새 리포는 GitHub API에서 자동으로 덧붙여지고, 여기 적힌 항목은 제목·설명이 우선 적용됩니다.
window.WORKS_OWNER = "kwonyujin119";
window.WORKS = [
  {
    repo: "test2",
    title: "SAIL:41 · 지휘역량강화센터",
    desc: "인천소방학교 지휘역량강화센터 일정표·주요업무·개인업무 보드. 41망 톡방, 아침 브리핑, 현장지휘관 체크리스트 포함 (GitHub Pages + Supabase).",
    url: "https://kwonyujin119.github.io/test2/",
    tags: ["PWA", "Supabase", "업무"],
    links: [{ label: "체크리스트", url: "https://kwonyujin119.github.io/test2/checklist/" }]
  },
  {
    repo: "test",
    title: "SACHIL 지휘역량강화 플랫폼",
    desc: "지휘역량강화 교육 플랫폼. 안드로이드 패키징과 PWA 설치를 지원합니다.",
    url: "https://kwonyujin119.github.io/test/",
    tags: ["PWA", "교육"]
  },
  {
    repo: "test3",
    title: "유진 · 아름 사진 저장소",
    desc: "둘만 쓰는 사진 앨범. 접속코드로 들어가며 사진은 PC 서버에만 저장됩니다 (화면은 Pages, 저장은 로컬 서버).",
    url: "https://kwonyujin119.github.io/test3/",
    tags: ["PWA", "개인"]
  },
  {
    repo: "ictcYUJIN",
    title: "현장지휘관 훈련 플랫폼",
    desc: "인천소방학교 현장지휘관 훈련용 단일 페이지 플랫폼.",
    url: "https://kwonyujin119.github.io/ictcYUJIN/",
    tags: ["교육"]
  },
  {
    repo: "ev",
    title: "Today Best (ev)",
    desc: "인천소방학교 ICTC — Today Best 페이지 (ev 버전).",
    url: "https://kwonyujin119.github.io/ev/",
    tags: ["교육"]
  },
  {
    repo: "tb",
    title: "Today Best (tb)",
    desc: "인천소방학교 ICTC — Today Best 페이지 (tb 버전).",
    url: "https://kwonyujin119.github.io/tb/",
    tags: ["교육"]
  },
  {
    repo: "snowball",
    title: "Today 투자가이드",
    desc: "매일 생성되는 투자 가이드 페이지. Python 스크립트와 GitHub Actions로 자동 갱신됩니다.",
    url: "https://kwonyujin119.github.io/snowball/",
    tags: ["자동화", "Python"]
  },
  {
    repo: "PAI",
    title: "피지컬AI 소방현장활동 도입 연구",
    desc: "인구절벽시대 피지컬AI 소방현장활동 도입 연구 — 제31회 중앙소방학교 교육혁신 연구개발 경연대회 제출 논문 (통합본 v44).",
    url: "https://kwonyujin119.github.io/PAI/00_%EB%85%BC%EB%AC%B8_%EC%A0%84%EC%B2%B4_%ED%86%B5%ED%95%A9%EB%B3%B8_v44.html",
    tags: ["논문", "연구"]
  },
  {
    repo: "Ictcrt",
    title: "ICTC 전술상황판",
    desc: "현장 소방활동 지휘용 전술상황판 웹앱. 단일 파일(dist/전술상황판.html)로도 실행되며 입력은 브라우저에 자동 저장됩니다.",
    url: null, // GitHub Pages 미설정 — 리포로 연결
    branch: "claude/radio-training-voice-page-NgCu2",
    tags: ["지휘", "오프라인"]
  }
];
// 목록에서 숨길 리포 (이 페이지 자신, 빈 리포)
window.WORKS_HIDE = ["testall", "test0"];
