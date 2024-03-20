import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import HomeScreen from "views/home/HomeScreen";
import { Colors } from "commonStyles/RNColor.style";
import { useSelector } from "react-redux";
import { fetchHomeData } from "redux/actions/HomeAction";
import { useDispatch } from "react-redux";
import { IApiResponse } from "models/IApiResponse";
import { HomeResponse } from "models/HomeResponse";

const HomeScreenViewModel = () => {
  const dispatch = useDispatch();
  let userData = useSelector((state: any) => state.userAccount.data.data);
  useEffect(handleHomeApiCall, []);

  function handleHomeApiCall() {
    const fetchHome = async () => {
      try {
        const res: IApiResponse<HomeResponse> = await fetchHomeData(dispatch);
        console.log("Response in HomeDataAPI::::", res);
      } catch (error) {
      } finally {
      }
    };

    fetchHome();
  }

  return (
    <SafeAreaView style={{ backgroundColor: Colors.sailBlue, flex: 1 }}>
      <HomeScreen
        {...{
          userData,
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreenViewModel;

function useFocusEffect(handleHomeApiCall: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
