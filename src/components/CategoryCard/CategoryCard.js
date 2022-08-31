import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import styles from "./CategoryCard.style";

const images = [
  require("../../assets/images/electronics.png"),
  require("../../assets/images/jewelry.png"),
  require("../../assets/images/men.png"),
  require("../../assets/images/women.png"),
];

const CategoryCard = ({ item, index, setSelectedCategory }) => {
  console.log(item);

  const filterCategory = () => {
    setSelectedCategory(item);
  };

  return (
    <TouchableWithoutFeedback onPress={filterCategory}>
      <View style={styles.category_box}>
        <Text style={styles.text}>{item.toUpperCase()}</Text>
        <Image style={styles.image} source={images[index]} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;
