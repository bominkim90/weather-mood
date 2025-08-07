# weather-mood 📝 날씨 기반 감정 일기장

날씨와 감정을 연결하여 기록하고 시각화하는 감정 일기 애플리케이션입니다.

## 핵심 기술 스택

### 프론트엔드 프레임워크

- **React** - 컴포넌트 기반 UI 라이브러리
- **TypeScript** - 타입 안정성과 개발 생산성 향상
- **Vite** - 빠른 개발 서버와 번들링

### 상태 관리 & 데이터

- **TanStack Query** - 서버 상태 관리와 캐싱
- **Zustand** - 클라이언트 상태 관리 (날짜 범위, 사용자 위치)
- **React Router** - SPA 라우팅

### UI & 스타일링

- **Tailwind CSS** - 유틸리티 기반 CSS 프레임워크
- **Recharts** - 감정 데이터 시각화 차트
- **React Day Picker** - 날짜 선택 캘린더

### HTTP 통신

- **Axios** - API 통신 및 인터셉터 기반 인증 관리

## 프로젝트 특징

### 외부 API 연동

- **OpenWeather API** - 실시간 날씨 정보 및 위치 검색

### 주요 기능

- **감정 기록** - 6단계 감정 상태 기록 (Sad → Excited)
- **날씨 연동** - 현재 날씨와 함께 감정 상태 저장
- **시각화** - 기간별 감정 변화 차트 및 통계
- **캘린더 뷰** - 월별 감정 기록 조회
- **사용자 인증** - JWT 기반 로그인/회원가입

## 설치 및 실행

1. 저장소 클론

   ```bash
   git clone https://github.com/bominkim90/weather-mood.git
   cd weather-mood
   ```

2. 의존성 설치

   ```bash
   npm install
   ```

3. 환경변수 설정

   ```bash
   # .env.local 파일 생성
   VITE_API_BASE_URL=your_backend_api_url
   ```

4. 개발 서버 실행
   ```bash
   npm run dev
   ```

## 스크립트

| 명령어          | 설명             |
| --------------- | ---------------- |
| `npm run dev`   | 개발 서버 실행   |
| `npm run build` | 프로덕션 빌드    |
| `npm run lint`  | ESLint 코드 검사 |

## 프로젝트 구조

```
weather-mood/
├── src/
│   ├── api/          # API 호출 함수
│   ├── components/   # 재사용 컴포넌트
│   ├── hooks/        # 커스텀 훅 (React Query)
│   ├── pages/        # 페이지 컴포넌트
│   ├── store/        # Zustand 상태 관리
│   └── styles/       # CSS 스타일
├── public/
│   └── icons/        # SVG 아이콘 파일
└── package.json
```
