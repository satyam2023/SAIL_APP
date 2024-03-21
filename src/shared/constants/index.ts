import Glyphs from "assets/Glyphs";
import { Colors } from "commonStyles/RNColor.style";
import { ImageURISource } from "react-native";
import StringConstants from "shared/localization";

export const SCREENS = {
  ONBOARDING: "OnBoarding",
  DASHBOARD: "Dashboard",
  SEARCH: "Search",
  NOTIFICATION: "Notification",
  PROFILE: "Profile",
  DETAIL: "Detail",
  LOGIN: "Login",
  TAB: "Tab",
  SIGNUP: "Signup",
  SIGNIN: "SignIn",
  MAIN: "Main",
  MAINSTACK: "MainStack",
  MESSAGE: "Message",
  VISIT: "Visit",
  ENQUIRY: "Enquiry",
  CMS: "CMS",
  PRODUCTCATALOUGE: "ProductCatalouge",
  MOREOPTIONS: "MoreOptions",
  SETTING: "Setting",
  CREATE_VISIT_PLAN: "Create_Visit_Plan",
  CREATE_CUSTOMER_VIEW_MODEL: "Create_Customer_View_Model",
  CREATE_MEETING_DETAILS: "Create_Meeting_Details",
  VIEW_CUSTOMER_PROFILE: "View_Customer_Profile",
};

export interface ICMSPageData {
  pageName: string;
}
export const CMSPageData = [
  { pageName: StringConstants.ABOUT_US },
  { pageName: StringConstants.CONTACT_US },
  { pageName: StringConstants.PRIVACY },
  { pageName: StringConstants.FAQS },
  { pageName: StringConstants.TERMS_AND_CONDITIONS },
];

export interface IFaqData {
  faq: string;
}

export const FAQSData = [
  { faq: StringConstants.HOW_I_GET_ENLISTED },
  { faq: StringConstants.THIRD_PARTIES },
  { faq: StringConstants.INFORMATION_MEANS },
  { faq: StringConstants.THIRD_PARTIES },
  { faq: StringConstants.INFORMATION_MEANS },
  { faq: StringConstants.HOW_I_GET_ENLISTED },
  { faq: StringConstants.NOT_DISCOSURE },
  { faq: StringConstants.INFORMATION_MEANS },
];

export const CompetitorDetailData = [
  StringConstants.ENTER_COMPANY_NAME,
  StringConstants.ENTER_ADDRESS,
  StringConstants.ENTER_COMMENTS,
];

export const RepresentativeDetailInputFieldData = [
  StringConstants.ENTER_NAME,
  StringConstants.ENTER_DESIGNATION,
  StringConstants.ENTER_DEPARTMENT,
  StringConstants.ENTER_ADDRESS,
  StringConstants.ENTER_EMAIL_ADDRESS,
  StringConstants.ENETR_CONTACTNO,
];

export const CustomerDetailInputField = [
  StringConstants.CUSTOMER_CODE,
  StringConstants.ENTER_COMPANY_NAME,
  StringConstants.CUSTOMER_SEG,
  StringConstants.CUSTOMER_SUB_SEG,
  StringConstants.CUSTOMER_TYPE,
  StringConstants.CUSTOMER_SUB_TYPE,
  StringConstants.CUSTOMER_SEG,
  StringConstants.SELECT_STATUS_CUSTOMER,
  StringConstants.ENTER_PAN_CARD,
  StringConstants.ENTER_GST,
  StringConstants.WEBSITE_LINK,
  StringConstants.SELECT_LOCATION,
];

export const MeetingHeaderData = [
  {
    heading: StringConstants.FOR_PLANNED_VISIT,
    backgroundColor: {
      focus: Colors.sailBlue,
      notfocus: Colors.aquaHaze,
    },
    textColor: {
      focus: Colors.white,
      notfocus: Colors.sailBlue,
    },
  },
  {
    heading: StringConstants.FOR_UNPLANNED_VISIT,
    backgroundColor: {
      focus: Colors.sailBlue,
      notfocus: Colors.aquaHaze,
    },
    textColor: {
      focus: Colors.white,
      notfocus: Colors.sailBlue,
    },
  },
];

