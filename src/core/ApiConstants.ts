import { BASE_URL } from "@env";

const APIConstants = {
  axiosCallTimeout: 30000,
  axiosCallRetryCount: 2,
  axiosCallRetryTimeout: 5000,
  BaseURL: BASE_URL,
  GetUser: "users",
  SIGNUP:'register',
  SIGNIN:'login',
  SAVE_TOKEN: "save-token",
  CMS_PAGE: "get-cms-details",
};

export default APIConstants;
