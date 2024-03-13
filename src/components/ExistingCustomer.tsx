import { Colors } from "commonStyles/RNColor.style";
import { Image, StyleSheet, View } from "react-native";
import CustomSwitch from "./CustomCheckBox";
import Glyphs from "assets/Glyphs";
import TextWrapper from "./TextWrapper";
import fonts from "@fonts";
import commonStyles from "commonStyles/CommonStyle";
import { debounceHOC } from "hocs/debounceHOC";

interface ICustomerType {
  isExisting?: boolean;
  onPress?: () => void;
}

const CustomerType = (props: ICustomerType) => {
  return (
    <View style={styles.CustomerContainer}>
      <CustomSwitch onPress={() => {}} status={false} />
      <View style={commonStyles.center}>
        <Image
          source={
            props.isExisting ? Glyphs.ExistingCustomer : Glyphs.AddCustomer
          }
          style={styles.img}
        />
        <TextWrapper style={styles.text}>
          {props.isExisting
            ? `Existing ${"\n"}Customer`
            : `New ${"\n"}Customer`}
        </TextWrapper>
      </View>
    </View>
  );
};

export default debounceHOC(CustomerType);

const styles = StyleSheet.create({
  CustomerContainer: {
    // width:'40%',
    padding: 20,
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
  text: {
    fontFamily: fonts.type.regular,
    color: Colors.blackPeral,
    fontSize: 16,
    textAlign: "center",
  },
  img: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },
});
