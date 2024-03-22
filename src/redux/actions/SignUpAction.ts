import APIConstants from "core/ApiConstants";
import { ISignupBody } from "models/ApiResponses/SignUpResponse";
import { sendPostRequest } from "services/network/Network";

export const signupAction = async (body: ISignupBody) => {

  try {
    return await sendPostRequest<ISignupBody>(APIConstants.SIGNUP, body);
  } catch (error) {
    console.error("Error message of Sign up Action",error);
  }
};
