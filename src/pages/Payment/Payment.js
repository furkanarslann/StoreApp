import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React from "react";
import styles from "./Payment.style";
import CreditCardFront from "../../components/CreditCard/CreditCardFront";
import CardForm from "../../components/CardForm/CardForm";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import CreditCardBack from "../../components/CreditCard/CreditCardBack";
import OrderConfirmed from "../../components/OrderConfirmed/OrderConfirmed";
import {
  setCompleted,
  setName,
  setCVV,
  setMonth,
  setNumber,
  setYear,
} from "../../redux/slices/PaymentSlice";

const Payment = () => {
  const name = useSelector((state) => state.payment.name);
  const number = useSelector((state) => state.payment.number);
  const year = useSelector((state) => state.payment.year);
  const month = useSelector((state) => state.payment.month);
  const cvv = useSelector((state) => state.payment.cvv);

  const [activated, setActivated] = useState(false);
  const [isFront, setIsFront] = useState(true);
  const completed = useSelector((state) => state.payment.completed);
  const dispatch = useDispatch();
  useEffect(() => {
    name !== "****" &&
    number !== "****************" &&
    month !== "**" &&
    year !== "**" &&
    cvv !== "***" &&
    month.length == 2 &&
    year.length == 2 &&
    cvv.length == 3
      ? setActivated(true)
      : setActivated(false);
  }, [name, number, month, year, cvv]);

  const completePayment = () => {
    dispatch(setCompleted(true));
    dispatch(setName("****"));
    dispatch(setCVV("***"));
    dispatch(setNumber("****************"));
    dispatch(setMonth("**"));
    dispatch(setYear("**"));
  };

  const renderOrderCompleted = () => {
    return <OrderConfirmed />;
  };

  const renderPaymentScreen = () => {
    return (
      <View style={styles.container}>
        {isFront ? (
          <CreditCardFront setIsFront={setIsFront} />
        ) : (
          <CreditCardBack setIsFront={setIsFront} />
        )}
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

  return completed ? renderOrderCompleted() : renderPaymentScreen();
};

export default Payment;
