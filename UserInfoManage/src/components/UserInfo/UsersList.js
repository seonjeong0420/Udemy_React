import React from 'react';
import styles from './usersList.module.scss';

const UsersList = (props) => {
  if(props.userList.length === 0) {
    return;
  }

  return (
    <ul className={styles.list}>
      {props.userList.map((item, index) => (
        <li key={index} className={styles.list_item}>
          <span className={styles.item_name}>{item.name}</span>
          <span className={styles.item_age}>( {item.age} years old )</span>
        </li>
      ))}
    </ul>
  )
}

export default UsersList;