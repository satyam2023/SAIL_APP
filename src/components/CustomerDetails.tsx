import { StyleSheet } from "react-native";
import SafeAreaContainer from "./SafeAreaContainer";
import { Colors } from "commonStyles/RNColor.style";
import { FlatList } from "react-native-gesture-handler";
import CustomerDetailColumn from "./CustomerDetailColumn";

interface ICustomerDetails {
  CustomerData: Array<object>;
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
    <SafeAreaContainer backgroundColor={Colors.white}>
      <FlatList data={props.CustomerData} renderItem={renderItem} />
    </SafeAreaContainer>
  );
};

export default CustomerDetails;

