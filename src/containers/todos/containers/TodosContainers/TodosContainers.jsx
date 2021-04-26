import React, { useState } from "react";
import { AddNewTodo, TodoList, TodosFooter } from "../../components";
import { v4 as uuidv4 } from "uuid";

const TodosContainers = () => {
  const [todos, setTodos] = useState([
    { id: uuidv4(), msg: "Test todo 001", completed: false },
    { id: uuidv4(), msg: "Test todo 002", completed: false },
    { id: uuidv4(), msg: "Test todo 003", completed: false },
  ]);
  return (
    <div>
      <h1>todos</h1>
      <AddNewTodo setTodos={setTodos} />
      <TodoList todos={todos} />
      <TodosFooter />
    </div>
  );
};

export default TodosContainers;
