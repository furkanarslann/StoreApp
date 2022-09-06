import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./CreditCardFront.style";
import { useFonts } from "expo-font";
import { useSelector } from "react-redux";
import { RussoOne_400Regular } from "@expo-google-fonts/russo-one";

const CreditCardFront = ({ setIsFront }) => {
  const [fontsLoaded] = useFonts({
    Russo: RussoOne_400Regular,
  });

  const name = useSelector((state) => state.payment.name);
  const number = useSelector((state) => state.payment.number);
  const month = useSelector((state) => state.payment.month);
  const year = useSelector((state) => state.payment.year);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setIsFront(false)}
    >
      <View style={styles.firstLine_container}>
        <Image
          style={styles.chipImage}
          source={require("../../assets/images/chip2.png")}
        />
      </View>
      <View style={styles.secondLine_container}>
        <Text style={[styles.cardNumberText, { fontFamily: "Russo" }]}>
          {number.slice(0, 4)}
        </Text>
        <Text style={[styles.cardNumberText, { fontFamily: "Russo" }]}>
          {number.slice(4, 8)}
        </Text>
        <Text style={[styles.cardNumberText, { fontFamily: "Russo" }]}>
          {number.slice(8, 12)}
        </Text>
        <Text style={[styles.cardNumberText, { fontFamily: "Russo" }]}>
          {number.slice(12, 16)}
        </Text>
      </View>
      <View style={styles.thirdLine_container}>
        <View style={styles.thirdLeft}>
          <Text style={styles.cardHolderName}>Cardholder Name</Text>
          <View style={styles.cardHolder_Box}>
            <Text style={[styles.nameText, { fontFamily: "Russo" }]}>
              {name}
            </Text>
          </View>
        </View>
        <View style={styles.thirdRight}>
          <Text style={styles.validThru}>Valid Thru</Text>
          <View style={styles.validThru_Box}>
            <Text style={[styles.dateText, { fontFamily: "Russo" }]}>
              {month} / {year}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CreditCardFront;
