import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CartCard from "../../components/CartCard/CartCard";
import { useSelector } from "react-redux";
import styles from "./Cart.style";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import CartLoading from "../../components/CartLoading/CartLoading";
import EmptyCard from "../../components/EmptyCard/EmptyCard";
import TotalBox from "../../components/TotalBox/TotalBox";
const Cart = () => {
  const cartList = useSelector((state) => state.cart.cartList);
  const renderCartCard = ({ item }) => <CartCard product={item} />;
  const [loading, setLoading] = useState(true);

  let [fontsLoaded] = useFonts({
    Raleway: require("../../assets/fonts/Raleway-Regular.ttf"),
    Pacifico: Pacifico_400Regular,
  });

  const renderPage = () => {
    if (cartList.length == 0) {
      return <EmptyCard />;
    } else {
      return (
        <View style={styles.container}>
          <FlatList data={cartList} renderItem={renderCartCard} />
          <TotalBox />
        </View>
      );
    }
  };
  const renderLoading = () => {
    setTimeout(() => setLoading(false), 1400);
    return <CartLoading />;
  };
  /*   if (!fontsLoaded) {
    return <AppLoading />;
  }
 */
  return loading ? renderLoading() : renderPage();
};

export default Cart;
