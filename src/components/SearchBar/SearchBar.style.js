import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: Dimensions.get("window").height / 18,
    margin: 5,
    marginHorizontal: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  input: {
    marginLeft: 5,
  },
});
export default styles;
