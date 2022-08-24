import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  total_container: {
    backgroundColor: "#1B2B86",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  left: {
    justifyContent: "space-between",
  },
  total_text: {
    color: "white",
    borderBottomWidth: 0.4,
    borderColor: "#FFFFFF9F",
  },
  total_price: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#1B2B86",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 20,
  },
  button_text: { color: "white", fontWeight: "600" },
});
export default styles;
