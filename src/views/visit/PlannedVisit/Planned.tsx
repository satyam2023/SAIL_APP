import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import Data from "../UpComingVisit/mockData/DATA";
import StringConstants from "shared/localization";
import Glyphs from "assets/Glyphs";
import { VisitResponse } from "models/ApiResponses/VisitResponse";
import { FlatList } from "react-native-gesture-handler";
import { CustomerDetails, RectangularBox } from "components";

interface PlannedProps {
  setFooterVisibility: (footerVisibility: boolean) => void;
  plannedVisitList: VisitResponse[];
  setSelectedIndexValue: Dispatch<SetStateAction<number>>;
  selectedIndexValue: number;
  plannedVisitFieldData: string[];
}

const Planned = ({
  setFooterVisibility,
  plannedVisitList,
  setSelectedIndexValue,
  plannedVisitFieldData,
  selectedIndexValue,
}: PlannedProps) => {
  const [customerDetails, setCustomerDetails] = useState<boolean>(false);
  useEffect(() => {
    setFooterVisibility(customerDetails);
  }, [customerDetails]);
  const handleCustomerClick = () => setCustomerDetails(!customerDetails);

  const renderPlannedVisit = (item: VisitResponse, index: number) => {
    return (
      <RectangularBox
        onPress={() => {
          handleCustomerClick();
          setSelectedIndexValue(index);
        }}
        leftIcon={Glyphs.Profile2userClicked}
        heading={`${StringConstants.CUSTOMER_VISIT} ${index + 1}`}
        subHeading={item?.customer_data?.company_name}
      />
    );
  };

  return (
    <ScrollView style={{ paddingHorizontal: 20, paddingBottom: "25%" }}>
      {!customerDetails ? (
        <FlatList
          data={plannedVisitList}
          renderItem={({ item, index }) => renderPlannedVisit(item, index)}
        />
      ) : (
        <CustomerDetails
          CustomerData={plannedVisitFieldData}
          onPress={handleCustomerClick}
          placeholderData={Data}
          indexofSelectedVisit={selectedIndexValue}
          companyName={
            plannedVisitList[selectedIndexValue]?.customer_data?.company_name
          }
        />
      )}
    </ScrollView>
  );
};

export default Planned;
