import React from "react";
import { SafeAreaView, View } from "react-native";
import Header from "components/AppHeader";
import AddUnplannedVisit from "./addUnplannedVisit/AddUnplannedVisit";
import MeetingCompleted from "./MeetingSuccess/MeetingCreatedSuccessfully";
import Glyphs from "assets/Glyphs";
import { Colors } from "commonStyles/RNColor.style";
import StringConstants from "shared/localization";
import InputTextField from "components/InputTextField";

import HorizontalSlider from "components/HorizontalSliderTab";
import { RectangularBox } from "components";
import { FlatList } from "react-native-gesture-handler";
import {
  CustomerRectangularBoxDetail,
  ICustomerRectangularBoxData,
} from "./mockData/data";
import { MeetingHeaderData } from "@shared-constants";

interface IMeetingScreen {
  currentScreen: number;
  successStatus: boolean;
  setVisitSuccess: (successStatus: boolean) => void;
  setCurrentScreen: (currentScreen: number) => void;
}

const MeetingScreen = ({
  currentScreen,
  successStatus,
  setVisitSuccess,
  setCurrentScreen,
}: IMeetingScreen) => {
  const rendexRectangularBox = (
    item: ICustomerRectangularBoxData,
    _: number,
  ) => {
    return (
      <RectangularBox
        heading={item.heading}
        subHeading={item.subHeading}
        leftIcon={Glyphs.CreateVisit}
      />
    );
  };

  return (
    <>
      {!successStatus ? (
        <SafeAreaView style={{ backgroundColor: Colors.background2, flex: 1 }}>
          <Header topheading={StringConstants.CREATE_MEETING_DETAILS} />
          <HorizontalSlider
            sliderData={MeetingHeaderData}
            currentScreen={currentScreen}
            selectedTab={(index: number) => {
              setCurrentScreen(index);
            }}
          />
          {currentScreen == 1 ? (
            <View style={{ paddingHorizontal: 20, flex: 1 }}>
              <InputTextField
                onChangeText={() => {}}
                placeholder={StringConstants.ENTER_CUST_CODE_OR_NAME}
                rightIcon={Glyphs.Search}
                containerStyle={{
                  backgroundColor: Colors.white,
                  marginTop: 16,
                }}
              />
              <FlatList
                data={CustomerRectangularBoxDetail}
                renderItem={({ item, index }) =>
                  rendexRectangularBox(item, index)
                }
              />
            </View>
          ) : (
            <AddUnplannedVisit setVisitSuccess={setVisitSuccess} />
          )}
        </SafeAreaView>
      ) : (
        <MeetingCompleted />
      )}
    </>
  );
};

export default MeetingScreen;
