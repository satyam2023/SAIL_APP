import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../Style/Styles";
import Glyphs from "assets/Glyphs";

const CommonBox = () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <View style={{paddingHorizontal:20}}>
      <View
        style={{
          width: "100%",
          height: 72,
          backgroundColor: "#FFFFFF",
          flexDirection: "row",
          marginTop: 16,
          paddingHorizontal:16,
          justifyContent:'space-between'
        }}
      >
         <>
        <Image source={Glyphs.Notify} style={styles.img} />
        <View style={{  }}>
          <Text style={styles.companytext}>
            Visit Planned with Sahil Sharma
          </Text>
          <Text style={styles.customertext}>24 Apr</Text>
        </View>
        </>
        <TouchableOpacity
          onPress={() => {
            setVisible(!visible);
          }}
        >
          <Image
            source={Glyphs.Arrow}
            style={{
              transform: [
                !visible ? { rotate: "90deg" } : { rotate: "270deg" },
              ],
              marginTop: 24,
              width: 24,
              height: 24,
              tintColor: "#110F2480",
            }}
          />
        </TouchableOpacity>
      </View>

      {visible && (
        <View
          style={{
            backgroundColor: "#FFFFFF",
            width: '100%',
            paddingBottom: 20,
            paddingHorizontal:16,
          }}
        >
          <View style={{ flexDirection: "row",justifyContent:'space-between' }}>
            <View >
              <Text style={{ fontWeight: "500" }}>Customer Code</Text>
              <Text style={{ fontWeight: "500", color: "#000000" }}>
                1234-3444-334
              </Text>
            </View>
            <View style={{}}>
              <Text style={{ fontWeight: "500" }}>Visiting Executive</Text>
              <Text style={{ fontWeight: "500", color: "#000000" }}>
                Jai Kishor
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 16 ,justifyContent:'space-between'}}>
            <View>
              <Text style={{ fontWeight: "500" }}>Mode of conduct</Text>
              <Text style={{ fontWeight: "500", color: "#000000" }}>
                Online
              </Text>
            </View>
            <View>
              <Text style={{ fontWeight: "500" }}>Remarks</Text>
              <Text style={{ fontWeight: "500", color: "#000000" }}>
                Meeting Successful
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 16 }}>
            <View >
              <Text style={{ fontWeight: "500" }}>Reason</Text>
              <Text style={{ fontWeight: "500", color: "#000000" }}>
                Visited for Final Agreement
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default CommonBox;
