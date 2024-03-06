import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { useDispatch } from "react-redux";
import { BottomTabVisibility } from "redux/actions/UIAction";
import CustomerDetailHeader from "views/createCustomerProfile/CustomerDetailHeader";
import CreateCustomerDetails from "views/createCustomerProfile/CustomerDetails";
import CustomerDetails from "views/createCustomerProfile/CustomerDetails";
import CustomerRepresentative from "views/createCustomerProfile/CustomerRepresentative";
import Details from "views/createCustomerProfile/Details";
import Footer from "views/createCustomerProfile/component/Footer/Footer";
import RegistrationCompleted from "views/createCustomerProfile/RegistrationCompleted/RegistrationCompleted";
import RepresentativeDetails from "views/createCustomerProfile/RepresentativeDetails";

const createCustomerViewModel=()=>{
    const [CurrentScreen,setCurrentScreen]=useState(1);
    console.log("Current Screen::",CurrentScreen);
    function setScreen(param:number){
        setCurrentScreen(param);
    }
    const [addCustomerRepresentative,setAddCustomerRepresentative]=useState<boolean>(false);
    const [addCompeteitor,setAddCompeteitor]=useState<boolean>(false);
    const dispatch=useDispatch();
    useFocusEffect(()=>{
       dispatch(BottomTabVisibility(false));
       return()=>dispatch(BottomTabVisibility(true));
    });
    const FooterExecuted=()=>{
       setAddCustomerRepresentative(!addCompeteitor);
    }

    return(
    //     <>
        
    //       {CurrentScreen==1 && <CreateCustomerDetails/>}
    //       {CurrentScreen==2 && (!addCustomerRepresentative? <RepresentativeDetails SetFooter={()=>{}}/>:<CustomerRepresentative NavigationProps={undefined} SetFooter={()=>{}}  /> ) }
    //       {CurrentScreen==3 && <RegistrationCompleted/>}
    //       {CurrentScreen!==3 && <Footer CurrentScreen={CurrentScreen} setScreen={setScreen} FooterStatus={CurrentScreen==2?"Representative":""} FooterExecuted={FooterExecuted}/>}
    //   </>
 
    <Details/>

      
    )
};

export default createCustomerViewModel