import * as types from "./actionTypes";
import {  apiCallError } from "./apiStatusActions";

const baseUrl = "http://localhost:3002/request";

const serialize = (obj) => {
  let string = '';
  for (const key in obj) {
    string += `${key}=${obj[key]}&`;
  }

  return string;
};

export function createUserSuccess(dataUser) {
  return { type: types.CREATE_USER_SUCCESS, dataUser };
}

export function loginUser(user) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //eslint-disable-next-line no-unused-vars
  return function(dispatch) {
    return fetch(baseUrl, {
      method: "POST", // POST for create, PUT to update when id already exists.
      body: serialize({ email: 'telmo.ramos@acin.pt', password : 123123}),
      headers,
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
       
    })
    .catch(error => {
      console.log("entrou error fetch call");
      console.log(error);
      dispatch(apiCallError(error));
      throw error;
    });
  };
}
