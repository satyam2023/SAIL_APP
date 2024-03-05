import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { setCompetitorButtonStatus } from "redux/actions/UIAction";
interface RepresentativeFooterProps {
  RepresentativeScreen: Function;
}
const RepresentativeFooter: React.FC<RepresentativeFooterProps> = ({
  RepresentativeScreen,
}: RepresentativeFooterProps) => {
  const dispatch = useDispatch();
  return (
    <View style={{ right: 0, left: 0, height: 154, position: "relative" }}>
      <View style={{ width: "100%", backgroundColor: "#E8E8E8", height: 6 }}>
        <View style={{ width: "67%", backgroundColor: "#E67337", height: 6 }} />
      </View>
      <View style={{ height: 148, width: "100%", backgroundColor: "#FFFFFF" }}>
        <TouchableOpacity
          style={{
            height: 56,
            width: 353,
            marginLeft: 20,
            backgroundColor: "#233972",
            marginTop: 16,
            borderRadius: 100,
          }}
          onPress={() => {
            dispatch(setCompetitorButtonStatus(false));
            RepresentativeScreen(false);
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
            Add Coustmer Representative
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RepresentativeFooter;
