import React from "react";
import Header from "components/AppHeader";
import MsgDetails from "./MsgDetails";
import SafeAreaContainer from "components/SafeAreaContainer";
import { Colors } from "commonStyles/RNColor.style";
import StringConstants from "shared/localization";
import { RectangularBox } from "components";
import { View } from "react-native";

interface IMessageScreen {
  msgOpenStatus: boolean;
  setMsgOpenStatus: (openMsgStatus: boolean) => void;
}

const MessageScreen = ({ msgOpenStatus, setMsgOpenStatus }: IMessageScreen) => {
  return (
    <SafeAreaContainer backgroundColor={Colors.background2}>
      {!msgOpenStatus ? (
        <>
          <Header topheading={StringConstants.INBOX} />

          <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
            <RectangularBox
              heading={StringConstants.CUSTOMER_CODE}
              subHeading={StringConstants.CUSTOMER_NAME}
              onPress={() => setMsgOpenStatus(true)}
            />
              <RectangularBox
              heading={StringConstants.CUSTOMER_CODE}
              subHeading={StringConstants.CUSTOMER_NAME}
              onPress={() => setMsgOpenStatus(true)}
            />
          </View>
        </>
      ) : (
        <MsgDetails />
      )}
    </SafeAreaContainer>
  );
};

export default MessageScreen;
