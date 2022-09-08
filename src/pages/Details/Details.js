import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import styles from "./Details.style";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCartList,
  incrementTotalPrice,
} from "../../redux/slices/CartSlice";
import DetailLoading from "../../components/DetailLoading/DetailLoading";
import Error from "../../components/Error/Error";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Quicksand_400Regular, useFonts } from "@expo-google-fonts/quicksand";
import { Inter_600SemiBold, Inter_700Bold } from "@expo-google-fonts/inter";

const Details = ({ navigation, route }) => {
  let [fontsLoaded] = useFonts({
    Quicksand: Quicksand_400Regular,
    Inter_700Bold: Inter_700Bold,
    Inter_600SemiBold: Inter_600SemiBold,
  });

  const { loading, data, error } = useFetch(
    Config.API_URL + "/" + route.params.id
  );
  console.log(error);
  // console.log(data);
  const id = data.id;
  const image = data.image;
  const title = data.title;
  const rate = data.rating?.rate;
  const count = data.rating?.count;
  const description = data.description;
  const price = data.price;
  const amount = 0;

  const product = {
    id,
    image,
    title,
    price,
    amount,
  };

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(updateCartList(product));
    dispatch(incrementTotalPrice(product?.price));
  };

  if (error) {
    return <Error message={error} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <DetailLoading />
      ) : (
        <>
          <ScrollView>
            <View style={styles.top_container}>
              <Image source={{ uri: image }} style={styles.image} />
            </View>
            <View style={styles.bottom_container}>
              <View style={styles.info_container}>
                <Text
                  style={[styles.title, { fontFamily: "Inter_600SemiBold" }]}
                >
                  {title}
                </Text>
                <View style={styles.rating_container}>
                  <Text style={[styles.count, { fontFamily: "Quicksand" }]}>
                    {count} Ratings
                  </Text>
                  <Text style={styles.rate}>
                    {rate}{" "}
                    <Ionicons name="ios-star-sharp" size={17} color="#3f51b5" />
                  </Text>
                </View>
              </View>
              <View style={styles.description_container}>
                <Text
                  style={[styles.description, { fontFamily: "Inter_300Light" }]}
                >
                  {description}
                </Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.footer}>
            <View style={styles.price}>
              <Text
                style={[styles.price_text, { fontFamily: "Inter_700Bold" }]}
              >
                <Ionicons name="pricetags" size={20} color="#3f51b5" /> {price}$
              </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={addToCart}>
              <Text
                style={[styles.button_text, { fontFamily: "Quciksand_500" }]}
              >
                Add To Cart
              </Text>
              <MaterialCommunityIcons
                name="cart-plus"
                size={19}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Details;
