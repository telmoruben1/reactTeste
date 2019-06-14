import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import user from "./userReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  user,
  courses,
  authors,
  apiCallsInProgress
});

export default rootReducer;
