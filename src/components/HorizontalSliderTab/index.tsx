import { Colors } from "commonStyles/RNColor.style";
import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import TextWrapper from "../TextWrapper";
import fonts from "@fonts";
import { PressableButton } from "components";

interface ITabArray {
  heading: string;
  number?: number;
  backgroundColor?: {
    focus: string
    notfocus: string;
  };

  textColor?: {
    notfocus: string;
    focus: string;
  };
}

interface IHorizontalSlider {
  sliderData: ITabArray[];
  currentScreen: number;
  selectedTab: (index: number) => void;
  onlyTwoColor?:boolean
}

const HorizontalSlider = (props: IHorizontalSlider) => {
  const renderItem = (
    item: ITabArray,
    index: number,
    selectedTab: Function,
  ) => {
    
   const isMatched=index+1==props.currentScreen;
    return (
      <PressableButton
        style={[
          styles(item.number).clickableContainer,
          {
            backgroundColor:
              isMatched  ? item.backgroundColor?.focus
                : item.backgroundColor?.notfocus,
          },
        ]}
        onPress={() => selectedTab(index + 1)}
      >
        <>
          <TextWrapper
            style={{
              color:
                isMatched
                  ? item.textColor?.focus
                  : item.textColor?.notfocus,
            }}
          >
            {item.heading}
          </TextWrapper>
          {item.number && (
            <View
              style={[
                styles().circle,
                {
                  backgroundColor:
                    isMatched
                      ? item.backgroundColor?.notfocus
                      : item.backgroundColor?.focus,
                },
              ]}
            >
              <TextWrapper
                style={[
                  styles().text,
                  {
                    color:
                      isMatched
                        ? item.textColor?.notfocus
                        : item.textColor?.focus,
                  },
                ]}
              >
                {item.number}
              </TextWrapper>
            </View>
          )}
        </>
      </PressableButton>
    );
  };

  return (
    <View style={styles(props.currentScreen).horizontalContainer}>
      <FlatList
        data={props.sliderData}
        renderItem={({ item, index }) =>
          renderItem(item, index, props.selectedTab)
        }
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles().horizontalContainer}
      />
    </View>
  );
};

export default HorizontalSlider;

const styles = (visitNumber?: number) => {
  return StyleSheet.create({
    horizontalContainer: {
      backgroundColor: Colors.background2,
      paddingHorizontal:20,
      marginBottom:10
    },
    clickableContainer: {
      marginTop: 16,
      paddingHorizontal: 16,
      borderRadius: 33,
      marginRight: 16,
      justifyContent: visitNumber ? "space-between" : "center",
      flexDirection: "row",
      alignItems: "center",
      paddingVertical:10
    },
    text: {
      fontFamily: fonts.type.medium,
      fontSize: 14,
    },

    circle: {
      borderRadius: 20,
      padding: 5,
      marginLeft:20,
      backgroundColor: Colors.white,
    },
  });
};