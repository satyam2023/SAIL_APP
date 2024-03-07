import {
  SkyBlue,
  darkgrey,
  blue,
  whitegreenish,
  green,
  Colors,
} from "commonStyles/RNColor.style";
import Header from "components/HeaderForMainScreen/HeaderMain";
import VisitButton from "components/VisitNavigateButton/VisitButton";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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
import fonts from "@fonts";
import { Image } from "react-native";
import CustomFooter from "components/CustomFooter";
const VisitScreenViewModel = () => {
  const dispatch = useDispatch();
  useFocusEffect(() => {
    dispatch(BottomTabVisibility(false));
    return () => dispatch(BottomTabVisibility(true));
  });
  const [currentVisit, setCurrentVisit] = useState<number>(1);
  const [FooterVisibility, setFooterVisibility] = useState<boolean>(false);
  function status(param: boolean) {
    setFooterVisibility(param);
  }
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
      <Header topheading={"Visits"} />
      <ScrollView style={{ flex: 1 }} nestedScrollEnabled>
        <ScrollView
          horizontal
          style={styles.tagContainer}
          showsHorizontalScrollIndicator={false}
        >
          <VisitButton
            backgrouncolor={currentVisit == 1 ? SkyBlue : "#EEFDFF"}
            textColor={currentVisit == 1 ? "#FFF" : SkyBlue}
            tag={"Upcoming"}
            visitnumber={16}
            handleVisitType={handleVisitType}
          />
          <VisitButton
            backgrouncolor={currentVisit == 2 ? blue : "#EEF4FF"}
            textColor={currentVisit == 2 ? "#FFF" : blue}
            tag={"Planned"}
            visitnumber={12}
            handleVisitType={handleVisitType}
          />
          <VisitButton
            backgrouncolor={currentVisit == 3 ? green : whitegreenish}
            textColor={currentVisit == 3 ? "#FFF" : green}
            tag={"Executed"}
            visitnumber={26}
            handleVisitType={handleVisitType}
          />
        </ScrollView>
        <Text style={styles.txt}>
          Enter Customer Code or Name or Executive's Name
        </Text>
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <InputTextField
            onChangeText={() => {}}
            placeholder={"Enter Text To Search"}
            maxlength={20}
            rightIcon={Glyphs.Search}
            containerStyle={{ backgroundColor: Colors.white, width: "80%" }}
          />
          <TouchableOpacity style={styles.filter}>
            <Image source={Glyphs.Filter} style={styles.imgContainer} />
          </TouchableOpacity>
        </View>
        {currentVisit == 1 && <UpcomingVisit />}
        {currentVisit == 2 && <Planned footerVisibility={footerVisibility} />}
        {currentVisit == 3 && <Executed />}
      </ScrollView>
      {currentVisit == 2 && FooterVisibility && (
        <CustomFooter
          firstButtonText={"Cancel Visit"}
          secondButtonText={"Edit Visit"}
          firstButtonPress={() => {}}
          secondButtonPress={() => {}}
          isMovable={true}
        />
      )}
    </SafeAreaView>
  );
};

export default VisitScreenViewModel;

const styles = StyleSheet.create({
  tagContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 16,
    paddingTop: 32,
    backgroundColor: Colors.background2,
  },
  txt: {
    fontSize: 12,
    fontFamily: fonts.type.regular,
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
