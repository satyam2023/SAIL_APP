import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./Style/Style";
import { SCREENS } from "@shared-constants";
import { navigate } from "@navigation";
import { useDispatch } from "react-redux";
import { VisitType } from "redux/actions/UIAction";

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
     if(title=="Upcoming Visits"){
        console.log('Button Clicked::')
       navigate(SCREENS.VISIT)
     }
    else if(title=="Planned Visits"){
    dispatch(VisitType(2));
      navigate(SCREENS.VISIT)

    }
    else if(title=="Executed Visits"){
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
        <Text style={[styles.exedcutedNumber, { color: textColor }]}>
          {visitNumber}
        </Text>
      </View>
      <Text style={styles.upcomingVisit}>{title}</Text>
    </TouchableOpacity>
  );
};

export default VisitCard;
