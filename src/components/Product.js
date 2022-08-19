import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from "./Product.style";
const Product = ({ product }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed ? "#F6F6F6" : "#fefefe",
        },
      ]}
      onPress={() => null}
    >
      <Text style={styles.title}>{product.title}</Text>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text style={styles.price}>{product.price} $</Text>
    </Pressable>
  );
};

export default Product;
