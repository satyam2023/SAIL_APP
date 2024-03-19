import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import Header from "components/AppHeader";
import PlanCompleted from "./PlanCompleted";
import InputTextField from "components/InputTextField";
import StringConstants from "shared/localization";
import { Colors } from "commonStyles/RNColor.style";
import CustomDropDown from "components/CustomDropDown";
import CustomFooter from "components/CustomFooter";
import { CustomerType } from "views/createMeetingDetail/mockData/data";
import { CreateVisitPlanField } from "@shared-constants";

interface ICreateVisitPlanScreen {
  isVisitDetailFilled: boolean;
  setIsVisitDetailFilled: (isVisitDetailFilled: boolean) => void;
}

const CreateVisitPlanScreen = ({
  isVisitDetailFilled,
  setIsVisitDetailFilled,
}: ICreateVisitPlanScreen) => {
  const renderCreateVisitPlanField = (item: string, index: number) => {
    return (
      <>
        {index < 3 ? (
          <InputTextField
            onChangeText={() => {}}
            placeholder={item}
            containerStyle={{ backgroundColor: Colors.white }}
          />
        ) : (
          <CustomDropDown ArrayOfData={CustomerType} topheading={item} />
        )}
      </>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!isVisitDetailFilled ? (
        <>
          <View style={{ backgroundColor: Colors.background2, flex: 1 }}>
            <Header topheading={StringConstants.CREATE_VISIT_PLAN} />
            <View style={{ marginVertical: 23, paddingHorizontal: 20 }}>
              <FlatList
                data={CreateVisitPlanField}
                renderItem={({ item, index }) =>
                  renderCreateVisitPlanField(item, index)
                }
              />
            </View>
          </View>
          <CustomFooter
            leftButtonText={StringConstants.CANCEL}
            rightButtonText={StringConstants.SUBMIT}
            leftButtonPress={() => {}}
            rightButtonPress={() => 
              setIsVisitDetailFilled(true)
            }
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
export default CreateVisitPlanScreen;
