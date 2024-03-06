import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import themeReducer from "../reducers/ThemeReducer";
import reduxStorage from "core/redux-storage";
import accountReducer from "redux/reducers/AccountReducer";
import { DESTROY_SESSION } from "redux/actionConstants";
import UIReducer from "redux/reducers/UIReducer";
const middleware = applyMiddleware(thunk);

const reducers = combineReducers({
  userAccount: accountReducer,
  themeReducer: themeReducer,
  UIReducer:UIReducer
});

//* white list only those reducers which needs to be stored locally.
const persistConfig = {
  key: "@boiler",
  storage: reduxStorage,
  whitelist: ["themeReducer"],
};

const rootReducer = (state, action) => {
  if (action.type === DESTROY_SESSION) state = undefined;
  return reducers(state, action);
};
const presistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(presistedReducer, undefined, middleware);
const persistor = persistStore(store);
export type RootState = ReturnType<typeof reducers>;
export { persistor, store };
