import { navigate } from "@navigation";
import { SCREENS } from "@shared-constants";
import { convertToArray } from "helper/ExtractFirstandLast";
import { IApiResponse } from "models/IApiResponse";
import { SettingsResponse } from "models/SettingResponse";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoaderVisibility } from "redux/actions/LoaderAction";
import { logOutUserAction } from "redux/actions/LogOut";
import SettingScreen from "views/setting/Setting";

const SettingViewModel = () => {
  const dispatch = useDispatch();
  let userData = useSelector((state: any) => state.userAccount.data.data);
  const dataofInputField = convertToArray(userData);

  const updatedDetails={
    email:useRef(""),
    Location:useRef(""),
    Role:useRef(""),
    
  }

  async function logOutApiCalling() {
    dispatch(setLoaderVisibility(true));
    const data = {};
    try {
      const res: IApiResponse<SettingsResponse> = await logOutUserAction(data);
      console.log("RESPONSE IN SETTING MODEL::::",res);
      if (res.isSuccess) {
        navigate(SCREENS.SIGNIN);
      }
    } catch (error){
      
    } finally {
      
      dispatch(setLoaderVisibility(false));
    }
  }


  async function editDetails(){


  }

  return (
    <SettingScreen
      {...{
        userData,
        logOutApiCalling,
        dataofInputField,
        editDetails,
      }}
    />
  );
};

export default SettingViewModel;
