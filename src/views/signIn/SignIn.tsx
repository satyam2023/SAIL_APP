import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import styles from "./Style/Style";
import ModalAlert from "./component/ModalAlert";
import Glyphs from "assets/Glyphs";
import { SCREENS } from "@shared-constants";
import { navigate } from "@navigation";
import { white, darkgrey, black, grey, lightWhite,} from "commonStyles/RNColor.style";
import CustomButton from "components/CustomButton";
import InputTextField from "components/InputTextField";
import CustomSwitch from "components/CustomSwitch";
import TextWrapper from "components/TextWrapper";

const SignIn = () => {
  const [personalnumber, setpersonalnumber] = useState(true);
  const [passeye, setpasseye] = useState<boolean>(true);
  const [passstatus, setpassstatus] = useState(true);
  const [remembertick, setremembertick] = useState(true);
  const [visibilityStatus, setVisibilitystatus] = useState<boolean>(false);
  const [signinColor, setSigninColor] = useState<boolean>(false);
  const [signin, setsign] = useState<boolean>(false);

  const details = {
    passOne: useRef(""),
    phoneNumber: useRef(""),
  };

  function handlesignin() {
    navigate(SCREENS.TAB);
  }

  function signincolor() {
    if (details.phoneNumber.current.length == 10) {
      setSigninColor(true);
    } else {
      setSigninColor(false);
    }
  }

  function SetModalScreen(param: boolean) {
    setVisibilitystatus(param);
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
      <StatusBar backgroundColor={"#FFFFFF"} barStyle={"dark-content"} />
      <View style={{ flex: 0.7, paddingHorizontal: 20 }}>
        <Text style={styles.signinText}>Sign In</Text>
        <Text style={styles.pleaseText}>Please enter details to sign in</Text>
        <InputTextField
         leftIcon={Glyphs.Contact}
         placeholder="Your Unique Personal Number"
         onChangeText={(text:string)=>details.phoneNumber.current=text}
         maxlength={20}
       />
        <InputTextField
         eyeIcon={Glyphs.Eye}
         leftIcon={Glyphs.Key}
         placeholder="Create Your Password"
         onChangeText={(text:string)=>details.passOne.current=text}
         maxlength={20}
       />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
       
          <View style={{ flexDirection: "row" }}>
               <CustomSwitch onPress={()=>{}}  isRectangular={true} status={true}/>
          <TextWrapper style={styles.forgot}>Remember me</TextWrapper>
            {/* <Text style={styles.forgot}>Remember me</Text> */}
          </View>
          <TouchableOpacity>
            <Text style={[styles.forgot, styles.forgotmargin]}>
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          textStyle={{ color: darkgrey }}
          buttonStyle={{ backgroundColor: lightWhite }}
          onPress={() => navigate(SCREENS.TAB)}
          text="Sign In"
        />
        <View
          style={{
            width: 236,
            marginTop: "3%",
            alignSelf: "center",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontWeight: "400",
              fontSize: 14,
              lineHeight: 17.5,
              color: "#110F2480",
            }}
          >
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigate(SCREENS.SIGNUP);
            }}
          >
            <Text
              style={{
                fontWeight: "600",
                fontSize: 14,
                lineHeight: 17.5,
                color: "#233972",
              }}
            >
              {" "}
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        <Image
          source={Glyphs.OrLine}
          style={{
            marginTop: "5%",
            width: "100%",
            height: "2%",
            resizeMode: "cover",
          }}
        />
      </View>
      <View
        style={{ flex: 0.3, justifyContent: "flex-end", padding: 20 }}
      >
        <CustomButton
          textStyle={{ color: black,fontWeight:'400',fontSize:14}}
          buttonStyle={{ backgroundColor: white,borderColor:grey,borderWidth:1}}
          onPress={() => navigate(SCREENS.MAIN)}
          text="Sign in with Fingerprint"
          image={Glyphs.FaceScan}
        />
        
        <CustomButton
          textStyle={{ color: black,fontWeight:'400',fontSize:14}}
          buttonStyle={{ backgroundColor: white,borderColor:grey,borderWidth:1}}
          onPress={() => navigate(SCREENS.MAIN)}
          text="Sign in with Face Recognition"
          image={Glyphs.FingerScan}
        />
        <ModalAlert
          visibilityStatus={visibilityStatus}
          SetModalScreen={SetModalScreen}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
