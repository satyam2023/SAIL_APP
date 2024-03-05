import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import DropDown from "components/DropDown/DropDown";
import { CustomerType } from "../dataForDropDown/data";
import Glyphs from "assets/Glyphs";

const Issue: React.FC<{}> = () => {
  const [issue, setIssue] = useState<boolean>(true);
  return (
    <>
      {issue ? (
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
            marginTop: 16,
            borderRadius: 33,
            paddingHorizontal:16,
            height: 58,
            width: '100%',
            justifyContent:'space-between',
          }}
        >
          <Text
            style={{
              color: "#00000080",
              marginLeft: 16,
              fontWeight: "400",
              fontSize: 14,
              lineHeight: 17.5,
              marginTop: 16,
            }}
          >
            Select Issue
          </Text>
          <TouchableOpacity
            onPress={() => {
              setIssue(!issue);
            }}
          >
            <Image
              source={Glyphs.Arrow}
              style={{
                marginTop: 16,
                transform: [{ rotate: "90deg" }],
                // marginLeft: 216,
                tintColor: "#00000080",
              }}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView
          style={{
            height: 380,
            width: 353,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#E8E8E8",
            marginTop: 16,
            marginLeft: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#000000",
                marginLeft: 16,
                fontWeight: "400",
                fontSize: 14,
                lineHeight: 17.5,
                marginTop: 16,
              }}
            >
              Select Issue
            </Text>
            <TouchableOpacity
              onPress={() => {
                setIssue(true);
              }}
            >
              <Image
                source={Glyphs.Arrow}
                style={{
                  marginTop: 16,
                  transform: [{ rotate: "270deg" }],
                  marginLeft: 216,
                }}
              />
            </TouchableOpacity>
          </View>
          <DropDown
            heading="Select Issue"
            data={CustomerType}
            setReason={() => {}}
          />
          <TouchableOpacity
            style={{
              height: 56,
              width: 321,
              marginLeft: 16,
              marginTop: 16,
              borderRadius: 33,
              backgroundColor: "#FFFFFF",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontWeight: "400",
                fontSize: 14,
                lineHeight: 17.5,
                color: "#110F2480",
                width: 72,
                height: 18,
                marginLeft: 14.5,
                marginTop: 19,
              }}
            >
              Comment
            </Text>
            <Image
              source={Glyphs.Mic}
              style={{ marginLeft: 198, marginTop: 16 }}
            />
          </TouchableOpacity>

          <DropDown
            heading="Escalated To"
            data={CustomerType}
            setReason={() => {}}
          />

          <TouchableOpacity
            style={{
              height: 56,
              width: 321,
              marginLeft: 16,
              marginTop: 16,
              borderRadius: 33,
              backgroundColor: "#FFFFFF",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontWeight: "400",
                fontSize: 14,
                lineHeight: 17.5,
                color: "#110F2480",
                width: 147,
                height: 18,
                marginLeft: 14.5,
                marginTop: 19,
              }}
            >
              Escalation Comment
            </Text>
            <Image
              source={Glyphs.Mic}
              style={{ marginLeft: 120, marginTop: 16 }}
            />
          </TouchableOpacity>
        </ScrollView>
      )}
    </>
  );
};
export default Issue;
