import React from "react";
import { SafeAreaView } from "react-native";
import FirstHomeScreen from "../views/mainScreen/FirstHomeScreen";
import { Colors } from "commonStyles/RNColor.style";


const MainScreenViewModel=()=>{
    return (<SafeAreaView  style={{backgroundColor:Colors.sailBlue, flex: 1}}>
       <FirstHomeScreen/>
    </SafeAreaView>);
}

export default MainScreenViewModel;