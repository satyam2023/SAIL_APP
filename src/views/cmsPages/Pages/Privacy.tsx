import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Glyphs from "assets/Glyphs";

interface Props {
  setScreen: Function;
}

const Privacy: React.FC<Props> = ({ setScreen }: Props) => {
  return (
    <ScrollView style={{ backgroundColor: "#FAFAFA", height: "auto" }}>
      <SafeAreaView>
        <StatusBar backgroundColor={"#233972"} barStyle={"light-content"} />
        <View
          style={{
            height: 60,
            width: "100%",
            backgroundColor: "#233972",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{ marginLeft: 21, marginTop: 18 }}
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
            Privacy
          </Text>
        </View>
      </SafeAreaView>

      <Text
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          color: "black",
          lineHeight: 20,
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil eaque
        laboriosam animi corporis mollitia. Ducimus, nemo deleniti animi ex sunt
        adipisci rerum quisquam perferendis cupiditate, corporis porro, atque
        architecto velit.
      </Text>

      <Text
        style={{
          color: "black",
          marginLeft: 20,
          marginTop: 30,
          fontWeight: "500",
        }}
      >
        Information we collect:
      </Text>
      <Text
        style={{
          marginHorizontal: 20,
          marginTop: 8,
          color: "black",
          lineHeight: 20,
        }}
      >
        When you see our app we may collect the following personal information:
        {`\n`}
        {`\u2022`}
        <Text style={{ lineHeight: 25, marginLeft: 5 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
          {`\n`} {`\u2022`}Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt
          {`\n`} {`\u2022`}Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt
          {`\n`} {`\u2022`}Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt
          {`\n`} {`\u2022`}Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt
        </Text>
      </Text>

      <Text
        style={{
          marginHorizontal: 20,
          marginTop: 8,
          color: "black",
          lineHeight: 20,
        }}
      >
        How we use your information: we may use your information for the
        following purpose{`\n`}
        {`\u2022`}
        <Text style={{ lineHeight: 25, marginLeft: 5 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
          {`\n`} {`\u2022`}Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt
          {`\n`} {`\u2022`}Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt
          {`\n`} {`\u2022`}Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt
          {`\n`} {`\u2022`}Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt
        </Text>
      </Text>

      <Text
        style={{
          color: "black",
          marginLeft: 20,
          marginTop: 30,
          fontWeight: "500",
        }}
      >
        Third Party Services:
      </Text>
      <Text
        style={{
          marginHorizontal: 20,
          marginTop: 8,
          color: "black",
          lineHeight: 20,
        }}
      >
        When you see our app we may collect the following personal information
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquid,
        doloribus eaque dolores impedit earum fuga doloremque temporibus?
        Recusandae ea molestiae suscipit earum veniam voluptatum reiciendis
        natus sint possimus facere!{`\n`}
      </Text>
    </ScrollView>
  );
};

export default Privacy;
