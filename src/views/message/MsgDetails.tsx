import React from "react";
import { ScrollView, View } from "react-native";
import ForwardCard from "./component/ForwarnCard";
import styles from "views/message/Style/Style";
import StringConstants from "shared/localization";
import { Header, RectangularBox, SafeAreaContainer } from "components";
import { MessageDetailField } from "@shared-constants";
import { AllEscalation} from "models/ApiResponses/MessageResponse";
import { FlatList } from "react-native-gesture-handler";

interface IMsg {
  msgData: any;
}

const MsgDetails = (props: IMsg) => {
  const renderMessageDetail = (item: any, index: number) => {
    return (
      <RectangularBox
        heading={MessageDetailField[index]}
        subHeading={item}
        isRightNotIconRequired
        isCustomerColumn
      />
    );
  };

  const renderEscalatedCard = (item: AllEscalation, _: number) => {
    return (
      <ForwardCard
        escalated_by={item?.escalated_by?.user_name}
        escalated_to={item?.escalated_to?.user_name}
        escalation_comment={item?.escalation_comment}
        resolving_comment={item?.resolving_comment}
      />
    );
  };

  
  return (
    <>
      <Header topheading={StringConstants.MESSAGE_DETAILS} />
      <SafeAreaContainer>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}
        >
          <FlatList
            data={[
              props?.msgData?.customer_data?.customer_code,
              props?.msgData?.customer_data?.company_name,
              props?.msgData?.customer_data?.type?.type_name,
              props?.msgData?.visit_data?.reason.name,
              props?.msgData?.issue_name?.name,
              props?.msgData?.comment,
            ]}
            renderItem={({ item, index }) => renderMessageDetail(item, index)}
            scrollEnabled={false}
          />
          <View style={{ paddingHorizontal: 20 }}>
            <FlatList
              data={props?.msgData?.allEscalations}
              renderItem={({ item, index }) => renderEscalatedCard(item, index)}
              scrollEnabled={false}
            />
          </View>
        </ScrollView>
      </SafeAreaContainer>
    </>
  );
};
export default MsgDetails;
