import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomerCommon from "../component/CustomerCommonDetails/CustomerCommon";
import styles from "./Style/Style";
import Data from "./Data/Data";
import Glyphs from "assets/Glyphs";
interface executedCustomerProps {
  handleCustomerClick: Function;
}
const ExecutedCustomer= ({handleCustomerClick}: executedCustomerProps) => {
  
  const renderItem = (item: any, index: number) => {
    if (index < 14) {
      return (
        <View key={index}>
          <CustomerCommon
            uppertext={item.uppertext}
            lowertext={item.lowertext}
            imagepath={item.imagepath}
          />
        </View>
      );
    }
  };

  const renderItems = (item: any, index: number) => {
    console.log("item details::", item.item);
    if (index >= 14) {
      return (
        <View key={index}>
          <CustomerCommon
            uppertext={item.uppertext}
            lowertext={item.lowertext}
            imagepath={item.imagepath}
          />
        </View>
      );
    }
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.customerContainer}>
        <Image source={Glyphs.Profile2userClicked} />
        <View>
          <Text style={styles.customertext}>Customer Visit 1</Text>
          <Text style={styles.companytext}>XYZ Steelworks Private Limited</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            handleCustomerClick(false);
          }}
        >
          <Image source={Glyphs.Arrow} style={{transform:[{rotate:'270deg'}]}} />
        </TouchableOpacity>
      </View>
      {Data.map(renderItem)}
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            marginLeft: 14,
            fontWeight: "500",
            fontSize: 14,
            lineHeight: 16,
            width: 200,
            color: "#110F24",
          }}
        >
          Mark Escalation as Resolved
        </Text>
        <View
          style={{
            height: 17,
            width: 17,
            borderWidth: 1,
            borderColor: "#110F24",
            marginLeft: 8,
            borderRadius: 2,
          }}
        />
      </View>
      <Text
        style={{
          marginLeft: 14,
          fontWeight: "500",
          fontSize: 14,
          lineHeight: 16,
          width: 241,
          color: "#110F24",
          marginTop: 32,
        }}
      >
        Comments by Escalated Manager
      </Text>
      <View
        style={{
          backgroundColor: "#F9F9FC",
          height: 64,
          width: 321,
          marginLeft: 14,
          marginTop: 16,
          borderRadius: 4,
        }}
      >
        <Text
          style={{
            backgroundColor: "#F9F9FC",
            height: 40,
            width: 253,
            marginLeft: 16,
            lineHeight: 20,
            marginTop: 9,
            fontWeight: "400",
            fontSize: 14,
            color: "#110F2480",
          }}
        >
          Comments by Escalated Manager comes here.
        </Text>
      </View>
      <Text
        style={{
          marginLeft: 14,
          fontWeight: "500",
          fontSize: 14,
          lineHeight: 16,
          width: 241,
          color: "#110F24",
          marginTop: 24,
        }}
      >
        Resolution Comment
      </Text>
      <View
        style={{
          backgroundColor: "#FFFFFF",
          height: 64,
          width: 321,
          marginLeft: 14,
          marginTop: 16,
          borderRadius: 4,
          borderWidth: 1,
          borderColor: "#F9F9FC",
        }}
      >
        <Text
          style={{
            backgroundColor: "#FFFFFF",
            height: 20,
            width: 208,
            marginLeft: 16,
            lineHeight: 20,
            marginTop: 9,
            fontWeight: "400",
            fontSize: 14,
            color: "#110F2480",
          }}
        >
          Resolution Comment Come here.
        </Text>
      </View>

      {Data.map(renderItems)}

      <View style={{ flexDirection: "row", marginTop: 12 }}>
        <Image
          source={Glyphs.Download}
          style={{ marginLeft: 16 }}
        />
        <Text
          style={{
            textDecorationLine: "underline",
            marginLeft: 4,
            fontWeight: "500",
            fontSize: 14,
            lineHeight: 16,
            width: 151,
            color: "#233972",
          }}
        >
          Download PDF Report
        </Text>
      </View>

      <TouchableOpacity
        style={styles.submitBtnContainer}
        onPress={() => {
          
        }}
      >
        <Text
          style={styles.submitBtn}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ExecutedCustomer;
