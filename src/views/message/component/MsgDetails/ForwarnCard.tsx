import React from "react";
import { Text, View } from "react-native";
const ForwardCard = () => {
  return (
    <View
      style={{
        backgroundColor: "#F9F9FC",
        marginTop: 16,
        borderWidth: 1,
        borderColor: "#DFDEE1",
        width:'100%',
        height: 136,
        paddingHorizontal:16
      }}
    >
      <View style={{ marginBottom: 16 }}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              marginTop: 17,
              fontWeight: "400",
              fontSize: 14,
              height: 14,
            //   width: 78,
              lineHeight: 14,
              color: "#110F2480",
            }}
          >
            Forward by
          </Text>
          <Text
            style={{
              marginLeft: 11,
              marginTop: 16,
              fontWeight: "500",
              fontSize: 12,
              lineHeight: 16,
              height: 16,
            //   width: 132,
            // alignSelf:'center',
              color: "#110F24",
            }}
          >
            John Doe
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              marginTop: 13,
            //   width: 75,
              height: 14,
              fontWeight: "400",
              fontSize: 14,
              lineHeight: 14,
              color: "#110F2480",
            }}
          >
            Forward To
          </Text>
          <Text
            style={{
              marginLeft: 15,
              marginTop: 12,
              fontWeight: "500",
              fontSize: 12,
              lineHeight: 16,
              height: 16,
             
              color: "#110F24",
            }}
          >
            Kiara Sharma
          </Text>
        </View>
        <Text
          style={{
            marginTop: 14,
            fontWeight: "400",
            fontSize: 14,
            lineHeight: 14,
            // width: 79,
            color: "#110F2480",
          }}
        >
          Comments
        </Text>
        <Text
          style={{
            marginTop: 4,
            fontWeight: "500",
            color: "#110F24",
            // width: 263,
            fontSize: 12,
            lineHeight: 16,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea debitis
          saepe.
        </Text>
      </View>
    </View>
  );
};
export default ForwardCard;
