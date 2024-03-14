import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import CustomHeader from "../Component/CustomHeader/CustomHeader";
import Glyphs from "assets/Glyphs";
import InputTextField from "components/InputTextField";
import SafeAreaContainer from "components/SafeAreaContainer";
import StringConstants from "shared/localization";

interface FirstProps {
  CurrentScreen: any;
  setScreen: any;
  totalvalidation: any;
}

const First = forwardRef(({}: FirstProps, ref) => {
 
  const details={
    contactNumber:useRef(''),
    uniqueNumber:useRef('')
  }
  useImperativeHandle(ref, () => ({
    // handleSubmit: validationcheck,
  }));

  return (
    <SafeAreaContainer >
      <CustomHeader details={StringConstants.ENTER_PERSONAL_INFO}/>
      <InputTextField
        leftIcon={Glyphs.Mic}
        onChangeText={(text: string) => details.uniqueNumber.current = text}
        placeholder={StringConstants.YOUR_UNIQUE} 
        maxlength={7}      
      />
       <InputTextField
        leftIcon={Glyphs.Phone}
        onChangeText={(text: string) => details.contactNumber.current = text}
        placeholder={StringConstants.CONTACT_NUMBER}
        maxlength={10}
      />
    </SafeAreaContainer>
  );
});

export default First;
