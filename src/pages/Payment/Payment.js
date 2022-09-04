import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React from "react";
import styles from "./Payment.style";
import CreditCard from "../../components/CreditCard/CreditCard";
import CardForm from "../../components/CardForm/CardForm";

const Payment = () => {
  return (
    <View style={styles.container}>
      <CreditCard />
      <CardForm />
      <View style={styles.button_container}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}>Next Step</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;
