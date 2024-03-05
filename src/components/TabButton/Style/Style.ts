import { orange } from "commonStyles/RNColor.style";
import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  conatiner: {
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    width: 56,
    backgroundColor: orange,
    borderRadius: 28,
    position: "relative",
    bottom: "10%",
  },
});

export default styles;
