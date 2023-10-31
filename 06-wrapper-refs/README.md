# 섹션10: React.Fragment & Portals & Refs

- 제어되는 컴포넌트 접근 방식 = State
- 제어되지 않는 컴포넌트 접근 방식 = useRef

## 1. React.Fragment

**[예시 코드]**

1. src/Helpers/Wrapper.js
2. src/Users/AppUser.js => Wrapper 컴포넌트
3. src/App.js => Fragment 컴포넌트

---

## 2. Portals

**[예시코드]**

1. public/index.html => div#backdrop-root, div#overlay-root 추가
2. src/UI/ErrorModal.js => ReactDOM.createPortal

---

## 3. Refs

- 다른 DOM 요소에 접근해서 조작할 수 있다.
- input 요소에 자주 사용하여 해당 데이터를 받아올 수 있다.
- DOM을 조작하기 위해 ref를 사용하는건 매우 드물다. (새로운 요소추가, css 클래스 변경 같은게 아닌 경우는 사용..?)
- 값을 빠르게 읽고 싶을 때, 아무 것도 바꿀 예정이 없을 때 사용!

**[예시코드]**

1. src/Users/AddUser.js
