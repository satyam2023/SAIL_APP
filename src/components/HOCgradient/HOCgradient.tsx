
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';


const withGradientBackground = (WrappedComponent:any) => {
  return (props:any) => {
    const GradientBackground = (props:any) => {
      return (
        <SafeAreaView style={[styles.gradient]}>
            <View style={{backgroundColor:'transparent',height:20,width:'100%'}}/>
          <WrappedComponent {...props} />
        </SafeAreaView>
      );
    };
    return <GradientBackground />;
  };
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    
  },
});

export default withGradientBackground;
