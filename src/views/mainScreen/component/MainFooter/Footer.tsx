import React, { FC, useRef } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomDrawer from "../MainScreen/BottomDrawer/BottomDrawer";

interface Footerprops{
  color:any,
  navigationprops:any,
  // PlusClicked:Function
}
const Footer:FC<Footerprops>=({color,navigationprops,}:Footerprops)=>{
  const BottomDrawerRef= useRef<any>();
console.log("navigation screen name in main screen",navigationprops.route.name)
  function PlusClicked() {
    BottomDrawerRef.current.handleClicked();
   
}
    return(
       <View >
       <View style={{height:96,width:'42%',backgroundColor:'#FFFFFF',position:'absolute',borderTopRightRadius:30,top:600}}>
       <View style={{flexDirection:'row'}}>
        <TouchableOpacity>
        {/* { navigationprops.route.name=="MainScreen"? */}
        <Image source={require('../images/HomeDull.png')} style={{marginLeft:35,marginTop:39}}/>
              {/* : <Image source={require('../images/HomeDull.png')} style={{marginLeft:35,marginTop:39}}/>   } */}
        </TouchableOpacity> 
        <TouchableOpacity onPress={()=>{navigationprops.navigation.navigate('ProductCatalog')}}>
        {/* { navigationprops.route.name=="ProductCatalog"?  */}
        <Image source={require('../images/shop.png')} style={{marginLeft:56,marginTop:39}} />
       {/* :<Image source={require('../images/shopClicked.png')} style={{marginLeft:56,marginTop:39}} />} */}
        </TouchableOpacity>
     </View>
      </View>

      <View style={{height:96,width:'45%',backgroundColor:'#FFFFFF',position:'absolute',marginLeft:'58%',borderTopLeftRadius:30,top:600 ,zIndex:2,}}>
        
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>{navigationprops.navigation.navigate('MainEnquiry')}}>
            
        {/* { navigationprops.route.name=="MainEnquiry"?   */}
        <Image source={require('../images/profile2user.png')} style={{marginLeft:35,marginTop:39}} />
         {/* :<Image source={require('../images/profile2userClicked.png')} style={{marginLeft:35,marginTop:39}} />} */}
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>{navigationprops.navigation.navigate('CMS')}}>
          
         {/* { navigationprops.route.name=="CMS"?  */}
         <Image source={require('../images/setting2.png')} style={{marginLeft:56,marginTop:39}}/>
           {/* :  <Image source={require('../images/setting2Clicked.png')} style={{marginLeft:56,marginTop:39}}/>} */}
       </TouchableOpacity>
          </View>
      </View>
      <View style={{height:100,width:100,backgroundColor:'#FFFFFF',position:'absolute',marginLeft:'37%',top:610}}/>
      
      <View style={{height:60,width:100,backgroundColor:color,left:'38%',top:570,borderBottomRightRadius:150,borderBottomLeftRadius:150}}/>
     <TouchableOpacity onPress={()=>{PlusClicked()}} >
     <View style={{height:56,width:56,alignSelf:'center',position:'absolute',backgroundColor:"#E67437",borderRadius:30,top:500}}>
       <Image source={require('../images/plus.png')}/>
     </View>
     </TouchableOpacity>
     <BottomDrawer Navigationprops={navigationprops} ref={BottomDrawerRef}/>
       </View>
    );

}

export default Footer;