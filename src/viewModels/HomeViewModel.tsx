import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import HomeScreen from "views/home/HomeScreen";
import { Colors } from "commonStyles/RNColor.style";
import { useSelector } from "react-redux";
import { fetchHomeData } from "redux/actions/HomeAction";
import { useDispatch } from "react-redux";
import { IApiResponse } from "models/ApiResponses/IApiResponse";
import { HomeResponse } from "models/ApiResponses/HomeResponse";
import { setLoaderVisibility } from "redux/actions/LoaderAction";
import { RootState } from "redux/store/Store";

const HomeScreenViewModel = () => {
  const dispatch = useDispatch();
  const userData = useSelector(
    (state: RootState) => state.userAccount.data.data,
  );
  const homeScreenData = useSelector(
    (state: RootState) => state?.home?.data?.data,
  );

  const handleListClick=()=>{

  }

  useEffect(() => handleHomeApiCall(), []);

  function handleHomeApiCall() {
    const fetchHome = async () => {
      dispatch(setLoaderVisibility(true));
      try {
        const res: IApiResponse<HomeResponse> = await fetchHomeData(dispatch);
        if (res?.isSuccess) {
        }
      } catch (error) {
      } finally {
        dispatch(setLoaderVisibility(false));
      }
    };

    fetchHome();
  }

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
