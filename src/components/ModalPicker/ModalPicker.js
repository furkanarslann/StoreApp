import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import React from "react";
import styles from "./ModalPicker.style";
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import CategoryCard from "../CategoryCard/CategoryCard";

const ModalPicker = (props) => {
  const { changeModalVisibility, setSelectedCategory } = props;

  const { data, loading } = useFetch(Config.API_URL + "/categories");
  let categories = data.map((item, index) => (
    <CategoryCard
      item={item}
      index={index}
      setSelectedCategory={setSelectedCategory}
    />
  ));

  categories.unshift(
    <CategoryCard
      item={"All Categories"}
      setSelectedCategory={setSelectedCategory}
    />
  );

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => changeModalVisibility(false)}
    >
      <View style={styles.modal}>
        {loading ? (
          <ActivityIndicator size={30} color={"navy"} />
        ) : (
          <ScrollView>{categories}</ScrollView>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ModalPicker;
