import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./Style/Style";
interface IenquiryButton {
  backgrouncolor: string,
  textColor: string,
  tag:string,
  handleEnquiryType:Function

}

const EnquiryButton = ({ backgrouncolor, textColor,tag,handleEnquiryType}: IenquiryButton) => {
    function handleEnquiryClick(){
        if(tag=="User Enquiry"){
            handleEnquiryType("User Enquiry")
            
        }
        else if(tag=="Issue Enquiry"){
            handleEnquiryType("Issue Enquiry")
           
        }
        else if(tag=="Nearby Customer"){
            handleEnquiryType("Nearby Customer")
        }
    }
  return (
    
    <TouchableOpacity
      style={[styles.container, { backgroundColor: backgrouncolor }]}
      onPress={handleEnquiryClick}
    >
      <Text style={{ color: textColor,fontSize:14,fontWeight:500 }}>{tag}</Text>
    </TouchableOpacity>

  );
};

export default EnquiryButton;
