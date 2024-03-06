import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import { BottomTabVisibility } from "redux/actions/UIAction";
import Message from "views/message/Message";

const MessageScreenViewModel=()=>{
    const dispatch=useDispatch();
    useFocusEffect(()=>{
       dispatch(BottomTabVisibility(false));
       return()=>dispatch(BottomTabVisibility(true));
    });

    return(
   
<Message/>
  
  
    );
};

export default MessageScreenViewModel;