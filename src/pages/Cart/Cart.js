import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CartCard from "../../components/CartCard/CartCard";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.style";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import CartLoading from "../../components/CartLoading/CartLoading";
import EmptyCard from "../../components/EmptyCard/EmptyCard";
import TotalBox from "../../components/TotalBox/TotalBox";
import { SwipeListView } from "react-native-swipe-list-view";
import HiddenItemWithActions from "../../components/HiddenItemWithActions/HiddenItemWithActions";
import {
  deleteWithSwipe,
  decrementTotalPriceWithSwipe,
} from "../../redux/slices/CartSlice";
import { renderHiddenItem } from "../../components/CartCard/CartCard";

const Cart = () => {
  let [fontsLoaded] = useFonts({
    Raleway: require("../../assets/fonts/Raleway-Regular.ttf"),
    Pacifico: Pacifico_400Regular,
  });

  const [loading, setLoading] = useState(true);
  const cartList = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();
  const renderCartCard = ({ item }) => <CartCard product={item} />;

  const closeRow = (rowMap, rowKey) => {
    console.log("close row calisti ");
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
      console.log("close row calisti - if icindeyiz");
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    dispatch(deleteWithSwipe(rowKey));
  };

  const handleDelete = (rowData, rowMap) => {
    deleteRow(rowMap, rowData.index);
    dispatch(
      decrementTotalPriceWithSwipe(rowData?.item?.amount * rowData?.item?.price)
    );
  };

  const renderHiddenItem = (rowData, rowMap) => {
    console.log("====================================");
    console.log(rowData);
    console.log("====================================");
    return (
      <HiddenItemWithActions
        data={rowData}
        rowMap={rowMap}
        onClose={() => closeRow(rowMap, rowData.index)}
        onDelete={() => handleDelete(rowData, rowMap)}
      />
    );
  };

  const renderPage = () => {
    if (cartList.length == 0) {
      return <EmptyCard />;
    } else {
      return (
        <View style={styles.container}>
          {/*  <FlatList data={cartList} renderItem={renderCartCard} /> */}
          <SwipeListView
            data={cartList}
            renderItem={renderCartCard}
            keyExtractor={(item, index) => `${index}`}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-190}
            disableRightSwipe
            stopRightSwipe={-195}
          />
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
