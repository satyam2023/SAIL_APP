import React from "react";
import styles from "../Style";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Glyphs from "assets/Glyphs";

interface Props {
  setScreen: Function;
}

const Terms: React.FC<Props> = ({ setScreen }: Props) => {
  return (
    <ScrollView style={{ backgroundColor: "#F9F9FC", }}>
      <StatusBar backgroundColor={"#233972"} barStyle={"light-content"} />
      <View
        style={{
          height: 60,
          width: "100%",
          backgroundColor: "#233972",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{ marginLeft: 21, marginTop: 18 }}
          onPress={() => {
            setScreen("CMS");
          }}
        >
          <Image
            source={Glyphs.Arrow}
            style={{
              tintColor: "#FFFFFF",
              width: 9,
              height: 15,
              transform: [{ rotate: "180deg" }],
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 13,
            color: "#FFFFFF",
            marginLeft: 16,
            height: 36,
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          Terms and Conditions
        </Text>
      </View>
      <View style={{paddingHorizontal:20}}>

      <Text style={styles.privacytext}>
        Thank you for choosing our online sales meeting app! To ensure a smooth
        and productive meeting experience, please read the following terms and
        conditions carefully before using our app:{`\n`}
        <Text style={{marginTop:30}}>
          <Text style={styles.privacuinnrttext}>1. Acceptance of Terms: </Text>
          By accessing or using our online sales meeting app, you agree to be
          bound by these Terms and Conditions, as well as any additional terms
          and conditions that may be displayed within the app or provided to you
          in connection with any specific service.{" "}
        </Text>
        {`\n`}
        <Text style={{marginTop:30}}>
          <Text style={styles.privacuinnrttext}>2. Use of the App:</Text> Our
          online sales meeting app is designed for use by authorized users only,
          including sales representatives, managers, and other company
          personnel. You agree to use the app only for its intended purpose,
          which is to facilitate sales meetings and related activities. {`\n`}
        </Text>
        <Text>
          <Text style={styles.privacuinnrttext}>3. Account Registration:</Text>{" "}
          In order to use our app, you may be required to create an account and
          provide personal information such as your name, email address, and
          company affiliation. You agree to provide accurate and complete
          information, and to update your account information as needed to
          ensure that it remains accurate and complete.
          {`\n`}
        </Text>
        <Text>
          <Text style={styles.privacuinnrttext}>4. Meeting Content: </Text>All
          meeting content, including presentations, documents, and other
          materials, are the property of their respective owners. You agree not
          to reproduce, distribute, or otherwise use any meeting content without
          the express written permission of the content owner.
          {`\n`}
        </Text>
        <Text>
          <Text style={styles.privacuinnrttext}>5. Privacy:</Text> We take the
          privacy of our users very seriously. Any personal information you
          provide to us will be used only for the purpose of facilitating your
          use of our app and will not be shared with third parties except as
          required by law.
          {`\n`}
        </Text>
        <Text>
          <Text style={styles.privacuinnrttext}>
            6. Disclaimer of Warranties:{" "}
          </Text>
          Our app is provided "as is" and we make no representations or
          warranties of any kind, express or implied, regarding the operation or
          use of the app, including without limitation, the accuracy,
          completeness, or reliability of any information or content provided
          through the app.
          {`\n`}
        </Text>
        <Text>
          <Text style={styles.privacuinnrttext}>
            7. Limitation of Liability:{" "}
          </Text>
          In no event shall we be liable for any damages whatsoever, including
          without limitation, direct, indirect, special, incidental, or
          consequential damages arising out of or in connection with the use or
          inability to use our app. Governing Law: These Terms and Conditions
          shall be governed by and construed in accordance with the laws of the
          jurisdiction in which our company is located. By using our online
          sales meeting app, you agree to these terms and conditions. If you do
          not agree to these terms and conditions, please do not use our app.
        </Text>
      </Text>
      </View>
    </ScrollView>
  );
};

export default Terms;
