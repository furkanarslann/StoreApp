import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./CreditCardBack.style";
import { useSelector } from "react-redux";

const CreditCardBack = ({ setIsFront }) => {
  const cvv = useSelector((state) => state.payment.cvv);
  return (
    <TouchableOpacity style={styles.container} onPress={() => setIsFront(true)}>
      <View style={styles.top}></View>
      <View style={styles.bottom}>
        <View style={styles.bottom_right}>
          <Text style={styles.title}>Security Code</Text>
          <View style={styles.cvv_box}>
            <Text style={styles.cvv}>{cvv}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CreditCardBack;
