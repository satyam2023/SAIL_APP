import React from "react";
import { ScrollView, View } from "react-native";
import UploadDocumnet from "components/UploadDocument";
import StringConstants from "shared/localization";
import { Colors } from "commonStyles/RNColor.style";
import InputTextField from "components/InputTextField";
import { FlatList } from "react-native";
import { RepresentativeDetailInputFieldData } from "@shared-constants";

interface RepProps {}

const RepresentativeDetails = ({}: RepProps) => {
  const renderCustomerRepresentativeInputField = (item: string, _: number) => {
    return (
      <InputTextField
        onChangeText={() => {}}
        placeholder={item}
        containerStyle={{ backgroundColor: Colors.white }}
      />
    );
  };
  return (
    <ScrollView style={{ flex: 1, paddingHorizontal: 20,paddingTop:10 }}>
      <UploadDocumnet
        uploadType={StringConstants.UPLOAD_VISITING_CARD}
        style={{ backgroundColor: Colors.dashed }}
      />
      <View style={{ marginTop: 16 }}>
        <FlatList
          data={RepresentativeDetailInputFieldData}
          renderItem={({ item, index }) =>
            renderCustomerRepresentativeInputField(item, index)
          }
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
};
export default RepresentativeDetails;
