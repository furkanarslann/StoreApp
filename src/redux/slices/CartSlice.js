import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartList: [], amount: 0 };

const cartSlice = createSlice({
  name: "cart*", // bu bir işe yaramıyor
  initialState,
  reducers: {
    updateCartList(state, action) {
      const newItem = action.payload;

      if (state.cartList.length === 0) {
        newItem.amount = 1;
        state.cartList = [...state.cartList, newItem];
      }

      let flag = false;

      state.cartList.forEach((item) => {
        if (item.id === newItem.id) {
          flag = true;
        }
      });
      if (!flag) {
        newItem.amount = 1;
        state.cartList = [...state.cartList, newItem];
      }
    },
    incrementAmount(state, action) {
      const newItem = state.cartList.filter(
        (item) => item.id === action.payload.id
      );
      newItem[0].amount++;
    },
    decrementAmount(state, action) {
      const newItem = state.cartList.filter(
        (item) => item.id === action.payload.id
      );

      if (newItem[0].amount > 0) {
        newItem[0].amount--;
      }
    },
  },
});

export const { updateCartList, incrementAmount, decrementAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
