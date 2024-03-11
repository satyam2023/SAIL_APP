import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./Style/Style";
import Glyphs from "assets/Glyphs";
import { goBack, navigate } from "@navigation";
import TextWrapper from "components/TextWrapper";
import { debounceHOC } from "hocs/debounceHOC";
import { SCREENS } from "@shared-constants";
import StringConstants from "shared/localization";
import fonts from "@fonts";
import { Colors } from "commonStyles/RNColor.style";
interface HeaderProps {
  topheading: string;
  isLogout?: boolean;
  onPress?: () => void | undefined;
}
const Header = (props: HeaderProps) => {
  const Press = debounceHOC(TouchableOpacity);
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Press
          onPress={() => {
            if (props.onPress) props.onPress();
            else goBack();
          }}
        >
          <Image source={Glyphs.Arrow} style={styles.img} />
        </Press>
        <TextWrapper style={styles.headingContent}>
          {props.topheading}
        </TextWrapper>
      </View>

      {props.isLogout && (
        <View style={{ flexDirection: "row" }}>
          <Image source={Glyphs.Logout} />
          <TouchableOpacity
            onPress={() => {
              navigate(SCREENS.SIGNIN);
            }}
          >
            <TextWrapper
              fontFamily={fonts.type.bold}
              color={Colors.white}
              style={{ marginLeft: 10 }}
            >
              {StringConstants.LOGOUT}
            </TextWrapper>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Header;
