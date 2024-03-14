import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { useDispatch } from "react-redux";
import { BottomTabVisibility } from "redux/actions/UIAction";
import CreateCustomerScreen from "views/createCustomerProfile/CreateCustomerScreen";


const CreateCustomerViewModel=()=>{


    const dispatch=useDispatch();
    useFocusEffect(()=>{
       dispatch(BottomTabVisibility(false));
       return()=>dispatch(BottomTabVisibility(true));
    });
    return(

    <>
   <CreateCustomerScreen/>
    </>

 

      
    )
};

export default CreateCustomerViewModel