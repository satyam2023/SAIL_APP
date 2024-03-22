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

}

const CustomerDetails = (props: ICustomerDetails) => {
 
  const renderItem = (item: string, index: number) => {
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
          style={{ marginBottom: 0 }}
          leftIcon={Glyphs.multiProfile}
          heading={StringConstants.CUSTOMER_VISIT_1}
          subHeading={StringConstants.XYZ_STEELWORKS}
          isClosable
        />
      )}
      <FlatList
        data={props.CustomerData}
        renderItem={({ item, index }) => renderItem(item, index)}
        scrollEnabled={false}
      />
    </View>
  );
};

export default CustomerDetails;
