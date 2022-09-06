import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./CreditCardBack.style";

const CreditCardBack = () => {
  return (
    <View style={styles.container}>
      <View style={styles.thirdRight}>
        <Text style={styles.validThru}>Valid Thru</Text>
        <View style={styles.validThru_Box}>
          <Text style={styles.dateText}>01-23</Text>
        </View>
      </View>
    </View>
  );
};

export default CreditCardBack;
