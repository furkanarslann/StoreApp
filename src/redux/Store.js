import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/CounterSlice";
import cartReducer from "./slices/CartSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});

export default store;
