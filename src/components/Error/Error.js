import { View, Text } from "react-native";
import React from "react";
import Lottie from "lottie-react-native";

const Error = ({ message }) => {
  return (
    <>
      <Lottie
        source={require("../../assets/error.json")}
        autoPlay
      />
      <Text
        style={{
          position: "absolute",
          top: 110,
          color: "red",
          fontWeight: "bold",
          fontSize: 18,
          textAlign: "center",
          left: 0,
          right: 0,
        }}
      >
        {message}
      </Text>
    </>
  );
};

export default Error;
