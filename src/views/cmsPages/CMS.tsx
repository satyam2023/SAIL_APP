import React, { useState } from "react";
import styles from "./Style";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Header from "components/HeaderForMainScreen/HeaderMain";
import About from "./Pages/About";
import FAQs from "./Pages/FAQs";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import Contact from "./Pages/Contact";
import Glyphs from "assets/Glyphs";

const CMSPages: React.FC<{}> = (props: any) => {
  const Data = [
    { tag: "About Us" },
    { tag: "Contact Us" },
    { tag: "Privacy" },
    { tag: "FAQs" },
    { tag: "Terms and Conditions" },
  ];
  const [pages, setpages] = useState<string>("CMS");

  function setScreen(param: string) {
    setpages(param);
  }

  function renderItem(item: any) {
    function Pagescontrol() {
      if (item.item.tag == "About Us") {
        setpages("About Us");
      } else if (item.item.tag == "Contact Us") {
        setpages("Contact Us");
      } else if (item.item.tag == "Privacy") {
        setpages("Privacy");
      } else if (item.item.tag == "FAQs") {
        setpages("FAQs");
      } else if (item.item.tag == "Terms and Conditions") {
        setpages("Terms and Conditions");
      }
    }
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>{item.item.tag}</Text>
        <TouchableOpacity onPress={Pagescontrol}>
          <Image
            source={Glyphs.Arrow}
            style={{
              transform: [{ rotate: "0deg" }],
              marginTop: 19,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{ backgroundColor: "#F9F9FC", flex: 1 }}>
      <>
        {pages == "CMS" && (
          <>
            <Header topheading="CMS Pages" />
            <View style={{ paddingHorizontal: 20 }}>
              <FlatList
                data={Data}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 20 }}
              />
            </View>
          </>
        )}
        {pages == "About Us" && <About setScreen={setScreen} />}
        {pages == "FAQs" && <FAQs setScreen={setScreen} />}
        {pages == "Privacy" && <Privacy setScreen={setScreen} />}
        {pages == "Terms and Conditions" && <Terms setScreen={setScreen} />}
        {pages == "Contact Us" && <Contact setScreen={setScreen} />}
      </>
    </View>
  );
};

export default CMSPages;
