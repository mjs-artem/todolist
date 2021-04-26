import React from "react";

const TodoList = ({ todos }) => {
  return todos.map(({ msg, id, completed }, idx) => (
    <div key={`todo-${id}-${idx}`}>
      <div>Status: {completed ? "" : "not"} completed</div>
      <div>{msg}</div>
      <div>------------</div>
    </div>
  ));
};

export default TodoList;
