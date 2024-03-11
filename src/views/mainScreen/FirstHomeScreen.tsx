import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./Style/Style";
import Product from "components/Product/Product";
import Glyphs from "assets/Glyphs";
import { ScrollView } from "react-native-gesture-handler";
import VisitCard from "components/VisitCard/VisitCard";
import {
  SkyBlue,
  lightgreen,
  whitegreenish,
  green,
  blue,
} from "commonStyles/RNColor.style";
import { SCREENS } from "@shared-constants";
import { navigate } from "@navigation";
import TextWrapper from "components/TextWrapper";
import StringConstants from "shared/localization";
const FirstHomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <TextWrapper style={styles.welcometext}>
          {StringConstants.WELCOME} {`\n`}
          {StringConstants.SARANSH}
        </TextWrapper>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              navigate(SCREENS.MESSAGE);
            }}
          >
            <Image source={Glyphs.Mail} style={{ marginTop: 21 }} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigate(SCREENS.NOTIFICATION);
            }}
          >
            <Image
              source={Glyphs.Notification}
              style={{ marginTop: 21, marginLeft: 16 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigate(SCREENS.SETTING);
            }}
          >
            <View style={styles.circle}>
              <Text style={styles.circleTxt}>SV</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.visitContainer}>
        <VisitCard
          count={11}
          title={StringConstants.UPCOMING_VISIT}
          image={Glyphs.Visit}
          backgroundcolor={whitegreenish}
          textColor={SkyBlue}
        />
        <VisitCard
          count={12}
          title={StringConstants.PLANNED_VISIT}
          image={Glyphs.Planned}
          backgroundcolor={"#EEF4FF"}
          textColor={blue}
        />
        <VisitCard
          count={26}
          title={StringConstants.EXECUTED_VISIT}
          image={Glyphs.Executed}
          backgroundcolor={lightgreen}
          textColor={green}
        />
      </View>
      <View style={{ position: "relative", bottom: 70 }}>
        <Product
          category={StringConstants.PRODUCT_CATALOGUE}
          imagefirst={Glyphs.Steel}
          imagesecond={Glyphs.Rolled}
          imagefirstinfo={StringConstants.STAINLESS}
          imagesecondinfo={StringConstants.COLD_ROLLED}
          text={StringConstants.SEE_ALL}
        />
        <Product
          category={StringConstants.CUSTOMER_INFORMATION}
          imagefirst={Glyphs.Customer}
          imagesecond={Glyphs.Customer}
          imagefirstinfo={StringConstants.SALES_ORDER}
          imagesecondinfo={StringConstants.MOU_STATUS}
          text={StringConstants.EMPTY}
        />
        <Product
          category={StringConstants.CATEGORY}
          imagefirst={Glyphs.Customer}
          imagesecond={Glyphs.Setting2}
          imagefirstinfo={StringConstants.USER_ENQUIRY}
          imagesecondinfo={StringConstants.ISSUE_ENQUIRY}
          text={StringConstants.VIEW_ALL}
        />
      </View>
    </ScrollView>
  );
};

export default FirstHomeScreen;
