import React from "react";
import { AddNewTodo, TodoList, TodosFooter } from "../../components";

const TodosContainers = () => {
  return (
    <div>
      <h1>todos</h1>
      <AddNewTodo />
      <TodoList />
      <TodosFooter />
    </div>
  );
};

export default TodosContainers;
