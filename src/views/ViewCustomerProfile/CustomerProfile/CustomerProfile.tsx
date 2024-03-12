import React, { useRef } from "react";
import Header from "components/HeaderForMainScreen/HeaderMain";
import { View } from "react-native";
import styles from "../Style";
import { useDispatch } from "react-redux";
import Glyphs from "assets/Glyphs";
import StringConstants from "shared/localization";
import InputTextField from "components/InputTextField";
import { Colors } from "commonStyles/RNColor.style";
import SafeAreaContainer from "components/SafeAreaContainer";
import CustomerBox from "components/CustomerBox";
import { setCustomerProfileButton } from "redux/actions/UIAction";

const CustomerProfile = () => {
  const dispatch = useDispatch();
  const CustomerDetails = useRef("");
  return (
    <View>
      <>
        <Header topheading={StringConstants.CUSTOMER_PROFILE} />
        <View
          style={{
            width: "100%",
            height: 30,
            backgroundColor: Colors.sailBlue,
          }}
        />
        <View style={{ paddingHorizontal: 20 }}>
          <InputTextField
            onChangeText={(text: string) => (CustomerDetails.current = text)}
            placeholder={StringConstants.ENTER_CUST_CODE_OR_NAME}
            rightIcon={Glyphs.Close}
            containerStyle={styles.floatingTextInput}
          />
        </View>
        <SafeAreaContainer>
          <CustomerBox
            heading={StringConstants.USER_NAME}
            subHeading={StringConstants.CUSTOMER_NUMBERIC_CODE}
            onPress={() => {
              dispatch(setCustomerProfileButton(true));
            }}
          />
          <CustomerBox
            heading={StringConstants.USER_NAME}
            subHeading={StringConstants.CUSTOMER_NUMBERIC_CODE}
            onPress={() => {}}
          />
          <CustomerBox
            heading={StringConstants.USER_NAME}
            subHeading={StringConstants.CUSTOMER_NUMBERIC_CODE}
            onPress={() => {}}
          />
        </SafeAreaContainer>
      </>
    </View>
  );
};
export default CustomerProfile;
