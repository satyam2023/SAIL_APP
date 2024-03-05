import React from "react";
import { StyleSheet } from "react-native";
const styles= StyleSheet.create({
  container:{
  flex:1,
  backgroundColor:'#FFF',
  paddingHorizontal:20,
   marginBottom:148,
  },
inputbox:{
   width:'100%',
   height:56,
   borderRadius:33,
  //  marginLeft:20,
   backgroundColor:'#F5F7F9',
   flexDirection:'row',
   marginBottom:16,
    
},
img:{
    margin:16,
    
}, 
imgverified:{
margin:16,
tintColor:'#233972',
},
 insidedropdown:{
    backgroundColor:'#FFFFFF',
  //marginTop:30,
  },
  line:{
backgroundColor:'#F9F9FC',
height:2,
  },
  modalsearchbox:{
    flexDirection: 'row',
    borderRadius: 15,
    borderColor: '#91A3B0',
    borderTopWidth:0.5,
    borderLeftWidth:2,
    borderRightWidth:4,
    borderBottomWidth:4,
    width: '93%',
    margin: 15,
    marginTop:282,
    backgroundColor: '#FFFFFF',
    justifyContent:'space-evenly'
  },
imgdrop:{
   marginVertical:16,
},
inputboxno:{
  width:'100%',
  height:56,
  borderRadius:33,
  // marginLeft:20,
  backgroundColor:'#F5F7F9',
  borderWidth:1,
  borderColor:'red',
  flexDirection:'row',
  marginBottom:16,
},
droptext:{
  marginVertical:19,
  marginLeft:24,
  height:18,
  fontWeight:'400',
  fontSize:14,
  color:'#110F24',
  lineHeight:17.5,
},
searchbox:{
    flexDirection: 'row',
    height:56,
    width:353,
    borderRadius: 33,
    marginLeft:20,
    backgroundColor:'#F5F7F9',
    marginBottom:16,
  },
  nosearchbox:{
    flexDirection: 'row',
    height:56,
    width:353,
    borderRadius: 33,
    marginLeft:20,
    backgroundColor:'#F5F7F9',
    marginBottom:16,
    borderWidth:1,
    borderColor:'red',
  },
  dropdown:{
    paddingLeft:56, 
    paddingVertical: 19,
    fontWeight:'400',
    fontSize: 14, 
    lineHeight:17.5,
  },
  dropdownnew:{
    color:'black',
  },
  dropvisible:{

  },
  dropnotvisible:{

  }
});
export default styles;


    