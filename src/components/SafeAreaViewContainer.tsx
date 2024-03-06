import React from "react";
import { SafeAreaView, StyleProp, ViewStyle } from "react-native";

interface Props {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
}

const SafeAreaContainer = (props: Props) => {
  return <SafeAreaView style={props.style}>
    {props.children}
    </SafeAreaView>;
};

export default SafeAreaContainer;
