import React, { useState } from "react";
import { ScrollView } from "react-native";
import CustomerDetails from "components/CustomerDetails";
import Data from "./mockData/DATA";
import RectangularBox from "components/RectangularBox";
import { FlatList } from "react-native-gesture-handler";
import { VisitResponse } from "models/ApiResponses/VisitResponse";
import StringConstants from "shared/localization";
import Glyphs from "assets/Glyphs";
import { IupcomingVisitField } from "@shared-constants";

interface IUpcomingScreen {
  upcomingVisitList: VisitResponse[];
  upcomingVisitDetails:IupcomingVisitField[],
  setSelectedIndexValue:Function ,
  selectedIndexValue:number,
  upcomingFieldData:string[],
}

const UpcomingVisit = (props: IUpcomingScreen) => {
  
  const [customerDetails, setCustomerDetails] = useState<boolean>(false);

  function handleCustomerClick() {
    setCustomerDetails(!customerDetails);
  }

  const renderUpcomingVisit = (item: VisitResponse, index: number) => {
    return (
      <RectangularBox
        leftIcon={Glyphs.Profile2userClicked}
        heading={` ${StringConstants.CUSTOMER_VISIT}  ${index + 1}`}
        subHeading={item?.customer_data?.company_name}
        onPress={() => {
          props.setSelectedIndexValue(index);
          handleCustomerClick();
        }}
      />
    );
  };

  return (
    <ScrollView style={{ paddingHorizontal: 20 }} nestedScrollEnabled>
      {!customerDetails ? (
        <>
          <FlatList
            data={props.upcomingVisitList}
            renderItem={({ item, index }) => renderUpcomingVisit(item, index)}
            scrollEnabled={false}
            extraData={Data}
          />
        </>
      ) : (
       props.selectedIndexValue>=0 ?
        <CustomerDetails
          onPress={handleCustomerClick}
          CustomerData={props.upcomingFieldData}
          placeholderData={props.upcomingVisitDetails}

          
        />:<></>
      )}
    </ScrollView>
  );
};

export default UpcomingVisit;
