import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import Config from "react-native-config";
import axios from "axios";
import Product from "../../components/Product";

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = () => {
    axios
      .get(Config.API_URL)
      .then((response) => {
        setLoading(false);
        setProductList(response.data);
      })
      .catch((e) => setError(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          data={productList}
          renderItem={renderProduct}
          numColumns={2}
        />
      )}
    </View>
  );
};

export default Products;
