
import APIConstants from "core/ApiConstants";
import { sendGetRequest } from "services/network/Network";
import { IApiResponse } from "models/ApiResponses/IApiResponse";
import {  SET_MESSAGE_DATA} from "redux/actionConstants";

// import { EscalatedResponse } from "@interfaces/apiResponses/EscaltedDropDownResponse";
import { setLoaderVisibility } from "./LoaderAction";
import { MessageResponse } from "models/ApiResponses/MessageResponse";

export const saveInboxData = (data: MessageResponse) => {
  return {
    type: SET_MESSAGE_DATA,
    payload: data,
  };
};

// export const saveEscaltedData = (data: EscalatedResponse) => {
//   return {
//     type: SET_ESCALATED_DATA,
//     payload: data,
//   };
// };

export const getInboxData = async (dispatch: any) => {
  dispatch(setLoaderVisibility(true));
  const res: IApiResponse<MessageResponse> = await sendGetRequest<MessageResponse>(
    APIConstants.GET_MESSAGE_DATA,
  );

  dispatch(saveInboxData(res?.data));
  dispatch(setLoaderVisibility(false));
};

// export const getEscaltedDropdownData = async (dispatch: any) => {
//   const res: IApiResponse<EscalatedResponse> =
//     await sendGetRequest<EscalatedResponse>(
//       APIConstants.GET_ESCALTED_DROPDOWN_DATA,
//     );

//   dispatch(saveEscaltedData(res.data));
// };

// export const escalateToAnotherAPI = async (dispatch: any, body: any) => {
//   try {
//     const res: IApiResponse<any> = await sendPostRequest<any>(
//       APIConstants.ESCALATE_TO_ANOTHER,
//       body,
//     );
//     return res;
//   } catch (e: any) {
//     return e;
//   }
// };
