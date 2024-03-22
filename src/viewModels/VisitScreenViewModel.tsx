import { useFocusEffect } from "@react-navigation/native";
import { IApiResponse } from "models/ApiResponses/IApiResponse";
import { IPaginations } from "models/ApiResponses/IPagination";
import { VisitResponse } from "models/ApiResponses/VisitResponse";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BottomTabVisibility } from "redux/actions/UIAction";
import { getUpcomingVisits } from "redux/actions/VisitAction";
import { RootState, store } from "redux/store/Store";
import VisitScreen from "views/visit/VisitScreen";
import { upcomingVisitDetails } from "@shared-constants";

const VisitScreenViewModel = () => {
  const userID = store?.getState()?.userAccount?.data?.user?.id;
  const upcomingVisitList = useSelector(
    (state: RootState) => state?.visitDetail?.upcoming?.data,
  );
  const [selectedIndexValue, setSelectedIndexValue] = useState<number>(-1);

console.warn("Selected Index Value:::",selectedIndexValue);
  const [currentVisit, setCurrentVisit] = useState<number>(1);
  const [FooterVisibility, setFooterVisibility] = useState<boolean>(false);
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
  }, []);

const upcomingFieldData= selectedIndexValue>=0?[
  upcomingVisitList[selectedIndexValue]?.customer_data?.customer_code,
  upcomingVisitList[selectedIndexValue]?.visit_date_time,
  upcomingVisitList[selectedIndexValue]?.customer_data?.contact_number,
  upcomingVisitList[selectedIndexValue]?.reason?.name,
  upcomingVisitList[selectedIndexValue]?.mode_of_contact?.name,
  upcomingVisitList[selectedIndexValue]?.visiting_executive?.user_name,
  upcomingVisitList[selectedIndexValue]?.visiting_executive?.user_location,
  upcomingVisitList[selectedIndexValue]?.visiting_executive?.email,
  upcomingVisitList[selectedIndexValue]?.addedy_by?.user_name,
]:[];

 

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
      }}
    />
  );
};

export default VisitScreenViewModel;
