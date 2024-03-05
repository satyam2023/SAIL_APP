import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import styles from "./Style/Style";
import InputText from "components/InputText/InputText";
import ModalAlert from "./component/ModalAlert";
import Glyphs from "assets/Glyphs";
import { SCREENS } from "@shared-constants";
import { goBack, navigate } from "@navigation";

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
        <View style={personalnumber ? styles.inputbox : styles.inputboxno}>
          <View style={{ backgroundColor: "#E6E6E6", width: 0 }}>
            <Image source={Glyphs.Contact} style={styles.img} />
          </View>
          <InputText
            placeholder="Your Unique Personal No."
            ChangeText={(text: any) => {
              details.phoneNumber.current = text;
              signincolor();
            }}
            keyboardType="numeric"
            secureText={false}
            maxLength={10}
          />
        </View>
        <View style={passstatus ? styles.inputbox : styles.inputboxno}>
          <View style={{ backgroundColor: "#E6E6E6", width: 0 }}>
            <Image source={Glyphs.Key} style={styles.img} />
          </View>
          <InputText
            placeholder="Create Your Password"
            ChangeText={(text: string) => {
              details.passOne.current = text;
            }}
            keyboardType="default"
            secureText={passeye}
            maxLength={10}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#E6E6E6",
              width: 0,
              position: "absolute",
              right: 30,
            }}
            onPress={() => {
              setpasseye(!passeye);
            }}
          >
            {passeye ? (
              <Image source={Glyphs.EyeCut} style={styles.imgdrop} />
            ) : (
              <Image source={Glyphs.Eye} style={styles.imgdrop} />
            )}
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            {remembertick ? (
              <TouchableOpacity
                onPress={() => {
                  setremembertick(!remembertick);
                }}
              >
                <Image source={Glyphs.Remember} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.emptytick}
                onPress={() => {
                  setremembertick(!remembertick);
                }}
              />
            )}
            <Text style={styles.forgot}>Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text style={[styles.forgot, styles.forgotmargin]}>
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[
            styles.signbtn,
            signinColor ? { backgroundColor: "#233972" } : {},
          ]}
          onPress={handlesignin}
        >
          <Text
            style={[styles.txtofSign, signinColor ? { color: "#FFFFFF" } : {}]}
          >
            Sign In
          </Text>
        </TouchableOpacity>
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
      <View style={{ flex: 0.3, justifyContent: "flex-end" }}>
        <TouchableOpacity style={styles.authbtn}>
          <Image source={Glyphs.FaceScan} style={{ marginLeft: 16 }} />
          <Text style={styles.finger}>Sign in with Fingerprint</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.authbtn}>
          <Image source={Glyphs.FaceScan} style={{ marginLeft: 16 }} />
          <Text style={styles.finger}>Sign in with Face Recognition</Text>
        </TouchableOpacity>
        <ModalAlert
          visibilityStatus={visibilityStatus}
          SetModalScreen={SetModalScreen}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
