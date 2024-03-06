import React, { useState } from "react";
import { SafeAreaView, FlatList, View, ScrollView } from "react-native";
import CustomerDetails from "../UpComingVisit/component/customerDetails/CustomerDetails";
import UpcomingVisit from "../UpComingVisit/Upcoming";
import ExecutedCustomer from "./ExecutedCustomer";
import CustomerCommon from "../component/CustomerCommonDetails/CustomerCommon";
import CustomerBox from "components/CustomerVisitBox/CustomerBox";

const Executed = () => {
   const [customerDetails,setCustomerDetails]=useState<boolean>(false);
   const handleCustomerClick=(param:boolean)=>{setCustomerDetails(param)};
//   function setStatus(param: boolean) {
//     console.log("param in palnned::", param);
//     setplannedView(param);
//   }
//   const Data = [{ id: 1 }];
//   const renderItem = (item: any) => {
//     console.log("iteration numebr", item.item);

//     return <UpcomingVisit id={item.item} status={setStatus} />;
//   };
  return (
    <ScrollView style={{ paddingHorizontal: 20 }}>
    {!customerDetails ? (
      <>
        <CustomerBox handleCustomerClick={handleCustomerClick} />
        <CustomerBox handleCustomerClick={handleCustomerClick} />
        <CustomerBox handleCustomerClick={handleCustomerClick} />
      </>
    ) : (
     <ExecutedCustomer handleCustomerClick={handleCustomerClick}/>
    )}
  </ScrollView>
  );
};
export default Executed;
