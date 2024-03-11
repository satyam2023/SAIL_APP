import React from "react";
import { SafeAreaView } from "react-native";
import CMSPagesScreen from "views/cmsPages/CMS";

const CMSViewModel = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CMSPagesScreen/>
  </SafeAreaView> 
  );
};
export default CMSViewModel;
