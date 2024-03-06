import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SettingHeader from "./component/SettingHeader";
import InputText from "components/InputText/InputText";
import styles from "./Style/Style";
import Glyphs from "assets/Glyphs";
import { ScrollView } from "react-native";
import InputTextWithoutIcon from "components/InputTextWithoutIcon/InputText";
const Setting= (props: any) => {
  const [inputFocus, setInputFocus] = useState<Boolean>(false);
  return (
    <SafeAreaView style={{ backgroundColor: "#F9F9FC", flex: 1 }}>
      <SettingHeader />
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <View style={styles.detailContainer}>
          <View style={styles.circle}>
            <Text style={styles.circleContent}>SV</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',width:'82%',alignItems:'center'}}>
          <View >
            <Text style={styles.userName}>Saransh Verma</Text>
            <Text style={styles.userPost}>Branch Manager</Text>
          </View>
          <TouchableOpacity style={styles.editContainer}>
            <Image source={Glyphs.Editing} style={styles.editImg} />
            <Text style={styles.editTxt}>Edit Profile</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.inputbox]}>
          <InputTextWithoutIcon
            placeholder="Unique Personal Number"
            ChangeText={(text: any) => {}}
            keyboardType="default"
            secureText={false}
            maxLength={10}
          />
        </View>
        <View style={[styles.inputbox]}>
          <InputTextWithoutIcon
            placeholder="Name"
            ChangeText={(text: any) => {}}
            keyboardType="numeric"
            secureText={false}
            maxLength={10}
          />
        </View>
        <View style={[styles.inputbox]}>
          <InputTextWithoutIcon
            placeholder="Contact Number"
            ChangeText={(text: any) => {}}
            keyboardType="numeric"
            secureText={false}
            maxLength={10}
          />
        </View>
        <View style={[styles.inputbox]}>
          <InputTextWithoutIcon
            placeholder="Email Id"
            ChangeText={(text: string) => {}}
            keyboardType="numeric"
            secureText={false}
            maxLength={10}
          />
        </View>
        <View style={[styles.inputbox]}>
          <InputTextWithoutIcon
            placeholder="Location"
            ChangeText={(text: string) => {}}
            keyboardType="numeric"
            secureText={false}
            maxLength={10}
          />
        </View>
        <View style={[styles.inputbox]}>
          <InputTextWithoutIcon
            placeholder="Role"
            ChangeText={(text: string) => {}}
            keyboardType="numeric"
            secureText={false}
            maxLength={10}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Setting;
