import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./Style/Style";
interface IvisitButton {
  backgrouncolor: string,
  textColor: string,
  tag:string,
  visitnumber:number,
  handleVisitType:Function

}

const VisitButton = ({ backgrouncolor, textColor,tag,visitnumber,handleVisitType}: IvisitButton) => {
    function handleVisitClick(){
        if(tag=="Upcoming"){
            handleVisitType(1);
        }
        else if(tag=="Planned"){
            handleVisitType(2)
        }
        else if(tag=="Executed"){
         handleVisitType(3);
        }
    }
  return (
    
    <TouchableOpacity
      style={[styles.container, { backgroundColor: backgrouncolor }]}
      onPress={handleVisitClick}
    >
      <Text style={{ color: textColor }}>{tag}</Text>

      <View style={[styles.number, { backgroundColor: textColor }]}>
        <Text style={{ color: backgrouncolor, fontSize: 12,fontWeight: 500 }}>
          {visitnumber}
        </Text>
      </View>
    </TouchableOpacity>

  );
};

export default VisitButton;
