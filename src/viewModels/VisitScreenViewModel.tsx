import { useFocusEffect } from "@react-navigation/native";
import { IApiResponse } from "models/IApiResponse";
import { IPaginations } from "models/IPagination";
import { VisitResponse } from "models/VisitResponse";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BottomTabVisibility } from "redux/actions/UIAction";
import { getUpcomingVisits } from "redux/actions/VisitAction";
import { store } from "redux/store/Store";
import VisitScreen from "views/visit/VisitScreen"

const VisitScreenViewModel=()=>{
  const userID = store?.getState()?.userAccount?.data?.user?.id;

  const dispatch = useDispatch();
  useFocusEffect(() => {
    dispatch(BottomTabVisibility(false));
    return () => dispatch(BottomTabVisibility(true));
  });
  const [currentVisit, setCurrentVisit] = useState<number>(1);
  const [FooterVisibility, setFooterVisibility] = useState<boolean>(false);

  const visitType = useSelector((state: any) => state.UIReducer.visitType);
  useEffect(() => {
    setCurrentVisit(visitType);
  }, [visitType]);

  useEffect(()=>{
callUpcomingVisit();
  },[])

  function callUpcomingVisit(){
  const setUpcomingVisits = async () => {
    try{const res: IApiResponse<IPaginations<VisitResponse>> =
      await getUpcomingVisits(dispatch, userID);
    if (res.isSuccess) {
       console.log("Response of upcoming Visit::::",res.data?.data)
    }
  }
  catch{

  }
  };

  setUpcomingVisits();
  
}





  return <VisitScreen
  
  {...{
    currentVisit,
    setCurrentVisit,
    setFooterVisibility,
    FooterVisibility

  }}
  
  />
}

export default VisitScreenViewModel;



