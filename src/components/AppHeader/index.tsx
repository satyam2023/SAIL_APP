import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Glyphs from "assets/Glyphs";
import { goBack } from "@navigation";
import TextWrapper from "components/TextWrapper";
import StringConstants from "shared/localization";
import fonts from "@fonts";
import { Colors } from "commonStyles/RNColor.style";
import { PressableButton } from "components";

interface HeaderProps {
  topheading: string;
  isLogoutButton?: boolean;
  onPress?: () => void;
  rightButtonPress?: () => void;
}
const Header = (props: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <PressableButton
          onPress={() => {
            if (props.onPress) props.onPress();
            else goBack();
          }}
        >
          <Image source={Glyphs.Arrow} style={styles.img} />
        </PressableButton>
        <TextWrapper style={styles.headingContent}>
          {props.topheading}
        </TextWrapper>
      </View>

      {props?.isLogoutButton && (
        <View style={{ flexDirection: "row" }}>
          <Image source={Glyphs.Logout} style={styles.logoutBtn} />
          <TouchableOpacity
            onPress={() => {
              if (props.rightButtonPress) props.rightButtonPress();
            }}
          >
            <TextWrapper style={styles.headingContent}>
              {StringConstants.LOGOUT}
            </TextWrapper>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    width: "100%",
    backgroundColor: Colors.sailBlue,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  img: {
    width: 12,
    height: 18,
    resizeMode: "contain",
    tintColor: Colors.white,
    transform: [{ rotate: "90deg" }],
  },
  headingContent: {
    color: Colors.white,
    marginLeft: 16,
    fontFamily: fonts.type.bold,
    fontSize: 16,
  },
  logoutBtn: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
});
