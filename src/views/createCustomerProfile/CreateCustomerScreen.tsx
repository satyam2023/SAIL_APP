import React, { useRef, useState } from "react";
import CustomerDetails from "./CustomerDetails";
import { ScrollView } from "react-native";
import CustomerRepresentative from "./CustomerRepresentative/CustomerRepresentative";
import RegistrationCompleted from "./RegistrationCompleted/RegistrationCompleted";
import StringConstants from "shared/localization";
import Competitor from "./Competitor/Competitor";
import { Colors } from "commonStyles/RNColor.style";
import { CustomFooter, SafeAreaContainer } from "components";

const CreateCustomerScreen = () => {
  const [CurrentScreen, setCurrentScreen] = useState<number>(1);
  const [adddetails, setAddDetails] = useState<boolean>(false);
  const setForwardScreen = () => {
    if (CurrentScreen >= 1 && CurrentScreen <= 3)
      setCurrentScreen(CurrentScreen + 1);
  };

  const setBackWardScreen = () => {
    if (CurrentScreen > 1 && CurrentScreen <= 3)
      setCurrentScreen(CurrentScreen - 1);
  };

  const addDetails = (param: boolean) => {
    setAddDetails(param);
  };

  const CustomerRepresentativeRef = useRef<any>(null);

  return (
    <SafeAreaContainer backgroundColor={Colors.background2}>
      <ScrollView style={{ backgroundColor: Colors.background, flex: 1 }}>
        {CurrentScreen == 1 && <CustomerDetails/>}
        {CurrentScreen == 2 && (
          <CustomerRepresentative
            addDetails={addDetails}
            ref={CustomerRepresentativeRef}
          />
        )}
        {CurrentScreen == 3 && (
          <Competitor addDetails={addDetails} ref={CustomerRepresentativeRef} />
        )}
        {CurrentScreen == 4 && <RegistrationCompleted />}
      </ScrollView>

      {CurrentScreen <= 3 && (
        <>
          {!adddetails ? (
            <CustomFooter
              leftButtonText={StringConstants.CANCEL}
              rightButtonText={StringConstants.SAVE_PROCEED}
              leftButtonPress={setBackWardScreen}
              rightButtonPress={setForwardScreen}
              isTracker={`${CurrentScreen * 34}%`}
            />
          ) : (
            <CustomFooter
              leftButtonText={
                CurrentScreen == 2
                  ? StringConstants.ADD_CUSTOMER_REP
                  : StringConstants.ADD_COMPETITOR
              }
              leftButtonPress={() => {
                addDetails(false);
                CustomerRepresentativeRef.current?.setDetails();
              }}
              singleButtonOnFooter
            />
          )}
        </>
      )}
    </SafeAreaContainer>
  );
};
export default CreateCustomerScreen;
