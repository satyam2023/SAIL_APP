import React from "react";
import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import Glyphs from "assets/Glyphs";
 
interface Props{
    setScreen:Function,
}


const Contact:React.FC<Props>=({setScreen}:Props)=>{
    return(
        <View>
            <SafeAreaView>
        <StatusBar backgroundColor={'#233972'} barStyle={'light-content'}/>
            <View style={{height:60,width:'100%',backgroundColor:'#233972',flexDirection:'row'}}>
             <TouchableOpacity style={{marginLeft:21,marginTop:18}} onPress={()=>{setScreen("CMS")}}>
                 <Image source={Glyphs.Arrow} style={{tintColor:'#FFFFFF',width:9,height:15,transform: [{ rotate: '180deg' }],}}/>
                 </TouchableOpacity> 
                <Text style={{marginTop:13,color:'#FFFFFF',marginLeft:16,height:36,fontWeight:"600",fontSize:16}}>Contact Us</Text>
            </View>
    </SafeAreaView>
            
        </View>
    );
};

export default Contact;