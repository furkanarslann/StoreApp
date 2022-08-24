import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./TotalBox.style";
import { useSelector } from "react-redux";

const TotalBox = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <View style={styles.total_container}>
      <View style={styles.left}>
        <Text style={styles.total_text}>Total Price</Text>
        <Text style={styles.total_price}>{totalPrice.toFixed(2)}$</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>Complete Shopping</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TotalBox;
