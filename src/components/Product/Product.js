import {
  View,
  Text,
  Image,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import styles from "./Product.style";
const Product = ({ product, onSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Text style={styles.title}>{product.title}</Text>
        <Image style={styles.image} source={{ uri: product.image }} />
        <Text style={styles.price}>{product.price}$</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Product;
