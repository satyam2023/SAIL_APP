import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./Style";
import { useDispatch } from "react-redux";
import { setCompetitorButtonStatus } from "redux/actions/UIAction";
import Glyphs from "assets/Glyphs";

interface ThirdProps {
  CompetitorScreen: Function;
}
const Third: React.FC<ThirdProps> = ({ CompetitorScreen }: ThirdProps) => {
  // const [addCompetitorStatus,setAddCompetitorStatus]=useState<boolean>(false);
  // console.log("Competitor Status::",addCompetitorStatus);
  const dispatch = useDispatch();
  function handleAddCompetitor() {
    dispatch(setCompetitorButtonStatus(true));
    CompetitorScreen(true);
    //  setAddCompetitorStatus(true);
  }
  return (
    <>
      <View style={{ flex:1,paddingHorizontal:20 }}>
        <TouchableOpacity style={styles.btn}>
          <Text style={[styles.Txt]}>Competitor 1</Text>
          <TouchableOpacity>
            <Image
              source={Glyphs.Edit}
              style={{ height: 16, width: 16, marginLeft: 176}}
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
              }}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "#E9EBF1", marginTop: 12 }]}
          onPress={() => {
            handleAddCompetitor();
          }}
        >
          <Text style={[styles.Txt]}> +   Add Competitor</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Third;
