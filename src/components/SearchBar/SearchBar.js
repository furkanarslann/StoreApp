import { View, Text, TextInput } from "react-native";
import React, { useEffect } from "react";
import styles from "./SearchBar.style";
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../redux/slices/ProductsSlice";

export default function SearchBar({ placeholder }) {
  const [text, setText] = React.useState("");
  const dispatch = useDispatch();

  const selectedCategory = useSelector(
    (state) => state.products.selectedCategory
  );

  const { data } = useFetch(Config.API_URL);

  const handleSearch = (text) => {
    setText(text);
    const filteredData = data.filter((item) =>
      selectedCategory !== "All Categories" &&
      selectedCategory !== "Select a category"
        ? item.title.toLowerCase().includes(text.toLowerCase()) &&
          item.category == selectedCategory
        : item.title.toLowerCase().includes(text.toLowerCase())
    );

    dispatch(setData(filteredData));
  };

  useEffect(() => {
    handleSearch("");
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      <Ionicons name="ios-search-outline" size={24} color="#1F3299" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(newText) => handleSearch(newText)}
        value={text}
      />
    </View>
  );
}
