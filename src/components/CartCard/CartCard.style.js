import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 13,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  left_box: {
    flex: 3,
    height: 100,
    resizeMode: "contain",
  },
  right_box: {
    backgroundColor: "white",
    flex: 7,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  title: { fontSize: 14, fontWeight: "400", color: "#000000" },
  right_bottom_box: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    color: "#2E3C83",
    fontSize: 17,
    flex: 7,
    fontFamily: "Inter_500Medium",
  },
  amountBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F9F9F9",
    borderRadius: 15,
    flex: 3,
  },
  amount: { fontSize: 16 },
  button: {
    backgroundColor: "#EEEEEE",
    borderRadius: 15,
    paddingHorizontal: 5,
  },
});
export default styles;
