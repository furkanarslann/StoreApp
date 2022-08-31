import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import Config from "react-native-config";
import Product from "../../components/Product/Product";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryPicker from "../../components/CategoryPicker/CategoryPicker";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../redux/slices/ProductsSlice";

const Products = ({ navigation }) => {
  const { loading, data, error } = useFetch(Config.API_URL);
  // const [filteredData, setFilteredData] = useState([]);
  const filteredData = useSelector((state) => state.products.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setData(data));
    //setFilteredData(data);
  }, [data]);

  const handleSelect = (id) => {
    navigation.navigate("DetailsPage", { id });
  };

  const renderProduct = ({ item }) => (
    <Product product={item} onSelect={() => handleSelect(item.id)} />
  );

  if (error) {
    return <Error message={error} />;
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
        <View>
          <SearchBar placeholder={"What are you looking for?"} />

          <FlatList
            data={filteredData}
            renderItem={renderProduct}
            numColumns={2}
            ListHeaderComponent={<CategoryPicker />}
            contentContainerStyle={{ paddingBottom: 60 }}
          />
        </View>
      )}
    </View>
  );
};

export default Products;
