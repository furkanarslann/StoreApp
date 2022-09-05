import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/CounterSlice";
import cartReducer from "./slices/CartSlice";
import productsReducer from "./slices/ProductsSlice";
import paymentReducer from "./slices/PaymentSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    products: productsReducer,
    payment: paymentReducer,
  },
});

export default store;
