import React, { useState } from 'react';
import UsersList from './components/UserInfo/UsersList';
import AddUser from './components/UserInfo/AddUser';
import ErrorModal from './components/ErrorModal/ErrorModal';

/**
 * 사용자의 정보 관리하는 플랫폼
 * 1. 사용자 리스트
 * 2. 사용자 정보 입력 & 저장
 * 3. 유효하지 않은 데이트 입력의 경우 alert 출력
 * 4. alert창 내의 close button 또는 배경 클릭 시 close
 */

const App = () => {
  const userList = [];
  const [userItem, setUserItem] = useState(userList);
  const [isVisible, setIsVisible] = useState(false);

  const addUserHandler = (props) => {
    
    if(props.name === '' || props.age === '' || props.age < 0) {
      setIsVisible(true);
      return;
    }

    setUserItem(prevItem => [...prevItem, props]);
  }

  const modalCloseHandler = (props) => {
    setIsVisible(props);
  }

  return (
    <div className="wrap_userInfo">
      <AddUser addUser={addUserHandler} />

      <UsersList userList={userItem} />
      
      {isVisible && <ErrorModal closeModalClickHandler={modalCloseHandler} />}

    </div>
  );
}

export default App;
