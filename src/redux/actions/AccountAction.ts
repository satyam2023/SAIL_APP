import APIConstants from "core/ApiConstants";
import { IApiResponse } from "models/IApiResponse";
import { ISignInUserData, SignInResponse } from "models/SignInResponse";
import { Dispatch } from "react";
import { SET_USER_DATA, UPDATE_USER_DATA } from "redux/actionConstants";
import { sendPostRequest } from "services/network/Network";

export const saveUserdata = (data:any ) => {
  return {
    type: SET_USER_DATA,
    payload: data,
  };
};

export const updateUserData = (data: any) => {
  return {
    type: UPDATE_USER_DATA,
    payload: data,
  };
};


export const userSignIn=async(dispatch:Dispatch<any>,data:ISignInUserData):Promise<IApiResponse<SignInResponse>>=>{
  const body = {
    user_upn: data.upn,
    password: data.password,
  };

  const res: IApiResponse<SignInResponse> =
    await sendPostRequest<SignInResponse>(APIConstants.SIGNIN, body);
     if(res.isSuccess)
       dispatch(saveUserdata(res.data));
      
  return res;
}


export const saveUserToken = async (_: any, body: any) => {
  const res: IApiResponse<SignInResponse> =
    await sendPostRequest<SignInResponse>(APIConstants.SAVE_TOKEN, body);
  return res;
};