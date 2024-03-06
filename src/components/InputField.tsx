import React from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";

interface IinputField{
placeholder:string,
leftIcon?:string,
errormsg?:string,
secureText?:boolean,
inputMode?:string,
length:number,
onChangeText:()=>void;

}




const InputField=({placeholder,leftIcon,errormsg,secureText,inputMode,length}:IinputField)=>{

    return(
        <TouchableOpacity style={styles.textContainer}>
            <TextInput
             placeholder={placeholder}
             inlineImageLeft={leftIcon}
             secureTextEntry={secureText}

            
            />
        </TouchableOpacity>
    )

};

const styles=StyleSheet.create({
    textContainer:{
        width:'100%',
        paddingVertical:19,
        paddingHorizontal:16,
    }
})