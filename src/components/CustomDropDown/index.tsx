import { Colors } from "commonStyles/RNColor.style";
import { debounceHOC } from "hocs/debounceHOC";
import {
  Image,
  ImageURISource,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import TextWrapper from "../TextWrapper";
import Glyphs from "assets/Glyphs";
import { useState } from "react";
import commonStyles from "commonStyles/CommonStyle";
import fonts from "@fonts";
import { PressableButton } from "components";


interface ICustomDropDown<T> {
  ArrayOfData: Array<T>;
  leftIcon?: ImageURISource;
  getData?: (value: string) => void;
  topheading: string;
  style?: ViewStyle;
}

const CustomDropDown = <T,>(props: ICustomDropDown<T>) => {
  const Press = debounceHOC(TouchableOpacity);
  const [selectedListItem, setSelectedListItem] = useState<string>();
  const [isListVisible, setIsListVisible] = useState<boolean>(false);

  const handleItemClick = (data: string) => {
    setIsListVisible(false);
    setSelectedListItem(data);
  };
  const renderItem = (item: any) => {
    return (
      <Press
        style={styles.listContainer}
        onPress={() => {
          handleItemClick(item.value);
        }}
        key={item.key}
      >
        <TextWrapper style={commonStyles.font14RegularBlack}>
          {item.value}
        </TextWrapper>
      </Press>
    );
  };

  return (
    <>
      <PressableButton
        style={[styles.dropContainer, props?.style]}
        onPress={() => {
          setIsListVisible(!isListVisible);
        }}
      >
        <View style={{ flexDirection: "row" }}>
          {props?.leftIcon && (
            <Image source={props.leftIcon} style={commonStyles.leftIcon} />
          )}
          <View>
            {selectedListItem && (
              <TextWrapper style={styles.lable}>{props.topheading}</TextWrapper>
            )}
            <TextWrapper
              color={selectedListItem ? Colors.black : Colors.jetGray}
            >
              {selectedListItem ? selectedListItem : props?.topheading}
            </TextWrapper>
          </View>
        </View>
        <Image
          source={Glyphs.Arrow}
          tintColor={Colors.jetGray}
          style={{ transform: [{ rotate: "90deg" }] }}
        />
      </PressableButton>
      {isListVisible && props?.ArrayOfData.map(renderItem)}
    </>
  );
};

export default CustomDropDown;

const styles = StyleSheet.create({
  dropContainer: {
    width: "100%",
    height: 56,
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    borderRadius: 33,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listContainer: {
    height: 56,
    backgroundColor: Colors.white,
    paddingLeft: 24,
    justifyContent: "center",
  },
  itemSeparator: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.lightGray,
  },
  lable: {
    color: Colors.darkGrey,
    bottom: 5,
    fontFamily: fonts.type.regular,
    fontSize: 12,
  },
});
