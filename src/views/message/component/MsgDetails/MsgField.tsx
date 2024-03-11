import commonStyles from "commonStyles/CommonStyle";
import TextWrapper from "components/TextWrapper";
import React from "react";
import { View, Text } from "react-native";
interface FieldProps {
  heading: string;
  body: string;
}

const MsgField = ({ heading, body }: FieldProps) => {
  return (
    <View style={{ marginTop: 16 }}>
      <Text style={commonStyles.font14RegularGray}>{heading}</Text>
      <TextWrapper
        style={[
          {
            marginTop: 8,
          },
          commonStyles.font14MediumBlack,
        ]}
      >
        {body}
      </TextWrapper>
    </View>
  );
};

export default MsgField;
