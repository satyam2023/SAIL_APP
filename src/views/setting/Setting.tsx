import React, { useRef, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SettingHeader from "./component/SettingHeader";
import InputTextField from "components/InputTextField";
import { ITextFieldData, TextFieldData } from "./mockData/TextFieldData";
import styles from "./Style/Style";
import Glyphs from "assets/Glyphs";
import { ScrollView } from "react-native";
import { Colors } from "commonStyles/RNColor.style";
const Setting = () => {
  function renderItem(item: ITextFieldData) {
    return (
      <InputTextField
        onChangeText={()=>{

        }}
        containerStyle={{backgroundColor:Colors.lightGray}}
        placeholder={item.placeholder}
        maxlength={20}
        defaultValue={item.value}
      />
    );
  }
  return (
    <SafeAreaView style={{ backgroundColor: "#F9F9FC", flex: 1 }}>
      <SettingHeader />
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <View style={styles.detailContainer}>
          <View style={styles.circle}>
            <Text style={styles.circleContent}>SV</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "82%",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={styles.userName}>Saransh Verma</Text>
              <Text style={styles.userPost}>Branch Manager</Text>
            </View>
            <TouchableOpacity style={styles.editContainer}>
              <Image source={Glyphs.Editing} style={styles.editImg} />
              <Text style={styles.editTxt}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        {TextFieldData.map(renderItem)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Setting;
