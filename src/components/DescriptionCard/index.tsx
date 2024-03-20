import commonStyles from "commonStyles/CommonStyle";
import React from "react";
import { Image, ImageURISource, StyleSheet, ViewStyle } from "react-native";
import TextWrapper from "../TextWrapper";
import PressableButton from "components/DeBouncePressable";
import { WindowWidth } from "libs";

interface IDescriptionCard {
  image: ImageURISource;
  description: string;
  onPress?: (selectedValue: string) => void;
  style?: ViewStyle;
}

const DescriptionCard = (props: IDescriptionCard) => {
  return (
    <PressableButton
      style={[styles.cardContainer, commonStyles.center, props.style]}
      onPress={() => {
        {
          props.onPress && props.onPress(props.description);
        }
      }}
    >
      <Image source={props.image} style={styles.img} />
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
    width:WindowWidth/2,
    padding: 20,
   
  },
  img: {
    width: 36,
    height: 36,
    resizeMode: "contain",
    marginBottom: 10,
  },
});
