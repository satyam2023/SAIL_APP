import React from "react";
import {
  Image,
  ImageURISource,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import Glyphs from "assets/Glyphs";
import { Colors } from "commonStyles/RNColor.style";
import TextWrapper from "../TextWrapper";
import commonStyles from "commonStyles/CommonStyle";
import { PressableButton } from "components";

interface IcustomerBox {
  onPress?: Function;
  isCustomerDetailVisible?: boolean;
  style?: ViewStyle;
  heading: string;
  subHeading: string;
  leftIcon?: ImageURISource;
  isCustomerColumn?: boolean;
  isClosable?: boolean;
  isRightNotIconRequired?: boolean;
}

const RectangularBox = (props: IcustomerBox) => {
  const isDetailVisible = props.isCustomerColumn || props.isClosable;
  return (
    <View
      style={[
        [
          styles.container,
          props?.style,
          { height: props.isCustomerColumn ? 56 : 70 },
          {
            marginBottom: isDetailVisible ? 0 : 16,
          },
        ],
      ]}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {props.leftIcon && (
          <Image source={props.leftIcon} style={commonStyles.leftIcon} />
        )}
        <View >
          <TextWrapper style={commonStyles.font14RegularDarkGray}>
            {props.heading }
          </TextWrapper>
          <TextWrapper style={[commonStyles.font14MediumBlackpearl]}>
            {props.subHeading}
          </TextWrapper>
        </View>
      </View>
      {!props.isRightNotIconRequired && (
        <>
          {!props.isCustomerColumn && (
            <PressableButton
              onPress={() => {
                {
                  props.onPress && props.onPress();
                }
              }}
            >
              <Image
                source={Glyphs.Arrow}
                style={[
                  props.isCustomerDetailVisible
                    ? { transform: [{ rotate: "180deg" }] }
                    : { transform: [{ rotate: "0deg" }] },
                  commonStyles.icon,
                  { bottom: props.isClosable ? 10 : 0 },
                ]}
              />
            </PressableButton>
          )}
        </>
      )}
    </View>
  );
};

export default RectangularBox;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    backgroundColor: Colors.white,
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    transform: [{ rotate: "90deg" }],
  },
});
