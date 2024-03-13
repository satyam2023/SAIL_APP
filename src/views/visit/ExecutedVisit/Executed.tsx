import React, { useState } from "react";
import { ScrollView } from "react-native";
import ExecutedCustomer from "./ExecutedCustomer";
import CustomerBox from "components/RectangularBox";
import StringConstants from "shared/localization";
import Glyphs from "assets/Glyphs";

const Executed = () => {
  const [customerDetails, setCustomerDetails] = useState<boolean>(false);
  const handleCustomerClick = () => setCustomerDetails(!customerDetails);
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
        <ExecutedCustomer handleCustomerClick={handleCustomerClick} />
      )}
    </ScrollView>
  );
};
export default Executed;
