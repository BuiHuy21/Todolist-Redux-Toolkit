import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  search: "",
  status: "All",
  priority: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    searchFilterChang: (state, action) => {
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    priorityFilterChange: (state, action) => {
      state.priority = action.payload;
    },
  },
});
export const { searchFilterChang, statusFilterChange, priorityFilterChange } =
  filterSlice.actions;
export default filterSlice.reducer;
