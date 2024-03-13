import React, { useState } from "react";
import { ScrollView } from "react-native";
import CustomerBox from "components/RectangularBox";
import CustomerDetails from "components/CustomerDetails";
import Data from "./mockData/DATA";
import StringConstants from "shared/localization";
import Glyphs from "assets/Glyphs";

const UpcomingVisit = () => {
  const [customerDetails, setCustomerDetails] = useState<boolean>(false);

  function handleCustomerClick() {
    setCustomerDetails(!customerDetails);
  }

  return (
    <ScrollView style={{ paddingHorizontal: 20 }} nestedScrollEnabled>
      {!customerDetails ? (
        <>
          <CustomerBox
            onPress={handleCustomerClick}
            heading={StringConstants.CUSTOMER_VISIT_1}
            subHeading={StringConstants.XYZ_STEELWORKS}
            leftIcon={Glyphs.Profile2userClicked}
          />
          <CustomerBox
            onPress={handleCustomerClick}
            heading={StringConstants.CUSTOMER_VISIT_1}
            subHeading={StringConstants.XYZ_STEELWORKS}
            leftIcon={Glyphs.Profile2userClicked}
          />
          <CustomerBox
            onPress={handleCustomerClick}
            heading={StringConstants.CUSTOMER_VISIT_1}
            subHeading={StringConstants.XYZ_STEELWORKS}
            leftIcon={Glyphs.Profile2userClicked}
          />
        </>
      ) : (
        <CustomerDetails onPress={handleCustomerClick} CustomerData={Data} />
      )}
    </ScrollView>
  );
};

export default UpcomingVisit;
