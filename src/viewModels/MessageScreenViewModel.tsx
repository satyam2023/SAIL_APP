import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BottomTabVisibility } from "redux/actions/UIAction";
import MessageScreen from "views/message/MessageScreen";

const MessageScreenViewModel=()=>{
    const dispatch=useDispatch();
    const [msgOpenStatus, setmsgOpenStatus] = useState<boolean>(false);
    useFocusEffect(()=>{
       dispatch(BottomTabVisibility(false));
       return()=>dispatch(BottomTabVisibility(true));
    });

    return(
    
    <MessageScreen
    msgOpenStatus={msgOpenStatus}
    setMsgOpenStatus={(msgOpenStatus:boolean)=>setmsgOpenStatus(msgOpenStatus)}
    />
    
 
    
    );
};

export default MessageScreenViewModel;