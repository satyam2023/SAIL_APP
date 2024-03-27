import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./Style";
interface Footerprops {
  setScreen: (currentScreen:number)=>void;
  CurrentScreen: number;
  Submit: ()=>void;
}

import Glyphs from "assets/Glyphs";

import StringConstants from "shared/localization";

const CustomFooter = ({ CurrentScreen, setScreen, Submit }: Footerprops) => {
  return (
    <View style={styles.footer}>
      <View style={styles.progressbar}>
        <View style={[styles.bar, { width: `${CurrentScreen * 33.4}%` }]} />
      </View>

      <View style={styles.footercontainer}>
        <View style={styles.innerFooterContainer}>
          {CurrentScreen >= 2 && (
            <TouchableOpacity
              style={
                CurrentScreen == 2 ? styles.circleleft : styles.lastscreencircle
              }
              onPress={() => {
                setScreen(CurrentScreen - 1);
              }}
            >
              <Image style={styles.imgArrow} source={Glyphs.Arrow} />
            </TouchableOpacity>
          )}
          {CurrentScreen != 3 ? (
            <TouchableOpacity
              style={CurrentScreen != 2 ? styles.signupbtn : styles.signupboth}
            >
              <Text style={styles.signuptxt}>{StringConstants.SIGN_UP}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={
                true
                  ? [
                      styles.signupthree,
                      false ? styles.signupbackblue : styles.signupbacknoblue,
                    ]
                  : styles.signupboth
              }
              onPress={() => {
                Submit();
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
              onPress={() => Submit()}
            >
              {
                <Image
                  style={[
                    styles.imgArrow,
                    { transform: [{ rotate: "-90deg" }] },
                  ]}
                  source={Glyphs.Arrow}
                />
              }
            </TouchableOpacity>
          )}
          {CurrentScreen == 2 && (
            <TouchableOpacity
              style={false ? styles.circle : styles.bluecircle}
              onPress={() => {
                Submit();
              }}
            >
              {
                <Image
                  style={[
                    styles.imgArrow,
                    { transform: [{ rotate: "-90deg" }] },
                  ]}
                  source={Glyphs.Arrow}
                />
              }
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.footerBottomTxt}>
          <Text style={styles.alreadyAccountTxt}>
            {StringConstants.ALREADY_ACCOUNT}
          </Text>

          <TouchableOpacity
            onPress={() => {
              Submit();
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
