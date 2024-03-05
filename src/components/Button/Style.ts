import React from "react";
import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    btn:{
        height:35,
      //  width:131,
        borderRadius:100,
        gap:10,
        paddingVertical:10,
        backgroundColor:'#FFFFFF', 
        marginRight:12,
        marginTop:32,
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#233972',
     },
     currentbtn:{
      height:35,
      //  width:131,
        borderRadius:100,
        gap:10,
        paddingVertical:10,
       // backgroundColor:'#EEF4FF', 
        marginRight:12,
        marginTop:32,
       backgroundColor:'#233972',
       flexDirection:'row'
     },
     txt:{
        height:15,
      //  alignSelf:'center',
        marginHorizontal:16,
        //marginTop:10,
       // paddingVertical:10,
       fontSize:14,
       fontWeight:"500",
       lineHeight:15,
       color:'#233972'

     },
     txtofuser:{
      height:15,
        marginHorizontal:16,
       fontSize:14,
       fontWeight:"500",
       lineHeight:15,
       color:'#FFFFFF'
     },
    

});
export default styles;