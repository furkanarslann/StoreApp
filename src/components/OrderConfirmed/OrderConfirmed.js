import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Lottie from "lottie-react-native";
import { useDispatch } from "react-redux";
import { setCompleted } from "../../redux/slices/PaymentSlice";
import { useNavigation } from "@react-navigation/native";
import { deleteAllItems } from "../../redux/slices/CartSlice";

const OrderConfirmed = () => {
    
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleCompletion = () => {
    navigation.navigate("ProductsPage");
    dispatch(setCompleted(false));
    dispatch(deleteAllItems());
  };
  return (
    <>
      <Text style={styles.text}>Order Confirmed!</Text>
      <Lottie
        source={require("../../assets/animations/orderConfirmed.json")}
        autoPlay
        loop={false}
      />
      <TouchableOpacity style={styles.button} onPress={handleCompletion}>
        <Text style={styles.button_text}>Continue Shopping</Text>
      </TouchableOpacity>
    </>
  );
};

export default OrderConfirmed;

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    left: 0,
    right: 0,
    fontSize: 25,
    textAlign: "center",
    marginTop: 220,
    color: "green",
    fontWeight: "500",
  },
  button: {
    left: 105,
    width: "50%",
    marginTop: 480,
    padding: 10,
    alignItems: "center",
    borderWidth: 1.1,
    borderColor: "#0FC8A0",
    borderRadius: 15,
  },
  button_text: {
    color: "#0FC8A0",
    fontSize: 14,
    fontWeight: "bold",
  },
});
