import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 8,
    flex: 1,
    height: 300,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FEFEFE",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: { fontWeight: "300", textAlign: "center" },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    //aspectRatio: 568 / 753,
  },
  price: { fontWeight: "400", color: "#141414" },
});
export default styles;
