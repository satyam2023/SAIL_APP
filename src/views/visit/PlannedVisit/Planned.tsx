import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import CustomerBox from "components/CustomerBox";
import Data from "../UpComingVisit/mockData/DATA";
import CustomerDetails from "components/CustomerDetails";

interface PlannedProps {
  footerVisibility: Function;
}

const Planned = ({ footerVisibility }: PlannedProps) => {
  const [customerDetails, setCustomerDetails] = useState<boolean>(false);
  useEffect(() => {
    footerVisibility(customerDetails);
  }, [customerDetails]);
  const handleCustomerClick=()=>setCustomerDetails(!customerDetails);

  return (
    <ScrollView style={{ paddingHorizontal: 20,paddingBottom:'25%' }}>
      {!customerDetails ? (
        <>
          <CustomerBox handleCustomerClick={handleCustomerClick} />
          <CustomerBox handleCustomerClick={handleCustomerClick} />
          <CustomerBox handleCustomerClick={handleCustomerClick} />
        </>
      ) : (
        <>
         <CustomerDetails CustomerData={Data} onPress={handleCustomerClick}/>
         
        </>
      )}
    </ScrollView>
  );
};

export default Planned;
