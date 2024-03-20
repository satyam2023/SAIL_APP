import { convertToArray } from "helper/ExtractFirstandLast";
import React from "react";
import { useSelector } from "react-redux";
import SettingScreen from "views/setting/Setting";

const SettingViewModel=()=>{
    let userData=useSelector((state:any)=>state.userAccount.data.data);
    convertToArray(userData);
    return(
   <SettingScreen
   {...{
  userData

   }}
   
   />
    )
};

export default SettingViewModel;