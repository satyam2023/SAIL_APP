import Glyphs from "assets/Glyphs";
import React, { forwardRef, useState } from "react";
import { Modal, Text, View } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Card from "../component/Card/Card";
import { useDispatch } from "react-redux";
import { BottomModal } from "redux/actions/UIAction";
import StringConstants from "shared/localization";
import { Colors } from "commonStyles/RNColor.style";

const BottomDrawer = forwardRef(() => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const dispatch = useDispatch();
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View
        style={{
          backgroundColor: Colors.background2,
          width: "100%",
          position: "absolute",
          bottom: 0,
          padding: 20,
          // height:'40%',
        }}
      >
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000" }}>
           {StringConstants.MORE_OPTION}
          </Text>
          <TouchableOpacity
            onPress={() => {
              dispatch(BottomModal(false));
            }}
          >
            <Image source={Glyphs.Close}  style={{height:24,width:24,resizeMode:'contain'}}/>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Card
            text={StringConstants.CREATE_VISIT_PLAN}
            image={Glyphs.CreateVisit}
          />
          <Card
            text={StringConstants.CREATE_CUSTOMER_PROFILE}
            image={Glyphs.CustomerProfile}
          />
          <Card
            text={StringConstants.CREATE_MEETING_DETAILS}
            image={Glyphs.CreateMeeting}
          />
          <Card
            text={StringConstants.VIEW_CUSTOMER_PROFILE}
            image={Glyphs.CustomerProfile}
          />
        </View>
      </View>
    </Modal>
  );
});

export default BottomDrawer;
