import Header from "components/HeaderForMainScreen/HeaderMain";
import React from "react";
import { SafeAreaView } from "react-native";
import CMSPages from "views/cmsPages/CMS";

const CMSViewModel = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CMSPages/>
    </SafeAreaView>
  );
};
export default CMSViewModel;
