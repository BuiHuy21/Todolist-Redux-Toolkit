import { createSelector } from "@reduxjs/toolkit";
import ColumnGroup from "antd/lib/table/ColumnGroup";

export const searchTextSelector = (state) => state.filter.search;
export const searchStatusSelector = (state) => state.filter.status;
export const prioritySelector = (state) => state.filter.priority;
export const todoListSelector = (state) => state.todoList;

export const todoRemaining = createSelector(
  searchTextSelector,
  searchStatusSelector,
  prioritySelector,
  todoListSelector,
  (searchText, status, priorityFilter, todoList) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorityFilter.length > 0
          ? todo.name.includes(searchText) &&
              priorityFilter.includes(todo.priority)
          : todo.name.includes(searchText);
      } else {
        return (
          todo.name.includes(searchText) &&
          (status === "Completed" ? todo.completed : !todo.completed) &&
          (priorityFilter.length > 0
            ? priorityFilter.includes(todo.priority)
            : true)
        );
      }
    });
  }
);
