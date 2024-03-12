import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./Style/Style";
import StringConstants from "shared/localization";
import TextWrapper from "components/TextWrapper";
import fonts from "@fonts";
interface IvisitButton {
  backgrouncolor: string;
  textColor: string;
  tag: string;
  visitnumber: number;
  handleVisitType: Function;
}

const VisitButton = ({
  backgrouncolor,
  textColor,
  tag,
  visitnumber,
  handleVisitType,
}: IvisitButton) => {
  function handleVisitClick() {
    if (tag == StringConstants.UPCOMING) {
      handleVisitType(1);
    } else if (tag == StringConstants.PLANNED) {
      handleVisitType(2);
    } else if (tag == StringConstants.EXECUTED) {
      handleVisitType(3);
    }
  }
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: backgrouncolor }]}
      onPress={handleVisitClick}
    >
      <TextWrapper color={textColor} fontFamily={fonts.type.regular}>
        {tag}
      </TextWrapper>
      <View style={[styles.number, { backgroundColor: textColor }]}>
        <TextWrapper color={backgrouncolor} fontFamily={fonts.type.medium}>
          {visitnumber}
        </TextWrapper>
      </View>
    </TouchableOpacity>
  );
};

export default VisitButton;
