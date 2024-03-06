import { ScreenWidth } from "libs";
import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet, TextStyle } from "react-native";

interface Style {
  container: ViewStyle;
  contentContainer: ViewStyle;
  descriptionTextStyle: TextStyle;
  forkContainer: ViewStyle;
  languageColorStyle: ViewStyle;
  languageContainer: ViewStyle;
  starContainer: ViewStyle;
  valueTextStyle: TextStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      padding: 16,
      marginTop: 16,
      borderWidth: 1,
      borderRadius: 8,
      width: ScreenWidth * 0.9,
      borderColor: colors.borderColor,
      backgroundColor: colors.dynamicBackground,
    },
    descriptionTextStyle: {
      marginTop: 8,
    },
    contentContainer: {
      marginTop: 16,
      flexDirection: "row",
      alignItems: "center",
    },
    languageContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    languageColorStyle: {
      width: 15,
      height: 15,
      borderWidth: 1,
      borderRadius: 15,
      borderColor: colors.borderColor,
      backgroundColor: colors.calpyse,
    },
    starContainer: {
      marginLeft: 16,
      flexDirection: "row",
      alignItems: "center",
    },
    valueTextStyle: {
      marginLeft: 8,
      color: colors.text,
    },
    forkContainer: {
      marginLeft: 16,
      flexDirection: "row",
      alignItems: "center",
    },
  });
};
