import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.CREATE_USER_SUCCESS:
      console.log("chegou reducer");
      return [...state, {...action.user}];
    default:
      return state;
  }
}