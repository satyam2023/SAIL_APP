import APIConstants from "core/ApiConstants";
import { IUserEnquiryBody, IssueEnquiryBody, IssueEnquiryResponse, UserEnquiryResponse } from "models/ApiResponses/IEnquiryResponses";

import { sendPostRequest } from "services/network/Network";

export const getUserEnquiry = async (body: IUserEnquiryBody) => {
  try {
    const res= await sendPostRequest<UserEnquiryResponse>(
      APIConstants.USER_ENQUIRY,
      body,
    );
    return res?.data?.data;
  } catch (error) {

  }
};




export const getIssueEnquiry = async (body: IssueEnquiryBody) => {
  try {
    const res= await sendPostRequest<IssueEnquiryResponse>(
      APIConstants.ISSUE_ENQUIRY,
      body,
    );
    console.log("GetIssueEnquiry::::",res);
    return res;
  } catch (error) {}
};