import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

// 앱이 시작될 때마다 데이터가 유지되었는지 확인하는 방법 -> useEffect()
// 함수의 실행을 제어할 수 있는 장점이 있다.
// 첫번째 인자 : 함수 & 두번째 인자 : 배열
// 모든 컴포넌트가 재평가 된 이후에 실행된다. (중요)
// 의존성 배열이 변경된 경우에만 모든 컴포넌트가 재렌더링 된 후에 동작한다.
useEffect(() => {
  const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn")
  if(storedUserLoggedInInformation === 'LOGIN') {
    setIsLoggedIn(true);
  }
}, [])


  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", 'LOGIN');
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
