import React, {  } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer, useRoute,
} from "@react-navigation/native";
import {
  createBottomTabNavigator, useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";

import { SCREENS } from "@shared-constants";
import { LightTheme, DarkTheme, palette } from "@theme/themes";
import HomeScreenViewModel from "../viewModels/HomeScreenViewModel";
import { useSelector } from "react-redux";
import { RootState } from "redux/store/Store";
import SignInViewModel from "viewModels/SignInViewModel";
import { isReadyRef, navigationRef } from "@navigation";
import SignUpScreenViewMOdel from "viewModels/SignUpViewModel";
import MainScreenViewModel from "viewModels/MainScreenViewModel";
import Glyphs from "assets/Glyphs";
import BottomTabIcon from "components/BottomTabIcons/BottomTabIcon";
import MessageScreenViewModel from "viewModels/MessageScreenViewModel";
import VisitScreenViewModel from "viewModels/VisitScreenViewModel";
import EnquiryViewModel from "viewModels/EnquiryViewModel";
import ProductCatalougeViewModel from "viewModels/ProductCatalougeViewModel";
import TabButton from "components/TabButton/TabButton";
import { Colors, blue } from "commonStyles/RNColor.style";
import MoreOptionsViewModel from "viewModels/MoreOptionsViewModel";
import CMSViewModel from "viewModels/CMSViewModel";
import NotificationViewModel from "viewModels/NotificationViewModel";
import SettingViewModel from "viewModels/SettingViewModel";
import BottomDrawer from "views/moreOptions/BottomDrawer/BottomDrawer";
import CreateVisitPlanViewModel from "viewModels/CreateVisitPlanModel";
import CreateMetingDetailsViewModel from "viewModels/CreateMeetingDetailsViewModel";
import ViewCustomerProfileViewModel from "viewModels/ViewCustomerProfileViewModel";
import CreateCustomerViewModel from "viewModels/CreateCustomerViewModel";
import { Image, View } from "react-native";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();


const TabIcon = (route: any, focused: boolean) => {
  const getTabIcon = (tabRoute: any) => {
    switch (tabRoute) {
      case SCREENS.MAINSTACK:
        return (
          <BottomTabIcon image={focused ? Glyphs.Home : Glyphs.HomeDull} />
        );
      case SCREENS.PRODUCTCATALOUGE:
        return (
          <BottomTabIcon image={focused ? Glyphs.ShopClicked : Glyphs.Shop} />
        );
      case SCREENS.ENQUIRY:
        return (
          <BottomTabIcon
            image={focused ? Glyphs.Profile2userClicked : Glyphs.Profile2User}
          />
        );
      case SCREENS.CMS:
        return (
          <BottomTabIcon
            image={focused ? Glyphs.Setting2Clicked : Glyphs.Setting2}
          />
        );
      case SCREENS.MOREOPTIONS:
        return focused ? <View /> : <View />;
      default:
        return <></>;
    }
  };
  return getTabIcon(route.name);
};


           


const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name={SCREENS.MAIN} component={MainScreenViewModel} />
      <HomeStack.Screen
        name={SCREENS.MESSAGE}
        component={MessageScreenViewModel}
      />
      <HomeStack.Screen
        name={SCREENS.NOTIFICATION}
        component={NotificationViewModel}
      />
      <HomeStack.Screen name={SCREENS.VISIT} component={VisitScreenViewModel} />
      <HomeStack.Screen name={SCREENS.SETTING} component={SettingViewModel} />
      <HomeStack.Screen name={SCREENS.CREATE_VISIT_PLAN} component={CreateVisitPlanViewModel} />
      <HomeStack.Screen name={SCREENS.CREATE_CUSTOMER_VIEW_MODEL} component={CreateCustomerViewModel} />
      <HomeStack.Screen name={SCREENS.CREATE_MEETING_DETAILS} component={CreateMetingDetailsViewModel} />
      <HomeStack.Screen name={SCREENS.VIEW_CUSTOMER_PROFILE} component={ViewCustomerProfileViewModel} />
    </HomeStack.Navigator>
  );
};

const RenderTabNavigation = () => {
  // const bottomTabheight=useBottomTabBarHeight();
  const isDarkMode = useSelector(
    (state: RootState) => state.themeReducer.isDarkMode,
  );
  const isModalVisible=useSelector((state: any) => state.UIReducer.modalVisibility);
  const isTabVisible=useSelector((state: any) => state.UIReducer.tabVisibiity);

  console.log("TAb Visible onside TAb route:::",isTabVisible)
  return (
<>
    
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => TabIcon(route, focused),
        tabBarActiveTintColor: blue,
        tabBarInactiveTintColor: "gray",
        tabBarBackground:()=>{
          return<Image source={Glyphs.BottomTabBar}  style={{width:'100%',resizeMode:'contain',bottom:15}}/>
        },
        tabBarStyle: {
          backgroundColor: isDarkMode ? Colors.transparent : Colors.transparent,
          display:!isTabVisible
        },
        tabBarLabel: () => {
          return null;
        },
      })}
    >
      <Tab.Screen name={SCREENS.MAINSTACK} component={HomeStackNavigator} />
      <Tab.Screen
        name={SCREENS.PRODUCTCATALOUGE}
        component={ProductCatalougeViewModel}
      />
      <Tab.Screen
        name={SCREENS.MOREOPTIONS}
        component={MoreOptionsViewModel}
        options={{
          tabBarButton: () => {
            return <TabButton />;
          },
        }}
      />
      <Tab.Screen name={SCREENS.ENQUIRY} component={EnquiryViewModel} />
      <Tab.Screen name={SCREENS.CMS} component={CMSViewModel} />
    </Tab.Navigator>

      {isModalVisible
        ?<BottomDrawer/>:<></>
      }

</>
    
  );
};

const Navigation = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.themeReducer.isDarkMode,
  );
  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      theme={isDarkMode ? DarkTheme : LightTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.HOME} component={HomeScreenViewModel} />
        <Stack.Screen name={SCREENS.SIGNUP} component={SignUpScreenViewMOdel} />
        <Stack.Screen name={SCREENS.SIGNIN} component={SignInViewModel} />
        <Stack.Screen name={SCREENS.TAB} component={RenderTabNavigation} />
        {/* <Stack.Screen name={SCREENS.MESSAGE} component={MessageScreenViewModel} />
        <Stack.Screen name={SCREENS.NOTIFICATION} component={NotificationViewModel} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
