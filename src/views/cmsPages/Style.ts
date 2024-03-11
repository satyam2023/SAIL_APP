import React from "react";
import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    container:{
        height: 62,
        width:'100%',
        borderRadius: 4,
        backgroundColor: "#FFFFFF",
        marginBottom: 16,
        flexDirection: "row",
        justifyContent:'space-between',
        paddingHorizontal:16
      },
     privacytext:{lineHeight:24,
        fontWeight:'400',
        fontSize:12,
        color:'#000000',
        marginTop:24,
        marginBottom:20,
        },
        privacuinnrttext:{
            fontWeight:'500',
            marginTop:30,
           
        },
        txt:{
            height: 25,
            fontWeight: "500",
            fontSize: 14,
            lineHeight: 24,
            color: "#110F24",
            marginTop: 19,
          },
          img:{
            height: 100,
            width: 100,
            resizeMode: "contain",
            marginTop: 20,
          }

});

export default styles;