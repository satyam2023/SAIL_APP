import React from "react";
import { FlatList, Image, SafeAreaView, View } from "react-native";
import styles from "./Style/Style";
import Data from "./Data/Data";
import Glyphs from "assets/Glyphs";
import CustomButton from "components/CustomButton";
import { Colors } from "commonStyles/RNColor.style";
import StringConstants from "shared/localization";
import CustomerDetails from "components/CustomerDetails";
import TextWrapper from "components/TextWrapper";
import CustomCheckBox from "components/CustomCheckBox";
import commonStyles from "commonStyles/CommonStyle";
import InputTextField from "components/InputTextField";
import fonts from "@fonts";
import { navigate } from "@navigation";
import { SCREENS } from "@shared-constants";
import { RectangularBox } from "components";
interface executedCustomerProps {
  handleCustomerClick: Function;
  executedVisitFieldData: string[];
  setSelectedIndexValue: Function;
  executedVisitList: any;
  selectedIndexValue: number;
}
const ExecutedCustomer = ({
  handleCustomerClick,
  executedVisitFieldData,
  executedVisitList,
  selectedIndexValue,
}: executedCustomerProps) => {
  const renderIssues = (item: any, index: number) => {
    return (
      <>
        <RectangularBox
          heading={StringConstants.ISSUE}
          subHeading={item?.issue_name?.name}
          leftIcon={Glyphs.Calender}
          isRightNotIconRequired
          isCustomerColumn
        />
        <RectangularBox
          heading={StringConstants.ISSUE_CMNT}
          subHeading={item?.comment}
          leftIcon={Glyphs.Calender}
          isRightNotIconRequired
          isCustomerColumn
        />
      </>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <CustomerDetails
        CustomerData={executedVisitFieldData.filter((_, index) => index < 14)}
        onPress={() => handleCustomerClick()}
        placeholderData={Data}
      />
      <FlatList
        data={executedVisitList[selectedIndexValue]?.myissues}
        renderItem={({ item, index }) => renderIssues(item, index)}
      />
      <View style={{ flexDirection: "row", marginLeft: 16 }}>
        <TextWrapper style={commonStyles.font14MediumBlackpearl}>
          {StringConstants.MARKED_AS_RESOLVED}
        </TextWrapper>
        <CustomCheckBox
          onPress={() => {}}
          status={true}
          isRectangular
          style={{ marginLeft: 16 }}
        />
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 25 }}>
        <TextWrapper style={commonStyles.font14MediumBlackpearl}>
          {StringConstants.COMMENT_BY_ESCALATED_MAN}
        </TextWrapper>
        <InputTextField
          onChangeText={() => {}}
          defaultValue={StringConstants.COMMENT_BY_ESCALATED_MAN_COMES_HERE}
          containerStyle={{
            borderRadius: 0,
            backgroundColor: Colors.background2,
            marginTop: 10,
          }}
          textStyle={[commonStyles.font14RegularGray, { bottom: 13 }]}
          placeholder={""}
          multiline={true}
        />

        <TextWrapper style={commonStyles.font14MediumBlackpearl}>
          {StringConstants.RESOLUTION_CMNT}
        </TextWrapper>
        <InputTextField
          onChangeText={() => {}}
          placeholder={StringConstants.RESOLUTION_CMNT_HERE}
          containerStyle={{
            borderRadius: 0,
            backgroundColor: Colors.white,
            borderWidth: 1,
            borderColor: Colors.lightGray2,
            marginTop: 10,
          }}
          textStyle={[commonStyles.font14RegularGray, { bottom: 13 }]}
          isEditable={false}
          multiline={true}
        />
      </View>
      <CustomerDetails
        CustomerData={executedVisitFieldData.filter((_, index) => index >= 14)}
        onPress={() => {}}
        iSBreakeddetails={true}
        placeholderData={Data}
      />

      <View style={{ flexDirection: "row", marginVertical: 12 }}>
        <Image source={Glyphs.Download} style={{ marginHorizontal: 16 }} />
        <TextWrapper
          style={{
            fontFamily: fonts.type.medium,
            color: Colors.sailBlue,
            textDecorationLine: "underline",
          }}
        >
          {StringConstants.DOWNLOAD_PDF_REPORT}
        </TextWrapper>
      </View>

      <CustomButton
        text={StringConstants.SUBMIT}
        buttonStyle={{ backgroundColor: Colors.sailBlue }}
        textStyle={{ color: Colors.white }}
        onPress={() => navigate(SCREENS.MAIN)}
      />
    </SafeAreaView>
  );
};

export default ExecutedCustomer;
