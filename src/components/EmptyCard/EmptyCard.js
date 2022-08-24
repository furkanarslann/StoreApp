import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./EmptyCard.style";
import { useNavigation } from "@react-navigation/native";

const EmptyCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={require("../../assets/images/empty-cart.png")}
          style={styles.image}
        />
        <Text style={[styles.text, { fontFamily: "Raleway" }]}>
          Your cart is empty
        </Text>
        <Text style={[styles.text_second, { fontFamily: "Raleway" }]}>
          Looks like you haven't added any products to your cart yet
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.button_text, { fontFamily: "Raleway" }]}>
          Continue Shopping
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyCard;
