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

    editTodoByName: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      const updatedState = [...state];
      updatedState[index].name = action.payload.name;
    },
    editTodoByPriority: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      const updatedState = [...state];
      updatedState[index].priority = action.payload.priority;
    },
  },
});
export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodoByName,
  editTodoByPriority,
} = todoListSlice.actions;
export default todoListSlice.reducer;
