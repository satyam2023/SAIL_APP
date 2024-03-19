import React from "react";
import { SafeAreaView } from "react-native";
import HomeScreen from "views/home/HomeScreen";
import { Colors } from "commonStyles/RNColor.style";
import { useSelector } from "react-redux";



const HomeScreenViewModel=()=>{

    const userData=useSelector((state:any)=>state.userAccount.data.user);

     console.log("User Data::",userData);



    return (<SafeAreaView  style={{backgroundColor:Colors.sailBlue, flex: 1}}>
       <HomeScreen
       {...{
        
       }}
       />
    </SafeAreaView>);
}

export default HomeScreenViewModel;