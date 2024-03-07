import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import styles from "./Style";
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import InputText from "components/InputText/InputText";
import CustomHeader from "../Component/CustomHeader/CustomHeader";
import Glyphs from "assets/Glyphs";
import DropDown from "../Component/DropDown/DropDown";
import RoleData from "../Component/Data/RoleData";
import LocationData from "../Component/Data/LocationData";
import InputTextField from "components/InputTextField";
// import { useDispatch, useSelector } from 'react-redux';
// import { setSecondscreen } from '../../Redux/Slice2';
// import { setUserName } from "../../Redux/Slice";

interface SecondProps {
  setScreen: Function;
}
const Second = forwardRef(({ setScreen }: SecondProps, ref) => {
  const Data = [{ segment: "A" }, { segment: "B" }, { segment: "C" }];
  const [toggle, settoggle] = useState<boolean>(false);
  const [roletoggle, settogglerole] = useState<boolean>(false);
  const [Tag, setTag] = useState<String>("Location");
  const [TagRole, setTagRole] = useState<String>("Your Role");
  const [dropstatus, setdropstatus] = useState<boolean>(false);
  const [dropstatusrole, setdropstatusrole] = useState<boolean>(false);
  const [name, setname] = useState<boolean>(true);
  const [email, setemail] = useState<boolean>(true);
  const [validname, setvalidname] = useState<boolean>(false);
  const [validemail, setvalidemail] = useState<boolean>(false);
  const [validlocation, setvalidlocation] = useState<boolean>(true);
  const [validrole, setvalidrole] = useState<boolean>(true);
  // const dispatch = useDispatch();
  // var iconstatus=useSelector((state:any)=>state.button.SecondScreenButtonStatus);
  const details = {
    name: useRef(""),
    email: useRef(""),
  };

  function handleUserName(txt: any) {
    const regexPattern =
      /^[a-zA-Z]{3,20}( )[a-zA-Z]{3,20}(( )[a-zA-Z]{3,20})?$/;
    if (!regexPattern.test(txt)) {
      setname(false);
    } else {
      setname(true);
      setvalidname(true);
    }
  }

  function emailHandler(txt: any) {
    const regexPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regexPattern.test(txt)) {
      setemail(false);
    } else {
      setemail(true);
      setvalidemail(true);
    }
  }

  function locationhandler() {
    if (Tag != "Location") {
      setvalidlocation(true);
    }
  }
  function rolehandler() {
    if (TagRole != "Your Role") {
      setvalidrole(true);
    }
  }
  useEffect(() => {
    if (
      Tag != "Location" &&
      TagRole != "Your Role" &&
      validemail &&
      validname
    ) {
    } else if (
      Tag == "Location" ||
      TagRole == "Your Role" ||
      !validemail ||
      !validname
    ) {
    }
  }, [validemail, validname, Tag != "Location", TagRole != "Your Role"]);

  function validationcheck() {
    if (
      Tag != "Location" &&
      TagRole != "Your Role" &&
      validemail &&
      validname
    ) {
      setScreen(3);
    } else {
      if (!validname) setname(false);

      if (!validemail) setemail(false);

      if (Tag == "Location") setvalidlocation(false);

      if (TagRole == "Your Role") setvalidrole(false);
    }
  }

  useImperativeHandle(ref, () => ({
    handleSubmit: validationcheck,
  }));

  return (
    <ScrollView style={styles.container}>
      <CustomHeader details="Enter your personal information" />
      <InputTextField onChangeText={(text:string)=>{details.name.current=text}} placeholder={"Your Name"} maxlength={20}      
        leftIcon={Glyphs.Contact}/>
     <InputTextField onChangeText={(text:string)=>{details.email.current=text}} placeholder={"Your Email Id"} maxlength={20}      
        leftIcon={Glyphs.Email}/>
      <DropDown
        data={LocationData}
        heading={"Location"}
        imageurl={Glyphs.Location}
      />
      <DropDown data={RoleData} heading={"Your Role"} imageurl={Glyphs.Role} />
    </ScrollView>
  );
});
export default Second;
