import React from "react";
import { SafeAreaView, View } from "react-native";
import Profile from "./CustomerProfile/Profile";
import MainScreenCustomer from "./CustomerDetailsScreen/MainScreenCustomer";
import {  useSelector } from "react-redux";
const ViewProfile= (props: any) => {
  const ClickStatus = useSelector(
    (state: any) => state.UIReducer.CustomerProfileButton,
  );

  return (
    <SafeAreaView style={{ backgroundColor: "#F9F9FC",flex:1 }}>
      {!ClickStatus ? (
        <Profile  />
      ) : (
        <MainScreenCustomer props={props} />
      )}
    </SafeAreaView>
  );
};
export default ViewProfile;
