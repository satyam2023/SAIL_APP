import commonStyles from "commonStyles/CommonStyle";
import { blue } from "commonStyles/RNColor.style";
import { debounceHOC } from "hocs/debounceHOC";
import React from "react";
import { ImageURISource, Pressable, ViewStyle } from "react-native";
import { Image } from "react-native";
import { StyleSheet, Text } from "react-native";

interface Ibutton {
  onPress?: () => void;
  isDisabled?: boolean;
  text: string;
  buttonStyle?: ViewStyle;
  textStyle?: ViewStyle;
  image?: ImageURISource;
}

const CustomButton = (props: Ibutton) => {
  return (
    <Pressable
      disabled={props.isDisabled}
      style={[styles.btnContainer, props.buttonStyle]}
      onPress={props.onPress}
    >
      {props.image && <Image style={[commonStyles.leftIcon]} source={props.image} />}
      <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
    </Pressable>
  );
};

export default React.memo(debounceHOC(CustomButton));

const styles = StyleSheet.create({
  btnContainer: {
    height: 56,
    width: "100%",
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 33,
    marginTop: "3%",
    flexDirection:'row'
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: blue,
  },
  image: {
    position: "absolute",
    left: 16,
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
});
