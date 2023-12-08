// import React, { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProverider from "./store/todos-context";
// import Todo from "./models/todo";

function App() {
  return (
    <TodosContextProverider>
      {/* <Todos items={["Learn React", "Typescript", "Test"]} /> */}

      {/* <NewTodo onAddTodo={addTodoHandler} /> */}
      {/* <Todos items={todos} onRemoveTodoItems={removeTodoHandler} /> */}

      <NewTodo />
      <Todos />
    </TodosContextProverider>
  );
}

export default App;
