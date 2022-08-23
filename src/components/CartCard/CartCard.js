import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./CartCard.style";
import { useDispatch, useSelector } from "react-redux";
import { incrementAmount, decrementAmount } from "../../redux/slices/CartSlice";
const CartCard = ({ product }) => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.cart.amount);
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
          <Text style={styles.price}>{product?.price}$</Text>
          <View style={styles.amountBox}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => dispatch(decrementAmount(product))}
            >
              <Text style={{ fontWeight: "bold" }}> - </Text>
            </TouchableOpacity>
            <Text style={styles.amount}>{product.amount}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => dispatch(incrementAmount(product))}
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
