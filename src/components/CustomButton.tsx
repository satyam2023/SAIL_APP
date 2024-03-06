
import { blue } from "commonStyles/RNColor.style";
import { h1, w1 } from "commonStyles/RNDimension.style";
import { ImageURISource, TextProps } from "react-native";
import { Image, ImageSourcePropType } from "react-native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface IButtonStyleProps {
  height?: number;
  width?: number;
  backgroundColor: string;
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
}

interface IButtonTextProps {
  fontWeight?: "400"|"500"|"600";
  fontFamily?: string;
  fontSize?: number;
  color?: string;
}

interface Ibutton {
  onPress?:()=>void,
  isDisabled?:boolean
  text: string;
  buttonStyle?: IButtonStyleProps;
  textStyle?:IButtonTextProps;
  image?:ImageURISource;

  
}

const CustomButton = (props: Ibutton) => {
  return (
    <TouchableOpacity disabled={props.isDisabled} style={[styles.btnContainer, props.buttonStyle,{backgroundColor:props.isDisabled?"red":"green"}]} onPress={props.onPress}>
      {props.image && <Image style={[styles.image]} source={props.image}/>}
      <Text style={[styles.text,props.textStyle]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnContainer: {
    height:h1,
    width:w1,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:33,
    marginTop:'3%'
  },
  text:{
    fontSize:16,
    fontWeight:'500',
    color:blue,
  },
  image:{
    position:'absolute',
    left:16,
    height:20,
    width:20,
    resizeMode:'contain',
  }
});
