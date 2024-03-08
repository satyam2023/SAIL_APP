import React from "react";
import Styles from "./Style";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
// import Header from "./Header";
//import InputText from "../InputTextInsideMain";
// import InputText from "../InputText/InputText";
import InputTextWithoutIcon from "components/InputTextWithoutIcon/InputText";
import CustomerDetailHeader from "./CustomerDetailHeader";
import InputTextField from "components/InputTextField";
import StringConstants from "shared/localization";
import { Colors } from "commonStyles/RNColor.style";
interface RepProps {
  SetFooter: Function;
}

const RepresentativeDetails = ({ SetFooter }: RepProps) => {
  return (
    <>
      <CustomerDetailHeader
        heading={StringConstants.ADD_CUSTOMER_REP}
        CurrentScreen={2}
        topheading={StringConstants.ADD_CUSTOMER_REP}
      />
      <ScrollView style={{ marginBottom: 180, paddingHorizontal: 20 }}>
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
            width: "100%",
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
          <InputTextField
            onChangeText={() => {}}
            placeholder={StringConstants.ENTER_NAME}
            maxlength={10}
            containerStyle={{ backgroundColor: Colors.white }}
          />
          <InputTextField
            onChangeText={() => {}}
            placeholder={StringConstants.ENTER_DESIGNATION}
            maxlength={10}
            containerStyle={{ backgroundColor: Colors.white }}
          />
          <InputTextField
            onChangeText={() => {}}
            placeholder={StringConstants.ENTER_DEPARTMENT}
            maxlength={10}
            containerStyle={{ backgroundColor: Colors.white }}
          />
          <InputTextField
            onChangeText={() => {}}
            placeholder={StringConstants.ENTER_ADDRESS}
            maxlength={10}
            containerStyle={{ backgroundColor: Colors.white }}
          />
          <InputTextField
            onChangeText={() => {}}
            placeholder={StringConstants.ENTER_EMAIL_ADDRESS}
            maxlength={10}
            containerStyle={{ backgroundColor: Colors.white }}
          />
          <InputTextField
            onChangeText={() => {}}
            placeholder={StringConstants.ENETR_CONTACTNO}
            maxlength={10}
            containerStyle={{ backgroundColor: Colors.white }}
          />
        </View>
      </ScrollView>
    </>
  );
};
export default RepresentativeDetails;
