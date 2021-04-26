import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddNewTodo = ({ setTodos }) => {
  const [newTodo, handleChange] = useState("");

  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();

    setTodos((todos) => [...todos].concat({ id: uuidv4(), msg: newTodo, completed: false }));
    handleChange("");
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" value={newTodo} id="id" onChange={(e) => handleChange(e.target.value)} />
        <button type="submit">Add todo</button>
      </form>
      <div>------------</div>
    </React.Fragment>
  );
};

export default AddNewTodo;
