import React from "react";
import styles from "../Style";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import InputTextWithoutIcon from "components/InputTextWithoutIcon/InputText";

interface RepProps{
   
}

const RepresentativeDetails:React.FC<RepProps>=({}:RepProps)=>{
return(<ScrollView style={{flex:1,paddingHorizontal:20}}>
    <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 16, width: 146, color: '#666666', marginTop: 20,}}>
            Upload Visiting Card
        </Text>
    <TouchableOpacity style={{ width: '100%', height: 82, borderWidth: 1, borderColor: '#233972', borderStyle: 'dashed', borderRadius: 33, marginTop: 19, backgroundColor: '#E9EBF1',marginBottom:0 }}>
            <View style={{ height: 34, marginTop: 33 }}>
                <Text style={{ alignSelf: 'center', fontWeight: '500', fontSize: 16, color: '#666666', lineHeight: 16 }}>
                    +  Upload Visiting Card
                </Text>
            </View>
        </TouchableOpacity>
      <View style={{marginTop:16}}>
     
       <View style={ styles.inputbox} >
            <InputTextWithoutIcon
                placeholder="Enter Name"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
        </View>
        <View style={ styles.inputbox} >
           
            <InputTextWithoutIcon
                placeholder="Enter Designation"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
        </View>
        <View style={ styles.inputbox} >
           
            <InputTextWithoutIcon
                placeholder="Enter Departement"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
        </View>
        <View style={ styles.inputbox} >
           
            <InputTextWithoutIcon
                placeholder="Enter Address"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
        </View>
        <View style={ styles.inputbox} >
            <InputTextWithoutIcon
                placeholder="Enter Email Address"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
        </View>
        <View style={ styles.inputbox} >
            <InputTextWithoutIcon
                placeholder="Enter Contact Number"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
        </View>
      </View>
     
    </ScrollView>)
};
export default RepresentativeDetails;
