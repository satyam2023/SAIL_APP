import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import styles from '../Style';
import InputTextWithoutIcon from 'components/InputTextWithoutIcon/InputText';
import CompetitorFooter from './CompetitorFooter';
interface CompetitorProps{
  
}

const AddCompetitor:React.FC<CompetitorProps> = ({}:CompetitorProps) => {
 
  return (
  <SafeAreaView style={{flex:1,}}>
    <Text style={{color:'#110F24',marginLeft:20,fontWeight:'500',fontSize:16,lineHeight:36,marginTop:20}}>Add Competitor Details</Text>
<View style={{paddingHorizontal:20}}>
      <View style={ [styles.inputbox,{marginTop:8}]} >
            <InputTextWithoutIcon
                placeholder="Enter Company Name"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="default"
                secureText={false}
                maxLength={10}
            />
        </View>
        <View style={ [styles.inputbox]} >
            <InputTextWithoutIcon
                placeholder="Enter Address"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="default"
                secureText={false}
                maxLength={10}
            />
        </View>
        <View style={ [styles.inputbox,]} >
            <InputTextWithoutIcon
                placeholder="Enter Comment"
                ChangeText={(text: any) => {
                   
                }}
                keyboardType="default"
                secureText={false}
                maxLength={1000}
            />
        </View>
        </View>
        <CompetitorFooter />
    
  </SafeAreaView>
  )
}

export default AddCompetitor;