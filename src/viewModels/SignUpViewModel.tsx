import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { signupAction } from "redux/actions/SignUpAction";
import { IApiResponse } from "models/IApiResponse";
import { setLoaderVisibility } from "redux/actions/LoaderAction";
import {
  validateContactNumber,
  validateDropDown,
  validateEmail,
  validateName,
  validatePassword,
  validateUpnNumber,
} from "helper/ValidationRegex";
import { ISignupBody } from "models/SignUpResponse";
import SignUpScreen from "views/signup/SignUpScreen";
import { navigate } from "@navigation";
import { SCREENS } from "@shared-constants";


const SignUpScreenViewMOdel = () => {
  const [CurrentScreen, setCurrentScreen] = useState(1);
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
      userDetail.Password.current.length > 0
    ) {
      navigate(SCREENS.SIGNIN);
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
      console.log("SignUp Result ::::", res);
      if (res.isSuccess) {
        console.log("signUp is successful::", res);
      } else {
        console.log("signUp is Notsuccessful::", res);
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
      setError((prev) => ({
        ...prev,
        upn: !validateUpnNumber(userDetail.Upn.current),
      }));
      setError((prev) => ({
        ...prev,
        Contact: !validateContactNumber(userDetail.Contact.current),
      }));
    } else if (CurrentScreen == 2) {
      setError((prev) => ({
        ...prev,
        Name: !validateName(userDetail.Name.current),
      }));
      setError((prev) => ({
        ...prev,
        Email: !validateEmail(userDetail.Email.current),
      }));
      setError((prev) => ({
        ...prev,
        Location: !validateDropDown(userDetail.Location.current),
      }));
      setError((prev) => ({
        ...prev,
        Role: !validateDropDown(userDetail.Role.current),
      }));
    } else if (CurrentScreen == 3) {
      setError((prev) => ({
        ...prev,
        Password: !validatePassword(userDetail.Password.current),
      }));
      setError((prev) => ({
        ...prev,
        Confirm_Password: !validatePassword(
          userDetail.Confirm_Password.current,
        ),
      }));
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
