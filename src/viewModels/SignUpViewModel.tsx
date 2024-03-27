import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { signupAction } from "redux/actions/SignUpAction";
import { IApiResponse } from "models/ApiResponses/IApiResponse";
import { setLoaderVisibility } from "redux/actions/LoaderAction";
import {
  validateNameEmailLocation,
  validatePasswordAndCpassword,
  validateUpnAndContact,
} from "helper/ValidationRegex";
import { ISignupBody } from "models/ApiResponses/SignUpResponse";
import SignUpScreen from "views/signup/SignUpScreen";
import { saveUserdata } from "redux/actions/AccountAction";
import { navigate } from "@navigation";
import { SCREENS } from "@shared-constants";

const SignUpScreenViewMOdel = () => {
  const [CurrentScreen, setCurrentScreen] = useState<number>(1);
  const [error, setError] = useState({
    upn: false,
    Contact: false,
    Name: false,
    Email: false,
    Location: false,
    Role: false,
    Password: false,
    Confirm_Password: false,
  });
  const userDetail = {
    Upn: useRef<string>(""),
    Contact: useRef<string>(""),
    Name: useRef<string>(""),
    Email: useRef<string>(""),
    Location: useRef<string>(""),
    Role: useRef<string>(""),
    Password: useRef<string>(""),
    Confirm_Password: useRef<string>(""),
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (
      !error.upn &&
      !error.Contact &&
      userDetail.Upn.current.length > 2 &&
      CurrentScreen == 1
    )
      setCurrentScreen(2);
    else if (
      !error.Name &&
      !error.Email &&
      !error.Location &&
      !error.Role &&
      CurrentScreen == 2
    )
      setCurrentScreen(3);
    else if (
      !error.Password &&
      !error.Confirm_Password &&
      userDetail.Password.current == userDetail.Confirm_Password.current &&
      userDetail.Password.current.length > 0 &&
      CurrentScreen == 3
    ) {
      setCurrentScreen(1);
      signup();
    }
  }, [error]);

  const signup = async () => {
    dispatch(setLoaderVisibility(true));
    const body = {
      user_upn: userDetail.Upn.current,
      user_number: userDetail.Contact.current,
      user_name: userDetail.Name.current,
      email: userDetail.Email.current,
      user_location: userDetail.Location.current,
      user_role: userDetail.Role.current,
      password: userDetail.Password.current,
      c_password: userDetail.Confirm_Password.current,
      autologin: "",
    };

    try {
      const res: IApiResponse<ISignupBody> = await signupAction(body);
      if (res.isSuccess) {
        dispatch(saveUserdata(res.data));
        navigate(SCREENS.TAB);
      } else {
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoaderVisibility(false));
    }
  };

  function setScreen(CurrentScreen: number) {
    setCurrentScreen(CurrentScreen);
  }

  const Submit = () => {
    if (CurrentScreen == 1) {
      validateUpnAndContact(userDetail, setError);
    } else if (CurrentScreen == 2) {
      validateNameEmailLocation(userDetail, setError);
    } else if (CurrentScreen == 3) {
      validatePasswordAndCpassword(userDetail, setError);
    }
  };

  return (
    <SignUpScreen
      {...{
        setScreen,
        CurrentScreen,
        userDetail,
        Submit,
        error,
      }}
    />
  );
};

export default SignUpScreenViewMOdel;
