import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    alignSelf: "stretch",
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 7,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
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
  category: { fontSize: 15, color: "#1A287D" },
});
export default styles;
