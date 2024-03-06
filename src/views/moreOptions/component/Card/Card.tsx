import Glyphs from "assets/Glyphs";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./Style/Style";
import { navigate } from "@navigation";
import { SCREENS } from "@shared-constants";
import { useDispatch } from "react-redux";
import { BottomModal } from "redux/actions/UIAction";
interface Icard{
  text:string,
  image:any,
}


const Card= ({text,image}:Icard) => {
  const dispatch=useDispatch();

  function handleMoreOptions(){
    if(text=="Create Visit Plan"){
      dispatch(BottomModal(false))
      navigate(SCREENS.CREATE_VISIT_PLAN)
    }
    else if(text=="Create Customer Profile"){
      dispatch(BottomModal(false))
      navigate(SCREENS.CREATE_CUSTOMER_VIEW_MODEL)
      // navigate(SCREENS.CREATE_MEETING_DETAILS)

    }
    else if(text=="Create Meeting Details"){
      dispatch(BottomModal(false))
      navigate(SCREENS.CREATE_MEETING_DETAILS);
    }
    else if(text=="View Customer Profile"){
      dispatch(BottomModal(false))
      navigate(SCREENS.VIEW_CUSTOMER_PROFILE);

    }
  }
  
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handleMoreOptions}>
      <Image source={image} />
      <Text  style={styles.cardText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Card;
