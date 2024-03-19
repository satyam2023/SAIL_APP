import { Colors} from "commonStyles/RNColor.style";
import React, {  useEffect, useState } from "react";
import {
  Image,
  ImageURISource,
  InputModeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import fonts from "@fonts";
import Glyphs from "assets/Glyphs";
import commonStyles from "commonStyles/CommonStyle";
import PressableButton from "components/DeBouncePressable";
import StringConstants from "shared/localization";

interface ITextField {
  onChangeText: (text: string) => void;
  leftIcon?: ImageURISource;
  rightIcon?: ImageURISource;
  placeholder: string;
  error?: string;
  containerStyle?: ViewStyle;
  labelStyle?: ViewStyle;
  isEditable?: boolean;
  maxlength?: number;
  inputMode?: InputModeOptions;
  eyeIcon?: ImageURISource;
  onRighIconPress?: () => void;
  defaultValue?: string;
  textStyle?:StyleProp<TextStyle>;
  multiline?:boolean;
  
}

const InputTextField = ({maxlength=20,...props}: ITextField) => {
  const [secureText, setSecuretext] = useState<boolean>(false);
  const [textFocusStatus, setTextFocusStatus] = useState<boolean>(false);
  useEffect(() => {
    if (props.defaultValue) setTextFocusStatus(true);
  }, []);

  return (
    <>
      <View
        style={[
          styles.inputContainer,
          props.containerStyle,
          props.error?.length ? styles.errorBox : {},
        ]}
      >
        {props.leftIcon && (
          <Image source={props.leftIcon} style={commonStyles.leftIcon}  />
        )}

        <View>
          {textFocusStatus && (
            <Text style={styles.lable}>{props.placeholder}</Text>
          )}
          <TextInput
            editable={props.isEditable}
            placeholder={!textFocusStatus ? props?.placeholder : StringConstants.EMPTY}
            onChangeText={(text: string) => {
              props.onChangeText(text);
            }}
            placeholderTextColor={Colors.darkGrey}
            onFocus={() => {
              setTextFocusStatus(true);
            }}
            onBlur={() => {
              // setTextFocusStatus(false);
            }}
            inputMode={props.inputMode}
            maxLength={maxlength}
            secureTextEntry={secureText}
            defaultValue={props?.defaultValue} 
            style={props.textStyle}
            multiline={props.multiline}
            contextMenuHidden={true}
            removeClippedSubviews={true} 
          />
        </View>
        {props.eyeIcon && (
          <PressableButton
            style={styles.rightIconContainer}
            onPress={() => {
              setSecuretext(!secureText);
            }}
          >
            <Image
              source={!secureText ? Glyphs.Eye : Glyphs.EyeCut}
              style={styles.rightIcon}
            />
          </PressableButton>
        )}
        {props.rightIcon && (
          <PressableButton
            style={styles.rightIconContainer}
            onPress={props.onRighIconPress}
          >
            <Image source={props.rightIcon} style={styles.rightIcon} />
          </PressableButton>
        )}
      </View>
      {props.error && (
        
        <View style={{ bottom: 12 }}>
          <Text style={styles.errorMsg}>{props.error}</Text>
        </View>
      )}
    </>
  );
};

export default  React.memo(InputTextField);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    height: 56,
    backgroundColor: Colors.inputBG,
    alignItems: "center",
    paddingHorizontal: 16,
    borderRadius: 33,
    marginBottom: 16,
  },
  errorMsg: {
    color: Colors.red,
    fontSize: 14,
    marginLeft: 16,
    fontFamily: fonts.type.regular,
  },
  placeholderText: {
    color: Colors.greyDark,
  },
  rightIcon: {
    height: 15,
    width: 15,
    resizeMode: "contain",
  },
  rightIconContainer: {
    position: "absolute",
    right: 16,
  },
  eyeIcon: {
    height: 24,
    width: 17,
    right: 24,
    resizeMode: "contain",
  },
  lable: {
    color: Colors.darkGrey,
    bottom:5,
    fontFamily: fonts.type.regular,
    fontSize: 12,
    
  },
  errorBox: {
    borderWidth: 1,
    borderColor: Colors.red,
  },
});
