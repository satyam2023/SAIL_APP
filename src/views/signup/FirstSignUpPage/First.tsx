import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import CustomHeader from "../Component/CustomHeader/CustomHeader";
// import { useDispatch, useSelector } from "react-redux";
import Glyphs from "assets/Glyphs";
import InputTextField from "components/InputTextField";
import SafeAreaContainer from "components/SafeAreaContainer";
import StringConstants from "shared/localization";


interface FirstProps {
  CurrentScreen: any;
  setScreen: any;
  totalvalidation: any;
}

const First = forwardRef(({ totalvalidation, setScreen }: FirstProps, ref) => {
  //var totalvalidation=false;
  const [personalnumber, setpersonalnumber] = useState(true);
  const [contactnumber, setcontactnumber] = useState(true);
  const [validpersonal, setvalidpersonal] = useState(false);
  const [validcontact, setvalidcontact] = useState(false);
  //   const dispatch = useDispatch();
  //   const iconstatus = useSelector(
  //     (state: any) => state.button.FirstScreenButtonStatus,
  //   );
  const details = {
    contactnumber: useRef(""),
    phoneNumber: useRef(""),
  };

  function containsNumber(str: any) {
    return /[0-9]/.test(str);
  }

  function handlepersonalnumber(txt: any) {
    var personalnumberlength = txt.length;
    if (!containsNumber(txt)) {
      setpersonalnumber(false);
    } else if (personalnumberlength < 10) {
      setpersonalnumber(false);
    } else {
      setpersonalnumber(true);
      setvalidpersonal(true);
    }
  }

  function handlconatctnumber(txt: any) {
    let contactnumberlength = txt.length;

    if (!containsNumber(txt)) {
      setcontactnumber(false);
    } else if (contactnumberlength < 10) {
      setcontactnumber(false);
    } else {
      setcontactnumber(true);
      setvalidcontact(true);
    }
  }
  /*
    if (validpersonal && validcontact) {
        console.log("here enter it::")
        totalvalidation(true);
        dispatch(setfirstscreen(true)
        )
    }
    else if (validpersonal! || validcontact!) {
        dispatch(setfirstscreen(false))
    }*/
  useEffect(() => {
    if (validpersonal && validcontact) {
      console.log("here enter it::");
      totalvalidation(true);
      //   dispatch(setfirstscreen(true));
    } else if (validpersonal || validcontact) {
      //   dispatch(setfirstscreen(false));
    }
  }, [validpersonal, validcontact]);

  function validationcheck() {
    if (validpersonal && validcontact) {
      //   dispatch(setPhone(details.phoneNumber.current));
      setScreen(2);
    } else if (validpersonal && !validcontact) {
      setcontactnumber(false);
    } else if (!validpersonal && validcontact) {
      setpersonalnumber(false);
    } else {
      setcontactnumber(false);
      setpersonalnumber(false);
    }
  }

  useImperativeHandle(ref, () => ({
    handleSubmit: validationcheck,
  }));

  return (
    <SafeAreaContainer >
      <CustomHeader details={StringConstants.ENTER_PERSONAL_INFO}/>
      <InputTextField
        leftIcon={Glyphs.Mic}
        onChangeText={(text: string) => details.contactnumber.current = text}
        placeholder={StringConstants.YOUR_UNIQUE} 
        maxlength={10}      
      />
       <InputTextField
        leftIcon={Glyphs.Phone}
        onChangeText={(text: string) => details.contactnumber.current = text}
        placeholder={StringConstants.CONTACT_NUMBER}
        maxlength={10}
      />
    </SafeAreaContainer>
  );
});

export default First;
