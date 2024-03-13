import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Header from "components/HeaderForMainScreen/HeaderMain";
import PlanCompleted from "./PlanCompleted";
import InputTextField from "components/InputTextField";
import StringConstants from "shared/localization";
import { Colors } from "commonStyles/RNColor.style";
import CustomDropDown from "components/CustomDropDown";
import CustomFooter from "components/CustomFooter";

const CreateVisitPlan = () => {
  const [isVisitDetailFilled, setIsVisitDetailFilled] =
    useState<boolean>(false);
  const Data = [
    { key: 1, value: "A" },
    { key: 2, value: "A" },
    { key: 3, value: "A" },
    { key: 4, value: "A" },
    { key: 5, value: "A" },
    { key: 6, value: "A" },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!isVisitDetailFilled ? (
        <>
          <ScrollView style={{ backgroundColor: Colors.background2 }}>
            <Header topheading={StringConstants.CREATE_VISIT_PLAN} />
            <View style={{ marginVertical: 23, paddingHorizontal: 20 }}>
              <InputTextField
                onChangeText={() => {}}
                placeholder={StringConstants.ENTER_CUSTOMER_CODE}
                containerStyle={{ backgroundColor: Colors.white }}
              />
              <InputTextField
                onChangeText={() => {}}
                placeholder={StringConstants.ENTER_NAME}
                containerStyle={{ backgroundColor: Colors.white }}
              />
              <InputTextField
                onChangeText={() => {}}
                placeholder={StringConstants.ENTER_NICK_NAME}
                containerStyle={{ backgroundColor: Colors.white }}
              />
              <CustomDropDown
                ArrayOfData={Data}
                topheading={StringConstants.CUSTOMER_REGION}
              />
              <CustomDropDown
                ArrayOfData={Data}
                topheading={StringConstants.SELECT_VISITING_EXECUTIVE}
              />
              <CustomDropDown
                ArrayOfData={Data}
                topheading={StringConstants.SELECT_REASON}
              />
              <CustomDropDown
                ArrayOfData={Data}
                topheading={StringConstants.SELECT_MODE_OF_CONTACT}
              />
            </View>
          </ScrollView>
          <CustomFooter
            firstButtonText={StringConstants.CANCEL}
            secondButtonText={StringConstants.SUBMIT}
            firstButtonPress={() => {}}
            secondButtonPress={() => {
              setIsVisitDetailFilled(true);
            }}
          />
        </>
      ) : (
        <>
          <Header topheading={StringConstants.CREATE_VISIT_PLAN} />
          <PlanCompleted />
        </>
      )}
    </SafeAreaView>
  );
};
export default CreateVisitPlan;
