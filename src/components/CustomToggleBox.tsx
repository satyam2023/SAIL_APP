import commonStyles from "commonStyles/CommonStyle";
import { debounceHOC } from "hocs/debounceHOC";
import { ImageURISource, Pressable, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import TextWrapper from "./TextWrapper";
import { useState } from "react";
import { Colors } from "commonStyles/RNColor.style";
import { Image } from "react-native";
import Glyphs from "assets/Glyphs";

interface ICustomToggleBox {
  heading: string;
  leftIcon?: ImageURISource;
  rightIconisPlus?: boolean;
  toggleContent: string;
}

const CustomToggleBox = (props: ICustomToggleBox) => {
  const Press = debounceHOC(Pressable);
  const [isToggleContentVisible, setIsToggleCOntentVisible] =
    useState<boolean>(false);
  return (
    <View style={{marginBottom:16}}>
      <Press
        style={[styles.toggleContainer]}
        onPress={() => {
          setIsToggleCOntentVisible(!isToggleContentVisible);
        }}
      >
        <View style={{ flexDirection: "row" }}>
          {props.leftIcon && (
            <Image source={props.leftIcon} style={commonStyles.leftIcon} />
          )}
          <TextWrapper style={commonStyles.font14MediumBlack}>
            {props.heading}
          </TextWrapper>
        </View>
        <Image
          source={
            props.rightIconisPlus
              ? isToggleContentVisible
                ? Glyphs.PlusToggle
                : Glyphs.Minus
              : isToggleContentVisible
              ? Glyphs.UpArrow
              : Glyphs.DownArrow
          }
          style={styles.img}
        />
      </Press>
      {isToggleContentVisible && (
        <View style={{ backgroundColor: Colors.white, padding: 16 }}>
          <TextWrapper style={commonStyles.font14RegularBlack}>
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
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
});
