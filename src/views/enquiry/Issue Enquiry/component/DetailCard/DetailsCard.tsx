import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { DataOfIssue } from "../../Data/IssueData";
import Glyphs from "assets/Glyphs";
interface CardProps {
  issue: string;
  pending: string;
  date: string;
}

const DetailsCard= ({
  issue,
  date,
  pending,
}: CardProps) => {
  return (
    <View
      style={{
        height: 123,
        width: "100%",
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
        marginTop: 24,
        padding: 16,
        // alignItems:'center',
      }}
    >
      <View>
        <Text
          style={{
            // width: 71,
            height: 14,
            color: "#666666",
            fontWeight: "400",
            fontSize: 14,
            lineHeight: 14,
          }}
        >
          Issue Type
        </Text>
        <Text
          style={{
            fontWeight: "500",
            fontSize: 14,
            lineHeight: 16,
            height: 16,
            color: "#110F24",
            marginTop: 8,
          }}
        >
          {issue}
        </Text>
      </View>

      <View style={{ flexDirection: "row" ,justifyContent:'space-between'}}>
        <View style={{ marginTop: 16, flexDirection: "row" }}>
          <Image source={Glyphs.Pending}  />
          <View>
            <Text
              style={{
                height: 14,
                marginLeft: 8,
                color: "#666666",
                fontWeight: "400",
                fontSize: 12,
                lineHeight: 14,
              }}
            >
              Pending With
            </Text>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 14,
                lineHeight: 16,
                marginLeft: 8,
                height: 16,
                color: "#110F24",
                marginTop: 8,
              }}
            >
              {pending}
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 16, flexDirection: "row" }}>
          <Image source={Glyphs.date} />
          <View>
            <Text
              style={{
                height: 14,
                marginLeft: 8,
                color: "#666666",
                fontWeight: "400",
                fontSize: 14,
                lineHeight: 14,
              }}
            >
              Issue Date
            </Text>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 14,
                lineHeight: 16,
                marginLeft: 8,
                height: 16,
                color: "#110F24",
                marginTop: 8,
              }}
            >
              {date}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailsCard;
