import React from "react";
import {
  Image,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./Style";
import { useDispatch } from "react-redux";
import { setCompetitorButtonStatus } from "redux/actions/UIAction";
import Glyphs from "assets/Glyphs";
import TextWrapper from "components/TextWrapper";
import StringConstants from "shared/localization";
import { Colors } from "commonStyles/RNColor.style";
import CustomButton from "components/CustomButton";
import fonts from "@fonts";

interface ThirdProps {
  CompetitorScreen: Function;
}
const Third = ({ CompetitorScreen }: ThirdProps) => {
  const dispatch = useDispatch();
  function handleAddCompetitor() {
    dispatch(setCompetitorButtonStatus(true));
    CompetitorScreen(true);
  }
  return (
    <>
      <View style={{ flex:1,paddingHorizontal:20 }}>
      <Pressable style={styles.btn}>
          <TextWrapper style={styles.Txt}>
            {StringConstants.COMPETITOR_1}
          </TextWrapper>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Image source={Glyphs.Edit} style={styles.img} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 8 }}>
            <Image
              source={Glyphs.Arrow}
              style={[
                styles.img,
                {
                  transform: [{ rotate: "90deg" }],
                },
              ]}
            />
          </TouchableOpacity>
        </View>
      </Pressable>
      <CustomButton
        text={StringConstants.PLUS__CUSTOMER_REP}
        buttonStyle={{
          backgroundColor: Colors.dashed,
          justifyContent: "flex-start",
        }}
        textStyle={{ fontFamily: fonts.type.regular }}
        onPress={handleAddCompetitor}
      />
      </View>
    </>
  );
};

export default Third;
