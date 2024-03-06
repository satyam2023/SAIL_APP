import Header from "components/HeaderForMainScreen/HeaderMain";
import React from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";
interface IheaderProps {
  heading: string;
  CurrentScreen: number;
  topheading: string;
}
const CustomerDetailHeader= ({heading,topheading,CurrentScreen}:IheaderProps) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={"#233972"} barStyle={"light-content"} />
      <Header topheading={topheading} />
      {topheading != "Add Customer Representative" ? (
        <View style={{ flexDirection: "row",justifyContent:'space-between',paddingHorizontal:20}}>
          <Text
            style={{
              height: 36,
              color: "#000000",
              fontWeight: "500",
              fontSize: 16,
              marginTop: 20,
            }}
          >
            {heading}
          </Text>
          <Text
            style={{
              marginTop: 20,
              height: 36,
              color: "#000000",
              fontWeight: "500",
              fontSize: 16,
            }}
          >
            0{CurrentScreen}/<Text style={{ fontWeight: "400" }}>03</Text>
          </Text>
        </View>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};

export default CustomerDetailHeader;
