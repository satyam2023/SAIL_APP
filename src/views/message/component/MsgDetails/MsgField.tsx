import React from "react";
import { View, Text } from "react-native";
interface FieldProps {
  heading: string;
  body: string;
}

const MsgField = ({ heading, body }: FieldProps) => {
  return (
    <View style={{ marginTop: 16 }}>
      <Text style={{ fontWeight: "400", fontSize: 14, lineHeight: 14 }}>
        {heading}
      </Text>
      <Text
        style={{
          fontWeight: "500",
          fontSize: 12,
          lineHeight: 16,
          color: "#110F24",
          marginTop: 8,
        }}
      >
        {body}
      </Text>
    </View>
  );
};

export default MsgField;
