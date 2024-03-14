import React from "react";
import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "commonStyles/RNColor.style";

const GradientBackground = ({ children }: any) => {
  return (
    <LinearGradient
      colors={[Colors.sailBlue, Colors.white]}
      style={styles.linearGradient}
      locations={[0.5, 0.9]}
      start={{ x: 0, y: -4.9 }}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
