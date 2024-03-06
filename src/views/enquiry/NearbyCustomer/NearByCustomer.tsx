import React from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "react-native";
import Data from "./Data";
import { Idata } from "./Data";
import CustomerList from "./component/cutomerlist/CustomerList";

interface Iuser {
  item: Idata;
  index: number;
}

const NearbyCustomer = () => {
  function renderitem({ item, index }: Iuser) {
    return (<CustomerList image={item.image} index={index} name={item.name} location={item.location}/>);
  }

  return (
    <View
      style={{backgroundColor: "#F9F9FC", flex:1,paddingHorizontal:20}}
    >
     <FlatList
     data={Data}
     renderItem={renderitem}
     />
    </View>
  );
};

export default NearbyCustomer;
