import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../redux-toolkit/authSlice";
import { getTodoThunk, addTodoThunk } from "../redux-toolkit/todoSlice";
import Todo from "../Components/Todo";
import AddTodo from "../Components/AddTodo";

export default function Todos() {
  const todos = useSelector((store) => store.todos.todoList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodoThunk());
  }, [dispatch]);

  return (
    <div>
      <button onClick={() => dispatch(logoutThunk())}>Logout</button>
      {todos.map((todoItem, index) => (
        <div key={index}>
          <Todo todoItem={todoItem} />
        </div>
      ))}
      <AddTodo
        newTodo={(todo) => {
          addTodoThunk(todo);
        }}
      />
    </div>
  );
}
