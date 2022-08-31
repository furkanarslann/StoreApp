import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  modal: {
    backgroundColor: "#FFFFFFD1",
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    width: WIDTH - 20,
    padding: 10,
    marginTop: 145,
  },
});
export default styles;
