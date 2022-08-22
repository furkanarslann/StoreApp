import { View, Text, FlatList } from "react-native";
import React from "react";
import CartCard from "../../components/CartCard/CartCard";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartList = useSelector((state) => state.cart.cartList);
  const renderCartCard = ({ item }) => <CartCard product={item} />;
    console.log(cartList);

  return <FlatList data={cartList} renderItem={renderCartCard} />;
};

export default Cart;
