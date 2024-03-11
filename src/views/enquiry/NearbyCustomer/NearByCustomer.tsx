import React from "react";
import {
  FlatList,
} from "react-native";
import Data from "./Data";
import { Idata } from "./Data";
import CustomerList from "./component/cutomerlist/CustomerList";
import SafeAreaContainer from "components/SafeAreaContainer";

interface Iuser {
  item: Idata;
  index: number;
}

const NearbyCustomer = () => {
  function renderitem({ item, index }: Iuser) {
    return (<CustomerList image={item.image} index={index} name={item.name} location={item.location}/>);
  }

  return (
    <SafeAreaContainer style={{marginBottom:20}} >
     <FlatList
     data={Data}
     renderItem={renderitem}
     />
    </SafeAreaContainer>
  );
};

export default NearbyCustomer;
