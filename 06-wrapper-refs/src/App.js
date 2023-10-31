import React, { useState, Fragment } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    /**
     * 섹션10 - 136. 리액트 조각
     * 
     * 1. <></>
     * 
     * 2. <React.Fragment></React.Fragment>
     * 
     * 3. import React, {Fragment} from 'react'; 
     *    <Fragment></Fragment>
     * 
     */
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
