import React, { useState } from "react";
import styles from "./Style";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Header from "components/HeaderForMainScreen/HeaderMain";
import { Data } from "./mockData/Data";
import About from "./Pages/About";
import FAQs from "./Pages/FAQs";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import Contact from "./Pages/Contact";
import Glyphs from "assets/Glyphs";
import StringConstants from "shared/localization";
import { Colors } from "commonStyles/RNColor.style";

const CMSPagesScreen = () => {
  
  const [pages, setpages] = useState<string>(StringConstants.CMS);
  const setScreen=(param:string)=>{console.log("THOS sdbf::::");setpages(param)};

  function renderItem(item: any) {
    function Pagescontrol() {
      if (item.item.tag == StringConstants.ABOUT_US) {
        setpages(StringConstants.ABOUT_US);
      } else if (item.item.tag == StringConstants.CONTACT_US) {
        setpages(StringConstants.CONTACT_US);
      } else if (item.item.tag == StringConstants.PRIVACY) {
        setpages(StringConstants.PRIVACY);
      } else if (item.item.tag == StringConstants.FAQS) {
        setpages(StringConstants.FAQS);
      } else if (item.item.tag == StringConstants.TERMS_AND_CONDITIONS) {
        setpages(StringConstants.TERMS_AND_CONDITIONS);
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
    <View style={{ backgroundColor: Colors.background2, flex: 1 }}>
      <>
        {pages == StringConstants.CMS && (
          <>
            <Header topheading={StringConstants.CMS_PAGES} />
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
        {pages == StringConstants.ABOUT_US && <About setScreen={setScreen} />}
        {pages == StringConstants.FAQS && <FAQs setScreen={setScreen} />}
        {pages == StringConstants.PRIVACY && <Privacy setScreen={setScreen} />}
        {pages == StringConstants.TERMS_AND_CONDITIONS && <Terms setScreen={setScreen} />}
        {pages == StringConstants.CONTACT_US && <Contact setScreen={setScreen} />}
      </>
    </View>
  );
};

export default CMSPagesScreen;
