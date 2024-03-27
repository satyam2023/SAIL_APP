import APIConstants from "core/ApiConstants";
import { IApiResponse } from "models/ApiResponses/IApiResponse";
import { SignInResponse } from "models/ApiResponses/SignInResponse";
import { User } from "models/ApiResponses/UserModel";
import { userSignIn } from "redux/actions/AccountAction";
import { sendGetRequest } from "services/network/Network";

export const getUserDetail = async () => {
  try {
    return await sendGetRequest<User>(APIConstants.GetUser);
  } catch (e) {
    console.log(e, "", "Error");
  }
};

// export const loginAPICAllingHandler = async (body: any) => {
//   try {
//     const res:IApiResponse<SignInResponse>=await userSignIn(

//     )
//   } catch (error) {
//   } finally {
//   }
// };
