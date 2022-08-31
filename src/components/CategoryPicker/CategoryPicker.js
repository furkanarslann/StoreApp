import { View, Text, TouchableOpacity, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import styles from "./CategoryPicker.style";
import { Ionicons } from "@expo/vector-icons";
import ModalPicker from "../ModalPicker/ModalPicker";

const CategoryPicker = () => {
  const [selectedCategory, setSelectedCategory] = useState("Select a category");
  const [isModalVisible, setisModalVisible] = useState(false);
  const changeModalVisibility = (bool) => {
    setisModalVisible(bool);
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => changeModalVisibility(true)}
    >
      <Text style={styles.category}>{selectedCategory}</Text>
      <Ionicons name="chevron-down-circle-outline" size={24} color="#3f51b5" />
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => changeModalVisibility(false)}
      >
        <ModalPicker
          changeModalVisibility={changeModalVisibility}
          setSelectedCategory={setSelectedCategory}
        />
      </Modal>
    </TouchableOpacity>
  );
};

export default CategoryPicker;
