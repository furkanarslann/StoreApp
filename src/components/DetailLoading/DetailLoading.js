import { View, Text } from "react-native";
import React from "react";
import Lottie from "lottie-react-native";
const DetailLoading = () => {
  return (
    <Lottie source={require("../../assets/loadingDetail.json")} autoPlay />
  );
};

export default DetailLoading;
