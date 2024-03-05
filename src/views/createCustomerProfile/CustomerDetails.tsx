import React, { useRef } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import {
  CustomerSegment,
  CustomerStatus,
  CustomerSubSegment,
  CustomerSubType,
  CustomerType,
} from "./Data/Data";
import DropDown from "components/DropDown/DropDown";
import InputTextWithoutIcon from "components/InputTextWithoutIcon/InputText";
import styles from "./Style";
import {blue } from "commonStyles/RNColor.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import UploadDocumnet from "components/UploadDocument/UploadDocument";
import CustomerDetailHeader from "./CustomerDetailHeader";

const CreateCustomerDetails = () => {
  const customerdetails = {
    CustomerCode: useRef(""),
    CompanyName: useRef(""),
  };
  return (
    <SafeAreaView style={{ flex: 1 ,marginBottom:130}}>
         <CustomerDetailHeader heading={"Enter Customer Details"} CurrentScreen={1} topheading={"Create Customer Profile"}/>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <View style={{marginTop:16}}/>
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
        <DropDown
          data={CustomerSegment}
          heading="Select Customer Segment"
          setReason={() => {}}
        />
        <DropDown
          data={CustomerSubSegment}
          heading="Select Customer Sub Segment"
          setReason={() => {}}
        />
        <DropDown
          data={CustomerType}
          heading="Select Customer Type"
          setReason={() => {}}
        />
        <DropDown
          data={CustomerSubType}
          heading="Select Customer Sub Type"
          setReason={() => {}}
        />
        <DropDown
          data={CustomerStatus}
          heading="Select Status of Customer"
          setReason={() => {}}
        />
        <View style={{marginTop:16}}/>

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
        <View style={styles.locateConainer}>
            <View style={{height:16,width:16,borderRadius:9,backgroundColor:blue}}/>
            <TouchableOpacity>
            <Text style={styles.locateText}>Locate Me</Text>
            </TouchableOpacity>
        </View>
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
     <UploadDocumnet/>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CreateCustomerDetails;
