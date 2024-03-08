import React, { useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./Styles";
import { DataOfIssue, LocationData } from "./Data/IssueData";
import DetailsCard from "./component/DetailCard/DetailsCard";
import { navigate } from "@navigation";
import { SCREENS } from "@shared-constants";
import CustomButton from "components/CustomButton";
import { Colors, darkgrey, lightgrey } from "commonStyles/RNColor.style";
import CustomDropDown from "components/CustomDropDown";
import InputTextField from "components/InputTextField";

const IssueEnquiry = () => {
  const [SearchBtnStatus, setSearchBtnStatus] = useState<boolean>(false);
  const [searchresult, setsearchresult] = useState<boolean>(false);
  const [data, setdata] = useState({
    issue: "",
    pending: "",
    date: "",
  });
  const details = {
    name: useRef(""),
  };

  function SearchingData() {
    for (let i = 0; i < DataOfIssue.length; i++) {
      if (
        DataOfIssue[i].name == details.name.current ||
        DataOfIssue[i].phonenumber == details.name.current
      ) {
        setdata({
          issue: DataOfIssue[i].issue,
          date: DataOfIssue[i].issuedate,
          pending: DataOfIssue[i].pendingwith,
        });

        setsearchresult(true);
        break;
      }
    }
  }

  return (
    <View
      style={styles.issueContainer}
    >
      <View
        style={styles.issueType}
      >
        <TouchableOpacity>
          <Text style={styles.openIssue}>Open Issues</Text>
          <View style={styles.line} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate(SCREENS.MAIN)}>
          <Text style={styles.resolvedIssue}>Resolved Issues</Text>
        </TouchableOpacity>
      </View>

      <InputTextField
        onChangeText={(text: string) => {
          details.name.current = text;
        }}
        placeholder={"Enter Name"}
        maxlength={20}
        containerStyle={{ backgroundColor: Colors.white }}
      />

      <CustomDropDown
        ArrayOfData={LocationData}
        topheading="Select Branch Location"
      />

      <CustomButton
        onPress={SearchingData}
        text={"Search"}
        buttonStyle={{ backgroundColor: lightgrey }}
        textStyle={{ color: darkgrey }}
      />

      {searchresult ? (
        <DetailsCard
          issue={data.issue}
          pending={data.pending}
          date={data.date}
        />
      ) : (
        <></>
      )}
    </View>
  );
};

export default IssueEnquiry;
