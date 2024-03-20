import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "./Style/Style";
import Glyphs from "assets/Glyphs";
import { ScrollView } from "react-native-gesture-handler";
import VisitCard from "views/visit/component/VisitCard/VisitCard";
import {
  Colors,
} from "commonStyles/RNColor.style";
import { SCREENS } from "@shared-constants";
import { navigate } from "@navigation";
import TextWrapper from "components/TextWrapper";
import StringConstants from "shared/localization";
import Product from "./component/ProductList";
import { SignInResponse } from "models/SignInResponse";
interface IHomeScreen{
  userData:SignInResponse
}

const HomeScreen = ({userData}:IHomeScreen) => {

  return (
    <ScrollView style={styles.container}
    showsVerticalScrollIndicator={false}
    >
      <View style={styles.topContainer}>
        <TextWrapper style={styles.welcometext}>
          {StringConstants.WELCOME} 
          {userData.user.user_name }
          {"\n"}
         { `(${userData.user.user_role_name})`}
        </TextWrapper>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              navigate(SCREENS.MESSAGE);
            }}
          >
            <Image source={Glyphs.Mail} style={styles.img} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigate(SCREENS.NOTIFICATION);
            }}
          >
            <Image
              source={Glyphs.Notification}
              style={[styles.img,{marginLeft:16}]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigate(SCREENS.SETTING);
            }}
          >
            <View style={styles.circle}>
              <TextWrapper style={styles.circleTxt}>{StringConstants.SV}</TextWrapper>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.visitContainer}>
        <VisitCard
          count={11}
          title={StringConstants.UPCOMING_VISIT}
          image={Glyphs.Visit}
          backgroundcolor={Colors.whitegreenish}
          textColor={Colors.sailBlue}
        />
        <VisitCard
          count={12}
          title={StringConstants.PLANNED_VISIT}
          image={Glyphs.Planned}
          backgroundcolor={Colors.aquaHaze}
          textColor={Colors.sailBlue}
        />
        <VisitCard
          count={26}
          title={StringConstants.EXECUTED_VISIT}
          image={Glyphs.Executed}
          backgroundcolor={Colors.tealishGreen}
          textColor={Colors.green}
        />
      </View>
      <View style={{ position: "relative", bottom: 60 }}>
        <Product
          category={StringConstants.PRODUCT_CATALOGUE}
          imagefirst={Glyphs.Steel}
          imagesecond={Glyphs.Rolled}
          imagefirstinfo={StringConstants.STAINLESS}
          imagesecondinfo={StringConstants.COLD_ROLLED}
          text={StringConstants.SEE_ALL}
        />
        {/* <HorizontalScrollableList/>
        <HorizontalScrollableList/>
        <HorizontalScrollableList/> */}
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
          imagesecond={Glyphs.Setting2Clicked}
          imagefirstinfo={StringConstants.USER_ENQUIRY}
          imagesecondinfo={StringConstants.ISSUE_ENQUIRY}
          text={StringConstants.VIEW_ALL}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
