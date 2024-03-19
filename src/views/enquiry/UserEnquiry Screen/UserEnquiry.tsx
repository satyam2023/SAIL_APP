import React, { useRef, useState } from "react";
import { LocationData, DataOfPerson } from "./Data/LocationData";
import SearchResult from "./component/SearchResultBox/Searchresult";
import { lightgrey, darkgrey, Colors } from "commonStyles/RNColor.style";
import CustomButton from "components/CustomButton";
import CustomDropDown from "components/CustomDropDown";
import InputTextField from "components/InputTextField";
import SafeAreaContainer from "components/SafeAreaContainer";
import StringConstants from "shared/localization";

const UserEnquiry = () => {
  const [searchresult, setsearchresult] = useState<boolean>(false);

  const [data, setdata] = useState({
    name: "",
    phone: "",
    place: "",
  });
  const details = {
    name: useRef(""),
  };
 

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
    <SafeAreaContainer >
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
        topheading={StringConstants.LOCATION}
      />
      {!searchresult ? (
        <CustomButton
          onPress={SearchingData}
          text={StringConstants.SEARCH}
          buttonStyle={{ backgroundColor: lightgrey }}
          textStyle={{ color: darkgrey }}
        />
      ) : (
        <SearchResult name={data.name} place={data.place} phone={data.phone} />
      )}
    </SafeAreaContainer>
  );
};

export default UserEnquiry;
