import React from "react";
import Header from "components/AppHeader";
import MsgDetails from "./MsgDetails";
import SafeAreaContainer from "components/SafeAreaContainer";
import { Colors } from "commonStyles/RNColor.style";
import StringConstants from "shared/localization";
import { RectangularBox } from "components";
import { FlatList, View } from "react-native";
import {
  IMessageDetail,
} from "models/ApiResponses/MessageResponse";

interface IMessageScreen {
  msgOpenStatus: boolean;
  setMsgOpenStatus: (openMsgStatus: boolean) => void;
  messagedata: IMessageDetail[];
  selectedMsgIndex: number;
  setSelectedMessageIndex: Function;
  
}

const MessageScreen = ({
  msgOpenStatus,
  setMsgOpenStatus,
  messagedata,
  selectedMsgIndex,
  setSelectedMessageIndex,
 
}: IMessageScreen) => {
  console.log("Customer Data:::::::", messagedata);
  const renderMessageBox = (item: IMessageDetail, index: number) => {
    return (
      <RectangularBox
        heading={item?.customer_data?.customer_code}
        subHeading={item?.customer_data?.company_name}
        onPress={() => {
          setMsgOpenStatus(true);
          setSelectedMessageIndex(index);
        }}
      />
    );
  };
  return (
    <SafeAreaContainer backgroundColor={Colors.background2}>
      {!msgOpenStatus ? (
        <>
          <Header topheading={StringConstants.INBOX} />

          <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
            <FlatList
              data={messagedata}
              renderItem={({ item, index }) => renderMessageBox(item, index)}
            />
          </View>
        </>
      ) : selectedMsgIndex >= 0 ? (
        <MsgDetails msgData={messagedata[selectedMsgIndex]} />
      ) : (
        <></>
      )}
    </SafeAreaContainer>
  );
};

export default MessageScreen;
