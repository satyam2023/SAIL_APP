import React from "react";
import { Image, ScrollView, TextInput, View } from "react-native";
import ForwardCard from "./component/MsgDetails/ForwarnCard";
import styles from "views/message/Style/Style";
import Glyphs from "assets/Glyphs";
import StringConstants from "shared/localization";
import { Colors } from "react-native/Libraries/NewAppScreen";
import commonStyles from "commonStyles/CommonStyle";
import { CustomButton, Header, RectangularBox, SafeAreaContainer, TextWrapper } from "components";
import { IMessageDetailField, MessageDetailField } from "views/message/mockData/Data";

const MsgDetails = () => {

const renderMessageDetail=(item:IMessageDetailField,index:number)=>{
return(
<RectangularBox
key={index}
heading={item.heading}
subHeading={item.subheading}
isRightNotIconRequired
isCustomerColumn
/>
);
}

  return (
    <>
      <Header topheading={StringConstants.MESSAGE_DETAILS} />
      <SafeAreaContainer>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}
        >
          {
            MessageDetailField.map((item:IMessageDetailField,index:number)=>renderMessageDetail(item,index))
          }
       <View style={{paddingHorizontal:20}}>
          <ForwardCard />
          <ForwardCard />
          <ForwardCard />
          <View style={styles.escalateBox}>
            <View>
              <TextWrapper style={commonStyles.font14RegularGray}>
                {StringConstants.ESCALATED_TO}
              </TextWrapper>
              <TextWrapper
                style={[commonStyles.font14RegularBlack, { marginTop: 5 }]}
              >
                {StringConstants.TITLE}
              </TextWrapper>
            </View>

            <Image
              source={Glyphs.Arrow}
              style={[{
                tintColor: Colors.darkGrey,
              },commonStyles.icon]}
            />
          </View>

          <View style={styles.commentBox}>
            <TextWrapper
              style={[{ marginTop: 8 }, commonStyles.font14RegularBlack]}
            >
              {StringConstants.ADD_COMMENT}
            </TextWrapper>
            <TextInput
              multiline={true}
              placeholder={StringConstants.REMARKS}
              placeholderTextColor={Colors.black}
            />
          </View>
          <CustomButton
            text={StringConstants.SUBMIT}
            buttonStyle={{ backgroundColor: Colors.sailBlue }}
            textStyle={{ color: Colors.white }}
          />
          </View>
        </ScrollView>
      </SafeAreaContainer>
    </>
  );
};
export default MsgDetails;
