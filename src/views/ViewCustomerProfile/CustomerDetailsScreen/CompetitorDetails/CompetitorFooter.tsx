import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {  useDispatch } from "react-redux";
import { setCompetitorButtonStatus } from "redux/actions/UIAction";
interface CompetitorFooterProps {}
const CompetitorFooter: React.FC<CompetitorFooterProps> = () => {
  const dispatch = useDispatch();
  return (
    <View style={{position:'absolute',bottom:0,width:'100%'}}>
      <View style={{ width: "100%", backgroundColor: "#E8E8E8", height: 6 }}>
        <View style={{ width: "67%", backgroundColor: "#E67337", height: 6 }} />
      </View>
      <View style={{paddingHorizontal:20}}>
      <View style={{ height: 100, width: "100%", backgroundColor: "#FFFFFF" }}>
        <TouchableOpacity
          style={{
            height: 56,
            width: '100%',
            backgroundColor: "#233972",
            marginTop: 16,
            borderRadius: 100,
          }}
          onPress={() => {
            dispatch(setCompetitorButtonStatus(false));
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              alignItems: "center",
              marginTop: 17,
              fontWeight: "500",
              fontSize: 16,
              lineHeight: 20,
              color: "#FFFFFF",
            }}
          >
            Add Competitor
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default CompetitorFooter;
