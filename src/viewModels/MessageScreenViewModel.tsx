import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { useDispatch } from "react-redux";
import { BottomTabVisibility } from "redux/actions/UIAction";
import MessageScreen from "views/message/MessageScreen";

const MessageScreenViewModel=()=>{
    const dispatch=useDispatch();
    useFocusEffect(()=>{
       dispatch(BottomTabVisibility(false));
       return()=>dispatch(BottomTabVisibility(true));
    });

    return(<MessageScreen/>  );
};

export default MessageScreenViewModel;