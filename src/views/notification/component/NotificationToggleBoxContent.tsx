import React from "react";
import { View } from "react-native";
import TextWrapper from "components/TextWrapper";
import StringConstants from "shared/localization";
import commonStyles from "commonStyles/CommonStyle";

const NotificationToggleBoxContent = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <TextWrapper style={[commonStyles.font14MediumBlack, { width: "50%" }]}>
          {StringConstants.CUSTOMER_CODE}
          {`\n`}
          {StringConstants.NUMBER}
        </TextWrapper>

        <TextWrapper style={[commonStyles.font14MediumBlack, { width: "50%" }]}>
          {StringConstants.VISITING_EXE}
          {`\n`}
          {StringConstants.USER_NAME}
        </TextWrapper>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 16,
          width: "100%",
        }}
      >
        <TextWrapper style={[commonStyles.font14MediumBlack, { width: "50%" }]}>
          {StringConstants.MODE_OF_CONDUCT}
          {`\n`}
          {StringConstants.ONLINE}
        </TextWrapper>
        <TextWrapper style={[commonStyles.font14MediumBlack, { width: "50%" }]}>
          {StringConstants.REMARKS}
          {`\n`}
          {StringConstants.MEETING_SUCCESS}
        </TextWrapper>
      </View>
      <View style={{ flexDirection: "row", marginTop: 16 }}>
        <TextWrapper style={commonStyles.font14MediumBlack}>
          {StringConstants.ONLY_REASON}
          {`\n`}
          {StringConstants.VISIT_FOR_FINAL_AGGRE}
        </TextWrapper>
      </View>
    </View>
  );
};

export default NotificationToggleBoxContent;
