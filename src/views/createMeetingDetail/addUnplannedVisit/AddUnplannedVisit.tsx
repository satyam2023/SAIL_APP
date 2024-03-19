import React from "react";
import { ScrollView } from "react-native";
import { CustomerType } from "../mockData/data";
import CustomDropDown from "components/CustomDropDown";
import StringConstants from "shared/localization";
import InputTextField from "components/InputTextField";
import UploadDocumnet from "components/UploadDocument";
import CustomFooter from "components/CustomFooter";
import { UnplannedMeetingInputField } from "@shared-constants";
import { Colors } from "commonStyles/RNColor.style";
interface AddProps {
  setVisitSuccess: Function;
}
const AddUnplannedVisit = ({ setVisitSuccess }: AddProps) => {
  const renderUnplannedMeetingField = (item: string, index: number) => {
    return (
      <>
        {index == 1 || (index > 2 && index < 8) || index == 9 ? (
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
    <>
      <ScrollView style={{ padding: 20, flex: 1 }}>
        {UnplannedMeetingInputField.map((item: string, index: number) =>
          renderUnplannedMeetingField(item, index),
        )}
        <UploadDocumnet
          uploadType={StringConstants.UPLOAD_VISITING_CARD}
          style={{ marginBottom: "80%" }}
        />
      </ScrollView>
      <CustomFooter
        leftButtonText={StringConstants.CANCEL}
        rightButtonText={StringConstants.SUBMIT}
        leftButtonPress={() => {}}
        rightButtonPress={() => {
          setVisitSuccess(true);
        }}
      />
    </>
  );
};
export default AddUnplannedVisit;
