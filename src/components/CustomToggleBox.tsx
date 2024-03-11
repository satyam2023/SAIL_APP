import commonStyles from "commonStyles/CommonStyle";
import { debounceHOC } from "hocs/debounceHOC";
import { ImageStyle, ImageURISource, Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import TextWrapper from "./TextWrapper";
import React, {useState } from "react";
import { Colors } from "commonStyles/RNColor.style";
import { Image } from "react-native";
import Glyphs from "assets/Glyphs";

interface ICustomToggleBox {
  heading: string;
  leftIcon?: ImageURISource;
  rightIconisPlus?: boolean;
  toggleContent: string | React.ReactNode;
  style?:ViewStyle
  iconStyle?:StyleProp<ImageStyle> 
  isNotificationDate?:string
}

const CustomToggleBox = (props: ICustomToggleBox) => {
  console.log("PLUS ICON STATUS::",props.rightIconisPlus);
  const Press = debounceHOC(Pressable);
  const [isToggleContentVisible, setIsToggleCOntentVisible] =
    useState<boolean>(false);
  return (
    <View style={[{marginBottom:16}]}>
      <Press
        style={[styles.toggleContainer]}
        onPress={() => {
          setIsToggleCOntentVisible(!isToggleContentVisible);
        }}
      >
        <View style={{ flexDirection: "row" }}>
          {props.leftIcon && (
            <Image source={props.leftIcon} style={[!props.isNotificationDate?commonStyles.leftIcon:styles.leftIcon]} />
          )}
          <View>
          <TextWrapper style={commonStyles.font14MediumBlack}>
            {props.heading}
          </TextWrapper>
          {props.isNotificationDate && <TextWrapper style={[commonStyles.font14RegularGray,{marginTop:6}]}> {props.isNotificationDate}</TextWrapper>}
          </View>
        </View>
        <Image
          source={
            props.rightIconisPlus
              ? isToggleContentVisible
              ? Glyphs.Minus
              : Glyphs.PlusToggle
              : isToggleContentVisible
              ? Glyphs.UpArrow
              : Glyphs.DownArrow
          }
          style={styles.img}
        />
      </Press>
      {isToggleContentVisible && (
        <View style={{ backgroundColor: Colors.white, padding: 16 ,paddingTop:0}}>
          <TextWrapper style={commonStyles.font14MediumBlack}>
            {props.toggleContent}
          </TextWrapper>
        </View>
      )}
    </View>
  );
};

export default CustomToggleBox;

const styles = StyleSheet.create({
  toggleContainer: {
    width: "100%",
    backgroundColor:Colors.white,
    alignItems: "center",
    justifyContent: "space-between",
    padding:16,
    flexDirection:'row',
  },
  img: {
    height: 12,
    width: 12,
    resizeMode: "contain",
  },
  leftIcon:{
    height:40,
    width:40,
    resizeMode:'contain',
    marginRight:16
  }
});
