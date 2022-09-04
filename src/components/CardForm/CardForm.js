import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./CardForm.style";

const CardForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputs_container}>
        <View style={styles.firstLine}>
          <Text style={styles.cardNumber}>Card Number</Text>
          <View style={styles.cardNumber_inputBox}>
            <TextInput style={styles.input} />
          </View>
        </View>
        <View style={styles.secondLine}>
          <View style={styles.secondLeft}>
            <Text style={styles.cardHolder}>Cardholder Name</Text>
            <View style={styles.cardHolder_inputBox}>
              <TextInput style={styles.input} />
            </View>
          </View>
          <View style={styles.secondRight}>
            <Text style={styles.validThru}>Valid Thru</Text>
            <View style={styles.validThru_inputBox}>
              <TextInput style={styles.input} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardForm;
