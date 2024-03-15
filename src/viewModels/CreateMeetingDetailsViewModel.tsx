import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { useDispatch } from "react-redux";
import { BottomTabVisibility } from "redux/actions/UIAction";
import MeetingScreen from "views/createMeetingDetail/Meeting";

const CreateMetingDetailsViewModel=()=>{
    
    const dispatch=useDispatch();
    useFocusEffect(()=>{
       dispatch(BottomTabVisibility(false));
       return()=>dispatch(BottomTabVisibility(true));
    });
    return(
     
    <MeetingScreen/>

    );
};

export default CreateMetingDetailsViewModel;