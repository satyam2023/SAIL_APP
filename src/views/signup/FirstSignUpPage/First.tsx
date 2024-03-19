import React, {
  forwardRef,
  useImperativeHandle,
} from "react";
import CustomHeader from "../Component/CustomHeader/CustomHeader";
import Glyphs from "assets/Glyphs";
import InputTextField from "components/InputTextField";
import SafeAreaContainer from "components/SafeAreaContainer";
import StringConstants from "shared/localization";
import { ISignUp } from "../SignUpScreen";




const First = forwardRef(({userDetail,error}: ISignUp, ref) => {
 
  useImperativeHandle(ref, () => ({
    // handleSubmit: validationcheck,
  }));

  return (
    <SafeAreaContainer >
      <CustomHeader details={StringConstants.ENTER_PERSONAL_INFO}/>
      <InputTextField
        leftIcon={Glyphs.Mic}  
        onChangeText={(text: string) => {userDetail.Upn.current = text;
        }}
        placeholder={StringConstants.YOUR_UNIQUE} 
        maxlength={7}
        error={error.upn?StringConstants.UPN_ERROR_MSG:undefined}
      />
       <InputTextField
        leftIcon={Glyphs.Phone}
        onChangeText={(text: string) => userDetail.Contact.current = text}
        placeholder={StringConstants.CONTACT_NUMBER}
        maxlength={10}
        error={error.Contact?StringConstants.CONTACT_ERROR_MSG:undefined}
      />
    </SafeAreaContainer>
  );
});

export default First;
