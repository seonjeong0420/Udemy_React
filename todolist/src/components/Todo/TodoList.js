import React from 'react'
import Checkbox from '../UI/Checkbox'
import styles from './TodoList.module.scss';

const TodoList = (props) => {
  const deleteTodoItem = (param) => {
    props.deleteTodoItem(param);
  }

  return (
    <ul className={styles.list}>
      {props.items.map(item => (
        <li key={item.id} className={styles.todoitem}>
          <Checkbox title={item.title} />
          <button className={styles['todoitem__delete']} onClick={() => deleteTodoItem(item.id)}>delete</button>          
        </li>
      ))}
    </ul>
  )
}

export default TodoList