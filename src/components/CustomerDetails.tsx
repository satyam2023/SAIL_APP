import RectangularBox from "./RectangularBox";
import Glyphs from "assets/Glyphs";
import StringConstants from "shared/localization";
import { FlatList, View } from "react-native";

interface ICustomerDetails {
  CustomerData: Array<object> | string[];
  onPress: () => void;
  iSBreakeddetails?: boolean;
  indexofSelectedVisit?: number;
  placeholderData?:any;
  companyName?:string;

}

const CustomerDetails = (props: ICustomerDetails) => {
 
  const renderItem = (item: string|object, index: number) => {
    console.log("PLACEHOLDER DATA:::::",props.placeholderData[index]);
    return (
      <RectangularBox
        key={index}
        heading={props.placeholderData[index]?.heading}
        subHeading={item}
        leftIcon={props.placeholderData[index]?.imagepath}
        isCustomerColumn={true}
      />
    );
  };

  return (
    <View>
      {!props.iSBreakeddetails && (
        <RectangularBox
          onPress={props.onPress}
          isCustomerDetailVisible={true}
          leftIcon={Glyphs.multiProfile}
          heading={`${StringConstants.CUSTOMER_VISIT}  ${props.indexofSelectedVisit?props.indexofSelectedVisit+1:""}`}
          subHeading={props.companyName ?props.companyName:""}
          isClosable
        />
      )}
      <FlatList
        data={props.CustomerData}
        renderItem={({ item, index }) => renderItem(item, index)}
        scrollEnabled={false}
        style={{marginTop:-10}}
      />
    </View>
  );
};

export default CustomerDetails;
