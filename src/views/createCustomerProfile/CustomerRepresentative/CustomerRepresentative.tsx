import React, { forwardRef, useImperativeHandle, useState } from "react";
import { SafeAreaView, View } from "react-native";
import CustomerDetailHeader from "../CustomerDetailHeader";
import StringConstants from "shared/localization";
import { Colors } from "commonStyles/RNColor.style";
import CustomButton from "components/CustomButton";
import fonts from "@fonts";
import RepresentativeDetails from "./RepresentativeDetails";
interface RepresenatativeProps {
  addDetails: Function;
  ref?:any
}
const CustomerRepresentative = ({ addDetails}: RepresenatativeProps,ref:any) => {
  const [customerRepresentative,setCustomerRepresentative]=useState<boolean>(false);


  useImperativeHandle(ref,() => {
    return {setDetails:()=>{setCustomerRepresentative(false)}}
  }

  )
  return (
    <SafeAreaView>
{ !customerRepresentative?
<>
      <CustomerDetailHeader
        heading={StringConstants.ADD_CUSTOMER_REP}
        CurrentScreen={2}
        topheading={StringConstants.CREATE_CUSTOMER_PROFILE}
      />

      <View style={{ paddingHorizontal: 20 }}>
        <CustomButton
          text={StringConstants.PLUS__CUSTOMER_REP}
          buttonStyle={{
            backgroundColor: Colors.dashed,
            justifyContent: "flex-start",
          }}
          textStyle={{ fontFamily: fonts.type.regular }}
          onPress={()=>{addDetails(true);setCustomerRepresentative(true)}}
        />
      </View>
      </>:
      <RepresentativeDetails/>
      

        }
    </SafeAreaView>
  );
};

export default forwardRef(CustomerRepresentative);
