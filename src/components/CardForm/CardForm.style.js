import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  inputs_container: {
    marginTop: 15,
  },
  firstLine: {
    marginTop: 15,
  },
  cardNumber: {
    color: "#3A3A3A",
    marginLeft: 5,
    marginBottom: 5,
  },
  cardNumber_inputBox: {
    backgroundColor: "#DEDEDE",
    borderRadius: 6,
    paddingHorizontal: 8,
    padding: 5,
  },
  input: {
    color: "black",
    fontSize: 15,
    padding: 1,
  },

  secondLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  secondLeft: {
    flex: 9,
    marginRight: 15,
  },
  cardHolder: {
    color: "#3A3A3A",
    marginLeft: 5,
    marginBottom: 5,
  },
  cardHolder_inputBox: {
    backgroundColor: "#DEDEDE",
    borderRadius: 6,
    paddingHorizontal: 8,
    padding: 5,
  },
  secondRight: {
    flex: 4,
  },
  validThru_text: {
    color: "#3A3A3A",
    marginLeft: 5,
    marginBottom: 5,
  },
  validThru_inputBox: {
    borderRadius: 6,
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#DFDFDF",
  },
});
export default styles;
