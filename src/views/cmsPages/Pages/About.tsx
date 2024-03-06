import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Glyphs from "assets/Glyphs";
import { ScrollView } from "react-native-gesture-handler";

interface Props {
  setScreen: Function;
}

const About: React.FC<Props> = ({ setScreen }: Props) => {
  const Data = [
    { tag: "Operations" },
    { tag: "Product Mix & Marketing" },
    { tag: "Management Team" },
  ];
  const [pages, setpages] = useState<string>("intial");
  // const [openStatus,setOpenStatus]=useState<boolean>(false);
  const [openStatus, setOpenStatus] = useState({
    operation: false,
    productMix: false,
    Management: false,
  });
  function renderItem(item: any) {
    function Pagescontrol() {
      if (item.item.tag == "Operations") {
        setpages("Operations");
      } else if (item.item.tag == "Product Mix & Marketing") {
        setpages("Product Mix & Marketing");
      } else if (item.item.tag == "Management Team") {
        setpages("Management Team");
      }

      console.log("page tyope::", item.item.tag);
    }

    function handleOpenStatus() {
      if (item.item.tag == "Operations") {
        setOpenStatus({
          ...openStatus,
          operation: !openStatus.operation,
        });
      } else if (item.item.tag == "Product Mix & Marketing") {
        setOpenStatus({
          ...openStatus,
          productMix: !openStatus.productMix,
        });
      } else if (item.item.tag == "Management Team") {
        setOpenStatus({
          ...openStatus,
          Management: !openStatus.Management,
        });
      }
    }
    return (
      <>
        <View
          style={{
            height: 62,
            width: '100%',
            backgroundColor: '#FFFFFF',
            marginTop: 16,
            flexDirection: "row",
            paddingHorizontal:20,
            justifyContent:'space-between',
          }}
        >
          <Text
            style={{
              height: 25,
              fontWeight: "500",
              fontSize: 14,
              lineHeight: 24,
              color: "#110F24",
              marginTop: 19,
            }}
          >
            {item.item.tag}
          </Text>
          <TouchableOpacity
            onPress={() => {
              handleOpenStatus();
              Pagescontrol();
            }}
          >
            <Image
              source={Glyphs.Add}
              style={{
                transform: [{ rotate: "0deg" }],
                marginTop: 19,
              }}
            />
          </TouchableOpacity>
        </View>
        {pages == "Operations" &&
          openStatus.operation &&
          item.item.tag == "Operations" && (
            <Text
              style={{
                backgroundColor: "#FFFFFF",
                color: "black",
                lineHeight: 20,
                marginRight: 27,
                paddingLeft: 20,
                width: '100%',
                paddingBottom: 10,
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              totam aliquam ipsa nobis. Aliquam ducimus recusandae facilis vel
              possimus, veritatis, excepturi, culpa iusto ipsam doloremque
              repudiandae dolore. Exercitationem, molestiae laudantium.
            </Text>
          )}
        {pages == "Product Mix & Marketing" &&
          openStatus.productMix &&
          item.item.tag == "Product Mix & Marketing" && (
            <Text
              style={{
                backgroundColor: "#FFFFFF",
                color: "black",
                lineHeight: 20,
                marginRight: 27,
                width: 363,
                paddingLeft: 20,
                paddingBottom: 10,
              }}
            >
              Product Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Rerum totam aliquam ipsa nobis. Aliquam ducimus recusandae facilis
              vel possimus, veritatis, excepturi, culpa iusto ipsam doloremque
              repudiandae dolore. Exercitationem, molestiae laudantium.
            </Text>
          )}
        {pages == "Management Team" &&
          openStatus.Management &&
          item.item.tag == "Management Team" && (
            <Text
              style={{
                backgroundColor: "#FFFFFF",
                color: "black",
                lineHeight: 20,
                marginRight: 27,
                width: 363,
                paddingLeft: 20,
                paddingBottom: 10,
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              totam aliquam ipsa nobis. Aliquam ducimus recusandae facilis vel
              possimus, veritatis, excepturi, culpa iusto ipsam doloremque
              repudiandae dolore. Exercitationem, molestiae laudantium.
            </Text>
          )}
      </>
    );
  }
  return (
    <ScrollView style={{}}>
      <SafeAreaView>
        <StatusBar backgroundColor={"#233972"} barStyle={"light-content"} />
        <View
          style={{
            height: 40,
            width: "100%",
            backgroundColor: "#233972",
            flexDirection: "row",
            paddingLeft:20,
            alignItems:'center',
            justifyContent:'flex-start'
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setScreen("CMS");
            }}
          >
            <Image
              source={Glyphs.Arrow}
              style={{
                tintColor: "#FFFFFF",
                width: 9,
                height: 15,
                transform: [{ rotate: "180deg" }],
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 13,
              color: "#FFFFFF",
              marginLeft: 16,
              height: 36,
              fontWeight: "600",
              fontSize: 16,
            }}
          >
            About Us
          </Text>
        </View>
      </SafeAreaView>
      <View style={{paddingHorizontal:20}}>

      <Image
        source={Glyphs.Sail}
        style={{ height: 100, width: 100, resizeMode: "contain",marginTop:20}}
      />
      <Text style={{ color: "black", marginTop: 20, lineHeight: 20 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lacus
        vitae nulla mattis ultrices. Sed dictum sem id erat fringilla, et
        ultrices tellus euismod. Nullam vitae ligula lectus.
      </Text>
      <FlatList
        data={Data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        
      />
      <Text
        style={{
          color: "#233972",
          fontWeight: "500",
          marginTop: 16,
        }}
      >
        Contact
      </Text>
      <Text style={{ lineHeight: 20, color: "black" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minus
        deleniti non voluptate vitae a, vero officiis, ab quos tempora expedita
        itaque velit neque dolor veniam et, repudiandae quam suscipit.
      </Text>
      <Text
        style={{
          color: "#233972",
          fontWeight: "500",
          marginTop: 20,
        }}
      >
        Website
      </Text>
      <Text style={{ lineHeight: 20, color: "black" }}>
        www.sail.co.in
      </Text>
      </View>
    </ScrollView>
  );
};

export default About;
