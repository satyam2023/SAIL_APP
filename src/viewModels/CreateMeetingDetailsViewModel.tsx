import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import { BottomTabVisibility } from "redux/actions/UIAction";
import Meeting from "views/createMeetingDetail/Meeting";

const CreateMetingDetailsViewModel=()=>{
    
    const dispatch=useDispatch();
    useFocusEffect(()=>{
       dispatch(BottomTabVisibility(false));
       return()=>dispatch(BottomTabVisibility(true));
    });
    return(
     
    <Meeting/>

    );
};

export default CreateMetingDetailsViewModel;