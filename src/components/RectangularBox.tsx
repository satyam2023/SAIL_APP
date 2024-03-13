import React from "react";
import {
  Image,
  ImageURISource,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import Glyphs from "assets/Glyphs";
import { Colors } from "commonStyles/RNColor.style";
import StringConstants from "shared/localization";
import TextWrapper from "./TextWrapper";
import commonStyles from "commonStyles/CommonStyle";

interface IcustomerBox {
  onPress?: Function;
  isCustomerDetailVisible?: boolean;
  style?: ViewStyle;
  heading: string;
  subHeading: string;
  leftIcon: ImageURISource;
  isCustomerColumn?: boolean;
  isClosable?: boolean;
}

const RectangularBox = (props: IcustomerBox) => {
  return (
    <View
      style={[
        [
          styles.container,
          props?.style,
          { height: props.isCustomerColumn ? 56 : 70 },
          {
            paddingHorizontal:
              props.isCustomerColumn || props.isClosable ? 0 : 16,
          },
        ],
      ]}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={props.leftIcon} style={commonStyles.leftIcon} />
        <View>
          <TextWrapper style={commonStyles.font14RegularDarkGray}>
            {props.heading ? props.heading : StringConstants.CUSTOMER_VISIT_1}
          </TextWrapper>
          <TextWrapper
            style={[commonStyles.font14MediumBlackpearl, { marginTop: 8 }]}
          >
            {props.subHeading
              ? props.subHeading
              : StringConstants.XYZ_STEELWORKS}
          </TextWrapper>
        </View>
      </View>
      {!props.isCustomerColumn && (
        <TouchableOpacity
          onPress={() => {
            {
              props.onPress && props.onPress();
            }
          }}
        >
          <Image
            source={Glyphs.Arrow}
            style={
              props.isCustomerDetailVisible
                ? { transform: [{ rotate: "270deg" }] }
                : { transform: [{ rotate: "90deg" }] }
            }
          />
        </TouchableOpacity>
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
    borderRadius: 10,
    flexDirection: "row",
    // paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  img: {
    transform: [{ rotate: "90deg" }],
  },
});
