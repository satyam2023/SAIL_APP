import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import Header from "components/HeaderForMainScreen/HeaderMain";
import InputTextWithoutIcon from "components/InputTextWithoutIcon/InputText";
import styles from "./Style";
import DropDown from "components/DropDown/DropDown";
import Footer from "./component/Footer";
import PlanCompleted from "./component/PlanCompleted";


const CreateVisitPlan: React.FC<{}> = (props: any) => {
  const [CurrentScreen, setCurrentScreen] = useState<string>("");
  // const [open, setOpen] = useState(false)
  // const [date, setDate] = useState(new Date())
  // const [dateData, setDateData] = useState("Visit Date")
  const Data = [
    { segment: "A" },
    { segment: "A" },
    { segment: "A" },
    { segment: "A" },
    { segment: "A" },
    { segment: "A" },
  ];
  function setScreen(param: string) {
    setCurrentScreen(param);
  }
  return (
    <SafeAreaView style={{flex:1}}>
      {CurrentScreen != "Submitted" ? (
        <>
          <ScrollView style={{ backgroundColor: "#F9F9FC"}}>
            <Header topheading="Create Visit Plan" />
            <View style={{ marginVertical: 23,paddingHorizontal:20}}>
              <View style={styles.inputbox}>
                <InputTextWithoutIcon
                  placeholder="Enter Customer Code"
                  ChangeText={(text: any) => {}}
                  keyboardType={"default"}
                  secureText={false}
                  maxLength={20}
                />
              </View>
              <View style={styles.inputbox}>
                <InputTextWithoutIcon
                  placeholder="Enter Name"
                  ChangeText={(text: any) => {}}
                  keyboardType={"default"}
                  secureText={false}
                  maxLength={20}
                />
              </View>
              <View style={styles.inputbox}>
                <InputTextWithoutIcon
                  placeholder="Enter Nick Name"
                  ChangeText={(text: any) => {}}
                  keyboardType={"default"}
                  secureText={false}
                  maxLength={20}
                />
              </View>

              <DropDown
                data={Data}
                heading="Customer Region"
                setReason={() => {}}
              />
              <DropDown
                data={Data}
                heading="Select Visiting Executive"
                setReason={() => {}}
              />

              <DropDown
                data={Data}
                heading="Select Reason"
                setReason={() => {}}
              />
              <DropDown
                data={Data}
                heading="Select Mode of Contact"
                setReason={() => {}}
              />
            </View>
          </ScrollView>
          <Footer setScreen={setScreen} />
        </>
      ) : (
        <>
          <Header topheading="Create Visit Plan" />
          <PlanCompleted />
        </>
      )}
    </SafeAreaView>
  );
};
export default CreateVisitPlan;
