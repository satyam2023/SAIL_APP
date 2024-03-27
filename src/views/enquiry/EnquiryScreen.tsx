import { Colors } from "commonStyles/RNColor.style";
import React, { Dispatch, SetStateAction } from "react";
import { ScrollView } from "react-native";
import StringConstants from "shared/localization";
import NearbyCustomer from "./nearbyCustomer/NearByCustomer";
import UserEnquiry from "./userEnquiry Screen/UserEnquiry";
import { EnquiryHeaderData } from "@shared-constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, HorizontalSlider } from "components";
import { MasterDataResponse } from "models/ApiResponses/MasterDataResponse";
import {
  IissueEnquiryEnteredData,
  IuserEnquiryEnteredData,
} from "models/interface/IEnquiry";
import {
  IIssueEnquiry,
  UserEnquiryResponse,
} from "models/ApiResponses/IEnquiryResponses";
import IssueEnquiry from "./issueEnquiry/IssueEnquiry";

interface IEnquiryScreen {
  currentScreen: number;
  setCurrentScreen: Dispatch<SetStateAction<number>>;
  roleLocationDropDownList: MasterDataResponse;
  userEnquiryEnteredDetail: IuserEnquiryEnteredData;
  searchresult: UserEnquiryResponse | undefined;
  onSearch: () => void;
  issueSearchresult: IIssueEnquiry[] | undefined;
  issueEnquiryEnteredDetail: IissueEnquiryEnteredData;
  setIssueSearchResult: Function;
  setsearchresult:Function;
}

const EnquiryScreen = ({
  setIssueSearchResult,
  currentScreen,
  setCurrentScreen,
  roleLocationDropDownList,
  userEnquiryEnteredDetail,
  searchresult,
  onSearch,
  issueSearchresult,
  issueEnquiryEnteredDetail,
  setsearchresult
}: IEnquiryScreen) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header topheading={StringConstants.ENQUIRY} />
      <ScrollView style={{ flex: 1, backgroundColor: Colors.background2 }}>
        <HorizontalSlider
          sliderData={EnquiryHeaderData}
          currentScreen={currentScreen}
          selectedTab={(index: number) => setCurrentScreen(index)}
        />

        {currentScreen == 1 && (
          <UserEnquiry
            {...{
              roleLocationDropDownList,
              userEnquiryEnteredDetail,
              searchresult,
              onSearch,
              setsearchresult
            }}
          />
        )}
        {currentScreen == 2 && (
          <IssueEnquiry
            {...{
              roleLocationDropDownList,
              issueSearchresult,
              issueEnquiryEnteredDetail,
              setIssueSearchResult,
              onSearch,
            }}
          />
        )}
        {currentScreen == 3 && <NearbyCustomer />}
      </ScrollView>
    </SafeAreaView>
  );
};
export default EnquiryScreen;
