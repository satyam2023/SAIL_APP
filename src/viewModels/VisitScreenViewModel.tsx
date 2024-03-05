import {
  SkyBlue,
  darkgrey,
  grey,
  lightgrey,
  white,
  blue,
  whitegreenish,
  green,
} from "commonStyles/RNColor.style";
import Header from "components/HeaderForMainScreen/HeaderMain";
import VisitButton from "components/VisitNavigateButton/VisitButton";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Executed from "views/visit/ExecutedVisit/Executed";
import Planned from "views/visit/PlannedVisit/Planned";
import UpcomingVisit from "views/visit/UpComingVisit/Upcoming";
import SearchBar from "views/visit/component/SearchBar";
import { useSelector } from "react-redux";
const VisitScreenViewModel = () => {
  const [currentVisit, setCurrentVisit] = useState<number>(0);
  const visitType = useSelector((state: any) => state.UIReducer.visitType);
  useEffect(() => {
    setCurrentVisit(visitType);
  }, [visitType]);
  const handleVisitType = (visitType: number) => {
    setCurrentVisit(visitType);
  };
  console.log("current visit::+>", currentVisit);
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
        <SearchBar />
        {currentVisit == 1 && <UpcomingVisit />}
        {currentVisit == 2 && <Planned />}
        {currentVisit == 3 && <Executed />}
      </ScrollView>
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
    backgroundColor: "#F9F9FC",
  },
  txt: {
    fontSize: 12,
    fontWeight: "400",
    color: darkgrey,
    marginLeft: 20,
  },
});
