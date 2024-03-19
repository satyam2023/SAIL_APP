import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BottomTabVisibility } from "redux/actions/UIAction";
import CreateVisitPlan from "views/createVisitPlan/VisitPlan";

const CreateVisitPlanViewModel=()=>{
    const [isVisitDetailFilled, setIsVisitDetailFilled] = useState<boolean>(false);
    const dispatch=useDispatch();
   useFocusEffect(()=>{
      dispatch(BottomTabVisibility(false));
      return()=>dispatch(BottomTabVisibility(true));
   })
    return (
      
        <CreateVisitPlan
        isVisitDetailFilled={isVisitDetailFilled}
        setIsVisitDetailFilled={(isVisitDetailFilled:boolean)=>setIsVisitDetailFilled(isVisitDetailFilled)}
        />
     

    );
};
export default CreateVisitPlanViewModel;