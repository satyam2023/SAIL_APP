import { Colors } from "commonStyles/RNColor.style";
import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { debounceHOC } from "hocs/debounceHOC";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import TextWrapper from "./TextWrapper";
import fonts from "@fonts";

interface ITabArray {
  heading: string;
  number?: number;
  backgroundColor: {
    focus: string
    notfocus: string;
  };

  textColor: {
    notfocus: string;
    focus: string;
  };
}

interface IHorizontalSlider {
  sliderData: ITabArray[];
  currentScreen: number;
  selectedTab: (index: number) => void;
}

const HorizontalSlider = (props: IHorizontalSlider) => {
  const renderItem = (
    item: ITabArray,
    index: number,
    selectedTab: Function,
  ) => {
    const Press = debounceHOC(TouchableWithoutFeedback);

   const isMatched=index+1==props.currentScreen;
    return (
      <Press
        style={[
          styles(item.number).clickableContainer,
          {
            backgroundColor:
              isMatched
                ? item.backgroundColor.focus
                : item.backgroundColor.notfocus,
          },
        ]}
        onPress={() => selectedTab(index + 1)}
      >
        <>
          <TextWrapper
            style={{
              color:
                isMatched
                  ? item.textColor.focus
                  : item.textColor.notfocus,
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
                      ? item.backgroundColor.notfocus
                      : item.backgroundColor.focus,
                },
              ]}
            >
              <TextWrapper
                style={[
                  styles().text,
                  {
                    color:
                      isMatched
                        ? item.textColor.notfocus
                        : item.textColor.focus,
                  },
                ]}
              >
                {item.number}
              </TextWrapper>
            </View>
          )}
        </>
      </Press>
    );
  };

  return (
    <SafeAreaView style={styles(props.currentScreen).horizontalContainer}>
      <FlatList
        data={props.sliderData}
        renderItem={({ item, index }) =>
          renderItem(item, index, props.selectedTab)
        }
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles().horizontalContainer}
      />
    </SafeAreaView>
  );
};

export default HorizontalSlider;

const styles = (visitNumber?: number) => {
  return StyleSheet.create({
    horizontalContainer: {
      height: 80,
      backgroundColor: Colors.background2,
      paddingLeft: 20,
      paddingRight:20
    },
    clickableContainer: {
      marginTop: 16,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 33,
      marginRight: 16,
      justifyContent: visitNumber ? "space-between" : "center",
      flexDirection: "row",
      alignItems: "center",
      width: 150,
    },
    text: {
      fontFamily: fonts.type.medium,
      fontSize: 14,
    },

    circle: {
      borderRadius: 20,
      padding: 5,
      backgroundColor: Colors.white,
    },
  });
};
