import { navigate } from "@navigation";
import { SCREENS } from "@shared-constants";
import { convertToArray } from "helper/helperFunctions";
import { IApiResponse } from "models/ApiResponses/IApiResponse";
import { SettingsResponse } from "models/ApiResponses/SettingResponse";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoaderVisibility } from "redux/actions/LoaderAction";
import { logOutUserAction } from "redux/actions/LogOut";
import { settingsAction } from "redux/actions/SettingsAction";
import { store } from "redux/store/Store";
import SettingScreen from "views/setting/Setting";

const SettingViewModel = () => {
  const dispatch = useDispatch();
  const [isDetailsUpdating, setDetailsUpdating] = useState<boolean>(false);
  let userData = store?.getState()?.userAccount?.data?.data;
  let roleLocationDropDownList = store?.getState()?.masterData?.masterData?.data;
  const updatedDetails = {
    email: useRef(userData?.user?.email),
    Location: useRef(userData?.user?.user_location),
    Role: useRef(userData?.user?.user_role),
  };
  const dataofInputField = convertToArray(userData);
  async function logOutApiCalling() {
    dispatch(setLoaderVisibility(true));
    const data = {};
    try {
      const res: IApiResponse<SettingsResponse> = await logOutUserAction(data);
      if (res.isSuccess) {
        navigate(SCREENS.SIGNIN);
      }
    } catch (error) {
    } finally {
      dispatch(setLoaderVisibility(false));
    }
  }

  async function updateApiCalling() {
    dispatch(setLoaderVisibility(true));
    const body = {
      id: userData?.user?.id,
      user_location: updatedDetails.Location.current,
      email: updatedDetails.Location.current,
      user_role: updatedDetails.Role.current,
    };
    try {
      const res: IApiResponse<SettingsResponse> = await settingsAction(body);
      if (res.isSuccess) {

      }
    } catch (error) {}
    dispatch(setLoaderVisibility(false));
  }

  function editDetails(text: string, index: number) {
    if (index == -1) setDetailsUpdating(true);
    else if  (index == -2) {
      setDetailsUpdating(false);
    if(userData?.user?.user_location!=updatedDetails.Location.current||
      userData?.user?.user_role!=updatedDetails.Role.current ||
      userData?.user?.email!=updatedDetails.email.current)
      // updateApiCalling();
    {

    }
    }
  }

  return (
    <SettingScreen
      {...{
        userData,
        logOutApiCalling,
        dataofInputField,
        editDetails,
        updatedDetails,
        updateApiCalling,
        isDetailsUpdating,
        roleLocationDropDownList
        
      }}
    />
  );
};

export default SettingViewModel;
