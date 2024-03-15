import "react-native-gesture-handler";
import React from "react";
import { StatusBar, useColorScheme, LogBox, View, Platform, SafeAreaView } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";

import Navigation from "./src/route";
import { useNetInfo } from "@react-native-community/netinfo";
import { persistor, store } from "redux/store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { isAndroid } from "libs";
import StatusCode from "core/StatusCode";
import OOPS from "views/emptyState/OOPS";
import PleaseWaitLoader from "views/emptyState/PleaseWaitLoader";
import { Colors } from "commonStyles/RNColor.style";
import HorizontalSlider from "components/HorizontalSliderTab";
import DescriptionCard from "components/DescriptionCard";
import Glyphs from "assets/Glyphs";
import StringConstants from "shared/localization";
LogBox.ignoreAllLogs();

const App = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";
  const netInfo = useNetInfo({
    reachabilityUrl: "https://clients3.google.com/generate_204",
    reachabilityTest: async (response) =>
      response.status === StatusCode.SuccessNoContent,
    reachabilityLongTimeout: 60 * 1000,
    reachabilityShortTimeout: 5 * 1000,
    reachabilityRequestTimeout: 15 * 1000,
    reachabilityShouldRun: () => true,
    shouldFetchWiFiSSID: true,
    useNativeReachability: false,
  });
  console.log(netInfo);
  React.useEffect(() => {
    StatusBar.setBarStyle('dark-content')
  if(isAndroid){
    StatusBar.setBackgroundColor(Colors.sailBlue);
  }
  
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, [scheme, isDarkMode]);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={{flex:0,backgroundColor:Colors.sailBlue}}/>
        <Navigation />
      </PersistGate>
    </Provider>

    

    
   
 
  );
};

export default App;
