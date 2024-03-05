import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "components/HeaderForMainScreen/HeaderMain";
import CommonButton from "components/Button/CommonButton";
import styles from "./Style";
import ForPlannedVisit from "./forPlannedVisit/ForPlannedVisit";
import AddUnplannedVisit from "./addUnplannedVisit/AddUnplannedVisit";
import MeetingCompleted from "./MeetingSuccess/MeetingCreationSucess";
import Glyphs from "assets/Glyphs";

const Meeting: React.FC<{}> = (props: any) => {
  const [click, setClicked] = useState<string>("For Planned Visit");
  const [SuccessStatus, setSuccessStatus] = useState<boolean>(false);
  function setVisitSuccess(param: any) {
    setSuccessStatus(param);
  }
  console.log("success status::", SuccessStatus);
  return (
    <>
      {!SuccessStatus ? (
        <SafeAreaView style={{ backgroundColor: "#F9F9FC" }}>
          <Header topheading={"Create Meeting Details"} />
          <View style={{ flexDirection: "row", marginLeft: 21 }}>
            <TouchableOpacity
              onPress={() => {
                setClicked("For Planned Visit");
              }}
            >
              <CommonButton
                text="For Planned Visit"
                Clickedstatus={click == "For Planned Visit" ? true : false}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setClicked("Add Unplanned Visits");
              }}
            >
              <CommonButton
                text="Add Unplanned Visits"
                Clickedstatus={click == "Add Unplanned Visits" ? true : false}
              />
            </TouchableOpacity>
          </View>

          {click == "For Planned Visit" ? (
            <>
              <View style={styles.searchbar}>
                <TextInput
                  placeholder="Enter Customer Code or Name"
                  placeholderTextColor={"#00000080"}
                  style={styles.textinput}
                />
                <TouchableOpacity>
                  <Image
                    source={Glyphs.Search}
                    style={{ marginLeft: 8, marginTop: 18 }}
                  />
                </TouchableOpacity>
              </View>
              <ForPlannedVisit />
              <ForPlannedVisit />
              <ForPlannedVisit />
            </>
          ) : (
            <AddUnplannedVisit
              navigationProps={props}
              setVisitSuccess={setVisitSuccess}
            />
          )}
        </SafeAreaView>
      ) : (
        <>
          <MeetingCompleted navigationProps={props} />
        </>
      )}
    </>
  );
};

export default Meeting;
