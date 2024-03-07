import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import CustomHeader from "../Component/CustomHeader/CustomHeader";
// import { useDispatch, useSelector } from 'react-redux';
// import { setThirdscreen } from '../../Redux/Slice2';
// import { setPassword, setSignUp } from '../../Redux/Slice';
// const sign = require('jwt-encode');

import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import InputText from "components/InputText/InputText";
import styles from "./Style";
import Glyphs from "assets/Glyphs";
import InputTextField from "components/InputTextField";

//import DropdownList from './DropDownList';
interface ThirdProps {
  setScreen: Function;
  props: any;
}

const Third = forwardRef(({ setScreen, props }: ThirdProps, ref) => {
  const [passeye, setpasseye] = useState<boolean>(true);
  const [consfirmpasseye, setconfirmpasseye] = useState<boolean>(true);
  const [passstatus, setpassstatus] = useState(true);
  const [confirmpassstatus, setconfirmpassstatus] = useState(true);
  const [validatepassword, setvalidatepassword] = useState(false);
  // const dispatch=useDispatch();
  const details = {
    passOne: useRef(""),
    passTwo: useRef(""),
  };
  // const PASSWORD = useSelector((state:any) => state.user.password);
  // const PHONENUMBER = useSelector((state:any) => state.user.phonenumber);
  // const iconstatus=useSelector((state:any)=>state.button.ThirdScreenButtonStatus)
  function PasswordHandler(txt: any) {
    const regexPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@]).{8,}$/;
    if (!regexPattern.test(txt)) {
      setpassstatus(false);
    } else {
      setpassstatus(true);
    }
  }

  function confirmPassword(txt: any) {
    const regexPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@]).{8,}$/;
    if (!regexPattern.test(txt)) {
      setconfirmpassstatus(false);
    } else if (details.passOne.current != details.passTwo.current) {
      setconfirmpassstatus(false);
    } else {
      setconfirmpassstatus(true);
      setvalidatepassword(true);
      setpassstatus(true);
    }
  }

  useEffect(() => {
    if (validatepassword) {
      //   dispatch(setThirdscreen(true))
    } else if (!validatepassword) {
      //   dispatch(setThirdscreen(false))
    }
  }, [validatepassword]);
  var password = details.passOne.current;

  // const name=useSelector((state:any)=>{state.user.username})

  function validationcheck() {
    // console.log("Confirm password Statuis:::",confirmpassstatus)
    if (validatepassword) {
      // const secret = "secret";
      const data = {
        //   number:PHONENUMBER,
        password: password,
        // iat: 1516239022
      };
      // const jwt = sign(data, secret);
      // console.log("token inside signup::",jwt);

      // dispatch(setPassword(details.passOne.current));
      // dispatch(setSignUp({

      //     phonenumber:PHONENUMBER,
      //     password: details.passOne.current,
      //     token:jwt,
      //     username:name,
      //   }))
      setScreen(1);
      props.navigation.navigate("SignIn");
    } else {
      setpassstatus(false);
      setconfirmpassstatus(false);
    }
  }

  useImperativeHandle(ref, () => ({
    handleSubmit: validationcheck,
  }));

  return (
    <ScrollView style={styles.container}>
      <CustomHeader details="Choose a passowrd" />
       <InputTextField
         eyeIcon={Glyphs.Eye}
         leftIcon={Glyphs.Key}
         placeholder="Create Your Password"
         onChangeText={(text:string)=>details.passOne.current=text}
         maxlength={20}
       />
     <InputTextField
      eyeIcon={Glyphs.Eye}
      leftIcon={Glyphs.Key}
      placeholder="Confirm Your Password"
      onChangeText={(text:string)=>details.passTwo.current=text}
      maxlength={20}
    />


    </ScrollView>
  );
});

export default Third;
