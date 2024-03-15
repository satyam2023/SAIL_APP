import React from "react";
import Header from "components/AppHeader";
import { Image, View } from "react-native";
import { SCREENS } from "@shared-constants";
import { navigate } from "@navigation";
import Glyphs from "assets/Glyphs";
import styles from "./Style";
import StringConstants from "shared/localization";
import { PressableButton, TextWrapper } from "components";

const RegistrationCompleted = () => {
  return (
    <>
      <Header topheading={StringConstants.CREATE_CUSTOMER_PROFILE} />
      <View style={styles.container}>
        <Image source={Glyphs.Frame} />
        <TextWrapper style={styles.txt}>
          {StringConstants.CUSTOMER_PROFILE_CREATED_SUCCESSFULLY}
        </TextWrapper>
        <PressableButton
          onPress={() => {
            navigate(SCREENS.MAIN);
          }}
          style={styles.btn}
        >
          <TextWrapper style={styles.btnText}>
            {StringConstants.BACK_TO_HOME}
          </TextWrapper>
        </PressableButton>
      </View>
    </>
  );
};
export default RegistrationCompleted;
