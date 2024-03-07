import Glyphs from "assets/Glyphs";
import { Colors } from "commonStyles/RNColor.style";
import { debounceHOC } from "hocs/debounceHOC";
import { useState } from "react";
import { Image } from "react-native";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native";

interface ICustomSwitch {
  isRectangular?: boolean;
  onPress: () => void;
  status: boolean;
}

const CustomSwitch = (props: ICustomSwitch) => {
  const [status, setStatus] = useState<boolean>(false);
  const Press = debounceHOC(TouchableOpacity);
  const handlePress = () => {
    console.log("Switch Clicked");
    setStatus(!status);
    props.onPress;
  };
  return (
    <View
      style={[
        styles.switchContainer,
        { borderRadius: props.isRectangular ? 3 : 10 },
      ]}
    >
      <Press onPress={handlePress}>
        {!props.isRectangular ? (
          <View
            style={
              !status
                ? styles.circular
                : { backgroundColor: Colors.transparent }
            }
          />
        ) : (
          <Image style={styles.img} source={!status ? Glyphs.Tick : ""} />
        )}
      </Press>
    </View>
  );
};

export default CustomSwitch;
const styles = StyleSheet.create({
  switchContainer: {
    height: 17,
    width: 17,
    borderWidth: 1,
    borderColor: Colors.darkGrey,
    justifyContent: "center",
    alignItems: "center",
  },
  circular: {
    height: 9,
    width: 9,
    borderRadius: 5,
    backgroundColor: Colors.sailBlue,
  },
  img: {
    height: 10,
    width: 10,
    resizeMode: "contain",
  },
});
