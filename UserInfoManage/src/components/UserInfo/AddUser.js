import React, { useState } from 'react';
import styles from './addUser.module.scss';
import Button from '../UI/Button/Button';

const AddUser = (props) => {
  const userInitialInfo = {
    name: '',
    age: ''
  }
  const [userInfo, setUserInfo] = useState(userInitialInfo);

  const addUserSubmit = (event) => {
    event.preventDefault();

    // 부모에 이벤트 전달
    props.addUser(userInfo);
  }

  const inputChangeHandler = (input, value) => {
    setUserInfo(prev => {
      return {
        ...prev,
        [input]: value
      }
    });
  }

  return (
    <form onSubmit={addUserSubmit} className={styles.fieldset}>
      <div className={styles['form_group']}>
        <label>Username</label>
        <input type="text" id="user-name" value={userInfo['name']} onChange={(event) => inputChangeHandler('name', event.target.value)} />
      </div>
      <div className={styles['form_group']}>
        <label>Age(Years)</label>
        <input type="number" id="user-age" value={userInfo['age']} onChange={(event) => inputChangeHandler('age', event.target.value)} />
      </div>

      <Button btnType="submit">Add User</Button>
    </form>
  )
}

export default AddUser