import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, Image, View, FlatList } from "react-native";
import styles from "./Style/Style";
import Glyphs from "assets/Glyphs";
interface Props {
  data: any;
  heading: string;
  imageurl: any;
}
const DropDown: React.FC<Props> = ({ data, heading, imageurl }: Props) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [dropclicked, setdropclicked] = useState<boolean>(false);
  const [currentname, setCurrentName] = useState<string>(heading);

  function renderItem(item: any, index: number) {
    return (
      <TouchableOpacity
        onPress={() => {
          setCurrentName(item.value);
          setdropclicked(false);
          setFocus(true);
        }}
        key={index}
        style={{
          marginHorizontal: 21,
          backgroundColor: "#FFFFFF",
          height: 56,
          borderBottomWidth: 1,
          borderColor: "#E6E6E6",
          marginBottom:16
        }}
      >
        <Text
          style={{
            textAlign: "left",
            color: "black",
            marginLeft: 24,
            marginTop: 14,
            height: 20,
          }}
        >
          {item.value}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.dropContainer}>
      {/* {focus ? (
        <View style={{ position: "absolute", top: 25, left: 44, zIndex: 2 }}>
          <Text style={{ fontWeight: "400", fontSize: 12 }}>{heading}</Text>
        </View>
      ) : null} */}

      <TouchableOpacity
        style={styles.Drop}
        onPress={() => {
          setdropclicked(!dropclicked);
        }}
      >
        <Image source={imageurl} style={styles.img} />
        <Text style={styles.txt}>{currentname}</Text>
        <Image source={Glyphs.Arrow} style={styles.dropArrow}  tintColor={'#7B7C7D'} />
      </TouchableOpacity>
      {dropclicked ? (
        <View style={{ marginTop: 5 }}>{data.map(renderItem)}</View>
      ) : (
        <></>
      )}
    </View>
  );
};
export default DropDown;
