import React, { useState } from "react";
import * as NavigationService from "@navigation";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import styles from "./Style";
import Splash from "views/Splash/Splash";
import Glyphs from "assets/Glyphs";
import { SCREENS } from "@shared-constants";
import withGradientBackground from "components/HOCgradient/HOCgradient";

const HomeScreen = () => {
  const [splashscreen, setsplashscreen] = useState(true);
  setTimeout(controlsplash, 2000);
  function controlsplash() {
    setsplashscreen(false);
  }

  return !splashscreen ? (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar backgroundColor={"#FFF"} barStyle={"dark-content"} /> */}
      <View style={{ flex: 0.3}}>
        <Image source={Glyphs.Sail} style={styles.imgsail} />
        <View style={styles.toptxtcontainer}>
          <Text style={styles.toptxt}>
            Track your sales meeting hassle free
          </Text>
          <Text style={styles.lowertxt}>
            Effortlessly organize and elevate your meetings
          </Text>
        </View>
      </View>
      <View style={{ flex: 0.4 }}>
        <Image source={Glyphs.HandShake} style={styles.imghand} />
      </View>
      <View
        style={{ flex: 0.3, paddingHorizontal: 20 }}
      >
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            NavigationService.navigate(SCREENS.SIGNUP);
          }}
        >
          <Text style={styles.txt}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signbtn}
          onPress={() => {
            NavigationService.navigate(SCREENS.SIGNIN);
          }}
        >
          <Text style={styles.txtofSign}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  ) : (
    <Splash />
  );
};

export default HomeScreen;
