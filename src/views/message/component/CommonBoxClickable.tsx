import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../Style/Style";
import Glyphs from "assets/Glyphs";
interface CommomBoxProps {
  setOpenStatus: Function;
}
const CommonBoxClickable: React.FC<CommomBoxProps> = ({
  setOpenStatus,
}: CommomBoxProps) => {
  return (
    <View style={{paddingHorizontal:20}}>
    <View style={styles.box}>
      <View>
        <Text style={styles.boxText}>Customer Code</Text>
        <Text style={styles.boxTextinner}>Customer Name</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setOpenStatus(true);
        }}
      >
        <Image source={Glyphs.Arrow} style={styles.img} />
      </TouchableOpacity>
    </View>
    </View>
  );
};
export default CommonBoxClickable;
