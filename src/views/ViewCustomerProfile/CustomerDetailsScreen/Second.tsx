import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./Style";
import { useDispatch } from "react-redux";
import { setCompetitorButtonStatus } from "redux/actions/UIAction";
import Glyphs from "assets/Glyphs";
import TextWrapper from "components/TextWrapper";
import StringConstants from "shared/localization";
import CustomButton from "components/CustomButton";
import { Colors } from "commonStyles/RNColor.style";
import fonts from "@fonts";

interface SecondProps {
  RepresentativeScreen: Function;
}
const Second = ({ RepresentativeScreen }: SecondProps) => {
  const dispatch = useDispatch();

  function handleAddRepresentative() {
    RepresentativeScreen(true);
    dispatch(setCompetitorButtonStatus(true));
  }
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
      <Pressable style={styles.btn}>
        <View style={{ flexDirection: "row" }}>
          <TextWrapper style={styles.Txt}>
            {StringConstants.CUSTOMER_REPRESENTATIVE}
          </TextWrapper>
          <TouchableOpacity style={{ marginLeft: 8 }}>
            <Image source={Glyphs.Mobile} style={styles.img} />
          </TouchableOpacity>
        </View>
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
        onPress={handleAddRepresentative}
      />
    </SafeAreaView>
  );
};

export default Second;
