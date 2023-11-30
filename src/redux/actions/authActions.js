import * as ActionTypes from '../actionTypes';
//Firebase Signup
export const signupRequest = (email, password) => ({
  type: ActionTypes.signupRequest,
  payload: {email, password},
});

export const signupSuccess = () => ({
  type: ActionTypes.signupSuccess,
});

export const signupFailure = error => ({
  type: ActionTypes.signupFailure,
  payload: error,
});
//Firebase login
export const loginRequest = (email, password) => ({
  type: ActionTypes.loginRequest,
  payload: {email, password},
});

export const loginSuccess = email => ({
  type: ActionTypes.loginSuccess,
  payload: email,
});

export const loginFailure = error => ({
  type: ActionTypes.loginFailure,
  payload: error,
});
