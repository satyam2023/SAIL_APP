import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./Styles";
import { LocationData, DataOfIssue } from "./Data/IssueData";
import DetailsCard from "./component/DetailCard/DetailsCard";
import Glyphs from "assets/Glyphs";

import { navigate } from "@navigation";
import { SCREENS } from "@shared-constants";
import CustomButton from "components/CustomButton";
import { darkgrey, lightgrey } from "commonStyles/RNColor.style";

const IssueEnquiry = () => {
  const [CurrentLocation, setCurrentLocation] = useState<String>(
    "Select Branch Location",
  );
  const [locationStatus, setLocationStatus] = useState<boolean>(false);
  const [FocusStatus, setFocusStatus] = useState<boolean>(false);
  const [LocationFOcusStatus, setLocationFocusStatus] =
    useState<boolean>(false);
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

  useEffect(() => {
    if (
      CurrentLocation != "Select Location" &&
      details.name.current.length != 0
    )
      setSearchBtnStatus(true);
  }, [CurrentLocation, FocusStatus]);

  function RenderItem(item: any) {
    return (
      <TouchableOpacity
        onPress={() => {
          setCurrentLocation(item.item.location);
          setLocationStatus(false);
          setLocationFocusStatus(true);
        }}
      >
        <Text
          style={{
            marginLeft: 16,
            borderBottomWidth: 1,
            borderColor: "#E6E6E6",
          }}
        >
          {item.item.location}
        </Text>
      </TouchableOpacity>
    );
  }

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
    <View style={{ backgroundColor: "#FCFCFC", flex: 1, paddingHorizontal: 20 ,marginTop:16}} >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity>
          <Text style={styles.openIssue}>Open Issues</Text>
          <View style={styles.line} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate(SCREENS.MAIN)}>
          <Text style={styles.resolvedIssue}>Resolved Issues</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.TextInput}>
        {FocusStatus && <Text style={styles.nameContainer}>Enter Name </Text>}
        <TextInput
          placeholder="Enter Name"
          placeholderTextColor={!FocusStatus ? "#110F2480" : "#FFFFFF"}
          style={!FocusStatus ? styles.nameNotFocus : styles.nameFocus}
          onFocus={() => {
            setFocusStatus(true);
          }}
          onChangeText={(text: string) => {
            details.name.current = text;
          }}
        />
      </View>

      <View style={styles.location}>
        {LocationFOcusStatus ? (
          <Text style={styles.locationDropDown}>Select Location </Text>
        ) : (
          <></>
        )}
        <Text
          style={
            CurrentLocation == "Select Location"
              ? styles.locationNotFocusText
              : styles.locationFocusText
          }
        >
          {CurrentLocation}
        </Text>

        <TouchableOpacity
          onPress={() => {
            setLocationStatus(!locationStatus);
          }}
        >
          <Image source={Glyphs.Arrow} style={styles.arrow} />
        </TouchableOpacity>
      </View>

      {locationStatus == true && (
        <FlatList
          data={LocationData}
          renderItem={RenderItem}
          style={styles.locationList}
        />
      )}

      <CustomButton onPress={SearchingData} text={"Search"} buttonStyle={{backgroundColor:lightgrey}} textStyle={{color:darkgrey}}/>
      
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
