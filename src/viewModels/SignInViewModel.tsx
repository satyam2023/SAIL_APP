import { navigate } from "@navigation";
import { SCREENS } from "@shared-constants";
import { IApiResponse } from "models/IApiResponse";
import { ISignInUserData, SignInResponse } from "models/SignInResponse";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { userSignIn } from "redux/actions/AccountAction";
import { setLoaderVisibility } from "redux/actions/LoaderAction";
import SignInScreen from "views/signIn/SignIn";
const SignInViewModel = () => {
  const signInUser = {
    upn: useRef<string>(""),
    password: useRef<string>(""),
    rememberMe: useRef<string>(""),
  };

  const dispatch = useDispatch();

  const loginAPICAllingHandler = async (values: ISignInUserData) => {
    dispatch(setLoaderVisibility(true));
    try {
      const res: IApiResponse<SignInResponse> = await userSignIn(
        dispatch,
        values,
      );
      if (res.isSuccess) {
        navigate(SCREENS.TAB)
      } 
      else {

      }
    } catch (error) {

    }
    finally{
    dispatch(setLoaderVisibility(false));
  }
  };

  const onSubmit = () => {
    const values={
        upn: signInUser.upn.current,
        password: signInUser.password.current,
        rememberMe: signInUser.rememberMe.current,
      }
      console.log("SignIn Clicked:::");
    loginAPICAllingHandler(values)
  
    // navigate(SCREENS.TAB);
  };

  return (
    <SignInScreen
      {...{
        signInUser,
        onSubmit
      }}
    />
  );
};

export default SignInViewModel;
