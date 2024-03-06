import Glyphs from "assets/Glyphs";
import InputText from "components/InputText/InputText";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

const SearchBar=()=>
{
    return (
        <View style={{paddingHorizontal:20}}>
        <View style={styles.inputbox}>
        <View style={{ backgroundColor: "#E6E6E6", width: 0 }}>
          <Image
            source={Glyphs.Search}
            style={styles.img}
          />
        </View>
        <InputText
          placeholder="Enter Text To Search"
          ChangeText={(text: any) => {
           
          }}
          keyboardType="numeric"
          secureText={false}
          maxLength={10}
        />
      </View>
      </View>

    )
};

export default SearchBar;

const styles=StyleSheet.create(
{

    inputbox: {
        width: '100%',
        height: 56,
        borderRadius: 33,
        backgroundColor: "#FFF",
        marginTop:16,
        flexDirection: "row",
        marginBottom: 16,
      },
      img:{
        margin:16
      }


}

)