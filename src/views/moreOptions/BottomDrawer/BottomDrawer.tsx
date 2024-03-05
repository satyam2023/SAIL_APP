import Glyphs from "assets/Glyphs";
import React, {
  forwardRef, useState
} from "react";
import { Modal, Text, View } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Card from "../component/Card/Card";
import { useDispatch } from "react-redux";
import { BottomModal } from "redux/actions/UIAction";




const BottomDrawer = forwardRef(() => {
  const [modalVisible,setModalVisible]=useState<boolean>(true);
  const dispatch=useDispatch();
  return (
<Modal 
animationType='slide'
transparent={true}
visible={modalVisible}
style={ {flex:1,width:'100%',position:'absolute',bottom:0}}>
<View style={{backgroundColor:'#FAFAFA',width:'100%',position:'absolute',bottom:0,padding:20}}>
<View style={{justifyContent:'space-between',flexDirection:'row',}}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#000000'}}>
  More Options
  </Text>
  <TouchableOpacity onPress={()=>{dispatch(BottomModal(false))}}>
  <Image source={Glyphs.Close}/>
  </TouchableOpacity>
</View>
<View style={{flexDirection:'row',flexWrap:"wrap",justifyContent:'space-between'}}>
  <Card text={"Create Visit Plan"} image={Glyphs.SignleUser}/>
  <Card text={"Create Customer Profile"} image={Glyphs.SignleUser}/>
  <Card text={"Create Meeting Details"} image={Glyphs.SignleUser}/>
  <Card text={"View Customer Profile"} image={Glyphs.SignleUser}/>
</View>
</View>
</Modal>
  )

});

export default BottomDrawer;
