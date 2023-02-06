import filterSlice from "../components/Filters/filterSlice";
import todoListSlice from "../components/TodoList/todoListSlice";

const { configureStore } = require("@reduxjs/toolkit");


const store=configureStore({
        reducer:{
                filter:filterSlice,
                todoList:todoListSlice
        }
})
export default store