import React, { useState, useRef } from 'react';
import styles from './TodoForm.module.scss';
import Button from '../UI/Button';

function TodoForm(props) {
  const [isValid, setIsValid] = useState(true);
  const todoInput = useRef(); // input 요소에 focus 줄 경우 useRef 사용

  const [todoItem, setTodoItem] = useState('');
  const todoItemChange = (event) => {
    setTodoItem(event.target.value);
    if(todoItem.trim().length > 0) {
      setIsValid(true);
      return;
    }
  }
  const addTodoItem = (event) => {
    event.preventDefault(); // 페이지 새로고침 방지

    if(todoItem.trim().length === 0) {
      setIsValid(false);
      todoInput.current.focus();
      return;
    }
    
    const data = {
      title: todoItem,
      id: Math.random().toString()
    }
    props.addTodoItem(data);
    setTodoItem('');
  }

  return (
    <form onSubmit={addTodoItem} className={`${!isValid ? styles.errorForm : ''}`}>
      <fieldset className={styles.formfield}>
        <legend>Todo Write Form</legend>
        <input type="text" className={styles.formfield__input} onChange={todoItemChange} ref={todoInput} value={todoItem} placeholder="할 일을 입력해 주세요." />

        <Button type="submit" class="btn_small" text="Add" />
      </fieldset>
    </form>
  )
}

export default TodoForm