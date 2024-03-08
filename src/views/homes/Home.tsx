import React, { useState } from "react";
import {View, Image, } from "react-native";
import styles from "./Style";
import Splash from "views/Splash/Splash";
import Glyphs from "assets/Glyphs";
import { SCREENS } from "@shared-constants";
import CustomButton from "components/CustomButton";
import { navigate } from "@navigation";
import { Colors, blue, lightWhite, white } from "commonStyles/RNColor.style";
import SafeAreaContainer from "components/SafeAreaContainer";
import TextWrapper from "components/TextWrapper";
import StringConstants from "shared/localization";
import commonStyles from "commonStyles/CommonStyle";

const HomeScreen = () => {
  const [splashscreen, setsplashscreen] = useState(true);
  setTimeout(controlsplash, 2000);
  function controlsplash() {
    setsplashscreen(false);
  }

  return !splashscreen ? (
    <SafeAreaContainer backgroundColor={Colors.white}>
      <View style={[{ flex: 0.4 },commonStyles.center]}>
        <Image source={Glyphs.Sail} style={styles.imgsail} />
        <View style={styles.toptxtcontainer}>
          <TextWrapper style={styles.toptxt} >
            {StringConstants.TRACK_SALES}
          </TextWrapper>
          <TextWrapper style={styles.lowertxt}>
          {StringConstants.EFFORTLESSLY_ORGANIZE}
          </TextWrapper>
        </View>
      </View>
        <Image source={Glyphs.HandShake} style={styles.imghand} />
      <View style={{ flex: 0.3,paddingHorizontal:20}}>
        <CustomButton
          textStyle={{ color: white }}
          buttonStyle={{ backgroundColor: blue }}
          onPress={() => navigate(SCREENS.SIGNUP)}
          text={StringConstants.CREATE_ACCOUNT}
        />
        <CustomButton
          textStyle={{
            color: Colors.blackPeral,
          }}
          buttonStyle={{ backgroundColor: lightWhite }}
          onPress={() => navigate(SCREENS.SIGNIN)}
          text={StringConstants.SIGN_IN}
        />
      </View>
    </SafeAreaContainer>
  ) : (
    <Splash />
  );
};

export default HomeScreen;
