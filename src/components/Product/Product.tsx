import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native";
import styles from "./Style";
import { Image } from "react-native";
import { navigate } from "@navigation";
import { SCREENS } from "@shared-constants";
import { EnquiryType } from "redux/actions/UIAction";
import { useDispatch } from "react-redux";
// import { UseDispatch, useDispatch } from "react-redux";
// import { setEnquiryScreen } from "../../Redux/Slice2";
interface ProductProps {
  category: String;
  imagefirst: any;
  imagesecond: any;
  text: any;
  imagefirstinfo: any;
  imagesecondinfo: any;
}

const Product = ({
  category,
  imagefirst,
  imagesecond,
  text,
  imagefirstinfo,
  imagesecondinfo,
}: ProductProps) => {
  const dispatch = useDispatch();

  function controlnavigation() {
    if (text == "See All") {
      navigate(SCREENS.PRODUCTCATALOUGE);
    } else if (text == "View All") {
      dispatch(EnquiryType("User Enquiry"));
      navigate(SCREENS.ENQUIRY)
    }
  }

  return (
    <View style={styles.box}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            marginTop: 16,
            fontWeight: "600",
            fontSize: 14,
            lineHeight: 14,
            color: "#110F24",
          }}
        >
          {category}
        </Text>
        <TouchableOpacity style={{}} onPress={controlnavigation}>
          <Text
            style={{
              marginTop: 16,
              fontWeight: "600",
              fontSize: 14,
              lineHeight: 14,
              color: "#110F24",
            }}
          >
            {text}
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity
          style={{
            width: "50%",
            height: 90,
            borderRadius: 4,
            backgroundColor: "#FFF",
          }}
          onPress={()=>{if(imagefirstinfo=="User Enquiry"){dispatch(EnquiryType("User Enquiry")); navigate(SCREENS.ENQUIRY)}}}
        >
          <Image source={imagefirst} style={styles.img} />
          <Text
            style={{
              width: "auto",
              height: 14,
              marginTop: 8,
              fontSize: 14,
              fontWeight: "500",
              lineHeight: 14,
              color: "#110F24",
              alignSelf: "center",
            }}
          >
            {imagefirstinfo}
          </Text>
        </TouchableOpacity>
        {/* <View style={styles.lineBtwProduct} />  */}
        <TouchableOpacity onPress={()=>{if(imagesecondinfo=="Issue Enquiry"){dispatch(EnquiryType("Issue Enquiry")); navigate(SCREENS.ENQUIRY)}}}>
          <Image source={imagesecond} style={styles.img} />
          <Text
            style={{
              width: "auto",
              height: 14,
              marginTop: 8,
              fontSize: 14,
              fontWeight: "500",
              lineHeight: 14,
              color: "#110F24",
              alignSelf: "center",
            }}
          >
            {imagesecondinfo}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;
