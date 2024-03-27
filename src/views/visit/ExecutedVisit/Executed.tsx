import React, { useState } from "react";
import { ScrollView } from "react-native";
import ExecutedCustomer from "./ExecutedCustomer";
import StringConstants from "shared/localization";
import Glyphs from "assets/Glyphs";
import { FlatList } from "react-native-gesture-handler";
import RectangularBox from "components/RectangularBox";

interface IExecuted{
  executedVisitFieldData:string[];
  setSelectedIndexValue:Function;
  executedVisitList:any;
  selectedIndexValue:number;
}

const Executed = ({selectedIndexValue,executedVisitFieldData,setSelectedIndexValue,executedVisitList}:IExecuted) => {
  const [customerDetails, setCustomerDetails] = useState<boolean>(false);
  const handleCustomerClick = () => setCustomerDetails(!customerDetails);

  const renderExecutedVisit=(item:any,index:number)=>{
    return(
      <RectangularBox    
       leftIcon={Glyphs.Profile2userClicked}
      heading={` ${StringConstants.CUSTOMER_VISIT}  ${index + 1}`}
      subHeading={item?.customer_data?.company_name}
      onPress={() => {
        setSelectedIndexValue(index);
        handleCustomerClick();
      }}
      
      />
    );
  }
  return (
    <ScrollView style={{ paddingHorizontal: 20 }} nestedScrollEnabled>
      {!customerDetails ? (
        <>

<FlatList
            data={executedVisitList}
            renderItem={({ item, index }) => renderExecutedVisit(item, index)}
           
          />
          
        </>
      ) : (
        <ExecutedCustomer handleCustomerClick={handleCustomerClick} executedVisitFieldData={executedVisitFieldData} setSelectedIndexValue={setSelectedIndexValue}   executedVisitList={executedVisitList} selectedIndexValue={selectedIndexValue}/>
      )}
    </ScrollView>
  );
};
export default Executed;
