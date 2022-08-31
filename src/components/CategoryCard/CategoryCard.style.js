import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  category_box: {
    marginVertical: 15,
    backgroundColor: "#1A287D",
    borderRadius: 15,
    padding: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
export default styles;
