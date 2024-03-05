import { StyleSheet } from "react-native";
import { Colors } from "@theme";

const styles = StyleSheet.create({
  cross: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  profile: {
    width: 26,
    height: 26,
    resizeMode: "stretch",
    tintColor: Colors.sailBlue,
  },
  close: {
    width: 16,
    height: 16,
    resizeMode: "stretch",
  },
  forward: {
    height: 15,
    width: 9,
    resizeMode: "contain",
    alignSelf: "center",
  },
  callbg: {
    height: 32,
    width: 32,
    resizeMode: "contain",
    top: 10,
  },
  inbox: {
    width: 20,
    height: 16,
    resizeMode: "contain",
  },
  customerVisitIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    tintColor: Colors.sailBlue,
  },
  createVisit: {
    height: 36,
    width: 36,
    resizeMode: "contain",
  },
  locateMe: {
    height: 18,
    width: 18,
    resizeMode: "contain",
    alignSelf: "center",
  },
  plus: {
    height: 12,
    width: 12,
    resizeMode: "contain",
    alignSelf: "center",
    tintColor: Colors.darkGrey,
  },
  edit: {
    height: 16,
    width: 16,
    resizeMode: "contain",
    tintColor: Colors.sailBlue,
  },
  arrow: {
    height: 16,
    width: 16,
    resizeMode: "contain",
    tintColor: Colors.charcoalBlack,
  },
  call: {
    height: 16,
    width: 16,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

const Icons = {
  CROSS: {
    source: require("@assets/icons/cross.png"),
    style: styles.cross,
  },
  PROFILE: {
    source: require("@assets/icons/profile.png"),
    style: styles.profile,
  },
  CLOSE: {
    source: require("@assets/icons/close.png"),
    style: styles.close,
  },
  LOGOUT: {
    source: require("@assets/icons/logout.png"),
    style: styles.cross,
  },
  FORWARD: {
    source: require("@assets/icons/forward.png"),
    style: styles.forward,
  },
  CALL_BG: {
    source: require("@assets/icons/call_bg.png"),
    style: styles.callbg,
  },
  DATE_RANGE: {
    source: require("@assets/icons/date_range.png"),
    style: styles.close,
  },
  PENDING_ACTION: {
    source: require("@assets/icons/pending_actions.png"),
    style: styles.close,
  },
  INBOX: {
    source: require("@assets/icons/inbox.png"),
    style: styles.inbox,
  },
  USER: {
    source: require("@assets/icons/user.png"),
    style: styles.customerVisitIcon,
  },
  CUSTOMER_CODE: {
    source: require("@assets/icons/barcode.png"),
    style: styles.customerVisitIcon,
  },
  VISIT_DATE: {
    source: require("@assets/icons/visitDate.png"),
    style: styles.customerVisitIcon,
  },
  VISIT_REASON: {
    source: require("@assets/icons/reason.png"),
    style: styles.customerVisitIcon,
  },
  MEETING_MODE: {
    source: require("@assets/icons/meetingMode.png"),
    style: styles.customerVisitIcon,
  },
  LOCATION: {
    source: require("@assets/icons/near_me.png"),
    style: styles.customerVisitIcon,
  },
  CONTACT: {
    source: require("@assets/icons/call.png"),
    style: styles.customerVisitIcon,
  },
  EMAIL: {
    source: require("@assets/icons/email_id.png"),
    style: styles.customerVisitIcon,
  },
  CREATE_VISIT: {
    source: require("@assets/icons/create_visit.png"),
    style: styles.createVisit,
  },
  CREATE_CUSTOMER: {
    source: require("@assets/icons/create_customer.png"),
    style: styles.createVisit,
  },
  CREATE_MEETING: {
    source: require("@assets/icons/create_meeting.png"),
    style: styles.createVisit,
  },
  LOCATE_ME: {
    source: require("@assets/icons/locate_me.png"),
    style: styles.locateMe,
  },
  PLUS: {
    source: require("@assets/icons/plus.png"),
    style: styles.plus,
  },
  EDIT: {
    source: require("@assets/icons/edit.png"),
    style: styles.edit,
  },
  DOWNWARD: {
    source: require("@assets/icons/downward.png"),
    style: styles.arrow,
  },
  UPWARD: {
    source: require("@assets/icons/upwardArrow.png"),
    style: styles.arrow,
  },
  CALL: {
    source: require("@assets/icons/call_bg.png"),
    style: styles.call,
  },
};

export default Icons;
