import React from "react";
import Header from "components/HeaderForMainScreen/HeaderMain";
import {View } from "react-native";
import styles from "./Style";
import StringConstants from "shared/localization";
import TextWrapper from "components/TextWrapper";
import InputTextField from "components/InputTextField";
import { Colors } from "commonStyles/RNColor.style";
import CustomButton from "components/CustomButton";
import fonts from "@fonts";

interface ProfileHeaderProps {
  CurrentScreen: number;
}
const ProfileHeader = ({ CurrentScreen }: ProfileHeaderProps) => {
  return (
    <View
      style={[
        styles.headerContainer,
        CurrentScreen != 1 ? { height: 121 } : {},
        { flex: 1 },
      ]}
    >
      <Header topheading={StringConstants.VIEW_CUSTOMER_PROFILE} />
      <View style={styles.header}>
        <View style={styles.insideHeader}>
          <View
            style={[
              styles.circle,
              CurrentScreen != 1 ? { backgroundColor: Colors.lightGray2 } : {},
            ]}
          >
            <TextWrapper style={styles.numberstyle}>
              {StringConstants.ONE}
            </TextWrapper>
          </View>

          <View style={styles.emptyLine} />
          <View
            style={[
              styles.circle,
              CurrentScreen != 2 ? { backgroundColor: Colors.lightGray2 } : {},
            ]}
          >
            <TextWrapper style={[styles.numberstyle, { width: 10 }]}>
              {StringConstants.TWO}
            </TextWrapper>
          </View>
          <View style={styles.emptyLine} />
          <View
            style={[
              styles.circle,
              CurrentScreen != 3 ? { backgroundColor: Colors.lightGray2 } : {},
            ]}
          >
            <TextWrapper style={[styles.numberstyle, { width: 10 }]}>
              {StringConstants.THREE}
            </TextWrapper>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TextWrapper style={styles.circleBottomText}>
            {StringConstants.CUSTOMER_DETAIL}
          </TextWrapper>
          <TextWrapper style={styles.circleBottomText}>
            {StringConstants.REPRESENTATIVE_DETAILS}
          </TextWrapper>
          <TextWrapper style={styles.circleBottomText}>
            {StringConstants.COMPETITOR}
          </TextWrapper>
        </View>

        {CurrentScreen == 1 && (
          <View style={{ paddingHorizontal: 20, marginTop: 16 }}>
            <View style={styles.sapCodeContainer}>
              <InputTextField
                onChangeText={() => {}}
                placeholder={StringConstants.ENTER_SAP_CODE}
                containerStyle={styles.inputContainer}
              />
              <CustomButton
                text={StringConstants.UPDATE}
                buttonStyle={{
                  backgroundColor: Colors.sailBlue,
                  width: "30%",
                  height: 30,
                }}
                textStyle={{
                  color: Colors.white,
                  fontFamily: fonts.type.medium,
                }}
              />
            </View>
            <TextWrapper style={styles.plsText}>
              {StringConstants.PLS_ENTER_GST_PAN}
            </TextWrapper>
          </View>
        )}
      </View>
    </View>
  );
};
export default ProfileHeader;
