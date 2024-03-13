import React, { forwardRef, useImperativeHandle, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Styles from "./Style";
import RepresentativeDetails from "./RepresentativeDetails";
import Glyphs from "assets/Glyphs";
import CustomerDetailHeader from "./CustomerDetailHeader";
import StringConstants from "shared/localization";
import TextWrapper from "components/TextWrapper";
interface RepresenatativeProps {
  SetFooter: Function;
  ref: any;
}
const CustomerRepresentative = forwardRef(
  ({  SetFooter }: RepresenatativeProps, ref) => {
    const [customerRepresentative, setCustomerRepresentative] =
      useState<boolean>(true);
    const [representativeAddStatus, setrepresentativeAddStatus] =
      useState<boolean>(true);

    function handleClick() {
      setCustomerRepresentative(true);
      setrepresentativeAddStatus(true);
    }

    useImperativeHandle(ref, () => ({
      Clicked: handleClick,
    }));

    return (
      <SafeAreaView>
        {customerRepresentative ? (
          <View>
             <CustomerDetailHeader heading={StringConstants.ADD_CUSTOMER_REP} CurrentScreen={2} topheading={StringConstants.CREATE_CUSTOMER_PROFILE}/>
            {!representativeAddStatus ? (
              <TouchableOpacity
                style={Styles.addRepresentativeBtn}
                onPress={() => {
                  setCustomerRepresentative(false);
                  SetFooter("Representative");
                }}
              >
                <Image
                  style={[{ marginLeft: 24, marginTop: 21 }]}
                  source={Glyphs.Add}
                />
                <TextWrapper style={Styles.addBtnText}>
                  Add Customer Representative
                </TextWrapper>
              </TouchableOpacity>
            ) : (
              <View style={{paddingHorizontal:20}}>
                <TouchableOpacity
                  style={[
                    Styles.addRepresentativeBtn,
                    {
                      backgroundColor: "#F9F9FC",
                      borderStyle: "dashed",
                      borderColor: "#233972",
                      borderWidth: 1,
                    },
                  ]}
                  onPress={() => {
                    setCustomerRepresentative(false);
                    SetFooter("Representative");
                  }}
                >
                  <Text
                    style={[Styles.addBtnText]}
                  >
                    Customer Representative 1
                  </Text>
                  <Image
                    source={Glyphs.Edit}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    Styles.addRepresentativeBtn,
                    // { backgroundColor: "#F9F9FC" },
                  ]}
                  onPress={() => {
                    setCustomerRepresentative(false);
                    SetFooter("Representative");
                  }}
                >
                  <Image
                    source={Glyphs.Add}
                  />
                  <Text style={Styles.addBtnText}>
                    {" "}
                    Add Customer Representative
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ) 
        : (
          
          <RepresentativeDetails
            SetFooter={SetFooter}
          />
        )
        }
      </SafeAreaView>
    );
  },
);
export default CustomerRepresentative;
