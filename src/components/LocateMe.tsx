import Glyphs from "assets/Glyphs";
import { Colors } from "commonStyles/RNColor.style";
import { debounceHOC } from "hocs/debounceHOC";
import { GestureResponderEvent, Image, StyleSheet, TouchableOpacity } from "react-native";
import TextWrapper from "./TextWrapper";
import StringConstants from "shared/localization";

interface ILocateMeProps{
    onPress:(e:GestureResponderEvent)=>void;
}


const LocateMe=(props:ILocateMeProps)=>{
    const Press=debounceHOC(TouchableOpacity);
    return(
        <>
        <Press  onPress={props.onPress} style={styles.locateMeContainer}>
        <Image source={Glyphs.LocateMe} style={styles.locateMeImg}/>
        <TextWrapper color={Colors.sailBlue} fontSize={14} >
          {StringConstants.LOCATE_ME}
        </TextWrapper>
            
        </Press>
    
        </>

    )
};

export default LocateMe;

const styles = StyleSheet.create({
    locateMeContainer: {
      flexDirection: "row",
      marginBottom:10
    },
    locateMeText: {
      color: Colors.sailBlue,
      textDecorationLine: "underline",
    },
    locateMeImg:{
        height:19,
        width:19,
        resizeMode:'contain',
        marginRight:9

    }
  });
  