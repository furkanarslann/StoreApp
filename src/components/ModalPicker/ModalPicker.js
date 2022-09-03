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
  const { changeModalVisibility } = props;


  const { data, loading } = useFetch(Config.API_URL + "/categories");
  let categories = data.map((item, index) => (
    <CategoryCard
      key={index + 1}
      item={item}
      index={index}
      changeModalVisibility={changeModalVisibility}
    />
  ));

  categories.unshift(
    <CategoryCard
      key={0}
      item={"All Categories"}
      changeModalVisibility={changeModalVisibility}
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
