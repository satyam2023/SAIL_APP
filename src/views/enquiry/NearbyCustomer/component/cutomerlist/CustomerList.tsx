import commonStyles from "commonStyles/CommonStyle";
import { Colors } from "commonStyles/RNColor.style";
import TextWrapper from "components/TextWrapper";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
interface IcustomerList {
  image: any;
  index: number;
  name: string;
  location: string;
}

const CustomerList = ({ image, index, name, location }: IcustomerList) => {
  return (
    <View key={index} style={styles.customerListContainer}>
      <Image source={image} />
      <View style={{ marginLeft: 25 }}>
        <TextWrapper style={commonStyles.font14MediumBlackpearl}>
          {name}
        </TextWrapper>
        <TextWrapper style={[commonStyles.font12RegularGrey, { marginTop: 6 }]}>
          {location}
        </TextWrapper>
      </View>
    </View>
  );
};

export default CustomerList;

const styles = StyleSheet.create({
  customerListContainer: {
    height: 70,
    width: "100%",
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 22.5,
  },
});
