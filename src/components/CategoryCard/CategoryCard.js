import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import styles from "./CategoryCard.style";
import { setSelectedCategory, setData } from "../../redux/slices/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";

const images = [
  require("../../assets/images/electronics.png"),
  require("../../assets/images/jewelry.png"),
  require("../../assets/images/men.png"),
  require("../../assets/images/women.png"),
];

const CategoryCard = ({ item, index, changeModalVisibility }) => {
  const dispatch = useDispatch();

  const filterCategory = () => {
    dispatch(setSelectedCategory(item));
    changeModalVisibility(false);
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
