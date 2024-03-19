
import { SET_USER_DATA, UPDATE_USER_DATA } from "../actionConstants";
import { IBaseReducerInterface } from "./IBaseReducerInterface";


const INITIAL_STATE = {
  data: {
    user: {
    },
  },
};

interface IAccountReducer{
  email: string;
  user_location: string;
  user_role: string;
  user_role_name:string;
}


const accountReducer = (state = INITIAL_STATE, action: IBaseReducerInterface<IAccountReducer>) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case UPDATE_USER_DATA: {
      return {
        ...state,
        data: {
          ...state.data,
          user: {
            ...state.data.user,
            email: action.payload.email,
            user_location: action.payload.user_location,
            user_role: action.payload.user_role,
            user_role_name:action.payload.user_role_name,
          },
        },
      };
    }

    default:
      return state;
  }
};
export default accountReducer;
