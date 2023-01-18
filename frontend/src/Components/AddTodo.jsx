import React, { useState } from "react";

export default function AddTodo(props) {
  const [todo, setTodo] = useState("");

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        name="todoItem"
        placeholder="Todo Item"
        onChange={handleChange}
      />
      <button
        onClick={() => {
          props.newTodo(todo);
          setTodo("");
        }}
      >
        AddTodo
      </button>
    </div>
  );
}
