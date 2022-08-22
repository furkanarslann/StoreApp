import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./CartButton.style";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const CartButton = () => {
  const value = useSelector((state) => state.counter.value);

  return (
    <TouchableOpacity>
      <Ionicons name="ios-cart-outline" size={30} color="#3f51b5" />
      {value !== 0 && (
        <View style={styles.cart_count}>
          <Text style={{ color: "white" }}>{value}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartButton;
