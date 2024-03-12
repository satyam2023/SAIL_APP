import React, { useState } from "react";
import {  ScrollView } from "react-native";
import ExecutedCustomer from "./ExecutedCustomer";
import CustomerBox from "components/CustomerBox";

const Executed = () => {
   const [customerDetails,setCustomerDetails]=useState<boolean>(false);
   const handleCustomerClick=()=>setCustomerDetails(!customerDetails)
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
