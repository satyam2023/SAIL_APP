import SafeAreaContainer from "./SafeAreaContainer";
import CustomerBox from "./RectangularBox";
import Glyphs from "assets/Glyphs";
import StringConstants from "shared/localization";

interface ICustomerDetails {
  CustomerData: Array<object>;
  onPress: () => void;
  iSBreakeddetails?:boolean
}

const CustomerDetails = (props: ICustomerDetails) => {
  const renderItem = (item: any,index:number) => {
  
    return (
      <CustomerBox
        key={index}
        heading={item.uppertext}
        subHeading={item.lowertext}
        leftIcon={item.imagepath}
        isCustomerColumn={true}
      />
    );
  };

  return (
    <SafeAreaContainer >
     { !props.iSBreakeddetails && <CustomerBox
        onPress={props.onPress}
        isCustomerDetailVisible={true}
        style={{ marginBottom: 0 }}
        leftIcon={Glyphs.Profile2userClicked}
        heading={StringConstants.CUSTOMER_VISIT_1}
        subHeading={StringConstants.XYZ_STEELWORKS}
        isClosable
      />}
      {props.CustomerData.map(renderItem)}
    </SafeAreaContainer>
  );
};

export default CustomerDetails;
