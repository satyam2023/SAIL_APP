import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInboxData } from "redux/actions/MessageAction";
import { BottomTabVisibility } from "redux/actions/UIAction";
import { RootState } from "redux/store/Store";
import MessageScreen from "views/message/MessageScreen";

const MessageScreenViewModel = () => {
  const dispatch = useDispatch();
  const [msgOpenStatus, setmsgOpenStatus] = useState<boolean>(false);
  const [selectedMsgIndex, setSelectedMessageIndex] = useState<number>(-1);
  useFocusEffect(() => {
    dispatch(BottomTabVisibility(false));
    return () => dispatch(BottomTabVisibility(true));
  });

  useEffect(() => {
    getInboxData(dispatch);
  }, []);

  const messageData = useSelector(
    (state: RootState) => state?.message?.inbox?.data,
  );

  return (
    <MessageScreen
      msgOpenStatus={msgOpenStatus}
      setMsgOpenStatus={(msgOpenStatus: boolean) =>
        setmsgOpenStatus(msgOpenStatus)
      }
      messagedata={messageData}
      selectedMsgIndex={selectedMsgIndex}
      setSelectedMessageIndex={setSelectedMessageIndex}
    />
  );
};

export default MessageScreenViewModel;
