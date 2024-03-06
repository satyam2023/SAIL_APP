import { isPlatformAndroid } from "@config/Helpers";
import { SCREEN_WIDTH } from "@theme/Metrices";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bottomNav: {
    width: SCREEN_WIDTH,
    height: isPlatformAndroid() ? 96 : 144,
  },
  customerSuccess: {
    height: "30%",
    width: "100%",
    resizeMode: "contain",
  },
  meetingSuccess: {
    height: "35%",
    resizeMode: "contain",
  },
});

const Images = {
  BOTTOM_TAB_BG: {
    source: require("@assets/images/bottom_nav.png"),
    style: styles.bottomNav,
  },
  VISIT_SUCCESS: {
    source: require("@assets/images/visit_plan.png"),
    style: {},
  },
  LOGO: {
    //eslint-disable-next-line import/extensions
    source: require("@assets/images/loader.gif"),
    style: {
      width: 60,
      height: 60,
      resizeMode: "contain",
    },
  },
  CUSTOMER_SUCCESS: {
    source: require("@assets/images/customer_success.png"),
    style: styles.customerSuccess,
  },
  MEETING_SUCCESS: {
    source: require("@assets/images/create_meeting.png"),
    style: styles.meetingSuccess,
  },
};

export default Images;
