import React, { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../Style";
import Header from "components/HeaderForMainScreen/HeaderMain";
import InputTextWithoutIcon from "components/InputTextWithoutIcon/InputText";
import CustomerProfile from "./CustomerProfile";

const Profile = () => {
  const [searchStatus, setSearchStatus] = useState<boolean>(false);
  const [CurrentScreen, setCurrentScreen] = useState<boolean>(false);
  const CustomerDetails = useRef("");

  function handleSearch() {
    console.log("Handle Search function called:::");
    if (searchStatus) {
      setCurrentScreen(true);
    }
  }
  return (
    <View>
      <>
        {!CurrentScreen ? (
            <>
             <Header topheading={"Customer Information"} />
          <View style={{paddingHorizontal:20}}>
           
            <Text style={styles.lastVisit}>
              Last Visit details of the customer
            </Text>
            <View
              style={[
                styles.inputbox,
                searchStatus ? { backgroundColor: "#E6E6E6" } : {},
              ]}
            >
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
            </View>

            <TouchableOpacity
              style={[
                styles.searcchBox,
                searchStatus
                  ? {
                      backgroundColor: "#FFFFFF",
                      borderWidth: 1,
                      borderColor: "#233972",
                    }
                  : {},
              ]}
              onPress={handleSearch}
            >
              <Text
                style={[
                  styles.searchText,
                  searchStatus ? { color: "#233972" } : {},
                ]}
              >
                Search
              </Text>
            </TouchableOpacity>
          </View>
        </>) : (
          <CustomerProfile />
        )}
        
      </>
    </View>
  );
};
export default Profile;
