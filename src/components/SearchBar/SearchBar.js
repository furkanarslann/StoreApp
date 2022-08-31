import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./SearchBar.style";
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { setData } from "../../redux/slices/ProductsSlice";

export default function SearchBar({ placeholder }) {
  const [text, setText] = React.useState("");
  const { data } = useFetch(Config.API_URL);
  const dispatch = useDispatch();

  const handleSearch = (text) => {
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    //setFilteredData(filteredData);
    dispatch(setData(filteredData));
    setText(text);
  };

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
