import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import HomeScreen from "views/home/HomeScreen";
import { Colors } from "commonStyles/RNColor.style";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "redux/store/Store";
import { handleHomeApiCall, setMasterData } from "controllers/homeController";

const HomeScreenViewModel = () => {
  const dispatch = useDispatch();
  const userData = useSelector(
    (state: RootState) => state.userAccount.data.data,
  );
  const homeScreenData = useSelector(
    (state: RootState) => state?.home?.data?.data,
  );

  const handleListClick = () => {};

  useEffect(() => {
    handleHomeApiCall(dispatch), setMasterData(dispatch);
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: Colors.sailBlue, flex: 1 }}>
      <HomeScreen
        {...{
          userData,
          homeScreenData,
          handleListClick,
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreenViewModel;
