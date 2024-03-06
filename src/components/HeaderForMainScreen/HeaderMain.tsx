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
import SafeAreaContainer from "components/SafeAreaViewContainer";
interface HeaderProps {
  topheading: string;
}
const Header= ({
  topheading,
}: HeaderProps) => {
  return (
    <SafeAreaContainer style={styles.headerContainer}>
      <TouchableOpacity onPress={()=>{goBack()}}>
        <Image source={Glyphs.Arrow} style={styles.img} />
      </TouchableOpacity>
      <Text style={styles.headingContent}>{topheading}</Text>
    </SafeAreaContainer>
  );
};

export default Header;
