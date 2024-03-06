import React, { useEffect, useState } from "react";
import styles from "./Style";
import { TouchableOpacity, Text, Image, View, FlatList } from "react-native";
import Glyphs from "assets/Glyphs";
interface Props {
  data: any;
  heading: string;
  setReason: Function;
}
const DropDown = ({ data, heading, setReason }: Props) => {
  const [dropType, setDropType] = useState<number>(1);
  useEffect(() => {
    if (heading == "Select Issue" || heading == "Escalated To") {
      setDropType(2);
    }
  }, []);

  const [focus, setFocus] = useState<boolean>(false);
  const [dropclicked, setdropclicked] = useState<boolean>(false);
  const [currentname, setCurrentName] = useState<string>(heading);

  function renderItem(item: any, index: number) {
    return (
      <TouchableOpacity
        onPress={() => {
          if (heading == "Select Reason" && item.segment == "A") {
            setReason(true);
          }
          setCurrentName(item.segment);
          setdropclicked(false);
          setFocus(true);
        }}
        key={index}
        style={styles.listContainer}
      >
        <Text style={styles.listText}>{item.segment}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View>
      {focus ? (
        <View style={styles.floatingContainer}>
          <Text style={styles.floatingText}>{heading}</Text>
        </View>
      ) : null}

      <TouchableOpacity
        style={dropType == 1 ? styles.DropColumn : styles.Drop}
        onPress={() => {
          setdropclicked(!dropclicked);
        }}
      >
        <Text
          style={
            dropType == 1
              ? [
                  styles.dropTextContainer,
                  focus
                    ? { color: "#110F24", marginTop: 29, marginLeft: 8 }
                    : {},
                ]
              : [
                  styles.dropTextContainer,
                  focus
                    ? { color: "#110F24", marginTop: 29, marginLeft: 21 }
                    : {},
                ]
          }
        >
          {currentname}
        </Text>
        <Image source={Glyphs.Arrow} style={styles.arrowImg} />
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
