import fonts from "@fonts";
import { Colors } from "commonStyles/RNColor.style";
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
        
    },
    btn:{
        width:'100%',
        height:58,
        backgroundColor:'#FFFFFF',
        borderRadius:33,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:16

    },
    Txt:{
        height:16,
        color:Colors.sailBlue,
        fontFamily:fonts.type.medium,
        fontSize:14,
        
    },
    img:{ height: 16, width: 16,resizeMode:'contain'}
});
export default styles;