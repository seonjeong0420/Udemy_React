# 섹션25: Next.js 소개
생산용 React 프레임워크

## 🛠️ Function
- **서버 사이드 렌더링**
  - 사전에 페이지를 렌더링 한 상태에서 서버에 요청이 왔을 때, 해당 데이터를 서버에서 가져오기만 하면 되는 완성된 페이지가 사용자와 검색엔진크롤러에 전달
  - 검색엔진 최적화 향상
  _React : 클라이언트 사이드 렌더링
- 파일 기반 라우팅 기능
  - `pages` 폴더에 구성
  - less code, less work, highly understandable
- Fullstack Framework
  - Next & React 애플리케이션에 쉽게 데이터 관련 코드 추가 가능

## 📱 Setup
```
npx create-next-app
# or
yarn create next-app

npm install
npm run dev
```

### 🚧 Structure
- index.js의 파일을 불러와서 rendering
- 동적으로 페이지 만들기
  - [].js : [] 안에 식별자를 추가하면, next.js는 동적으로 페이지를 불러옴. (식별자 네임은 원하는대로)
  - 

### 폴더구조
```
├── pages/          # 작업폴더_‼️ 중요한 폴더 (페이지, 라우팅 등 설정)
│  
├── public/         # 페이지에서 사용할 공개 리소스 (이미지)
│
├── styles/         # 스타일 관련 폴더
│
├── .gitignore      # 버전 관리에서 제외할 파일 목록 지정
└── README.md       # 프로젝트 설명 문서
``` 