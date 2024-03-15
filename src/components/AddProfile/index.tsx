import { Colors } from "commonStyles/RNColor.style";
import { Image, StyleSheet, View } from "react-native";
import StringConstants from "shared/localization";
import CustomSwitch from "../CustomCheckBox";
import Glyphs from "assets/Glyphs";
import TextWrapper from "../TextWrapper";
import fonts from "@fonts";
import commonStyles from "commonStyles/CommonStyle";
import { debounceHOC } from "hocs/debounceHOC";

interface ICustomerType {
  isExisting?: boolean;
  onPress?: () => void;
}

const AddProfile = (props: ICustomerType) => {
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
            ? StringConstants.EXISTING_CUSTOMER
            : StringConstants.NEW_CUSTOMER}
        </TextWrapper>
      </View>
    </View>
  );
};

export default debounceHOC(AddProfile);

const styles = StyleSheet.create({
  CustomerContainer: {
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
