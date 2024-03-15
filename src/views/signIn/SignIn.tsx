import React, { useRef } from "react";
import { SafeAreaView } from "react-native";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "./Style/Style";
import Glyphs from "assets/Glyphs";
import { SCREENS } from "@shared-constants";
import { navigate } from "@navigation";
import {
  white,
  darkgrey,
  grey,
  lightWhite,
  Colors,
} from "commonStyles/RNColor.style";
import CustomButton from "components/CustomButton";
import InputTextField from "components/InputTextField";
import CustomSwitch from "components/CustomCheckBox";
import TextWrapper from "components/TextWrapper";
import StringConstants from "shared/localization";
import commonStyles from "commonStyles/CommonStyle";
import { PressableButton } from "components";

const SignIn = () => {
  const details = {
    passOne: useRef(""),
    phoneNumber: useRef(""),
  };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.white, flex: 1 }}>
      <View style={{ flex: 0.7, paddingHorizontal: 20 }}>
        <TextWrapper style={styles.signinText}>
          {StringConstants.SIGN_IN}
        </TextWrapper>
        <TextWrapper style={styles.pleaseText}>
          {StringConstants.PLEASE_ENTER_INFORMATION}
        </TextWrapper>
        <InputTextField
          leftIcon={Glyphs.Contact}
          placeholder={StringConstants.YOUR_UNIQUE}
          onChangeText={(text: string) => (details.phoneNumber.current = text)}
        />
        <InputTextField
          eyeIcon={Glyphs.Eye}
          leftIcon={Glyphs.Key}
          placeholder={StringConstants.YOUR_PASSWOD}
          onChangeText={(text: string) => (details.passOne.current = text)}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <CustomSwitch
              onPress={(value: boolean) => {}}
              isRectangular
              status={true}
            />

            <TextWrapper style={styles.forgot}>
              {StringConstants.REMEMBER_ME}
            </TextWrapper>
          </View>
          <PressableButton>
            <TextWrapper style={[styles.forgot]}>
              {StringConstants.FORGOT_PASSWORD}
            </TextWrapper>
          </PressableButton>
        </View>
        <CustomButton
          textStyle={{ color: darkgrey }}
          buttonStyle={{ backgroundColor: lightWhite }}
          onPress={() => navigate(SCREENS.TAB)}
          text={StringConstants.SIGN_IN}
        />
        <View
          style={{
            marginTop: "3%",
            alignSelf: "center",
            flexDirection: "row",
          }}
        >
          <TextWrapper style={commonStyles.font14MediumDarkGray}>
            {StringConstants.DONT_HAVE_ACCOUNT}
          </TextWrapper>
          <TouchableOpacity
            onPress={() => {
              navigate(SCREENS.SIGNUP);
            }}
          >
            <TextWrapper style={styles.signupText}>
              {StringConstants.SIGN_UP}
            </TextWrapper>
          </TouchableOpacity>
        </View>
        <Image source={Glyphs.OrLine} style={styles.orLine} />
      </View>
      <View style={{ flex: 0.3, justifyContent: "flex-end", padding: 20 }}>
        <CustomButton
          textStyle={commonStyles.font14RegularBlack}
          buttonStyle={{
            backgroundColor: white,
            borderColor: grey,
            borderWidth: 1,
          }}
          onPress={() => navigate(SCREENS.MAIN)}
          text={StringConstants.SIGNIN_FINGERPRINT}
          image={Glyphs.FaceScan}
        />

        <CustomButton
          textStyle={commonStyles.font14RegularBlack}
          buttonStyle={{
            backgroundColor: white,
            borderColor: grey,
            borderWidth: 1,
          }}
          onPress={() => navigate(SCREENS.MAIN)}
          text={StringConstants.SIGNIN_FACE_RECOGNITION}
          image={Glyphs.FingerScan}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
