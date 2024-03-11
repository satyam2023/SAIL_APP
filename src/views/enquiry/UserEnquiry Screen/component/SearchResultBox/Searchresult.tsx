import Glyphs from "assets/Glyphs";
import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Style/Style";
import TextWrapper from "components/TextWrapper";
import commonStyles from "commonStyles/CommonStyle";

interface ISearchResult {
  name: string;
  place: string;
  phone: string;
}

const SearchResult = ({ name, place, phone }: ISearchResult) => {
  return (
    <View style={styles.searchContainer}>
      <View>
        <TextWrapper style={commonStyles.font14MediumBlack}>{name}</TextWrapper>
        <TextWrapper style={[commonStyles.font14RegularGray,{marginTop:5}]}>{place}</TextWrapper>
        <TextWrapper style={[commonStyles.font14RegularGray,{marginTop:5}]}>{phone}</TextWrapper>
      </View>
      <Image source={Glyphs.Mobile} />
    </View>
  );
};

export default SearchResult;
