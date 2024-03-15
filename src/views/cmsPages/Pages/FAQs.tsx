import React from "react";
import { FlatList } from "react-native";

import Header from "components/AppHeader";
import StringConstants from "shared/localization";
import CustomToggleBox from "components/CustomToggleBox";
import SafeAreaContainer from "components/SafeAreaContainer";
import { Colors } from "commonStyles/RNColor.style";

interface Props {
  setScreen: (arg: string) => void;
}

interface IFaqsDataField{
  tag:string

}

const FAQs = ({ setScreen }: Props) => {



  const Data = [
    { tag: StringConstants.HOW_I_GET_ENLISTED},
    { tag: StringConstants.THIRD_PARTIES },
    { tag: StringConstants.INFORMATION_MEANS},
    { tag: StringConstants.THIRD_PARTIES },
    { tag: StringConstants.INFORMATION_MEANS},
    { tag: StringConstants.HOW_I_GET_ENLISTED },
    { tag: StringConstants.NOT_DISCOSURE},
    { tag: StringConstants.INFORMATION_MEANS },
  ];

  
  function renderItem(item: IFaqsDataField,index:number) {
    return (
      <CustomToggleBox
        heading={item.tag}
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
        <FlatList
          data={Data}
          renderItem={({item,index})=>renderItem(item,index)}
          style={{ marginTop: 16 ,paddingHorizontal:20}}
        />
      
    </>
  );
};

export default FAQs;
