import React from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Header from "components/HeaderForMainScreen/HeaderMain";
import StringConstants from "shared/localization";
interface Props {
  setScreen: Function;
}

const Contact = ({ setScreen }: Props) => {
  return (
    
      <SafeAreaView>
        <Header topheading={StringConstants.CONTACT_US} onPress={()=>{setScreen(StringConstants.CMS)}}/>
      </SafeAreaView>
 
  );
};

export default Contact;
