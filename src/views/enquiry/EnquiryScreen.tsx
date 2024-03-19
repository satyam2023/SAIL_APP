
import { Colors } from "commonStyles/RNColor.style";

import React, { useState } from "react";
import { ScrollView } from "react-native";
import StringConstants from "shared/localization";
import IssueEnquiry from "views/enquiry/Issue Enquiry/IssueEnquiry";
import NearbyCustomer from "views/enquiry/NearbyCustomer/NearByCustomer";
import UserEnquiry from "views/enquiry/UserEnquiry Screen/UserEnquiry";
import { EnquiryHeaderData } from "@shared-constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, HorizontalSlider } from "components";

const EnquiryScreen = () => {
  const [currentScreen, setCurrentScreen] = useState<number>(1);
  return (
    <SafeAreaView style={{flex:1}}>
      <Header topheading={StringConstants.ENQUIRY} />
      <ScrollView style={{ flex: 1, backgroundColor: Colors.background2 }}>
        <HorizontalSlider
          sliderData={EnquiryHeaderData}
          currentScreen={currentScreen}
          selectedTab={(index: number) => setCurrentScreen(index)}
        />

        {currentScreen == 1 && <UserEnquiry />}
        {currentScreen == 2 && <IssueEnquiry />}
        {currentScreen == 3 && <NearbyCustomer />}
      </ScrollView>
    </SafeAreaView>
  );
};
export default EnquiryScreen;

