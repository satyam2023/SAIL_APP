import APIConstants from "core/ApiConstants";
import { HomeResponse } from "models/ApiResponses/HomeResponse";
import { IApiResponse } from "models/ApiResponses/IApiResponse";
import { SET_DASHBOARD_DATA } from "redux/actionConstants";
import { sendGetRequest } from "services/network/Network";


export const saveHomeData = (data: HomeResponse |undefined) => {
  return {
    type: SET_DASHBOARD_DATA,
    payload: data,
  };
};

export const fetchHomeData = async (dispatch: any) => {
  const res: IApiResponse<HomeResponse> = await sendGetRequest<HomeResponse>(
    APIConstants.HOME,
  );
  dispatch(saveHomeData(res.data));
  return res;
};
