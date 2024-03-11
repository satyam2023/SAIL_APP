import commonStyles from "commonStyles/CommonStyle";
import { Colors } from "commonStyles/RNColor.style";
import TextWrapper from "components/TextWrapper";
import React from "react";
import { StyleSheet,View } from "react-native";
import StringConstants from "shared/localization";
const ForwardCard = () => {
  return (
    <View style={styles.forwardCardContainer}>
      <View style={{ flexDirection: "row" }}>
        <TextWrapper style={[{}, commonStyles.font14RegularGray]}>
          {StringConstants.FWD_BY}
        </TextWrapper>
        <TextWrapper
          style={[
            {
              marginLeft: 11,
            },
            commonStyles.font14MediumBlack,
          ]}
        >
          {StringConstants.USER_NAME}
        </TextWrapper>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TextWrapper
          style={[
            {
              marginTop: 17,
            },
            commonStyles.font14RegularGray,
          ]}
        >
          {StringConstants.FWD_TO}
        </TextWrapper>
        <TextWrapper
          style={[
            {
              marginLeft: 11,
              marginTop: 16,
            },
            commonStyles.font14MediumBlack,
          ]}
        >
          {StringConstants.KIARA_SHARMA}
        </TextWrapper>
      </View>
      <TextWrapper
        style={[
          {
            marginTop: 17,
          },
          commonStyles.font14RegularGray,
        ]}
      >
        {StringConstants.COMMENT}
      </TextWrapper>
      <TextWrapper style={commonStyles.font14MediumBlack}>
        {StringConstants.LOREM_TEXT}
      </TextWrapper>
    </View>
  );
};
export default ForwardCard;

const styles = StyleSheet.create({
  forwardCardContainer: {
    backgroundColor: Colors.background2,
    marginTop: 16,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    width: "100%",
    padding: 16,
  },
});
