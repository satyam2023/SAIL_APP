import React, { useRef } from "react";
import {
  GestureResponderEvent,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import {
  CustomerSegment,
  CustomerStatus,
  CustomerSubSegment,
  CustomerSubType,
  CustomerType,
} from "./Data/Data";
import InputTextWithoutIcon from "components/InputTextWithoutIcon/InputText";
import styles from "./Style";
import UploadDocumnet from "components/UploadDocument";
import CustomerDetailHeader from "./CustomerDetailHeader";
import LocateMe from "components/LocateMe";
import CustomDropDown from "components/CustomDropDown";

const CreateCustomerDetails = () => {
  const customerdetails = {
    CustomerCode: useRef(""),
    CompanyName: useRef(""),
  };
  return (
    <SafeAreaView style={{ flex: 1, marginBottom: 130 }}>
      <CustomerDetailHeader
        heading={"Enter Customer Details"}
        CurrentScreen={1}
        topheading={"Create Customer Profile"}
      />
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <View style={{ marginTop: 16 }} />
        <View style={styles.inputbox}>
          <InputTextWithoutIcon
            placeholder="Enter Customer Code"
            ChangeText={(text: any) => {
              customerdetails.CustomerCode.current = text;
            }}
            keyboardType="numeric"
            secureText={false}
            maxLength={20}
          />
        </View>
        <View style={styles.inputbox}>
          <InputTextWithoutIcon
            placeholder="Enter Company Name"
            ChangeText={(text: any) => {
              customerdetails.CustomerCode.current = text;
            }}
            keyboardType="numeric"
            secureText={false}
            maxLength={20}
          />
        </View>
        <CustomDropDown
          ArrayOfData={CustomerSegment}
          topheading="Select Customer Segment"
        />
        <CustomDropDown
          ArrayOfData={CustomerSubSegment}
          topheading="Select Customer Sub Segment"
        />
        <CustomDropDown
          ArrayOfData={CustomerType}
          topheading="Select Customer Type"
        />
        <CustomDropDown
          ArrayOfData={CustomerSubType}
          topheading="Select Customer Sub Type"
        />
        <CustomDropDown
          ArrayOfData={CustomerStatus}
          topheading={"Select Status of Customer"}
        />

        <View />

        <View style={styles.inputbox}>
          <InputTextWithoutIcon
            placeholder="Enter PAN Card Number"
            ChangeText={(text: any) => {
              customerdetails.CustomerCode.current = text;
            }}
            keyboardType="numeric"
            secureText={false}
            maxLength={20}
          />
        </View>
        <View style={styles.inputbox}>
          <InputTextWithoutIcon
            placeholder="Enter GST Number"
            ChangeText={(text: any) => {
              customerdetails.CustomerCode.current = text;
            }}
            keyboardType="numeric"
            secureText={false}
            maxLength={20}
          />
        </View>
        <View style={styles.inputbox}>
          <InputTextWithoutIcon
            placeholder="Website Link"
            ChangeText={(text: any) => {
              customerdetails.CustomerCode.current = text;
            }}
            keyboardType="numeric"
            secureText={false}
            maxLength={20}
          />
        </View>
        <View style={styles.inputbox}>
          <InputTextWithoutIcon
            placeholder="Search for location (area, street name)"
            ChangeText={(text: any) => {
              customerdetails.CustomerCode.current = text;
            }}
            keyboardType="default"
            secureText={false}
            maxLength={20}
          />
        </View>
        <LocateMe onPress={(e: GestureResponderEvent) => {}} />
        <View style={styles.inputbox}>
          <InputTextWithoutIcon
            placeholder="Add Tag Name to Selected Location"
            ChangeText={(text: any) => {
              customerdetails.CustomerCode.current = text;
            }}
            keyboardType="numeric"
            secureText={false}
            maxLength={20}
          />
        </View>
        <UploadDocumnet />
      </ScrollView>
    </SafeAreaView>
  );
};
export default CreateCustomerDetails;
