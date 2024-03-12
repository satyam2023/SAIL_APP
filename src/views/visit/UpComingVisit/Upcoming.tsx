import React, { useState } from "react";
import { ScrollView} from "react-native";
import CustomerBox from "components/CustomerBox";
import CustomerDetails from "components/CustomerDetails";
import Data from "./mockData/DATA";

const UpcomingVisit = () => {
  const [customerDetails, setCustomerDetails] = useState<boolean>(false);

  function handleCustomerClick() {
    setCustomerDetails(!customerDetails);
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
       <CustomerDetails onPress={handleCustomerClick} CustomerData={Data}/>
      )}
    </ScrollView>
  );
};

export default UpcomingVisit;
