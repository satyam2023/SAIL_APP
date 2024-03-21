import APIConstants from "core/ApiConstants";
import { IApiResponse } from "models/IApiResponse";
import { IPaginations } from "models/IPagination";
import { VisitResponse } from "models/VisitResponse";
import { sendGetRequest } from "services/network/Network";
import { SET_UPCOMING_VISITS } from "redux/actionConstants";

export const saveUpcomingVisits = (data: VisitResponse[]) => {
  return {
    type: SET_UPCOMING_VISITS,
    payload: data,
  };
};


export const getUpcomingVisits = async (
  dispatch: any,
  id: number,
  page?: number,
) => {
  const res: IApiResponse<IPaginations<VisitResponse>> = await sendGetRequest<
    IPaginations<VisitResponse>
  >(`${APIConstants.UPCOMING_VISITS}?page=${page ?? 1}`);
  if (res.isSuccess && !page) {
    dispatch(saveUpcomingVisits(res.data.data ));
  }
  return res;
};



