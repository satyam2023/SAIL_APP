import Glyphs from 'assets/Glyphs';
import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { Image } from 'react-native';

const QR:React.FC<{}> = () => {
  return (
    
    <SafeAreaView style={{backgroundColor:'#F9F9FC',height:'100%'}}>
          <Image source={Glyphs.Qr} style={{alignSelf:'center',marginTop:135}}/>
          <Text style={{width:173,height:36,fontWeight:'500',fontSize:24,lineHeight:36,color:'#110F24',alignSelf:'center',marginTop:8}}>
          Scan QR Code
          </Text>
        </SafeAreaView>
  )
}

export default QR