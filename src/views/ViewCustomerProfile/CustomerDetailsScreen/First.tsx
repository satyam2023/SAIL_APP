import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import InputTextWithoutIcon from 'components/InputTextWithoutIcon/InputText';
import styles from './Style';
import DropDown from 'components/DropDown/DropDown';
import { CustomerSegment,CustomerStatus,CustomerSubSegment,CustomerSubType,CustomerType } from './Data/Data';
import UploadDocumnet from 'components/UploadDocument/UploadDocument';

const First :React.FC<{}>= () => {
  return (
   <ScrollView style={{paddingHorizontal:20,marginBottom:'30%'}} >
    <View style={ [styles.inputbox,{marginTop:8}]} >
            <InputTextWithoutIcon
                placeholder="Customer Code"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
        </View>
        <View style={ [styles.inputbox,{marginBottom:0}]} >
            <InputTextWithoutIcon
                placeholder="Company Name"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
            </View>
            <DropDown data={CustomerSegment} heading={'Customer Segment'} setReason={()=>{}}/>
            <DropDown data={CustomerSubSegment} heading={'Customer SubSegment'} setReason={()=>{}}/>
            <DropDown data={CustomerType} heading={'Customer Type'} setReason={()=>{}}/>
            <DropDown data={CustomerSubType} heading={'Customer Sub Type'} setReason={()=>{}}/>
            <DropDown data={CustomerType} heading={'Select Status of Customer'} setReason={()=>{}}/>

            <View style={ [styles.inputbox,{marginTop:16}]} >
            <InputTextWithoutIcon
                placeholder="PAN Card Number"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
            </View>
            <View style={ [styles.inputbox]} >
            <InputTextWithoutIcon
                placeholder="GST Number"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
            </View>
            <View style={ [styles.inputbox]} >
            <InputTextWithoutIcon
                placeholder="Customer Region"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
            </View>
            <View style={ [styles.inputbox]} >
            <InputTextWithoutIcon
                placeholder="Website Link"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
            </View>
            <View style={ [styles.inputbox]} >
            <InputTextWithoutIcon
                placeholder="Location Name"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="numeric"
                secureText={false}
                maxLength={10}
            />
            </View>
           <UploadDocumnet/>
            
            
    
   </ScrollView>
    
  )
}

export default First;