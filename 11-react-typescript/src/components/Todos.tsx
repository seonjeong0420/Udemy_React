import React, { useContext } from "react";
// import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

// const Todos = (props: { items: string[], children }) => {

// FC : 함수형 컴포넌트(Functional Component)
// const Todos: React.FC<{ items: string[] }> = (props) => {
const Todos: React.FC<{
  // items: Todo[];
  // onRemoveTodoItems: (id: string) => void;
}> = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
        // <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
