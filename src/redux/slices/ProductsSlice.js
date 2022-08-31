import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [] };

const ProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    setData(state, action) {
      const newData = action.payload;
      state.data = newData;
    },
  },
});

export const { setData } = ProductsSlice.actions;
export default ProductsSlice.reducer;
