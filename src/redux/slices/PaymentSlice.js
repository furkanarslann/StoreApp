import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "****", number: "****************", date: "****" };

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
    setDate(state, action) {
      state.date = action.payload;
    },
  },
});

export const { setName, setNumber, setDate } = paymentSlice.actions;
export default paymentSlice.reducer;
