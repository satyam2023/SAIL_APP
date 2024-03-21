import { navigate } from "@navigation";
import { SCREENS } from "@shared-constants";
import { IApiResponse } from "models/IApiResponse";
import { ISignInUserData, SignInResponse } from "models/SignInResponse";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { userSignIn } from "redux/actions/AccountAction";
import { setLoaderVisibility } from "redux/actions/LoaderAction";
import { setRememberMe } from "shared/constants/accountService";
import SignInScreen from "views/signIn/SignIn";
const SignInViewModel = () => {
  const signInUser = {
    upn: useRef<string>(""),
    password: useRef<string>(""),
    rememberMe: useRef<boolean>(true),
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
        setRememberMe(signInUser?.rememberMe?.current)
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
      }
    
    loginAPICAllingHandler(values)
  
   
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
