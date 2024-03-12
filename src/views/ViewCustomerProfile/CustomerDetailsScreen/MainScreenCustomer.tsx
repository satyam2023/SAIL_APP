import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import ProfileHeader from "../Component/ProfileHeader";
import ProfileFooter from "../Component/ProfileFooter";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import LastScreen from "./LastScreen";
import Header from "components/HeaderForMainScreen/HeaderMain";
import AddCompetitor from "./CompetitorDetails/AddCompetitor";
import { useDispatch, useSelector } from "react-redux";
import RepresentativeDetails from "./RepresentativeDetails/RepresentativeDetails";
import RepresentativeFooter from "./RepresentativeDetails/RepresentativeFooter";
import { BottomTabVisibility } from "redux/actions/UIAction";
import { useFocusEffect } from "@react-navigation/native";
import StringConstants from "shared/localization";
import { Colors } from "commonStyles/RNColor.style";
import CustomFooter from "components/CustomFooter";

const MainScreenCustomer = () => {
  const dispatch = useDispatch();
  useFocusEffect(() => {
    dispatch(BottomTabVisibility(false));
    return () => dispatch(BottomTabVisibility(true));
  });
  const [CurrentScreen, setCurrentScreen] = useState<number>(1);
  const [Competitor, setCompetitorStatus] = useState<boolean>(false);
  const [Reprsentative, setRepresentative] = useState<boolean>(false);
  function CompetitorScreen(param: boolean) {
    setCompetitorStatus(param);
  }

  function RepresentativeScreen(param: boolean) {
    setRepresentative(param);
  }

  const handleBackClick=()=>{
    if(CurrentScreen>1 && CurrentScreen<=3)
        setCurrentScreen(CurrentScreen-1)
  }

  const handleForwardClick=()=>{
    if(CurrentScreen>=1 && CurrentScreen<=3)
    setCurrentScreen(CurrentScreen+1)
  }

  const competitor = useSelector(
    (state: any) => state.UIReducer.CompetitorButtonStatus,
  );

  return (
    <View style={{flex:1}}>
      {!competitor ? (
        <View style={{flex:1}}>
          {CurrentScreen != 4 ? (
            <View style={{ backgroundColor: Colors.background2, flex: 1,flexGrow:1 }}>
              <ProfileHeader CurrentScreen={CurrentScreen} />
              <ScrollView
                style={
                  CurrentScreen == 1
                    ? { top: 258, width: "100%", marginBottom: 250 }
                    : { top: 180, width: "100%", marginBottom: 250 }
                }
              >
                {CurrentScreen == 1 && <First />}
                {CurrentScreen == 2 && (
                  <Second RepresentativeScreen={RepresentativeScreen} />
                )}
                {CurrentScreen == 3 && (
                  <Third CompetitorScreen={CompetitorScreen} />
                )}
              </ScrollView>
              <CustomFooter
                firstButtonText={
                  CurrentScreen == 1
                    ? StringConstants.EDT
                    : StringConstants.BACK
                }
                secondButtonText={
                  CurrentScreen == 3
                    ? StringConstants.SUBMIT
                    : StringConstants.PROCEED
                }
                firstButtonPress={handleBackClick}
                secondButtonPress={handleForwardClick}
                 style={{backgroundColor:Colors.white,bottom:'-2%'}}
              />
            </View>
          ) : (
            <LastScreen />
          )}
        </View>
      ) : (
        <>
          <Header topheading={StringConstants.CUSTOMER_VIEW_PROFILE} />
          {Competitor && <AddCompetitor />}
          {Reprsentative && (
            <>
              <RepresentativeDetails />
              <RepresentativeFooter
                RepresentativeScreen={RepresentativeScreen}
              />
            </>
          )}
        </>
      )}
    </View>
  );
};

export default MainScreenCustomer;
