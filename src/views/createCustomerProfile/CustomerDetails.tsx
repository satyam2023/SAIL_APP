import React from "react";
import {
  SafeAreaView,
  ScrollView,
} from "react-native";
import {
  CustomerSegment,
  CustomerStatus,
  CustomerSubSegment,
  CustomerSubType,
  CustomerType,
} from "./mockData/Data";

import CustomerDetailHeader from "./CustomerDetailHeader";
import StringConstants from "shared/localization";
import { Colors } from "commonStyles/RNColor.style";
import { CustomDropDown, InputTextField, LocateMe, UploadDocumnet } from "components";

const CreateCustomerDetails = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginBottom: 130 }}>
      <CustomerDetailHeader
        heading={StringConstants.ENTER_CUSTOMER_DETAILS}
        CurrentScreen={1}
        topheading={StringConstants.CREATE_CUSTOMER_PROFILE}
      />
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <InputTextField
          onChangeText={() => {}}
          placeholder={StringConstants.CUSTOMER_CODE}
          containerStyle={{ backgroundColor: Colors.white }}
        />
        <InputTextField
          onChangeText={() => {}}
          placeholder={StringConstants.ENTER_COMPANY_NAME}
          containerStyle={{ backgroundColor: Colors.white }}
        />
        <CustomDropDown
          ArrayOfData={CustomerSegment}
          topheading={StringConstants.CUSTOMER_SEG}
        />
        <CustomDropDown
          ArrayOfData={CustomerSubSegment}
          topheading={StringConstants.CUSTOMER_SUB_SEG}
        />
        <CustomDropDown
          ArrayOfData={CustomerType}
          topheading={StringConstants.CUSTOMER_TYPE}
        />
        <CustomDropDown
          ArrayOfData={CustomerSubType}
          topheading={StringConstants.CUSTOMER_SUB_TYPE}
        />
        <CustomDropDown
          ArrayOfData={CustomerStatus}
          topheading={StringConstants.SELECT_STATUS_CUSTOMER}
        />

        <InputTextField
          onChangeText={() => {}}
          placeholder={StringConstants.ENTER_PAN_CARD}
          containerStyle={{ backgroundColor: Colors.white }}
        />
        <InputTextField
          onChangeText={() => {}}
          placeholder={StringConstants.ENTER_GST}
          containerStyle={{ backgroundColor: Colors.white }}
        />
        <InputTextField
          onChangeText={() => {}}
          placeholder={StringConstants.WEBSITE_LINK}
          containerStyle={{ backgroundColor: Colors.white }}
        />
        <InputTextField
          onChangeText={() => {}}
          placeholder={StringConstants.SELECT_LOCATION}
          containerStyle={{ backgroundColor: Colors.white }}
        />
        <LocateMe onPress={() => {}} />
        <InputTextField
          onChangeText={() => {}}
          placeholder={StringConstants.ADD_TAG_LOCATION}
          containerStyle={{ backgroundColor: Colors.white }}
        />

        <UploadDocumnet
          uploadType={StringConstants.UPLOAD_VIDEO_IMAGE}
          mediaType={StringConstants.PNG_MP4}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default CreateCustomerDetails;
