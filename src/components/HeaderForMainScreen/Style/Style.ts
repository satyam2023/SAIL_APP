import fonts from "@fonts";
import { Colors } from "commonStyles/RNColor.style";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    width: "100%",
    backgroundColor: "#233972",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  img: {
    tintColor: Colors.white,
    width: 15,
    height: 15,
    transform: [{ rotate: "180deg" }],
  },
  headingContent: {
    color: Colors.white,
    marginLeft: 16,
    fontFamily: fonts.type.bold,
    fontSize: 16,
  },
});

export default styles;
