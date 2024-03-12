import {
  darkgrey,
  Colors,
} from "commonStyles/RNColor.style";
import Header from "components/HeaderForMainScreen/HeaderMain";
import VisitButton from "components/VisitNavigateButton/VisitButton";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
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
const VisitScreen = () => {
  const dispatch = useDispatch();
  useFocusEffect(() => {
    dispatch(BottomTabVisibility(false));
    return () => dispatch(BottomTabVisibility(true));
  });
  const [currentVisit, setCurrentVisit] = useState<number>(1);
  const [FooterVisibility, setFooterVisibility] = useState<boolean>(false);

  const visitType = useSelector((state: any) => state.UIReducer.visitType);
  useEffect(() => {
    setCurrentVisit(visitType);
  }, [visitType]);
  const handleVisitType = (visitType: number) => {
    setCurrentVisit(visitType);
  };
  const footerVisibility = (param: boolean) => {
    setFooterVisibility(param);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header topheading={StringConstants.VISITS} />
      <ScrollView
        style={{ flex: 1 }}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
      >
        <ScrollView
          horizontal
          style={styles.tagContainer}
          showsHorizontalScrollIndicator={false}
        >
          <VisitButton
            backgrouncolor={
              currentVisit == 1 ? Colors.darkMilkWhite : Colors.milkWhite
            }
            textColor={currentVisit == 1 ? Colors.white : Colors.darkMilkWhite}
            tag={StringConstants.UPCOMING}
            visitnumber={16}
            handleVisitType={handleVisitType}
          />
          <VisitButton
            backgrouncolor={
              currentVisit == 2 ? Colors.sailBlue : Colors.aquaHaze
            }
            textColor={currentVisit == 2 ? Colors.white : Colors.sailBlue}
            tag={StringConstants.PLANNED}
            visitnumber={12}
            handleVisitType={handleVisitType}
          />
          <VisitButton
            backgrouncolor={
              currentVisit == 3 ? Colors.green : Colors.tealishGreen
            }
            textColor={currentVisit == 3 ? Colors.white : Colors.green}
            tag={StringConstants.EXECUTED}
            visitnumber={99}
            handleVisitType={handleVisitType}
          />
        </ScrollView>
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
        {currentVisit == 2 && <Planned footerVisibility={footerVisibility} />}
        {currentVisit == 3 && <Executed />}
      </ScrollView>
      {currentVisit == 2 && FooterVisibility && (
        <CustomFooter
          firstButtonText={StringConstants.CANCEL_VISIT}
          secondButtonText={StringConstants.EDIT_VISIT}
          firstButtonPress={() => {}}
          secondButtonPress={() => {}}
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
