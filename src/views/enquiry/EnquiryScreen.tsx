import fonts from "@fonts";
import { Colors} from "commonStyles/RNColor.style";
import EnquiryButton from "components/EnquiryButton/EnquiryButton";
import Header from "components/HeaderForMainScreen/HeaderMain";
import HorizontalSlider from "components/HorizontalSlider";
import SafeAreaContainer from "components/SafeAreaContainer";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import StringConstants from "shared/localization";
import IssueEnquiry from "views/enquiry/Issue Enquiry/IssueEnquiry";
import NearbyCustomer from "views/enquiry/NearbyCustomer/NearByCustomer";
import UserEnquiry from "views/enquiry/UserEnquiry Screen/UserEnquiry";

const EnquiryScreen = () => {
  const [enquiryType, setEnquiryType] = useState<string>(
    StringConstants.USER_ENQUIRY
  );

  const Data=[{
   heading:StringConstants.USER_ENQUIRY
  },
{
  heading:StringConstants.ISSUE_ENQUIRY
},
{
   heading:StringConstants.NEARBY_CUSTOMERS

}]
  const handleEnquiryType = (param: string) => setEnquiryType(param);
  const enquirType = useSelector((state: any) => state.UIReducer.enquiryType);

  useEffect(() => {
    setEnquiryType(enquirType);
  }, [enquirType]);

  return (
    <SafeAreaContainer  style={{paddingHorizontal:0}}>
      <Header topheading={StringConstants.ENQUIRY} />
      {/* <HorizontalSlider sliderData={Data} onPress={(param)=>{handleEnquiryType(param)}} /> */}
      <ScrollView style={{ flex: 1 }}>
        <ScrollView
          horizontal
          style={styles.tagContainer}
          showsHorizontalScrollIndicator={false}
        >
          <EnquiryButton
            backgrouncolor={
              enquiryType == StringConstants.USER_ENQUIRY
                ? Colors.sailBlue
                : Colors.aquaHaze
            }
            textColor={
              enquiryType == StringConstants.USER_ENQUIRY
                ? Colors.white
                : Colors.sailBlue
            }
            tag={StringConstants.USER_ENQUIRY}
            handleEnquiryType={handleEnquiryType}
          />
          <EnquiryButton
            backgrouncolor={
              enquiryType == StringConstants.ISSUE_ENQUIRY
                ? Colors.sailBlue
                : Colors.aquaHaze
            }
            textColor={
              enquiryType == StringConstants.ISSUE_ENQUIRY
                ? Colors.white
                : Colors.sailBlue
            }
            tag={StringConstants.ISSUE_ENQUIRY}
            handleEnquiryType={handleEnquiryType}
          />
          <EnquiryButton
            backgrouncolor={
              enquiryType == StringConstants.NEARBY_CUSTOMERS
                ? Colors.sailBlue
                : Colors.aquaHaze
            }
            textColor={
              enquiryType == StringConstants.NEARBY_CUSTOMERS
                ? Colors.white
                : Colors.sailBlue
            }
            tag={StringConstants.NEARBY_CUSTOMERS}
            handleEnquiryType={handleEnquiryType}
          />
        </ScrollView>

        {enquiryType == StringConstants.USER_ENQUIRY && <UserEnquiry />}
        {enquiryType == StringConstants.ISSUE_ENQUIRY && <IssueEnquiry />}
        {enquiryType == StringConstants.NEARBY_CUSTOMERS && <NearbyCustomer />}
      </ScrollView>
    </SafeAreaContainer>
  );
};
export default EnquiryScreen;

const styles = StyleSheet.create({
  tagContainer: {
    flex: 1,
    marginHorizontal: 20,
    paddingBottom: 16,
    paddingTop: 32,
    backgroundColor: Colors.background2,
  },
  txt: {
    fontSize: 12,
    fontFamily:fonts.type.regular,
    color: Colors.darkGrey,
    marginLeft: 20,
  },
});
