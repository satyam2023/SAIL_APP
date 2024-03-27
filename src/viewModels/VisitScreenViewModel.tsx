import { useFocusEffect } from "@react-navigation/native";
import { IApiResponse } from "models/ApiResponses/IApiResponse";
import { IPaginations } from "models/ApiResponses/IPagination";
import { VisitResponse } from "models/ApiResponses/VisitResponse";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BottomTabVisibility } from "redux/actions/UIAction";
import {
  getExecutedVisits,
  getPlannedVisits,
  getUpcomingVisits,
} from "redux/actions/VisitAction";
import { RootState, store } from "redux/store/Store";
import VisitScreen from "views/visit/VisitScreen";
import { upcomingVisitDetails } from "@shared-constants";

const VisitScreenViewModel = () => {
  const [selectedIndexValue, setSelectedIndexValue] = useState<number>(-1);
  const [currentVisit, setCurrentVisit] = useState<number>(1);
  const [FooterVisibility, setFooterVisibility] = useState<boolean>(false);
  const userID = store?.getState()?.userAccount?.data?.user?.id;
  const visitCount = store?.getState()?.home?.data?.data?.AllVisttsCount;
  const upcomingVisitList = useSelector(
    (state: RootState) => state?.visitDetail?.upcoming?.data,
  );
  const plannedVisitList=useSelector(
    (state: RootState) => state?.visitDetail?.planned?.data,
  );
  const [pageNumber,setpageNumber]=useState<number>(1);

  console.log("Planned Visit List:::::::::",plannedVisitList);
  const executedVisitList = useSelector(
    (state: RootState) => state?.visitDetail?.executed?.data,
  );
  

  const dispatch = useDispatch();
  useFocusEffect(() => {
    dispatch(BottomTabVisibility(false));
    return () => dispatch(BottomTabVisibility(true));
  });

  const visitType = useSelector((state: any) => state?.UIReducer?.visitType);
  useEffect(() => {
    setCurrentVisit(visitType);
  }, [visitType]);

  useEffect(() => {
    callUpcomingVisit();

    callPlannedVisitApi();

    callExecutedVisit();


  }, []);

  const visitCountArray = [
    visitCount?.upComingVisitCount,
    visitCount?.plannedVisitCounts,
    visitCount?.executedVisitCounts,
  ];
  const upcomingFieldData =
    selectedIndexValue >= 0
      ? [
          upcomingVisitList[selectedIndexValue]?.customer_data?.customer_code,
          upcomingVisitList[selectedIndexValue]?.visit_date_time,
          upcomingVisitList[selectedIndexValue]?.customer_data?.contact_number,
          upcomingVisitList[selectedIndexValue]?.reason?.name,
          upcomingVisitList[selectedIndexValue]?.mode_of_contact?.name,
          upcomingVisitList[selectedIndexValue]?.visiting_executive?.user_name,
          upcomingVisitList[selectedIndexValue]?.visiting_executive
            ?.user_location,
          upcomingVisitList[selectedIndexValue]?.visiting_executive?.email,
          upcomingVisitList[selectedIndexValue]?.addedy_by?.user_name,
        ]
      : [];

  const executedVisitFieldData =
    selectedIndexValue >= 0
      ? [
          executedVisitList[selectedIndexValue]?.customer_data?.customer_code,
          executedVisitList[selectedIndexValue]?.customer_data?.type,
          executedVisitList[selectedIndexValue]?.customer_data?.status,
          executedVisitList[selectedIndexValue]?.visiting_executive?.user_name,
          executedVisitList[selectedIndexValue]?.customer_data?.user_location,
          executedVisitList[selectedIndexValue]?.customer_data?.user_number,
          executedVisitList[selectedIndexValue]?.customer_data?.email,
          executedVisitList[selectedIndexValue]?.discussion_points,
          `${executedVisitList[selectedIndexValue]?.visit_date_time}  ${executedVisitList[selectedIndexValue]?.visit_time}`,
          executedVisitList[selectedIndexValue]?.reason?.name,
        ]
      : [];

      const plannedVisitFieldData =
      selectedIndexValue >= 0
        ? [
            plannedVisitList[selectedIndexValue]?.customer_data?.customer_code,
            plannedVisitList[selectedIndexValue]?.visit_date_time,
            plannedVisitList[selectedIndexValue]?.customer_data?.contact_number,
            plannedVisitList[selectedIndexValue]?.reason?.name,
            plannedVisitList[selectedIndexValue]?.mode_of_contact?.name,
            plannedVisitList[selectedIndexValue]?.visiting_executive?.user_name,
            plannedVisitList[selectedIndexValue]?.visiting_executive?.user_location,
            plannedVisitList[selectedIndexValue]?.visiting_executive?.email,
            plannedVisitList[selectedIndexValue]?.addedy_by?.user_name,

           
          ]
        : [];

  function callUpcomingVisit() {
    const setUpcomingVisits = async () => {
      try {
        const res: IApiResponse<IPaginations<VisitResponse>> =
          await getUpcomingVisits(dispatch, userID);
        if (res.isSuccess) {
        }
      } catch {}
    };

    setUpcomingVisits();
  }

  function callPlannedVisitApi(){
    const setPlannedVisits=async ()=>{

      try {
        const res: IApiResponse<IPaginations<VisitResponse>> =
        await getPlannedVisits(dispatch, userID);
 
      }
      catch{

      }
    };
    setPlannedVisits();
  }

  function callExecutedVisit() {
    const setExecutedVisits = async () => {
      try {
        const res: IApiResponse<IPaginations<VisitResponse>> =
          await getExecutedVisits(dispatch, userID,pageNumber);
        if (res.isSuccess) {
            
        }
      } catch {}
    };

    setExecutedVisits();
  }

  function setPaginationPage(){
   pageNumber+1;
  }

  return (
    <VisitScreen
      {...{
        currentVisit,
        setCurrentVisit,
        setFooterVisibility,
        FooterVisibility,
        upcomingVisitList,
        upcomingVisitDetails,
        setSelectedIndexValue,
        selectedIndexValue,
        upcomingFieldData,
        executedVisitFieldData,
        executedVisitList,
        visitCountArray,
        plannedVisitList,
        plannedVisitFieldData ,
        
        
      }}
    />
  );
};

export default VisitScreenViewModel;
