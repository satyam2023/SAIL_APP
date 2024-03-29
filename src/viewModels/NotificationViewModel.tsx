import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { useDispatch } from "react-redux";
import { BottomTabVisibility } from "redux/actions/UIAction";
import Notification from "views/notification/Notification";

const NotificationViewModel=()=>{
    const dispatch=useDispatch();
    useFocusEffect(()=>{
       dispatch(BottomTabVisibility(false));
       return()=>dispatch(BottomTabVisibility(true));
    });
    return <Notification/>;
};

export default NotificationViewModel;