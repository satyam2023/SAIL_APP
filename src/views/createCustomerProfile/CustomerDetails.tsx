import React from "react";
import { FlatList, SafeAreaView,View } from "react-native";
import {
  CustomerSegment,
} from "./mockData/Data";

import CustomerDetailHeader from "./CustomerDetailHeader";
import StringConstants from "shared/localization";
import { Colors } from "commonStyles/RNColor.style";
import {
  CustomDropDown,
  InputTextField,
  LocateMe,
  UploadDocumnet,
} from "components";
import { CustomerDetailInputField } from "@shared-constants";

const CreateCustomerDetails = () => {
  const renderCustomerInputField = (item: string, index: number) => {
    return (
      <>
        {index < 2 || index > 6 ? (
          <InputTextField
            onChangeText={() => {}}
            placeholder={item}
            containerStyle={{ backgroundColor: Colors.white }}
          />
        ) : (
          <CustomDropDown ArrayOfData={CustomerSegment} topheading={item} />
        )}
      </>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, marginBottom: 130 }}>
      <CustomerDetailHeader
        heading={StringConstants.ENTER_CUSTOMER_DETAILS}
        CurrentScreen={1}
        topheading={StringConstants.CREATE_CUSTOMER_PROFILE}
      />
      <View style={{ paddingHorizontal: 20 }}>
        <FlatList
          data={CustomerDetailInputField}
          renderItem={({ item, index }) =>
            renderCustomerInputField(item, index)
          }
          scrollEnabled={false}
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
      </View>
    </SafeAreaView>
  );
};
export default CreateCustomerDetails;
