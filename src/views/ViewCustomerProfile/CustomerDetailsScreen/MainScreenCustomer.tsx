import React, { useState } from "react";
import {  ScrollView,View } from "react-native";
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
interface MainScreenCustomerProps {
  props: any;
}

const MainScreenCustomer: React.FC<MainScreenCustomerProps> = ({
  props,
}: MainScreenCustomerProps) => {
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
  function setScreen(param: number) {
    setCurrentScreen(param);
  }

  const competitor = useSelector(
    (state: any) => state.UIReducer.CompetitorButtonStatus,
  );

  return (
    <>
      {!competitor ? (
        <>
          {CurrentScreen != 4 ? (
            <View style={{ backgroundColor: "#F9F9FC" ,flex:1}}>
              <ProfileHeader
                navigationProps={props}
                CurrentScreen={CurrentScreen}
              />
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
              <ProfileFooter
                CurrentScreen={CurrentScreen}
                setScreen={setScreen}
              />
            </View>
          ) : (
            <LastScreen  />
          )}
        </>
      ) : (
        <>
          <Header topheading={"View Customer Profile"} />
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
    </>
  );
};

export default MainScreenCustomer;
