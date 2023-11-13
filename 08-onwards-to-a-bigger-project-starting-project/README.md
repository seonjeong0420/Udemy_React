# 섹션25: Next.js 소개
- 399. ~ 407. 프로젝트 제작하기
- css module 사용하기

## useRouter()
components/meetups/MeetupItem.js

**How To Use**
```jsx
import { useRouter } from "next/router";
const router = useRouter();
router.push("/" + props.id);
```
* push() : 프로그래밍 방식으로 검색(탐색)하는 메소드 → 새로운 페이지를 페이지 더미에 연결
* Link 컴포넌트 사용하는 것과 동일
* router.query : 동적 페이지를 다룰 때 URL의 일부 데이터를 받아오는 속성

---

## useEffect()
Backend에 접근할 때 동작하는 방식
페이지가 렌더링 될 때 HTTP 요청을 보내려면 이를 처리하기 위해 일반적으로 useEffect Hook을 사용한다.
- 동작 방식
  - 컴포넌트 함수가 실행되고 난 **이후에** 실행되는 방식으로 작동
  - 즉, 초기 렌더링 한번 한 후에 데이터를 읽어오고 재렌더링을 한다. -> 검색엔진에 문제가 발생함

**How To Use**
```jsx
import { useEffect } from 'react';

useEffect( () => {}, [])
```
- 첫번째 인자 : 함수
- 두번째 인자 : 의존성 배열
  - 의존성 배열을 빈 값으로 두면, 컴포넌트가 처음 렌더링 될 때마다 useEffect 함수가 실행되고, 그 이후엔 실행되지 않는다.

---

## getStaticProps()
데이터가 있는 페이지를 사전에 렌더링하는 기능 (Pre-Rendering)
실제로 페이지 내에서 사용할 props를 준비 (props: 페이지에서 필요한 데이터 포함)
- **pages 폴더 안에 있는 컴포넌트 파일들에서만 사용 가능**
- export 할 함수명은 무조건 getStaticProps 으로 설정 할 것.(NextJS에서 정한 규칙)
- 빌드 프로세스 중에 실행
- useEffect()의 단점을 보완!

**How To Use**
```jsx
// 클라이언트 측에서는 절대 실행되지 않는다.
export async function getStaticProps() {
  // fetch data from an API

  // return은 항상 객체값 {} 으로 설정
  // 키값명은 props 고정 & 나머지는 자유
  // props :  Home(props)의 props와 동일 (pages/index.js)

  // revalidate : 점진적 정적 생성이라는 기능 사용. 숫자는 요청이 들어올 때 이 페이지를 다시 생성할 때까지 nextjs가 대기하는 시간을 초단위로 설정
  // revalidate 설정 되어 있다면 페이지는 빌드 프로세스 중에 바로 생성되지 않는다.
  // 숫자값은 데이터가 변경되는 시간에 맞춰서 설정하면 된다. 예를들어 데이터가 1시간 단위로 변한다면 3600으로 설정
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10
  };
}
```
- 비동기 방식으로 처리 가능 (async 설정, promise 반환)
- promise가 해결될 때까지 wait. 
다시말해, 데이터를 읽어들일때까지 기다린다. 그리고 컴포넌트 함수에서 사용할 props를 반환한다.

---

## getServerSideProps()
- export 할 함수명은 무조건 getServerSideProps 으로 설정 할 것.(NextJS에서 정한 규칙)
- 빌드 프로세스 중에 실행되지 않는다. 배열 다음에 서버에서 실행
- 요청이 들어올 때마다 실행되므로 revalidate 는 사용하지 못한다.

**How To Use**
```jsx
export async function getSErverSideProps(context) {
  // 요청 객체에 접근 가능 (인증작업, 세션/쿠키 확인)
  const req = context.req;
  const res = context.rest;

  // fetch data from an API

  return {
    props: DUMMY_MEETUPS
  }
}
```

---

### 폴더구조
```
├── components/       # 보일러 플레이트 코드
├── pages/            # 작업폴더
│     ├──new-meetup/  # meetup Form UI
│     └── _app.js     # 최상위 컴포넌트 개념 (공통 레이아웃 감싸기)
├── public/           # 페이지에서 사용할 공개 리소스 (이미지)
├── styles/           # 스타일 관련 폴더
│
├── .gitignore        # 버전 관리에서 제외할 파일 목록 지정
└── README.md         # 프로젝트 설명 문서
``` 