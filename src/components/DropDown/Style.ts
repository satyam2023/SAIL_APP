import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  DropColumn: {
    height: 56,
    width: "100%",
    borderRadius: 33,
    backgroundColor: "#FFFFFF",
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  Drop: {
    height: 56,
    width: "100%",
    borderRadius: 33,
    backgroundColor: "#FFFFFF",
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  droptxt: {
    width: 214,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 17.5,
    height: 18,
    marginTop: 16,
  },
  dropText: {
    width: 87,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 17.5,
    height: 18,
    marginTop: 16,
  },
  listContainer: {
    marginHorizontal: 21,
    backgroundColor: "#FFFFFF",
    height: 56,
    borderBottomWidth: 1,
    borderColor: "#E6E6E6",
  },
  listText: {
    textAlign: "left",
    color: "black",
    marginLeft: 24,
    marginTop: 14,
    height: 20,
  },
  floatingContainer: { position: "absolute", top: 25, left: 24, zIndex: 2 },
  floatingText: { fontWeight: "400", fontSize: 12 },
  arrowImg: {
    tintColor: "#110F2480",
    transform: [{ rotate: "90deg" }],
    marginTop: 16,
  },
  dropTextContainer:{ fontWeight: "400",
  fontSize: 14,
  lineHeight: 17.5,
  height: 18,
  marginTop: 16,}
});
export default styles;
