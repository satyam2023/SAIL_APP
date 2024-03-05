import React from "react";
import Header from "components/HeaderForMainScreen/HeaderMain";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SCREENS } from "@shared-constants";
import { navigate } from "@navigation";
import Glyphs from "assets/Glyphs";
import styles from "./Style";
import { SafeAreaView } from "react-native";

const RegistrationCompleted = () => {
  return (
    <SafeAreaView>
      <Header
        topheading="Create Customer Profile"
      />
      <View style={styles.container}>
      <Image
        source={Glyphs.Frame}
      />
      <Text
        style={styles.txt}
      >
        Customer profile created successfully.
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigate(SCREENS.MAIN);
        }}
        style={styles.btn}
      >
        <Text
          style={styles.btnText}
        >
          Back To Home
        </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default RegistrationCompleted;
