import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartList: [] };

const cartSlice = createSlice({
  name: "cart*", // bu bir işe yaramıyor
  initialState,
  reducers: {
    updateCartList(state, action) {
      const newItem = action.payload;
      let isSameItem = false;

      if (state.cartList.length === 0) {
        newItem.amount = 1;
        state.cartList = [...state.cartList, newItem];
      }

      state.cartList.forEach((item) => {
        if (item.id === newItem.id) {
          isSameItem = true;
        }
      });

      if (!isSameItem) {
        newItem.amount = 1;
        state.cartList = [...state.cartList, newItem];
      }
    },
    incrementAmount(state, action) {
      const product = action.payload;
      const newItem = state.cartList.filter((item) => item.id === product.id);
      newItem[0].amount++;
    },
    decrementAmount(state, action) {
      const product = action.payload;
      const newItem = state.cartList.filter((item) => item.id === product.id);

      if (newItem[0].amount > 0) {
        newItem[0].amount--;
      }
    },
    deleteProduct(state, action) {
      const product = action.payload;
      const itemToDelete = state.cartList.filter(
        (item) => item.id === product.id
      );
      const index = state.cartList.indexOf(itemToDelete[0]);
      if (index > -1) {
        state.cartList.splice(index, 1);
      }
    },
  },
});

export const {
  updateCartList,
  incrementAmount,
  decrementAmount,
  deleteProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
