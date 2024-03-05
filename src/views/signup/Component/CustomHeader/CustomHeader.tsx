import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./Style";
import { SafeAreaView } from "react-native";
import Glyphs from "assets/Glyphs";
interface HeaderProps{
  details:string,
}

const CustomHeader=({details}:HeaderProps)=>{
    return (<SafeAreaView style={{flex:1,marginBottom:16,}}>
        <Image source={Glyphs.Hands} style={styles.img} />
       <View style={{width:252,height:63,top:10,alignSelf:'center'}}>
<Text style=
{{fontWeight:'700',fontSize:24,lineHeight:31.2,color:'#233972',textAlign:'center'}}>
    Sign Up
</Text>
<Text style={{fontWeight:'400',fontSize:16,textAlign:'center', justifyContent:'center',alignItems:'center',lineHeight:20,color:'#110F2480'}}>
{details}
</Text>
       </View>
    </SafeAreaView>);
}

export default CustomHeader;