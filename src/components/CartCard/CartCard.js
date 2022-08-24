import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./CartCard.style";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementAmount,
  decrementAmount,
  deleteProduct,
  incrementTotalPrice,
  decrementTotalPrice,
} from "../../redux/slices/CartSlice";
import { Ionicons } from "@expo/vector-icons";

const CartCard = ({ product }) => {
  const dispatch = useDispatch();

  const minusHandler = () => {
    if (product.amount === 1) {
      dispatch(deleteProduct(product));
    } else {
      dispatch(decrementAmount(product));
    }
    dispatch(decrementTotalPrice(product?.price));
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: product?.image,
        }}
        style={styles.left_box}
      />
      <View style={styles.right_box}>
        <Text style={styles.title}>{product?.title}</Text>
        <View style={styles.right_bottom_box}>
          <Text style={styles.price}>
            {(product?.price * product?.amount).toFixed(2)}$
          </Text>
          <View style={styles.amountBox}>
            <TouchableOpacity style={styles.button} onPress={minusHandler}>
              {product.amount === 1 ? (
                <Ionicons name="trash-outline" size={18} color="red" />
              ) : (
                <Text style={{ fontWeight: "bold" }}> - </Text>
              )}
            </TouchableOpacity>
            <Text style={styles.amount}>{product.amount}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                dispatch(incrementAmount(product));
                dispatch(incrementTotalPrice(product?.price));
              }}
            >
              <Text style={{ fontWeight: "bold" }}> + </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartCard;
