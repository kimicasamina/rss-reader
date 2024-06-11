import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "./ui";

const rootReducer = combineReducers({
  ui: uiReducer,
});

export default rootReducer;
