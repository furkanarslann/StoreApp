import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    padding: 15,
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
  chipImage: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    borderWidth: 1,
  },
  firstLine_container: {},
  secondLine_container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  cardNumberText: { color: "white", fontWeight: "bold", fontSize: 30 },
  thirdLine_container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardHolderName: {
    color: "white",
    fontSize: 13,
  },
  cardHolder_Box: {
    marginTop: 2,
  },
  nameText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  validThru: {
    color: "white",
    fontSize: 13,
  },
  validThru_Box: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 2,
  },
  dateText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});
export default styles;
