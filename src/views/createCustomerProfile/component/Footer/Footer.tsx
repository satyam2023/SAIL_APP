import React, { useState } from "react";
import Styles from "./Style";
import { Text, TouchableOpacity, View } from "react-native";
interface FooterProps {
  CurrentScreen: number;
  setScreen: Function;
  FooterStatus: any;
  FooterExecuted: any;
}
const Footer = ({
  CurrentScreen,
  setScreen,
  FooterStatus,
  FooterExecuted,
}: FooterProps) => {
  const [saveBtnStatus, setSaveBtnStatus] = useState<boolean>(false);
  function handleClick() {
    if (CurrentScreen == 1) {
      console.log("First Screen Button Called:");
      setScreen(2);
    } else if (CurrentScreen == 2 && saveBtnStatus) {
      setScreen(3);
    }

    if (FooterStatus == "Representative") {
      FooterExecuted();
      setSaveBtnStatus(true);
    }
  }

  return (
    <View style={Styles.FooterContainer}>
      <View style={Styles.BottomtabStatusbox}>
        <View
          style={[
            Styles.BottomtabStatusline,
            CurrentScreen == 2 ? { width: "67%" } : {},
            CurrentScreen == 3 ? { width: "100%" } : {},
          ]}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        {FooterStatus != "Representative" ? (
          <TouchableOpacity style={Styles.btn}>
            <Text
              style={{
                color: "#233972",
                alignSelf: "center",
                width: 58,
                height: 20,
                fontWeight: "500",
                fontSize: 16,
                lineHeight: 20,
                marginTop: 17,
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          style={[
            FooterStatus == "Representative" ? Styles.probtno : Styles.probtn,
            saveBtnStatus ? { backgroundColor: "#233972" } : {},
          ]}
          onPress={handleClick}
        >
          <Text
            style={[
              Styles.ProceedBtn,
              FooterStatus == "Representative" ? { width: 243 } : {},
              saveBtnStatus ? { color: "#FFFFFF" } : {},
            ]}
          >
            {FooterStatus != "Representative"
              ? "Save & Proceed"
              : "Add Customer Representative"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Footer;
