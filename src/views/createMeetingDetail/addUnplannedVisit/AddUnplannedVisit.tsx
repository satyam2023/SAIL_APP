import React, { useRef} from "react";
import {
  ScrollView,
} from "react-native";
import {
  CustomerType,
} from "../mockData/data";
import CustomDropDown from "components/CustomDropDown";
import StringConstants from "shared/localization";
import InputTextField from "components/InputTextField";
import { Colors } from "commonStyles/RNColor.style";
import UploadDocumnet from "components/UploadDocument";
import CustomFooter from "components/CustomFooter";
interface AddProps {
  setVisitSuccess: Function;
}
const AddUnplannedVisit: React.FC<AddProps> = ({
  setVisitSuccess,
}: AddProps) => {
  const details = {
    customerCode: useRef(""),
    companyName: useRef(""),
    personName: useRef(""),
    designation: useRef(""),
    address: useRef(""),
    whatsapp: useRef(""),
    nameWithNumber: useRef(""),
    reason: useRef(""),
  };

 
  function setSuccess() {
    setVisitSuccess(true);
  }
  return (
    <>
      <ScrollView 
       showsVerticalScrollIndicator={false}
        style={{ padding: 20}}
      >
        <CustomDropDown
          ArrayOfData={CustomerType}
          topheading={StringConstants.CUSTOMER_TYPE}
        />
        <InputTextField
          onChangeText={() => {}}
          placeholder={StringConstants.CUSTOMER_CODE}
          containerStyle={{ backgroundColor: Colors.white }}
        />
        <CustomDropDown
          ArrayOfData={CustomerType}
          topheading={StringConstants.CUSTOMER_STATUS}
        />
        <InputTextField
          onChangeText={() => {}}
          placeholder={StringConstants.ENTER_COMPANY_NAME}
          containerStyle={{ backgroundColor: Colors.white }}
        />
        <InputTextField
          onChangeText={() => {}}
          placeholder={StringConstants.ENTER_PERSONAL_NAME}
          containerStyle={{ backgroundColor: Colors.white }}
        />
        <InputTextField
          onChangeText={() => {}}
          placeholder={StringConstants.ENTER_DESIGNATION}
          containerStyle={{ backgroundColor: Colors.white }}
        />
        <InputTextField
          onChangeText={() => {}}
          placeholder={StringConstants.ENTER_ADDRESS}
          containerStyle={{ backgroundColor: Colors.white }}
        />
        <InputTextField
          onChangeText={() => {}}
          placeholder={StringConstants.ENETR_WHATSAPP_NO}
          containerStyle={{ backgroundColor: Colors.white }}
        />
        <CustomDropDown
          ArrayOfData={CustomerType}
          topheading={StringConstants.SELECT_DEP}
        />
        <InputTextField
          onChangeText={() => {}}
          placeholder={StringConstants.ENTER_NAME_NUMBER}
          containerStyle={{ backgroundColor: Colors.white }}
        />
        <CustomDropDown
          ArrayOfData={CustomerType}
          topheading={StringConstants.SELECT_REASON}
        />
        <CustomDropDown
          ArrayOfData={CustomerType}
          topheading={StringConstants.SELECT_ISSUE}
        />
        <CustomDropDown
          ArrayOfData={CustomerType}
          topheading={StringConstants.CUSTOMER_MODE}
        />
        <CustomDropDown
          ArrayOfData={CustomerType}
          topheading={StringConstants.SELECT_CUSTOMER_CONTACT_DETAILS}
        />
        <UploadDocumnet uploadType={StringConstants.UPLOAD_VISITING_CARD} style={{marginBottom:'80%'}} />
      </ScrollView>
      <CustomFooter
        leftButtonText={StringConstants.CANCEL}
        rightButtonText={StringConstants.SUBMIT}
        leftButtonPress={() => {}}
        rightButtonPress={setSuccess}
        style={{bottom:'15%'}}
        
      />
    </>
  );
};
export default AddUnplannedVisit;
