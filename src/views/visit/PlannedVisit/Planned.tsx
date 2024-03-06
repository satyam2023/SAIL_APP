import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import UpcomingVisit from "../UpComingVisit/Upcoming";
import CustomerDetails from "../UpComingVisit/component/customerDetails/CustomerDetails";
import { SafeAreaView } from "react-native";
import styles from "./Style";
import BottomBar from "./component/BottomBar/BottomBarPlanned";
import FilterData from "./FilterData";
import CustomerBox from "components/CustomerVisitBox/CustomerBox";
import { BottomTabVisibility } from "redux/actions/UIAction";
import { useDispatch } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
interface PlannedProps{
    footerVisibility:Function
}

const Planned=({footerVisibility}:PlannedProps)=>{
    
    const [customerDetails, setCustomerDetails] = useState<boolean>(false);
    useEffect(()=>{
     footerVisibility(customerDetails);
    },[customerDetails]);
    function handleCustomerClick(param: boolean) {
      setCustomerDetails(param);
    }
  
    return (
      <ScrollView style={{ paddingHorizontal: 20 }}>
        {!customerDetails ? (
          <>
            <CustomerBox handleCustomerClick={handleCustomerClick} />
            <CustomerBox handleCustomerClick={handleCustomerClick} />
            <CustomerBox handleCustomerClick={handleCustomerClick} />
          </>
        ) : (
          <>

          <CustomerDetails handleCustomerClick={handleCustomerClick}  />
          {/* <BottomBar status={undefined} /> */}
          </>
        )}
        
      </ScrollView>);
}

export default Planned;