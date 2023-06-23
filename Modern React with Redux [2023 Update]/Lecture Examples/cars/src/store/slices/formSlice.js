import { createSlice } from "@reactjs/toolkit";

const formSlice = createSlice({
  name: "form",
  intitalState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
});

export const { changeName, changeCost } = formSlice.actions;
export const formsReducer = formSlice.reducer;
