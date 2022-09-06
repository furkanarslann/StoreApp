import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React from "react";
import styles from "./Payment.style";
import CreditCardFront from "../../components/CreditCard/CreditCardFront";
import CardForm from "../../components/CardForm/CardForm";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import CreditCardBack from "../../components/CreditCard/CreditCardBack";

const Payment = () => {
  /*   name: "****",
  number: "****************",
  month: "**",
  year: "**",
   */
  const name = useSelector((state) => state.payment.name);
  const number = useSelector((state) => state.payment.number);
  const year = useSelector((state) => state.payment.year);
  const month = useSelector((state) => state.payment.month);

  const [activated, setActivated] = useState(false);
  const [isFront, setIsFront] = useState(true);

  useEffect(() => {
    name !== "****" &&
    number !== "****************" &&
    month !== "**" &&
    year !== "**" &&
    month.length == 2 &&
    year.length == 2
      ? setActivated(true)
      : setActivated(false);
  }, [name, number, month, year]);

  const completePayment = () => {
    console.log("ödeme tamamlandi kardeşşşş");
  };

  return (
    <View style={styles.container}>
      {isFront ? <CreditCardFront /> : <CreditCardBack />}
      <CardForm setIsFront={setIsFront} />
      <View style={styles.button_container}>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: activated ? "#FF7143" : "#A9A9A9" },
          ]}
          onPress={completePayment}
          disabled={activated ? false : true}
        >
          <Text
            style={[
              styles.button_text,
              { color: activated ? "white" : "#7D7D7D" },
            ]}
          >
            Complete Payment
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;
