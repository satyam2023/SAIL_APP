import React from "react";
import { Image, ImageStyle, ImageURISource, StyleProp } from "react-native";

interface IbottomTabIcon {
  image: ImageURISource;
  tintColor?:string;

}

const BottomTabIcon = (props: IbottomTabIcon) => {
  return (
    
    <Image
      source={props.image}
      style={{ height: 20, width: 20, resizeMode: "contain",bottom:5, 
       
      tintColor:props?.tintColor
    
    }}
      
    
    />
   
  );
};
export default BottomTabIcon;
