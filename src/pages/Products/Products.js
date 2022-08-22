import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import Config from "react-native-config";
import Product from "../../components/Product/Product";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const Products = ({ navigation }) => {
  const { loading, data, error } = useFetch(Config.API_URL);
  // console.log(data);
  // sırası farketmez
  const handleSelect = (id) => {
    navigation.navigate("DetailsPage", { id });
  };
  const renderProduct = ({ item }) => (
    <Product product={item} onSelect={() => handleSelect(item.id)} />
  );

  if (error) {
    return (
      <View style={{ flex: 1 }}>
        <Error message={error} />
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#F1F1F1",
      }}
    >
      {loading ? (
        <Loading />
      ) : (
        <FlatList data={data} renderItem={renderProduct} numColumns={2} />
      )}
    </View>
  );
};

export default Products;
