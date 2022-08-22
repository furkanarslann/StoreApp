import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./pages/Products/Products";
import Details from "./pages/Details/Details";
import Config from "react-native-config";
import CartButton from "./components/CartButton/CartButton";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={{
            headerTitle: "Products Page",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#D9DDF4" },
            statusBarStyle: "dark",
            headerTitleStyle: { color: "#3f51b5", fontSize: 18 },
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
            headerRight: () => <CartButton />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
