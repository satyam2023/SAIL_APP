import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import InputTextField from "components/InputTextField";
import { ITextFieldData, TextFieldData } from "./mockData/TextFieldData";
import styles from "./Style/Style";
import Glyphs from "assets/Glyphs";
import { ScrollView } from "react-native";
import { Colors } from "commonStyles/RNColor.style";
import Header from "components/AppHeader";
import StringConstants from "shared/localization";
import TextWrapper from "components/TextWrapper";
import fonts from "@fonts";
import commonStyles from "commonStyles/CommonStyle";
import CustomButton from "components/CustomButton";
import { SignInResponse } from "models/SignInResponse";
import { ExtarctTwoLetterName } from "helper/ExtractFirstandLast";

interface ISetting {
  userData: SignInResponse;
}

const SettingScreen = ({ userData }: ISetting) => {
  const twoLettername = ExtarctTwoLetterName(userData.user.user_name);


  function renderItem(item: ITextFieldData, index: number) {
    return (
      <InputTextField
        onChangeText={() => {}}
        containerStyle={{ backgroundColor: Colors.lightGray }}
        placeholder={item.placeholder}
        maxlength={20}
        defaultValue={userData.user.user_role_name}
      />
    );
  }
  return (
    <SafeAreaView style={{ backgroundColor: Colors.background, flex: 1 }}>
      <Header topheading={StringConstants.SETTINGS} isLogoutButton={true} />
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <View style={styles.detailContainer}>
          <View style={styles.circle}>
            <TextWrapper
              color={Colors.white}
              fontFamily={fonts.type.medium}
              style={{ fontSize: 20 }}
            >
              {twoLettername}
            </TextWrapper>
          </View>
          <View style={styles.infoContainer}>
            <View style={{ marginLeft: 16 }}>
              <TextWrapper style={commonStyles.font14RegularBlack}>
                {userData.user.user_name}
              </TextWrapper>
              <TextWrapper style={styles.userPost}>
                {userData.user.user_role_name}
              </TextWrapper>
            </View>
            <CustomButton
              image={Glyphs.Editing}
              text={StringConstants.EDIT_PROFILE}
              buttonStyle={{ width: "50%", backgroundColor: Colors.sailBlue }}
              textStyle={styles.editTxt}
              imageStyle={{ width: 16, height: 16 }}
            />
          </View>
        </View>
        <FlatList
          data={TextFieldData}
          renderItem={({ item, index }) => renderItem(item, index)}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;
