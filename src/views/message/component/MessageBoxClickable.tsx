import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import Glyphs from "assets/Glyphs";
import StringConstants from "shared/localization";
import TextWrapper from "components/TextWrapper";
import commonStyles from "commonStyles/CommonStyle";
import fonts from "@fonts";
import { Colors } from "react-native/Libraries/NewAppScreen";
interface CommomBoxProps {
  setOpenStatus: (arg:boolean)=>void;
}
const MessageBoxClickable= ({
  setOpenStatus,
}: CommomBoxProps) => {
  return (
   
    <View style={styles.box}>
      <View >
        <TextWrapper style={styles.boxText}>{StringConstants.CUSTOMER_CODE}</TextWrapper>
        <TextWrapper style={[commonStyles.font14MediumBlack,{marginTop:5}]}>{StringConstants.CUSTOMER_NAME}</TextWrapper>
      </View>
      <TouchableOpacity
        onPress={() => {
          setOpenStatus(true);
        }}
      >
        <Image source={Glyphs.Arrow} style={styles.img} />
      </TouchableOpacity>
    </View>
 
  );
};
export default MessageBoxClickable;

const styles = StyleSheet.create({
  boxText: {
    fontFamily: fonts.type.regular,
    fontSize: 14,
    color: Colors.darkGrey,
  },
  img: {
    transform: [{ rotate: "0deg" }],
  },

  box: {
    height: 62,
    width: "100%",
    borderRadius: 4,
    backgroundColor: Colors.white,
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center',
    paddingHorizontal: 20,
    paddingVertical:5
  },
});