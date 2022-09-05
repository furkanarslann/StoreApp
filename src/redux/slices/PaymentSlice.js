import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "****",
  number: "****************",
  month: "**",
  year: "**",
};

const paymentSlice = createSlice({
  name: "credit card",
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setNumber(state, action) {
      state.number = action.payload;
    },
    setMonth(state, action) {
      state.month = action.payload;
    },
    setYear(state, action) {
      state.year = action.payload;
    },
  },
});

export const { setName, setNumber, setMonth, setYear } = paymentSlice.actions;
export default paymentSlice.reducer;
