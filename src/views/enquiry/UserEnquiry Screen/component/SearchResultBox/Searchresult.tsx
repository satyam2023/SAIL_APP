import Glyphs from "assets/Glyphs";
import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Style/Style";

interface ISearchResult {
  name: string;
  place: string;
  phone: string;
}

const SearchResult = ({ name, place, phone }: ISearchResult) => {
  return (
    <View style={styles.searchContainer}>
      <View style={{}}>
        <Text style={styles.searchText}>{name}</Text>
        <Text style={styles.searchPlace}>{place}</Text>
        <Text style={styles.searchPhone}>{phone}</Text>
      </View>

      <Image source={Glyphs.Mobile} />
    </View>
  );
};

export default SearchResult;
