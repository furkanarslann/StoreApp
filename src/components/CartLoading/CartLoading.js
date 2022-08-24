import { View, Text } from "react-native";
import React from "react";
import Lottie from "lottie-react-native";

const CartLoading = () => {
  return <Lottie source={require("../../assets/cartLoading.json")} autoPlay />;
};

export default CartLoading;
