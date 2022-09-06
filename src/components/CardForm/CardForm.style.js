import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingHorizontal: 10,
  },

  input_box: {
    backgroundColor: "#DFDFDF",
    borderRadius: 6,
    padding: 5,
    paddingHorizontal: 8,
    //   borderColor: "#2161F5",
  //  borderBottomWidth: 1,
  },
  input_header: {
    color: "#3A3A3A",
    marginLeft: 5,
    marginBottom: 5,
  },
  input: {
    color: "black",
    fontSize: 15,
    padding: 1,
    paddingHorizontal: 5,
  },

  firstLine: {
    marginTop: 15,
  },
  secondLine: {
    marginTop: 15,
  },
  thirdLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  thirdLeft: {
    flex: 1,
    marginRight: 15,
  },

  thirdRight: {
    flex: 1,
  },
  validThru_inputBox: {
    borderRadius: 6,
    padding: 5,
    flexDirection: "row",
    backgroundColor: "#DFDFDF",
    paddingHorizontal: 8,
  },
  focused: {
    borderColor: "#2161F5",
    borderBottomWidth: 1,
  },
});
export default styles;
