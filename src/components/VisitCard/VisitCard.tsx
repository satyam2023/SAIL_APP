import React, { useEffect, useState } from "react";
import { Image, StyleSheet,TouchableOpacity, View } from "react-native";
import { SCREENS } from "@shared-constants";
import { navigate } from "@navigation";
import { useDispatch } from "react-redux";
import { VisitType } from "redux/actions/UIAction";
import commonStyles from "commonStyles/CommonStyle";
import TextWrapper from "components/TextWrapper";
import fonts from "@fonts";

interface IvisitCard {
  count: number;
  title: string;
  image: any;
  backgroundcolor: string;
  textColor: string;
}

const VisitCard = ({
  count,
  title,
  image,
  backgroundcolor,
  textColor,
}: IvisitCard) => {
  const dispatch=useDispatch();
  const [visitNumber, setVisitNumber] = useState<String>("");

  function handleVisitClick(){
     if(title=="Upcoming Visit"){
       navigate(SCREENS.VISIT)
     }
    else if(title=="Planned Visit"){
    dispatch(VisitType(2));
      navigate(SCREENS.VISIT)

    }
    else if(title=="Executed Visit"){
      dispatch(VisitType(3));
      navigate(SCREENS.VISIT)

    }

  }
  useEffect(() => {
    if (count >= 1000) {
      count = count / 1000;
      let cnt = count.toFixed(1).toString();
      setVisitNumber(cnt + "K");
    } else {
      let cnt = count.toString();
      setVisitNumber(cnt);
    }
  }, []);


  return (
    <TouchableOpacity
      style={[styles.visitContainer, { backgroundColor: backgroundcolor }]} 
      onPress={handleVisitClick}
    >
      <View style={{ flexDirection: "row" }}>
        <Image source={image} style={styles.visitImg} />
        <TextWrapper style={[styles.exedcutedNumber, { color: textColor }]}>
          {visitNumber}
        </TextWrapper>
      </View>
      <TextWrapper style={[commonStyles.font14MediumBlack,{marginTop:8}]}>{title}</TextWrapper>
    </TouchableOpacity>
  );
};

export default VisitCard;

const styles = StyleSheet.create({
  visitContainer: {
      width: '30%',
      height: 108,
      borderRadius: 4,
      paddingHorizontal:16
    },
    visitImg: {
      marginTop: 16,
      marginRight:'10%'
    },
    exedcutedNumber: {
      fontFamily:fonts.type.bold,
      lineHeight: 36,
      fontSize: 24,
      marginTop: 16,
    }

});
