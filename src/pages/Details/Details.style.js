import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
  },
  top_container: {
    flex: 4.6,
    borderRadius: 15,
    backgroundColor: "white",
    margin: 15,
    marginHorizontal: 25,
    padding: 25,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  bottom_container: { flex: 5.4 },
  image: {
    height: 200,
    resizeMode: "contain",
  },
  info_container: {
    backgroundColor: "#D9DDF4",
    padding: 10,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 15,
    color: "black",
  },
  rating_container: {
    marginTop: 5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 0.5,
    borderColor: "#00000034",
    paddingTop: 5,
  },
  count: {
    color: "#272727",
  },
  rate: {
    color: "#3f51b5",
    fontSize: 16,
    fontWeight: "bold",
  },
  description_container: {
    marginTop: 5,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 15,
  },
  footer: {
    backgroundColor: "#D9DDF4",
    padding: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price_text: {
    fontSize: 20,
    color: "#3f51b5",
  },
  button: {
    backgroundColor: "#3f51b5",
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button_text: { color: "white", fontSize: 15 },
});
export default styles;
