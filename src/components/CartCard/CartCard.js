import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./CartCard.style";

const CartCard = ({ product }) => {
  console.log(product);
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
            <TouchableOpacity style={styles.button}>
              <Text style={{ fontWeight: "bold" }}> - </Text>
            </TouchableOpacity>
            <Text style={styles.amount}>1</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={{ fontWeight: "bold" }}> + </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartCard;
