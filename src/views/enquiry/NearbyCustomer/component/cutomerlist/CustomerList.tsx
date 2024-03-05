import React from "react";
import { Image, Text, View } from "react-native";
interface IcustomerList {
  image: any;
  index: number;
  name: string;
  location: string;
}

const CustomerList = ({ image, index, name, location }: IcustomerList) => {
  return (
    <View
      key={index}
      style={{
        height: 70,
        width: "100%",
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
        marginTop: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 22.5,
      }}
    >
      <Image source={image} style={{}} />
      <View style={{ marginLeft: 24.67 }}>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 14,
            lineHeight: 14,
            color: "#110F24",
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 12,
            lineHeight: 16,
            color: "#110F2480",
          }}
        >
          {location}
        </Text>
      </View>
    </View>
  );
};

export default CustomerList;
