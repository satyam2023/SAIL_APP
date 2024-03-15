import React, { useState } from "react";
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

const MeetingScreen = () => {
  const [currentScreen, setCurrentScreen] = useState<number>(1);
  const [SuccessStatus, setSuccessStatus] = useState<boolean>(false);
  const Data = [
    {
      heading: StringConstants.FOR_PLANNED_VISIT,
      backgroundColor: {
        focus: Colors.sailBlue,
        notfocus: Colors.aquaHaze,
      },
      textColor: {
        focus: Colors.white,
        notfocus: Colors.sailBlue,
      },
    },
    {
      heading: StringConstants.FOR_UNPLANNED_VISIT,
      backgroundColor: {
        focus: Colors.sailBlue,
        notfocus: Colors.white,
      },
      textColor: {
        focus: Colors.white,
        notfocus: Colors.sailBlue,
      },
    },
  ];
  function setVisitSuccess(param: any) {
    setSuccessStatus(param);
  }

  return (
    <>
      {!SuccessStatus ? (
        <SafeAreaView style={{ backgroundColor: Colors.background2 }}>
          <Header topheading={StringConstants.CREATE_MEETING_DETAILS} />
          <HorizontalSlider
            sliderData={Data}
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
              <>
                <RectangularBox
                  heading={StringConstants.CUSTOMER_CODE_NUMBER}
                  subHeading={StringConstants.XYZ_STEELWORKS}
                  leftIcon={Glyphs.CreateVisit}
                />
                <RectangularBox
                  heading={StringConstants.CUSTOMER_CODE_NUMBER}
                  subHeading={StringConstants.XYZ_STEELWORKS}
                  leftIcon={Glyphs.CreateVisit}
                />
                <RectangularBox
                  heading={StringConstants.CUSTOMER_CODE_NUMBER}
                  subHeading={StringConstants.XYZ_STEELWORKS}
                  leftIcon={Glyphs.CreateVisit}
                />
              </>
            </View>
          ) : (
            <AddUnplannedVisit setVisitSuccess={setVisitSuccess} />
          )}
        </SafeAreaView>
      ) : (
        <>
          <MeetingCompleted />
        </>
      )}
    </>
  );
};

export default MeetingScreen;
