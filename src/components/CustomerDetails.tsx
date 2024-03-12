
import SafeAreaContainer from "./SafeAreaContainer";
import { Colors } from "commonStyles/RNColor.style";
import { FlatList } from "react-native-gesture-handler";
import CustomerDetailColumn from "./CustomerDetailColumn";
import CustomerBox from "./CustomerBox";

interface ICustomerDetails {
  CustomerData: Array<object>;
  onPress:()=>void
}

const CustomerDetails = (props: ICustomerDetails) => {
  const renderItem = (item: any) => {
    return (
      <CustomerDetailColumn
        headingText={item.item.uppertext}
        detailText={item.item.lowertext}
        image={item.item.imagepath}
      />
    );
  };

  return (
    <>
    <CustomerBox handleCustomerClick={props.onPress} isCustomerDetailVisible={true} style={{marginBottom:0}}/>
    <SafeAreaContainer backgroundColor={Colors.white}>
      <FlatList data={props.CustomerData} renderItem={renderItem} />
    </SafeAreaContainer>
    </>
  );
};

export default CustomerDetails;

