import { useFocusEffect } from "@react-navigation/native";
import { Colors } from "commonStyles/RNColor.style";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import { BottomTabVisibility } from "redux/actions/UIAction";
import Details from "views/createCustomerProfile/Details";

const CreateCustomerViewModel=()=>{
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
 <SafeAreaView style={{backgroundColor:Colors.sailBlue,flex:1}}>
    <Details/>
    </SafeAreaView>

      
    )
};

export default CreateCustomerViewModel