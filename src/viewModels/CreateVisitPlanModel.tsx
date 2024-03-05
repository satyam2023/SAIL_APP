import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import { BottomTabVisibility } from "redux/actions/UIAction";
import CreateVisitPlan from "views/createVisitPlan/VisitPlan";

const CreateVisitPlanViewModel=()=>{
    console.log("CREATEVISITPLAN VIEW MODAL CALLED::;");
    const dispatch=useDispatch();
   useFocusEffect(()=>{
      dispatch(BottomTabVisibility(false));
      return()=>dispatch(BottomTabVisibility(true));
   })
    return (
      
        <CreateVisitPlan/>
     

    );
};
export default CreateVisitPlanViewModel;