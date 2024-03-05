import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "react-native";

import styles from "./Style/Style";
import Product from "components/Product/Product";

import Glyphs from "assets/Glyphs";
import { ScrollView } from "react-native-gesture-handler";
import VisitCard from "./component/VisitCard/VisitCard";
import {
  SkyBlue,
  lightgreen,
  whitegreenish,
  green,
  blue,
} from "commonStyles/RNColor.style";
import { SCREENS } from "@shared-constants";
import { navigate } from "@navigation";

// import {setVisitType} from "../../Redux/Slice2"

const FirstHomeScreen = () => {
 
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={"red"} />
      <View style={styles.name}>
        <View style={styles.topTxt}>
          <View style={styles.nameContainer}>
            <Text style={styles.Welcometext}>Welcome,</Text>
            <Text style={styles.Welcometextname}>Saransh Verma</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={()=> {navigate(SCREENS.MESSAGE);}}>
              <Image source={Glyphs.Mail} style={{ marginTop: 21 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {navigate(SCREENS.NOTIFICATION)}}>
              <Image
                source={Glyphs.Notification}
                style={{ marginTop: 21, marginLeft: 16 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigate(SCREENS.SETTING)}}>
              <View style={styles.circle}>
                <Text style={styles.circleTxt}>SV</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          marginTop: 16,
          position: "relative",
          bottom: 68,
        }}
      >
        <VisitCard
          count={11}
          title={"Upcoming Visits"}
          image={Glyphs.Visit}
          backgroundcolor={whitegreenish}
          textColor={SkyBlue}
        />
        <VisitCard
          count={12}
          title={"Planned Visits"}
          image={Glyphs.Planned}
          backgroundcolor={"#EEF4FF"}
          textColor={blue}
        />
        <VisitCard
          count={26}
          title={"Executed Visits"}
          image={Glyphs.Executed}
          backgroundcolor={lightgreen}
          textColor={green}
        />
      </View>
      <View style={{ position: "relative", bottom: 70 }}>
        <Product
          category="Product Catalogue"
          imagefirst={Glyphs.Steel}
          imagesecond={Glyphs.Rolled}
          imagefirstinfo="Stainless Steel Products"
          imagesecondinfo="Cold Rolled Products"
          text="See All"
        />
        <Product
          category="Customer Information"
          imagefirst={Glyphs.Customer}
          imagesecond={Glyphs.Customer}
          imagefirstinfo="Sales Order Status"
          imagesecondinfo="MOU Status"
          text=""
        />
        <Product
          category="Category"
          imagefirst={Glyphs.Customer}
          imagesecond={Glyphs.Setting2}
          imagefirstinfo="User Enquiry"
          imagesecondinfo="Issue Enquiry"
          text="View All"
        />
      </View>

      {/* <Footer
        color="#F9F9FC"
        navigationprops={props}
        //    PlusClicked={PlusClicked}
      /> */}
      {/* <BottomDrawer Navigationprops={props} ref={BottomDrawerRef}/> */}
    </ScrollView>
  );
};

export default FirstHomeScreen;
