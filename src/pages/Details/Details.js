import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import styles from "./Details.style";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Details = ({ navigation, route }) => {
  const { loading, data, error } = useFetch(
    Config.API_URL + "/" + route.params.id
  );

  console.log(data);
  
  const image = data.image;
  const title = data.title;
  const rate = data.rating?.rate; 
  const count = data.rating?.count;
  const description = data.description;
  const price = data.price;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.top_container}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.bottom_container}>
        <View style={styles.info_container}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.rating_container}>
            <Text style={styles.count}>{count} kişi bu ürünü satın aldı</Text>
            <Text style={styles.rate}>
              {rate}{" "}
              <Ionicons name="ios-star-sharp" size={17} color="#3f51b5" />
            </Text>
          </View>
        </View>
        <View style={styles.description_container}>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.price}>
          <Text style={styles.price_text}>
            <Ionicons name="pricetags" size={20} color="#3f51b5" />{" "}
            {price}$
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Details;
