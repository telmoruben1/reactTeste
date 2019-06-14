import * as types from "./actionTypes";
import * as userApi from "../../api/userApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function createUserSuccess(user) {
  return { type: types.CREATE_USER_SUCCESS, user };
}
export function saveUser(user) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return userApi
      .saveUser(user)
      .then(savedUser => {
        dispatch(createUserSuccess(savedUser));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}