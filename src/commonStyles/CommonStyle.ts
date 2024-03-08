import { StyleSheet } from "react-native";
import { Colors } from "./RNColor.style";
import fonts from "@fonts";

const commonStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  font14RegularBlack: {
    fontSize: 14,
    fontFamily:fonts.type.regular, 
    color: Colors.blackPeral,
  },
  font14MediumBlack: {
    fontSize: 14,
    fontFamily:fonts.type.medium, 
    color: Colors.charcoalBlack,
  },
  font12RegularGrey: {
    fontSize: 12,
    fontFamily:fonts.type.regular, 
    color: Colors.textGrey,
  },
  font10RegularGrey: {
    fontSize: 10,
    fontFamily:fonts.type.regular,
    color: Colors.textGrey,
  },
  deActivatedButton: {
    backgroundColor: Colors.lightGrey,
  },
  activatedButton: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.sailBlue,
  },
  deactivatedButtonText: {
    color: Colors.darkGrey,
  },
  activatedButtontext: {
    color: Colors.sailBlue,
  },
  errorText: {
    color: Colors.sailRed,
    fontFamily:fonts.type.regular,
    paddingLeft: 15,
    marginBottom: 4,
  },
  mediumText: {
    fontSize: 14,
    fontFamily:fonts.type.medium, 
    color: Colors.blackPeral,
  },
  leftIcon: {
    height: 24,
    width: 24,
    resizeMode: "contain",
    marginRight: 16,
  },
  center:{
    justifyContent:'center',
    alignItems:'center',
  }
  
});

export default commonStyles;
