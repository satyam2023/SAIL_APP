import Glyphs from "assets/Glyphs";
import { Colors } from "commonStyles/RNColor.style";
import { PressableButton } from "components";
import { useState } from "react";
import { Image,ViewStyle } from "react-native";
import { StyleSheet, View } from "react-native";

interface ICustomSwitch {
  isRectangular?: boolean;
  onPress: (arg:boolean) => void;
  status: boolean;
  style?:ViewStyle
  
}

const CustomCheckBox = (props: ICustomSwitch) => {
  const [status, setStatus] = useState<boolean>(false);
  const handlePress = () => {
    console.log("Switch Clicked",status);
    setStatus(!status);
    props.onPress(status);
  };

  return (
    <PressableButton
    onPress={handlePress}
      style={[
        styles.switchContainer,
        props.style,
        { borderRadius: props.isRectangular ? 3 : 10 },
      ]}
      
      hitSlop={100}
    >
      <PressableButton>
        {!props.isRectangular ? 
          <View
            style={
              !status
                ? styles.circular
                : { backgroundColor: Colors.transparent }
            }
          />
         : 
          <Image style={styles.img} source={!status ? Glyphs.Tick : Glyphs.UncheckBox} />
        }
      </PressableButton>
    </PressableButton>
  );
};

export default CustomCheckBox;
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