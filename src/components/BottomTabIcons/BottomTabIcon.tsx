import React from "react";
import { Image } from "react-native";



interface IbottomTabIcon{
    image:string
}

const BottomTabIcon=({image}:IbottomTabIcon)=>{


    return(

        <Image source={image}  style={{height:20,width:20,resizeMode:'contain'}}/>
    )
};
export default BottomTabIcon;