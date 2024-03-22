import APIConstants from "core/ApiConstants";
import { CMSPageResponse, ICmsdispatch } from "models/ApiResponses/CMSPageResponse";
import { IApiResponse } from "models/ApiResponses/IApiResponse";
import { Dispatch } from "react";
import { SET_CMS_PAGE } from "redux/actionConstants";
import { sendGetRequest } from "services/network/Network";

export const saveCmsPages = (data: CMSPageResponse | undefined) => {
  return {
    type: SET_CMS_PAGE,
    payload: data,
  };
};

export const getCMSPage = async (dispatch: Dispatch<ICmsdispatch>) => {
  const res: IApiResponse<CMSPageResponse> =
    await sendGetRequest<CMSPageResponse>(APIConstants.CMS_PAGE);
  dispatch(saveCmsPages(res.data));
};
