import React, { useEffect } from "react";
import * as NavigationService from "@navigation";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./Style";
import { SafeAreaView } from "react-native";
interface Footerprops {
  setScreen: any;
  CurrentScreen: any;
  FirstSubmit: Function;
  SecondSubmit: Function;
  ThirdSubmit: Function;
  totalvalidation: boolean;
  props: any;
}
// import { useSelector } from "react-redux";
import Glyphs from "assets/Glyphs";
import { SCREENS } from "@shared-constants";
import { WindowWidth } from "libs";
import StringConstants from "shared/localization";

const CustomFooter: React.FC<Footerprops> = ({
  CurrentScreen,
  setScreen,
  FirstSubmit,
  SecondSubmit,
  totalvalidation,
  ThirdSubmit,
  props,
}: Footerprops) => {
  function handlenextscreen() {
    // FirstSubmit();
    // SecondSubmit();
    setScreen(CurrentScreen + 1);
  }

  function handlebackscreen() {
    setScreen(CurrentScreen - 1);
  }
  return (
    <View style={styles.footer}>
      <View style={styles.progressbar}>
        <View style={[styles.bar,{width:`${CurrentScreen*33.4}%`}]}  />
      </View>

      <View style={styles.footercontainer}>
        <View
          style={styles.innerFooterContainer}
        >
          {CurrentScreen >= 2 && (
            <TouchableOpacity
              style={
                CurrentScreen == 2 ? styles.circleleft : styles.lastscreencircle
              }
              onPress={handlebackscreen}
            >
              <Image style={styles.imgArrow} source={Glyphs.Arrow} />
            </TouchableOpacity>
          )}
          {CurrentScreen != 3 ? (
            <TouchableOpacity
              style={CurrentScreen != 2 ? styles.signupbtn : styles.signupboth}
            >
              <Text style={styles.signuptxt}>Sign Up</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={
                CurrentScreen != 2
                  ? [
                      styles.signupthree,
                      false ? styles.signupbackblue : styles.signupbacknoblue,
                    ]
                  : styles.signupboth
              }
              onPress={() => {
                NavigationService.navigate(SCREENS.SIGNIN);
              }}
            >
              <Text
                style={[styles.signuptxt, !false ? styles.txte : styles.txet]}
              >
              {StringConstants.SIGN_UP}
              </Text>
            </TouchableOpacity>
          )}
          {CurrentScreen == 1 && (
            <TouchableOpacity
              style={styles.bluecircle}
              onPress={handlenextscreen}
            >
              {
                <Image
                  style={[styles.imgArrow, { transform: [{ rotate: "0deg" }] }]}
                  source={Glyphs.Arrow}
                />
              }
            </TouchableOpacity>
          )}
          {CurrentScreen == 2 && (
            <TouchableOpacity
              style={false ? styles.circle : styles.bluecircle}
              onPress={handlenextscreen}
            >
              {
                <Image
                  style={[styles.imgArrow, { transform: [{ rotate: "0deg" }] }]}
                  source={Glyphs.Arrow}
                />
              }
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.footerBottomTxt}>
          <Text style={styles.alreadyAccountTxt}>{StringConstants.ALREADY_ACCOUNT}</Text>

          <TouchableOpacity
            onPress={() => {
              NavigationService.navigate(SCREENS.SIGNIN);
            }}
          >
            <Text style={[styles.signInTxt]}>{StringConstants.SIGN_IN}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default CustomFooter;
