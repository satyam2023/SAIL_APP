import React from "react";
import { SafeAreaView, ScrollView} from "react-native";
import fonts from "@fonts";
import { Colors } from "commonStyles/RNColor.style";
import Glyphs from "assets/Glyphs";
import NotificationToggleBoxContent from "./component/NotificationToggleBoxContent";
import StringConstants from "shared/localization";
import { FlatList } from "react-native-gesture-handler";
import { NotificationContent } from "./mockData/Data";
import { CustomToggleBox, Header, TextWrapper } from "components";

const NotificationScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background2 }}>
      <Header topheading={StringConstants.NOTIFICATIONS} />
      <ScrollView style={{ paddingHorizontal: 20 }} showsVerticalScrollIndicator={false}>
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
          isNotificationDate={StringConstants.APR_24}
          leftIcon={Glyphs.Notify}
        />
        <TextWrapper
          fontFamily={fonts.type.regular}
          color={Colors.blackPeral}
          style={{ marginBottom: 8 }}
        >
          {StringConstants.YESTERDAY}
        </TextWrapper>
        <FlatList
          data={NotificationContent}
          renderItem={({ item, index }) => (
            <CustomToggleBox
             
              heading={item}
              toggleContent={<NotificationToggleBoxContent />}
              isNotificationDate={StringConstants.APR_24}
              leftIcon={Glyphs.Notify}
            />
          )}
          scrollEnabled={false}
        />
       
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;
