import React from "react";
import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    headerContainer:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        width:'100%'
      
    },
header:{
    // height:121,
    backgroundColor:'#F9F9FC',
    width:'100%',
   
   
},
insideHeader:{
    height:48,
    width:321,
    marginLeft:34,
    marginTop:26,
    flexDirection:'row'
},
firstCircle:{
    width:48,
    height:48,
   borderRadius:24,
    backgroundColor:'#E67437',
    marginLeft:6
},
numberstyle:{
    fontWeight:'500',
    fontSize:16,
    lineHeight:24,
    color:'#FFFFFF',
    height:24,
    width:6,
    marginLeft:21,
    marginTop:12,
    textAlign:'center'
},
emptyLine:{
    width:75,
    height:2,
    backgroundColor:'#65C000',
    marginTop:22,
    marginLeft:4

},
circleBottomText:{
    fontWeight:'500',
    fontSize:10,
    lineHeight:15,
    color:'#110F24',
    height:15,
    marginTop:7
},
footerContainer:{
    width:'100%',
    backgroundColor:'#FFFFFF',
    flexDirection:'row',
    position:'absolute',
    bottom:0,
    paddingHorizontal:20,
    justifyContent:'space-between',
    alignItems:'center',
   height:'15%'
},
editBtn:{
    width:'45%',
    height:56,
    borderRadius:100,
    borderWidth:1,
    borderColor:'#233972',
    backgroundColor:'#FFFFFF',
   justifyContent:'center',
   alignItems:'center',
},
editTxt:{
    fontWeight:'500',
    fontSize:16,
    lineHeight:20,
    color:'#233972',
},
proceedTxt:{
    fontWeight:'500',
    fontSize:16,
    lineHeight:20,
    color:'#FFFFFF',
},
inputbox:{
    width:'100%',
     height:56,
     borderRadius:33,
     backgroundColor:'#FFFFFF',
     flexDirection:'row',
     marginBottom:16,
     alignItems:'center',
     justifyContent:'space-between',
    //  paddingHorizontal:16,
},
updateHeaderBtn:{
    backgroundColor:'#233972',
    width:100,
    height:36,
    borderRadius:100,
    gap:10,
   position:'absolute',
   top:10,
   right:10,


},
updateTxt:{
    alignSelf:'center',
    alignItems:'center',
    fontWeight:'500',
    color:'#FFFFFF',
    fontSize:16,
    lineHeight:20,
    marginTop:6
    
}
});

export default styles;