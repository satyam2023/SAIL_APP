import { useFocusEffect } from "@react-navigation/native";
import { Colors } from "commonStyles/RNColor.style";
import React from "react";
import { SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import { BottomTabVisibility } from "redux/actions/UIAction";
import MessageScreen from "views/message/MessageScreen";

const MessageScreenViewModel=()=>{
    const dispatch=useDispatch();
    useFocusEffect(()=>{
       dispatch(BottomTabVisibility(false));
       return()=>dispatch(BottomTabVisibility(true));
    });

    return(
    
    <MessageScreen/>
    
 
    
    );
};

export default MessageScreenViewModel;