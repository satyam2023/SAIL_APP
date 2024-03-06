import React from "react";
import styles from "../Style";
import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface FooterProps {
  setScreen: Function;
}

const Footer = ({ setScreen }: FooterProps) => {
  return (
    <View style={styles.FooterContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text
            style={{
              color: "#233972",
              alignSelf: "center",
              height: 20,
              fontWeight: "500",
              fontSize: 16,
              lineHeight: 20,
             
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.probtn}
          onPress={() => {
            setScreen("Submitted");
          }}
        >
          <Text
            style={{
              height: 20,
              lineHeight: 20,
              color: "#110F2480",
              fontWeight: "500",
              fontSize: 16,
              alignSelf: "center",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
    
    </View>
  );
};
export default Footer;
