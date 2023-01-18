import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getTodo: (state, action) => {
      console.log("dataaaa", action.payload);
      state.todoList = action.payload;
    },
    addTodo: (state, data) => {
      state.todoList = data;
    },
  },
});

export const getTodoThunk = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await axios(
    `${process.env.REACT_APP_BACKEND_SERVER}/api/todos`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch(getTodo(response.data));
};

export const addTodoThunk = (todoItem) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_SERVER}/api/todos`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    { data: { todoItem } }
  );
  dispatch(addTodo(response.data));
};

// Action creators are generated for each case reducer function
export const { getTodo, addTodo } = todoSlice.actions;

export default todoSlice.reducer;
