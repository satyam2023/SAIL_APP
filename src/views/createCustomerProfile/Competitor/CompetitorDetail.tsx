import React from "react";
import { SafeAreaView,View } from "react-native";
import InputTextField from "components/InputTextField";
import StringConstants from "shared/localization";
import { Colors } from "commonStyles/RNColor.style";
import commonStyles from "commonStyles/CommonStyle";
import TextWrapper from "components/TextWrapper";

const CompetitorDetail = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TextWrapper
        style={[commonStyles.font14MediumBlackpearl,{margin:16,}]}
      >
        {StringConstants.ADD_COMPETITOR_DETAILS}
      </TextWrapper>
      <View style={{ paddingHorizontal: 20 }}>
        <InputTextField
          onChangeText={() => {}}
          placeholder={StringConstants.ENTER_COMPANY_NAME}
          containerStyle={{ backgroundColor: Colors.white }}
        />
        <InputTextField
          onChangeText={() => {}}
          placeholder={StringConstants.ENTER_ADDRESS}
          containerStyle={{ backgroundColor: Colors.white }}
        />
        <InputTextField
          onChangeText={() => {}}
          placeholder={StringConstants.ENTER_COMMENTS}
          containerStyle={{ backgroundColor: Colors.white }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CompetitorDetail;
