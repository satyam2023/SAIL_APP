import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native";
import styles from "./Style";
import { LocationData, DataOfPerson } from "./Data/LocationData";
import Glyphs from "assets/Glyphs";
import SearchResult from "./component/SearchResultBox/Searchresult";

const Enquiry = () => {
  const [CurrentLocation, setCurrentLocation] =
    useState<String>("Select Location");
  const [locationStatus, setLocationStatus] = useState<boolean>(false);
  const [FocusStatus, setFocusStatus] = useState<boolean>(false);
  const [LocationFOcusStatus, setLocationFocusStatus] =
    useState<boolean>(false);
  const [SearchBtnStatus, setSearchBtnStatus] = useState<boolean>(false);
  const [searchresult, setsearchresult] = useState<boolean>(false);
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

  function RenderItem(item: any) {
    return (
      <TouchableOpacity
        onPress={() => {
          setCurrentLocation(item.item.location);
          setLocationStatus(false);
          setLocationFocusStatus(true);
        }}
      >
        <Text style={styles.locationConatiner}>{item.item.location}</Text>
      </TouchableOpacity>
    );
  }

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

  return (
    <SafeAreaView
      style={{ backgroundColor: "#F9F9FC", flex: 1, paddingHorizontal: 20 }}
    >
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
          style={styles.locationFlatlist}
        />
      )}

      {!searchresult ? (
        <TouchableOpacity
          style={!SearchBtnStatus ? styles.searchbtn : styles.searchbtns}
          onPress={SearchingData}
        >
          <Text style={styles.searchTxt}>Search</Text>
        </TouchableOpacity>
      ) : (
        <SearchResult name={data.name} place={data.place} phone={data.phone} />
      )}
    </SafeAreaView>
  );
};

export default Enquiry;
