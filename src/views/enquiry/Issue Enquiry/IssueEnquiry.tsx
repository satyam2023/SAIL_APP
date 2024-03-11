import React, {  useRef, useState } from "react";
import {  TouchableOpacity, View } from "react-native";
import styles from "./Styles";
import { DataOfIssue, LocationData } from "./Data/IssueData";
import DetailsCard from "./component/DetailCard/DetailsCard";
import { navigate } from "@navigation";
import { SCREENS } from "@shared-constants";
import CustomButton from "components/CustomButton";
import { Colors, darkgrey, lightgrey } from "commonStyles/RNColor.style";
import CustomDropDown from "components/CustomDropDown";
import InputTextField from "components/InputTextField";
import StringConstants from "shared/localization";
import TextWrapper from "components/TextWrapper";

const IssueEnquiry = () => {
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
          <TextWrapper style={[styles.openIssue]}>{StringConstants.OPEN_ISSUES}</TextWrapper>
          <View style={styles.line} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate(SCREENS.MAIN)}>
          <TextWrapper style={styles.resolvedIssue}>{StringConstants.RESOLVED_ISSUES}</TextWrapper>
        </TouchableOpacity>
      </View>

      <InputTextField
        onChangeText={(text: string) => {
          details.name.current = text;
        }}
        placeholder={StringConstants.ENTER_NAME}
        maxlength={20}
        containerStyle={{ backgroundColor: Colors.white }}
      />

      <CustomDropDown
        ArrayOfData={LocationData}
        topheading={StringConstants.SELECT_BRANCH_LOCATION}
      />

      <CustomButton
        onPress={SearchingData}
        text={StringConstants.SEARCH}
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
