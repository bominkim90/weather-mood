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

## 기타

이 템플릿은 프로젝트의 초기 세팅 시간을 줄이고, 통일된 개발 환경을 제공하기 위해 제작되었습니다. 필요에 따라 설정을 확장하거나 수정하여 사용하세요.

