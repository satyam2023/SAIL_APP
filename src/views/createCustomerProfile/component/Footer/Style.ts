import { blue, grey } from "commonStyles/RNColor.style";
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  inputbox: {
    width: "100%",
    height: 56,
    borderRadius: 33,
    backgroundColor: "#FFFFFF",
    marginBottom: 16,
  },
  FooterContainer: {
    backgroundColor: "#FFFFFF",
    //flexDirection:'row',
    // justifyContent:'space-evenly',
    height: 120,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  btn: {
    marginLeft: 20,
    height: 56,
    width: 168,
    borderWidth: 1,
    borderColor: "#233972",
    borderRadius: 100,
    marginTop: 16,
  },
  probtn: {
    marginLeft: 14,
    height: 56,
    width: 168,
    borderWidth: 1,
    borderColor: "#F9F9FC",
    borderRadius: 100,
    marginTop: 16,
  },
  probtno: {
    marginLeft: 20,
    height: 56,
    width: 353,
    borderWidth: 1,
    borderColor: "#F9F9FC",
    borderRadius: 100,
    marginTop: 16,
    backgroundColor: "#F9F9FC",
  },
  TextInputs: {
    marginLeft: 21,
    backgroundColor: "#FFFFFF",
    marginTop: 16,
    height: 56,
    width: 353,
    borderRadius: 33,
    paddingLeft: 16,
    paddingVertical: 19,
  },
  DropColumn: {
    height: 56,
    width: 353,
    borderRadius: 33,
    backgroundColor: "#FFFFFF",
    marginTop: 16,
    marginLeft: 21,
    flexDirection: "row",
  },
  BottomtabStatusbox: {
    height: 6,
    marginTop: 0,
    backgroundColor: "#E8E8E8",
    width: "100%",
  },
  BottomtabStatusline: {
    height: 6,
    marginTop: 0,
    backgroundColor: "#E67337",
    width: "33.3%",
  },
  ProceedBtn: {
    height: 20,
    width: 127,
    lineHeight: 20,
    color: "#110F2480",
    fontWeight: "500",
    fontSize: 16,
    alignSelf: "center",
    marginTop: 17,
  },

  addRepresentativeBtn: {
    width: '100%',
    height: 56,
    borderRadius: 33,
    backgroundColor: "#DFDEE1",
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal:16,
    justifyContent:'space-between',
    alignItems:'center'
  },
  addBtnText: {
    color: "#233972",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 16,
  },
  //   inputbox:{
  //      width:353,
  //       height:56,
  //       borderRadius:33,
  //       marginLeft:20,
  //       backgroundColor:'#FFFFFF',
  //       flexDirection:'row',
  //       marginBottom:16,
  //  },
  inputboxno: {
    width: 353,
    height: 56,
    borderRadius: 33,
    marginLeft: 20,
    backgroundColor: "#F5F7F9",
    borderWidth: 1,
    borderColor: "red",
    flexDirection: "row",
    marginBottom: 16,
  },
  uploadText: {
    color: grey,
    fontWeight: "500",
    fontSize: 14,
  },
  locateText: {
    color: blue,
    marginLeft: 16,
    textDecorationLine: "underline",
    fontWeight: "500",
    fontSize: 14,
  },
  locateConainer: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "center",
  },
  uploadDocumentContainer: {
    width: "100%",
    height: 82,
    borderWidth: 2,
    borderColor: blue,
    borderStyle: "dashed",
    borderRadius: 33,
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9FC",
  },
  mediaText: { color: "#110F2480", fontWeight: "500", fontSize: 14 },
  mediaType: { color: "#110F2480", fontWeight: "400", fontSize: 12 },
});

export default Styles;