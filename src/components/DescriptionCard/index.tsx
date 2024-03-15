import commonStyles from "commonStyles/CommonStyle";
import React from "react";
import { Image, ImageURISource,StyleSheet } from "react-native";
import TextWrapper from "../TextWrapper";
import PressableButton from "components/DeBouncePressable";

interface IDescriptionCard {
  image: ImageURISource;
  description: string;
  onPress?:()=>void
}

const DescriptionCard = (props: IDescriptionCard) => {
  return (
    <PressableButton style={[styles.cardContainer, commonStyles.center]}
    onPress={props.onPress}
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
    width: "50%",
    padding: 20,
  },
  img: {
    width: 36,
    height: 36,
    resizeMode: "contain",
    marginBottom: 10,
  },
});
