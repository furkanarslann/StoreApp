import { View, Text, TouchableOpacity, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import styles from "./CategoryPicker.style";
import { Ionicons } from "@expo/vector-icons";
import ModalPicker from "../ModalPicker/ModalPicker";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../redux/slices/ProductsSlice";

const CategoryPicker = () => {
  //const [selectedCategory, setSelectedCategory] = useState("Select a category");
  const selectedCategory = useSelector(
    (state) => state.products.selectedCategory
  );
  const [isModalVisible, setisModalVisible] = useState(false);
  const changeModalVisibility = (bool) => {
    setisModalVisible(bool);
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => changeModalVisibility(true)}
    >
      <Text style={styles.category}>
        {capitalizeFirstLetter(selectedCategory)}
      </Text>
      <Ionicons name="chevron-down-circle-outline" size={24} color="#3f51b5" />
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => changeModalVisibility(false)}
      >
        <ModalPicker changeModalVisibility={changeModalVisibility} />
      </Modal>
    </TouchableOpacity>
  );
};

const capitalizeFirstLetter = (word) => {
  const capital = word.charAt(0).toUpperCase();
  const rest = word.slice(1);
  return capital + rest;
};

export default CategoryPicker;
