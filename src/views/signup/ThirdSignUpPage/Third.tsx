import React, {
  forwardRef,
  useImperativeHandle,
} from "react";
import CustomHeader from "../Component/CustomHeader/CustomHeader";
// import { useDispatch, useSelector } from 'react-redux';
// import { setThirdscreen } from '../../Redux/Slice2';
// import { setPassword, setSignUp } from '../../Redux/Slice';
// const sign = require('jwt-encode');


import Glyphs from "assets/Glyphs";
import InputTextField from "components/InputTextField";
import SafeAreaContainer from "components/SafeAreaContainer";
import StringConstants from "shared/localization";

//import DropdownList from './DropDownList';
interface ThirdProps {
  userDetail:any;
  error:any
}

const Third = forwardRef(({ userDetail,error}: ThirdProps, ref) => {



  useImperativeHandle(ref, () => ({
    // handleSubmit: validationcheck,
  }));

  return (
    <SafeAreaContainer >
      <CustomHeader details={StringConstants.CHOOSE_PASSWORD}/>
       <InputTextField
         eyeIcon={Glyphs.Eye}
         leftIcon={Glyphs.Key}
         placeholder={StringConstants.CREATE_PASSWORD}
         onChangeText={(text:string)=>userDetail.Password.current=text}
         maxlength={20}
         error={error.Password?StringConstants.ERROR_MESSAGE:undefined}
       />
     <InputTextField
      eyeIcon={Glyphs.Eye}
      leftIcon={Glyphs.Key}
      placeholder={StringConstants.CONFIRM_PASSWORD}
      onChangeText={(text:string)=>userDetail.Confirm_Password.current=text}
      maxlength={20}
      error={error.Confirm_Password?StringConstants.ERROR_MESSAGE:undefined}
    />
    </SafeAreaContainer>
  );
});

export default Third;
