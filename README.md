# weather-mood 날씨 기반 감정 일기장

# React + TypeScript + Vite 템플릿

이 저장소는 React, TypeScript, Vite 기반의 공통 개발 템플릿입니다.  
Prettier, ESLint, VSCode 설정을 포함하여 일관된 코드 스타일과 개발 경험을 제공합니다.

## 주요 스택

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## 포함된 기능

- React + TypeScript 환경 구성
- Prettier를 통한 코드 포맷팅 설정
- ESLint를 통한 코드 스타일 검사 및 린트 규칙 구성
- VSCode 저장 시 자동 포맷 및 린트 적용 설정
- 기본적인 디렉토리 구조 및 실행 스크립트 포함

## 설치 및 실행

1. 템플릿 클론
   ```bash
   git clone https://github.com/your-username/your-template-repo.git my-project
   cd my-project
   ```

````

2. 기존 Git 이력 제거 (선택)

   ```bash
   rm -rf .git
   git init
   git remote add origin https://github.com/your-username/my-project.git
   ```

3. 의존성 설치

   ```bash
   npm install
   ```

4. 개발 서버 실행

   ```bash
   npm run dev
   ```

## 스크립트

| 명령어               | 설명                 |
| ----------------- | ------------------ |
| `npm run dev`     | 개발 서버 실행 (Vite)    |
| `npm run build`   | 프로덕션 빌드            |
| `npm run preview` | 빌드 결과 미리보기         |
| `npm run lint`    | ESLint로 코드 검사      |
| `npm run format`  | Prettier로 코드 자동 정리 |

## 디렉토리 구조

```
my-project/
├── .vscode/
│   └── settings.json
├── src/
│   ├── App.tsx
│   └── main.tsx
├── public/
│   └── index.html
├── .eslintrc.json
├── .prettierrc
├── .prettierignore
├── tsconfig.json
├── package.json
└── README.md
```

## 필요 확장 프로그램(VSCode)
CLI 명령어 (ex. npm run lint, npm run format)으로 정리 대신,
VSCode 내에서 실시간 피드백과, 자동 포맷을 누리려면 확장 설치가 필수.

* ESLint
* Prettier - Code formatter

## 테마 시스템 (다크 모드)

이 프로젝트는 확장성 있는 다크 모드 지원을 제공합니다.

### 색상 시스템

#### 기본 색상
- `bg-bgDefault`: 메인 배경색
- `bg-bgSecondary`: 보조 배경색
- `bg-bgCard`: 카드 배경색
- `text-textDefault`: 기본 텍스트 색상
- `text-textGray`: 회색 텍스트
- `text-textMuted`: 연한 텍스트

#### 액센트 색상
- `bg-mainPink` / `text-mainPink`: 메인 핑크
- `bg-accent` / `text-accent`: 액센트 색상
- `bg-success` / `text-success`: 성공 색상
- `bg-warning` / `text-warning`: 경고 색상
- `bg-error` / `text-error`: 오류 색상

#### 감정 색상
- `bg-mood-happy`: 행복한 기분
- `bg-mood-sad`: 슬픈 기분
- `bg-mood-angry`: 화난 기분
- `bg-mood-calm`: 차분한 기분
- `bg-mood-excited`: 흥미진진한 기분
- `bg-mood-bored`: 지루한 기분

#### 경계선 및 그림자
- `border-border`: 기본 경계선
- `border-borderHover`: 호버 상태 경계선

### 다크 모드 사용법

#### 1. 테마 매니저 사용

```typescript
import { useTheme } from '@/lib/theme';

function MyComponent() {
  const { theme, setTheme, toggleTheme, isDark } = useTheme();

  return (
    <div>
      <p>현재 테마: {theme}</p>
      <button onClick={toggleTheme}>테마 토글</button>
      <button onClick={() => setTheme('dark')}>다크 모드</button>
      <button onClick={() => setTheme('light')}>라이트 모드</button>
      <button onClick={() => setTheme('system')}>시스템 설정</button>
    </div>
  );
}
```

#### 2. 테마 토글 컴포넌트 사용

```typescript
import ThemeToggle from '@/components/button/ThemeToggle';

function Header() {
  return (
    <header>
      <h1>My App</h1>
      <ThemeToggle />
    </header>
  );
}
```

### 새로운 색상 추가하기

1. `src/index.css`의 `@theme` 블록에 새 색상 추가:
```css
@theme {
  --color-new-color: #hexvalue;
}
```

2. `.dark` 클래스에 다크 모드 버전 추가:
```css
.dark {
  --color-new-color: #dark-hexvalue;
}
```

3. Tailwind 클래스로 사용:
```jsx
<div className="bg-newColor text-newColor">내용</div>
```

### 특징

- **자동 시스템 테마 감지**: 사용자의 시스템 설정을 자동으로 따름
- **로컬 스토리지 저장**: 테마 설정이 브라우저에 저장됨
- **부드러운 전환**: CSS 트랜지션으로 자연스러운 테마 변경
- **확장성**: 새로운 색상을 쉽게 추가할 수 있는 구조

## 기타

이 템플릿은 프로젝트의 초기 세팅 시간을 줄이고, 통일된 개발 환경을 제공하기 위해 제작되었습니다. 필요에 따라 설정을 확장하거나 수정하여 사용하세요.

````
