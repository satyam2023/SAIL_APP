import { navigate } from "@navigation";
import { SCREENS } from "@shared-constants";
import Glyphs from "assets/Glyphs";
import React from "react";
import { SafeAreaView, StatusBar, Text, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import {useDispatch } from "react-redux";
import { setCustomerProfileButton } from "redux/actions/UIAction";



const LastScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Image
        source={Glyphs.CreateCustomerLast}
      />
      <Text
        style={{
          width: 297,
          height: 60,
          fontWeight: "500",
          fontSize: 20,
          lineHeight: 30,
          textAlign: "center",
          color: "#233972",
          marginTop: 45,
        }}
      >
        Customer Profile Successfully Updated
      </Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(setCustomerProfileButton(false));
          navigate(SCREENS.MAIN);
        }}
        style={{
          alignSelf: "center",
          height: 56,
          width: 168,
          gap: 10,
          backgroundColor: "#233972",
          marginTop: 32,
          borderRadius: 100,
          justifyContent:'center',
          alignItems:'center',
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontWeight: "500",
            fontSize: 16,
            lineHeight: 20,
            width: 111,
            alignSelf: "center",
          }}
        >
          Back To Home
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LastScreen;
