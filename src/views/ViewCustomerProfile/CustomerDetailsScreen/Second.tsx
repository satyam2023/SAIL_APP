import React from "react";
import { Image, SafeAreaView, Text, TouchableOpacity } from "react-native";
import styles from "./Style";
import { useDispatch } from "react-redux";
import { setCompetitorButtonStatus } from "redux/actions/UIAction";
import Glyphs from "assets/Glyphs";

interface SecondProps {
  RepresentativeScreen: Function;
}
const Second: React.FC<SecondProps> = ({
  RepresentativeScreen,
}: SecondProps) => {
  const dispatch = useDispatch();

  function handleAddRepresentative() {
    RepresentativeScreen(true);
    dispatch(setCompetitorButtonStatus(true));
  }
  return (
    <SafeAreaView style={{ flex:1,paddingHorizontal:20}}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.Txt}>Customer Representative</Text>
        <TouchableOpacity>
          <Image
            source={Glyphs.Mobile}
            style={{ height: 16, width: 16, marginLeft: 8,}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={Glyphs.Edit}
            style={{ height: 16, width: 16, marginLeft: 52, }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={Glyphs.Arrow}
            style={{
              height: 24,
              width: 24,
              transform: [{ rotate: "90deg" }],
              marginLeft: 8,
              // marginTop: 16,
            }}
          />
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: "#E9EBF1", marginTop: 12 }]}
        onPress={handleAddRepresentative}
      >
        <Text style={[styles.Txt]}>
          {" "}
          +    Add Customer Representative
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Second;
