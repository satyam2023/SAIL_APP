import APIConstants from "core/ApiConstants";
import { sendPostRequest } from "services/network/Network";


export const logOutUserAction=async (body:object)=>{

try{
    return await sendPostRequest<object>(APIConstants.LOGOUT, body);
}
catch(error){
  console.warn(error);
}

};
