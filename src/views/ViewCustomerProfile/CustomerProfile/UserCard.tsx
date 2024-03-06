import Glyphs from "assets/Glyphs";
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { setCustomerProfileButton } from "redux/actions/UIAction";
import styles from "../Style";
interface UserCardInterface {
  name: string;
  location: string;
}
const UserCard = ({
  name,
  location,
}: UserCardInterface) => {
  const dispatch = useDispatch();
  function handlepress() {
    dispatch(setCustomerProfileButton(true));
  }

  return (
    <View style={{paddingHorizontal:20}}>
    <View
      style={styles.userCardContainer}
    >
      <View style={{flexDirection:'row'}}>
      <Image  source={Glyphs.Profile2User}  />
      <View  style={{marginLeft:16}}>
        <Text
          style={styles.userCardText}
        >
          {name}
        </Text>
        <Text
          style={[styles.userCardText,{marginTop:5}]}
        >
          {location}
        </Text>
      </View>
      </View>
      <TouchableOpacity onPress={handlepress}>
        <Image
          source={Glyphs.Arrow}
          style={{ width: 8, height: 13 }}
        />
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default UserCard;
