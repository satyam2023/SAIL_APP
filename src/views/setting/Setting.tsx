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
import { SignInResponse } from "models/ApiResponses/SignInResponse";
import { ExtarctTwoLetterName } from "helper/helperFunctions";
import { IUpdatedetails, IdropDown } from "models/interface/ISetting";
import { CustomDropDown } from "components";
import { LocationData, RoleData } from "@shared-constants";
import { MasterDataResponse } from "models/ApiResponses/MasterDataResponse";

interface ISetting {
  userData: SignInResponse;
  logOutApiCalling: () => void;
  dataofInputField: string[];
  editDetails: (text: string, index: number) => void;
  updatedDetails: IUpdatedetails;
  updateApiCalling: () => void;
  isDetailsUpdating: boolean;
  roleLocationDropDownList:MasterDataResponse;
}


const SettingScreen = ({
  editDetails,
  userData,
  logOutApiCalling,
  dataofInputField,
  updatedDetails,
  isDetailsUpdating,
  roleLocationDropDownList,
}: ISetting) => {
  function renderItem(item: ITextFieldData, index: number) {
    return (
      <>
        {
          <InputTextField
            onChangeText={(text: string) => {
              updatedDetails.email.current = text;
            }}
            containerStyle={{
              backgroundColor:
                isDetailsUpdating && index >= 3
                  ? Colors.white
                  : Colors.lightGray,
            }}
            placeholder={item.placeholder}
            maxlength={20}
            defaultValue={dataofInputField[index]}
            isEditable={index < 3 ? false : isDetailsUpdating}
          />
        }
      </>
    );
  }
  return (
    <SafeAreaView style={{ backgroundColor: Colors.background, flex: 1 }}>
      <Header
        topheading={StringConstants.SETTINGS}
        isLogoutButton={true}
        rightButtonPress={() => logOutApiCalling()}
      />
      <ScrollView
        style={{ paddingHorizontal: 20, flex: 1 }}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
      >
        <View style={styles.detailContainer}>
          <View style={styles.circle}>
            <TextWrapper
              color={Colors.white}
              fontFamily={fonts.type.medium}
              style={{ fontSize: 20 }}
            >
              {ExtarctTwoLetterName(userData?.user?.user_name)}
            </TextWrapper>
          </View>
          <View style={styles.infoContainer}>
            <View style={{ marginLeft: 16, width: "40%" }}>
              <TextWrapper style={commonStyles.font14RegularBlack}>
                {userData?.user?.user_name}
              </TextWrapper>
              <TextWrapper style={styles.userPost}>
                {userData?.user?.user_role_name}
              </TextWrapper>
            </View>
            <CustomButton
              image={Glyphs.Editing}
              text={StringConstants.EDIT_PROFILE}
              buttonStyle={{ width: "50%", backgroundColor: Colors.sailBlue }}
              textStyle={styles.editTxt}
              imageStyle={{ width: 16, height: 16 }}
              onPress={() => {
                editDetails("", -1);
              }}
            />
          </View>
        </View>
        <FlatList
          data={TextFieldData}
          renderItem={({ item, index }) => renderItem(item, index)}
          scrollEnabled={false}
        />
        <CustomDropDown
          ArrayOfData={!isDetailsUpdating ? [] : roleLocationDropDownList.LocationData}
          topheading={StringConstants.LOCATION}
          style={{
            backgroundColor: !isDetailsUpdating
              ? Colors.lightGray
              : Colors.white,
          }}
          defaultValue={dataofInputField[4]}
          isRightDropDownVisible={!isDetailsUpdating}
          onPress={(item: IdropDown) => (updatedDetails.Location.current = item.name)}
        />
        <CustomDropDown
          ArrayOfData={!isDetailsUpdating ? [] : roleLocationDropDownList.RolesData}
          topheading={StringConstants.ROLE}
          style={{
            backgroundColor: !isDetailsUpdating
              ? Colors.lightGray
              : Colors.white,
          }}
          defaultValue={dataofInputField[5]}
          isRightDropDownVisible={!isDetailsUpdating}
          onPress={(item: IdropDown) => (updatedDetails.Role.current = item.id)}
        />
        {isDetailsUpdating && (
          <CustomButton
            text={StringConstants.UPDATE_PROFILE}
            buttonStyle={{
              backgroundColor: Colors.white,
              borderWidth: 1,
              borderColor: Colors.sailBlue,
            }}
            textStyle={[
              commonStyles.font14MediumBlackpearl,
              { color: Colors.sailBlue },
            ]}
            onPress={() => {
              editDetails("", -2);
            }}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;
