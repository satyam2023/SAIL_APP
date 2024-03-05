import React from "react";
import {
  SafeAreaView,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./Style";
interface ProfileFooterProps {
  CurrentScreen: number;
  setScreen: Function;
}

const ProfileFooter: React.FC<ProfileFooterProps> = ({
  CurrentScreen,
  setScreen,
}: ProfileFooterProps) => {
  function handlePress() {
    console.log("Current Screen::", CurrentScreen);
    if (CurrentScreen == 1) {
      setScreen(2);
    } else if (CurrentScreen == 2) {
      setScreen(3);
    } else if (CurrentScreen == 3) {
      setScreen(4);
    }
  }

  function handleBack() {
    if (CurrentScreen == 1) {
    } else if (CurrentScreen == 2) {
      setScreen(1);
    } else if (CurrentScreen == 3) {
      setScreen(2);
    }
  }
  return (
    <View style={[styles.footerContainer]}>
      <TouchableOpacity style={styles.editBtn}>
        <Text style={styles.editTxt} onPress={handleBack}>
          {CurrentScreen == 1 ? `Edit` : `Back`}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.editBtn, { marginLeft: 13, backgroundColor: "#233972" }]}
        onPress={handlePress}
      >
        <Text style={[styles.proceedTxt]}>
          {CurrentScreen == 3 ? `Submit` : "Proceed"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileFooter;
