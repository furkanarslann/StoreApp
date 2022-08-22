import { View, Text } from "react-native";
import React from "react";
import Router from "./Router";
import CartProvider from "./redux/Provider";

const App = () => {
  return (
    <CartProvider>
      <Router />
    </CartProvider>
  );
};

export default App;
