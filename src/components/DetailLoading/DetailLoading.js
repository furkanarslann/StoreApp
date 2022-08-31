import { View, Text } from "react-native";
import React from "react";
import Lottie from "lottie-react-native";
const DetailLoading = () => {
  return (
    <Lottie
      source={require("../../assets/animations/loadingDetail.json")}
      autoPlay
    />
  );
};

export default DetailLoading;
