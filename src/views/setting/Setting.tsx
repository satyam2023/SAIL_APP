import React, { useRef, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import InputTextField from "components/InputTextField";
import { ITextFieldData, TextFieldData } from "./mockData/TextFieldData";
import styles from "./Style/Style";
import Glyphs from "assets/Glyphs";
import { ScrollView } from "react-native";
import { Colors } from "commonStyles/RNColor.style";
import Header from "components/HeaderForMainScreen/HeaderMain";
import StringConstants from "shared/localization";
import TextWrapper from "components/TextWrapper";
import fonts from "@fonts";
import commonStyles from "commonStyles/CommonStyle";
import CustomButton from "components/CustomButton";
const SettingScreen = () => {
  function renderItem(item: ITextFieldData) {
    return (
      <InputTextField
        onChangeText={() => {}}
        containerStyle={{ backgroundColor: Colors.lightGray }}
        placeholder={item.placeholder}
        maxlength={20}
        defaultValue={item.value}
      />
    );
  }
  return (
    <SafeAreaView style={{ backgroundColor: Colors.background, flex: 1 }}>
      <Header topheading={StringConstants.SETTINGS} isLogout={true} />
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <View style={styles.detailContainer}>
          <View style={styles.circle}>
            <TextWrapper
              color={Colors.white}
              fontFamily={fonts.type.medium}
              style={{ fontSize: 20 }}
            >
              {StringConstants.SV}
            </TextWrapper>
          </View>
          <View style={styles.infoContainer}>
            <View style={{ marginLeft: 16 }}>
              <TextWrapper style={commonStyles.font14RegularBlack}>
                {StringConstants.SARANSH}
              </TextWrapper>
              <TextWrapper style={styles.userPost}>
                {StringConstants.BRANCH_MANAGER}
              </TextWrapper>
            </View>
            <CustomButton
              image={Glyphs.Editing}
              text={StringConstants.EDIT_PROFILE}
              buttonStyle={{ width: "auto", backgroundColor: Colors.sailBlue }}
              textStyle={styles.editTxt}
            />
          </View>
        </View>
        {TextFieldData.map(renderItem)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;
