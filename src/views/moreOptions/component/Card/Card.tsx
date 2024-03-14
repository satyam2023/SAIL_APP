import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./Style/Style";
import { navigate } from "@navigation";
import { SCREENS } from "@shared-constants";
import { useDispatch } from "react-redux";
import { BottomModal } from "redux/actions/UIAction";
import StringConstants from "shared/localization";
interface Icard {
  text: string;
  image: any;
}

const Card = ({ text, image }: Icard) => {
  const dispatch = useDispatch();

  function handleMoreOptions() {
    if (text == StringConstants.CREATE_VISIT_PLAN) {
      dispatch(BottomModal(false));
      navigate(SCREENS.CREATE_VISIT_PLAN);
    } else if (text == StringConstants.CREATE_CUSTOMER_PROFILE) {
      dispatch(BottomModal(false));
      navigate(SCREENS.CREATE_CUSTOMER_VIEW_MODEL);
    } else if (text == StringConstants.CREATE_MEETING_DETAILS) {
      dispatch(BottomModal(false));
      navigate(SCREENS.CREATE_MEETING_DETAILS);
    } else if (text == StringConstants.VIEW_CUSTOMER_PROFILE) {
      dispatch(BottomModal(false));
      navigate(SCREENS.VIEW_CUSTOMER_PROFILE);
    }
  }

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handleMoreOptions}>
      <Image
        source={image}
        style={{ width: 36, height: 36, resizeMode: "contain" }}
      />
      <Text style={styles.cardText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Card;
