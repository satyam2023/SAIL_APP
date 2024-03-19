import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BottomTabVisibility } from "redux/actions/UIAction";
import MeetingScreen from "views/createMeetingDetail/MeetingScreen";

const CreateMetingDetailsViewModel=()=>{
    const [currentScreen, setCurrentScreen] = useState<number>(1);
    const [successStatus, setSuccessStatus] = useState<boolean>(false);
  
  
    
    const dispatch=useDispatch();
    useFocusEffect(()=>{
       dispatch(BottomTabVisibility(false));
       return()=>dispatch(BottomTabVisibility(true));
    });

    return(
     
    <MeetingScreen
    currentScreen={currentScreen}
    successStatus={successStatus}
    setVisitSuccess={( successStatus:boolean)=>setSuccessStatus(successStatus)}
    setCurrentScreen={(currentScreen:number)=>setCurrentScreen(currentScreen)}
    
    />

    );
};

export default CreateMetingDetailsViewModel;