import React, { useRef, useState } from "react";
import Header from "components/HeaderForMainScreen/HeaderMain";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "../Style";
import InputTextWithoutIcon from "components/InputTextWithoutIcon/InputText";
import UserCard from "./UserCard";
import Glyphs from "assets/Glyphs";
import CustomerBox from "components/CustomerVisitBox/CustomerBox";

const CustomerProfile = () => {
  const [searchStatus, setSearchStatus] = useState<boolean>(false);
  const CustomerDetails = useRef("");
  return (
    <View>
      <>
        <Header topheading={"Customer Profiles"} />
        <View style={styles.searchContainer} />
        <View style={{paddingHorizontal:20}}>
        <View style={styles.floatingTextInput}>
          <InputTextWithoutIcon
            placeholder="Enter Customer Code or Name"
            ChangeText={(text: any) => {
              CustomerDetails.current = text;
              if (CustomerDetails.current.length >= 5) {
                setSearchStatus(true);
              }
            }}
            keyboardType="default"
            secureText={false}
            maxLength={20}
          />
          <TouchableOpacity>
            <Image
              source={Glyphs.Add}
              style={{
                transform: [{ rotate: "45deg" }],
              }}
            />
          </TouchableOpacity>
        </View>
        </View>

        <UserCard name="John Doe" location="Customer Code: 123678" />
        <UserCard name="Esha Sharma" location="Customer Code: 123678" />
        <UserCard name="Sanjay Jain" location="Customer Code: 123678" />
      </>
    </View>
  );
};
export default CustomerProfile;
