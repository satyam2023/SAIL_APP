import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
 dropArrow:{
    position:'absolute',
    right:20,
    transform:[{rotate:'90deg'}]
 },
  Drop: {
    height: 56,
    width: '100%',
    borderRadius: 33,
    backgroundColor: "#F5F7F9",
    marginBottom:16,
    flexDirection: "row",
    alignItems:'center',
    // justifyContent:'center',
    // justifyContent:'space-between'
  },
  droptxt: {
    width: 214,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 17.5,
    height: 18,
    marginTop: 16,
    marginLeft: 16,
  },
  img:{
    height:24,
    width:24,
    marginLeft:16,

  },
  dropText: {
    width: 87,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 17.5,
    height: 18,
    marginTop: 16,
    marginLeft: 16,
  },
  dropContainer:{
    flex:1,
    // justifyContent:'center',
    // alignItems:'center'
  },
  txt:{
    color:'#110F2480',
    marginLeft:16
  }
});
export default styles;
