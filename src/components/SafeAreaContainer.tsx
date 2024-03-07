import React from "react";
import { SafeAreaView, StyleProp, StyleSheet, ViewStyle } from "react-native";

interface Props {
  children?: React.ReactNode;
  contentContainerStyle?: ViewStyle;
  style?: StyleProp<ViewStyle> | undefined;
}

const SafeAreaContainer = (props: Props) => {
  return (
    <SafeAreaView
      style={[styles.safeAreaContainer,props.style]}
    >
      {props.children}
    </SafeAreaView>
  );
};

export default SafeAreaContainer;

const styles=StyleSheet.create({
   safeAreaContainer:{
    paddingHorizontal:20,
    flex:1
   }
})
