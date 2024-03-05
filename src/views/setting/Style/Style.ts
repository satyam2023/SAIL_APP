import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  inputbox: {
    width: "100%",
    height: 56,
    borderRadius: 33,
    backgroundColor:'#DFDEE1',
    flexDirection: "row",
    marginBottom: 16,
  },
  circle: {
    width: 54,
    height: 54,
    backgroundColor: "#E67437",
    borderRadius: 27,
    justifyContent:'center',
    alignItems:'center'
  },
  editContainer: {
    height: 36,
    paddingHorizontal:16,
    backgroundColor: "#233972",
    borderRadius: 100,
    gap: 10,
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems:'center'
  },
  editImg: { height: 16, width: 16 },
  editTxt: {
    height: 20,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 20,
    color: "#FFFFFF"
  },
  circleContent: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: 20,
  },
  userPost: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 15,
    marginLeft: 17,
    color: "#233972",
    marginTop: 7,
  },
  userName: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 15,
    marginLeft: 17,
    alignContent:'center',
    color: "#110F24",
  },
  detailContainer: { 
    flexDirection: "row", 
    marginVertical:24
},
});
export default styles;
