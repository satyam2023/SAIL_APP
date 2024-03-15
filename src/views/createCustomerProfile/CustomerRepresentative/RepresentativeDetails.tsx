import React from "react";
import { ScrollView, View } from "react-native";
import UploadDocumnet from "components/UploadDocument";
import StringConstants from "shared/localization";
import { Colors } from "commonStyles/RNColor.style";
import InputTextField from "components/InputTextField";

interface RepProps {}

const RepresentativeDetails: React.FC<RepProps> = ({}: RepProps) => {
  return (
    <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
      <UploadDocumnet
        uploadType={StringConstants.UPLOAD_VISITING_CARD}
        style={{ backgroundColor: Colors.dashed }}
      />
      <View style={{ marginTop: 16 }}>
        <InputTextField
          onChangeText={() => {}}
          placeholder={StringConstants.ENTER_NAME}
          containerStyle={{ backgroundColor: Colors.white }}
        />
        <InputTextField
          onChangeText={() => {}}
          placeholder={StringConstants.ENTER_DESIGNATION}
          containerStyle={{ backgroundColor: Colors.white }}
        />
        <InputTextField
          onChangeText={() => {}}
          placeholder={StringConstants.ENTER_DEPARTMENT}
          containerStyle={{ backgroundColor: Colors.white }}
        />
        <InputTextField
          onChangeText={() => {}}
          placeholder={StringConstants.ENTER_ADDRESS}
          containerStyle={{ backgroundColor: Colors.white }}
        />
        <InputTextField
          onChangeText={() => {}}
          placeholder={StringConstants.ENTER_EMAIL_ADDRESS}
          containerStyle={{ backgroundColor: Colors.white }}
        />
        <InputTextField
          onChangeText={() => {}}
          placeholder={StringConstants.ENETR_CONTACTNO}
          containerStyle={{ backgroundColor: Colors.white }}
        />
      </View>
    </ScrollView>
  );
};
export default RepresentativeDetails;
