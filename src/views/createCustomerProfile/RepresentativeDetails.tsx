import React from "react";
import Styles from "./Style";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
// import Header from "./Header";
//import InputText from "../InputTextInsideMain";
// import InputText from "../InputText/InputText";
import InputTextWithoutIcon from "components/InputTextWithoutIcon/InputText";
import CustomerDetailHeader from "./CustomerDetailHeader";
interface RepProps {
  SetFooter: Function;
}

const RepresentativeDetails= ({
  SetFooter,
}: RepProps) => {
  return (
    <>
     <CustomerDetailHeader
        heading="Add Customer Representative"
        CurrentScreen={2}
        topheading="Add Customer Representative"
      />
    <ScrollView style={{ marginBottom: 180,paddingHorizontal:20 }}>
     
      <Text
        style={{
          fontWeight: "500",
          fontSize: 14,
          lineHeight: 16,
          color: "#666666",
          marginTop: 20,
        }}
      >
        Upload Visiting Card
      </Text>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 82,
          borderWidth: 1,
          borderColor: "#233972",
          borderStyle: "dashed",
          borderRadius: 33,
          marginTop: 19,
          backgroundColor: "#F9F9FC",
          marginBottom: 0,
        }}
      >
        <View style={{ height: 34, marginTop: 33 }}>
          <Text
            style={{
              alignSelf: "center",
              fontWeight: "500",
              fontSize: 16,
              color: "#666666",
              lineHeight: 16,
            }}
          >
            + Upload Visiting Card
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{ marginTop: 16 }}>
        <View style={Styles.inputbox}>
          <InputTextWithoutIcon
            placeholder="Enter Name"
            ChangeText={(text: any) => {}}
            keyboardType="numeric"
            secureText={false}
            maxLength={10}
          />
        </View>
        <View style={Styles.inputbox}>
          <InputTextWithoutIcon
            placeholder="Enter Designation"
            ChangeText={(text: any) => {}}
            keyboardType="numeric"
            secureText={false}
            maxLength={10}
          />
        </View>
        <View style={Styles.inputbox}>
          <InputTextWithoutIcon
            placeholder="Enter Departement"
            ChangeText={(text: any) => {}}
            keyboardType="numeric"
            secureText={false}
            maxLength={10}
          />
        </View>
        <View style={Styles.inputbox}>
          <InputTextWithoutIcon
            placeholder="Enter Address"
            ChangeText={(text: any) => {}}
            keyboardType="numeric"
            secureText={false}
            maxLength={10}
          />
        </View>
        <View style={Styles.inputbox}>
          <InputTextWithoutIcon
            placeholder="Enter Email Address"
            ChangeText={(text: any) => {}}
            keyboardType="numeric"
            secureText={false}
            maxLength={10}
          />
        </View>
        <View style={Styles.inputbox}>
          <InputTextWithoutIcon
            placeholder="Enter Contact Number"
            ChangeText={(text: any) => {}}
            keyboardType="numeric"
            secureText={false}
            maxLength={10}
          />
        </View>
      </View>
    </ScrollView>
    </>
  );
};
export default RepresentativeDetails;
