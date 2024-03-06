import React from "react";
import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#FFFFFF", 
        paddingHorizontal:20,
    },
    inputbox:{
        width:'100%',
        height:56,
        borderRadius:33,
        // marginLeft:20,
        backgroundColor:'#F5F7F9',
        flexDirection:'row',
        marginBottom:16,
         
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
     
     
     img:{
         margin:16,
     },
     imgdrop:{
        marginVertical:22,
     },
     imgverified:{margin:16,
    tintColor:'rgba(35, 57, 114, 1)'}
});
export default styles;