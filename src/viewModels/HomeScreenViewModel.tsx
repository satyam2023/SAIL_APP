import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";

// import { SCREENS } from "@shared-constants";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "redux/store/Store";
// import { IApiResponse } from "models/IApiResponse";
// import { User } from "models/UserModel";
// import { setAllUsers } from "redux/actions/AccountAction";
// import { push } from "@navigation";
// import { getUserDetail } from "@controllers";
import  HomeScreen from "views/homes/Home";




const HomeScreenViewModel = () => {
  // const dispatch = useDispatch();
  // const userData = useSelector((state: RootState) => state.userAccount);
 
  // useEffect(() => {
  //   getUserData();
  // },[]);
  // const getUserData = async () => {
  //   const res: IApiResponse<User> = await getUserDetail();
  //   if (res.isSuccess) dispatch(setAllUsers(res.data));
  // };
  // const handleItemPress = () => {
  //   push(SCREENS.DETAIL);
  // };

  return (
    

    <HomeScreen/>
 
    
  );
};

export default HomeScreenViewModel;
