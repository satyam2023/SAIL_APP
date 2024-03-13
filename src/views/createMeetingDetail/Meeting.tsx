import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "components/HeaderForMainScreen/HeaderMain";
import CommonButton from "components/Button/CommonButton";
import styles from "./Style";
import ForPlannedVisit from "./forPlannedVisit/ForPlannedVisit";
import AddUnplannedVisit from "./addUnplannedVisit/AddUnplannedVisit";
import MeetingCompleted from "./MeetingSuccess/MeetingCreationSucess";
import Glyphs from "assets/Glyphs";
import { Colors } from "commonStyles/RNColor.style";
import StringConstants from "shared/localization";
import InputTextField from "components/InputTextField";
import SafeAreaContainer from "components/SafeAreaContainer";
import CustomerBox from "components/RectangularBox";

const Meeting = () => {
  const [click, setClicked] = useState<string>("For Planned Visit");
  const [SuccessStatus, setSuccessStatus] = useState<boolean>(false);
  function setVisitSuccess(param: any) {
    setSuccessStatus(param);
  }
  console.log("success status::", SuccessStatus);
  return (
    <>
      {!SuccessStatus ? (
        <SafeAreaView style={{ backgroundColor: Colors.background2 }}>
          <Header topheading={StringConstants.CREATE_MEETING_DETAILS} />
          <View
            style={styles.topHeaderContainer}
          >
            <TouchableOpacity
              onPress={() => setClicked(StringConstants.FOR_PLANNED)}
            >
              <CommonButton
                text={StringConstants.FOR_PLANNED}
                Clickedstatus={
                  click == StringConstants.FOR_PLANNED ? true : false
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setClicked(StringConstants.ADD_UNPLANNED)}
            >
              <CommonButton
                text={StringConstants.ADD_UNPLANNED}
                Clickedstatus={
                  click == StringConstants.ADD_UNPLANNED ? true : false
                }
              />
            </TouchableOpacity>
          </View>

          {click == StringConstants.FOR_PLANNED ? (
            <SafeAreaContainer>
              <InputTextField
                onChangeText={() => {}}
                placeholder={StringConstants.ENTER_CUST_CODE_OR_NAME}
                rightIcon={Glyphs.Search}
                containerStyle={{ backgroundColor: Colors.white ,marginTop:16}}

              />
              <CustomerBox handleCustomerClick={() => {}} />
              <CustomerBox handleCustomerClick={() => {}} />
              <CustomerBox handleCustomerClick={() => {}} />
              <CustomerBox handleCustomerClick={() => {}} />
            </SafeAreaContainer>
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

export default Meeting;
