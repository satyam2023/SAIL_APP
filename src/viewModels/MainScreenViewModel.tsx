import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import FirstHomeScreen from "../views/mainScreen/FirstHomeScreen";


const MainScreenViewModel=()=>{
    return (<SafeAreaView  style={{backgroundColor:'#F9F9FC', flex: 1}}>
       <FirstHomeScreen/>
    </SafeAreaView>);
}

export default MainScreenViewModel;