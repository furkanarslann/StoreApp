import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    backgroundColor: "#262F91",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    height: Dimensions.get("window").height / 3.3,
    elevation: 5,
  },
  top: {
    width: "100%",
    height: "27%",
    backgroundColor: "#1E2356",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  bottom_right: { marginRight: 20 },
  title: { color: "white", fontWeight: "500" },
  cvv_box: { alignItems: "flex-end" },
  cvv: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    fontStyle: "italic",
    backgroundColor: "#9C9C9C",
    paddingHorizontal: 5,
  },
});
export default styles;
