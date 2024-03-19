import APIConstants from "core/ApiConstants";
import { CMSPageResponse } from "models/CMSPageResponse";
import { IApiResponse } from "models/IApiResponse";
import { SET_CMS_PAGE } from "redux/actionConstants";
import { sendGetRequest } from "services/network/Network";


export const saveCmsPages = (data: CMSPageResponse) => {
    // console.log("Save cms page::",data.ab)
  return {
    type: SET_CMS_PAGE,
    payload: data,
  };
};

export const getCMSPage = async (dispatch: any) => {
  const res: IApiResponse<CMSPageResponse> =
    await sendGetRequest<CMSPageResponse>(APIConstants.CMS_PAGE);
    dispatch(saveCmsPages(res.data as CMSPageResponse))
};
