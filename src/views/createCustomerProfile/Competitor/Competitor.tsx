import React, { forwardRef, useImperativeHandle, useState } from "react";
import { View } from "react-native";
import CustomerDetailHeader from "../CustomerDetailHeader";
import StringConstants from "shared/localization";
import { Colors } from "commonStyles/RNColor.style";
import CustomButton from "components/CustomButton";
import fonts from "@fonts";
import CompetitorDetail from "./CompetitorDetail";
interface RepresenatativeProps {
  addDetails: Function;
  ref?: any;
}
const CustomerRepresentative = (
  { addDetails }: RepresenatativeProps,
  ref: any,
) => {
  const [competitor, setCompetitor] = useState<boolean>(false);
  useImperativeHandle(ref, () => {
    return {
      setDetails: () => {
        setCompetitor(false);
      },
    };
  });
  return (
    <>
      {!competitor ? (
        <>
          <CustomerDetailHeader
            heading={StringConstants.ADD_COMPETITOR_DETAILS}
            CurrentScreen={3}
            topheading={StringConstants.CREATE_CUSTOMER_PROFILE}
          />

          <View style={{ paddingHorizontal: 20 }}>
            <CustomButton
              text={StringConstants.PLUS_COMPETITOR}
              buttonStyle={{
                backgroundColor: Colors.dashed,
                justifyContent: "flex-start",
              }}
              textStyle={{ fontFamily: fonts.type.regular }}
              onPress={() => {
                addDetails(true);
                setCompetitor(true);
              }}
            />
          </View>
        </>
      ) : (
        <CompetitorDetail />
      )}
    </>
  );
};

export default forwardRef(CustomerRepresentative);
