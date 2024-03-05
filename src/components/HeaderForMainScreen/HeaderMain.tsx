import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import styles from "./Style/Style";
import Glyphs from "assets/Glyphs";
import { goBack } from "@navigation";
interface HeaderProps {
  topheading: string;
}
const Header= ({
  topheading,
}: HeaderProps) => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <TouchableOpacity onPress={()=>{goBack()}}>
        <Image source={Glyphs.Arrow} style={styles.img} />
      </TouchableOpacity>
      <Text style={styles.headingContent}>{topheading}</Text>
    </SafeAreaView>
  );
};

export default Header;
