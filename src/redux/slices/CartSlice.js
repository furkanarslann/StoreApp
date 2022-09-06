import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartList: [], totalPrice: 0 };

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
    incrementTotalPrice(state, action) {
      const price = action.payload;
      state.totalPrice += price;
    },
    decrementTotalPrice(state, action) {
      const price = action.payload;
      state.totalPrice -= price;
    },
    deleteWithSwipe(state, action) {
      const index = action.payload;
      if (index > -1) {
        state.cartList.splice(index, 1);
      }
    },
    decrementTotalPriceWithSwipe(state, action) {
      const value = action.payload;
      state.totalPrice -= value;
    },
    deleteAllItems(state, action) {
      state.cartList = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  updateCartList,
  incrementAmount,
  decrementAmount,
  deleteProduct,
  incrementTotalPrice,
  decrementTotalPrice,
  deleteWithSwipe,
  decrementTotalPriceWithSwipe,
  deleteAllItems,
} = cartSlice.actions;
export default cartSlice.reducer;
