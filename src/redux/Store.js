import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/CounterSlice";
import cartReducer from "./slices/CartSlice";
import productsReducer from "./slices/ProductsSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    products: productsReducer,
  },
});

export default store;
