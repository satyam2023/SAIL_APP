import React, {
  forwardRef,
  useImperativeHandle,
} from "react";

import CustomHeader from "../Component/CustomHeader/CustomHeader";
import Glyphs from "assets/Glyphs";
import RoleData from "../Component/Data/RoleData";
import LocationData from "../Component/Data/LocationData";
import InputTextField from "components/InputTextField";
import CustomDropDown from "components/CustomDropDown";
import { Colors} from "commonStyles/RNColor.style";
import SafeAreaContainer from "components/SafeAreaContainer";
import StringConstants from "shared/localization";


interface SecondProps {
  userDetail:any;
  error:any
}
const Second = forwardRef(({ userDetail ,error}: SecondProps, ref) => {
 
  useImperativeHandle(ref, () => ({
    // handleSubmit: validationcheck,
  }));

  return (
    <SafeAreaContainer backgroundColor={Colors.white}>
      <CustomHeader details={StringConstants.ENTER_YOUR_PERSONAL_INFO} />
      <InputTextField
        onChangeText={(text: string) => {
          userDetail.Name.current = text;
        }}
        placeholder={StringConstants.YOUR_NAME}
        maxlength={20}
        leftIcon={Glyphs.Contact}
        error={error.Name?StringConstants.NAME_ERROR_MSG:undefined}
      />
      <InputTextField
        onChangeText={(text: string) => {
          userDetail.Email.current = text;
        }}
        placeholder={StringConstants.YOUR_EMAIL_ID}
        maxlength={20}
        leftIcon={Glyphs.Email}
        error={error.Email?StringConstants.EMAIL_ERROR_MSG:undefined}
      />
      <CustomDropDown
        ArrayOfData={LocationData}
        topheading={StringConstants.LOCATION}
        leftIcon={Glyphs.Location}
        style={{ backgroundColor: Colors.inputBG }}
        onPress={(selectedvalue:string)=>userDetail.Location.current=selectedvalue}
        error={error.Location?StringConstants.LOCATION_ERROR_MSG:undefined}
      />

      <CustomDropDown
        ArrayOfData={RoleData}
        topheading={StringConstants.YOUR_ROLE}
        leftIcon={Glyphs.Role}
        style={{ backgroundColor: Colors.inputBG }}
        onPress={(selectedvalue:string)=>userDetail.Role.current=selectedvalue}
        error={error.Role?StringConstants.ROLE_ERROR_MSG:undefined}
      />
    </SafeAreaContainer>
  );
});
export default Second;
