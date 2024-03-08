import React, { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import styles from "./Style";
import { LocationData, DataOfPerson } from "./Data/LocationData";
import SearchResult from "./component/SearchResultBox/Searchresult";
import { lightgrey, darkgrey, Colors } from "commonStyles/RNColor.style";
import CustomButton from "components/CustomButton";
import CustomDropDown from "components/CustomDropDown";
import InputTextField from "components/InputTextField";
import Glyphs from "assets/Glyphs";

const Enquiry = () => {
  const [CurrentLocation, setCurrentLocation] = useState<string>();
  const [FocusStatus, setFocusStatus] = useState<boolean>(false);
  const [SearchBtnStatus, setSearchBtnStatus] = useState<boolean>(false);
  const [searchresult, setsearchresult] = useState<boolean>(false);
  console.log("Main UI E-REnder::");
  const [data, setdata] = useState({
    name: "",
    phone: "",
    place: "",
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

  function SearchingData() {
    for (let i = 0; i < DataOfPerson.length; i++) {
      if (DataOfPerson[i].name == details.name.current) {
        setdata({
          name: DataOfPerson[i].name,
          phone: DataOfPerson[i].phonenumber,
          place: DataOfPerson[i].location,
        });
        setsearchresult(true);
        break;
      }
    }
  }

  const getData = (data: string) => {
    setCurrentLocation(data);
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: "#F9F9FC", flex: 1, paddingHorizontal: 20 }}
    >
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
        topheading="Location"
      />
      {!searchresult ? (
        <CustomButton
          onPress={SearchingData}
          text={"Search"}
          buttonStyle={{ backgroundColor: lightgrey }}
          textStyle={{ color: darkgrey }}
        />
      ) : (
        <SearchResult name={data.name} place={data.place} phone={data.phone} />
      )}
    </SafeAreaView>
  );
};

export default Enquiry;
