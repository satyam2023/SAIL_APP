import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import CustomerBox from "components/RectangularBox";
import Data from "../UpComingVisit/mockData/DATA";
import CustomerDetails from "components/CustomerDetails";
import StringConstants from "shared/localization";
import Glyphs from "assets/Glyphs";

interface PlannedProps {
  footerVisibility: (footerVisibility: boolean) => void;
}

const Planned = ({ footerVisibility }: PlannedProps) => {
  const [customerDetails, setCustomerDetails] = useState<boolean>(false);
  useEffect(() => {
    footerVisibility(customerDetails);
  }, [customerDetails]);
  const handleCustomerClick = () => setCustomerDetails(!customerDetails);

  return (
    <ScrollView style={{ paddingHorizontal: 20, paddingBottom: "25%" }}>
      {!customerDetails ? (
        <>
          <CustomerBox
            onPress={handleCustomerClick}
            leftIcon={Glyphs.Profile2userClicked}
            heading={StringConstants.CUSTOMER_VISIT_1}
            subHeading={StringConstants.XYZ_STEELWORKS}
          />
          <CustomerBox
            onPress={handleCustomerClick}
            leftIcon={Glyphs.Profile2userClicked}
            heading={StringConstants.CUSTOMER_VISIT_1}
            subHeading={StringConstants.XYZ_STEELWORKS}
          />
          <CustomerBox
            onPress={handleCustomerClick}
            leftIcon={Glyphs.Profile2userClicked}
            heading={StringConstants.CUSTOMER_VISIT_1}
            subHeading={StringConstants.XYZ_STEELWORKS}
          />
        </>
      ) : (
        <>
          <CustomerDetails CustomerData={Data} onPress={handleCustomerClick} />
        </>
      )}
    </ScrollView>
  );
};

export default Planned;
