import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import StringConstants from "shared/localization";
import commonStyles from "commonStyles/CommonStyle";
import { CompetitorDetailData } from "@shared-constants";
import { InputTextField, TextWrapper } from "components";
import { Colors } from "commonStyles/RNColor.style";

const CompetitorDetail = () => {
  const renderCompettorInputField = (item: string, _: number) => {
    return (
      <InputTextField
        onChangeText={() => {}}
        placeholder={item}
        containerStyle={{ backgroundColor: Colors.white }}
      />
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TextWrapper
        style={[commonStyles.font14MediumBlackpearl, { margin: 16 }]}
      >
        {StringConstants.ADD_COMPETITOR_DETAILS}
      </TextWrapper>

      <View style={{ paddingHorizontal: 20 }}>
       <FlatList
       data={CompetitorDetailData}
       renderItem={({item, index}) =>
        renderCompettorInputField(item, index)}
       />
      </View>
    </SafeAreaView>
  );
};

export default CompetitorDetail;
