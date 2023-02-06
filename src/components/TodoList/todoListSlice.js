/* eslint-disable array-callback-return */
import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: 1, name: "Learn ReactJS", completed: true, priority: "High" },
  { id: 2, name: "Learn Redux", completed: false, priority: "Low" },
  { id: 3, name: "Learn ReduxToolKit", completed: false, priority: "Medium" },
  { id: 4, name: "Learn MaterialUI", completed: true, priority: "High" },
  { id: 5, name: "Learn ReactHookForm", completed: false, priority: "Low" },
];
const todoListSlice = createSlice({
  name: "todoList",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const crrTodo = state.find((todo) => todo.id === action.payload);
      if (crrTodo) crrTodo.completed = !crrTodo.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    editTodo: (state, action) => {
      const todoListArr = [...state];
      todoListArr.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.name = action.payload.editTodoName;
        }
      });
      state = [...todoListArr];
    },
  },
});
export const { addTodo, toggleTodo, deleteTodo, editTodo } =
  todoListSlice.actions;
export default todoListSlice.reducer;
