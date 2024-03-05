import { WindowHeight } from "libs";
import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  txt: {
    width: "50%",
    height: 60,
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 30,
    textAlign: "center",
    color: "#233972",
  },
  container: {
    height:'100%',
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    alignSelf: "center",
    height: 56,
    padding: 16,
    gap: 10,
    backgroundColor: "#233972",
    marginTop: 32,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 20,
  },
});

export default styles;
