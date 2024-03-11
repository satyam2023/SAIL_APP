import fonts from "@fonts";
import Glyphs from "assets/Glyphs";
import commonStyles from "commonStyles/CommonStyle";
import { Colors } from "commonStyles/RNColor.style";
import SafeAreaContainer from "components/SafeAreaContainer";
import TextWrapper from "components/TextWrapper";
import React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import StringConstants from "shared/localization";

const QR = () => {
  return (
    <SafeAreaContainer style={commonStyles.center}>
      <Image source={Glyphs.Qr} />
      <TextWrapper style={styles.qrText}>{StringConstants.SCAN_QR}</TextWrapper>
    </SafeAreaContainer>
  );
};

export default QR;

const styles = StyleSheet.create({
  qrText: {
    fontFamily: fonts.type.medium,
    fontSize: 24,
    color: Colors.black,
    marginTop: 8,
  },
});
