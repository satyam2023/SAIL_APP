import APIConstants from "core/ApiConstants";
import { IApiResponse } from "models/ApiResponses/IApiResponse";
import { IPaginations } from "models/ApiResponses/IPagination";
import { ExecutedResponse, VisitResponse } from "models/ApiResponses/VisitResponse";
import { sendGetRequest } from "services/network/Network";
import { SET_EXECUTED_VISITS, SET_PLANNED_VISITS, SET_UPCOMING_VISITS } from "redux/actionConstants";

export const saveUpcomingVisits = (data: VisitResponse[]) => {
  return {
    type: SET_UPCOMING_VISITS,
    payload: data,
  };
};

export const saveExecutedVisits = (data: VisitResponse[]) => {
  return {
    type: SET_EXECUTED_VISITS,
    payload: data,
  };
};

export const savePlannedVisits = (data: VisitResponse[]) => {
  return {
    type: SET_PLANNED_VISITS,
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

export const getExecutedVisits = async (
  dispatch: any,
  id: number,
  page?: number,
) => {
  const res: IApiResponse<IPaginations<ExecutedResponse>> =
    await sendGetRequest<IPaginations<ExecutedResponse>>(
      `${APIConstants.EXECUTED_VISITS}?page=${page ?? 1}`,
    );
  if (res.isSuccess && !page) {
    dispatch(saveExecutedVisits(res.data.data));
  }
  return res;
};

export const getPlannedVisits = async (
  dispatch: any,
  id: number,
  page?: number,
) => {
  const res: IApiResponse<IPaginations<VisitResponse>> = await sendGetRequest<
    IPaginations<VisitResponse>
  >(`${APIConstants.PLANNED_VISITS}?page=${page ?? 1}`);
  if (res.isSuccess && !page) {
    dispatch(savePlannedVisits(res.data.data));
  }
  return res;
};


