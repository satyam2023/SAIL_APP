import { Colors } from "commonStyles/RNColor.style";
import { debounceHOC } from "hocs/debounceHOC";
import {
  FlatList,
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
import { IdropDown } from "models/interface/ISetting";
import { WindowHeight } from "libs";

interface ICustomDropDown {
  ArrayOfData: Array<IdropDown> | undefined;
  leftIcon?: ImageURISource;
  getData?: (value: string) => void;
  topheading: string;
  style?: ViewStyle;
  onPress?: (item: IdropDown) => void;
  error?: string;
  defaultValue?: string;
  isRightDropDownVisible?: boolean;
  rightIcon?: ImageURISource;
  onRightIconPress?: () => void;
}

const CustomDropDown = (props: ICustomDropDown) => {
  const Press = debounceHOC(TouchableOpacity);
  const [selectedListItem, setSelectedListItem] = useState<string>(
    props.defaultValue ? props.defaultValue : "",
  );
  const [isListVisible, setIsListVisible] = useState<boolean>(false);
  console.warn("||||||||||||||||",props.defaultValue);
  const handleItemClick = (data: string) => {
    setIsListVisible(false);
    setSelectedListItem(data);
  };
  const renderItem = (item: IdropDown, _: number) => {
    return (
      <Press
        style={styles.listContainer}
        onPress={() => {
          {
            props.onPress && props.onPress(item);
          }
          handleItemClick(item.name);
        }}
      >
        <TextWrapper style={commonStyles.font14RegularBlack}>
          {item.name}
        </TextWrapper>
      </Press>
    );
  };

  return (
    <>
      <PressableButton
        style={[
          styles.dropContainer,
          props?.style,
          props?.error ? styles.errorBox : {},
        ]}
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
        {!props.isRightDropDownVisible ? (
          <Image
            source={Glyphs.Arrow}
            tintColor={Colors.jetGray}
            style={commonStyles.icon}
          />
        ) : (
          <Press
           style={styles.rightIconContainer}
            onPress={() => {
              if (props.onRightIconPress) {
                props.onRightIconPress();
              }
            }}
          >
            {props.rightIcon ? (
              <Image source={props.rightIcon} style={styles.rightIcon} />
            ) : null}
          </Press>
        )}
      </PressableButton>
      {props.error && (
        <View style={{ bottom: 12 }}>
          <TextWrapper style={styles.errorMsg}>{props.error}</TextWrapper>
        </View>
      )}
      {isListVisible && (
        <FlatList
          data={props.ArrayOfData}
          renderItem={({ item, index }) => renderItem(item, index)}
          style={
            props.ArrayOfData
              ? { height: WindowHeight / 4, marginBottom: 10 }
              : {}
          }
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: "100%",
                height: 1,
                backgroundColor: Colors.background2,
              }}
            />
          )}
        />
      )}
    </>
  );
};

export default CustomDropDown;

const styles = StyleSheet.create({
  dropContainer: {
    width: "100%",
    height: 56,
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
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
  errorMsg: {
    color: Colors.red,
    fontSize: 14,
    marginLeft: 16,
    fontFamily: fonts.type.regular,
  },
  errorBox: {
    borderWidth: 1,
    borderColor: Colors.red,
  },
  rightIcon: {
    height: 24,
    width: 24,
    resizeMode: "contain",
  },
  rightIconContainer: {
    position: "absolute",
    right: 16,
  },
});
