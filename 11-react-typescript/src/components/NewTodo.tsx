import React, { useRef, useContext } from "react";
import styles from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";
/**
 *
 * Udemy 515. Typescript 프로젝트의 양식 제출
 */
// const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
const NewTodo: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);

  /**
   * input: useRef<HTMLInputElement>
   * button : useRef<HTMLButtonElement>
   * paragraph : useRef<HTMLParagraphElement>
   */
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
    /**
     * todoTextInputRef.current!.value;
     * ! : 이 값이 null이 될 수 있다는 건 알지만, 이 시점에서는 절대 null이 아니라고 알려주는 문법
     */
    if (enteredText?.trim().length === 0) {
      // throw an error
      return;
    }

    // props.onAddTodo(enteredText);
    todosCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
