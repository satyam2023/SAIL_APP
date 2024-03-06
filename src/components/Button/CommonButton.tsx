import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "./Style";
interface ButtonProps{
    text:string
    Clickedstatus:boolean
}
const CommonButton:React.FC<ButtonProps>=({text,Clickedstatus}:ButtonProps)=>{
       
       
    return(
       
        <View style={Clickedstatus?styles.currentbtn:styles.btn}>
            <Text style={Clickedstatus?styles.txtofuser:styles.txt}>{text}</Text>
        </View>
        
    );
}
export default CommonButton;