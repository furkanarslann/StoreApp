import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./pages/Products/Products";
import Details from "./pages/Details/Details";
import Config from "react-native-config";
import CartButton from "./components/CartButton/CartButton";
import Cart from "./pages/Cart/Cart";
import { useSelector } from "react-redux";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import Payment from "./pages/Payment/Payment";

const Stack = createNativeStackNavigator();

export default function Router() {
  let fontsLoaded = useFonts({
    Pacifico: Pacifico_400Regular,

    // Raleway: require("./assets/fonts/Raleway-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const cartList = useSelector((state) => state.cart.cartList);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={{
            headerTitle: "Shopping",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#1F3299" },
            statusBarStyle: "dark",
            headerTitleStyle: {
              color: "#FFFFFF",
              fontSize: 18,
              fontFamily: "Pacifico",
            },
            headerRight: () => <CartButton />,
          }}
        />
        <Stack.Screen
          name="DetailsPage"
          component={Details}
          options={{
            headerTitle: "",
            headerStyle: { backgroundColor: "#EEEEEE" },
            statusBarStyle: "dark",
            headerTintColor: "#3f51b5",
            headerShadowVisible: false,
            headerRight: () => <CartButton screen={"Details"} />,
          }}
        />
        <Stack.Screen
          name="CartPage"
          component={Cart}
          options={{
            headerTitle: "",
            headerStyle: { backgroundColor: "#EEEEEE" },
            statusBarStyle: "dark",
            headerTintColor: "#3f51b5",
            headerShadowVisible: false,
            headerShown: cartList.length === 0 ? false : true,
          }}
        />
        <Stack.Screen
          name="PaymentPage"
          component={Payment}
          options={{
            headerTitle: "",
            headerStyle: { backgroundColor: "#F1F2F7" },
            statusBarStyle: "dark",
            headerTintColor: "#3f51b5",
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
