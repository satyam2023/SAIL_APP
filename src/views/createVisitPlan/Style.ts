import React from "react";
import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    inputbox:{
        width:'100%',
        height:56,
        borderRadius:33,
        backgroundColor:'#FFFFFF',
        flexDirection:'row',
        marginBottom:16,
         
     },
     FooterContainer:{
        backgroundColor:'#FFFFFF',
        width:'100%',
        position:'absolute',
        bottom:0,
        padding:20,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
    },
    btn:{
      width:'45%',
      height:56,
      borderWidth:1,
      borderColor:'#233972',
      borderRadius:100,
      justifyContent:'center',
      alignItems:'center'
    },
    probtn:{
    height:56,
      borderWidth:1,
      borderColor:'#F9F9FC',
      borderRadius:100,
    width:'45%',
    justifyContent:'center',
    alignItems:'center'

    },

});

export default styles;