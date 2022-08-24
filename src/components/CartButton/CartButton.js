import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./CartButton.style";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const CartButton = ({ screen }) => {
  const cartList = useSelector((state) => state.cart.cartList);
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("CartPage")}>
      <Ionicons
        name="ios-cart-outline"
        size={30}
        color={screen === "Details" ? "#1F3299" : "#FFFFFF"}
      />
      {cartList.length !== 0 && (
        <View style={styles.cart_count}>
          <Text style={{ color: "white" }}>{cartList.length}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartButton;
