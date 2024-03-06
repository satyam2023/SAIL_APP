import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import styles from "./Style/Style";
import CustomerBox from "components/CustomerVisitBox/CustomerBox";
import CustomerDetails from "./component/customerDetails/CustomerDetails";

const UpcomingVisit = () => {
  const [customerDetails, setCustomerDetails] = useState<boolean>(false);

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
        <CustomerDetails handleCustomerClick={handleCustomerClick} />
      )}
    </ScrollView>
  );
};

export default UpcomingVisit;
