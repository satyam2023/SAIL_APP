import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";
import { ScreenWidth } from "libs";
import fonts from "@fonts";

interface Style {
  buttonStyle: ViewStyle;
  buttonTextStyle: TextStyle;
  container: ViewStyle;
  contentContainer: ViewStyle;
  header: ViewStyle;
  listContainer: ViewStyle;
  profilePicImageStyle: ImageStyle;
  titleTextStyle: TextStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: colors.background,
    },
    titleTextStyle: {
      fontSize: 32,
    },
    buttonStyle: {
      height: 45,
      width: ScreenWidth * 0.9,
      marginTop: 32,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.primary,
      shadowRadius: 5,
      shadowOpacity: 0.7,
      shadowColor: colors.shadow,
      shadowOffset: {
        width: 0,
        height: 3,
      },
    },
    buttonTextStyle: {
      color: colors.white,
      fontFamily: fonts.montserrat.lightItalic,
    },
    header: {
      width: ScreenWidth * 0.9,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    contentContainer: {
      flex: 1,
      marginTop: 16,
    },
    listContainer: {
      marginTop: 8,
    },
    profilePicImageStyle: {
      height: 50,
      width: 50,
      borderRadius: 30,
    },
  });
};
