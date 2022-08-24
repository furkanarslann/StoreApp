import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#ffffff",
  },
  image: {
    width: 300,
    height: 240,
    resizeMode: "contain",
  },
  text: {
    color: "#000000",
    fontSize: 22,
  },
  text_second: {
    color: "#A1A1A1",
    fontSize: 13,
    marginTop: 5,
    marginBottom: 1,
    textAlign: "center",
  },
  top: {
    alignItems: "center",
  },
  button: {
    borderColor: "#0FC8A0",
    borderWidth: 1,
    marginTop: 25,
    padding: 5,
    paddingVertical: 10,
    borderRadius: 15,
    paddingHorizontal: 16,
  },
  button_text: {
    fontWeight: "700",
    color: "#0FC8A0",
    fontSize: 14,
  },
});
export default styles;
