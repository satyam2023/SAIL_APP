import { COMPEITITOR_BUTTON_TYPE, ENQUIRY_TYPE, MODAL_TYPE, PROFILE_BUTTON_TYPE, TAB_TYPE, VISIT_TYPE } from "../actionConstants";
import { IBaseReducerInterface } from "./IBaseReducerInterface";

const INITIAL_STATE = {
  visitType: 1,
  enquiryType:"User Enquiry",
  modalVisibility:false,
  tabVisibiity:true,
  CompetitorButtonStatus:false,
  CustomerProfileButton:false,

};

interface IUIReducer {
  visitType: number;
  enquiryType:string;
  modalVisibility:boolean;
  CompetitorButtonStatus:boolean;
  CustomerProfileButton:boolean;
}
const UIReducer = (
  state = INITIAL_STATE,
  action: IBaseReducerInterface<IUIReducer>,
) => {
  switch (action.type) {
    case VISIT_TYPE: {
      return {
        ...state,
        visitType: action.payload,
      };
    }
    case ENQUIRY_TYPE: {
      return {
        ...state,
        enquiryType:action.payload,
      };
    }
    case MODAL_TYPE: {
      return {
        ...state,
        modalVisibility:action.payload,
      };
    }
    case TAB_TYPE: {
      return {
        ...state,
        tabVisibiity:action.payload,
      };
    }
    case COMPEITITOR_BUTTON_TYPE: {
     
      return {
        ...state,
        CompetitorButtonStatus:action.payload
      };
    }
    case PROFILE_BUTTON_TYPE: {
     ;
      return {
        ...state,
        CustomerProfileButton:action.payload
      };
    }

    default:
      return state;
  }
};
export default UIReducer;
