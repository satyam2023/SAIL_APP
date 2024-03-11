import React from "react";
import { Image, ScrollView, TextInput, View } from "react-native";
import Header from "components/HeaderForMainScreen/HeaderMain";
import MsgField from "./MsgField";
import ForwardCard from "./ForwarnCard";
import styles from "views/message/Style/Style";
import Glyphs from "assets/Glyphs";
import CustomButton from "components/CustomButton";
import SafeAreaContainer from "components/SafeAreaContainer";
import StringConstants from "shared/localization";
import { Colors } from "react-native/Libraries/NewAppScreen";
import TextWrapper from "components/TextWrapper";
import commonStyles from "commonStyles/CommonStyle";

const MsgDetails = () => {
  return (
    <>
      <Header topheading={StringConstants.MESSAGE_DETAILS} />
      <SafeAreaContainer>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}
        >
          <MsgField
            heading={StringConstants.CUSTOMER_CODE}
            body={StringConstants.NUMBER}
          />
          <MsgField
            heading={StringConstants.CUSTOMER_NAME}
            body={StringConstants.USER_NAME}
          />
          <MsgField
            heading={StringConstants.CUSTOMER_TYPE}
            body={StringConstants.CUSTOMER_TYPE_TITLE}
          />
          <MsgField
            heading={StringConstants.REASON}
            body={StringConstants.LOREM_TEXT}
          />
          <MsgField
            heading={StringConstants.ISSUE}
            body={StringConstants.LOREM_TEXT}
          />
          <MsgField
            heading={StringConstants.ISSUE_CMNT}
            body={StringConstants.LOREM_TEXT}
          />
          <ForwardCard />
          <ForwardCard />
          <ForwardCard />
          <View style={styles.escalateBox}>
            <View>
              <TextWrapper style={commonStyles.font14RegularGray}>
                {StringConstants.ESCALATED_TO}
              </TextWrapper>
              <TextWrapper
                style={[commonStyles.font14RegularBlack, { marginTop: 5 }]}
              >
                {StringConstants.TITLE}
              </TextWrapper>
            </View>

            <Image
              source={Glyphs.Arrow}
              style={{
                transform: [{ rotate: "90deg" }],
                tintColor: Colors.grey,
              }}
            />
          </View>

          <View style={styles.commentBox}>
            <TextWrapper
              style={[{ marginTop: 8 }, commonStyles.font14RegularBlack]}
            >
              {StringConstants.ADD_COMMENT}
            </TextWrapper>
            <TextInput
              multiline={true}
              placeholder={StringConstants.REMARKS}
              placeholderTextColor={Colors.black}
            />
          </View>
          <CustomButton
            text={StringConstants.SUBMIT}
            buttonStyle={{ backgroundColor: Colors.sailBlue }}
            textStyle={{ color: Colors.white }}
          />
        </ScrollView>
      </SafeAreaContainer>
    </>
  );
};
export default MsgDetails;
