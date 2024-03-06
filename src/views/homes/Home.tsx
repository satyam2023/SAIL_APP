import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import styles from "./Style";
import Splash from "views/Splash/Splash";
import Glyphs from "assets/Glyphs";
import { SCREENS } from "@shared-constants";
import CustomButton from "components/CustomButton";
import { navigate } from "@navigation";
import { blue, white } from "commonStyles/RNColor.style";

const HomeScreen = () => {
  const [splashscreen, setsplashscreen] = useState(true);
  setTimeout(controlsplash, 2000);
  function controlsplash() {
    setsplashscreen(false);
  }

  return !splashscreen ? (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar backgroundColor={"#FFF"} barStyle={"dark-content"} /> */}
      <View style={{ flex: 0.3 }}>
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
      <View style={{ flex: 0.3, paddingHorizontal: 20 }}>
      <CustomButton
          textStyle={
            {color:white}
          }
          buttonStyle={{ backgroundColor: blue}}
          onPress={() => navigate(SCREENS.SIGNUP)}
          text="Create Account"
        />
        <CustomButton
          textStyle={{
            color: "#110F24",
          }}
          buttonStyle={{ backgroundColor: "#F9F9FC"}}
          onPress={() => navigate(SCREENS.SIGNIN)}
          text="Sign In"
        />
      </View>
    </SafeAreaView>
  ) : (
    <Splash />
  );
};

export default HomeScreen;
