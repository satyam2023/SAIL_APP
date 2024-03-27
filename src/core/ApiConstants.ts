import { BASE_URL } from "@env";

const APIConstants = {
  axiosCallTimeout: 30000,
  axiosCallRetryCount: 2,
  axiosCallRetryTimeout: 5000,
  BaseURL: BASE_URL,
  SIGNUP:'register',
  SIGNIN:'login',
  SAVE_TOKEN: "save-token",
  CMS_PAGE: "get-cms-details",
  HOME:"get-home-screen",
  LOGOUT:"logout",
  UPCOMING_VISITS: "upcoming-visit",
  PLANNED_VISITS: "planned-visit",
  EXECUTED_VISITS: "executed-visit",
  GET_MESSAGE_DATA:"inbox-messages",
  GET_ESCALTED_DROPDOWN_DATA: "escalate-to-dropdown-list",
  ESCALATE_TO_ANOTHER: "escalate-to-another",
  NOTIFICATION: "notification-listing",
  SETTINGS: "update-details",
  NEAREST_CUSTOMER: "find-nearest-customer",
  MASTER_DATA:"get-master-data",
  USER_ENQUIRY: "user-enquiry",
  ISSUE_ENQUIRY: "issue-enquiry",
};

export default APIConstants;
