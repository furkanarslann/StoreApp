import { View, Text } from "react-native";
import React from "react";
import Router from "./Router";
import CartProvider from "./redux/Provider";
import DetailLoading from "./components/DetailLoading/DetailLoading";
import Payment from "./pages/Payment/Payment";
{
  /*  */
}
const App = () => {
  return (
    <CartProvider>
      <Router />
    </CartProvider>
  );
};

export default App;
