import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#DBDBDBC5",
    marginHorizontal: 10,
    marginVertical: 5,
    justifyContent: "space-between",
    borderRadius: 13,
  },
  leftCorner: {
    backgroundColor: "#DBDBDBC5",
    justifyContent: "center",
    alignItems: "flex-start",
    width: 75,
    borderTopLeftRadius: 13,
    borderBottomLeftRadius: 13,
  },
  rightCorner: {
    flexDirection: "row",
  },
  buttonRight_Left: {
    backgroundColor: "#347BCD",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
  },
  buttonRight_Right: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13,
  },
  trash: {
    
  },
});
export default styles;
