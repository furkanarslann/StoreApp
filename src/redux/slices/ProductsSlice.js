import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [], selectedCategory: "Select a category" };

const ProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    setData(state, action) {
      const newData = action.payload;
      state.data = newData;
    },
    setSelectedCategory(state, action) {
      const category = action.payload;
      state.selectedCategory = category;
    },
  },
});

export const { setData, setSelectedCategory } = ProductsSlice.actions;
export default ProductsSlice.reducer;
