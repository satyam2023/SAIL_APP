import React from "react";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  name: {
    height: 128,
    borderBottomLeftRadius: 20,
    width: "100%",
    backgroundColor: "#233972",
  },
  nameContainer: {
    flexDirection: "column",
    height: 48,
    marginTop: 12,
  },
  Welcometext: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    color: "#FFFFFF",
  },
  Welcometextname: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 24,
    color: "#FFFFFF",
  },
  circle: {
    marginTop: 15,
    marginLeft: 17,
    width: 36,
    height: 36,
    backgroundColor: "#E67437",
    borderRadius: 18,
  },
  // container: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  circleTxt: {
    alignSelf: "center",
    color: "#FFFFFF",
    height: 15,
    width: 19,
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 14,
    marginVertical: 11,
    marginHorizontal: 18,
  },
  topTxt: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  container: {
    backgroundColor: "#F9F9FC",
    flex: 1,
  },
});
export default styles;
