import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "./ui";
import subscriptionReducer from "./subscription";

const rootReducer = combineReducers({
  ui: uiReducer,
  subscription: subscriptionReducer,
});

export default rootReducer;
