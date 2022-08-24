import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./TotalBox.style";

const TotalBox = () => {
  return (
    <View style={styles.total_container}>
      <Text style={styles.total_price}>137$</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>Complete Shopping</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TotalBox;
