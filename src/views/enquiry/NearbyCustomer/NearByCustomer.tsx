import React from "react";
import {
  FlatList,
} from "react-native";
import Data from "./Data";
import { Idata } from "./Data";
import SafeAreaContainer from "components/SafeAreaContainer";
import { RectangularBox } from "components";

interface Iuser {
  item: Idata;
  index: number;
}

const NearbyCustomer = () => {
  function renderitem({ item, index }: Iuser) {
    return (<RectangularBox heading={item.name} subHeading={item.location} leftIcon={item.image}  isRightNotIconRequired/>);
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
