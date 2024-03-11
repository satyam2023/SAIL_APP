import React from "react";
import { FlatList } from "react-native";

import Header from "components/HeaderForMainScreen/HeaderMain";
import StringConstants from "shared/localization";
import CustomToggleBox from "components/CustomToggleBox";
import SafeAreaContainer from "components/SafeAreaContainer";
import { Colors } from "commonStyles/RNColor.style";

interface Props {
  setScreen: (arg: string) => void;
}

const FAQs = ({ setScreen }: Props) => {
  const Data = [
    { tag: "How do i get Enlisted" },
    { tag: "What are 'Third Parties'?" },
    { tag: "What does information mean?" },
    { tag: "Who are 'Third Parties'?" },
    { tag: "What does information mean?" },
    { tag: "How do i get Enlisted?" },
    { tag: "What is not open to disclosure?" },
    { tag: "What does information mean?" },
  ];
  function renderItem(item: any) {
    return (
      <CustomToggleBox
        heading={item.item.tag}
        toggleContent={StringConstants.LOREM_TEXT}
        rightIconisPlus={true}
      />
    );
  }
  return (
    <>
      <Header
        topheading={StringConstants.FAQS}
        onPress={() => setScreen(StringConstants.CMS)}
      />
      <SafeAreaContainer backgroundColor={Colors.background2}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          style={{ marginTop: 16 }}
        />
      </SafeAreaContainer>
    </>
  );
};

export default FAQs;
