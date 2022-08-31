import { View, Text } from "react-native";
import React from "react";
import Lottie from "lottie-react-native";

const Loading = () => {
  return (
    <>
      <Lottie
        source={require("../../assets/animations/loadingMain.json")}
        autoPlay
      />
      <Text
        style={{
          fontWeight: "400",
          color: "grey",
          fontSize: 16,
          marginTop: 5,
          textAlign: "center",
          position: "absolute",
          bottom: 240,
          left: 0,
          right: 0,
        }}
      >
        Products are loading please wait...
      </Text>
    </>
  );
};

export default Loading;
