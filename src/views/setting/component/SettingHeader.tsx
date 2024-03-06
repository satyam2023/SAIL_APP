import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import Glyphs from "assets/Glyphs";
import { goBack, navigate } from "@navigation";
import { SCREENS } from "@shared-constants";
import styles from "./Style/Style";

const SettingHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewStyling}>
        <TouchableOpacity
          onPress={() => {
            goBack();
          }}
        >
          <Image source={Glyphs.Arrow} style={styles.img} />
        </TouchableOpacity>
        <Text style={styles.txt}>Settings</Text>
      </View>
      <View style={styles.viewStyling}>
        <Image source={Glyphs.Logout} style={styles.logout} />
        <TouchableOpacity
          onPress={() => {
            navigate(SCREENS.SIGNIN);
            // dispatch(setIsLog(false));
          }}
        >
          <Text style={styles.logoutTxt}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingHeader;
