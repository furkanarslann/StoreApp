import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./pages/Products/Products";
import Details from "./pages/Details/Details";
import Config from "react-native-config";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function Router({ navigation }) {
  //const navigation = useNavigation();
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
          }}
        />
        <Stack.Screen
          name="DetailsPage"
          component={Details}
          options={{
            headerTitle: "",
            headerStyle: { backgroundColor: "#EEEEEE",  },
            statusBarStyle: "dark",
            headerTintColor: "#3f51b5",
            headerShadowVisible: false,
            headerRight: () => <Ionicons name="ios-cart-outline" size={30} color="#3f51b5" />
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
