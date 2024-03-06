import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    backgroundColor: "#233972",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal:20
  },
  txt: {
    color: "#FFFFFF",
    width: "auto",
    fontWeight: "600",
    fontSize: 16,
    marginLeft:16,
  },
  logout: { width: 20 },
  img: {
    tintColor: "#FFFFFF",
    width: 9,
    transform: [{ rotate: "180deg" }],
  },
  logoutTxt: {
    color: "#FFFFFF",
    width: "auto",
    fontWeight: "600",
    fontSize: 16,
    marginLeft:10
  },
  viewStyling: { flexDirection: "row",},
});

export default styles;
