import React, { useState } from 'react';
import './App.scss';
import TodoDate from './components/Todo/TodoDate';
import TodoList from './components/Todo/TodoList';
import TodoForm from './components/Todo/TodoForm';

function App() {
  const todoList = [
    {
      id: '1',
      title: '아침 산책하기',
    },
    {
      id: '2',
      title: '리액트 공부하기',
    },
  ];
  const [todoItem, setTodoItem] = useState(todoList);

  const [isVisible, setIsVisible] = useState(false);
  const formToggleHandler = () => {
    setIsVisible(prevVisible => !prevVisible);
  }

  const deleteTodoItemHandler = (deleteId) => {
    setTodoItem(prevTodoItem => {
      const updateTodoItem = prevTodoItem.filter(item => item.id !== deleteId);
      return updateTodoItem;
    })
  }

  const addTodoItemHandler = (addItem) => {
    console.log('add Item Handler');
    setTodoItem(prevItem => [...prevItem, addItem]);
  }

  return (
    <main className="todolist">
      <div className="inner">
        <TodoDate />

        <TodoList items={todoItem} deleteTodoItem={deleteTodoItemHandler} />

        {isVisible ? <TodoForm  addTodoItem={addTodoItemHandler} /> : ''}

        <button className={`todolist__btn ${isVisible ? '-hide' : ''}`} onClick={formToggleHandler}></button>

      </div>
    </main>
  );
}

export default App;
