import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import Config from "react-native-config";
import Product from "../../components/Product";
import useFetch from "../../hooks/useFetch";

const Products = () => {

  const { loading, data, error } = useFetch(Config.API_URL);
  // sırası farketmez 

  const renderProduct = ({ item }) => <Product product={item} />;

  if (error) {
    return (
      <View style={{ justifyContent: "center", flex: 1 }}>
        <Text
          style={{
            backgroundColor: "#D9D9D9CD",
            color: "red",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {error}
        </Text>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {loading ? (
        <View style={{ alignItems: "center" }}>
          <ActivityIndicator size={"large"} color="#6998D9" />
          <Text
            style={{
              fontWeight: "400",
              color: "grey",
              fontSize: 13,
              marginTop: 5,
            }}
          >
            Products are loading please wait
          </Text>
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={renderProduct}
          numColumns={2}
        />
      )}
    </View>
  );
};

export default Products;
