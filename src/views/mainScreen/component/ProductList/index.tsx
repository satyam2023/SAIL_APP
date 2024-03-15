import React from "react";
import { StyleSheet, View } from "react-native";
import { navigate } from "@navigation";
import { SCREENS } from "@shared-constants";
import { EnquiryType } from "redux/actions/UIAction";
import { useDispatch } from "react-redux";
import DescriptionCard from "components/DescriptionCard";
import StringConstants from "shared/localization";
import TextWrapper from "components/TextWrapper";
import commonStyles from "commonStyles/CommonStyle";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface ProductProps {
  category: String;
  imagefirst: any;
  imagesecond: any;
  text: any;
  imagefirstinfo: any;
  imagesecondinfo: any;
}

const ProductList = ({
  category,
  imagefirst,
  imagesecond,
  text,
  imagefirstinfo,
  imagesecondinfo,
}: ProductProps) => {
  const dispatch = useDispatch();

  function controlnavigation() {
    if (text == StringConstants.SEE_ALL) {
      navigate(SCREENS.PRODUCTCATALOUGE);
    } else if (text == StringConstants.VIEW_ALL) {
      dispatch(EnquiryType(StringConstants.USER_ENQUIRY));
      navigate(SCREENS.ENQUIRY);
    }
  }

  return (
    <View style={styles.box}>
      <View style={styles.containerDesign}>
        <TextWrapper
          onPress={controlnavigation}
          style={commonStyles.font16MediumBlackpearl}
        >
          {category}
        </TextWrapper>
        <TextWrapper
          onPress={controlnavigation}
          style={commonStyles.font16MediumBlackpearl}
        >
          {text}
        </TextWrapper>
      </View>

      <View style={styles.containerDesign}>
        <DescriptionCard
          image={imagefirst}
          description={imagefirstinfo}
          onPress={() => {
            if (imagefirstinfo == StringConstants.USER_ENQUIRY) {
              dispatch(EnquiryType(StringConstants.USER_ENQUIRY));
              navigate(SCREENS.ENQUIRY);
            }
          }}
        />
        <DescriptionCard
          image={imagesecond}
          description={imagesecondinfo}
          onPress={() => {
            if (imagesecondinfo == StringConstants.ISSUE_ENQUIRY) {
              dispatch(EnquiryType(StringConstants.ISSUE_ENQUIRY));
              navigate(SCREENS.ENQUIRY);
            }
          }}
        />
      </View>
    </View>
  );
};

export default ProductList;

const styles=StyleSheet.create({
  box:{
      width:"100%",
      height:152,
      marginTop:18,
      backgroundColor:Colors.white,
      paddingTop:16
  },
  img:{
      alignSelf:'center',
      height:36,
      width:36,
      marginTop:16,
  },
  lineBtwProduct:{
      width:30,
      backgroundColor:'#F9F9FC',
      transform:[{rotate:'90deg'}],
      height:2,
  },
  containerDesign:{
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 20,
    }

});
