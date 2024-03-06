import React from "react";
import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    box:{
        width:"100%",
        height:152,
        marginTop:18,
        backgroundColor:'#FFFFFF',
        // justifyContent:'center',
        // alignItems:'center',
        // zIndex:300,
    },
    img:{
        alignSelf:'center',
        height:36,
        width:36,
        marginTop:16,
        // marginHorizontal:74,
    },
    lineBtwProduct:{
        width:30,
        backgroundColor:'#F9F9FC',
        transform:[{rotate:'90deg'}],
        height:2,
    }

});
export default styles;