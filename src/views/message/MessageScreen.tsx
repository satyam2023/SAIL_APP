import React, { useState } from "react";
import Header from "components/AppHeader";
import MessageBoxClickable from "./component/MessageBoxClickable";
import MsgDetails from "./component/MsgDetails/MsgDetails";
import SafeAreaContainer from "components/SafeAreaContainer";
import { Colors } from "commonStyles/RNColor.style";
import StringConstants from "shared/localization";
const MessageScreen = () => {
  const [msgOpenStatus, setmsgOpenStatus] = useState<boolean>(false);
  const setOpenStatus = (param: boolean) => setmsgOpenStatus(param);

  return (
    <SafeAreaContainer backgroundColor={Colors.background2}>
      {!msgOpenStatus ? (
        <>
          <Header topheading={StringConstants.INBOX} />
          <SafeAreaContainer>
            <MessageBoxClickable setOpenStatus={setOpenStatus} />
            <MessageBoxClickable setOpenStatus={setOpenStatus} />
            <MessageBoxClickable setOpenStatus={setOpenStatus} />
          </SafeAreaContainer>
        </>
      ) : (
        <MsgDetails />
      )}
    </SafeAreaContainer>
  );
};

export default MessageScreen;
