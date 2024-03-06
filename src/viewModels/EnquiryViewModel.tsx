import { blue, darkgrey } from "commonStyles/RNColor.style";
import EnquiryButton from "components/EnquiryButton/EnquiryButton";
import Header from "components/HeaderForMainScreen/HeaderMain";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import { ScrollView, State } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import IssueEnquiry from "views/enquiry/Issue Enquiry/IssueEnquiry";
import NearbyCustomer from "views/enquiry/NearbyCustomer/NearByCustomer";
import Enquiry from "views/enquiry/UserEnquiry Screen/Enquiry";

const EnquiryViewModel = () => {
    const [enquiryType ,setEnquiryType]=useState<string>("User Enquiry")
    function handleEnquiryType(param:string){
      console.log("Parameter Received::",param);
        setEnquiryType(param);
    }
    const enquirType=useSelector((state:any)=>state.UIReducer.enquiryType)
    console.log("use Selctor ouput of Enqiry::: ",enquirType);

    useEffect(()=>{
      console.log("RETURNED VALUE In ENQUIRY MODEL::::",enquirType);
      setEnquiryType(enquirType);
    },[enquirType])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header topheading={"Enquiry"} />
      <ScrollView style={{flex:1}}>
      <ScrollView horizontal style={styles.tagContainer} showsHorizontalScrollIndicator={false}>
        <EnquiryButton
          backgrouncolor={enquiryType=="User Enquiry"?blue:'#EEF4FF'}
          textColor={enquiryType=="User Enquiry"?'#FFF':blue}
          tag={"User Enquiry"}
          handleEnquiryType={handleEnquiryType}
        />
         <EnquiryButton
          backgrouncolor={enquiryType=="Issue Enquiry"?blue:'#EEF4FF'}
          textColor={enquiryType=="Issue Enquiry"?'#FFF':blue}
          tag={"Issue Enquiry"}
          handleEnquiryType={handleEnquiryType}
        />
         <EnquiryButton
          backgrouncolor={enquiryType=="Nearby Customer"?blue:'#EEF4FF'}
          textColor={enquiryType=="Nearby Customer"?'#FFF':blue}
          tag={"Nearby Customer"}
          handleEnquiryType={handleEnquiryType}
        />
      </ScrollView>

       {enquiryType=="User Enquiry" && <Enquiry/>}
       {enquiryType=="Issue Enquiry" && <IssueEnquiry />}
       {enquiryType=="Nearby Customer" && <NearbyCustomer />}
       </ScrollView>
    </SafeAreaView>
  );
};
export default EnquiryViewModel;

const styles = StyleSheet.create({
    tagContainer: {
      flex: 1,
      marginHorizontal:20,
      paddingBottom: 16,
      paddingTop: 32,
      backgroundColor: "#F9F9FC",

    },
    txt: {
      fontSize: 12,
      fontWeight: "400",
      color: darkgrey,
      marginLeft: 20,
    },
  });
  
