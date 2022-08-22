import { View, Text, FlatList } from "react-native";
import React from "react";
import CartCard from "../../components/CartCard/CartCard";

const Cart = () => {
  const renderCartCard = () => <CartCard />;

  <FlatList data={data} renderItem={renderCartCard} />;
  return;
};

export default Cart;
