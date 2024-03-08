import { Colors } from "commonStyles/RNColor.style";
import React from "react";
import { ImageURISource, StyleSheet,View } from "react-native";
import { Image } from "react-native";
import TextWrapper from "./TextWrapper";
interface IColumnProps {
  headingText: string;
  detailText: string;
  image:ImageURISource
}

const CustomerDetailColumn= (props:IColumnProps) => {
  return (
    <View
      style={styles.columnContainer}
    >
      <Image source={props.image} style={styles.img} />
      <View>
       <TextWrapper color={Colors.darkGrey} style={{fontSize:14}}>
        {props.headingText}
       </TextWrapper>
       <TextWrapper color={Colors.blackPeral} style={{fontSize:14,top:8}}>
        {props.detailText}
       </TextWrapper>
      </View>
    </View>
  );
};
export default CustomerDetailColumn;

const styles=StyleSheet.create({
    columnContainer:{
        width: '100%',
        backgroundColor: Colors.white,
        flexDirection: "row",
        alignItems:'center',
        padding:16
      },
      img:{
        height:38,
        width:38,
        resizeMode:'contain',
        marginRight:16
      }
})