export const EnquiryHeaderData = [
  {
    heading: StringConstants.USER_ENQUIRY,
    backgroundColor: {
      focus: Colors.sailBlue,
      notfocus: Colors.aquaHaze,
    },
    textColor: {
      focus: Colors.white,
      notfocus: Colors.sailBlue,
    },
  },
  {
    heading: StringConstants.ISSUE_ENQUIRY,
    backgroundColor: {
      focus: Colors.sailBlue,
      notfocus: Colors.aquaHaze,
    },
    textColor: {
      focus: Colors.white,
      notfocus: Colors.sailBlue,
    },
  },
  {
    heading: StringConstants.NEARBY_CUSTOMERS,
    backgroundColor: {
      focus: Colors.sailBlue,
      notfocus: Colors.aquaHaze,
    },
    textColor: {
      focus: Colors.white,
      notfocus: Colors.sailBlue,
    },
  },
];

export const UnplannedMeetingInputField = [
  StringConstants.CUSTOMER_TYPE,
  StringConstants.CUSTOMER_CODE,
  StringConstants.CUSTOMER_STATUS,
  StringConstants.ENTER_COMPANY_NAME,
  StringConstants.ENTER_PERSONAL_NAME,
  StringConstants.ENTER_DESIGNATION,
  StringConstants.ENTER_ADDRESS,
  StringConstants.ENETR_WHATSAPP_NO,
  StringConstants.SELECT_DEP,
  StringConstants.ENTER_NAME_NUMBER,
  StringConstants.SELECT_REASON,
  StringConstants.SELECT_ISSUE,
  StringConstants.CUSTOMER_MODE,
  StringConstants.SELECT_CUSTOMER_CONTACT_DETAILS,
];

export const CreateVisitPlanField = [
  StringConstants.ENTER_CUSTOMER_CODE,
  StringConstants.ENTER_NAME,
  StringConstants.ENTER_NICK_NAME,
  StringConstants.CUSTOMER_REGION,
  StringConstants.SELECT_VISITING_EXECUTIVE,
  StringConstants.SELECT_REASON,
  StringConstants.SELECT_MODE_OF_CONTACT,
];

export interface IBottomModalTab{
heading:string,
image:ImageURISource

}

export const BottomModalTab = [
  { heading: StringConstants.CREATE_VISIT_PLAN, image: Glyphs.CreateVisit },
  {
    heading: StringConstants.CREATE_CUSTOMER_PROFILE,
    image: Glyphs.CustomerProfile,
  },
  {
    heading: StringConstants.CREATE_MEETING_DETAILS,

    image: Glyphs.CreateMeeting,
  },
  {
    heading: StringConstants.VIEW_CUSTOMER_PROFILE,
    image: Glyphs.CreateVisit,
  },
];

export const VisitHeaderData = [
  {
    heading: StringConstants.UPCOMING,
    number: 23,
    backgroundColor: {
      focus: Colors.darkMilkWhite,
      notfocus: Colors.milkWhite,
    },

    textColor: {
      notfocus: Colors.darkMilkWhite,
      focus: Colors.milkWhite,
    },
  },

  {
    heading: StringConstants.PLANNED,
    number: 23,
    backgroundColor: {
      focus: Colors.sailBlue,
      notfocus: Colors.aquaHaze,
    },
    textColor: {
      notfocus: Colors.sailBlue,
      focus: Colors.white,
    },
  },

  {
    heading: StringConstants.EXECUTED,
    number: 23,
    backgroundColor: {
      focus: Colors.green,
      notfocus: Colors.tealishGreen,
    },
    textColor: {
      focus: Colors.white,
      notfocus: Colors.green,
    },
  },
];

export interface IInformationList
{
   image_url:ImageURISource,
   name:string
}

export const CustomerInformation=[
  {
      image_url:Glyphs.Customer,
      name:StringConstants.SALES_ORDER
  },
  {
    image_url:Glyphs.Customer,
    name:StringConstants.DIRECT_DISPATCH
  },
  {
    image_url:Glyphs.Customer,
    name:StringConstants.MOU_STATUS
  },
  {
    image_url:Glyphs.Customer,
    name:StringConstants.DUE_AND_OVERDUE
  },
  {
    image_url:Glyphs.Customer,
    name:StringConstants.LAST_VISIT_DETAIL
  },
  {
    image_url:Glyphs.Customer,
    name:StringConstants.OFF_TAKE_REPORT
  },
  {
    image_url:Glyphs.Customer,
    name:StringConstants.LC_BG
  },
  {
    image_url:Glyphs.Customer,
    name:StringConstants.QUALITY_COMPLAIN
  }
];

export const Category=[
  {

  },
  {

  }
];
