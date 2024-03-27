import {
  SET_EXECUTED_VISITS,
    SET_PLANNED_VISITS,
    SET_UPCOMING_VISITS,
  } from "../actionConstants";
  
  const INITIAL_STATE = {
    upcoming: [],
    planned: [],
    executed: [],
    visitedExecutiveList: [],
  };
  
  const visitsReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
      case SET_UPCOMING_VISITS: {
        return {
          ...state,
          upcoming: action.payload,
        };
      };
      case SET_PLANNED_VISITS: {
        return {
          ...state,
          planned: action.payload,
        };
      }
      case SET_EXECUTED_VISITS: {
        return {
          ...state,
          executed: action.payload,
        };
      }
      default:
        return state;
    }
  };
  export default visitsReducer;
  