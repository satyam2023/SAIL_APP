import { useFocusEffect } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BottomTabVisibility } from "redux/actions/UIAction";
import VisitScreen from "views/visit/VisitScreen"

const VisitScreenViewModel=()=>{

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

  // const handleFooterVisibility = (param: boolean) => {
  //   setFooterVisibility(param);
  // };





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



