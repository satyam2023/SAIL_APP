import APIConstants from "core/ApiConstants";
import { IApiResponse } from "models/ApiResponses/IApiResponse";
import { sendGetRequest } from "services/network/Network";
import { SET_NOTIFICATION_DATA } from "redux/actionConstants";
import { NotificationResponse } from "models/ApiResponses/NotificationResponse";

export const saveNotificationData = (data: NotificationResponse | undefined) => {
  return {
    type: SET_NOTIFICATION_DATA,
    payload: data,
  };
};

export const fetchNotificationData = async (dispatch: any) => {
  try{
  const res: IApiResponse<NotificationResponse> =
   await sendGetRequest<NotificationResponse>(APIConstants.NOTIFICATION);
  dispatch(saveNotificationData(res.data));
  return res;
  }
  catch{
    
  }
};
