import { Colors } from "commonStyles/RNColor.style";
import { DimensionValue, StyleSheet, View, ViewStyle } from "react-native";
import CustomButton from "./CustomButton";
import fonts from "@fonts";

interface ICustomFooter {
  leftButtonText: string;
  rightButtonText?: string;
  singleButtonOnFooter?: boolean;
  leftButtonPress: () => void;
  rightButtonPress?: () => void;
  isMovable?: boolean;
  isTracker?: DimensionValue;
  style?:ViewStyle
}

const CustomFooter = (props: ICustomFooter) => {
  return (
    <View style={[styles.customFooterContainer,props?.style]}>
      {props.isTracker && (
        <View style={styles.trackerContainer}>
          <View
            style={{ width:props.isTracker, backgroundColor: Colors.orange ,height:5}}
          />
        </View>
      )}

      <View
        style={styles.footer}
      >
        <CustomButton
          text={props.leftButtonText}
          buttonStyle={[
            styles.firstButtonStyle,
            props.singleButtonOnFooter
              ? styles.singleButtononFooter
              : { width: "45%" },
          ]}
          textStyle={[
            styles.buttonText,
            { color: props.singleButtonOnFooter ? Colors.darkGrey : "" },
          ]}
          onPress={props.leftButtonPress}
        />
        <>
          {!props.singleButtonOnFooter && (
            <CustomButton
              text={props.rightButtonText}
              buttonStyle={[
                {
                  backgroundColor: props.isMovable ? Colors.sailBlue : Colors.background2,
                },
                { width: "45%" },
              ]}
              onPress={props.rightButtonPress}
              textStyle={[
                styles.buttonText,
                { color: props.isMovable ? Colors.white : Colors.darkGrey },
              ]}
            />
          )}
        </>
      </View>
    </View>
  );
};

export default CustomFooter;

const styles = StyleSheet.create({
  customFooterContainer: {
    height: "15%",
    backgroundColor: Colors.white,
    width: "100%",
    bottom: 0,
    right:0,
    left:0,
  },
  singleButtonFooter: {
    justifyContent: "center",
  },
  trackerContainer: {
    height: 5,
    width: "100%",
    backgroundColor: Colors.darkGrey,
  },
  buttonText: {
    fontFamily: fonts.type.medium,
    fontSize: 16,
    color: Colors.sailBlue,
  },
  firstButtonStyle: {
    borderWidth: 1,
    borderColor: Colors.sailBlue,
    backgroundColor: Colors.white,
  },
  singleButtononFooter: {
    width: "100%",
    backgroundColor: Colors.background2,
    borderWidth: 0,
  },
  footer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  }
});
