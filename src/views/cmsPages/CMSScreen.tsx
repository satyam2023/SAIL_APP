import React, { useState } from "react";
import { ICMSPageData } from "./mockData/Data";
import styles from "./Style";
import { FlatList, Image, SafeAreaView, View } from "react-native";
import Header from "components/AppHeader";
import { Data } from "./mockData/Data";
import About from "./Pages/About";
import FAQs from "./Pages/FAQs";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import Contact from "./Pages/Contact";
import Glyphs from "assets/Glyphs";
import StringConstants from "shared/localization";
import { PressableButton, TextWrapper } from "components";
import commonStyles from "commonStyles/CommonStyle";
import { Colors } from "commonStyles/RNColor.style";
const CMSPagesScreen = () => {
  const [pages, setpages] = useState<string>(StringConstants.CMS);
  const setScreen = (param: string) => {
    setpages(param);
  };

  function renderItem(item: ICMSPageData, index: number) {
    function Pagescontrol() {
      switch (item.tag) {
        case StringConstants.ABOUT_US:
          setpages(StringConstants.ABOUT_US);
          break;
        case StringConstants.CONTACT_US:
          setpages(StringConstants.CONTACT_US);
          break;
        case StringConstants.PRIVACY:
          setpages(StringConstants.PRIVACY);
          break;
        case StringConstants.FAQS:
          setpages(StringConstants.FAQS);
          break;
        case StringConstants.TERMS_AND_CONDITIONS:
          setpages(StringConstants.TERMS_AND_CONDITIONS);
          break;
      }
    }

    return (
      <View style={styles.container}>
        <TextWrapper style={commonStyles.font14MediumBlackpearl}>
          {item.tag}
        </TextWrapper>
        <PressableButton onPress={Pagescontrol}>
          <Image source={Glyphs.Arrow} />
        </PressableButton>
      </View>
    );
  }
  return (
    <SafeAreaView style={{ backgroundColor: Colors.background, flex: 1 }}>
      <>
        {pages == StringConstants.CMS && (
          <>
            <Header topheading={StringConstants.CMS_PAGES} />
            <FlatList
              data={Data}
              renderItem={({ item, index }) => renderItem(item, index)}
              showsVerticalScrollIndicator={false}
              style={{ paddingHorizontal: 20, marginTop: 20 }}
            />
          </>
        )}
        {pages == StringConstants.ABOUT_US && <About setScreen={setScreen} />}
        {pages == StringConstants.FAQS && <FAQs setScreen={setScreen} />}
        {pages == StringConstants.PRIVACY && <Privacy setScreen={setScreen} />}
        {pages == StringConstants.TERMS_AND_CONDITIONS && (
          <Terms setScreen={setScreen} />
        )}
        {pages == StringConstants.CONTACT_US && (
          <Contact setScreen={setScreen} />
        )}
      </>
    </SafeAreaView>
  );
};

export default CMSPagesScreen;
