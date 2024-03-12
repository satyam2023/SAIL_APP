import React from "react";
import Header from "components/HeaderForMainScreen/HeaderMain";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./Style";
import InputTextWithoutIcon from "components/InputTextWithoutIcon/InputText";

interface ProfileHeaderProps {
  CurrentScreen: number;
}
const ProfileHeader = ({
  CurrentScreen,
}: ProfileHeaderProps) => {
  return (
    <View
      style={[
        styles.headerContainer,
        CurrentScreen != 1 ? { height: 121 } : {},
      ]}
    >
      <Header topheading="View Customer Profile" />
      <View style={styles.header}>
        <View style={styles.insideHeader}>
          <View
            style={[
              styles.firstCircle,
              CurrentScreen != 1 ? { backgroundColor: "#DADADA" } : {},
            ]}
          >
            <Text style={styles.numberstyle}>1</Text>
          </View>

          <View style={styles.emptyLine} />
          <View
            style={[
              styles.firstCircle,
              CurrentScreen != 2 ? { backgroundColor: "#DADADA" } : {},
            ]}
          >
            <Text style={[styles.numberstyle, { width: 10 }]}>2</Text>
          </View>
          <View style={styles.emptyLine} />
          <View
            style={[
              styles.firstCircle,
              CurrentScreen != 3 ? { backgroundColor: "#DADADA" } : {},
            ]}
          >
            <Text style={[styles.numberstyle, { width: 10 }]}>3</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={[styles.circleBottomText, { marginLeft: 20, width: 88 }]}
          >
            Customer Details
          </Text>
          <Text
            style={[
              styles.circleBottomText,
              { marginLeft: 30, width: 112, height: 15 },
            ]}
          >
            Representative Details
          </Text>
          <Text
            style={[styles.circleBottomText, { marginLeft: 40, width: 94 }]}
          >
            Competeitor
          </Text>
        </View>

        {CurrentScreen == 1 && (
          <View style={{paddingHorizontal:20}}>
          <View
            style={[styles.inputbox, { marginTop: 8, flexDirection: "row" }]}
          >
            <InputTextWithoutIcon
              placeholder="Enter SAP Customer Code"
              ChangeText={(text: any) => {}}
              keyboardType="numeric"
              secureText={false}
              maxLength={10}
            />
            <TouchableOpacity style={styles.updateHeaderBtn}>
              <Text style={styles.updateTxt}>Update</Text>
            </TouchableOpacity>
          </View>
          </View>
        )}

        {CurrentScreen == 1 && (
          <Text
            style={{
              color: "#FF2828",
              fontWeight: "400",
              fontSize: 14,
              lineHeight: 17.5,
              marginLeft: 16,
              marginBottom: 5,
            }}
          >
            *Please enter GST and PAN number
          </Text>
        )}
      </View>
    </View>
  );
};
export default ProfileHeader;
