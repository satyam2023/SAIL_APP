import React, { useState } from "react";
import { SafeAreaView} from "react-native";
import Header from "components/HeaderForMainScreen/HeaderMain";
import CommonBoxClickable from "./component/CommonBoxClickable";
import MsgDetails from "./component/MsgDetails/MsgDetails";
const Message: React.FC<{}> = (props: any) => {
  const [msgOpenStatus, setmsgOpenStatus] = useState<boolean>(false);
  function setOpenStatus(param: boolean) {
    setmsgOpenStatus(param);
  }
  return (
    <SafeAreaView style={{ backgroundColor: "#F9F9FC",flex:1 ,paddingHorizontal:20}}>
      {!msgOpenStatus ? (
        <>
          <Header topheading="Inbox(03)" />
          <CommonBoxClickable setOpenStatus={setOpenStatus} />
          <CommonBoxClickable setOpenStatus={setOpenStatus} />
          <CommonBoxClickable setOpenStatus={setOpenStatus} />
        </>
      ) : (
        <MsgDetails />
      )}
    </SafeAreaView>
  );
};

export default Message;
