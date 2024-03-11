import React from "react";
import { Image } from "react-native";
import Glyphs from "assets/Glyphs";
import { ScrollView } from "react-native-gesture-handler";
import CustomToggleBox from "components/CustomToggleBox";
import StringConstants from "shared/localization";
import commonStyles from "commonStyles/CommonStyle";
import TextWrapper from "components/TextWrapper";
import Header from "components/HeaderForMainScreen/HeaderMain";
import SafeAreaContainer from "components/SafeAreaContainer";
import styles from "../Style";
import { Colors } from "commonStyles/RNColor.style";
import fonts from "@fonts";

interface IAboutProps {
  setScreen: (arg: string) => void;
}

const About = ({ setScreen }: IAboutProps) => {
  return (
    <ScrollView>
      <Header
        topheading={StringConstants.ABOUT_US}
        onPress={() => setScreen(StringConstants.CMS)}
      />
      <SafeAreaContainer>
        <Image source={Glyphs.Sail} style={styles.img} />
        <TextWrapper
          style={[commonStyles.font14RegularBlack, { marginTop: 20 }]}
        >
          {StringConstants.LOREM_LARGE}
        </TextWrapper>
        <CustomToggleBox
          heading={StringConstants.OPERATIONS}
          toggleContent={StringConstants.LOREM_LARGE}
          rightIconisPlus={true}
        />
        <CustomToggleBox
          heading={StringConstants.PRODUCT_MIX_MARKETING}
          toggleContent={StringConstants.LOREM_LARGE}
          rightIconisPlus={true}
        />
        <CustomToggleBox
          heading={StringConstants.MANAGEMENT_TEAM}
          toggleContent={StringConstants.LOREM_LARGE}
          rightIconisPlus={true}
        />
        <TextWrapper color={Colors.sailBlue} fontFamily={fonts.type.medium}>
          {StringConstants.CONTACT}
        </TextWrapper>
        <TextWrapper style={commonStyles.font14RegularBlack}>
          {StringConstants.LOREM_LARGE}
        </TextWrapper>
        <TextWrapper
          color={Colors.sailBlue}
          fontFamily={fonts.type.medium}
          style={{ marginTop: 20 }}
        >
          {StringConstants.WEBSITE}
        </TextWrapper>
        <TextWrapper style={[commonStyles.font14RegularBlack]}>
          {StringConstants.SAIL_WEBSITE_LINK}
        </TextWrapper>
      </SafeAreaContainer>
    </ScrollView>
  );
};

export default About;
