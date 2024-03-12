import React from "react";
import { SafeAreaView} from "react-native";
import Profile from "./CustomerProfile/Profile";
import MainScreenCustomer from "./CustomerDetailsScreen/MainScreenCustomer";
import {  useSelector } from "react-redux";
import { Colors } from "commonStyles/RNColor.style";
const ViewProfile= () => {
  const ClickStatus = useSelector(
    (state: any) => state.UIReducer.CustomerProfileButton,
  );

  return (
    <SafeAreaView style={{ backgroundColor: Colors.background2,flex:1 }}>
      {!ClickStatus ? (
        <Profile  />
      ) : (
        <MainScreenCustomer />
      )}
    </SafeAreaView>
  );
};
export default ViewProfile;
