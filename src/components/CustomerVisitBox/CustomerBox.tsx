import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./Style";
import Glyphs from "assets/Glyphs";

interface IcustomerBox{
    handleCustomerClick:Function
}


const CustomerBox = ({handleCustomerClick}:IcustomerBox) => {
  return (
    <View style={styles.container}>
      <Image source={Glyphs.Profile2userClicked} />
      <View>
        <Text style={styles.customertext}>Customer Visit 1</Text>
        <Text style={styles.companytext}>XYZ Steelworks Private Limited</Text>
      </View>
      <TouchableOpacity onPress={() => {handleCustomerClick(true)}}>
        <Image source={Glyphs.Arrow} style={styles.img} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomerBox;
