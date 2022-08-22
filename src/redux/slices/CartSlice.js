import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartList: [] };

const cartSlice = createSlice({
  name: "cart", // bunu dene store da
  initialState,
  reducers: {
    updateCartList(state, action) {
      const newItem = action.payload;
      state.cartList = [...state.cartList, newItem];
    },
  },
});

export const { updateCartList } = cartSlice.actions;
export default cartSlice.reducer;
