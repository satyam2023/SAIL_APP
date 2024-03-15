import fonts from "@fonts";
import { Colors } from "commonStyles/RNColor.style";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  txt: {
    width: "50%",
    height: 60,
    fontFamily:fonts.type.medium,
    fontSize: 20,
    lineHeight: 30,
    textAlign: "center",
    color: Colors.sailBlue,
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
    backgroundColor: Colors.sailBlue,
    marginTop: 32,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: Colors.white,
    fontFamily: fonts.type.medium,
    fontSize: 16,
    lineHeight: 20,
  },
});

export default styles;
