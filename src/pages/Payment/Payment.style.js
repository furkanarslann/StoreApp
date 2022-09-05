import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1F2F7",
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },
  button_container: {
    justifyContent: "center",
    flex: 0.5,
  },
  button_text: {
    fontSize: 17,
    fontWeight: "500",
  },
  button: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
export default styles;
