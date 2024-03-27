import { useFocusEffect } from "@react-navigation/native";
import { NotificationResponse } from "models/ApiResponses/NotificationResponse";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotificationData } from "redux/actions/NotificationAction";
import { BottomTabVisibility } from "redux/actions/UIAction";
import { RootState, store } from "redux/store/Store";
import NotificationScreen from "views/notification/Notification";

const NotificationViewModel = () => {
  const dispatch = useDispatch();
  useFocusEffect(() => {
    dispatch(BottomTabVisibility(false));
    return () => dispatch(BottomTabVisibility(true));
  });
  useEffect(() => {
    fetchNotificationData(dispatch);
  },[]);

  const notificationData: NotificationResponse = useSelector(
    (state: RootState) => state?.notification?.data?.data,
  );
  console.log()
  return <NotificationScreen {...{ notificationData }} />;
};

export default NotificationViewModel;
