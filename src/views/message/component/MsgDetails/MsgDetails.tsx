import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import HeaderMain from "components/HeaderForMainScreen/HeaderMain";
import MsgField from "./MsgField";
import ForwardCard from "./ForwarnCard";
import styles from "views/message/Style/Style";
import Glyphs from "assets/Glyphs";
import { grey, lightgrey } from "commonStyles/RNColor.style";
interface MsgProps {
  navigationprops: any;
}

const MsgDetails: React.FC<MsgProps> = ({ navigationprops }: MsgProps) => {
  return (
    <SafeAreaView  >
      <HeaderMain
        topheading="Message Details"
        navigationProps={navigationprops}
      />
      <View style={{paddingHorizontal:20}}>
      <ScrollView
        style={{
          backgroundColor: "#FFFFFF",
          width: '100%',
          marginTop: 24,
          borderRadius: 10,
          paddingHorizontal:16,
          marginBottom:70
        }}
      >
        <MsgField heading="Customer Code" body="1234567" />
        <MsgField heading="Customer Name" body="John Doe" />
        <MsgField heading="Customer Type" body="Customer Type Title" />
        <MsgField
          heading="Reason"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <MsgField
          heading="Issue"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <MsgField
          heading="Issue Comment"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <ForwardCard />
        <ForwardCard />
        <ForwardCard />
        <View style={styles.escalateBox}>
          <View>
            <Text style={{ marginTop: 5 ,color:grey}}>Escalate To</Text>
            <Text style={{ fontWeight: "400", color: "#110F24", marginTop: 5 }}>
              Title
            </Text>
          </View>
          <Image
            source={Glyphs.Arrow}
            style={{
              transform: [{ rotate: "90deg" }],
              marginTop: 18,
              marginLeft: 8,
              tintColor: "gray",
            }}
          />
        </View>

        <View style={styles.commentBox}>
          <Text style={styles.commentTxt}>Add Comments</Text>
          <TextInput
            multiline={true}
            placeholder="Remarks"
            placeholderTextColor={"black"}
          />
        </View>
        <TouchableOpacity
          style={styles.submitBox}
          onPress={() => navigationprops.navigation.navigate("MainScreen")}
        >
          <Text style={styles.submitTxt}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default MsgDetails;
