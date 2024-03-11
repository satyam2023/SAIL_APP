import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Glyphs from "assets/Glyphs";
import { Colors } from "commonStyles/RNColor.style";
import TextWrapper from "components/TextWrapper";
import StringConstants from "shared/localization";
import commonStyles from "commonStyles/CommonStyle";

interface CardProps {
  issue: string;
  pending: string;
  date: string;
}

const DetailsCard = ({ issue, date, pending }: CardProps) => {
  return (
    <View style={styles.detailcardContainer}>
      <TextWrapper style={commonStyles.font14RegularGray}>
        {StringConstants.ISSUE_TYPE}
      </TextWrapper>
      <TextWrapper style={commonStyles.font14RegularBlack}>{issue}</TextWrapper>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ marginTop: 16, flexDirection: "row" }}>
          <Image source={Glyphs.Pending} />
          <View style={{ marginLeft: 8 }}>
            <TextWrapper style={commonStyles.font12RegularGrey}>
              {StringConstants.PENDING_WITH}
            </TextWrapper>
            <TextWrapper
              style={[commonStyles.font14MediumBlack, { bottom: 8 }]}
            >
              {pending}
            </TextWrapper>
          </View>
        </View>
        <View style={{ marginTop: 16, flexDirection: "row" }}>
          <Image source={Glyphs.date} />
          <View style={{ marginLeft: 8 }}>
            <TextWrapper style={commonStyles.font12RegularGrey}>
              {StringConstants.ISSUE_DATE}
            </TextWrapper>
            <TextWrapper
              style={[commonStyles.font14MediumBlack, { bottom: 8 }]}
            >
              {date}
            </TextWrapper>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailsCard;

const styles = StyleSheet.create({
  detailcardContainer: {
    height: 123,
    width: "100%",
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginTop: 24,
    padding: 16,
  },
});
