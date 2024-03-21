import commonStyles from "commonStyles/CommonStyle";
import React from "react";
import {
  Image,
  ImageURISource,
  StyleSheet,
  ViewStyle,
} from "react-native";
import TextWrapper from "../TextWrapper";
import PressableButton from "components/DeBouncePressable";
import { WindowHeight, WindowWidth } from "libs";

interface IDescriptionCard {
  image?: ImageURISource;
  description: string;
  onPress?: (selectedValue: string) => void;
  style?: ViewStyle;
  imageUri?: string;
}

const DescriptionCard = (props: IDescriptionCard) => {
  console.log("ImageURl:::", typeof props.imageUri);
  return (
    <PressableButton
      style={[styles.cardContainer, commonStyles.center, props.style]}
      onPress={() => {
        {
          props.onPress && props.onPress(props.description);
        }
      }}
    >
      {props?.image && <Image source={props?.image} style={styles.img} />}
      {props?.imageUri && (
        <Image source={{ uri: props.imageUri }} style={styles.img} />
      )}
      <TextWrapper
        style={[commonStyles.font14MediumBlackpearl, { textAlign: "center" }]}
      >
        {props.description}
      </TextWrapper>
    </PressableButton>
  );
};

export default DescriptionCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: WindowWidth / 2,
    padding: 20,
    height: WindowHeight / 5.5,
  },
  img: {
    width: 36,
    height: 36,
    resizeMode: "contain",
    marginBottom: 10,
  },
});
