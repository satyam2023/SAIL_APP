import { getIssueEnquiry, getUserEnquiry } from "controllers/enquiryController";
import { checkOnlyNumber } from "helper/ValidationRegex";
import { IApiResponse } from "models/ApiResponses/IApiResponse";
import { IssueEnquiryBody, IssueEnquiryResponse, UserEnquiryResponse ,IIssueEnquiry} from "models/ApiResponses/IEnquiryResponses";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoaderVisibility } from "redux/actions/LoaderAction";
import { store } from "redux/store/Store";
import EnquiryScreen from "views/enquiry/EnquiryScreen";
// import { MapLocalTile } from "react-native-maps";
// import MapComponent from "components/CustomMap";

const EnquiryViewModel = () => {
  const [currentScreen, setCurrentScreen] = useState<number>(1);
  const [searchresult, setsearchresult] = useState<UserEnquiryResponse>();
  const [issueSearchresult, setIssueSearchResult] = useState<IIssueEnquiry[]>();
  const dispatch = useDispatch();
  const roleLocationDropDownList =
    store?.getState()?.masterData?.masterData?.data;
  const userEnquiryEnteredDetail = {
    name: useRef<string>(""),
    location: useRef<string>(""),
  };
  const issueEnquiryEnteredDetail={
    customerCodeName: useRef<string>(""),
    location: useRef<string>(""),
  }

  const issueEnquiry = async () => {
    dispatch(setLoaderVisibility(true));
    const body: IssueEnquiryBody = {
      issue_type: 0,
      customer_code: checkOnlyNumber(issueEnquiryEnteredDetail.customerCodeName.current)?issueEnquiryEnteredDetail.customerCodeName.current:null,
      customer_name: checkOnlyNumber(issueEnquiryEnteredDetail.customerCodeName.current)?null:issueEnquiryEnteredDetail.customerCodeName.current,
      location: issueEnquiryEnteredDetail.location.current,
    };
    try {
      const res:IApiResponse<IssueEnquiryResponse> | undefined = await getIssueEnquiry(body);
      
      if(res?.isSuccess){
        setIssueSearchResult(res?.data?.data)
      }

      
    } catch (error) {
     
    }
    dispatch(setLoaderVisibility(false));
  };

  async function onSearch() {
    if(currentScreen==1){
    const body = {
      user_name: userEnquiryEnteredDetail.name.current,
      user_location: userEnquiryEnteredDetail.location.current,
    };
    const userRes: UserEnquiryResponse = await getUserEnquiry(body);
    setsearchresult(userRes);
  }
  else if(currentScreen==2){
      issueEnquiry();
  }

  }

  return (
    <EnquiryScreen
      {...{
        currentScreen,
        setCurrentScreen,
        roleLocationDropDownList,
        userEnquiryEnteredDetail,
        searchresult,
        onSearch,
        issueSearchresult,
        issueEnquiryEnteredDetail,
        setIssueSearchResult,
        setsearchresult
      }}
    />
  );
};

export default EnquiryViewModel;
