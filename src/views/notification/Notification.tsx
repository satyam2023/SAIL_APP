import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import Header from 'components/HeaderForMainScreen/HeaderMain';
import CommonBox from './CommonBox/CommonBox';
import styles from './Style/Styles';



const Notification= (props:any) => {
  return (
 <SafeAreaView style={{flex:1,backgroundColor:'#F9F9FC',}}>
  <Header topheading={'Notifications'}/>
  <ScrollView>
<Text style={styles.txt}>Today</Text>
<CommonBox/>
<Text style={styles.txt}>Yesterday</Text>
<CommonBox/>
<CommonBox/>
<CommonBox/>
<CommonBox/>
<CommonBox/>
</ScrollView>
 </SafeAreaView>
  )
}

export default Notification;