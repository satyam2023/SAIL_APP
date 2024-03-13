import React from "react";
import { ScrollView} from "react-native";
import {
  CustomerSegment,
} from "./Data/Data";
import UploadDocumnet from "components/UploadDocument";
import InputTextField from "components/InputTextField";
import StringConstants from "shared/localization";
import { Colors } from "commonStyles/RNColor.style";
import CustomDropDown from "components/CustomDropDown";
import LocateMe from "components/LocateMe";

const First = () => {
  return (
    <ScrollView style={{ paddingHorizontal: 20, marginBottom: "30%" }}>
      <InputTextField
        onChangeText={(text: string) => {}}
        placeholder={StringConstants.CUSTOMER_CODE}
        containerStyle={{ backgroundColor: Colors.white }}
      />
      <InputTextField
        onChangeText={(text: string) => {}}
        placeholder={StringConstants.COMPANY_NAME}
        containerStyle={{ backgroundColor: Colors.white }}
      />
      <CustomDropDown
        ArrayOfData={CustomerSegment}
        topheading={StringConstants.CUSTOMER_SEG}
      />
      <CustomDropDown
        ArrayOfData={CustomerSegment}
        topheading={StringConstants.CUSTOMER_SUB_SEG}
      />
      <CustomDropDown
        ArrayOfData={CustomerSegment}
        topheading={StringConstants.CUSTOMER_TYPE}
      />
      <CustomDropDown
        ArrayOfData={CustomerSegment}
        topheading={StringConstants.CUSTOMER_SUB_TYPE}
      />
      <CustomDropDown
        ArrayOfData={CustomerSegment}
        topheading={StringConstants.SELECT_STATUS_CUSTOMER}
      />
      <InputTextField
        onChangeText={(text: string) => {}}
        placeholder={StringConstants.ENTER_PAN_CARD}
        containerStyle={{ backgroundColor: Colors.white }}
      />
      <InputTextField
        onChangeText={(text: string) => {}}
        placeholder={StringConstants.GST_NUMBER}
        containerStyle={{ backgroundColor: Colors.white }}
      />
      <InputTextField
        onChangeText={(text: string) => {}}
        placeholder={StringConstants.CUSTOMER_REGION}
        containerStyle={{ backgroundColor: Colors.white }}
      />
      <InputTextField
        onChangeText={(text: string) => {}}
        placeholder={StringConstants.WEBSITE_LINK}
        containerStyle={{ backgroundColor: Colors.white }}
      />
      <LocateMe onPress={() => {}} />
      <InputTextField
        onChangeText={(text: string) => {}}
        placeholder={StringConstants.LOCATION_NAME}
        containerStyle={{ backgroundColor: Colors.white }}
      />
      <UploadDocumnet uploadType={StringConstants.UPLOAD_VIDEO_IMAGE} />
    </ScrollView>
  );
};

export default First;
