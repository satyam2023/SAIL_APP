import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BottomTabVisibility } from "redux/actions/UIAction";
import StringConstants from "shared/localization";
import CreateCustomerScreen from "views/createCustomerProfile/CreateCustomerScreen";

const CreateCustomerViewModel = () => {
  const [CurrentScreen, setCurrentScreen] = useState<number>(1);
  const [addDetailStatus, setAddDetailsStatus] = useState<boolean>(false);
  const dispatch = useDispatch();
  useFocusEffect(() => {
    dispatch(BottomTabVisibility(false));
    return () => dispatch(BottomTabVisibility(true));
  });

  function handleScreenChange(direction: string) {
    switch (direction) {
      case StringConstants.FORWARD:
        if (CurrentScreen >= 1 && CurrentScreen <= 3)
          setCurrentScreen(CurrentScreen + 1);
        break;
      case StringConstants.BACKWARD:
        if (CurrentScreen > 1 && CurrentScreen <= 3)
          setCurrentScreen(CurrentScreen - 1);
        break;
    }
  }

  const addDetails = (param: boolean) => {
    setAddDetailsStatus(param);
  };

  return (
    <>
      <CreateCustomerScreen
        CurrentScreen={CurrentScreen}
        addDetails={addDetails}
        handleScreenChange={(direction: string) =>
          handleScreenChange(direction)
        }
        addDetailStatus={addDetailStatus}
        
      />
    </>
  );
};

export default CreateCustomerViewModel;
