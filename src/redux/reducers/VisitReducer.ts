import {
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
      }
      default:
        return state;
    }
  };
  export default visitsReducer;
  