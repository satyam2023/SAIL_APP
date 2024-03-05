
import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    footer:{
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height:'22%',
      backgroundColor:'#FFF'
    },
footercontainer:{
    width:'100%',
    height:'22%',
    backgroundColor:'#FFFFFF',

},
signuptxt:{
  // height:20,
  fontWeight:'500',
  fontSize:16,
  lineHeight:20,
  textAlign:'center',
  alignSelf:'center',
  color:'#110F2480',
},
lastscreencircle:{
  // marginLeft:22,
  justifyContent:'center',
  alignItems:'center',
  height:56,
  width:56,
  backgroundColor:'#F5F7F9',
  borderRadius:100,
  marginTop:16,
},
signupbtn:{
    marginTop:16,
    // marginLeft:20,
    width:'75%',
    height:56,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5F7F9',

},
signupboth:{
  marginTop:16,
  // marginLeft:15,
  width:'60%',
  height:56,
  borderRadius:100,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'#F5F7F9',
},
signupthree:{
    marginTop:16,
    // marginLeft:13,
    width:'80%',
    alignItems:'center',
    justifyContent:'center',
    height:56,
    borderRadius:100,
   
},
signupbackblue:{
  backgroundColor:'#233972',
 
},
signupbacknoblue:{
  backgroundColor:'#F5F7F9',
},
txet:{
color:'#FFFFFF',
},
txte:{
color:'#110F2480'
},
imgArrow:{
  width: 24,
  height: 24,
  resizeMode:'contain',
  gap: 10,
  transform: [{ rotate: "180deg" }],
},

circle:{
    height:56,
    width:56,
    backgroundColor:'#F5F7F9',
    borderRadius:100,
    marginLeft:20,
    marginTop:16,
},
bluecircle:{
  height:56,
  width:56,
  backgroundColor:'#F5F7F9',
  borderRadius:100,
  justifyContent:'center',
  alignItems:'center',
  // marginLeft:20,
  marginTop:16,
},
circleleft:{
  height:56,
  width:56,
  backgroundColor:'#F5F7F9',
  borderRadius:100,
  // marginLeft:20,
  justifyContent:'center',
  alignItems:'center',
  marginTop:16,
},
circleright:{
  height:56,
  width:56,
  backgroundColor:'#F5F7F9',
  borderRadius:100,
  marginLeft:15,
  marginTop:16,
},
progressbar:{
    flexDirection:'row',
    width:'100%',
    height:6,
    backgroundColor:'#F9F9FC',
},
bar:{
    backgroundColor:'#E67437',
    width:'33.3%',
},
nobar:{
  backgroundColor:'#F9F9FC',
},
alreadyAccountTxt:{
  fontWeight: "400",
  fontSize: 14,
  lineHeight: 17.5,
  color: "#110F2480",
},
signInTxt:{
  color:'#233972',
  fontWeight:'600',
},
footerBottomTxt:{
  height: 18,
  width: 236,
  marginTop: 8,
  alignSelf: "center",
  flexDirection: "row",
}
}

);
export default styles;