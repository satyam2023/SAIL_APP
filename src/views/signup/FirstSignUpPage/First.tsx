import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import CustomHeader from "../Component/CustomHeader/CustomHeader";

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
import styles from "./Styles";
// import { useDispatch, useSelector } from "react-redux";
import Glyphs from "assets/Glyphs";
// import { setfirstscreen } from "../../Redux/Slice2";
// import { setPhone } from "../../Redux/Slice";

//import DropdownList from './DropDownList';
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
    <View style={{flex:1,paddingHorizontal:20 }}>
      <CustomHeader details="Enter your personal information" />
      <View style={personalnumber ? styles.inputbox : styles.inputboxno}>
        <View style={{ backgroundColor: "#E6E6E6", width: 0 }}>
          <Image
            source={Glyphs.Contact}
            style={!false ? styles.img : styles.imgverified}
          />
        </View>
        <InputText
          placeholder="Enter Your Unique Personal No."
          ChangeText={(text: any) => {
            details.phoneNumber.current = text;
            handlepersonalnumber(text);
          }}
          keyboardType="numeric"
          secureText={false}
          maxLength={10}
        />
      </View>
      <View style={contactnumber ? styles.inputbox : styles.inputboxno}>
        <View style={{ backgroundColor: "#E6E6E6", width: 0 }}>
          <Image
            source={Glyphs.Phone}
            style={!false ? styles.img : styles.imgverified}
          />
        </View>
        <InputText
          placeholder="Your Contact Number"
          ChangeText={(text: any) => {
            details.phoneNumber.current = text;
            handlconatctnumber(text);
          }}
          keyboardType="numeric"
          secureText={false}
          maxLength={10}
        />
      </View>
    </View>
  );
});

export default First;
