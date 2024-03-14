import fonts from "@fonts";
import { Colors } from "commonStyles/RNColor.style";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  visitContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    position: "relative",
    bottom: 68,
    paddingHorizontal: 20,
  },
  topContainer: {
    height: 128,
    borderBottomLeftRadius: 20,
    width: "100%",
    backgroundColor: Colors.sailBlue,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  welcometext: {
    fontFamily: fonts.type.regular,
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 12,
  },
  circle: {
    marginTop: 15,
    marginLeft: 17,
    width: 36,
    height: 36,
    backgroundColor: "#E67437",
    borderRadius: 18,
  },

  circleTxt: {
    alignSelf: "center",
    color: Colors.white,
    height: 15,
    width: 19,
    fontFamily: fonts.type.medium,
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
  img: {
    marginTop: 21,
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
});
export default styles;
