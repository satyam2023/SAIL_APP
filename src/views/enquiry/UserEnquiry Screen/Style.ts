import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  nameContainer: {
    color: "#110F2480",
    position: "absolute",
    top: 9,
    left: 27,
    fontWeight: "400",
    fontSize: 12,
    height: 15,
    lineHeight: 12,
  },

  TextInput: {
    height: 56,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    borderRadius: 33,
  },
  location: {
    height: 56,
    width: '100%',
    marginTop: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 33,
    flexDirection: "row",
    justifyContent:'space-between',
    paddingHorizontal:16
  },
  locationConatiner: {
    marginLeft: 16,
    borderBottomWidth: 1,
    borderColor: "#E6E6E6",
  },
  searchbtn: {
    height: 56,
    width: '100%',
    marginTop: 16,
    backgroundColor: "#DFDEE1",
    borderRadius: 33,
    flexDirection: "row",
  },
  searchbtns: {
    height: 56,
    width: '100%',
    marginTop: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 33,
    borderWidth: 1,
    borderColor: "#233972",

    flexDirection: "row",
  },
  nameNotFocus: {
    color: "#110F24",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 15,
  },
  nameFocus: {
    color: "#110F24",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 15,
    position: "absolute",
    top: 25,
    left:26
  },
  locationDropDown: {
    color: "#110F2480",
    position: "absolute",
    top: 9,
    left: 24,
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 12,
    height: 15,
  },
  locationNotFocusText: {
   //  width: 106,
    height: 18,
   //  marginLeft: 16,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 17.5,
    marginTop: 19,
  },
  locationFocusText: {
   //  width: 106,
    height: 18,
   //  marginLeft: 24,
    fontWeight: "400",
    color: "#110F24",
    fontSize: 14,
    marginLeft:9,
    lineHeight: 17.5,
    marginTop: 24,
  },
  arrow: {
    tintColor: "#110F2480",
    transform: [{ rotate: "90deg" }],
   //  marginLeft: 187,
    marginTop: 16,
  },
  searchTxt: {
    width: 106,
    color: "#110F2480",
    height: 18,
    marginHorizontal: 152,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 17.5,
    marginTop: 19,
  },
  locationFlatlist: {
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    marginTop: 5,
    borderRadius: 20,
  },
});
export default styles;
