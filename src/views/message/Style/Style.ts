import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  boxText: {
    height: 14,

    fontWeight: "400",
    fontSize: 14,
    lineHeight: 14,
    color: "#110F2480",
    marginTop: 16,
  },

  boxTextinner: {
    height: 25,

    fontWeight: "500",
    fontSize: 14,
    lineHeight: 16,
    color: "#110F24",
    marginTop: 8,
  },

  img: {
    transform: [{ rotate: "0deg" }],
    marginTop: 19,
  },

  box: {
    height: 62,
    width: "100%",
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  escalateBox: {
    borderWidth: 1,
    borderColor: "#E6E6E6",
    marginTop: 16,
    borderRadius: 33,
    height: 58,
    flexDirection: "row",
    paddingHorizontal:16,
    justifyContent:"space-between"
  },
  submitBox: {
   width:'100%',
    height: 58,
    backgroundColor: "#233972",
    marginVertical: 16,
    borderRadius: 33,
  },

  submitTxt: {
    textAlign: "center",
    fontWeight: "600",
    color: "#FFFFFF",
    lineHeight: 20,
    marginTop: 18,
    fontSize: 16,
  },

  commentBox: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 33,
    height: 200,
    paddingHorizontal:16
  },
  commentTxt: {
    color: "black",
    fontWeight: "400",
    // marginLeft: 16,
    marginTop: 8,
  },
});
export default styles;
