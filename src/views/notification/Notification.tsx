import React from "react";
import { SafeAreaView, ScrollView,} from "react-native";
import Header from "components/HeaderForMainScreen/HeaderMain";
import TextWrapper from "components/TextWrapper";
import fonts from "@fonts";
import { Colors } from "commonStyles/RNColor.style";
import SafeAreaContainer from "components/SafeAreaContainer";
import CustomToggleBox from "components/CustomToggleBox";
import Glyphs from "assets/Glyphs";
import NotificationToggleBoxContent from "./component/NotificationToggleBoxContent";
import StringConstants from "shared/localization";

const NotificationScreen = () => {
  return (
    <SafeAreaView>
      <Header topheading={StringConstants.NOTIFICATIONS} />
      <ScrollView>
        <SafeAreaContainer>
          <TextWrapper
            fontFamily={fonts.type.regular}
            color={Colors.blackPeral}
            style={{ marginVertical: 8 }}
          >
            {StringConstants.TODAY}
          </TextWrapper>
          <CustomToggleBox
            heading={StringConstants.VISIT_PLAN_WITH}
            toggleContent={<NotificationToggleBoxContent />}
            isNotificationDate={"24 Apr"}
            leftIcon={Glyphs.Notify}
          />
          <TextWrapper
            fontFamily={fonts.type.regular}
            color={Colors.blackPeral}
            style={{ marginBottom: 8 }}
          >
            {StringConstants.YESTERDAY}
          </TextWrapper>
          <CustomToggleBox
            heading={StringConstants.VISIT_PLAN_WITH}
            toggleContent={<NotificationToggleBoxContent />}
            isNotificationDate={"24 Apr"}
            leftIcon={Glyphs.Notify}
          />
          <CustomToggleBox
            heading={StringConstants.VISIT_PLAN_WITH}
            toggleContent={<NotificationToggleBoxContent />}
            isNotificationDate={"24 Apr"}
            leftIcon={Glyphs.Notify}
          />
          <CustomToggleBox
            heading={StringConstants.VISIT_PLAN_WITH}
            toggleContent={<NotificationToggleBoxContent />}
            isNotificationDate={"24 Apr"}
            leftIcon={Glyphs.Notify}
          />
          <CustomToggleBox
            heading={StringConstants.VISIT_PLAN_WITH}
            toggleContent={<NotificationToggleBoxContent />}
            isNotificationDate={"24 Apr"}
            leftIcon={Glyphs.Notify}
          />
        </SafeAreaContainer>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;
