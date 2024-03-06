import * as NavigationService from "@navigation";
import { useTheme } from "@react-navigation/native";
import { SCREENS } from "@shared-constants";
import Glyphs from "assets/Glyphs";
import CustomText from "components/TextWrapper";
import Button from "components/CustomButton";
import React, { useMemo } from "react";
import {  Image, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { setAppTheme } from "redux/actions/ThemeAction";
import { RootState } from "redux/store/Store";
import { localStrings } from "shared/localization";
import LocalString from "shared/localization/localEnums";
import createStyles from "./styles/SignInStyle";
import { messageEvent } from "services/events/appEvent";
import { TouchableOpacity } from "react-native-gesture-handler";

const SignInScreen = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const dispatch = useDispatch();
  const isDarkMode = useSelector(
    (state: RootState) => state.themeReducer.isDarkMode,
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logoStyle} source={Glyphs.Logo} />
        </View>
        <View style={styles.fieldsContainer}>
          <View style={styles.fieldsSubContainer}>
            <TextInput
              style={styles.input}
              placeholderTextColor={colors.text}
              placeholder={localStrings.getString(LocalString.placeholderEmail)}
            />
            <TextInput
              style={styles.password}
              placeholderTextColor={colors.text}
              placeholder={localStrings.getString(
                LocalString.placeholderPassword,
              )}
            />
            <TouchableOpacity>
            <CustomText
              fontSize={10}
              color={colors.text}
              style={styles.forgotPasswordText}
            >
              {localStrings.getString(LocalString.forgotPassword)}
            </CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Button
        text={localStrings.getString(LocalString.login)}
        onPress={async () => {
         
          messageEvent.emit(
            "MESSAGE_RECEIVED",
            "Event emitter message, this can be object or anything",
          );
          messageEvent.setMaxListeners(1);
          NavigationService.navigate(SCREENS.DASHBOARD);
        }}
      />
      <Button
        text={localStrings.getString(LocalString.changeTheme)}
        onPress={() => dispatch(setAppTheme(!isDarkMode))}
      />
      <Button
        text={localStrings.getString(LocalString.changeLanguage)}
        onPress={async () => localStrings.setLanguage("en")}
      />
    </SafeAreaView>
  );
};

export default SignInScreen;
