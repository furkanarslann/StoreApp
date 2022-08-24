import { View, Text } from "react-native";
import React from "react";
import Lottie from "lottie-react-native";
import {
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
  DMSans_700Bold_Italic,
  useFonts,
} from "@expo-google-fonts/dm-sans";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";

const Error = ({ message }) => {
  let fontsLoaded = useFonts({
    DMSans: DMSans_700Bold,
    Pacifico: Pacifico_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={{ flex: 1 }}>
      <Lottie source={require("../../assets/error.json")} autoPlay />
      <Text
        style={{
          position: "absolute",
          top: 110,
          color: "red",
          fontSize: 18,
          textAlign: "center",
          left: 0,
          right: 0,
          fontFamily: "DMSans",
        }}
      >
        {message}
      </Text>
    </View>
  );
};

export default Error;
