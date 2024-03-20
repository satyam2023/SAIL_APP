import { darkgrey, Colors } from "commonStyles/RNColor.style";
import Header from "components/AppHeader";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import Executed from "views/visit/ExecutedVisit/Executed";
import Planned from "views/visit/PlannedVisit/Planned";
import UpcomingVisit from "views/visit/UpComingVisit/Upcoming";
import { useDispatch, useSelector } from "react-redux";
import { BottomTabVisibility } from "redux/actions/UIAction";
import { useFocusEffect } from "@react-navigation/native";
import InputTextField from "components/InputTextField";
import Glyphs from "assets/Glyphs";
import { Image } from "react-native";
import CustomFooter from "components/CustomFooter";
import StringConstants from "shared/localization";
import TextWrapper from "components/TextWrapper";
import commonStyles from "commonStyles/CommonStyle";
import SafeAreaContainer from "components/SafeAreaContainer";
import HorizontalSlider from "components/HorizontalSliderTab";
import { VisitHeaderData } from "@shared-constants";


interface IVisitScreen{
  currentVisit:number,
    setCurrentVisit:(currentVisit:number)=>void,
    setFooterVisibility:(FooterVisibility:boolean)=>void,
    FooterVisibility:boolean
}

const VisitScreen = ({currentVisit,setCurrentVisit,setFooterVisibility,FooterVisibility}:IVisitScreen) => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background2 }}>
      <Header topheading={StringConstants.VISITS} />
      <ScrollView
        style={{ flex: 1 }}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
      >
        <HorizontalSlider
          sliderData={VisitHeaderData}
          currentScreen={currentVisit}
          selectedTab={(index: number) => {
            setCurrentVisit(index);
          }}
        />
        <TextWrapper style={[commonStyles.font12RegularGrey, styles.txt]}>
          {StringConstants.ENTER_CUST_CODE_OR_NAME}
        </TextWrapper>
        <SafeAreaContainer
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <InputTextField
            onChangeText={() => {}}
            placeholder={StringConstants.ENTER_TEXT_TO_SEARCH}
            maxlength={20}
            rightIcon={Glyphs.Search}
            containerStyle={{ backgroundColor: Colors.white, width: "80%" }}
          />
          <TouchableOpacity style={styles.filter}>
            <Image source={Glyphs.Filter} style={styles.imgContainer} />
          </TouchableOpacity>
        </SafeAreaContainer>
        {currentVisit == 1 && <UpcomingVisit />}
        {currentVisit == 2 && <Planned footerVisibility={(footerVisibility:boolean)=>setFooterVisibility(footerVisibility)} />}
        {currentVisit == 3 && <Executed />}
      </ScrollView>
      {currentVisit == 2 && FooterVisibility && (
        <CustomFooter
          leftButtonText={StringConstants.CANCEL_VISIT}
          rightButtonText={StringConstants.EDIT_VISIT}
          leftButtonPress={() => {}}
          rightButtonPress={() => {}}
          isMovable={true}
        />
      )}
    </SafeAreaView>
  );
};

export default VisitScreen;

const styles = StyleSheet.create({
  tagContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 16,
    paddingTop: 32,
    backgroundColor: Colors.background2,
  },
  txt: {
    color: darkgrey,
    marginLeft: 20,
    marginBottom: 16,
  },
  filter: {
    height: 56,
    width: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 28,
  },
  imgContainer: {
    height: 24,
    width: 24,
    resizeMode: "contain",
  },
});
