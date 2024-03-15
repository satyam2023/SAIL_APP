import React from "react";
import {
 View,
} from "react-native";

import Header from "components/AppHeader";
import StringConstants from "shared/localization";
interface Props {
  setScreen: Function;
}

const Contact = ({ setScreen }: Props) => {
  return (
    
      <View>
        <Header topheading={StringConstants.CONTACT_US} onPress={()=>{setScreen(StringConstants.CMS)}}/>
      </View>
 
  );
};

export default Contact;
